(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-runtime.js', './androidx-ui.js', './androidx-foundation.js', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui-graphics.js', './androidx-ui-unit.js', './androidx-foundation-layout.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './androidx-ui-geometry.js', './androidx-animation-core.js', './androidx-material-ripple.js', './androidx-ui-util.js', './androidx-ui-text.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-runtime.js'), require('./androidx-ui.js'), require('./androidx-foundation.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui-graphics.js'), require('./androidx-ui-unit.js'), require('./androidx-foundation-layout.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./androidx-ui-geometry.js'), require('./androidx-animation-core.js'), require('./androidx-material-ripple.js'), require('./androidx-ui-util.js'), require('./androidx-ui-text.js'), require('./skiko-kjs.js'));
  else {
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-foundation'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-foundation' was not found. Please, check whether 'androidx-foundation' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-ui-graphics' was not found. Please, check whether 'androidx-ui-graphics' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-foundation-layout' was not found. Please, check whether 'androidx-foundation-layout' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-ui-geometry' was not found. Please, check whether 'androidx-ui-geometry' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-animation-core' was not found. Please, check whether 'androidx-animation-core' is loaded prior to 'androidx-material'.");
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
    root['androidx-material'] = factory(typeof this['androidx-material'] === 'undefined' ? {} : this['androidx-material'], this['androidx-runtime'], this['androidx-ui'], this['androidx-foundation'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui-graphics'], this['androidx-ui-unit'], this['androidx-foundation-layout'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['androidx-ui-geometry'], this['androidx-animation-core'], this['androidx-material-ripple'], this['androidx-ui-util'], this['androidx-ui-text'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_androidx_compose_runtime_runtime, kotlin_androidx_compose_ui_ui, kotlin_androidx_compose_foundation_foundation, kotlin_kotlin, kotlin_androidx_compose_ui_ui_graphics, kotlin_androidx_compose_ui_ui_unit, kotlin_androidx_compose_foundation_foundation_layout, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_androidx_compose_ui_ui_geometry, kotlin_androidx_compose_animation_animation_core, kotlin_androidx_compose_material_material_ripple, kotlin_androidx_compose_ui_ui_util, kotlin_androidx_compose_ui_ui_text, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var Companion_getInstance = kotlin_androidx_compose_ui_ui.$_$.b4;
  var funMutableInteractionSource = kotlin_androidx_compose_foundation_foundation.$_$.n;
  var Unit_getInstance = kotlin_kotlin.$_$.s2;
  var Companion_getInstance_0 = kotlin_androidx_compose_runtime_runtime.$_$.f2;
  var THROW_CCE = kotlin_kotlin.$_$.ba;
  var isObject = kotlin_kotlin.$_$.o7;
  var Long = kotlin_kotlin.$_$.v9;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.h2;
  var _Color___init__impl__r6cqi2 = kotlin_androidx_compose_ui_ui_graphics.$_$.c2;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.g1;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.v1;
  var interfaceMeta = kotlin_kotlin.$_$.k7;
  var _Dp___init__impl__ms3zkb = kotlin_androidx_compose_ui_ui_unit.$_$.z1;
  var PaddingValues = kotlin_androidx_compose_foundation_foundation_layout.$_$.c;
  var Dp = kotlin_androidx_compose_ui_ui_unit.$_$.o;
  var Color__copy$default_impl_ectz3s = kotlin_androidx_compose_ui_ui_graphics.$_$.y2;
  var compositeOver = kotlin_androidx_compose_ui_ui_graphics.$_$.c1;
  var BorderStroke = kotlin_androidx_compose_foundation_foundation.$_$.w;
  var objectMeta = kotlin_kotlin.$_$.u7;
  var composableLambda = kotlin_androidx_compose_runtime_runtime.$_$.c;
  var CoroutineImpl = kotlin_kotlin.$_$.k6;
  var Interaction = kotlin_androidx_compose_foundation_foundation.$_$.m;
  var isInterface = kotlin_kotlin.$_$.n7;
  var Cancel = kotlin_androidx_compose_foundation_foundation.$_$.o;
  var Release = kotlin_androidx_compose_foundation_foundation.$_$.q;
  var Press = kotlin_androidx_compose_foundation_foundation.$_$.p;
  var Unfocus = kotlin_androidx_compose_foundation_foundation.$_$.j;
  var Focus = kotlin_androidx_compose_foundation_foundation.$_$.i;
  var Exit = kotlin_androidx_compose_foundation_foundation.$_$.l;
  var Enter = kotlin_androidx_compose_foundation_foundation.$_$.k;
  var classMeta = kotlin_kotlin.$_$.y6;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v5;
  var equals = kotlin_kotlin.$_$.a7;
  var Companion_getInstance_1 = kotlin_androidx_compose_ui_ui_geometry.$_$.j1;
  var mutableStateListOf = kotlin_androidx_compose_runtime_runtime.$_$.h1;
  var LaunchedEffect$composable = kotlin_androidx_compose_runtime_runtime.$_$.u;
  var lastOrNull = kotlin_kotlin.$_$.w4;
  var Companion_getInstance_2 = kotlin_androidx_compose_ui_ui_unit.$_$.a3;
  var get_VectorConverter = kotlin_androidx_compose_animation_animation_core.$_$.g;
  var Animatable_init_$Create$ = kotlin_androidx_compose_animation_animation_core.$_$.r;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var Color__hashCode_impl_vjyivj = kotlin_androidx_compose_ui_ui_graphics.$_$.i2;
  var Color = kotlin_androidx_compose_ui_ui_graphics.$_$.k;
  var rememberUpdatedState$composable = kotlin_androidx_compose_runtime_runtime.$_$.n1;
  var KProperty0 = kotlin_kotlin.$_$.t8;
  var THROW_ISE = kotlin_kotlin.$_$.ca;
  var getLocalDelegateReference = kotlin_kotlin.$_$.d7;
  var defaultMinSize = kotlin_androidx_compose_foundation_foundation_layout.$_$.f;
  var padding = kotlin_androidx_compose_foundation_foundation_layout.$_$.l;
  var Arrangement_getInstance = kotlin_androidx_compose_foundation_foundation_layout.$_$.c1;
  var Companion_getInstance_3 = kotlin_androidx_compose_ui_ui.$_$.a4;
  var rowMeasurePolicy$composable = kotlin_androidx_compose_foundation_foundation_layout.$_$.o;
  var get_LocalDensity = kotlin_androidx_compose_ui_ui.$_$.c2;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.q1;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.p1;
  var get_LocalLayoutDirection = kotlin_androidx_compose_ui_ui.$_$.f2;
  var get_LocalViewConfiguration = kotlin_androidx_compose_ui_ui.$_$.g2;
  var Companion_getInstance_4 = kotlin_androidx_compose_ui_ui.$_$.x3;
  var materializerOf = kotlin_androidx_compose_ui_ui.$_$.t1;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var Applier = kotlin_androidx_compose_runtime_runtime.$_$.j;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.c2;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.d2;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_androidx_compose_runtime_runtime.$_$.a2;
  var SkippableUpdater = kotlin_androidx_compose_runtime_runtime.$_$.a1;
  var RowScopeInstance_getInstance = kotlin_androidx_compose_foundation_foundation_layout.$_$.f1;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_androidx_compose_ui_ui_graphics.$_$.d2;
  var CompositionLocalProvider$composable = kotlin_androidx_compose_runtime_runtime.$_$.m;
  var SuspendFunction1 = kotlin_kotlin.$_$.m6;
  var structuralEqualityPolicy = kotlin_androidx_compose_runtime_runtime.$_$.t1;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.j1;
  var Color_0 = kotlin_androidx_compose_ui_ui_graphics.$_$.j;
  var Companion_getInstance_5 = kotlin_androidx_compose_ui_ui_graphics.$_$.g3;
  var _Color___get_value__impl__1pls5m = kotlin_androidx_compose_ui_ui_graphics.$_$.k2;
  var KMutableProperty1 = kotlin_kotlin.$_$.s8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.g7;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.s1;
  var luminance = kotlin_androidx_compose_ui_ui_graphics.$_$.d1;
  var compositionLocalOf$default = kotlin_androidx_compose_runtime_runtime.$_$.y1;
  var Start = kotlin_androidx_compose_foundation_foundation.$_$.g;
  var get_FastOutSlowInEasing = kotlin_androidx_compose_animation_animation_core.$_$.c;
  var TweenSpec_init_$Create$ = kotlin_androidx_compose_animation_animation_core.$_$.s;
  var CubicBezierEasing = kotlin_androidx_compose_animation_animation_core.$_$.b;
  var Dp__compareTo_impl_tlg3dl = kotlin_androidx_compose_ui_ui_unit.$_$.a2;
  var _Dp___get_value__impl__geb1vb = kotlin_androidx_compose_ui_ui_unit.$_$.c2;
  var rememberVectorPainter$composable = kotlin_androidx_compose_ui_ui.$_$.l;
  var Companion_getInstance_6 = kotlin_androidx_compose_ui_ui_graphics.$_$.h3;
  var semantics$default = kotlin_androidx_compose_ui_ui.$_$.k3;
  var toolingGraphicsLayer = kotlin_androidx_compose_ui_ui.$_$.m;
  var Companion_getInstance_7 = kotlin_androidx_compose_ui_ui.$_$.w3;
  var paint$default = kotlin_androidx_compose_ui_ui.$_$.e3;
  var Box$composable = kotlin_androidx_compose_foundation_foundation_layout.$_$.a;
  var Companion_getInstance_8 = kotlin_androidx_compose_ui_ui_geometry.$_$.l1;
  var _Size___get_height__impl__a04p02 = kotlin_androidx_compose_ui_ui_geometry.$_$.e1;
  var isInfinite = kotlin_kotlin.$_$.ma;
  var _Size___get_width__impl__58y75t = kotlin_androidx_compose_ui_ui_geometry.$_$.h1;
  var set_contentDescription = kotlin_androidx_compose_ui_ui.$_$.m2;
  var Companion_getInstance_9 = kotlin_androidx_compose_ui_ui.$_$.z3;
  var set_role = kotlin_androidx_compose_ui_ui.$_$.s2;
  var size = kotlin_androidx_compose_foundation_foundation_layout.$_$.r;
  var rememberRipple$composable = kotlin_androidx_compose_material_material_ripple.$_$.c;
  var clickable$default = kotlin_androidx_compose_foundation_foundation.$_$.p1;
  var rememberBoxMeasurePolicy$composable = kotlin_androidx_compose_foundation_foundation_layout.$_$.n;
  var BoxScopeInstance_getInstance = kotlin_androidx_compose_foundation_foundation_layout.$_$.d1;
  var TextSelectionColors = kotlin_androidx_compose_foundation_foundation.$_$.u;
  var get_LocalIndication = kotlin_androidx_compose_foundation_foundation.$_$.a1;
  var get_LocalRippleTheme = kotlin_androidx_compose_material_material_ripple.$_$.a;
  var get_LocalTextSelectionColors = kotlin_androidx_compose_foundation_foundation.$_$.t;
  var Companion_getInstance_10 = kotlin_androidx_compose_material_material_ripple.$_$.d;
  var RippleTheme = kotlin_androidx_compose_material_material_ripple.$_$.b;
  var Spring_getInstance = kotlin_androidx_compose_animation_animation_core.$_$.t;
  var SpringSpec = kotlin_androidx_compose_animation_animation_core.$_$.e;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.i2;
  var Companion_getInstance_11 = kotlin_androidx_compose_ui_ui_graphics.$_$.o3;
  var Stroke_init_$Create$ = kotlin_androidx_compose_ui_ui_graphics.$_$.a2;
  var progressSemantics$default = kotlin_androidx_compose_foundation_foundation.$_$.r1;
  var Canvas$composable = kotlin_androidx_compose_foundation_foundation.$_$.x;
  var Offset = kotlin_androidx_compose_ui_ui_geometry.$_$.d;
  var Size = kotlin_androidx_compose_ui_ui_geometry.$_$.j;
  var RoundedCornerShape = kotlin_androidx_compose_foundation_foundation.$_$.s;
  var hashCode = kotlin_kotlin.$_$.i7;
  var rangeTo = kotlin_kotlin.$_$.o8;
  var toString = kotlin_kotlin.$_$.x7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var LayoutDirection_Rtl_getInstance = kotlin_androidx_compose_ui_ui_unit.$_$.n1;
  var FocusRequester = kotlin_androidx_compose_ui_ui.$_$.f;
  var requiredSizeIn$default = kotlin_androidx_compose_foundation_foundation_layout.$_$.a1;
  var focusRequester = kotlin_androidx_compose_ui_ui.$_$.g;
  var focusable = kotlin_androidx_compose_foundation_foundation.$_$.g1;
  var BoxWithConstraints$composable = kotlin_androidx_compose_foundation_foundation_layout.$_$.b;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var emptyList = kotlin_kotlin.$_$.g4;
  var onKeyEvent = kotlin_androidx_compose_ui_ui.$_$.p;
  var coerceIn = kotlin_kotlin.$_$.k8;
  var progressSemantics = kotlin_androidx_compose_foundation_foundation.$_$.j1;
  var lerp = kotlin_androidx_compose_ui_ui_util.$_$.a;
  var DragScope = kotlin_androidx_compose_foundation_foundation.$_$.a;
  var mutableStateOf$default = kotlin_androidx_compose_runtime_runtime.$_$.z1;
  var MutatorMutex = kotlin_androidx_compose_foundation_foundation.$_$.c1;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var drag$default = kotlin_androidx_compose_foundation_foundation.$_$.s1;
  var DraggableState = kotlin_androidx_compose_foundation_foundation.$_$.b;
  var SideEffect$composable = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var compareTo = kotlin_kotlin.$_$.z6;
  var get_NoInspectorInfo = kotlin_androidx_compose_ui_ui.$_$.h2;
  var get_isDebugInspectorInfoEnabled = kotlin_androidx_compose_ui_ui.$_$.j2;
  var composed$composable = kotlin_androidx_compose_ui_ui.$_$.z2;
  var fillMaxSize$default = kotlin_androidx_compose_foundation_foundation_layout.$_$.u;
  var padding$default = kotlin_androidx_compose_foundation_foundation_layout.$_$.y;
  var size_0 = kotlin_androidx_compose_foundation_foundation_layout.$_$.p;
  var indication = kotlin_androidx_compose_foundation_foundation.$_$.h1;
  var hoverable$default = kotlin_androidx_compose_foundation_foundation.$_$.q1;
  var get_CircleShape = kotlin_androidx_compose_foundation_foundation.$_$.r;
  var shadow$default = kotlin_androidx_compose_ui_ui.$_$.f3;
  var background = kotlin_androidx_compose_foundation_foundation.$_$.d1;
  var Spacer$composable = kotlin_androidx_compose_foundation_foundation_layout.$_$.d;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.l2;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_androidx_compose_ui_ui_unit.$_$.w1;
  var createCompositionCoroutineScope = kotlin_androidx_compose_runtime_runtime.$_$.d1;
  var CompositionScopedCoroutineScopeCanceller = kotlin_androidx_compose_runtime_runtime.$_$.o;
  var Orientation_Horizontal_getInstance = kotlin_androidx_compose_foundation_foundation.$_$.k1;
  var draggable$default = kotlin_androidx_compose_foundation_foundation.$_$.n1;
  var get_type = kotlin_androidx_compose_ui_ui.$_$.q;
  var Companion_getInstance_12 = kotlin_androidx_compose_ui_ui.$_$.q3;
  var coerceIn_0 = kotlin_kotlin.$_$.l8;
  var coerceIn_1 = kotlin_kotlin.$_$.n8;
  var disabled = kotlin_androidx_compose_ui_ui.$_$.n2;
  var setProgress$default = kotlin_androidx_compose_ui_ui.$_$.l3;
  var Animatable$default = kotlin_androidx_compose_animation_animation_core.$_$.n;
  var PressGestureScope = kotlin_androidx_compose_foundation_foundation.$_$.d;
  var Offset_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.e;
  var _Offset___get_x__impl__xvi35n = kotlin_androidx_compose_ui_ui_geometry.$_$.b1;
  var GestureCancellationException = kotlin_androidx_compose_foundation_foundation.$_$.c;
  var MutatePriority_UserInput_getInstance = kotlin_androidx_compose_foundation_foundation.$_$.m1;
  var PointerInputScope = kotlin_androidx_compose_ui_ui.$_$.v;
  var detectTapGestures$default = kotlin_androidx_compose_foundation_foundation.$_$.t1;
  var pointerInput = kotlin_androidx_compose_ui_ui.$_$.f1;
  var _Offset___get_y__impl__8bzhra = kotlin_androidx_compose_ui_ui_geometry.$_$.c1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w3;
  var lerp_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.o;
  var Companion_getInstance_13 = kotlin_androidx_compose_ui_ui_graphics.$_$.m3;
  var Cancel_0 = kotlin_androidx_compose_foundation_foundation.$_$.f;
  var Stop = kotlin_androidx_compose_foundation_foundation.$_$.h;
  var widthIn$default = kotlin_androidx_compose_foundation_foundation_layout.$_$.b1;
  var heightIn$default = kotlin_androidx_compose_foundation_foundation_layout.$_$.w;
  var SuspendFunction2 = kotlin_kotlin.$_$.n6;
  var get_RectangleShape = kotlin_androidx_compose_ui_ui_graphics.$_$.v;
  var border = kotlin_androidx_compose_foundation_foundation.$_$.e1;
  var clip = kotlin_androidx_compose_ui_ui.$_$.c;
  var semantics = kotlin_androidx_compose_ui_ui.$_$.t2;
  var pointerInput_0 = kotlin_androidx_compose_ui_ui.$_$.d1;
  var TextUnit = kotlin_androidx_compose_ui_ui_unit.$_$.t;
  var FontStyle = kotlin_androidx_compose_ui_ui_text.$_$.a;
  var TextAlign = kotlin_androidx_compose_ui_ui_text.$_$.f;
  var TextOverflow = kotlin_androidx_compose_ui_ui_text.$_$.g;
  var _TextUnit___get_packedValue__impl__it60w4 = kotlin_androidx_compose_ui_ui_unit.$_$.s2;
  var _TextOverflow___get_value__impl__vugm5i = kotlin_androidx_compose_ui_ui_text.$_$.q;
  var Companion_getInstance_14 = kotlin_androidx_compose_ui_ui_unit.$_$.g3;
  var Companion_getInstance_15 = kotlin_androidx_compose_ui_ui_text.$_$.u;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.o2;
  var TextStyle_init_$Create$ = kotlin_androidx_compose_ui_ui_text.$_$.o;
  var BasicText$composable = kotlin_androidx_compose_foundation_foundation.$_$.v;
  var Companion_getInstance_16 = kotlin_androidx_compose_ui_ui_text.$_$.w;
  var compositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.c1;
  var roundToInt = kotlin_kotlin.$_$.d8;
  var _DpSize___get_width__impl__o3d5gt = kotlin_androidx_compose_ui_ui_unit.$_$.h2;
  var _DpSize___get_height__impl__5xueo2 = kotlin_androidx_compose_ui_ui_unit.$_$.g2;
  var DpSize__hashCode_impl_jvpgaj = kotlin_androidx_compose_ui_ui_unit.$_$.f2;
  var foldIn = kotlin_androidx_compose_ui_ui.$_$.x2;
  var all = kotlin_androidx_compose_ui_ui.$_$.w2;
  var then = kotlin_androidx_compose_ui_ui.$_$.y2;
  var LayoutModifier = kotlin_androidx_compose_ui_ui.$_$.m1;
  var Companion_getInstance_17 = kotlin_androidx_compose_ui_ui_text.$_$.r;
  var Companion_getInstance_18 = kotlin_androidx_compose_ui_ui_text.$_$.s;
  var get_sp = kotlin_androidx_compose_ui_ui_unit.$_$.j1;
  var get_sp_0 = kotlin_androidx_compose_ui_ui_unit.$_$.i1;
  var get_LocalScrollbarStyle = kotlin_androidx_compose_foundation_foundation.$_$.b1;
  var defaultScrollbarStyle = kotlin_androidx_compose_foundation_foundation.$_$.f1;
  var get_key = kotlin_androidx_compose_ui_ui.$_$.o;
  var _Key___get_keyCode__impl__ymzu5v = kotlin_androidx_compose_ui_ui.$_$.o3;
  var SkikoKey_KEY_UP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l6;
  var toLong = kotlin_kotlin.$_$.v7;
  var SkikoKey_KEY_DOWN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p3;
  var SkikoKey_KEY_LEFT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u4;
  var SkikoKey_KEY_RIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b6;
  var SkikoKey_KEY_HOME_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k4;
  var SkikoKey_KEY_END_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r3;
  var SkikoKey_KEY_PGUP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t5;
  var SkikoKey_KEY_PGDOWN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s5;
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
    $composer_0.y1a(-1877657811);
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
      if (false ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.material.OutlinedButton$composable.<anonymous>' call
        tmp$ret$0 = funMutableInteractionSource();
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
      interactionSource_0 = tmp$ret$4;
    }
    if (!(($default & 16) === 0))
      elevation_0 = null;
    if (!(($default & 32) === 0))
      shape_0 = MaterialTheme_getInstance().j92($composer_0, 6).f92_1;
    if (!(($default & 64) === 0))
      border_0 = ButtonDefaults_getInstance().w92($composer_0, 6);
    if (!(($default & 128) === 0)) {
      var tmp_1 = ButtonDefaults_getInstance();
      var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      colors_0 = tmp_1.x92(tmp_2, tmp_3, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 3072, 7);
    }
    if (!(($default & 256) === 0))
      contentPadding_0 = ButtonDefaults_getInstance().m92_1;
    if (isTraceInProgress()) {
      traceEventStart(-1877657811, $changed, -1, 'androidx.compose.material.OutlinedButton$composable (Button.kt:164)');
    }
    Button$composable(onClick, modifier_0, enabled_0, interactionSource_0, elevation_0, shape_0, border_0, colors_0, contentPadding_0, content, $composer_0, 14 & $changed | 112 & $changed | 896 & $changed | 7168 & $changed | 57344 & $changed | 458752 & $changed | 3670016 & $changed | 29360128 & $changed | 234881024 & $changed | 1879048192 & $changed, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
  }
  function ButtonColors() {
  }
  ButtonColors.$metadata$ = interfaceMeta('ButtonColors');
  function ButtonDefaults() {
    ButtonDefaults_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
    tmp.k92_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(8);
    tmp_0.l92_1 = tmp$ret$1;
    this.m92_1 = PaddingValues(this.k92_1, this.l92_1, this.k92_1, this.l92_1);
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$2 = _Dp___init__impl__ms3zkb(64);
    tmp_1.n92_1 = tmp$ret$2;
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$3 = _Dp___init__impl__ms3zkb(36);
    tmp_2.o92_1 = tmp$ret$3;
    var tmp_3 = this;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$4 = _Dp___init__impl__ms3zkb(18);
    tmp_3.p92_1 = tmp$ret$4;
    var tmp_4 = this;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$5 = _Dp___init__impl__ms3zkb(8);
    tmp_4.q92_1 = tmp$ret$5;
    this.r92_1 = 0.12;
    var tmp_5 = this;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$6 = _Dp___init__impl__ms3zkb(1);
    tmp_5.s92_1 = tmp$ret$6;
    var tmp_6 = this;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$7 = _Dp___init__impl__ms3zkb(8);
    tmp_6.t92_1 = tmp$ret$7;
    this.u92_1 = PaddingValues(this.t92_1, this.m92_1.h7e(), this.t92_1, this.m92_1.j7e());
    this.v92_1 = 0;
  }
  ButtonDefaults.prototype.a93 = function () {
    return this.n92_1;
  };
  ButtonDefaults.prototype.b93 = function () {
    return this.o92_1;
  };
  ButtonDefaults.prototype.c93 = function (defaultElevation, pressedElevation, disabledElevation, hoveredElevation, focusedElevation, $composer, $changed, $default) {
    var defaultElevation_0 = {_v: new Dp(defaultElevation)};
    var pressedElevation_0 = {_v: new Dp(pressedElevation)};
    var disabledElevation_0 = {_v: new Dp(disabledElevation)};
    var hoveredElevation_0 = {_v: new Dp(hoveredElevation)};
    var focusedElevation_0 = {_v: new Dp(focusedElevation)};
    var $composer_0 = $composer;
    $composer_0.y1a(-292886193);
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
    $composer_1.y1a(-1603429786);
    sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var indexedObject = tmp0_remember$composable;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var key = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_1.z1a(key));
    }
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = invalid;
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.material.ButtonDefaults.elevation$composable.<anonymous>' call
      tmp$ret$5 = new DefaultButtonElevation(defaultElevation_0._v.f2l_1, pressedElevation_0._v.f2l_1, disabledElevation_0._v.f2l_1, hoveredElevation_0._v.f2l_1, focusedElevation_0._v.f2l_1);
      var value = tmp$ret$5;
      tmp1_cache.b1b(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$6 = tmp;
    tmp$ret$7 = tmp$ret$6;
    var tmp_0 = tmp$ret$7;
    tmp$ret$8 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$8;
    $composer_1.d1b();
    tmp$ret$9 = tmp0;
    var tmp0_0 = tmp$ret$9;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0_0;
  };
  ButtonDefaults.prototype.d93 = function (backgroundColor, contentColor, disabledBackgroundColor, disabledContentColor, $composer, $changed, $default) {
    var backgroundColor_0 = backgroundColor;
    var contentColor_0 = contentColor;
    var disabledBackgroundColor_0 = disabledBackgroundColor;
    var disabledContentColor_0 = disabledContentColor;
    var $composer_0 = $composer;
    $composer_0.y1a(688397153);
    sourceInformation($composer_0, 'C(buttonColors$composable)P(0:c#ui.graphics.Color,1:c#ui.graphics.Color,2:c#ui.graphics.Color,3:c#ui.graphics.Color)403@16701L6,404@16747L32,405@16836L6,406@16914L6,407@16983L6,408@17039L8:Button.kt#jmzs0o');
    if (!(($default & 1) === 0))
      backgroundColor_0 = MaterialTheme_getInstance().e93($composer_0, 6).s93();
    if (!(($default & 2) === 0))
      contentColor_0 = contentColorFor$composable(backgroundColor_0, $composer_0, 14 & $changed);
    if (!(($default & 4) === 0)) {
      var tmp = MaterialTheme_getInstance().e93($composer_0, 6).t93();
      disabledBackgroundColor_0 = compositeOver(Color__copy$default_impl_ectz3s(tmp, 0.12, 0.0, 0.0, 0.0, 14, null), MaterialTheme_getInstance().e93($composer_0, 6).u93());
    }
    if (!(($default & 8) === 0)) {
      var tmp_0 = MaterialTheme_getInstance().e93($composer_0, 6).t93();
      var tmp_1 = ContentAlpha_getInstance().w93($composer_0, 6);
      disabledContentColor_0 = Color__copy$default_impl_ectz3s(tmp_0, tmp_1, 0.0, 0.0, 0.0, 14, null);
    }
    if (isTraceInProgress()) {
      traceEventStart(688397153, $changed, -1, 'androidx.compose.material.ButtonDefaults.buttonColors$composable (Button.kt:402)');
    }
    var tmp0 = new DefaultButtonColors(backgroundColor_0, contentColor_0, disabledBackgroundColor_0, disabledContentColor_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0;
  };
  ButtonDefaults.prototype.x92 = function (backgroundColor, contentColor, disabledContentColor, $composer, $changed, $default) {
    var backgroundColor_0 = backgroundColor;
    var contentColor_0 = contentColor;
    var disabledContentColor_0 = disabledContentColor;
    var $composer_0 = $composer;
    $composer_0.y1a(-1116984945);
    sourceInformation($composer_0, 'C(outlinedButtonColors$composable)P(0:c#ui.graphics.Color,1:c#ui.graphics.Color,2:c#ui.graphics.Color)426@17786L6,427@17846L6,428@17914L6,429@17970L8:Button.kt#jmzs0o');
    if (!(($default & 1) === 0))
      backgroundColor_0 = MaterialTheme_getInstance().e93($composer_0, 6).u93();
    if (!(($default & 2) === 0))
      contentColor_0 = MaterialTheme_getInstance().e93($composer_0, 6).s93();
    if (!(($default & 4) === 0)) {
      var tmp = MaterialTheme_getInstance().e93($composer_0, 6).t93();
      var tmp_0 = ContentAlpha_getInstance().w93($composer_0, 6);
      disabledContentColor_0 = Color__copy$default_impl_ectz3s(tmp, tmp_0, 0.0, 0.0, 0.0, 14, null);
    }
    if (isTraceInProgress()) {
      traceEventStart(-1116984945, $changed, -1, 'androidx.compose.material.ButtonDefaults.outlinedButtonColors$composable (Button.kt:425)');
    }
    var tmp0 = new DefaultButtonColors(backgroundColor_0, contentColor_0, backgroundColor_0, disabledContentColor_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0;
  };
  ButtonDefaults.prototype.w92 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(744770889);
    sourceInformation($composer_0, 'C($get-outlinedBorder$$composable)474@19565L6:Button.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(744770889, $changed, -1, 'androidx.compose.material.ButtonDefaults.$get-outlinedBorder$$composable (Button.kt:473)');
    }
    var tmp = MaterialTheme_getInstance().e93($composer_0, 6).t93();
    var tmp0 = BorderStroke(this.s92_1, Color__copy$default_impl_ectz3s(tmp, 0.12, 0.0, 0.0, 0.0, 14, null));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
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
    $composer_0 = $composer_0.z1n(-1097700753);
    sourceInformation($composer_0, 'C(Button$composable)P(8,7,5,6,4,9!2,3)94@4533L39,95@4623L11,96@4669L6,98@4759L14,102@4922L21,108@5086L24,111@5228L37,103@4948L1086:Button.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(onClick) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.f1b(enabled_0._v) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.z1a(interactionSource_0._v) : false) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.z1a(elevation_0._v) : false) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ((($default & 32) === 0 ? $composer_0.z1a(shape_0._v) : false) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.z1a(border_0._v) ? 1048576 : 524288);
    if (($changed & 29360128) === 0)
      $dirty = $dirty | ((($default & 128) === 0 ? $composer_0.z1a(colors_0._v) : false) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.z1a(contentPadding_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.z1a(content) ? 536870912 : 268435456);
    if (!(($dirty & 1533916891) === 306783378) ? true : !$composer_0.l1m()) {
      $composer_0.y1m();
      if (($changed & 1) === 0 ? true : $composer_0.c1n()) {
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
          if (false ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
            var tmp$ret$0;
            // Inline function 'androidx.compose.material.Button$composable.<anonymous>' call
            tmp$ret$0 = funMutableInteractionSource();
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
          interactionSource_0._v = tmp$ret$4;
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          var tmp_1 = ButtonDefaults_getInstance();
          var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_4 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_5 = _Dp___init__impl__ms3zkb(0.0);
          elevation_0._v = tmp_1.c93(tmp_2, tmp_3, tmp_4, tmp_5, _Dp___init__impl__ms3zkb(0.0), $composer_0, 196608, 31);
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          shape_0._v = MaterialTheme_getInstance().j92($composer_0, 6).f92_1;
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
          colors_0._v = tmp_6.d93(tmp_7, tmp_8, tmp_9, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 24576, 15);
          $dirty = $dirty & -29360129;
        }
        if (!(($default & 256) === 0)) {
          contentPadding_0._v = ButtonDefaults_getInstance().m92_1;
        }
      } else {
        $composer_0.l1h();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
        if (!(($default & 128) === 0))
          $dirty = $dirty & -29360129;
      }
      $composer_0.z1m();
      if (isTraceInProgress()) {
        traceEventStart(-1097700753, $dirty, -1, 'androidx.compose.material.Button$composable (Button.kt:90)');
      }
      var contentColor$delegate = colors_0._v.z92(enabled_0._v, $composer_0, 14 & $dirty >> 6 | 112 & $dirty >> 18);
      var tmp_10 = modifier_0._v;
      var tmp_11 = enabled_0._v;
      var tmp_12 = shape_0._v;
      var tmp_13 = colors_0._v.y92(enabled_0._v, $composer_0, 14 & $dirty >> 6 | 112 & $dirty >> 18).i2().y3a_1;
      var tmp_14 = Button$composable$lambda(contentColor$delegate);
      var tmp_15 = Color__copy$default_impl_ectz3s(tmp_14, 1.0, 0.0, 0.0, 0.0, 14, null);
      var tmp_16 = border_0._v;
      var tmp0_safe_receiver = elevation_0._v;
      var tmp0_group = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x93(enabled_0._v, interactionSource_0._v, $composer_0, 14 & $dirty >> 6 | 112 & $dirty >> 6 | 896 & $dirty >> 6);
      var tmp1_safe_receiver = tmp0_group;
      var tmp_17;
      if (tmp1_safe_receiver == null) {
        tmp_17 = null;
      } else {
        var tmp_18 = tmp1_safe_receiver.i2();
        tmp_17 = tmp_18 == null ? null : tmp_18.f2l_1;
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
      $composer_2.y1a(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = $composer_2.z1a(dispatchReceiver);
      var tmp$ret$8;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_24;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$6;
        // Inline function 'androidx.compose.material.Button$composable.<anonymous>.<anonymous>' call
        tmp$ret$6 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        var value_0 = tmp$ret$6;
        tmp1_cache_0.b1b(value_0);
        tmp_24 = value_0;
      } else {
        tmp_24 = tmp0_let_0;
      }
      tmp$ret$7 = tmp_24;
      tmp$ret$8 = tmp$ret$7;
      var tmp_25 = tmp$ret$8;
      tmp$ret$9 = (tmp_25 == null ? true : isObject(tmp_25)) ? tmp_25 : THROW_CCE();
      var tmp0_0 = tmp$ret$9;
      $composer_2.d1b();
      tmp$ret$10 = tmp0_0;
      tmp$ret$11 = tmp$ret$10;
      tmp$ret$12 = tmp$ret$11;
      Surface$composable_0(onClick, tmp_10, tmp_11, tmp_12, tmp_13, tmp_15, tmp_16, tmp_21, tmp_22, tmp$ret$12, $composer_0, 805306368 | 14 & $dirty | 112 & $dirty | 896 & $dirty | 7168 & $dirty >> 6 | 3670016 & $dirty | 234881024 & $dirty << 15, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp1_safe_receiver_0 = $composer_0.a1o();
    if (tmp1_safe_receiver_0 === null)
      null;
    else {
      tmp1_safe_receiver_0.g1p(Button$composable$lambda$ref(onClick, modifier_0, enabled_0, interactionSource_0, elevation_0, shape_0, border_0, colors_0, contentPadding_0, content, $changed, $default));
    }
  }
  function ButtonElevation() {
  }
  ButtonElevation.$metadata$ = interfaceMeta('ButtonElevation');
  function DefaultButtonElevation$elevation$composable$slambda$slambda($interactions, resultContinuation) {
    this.g94_1 = $interactions;
    CoroutineImpl.call(this, resultContinuation);
  }
  DefaultButtonElevation$elevation$composable$slambda$slambda.prototype.c7t = function (interaction, $cont) {
    var tmp = this.d7t(interaction, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  DefaultButtonElevation$elevation$composable$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.c7t((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $cont);
  };
  DefaultButtonElevation$elevation$composable$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          var tmp0_subject = this.h94_1;
          if (tmp0_subject instanceof Enter) {
            this.g94_1.t1p(this.h94_1);
          } else {
            if (tmp0_subject instanceof Exit) {
              this.g94_1.v20(this.h94_1.r8k_1);
            } else {
              if (tmp0_subject instanceof Focus) {
                this.g94_1.t1p(this.h94_1);
              } else {
                if (tmp0_subject instanceof Unfocus) {
                  this.g94_1.v20(this.h94_1.p8j_1);
                } else {
                  if (tmp0_subject instanceof Press) {
                    this.g94_1.t1p(this.h94_1);
                  } else {
                    if (tmp0_subject instanceof Release) {
                      this.g94_1.v20(this.h94_1.u8l_1);
                    } else {
                      if (tmp0_subject instanceof Cancel) {
                        this.g94_1.v20(this.h94_1.x8l_1);
                      }
                    }
                  }
                }
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
  DefaultButtonElevation$elevation$composable$slambda$slambda.prototype.d7t = function (interaction, completion) {
    var i = new DefaultButtonElevation$elevation$composable$slambda$slambda(this.g94_1, completion);
    i.h94_1 = interaction;
    return i;
  };
  DefaultButtonElevation$elevation$composable$slambda$slambda.$metadata$ = classMeta('DefaultButtonElevation$elevation$composable$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function DefaultButtonElevation$elevation$composable$slambda$slambda_0($interactions, resultContinuation) {
    var i = new DefaultButtonElevation$elevation$composable$slambda$slambda($interactions, resultContinuation);
    var l = function (interaction, $cont) {
      return i.c7t(interaction, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.i94_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.hz = function (value, $cont) {
    return this.i94_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function DefaultButtonElevation$elevation$composable$slambda($interactionSource, $interactions, resultContinuation) {
    this.r94_1 = $interactionSource;
    this.s94_1 = $interactions;
    CoroutineImpl.call(this, resultContinuation);
  }
  DefaultButtonElevation$elevation$composable$slambda.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  DefaultButtonElevation$elevation$composable$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  DefaultButtonElevation$elevation$composable$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            var tmp_0 = this.r94_1.n7s();
            var tmp_1 = DefaultButtonElevation$elevation$composable$slambda$slambda_0(this.s94_1, null);
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
  DefaultButtonElevation$elevation$composable$slambda.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new DefaultButtonElevation$elevation$composable$slambda(this.r94_1, this.s94_1, completion);
    i.t94_1 = $this$LaunchedEffect;
    return i;
  };
  DefaultButtonElevation$elevation$composable$slambda.$metadata$ = classMeta('DefaultButtonElevation$elevation$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function DefaultButtonElevation$elevation$composable$slambda_0($interactionSource, $interactions, resultContinuation) {
    var i = new DefaultButtonElevation$elevation$composable$slambda($interactionSource, $interactions, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultButtonElevation$elevation$composable$slambda_1($animatable, $target, resultContinuation) {
    this.c95_1 = $animatable;
    this.d95_1 = $target;
    CoroutineImpl.call(this, resultContinuation);
  }
  DefaultButtonElevation$elevation$composable$slambda_1.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  DefaultButtonElevation$elevation$composable$slambda_1.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  DefaultButtonElevation$elevation$composable$slambda_1.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = this.c95_1.r6z(new Dp(this.d95_1), this);
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
  DefaultButtonElevation$elevation$composable$slambda_1.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new DefaultButtonElevation$elevation$composable$slambda_1(this.c95_1, this.d95_1, completion);
    i.e95_1 = $this$LaunchedEffect;
    return i;
  };
  DefaultButtonElevation$elevation$composable$slambda_1.$metadata$ = classMeta('DefaultButtonElevation$elevation$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function DefaultButtonElevation$elevation$composable$slambda_2($animatable, $target, resultContinuation) {
    var i = new DefaultButtonElevation$elevation$composable$slambda_1($animatable, $target, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultButtonElevation$elevation$composable$slambda_3($animatable, this$0, $target, $interaction, resultContinuation) {
    this.n95_1 = $animatable;
    this.o95_1 = this$0;
    this.p95_1 = $target;
    this.q95_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  DefaultButtonElevation$elevation$composable$slambda_3.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  DefaultButtonElevation$elevation$composable$slambda_3.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  DefaultButtonElevation$elevation$composable$slambda_3.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            var tmp_0 = this;
            var tmp0_subject = this.n95_1.x6y().f2l_1;
            tmp_0.s95_1 = equals(tmp0_subject, this.o95_1.u95_1) ? new Press(Companion_getInstance_1().o2i_1) : equals(tmp0_subject, this.o95_1.w95_1) ? new Enter() : equals(tmp0_subject, this.o95_1.x95_1) ? new Focus() : null;
            this.zf_1 = 1;
            suspendResult = animateElevation(this.n95_1, this.p95_1, this.s95_1, this.q95_1, this);
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
  DefaultButtonElevation$elevation$composable$slambda_3.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new DefaultButtonElevation$elevation$composable$slambda_3(this.n95_1, this.o95_1, this.p95_1, this.q95_1, completion);
    i.r95_1 = $this$LaunchedEffect;
    return i;
  };
  DefaultButtonElevation$elevation$composable$slambda_3.$metadata$ = classMeta('DefaultButtonElevation$elevation$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function DefaultButtonElevation$elevation$composable$slambda_4($animatable, this$0, $target, $interaction, resultContinuation) {
    var i = new DefaultButtonElevation$elevation$composable$slambda_3($animatable, this$0, $target, $interaction, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultButtonElevation(defaultElevation, pressedElevation, disabledElevation, hoveredElevation, focusedElevation) {
    this.t95_1 = defaultElevation;
    this.u95_1 = pressedElevation;
    this.v95_1 = disabledElevation;
    this.w95_1 = hoveredElevation;
    this.x95_1 = focusedElevation;
  }
  DefaultButtonElevation.prototype.x93 = function (enabled, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(1494019001);
    sourceInformation($composer_0, 'C(elevation$composable)503@20460L46,504@20549L1077,504@20515L1111,545@22075L51:Button.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(1494019001, $changed, -1, 'androidx.compose.material.DefaultButtonElevation.elevation$composable (Button.kt:502)');
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
    if (false ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.material.DefaultButtonElevation.elevation$composable.<anonymous>' call
      tmp$ret$0 = mutableStateListOf();
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
    var interactions = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp1_remember$composable = $composer_0;
    var tmp2_remember$composable = 14 & $changed >> 3;
    var $composer_2 = tmp1_remember$composable;
    $composer_2.y1a(-1124426577);
    sourceInformation($composer_2, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache_0 = $composer_2;
    var tmp2_cache = !!($composer_2.z1a(interactionSource) | $composer_2.z1a(interactions));
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = tmp1_cache_0.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_0().c1b_1) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.material.DefaultButtonElevation.elevation$composable.<anonymous>' call
      tmp$ret$5 = DefaultButtonElevation$elevation$composable$slambda_0(interactionSource, interactions, null);
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
    LaunchedEffect$composable(interactionSource, tmp$ret$9, $composer_0, 14 & $changed >> 3);
    var interaction = lastOrNull(interactions);
    var tmp_3;
    if (!enabled) {
      tmp_3 = this.v95_1;
    } else {
      var tmp0_subject = interaction;
      var tmp_4;
      if (tmp0_subject instanceof Press) {
        tmp_4 = this.u95_1;
      } else {
        if (tmp0_subject instanceof Enter) {
          tmp_4 = this.w95_1;
        } else {
          if (tmp0_subject instanceof Focus) {
            tmp_4 = this.x95_1;
          } else {
            tmp_4 = this.t95_1;
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
    var tmp_5;
    if (false ? true : tmp0_let_1 === Companion_getInstance_0().c1b_1) {
      var tmp$ret$10;
      // Inline function 'androidx.compose.material.DefaultButtonElevation.elevation$composable.<anonymous>' call
      var tmp_6 = new Dp(target);
      var tmp_7 = get_VectorConverter(Companion_getInstance_2());
      tmp$ret$10 = Animatable_init_$Create$(tmp_6, tmp_7, null, null, 12, null);
      var value_1 = tmp$ret$10;
      tmp1_cache_1.b1b(value_1);
      tmp_5 = value_1;
    } else {
      tmp_5 = tmp0_let_1;
    }
    tmp$ret$11 = tmp_5;
    tmp$ret$12 = tmp$ret$11;
    var tmp_8 = tmp$ret$12;
    tmp$ret$13 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
    var tmp0_1 = tmp$ret$13;
    $composer_3.d1b();
    tmp$ret$14 = tmp0_1;
    var animatable = tmp$ret$14;
    if (!enabled) {
      $composer_0.y1a(-1895906796);
      sourceInformation($composer_0, '549@22225L80');
      var tmp_9 = new Dp(target);
      LaunchedEffect$composable(tmp_9, DefaultButtonElevation$elevation$composable$slambda_2(animatable, target, null), $composer_0, 0);
      $composer_0.d1b();
    } else {
      $composer_0.y1a(-1895906625);
      sourceInformation($composer_0, '553@22335L546');
      var tmp_10 = new Dp(target);
      LaunchedEffect$composable(tmp_10, DefaultButtonElevation$elevation$composable$slambda_4(animatable, this, target, interaction, null), $composer_0, 0);
      $composer_0.d1b();
    }
    var tmp0_2 = animatable.s6z();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0_2;
  };
  DefaultButtonElevation.$metadata$ = classMeta('DefaultButtonElevation', [ButtonElevation]);
  function DefaultButtonColors(backgroundColor, contentColor, disabledBackgroundColor, disabledContentColor) {
    this.y95_1 = backgroundColor;
    this.z95_1 = contentColor;
    this.a96_1 = disabledBackgroundColor;
    this.b96_1 = disabledContentColor;
  }
  DefaultButtonColors.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof DefaultButtonColors)
      other;
    else
      THROW_CCE();
    if (!equals(this.y95_1, other.y95_1))
      return false;
    if (!equals(this.z95_1, other.z95_1))
      return false;
    if (!equals(this.a96_1, other.a96_1))
      return false;
    if (!equals(this.b96_1, other.b96_1))
      return false;
    return true;
  };
  DefaultButtonColors.prototype.hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.y95_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.z95_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.a96_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.b96_1) | 0;
    return result;
  };
  DefaultButtonColors.prototype.y92 = function (enabled, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(717515014);
    sourceInformation($composer_0, 'C(backgroundColor$composable)584@23320L79:Button.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(717515014, $changed, -1, 'androidx.compose.material.DefaultButtonColors.backgroundColor$composable (Button.kt:583)');
    }
    var tmp0 = rememberUpdatedState$composable(new Color(enabled ? this.y95_1 : this.a96_1), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0;
  };
  DefaultButtonColors.prototype.z92 = function (enabled, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(1065735709);
    sourceInformation($composer_0, 'C(contentColor$composable)589@23502L73:Button.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(1065735709, $changed, -1, 'androidx.compose.material.DefaultButtonColors.contentColor$composable (Button.kt:588)');
    }
    var tmp0 = rememberUpdatedState$composable(new Color(enabled ? this.z95_1 : this.b96_1), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0;
  };
  DefaultButtonColors.$metadata$ = classMeta('DefaultButtonColors', [ButtonColors]);
  function Button$composable$lambda($contentColor$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('contentColor', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $contentColor$delegate.i2().y3a_1;
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
      if (!(($changed & 11) === 2) ? true : !$composer_0.l1m()) {
        if (isTraceInProgress()) {
          traceEventStart(-630330208, $changed, -1, 'androidx.compose.material.Button$composable.<anonymous>.<anonymous>.<anonymous> (Button.kt:117)');
        }
        // Inline function 'androidx.compose.foundation.layout.Row$composable' call
        var tmp0_Row$composable = padding(defaultMinSize(Companion_getInstance(), ButtonDefaults_getInstance().n92_1, ButtonDefaults_getInstance().o92_1), $contentPadding._v);
        var tmp1_Row$composable = Arrangement_getInstance().j7c_1;
        var tmp2_Row$composable = Companion_getInstance_3().c4e_1;
        var tmp3_Row$composable = $composer_0;
        var tmp4_Row$composable = 432 | 7168 & $$dirty >> 18;
        var modifier = tmp0_Row$composable;
        var horizontalArrangement = tmp1_Row$composable;
        var verticalAlignment = tmp2_Row$composable;
        var $composer_1 = tmp3_Row$composable;
        $composer_1.y1a(-636825856);
        sourceInformation($composer_1, 'C(Row$composable)P(2,1,3)78@3913L58,79@3976L130:Row.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance();
        if (!(0 === 0))
          horizontalArrangement = Arrangement_getInstance().f7c_1;
        if (!(0 === 0))
          verticalAlignment = Companion_getInstance_3().b4e_1;
        var measurePolicy = rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer_1, 14 & tmp4_Row$composable >> 3 | 112 & tmp4_Row$composable >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable = modifier;
        var tmp1_Layout$composable = $composer_1;
        var tmp2_Layout$composable = 112 & tmp4_Row$composable << 3;
        var modifier_0 = tmp0_Layout$composable;
        var $composer_2 = tmp1_Layout$composable;
        $composer_2.y1a(1725976829);
        sourceInformation($composer_2, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
        var tmp1_$get_current$$composable_gn3xww = $composer_2;
        var $composer_3 = tmp1_$get_current$$composable_gn3xww;
        sourceInformationMarkerStart($composer_3, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_3.w1n(tmp0_$get_current$$composable_h5ksy7);
        sourceInformationMarkerEnd($composer_3);
        tmp$ret$0 = tmp0;
        var density = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
        var tmp3_$get_current$$composable_fm67ua = $composer_2;
        var $composer_4 = tmp3_$get_current$$composable_fm67ua;
        sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_0 = $composer_4.w1n(tmp2_$get_current$$composable_g4n2vl);
        sourceInformationMarkerEnd($composer_4);
        tmp$ret$1 = tmp0_0;
        var layoutDirection = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
        var tmp5_$get_current$$composable_el8hro = $composer_2;
        var $composer_5 = tmp5_$get_current$$composable_el8hro;
        sourceInformationMarkerStart($composer_5, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_1 = $composer_5.w1n(tmp4_$get_current$$composable_f3pcsz);
        sourceInformationMarkerEnd($composer_5);
        tmp$ret$2 = tmp0_1;
        var viewConfiguration = tmp$ret$2;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp6_ReusableComposeNode$composable = Companion_getInstance_4().a5e_1;
        var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp8_ReusableComposeNode$composable = $composer_2;
        var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
        var $composer_6 = tmp8_ReusableComposeNode$composable;
        var tmp_0 = $composer_6.u1m();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_6.g1n();
        if ($composer_6.e1n()) {
          $composer_6.h1n(tmp6_ReusableComposeNode$composable);
        } else {
          $composer_6.j1n();
        }
        $composer_6.l1n();
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_6);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_4().e5e_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_4().d5e_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_4().f5e_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_4().g5e_1);
        $composer_6.m1n();
        tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
        $composer_6.y1a(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
        var tmp3__anonymous__ufb84q = $composer_6;
        var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
        var $composer_7 = tmp3__anonymous__ufb84q;
        $composer_7.y1a(-678309503);
        sourceInformation($composer_7, 'C80@4021L9:Row.kt#2w3rfo');
        if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_7.l1m()) {
          $content(RowScopeInstance_getInstance(), $composer_7, 6 | 112 & tmp4_Row$composable >> 6);
        } else {
          $composer_7.l1h();
        }
        $composer_7.d1b();
        $composer_6.d1b();
        $composer_6.k1n();
        $composer_2.d1b();
        $composer_1.d1b();
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        $composer_0.l1h();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.j1m(p0, p1);
    };
  }
  function Button$composable$lambda$lambda($contentPadding, $$dirty, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C116@5487L10,115@5431L587:Button.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.l1m()) {
        if (isTraceInProgress()) {
          traceEventStart(-1699085201, $changed, -1, 'androidx.compose.material.Button$composable.<anonymous>.<anonymous> (Button.kt:114)');
        }
        var tmp_0 = MaterialTheme_getInstance().p96($composer_0, 6).m96_1;
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
        $composer_1.y1a(-838505973);
        sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.z1a(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.a1b();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.material.Button$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref(dispatchReceiver);
          var value = tmp$ret$0;
          tmp1_cache.b1b(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.d1b();
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
        $composer_0.l1h();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.j1m(p0, p1);
    };
  }
  function Button$composable$lambda_1($contentColor$delegate, $contentPadding, $$dirty, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C114@5345L683:Button.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.l1m()) {
        if (isTraceInProgress()) {
          traceEventStart(7524271, $changed, -1, 'androidx.compose.material.Button$composable.<anonymous> (Button.kt:113)');
        }
        var tmp_0 = [get_LocalContentAlpha().g1s(_Color___get_alpha__impl__wcfyv1(Button$composable$lambda($contentColor$delegate)))];
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
        $composer_1.y1a(-838505973);
        sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.z1a(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.a1b();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.material.Button$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_0(dispatchReceiver);
          var value = tmp$ret$0;
          tmp1_cache.b1b(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.d1b();
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
        $composer_0.l1h();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.j1m(p0, p1);
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
    $composer_0.y1a(-796265464);
    sourceInformation($composer_0, 'C(Card$composable)P(5,6,0:c#ui.graphics.Color,3:c#ui.graphics.Color!1,4:c#ui.unit.Dp)60@2616L6,61@2674L6,62@2716L32,67@2854L218:Card.kt#jmzs0o');
    if (!(($default & 1) === 0))
      modifier_0 = Companion_getInstance();
    if (!(($default & 2) === 0))
      shape_0 = MaterialTheme_getInstance().j92($composer_0, 6).g92_1;
    if (!(($default & 4) === 0))
      backgroundColor_0 = MaterialTheme_getInstance().e93($composer_0, 6).u93();
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
    $composer_0.d1b();
  }
  function get_LocalColors() {
    init_properties_Colors_kt_xt6jfu();
    return LocalColors;
  }
  var LocalColors;
  function Colors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight) {
    this.f93_1 = mutableStateOf(new Color(primary), structuralEqualityPolicy());
    this.g93_1 = mutableStateOf(new Color(primaryVariant), structuralEqualityPolicy());
    this.h93_1 = mutableStateOf(new Color(secondary), structuralEqualityPolicy());
    this.i93_1 = mutableStateOf(new Color(secondaryVariant), structuralEqualityPolicy());
    this.j93_1 = mutableStateOf(new Color(background), structuralEqualityPolicy());
    this.k93_1 = mutableStateOf(new Color(surface), structuralEqualityPolicy());
    this.l93_1 = mutableStateOf(new Color(error), structuralEqualityPolicy());
    this.m93_1 = mutableStateOf(new Color(onPrimary), structuralEqualityPolicy());
    this.n93_1 = mutableStateOf(new Color(onSecondary), structuralEqualityPolicy());
    this.o93_1 = mutableStateOf(new Color(onBackground), structuralEqualityPolicy());
    this.p93_1 = mutableStateOf(new Color(onSurface), structuralEqualityPolicy());
    this.q93_1 = mutableStateOf(new Color(onError), structuralEqualityPolicy());
    this.r93_1 = mutableStateOf(isLight, structuralEqualityPolicy());
  }
  Colors.prototype.q96 = function (_set____db54di) {
    var tmp0_setValue = primary$factory();
    return this.f93_1.p11(new Color(_set____db54di));
  };
  Colors.prototype.s93 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = primary$factory_0();
    tmp$ret$0 = this.f93_1.i2().y3a_1;
    return tmp$ret$0;
  };
  Colors.prototype.r96 = function (_set____db54di) {
    var tmp0_setValue = primaryVariant$factory();
    return this.g93_1.p11(new Color(_set____db54di));
  };
  Colors.prototype.s96 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = primaryVariant$factory_0();
    tmp$ret$0 = this.g93_1.i2().y3a_1;
    return tmp$ret$0;
  };
  Colors.prototype.t96 = function (_set____db54di) {
    var tmp0_setValue = secondary$factory();
    return this.h93_1.p11(new Color(_set____db54di));
  };
  Colors.prototype.u96 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = secondary$factory_0();
    tmp$ret$0 = this.h93_1.i2().y3a_1;
    return tmp$ret$0;
  };
  Colors.prototype.v96 = function (_set____db54di) {
    var tmp0_setValue = secondaryVariant$factory();
    return this.i93_1.p11(new Color(_set____db54di));
  };
  Colors.prototype.w96 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = secondaryVariant$factory_0();
    tmp$ret$0 = this.i93_1.i2().y3a_1;
    return tmp$ret$0;
  };
  Colors.prototype.x96 = function (_set____db54di) {
    var tmp0_setValue = background$factory();
    return this.j93_1.p11(new Color(_set____db54di));
  };
  Colors.prototype.y3w = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = background$factory_0();
    tmp$ret$0 = this.j93_1.i2().y3a_1;
    return tmp$ret$0;
  };
  Colors.prototype.y96 = function (_set____db54di) {
    var tmp0_setValue = surface$factory();
    return this.k93_1.p11(new Color(_set____db54di));
  };
  Colors.prototype.u93 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = surface$factory_0();
    tmp$ret$0 = this.k93_1.i2().y3a_1;
    return tmp$ret$0;
  };
  Colors.prototype.z96 = function (_set____db54di) {
    var tmp0_setValue = error$factory();
    return this.l93_1.p11(new Color(_set____db54di));
  };
  Colors.prototype.a97 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = error$factory_0();
    tmp$ret$0 = this.l93_1.i2().y3a_1;
    return tmp$ret$0;
  };
  Colors.prototype.b97 = function (_set____db54di) {
    var tmp0_setValue = onPrimary$factory();
    return this.m93_1.p11(new Color(_set____db54di));
  };
  Colors.prototype.c97 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onPrimary$factory_0();
    tmp$ret$0 = this.m93_1.i2().y3a_1;
    return tmp$ret$0;
  };
  Colors.prototype.d97 = function (_set____db54di) {
    var tmp0_setValue = onSecondary$factory();
    return this.n93_1.p11(new Color(_set____db54di));
  };
  Colors.prototype.e97 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onSecondary$factory_0();
    tmp$ret$0 = this.n93_1.i2().y3a_1;
    return tmp$ret$0;
  };
  Colors.prototype.f97 = function (_set____db54di) {
    var tmp0_setValue = onBackground$factory();
    return this.o93_1.p11(new Color(_set____db54di));
  };
  Colors.prototype.g97 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onBackground$factory_0();
    tmp$ret$0 = this.o93_1.i2().y3a_1;
    return tmp$ret$0;
  };
  Colors.prototype.h97 = function (_set____db54di) {
    var tmp0_setValue = onSurface$factory();
    return this.p93_1.p11(new Color(_set____db54di));
  };
  Colors.prototype.t93 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onSurface$factory_0();
    tmp$ret$0 = this.p93_1.i2().y3a_1;
    return tmp$ret$0;
  };
  Colors.prototype.i97 = function (_set____db54di) {
    var tmp0_setValue = onError$factory();
    return this.q93_1.p11(new Color(_set____db54di));
  };
  Colors.prototype.j97 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onError$factory_0();
    tmp$ret$0 = this.q93_1.i2().y3a_1;
    return tmp$ret$0;
  };
  Colors.prototype.k97 = function (_set____db54di) {
    var tmp0_setValue = isLight$factory();
    return this.r93_1.p11(_set____db54di);
  };
  Colors.prototype.l97 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = isLight$factory_0();
    tmp$ret$0 = this.r93_1.i2();
    return tmp$ret$0;
  };
  Colors.prototype.m97 = function (primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight) {
    return new Colors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight);
  };
  Colors.prototype.n97 = function (primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      primary = this.s93();
    if (!(($mask0 & 2) === 0))
      primaryVariant = this.s96();
    if (!(($mask0 & 4) === 0))
      secondary = this.u96();
    if (!(($mask0 & 8) === 0))
      secondaryVariant = this.w96();
    if (!(($mask0 & 16) === 0))
      background = this.y3w();
    if (!(($mask0 & 32) === 0))
      surface = this.u93();
    if (!(($mask0 & 64) === 0))
      error = this.a97();
    if (!(($mask0 & 128) === 0))
      onPrimary = this.c97();
    if (!(($mask0 & 256) === 0))
      onSecondary = this.e97();
    if (!(($mask0 & 512) === 0))
      onBackground = this.g97();
    if (!(($mask0 & 1024) === 0))
      onSurface = this.t93();
    if (!(($mask0 & 2048) === 0))
      onError = this.j97();
    if (!(($mask0 & 4096) === 0))
      isLight = this.l97();
    return this.m97(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight);
  };
  Colors.prototype.toString = function () {
    return 'Colors(' + ('primary=' + new Color(this.s93()) + ', ') + ('primaryVariant=' + new Color(this.s96()) + ', ') + ('secondary=' + new Color(this.u96()) + ', ') + ('secondaryVariant=' + new Color(this.w96()) + ', ') + ('background=' + new Color(this.y3w()) + ', ') + ('surface=' + new Color(this.u93()) + ', ') + ('error=' + new Color(this.a97()) + ', ') + ('onPrimary=' + new Color(this.c97()) + ', ') + ('onSecondary=' + new Color(this.e97()) + ', ') + ('onBackground=' + new Color(this.g97()) + ', ') + ('onSurface=' + new Color(this.t93()) + ', ') + ('onError=' + new Color(this.j97()) + ', ') + ('isLight=' + this.l97()) + ')';
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
      background = Companion_getInstance_5().i3a_1;
    if (!(($mask0 & 32) === 0))
      surface = Companion_getInstance_5().i3a_1;
    if (!(($mask0 & 64) === 0))
      error = Color_0(new Long(-5242848, 0));
    if (!(($mask0 & 128) === 0))
      onPrimary = Companion_getInstance_5().i3a_1;
    if (!(($mask0 & 256) === 0))
      onSecondary = Companion_getInstance_5().e3a_1;
    if (!(($mask0 & 512) === 0))
      onBackground = Companion_getInstance_5().e3a_1;
    if (!(($mask0 & 1024) === 0))
      onSurface = Companion_getInstance_5().e3a_1;
    if (!(($mask0 & 2048) === 0))
      onError = Companion_getInstance_5().i3a_1;
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
    var tmp0_takeOrElse = contentColorFor(MaterialTheme_getInstance().e93($composer_0, 6), backgroundColor);
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(tmp0_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance_5().q3a_1));
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
      var tmp0 = $composer_1.w1n(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$1 = tmp0.y3a_1;
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
    return equals(tmp0_subject, _this__u8e3s4.s93()) ? _this__u8e3s4.c97() : equals(tmp0_subject, _this__u8e3s4.s96()) ? _this__u8e3s4.c97() : equals(tmp0_subject, _this__u8e3s4.u96()) ? _this__u8e3s4.e97() : equals(tmp0_subject, _this__u8e3s4.w96()) ? _this__u8e3s4.e97() : equals(tmp0_subject, _this__u8e3s4.y3w()) ? _this__u8e3s4.g97() : equals(tmp0_subject, _this__u8e3s4.u93()) ? _this__u8e3s4.t93() : equals(tmp0_subject, _this__u8e3s4.a97()) ? _this__u8e3s4.j97() : Companion_getInstance_5().q3a_1;
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
      onPrimary = Companion_getInstance_5().e3a_1;
    if (!(($mask0 & 256) === 0))
      onSecondary = Companion_getInstance_5().e3a_1;
    if (!(($mask0 & 512) === 0))
      onBackground = Companion_getInstance_5().i3a_1;
    if (!(($mask0 & 1024) === 0))
      onSurface = Companion_getInstance_5().i3a_1;
    if (!(($mask0 & 2048) === 0))
      onError = Companion_getInstance_5().e3a_1;
    return darkColors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError);
  }
  function updateColorsFrom(_this__u8e3s4, other) {
    init_properties_Colors_kt_xt6jfu();
    _this__u8e3s4.q96(other.s93());
    _this__u8e3s4.r96(other.s96());
    _this__u8e3s4.t96(other.u96());
    _this__u8e3s4.v96(other.w96());
    _this__u8e3s4.x96(other.y3w());
    _this__u8e3s4.y96(other.u93());
    _this__u8e3s4.z96(other.a97());
    _this__u8e3s4.b97(other.c97());
    _this__u8e3s4.d97(other.e97());
    _this__u8e3s4.f97(other.g97());
    _this__u8e3s4.h97(other.t93());
    _this__u8e3s4.i97(other.j97());
    _this__u8e3s4.k97(other.l97());
  }
  function LocalColors$lambda() {
    init_properties_Colors_kt_xt6jfu();
    return lightColors$default(null, null, null, null, null, null, null, null, null, null, null, null, 4095, null);
  }
  function primary$factory() {
    return getPropertyCallableRef('primary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.s93());
    }, function (receiver, value) {
      return receiver.q96(value.y3a_1);
    });
  }
  function primary$factory_0() {
    return getPropertyCallableRef('primary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.s93());
    }, function (receiver, value) {
      return receiver.q96(value.y3a_1);
    });
  }
  function primaryVariant$factory() {
    return getPropertyCallableRef('primaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.s96());
    }, function (receiver, value) {
      return receiver.r96(value.y3a_1);
    });
  }
  function primaryVariant$factory_0() {
    return getPropertyCallableRef('primaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.s96());
    }, function (receiver, value) {
      return receiver.r96(value.y3a_1);
    });
  }
  function secondary$factory() {
    return getPropertyCallableRef('secondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.u96());
    }, function (receiver, value) {
      return receiver.t96(value.y3a_1);
    });
  }
  function secondary$factory_0() {
    return getPropertyCallableRef('secondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.u96());
    }, function (receiver, value) {
      return receiver.t96(value.y3a_1);
    });
  }
  function secondaryVariant$factory() {
    return getPropertyCallableRef('secondaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.w96());
    }, function (receiver, value) {
      return receiver.v96(value.y3a_1);
    });
  }
  function secondaryVariant$factory_0() {
    return getPropertyCallableRef('secondaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.w96());
    }, function (receiver, value) {
      return receiver.v96(value.y3a_1);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.y3w());
    }, function (receiver, value) {
      return receiver.x96(value.y3a_1);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.y3w());
    }, function (receiver, value) {
      return receiver.x96(value.y3a_1);
    });
  }
  function surface$factory() {
    return getPropertyCallableRef('surface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.u93());
    }, function (receiver, value) {
      return receiver.y96(value.y3a_1);
    });
  }
  function surface$factory_0() {
    return getPropertyCallableRef('surface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.u93());
    }, function (receiver, value) {
      return receiver.y96(value.y3a_1);
    });
  }
  function error$factory() {
    return getPropertyCallableRef('error', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.a97());
    }, function (receiver, value) {
      return receiver.z96(value.y3a_1);
    });
  }
  function error$factory_0() {
    return getPropertyCallableRef('error', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.a97());
    }, function (receiver, value) {
      return receiver.z96(value.y3a_1);
    });
  }
  function onPrimary$factory() {
    return getPropertyCallableRef('onPrimary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.c97());
    }, function (receiver, value) {
      return receiver.b97(value.y3a_1);
    });
  }
  function onPrimary$factory_0() {
    return getPropertyCallableRef('onPrimary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.c97());
    }, function (receiver, value) {
      return receiver.b97(value.y3a_1);
    });
  }
  function onSecondary$factory() {
    return getPropertyCallableRef('onSecondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.e97());
    }, function (receiver, value) {
      return receiver.d97(value.y3a_1);
    });
  }
  function onSecondary$factory_0() {
    return getPropertyCallableRef('onSecondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.e97());
    }, function (receiver, value) {
      return receiver.d97(value.y3a_1);
    });
  }
  function onBackground$factory() {
    return getPropertyCallableRef('onBackground', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.g97());
    }, function (receiver, value) {
      return receiver.f97(value.y3a_1);
    });
  }
  function onBackground$factory_0() {
    return getPropertyCallableRef('onBackground', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.g97());
    }, function (receiver, value) {
      return receiver.f97(value.y3a_1);
    });
  }
  function onSurface$factory() {
    return getPropertyCallableRef('onSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.t93());
    }, function (receiver, value) {
      return receiver.h97(value.y3a_1);
    });
  }
  function onSurface$factory_0() {
    return getPropertyCallableRef('onSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.t93());
    }, function (receiver, value) {
      return receiver.h97(value.y3a_1);
    });
  }
  function onError$factory() {
    return getPropertyCallableRef('onError', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.j97());
    }, function (receiver, value) {
      return receiver.i97(value.y3a_1);
    });
  }
  function onError$factory_0() {
    return getPropertyCallableRef('onError', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.j97());
    }, function (receiver, value) {
      return receiver.i97(value.y3a_1);
    });
  }
  function isLight$factory() {
    return getPropertyCallableRef('isLight', 1, KMutableProperty1, function (receiver) {
      return receiver.l97();
    }, function (receiver, value) {
      return receiver.k97(value);
    });
  }
  function isLight$factory_0() {
    return getPropertyCallableRef('isLight', 1, KMutableProperty1, function (receiver) {
      return receiver.l97();
    }, function (receiver, value) {
      return receiver.k97(value);
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
  function contentAlpha$composable($this, highContrastAlpha, lowContrastAlpha, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(-198048456);
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
    var tmp0 = $composer_1.w1n(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0.y3a_1;
    var contentColor = tmp$ret$0;
    var lightTheme = MaterialTheme_getInstance().e93($composer_0, 6).l97();
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
    $composer_0.d1b();
    return tmp0_0;
  }
  function ContentAlpha() {
    ContentAlpha_instance = this;
    this.v93_1 = 0;
  }
  ContentAlpha.prototype.o97 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(-1959843334);
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
    $composer_0.d1b();
    return tmp0;
  };
  ContentAlpha.prototype.p97 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(-277492921);
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
    $composer_0.d1b();
    return tmp0;
  };
  ContentAlpha.prototype.w93 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(856927968);
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
    $composer_0.d1b();
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
    this.q97_1 = 1.0;
    this.r97_1 = 0.74;
    this.s97_1 = 0.38;
  }
  HighContrastContentAlpha.$metadata$ = objectMeta('HighContrastContentAlpha');
  var HighContrastContentAlpha_instance;
  function HighContrastContentAlpha_getInstance() {
    if (HighContrastContentAlpha_instance == null)
      new HighContrastContentAlpha();
    return HighContrastContentAlpha_instance;
  }
  function LowContrastContentAlpha() {
    LowContrastContentAlpha_instance = this;
    this.t97_1 = 0.87;
    this.u97_1 = 0.6;
    this.v97_1 = 0.38;
  }
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
    return new Color(Companion_getInstance_5().e3a_1);
  }
  var properties_initialized_ContentColor_kt_sc8rw;
  function init_properties_ContentColor_kt_nv4lg0() {
    if (properties_initialized_ContentColor_kt_sc8rw) {
    } else {
      properties_initialized_ContentColor_kt_sc8rw = true;
      LocalContentColor = compositionLocalOf$default(null, LocalContentColor$lambda, 1, null);
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
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  }
  function ElevationDefaults() {
    ElevationDefaults_instance = this;
  }
  ElevationDefaults.prototype.j98 = function (interaction) {
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
  ElevationDefaults.prototype.k98 = function (interaction) {
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
    this.e98_1 = _this__u8e3s4;
    this.f98_1 = target;
    this.g98_1 = from;
    this.h98_1 = to;
  }
  $animateElevationCOROUTINE$0.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 4;
            this.i98_1 = !(this.h98_1 == null) ? ElevationDefaults_getInstance().j98(this.h98_1) : !(this.g98_1 == null) ? ElevationDefaults_getInstance().k98(this.g98_1) : null;
            if (!(this.i98_1 == null)) {
              this.zf_1 = 2;
              var tmp_0 = new Dp(this.f98_1);
              suspendResult = this.e98_1.p6z(tmp_0, this.i98_1, null, null, this, 12, null);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zf_1 = 1;
              suspendResult = this.e98_1.r6z(new Dp(this.f98_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.zf_1 = 3;
            continue $sm;
          case 2:
            ;
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
  DefaultElevationOverlay.prototype.l98 = function (color, elevation, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1758936578, 'C(apply$composable)P(0:c#ui.graphics.Color,1:c#ui.unit.Dp)69@2742L6,71@2841L42:ElevationOverlay.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-1758936578, $changed, -1, 'androidx.compose.material.DefaultElevationOverlay.apply$composable (ElevationOverlay.kt:68)');
    }
    var colors = MaterialTheme_getInstance().e93($composer_0, 6);
    var tmp;
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (Dp__compareTo_impl_tlg3dl(elevation, tmp$ret$0) > 0) {
      tmp_0 = !colors.l97();
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
    $composer_0.y1a(-1798234707);
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
      var tmp0 = $composer_1.w1n(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$0 = tmp0.y3a_1;
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalContentAlpha();
      var tmp3_$get_current$$composable_fm67ua = $composer_0;
      var $composer_2 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_2, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.w1n(tmp2_$get_current$$composable_g4n2vl);
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
    $composer_0.d1b();
  }
  function Icon$composable_0(painter, contentDescription, modifier, tint, $composer, $changed, $default) {
    init_properties_Icon_kt_jrb2tb();
    var modifier_0 = {_v: modifier};
    var tint_0 = {_v: new Color(tint)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(-1405370588);
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
      var tmp0 = $composer_1.w1n(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$0 = tmp0.y3a_1;
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalContentAlpha();
      var tmp3_$get_current$$composable_fm67ua = $composer_0;
      var $composer_2 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_2, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.w1n(tmp2_$get_current$$composable_g4n2vl);
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
    if (tint_0._v.equals(new Color(Companion_getInstance_5().q3a_1))) {
      tmp_1 = null;
    } else {
      var tmp_2 = Companion_getInstance_6();
      var tmp_3 = tint_0._v.y3a_1;
      tmp_1 = tmp_2.y3b(tmp_3, null, 2, null);
    }
    var colorFilter = tmp_1;
    $composer_0.y1a(1651960994);
    sourceInformation($composer_0, '123@5137L103');
    var tmp_4;
    if (!(contentDescription == null)) {
      var tmp_5 = Companion_getInstance();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp4_remember$composable = $composer_0;
      var tmp5_remember$composable = 14 & $dirty >> 3;
      var $composer_3 = tmp4_remember$composable;
      $composer_3.y1a(-838505973);
      sourceInformation($composer_3, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_3;
      var tmp2_cache = $composer_3.z1a(contentDescription);
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_6;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
        var tmp$ret$2;
        // Inline function 'androidx.compose.material.Icon$composable.<anonymous>' call
        tmp$ret$2 = Icon$composable$lambda_0(contentDescription);
        var value = tmp$ret$2;
        tmp1_cache.b1b(value);
        tmp_6 = value;
      } else {
        tmp_6 = tmp0_let;
      }
      tmp$ret$3 = tmp_6;
      tmp$ret$4 = tmp$ret$3;
      var tmp_7 = tmp$ret$4;
      tmp$ret$5 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
      var tmp0_1 = tmp$ret$5;
      $composer_3.d1b();
      tmp$ret$6 = tmp0_1;
      tmp_4 = semantics$default(tmp_5, false, tmp$ret$6, 1, null);
    } else {
      tmp_4 = Companion_getInstance();
    }
    var tmp0_group = tmp_4;
    $composer_0.d1b();
    var semantics = tmp0_group;
    var tmp0_$receiver = defaultSizeFor(toolingGraphicsLayer(modifier_0._v), painter);
    var tmp1_contentScale = Companion_getInstance_7().m4h_1;
    Box$composable(paint$default(tmp0_$receiver, painter, false, null, tmp1_contentScale, 0.0, colorFilter, 22, null).y4e(semantics), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.a1o();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.g1p(Icon$composable$lambda$ref(painter, contentDescription, modifier_0, tint_0, $changed, $default));
    }
  }
  function defaultSizeFor(_this__u8e3s4, painter) {
    init_properties_Icon_kt_jrb2tb();
    var tmp;
    if (equals(painter.n3m(), Companion_getInstance_8().p2j_1) ? true : isInfinite_0(painter.n3m())) {
      tmp = get_DefaultIconSizeModifier();
    } else {
      tmp = Companion_getInstance();
    }
    return _this__u8e3s4.y4e(tmp);
  }
  function isInfinite_0(_this__u8e3s4) {
    init_properties_Icon_kt_jrb2tb();
    return isInfinite(_Size___get_width__impl__58y75t(_this__u8e3s4)) ? isInfinite(_Size___get_height__impl__a04p02(_this__u8e3s4)) : false;
  }
  function Icon$composable$lambda($painter, $contentDescription, $modifier, $tint, $$changed, $$default, $composer, $force) {
    return Icon$composable_0($painter, $contentDescription, $modifier._v, $tint._v.y3a_1, $composer, $$changed | 1, $$default);
  }
  function Icon$composable$lambda_0($contentDescription) {
    return function ($this$semantics) {
      set_contentDescription($this$semantics, $contentDescription);
      set_role($this$semantics, Companion_getInstance_9().a6a_1);
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
    $composer_0 = $composer_0.z1n(-1115064840);
    sourceInformation($composer_0, 'C(IconButton$composable)P(4,3,1,2)62@2761L39,73@3131L54,65@2846L598:IconButton.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(onClick) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.f1b(enabled_0._v) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.z1a(interactionSource_0._v) : false) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.z1a(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.l1m()) {
      $composer_0.y1m();
      if (($changed & 1) === 0 ? true : $composer_0.c1n()) {
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
          if (false ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
            var tmp$ret$0;
            // Inline function 'androidx.compose.material.IconButton$composable.<anonymous>' call
            tmp$ret$0 = funMutableInteractionSource();
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
          interactionSource_0._v = tmp$ret$4;
          $dirty = $dirty & -7169;
        }
      } else {
        $composer_0.l1h();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.z1m();
      if (isTraceInProgress()) {
        traceEventStart(-1115064840, $dirty, -1, 'androidx.compose.material.IconButton$composable (IconButton.kt:58)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp0_$receiver = minimumTouchTargetSize(modifier_0._v);
      var tmp1_role = Companion_getInstance_9().v69_1;
      var tmp_1 = get_RippleRadius();
      var tmp2_indication = rememberRipple$composable(false, tmp_1, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 54, 4);
      var tmp_2 = interactionSource_0._v;
      var tmp_3 = enabled_0._v;
      var tmp1_Box$composable = clickable$default(tmp0_$receiver, tmp_2, tmp2_indication, tmp_3, null, tmp1_role, onClick, 8, null);
      var tmp2_Box$composable = Companion_getInstance_3().w4d_1;
      var tmp3_Box$composable = false;
      var tmp4_Box$composable = $composer_0;
      var modifier_1 = tmp1_Box$composable;
      var contentAlignment = tmp2_Box$composable;
      var propagateMinConstraints = tmp3_Box$composable;
      var $composer_2 = tmp4_Box$composable;
      $composer_2.y1a(1330882304);
      sourceInformation($composer_2, 'C(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance();
      if (!(0 === 0))
        contentAlignment = Companion_getInstance_3().s4d_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_2, 6);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp0_Layout$composable = modifier_1;
      var tmp1_Layout$composable = $composer_2;
      var tmp2_Layout$composable = 0;
      var modifier_2 = tmp0_Layout$composable;
      var $composer_3 = tmp1_Layout$composable;
      $composer_3.y1a(1725976829);
      sourceInformation($composer_3, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_2 = Companion_getInstance();
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_3;
      var $composer_4 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_4.w1n(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_4);
      tmp$ret$5 = tmp0_0;
      var density = tmp$ret$5;
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua = $composer_3;
      var $composer_5 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_5, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_5.w1n(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_5);
      tmp$ret$6 = tmp0_1;
      var layoutDirection = tmp$ret$6;
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro = $composer_3;
      var $composer_6 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_6, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_2 = $composer_6.w1n(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_6);
      tmp$ret$7 = tmp0_2;
      var viewConfiguration = tmp$ret$7;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_4().a5e_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_2);
      var tmp8_ReusableComposeNode$composable = $composer_3;
      var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
      var $composer_7 = tmp8_ReusableComposeNode$composable;
      var tmp_4 = $composer_7.u1m();
      if (!isInterface(tmp_4, Applier)) {
        invalidApplier();
      }
      $composer_7.g1n();
      if ($composer_7.e1n()) {
        $composer_7.h1n(tmp6_ReusableComposeNode$composable);
      } else {
        $composer_7.j1n();
      }
      $composer_7.l1n();
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_7);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_4().e5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_4().d5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_4().f5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_4().g5e_1);
      $composer_7.m1n();
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_7)), $composer_7, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_7.y1a(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp3__anonymous__ufb84q = $composer_7;
      var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_8 = tmp3__anonymous__ufb84q;
      $composer_8.y1a(-2137368960);
      sourceInformation($composer_8, 'C72@3384L9:Box.kt#2w3rfo');
      if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_8.l1m()) {
        // Inline function 'androidx.compose.material.IconButton$composable.<anonymous>' call
        var tmp5__anonymous__kpxxpo = BoxScopeInstance_getInstance();
        var tmp6__anonymous__fv9ai5 = $composer_8;
        var tmp7__anonymous__b0knam = 6;
        var $composer_9 = tmp6__anonymous__fv9ai5;
        $composer_9.y1a(-2146259096);
        sourceInformation($composer_9, 'C78@3354L84:IconButton.kt#jmzs0o');
        if (!((tmp7__anonymous__b0knam & 81) === 16) ? true : !$composer_9.l1m()) {
          var tmp_5;
          if (enabled_0._v) {
            $composer_9.y1a(-1248994064);
            sourceInformation($composer_9, '77@3311L7');
            var tmp$ret$8;
            // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
            var tmp0_$get_current$$composable_h5ksy7_0 = get_LocalContentAlpha();
            var tmp1_$get_current$$composable_gn3xww_0 = $composer_9;
            var $composer_10 = tmp1_$get_current$$composable_gn3xww_0;
            sourceInformationMarkerStart($composer_10, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
            var tmp0_3 = $composer_10.w1n(tmp0_$get_current$$composable_h5ksy7_0);
            sourceInformationMarkerEnd($composer_10);
            tmp$ret$8 = tmp0_3;
            var tmp0_group = tmp$ret$8;
            $composer_9.d1b();
            tmp_5 = tmp0_group;
          } else {
            $composer_9.y1a(-1248994038);
            sourceInformation($composer_9, '77@3337L8');
            var tmp1_group = ContentAlpha_getInstance().w93($composer_9, 6);
            $composer_9.d1b();
            tmp_5 = tmp1_group;
          }
          var contentAlpha = tmp_5;
          CompositionLocalProvider$composable([get_LocalContentAlpha().g1s(contentAlpha)], content, $composer_9, 112 & $dirty >> 9);
        } else {
          $composer_9.l1h();
        }
        $composer_9.d1b();
      } else {
        $composer_8.l1h();
      }
      $composer_8.d1b();
      $composer_7.d1b();
      $composer_7.k1n();
      $composer_3.d1b();
      $composer_2.d1b();
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
      tmp0_safe_receiver.g1p(IconButton$composable$lambda$ref(onClick, modifier_0, enabled_0, interactionSource_0, content, $changed, $default));
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
    $composer_0.y1a(757108492);
    sourceInformation($composer_0, 'C(rememberTextSelectionColors$composable)45@1902L6,47@1930L384:MaterialTextSelectionColors.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(757108492, $changed, -1, 'androidx.compose.material.rememberTextSelectionColors$composable (MaterialTextSelectionColors.kt:35)');
    }
    var primaryColor = colors.s93();
    var backgroundColor = colors.y3w();
    $composer_0.y1a(-1548518187);
    sourceInformation($composer_0, '*43@1845L7');
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp0_takeOrElse = contentColorFor(colors, backgroundColor);
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(tmp0_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance_5().q3a_1));
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
      var tmp0 = $composer_1.w1n(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$1 = tmp0.y3a_1;
      var tmp0_return = tmp$ret$1;
      tmp$ret$2 = tmp0_return;
      tmp = tmp$ret$2;
    }
    tmp$ret$3 = tmp;
    var tmp1_group = tmp$ret$3;
    $composer_0.d1b();
    var tmp_0 = ContentAlpha_getInstance().p97($composer_0, 6);
    var textColorWithLowestAlpha = Color__copy$default_impl_ectz3s(tmp1_group, tmp_0, 0.0, 0.0, 0.0, 14, null);
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp1_remember$composable = $composer_0;
    var $composer_2 = tmp1_remember$composable;
    $composer_2.y1a(-1058148781);
    sourceInformation($composer_2, 'C(remember$composable)P(1,2,3):Composables.kt#9igjgp');
    var tmp$ret$7;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_2;
    var tmp2_cache = !!(!!($composer_2.z1a(new Color(primaryColor)) | $composer_2.z1a(new Color(backgroundColor))) | $composer_2.z1a(new Color(textColorWithLowestAlpha)));
    var tmp$ret$6;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.material.rememberTextSelectionColors$composable.<anonymous>' call
      tmp$ret$4 = new TextSelectionColors(colors.s93(), calculateSelectionBackgroundColor(primaryColor, textColorWithLowestAlpha, backgroundColor));
      var value = tmp$ret$4;
      tmp1_cache.b1b(value);
      tmp_1 = value;
    } else {
      tmp_1 = tmp0_let;
    }
    tmp$ret$5 = tmp_1;
    tmp$ret$6 = tmp$ret$5;
    var tmp_2 = tmp$ret$6;
    tmp$ret$7 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    var tmp0_0 = tmp$ret$7;
    $composer_2.d1b();
    tmp$ret$8 = tmp0_0;
    var tmp0_1 = tmp$ret$8;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
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
    this.i92_1 = 0;
  }
  MaterialTheme.prototype.e93 = function ($composer, $changed) {
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
    var tmp0 = $composer_1.w1n(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    var tmp0_0 = tmp$ret$0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  };
  MaterialTheme.prototype.p96 = function ($composer, $changed) {
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
    var tmp0 = $composer_1.w1n(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    var tmp0_0 = tmp$ret$0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  };
  MaterialTheme.prototype.j92 = function ($composer, $changed) {
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
    var tmp0 = $composer_1.w1n(tmp0_$get_current$$composable_h5ksy7);
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
    $composer_0 = $composer_0.z1n(1109019765);
    sourceInformation($composer_0, 'C(MaterialTheme$composable)P(!1,3,2)59@2947L6,60@2998L10,61@3045L6,*64@3120L184,69@3367L16,70@3410L45,73@3581L4,71@3460L492:MaterialTheme.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.z1a(colors_0._v) : false) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.z1a(typography_0._v) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.z1a(shapes_0._v) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.z1a(content) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.l1m()) {
      $composer_0.y1m();
      if (($changed & 1) === 0 ? true : $composer_0.c1n()) {
        if (!(($default & 1) === 0)) {
          colors_0._v = MaterialTheme_getInstance().e93($composer_0, 6);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          typography_0._v = MaterialTheme_getInstance().p96($composer_0, 6);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          shapes_0._v = MaterialTheme_getInstance().j92($composer_0, 6);
          $dirty = $dirty & -897;
        }
      } else {
        $composer_0.l1h();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.z1m();
      if (isTraceInProgress()) {
        traceEventStart(1109019765, $dirty, -1, 'androidx.compose.material.MaterialTheme$composable (MaterialTheme.kt:58)');
      }
      var tmp$ret$5;
      // Inline function 'kotlin.apply' call
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
      if (false ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.material.MaterialTheme$composable.<anonymous>' call
        var tmp_0 = colors_0._v;
        tmp$ret$0 = tmp_0.n97(null, null, null, null, null, null, null, null, null, null, null, null, false, 8191, null);
        var value = tmp$ret$0;
        tmp1_cache.b1b(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      tmp$ret$1 = tmp;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.d1b();
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
      var tmp_3 = [get_LocalColors().g1s(rememberedColors), get_LocalContentAlpha().g1s(ContentAlpha_getInstance().o97($composer_0, 6)), get_LocalIndication().g1s(rippleIndication), get_LocalRippleTheme().g1s(MaterialRippleTheme_getInstance()), get_LocalShapes().g1s(shapes_0._v), get_LocalTextSelectionColors().g1s(selectionColors), get_LocalTypography().g1s(typography_0._v)];
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
      $composer_2.y1a(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = $composer_2.z1a(dispatchReceiver);
      var tmp$ret$8;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$6;
        // Inline function 'androidx.compose.material.MaterialTheme$composable.<anonymous>.<anonymous>' call
        tmp$ret$6 = ComposableLambda$invoke$ref_3(dispatchReceiver);
        var value_0 = tmp$ret$6;
        tmp1_cache_0.b1b(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = tmp0_let_0;
      }
      tmp$ret$7 = tmp_5;
      tmp$ret$8 = tmp$ret$7;
      var tmp_6 = tmp$ret$8;
      tmp$ret$9 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      var tmp0_0 = tmp$ret$9;
      $composer_2.d1b();
      tmp$ret$10 = tmp0_0;
      tmp$ret$11 = tmp$ret$10;
      tmp$ret$12 = tmp$ret$11;
      CompositionLocalProvider$composable(tmp_3, tmp$ret$12, $composer_0, 48);
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
      tmp0_safe_receiver.g1p(MaterialTheme$composable$lambda$ref(colors_0, typography_0, shapes_0, content, $changed, $default));
    }
  }
  function MaterialRippleTheme() {
    MaterialRippleTheme_instance = this;
  }
  MaterialRippleTheme.prototype.l8x = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(-1211684040);
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
    var tmp0 = $composer_1.w1n(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0.y3a_1;
    var tmp0_0 = tmp.a92(tmp$ret$0, MaterialTheme_getInstance().e93($composer_0, 6).l97());
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0_0;
  };
  MaterialRippleTheme.prototype.m8x = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(-450539707);
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
    var tmp0 = $composer_1.w1n(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0.y3a_1;
    var tmp0_0 = tmp.b92(tmp$ret$0, MaterialTheme_getInstance().e93($composer_0, 6).l97());
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
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
      if (!(($changed & 11) === 2) ? true : !$composer_0.l1m()) {
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
        $composer_0.l1h();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.j1m(p0, p1);
    };
  }
  function MaterialTheme$composable$lambda_0($typography, $content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C80@3849L97:MaterialTheme.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.l1m()) {
        if (isTraceInProgress()) {
          traceEventStart(-1740102967, $changed, -1, 'androidx.compose.material.MaterialTheme$composable.<anonymous> (MaterialTheme.kt:79)');
        }
        var tmp_0 = $typography._v.k96_1;
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
        $composer_1.y1a(-838505973);
        sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.z1a(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.a1b();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.material.MaterialTheme$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_2(dispatchReceiver);
          var value = tmp$ret$0;
          tmp1_cache.b1b(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.d1b();
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
        $composer_0.l1h();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.j1m(p0, p1);
    };
  }
  function MaterialTheme$composable$lambda$ref($colors, $typography, $shapes, $content, $$changed, $$default) {
    return function (p0, p1) {
      MaterialTheme$composable$lambda($colors, $typography, $shapes, $content, $$changed, $$default, p0, p1);
      return Unit_getInstance();
    };
  }
  var LinearIndicatorHeight;
  var LinearIndicatorWidth;
  function get_CircularIndicatorDiameter() {
    init_properties_ProgressIndicator_kt_ivxr2q();
    return CircularIndicatorDiameter;
  }
  var CircularIndicatorDiameter;
  var FirstLineHeadEasing;
  var FirstLineTailEasing;
  var SecondLineHeadEasing;
  var SecondLineTailEasing;
  var CircularEasing;
  function ProgressIndicatorDefaults() {
    ProgressIndicatorDefaults_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
    tmp.m98_1 = tmp$ret$0;
    this.n98_1 = 0.24;
    var tmp_0 = this;
    Spring_getInstance();
    Spring_getInstance();
    tmp_0.o98_1 = new SpringSpec(1.0, 50.0, 1 / 1000.0);
    this.p98_1 = 0;
  }
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
    $composer_0 = $composer_0.z1n(-292122964);
    sourceInformation($composer_0, 'C(CircularProgressIndicator$composable)P(2,1,0:c#ui.graphics.Color,3:c#ui.unit.Dp)226@9099L6,*229@9214L7,232@9300L296:ProgressIndicator.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.o1n(progress) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(modifier_0._v) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.p1n(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.y3a_1))) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.o1n(_Dp___get_value__impl__geb1vb(strokeWidth_0._v.f2l_1)) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.l1m()) {
      $composer_0.y1m();
      if (($changed & 1) === 0 ? true : $composer_0.c1n()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 4) === 0)) {
          color_0._v = new Color(MaterialTheme_getInstance().e93($composer_0, 6).s93());
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          strokeWidth_0._v = new Dp(ProgressIndicatorDefaults_getInstance().m98_1);
        }
      } else {
        $composer_0.l1h();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.z1m();
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
      var tmp0 = $composer_1.w1n(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$0 = tmp0;
      var tmp2_with = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.material.CircularProgressIndicator$composable.<anonymous>' call
      var tmp = tmp2_with.o2k(strokeWidth_0._v.f2l_1);
      var tmp_0 = Companion_getInstance_11().y3g_1;
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
      $composer_0.l1h();
    }
    var tmp0_safe_receiver = $composer_0.a1o();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.g1p(CircularProgressIndicator$composable$lambda$ref(progress, modifier_0, color_0, strokeWidth_0, $changed, $default));
    }
  }
  function drawDeterminateCircularIndicator(_this__u8e3s4, startAngle, sweep, color, stroke) {
    init_properties_ProgressIndicator_kt_ivxr2q();
    return drawCircularIndicator(_this__u8e3s4, startAngle, sweep, color, stroke);
  }
  function drawCircularIndicator(_this__u8e3s4, startAngle, sweep, color, stroke) {
    init_properties_ProgressIndicator_kt_ivxr2q();
    var diameterOffset = stroke.e3k_1 / 2;
    var arcDimen = _Size___get_width__impl__58y75t(_this__u8e3s4.j3k()) - 2 * diameterOffset;
    var tmp = Offset(diameterOffset, diameterOffset);
    var tmp_0 = Size(arcDimen, arcDimen);
    _this__u8e3s4.k3l(color, startAngle, sweep, false, tmp, tmp_0, 0.0, stroke, null, null, 832, null);
  }
  function CircularProgressIndicator$composable$lambda($progress, $modifier, $color, $strokeWidth, $$changed, $$default, $composer, $force) {
    return CircularProgressIndicator$composable($progress, $modifier._v, $color._v.y3a_1, $strokeWidth._v.f2l_1, $composer, $$changed | 1, $$default);
  }
  function CircularProgressIndicator$composable$lambda_0($progress, $color, $stroke) {
    return function ($this$Canvas) {
      var startAngle = 270.0;
      var sweep = $progress * 360.0;
      drawDeterminateCircularIndicator($this$Canvas, startAngle, sweep, $color._v.y3a_1, $stroke);
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
      LinearIndicatorHeight = ProgressIndicatorDefaults_getInstance().m98_1;
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
    this.f92_1 = small;
    this.g92_1 = medium;
    this.h92_1 = large;
  }
  Shapes.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shapes))
      return false;
    if (!equals(this.f92_1, other.f92_1))
      return false;
    if (!equals(this.g92_1, other.g92_1))
      return false;
    if (!equals(this.h92_1, other.h92_1))
      return false;
    return true;
  };
  Shapes.prototype.hashCode = function () {
    var result = hashCode(this.f92_1);
    result = imul(31, result) + hashCode(this.g92_1) | 0;
    result = imul(31, result) + hashCode(this.h92_1) | 0;
    return result;
  };
  Shapes.prototype.toString = function () {
    return 'Shapes(small=' + this.f92_1 + ', medium=' + this.g92_1 + ', large=' + this.h92_1 + ')';
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
    $composer_0 = $composer_0.z1n(-389757584);
    sourceInformation($composer_0, 'C(Slider$composable)P(7,4,3,1,8,6,5,2)162@7776L39,163@7859L8,166@7952L35,167@8012L59,170@8109L7,172@8166L29,173@8200L3501:Slider.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.o1n(value) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(onValueChange) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.z1a(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.f1b(enabled_0._v) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.z1a(valueRange_0._v) : false) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.q1n(steps_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.z1a(onValueChangeFinished_0._v) ? 1048576 : 524288);
    if (($changed & 29360128) === 0)
      $dirty = $dirty | ((($default & 128) === 0 ? $composer_0.z1a(interactionSource_0._v) : false) ? 8388608 : 4194304);
    if (($changed & 234881024) === 0)
      $dirty = $dirty | ((($default & 256) === 0 ? $composer_0.z1a(colors_0._v) : false) ? 67108864 : 33554432);
    if (!(($dirty & 191739611) === 38347922) ? true : !$composer_0.l1m()) {
      $composer_0.y1m();
      if (($changed & 1) === 0 ? true : $composer_0.c1n()) {
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
          if (false ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
            var tmp$ret$0;
            // Inline function 'androidx.compose.material.Slider$composable.<anonymous>' call
            tmp$ret$0 = funMutableInteractionSource();
            var value_0 = tmp$ret$0;
            tmp1_cache.b1b(value_0);
            tmp = value_0;
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
          colors_0._v = tmp_1.w98(tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 6, 1023);
          $dirty = $dirty & -234881025;
        }
      } else {
        $composer_0.l1h();
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 128) === 0))
          $dirty = $dirty & -29360129;
        if (!(($default & 256) === 0))
          $dirty = $dirty & -234881025;
      }
      $composer_0.z1m();
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
      $composer_2.y1a(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = $composer_2.z1a(tmp2_remember$composable);
      var tmp$ret$8;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_11;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$6;
        // Inline function 'androidx.compose.material.Slider$composable.<anonymous>' call
        tmp$ret$6 = stepsToTickFractions(steps_0._v);
        var value_1 = tmp$ret$6;
        tmp1_cache_0.b1b(value_1);
        tmp_11 = value_1;
      } else {
        tmp_11 = tmp0_let_0;
      }
      tmp$ret$7 = tmp_11;
      tmp$ret$8 = tmp$ret$7;
      var tmp_12 = tmp$ret$8;
      tmp$ret$9 = (tmp_12 == null ? true : isObject(tmp_12)) ? tmp_12 : THROW_CCE();
      var tmp0_0 = tmp$ret$9;
      $composer_2.d1b();
      tmp$ret$10 = tmp0_0;
      var tickFractions = tmp$ret$10;
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp5_$get_current$$composable_el8hro = get_LocalLayoutDirection();
      var tmp6_$get_current$$composable_e2rmqd = $composer_0;
      var $composer_3 = tmp6_$get_current$$composable_e2rmqd;
      sourceInformationMarkerStart($composer_3, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_3.w1n(tmp5_$get_current$$composable_el8hro);
      sourceInformationMarkerEnd($composer_3);
      tmp$ret$11 = tmp0_1;
      var isRtl = tmp$ret$11.equals(LayoutDirection_Rtl_getInstance());
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp7_remember$composable = $composer_0;
      var $composer_4 = tmp7_remember$composable;
      $composer_4.y1a(547886695);
      sourceInformation($composer_4, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$15;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = $composer_4;
      var tmp$ret$14;
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = tmp1_cache_1.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_13;
      if (false ? true : tmp0_let_1 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$12;
        // Inline function 'androidx.compose.material.Slider$composable.<anonymous>' call
        tmp$ret$12 = new FocusRequester();
        var value_2 = tmp$ret$12;
        tmp1_cache_1.b1b(value_2);
        tmp_13 = value_2;
      } else {
        tmp_13 = tmp0_let_1;
      }
      tmp$ret$13 = tmp_13;
      tmp$ret$14 = tmp$ret$13;
      var tmp_14 = tmp$ret$14;
      tmp$ret$15 = (tmp_14 == null ? true : isObject(tmp_14)) ? tmp_14 : THROW_CCE();
      var tmp0_2 = tmp$ret$15;
      $composer_4.d1b();
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
      $composer_5.y1a(-838505973);
      sourceInformation($composer_5, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$22;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_2 = $composer_5;
      var tmp2_cache_0 = $composer_5.z1a(dispatchReceiver);
      var tmp$ret$21;
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = tmp1_cache_2.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$20;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_20;
      if (tmp2_cache_0 ? true : tmp0_let_2 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$19;
        // Inline function 'androidx.compose.material.Slider$composable.<anonymous>.<anonymous>' call
        tmp$ret$19 = ComposableLambda$invoke$ref_4(dispatchReceiver);
        var value_3 = tmp$ret$19;
        tmp1_cache_2.b1b(value_3);
        tmp_20 = value_3;
      } else {
        tmp_20 = tmp0_let_2;
      }
      tmp$ret$20 = tmp_20;
      tmp$ret$21 = tmp$ret$20;
      var tmp_21 = tmp$ret$21;
      tmp$ret$22 = (tmp_21 == null ? true : isObject(tmp_21)) ? tmp_21 : THROW_CCE();
      var tmp0_3 = tmp$ret$22;
      $composer_5.d1b();
      tmp$ret$23 = tmp0_3;
      tmp$ret$24 = tmp$ret$23;
      tmp$ret$25 = tmp$ret$24;
      BoxWithConstraints$composable(tmp_18, null, false, tmp$ret$25, $composer_0, 3072, 6);
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
      tmp0_safe_receiver.g1p(Slider$composable$lambda$ref(value, onValueChange, modifier_0, enabled_0, valueRange_0, steps_0, onValueChangeFinished_0, interactionSource_0, colors_0, $changed, $default));
    }
  }
  function SliderColors() {
  }
  SliderColors.$metadata$ = interfaceMeta('SliderColors');
  function SliderDefaults() {
    SliderDefaults_instance = this;
    this.q98_1 = 0.24;
    this.r98_1 = 0.12;
    this.s98_1 = 0.32;
    this.t98_1 = 0.54;
    this.u98_1 = 0.12;
    this.v98_1 = 0;
  }
  SliderDefaults.prototype.w98 = function (thumbColor, disabledThumbColor, activeTrackColor, inactiveTrackColor, disabledActiveTrackColor, disabledInactiveTrackColor, activeTickColor, inactiveTickColor, disabledActiveTickColor, disabledInactiveTickColor, $composer, $changed, $changed1, $default) {
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
    $composer_0.y1a(1024271562);
    sourceInformation($composer_0, 'C(colors$composable)P(9:c#ui.graphics.Color,6:c#ui.graphics.Color,1:c#ui.graphics.Color,8:c#ui.graphics.Color,3:c#ui.graphics.Color,5:c#ui.graphics.Color,0:c#ui.graphics.Color,7:c#ui.graphics.Color,2:c#ui.graphics.Color,4:c#ui.graphics.Color)554@23656L6,555@23722L6,556@23778L8,557@23829L6,558@23894L6,561@24065L6,564@24278L33:Slider.kt#jmzs0o');
    if (!(($default & 1) === 0))
      thumbColor_0 = MaterialTheme_getInstance().e93($composer_0, 6).s93();
    if (!(($default & 2) === 0)) {
      var tmp = MaterialTheme_getInstance().e93($composer_0, 6).t93();
      var tmp_0 = ContentAlpha_getInstance().w93($composer_0, 6);
      disabledThumbColor_0 = compositeOver(Color__copy$default_impl_ectz3s(tmp, tmp_0, 0.0, 0.0, 0.0, 14, null), MaterialTheme_getInstance().e93($composer_0, 6).u93());
    }
    if (!(($default & 4) === 0))
      activeTrackColor_0 = MaterialTheme_getInstance().e93($composer_0, 6).s93();
    if (!(($default & 8) === 0)) {
      var tmp_1 = activeTrackColor_0;
      inactiveTrackColor_0 = Color__copy$default_impl_ectz3s(tmp_1, 0.24, 0.0, 0.0, 0.0, 14, null);
    }
    if (!(($default & 16) === 0)) {
      var tmp_2 = MaterialTheme_getInstance().e93($composer_0, 6).t93();
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
    $composer_0.d1b();
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
          list.a(tmp$ret$0);
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
    var coerced = coerceIn(value, valueRange.o1(), valueRange.m1());
    return progressSemantics(semantics$default(_this__u8e3s4, false, sliderSemantics$lambda(enabled, valueRange, steps, coerced, onValueChange, onValueChangeFinished), 1, null), value, valueRange, steps);
  }
  function scale(a1, b1, x1, a2, b2) {
    init_properties_Slider_kt_c4fg9z();
    return lerp(a2, b2, calcFraction(a1, b1, x1));
  }
  function _set_isDragging__1ociqq($this, _set____db54di) {
    var tmp0_setValue = isDragging$factory();
    return $this.b99_1.p11(_set____db54di);
  }
  function SliderDraggableState$dragScope$1(this$0) {
    this.e99_1 = this$0;
  }
  SliderDraggableState$dragScope$1.prototype.e7z = function (pixels) {
    return this.e99_1.a99_1(pixels);
  };
  SliderDraggableState$dragScope$1.$metadata$ = classMeta(undefined, [DragScope]);
  function SliderDraggableState$drag$slambda(this$0, $dragPriority, $block, resultContinuation) {
    this.n99_1 = this$0;
    this.o99_1 = $dragPriority;
    this.p99_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  SliderDraggableState$drag$slambda.prototype.e1w = function ($this$coroutineScope, $cont) {
    var tmp = this.f1w($this$coroutineScope, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  SliderDraggableState$drag$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  SliderDraggableState$drag$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            _set_isDragging__1ociqq(this.n99_1, true);
            this.zf_1 = 1;
            suspendResult = this.n99_1.d99_1.o7u(this.n99_1.c99_1, this.o99_1, this.p99_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            _set_isDragging__1ociqq(this.n99_1, false);
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
  SliderDraggableState$drag$slambda.prototype.f1w = function ($this$coroutineScope, completion) {
    var i = new SliderDraggableState$drag$slambda(this.n99_1, this.o99_1, this.p99_1, completion);
    i.q99_1 = $this$coroutineScope;
    return i;
  };
  SliderDraggableState$drag$slambda.$metadata$ = classMeta('SliderDraggableState$drag$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function SliderDraggableState$drag$slambda_0(this$0, $dragPriority, $block, resultContinuation) {
    var i = new SliderDraggableState$drag$slambda(this$0, $dragPriority, $block, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.e1w($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function SliderDraggableState(onDelta) {
    this.a99_1 = onDelta;
    var tmp = this;
    tmp.b99_1 = mutableStateOf$default(false, null, 2, null);
    var tmp_0 = this;
    tmp_0.c99_1 = new SliderDraggableState$dragScope$1(this);
    this.d99_1 = new MutatorMutex();
  }
  SliderDraggableState.prototype.r99 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = isDragging$factory_0();
    tmp$ret$0 = this.b99_1.i2();
    return tmp$ret$0;
  };
  SliderDraggableState.prototype.c7z = function (dragPriority, block, $cont) {
    return coroutineScope(SliderDraggableState$drag$slambda_0(this, dragPriority, block, null), $cont);
  };
  SliderDraggableState.$metadata$ = classMeta('SliderDraggableState', [DraggableState]);
  function CorrectValueSideEffect$composable(scaleToOffset, valueRange, trackRange, valueState, value, $composer, $changed) {
    init_properties_Slider_kt_c4fg9z();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(-442227575);
    sourceInformation($composer_0, 'C(CorrectValueSideEffect$composable)P(!1,3!1,4)913@36145L300,913@36134L311:Slider.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(scaleToOffset) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(valueRange) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.z1a(trackRange) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.z1a(valueState) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.o1n(value) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(-442227575, $changed, -1, 'androidx.compose.material.CorrectValueSideEffect$composable (Slider.kt:906)');
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var $composer_1 = tmp0_remember$composable;
      $composer_1.y1a(-1603429786);
      sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var indexedObject = [valueRange, scaleToOffset, value, valueState, trackRange];
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var key = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid = !!(invalid | $composer_1.z1a(key));
      }
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = invalid;
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.material.CorrectValueSideEffect$composable.<anonymous>' call
        tmp$ret$0 = CorrectValueSideEffect$composable$lambda_0(valueRange, scaleToOffset, value, valueState, trackRange);
        var value_0 = tmp$ret$0;
        tmp1_cache.b1b(value_0);
        tmp = value_0;
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
      SideEffect$composable(tmp$ret$4, $composer_0, 0);
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
      tmp0_safe_receiver.g1p(CorrectValueSideEffect$composable$lambda$ref(scaleToOffset, valueRange, trackRange, valueState, value, $changed));
    }
  }
  function snapValueToTick(current, tickFractions, minPx, maxPx) {
    init_properties_Slider_kt_c4fg9z();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.minByOrNull' call
      var iterator = tickFractions.c();
      if (!iterator.d()) {
        tmp$ret$0 = null;
        break $l$block_0;
      }
      var minElem = iterator.e();
      if (!iterator.d()) {
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
        var e = iterator.e();
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
       while (iterator.d());
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
    return draggableState.d7z(null, animateToTarget$slambda_0(current, target, velocity, null), $cont, 1, null);
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
    $composer_0 = $composer_0.z1n(-1582420307);
    sourceInformation($composer_0, 'C(SliderImpl$composable)P(1,4,5!1,6)662@27687L712:Slider.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.f1b(enabled) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.o1n(positionFraction) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.z1a(tickFractions) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.z1a(colors) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.o1n(width) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.z1a(interactionSource) ? 131072 : 65536);
    if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.z1a(modifier) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(-1582420307, $dirty, -1, 'androidx.compose.material.SliderImpl$composable (Slider.kt:653)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp0_Box$composable = modifier.y4e(get_DefaultSliderConstraints());
      var tmp1_Box$composable = null;
      var tmp2_Box$composable = false;
      var tmp3_Box$composable = $composer_0;
      var modifier_0 = tmp0_Box$composable;
      var contentAlignment = tmp1_Box$composable;
      var propagateMinConstraints = tmp2_Box$composable;
      var $composer_1 = tmp3_Box$composable;
      $composer_1.y1a(1330882304);
      sourceInformation($composer_1, 'C(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance();
      if (!(2 === 0))
        contentAlignment = Companion_getInstance_3().s4d_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 0);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp0_Layout$composable = modifier_0;
      var tmp1_Layout$composable = $composer_1;
      var tmp2_Layout$composable = 0;
      var modifier_1 = tmp0_Layout$composable;
      var $composer_2 = tmp1_Layout$composable;
      $composer_2.y1a(1725976829);
      sourceInformation($composer_2, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_2;
      var $composer_3 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_3, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_3.w1n(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_3);
      tmp$ret$0 = tmp0;
      var density = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua = $composer_2;
      var $composer_4 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_4.w1n(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_4);
      tmp$ret$1 = tmp0_0;
      var layoutDirection = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro = $composer_2;
      var $composer_5 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_5, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_5.w1n(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_5);
      tmp$ret$2 = tmp0_1;
      var viewConfiguration = tmp$ret$2;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_4().a5e_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_1);
      var tmp8_ReusableComposeNode$composable = $composer_2;
      var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
      var $composer_6 = tmp8_ReusableComposeNode$composable;
      var tmp = $composer_6.u1m();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_6.g1n();
      if ($composer_6.e1n()) {
        $composer_6.h1n(tmp6_ReusableComposeNode$composable);
      } else {
        $composer_6.j1n();
      }
      $composer_6.l1n();
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_6);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_4().e5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_4().d5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_4().f5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_4().g5e_1);
      $composer_6.m1n();
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_6.y1a(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp3__anonymous__ufb84q = $composer_6;
      var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_7 = tmp3__anonymous__ufb84q;
      $composer_7.y1a(-2137368960);
      sourceInformation($composer_7, 'C72@3384L9:Box.kt#2w3rfo');
      if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_7.l1m()) {
        // Inline function 'androidx.compose.material.SliderImpl$composable.<anonymous>' call
        var tmp4__anonymous__pkmkx7_0 = BoxScopeInstance_getInstance();
        var tmp5__anonymous__kpxxpo = $composer_7;
        var tmp6__anonymous__fv9ai5 = 6;
        var $composer_8 = tmp5__anonymous__kpxxpo;
        $composer_8.y1a(231316251);
        sourceInformation($composer_8, 'C*666@27847L7,675@28092L216,685@28317L76:Slider.kt#jmzs0o');
        var $dirty_0 = tmp6__anonymous__fv9ai5;
        if ((tmp6__anonymous__fv9ai5 & 14) === 0)
          $dirty_0 = $dirty_0 | ($composer_8.z1a(tmp4__anonymous__pkmkx7_0) ? 4 : 2);
        if (!(($dirty_0 & 91) === 18) ? true : !$composer_8.l1m()) {
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
          var tmp0_2 = $composer_9.w1n(tmp0_$get_current$$composable_h5ksy7_0);
          sourceInformationMarkerEnd($composer_9);
          tmp$ret$3 = tmp0_2;
          var tmp2_with = tmp$ret$3;
          // Inline function 'kotlin.contracts.contract' call
          trackStrokeWidth = tmp2_with.o2k(get_TrackHeight());
          thumbPx = tmp2_with.o2k(get_ThumbRadius());
          widthDp = tmp2_with.v2k(width);
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
          $composer_8.l1h();
        }
        $composer_8.d1b();
      } else {
        $composer_7.l1h();
      }
      $composer_7.d1b();
      $composer_6.d1b();
      $composer_6.k1n();
      $composer_2.d1b();
      $composer_1.d1b();
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
      tmp0_safe_receiver.g1p(SliderImpl$composable$lambda$ref(enabled, positionFraction, tickFractions, colors, width, interactionSource, modifier, $changed));
    }
  }
  function DefaultSliderColors(thumbColor, disabledThumbColor, activeTrackColor, inactiveTrackColor, disabledActiveTrackColor, disabledInactiveTrackColor, activeTickColor, inactiveTickColor, disabledActiveTickColor, disabledInactiveTickColor) {
    this.s99_1 = thumbColor;
    this.t99_1 = disabledThumbColor;
    this.u99_1 = activeTrackColor;
    this.v99_1 = inactiveTrackColor;
    this.w99_1 = disabledActiveTrackColor;
    this.x99_1 = disabledInactiveTrackColor;
    this.y99_1 = activeTickColor;
    this.z99_1 = inactiveTickColor;
    this.a9a_1 = disabledActiveTickColor;
    this.b9a_1 = disabledInactiveTickColor;
  }
  DefaultSliderColors.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof DefaultSliderColors)
      other;
    else
      THROW_CCE();
    if (!equals(this.s99_1, other.s99_1))
      return false;
    if (!equals(this.t99_1, other.t99_1))
      return false;
    if (!equals(this.u99_1, other.u99_1))
      return false;
    if (!equals(this.v99_1, other.v99_1))
      return false;
    if (!equals(this.w99_1, other.w99_1))
      return false;
    if (!equals(this.x99_1, other.x99_1))
      return false;
    if (!equals(this.y99_1, other.y99_1))
      return false;
    if (!equals(this.z99_1, other.z99_1))
      return false;
    if (!equals(this.a9a_1, other.a9a_1))
      return false;
    if (!equals(this.b9a_1, other.b9a_1))
      return false;
    return true;
  };
  DefaultSliderColors.prototype.hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.s99_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.t99_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.u99_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.v99_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.w99_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.x99_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.y99_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.z99_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.a9a_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.b9a_1) | 0;
    return result;
  };
  DefaultSliderColors.prototype.x98 = function (enabled, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(1275119697);
    sourceInformation($composer_0, 'C(thumbColor$composable)1163@45514L69:Slider.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(1275119697, $changed, -1, 'androidx.compose.material.DefaultSliderColors.thumbColor$composable (Slider.kt:1162)');
    }
    var tmp0 = rememberUpdatedState$composable(new Color(enabled ? this.s99_1 : this.t99_1), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0;
  };
  DefaultSliderColors.prototype.y98 = function (enabled, active, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(-335198892);
    sourceInformation($composer_0, 'C(trackColor$composable)P(1)1168@45701L247:Slider.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-335198892, $changed, -1, 'androidx.compose.material.DefaultSliderColors.trackColor$composable (Slider.kt:1167)');
    }
    var tmp;
    if (enabled) {
      tmp = active ? this.u99_1 : this.v99_1;
    } else {
      tmp = active ? this.w99_1 : this.x99_1;
    }
    var tmp0 = rememberUpdatedState$composable(new Color(tmp), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0;
  };
  DefaultSliderColors.prototype.z98 = function (enabled, active, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(1300482794);
    sourceInformation($composer_0, 'C(tickColor$composable)P(1)1179@46065L243:Slider.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(1300482794, $changed, -1, 'androidx.compose.material.DefaultSliderColors.tickColor$composable (Slider.kt:1178)');
    }
    var tmp;
    if (enabled) {
      tmp = active ? this.y99_1 : this.z99_1;
    } else {
      tmp = active ? this.a9a_1 : this.b9a_1;
    }
    var tmp0 = rememberUpdatedState$composable(new Color(tmp), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0;
  };
  DefaultSliderColors.$metadata$ = classMeta('DefaultSliderColors', [SliderColors]);
  function Track$composable(modifier, colors, enabled, positionFractionStart, positionFractionEnd, tickFractions, thumbPx, trackStrokeWidth, $composer, $changed) {
    init_properties_Slider_kt_c4fg9z();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(1812279743);
    sourceInformation($composer_0, 'C(Track$composable)P(2!2,4!1,6)814@32531L35,815@32601L34,816@32671L34,817@32739L33,818@32777L1514:Slider.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(modifier) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(colors) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.f1b(enabled) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.o1n(positionFractionStart) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.o1n(positionFractionEnd) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.z1a(tickFractions) ? 131072 : 65536);
    if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.o1n(thumbPx) ? 1048576 : 524288);
    if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.o1n(trackStrokeWidth) ? 8388608 : 4194304);
    if (!(($dirty & 23967451) === 4793490) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(1812279743, $dirty, -1, 'androidx.compose.material.Track$composable (Slider.kt:804)');
      }
      var inactiveTrackColor = colors.y98(enabled, false, $composer_0, 48 | 14 & $dirty >> 6 | 896 & $dirty << 3);
      var activeTrackColor = colors.y98(enabled, true, $composer_0, 48 | 14 & $dirty >> 6 | 896 & $dirty << 3);
      var inactiveTickColor = colors.z98(enabled, false, $composer_0, 48 | 14 & $dirty >> 6 | 896 & $dirty << 3);
      var activeTickColor = colors.z98(enabled, true, $composer_0, 48 | 14 & $dirty >> 6 | 896 & $dirty << 3);
      Canvas$composable(modifier, Track$composable$lambda_0(thumbPx, inactiveTrackColor, trackStrokeWidth, positionFractionEnd, positionFractionStart, activeTrackColor, tickFractions, inactiveTickColor, activeTickColor), $composer_0, 14 & $dirty);
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
      tmp0_safe_receiver.g1p(Track$composable$lambda$ref(modifier, colors, enabled, positionFractionStart, positionFractionEnd, tickFractions, thumbPx, trackStrokeWidth, $changed));
    }
  }
  function SliderThumb$composable(_this__u8e3s4, modifier, offset, interactionSource, colors, enabled, thumbSize, $composer, $changed) {
    init_properties_Slider_kt_c4fg9z();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(245963674);
    sourceInformation($composer_0, 'C(SliderThumb$composable)P(3,4:c#ui.unit.Dp,2!,5:c#ui.unit.Dp)766@30685L1553:Slider.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(_this__u8e3s4) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(modifier) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.o1n(_Dp___get_value__impl__geb1vb(offset)) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.z1a(interactionSource) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.z1a(colors) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.f1b(enabled) ? 131072 : 65536);
    if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.o1n(_Dp___get_value__impl__geb1vb(thumbSize)) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(245963674, $dirty, -1, 'androidx.compose.material.SliderThumb$composable (Slider.kt:758)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp = Companion_getInstance();
      var tmp0_Box$composable = _this__u8e3s4.c7d(padding$default(tmp, offset, null, null, null, 14, null), Companion_getInstance_3().v4d_1);
      var tmp1_Box$composable = null;
      var tmp2_Box$composable = false;
      var tmp3_Box$composable = $composer_0;
      var modifier_0 = tmp0_Box$composable;
      var contentAlignment = tmp1_Box$composable;
      var propagateMinConstraints = tmp2_Box$composable;
      var $composer_1 = tmp3_Box$composable;
      $composer_1.y1a(1330882304);
      sourceInformation($composer_1, 'C(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance();
      if (!(2 === 0))
        contentAlignment = Companion_getInstance_3().s4d_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 0);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp0_Layout$composable = modifier_0;
      var tmp1_Layout$composable = $composer_1;
      var tmp2_Layout$composable = 0;
      var modifier_1 = tmp0_Layout$composable;
      var $composer_2 = tmp1_Layout$composable;
      $composer_2.y1a(1725976829);
      sourceInformation($composer_2, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_2;
      var $composer_3 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_3, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_3.w1n(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_3);
      tmp$ret$0 = tmp0;
      var density = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua = $composer_2;
      var $composer_4 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_4.w1n(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_4);
      tmp$ret$1 = tmp0_0;
      var layoutDirection = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro = $composer_2;
      var $composer_5 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_5, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_5.w1n(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_5);
      tmp$ret$2 = tmp0_1;
      var viewConfiguration = tmp$ret$2;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_4().a5e_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_1);
      var tmp8_ReusableComposeNode$composable = $composer_2;
      var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
      var $composer_6 = tmp8_ReusableComposeNode$composable;
      var tmp_0 = $composer_6.u1m();
      if (!isInterface(tmp_0, Applier)) {
        invalidApplier();
      }
      $composer_6.g1n();
      if ($composer_6.e1n()) {
        $composer_6.h1n(tmp6_ReusableComposeNode$composable);
      } else {
        $composer_6.j1n();
      }
      $composer_6.l1n();
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_6);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_4().e5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_4().d5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_4().f5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_4().g5e_1);
      $composer_6.m1n();
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_6.y1a(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp3__anonymous__ufb84q = $composer_6;
      var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_7 = tmp3__anonymous__ufb84q;
      $composer_7.y1a(-2137368960);
      sourceInformation($composer_7, 'C72@3384L9:Box.kt#2w3rfo');
      if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_7.l1m()) {
        // Inline function 'androidx.compose.material.SliderThumb$composable.<anonymous>' call
        var tmp4__anonymous__pkmkx7_0 = BoxScopeInstance_getInstance();
        var tmp5__anonymous__kpxxpo = $composer_7;
        var tmp6__anonymous__fv9ai5 = 6;
        var $composer_8 = tmp5__anonymous__kpxxpo;
        $composer_8.y1a(-587645648);
        sourceInformation($composer_8, 'C770@30816L46,771@30905L658,771@30871L692,794@31919L59,798@32183L19,789@31725L507:Slider.kt#jmzs0o');
        if (!((tmp6__anonymous__fv9ai5 & 81) === 16) ? true : !$composer_8.l1m()) {
          var tmp$ret$7;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp0_remember$composable = $composer_8;
          var $composer_9 = tmp0_remember$composable;
          $composer_9.y1a(547886695);
          sourceInformation($composer_9, 'C(remember$composable):Composables.kt#9igjgp');
          var tmp$ret$6;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache = $composer_9;
          var tmp$ret$5;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp1_cache.a1b();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_1;
          if (false ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
            var tmp$ret$3;
            // Inline function 'androidx.compose.material.SliderThumb$composable.<anonymous>.<anonymous>' call
            tmp$ret$3 = mutableStateListOf();
            var value = tmp$ret$3;
            tmp1_cache.b1b(value);
            tmp_1 = value;
          } else {
            tmp_1 = tmp0_let;
          }
          tmp$ret$4 = tmp_1;
          tmp$ret$5 = tmp$ret$4;
          var tmp_2 = tmp$ret$5;
          tmp$ret$6 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
          var tmp0_2 = tmp$ret$6;
          $composer_9.d1b();
          tmp$ret$7 = tmp0_2;
          var interactions = tmp$ret$7;
          var tmp$ret$12;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp1_remember$composable = $composer_8;
          var tmp2_remember$composable = 14 & $dirty >> 9;
          var $composer_10 = tmp1_remember$composable;
          $composer_10.y1a(-1124426577);
          sourceInformation($composer_10, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
          var tmp$ret$11;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache_0 = $composer_10;
          var tmp2_cache = !!($composer_10.z1a(interactionSource) | $composer_10.z1a(interactions));
          var tmp$ret$10;
          // Inline function 'kotlin.let' call
          var tmp0_let_0 = tmp1_cache_0.a1b();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$9;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_3;
          if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_0().c1b_1) {
            var tmp$ret$8;
            // Inline function 'androidx.compose.material.SliderThumb$composable.<anonymous>.<anonymous>' call
            tmp$ret$8 = SliderThumb$composable$slambda_0(interactionSource, interactions, null);
            var value_0 = tmp$ret$8;
            tmp1_cache_0.b1b(value_0);
            tmp_3 = value_0;
          } else {
            tmp_3 = tmp0_let_0;
          }
          tmp$ret$9 = tmp_3;
          tmp$ret$10 = tmp$ret$9;
          var tmp_4 = tmp$ret$10;
          tmp$ret$11 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
          var tmp0_3 = tmp$ret$11;
          $composer_10.d1b();
          tmp$ret$12 = tmp0_3;
          LaunchedEffect$composable(interactionSource, tmp$ret$12, $composer_8, 14 & $dirty >> 9);
          var tmp_5;
          var tmp$ret$13;
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp$ret$13 = !interactions.h();
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
          Spacer$composable(background(shadow$default(tmp_9, tmp_11, tmp_12, false, null, null, 24, null), colors.x98(enabled, $composer_8, 14 & $dirty >> 15 | 112 & $dirty >> 9).i2().y3a_1, get_CircleShape()), $composer_8, 0);
        } else {
          $composer_8.l1h();
        }
        $composer_8.d1b();
      } else {
        $composer_7.l1h();
      }
      $composer_7.d1b();
      $composer_6.d1b();
      $composer_6.k1n();
      $composer_2.d1b();
      $composer_1.d1b();
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
      tmp0_safe_receiver.g1p(SliderThumb$composable$lambda$ref(_this__u8e3s4, modifier, offset, interactionSource, colors, enabled, thumbSize, $changed));
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
    return scale(minPx, maxPx, offset, valueRange._v.o1(), valueRange._v.m1());
  }
  function invoke$scaleToOffset(valueRange, minPx, maxPx, userValue) {
    return scale(valueRange._v.o1(), valueRange._v.m1(), userValue, minPx, maxPx);
  }
  function Slider$composable$lambda$lambda() {
    init_properties_Slider_kt_c4fg9z();
    return EmptyCoroutineContext_getInstance();
  }
  function Slider$composable$lambda$lambda_0($rawOffset, $pressOffset, $minPx, $maxPx, $onValueChangeState, $valueRange) {
    return function (it) {
      $rawOffset.p11($rawOffset.i2() + it + $pressOffset.i2());
      $pressOffset.p11(0.0);
      var offsetInTrack = coerceIn($rawOffset.i2(), $minPx, $maxPx);
      $onValueChangeState.i2()(invoke$scaleToUserValue($minPx, $maxPx, $valueRange, offsetInTrack));
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
    this.k9a_1 = $draggableState;
    this.l9a_1 = $current;
    this.m9a_1 = $target;
    this.n9a_1 = $velocity;
    this.o9a_1 = $onValueChangeFinished;
    CoroutineImpl.call(this, resultContinuation);
  }
  Slider$composable$lambda$lambda$slambda.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  Slider$composable$lambda$lambda$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  Slider$composable$lambda$lambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = animateToTarget(this.k9a_1, this.l9a_1, this.m9a_1, this.n9a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = this.o9a_1._v;
            if (tmp0_safe_receiver == null)
              null;
            else
              tmp0_safe_receiver();
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
  Slider$composable$lambda$lambda$slambda.prototype.f1w = function ($this$launch, completion) {
    var i = new Slider$composable$lambda$lambda$slambda(this.k9a_1, this.l9a_1, this.m9a_1, this.n9a_1, this.o9a_1, completion);
    i.p9a_1 = $this$launch;
    return i;
  };
  Slider$composable$lambda$lambda$slambda.$metadata$ = classMeta('Slider$composable$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Slider$composable$lambda$lambda$slambda_0($draggableState, $current, $target, $velocity, $onValueChangeFinished, resultContinuation) {
    var i = new Slider$composable$lambda$lambda$slambda($draggableState, $current, $target, $velocity, $onValueChangeFinished, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Slider$composable$lambda$lambda_1($rawOffset, $tickFractions, $minPx, $maxPx, $focusRequester, $scope, $draggableState, $onValueChangeFinished) {
    return function (velocity) {
      var current = $rawOffset.i2();
      var target = snapValueToTick(current, $tickFractions, $minPx, $maxPx);
      $focusRequester.w4k();
      var tmp;
      if (!(current === target)) {
        launch$default($scope, null, null, Slider$composable$lambda$lambda$slambda_0($draggableState, current, target, velocity, $onValueChangeFinished, null), 3, null);
        tmp = Unit_getInstance();
      } else if (!$draggableState.r99()) {
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
    this.y9a_1 = $gestureEndAction;
    CoroutineImpl.call(this, resultContinuation);
  }
  Slider$composable$lambda$slambda.prototype.k85 = function ($this$draggable, velocity, $cont) {
    var tmp = this.l85($this$draggable, velocity, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  Slider$composable$lambda$slambda.prototype.hh = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE();
    return this.k85(tmp, (!(p2 == null) ? typeof p2 === 'number' : false) ? p2 : THROW_CCE(), $cont);
  };
  Slider$composable$lambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          this.y9a_1.i2()(this.a9b_1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.cg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  Slider$composable$lambda$slambda.prototype.l85 = function ($this$draggable, velocity, completion) {
    var i = new Slider$composable$lambda$slambda(this.y9a_1, completion);
    i.z9a_1 = $this$draggable;
    i.a9b_1 = velocity;
    return i;
  };
  Slider$composable$lambda$slambda.$metadata$ = classMeta('Slider$composable$lambda$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function Slider$composable$lambda$slambda_0($gestureEndAction, resultContinuation) {
    var i = new Slider$composable$lambda$slambda($gestureEndAction, resultContinuation);
    var l = function ($this$draggable, velocity, $cont) {
      return i.k85($this$draggable, velocity, $cont);
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
        $dirty = $dirty | ($composer_0.z1a($this$BoxWithConstraints) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.l1m()) {
        if (isTraceInProgress()) {
          traceEventStart(2085116814, $changed, -1, 'androidx.compose.material.Slider$composable.<anonymous> (Slider.kt:188)');
        }
        var widthPx = _Constraints___get_maxWidth__impl__uuyqc($this$BoxWithConstraints.z6r());
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
        var tmp0 = $composer_1.w1n(tmp0_$get_current$$composable_h5ksy7);
        sourceInformationMarkerEnd($composer_1);
        tmp$ret$0 = tmp0;
        var tmp2_with = tmp$ret$0;
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = widthPx - tmp2_with.o2k(get_ThumbRadius());
        tmp$ret$1 = Math.max(tmp0_max, 0.0);
        maxPx = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'kotlin.math.min' call
        var tmp1_min = tmp2_with.o2k(get_ThumbRadius());
        tmp$ret$2 = Math.min(tmp1_min, maxPx);
        minPx = tmp$ret$2;
        tmp$ret$3 = Unit_getInstance();
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
        var tmp3_rememberCoroutineScope$composable = null;
        var tmp4_rememberCoroutineScope$composable = $composer_0;
        var getContext = {_v: tmp3_rememberCoroutineScope$composable};
        var $composer_2 = tmp4_rememberCoroutineScope$composable;
        $composer_2.y1a(102870005);
        sourceInformation($composer_2, 'C(rememberCoroutineScope$composable)476@19869L144:Effects.kt#9igjgp');
        if (!(1 === 0)) {
          getContext._v = Slider$composable$lambda$lambda;
        }
        var composer = $composer_2;
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_2;
        var $composer_3 = tmp0_remember$composable;
        $composer_3.y1a(547886695);
        sourceInformation($composer_3, 'C(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$7;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_3;
        var tmp$ret$6;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.a1b();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (false ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
          tmp$ret$4 = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
          var value = tmp$ret$4;
          tmp1_cache.b1b(value);
          tmp_1 = value;
        } else {
          tmp_1 = tmp0_let;
        }
        tmp$ret$5 = tmp_1;
        tmp$ret$6 = tmp$ret$5;
        var tmp_2 = tmp$ret$6;
        tmp$ret$7 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0_0 = tmp$ret$7;
        $composer_3.d1b();
        tmp$ret$8 = tmp0_0;
        var wrapper = tmp$ret$8;
        var tmp0_1 = wrapper.e1u_1;
        $composer_2.d1b();
        tmp$ret$9 = tmp0_1;
        var scope = tmp$ret$9;
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp5_remember$composable = $composer_0;
        var $composer_4 = tmp5_remember$composable;
        $composer_4.y1a(547886695);
        sourceInformation($composer_4, 'C(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_4;
        var tmp$ret$12;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.a1b();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_3;
        if (false ? true : tmp0_let_0 === Companion_getInstance_0().c1b_1) {
          var tmp$ret$10;
          // Inline function 'androidx.compose.material.Slider$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_4 = invoke$scaleToOffset($valueRange, minPx, maxPx, $value);
          tmp$ret$10 = mutableStateOf$default(tmp_4, null, 2, null);
          var value_0 = tmp$ret$10;
          tmp1_cache_0.b1b(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = tmp0_let_0;
        }
        tmp$ret$11 = tmp_3;
        tmp$ret$12 = tmp$ret$11;
        var tmp_5 = tmp$ret$12;
        tmp$ret$13 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        var tmp0_2 = tmp$ret$13;
        $composer_4.d1b();
        tmp$ret$14 = tmp0_2;
        var rawOffset = tmp$ret$14;
        var tmp$ret$19;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp6_remember$composable = $composer_0;
        var $composer_5 = tmp6_remember$composable;
        $composer_5.y1a(547886695);
        sourceInformation($composer_5, 'C(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$18;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_1 = $composer_5;
        var tmp$ret$17;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp1_cache_1.a1b();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_6;
        if (false ? true : tmp0_let_1 === Companion_getInstance_0().c1b_1) {
          var tmp$ret$15;
          // Inline function 'androidx.compose.material.Slider$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$15 = mutableStateOf$default(0.0, null, 2, null);
          var value_1 = tmp$ret$15;
          tmp1_cache_1.b1b(value_1);
          tmp_6 = value_1;
        } else {
          tmp_6 = tmp0_let_1;
        }
        tmp$ret$16 = tmp_6;
        tmp$ret$17 = tmp$ret$16;
        var tmp_7 = tmp$ret$17;
        tmp$ret$18 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
        var tmp0_3 = tmp$ret$18;
        $composer_5.d1b();
        tmp$ret$19 = tmp0_3;
        var pressOffset = tmp$ret$19;
        var tmp$ret$24;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp7_remember$composable = $valueRange._v;
        var tmp8_remember$composable = $composer_0;
        var tmp9_remember$composable = 896 & $$dirty >> 6;
        var $composer_6 = tmp8_remember$composable;
        $composer_6.y1a(-1058148781);
        sourceInformation($composer_6, 'C(remember$composable)P(1,2,3):Composables.kt#9igjgp');
        var tmp$ret$23;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_2 = $composer_6;
        var tmp2_cache = !!(!!($composer_6.z1a(minPx) | $composer_6.z1a(maxPx)) | $composer_6.z1a(tmp7_remember$composable));
        var tmp$ret$22;
        // Inline function 'kotlin.let' call
        var tmp0_let_2 = tmp1_cache_2.a1b();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$21;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_8;
        if (tmp2_cache ? true : tmp0_let_2 === Companion_getInstance_0().c1b_1) {
          var tmp$ret$20;
          // Inline function 'androidx.compose.material.Slider$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$20 = new SliderDraggableState(Slider$composable$lambda$lambda_0(rawOffset, pressOffset, minPx, maxPx, $onValueChangeState, $valueRange));
          var value_2 = tmp$ret$20;
          tmp1_cache_2.b1b(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = tmp0_let_2;
        }
        tmp$ret$21 = tmp_8;
        tmp$ret$22 = tmp$ret$21;
        var tmp_9 = tmp$ret$22;
        tmp$ret$23 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
        var tmp0_4 = tmp$ret$23;
        $composer_6.d1b();
        tmp$ret$24 = tmp0_4;
        var draggableState = tmp$ret$24;
        CorrectValueSideEffect$composable(Slider$composable$lambda$scaleToOffset$ref($valueRange, minPx, maxPx), $valueRange._v, rangeTo(minPx, maxPx), rawOffset, $value, $composer_0, 112 & $$dirty >> 9 | 57344 & $$dirty << 12);
        var gestureEndAction = rememberUpdatedState$composable(Slider$composable$lambda$lambda_1(rawOffset, $tickFractions, minPx, maxPx, $focusRequester, scope, draggableState, $onValueChangeFinished), $composer_0, 0);
        var press = sliderTapModifier(Companion_getInstance(), draggableState, $interactionSource._v, widthPx, $isRtl, rawOffset, gestureEndAction, pressOffset, $enabled._v);
        var tmp0_$receiver = Companion_getInstance();
        var tmp1_orientation = Orientation_Horizontal_getInstance();
        var tmp2_startDragImmediately = draggableState.r99();
        var tmp_10 = $enabled._v;
        var tmp_11 = $interactionSource._v;
        var tmp$ret$29;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp10_remember$composable = $composer_0;
        var $composer_7 = tmp10_remember$composable;
        $composer_7.y1a(-838505973);
        sourceInformation($composer_7, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$28;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_3 = $composer_7;
        var tmp2_cache_0 = $composer_7.z1a(gestureEndAction);
        var tmp$ret$27;
        // Inline function 'kotlin.let' call
        var tmp0_let_3 = tmp1_cache_3.a1b();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$26;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_12;
        if (tmp2_cache_0 ? true : tmp0_let_3 === Companion_getInstance_0().c1b_1) {
          var tmp$ret$25;
          // Inline function 'androidx.compose.material.Slider$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$25 = Slider$composable$lambda$slambda_0(gestureEndAction, null);
          var value_3 = tmp$ret$25;
          tmp1_cache_3.b1b(value_3);
          tmp_12 = value_3;
        } else {
          tmp_12 = tmp0_let_3;
        }
        tmp$ret$26 = tmp_12;
        tmp$ret$27 = tmp$ret$26;
        var tmp_13 = tmp$ret$27;
        tmp$ret$28 = (tmp_13 == null ? true : isObject(tmp_13)) ? tmp_13 : THROW_CCE();
        var tmp0_5 = tmp$ret$28;
        $composer_7.d1b();
        tmp$ret$29 = tmp0_5;
        var drag = draggable$default(tmp0_$receiver, draggableState, tmp1_orientation, tmp_10, tmp_11, tmp2_startDragImmediately, null, tmp$ret$29, $isRtl, 32, null);
        var coerced = coerceIn($value, $valueRange._v.o1(), $valueRange._v.m1());
        var fraction = calcFraction($valueRange._v.o1(), $valueRange._v.m1(), coerced);
        SliderImpl$composable($enabled._v, fraction, $tickFractions, $colors._v, maxPx - minPx, $interactionSource._v, press.y4e(drag), $composer_0, 14 & $$dirty >> 9 | 7168 & $$dirty >> 15 | 458752 & $$dirty >> 6);
        var tmp_14;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_14 = Unit_getInstance();
        }
        tmp_0 = tmp_14;
      } else {
        $composer_0.l1h();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.e2i(p0, p1, p2);
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
      if (!(get_type(it.r51_1) === Companion_getInstance_12().u51_1) ? true : !$enabled) {
        return false;
      }
      var tmp$ret$0;
      // Inline function 'kotlin.math.abs' call
      var tmp0_abs = $valueRange.m1() - $valueRange.o1();
      tmp$ret$0 = Math.abs(tmp0_abs);
      var rangeLength = tmp$ret$0;
      var actualSteps = $steps > 0 ? $steps + 1 | 0 : 100;
      var delta = rangeLength / actualSteps;
      var tmp_0;
      if (get_isDirectionUp(it.r51_1)) {
        $onValueChangeState.i2()(coerceIn_1($value + delta, $valueRange));
        tmp_0 = true;
      } else if (get_isDirectionDown(it.r51_1)) {
        $onValueChangeState.i2()(coerceIn_1($value - delta, $valueRange));
        tmp_0 = true;
      } else if (get_isDirectionRight(it.r51_1)) {
        var sign = $isRtl ? -1 : 1;
        $onValueChangeState.i2()(coerceIn_1($value + sign * delta, $valueRange));
        tmp_0 = true;
      } else if (get_isDirectionLeft(it.r51_1)) {
        var sign_0 = $isRtl ? -1 : 1;
        $onValueChangeState.i2()(coerceIn_1($value - sign_0 * delta, $valueRange));
        tmp_0 = true;
      } else if (get_isHome(it.r51_1)) {
        $onValueChangeState.i2()($valueRange.o1());
        tmp_0 = true;
      } else if (get_isMoveEnd(it.r51_1)) {
        $onValueChangeState.i2()($valueRange.m1());
        tmp_0 = true;
      } else if (get_isPgUp(it.r51_1)) {
        var page = coerceIn_0(actualSteps / 10 | 0, 1, 10);
        $onValueChangeState.i2()(coerceIn_1($value - page * delta, $valueRange));
        tmp_0 = true;
      } else if (get_isPgDn(it.r51_1)) {
        var page_0 = coerceIn_0(actualSteps / 10 | 0, 1, 10);
        $onValueChangeState.i2()(coerceIn_1($value + page_0 * delta, $valueRange));
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
      return tmp_0;
    };
  }
  function sliderSemantics$lambda$lambda($valueRange, $steps, $coerced, $onValueChange, $onValueChangeFinished) {
    return function (targetValue) {
      var newValue = coerceIn(targetValue, $valueRange.o1(), $valueRange.m1());
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
            var stepValue = lerp($valueRange.o1(), $valueRange.m1(), i / ($steps + 1 | 0));
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
      var error = ($valueRange.m1() - $valueRange.o1()) / 1000;
      var newOffset = $scaleToOffset($value);
      var tmp;
      var tmp$ret$0;
      // Inline function 'kotlin.math.abs' call
      var tmp0_abs = newOffset - $valueState.i2();
      tmp$ret$0 = Math.abs(tmp0_abs);
      if (tmp$ret$0 > error) {
        var tmp_0;
        if ($trackRange.g3($valueState.i2())) {
          $valueState.p11(newOffset);
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
      $this_drag.e7z($this$animateTo.i2() - $latestValue._v);
      $latestValue._v = $this$animateTo.i2();
      return Unit_getInstance();
    };
  }
  function animateToTarget$slambda($current, $target, $velocity, resultContinuation) {
    this.j9b_1 = $current;
    this.k9b_1 = $target;
    this.l9b_1 = $velocity;
    CoroutineImpl.call(this, resultContinuation);
  }
  animateToTarget$slambda.prototype.o86 = function ($this$drag, $cont) {
    var tmp = this.p86($this$drag, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  animateToTarget$slambda.prototype.jg = function (p1, $cont) {
    return this.o86((!(p1 == null) ? isInterface(p1, DragScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  animateToTarget$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.n9b_1 = {_v: this.j9b_1};
            this.zf_1 = 1;
            var tmp_0 = Animatable$default(this.j9b_1, 0.0, 2, null);
            var tmp_1 = get_SliderToTickAnimation();
            suspendResult = tmp_0.o6z(this.k9b_1, tmp_1, this.l9b_1, animateToTarget$slambda$lambda(this.m9b_1, this.n9b_1), this);
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
  animateToTarget$slambda.prototype.p86 = function ($this$drag, completion) {
    var i = new animateToTarget$slambda(this.j9b_1, this.k9b_1, this.l9b_1, completion);
    i.m9b_1 = $this$drag;
    return i;
  };
  animateToTarget$slambda.$metadata$ = classMeta('animateToTarget$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function animateToTarget$slambda_0($current, $target, $velocity, resultContinuation) {
    var i = new animateToTarget$slambda($current, $target, $velocity, resultContinuation);
    var l = function ($this$drag, $cont) {
      return i.o86($this$drag, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function sliderTapModifier$lambda($draggableState, $interactionSource, $maxPx, $isRtl, $rawOffset, $gestureEndAction, $pressOffset, $enabled) {
    return function ($this$null) {
      $this$null.e4h_1 = 'sliderTapModifier';
      $this$null.g4h_1.k4h('draggableState', $draggableState);
      $this$null.g4h_1.k4h('interactionSource', $interactionSource);
      $this$null.g4h_1.k4h('maxPx', $maxPx);
      $this$null.g4h_1.k4h('isRtl', $isRtl);
      $this$null.g4h_1.k4h('rawOffset', $rawOffset);
      $this$null.g4h_1.k4h('gestureEndAction', $gestureEndAction);
      $this$null.g4h_1.k4h('pressOffset', $pressOffset);
      $this$null.g4h_1.k4h('enabled', $enabled);
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
  sliderTapModifier$lambda$slambda$lambda$slambda$slambda.prototype.o86 = function ($this$drag, $cont) {
    var tmp = this.p86($this$drag, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  sliderTapModifier$lambda$slambda$lambda$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.o86((!(p1 == null) ? isInterface(p1, DragScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  sliderTapModifier$lambda$slambda$lambda$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          this.w9b_1.e7z(0.0);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.cg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  sliderTapModifier$lambda$slambda$lambda$slambda$slambda.prototype.p86 = function ($this$drag, completion) {
    var i = new sliderTapModifier$lambda$slambda$lambda$slambda$slambda(completion);
    i.w9b_1 = $this$drag;
    return i;
  };
  sliderTapModifier$lambda$slambda$lambda$slambda$slambda.$metadata$ = classMeta('sliderTapModifier$lambda$slambda$lambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function sliderTapModifier$lambda$slambda$lambda$slambda$slambda_0(resultContinuation) {
    var i = new sliderTapModifier$lambda$slambda$lambda$slambda$slambda(resultContinuation);
    var l = function ($this$drag, $cont) {
      return i.o86($this$drag, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function sliderTapModifier$lambda$slambda$slambda($isRtl, $maxPx, $pressOffset, $rawOffset, resultContinuation) {
    this.f9c_1 = $isRtl;
    this.g9c_1 = $maxPx;
    this.h9c_1 = $pressOffset;
    this.i9c_1 = $rawOffset;
    CoroutineImpl.call(this, resultContinuation);
  }
  sliderTapModifier$lambda$slambda$slambda.prototype.o7i = function ($this$detectTapGestures, pos, $cont) {
    var tmp = this.p7i($this$detectTapGestures, pos, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  sliderTapModifier$lambda$slambda$slambda.prototype.hh = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, PressGestureScope) : false) ? p1 : THROW_CCE();
    return this.o7i(tmp, p2 instanceof Offset_0 ? p2.s2i_1 : THROW_CCE(), $cont);
  };
  sliderTapModifier$lambda$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 4;
            this.l9c_1 = this.f9c_1 ? this.g9c_1 - _Offset___get_x__impl__xvi35n(this.k9c_1) : _Offset___get_x__impl__xvi35n(this.k9c_1);
            this.h9c_1.p11(this.l9c_1 - this.i9c_1.i2());
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = this.j9c_1.m8a(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ag_1 = 4;
            this.zf_1 = 3;
            continue $sm;
          case 2:
            this.ag_1 = 4;
            var tmp_0 = this.cg_1;
            if (tmp_0 instanceof GestureCancellationException) {
              var _ = this.cg_1;
              this.h9c_1.p11(0.0);
              this.zf_1 = 3;
              continue $sm;
            } else {
              throw this.cg_1;
            }

            break;
          case 3:
            this.ag_1 = 4;
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
  sliderTapModifier$lambda$slambda$slambda.prototype.p7i = function ($this$detectTapGestures, pos, completion) {
    var i = new sliderTapModifier$lambda$slambda$slambda(this.f9c_1, this.g9c_1, this.h9c_1, this.i9c_1, completion);
    i.j9c_1 = $this$detectTapGestures;
    i.k9c_1 = pos;
    return i;
  };
  sliderTapModifier$lambda$slambda$slambda.$metadata$ = classMeta('sliderTapModifier$lambda$slambda$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function sliderTapModifier$lambda$slambda$slambda_0($isRtl, $maxPx, $pressOffset, $rawOffset, resultContinuation) {
    var i = new sliderTapModifier$lambda$slambda$slambda($isRtl, $maxPx, $pressOffset, $rawOffset, resultContinuation);
    var l = function ($this$detectTapGestures, pos, $cont) {
      return i.o7i($this$detectTapGestures, pos.s2i_1, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function sliderTapModifier$lambda$slambda$lambda$slambda($draggableState, $gestureEndAction, resultContinuation) {
    this.u9c_1 = $draggableState;
    this.v9c_1 = $gestureEndAction;
    CoroutineImpl.call(this, resultContinuation);
  }
  sliderTapModifier$lambda$slambda$lambda$slambda.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  sliderTapModifier$lambda$slambda$lambda$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  sliderTapModifier$lambda$slambda$lambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            var tmp_0 = MutatePriority_UserInput_getInstance();
            suspendResult = this.u9c_1.c7z(tmp_0, sliderTapModifier$lambda$slambda$lambda$slambda$slambda_0(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.v9c_1.i2()(0.0);
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
  sliderTapModifier$lambda$slambda$lambda$slambda.prototype.f1w = function ($this$launch, completion) {
    var i = new sliderTapModifier$lambda$slambda$lambda$slambda(this.u9c_1, this.v9c_1, completion);
    i.w9c_1 = $this$launch;
    return i;
  };
  sliderTapModifier$lambda$slambda$lambda$slambda.$metadata$ = classMeta('sliderTapModifier$lambda$slambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function sliderTapModifier$lambda$slambda$lambda$slambda_0($draggableState, $gestureEndAction, resultContinuation) {
    var i = new sliderTapModifier$lambda$slambda$lambda$slambda($draggableState, $gestureEndAction, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
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
    this.f9d_1 = $isRtl;
    this.g9d_1 = $maxPx;
    this.h9d_1 = $pressOffset;
    this.i9d_1 = $rawOffset;
    this.j9d_1 = $scope;
    this.k9d_1 = $draggableState;
    this.l9d_1 = $gestureEndAction;
    CoroutineImpl.call(this, resultContinuation);
  }
  sliderTapModifier$lambda$slambda.prototype.s57 = function ($this$pointerInput, $cont) {
    var tmp = this.t57($this$pointerInput, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  sliderTapModifier$lambda$slambda.prototype.jg = function (p1, $cont) {
    return this.s57((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  sliderTapModifier$lambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            var tmp_0 = sliderTapModifier$lambda$slambda$slambda_0(this.f9d_1, this.g9d_1, this.h9d_1, this.i9d_1, null);
            suspendResult = detectTapGestures$default(this.m9d_1, null, null, tmp_0, sliderTapModifier$lambda$slambda$lambda(this.j9d_1, this.k9d_1, this.l9d_1), this, 3, null);
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
  sliderTapModifier$lambda$slambda.prototype.t57 = function ($this$pointerInput, completion) {
    var i = new sliderTapModifier$lambda$slambda(this.f9d_1, this.g9d_1, this.h9d_1, this.i9d_1, this.j9d_1, this.k9d_1, this.l9d_1, completion);
    i.m9d_1 = $this$pointerInput;
    return i;
  };
  sliderTapModifier$lambda$slambda.$metadata$ = classMeta('sliderTapModifier$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function sliderTapModifier$lambda$slambda_0($isRtl, $maxPx, $pressOffset, $rawOffset, $scope, $draggableState, $gestureEndAction, resultContinuation) {
    var i = new sliderTapModifier$lambda$slambda($isRtl, $maxPx, $pressOffset, $rawOffset, $scope, $draggableState, $gestureEndAction, resultContinuation);
    var l = function ($this$pointerInput, $cont) {
      return i.s57($this$pointerInput, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function sliderTapModifier$lambda_0($enabled, $draggableState, $interactionSource, $maxPx, $isRtl, $pressOffset, $rawOffset, $gestureEndAction) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.y1a(1945228890);
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
        $composer_1.y1a(102870005);
        sourceInformation($composer_1, 'C(rememberCoroutineScope$composable)476@19869L144:Effects.kt#9igjgp');
        if (!(1 === 0)) {
          getContext._v = sliderTapModifier$lambda$lambda;
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
        var tmp_1;
        if (false ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
          tmp$ret$0 = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
          var value = tmp$ret$0;
          tmp1_cache.b1b(value);
          tmp_1 = value;
        } else {
          tmp_1 = tmp0_let;
        }
        tmp$ret$1 = tmp_1;
        tmp$ret$2 = tmp$ret$1;
        var tmp_2 = tmp$ret$2;
        tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_2.d1b();
        tmp$ret$4 = tmp0;
        var wrapper = tmp$ret$4;
        var tmp0_0 = wrapper.e1u_1;
        $composer_1.d1b();
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
      $composer_0.d1b();
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
      var isRtl = $this$Canvas.y3k().equals(LayoutDirection_Rtl_getInstance());
      var sliderLeft = Offset($thumbPx, _Offset___get_y__impl__8bzhra($this$Canvas.q3l()));
      var sliderRight = Offset(_Size___get_width__impl__58y75t($this$Canvas.j3k()) - $thumbPx, _Offset___get_y__impl__8bzhra($this$Canvas.q3l()));
      var sliderStart = isRtl ? sliderRight : sliderLeft;
      var sliderEnd = isRtl ? sliderLeft : sliderRight;
      var tmp = $inactiveTrackColor.i2().y3a_1;
      var tmp_0 = Companion_getInstance_11().z3g_1;
      $this$Canvas.b3l(tmp, sliderStart, sliderEnd, $trackStrokeWidth, tmp_0, null, 0.0, null, null, 480, null);
      var sliderValueEnd = Offset(_Offset___get_x__impl__xvi35n(sliderStart) + (_Offset___get_x__impl__xvi35n(sliderEnd) - _Offset___get_x__impl__xvi35n(sliderStart)) * $positionFractionEnd, _Offset___get_y__impl__8bzhra($this$Canvas.q3l()));
      var sliderValueStart = Offset(_Offset___get_x__impl__xvi35n(sliderStart) + (_Offset___get_x__impl__xvi35n(sliderEnd) - _Offset___get_x__impl__xvi35n(sliderStart)) * $positionFractionStart, _Offset___get_y__impl__8bzhra($this$Canvas.q3l()));
      var tmp_1 = $activeTrackColor.i2().y3a_1;
      var tmp_2 = Companion_getInstance_11().z3g_1;
      $this$Canvas.b3l(tmp_1, sliderValueStart, sliderValueEnd, $trackStrokeWidth, tmp_2, null, 0.0, null, null, 480, null);
      var tmp$ret$4;
      // Inline function 'kotlin.collections.groupBy' call
      var tmp$ret$3;
      // Inline function 'kotlin.collections.groupByTo' call
      var tmp0_groupByTo = LinkedHashMap_init_$Create$();
      var tmp0_iterator = $tickFractions.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$0;
        // Inline function 'androidx.compose.material.Track$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = element > $positionFractionEnd ? true : element < $positionFractionStart;
        var key = tmp$ret$0;
        var tmp$ret$2;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = tmp0_groupByTo.v(key);
        var tmp_3;
        if (value == null) {
          var tmp$ret$1;
          // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
          tmp$ret$1 = ArrayList_init_$Create$_0();
          var answer = tmp$ret$1;
          tmp0_groupByTo.q(key, answer);
          tmp_3 = answer;
        } else {
          tmp_3 = value;
        }
        tmp$ret$2 = tmp_3;
        var list = tmp$ret$2;
        list.a(element);
      }
      tmp$ret$3 = tmp0_groupByTo;
      tmp$ret$4 = tmp$ret$3;
      var tmp0_forEach = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$5 = tmp0_forEach.z().c();
      var tmp0_iterator_0 = tmp$ret$5;
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        // Inline function 'androidx.compose.material.Track$composable.<anonymous>.<anonymous>' call
        var tmp$ret$6;
        // Inline function 'kotlin.collections.component1' call
        tmp$ret$6 = element_0.g2();
        var outsideFraction = tmp$ret$6;
        var tmp$ret$7;
        // Inline function 'kotlin.collections.component2' call
        tmp$ret$7 = element_0.i2();
        var list_0 = tmp$ret$7;
        var tmp$ret$10;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$9;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(list_0, 10));
        var tmp0_iterator_1 = list_0.c();
        while (tmp0_iterator_1.d()) {
          var item = tmp0_iterator_1.e();
          var tmp$ret$8;
          // Inline function 'androidx.compose.material.Track$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$8 = Offset(_Offset___get_x__impl__xvi35n(lerp_0(sliderStart, sliderEnd, item)), _Offset___get_y__impl__8bzhra($this$Canvas.q3l()));
          tmp0_mapTo.a(new Offset_0(tmp$ret$8));
        }
        tmp$ret$9 = tmp0_mapTo;
        tmp$ret$10 = tmp$ret$9;
        var tmp_4 = tmp$ret$10;
        var tmp_5 = Companion_getInstance_13().o3g_1;
        var tmp_6 = (outsideFraction ? $inactiveTickColor : $activeTickColor).i2().y3a_1;
        var tmp_7 = Companion_getInstance_11().z3g_1;
        $this$Canvas.o3l(tmp_4, tmp_5, tmp_6, $trackStrokeWidth, tmp_7, null, 0.0, null, null, 480, null);
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
    this.n9d_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_0.prototype.hz = function (value, $cont) {
    return this.n9d_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_0.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function SliderThumb$composable$slambda$slambda($interactions, resultContinuation) {
    this.w9d_1 = $interactions;
    CoroutineImpl.call(this, resultContinuation);
  }
  SliderThumb$composable$slambda$slambda.prototype.c7t = function (interaction, $cont) {
    var tmp = this.d7t(interaction, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  SliderThumb$composable$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.c7t((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $cont);
  };
  SliderThumb$composable$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          var tmp0_subject = this.x9d_1;
          if (tmp0_subject instanceof Press) {
            this.w9d_1.t1p(this.x9d_1);
          } else {
            if (tmp0_subject instanceof Release) {
              this.w9d_1.v20(this.x9d_1.u8l_1);
            } else {
              if (tmp0_subject instanceof Cancel) {
                this.w9d_1.v20(this.x9d_1.x8l_1);
              } else {
                if (tmp0_subject instanceof Start) {
                  this.w9d_1.t1p(this.x9d_1);
                } else {
                  if (tmp0_subject instanceof Stop) {
                    this.w9d_1.v20(this.x9d_1.k8j_1);
                  } else {
                    if (tmp0_subject instanceof Cancel_0) {
                      this.w9d_1.v20(this.x9d_1.m8j_1);
                    }
                  }
                }
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
  SliderThumb$composable$slambda$slambda.prototype.d7t = function (interaction, completion) {
    var i = new SliderThumb$composable$slambda$slambda(this.w9d_1, completion);
    i.x9d_1 = interaction;
    return i;
  };
  SliderThumb$composable$slambda$slambda.$metadata$ = classMeta('SliderThumb$composable$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function SliderThumb$composable$slambda$slambda_0($interactions, resultContinuation) {
    var i = new SliderThumb$composable$slambda$slambda($interactions, resultContinuation);
    var l = function (interaction, $cont) {
      return i.c7t(interaction, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function SliderThumb$composable$slambda($interactionSource, $interactions, resultContinuation) {
    this.g9e_1 = $interactionSource;
    this.h9e_1 = $interactions;
    CoroutineImpl.call(this, resultContinuation);
  }
  SliderThumb$composable$slambda.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  SliderThumb$composable$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  SliderThumb$composable$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            var tmp_0 = this.g9e_1.n7s();
            var tmp_1 = SliderThumb$composable$slambda$slambda_0(this.h9e_1, null);
            suspendResult = tmp_0.gz(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
  SliderThumb$composable$slambda.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new SliderThumb$composable$slambda(this.g9e_1, this.h9e_1, completion);
    i.i9e_1 = $this$LaunchedEffect;
    return i;
  };
  SliderThumb$composable$slambda.$metadata$ = classMeta('SliderThumb$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function SliderThumb$composable$slambda_0($interactionSource, $interactions, resultContinuation) {
    var i = new SliderThumb$composable$slambda($interactionSource, $interactions, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
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
      return receiver.r99();
    }, function (receiver, value) {
      return _set_isDragging__1ociqq(receiver, value);
    });
  }
  function isDragging$factory_0() {
    return getPropertyCallableRef('isDragging', 1, KMutableProperty1, function (receiver) {
      return receiver.r99();
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
  function Surface$composable(modifier, shape, color, contentColor, border, elevation, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var shape_0 = {_v: shape};
    var color_0 = {_v: new Color(color)};
    var contentColor_0 = {_v: new Color(contentColor)};
    var border_0 = {_v: border};
    var elevation_0 = {_v: new Dp(elevation)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(353896921);
    sourceInformation($composer_0, 'C(Surface$composable)P(5,6,1:c#ui.graphics.Color,3:c#ui.graphics.Color!1,4:c#ui.unit.Dp)106@5259L6,107@5301L22,*112@5476L7,113@5500L793:Surface.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(shape_0._v) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.p1n(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.y3a_1))) : false) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.p1n(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor_0._v.y3a_1))) : false) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.z1a(border_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.o1n(_Dp___get_value__impl__geb1vb(elevation_0._v.f2l_1)) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.z1a(content) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.l1m()) {
      $composer_0.y1m();
      if (($changed & 1) === 0 ? true : $composer_0.c1n()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 2) === 0)) {
          shape_0._v = get_RectangleShape();
        }
        if (!(($default & 4) === 0)) {
          color_0._v = new Color(MaterialTheme_getInstance().e93($composer_0, 6).u93());
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          contentColor_0._v = new Color(contentColorFor$composable(color_0._v.y3a_1, $composer_0, 14 & $dirty >> 6));
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
        $composer_0.l1h();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.z1m();
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
      var tmp0 = $composer_1.w1n(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$1 = tmp0.f2l_1;
      var tmp2_plus = tmp$ret$1;
      var tmp3_plus = elevation_0._v.f2l_1;
      tmp$ret$2 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp2_plus) + _Dp___get_value__impl__geb1vb(tmp3_plus));
      var absoluteElevation = tmp$ret$2;
      var tmp = [get_LocalContentColor().g1s(contentColor_0._v), get_LocalAbsoluteElevation().g1s(new Dp(absoluteElevation))];
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
      $composer_2.y1a(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2;
      var tmp2_cache = $composer_2.z1a(dispatchReceiver);
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
        var tmp$ret$3;
        // Inline function 'androidx.compose.material.Surface$composable.<anonymous>.<anonymous>' call
        tmp$ret$3 = ComposableLambda$invoke$ref_5(dispatchReceiver);
        var value = tmp$ret$3;
        tmp1_cache.b1b(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      tmp$ret$4 = tmp_1;
      tmp$ret$5 = tmp$ret$4;
      var tmp_2 = tmp$ret$5;
      tmp$ret$6 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0_0 = tmp$ret$6;
      $composer_2.d1b();
      tmp$ret$7 = tmp0_0;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      CompositionLocalProvider$composable(tmp, tmp$ret$9, $composer_0, 48);
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
      tmp0_safe_receiver.g1p(Surface$composable$lambda$ref(modifier_0, shape_0, color_0, contentColor_0, border_0, elevation_0, content, $changed, $default));
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
    $composer_0 = $composer_0.z1n(-1747901218);
    sourceInformation($composer_0, 'C(Surface$composable)P(8,7,5,9,1:c#ui.graphics.Color,3:c#ui.graphics.Color!1,4:c#ui.unit.Dp,6)213@10696L6,214@10738L22,217@10872L39,*220@11004L7,221@11028L1013:Surface.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(onClick) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.f1b(enabled_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.z1a(shape_0._v) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.p1n(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.y3a_1))) : false) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ((($default & 32) === 0 ? $composer_0.p1n(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor_0._v.y3a_1))) : false) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.z1a(border_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.o1n(_Dp___get_value__impl__geb1vb(elevation_0._v.f2l_1)) ? 8388608 : 4194304);
    if (($changed & 234881024) === 0)
      $dirty = $dirty | ((($default & 256) === 0 ? $composer_0.z1a(interactionSource_0._v) : false) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.z1a(content) ? 536870912 : 268435456);
    if (!(($dirty & 1533916891) === 306783378) ? true : !$composer_0.l1m()) {
      $composer_0.y1m();
      if (($changed & 1) === 0 ? true : $composer_0.c1n()) {
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
          color_0._v = new Color(MaterialTheme_getInstance().e93($composer_0, 6).u93());
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          contentColor_0._v = new Color(contentColorFor$composable(color_0._v.y3a_1, $composer_0, 14 & $dirty >> 12));
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
          $composer_1.y1a(547886695);
          sourceInformation($composer_1, 'C(remember$composable):Composables.kt#9igjgp');
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache = $composer_1;
          var tmp$ret$3;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp1_cache.a1b();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp;
          if (false ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
            var tmp$ret$1;
            // Inline function 'androidx.compose.material.Surface$composable.<anonymous>' call
            tmp$ret$1 = funMutableInteractionSource();
            var value = tmp$ret$1;
            tmp1_cache.b1b(value);
            tmp = value;
          } else {
            tmp = tmp0_let;
          }
          tmp$ret$2 = tmp;
          tmp$ret$3 = tmp$ret$2;
          var tmp_0 = tmp$ret$3;
          tmp$ret$4 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          var tmp0 = tmp$ret$4;
          $composer_1.d1b();
          tmp$ret$5 = tmp0;
          interactionSource_0._v = tmp$ret$5;
          $dirty = $dirty & -234881025;
        }
      } else {
        $composer_0.l1h();
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
        if (!(($default & 256) === 0))
          $dirty = $dirty & -234881025;
      }
      $composer_0.z1m();
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
      var tmp0_0 = $composer_2.w1n(tmp1_$get_current$$composable_gn3xww);
      sourceInformationMarkerEnd($composer_2);
      tmp$ret$6 = tmp0_0.f2l_1;
      var tmp3_plus = tmp$ret$6;
      var tmp4_plus = elevation_0._v.f2l_1;
      tmp$ret$7 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp3_plus) + _Dp___get_value__impl__geb1vb(tmp4_plus));
      var absoluteElevation = tmp$ret$7;
      var tmp_1 = [get_LocalContentColor().g1s(contentColor_0._v), get_LocalAbsoluteElevation().g1s(new Dp(absoluteElevation))];
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
      $composer_3.y1a(-838505973);
      sourceInformation($composer_3, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_3;
      var tmp2_cache = $composer_3.z1a(dispatchReceiver);
      var tmp$ret$10;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$8;
        // Inline function 'androidx.compose.material.Surface$composable.<anonymous>.<anonymous>' call
        tmp$ret$8 = ComposableLambda$invoke$ref_6(dispatchReceiver);
        var value_0 = tmp$ret$8;
        tmp1_cache_0.b1b(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = tmp0_let_0;
      }
      tmp$ret$9 = tmp_3;
      tmp$ret$10 = tmp$ret$9;
      var tmp_4 = tmp$ret$10;
      tmp$ret$11 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      var tmp0_1 = tmp$ret$11;
      $composer_3.d1b();
      tmp$ret$12 = tmp0_1;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      CompositionLocalProvider$composable(tmp_1, tmp$ret$14, $composer_0, 48);
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
      tmp0_safe_receiver.g1p(Surface$composable$lambda$ref_0(onClick, modifier_0, enabled_0, shape_0, color_0, contentColor_0, border_0, elevation_0, interactionSource_0, content, $changed, $default));
    }
  }
  function surface(_this__u8e3s4, shape, backgroundColor, border_0, elevation) {
    return clip(background(shadow$default(_this__u8e3s4, elevation, shape, false, null, null, 24, null).y4e(!(border_0 == null) ? border(Companion_getInstance(), border_0, shape) : Companion_getInstance()), backgroundColor, shape), shape);
  }
  function surfaceColorAtElevation$composable(color, elevationOverlay, absoluteElevation, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(-112085913);
    sourceInformation($composer_0, 'C(surfaceColorAtElevation$composable)P(1:c#ui.graphics.Color,2,0:c#ui.unit.Dp)637@31177L6,638@31248L31:Surface.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-112085913, $changed, -1, 'androidx.compose.material.surfaceColorAtElevation$composable (Surface.kt:632)');
    }
    var tmp;
    if (equals(color, MaterialTheme_getInstance().e93($composer_0, 6).u93()) ? !(elevationOverlay == null) : false) {
      tmp = elevationOverlay.l98(color, absoluteElevation, $composer_0, 14 & $changed | 112 & $changed >> 3 | 896 & $changed << 3);
    } else {
      tmp = color;
    }
    var tmp1_group = tmp;
    var tmp0 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0;
  }
  function Surface$composable$lambda($modifier, $shape, $color, $contentColor, $border, $elevation, $content, $$changed, $$default, $composer, $force) {
    return Surface$composable($modifier._v, $shape._v, $color._v.y3a_1, $contentColor._v.y3a_1, $border._v, $elevation._v.f2l_1, $content, $composer, $$changed | 1, $$default);
  }
  function Surface$composable$lambda_0($onClick, $modifier, $enabled, $shape, $color, $contentColor, $border, $elevation, $interactionSource, $content, $$changed, $$default, $composer, $force) {
    return Surface$composable_0($onClick, $modifier._v, $enabled._v, $shape._v, $color._v.y3a_1, $contentColor._v.y3a_1, $border._v, $elevation._v.f2l_1, $interactionSource._v, $content, $composer, $$changed | 1, $$default);
  }
  function Surface$composable$lambda$lambda($this$semantics) {
    return Unit_getInstance();
  }
  function Surface$composable$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  Surface$composable$lambda$slambda.prototype.s57 = function ($this$pointerInput, $cont) {
    var tmp = this.t57($this$pointerInput, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  Surface$composable$lambda$slambda.prototype.jg = function (p1, $cont) {
    return this.s57((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  Surface$composable$lambda$slambda.prototype.ig = function () {
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
  Surface$composable$lambda$slambda.prototype.t57 = function ($this$pointerInput, completion) {
    var i = new Surface$composable$lambda$slambda(completion);
    i.r9e_1 = $this$pointerInput;
    return i;
  };
  Surface$composable$lambda$slambda.$metadata$ = classMeta('Surface$composable$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Surface$composable$lambda$slambda_0(resultContinuation) {
    var i = new Surface$composable$lambda$slambda(resultContinuation);
    var l = function ($this$pointerInput, $cont) {
      return i.s57($this$pointerInput, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$composable$lambda_1($modifier, $shape, $color, $absoluteElevation, $$dirty, $border, $elevation, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C123@5914L7,121@5785L221,129@6158L2,130@6197L2,117@5649L638:Surface.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.l1m()) {
        if (isTraceInProgress()) {
          traceEventStart(-1822160838, $changed, -1, 'androidx.compose.material.Surface$composable.<anonymous> (Surface.kt:116)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp_0 = $modifier._v;
        var tmp_1 = $shape._v;
        var tmp_2 = $color._v.y3a_1;
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7 = get_LocalElevationOverlay();
        var tmp1_$get_current$$composable_gn3xww = $composer_0;
        var $composer_1 = tmp1_$get_current$$composable_gn3xww;
        sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_1.w1n(tmp0_$get_current$$composable_h5ksy7);
        sourceInformationMarkerEnd($composer_1);
        tmp$ret$0 = tmp0;
        var tmp_3 = surface(tmp_0, tmp_1, surfaceColorAtElevation$composable(tmp_2, tmp$ret$0, $absoluteElevation, $composer_0, 14 & $$dirty >> 6), $border._v, $elevation._v.f2l_1);
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp2_remember$composable = $composer_0;
        var $composer_2 = tmp2_remember$composable;
        $composer_2.y1a(547886695);
        sourceInformation($composer_2, 'C(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_2;
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.a1b();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (false ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
          var tmp$ret$1;
          // Inline function 'androidx.compose.material.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$1 = Surface$composable$lambda$lambda;
          var value = tmp$ret$1;
          tmp1_cache.b1b(value);
          tmp_4 = value;
        } else {
          tmp_4 = tmp0_let;
        }
        tmp$ret$2 = tmp_4;
        tmp$ret$3 = tmp$ret$2;
        var tmp_5 = tmp$ret$3;
        tmp$ret$4 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        var tmp0_0 = tmp$ret$4;
        $composer_2.d1b();
        tmp$ret$5 = tmp0_0;
        var tmp_6 = semantics(tmp_3, false, tmp$ret$5);
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_3 = tmp3_remember$composable;
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
        var tmp_7;
        if (false ? true : tmp0_let_0 === Companion_getInstance_0().c1b_1) {
          var tmp$ret$6;
          // Inline function 'androidx.compose.material.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$6 = Surface$composable$lambda$slambda_0(null);
          var value_0 = tmp$ret$6;
          tmp1_cache_0.b1b(value_0);
          tmp_7 = value_0;
        } else {
          tmp_7 = tmp0_let_0;
        }
        tmp$ret$7 = tmp_7;
        tmp$ret$8 = tmp$ret$7;
        var tmp_8 = tmp$ret$8;
        tmp$ret$9 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
        var tmp0_1 = tmp$ret$9;
        $composer_3.d1b();
        tmp$ret$10 = tmp0_1;
        var tmp4_Box$composable = pointerInput_0(tmp_6, Unit_getInstance(), tmp$ret$10);
        var tmp5_Box$composable = null;
        var tmp6_Box$composable = $composer_0;
        var modifier = tmp4_Box$composable;
        var contentAlignment = tmp5_Box$composable;
        var propagateMinConstraints = true;
        var $composer_4 = tmp6_Box$composable;
        $composer_4.y1a(1330882304);
        sourceInformation($composer_4, 'C(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance();
        if (!(2 === 0))
          contentAlignment = Companion_getInstance_3().s4d_1;
        if (!(0 === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_4, 48);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable = modifier;
        var tmp1_Layout$composable = $composer_4;
        var tmp2_Layout$composable = 0;
        var modifier_0 = tmp0_Layout$composable;
        var $composer_5 = tmp1_Layout$composable;
        $composer_5.y1a(1725976829);
        sourceInformation($composer_5, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7_0 = get_LocalDensity();
        var tmp1_$get_current$$composable_gn3xww_0 = $composer_5;
        var $composer_6 = tmp1_$get_current$$composable_gn3xww_0;
        sourceInformationMarkerStart($composer_6, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_2 = $composer_6.w1n(tmp0_$get_current$$composable_h5ksy7_0);
        sourceInformationMarkerEnd($composer_6);
        tmp$ret$11 = tmp0_2;
        var density = tmp$ret$11;
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
        var tmp3_$get_current$$composable_fm67ua = $composer_5;
        var $composer_7 = tmp3_$get_current$$composable_fm67ua;
        sourceInformationMarkerStart($composer_7, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_3 = $composer_7.w1n(tmp2_$get_current$$composable_g4n2vl);
        sourceInformationMarkerEnd($composer_7);
        tmp$ret$12 = tmp0_3;
        var layoutDirection = tmp$ret$12;
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
        var tmp5_$get_current$$composable_el8hro = $composer_5;
        var $composer_8 = tmp5_$get_current$$composable_el8hro;
        sourceInformationMarkerStart($composer_8, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_4 = $composer_8.w1n(tmp4_$get_current$$composable_f3pcsz);
        sourceInformationMarkerEnd($composer_8);
        tmp$ret$13 = tmp0_4;
        var viewConfiguration = tmp$ret$13;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp6_ReusableComposeNode$composable = Companion_getInstance_4().a5e_1;
        var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp8_ReusableComposeNode$composable = $composer_5;
        var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
        var $composer_9 = tmp8_ReusableComposeNode$composable;
        var tmp_9 = $composer_9.u1m();
        if (!isInterface(tmp_9, Applier)) {
          invalidApplier();
        }
        $composer_9.g1n();
        if ($composer_9.e1n()) {
          $composer_9.h1n(tmp6_ReusableComposeNode$composable);
        } else {
          $composer_9.j1n();
        }
        $composer_9.l1n();
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_9);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_4().e5e_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_4().d5e_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_4().f5e_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_4().g5e_1);
        $composer_9.m1n();
        tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_9)), $composer_9, 112 & tmp9_ReusableComposeNode$composable >> 3);
        $composer_9.y1a(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var tmp3__anonymous__ufb84q = $composer_9;
        var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
        var $composer_10 = tmp3__anonymous__ufb84q;
        $composer_10.y1a(-2137368960);
        sourceInformation($composer_10, 'C72@3384L9:Box.kt#2w3rfo');
        if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_10.l1m()) {
          // Inline function 'androidx.compose.material.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp7__anonymous__b0knam = BoxScopeInstance_getInstance();
          var tmp8__anonymous__65w033 = $composer_10;
          var tmp9__anonymous__1b7cvk = 6;
          var $composer_11 = tmp8__anonymous__65w033;
          $composer_11.y1a(1539610176);
          sourceInformation($composer_11, 'C133@6268L9:Surface.kt#jmzs0o');
          if (!((tmp9__anonymous__1b7cvk & 81) === 16) ? true : !$composer_11.l1m()) {
            $content($composer_11, 14 & $$dirty >> 18);
          } else {
            $composer_11.l1h();
          }
          $composer_11.d1b();
        } else {
          $composer_10.l1h();
        }
        $composer_10.d1b();
        $composer_9.d1b();
        $composer_9.k1n();
        $composer_5.d1b();
        $composer_4.d1b();
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_getInstance();
        }
        tmp = tmp_10;
      } else {
        $composer_0.l1h();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.j1m(p0, p1);
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
      if (!(($changed & 11) === 2) ? true : !$composer_0.l1m()) {
        if (isTraceInProgress()) {
          traceEventStart(2031491085, $changed, -1, 'androidx.compose.material.Surface$composable.<anonymous> (Surface.kt:224)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp_0 = minimumTouchTargetSize($modifier._v);
        var tmp_1 = $shape._v;
        var tmp_2 = $color._v.y3a_1;
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7 = get_LocalElevationOverlay();
        var tmp1_$get_current$$composable_gn3xww = $composer_0;
        var $composer_1 = tmp1_$get_current$$composable_gn3xww;
        sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_1.w1n(tmp0_$get_current$$composable_h5ksy7);
        sourceInformationMarkerEnd($composer_1);
        tmp$ret$0 = tmp0;
        var tmp_3 = surface(tmp_0, tmp_1, surfaceColorAtElevation$composable(tmp_2, tmp$ret$0, $absoluteElevation, $composer_0, 14 & $$dirty >> 12), $border._v, $elevation._v.f2l_1);
        var tmp_4 = $interactionSource._v;
        var tmp_5 = _Dp___init__impl__ms3zkb(0.0);
        var tmp_6 = rememberRipple$composable(false, tmp_5, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 7);
        var tmp_7 = $enabled._v;
        var tmp2_Box$composable = clickable$default(tmp_3, tmp_4, tmp_6, tmp_7, null, Companion_getInstance_9().v69_1, $onClick, 8, null);
        var tmp3_Box$composable = null;
        var tmp4_Box$composable = $composer_0;
        var modifier = tmp2_Box$composable;
        var contentAlignment = tmp3_Box$composable;
        var propagateMinConstraints = true;
        var $composer_2 = tmp4_Box$composable;
        $composer_2.y1a(1330882304);
        sourceInformation($composer_2, 'C(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance();
        if (!(2 === 0))
          contentAlignment = Companion_getInstance_3().s4d_1;
        if (!(0 === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_2, 48);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable = modifier;
        var tmp1_Layout$composable = $composer_2;
        var tmp2_Layout$composable = 0;
        var modifier_0 = tmp0_Layout$composable;
        var $composer_3 = tmp1_Layout$composable;
        $composer_3.y1a(1725976829);
        sourceInformation($composer_3, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7_0 = get_LocalDensity();
        var tmp1_$get_current$$composable_gn3xww_0 = $composer_3;
        var $composer_4 = tmp1_$get_current$$composable_gn3xww_0;
        sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_0 = $composer_4.w1n(tmp0_$get_current$$composable_h5ksy7_0);
        sourceInformationMarkerEnd($composer_4);
        tmp$ret$1 = tmp0_0;
        var density = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
        var tmp3_$get_current$$composable_fm67ua = $composer_3;
        var $composer_5 = tmp3_$get_current$$composable_fm67ua;
        sourceInformationMarkerStart($composer_5, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_1 = $composer_5.w1n(tmp2_$get_current$$composable_g4n2vl);
        sourceInformationMarkerEnd($composer_5);
        tmp$ret$2 = tmp0_1;
        var layoutDirection = tmp$ret$2;
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
        var tmp5_$get_current$$composable_el8hro = $composer_3;
        var $composer_6 = tmp5_$get_current$$composable_el8hro;
        sourceInformationMarkerStart($composer_6, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_2 = $composer_6.w1n(tmp4_$get_current$$composable_f3pcsz);
        sourceInformationMarkerEnd($composer_6);
        tmp$ret$3 = tmp0_2;
        var viewConfiguration = tmp$ret$3;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp6_ReusableComposeNode$composable = Companion_getInstance_4().a5e_1;
        var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp8_ReusableComposeNode$composable = $composer_3;
        var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
        var $composer_7 = tmp8_ReusableComposeNode$composable;
        var tmp_8 = $composer_7.u1m();
        if (!isInterface(tmp_8, Applier)) {
          invalidApplier();
        }
        $composer_7.g1n();
        if ($composer_7.e1n()) {
          $composer_7.h1n(tmp6_ReusableComposeNode$composable);
        } else {
          $composer_7.j1n();
        }
        $composer_7.l1n();
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_7);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_4().e5e_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_4().d5e_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_4().f5e_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_4().g5e_1);
        $composer_7.m1n();
        tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_7)), $composer_7, 112 & tmp9_ReusableComposeNode$composable >> 3);
        $composer_7.y1a(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var tmp3__anonymous__ufb84q = $composer_7;
        var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
        var $composer_8 = tmp3__anonymous__ufb84q;
        $composer_8.y1a(-2137368960);
        sourceInformation($composer_8, 'C72@3384L9:Box.kt#2w3rfo');
        if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_8.l1m()) {
          // Inline function 'androidx.compose.material.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp5__anonymous__kpxxpo = BoxScopeInstance_getInstance();
          var tmp6__anonymous__fv9ai5 = $composer_8;
          var tmp7__anonymous__b0knam = 6;
          var $composer_9 = tmp6__anonymous__fv9ai5;
          $composer_9.y1a(-390905273);
          sourceInformation($composer_9, 'C247@12016L9:Surface.kt#jmzs0o');
          if (!((tmp7__anonymous__b0knam & 81) === 16) ? true : !$composer_9.l1m()) {
            $content($composer_9, 14 & $$dirty >> 27);
          } else {
            $composer_9.l1h();
          }
          $composer_9.d1b();
        } else {
          $composer_8.l1h();
        }
        $composer_8.d1b();
        $composer_7.d1b();
        $composer_7.k1n();
        $composer_3.d1b();
        $composer_2.d1b();
        var tmp_9;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_9 = Unit_getInstance();
        }
        tmp = tmp_9;
      } else {
        $composer_0.l1h();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1) {
      return $boundThis.j1m(p0, p1);
    };
  }
  function Surface$composable$lambda$ref_0($onClick, $modifier, $enabled, $shape, $color, $contentColor, $border, $elevation, $interactionSource, $content, $$changed, $$default) {
    return function (p0, p1) {
      Surface$composable$lambda_0($onClick, $modifier, $enabled, $shape, $color, $contentColor, $border, $elevation, $interactionSource, $content, $$changed, $$default, p0, p1);
      return Unit_getInstance();
    };
  }
  function get_LocalTextStyle() {
    init_properties_Text_kt_pz5ql();
    return LocalTextStyle;
  }
  var LocalTextStyle;
  function ProvideTextStyle$composable(value, content, $composer, $changed) {
    init_properties_Text_kt_pz5ql();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(-1131319997);
    sourceInformation($composer_0, 'C(ProvideTextStyle$composable)P(1)263@12533L7,264@12558L80:Text.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(value) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(-1131319997, $dirty, -1, 'androidx.compose.material.ProvideTextStyle$composable (Text.kt:262)');
      }
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalTextStyle();
      var tmp1_$get_current$$composable_gn3xww = $composer_0;
      var $composer_1 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.w1n(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$0 = tmp0;
      var mergedStyle = tmp$ret$0.d40(value);
      CompositionLocalProvider$composable([get_LocalTextStyle().g1s(mergedStyle)], content, $composer_0, 112 & $dirty);
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
      tmp0_safe_receiver.g1p(ProvideTextStyle$composable$lambda$ref(value, content, $changed));
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
    $composer_0 = $composer_0.z1n(2085819656);
    sourceInformation($composer_0, 'C(Text$composable)P(13,8,0:c#ui.graphics.Color,2:c#ui.unit.TextUnit,3:c#ui.text.font.FontStyle,4!1,5:c#ui.unit.TextUnit,15,14:c#ui.text.style.TextAlign,6:c#ui.unit.TextUnit,10:c#ui.text.style.TextOverflow,11)105@5506L2,106@5548L7,129@6306L145:Text.kt#jmzs0o');
    var $dirty = $changed;
    var $dirty1 = $changed1;
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
      $dirty = $dirty | ($composer_0.p1n(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.y3a_1))) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.p1n(_TextUnit___get_packedValue__impl__it60w4(fontSize_0._v.z2l_1)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.z1a(fontStyle_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.z1a(fontWeight_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.z1a(fontFamily_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.p1n(_TextUnit___get_packedValue__impl__it60w4(letterSpacing_0._v.z2l_1)) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.z1a(textDecoration_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.z1a(textAlign_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.p1n(_TextUnit___get_packedValue__impl__it60w4(lineHeight_0._v.z2l_1)) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 112) === 0)
      $dirty1 = $dirty1 | ($composer_0.q1n(_TextOverflow___get_value__impl__vugm5i(overflow_0._v.f49_1)) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 896) === 0)
      $dirty1 = $dirty1 | ($composer_0.f1b(softWrap_0._v) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 7168) === 0)
      $dirty1 = $dirty1 | ($composer_0.q1n(maxLines_0._v) ? 2048 : 1024);
    if (($changed1 & 57344) === 0)
      $dirty1 = $dirty1 | ((($default & 16384) === 0 ? $composer_0.z1a(onTextLayout_0._v) : false) ? 16384 : 8192);
    if (($changed1 & 458752) === 0)
      $dirty1 = $dirty1 | ((($default & 32768) === 0 ? $composer_0.z1a(style_0._v) : false) ? 131072 : 65536);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 374491) === 74898)) ? true : !$composer_0.l1m()) {
      $composer_0.y1m();
      if (($changed & 1) === 0 ? true : $composer_0.c1n()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 4) === 0)) {
          color_0._v = new Color(Companion_getInstance_5().q3a_1);
        }
        if (!(($default & 8) === 0)) {
          fontSize_0._v = new TextUnit(Companion_getInstance_14().x2l_1);
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
          letterSpacing_0._v = new TextUnit(Companion_getInstance_14().x2l_1);
        }
        if (!(($default & 256) === 0)) {
          textDecoration_0._v = null;
        }
        if (!(($default & 512) === 0)) {
          textAlign_0._v = null;
        }
        if (!(($default & 1024) === 0)) {
          lineHeight_0._v = new TextUnit(Companion_getInstance_14().x2l_1);
        }
        if (!(($default & 2048) === 0)) {
          overflow_0._v = new TextOverflow(Companion_getInstance_15().w3z_1);
        }
        if (!(($default & 4096) === 0)) {
          softWrap_0._v = true;
        }
        if (!(($default & 8192) === 0)) {
          maxLines_0._v = IntCompanionObject_getInstance().c1_1;
        }
        if (!(($default & 16384) === 0)) {
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
          var tmp_1;
          if (false ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
            var tmp$ret$0;
            // Inline function 'androidx.compose.material.Text$composable.<anonymous>' call
            tmp$ret$0 = Text$composable$lambda_0;
            var value = tmp$ret$0;
            tmp1_cache.b1b(value);
            tmp_1 = value;
          } else {
            tmp_1 = tmp0_let;
          }
          tmp$ret$1 = tmp_1;
          tmp$ret$2 = tmp$ret$1;
          var tmp_2 = tmp$ret$2;
          tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
          var tmp0 = tmp$ret$3;
          $composer_1.d1b();
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
          var tmp0_0 = $composer_2.w1n(tmp1_$get_current$$composable_gn3xww);
          sourceInformationMarkerEnd($composer_2);
          tmp$ret$5 = tmp0_0;
          style_0._v = tmp$ret$5;
          $dirty1 = $dirty1 & -458753;
        }
      } else {
        $composer_0.l1h();
        if (!(($default & 16384) === 0))
          $dirty1 = $dirty1 & -57345;
        if (!(($default & 32768) === 0))
          $dirty1 = $dirty1 & -458753;
      }
      $composer_0.z1m();
      if (isTraceInProgress()) {
        traceEventStart(2085819656, $dirty, $dirty1, 'androidx.compose.material.Text$composable (Text.kt:90)');
      }
      $composer_0.y1a(1330678101);
      sourceInformation($composer_0, '*111@5663L7,111@5702L7');
      var tmp$ret$13;
      // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
      var tmp3_takeOrElse = color_0._v.y3a_1;
      var tmp_3;
      var tmp$ret$6;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      tmp$ret$6 = !equals(_Color___get_value__impl__1pls5m(tmp3_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance_5().q3a_1));
      if (tmp$ret$6) {
        tmp_3 = tmp3_takeOrElse;
      } else {
        var tmp$ret$12;
        // Inline function 'androidx.compose.material.Text$composable.<anonymous>' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
        var tmp0_takeOrElse = style_0._v.u3e();
        var tmp_4;
        var tmp$ret$7;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        tmp$ret$7 = !equals(_Color___get_value__impl__1pls5m(tmp0_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance_5().q3a_1));
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
          var tmp0_1 = $composer_3.w1n(tmp0_$get_current$$composable_h5ksy7);
          sourceInformationMarkerEnd($composer_3);
          tmp$ret$8 = tmp0_1.y3a_1;
          var tmp_5 = tmp$ret$8;
          var tmp$ret$9;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp2_$get_current$$composable_g4n2vl_0 = get_LocalContentAlpha();
          var tmp3_$get_current$$composable_fm67ua = $composer_0;
          var $composer_4 = tmp3_$get_current$$composable_fm67ua;
          sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_2 = $composer_4.w1n(tmp2_$get_current$$composable_g4n2vl_0);
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
      $composer_0.d1b();
      var textColor = tmp0_group_0;
      var tmp_7 = style_0._v;
      var tmp_8 = fontSize_0._v;
      var tmp_9 = tmp_8 == null ? null : tmp_8.z2l_1;
      var tmp_10 = fontWeight_0._v;
      var tmp_11 = fontStyle_0._v;
      var tmp_12 = tmp_11 == null ? null : tmp_11.x47_1;
      var tmp_13 = fontFamily_0._v;
      var tmp_14 = letterSpacing_0._v;
      var tmp_15 = tmp_14 == null ? null : tmp_14.z2l_1;
      var tmp_16 = textDecoration_0._v;
      var tmp_17 = textAlign_0._v;
      var tmp_18 = tmp_17 == null ? null : tmp_17.t48_1;
      var tmp_19 = lineHeight_0._v;
      var tmp_20 = tmp_19 == null ? null : tmp_19.z2l_1;
      var mergedStyle = tmp_7.d40(TextStyle_init_$Create$(textColor, tmp_9, tmp_10, tmp_12, null, tmp_13, null, tmp_15, null, null, null, null, tmp_16, null, tmp_18, null, tmp_20, null, 175952, null));
      BasicText$composable(text, modifier_0._v, mergedStyle, onTextLayout_0._v, overflow_0._v.f49_1, softWrap_0._v, maxLines_0._v, $composer_0, 14 & $dirty | 112 & $dirty | 7168 & $dirty1 >> 3 | 57344 & $dirty1 << 9 | 458752 & $dirty1 << 9 | 3670016 & $dirty1 << 9, 0);
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
      tmp1_safe_receiver.g1p(Text$composable$lambda$ref(text, modifier_0, color_0, fontSize_0, fontStyle_0, fontWeight_0, fontFamily_0, letterSpacing_0, textDecoration_0, textAlign_0, lineHeight_0, overflow_0, softWrap_0, maxLines_0, onTextLayout_0, style_0, $changed, $changed1, $default));
    }
  }
  function ProvideTextStyle$composable$lambda($value, $content, $$changed, $composer, $force) {
    return ProvideTextStyle$composable($value, $content, $composer, $$changed | 1);
  }
  function Text$composable$lambda($text, $modifier, $color, $fontSize, $fontStyle, $fontWeight, $fontFamily, $letterSpacing, $textDecoration, $textAlign, $lineHeight, $overflow, $softWrap, $maxLines, $onTextLayout, $style, $$changed, $$changed1, $$default, $composer, $force) {
    var tmp = $modifier._v;
    var tmp_0 = $color._v.y3a_1;
    var tmp_1 = $fontSize._v.z2l_1;
    var tmp_2 = $fontStyle._v;
    var tmp_3 = tmp_2 == null ? null : tmp_2.x47_1;
    var tmp_4 = $fontWeight._v;
    var tmp_5 = $fontFamily._v;
    var tmp_6 = $letterSpacing._v.z2l_1;
    var tmp_7 = $textDecoration._v;
    var tmp_8 = $textAlign._v;
    return Text$composable($text, tmp, tmp_0, tmp_1, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8 == null ? null : tmp_8.t48_1, $lineHeight._v.z2l_1, $overflow._v.f49_1, $softWrap._v, $maxLines._v, $onTextLayout._v, $style._v, $composer, $$changed | 1, $$changed1, $$default);
  }
  function LocalTextStyle$lambda() {
    init_properties_Text_kt_pz5ql();
    return Companion_getInstance_16().b40_1;
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
      var tmp0_roundToInt = ($width - $placeable.h4i_1 | 0) / 2.0;
      tmp$ret$0 = roundToInt(tmp0_roundToInt);
      var centerX = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp1_roundToInt = ($height - $placeable.i4i_1 | 0) / 2.0;
      tmp$ret$1 = roundToInt(tmp1_roundToInt);
      var centerY = tmp$ret$1;
      $this$layout.l5g($placeable, centerX, centerY, 0.0, 4, null);
      return Unit_getInstance();
    };
  }
  function MinimumTouchTargetModifier(size) {
    this.s9e_1 = size;
  }
  MinimumTouchTargetModifier.prototype.f4i = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.g4i(constraints);
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = placeable.h4i_1;
    var tmp1_maxOf = _this__u8e3s4.p2k(_DpSize___get_width__impl__o3d5gt(this.s9e_1));
    tmp$ret$0 = Math.max(tmp0_maxOf, tmp1_maxOf);
    var width = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp2_maxOf = placeable.i4i_1;
    var tmp3_maxOf = _this__u8e3s4.p2k(_DpSize___get_height__impl__5xueo2(this.s9e_1));
    tmp$ret$1 = Math.max(tmp2_maxOf, tmp3_maxOf);
    var height = tmp$ret$1;
    return _this__u8e3s4.m4i(width, height, null, MinimumTouchTargetModifier$measure$lambda(width, placeable, height), 4, null);
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
    return equals(this.s9e_1, otherModifier.s9e_1);
  };
  MinimumTouchTargetModifier.prototype.hashCode = function () {
    return DpSize__hashCode_impl_jvpgaj(this.s9e_1);
  };
  MinimumTouchTargetModifier.$metadata$ = classMeta('MinimumTouchTargetModifier', [LayoutModifier]);
  function LocalMinimumTouchTargetEnforcement$lambda() {
    init_properties_TouchTarget_kt_w7dv5o();
    return true;
  }
  function minimumTouchTargetSize$lambda($this$null) {
    init_properties_TouchTarget_kt_w7dv5o();
    // Inline function 'androidx.compose.material.minimumTouchTargetSize.<anonymous>' call
    $this$null.e4h_1 = 'minimumTouchTargetSize';
    $this$null.g4h_1.k4h('README', 'Adds outer padding to measure at least 48.dp (default) in size to disambiguate touch interactions if the element would measure smaller');
    return Unit_getInstance();
  }
  function minimumTouchTargetSize$lambda_0($this$composed, $composer, $changed) {
    init_properties_TouchTarget_kt_w7dv5o();
    var $composer_0 = $composer;
    $composer_0.y1a(1220403677);
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
    var tmp0 = $composer_1.w1n(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    if (tmp$ret$0) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalViewConfiguration();
      var tmp3_$get_current$$composable_fm67ua = $composer_0;
      var $composer_2 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_2, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.w1n(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_2);
      tmp$ret$1 = tmp0_0;
      var size = tmp$ret$1.i5b();
      tmp = new MinimumTouchTargetModifier(size);
    } else {
      tmp = Companion_getInstance();
    }
    var tmp1_group = tmp;
    var tmp0_1 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
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
  function Typography_init_$Init$_0(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      defaultFontFamily = Companion_getInstance_17().f3y_1;
    if (!(($mask0 & 2) === 0)) {
      var tmp0_fontWeight = Companion_getInstance_18().r3x_1;
      var tmp1_fontSize = get_sp(96);
      var tmp2_letterSpacing = get_sp_0(-1.5);
      h1 = TextStyle_init_$Create$(null, tmp1_fontSize, tmp0_fontWeight, null, null, null, null, tmp2_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 4) === 0)) {
      var tmp3_fontWeight = Companion_getInstance_18().r3x_1;
      var tmp4_fontSize = get_sp(60);
      var tmp5_letterSpacing = get_sp_0(-0.5);
      h2 = TextStyle_init_$Create$(null, tmp4_fontSize, tmp3_fontWeight, null, null, null, null, tmp5_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 8) === 0)) {
      var tmp6_fontWeight = Companion_getInstance_18().s3x_1;
      var tmp7_fontSize = get_sp(48);
      var tmp8_letterSpacing = get_sp(0);
      h3 = TextStyle_init_$Create$(null, tmp7_fontSize, tmp6_fontWeight, null, null, null, null, tmp8_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 16) === 0)) {
      var tmp9_fontWeight = Companion_getInstance_18().s3x_1;
      var tmp10_fontSize = get_sp(34);
      var tmp11_letterSpacing = get_sp_0(0.25);
      h4 = TextStyle_init_$Create$(null, tmp10_fontSize, tmp9_fontWeight, null, null, null, null, tmp11_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 32) === 0)) {
      var tmp12_fontWeight = Companion_getInstance_18().s3x_1;
      var tmp13_fontSize = get_sp(24);
      var tmp14_letterSpacing = get_sp(0);
      h5 = TextStyle_init_$Create$(null, tmp13_fontSize, tmp12_fontWeight, null, null, null, null, tmp14_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 64) === 0)) {
      var tmp15_fontWeight = Companion_getInstance_18().t3x_1;
      var tmp16_fontSize = get_sp(20);
      var tmp17_letterSpacing = get_sp_0(0.15);
      h6 = TextStyle_init_$Create$(null, tmp16_fontSize, tmp15_fontWeight, null, null, null, null, tmp17_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 128) === 0)) {
      var tmp18_fontWeight = Companion_getInstance_18().s3x_1;
      var tmp19_fontSize = get_sp(16);
      var tmp20_letterSpacing = get_sp_0(0.15);
      subtitle1 = TextStyle_init_$Create$(null, tmp19_fontSize, tmp18_fontWeight, null, null, null, null, tmp20_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 256) === 0)) {
      var tmp21_fontWeight = Companion_getInstance_18().t3x_1;
      var tmp22_fontSize = get_sp(14);
      var tmp23_letterSpacing = get_sp_0(0.1);
      subtitle2 = TextStyle_init_$Create$(null, tmp22_fontSize, tmp21_fontWeight, null, null, null, null, tmp23_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 512) === 0)) {
      var tmp24_fontWeight = Companion_getInstance_18().s3x_1;
      var tmp25_fontSize = get_sp(16);
      var tmp26_letterSpacing = get_sp_0(0.5);
      body1 = TextStyle_init_$Create$(null, tmp25_fontSize, tmp24_fontWeight, null, null, null, null, tmp26_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 1024) === 0)) {
      var tmp27_fontWeight = Companion_getInstance_18().s3x_1;
      var tmp28_fontSize = get_sp(14);
      var tmp29_letterSpacing = get_sp_0(0.25);
      body2 = TextStyle_init_$Create$(null, tmp28_fontSize, tmp27_fontWeight, null, null, null, null, tmp29_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 2048) === 0)) {
      var tmp30_fontWeight = Companion_getInstance_18().t3x_1;
      var tmp31_fontSize = get_sp(14);
      var tmp32_letterSpacing = get_sp_0(1.25);
      button = TextStyle_init_$Create$(null, tmp31_fontSize, tmp30_fontWeight, null, null, null, null, tmp32_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 4096) === 0)) {
      var tmp33_fontWeight = Companion_getInstance_18().s3x_1;
      var tmp34_fontSize = get_sp(12);
      var tmp35_letterSpacing = get_sp_0(0.4);
      caption = TextStyle_init_$Create$(null, tmp34_fontSize, tmp33_fontWeight, null, null, null, null, tmp35_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 8192) === 0)) {
      var tmp36_fontWeight = Companion_getInstance_18().s3x_1;
      var tmp37_fontSize = get_sp(10);
      var tmp38_letterSpacing = get_sp_0(1.5);
      overline = TextStyle_init_$Create$(null, tmp37_fontSize, tmp36_fontWeight, null, null, null, null, tmp38_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    Typography_init_$Init$(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, $this);
    return $this;
  }
  function Typography_init_$Create$(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, $mask0, $marker) {
    return Typography_init_$Init$_0(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, $mask0, $marker, Object.create(Typography.prototype));
  }
  function Typography(h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline) {
    this.c96_1 = h1;
    this.d96_1 = h2;
    this.e96_1 = h3;
    this.f96_1 = h4;
    this.g96_1 = h5;
    this.h96_1 = h6;
    this.i96_1 = subtitle1;
    this.j96_1 = subtitle2;
    this.k96_1 = body1;
    this.l96_1 = body2;
    this.m96_1 = button;
    this.n96_1 = caption;
    this.o96_1 = overline;
  }
  Typography.prototype.t9e = function () {
    return this.k96_1;
  };
  Typography.prototype.u9e = function () {
    return this.m96_1;
  };
  Typography.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Typography))
      return false;
    if (!this.c96_1.equals(other.c96_1))
      return false;
    if (!this.d96_1.equals(other.d96_1))
      return false;
    if (!this.e96_1.equals(other.e96_1))
      return false;
    if (!this.f96_1.equals(other.f96_1))
      return false;
    if (!this.g96_1.equals(other.g96_1))
      return false;
    if (!this.h96_1.equals(other.h96_1))
      return false;
    if (!this.i96_1.equals(other.i96_1))
      return false;
    if (!this.j96_1.equals(other.j96_1))
      return false;
    if (!this.k96_1.equals(other.k96_1))
      return false;
    if (!this.l96_1.equals(other.l96_1))
      return false;
    if (!this.m96_1.equals(other.m96_1))
      return false;
    if (!this.n96_1.equals(other.n96_1))
      return false;
    if (!this.o96_1.equals(other.o96_1))
      return false;
    return true;
  };
  Typography.prototype.hashCode = function () {
    var result = this.c96_1.hashCode();
    result = imul(31, result) + this.d96_1.hashCode() | 0;
    result = imul(31, result) + this.e96_1.hashCode() | 0;
    result = imul(31, result) + this.f96_1.hashCode() | 0;
    result = imul(31, result) + this.g96_1.hashCode() | 0;
    result = imul(31, result) + this.h96_1.hashCode() | 0;
    result = imul(31, result) + this.i96_1.hashCode() | 0;
    result = imul(31, result) + this.j96_1.hashCode() | 0;
    result = imul(31, result) + this.k96_1.hashCode() | 0;
    result = imul(31, result) + this.l96_1.hashCode() | 0;
    result = imul(31, result) + this.m96_1.hashCode() | 0;
    result = imul(31, result) + this.n96_1.hashCode() | 0;
    result = imul(31, result) + this.o96_1.hashCode() | 0;
    return result;
  };
  Typography.prototype.toString = function () {
    return 'Typography(h1=' + this.c96_1 + ', h2=' + this.d96_1 + ', h3=' + this.e96_1 + ', h4=' + this.f96_1 + ', h5=' + this.g96_1 + ', h6=' + this.h96_1 + ', ' + ('subtitle1=' + this.i96_1 + ', subtitle2=' + this.j96_1 + ', body1=' + this.k96_1 + ', ') + ('body2=' + this.l96_1 + ', button=' + this.m96_1 + ', caption=' + this.n96_1 + ', overline=' + this.o96_1 + ')');
  };
  Typography.$metadata$ = classMeta('Typography');
  function withDefaultFontFamily(_this__u8e3s4, default_0) {
    init_properties_Typography_kt_c4b2d1();
    var tmp;
    if (!(_this__u8e3s4.m40() == null)) {
      tmp = _this__u8e3s4;
    } else {
      tmp = _this__u8e3s4.i40(null, null, null, null, null, default_0, null, null, null, null, null, null, null, null, null, null, null, null, 262111, null);
    }
    return tmp;
  }
  function LocalTypography$lambda() {
    init_properties_Typography_kt_c4b2d1();
    return Typography_init_$Create$(null, null, null, null, null, null, null, null, null, null, null, null, null, null, 16383, null);
  }
  var properties_initialized_Typography_kt_bpd27j;
  function init_properties_Typography_kt_c4b2d1() {
    if (properties_initialized_Typography_kt_bpd27j) {
    } else {
      properties_initialized_Typography_kt_bpd27j = true;
      LocalTypography = staticCompositionLocalOf(LocalTypography$lambda);
    }
  }
  function PlatformMaterialTheme$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(1609905806);
    sourceInformation($composer_0, 'C(PlatformMaterialTheme$composable)27@1085L6,28@1140L6,29@1217L6,25@958L338:MaterialTheme.js.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(1609905806, $dirty, -1, 'androidx.compose.material.PlatformMaterialTheme$composable (MaterialTheme.js.kt:24)');
      }
      var tmp = get_LocalScrollbarStyle();
      var tmp_0 = defaultScrollbarStyle();
      var tmp_1 = MaterialTheme_getInstance().j92($composer_0, 6).f92_1;
      var tmp_2 = MaterialTheme_getInstance().e93($composer_0, 6).t93();
      var tmp_3 = Color__copy$default_impl_ectz3s(tmp_2, 0.12, 0.0, 0.0, 0.0, 14, null);
      var tmp_4 = MaterialTheme_getInstance().e93($composer_0, 6).t93();
      CompositionLocalProvider$composable([tmp.g1s(tmp_0.c8u(null, null, tmp_1, 0, tmp_3, Color__copy$default_impl_ectz3s(tmp_4, 0.5, 0.0, 0.0, 0.0, 14, null), 11, null))], content, $composer_0, 112 & $dirty << 3);
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
      tmp0_safe_receiver.g1p(PlatformMaterialTheme$composable$lambda$ref(content, $changed));
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
      DIRECTION_UP_KEY_CODE = toLong(SkikoKey_KEY_UP_getInstance().v34_1);
      DIRECTION_DOWN_KEY_CODE = toLong(SkikoKey_KEY_DOWN_getInstance().v34_1);
      DIRECTION_LEFT_KEY_CODE = toLong(SkikoKey_KEY_LEFT_getInstance().v34_1);
      DIRECTION_RIGHT_KEY_CODE = toLong(SkikoKey_KEY_RIGHT_getInstance().v34_1);
      HOME_KEY_CODE = toLong(SkikoKey_KEY_HOME_getInstance().v34_1);
      END_KEY_CODE = toLong(SkikoKey_KEY_END_getInstance().v34_1);
      PG_UP_KEY_CODE = toLong(SkikoKey_KEY_PGUP_getInstance().v34_1);
      PG_DN_KEY_CODE = toLong(SkikoKey_KEY_PGDOWN_getInstance().v34_1);
    }
  }
  //region block: post-declaration
  SliderDraggableState.prototype.d7z = drag$default;
  MinimumTouchTargetModifier.prototype.x4e = foldIn;
  MinimumTouchTargetModifier.prototype.w4e = all;
  MinimumTouchTargetModifier.prototype.y4e = then;
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
  _.$_$.p = Typography_init_$Create$;
  _.$_$.q = ButtonDefaults_getInstance;
  _.$_$.r = MaterialTheme_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-material.js.map
