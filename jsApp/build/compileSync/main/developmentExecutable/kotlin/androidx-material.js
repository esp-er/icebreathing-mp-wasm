(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-ui.js', './androidx-ui-unit.js', './kotlin-kotlin-stdlib-js-ir.js', './androidx-foundation-layout.js', './androidx-animation-core.js', './androidx-runtime.js', './androidx-foundation.js', './androidx-ui-graphics.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './androidx-ui-geometry.js', './androidx-material-ripple.js', './androidx-ui-util.js', './androidx-ui-text.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-ui.js'), require('./androidx-ui-unit.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-foundation-layout.js'), require('./androidx-animation-core.js'), require('./androidx-runtime.js'), require('./androidx-foundation.js'), require('./androidx-ui-graphics.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./androidx-ui-geometry.js'), require('./androidx-material-ripple.js'), require('./androidx-ui-util.js'), require('./androidx-ui-text.js'), require('./skiko-kjs.js'));
  else {
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-foundation-layout' was not found. Please, check whether 'androidx-foundation-layout' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-animation-core' was not found. Please, check whether 'androidx-animation-core' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-foundation'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-foundation' was not found. Please, check whether 'androidx-foundation' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-ui-graphics' was not found. Please, check whether 'androidx-ui-graphics' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-ui-geometry' was not found. Please, check whether 'androidx-ui-geometry' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-material-ripple'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-material-ripple' was not found. Please, check whether 'androidx-material-ripple' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-ui-util' was not found. Please, check whether 'androidx-ui-util' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-ui-text' was not found. Please, check whether 'androidx-ui-text' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'androidx-material'.");
    }
    root['androidx-material'] = factory(typeof this['androidx-material'] === 'undefined' ? {} : this['androidx-material'], this['androidx-ui'], this['androidx-ui-unit'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-foundation-layout'], this['androidx-animation-core'], this['androidx-runtime'], this['androidx-foundation'], this['androidx-ui-graphics'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['androidx-ui-geometry'], this['androidx-material-ripple'], this['androidx-ui-util'], this['androidx-ui-text'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_androidx_compose_ui_ui, kotlin_androidx_compose_ui_ui_unit, kotlin_kotlin, kotlin_androidx_compose_foundation_foundation_layout, kotlin_androidx_compose_animation_animation_core, kotlin_androidx_compose_runtime_runtime, kotlin_androidx_compose_foundation_foundation, kotlin_androidx_compose_ui_ui_graphics, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_androidx_compose_ui_ui_geometry, kotlin_androidx_compose_material_material_ripple, kotlin_androidx_compose_ui_ui_util, kotlin_androidx_compose_ui_ui_text, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Companion_getInstance = kotlin_androidx_compose_ui_ui.$_$.x4;
  var _Dp___init__impl__ms3zkb = kotlin_androidx_compose_ui_ui_unit.$_$.i2;
  var Unit_getInstance = kotlin_kotlin.$_$.b3;
  var padding$default = kotlin_androidx_compose_foundation_foundation_layout.$_$.z;
  var get_sp = kotlin_androidx_compose_ui_ui_unit.$_$.s1;
  var _Dp___get_value__impl__geb1vb = kotlin_androidx_compose_ui_ui_unit.$_$.l2;
  var width = kotlin_androidx_compose_foundation_foundation_layout.$_$.t;
  var fillMaxHeight$default = kotlin_androidx_compose_foundation_foundation_layout.$_$.u;
  var get_FastOutSlowInEasing = kotlin_androidx_compose_animation_animation_core.$_$.e;
  var TweenSpec_init_$Create$ = kotlin_androidx_compose_animation_animation_core.$_$.z;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.s1;
  var funMutableInteractionSource = kotlin_androidx_compose_foundation_foundation.$_$.n;
  var Companion_getInstance_0 = kotlin_androidx_compose_runtime_runtime.$_$.g2;
  var THROW_CCE = kotlin_kotlin.$_$.kc;
  var isObject = kotlin_kotlin.$_$.j9;
  var Long = kotlin_kotlin.$_$.ec;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.q2;
  var _Color___init__impl__r6cqi2 = kotlin_androidx_compose_ui_ui_graphics.$_$.n2;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.h1;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var interfaceMeta = kotlin_kotlin.$_$.d9;
  var PaddingValues = kotlin_androidx_compose_foundation_foundation_layout.$_$.c;
  var illegalDecoyCallException = kotlin_androidx_compose_runtime_runtime.$_$.d;
  var Dp = kotlin_androidx_compose_ui_ui_unit.$_$.v;
  var Color__copy$default_impl_ectz3s = kotlin_androidx_compose_ui_ui_graphics.$_$.j3;
  var compositeOver = kotlin_androidx_compose_ui_ui_graphics.$_$.e1;
  var Companion_getInstance_1 = kotlin_androidx_compose_ui_ui_graphics.$_$.r3;
  var BorderStroke = kotlin_androidx_compose_foundation_foundation.$_$.w;
  var objectMeta = kotlin_kotlin.$_$.q9;
  var composableLambda = kotlin_androidx_compose_runtime_runtime.$_$.c;
  var CoroutineImpl = kotlin_kotlin.$_$.a8;
  var Interaction = kotlin_androidx_compose_foundation_foundation.$_$.m;
  var isInterface = kotlin_kotlin.$_$.i9;
  var Cancel = kotlin_androidx_compose_foundation_foundation.$_$.o;
  var Release = kotlin_androidx_compose_foundation_foundation.$_$.q;
  var Press = kotlin_androidx_compose_foundation_foundation.$_$.p;
  var Unfocus = kotlin_androidx_compose_foundation_foundation.$_$.j;
  var Focus = kotlin_androidx_compose_foundation_foundation.$_$.i;
  var Exit = kotlin_androidx_compose_foundation_foundation.$_$.l;
  var Enter = kotlin_androidx_compose_foundation_foundation.$_$.k;
  var classMeta = kotlin_kotlin.$_$.q8;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.k7;
  var equals = kotlin_kotlin.$_$.t8;
  var Companion_getInstance_2 = kotlin_androidx_compose_ui_ui_geometry.$_$.m1;
  var mutableStateListOf = kotlin_androidx_compose_runtime_runtime.$_$.i1;
  var LaunchedEffect$composable = kotlin_androidx_compose_runtime_runtime.$_$.v;
  var lastOrNull = kotlin_kotlin.$_$.w5;
  var Companion_getInstance_3 = kotlin_androidx_compose_ui_ui_unit.$_$.m3;
  var get_VectorConverter = kotlin_androidx_compose_animation_animation_core.$_$.i;
  var Animatable_init_$Create$ = kotlin_androidx_compose_animation_animation_core.$_$.x;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var Color__hashCode_impl_vjyivj = kotlin_androidx_compose_ui_ui_graphics.$_$.t2;
  var Color = kotlin_androidx_compose_ui_ui_graphics.$_$.k;
  var rememberUpdatedState$composable = kotlin_androidx_compose_runtime_runtime.$_$.o1;
  var KProperty0 = kotlin_kotlin.$_$.sa;
  var THROW_ISE = kotlin_kotlin.$_$.lc;
  var getLocalDelegateReference = kotlin_kotlin.$_$.w8;
  var defaultMinSize = kotlin_androidx_compose_foundation_foundation_layout.$_$.f;
  var padding = kotlin_androidx_compose_foundation_foundation_layout.$_$.l;
  var Arrangement_getInstance = kotlin_androidx_compose_foundation_foundation_layout.$_$.d1;
  var Companion_getInstance_4 = kotlin_androidx_compose_ui_ui.$_$.w4;
  var rowMeasurePolicy$composable = kotlin_androidx_compose_foundation_foundation_layout.$_$.o;
  var get_LocalDensity = kotlin_androidx_compose_ui_ui.$_$.r2;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.q1;
  var get_LocalLayoutDirection = kotlin_androidx_compose_ui_ui.$_$.u2;
  var get_LocalViewConfiguration = kotlin_androidx_compose_ui_ui.$_$.v2;
  var Companion_getInstance_5 = kotlin_androidx_compose_ui_ui.$_$.t4;
  var materializerOf = kotlin_androidx_compose_ui_ui.$_$.g2;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.g1;
  var Applier = kotlin_androidx_compose_runtime_runtime.$_$.k;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.d2;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.e2;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_androidx_compose_runtime_runtime.$_$.b2;
  var SkippableUpdater = kotlin_androidx_compose_runtime_runtime.$_$.b1;
  var RowScopeInstance_getInstance = kotlin_androidx_compose_foundation_foundation_layout.$_$.g1;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_androidx_compose_ui_ui_graphics.$_$.o2;
  var CompositionLocalProvider$composable = kotlin_androidx_compose_runtime_runtime.$_$.n;
  var SuspendFunction1 = kotlin_kotlin.$_$.c8;
  var structuralEqualityPolicy = kotlin_androidx_compose_runtime_runtime.$_$.u1;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.k1;
  var Color_0 = kotlin_androidx_compose_ui_ui_graphics.$_$.j;
  var _Color___get_value__impl__1pls5m = kotlin_androidx_compose_ui_ui_graphics.$_$.v2;
  var KMutableProperty1 = kotlin_kotlin.$_$.ra;
  var getPropertyCallableRef = kotlin_kotlin.$_$.z8;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.t1;
  var luminance = kotlin_androidx_compose_ui_ui_graphics.$_$.f1;
  var compositionLocalOf$default = kotlin_androidx_compose_runtime_runtime.$_$.z1;
  var Start = kotlin_androidx_compose_foundation_foundation.$_$.g;
  var CubicBezierEasing = kotlin_androidx_compose_animation_animation_core.$_$.c;
  var Dp__compareTo_impl_tlg3dl = kotlin_androidx_compose_ui_ui_unit.$_$.j2;
  var Annotation = kotlin_kotlin.$_$.tb;
  var rememberVectorPainter$composable = kotlin_androidx_compose_ui_ui.$_$.l;
  var Companion_getInstance_6 = kotlin_androidx_compose_ui_ui_graphics.$_$.s3;
  var semantics$default = kotlin_androidx_compose_ui_ui.$_$.b4;
  var toolingGraphicsLayer = kotlin_androidx_compose_ui_ui.$_$.o;
  var Companion_getInstance_7 = kotlin_androidx_compose_ui_ui.$_$.s4;
  var paint$default = kotlin_androidx_compose_ui_ui.$_$.v3;
  var Box$composable = kotlin_androidx_compose_foundation_foundation_layout.$_$.a;
  var Companion_getInstance_8 = kotlin_androidx_compose_ui_ui_geometry.$_$.o1;
  var _Size___get_height__impl__a04p02 = kotlin_androidx_compose_ui_ui_geometry.$_$.h1;
  var isInfinite = kotlin_kotlin.$_$.xc;
  var _Size___get_width__impl__58y75t = kotlin_androidx_compose_ui_ui_geometry.$_$.k1;
  var set_contentDescription = kotlin_androidx_compose_ui_ui.$_$.b3;
  var Companion_getInstance_9 = kotlin_androidx_compose_ui_ui.$_$.v4;
  var set_role = kotlin_androidx_compose_ui_ui.$_$.h3;
  var size = kotlin_androidx_compose_foundation_foundation_layout.$_$.r;
  var rememberRipple$composable = kotlin_androidx_compose_material_material_ripple.$_$.c;
  var clickable$default = kotlin_androidx_compose_foundation_foundation.$_$.p1;
  var rememberBoxMeasurePolicy$composable = kotlin_androidx_compose_foundation_foundation_layout.$_$.n;
  var BoxScopeInstance_getInstance = kotlin_androidx_compose_foundation_foundation_layout.$_$.e1;
  var TextSelectionColors = kotlin_androidx_compose_foundation_foundation.$_$.u;
  var get_LocalIndication = kotlin_androidx_compose_foundation_foundation.$_$.a1;
  var get_LocalRippleTheme = kotlin_androidx_compose_material_material_ripple.$_$.a;
  var get_LocalTextSelectionColors = kotlin_androidx_compose_foundation_foundation.$_$.t;
  var Companion_getInstance_10 = kotlin_androidx_compose_material_material_ripple.$_$.d;
  var RippleTheme = kotlin_androidx_compose_material_material_ripple.$_$.b;
  var Spring_getInstance = kotlin_androidx_compose_animation_animation_core.$_$.a1;
  var SpringSpec = kotlin_androidx_compose_animation_animation_core.$_$.g;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.r2;
  var Companion_getInstance_11 = kotlin_androidx_compose_ui_ui_graphics.$_$.z3;
  var Stroke_init_$Create$ = kotlin_androidx_compose_ui_ui_graphics.$_$.l2;
  var progressSemantics$default = kotlin_androidx_compose_foundation_foundation.$_$.r1;
  var Canvas$composable = kotlin_androidx_compose_foundation_foundation.$_$.x;
  var Offset = kotlin_androidx_compose_ui_ui_geometry.$_$.d;
  var Size = kotlin_androidx_compose_ui_ui_geometry.$_$.j;
  var RoundedCornerShape = kotlin_androidx_compose_foundation_foundation.$_$.s;
  var hashCode = kotlin_kotlin.$_$.b9;
  var rangeTo = kotlin_kotlin.$_$.na;
  var toString = kotlin_kotlin.$_$.u9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var LayoutDirection_Rtl_getInstance = kotlin_androidx_compose_ui_ui_unit.$_$.w1;
  var FocusRequester = kotlin_androidx_compose_ui_ui.$_$.f;
  var requiredSizeIn$default = kotlin_androidx_compose_foundation_foundation_layout.$_$.b1;
  var focusRequester = kotlin_androidx_compose_ui_ui.$_$.g;
  var focusable = kotlin_androidx_compose_foundation_foundation.$_$.g1;
  var BoxWithConstraints$composable = kotlin_androidx_compose_foundation_foundation_layout.$_$.b;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.o;
  var emptyList = kotlin_kotlin.$_$.a5;
  var onKeyEvent = kotlin_androidx_compose_ui_ui.$_$.u;
  var coerceIn = kotlin_kotlin.$_$.ja;
  var progressSemantics = kotlin_androidx_compose_foundation_foundation.$_$.j1;
  var lerp = kotlin_androidx_compose_ui_ui_util.$_$.a;
  var DragScope = kotlin_androidx_compose_foundation_foundation.$_$.a;
  var mutableStateOf$default = kotlin_androidx_compose_runtime_runtime.$_$.a2;
  var MutatorMutex = kotlin_androidx_compose_foundation_foundation.$_$.c1;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var drag$default = kotlin_androidx_compose_foundation_foundation.$_$.s1;
  var DraggableState = kotlin_androidx_compose_foundation_foundation.$_$.b;
  var SideEffect$composable = kotlin_androidx_compose_runtime_runtime.$_$.a1;
  var compareTo = kotlin_kotlin.$_$.r8;
  var get_NoInspectorInfo = kotlin_androidx_compose_ui_ui.$_$.w2;
  var get_isDebugInspectorInfoEnabled = kotlin_androidx_compose_ui_ui.$_$.y2;
  var composed$composable = kotlin_androidx_compose_ui_ui.$_$.q3;
  var fillMaxSize$default = kotlin_androidx_compose_foundation_foundation_layout.$_$.v;
  var size_0 = kotlin_androidx_compose_foundation_foundation_layout.$_$.p;
  var indication = kotlin_androidx_compose_foundation_foundation.$_$.h1;
  var hoverable$default = kotlin_androidx_compose_foundation_foundation.$_$.q1;
  var get_CircleShape = kotlin_androidx_compose_foundation_foundation.$_$.r;
  var shadow$default = kotlin_androidx_compose_ui_ui.$_$.w3;
  var background = kotlin_androidx_compose_foundation_foundation.$_$.d1;
  var Spacer$composable = kotlin_androidx_compose_foundation_foundation_layout.$_$.d;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.u2;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_androidx_compose_ui_ui_unit.$_$.f2;
  var createCompositionCoroutineScope = kotlin_androidx_compose_runtime_runtime.$_$.e1;
  var CompositionScopedCoroutineScopeCanceller = kotlin_androidx_compose_runtime_runtime.$_$.p;
  var Orientation_Horizontal_getInstance = kotlin_androidx_compose_foundation_foundation.$_$.k1;
  var draggable$default = kotlin_androidx_compose_foundation_foundation.$_$.n1;
  var get_type = kotlin_androidx_compose_ui_ui.$_$.v;
  var Companion_getInstance_12 = kotlin_androidx_compose_ui_ui.$_$.m4;
  var coerceIn_0 = kotlin_kotlin.$_$.ka;
  var coerceIn_1 = kotlin_kotlin.$_$.ma;
  var disabled = kotlin_androidx_compose_ui_ui.$_$.c3;
  var setProgress$default = kotlin_androidx_compose_ui_ui.$_$.c4;
  var Animatable$default = kotlin_androidx_compose_animation_animation_core.$_$.s;
  var PressGestureScope = kotlin_androidx_compose_foundation_foundation.$_$.d;
  var Offset_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.e;
  var _Offset___get_x__impl__xvi35n = kotlin_androidx_compose_ui_ui_geometry.$_$.e1;
  var GestureCancellationException = kotlin_androidx_compose_foundation_foundation.$_$.c;
  var MutatePriority_UserInput_getInstance = kotlin_androidx_compose_foundation_foundation.$_$.m1;
  var PointerInputScope = kotlin_androidx_compose_ui_ui.$_$.a1;
  var detectTapGestures$default = kotlin_androidx_compose_foundation_foundation.$_$.t1;
  var pointerInput = kotlin_androidx_compose_ui_ui.$_$.k1;
  var _Offset___get_y__impl__8bzhra = kotlin_androidx_compose_ui_ui_geometry.$_$.f1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.x;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.i4;
  var lerp_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.r;
  var Companion_getInstance_13 = kotlin_androidx_compose_ui_ui_graphics.$_$.x3;
  var Cancel_0 = kotlin_androidx_compose_foundation_foundation.$_$.f;
  var Stop = kotlin_androidx_compose_foundation_foundation.$_$.h;
  var widthIn$default = kotlin_androidx_compose_foundation_foundation_layout.$_$.c1;
  var heightIn$default = kotlin_androidx_compose_foundation_foundation_layout.$_$.x;
  var SuspendFunction2 = kotlin_kotlin.$_$.d8;
  var get_RectangleShape = kotlin_androidx_compose_ui_ui_graphics.$_$.v;
  var border = kotlin_androidx_compose_foundation_foundation.$_$.e1;
  var clip = kotlin_androidx_compose_ui_ui.$_$.c;
  var semantics = kotlin_androidx_compose_ui_ui.$_$.i3;
  var pointerInput_0 = kotlin_androidx_compose_ui_ui.$_$.i1;
  var tween$default = kotlin_androidx_compose_animation_animation_core.$_$.w;
  var TextUnit = kotlin_androidx_compose_ui_ui_unit.$_$.c1;
  var FontStyle = kotlin_androidx_compose_ui_ui_text.$_$.a;
  var TextAlign = kotlin_androidx_compose_ui_ui_text.$_$.i;
  var TextOverflow = kotlin_androidx_compose_ui_ui_text.$_$.j;
  var _TextUnit___get_packedValue__impl__it60w4 = kotlin_androidx_compose_ui_ui_unit.$_$.b3;
  var _TextOverflow___get_value__impl__vugm5i = kotlin_androidx_compose_ui_ui_text.$_$.v;
  var Companion_getInstance_14 = kotlin_androidx_compose_ui_ui_unit.$_$.s3;
  var Companion_getInstance_15 = kotlin_androidx_compose_ui_ui_text.$_$.e1;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.x2;
  var TextStyle_init_$Create$ = kotlin_androidx_compose_ui_ui_text.$_$.t;
  var BasicText$composable = kotlin_androidx_compose_foundation_foundation.$_$.v;
  var Companion_getInstance_16 = kotlin_androidx_compose_ui_ui_text.$_$.h1;
  var compositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.d1;
  var Constraints = kotlin_androidx_compose_ui_ui_unit.$_$.a;
  var roundToInt = kotlin_kotlin.$_$.aa;
  var _DpSize___get_width__impl__o3d5gt = kotlin_androidx_compose_ui_ui_unit.$_$.q2;
  var _DpSize___get_height__impl__5xueo2 = kotlin_androidx_compose_ui_ui_unit.$_$.p2;
  var DpSize__hashCode_impl_jvpgaj = kotlin_androidx_compose_ui_ui_unit.$_$.o2;
  var minIntrinsicWidth = kotlin_androidx_compose_ui_ui.$_$.u1;
  var minIntrinsicHeight = kotlin_androidx_compose_ui_ui.$_$.t1;
  var maxIntrinsicWidth = kotlin_androidx_compose_ui_ui.$_$.s1;
  var maxIntrinsicHeight = kotlin_androidx_compose_ui_ui.$_$.r1;
  var foldIn = kotlin_androidx_compose_ui_ui.$_$.n3;
  var foldOut = kotlin_androidx_compose_ui_ui.$_$.o3;
  var any = kotlin_androidx_compose_ui_ui.$_$.m3;
  var all = kotlin_androidx_compose_ui_ui.$_$.l3;
  var then = kotlin_androidx_compose_ui_ui.$_$.p3;
  var LayoutModifier = kotlin_androidx_compose_ui_ui.$_$.v1;
  var Companion_getInstance_17 = kotlin_androidx_compose_ui_ui_text.$_$.a1;
  var Companion_getInstance_18 = kotlin_androidx_compose_ui_ui_text.$_$.b1;
  var get_sp_0 = kotlin_androidx_compose_ui_ui_unit.$_$.r1;
  var get_LocalScrollbarStyle = kotlin_androidx_compose_foundation_foundation.$_$.b1;
  var defaultScrollbarStyle = kotlin_androidx_compose_foundation_foundation.$_$.f1;
  var get_key = kotlin_androidx_compose_ui_ui.$_$.t;
  var _Key___get_keyCode__impl__ymzu5v = kotlin_androidx_compose_ui_ui.$_$.j4;
  var SkikoKey_KEY_UP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x6;
  var toLong = kotlin_kotlin.$_$.s9;
  var SkikoKey_KEY_DOWN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b4;
  var SkikoKey_KEY_LEFT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g5;
  var SkikoKey_KEY_RIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n6;
  var SkikoKey_KEY_HOME_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w4;
  var SkikoKey_KEY_END_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d4;
  var SkikoKey_KEY_PGUP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f6;
  var SkikoKey_KEY_PGDOWN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e6;
  //endregion
  //region block: pre-declaration
  DefaultButtonElevation$elevation$composable$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  DefaultButtonElevation$elevation$composable$slambda$slambda.prototype.constructor = DefaultButtonElevation$elevation$composable$slambda$slambda;
  DefaultButtonElevation$elevation$composable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  DefaultButtonElevation$elevation$composable$slambda.prototype.constructor = DefaultButtonElevation$elevation$composable$slambda;
  DefaultButtonElevation$elevation$composable$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  DefaultButtonElevation$elevation$composable$slambda_1.prototype.constructor = DefaultButtonElevation$elevation$composable$slambda_1;
  DefaultButtonElevation$elevation$composable$slambda_3.prototype = Object.create(CoroutineImpl.prototype);
  DefaultButtonElevation$elevation$composable$slambda_3.prototype.constructor = DefaultButtonElevation$elevation$composable$slambda_3;
  $animateElevationCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $animateElevationCOROUTINE$0.prototype.constructor = $animateElevationCOROUTINE$0;
  SliderDraggableState$drag$slambda.prototype = Object.create(CoroutineImpl.prototype);
  SliderDraggableState$drag$slambda.prototype.constructor = SliderDraggableState$drag$slambda;
  Slider$composable$lambda$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Slider$composable$lambda$lambda$slambda.prototype.constructor = Slider$composable$lambda$lambda$slambda;
  Slider$composable$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Slider$composable$lambda$slambda.prototype.constructor = Slider$composable$lambda$slambda;
  animateToTarget$slambda.prototype = Object.create(CoroutineImpl.prototype);
  animateToTarget$slambda.prototype.constructor = animateToTarget$slambda;
  sliderTapModifier$lambda$slambda$lambda$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  sliderTapModifier$lambda$slambda$lambda$slambda$slambda.prototype.constructor = sliderTapModifier$lambda$slambda$lambda$slambda$slambda;
  sliderTapModifier$lambda$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  sliderTapModifier$lambda$slambda$slambda.prototype.constructor = sliderTapModifier$lambda$slambda$slambda;
  sliderTapModifier$lambda$slambda$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  sliderTapModifier$lambda$slambda$lambda$slambda.prototype.constructor = sliderTapModifier$lambda$slambda$lambda$slambda;
  sliderTapModifier$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  sliderTapModifier$lambda$slambda.prototype.constructor = sliderTapModifier$lambda$slambda;
  SliderThumb$composable$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  SliderThumb$composable$slambda$slambda.prototype.constructor = SliderThumb$composable$slambda$slambda;
  SliderThumb$composable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  SliderThumb$composable$slambda.prototype.constructor = SliderThumb$composable$slambda;
  Surface$composable$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Surface$composable$lambda$slambda.prototype.constructor = Surface$composable$lambda$slambda;
  //endregion
  function get_TitlePadding() {
    init_properties_AlertDialog_kt_d3iik0();
    return TitlePadding;
  }
  var TitlePadding;
  function get_TextPadding() {
    init_properties_AlertDialog_kt_d3iik0();
    return TextPadding;
  }
  var TextPadding;
  function get_TitleBaselineDistanceFromTop() {
    init_properties_AlertDialog_kt_d3iik0();
    return TitleBaselineDistanceFromTop;
  }
  var TitleBaselineDistanceFromTop;
  function get_TextBaselineDistanceFromTitle() {
    init_properties_AlertDialog_kt_d3iik0();
    return TextBaselineDistanceFromTitle;
  }
  var TextBaselineDistanceFromTitle;
  function get_TextBaselineDistanceFromTop() {
    init_properties_AlertDialog_kt_d3iik0();
    return TextBaselineDistanceFromTop;
  }
  var TextBaselineDistanceFromTop;
  var properties_initialized_AlertDialog_kt_toy5h0;
  function init_properties_AlertDialog_kt_d3iik0() {
    if (properties_initialized_AlertDialog_kt_toy5h0) {
    } else {
      properties_initialized_AlertDialog_kt_toy5h0 = true;
      var tmp = Companion_getInstance();
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(24);
      var tmp_0 = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(24);
      var tmp_1 = tmp$ret$1;
      TitlePadding = padding$default(tmp, tmp_0, null, tmp_1, null, 10, null);
      var tmp_2 = Companion_getInstance();
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(24);
      var tmp_3 = tmp$ret$0_0;
      var tmp$ret$1_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1_0 = _Dp___init__impl__ms3zkb(24);
      var tmp_4 = tmp$ret$1_0;
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$2 = _Dp___init__impl__ms3zkb(28);
      TextPadding = padding$default(tmp_2, tmp_3, null, tmp_4, tmp$ret$2, 2, null);
      TitleBaselineDistanceFromTop = get_sp(40);
      TextBaselineDistanceFromTitle = get_sp(36);
      TextBaselineDistanceFromTop = get_sp(38);
    }
  }
  function get_AppBarHeight() {
    init_properties_AppBar_kt_hhzy7c();
    return AppBarHeight;
  }
  var AppBarHeight;
  function get_AppBarHorizontalPadding() {
    init_properties_AppBar_kt_hhzy7c();
    return AppBarHorizontalPadding;
  }
  var AppBarHorizontalPadding;
  function get_TitleInsetWithoutIcon() {
    init_properties_AppBar_kt_hhzy7c();
    return TitleInsetWithoutIcon;
  }
  var TitleInsetWithoutIcon;
  function get_TitleIconModifier() {
    init_properties_AppBar_kt_hhzy7c();
    return TitleIconModifier;
  }
  var TitleIconModifier;
  function get_BottomAppBarCutoutOffset() {
    init_properties_AppBar_kt_hhzy7c();
    return BottomAppBarCutoutOffset;
  }
  var BottomAppBarCutoutOffset;
  function get_BottomAppBarRoundedEdgeRadius() {
    init_properties_AppBar_kt_hhzy7c();
    return BottomAppBarRoundedEdgeRadius;
  }
  var BottomAppBarRoundedEdgeRadius;
  var properties_initialized_AppBar_kt_if00s4;
  function init_properties_AppBar_kt_hhzy7c() {
    if (properties_initialized_AppBar_kt_if00s4) {
    } else {
      properties_initialized_AppBar_kt_if00s4 = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(56);
      AppBarHeight = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(4);
      AppBarHorizontalPadding = tmp$ret$0_0;
      var tmp = Companion_getInstance();
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(16);
      var tmp0_minus = tmp$ret$0_1;
      var tmp1_minus = get_AppBarHorizontalPadding();
      tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_minus) - _Dp___get_value__impl__geb1vb(tmp1_minus));
      TitleInsetWithoutIcon = width(tmp, tmp$ret$1);
      var tmp_0 = Companion_getInstance();
      var tmp_1 = fillMaxHeight$default(tmp_0, 0.0, 1, null);
      var tmp$ret$1_0;
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(72);
      var tmp0_minus_0 = tmp$ret$0_2;
      var tmp1_minus_0 = get_AppBarHorizontalPadding();
      tmp$ret$1_0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_minus_0) - _Dp___get_value__impl__geb1vb(tmp1_minus_0));
      TitleIconModifier = width(tmp_1, tmp$ret$1_0);
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(8);
      BottomAppBarCutoutOffset = tmp$ret$0_3;
      var tmp$ret$0_4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_4 = _Dp___init__impl__ms3zkb(4);
      BottomAppBarRoundedEdgeRadius = tmp$ret$0_4;
    }
  }
  function get_AnimationSlideOffset() {
    init_properties_BackdropScaffold_kt_55c3ou();
    return AnimationSlideOffset;
  }
  var AnimationSlideOffset;
  var properties_initialized_BackdropScaffold_kt_tx6h8y;
  function init_properties_BackdropScaffold_kt_55c3ou() {
    if (properties_initialized_BackdropScaffold_kt_tx6h8y) {
    } else {
      properties_initialized_BackdropScaffold_kt_tx6h8y = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(20);
      AnimationSlideOffset = tmp$ret$0;
    }
  }
  function get_BadgeRadius() {
    init_properties_Badge_kt_3g8t0x();
    return BadgeRadius;
  }
  var BadgeRadius;
  function get_BadgeWithContentRadius() {
    init_properties_Badge_kt_3g8t0x();
    return BadgeWithContentRadius;
  }
  var BadgeWithContentRadius;
  function get_BadgeContentFontSize() {
    init_properties_Badge_kt_3g8t0x();
    return BadgeContentFontSize;
  }
  var BadgeContentFontSize;
  function get_BadgeWithContentHorizontalPadding() {
    init_properties_Badge_kt_3g8t0x();
    return BadgeWithContentHorizontalPadding;
  }
  var BadgeWithContentHorizontalPadding;
  function get_BadgeWithContentHorizontalOffset() {
    init_properties_Badge_kt_3g8t0x();
    return BadgeWithContentHorizontalOffset;
  }
  var BadgeWithContentHorizontalOffset;
  function get_BadgeHorizontalOffset() {
    init_properties_Badge_kt_3g8t0x();
    return BadgeHorizontalOffset;
  }
  var BadgeHorizontalOffset;
  var properties_initialized_Badge_kt_dqvlbn;
  function init_properties_Badge_kt_3g8t0x() {
    if (properties_initialized_Badge_kt_dqvlbn) {
    } else {
      properties_initialized_Badge_kt_dqvlbn = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
      BadgeRadius = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(8);
      BadgeWithContentRadius = tmp$ret$0_0;
      BadgeContentFontSize = get_sp(10);
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(4);
      BadgeWithContentHorizontalPadding = tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.Dp.unaryMinus' call
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(6);
      var tmp0_unaryMinus = tmp$ret$0_2;
      tmp$ret$1 = _Dp___init__impl__ms3zkb(-_Dp___get_value__impl__geb1vb(tmp0_unaryMinus));
      BadgeWithContentHorizontalOffset = tmp$ret$1;
      var tmp$ret$1_0;
      // Inline function 'androidx.compose.ui.unit.Dp.unaryMinus' call
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(4);
      var tmp0_unaryMinus_0 = tmp$ret$0_3;
      tmp$ret$1_0 = _Dp___init__impl__ms3zkb(-_Dp___get_value__impl__geb1vb(tmp0_unaryMinus_0));
      BadgeHorizontalOffset = tmp$ret$1_0;
    }
  }
  function get_BottomNavigationAnimationSpec() {
    init_properties_BottomNavigation_kt_i6kyn9();
    return BottomNavigationAnimationSpec;
  }
  var BottomNavigationAnimationSpec;
  function get_BottomNavigationHeight() {
    init_properties_BottomNavigation_kt_i6kyn9();
    return BottomNavigationHeight;
  }
  var BottomNavigationHeight;
  function get_BottomNavigationItemHorizontalPadding() {
    init_properties_BottomNavigation_kt_i6kyn9();
    return BottomNavigationItemHorizontalPadding;
  }
  var BottomNavigationItemHorizontalPadding;
  function get_CombinedItemTextBaseline() {
    init_properties_BottomNavigation_kt_i6kyn9();
    return CombinedItemTextBaseline;
  }
  var CombinedItemTextBaseline;
  var properties_initialized_BottomNavigation_kt_6l9ewv;
  function init_properties_BottomNavigation_kt_i6kyn9() {
    if (properties_initialized_BottomNavigation_kt_6l9ewv) {
    } else {
      properties_initialized_BottomNavigation_kt_6l9ewv = true;
      BottomNavigationAnimationSpec = TweenSpec_init_$Create$(300, 0, get_FastOutSlowInEasing(), 2, null);
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(56);
      BottomNavigationHeight = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(12);
      BottomNavigationItemHorizontalPadding = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(12);
      CombinedItemTextBaseline = tmp$ret$0_1;
    }
  }
  function get_FabEndSpacing() {
    init_properties_BottomSheetScaffold_kt_rmxf9y();
    return FabEndSpacing;
  }
  var FabEndSpacing;
  var properties_initialized_BottomSheetScaffold_kt_d8pd8a;
  function init_properties_BottomSheetScaffold_kt_rmxf9y() {
    if (properties_initialized_BottomSheetScaffold_kt_d8pd8a) {
    } else {
      properties_initialized_BottomSheetScaffold_kt_d8pd8a = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
      FabEndSpacing = tmp$ret$0;
    }
  }
  function OutlinedButton$composable(onClick, modifier, enabled, interactionSource, elevation, shape, border, colors, contentPadding, content, $composer, $changed, $default) {
    var modifier_0 = modifier;
    var enabled_0 = enabled;
    var interactionSource_0 = interactionSource;
    var elevation_0 = elevation;
    var shape_0 = shape;
    var border_0 = border;
    var colors_0 = colors;
    var contentPadding_0 = contentPadding;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1877657811);
    sourceInformation($composer_0, 'C(OutlinedButton$composable)P(8,7,5,6,4,9!2,3)168@7956L39,170@8070L6,171@8127L14,172@8185L22,175@8325L270:Button.kt#jmzs0o');
    if (!(($default & 2) === 0))
      modifier_0 = Companion_getInstance();
    if (!(($default & 4) === 0))
      enabled_0 = true;
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
      if (false ? true : tmp0_let === Companion_getInstance_0().Empty_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.material.OutlinedButton$composable.<anonymous>' call
        tmp$ret$0 = funMutableInteractionSource();
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
      interactionSource_0 = tmp$ret$4;
    }
    if (!(($default & 16) === 0))
      elevation_0 = null;
    if (!(($default & 32) === 0))
      shape_0 = MaterialTheme_getInstance().$get_shapes$$composable_4kixjg_k$($composer_0, 6).small_1;
    if (!(($default & 64) === 0))
      border_0 = ButtonDefaults_getInstance().$get_outlinedBorder$$composable_76658w_k$($composer_0, 6);
    if (!(($default & 128) === 0)) {
      var tmp_1 = ButtonDefaults_getInstance();
      var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      colors_0 = tmp_1.outlinedButtonColors$composable_m6yuf8_k$(tmp_2, tmp_3, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 3072, 7);
    }
    if (!(($default & 256) === 0))
      contentPadding_0 = ButtonDefaults_getInstance().ContentPadding_1;
    if (isTraceInProgress()) {
      traceEventStart(-1877657811, $changed, -1, 'androidx.compose.material.OutlinedButton$composable (Button.kt:164)');
    }
    Button$composable(onClick, modifier_0, enabled_0, interactionSource_0, elevation_0, shape_0, border_0, colors_0, contentPadding_0, content, $composer_0, 14 & $changed | 112 & $changed | 896 & $changed | 7168 & $changed | 57344 & $changed | 458752 & $changed | 3670016 & $changed | 29360128 & $changed | 234881024 & $changed | 1879048192 & $changed, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
  }
  function ButtonColors() {
  }
  ButtonColors.$metadata$ = interfaceMeta('ButtonColors');
  function _get_ButtonHorizontalPadding__m5vaza($this) {
    return $this.ButtonHorizontalPadding_1;
  }
  function _get_ButtonVerticalPadding__20kil4($this) {
    return $this.ButtonVerticalPadding_1;
  }
  function _get_TextButtonHorizontalPadding__vrel0d($this) {
    return $this.TextButtonHorizontalPadding_1;
  }
  function ButtonDefaults() {
    ButtonDefaults_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
    tmp.ButtonHorizontalPadding_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(8);
    tmp_0.ButtonVerticalPadding_1 = tmp$ret$1;
    this.ContentPadding_1 = PaddingValues(this.ButtonHorizontalPadding_1, this.ButtonVerticalPadding_1, this.ButtonHorizontalPadding_1, this.ButtonVerticalPadding_1);
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$2 = _Dp___init__impl__ms3zkb(64);
    tmp_1.MinWidth_1 = tmp$ret$2;
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$3 = _Dp___init__impl__ms3zkb(36);
    tmp_2.MinHeight_1 = tmp$ret$3;
    var tmp_3 = this;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$4 = _Dp___init__impl__ms3zkb(18);
    tmp_3.IconSize_1 = tmp$ret$4;
    var tmp_4 = this;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$5 = _Dp___init__impl__ms3zkb(8);
    tmp_4.IconSpacing_1 = tmp$ret$5;
    this.OutlinedBorderOpacity_1 = 0.12;
    var tmp_5 = this;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$6 = _Dp___init__impl__ms3zkb(1);
    tmp_5.OutlinedBorderSize_1 = tmp$ret$6;
    var tmp_6 = this;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$7 = _Dp___init__impl__ms3zkb(8);
    tmp_6.TextButtonHorizontalPadding_1 = tmp$ret$7;
    this.TextButtonContentPadding_1 = PaddingValues(this.TextButtonHorizontalPadding_1, this.ContentPadding_1.calculateTopPadding_ok52o3_k$(), this.TextButtonHorizontalPadding_1, this.ContentPadding_1.calculateBottomPadding_lu87vf_k$());
    this.$stable_1 = 0;
  }
  ButtonDefaults.prototype.get_ContentPadding_9buvep_k$ = function () {
    return this.ContentPadding_1;
  };
  ButtonDefaults.prototype.get_MinWidth_qk2ri0_k$ = function () {
    return this.MinWidth_1;
  };
  ButtonDefaults.prototype.get_MinHeight_n2z9u3_k$ = function () {
    return this.MinHeight_1;
  };
  ButtonDefaults.prototype.get_IconSize_u57ada_k$ = function () {
    return this.IconSize_1;
  };
  ButtonDefaults.prototype.get_IconSpacing_abz16s_k$ = function () {
    return this.IconSpacing_1;
  };
  ButtonDefaults.prototype.elevation_o2i3dj_k$ = function (defaultElevation, pressedElevation, disabledElevation) {
    illegalDecoyCallException('elevation');
  };
  ButtonDefaults.prototype.elevation_5og8b7_k$ = function (defaultElevation, pressedElevation, disabledElevation, hoveredElevation, focusedElevation) {
    illegalDecoyCallException('elevation');
  };
  ButtonDefaults.prototype.buttonColors_8t01q6_k$ = function (backgroundColor, contentColor, disabledBackgroundColor, disabledContentColor) {
    illegalDecoyCallException('buttonColors');
  };
  ButtonDefaults.prototype.outlinedButtonColors_b3fhf8_k$ = function (backgroundColor, contentColor, disabledContentColor) {
    illegalDecoyCallException('outlinedButtonColors');
  };
  ButtonDefaults.prototype.textButtonColors_xc181j_k$ = function (backgroundColor, contentColor, disabledContentColor) {
    illegalDecoyCallException('textButtonColors');
  };
  ButtonDefaults.prototype.get_OutlinedBorderOpacity_80te44_k$ = function () {
    return this.OutlinedBorderOpacity_1;
  };
  ButtonDefaults.prototype.get_OutlinedBorderSize_jvwx0z_k$ = function () {
    return this.OutlinedBorderSize_1;
  };
  ButtonDefaults.prototype.get_outlinedBorder_ja6y89_k$ = function () {
    illegalDecoyCallException('<get-outlinedBorder>');
  };
  ButtonDefaults.prototype.get_TextButtonContentPadding_wz7w2o_k$ = function () {
    return this.TextButtonContentPadding_1;
  };
  ButtonDefaults.prototype.elevation$composable_7xzjh5_k$ = function (defaultElevation, pressedElevation, disabledElevation, $composer, $changed, $default) {
    var defaultElevation_0 = defaultElevation;
    var pressedElevation_0 = pressedElevation;
    var disabledElevation_0 = disabledElevation;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-627555185);
    sourceInformation($composer_0, 'C(elevation$composable)P(0:c#ui.unit.Dp,2:c#ui.unit.Dp,1:c#ui.unit.Dp)346@14503L161:Button.kt#jmzs0o');
    if (!(($default & 1) === 0)) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(2);
      defaultElevation_0 = tmp$ret$0;
    }
    if (!(($default & 2) === 0)) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(8);
      pressedElevation_0 = tmp$ret$1;
    }
    if (!(($default & 4) === 0)) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$2 = _Dp___init__impl__ms3zkb(0);
      disabledElevation_0 = tmp$ret$2;
    }
    if (isTraceInProgress()) {
      traceEventStart(-627555185, $changed, -1, 'androidx.compose.material.ButtonDefaults.elevation$composable (Button.kt:342)');
    }
    var tmp = defaultElevation_0;
    var tmp_0 = pressedElevation_0;
    var tmp_1 = disabledElevation_0;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$3 = _Dp___init__impl__ms3zkb(4);
    var tmp_2 = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$4 = _Dp___init__impl__ms3zkb(4);
    var tmp0 = this.elevation$composable_nflktf_k$(tmp, tmp_0, tmp_1, tmp_2, tmp$ret$4, $composer_0, 27648 | 14 & $changed | 112 & $changed | 896 & $changed | 458752 & $changed << 6, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  ButtonDefaults.prototype.elevation$composable_nflktf_k$ = function (defaultElevation, pressedElevation, disabledElevation, hoveredElevation, focusedElevation, $composer, $changed, $default) {
    var defaultElevation_0 = {_v: new Dp(defaultElevation)};
    var pressedElevation_0 = {_v: new Dp(pressedElevation)};
    var disabledElevation_0 = {_v: new Dp(disabledElevation)};
    var hoveredElevation_0 = {_v: new Dp(hoveredElevation)};
    var focusedElevation_0 = {_v: new Dp(focusedElevation)};
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-292886193);
    sourceInformation($composer_0, 'C(elevation$composable)P(0:c#ui.unit.Dp,4:c#ui.unit.Dp,1:c#ui.unit.Dp,3:c#ui.unit.Dp,2:c#ui.unit.Dp)375@15635L497:Button.kt#jmzs0o');
    if (!(($default & 1) === 0)) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(2);
      defaultElevation_0._v = new Dp(tmp$ret$0);
    }
    if (!(($default & 2) === 0)) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(8);
      pressedElevation_0._v = new Dp(tmp$ret$1);
    }
    if (!(($default & 4) === 0)) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$2 = _Dp___init__impl__ms3zkb(0);
      disabledElevation_0._v = new Dp(tmp$ret$2);
    }
    if (!(($default & 8) === 0)) {
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$3 = _Dp___init__impl__ms3zkb(4);
      hoveredElevation_0._v = new Dp(tmp$ret$3);
    }
    if (!(($default & 16) === 0)) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$4 = _Dp___init__impl__ms3zkb(4);
      focusedElevation_0._v = new Dp(tmp$ret$4);
    }
    if (isTraceInProgress()) {
      traceEventStart(-292886193, $changed, -1, 'androidx.compose.material.ButtonDefaults.elevation$composable (Button.kt:368)');
    }
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = [defaultElevation_0._v, pressedElevation_0._v, disabledElevation_0._v, hoveredElevation_0._v, focusedElevation_0._v];
    var tmp1_remember$composable = $composer_0;
    var $composer_1 = tmp1_remember$composable;
    $composer_1.startReplaceableGroup_rp6air_k$(-1603429786);
    sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var indexedObject = tmp0_remember$composable;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var key = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_1.changed_ga7h3f_k$(key));
    }
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = invalid;
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().Empty_1) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.material.ButtonDefaults.elevation$composable.<anonymous>' call
      tmp$ret$5 = new DefaultButtonElevation(defaultElevation_0._v.value_1, pressedElevation_0._v.value_1, disabledElevation_0._v.value_1, hoveredElevation_0._v.value_1, focusedElevation_0._v.value_1);
      var value = tmp$ret$5;
      tmp1_cache.updateRememberedValue_l1colo_k$(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$6 = tmp;
    tmp$ret$7 = tmp$ret$6;
    var tmp_0 = tmp$ret$7;
    tmp$ret$8 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$8;
    $composer_1.endReplaceableGroup_er37p7_k$();
    tmp$ret$9 = tmp0;
    var tmp0_0 = tmp$ret$9;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  };
  ButtonDefaults.prototype.buttonColors$composable_wolznc_k$ = function (backgroundColor, contentColor, disabledBackgroundColor, disabledContentColor, $composer, $changed, $default) {
    var backgroundColor_0 = backgroundColor;
    var contentColor_0 = contentColor;
    var disabledBackgroundColor_0 = disabledBackgroundColor;
    var disabledContentColor_0 = disabledContentColor;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(688397153);
    sourceInformation($composer_0, 'C(buttonColors$composable)P(0:c#ui.graphics.Color,1:c#ui.graphics.Color,2:c#ui.graphics.Color,3:c#ui.graphics.Color)403@16701L6,404@16747L32,405@16836L6,406@16914L6,407@16983L6,408@17039L8:Button.kt#jmzs0o');
    if (!(($default & 1) === 0))
      backgroundColor_0 = MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_primary_9vvgym_k$();
    if (!(($default & 2) === 0))
      contentColor_0 = contentColorFor$composable(backgroundColor_0, $composer_0, 14 & $changed);
    if (!(($default & 4) === 0)) {
      var tmp = MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_onSurface_nme6dy_k$();
      disabledBackgroundColor_0 = compositeOver(Color__copy$default_impl_ectz3s(tmp, 0.12, 0.0, 0.0, 0.0, 14, null), MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_surface_rbg09j_k$());
    }
    if (!(($default & 8) === 0)) {
      var tmp_0 = MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_onSurface_nme6dy_k$();
      var tmp_1 = ContentAlpha_getInstance().$get_disabled$$composable_xy2o02_k$($composer_0, 6);
      disabledContentColor_0 = Color__copy$default_impl_ectz3s(tmp_0, tmp_1, 0.0, 0.0, 0.0, 14, null);
    }
    if (isTraceInProgress()) {
      traceEventStart(688397153, $changed, -1, 'androidx.compose.material.ButtonDefaults.buttonColors$composable (Button.kt:402)');
    }
    var tmp0 = new DefaultButtonColors(backgroundColor_0, contentColor_0, disabledBackgroundColor_0, disabledContentColor_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  ButtonDefaults.prototype.outlinedButtonColors$composable_m6yuf8_k$ = function (backgroundColor, contentColor, disabledContentColor, $composer, $changed, $default) {
    var backgroundColor_0 = backgroundColor;
    var contentColor_0 = contentColor;
    var disabledContentColor_0 = disabledContentColor;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1116984945);
    sourceInformation($composer_0, 'C(outlinedButtonColors$composable)P(0:c#ui.graphics.Color,1:c#ui.graphics.Color,2:c#ui.graphics.Color)426@17786L6,427@17846L6,428@17914L6,429@17970L8:Button.kt#jmzs0o');
    if (!(($default & 1) === 0))
      backgroundColor_0 = MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_surface_rbg09j_k$();
    if (!(($default & 2) === 0))
      contentColor_0 = MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_primary_9vvgym_k$();
    if (!(($default & 4) === 0)) {
      var tmp = MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_onSurface_nme6dy_k$();
      var tmp_0 = ContentAlpha_getInstance().$get_disabled$$composable_xy2o02_k$($composer_0, 6);
      disabledContentColor_0 = Color__copy$default_impl_ectz3s(tmp, tmp_0, 0.0, 0.0, 0.0, 14, null);
    }
    if (isTraceInProgress()) {
      traceEventStart(-1116984945, $changed, -1, 'androidx.compose.material.ButtonDefaults.outlinedButtonColors$composable (Button.kt:425)');
    }
    var tmp0 = new DefaultButtonColors(backgroundColor_0, contentColor_0, backgroundColor_0, disabledContentColor_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  ButtonDefaults.prototype.textButtonColors$composable_9jrobz_k$ = function (backgroundColor, contentColor, disabledContentColor, $composer, $changed, $default) {
    var backgroundColor_0 = backgroundColor;
    var contentColor_0 = contentColor;
    var disabledContentColor_0 = disabledContentColor;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(605145892);
    sourceInformation($composer_0, 'C(textButtonColors$composable)P(0:c#ui.graphics.Color,1:c#ui.graphics.Color,2:c#ui.graphics.Color)448@18737L6,449@18805L6,450@18861L8:Button.kt#jmzs0o');
    if (!(($default & 1) === 0))
      backgroundColor_0 = Companion_getInstance_1().Transparent_1;
    if (!(($default & 2) === 0))
      contentColor_0 = MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_primary_9vvgym_k$();
    if (!(($default & 4) === 0)) {
      var tmp = MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_onSurface_nme6dy_k$();
      var tmp_0 = ContentAlpha_getInstance().$get_disabled$$composable_xy2o02_k$($composer_0, 6);
      disabledContentColor_0 = Color__copy$default_impl_ectz3s(tmp, tmp_0, 0.0, 0.0, 0.0, 14, null);
    }
    if (isTraceInProgress()) {
      traceEventStart(605145892, $changed, -1, 'androidx.compose.material.ButtonDefaults.textButtonColors$composable (Button.kt:446)');
    }
    var tmp0 = new DefaultButtonColors(backgroundColor_0, contentColor_0, backgroundColor_0, disabledContentColor_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  ButtonDefaults.prototype.$get_outlinedBorder$$composable_76658w_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(744770889);
    sourceInformation($composer_0, 'C($get-outlinedBorder$$composable)474@19565L6:Button.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(744770889, $changed, -1, 'androidx.compose.material.ButtonDefaults.$get-outlinedBorder$$composable (Button.kt:473)');
    }
    var tmp = MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_onSurface_nme6dy_k$();
    var tmp0 = BorderStroke(this.OutlinedBorderSize_1, Color__copy$default_impl_ectz3s(tmp, 0.12, 0.0, 0.0, 0.0, 14, null));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  ButtonDefaults.$metadata$ = objectMeta('ButtonDefaults');
  var ButtonDefaults_instance;
  function ButtonDefaults_getInstance() {
    if (ButtonDefaults_instance == null)
      new ButtonDefaults();
    return ButtonDefaults_instance;
  }
  function Button$composable(onClick, modifier, enabled, interactionSource, elevation, shape, border, colors, contentPadding, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var interactionSource_0 = {_v: interactionSource};
    var elevation_0 = {_v: elevation};
    var shape_0 = {_v: shape};
    var border_0 = {_v: border};
    var colors_0 = {_v: colors};
    var contentPadding_0 = {_v: contentPadding};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1097700753);
    sourceInformation($composer_0, 'C(Button$composable)P(8,7,5,6,4,9!2,3)94@4533L39,95@4623L11,96@4669L6,98@4759L14,102@4922L21,108@5086L24,111@5228L37,103@4948L1086:Button.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(onClick) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(enabled_0._v) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.changed_ga7h3f_k$(interactionSource_0._v) : false) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.changed_ga7h3f_k$(elevation_0._v) : false) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ((($default & 32) === 0 ? $composer_0.changed_ga7h3f_k$(shape_0._v) : false) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(border_0._v) ? 1048576 : 524288);
    if (($changed & 29360128) === 0)
      $dirty = $dirty | ((($default & 128) === 0 ? $composer_0.changed_ga7h3f_k$(colors_0._v) : false) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(contentPadding_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(content) ? 536870912 : 268435456);
    if (!(($dirty & 1533916891) === 306783378) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 4) === 0)) {
          enabled_0._v = true;
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
          if (false ? true : tmp0_let === Companion_getInstance_0().Empty_1) {
            var tmp$ret$0;
            // Inline function 'androidx.compose.material.Button$composable.<anonymous>' call
            tmp$ret$0 = funMutableInteractionSource();
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
          interactionSource_0._v = tmp$ret$4;
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          var tmp_1 = ButtonDefaults_getInstance();
          var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_4 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_5 = _Dp___init__impl__ms3zkb(0.0);
          elevation_0._v = tmp_1.elevation$composable_nflktf_k$(tmp_2, tmp_3, tmp_4, tmp_5, _Dp___init__impl__ms3zkb(0.0), $composer_0, 196608, 31);
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          shape_0._v = MaterialTheme_getInstance().$get_shapes$$composable_4kixjg_k$($composer_0, 6).small_1;
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          border_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          var tmp_6 = ButtonDefaults_getInstance();
          var tmp_7 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_8 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_9 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          colors_0._v = tmp_6.buttonColors$composable_wolznc_k$(tmp_7, tmp_8, tmp_9, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 24576, 15);
          $dirty = $dirty & -29360129;
        }
        if (!(($default & 256) === 0)) {
          contentPadding_0._v = ButtonDefaults_getInstance().ContentPadding_1;
        }
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
        if (!(($default & 128) === 0))
          $dirty = $dirty & -29360129;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(-1097700753, $dirty, -1, 'androidx.compose.material.Button$composable (Button.kt:90)');
      }
      var contentColor$delegate = colors_0._v.contentColor$composable_6vkzar_k$(enabled_0._v, $composer_0, 14 & $dirty >> 6 | 112 & $dirty >> 18);
      var tmp_10 = modifier_0._v;
      var tmp_11 = enabled_0._v;
      var tmp_12 = shape_0._v;
      var tmp_13 = colors_0._v.backgroundColor$composable_s1t4u0_k$(enabled_0._v, $composer_0, 14 & $dirty >> 6 | 112 & $dirty >> 18).get_value_j01efc_k$().value_1;
      var tmp_14 = Button$composable$lambda(contentColor$delegate);
      var tmp_15 = Color__copy$default_impl_ectz3s(tmp_14, 1.0, 0.0, 0.0, 0.0, 14, null);
      var tmp_16 = border_0._v;
      var tmp0_safe_receiver = elevation_0._v;
      var tmp0_group = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.elevation$composable_q3yze0_k$(enabled_0._v, interactionSource_0._v, $composer_0, 14 & $dirty >> 6 | 112 & $dirty >> 6 | 896 & $dirty >> 6);
      var tmp1_safe_receiver = tmp0_group;
      var tmp_17;
      if (tmp1_safe_receiver == null) {
        tmp_17 = null;
      } else {
        var tmp_18 = tmp1_safe_receiver.get_value_j01efc_k$();
        tmp_17 = tmp_18 == null ? null : tmp_18.value_1;
      }
      var tmp2_elvis_lhs = tmp_17;
      var tmp_19;
      var tmp_20 = tmp2_elvis_lhs;
      if ((tmp_20 == null ? null : new Dp(tmp_20)) == null) {
        var tmp$ret$5;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$5 = _Dp___init__impl__ms3zkb(0);
        tmp_19 = tmp$ret$5;
      } else {
        tmp_19 = tmp2_elvis_lhs;
      }
      var tmp_21 = tmp_19;
      var tmp_22 = interactionSource_0._v;
      var tmp$ret$12;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'androidx.compose.material.Button$composable.<anonymous>' call
      var tmp_23 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_23, 7524271, true, Button$composable$lambda_1(contentColor$delegate, contentPadding_0, $dirty, content));
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_2 = tmp0_remember$composable_0;
      $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      var tmp$ret$8;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_24;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_0().Empty_1) {
        var tmp$ret$6;
        // Inline function 'androidx.compose.material.Button$composable.<anonymous>.<anonymous>' call
        tmp$ret$6 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        var value_0 = tmp$ret$6;
        tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
        tmp_24 = value_0;
      } else {
        tmp_24 = tmp0_let_0;
      }
      tmp$ret$7 = tmp_24;
      tmp$ret$8 = tmp$ret$7;
      var tmp_25 = tmp$ret$8;
      tmp$ret$9 = (tmp_25 == null ? true : isObject(tmp_25)) ? tmp_25 : THROW_CCE();
      var tmp0_0 = tmp$ret$9;
      $composer_2.endReplaceableGroup_er37p7_k$();
      tmp$ret$10 = tmp0_0;
      tmp$ret$11 = tmp$ret$10;
      tmp$ret$12 = tmp$ret$11;
      Surface$composable_0(onClick, tmp_10, tmp_11, tmp_12, tmp_13, tmp_15, tmp_16, tmp_21, tmp_22, tmp$ret$12, $composer_0, 805306368 | 14 & $dirty | 112 & $dirty | 896 & $dirty | 7168 & $dirty >> 6 | 3670016 & $dirty | 234881024 & $dirty << 15, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp1_safe_receiver_0 = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver_0 === null)
      null;
    else {
      tmp1_safe_receiver_0.updateScope_xhrf9y_k$(Button$composable$lambda$ref(onClick, modifier_0, enabled_0, interactionSource_0, elevation_0, shape_0, border_0, colors_0, contentPadding_0, content, $changed, $default));
    }
  }
  function ButtonElevation() {
  }
  ButtonElevation.$metadata$ = interfaceMeta('ButtonElevation');
  function DefaultButtonElevation$elevation$composable$slambda$slambda($interactions, resultContinuation) {
    this.$interactions_1 = $interactions;
    CoroutineImpl.call(this, resultContinuation);
  }
  DefaultButtonElevation$elevation$composable$slambda$slambda.prototype.invoke_ry6yte_k$ = function (interaction, $cont) {
    var tmp = this.create_xj5a0d_k$(interaction, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  DefaultButtonElevation$elevation$composable$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_ry6yte_k$((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $cont);
  };
  DefaultButtonElevation$elevation$composable$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          var tmp0_subject = this.interaction_1;
          if (tmp0_subject instanceof Enter) {
            this.$interactions_1.add_1j60qe_k$(this.interaction_1);
          } else {
            if (tmp0_subject instanceof Exit) {
              this.$interactions_1.remove_8hbkbr_k$(this.interaction_1.enter_1);
            } else {
              if (tmp0_subject instanceof Focus) {
                this.$interactions_1.add_1j60qe_k$(this.interaction_1);
              } else {
                if (tmp0_subject instanceof Unfocus) {
                  this.$interactions_1.remove_8hbkbr_k$(this.interaction_1.focus_1);
                } else {
                  if (tmp0_subject instanceof Press) {
                    this.$interactions_1.add_1j60qe_k$(this.interaction_1);
                  } else {
                    if (tmp0_subject instanceof Release) {
                      this.$interactions_1.remove_8hbkbr_k$(this.interaction_1.press_1);
                    } else {
                      if (tmp0_subject instanceof Cancel) {
                        this.$interactions_1.remove_8hbkbr_k$(this.interaction_1.press_1);
                      }
                    }
                  }
                }
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
  DefaultButtonElevation$elevation$composable$slambda$slambda.prototype.create_xj5a0d_k$ = function (interaction, completion) {
    var i = new DefaultButtonElevation$elevation$composable$slambda$slambda(this.$interactions_1, completion);
    i.interaction_1 = interaction;
    return i;
  };
  DefaultButtonElevation$elevation$composable$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_xj5a0d_k$((!(value == null) ? isInterface(value, Interaction) : false) ? value : THROW_CCE(), completion);
  };
  DefaultButtonElevation$elevation$composable$slambda$slambda.$metadata$ = classMeta('DefaultButtonElevation$elevation$composable$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function DefaultButtonElevation$elevation$composable$slambda$slambda_0($interactions, resultContinuation) {
    var i = new DefaultButtonElevation$elevation$composable$slambda$slambda($interactions, resultContinuation);
    var l = function (interaction, $cont) {
      return i.invoke_ry6yte_k$(interaction, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _get_defaultElevation__gc180h($this) {
    return $this.defaultElevation_1;
  }
  function _get_pressedElevation__b469jk($this) {
    return $this.pressedElevation_1;
  }
  function _get_disabledElevation__vfm3tc($this) {
    return $this.disabledElevation_1;
  }
  function _get_hoveredElevation__n1bfzr($this) {
    return $this.hoveredElevation_1;
  }
  function _get_focusedElevation__u64x5x($this) {
    return $this.focusedElevation_1;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    return this.function_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function DefaultButtonElevation$elevation$composable$slambda($interactionSource, $interactions, resultContinuation) {
    this.$interactionSource_1 = $interactionSource;
    this.$interactions_1 = $interactions;
    CoroutineImpl.call(this, resultContinuation);
  }
  DefaultButtonElevation$elevation$composable$slambda.prototype.invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $cont) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  DefaultButtonElevation$elevation$composable$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  DefaultButtonElevation$elevation$composable$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            var tmp_0 = this.$interactionSource_1.get_interactions_ql02qy_k$();
            var tmp_1 = DefaultButtonElevation$elevation$composable$slambda$slambda_0(this.$interactions_1, null);
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
  DefaultButtonElevation$elevation$composable$slambda.prototype.create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new DefaultButtonElevation$elevation$composable$slambda(this.$interactionSource_1, this.$interactions_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  DefaultButtonElevation$elevation$composable$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  DefaultButtonElevation$elevation$composable$slambda.$metadata$ = classMeta('DefaultButtonElevation$elevation$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function DefaultButtonElevation$elevation$composable$slambda_0($interactionSource, $interactions, resultContinuation) {
    var i = new DefaultButtonElevation$elevation$composable$slambda($interactionSource, $interactions, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultButtonElevation$elevation$composable$slambda_1($animatable, $target, resultContinuation) {
    this.$animatable_1 = $animatable;
    this.$target_1 = $target;
    CoroutineImpl.call(this, resultContinuation);
  }
  DefaultButtonElevation$elevation$composable$slambda_1.prototype.invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $cont) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  DefaultButtonElevation$elevation$composable$slambda_1.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  DefaultButtonElevation$elevation$composable$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = this.$animatable_1.snapTo_fkfduh_k$(new Dp(this.$target_1), this);
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
  DefaultButtonElevation$elevation$composable$slambda_1.prototype.create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new DefaultButtonElevation$elevation$composable$slambda_1(this.$animatable_1, this.$target_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  DefaultButtonElevation$elevation$composable$slambda_1.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  DefaultButtonElevation$elevation$composable$slambda_1.$metadata$ = classMeta('DefaultButtonElevation$elevation$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function DefaultButtonElevation$elevation$composable$slambda_2($animatable, $target, resultContinuation) {
    var i = new DefaultButtonElevation$elevation$composable$slambda_1($animatable, $target, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultButtonElevation$elevation$composable$slambda_3($animatable, this$0, $target, $interaction, resultContinuation) {
    this.$animatable_1 = $animatable;
    this.this$0__1 = this$0;
    this.$target_1 = $target;
    this.$interaction_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  DefaultButtonElevation$elevation$composable$slambda_3.prototype.invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $cont) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  DefaultButtonElevation$elevation$composable$slambda_3.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  DefaultButtonElevation$elevation$composable$slambda_3.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            var tmp_0 = this;
            var tmp0_subject = this.$animatable_1.get_targetValue_kq6mfd_k$().value_1;
            tmp_0.lastInteraction0__1 = equals(tmp0_subject, this.this$0__1.pressedElevation_1) ? new Press(Companion_getInstance_2().Zero_1) : equals(tmp0_subject, this.this$0__1.hoveredElevation_1) ? new Enter() : equals(tmp0_subject, this.this$0__1.focusedElevation_1) ? new Focus() : null;
            this.state_1 = 1;
            suspendResult = animateElevation(this.$animatable_1, this.$target_1, this.lastInteraction0__1, this.$interaction_1, this);
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
  DefaultButtonElevation$elevation$composable$slambda_3.prototype.create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new DefaultButtonElevation$elevation$composable$slambda_3(this.$animatable_1, this.this$0__1, this.$target_1, this.$interaction_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  DefaultButtonElevation$elevation$composable$slambda_3.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  DefaultButtonElevation$elevation$composable$slambda_3.$metadata$ = classMeta('DefaultButtonElevation$elevation$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function DefaultButtonElevation$elevation$composable$slambda_4($animatable, this$0, $target, $interaction, resultContinuation) {
    var i = new DefaultButtonElevation$elevation$composable$slambda_3($animatable, this$0, $target, $interaction, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultButtonElevation(defaultElevation, pressedElevation, disabledElevation, hoveredElevation, focusedElevation) {
    this.defaultElevation_1 = defaultElevation;
    this.pressedElevation_1 = pressedElevation;
    this.disabledElevation_1 = disabledElevation;
    this.hoveredElevation_1 = hoveredElevation;
    this.focusedElevation_1 = focusedElevation;
  }
  DefaultButtonElevation.prototype.elevation_duqnpx_k$ = function (enabled, interactionSource) {
    illegalDecoyCallException('elevation');
  };
  DefaultButtonElevation.prototype.elevation$composable_q3yze0_k$ = function (enabled, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1494019001);
    sourceInformation($composer_0, 'C(elevation$composable)503@20460L46,504@20549L1077,504@20515L1111,545@22075L51:Button.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(1494019001, $changed, -1, 'androidx.compose.material.DefaultButtonElevation.elevation$composable (Button.kt:502)');
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
    if (false ? true : tmp0_let === Companion_getInstance_0().Empty_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.material.DefaultButtonElevation.elevation$composable.<anonymous>' call
      tmp$ret$0 = mutableStateListOf();
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
    var interactions = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp1_remember$composable = $composer_0;
    var tmp2_remember$composable = 14 & $changed >> 3;
    var $composer_2 = tmp1_remember$composable;
    $composer_2.startReplaceableGroup_rp6air_k$(-1124426577);
    sourceInformation($composer_2, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache_0 = $composer_2;
    var tmp2_cache = !!($composer_2.changed_ga7h3f_k$(interactionSource) | $composer_2.changed_ga7h3f_k$(interactions));
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_0().Empty_1) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.material.DefaultButtonElevation.elevation$composable.<anonymous>' call
      tmp$ret$5 = DefaultButtonElevation$elevation$composable$slambda_0(interactionSource, interactions, null);
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
    LaunchedEffect$composable(interactionSource, tmp$ret$9, $composer_0, 14 & $changed >> 3);
    var interaction = lastOrNull(interactions);
    var tmp_3;
    if (!enabled) {
      tmp_3 = this.disabledElevation_1;
    } else {
      var tmp0_subject = interaction;
      var tmp_4;
      if (tmp0_subject instanceof Press) {
        tmp_4 = this.pressedElevation_1;
      } else {
        if (tmp0_subject instanceof Enter) {
          tmp_4 = this.hoveredElevation_1;
        } else {
          if (tmp0_subject instanceof Focus) {
            tmp_4 = this.focusedElevation_1;
          } else {
            tmp_4 = this.defaultElevation_1;
          }
        }
      }
      tmp_3 = tmp_4;
    }
    var target = tmp_3;
    var tmp$ret$14;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = $composer_0;
    var $composer_3 = tmp3_remember$composable;
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
    var tmp_5;
    if (false ? true : tmp0_let_1 === Companion_getInstance_0().Empty_1) {
      var tmp$ret$10;
      // Inline function 'androidx.compose.material.DefaultButtonElevation.elevation$composable.<anonymous>' call
      var tmp_6 = new Dp(target);
      var tmp_7 = get_VectorConverter(Companion_getInstance_3());
      tmp$ret$10 = Animatable_init_$Create$(tmp_6, tmp_7, null, null, 12, null);
      var value_1 = tmp$ret$10;
      tmp1_cache_1.updateRememberedValue_l1colo_k$(value_1);
      tmp_5 = value_1;
    } else {
      tmp_5 = tmp0_let_1;
    }
    tmp$ret$11 = tmp_5;
    tmp$ret$12 = tmp$ret$11;
    var tmp_8 = tmp$ret$12;
    tmp$ret$13 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
    var tmp0_1 = tmp$ret$13;
    $composer_3.endReplaceableGroup_er37p7_k$();
    tmp$ret$14 = tmp0_1;
    var animatable = tmp$ret$14;
    if (!enabled) {
      $composer_0.startReplaceableGroup_rp6air_k$(-1895906796);
      sourceInformation($composer_0, '549@22225L80');
      var tmp_9 = new Dp(target);
      LaunchedEffect$composable(tmp_9, DefaultButtonElevation$elevation$composable$slambda_2(animatable, target, null), $composer_0, 0);
      $composer_0.endReplaceableGroup_er37p7_k$();
    } else {
      $composer_0.startReplaceableGroup_rp6air_k$(-1895906625);
      sourceInformation($composer_0, '553@22335L546');
      var tmp_10 = new Dp(target);
      LaunchedEffect$composable(tmp_10, DefaultButtonElevation$elevation$composable$slambda_4(animatable, this, target, interaction, null), $composer_0, 0);
      $composer_0.endReplaceableGroup_er37p7_k$();
    }
    var tmp0_2 = animatable.asState_c4y001_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_2;
  };
  DefaultButtonElevation.$metadata$ = classMeta('DefaultButtonElevation', [ButtonElevation]);
  function _get_backgroundColor__c39eec($this) {
    return $this.backgroundColor_1;
  }
  function _get_contentColor__hcr1en($this) {
    return $this.contentColor_1;
  }
  function _get_disabledBackgroundColor__54coso($this) {
    return $this.disabledBackgroundColor_1;
  }
  function _get_disabledContentColor__c4xofv($this) {
    return $this.disabledContentColor_1;
  }
  function DefaultButtonColors(backgroundColor, contentColor, disabledBackgroundColor, disabledContentColor) {
    this.backgroundColor_1 = backgroundColor;
    this.contentColor_1 = contentColor;
    this.disabledBackgroundColor_1 = disabledBackgroundColor;
    this.disabledContentColor_1 = disabledContentColor;
  }
  DefaultButtonColors.prototype.backgroundColor_6xbphh_k$ = function (enabled) {
    illegalDecoyCallException('backgroundColor');
  };
  DefaultButtonColors.prototype.contentColor_niii6o_k$ = function (enabled) {
    illegalDecoyCallException('contentColor');
  };
  DefaultButtonColors.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof DefaultButtonColors)
      other;
    else
      THROW_CCE();
    if (!equals(this.backgroundColor_1, other.backgroundColor_1))
      return false;
    if (!equals(this.contentColor_1, other.contentColor_1))
      return false;
    if (!equals(this.disabledBackgroundColor_1, other.disabledBackgroundColor_1))
      return false;
    if (!equals(this.disabledContentColor_1, other.disabledContentColor_1))
      return false;
    return true;
  };
  DefaultButtonColors.prototype.hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.backgroundColor_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.contentColor_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.disabledBackgroundColor_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.disabledContentColor_1) | 0;
    return result;
  };
  DefaultButtonColors.prototype.backgroundColor$composable_s1t4u0_k$ = function (enabled, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(717515014);
    sourceInformation($composer_0, 'C(backgroundColor$composable)584@23320L79:Button.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(717515014, $changed, -1, 'androidx.compose.material.DefaultButtonColors.backgroundColor$composable (Button.kt:583)');
    }
    var tmp0 = rememberUpdatedState$composable(new Color(enabled ? this.backgroundColor_1 : this.disabledBackgroundColor_1), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  DefaultButtonColors.prototype.contentColor$composable_6vkzar_k$ = function (enabled, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1065735709);
    sourceInformation($composer_0, 'C(contentColor$composable)589@23502L73:Button.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(1065735709, $changed, -1, 'androidx.compose.material.DefaultButtonColors.contentColor$composable (Button.kt:588)');
    }
    var tmp0 = rememberUpdatedState$composable(new Color(enabled ? this.contentColor_1 : this.disabledContentColor_1), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  DefaultButtonColors.$metadata$ = classMeta('DefaultButtonColors', [ButtonColors]);
  function Button$composable$lambda($contentColor$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('contentColor', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $contentColor$delegate.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  }
  function Button$composable$lambda_0($onClick, $modifier, $enabled, $interactionSource, $elevation, $shape, $border, $colors, $contentPadding, $content, $$changed, $$default, $composer, $force) {
    return Button$composable($onClick, $modifier._v, $enabled._v, $interactionSource._v, $elevation._v, $shape._v, $border._v, $colors._v, $contentPadding._v, $content, $composer, $$changed | 1, $$default);
  }
  function Button$composable$lambda$lambda$lambda($contentPadding, $$dirty, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C118@5537L467:Button.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-630330208, $changed, -1, 'androidx.compose.material.Button$composable.<anonymous>.<anonymous>.<anonymous> (Button.kt:117)');
        }
        // Inline function 'androidx.compose.foundation.layout.Row$composable' call
        var tmp0_Row$composable = padding(defaultMinSize(Companion_getInstance(), ButtonDefaults_getInstance().MinWidth_1, ButtonDefaults_getInstance().MinHeight_1), $contentPadding._v);
        var tmp1_Row$composable = Arrangement_getInstance().Center_1;
        var tmp2_Row$composable = Companion_getInstance_4().CenterVertically_1;
        var tmp3_Row$composable = $composer_0;
        var tmp4_Row$composable = 432 | 7168 & $$dirty >> 18;
        var modifier = tmp0_Row$composable;
        var horizontalArrangement = tmp1_Row$composable;
        var verticalAlignment = tmp2_Row$composable;
        var $composer_1 = tmp3_Row$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-636825856);
        sourceInformation($composer_1, 'C(Row$composable)P(2,1,3)78@3913L58,79@3976L130:Row.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance();
        if (!(0 === 0))
          horizontalArrangement = Arrangement_getInstance().Start_1;
        if (!(0 === 0))
          verticalAlignment = Companion_getInstance_4().Top_1;
        var measurePolicy = rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer_1, 14 & tmp4_Row$composable >> 3 | 112 & tmp4_Row$composable >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable = modifier;
        var tmp1_Layout$composable = $composer_1;
        var tmp2_Layout$composable = 112 & tmp4_Row$composable << 3;
        var modifier_0 = tmp0_Layout$composable;
        var $composer_2 = tmp1_Layout$composable;
        $composer_2.startReplaceableGroup_rp6air_k$(1725976829);
        sourceInformation($composer_2, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
        var tmp1_$get_current$$composable_gn3xww = $composer_2;
        var $composer_3 = tmp1_$get_current$$composable_gn3xww;
        sourceInformationMarkerStart($composer_3, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_3.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
        sourceInformationMarkerEnd($composer_3);
        tmp$ret$0 = tmp0;
        var density = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
        var tmp3_$get_current$$composable_fm67ua = $composer_2;
        var $composer_4 = tmp3_$get_current$$composable_fm67ua;
        sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_0 = $composer_4.consume_93tbl1_k$(tmp2_$get_current$$composable_g4n2vl);
        sourceInformationMarkerEnd($composer_4);
        tmp$ret$1 = tmp0_0;
        var layoutDirection = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
        var tmp5_$get_current$$composable_el8hro = $composer_2;
        var $composer_5 = tmp5_$get_current$$composable_el8hro;
        sourceInformationMarkerStart($composer_5, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_1 = $composer_5.consume_93tbl1_k$(tmp4_$get_current$$composable_f3pcsz);
        sourceInformationMarkerEnd($composer_5);
        tmp$ret$2 = tmp0_1;
        var viewConfiguration = tmp$ret$2;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp6_ReusableComposeNode$composable = Companion_getInstance_5().Constructor_1;
        var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp8_ReusableComposeNode$composable = $composer_2;
        var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
        var $composer_6 = tmp8_ReusableComposeNode$composable;
        var tmp_0 = $composer_6.get_applier_bupu8u_k$();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_6.startReusableNode_jk07k2_k$();
        if ($composer_6.get_inserting_25mlsw_k$()) {
          $composer_6.createNode_13g769_k$(tmp6_ReusableComposeNode$composable);
        } else {
          $composer_6.useNode_inlzo8_k$();
        }
        $composer_6.disableReusing_y35tew_k$();
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_6);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_5().SetMeasurePolicy_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_5().SetDensity_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_5().SetLayoutDirection_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_5().SetViewConfiguration_1);
        $composer_6.enableReusing_6k309v_k$();
        tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
        $composer_6.startReplaceableGroup_rp6air_k$(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
        var tmp3__anonymous__ufb84q = $composer_6;
        var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
        var $composer_7 = tmp3__anonymous__ufb84q;
        $composer_7.startReplaceableGroup_rp6air_k$(-678309503);
        sourceInformation($composer_7, 'C80@4021L9:Row.kt#2w3rfo');
        if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_7.get_skipping_3owdve_k$()) {
          $content(RowScopeInstance_getInstance(), $composer_7, 6 | 112 & tmp4_Row$composable >> 6);
        } else {
          $composer_7.skipToGroupEnd_lhns3f_k$();
        }
        $composer_7.endReplaceableGroup_er37p7_k$();
        $composer_6.endReplaceableGroup_er37p7_k$();
        $composer_6.endNode_3mkr10_k$();
        $composer_2.endReplaceableGroup_er37p7_k$();
        $composer_1.endReplaceableGroup_er37p7_k$();
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function Button$composable$lambda$lambda($contentPadding, $$dirty, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C116@5487L10,115@5431L587:Button.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1699085201, $changed, -1, 'androidx.compose.material.Button$composable.<anonymous>.<anonymous> (Button.kt:114)');
        }
        var tmp_0 = MaterialTheme_getInstance().$get_typography$$composable_fm42xb_k$($composer_0, 6).button_1;
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.material.Button$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -630330208, true, Button$composable$lambda$lambda$lambda($contentPadding, $$dirty, $content));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().Empty_1) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.material.Button$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref(dispatchReceiver);
          var value = tmp$ret$0;
          tmp1_cache.updateRememberedValue_l1colo_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        ProvideTextStyle$composable(tmp_0, tmp$ret$6, $composer_0, 48);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function Button$composable$lambda_1($contentColor$delegate, $contentPadding, $$dirty, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C114@5345L683:Button.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(7524271, $changed, -1, 'androidx.compose.material.Button$composable.<anonymous> (Button.kt:113)');
        }
        var tmp_0 = [get_LocalContentAlpha().provides_3e53yf_k$(_Color___get_alpha__impl__wcfyv1(Button$composable$lambda($contentColor$delegate)))];
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.material.Button$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -1699085201, true, Button$composable$lambda$lambda($contentPadding, $$dirty, $content));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().Empty_1) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.material.Button$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_0(dispatchReceiver);
          var value = tmp$ret$0;
          tmp1_cache.updateRememberedValue_l1colo_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        CompositionLocalProvider$composable(tmp_0, tmp$ret$6, $composer_0, 48);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function Button$composable$lambda$ref($onClick, $modifier, $enabled, $interactionSource, $elevation, $shape, $border, $colors, $contentPadding, $content, $$changed, $$default) {
    return function (p0, p1) {
      Button$composable$lambda_0($onClick, $modifier, $enabled, $interactionSource, $elevation, $shape, $border, $colors, $contentPadding, $content, $$changed, $$default, p0, p1);
      return Unit_getInstance();
    };
  }
  function Card$composable(modifier, shape, backgroundColor, contentColor, border, elevation, content, $composer, $changed, $default) {
    var modifier_0 = modifier;
    var shape_0 = shape;
    var backgroundColor_0 = backgroundColor;
    var contentColor_0 = contentColor;
    var border_0 = border;
    var elevation_0 = elevation;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-796265464);
    sourceInformation($composer_0, 'C(Card$composable)P(5,6,0:c#ui.graphics.Color,3:c#ui.graphics.Color!1,4:c#ui.unit.Dp)60@2616L6,61@2674L6,62@2716L32,67@2854L218:Card.kt#jmzs0o');
    if (!(($default & 1) === 0))
      modifier_0 = Companion_getInstance();
    if (!(($default & 2) === 0))
      shape_0 = MaterialTheme_getInstance().$get_shapes$$composable_4kixjg_k$($composer_0, 6).medium_1;
    if (!(($default & 4) === 0))
      backgroundColor_0 = MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_surface_rbg09j_k$();
    if (!(($default & 8) === 0))
      contentColor_0 = contentColorFor$composable(backgroundColor_0, $composer_0, 14 & $changed >> 6);
    if (!(($default & 16) === 0))
      border_0 = null;
    if (!(($default & 32) === 0)) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(1);
      elevation_0 = tmp$ret$0;
    }
    if (isTraceInProgress()) {
      traceEventStart(-796265464, $changed, -1, 'androidx.compose.material.Card$composable (Card.kt:58)');
    }
    Surface$composable(modifier_0, shape_0, backgroundColor_0, contentColor_0, border_0, elevation_0, content, $composer_0, 14 & $changed | 112 & $changed | 896 & $changed | 7168 & $changed | 57344 & $changed | 458752 & $changed | 3670016 & $changed, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
  }
  function get_CheckboxRippleRadius() {
    init_properties_Checkbox_kt_ka492v();
    return CheckboxRippleRadius;
  }
  var CheckboxRippleRadius;
  function get_CheckboxDefaultPadding() {
    init_properties_Checkbox_kt_ka492v();
    return CheckboxDefaultPadding;
  }
  var CheckboxDefaultPadding;
  function get_CheckboxSize() {
    init_properties_Checkbox_kt_ka492v();
    return CheckboxSize;
  }
  var CheckboxSize;
  function get_StrokeWidth() {
    init_properties_Checkbox_kt_ka492v();
    return StrokeWidth;
  }
  var StrokeWidth;
  function get_RadiusSize() {
    init_properties_Checkbox_kt_ka492v();
    return RadiusSize;
  }
  var RadiusSize;
  var properties_initialized_Checkbox_kt_pem0wr;
  function init_properties_Checkbox_kt_ka492v() {
    if (properties_initialized_Checkbox_kt_pem0wr) {
    } else {
      properties_initialized_Checkbox_kt_pem0wr = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(24);
      CheckboxRippleRadius = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(2);
      CheckboxDefaultPadding = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(20);
      CheckboxSize = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(2);
      StrokeWidth = tmp$ret$0_2;
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(2);
      RadiusSize = tmp$ret$0_3;
    }
  }
  function get_HorizontalPadding() {
    init_properties_Chip_kt_yim3si();
    return HorizontalPadding;
  }
  var HorizontalPadding;
  function get_LeadingIconStartSpacing() {
    init_properties_Chip_kt_yim3si();
    return LeadingIconStartSpacing;
  }
  var LeadingIconStartSpacing;
  function get_LeadingIconEndSpacing() {
    init_properties_Chip_kt_yim3si();
    return LeadingIconEndSpacing;
  }
  var LeadingIconEndSpacing;
  function get_TrailingIconSpacing() {
    init_properties_Chip_kt_yim3si();
    return TrailingIconSpacing;
  }
  var TrailingIconSpacing;
  function get_SelectedIconContainerSize() {
    init_properties_Chip_kt_yim3si();
    return SelectedIconContainerSize;
  }
  var SelectedIconContainerSize;
  var properties_initialized_Chip_kt_fc50mq;
  function init_properties_Chip_kt_yim3si() {
    if (properties_initialized_Chip_kt_fc50mq) {
    } else {
      properties_initialized_Chip_kt_fc50mq = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(12);
      HorizontalPadding = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(4);
      LeadingIconStartSpacing = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(8);
      LeadingIconEndSpacing = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(8);
      TrailingIconSpacing = tmp$ret$0_2;
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(24);
      SelectedIconContainerSize = tmp$ret$0_3;
    }
  }
  function get_LocalColors() {
    init_properties_Colors_kt_xt6jfu();
    return LocalColors;
  }
  var LocalColors;
  function Colors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight) {
    this.primary$delegate_1 = mutableStateOf(new Color(primary), structuralEqualityPolicy());
    this.primaryVariant$delegate_1 = mutableStateOf(new Color(primaryVariant), structuralEqualityPolicy());
    this.secondary$delegate_1 = mutableStateOf(new Color(secondary), structuralEqualityPolicy());
    this.secondaryVariant$delegate_1 = mutableStateOf(new Color(secondaryVariant), structuralEqualityPolicy());
    this.background$delegate_1 = mutableStateOf(new Color(background), structuralEqualityPolicy());
    this.surface$delegate_1 = mutableStateOf(new Color(surface), structuralEqualityPolicy());
    this.error$delegate_1 = mutableStateOf(new Color(error), structuralEqualityPolicy());
    this.onPrimary$delegate_1 = mutableStateOf(new Color(onPrimary), structuralEqualityPolicy());
    this.onSecondary$delegate_1 = mutableStateOf(new Color(onSecondary), structuralEqualityPolicy());
    this.onBackground$delegate_1 = mutableStateOf(new Color(onBackground), structuralEqualityPolicy());
    this.onSurface$delegate_1 = mutableStateOf(new Color(onSurface), structuralEqualityPolicy());
    this.onError$delegate_1 = mutableStateOf(new Color(onError), structuralEqualityPolicy());
    this.isLight$delegate_1 = mutableStateOf(isLight, structuralEqualityPolicy());
  }
  Colors.prototype.set_primary_1v4zhe_k$ = function (_set____db54di) {
    var tmp0_setValue = primary$factory();
    return this.primary$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  Colors.prototype.get_primary_9vvgym_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = primary$factory_0();
    tmp$ret$0 = this.primary$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  Colors.prototype.set_primaryVariant_4vgd3b_k$ = function (_set____db54di) {
    var tmp0_setValue = primaryVariant$factory();
    return this.primaryVariant$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  Colors.prototype.get_primaryVariant_e5ihv3_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = primaryVariant$factory_0();
    tmp$ret$0 = this.primaryVariant$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  Colors.prototype.set_secondary_vcikds_k$ = function (_set____db54di) {
    var tmp0_setValue = secondary$factory();
    return this.secondary$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  Colors.prototype.get_secondary_k1hldc_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = secondary$factory_0();
    tmp$ret$0 = this.secondary$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  Colors.prototype.set_secondaryVariant_tt45mv_k$ = function (_set____db54di) {
    var tmp0_setValue = secondaryVariant$factory();
    return this.secondaryVariant$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  Colors.prototype.get_secondaryVariant_2d0yxr_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = secondaryVariant$factory_0();
    tmp$ret$0 = this.secondaryVariant$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  Colors.prototype.set_background_kwyuos_k$ = function (_set____db54di) {
    var tmp0_setValue = background$factory();
    return this.background$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  Colors.prototype.get_background_ubksc_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = background$factory_0();
    tmp$ret$0 = this.background$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  Colors.prototype.set_surface_cc9rfb_k$ = function (_set____db54di) {
    var tmp0_setValue = surface$factory();
    return this.surface$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  Colors.prototype.get_surface_rbg09j_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = surface$factory_0();
    tmp$ret$0 = this.surface$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  Colors.prototype.set_error_inofto_k$ = function (_set____db54di) {
    var tmp0_setValue = error$factory();
    return this.error$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  Colors.prototype.get_error_3wds10_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = error$factory_0();
    tmp$ret$0 = this.error$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  Colors.prototype.set_onPrimary_oij9nl_k$ = function (_set____db54di) {
    var tmp0_setValue = onPrimary$factory();
    return this.onPrimary$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  Colors.prototype.get_onPrimary_dkxau7_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onPrimary$factory_0();
    tmp$ret$0 = this.onPrimary$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  Colors.prototype.set_onSecondary_8ksqoh_k$ = function (_set____db54di) {
    var tmp0_setValue = onSecondary$factory();
    return this.onSecondary$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  Colors.prototype.get_onSecondary_jv9s1b_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onSecondary$factory_0();
    tmp$ret$0 = this.onSecondary$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  Colors.prototype.set_onBackground_98uqo3_k$ = function (_set____db54di) {
    var tmp0_setValue = onBackground$factory();
    return this.onBackground$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  Colors.prototype.get_onBackground_671u57_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onBackground$factory_0();
    tmp$ret$0 = this.onBackground$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  Colors.prototype.set_onSurface_yzo1li_k$ = function (_set____db54di) {
    var tmp0_setValue = onSurface$factory();
    return this.onSurface$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  Colors.prototype.get_onSurface_nme6dy_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onSurface$factory_0();
    tmp$ret$0 = this.onSurface$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  Colors.prototype.set_onError_ow1iaj_k$ = function (_set____db54di) {
    var tmp0_setValue = onError$factory();
    return this.onError$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  Colors.prototype.get_onError_hlsowr_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onError$factory_0();
    tmp$ret$0 = this.onError$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  Colors.prototype.set_isLight_oo2guy_k$ = function (_set____db54di) {
    var tmp0_setValue = isLight$factory();
    return this.isLight$delegate_1.set_value_rnwamw_k$(_set____db54di);
  };
  Colors.prototype.get_isLight_zemp0j_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = isLight$factory_0();
    tmp$ret$0 = this.isLight$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  Colors.prototype.copy_nlygth_k$ = function (primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight) {
    return new Colors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight);
  };
  Colors.prototype.copy$default_kg4nwy_k$ = function (primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      primary = this.get_primary_9vvgym_k$();
    if (!(($mask0 & 2) === 0))
      primaryVariant = this.get_primaryVariant_e5ihv3_k$();
    if (!(($mask0 & 4) === 0))
      secondary = this.get_secondary_k1hldc_k$();
    if (!(($mask0 & 8) === 0))
      secondaryVariant = this.get_secondaryVariant_2d0yxr_k$();
    if (!(($mask0 & 16) === 0))
      background = this.get_background_ubksc_k$();
    if (!(($mask0 & 32) === 0))
      surface = this.get_surface_rbg09j_k$();
    if (!(($mask0 & 64) === 0))
      error = this.get_error_3wds10_k$();
    if (!(($mask0 & 128) === 0))
      onPrimary = this.get_onPrimary_dkxau7_k$();
    if (!(($mask0 & 256) === 0))
      onSecondary = this.get_onSecondary_jv9s1b_k$();
    if (!(($mask0 & 512) === 0))
      onBackground = this.get_onBackground_671u57_k$();
    if (!(($mask0 & 1024) === 0))
      onSurface = this.get_onSurface_nme6dy_k$();
    if (!(($mask0 & 2048) === 0))
      onError = this.get_onError_hlsowr_k$();
    if (!(($mask0 & 4096) === 0))
      isLight = this.get_isLight_zemp0j_k$();
    return this.copy_nlygth_k$(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight);
  };
  Colors.prototype.toString = function () {
    return 'Colors(' + ('primary=' + new Color(this.get_primary_9vvgym_k$()) + ', ') + ('primaryVariant=' + new Color(this.get_primaryVariant_e5ihv3_k$()) + ', ') + ('secondary=' + new Color(this.get_secondary_k1hldc_k$()) + ', ') + ('secondaryVariant=' + new Color(this.get_secondaryVariant_2d0yxr_k$()) + ', ') + ('background=' + new Color(this.get_background_ubksc_k$()) + ', ') + ('surface=' + new Color(this.get_surface_rbg09j_k$()) + ', ') + ('error=' + new Color(this.get_error_3wds10_k$()) + ', ') + ('onPrimary=' + new Color(this.get_onPrimary_dkxau7_k$()) + ', ') + ('onSecondary=' + new Color(this.get_onSecondary_jv9s1b_k$()) + ', ') + ('onBackground=' + new Color(this.get_onBackground_671u57_k$()) + ', ') + ('onSurface=' + new Color(this.get_onSurface_nme6dy_k$()) + ', ') + ('onError=' + new Color(this.get_onError_hlsowr_k$()) + ', ') + ('isLight=' + this.get_isLight_zemp0j_k$()) + ')';
  };
  Colors.$metadata$ = classMeta('Colors');
  function lightColors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError) {
    init_properties_Colors_kt_xt6jfu();
    return new Colors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, true);
  }
  function lightColors$default(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      primary = Color_0(new Long(-10354450, 0));
    if (!(($mask0 & 2) === 0))
      primaryVariant = Color_0(new Long(-13172557, 0));
    if (!(($mask0 & 4) === 0))
      secondary = Color_0(new Long(-16524602, 0));
    if (!(($mask0 & 8) === 0))
      secondaryVariant = Color_0(new Long(-16676986, 0));
    if (!(($mask0 & 16) === 0))
      background = Companion_getInstance_1().White_1;
    if (!(($mask0 & 32) === 0))
      surface = Companion_getInstance_1().White_1;
    if (!(($mask0 & 64) === 0))
      error = Color_0(new Long(-5242848, 0));
    if (!(($mask0 & 128) === 0))
      onPrimary = Companion_getInstance_1().White_1;
    if (!(($mask0 & 256) === 0))
      onSecondary = Companion_getInstance_1().Black_1;
    if (!(($mask0 & 512) === 0))
      onBackground = Companion_getInstance_1().Black_1;
    if (!(($mask0 & 1024) === 0))
      onSurface = Companion_getInstance_1().Black_1;
    if (!(($mask0 & 2048) === 0))
      onError = Companion_getInstance_1().White_1;
    return lightColors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError);
  }
  function contentColorFor$composable(backgroundColor, $composer, $changed) {
    init_properties_Colors_kt_xt6jfu();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -62582793, 'C(contentColorFor$composable)P(0:c#ui.graphics.Color)*296@11462L6,296@11533L7:Colors.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-62582793, $changed, -1, 'androidx.compose.material.contentColorFor$composable (Colors.kt:295)');
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp0_takeOrElse = contentColorFor(MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6), backgroundColor);
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(tmp0_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance_1().Unspecified_1));
    if (tmp$ret$0) {
      tmp = tmp0_takeOrElse;
    } else {
      var tmp$ret$2;
      // Inline function 'androidx.compose.material.contentColorFor$composable.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
      var tmp1_$get_current$$composable_gn3xww = $composer_0;
      var $composer_1 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$1 = tmp0.value_1;
      var tmp0_return = tmp$ret$1;
      tmp$ret$2 = tmp0_return;
      tmp = tmp$ret$2;
    }
    tmp$ret$3 = tmp;
    var tmp1_group = tmp$ret$3;
    var tmp0_0 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  }
  function contentColorFor(_this__u8e3s4, backgroundColor) {
    init_properties_Colors_kt_xt6jfu();
    var tmp0_subject = backgroundColor;
    return equals(tmp0_subject, _this__u8e3s4.get_primary_9vvgym_k$()) ? _this__u8e3s4.get_onPrimary_dkxau7_k$() : equals(tmp0_subject, _this__u8e3s4.get_primaryVariant_e5ihv3_k$()) ? _this__u8e3s4.get_onPrimary_dkxau7_k$() : equals(tmp0_subject, _this__u8e3s4.get_secondary_k1hldc_k$()) ? _this__u8e3s4.get_onSecondary_jv9s1b_k$() : equals(tmp0_subject, _this__u8e3s4.get_secondaryVariant_2d0yxr_k$()) ? _this__u8e3s4.get_onSecondary_jv9s1b_k$() : equals(tmp0_subject, _this__u8e3s4.get_background_ubksc_k$()) ? _this__u8e3s4.get_onBackground_671u57_k$() : equals(tmp0_subject, _this__u8e3s4.get_surface_rbg09j_k$()) ? _this__u8e3s4.get_onSurface_nme6dy_k$() : equals(tmp0_subject, _this__u8e3s4.get_error_3wds10_k$()) ? _this__u8e3s4.get_onError_hlsowr_k$() : Companion_getInstance_1().Unspecified_1;
  }
  function darkColors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError) {
    init_properties_Colors_kt_xt6jfu();
    return new Colors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, false);
  }
  function darkColors$default(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      primary = Color_0(new Long(-4487428, 0));
    if (!(($mask0 & 2) === 0))
      primaryVariant = Color_0(new Long(-13172557, 0));
    if (!(($mask0 & 4) === 0))
      secondary = Color_0(new Long(-16524602, 0));
    if (!(($mask0 & 8) === 0))
      secondaryVariant = secondary;
    if (!(($mask0 & 16) === 0))
      background = Color_0(new Long(-15592942, 0));
    if (!(($mask0 & 32) === 0))
      surface = Color_0(new Long(-15592942, 0));
    if (!(($mask0 & 64) === 0))
      error = Color_0(new Long(-3185031, 0));
    if (!(($mask0 & 128) === 0))
      onPrimary = Companion_getInstance_1().Black_1;
    if (!(($mask0 & 256) === 0))
      onSecondary = Companion_getInstance_1().Black_1;
    if (!(($mask0 & 512) === 0))
      onBackground = Companion_getInstance_1().White_1;
    if (!(($mask0 & 1024) === 0))
      onSurface = Companion_getInstance_1().White_1;
    if (!(($mask0 & 2048) === 0))
      onError = Companion_getInstance_1().Black_1;
    return darkColors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError);
  }
  function updateColorsFrom(_this__u8e3s4, other) {
    init_properties_Colors_kt_xt6jfu();
    _this__u8e3s4.set_primary_1v4zhe_k$(other.get_primary_9vvgym_k$());
    _this__u8e3s4.set_primaryVariant_4vgd3b_k$(other.get_primaryVariant_e5ihv3_k$());
    _this__u8e3s4.set_secondary_vcikds_k$(other.get_secondary_k1hldc_k$());
    _this__u8e3s4.set_secondaryVariant_tt45mv_k$(other.get_secondaryVariant_2d0yxr_k$());
    _this__u8e3s4.set_background_kwyuos_k$(other.get_background_ubksc_k$());
    _this__u8e3s4.set_surface_cc9rfb_k$(other.get_surface_rbg09j_k$());
    _this__u8e3s4.set_error_inofto_k$(other.get_error_3wds10_k$());
    _this__u8e3s4.set_onPrimary_oij9nl_k$(other.get_onPrimary_dkxau7_k$());
    _this__u8e3s4.set_onSecondary_8ksqoh_k$(other.get_onSecondary_jv9s1b_k$());
    _this__u8e3s4.set_onBackground_98uqo3_k$(other.get_onBackground_671u57_k$());
    _this__u8e3s4.set_onSurface_yzo1li_k$(other.get_onSurface_nme6dy_k$());
    _this__u8e3s4.set_onError_ow1iaj_k$(other.get_onError_hlsowr_k$());
    _this__u8e3s4.set_isLight_oo2guy_k$(other.get_isLight_zemp0j_k$());
  }
  function LocalColors$lambda() {
    init_properties_Colors_kt_xt6jfu();
    return lightColors$default(null, null, null, null, null, null, null, null, null, null, null, null, 4095, null);
  }
  function primary$factory() {
    return getPropertyCallableRef('primary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_primary_9vvgym_k$());
    }, function (receiver, value) {
      return receiver.set_primary_1v4zhe_k$(value.value_1);
    });
  }
  function primary$factory_0() {
    return getPropertyCallableRef('primary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_primary_9vvgym_k$());
    }, function (receiver, value) {
      return receiver.set_primary_1v4zhe_k$(value.value_1);
    });
  }
  function primaryVariant$factory() {
    return getPropertyCallableRef('primaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_primaryVariant_e5ihv3_k$());
    }, function (receiver, value) {
      return receiver.set_primaryVariant_4vgd3b_k$(value.value_1);
    });
  }
  function primaryVariant$factory_0() {
    return getPropertyCallableRef('primaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_primaryVariant_e5ihv3_k$());
    }, function (receiver, value) {
      return receiver.set_primaryVariant_4vgd3b_k$(value.value_1);
    });
  }
  function secondary$factory() {
    return getPropertyCallableRef('secondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_secondary_k1hldc_k$());
    }, function (receiver, value) {
      return receiver.set_secondary_vcikds_k$(value.value_1);
    });
  }
  function secondary$factory_0() {
    return getPropertyCallableRef('secondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_secondary_k1hldc_k$());
    }, function (receiver, value) {
      return receiver.set_secondary_vcikds_k$(value.value_1);
    });
  }
  function secondaryVariant$factory() {
    return getPropertyCallableRef('secondaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_secondaryVariant_2d0yxr_k$());
    }, function (receiver, value) {
      return receiver.set_secondaryVariant_tt45mv_k$(value.value_1);
    });
  }
  function secondaryVariant$factory_0() {
    return getPropertyCallableRef('secondaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_secondaryVariant_2d0yxr_k$());
    }, function (receiver, value) {
      return receiver.set_secondaryVariant_tt45mv_k$(value.value_1);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_background_ubksc_k$());
    }, function (receiver, value) {
      return receiver.set_background_kwyuos_k$(value.value_1);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_background_ubksc_k$());
    }, function (receiver, value) {
      return receiver.set_background_kwyuos_k$(value.value_1);
    });
  }
  function surface$factory() {
    return getPropertyCallableRef('surface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_surface_rbg09j_k$());
    }, function (receiver, value) {
      return receiver.set_surface_cc9rfb_k$(value.value_1);
    });
  }
  function surface$factory_0() {
    return getPropertyCallableRef('surface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_surface_rbg09j_k$());
    }, function (receiver, value) {
      return receiver.set_surface_cc9rfb_k$(value.value_1);
    });
  }
  function error$factory() {
    return getPropertyCallableRef('error', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_error_3wds10_k$());
    }, function (receiver, value) {
      return receiver.set_error_inofto_k$(value.value_1);
    });
  }
  function error$factory_0() {
    return getPropertyCallableRef('error', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_error_3wds10_k$());
    }, function (receiver, value) {
      return receiver.set_error_inofto_k$(value.value_1);
    });
  }
  function onPrimary$factory() {
    return getPropertyCallableRef('onPrimary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onPrimary_dkxau7_k$());
    }, function (receiver, value) {
      return receiver.set_onPrimary_oij9nl_k$(value.value_1);
    });
  }
  function onPrimary$factory_0() {
    return getPropertyCallableRef('onPrimary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onPrimary_dkxau7_k$());
    }, function (receiver, value) {
      return receiver.set_onPrimary_oij9nl_k$(value.value_1);
    });
  }
  function onSecondary$factory() {
    return getPropertyCallableRef('onSecondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onSecondary_jv9s1b_k$());
    }, function (receiver, value) {
      return receiver.set_onSecondary_8ksqoh_k$(value.value_1);
    });
  }
  function onSecondary$factory_0() {
    return getPropertyCallableRef('onSecondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onSecondary_jv9s1b_k$());
    }, function (receiver, value) {
      return receiver.set_onSecondary_8ksqoh_k$(value.value_1);
    });
  }
  function onBackground$factory() {
    return getPropertyCallableRef('onBackground', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onBackground_671u57_k$());
    }, function (receiver, value) {
      return receiver.set_onBackground_98uqo3_k$(value.value_1);
    });
  }
  function onBackground$factory_0() {
    return getPropertyCallableRef('onBackground', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onBackground_671u57_k$());
    }, function (receiver, value) {
      return receiver.set_onBackground_98uqo3_k$(value.value_1);
    });
  }
  function onSurface$factory() {
    return getPropertyCallableRef('onSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onSurface_nme6dy_k$());
    }, function (receiver, value) {
      return receiver.set_onSurface_yzo1li_k$(value.value_1);
    });
  }
  function onSurface$factory_0() {
    return getPropertyCallableRef('onSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onSurface_nme6dy_k$());
    }, function (receiver, value) {
      return receiver.set_onSurface_yzo1li_k$(value.value_1);
    });
  }
  function onError$factory() {
    return getPropertyCallableRef('onError', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onError_hlsowr_k$());
    }, function (receiver, value) {
      return receiver.set_onError_ow1iaj_k$(value.value_1);
    });
  }
  function onError$factory_0() {
    return getPropertyCallableRef('onError', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onError_hlsowr_k$());
    }, function (receiver, value) {
      return receiver.set_onError_ow1iaj_k$(value.value_1);
    });
  }
  function isLight$factory() {
    return getPropertyCallableRef('isLight', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isLight_zemp0j_k$();
    }, function (receiver, value) {
      return receiver.set_isLight_oo2guy_k$(value);
    });
  }
  function isLight$factory_0() {
    return getPropertyCallableRef('isLight', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isLight_zemp0j_k$();
    }, function (receiver, value) {
      return receiver.set_isLight_oo2guy_k$(value);
    });
  }
  var properties_initialized_Colors_kt_23tfjm;
  function init_properties_Colors_kt_xt6jfu() {
    if (properties_initialized_Colors_kt_23tfjm) {
    } else {
      properties_initialized_Colors_kt_23tfjm = true;
      LocalColors = staticCompositionLocalOf(LocalColors$lambda);
    }
  }
  function get_LocalContentAlpha() {
    init_properties_ContentAlpha_kt_iaosd1();
    return LocalContentAlpha;
  }
  var LocalContentAlpha;
  function contentAlpha($this, highContrastAlpha, lowContrastAlpha) {
    illegalDecoyCallException('contentAlpha');
  }
  function contentAlpha$composable($this, highContrastAlpha, lowContrastAlpha, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-198048456);
    sourceInformation($composer_0, 'C(contentAlpha$composable)76@2623L7,77@2670L6:ContentAlpha.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-198048456, $changed, -1, 'androidx.compose.material.ContentAlpha.contentAlpha$composable (ContentAlpha.kt:70)');
    }
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0.value_1;
    var contentColor = tmp$ret$0;
    var lightTheme = MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_isLight_zemp0j_k$();
    var tmp;
    if (lightTheme) {
      tmp = luminance(contentColor) > 0.5 ? highContrastAlpha : lowContrastAlpha;
    } else {
      tmp = luminance(contentColor) < 0.5 ? highContrastAlpha : lowContrastAlpha;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  }
  function ContentAlpha() {
    ContentAlpha_instance = this;
    this.$stable_1 = 0;
  }
  ContentAlpha.prototype.get_high_wonai3_k$ = function () {
    illegalDecoyCallException('<get-high>');
  };
  ContentAlpha.prototype.get_medium_gky7we_k$ = function () {
    illegalDecoyCallException('<get-medium>');
  };
  ContentAlpha.prototype.get_disabled_rbmjej_k$ = function () {
    illegalDecoyCallException('<get-disabled>');
  };
  ContentAlpha.prototype.$get_high$$composable_xt02qk_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1959843334);
    sourceInformation($composer_0, 'C($get-high$$composable)34@1107L146:ContentAlpha.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-1959843334, $changed, -1, 'androidx.compose.material.ContentAlpha.$get-high$$composable (ContentAlpha.kt:34)');
    }
    HighContrastContentAlpha_getInstance();
    LowContrastContentAlpha_getInstance();
    var tmp0 = contentAlpha$composable(this, 1.0, 0.87, $composer_0, 54 | 896 & $changed << 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  ContentAlpha.prototype.$get_medium$$composable_ialx8p_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-277492921);
    sourceInformation($composer_0, 'C($get-medium$$composable)45@1458L150:ContentAlpha.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-277492921, $changed, -1, 'androidx.compose.material.ContentAlpha.$get-medium$$composable (ContentAlpha.kt:45)');
    }
    HighContrastContentAlpha_getInstance();
    LowContrastContentAlpha_getInstance();
    var tmp0 = contentAlpha$composable(this, 0.74, 0.6, $composer_0, 54 | 896 & $changed << 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  ContentAlpha.prototype.$get_disabled$$composable_xy2o02_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(856927968);
    sourceInformation($composer_0, 'C($get-disabled$$composable)56@1805L154:ContentAlpha.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(856927968, $changed, -1, 'androidx.compose.material.ContentAlpha.$get-disabled$$composable (ContentAlpha.kt:56)');
    }
    HighContrastContentAlpha_getInstance();
    LowContrastContentAlpha_getInstance();
    var tmp0 = contentAlpha$composable(this, 0.38, 0.38, $composer_0, 54 | 896 & $changed << 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  ContentAlpha.$metadata$ = objectMeta('ContentAlpha');
  var ContentAlpha_instance;
  function ContentAlpha_getInstance() {
    if (ContentAlpha_instance == null)
      new ContentAlpha();
    return ContentAlpha_instance;
  }
  function HighContrastContentAlpha() {
    HighContrastContentAlpha_instance = this;
    this.high_1 = 1.0;
    this.medium_1 = 0.74;
    this.disabled_1 = 0.38;
  }
  HighContrastContentAlpha.prototype.get_high_wonai3_k$ = function () {
    return this.high_1;
  };
  HighContrastContentAlpha.prototype.get_medium_gky7we_k$ = function () {
    return this.medium_1;
  };
  HighContrastContentAlpha.prototype.get_disabled_rbmjej_k$ = function () {
    return this.disabled_1;
  };
  HighContrastContentAlpha.$metadata$ = objectMeta('HighContrastContentAlpha');
  var HighContrastContentAlpha_instance;
  function HighContrastContentAlpha_getInstance() {
    if (HighContrastContentAlpha_instance == null)
      new HighContrastContentAlpha();
    return HighContrastContentAlpha_instance;
  }
  function LowContrastContentAlpha() {
    LowContrastContentAlpha_instance = this;
    this.high_1 = 0.87;
    this.medium_1 = 0.6;
    this.disabled_1 = 0.38;
  }
  LowContrastContentAlpha.prototype.get_high_wonai3_k$ = function () {
    return this.high_1;
  };
  LowContrastContentAlpha.prototype.get_medium_gky7we_k$ = function () {
    return this.medium_1;
  };
  LowContrastContentAlpha.prototype.get_disabled_rbmjej_k$ = function () {
    return this.disabled_1;
  };
  LowContrastContentAlpha.$metadata$ = objectMeta('LowContrastContentAlpha');
  var LowContrastContentAlpha_instance;
  function LowContrastContentAlpha_getInstance() {
    if (LowContrastContentAlpha_instance == null)
      new LowContrastContentAlpha();
    return LowContrastContentAlpha_instance;
  }
  function LocalContentAlpha$lambda() {
    init_properties_ContentAlpha_kt_iaosd1();
    return 1.0;
  }
  var properties_initialized_ContentAlpha_kt_tnmwxz;
  function init_properties_ContentAlpha_kt_iaosd1() {
    if (properties_initialized_ContentAlpha_kt_tnmwxz) {
    } else {
      properties_initialized_ContentAlpha_kt_tnmwxz = true;
      LocalContentAlpha = compositionLocalOf$default(null, LocalContentAlpha$lambda, 1, null);
    }
  }
  function get_LocalContentColor() {
    init_properties_ContentColor_kt_nv4lg0();
    return LocalContentColor;
  }
  var LocalContentColor;
  function LocalContentColor$lambda() {
    init_properties_ContentColor_kt_nv4lg0();
    return new Color(Companion_getInstance_1().Black_1);
  }
  var properties_initialized_ContentColor_kt_sc8rw;
  function init_properties_ContentColor_kt_nv4lg0() {
    if (properties_initialized_ContentColor_kt_sc8rw) {
    } else {
      properties_initialized_ContentColor_kt_sc8rw = true;
      LocalContentColor = compositionLocalOf$default(null, LocalContentColor$lambda, 1, null);
    }
  }
  function get_mouseSlop() {
    init_properties_DragGestureDetectorCopy_kt_mjg7no();
    return mouseSlop;
  }
  var mouseSlop;
  function get_defaultTouchSlop() {
    init_properties_DragGestureDetectorCopy_kt_mjg7no();
    return defaultTouchSlop;
  }
  var defaultTouchSlop;
  function get_mouseToTouchSlopRatio() {
    init_properties_DragGestureDetectorCopy_kt_mjg7no();
    return mouseToTouchSlopRatio;
  }
  var mouseToTouchSlopRatio;
  var properties_initialized_DragGestureDetectorCopy_kt_anevhc;
  function init_properties_DragGestureDetectorCopy_kt_mjg7no() {
    if (properties_initialized_DragGestureDetectorCopy_kt_anevhc) {
    } else {
      properties_initialized_DragGestureDetectorCopy_kt_anevhc = true;
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
  function get_EndDrawerPadding() {
    init_properties_Drawer_kt_3jvvt5();
    return EndDrawerPadding;
  }
  var EndDrawerPadding;
  function get_DrawerVelocityThreshold() {
    init_properties_Drawer_kt_3jvvt5();
    return DrawerVelocityThreshold;
  }
  var DrawerVelocityThreshold;
  function get_AnimationSpec() {
    init_properties_Drawer_kt_3jvvt5();
    return AnimationSpec;
  }
  var AnimationSpec;
  var properties_initialized_Drawer_kt_wd436b;
  function init_properties_Drawer_kt_3jvvt5() {
    if (properties_initialized_Drawer_kt_wd436b) {
    } else {
      properties_initialized_Drawer_kt_wd436b = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(56);
      EndDrawerPadding = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(400);
      DrawerVelocityThreshold = tmp$ret$0_0;
      AnimationSpec = TweenSpec_init_$Create$(256, 0, null, 6, null);
    }
  }
  function get_DefaultIncomingSpec() {
    init_properties_Elevation_kt_9saoi1();
    return DefaultIncomingSpec;
  }
  var DefaultIncomingSpec;
  function get_DefaultOutgoingSpec() {
    init_properties_Elevation_kt_9saoi1();
    return DefaultOutgoingSpec;
  }
  var DefaultOutgoingSpec;
  function get_HoveredOutgoingSpec() {
    init_properties_Elevation_kt_9saoi1();
    return HoveredOutgoingSpec;
  }
  var HoveredOutgoingSpec;
  function animateElevation(_this__u8e3s4, target, from, to, $cont) {
    var tmp = new $animateElevationCOROUTINE$0(_this__u8e3s4, target, from, to, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function animateElevation$default(_this__u8e3s4, target, from, to, $cont, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      from = null;
    if (!(($mask0 & 4) === 0))
      to = null;
    return animateElevation(_this__u8e3s4, target, from, to, $cont);
  }
  function ElevationDefaults() {
    ElevationDefaults_instance = this;
  }
  ElevationDefaults.prototype.incomingAnimationSpecForInteraction_ajkhsx_k$ = function (interaction) {
    var tmp0_subject = interaction;
    var tmp;
    if (tmp0_subject instanceof Press) {
      tmp = get_DefaultIncomingSpec();
    } else {
      if (tmp0_subject instanceof Start) {
        tmp = get_DefaultIncomingSpec();
      } else {
        if (tmp0_subject instanceof Enter) {
          tmp = get_DefaultIncomingSpec();
        } else {
          if (tmp0_subject instanceof Focus) {
            tmp = get_DefaultIncomingSpec();
          } else {
            tmp = null;
          }
        }
      }
    }
    return tmp;
  };
  ElevationDefaults.prototype.outgoingAnimationSpecForInteraction_r49o2v_k$ = function (interaction) {
    var tmp0_subject = interaction;
    var tmp;
    if (tmp0_subject instanceof Press) {
      tmp = get_DefaultOutgoingSpec();
    } else {
      if (tmp0_subject instanceof Start) {
        tmp = get_DefaultOutgoingSpec();
      } else {
        if (tmp0_subject instanceof Enter) {
          tmp = get_HoveredOutgoingSpec();
        } else {
          if (tmp0_subject instanceof Focus) {
            tmp = get_DefaultOutgoingSpec();
          } else {
            tmp = null;
          }
        }
      }
    }
    return tmp;
  };
  ElevationDefaults.$metadata$ = objectMeta('ElevationDefaults');
  var ElevationDefaults_instance;
  function ElevationDefaults_getInstance() {
    if (ElevationDefaults_instance == null)
      new ElevationDefaults();
    return ElevationDefaults_instance;
  }
  function $animateElevationCOROUTINE$0(_this__u8e3s4, target, from, to, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.target_1 = target;
    this.from_1 = from;
    this.to_1 = to;
  }
  $animateElevationCOROUTINE$0.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 4;
            this.spec0__1 = !(this.to_1 == null) ? ElevationDefaults_getInstance().incomingAnimationSpecForInteraction_ajkhsx_k$(this.to_1) : !(this.from_1 == null) ? ElevationDefaults_getInstance().outgoingAnimationSpecForInteraction_r49o2v_k$(this.from_1) : null;
            if (!(this.spec0__1 == null)) {
              this.state_1 = 2;
              var tmp_0 = new Dp(this.target_1);
              suspendResult = this._this__u8e3s4__1.animateTo$default_mbptcf_k$(tmp_0, this.spec0__1, null, null, this, 12, null);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.state_1 = 1;
              suspendResult = this._this__u8e3s4__1.snapTo_fkfduh_k$(new Dp(this.target_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.state_1 = 3;
            continue $sm;
          case 2:
            ;
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
  $animateElevationCOROUTINE$0.$metadata$ = classMeta('$animateElevationCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  var properties_initialized_Elevation_kt_70s6ab;
  function init_properties_Elevation_kt_9saoi1() {
    if (properties_initialized_Elevation_kt_70s6ab) {
    } else {
      properties_initialized_Elevation_kt_70s6ab = true;
      DefaultIncomingSpec = TweenSpec_init_$Create$(120, 0, get_FastOutSlowInEasing(), 2, null);
      DefaultOutgoingSpec = TweenSpec_init_$Create$(150, 0, new CubicBezierEasing(0.4, 0.0, 0.6, 1.0), 2, null);
      HoveredOutgoingSpec = TweenSpec_init_$Create$(120, 0, new CubicBezierEasing(0.4, 0.0, 0.6, 1.0), 2, null);
    }
  }
  function get_LocalElevationOverlay() {
    init_properties_ElevationOverlay_kt_chtg93();
    return LocalElevationOverlay;
  }
  var LocalElevationOverlay;
  function get_LocalAbsoluteElevation() {
    init_properties_ElevationOverlay_kt_chtg93();
    return LocalAbsoluteElevation;
  }
  var LocalAbsoluteElevation;
  function ElevationOverlay() {
  }
  ElevationOverlay.$metadata$ = interfaceMeta('ElevationOverlay');
  function DefaultElevationOverlay() {
    DefaultElevationOverlay_instance = this;
  }
  DefaultElevationOverlay.prototype.apply_e856lp_k$ = function (color, elevation) {
    illegalDecoyCallException('apply');
  };
  DefaultElevationOverlay.prototype.apply$composable_pd3zbm_k$ = function (color, elevation, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1758936578, 'C(apply$composable)P(0:c#ui.graphics.Color,1:c#ui.unit.Dp)69@2742L6,71@2841L42:ElevationOverlay.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-1758936578, $changed, -1, 'androidx.compose.material.DefaultElevationOverlay.apply$composable (ElevationOverlay.kt:68)');
    }
    var colors = MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6);
    var tmp;
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (Dp__compareTo_impl_tlg3dl(elevation, tmp$ret$0) > 0) {
      tmp_0 = !colors.get_isLight_zemp0j_k$();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var foregroundColor = calculateForegroundColor$composable(color, elevation, $composer_0, 14 & $changed | 112 & $changed);
      tmp = compositeOver(foregroundColor, color);
    } else {
      tmp = color;
    }
    var tmp1_group = tmp;
    var tmp0 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  DefaultElevationOverlay.$metadata$ = objectMeta('DefaultElevationOverlay', [ElevationOverlay]);
  var DefaultElevationOverlay_instance;
  function DefaultElevationOverlay_getInstance() {
    if (DefaultElevationOverlay_instance == null)
      new DefaultElevationOverlay();
    return DefaultElevationOverlay_instance;
  }
  function calculateForegroundColor$composable(backgroundColor, elevation, $composer, $changed) {
    init_properties_ElevationOverlay_kt_chtg93();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1391092752, 'C(calculateForegroundColor$composable)P(0:c#ui.graphics.Color,1:c#ui.unit.Dp)88@3446L32:ElevationOverlay.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-1391092752, $changed, -1, 'androidx.compose.material.calculateForegroundColor$composable (ElevationOverlay.kt:86)');
    }
    var tmp$ret$0;
    // Inline function 'kotlin.math.ln' call
    var tmp0_ln = _Dp___get_value__impl__geb1vb(elevation) + 1;
    tmp$ret$0 = Math.log(tmp0_ln);
    var alpha = (4.5 * tmp$ret$0 + 2.0) / 100.0;
    var baseForegroundColor = contentColorFor$composable(backgroundColor, $composer_0, 14 & $changed);
    var tmp0 = Color__copy$default_impl_ectz3s(baseForegroundColor, alpha, 0.0, 0.0, 0.0, 14, null);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function LocalElevationOverlay$lambda() {
    init_properties_ElevationOverlay_kt_chtg93();
    return DefaultElevationOverlay_getInstance();
  }
  function LocalAbsoluteElevation$lambda() {
    init_properties_ElevationOverlay_kt_chtg93();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return new Dp(tmp$ret$0);
  }
  var properties_initialized_ElevationOverlay_kt_xrg85x;
  function init_properties_ElevationOverlay_kt_chtg93() {
    if (properties_initialized_ElevationOverlay_kt_xrg85x) {
    } else {
      properties_initialized_ElevationOverlay_kt_xrg85x = true;
      LocalElevationOverlay = staticCompositionLocalOf(LocalElevationOverlay$lambda);
      LocalAbsoluteElevation = compositionLocalOf$default(null, LocalAbsoluteElevation$lambda, 1, null);
    }
  }
  function ExperimentalMaterialApi() {
  }
  ExperimentalMaterialApi.prototype.equals = function (other) {
    if (!(other instanceof ExperimentalMaterialApi))
      return false;
    var tmp0_other_with_cast = other instanceof ExperimentalMaterialApi ? other : THROW_CCE();
    return true;
  };
  ExperimentalMaterialApi.prototype.hashCode = function () {
    return 0;
  };
  ExperimentalMaterialApi.prototype.toString = function () {
    return '@androidx.compose.material.ExperimentalMaterialApi()';
  };
  ExperimentalMaterialApi.$metadata$ = classMeta('ExperimentalMaterialApi', [Annotation]);
  function get_FabSize() {
    init_properties_FloatingActionButton_kt_qivglw();
    return FabSize;
  }
  var FabSize;
  function get_ExtendedFabSize() {
    init_properties_FloatingActionButton_kt_qivglw();
    return ExtendedFabSize;
  }
  var ExtendedFabSize;
  function get_ExtendedFabIconPadding() {
    init_properties_FloatingActionButton_kt_qivglw();
    return ExtendedFabIconPadding;
  }
  var ExtendedFabIconPadding;
  function get_ExtendedFabTextPadding() {
    init_properties_FloatingActionButton_kt_qivglw();
    return ExtendedFabTextPadding;
  }
  var ExtendedFabTextPadding;
  var properties_initialized_FloatingActionButton_kt_6gm10w;
  function init_properties_FloatingActionButton_kt_qivglw() {
    if (properties_initialized_FloatingActionButton_kt_6gm10w) {
    } else {
      properties_initialized_FloatingActionButton_kt_6gm10w = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(56);
      FabSize = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(48);
      ExtendedFabSize = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(12);
      ExtendedFabIconPadding = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(20);
      ExtendedFabTextPadding = tmp$ret$0_2;
    }
  }
  function get_DefaultIconSizeModifier() {
    init_properties_Icon_kt_jrb2tb();
    return DefaultIconSizeModifier;
  }
  var DefaultIconSizeModifier;
  function Icon$composable(imageVector, contentDescription, modifier, tint, $composer, $changed, $default) {
    init_properties_Icon_kt_jrb2tb();
    var modifier_0 = modifier;
    var tint_0 = tint;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1798234707);
    sourceInformation($composer_0, 'C(Icon$composable)P(1!,3:c#ui.graphics.Color)60@2613L7,60@2652L7,63@2693L34,62@2669L163:Icon.kt#jmzs0o');
    if (!(($default & 4) === 0))
      modifier_0 = Companion_getInstance();
    if (!(($default & 8) === 0)) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
      var tmp1_$get_current$$composable_gn3xww = $composer_0;
      var $composer_1 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$0 = tmp0.value_1;
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalContentAlpha();
      var tmp3_$get_current$$composable_fm67ua = $composer_0;
      var $composer_2 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_2, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.consume_93tbl1_k$(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_2);
      tmp$ret$1 = tmp0_0;
      var tmp_0 = tmp$ret$1;
      tint_0 = Color__copy$default_impl_ectz3s(tmp, tmp_0, 0.0, 0.0, 0.0, 14, null);
    }
    if (isTraceInProgress()) {
      traceEventStart(-1798234707, $changed, -1, 'androidx.compose.material.Icon$composable (Icon.kt:56)');
    }
    Icon$composable_0(rememberVectorPainter$composable(imageVector, $composer_0, 14 & $changed), contentDescription, modifier_0, tint_0, $composer_0, 8 | 112 & $changed | 896 & $changed | 7168 & $changed, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
  }
  function Icon$composable_0(painter, contentDescription, modifier, tint, $composer, $changed, $default) {
    init_properties_Icon_kt_jrb2tb();
    var modifier_0 = {_v: modifier};
    var tint_0 = {_v: new Color(tint)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1405370588);
    sourceInformation($composer_0, 'C(Icon$composable)P(2!,3:c#ui.graphics.Color)118@4859L7,118@4898L7,130@5281L253:Icon.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 4) === 0)) {
      modifier_0._v = Companion_getInstance();
    }
    if (!(($default & 8) === 0)) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
      var tmp1_$get_current$$composable_gn3xww = $composer_0;
      var $composer_1 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$0 = tmp0.value_1;
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalContentAlpha();
      var tmp3_$get_current$$composable_fm67ua = $composer_0;
      var $composer_2 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_2, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.consume_93tbl1_k$(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_2);
      tmp$ret$1 = tmp0_0;
      var tmp_0 = tmp$ret$1;
      tint_0._v = new Color(Color__copy$default_impl_ectz3s(tmp, tmp_0, 0.0, 0.0, 0.0, 14, null));
      $dirty = $dirty & -7169;
    }
    if (isTraceInProgress()) {
      traceEventStart(-1405370588, $dirty, -1, 'androidx.compose.material.Icon$composable (Icon.kt:114)');
    }
    var tmp_1;
    if (tint_0._v.equals(new Color(Companion_getInstance_1().Unspecified_1))) {
      tmp_1 = null;
    } else {
      var tmp_2 = Companion_getInstance_6();
      var tmp_3 = tint_0._v.value_1;
      tmp_1 = tmp_2.tint$default_1preek_k$(tmp_3, null, 2, null);
    }
    var colorFilter = tmp_1;
    $composer_0.startReplaceableGroup_rp6air_k$(1651960994);
    sourceInformation($composer_0, '123@5137L103');
    var tmp_4;
    if (!(contentDescription == null)) {
      var tmp_5 = Companion_getInstance();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp4_remember$composable = $composer_0;
      var tmp5_remember$composable = 14 & $dirty >> 3;
      var $composer_3 = tmp4_remember$composable;
      $composer_3.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_3, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_3;
      var tmp2_cache = $composer_3.changed_ga7h3f_k$(contentDescription);
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_6;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().Empty_1) {
        var tmp$ret$2;
        // Inline function 'androidx.compose.material.Icon$composable.<anonymous>' call
        tmp$ret$2 = Icon$composable$lambda_0(contentDescription);
        var value = tmp$ret$2;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp_6 = value;
      } else {
        tmp_6 = tmp0_let;
      }
      tmp$ret$3 = tmp_6;
      tmp$ret$4 = tmp$ret$3;
      var tmp_7 = tmp$ret$4;
      tmp$ret$5 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
      var tmp0_1 = tmp$ret$5;
      $composer_3.endReplaceableGroup_er37p7_k$();
      tmp$ret$6 = tmp0_1;
      tmp_4 = semantics$default(tmp_5, false, tmp$ret$6, 1, null);
    } else {
      tmp_4 = Companion_getInstance();
    }
    var tmp0_group = tmp_4;
    $composer_0.endReplaceableGroup_er37p7_k$();
    var semantics = tmp0_group;
    var tmp0_$receiver = defaultSizeFor(toolingGraphicsLayer(modifier_0._v), painter);
    var tmp1_contentScale = Companion_getInstance_7().Fit_1;
    Box$composable(paint$default(tmp0_$receiver, painter, false, null, tmp1_contentScale, 0.0, colorFilter, 22, null).then_5qw5wu_k$(semantics), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(Icon$composable$lambda$ref(painter, contentDescription, modifier_0, tint_0, $changed, $default));
    }
  }
  function defaultSizeFor(_this__u8e3s4, painter) {
    init_properties_Icon_kt_jrb2tb();
    var tmp;
    if (equals(painter.get_intrinsicSize_x61on3_k$(), Companion_getInstance_8().Unspecified_1) ? true : isInfinite_0(painter.get_intrinsicSize_x61on3_k$())) {
      tmp = get_DefaultIconSizeModifier();
    } else {
      tmp = Companion_getInstance();
    }
    return _this__u8e3s4.then_5qw5wu_k$(tmp);
  }
  function isInfinite_0(_this__u8e3s4) {
    init_properties_Icon_kt_jrb2tb();
    return isInfinite(_Size___get_width__impl__58y75t(_this__u8e3s4)) ? isInfinite(_Size___get_height__impl__a04p02(_this__u8e3s4)) : false;
  }
  function Icon$composable$lambda($painter, $contentDescription, $modifier, $tint, $$changed, $$default, $composer, $force) {
    return Icon$composable_0($painter, $contentDescription, $modifier._v, $tint._v.value_1, $composer, $$changed | 1, $$default);
  }
  function Icon$composable$lambda_0($contentDescription) {
    return function ($this$semantics) {
      set_contentDescription($this$semantics, $contentDescription);
      set_role($this$semantics, Companion_getInstance_9().Image_1);
      return Unit_getInstance();
    };
  }
  function Icon$composable$lambda$ref($painter, $contentDescription, $modifier, $tint, $$changed, $$default) {
    return function (p0, p1) {
      Icon$composable$lambda($painter, $contentDescription, $modifier, $tint, $$changed, $$default, p0, p1);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Icon_kt_u3g1lx;
  function init_properties_Icon_kt_jrb2tb() {
    if (properties_initialized_Icon_kt_u3g1lx) {
    } else {
      properties_initialized_Icon_kt_u3g1lx = true;
      var tmp = Companion_getInstance();
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(24);
      DefaultIconSizeModifier = size(tmp, tmp$ret$0);
    }
  }
  function get_RippleRadius() {
    init_properties_IconButton_kt_8yc7an();
    return RippleRadius;
  }
  var RippleRadius;
  function IconButton$composable(onClick, modifier, enabled, interactionSource, content, $composer, $changed, $default) {
    init_properties_IconButton_kt_8yc7an();
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var interactionSource_0 = {_v: interactionSource};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1115064840);
    sourceInformation($composer_0, 'C(IconButton$composable)P(4,3,1,2)62@2761L39,73@3131L54,65@2846L598:IconButton.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(onClick) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(enabled_0._v) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.changed_ga7h3f_k$(interactionSource_0._v) : false) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 4) === 0)) {
          enabled_0._v = true;
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
          if (false ? true : tmp0_let === Companion_getInstance_0().Empty_1) {
            var tmp$ret$0;
            // Inline function 'androidx.compose.material.IconButton$composable.<anonymous>' call
            tmp$ret$0 = funMutableInteractionSource();
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
          interactionSource_0._v = tmp$ret$4;
          $dirty = $dirty & -7169;
        }
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(-1115064840, $dirty, -1, 'androidx.compose.material.IconButton$composable (IconButton.kt:58)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp0_$receiver = minimumTouchTargetSize(modifier_0._v);
      var tmp1_role = Companion_getInstance_9().Button_1;
      var tmp_1 = get_RippleRadius();
      var tmp2_indication = rememberRipple$composable(false, tmp_1, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 54, 4);
      var tmp_2 = interactionSource_0._v;
      var tmp_3 = enabled_0._v;
      var tmp1_Box$composable = clickable$default(tmp0_$receiver, tmp_2, tmp2_indication, tmp_3, null, tmp1_role, onClick, 8, null);
      var tmp2_Box$composable = Companion_getInstance_4().Center_1;
      var tmp3_Box$composable = false;
      var tmp4_Box$composable = $composer_0;
      var modifier_1 = tmp1_Box$composable;
      var contentAlignment = tmp2_Box$composable;
      var propagateMinConstraints = tmp3_Box$composable;
      var $composer_2 = tmp4_Box$composable;
      $composer_2.startReplaceableGroup_rp6air_k$(1330882304);
      sourceInformation($composer_2, 'C(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance();
      if (!(0 === 0))
        contentAlignment = Companion_getInstance_4().TopStart_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_2, 6);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp0_Layout$composable = modifier_1;
      var tmp1_Layout$composable = $composer_2;
      var tmp2_Layout$composable = 0;
      var modifier_2 = tmp0_Layout$composable;
      var $composer_3 = tmp1_Layout$composable;
      $composer_3.startReplaceableGroup_rp6air_k$(1725976829);
      sourceInformation($composer_3, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_2 = Companion_getInstance();
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_3;
      var $composer_4 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_4.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_4);
      tmp$ret$5 = tmp0_0;
      var density = tmp$ret$5;
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua = $composer_3;
      var $composer_5 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_5, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_5.consume_93tbl1_k$(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_5);
      tmp$ret$6 = tmp0_1;
      var layoutDirection = tmp$ret$6;
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro = $composer_3;
      var $composer_6 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_6, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_2 = $composer_6.consume_93tbl1_k$(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_6);
      tmp$ret$7 = tmp0_2;
      var viewConfiguration = tmp$ret$7;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_5().Constructor_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_2);
      var tmp8_ReusableComposeNode$composable = $composer_3;
      var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
      var $composer_7 = tmp8_ReusableComposeNode$composable;
      var tmp_4 = $composer_7.get_applier_bupu8u_k$();
      if (!isInterface(tmp_4, Applier)) {
        invalidApplier();
      }
      $composer_7.startReusableNode_jk07k2_k$();
      if ($composer_7.get_inserting_25mlsw_k$()) {
        $composer_7.createNode_13g769_k$(tmp6_ReusableComposeNode$composable);
      } else {
        $composer_7.useNode_inlzo8_k$();
      }
      $composer_7.disableReusing_y35tew_k$();
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_7);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_5().SetMeasurePolicy_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_5().SetDensity_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_5().SetLayoutDirection_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_5().SetViewConfiguration_1);
      $composer_7.enableReusing_6k309v_k$();
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_7)), $composer_7, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_7.startReplaceableGroup_rp6air_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp3__anonymous__ufb84q = $composer_7;
      var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_8 = tmp3__anonymous__ufb84q;
      $composer_8.startReplaceableGroup_rp6air_k$(-2137368960);
      sourceInformation($composer_8, 'C72@3384L9:Box.kt#2w3rfo');
      if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_8.get_skipping_3owdve_k$()) {
        // Inline function 'androidx.compose.material.IconButton$composable.<anonymous>' call
        var tmp5__anonymous__kpxxpo = BoxScopeInstance_getInstance();
        var tmp6__anonymous__fv9ai5 = $composer_8;
        var tmp7__anonymous__b0knam = 6;
        var $composer_9 = tmp6__anonymous__fv9ai5;
        $composer_9.startReplaceableGroup_rp6air_k$(-2146259096);
        sourceInformation($composer_9, 'C78@3354L84:IconButton.kt#jmzs0o');
        if (!((tmp7__anonymous__b0knam & 81) === 16) ? true : !$composer_9.get_skipping_3owdve_k$()) {
          var tmp_5;
          if (enabled_0._v) {
            $composer_9.startReplaceableGroup_rp6air_k$(-1248994064);
            sourceInformation($composer_9, '77@3311L7');
            var tmp$ret$8;
            // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
            var tmp0_$get_current$$composable_h5ksy7_0 = get_LocalContentAlpha();
            var tmp1_$get_current$$composable_gn3xww_0 = $composer_9;
            var $composer_10 = tmp1_$get_current$$composable_gn3xww_0;
            sourceInformationMarkerStart($composer_10, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
            var tmp0_3 = $composer_10.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7_0);
            sourceInformationMarkerEnd($composer_10);
            tmp$ret$8 = tmp0_3;
            var tmp0_group = tmp$ret$8;
            $composer_9.endReplaceableGroup_er37p7_k$();
            tmp_5 = tmp0_group;
          } else {
            $composer_9.startReplaceableGroup_rp6air_k$(-1248994038);
            sourceInformation($composer_9, '77@3337L8');
            var tmp1_group = ContentAlpha_getInstance().$get_disabled$$composable_xy2o02_k$($composer_9, 6);
            $composer_9.endReplaceableGroup_er37p7_k$();
            tmp_5 = tmp1_group;
          }
          var contentAlpha = tmp_5;
          CompositionLocalProvider$composable([get_LocalContentAlpha().provides_3e53yf_k$(contentAlpha)], content, $composer_9, 112 & $dirty >> 9);
        } else {
          $composer_9.skipToGroupEnd_lhns3f_k$();
        }
        $composer_9.endReplaceableGroup_er37p7_k$();
      } else {
        $composer_8.skipToGroupEnd_lhns3f_k$();
      }
      $composer_8.endReplaceableGroup_er37p7_k$();
      $composer_7.endReplaceableGroup_er37p7_k$();
      $composer_7.endNode_3mkr10_k$();
      $composer_3.endReplaceableGroup_er37p7_k$();
      $composer_2.endReplaceableGroup_er37p7_k$();
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(IconButton$composable$lambda$ref(onClick, modifier_0, enabled_0, interactionSource_0, content, $changed, $default));
    }
  }
  function IconButton$composable$lambda($onClick, $modifier, $enabled, $interactionSource, $content, $$changed, $$default, $composer, $force) {
    return IconButton$composable($onClick, $modifier._v, $enabled._v, $interactionSource._v, $content, $composer, $$changed | 1, $$default);
  }
  function IconButton$composable$lambda$ref($onClick, $modifier, $enabled, $interactionSource, $content, $$changed, $$default) {
    return function (p0, p1) {
      IconButton$composable$lambda($onClick, $modifier, $enabled, $interactionSource, $content, $$changed, $$default, p0, p1);
      return Unit_getInstance();
    };
  }
  var properties_initialized_IconButton_kt_ws0bv7;
  function init_properties_IconButton_kt_8yc7an() {
    if (properties_initialized_IconButton_kt_ws0bv7) {
    } else {
      properties_initialized_IconButton_kt_ws0bv7 = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(24);
      RippleRadius = tmp$ret$0;
    }
  }
  function rememberTextSelectionColors$composable(colors, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(757108492);
    sourceInformation($composer_0, 'C(rememberTextSelectionColors$composable)45@1902L6,47@1930L384:MaterialTextSelectionColors.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(757108492, $changed, -1, 'androidx.compose.material.rememberTextSelectionColors$composable (MaterialTextSelectionColors.kt:35)');
    }
    var primaryColor = colors.get_primary_9vvgym_k$();
    var backgroundColor = colors.get_background_ubksc_k$();
    $composer_0.startReplaceableGroup_rp6air_k$(-1548518187);
    sourceInformation($composer_0, '*43@1845L7');
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp0_takeOrElse = contentColorFor(colors, backgroundColor);
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(tmp0_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance_1().Unspecified_1));
    if (tmp$ret$0) {
      tmp = tmp0_takeOrElse;
    } else {
      var tmp$ret$2;
      // Inline function 'androidx.compose.material.rememberTextSelectionColors$composable.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
      var tmp1_$get_current$$composable_gn3xww = $composer_0;
      var $composer_1 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$1 = tmp0.value_1;
      var tmp0_return = tmp$ret$1;
      tmp$ret$2 = tmp0_return;
      tmp = tmp$ret$2;
    }
    tmp$ret$3 = tmp;
    var tmp1_group = tmp$ret$3;
    $composer_0.endReplaceableGroup_er37p7_k$();
    var tmp_0 = ContentAlpha_getInstance().$get_medium$$composable_ialx8p_k$($composer_0, 6);
    var textColorWithLowestAlpha = Color__copy$default_impl_ectz3s(tmp1_group, tmp_0, 0.0, 0.0, 0.0, 14, null);
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp1_remember$composable = $composer_0;
    var $composer_2 = tmp1_remember$composable;
    $composer_2.startReplaceableGroup_rp6air_k$(-1058148781);
    sourceInformation($composer_2, 'C(remember$composable)P(1,2,3):Composables.kt#9igjgp');
    var tmp$ret$7;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_2;
    var tmp2_cache = !!(!!($composer_2.changed_ga7h3f_k$(new Color(primaryColor)) | $composer_2.changed_ga7h3f_k$(new Color(backgroundColor))) | $composer_2.changed_ga7h3f_k$(new Color(textColorWithLowestAlpha)));
    var tmp$ret$6;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().Empty_1) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.material.rememberTextSelectionColors$composable.<anonymous>' call
      tmp$ret$4 = new TextSelectionColors(colors.get_primary_9vvgym_k$(), calculateSelectionBackgroundColor(primaryColor, textColorWithLowestAlpha, backgroundColor));
      var value = tmp$ret$4;
      tmp1_cache.updateRememberedValue_l1colo_k$(value);
      tmp_1 = value;
    } else {
      tmp_1 = tmp0_let;
    }
    tmp$ret$5 = tmp_1;
    tmp$ret$6 = tmp$ret$5;
    var tmp_2 = tmp$ret$6;
    tmp$ret$7 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    var tmp0_0 = tmp$ret$7;
    $composer_2.endReplaceableGroup_er37p7_k$();
    tmp$ret$8 = tmp0_0;
    var tmp0_1 = tmp$ret$8;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_1;
  }
  function calculateSelectionBackgroundColor(selectionColor, textColor, backgroundColor) {
    var maximumContrastRatio = calculateContrastRatio(selectionColor, 0.4, textColor, backgroundColor);
    var minimumContrastRatio = calculateContrastRatio(selectionColor, 0.2, textColor, backgroundColor);
    var alpha = maximumContrastRatio >= 4.5 ? 0.4 : minimumContrastRatio < 4.5 ? 0.2 : binarySearchForAccessibleSelectionColorAlpha(selectionColor, textColor, backgroundColor);
    return Color__copy$default_impl_ectz3s(selectionColor, alpha, 0.0, 0.0, 0.0, 14, null);
  }
  function calculateContrastRatio(selectionColor, selectionColorAlpha, textColor, backgroundColor) {
    var compositeBackground = compositeOver(Color__copy$default_impl_ectz3s(selectionColor, selectionColorAlpha, 0.0, 0.0, 0.0, 14, null), backgroundColor);
    var compositeTextColor = compositeOver(textColor, compositeBackground);
    return calculateContrastRatio_0(compositeTextColor, compositeBackground);
  }
  function get_DefaultSelectionBackgroundAlpha() {
    return DefaultSelectionBackgroundAlpha;
  }
  var DefaultSelectionBackgroundAlpha;
  function get_MinimumSelectionBackgroundAlpha() {
    return MinimumSelectionBackgroundAlpha;
  }
  var MinimumSelectionBackgroundAlpha;
  function get_DesiredContrastRatio() {
    return DesiredContrastRatio;
  }
  var DesiredContrastRatio;
  function binarySearchForAccessibleSelectionColorAlpha(selectionColor, textColor, backgroundColor) {
    var attempts = 0;
    var maxAttempts = 7;
    var lowAlpha = 0.2;
    var alpha = 0.4;
    var highAlpha = 0.4;
    $l$loop: while (attempts < maxAttempts) {
      var contrastRatio = calculateContrastRatio(selectionColor, alpha, textColor, backgroundColor);
      var percentageError = contrastRatio / 4.5 - 1.0;
      if (0.0 <= percentageError ? percentageError <= 0.01 : false)
        break $l$loop;
      else if (percentageError < 0.0)
        highAlpha = alpha;
      else
        lowAlpha = alpha;
      alpha = (highAlpha + lowAlpha) / 2.0;
      var tmp0 = attempts;
      attempts = tmp0 + 1 | 0;
    }
    return alpha;
  }
  function calculateContrastRatio_0(foreground, background) {
    var foregroundLuminance = luminance(foreground) + 0.05;
    var backgroundLuminance = luminance(background) + 0.05;
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    tmp$ret$0 = Math.max(foregroundLuminance, backgroundLuminance);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.min' call
    tmp$ret$1 = Math.min(foregroundLuminance, backgroundLuminance);
    return tmp / tmp$ret$1;
  }
  function MaterialTheme() {
    MaterialTheme_instance = this;
    this.$stable_1 = 0;
  }
  MaterialTheme.prototype.get_colors_c05661_k$ = function () {
    illegalDecoyCallException('<get-colors>');
  };
  MaterialTheme.prototype.get_typography_tk20co_k$ = function () {
    illegalDecoyCallException('<get-typography>');
  };
  MaterialTheme.prototype.get_shapes_jgtjwb_k$ = function () {
    illegalDecoyCallException('<get-shapes>');
  };
  MaterialTheme.prototype.$get_colors$$composable_pawxfy_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 273761861, 'C($get-colors$$composable)102@4462L7:MaterialTheme.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(273761861, $changed, -1, 'androidx.compose.material.MaterialTheme.$get-colors$$composable (MaterialTheme.kt:102)');
    }
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalColors();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    var tmp0_0 = tmp$ret$0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  };
  MaterialTheme.prototype.$get_typography$$composable_fm42xb_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1858445221, 'C($get-typography$$composable)112@4763L7:MaterialTheme.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(1858445221, $changed, -1, 'androidx.compose.material.MaterialTheme.$get-typography$$composable (MaterialTheme.kt:112)');
    }
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalTypography();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    var tmp0_0 = tmp$ret$0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  };
  MaterialTheme.prototype.$get_shapes$$composable_4kixjg_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 493638021, 'C($get-shapes$$composable)120@4971L7:MaterialTheme.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(493638021, $changed, -1, 'androidx.compose.material.MaterialTheme.$get-shapes$$composable (MaterialTheme.kt:120)');
    }
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalShapes();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    var tmp0_0 = tmp$ret$0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  };
  MaterialTheme.$metadata$ = objectMeta('MaterialTheme');
  var MaterialTheme_instance;
  function MaterialTheme_getInstance() {
    if (MaterialTheme_instance == null)
      new MaterialTheme();
    return MaterialTheme_instance;
  }
  function MaterialTheme$composable(colors, typography, shapes, content, $composer, $changed, $default) {
    var colors_0 = {_v: colors};
    var typography_0 = {_v: typography};
    var shapes_0 = {_v: shapes};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1109019765);
    sourceInformation($composer_0, 'C(MaterialTheme$composable)P(!1,3,2)59@2947L6,60@2998L10,61@3045L6,*64@3120L184,69@3367L16,70@3410L45,73@3581L4,71@3460L492:MaterialTheme.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.changed_ga7h3f_k$(colors_0._v) : false) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.changed_ga7h3f_k$(typography_0._v) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.changed_ga7h3f_k$(shapes_0._v) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(content) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          colors_0._v = MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          typography_0._v = MaterialTheme_getInstance().$get_typography$$composable_fm42xb_k$($composer_0, 6);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          shapes_0._v = MaterialTheme_getInstance().$get_shapes$$composable_4kixjg_k$($composer_0, 6);
          $dirty = $dirty & -897;
        }
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(1109019765, $dirty, -1, 'androidx.compose.material.MaterialTheme$composable (MaterialTheme.kt:58)');
      }
      var tmp$ret$5;
      // Inline function 'kotlin.apply' call
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
      if (false ? true : tmp0_let === Companion_getInstance_0().Empty_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.material.MaterialTheme$composable.<anonymous>' call
        var tmp_0 = colors_0._v;
        tmp$ret$0 = tmp_0.copy$default_kg4nwy_k$(null, null, null, null, null, null, null, null, null, null, null, null, false, 8191, null);
        var value = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      tmp$ret$1 = tmp;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      var tmp1_apply = tmp$ret$4;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.MaterialTheme$composable.<anonymous>' call
      updateColorsFrom(tmp1_apply, colors_0._v);
      tmp$ret$5 = tmp1_apply;
      var rememberedColors = tmp$ret$5;
      var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
      var rippleIndication = rememberRipple$composable(false, tmp_2, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 7);
      var selectionColors = rememberTextSelectionColors$composable(rememberedColors, $composer_0, 0);
      var tmp_3 = [get_LocalColors().provides_3e53yf_k$(rememberedColors), get_LocalContentAlpha().provides_3e53yf_k$(ContentAlpha_getInstance().$get_high$$composable_xt02qk_k$($composer_0, 6)), get_LocalIndication().provides_3e53yf_k$(rippleIndication), get_LocalRippleTheme().provides_3e53yf_k$(MaterialRippleTheme_getInstance()), get_LocalShapes().provides_3e53yf_k$(shapes_0._v), get_LocalTextSelectionColors().provides_3e53yf_k$(selectionColors), get_LocalTypography().provides_3e53yf_k$(typography_0._v)];
      var tmp$ret$12;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'androidx.compose.material.MaterialTheme$composable.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, -1740102967, true, MaterialTheme$composable$lambda_0(typography_0, content, $dirty));
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_2 = tmp0_remember$composable_0;
      $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      var tmp$ret$8;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_0().Empty_1) {
        var tmp$ret$6;
        // Inline function 'androidx.compose.material.MaterialTheme$composable.<anonymous>.<anonymous>' call
        tmp$ret$6 = ComposableLambda$invoke$ref_3(dispatchReceiver);
        var value_0 = tmp$ret$6;
        tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = tmp0_let_0;
      }
      tmp$ret$7 = tmp_5;
      tmp$ret$8 = tmp$ret$7;
      var tmp_6 = tmp$ret$8;
      tmp$ret$9 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      var tmp0_0 = tmp$ret$9;
      $composer_2.endReplaceableGroup_er37p7_k$();
      tmp$ret$10 = tmp0_0;
      tmp$ret$11 = tmp$ret$10;
      tmp$ret$12 = tmp$ret$11;
      CompositionLocalProvider$composable(tmp_3, tmp$ret$12, $composer_0, 48);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(MaterialTheme$composable$lambda$ref(colors_0, typography_0, shapes_0, content, $changed, $default));
    }
  }
  function MaterialRippleTheme() {
    MaterialRippleTheme_instance = this;
  }
  MaterialRippleTheme.prototype.defaultColor_r8g18n_k$ = function () {
    illegalDecoyCallException('defaultColor');
  };
  MaterialRippleTheme.prototype.rippleAlpha_cuqqk2_k$ = function () {
    illegalDecoyCallException('rippleAlpha');
  };
  MaterialRippleTheme.prototype.defaultColor$composable_3q39e6_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1211684040);
    sourceInformation($composer_0, 'C(defaultColor$composable)128@5172L7,129@5220L6:MaterialTheme.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-1211684040, $changed, -1, 'androidx.compose.material.MaterialRippleTheme.defaultColor$composable (MaterialTheme.kt:127)');
    }
    var tmp = Companion_getInstance_10();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0.value_1;
    var tmp0_0 = tmp.defaultRippleColor_f5ayyv_k$(tmp$ret$0, MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_isLight_zemp0j_k$());
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  };
  MaterialRippleTheme.prototype.rippleAlpha$composable_ezucwt_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-450539707);
    sourceInformation($composer_0, 'C(rippleAlpha$composable)134@5368L7,135@5412L6:MaterialTheme.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-450539707, $changed, -1, 'androidx.compose.material.MaterialRippleTheme.rippleAlpha$composable (MaterialTheme.kt:133)');
    }
    var tmp = Companion_getInstance_10();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0.value_1;
    var tmp0_0 = tmp.defaultRippleAlpha_46jx2p_k$(tmp$ret$0, MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_isLight_zemp0j_k$());
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  };
  MaterialRippleTheme.$metadata$ = objectMeta('MaterialRippleTheme', [RippleTheme]);
  var MaterialRippleTheme_instance;
  function MaterialRippleTheme_getInstance() {
    if (MaterialRippleTheme_instance == null)
      new MaterialRippleTheme();
    return MaterialRippleTheme_instance;
  }
  function MaterialTheme$composable$lambda($colors, $typography, $shapes, $content, $$changed, $$default, $composer, $force) {
    return MaterialTheme$composable($colors._v, $typography._v, $shapes._v, $content, $composer, $$changed | 1, $$default);
  }
  function MaterialTheme$composable$lambda$lambda($content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C81@3906L30:MaterialTheme.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(181426554, $changed, -1, 'androidx.compose.material.MaterialTheme$composable.<anonymous>.<anonymous> (MaterialTheme.kt:80)');
        }
        PlatformMaterialTheme$composable($content, $composer_0, 14 & $$dirty >> 9);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function MaterialTheme$composable$lambda_0($typography, $content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C80@3849L97:MaterialTheme.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1740102967, $changed, -1, 'androidx.compose.material.MaterialTheme$composable.<anonymous> (MaterialTheme.kt:79)');
        }
        var tmp_0 = $typography._v.body1__1;
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.material.MaterialTheme$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 181426554, true, MaterialTheme$composable$lambda$lambda($content, $$dirty));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().Empty_1) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.material.MaterialTheme$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_2(dispatchReceiver);
          var value = tmp$ret$0;
          tmp1_cache.updateRememberedValue_l1colo_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        ProvideTextStyle$composable(tmp_0, tmp$ret$6, $composer_0, 48);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function MaterialTheme$composable$lambda$ref($colors, $typography, $shapes, $content, $$changed, $$default) {
    return function (p0, p1) {
      MaterialTheme$composable$lambda($colors, $typography, $shapes, $content, $$changed, $$default, p0, p1);
      return Unit_getInstance();
    };
  }
  function get_MenuElevation() {
    init_properties_Menu_kt_v562sl();
    return MenuElevation;
  }
  var MenuElevation;
  function get_MenuVerticalMargin() {
    init_properties_Menu_kt_v562sl();
    return MenuVerticalMargin;
  }
  var MenuVerticalMargin;
  function get_DropdownMenuItemHorizontalPadding() {
    init_properties_Menu_kt_v562sl();
    return DropdownMenuItemHorizontalPadding;
  }
  var DropdownMenuItemHorizontalPadding;
  function get_DropdownMenuVerticalPadding() {
    init_properties_Menu_kt_v562sl();
    return DropdownMenuVerticalPadding;
  }
  var DropdownMenuVerticalPadding;
  function get_DropdownMenuItemDefaultMinWidth() {
    init_properties_Menu_kt_v562sl();
    return DropdownMenuItemDefaultMinWidth;
  }
  var DropdownMenuItemDefaultMinWidth;
  function get_DropdownMenuItemDefaultMaxWidth() {
    init_properties_Menu_kt_v562sl();
    return DropdownMenuItemDefaultMaxWidth;
  }
  var DropdownMenuItemDefaultMaxWidth;
  function get_DropdownMenuItemDefaultMinHeight() {
    init_properties_Menu_kt_v562sl();
    return DropdownMenuItemDefaultMinHeight;
  }
  var DropdownMenuItemDefaultMinHeight;
  var properties_initialized_Menu_kt_ipl1mn;
  function init_properties_Menu_kt_v562sl() {
    if (properties_initialized_Menu_kt_ipl1mn) {
    } else {
      properties_initialized_Menu_kt_ipl1mn = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(8);
      MenuElevation = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(48);
      MenuVerticalMargin = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(16);
      DropdownMenuItemHorizontalPadding = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(8);
      DropdownMenuVerticalPadding = tmp$ret$0_2;
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(112);
      DropdownMenuItemDefaultMinWidth = tmp$ret$0_3;
      var tmp$ret$0_4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_4 = _Dp___init__impl__ms3zkb(280);
      DropdownMenuItemDefaultMaxWidth = tmp$ret$0_4;
      var tmp$ret$0_5;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_5 = _Dp___init__impl__ms3zkb(48);
      DropdownMenuItemDefaultMinHeight = tmp$ret$0_5;
    }
  }
  function get_NavigationRailAnimationSpec() {
    init_properties_NavigationRail_kt_dapr8s();
    return NavigationRailAnimationSpec;
  }
  var NavigationRailAnimationSpec;
  function get_NavigationRailItemSize() {
    init_properties_NavigationRail_kt_dapr8s();
    return NavigationRailItemSize;
  }
  var NavigationRailItemSize;
  function get_NavigationRailItemCompactSize() {
    init_properties_NavigationRail_kt_dapr8s();
    return NavigationRailItemCompactSize;
  }
  var NavigationRailItemCompactSize;
  function get_NavigationRailPadding() {
    init_properties_NavigationRail_kt_dapr8s();
    return NavigationRailPadding;
  }
  var NavigationRailPadding;
  function get_HeaderPadding() {
    init_properties_NavigationRail_kt_dapr8s();
    return HeaderPadding;
  }
  var HeaderPadding;
  function get_ItemLabelBaselineBottomOffset() {
    init_properties_NavigationRail_kt_dapr8s();
    return ItemLabelBaselineBottomOffset;
  }
  var ItemLabelBaselineBottomOffset;
  function get_ItemIconTopOffset() {
    init_properties_NavigationRail_kt_dapr8s();
    return ItemIconTopOffset;
  }
  var ItemIconTopOffset;
  var properties_initialized_NavigationRail_kt_2gzc3c;
  function init_properties_NavigationRail_kt_dapr8s() {
    if (properties_initialized_NavigationRail_kt_2gzc3c) {
    } else {
      properties_initialized_NavigationRail_kt_2gzc3c = true;
      NavigationRailAnimationSpec = TweenSpec_init_$Create$(300, 0, get_FastOutSlowInEasing(), 2, null);
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(72);
      NavigationRailItemSize = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(56);
      NavigationRailItemCompactSize = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(8);
      NavigationRailPadding = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(8);
      HeaderPadding = tmp$ret$0_2;
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(16);
      ItemLabelBaselineBottomOffset = tmp$ret$0_3;
      var tmp$ret$0_4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_4 = _Dp___init__impl__ms3zkb(14);
      ItemIconTopOffset = tmp$ret$0_4;
    }
  }
  function get_OutlinedTextFieldInnerPadding() {
    init_properties_OutlinedTextField_kt_u4ax6x();
    return OutlinedTextFieldInnerPadding;
  }
  var OutlinedTextFieldInnerPadding;
  function get_OutlinedTextFieldTopPadding() {
    init_properties_OutlinedTextField_kt_u4ax6x();
    return OutlinedTextFieldTopPadding;
  }
  var OutlinedTextFieldTopPadding;
  var properties_initialized_OutlinedTextField_kt_gr7zs5;
  function init_properties_OutlinedTextField_kt_u4ax6x() {
    if (properties_initialized_OutlinedTextField_kt_gr7zs5) {
    } else {
      properties_initialized_OutlinedTextField_kt_gr7zs5 = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
      OutlinedTextFieldInnerPadding = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(8);
      OutlinedTextFieldTopPadding = tmp$ret$0_0;
    }
  }
  function get_LinearIndicatorHeight() {
    init_properties_ProgressIndicator_kt_ivxr2q();
    return LinearIndicatorHeight;
  }
  var LinearIndicatorHeight;
  function get_LinearIndicatorWidth() {
    init_properties_ProgressIndicator_kt_ivxr2q();
    return LinearIndicatorWidth;
  }
  var LinearIndicatorWidth;
  function get_CircularIndicatorDiameter() {
    init_properties_ProgressIndicator_kt_ivxr2q();
    return CircularIndicatorDiameter;
  }
  var CircularIndicatorDiameter;
  function get_FirstLineHeadEasing() {
    init_properties_ProgressIndicator_kt_ivxr2q();
    return FirstLineHeadEasing;
  }
  var FirstLineHeadEasing;
  function get_FirstLineTailEasing() {
    init_properties_ProgressIndicator_kt_ivxr2q();
    return FirstLineTailEasing;
  }
  var FirstLineTailEasing;
  function get_SecondLineHeadEasing() {
    init_properties_ProgressIndicator_kt_ivxr2q();
    return SecondLineHeadEasing;
  }
  var SecondLineHeadEasing;
  function get_SecondLineTailEasing() {
    init_properties_ProgressIndicator_kt_ivxr2q();
    return SecondLineTailEasing;
  }
  var SecondLineTailEasing;
  function get_CircularEasing() {
    init_properties_ProgressIndicator_kt_ivxr2q();
    return CircularEasing;
  }
  var CircularEasing;
  function ProgressIndicatorDefaults() {
    ProgressIndicatorDefaults_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
    tmp.StrokeWidth_1 = tmp$ret$0;
    this.IndicatorBackgroundOpacity_1 = 0.24;
    var tmp_0 = this;
    Spring_getInstance();
    Spring_getInstance();
    tmp_0.ProgressAnimationSpec_1 = new SpringSpec(1.0, 50.0, 1 / 1000.0);
    this.$stable_1 = 0;
  }
  ProgressIndicatorDefaults.prototype.get_StrokeWidth_ciyx9c_k$ = function () {
    return this.StrokeWidth_1;
  };
  ProgressIndicatorDefaults.prototype.get_IndicatorBackgroundOpacity_19bkuv_k$ = function () {
    return this.IndicatorBackgroundOpacity_1;
  };
  ProgressIndicatorDefaults.prototype.get_ProgressAnimationSpec_711rtj_k$ = function () {
    return this.ProgressAnimationSpec_1;
  };
  ProgressIndicatorDefaults.$metadata$ = objectMeta('ProgressIndicatorDefaults');
  var ProgressIndicatorDefaults_instance;
  function ProgressIndicatorDefaults_getInstance() {
    if (ProgressIndicatorDefaults_instance == null)
      new ProgressIndicatorDefaults();
    return ProgressIndicatorDefaults_instance;
  }
  function CircularProgressIndicator$composable(progress, modifier, color, strokeWidth, $composer, $changed, $default) {
    init_properties_ProgressIndicator_kt_ivxr2q();
    var modifier_0 = {_v: modifier};
    var color_0 = {_v: new Color(color)};
    var strokeWidth_0 = {_v: new Dp(strokeWidth)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-292122964);
    sourceInformation($composer_0, 'C(CircularProgressIndicator$composable)P(2,1,0:c#ui.graphics.Color,3:c#ui.unit.Dp)226@9099L6,*229@9214L7,232@9300L296:ProgressIndicator.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_7hxtmu_k$(progress) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.changed_ga0fqa_k$(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.value_1))) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_7hxtmu_k$(_Dp___get_value__impl__geb1vb(strokeWidth_0._v.value_1)) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 4) === 0)) {
          color_0._v = new Color(MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_primary_9vvgym_k$());
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          strokeWidth_0._v = new Dp(ProgressIndicatorDefaults_getInstance().StrokeWidth_1);
        }
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(-292122964, $changed, -1, 'androidx.compose.material.CircularProgressIndicator$composable (ProgressIndicator.kt:222)');
      }
      var tmp$ret$2;
      // Inline function 'kotlin.with' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_0;
      var $composer_1 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$0 = tmp0;
      var tmp2_with = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.material.CircularProgressIndicator$composable.<anonymous>' call
      var tmp = tmp2_with.toPx_u0ojv5_k$(strokeWidth_0._v.value_1);
      var tmp_0 = Companion_getInstance_11().Butt_1;
      var tmp0_return = Stroke_init_$Create$(tmp, 0.0, tmp_0, null, null, 26, null);
      tmp$ret$1 = tmp0_return;
      tmp$ret$2 = tmp$ret$1;
      var stroke = tmp$ret$2;
      var tmp_1 = modifier_0._v;
      var tmp_2 = size(progressSemantics$default(tmp_1, progress, null, 0, 6, null), get_CircularIndicatorDiameter());
      Canvas$composable(tmp_2, CircularProgressIndicator$composable$lambda_0(progress, color_0, stroke), $composer_0, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(CircularProgressIndicator$composable$lambda$ref(progress, modifier_0, color_0, strokeWidth_0, $changed, $default));
    }
  }
  function drawDeterminateCircularIndicator(_this__u8e3s4, startAngle, sweep, color, stroke) {
    init_properties_ProgressIndicator_kt_ivxr2q();
    return drawCircularIndicator(_this__u8e3s4, startAngle, sweep, color, stroke);
  }
  function drawCircularIndicator(_this__u8e3s4, startAngle, sweep, color, stroke) {
    init_properties_ProgressIndicator_kt_ivxr2q();
    var diameterOffset = stroke.width_1 / 2;
    var arcDimen = _Size___get_width__impl__58y75t(_this__u8e3s4.get_size_x9ctfw_k$()) - 2 * diameterOffset;
    var tmp = Offset(diameterOffset, diameterOffset);
    var tmp_0 = Size(arcDimen, arcDimen);
    _this__u8e3s4.drawArc$default_y02lvi_k$(color, startAngle, sweep, false, tmp, tmp_0, 0.0, stroke, null, null, 832, null);
  }
  function CircularProgressIndicator$composable$lambda($progress, $modifier, $color, $strokeWidth, $$changed, $$default, $composer, $force) {
    return CircularProgressIndicator$composable($progress, $modifier._v, $color._v.value_1, $strokeWidth._v.value_1, $composer, $$changed | 1, $$default);
  }
  function CircularProgressIndicator$composable$lambda_0($progress, $color, $stroke) {
    return function ($this$Canvas) {
      var startAngle = 270.0;
      var sweep = $progress * 360.0;
      drawDeterminateCircularIndicator($this$Canvas, startAngle, sweep, $color._v.value_1, $stroke);
      return Unit_getInstance();
    };
  }
  function CircularProgressIndicator$composable$lambda$ref($progress, $modifier, $color, $strokeWidth, $$changed, $$default) {
    return function (p0, p1) {
      CircularProgressIndicator$composable$lambda($progress, $modifier, $color, $strokeWidth, $$changed, $$default, p0, p1);
      return Unit_getInstance();
    };
  }
  var properties_initialized_ProgressIndicator_kt_5iutny;
  function init_properties_ProgressIndicator_kt_ivxr2q() {
    if (properties_initialized_ProgressIndicator_kt_5iutny) {
    } else {
      properties_initialized_ProgressIndicator_kt_5iutny = true;
      LinearIndicatorHeight = ProgressIndicatorDefaults_getInstance().StrokeWidth_1;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(240);
      LinearIndicatorWidth = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(40);
      CircularIndicatorDiameter = tmp$ret$0_0;
      FirstLineHeadEasing = new CubicBezierEasing(0.2, 0.0, 0.8, 1.0);
      FirstLineTailEasing = new CubicBezierEasing(0.4, 0.0, 1.0, 1.0);
      SecondLineHeadEasing = new CubicBezierEasing(0.0, 0.0, 0.65, 1.0);
      SecondLineTailEasing = new CubicBezierEasing(0.1, 0.0, 0.45, 1.0);
      CircularEasing = new CubicBezierEasing(0.4, 0.0, 0.2, 1.0);
    }
  }
  function get_RadioButtonRippleRadius() {
    init_properties_RadioButton_kt_t5r5a1();
    return RadioButtonRippleRadius;
  }
  var RadioButtonRippleRadius;
  function get_RadioButtonPadding() {
    init_properties_RadioButton_kt_t5r5a1();
    return RadioButtonPadding;
  }
  var RadioButtonPadding;
  function get_RadioButtonSize() {
    init_properties_RadioButton_kt_t5r5a1();
    return RadioButtonSize;
  }
  var RadioButtonSize;
  function get_RadioRadius() {
    init_properties_RadioButton_kt_t5r5a1();
    return RadioRadius;
  }
  var RadioRadius;
  function get_RadioButtonDotSize() {
    init_properties_RadioButton_kt_t5r5a1();
    return RadioButtonDotSize;
  }
  var RadioButtonDotSize;
  function get_RadioStrokeWidth() {
    init_properties_RadioButton_kt_t5r5a1();
    return RadioStrokeWidth;
  }
  var RadioStrokeWidth;
  var properties_initialized_RadioButton_kt_x3rbx;
  function init_properties_RadioButton_kt_t5r5a1() {
    if (properties_initialized_RadioButton_kt_x3rbx) {
    } else {
      properties_initialized_RadioButton_kt_x3rbx = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(24);
      RadioButtonRippleRadius = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(2);
      RadioButtonPadding = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(20);
      RadioButtonSize = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      var tmp0_div = get_RadioButtonSize();
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_div) / 2);
      RadioRadius = tmp$ret$0_2;
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(12);
      RadioButtonDotSize = tmp$ret$0_3;
      var tmp$ret$0_4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_4 = _Dp___init__impl__ms3zkb(2);
      RadioStrokeWidth = tmp$ret$0_4;
    }
  }
  function get_LocalFabPlacement() {
    init_properties_Scaffold_kt_g394ws();
    return LocalFabPlacement;
  }
  var LocalFabPlacement;
  function get_FabSpacing() {
    init_properties_Scaffold_kt_g394ws();
    return FabSpacing;
  }
  var FabSpacing;
  function FabPlacement(isDocked, left, width, height) {
    this.isDocked_1 = isDocked;
    this.left_1 = left;
    this.width_1 = width;
    this.height_1 = height;
  }
  FabPlacement.prototype.get_isDocked_sfq085_k$ = function () {
    return this.isDocked_1;
  };
  FabPlacement.prototype.get_left_woprgw_k$ = function () {
    return this.left_1;
  };
  FabPlacement.prototype.get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  FabPlacement.prototype.get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  FabPlacement.$metadata$ = classMeta('FabPlacement');
  function LocalFabPlacement$lambda() {
    init_properties_Scaffold_kt_g394ws();
    return null;
  }
  var properties_initialized_Scaffold_kt_ayrd2w;
  function init_properties_Scaffold_kt_g394ws() {
    if (properties_initialized_Scaffold_kt_ayrd2w) {
    } else {
      properties_initialized_Scaffold_kt_ayrd2w = true;
      LocalFabPlacement = staticCompositionLocalOf(LocalFabPlacement$lambda);
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
      FabSpacing = tmp$ret$0;
    }
  }
  function get_LocalShapes() {
    init_properties_Shapes_kt_q27cns();
    return LocalShapes;
  }
  var LocalShapes;
  function Shapes_init_$Init$(small, medium, large, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
      tmp$ret$0_0 = Unit_getInstance();
      small = RoundedCornerShape(tmp$ret$0);
    }
    if (!(($mask0 & 2) === 0)) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(4);
      tmp$ret$1 = Unit_getInstance();
      medium = RoundedCornerShape(tmp$ret$0_1);
    }
    if (!(($mask0 & 4) === 0)) {
      var tmp$ret$0_2;
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$2 = Unit_getInstance();
      large = RoundedCornerShape(tmp$ret$0_2);
    }
    Shapes.call($this, small, medium, large);
    return $this;
  }
  function Shapes_init_$Create$(small, medium, large, $mask0, $marker) {
    return Shapes_init_$Init$(small, medium, large, $mask0, $marker, Object.create(Shapes.prototype));
  }
  function Shapes(small, medium, large) {
    this.small_1 = small;
    this.medium_1 = medium;
    this.large_1 = large;
  }
  Shapes.prototype.get_small_iylg4e_k$ = function () {
    return this.small_1;
  };
  Shapes.prototype.get_medium_gky7we_k$ = function () {
    return this.medium_1;
  };
  Shapes.prototype.get_large_iujklu_k$ = function () {
    return this.large_1;
  };
  Shapes.prototype.copy_w6gorw_k$ = function (small, medium, large) {
    return new Shapes(small, medium, large);
  };
  Shapes.prototype.copy$default_phj8z2_k$ = function (small, medium, large, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      small = this.small_1;
    if (!(($mask0 & 2) === 0))
      medium = this.medium_1;
    if (!(($mask0 & 4) === 0))
      large = this.large_1;
    return this.copy_w6gorw_k$(small, medium, large);
  };
  Shapes.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shapes))
      return false;
    if (!equals(this.small_1, other.small_1))
      return false;
    if (!equals(this.medium_1, other.medium_1))
      return false;
    if (!equals(this.large_1, other.large_1))
      return false;
    return true;
  };
  Shapes.prototype.hashCode = function () {
    var result = hashCode(this.small_1);
    result = imul(31, result) + hashCode(this.medium_1) | 0;
    result = imul(31, result) + hashCode(this.large_1) | 0;
    return result;
  };
  Shapes.prototype.toString = function () {
    return 'Shapes(small=' + this.small_1 + ', medium=' + this.medium_1 + ', large=' + this.large_1 + ')';
  };
  Shapes.$metadata$ = classMeta('Shapes');
  function LocalShapes$lambda() {
    init_properties_Shapes_kt_q27cns();
    return Shapes_init_$Create$(null, null, null, 7, null);
  }
  var properties_initialized_Shapes_kt_91wqbw;
  function init_properties_Shapes_kt_q27cns() {
    if (properties_initialized_Shapes_kt_91wqbw) {
    } else {
      properties_initialized_Shapes_kt_91wqbw = true;
      LocalShapes = staticCompositionLocalOf(LocalShapes$lambda);
    }
  }
  function get_ThumbRadius() {
    init_properties_Slider_kt_c4fg9z();
    return ThumbRadius;
  }
  var ThumbRadius;
  function get_ThumbRippleRadius() {
    init_properties_Slider_kt_c4fg9z();
    return ThumbRippleRadius;
  }
  var ThumbRippleRadius;
  function get_ThumbDefaultElevation() {
    init_properties_Slider_kt_c4fg9z();
    return ThumbDefaultElevation;
  }
  var ThumbDefaultElevation;
  function get_ThumbPressedElevation() {
    init_properties_Slider_kt_c4fg9z();
    return ThumbPressedElevation;
  }
  var ThumbPressedElevation;
  function get_TrackHeight() {
    init_properties_Slider_kt_c4fg9z();
    return TrackHeight;
  }
  var TrackHeight;
  function get_SliderHeight() {
    init_properties_Slider_kt_c4fg9z();
    return SliderHeight;
  }
  var SliderHeight;
  function get_SliderMinWidth() {
    init_properties_Slider_kt_c4fg9z();
    return SliderMinWidth;
  }
  var SliderMinWidth;
  function get_DefaultSliderConstraints() {
    init_properties_Slider_kt_c4fg9z();
    return DefaultSliderConstraints;
  }
  var DefaultSliderConstraints;
  function get_SliderToTickAnimation() {
    init_properties_Slider_kt_c4fg9z();
    return SliderToTickAnimation;
  }
  var SliderToTickAnimation;
  function Slider$composable(value, onValueChange, modifier, enabled, valueRange, steps, onValueChangeFinished, interactionSource, colors, $composer, $changed, $default) {
    init_properties_Slider_kt_c4fg9z();
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var valueRange_0 = {_v: valueRange};
    var steps_0 = {_v: steps};
    var onValueChangeFinished_0 = {_v: onValueChangeFinished};
    var interactionSource_0 = {_v: interactionSource};
    var colors_0 = {_v: colors};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-389757584);
    sourceInformation($composer_0, 'C(Slider$composable)P(7,4,3,1,8,6,5,2)162@7776L39,163@7859L8,166@7952L35,167@8012L59,170@8109L7,172@8166L29,173@8200L3501:Slider.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_7hxtmu_k$(value) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(onValueChange) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(enabled_0._v) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.changed_ga7h3f_k$(valueRange_0._v) : false) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_s0r703_k$(steps_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(onValueChangeFinished_0._v) ? 1048576 : 524288);
    if (($changed & 29360128) === 0)
      $dirty = $dirty | ((($default & 128) === 0 ? $composer_0.changed_ga7h3f_k$(interactionSource_0._v) : false) ? 8388608 : 4194304);
    if (($changed & 234881024) === 0)
      $dirty = $dirty | ((($default & 256) === 0 ? $composer_0.changed_ga7h3f_k$(colors_0._v) : false) ? 67108864 : 33554432);
    if (!(($dirty & 191739611) === 38347922) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 4) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 8) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 16) === 0)) {
          valueRange_0._v = rangeTo(0.0, 1.0);
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          steps_0._v = 0;
        }
        if (!(($default & 64) === 0)) {
          onValueChangeFinished_0._v = null;
        }
        if (!(($default & 128) === 0)) {
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
          if (false ? true : tmp0_let === Companion_getInstance_0().Empty_1) {
            var tmp$ret$0;
            // Inline function 'androidx.compose.material.Slider$composable.<anonymous>' call
            tmp$ret$0 = funMutableInteractionSource();
            var value_0 = tmp$ret$0;
            tmp1_cache.updateRememberedValue_l1colo_k$(value_0);
            tmp = value_0;
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
          interactionSource_0._v = tmp$ret$4;
          $dirty = $dirty & -29360129;
        }
        if (!(($default & 256) === 0)) {
          var tmp_1 = SliderDefaults_getInstance();
          var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_5 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_6 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_7 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_8 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_9 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_10 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          colors_0._v = tmp_1.colors$composable_q0qpzv_k$(tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 6, 1023);
          $dirty = $dirty & -234881025;
        }
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 128) === 0))
          $dirty = $dirty & -29360129;
        if (!(($default & 256) === 0))
          $dirty = $dirty & -234881025;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(-389757584, $dirty, -1, 'androidx.compose.material.Slider$composable (Slider.kt:153)');
      }
      // Inline function 'kotlin.require' call
      var tmp1_require = steps_0._v >= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_require) {
        var tmp$ret$5;
        // Inline function 'androidx.compose.material.Slider$composable.<anonymous>' call
        var tmp0_return = 'steps should be >= 0';
        tmp$ret$5 = tmp0_return;
        var message = tmp$ret$5;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var onValueChangeState = rememberUpdatedState$composable(onValueChange, $composer_0, 14 & $dirty >> 3);
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = steps_0._v;
      var tmp3_remember$composable = $composer_0;
      var tmp4_remember$composable = 14 & $dirty >> 15;
      var $composer_2 = tmp3_remember$composable;
      $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = $composer_2.changed_ga7h3f_k$(tmp2_remember$composable);
      var tmp$ret$8;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_11;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_0().Empty_1) {
        var tmp$ret$6;
        // Inline function 'androidx.compose.material.Slider$composable.<anonymous>' call
        tmp$ret$6 = stepsToTickFractions(steps_0._v);
        var value_1 = tmp$ret$6;
        tmp1_cache_0.updateRememberedValue_l1colo_k$(value_1);
        tmp_11 = value_1;
      } else {
        tmp_11 = tmp0_let_0;
      }
      tmp$ret$7 = tmp_11;
      tmp$ret$8 = tmp$ret$7;
      var tmp_12 = tmp$ret$8;
      tmp$ret$9 = (tmp_12 == null ? true : isObject(tmp_12)) ? tmp_12 : THROW_CCE();
      var tmp0_0 = tmp$ret$9;
      $composer_2.endReplaceableGroup_er37p7_k$();
      tmp$ret$10 = tmp0_0;
      var tickFractions = tmp$ret$10;
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp5_$get_current$$composable_el8hro = get_LocalLayoutDirection();
      var tmp6_$get_current$$composable_e2rmqd = $composer_0;
      var $composer_3 = tmp6_$get_current$$composable_e2rmqd;
      sourceInformationMarkerStart($composer_3, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_3.consume_93tbl1_k$(tmp5_$get_current$$composable_el8hro);
      sourceInformationMarkerEnd($composer_3);
      tmp$ret$11 = tmp0_1;
      var isRtl = tmp$ret$11.equals(LayoutDirection_Rtl_getInstance());
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp7_remember$composable = $composer_0;
      var $composer_4 = tmp7_remember$composable;
      $composer_4.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_4, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$15;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = $composer_4;
      var tmp$ret$14;
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = tmp1_cache_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_13;
      if (false ? true : tmp0_let_1 === Companion_getInstance_0().Empty_1) {
        var tmp$ret$12;
        // Inline function 'androidx.compose.material.Slider$composable.<anonymous>' call
        tmp$ret$12 = new FocusRequester();
        var value_2 = tmp$ret$12;
        tmp1_cache_1.updateRememberedValue_l1colo_k$(value_2);
        tmp_13 = value_2;
      } else {
        tmp_13 = tmp0_let_1;
      }
      tmp$ret$13 = tmp_13;
      tmp$ret$14 = tmp$ret$13;
      var tmp_14 = tmp$ret$14;
      tmp$ret$15 = (tmp_14 == null ? true : isObject(tmp_14)) ? tmp_14 : THROW_CCE();
      var tmp0_2 = tmp$ret$15;
      $composer_4.endReplaceableGroup_er37p7_k$();
      tmp$ret$16 = tmp0_2;
      var focusRequester_0 = tmp$ret$16;
      var tmp_15 = minimumTouchTargetSize(modifier_0._v);
      var tmp$ret$17;
      // Inline function 'androidx.compose.ui.unit.Dp.times' call
      var tmp8_times = get_ThumbRadius();
      tmp$ret$17 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp8_times) * 2);
      var tmp_16 = tmp$ret$17;
      var tmp$ret$18;
      // Inline function 'androidx.compose.ui.unit.Dp.times' call
      var tmp9_times = get_ThumbRadius();
      tmp$ret$18 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp9_times) * 2);
      var tmp_17 = tmp$ret$18;
      var tmp_18 = slideOnKeyEvents(focusable(focusRequester(sliderSemantics(requiredSizeIn$default(tmp_15, tmp_16, tmp_17, null, null, 12, null), value, enabled_0._v, onValueChange, onValueChangeFinished_0._v, valueRange_0._v, steps_0._v), focusRequester_0), enabled_0._v, interactionSource_0._v), enabled_0._v, steps_0._v, valueRange_0._v, value, isRtl, onValueChangeState);
      var tmp$ret$25;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$24;
      // Inline function 'androidx.compose.material.Slider$composable.<anonymous>' call
      var tmp_19 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_19, 2085116814, true, Slider$composable$lambda_0(value, valueRange_0, $dirty, interactionSource_0, isRtl, enabled_0, tickFractions, colors_0, onValueChangeState, focusRequester_0, onValueChangeFinished_0));
      var tmp$ret$23;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_5 = tmp0_remember$composable_0;
      $composer_5.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_5, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$22;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_2 = $composer_5;
      var tmp2_cache_0 = $composer_5.changed_ga7h3f_k$(dispatchReceiver);
      var tmp$ret$21;
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = tmp1_cache_2.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$20;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_20;
      if (tmp2_cache_0 ? true : tmp0_let_2 === Companion_getInstance_0().Empty_1) {
        var tmp$ret$19;
        // Inline function 'androidx.compose.material.Slider$composable.<anonymous>.<anonymous>' call
        tmp$ret$19 = ComposableLambda$invoke$ref_4(dispatchReceiver);
        var value_3 = tmp$ret$19;
        tmp1_cache_2.updateRememberedValue_l1colo_k$(value_3);
        tmp_20 = value_3;
      } else {
        tmp_20 = tmp0_let_2;
      }
      tmp$ret$20 = tmp_20;
      tmp$ret$21 = tmp$ret$20;
      var tmp_21 = tmp$ret$21;
      tmp$ret$22 = (tmp_21 == null ? true : isObject(tmp_21)) ? tmp_21 : THROW_CCE();
      var tmp0_3 = tmp$ret$22;
      $composer_5.endReplaceableGroup_er37p7_k$();
      tmp$ret$23 = tmp0_3;
      tmp$ret$24 = tmp$ret$23;
      tmp$ret$25 = tmp$ret$24;
      BoxWithConstraints$composable(tmp_18, null, false, tmp$ret$25, $composer_0, 3072, 6);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Slider$composable$lambda$ref(value, onValueChange, modifier_0, enabled_0, valueRange_0, steps_0, onValueChangeFinished_0, interactionSource_0, colors_0, $changed, $default));
    }
  }
  function SliderColors() {
  }
  SliderColors.$metadata$ = interfaceMeta('SliderColors');
  function SliderDefaults() {
    SliderDefaults_instance = this;
    this.InactiveTrackAlpha_1 = 0.24;
    this.DisabledInactiveTrackAlpha_1 = 0.12;
    this.DisabledActiveTrackAlpha_1 = 0.32;
    this.TickAlpha_1 = 0.54;
    this.DisabledTickAlpha_1 = 0.12;
    this.$stable_1 = 0;
  }
  SliderDefaults.prototype.colors_lzu9gw_k$ = function (thumbColor, disabledThumbColor, activeTrackColor, inactiveTrackColor, disabledActiveTrackColor, disabledInactiveTrackColor, activeTickColor, inactiveTickColor, disabledActiveTickColor, disabledInactiveTickColor) {
    illegalDecoyCallException('colors');
  };
  SliderDefaults.prototype.get_InactiveTrackAlpha_z987k7_k$ = function () {
    return this.InactiveTrackAlpha_1;
  };
  SliderDefaults.prototype.get_DisabledInactiveTrackAlpha_p5xgrh_k$ = function () {
    return this.DisabledInactiveTrackAlpha_1;
  };
  SliderDefaults.prototype.get_DisabledActiveTrackAlpha_mlmi2q_k$ = function () {
    return this.DisabledActiveTrackAlpha_1;
  };
  SliderDefaults.prototype.get_TickAlpha_v3r7yg_k$ = function () {
    return this.TickAlpha_1;
  };
  SliderDefaults.prototype.get_DisabledTickAlpha_p3u3vo_k$ = function () {
    return this.DisabledTickAlpha_1;
  };
  SliderDefaults.prototype.colors$composable_q0qpzv_k$ = function (thumbColor, disabledThumbColor, activeTrackColor, inactiveTrackColor, disabledActiveTrackColor, disabledInactiveTrackColor, activeTickColor, inactiveTickColor, disabledActiveTickColor, disabledInactiveTickColor, $composer, $changed, $changed1, $default) {
    var thumbColor_0 = thumbColor;
    var disabledThumbColor_0 = disabledThumbColor;
    var activeTrackColor_0 = activeTrackColor;
    var inactiveTrackColor_0 = inactiveTrackColor;
    var disabledActiveTrackColor_0 = disabledActiveTrackColor;
    var disabledInactiveTrackColor_0 = disabledInactiveTrackColor;
    var activeTickColor_0 = activeTickColor;
    var inactiveTickColor_0 = inactiveTickColor;
    var disabledActiveTickColor_0 = disabledActiveTickColor;
    var disabledInactiveTickColor_0 = disabledInactiveTickColor;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1024271562);
    sourceInformation($composer_0, 'C(colors$composable)P(9:c#ui.graphics.Color,6:c#ui.graphics.Color,1:c#ui.graphics.Color,8:c#ui.graphics.Color,3:c#ui.graphics.Color,5:c#ui.graphics.Color,0:c#ui.graphics.Color,7:c#ui.graphics.Color,2:c#ui.graphics.Color,4:c#ui.graphics.Color)554@23656L6,555@23722L6,556@23778L8,557@23829L6,558@23894L6,561@24065L6,564@24278L33:Slider.kt#jmzs0o');
    if (!(($default & 1) === 0))
      thumbColor_0 = MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_primary_9vvgym_k$();
    if (!(($default & 2) === 0)) {
      var tmp = MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_onSurface_nme6dy_k$();
      var tmp_0 = ContentAlpha_getInstance().$get_disabled$$composable_xy2o02_k$($composer_0, 6);
      disabledThumbColor_0 = compositeOver(Color__copy$default_impl_ectz3s(tmp, tmp_0, 0.0, 0.0, 0.0, 14, null), MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_surface_rbg09j_k$());
    }
    if (!(($default & 4) === 0))
      activeTrackColor_0 = MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_primary_9vvgym_k$();
    if (!(($default & 8) === 0)) {
      var tmp_1 = activeTrackColor_0;
      inactiveTrackColor_0 = Color__copy$default_impl_ectz3s(tmp_1, 0.24, 0.0, 0.0, 0.0, 14, null);
    }
    if (!(($default & 16) === 0)) {
      var tmp_2 = MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_onSurface_nme6dy_k$();
      disabledActiveTrackColor_0 = Color__copy$default_impl_ectz3s(tmp_2, 0.32, 0.0, 0.0, 0.0, 14, null);
    }
    if (!(($default & 32) === 0)) {
      var tmp_3 = disabledActiveTrackColor_0;
      disabledInactiveTrackColor_0 = Color__copy$default_impl_ectz3s(tmp_3, 0.12, 0.0, 0.0, 0.0, 14, null);
    }
    if (!(($default & 64) === 0)) {
      var tmp_4 = contentColorFor$composable(activeTrackColor_0, $composer_0, 14 & $changed >> 6);
      activeTickColor_0 = Color__copy$default_impl_ectz3s(tmp_4, 0.54, 0.0, 0.0, 0.0, 14, null);
    }
    if (!(($default & 128) === 0)) {
      var tmp_5 = activeTrackColor_0;
      inactiveTickColor_0 = Color__copy$default_impl_ectz3s(tmp_5, 0.54, 0.0, 0.0, 0.0, 14, null);
    }
    if (!(($default & 256) === 0)) {
      var tmp_6 = activeTickColor_0;
      disabledActiveTickColor_0 = Color__copy$default_impl_ectz3s(tmp_6, 0.12, 0.0, 0.0, 0.0, 14, null);
    }
    if (!(($default & 512) === 0)) {
      var tmp_7 = disabledInactiveTrackColor_0;
      disabledInactiveTickColor_0 = Color__copy$default_impl_ectz3s(tmp_7, 0.12, 0.0, 0.0, 0.0, 14, null);
    }
    if (isTraceInProgress()) {
      traceEventStart(1024271562, $changed, $changed1, 'androidx.compose.material.SliderDefaults.colors$composable (Slider.kt:553)');
    }
    var tmp0 = new DefaultSliderColors(thumbColor_0, disabledThumbColor_0, activeTrackColor_0, inactiveTrackColor_0, disabledActiveTrackColor_0, disabledInactiveTrackColor_0, activeTickColor_0, inactiveTickColor_0, disabledActiveTickColor_0, disabledInactiveTickColor_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  SliderDefaults.$metadata$ = objectMeta('SliderDefaults');
  var SliderDefaults_instance;
  function SliderDefaults_getInstance() {
    if (SliderDefaults_instance == null)
      new SliderDefaults();
    return SliderDefaults_instance;
  }
  function stepsToTickFractions(steps) {
    init_properties_Slider_kt_c4fg9z();
    var tmp;
    if (steps === 0) {
      tmp = emptyList();
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.collections.List' call
      var tmp0_List = steps + 2 | 0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.MutableList' call
      var list = ArrayList_init_$Create$(tmp0_List);
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_List)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.material.stepsToTickFractions.<anonymous>' call
          tmp$ret$0 = index / (steps + 1 | 0);
          list.add_1j60pz_k$(tmp$ret$0);
        }
         while (inductionVariable < tmp0_List);
      tmp$ret$1 = list;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    return tmp;
  }
  function slideOnKeyEvents(_this__u8e3s4, enabled, steps, valueRange, value, isRtl, onValueChangeState) {
    init_properties_Slider_kt_c4fg9z();
    // Inline function 'kotlin.require' call
    var tmp0_require = steps >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.material.slideOnKeyEvents.<anonymous>' call
      tmp$ret$0 = 'steps should be >= 0';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return onKeyEvent(_this__u8e3s4, slideOnKeyEvents$lambda(enabled, valueRange, steps, onValueChangeState, value, isRtl));
  }
  function sliderSemantics(_this__u8e3s4, value, enabled, onValueChange, onValueChangeFinished, valueRange, steps) {
    init_properties_Slider_kt_c4fg9z();
    var coerced = coerceIn(value, valueRange.get_start_iypx6h_k$(), valueRange.get_endInclusive_r07xpi_k$());
    return progressSemantics(semantics$default(_this__u8e3s4, false, sliderSemantics$lambda(enabled, valueRange, steps, coerced, onValueChange, onValueChangeFinished), 1, null), value, valueRange, steps);
  }
  function sliderSemantics$default(_this__u8e3s4, value, enabled, onValueChange, onValueChangeFinished, valueRange, steps, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      onValueChangeFinished = null;
    if (!(($mask0 & 16) === 0))
      valueRange = rangeTo(0.0, 1.0);
    if (!(($mask0 & 32) === 0))
      steps = 0;
    return sliderSemantics(_this__u8e3s4, value, enabled, onValueChange, onValueChangeFinished, valueRange, steps);
  }
  function scale(a1, b1, x1, a2, b2) {
    init_properties_Slider_kt_c4fg9z();
    return lerp(a2, b2, calcFraction(a1, b1, x1));
  }
  function _set_isDragging__1ociqq($this, _set____db54di) {
    var tmp0_setValue = isDragging$factory();
    return $this.isDragging$delegate_1.set_value_rnwamw_k$(_set____db54di);
  }
  function _get_dragScope__pxh0b5($this) {
    return $this.dragScope_1;
  }
  function _get_scrollMutex__cbe8f3($this) {
    return $this.scrollMutex_1;
  }
  function SliderDraggableState$dragScope$1(this$0) {
    this.this$0__1 = this$0;
  }
  SliderDraggableState$dragScope$1.prototype.dragBy_silpzm_k$ = function (pixels) {
    return this.this$0__1.onDelta_1(pixels);
  };
  SliderDraggableState$dragScope$1.$metadata$ = classMeta(undefined, [DragScope]);
  function SliderDraggableState$drag$slambda(this$0, $dragPriority, $block, resultContinuation) {
    this.this$0__1 = this$0;
    this.$dragPriority_1 = $dragPriority;
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  SliderDraggableState$drag$slambda.prototype.invoke_d6gbsu_k$ = function ($this$coroutineScope, $cont) {
    var tmp = this.create_b6qu53_k$($this$coroutineScope, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  SliderDraggableState$drag$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  SliderDraggableState$drag$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            _set_isDragging__1ociqq(this.this$0__1, true);
            this.state_1 = 1;
            suspendResult = this.this$0__1.scrollMutex_1.mutateWith_lit8yb_k$(this.this$0__1.dragScope_1, this.$dragPriority_1, this.$block_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            _set_isDragging__1ociqq(this.this$0__1, false);
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
  SliderDraggableState$drag$slambda.prototype.create_b6qu53_k$ = function ($this$coroutineScope, completion) {
    var i = new SliderDraggableState$drag$slambda(this.this$0__1, this.$dragPriority_1, this.$block_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  SliderDraggableState$drag$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  SliderDraggableState$drag$slambda.$metadata$ = classMeta('SliderDraggableState$drag$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function SliderDraggableState$drag$slambda_0(this$0, $dragPriority, $block, resultContinuation) {
    var i = new SliderDraggableState$drag$slambda(this$0, $dragPriority, $block, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.invoke_d6gbsu_k$($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function SliderDraggableState(onDelta) {
    this.onDelta_1 = onDelta;
    var tmp = this;
    tmp.isDragging$delegate_1 = mutableStateOf$default(false, null, 2, null);
    var tmp_0 = this;
    tmp_0.dragScope_1 = new SliderDraggableState$dragScope$1(this);
    this.scrollMutex_1 = new MutatorMutex();
  }
  SliderDraggableState.prototype.get_onDelta_l2wma8_k$ = function () {
    return this.onDelta_1;
  };
  SliderDraggableState.prototype.get_isDragging_ntsso2_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = isDragging$factory_0();
    tmp$ret$0 = this.isDragging$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  SliderDraggableState.prototype.drag_p40z53_k$ = function (dragPriority, block, $cont) {
    return coroutineScope(SliderDraggableState$drag$slambda_0(this, dragPriority, block, null), $cont);
  };
  SliderDraggableState.prototype.dispatchRawDelta_pi5a99_k$ = function (delta) {
    return this.onDelta_1(delta);
  };
  SliderDraggableState.$metadata$ = classMeta('SliderDraggableState', [DraggableState]);
  function CorrectValueSideEffect$composable(scaleToOffset, valueRange, trackRange, valueState, value, $composer, $changed) {
    init_properties_Slider_kt_c4fg9z();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-442227575);
    sourceInformation($composer_0, 'C(CorrectValueSideEffect$composable)P(!1,3!1,4)913@36145L300,913@36134L311:Slider.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(scaleToOffset) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(valueRange) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(trackRange) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(valueState) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_7hxtmu_k$(value) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-442227575, $changed, -1, 'androidx.compose.material.CorrectValueSideEffect$composable (Slider.kt:906)');
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var $composer_1 = tmp0_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(-1603429786);
      sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var indexedObject = [valueRange, scaleToOffset, value, valueState, trackRange];
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var key = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid = !!(invalid | $composer_1.changed_ga7h3f_k$(key));
      }
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = invalid;
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().Empty_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.material.CorrectValueSideEffect$composable.<anonymous>' call
        tmp$ret$0 = CorrectValueSideEffect$composable$lambda_0(valueRange, scaleToOffset, value, valueState, trackRange);
        var value_0 = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value_0);
        tmp = value_0;
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
      SideEffect$composable(tmp$ret$4, $composer_0, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(CorrectValueSideEffect$composable$lambda$ref(scaleToOffset, valueRange, trackRange, valueState, value, $changed));
    }
  }
  function snapValueToTick(current, tickFractions, minPx, maxPx) {
    init_properties_Slider_kt_c4fg9z();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.minByOrNull' call
      var iterator = tickFractions.iterator_jk1svi_k$();
      if (!iterator.hasNext_bitz1p_k$()) {
        tmp$ret$0 = null;
        break $l$block_0;
      }
      var minElem = iterator.next_20eer_k$();
      if (!iterator.hasNext_bitz1p_k$()) {
        tmp$ret$0 = minElem;
        break $l$block_0;
      }
      var tmp$ret$2;
      // Inline function 'androidx.compose.material.snapValueToTick.<anonymous>' call
      var tmp0__anonymous__q1qw7t = minElem;
      var tmp$ret$1;
      // Inline function 'kotlin.math.abs' call
      var tmp0_abs = lerp(minPx, maxPx, tmp0__anonymous__q1qw7t) - current;
      tmp$ret$1 = Math.abs(tmp0_abs);
      tmp$ret$2 = tmp$ret$1;
      var minValue = tmp$ret$2;
      do {
        var e = iterator.next_20eer_k$();
        var tmp$ret$4;
        // Inline function 'androidx.compose.material.snapValueToTick.<anonymous>' call
        var tmp$ret$3;
        // Inline function 'kotlin.math.abs' call
        var tmp0_abs_0 = lerp(minPx, maxPx, e) - current;
        tmp$ret$3 = Math.abs(tmp0_abs_0);
        tmp$ret$4 = tmp$ret$3;
        var v = tmp$ret$4;
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.hasNext_bitz1p_k$());
      tmp$ret$0 = minElem;
    }
    var tmp0_safe_receiver = tmp$ret$0;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'androidx.compose.material.snapValueToTick.<anonymous>' call
      tmp$ret$5 = lerp(minPx, maxPx, tmp0_safe_receiver);
      tmp$ret$6 = tmp$ret$5;
      tmp = tmp$ret$6;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? current : tmp1_elvis_lhs;
  }
  function animateToTarget(draggableState, current, target, velocity, $cont) {
    return draggableState.drag$default_994lnr_k$(null, animateToTarget$slambda_0(current, target, velocity, null), $cont, 1, null);
  }
  function sliderTapModifier(_this__u8e3s4, draggableState, interactionSource, maxPx, isRtl, rawOffset, gestureEndAction, pressOffset, enabled) {
    init_properties_Slider_kt_c4fg9z();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = sliderTapModifier$lambda(draggableState, interactionSource, maxPx, isRtl, rawOffset, gestureEndAction, pressOffset, enabled);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    var tmp0_inspectorInfo = tmp$ret$0;
    return composed$composable(_this__u8e3s4, tmp0_inspectorInfo, sliderTapModifier$lambda_0(enabled, draggableState, interactionSource, maxPx, isRtl, pressOffset, rawOffset, gestureEndAction));
  }
  function calcFraction(a, b, pos) {
    init_properties_Slider_kt_c4fg9z();
    return coerceIn(b - a === 0.0 ? 0.0 : (pos - a) / (b - a), 0.0, 1.0);
  }
  function SliderImpl$composable(enabled, positionFraction, tickFractions, colors, width, interactionSource, modifier, $composer, $changed) {
    init_properties_Slider_kt_c4fg9z();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1582420307);
    sourceInformation($composer_0, 'C(SliderImpl$composable)P(1,4,5!1,6)662@27687L712:Slider.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(enabled) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_7hxtmu_k$(positionFraction) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(tickFractions) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(colors) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_7hxtmu_k$(width) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(interactionSource) ? 131072 : 65536);
    if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1582420307, $dirty, -1, 'androidx.compose.material.SliderImpl$composable (Slider.kt:653)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp0_Box$composable = modifier.then_5qw5wu_k$(get_DefaultSliderConstraints());
      var tmp1_Box$composable = null;
      var tmp2_Box$composable = false;
      var tmp3_Box$composable = $composer_0;
      var modifier_0 = tmp0_Box$composable;
      var contentAlignment = tmp1_Box$composable;
      var propagateMinConstraints = tmp2_Box$composable;
      var $composer_1 = tmp3_Box$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(1330882304);
      sourceInformation($composer_1, 'C(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance();
      if (!(2 === 0))
        contentAlignment = Companion_getInstance_4().TopStart_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 0);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp0_Layout$composable = modifier_0;
      var tmp1_Layout$composable = $composer_1;
      var tmp2_Layout$composable = 0;
      var modifier_1 = tmp0_Layout$composable;
      var $composer_2 = tmp1_Layout$composable;
      $composer_2.startReplaceableGroup_rp6air_k$(1725976829);
      sourceInformation($composer_2, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_2;
      var $composer_3 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_3, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_3.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_3);
      tmp$ret$0 = tmp0;
      var density = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua = $composer_2;
      var $composer_4 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_4.consume_93tbl1_k$(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_4);
      tmp$ret$1 = tmp0_0;
      var layoutDirection = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro = $composer_2;
      var $composer_5 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_5, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_5.consume_93tbl1_k$(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_5);
      tmp$ret$2 = tmp0_1;
      var viewConfiguration = tmp$ret$2;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_5().Constructor_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_1);
      var tmp8_ReusableComposeNode$composable = $composer_2;
      var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
      var $composer_6 = tmp8_ReusableComposeNode$composable;
      var tmp = $composer_6.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_6.startReusableNode_jk07k2_k$();
      if ($composer_6.get_inserting_25mlsw_k$()) {
        $composer_6.createNode_13g769_k$(tmp6_ReusableComposeNode$composable);
      } else {
        $composer_6.useNode_inlzo8_k$();
      }
      $composer_6.disableReusing_y35tew_k$();
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_6);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_5().SetMeasurePolicy_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_5().SetDensity_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_5().SetLayoutDirection_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_5().SetViewConfiguration_1);
      $composer_6.enableReusing_6k309v_k$();
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_6.startReplaceableGroup_rp6air_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp3__anonymous__ufb84q = $composer_6;
      var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_7 = tmp3__anonymous__ufb84q;
      $composer_7.startReplaceableGroup_rp6air_k$(-2137368960);
      sourceInformation($composer_7, 'C72@3384L9:Box.kt#2w3rfo');
      if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_7.get_skipping_3owdve_k$()) {
        // Inline function 'androidx.compose.material.SliderImpl$composable.<anonymous>' call
        var tmp4__anonymous__pkmkx7_0 = BoxScopeInstance_getInstance();
        var tmp5__anonymous__kpxxpo = $composer_7;
        var tmp6__anonymous__fv9ai5 = 6;
        var $composer_8 = tmp5__anonymous__kpxxpo;
        $composer_8.startReplaceableGroup_rp6air_k$(231316251);
        sourceInformation($composer_8, 'C*666@27847L7,675@28092L216,685@28317L76:Slider.kt#jmzs0o');
        var $dirty_0 = tmp6__anonymous__fv9ai5;
        if ((tmp6__anonymous__fv9ai5 & 14) === 0)
          $dirty_0 = $dirty_0 | ($composer_8.changed_ga7h3f_k$(tmp4__anonymous__pkmkx7_0) ? 4 : 2);
        if (!(($dirty_0 & 91) === 18) ? true : !$composer_8.get_skipping_3owdve_k$()) {
          var trackStrokeWidth;
          var thumbPx;
          var widthDp;
          var tmp$ret$4;
          // Inline function 'kotlin.with' call
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp0_$get_current$$composable_h5ksy7_0 = get_LocalDensity();
          var tmp1_$get_current$$composable_gn3xww_0 = $composer_8;
          var $composer_9 = tmp1_$get_current$$composable_gn3xww_0;
          sourceInformationMarkerStart($composer_9, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_2 = $composer_9.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7_0);
          sourceInformationMarkerEnd($composer_9);
          tmp$ret$3 = tmp0_2;
          var tmp2_with = tmp$ret$3;
          // Inline function 'kotlin.contracts.contract' call
          trackStrokeWidth = tmp2_with.toPx_u0ojv5_k$(get_TrackHeight());
          thumbPx = tmp2_with.toPx_u0ojv5_k$(get_ThumbRadius());
          widthDp = tmp2_with.toDp_2y47ho_k$(width);
          tmp$ret$4 = Unit_getInstance();
          var tmp$ret$5;
          // Inline function 'androidx.compose.ui.unit.Dp.times' call
          var tmp3_times = get_ThumbRadius();
          tmp$ret$5 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp3_times) * 2);
          var thumbSize = tmp$ret$5;
          var tmp$ret$6;
          // Inline function 'androidx.compose.ui.unit.Dp.times' call
          tmp$ret$6 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(widthDp) * positionFraction);
          var offset = tmp$ret$6;
          var tmp_0 = Companion_getInstance();
          Track$composable(fillMaxSize$default(tmp_0, 0.0, 1, null), colors, enabled, 0.0, positionFraction, tickFractions, thumbPx, trackStrokeWidth, $composer_8, 3078 | 112 & $dirty >> 6 | 896 & $dirty << 6 | 57344 & $dirty << 9 | 458752 & $dirty << 9);
          SliderThumb$composable(tmp4__anonymous__pkmkx7_0, Companion_getInstance(), offset, interactionSource, colors, enabled, thumbSize, $composer_8, 1572912 | 14 & $dirty_0 | 7168 & $dirty >> 6 | 57344 & $dirty << 3 | 458752 & $dirty << 15);
        } else {
          $composer_8.skipToGroupEnd_lhns3f_k$();
        }
        $composer_8.endReplaceableGroup_er37p7_k$();
      } else {
        $composer_7.skipToGroupEnd_lhns3f_k$();
      }
      $composer_7.endReplaceableGroup_er37p7_k$();
      $composer_6.endReplaceableGroup_er37p7_k$();
      $composer_6.endNode_3mkr10_k$();
      $composer_2.endReplaceableGroup_er37p7_k$();
      $composer_1.endReplaceableGroup_er37p7_k$();
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(SliderImpl$composable$lambda$ref(enabled, positionFraction, tickFractions, colors, width, interactionSource, modifier, $changed));
    }
  }
  function _get_thumbColor__14d72a($this) {
    return $this.thumbColor_1;
  }
  function _get_disabledThumbColor__mei8m6($this) {
    return $this.disabledThumbColor_1;
  }
  function _get_activeTrackColor__uh9yx9($this) {
    return $this.activeTrackColor_1;
  }
  function _get_inactiveTrackColor__4t1xa0($this) {
    return $this.inactiveTrackColor_1;
  }
  function _get_disabledActiveTrackColor__xg3unl($this) {
    return $this.disabledActiveTrackColor_1;
  }
  function _get_disabledInactiveTrackColor__5q3xnw($this) {
    return $this.disabledInactiveTrackColor_1;
  }
  function _get_activeTickColor__3yhjkf($this) {
    return $this.activeTickColor_1;
  }
  function _get_inactiveTickColor__k3waae($this) {
    return $this.inactiveTickColor_1;
  }
  function _get_disabledActiveTickColor__30f619($this) {
    return $this.disabledActiveTickColor_1;
  }
  function _get_disabledInactiveTickColor__tylhzi($this) {
    return $this.disabledInactiveTickColor_1;
  }
  function DefaultSliderColors(thumbColor, disabledThumbColor, activeTrackColor, inactiveTrackColor, disabledActiveTrackColor, disabledInactiveTrackColor, activeTickColor, inactiveTickColor, disabledActiveTickColor, disabledInactiveTickColor) {
    this.thumbColor_1 = thumbColor;
    this.disabledThumbColor_1 = disabledThumbColor;
    this.activeTrackColor_1 = activeTrackColor;
    this.inactiveTrackColor_1 = inactiveTrackColor;
    this.disabledActiveTrackColor_1 = disabledActiveTrackColor;
    this.disabledInactiveTrackColor_1 = disabledInactiveTrackColor;
    this.activeTickColor_1 = activeTickColor;
    this.inactiveTickColor_1 = inactiveTickColor;
    this.disabledActiveTickColor_1 = disabledActiveTickColor;
    this.disabledInactiveTickColor_1 = disabledInactiveTickColor;
  }
  DefaultSliderColors.prototype.thumbColor_8v5l03_k$ = function (enabled) {
    illegalDecoyCallException('thumbColor');
  };
  DefaultSliderColors.prototype.trackColor_ivtzfc_k$ = function (enabled, active) {
    illegalDecoyCallException('trackColor');
  };
  DefaultSliderColors.prototype.tickColor_slnr46_k$ = function (enabled, active) {
    illegalDecoyCallException('tickColor');
  };
  DefaultSliderColors.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof DefaultSliderColors)
      other;
    else
      THROW_CCE();
    if (!equals(this.thumbColor_1, other.thumbColor_1))
      return false;
    if (!equals(this.disabledThumbColor_1, other.disabledThumbColor_1))
      return false;
    if (!equals(this.activeTrackColor_1, other.activeTrackColor_1))
      return false;
    if (!equals(this.inactiveTrackColor_1, other.inactiveTrackColor_1))
      return false;
    if (!equals(this.disabledActiveTrackColor_1, other.disabledActiveTrackColor_1))
      return false;
    if (!equals(this.disabledInactiveTrackColor_1, other.disabledInactiveTrackColor_1))
      return false;
    if (!equals(this.activeTickColor_1, other.activeTickColor_1))
      return false;
    if (!equals(this.inactiveTickColor_1, other.inactiveTickColor_1))
      return false;
    if (!equals(this.disabledActiveTickColor_1, other.disabledActiveTickColor_1))
      return false;
    if (!equals(this.disabledInactiveTickColor_1, other.disabledInactiveTickColor_1))
      return false;
    return true;
  };
  DefaultSliderColors.prototype.hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.thumbColor_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.disabledThumbColor_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.activeTrackColor_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.inactiveTrackColor_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.disabledActiveTrackColor_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.disabledInactiveTrackColor_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.activeTickColor_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.inactiveTickColor_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.disabledActiveTickColor_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.disabledInactiveTickColor_1) | 0;
    return result;
  };
  DefaultSliderColors.prototype.thumbColor$composable_6zlafk_k$ = function (enabled, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1275119697);
    sourceInformation($composer_0, 'C(thumbColor$composable)1163@45514L69:Slider.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(1275119697, $changed, -1, 'androidx.compose.material.DefaultSliderColors.thumbColor$composable (Slider.kt:1162)');
    }
    var tmp0 = rememberUpdatedState$composable(new Color(enabled ? this.thumbColor_1 : this.disabledThumbColor_1), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  DefaultSliderColors.prototype.trackColor$composable_9dt1lf_k$ = function (enabled, active, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-335198892);
    sourceInformation($composer_0, 'C(trackColor$composable)P(1)1168@45701L247:Slider.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-335198892, $changed, -1, 'androidx.compose.material.DefaultSliderColors.trackColor$composable (Slider.kt:1167)');
    }
    var tmp;
    if (enabled) {
      tmp = active ? this.activeTrackColor_1 : this.inactiveTrackColor_1;
    } else {
      tmp = active ? this.disabledActiveTrackColor_1 : this.disabledInactiveTrackColor_1;
    }
    var tmp0 = rememberUpdatedState$composable(new Color(tmp), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  DefaultSliderColors.prototype.tickColor$composable_xuhdgb_k$ = function (enabled, active, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1300482794);
    sourceInformation($composer_0, 'C(tickColor$composable)P(1)1179@46065L243:Slider.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(1300482794, $changed, -1, 'androidx.compose.material.DefaultSliderColors.tickColor$composable (Slider.kt:1178)');
    }
    var tmp;
    if (enabled) {
      tmp = active ? this.activeTickColor_1 : this.inactiveTickColor_1;
    } else {
      tmp = active ? this.disabledActiveTickColor_1 : this.disabledInactiveTickColor_1;
    }
    var tmp0 = rememberUpdatedState$composable(new Color(tmp), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  DefaultSliderColors.$metadata$ = classMeta('DefaultSliderColors', [SliderColors]);
  function Track$composable(modifier, colors, enabled, positionFractionStart, positionFractionEnd, tickFractions, thumbPx, trackStrokeWidth, $composer, $changed) {
    init_properties_Slider_kt_c4fg9z();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1812279743);
    sourceInformation($composer_0, 'C(Track$composable)P(2!2,4!1,6)814@32531L35,815@32601L34,816@32671L34,817@32739L33,818@32777L1514:Slider.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(colors) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(enabled) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_7hxtmu_k$(positionFractionStart) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_7hxtmu_k$(positionFractionEnd) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(tickFractions) ? 131072 : 65536);
    if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_7hxtmu_k$(thumbPx) ? 1048576 : 524288);
    if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.changed_7hxtmu_k$(trackStrokeWidth) ? 8388608 : 4194304);
    if (!(($dirty & 23967451) === 4793490) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1812279743, $dirty, -1, 'androidx.compose.material.Track$composable (Slider.kt:804)');
      }
      var inactiveTrackColor = colors.trackColor$composable_9dt1lf_k$(enabled, false, $composer_0, 48 | 14 & $dirty >> 6 | 896 & $dirty << 3);
      var activeTrackColor = colors.trackColor$composable_9dt1lf_k$(enabled, true, $composer_0, 48 | 14 & $dirty >> 6 | 896 & $dirty << 3);
      var inactiveTickColor = colors.tickColor$composable_xuhdgb_k$(enabled, false, $composer_0, 48 | 14 & $dirty >> 6 | 896 & $dirty << 3);
      var activeTickColor = colors.tickColor$composable_xuhdgb_k$(enabled, true, $composer_0, 48 | 14 & $dirty >> 6 | 896 & $dirty << 3);
      Canvas$composable(modifier, Track$composable$lambda_0(thumbPx, inactiveTrackColor, trackStrokeWidth, positionFractionEnd, positionFractionStart, activeTrackColor, tickFractions, inactiveTickColor, activeTickColor), $composer_0, 14 & $dirty);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Track$composable$lambda$ref(modifier, colors, enabled, positionFractionStart, positionFractionEnd, tickFractions, thumbPx, trackStrokeWidth, $changed));
    }
  }
  function SliderThumb$composable(_this__u8e3s4, modifier, offset, interactionSource, colors, enabled, thumbSize, $composer, $changed) {
    init_properties_Slider_kt_c4fg9z();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(245963674);
    sourceInformation($composer_0, 'C(SliderThumb$composable)P(3,4:c#ui.unit.Dp,2!,5:c#ui.unit.Dp)766@30685L1553:Slider.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(_this__u8e3s4) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_7hxtmu_k$(_Dp___get_value__impl__geb1vb(offset)) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(interactionSource) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(colors) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(enabled) ? 131072 : 65536);
    if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_7hxtmu_k$(_Dp___get_value__impl__geb1vb(thumbSize)) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(245963674, $dirty, -1, 'androidx.compose.material.SliderThumb$composable (Slider.kt:758)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp = Companion_getInstance();
      var tmp0_Box$composable = _this__u8e3s4.align_eg370n_k$(padding$default(tmp, offset, null, null, null, 14, null), Companion_getInstance_4().CenterStart_1);
      var tmp1_Box$composable = null;
      var tmp2_Box$composable = false;
      var tmp3_Box$composable = $composer_0;
      var modifier_0 = tmp0_Box$composable;
      var contentAlignment = tmp1_Box$composable;
      var propagateMinConstraints = tmp2_Box$composable;
      var $composer_1 = tmp3_Box$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(1330882304);
      sourceInformation($composer_1, 'C(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance();
      if (!(2 === 0))
        contentAlignment = Companion_getInstance_4().TopStart_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 0);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp0_Layout$composable = modifier_0;
      var tmp1_Layout$composable = $composer_1;
      var tmp2_Layout$composable = 0;
      var modifier_1 = tmp0_Layout$composable;
      var $composer_2 = tmp1_Layout$composable;
      $composer_2.startReplaceableGroup_rp6air_k$(1725976829);
      sourceInformation($composer_2, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_2;
      var $composer_3 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_3, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_3.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_3);
      tmp$ret$0 = tmp0;
      var density = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua = $composer_2;
      var $composer_4 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_4.consume_93tbl1_k$(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_4);
      tmp$ret$1 = tmp0_0;
      var layoutDirection = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro = $composer_2;
      var $composer_5 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_5, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_5.consume_93tbl1_k$(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_5);
      tmp$ret$2 = tmp0_1;
      var viewConfiguration = tmp$ret$2;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_5().Constructor_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_1);
      var tmp8_ReusableComposeNode$composable = $composer_2;
      var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
      var $composer_6 = tmp8_ReusableComposeNode$composable;
      var tmp_0 = $composer_6.get_applier_bupu8u_k$();
      if (!isInterface(tmp_0, Applier)) {
        invalidApplier();
      }
      $composer_6.startReusableNode_jk07k2_k$();
      if ($composer_6.get_inserting_25mlsw_k$()) {
        $composer_6.createNode_13g769_k$(tmp6_ReusableComposeNode$composable);
      } else {
        $composer_6.useNode_inlzo8_k$();
      }
      $composer_6.disableReusing_y35tew_k$();
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_6);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_5().SetMeasurePolicy_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_5().SetDensity_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_5().SetLayoutDirection_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_5().SetViewConfiguration_1);
      $composer_6.enableReusing_6k309v_k$();
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_6.startReplaceableGroup_rp6air_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp3__anonymous__ufb84q = $composer_6;
      var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_7 = tmp3__anonymous__ufb84q;
      $composer_7.startReplaceableGroup_rp6air_k$(-2137368960);
      sourceInformation($composer_7, 'C72@3384L9:Box.kt#2w3rfo');
      if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_7.get_skipping_3owdve_k$()) {
        // Inline function 'androidx.compose.material.SliderThumb$composable.<anonymous>' call
        var tmp4__anonymous__pkmkx7_0 = BoxScopeInstance_getInstance();
        var tmp5__anonymous__kpxxpo = $composer_7;
        var tmp6__anonymous__fv9ai5 = 6;
        var $composer_8 = tmp5__anonymous__kpxxpo;
        $composer_8.startReplaceableGroup_rp6air_k$(-587645648);
        sourceInformation($composer_8, 'C770@30816L46,771@30905L658,771@30871L692,794@31919L59,798@32183L19,789@31725L507:Slider.kt#jmzs0o');
        if (!((tmp6__anonymous__fv9ai5 & 81) === 16) ? true : !$composer_8.get_skipping_3owdve_k$()) {
          var tmp$ret$7;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp0_remember$composable = $composer_8;
          var $composer_9 = tmp0_remember$composable;
          $composer_9.startReplaceableGroup_rp6air_k$(547886695);
          sourceInformation($composer_9, 'C(remember$composable):Composables.kt#9igjgp');
          var tmp$ret$6;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache = $composer_9;
          var tmp$ret$5;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_1;
          if (false ? true : tmp0_let === Companion_getInstance_0().Empty_1) {
            var tmp$ret$3;
            // Inline function 'androidx.compose.material.SliderThumb$composable.<anonymous>.<anonymous>' call
            tmp$ret$3 = mutableStateListOf();
            var value = tmp$ret$3;
            tmp1_cache.updateRememberedValue_l1colo_k$(value);
            tmp_1 = value;
          } else {
            tmp_1 = tmp0_let;
          }
          tmp$ret$4 = tmp_1;
          tmp$ret$5 = tmp$ret$4;
          var tmp_2 = tmp$ret$5;
          tmp$ret$6 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
          var tmp0_2 = tmp$ret$6;
          $composer_9.endReplaceableGroup_er37p7_k$();
          tmp$ret$7 = tmp0_2;
          var interactions = tmp$ret$7;
          var tmp$ret$12;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp1_remember$composable = $composer_8;
          var tmp2_remember$composable = 14 & $dirty >> 9;
          var $composer_10 = tmp1_remember$composable;
          $composer_10.startReplaceableGroup_rp6air_k$(-1124426577);
          sourceInformation($composer_10, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
          var tmp$ret$11;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache_0 = $composer_10;
          var tmp2_cache = !!($composer_10.changed_ga7h3f_k$(interactionSource) | $composer_10.changed_ga7h3f_k$(interactions));
          var tmp$ret$10;
          // Inline function 'kotlin.let' call
          var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$9;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_3;
          if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_0().Empty_1) {
            var tmp$ret$8;
            // Inline function 'androidx.compose.material.SliderThumb$composable.<anonymous>.<anonymous>' call
            tmp$ret$8 = SliderThumb$composable$slambda_0(interactionSource, interactions, null);
            var value_0 = tmp$ret$8;
            tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
            tmp_3 = value_0;
          } else {
            tmp_3 = tmp0_let_0;
          }
          tmp$ret$9 = tmp_3;
          tmp$ret$10 = tmp$ret$9;
          var tmp_4 = tmp$ret$10;
          tmp$ret$11 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
          var tmp0_3 = tmp$ret$11;
          $composer_10.endReplaceableGroup_er37p7_k$();
          tmp$ret$12 = tmp0_3;
          LaunchedEffect$composable(interactionSource, tmp$ret$12, $composer_8, 14 & $dirty >> 9);
          var tmp_5;
          var tmp$ret$13;
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp$ret$13 = !interactions.isEmpty_y1axqb_k$();
          if (tmp$ret$13) {
            tmp_5 = get_ThumbPressedElevation();
          } else {
            tmp_5 = get_ThumbDefaultElevation();
          }
          var elevation = tmp_5;
          var tmp_6 = size_0(modifier, thumbSize, thumbSize);
          var tmp_7 = get_ThumbRippleRadius();
          var tmp_8 = indication(tmp_6, interactionSource, rememberRipple$composable(false, tmp_7, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_8, 54, 4));
          var tmp_9 = hoverable$default(tmp_8, interactionSource, false, 2, null);
          var tmp_10;
          if (enabled) {
            tmp_10 = elevation;
          } else {
            var tmp$ret$14;
            // Inline function 'androidx.compose.ui.unit.dp' call
            tmp$ret$14 = _Dp___init__impl__ms3zkb(0);
            tmp_10 = tmp$ret$14;
          }
          var tmp_11 = tmp_10;
          var tmp_12 = get_CircleShape();
          Spacer$composable(background(shadow$default(tmp_9, tmp_11, tmp_12, false, null, null, 24, null), colors.thumbColor$composable_6zlafk_k$(enabled, $composer_8, 14 & $dirty >> 15 | 112 & $dirty >> 9).get_value_j01efc_k$().value_1, get_CircleShape()), $composer_8, 0);
        } else {
          $composer_8.skipToGroupEnd_lhns3f_k$();
        }
        $composer_8.endReplaceableGroup_er37p7_k$();
      } else {
        $composer_7.skipToGroupEnd_lhns3f_k$();
      }
      $composer_7.endReplaceableGroup_er37p7_k$();
      $composer_6.endReplaceableGroup_er37p7_k$();
      $composer_6.endNode_3mkr10_k$();
      $composer_2.endReplaceableGroup_er37p7_k$();
      $composer_1.endReplaceableGroup_er37p7_k$();
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(SliderThumb$composable$lambda$ref(_this__u8e3s4, modifier, offset, interactionSource, colors, enabled, thumbSize, $changed));
    }
  }
  function Slider$composable$lambda($value, $onValueChange, $modifier, $enabled, $valueRange, $steps, $onValueChangeFinished, $interactionSource, $colors, $$changed, $$default, $composer, $force) {
    return Slider$composable($value, $onValueChange, $modifier._v, $enabled._v, $valueRange._v, $steps._v, $onValueChangeFinished._v, $interactionSource._v, $colors._v, $composer, $$changed | 1, $$default);
  }
  function CorrectValueSideEffect$composable$lambda($scaleToOffset, $valueRange, $trackRange, $valueState, $value, $$changed, $composer, $force) {
    return CorrectValueSideEffect$composable($scaleToOffset, $valueRange, $trackRange, $valueState, $value, $composer, $$changed | 1);
  }
  function SliderImpl$composable$lambda($enabled, $positionFraction, $tickFractions, $colors, $width, $interactionSource, $modifier, $$changed, $composer, $force) {
    return SliderImpl$composable($enabled, $positionFraction, $tickFractions, $colors, $width, $interactionSource, $modifier, $composer, $$changed | 1);
  }
  function Track$composable$lambda($modifier, $colors, $enabled, $positionFractionStart, $positionFractionEnd, $tickFractions, $thumbPx, $trackStrokeWidth, $$changed, $composer, $force) {
    return Track$composable($modifier, $colors, $enabled, $positionFractionStart, $positionFractionEnd, $tickFractions, $thumbPx, $trackStrokeWidth, $composer, $$changed | 1);
  }
  function SliderThumb$composable$lambda($this_SliderThumb$composable, $modifier, $offset, $interactionSource, $colors, $enabled, $thumbSize, $$changed, $composer, $force) {
    return SliderThumb$composable($this_SliderThumb$composable, $modifier, $offset, $interactionSource, $colors, $enabled, $thumbSize, $composer, $$changed | 1);
  }
  function invoke$scaleToUserValue(minPx, maxPx, valueRange, offset) {
    return scale(minPx, maxPx, offset, valueRange._v.get_start_iypx6h_k$(), valueRange._v.get_endInclusive_r07xpi_k$());
  }
  function invoke$scaleToOffset(valueRange, minPx, maxPx, userValue) {
    return scale(valueRange._v.get_start_iypx6h_k$(), valueRange._v.get_endInclusive_r07xpi_k$(), userValue, minPx, maxPx);
  }
  function Slider$composable$lambda$lambda() {
    init_properties_Slider_kt_c4fg9z();
    return EmptyCoroutineContext_getInstance();
  }
  function Slider$composable$lambda$lambda_0($rawOffset, $pressOffset, $minPx, $maxPx, $onValueChangeState, $valueRange) {
    return function (it) {
      $rawOffset.set_value_rnwamw_k$($rawOffset.get_value_j01efc_k$() + it + $pressOffset.get_value_j01efc_k$());
      $pressOffset.set_value_rnwamw_k$(0.0);
      var offsetInTrack = coerceIn($rawOffset.get_value_j01efc_k$(), $minPx, $maxPx);
      $onValueChangeState.get_value_j01efc_k$()(invoke$scaleToUserValue($minPx, $maxPx, $valueRange, offsetInTrack));
      return Unit_getInstance();
    };
  }
  function Slider$composable$lambda$scaleToOffset$ref($valueRange, $minPx, $maxPx) {
    var l = function (p0) {
      return invoke$scaleToOffset($valueRange, $minPx, $maxPx, p0);
    };
    l.callableName = 'scaleToOffset';
    return l;
  }
  function Slider$composable$lambda$lambda$slambda($draggableState, $current, $target, $velocity, $onValueChangeFinished, resultContinuation) {
    this.$draggableState_1 = $draggableState;
    this.$current_1 = $current;
    this.$target_1 = $target;
    this.$velocity_1 = $velocity;
    this.$onValueChangeFinished_1 = $onValueChangeFinished;
    CoroutineImpl.call(this, resultContinuation);
  }
  Slider$composable$lambda$lambda$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  Slider$composable$lambda$lambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  Slider$composable$lambda$lambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = animateToTarget(this.$draggableState_1, this.$current_1, this.$target_1, this.$velocity_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = this.$onValueChangeFinished_1._v;
            if (tmp0_safe_receiver == null)
              null;
            else
              tmp0_safe_receiver();
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
  Slider$composable$lambda$lambda$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new Slider$composable$lambda$lambda$slambda(this.$draggableState_1, this.$current_1, this.$target_1, this.$velocity_1, this.$onValueChangeFinished_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  Slider$composable$lambda$lambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  Slider$composable$lambda$lambda$slambda.$metadata$ = classMeta('Slider$composable$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Slider$composable$lambda$lambda$slambda_0($draggableState, $current, $target, $velocity, $onValueChangeFinished, resultContinuation) {
    var i = new Slider$composable$lambda$lambda$slambda($draggableState, $current, $target, $velocity, $onValueChangeFinished, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Slider$composable$lambda$lambda_1($rawOffset, $tickFractions, $minPx, $maxPx, $focusRequester, $scope, $draggableState, $onValueChangeFinished) {
    return function (velocity) {
      var current = $rawOffset.get_value_j01efc_k$();
      var target = snapValueToTick(current, $tickFractions, $minPx, $maxPx);
      $focusRequester.requestFocus_91rt8o_k$();
      var tmp;
      if (!(current === target)) {
        launch$default($scope, null, null, Slider$composable$lambda$lambda$slambda_0($draggableState, current, target, velocity, $onValueChangeFinished, null), 3, null);
        tmp = Unit_getInstance();
      } else if (!$draggableState.get_isDragging_ntsso2_k$()) {
        var tmp0_safe_receiver = $onValueChangeFinished._v;
        if (tmp0_safe_receiver == null)
          null;
        else
          tmp0_safe_receiver();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Slider$composable$lambda$slambda($gestureEndAction, resultContinuation) {
    this.$gestureEndAction_1 = $gestureEndAction;
    CoroutineImpl.call(this, resultContinuation);
  }
  Slider$composable$lambda$slambda.prototype.invoke_wfzr56_k$ = function ($this$draggable, velocity, $cont) {
    var tmp = this.create_amz0hf_k$($this$draggable, velocity, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  Slider$composable$lambda$slambda.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE();
    return this.invoke_wfzr56_k$(tmp, (!(p2 == null) ? typeof p2 === 'number' : false) ? p2 : THROW_CCE(), $cont);
  };
  Slider$composable$lambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          this.$gestureEndAction_1.get_value_j01efc_k$()(this.velocity_1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  Slider$composable$lambda$slambda.prototype.create_amz0hf_k$ = function ($this$draggable, velocity, completion) {
    var i = new Slider$composable$lambda$slambda(this.$gestureEndAction_1, completion);
    i.$this$draggable_1 = $this$draggable;
    i.velocity_1 = velocity;
    return i;
  };
  Slider$composable$lambda$slambda.$metadata$ = classMeta('Slider$composable$lambda$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function Slider$composable$lambda$slambda_0($gestureEndAction, resultContinuation) {
    var i = new Slider$composable$lambda$slambda($gestureEndAction, resultContinuation);
    var l = function ($this$draggable, velocity, $cont) {
      return i.invoke_wfzr56_k$($this$draggable, velocity, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Slider$composable$lambda_0($value, $valueRange, $$dirty, $interactionSource, $isRtl, $enabled, $tickFractions, $colors, $onValueChangeState, $focusRequester, $onValueChangeFinished) {
    return function ($this$BoxWithConstraints, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C*193@8897L7,204@9311L24,205@9360L49,206@9436L31,208@9498L367,217@9875L83,219@9991L660,249@11145L55,256@11486L209:Slider.kt#jmzs0o');
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$BoxWithConstraints) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(2085116814, $changed, -1, 'androidx.compose.material.Slider$composable.<anonymous> (Slider.kt:188)');
        }
        var widthPx = _Constraints___get_maxWidth__impl__uuyqc($this$BoxWithConstraints.get_constraints_khg0u2_k$());
        var maxPx;
        var minPx;
        var tmp$ret$3;
        // Inline function 'kotlin.with' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
        var tmp1_$get_current$$composable_gn3xww = $composer_0;
        var $composer_1 = tmp1_$get_current$$composable_gn3xww;
        sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_1.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
        sourceInformationMarkerEnd($composer_1);
        tmp$ret$0 = tmp0;
        var tmp2_with = tmp$ret$0;
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = widthPx - tmp2_with.toPx_u0ojv5_k$(get_ThumbRadius());
        tmp$ret$1 = Math.max(tmp0_max, 0.0);
        maxPx = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'kotlin.math.min' call
        var tmp1_min = tmp2_with.toPx_u0ojv5_k$(get_ThumbRadius());
        tmp$ret$2 = Math.min(tmp1_min, maxPx);
        minPx = tmp$ret$2;
        tmp$ret$3 = Unit_getInstance();
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
        var tmp3_rememberCoroutineScope$composable = null;
        var tmp4_rememberCoroutineScope$composable = $composer_0;
        var getContext = {_v: tmp3_rememberCoroutineScope$composable};
        var $composer_2 = tmp4_rememberCoroutineScope$composable;
        $composer_2.startReplaceableGroup_rp6air_k$(102870005);
        sourceInformation($composer_2, 'C(rememberCoroutineScope$composable)476@19869L144:Effects.kt#9igjgp');
        if (!(1 === 0)) {
          getContext._v = Slider$composable$lambda$lambda;
        }
        var composer = $composer_2;
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_2;
        var $composer_3 = tmp0_remember$composable;
        $composer_3.startReplaceableGroup_rp6air_k$(547886695);
        sourceInformation($composer_3, 'C(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$7;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_3;
        var tmp$ret$6;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (false ? true : tmp0_let === Companion_getInstance_0().Empty_1) {
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
          tmp$ret$4 = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
          var value = tmp$ret$4;
          tmp1_cache.updateRememberedValue_l1colo_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = tmp0_let;
        }
        tmp$ret$5 = tmp_1;
        tmp$ret$6 = tmp$ret$5;
        var tmp_2 = tmp$ret$6;
        tmp$ret$7 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0_0 = tmp$ret$7;
        $composer_3.endReplaceableGroup_er37p7_k$();
        tmp$ret$8 = tmp0_0;
        var wrapper = tmp$ret$8;
        var tmp0_1 = wrapper.coroutineScope_1;
        $composer_2.endReplaceableGroup_er37p7_k$();
        tmp$ret$9 = tmp0_1;
        var scope = tmp$ret$9;
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp5_remember$composable = $composer_0;
        var $composer_4 = tmp5_remember$composable;
        $composer_4.startReplaceableGroup_rp6air_k$(547886695);
        sourceInformation($composer_4, 'C(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_4;
        var tmp$ret$12;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_3;
        if (false ? true : tmp0_let_0 === Companion_getInstance_0().Empty_1) {
          var tmp$ret$10;
          // Inline function 'androidx.compose.material.Slider$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_4 = invoke$scaleToOffset($valueRange, minPx, maxPx, $value);
          tmp$ret$10 = mutableStateOf$default(tmp_4, null, 2, null);
          var value_0 = tmp$ret$10;
          tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = tmp0_let_0;
        }
        tmp$ret$11 = tmp_3;
        tmp$ret$12 = tmp$ret$11;
        var tmp_5 = tmp$ret$12;
        tmp$ret$13 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        var tmp0_2 = tmp$ret$13;
        $composer_4.endReplaceableGroup_er37p7_k$();
        tmp$ret$14 = tmp0_2;
        var rawOffset = tmp$ret$14;
        var tmp$ret$19;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp6_remember$composable = $composer_0;
        var $composer_5 = tmp6_remember$composable;
        $composer_5.startReplaceableGroup_rp6air_k$(547886695);
        sourceInformation($composer_5, 'C(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$18;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_1 = $composer_5;
        var tmp$ret$17;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp1_cache_1.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_6;
        if (false ? true : tmp0_let_1 === Companion_getInstance_0().Empty_1) {
          var tmp$ret$15;
          // Inline function 'androidx.compose.material.Slider$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$15 = mutableStateOf$default(0.0, null, 2, null);
          var value_1 = tmp$ret$15;
          tmp1_cache_1.updateRememberedValue_l1colo_k$(value_1);
          tmp_6 = value_1;
        } else {
          tmp_6 = tmp0_let_1;
        }
        tmp$ret$16 = tmp_6;
        tmp$ret$17 = tmp$ret$16;
        var tmp_7 = tmp$ret$17;
        tmp$ret$18 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
        var tmp0_3 = tmp$ret$18;
        $composer_5.endReplaceableGroup_er37p7_k$();
        tmp$ret$19 = tmp0_3;
        var pressOffset = tmp$ret$19;
        var tmp$ret$24;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp7_remember$composable = $valueRange._v;
        var tmp8_remember$composable = $composer_0;
        var tmp9_remember$composable = 896 & $$dirty >> 6;
        var $composer_6 = tmp8_remember$composable;
        $composer_6.startReplaceableGroup_rp6air_k$(-1058148781);
        sourceInformation($composer_6, 'C(remember$composable)P(1,2,3):Composables.kt#9igjgp');
        var tmp$ret$23;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_2 = $composer_6;
        var tmp2_cache = !!(!!($composer_6.changed_ga7h3f_k$(minPx) | $composer_6.changed_ga7h3f_k$(maxPx)) | $composer_6.changed_ga7h3f_k$(tmp7_remember$composable));
        var tmp$ret$22;
        // Inline function 'kotlin.let' call
        var tmp0_let_2 = tmp1_cache_2.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$21;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_8;
        if (tmp2_cache ? true : tmp0_let_2 === Companion_getInstance_0().Empty_1) {
          var tmp$ret$20;
          // Inline function 'androidx.compose.material.Slider$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$20 = new SliderDraggableState(Slider$composable$lambda$lambda_0(rawOffset, pressOffset, minPx, maxPx, $onValueChangeState, $valueRange));
          var value_2 = tmp$ret$20;
          tmp1_cache_2.updateRememberedValue_l1colo_k$(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = tmp0_let_2;
        }
        tmp$ret$21 = tmp_8;
        tmp$ret$22 = tmp$ret$21;
        var tmp_9 = tmp$ret$22;
        tmp$ret$23 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
        var tmp0_4 = tmp$ret$23;
        $composer_6.endReplaceableGroup_er37p7_k$();
        tmp$ret$24 = tmp0_4;
        var draggableState = tmp$ret$24;
        CorrectValueSideEffect$composable(Slider$composable$lambda$scaleToOffset$ref($valueRange, minPx, maxPx), $valueRange._v, rangeTo(minPx, maxPx), rawOffset, $value, $composer_0, 112 & $$dirty >> 9 | 57344 & $$dirty << 12);
        var gestureEndAction = rememberUpdatedState$composable(Slider$composable$lambda$lambda_1(rawOffset, $tickFractions, minPx, maxPx, $focusRequester, scope, draggableState, $onValueChangeFinished), $composer_0, 0);
        var press = sliderTapModifier(Companion_getInstance(), draggableState, $interactionSource._v, widthPx, $isRtl, rawOffset, gestureEndAction, pressOffset, $enabled._v);
        var tmp0_$receiver = Companion_getInstance();
        var tmp1_orientation = Orientation_Horizontal_getInstance();
        var tmp2_startDragImmediately = draggableState.get_isDragging_ntsso2_k$();
        var tmp_10 = $enabled._v;
        var tmp_11 = $interactionSource._v;
        var tmp$ret$29;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp10_remember$composable = $composer_0;
        var $composer_7 = tmp10_remember$composable;
        $composer_7.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_7, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$28;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_3 = $composer_7;
        var tmp2_cache_0 = $composer_7.changed_ga7h3f_k$(gestureEndAction);
        var tmp$ret$27;
        // Inline function 'kotlin.let' call
        var tmp0_let_3 = tmp1_cache_3.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$26;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_12;
        if (tmp2_cache_0 ? true : tmp0_let_3 === Companion_getInstance_0().Empty_1) {
          var tmp$ret$25;
          // Inline function 'androidx.compose.material.Slider$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$25 = Slider$composable$lambda$slambda_0(gestureEndAction, null);
          var value_3 = tmp$ret$25;
          tmp1_cache_3.updateRememberedValue_l1colo_k$(value_3);
          tmp_12 = value_3;
        } else {
          tmp_12 = tmp0_let_3;
        }
        tmp$ret$26 = tmp_12;
        tmp$ret$27 = tmp$ret$26;
        var tmp_13 = tmp$ret$27;
        tmp$ret$28 = (tmp_13 == null ? true : isObject(tmp_13)) ? tmp_13 : THROW_CCE();
        var tmp0_5 = tmp$ret$28;
        $composer_7.endReplaceableGroup_er37p7_k$();
        tmp$ret$29 = tmp0_5;
        var drag = draggable$default(tmp0_$receiver, draggableState, tmp1_orientation, tmp_10, tmp_11, tmp2_startDragImmediately, null, tmp$ret$29, $isRtl, 32, null);
        var coerced = coerceIn($value, $valueRange._v.get_start_iypx6h_k$(), $valueRange._v.get_endInclusive_r07xpi_k$());
        var fraction = calcFraction($valueRange._v.get_start_iypx6h_k$(), $valueRange._v.get_endInclusive_r07xpi_k$(), coerced);
        SliderImpl$composable($enabled._v, fraction, $tickFractions, $colors._v, maxPx - minPx, $interactionSource._v, press.then_5qw5wu_k$(drag), $composer_0, 14 & $$dirty >> 9 | 7168 & $$dirty >> 15 | 458752 & $$dirty >> 6);
        var tmp_14;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_14 = Unit_getInstance();
        }
        tmp_0 = tmp_14;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function Slider$composable$lambda$ref($value, $onValueChange, $modifier, $enabled, $valueRange, $steps, $onValueChangeFinished, $interactionSource, $colors, $$changed, $$default) {
    return function (p0, p1) {
      Slider$composable$lambda($value, $onValueChange, $modifier, $enabled, $valueRange, $steps, $onValueChangeFinished, $interactionSource, $colors, $$changed, $$default, p0, p1);
      return Unit_getInstance();
    };
  }
  function slideOnKeyEvents$lambda($enabled, $valueRange, $steps, $onValueChangeState, $value, $isRtl) {
    return function (it) {
      var tmp;
      if (!(get_type(it.nativeKeyEvent_1) === Companion_getInstance_12().KeyDown_1) ? true : !$enabled) {
        return false;
      }
      var tmp$ret$0;
      // Inline function 'kotlin.math.abs' call
      var tmp0_abs = $valueRange.get_endInclusive_r07xpi_k$() - $valueRange.get_start_iypx6h_k$();
      tmp$ret$0 = Math.abs(tmp0_abs);
      var rangeLength = tmp$ret$0;
      var actualSteps = $steps > 0 ? $steps + 1 | 0 : 100;
      var delta = rangeLength / actualSteps;
      var tmp_0;
      if (get_isDirectionUp(it.nativeKeyEvent_1)) {
        $onValueChangeState.get_value_j01efc_k$()(coerceIn_1($value + delta, $valueRange));
        tmp_0 = true;
      } else if (get_isDirectionDown(it.nativeKeyEvent_1)) {
        $onValueChangeState.get_value_j01efc_k$()(coerceIn_1($value - delta, $valueRange));
        tmp_0 = true;
      } else if (get_isDirectionRight(it.nativeKeyEvent_1)) {
        var sign = $isRtl ? -1 : 1;
        $onValueChangeState.get_value_j01efc_k$()(coerceIn_1($value + sign * delta, $valueRange));
        tmp_0 = true;
      } else if (get_isDirectionLeft(it.nativeKeyEvent_1)) {
        var sign_0 = $isRtl ? -1 : 1;
        $onValueChangeState.get_value_j01efc_k$()(coerceIn_1($value - sign_0 * delta, $valueRange));
        tmp_0 = true;
      } else if (get_isHome(it.nativeKeyEvent_1)) {
        $onValueChangeState.get_value_j01efc_k$()($valueRange.get_start_iypx6h_k$());
        tmp_0 = true;
      } else if (get_isMoveEnd(it.nativeKeyEvent_1)) {
        $onValueChangeState.get_value_j01efc_k$()($valueRange.get_endInclusive_r07xpi_k$());
        tmp_0 = true;
      } else if (get_isPgUp(it.nativeKeyEvent_1)) {
        var page = coerceIn_0(actualSteps / 10 | 0, 1, 10);
        $onValueChangeState.get_value_j01efc_k$()(coerceIn_1($value - page * delta, $valueRange));
        tmp_0 = true;
      } else if (get_isPgDn(it.nativeKeyEvent_1)) {
        var page_0 = coerceIn_0(actualSteps / 10 | 0, 1, 10);
        $onValueChangeState.get_value_j01efc_k$()(coerceIn_1($value + page_0 * delta, $valueRange));
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
      return tmp_0;
    };
  }
  function sliderSemantics$lambda$lambda($valueRange, $steps, $coerced, $onValueChange, $onValueChangeFinished) {
    return function (targetValue) {
      var newValue = coerceIn(targetValue, $valueRange.get_start_iypx6h_k$(), $valueRange.get_endInclusive_r07xpi_k$());
      var originalVal = newValue;
      var tmp;
      if ($steps > 0) {
        var distance = newValue;
        var inductionVariable = 0;
        var last = $steps + 1 | 0;
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var stepValue = lerp($valueRange.get_start_iypx6h_k$(), $valueRange.get_endInclusive_r07xpi_k$(), i / ($steps + 1 | 0));
            var tmp$ret$0;
            // Inline function 'kotlin.math.abs' call
            var tmp0_abs = stepValue - originalVal;
            tmp$ret$0 = Math.abs(tmp0_abs);
            if (tmp$ret$0 <= distance) {
              var tmp$ret$1;
              // Inline function 'kotlin.math.abs' call
              var tmp1_abs = stepValue - originalVal;
              tmp$ret$1 = Math.abs(tmp1_abs);
              distance = tmp$ret$1;
              newValue = stepValue;
            }
          }
           while (!(i === last));
        tmp = newValue;
      } else {
        tmp = newValue;
      }
      var resolvedValue = tmp;
      var tmp_0;
      if (resolvedValue === $coerced) {
        tmp_0 = false;
      } else {
        $onValueChange(resolvedValue);
        var tmp1_safe_receiver = $onValueChangeFinished;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver();
        tmp_0 = true;
      }
      return tmp_0;
    };
  }
  function sliderSemantics$lambda($enabled, $valueRange, $steps, $coerced, $onValueChange, $onValueChangeFinished) {
    return function ($this$semantics) {
      var tmp;
      if (!$enabled) {
        disabled($this$semantics);
        tmp = Unit_getInstance();
      }
      setProgress$default($this$semantics, null, sliderSemantics$lambda$lambda($valueRange, $steps, $coerced, $onValueChange, $onValueChangeFinished), 1, null);
      return Unit_getInstance();
    };
  }
  function CorrectValueSideEffect$composable$lambda_0($valueRange, $scaleToOffset, $value, $valueState, $trackRange) {
    return function () {
      var error = ($valueRange.get_endInclusive_r07xpi_k$() - $valueRange.get_start_iypx6h_k$()) / 1000;
      var newOffset = $scaleToOffset($value);
      var tmp;
      var tmp$ret$0;
      // Inline function 'kotlin.math.abs' call
      var tmp0_abs = newOffset - $valueState.get_value_j01efc_k$();
      tmp$ret$0 = Math.abs(tmp0_abs);
      if (tmp$ret$0 > error) {
        var tmp_0;
        if ($trackRange.contains_2ehdtg_k$($valueState.get_value_j01efc_k$())) {
          $valueState.set_value_rnwamw_k$(newOffset);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function CorrectValueSideEffect$composable$lambda$ref($scaleToOffset, $valueRange, $trackRange, $valueState, $value, $$changed) {
    return function (p0, p1) {
      CorrectValueSideEffect$composable$lambda($scaleToOffset, $valueRange, $trackRange, $valueState, $value, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function animateToTarget$slambda$lambda($this_drag, $latestValue) {
    return function ($this$animateTo) {
      $this_drag.dragBy_silpzm_k$($this$animateTo.get_value_j01efc_k$() - $latestValue._v);
      $latestValue._v = $this$animateTo.get_value_j01efc_k$();
      return Unit_getInstance();
    };
  }
  function animateToTarget$slambda($current, $target, $velocity, resultContinuation) {
    this.$current_1 = $current;
    this.$target_1 = $target;
    this.$velocity_1 = $velocity;
    CoroutineImpl.call(this, resultContinuation);
  }
  animateToTarget$slambda.prototype.invoke_3d4vzq_k$ = function ($this$drag, $cont) {
    var tmp = this.create_5hhne5_k$($this$drag, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  animateToTarget$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_3d4vzq_k$((!(p1 == null) ? isInterface(p1, DragScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  animateToTarget$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.latestValue0__1 = {_v: this.$current_1};
            this.state_1 = 1;
            var tmp_0 = Animatable$default(this.$current_1, 0.0, 2, null);
            var tmp_1 = get_SliderToTickAnimation();
            suspendResult = tmp_0.animateTo_h218fu_k$(this.$target_1, tmp_1, this.$velocity_1, animateToTarget$slambda$lambda(this.$this$drag_1, this.latestValue0__1), this);
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
  animateToTarget$slambda.prototype.create_5hhne5_k$ = function ($this$drag, completion) {
    var i = new animateToTarget$slambda(this.$current_1, this.$target_1, this.$velocity_1, completion);
    i.$this$drag_1 = $this$drag;
    return i;
  };
  animateToTarget$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_5hhne5_k$((!(value == null) ? isInterface(value, DragScope) : false) ? value : THROW_CCE(), completion);
  };
  animateToTarget$slambda.$metadata$ = classMeta('animateToTarget$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function animateToTarget$slambda_0($current, $target, $velocity, resultContinuation) {
    var i = new animateToTarget$slambda($current, $target, $velocity, resultContinuation);
    var l = function ($this$drag, $cont) {
      return i.invoke_3d4vzq_k$($this$drag, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function sliderTapModifier$lambda($draggableState, $interactionSource, $maxPx, $isRtl, $rawOffset, $gestureEndAction, $pressOffset, $enabled) {
    return function ($this$null) {
      $this$null.name_1 = 'sliderTapModifier';
      $this$null.properties_1.set_y753qn_k$('draggableState', $draggableState);
      $this$null.properties_1.set_y753qn_k$('interactionSource', $interactionSource);
      $this$null.properties_1.set_y753qn_k$('maxPx', $maxPx);
      $this$null.properties_1.set_y753qn_k$('isRtl', $isRtl);
      $this$null.properties_1.set_y753qn_k$('rawOffset', $rawOffset);
      $this$null.properties_1.set_y753qn_k$('gestureEndAction', $gestureEndAction);
      $this$null.properties_1.set_y753qn_k$('pressOffset', $pressOffset);
      $this$null.properties_1.set_y753qn_k$('enabled', $enabled);
      return Unit_getInstance();
    };
  }
  function sliderTapModifier$lambda$lambda() {
    init_properties_Slider_kt_c4fg9z();
    return EmptyCoroutineContext_getInstance();
  }
  function sliderTapModifier$lambda$slambda$lambda$slambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  sliderTapModifier$lambda$slambda$lambda$slambda$slambda.prototype.invoke_3d4vzq_k$ = function ($this$drag, $cont) {
    var tmp = this.create_5hhne5_k$($this$drag, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  sliderTapModifier$lambda$slambda$lambda$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_3d4vzq_k$((!(p1 == null) ? isInterface(p1, DragScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  sliderTapModifier$lambda$slambda$lambda$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          this.$this$drag_1.dragBy_silpzm_k$(0.0);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  sliderTapModifier$lambda$slambda$lambda$slambda$slambda.prototype.create_5hhne5_k$ = function ($this$drag, completion) {
    var i = new sliderTapModifier$lambda$slambda$lambda$slambda$slambda(completion);
    i.$this$drag_1 = $this$drag;
    return i;
  };
  sliderTapModifier$lambda$slambda$lambda$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_5hhne5_k$((!(value == null) ? isInterface(value, DragScope) : false) ? value : THROW_CCE(), completion);
  };
  sliderTapModifier$lambda$slambda$lambda$slambda$slambda.$metadata$ = classMeta('sliderTapModifier$lambda$slambda$lambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function sliderTapModifier$lambda$slambda$lambda$slambda$slambda_0(resultContinuation) {
    var i = new sliderTapModifier$lambda$slambda$lambda$slambda$slambda(resultContinuation);
    var l = function ($this$drag, $cont) {
      return i.invoke_3d4vzq_k$($this$drag, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function sliderTapModifier$lambda$slambda$slambda($isRtl, $maxPx, $pressOffset, $rawOffset, resultContinuation) {
    this.$isRtl_1 = $isRtl;
    this.$maxPx_1 = $maxPx;
    this.$pressOffset_1 = $pressOffset;
    this.$rawOffset_1 = $rawOffset;
    CoroutineImpl.call(this, resultContinuation);
  }
  sliderTapModifier$lambda$slambda$slambda.prototype.invoke_56pugh_k$ = function ($this$detectTapGestures, pos, $cont) {
    var tmp = this.create_rju3ym_k$($this$detectTapGestures, pos, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  sliderTapModifier$lambda$slambda$slambda.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, PressGestureScope) : false) ? p1 : THROW_CCE();
    return this.invoke_56pugh_k$(tmp, p2 instanceof Offset_0 ? p2.packedValue_1 : THROW_CCE(), $cont);
  };
  sliderTapModifier$lambda$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 4;
            this.to0__1 = this.$isRtl_1 ? this.$maxPx_1 - _Offset___get_x__impl__xvi35n(this.pos_1) : _Offset___get_x__impl__xvi35n(this.pos_1);
            this.$pressOffset_1.set_value_rnwamw_k$(this.to0__1 - this.$rawOffset_1.get_value_j01efc_k$());
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = this.$this$detectTapGestures_1.awaitRelease_14vvge_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.exceptionState_1 = 4;
            this.state_1 = 3;
            continue $sm;
          case 2:
            this.exceptionState_1 = 4;
            var tmp_0 = this.exception_1;
            if (tmp_0 instanceof GestureCancellationException) {
              var _ = this.exception_1;
              this.$pressOffset_1.set_value_rnwamw_k$(0.0);
              this.state_1 = 3;
              continue $sm;
            } else {
              throw this.exception_1;
            }

            break;
          case 3:
            this.exceptionState_1 = 4;
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
  sliderTapModifier$lambda$slambda$slambda.prototype.create_rju3ym_k$ = function ($this$detectTapGestures, pos, completion) {
    var i = new sliderTapModifier$lambda$slambda$slambda(this.$isRtl_1, this.$maxPx_1, this.$pressOffset_1, this.$rawOffset_1, completion);
    i.$this$detectTapGestures_1 = $this$detectTapGestures;
    i.pos_1 = pos;
    return i;
  };
  sliderTapModifier$lambda$slambda$slambda.$metadata$ = classMeta('sliderTapModifier$lambda$slambda$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function sliderTapModifier$lambda$slambda$slambda_0($isRtl, $maxPx, $pressOffset, $rawOffset, resultContinuation) {
    var i = new sliderTapModifier$lambda$slambda$slambda($isRtl, $maxPx, $pressOffset, $rawOffset, resultContinuation);
    var l = function ($this$detectTapGestures, pos, $cont) {
      return i.invoke_56pugh_k$($this$detectTapGestures, pos.packedValue_1, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function sliderTapModifier$lambda$slambda$lambda$slambda($draggableState, $gestureEndAction, resultContinuation) {
    this.$draggableState_1 = $draggableState;
    this.$gestureEndAction_1 = $gestureEndAction;
    CoroutineImpl.call(this, resultContinuation);
  }
  sliderTapModifier$lambda$slambda$lambda$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  sliderTapModifier$lambda$slambda$lambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  sliderTapModifier$lambda$slambda$lambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            var tmp_0 = MutatePriority_UserInput_getInstance();
            suspendResult = this.$draggableState_1.drag_p40z53_k$(tmp_0, sliderTapModifier$lambda$slambda$lambda$slambda$slambda_0(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.$gestureEndAction_1.get_value_j01efc_k$()(0.0);
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
  sliderTapModifier$lambda$slambda$lambda$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new sliderTapModifier$lambda$slambda$lambda$slambda(this.$draggableState_1, this.$gestureEndAction_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  sliderTapModifier$lambda$slambda$lambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  sliderTapModifier$lambda$slambda$lambda$slambda.$metadata$ = classMeta('sliderTapModifier$lambda$slambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function sliderTapModifier$lambda$slambda$lambda$slambda_0($draggableState, $gestureEndAction, resultContinuation) {
    var i = new sliderTapModifier$lambda$slambda$lambda$slambda($draggableState, $gestureEndAction, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function sliderTapModifier$lambda$slambda$lambda($scope, $draggableState, $gestureEndAction) {
    return function (it) {
      launch$default($scope, null, null, sliderTapModifier$lambda$slambda$lambda$slambda_0($draggableState, $gestureEndAction, null), 3, null);
      return Unit_getInstance();
    };
  }
  function sliderTapModifier$lambda$slambda($isRtl, $maxPx, $pressOffset, $rawOffset, $scope, $draggableState, $gestureEndAction, resultContinuation) {
    this.$isRtl_1 = $isRtl;
    this.$maxPx_1 = $maxPx;
    this.$pressOffset_1 = $pressOffset;
    this.$rawOffset_1 = $rawOffset;
    this.$scope_1 = $scope;
    this.$draggableState_1 = $draggableState;
    this.$gestureEndAction_1 = $gestureEndAction;
    CoroutineImpl.call(this, resultContinuation);
  }
  sliderTapModifier$lambda$slambda.prototype.invoke_dycxzz_k$ = function ($this$pointerInput, $cont) {
    var tmp = this.create_9k90ga_k$($this$pointerInput, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  sliderTapModifier$lambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_dycxzz_k$((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  sliderTapModifier$lambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            var tmp_0 = sliderTapModifier$lambda$slambda$slambda_0(this.$isRtl_1, this.$maxPx_1, this.$pressOffset_1, this.$rawOffset_1, null);
            suspendResult = detectTapGestures$default(this.$this$pointerInput_1, null, null, tmp_0, sliderTapModifier$lambda$slambda$lambda(this.$scope_1, this.$draggableState_1, this.$gestureEndAction_1), this, 3, null);
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
  sliderTapModifier$lambda$slambda.prototype.create_9k90ga_k$ = function ($this$pointerInput, completion) {
    var i = new sliderTapModifier$lambda$slambda(this.$isRtl_1, this.$maxPx_1, this.$pressOffset_1, this.$rawOffset_1, this.$scope_1, this.$draggableState_1, this.$gestureEndAction_1, completion);
    i.$this$pointerInput_1 = $this$pointerInput;
    return i;
  };
  sliderTapModifier$lambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_9k90ga_k$((!(value == null) ? isInterface(value, PointerInputScope) : false) ? value : THROW_CCE(), completion);
  };
  sliderTapModifier$lambda$slambda.$metadata$ = classMeta('sliderTapModifier$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function sliderTapModifier$lambda$slambda_0($isRtl, $maxPx, $pressOffset, $rawOffset, $scope, $draggableState, $gestureEndAction, resultContinuation) {
    var i = new sliderTapModifier$lambda$slambda($isRtl, $maxPx, $pressOffset, $rawOffset, $scope, $draggableState, $gestureEndAction, resultContinuation);
    var l = function ($this$pointerInput, $cont) {
      return i.invoke_dycxzz_k$($this$pointerInput, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function sliderTapModifier$lambda_0($enabled, $draggableState, $interactionSource, $maxPx, $isRtl, $pressOffset, $rawOffset, $gestureEndAction) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(1945228890);
      sourceInformation($composer_0, 'C981@38544L24:Slider.kt#jmzs0o');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1945228890, $changed, -1, 'androidx.compose.material.sliderTapModifier.<anonymous> (Slider.kt:979)');
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if ($enabled) {
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
        var tmp0_rememberCoroutineScope$composable = null;
        var tmp1_rememberCoroutineScope$composable = $composer_0;
        var getContext = {_v: tmp0_rememberCoroutineScope$composable};
        var $composer_1 = tmp1_rememberCoroutineScope$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(102870005);
        sourceInformation($composer_1, 'C(rememberCoroutineScope$composable)476@19869L144:Effects.kt#9igjgp');
        if (!(1 === 0)) {
          getContext._v = sliderTapModifier$lambda$lambda;
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
        var tmp_1;
        if (false ? true : tmp0_let === Companion_getInstance_0().Empty_1) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
          tmp$ret$0 = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
          var value = tmp$ret$0;
          tmp1_cache.updateRememberedValue_l1colo_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = tmp0_let;
        }
        tmp$ret$1 = tmp_1;
        tmp$ret$2 = tmp$ret$1;
        var tmp_2 = tmp$ret$2;
        tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_2.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        var wrapper = tmp$ret$4;
        var tmp0_0 = wrapper.coroutineScope_1;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$5 = tmp0_0;
        var scope = tmp$ret$5;
        tmp_0 = pointerInput($this$composed, [$draggableState, $interactionSource, $maxPx, $isRtl], sliderTapModifier$lambda$slambda_0($isRtl, $maxPx, $pressOffset, $rawOffset, scope, $draggableState, $gestureEndAction, null));
      } else {
        tmp_0 = $this$composed;
      }
      var tmp1_group = tmp_0;
      var tmp0_1 = tmp1_group;
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0_1;
    };
  }
  function SliderImpl$composable$lambda$ref($enabled, $positionFraction, $tickFractions, $colors, $width, $interactionSource, $modifier, $$changed) {
    return function (p0, p1) {
      SliderImpl$composable$lambda($enabled, $positionFraction, $tickFractions, $colors, $width, $interactionSource, $modifier, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function Track$composable$lambda_0($thumbPx, $inactiveTrackColor, $trackStrokeWidth, $positionFractionEnd, $positionFractionStart, $activeTrackColor, $tickFractions, $inactiveTickColor, $activeTickColor) {
    return function ($this$Canvas) {
      var isRtl = $this$Canvas.get_layoutDirection_7e37v0_k$().equals(LayoutDirection_Rtl_getInstance());
      var sliderLeft = Offset($thumbPx, _Offset___get_y__impl__8bzhra($this$Canvas.get_center_568eeq_k$()));
      var sliderRight = Offset(_Size___get_width__impl__58y75t($this$Canvas.get_size_x9ctfw_k$()) - $thumbPx, _Offset___get_y__impl__8bzhra($this$Canvas.get_center_568eeq_k$()));
      var sliderStart = isRtl ? sliderRight : sliderLeft;
      var sliderEnd = isRtl ? sliderLeft : sliderRight;
      var tmp = $inactiveTrackColor.get_value_j01efc_k$().value_1;
      var tmp_0 = Companion_getInstance_11().Round_1;
      $this$Canvas.drawLine$default_wkqhm9_k$(tmp, sliderStart, sliderEnd, $trackStrokeWidth, tmp_0, null, 0.0, null, null, 480, null);
      var sliderValueEnd = Offset(_Offset___get_x__impl__xvi35n(sliderStart) + (_Offset___get_x__impl__xvi35n(sliderEnd) - _Offset___get_x__impl__xvi35n(sliderStart)) * $positionFractionEnd, _Offset___get_y__impl__8bzhra($this$Canvas.get_center_568eeq_k$()));
      var sliderValueStart = Offset(_Offset___get_x__impl__xvi35n(sliderStart) + (_Offset___get_x__impl__xvi35n(sliderEnd) - _Offset___get_x__impl__xvi35n(sliderStart)) * $positionFractionStart, _Offset___get_y__impl__8bzhra($this$Canvas.get_center_568eeq_k$()));
      var tmp_1 = $activeTrackColor.get_value_j01efc_k$().value_1;
      var tmp_2 = Companion_getInstance_11().Round_1;
      $this$Canvas.drawLine$default_wkqhm9_k$(tmp_1, sliderValueStart, sliderValueEnd, $trackStrokeWidth, tmp_2, null, 0.0, null, null, 480, null);
      var tmp$ret$4;
      // Inline function 'kotlin.collections.groupBy' call
      var tmp$ret$3;
      // Inline function 'kotlin.collections.groupByTo' call
      var tmp0_groupByTo = LinkedHashMap_init_$Create$();
      var tmp0_iterator = $tickFractions.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'androidx.compose.material.Track$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = element > $positionFractionEnd ? true : element < $positionFractionStart;
        var key = tmp$ret$0;
        var tmp$ret$2;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = tmp0_groupByTo.get_1mhr4y_k$(key);
        var tmp_3;
        if (value == null) {
          var tmp$ret$1;
          // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
          tmp$ret$1 = ArrayList_init_$Create$_0();
          var answer = tmp$ret$1;
          tmp0_groupByTo.put_3mhbri_k$(key, answer);
          tmp_3 = answer;
        } else {
          tmp_3 = value;
        }
        tmp$ret$2 = tmp_3;
        var list = tmp$ret$2;
        list.add_1j60pz_k$(element);
      }
      tmp$ret$3 = tmp0_groupByTo;
      tmp$ret$4 = tmp$ret$3;
      var tmp0_forEach = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$5 = tmp0_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      var tmp0_iterator_0 = tmp$ret$5;
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'androidx.compose.material.Track$composable.<anonymous>.<anonymous>' call
        var tmp$ret$6;
        // Inline function 'kotlin.collections.component1' call
        tmp$ret$6 = element_0.get_key_18j28a_k$();
        var outsideFraction = tmp$ret$6;
        var tmp$ret$7;
        // Inline function 'kotlin.collections.component2' call
        tmp$ret$7 = element_0.get_value_j01efc_k$();
        var list_0 = tmp$ret$7;
        var tmp$ret$10;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$9;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(list_0, 10));
        var tmp0_iterator_1 = list_0.iterator_jk1svi_k$();
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator_1.next_20eer_k$();
          var tmp$ret$8;
          // Inline function 'androidx.compose.material.Track$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$8 = Offset(_Offset___get_x__impl__xvi35n(lerp_0(sliderStart, sliderEnd, item)), _Offset___get_y__impl__8bzhra($this$Canvas.get_center_568eeq_k$()));
          tmp0_mapTo.add_1j60pz_k$(new Offset_0(tmp$ret$8));
        }
        tmp$ret$9 = tmp0_mapTo;
        tmp$ret$10 = tmp$ret$9;
        var tmp_4 = tmp$ret$10;
        var tmp_5 = Companion_getInstance_13().Points_1;
        var tmp_6 = (outsideFraction ? $inactiveTickColor : $activeTickColor).get_value_j01efc_k$().value_1;
        var tmp_7 = Companion_getInstance_11().Round_1;
        $this$Canvas.drawPoints$default_c8ymp5_k$(tmp_4, tmp_5, tmp_6, $trackStrokeWidth, tmp_7, null, 0.0, null, null, 480, null);
      }
      return Unit_getInstance();
    };
  }
  function Track$composable$lambda$ref($modifier, $colors, $enabled, $positionFractionStart, $positionFractionEnd, $tickFractions, $thumbPx, $trackStrokeWidth, $$changed) {
    return function (p0, p1) {
      Track$composable$lambda($modifier, $colors, $enabled, $positionFractionStart, $positionFractionEnd, $tickFractions, $thumbPx, $trackStrokeWidth, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_0.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    return this.function_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_0.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function SliderThumb$composable$slambda$slambda($interactions, resultContinuation) {
    this.$interactions_1 = $interactions;
    CoroutineImpl.call(this, resultContinuation);
  }
  SliderThumb$composable$slambda$slambda.prototype.invoke_ry6yte_k$ = function (interaction, $cont) {
    var tmp = this.create_xj5a0d_k$(interaction, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  SliderThumb$composable$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_ry6yte_k$((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $cont);
  };
  SliderThumb$composable$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          var tmp0_subject = this.interaction_1;
          if (tmp0_subject instanceof Press) {
            this.$interactions_1.add_1j60qe_k$(this.interaction_1);
          } else {
            if (tmp0_subject instanceof Release) {
              this.$interactions_1.remove_8hbkbr_k$(this.interaction_1.press_1);
            } else {
              if (tmp0_subject instanceof Cancel) {
                this.$interactions_1.remove_8hbkbr_k$(this.interaction_1.press_1);
              } else {
                if (tmp0_subject instanceof Start) {
                  this.$interactions_1.add_1j60qe_k$(this.interaction_1);
                } else {
                  if (tmp0_subject instanceof Stop) {
                    this.$interactions_1.remove_8hbkbr_k$(this.interaction_1.start_1);
                  } else {
                    if (tmp0_subject instanceof Cancel_0) {
                      this.$interactions_1.remove_8hbkbr_k$(this.interaction_1.start_1);
                    }
                  }
                }
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
  SliderThumb$composable$slambda$slambda.prototype.create_xj5a0d_k$ = function (interaction, completion) {
    var i = new SliderThumb$composable$slambda$slambda(this.$interactions_1, completion);
    i.interaction_1 = interaction;
    return i;
  };
  SliderThumb$composable$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_xj5a0d_k$((!(value == null) ? isInterface(value, Interaction) : false) ? value : THROW_CCE(), completion);
  };
  SliderThumb$composable$slambda$slambda.$metadata$ = classMeta('SliderThumb$composable$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function SliderThumb$composable$slambda$slambda_0($interactions, resultContinuation) {
    var i = new SliderThumb$composable$slambda$slambda($interactions, resultContinuation);
    var l = function (interaction, $cont) {
      return i.invoke_ry6yte_k$(interaction, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function SliderThumb$composable$slambda($interactionSource, $interactions, resultContinuation) {
    this.$interactionSource_1 = $interactionSource;
    this.$interactions_1 = $interactions;
    CoroutineImpl.call(this, resultContinuation);
  }
  SliderThumb$composable$slambda.prototype.invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $cont) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  SliderThumb$composable$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  SliderThumb$composable$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            var tmp_0 = this.$interactionSource_1.get_interactions_ql02qy_k$();
            var tmp_1 = SliderThumb$composable$slambda$slambda_0(this.$interactions_1, null);
            suspendResult = tmp_0.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
  SliderThumb$composable$slambda.prototype.create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new SliderThumb$composable$slambda(this.$interactionSource_1, this.$interactions_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  SliderThumb$composable$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  SliderThumb$composable$slambda.$metadata$ = classMeta('SliderThumb$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function SliderThumb$composable$slambda_0($interactionSource, $interactions, resultContinuation) {
    var i = new SliderThumb$composable$slambda($interactionSource, $interactions, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function SliderThumb$composable$lambda$ref($this_SliderThumb$composable, $modifier, $offset, $interactionSource, $colors, $enabled, $thumbSize, $$changed) {
    return function (p0, p1) {
      SliderThumb$composable$lambda($this_SliderThumb$composable, $modifier, $offset, $interactionSource, $colors, $enabled, $thumbSize, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function isDragging$factory() {
    return getPropertyCallableRef('isDragging', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isDragging_ntsso2_k$();
    }, function (receiver, value) {
      return _set_isDragging__1ociqq(receiver, value);
    });
  }
  function isDragging$factory_0() {
    return getPropertyCallableRef('isDragging', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isDragging_ntsso2_k$();
    }, function (receiver, value) {
      return _set_isDragging__1ociqq(receiver, value);
    });
  }
  var properties_initialized_Slider_kt_mzompp;
  function init_properties_Slider_kt_c4fg9z() {
    if (properties_initialized_Slider_kt_mzompp) {
    } else {
      properties_initialized_Slider_kt_mzompp = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(10);
      ThumbRadius = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(24);
      ThumbRippleRadius = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(1);
      ThumbDefaultElevation = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(6);
      ThumbPressedElevation = tmp$ret$0_2;
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(4);
      TrackHeight = tmp$ret$0_3;
      var tmp$ret$0_4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_4 = _Dp___init__impl__ms3zkb(48);
      SliderHeight = tmp$ret$0_4;
      var tmp$ret$0_5;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_5 = _Dp___init__impl__ms3zkb(144);
      SliderMinWidth = tmp$ret$0_5;
      var tmp = Companion_getInstance();
      var tmp_0 = get_SliderMinWidth();
      var tmp_1 = widthIn$default(tmp, tmp_0, null, 2, null);
      DefaultSliderConstraints = heightIn$default(tmp_1, null, get_SliderHeight(), 1, null);
      SliderToTickAnimation = TweenSpec_init_$Create$(100, 0, null, 6, null);
    }
  }
  function get_HeightToFirstLine() {
    init_properties_Snackbar_kt_7eljf();
    return HeightToFirstLine;
  }
  var HeightToFirstLine;
  function get_HorizontalSpacing() {
    init_properties_Snackbar_kt_7eljf();
    return HorizontalSpacing;
  }
  var HorizontalSpacing;
  function get_HorizontalSpacingButtonSide() {
    init_properties_Snackbar_kt_7eljf();
    return HorizontalSpacingButtonSide;
  }
  var HorizontalSpacingButtonSide;
  function get_SeparateButtonExtraY() {
    init_properties_Snackbar_kt_7eljf();
    return SeparateButtonExtraY;
  }
  var SeparateButtonExtraY;
  function get_SnackbarVerticalPadding() {
    init_properties_Snackbar_kt_7eljf();
    return SnackbarVerticalPadding;
  }
  var SnackbarVerticalPadding;
  function get_TextEndExtraSpacing() {
    init_properties_Snackbar_kt_7eljf();
    return TextEndExtraSpacing;
  }
  var TextEndExtraSpacing;
  function get_LongButtonVerticalOffset() {
    init_properties_Snackbar_kt_7eljf();
    return LongButtonVerticalOffset;
  }
  var LongButtonVerticalOffset;
  function get_SnackbarMinHeightOneLine() {
    init_properties_Snackbar_kt_7eljf();
    return SnackbarMinHeightOneLine;
  }
  var SnackbarMinHeightOneLine;
  function get_SnackbarMinHeightTwoLines() {
    init_properties_Snackbar_kt_7eljf();
    return SnackbarMinHeightTwoLines;
  }
  var SnackbarMinHeightTwoLines;
  var properties_initialized_Snackbar_kt_4x36ah;
  function init_properties_Snackbar_kt_7eljf() {
    if (properties_initialized_Snackbar_kt_4x36ah) {
    } else {
      properties_initialized_Snackbar_kt_4x36ah = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(30);
      HeightToFirstLine = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(16);
      HorizontalSpacing = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(8);
      HorizontalSpacingButtonSide = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(2);
      SeparateButtonExtraY = tmp$ret$0_2;
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(6);
      SnackbarVerticalPadding = tmp$ret$0_3;
      var tmp$ret$0_4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_4 = _Dp___init__impl__ms3zkb(8);
      TextEndExtraSpacing = tmp$ret$0_4;
      var tmp$ret$0_5;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_5 = _Dp___init__impl__ms3zkb(12);
      LongButtonVerticalOffset = tmp$ret$0_5;
      var tmp$ret$0_6;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_6 = _Dp___init__impl__ms3zkb(48);
      SnackbarMinHeightOneLine = tmp$ret$0_6;
      var tmp$ret$0_7;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_7 = _Dp___init__impl__ms3zkb(68);
      SnackbarMinHeightTwoLines = tmp$ret$0_7;
    }
  }
  function Surface$composable(modifier, shape, color, contentColor, border, elevation, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var shape_0 = {_v: shape};
    var color_0 = {_v: new Color(color)};
    var contentColor_0 = {_v: new Color(contentColor)};
    var border_0 = {_v: border};
    var elevation_0 = {_v: new Dp(elevation)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(353896921);
    sourceInformation($composer_0, 'C(Surface$composable)P(5,6,1:c#ui.graphics.Color,3:c#ui.graphics.Color!1,4:c#ui.unit.Dp)106@5259L6,107@5301L22,*112@5476L7,113@5500L793:Surface.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(shape_0._v) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.changed_ga0fqa_k$(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.value_1))) : false) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.changed_ga0fqa_k$(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor_0._v.value_1))) : false) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(border_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_7hxtmu_k$(_Dp___get_value__impl__geb1vb(elevation_0._v.value_1)) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(content) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 2) === 0)) {
          shape_0._v = get_RectangleShape();
        }
        if (!(($default & 4) === 0)) {
          color_0._v = new Color(MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_surface_rbg09j_k$());
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          contentColor_0._v = new Color(contentColorFor$composable(color_0._v.value_1, $composer_0, 14 & $dirty >> 6));
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          border_0._v = null;
        }
        if (!(($default & 32) === 0)) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
          elevation_0._v = new Dp(tmp$ret$0);
        }
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(353896921, $dirty, -1, 'androidx.compose.material.Surface$composable (Surface.kt:103)');
      }
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.Dp.plus' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalAbsoluteElevation();
      var tmp1_$get_current$$composable_gn3xww = $composer_0;
      var $composer_1 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$1 = tmp0.value_1;
      var tmp2_plus = tmp$ret$1;
      var tmp3_plus = elevation_0._v.value_1;
      tmp$ret$2 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp2_plus) + _Dp___get_value__impl__geb1vb(tmp3_plus));
      var absoluteElevation = tmp$ret$2;
      var tmp = [get_LocalContentColor().provides_3e53yf_k$(contentColor_0._v), get_LocalAbsoluteElevation().provides_3e53yf_k$(new Dp(absoluteElevation))];
      var tmp$ret$9;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$8;
      // Inline function 'androidx.compose.material.Surface$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -1822160838, true, Surface$composable$lambda_1(modifier_0, shape_0, color_0, absoluteElevation, $dirty, border_0, elevation_0, content));
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var $composer_2 = tmp0_remember$composable;
      $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2;
      var tmp2_cache = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().Empty_1) {
        var tmp$ret$3;
        // Inline function 'androidx.compose.material.Surface$composable.<anonymous>.<anonymous>' call
        tmp$ret$3 = ComposableLambda$invoke$ref_5(dispatchReceiver);
        var value = tmp$ret$3;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      tmp$ret$4 = tmp_1;
      tmp$ret$5 = tmp$ret$4;
      var tmp_2 = tmp$ret$5;
      tmp$ret$6 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0_0 = tmp$ret$6;
      $composer_2.endReplaceableGroup_er37p7_k$();
      tmp$ret$7 = tmp0_0;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      CompositionLocalProvider$composable(tmp, tmp$ret$9, $composer_0, 48);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Surface$composable$lambda$ref(modifier_0, shape_0, color_0, contentColor_0, border_0, elevation_0, content, $changed, $default));
    }
  }
  function Surface$composable_0(onClick, modifier, enabled, shape, color, contentColor, border, elevation, interactionSource, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var shape_0 = {_v: shape};
    var color_0 = {_v: new Color(color)};
    var contentColor_0 = {_v: new Color(contentColor)};
    var border_0 = {_v: border};
    var elevation_0 = {_v: new Dp(elevation)};
    var interactionSource_0 = {_v: interactionSource};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1747901218);
    sourceInformation($composer_0, 'C(Surface$composable)P(8,7,5,9,1:c#ui.graphics.Color,3:c#ui.graphics.Color!1,4:c#ui.unit.Dp,6)213@10696L6,214@10738L22,217@10872L39,*220@11004L7,221@11028L1013:Surface.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(onClick) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(enabled_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(shape_0._v) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.changed_ga0fqa_k$(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.value_1))) : false) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ((($default & 32) === 0 ? $composer_0.changed_ga0fqa_k$(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor_0._v.value_1))) : false) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(border_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.changed_7hxtmu_k$(_Dp___get_value__impl__geb1vb(elevation_0._v.value_1)) ? 8388608 : 4194304);
    if (($changed & 234881024) === 0)
      $dirty = $dirty | ((($default & 256) === 0 ? $composer_0.changed_ga7h3f_k$(interactionSource_0._v) : false) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(content) ? 536870912 : 268435456);
    if (!(($dirty & 1533916891) === 306783378) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 4) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 8) === 0)) {
          shape_0._v = get_RectangleShape();
        }
        if (!(($default & 16) === 0)) {
          color_0._v = new Color(MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_surface_rbg09j_k$());
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          contentColor_0._v = new Color(contentColorFor$composable(color_0._v.value_1, $composer_0, 14 & $dirty >> 12));
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          border_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
          elevation_0._v = new Dp(tmp$ret$0);
        }
        if (!(($default & 256) === 0)) {
          var tmp$ret$5;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp0_remember$composable = $composer_0;
          var $composer_1 = tmp0_remember$composable;
          $composer_1.startReplaceableGroup_rp6air_k$(547886695);
          sourceInformation($composer_1, 'C(remember$composable):Composables.kt#9igjgp');
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache = $composer_1;
          var tmp$ret$3;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp;
          if (false ? true : tmp0_let === Companion_getInstance_0().Empty_1) {
            var tmp$ret$1;
            // Inline function 'androidx.compose.material.Surface$composable.<anonymous>' call
            tmp$ret$1 = funMutableInteractionSource();
            var value = tmp$ret$1;
            tmp1_cache.updateRememberedValue_l1colo_k$(value);
            tmp = value;
          } else {
            tmp = tmp0_let;
          }
          tmp$ret$2 = tmp;
          tmp$ret$3 = tmp$ret$2;
          var tmp_0 = tmp$ret$3;
          tmp$ret$4 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          var tmp0 = tmp$ret$4;
          $composer_1.endReplaceableGroup_er37p7_k$();
          tmp$ret$5 = tmp0;
          interactionSource_0._v = tmp$ret$5;
          $dirty = $dirty & -234881025;
        }
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
        if (!(($default & 256) === 0))
          $dirty = $dirty & -234881025;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(-1747901218, $dirty, -1, 'androidx.compose.material.Surface$composable (Surface.kt:208)');
      }
      var tmp$ret$7;
      // Inline function 'androidx.compose.ui.unit.Dp.plus' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp1_$get_current$$composable_gn3xww = get_LocalAbsoluteElevation();
      var tmp2_$get_current$$composable_g4n2vl = $composer_0;
      var $composer_2 = tmp2_$get_current$$composable_g4n2vl;
      sourceInformationMarkerStart($composer_2, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.consume_93tbl1_k$(tmp1_$get_current$$composable_gn3xww);
      sourceInformationMarkerEnd($composer_2);
      tmp$ret$6 = tmp0_0.value_1;
      var tmp3_plus = tmp$ret$6;
      var tmp4_plus = elevation_0._v.value_1;
      tmp$ret$7 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp3_plus) + _Dp___get_value__impl__geb1vb(tmp4_plus));
      var absoluteElevation = tmp$ret$7;
      var tmp_1 = [get_LocalContentColor().provides_3e53yf_k$(contentColor_0._v), get_LocalAbsoluteElevation().provides_3e53yf_k$(new Dp(absoluteElevation))];
      var tmp$ret$14;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.material.Surface$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 2031491085, true, Surface$composable$lambda_2(modifier_0, shape_0, color_0, absoluteElevation, $dirty, border_0, elevation_0, interactionSource_0, enabled_0, onClick, content));
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_3 = tmp0_remember$composable_0;
      $composer_3.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_3, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_3;
      var tmp2_cache = $composer_3.changed_ga7h3f_k$(dispatchReceiver);
      var tmp$ret$10;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_0().Empty_1) {
        var tmp$ret$8;
        // Inline function 'androidx.compose.material.Surface$composable.<anonymous>.<anonymous>' call
        tmp$ret$8 = ComposableLambda$invoke$ref_6(dispatchReceiver);
        var value_0 = tmp$ret$8;
        tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = tmp0_let_0;
      }
      tmp$ret$9 = tmp_3;
      tmp$ret$10 = tmp$ret$9;
      var tmp_4 = tmp$ret$10;
      tmp$ret$11 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      var tmp0_1 = tmp$ret$11;
      $composer_3.endReplaceableGroup_er37p7_k$();
      tmp$ret$12 = tmp0_1;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      CompositionLocalProvider$composable(tmp_1, tmp$ret$14, $composer_0, 48);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Surface$composable$lambda$ref_0(onClick, modifier_0, enabled_0, shape_0, color_0, contentColor_0, border_0, elevation_0, interactionSource_0, content, $changed, $default));
    }
  }
  function surface(_this__u8e3s4, shape, backgroundColor, border_0, elevation) {
    return clip(background(shadow$default(_this__u8e3s4, elevation, shape, false, null, null, 24, null).then_5qw5wu_k$(!(border_0 == null) ? border(Companion_getInstance(), border_0, shape) : Companion_getInstance()), backgroundColor, shape), shape);
  }
  function surfaceColorAtElevation$composable(color, elevationOverlay, absoluteElevation, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-112085913);
    sourceInformation($composer_0, 'C(surfaceColorAtElevation$composable)P(1:c#ui.graphics.Color,2,0:c#ui.unit.Dp)637@31177L6,638@31248L31:Surface.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-112085913, $changed, -1, 'androidx.compose.material.surfaceColorAtElevation$composable (Surface.kt:632)');
    }
    var tmp;
    if (equals(color, MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_surface_rbg09j_k$()) ? !(elevationOverlay == null) : false) {
      tmp = elevationOverlay.apply$composable_pd3zbm_k$(color, absoluteElevation, $composer_0, 14 & $changed | 112 & $changed >> 3 | 896 & $changed << 3);
    } else {
      tmp = color;
    }
    var tmp1_group = tmp;
    var tmp0 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  }
  function Surface$composable$lambda($modifier, $shape, $color, $contentColor, $border, $elevation, $content, $$changed, $$default, $composer, $force) {
    return Surface$composable($modifier._v, $shape._v, $color._v.value_1, $contentColor._v.value_1, $border._v, $elevation._v.value_1, $content, $composer, $$changed | 1, $$default);
  }
  function Surface$composable$lambda_0($onClick, $modifier, $enabled, $shape, $color, $contentColor, $border, $elevation, $interactionSource, $content, $$changed, $$default, $composer, $force) {
    return Surface$composable_0($onClick, $modifier._v, $enabled._v, $shape._v, $color._v.value_1, $contentColor._v.value_1, $border._v, $elevation._v.value_1, $interactionSource._v, $content, $composer, $$changed | 1, $$default);
  }
  function Surface$composable$lambda$lambda($this$semantics) {
    return Unit_getInstance();
  }
  function Surface$composable$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  Surface$composable$lambda$slambda.prototype.invoke_dycxzz_k$ = function ($this$pointerInput, $cont) {
    var tmp = this.create_9k90ga_k$($this$pointerInput, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  Surface$composable$lambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_dycxzz_k$((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  Surface$composable$lambda$slambda.prototype.doResume_5yljmg_k$ = function () {
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
  Surface$composable$lambda$slambda.prototype.create_9k90ga_k$ = function ($this$pointerInput, completion) {
    var i = new Surface$composable$lambda$slambda(completion);
    i.$this$pointerInput_1 = $this$pointerInput;
    return i;
  };
  Surface$composable$lambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_9k90ga_k$((!(value == null) ? isInterface(value, PointerInputScope) : false) ? value : THROW_CCE(), completion);
  };
  Surface$composable$lambda$slambda.$metadata$ = classMeta('Surface$composable$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Surface$composable$lambda$slambda_0(resultContinuation) {
    var i = new Surface$composable$lambda$slambda(resultContinuation);
    var l = function ($this$pointerInput, $cont) {
      return i.invoke_dycxzz_k$($this$pointerInput, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$composable$lambda_1($modifier, $shape, $color, $absoluteElevation, $$dirty, $border, $elevation, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C123@5914L7,121@5785L221,129@6158L2,130@6197L2,117@5649L638:Surface.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1822160838, $changed, -1, 'androidx.compose.material.Surface$composable.<anonymous> (Surface.kt:116)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp_0 = $modifier._v;
        var tmp_1 = $shape._v;
        var tmp_2 = $color._v.value_1;
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7 = get_LocalElevationOverlay();
        var tmp1_$get_current$$composable_gn3xww = $composer_0;
        var $composer_1 = tmp1_$get_current$$composable_gn3xww;
        sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_1.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
        sourceInformationMarkerEnd($composer_1);
        tmp$ret$0 = tmp0;
        var tmp_3 = surface(tmp_0, tmp_1, surfaceColorAtElevation$composable(tmp_2, tmp$ret$0, $absoluteElevation, $composer_0, 14 & $$dirty >> 6), $border._v, $elevation._v.value_1);
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp2_remember$composable = $composer_0;
        var $composer_2 = tmp2_remember$composable;
        $composer_2.startReplaceableGroup_rp6air_k$(547886695);
        sourceInformation($composer_2, 'C(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_2;
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (false ? true : tmp0_let === Companion_getInstance_0().Empty_1) {
          var tmp$ret$1;
          // Inline function 'androidx.compose.material.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$1 = Surface$composable$lambda$lambda;
          var value = tmp$ret$1;
          tmp1_cache.updateRememberedValue_l1colo_k$(value);
          tmp_4 = value;
        } else {
          tmp_4 = tmp0_let;
        }
        tmp$ret$2 = tmp_4;
        tmp$ret$3 = tmp$ret$2;
        var tmp_5 = tmp$ret$3;
        tmp$ret$4 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        var tmp0_0 = tmp$ret$4;
        $composer_2.endReplaceableGroup_er37p7_k$();
        tmp$ret$5 = tmp0_0;
        var tmp_6 = semantics(tmp_3, false, tmp$ret$5);
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_3 = tmp3_remember$composable;
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
        var tmp_7;
        if (false ? true : tmp0_let_0 === Companion_getInstance_0().Empty_1) {
          var tmp$ret$6;
          // Inline function 'androidx.compose.material.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$6 = Surface$composable$lambda$slambda_0(null);
          var value_0 = tmp$ret$6;
          tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
          tmp_7 = value_0;
        } else {
          tmp_7 = tmp0_let_0;
        }
        tmp$ret$7 = tmp_7;
        tmp$ret$8 = tmp$ret$7;
        var tmp_8 = tmp$ret$8;
        tmp$ret$9 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
        var tmp0_1 = tmp$ret$9;
        $composer_3.endReplaceableGroup_er37p7_k$();
        tmp$ret$10 = tmp0_1;
        var tmp4_Box$composable = pointerInput_0(tmp_6, Unit_getInstance(), tmp$ret$10);
        var tmp5_Box$composable = null;
        var tmp6_Box$composable = $composer_0;
        var modifier = tmp4_Box$composable;
        var contentAlignment = tmp5_Box$composable;
        var propagateMinConstraints = true;
        var $composer_4 = tmp6_Box$composable;
        $composer_4.startReplaceableGroup_rp6air_k$(1330882304);
        sourceInformation($composer_4, 'C(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance();
        if (!(2 === 0))
          contentAlignment = Companion_getInstance_4().TopStart_1;
        if (!(0 === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_4, 48);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable = modifier;
        var tmp1_Layout$composable = $composer_4;
        var tmp2_Layout$composable = 0;
        var modifier_0 = tmp0_Layout$composable;
        var $composer_5 = tmp1_Layout$composable;
        $composer_5.startReplaceableGroup_rp6air_k$(1725976829);
        sourceInformation($composer_5, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7_0 = get_LocalDensity();
        var tmp1_$get_current$$composable_gn3xww_0 = $composer_5;
        var $composer_6 = tmp1_$get_current$$composable_gn3xww_0;
        sourceInformationMarkerStart($composer_6, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_2 = $composer_6.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7_0);
        sourceInformationMarkerEnd($composer_6);
        tmp$ret$11 = tmp0_2;
        var density = tmp$ret$11;
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
        var tmp3_$get_current$$composable_fm67ua = $composer_5;
        var $composer_7 = tmp3_$get_current$$composable_fm67ua;
        sourceInformationMarkerStart($composer_7, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_3 = $composer_7.consume_93tbl1_k$(tmp2_$get_current$$composable_g4n2vl);
        sourceInformationMarkerEnd($composer_7);
        tmp$ret$12 = tmp0_3;
        var layoutDirection = tmp$ret$12;
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
        var tmp5_$get_current$$composable_el8hro = $composer_5;
        var $composer_8 = tmp5_$get_current$$composable_el8hro;
        sourceInformationMarkerStart($composer_8, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_4 = $composer_8.consume_93tbl1_k$(tmp4_$get_current$$composable_f3pcsz);
        sourceInformationMarkerEnd($composer_8);
        tmp$ret$13 = tmp0_4;
        var viewConfiguration = tmp$ret$13;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp6_ReusableComposeNode$composable = Companion_getInstance_5().Constructor_1;
        var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp8_ReusableComposeNode$composable = $composer_5;
        var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
        var $composer_9 = tmp8_ReusableComposeNode$composable;
        var tmp_9 = $composer_9.get_applier_bupu8u_k$();
        if (!isInterface(tmp_9, Applier)) {
          invalidApplier();
        }
        $composer_9.startReusableNode_jk07k2_k$();
        if ($composer_9.get_inserting_25mlsw_k$()) {
          $composer_9.createNode_13g769_k$(tmp6_ReusableComposeNode$composable);
        } else {
          $composer_9.useNode_inlzo8_k$();
        }
        $composer_9.disableReusing_y35tew_k$();
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_9);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_5().SetMeasurePolicy_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_5().SetDensity_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_5().SetLayoutDirection_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_5().SetViewConfiguration_1);
        $composer_9.enableReusing_6k309v_k$();
        tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_9)), $composer_9, 112 & tmp9_ReusableComposeNode$composable >> 3);
        $composer_9.startReplaceableGroup_rp6air_k$(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var tmp3__anonymous__ufb84q = $composer_9;
        var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
        var $composer_10 = tmp3__anonymous__ufb84q;
        $composer_10.startReplaceableGroup_rp6air_k$(-2137368960);
        sourceInformation($composer_10, 'C72@3384L9:Box.kt#2w3rfo');
        if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_10.get_skipping_3owdve_k$()) {
          // Inline function 'androidx.compose.material.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp7__anonymous__b0knam = BoxScopeInstance_getInstance();
          var tmp8__anonymous__65w033 = $composer_10;
          var tmp9__anonymous__1b7cvk = 6;
          var $composer_11 = tmp8__anonymous__65w033;
          $composer_11.startReplaceableGroup_rp6air_k$(1539610176);
          sourceInformation($composer_11, 'C133@6268L9:Surface.kt#jmzs0o');
          if (!((tmp9__anonymous__1b7cvk & 81) === 16) ? true : !$composer_11.get_skipping_3owdve_k$()) {
            $content($composer_11, 14 & $$dirty >> 18);
          } else {
            $composer_11.skipToGroupEnd_lhns3f_k$();
          }
          $composer_11.endReplaceableGroup_er37p7_k$();
        } else {
          $composer_10.skipToGroupEnd_lhns3f_k$();
        }
        $composer_10.endReplaceableGroup_er37p7_k$();
        $composer_9.endReplaceableGroup_er37p7_k$();
        $composer_9.endNode_3mkr10_k$();
        $composer_5.endReplaceableGroup_er37p7_k$();
        $composer_4.endReplaceableGroup_er37p7_k$();
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_getInstance();
        }
        tmp = tmp_10;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function Surface$composable$lambda$ref($modifier, $shape, $color, $contentColor, $border, $elevation, $content, $$changed, $$default) {
    return function (p0, p1) {
      Surface$composable$lambda($modifier, $shape, $color, $contentColor, $border, $elevation, $content, $$changed, $$default, p0, p1);
      return Unit_getInstance();
    };
  }
  function Surface$composable$lambda_2($modifier, $shape, $color, $absoluteElevation, $$dirty, $border, $elevation, $interactionSource, $enabled, $onClick, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C232@11484L7,230@11355L221,240@11795L16,225@11177L858:Surface.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(2031491085, $changed, -1, 'androidx.compose.material.Surface$composable.<anonymous> (Surface.kt:224)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp_0 = minimumTouchTargetSize($modifier._v);
        var tmp_1 = $shape._v;
        var tmp_2 = $color._v.value_1;
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7 = get_LocalElevationOverlay();
        var tmp1_$get_current$$composable_gn3xww = $composer_0;
        var $composer_1 = tmp1_$get_current$$composable_gn3xww;
        sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_1.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
        sourceInformationMarkerEnd($composer_1);
        tmp$ret$0 = tmp0;
        var tmp_3 = surface(tmp_0, tmp_1, surfaceColorAtElevation$composable(tmp_2, tmp$ret$0, $absoluteElevation, $composer_0, 14 & $$dirty >> 12), $border._v, $elevation._v.value_1);
        var tmp_4 = $interactionSource._v;
        var tmp_5 = _Dp___init__impl__ms3zkb(0.0);
        var tmp_6 = rememberRipple$composable(false, tmp_5, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 7);
        var tmp_7 = $enabled._v;
        var tmp2_Box$composable = clickable$default(tmp_3, tmp_4, tmp_6, tmp_7, null, Companion_getInstance_9().Button_1, $onClick, 8, null);
        var tmp3_Box$composable = null;
        var tmp4_Box$composable = $composer_0;
        var modifier = tmp2_Box$composable;
        var contentAlignment = tmp3_Box$composable;
        var propagateMinConstraints = true;
        var $composer_2 = tmp4_Box$composable;
        $composer_2.startReplaceableGroup_rp6air_k$(1330882304);
        sourceInformation($composer_2, 'C(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance();
        if (!(2 === 0))
          contentAlignment = Companion_getInstance_4().TopStart_1;
        if (!(0 === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_2, 48);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable = modifier;
        var tmp1_Layout$composable = $composer_2;
        var tmp2_Layout$composable = 0;
        var modifier_0 = tmp0_Layout$composable;
        var $composer_3 = tmp1_Layout$composable;
        $composer_3.startReplaceableGroup_rp6air_k$(1725976829);
        sourceInformation($composer_3, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7_0 = get_LocalDensity();
        var tmp1_$get_current$$composable_gn3xww_0 = $composer_3;
        var $composer_4 = tmp1_$get_current$$composable_gn3xww_0;
        sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_0 = $composer_4.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7_0);
        sourceInformationMarkerEnd($composer_4);
        tmp$ret$1 = tmp0_0;
        var density = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
        var tmp3_$get_current$$composable_fm67ua = $composer_3;
        var $composer_5 = tmp3_$get_current$$composable_fm67ua;
        sourceInformationMarkerStart($composer_5, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_1 = $composer_5.consume_93tbl1_k$(tmp2_$get_current$$composable_g4n2vl);
        sourceInformationMarkerEnd($composer_5);
        tmp$ret$2 = tmp0_1;
        var layoutDirection = tmp$ret$2;
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
        var tmp5_$get_current$$composable_el8hro = $composer_3;
        var $composer_6 = tmp5_$get_current$$composable_el8hro;
        sourceInformationMarkerStart($composer_6, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_2 = $composer_6.consume_93tbl1_k$(tmp4_$get_current$$composable_f3pcsz);
        sourceInformationMarkerEnd($composer_6);
        tmp$ret$3 = tmp0_2;
        var viewConfiguration = tmp$ret$3;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp6_ReusableComposeNode$composable = Companion_getInstance_5().Constructor_1;
        var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp8_ReusableComposeNode$composable = $composer_3;
        var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
        var $composer_7 = tmp8_ReusableComposeNode$composable;
        var tmp_8 = $composer_7.get_applier_bupu8u_k$();
        if (!isInterface(tmp_8, Applier)) {
          invalidApplier();
        }
        $composer_7.startReusableNode_jk07k2_k$();
        if ($composer_7.get_inserting_25mlsw_k$()) {
          $composer_7.createNode_13g769_k$(tmp6_ReusableComposeNode$composable);
        } else {
          $composer_7.useNode_inlzo8_k$();
        }
        $composer_7.disableReusing_y35tew_k$();
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_7);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_5().SetMeasurePolicy_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_5().SetDensity_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_5().SetLayoutDirection_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_5().SetViewConfiguration_1);
        $composer_7.enableReusing_6k309v_k$();
        tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_7)), $composer_7, 112 & tmp9_ReusableComposeNode$composable >> 3);
        $composer_7.startReplaceableGroup_rp6air_k$(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var tmp3__anonymous__ufb84q = $composer_7;
        var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
        var $composer_8 = tmp3__anonymous__ufb84q;
        $composer_8.startReplaceableGroup_rp6air_k$(-2137368960);
        sourceInformation($composer_8, 'C72@3384L9:Box.kt#2w3rfo');
        if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_8.get_skipping_3owdve_k$()) {
          // Inline function 'androidx.compose.material.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp5__anonymous__kpxxpo = BoxScopeInstance_getInstance();
          var tmp6__anonymous__fv9ai5 = $composer_8;
          var tmp7__anonymous__b0knam = 6;
          var $composer_9 = tmp6__anonymous__fv9ai5;
          $composer_9.startReplaceableGroup_rp6air_k$(-390905273);
          sourceInformation($composer_9, 'C247@12016L9:Surface.kt#jmzs0o');
          if (!((tmp7__anonymous__b0knam & 81) === 16) ? true : !$composer_9.get_skipping_3owdve_k$()) {
            $content($composer_9, 14 & $$dirty >> 27);
          } else {
            $composer_9.skipToGroupEnd_lhns3f_k$();
          }
          $composer_9.endReplaceableGroup_er37p7_k$();
        } else {
          $composer_8.skipToGroupEnd_lhns3f_k$();
        }
        $composer_8.endReplaceableGroup_er37p7_k$();
        $composer_7.endReplaceableGroup_er37p7_k$();
        $composer_7.endNode_3mkr10_k$();
        $composer_3.endReplaceableGroup_er37p7_k$();
        $composer_2.endReplaceableGroup_er37p7_k$();
        var tmp_9;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_9 = Unit_getInstance();
        }
        tmp = tmp_9;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function Surface$composable$lambda$ref_0($onClick, $modifier, $enabled, $shape, $color, $contentColor, $border, $elevation, $interactionSource, $content, $$changed, $$default) {
    return function (p0, p1) {
      Surface$composable$lambda_0($onClick, $modifier, $enabled, $shape, $color, $contentColor, $border, $elevation, $interactionSource, $content, $$changed, $$default, p0, p1);
      return Unit_getInstance();
    };
  }
  function get_DISMISS_THRESHOLD() {
    init_properties_SwipeToDismiss_kt_7hu6yt();
    return DISMISS_THRESHOLD;
  }
  var DISMISS_THRESHOLD;
  var properties_initialized_SwipeToDismiss_kt_n9jaax;
  function init_properties_SwipeToDismiss_kt_7hu6yt() {
    if (properties_initialized_SwipeToDismiss_kt_n9jaax) {
    } else {
      properties_initialized_SwipeToDismiss_kt_n9jaax = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(56);
      DISMISS_THRESHOLD = tmp$ret$0;
    }
  }
  function get_TrackWidth() {
    init_properties_Switch_kt_scfiqu();
    return TrackWidth;
  }
  var TrackWidth;
  function get_TrackStrokeWidth() {
    init_properties_Switch_kt_scfiqu();
    return TrackStrokeWidth;
  }
  var TrackStrokeWidth;
  function get_ThumbDiameter() {
    init_properties_Switch_kt_scfiqu();
    return ThumbDiameter;
  }
  var ThumbDiameter;
  function get_ThumbRippleRadius_0() {
    init_properties_Switch_kt_scfiqu();
    return ThumbRippleRadius_0;
  }
  var ThumbRippleRadius_0;
  function get_DefaultSwitchPadding() {
    init_properties_Switch_kt_scfiqu();
    return DefaultSwitchPadding;
  }
  var DefaultSwitchPadding;
  function get_SwitchWidth() {
    init_properties_Switch_kt_scfiqu();
    return SwitchWidth;
  }
  var SwitchWidth;
  function get_SwitchHeight() {
    init_properties_Switch_kt_scfiqu();
    return SwitchHeight;
  }
  var SwitchHeight;
  function get_ThumbPathLength() {
    init_properties_Switch_kt_scfiqu();
    return ThumbPathLength;
  }
  var ThumbPathLength;
  function get_AnimationSpec_0() {
    init_properties_Switch_kt_scfiqu();
    return AnimationSpec_0;
  }
  var AnimationSpec_0;
  function get_ThumbDefaultElevation_0() {
    init_properties_Switch_kt_scfiqu();
    return ThumbDefaultElevation_0;
  }
  var ThumbDefaultElevation_0;
  function get_ThumbPressedElevation_0() {
    init_properties_Switch_kt_scfiqu();
    return ThumbPressedElevation_0;
  }
  var ThumbPressedElevation_0;
  var properties_initialized_Switch_kt_7kkg8m;
  function init_properties_Switch_kt_scfiqu() {
    if (properties_initialized_Switch_kt_7kkg8m) {
    } else {
      properties_initialized_Switch_kt_7kkg8m = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(34);
      TrackWidth = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(14);
      TrackStrokeWidth = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(20);
      ThumbDiameter = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(24);
      ThumbRippleRadius_0 = tmp$ret$0_2;
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(2);
      DefaultSwitchPadding = tmp$ret$0_3;
      SwitchWidth = get_TrackWidth();
      SwitchHeight = get_ThumbDiameter();
      var tmp$ret$0_4;
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var tmp0_minus = get_TrackWidth();
      var tmp1_minus = get_ThumbDiameter();
      tmp$ret$0_4 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_minus) - _Dp___get_value__impl__geb1vb(tmp1_minus));
      ThumbPathLength = tmp$ret$0_4;
      AnimationSpec_0 = TweenSpec_init_$Create$(100, 0, null, 6, null);
      var tmp$ret$0_5;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_5 = _Dp___init__impl__ms3zkb(1);
      ThumbDefaultElevation_0 = tmp$ret$0_5;
      var tmp$ret$0_6;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_6 = _Dp___init__impl__ms3zkb(6);
      ThumbPressedElevation_0 = tmp$ret$0_6;
    }
  }
  function get_SmallTabHeight() {
    init_properties_Tab_kt_tqjoxr();
    return SmallTabHeight;
  }
  var SmallTabHeight;
  function get_LargeTabHeight() {
    init_properties_Tab_kt_tqjoxr();
    return LargeTabHeight;
  }
  var LargeTabHeight;
  function get_HorizontalTextPadding() {
    init_properties_Tab_kt_tqjoxr();
    return HorizontalTextPadding;
  }
  var HorizontalTextPadding;
  function get_SingleLineTextBaselineWithIcon() {
    init_properties_Tab_kt_tqjoxr();
    return SingleLineTextBaselineWithIcon;
  }
  var SingleLineTextBaselineWithIcon;
  function get_DoubleLineTextBaselineWithIcon() {
    init_properties_Tab_kt_tqjoxr();
    return DoubleLineTextBaselineWithIcon;
  }
  var DoubleLineTextBaselineWithIcon;
  function get_IconDistanceFromBaseline() {
    init_properties_Tab_kt_tqjoxr();
    return IconDistanceFromBaseline;
  }
  var IconDistanceFromBaseline;
  function get_TextDistanceFromLeadingIcon() {
    init_properties_Tab_kt_tqjoxr();
    return TextDistanceFromLeadingIcon;
  }
  var TextDistanceFromLeadingIcon;
  var properties_initialized_Tab_kt_t1ydej;
  function init_properties_Tab_kt_tqjoxr() {
    if (properties_initialized_Tab_kt_t1ydej) {
    } else {
      properties_initialized_Tab_kt_t1ydej = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(48);
      SmallTabHeight = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(72);
      LargeTabHeight = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(16);
      HorizontalTextPadding = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(14);
      SingleLineTextBaselineWithIcon = tmp$ret$0_2;
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(6);
      DoubleLineTextBaselineWithIcon = tmp$ret$0_3;
      IconDistanceFromBaseline = get_sp(20);
      var tmp$ret$0_4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_4 = _Dp___init__impl__ms3zkb(8);
      TextDistanceFromLeadingIcon = tmp$ret$0_4;
    }
  }
  function get_ScrollableTabRowMinimumTabWidth() {
    init_properties_TabRow_kt_r1dnat();
    return ScrollableTabRowMinimumTabWidth;
  }
  var ScrollableTabRowMinimumTabWidth;
  function get_ScrollableTabRowScrollSpec() {
    init_properties_TabRow_kt_r1dnat();
    return ScrollableTabRowScrollSpec;
  }
  var ScrollableTabRowScrollSpec;
  var properties_initialized_TabRow_kt_8vmbon;
  function init_properties_TabRow_kt_r1dnat() {
    if (properties_initialized_TabRow_kt_8vmbon) {
    } else {
      properties_initialized_TabRow_kt_8vmbon = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(90);
      ScrollableTabRowMinimumTabWidth = tmp$ret$0;
      ScrollableTabRowScrollSpec = tween$default(250, 0, get_FastOutSlowInEasing(), 2, null);
    }
  }
  function get_LocalTextStyle() {
    init_properties_Text_kt_pz5ql();
    return LocalTextStyle;
  }
  var LocalTextStyle;
  function ProvideTextStyle$composable(value, content, $composer, $changed) {
    init_properties_Text_kt_pz5ql();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1131319997);
    sourceInformation($composer_0, 'C(ProvideTextStyle$composable)P(1)263@12533L7,264@12558L80:Text.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1131319997, $dirty, -1, 'androidx.compose.material.ProvideTextStyle$composable (Text.kt:262)');
      }
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalTextStyle();
      var tmp1_$get_current$$composable_gn3xww = $composer_0;
      var $composer_1 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$0 = tmp0;
      var mergedStyle = tmp$ret$0.merge_axh15w_k$(value);
      CompositionLocalProvider$composable([get_LocalTextStyle().provides_3e53yf_k$(mergedStyle)], content, $composer_0, 112 & $dirty);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(ProvideTextStyle$composable$lambda$ref(value, content, $changed));
    }
  }
  function Text$composable(text, modifier, color, fontSize, fontStyle, fontWeight, fontFamily, letterSpacing, textDecoration, textAlign, lineHeight, overflow, softWrap, maxLines, onTextLayout, style, $composer, $changed, $changed1, $default) {
    init_properties_Text_kt_pz5ql();
    var modifier_0 = {_v: modifier};
    var color_0 = {_v: new Color(color)};
    var fontSize_0 = {_v: new TextUnit(fontSize)};
    var tmp = fontStyle;
    var fontStyle_0 = {_v: tmp == null ? null : new FontStyle(tmp)};
    var fontWeight_0 = {_v: fontWeight};
    var fontFamily_0 = {_v: fontFamily};
    var letterSpacing_0 = {_v: new TextUnit(letterSpacing)};
    var textDecoration_0 = {_v: textDecoration};
    var tmp_0 = textAlign;
    var textAlign_0 = {_v: tmp_0 == null ? null : new TextAlign(tmp_0)};
    var lineHeight_0 = {_v: new TextUnit(lineHeight)};
    var overflow_0 = {_v: new TextOverflow(overflow)};
    var softWrap_0 = {_v: softWrap};
    var maxLines_0 = {_v: maxLines};
    var onTextLayout_0 = {_v: onTextLayout};
    var style_0 = {_v: style};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(2085819656);
    sourceInformation($composer_0, 'C(Text$composable)P(13,8,0:c#ui.graphics.Color,2:c#ui.unit.TextUnit,3:c#ui.text.font.FontStyle,4!1,5:c#ui.unit.TextUnit,15,14:c#ui.text.style.TextAlign,6:c#ui.unit.TextUnit,10:c#ui.text.style.TextOverflow,11)105@5506L2,106@5548L7,129@6306L145:Text.kt#jmzs0o');
    var $dirty = $changed;
    var $dirty1 = $changed1;
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
      $dirty = $dirty | ($composer_0.changed_ga0fqa_k$(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.value_1))) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga0fqa_k$(_TextUnit___get_packedValue__impl__it60w4(fontSize_0._v.packedValue_1)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(fontStyle_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(fontWeight_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(fontFamily_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.changed_ga0fqa_k$(_TextUnit___get_packedValue__impl__it60w4(letterSpacing_0._v.packedValue_1)) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(textDecoration_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(textAlign_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_ga0fqa_k$(_TextUnit___get_packedValue__impl__it60w4(lineHeight_0._v.packedValue_1)) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 112) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_s0r703_k$(_TextOverflow___get_value__impl__vugm5i(overflow_0._v.value_1)) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 896) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_i0nym2_k$(softWrap_0._v) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 7168) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_s0r703_k$(maxLines_0._v) ? 2048 : 1024);
    if (($changed1 & 57344) === 0)
      $dirty1 = $dirty1 | ((($default & 16384) === 0 ? $composer_0.changed_ga7h3f_k$(onTextLayout_0._v) : false) ? 16384 : 8192);
    if (($changed1 & 458752) === 0)
      $dirty1 = $dirty1 | ((($default & 32768) === 0 ? $composer_0.changed_ga7h3f_k$(style_0._v) : false) ? 131072 : 65536);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 374491) === 74898)) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 4) === 0)) {
          color_0._v = new Color(Companion_getInstance_1().Unspecified_1);
        }
        if (!(($default & 8) === 0)) {
          fontSize_0._v = new TextUnit(Companion_getInstance_14().Unspecified_1);
        }
        if (!(($default & 16) === 0)) {
          fontStyle_0._v = null;
        }
        if (!(($default & 32) === 0)) {
          fontWeight_0._v = null;
        }
        if (!(($default & 64) === 0)) {
          fontFamily_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          letterSpacing_0._v = new TextUnit(Companion_getInstance_14().Unspecified_1);
        }
        if (!(($default & 256) === 0)) {
          textDecoration_0._v = null;
        }
        if (!(($default & 512) === 0)) {
          textAlign_0._v = null;
        }
        if (!(($default & 1024) === 0)) {
          lineHeight_0._v = new TextUnit(Companion_getInstance_14().Unspecified_1);
        }
        if (!(($default & 2048) === 0)) {
          overflow_0._v = new TextOverflow(Companion_getInstance_15().Clip_1);
        }
        if (!(($default & 4096) === 0)) {
          softWrap_0._v = true;
        }
        if (!(($default & 8192) === 0)) {
          maxLines_0._v = IntCompanionObject_getInstance().MAX_VALUE_1;
        }
        if (!(($default & 16384) === 0)) {
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
          var tmp_1;
          if (false ? true : tmp0_let === Companion_getInstance_0().Empty_1) {
            var tmp$ret$0;
            // Inline function 'androidx.compose.material.Text$composable.<anonymous>' call
            tmp$ret$0 = Text$composable$lambda_0;
            var value = tmp$ret$0;
            tmp1_cache.updateRememberedValue_l1colo_k$(value);
            tmp_1 = value;
          } else {
            tmp_1 = tmp0_let;
          }
          tmp$ret$1 = tmp_1;
          tmp$ret$2 = tmp$ret$1;
          var tmp_2 = tmp$ret$2;
          tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
          var tmp0 = tmp$ret$3;
          $composer_1.endReplaceableGroup_er37p7_k$();
          tmp$ret$4 = tmp0;
          onTextLayout_0._v = tmp$ret$4;
          $dirty1 = $dirty1 & -57345;
        }
        if (!(($default & 32768) === 0)) {
          var tmp$ret$5;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp1_$get_current$$composable_gn3xww = get_LocalTextStyle();
          var tmp2_$get_current$$composable_g4n2vl = $composer_0;
          var $composer_2 = tmp2_$get_current$$composable_g4n2vl;
          sourceInformationMarkerStart($composer_2, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_0 = $composer_2.consume_93tbl1_k$(tmp1_$get_current$$composable_gn3xww);
          sourceInformationMarkerEnd($composer_2);
          tmp$ret$5 = tmp0_0;
          style_0._v = tmp$ret$5;
          $dirty1 = $dirty1 & -458753;
        }
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 16384) === 0))
          $dirty1 = $dirty1 & -57345;
        if (!(($default & 32768) === 0))
          $dirty1 = $dirty1 & -458753;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(2085819656, $dirty, $dirty1, 'androidx.compose.material.Text$composable (Text.kt:90)');
      }
      $composer_0.startReplaceableGroup_rp6air_k$(1330678101);
      sourceInformation($composer_0, '*111@5663L7,111@5702L7');
      var tmp$ret$13;
      // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
      var tmp3_takeOrElse = color_0._v.value_1;
      var tmp_3;
      var tmp$ret$6;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      tmp$ret$6 = !equals(_Color___get_value__impl__1pls5m(tmp3_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance_1().Unspecified_1));
      if (tmp$ret$6) {
        tmp_3 = tmp3_takeOrElse;
      } else {
        var tmp$ret$12;
        // Inline function 'androidx.compose.material.Text$composable.<anonymous>' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
        var tmp0_takeOrElse = style_0._v.get_color_v34vrz_k$();
        var tmp_4;
        var tmp$ret$7;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        tmp$ret$7 = !equals(_Color___get_value__impl__1pls5m(tmp0_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance_1().Unspecified_1));
        if (tmp$ret$7) {
          tmp_4 = tmp0_takeOrElse;
        } else {
          var tmp$ret$10;
          // Inline function 'androidx.compose.material.Text$composable.<anonymous>.<anonymous>' call
          var tmp$ret$8;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
          var tmp1_$get_current$$composable_gn3xww_0 = $composer_0;
          var $composer_3 = tmp1_$get_current$$composable_gn3xww_0;
          sourceInformationMarkerStart($composer_3, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_1 = $composer_3.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
          sourceInformationMarkerEnd($composer_3);
          tmp$ret$8 = tmp0_1.value_1;
          var tmp_5 = tmp$ret$8;
          var tmp$ret$9;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp2_$get_current$$composable_g4n2vl_0 = get_LocalContentAlpha();
          var tmp3_$get_current$$composable_fm67ua = $composer_0;
          var $composer_4 = tmp3_$get_current$$composable_fm67ua;
          sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_2 = $composer_4.consume_93tbl1_k$(tmp2_$get_current$$composable_g4n2vl_0);
          sourceInformationMarkerEnd($composer_4);
          tmp$ret$9 = tmp0_2;
          var tmp_6 = tmp$ret$9;
          var tmp0_return = Color__copy$default_impl_ectz3s(tmp_5, tmp_6, 0.0, 0.0, 0.0, 14, null);
          tmp$ret$10 = tmp0_return;
          tmp_4 = tmp$ret$10;
        }
        tmp$ret$11 = tmp_4;
        var tmp0_group = tmp$ret$11;
        var tmp1_return = tmp0_group;
        tmp$ret$12 = tmp1_return;
        tmp_3 = tmp$ret$12;
      }
      tmp$ret$13 = tmp_3;
      var tmp0_group_0 = tmp$ret$13;
      $composer_0.endReplaceableGroup_er37p7_k$();
      var textColor = tmp0_group_0;
      var tmp_7 = style_0._v;
      var tmp_8 = fontSize_0._v;
      var tmp_9 = tmp_8 == null ? null : tmp_8.packedValue_1;
      var tmp_10 = fontWeight_0._v;
      var tmp_11 = fontStyle_0._v;
      var tmp_12 = tmp_11 == null ? null : tmp_11.value_1;
      var tmp_13 = fontFamily_0._v;
      var tmp_14 = letterSpacing_0._v;
      var tmp_15 = tmp_14 == null ? null : tmp_14.packedValue_1;
      var tmp_16 = textDecoration_0._v;
      var tmp_17 = textAlign_0._v;
      var tmp_18 = tmp_17 == null ? null : tmp_17.value_1;
      var tmp_19 = lineHeight_0._v;
      var tmp_20 = tmp_19 == null ? null : tmp_19.packedValue_1;
      var mergedStyle = tmp_7.merge_axh15w_k$(TextStyle_init_$Create$(textColor, tmp_9, tmp_10, tmp_12, null, tmp_13, null, tmp_15, null, null, null, null, tmp_16, null, tmp_18, null, tmp_20, null, 175952, null));
      BasicText$composable(text, modifier_0._v, mergedStyle, onTextLayout_0._v, overflow_0._v.value_1, softWrap_0._v, maxLines_0._v, $composer_0, 14 & $dirty | 112 & $dirty | 7168 & $dirty1 >> 3 | 57344 & $dirty1 << 9 | 458752 & $dirty1 << 9 | 3670016 & $dirty1 << 9, 0);
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
      tmp1_safe_receiver.updateScope_xhrf9y_k$(Text$composable$lambda$ref(text, modifier_0, color_0, fontSize_0, fontStyle_0, fontWeight_0, fontFamily_0, letterSpacing_0, textDecoration_0, textAlign_0, lineHeight_0, overflow_0, softWrap_0, maxLines_0, onTextLayout_0, style_0, $changed, $changed1, $default));
    }
  }
  function ProvideTextStyle$composable$lambda($value, $content, $$changed, $composer, $force) {
    return ProvideTextStyle$composable($value, $content, $composer, $$changed | 1);
  }
  function Text$composable$lambda($text, $modifier, $color, $fontSize, $fontStyle, $fontWeight, $fontFamily, $letterSpacing, $textDecoration, $textAlign, $lineHeight, $overflow, $softWrap, $maxLines, $onTextLayout, $style, $$changed, $$changed1, $$default, $composer, $force) {
    var tmp = $modifier._v;
    var tmp_0 = $color._v.value_1;
    var tmp_1 = $fontSize._v.packedValue_1;
    var tmp_2 = $fontStyle._v;
    var tmp_3 = tmp_2 == null ? null : tmp_2.value_1;
    var tmp_4 = $fontWeight._v;
    var tmp_5 = $fontFamily._v;
    var tmp_6 = $letterSpacing._v.packedValue_1;
    var tmp_7 = $textDecoration._v;
    var tmp_8 = $textAlign._v;
    return Text$composable($text, tmp, tmp_0, tmp_1, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8 == null ? null : tmp_8.value_1, $lineHeight._v.packedValue_1, $overflow._v.value_1, $softWrap._v, $maxLines._v, $onTextLayout._v, $style._v, $composer, $$changed | 1, $$changed1, $$default);
  }
  function LocalTextStyle$lambda() {
    init_properties_Text_kt_pz5ql();
    return Companion_getInstance_16().Default_1;
  }
  function ProvideTextStyle$composable$lambda$ref($value, $content, $$changed) {
    return function (p0, p1) {
      ProvideTextStyle$composable$lambda($value, $content, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function Text$composable$lambda_0(it) {
    init_properties_Text_kt_pz5ql();
    return Unit_getInstance();
  }
  function Text$composable$lambda$ref($text, $modifier, $color, $fontSize, $fontStyle, $fontWeight, $fontFamily, $letterSpacing, $textDecoration, $textAlign, $lineHeight, $overflow, $softWrap, $maxLines, $onTextLayout, $style, $$changed, $$changed1, $$default) {
    return function (p0, p1) {
      Text$composable$lambda($text, $modifier, $color, $fontSize, $fontStyle, $fontWeight, $fontFamily, $letterSpacing, $textDecoration, $textAlign, $lineHeight, $overflow, $softWrap, $maxLines, $onTextLayout, $style, $$changed, $$changed1, $$default, p0, p1);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Text_kt_kgdrtb;
  function init_properties_Text_kt_pz5ql() {
    if (properties_initialized_Text_kt_kgdrtb) {
    } else {
      properties_initialized_Text_kt_kgdrtb = true;
      var tmp = structuralEqualityPolicy();
      LocalTextStyle = compositionLocalOf(tmp, LocalTextStyle$lambda);
    }
  }
  function get_FirstBaselineOffset() {
    init_properties_TextField_kt_30cxrt();
    return FirstBaselineOffset;
  }
  var FirstBaselineOffset;
  function get_TextFieldBottomPadding() {
    init_properties_TextField_kt_30cxrt();
    return TextFieldBottomPadding;
  }
  var TextFieldBottomPadding;
  function get_TextFieldTopPadding() {
    init_properties_TextField_kt_30cxrt();
    return TextFieldTopPadding;
  }
  var TextFieldTopPadding;
  var properties_initialized_TextField_kt_dspx0j;
  function init_properties_TextField_kt_30cxrt() {
    if (properties_initialized_TextField_kt_dspx0j) {
    } else {
      properties_initialized_TextField_kt_dspx0j = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(20);
      FirstBaselineOffset = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(10);
      TextFieldBottomPadding = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(4);
      TextFieldTopPadding = tmp$ret$0_1;
    }
  }
  function get_ZeroConstraints() {
    init_properties_TextFieldImpl_kt_h1g9bt();
    return ZeroConstraints;
  }
  var ZeroConstraints;
  function get_TextFieldPadding() {
    init_properties_TextFieldImpl_kt_h1g9bt();
    return TextFieldPadding;
  }
  var TextFieldPadding;
  function get_HorizontalIconPadding() {
    init_properties_TextFieldImpl_kt_h1g9bt();
    return HorizontalIconPadding;
  }
  var HorizontalIconPadding;
  function get_IconDefaultSizeModifier() {
    init_properties_TextFieldImpl_kt_h1g9bt();
    return IconDefaultSizeModifier;
  }
  var IconDefaultSizeModifier;
  var properties_initialized_TextFieldImpl_kt_by5wbh;
  function init_properties_TextFieldImpl_kt_h1g9bt() {
    if (properties_initialized_TextFieldImpl_kt_by5wbh) {
    } else {
      properties_initialized_TextFieldImpl_kt_by5wbh = true;
      ZeroConstraints = Constraints(0, 0, 0, 0);
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
      TextFieldPadding = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(12);
      HorizontalIconPadding = tmp$ret$0_0;
      var tmp = Companion_getInstance();
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(48);
      var tmp_0 = tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(48);
      IconDefaultSizeModifier = defaultMinSize(tmp, tmp_0, tmp$ret$1);
    }
  }
  function get_LocalMinimumTouchTargetEnforcement() {
    init_properties_TouchTarget_kt_w7dv5o();
    return LocalMinimumTouchTargetEnforcement;
  }
  var LocalMinimumTouchTargetEnforcement;
  function minimumTouchTargetSize(_this__u8e3s4) {
    init_properties_TouchTarget_kt_w7dv5o();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = minimumTouchTargetSize$lambda;
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    var tmp_0 = tmp$ret$0;
    return composed$composable(_this__u8e3s4, tmp_0, minimumTouchTargetSize$lambda_0);
  }
  function MinimumTouchTargetModifier$measure$lambda($width, $placeable, $height) {
    return function ($this$layout) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = ($width - $placeable.width_1 | 0) / 2.0;
      tmp$ret$0 = roundToInt(tmp0_roundToInt);
      var centerX = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp1_roundToInt = ($height - $placeable.height_1 | 0) / 2.0;
      tmp$ret$1 = roundToInt(tmp1_roundToInt);
      var centerY = tmp$ret$1;
      $this$layout.place$default_lnyts6_k$($placeable, centerX, centerY, 0.0, 4, null);
      return Unit_getInstance();
    };
  }
  function MinimumTouchTargetModifier(size) {
    this.size_1 = size;
  }
  MinimumTouchTargetModifier.prototype.get_size_o3hexm_k$ = function () {
    return this.size_1;
  };
  MinimumTouchTargetModifier.prototype.measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.measure_ikak0q_k$(constraints);
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = placeable.width_1;
    var tmp1_maxOf = _this__u8e3s4.roundToPx_hl1u8z_k$(_DpSize___get_width__impl__o3d5gt(this.size_1));
    tmp$ret$0 = Math.max(tmp0_maxOf, tmp1_maxOf);
    var width = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp2_maxOf = placeable.height_1;
    var tmp3_maxOf = _this__u8e3s4.roundToPx_hl1u8z_k$(_DpSize___get_height__impl__5xueo2(this.size_1));
    tmp$ret$1 = Math.max(tmp2_maxOf, tmp3_maxOf);
    var height = tmp$ret$1;
    return _this__u8e3s4.layout$default_yb6zmd_k$(width, height, null, MinimumTouchTargetModifier$measure$lambda(width, placeable, height), 4, null);
  };
  MinimumTouchTargetModifier.prototype.equals = function (other) {
    var tmp0_elvis_lhs = other instanceof MinimumTouchTargetModifier ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.size_1, otherModifier.size_1);
  };
  MinimumTouchTargetModifier.prototype.hashCode = function () {
    return DpSize__hashCode_impl_jvpgaj(this.size_1);
  };
  MinimumTouchTargetModifier.$metadata$ = classMeta('MinimumTouchTargetModifier', [LayoutModifier]);
  function LocalMinimumTouchTargetEnforcement$lambda() {
    init_properties_TouchTarget_kt_w7dv5o();
    return true;
  }
  function minimumTouchTargetSize$lambda($this$null) {
    init_properties_TouchTarget_kt_w7dv5o();
    // Inline function 'androidx.compose.material.minimumTouchTargetSize.<anonymous>' call
    $this$null.name_1 = 'minimumTouchTargetSize';
    $this$null.properties_1.set_y753qn_k$('README', 'Adds outer padding to measure at least 48.dp (default) in size to disambiguate touch interactions if the element would measure smaller');
    return Unit_getInstance();
  }
  function minimumTouchTargetSize$lambda_0($this$composed, $composer, $changed) {
    init_properties_TouchTarget_kt_w7dv5o();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1220403677);
    sourceInformation($composer_0, 'C43@1920L7,46@2147L7:TouchTarget.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(1220403677, $changed, -1, 'androidx.compose.material.minimumTouchTargetSize.<anonymous> (TouchTarget.kt:42)');
    }
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalMinimumTouchTargetEnforcement();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    if (tmp$ret$0) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalViewConfiguration();
      var tmp3_$get_current$$composable_fm67ua = $composer_0;
      var $composer_2 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_2, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.consume_93tbl1_k$(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_2);
      tmp$ret$1 = tmp0_0;
      var size = tmp$ret$1.get_minimumTouchTargetSize_zcsgfs_k$();
      tmp = new MinimumTouchTargetModifier(size);
    } else {
      tmp = Companion_getInstance();
    }
    var tmp1_group = tmp;
    var tmp0_1 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_1;
  }
  var properties_initialized_TouchTarget_kt_3yqh7k;
  function init_properties_TouchTarget_kt_w7dv5o() {
    if (properties_initialized_TouchTarget_kt_3yqh7k) {
    } else {
      properties_initialized_TouchTarget_kt_3yqh7k = true;
      LocalMinimumTouchTargetEnforcement = staticCompositionLocalOf(LocalMinimumTouchTargetEnforcement$lambda);
    }
  }
  function get_LocalTypography() {
    init_properties_Typography_kt_c4b2d1();
    return LocalTypography;
  }
  var LocalTypography;
  function Typography_init_$Init$(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, $this) {
    Typography.call($this, withDefaultFontFamily(h1, defaultFontFamily), withDefaultFontFamily(h2, defaultFontFamily), withDefaultFontFamily(h3, defaultFontFamily), withDefaultFontFamily(h4, defaultFontFamily), withDefaultFontFamily(h5, defaultFontFamily), withDefaultFontFamily(h6, defaultFontFamily), withDefaultFontFamily(subtitle1, defaultFontFamily), withDefaultFontFamily(subtitle2, defaultFontFamily), withDefaultFontFamily(body1, defaultFontFamily), withDefaultFontFamily(body2, defaultFontFamily), withDefaultFontFamily(button, defaultFontFamily), withDefaultFontFamily(caption, defaultFontFamily), withDefaultFontFamily(overline, defaultFontFamily));
    return $this;
  }
  function Typography_init_$Create$(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline) {
    return Typography_init_$Init$(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, Object.create(Typography.prototype));
  }
  function Typography_init_$Init$_0(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      defaultFontFamily = Companion_getInstance_17().Default_1;
    if (!(($mask0 & 2) === 0)) {
      var tmp0_fontWeight = Companion_getInstance_18().Light_1;
      var tmp1_fontSize = get_sp(96);
      var tmp2_letterSpacing = get_sp_0(-1.5);
      h1 = TextStyle_init_$Create$(null, tmp1_fontSize, tmp0_fontWeight, null, null, null, null, tmp2_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 4) === 0)) {
      var tmp3_fontWeight = Companion_getInstance_18().Light_1;
      var tmp4_fontSize = get_sp(60);
      var tmp5_letterSpacing = get_sp_0(-0.5);
      h2 = TextStyle_init_$Create$(null, tmp4_fontSize, tmp3_fontWeight, null, null, null, null, tmp5_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 8) === 0)) {
      var tmp6_fontWeight = Companion_getInstance_18().Normal_1;
      var tmp7_fontSize = get_sp(48);
      var tmp8_letterSpacing = get_sp(0);
      h3 = TextStyle_init_$Create$(null, tmp7_fontSize, tmp6_fontWeight, null, null, null, null, tmp8_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 16) === 0)) {
      var tmp9_fontWeight = Companion_getInstance_18().Normal_1;
      var tmp10_fontSize = get_sp(34);
      var tmp11_letterSpacing = get_sp_0(0.25);
      h4 = TextStyle_init_$Create$(null, tmp10_fontSize, tmp9_fontWeight, null, null, null, null, tmp11_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 32) === 0)) {
      var tmp12_fontWeight = Companion_getInstance_18().Normal_1;
      var tmp13_fontSize = get_sp(24);
      var tmp14_letterSpacing = get_sp(0);
      h5 = TextStyle_init_$Create$(null, tmp13_fontSize, tmp12_fontWeight, null, null, null, null, tmp14_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 64) === 0)) {
      var tmp15_fontWeight = Companion_getInstance_18().Medium_1;
      var tmp16_fontSize = get_sp(20);
      var tmp17_letterSpacing = get_sp_0(0.15);
      h6 = TextStyle_init_$Create$(null, tmp16_fontSize, tmp15_fontWeight, null, null, null, null, tmp17_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 128) === 0)) {
      var tmp18_fontWeight = Companion_getInstance_18().Normal_1;
      var tmp19_fontSize = get_sp(16);
      var tmp20_letterSpacing = get_sp_0(0.15);
      subtitle1 = TextStyle_init_$Create$(null, tmp19_fontSize, tmp18_fontWeight, null, null, null, null, tmp20_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 256) === 0)) {
      var tmp21_fontWeight = Companion_getInstance_18().Medium_1;
      var tmp22_fontSize = get_sp(14);
      var tmp23_letterSpacing = get_sp_0(0.1);
      subtitle2 = TextStyle_init_$Create$(null, tmp22_fontSize, tmp21_fontWeight, null, null, null, null, tmp23_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 512) === 0)) {
      var tmp24_fontWeight = Companion_getInstance_18().Normal_1;
      var tmp25_fontSize = get_sp(16);
      var tmp26_letterSpacing = get_sp_0(0.5);
      body1 = TextStyle_init_$Create$(null, tmp25_fontSize, tmp24_fontWeight, null, null, null, null, tmp26_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 1024) === 0)) {
      var tmp27_fontWeight = Companion_getInstance_18().Normal_1;
      var tmp28_fontSize = get_sp(14);
      var tmp29_letterSpacing = get_sp_0(0.25);
      body2 = TextStyle_init_$Create$(null, tmp28_fontSize, tmp27_fontWeight, null, null, null, null, tmp29_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 2048) === 0)) {
      var tmp30_fontWeight = Companion_getInstance_18().Medium_1;
      var tmp31_fontSize = get_sp(14);
      var tmp32_letterSpacing = get_sp_0(1.25);
      button = TextStyle_init_$Create$(null, tmp31_fontSize, tmp30_fontWeight, null, null, null, null, tmp32_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 4096) === 0)) {
      var tmp33_fontWeight = Companion_getInstance_18().Normal_1;
      var tmp34_fontSize = get_sp(12);
      var tmp35_letterSpacing = get_sp_0(0.4);
      caption = TextStyle_init_$Create$(null, tmp34_fontSize, tmp33_fontWeight, null, null, null, null, tmp35_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 8192) === 0)) {
      var tmp36_fontWeight = Companion_getInstance_18().Normal_1;
      var tmp37_fontSize = get_sp(10);
      var tmp38_letterSpacing = get_sp_0(1.5);
      overline = TextStyle_init_$Create$(null, tmp37_fontSize, tmp36_fontWeight, null, null, null, null, tmp38_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    Typography_init_$Init$(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, $this);
    return $this;
  }
  function Typography_init_$Create$_0(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, $mask0, $marker) {
    return Typography_init_$Init$_0(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, $mask0, $marker, Object.create(Typography.prototype));
  }
  function Typography(h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline) {
    this.h1__1 = h1;
    this.h2__1 = h2;
    this.h3__1 = h3;
    this.h4__1 = h4;
    this.h5__1 = h5;
    this.h6__1 = h6;
    this.subtitle1__1 = subtitle1;
    this.subtitle2__1 = subtitle2;
    this.body1__1 = body1;
    this.body2__1 = body2;
    this.button_1 = button;
    this.caption_1 = caption;
    this.overline_1 = overline;
  }
  Typography.prototype.get_h1_kntnzi_k$ = function () {
    return this.h1__1;
  };
  Typography.prototype.get_h2_kntnzh_k$ = function () {
    return this.h2__1;
  };
  Typography.prototype.get_h3_kntnzg_k$ = function () {
    return this.h3__1;
  };
  Typography.prototype.get_h4_kntnzf_k$ = function () {
    return this.h4__1;
  };
  Typography.prototype.get_h5_kntnze_k$ = function () {
    return this.h5__1;
  };
  Typography.prototype.get_h6_kntnzd_k$ = function () {
    return this.h6__1;
  };
  Typography.prototype.get_subtitle1_hlfdyo_k$ = function () {
    return this.subtitle1__1;
  };
  Typography.prototype.get_subtitle2_hlfdyp_k$ = function () {
    return this.subtitle2__1;
  };
  Typography.prototype.get_body1_ipaahy_k$ = function () {
    return this.body1__1;
  };
  Typography.prototype.get_body2_ipaahz_k$ = function () {
    return this.body2__1;
  };
  Typography.prototype.get_button_bmjiuz_k$ = function () {
    return this.button_1;
  };
  Typography.prototype.get_caption_aejif1_k$ = function () {
    return this.caption_1;
  };
  Typography.prototype.get_overline_n1hw8f_k$ = function () {
    return this.overline_1;
  };
  Typography.prototype.copy_9bikh2_k$ = function (h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline) {
    return new Typography(h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline);
  };
  Typography.prototype.copy$default_5pd5y4_k$ = function (h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      h1 = this.h1__1;
    if (!(($mask0 & 2) === 0))
      h2 = this.h2__1;
    if (!(($mask0 & 4) === 0))
      h3 = this.h3__1;
    if (!(($mask0 & 8) === 0))
      h4 = this.h4__1;
    if (!(($mask0 & 16) === 0))
      h5 = this.h5__1;
    if (!(($mask0 & 32) === 0))
      h6 = this.h6__1;
    if (!(($mask0 & 64) === 0))
      subtitle1 = this.subtitle1__1;
    if (!(($mask0 & 128) === 0))
      subtitle2 = this.subtitle2__1;
    if (!(($mask0 & 256) === 0))
      body1 = this.body1__1;
    if (!(($mask0 & 512) === 0))
      body2 = this.body2__1;
    if (!(($mask0 & 1024) === 0))
      button = this.button_1;
    if (!(($mask0 & 2048) === 0))
      caption = this.caption_1;
    if (!(($mask0 & 4096) === 0))
      overline = this.overline_1;
    return this.copy_9bikh2_k$(h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline);
  };
  Typography.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Typography))
      return false;
    if (!this.h1__1.equals(other.h1__1))
      return false;
    if (!this.h2__1.equals(other.h2__1))
      return false;
    if (!this.h3__1.equals(other.h3__1))
      return false;
    if (!this.h4__1.equals(other.h4__1))
      return false;
    if (!this.h5__1.equals(other.h5__1))
      return false;
    if (!this.h6__1.equals(other.h6__1))
      return false;
    if (!this.subtitle1__1.equals(other.subtitle1__1))
      return false;
    if (!this.subtitle2__1.equals(other.subtitle2__1))
      return false;
    if (!this.body1__1.equals(other.body1__1))
      return false;
    if (!this.body2__1.equals(other.body2__1))
      return false;
    if (!this.button_1.equals(other.button_1))
      return false;
    if (!this.caption_1.equals(other.caption_1))
      return false;
    if (!this.overline_1.equals(other.overline_1))
      return false;
    return true;
  };
  Typography.prototype.hashCode = function () {
    var result = this.h1__1.hashCode();
    result = imul(31, result) + this.h2__1.hashCode() | 0;
    result = imul(31, result) + this.h3__1.hashCode() | 0;
    result = imul(31, result) + this.h4__1.hashCode() | 0;
    result = imul(31, result) + this.h5__1.hashCode() | 0;
    result = imul(31, result) + this.h6__1.hashCode() | 0;
    result = imul(31, result) + this.subtitle1__1.hashCode() | 0;
    result = imul(31, result) + this.subtitle2__1.hashCode() | 0;
    result = imul(31, result) + this.body1__1.hashCode() | 0;
    result = imul(31, result) + this.body2__1.hashCode() | 0;
    result = imul(31, result) + this.button_1.hashCode() | 0;
    result = imul(31, result) + this.caption_1.hashCode() | 0;
    result = imul(31, result) + this.overline_1.hashCode() | 0;
    return result;
  };
  Typography.prototype.toString = function () {
    return 'Typography(h1=' + this.h1__1 + ', h2=' + this.h2__1 + ', h3=' + this.h3__1 + ', h4=' + this.h4__1 + ', h5=' + this.h5__1 + ', h6=' + this.h6__1 + ', ' + ('subtitle1=' + this.subtitle1__1 + ', subtitle2=' + this.subtitle2__1 + ', body1=' + this.body1__1 + ', ') + ('body2=' + this.body2__1 + ', button=' + this.button_1 + ', caption=' + this.caption_1 + ', overline=' + this.overline_1 + ')');
  };
  Typography.$metadata$ = classMeta('Typography');
  function withDefaultFontFamily(_this__u8e3s4, default_0) {
    init_properties_Typography_kt_c4b2d1();
    var tmp;
    if (!(_this__u8e3s4.get_fontFamily_ulphcs_k$() == null)) {
      tmp = _this__u8e3s4;
    } else {
      tmp = _this__u8e3s4.copy$default_m6tbq3_k$(null, null, null, null, null, default_0, null, null, null, null, null, null, null, null, null, null, null, null, 262111, null);
    }
    return tmp;
  }
  function LocalTypography$lambda() {
    init_properties_Typography_kt_c4b2d1();
    return Typography_init_$Create$_0(null, null, null, null, null, null, null, null, null, null, null, null, null, null, 16383, null);
  }
  var properties_initialized_Typography_kt_bpd27j;
  function init_properties_Typography_kt_c4b2d1() {
    if (properties_initialized_Typography_kt_bpd27j) {
    } else {
      properties_initialized_Typography_kt_bpd27j = true;
      LocalTypography = staticCompositionLocalOf(LocalTypography$lambda);
    }
  }
  function get_IndicatorSize() {
    init_properties_PullRefreshIndicator_kt_m3cdb3();
    return IndicatorSize;
  }
  var IndicatorSize;
  function get_SpinnerShape() {
    init_properties_PullRefreshIndicator_kt_m3cdb3();
    return SpinnerShape;
  }
  var SpinnerShape;
  function get_ArcRadius() {
    init_properties_PullRefreshIndicator_kt_m3cdb3();
    return ArcRadius;
  }
  var ArcRadius;
  function get_StrokeWidth_0() {
    init_properties_PullRefreshIndicator_kt_m3cdb3();
    return StrokeWidth_0;
  }
  var StrokeWidth_0;
  function get_ArrowWidth() {
    init_properties_PullRefreshIndicator_kt_m3cdb3();
    return ArrowWidth;
  }
  var ArrowWidth;
  function get_ArrowHeight() {
    init_properties_PullRefreshIndicator_kt_m3cdb3();
    return ArrowHeight;
  }
  var ArrowHeight;
  function get_Elevation() {
    init_properties_PullRefreshIndicator_kt_m3cdb3();
    return Elevation;
  }
  var Elevation;
  var properties_initialized_PullRefreshIndicator_kt_212xq3;
  function init_properties_PullRefreshIndicator_kt_m3cdb3() {
    if (properties_initialized_PullRefreshIndicator_kt_212xq3) {
    } else {
      properties_initialized_PullRefreshIndicator_kt_212xq3 = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(40);
      IndicatorSize = tmp$ret$0;
      SpinnerShape = get_CircleShape();
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(7.5);
      ArcRadius = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(2.5);
      StrokeWidth_0 = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(10);
      ArrowWidth = tmp$ret$0_2;
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(5);
      ArrowHeight = tmp$ret$0_3;
      var tmp$ret$0_4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_4 = _Dp___init__impl__ms3zkb(6);
      Elevation = tmp$ret$0_4;
    }
  }
  function PlatformMaterialTheme$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1609905806);
    sourceInformation($composer_0, 'C(PlatformMaterialTheme$composable)27@1085L6,28@1140L6,29@1217L6,25@958L338:MaterialTheme.js.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1609905806, $dirty, -1, 'androidx.compose.material.PlatformMaterialTheme$composable (MaterialTheme.js.kt:24)');
      }
      var tmp = get_LocalScrollbarStyle();
      var tmp_0 = defaultScrollbarStyle();
      var tmp_1 = MaterialTheme_getInstance().$get_shapes$$composable_4kixjg_k$($composer_0, 6).small_1;
      var tmp_2 = MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_onSurface_nme6dy_k$();
      var tmp_3 = Color__copy$default_impl_ectz3s(tmp_2, 0.12, 0.0, 0.0, 0.0, 14, null);
      var tmp_4 = MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6).get_onSurface_nme6dy_k$();
      CompositionLocalProvider$composable([tmp.provides_3e53yf_k$(tmp_0.copy$default_l6gq2a_k$(null, null, tmp_1, 0, tmp_3, Color__copy$default_impl_ectz3s(tmp_4, 0.5, 0.0, 0.0, 0.0, 14, null), 11, null))], content, $composer_0, 112 & $dirty << 3);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(PlatformMaterialTheme$composable$lambda$ref(content, $changed));
    }
  }
  function PlatformMaterialTheme$composable$lambda($content, $$changed, $composer, $force) {
    return PlatformMaterialTheme$composable($content, $composer, $$changed | 1);
  }
  function PlatformMaterialTheme$composable$lambda$ref($content, $$changed) {
    return function (p0, p1) {
      PlatformMaterialTheme$composable$lambda($content, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function get_DIRECTION_UP_KEY_CODE() {
    init_properties_NavigationKeyEvents_jsNative_kt_yuov00();
    return DIRECTION_UP_KEY_CODE;
  }
  var DIRECTION_UP_KEY_CODE;
  function get_DIRECTION_DOWN_KEY_CODE() {
    init_properties_NavigationKeyEvents_jsNative_kt_yuov00();
    return DIRECTION_DOWN_KEY_CODE;
  }
  var DIRECTION_DOWN_KEY_CODE;
  function get_DIRECTION_LEFT_KEY_CODE() {
    init_properties_NavigationKeyEvents_jsNative_kt_yuov00();
    return DIRECTION_LEFT_KEY_CODE;
  }
  var DIRECTION_LEFT_KEY_CODE;
  function get_DIRECTION_RIGHT_KEY_CODE() {
    init_properties_NavigationKeyEvents_jsNative_kt_yuov00();
    return DIRECTION_RIGHT_KEY_CODE;
  }
  var DIRECTION_RIGHT_KEY_CODE;
  function get_HOME_KEY_CODE() {
    init_properties_NavigationKeyEvents_jsNative_kt_yuov00();
    return HOME_KEY_CODE;
  }
  var HOME_KEY_CODE;
  function get_END_KEY_CODE() {
    init_properties_NavigationKeyEvents_jsNative_kt_yuov00();
    return END_KEY_CODE;
  }
  var END_KEY_CODE;
  function get_PG_UP_KEY_CODE() {
    init_properties_NavigationKeyEvents_jsNative_kt_yuov00();
    return PG_UP_KEY_CODE;
  }
  var PG_UP_KEY_CODE;
  function get_PG_DN_KEY_CODE() {
    init_properties_NavigationKeyEvents_jsNative_kt_yuov00();
    return PG_DN_KEY_CODE;
  }
  var PG_DN_KEY_CODE;
  function get_isDirectionUp(_this__u8e3s4) {
    init_properties_NavigationKeyEvents_jsNative_kt_yuov00();
    return _Key___get_keyCode__impl__ymzu5v(get_key(_this__u8e3s4)).equals(get_DIRECTION_UP_KEY_CODE());
  }
  function get_isDirectionDown(_this__u8e3s4) {
    init_properties_NavigationKeyEvents_jsNative_kt_yuov00();
    return _Key___get_keyCode__impl__ymzu5v(get_key(_this__u8e3s4)).equals(get_DIRECTION_DOWN_KEY_CODE());
  }
  function get_isDirectionRight(_this__u8e3s4) {
    init_properties_NavigationKeyEvents_jsNative_kt_yuov00();
    return _Key___get_keyCode__impl__ymzu5v(get_key(_this__u8e3s4)).equals(get_DIRECTION_RIGHT_KEY_CODE());
  }
  function get_isDirectionLeft(_this__u8e3s4) {
    init_properties_NavigationKeyEvents_jsNative_kt_yuov00();
    return _Key___get_keyCode__impl__ymzu5v(get_key(_this__u8e3s4)).equals(get_DIRECTION_LEFT_KEY_CODE());
  }
  function get_isHome(_this__u8e3s4) {
    init_properties_NavigationKeyEvents_jsNative_kt_yuov00();
    return _Key___get_keyCode__impl__ymzu5v(get_key(_this__u8e3s4)).equals(get_HOME_KEY_CODE());
  }
  function get_isMoveEnd(_this__u8e3s4) {
    init_properties_NavigationKeyEvents_jsNative_kt_yuov00();
    return _Key___get_keyCode__impl__ymzu5v(get_key(_this__u8e3s4)).equals(get_END_KEY_CODE());
  }
  function get_isPgUp(_this__u8e3s4) {
    init_properties_NavigationKeyEvents_jsNative_kt_yuov00();
    return _Key___get_keyCode__impl__ymzu5v(get_key(_this__u8e3s4)).equals(get_PG_UP_KEY_CODE());
  }
  function get_isPgDn(_this__u8e3s4) {
    init_properties_NavigationKeyEvents_jsNative_kt_yuov00();
    return _Key___get_keyCode__impl__ymzu5v(get_key(_this__u8e3s4)).equals(get_PG_DN_KEY_CODE());
  }
  var properties_initialized_NavigationKeyEvents_jsNative_kt_dq64vo;
  function init_properties_NavigationKeyEvents_jsNative_kt_yuov00() {
    if (properties_initialized_NavigationKeyEvents_jsNative_kt_dq64vo) {
    } else {
      properties_initialized_NavigationKeyEvents_jsNative_kt_dq64vo = true;
      DIRECTION_UP_KEY_CODE = toLong(SkikoKey_KEY_UP_getInstance().platformKeyCode_1);
      DIRECTION_DOWN_KEY_CODE = toLong(SkikoKey_KEY_DOWN_getInstance().platformKeyCode_1);
      DIRECTION_LEFT_KEY_CODE = toLong(SkikoKey_KEY_LEFT_getInstance().platformKeyCode_1);
      DIRECTION_RIGHT_KEY_CODE = toLong(SkikoKey_KEY_RIGHT_getInstance().platformKeyCode_1);
      HOME_KEY_CODE = toLong(SkikoKey_KEY_HOME_getInstance().platformKeyCode_1);
      END_KEY_CODE = toLong(SkikoKey_KEY_END_getInstance().platformKeyCode_1);
      PG_UP_KEY_CODE = toLong(SkikoKey_KEY_PGUP_getInstance().platformKeyCode_1);
      PG_DN_KEY_CODE = toLong(SkikoKey_KEY_PGDOWN_getInstance().platformKeyCode_1);
    }
  }
  //region block: post-declaration
  SliderDraggableState.prototype.drag$default_994lnr_k$ = drag$default;
  MinimumTouchTargetModifier.prototype.minIntrinsicWidth_72od57_k$ = minIntrinsicWidth;
  MinimumTouchTargetModifier.prototype.minIntrinsicHeight_zr6pa_k$ = minIntrinsicHeight;
  MinimumTouchTargetModifier.prototype.maxIntrinsicWidth_o2xntp_k$ = maxIntrinsicWidth;
  MinimumTouchTargetModifier.prototype.maxIntrinsicHeight_t0gmkg_k$ = maxIntrinsicHeight;
  MinimumTouchTargetModifier.prototype.foldIn_4qioq6_k$ = foldIn;
  MinimumTouchTargetModifier.prototype.foldOut_ld23lz_k$ = foldOut;
  MinimumTouchTargetModifier.prototype.any_hrontp_k$ = any;
  MinimumTouchTargetModifier.prototype.all_ctzlrs_k$ = all;
  MinimumTouchTargetModifier.prototype.then_5qw5wu_k$ = then;
  //endregion
  //region block: init
  DefaultSelectionBackgroundAlpha = 0.4;
  MinimumSelectionBackgroundAlpha = 0.2;
  DesiredContrastRatio = 4.5;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Button$composable;
  _.$_$.b = Card$composable;
  _.$_$.c = CircularProgressIndicator$composable;
  _.$_$.d = Icon$composable;
  _.$_$.e = IconButton$composable;
  _.$_$.f = get_LocalTextStyle;
  _.$_$.g = MaterialTheme$composable;
  _.$_$.h = OutlinedButton$composable;
  _.$_$.i = ProvideTextStyle$composable;
  _.$_$.j = Shapes;
  _.$_$.k = Slider$composable;
  _.$_$.l = Surface$composable;
  _.$_$.m = Text$composable;
  _.$_$.n = darkColors$default;
  _.$_$.o = lightColors$default;
  _.$_$.p = Typography_init_$Create$_0;
  _.$_$.q = ButtonDefaults_getInstance;
  _.$_$.r = MaterialTheme_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-material.js.map
