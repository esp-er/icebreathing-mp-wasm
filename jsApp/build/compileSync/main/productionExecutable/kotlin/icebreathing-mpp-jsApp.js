(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui-graphics.js', './androidx-runtime.js', './androidx-ui.js', './androidx-material.js', './androidx-ui-unit.js', './androidx-animation-core.js', './androidx-foundation.js', './androidx-foundation-layout.js', './androidx-ui-text.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './androidx-animation.js', './androidx-ui-geometry.js', './androidx-runtime-saveable.js', './androidx-material-icons-core.js', './androidx-material-icons-extended.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui-graphics.js'), require('./androidx-runtime.js'), require('./androidx-ui.js'), require('./androidx-material.js'), require('./androidx-ui-unit.js'), require('./androidx-animation-core.js'), require('./androidx-foundation.js'), require('./androidx-foundation-layout.js'), require('./androidx-ui-text.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./androidx-animation.js'), require('./androidx-ui-geometry.js'), require('./androidx-runtime-saveable.js'), require('./androidx-material-icons-core.js'), require('./androidx-material-icons-extended.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'icebreathing-mpp-jsApp'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'icebreathing-mpp-jsApp'.");
    }
    if (typeof this['androidx-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'icebreathing-mpp-jsApp'. Its dependency 'androidx-ui-graphics' was not found. Please, check whether 'androidx-ui-graphics' is loaded prior to 'icebreathing-mpp-jsApp'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'icebreathing-mpp-jsApp'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'icebreathing-mpp-jsApp'.");
    }
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'icebreathing-mpp-jsApp'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'icebreathing-mpp-jsApp'.");
    }
    if (typeof this['androidx-material'] === 'undefined') {
      throw new Error("Error loading module 'icebreathing-mpp-jsApp'. Its dependency 'androidx-material' was not found. Please, check whether 'androidx-material' is loaded prior to 'icebreathing-mpp-jsApp'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'icebreathing-mpp-jsApp'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'icebreathing-mpp-jsApp'.");
    }
    if (typeof this['androidx-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'icebreathing-mpp-jsApp'. Its dependency 'androidx-animation-core' was not found. Please, check whether 'androidx-animation-core' is loaded prior to 'icebreathing-mpp-jsApp'.");
    }
    if (typeof this['androidx-foundation'] === 'undefined') {
      throw new Error("Error loading module 'icebreathing-mpp-jsApp'. Its dependency 'androidx-foundation' was not found. Please, check whether 'androidx-foundation' is loaded prior to 'icebreathing-mpp-jsApp'.");
    }
    if (typeof this['androidx-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'icebreathing-mpp-jsApp'. Its dependency 'androidx-foundation-layout' was not found. Please, check whether 'androidx-foundation-layout' is loaded prior to 'icebreathing-mpp-jsApp'.");
    }
    if (typeof this['androidx-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'icebreathing-mpp-jsApp'. Its dependency 'androidx-ui-text' was not found. Please, check whether 'androidx-ui-text' is loaded prior to 'icebreathing-mpp-jsApp'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'icebreathing-mpp-jsApp'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'icebreathing-mpp-jsApp'.");
    }
    if (typeof this['androidx-animation'] === 'undefined') {
      throw new Error("Error loading module 'icebreathing-mpp-jsApp'. Its dependency 'androidx-animation' was not found. Please, check whether 'androidx-animation' is loaded prior to 'icebreathing-mpp-jsApp'.");
    }
    if (typeof this['androidx-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'icebreathing-mpp-jsApp'. Its dependency 'androidx-ui-geometry' was not found. Please, check whether 'androidx-ui-geometry' is loaded prior to 'icebreathing-mpp-jsApp'.");
    }
    if (typeof this['androidx-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'icebreathing-mpp-jsApp'. Its dependency 'androidx-runtime-saveable' was not found. Please, check whether 'androidx-runtime-saveable' is loaded prior to 'icebreathing-mpp-jsApp'.");
    }
    if (typeof this['androidx-material-icons-core'] === 'undefined') {
      throw new Error("Error loading module 'icebreathing-mpp-jsApp'. Its dependency 'androidx-material-icons-core' was not found. Please, check whether 'androidx-material-icons-core' is loaded prior to 'icebreathing-mpp-jsApp'.");
    }
    if (typeof this['androidx-material-icons-extended'] === 'undefined') {
      throw new Error("Error loading module 'icebreathing-mpp-jsApp'. Its dependency 'androidx-material-icons-extended' was not found. Please, check whether 'androidx-material-icons-extended' is loaded prior to 'icebreathing-mpp-jsApp'.");
    }
    root['icebreathing-mpp-jsApp'] = factory(typeof this['icebreathing-mpp-jsApp'] === 'undefined' ? {} : this['icebreathing-mpp-jsApp'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui-graphics'], this['androidx-runtime'], this['androidx-ui'], this['androidx-material'], this['androidx-ui-unit'], this['androidx-animation-core'], this['androidx-foundation'], this['androidx-foundation-layout'], this['androidx-ui-text'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['androidx-animation'], this['androidx-ui-geometry'], this['androidx-runtime-saveable'], this['androidx-material-icons-core'], this['androidx-material-icons-extended']);
  }
}(this, function (_, kotlin_kotlin, kotlin_androidx_compose_ui_ui_graphics, kotlin_androidx_compose_runtime_runtime, kotlin_androidx_compose_ui_ui, kotlin_androidx_compose_material_material, kotlin_androidx_compose_ui_ui_unit, kotlin_androidx_compose_animation_animation_core, kotlin_androidx_compose_foundation_foundation, kotlin_androidx_compose_foundation_foundation_layout, kotlin_androidx_compose_ui_ui_text, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_androidx_compose_animation_animation, kotlin_androidx_compose_ui_ui_geometry, kotlin_androidx_compose_runtime_runtime_saveable, kotlin_androidx_compose_material_material_icons_core, kotlin_androidx_compose_material_material_icons_extended) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var numberToInt = kotlin_kotlin.$_$.s7;
  var Unit_getInstance = kotlin_kotlin.$_$.s2;
  var Color = kotlin_androidx_compose_ui_ui_graphics.$_$.k;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var _Color___get_value__impl__1pls5m = kotlin_androidx_compose_ui_ui_graphics.$_$.k2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.i2;
  var Companion_getInstance = kotlin_androidx_compose_ui_ui.$_$.b4;
  var Companion_getInstance_0 = kotlin_androidx_compose_runtime_runtime.$_$.f2;
  var THROW_CCE = kotlin_kotlin.$_$.ba;
  var isObject = kotlin_kotlin.$_$.o7;
  var MaterialTheme_getInstance = kotlin_androidx_compose_material_material.$_$.r;
  var get_LocalTextStyle = kotlin_androidx_compose_material_material.$_$.f;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.q1;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.p1;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.g1;
  var _Dp___init__impl__ms3zkb = kotlin_androidx_compose_ui_ui_unit.$_$.z1;
  var _Dp___get_value__impl__geb1vb = kotlin_androidx_compose_ui_ui_unit.$_$.c2;
  var get_LocalDensity = kotlin_androidx_compose_ui_ui.$_$.c2;
  var createCompositionCoroutineScope = kotlin_androidx_compose_runtime_runtime.$_$.d1;
  var CompositionScopedCoroutineScopeCanceller = kotlin_androidx_compose_runtime_runtime.$_$.o;
  var Animatable$default = kotlin_androidx_compose_animation_animation_core.$_$.n;
  var to = kotlin_kotlin.$_$.bb;
  var Dp = kotlin_androidx_compose_ui_ui_unit.$_$.o;
  var mutableStateOf$default = kotlin_androidx_compose_runtime_runtime.$_$.z1;
  var Orientation_Vertical_getInstance = kotlin_androidx_compose_foundation_foundation.$_$.l1;
  var rememberDraggableState$composable = kotlin_androidx_compose_foundation_foundation.$_$.e;
  var draggable$default = kotlin_androidx_compose_foundation_foundation.$_$.n1;
  var padding$default = kotlin_androidx_compose_foundation_foundation_layout.$_$.z;
  var get_LocalLayoutDirection = kotlin_androidx_compose_ui_ui.$_$.f2;
  var get_LocalViewConfiguration = kotlin_androidx_compose_ui_ui.$_$.g2;
  var Companion_getInstance_1 = kotlin_androidx_compose_ui_ui.$_$.x3;
  var materializerOf = kotlin_androidx_compose_ui_ui.$_$.t1;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var Applier = kotlin_androidx_compose_runtime_runtime.$_$.j;
  var isInterface = kotlin_kotlin.$_$.n7;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.c2;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.d2;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_androidx_compose_runtime_runtime.$_$.a2;
  var SkippableUpdater = kotlin_androidx_compose_runtime_runtime.$_$.a1;
  var width = kotlin_androidx_compose_foundation_foundation_layout.$_$.t;
  var height = kotlin_androidx_compose_foundation_foundation_layout.$_$.h;
  var background$default = kotlin_androidx_compose_foundation_foundation.$_$.o1;
  var Box$composable = kotlin_androidx_compose_foundation_foundation_layout.$_$.a;
  var padding = kotlin_androidx_compose_foundation_foundation_layout.$_$.m;
  var offset = kotlin_androidx_compose_foundation_foundation_layout.$_$.j;
  var Companion_getInstance_2 = kotlin_androidx_compose_ui_ui.$_$.a4;
  var rememberBoxMeasurePolicy$composable = kotlin_androidx_compose_foundation_foundation_layout.$_$.n;
  var BoxScopeInstance_getInstance = kotlin_androidx_compose_foundation_foundation_layout.$_$.d1;
  var composableLambda = kotlin_androidx_compose_runtime_runtime.$_$.c;
  var ProvideTextStyle$composable = kotlin_androidx_compose_material_material.$_$.i;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.v1;
  var pointerInput = kotlin_androidx_compose_ui_ui.$_$.d1;
  var Companion_getInstance_3 = kotlin_androidx_compose_ui_ui_text.$_$.t;
  var Long = kotlin_kotlin.$_$.v9;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.h2;
  var _Color___init__impl__r6cqi2 = kotlin_androidx_compose_ui_ui_graphics.$_$.c2;
  var _TextUnit___init__impl__r5fj1s = kotlin_androidx_compose_ui_ui_unit.$_$.o2;
  var _TextOverflow___init__impl__obguoe = kotlin_androidx_compose_ui_ui_text.$_$.p;
  var Text$composable = kotlin_androidx_compose_material_material.$_$.m;
  var Constraints = kotlin_androidx_compose_ui_ui_unit.$_$.b;
  var MeasurePolicy = kotlin_androidx_compose_ui_ui.$_$.n1;
  var classMeta = kotlin_kotlin.$_$.y6;
  var KMutableProperty0 = kotlin_kotlin.$_$.r8;
  var THROW_ISE = kotlin_kotlin.$_$.ca;
  var getLocalDelegateReference = kotlin_kotlin.$_$.d7;
  var toString = kotlin_kotlin.$_$.ab;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.l2;
  var CoroutineImpl = kotlin_kotlin.$_$.k6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v5;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var listOf = kotlin_kotlin.$_$.b5;
  var compareTo = kotlin_kotlin.$_$.z6;
  var ensureNotNull = kotlin_kotlin.$_$.ja;
  var exponentialDecay$default = kotlin_androidx_compose_animation_animation_core.$_$.o;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var drop = kotlin_kotlin.$_$.f4;
  var first = kotlin_kotlin.$_$.l4;
  var roundToInt = kotlin_kotlin.$_$.d8;
  var IntOffset = kotlin_androidx_compose_ui_ui_unit.$_$.p;
  var IntOffset_0 = kotlin_androidx_compose_ui_ui_unit.$_$.q;
  var offset$default = kotlin_androidx_compose_foundation_foundation_layout.$_$.x;
  var alpha = kotlin_androidx_compose_ui_ui.$_$.b;
  var PointerInputScope = kotlin_androidx_compose_ui_ui.$_$.v;
  var detectTapGestures$default = kotlin_androidx_compose_foundation_foundation.$_$.t1;
  var calculateTargetValue = kotlin_androidx_compose_animation_animation_core.$_$.j;
  var SuspendFunction1 = kotlin_kotlin.$_$.m6;
  var SuspendFunction2 = kotlin_kotlin.$_$.n6;
  var toList = kotlin_kotlin.$_$.p5;
  var mapOf = kotlin_kotlin.$_$.d5;
  var Enum = kotlin_kotlin.$_$.q9;
  var objectMeta = kotlin_kotlin.$_$.u7;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_androidx_compose_ui_ui_unit.$_$.m2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var _IntSize___get_height__impl__prv63b = kotlin_androidx_compose_ui_ui_unit.$_$.l2;
  var _IntSize___get_width__impl__d9yl4o = kotlin_androidx_compose_ui_ui_unit.$_$.n2;
  var IntSize = kotlin_androidx_compose_ui_ui_unit.$_$.s;
  var LaunchedEffect$composable = kotlin_androidx_compose_runtime_runtime.$_$.u;
  var updateTransition$composable = kotlin_androidx_compose_animation_animation_core.$_$.m;
  var Companion_getInstance_4 = kotlin_androidx_compose_ui_ui_graphics.$_$.g3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ra;
  var _Color___get_colorSpace__impl__jqqozk = kotlin_androidx_compose_ui_ui_graphics.$_$.f2;
  var get_VectorConverter = kotlin_androidx_compose_animation_animation.$_$.a;
  var createTransitionAnimation$composable = kotlin_androidx_compose_animation_animation_core.$_$.k;
  var tween$default = kotlin_androidx_compose_animation_animation_core.$_$.q;
  var animateFloatAsState$composable = kotlin_androidx_compose_animation_animation_core.$_$.i;
  var derivedStateOf = kotlin_androidx_compose_runtime_runtime.$_$.e1;
  var offset_0 = kotlin_androidx_compose_foundation_foundation_layout.$_$.i;
  var Canvas$composable = kotlin_androidx_compose_foundation_foundation.$_$.x;
  var KProperty0 = kotlin_kotlin.$_$.t8;
  var _Offset___get_x__impl__xvi35n = kotlin_androidx_compose_ui_ui_geometry.$_$.b1;
  var _Offset___get_y__impl__8bzhra = kotlin_androidx_compose_ui_ui_geometry.$_$.c1;
  var Offset = kotlin_androidx_compose_ui_ui_geometry.$_$.d;
  var Companion_getInstance_5 = kotlin_androidx_compose_ui_ui_graphics.$_$.e3;
  var Color__copy$default_impl_ectz3s = kotlin_androidx_compose_ui_ui_graphics.$_$.y2;
  var Stroke_init_$Create$ = kotlin_androidx_compose_ui_ui_graphics.$_$.a2;
  var spring$default = kotlin_androidx_compose_animation_animation_core.$_$.p;
  var rememberSaveable$composable = kotlin_androidx_compose_runtime_runtime_saveable.$_$.b;
  var get_LinearEasing = kotlin_androidx_compose_animation_animation_core.$_$.d;
  var LaunchedEffect$composable_0 = kotlin_androidx_compose_runtime_runtime.$_$.v;
  var DpSize = kotlin_androidx_compose_ui_ui_unit.$_$.m;
  var DpSize_0 = kotlin_androidx_compose_ui_ui_unit.$_$.n;
  var size = kotlin_androidx_compose_foundation_foundation_layout.$_$.q;
  var CircularProgressIndicator$composable = kotlin_androidx_compose_material_material.$_$.c;
  var fillMaxSize$default = kotlin_androidx_compose_foundation_foundation_layout.$_$.u;
  var Arrangement_getInstance = kotlin_androidx_compose_foundation_foundation_layout.$_$.c1;
  var columnMeasurePolicy$composable = kotlin_androidx_compose_foundation_foundation_layout.$_$.e;
  var ColumnScopeInstance_getInstance = kotlin_androidx_compose_foundation_foundation_layout.$_$.e1;
  var get_sp = kotlin_androidx_compose_ui_ui_unit.$_$.j1;
  var TextStyle_init_$Create$ = kotlin_androidx_compose_ui_ui_text.$_$.o;
  var padding_0 = kotlin_androidx_compose_foundation_foundation_layout.$_$.k;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var _DpSize___get_height__impl__5xueo2 = kotlin_androidx_compose_ui_ui_unit.$_$.g2;
  var _DpSize___get_width__impl__o3d5gt = kotlin_androidx_compose_ui_ui_unit.$_$.h2;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.n2;
  var get_VectorConverter_0 = kotlin_androidx_compose_animation_animation_core.$_$.h;
  var get_sp_0 = kotlin_androidx_compose_ui_ui_unit.$_$.h1;
  var IntSize_0 = kotlin_androidx_compose_ui_ui_unit.$_$.r;
  var rowMeasurePolicy$composable = kotlin_androidx_compose_foundation_foundation_layout.$_$.o;
  var RowScopeInstance_getInstance = kotlin_androidx_compose_foundation_foundation_layout.$_$.f1;
  var IconButton$composable = kotlin_androidx_compose_material_material.$_$.e;
  var Outlined_getInstance = kotlin_androidx_compose_material_material_icons_core.$_$.f;
  var get_PlayArrow = kotlin_androidx_compose_material_material_icons_core.$_$.c;
  var size_0 = kotlin_androidx_compose_foundation_foundation_layout.$_$.p;
  var Icon$composable = kotlin_androidx_compose_material_material.$_$.d;
  var RoundedCornerShape = kotlin_androidx_compose_foundation_foundation.$_$.s;
  var ButtonDefaults_getInstance = kotlin_androidx_compose_material_material.$_$.q;
  var OutlinedButton$composable = kotlin_androidx_compose_material_material.$_$.h;
  var Spacer$composable = kotlin_androidx_compose_foundation_foundation_layout.$_$.d;
  var get_CheckCircle = kotlin_androidx_compose_material_material_icons_core.$_$.b;
  var size_1 = kotlin_androidx_compose_foundation_foundation_layout.$_$.r;
  var get_ArrowBack = kotlin_androidx_compose_material_material_icons_core.$_$.a;
  var get_Pause = kotlin_androidx_compose_material_material_icons_extended.$_$.b;
  var take = kotlin_kotlin.$_$.n5;
  var split$default = kotlin_kotlin.$_$.k;
  var takeLast = kotlin_kotlin.$_$.e9;
  var last = kotlin_kotlin.$_$.y4;
  var hashCode = kotlin_kotlin.$_$.i7;
  var equals = kotlin_kotlin.$_$.a7;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.z1;
  var padStart = kotlin_kotlin.$_$.d9;
  var Filled_getInstance = kotlin_androidx_compose_material_material_icons_core.$_$.e;
  var get_Spa = kotlin_androidx_compose_material_material_icons_extended.$_$.a;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var fillMaxWidth$default = kotlin_androidx_compose_foundation_foundation_layout.$_$.v;
  var Companion_getInstance_6 = kotlin_androidx_compose_ui_ui_text.$_$.s;
  var numberRangeToNumber = kotlin_kotlin.$_$.q7;
  var padding$default_0 = kotlin_androidx_compose_foundation_foundation_layout.$_$.y;
  var get_CircleShape = kotlin_androidx_compose_foundation_foundation.$_$.r;
  var Button$composable = kotlin_androidx_compose_material_material.$_$.a;
  var widthIn = kotlin_androidx_compose_foundation_foundation_layout.$_$.s;
  var fillMaxWidth = kotlin_androidx_compose_foundation_foundation_layout.$_$.g;
  var Card$composable = kotlin_androidx_compose_material_material.$_$.b;
  var toMutableStateList = kotlin_androidx_compose_runtime_runtime.$_$.u1;
  var until = kotlin_kotlin.$_$.q8;
  var BorderStroke = kotlin_androidx_compose_foundation_foundation.$_$.w;
  var checkIndexOverflow = kotlin_kotlin.$_$.v3;
  var toMap = kotlin_kotlin.$_$.q5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var rangeTo = kotlin_kotlin.$_$.o8;
  var Slider$composable = kotlin_androidx_compose_material_material.$_$.k;
  var Color$default = kotlin_androidx_compose_ui_ui_graphics.$_$.w1;
  var tween = kotlin_androidx_compose_animation_animation_core.$_$.l;
  var Surface$composable = kotlin_androidx_compose_material_material.$_$.l;
  var Window$composable = kotlin_androidx_compose_ui_ui.$_$.v2;
  var Color_0 = kotlin_androidx_compose_ui_ui_graphics.$_$.j;
  var Shapes = kotlin_androidx_compose_material_material.$_$.j;
  var isSystemInDarkTheme$composable = kotlin_androidx_compose_foundation_foundation.$_$.i1;
  var MaterialTheme$composable = kotlin_androidx_compose_material_material.$_$.g;
  var darkColors$default = kotlin_androidx_compose_material_material.$_$.n;
  var lightColors$default = kotlin_androidx_compose_material_material.$_$.o;
  var Companion_getInstance_7 = kotlin_androidx_compose_ui_ui_text.$_$.r;
  var Typography_init_$Create$ = kotlin_androidx_compose_material_material.$_$.p;
  //endregion
  //region block: pre-declaration
  ListItemPicker$composable$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  ListItemPicker$composable$lambda$slambda.prototype.constructor = ListItemPicker$composable$lambda$slambda;
  ListItemPicker$composable$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  ListItemPicker$composable$slambda$slambda.prototype.constructor = ListItemPicker$composable$slambda$slambda;
  ListItemPicker$composable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  ListItemPicker$composable$slambda.prototype.constructor = ListItemPicker$composable$slambda;
  Label$composable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Label$composable$slambda.prototype.constructor = Label$composable$slambda;
  $flingCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $flingCOROUTINE$0.prototype.constructor = $flingCOROUTINE$0;
  ScreenType.prototype = Object.create(Enum.prototype);
  ScreenType.prototype.constructor = ScreenType;
  BreatheState.prototype = Object.create(Enum.prototype);
  BreatheState.prototype.constructor = BreatheState;
  LeafPos.prototype = Object.create(Enum.prototype);
  LeafPos.prototype.constructor = LeafPos;
  BreatheCanvas$composable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  BreatheCanvas$composable$slambda.prototype.constructor = BreatheCanvas$composable$slambda;
  BreatheCanvas$composable$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  BreatheCanvas$composable$slambda_1.prototype.constructor = BreatheCanvas$composable$slambda_1;
  BreatheCanvas$composable$slambda_3.prototype = Object.create(CoroutineImpl.prototype);
  BreatheCanvas$composable$slambda_3.prototype.constructor = BreatheCanvas$composable$slambda_3;
  BreatheCanvas$composable$slambda_5.prototype = Object.create(CoroutineImpl.prototype);
  BreatheCanvas$composable$slambda_5.prototype.constructor = BreatheCanvas$composable$slambda_5;
  BreatheCanvas$composable$slambda_7.prototype = Object.create(CoroutineImpl.prototype);
  BreatheCanvas$composable$slambda_7.prototype.constructor = BreatheCanvas$composable$slambda_7;
  BreathHoldScreen$composable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  BreathHoldScreen$composable$slambda.prototype.constructor = BreathHoldScreen$composable$slambda;
  BreathHoldScreen$composable$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  BreathHoldScreen$composable$slambda_1.prototype.constructor = BreathHoldScreen$composable$slambda_1;
  BreathRate.prototype = Object.create(Enum.prototype);
  BreathRate.prototype.constructor = BreathRate;
  HoldState.prototype = Object.create(Enum.prototype);
  HoldState.prototype.constructor = HoldState;
  BreathInScreen$composable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  BreathInScreen$composable$slambda.prototype.constructor = BreathInScreen$composable$slambda;
  BreathInScreen$composable$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  BreathInScreen$composable$slambda_1.prototype.constructor = BreathInScreen$composable$slambda_1;
  SessionState.prototype = Object.create(Enum.prototype);
  SessionState.prototype.constructor = SessionState;
  TimeSliderCard$composable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  TimeSliderCard$composable$slambda.prototype.constructor = TimeSliderCard$composable$slambda;
  HoldTimeSelector$composable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HoldTimeSelector$composable$slambda.prototype.constructor = HoldTimeSelector$composable$slambda;
  HoldTimeSelector$composable$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  HoldTimeSelector$composable$slambda_1.prototype.constructor = HoldTimeSelector$composable$slambda_1;
  PrepareState.prototype = Object.create(Enum.prototype);
  PrepareState.prototype.constructor = PrepareState;
  TransitionScreen$composable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  TransitionScreen$composable$slambda.prototype.constructor = TransitionScreen$composable$slambda;
  TransitionScreen$composable$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  TransitionScreen$composable$slambda_1.prototype.constructor = TransitionScreen$composable$slambda_1;
  //endregion
  function getItemIndexForOffset(range, value, offset, halfNumbersColumnHeightPx) {
    var indexOf = range.n(value) - numberToInt(offset / halfNumbersColumnHeightPx) | 0;
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.count' call
    tmp$ret$0 = range.f();
    var tmp0_minOf = tmp$ret$0 - 1 | 0;
    tmp$ret$1 = Math.min(indexOf, tmp0_minOf);
    var tmp1_maxOf = tmp$ret$1;
    tmp$ret$2 = Math.max(0, tmp1_maxOf);
    return tmp$ret$2;
  }
  function fling(_this__u8e3s4, initialVelocity, animationSpec, adjustTarget, block, $cont) {
    var tmp = new $flingCOROUTINE$0(_this__u8e3s4, initialVelocity, animationSpec, adjustTarget, block, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  }
  function fling$default(_this__u8e3s4, initialVelocity, animationSpec, adjustTarget, block, $cont, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      block = null;
    return fling(_this__u8e3s4, initialVelocity, animationSpec, adjustTarget, block, $cont);
  }
  function ListItemPicker$composable(modifier, label, value, onValueChange, dividersColor, list, textStyle, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var label_0 = {_v: label};
    var dividersColor_0 = {_v: new Color(dividersColor)};
    var textStyle_0 = {_v: textStyle};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(-940976496);
    sourceInformation($composer_0, 'C(ListItemPicker$composable)P(3,1,6,4,0:c#ui.graphics.Color)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(modifier_0._v) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.z1a(label_0._v) : false) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.z1a(value) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.z1a(onValueChange) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.p1n(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(dividersColor_0._v.y3a_1))) : false) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.z1a(list) ? 131072 : 65536);
    if (($changed & 3670016) === 0)
      $dirty = $dirty | ((($default & 64) === 0 ? $composer_0.z1a(textStyle_0._v) : false) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.l1m()) {
      $composer_0.y1m();
      if (($changed & 1) === 0 ? true : $composer_0.c1n()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 2) === 0)) {
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
            // Inline function 'com.chargemap.compose.numberpicker.ListItemPicker$composable.<anonymous>' call
            tmp$ret$0 = ListItemPicker$composable$lambda_2;
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
          label_0._v = tmp$ret$4;
          $dirty = $dirty & -113;
        }
        if (!(($default & 16) === 0)) {
          dividersColor_0._v = new Color(MaterialTheme_getInstance().e93($composer_0, 6).s93());
          $dirty = $dirty & -57345;
        }
        if (!(($default & 64) === 0)) {
          var tmp$ret$5;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp1_$get_current$$composable_gn3xww = get_LocalTextStyle();
          var tmp2_$get_current$$composable_g4n2vl = $composer_0;
          var $composer_2 = tmp2_$get_current$$composable_g4n2vl;
          sourceInformationMarkerStart($composer_2, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_0 = $composer_2.w1n(tmp1_$get_current$$composable_gn3xww);
          sourceInformationMarkerEnd($composer_2);
          tmp$ret$5 = tmp0_0;
          textStyle_0._v = tmp$ret$5;
          $dirty = $dirty & -3670017;
        }
      } else {
        $composer_0.l1h();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 64) === 0))
          $dirty = $dirty & -3670017;
      }
      $composer_0.z1m();
      if (isTraceInProgress()) {
        traceEventStart(-940976496, $dirty, -1, 'com.chargemap.compose.numberpicker.ListItemPicker$composable (ListItemPicker.kt:40)');
      }
      var minimumAlpha = 0.3;
      var tmp$ret$6;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$6 = _Dp___init__impl__ms3zkb(8);
      var verticalMargin = tmp$ret$6;
      var tmp$ret$7;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$7 = _Dp___init__impl__ms3zkb(80);
      var numbersColumnHeight = tmp$ret$7;
      var tmp$ret$8;
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      tmp$ret$8 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(numbersColumnHeight) / 2);
      var halfNumbersColumnHeight = tmp$ret$8;
      var tmp$ret$11;
      // Inline function 'kotlin.with' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp3_$get_current$$composable_fm67ua = get_LocalDensity();
      var tmp4_$get_current$$composable_f3pcsz = $composer_0;
      var $composer_3 = tmp4_$get_current$$composable_f3pcsz;
      sourceInformationMarkerStart($composer_3, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_3.w1n(tmp3_$get_current$$composable_fm67ua);
      sourceInformationMarkerEnd($composer_3);
      tmp$ret$9 = tmp0_1;
      var tmp5_with = tmp$ret$9;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$10;
      // Inline function 'com.chargemap.compose.numberpicker.ListItemPicker$composable.<anonymous>' call
      var tmp0_return = tmp5_with.o2k(halfNumbersColumnHeight);
      tmp$ret$10 = tmp0_return;
      tmp$ret$11 = tmp$ret$10;
      var halfNumbersColumnHeightPx = tmp$ret$11;
      var tmp$ret$17;
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
      var tmp6_rememberCoroutineScope$composable = null;
      var tmp7_rememberCoroutineScope$composable = $composer_0;
      var getContext = {_v: tmp6_rememberCoroutineScope$composable};
      var $composer_4 = tmp7_rememberCoroutineScope$composable;
      $composer_4.y1a(102870005);
      sourceInformation($composer_4, 'C(rememberCoroutineScope$composable)476@19869L144:Effects.kt#9igjgp');
      if (!(1 === 0)) {
        getContext._v = ListItemPicker$composable$lambda_3;
      }
      var composer = $composer_4;
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_4;
      var $composer_5 = tmp0_remember$composable_0;
      $composer_5.y1a(547886695);
      sourceInformation($composer_5, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$15;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_5;
      var tmp$ret$14;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (false ? true : tmp0_let_0 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
        tmp$ret$12 = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
        var value_1 = tmp$ret$12;
        tmp1_cache_0.b1b(value_1);
        tmp_1 = value_1;
      } else {
        tmp_1 = tmp0_let_0;
      }
      tmp$ret$13 = tmp_1;
      tmp$ret$14 = tmp$ret$13;
      var tmp_2 = tmp$ret$14;
      tmp$ret$15 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0_2 = tmp$ret$15;
      $composer_5.d1b();
      tmp$ret$16 = tmp0_2;
      var wrapper = tmp$ret$16;
      var tmp0_3 = wrapper.e1u_1;
      $composer_4.d1b();
      tmp$ret$17 = tmp0_3;
      var coroutineScope = tmp$ret$17;
      $composer_0.y1a(2001793408);
      var tmp$ret$29;
      // Inline function 'kotlin.apply' call
      var tmp$ret$22;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp8_remember$composable = $composer_0;
      var $composer_6 = tmp8_remember$composable;
      $composer_6.y1a(547886695);
      sourceInformation($composer_6, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$21;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = $composer_6;
      var tmp$ret$20;
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = tmp1_cache_1.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$19;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (false ? true : tmp0_let_1 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$18;
        // Inline function 'com.chargemap.compose.numberpicker.ListItemPicker$composable.<anonymous>' call
        tmp$ret$18 = Animatable$default(0.0, 0.0, 2, null);
        var value_2 = tmp$ret$18;
        tmp1_cache_1.b1b(value_2);
        tmp_3 = value_2;
      } else {
        tmp_3 = tmp0_let_1;
      }
      tmp$ret$19 = tmp_3;
      tmp$ret$20 = tmp$ret$19;
      var tmp_4 = tmp$ret$20;
      tmp$ret$21 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      var tmp0_4 = tmp$ret$21;
      $composer_6.d1b();
      tmp$ret$22 = tmp0_4;
      var tmp9_apply = tmp$ret$22;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.chargemap.compose.numberpicker.ListItemPicker$composable.<anonymous>' call
      var index = list.n(value);
      var tmp$ret$28;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_1 = $composer_0;
      var tmp1_remember$composable = 8 & $dirty >> 6 | 14 & $dirty >> 6 | 112 & $dirty >> 12;
      var $composer_7 = tmp0_remember$composable_1;
      $composer_7.y1a(-1124426577);
      sourceInformation($composer_7, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$27;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_2 = $composer_7;
      var tmp2_cache = !!($composer_7.z1a(value) | $composer_7.z1a(list));
      var tmp$ret$26;
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = tmp1_cache_2.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$25;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (tmp2_cache ? true : tmp0_let_2 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$24;
        // Inline function 'com.chargemap.compose.numberpicker.ListItemPicker$composable.<anonymous>.<anonymous>' call
        var tmp$ret$23;
        // Inline function 'kotlin.collections.count' call
        tmp$ret$23 = list.f();
        tmp$ret$24 = to((-((tmp$ret$23 - 1 | 0) - index | 0) | 0) * halfNumbersColumnHeightPx, index * halfNumbersColumnHeightPx);
        var value_3 = tmp$ret$24;
        tmp1_cache_2.b1b(value_3);
        tmp_5 = value_3;
      } else {
        tmp_5 = tmp0_let_2;
      }
      tmp$ret$25 = tmp_5;
      tmp$ret$26 = tmp$ret$25;
      var tmp_6 = tmp$ret$26;
      tmp$ret$27 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      var tmp0_5 = tmp$ret$27;
      $composer_7.d1b();
      tmp$ret$28 = tmp0_5;
      var offsetRange = tmp$ret$28;
      tmp9_apply.n6z(offsetRange.o_1, offsetRange.p_1);
      tmp$ret$29 = tmp9_apply;
      var tmp0_group = tmp$ret$29;
      $composer_0.d1b();
      var animatedOffset = tmp0_group;
      var coercedAnimatedOffset = animatedOffset.i2() % halfNumbersColumnHeightPx;
      var indexOfElement = getItemIndexForOffset(list, value, animatedOffset.i2(), halfNumbersColumnHeightPx);
      var tmp$ret$35;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp10_remember$composable = $composer_0;
      var $composer_8 = tmp10_remember$composable;
      $composer_8.y1a(547886695);
      sourceInformation($composer_8, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$34;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_3 = $composer_8;
      var tmp$ret$33;
      // Inline function 'kotlin.let' call
      var tmp0_let_3 = tmp1_cache_3.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$32;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_7;
      if (false ? true : tmp0_let_3 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$31;
        // Inline function 'com.chargemap.compose.numberpicker.ListItemPicker$composable.<anonymous>' call
        var tmp$ret$30;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$30 = _Dp___init__impl__ms3zkb(0);
        var tmp_8 = new Dp(tmp$ret$30);
        tmp$ret$31 = mutableStateOf$default(tmp_8, null, 2, null);
        var value_4 = tmp$ret$31;
        tmp1_cache_3.b1b(value_4);
        tmp_7 = value_4;
      } else {
        tmp_7 = tmp0_let_3;
      }
      tmp$ret$32 = tmp_7;
      tmp$ret$33 = tmp$ret$32;
      var tmp_9 = tmp$ret$33;
      tmp$ret$34 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
      var tmp0_6 = tmp$ret$34;
      $composer_8.d1b();
      tmp$ret$35 = tmp0_6;
      var dividersWidth$delegate = tmp$ret$35;
      var tmp0_orientation = Orientation_Vertical_getInstance();
      var tmp1_state = rememberDraggableState$composable(ListItemPicker$composable$lambda_4(coroutineScope, animatedOffset), $composer_0, 0);
      var tmp_10 = modifier_0._v;
      var tmp_11 = ListItemPicker$composable$slambda_0(coroutineScope, animatedOffset, list, value, halfNumbersColumnHeightPx, onValueChange, null);
      var tmp_12 = draggable$default(tmp_10, tmp1_state, tmp0_orientation, false, null, false, null, tmp_11, false, 188, null);
      var tmp$ret$38;
      // Inline function 'androidx.compose.ui.unit.Dp.plus' call
      var tmp$ret$36;
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      tmp$ret$36 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(numbersColumnHeight) / 3);
      var tmp11_plus = tmp$ret$36;
      var tmp$ret$37;
      // Inline function 'androidx.compose.ui.unit.Dp.times' call
      tmp$ret$37 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(verticalMargin) * 2);
      var tmp12_plus = tmp$ret$37;
      tmp$ret$38 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp11_plus) + _Dp___get_value__impl__geb1vb(tmp12_plus));
      var tmp2_modifier = padding$default(tmp_12, null, tmp$ret$38, 1, null);
      var tmp$ret$43;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp13_remember$composable = $composer_0;
      var $composer_9 = tmp13_remember$composable;
      $composer_9.y1a(-838505973);
      sourceInformation($composer_9, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$42;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_4 = $composer_9;
      var tmp2_cache_0 = $composer_9.z1a(dividersWidth$delegate);
      var tmp$ret$41;
      // Inline function 'kotlin.let' call
      var tmp0_let_4 = tmp1_cache_4.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$40;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_13;
      if (tmp2_cache_0 ? true : tmp0_let_4 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$39;
        // Inline function 'com.chargemap.compose.numberpicker.ListItemPicker$composable.<anonymous>' call
        tmp$ret$39 = ListItemPicker$composable$lambda_5(dividersWidth$delegate);
        var value_5 = tmp$ret$39;
        tmp1_cache_4.b1b(value_5);
        tmp_13 = value_5;
      } else {
        tmp_13 = tmp0_let_4;
      }
      tmp$ret$40 = tmp_13;
      tmp$ret$41 = tmp$ret$40;
      var tmp_14 = tmp$ret$41;
      tmp$ret$42 = (tmp_14 == null ? true : isObject(tmp_14)) ? tmp_14 : THROW_CCE();
      var tmp0_7 = tmp$ret$42;
      $composer_9.d1b();
      tmp$ret$43 = tmp0_7;
      var tmp_15 = tmp$ret$43;
      var tmp3_measurePolicy = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp_15);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp14_Layout$composable = $composer_0;
      var modifier_1 = tmp2_modifier;
      var $composer_10 = tmp14_Layout$composable;
      $composer_10.y1a(1725976829);
      sourceInformation($composer_10, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance();
      var tmp$ret$44;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww_0 = $composer_10;
      var $composer_11 = tmp1_$get_current$$composable_gn3xww_0;
      sourceInformationMarkerStart($composer_11, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_8 = $composer_11.w1n(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_11);
      tmp$ret$44 = tmp0_8;
      var density = tmp$ret$44;
      var tmp$ret$45;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl_0 = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua_0 = $composer_10;
      var $composer_12 = tmp3_$get_current$$composable_fm67ua_0;
      sourceInformationMarkerStart($composer_12, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_9 = $composer_12.w1n(tmp2_$get_current$$composable_g4n2vl_0);
      sourceInformationMarkerEnd($composer_12);
      tmp$ret$45 = tmp0_9;
      var layoutDirection = tmp$ret$45;
      var tmp$ret$46;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz_0 = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro = $composer_10;
      var $composer_13 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_13, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_10 = $composer_13.w1n(tmp4_$get_current$$composable_f3pcsz_0);
      sourceInformationMarkerEnd($composer_13);
      tmp$ret$46 = tmp0_10;
      var viewConfiguration = tmp$ret$46;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_1().a5e_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_1);
      var tmp8_ReusableComposeNode$composable = $composer_10;
      var tmp9_ReusableComposeNode$composable = 6;
      var $composer_14 = tmp8_ReusableComposeNode$composable;
      var tmp_16 = $composer_14.u1m();
      if (!isInterface(tmp_16, Applier)) {
        invalidApplier();
      }
      $composer_14.g1n();
      if ($composer_14.e1n()) {
        $composer_14.h1n(tmp6_ReusableComposeNode$composable);
      } else {
        $composer_14.j1n();
      }
      $composer_14.l1n();
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_14);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, tmp3_measurePolicy, Companion_getInstance_1().e5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_1().d5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_1().f5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_1().g5e_1);
      $composer_14.m1n();
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_14)), $composer_14, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_14.y1a(2058660585);
      // Inline function 'com.chargemap.compose.numberpicker.ListItemPicker$composable.<anonymous>' call
      var tmp15__anonymous__a63r3d = $composer_14;
      var tmp16__anonymous__5bf3vu = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_15 = tmp15__anonymous__a63r3d;
      if (!((tmp16__anonymous__5bf3vu & 11) === 2) ? true : !$composer_15.l1m()) {
        var tmp_17 = width(modifier_0._v, ListItemPicker$composable$lambda(dividersWidth$delegate));
        var tmp$ret$47;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$47 = _Dp___init__impl__ms3zkb(2);
        var tmp_18 = height(tmp_17, tmp$ret$47);
        var tmp_19 = dividersColor_0._v.y3a_1;
        Box$composable(background$default(tmp_18, tmp_19, null, 2, null), $composer_15, 0);
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp0_$receiver = Companion_getInstance();
        var tmp$ret$48;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$48 = _Dp___init__impl__ms3zkb(20);
        var tmp1_horizontal = tmp$ret$48;
        var tmp_20 = padding(tmp0_$receiver, tmp1_horizontal, verticalMargin);
        var tmp$ret$53;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_2 = $composer_15;
        var $composer_16 = tmp0_remember$composable_2;
        $composer_16.y1a(-838505973);
        sourceInformation($composer_16, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$52;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_5 = $composer_16;
        var tmp2_cache_1 = $composer_16.z1a(coercedAnimatedOffset);
        var tmp$ret$51;
        // Inline function 'kotlin.let' call
        var tmp0_let_5 = tmp1_cache_5.a1b();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$50;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_21;
        if (tmp2_cache_1 ? true : tmp0_let_5 === Companion_getInstance_0().c1b_1) {
          var tmp$ret$49;
          // Inline function 'com.chargemap.compose.numberpicker.ListItemPicker$composable.<anonymous>.<anonymous>' call
          tmp$ret$49 = ListItemPicker$composable$lambda_6(coercedAnimatedOffset);
          var value_6 = tmp$ret$49;
          tmp1_cache_5.b1b(value_6);
          tmp_21 = value_6;
        } else {
          tmp_21 = tmp0_let_5;
        }
        tmp$ret$50 = tmp_21;
        tmp$ret$51 = tmp$ret$50;
        var tmp_22 = tmp$ret$51;
        tmp$ret$52 = (tmp_22 == null ? true : isObject(tmp_22)) ? tmp_22 : THROW_CCE();
        var tmp0_11 = tmp$ret$52;
        $composer_16.d1b();
        tmp$ret$53 = tmp0_11;
        var tmp1_Box$composable = offset(tmp_20, tmp$ret$53);
        var tmp2_Box$composable = null;
        var tmp3_Box$composable = false;
        var tmp4_Box$composable = $composer_15;
        var modifier_2 = tmp1_Box$composable;
        var contentAlignment = tmp2_Box$composable;
        var propagateMinConstraints = tmp3_Box$composable;
        var $composer_17 = tmp4_Box$composable;
        $composer_17.y1a(1330882304);
        sourceInformation($composer_17, 'C(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier_2 = Companion_getInstance();
        if (!(2 === 0))
          contentAlignment = Companion_getInstance_2().s4d_1;
        if (!(4 === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_17, 0);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable = modifier_2;
        var tmp1_Layout$composable = $composer_17;
        var tmp2_Layout$composable = 0;
        var modifier_3 = tmp0_Layout$composable;
        var $composer_18 = tmp1_Layout$composable;
        $composer_18.y1a(1725976829);
        sourceInformation($composer_18, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_3 = Companion_getInstance();
        var tmp$ret$54;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7_0 = get_LocalDensity();
        var tmp1_$get_current$$composable_gn3xww_1 = $composer_18;
        var $composer_19 = tmp1_$get_current$$composable_gn3xww_1;
        sourceInformationMarkerStart($composer_19, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_12 = $composer_19.w1n(tmp0_$get_current$$composable_h5ksy7_0);
        sourceInformationMarkerEnd($composer_19);
        tmp$ret$54 = tmp0_12;
        var density_0 = tmp$ret$54;
        var tmp$ret$55;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp2_$get_current$$composable_g4n2vl_1 = get_LocalLayoutDirection();
        var tmp3_$get_current$$composable_fm67ua_1 = $composer_18;
        var $composer_20 = tmp3_$get_current$$composable_fm67ua_1;
        sourceInformationMarkerStart($composer_20, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_13 = $composer_20.w1n(tmp2_$get_current$$composable_g4n2vl_1);
        sourceInformationMarkerEnd($composer_20);
        tmp$ret$55 = tmp0_13;
        var layoutDirection_0 = tmp$ret$55;
        var tmp$ret$56;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp4_$get_current$$composable_f3pcsz_1 = get_LocalViewConfiguration();
        var tmp5_$get_current$$composable_el8hro_0 = $composer_18;
        var $composer_21 = tmp5_$get_current$$composable_el8hro_0;
        sourceInformationMarkerStart($composer_21, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_14 = $composer_21.w1n(tmp4_$get_current$$composable_f3pcsz_1);
        sourceInformationMarkerEnd($composer_21);
        tmp$ret$56 = tmp0_14;
        var viewConfiguration_0 = tmp$ret$56;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp6_ReusableComposeNode$composable_0 = Companion_getInstance_1().a5e_1;
        var tmp7_ReusableComposeNode$composable_0 = materializerOf(modifier_3);
        var tmp8_ReusableComposeNode$composable_0 = $composer_18;
        var tmp9_ReusableComposeNode$composable_0 = 6 | 7168 & tmp2_Layout$composable << 9;
        var $composer_22 = tmp8_ReusableComposeNode$composable_0;
        var tmp_23 = $composer_22.u1m();
        if (!isInterface(tmp_23, Applier)) {
          invalidApplier();
        }
        $composer_22.g1n();
        if ($composer_22.e1n()) {
          $composer_22.h1n(tmp6_ReusableComposeNode$composable_0);
        } else {
          $composer_22.j1n();
        }
        $composer_22.l1n();
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp10__anonymous__yfiz50_0 = _Updater___init__impl__rbfxm8($composer_22);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, measurePolicy, Companion_getInstance_1().e5e_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, density_0, Companion_getInstance_1().d5e_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, layoutDirection_0, Companion_getInstance_1().f5e_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, viewConfiguration_0, Companion_getInstance_1().g5e_1);
        $composer_22.m1n();
        tmp7_ReusableComposeNode$composable_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_22)), $composer_22, 112 & tmp9_ReusableComposeNode$composable_0 >> 3);
        $composer_22.y1a(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var tmp3__anonymous__ufb84q = $composer_22;
        var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable_0 >> 9;
        var $composer_23 = tmp3__anonymous__ufb84q;
        $composer_23.y1a(-2137368960);
        sourceInformation($composer_23, 'C72@3384L9:Box.kt#2w3rfo');
        if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_23.l1m()) {
          // Inline function 'com.chargemap.compose.numberpicker.ListItemPicker$composable.<anonymous>.<anonymous>' call
          var tmp5__anonymous__kpxxpo = BoxScopeInstance_getInstance();
          var tmp6__anonymous__fv9ai5 = $composer_23;
          var tmp7__anonymous__b0knam = 6;
          var $composer_24 = tmp6__anonymous__fv9ai5;
          var $dirty_0 = tmp7__anonymous__b0knam;
          if ((tmp7__anonymous__b0knam & 14) === 0)
            $dirty_0 = $dirty_0 | ($composer_24.z1a(tmp5__anonymous__kpxxpo) ? 4 : 2);
          if (!(($dirty_0 & 91) === 18) ? true : !$composer_24.l1m()) {
            var baseLabelModifier = tmp5__anonymous__kpxxpo.c7d(Companion_getInstance(), Companion_getInstance_2().w4d_1);
            var tmp_24 = textStyle_0._v;
            var tmp$ret$63;
            // Inline function 'kotlin.run' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$62;
            // Inline function 'com.chargemap.compose.numberpicker.ListItemPicker$composable.<anonymous>.<anonymous>.<anonymous>' call
            var tmp_25 = $composer_24;
            var dispatchReceiver = composableLambda(tmp_25, -1055803749, true, ListItemPicker$composable$lambda_7(indexOfElement, label_0, list, baseLabelModifier, halfNumbersColumnHeight, coercedAnimatedOffset, halfNumbersColumnHeightPx, minimumAlpha));
            var tmp$ret$61;
            // Inline function 'androidx.compose.runtime.remember$composable' call
            var tmp0_remember$composable_3 = $composer_24;
            var $composer_25 = tmp0_remember$composable_3;
            $composer_25.y1a(-838505973);
            sourceInformation($composer_25, 'C(remember$composable)P(1):Composables.kt#9igjgp');
            var tmp$ret$60;
            // Inline function 'androidx.compose.runtime.cache' call
            var tmp1_cache_6 = $composer_25;
            var tmp2_cache_2 = $composer_25.z1a(dispatchReceiver);
            var tmp$ret$59;
            // Inline function 'kotlin.let' call
            var tmp0_let_6 = tmp1_cache_6.a1b();
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$58;
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var tmp_26;
            if (tmp2_cache_2 ? true : tmp0_let_6 === Companion_getInstance_0().c1b_1) {
              var tmp$ret$57;
              // Inline function 'com.chargemap.compose.numberpicker.ListItemPicker$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              tmp$ret$57 = ComposableLambda$invoke$ref(dispatchReceiver);
              var value_7 = tmp$ret$57;
              tmp1_cache_6.b1b(value_7);
              tmp_26 = value_7;
            } else {
              tmp_26 = tmp0_let_6;
            }
            tmp$ret$58 = tmp_26;
            tmp$ret$59 = tmp$ret$58;
            var tmp_27 = tmp$ret$59;
            tmp$ret$60 = (tmp_27 == null ? true : isObject(tmp_27)) ? tmp_27 : THROW_CCE();
            var tmp0_15 = tmp$ret$60;
            $composer_25.d1b();
            tmp$ret$61 = tmp0_15;
            tmp$ret$62 = tmp$ret$61;
            tmp$ret$63 = tmp$ret$62;
            ProvideTextStyle$composable(tmp_24, tmp$ret$63, $composer_24, 48 | 14 & $dirty >> 18);
          } else {
            $composer_24.l1h();
          }
        } else {
          $composer_23.l1h();
        }
        $composer_23.d1b();
        $composer_22.d1b();
        $composer_22.k1n();
        $composer_18.d1b();
        $composer_17.d1b();
        var tmp_28 = width(modifier_0._v, ListItemPicker$composable$lambda(dividersWidth$delegate));
        var tmp$ret$64;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$64 = _Dp___init__impl__ms3zkb(2);
        var tmp_29 = height(tmp_28, tmp$ret$64);
        var tmp_30 = dividersColor_0._v.y3a_1;
        Box$composable(background$default(tmp_29, tmp_30, null, 2, null), $composer_15, 0);
      } else {
        $composer_15.l1h();
      }
      $composer_14.d1b();
      $composer_14.k1n();
      $composer_10.d1b();
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
      tmp1_safe_receiver.g1p(ListItemPicker$composable$lambda$ref(modifier_0, label_0, value, onValueChange, dividersColor_0, list, textStyle_0, $changed, $default));
    }
  }
  function Label$composable(text, modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(-1807406218);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(text) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(modifier) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(-1807406218, $dirty, -1, 'com.chargemap.compose.numberpicker.Label$composable (ListItemPicker.kt:190)');
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
        // Inline function 'com.chargemap.compose.numberpicker.Label$composable.<anonymous>' call
        tmp$ret$0 = Label$composable$slambda_0(null);
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
      var tmp0_modifier = pointerInput(modifier, Unit_getInstance(), tmp$ret$4);
      var tmp1_textAlign = Companion_getInstance_3().k3v_1;
      var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextOverflow___init__impl__obguoe(0);
      Text$composable(text, tmp0_modifier, tmp_1, tmp_2, null, null, null, tmp_3, null, tmp1_textAlign, tmp_4, tmp_5, false, 0, null, null, $composer_0, 14 & $dirty, 0, 65020);
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
      tmp0_safe_receiver.g1p(Label$composable$lambda$ref(text, modifier, $changed));
    }
  }
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.l9f_1 = function_0;
  }
  sam$androidx_compose_ui_layout_MeasurePolicy$0.prototype.d5f = function (_this__u8e3s4, measurables, constraints) {
    return this.l9f_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  sam$androidx_compose_ui_layout_MeasurePolicy$0.$metadata$ = classMeta('sam$androidx_compose_ui_layout_MeasurePolicy$0', [MeasurePolicy]);
  function ListItemPicker$composable$lambda($dividersWidth$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('dividersWidth', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $dividersWidth$delegate.i2().f2l_1;
    return tmp$ret$0;
  }
  function ListItemPicker$composable$lambda_0($dividersWidth$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('dividersWidth', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $dividersWidth$delegate.p11(new Dp(value));
  }
  function ListItemPicker$composable$lambda_1($modifier, $label, $value, $onValueChange, $dividersColor, $list, $textStyle, $$changed, $$default, $composer, $force) {
    return ListItemPicker$composable($modifier._v, $label._v, $value, $onValueChange, $dividersColor._v.y3a_1, $list, $textStyle._v, $composer, $$changed | 1, $$default);
  }
  function Label$composable$lambda($text, $modifier, $$changed, $composer, $force) {
    return Label$composable($text, $modifier, $composer, $$changed | 1);
  }
  function ListItemPicker$composable$lambda_2(it) {
    return toString(it);
  }
  function ListItemPicker$composable$lambda_3() {
    return EmptyCoroutineContext_getInstance();
  }
  function ListItemPicker$composable$lambda$slambda($animatedOffset, $deltaY, resultContinuation) {
    this.u9f_1 = $animatedOffset;
    this.v9f_1 = $deltaY;
    CoroutineImpl.call(this, resultContinuation);
  }
  ListItemPicker$composable$lambda$slambda.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  ListItemPicker$composable$lambda$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ListItemPicker$composable$lambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = this.u9f_1.r6z(this.u9f_1.i2() + this.v9f_1, this);
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
  ListItemPicker$composable$lambda$slambda.prototype.f1w = function ($this$launch, completion) {
    var i = new ListItemPicker$composable$lambda$slambda(this.u9f_1, this.v9f_1, completion);
    i.w9f_1 = $this$launch;
    return i;
  };
  ListItemPicker$composable$lambda$slambda.$metadata$ = classMeta('ListItemPicker$composable$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function ListItemPicker$composable$lambda$slambda_0($animatedOffset, $deltaY, resultContinuation) {
    var i = new ListItemPicker$composable$lambda$slambda($animatedOffset, $deltaY, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ListItemPicker$composable$lambda_4($coroutineScope, $animatedOffset) {
    return function (deltaY) {
      launch$default($coroutineScope, null, null, ListItemPicker$composable$lambda$slambda_0($animatedOffset, deltaY, null), 3, null);
      return Unit_getInstance();
    };
  }
  function ListItemPicker$composable$slambda$slambda$lambda($halfNumbersColumnHeightPx) {
    return function (target) {
      var coercedTarget = target % $halfNumbersColumnHeightPx;
      var coercedAnchors = listOf([-$halfNumbersColumnHeightPx, 0.0, $halfNumbersColumnHeightPx]);
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.minByOrNull' call
        var iterator = coercedAnchors.c();
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
        // Inline function 'com.chargemap.compose.numberpicker.ListItemPicker$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp0__anonymous__q1qw7t = minElem;
        var tmp$ret$1;
        // Inline function 'kotlin.math.abs' call
        var tmp0_abs = tmp0__anonymous__q1qw7t - coercedTarget;
        tmp$ret$1 = Math.abs(tmp0_abs);
        tmp$ret$2 = tmp$ret$1;
        var minValue = tmp$ret$2;
        do {
          var e = iterator.e();
          var tmp$ret$4;
          // Inline function 'com.chargemap.compose.numberpicker.ListItemPicker$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$3;
          // Inline function 'kotlin.math.abs' call
          var tmp0_abs_0 = e - coercedTarget;
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
      var coercedPoint = ensureNotNull(tmp$ret$0);
      var base = $halfNumbersColumnHeightPx * numberToInt(target / $halfNumbersColumnHeightPx);
      return coercedPoint + base;
    };
  }
  function ListItemPicker$composable$slambda$slambda($animatedOffset, $velocity, $list, $value, $halfNumbersColumnHeightPx, $onValueChange, resultContinuation) {
    this.f9g_1 = $animatedOffset;
    this.g9g_1 = $velocity;
    this.h9g_1 = $list;
    this.i9g_1 = $value;
    this.j9g_1 = $halfNumbersColumnHeightPx;
    this.k9g_1 = $onValueChange;
    CoroutineImpl.call(this, resultContinuation);
  }
  ListItemPicker$composable$slambda$slambda.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  ListItemPicker$composable$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ListItemPicker$composable$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 3;
            this.zf_1 = 1;
            var tmp_0 = exponentialDecay$default(20.0, 0.0, 2, null);
            var tmp_1 = ListItemPicker$composable$slambda$slambda$lambda(this.j9g_1);
            suspendResult = fling$default(this.f9g_1, this.g9g_1, tmp_0, tmp_1, null, this, 8, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m9g_1 = suspendResult;
            this.n9g_1 = this.m9g_1.q6w_1;
            this.o9g_1 = this.n9g_1.i2();
            var tmp_2 = this;
            var tmp_3 = this;
            tmp_3.p9g_1 = getItemIndexForOffset(this.h9g_1, this.i9g_1, this.o9g_1, this.j9g_1);
            tmp_2.q9g_1 = this.h9g_1.g(this.p9g_1);
            this.k9g_1(this.q9g_1);
            this.zf_1 = 2;
            suspendResult = this.f9g_1.r6z(0.0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  ListItemPicker$composable$slambda$slambda.prototype.f1w = function ($this$launch, completion) {
    var i = new ListItemPicker$composable$slambda$slambda(this.f9g_1, this.g9g_1, this.h9g_1, this.i9g_1, this.j9g_1, this.k9g_1, completion);
    i.l9g_1 = $this$launch;
    return i;
  };
  ListItemPicker$composable$slambda$slambda.$metadata$ = classMeta('ListItemPicker$composable$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function ListItemPicker$composable$slambda$slambda_0($animatedOffset, $velocity, $list, $value, $halfNumbersColumnHeightPx, $onValueChange, resultContinuation) {
    var i = new ListItemPicker$composable$slambda$slambda($animatedOffset, $velocity, $list, $value, $halfNumbersColumnHeightPx, $onValueChange, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ListItemPicker$composable$slambda($coroutineScope, $animatedOffset, $list, $value, $halfNumbersColumnHeightPx, $onValueChange, resultContinuation) {
    this.z9g_1 = $coroutineScope;
    this.a9h_1 = $animatedOffset;
    this.b9h_1 = $list;
    this.c9h_1 = $value;
    this.d9h_1 = $halfNumbersColumnHeightPx;
    this.e9h_1 = $onValueChange;
    CoroutineImpl.call(this, resultContinuation);
  }
  ListItemPicker$composable$slambda.prototype.k85 = function ($this$draggable, velocity, $cont) {
    var tmp = this.l85($this$draggable, velocity, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  ListItemPicker$composable$slambda.prototype.hh = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE();
    return this.k85(tmp, (!(p2 == null) ? typeof p2 === 'number' : false) ? p2 : THROW_CCE(), $cont);
  };
  ListItemPicker$composable$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          launch$default(this.z9g_1, null, null, ListItemPicker$composable$slambda$slambda_0(this.a9h_1, this.g9h_1, this.b9h_1, this.c9h_1, this.d9h_1, this.e9h_1, null), 3, null);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.cg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  ListItemPicker$composable$slambda.prototype.l85 = function ($this$draggable, velocity, completion) {
    var i = new ListItemPicker$composable$slambda(this.z9g_1, this.a9h_1, this.b9h_1, this.c9h_1, this.d9h_1, this.e9h_1, completion);
    i.f9h_1 = $this$draggable;
    i.g9h_1 = velocity;
    return i;
  };
  ListItemPicker$composable$slambda.$metadata$ = classMeta('ListItemPicker$composable$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function ListItemPicker$composable$slambda_0($coroutineScope, $animatedOffset, $list, $value, $halfNumbersColumnHeightPx, $onValueChange, resultContinuation) {
    var i = new ListItemPicker$composable$slambda($coroutineScope, $animatedOffset, $list, $value, $halfNumbersColumnHeightPx, $onValueChange, resultContinuation);
    var l = function ($this$draggable, velocity, $cont) {
      return i.k85($this$draggable, velocity, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function ListItemPicker$composable$lambda$lambda($placeables) {
    return function ($this$layout) {
      var yPosition = 0;
      var tmp0_iterator = $placeables.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'com.chargemap.compose.numberpicker.ListItemPicker$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp = yPosition;
        $this$layout.d4i(element, 0, tmp, 0.0, 4, null);
        yPosition = yPosition + element.i4i_1 | 0;
      }
      return Unit_getInstance();
    };
  }
  function ListItemPicker$composable$lambda_5($dividersWidth$delegate) {
    return function ($this$Layout, measurables, constraints) {
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(measurables, 10));
      var tmp0_iterator = measurables.c();
      while (tmp0_iterator.d()) {
        var item = tmp0_iterator.e();
        var tmp$ret$0;
        // Inline function 'com.chargemap.compose.numberpicker.ListItemPicker$composable.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$0 = item.g4i(constraints.l2k_1);
        tmp0_mapTo.a(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      var placeables = tmp$ret$2;
      ListItemPicker$composable$lambda_0($dividersWidth$delegate, $this$Layout.u2k(first(drop(placeables, 1)).h4i_1));
      var tmp = numberToInt($this$Layout.o2k(ListItemPicker$composable$lambda($dividersWidth$delegate)));
      var tmp$ret$4;
      // Inline function 'kotlin.collections.sumOf' call
      var sum = 0;
      var tmp0_iterator_0 = placeables.c();
      while (tmp0_iterator_0.d()) {
        var element = tmp0_iterator_0.e();
        var tmp_0 = sum;
        var tmp$ret$3;
        // Inline function 'com.chargemap.compose.numberpicker.ListItemPicker$composable.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$3 = element.i4i_1;
        sum = tmp_0 + tmp$ret$3 | 0;
      }
      tmp$ret$4 = sum;
      var tmp_1 = tmp$ret$4;
      return $this$Layout.m4i(tmp, tmp_1, null, ListItemPicker$composable$lambda$lambda(placeables), 4, null);
    };
  }
  function ListItemPicker$composable$lambda_6($coercedAnimatedOffset) {
    return function ($this$offset) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.roundToInt' call
      tmp$ret$0 = roundToInt($coercedAnimatedOffset);
      return new IntOffset_0(IntOffset(0, tmp$ret$0));
    };
  }
  function ListItemPicker$composable$lambda_7($indexOfElement, $label, $list, $baseLabelModifier, $halfNumbersColumnHeight, $coercedAnimatedOffset, $halfNumbersColumnHeightPx, $minimumAlpha) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.l1m()) {
        if (isTraceInProgress()) {
          traceEventStart(-1055803749, $changed, -1, 'com.chargemap.compose.numberpicker.ListItemPicker$composable.<anonymous>.<anonymous>.<anonymous> (ListItemPicker.kt:119)');
        }
        $composer_0.y1a(-547298430);
        if ($indexOfElement > 0) {
          var tmp_0 = $label._v;
          var tmp$ret$0;
          // Inline function 'kotlin.collections.elementAt' call
          var tmp0_elementAt = $indexOfElement - 1 | 0;
          tmp$ret$0 = $list.g(tmp0_elementAt);
          var tmp_1 = tmp_0(tmp$ret$0);
          var tmp$ret$1;
          // Inline function 'androidx.compose.ui.unit.Dp.unaryMinus' call
          tmp$ret$1 = _Dp___init__impl__ms3zkb(-_Dp___get_value__impl__geb1vb($halfNumbersColumnHeight));
          var tmp_2 = offset$default($baseLabelModifier, null, tmp$ret$1, 1, null);
          var tmp$ret$2;
          // Inline function 'kotlin.comparisons.maxOf' call
          var tmp1_maxOf = $coercedAnimatedOffset / $halfNumbersColumnHeightPx;
          tmp$ret$2 = Math.max($minimumAlpha, tmp1_maxOf);
          Label$composable(tmp_1, alpha(tmp_2, tmp$ret$2), $composer_0, 0);
        }
        $composer_0.d1b();
        var tmp_3 = $label._v;
        var tmp$ret$3;
        // Inline function 'kotlin.collections.elementAt' call
        tmp$ret$3 = $list.g($indexOfElement);
        var tmp_4 = tmp_3(tmp$ret$3);
        var tmp$ret$5;
        // Inline function 'kotlin.comparisons.maxOf' call
        var tmp$ret$4;
        // Inline function 'kotlin.math.abs' call
        tmp$ret$4 = Math.abs($coercedAnimatedOffset);
        var tmp2_maxOf = 1 - tmp$ret$4 / $halfNumbersColumnHeightPx;
        tmp$ret$5 = Math.max($minimumAlpha, tmp2_maxOf);
        Label$composable(tmp_4, alpha($baseLabelModifier, tmp$ret$5), $composer_0, 0);
        var tmp$ret$6;
        // Inline function 'kotlin.collections.count' call
        tmp$ret$6 = $list.f();
        if ($indexOfElement < (tmp$ret$6 - 1 | 0)) {
          var tmp_5 = $label._v;
          var tmp$ret$7;
          // Inline function 'kotlin.collections.elementAt' call
          var tmp3_elementAt = $indexOfElement + 1 | 0;
          tmp$ret$7 = $list.g(tmp3_elementAt);
          var tmp_6 = tmp_5(tmp$ret$7);
          var tmp_7 = offset$default($baseLabelModifier, null, $halfNumbersColumnHeight, 1, null);
          var tmp$ret$8;
          // Inline function 'kotlin.comparisons.maxOf' call
          var tmp4_maxOf = -$coercedAnimatedOffset / $halfNumbersColumnHeightPx;
          tmp$ret$8 = Math.max($minimumAlpha, tmp4_maxOf);
          Label$composable(tmp_6, alpha(tmp_7, tmp$ret$8), $composer_0, 0);
        }
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_getInstance();
        }
        tmp = tmp_8;
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
  function ListItemPicker$composable$lambda$ref($modifier, $label, $value, $onValueChange, $dividersColor, $list, $textStyle, $$changed, $$default) {
    return function (p0, p1) {
      ListItemPicker$composable$lambda_1($modifier, $label, $value, $onValueChange, $dividersColor, $list, $textStyle, $$changed, $$default, p0, p1);
      return Unit_getInstance();
    };
  }
  function Label$composable$slambda$lambda(it) {
    return Unit_getInstance();
  }
  function Label$composable$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  Label$composable$slambda.prototype.s57 = function ($this$pointerInput, $cont) {
    var tmp = this.t57($this$pointerInput, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  Label$composable$slambda.prototype.jg = function (p1, $cont) {
    return this.s57((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  Label$composable$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            var tmp_0 = Label$composable$slambda$lambda;
            suspendResult = detectTapGestures$default(this.p9h_1, null, tmp_0, null, null, this, 13, null);
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
  Label$composable$slambda.prototype.t57 = function ($this$pointerInput, completion) {
    var i = new Label$composable$slambda(completion);
    i.p9h_1 = $this$pointerInput;
    return i;
  };
  Label$composable$slambda.$metadata$ = classMeta('Label$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Label$composable$slambda_0(resultContinuation) {
    var i = new Label$composable$slambda(resultContinuation);
    var l = function ($this$pointerInput, $cont) {
      return i.s57($this$pointerInput, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Label$composable$lambda$ref($text, $modifier, $$changed) {
    return function (p0, p1) {
      Label$composable$lambda($text, $modifier, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function $flingCOROUTINE$0(_this__u8e3s4, initialVelocity, animationSpec, adjustTarget, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d9f_1 = _this__u8e3s4;
    this.e9f_1 = initialVelocity;
    this.f9f_1 = animationSpec;
    this.g9f_1 = adjustTarget;
    this.h9f_1 = block;
  }
  $flingCOROUTINE$0.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 4;
            this.i9f_1 = calculateTargetValue(this.f9f_1, this.d9f_1.i2(), this.e9f_1);
            var tmp_0 = this;
            var tmp0_safe_receiver = this.g9f_1;
            tmp_0.j9f_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver(this.i9f_1);
            if (!(this.j9f_1 == null)) {
              this.zf_1 = 2;
              suspendResult = this.d9f_1.p6z(this.j9f_1, null, this.e9f_1, this.h9f_1, this, 2, null);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zf_1 = 1;
              suspendResult = this.d9f_1.q6z(this.e9f_1, this.f9f_1, this.h9f_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.k9f_1 = suspendResult;
            this.zf_1 = 3;
            continue $sm;
          case 2:
            this.k9f_1 = suspendResult;
            this.zf_1 = 3;
            continue $sm;
          case 3:
            return this.k9f_1;
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
  $flingCOROUTINE$0.$metadata$ = classMeta('$flingCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function NumberPicker$composable(modifier, label, value, onValueChange, dividersColor, range, textStyle, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var label_0 = {_v: label};
    var dividersColor_0 = {_v: new Color(dividersColor)};
    var textStyle_0 = {_v: textStyle};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(-85936731);
    sourceInformation($composer_0, 'C(NumberPicker$composable)P(2,1,6,3,0:c#ui.graphics.Color)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(modifier_0._v) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.z1a(label_0._v) : false) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.q1n(value) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.z1a(onValueChange) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.p1n(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(dividersColor_0._v.y3a_1))) : false) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.z1a(range) ? 131072 : 65536);
    if (($changed & 3670016) === 0)
      $dirty = $dirty | ((($default & 64) === 0 ? $composer_0.z1a(textStyle_0._v) : false) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.l1m()) {
      $composer_0.y1m();
      if (($changed & 1) === 0 ? true : $composer_0.c1n()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 2) === 0)) {
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
            // Inline function 'com.chargemap.compose.numberpicker.NumberPicker$composable.<anonymous>' call
            tmp$ret$0 = NumberPicker$composable$lambda_0;
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
          label_0._v = tmp$ret$4;
          $dirty = $dirty & -113;
        }
        if (!(($default & 16) === 0)) {
          dividersColor_0._v = new Color(MaterialTheme_getInstance().e93($composer_0, 6).s93());
          $dirty = $dirty & -57345;
        }
        if (!(($default & 64) === 0)) {
          var tmp$ret$5;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp1_$get_current$$composable_gn3xww = get_LocalTextStyle();
          var tmp2_$get_current$$composable_g4n2vl = $composer_0;
          var $composer_2 = tmp2_$get_current$$composable_g4n2vl;
          sourceInformationMarkerStart($composer_2, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_0 = $composer_2.w1n(tmp1_$get_current$$composable_gn3xww);
          sourceInformationMarkerEnd($composer_2);
          tmp$ret$5 = tmp0_0;
          textStyle_0._v = tmp$ret$5;
          $dirty = $dirty & -3670017;
        }
      } else {
        $composer_0.l1h();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 64) === 0))
          $dirty = $dirty & -3670017;
      }
      $composer_0.z1m();
      if (isTraceInProgress()) {
        traceEventStart(-85936731, $dirty, -1, 'com.chargemap.compose.numberpicker.NumberPicker$composable (NumberPicker.kt:10)');
      }
      ListItemPicker$composable(modifier_0._v, label_0._v, value, onValueChange, dividersColor_0._v.y3a_1, toList(range), textStyle_0._v, $composer_0, 14 & $dirty | 112 & $dirty | 896 & $dirty | 7168 & $dirty | 57344 & $dirty | 3670016 & $dirty, 0);
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
      tmp0_safe_receiver.g1p(NumberPicker$composable$lambda$ref(modifier_0, label_0, value, onValueChange, dividersColor_0, range, textStyle_0, $changed, $default));
    }
  }
  function NumberPicker$composable$lambda($modifier, $label, $value, $onValueChange, $dividersColor, $range, $textStyle, $$changed, $$default, $composer, $force) {
    return NumberPicker$composable($modifier._v, $label._v, $value, $onValueChange, $dividersColor._v.y3a_1, $range, $textStyle._v, $composer, $$changed | 1, $$default);
  }
  function NumberPicker$composable$lambda_0(it) {
    return it.toString();
  }
  function NumberPicker$composable$lambda$ref($modifier, $label, $value, $onValueChange, $dividersColor, $range, $textStyle, $$changed, $$default) {
    return function (p0, p1) {
      NumberPicker$composable$lambda($modifier, $label, $value, $onValueChange, $dividersColor, $range, $textStyle, $$changed, $$default, p0, p1);
      return Unit_getInstance();
    };
  }
  function get_defHoldMap() {
    init_properties_App_kt_kz6q5v();
    return defHoldMap;
  }
  var defHoldMap;
  function App$composable($composer, $changed) {
    init_properties_App_kt_kz6q5v();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(352554893);
    sourceInformation($composer_0, 'C(App$composable)');
    if (!($changed === 0) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(352554893, $changed, -1, 'com.patriker.icebreathing.App$composable (App.kt:10)');
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
        // Inline function 'com.patriker.icebreathing.App$composable.<anonymous>' call
        var tmp_0 = new SessionData(30, 3, get_defHoldMap());
        tmp$ret$0 = mutableStateOf$default(tmp_0, null, 2, null);
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
      var thisSession$delegate = tmp$ret$4;
      if (AppState_getInstance().s9h().equals(ScreenType_Start_getInstance())) {
        $composer_0.y1a(1806153098);
        var tmp_2 = App$composable$lambda(thisSession$delegate);
        StartScreen$composable(tmp_2, App$composable$clickedStartBreathing$ref(), $composer_0, 0);
        $composer_0.d1b();
      } else {
        $composer_0.y1a(1806153172);
        var tmp_3 = App$composable$lambda(thisSession$delegate);
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
        var tmp_4;
        if (false ? true : tmp0_let_0 === Companion_getInstance_0().c1b_1) {
          var tmp$ret$5;
          // Inline function 'com.patriker.icebreathing.App$composable.<anonymous>' call
          tmp$ret$5 = App$composable$clickedBack$ref();
          var value_0 = tmp$ret$5;
          tmp1_cache_0.b1b(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_4;
        tmp$ret$7 = tmp$ret$6;
        var tmp_5 = tmp$ret$7;
        tmp$ret$8 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.d1b();
        tmp$ret$9 = tmp0_0;
        BreatheScreen$composable(tmp_3, tmp$ret$9, $composer_0, 0);
        $composer_0.d1b();
      }
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
      tmp0_safe_receiver.g1p(App$composable$lambda$ref($changed));
    }
  }
  function App$composable$lambda($thisSession$delegate) {
    init_properties_App_kt_kz6q5v();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('thisSession', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $thisSession$delegate.i2();
    return tmp$ret$0;
  }
  function App$composable$clickedStartBreathing(s) {
    AppState_getInstance().t9h(ScreenType_Breathe_getInstance());
  }
  function App$composable$clickedBack() {
    AppState_getInstance().t9h(ScreenType_Start_getInstance());
  }
  function App$composable$lambda_0($$changed, $composer, $force) {
    return App$composable($composer, $$changed | 1);
  }
  function App$composable$clickedStartBreathing$ref() {
    var l = function (p0) {
      App$composable$clickedStartBreathing(p0);
      return Unit_getInstance();
    };
    l.callableName = 'clickedStartBreathing';
    return l;
  }
  function App$composable$clickedBack$ref() {
    var l = function () {
      App$composable$clickedBack();
      return Unit_getInstance();
    };
    l.callableName = 'clickedBack';
    return l;
  }
  function App$composable$lambda$ref($$changed) {
    return function (p0, p1) {
      App$composable$lambda_0($$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  var properties_initialized_App_kt_kalemn;
  function init_properties_App_kt_kz6q5v() {
    if (properties_initialized_App_kt_kalemn) {
    } else {
      properties_initialized_App_kt_kalemn = true;
      defHoldMap = mapOf([to(1, 90), to(2, 120), to(3, 145), to(4, 150), to(5, 150), to(6, 180), to(7, 180), to(8, 180), to(9, 180), to(10, 200)]);
    }
  }
  var ScreenType_Start_instance;
  var ScreenType_Breathe_instance;
  var ScreenType_BreathHold_instance;
  var ScreenType_BreathInHold_instance;
  var ScreenType_GetReady_instance;
  var ScreenType_entriesInitialized;
  function ScreenType_initEntries() {
    if (ScreenType_entriesInitialized)
      return Unit_getInstance();
    ScreenType_entriesInitialized = true;
    ScreenType_Start_instance = new ScreenType('Start', 0);
    ScreenType_Breathe_instance = new ScreenType('Breathe', 1);
    ScreenType_BreathHold_instance = new ScreenType('BreathHold', 2);
    ScreenType_BreathInHold_instance = new ScreenType('BreathInHold', 3);
    ScreenType_GetReady_instance = new ScreenType('GetReady', 4);
  }
  function ScreenType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  ScreenType.$metadata$ = classMeta('ScreenType', undefined, undefined, undefined, undefined, Enum.prototype);
  function AppState() {
    AppState_instance = this;
    var tmp = this;
    var tmp_0 = ScreenType_Start_getInstance();
    tmp.q9h_1 = mutableStateOf$default(tmp_0, null, 2, null);
    this.r9h_1 = 8;
  }
  AppState.prototype.s9h = function () {
    return this.q9h_1.i2();
  };
  AppState.prototype.t9h = function (state) {
    this.q9h_1.p11(state);
  };
  AppState.$metadata$ = objectMeta('AppState');
  var AppState_instance;
  function AppState_getInstance() {
    if (AppState_instance == null)
      new AppState();
    return AppState_instance;
  }
  function ScreenType_Start_getInstance() {
    ScreenType_initEntries();
    return ScreenType_Start_instance;
  }
  function ScreenType_Breathe_getInstance() {
    ScreenType_initEntries();
    return ScreenType_Breathe_instance;
  }
  var BreatheState_Full_instance;
  var BreatheState_Empty_instance;
  var BreatheState_Paused_instance;
  var BreatheState_entriesInitialized;
  function BreatheState_initEntries() {
    if (BreatheState_entriesInitialized)
      return Unit_getInstance();
    BreatheState_entriesInitialized = true;
    BreatheState_Full_instance = new BreatheState('Full', 0);
    BreatheState_Empty_instance = new BreatheState('Empty', 1);
    BreatheState_Paused_instance = new BreatheState('Paused', 2);
  }
  function BreatheState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  BreatheState.$metadata$ = classMeta('BreatheState', undefined, undefined, undefined, undefined, Enum.prototype);
  var LeafPos_TopLeft_instance;
  var LeafPos_TopRight_instance;
  var LeafPos_BottomLeft_instance;
  var LeafPos_BottomRight_instance;
  var LeafPos_Top_instance;
  var LeafPos_Center_instance;
  function values() {
    return [LeafPos_TopLeft_getInstance(), LeafPos_TopRight_getInstance(), LeafPos_BottomLeft_getInstance(), LeafPos_BottomRight_getInstance(), LeafPos_Top_getInstance(), LeafPos_Center_getInstance()];
  }
  var LeafPos_entriesInitialized;
  function LeafPos_initEntries() {
    if (LeafPos_entriesInitialized)
      return Unit_getInstance();
    LeafPos_entriesInitialized = true;
    LeafPos_TopLeft_instance = new LeafPos('TopLeft', 0);
    LeafPos_TopRight_instance = new LeafPos('TopRight', 1);
    LeafPos_BottomLeft_instance = new LeafPos('BottomLeft', 2);
    LeafPos_BottomRight_instance = new LeafPos('BottomRight', 3);
    LeafPos_Top_instance = new LeafPos('Top', 4);
    LeafPos_Center_instance = new LeafPos('Center', 5);
  }
  function LeafPos(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  LeafPos.$metadata$ = classMeta('LeafPos', undefined, undefined, undefined, undefined, Enum.prototype);
  function BreatheCanvas$composable(screenSize, currBreaths, totalBreaths, onFinishBreath, breathPaused, finishClicked, animSpeed, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(-435885951);
    sourceInformation($composer_0, 'C(BreatheCanvas$composable)P(5:c#ui.unit.IntSize,2,6,4,1,3)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.p1n(_IntSize___get_packedValue__impl__uho7jf(screenSize)) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.q1n(currBreaths) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.q1n(totalBreaths) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.z1a(onFinishBreath) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.f1b(breathPaused) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.f1b(finishClicked) ? 131072 : 65536);
    if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.q1n(animSpeed) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(-435885951, $dirty, -1, 'com.patriker.icebreathing.BreatheCanvas$composable (BreathCanvas.kt:33)');
      }
      var tmp$ret$2;
      // Inline function 'kotlin.collections.filterNot' call
      var tmp0_filterNot = values();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.filterNotTo' call
      var tmp0_filterNotTo = ArrayList_init_$Create$_0();
      var indexedObject = tmp0_filterNot;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
        var tmp0_return = element.equals(LeafPos_Center_getInstance());
        tmp$ret$0 = tmp0_return;
        if (!tmp$ret$0) {
          tmp0_filterNotTo.a(element);
        }
      }
      tmp$ret$1 = tmp0_filterNotTo;
      tmp$ret$2 = tmp$ret$1;
      var edgeLeaves = tmp$ret$2;
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp1_remember$composable = $composer_0;
      var $composer_1 = tmp1_remember$composable;
      $composer_1.y1a(547886695);
      sourceInformation($composer_1, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
        var tmp$ret$3;
        // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
        tmp$ret$3 = mutableStateOf$default(0.0, null, 2, null);
        var value = tmp$ret$3;
        tmp1_cache.b1b(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      tmp$ret$4 = tmp;
      tmp$ret$5 = tmp$ret$4;
      var tmp_0 = tmp$ret$5;
      tmp$ret$6 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      var tmp0 = tmp$ret$6;
      $composer_1.d1b();
      tmp$ret$7 = tmp0;
      var currRad$delegate = tmp$ret$7;
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_2 = tmp2_remember$composable;
      $composer_2.y1a(547886695);
      sourceInformation($composer_2, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp$ret$10;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (false ? true : tmp0_let_0 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$8;
        // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
        tmp$ret$8 = mutableStateOf$default(0.0, null, 2, null);
        var value_0 = tmp$ret$8;
        tmp1_cache_0.b1b(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      tmp$ret$9 = tmp_1;
      tmp$ret$10 = tmp$ret$9;
      var tmp_2 = tmp$ret$10;
      tmp$ret$11 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0_0 = tmp$ret$11;
      $composer_2.d1b();
      tmp$ret$12 = tmp0_0;
      var currRadDelayed$delegate = tmp$ret$12;
      var sizeDiv = 4.5;
      var tmp$ret$18;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_3 = tmp3_remember$composable;
      $composer_3.y1a(547886695);
      sourceInformation($composer_3, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$17;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = $composer_3;
      var tmp$ret$16;
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = tmp1_cache_1.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$15;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (false ? true : tmp0_let_1 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$14;
        // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
        var tmp$ret$13;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = _IntSize___get_height__impl__prv63b(screenSize) / sizeDiv;
        var tmp1_minOf = _IntSize___get_width__impl__d9yl4o(screenSize) / sizeDiv;
        tmp$ret$13 = Math.min(tmp0_minOf, tmp1_minOf);
        var tmp_4 = tmp$ret$13;
        tmp$ret$14 = mutableStateOf$default(tmp_4, null, 2, null);
        var value_1 = tmp$ret$14;
        tmp1_cache_1.b1b(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = tmp0_let_1;
      }
      tmp$ret$15 = tmp_3;
      tmp$ret$16 = tmp$ret$15;
      var tmp_5 = tmp$ret$16;
      tmp$ret$17 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      var tmp0_1 = tmp$ret$17;
      $composer_3.d1b();
      tmp$ret$18 = tmp0_1;
      var radiusEnd$delegate = tmp$ret$18;
      var tmp$ret$24;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp4_remember$composable = $composer_0;
      var $composer_4 = tmp4_remember$composable;
      $composer_4.y1a(547886695);
      sourceInformation($composer_4, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$23;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_2 = $composer_4;
      var tmp$ret$22;
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = tmp1_cache_2.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$21;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_6;
      if (false ? true : tmp0_let_2 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$20;
        // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
        var tmp$ret$19;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf_0 = _IntSize___get_height__impl__prv63b(screenSize) / sizeDiv;
        var tmp1_minOf_0 = _IntSize___get_width__impl__d9yl4o(screenSize) / sizeDiv;
        tmp$ret$19 = Math.min(tmp0_minOf_0, tmp1_minOf_0);
        var tmp_7 = tmp$ret$19 / 100.0;
        tmp$ret$20 = mutableStateOf$default(tmp_7, null, 2, null);
        var value_2 = tmp$ret$20;
        tmp1_cache_2.b1b(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = tmp0_let_2;
      }
      tmp$ret$21 = tmp_6;
      tmp$ret$22 = tmp$ret$21;
      var tmp_8 = tmp$ret$22;
      tmp$ret$23 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
      var tmp0_2 = tmp$ret$23;
      $composer_4.d1b();
      tmp$ret$24 = tmp0_2;
      var minRadius$delegate = tmp$ret$24;
      var tmp$ret$29;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp5_remember$composable = $composer_0;
      var $composer_5 = tmp5_remember$composable;
      $composer_5.y1a(547886695);
      sourceInformation($composer_5, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$28;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_3 = $composer_5;
      var tmp$ret$27;
      // Inline function 'kotlin.let' call
      var tmp0_let_3 = tmp1_cache_3.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$26;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_9;
      if (false ? true : tmp0_let_3 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$25;
        // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
        var tmp_10 = BreatheState_Empty_getInstance();
        tmp$ret$25 = mutableStateOf$default(tmp_10, null, 2, null);
        var value_3 = tmp$ret$25;
        tmp1_cache_3.b1b(value_3);
        tmp_9 = value_3;
      } else {
        tmp_9 = tmp0_let_3;
      }
      tmp$ret$26 = tmp_9;
      tmp$ret$27 = tmp$ret$26;
      var tmp_11 = tmp$ret$27;
      tmp$ret$28 = (tmp_11 == null ? true : isObject(tmp_11)) ? tmp_11 : THROW_CCE();
      var tmp0_3 = tmp$ret$28;
      $composer_5.d1b();
      tmp$ret$29 = tmp0_3;
      var breatheState$delegate = tmp$ret$29;
      var tmp$ret$34;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp6_remember$composable = $composer_0;
      var $composer_6 = tmp6_remember$composable;
      $composer_6.y1a(547886695);
      sourceInformation($composer_6, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$33;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_4 = $composer_6;
      var tmp$ret$32;
      // Inline function 'kotlin.let' call
      var tmp0_let_4 = tmp1_cache_4.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$31;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_12;
      if (false ? true : tmp0_let_4 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$30;
        // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
        tmp$ret$30 = mutableStateOf$default(false, null, 2, null);
        var value_4 = tmp$ret$30;
        tmp1_cache_4.b1b(value_4);
        tmp_12 = value_4;
      } else {
        tmp_12 = tmp0_let_4;
      }
      tmp$ret$31 = tmp_12;
      tmp$ret$32 = tmp$ret$31;
      var tmp_13 = tmp$ret$32;
      tmp$ret$33 = (tmp_13 == null ? true : isObject(tmp_13)) ? tmp_13 : THROW_CCE();
      var tmp0_4 = tmp$ret$33;
      $composer_6.d1b();
      tmp$ret$34 = tmp0_4;
      var finalBreath$delegate = tmp$ret$34;
      var tmp$ret$39;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp7_remember$composable = $composer_0;
      var $composer_7 = tmp7_remember$composable;
      $composer_7.y1a(547886695);
      sourceInformation($composer_7, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$38;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_5 = $composer_7;
      var tmp$ret$37;
      // Inline function 'kotlin.let' call
      var tmp0_let_5 = tmp1_cache_5.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$36;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_14;
      if (false ? true : tmp0_let_5 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$35;
        // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
        var tmp_15 = BreatheState_Paused_getInstance();
        tmp$ret$35 = mutableStateOf$default(tmp_15, null, 2, null);
        var value_5 = tmp$ret$35;
        tmp1_cache_5.b1b(value_5);
        tmp_14 = value_5;
      } else {
        tmp_14 = tmp0_let_5;
      }
      tmp$ret$36 = tmp_14;
      tmp$ret$37 = tmp$ret$36;
      var tmp_16 = tmp$ret$37;
      tmp$ret$38 = (tmp_16 == null ? true : isObject(tmp_16)) ? tmp_16 : THROW_CCE();
      var tmp0_5 = tmp$ret$38;
      $composer_7.d1b();
      tmp$ret$39 = tmp0_5;
      var prevState$delegate = tmp$ret$39;
      var tmp$ret$44;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp8_remember$composable = $composer_0;
      var $composer_8 = tmp8_remember$composable;
      $composer_8.y1a(-1603429786);
      sourceInformation($composer_8, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var indexedObject_0 = [new IntSize(screenSize), sizeDiv, radiusEnd$delegate, minRadius$delegate, totalBreaths, currBreaths, finalBreath$delegate, breatheState$delegate];
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var key = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        invalid = !!(invalid | $composer_8.z1a(key));
      }
      var tmp$ret$43;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_6 = $composer_8;
      var tmp2_cache = invalid;
      var tmp$ret$42;
      // Inline function 'kotlin.let' call
      var tmp0_let_6 = tmp1_cache_6.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$41;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_17;
      if (tmp2_cache ? true : tmp0_let_6 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$40;
        // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
        tmp$ret$40 = BreatheCanvas$composable$slambda_0(totalBreaths, currBreaths, screenSize, sizeDiv, radiusEnd$delegate, minRadius$delegate, finalBreath$delegate, breatheState$delegate, null);
        var value_6 = tmp$ret$40;
        tmp1_cache_6.b1b(value_6);
        tmp_17 = value_6;
      } else {
        tmp_17 = tmp0_let_6;
      }
      tmp$ret$41 = tmp_17;
      tmp$ret$42 = tmp$ret$41;
      var tmp_18 = tmp$ret$42;
      tmp$ret$43 = (tmp_18 == null ? true : isObject(tmp_18)) ? tmp_18 : THROW_CCE();
      var tmp0_6 = tmp$ret$43;
      $composer_8.d1b();
      tmp$ret$44 = tmp0_6;
      LaunchedEffect$composable(currBreaths, tmp$ret$44, $composer_0, 14 & $dirty >> 3);
      var tmp$ret$49;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp9_remember$composable = $composer_0;
      var $composer_9 = tmp9_remember$composable;
      $composer_9.y1a(-1603429786);
      sourceInformation($composer_9, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid_0 = false;
      var indexedObject_1 = [breathPaused, prevState$delegate, breatheState$delegate, new IntSize(screenSize), sizeDiv, radiusEnd$delegate, minRadius$delegate];
      var inductionVariable_1 = 0;
      var last_1 = indexedObject_1.length;
      while (inductionVariable_1 < last_1) {
        var key_0 = indexedObject_1[inductionVariable_1];
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        invalid_0 = !!(invalid_0 | $composer_9.z1a(key_0));
      }
      var tmp$ret$48;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_7 = $composer_9;
      var tmp2_cache_0 = invalid_0;
      var tmp$ret$47;
      // Inline function 'kotlin.let' call
      var tmp0_let_7 = tmp1_cache_7.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$46;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_19;
      if (tmp2_cache_0 ? true : tmp0_let_7 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$45;
        // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
        tmp$ret$45 = BreatheCanvas$composable$slambda_2(breathPaused, breatheState$delegate, prevState$delegate, screenSize, sizeDiv, radiusEnd$delegate, minRadius$delegate, null);
        var value_7 = tmp$ret$45;
        tmp1_cache_7.b1b(value_7);
        tmp_19 = value_7;
      } else {
        tmp_19 = tmp0_let_7;
      }
      tmp$ret$46 = tmp_19;
      tmp$ret$47 = tmp$ret$46;
      var tmp_20 = tmp$ret$47;
      tmp$ret$48 = (tmp_20 == null ? true : isObject(tmp_20)) ? tmp_20 : THROW_CCE();
      var tmp0_7 = tmp$ret$48;
      $composer_9.d1b();
      tmp$ret$49 = tmp0_7;
      LaunchedEffect$composable(breathPaused, tmp$ret$49, $composer_0, 14 & $dirty >> 12);
      var tmp$ret$54;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp10_remember$composable = $composer_0;
      var tmp11_remember$composable = 14 & $dirty >> 15;
      var $composer_10 = tmp10_remember$composable;
      $composer_10.y1a(-1058148781);
      sourceInformation($composer_10, 'C(remember$composable)P(1,2,3):Composables.kt#9igjgp');
      var tmp$ret$53;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_8 = $composer_10;
      var tmp2_cache_1 = !!(!!($composer_10.z1a(finishClicked) | $composer_10.z1a(finalBreath$delegate)) | $composer_10.z1a(breatheState$delegate));
      var tmp$ret$52;
      // Inline function 'kotlin.let' call
      var tmp0_let_8 = tmp1_cache_8.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$51;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_21;
      if (tmp2_cache_1 ? true : tmp0_let_8 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$50;
        // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
        tmp$ret$50 = BreatheCanvas$composable$slambda_4(finishClicked, finalBreath$delegate, breatheState$delegate, null);
        var value_8 = tmp$ret$50;
        tmp1_cache_8.b1b(value_8);
        tmp_21 = value_8;
      } else {
        tmp_21 = tmp0_let_8;
      }
      tmp$ret$51 = tmp_21;
      tmp$ret$52 = tmp$ret$51;
      var tmp_22 = tmp$ret$52;
      tmp$ret$53 = (tmp_22 == null ? true : isObject(tmp_22)) ? tmp_22 : THROW_CCE();
      var tmp0_8 = tmp$ret$53;
      $composer_10.d1b();
      tmp$ret$54 = tmp0_8;
      LaunchedEffect$composable(finishClicked, tmp$ret$54, $composer_0, 14 & $dirty >> 15);
      var tmp_23 = BreatheCanvas$composable$lambda_7(breatheState$delegate);
      var transit = updateTransition$composable(tmp_23, null, $composer_0, 0, 2);
      var tmp$ret$64;
      // Inline function 'androidx.compose.animation.animateColor$composable' call
      var tmp12_animateColor$composable = BreatheCanvas$composable$lambda_20(animSpeed, breatheState$delegate, finalBreath$delegate);
      var tmp13_animateColor$composable = null;
      var tmp14_animateColor$composable = $composer_0;
      var transitionSpec = tmp12_animateColor$composable;
      var label = tmp13_animateColor$composable;
      var $composer_11 = tmp14_animateColor$composable;
      $composer_11.y1a(-1488075038);
      sourceInformation($composer_11, 'C(animateColor$composable)P(2)68@3224L31,69@3291L70,73@3374L70:Transition.kt#xbi5r1');
      if (!(0 === 0)) {
        transitionSpec = BreatheCanvas$composable$lambda_21;
      }
      if (!(2 === 0))
        label = 'ColorAnimation';
      var tmp$ret$55;
      // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
      var tmp15__anonymous__a63r3d = transit.o79();
      var tmp16__anonymous__5bf3vu = $composer_11;
      var tmp17__anonymous__gqgob = 0;
      var $composer_12 = tmp16__anonymous__5bf3vu;
      $composer_12.y1a(549082462);
      if (isTraceInProgress()) {
        traceEventStart(549082462, tmp17__anonymous__gqgob, -1, 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous> (BreathCanvas.kt:96)');
      }
      var tmp0_subject = tmp15__anonymous__a63r3d;
      var tmp0_9 = tmp0_subject.t5_1;
      var tmp_24;
      switch (tmp0_9) {
        case 0:
          tmp_24 = get_mainColorTemp();
          break;
        case 1:
          tmp_24 = get_secondColorTemp();
          break;
        case 2:
          tmp_24 = Companion_getInstance_4().f3a_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_10 = tmp_24;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_12.d1b();
      tmp$ret$55 = tmp0_10;
      var colorSpace = _Color___get_colorSpace__impl__jqqozk(tmp$ret$55);
      var tmp$ret$60;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_11;
      var $composer_13 = tmp0_remember$composable;
      $composer_13.y1a(-838505973);
      sourceInformation($composer_13, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$59;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_9 = $composer_13;
      var tmp2_cache_2 = $composer_13.z1a(colorSpace);
      var tmp$ret$58;
      // Inline function 'kotlin.let' call
      var tmp0_let_9 = tmp1_cache_9.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$57;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_25;
      if (tmp2_cache_2 ? true : tmp0_let_9 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$56;
        // Inline function 'androidx.compose.animation.animateColor$composable.<anonymous>' call
        tmp$ret$56 = get_VectorConverter(Companion_getInstance_4())(colorSpace);
        var value_9 = tmp$ret$56;
        tmp1_cache_9.b1b(value_9);
        tmp_25 = value_9;
      } else {
        tmp_25 = tmp0_let_9;
      }
      tmp$ret$57 = tmp_25;
      tmp$ret$58 = tmp$ret$57;
      var tmp_26 = tmp$ret$58;
      tmp$ret$59 = (tmp_26 == null ? true : isObject(tmp_26)) ? tmp_26 : THROW_CCE();
      var tmp0_11 = tmp$ret$59;
      $composer_13.d1b();
      tmp$ret$60 = tmp0_11;
      var typeConverter = tmp$ret$60;
      var tmp$ret$63;
      // Inline function 'androidx.compose.animation.core.animateValue$composable' call
      var tmp1_animateValue$composable = transitionSpec;
      var tmp2_animateValue$composable = label;
      var tmp3_animateValue$composable = $composer_11;
      var tmp4_animateValue$composable = 0;
      var transitionSpec_0 = tmp1_animateValue$composable;
      var label_0 = tmp2_animateValue$composable;
      var $composer_14 = tmp3_animateValue$composable;
      $composer_14.y1a(-1940744337);
      sourceInformation($composer_14, 'C(animateValue$composable)P(3,2)856@34079L32,857@34134L31,858@34190L23,860@34226L89:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec_0 = BreatheCanvas$composable$lambda_22;
      }
      if (!(0 === 0))
        label_0 = 'ValueAnimation';
      var tmp$ret$61;
      // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
      var tmp18__anonymous__4dy6j8 = transit.d7a();
      var tmp19__anonymous__98mtqr = $composer_14;
      var tmp20__anonymous__q2j3lv = 112 & tmp4_animateValue$composable >> 9;
      var $composer_15 = tmp19__anonymous__98mtqr;
      $composer_15.y1a(549082462);
      if (isTraceInProgress()) {
        traceEventStart(549082462, tmp20__anonymous__q2j3lv, -1, 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous> (BreathCanvas.kt:96)');
      }
      var tmp0_subject_0 = tmp18__anonymous__4dy6j8;
      var tmp0_12 = tmp0_subject_0.t5_1;
      var tmp_27;
      switch (tmp0_12) {
        case 0:
          tmp_27 = get_mainColorTemp();
          break;
        case 1:
          tmp_27 = get_secondColorTemp();
          break;
        case 2:
          tmp_27 = Companion_getInstance_4().f3a_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_13 = tmp_27;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_15.d1b();
      tmp$ret$61 = tmp0_13;
      var initialValue = tmp$ret$61;
      var tmp$ret$62;
      // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
      var tmp21__anonymous__l7ugec = transit.o79();
      var tmp22__anonymous__gd5t6t = $composer_14;
      var tmp23__anonymous__bih5za = 112 & tmp4_animateValue$composable >> 9;
      var $composer_16 = tmp22__anonymous__gd5t6t;
      $composer_16.y1a(549082462);
      if (isTraceInProgress()) {
        traceEventStart(549082462, tmp23__anonymous__bih5za, -1, 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous> (BreathCanvas.kt:96)');
      }
      var tmp0_subject_1 = tmp21__anonymous__l7ugec;
      var tmp0_14 = tmp0_subject_1.t5_1;
      var tmp_28;
      switch (tmp0_14) {
        case 0:
          tmp_28 = get_mainColorTemp();
          break;
        case 1:
          tmp_28 = get_secondColorTemp();
          break;
        case 2:
          tmp_28 = Companion_getInstance_4().f3a_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_15 = tmp_28;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_16.d1b();
      tmp$ret$62 = tmp0_15;
      var targetValue = tmp$ret$62;
      var animationSpec = transitionSpec_0(transit.k7a(), $composer_14, 112 & tmp4_animateValue$composable >> 3);
      var tmp0_16 = createTransitionAnimation$composable(transit, new Color(initialValue), new Color(targetValue), animationSpec, typeConverter, label_0, $composer_14, 14 & tmp4_animateValue$composable | 57344 & tmp4_animateValue$composable << 9 | 458752 & tmp4_animateValue$composable << 6);
      $composer_14.d1b();
      tmp$ret$63 = tmp0_16;
      var tmp0_17 = tmp$ret$63;
      $composer_11.d1b();
      tmp$ret$64 = tmp0_17;
      var animColor$delegate = tmp$ret$64;
      var tmp$ret$74;
      // Inline function 'androidx.compose.animation.animateColor$composable' call
      var tmp24_animateColor$composable = BreatheCanvas$composable$lambda_23(animSpeed, breatheState$delegate, finalBreath$delegate);
      var tmp25_animateColor$composable = null;
      var tmp26_animateColor$composable = $composer_0;
      var transitionSpec_1 = tmp24_animateColor$composable;
      var label_1 = tmp25_animateColor$composable;
      var $composer_17 = tmp26_animateColor$composable;
      $composer_17.y1a(-1488075038);
      sourceInformation($composer_17, 'C(animateColor$composable)P(2)68@3224L31,69@3291L70,73@3374L70:Transition.kt#xbi5r1');
      if (!(0 === 0)) {
        transitionSpec_1 = BreatheCanvas$composable$lambda_24;
      }
      if (!(2 === 0))
        label_1 = 'ColorAnimation';
      var tmp$ret$65;
      // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
      var tmp27__anonymous__7w9euu = transit.o79();
      var tmp28__anonymous__cqy22d = $composer_17;
      var tmp29__anonymous__hlmp9w = 0;
      var $composer_18 = tmp28__anonymous__cqy22d;
      $composer_18.y1a(-1517998025);
      if (isTraceInProgress()) {
        traceEventStart(-1517998025, tmp29__anonymous__hlmp9w, -1, 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous> (BreathCanvas.kt:109)');
      }
      var tmp0_subject_2 = tmp27__anonymous__7w9euu;
      var tmp0_18 = tmp0_subject_2.t5_1;
      var tmp_29;
      switch (tmp0_18) {
        case 0:
          tmp_29 = get_mainColorTemp();
          break;
        case 1:
          tmp_29 = get_secondColorTemp();
          break;
        case 2:
          tmp_29 = Companion_getInstance_4().f3a_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_19 = tmp_29;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_18.d1b();
      tmp$ret$65 = tmp0_19;
      var colorSpace_0 = _Color___get_colorSpace__impl__jqqozk(tmp$ret$65);
      var tmp$ret$70;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_17;
      var $composer_19 = tmp0_remember$composable_0;
      $composer_19.y1a(-838505973);
      sourceInformation($composer_19, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$69;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_10 = $composer_19;
      var tmp2_cache_3 = $composer_19.z1a(colorSpace_0);
      var tmp$ret$68;
      // Inline function 'kotlin.let' call
      var tmp0_let_10 = tmp1_cache_10.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$67;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_30;
      if (tmp2_cache_3 ? true : tmp0_let_10 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$66;
        // Inline function 'androidx.compose.animation.animateColor$composable.<anonymous>' call
        tmp$ret$66 = get_VectorConverter(Companion_getInstance_4())(colorSpace_0);
        var value_10 = tmp$ret$66;
        tmp1_cache_10.b1b(value_10);
        tmp_30 = value_10;
      } else {
        tmp_30 = tmp0_let_10;
      }
      tmp$ret$67 = tmp_30;
      tmp$ret$68 = tmp$ret$67;
      var tmp_31 = tmp$ret$68;
      tmp$ret$69 = (tmp_31 == null ? true : isObject(tmp_31)) ? tmp_31 : THROW_CCE();
      var tmp0_20 = tmp$ret$69;
      $composer_19.d1b();
      tmp$ret$70 = tmp0_20;
      var typeConverter_0 = tmp$ret$70;
      var tmp$ret$73;
      // Inline function 'androidx.compose.animation.core.animateValue$composable' call
      var tmp1_animateValue$composable_0 = transitionSpec_1;
      var tmp2_animateValue$composable_0 = label_1;
      var tmp3_animateValue$composable_0 = $composer_17;
      var tmp4_animateValue$composable_0 = 0;
      var transitionSpec_2 = tmp1_animateValue$composable_0;
      var label_2 = tmp2_animateValue$composable_0;
      var $composer_20 = tmp3_animateValue$composable_0;
      $composer_20.y1a(-1940744337);
      sourceInformation($composer_20, 'C(animateValue$composable)P(3,2)856@34079L32,857@34134L31,858@34190L23,860@34226L89:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec_2 = BreatheCanvas$composable$lambda_25;
      }
      if (!(0 === 0))
        label_2 = 'ValueAnimation';
      var tmp$ret$71;
      // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
      var tmp30__anonymous__hpj82q = transit.d7a();
      var tmp31__anonymous__cuukv7 = $composer_20;
      var tmp32__anonymous__805xno = 112 & tmp4_animateValue$composable_0 >> 9;
      var $composer_21 = tmp31__anonymous__cuukv7;
      $composer_21.y1a(-1517998025);
      if (isTraceInProgress()) {
        traceEventStart(-1517998025, tmp32__anonymous__805xno, -1, 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous> (BreathCanvas.kt:109)');
      }
      var tmp0_subject_3 = tmp30__anonymous__hpj82q;
      var tmp0_21 = tmp0_subject_3.t5_1;
      var tmp_32;
      switch (tmp0_21) {
        case 0:
          tmp_32 = get_mainColorTemp();
          break;
        case 1:
          tmp_32 = get_secondColorTemp();
          break;
        case 2:
          tmp_32 = Companion_getInstance_4().f3a_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_22 = tmp_32;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_21.d1b();
      tmp$ret$71 = tmp0_22;
      var initialValue_0 = tmp$ret$71;
      var tmp$ret$72;
      // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
      var tmp33__anonymous__35hag5 = transit.o79();
      var tmp34__anonymous__1p7cre = $composer_20;
      var tmp35__anonymous__6jvzyx = 112 & tmp4_animateValue$composable_0 >> 9;
      var $composer_22 = tmp34__anonymous__1p7cre;
      $composer_22.y1a(-1517998025);
      if (isTraceInProgress()) {
        traceEventStart(-1517998025, tmp35__anonymous__6jvzyx, -1, 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous> (BreathCanvas.kt:109)');
      }
      var tmp0_subject_4 = tmp33__anonymous__35hag5;
      var tmp0_23 = tmp0_subject_4.t5_1;
      var tmp_33;
      switch (tmp0_23) {
        case 0:
          tmp_33 = get_mainColorTemp();
          break;
        case 1:
          tmp_33 = get_secondColorTemp();
          break;
        case 2:
          tmp_33 = Companion_getInstance_4().f3a_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_24 = tmp_33;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_22.d1b();
      tmp$ret$72 = tmp0_24;
      var targetValue_0 = tmp$ret$72;
      var animationSpec_0 = transitionSpec_2(transit.k7a(), $composer_20, 112 & tmp4_animateValue$composable_0 >> 3);
      var tmp0_25 = createTransitionAnimation$composable(transit, new Color(initialValue_0), new Color(targetValue_0), animationSpec_0, typeConverter_0, label_2, $composer_20, 14 & tmp4_animateValue$composable_0 | 57344 & tmp4_animateValue$composable_0 << 9 | 458752 & tmp4_animateValue$composable_0 << 6);
      $composer_20.d1b();
      tmp$ret$73 = tmp0_25;
      var tmp0_26 = tmp$ret$73;
      $composer_17.d1b();
      tmp$ret$74 = tmp0_26;
      var outlineColor$delegate = tmp$ret$74;
      var tmp$ret$84;
      // Inline function 'androidx.compose.animation.animateColor$composable' call
      var tmp36_animateColor$composable = BreatheCanvas$composable$lambda_26(animSpeed);
      var tmp37_animateColor$composable = null;
      var tmp38_animateColor$composable = $composer_0;
      var transitionSpec_3 = tmp36_animateColor$composable;
      var label_3 = tmp37_animateColor$composable;
      var $composer_23 = tmp38_animateColor$composable;
      $composer_23.y1a(-1488075038);
      sourceInformation($composer_23, 'C(animateColor$composable)P(2)68@3224L31,69@3291L70,73@3374L70:Transition.kt#xbi5r1');
      if (!(0 === 0)) {
        transitionSpec_3 = BreatheCanvas$composable$lambda_27;
      }
      if (!(2 === 0))
        label_3 = 'ColorAnimation';
      var tmp$ret$75;
      // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
      var tmp39__anonymous__pymkt1 = transit.o79();
      var tmp40__anonymous__9cjcjl = $composer_23;
      var tmp41__anonymous__4hupc2 = 0;
      var $composer_24 = tmp40__anonymous__9cjcjl;
      $composer_24.y1a(-962225892);
      if (isTraceInProgress()) {
        traceEventStart(-962225892, tmp41__anonymous__4hupc2, -1, 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous> (BreathCanvas.kt:124)');
      }
      var tmp0_subject_5 = tmp39__anonymous__pymkt1;
      var tmp0_27 = tmp0_subject_5.t5_1;
      var tmp_34;
      switch (tmp0_27) {
        case 0:
          $composer_24.y1a(633961352);
          var tmp1_group = MaterialTheme_getInstance().e93($composer_24, 6).y3w();
          $composer_24.d1b();
          tmp_34 = tmp1_group;
          break;
        case 1:
          $composer_24.y1a(633961418);
          var tmp2_group = MaterialTheme_getInstance().e93($composer_24, 6).y3w();
          $composer_24.d1b();
          tmp_34 = tmp2_group;
          break;
        case 2:
          $composer_24.y1a(633961470);
          $composer_24.d1b();
          tmp_34 = Companion_getInstance_4().f3a_1;
          break;
        default:
          $composer_24.y1a(633957336);
          $composer_24.d1b();
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_28 = tmp_34;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_24.d1b();
      tmp$ret$75 = tmp0_28;
      var colorSpace_1 = _Color___get_colorSpace__impl__jqqozk(tmp$ret$75);
      var tmp$ret$80;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_1 = $composer_23;
      var $composer_25 = tmp0_remember$composable_1;
      $composer_25.y1a(-838505973);
      sourceInformation($composer_25, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$79;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_11 = $composer_25;
      var tmp2_cache_4 = $composer_25.z1a(colorSpace_1);
      var tmp$ret$78;
      // Inline function 'kotlin.let' call
      var tmp0_let_11 = tmp1_cache_11.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$77;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_35;
      if (tmp2_cache_4 ? true : tmp0_let_11 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$76;
        // Inline function 'androidx.compose.animation.animateColor$composable.<anonymous>' call
        tmp$ret$76 = get_VectorConverter(Companion_getInstance_4())(colorSpace_1);
        var value_11 = tmp$ret$76;
        tmp1_cache_11.b1b(value_11);
        tmp_35 = value_11;
      } else {
        tmp_35 = tmp0_let_11;
      }
      tmp$ret$77 = tmp_35;
      tmp$ret$78 = tmp$ret$77;
      var tmp_36 = tmp$ret$78;
      tmp$ret$79 = (tmp_36 == null ? true : isObject(tmp_36)) ? tmp_36 : THROW_CCE();
      var tmp0_29 = tmp$ret$79;
      $composer_25.d1b();
      tmp$ret$80 = tmp0_29;
      var typeConverter_1 = tmp$ret$80;
      var tmp$ret$83;
      // Inline function 'androidx.compose.animation.core.animateValue$composable' call
      var tmp1_animateValue$composable_1 = transitionSpec_3;
      var tmp2_animateValue$composable_1 = label_3;
      var tmp3_animateValue$composable_1 = $composer_23;
      var tmp4_animateValue$composable_1 = 0;
      var transitionSpec_4 = tmp1_animateValue$composable_1;
      var label_4 = tmp2_animateValue$composable_1;
      var $composer_26 = tmp3_animateValue$composable_1;
      $composer_26.y1a(-1940744337);
      sourceInformation($composer_26, 'C(animateValue$composable)P(3,2)856@34079L32,857@34134L31,858@34190L23,860@34226L89:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec_4 = BreatheCanvas$composable$lambda_28;
      }
      if (!(0 === 0))
        label_4 = 'ValueAnimation';
      var tmp$ret$81;
      // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
      var tmp42__anonymous__ctxvh = transit.d7a();
      var tmp43__anonymous__57il30 = $composer_26;
      var tmp44__anonymous__a278aj = 112 & tmp4_animateValue$composable_1 >> 9;
      var $composer_27 = tmp43__anonymous__57il30;
      $composer_27.y1a(-962225892);
      if (isTraceInProgress()) {
        traceEventStart(-962225892, tmp44__anonymous__a278aj, -1, 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous> (BreathCanvas.kt:124)');
      }
      var tmp0_subject_6 = tmp42__anonymous__ctxvh;
      var tmp0_30 = tmp0_subject_6.t5_1;
      var tmp_37;
      switch (tmp0_30) {
        case 0:
          $composer_27.y1a(633961352);
          var tmp1_group_0 = MaterialTheme_getInstance().e93($composer_27, 6).y3w();
          $composer_27.d1b();
          tmp_37 = tmp1_group_0;
          break;
        case 1:
          $composer_27.y1a(633961418);
          var tmp2_group_0 = MaterialTheme_getInstance().e93($composer_27, 6).y3w();
          $composer_27.d1b();
          tmp_37 = tmp2_group_0;
          break;
        case 2:
          $composer_27.y1a(633961470);
          $composer_27.d1b();
          tmp_37 = Companion_getInstance_4().f3a_1;
          break;
        default:
          $composer_27.y1a(633957336);
          $composer_27.d1b();
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_31 = tmp_37;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_27.d1b();
      tmp$ret$81 = tmp0_31;
      var initialValue_1 = tmp$ret$81;
      var tmp$ret$82;
      // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
      var tmp45__anonymous__ewvvi2 = transit.o79();
      var tmp46__anonymous__jrkipl = $composer_26;
      var tmp47__anonymous__om95x4 = 112 & tmp4_animateValue$composable_1 >> 9;
      var $composer_28 = tmp46__anonymous__jrkipl;
      $composer_28.y1a(-962225892);
      if (isTraceInProgress()) {
        traceEventStart(-962225892, tmp47__anonymous__om95x4, -1, 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous> (BreathCanvas.kt:124)');
      }
      var tmp0_subject_7 = tmp45__anonymous__ewvvi2;
      var tmp0_32 = tmp0_subject_7.t5_1;
      var tmp_38;
      switch (tmp0_32) {
        case 0:
          $composer_28.y1a(633961352);
          var tmp1_group_1 = MaterialTheme_getInstance().e93($composer_28, 6).y3w();
          $composer_28.d1b();
          tmp_38 = tmp1_group_1;
          break;
        case 1:
          $composer_28.y1a(633961418);
          var tmp2_group_1 = MaterialTheme_getInstance().e93($composer_28, 6).y3w();
          $composer_28.d1b();
          tmp_38 = tmp2_group_1;
          break;
        case 2:
          $composer_28.y1a(633961470);
          $composer_28.d1b();
          tmp_38 = Companion_getInstance_4().f3a_1;
          break;
        default:
          $composer_28.y1a(633957336);
          $composer_28.d1b();
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_33 = tmp_38;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_28.d1b();
      tmp$ret$82 = tmp0_33;
      var targetValue_1 = tmp$ret$82;
      var animationSpec_1 = transitionSpec_4(transit.k7a(), $composer_26, 112 & tmp4_animateValue$composable_1 >> 3);
      var tmp0_34 = createTransitionAnimation$composable(transit, new Color(initialValue_1), new Color(targetValue_1), animationSpec_1, typeConverter_1, label_4, $composer_26, 14 & tmp4_animateValue$composable_1 | 57344 & tmp4_animateValue$composable_1 << 9 | 458752 & tmp4_animateValue$composable_1 << 6);
      $composer_26.d1b();
      tmp$ret$83 = tmp0_34;
      var tmp0_35 = tmp$ret$83;
      $composer_23.d1b();
      tmp$ret$84 = tmp0_35;
      var fontColor$delegate = tmp$ret$84;
      var tmp0_subject_8 = BreatheCanvas$composable$lambda_7(breatheState$delegate);
      var tmp0_36 = tmp0_subject_8.t5_1;
      var tmp_39;
      switch (tmp0_36) {
        case 0:
          tmp_39 = BreatheCanvas$composable$lambda_3(radiusEnd$delegate);
          break;
        case 1:
          tmp_39 = BreatheCanvas$composable$lambda_5(minRadius$delegate);
          break;
        case 2:
          tmp_39 = BreatheCanvas$composable$lambda(currRad$delegate);
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_40 = tmp_39;
      var tmp_41;
      if (BreatheCanvas$composable$lambda_7(breatheState$delegate).equals(BreatheState_Paused_getInstance())) {
        tmp_41 = tween$default(1, 0, null, 6, null);
      } else if (BreatheCanvas$composable$lambda_7(breatheState$delegate).equals(BreatheState_Empty_getInstance()) ? BreatheCanvas$composable$lambda_9(finalBreath$delegate) : false) {
        var tmp_42 = animSpeed + 200 | 0;
        tmp_41 = tween$default(tmp_42, 1200, null, 4, null);
      } else {
        tmp_41 = tween$default(animSpeed, 0, null, 6, null);
      }
      var tmp_43 = tmp_41;
      var tmp$ret$89;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp48_remember$composable = $composer_0;
      var tmp49_remember$composable = 112 & $dirty >> 6;
      var $composer_29 = tmp48_remember$composable;
      $composer_29.y1a(-1124426577);
      sourceInformation($composer_29, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$88;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_12 = $composer_29;
      var tmp2_cache_5 = !!($composer_29.z1a(breatheState$delegate) | $composer_29.z1a(onFinishBreath));
      var tmp$ret$87;
      // Inline function 'kotlin.let' call
      var tmp0_let_12 = tmp1_cache_12.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$86;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_44;
      if (tmp2_cache_5 ? true : tmp0_let_12 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$85;
        // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
        tmp$ret$85 = BreatheCanvas$composable$lambda_29(onFinishBreath, breatheState$delegate);
        var value_12 = tmp$ret$85;
        tmp1_cache_12.b1b(value_12);
        tmp_44 = value_12;
      } else {
        tmp_44 = tmp0_let_12;
      }
      tmp$ret$86 = tmp_44;
      tmp$ret$87 = tmp$ret$86;
      var tmp_45 = tmp$ret$87;
      tmp$ret$88 = (tmp_45 == null ? true : isObject(tmp_45)) ? tmp_45 : THROW_CCE();
      var tmp0_37 = tmp$ret$88;
      $composer_29.d1b();
      tmp$ret$89 = tmp0_37;
      var breathRad$delegate = animateFloatAsState$composable(tmp_40, tmp_43, 0.5, null, tmp$ret$89, $composer_0, 384, 8);
      var tmp$ret$94;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp50_remember$composable = $composer_0;
      var $composer_30 = tmp50_remember$composable;
      $composer_30.y1a(547886695);
      sourceInformation($composer_30, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$93;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_13 = $composer_30;
      var tmp$ret$92;
      // Inline function 'kotlin.let' call
      var tmp0_let_13 = tmp1_cache_13.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$91;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_46;
      if (false ? true : tmp0_let_13 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$90;
        // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
        tmp$ret$90 = derivedStateOf(BreatheCanvas$composable$lambda_30(breathRad$delegate));
        var value_13 = tmp$ret$90;
        tmp1_cache_13.b1b(value_13);
        tmp_46 = value_13;
      } else {
        tmp_46 = tmp0_let_13;
      }
      tmp$ret$91 = tmp_46;
      tmp$ret$92 = tmp$ret$91;
      var tmp_47 = tmp$ret$92;
      tmp$ret$93 = (tmp_47 == null ? true : isObject(tmp_47)) ? tmp_47 : THROW_CCE();
      var tmp0_38 = tmp$ret$93;
      $composer_30.d1b();
      tmp$ret$94 = tmp0_38;
      var currRadUpdate$delegate = tmp$ret$94;
      var tmp_48 = BreatheCanvas$composable$lambda_16(currRadUpdate$delegate);
      var tmp$ret$99;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp51_remember$composable = $composer_0;
      var $composer_31 = tmp51_remember$composable;
      $composer_31.y1a(-1124426577);
      sourceInformation($composer_31, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$98;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_14 = $composer_31;
      var tmp2_cache_6 = !!($composer_31.z1a(currRad$delegate) | $composer_31.z1a(currRadUpdate$delegate));
      var tmp$ret$97;
      // Inline function 'kotlin.let' call
      var tmp0_let_14 = tmp1_cache_14.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$96;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_49;
      if (tmp2_cache_6 ? true : tmp0_let_14 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$95;
        // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
        tmp$ret$95 = BreatheCanvas$composable$slambda_6(currRadUpdate$delegate, currRad$delegate, null);
        var value_14 = tmp$ret$95;
        tmp1_cache_14.b1b(value_14);
        tmp_49 = value_14;
      } else {
        tmp_49 = tmp0_let_14;
      }
      tmp$ret$96 = tmp_49;
      tmp$ret$97 = tmp$ret$96;
      var tmp_50 = tmp$ret$97;
      tmp$ret$98 = (tmp_50 == null ? true : isObject(tmp_50)) ? tmp_50 : THROW_CCE();
      var tmp0_39 = tmp$ret$98;
      $composer_31.d1b();
      tmp$ret$99 = tmp0_39;
      LaunchedEffect$composable(tmp_48, tmp$ret$99, $composer_0, 0);
      var tmp0_subject_9 = BreatheCanvas$composable$lambda_7(breatheState$delegate);
      var tmp0_40 = tmp0_subject_9.t5_1;
      var tmp_51;
      switch (tmp0_40) {
        case 0:
          tmp_51 = BreatheCanvas$composable$lambda_3(radiusEnd$delegate) * 0.8;
          break;
        case 1:
          tmp_51 = BreatheCanvas$composable$lambda_5(minRadius$delegate) - 1.0;
          break;
        case 2:
          tmp_51 = BreatheCanvas$composable$lambda_1(currRadDelayed$delegate);
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_52 = tmp_51;
      var tmp1_subject = BreatheCanvas$composable$lambda_7(breatheState$delegate);
      var tmp0_41 = tmp1_subject.t5_1;
      var tmp_53;
      switch (tmp0_41) {
        case 0:
          var tmp_54 = animSpeed / 8 | 0;
          tmp_53 = tween$default(animSpeed, tmp_54, null, 4, null);
          break;
        case 1:
          var tmp_55;
          if (BreatheCanvas$composable$lambda_9(finalBreath$delegate)) {
            var tmp_56 = (animSpeed + 200 | 0) - (animSpeed / 6 | 0) | 0;
            tmp_55 = tween$default(tmp_56, 1300, null, 4, null);
          } else {
            var tmp_57 = animSpeed - (animSpeed / 6 | 0) | 0;
            tmp_55 = tween$default(tmp_57, 0, null, 6, null);
          }

          tmp_53 = tmp_55;
          break;
        case 2:
          tmp_53 = tween$default(1, 0, null, 6, null);
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_58 = tmp_53;
      var tmp$ret$104;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp52_remember$composable = $composer_0;
      var $composer_32 = tmp52_remember$composable;
      $composer_32.y1a(547886695);
      sourceInformation($composer_32, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$103;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_15 = $composer_32;
      var tmp$ret$102;
      // Inline function 'kotlin.let' call
      var tmp0_let_15 = tmp1_cache_15.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$101;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_59;
      if (false ? true : tmp0_let_15 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$100;
        // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
        tmp$ret$100 = BreatheCanvas$composable$lambda_31;
        var value_15 = tmp$ret$100;
        tmp1_cache_15.b1b(value_15);
        tmp_59 = value_15;
      } else {
        tmp_59 = tmp0_let_15;
      }
      tmp$ret$101 = tmp_59;
      tmp$ret$102 = tmp$ret$101;
      var tmp_60 = tmp$ret$102;
      tmp$ret$103 = (tmp_60 == null ? true : isObject(tmp_60)) ? tmp_60 : THROW_CCE();
      var tmp0_42 = tmp$ret$103;
      $composer_32.d1b();
      tmp$ret$104 = tmp0_42;
      var breathRadDelayed$delegate = animateFloatAsState$composable(tmp_52, tmp_58, 0.5, null, tmp$ret$104, $composer_0, 384, 8);
      var tmp$ret$109;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp53_remember$composable = $composer_0;
      var $composer_33 = tmp53_remember$composable;
      $composer_33.y1a(547886695);
      sourceInformation($composer_33, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$108;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_16 = $composer_33;
      var tmp$ret$107;
      // Inline function 'kotlin.let' call
      var tmp0_let_16 = tmp1_cache_16.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$106;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_61;
      if (false ? true : tmp0_let_16 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$105;
        // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
        tmp$ret$105 = derivedStateOf(BreatheCanvas$composable$lambda_32(breathRadDelayed$delegate));
        var value_16 = tmp$ret$105;
        tmp1_cache_16.b1b(value_16);
        tmp_61 = value_16;
      } else {
        tmp_61 = tmp0_let_16;
      }
      tmp$ret$106 = tmp_61;
      tmp$ret$107 = tmp$ret$106;
      var tmp_62 = tmp$ret$107;
      tmp$ret$108 = (tmp_62 == null ? true : isObject(tmp_62)) ? tmp_62 : THROW_CCE();
      var tmp0_43 = tmp$ret$108;
      $composer_33.d1b();
      tmp$ret$109 = tmp0_43;
      var currRadDelayedUpd$delegate = tmp$ret$109;
      var tmp_63 = BreatheCanvas$composable$lambda_16(currRadUpdate$delegate);
      var tmp$ret$114;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp54_remember$composable = $composer_0;
      var $composer_34 = tmp54_remember$composable;
      $composer_34.y1a(-1124426577);
      sourceInformation($composer_34, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$113;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_17 = $composer_34;
      var tmp2_cache_7 = !!($composer_34.z1a(currRadDelayed$delegate) | $composer_34.z1a(currRadDelayedUpd$delegate));
      var tmp$ret$112;
      // Inline function 'kotlin.let' call
      var tmp0_let_17 = tmp1_cache_17.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$111;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_64;
      if (tmp2_cache_7 ? true : tmp0_let_17 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$110;
        // Inline function 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous>' call
        tmp$ret$110 = BreatheCanvas$composable$slambda_8(currRadDelayedUpd$delegate, currRadDelayed$delegate, null);
        var value_17 = tmp$ret$110;
        tmp1_cache_17.b1b(value_17);
        tmp_64 = value_17;
      } else {
        tmp_64 = tmp0_let_17;
      }
      tmp$ret$111 = tmp_64;
      tmp$ret$112 = tmp$ret$111;
      var tmp_65 = tmp$ret$112;
      tmp$ret$113 = (tmp_65 == null ? true : isObject(tmp_65)) ? tmp_65 : THROW_CCE();
      var tmp0_44 = tmp$ret$113;
      $composer_34.d1b();
      tmp$ret$114 = tmp0_44;
      LaunchedEffect$composable(tmp_63, tmp$ret$114, $composer_0, 0);
      var tmp_66 = Companion_getInstance();
      var tmp$ret$115;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$115 = _Dp___init__impl__ms3zkb(0);
      var tmp_67 = tmp$ret$115;
      var tmp$ret$116;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$116 = _Dp___init__impl__ms3zkb(0);
      var tmp_68 = offset_0(tmp_66, tmp_67, tmp$ret$116);
      Canvas$composable(tmp_68, BreatheCanvas$composable$lambda_33(edgeLeaves, breathRad$delegate, animColor$delegate, outlineColor$delegate, radiusEnd$delegate, finalBreath$delegate, breathRadDelayed$delegate, breatheState$delegate, minRadius$delegate), $composer_0, 6);
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
      tmp0_safe_receiver.g1p(BreatheCanvas$composable$lambda$ref(screenSize, currBreaths, totalBreaths, onFinishBreath, breathPaused, finishClicked, animSpeed, $changed));
    }
  }
  function BreatheCanvas$composable$lambda($currRad$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('currRad', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $currRad$delegate.i2();
    return tmp$ret$0;
  }
  function BreatheCanvas$composable$lambda_0($currRad$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('currRad', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $currRad$delegate.p11(value);
  }
  function BreatheCanvas$composable$lambda_1($currRadDelayed$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('currRadDelayed', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $currRadDelayed$delegate.i2();
    return tmp$ret$0;
  }
  function BreatheCanvas$composable$lambda_2($currRadDelayed$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('currRadDelayed', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $currRadDelayed$delegate.p11(value);
  }
  function BreatheCanvas$composable$lambda_3($radiusEnd$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('radiusEnd', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $radiusEnd$delegate.i2();
    return tmp$ret$0;
  }
  function BreatheCanvas$composable$lambda_4($radiusEnd$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('radiusEnd', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $radiusEnd$delegate.p11(value);
  }
  function BreatheCanvas$composable$lambda_5($minRadius$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('minRadius', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $minRadius$delegate.i2();
    return tmp$ret$0;
  }
  function BreatheCanvas$composable$lambda_6($minRadius$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('minRadius', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $minRadius$delegate.p11(value);
  }
  function BreatheCanvas$composable$lambda_7($breatheState$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('breatheState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $breatheState$delegate.i2();
    return tmp$ret$0;
  }
  function BreatheCanvas$composable$lambda_8($breatheState$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('breatheState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $breatheState$delegate.p11(value);
  }
  function BreatheCanvas$composable$lambda_9($finalBreath$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('finalBreath', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $finalBreath$delegate.i2();
    return tmp$ret$0;
  }
  function BreatheCanvas$composable$lambda_10($finalBreath$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('finalBreath', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $finalBreath$delegate.p11(value);
  }
  function BreatheCanvas$composable$recalcRadius($screenSize, sizeDiv, radiusEnd$delegate, minRadius$delegate) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = _IntSize___get_width__impl__d9yl4o($screenSize) / sizeDiv;
    var tmp1_minOf = _IntSize___get_height__impl__prv63b($screenSize) / sizeDiv;
    tmp$ret$0 = Math.min(tmp0_minOf, tmp1_minOf);
    var r = tmp$ret$0;
    BreatheCanvas$composable$lambda_4(radiusEnd$delegate, r);
    BreatheCanvas$composable$lambda_6(minRadius$delegate, r / 100.0);
  }
  function BreatheCanvas$composable$lambda_11($prevState$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('prevState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $prevState$delegate.i2();
    return tmp$ret$0;
  }
  function BreatheCanvas$composable$lambda_12($prevState$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('prevState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $prevState$delegate.p11(value);
  }
  function BreatheCanvas$composable$lambda_13($animColor$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('animColor', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $animColor$delegate.i2().y3a_1;
    return tmp$ret$0;
  }
  function BreatheCanvas$composable$lambda_14($outlineColor$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('outlineColor', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $outlineColor$delegate.i2().y3a_1;
    return tmp$ret$0;
  }
  function BreatheCanvas$composable$lambda_15($breathRad$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('breathRad', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $breathRad$delegate.i2();
    return tmp$ret$0;
  }
  function BreatheCanvas$composable$lambda_16($currRadUpdate$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('currRadUpdate', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $currRadUpdate$delegate.i2();
    return tmp$ret$0;
  }
  function BreatheCanvas$composable$lambda_17($breathRadDelayed$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('breathRadDelayed', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $breathRadDelayed$delegate.i2();
    return tmp$ret$0;
  }
  function BreatheCanvas$composable$lambda_18($currRadDelayedUpd$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('currRadDelayedUpd', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $currRadDelayedUpd$delegate.i2();
    return tmp$ret$0;
  }
  function BreatheCanvas$composable$drawLeaf(_this__u8e3s4, breathRad$delegate, outlineColor$delegate, radiusEnd$delegate, radius, color, pos, centerOffset, drawOutlineOnly) {
    var tmp0_subject = pos;
    var tmp0 = tmp0_subject.t5_1;
    var tmp;
    switch (tmp0) {
      case 4:
        var tmp_0 = _Offset___get_x__impl__xvi35n(centerOffset);
        var tmp_1 = _Offset___get_y__impl__8bzhra(centerOffset) - BreatheCanvas$composable$lambda_15(breathRad$delegate) / 1.25;
        var tmp$ret$0;
        // Inline function 'kotlin.math.pow' call
        var tmp0_pow = BreatheCanvas$composable$lambda_15(breathRad$delegate);
        tmp$ret$0 = Math.pow(tmp0_pow, 1.25);

        tmp = Offset(tmp_0, tmp_1 - tmp$ret$0 / 6.0);
        break;
      case 0:
        var tmp_2 = _Offset___get_x__impl__xvi35n(centerOffset) - BreatheCanvas$composable$lambda_15(breathRad$delegate) / 2;
        var tmp$ret$1;
        // Inline function 'kotlin.math.pow' call
        var tmp1_pow = BreatheCanvas$composable$lambda_15(breathRad$delegate);
        tmp$ret$1 = Math.pow(tmp1_pow, 1.25);

        var tmp_3 = tmp_2 - tmp$ret$1 / 6.0;
        var tmp_4 = _Offset___get_y__impl__8bzhra(centerOffset);
        var tmp$ret$2;
        // Inline function 'kotlin.math.pow' call
        var tmp2_pow = BreatheCanvas$composable$lambda_15(breathRad$delegate);
        tmp$ret$2 = Math.pow(tmp2_pow, 1.25);

        tmp = Offset(tmp_3, tmp_4 - tmp$ret$2 / 6.0);
        break;
      case 1:
        var tmp_5 = _Offset___get_x__impl__xvi35n(centerOffset) + BreatheCanvas$composable$lambda_15(breathRad$delegate) / 2;
        var tmp$ret$3;
        // Inline function 'kotlin.math.pow' call
        var tmp3_pow = BreatheCanvas$composable$lambda_15(breathRad$delegate);
        tmp$ret$3 = Math.pow(tmp3_pow, 1.25);

        var tmp_6 = tmp_5 + tmp$ret$3 / 6.0;
        var tmp_7 = _Offset___get_y__impl__8bzhra(centerOffset);
        var tmp$ret$4;
        // Inline function 'kotlin.math.pow' call
        var tmp4_pow = BreatheCanvas$composable$lambda_15(breathRad$delegate);
        tmp$ret$4 = Math.pow(tmp4_pow, 1.25);

        tmp = Offset(tmp_6, tmp_7 - tmp$ret$4 / 6.0);
        break;
      case 2:
        var tmp_8 = _Offset___get_x__impl__xvi35n(centerOffset);
        var tmp$ret$5;
        // Inline function 'kotlin.math.pow' call
        var tmp5_pow = BreatheCanvas$composable$lambda_15(breathRad$delegate);
        tmp$ret$5 = Math.pow(tmp5_pow, 1.25);

        var tmp_9 = tmp_8 - tmp$ret$5 / 6.0;
        var tmp_10 = _Offset___get_y__impl__8bzhra(centerOffset);
        var tmp$ret$6;
        // Inline function 'kotlin.math.pow' call
        var tmp6_pow = BreatheCanvas$composable$lambda_15(breathRad$delegate);
        tmp$ret$6 = Math.pow(tmp6_pow, 1.25);

        tmp = Offset(tmp_9, tmp_10 + tmp$ret$6 / 6.0);
        break;
      case 3:
        var tmp_11 = _Offset___get_x__impl__xvi35n(centerOffset);
        var tmp$ret$7;
        // Inline function 'kotlin.math.pow' call
        var tmp7_pow = BreatheCanvas$composable$lambda_15(breathRad$delegate);
        tmp$ret$7 = Math.pow(tmp7_pow, 1.25);

        var tmp_12 = tmp_11 + tmp$ret$7 / 6.0;
        var tmp_13 = _Offset___get_y__impl__8bzhra(centerOffset);
        var tmp$ret$8;
        // Inline function 'kotlin.math.pow' call
        var tmp8_pow = BreatheCanvas$composable$lambda_15(breathRad$delegate);
        tmp$ret$8 = Math.pow(tmp8_pow, 1.25);

        tmp = Offset(tmp_12, tmp_13 + tmp$ret$8 / 6.0);
        break;
      case 5:
        tmp = Offset(_Offset___get_x__impl__xvi35n(centerOffset), _Offset___get_y__impl__8bzhra(centerOffset) - BreatheCanvas$composable$lambda_15(breathRad$delegate) / 3);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var center = tmp;
    if (!drawOutlineOnly) {
      var tmp1_blendMode = Companion_getInstance_5().d37_1;
      var tmp2_color = Color__copy$default_impl_ectz3s(color, 0.8, 0.0, 0.0, 0.0, 14, null);
      _this__u8e3s4.i3l(tmp2_color, radius, center, 0.0, null, null, tmp1_blendMode, 56, null);
    }
    if (pos.equals(LeafPos_Center_getInstance())) {
      _this__u8e3s4.i3l(color, radius, center, 0.0, null, null, null, 120, null);
    } else {
      var tmp3_blendMode = Companion_getInstance_5().a37_1;
      var tmp_14 = BreatheCanvas$composable$lambda_14(outlineColor$delegate);
      var tmp4_color = Color__copy$default_impl_ectz3s(tmp_14, 0.9, 0.0, 0.0, 0.0, 14, null);
      var tmp_15 = 6.0 * BreatheCanvas$composable$lambda_15(breathRad$delegate) / BreatheCanvas$composable$lambda_3(radiusEnd$delegate);
      var tmp5_style = Stroke_init_$Create$(tmp_15, 0.0, null, null, null, 30, null);
      _this__u8e3s4.i3l(tmp4_color, radius, center, 0.0, tmp5_style, null, tmp3_blendMode, 40, null);
    }
  }
  function BreatheCanvas$composable$drawLeaf$default(_this__u8e3s4, breathRad$delegate, outlineColor$delegate, radiusEnd$delegate, radius, color, pos, centerOffset, drawOutlineOnly, $mask0, $handler) {
    if (!(($mask0 & 128) === 0))
      drawOutlineOnly = false;
    return BreatheCanvas$composable$drawLeaf(_this__u8e3s4, breathRad$delegate, outlineColor$delegate, radiusEnd$delegate, radius, color, pos, centerOffset, drawOutlineOnly);
  }
  function BreatheCanvas$composable$lambda_19($screenSize, $currBreaths, $totalBreaths, $onFinishBreath, $breathPaused, $finishClicked, $animSpeed, $$changed, $composer, $force) {
    return BreatheCanvas$composable($screenSize, $currBreaths, $totalBreaths, $onFinishBreath, $breathPaused, $finishClicked, $animSpeed, $composer, $$changed | 1);
  }
  function BreatheCanvas$composable$slambda($totalBreaths, $currBreaths, $screenSize, $sizeDiv, $radiusEnd$delegate, $minRadius$delegate, $finalBreath$delegate, $breatheState$delegate, resultContinuation) {
    this.c9i_1 = $totalBreaths;
    this.d9i_1 = $currBreaths;
    this.e9i_1 = $screenSize;
    this.f9i_1 = $sizeDiv;
    this.g9i_1 = $radiusEnd$delegate;
    this.h9i_1 = $minRadius$delegate;
    this.i9i_1 = $finalBreath$delegate;
    this.j9i_1 = $breatheState$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  BreatheCanvas$composable$slambda.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  BreatheCanvas$composable$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  BreatheCanvas$composable$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          BreatheCanvas$composable$recalcRadius(this.e9i_1, this.f9i_1, this.g9i_1, this.h9i_1);
          if (this.c9i_1 === this.d9i_1) {
            BreatheCanvas$composable$lambda_10(this.i9i_1, true);
          }
          BreatheCanvas$composable$lambda_8(this.j9i_1, BreatheState_Full_getInstance());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.cg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  BreatheCanvas$composable$slambda.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new BreatheCanvas$composable$slambda(this.c9i_1, this.d9i_1, this.e9i_1, this.f9i_1, this.g9i_1, this.h9i_1, this.i9i_1, this.j9i_1, completion);
    i.k9i_1 = $this$LaunchedEffect;
    return i;
  };
  BreatheCanvas$composable$slambda.$metadata$ = classMeta('BreatheCanvas$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function BreatheCanvas$composable$slambda_0($totalBreaths, $currBreaths, $screenSize, $sizeDiv, $radiusEnd$delegate, $minRadius$delegate, $finalBreath$delegate, $breatheState$delegate, resultContinuation) {
    var i = new BreatheCanvas$composable$slambda($totalBreaths, $currBreaths, $screenSize, $sizeDiv, $radiusEnd$delegate, $minRadius$delegate, $finalBreath$delegate, $breatheState$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function BreatheCanvas$composable$slambda_1($breathPaused, $breatheState$delegate, $prevState$delegate, $screenSize, $sizeDiv, $radiusEnd$delegate, $minRadius$delegate, resultContinuation) {
    this.t9i_1 = $breathPaused;
    this.u9i_1 = $breatheState$delegate;
    this.v9i_1 = $prevState$delegate;
    this.w9i_1 = $screenSize;
    this.x9i_1 = $sizeDiv;
    this.y9i_1 = $radiusEnd$delegate;
    this.z9i_1 = $minRadius$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  BreatheCanvas$composable$slambda_1.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  BreatheCanvas$composable$slambda_1.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  BreatheCanvas$composable$slambda_1.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          if (this.t9i_1) {
            BreatheCanvas$composable$lambda_12(this.v9i_1, BreatheCanvas$composable$lambda_7(this.u9i_1));
            BreatheCanvas$composable$lambda_8(this.u9i_1, BreatheState_Paused_getInstance());
          } else if (!BreatheCanvas$composable$lambda_11(this.v9i_1).equals(BreatheState_Paused_getInstance())) {
            BreatheCanvas$composable$recalcRadius(this.w9i_1, this.x9i_1, this.y9i_1, this.z9i_1);
            BreatheCanvas$composable$lambda_8(this.u9i_1, BreatheCanvas$composable$lambda_11(this.v9i_1));
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
  BreatheCanvas$composable$slambda_1.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new BreatheCanvas$composable$slambda_1(this.t9i_1, this.u9i_1, this.v9i_1, this.w9i_1, this.x9i_1, this.y9i_1, this.z9i_1, completion);
    i.a9j_1 = $this$LaunchedEffect;
    return i;
  };
  BreatheCanvas$composable$slambda_1.$metadata$ = classMeta('BreatheCanvas$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function BreatheCanvas$composable$slambda_2($breathPaused, $breatheState$delegate, $prevState$delegate, $screenSize, $sizeDiv, $radiusEnd$delegate, $minRadius$delegate, resultContinuation) {
    var i = new BreatheCanvas$composable$slambda_1($breathPaused, $breatheState$delegate, $prevState$delegate, $screenSize, $sizeDiv, $radiusEnd$delegate, $minRadius$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function BreatheCanvas$composable$slambda_3($finishClicked, $finalBreath$delegate, $breatheState$delegate, resultContinuation) {
    this.j9j_1 = $finishClicked;
    this.k9j_1 = $finalBreath$delegate;
    this.l9j_1 = $breatheState$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  BreatheCanvas$composable$slambda_3.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  BreatheCanvas$composable$slambda_3.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  BreatheCanvas$composable$slambda_3.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          if (this.j9j_1) {
            BreatheCanvas$composable$lambda_10(this.k9j_1, true);
            BreatheCanvas$composable$lambda_8(this.l9j_1, BreatheState_Full_getInstance());
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
  BreatheCanvas$composable$slambda_3.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new BreatheCanvas$composable$slambda_3(this.j9j_1, this.k9j_1, this.l9j_1, completion);
    i.m9j_1 = $this$LaunchedEffect;
    return i;
  };
  BreatheCanvas$composable$slambda_3.$metadata$ = classMeta('BreatheCanvas$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function BreatheCanvas$composable$slambda_4($finishClicked, $finalBreath$delegate, $breatheState$delegate, resultContinuation) {
    var i = new BreatheCanvas$composable$slambda_3($finishClicked, $finalBreath$delegate, $breatheState$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function BreatheCanvas$composable$lambda_20($animSpeed, $breatheState$delegate, $finalBreath$delegate) {
    return function ($this$animateColor, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.y1a(1820638276);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1820638276, $changed, -1, 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous> (BreathCanvas.kt:89)');
        tmp = Unit_getInstance();
      }
      var tmp0_subject = BreatheCanvas$composable$lambda_7($breatheState$delegate);
      var tmp0 = tmp0_subject.t5_1;
      var tmp_0;
      if (tmp0 === 2) {
        tmp_0 = tween$default(100, 0, null, 6, null);
      } else {
        var tmp_1;
        if (BreatheCanvas$composable$lambda_9($finalBreath$delegate) ? BreatheCanvas$composable$lambda_7($breatheState$delegate).equals(BreatheState_Empty_getInstance()) : false) {
          tmp_1 = tween$default($animSpeed, 1000, null, 4, null);
        } else {
          tmp_1 = tween$default($animSpeed, 0, null, 6, null);
        }
        tmp_0 = tmp_1;
      }
      var tmp0_0 = tmp_0;
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_getInstance();
      }
      $composer_0.d1b();
      return tmp0_0;
    };
  }
  function BreatheCanvas$composable$lambda_21($this$null, $composer, $changed) {
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
  function BreatheCanvas$composable$lambda_22($this$null, $composer, $changed) {
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
  function BreatheCanvas$composable$lambda_23($animSpeed, $breatheState$delegate, $finalBreath$delegate) {
    return function ($this$animateColor, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.y1a(2084673425);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(2084673425, $changed, -1, 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous> (BreathCanvas.kt:105)');
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (BreatheCanvas$composable$lambda_7($breatheState$delegate).equals(BreatheState_Empty_getInstance()) ? BreatheCanvas$composable$lambda_9($finalBreath$delegate) : false) {
        var tmp_1 = $animSpeed + 200 | 0;
        tmp_0 = tween$default(tmp_1, 1200, null, 4, null);
      } else {
        tmp_0 = tween$default($animSpeed, 0, null, 6, null);
      }
      var tmp0 = tmp_0;
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_getInstance();
      }
      $composer_0.d1b();
      return tmp0;
    };
  }
  function BreatheCanvas$composable$lambda_24($this$null, $composer, $changed) {
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
  function BreatheCanvas$composable$lambda_25($this$null, $composer, $changed) {
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
  function BreatheCanvas$composable$lambda_26($animSpeed) {
    return function ($this$animateColor, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.y1a(309329922);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(309329922, $changed, -1, 'com.patriker.icebreathing.BreatheCanvas$composable.<anonymous> (BreathCanvas.kt:124)');
        tmp = Unit_getInstance();
      }
      var tmp0 = tween$default($animSpeed, 0, null, 6, null);
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.d1b();
      return tmp0;
    };
  }
  function BreatheCanvas$composable$lambda_27($this$null, $composer, $changed) {
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
  function BreatheCanvas$composable$lambda_28($this$null, $composer, $changed) {
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
  function BreatheCanvas$composable$lambda_29($onFinishBreath, $breatheState$delegate) {
    return function (it) {
      var tmp;
      if (BreatheCanvas$composable$lambda_7($breatheState$delegate).equals(BreatheState_Full_getInstance())) {
        BreatheCanvas$composable$lambda_8($breatheState$delegate, BreatheState_Empty_getInstance());
        tmp = Unit_getInstance();
      } else if (BreatheCanvas$composable$lambda_7($breatheState$delegate).equals(BreatheState_Paused_getInstance())) {
        BreatheCanvas$composable$lambda_8($breatheState$delegate, BreatheState_Paused_getInstance());
        tmp = Unit_getInstance();
      } else {
        tmp = $onFinishBreath();
      }
      return Unit_getInstance();
    };
  }
  function BreatheCanvas$composable$lambda_30($breathRad$delegate) {
    return function () {
      return BreatheCanvas$composable$lambda_15($breathRad$delegate);
    };
  }
  function BreatheCanvas$composable$slambda_5($currRadUpdate$delegate, $currRad$delegate, resultContinuation) {
    this.v9j_1 = $currRadUpdate$delegate;
    this.w9j_1 = $currRad$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  BreatheCanvas$composable$slambda_5.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  BreatheCanvas$composable$slambda_5.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  BreatheCanvas$composable$slambda_5.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          BreatheCanvas$composable$lambda_0(this.w9j_1, BreatheCanvas$composable$lambda_16(this.v9j_1));
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.cg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  BreatheCanvas$composable$slambda_5.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new BreatheCanvas$composable$slambda_5(this.v9j_1, this.w9j_1, completion);
    i.x9j_1 = $this$LaunchedEffect;
    return i;
  };
  BreatheCanvas$composable$slambda_5.$metadata$ = classMeta('BreatheCanvas$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function BreatheCanvas$composable$slambda_6($currRadUpdate$delegate, $currRad$delegate, resultContinuation) {
    var i = new BreatheCanvas$composable$slambda_5($currRadUpdate$delegate, $currRad$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function BreatheCanvas$composable$lambda_31(it) {
    return Unit_getInstance();
  }
  function BreatheCanvas$composable$lambda_32($breathRadDelayed$delegate) {
    return function () {
      return BreatheCanvas$composable$lambda_17($breathRadDelayed$delegate);
    };
  }
  function BreatheCanvas$composable$slambda_7($currRadDelayedUpd$delegate, $currRadDelayed$delegate, resultContinuation) {
    this.g9k_1 = $currRadDelayedUpd$delegate;
    this.h9k_1 = $currRadDelayed$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  BreatheCanvas$composable$slambda_7.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  BreatheCanvas$composable$slambda_7.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  BreatheCanvas$composable$slambda_7.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          BreatheCanvas$composable$lambda_2(this.h9k_1, BreatheCanvas$composable$lambda_18(this.g9k_1));
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.cg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  BreatheCanvas$composable$slambda_7.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new BreatheCanvas$composable$slambda_7(this.g9k_1, this.h9k_1, completion);
    i.i9k_1 = $this$LaunchedEffect;
    return i;
  };
  BreatheCanvas$composable$slambda_7.$metadata$ = classMeta('BreatheCanvas$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function BreatheCanvas$composable$slambda_8($currRadDelayedUpd$delegate, $currRadDelayed$delegate, resultContinuation) {
    var i = new BreatheCanvas$composable$slambda_7($currRadDelayedUpd$delegate, $currRadDelayed$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function BreatheCanvas$composable$lambda_33($edgeLeaves, $breathRad$delegate, $animColor$delegate, $outlineColor$delegate, $radiusEnd$delegate, $finalBreath$delegate, $breathRadDelayed$delegate, $breatheState$delegate, $minRadius$delegate) {
    return function ($this$Canvas) {
      var centerOffset = Offset(0.0, 0.0);
      var tmp0_iterator = $edgeLeaves.c();
      while (tmp0_iterator.d()) {
        var p = tmp0_iterator.e();
        var tmp = BreatheCanvas$composable$lambda_15($breathRad$delegate);
        var tmp_0 = BreatheCanvas$composable$lambda_13($animColor$delegate);
        BreatheCanvas$composable$drawLeaf$default($this$Canvas, $breathRad$delegate, $outlineColor$delegate, $radiusEnd$delegate, tmp, tmp_0, p, centerOffset, false, 128, null);
      }
      var tmp1_iterator = $edgeLeaves.c();
      while (tmp1_iterator.d()) {
        var p_0 = tmp1_iterator.e();
        BreatheCanvas$composable$drawLeaf($this$Canvas, $breathRad$delegate, $outlineColor$delegate, $radiusEnd$delegate, BreatheCanvas$composable$lambda_15($breathRad$delegate), BreatheCanvas$composable$lambda_13($animColor$delegate), p_0, centerOffset, true);
      }
      var tmp_1 = BreatheCanvas$composable$lambda_9($finalBreath$delegate) ? BreatheCanvas$composable$lambda_17($breathRadDelayed$delegate) : BreatheCanvas$composable$lambda_17($breathRadDelayed$delegate) * 0.8;
      var tmp_2 = BreatheCanvas$composable$lambda_13($animColor$delegate);
      var tmp_3 = LeafPos_Center_getInstance();
      BreatheCanvas$composable$drawLeaf$default($this$Canvas, $breathRad$delegate, $outlineColor$delegate, $radiusEnd$delegate, tmp_1, tmp_2, tmp_3, centerOffset, false, 128, null);
      var numberSize = BreatheCanvas$composable$lambda_7($breatheState$delegate).equals(BreatheState_Paused_getInstance()) ? 200.0 : (BreatheCanvas$composable$lambda_15($breathRad$delegate) / BreatheCanvas$composable$lambda_3($radiusEnd$delegate) > 0.3 ? BreatheCanvas$composable$lambda_15($breathRad$delegate) > BreatheCanvas$composable$lambda_5($minRadius$delegate) : false) ? BreatheCanvas$composable$lambda_15($breathRad$delegate) / BreatheCanvas$composable$lambda_3($radiusEnd$delegate) * 120.0 : 1.0;
      var numberAlpha = BreatheCanvas$composable$lambda_7($breatheState$delegate).equals(BreatheState_Paused_getInstance()) ? 255 : numberToInt(BreatheCanvas$composable$lambda_15($breathRad$delegate) / BreatheCanvas$composable$lambda_3($radiusEnd$delegate) * 255);
      return Unit_getInstance();
    };
  }
  function BreatheCanvas$composable$lambda$ref($screenSize, $currBreaths, $totalBreaths, $onFinishBreath, $breathPaused, $finishClicked, $animSpeed, $$changed) {
    return function (p0, p1) {
      BreatheCanvas$composable$lambda_19($screenSize, $currBreaths, $totalBreaths, $onFinishBreath, $breathPaused, $finishClicked, $animSpeed, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function BreatheState_Full_getInstance() {
    BreatheState_initEntries();
    return BreatheState_Full_instance;
  }
  function BreatheState_Empty_getInstance() {
    BreatheState_initEntries();
    return BreatheState_Empty_instance;
  }
  function BreatheState_Paused_getInstance() {
    BreatheState_initEntries();
    return BreatheState_Paused_instance;
  }
  function LeafPos_TopLeft_getInstance() {
    LeafPos_initEntries();
    return LeafPos_TopLeft_instance;
  }
  function LeafPos_TopRight_getInstance() {
    LeafPos_initEntries();
    return LeafPos_TopRight_instance;
  }
  function LeafPos_BottomLeft_getInstance() {
    LeafPos_initEntries();
    return LeafPos_BottomLeft_instance;
  }
  function LeafPos_BottomRight_getInstance() {
    LeafPos_initEntries();
    return LeafPos_BottomRight_instance;
  }
  function LeafPos_Top_getInstance() {
    LeafPos_initEntries();
    return LeafPos_Top_instance;
  }
  function LeafPos_Center_getInstance() {
    LeafPos_initEntries();
    return LeafPos_Center_instance;
  }
  function BreathHoldScreen$composable(screenSize, roundNum, timeLeft, finishedHold, clickedBack, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(-519867126);
    sourceInformation($composer_0, 'C(BreathHoldScreen$composable)P(3:c#ui.unit.IntSize,2,4,1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.p1n(_IntSize___get_packedValue__impl__uho7jf(screenSize)) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.q1n(roundNum) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.q1n(timeLeft) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.z1a(finishedHold) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.z1a(clickedBack) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(-519867126, $dirty, -1, 'com.patriker.icebreathing.BreathHoldScreen$composable (BreathHoldScreen.kt:20)');
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
        // Inline function 'com.patriker.icebreathing.BreathHoldScreen$composable.<anonymous>' call
        tmp$ret$0 = mutableStateOf$default(timeLeft, null, 2, null);
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
      var time$delegate = tmp$ret$4;
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
      if (false ? true : tmp0_let_0 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$5;
        // Inline function 'com.patriker.icebreathing.BreathHoldScreen$composable.<anonymous>' call
        tmp$ret$5 = derivedStateOf(BreathHoldScreen$composable$lambda_6(timeLeft, time$delegate));
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
      var timeProgress$delegate = tmp$ret$9;
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
      var tmp_3;
      if (false ? true : tmp0_let_1 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$10;
        // Inline function 'com.patriker.icebreathing.BreathHoldScreen$composable.<anonymous>' call
        tmp$ret$10 = BreathHoldScreen$composable$lambda_7;
        var value_1 = tmp$ret$10;
        tmp1_cache_1.b1b(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = tmp0_let_1;
      }
      tmp$ret$11 = tmp_3;
      tmp$ret$12 = tmp$ret$11;
      var tmp_4 = tmp$ret$12;
      tmp$ret$13 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      var tmp0_1 = tmp$ret$13;
      $composer_3.d1b();
      tmp$ret$14 = tmp0_1;
      var paused$delegate = rememberSaveable$composable([], null, null, tmp$ret$14, $composer_0, 8, 6);
      var tmp_5 = BreathHoldScreen$composable$lambda_1(timeProgress$delegate);
      var tmp_6 = tween$default(1000, 0, get_LinearEasing(), 2, null);
      var countdownProgress$delegate = animateFloatAsState$composable(tmp_5, tmp_6, 0.0, null, null, $composer_0, 0, 28);
      var tmp$ret$19;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_4 = tmp3_remember$composable;
      $composer_4.y1a(-838505973);
      sourceInformation($composer_4, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$18;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_2 = $composer_4;
      var tmp2_cache = $composer_4.z1a(time$delegate);
      var tmp$ret$17;
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = tmp1_cache_2.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_7;
      if (tmp2_cache ? true : tmp0_let_2 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$15;
        // Inline function 'com.patriker.icebreathing.BreathHoldScreen$composable.<anonymous>' call
        tmp$ret$15 = BreathHoldScreen$composable$slambda_0(time$delegate, null);
        var value_2 = tmp$ret$15;
        tmp1_cache_2.b1b(value_2);
        tmp_7 = value_2;
      } else {
        tmp_7 = tmp0_let_2;
      }
      tmp$ret$16 = tmp_7;
      tmp$ret$17 = tmp$ret$16;
      var tmp_8 = tmp$ret$17;
      tmp$ret$18 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
      var tmp0_2 = tmp$ret$18;
      $composer_4.d1b();
      tmp$ret$19 = tmp0_2;
      LaunchedEffect$composable(true, tmp$ret$19, $composer_0, 6);
      var tmp_9 = BreathHoldScreen$composable$lambda(time$delegate);
      var tmp_10 = BreathHoldScreen$composable$lambda_2(paused$delegate);
      var tmp$ret$24;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp4_remember$composable = $composer_0;
      var tmp5_remember$composable = 896 & $dirty >> 3;
      var $composer_5 = tmp4_remember$composable;
      $composer_5.y1a(-1058148781);
      sourceInformation($composer_5, 'C(remember$composable)P(1,2,3):Composables.kt#9igjgp');
      var tmp$ret$23;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_3 = $composer_5;
      var tmp2_cache_0 = !!(!!($composer_5.z1a(paused$delegate) | $composer_5.z1a(time$delegate)) | $composer_5.z1a(finishedHold));
      var tmp$ret$22;
      // Inline function 'kotlin.let' call
      var tmp0_let_3 = tmp1_cache_3.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$21;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_11;
      if (tmp2_cache_0 ? true : tmp0_let_3 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$20;
        // Inline function 'com.patriker.icebreathing.BreathHoldScreen$composable.<anonymous>' call
        tmp$ret$20 = BreathHoldScreen$composable$slambda_2(finishedHold, paused$delegate, time$delegate, null);
        var value_3 = tmp$ret$20;
        tmp1_cache_3.b1b(value_3);
        tmp_11 = value_3;
      } else {
        tmp_11 = tmp0_let_3;
      }
      tmp$ret$21 = tmp_11;
      tmp$ret$22 = tmp$ret$21;
      var tmp_12 = tmp$ret$22;
      tmp$ret$23 = (tmp_12 == null ? true : isObject(tmp_12)) ? tmp_12 : THROW_CCE();
      var tmp0_3 = tmp$ret$23;
      $composer_5.d1b();
      tmp$ret$24 = tmp0_3;
      LaunchedEffect$composable_0(tmp_9, tmp_10, tmp$ret$24, $composer_0, 0);
      var tmp$ret$25;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp6_minOf = _IntSize___get_height__impl__prv63b(screenSize);
      var tmp7_minOf = _IntSize___get_width__impl__d9yl4o(screenSize);
      tmp$ret$25 = Math.min(tmp6_minOf, tmp7_minOf);
      var progressDia = tmp$ret$25;
      var tmp$ret$27;
      // Inline function 'androidx.compose.ui.unit.Dp.times' call
      var tmp$ret$26;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$26 = _Dp___init__impl__ms3zkb(progressDia);
      var tmp8_times = tmp$ret$26;
      tmp$ret$27 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp8_times) * 0.8);
      var tmp_13 = tmp$ret$27;
      var tmp$ret$29;
      // Inline function 'androidx.compose.ui.unit.Dp.times' call
      var tmp$ret$28;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$28 = _Dp___init__impl__ms3zkb(progressDia);
      var tmp9_times = tmp$ret$28;
      tmp$ret$29 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp9_times) * 0.8);
      var progSize = DpSize(tmp_13, tmp$ret$29);
      var tmp$ret$31;
      // Inline function 'androidx.compose.ui.unit.Dp.times' call
      var tmp$ret$30;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$30 = _Dp___init__impl__ms3zkb(progressDia);
      var tmp10_times = tmp$ret$30;
      tmp$ret$31 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp10_times) * 0.73);
      var tmp_14 = tmp$ret$31;
      var tmp$ret$33;
      // Inline function 'androidx.compose.ui.unit.Dp.times' call
      var tmp$ret$32;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$32 = _Dp___init__impl__ms3zkb(progressDia);
      var tmp11_times = tmp$ret$32;
      tmp$ret$33 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp11_times) * 0.74);
      var lineDiam = DpSize(tmp_14, tmp$ret$33);
      var tmp_15 = Companion_getInstance();
      var tmp$ret$34;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$34 = _Dp___init__impl__ms3zkb(0);
      var tmp_16 = tmp$ret$34;
      var tmp$ret$35;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$35 = _Dp___init__impl__ms3zkb(0);
      var tmp_17 = offset_0(tmp_15, tmp_16, tmp$ret$35);
      var tmp$ret$40;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp12_remember$composable = $composer_0;
      var $composer_6 = tmp12_remember$composable;
      $composer_6.y1a(-1124426577);
      sourceInformation($composer_6, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$39;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_4 = $composer_6;
      var tmp2_cache_1 = !!($composer_6.z1a(new DpSize_0(lineDiam)) | $composer_6.z1a(progressDia));
      var tmp$ret$38;
      // Inline function 'kotlin.let' call
      var tmp0_let_4 = tmp1_cache_4.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$37;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_18;
      if (tmp2_cache_1 ? true : tmp0_let_4 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$36;
        // Inline function 'com.patriker.icebreathing.BreathHoldScreen$composable.<anonymous>' call
        tmp$ret$36 = BreathHoldScreen$composable$lambda_8(lineDiam, progressDia);
        var value_4 = tmp$ret$36;
        tmp1_cache_4.b1b(value_4);
        tmp_18 = value_4;
      } else {
        tmp_18 = tmp0_let_4;
      }
      tmp$ret$37 = tmp_18;
      tmp$ret$38 = tmp$ret$37;
      var tmp_19 = tmp$ret$38;
      tmp$ret$39 = (tmp_19 == null ? true : isObject(tmp_19)) ? tmp_19 : THROW_CCE();
      var tmp0_4 = tmp$ret$39;
      $composer_6.d1b();
      tmp$ret$40 = tmp0_4;
      Canvas$composable(tmp_17, tmp$ret$40, $composer_0, 6);
      var tmp0_modifier = size(Companion_getInstance(), progSize);
      var tmp$ret$41;
      // Inline function 'kotlin.comparisons.maxOf' call
      var tmp13_maxOf = BreathHoldScreen$composable$lambda_4(countdownProgress$delegate);
      tmp$ret$41 = Math.max(tmp13_maxOf, 0.0);
      var tmp1_progress = tmp$ret$41;
      var tmp$ret$42;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp14__get_dp__is0rq4 = progressDia / 15.0;
      tmp$ret$42 = _Dp___init__impl__ms3zkb(tmp14__get_dp__is0rq4);
      var tmp2_strokeWidth = tmp$ret$42;
      var tmp_20 = Companion_getInstance_4().i3a_1;
      var tmp3_color = Color__copy$default_impl_ectz3s(tmp_20, 0.98, 0.0, 0.0, 0.0, 14, null);
      CircularProgressIndicator$composable(tmp1_progress, tmp0_modifier, tmp3_color, tmp2_strokeWidth, $composer_0, 384, 0);
      var tmp4_contentAlignment = Companion_getInstance_2().w4d_1;
      var tmp_21 = Companion_getInstance();
      var tmp5_modifier = fillMaxSize$default(tmp_21, 0.0, 1, null);
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp15_Box$composable = false;
      var tmp16_Box$composable = $composer_0;
      var modifier = tmp5_modifier;
      var contentAlignment = tmp4_contentAlignment;
      var propagateMinConstraints = tmp15_Box$composable;
      var $composer_7 = tmp16_Box$composable;
      $composer_7.y1a(1330882304);
      sourceInformation($composer_7, 'C(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier = Companion_getInstance();
      if (!(0 === 0))
        contentAlignment = Companion_getInstance_2().s4d_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_7, 6);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp0_Layout$composable = modifier;
      var tmp1_Layout$composable = $composer_7;
      var tmp2_Layout$composable = 48;
      var modifier_0 = tmp0_Layout$composable;
      var $composer_8 = tmp1_Layout$composable;
      $composer_8.y1a(1725976829);
      sourceInformation($composer_8, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance();
      var tmp$ret$43;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_8;
      var $composer_9 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_9, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_5 = $composer_9.w1n(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_9);
      tmp$ret$43 = tmp0_5;
      var density = tmp$ret$43;
      var tmp$ret$44;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua = $composer_8;
      var $composer_10 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_10, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_6 = $composer_10.w1n(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_10);
      tmp$ret$44 = tmp0_6;
      var layoutDirection = tmp$ret$44;
      var tmp$ret$45;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro = $composer_8;
      var $composer_11 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_11, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_7 = $composer_11.w1n(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_11);
      tmp$ret$45 = tmp0_7;
      var viewConfiguration = tmp$ret$45;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_1().a5e_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
      var tmp8_ReusableComposeNode$composable = $composer_8;
      var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
      var $composer_12 = tmp8_ReusableComposeNode$composable;
      var tmp_22 = $composer_12.u1m();
      if (!isInterface(tmp_22, Applier)) {
        invalidApplier();
      }
      $composer_12.g1n();
      if ($composer_12.e1n()) {
        $composer_12.h1n(tmp6_ReusableComposeNode$composable);
      } else {
        $composer_12.j1n();
      }
      $composer_12.l1n();
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_12);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_1().e5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_1().d5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_1().f5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_1().g5e_1);
      $composer_12.m1n();
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_12)), $composer_12, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_12.y1a(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp3__anonymous__ufb84q = $composer_12;
      var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_13 = tmp3__anonymous__ufb84q;
      $composer_13.y1a(-2137368960);
      sourceInformation($composer_13, 'C72@3384L9:Box.kt#2w3rfo');
      if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_13.l1m()) {
        // Inline function 'com.patriker.icebreathing.BreathHoldScreen$composable.<anonymous>' call
        var tmp17__anonymous__gqgob = BoxScopeInstance_getInstance();
        var tmp18__anonymous__4dy6j8 = $composer_13;
        var tmp19__anonymous__98mtqr = 6;
        var $composer_14 = tmp18__anonymous__4dy6j8;
        var $dirty_0 = tmp19__anonymous__98mtqr;
        if ((tmp19__anonymous__98mtqr & 14) === 0)
          $dirty_0 = $dirty_0 | ($composer_14.z1a(tmp17__anonymous__gqgob) ? 4 : 2);
        if (!(($dirty_0 & 91) === 18) ? true : !$composer_14.l1m()) {
          var tmp_23 = Companion_getInstance();
          var tmp$ret$46;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$46 = _Dp___init__impl__ms3zkb(16);
          var tmp_24 = tmp$ret$46;
          var tmp$ret$47;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$47 = _Dp___init__impl__ms3zkb(16);
          RoundText$composable(roundNum, tmp17__anonymous__gqgob.c7d(padding(tmp_23, tmp_24, tmp$ret$47), Companion_getInstance_2().s4d_1), $composer_14, 14 & $dirty >> 3);
          // Inline function 'androidx.compose.foundation.layout.Column$composable' call
          var tmp0_Column$composable = null;
          var tmp1_Column$composable = null;
          var tmp2_Column$composable = Companion_getInstance_2().f4e_1;
          var tmp3_Column$composable = $composer_14;
          var modifier_1 = tmp0_Column$composable;
          var verticalArrangement = tmp1_Column$composable;
          var horizontalAlignment = tmp2_Column$composable;
          var $composer_15 = tmp3_Column$composable;
          $composer_15.y1a(860130704);
          sourceInformation($composer_15, 'C(Column$composable)P(2,3,1)77@3913L61,78@3979L133:Column.kt#2w3rfo');
          if (!(1 === 0))
            modifier_1 = Companion_getInstance();
          if (!(2 === 0))
            verticalArrangement = Arrangement_getInstance().h7c_1;
          if (!(0 === 0))
            horizontalAlignment = Companion_getInstance_2().e4e_1;
          var measurePolicy_0 = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_15, 48);
          // Inline function 'androidx.compose.ui.layout.Layout$composable' call
          var tmp0_Layout$composable_0 = modifier_1;
          var tmp1_Layout$composable_0 = $composer_15;
          var tmp2_Layout$composable_0 = 0;
          var modifier_2 = tmp0_Layout$composable_0;
          var $composer_16 = tmp1_Layout$composable_0;
          $composer_16.y1a(1725976829);
          sourceInformation($composer_16, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
          if (!(0 === 0))
            modifier_2 = Companion_getInstance();
          var tmp$ret$48;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp0_$get_current$$composable_h5ksy7_0 = get_LocalDensity();
          var tmp1_$get_current$$composable_gn3xww_0 = $composer_16;
          var $composer_17 = tmp1_$get_current$$composable_gn3xww_0;
          sourceInformationMarkerStart($composer_17, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_8 = $composer_17.w1n(tmp0_$get_current$$composable_h5ksy7_0);
          sourceInformationMarkerEnd($composer_17);
          tmp$ret$48 = tmp0_8;
          var density_0 = tmp$ret$48;
          var tmp$ret$49;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp2_$get_current$$composable_g4n2vl_0 = get_LocalLayoutDirection();
          var tmp3_$get_current$$composable_fm67ua_0 = $composer_16;
          var $composer_18 = tmp3_$get_current$$composable_fm67ua_0;
          sourceInformationMarkerStart($composer_18, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_9 = $composer_18.w1n(tmp2_$get_current$$composable_g4n2vl_0);
          sourceInformationMarkerEnd($composer_18);
          tmp$ret$49 = tmp0_9;
          var layoutDirection_0 = tmp$ret$49;
          var tmp$ret$50;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp4_$get_current$$composable_f3pcsz_0 = get_LocalViewConfiguration();
          var tmp5_$get_current$$composable_el8hro_0 = $composer_16;
          var $composer_19 = tmp5_$get_current$$composable_el8hro_0;
          sourceInformationMarkerStart($composer_19, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_10 = $composer_19.w1n(tmp4_$get_current$$composable_f3pcsz_0);
          sourceInformationMarkerEnd($composer_19);
          tmp$ret$50 = tmp0_10;
          var viewConfiguration_0 = tmp$ret$50;
          // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
          var tmp6_ReusableComposeNode$composable_0 = Companion_getInstance_1().a5e_1;
          var tmp7_ReusableComposeNode$composable_0 = materializerOf(modifier_2);
          var tmp8_ReusableComposeNode$composable_0 = $composer_16;
          var tmp9_ReusableComposeNode$composable_0 = 6 | 7168 & tmp2_Layout$composable_0 << 9;
          var $composer_20 = tmp8_ReusableComposeNode$composable_0;
          var tmp_25 = $composer_20.u1m();
          if (!isInterface(tmp_25, Applier)) {
            invalidApplier();
          }
          $composer_20.g1n();
          if ($composer_20.e1n()) {
            $composer_20.h1n(tmp6_ReusableComposeNode$composable_0);
          } else {
            $composer_20.j1n();
          }
          $composer_20.l1n();
          // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
          var tmp10__anonymous__yfiz50_0 = _Updater___init__impl__rbfxm8($composer_20);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, measurePolicy_0, Companion_getInstance_1().e5e_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, density_0, Companion_getInstance_1().d5e_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, layoutDirection_0, Companion_getInstance_1().f5e_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, viewConfiguration_0, Companion_getInstance_1().g5e_1);
          $composer_20.m1n();
          tmp7_ReusableComposeNode$composable_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_20)), $composer_20, 112 & tmp9_ReusableComposeNode$composable_0 >> 3);
          $composer_20.y1a(2058660585);
          // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
          var tmp3__anonymous__ufb84q_0 = $composer_20;
          var tmp4__anonymous__pkmkx7_0 = 14 & tmp9_ReusableComposeNode$composable_0 >> 9;
          var $composer_21 = tmp3__anonymous__ufb84q_0;
          $composer_21.y1a(-1163856341);
          sourceInformation($composer_21, 'C79@4027L9:Column.kt#2w3rfo');
          if (!((tmp4__anonymous__pkmkx7_0 & 11) === 2) ? true : !$composer_21.l1m()) {
            // Inline function 'com.patriker.icebreathing.BreathHoldScreen$composable.<anonymous>.<anonymous>' call
            var tmp4__anonymous__pkmkx7_1 = ColumnScopeInstance_getInstance();
            var tmp5__anonymous__kpxxpo = $composer_21;
            var tmp6__anonymous__fv9ai5 = 6;
            var $composer_22 = tmp5__anonymous__kpxxpo;
            if (!((tmp6__anonymous__fv9ai5 & 81) === 16) ? true : !$composer_22.l1m()) {
              var tmp_26 = StrRes_getInstance().x9k_1;
              var tmp_27 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
              var tmp_28 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
              var tmp_29 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
              var tmp_30 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
              var tmp_31 = _TextOverflow___init__impl__obguoe(0);
              var tmp0_fontSize = get_sp(28);
              var tmp1_color = Companion_getInstance_4().i3a_1;
              Text$composable(tmp_26, null, tmp_27, tmp_28, null, null, null, tmp_29, null, null, tmp_30, tmp_31, false, 0, null, TextStyle_init_$Create$(tmp1_color, tmp0_fontSize, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 262140, null), $composer_22, 0, 0, 32766);
              var tmp_32 = secondsAsStr(BreathHoldScreen$composable$lambda(time$delegate));
              var tmp_33 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
              var tmp_34 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
              var tmp_35 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
              var tmp_36 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
              var tmp_37 = _TextOverflow___init__impl__obguoe(0);
              var tmp2_fontSize = get_sp(32);
              var tmp3_color_0 = Companion_getInstance_4().i3a_1;
              Text$composable(tmp_32, null, tmp_33, tmp_34, null, null, null, tmp_35, null, null, tmp_36, tmp_37, false, 0, null, TextStyle_init_$Create$(tmp3_color_0, tmp2_fontSize, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 262140, null), $composer_22, 0, 0, 32766);
              $composer_14.y1a(461953320);
              if (BreathHoldScreen$composable$lambda_2(paused$delegate)) {
                var tmp_38 = StrRes_getInstance().y9k_1;
                var tmp_39 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
                var tmp_40 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                var tmp_41 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                var tmp_42 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                var tmp_43 = _TextOverflow___init__impl__obguoe(0);
                var tmp4_fontSize = get_sp(32);
                var tmp5_color = Companion_getInstance_4().i3a_1;
                Text$composable(tmp_38, null, tmp_39, tmp_40, null, null, null, tmp_41, null, null, tmp_42, tmp_43, false, 0, null, TextStyle_init_$Create$(tmp5_color, tmp4_fontSize, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 262140, null), $composer_22, 0, 0, 32766);
              }
              $composer_14.d1b();
            } else {
              $composer_22.l1h();
            }
          } else {
            $composer_21.l1h();
          }
          $composer_21.d1b();
          $composer_20.d1b();
          $composer_20.k1n();
          $composer_16.d1b();
          $composer_15.d1b();
          var tmp$ret$55;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp7_remember$composable = $composer_14;
          var $composer_23 = tmp7_remember$composable;
          $composer_23.y1a(547886695);
          sourceInformation($composer_23, 'C(remember$composable):Composables.kt#9igjgp');
          var tmp$ret$54;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache_5 = $composer_23;
          var tmp$ret$53;
          // Inline function 'kotlin.let' call
          var tmp0_let_5 = tmp1_cache_5.a1b();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$52;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_44;
          if (false ? true : tmp0_let_5 === Companion_getInstance_0().c1b_1) {
            var tmp$ret$51;
            // Inline function 'com.patriker.icebreathing.BreathHoldScreen$composable.<anonymous>.<anonymous>' call
            tmp$ret$51 = BreathHoldScreen$composable$goToStart$ref(finishedHold, clickedBack);
            var value_5 = tmp$ret$51;
            tmp1_cache_5.b1b(value_5);
            tmp_44 = value_5;
          } else {
            tmp_44 = tmp0_let_5;
          }
          tmp$ret$52 = tmp_44;
          tmp$ret$53 = tmp$ret$52;
          var tmp_45 = tmp$ret$53;
          tmp$ret$54 = (tmp_45 == null ? true : isObject(tmp_45)) ? tmp_45 : THROW_CCE();
          var tmp0_11 = tmp$ret$54;
          $composer_23.d1b();
          tmp$ret$55 = tmp0_11;
          var tmp_46 = tmp$ret$55;
          var tmp_47 = tmp17__anonymous__gqgob.c7d(Companion_getInstance(), Companion_getInstance_2().y4d_1);
          var tmp$ret$56;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$56 = _Dp___init__impl__ms3zkb(8);
          var tmp_48 = padding_0(tmp_47, tmp$ret$56);
          var tmp$ret$57;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$57 = _Dp___init__impl__ms3zkb(32);
          BackButton$composable(tmp_46, tmp_48, tmp$ret$57, $composer_14, 384);
          var tmp_49 = tmp17__anonymous__gqgob.c7d(Companion_getInstance(), Companion_getInstance_2().z4d_1);
          var tmp$ret$58;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$58 = _Dp___init__impl__ms3zkb(8);
          var pauseAlign = padding_0(tmp_49, tmp$ret$58);
          if (BreathHoldScreen$composable$lambda_2(paused$delegate)) {
            $composer_14.y1a(461953812);
            var tmp$ret$63;
            // Inline function 'androidx.compose.runtime.remember$composable' call
            var tmp8_remember$composable = $composer_14;
            var $composer_24 = tmp8_remember$composable;
            $composer_24.y1a(547886695);
            sourceInformation($composer_24, 'C(remember$composable):Composables.kt#9igjgp');
            var tmp$ret$62;
            // Inline function 'androidx.compose.runtime.cache' call
            var tmp1_cache_6 = $composer_24;
            var tmp$ret$61;
            // Inline function 'kotlin.let' call
            var tmp0_let_6 = tmp1_cache_6.a1b();
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$60;
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var tmp_50;
            if (false ? true : tmp0_let_6 === Companion_getInstance_0().c1b_1) {
              var tmp$ret$59;
              // Inline function 'com.patriker.icebreathing.BreathHoldScreen$composable.<anonymous>.<anonymous>' call
              tmp$ret$59 = BreathHoldScreen$composable$togglePause$ref(paused$delegate);
              var value_6 = tmp$ret$59;
              tmp1_cache_6.b1b(value_6);
              tmp_50 = value_6;
            } else {
              tmp_50 = tmp0_let_6;
            }
            tmp$ret$60 = tmp_50;
            tmp$ret$61 = tmp$ret$60;
            var tmp_51 = tmp$ret$61;
            tmp$ret$62 = (tmp_51 == null ? true : isObject(tmp_51)) ? tmp_51 : THROW_CCE();
            var tmp0_12 = tmp$ret$62;
            $composer_24.d1b();
            tmp$ret$63 = tmp0_12;
            var tmp_52 = tmp$ret$63;
            var tmp$ret$64;
            // Inline function 'androidx.compose.ui.unit.dp' call
            tmp$ret$64 = _Dp___init__impl__ms3zkb(36);
            ContButton$composable(tmp_52, pauseAlign, tmp$ret$64, $composer_14, 384);
            $composer_14.d1b();
          } else {
            $composer_14.y1a(461953886);
            var tmp$ret$69;
            // Inline function 'androidx.compose.runtime.remember$composable' call
            var tmp9_remember$composable = $composer_14;
            var $composer_25 = tmp9_remember$composable;
            $composer_25.y1a(547886695);
            sourceInformation($composer_25, 'C(remember$composable):Composables.kt#9igjgp');
            var tmp$ret$68;
            // Inline function 'androidx.compose.runtime.cache' call
            var tmp1_cache_7 = $composer_25;
            var tmp$ret$67;
            // Inline function 'kotlin.let' call
            var tmp0_let_7 = tmp1_cache_7.a1b();
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$66;
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var tmp_53;
            if (false ? true : tmp0_let_7 === Companion_getInstance_0().c1b_1) {
              var tmp$ret$65;
              // Inline function 'com.patriker.icebreathing.BreathHoldScreen$composable.<anonymous>.<anonymous>' call
              tmp$ret$65 = BreathHoldScreen$composable$togglePause$ref_0(paused$delegate);
              var value_7 = tmp$ret$65;
              tmp1_cache_7.b1b(value_7);
              tmp_53 = value_7;
            } else {
              tmp_53 = tmp0_let_7;
            }
            tmp$ret$66 = tmp_53;
            tmp$ret$67 = tmp$ret$66;
            var tmp_54 = tmp$ret$67;
            tmp$ret$68 = (tmp_54 == null ? true : isObject(tmp_54)) ? tmp_54 : THROW_CCE();
            var tmp0_13 = tmp$ret$68;
            $composer_25.d1b();
            tmp$ret$69 = tmp0_13;
            var tmp_55 = tmp$ret$69;
            var tmp$ret$70;
            // Inline function 'androidx.compose.ui.unit.dp' call
            tmp$ret$70 = _Dp___init__impl__ms3zkb(36);
            PauseButton$composable(tmp_55, pauseAlign, tmp$ret$70, $composer_14, 384);
            $composer_14.d1b();
          }
          var tmp$ret$75;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp10_remember$composable = $composer_14;
          var tmp11_remember$composable = 112 & $dirty >> 6;
          var $composer_26 = tmp10_remember$composable;
          $composer_26.y1a(-1124426577);
          sourceInformation($composer_26, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
          var tmp$ret$74;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache_8 = $composer_26;
          var tmp2_cache_2 = !!($composer_26.z1a(time$delegate) | $composer_26.z1a(finishedHold));
          var tmp$ret$73;
          // Inline function 'kotlin.let' call
          var tmp0_let_8 = tmp1_cache_8.a1b();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$72;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_56;
          if (tmp2_cache_2 ? true : tmp0_let_8 === Companion_getInstance_0().c1b_1) {
            var tmp$ret$71;
            // Inline function 'com.patriker.icebreathing.BreathHoldScreen$composable.<anonymous>.<anonymous>' call
            tmp$ret$71 = BreathHoldScreen$composable$lambda_9(finishedHold, time$delegate);
            var value_8 = tmp$ret$71;
            tmp1_cache_8.b1b(value_8);
            tmp_56 = value_8;
          } else {
            tmp_56 = tmp0_let_8;
          }
          tmp$ret$72 = tmp_56;
          tmp$ret$73 = tmp$ret$72;
          var tmp_57 = tmp$ret$73;
          tmp$ret$74 = (tmp_57 == null ? true : isObject(tmp_57)) ? tmp_57 : THROW_CCE();
          var tmp0_14 = tmp$ret$74;
          $composer_26.d1b();
          tmp$ret$75 = tmp0_14;
          var tmp_58 = tmp$ret$75;
          var tmp_59 = tmp17__anonymous__gqgob.c7d(Companion_getInstance(), Companion_getInstance_2().a4e_1);
          var tmp$ret$76;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$76 = _Dp___init__impl__ms3zkb(8);
          var tmp_60 = padding_0(tmp_59, tmp$ret$76);
          var tmp$ret$77;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$77 = _Dp___init__impl__ms3zkb(32);
          FinishBreatheButton$composable(tmp_58, tmp_60, tmp$ret$77, $composer_14, 384);
        } else {
          $composer_14.l1h();
        }
      } else {
        $composer_13.l1h();
      }
      $composer_13.d1b();
      $composer_12.d1b();
      $composer_12.k1n();
      $composer_8.d1b();
      $composer_7.d1b();
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
      tmp0_safe_receiver.g1p(BreathHoldScreen$composable$lambda$ref(screenSize, roundNum, timeLeft, finishedHold, clickedBack, $changed));
    }
  }
  function BreathHoldScreen$composable$lambda($time$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('time', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $time$delegate.i2();
    return tmp$ret$0;
  }
  function BreathHoldScreen$composable$lambda_0($time$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('time', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $time$delegate.p11(value);
  }
  function BreathHoldScreen$composable$lambda_1($timeProgress$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('timeProgress', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $timeProgress$delegate.i2();
    return tmp$ret$0;
  }
  function BreathHoldScreen$composable$lambda_2($paused$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('paused', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $paused$delegate.i2();
    return tmp$ret$0;
  }
  function BreathHoldScreen$composable$lambda_3($paused$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('paused', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $paused$delegate.p11(value);
  }
  function BreathHoldScreen$composable$lambda_4($countdownProgress$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('countdownProgress', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $countdownProgress$delegate.i2();
    return tmp$ret$0;
  }
  function BreathHoldScreen$composable$togglePause(paused$delegate) {
    BreathHoldScreen$composable$lambda_3(paused$delegate, !BreathHoldScreen$composable$lambda_2(paused$delegate));
  }
  function BreathHoldScreen$composable$clickedFinish($finishedHold, time$delegate) {
    BreathHoldScreen$composable$lambda_0(time$delegate, 0);
    $finishedHold(SessionState_BreatheHold_getInstance());
  }
  function BreathHoldScreen$composable$goToStart($finishedHold, $clickedBack) {
    $finishedHold(SessionState_Done_getInstance());
    $clickedBack();
  }
  function BreathHoldScreen$composable$lambda_5($screenSize, $roundNum, $timeLeft, $finishedHold, $clickedBack, $$changed, $composer, $force) {
    return BreathHoldScreen$composable($screenSize, $roundNum, $timeLeft, $finishedHold, $clickedBack, $composer, $$changed | 1);
  }
  function BreathHoldScreen$composable$lambda_6($timeLeft, $time$delegate) {
    return function () {
      return ($timeLeft - BreathHoldScreen$composable$lambda($time$delegate) | 0) / $timeLeft;
    };
  }
  function BreathHoldScreen$composable$lambda_7() {
    return mutableStateOf$default(false, null, 2, null);
  }
  function BreathHoldScreen$composable$slambda($time$delegate, resultContinuation) {
    this.m9l_1 = $time$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  BreathHoldScreen$composable$slambda.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  BreathHoldScreen$composable$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  BreathHoldScreen$composable$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = delay(new Long(1000, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0 = BreathHoldScreen$composable$lambda(this.m9l_1);
            BreathHoldScreen$composable$lambda_0(this.m9l_1, tmp0 - 1 | 0);
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
  BreathHoldScreen$composable$slambda.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new BreathHoldScreen$composable$slambda(this.m9l_1, completion);
    i.n9l_1 = $this$LaunchedEffect;
    return i;
  };
  BreathHoldScreen$composable$slambda.$metadata$ = classMeta('BreathHoldScreen$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function BreathHoldScreen$composable$slambda_0($time$delegate, resultContinuation) {
    var i = new BreathHoldScreen$composable$slambda($time$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function BreathHoldScreen$composable$slambda_1($finishedHold, $paused$delegate, $time$delegate, resultContinuation) {
    this.w9l_1 = $finishedHold;
    this.x9l_1 = $paused$delegate;
    this.y9l_1 = $time$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  BreathHoldScreen$composable$slambda_1.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  BreathHoldScreen$composable$slambda_1.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  BreathHoldScreen$composable$slambda_1.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = delay(new Long(1000, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (!BreathHoldScreen$composable$lambda_2(this.x9l_1)) {
              var tmp0 = BreathHoldScreen$composable$lambda(this.y9l_1);
              BreathHoldScreen$composable$lambda_0(this.y9l_1, tmp0 - 1 | 0);
            }

            if (BreathHoldScreen$composable$lambda(this.y9l_1) <= 0)
              this.w9l_1(SessionState_BreatheHold_getInstance());
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
  BreathHoldScreen$composable$slambda_1.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new BreathHoldScreen$composable$slambda_1(this.w9l_1, this.x9l_1, this.y9l_1, completion);
    i.z9l_1 = $this$LaunchedEffect;
    return i;
  };
  BreathHoldScreen$composable$slambda_1.$metadata$ = classMeta('BreathHoldScreen$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function BreathHoldScreen$composable$slambda_2($finishedHold, $paused$delegate, $time$delegate, resultContinuation) {
    var i = new BreathHoldScreen$composable$slambda_1($finishedHold, $paused$delegate, $time$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function BreathHoldScreen$composable$lambda_8($lineDiam, $progressDia) {
    return function ($this$Canvas) {
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf = $this$Canvas.o2k(_DpSize___get_height__impl__5xueo2($lineDiam));
      var tmp1_minOf = $this$Canvas.o2k(_DpSize___get_width__impl__o3d5gt($lineDiam));
      tmp$ret$0 = Math.min(tmp0_minOf, tmp1_minOf);
      var tmp0_radius = tmp$ret$0 / 2.0;
      var tmp = get_mainColorTemp();
      var tmp1_color = Color__copy$default_impl_ectz3s(tmp, 0.9, 0.0, 0.0, 0.0, 14, null);
      var tmp_0 = $progressDia / 20.0;
      var tmp2_style = Stroke_init_$Create$(tmp_0, 0.0, null, null, null, 30, null);
      $this$Canvas.i3l(tmp1_color, tmp0_radius, null, 0.0, tmp2_style, null, null, 108, null);
      return Unit_getInstance();
    };
  }
  function BreathHoldScreen$composable$goToStart$ref($finishedHold, $clickedBack) {
    var l = function () {
      BreathHoldScreen$composable$goToStart($finishedHold, $clickedBack);
      return Unit_getInstance();
    };
    l.callableName = 'goToStart';
    return l;
  }
  function BreathHoldScreen$composable$togglePause$ref($paused$delegate) {
    var l = function () {
      BreathHoldScreen$composable$togglePause($paused$delegate);
      return Unit_getInstance();
    };
    l.callableName = 'togglePause';
    return l;
  }
  function BreathHoldScreen$composable$togglePause$ref_0($paused$delegate) {
    var l = function () {
      BreathHoldScreen$composable$togglePause($paused$delegate);
      return Unit_getInstance();
    };
    l.callableName = 'togglePause';
    return l;
  }
  function BreathHoldScreen$composable$lambda_9($finishedHold, $time$delegate) {
    return function () {
      BreathHoldScreen$composable$clickedFinish($finishedHold, $time$delegate);
      return Unit_getInstance();
    };
  }
  function BreathHoldScreen$composable$lambda$ref($screenSize, $roundNum, $timeLeft, $finishedHold, $clickedBack, $$changed) {
    return function (p0, p1) {
      BreathHoldScreen$composable$lambda_5($screenSize, $roundNum, $timeLeft, $finishedHold, $clickedBack, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  var BreathRate_X0_75_instance;
  var BreathRate_X0_9_instance;
  var BreathRate_X1_instance;
  var BreathRate_X1_1_instance;
  var BreathRate_X1_25_instance;
  var BreathRate_entriesInitialized;
  function BreathRate_initEntries() {
    if (BreathRate_entriesInitialized)
      return Unit_getInstance();
    BreathRate_entriesInitialized = true;
    BreathRate_X0_75_instance = new BreathRate('X0_75', 0);
    BreathRate_X0_9_instance = new BreathRate('X0_9', 1);
    BreathRate_X1_instance = new BreathRate('X1', 2);
    BreathRate_X1_1_instance = new BreathRate('X1_1', 3);
    BreathRate_X1_25_instance = new BreathRate('X1_25', 4);
  }
  function BreathRate(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  BreathRate.$metadata$ = classMeta('BreathRate', undefined, undefined, undefined, undefined, Enum.prototype);
  function toMs(_this__u8e3s4, baseMs) {
    var tmp0_subject = _this__u8e3s4;
    var tmp0 = tmp0_subject.t5_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = numberToInt(1.25 * baseMs);
        break;
      case 1:
        tmp = numberToInt(1.1 * baseMs);
        break;
      case 2:
        tmp = baseMs;
        break;
      case 3:
        tmp = numberToInt(0.9 * baseMs);
        break;
      case 4:
        tmp = numberToInt(0.75 * baseMs);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var ms = tmp;
    return ms;
  }
  function Decrease(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp0 = tmp0_subject.t5_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = BreathRate_X0_75_getInstance();
        break;
      case 1:
        tmp = BreathRate_X0_75_getInstance();
        break;
      case 2:
        tmp = BreathRate_X0_9_getInstance();
        break;
      case 3:
        tmp = BreathRate_X1_getInstance();
        break;
      case 4:
        tmp = BreathRate_X1_1_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function Increase(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp0 = tmp0_subject.t5_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = BreathRate_X0_9_getInstance();
        break;
      case 1:
        tmp = BreathRate_X1_getInstance();
        break;
      case 2:
        tmp = BreathRate_X1_1_getInstance();
        break;
      case 3:
        tmp = BreathRate_X1_25_getInstance();
        break;
      case 4:
        tmp = BreathRate_X1_25_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function str(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp0 = tmp0_subject.t5_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = '0.75x';
        break;
      case 1:
        tmp = '0.9x';
        break;
      case 2:
        tmp = '1x';
        break;
      case 3:
        tmp = '1.1x';
        break;
      case 4:
        tmp = '1.25x';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function BreathRate_X0_75_getInstance() {
    BreathRate_initEntries();
    return BreathRate_X0_75_instance;
  }
  function BreathRate_X0_9_getInstance() {
    BreathRate_initEntries();
    return BreathRate_X0_9_instance;
  }
  function BreathRate_X1_getInstance() {
    BreathRate_initEntries();
    return BreathRate_X1_instance;
  }
  function BreathRate_X1_1_getInstance() {
    BreathRate_initEntries();
    return BreathRate_X1_1_instance;
  }
  function BreathRate_X1_25_getInstance() {
    BreathRate_initEntries();
    return BreathRate_X1_25_instance;
  }
  var HoldState_Stop_instance;
  var HoldState_Inhale_instance;
  var HoldState_Exhale_instance;
  var HoldState_entriesInitialized;
  function HoldState_initEntries() {
    if (HoldState_entriesInitialized)
      return Unit_getInstance();
    HoldState_entriesInitialized = true;
    HoldState_Stop_instance = new HoldState('Stop', 0);
    HoldState_Inhale_instance = new HoldState('Inhale', 1);
    HoldState_Exhale_instance = new HoldState('Exhale', 2);
  }
  function HoldState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  HoldState.$metadata$ = classMeta('HoldState', undefined, undefined, undefined, undefined, Enum.prototype);
  function BreathInScreen$composable(screenSize, timeLeft, finishedHold, clickedBack, $composer, $changed, $default) {
    var timeLeft_0 = {_v: timeLeft};
    var clickedBack_0 = {_v: clickedBack};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(-2140301262);
    sourceInformation($composer_0, 'C(BreathInScreen$composable)P(2:c#ui.unit.IntSize,3,1)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.p1n(_IntSize___get_packedValue__impl__uho7jf(screenSize)) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.q1n(timeLeft_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.z1a(finishedHold) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.z1a(clickedBack_0._v) : false) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.l1m()) {
      $composer_0.y1m();
      if (($changed & 1) === 0 ? true : $composer_0.c1n()) {
        if (!(($default & 2) === 0)) {
          timeLeft_0._v = 17;
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
            // Inline function 'com.patriker.icebreathing.BreathInScreen$composable.<anonymous>' call
            tmp$ret$0 = BreathInScreen$composable$lambda_9;
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
          clickedBack_0._v = tmp$ret$4;
          $dirty = $dirty & -7169;
        }
      } else {
        $composer_0.l1h();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.z1m();
      if (isTraceInProgress()) {
        traceEventStart(-2140301262, $dirty, -1, 'com.patriker.icebreathing.BreathInScreen$composable (BreatheInScreen.kt:22)');
      }
      var holdTime = 16.0;
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
      if (false ? true : tmp0_let_0 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$5;
        // Inline function 'com.patriker.icebreathing.BreathInScreen$composable.<anonymous>' call
        tmp$ret$5 = BreathInScreen$composable$lambda_10;
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
      var holdState$delegate = rememberSaveable$composable([], null, null, tmp$ret$9, $composer_0, 8, 6);
      var tmp_3 = BreathInScreen$composable$lambda(holdState$delegate);
      var transition = updateTransition$composable(tmp_3, null, $composer_0, 0, 2);
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
      if (false ? true : tmp0_let_1 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$10;
        // Inline function 'com.patriker.icebreathing.BreathInScreen$composable.<anonymous>' call
        var tmp_5 = timeLeft_0._v;
        tmp$ret$10 = mutableStateOf$default(tmp_5, null, 2, null);
        var value_1 = tmp$ret$10;
        tmp1_cache_1.b1b(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = tmp0_let_1;
      }
      tmp$ret$11 = tmp_4;
      tmp$ret$12 = tmp$ret$11;
      var tmp_6 = tmp$ret$12;
      tmp$ret$13 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      var tmp0_1 = tmp$ret$13;
      $composer_3.d1b();
      tmp$ret$14 = tmp0_1;
      var time$delegate = tmp$ret$14;
      var tmp$ret$19;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_4 = tmp3_remember$composable;
      $composer_4.y1a(547886695);
      sourceInformation($composer_4, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$18;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_2 = $composer_4;
      var tmp$ret$17;
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = tmp1_cache_2.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_7;
      if (false ? true : tmp0_let_2 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$15;
        // Inline function 'com.patriker.icebreathing.BreathInScreen$composable.<anonymous>' call
        tmp$ret$15 = derivedStateOf(BreathInScreen$composable$lambda_11(holdTime, time$delegate));
        var value_2 = tmp$ret$15;
        tmp1_cache_2.b1b(value_2);
        tmp_7 = value_2;
      } else {
        tmp_7 = tmp0_let_2;
      }
      tmp$ret$16 = tmp_7;
      tmp$ret$17 = tmp$ret$16;
      var tmp_8 = tmp$ret$17;
      tmp$ret$18 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
      var tmp0_2 = tmp$ret$18;
      $composer_4.d1b();
      tmp$ret$19 = tmp0_2;
      var timeProgress$delegate = tmp$ret$19;
      var tmp$ret$20;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp4_minOf = _IntSize___get_height__impl__prv63b(screenSize);
      var tmp5_minOf = _IntSize___get_width__impl__d9yl4o(screenSize);
      tmp$ret$20 = Math.min(tmp4_minOf, tmp5_minOf);
      var progressDia = tmp$ret$20;
      var tmp$ret$25;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp6_remember$composable = $composer_0;
      var $composer_5 = tmp6_remember$composable;
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
      var tmp_9;
      if (false ? true : tmp0_let_3 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$21;
        // Inline function 'com.patriker.icebreathing.BreathInScreen$composable.<anonymous>' call
        tmp$ret$21 = BreathInScreen$composable$lambda_12;
        var value_3 = tmp$ret$21;
        tmp1_cache_3.b1b(value_3);
        tmp_9 = value_3;
      } else {
        tmp_9 = tmp0_let_3;
      }
      tmp$ret$22 = tmp_9;
      tmp$ret$23 = tmp$ret$22;
      var tmp_10 = tmp$ret$23;
      tmp$ret$24 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
      var tmp0_3 = tmp$ret$24;
      $composer_5.d1b();
      tmp$ret$25 = tmp0_3;
      var paused$delegate = rememberSaveable$composable([], null, null, tmp$ret$25, $composer_0, 8, 6);
      var tmp$ret$30;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp7_remember$composable = $composer_0;
      var $composer_6 = tmp7_remember$composable;
      $composer_6.y1a(-1124426577);
      sourceInformation($composer_6, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$29;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_4 = $composer_6;
      var tmp2_cache = !!($composer_6.z1a(holdState$delegate) | $composer_6.z1a(time$delegate));
      var tmp$ret$28;
      // Inline function 'kotlin.let' call
      var tmp0_let_4 = tmp1_cache_4.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$27;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_11;
      if (tmp2_cache ? true : tmp0_let_4 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$26;
        // Inline function 'com.patriker.icebreathing.BreathInScreen$composable.<anonymous>' call
        tmp$ret$26 = BreathInScreen$composable$slambda_0(holdState$delegate, time$delegate, null);
        var value_4 = tmp$ret$26;
        tmp1_cache_4.b1b(value_4);
        tmp_11 = value_4;
      } else {
        tmp_11 = tmp0_let_4;
      }
      tmp$ret$27 = tmp_11;
      tmp$ret$28 = tmp$ret$27;
      var tmp_12 = tmp$ret$28;
      tmp$ret$29 = (tmp_12 == null ? true : isObject(tmp_12)) ? tmp_12 : THROW_CCE();
      var tmp0_4 = tmp$ret$29;
      $composer_6.d1b();
      tmp$ret$30 = tmp0_4;
      LaunchedEffect$composable(true, tmp$ret$30, $composer_0, 6);
      var tmp_13 = BreathInScreen$composable$lambda_1(time$delegate);
      var tmp_14 = BreathInScreen$composable$lambda_4(paused$delegate);
      var tmp$ret$35;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp8_remember$composable = $composer_0;
      var $composer_7 = tmp8_remember$composable;
      $composer_7.y1a(-1603429786);
      sourceInformation($composer_7, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var indexedObject = [time$delegate, holdState$delegate, paused$delegate, finishedHold];
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var key = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid = !!(invalid | $composer_7.z1a(key));
      }
      var tmp$ret$34;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_5 = $composer_7;
      var tmp2_cache_0 = invalid;
      var tmp$ret$33;
      // Inline function 'kotlin.let' call
      var tmp0_let_5 = tmp1_cache_5.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$32;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_15;
      if (tmp2_cache_0 ? true : tmp0_let_5 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$31;
        // Inline function 'com.patriker.icebreathing.BreathInScreen$composable.<anonymous>' call
        tmp$ret$31 = BreathInScreen$composable$slambda_2(finishedHold, time$delegate, holdState$delegate, paused$delegate, null);
        var value_5 = tmp$ret$31;
        tmp1_cache_5.b1b(value_5);
        tmp_15 = value_5;
      } else {
        tmp_15 = tmp0_let_5;
      }
      tmp$ret$32 = tmp_15;
      tmp$ret$33 = tmp$ret$32;
      var tmp_16 = tmp$ret$33;
      tmp$ret$34 = (tmp_16 == null ? true : isObject(tmp_16)) ? tmp_16 : THROW_CCE();
      var tmp0_5 = tmp$ret$34;
      $composer_7.d1b();
      tmp$ret$35 = tmp0_5;
      LaunchedEffect$composable_0(tmp_13, tmp_14, tmp$ret$35, $composer_0, 0);
      var tmp_17 = BreathInScreen$composable$lambda_3(timeProgress$delegate);
      var tmp_18 = tween$default(1000, 0, get_LinearEasing(), 2, null);
      var countdownProgress$delegate = animateFloatAsState$composable(tmp_17, tmp_18, 0.0, null, null, $composer_0, 0, 28);
      var tmp$ret$39;
      // Inline function 'androidx.compose.animation.core.animateFloat$composable' call
      var tmp9_animateFloat$composable = BreathInScreen$composable$lambda_13(holdState$delegate);
      var tmp10_animateFloat$composable = null;
      var tmp11_animateFloat$composable = $composer_0;
      var transitionSpec = tmp9_animateFloat$composable;
      var label = tmp10_animateFloat$composable;
      var $composer_8 = tmp11_animateFloat$composable;
      $composer_8.y1a(1610198356);
      sourceInformation($composer_8, 'C(animateFloat$composable)P(2)938@37489L78:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec = BreathInScreen$composable$lambda_14;
      }
      if (!(2 === 0))
        label = 'FloatAnimation';
      var tmp$ret$38;
      // Inline function 'androidx.compose.animation.core.animateValue$composable' call
      var tmp0_animateValue$composable = get_VectorConverter_0(FloatCompanionObject_getInstance());
      var tmp1_animateValue$composable = transitionSpec;
      var tmp2_animateValue$composable = label;
      var tmp3_animateValue$composable = $composer_8;
      var tmp4_animateValue$composable = 0;
      var transitionSpec_0 = tmp1_animateValue$composable;
      var label_0 = tmp2_animateValue$composable;
      var $composer_9 = tmp3_animateValue$composable;
      $composer_9.y1a(-1940744337);
      sourceInformation($composer_9, 'C(animateValue$composable)P(3,2)856@34079L32,857@34134L31,858@34190L23,860@34226L89:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec_0 = BreathInScreen$composable$lambda_15;
      }
      if (!(0 === 0))
        label_0 = 'ValueAnimation';
      var tmp$ret$36;
      // Inline function 'com.patriker.icebreathing.BreathInScreen$composable.<anonymous>' call
      var tmp12__anonymous__oq5opy = transition.d7a();
      var tmp13__anonymous__jvh1if = $composer_9;
      var tmp14__anonymous__f0seaw = 112 & tmp4_animateValue$composable >> 9;
      var $composer_10 = tmp13__anonymous__jvh1if;
      $composer_10.y1a(-950970671);
      if (isTraceInProgress()) {
        traceEventStart(-950970671, tmp14__anonymous__f0seaw, -1, 'com.patriker.icebreathing.BreathInScreen$composable.<anonymous> (BreatheInScreen.kt:78)');
      }
      var tmp0_subject = tmp12__anonymous__oq5opy;
      var tmp0_6 = tmp0_subject.t5_1;
      var tmp_19;
      switch (tmp0_6) {
        case 0:
          tmp_19 = 0.0;
          break;
        case 1:
          tmp_19 = 1.0;
          break;
        case 2:
          tmp_19 = 0.0;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_7 = tmp_19;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_10.d1b();
      tmp$ret$36 = tmp0_7;
      var initialValue = tmp$ret$36;
      var tmp$ret$37;
      // Inline function 'com.patriker.icebreathing.BreathInScreen$composable.<anonymous>' call
      var tmp15__anonymous__a63r3d = transition.o79();
      var tmp16__anonymous__5bf3vu = $composer_9;
      var tmp17__anonymous__gqgob = 112 & tmp4_animateValue$composable >> 9;
      var $composer_11 = tmp16__anonymous__5bf3vu;
      $composer_11.y1a(-950970671);
      if (isTraceInProgress()) {
        traceEventStart(-950970671, tmp17__anonymous__gqgob, -1, 'com.patriker.icebreathing.BreathInScreen$composable.<anonymous> (BreatheInScreen.kt:78)');
      }
      var tmp0_subject_0 = tmp15__anonymous__a63r3d;
      var tmp0_8 = tmp0_subject_0.t5_1;
      var tmp_20;
      switch (tmp0_8) {
        case 0:
          tmp_20 = 0.0;
          break;
        case 1:
          tmp_20 = 1.0;
          break;
        case 2:
          tmp_20 = 0.0;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_9 = tmp_20;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_11.d1b();
      tmp$ret$37 = tmp0_9;
      var targetValue = tmp$ret$37;
      var animationSpec = transitionSpec_0(transition.k7a(), $composer_9, 112 & tmp4_animateValue$composable >> 3);
      var tmp0_10 = createTransitionAnimation$composable(transition, initialValue, targetValue, animationSpec, tmp0_animateValue$composable, label_0, $composer_9, 14 & tmp4_animateValue$composable | 57344 & tmp4_animateValue$composable << 9 | 458752 & tmp4_animateValue$composable << 6);
      $composer_9.d1b();
      tmp$ret$38 = tmp0_10;
      var tmp0_11 = tmp$ret$38;
      $composer_8.d1b();
      tmp$ret$39 = tmp0_11;
      var transitionMultiplier$delegate = tmp$ret$39;
      var tmp$ret$42;
      // Inline function 'androidx.compose.ui.unit.Dp.times' call
      var tmp$ret$41;
      // Inline function 'androidx.compose.ui.unit.times' call
      var tmp18_times = BreathInScreen$composable$lambda_7(transitionMultiplier$delegate);
      var tmp$ret$40;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$40 = _Dp___init__impl__ms3zkb(progressDia);
      var tmp19_times = tmp$ret$40;
      tmp$ret$41 = _Dp___init__impl__ms3zkb(tmp18_times * _Dp___get_value__impl__geb1vb(tmp19_times));
      var tmp20_times = tmp$ret$41;
      tmp$ret$42 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp20_times) * 0.8);
      var tmp_21 = tmp$ret$42;
      var tmp$ret$45;
      // Inline function 'androidx.compose.ui.unit.Dp.times' call
      var tmp$ret$44;
      // Inline function 'androidx.compose.ui.unit.times' call
      var tmp21_times = BreathInScreen$composable$lambda_7(transitionMultiplier$delegate);
      var tmp$ret$43;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$43 = _Dp___init__impl__ms3zkb(progressDia);
      var tmp22_times = tmp$ret$43;
      tmp$ret$44 = _Dp___init__impl__ms3zkb(tmp21_times * _Dp___get_value__impl__geb1vb(tmp22_times));
      var tmp23_times = tmp$ret$44;
      tmp$ret$45 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp23_times) * 0.8);
      var progSize = DpSize(tmp_21, tmp$ret$45);
      var tmp$ret$48;
      // Inline function 'androidx.compose.ui.unit.Dp.times' call
      var tmp$ret$47;
      // Inline function 'androidx.compose.ui.unit.times' call
      var tmp24_times = BreathInScreen$composable$lambda_7(transitionMultiplier$delegate);
      var tmp$ret$46;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$46 = _Dp___init__impl__ms3zkb(progressDia);
      var tmp25_times = tmp$ret$46;
      tmp$ret$47 = _Dp___init__impl__ms3zkb(tmp24_times * _Dp___get_value__impl__geb1vb(tmp25_times));
      var tmp26_times = tmp$ret$47;
      tmp$ret$48 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp26_times) * 0.74);
      var tmp_22 = tmp$ret$48;
      var tmp$ret$51;
      // Inline function 'androidx.compose.ui.unit.Dp.times' call
      var tmp$ret$50;
      // Inline function 'androidx.compose.ui.unit.times' call
      var tmp27_times = BreathInScreen$composable$lambda_7(transitionMultiplier$delegate);
      var tmp$ret$49;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$49 = _Dp___init__impl__ms3zkb(progressDia);
      var tmp28_times = tmp$ret$49;
      tmp$ret$50 = _Dp___init__impl__ms3zkb(tmp27_times * _Dp___get_value__impl__geb1vb(tmp28_times));
      var tmp29_times = tmp$ret$50;
      tmp$ret$51 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp29_times) * 0.74);
      var lineDiam = DpSize(tmp_22, tmp$ret$51);
      var tmp_23 = Companion_getInstance();
      var tmp$ret$52;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$52 = _Dp___init__impl__ms3zkb(0);
      var tmp_24 = tmp$ret$52;
      var tmp$ret$53;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$53 = _Dp___init__impl__ms3zkb(0);
      var tmp_25 = offset_0(tmp_23, tmp_24, tmp$ret$53);
      var tmp$ret$58;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp30_remember$composable = $composer_0;
      var $composer_12 = tmp30_remember$composable;
      $composer_12.y1a(-1058148781);
      sourceInformation($composer_12, 'C(remember$composable)P(1,2,3):Composables.kt#9igjgp');
      var tmp$ret$57;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_6 = $composer_12;
      var tmp2_cache_1 = !!(!!($composer_12.z1a(new DpSize_0(lineDiam)) | $composer_12.z1a(progressDia)) | $composer_12.z1a(transitionMultiplier$delegate));
      var tmp$ret$56;
      // Inline function 'kotlin.let' call
      var tmp0_let_6 = tmp1_cache_6.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$55;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_26;
      if (tmp2_cache_1 ? true : tmp0_let_6 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$54;
        // Inline function 'com.patriker.icebreathing.BreathInScreen$composable.<anonymous>' call
        tmp$ret$54 = BreathInScreen$composable$lambda_16(lineDiam, progressDia, transitionMultiplier$delegate);
        var value_6 = tmp$ret$54;
        tmp1_cache_6.b1b(value_6);
        tmp_26 = value_6;
      } else {
        tmp_26 = tmp0_let_6;
      }
      tmp$ret$55 = tmp_26;
      tmp$ret$56 = tmp$ret$55;
      var tmp_27 = tmp$ret$56;
      tmp$ret$57 = (tmp_27 == null ? true : isObject(tmp_27)) ? tmp_27 : THROW_CCE();
      var tmp0_12 = tmp$ret$57;
      $composer_12.d1b();
      tmp$ret$58 = tmp0_12;
      Canvas$composable(tmp_25, tmp$ret$58, $composer_0, 6);
      var tmp0_modifier = size(Companion_getInstance(), progSize);
      var tmp$ret$59;
      // Inline function 'kotlin.comparisons.maxOf' call
      var tmp31_maxOf = BreathInScreen$composable$lambda_6(countdownProgress$delegate);
      tmp$ret$59 = Math.max(tmp31_maxOf, 0.0);
      var tmp1_progress = tmp$ret$59;
      var tmp$ret$60;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp32__get_dp__oml94 = progressDia / 15.0 * BreathInScreen$composable$lambda_7(transitionMultiplier$delegate);
      tmp$ret$60 = _Dp___init__impl__ms3zkb(tmp32__get_dp__oml94);
      var tmp2_strokeWidth = tmp$ret$60;
      var tmp_28 = get_mainColorTemp();
      var tmp3_color = Color__copy$default_impl_ectz3s(tmp_28, 0.98, 0.0, 0.0, 0.0, 14, null);
      CircularProgressIndicator$composable(tmp1_progress, tmp0_modifier, tmp3_color, tmp2_strokeWidth, $composer_0, 0, 0);
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp_29 = Companion_getInstance();
      var tmp33_Box$composable = fillMaxSize$default(tmp_29, 0.0, 1, null);
      var tmp34_Box$composable = Companion_getInstance_2().w4d_1;
      var tmp35_Box$composable = false;
      var tmp36_Box$composable = $composer_0;
      var modifier = tmp33_Box$composable;
      var contentAlignment = tmp34_Box$composable;
      var propagateMinConstraints = tmp35_Box$composable;
      var $composer_13 = tmp36_Box$composable;
      $composer_13.y1a(1330882304);
      sourceInformation($composer_13, 'C(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier = Companion_getInstance();
      if (!(0 === 0))
        contentAlignment = Companion_getInstance_2().s4d_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_13, 6);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp0_Layout$composable = modifier;
      var tmp1_Layout$composable = $composer_13;
      var tmp2_Layout$composable = 48;
      var modifier_0 = tmp0_Layout$composable;
      var $composer_14 = tmp1_Layout$composable;
      $composer_14.y1a(1725976829);
      sourceInformation($composer_14, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance();
      var tmp$ret$61;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_14;
      var $composer_15 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_15, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_13 = $composer_15.w1n(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_15);
      tmp$ret$61 = tmp0_13;
      var density = tmp$ret$61;
      var tmp$ret$62;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua = $composer_14;
      var $composer_16 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_16, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_14 = $composer_16.w1n(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_16);
      tmp$ret$62 = tmp0_14;
      var layoutDirection = tmp$ret$62;
      var tmp$ret$63;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro = $composer_14;
      var $composer_17 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_17, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_15 = $composer_17.w1n(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_17);
      tmp$ret$63 = tmp0_15;
      var viewConfiguration = tmp$ret$63;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_1().a5e_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
      var tmp8_ReusableComposeNode$composable = $composer_14;
      var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
      var $composer_18 = tmp8_ReusableComposeNode$composable;
      var tmp_30 = $composer_18.u1m();
      if (!isInterface(tmp_30, Applier)) {
        invalidApplier();
      }
      $composer_18.g1n();
      if ($composer_18.e1n()) {
        $composer_18.h1n(tmp6_ReusableComposeNode$composable);
      } else {
        $composer_18.j1n();
      }
      $composer_18.l1n();
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_18);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_1().e5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_1().d5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_1().f5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_1().g5e_1);
      $composer_18.m1n();
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_18)), $composer_18, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_18.y1a(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp3__anonymous__ufb84q = $composer_18;
      var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_19 = tmp3__anonymous__ufb84q;
      $composer_19.y1a(-2137368960);
      sourceInformation($composer_19, 'C72@3384L9:Box.kt#2w3rfo');
      if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_19.l1m()) {
        // Inline function 'com.patriker.icebreathing.BreathInScreen$composable.<anonymous>' call
        var tmp37__anonymous__g99adz = BoxScopeInstance_getInstance();
        var tmp38__anonymous__l3xxli = $composer_19;
        var tmp39__anonymous__pymkt1 = 6;
        var $composer_20 = tmp38__anonymous__l3xxli;
        var $dirty_0 = tmp39__anonymous__pymkt1;
        if ((tmp39__anonymous__pymkt1 & 14) === 0)
          $dirty_0 = $dirty_0 | ($composer_20.z1a(tmp37__anonymous__g99adz) ? 4 : 2);
        if (!(($dirty_0 & 91) === 18) ? true : !$composer_20.l1m()) {
          // Inline function 'androidx.compose.foundation.layout.Column$composable' call
          var tmp0_Column$composable = null;
          var tmp1_Column$composable = null;
          var tmp2_Column$composable = Companion_getInstance_2().f4e_1;
          var tmp3_Column$composable = $composer_20;
          var modifier_1 = tmp0_Column$composable;
          var verticalArrangement = tmp1_Column$composable;
          var horizontalAlignment = tmp2_Column$composable;
          var $composer_21 = tmp3_Column$composable;
          $composer_21.y1a(860130704);
          sourceInformation($composer_21, 'C(Column$composable)P(2,3,1)77@3913L61,78@3979L133:Column.kt#2w3rfo');
          if (!(1 === 0))
            modifier_1 = Companion_getInstance();
          if (!(2 === 0))
            verticalArrangement = Arrangement_getInstance().h7c_1;
          if (!(0 === 0))
            horizontalAlignment = Companion_getInstance_2().e4e_1;
          var measurePolicy_0 = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_21, 48);
          // Inline function 'androidx.compose.ui.layout.Layout$composable' call
          var tmp0_Layout$composable_0 = modifier_1;
          var tmp1_Layout$composable_0 = $composer_21;
          var tmp2_Layout$composable_0 = 0;
          var modifier_2 = tmp0_Layout$composable_0;
          var $composer_22 = tmp1_Layout$composable_0;
          $composer_22.y1a(1725976829);
          sourceInformation($composer_22, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
          if (!(0 === 0))
            modifier_2 = Companion_getInstance();
          var tmp$ret$64;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp0_$get_current$$composable_h5ksy7_0 = get_LocalDensity();
          var tmp1_$get_current$$composable_gn3xww_0 = $composer_22;
          var $composer_23 = tmp1_$get_current$$composable_gn3xww_0;
          sourceInformationMarkerStart($composer_23, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_16 = $composer_23.w1n(tmp0_$get_current$$composable_h5ksy7_0);
          sourceInformationMarkerEnd($composer_23);
          tmp$ret$64 = tmp0_16;
          var density_0 = tmp$ret$64;
          var tmp$ret$65;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp2_$get_current$$composable_g4n2vl_0 = get_LocalLayoutDirection();
          var tmp3_$get_current$$composable_fm67ua_0 = $composer_22;
          var $composer_24 = tmp3_$get_current$$composable_fm67ua_0;
          sourceInformationMarkerStart($composer_24, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_17 = $composer_24.w1n(tmp2_$get_current$$composable_g4n2vl_0);
          sourceInformationMarkerEnd($composer_24);
          tmp$ret$65 = tmp0_17;
          var layoutDirection_0 = tmp$ret$65;
          var tmp$ret$66;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp4_$get_current$$composable_f3pcsz_0 = get_LocalViewConfiguration();
          var tmp5_$get_current$$composable_el8hro_0 = $composer_22;
          var $composer_25 = tmp5_$get_current$$composable_el8hro_0;
          sourceInformationMarkerStart($composer_25, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_18 = $composer_25.w1n(tmp4_$get_current$$composable_f3pcsz_0);
          sourceInformationMarkerEnd($composer_25);
          tmp$ret$66 = tmp0_18;
          var viewConfiguration_0 = tmp$ret$66;
          // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
          var tmp6_ReusableComposeNode$composable_0 = Companion_getInstance_1().a5e_1;
          var tmp7_ReusableComposeNode$composable_0 = materializerOf(modifier_2);
          var tmp8_ReusableComposeNode$composable_0 = $composer_22;
          var tmp9_ReusableComposeNode$composable_0 = 6 | 7168 & tmp2_Layout$composable_0 << 9;
          var $composer_26 = tmp8_ReusableComposeNode$composable_0;
          var tmp_31 = $composer_26.u1m();
          if (!isInterface(tmp_31, Applier)) {
            invalidApplier();
          }
          $composer_26.g1n();
          if ($composer_26.e1n()) {
            $composer_26.h1n(tmp6_ReusableComposeNode$composable_0);
          } else {
            $composer_26.j1n();
          }
          $composer_26.l1n();
          // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
          var tmp10__anonymous__yfiz50_0 = _Updater___init__impl__rbfxm8($composer_26);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, measurePolicy_0, Companion_getInstance_1().e5e_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, density_0, Companion_getInstance_1().d5e_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, layoutDirection_0, Companion_getInstance_1().f5e_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, viewConfiguration_0, Companion_getInstance_1().g5e_1);
          $composer_26.m1n();
          tmp7_ReusableComposeNode$composable_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_26)), $composer_26, 112 & tmp9_ReusableComposeNode$composable_0 >> 3);
          $composer_26.y1a(2058660585);
          // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
          var tmp3__anonymous__ufb84q_0 = $composer_26;
          var tmp4__anonymous__pkmkx7_0 = 14 & tmp9_ReusableComposeNode$composable_0 >> 9;
          var $composer_27 = tmp3__anonymous__ufb84q_0;
          $composer_27.y1a(-1163856341);
          sourceInformation($composer_27, 'C79@4027L9:Column.kt#2w3rfo');
          if (!((tmp4__anonymous__pkmkx7_0 & 11) === 2) ? true : !$composer_27.l1m()) {
            // Inline function 'com.patriker.icebreathing.BreathInScreen$composable.<anonymous>.<anonymous>' call
            var tmp4__anonymous__pkmkx7_1 = ColumnScopeInstance_getInstance();
            var tmp5__anonymous__kpxxpo = $composer_27;
            var tmp6__anonymous__fv9ai5 = 6;
            var $composer_28 = tmp5__anonymous__kpxxpo;
            if (!((tmp6__anonymous__fv9ai5 & 81) === 16) ? true : !$composer_28.l1m()) {
              if (transition.d7a().equals(HoldState_Stop_getInstance())) {
                $composer_28.y1a(-1286159498);
                var tmp_32 = StrRes_getInstance().v9k_1;
                var tmp_33 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
                var tmp_34 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                var tmp_35 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                var tmp_36 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                var tmp_37 = _TextOverflow___init__impl__obguoe(0);
                var tmp0_fontSize = get_sp_0(BreathInScreen$composable$lambda_7(transitionMultiplier$delegate) * 34);
                var tmp1_color = Companion_getInstance_4().i3a_1;
                Text$composable(tmp_32, null, tmp_33, tmp_34, null, null, null, tmp_35, null, null, tmp_36, tmp_37, false, 0, null, TextStyle_init_$Create$(tmp1_color, tmp0_fontSize, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 262140, null), $composer_28, 0, 0, 32766);
                $composer_28.d1b();
              } else {
                $composer_28.y1a(-1286159230);
                // Inline function 'androidx.compose.foundation.layout.Box$composable' call
                var tmp0_Box$composable = null;
                var tmp1_Box$composable = null;
                var tmp2_Box$composable = false;
                var tmp3_Box$composable = $composer_28;
                var modifier_3 = tmp0_Box$composable;
                var contentAlignment_0 = tmp1_Box$composable;
                var propagateMinConstraints_0 = tmp2_Box$composable;
                var $composer_29 = tmp3_Box$composable;
                $composer_29.y1a(1330882304);
                sourceInformation($composer_29, 'C(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
                if (!(1 === 0))
                  modifier_3 = Companion_getInstance();
                if (!(2 === 0))
                  contentAlignment_0 = Companion_getInstance_2().s4d_1;
                if (!(4 === 0))
                  propagateMinConstraints_0 = false;
                var measurePolicy_1 = rememberBoxMeasurePolicy$composable(contentAlignment_0, propagateMinConstraints_0, $composer_29, 0);
                // Inline function 'androidx.compose.ui.layout.Layout$composable' call
                var tmp0_Layout$composable_1 = modifier_3;
                var tmp1_Layout$composable_1 = $composer_29;
                var tmp2_Layout$composable_1 = 0;
                var modifier_4 = tmp0_Layout$composable_1;
                var $composer_30 = tmp1_Layout$composable_1;
                $composer_30.y1a(1725976829);
                sourceInformation($composer_30, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
                if (!(0 === 0))
                  modifier_4 = Companion_getInstance();
                var tmp$ret$67;
                // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
                var tmp0_$get_current$$composable_h5ksy7_1 = get_LocalDensity();
                var tmp1_$get_current$$composable_gn3xww_1 = $composer_30;
                var $composer_31 = tmp1_$get_current$$composable_gn3xww_1;
                sourceInformationMarkerStart($composer_31, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
                var tmp0_19 = $composer_31.w1n(tmp0_$get_current$$composable_h5ksy7_1);
                sourceInformationMarkerEnd($composer_31);
                tmp$ret$67 = tmp0_19;
                var density_1 = tmp$ret$67;
                var tmp$ret$68;
                // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
                var tmp2_$get_current$$composable_g4n2vl_1 = get_LocalLayoutDirection();
                var tmp3_$get_current$$composable_fm67ua_1 = $composer_30;
                var $composer_32 = tmp3_$get_current$$composable_fm67ua_1;
                sourceInformationMarkerStart($composer_32, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
                var tmp0_20 = $composer_32.w1n(tmp2_$get_current$$composable_g4n2vl_1);
                sourceInformationMarkerEnd($composer_32);
                tmp$ret$68 = tmp0_20;
                var layoutDirection_1 = tmp$ret$68;
                var tmp$ret$69;
                // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
                var tmp4_$get_current$$composable_f3pcsz_1 = get_LocalViewConfiguration();
                var tmp5_$get_current$$composable_el8hro_1 = $composer_30;
                var $composer_33 = tmp5_$get_current$$composable_el8hro_1;
                sourceInformationMarkerStart($composer_33, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
                var tmp0_21 = $composer_33.w1n(tmp4_$get_current$$composable_f3pcsz_1);
                sourceInformationMarkerEnd($composer_33);
                tmp$ret$69 = tmp0_21;
                var viewConfiguration_1 = tmp$ret$69;
                // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
                var tmp6_ReusableComposeNode$composable_1 = Companion_getInstance_1().a5e_1;
                var tmp7_ReusableComposeNode$composable_1 = materializerOf(modifier_4);
                var tmp8_ReusableComposeNode$composable_1 = $composer_30;
                var tmp9_ReusableComposeNode$composable_1 = 6 | 7168 & tmp2_Layout$composable_1 << 9;
                var $composer_34 = tmp8_ReusableComposeNode$composable_1;
                var tmp_38 = $composer_34.u1m();
                if (!isInterface(tmp_38, Applier)) {
                  invalidApplier();
                }
                $composer_34.g1n();
                if ($composer_34.e1n()) {
                  $composer_34.h1n(tmp6_ReusableComposeNode$composable_1);
                } else {
                  $composer_34.j1n();
                }
                $composer_34.l1n();
                // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
                var tmp10__anonymous__yfiz50_1 = _Updater___init__impl__rbfxm8($composer_34);
                Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_1, measurePolicy_1, Companion_getInstance_1().e5e_1);
                Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_1, density_1, Companion_getInstance_1().d5e_1);
                Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_1, layoutDirection_1, Companion_getInstance_1().f5e_1);
                Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_1, viewConfiguration_1, Companion_getInstance_1().g5e_1);
                $composer_34.m1n();
                tmp7_ReusableComposeNode$composable_1(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_34)), $composer_34, 112 & tmp9_ReusableComposeNode$composable_1 >> 3);
                $composer_34.y1a(2058660585);
                // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
                var tmp3__anonymous__ufb84q_1 = $composer_34;
                var tmp4__anonymous__pkmkx7_2 = 14 & tmp9_ReusableComposeNode$composable_1 >> 9;
                var $composer_35 = tmp3__anonymous__ufb84q_1;
                $composer_35.y1a(-2137368960);
                sourceInformation($composer_35, 'C72@3384L9:Box.kt#2w3rfo');
                if (!((tmp4__anonymous__pkmkx7_2 & 11) === 2) ? true : !$composer_35.l1m()) {
                  // Inline function 'com.patriker.icebreathing.BreathInScreen$composable.<anonymous>.<anonymous>.<anonymous>' call
                  var tmp4__anonymous__pkmkx7_3 = BoxScopeInstance_getInstance();
                  var tmp5__anonymous__kpxxpo_0 = $composer_35;
                  var tmp6__anonymous__fv9ai5_0 = 6;
                  var $composer_36 = tmp5__anonymous__kpxxpo_0;
                  if (!((tmp6__anonymous__fv9ai5_0 & 81) === 16) ? true : !$composer_36.l1m()) {
                    if (BreathInScreen$composable$lambda(holdState$delegate).equals(HoldState_Inhale_getInstance())) {
                      $composer_36.y1a(2141984241);
                      // Inline function 'androidx.compose.foundation.layout.Column$composable' call
                      var tmp0_Column$composable_0 = null;
                      var tmp1_Column$composable_0 = null;
                      var tmp2_Column$composable_0 = Companion_getInstance_2().f4e_1;
                      var tmp3_Column$composable_0 = $composer_36;
                      var modifier_5 = tmp0_Column$composable_0;
                      var verticalArrangement_0 = tmp1_Column$composable_0;
                      var horizontalAlignment_0 = tmp2_Column$composable_0;
                      var $composer_37 = tmp3_Column$composable_0;
                      $composer_37.y1a(860130704);
                      sourceInformation($composer_37, 'C(Column$composable)P(2,3,1)77@3913L61,78@3979L133:Column.kt#2w3rfo');
                      if (!(1 === 0))
                        modifier_5 = Companion_getInstance();
                      if (!(2 === 0))
                        verticalArrangement_0 = Arrangement_getInstance().h7c_1;
                      if (!(0 === 0))
                        horizontalAlignment_0 = Companion_getInstance_2().e4e_1;
                      var measurePolicy_2 = columnMeasurePolicy$composable(verticalArrangement_0, horizontalAlignment_0, $composer_37, 48);
                      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
                      var tmp0_Layout$composable_2 = modifier_5;
                      var tmp1_Layout$composable_2 = $composer_37;
                      var tmp2_Layout$composable_2 = 0;
                      var modifier_6 = tmp0_Layout$composable_2;
                      var $composer_38 = tmp1_Layout$composable_2;
                      $composer_38.y1a(1725976829);
                      sourceInformation($composer_38, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
                      if (!(0 === 0))
                        modifier_6 = Companion_getInstance();
                      var tmp$ret$70;
                      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
                      var tmp0_$get_current$$composable_h5ksy7_2 = get_LocalDensity();
                      var tmp1_$get_current$$composable_gn3xww_2 = $composer_38;
                      var $composer_39 = tmp1_$get_current$$composable_gn3xww_2;
                      sourceInformationMarkerStart($composer_39, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
                      var tmp0_22 = $composer_39.w1n(tmp0_$get_current$$composable_h5ksy7_2);
                      sourceInformationMarkerEnd($composer_39);
                      tmp$ret$70 = tmp0_22;
                      var density_2 = tmp$ret$70;
                      var tmp$ret$71;
                      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
                      var tmp2_$get_current$$composable_g4n2vl_2 = get_LocalLayoutDirection();
                      var tmp3_$get_current$$composable_fm67ua_2 = $composer_38;
                      var $composer_40 = tmp3_$get_current$$composable_fm67ua_2;
                      sourceInformationMarkerStart($composer_40, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
                      var tmp0_23 = $composer_40.w1n(tmp2_$get_current$$composable_g4n2vl_2);
                      sourceInformationMarkerEnd($composer_40);
                      tmp$ret$71 = tmp0_23;
                      var layoutDirection_2 = tmp$ret$71;
                      var tmp$ret$72;
                      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
                      var tmp4_$get_current$$composable_f3pcsz_2 = get_LocalViewConfiguration();
                      var tmp5_$get_current$$composable_el8hro_2 = $composer_38;
                      var $composer_41 = tmp5_$get_current$$composable_el8hro_2;
                      sourceInformationMarkerStart($composer_41, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
                      var tmp0_24 = $composer_41.w1n(tmp4_$get_current$$composable_f3pcsz_2);
                      sourceInformationMarkerEnd($composer_41);
                      tmp$ret$72 = tmp0_24;
                      var viewConfiguration_2 = tmp$ret$72;
                      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
                      var tmp6_ReusableComposeNode$composable_2 = Companion_getInstance_1().a5e_1;
                      var tmp7_ReusableComposeNode$composable_2 = materializerOf(modifier_6);
                      var tmp8_ReusableComposeNode$composable_2 = $composer_38;
                      var tmp9_ReusableComposeNode$composable_2 = 6 | 7168 & tmp2_Layout$composable_2 << 9;
                      var $composer_42 = tmp8_ReusableComposeNode$composable_2;
                      var tmp_39 = $composer_42.u1m();
                      if (!isInterface(tmp_39, Applier)) {
                        invalidApplier();
                      }
                      $composer_42.g1n();
                      if ($composer_42.e1n()) {
                        $composer_42.h1n(tmp6_ReusableComposeNode$composable_2);
                      } else {
                        $composer_42.j1n();
                      }
                      $composer_42.l1n();
                      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
                      var tmp10__anonymous__yfiz50_2 = _Updater___init__impl__rbfxm8($composer_42);
                      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_2, measurePolicy_2, Companion_getInstance_1().e5e_1);
                      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_2, density_2, Companion_getInstance_1().d5e_1);
                      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_2, layoutDirection_2, Companion_getInstance_1().f5e_1);
                      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_2, viewConfiguration_2, Companion_getInstance_1().g5e_1);
                      $composer_42.m1n();
                      tmp7_ReusableComposeNode$composable_2(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_42)), $composer_42, 112 & tmp9_ReusableComposeNode$composable_2 >> 3);
                      $composer_42.y1a(2058660585);
                      // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
                      var tmp3__anonymous__ufb84q_2 = $composer_42;
                      var tmp4__anonymous__pkmkx7_4 = 14 & tmp9_ReusableComposeNode$composable_2 >> 9;
                      var $composer_43 = tmp3__anonymous__ufb84q_2;
                      $composer_43.y1a(-1163856341);
                      sourceInformation($composer_43, 'C79@4027L9:Column.kt#2w3rfo');
                      if (!((tmp4__anonymous__pkmkx7_4 & 11) === 2) ? true : !$composer_43.l1m()) {
                        // Inline function 'com.patriker.icebreathing.BreathInScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                        var tmp4__anonymous__pkmkx7_5 = ColumnScopeInstance_getInstance();
                        var tmp5__anonymous__kpxxpo_1 = $composer_43;
                        var tmp6__anonymous__fv9ai5_1 = 6;
                        var $composer_44 = tmp5__anonymous__kpxxpo_1;
                        if (!((tmp6__anonymous__fv9ai5_1 & 81) === 16) ? true : !$composer_44.l1m()) {
                          var tmp_40 = StrRes_getInstance().x9k_1;
                          var tmp_41 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
                          var tmp_42 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                          var tmp_43 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                          var tmp_44 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                          var tmp_45 = _TextOverflow___init__impl__obguoe(0);
                          var tmp0_fontSize_0 = get_sp(28);
                          var tmp_46 = Companion_getInstance_4().i3a_1;
                          var tmp_47 = BreathInScreen$composable$lambda_7(transitionMultiplier$delegate);
                          var tmp1_color_0 = Color__copy$default_impl_ectz3s(tmp_46, tmp_47, 0.0, 0.0, 0.0, 14, null);
                          Text$composable(tmp_40, null, tmp_41, tmp_42, null, null, null, tmp_43, null, null, tmp_44, tmp_45, false, 0, null, TextStyle_init_$Create$(tmp1_color_0, tmp0_fontSize_0, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 262140, null), $composer_44, 0, 0, 32766);
                          var tmp_48 = secondsAsStr(BreathInScreen$composable$lambda_1(time$delegate) - 1 | 0);
                          var tmp_49 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
                          var tmp_50 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                          var tmp_51 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                          var tmp_52 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                          var tmp_53 = _TextOverflow___init__impl__obguoe(0);
                          var tmp2_fontSize = get_sp(32);
                          var tmp_54 = Companion_getInstance_4().i3a_1;
                          var tmp_55 = BreathInScreen$composable$lambda_7(transitionMultiplier$delegate);
                          var tmp3_color_0 = Color__copy$default_impl_ectz3s(tmp_54, tmp_55, 0.0, 0.0, 0.0, 14, null);
                          Text$composable(tmp_48, null, tmp_49, tmp_50, null, null, null, tmp_51, null, null, tmp_52, tmp_53, false, 0, null, TextStyle_init_$Create$(tmp3_color_0, tmp2_fontSize, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 262140, null), $composer_44, 0, 0, 32766);
                          if (BreathInScreen$composable$lambda_4(paused$delegate)) {
                            var tmp_56 = StrRes_getInstance().y9k_1;
                            var tmp_57 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
                            var tmp_58 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                            var tmp_59 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                            var tmp_60 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                            var tmp_61 = _TextOverflow___init__impl__obguoe(0);
                            var tmp4_fontSize = get_sp(32);
                            var tmp5_color = Companion_getInstance_4().i3a_1;
                            Text$composable(tmp_56, null, tmp_57, tmp_58, null, null, null, tmp_59, null, null, tmp_60, tmp_61, false, 0, null, TextStyle_init_$Create$(tmp5_color, tmp4_fontSize, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 262140, null), $composer_44, 0, 0, 32766);
                          }
                        } else {
                          $composer_44.l1h();
                        }
                      } else {
                        $composer_43.l1h();
                      }
                      $composer_43.d1b();
                      $composer_42.d1b();
                      $composer_42.k1n();
                      $composer_38.d1b();
                      $composer_37.d1b();
                      $composer_36.d1b();
                    } else {
                      $composer_36.y1a(2141985366);
                      var tmp_62 = StrRes_getInstance().s9k_1;
                      var tmp_63 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
                      var tmp_64 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                      var tmp_65 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                      var tmp_66 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                      var tmp_67 = _TextOverflow___init__impl__obguoe(0);
                      var tmp0_fontSize_1 = get_sp_0(28 * BreathInScreen$composable$lambda_7(transitionMultiplier$delegate));
                      var tmp_68 = Companion_getInstance_4().i3a_1;
                      var tmp$ret$73;
                      // Inline function 'kotlin.comparisons.minOf' call
                      var tmp7_minOf = BreathInScreen$composable$lambda_7(transitionMultiplier$delegate) + 0.5;
                      tmp$ret$73 = Math.min(1.0, tmp7_minOf);
                      var tmp_69 = tmp$ret$73;
                      var tmp1_color_1 = Color__copy$default_impl_ectz3s(tmp_68, tmp_69, 0.0, 0.0, 0.0, 14, null);
                      Text$composable(tmp_62, null, tmp_63, tmp_64, null, null, null, tmp_65, null, null, tmp_66, tmp_67, false, 0, null, TextStyle_init_$Create$(tmp1_color_1, tmp0_fontSize_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 262140, null), $composer_36, 0, 0, 32766);
                      $composer_36.d1b();
                    }
                  } else {
                    $composer_36.l1h();
                  }
                } else {
                  $composer_35.l1h();
                }
                $composer_35.d1b();
                $composer_34.d1b();
                $composer_34.k1n();
                $composer_30.d1b();
                $composer_29.d1b();
                $composer_28.d1b();
              }
            } else {
              $composer_28.l1h();
            }
          } else {
            $composer_27.l1h();
          }
          $composer_27.d1b();
          $composer_26.d1b();
          $composer_26.k1n();
          $composer_22.d1b();
          $composer_21.d1b();
          var tmp$ret$78;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp7_remember$composable_0 = clickedBack_0._v;
          var tmp8_remember$composable_0 = $composer_20;
          var tmp9_remember$composable = 14 & $dirty >> 9;
          var $composer_45 = tmp8_remember$composable_0;
          $composer_45.y1a(-838505973);
          sourceInformation($composer_45, 'C(remember$composable)P(1):Composables.kt#9igjgp');
          var tmp$ret$77;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache_7 = $composer_45;
          var tmp2_cache_2 = $composer_45.z1a(tmp7_remember$composable_0);
          var tmp$ret$76;
          // Inline function 'kotlin.let' call
          var tmp0_let_7 = tmp1_cache_7.a1b();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$75;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_70;
          if (tmp2_cache_2 ? true : tmp0_let_7 === Companion_getInstance_0().c1b_1) {
            var tmp$ret$74;
            // Inline function 'com.patriker.icebreathing.BreathInScreen$composable.<anonymous>.<anonymous>' call
            tmp$ret$74 = BreathInScreen$composable$lambda_17(clickedBack_0);
            var value_7 = tmp$ret$74;
            tmp1_cache_7.b1b(value_7);
            tmp_70 = value_7;
          } else {
            tmp_70 = tmp0_let_7;
          }
          tmp$ret$75 = tmp_70;
          tmp$ret$76 = tmp$ret$75;
          var tmp_71 = tmp$ret$76;
          tmp$ret$77 = (tmp_71 == null ? true : isObject(tmp_71)) ? tmp_71 : THROW_CCE();
          var tmp0_25 = tmp$ret$77;
          $composer_45.d1b();
          tmp$ret$78 = tmp0_25;
          var tmp_72 = tmp$ret$78;
          var tmp_73 = tmp37__anonymous__g99adz.c7d(Companion_getInstance(), Companion_getInstance_2().y4d_1);
          var tmp$ret$79;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$79 = _Dp___init__impl__ms3zkb(8);
          var tmp_74 = padding_0(tmp_73, tmp$ret$79);
          var tmp$ret$80;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$80 = _Dp___init__impl__ms3zkb(32);
          BackButton$composable(tmp_72, tmp_74, tmp$ret$80, $composer_20, 384);
          var tmp_75 = tmp37__anonymous__g99adz.c7d(Companion_getInstance(), Companion_getInstance_2().z4d_1);
          var tmp$ret$81;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$81 = _Dp___init__impl__ms3zkb(8);
          var pauseAlign = padding_0(tmp_75, tmp$ret$81);
          if (BreathInScreen$composable$lambda_4(paused$delegate)) {
            $composer_20.y1a(1331794499);
            var tmp$ret$86;
            // Inline function 'androidx.compose.runtime.remember$composable' call
            var tmp10_remember$composable = $composer_20;
            var $composer_46 = tmp10_remember$composable;
            $composer_46.y1a(547886695);
            sourceInformation($composer_46, 'C(remember$composable):Composables.kt#9igjgp');
            var tmp$ret$85;
            // Inline function 'androidx.compose.runtime.cache' call
            var tmp1_cache_8 = $composer_46;
            var tmp$ret$84;
            // Inline function 'kotlin.let' call
            var tmp0_let_8 = tmp1_cache_8.a1b();
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$83;
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var tmp_76;
            if (false ? true : tmp0_let_8 === Companion_getInstance_0().c1b_1) {
              var tmp$ret$82;
              // Inline function 'com.patriker.icebreathing.BreathInScreen$composable.<anonymous>.<anonymous>' call
              tmp$ret$82 = BreathInScreen$composable$togglePause$ref(paused$delegate);
              var value_8 = tmp$ret$82;
              tmp1_cache_8.b1b(value_8);
              tmp_76 = value_8;
            } else {
              tmp_76 = tmp0_let_8;
            }
            tmp$ret$83 = tmp_76;
            tmp$ret$84 = tmp$ret$83;
            var tmp_77 = tmp$ret$84;
            tmp$ret$85 = (tmp_77 == null ? true : isObject(tmp_77)) ? tmp_77 : THROW_CCE();
            var tmp0_26 = tmp$ret$85;
            $composer_46.d1b();
            tmp$ret$86 = tmp0_26;
            var tmp_78 = tmp$ret$86;
            var tmp$ret$87;
            // Inline function 'androidx.compose.ui.unit.dp' call
            tmp$ret$87 = _Dp___init__impl__ms3zkb(36);
            ContButton$composable(tmp_78, pauseAlign, tmp$ret$87, $composer_20, 384);
            $composer_20.d1b();
          } else {
            $composer_20.y1a(1331794573);
            var tmp$ret$92;
            // Inline function 'androidx.compose.runtime.remember$composable' call
            var tmp11_remember$composable = $composer_20;
            var $composer_47 = tmp11_remember$composable;
            $composer_47.y1a(547886695);
            sourceInformation($composer_47, 'C(remember$composable):Composables.kt#9igjgp');
            var tmp$ret$91;
            // Inline function 'androidx.compose.runtime.cache' call
            var tmp1_cache_9 = $composer_47;
            var tmp$ret$90;
            // Inline function 'kotlin.let' call
            var tmp0_let_9 = tmp1_cache_9.a1b();
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$89;
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var tmp_79;
            if (false ? true : tmp0_let_9 === Companion_getInstance_0().c1b_1) {
              var tmp$ret$88;
              // Inline function 'com.patriker.icebreathing.BreathInScreen$composable.<anonymous>.<anonymous>' call
              tmp$ret$88 = BreathInScreen$composable$togglePause$ref_0(paused$delegate);
              var value_9 = tmp$ret$88;
              tmp1_cache_9.b1b(value_9);
              tmp_79 = value_9;
            } else {
              tmp_79 = tmp0_let_9;
            }
            tmp$ret$89 = tmp_79;
            tmp$ret$90 = tmp$ret$89;
            var tmp_80 = tmp$ret$90;
            tmp$ret$91 = (tmp_80 == null ? true : isObject(tmp_80)) ? tmp_80 : THROW_CCE();
            var tmp0_27 = tmp$ret$91;
            $composer_47.d1b();
            tmp$ret$92 = tmp0_27;
            var tmp_81 = tmp$ret$92;
            var tmp$ret$93;
            // Inline function 'androidx.compose.ui.unit.dp' call
            tmp$ret$93 = _Dp___init__impl__ms3zkb(36);
            PauseButton$composable(tmp_81, pauseAlign, tmp$ret$93, $composer_20, 384);
            $composer_20.d1b();
          }
          var tmp$ret$98;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp12_remember$composable = $composer_20;
          var tmp13_remember$composable = 112 & $dirty >> 3;
          var $composer_48 = tmp12_remember$composable;
          $composer_48.y1a(-1124426577);
          sourceInformation($composer_48, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
          var tmp$ret$97;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache_10 = $composer_48;
          var tmp2_cache_3 = !!($composer_48.z1a(time$delegate) | $composer_48.z1a(finishedHold));
          var tmp$ret$96;
          // Inline function 'kotlin.let' call
          var tmp0_let_10 = tmp1_cache_10.a1b();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$95;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_82;
          if (tmp2_cache_3 ? true : tmp0_let_10 === Companion_getInstance_0().c1b_1) {
            var tmp$ret$94;
            // Inline function 'com.patriker.icebreathing.BreathInScreen$composable.<anonymous>.<anonymous>' call
            tmp$ret$94 = BreathInScreen$composable$lambda_18(finishedHold, time$delegate);
            var value_10 = tmp$ret$94;
            tmp1_cache_10.b1b(value_10);
            tmp_82 = value_10;
          } else {
            tmp_82 = tmp0_let_10;
          }
          tmp$ret$95 = tmp_82;
          tmp$ret$96 = tmp$ret$95;
          var tmp_83 = tmp$ret$96;
          tmp$ret$97 = (tmp_83 == null ? true : isObject(tmp_83)) ? tmp_83 : THROW_CCE();
          var tmp0_28 = tmp$ret$97;
          $composer_48.d1b();
          tmp$ret$98 = tmp0_28;
          var tmp_84 = tmp$ret$98;
          var tmp_85 = tmp37__anonymous__g99adz.c7d(Companion_getInstance(), Companion_getInstance_2().a4e_1);
          var tmp$ret$99;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$99 = _Dp___init__impl__ms3zkb(8);
          var tmp_86 = padding_0(tmp_85, tmp$ret$99);
          var tmp$ret$100;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$100 = _Dp___init__impl__ms3zkb(32);
          FinishBreatheButton$composable(tmp_84, tmp_86, tmp$ret$100, $composer_20, 384);
        } else {
          $composer_20.l1h();
        }
      } else {
        $composer_19.l1h();
      }
      $composer_19.d1b();
      $composer_18.d1b();
      $composer_18.k1n();
      $composer_14.d1b();
      $composer_13.d1b();
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
      tmp0_safe_receiver.g1p(BreathInScreen$composable$lambda$ref(screenSize, timeLeft_0, finishedHold, clickedBack_0, $changed, $default));
    }
  }
  function BreathInScreen$composable$lambda($holdState$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('holdState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $holdState$delegate.i2();
    return tmp$ret$0;
  }
  function BreathInScreen$composable$lambda_0($holdState$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('holdState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $holdState$delegate.p11(value);
  }
  function BreathInScreen$composable$lambda_1($time$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('time', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $time$delegate.i2();
    return tmp$ret$0;
  }
  function BreathInScreen$composable$lambda_2($time$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('time', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $time$delegate.p11(value);
  }
  function BreathInScreen$composable$lambda_3($timeProgress$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('timeProgress', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $timeProgress$delegate.i2();
    return tmp$ret$0;
  }
  function BreathInScreen$composable$lambda_4($paused$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('paused', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $paused$delegate.i2();
    return tmp$ret$0;
  }
  function BreathInScreen$composable$lambda_5($paused$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('paused', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $paused$delegate.p11(value);
  }
  function BreathInScreen$composable$togglePause(paused$delegate) {
    BreathInScreen$composable$lambda_5(paused$delegate, !BreathInScreen$composable$lambda_4(paused$delegate));
  }
  function BreathInScreen$composable$clickedFinish($finishedHold, time$delegate) {
    BreathInScreen$composable$lambda_2(time$delegate, 0);
    $finishedHold(SessionState_BreatheInHold_getInstance());
  }
  function BreathInScreen$composable$lambda_6($countdownProgress$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('countdownProgress', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $countdownProgress$delegate.i2();
    return tmp$ret$0;
  }
  function BreathInScreen$composable$lambda_7($transitionMultiplier$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('transitionMultiplier', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $transitionMultiplier$delegate.i2();
    return tmp$ret$0;
  }
  function BreathInScreen$composable$lambda_8($screenSize, $timeLeft, $finishedHold, $clickedBack, $$changed, $$default, $composer, $force) {
    return BreathInScreen$composable($screenSize, $timeLeft._v, $finishedHold, $clickedBack._v, $composer, $$changed | 1, $$default);
  }
  function BreathInScreen$composable$lambda_9() {
    return Unit_getInstance();
  }
  function BreathInScreen$composable$lambda_10() {
    var tmp = HoldState_Stop_getInstance();
    return mutableStateOf$default(tmp, null, 2, null);
  }
  function BreathInScreen$composable$lambda_11($holdTime, $time$delegate) {
    return function () {
      return (BreathInScreen$composable$lambda_1($time$delegate) - 1 | 0) / $holdTime;
    };
  }
  function BreathInScreen$composable$lambda_12() {
    return mutableStateOf$default(false, null, 2, null);
  }
  function BreathInScreen$composable$slambda($holdState$delegate, $time$delegate, resultContinuation) {
    this.i9m_1 = $holdState$delegate;
    this.j9m_1 = $time$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  BreathInScreen$composable$slambda.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  BreathInScreen$composable$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  BreathInScreen$composable$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            BreathInScreen$composable$lambda_0(this.i9m_1, HoldState_Inhale_getInstance());
            this.zf_1 = 1;
            suspendResult = delay(new Long(2000, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0 = BreathInScreen$composable$lambda_1(this.j9m_1);
            BreathInScreen$composable$lambda_2(this.j9m_1, tmp0 - 1 | 0);
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
  BreathInScreen$composable$slambda.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new BreathInScreen$composable$slambda(this.i9m_1, this.j9m_1, completion);
    i.k9m_1 = $this$LaunchedEffect;
    return i;
  };
  BreathInScreen$composable$slambda.$metadata$ = classMeta('BreathInScreen$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function BreathInScreen$composable$slambda_0($holdState$delegate, $time$delegate, resultContinuation) {
    var i = new BreathInScreen$composable$slambda($holdState$delegate, $time$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function BreathInScreen$composable$slambda_1($finishedHold, $time$delegate, $holdState$delegate, $paused$delegate, resultContinuation) {
    this.t9m_1 = $finishedHold;
    this.u9m_1 = $time$delegate;
    this.v9m_1 = $holdState$delegate;
    this.w9m_1 = $paused$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  BreathInScreen$composable$slambda_1.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  BreathInScreen$composable$slambda_1.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  BreathInScreen$composable$slambda_1.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 4;
            this.zf_1 = 1;
            suspendResult = delay(new Long(1000, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (BreathInScreen$composable$lambda_1(this.u9m_1) <= 2) {
              BreathInScreen$composable$lambda_0(this.v9m_1, HoldState_Exhale_getInstance());
            }

            if (BreathInScreen$composable$lambda_1(this.u9m_1) > 0 ? !BreathInScreen$composable$lambda_4(this.w9m_1) : false) {
              var tmp0 = BreathInScreen$composable$lambda_1(this.u9m_1);
              BreathInScreen$composable$lambda_2(this.u9m_1, tmp0 - 1 | 0);
            }

            if (BreathInScreen$composable$lambda_1(this.u9m_1) <= 0) {
              this.zf_1 = 2;
              suspendResult = delay(new Long(1000, 0), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zf_1 = 3;
              continue $sm;
            }

            break;
          case 2:
            this.t9m_1(SessionState_BreatheInHold_getInstance());
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
  BreathInScreen$composable$slambda_1.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new BreathInScreen$composable$slambda_1(this.t9m_1, this.u9m_1, this.v9m_1, this.w9m_1, completion);
    i.x9m_1 = $this$LaunchedEffect;
    return i;
  };
  BreathInScreen$composable$slambda_1.$metadata$ = classMeta('BreathInScreen$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function BreathInScreen$composable$slambda_2($finishedHold, $time$delegate, $holdState$delegate, $paused$delegate, resultContinuation) {
    var i = new BreathInScreen$composable$slambda_1($finishedHold, $time$delegate, $holdState$delegate, $paused$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function BreathInScreen$composable$lambda_13($holdState$delegate) {
    return function ($this$animateFloat, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.y1a(-882127422);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-882127422, $changed, -1, 'com.patriker.icebreathing.BreathInScreen$composable.<anonymous> (BreatheInScreen.kt:78)');
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (BreathInScreen$composable$lambda($holdState$delegate).equals(HoldState_Exhale_getInstance())) {
        tmp_0 = tween$default(3000, 0, null, 6, null);
      } else {
        tmp_0 = tween$default(2000, 0, null, 6, null);
      }
      var tmp0 = tmp_0;
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      $composer_0.d1b();
      return tmp0;
    };
  }
  function BreathInScreen$composable$lambda_14($this$null, $composer, $changed) {
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
  function BreathInScreen$composable$lambda_15($this$null, $composer, $changed) {
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
  function BreathInScreen$composable$lambda_16($lineDiam, $progressDia, $transitionMultiplier$delegate) {
    return function ($this$Canvas) {
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf = $this$Canvas.o2k(_DpSize___get_height__impl__5xueo2($lineDiam));
      var tmp1_minOf = $this$Canvas.o2k(_DpSize___get_width__impl__o3d5gt($lineDiam));
      tmp$ret$0 = Math.min(tmp0_minOf, tmp1_minOf);
      var tmp0_radius = tmp$ret$0 / 2.0;
      var tmp = Companion_getInstance_4().i3a_1;
      var tmp1_color = Color__copy$default_impl_ectz3s(tmp, 0.9, 0.0, 0.0, 0.0, 14, null);
      var tmp_0 = $progressDia / 20.0 * BreathInScreen$composable$lambda_7($transitionMultiplier$delegate);
      var tmp2_style = Stroke_init_$Create$(tmp_0, 0.0, null, null, null, 30, null);
      $this$Canvas.i3l(tmp1_color, tmp0_radius, null, 0.0, tmp2_style, null, null, 108, null);
      return Unit_getInstance();
    };
  }
  function BreathInScreen$composable$lambda_17($clickedBack) {
    return function () {
      $clickedBack._v();
      return Unit_getInstance();
    };
  }
  function BreathInScreen$composable$togglePause$ref($paused$delegate) {
    var l = function () {
      BreathInScreen$composable$togglePause($paused$delegate);
      return Unit_getInstance();
    };
    l.callableName = 'togglePause';
    return l;
  }
  function BreathInScreen$composable$togglePause$ref_0($paused$delegate) {
    var l = function () {
      BreathInScreen$composable$togglePause($paused$delegate);
      return Unit_getInstance();
    };
    l.callableName = 'togglePause';
    return l;
  }
  function BreathInScreen$composable$lambda_18($finishedHold, $time$delegate) {
    return function () {
      BreathInScreen$composable$clickedFinish($finishedHold, $time$delegate);
      return Unit_getInstance();
    };
  }
  function BreathInScreen$composable$lambda$ref($screenSize, $timeLeft, $finishedHold, $clickedBack, $$changed, $$default) {
    return function (p0, p1) {
      BreathInScreen$composable$lambda_8($screenSize, $timeLeft, $finishedHold, $clickedBack, $$changed, $$default, p0, p1);
      return Unit_getInstance();
    };
  }
  function HoldState_Stop_getInstance() {
    HoldState_initEntries();
    return HoldState_Stop_instance;
  }
  function HoldState_Inhale_getInstance() {
    HoldState_initEntries();
    return HoldState_Inhale_instance;
  }
  function HoldState_Exhale_getInstance() {
    HoldState_initEntries();
    return HoldState_Exhale_instance;
  }
  function get_ANIM_MS() {
    return ANIM_MS;
  }
  var ANIM_MS;
  var SessionState_Prepare_instance;
  var SessionState_Breathe_instance;
  var SessionState_BreatheHold_instance;
  var SessionState_BreatheInHold_instance;
  var SessionState_Done_instance;
  var SessionState_entriesInitialized;
  function SessionState_initEntries() {
    if (SessionState_entriesInitialized)
      return Unit_getInstance();
    SessionState_entriesInitialized = true;
    SessionState_Prepare_instance = new SessionState('Prepare', 0);
    SessionState_Breathe_instance = new SessionState('Breathe', 1);
    SessionState_BreatheHold_instance = new SessionState('BreatheHold', 2);
    SessionState_BreatheInHold_instance = new SessionState('BreatheInHold', 3);
    SessionState_Done_instance = new SessionState('Done', 4);
  }
  function SessionState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  SessionState.$metadata$ = classMeta('SessionState', undefined, undefined, undefined, undefined, Enum.prototype);
  function BreatheScreen$composable(thisSession, clickedBack, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(-1115879880);
    sourceInformation($composer_0, 'C(BreatheScreen$composable)P(1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(thisSession) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(clickedBack) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(-1115879880, $dirty, -1, 'com.patriker.icebreathing.BreatheScreen$composable (BreatheScreen.kt:24)');
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
        // Inline function 'com.patriker.icebreathing.BreatheScreen$composable.<anonymous>' call
        tmp$ret$0 = BreatheScreen$composable$lambda_15;
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
      var roundNum$delegate = rememberSaveable$composable([], null, null, tmp$ret$4, $composer_0, 8, 6);
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp1_remember$composable = $composer_0;
      var tmp2_remember$composable = 14 & $dirty;
      var $composer_2 = tmp1_remember$composable;
      $composer_2.y1a(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = $composer_2.z1a(thisSession);
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$5;
        // Inline function 'com.patriker.icebreathing.BreatheScreen$composable.<anonymous>' call
        tmp$ret$5 = BreatheScreen$composable$lambda_16(thisSession);
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
      var roundGoal$delegate = rememberSaveable$composable([], null, null, tmp$ret$9, $composer_0, 8, 6);
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var tmp4_remember$composable = 14 & $dirty;
      var $composer_3 = tmp3_remember$composable;
      $composer_3.y1a(-838505973);
      sourceInformation($composer_3, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = $composer_3;
      var tmp2_cache_0 = $composer_3.z1a(thisSession);
      var tmp$ret$12;
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = tmp1_cache_1.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp2_cache_0 ? true : tmp0_let_1 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$10;
        // Inline function 'com.patriker.icebreathing.BreatheScreen$composable.<anonymous>' call
        tmp$ret$10 = BreatheScreen$composable$lambda_17(thisSession);
        var value_1 = tmp$ret$10;
        tmp1_cache_1.b1b(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = tmp0_let_1;
      }
      tmp$ret$11 = tmp_3;
      tmp$ret$12 = tmp$ret$11;
      var tmp_4 = tmp$ret$12;
      tmp$ret$13 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      var tmp0_1 = tmp$ret$13;
      $composer_3.d1b();
      tmp$ret$14 = tmp0_1;
      var breathGoal$delegate = rememberSaveable$composable([], null, null, tmp$ret$14, $composer_0, 8, 6);
      var tmp$ret$19;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp5_remember$composable = $composer_0;
      var $composer_4 = tmp5_remember$composable;
      $composer_4.y1a(547886695);
      sourceInformation($composer_4, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$18;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_2 = $composer_4;
      var tmp$ret$17;
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = tmp1_cache_2.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (false ? true : tmp0_let_2 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$15;
        // Inline function 'com.patriker.icebreathing.BreatheScreen$composable.<anonymous>' call
        tmp$ret$15 = BreatheScreen$composable$lambda_18;
        var value_2 = tmp$ret$15;
        tmp1_cache_2.b1b(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = tmp0_let_2;
      }
      tmp$ret$16 = tmp_5;
      tmp$ret$17 = tmp$ret$16;
      var tmp_6 = tmp$ret$17;
      tmp$ret$18 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      var tmp0_2 = tmp$ret$18;
      $composer_4.d1b();
      tmp$ret$19 = tmp0_2;
      var breathPaused$delegate = rememberSaveable$composable([], null, null, tmp$ret$19, $composer_0, 8, 6);
      var tmp$ret$24;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp6_remember$composable = $composer_0;
      var $composer_5 = tmp6_remember$composable;
      $composer_5.y1a(547886695);
      sourceInformation($composer_5, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$23;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_3 = $composer_5;
      var tmp$ret$22;
      // Inline function 'kotlin.let' call
      var tmp0_let_3 = tmp1_cache_3.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$21;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_7;
      if (false ? true : tmp0_let_3 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$20;
        // Inline function 'com.patriker.icebreathing.BreatheScreen$composable.<anonymous>' call
        tmp$ret$20 = mutableStateOf$default(false, null, 2, null);
        var value_3 = tmp$ret$20;
        tmp1_cache_3.b1b(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = tmp0_let_3;
      }
      tmp$ret$21 = tmp_7;
      tmp$ret$22 = tmp$ret$21;
      var tmp_8 = tmp$ret$22;
      tmp$ret$23 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
      var tmp0_3 = tmp$ret$23;
      $composer_5.d1b();
      tmp$ret$24 = tmp0_3;
      var finishClicked$delegate = tmp$ret$24;
      var tmp$ret$29;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp7_remember$composable = $composer_0;
      var $composer_6 = tmp7_remember$composable;
      $composer_6.y1a(547886695);
      sourceInformation($composer_6, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$28;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_4 = $composer_6;
      var tmp$ret$27;
      // Inline function 'kotlin.let' call
      var tmp0_let_4 = tmp1_cache_4.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$26;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_9;
      if (false ? true : tmp0_let_4 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$25;
        // Inline function 'com.patriker.icebreathing.BreatheScreen$composable.<anonymous>' call
        tmp$ret$25 = BreatheScreen$composable$lambda_19;
        var value_4 = tmp$ret$25;
        tmp1_cache_4.b1b(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = tmp0_let_4;
      }
      tmp$ret$26 = tmp_9;
      tmp$ret$27 = tmp$ret$26;
      var tmp_10 = tmp$ret$27;
      tmp$ret$28 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
      var tmp0_4 = tmp$ret$28;
      $composer_6.d1b();
      tmp$ret$29 = tmp0_4;
      var numBreaths$delegate = rememberSaveable$composable([], null, null, tmp$ret$29, $composer_0, 8, 6);
      var tmp$ret$34;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp8_remember$composable = $composer_0;
      var $composer_7 = tmp8_remember$composable;
      $composer_7.y1a(547886695);
      sourceInformation($composer_7, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$33;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_5 = $composer_7;
      var tmp$ret$32;
      // Inline function 'kotlin.let' call
      var tmp0_let_5 = tmp1_cache_5.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$31;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_11;
      if (false ? true : tmp0_let_5 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$30;
        // Inline function 'com.patriker.icebreathing.BreatheScreen$composable.<anonymous>' call
        tmp$ret$30 = BreatheScreen$composable$lambda_20;
        var value_5 = tmp$ret$30;
        tmp1_cache_5.b1b(value_5);
        tmp_11 = value_5;
      } else {
        tmp_11 = tmp0_let_5;
      }
      tmp$ret$31 = tmp_11;
      tmp$ret$32 = tmp$ret$31;
      var tmp_12 = tmp$ret$32;
      tmp$ret$33 = (tmp_12 == null ? true : isObject(tmp_12)) ? tmp_12 : THROW_CCE();
      var tmp0_5 = tmp$ret$33;
      $composer_7.d1b();
      tmp$ret$34 = tmp0_5;
      var sessState$delegate = rememberSaveable$composable([], null, null, tmp$ret$34, $composer_0, 8, 6);
      var tmp$ret$39;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp9_remember$composable = $composer_0;
      var $composer_8 = tmp9_remember$composable;
      $composer_8.y1a(547886695);
      sourceInformation($composer_8, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$38;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_6 = $composer_8;
      var tmp$ret$37;
      // Inline function 'kotlin.let' call
      var tmp0_let_6 = tmp1_cache_6.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$36;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_13;
      if (false ? true : tmp0_let_6 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$35;
        // Inline function 'com.patriker.icebreathing.BreatheScreen$composable.<anonymous>' call
        tmp$ret$35 = mutableStateOf$default(false, null, 2, null);
        var value_6 = tmp$ret$35;
        tmp1_cache_6.b1b(value_6);
        tmp_13 = value_6;
      } else {
        tmp_13 = tmp0_let_6;
      }
      tmp$ret$36 = tmp_13;
      tmp$ret$37 = tmp$ret$36;
      var tmp_14 = tmp$ret$37;
      tmp$ret$38 = (tmp_14 == null ? true : isObject(tmp_14)) ? tmp_14 : THROW_CCE();
      var tmp0_6 = tmp$ret$38;
      $composer_8.d1b();
      tmp$ret$39 = tmp0_6;
      var speedDropDown$delegate = tmp$ret$39;
      var tmp$ret$44;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp10_remember$composable = $composer_0;
      var $composer_9 = tmp10_remember$composable;
      $composer_9.y1a(547886695);
      sourceInformation($composer_9, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$43;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_7 = $composer_9;
      var tmp$ret$42;
      // Inline function 'kotlin.let' call
      var tmp0_let_7 = tmp1_cache_7.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$41;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_15;
      if (false ? true : tmp0_let_7 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$40;
        // Inline function 'com.patriker.icebreathing.BreatheScreen$composable.<anonymous>' call
        tmp$ret$40 = BreatheScreen$composable$lambda_21;
        var value_7 = tmp$ret$40;
        tmp1_cache_7.b1b(value_7);
        tmp_15 = value_7;
      } else {
        tmp_15 = tmp0_let_7;
      }
      tmp$ret$41 = tmp_15;
      tmp$ret$42 = tmp$ret$41;
      var tmp_16 = tmp$ret$42;
      tmp$ret$43 = (tmp_16 == null ? true : isObject(tmp_16)) ? tmp_16 : THROW_CCE();
      var tmp0_7 = tmp$ret$43;
      $composer_9.d1b();
      tmp$ret$44 = tmp0_7;
      var breathRate$delegate = rememberSaveable$composable([], null, null, tmp$ret$44, $composer_0, 8, 6);
      var tmp$ret$49;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp11_remember$composable = $composer_0;
      var $composer_10 = tmp11_remember$composable;
      $composer_10.y1a(547886695);
      sourceInformation($composer_10, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$48;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_8 = $composer_10;
      var tmp$ret$47;
      // Inline function 'kotlin.let' call
      var tmp0_let_8 = tmp1_cache_8.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$46;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_17;
      if (false ? true : tmp0_let_8 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$45;
        // Inline function 'com.patriker.icebreathing.BreatheScreen$composable.<anonymous>' call
        tmp$ret$45 = derivedStateOf(BreatheScreen$composable$lambda_22(breathRate$delegate));
        var value_8 = tmp$ret$45;
        tmp1_cache_8.b1b(value_8);
        tmp_17 = value_8;
      } else {
        tmp_17 = tmp0_let_8;
      }
      tmp$ret$46 = tmp_17;
      tmp$ret$47 = tmp$ret$46;
      var tmp_18 = tmp$ret$47;
      tmp$ret$48 = (tmp_18 == null ? true : isObject(tmp_18)) ? tmp_18 : THROW_CCE();
      var tmp0_8 = tmp$ret$48;
      $composer_10.d1b();
      tmp$ret$49 = tmp0_8;
      var animationSpeed$delegate = tmp$ret$49;
      var tmp$ret$54;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp12_remember$composable = $composer_0;
      var $composer_11 = tmp12_remember$composable;
      $composer_11.y1a(547886695);
      sourceInformation($composer_11, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$53;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_9 = $composer_11;
      var tmp$ret$52;
      // Inline function 'kotlin.let' call
      var tmp0_let_9 = tmp1_cache_9.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$51;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_19;
      if (false ? true : tmp0_let_9 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$50;
        // Inline function 'com.patriker.icebreathing.BreatheScreen$composable.<anonymous>' call
        var tmp_20 = str(BreatheScreen$composable$lambda_11(breathRate$delegate));
        tmp$ret$50 = mutableStateOf$default(tmp_20, null, 2, null);
        var value_9 = tmp$ret$50;
        tmp1_cache_9.b1b(value_9);
        tmp_19 = value_9;
      } else {
        tmp_19 = tmp0_let_9;
      }
      tmp$ret$51 = tmp_19;
      tmp$ret$52 = tmp$ret$51;
      var tmp_21 = tmp$ret$52;
      tmp$ret$53 = (tmp_21 == null ? true : isObject(tmp_21)) ? tmp_21 : THROW_CCE();
      var tmp0_9 = tmp$ret$53;
      $composer_11.d1b();
      tmp$ret$54 = tmp0_9;
      var speedText$delegate = tmp$ret$54;
      var tmp$ret$59;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp13_remember$composable = $composer_0;
      var $composer_12 = tmp13_remember$composable;
      $composer_12.y1a(547886695);
      sourceInformation($composer_12, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$58;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_10 = $composer_12;
      var tmp$ret$57;
      // Inline function 'kotlin.let' call
      var tmp0_let_10 = tmp1_cache_10.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$56;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_22;
      if (false ? true : tmp0_let_10 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$55;
        // Inline function 'com.patriker.icebreathing.BreatheScreen$composable.<anonymous>' call
        var tmp_23 = new IntSize(IntSize_0(600, 800));
        tmp$ret$55 = mutableStateOf$default(tmp_23, null, 2, null);
        var value_10 = tmp$ret$55;
        tmp1_cache_10.b1b(value_10);
        tmp_22 = value_10;
      } else {
        tmp_22 = tmp0_let_10;
      }
      tmp$ret$56 = tmp_22;
      tmp$ret$57 = tmp$ret$56;
      var tmp_24 = tmp$ret$57;
      tmp$ret$58 = (tmp_24 == null ? true : isObject(tmp_24)) ? tmp_24 : THROW_CCE();
      var tmp0_10 = tmp$ret$58;
      $composer_12.d1b();
      tmp$ret$59 = tmp0_10;
      var screenSize$delegate = tmp$ret$59;
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp14_Box$composable = null;
      var tmp15_Box$composable = Companion_getInstance_2().w4d_1;
      var tmp16_Box$composable = false;
      var tmp17_Box$composable = $composer_0;
      var modifier = tmp14_Box$composable;
      var contentAlignment = tmp15_Box$composable;
      var propagateMinConstraints = tmp16_Box$composable;
      var $composer_13 = tmp17_Box$composable;
      $composer_13.y1a(1330882304);
      sourceInformation($composer_13, 'C(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
      if (!(1 === 0))
        modifier = Companion_getInstance();
      if (!(0 === 0))
        contentAlignment = Companion_getInstance_2().s4d_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_13, 6);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp0_Layout$composable = modifier;
      var tmp1_Layout$composable = $composer_13;
      var tmp2_Layout$composable = 0;
      var modifier_0 = tmp0_Layout$composable;
      var $composer_14 = tmp1_Layout$composable;
      $composer_14.y1a(1725976829);
      sourceInformation($composer_14, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance();
      var tmp$ret$60;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_14;
      var $composer_15 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_15, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_11 = $composer_15.w1n(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_15);
      tmp$ret$60 = tmp0_11;
      var density = tmp$ret$60;
      var tmp$ret$61;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua = $composer_14;
      var $composer_16 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_16, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_12 = $composer_16.w1n(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_16);
      tmp$ret$61 = tmp0_12;
      var layoutDirection = tmp$ret$61;
      var tmp$ret$62;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro = $composer_14;
      var $composer_17 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_17, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_13 = $composer_17.w1n(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_17);
      tmp$ret$62 = tmp0_13;
      var viewConfiguration = tmp$ret$62;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_1().a5e_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
      var tmp8_ReusableComposeNode$composable = $composer_14;
      var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
      var $composer_18 = tmp8_ReusableComposeNode$composable;
      var tmp_25 = $composer_18.u1m();
      if (!isInterface(tmp_25, Applier)) {
        invalidApplier();
      }
      $composer_18.g1n();
      if ($composer_18.e1n()) {
        $composer_18.h1n(tmp6_ReusableComposeNode$composable);
      } else {
        $composer_18.j1n();
      }
      $composer_18.l1n();
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_18);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_1().e5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_1().d5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_1().f5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_1().g5e_1);
      $composer_18.m1n();
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_18)), $composer_18, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_18.y1a(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp3__anonymous__ufb84q = $composer_18;
      var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_19 = tmp3__anonymous__ufb84q;
      $composer_19.y1a(-2137368960);
      sourceInformation($composer_19, 'C72@3384L9:Box.kt#2w3rfo');
      if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_19.l1m()) {
        // Inline function 'com.patriker.icebreathing.BreatheScreen$composable.<anonymous>' call
        var tmp18__anonymous__4dy6j8 = BoxScopeInstance_getInstance();
        var tmp19__anonymous__98mtqr = $composer_19;
        var tmp20__anonymous__q2j3lv = 6;
        var $composer_20 = tmp19__anonymous__98mtqr;
        var $dirty_0 = tmp20__anonymous__q2j3lv;
        if ((tmp20__anonymous__q2j3lv & 14) === 0)
          $dirty_0 = $dirty_0 | ($composer_20.z1a(tmp18__anonymous__4dy6j8) ? 4 : 2);
        if (!(($dirty_0 & 91) === 18) ? true : !$composer_20.l1m()) {
          if (BreatheScreen$composable$lambda_9(sessState$delegate).equals(SessionState_Prepare_getInstance())) {
            $composer_20.y1a(-360068111);
            var tmp_26 = BreatheScreen$composable$lambda(roundNum$delegate);
            var tmp_27 = BreatheScreen$composable$lambda_2(breathGoal$delegate);
            TransitionScreen$composable(tmp_26, tmp_27, BreatheScreen$composable$transitionBreathing$ref(roundNum$delegate, roundGoal$delegate, sessState$delegate), $composer_20, 0);
            $composer_20.d1b();
          } else if (BreatheScreen$composable$lambda_9(sessState$delegate).equals(SessionState_BreatheHold_getInstance())) {
            $composer_20.y1a(-360067970);
            var tmp_28 = BreatheScreen$composable$lambda_13(screenSize$delegate);
            var tmp_29 = BreatheScreen$composable$lambda(roundNum$delegate);
            var tmp$ret$64;
            // Inline function 'kotlin.collections.getOrElse' call
            var tmp0_getOrElse = thisSession.a9n_1;
            var tmp1_getOrElse = BreatheScreen$composable$lambda(roundNum$delegate);
            var tmp0_elvis_lhs = tmp0_getOrElse.v(tmp1_getOrElse);
            var tmp_30;
            if (tmp0_elvis_lhs == null) {
              var tmp$ret$63;
              // Inline function 'com.patriker.icebreathing.BreatheScreen$composable.<anonymous>.<anonymous>' call
              var tmp0_return = 1;
              tmp$ret$63 = tmp0_return;
              tmp_30 = tmp$ret$63;
            } else {
              tmp_30 = tmp0_elvis_lhs;
            }
            tmp$ret$64 = tmp_30;
            var tmp_31 = tmp$ret$64;
            BreathHoldScreen$composable(tmp_28, tmp_29, tmp_31, BreatheScreen$composable$transitionBreathing$ref_0(roundNum$delegate, roundGoal$delegate, sessState$delegate), clickedBack, $composer_20, 57344 & $dirty << 9);
            $composer_20.d1b();
          } else if (BreatheScreen$composable$lambda_9(sessState$delegate).equals(SessionState_BreatheInHold_getInstance())) {
            $composer_20.y1a(-360067699);
            var tmp_32 = BreatheScreen$composable$lambda_13(screenSize$delegate);
            var tmp_33 = BreatheScreen$composable$incrementRound$ref(roundNum$delegate, roundGoal$delegate, sessState$delegate);
            var tmp$ret$69;
            // Inline function 'androidx.compose.runtime.remember$composable' call
            var tmp2_remember$composable_0 = $composer_20;
            var $composer_21 = tmp2_remember$composable_0;
            $composer_21.y1a(547886695);
            sourceInformation($composer_21, 'C(remember$composable):Composables.kt#9igjgp');
            var tmp$ret$68;
            // Inline function 'androidx.compose.runtime.cache' call
            var tmp1_cache_11 = $composer_21;
            var tmp$ret$67;
            // Inline function 'kotlin.let' call
            var tmp0_let_11 = tmp1_cache_11.a1b();
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$66;
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var tmp_34;
            if (false ? true : tmp0_let_11 === Companion_getInstance_0().c1b_1) {
              var tmp$ret$65;
              // Inline function 'com.patriker.icebreathing.BreatheScreen$composable.<anonymous>.<anonymous>' call
              tmp$ret$65 = BreatheScreen$composable$goToStart$ref(clickedBack, roundNum$delegate, roundGoal$delegate, sessState$delegate);
              var value_11 = tmp$ret$65;
              tmp1_cache_11.b1b(value_11);
              tmp_34 = value_11;
            } else {
              tmp_34 = tmp0_let_11;
            }
            tmp$ret$66 = tmp_34;
            tmp$ret$67 = tmp$ret$66;
            var tmp_35 = tmp$ret$67;
            tmp$ret$68 = (tmp_35 == null ? true : isObject(tmp_35)) ? tmp_35 : THROW_CCE();
            var tmp0_14 = tmp$ret$68;
            $composer_21.d1b();
            tmp$ret$69 = tmp0_14;
            BreathInScreen$composable(tmp_32, 0, tmp_33, tmp$ret$69, $composer_20, 0, 2);
            $composer_20.d1b();
          } else if (BreatheScreen$composable$lambda_9(sessState$delegate).equals(SessionState_Done_getInstance())) {
            $composer_20.y1a(-360067519);
            var tmp$ret$74;
            // Inline function 'androidx.compose.runtime.remember$composable' call
            var tmp3_remember$composable_0 = $composer_20;
            var $composer_22 = tmp3_remember$composable_0;
            $composer_22.y1a(547886695);
            sourceInformation($composer_22, 'C(remember$composable):Composables.kt#9igjgp');
            var tmp$ret$73;
            // Inline function 'androidx.compose.runtime.cache' call
            var tmp1_cache_12 = $composer_22;
            var tmp$ret$72;
            // Inline function 'kotlin.let' call
            var tmp0_let_12 = tmp1_cache_12.a1b();
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$71;
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var tmp_36;
            if (false ? true : tmp0_let_12 === Companion_getInstance_0().c1b_1) {
              var tmp$ret$70;
              // Inline function 'com.patriker.icebreathing.BreatheScreen$composable.<anonymous>.<anonymous>' call
              tmp$ret$70 = BreatheScreen$composable$goToStart$ref_0(clickedBack, roundNum$delegate, roundGoal$delegate, sessState$delegate);
              var value_12 = tmp$ret$70;
              tmp1_cache_12.b1b(value_12);
              tmp_36 = value_12;
            } else {
              tmp_36 = tmp0_let_12;
            }
            tmp$ret$71 = tmp_36;
            tmp$ret$72 = tmp$ret$71;
            var tmp_37 = tmp$ret$72;
            tmp$ret$73 = (tmp_37 == null ? true : isObject(tmp_37)) ? tmp_37 : THROW_CCE();
            var tmp0_15 = tmp$ret$73;
            $composer_22.d1b();
            tmp$ret$74 = tmp0_15;
            FinishScreen$composable(thisSession, tmp$ret$74, $composer_20, 14 & $dirty);
            $composer_20.d1b();
          } else {
            $composer_20.y1a(-360067430);
            var tmp_38 = BreatheScreen$composable$lambda_13(screenSize$delegate);
            var tmp_39 = BreatheScreen$composable$lambda_7(numBreaths$delegate);
            var tmp_40 = BreatheScreen$composable$lambda_2(breathGoal$delegate);
            var tmp$ret$79;
            // Inline function 'androidx.compose.runtime.remember$composable' call
            var tmp4_remember$composable_0 = $composer_20;
            var $composer_23 = tmp4_remember$composable_0;
            $composer_23.y1a(547886695);
            sourceInformation($composer_23, 'C(remember$composable):Composables.kt#9igjgp');
            var tmp$ret$78;
            // Inline function 'androidx.compose.runtime.cache' call
            var tmp1_cache_13 = $composer_23;
            var tmp$ret$77;
            // Inline function 'kotlin.let' call
            var tmp0_let_13 = tmp1_cache_13.a1b();
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$76;
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var tmp_41;
            if (false ? true : tmp0_let_13 === Companion_getInstance_0().c1b_1) {
              var tmp$ret$75;
              // Inline function 'com.patriker.icebreathing.BreatheScreen$composable.<anonymous>.<anonymous>' call
              tmp$ret$75 = BreatheScreen$composable$incrementBreath$ref(numBreaths$delegate, breathGoal$delegate, finishClicked$delegate, roundNum$delegate, roundGoal$delegate, sessState$delegate);
              var value_13 = tmp$ret$75;
              tmp1_cache_13.b1b(value_13);
              tmp_41 = value_13;
            } else {
              tmp_41 = tmp0_let_13;
            }
            tmp$ret$76 = tmp_41;
            tmp$ret$77 = tmp$ret$76;
            var tmp_42 = tmp$ret$77;
            tmp$ret$78 = (tmp_42 == null ? true : isObject(tmp_42)) ? tmp_42 : THROW_CCE();
            var tmp0_16 = tmp$ret$78;
            $composer_23.d1b();
            tmp$ret$79 = tmp0_16;
            BreatheCanvas$composable(tmp_38, tmp_39, tmp_40, tmp$ret$79, BreatheScreen$composable$lambda_3(breathPaused$delegate), BreatheScreen$composable$lambda_5(finishClicked$delegate), BreatheScreen$composable$lambda_12(animationSpeed$delegate), $composer_20, 0);
            var tmp_43 = tmp18__anonymous__4dy6j8.c7d(Companion_getInstance(), Companion_getInstance_2().z4d_1);
            var tmp$ret$80;
            // Inline function 'androidx.compose.ui.unit.dp' call
            tmp$ret$80 = _Dp___init__impl__ms3zkb(8);
            var pauseAlign = padding$default(tmp_43, null, tmp$ret$80, 1, null);
            var tmp_44 = tmp18__anonymous__4dy6j8.c7d(Companion_getInstance(), Companion_getInstance_2().y4d_1);
            var tmp$ret$81;
            // Inline function 'androidx.compose.ui.unit.dp' call
            tmp$ret$81 = _Dp___init__impl__ms3zkb(8);
            var backModifier = padding_0(tmp_44, tmp$ret$81);
            var tmp_45 = BreatheScreen$composable$lambda(roundNum$delegate);
            var tmp_46 = Companion_getInstance();
            var tmp$ret$82;
            // Inline function 'androidx.compose.ui.unit.dp' call
            tmp$ret$82 = _Dp___init__impl__ms3zkb(16);
            RoundText$composable(tmp_45, tmp18__anonymous__4dy6j8.c7d(padding_0(tmp_46, tmp$ret$82), Companion_getInstance_2().s4d_1), $composer_20, 0);
            // Inline function 'androidx.compose.foundation.layout.Row$composable' call
            var tmp5_Row$composable = tmp18__anonymous__4dy6j8.c7d(Companion_getInstance(), Companion_getInstance_2().z4d_1);
            var tmp6_Row$composable = null;
            var tmp7_Row$composable = null;
            var tmp8_Row$composable = $composer_20;
            var modifier_1 = tmp5_Row$composable;
            var horizontalArrangement = tmp6_Row$composable;
            var verticalAlignment = tmp7_Row$composable;
            var $composer_24 = tmp8_Row$composable;
            $composer_24.y1a(-636825856);
            sourceInformation($composer_24, 'C(Row$composable)P(2,1,3)78@3913L58,79@3976L130:Row.kt#2w3rfo');
            if (!(0 === 0))
              modifier_1 = Companion_getInstance();
            if (!(2 === 0))
              horizontalArrangement = Arrangement_getInstance().f7c_1;
            if (!(4 === 0))
              verticalAlignment = Companion_getInstance_2().b4e_1;
            var measurePolicy_0 = rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer_24, 0);
            // Inline function 'androidx.compose.ui.layout.Layout$composable' call
            var tmp0_Layout$composable_0 = modifier_1;
            var tmp1_Layout$composable_0 = $composer_24;
            var tmp2_Layout$composable_0 = 0;
            var modifier_2 = tmp0_Layout$composable_0;
            var $composer_25 = tmp1_Layout$composable_0;
            $composer_25.y1a(1725976829);
            sourceInformation($composer_25, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
            if (!(0 === 0))
              modifier_2 = Companion_getInstance();
            var tmp$ret$83;
            // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
            var tmp0_$get_current$$composable_h5ksy7_0 = get_LocalDensity();
            var tmp1_$get_current$$composable_gn3xww_0 = $composer_25;
            var $composer_26 = tmp1_$get_current$$composable_gn3xww_0;
            sourceInformationMarkerStart($composer_26, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
            var tmp0_17 = $composer_26.w1n(tmp0_$get_current$$composable_h5ksy7_0);
            sourceInformationMarkerEnd($composer_26);
            tmp$ret$83 = tmp0_17;
            var density_0 = tmp$ret$83;
            var tmp$ret$84;
            // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
            var tmp2_$get_current$$composable_g4n2vl_0 = get_LocalLayoutDirection();
            var tmp3_$get_current$$composable_fm67ua_0 = $composer_25;
            var $composer_27 = tmp3_$get_current$$composable_fm67ua_0;
            sourceInformationMarkerStart($composer_27, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
            var tmp0_18 = $composer_27.w1n(tmp2_$get_current$$composable_g4n2vl_0);
            sourceInformationMarkerEnd($composer_27);
            tmp$ret$84 = tmp0_18;
            var layoutDirection_0 = tmp$ret$84;
            var tmp$ret$85;
            // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
            var tmp4_$get_current$$composable_f3pcsz_0 = get_LocalViewConfiguration();
            var tmp5_$get_current$$composable_el8hro_0 = $composer_25;
            var $composer_28 = tmp5_$get_current$$composable_el8hro_0;
            sourceInformationMarkerStart($composer_28, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
            var tmp0_19 = $composer_28.w1n(tmp4_$get_current$$composable_f3pcsz_0);
            sourceInformationMarkerEnd($composer_28);
            tmp$ret$85 = tmp0_19;
            var viewConfiguration_0 = tmp$ret$85;
            // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
            var tmp6_ReusableComposeNode$composable_0 = Companion_getInstance_1().a5e_1;
            var tmp7_ReusableComposeNode$composable_0 = materializerOf(modifier_2);
            var tmp8_ReusableComposeNode$composable_0 = $composer_25;
            var tmp9_ReusableComposeNode$composable_0 = 6 | 7168 & tmp2_Layout$composable_0 << 9;
            var $composer_29 = tmp8_ReusableComposeNode$composable_0;
            var tmp_47 = $composer_29.u1m();
            if (!isInterface(tmp_47, Applier)) {
              invalidApplier();
            }
            $composer_29.g1n();
            if ($composer_29.e1n()) {
              $composer_29.h1n(tmp6_ReusableComposeNode$composable_0);
            } else {
              $composer_29.j1n();
            }
            $composer_29.l1n();
            // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
            var tmp10__anonymous__yfiz50_0 = _Updater___init__impl__rbfxm8($composer_29);
            Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, measurePolicy_0, Companion_getInstance_1().e5e_1);
            Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, density_0, Companion_getInstance_1().d5e_1);
            Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, layoutDirection_0, Companion_getInstance_1().f5e_1);
            Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, viewConfiguration_0, Companion_getInstance_1().g5e_1);
            $composer_29.m1n();
            tmp7_ReusableComposeNode$composable_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_29)), $composer_29, 112 & tmp9_ReusableComposeNode$composable_0 >> 3);
            $composer_29.y1a(2058660585);
            // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
            var tmp3__anonymous__ufb84q_0 = $composer_29;
            var tmp4__anonymous__pkmkx7_0 = 14 & tmp9_ReusableComposeNode$composable_0 >> 9;
            var $composer_30 = tmp3__anonymous__ufb84q_0;
            $composer_30.y1a(-678309503);
            sourceInformation($composer_30, 'C80@4021L9:Row.kt#2w3rfo');
            if (!((tmp4__anonymous__pkmkx7_0 & 11) === 2) ? true : !$composer_30.l1m()) {
              // Inline function 'com.patriker.icebreathing.BreatheScreen$composable.<anonymous>.<anonymous>' call
              var tmp9__anonymous__1b7cvk = RowScopeInstance_getInstance();
              var tmp10__anonymous__yfiz50_1 = $composer_30;
              var tmp11__anonymous__tkubxh = 6;
              var $composer_31 = tmp10__anonymous__yfiz50_1;
              if (!((tmp11__anonymous__tkubxh & 81) === 16) ? true : !$composer_31.l1m()) {
                if (BreatheScreen$composable$lambda_3(breathPaused$delegate)) {
                  $composer_31.y1a(537319838);
                  var tmp$ret$90;
                  // Inline function 'androidx.compose.runtime.remember$composable' call
                  var tmp0_remember$composable_0 = $composer_31;
                  var $composer_32 = tmp0_remember$composable_0;
                  $composer_32.y1a(547886695);
                  sourceInformation($composer_32, 'C(remember$composable):Composables.kt#9igjgp');
                  var tmp$ret$89;
                  // Inline function 'androidx.compose.runtime.cache' call
                  var tmp1_cache_14 = $composer_32;
                  var tmp$ret$88;
                  // Inline function 'kotlin.let' call
                  var tmp0_let_14 = tmp1_cache_14.a1b();
                  // Inline function 'kotlin.contracts.contract' call
                  var tmp$ret$87;
                  // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
                  var tmp_48;
                  if (false ? true : tmp0_let_14 === Companion_getInstance_0().c1b_1) {
                    var tmp$ret$86;
                    // Inline function 'com.patriker.icebreathing.BreatheScreen$composable.<anonymous>.<anonymous>.<anonymous>' call
                    tmp$ret$86 = BreatheScreen$composable$continueClicked$ref(breathPaused$delegate);
                    var value_14 = tmp$ret$86;
                    tmp1_cache_14.b1b(value_14);
                    tmp_48 = value_14;
                  } else {
                    tmp_48 = tmp0_let_14;
                  }
                  tmp$ret$87 = tmp_48;
                  tmp$ret$88 = tmp$ret$87;
                  var tmp_49 = tmp$ret$88;
                  tmp$ret$89 = (tmp_49 == null ? true : isObject(tmp_49)) ? tmp_49 : THROW_CCE();
                  var tmp0_20 = tmp$ret$89;
                  $composer_32.d1b();
                  tmp$ret$90 = tmp0_20;
                  var tmp_50 = tmp$ret$90;
                  var tmp$ret$91;
                  // Inline function 'androidx.compose.ui.unit.dp' call
                  tmp$ret$91 = _Dp___init__impl__ms3zkb(36);
                  ContButton$composable(tmp_50, pauseAlign, tmp$ret$91, $composer_31, 384);
                  $composer_31.d1b();
                } else {
                  $composer_31.y1a(537319932);
                  var tmp$ret$96;
                  // Inline function 'androidx.compose.runtime.remember$composable' call
                  var tmp1_remember$composable_0 = $composer_31;
                  var $composer_33 = tmp1_remember$composable_0;
                  $composer_33.y1a(547886695);
                  sourceInformation($composer_33, 'C(remember$composable):Composables.kt#9igjgp');
                  var tmp$ret$95;
                  // Inline function 'androidx.compose.runtime.cache' call
                  var tmp1_cache_15 = $composer_33;
                  var tmp$ret$94;
                  // Inline function 'kotlin.let' call
                  var tmp0_let_15 = tmp1_cache_15.a1b();
                  // Inline function 'kotlin.contracts.contract' call
                  var tmp$ret$93;
                  // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
                  var tmp_51;
                  if (false ? true : tmp0_let_15 === Companion_getInstance_0().c1b_1) {
                    var tmp$ret$92;
                    // Inline function 'com.patriker.icebreathing.BreatheScreen$composable.<anonymous>.<anonymous>.<anonymous>' call
                    tmp$ret$92 = BreatheScreen$composable$pauseClicked$ref(breathPaused$delegate);
                    var value_15 = tmp$ret$92;
                    tmp1_cache_15.b1b(value_15);
                    tmp_51 = value_15;
                  } else {
                    tmp_51 = tmp0_let_15;
                  }
                  tmp$ret$93 = tmp_51;
                  tmp$ret$94 = tmp$ret$93;
                  var tmp_52 = tmp$ret$94;
                  tmp$ret$95 = (tmp_52 == null ? true : isObject(tmp_52)) ? tmp_52 : THROW_CCE();
                  var tmp0_21 = tmp$ret$95;
                  $composer_33.d1b();
                  tmp$ret$96 = tmp0_21;
                  var tmp_53 = tmp$ret$96;
                  var tmp$ret$97;
                  // Inline function 'androidx.compose.ui.unit.dp' call
                  tmp$ret$97 = _Dp___init__impl__ms3zkb(36);
                  PauseButton$composable(tmp_53, pauseAlign, tmp$ret$97, $composer_31, 384);
                  $composer_31.d1b();
                }
              } else {
                $composer_31.l1h();
              }
            } else {
              $composer_30.l1h();
            }
            $composer_30.d1b();
            $composer_29.d1b();
            $composer_29.k1n();
            $composer_25.d1b();
            $composer_24.d1b();
            var tmp$ret$102;
            // Inline function 'androidx.compose.runtime.remember$composable' call
            var tmp12_remember$composable_0 = $composer_20;
            var $composer_34 = tmp12_remember$composable_0;
            $composer_34.y1a(547886695);
            sourceInformation($composer_34, 'C(remember$composable):Composables.kt#9igjgp');
            var tmp$ret$101;
            // Inline function 'androidx.compose.runtime.cache' call
            var tmp1_cache_16 = $composer_34;
            var tmp$ret$100;
            // Inline function 'kotlin.let' call
            var tmp0_let_16 = tmp1_cache_16.a1b();
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$99;
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var tmp_54;
            if (false ? true : tmp0_let_16 === Companion_getInstance_0().c1b_1) {
              var tmp$ret$98;
              // Inline function 'com.patriker.icebreathing.BreatheScreen$composable.<anonymous>.<anonymous>' call
              tmp$ret$98 = BreatheScreen$composable$goToStart$ref_1(clickedBack, roundNum$delegate, roundGoal$delegate, sessState$delegate);
              var value_16 = tmp$ret$98;
              tmp1_cache_16.b1b(value_16);
              tmp_54 = value_16;
            } else {
              tmp_54 = tmp0_let_16;
            }
            tmp$ret$99 = tmp_54;
            tmp$ret$100 = tmp$ret$99;
            var tmp_55 = tmp$ret$100;
            tmp$ret$101 = (tmp_55 == null ? true : isObject(tmp_55)) ? tmp_55 : THROW_CCE();
            var tmp0_22 = tmp$ret$101;
            $composer_34.d1b();
            tmp$ret$102 = tmp0_22;
            var tmp_56 = tmp$ret$102;
            var tmp$ret$103;
            // Inline function 'androidx.compose.ui.unit.dp' call
            tmp$ret$103 = _Dp___init__impl__ms3zkb(32);
            BackButton$composable(tmp_56, backModifier, tmp$ret$103, $composer_20, 384);
            if (!BreatheScreen$composable$lambda_3(breathPaused$delegate)) {
              var tmp$ret$108;
              // Inline function 'androidx.compose.runtime.remember$composable' call
              var tmp13_remember$composable_0 = $composer_20;
              var $composer_35 = tmp13_remember$composable_0;
              $composer_35.y1a(547886695);
              sourceInformation($composer_35, 'C(remember$composable):Composables.kt#9igjgp');
              var tmp$ret$107;
              // Inline function 'androidx.compose.runtime.cache' call
              var tmp1_cache_17 = $composer_35;
              var tmp$ret$106;
              // Inline function 'kotlin.let' call
              var tmp0_let_17 = tmp1_cache_17.a1b();
              // Inline function 'kotlin.contracts.contract' call
              var tmp$ret$105;
              // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
              var tmp_57;
              if (false ? true : tmp0_let_17 === Companion_getInstance_0().c1b_1) {
                var tmp$ret$104;
                // Inline function 'com.patriker.icebreathing.BreatheScreen$composable.<anonymous>.<anonymous>' call
                tmp$ret$104 = BreatheScreen$composable$finishBreathing$ref(finishClicked$delegate);
                var value_17 = tmp$ret$104;
                tmp1_cache_17.b1b(value_17);
                tmp_57 = value_17;
              } else {
                tmp_57 = tmp0_let_17;
              }
              tmp$ret$105 = tmp_57;
              tmp$ret$106 = tmp$ret$105;
              var tmp_58 = tmp$ret$106;
              tmp$ret$107 = (tmp_58 == null ? true : isObject(tmp_58)) ? tmp_58 : THROW_CCE();
              var tmp0_23 = tmp$ret$107;
              $composer_35.d1b();
              tmp$ret$108 = tmp0_23;
              var tmp_59 = tmp$ret$108;
              var tmp_60 = tmp18__anonymous__4dy6j8.c7d(Companion_getInstance(), Companion_getInstance_2().a4e_1);
              var tmp$ret$109;
              // Inline function 'androidx.compose.ui.unit.dp' call
              tmp$ret$109 = _Dp___init__impl__ms3zkb(8);
              var tmp_61 = padding_0(tmp_60, tmp$ret$109);
              var tmp$ret$110;
              // Inline function 'androidx.compose.ui.unit.dp' call
              tmp$ret$110 = _Dp___init__impl__ms3zkb(32);
              FinishBreatheButton$composable(tmp_59, tmp_61, tmp$ret$110, $composer_20, 384);
            }
            $composer_20.d1b();
          }
        } else {
          $composer_20.l1h();
        }
      } else {
        $composer_19.l1h();
      }
      $composer_19.d1b();
      $composer_18.d1b();
      $composer_18.k1n();
      $composer_14.d1b();
      $composer_13.d1b();
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
      tmp0_safe_receiver.g1p(BreatheScreen$composable$lambda$ref(thisSession, clickedBack, $changed));
    }
  }
  function RoundText$composable(round, mod, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(-939061708);
    sourceInformation($composer_0, 'C(RoundText$composable)P(1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.q1n(round) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(mod) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(-939061708, $dirty, -1, 'com.patriker.icebreathing.RoundText$composable (BreatheScreen.kt:198)');
      }
      var tmp0_text = 'Round ' + round;
      var tmp1_fontSize = get_sp(16);
      var tmp2_color = Companion_getInstance_4().i3a_1;
      var tmp = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextOverflow___init__impl__obguoe(0);
      Text$composable(tmp0_text, mod, tmp2_color, tmp1_fontSize, null, null, null, tmp, null, null, tmp_0, tmp_1, false, 0, null, null, $composer_0, 3456 | 112 & $dirty, 0, 65520);
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
      tmp0_safe_receiver.g1p(RoundText$composable$lambda$ref(round, mod, $changed));
    }
  }
  function ContButton$composable(contClicked, mod, sz, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(-300616391);
    sourceInformation($composer_0, 'C(ContButton$composable)P(!,2:c#ui.unit.Dp)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(contClicked) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(mod) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.o1n(_Dp___get_value__impl__geb1vb(sz)) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(-300616391, $dirty, -1, 'com.patriker.icebreathing.ContButton$composable (BreatheScreen.kt:238)');
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var tmp1_remember$composable = 14 & $dirty;
      var $composer_1 = tmp0_remember$composable;
      $composer_1.y1a(-838505973);
      sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.z1a(contClicked);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
        var tmp$ret$0;
        // Inline function 'com.patriker.icebreathing.ContButton$composable.<anonymous>' call
        tmp$ret$0 = ContButton$composable$lambda_0(contClicked);
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
      var tmp$ret$11;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$10;
      // Inline function 'com.patriker.icebreathing.ContButton$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, -437760924, true, ContButton$composable$lambda_1(sz));
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_2 = tmp0_remember$composable_0;
      $composer_2.y1a(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache_0 = $composer_2.z1a(dispatchReceiver);
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$5;
        // Inline function 'com.patriker.icebreathing.ContButton$composable.<anonymous>.<anonymous>' call
        tmp$ret$5 = ComposableLambda$invoke$ref_0(dispatchReceiver);
        var value_0 = tmp$ret$5;
        tmp1_cache_0.b1b(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = tmp0_let_0;
      }
      tmp$ret$6 = tmp_3;
      tmp$ret$7 = tmp$ret$6;
      var tmp_4 = tmp$ret$7;
      tmp$ret$8 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.d1b();
      tmp$ret$9 = tmp0_0;
      tmp$ret$10 = tmp$ret$9;
      tmp$ret$11 = tmp$ret$10;
      IconButton$composable(tmp_1, mod, false, null, tmp$ret$11, $composer_0, 24576 | 112 & $dirty, 12);
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
      tmp0_safe_receiver.g1p(ContButton$composable$lambda$ref(contClicked, mod, sz, $changed));
    }
  }
  function BreatheScreen$composable$lambda($roundNum$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('roundNum', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $roundNum$delegate.i2();
    return tmp$ret$0;
  }
  function BreatheScreen$composable$lambda_0($roundNum$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('roundNum', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $roundNum$delegate.p11(value);
  }
  function BreatheScreen$composable$lambda_1($roundGoal$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('roundGoal', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $roundGoal$delegate.i2();
    return tmp$ret$0;
  }
  function BreatheScreen$composable$lambda_2($breathGoal$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('breathGoal', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $breathGoal$delegate.i2();
    return tmp$ret$0;
  }
  function BreatheScreen$composable$lambda_3($breathPaused$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('breathPaused', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $breathPaused$delegate.i2();
    return tmp$ret$0;
  }
  function BreatheScreen$composable$lambda_4($breathPaused$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('breathPaused', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $breathPaused$delegate.p11(value);
  }
  function BreatheScreen$composable$lambda_5($finishClicked$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('finishClicked', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $finishClicked$delegate.i2();
    return tmp$ret$0;
  }
  function BreatheScreen$composable$lambda_6($finishClicked$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('finishClicked', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $finishClicked$delegate.p11(value);
  }
  function BreatheScreen$composable$lambda_7($numBreaths$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('numBreaths', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $numBreaths$delegate.i2();
    return tmp$ret$0;
  }
  function BreatheScreen$composable$lambda_8($numBreaths$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('numBreaths', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $numBreaths$delegate.p11(value);
  }
  function BreatheScreen$composable$lambda_9($sessState$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('sessState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $sessState$delegate.i2();
    return tmp$ret$0;
  }
  function BreatheScreen$composable$lambda_10($sessState$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('sessState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $sessState$delegate.p11(value);
  }
  function BreatheScreen$composable$lambda_11($breathRate$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('breathRate', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $breathRate$delegate.i2();
    return tmp$ret$0;
  }
  function BreatheScreen$composable$lambda_12($animationSpeed$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('animationSpeed', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $animationSpeed$delegate.i2();
    return tmp$ret$0;
  }
  function BreatheScreen$composable$lambda_13($screenSize$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('screenSize', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $screenSize$delegate.i2().v2l_1;
    return tmp$ret$0;
  }
  function BreatheScreen$composable$transitionBreathing(roundNum$delegate, roundGoal$delegate, sessState$delegate, s) {
    var tmp;
    if (BreatheScreen$composable$lambda(roundNum$delegate) > BreatheScreen$composable$lambda_1(roundGoal$delegate)) {
      tmp = SessionState_Done_getInstance();
    } else {
      var tmp0_subject = s;
      var tmp0 = tmp0_subject.t5_1;
      switch (tmp0) {
        case 0:
          tmp = SessionState_Breathe_getInstance();
          break;
        case 1:
          tmp = SessionState_BreatheHold_getInstance();
          break;
        case 2:
          tmp = SessionState_BreatheInHold_getInstance();
          break;
        case 3:
          tmp = SessionState_Prepare_getInstance();
          break;
        default:
          tmp = SessionState_Done_getInstance();
          break;
      }
    }
    BreatheScreen$composable$lambda_10(sessState$delegate, tmp);
  }
  function BreatheScreen$composable$incrementBreath(numBreaths$delegate, breathGoal$delegate, finishClicked$delegate, roundNum$delegate, roundGoal$delegate, sessState$delegate) {
    if (BreatheScreen$composable$lambda_7(numBreaths$delegate) < BreatheScreen$composable$lambda_2(breathGoal$delegate) ? !BreatheScreen$composable$lambda_5(finishClicked$delegate) : false) {
      BreatheScreen$composable$lambda_8(numBreaths$delegate, BreatheScreen$composable$lambda_7(numBreaths$delegate) + 1 | 0);
    } else {
      BreatheScreen$composable$lambda_8(numBreaths$delegate, 1);
      BreatheScreen$composable$lambda_6(finishClicked$delegate, false);
      BreatheScreen$composable$transitionBreathing(roundNum$delegate, roundGoal$delegate, sessState$delegate, SessionState_Breathe_getInstance());
    }
  }
  function BreatheScreen$composable$finishBreathing(finishClicked$delegate) {
    BreatheScreen$composable$lambda_6(finishClicked$delegate, true);
  }
  function BreatheScreen$composable$goToStart($clickedBack, roundNum$delegate, roundGoal$delegate, sessState$delegate) {
    BreatheScreen$composable$transitionBreathing(roundNum$delegate, roundGoal$delegate, sessState$delegate, SessionState_Done_getInstance());
    $clickedBack();
  }
  function BreatheScreen$composable$incrementRound(roundNum$delegate, roundGoal$delegate, sessState$delegate, s) {
    if (BreatheScreen$composable$lambda(roundNum$delegate) <= BreatheScreen$composable$lambda_1(roundGoal$delegate)) {
      BreatheScreen$composable$lambda_0(roundNum$delegate, BreatheScreen$composable$lambda(roundNum$delegate) + 1 | 0);
    }
    BreatheScreen$composable$transitionBreathing(roundNum$delegate, roundGoal$delegate, sessState$delegate, s);
  }
  function BreatheScreen$composable$pauseClicked(breathPaused$delegate) {
    BreatheScreen$composable$lambda_4(breathPaused$delegate, true);
  }
  function BreatheScreen$composable$continueClicked(breathPaused$delegate) {
    BreatheScreen$composable$lambda_4(breathPaused$delegate, false);
  }
  function BreatheScreen$composable$lambda_14($thisSession, $clickedBack, $$changed, $composer, $force) {
    return BreatheScreen$composable($thisSession, $clickedBack, $composer, $$changed | 1);
  }
  function RoundText$composable$lambda($round, $mod, $$changed, $composer, $force) {
    return RoundText$composable($round, $mod, $composer, $$changed | 1);
  }
  function ContButton$composable$lambda($contClicked, $mod, $sz, $$changed, $composer, $force) {
    return ContButton$composable($contClicked, $mod, $sz, $composer, $$changed | 1);
  }
  function BreatheScreen$composable$lambda_15() {
    return mutableStateOf$default(1, null, 2, null);
  }
  function BreatheScreen$composable$lambda_16($thisSession) {
    return function () {
      return mutableStateOf$default($thisSession.z9m_1, null, 2, null);
    };
  }
  function BreatheScreen$composable$lambda_17($thisSession) {
    return function () {
      return mutableStateOf$default($thisSession.y9m_1, null, 2, null);
    };
  }
  function BreatheScreen$composable$lambda_18() {
    return mutableStateOf$default(false, null, 2, null);
  }
  function BreatheScreen$composable$lambda_19() {
    return mutableStateOf$default(1, null, 2, null);
  }
  function BreatheScreen$composable$lambda_20() {
    var tmp = SessionState_Prepare_getInstance();
    return mutableStateOf$default(tmp, null, 2, null);
  }
  function BreatheScreen$composable$lambda_21() {
    var tmp = BreathRate_X1_getInstance();
    return mutableStateOf$default(tmp, null, 2, null);
  }
  function BreatheScreen$composable$lambda_22($breathRate$delegate) {
    return function () {
      return toMs(BreatheScreen$composable$lambda_11($breathRate$delegate), 1540);
    };
  }
  function BreatheScreen$composable$transitionBreathing$ref($roundNum$delegate, $roundGoal$delegate, $sessState$delegate) {
    var l = function (p0) {
      BreatheScreen$composable$transitionBreathing($roundNum$delegate, $roundGoal$delegate, $sessState$delegate, p0);
      return Unit_getInstance();
    };
    l.callableName = 'transitionBreathing';
    return l;
  }
  function BreatheScreen$composable$transitionBreathing$ref_0($roundNum$delegate, $roundGoal$delegate, $sessState$delegate) {
    var l = function (p0) {
      BreatheScreen$composable$transitionBreathing($roundNum$delegate, $roundGoal$delegate, $sessState$delegate, p0);
      return Unit_getInstance();
    };
    l.callableName = 'transitionBreathing';
    return l;
  }
  function BreatheScreen$composable$incrementRound$ref($roundNum$delegate, $roundGoal$delegate, $sessState$delegate) {
    var l = function (p0) {
      BreatheScreen$composable$incrementRound($roundNum$delegate, $roundGoal$delegate, $sessState$delegate, p0);
      return Unit_getInstance();
    };
    l.callableName = 'incrementRound';
    return l;
  }
  function BreatheScreen$composable$goToStart$ref($clickedBack, $roundNum$delegate, $roundGoal$delegate, $sessState$delegate) {
    var l = function () {
      BreatheScreen$composable$goToStart($clickedBack, $roundNum$delegate, $roundGoal$delegate, $sessState$delegate);
      return Unit_getInstance();
    };
    l.callableName = 'goToStart';
    return l;
  }
  function BreatheScreen$composable$goToStart$ref_0($clickedBack, $roundNum$delegate, $roundGoal$delegate, $sessState$delegate) {
    var l = function () {
      BreatheScreen$composable$goToStart($clickedBack, $roundNum$delegate, $roundGoal$delegate, $sessState$delegate);
      return Unit_getInstance();
    };
    l.callableName = 'goToStart';
    return l;
  }
  function BreatheScreen$composable$incrementBreath$ref($numBreaths$delegate, $breathGoal$delegate, $finishClicked$delegate, $roundNum$delegate, $roundGoal$delegate, $sessState$delegate) {
    var l = function () {
      BreatheScreen$composable$incrementBreath($numBreaths$delegate, $breathGoal$delegate, $finishClicked$delegate, $roundNum$delegate, $roundGoal$delegate, $sessState$delegate);
      return Unit_getInstance();
    };
    l.callableName = 'incrementBreath';
    return l;
  }
  function BreatheScreen$composable$continueClicked$ref($breathPaused$delegate) {
    var l = function () {
      BreatheScreen$composable$continueClicked($breathPaused$delegate);
      return Unit_getInstance();
    };
    l.callableName = 'continueClicked';
    return l;
  }
  function BreatheScreen$composable$pauseClicked$ref($breathPaused$delegate) {
    var l = function () {
      BreatheScreen$composable$pauseClicked($breathPaused$delegate);
      return Unit_getInstance();
    };
    l.callableName = 'pauseClicked';
    return l;
  }
  function BreatheScreen$composable$goToStart$ref_1($clickedBack, $roundNum$delegate, $roundGoal$delegate, $sessState$delegate) {
    var l = function () {
      BreatheScreen$composable$goToStart($clickedBack, $roundNum$delegate, $roundGoal$delegate, $sessState$delegate);
      return Unit_getInstance();
    };
    l.callableName = 'goToStart';
    return l;
  }
  function BreatheScreen$composable$finishBreathing$ref($finishClicked$delegate) {
    var l = function () {
      BreatheScreen$composable$finishBreathing($finishClicked$delegate);
      return Unit_getInstance();
    };
    l.callableName = 'finishBreathing';
    return l;
  }
  function BreatheScreen$composable$lambda$ref($thisSession, $clickedBack, $$changed) {
    return function (p0, p1) {
      BreatheScreen$composable$lambda_14($thisSession, $clickedBack, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function RoundText$composable$lambda$ref($round, $mod, $$changed) {
    return function (p0, p1) {
      RoundText$composable$lambda($round, $mod, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function ContButton$composable$lambda_0($contClicked) {
    return function () {
      $contClicked();
      return Unit_getInstance();
    };
  }
  function ContButton$composable$lambda_1($sz) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.l1m()) {
        if (isTraceInProgress()) {
          traceEventStart(-437760924, $changed, -1, 'com.patriker.icebreathing.ContButton$composable.<anonymous> (BreatheScreen.kt:242)');
        }
        var tmp0_imageVector = get_PlayArrow(Outlined_getInstance());
        var tmp1_tint = Companion_getInstance_4().i3a_1;
        var tmp2_modifier = size_0(Companion_getInstance(), $sz, $sz);
        Icon$composable(tmp0_imageVector, '', tmp2_modifier, tmp1_tint, $composer_0, 3120, 0);
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
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.j1m(p0, p1);
    };
  }
  function ContButton$composable$lambda$ref($contClicked, $mod, $sz, $$changed) {
    return function (p0, p1) {
      ContButton$composable$lambda($contClicked, $mod, $sz, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function SessionState_Prepare_getInstance() {
    SessionState_initEntries();
    return SessionState_Prepare_instance;
  }
  function SessionState_Breathe_getInstance() {
    SessionState_initEntries();
    return SessionState_Breathe_instance;
  }
  function SessionState_BreatheHold_getInstance() {
    SessionState_initEntries();
    return SessionState_BreatheHold_instance;
  }
  function SessionState_BreatheInHold_getInstance() {
    SessionState_initEntries();
    return SessionState_BreatheInHold_instance;
  }
  function SessionState_Done_getInstance() {
    SessionState_initEntries();
    return SessionState_Done_instance;
  }
  function FinishBreatheButton$composable(finishClicked, mod, size, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(1797220577);
    sourceInformation($composer_0, 'C(FinishBreatheButton$composable)P(!,2:c#ui.unit.Dp)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(finishClicked) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(mod) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.o1n(_Dp___get_value__impl__geb1vb(size)) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(1797220577, $dirty, -1, 'com.patriker.icebreathing.FinishBreatheButton$composable (Buttons.kt:22)');
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var tmp1_remember$composable = 14 & $dirty;
      var $composer_1 = tmp0_remember$composable;
      $composer_1.y1a(-838505973);
      sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.z1a(finishClicked);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
        var tmp$ret$0;
        // Inline function 'com.patriker.icebreathing.FinishBreatheButton$composable.<anonymous>' call
        tmp$ret$0 = FinishBreatheButton$composable$lambda_0(finishClicked);
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
      var tmp$ret$5;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$5 = _Dp___init__impl__ms3zkb(16);
      var tmp_2 = RoundedCornerShape(tmp$ret$5);
      var tmp_3 = ButtonDefaults_getInstance();
      var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_5 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_6 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_7 = tmp_3.d93(tmp_4, tmp_5, tmp_6, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 24576, 15);
      var tmp$ret$12;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'com.patriker.icebreathing.FinishBreatheButton$composable.<anonymous>' call
      var tmp_8 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_8, -399228094, true, FinishBreatheButton$composable$lambda_1(size));
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_2 = tmp0_remember$composable_0;
      $composer_2.y1a(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache_0 = $composer_2.z1a(dispatchReceiver);
      var tmp$ret$8;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_9;
      if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$6;
        // Inline function 'com.patriker.icebreathing.FinishBreatheButton$composable.<anonymous>.<anonymous>' call
        tmp$ret$6 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        var value_0 = tmp$ret$6;
        tmp1_cache_0.b1b(value_0);
        tmp_9 = value_0;
      } else {
        tmp_9 = tmp0_let_0;
      }
      tmp$ret$7 = tmp_9;
      tmp$ret$8 = tmp$ret$7;
      var tmp_10 = tmp$ret$8;
      tmp$ret$9 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
      var tmp0_0 = tmp$ret$9;
      $composer_2.d1b();
      tmp$ret$10 = tmp0_0;
      tmp$ret$11 = tmp$ret$10;
      tmp$ret$12 = tmp$ret$11;
      OutlinedButton$composable(tmp_1, mod, false, null, null, tmp_2, null, tmp_7, null, tmp$ret$12, $composer_0, 805306368 | 112 & $dirty, 348);
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
      tmp0_safe_receiver.g1p(FinishBreatheButton$composable$lambda$ref(finishClicked, mod, size, $changed));
    }
  }
  function BackButton$composable(backClicked, mod, size, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(-1325940764);
    sourceInformation($composer_0, 'C(BackButton$composable)P(!,2:c#ui.unit.Dp)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(backClicked) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(mod) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.o1n(_Dp___get_value__impl__geb1vb(size)) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(-1325940764, $dirty, -1, 'com.patriker.icebreathing.BackButton$composable (Buttons.kt:38)');
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var tmp1_remember$composable = 14 & $dirty;
      var $composer_1 = tmp0_remember$composable;
      $composer_1.y1a(-838505973);
      sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.z1a(backClicked);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
        var tmp$ret$0;
        // Inline function 'com.patriker.icebreathing.BackButton$composable.<anonymous>' call
        tmp$ret$0 = BackButton$composable$lambda_0(backClicked);
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
      var tmp$ret$11;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$10;
      // Inline function 'com.patriker.icebreathing.BackButton$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 2144002015, true, BackButton$composable$lambda_1(size));
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_2 = tmp0_remember$composable_0;
      $composer_2.y1a(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache_0 = $composer_2.z1a(dispatchReceiver);
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$5;
        // Inline function 'com.patriker.icebreathing.BackButton$composable.<anonymous>.<anonymous>' call
        tmp$ret$5 = ComposableLambda$invoke$ref_2(dispatchReceiver);
        var value_0 = tmp$ret$5;
        tmp1_cache_0.b1b(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = tmp0_let_0;
      }
      tmp$ret$6 = tmp_3;
      tmp$ret$7 = tmp$ret$6;
      var tmp_4 = tmp$ret$7;
      tmp$ret$8 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.d1b();
      tmp$ret$9 = tmp0_0;
      tmp$ret$10 = tmp$ret$9;
      tmp$ret$11 = tmp$ret$10;
      IconButton$composable(tmp_1, mod, false, null, tmp$ret$11, $composer_0, 24576 | 112 & $dirty, 12);
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
      tmp0_safe_receiver.g1p(BackButton$composable$lambda$ref(backClicked, mod, size, $changed));
    }
  }
  function PauseButton$composable(pauseClicked, mod, sz, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(-137808291);
    sourceInformation($composer_0, 'C(PauseButton$composable)P(1!,2:c#ui.unit.Dp)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(pauseClicked) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(mod) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.o1n(_Dp___get_value__impl__geb1vb(sz)) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(-137808291, $dirty, -1, 'com.patriker.icebreathing.PauseButton$composable (Buttons.kt:51)');
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var tmp1_remember$composable = 14 & $dirty;
      var $composer_1 = tmp0_remember$composable;
      $composer_1.y1a(-838505973);
      sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.z1a(pauseClicked);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
        var tmp$ret$0;
        // Inline function 'com.patriker.icebreathing.PauseButton$composable.<anonymous>' call
        tmp$ret$0 = PauseButton$composable$lambda_0(pauseClicked);
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
      var tmp$ret$11;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$10;
      // Inline function 'com.patriker.icebreathing.PauseButton$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 1109093460, true, PauseButton$composable$lambda_1(sz));
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_2 = tmp0_remember$composable_0;
      $composer_2.y1a(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache_0 = $composer_2.z1a(dispatchReceiver);
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$5;
        // Inline function 'com.patriker.icebreathing.PauseButton$composable.<anonymous>.<anonymous>' call
        tmp$ret$5 = ComposableLambda$invoke$ref_3(dispatchReceiver);
        var value_0 = tmp$ret$5;
        tmp1_cache_0.b1b(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = tmp0_let_0;
      }
      tmp$ret$6 = tmp_3;
      tmp$ret$7 = tmp$ret$6;
      var tmp_4 = tmp$ret$7;
      tmp$ret$8 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.d1b();
      tmp$ret$9 = tmp0_0;
      tmp$ret$10 = tmp$ret$9;
      tmp$ret$11 = tmp$ret$10;
      IconButton$composable(tmp_1, mod, false, null, tmp$ret$11, $composer_0, 24576 | 112 & $dirty, 12);
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
      tmp0_safe_receiver.g1p(PauseButton$composable$lambda$ref(pauseClicked, mod, sz, $changed));
    }
  }
  function FinishBreatheButton$composable$lambda($finishClicked, $mod, $size, $$changed, $composer, $force) {
    return FinishBreatheButton$composable($finishClicked, $mod, $size, $composer, $$changed | 1);
  }
  function BackButton$composable$lambda($backClicked, $mod, $size, $$changed, $composer, $force) {
    return BackButton$composable($backClicked, $mod, $size, $composer, $$changed | 1);
  }
  function PauseButton$composable$lambda($pauseClicked, $mod, $sz, $$changed, $composer, $force) {
    return PauseButton$composable($pauseClicked, $mod, $sz, $composer, $$changed | 1);
  }
  function FinishBreatheButton$composable$lambda_0($finishClicked) {
    return function () {
      $finishClicked();
      return Unit_getInstance();
    };
  }
  function FinishBreatheButton$composable$lambda_1($size) {
    return function ($this$OutlinedButton, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.l1m()) {
        if (isTraceInProgress()) {
          traceEventStart(-399228094, $changed, -1, 'com.patriker.icebreathing.FinishBreatheButton$composable.<anonymous> (Buttons.kt:27)');
        }
        var tmp_0 = Companion_getInstance();
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
        Spacer$composable(width(tmp_0, tmp$ret$0), $composer_0, 6);
        var tmp_1 = get_CheckCircle(Outlined_getInstance());
        var tmp_2 = size_1(Companion_getInstance(), $size);
        Icon$composable(tmp_1, 'Finish Breathing', tmp_2, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 48, 8);
        var tmp_3 = Companion_getInstance();
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$1 = _Dp___init__impl__ms3zkb(4);
        Spacer$composable(width(tmp_3, tmp$ret$1), $composer_0, 6);
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
    return function (p0, p1, p2) {
      return $boundThis.e2i(p0, p1, p2);
    };
  }
  function FinishBreatheButton$composable$lambda$ref($finishClicked, $mod, $size, $$changed) {
    return function (p0, p1) {
      FinishBreatheButton$composable$lambda($finishClicked, $mod, $size, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function BackButton$composable$lambda_0($backClicked) {
    return function () {
      $backClicked();
      return Unit_getInstance();
    };
  }
  function BackButton$composable$lambda_1($size) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.l1m()) {
        if (isTraceInProgress()) {
          traceEventStart(2144002015, $changed, -1, 'com.patriker.icebreathing.BackButton$composable.<anonymous> (Buttons.kt:40)');
        }
        Icon$composable(get_ArrowBack(Outlined_getInstance()), 'Go to Start', size_1(Companion_getInstance(), $size), Companion_getInstance_4().i3a_1, $composer_0, 3120, 0);
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
  function BackButton$composable$lambda$ref($backClicked, $mod, $size, $$changed) {
    return function (p0, p1) {
      BackButton$composable$lambda($backClicked, $mod, $size, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function PauseButton$composable$lambda_0($pauseClicked) {
    return function () {
      $pauseClicked();
      return Unit_getInstance();
    };
  }
  function PauseButton$composable$lambda_1($sz) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.l1m()) {
        if (isTraceInProgress()) {
          traceEventStart(1109093460, $changed, -1, 'com.patriker.icebreathing.PauseButton$composable.<anonymous> (Buttons.kt:55)');
        }
        var tmp0_imageVector = get_Pause(Outlined_getInstance());
        var tmp1_tint = Companion_getInstance_4().i3a_1;
        var tmp2_modifier = size_0(Companion_getInstance(), $sz, $sz);
        Icon$composable(tmp0_imageVector, '', tmp2_modifier, tmp1_tint, $composer_0, 3120, 0);
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
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.j1m(p0, p1);
    };
  }
  function PauseButton$composable$lambda$ref($pauseClicked, $mod, $sz, $$changed) {
    return function (p0, p1) {
      PauseButton$composable$lambda($pauseClicked, $mod, $sz, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function FinishScreen$composable(thisSession, clickedBack, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(-1001795198);
    sourceInformation($composer_0, 'C(FinishScreen$composable)P(1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(thisSession) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(clickedBack) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(-1001795198, $dirty, -1, 'com.patriker.icebreathing.FinishScreen$composable (FinishScreen.kt:18)');
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
        // Inline function 'com.patriker.icebreathing.FinishScreen$composable.<anonymous>' call
        tmp$ret$0 = derivedStateOf(FinishScreen$composable$lambda_4(thisSession));
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
      var totalHold$delegate = tmp$ret$4;
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
      if (false ? true : tmp0_let_0 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$5;
        // Inline function 'com.patriker.icebreathing.FinishScreen$composable.<anonymous>' call
        var tmp_2 = secondsAsStr(FinishScreen$composable$lambda(totalHold$delegate));
        tmp$ret$5 = mutableStateOf$default(tmp_2, null, 2, null);
        var value_0 = tmp$ret$5;
        tmp1_cache_0.b1b(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      var tmp_3 = tmp$ret$7;
      tmp$ret$8 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.d1b();
      tmp$ret$9 = tmp0_0;
      var holdTime$delegate = tmp$ret$9;
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
      if (false ? true : tmp0_let_1 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$10;
        // Inline function 'com.patriker.icebreathing.FinishScreen$composable.<anonymous>' call
        tmp$ret$10 = derivedStateOf(FinishScreen$composable$lambda_5(totalHold$delegate, holdTime$delegate));
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
      var mins$delegate = tmp$ret$14;
      var tmp$ret$19;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_4 = tmp3_remember$composable;
      $composer_4.y1a(547886695);
      sourceInformation($composer_4, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$18;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_2 = $composer_4;
      var tmp$ret$17;
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = tmp1_cache_2.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_6;
      if (false ? true : tmp0_let_2 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$15;
        // Inline function 'com.patriker.icebreathing.FinishScreen$composable.<anonymous>' call
        tmp$ret$15 = derivedStateOf(FinishScreen$composable$lambda_6(totalHold$delegate, holdTime$delegate));
        var value_2 = tmp$ret$15;
        tmp1_cache_2.b1b(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = tmp0_let_2;
      }
      tmp$ret$16 = tmp_6;
      tmp$ret$17 = tmp$ret$16;
      var tmp_7 = tmp$ret$17;
      tmp$ret$18 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
      var tmp0_2 = tmp$ret$18;
      $composer_4.d1b();
      tmp$ret$19 = tmp0_2;
      var secs$delegate = tmp$ret$19;
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp_8 = Companion_getInstance();
      var tmp4_Box$composable = fillMaxSize$default(tmp_8, 0.0, 1, null);
      var tmp5_Box$composable = Companion_getInstance_2().w4d_1;
      var tmp6_Box$composable = false;
      var tmp7_Box$composable = $composer_0;
      var modifier = tmp4_Box$composable;
      var contentAlignment = tmp5_Box$composable;
      var propagateMinConstraints = tmp6_Box$composable;
      var $composer_5 = tmp7_Box$composable;
      $composer_5.y1a(1330882304);
      sourceInformation($composer_5, 'C(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier = Companion_getInstance();
      if (!(0 === 0))
        contentAlignment = Companion_getInstance_2().s4d_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_5, 6);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp0_Layout$composable = modifier;
      var tmp1_Layout$composable = $composer_5;
      var tmp2_Layout$composable = 48;
      var modifier_0 = tmp0_Layout$composable;
      var $composer_6 = tmp1_Layout$composable;
      $composer_6.y1a(1725976829);
      sourceInformation($composer_6, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance();
      var tmp$ret$20;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_6;
      var $composer_7 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_7, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_3 = $composer_7.w1n(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_7);
      tmp$ret$20 = tmp0_3;
      var density = tmp$ret$20;
      var tmp$ret$21;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua = $composer_6;
      var $composer_8 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_8, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_4 = $composer_8.w1n(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_8);
      tmp$ret$21 = tmp0_4;
      var layoutDirection = tmp$ret$21;
      var tmp$ret$22;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro = $composer_6;
      var $composer_9 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_9, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_5 = $composer_9.w1n(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_9);
      tmp$ret$22 = tmp0_5;
      var viewConfiguration = tmp$ret$22;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_1().a5e_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
      var tmp8_ReusableComposeNode$composable = $composer_6;
      var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
      var $composer_10 = tmp8_ReusableComposeNode$composable;
      var tmp_9 = $composer_10.u1m();
      if (!isInterface(tmp_9, Applier)) {
        invalidApplier();
      }
      $composer_10.g1n();
      if ($composer_10.e1n()) {
        $composer_10.h1n(tmp6_ReusableComposeNode$composable);
      } else {
        $composer_10.j1n();
      }
      $composer_10.l1n();
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_10);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_1().e5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_1().d5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_1().f5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_1().g5e_1);
      $composer_10.m1n();
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_10)), $composer_10, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_10.y1a(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp3__anonymous__ufb84q = $composer_10;
      var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_11 = tmp3__anonymous__ufb84q;
      $composer_11.y1a(-2137368960);
      sourceInformation($composer_11, 'C72@3384L9:Box.kt#2w3rfo');
      if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_11.l1m()) {
        // Inline function 'com.patriker.icebreathing.FinishScreen$composable.<anonymous>' call
        var tmp8__anonymous__65w033 = BoxScopeInstance_getInstance();
        var tmp9__anonymous__1b7cvk = $composer_11;
        var tmp10__anonymous__yfiz50_0 = 6;
        var $composer_12 = tmp9__anonymous__1b7cvk;
        var $dirty_0 = tmp10__anonymous__yfiz50_0;
        if ((tmp10__anonymous__yfiz50_0 & 14) === 0)
          $dirty_0 = $dirty_0 | ($composer_12.z1a(tmp8__anonymous__65w033) ? 4 : 2);
        if (!(($dirty_0 & 91) === 18) ? true : !$composer_12.l1m()) {
          // Inline function 'androidx.compose.foundation.layout.Column$composable' call
          var tmp0_Column$composable = null;
          var tmp1_Column$composable = null;
          var tmp2_Column$composable = Companion_getInstance_2().f4e_1;
          var tmp3_Column$composable = $composer_12;
          var modifier_1 = tmp0_Column$composable;
          var verticalArrangement = tmp1_Column$composable;
          var horizontalAlignment = tmp2_Column$composable;
          var $composer_13 = tmp3_Column$composable;
          $composer_13.y1a(860130704);
          sourceInformation($composer_13, 'C(Column$composable)P(2,3,1)77@3913L61,78@3979L133:Column.kt#2w3rfo');
          if (!(1 === 0))
            modifier_1 = Companion_getInstance();
          if (!(2 === 0))
            verticalArrangement = Arrangement_getInstance().h7c_1;
          if (!(0 === 0))
            horizontalAlignment = Companion_getInstance_2().e4e_1;
          var measurePolicy_0 = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_13, 48);
          // Inline function 'androidx.compose.ui.layout.Layout$composable' call
          var tmp0_Layout$composable_0 = modifier_1;
          var tmp1_Layout$composable_0 = $composer_13;
          var tmp2_Layout$composable_0 = 0;
          var modifier_2 = tmp0_Layout$composable_0;
          var $composer_14 = tmp1_Layout$composable_0;
          $composer_14.y1a(1725976829);
          sourceInformation($composer_14, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
          if (!(0 === 0))
            modifier_2 = Companion_getInstance();
          var tmp$ret$23;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp0_$get_current$$composable_h5ksy7_0 = get_LocalDensity();
          var tmp1_$get_current$$composable_gn3xww_0 = $composer_14;
          var $composer_15 = tmp1_$get_current$$composable_gn3xww_0;
          sourceInformationMarkerStart($composer_15, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_6 = $composer_15.w1n(tmp0_$get_current$$composable_h5ksy7_0);
          sourceInformationMarkerEnd($composer_15);
          tmp$ret$23 = tmp0_6;
          var density_0 = tmp$ret$23;
          var tmp$ret$24;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp2_$get_current$$composable_g4n2vl_0 = get_LocalLayoutDirection();
          var tmp3_$get_current$$composable_fm67ua_0 = $composer_14;
          var $composer_16 = tmp3_$get_current$$composable_fm67ua_0;
          sourceInformationMarkerStart($composer_16, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_7 = $composer_16.w1n(tmp2_$get_current$$composable_g4n2vl_0);
          sourceInformationMarkerEnd($composer_16);
          tmp$ret$24 = tmp0_7;
          var layoutDirection_0 = tmp$ret$24;
          var tmp$ret$25;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp4_$get_current$$composable_f3pcsz_0 = get_LocalViewConfiguration();
          var tmp5_$get_current$$composable_el8hro_0 = $composer_14;
          var $composer_17 = tmp5_$get_current$$composable_el8hro_0;
          sourceInformationMarkerStart($composer_17, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_8 = $composer_17.w1n(tmp4_$get_current$$composable_f3pcsz_0);
          sourceInformationMarkerEnd($composer_17);
          tmp$ret$25 = tmp0_8;
          var viewConfiguration_0 = tmp$ret$25;
          // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
          var tmp6_ReusableComposeNode$composable_0 = Companion_getInstance_1().a5e_1;
          var tmp7_ReusableComposeNode$composable_0 = materializerOf(modifier_2);
          var tmp8_ReusableComposeNode$composable_0 = $composer_14;
          var tmp9_ReusableComposeNode$composable_0 = 6 | 7168 & tmp2_Layout$composable_0 << 9;
          var $composer_18 = tmp8_ReusableComposeNode$composable_0;
          var tmp_10 = $composer_18.u1m();
          if (!isInterface(tmp_10, Applier)) {
            invalidApplier();
          }
          $composer_18.g1n();
          if ($composer_18.e1n()) {
            $composer_18.h1n(tmp6_ReusableComposeNode$composable_0);
          } else {
            $composer_18.j1n();
          }
          $composer_18.l1n();
          // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
          var tmp10__anonymous__yfiz50_1 = _Updater___init__impl__rbfxm8($composer_18);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_1, measurePolicy_0, Companion_getInstance_1().e5e_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_1, density_0, Companion_getInstance_1().d5e_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_1, layoutDirection_0, Companion_getInstance_1().f5e_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_1, viewConfiguration_0, Companion_getInstance_1().g5e_1);
          $composer_18.m1n();
          tmp7_ReusableComposeNode$composable_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_18)), $composer_18, 112 & tmp9_ReusableComposeNode$composable_0 >> 3);
          $composer_18.y1a(2058660585);
          // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
          var tmp3__anonymous__ufb84q_0 = $composer_18;
          var tmp4__anonymous__pkmkx7_0 = 14 & tmp9_ReusableComposeNode$composable_0 >> 9;
          var $composer_19 = tmp3__anonymous__ufb84q_0;
          $composer_19.y1a(-1163856341);
          sourceInformation($composer_19, 'C79@4027L9:Column.kt#2w3rfo');
          if (!((tmp4__anonymous__pkmkx7_0 & 11) === 2) ? true : !$composer_19.l1m()) {
            // Inline function 'com.patriker.icebreathing.FinishScreen$composable.<anonymous>.<anonymous>' call
            var tmp4__anonymous__pkmkx7_1 = ColumnScopeInstance_getInstance();
            var tmp5__anonymous__kpxxpo = $composer_19;
            var tmp6__anonymous__fv9ai5 = 6;
            var $composer_20 = tmp5__anonymous__kpxxpo;
            if (!((tmp6__anonymous__fv9ai5 & 81) === 16) ? true : !$composer_20.l1m()) {
              var textOpacity = 0.95;
              var size = get_sp(24);
              var digitSize = get_sp(28);
              var tmp0_fontSize = get_sp(28);
              var tmp_11 = Companion_getInstance_4().i3a_1;
              var tmp1_color = Color__copy$default_impl_ectz3s(tmp_11, textOpacity, 0.0, 0.0, 0.0, 14, null);
              var tmp_12 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
              var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
              var tmp_14 = _TextOverflow___init__impl__obguoe(0);
              Text$composable('Awesome job!', null, tmp1_color, tmp0_fontSize, null, null, null, tmp_12, null, null, tmp_13, tmp_14, false, 0, null, null, $composer_20, 3462, 0, 65522);
              var tmp_15 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
              var tmp_16 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
              var tmp_17 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
              var tmp_18 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
              var tmp_19 = _TextOverflow___init__impl__obguoe(0);
              var tmp2_fontSize = get_sp(28);
              var tmp_20 = Companion_getInstance_4().i3a_1;
              var tmp3_color = Color__copy$default_impl_ectz3s(tmp_20, textOpacity, 0.0, 0.0, 0.0, 14, null);
              Text$composable('You finished', null, tmp_15, tmp_16, null, null, null, tmp_17, null, null, tmp_18, tmp_19, false, 0, null, TextStyle_init_$Create$(tmp3_color, tmp2_fontSize, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 262140, null), $composer_20, 6, 0, 32766);
              var tmp_21 = Companion_getInstance();
              var tmp$ret$26;
              // Inline function 'androidx.compose.ui.unit.dp' call
              tmp$ret$26 = _Dp___init__impl__ms3zkb(12);
              Spacer$composable(height(tmp_21, tmp$ret$26), $composer_20, 6);
              // Inline function 'androidx.compose.foundation.layout.Row$composable' call
              var tmp0_Row$composable = null;
              var tmp1_Row$composable = null;
              var tmp2_Row$composable = null;
              var tmp3_Row$composable = $composer_20;
              var modifier_3 = tmp0_Row$composable;
              var horizontalArrangement = tmp1_Row$composable;
              var verticalAlignment = tmp2_Row$composable;
              var $composer_21 = tmp3_Row$composable;
              $composer_21.y1a(-636825856);
              sourceInformation($composer_21, 'C(Row$composable)P(2,1,3)78@3913L58,79@3976L130:Row.kt#2w3rfo');
              if (!(1 === 0))
                modifier_3 = Companion_getInstance();
              if (!(2 === 0))
                horizontalArrangement = Arrangement_getInstance().f7c_1;
              if (!(4 === 0))
                verticalAlignment = Companion_getInstance_2().b4e_1;
              var measurePolicy_1 = rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer_21, 0);
              // Inline function 'androidx.compose.ui.layout.Layout$composable' call
              var tmp0_Layout$composable_1 = modifier_3;
              var tmp1_Layout$composable_1 = $composer_21;
              var tmp2_Layout$composable_1 = 0;
              var modifier_4 = tmp0_Layout$composable_1;
              var $composer_22 = tmp1_Layout$composable_1;
              $composer_22.y1a(1725976829);
              sourceInformation($composer_22, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
              if (!(0 === 0))
                modifier_4 = Companion_getInstance();
              var tmp$ret$27;
              // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
              var tmp0_$get_current$$composable_h5ksy7_1 = get_LocalDensity();
              var tmp1_$get_current$$composable_gn3xww_1 = $composer_22;
              var $composer_23 = tmp1_$get_current$$composable_gn3xww_1;
              sourceInformationMarkerStart($composer_23, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
              var tmp0_9 = $composer_23.w1n(tmp0_$get_current$$composable_h5ksy7_1);
              sourceInformationMarkerEnd($composer_23);
              tmp$ret$27 = tmp0_9;
              var density_1 = tmp$ret$27;
              var tmp$ret$28;
              // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
              var tmp2_$get_current$$composable_g4n2vl_1 = get_LocalLayoutDirection();
              var tmp3_$get_current$$composable_fm67ua_1 = $composer_22;
              var $composer_24 = tmp3_$get_current$$composable_fm67ua_1;
              sourceInformationMarkerStart($composer_24, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
              var tmp0_10 = $composer_24.w1n(tmp2_$get_current$$composable_g4n2vl_1);
              sourceInformationMarkerEnd($composer_24);
              tmp$ret$28 = tmp0_10;
              var layoutDirection_1 = tmp$ret$28;
              var tmp$ret$29;
              // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
              var tmp4_$get_current$$composable_f3pcsz_1 = get_LocalViewConfiguration();
              var tmp5_$get_current$$composable_el8hro_1 = $composer_22;
              var $composer_25 = tmp5_$get_current$$composable_el8hro_1;
              sourceInformationMarkerStart($composer_25, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
              var tmp0_11 = $composer_25.w1n(tmp4_$get_current$$composable_f3pcsz_1);
              sourceInformationMarkerEnd($composer_25);
              tmp$ret$29 = tmp0_11;
              var viewConfiguration_1 = tmp$ret$29;
              // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
              var tmp6_ReusableComposeNode$composable_1 = Companion_getInstance_1().a5e_1;
              var tmp7_ReusableComposeNode$composable_1 = materializerOf(modifier_4);
              var tmp8_ReusableComposeNode$composable_1 = $composer_22;
              var tmp9_ReusableComposeNode$composable_1 = 6 | 7168 & tmp2_Layout$composable_1 << 9;
              var $composer_26 = tmp8_ReusableComposeNode$composable_1;
              var tmp_22 = $composer_26.u1m();
              if (!isInterface(tmp_22, Applier)) {
                invalidApplier();
              }
              $composer_26.g1n();
              if ($composer_26.e1n()) {
                $composer_26.h1n(tmp6_ReusableComposeNode$composable_1);
              } else {
                $composer_26.j1n();
              }
              $composer_26.l1n();
              // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
              var tmp10__anonymous__yfiz50_2 = _Updater___init__impl__rbfxm8($composer_26);
              Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_2, measurePolicy_1, Companion_getInstance_1().e5e_1);
              Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_2, density_1, Companion_getInstance_1().d5e_1);
              Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_2, layoutDirection_1, Companion_getInstance_1().f5e_1);
              Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_2, viewConfiguration_1, Companion_getInstance_1().g5e_1);
              $composer_26.m1n();
              tmp7_ReusableComposeNode$composable_1(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_26)), $composer_26, 112 & tmp9_ReusableComposeNode$composable_1 >> 3);
              $composer_26.y1a(2058660585);
              // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
              var tmp3__anonymous__ufb84q_1 = $composer_26;
              var tmp4__anonymous__pkmkx7_2 = 14 & tmp9_ReusableComposeNode$composable_1 >> 9;
              var $composer_27 = tmp3__anonymous__ufb84q_1;
              $composer_27.y1a(-678309503);
              sourceInformation($composer_27, 'C80@4021L9:Row.kt#2w3rfo');
              if (!((tmp4__anonymous__pkmkx7_2 & 11) === 2) ? true : !$composer_27.l1m()) {
                // Inline function 'com.patriker.icebreathing.FinishScreen$composable.<anonymous>.<anonymous>.<anonymous>' call
                var tmp4__anonymous__pkmkx7_3 = RowScopeInstance_getInstance();
                var tmp5__anonymous__kpxxpo_0 = $composer_27;
                var tmp6__anonymous__fv9ai5_0 = 6;
                var $composer_28 = tmp5__anonymous__kpxxpo_0;
                var $dirty_1 = tmp6__anonymous__fv9ai5_0;
                if ((tmp6__anonymous__fv9ai5_0 & 14) === 0)
                  $dirty_1 = $dirty_1 | ($composer_28.z1a(tmp4__anonymous__pkmkx7_3) ? 4 : 2);
                if (!(($dirty_1 & 91) === 18) ? true : !$composer_28.l1m()) {
                  var tmp0_text = '' + imul(thisSession.z9m_1, thisSession.y9m_1);
                  var tmp1_color_0 = MaterialTheme_getInstance().e93($composer_28, 6).u96();
                  var tmp_23 = Companion_getInstance();
                  var tmp$ret$30;
                  // Inline function 'androidx.compose.ui.unit.dp' call
                  tmp$ret$30 = _Dp___init__impl__ms3zkb(8);
                  var tmp_24 = tmp$ret$30;
                  var tmp2_modifier = padding$default(tmp_23, tmp_24, null, 2, null);
                  var tmp_25 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_26 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_27 = _TextOverflow___init__impl__obguoe(0);
                  Text$composable(tmp0_text, tmp2_modifier, tmp1_color_0, digitSize, null, null, null, tmp_25, null, null, tmp_26, tmp_27, false, 0, null, null, $composer_28, 3120, 0, 65520);
                  var tmp_28 = Companion_getInstance_4().i3a_1;
                  var tmp3_color_0 = Color__copy$default_impl_ectz3s(tmp_28, textOpacity, 0.0, 0.0, 0.0, 14, null);
                  var tmp4_modifier = tmp4__anonymous__pkmkx7_3.u7e(Companion_getInstance(), Companion_getInstance_2().c4e_1);
                  var tmp_29 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_30 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_31 = _TextOverflow___init__impl__obguoe(0);
                  Text$composable('Breaths in', tmp4_modifier, tmp3_color_0, size, null, null, null, tmp_29, null, null, tmp_30, tmp_31, false, 0, null, null, $composer_28, 3462, 0, 65520);
                  var tmp5_text = '' + thisSession.z9m_1;
                  var tmp6_color = MaterialTheme_getInstance().e93($composer_28, 6).u96();
                  var tmp_32 = Companion_getInstance();
                  var tmp$ret$31;
                  // Inline function 'androidx.compose.ui.unit.dp' call
                  tmp$ret$31 = _Dp___init__impl__ms3zkb(8);
                  var tmp_33 = tmp$ret$31;
                  var tmp7_modifier = padding$default(tmp_32, tmp_33, null, 2, null);
                  var tmp_34 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_35 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_36 = _TextOverflow___init__impl__obguoe(0);
                  Text$composable(tmp5_text, tmp7_modifier, tmp6_color, digitSize, null, null, null, tmp_34, null, null, tmp_35, tmp_36, false, 0, null, null, $composer_28, 3120, 0, 65520);
                  var tmp_37 = Companion_getInstance_4().i3a_1;
                  var tmp8_color = Color__copy$default_impl_ectz3s(tmp_37, textOpacity, 0.0, 0.0, 0.0, 14, null);
                  var tmp9_modifier = tmp4__anonymous__pkmkx7_3.u7e(Companion_getInstance(), Companion_getInstance_2().c4e_1);
                  var tmp_38 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_39 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_40 = _TextOverflow___init__impl__obguoe(0);
                  Text$composable('Rounds', tmp9_modifier, tmp8_color, size, null, null, null, tmp_38, null, null, tmp_39, tmp_40, false, 0, null, null, $composer_28, 3462, 0, 65520);
                } else {
                  $composer_28.l1h();
                }
              } else {
                $composer_27.l1h();
              }
              $composer_27.d1b();
              $composer_26.d1b();
              $composer_26.k1n();
              $composer_22.d1b();
              $composer_21.d1b();
              var tmp_41 = Companion_getInstance();
              var tmp$ret$32;
              // Inline function 'androidx.compose.ui.unit.dp' call
              tmp$ret$32 = _Dp___init__impl__ms3zkb(24);
              Spacer$composable(height(tmp_41, tmp$ret$32), $composer_20, 6);
              var tmp_42 = Companion_getInstance_4().i3a_1;
              var tmp4_color = Color__copy$default_impl_ectz3s(tmp_42, textOpacity, 0.0, 0.0, 0.0, 14, null);
              var tmp_43 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
              var tmp_44 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
              var tmp_45 = _TextOverflow___init__impl__obguoe(0);
              Text$composable('Held breath for', null, tmp4_color, size, null, null, null, tmp_43, null, null, tmp_44, tmp_45, false, 0, null, null, $composer_20, 3462, 0, 65522);
              // Inline function 'androidx.compose.foundation.layout.Row$composable' call
              var tmp7_Row$composable = null;
              var tmp8_Row$composable = null;
              var tmp9_Row$composable = null;
              var tmp10_Row$composable = $composer_20;
              var modifier_5 = tmp7_Row$composable;
              var horizontalArrangement_0 = tmp8_Row$composable;
              var verticalAlignment_0 = tmp9_Row$composable;
              var $composer_29 = tmp10_Row$composable;
              $composer_29.y1a(-636825856);
              sourceInformation($composer_29, 'C(Row$composable)P(2,1,3)78@3913L58,79@3976L130:Row.kt#2w3rfo');
              if (!(1 === 0))
                modifier_5 = Companion_getInstance();
              if (!(2 === 0))
                horizontalArrangement_0 = Arrangement_getInstance().f7c_1;
              if (!(4 === 0))
                verticalAlignment_0 = Companion_getInstance_2().b4e_1;
              var measurePolicy_2 = rowMeasurePolicy$composable(horizontalArrangement_0, verticalAlignment_0, $composer_29, 0);
              // Inline function 'androidx.compose.ui.layout.Layout$composable' call
              var tmp0_Layout$composable_2 = modifier_5;
              var tmp1_Layout$composable_2 = $composer_29;
              var tmp2_Layout$composable_2 = 0;
              var modifier_6 = tmp0_Layout$composable_2;
              var $composer_30 = tmp1_Layout$composable_2;
              $composer_30.y1a(1725976829);
              sourceInformation($composer_30, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
              if (!(0 === 0))
                modifier_6 = Companion_getInstance();
              var tmp$ret$33;
              // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
              var tmp0_$get_current$$composable_h5ksy7_2 = get_LocalDensity();
              var tmp1_$get_current$$composable_gn3xww_2 = $composer_30;
              var $composer_31 = tmp1_$get_current$$composable_gn3xww_2;
              sourceInformationMarkerStart($composer_31, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
              var tmp0_12 = $composer_31.w1n(tmp0_$get_current$$composable_h5ksy7_2);
              sourceInformationMarkerEnd($composer_31);
              tmp$ret$33 = tmp0_12;
              var density_2 = tmp$ret$33;
              var tmp$ret$34;
              // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
              var tmp2_$get_current$$composable_g4n2vl_2 = get_LocalLayoutDirection();
              var tmp3_$get_current$$composable_fm67ua_2 = $composer_30;
              var $composer_32 = tmp3_$get_current$$composable_fm67ua_2;
              sourceInformationMarkerStart($composer_32, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
              var tmp0_13 = $composer_32.w1n(tmp2_$get_current$$composable_g4n2vl_2);
              sourceInformationMarkerEnd($composer_32);
              tmp$ret$34 = tmp0_13;
              var layoutDirection_2 = tmp$ret$34;
              var tmp$ret$35;
              // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
              var tmp4_$get_current$$composable_f3pcsz_2 = get_LocalViewConfiguration();
              var tmp5_$get_current$$composable_el8hro_2 = $composer_30;
              var $composer_33 = tmp5_$get_current$$composable_el8hro_2;
              sourceInformationMarkerStart($composer_33, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
              var tmp0_14 = $composer_33.w1n(tmp4_$get_current$$composable_f3pcsz_2);
              sourceInformationMarkerEnd($composer_33);
              tmp$ret$35 = tmp0_14;
              var viewConfiguration_2 = tmp$ret$35;
              // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
              var tmp6_ReusableComposeNode$composable_2 = Companion_getInstance_1().a5e_1;
              var tmp7_ReusableComposeNode$composable_2 = materializerOf(modifier_6);
              var tmp8_ReusableComposeNode$composable_2 = $composer_30;
              var tmp9_ReusableComposeNode$composable_2 = 6 | 7168 & tmp2_Layout$composable_2 << 9;
              var $composer_34 = tmp8_ReusableComposeNode$composable_2;
              var tmp_46 = $composer_34.u1m();
              if (!isInterface(tmp_46, Applier)) {
                invalidApplier();
              }
              $composer_34.g1n();
              if ($composer_34.e1n()) {
                $composer_34.h1n(tmp6_ReusableComposeNode$composable_2);
              } else {
                $composer_34.j1n();
              }
              $composer_34.l1n();
              // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
              var tmp10__anonymous__yfiz50_3 = _Updater___init__impl__rbfxm8($composer_34);
              Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_3, measurePolicy_2, Companion_getInstance_1().e5e_1);
              Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_3, density_2, Companion_getInstance_1().d5e_1);
              Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_3, layoutDirection_2, Companion_getInstance_1().f5e_1);
              Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_3, viewConfiguration_2, Companion_getInstance_1().g5e_1);
              $composer_34.m1n();
              tmp7_ReusableComposeNode$composable_2(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_34)), $composer_34, 112 & tmp9_ReusableComposeNode$composable_2 >> 3);
              $composer_34.y1a(2058660585);
              // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
              var tmp3__anonymous__ufb84q_2 = $composer_34;
              var tmp4__anonymous__pkmkx7_4 = 14 & tmp9_ReusableComposeNode$composable_2 >> 9;
              var $composer_35 = tmp3__anonymous__ufb84q_2;
              $composer_35.y1a(-678309503);
              sourceInformation($composer_35, 'C80@4021L9:Row.kt#2w3rfo');
              if (!((tmp4__anonymous__pkmkx7_4 & 11) === 2) ? true : !$composer_35.l1m()) {
                // Inline function 'com.patriker.icebreathing.FinishScreen$composable.<anonymous>.<anonymous>.<anonymous>' call
                var tmp11__anonymous__tkubxh = RowScopeInstance_getInstance();
                var tmp12__anonymous__oq5opy = $composer_35;
                var tmp13__anonymous__jvh1if = 6;
                var $composer_36 = tmp12__anonymous__oq5opy;
                var $dirty_2 = tmp13__anonymous__jvh1if;
                if ((tmp13__anonymous__jvh1if & 14) === 0)
                  $dirty_2 = $dirty_2 | ($composer_36.z1a(tmp11__anonymous__tkubxh) ? 4 : 2);
                if (!(($dirty_2 & 91) === 18) ? true : !$composer_36.l1m()) {
                  var tmp0_text_0 = FinishScreen$composable$lambda_1(mins$delegate);
                  var tmp1_color_1 = MaterialTheme_getInstance().e93($composer_36, 6).u96();
                  var tmp_47 = Companion_getInstance();
                  var tmp$ret$36;
                  // Inline function 'androidx.compose.ui.unit.dp' call
                  tmp$ret$36 = _Dp___init__impl__ms3zkb(8);
                  var tmp_48 = tmp$ret$36;
                  var tmp2_modifier_0 = padding$default(tmp_47, tmp_48, null, 2, null);
                  var tmp_49 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_50 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_51 = _TextOverflow___init__impl__obguoe(0);
                  Text$composable(tmp0_text_0, tmp2_modifier_0, tmp1_color_1, digitSize, null, null, null, tmp_49, null, null, tmp_50, tmp_51, false, 0, null, null, $composer_36, 3120, 0, 65520);
                  var tmp_52 = Companion_getInstance_4().i3a_1;
                  var tmp3_color_1 = Color__copy$default_impl_ectz3s(tmp_52, textOpacity, 0.0, 0.0, 0.0, 14, null);
                  var tmp4_modifier_0 = tmp11__anonymous__tkubxh.u7e(Companion_getInstance(), Companion_getInstance_2().c4e_1);
                  var tmp_53 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_54 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_55 = _TextOverflow___init__impl__obguoe(0);
                  Text$composable('Minutes', tmp4_modifier_0, tmp3_color_1, size, null, null, null, tmp_53, null, null, tmp_54, tmp_55, false, 0, null, null, $composer_36, 3462, 0, 65520);
                  var tmp5_text_0 = FinishScreen$composable$lambda_2(secs$delegate);
                  var tmp6_color_0 = MaterialTheme_getInstance().e93($composer_36, 6).u96();
                  var tmp_56 = Companion_getInstance();
                  var tmp$ret$37;
                  // Inline function 'androidx.compose.ui.unit.dp' call
                  tmp$ret$37 = _Dp___init__impl__ms3zkb(8);
                  var tmp_57 = tmp$ret$37;
                  var tmp7_modifier_0 = padding$default(tmp_56, tmp_57, null, 2, null);
                  var tmp_58 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_59 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_60 = _TextOverflow___init__impl__obguoe(0);
                  Text$composable(tmp5_text_0, tmp7_modifier_0, tmp6_color_0, digitSize, null, null, null, tmp_58, null, null, tmp_59, tmp_60, false, 0, null, null, $composer_36, 3120, 0, 65520);
                  var tmp_61 = Companion_getInstance_4().i3a_1;
                  var tmp8_color_0 = Color__copy$default_impl_ectz3s(tmp_61, textOpacity, 0.0, 0.0, 0.0, 14, null);
                  var tmp9_modifier_0 = tmp11__anonymous__tkubxh.u7e(Companion_getInstance(), Companion_getInstance_2().c4e_1);
                  var tmp_62 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_63 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_64 = _TextOverflow___init__impl__obguoe(0);
                  Text$composable('Seconds', tmp9_modifier_0, tmp8_color_0, size, null, null, null, tmp_62, null, null, tmp_63, tmp_64, false, 0, null, null, $composer_36, 3462, 0, 65520);
                } else {
                  $composer_36.l1h();
                }
              } else {
                $composer_35.l1h();
              }
              $composer_35.d1b();
              $composer_34.d1b();
              $composer_34.k1n();
              $composer_30.d1b();
              $composer_29.d1b();
            } else {
              $composer_20.l1h();
            }
          } else {
            $composer_19.l1h();
          }
          $composer_19.d1b();
          $composer_18.d1b();
          $composer_18.k1n();
          $composer_14.d1b();
          $composer_13.d1b();
          var tmp$ret$42;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp7_remember$composable = $composer_12;
          var tmp8_remember$composable = 14 & $dirty >> 3;
          var $composer_37 = tmp7_remember$composable;
          $composer_37.y1a(-838505973);
          sourceInformation($composer_37, 'C(remember$composable)P(1):Composables.kt#9igjgp');
          var tmp$ret$41;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache_3 = $composer_37;
          var tmp2_cache = $composer_37.z1a(clickedBack);
          var tmp$ret$40;
          // Inline function 'kotlin.let' call
          var tmp0_let_3 = tmp1_cache_3.a1b();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$39;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_65;
          if (tmp2_cache ? true : tmp0_let_3 === Companion_getInstance_0().c1b_1) {
            var tmp$ret$38;
            // Inline function 'com.patriker.icebreathing.FinishScreen$composable.<anonymous>.<anonymous>' call
            tmp$ret$38 = FinishScreen$composable$lambda_7(clickedBack);
            var value_3 = tmp$ret$38;
            tmp1_cache_3.b1b(value_3);
            tmp_65 = value_3;
          } else {
            tmp_65 = tmp0_let_3;
          }
          tmp$ret$39 = tmp_65;
          tmp$ret$40 = tmp$ret$39;
          var tmp_66 = tmp$ret$40;
          tmp$ret$41 = (tmp_66 == null ? true : isObject(tmp_66)) ? tmp_66 : THROW_CCE();
          var tmp0_15 = tmp$ret$41;
          $composer_37.d1b();
          tmp$ret$42 = tmp0_15;
          var tmp_67 = tmp$ret$42;
          var tmp_68 = tmp8__anonymous__65w033.c7d(Companion_getInstance(), Companion_getInstance_2().y4d_1);
          var tmp$ret$43;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$43 = _Dp___init__impl__ms3zkb(8);
          var tmp_69 = padding_0(tmp_68, tmp$ret$43);
          var tmp$ret$44;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$44 = _Dp___init__impl__ms3zkb(32);
          BackButton$composable(tmp_67, tmp_69, tmp$ret$44, $composer_12, 384);
        } else {
          $composer_12.l1h();
        }
      } else {
        $composer_11.l1h();
      }
      $composer_11.d1b();
      $composer_10.d1b();
      $composer_10.k1n();
      $composer_6.d1b();
      $composer_5.d1b();
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
      tmp0_safe_receiver.g1p(FinishScreen$composable$lambda$ref(thisSession, clickedBack, $changed));
    }
  }
  function FinishScreen$composable$lambda($totalHold$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('totalHold', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $totalHold$delegate.i2();
    return tmp$ret$0;
  }
  function FinishScreen$composable$lambda_0($holdTime$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('holdTime', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $holdTime$delegate.i2();
    return tmp$ret$0;
  }
  function FinishScreen$composable$lambda_1($mins$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('mins', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $mins$delegate.i2();
    return tmp$ret$0;
  }
  function FinishScreen$composable$lambda_2($secs$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('secs', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $secs$delegate.i2();
    return tmp$ret$0;
  }
  function FinishScreen$composable$lambda_3($thisSession, $clickedBack, $$changed, $composer, $force) {
    return FinishScreen$composable($thisSession, $clickedBack, $composer, $$changed | 1);
  }
  function FinishScreen$composable$lambda_4($thisSession) {
    return function () {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.fold' call
      var tmp0_fold = take($thisSession.a9n_1.x2(), $thisSession.z9m_1);
      var accumulator = 0;
      var tmp0_iterator = tmp0_fold.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$0;
        // Inline function 'com.patriker.icebreathing.FinishScreen$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp1__anonymous__uwfjfc = accumulator;
        tmp$ret$0 = tmp1__anonymous__uwfjfc + element | 0;
        accumulator = tmp$ret$0;
      }
      tmp$ret$1 = accumulator;
      return tmp$ret$1;
    };
  }
  function FinishScreen$composable$lambda_5($totalHold$delegate, $holdTime$delegate) {
    return function () {
      var tmp;
      if (FinishScreen$composable$lambda($totalHold$delegate) < 600) {
        var tmp_0 = FinishScreen$composable$lambda_0($holdTime$delegate);
        tmp = takeLast(first(split$default(tmp_0, [':'], false, 0, 6, null)), 1);
      } else {
        var tmp_1 = FinishScreen$composable$lambda_0($holdTime$delegate);
        tmp = first(split$default(tmp_1, [':'], false, 0, 6, null));
      }
      return tmp;
    };
  }
  function FinishScreen$composable$lambda_6($totalHold$delegate, $holdTime$delegate) {
    return function () {
      var tmp;
      if ((FinishScreen$composable$lambda($totalHold$delegate) % 60 | 0) < 10) {
        var tmp_0 = FinishScreen$composable$lambda_0($holdTime$delegate);
        tmp = takeLast(last(split$default(tmp_0, [':'], false, 0, 6, null)), 1);
      } else {
        var tmp_1 = FinishScreen$composable$lambda_0($holdTime$delegate);
        tmp = last(split$default(tmp_1, [':'], false, 0, 6, null));
      }
      return tmp;
    };
  }
  function FinishScreen$composable$lambda_7($clickedBack) {
    return function () {
      $clickedBack();
      return Unit_getInstance();
    };
  }
  function FinishScreen$composable$lambda$ref($thisSession, $clickedBack, $$changed) {
    return function (p0, p1) {
      FinishScreen$composable$lambda_3($thisSession, $clickedBack, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function StrRes() {
    StrRes_instance = this;
    this.j9k_1 = 'Start!';
    this.s9k_1 = 'Exhale';
    this.k9k_1 = 'Rounds';
    this.l9k_1 = 'Round';
    this.m9k_1 = 'Breaths';
    this.n9k_1 = 'Hold Times';
    this.r9k_1 = 'Fully\n In!';
    this.t9k_1 = 'Breathe\n Out';
    this.p9k_1 = '5+';
    this.o9k_1 = '5-';
    this.x9k_1 = 'Hold';
    this.q9k_1 = 'Get Ready!';
    this.v9k_1 = 'Inhale!';
    this.u9k_1 = 'Inhale In';
    this.w9k_1 = 'Exhale In';
    this.y9k_1 = 'Paused';
    this.z9k_1 = 'Breathing Session Finished.';
    this.a9l_1 = 'Great Job!';
    this.c9l_1 = 'Close';
    this.b9l_1 = 'Back';
    this.d9l_1 = 0;
  }
  StrRes.prototype.o1 = function () {
    return this.j9k_1;
  };
  StrRes.prototype.c9n = function () {
    return this.k9k_1;
  };
  StrRes.prototype.d9n = function () {
    return this.l9k_1;
  };
  StrRes.prototype.e9n = function () {
    return this.m9k_1;
  };
  StrRes.prototype.f9n = function () {
    return this.n9k_1;
  };
  StrRes.prototype.g9n = function () {
    return this.q9k_1;
  };
  StrRes.prototype.h9n = function () {
    return this.s9k_1;
  };
  StrRes.prototype.i9n = function () {
    return this.v9k_1;
  };
  StrRes.prototype.j9n = function () {
    return this.x9k_1;
  };
  StrRes.prototype.k9n = function () {
    return this.y9k_1;
  };
  StrRes.$metadata$ = objectMeta('StrRes');
  var StrRes_instance;
  function StrRes_getInstance() {
    if (StrRes_instance == null)
      new StrRes();
    return StrRes_instance;
  }
  function get_secondColorTemp() {
    init_properties_StartScreen_kt_8883gm();
    return secondColorTemp;
  }
  var secondColorTemp;
  function get_mainColorTemp() {
    init_properties_StartScreen_kt_8883gm();
    return mainColorTemp;
  }
  var mainColorTemp;
  function SessionData(numBreaths, numRounds, breathHoldTime) {
    this.y9m_1 = numBreaths;
    this.z9m_1 = numRounds;
    this.a9n_1 = breathHoldTime;
    this.b9n_1 = 8;
  }
  SessionData.prototype.l9n = function () {
    return this.y9m_1;
  };
  SessionData.prototype.m9n = function () {
    return this.z9m_1;
  };
  SessionData.prototype.n9n = function () {
    return this.a9n_1;
  };
  SessionData.prototype.toString = function () {
    return 'SessionData(numBreaths=' + this.y9m_1 + ', numRounds=' + this.z9m_1 + ', breathHoldTime=' + this.a9n_1 + ')';
  };
  SessionData.prototype.hashCode = function () {
    var result = this.y9m_1;
    result = imul(result, 31) + this.z9m_1 | 0;
    result = imul(result, 31) + hashCode(this.a9n_1) | 0;
    return result;
  };
  SessionData.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SessionData))
      return false;
    var tmp0_other_with_cast = other instanceof SessionData ? other : THROW_CCE();
    if (!(this.y9m_1 === tmp0_other_with_cast.y9m_1))
      return false;
    if (!(this.z9m_1 === tmp0_other_with_cast.z9m_1))
      return false;
    if (!equals(this.a9n_1, tmp0_other_with_cast.a9n_1))
      return false;
    return true;
  };
  SessionData.$metadata$ = classMeta('SessionData');
  function secondsAsStr(_this__u8e3s4) {
    init_properties_StartScreen_kt_8883gm();
    var minutes = _this__u8e3s4 / 60 | 0;
    var secs = _this__u8e3s4 - imul(minutes, 60) | 0;
    var secStr = padStart(secs.toString(), 2, _Char___init__impl__6a9atx(48));
    return '' + minutes + ':' + secStr;
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.e2i(p0, p1, p2);
    };
  }
  function ComposableSingletons$StartScreenKt$lambda_1$lambda_9f1h50($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(-434645837, $changed, -1, 'com.patriker.icebreathing.ComposableSingletons$StartScreenKt.lambda-1.<anonymous> (StartScreen.kt:136)');
      }
      // Inline function 'androidx.compose.foundation.layout.Column$composable' call
      var tmp0_Column$composable = null;
      var tmp1_Column$composable = null;
      var tmp2_Column$composable = Companion_getInstance_2().f4e_1;
      var tmp3_Column$composable = $composer_0;
      var modifier = tmp0_Column$composable;
      var verticalArrangement = tmp1_Column$composable;
      var horizontalAlignment = tmp2_Column$composable;
      var $composer_1 = tmp3_Column$composable;
      $composer_1.y1a(860130704);
      sourceInformation($composer_1, 'C(Column$composable)P(2,3,1)77@3913L61,78@3979L133:Column.kt#2w3rfo');
      if (!(1 === 0))
        modifier = Companion_getInstance();
      if (!(2 === 0))
        verticalArrangement = Arrangement_getInstance().h7c_1;
      if (!(0 === 0))
        horizontalAlignment = Companion_getInstance_2().e4e_1;
      var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 48);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp0_Layout$composable = modifier;
      var tmp1_Layout$composable = $composer_1;
      var tmp2_Layout$composable = 0;
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
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_1().a5e_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
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
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_1().e5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_1().d5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_1().f5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_1().g5e_1);
      $composer_6.m1n();
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_6.y1a(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
      var tmp3__anonymous__ufb84q = $composer_6;
      var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_7 = tmp3__anonymous__ufb84q;
      $composer_7.y1a(-1163856341);
      sourceInformation($composer_7, 'C79@4027L9:Column.kt#2w3rfo');
      if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_7.l1m()) {
        // Inline function 'com.patriker.icebreathing.ComposableSingletons$StartScreenKt.lambda-1.<anonymous>.<anonymous>' call
        var tmp4__anonymous__pkmkx7_0 = ColumnScopeInstance_getInstance();
        var tmp5__anonymous__kpxxpo = $composer_7;
        var tmp6__anonymous__fv9ai5 = 6;
        var $composer_8 = tmp5__anonymous__kpxxpo;
        if (!((tmp6__anonymous__fv9ai5 & 81) === 16) ? true : !$composer_8.l1m()) {
          var tmp_0 = get_Spa(Filled_getInstance());
          var tmp_1 = Companion_getInstance();
          var tmp$ret$3;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$3 = _Dp___init__impl__ms3zkb(28);
          var tmp_2 = size_1(tmp_1, tmp$ret$3);
          Icon$composable(tmp_0, 'Start Breathing', tmp_2, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_8, 432, 8);
          var tmp_3 = StrRes_getInstance().j9k_1;
          var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_8 = _TextOverflow___init__impl__obguoe(0);
          Text$composable(tmp_3, null, tmp_4, tmp_5, null, null, null, tmp_6, null, null, tmp_7, tmp_8, false, 0, null, null, $composer_8, 0, 0, 65534);
        } else {
          $composer_8.l1h();
        }
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
    return Unit_getInstance();
  }
  function ComposableSingletons$StartScreenKt() {
    ComposableSingletons$StartScreenKt_instance = this;
    var tmp = this;
    tmp.o9n_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-434645837, false, ComposableSingletons$StartScreenKt$lambda_1$lambda_9f1h50));
  }
  ComposableSingletons$StartScreenKt.prototype.q5j = function () {
    return this.o9n_1;
  };
  ComposableSingletons$StartScreenKt.$metadata$ = objectMeta('ComposableSingletons$StartScreenKt');
  var ComposableSingletons$StartScreenKt_instance;
  function ComposableSingletons$StartScreenKt_getInstance() {
    if (ComposableSingletons$StartScreenKt_instance == null)
      new ComposableSingletons$StartScreenKt();
    return ComposableSingletons$StartScreenKt_instance;
  }
  function StartScreen$composable(sessionData, finishedSelection, $composer, $changed) {
    init_properties_StartScreen_kt_8883gm();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(-1619839974);
    sourceInformation($composer_0, 'C(StartScreen$composable)P(1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(sessionData) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(finishedSelection) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(-1619839974, $changed, -1, 'com.patriker.icebreathing.StartScreen$composable (StartScreen.kt:38)');
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
        // Inline function 'com.patriker.icebreathing.StartScreen$composable.<anonymous>' call
        tmp$ret$0 = mutableStateOf$default(sessionData.z9m_1, null, 2, null);
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
      var numRoundsSelected$delegate = tmp$ret$4;
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
      if (false ? true : tmp0_let_0 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$5;
        // Inline function 'com.patriker.icebreathing.StartScreen$composable.<anonymous>' call
        tmp$ret$5 = mutableStateOf$default(sessionData.a9n_1, null, 2, null);
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
      var holdTimes$delegate = tmp$ret$9;
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
      var tmp_3;
      if (false ? true : tmp0_let_1 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$10;
        // Inline function 'com.patriker.icebreathing.StartScreen$composable.<anonymous>' call
        tmp$ret$10 = mutableStateOf$default(sessionData.y9m_1, null, 2, null);
        var value_1 = tmp$ret$10;
        tmp1_cache_1.b1b(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = tmp0_let_1;
      }
      tmp$ret$11 = tmp_3;
      tmp$ret$12 = tmp$ret$11;
      var tmp_4 = tmp$ret$12;
      tmp$ret$13 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      var tmp0_1 = tmp$ret$13;
      $composer_3.d1b();
      tmp$ret$14 = tmp0_1;
      var numBreaths$delegate = tmp$ret$14;
      var tmp0_horizontalAlignment = Companion_getInstance_2().f4e_1;
      var tmp_5 = Companion_getInstance();
      var tmp$ret$15;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$15 = _Dp___init__impl__ms3zkb(5);
      var tmp1_modifier = offset$default(tmp_5, null, tmp$ret$15, 1, null);
      // Inline function 'androidx.compose.foundation.layout.Column$composable' call
      var tmp3_Column$composable = null;
      var tmp4_Column$composable = $composer_0;
      var modifier = tmp1_modifier;
      var verticalArrangement = tmp3_Column$composable;
      var horizontalAlignment = tmp0_horizontalAlignment;
      var $composer_4 = tmp4_Column$composable;
      $composer_4.y1a(860130704);
      sourceInformation($composer_4, 'C(Column$composable)P(2,3,1)77@3913L61,78@3979L133:Column.kt#2w3rfo');
      if (!(0 === 0))
        modifier = Companion_getInstance();
      if (!(2 === 0))
        verticalArrangement = Arrangement_getInstance().h7c_1;
      if (!(0 === 0))
        horizontalAlignment = Companion_getInstance_2().e4e_1;
      var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_4, 48);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp0_Layout$composable = modifier;
      var tmp1_Layout$composable = $composer_4;
      var tmp2_Layout$composable = 48;
      var modifier_0 = tmp0_Layout$composable;
      var $composer_5 = tmp1_Layout$composable;
      $composer_5.y1a(1725976829);
      sourceInformation($composer_5, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance();
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_5;
      var $composer_6 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_6, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_2 = $composer_6.w1n(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_6);
      tmp$ret$16 = tmp0_2;
      var density = tmp$ret$16;
      var tmp$ret$17;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua = $composer_5;
      var $composer_7 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_7, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_3 = $composer_7.w1n(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_7);
      tmp$ret$17 = tmp0_3;
      var layoutDirection = tmp$ret$17;
      var tmp$ret$18;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro = $composer_5;
      var $composer_8 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_8, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_4 = $composer_8.w1n(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_8);
      tmp$ret$18 = tmp0_4;
      var viewConfiguration = tmp$ret$18;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_1().a5e_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
      var tmp8_ReusableComposeNode$composable = $composer_5;
      var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
      var $composer_9 = tmp8_ReusableComposeNode$composable;
      var tmp_6 = $composer_9.u1m();
      if (!isInterface(tmp_6, Applier)) {
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
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_1().e5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_1().d5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_1().f5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_1().g5e_1);
      $composer_9.m1n();
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_9)), $composer_9, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_9.y1a(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
      var tmp3__anonymous__ufb84q = $composer_9;
      var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_10 = tmp3__anonymous__ufb84q;
      $composer_10.y1a(-1163856341);
      sourceInformation($composer_10, 'C79@4027L9:Column.kt#2w3rfo');
      if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_10.l1m()) {
        // Inline function 'com.patriker.icebreathing.StartScreen$composable.<anonymous>' call
        var tmp5__anonymous__kpxxpo = ColumnScopeInstance_getInstance();
        var tmp6__anonymous__fv9ai5 = $composer_10;
        var tmp7__anonymous__b0knam = 6;
        var $composer_11 = tmp6__anonymous__fv9ai5;
        var $dirty_0 = tmp7__anonymous__b0knam;
        if ((tmp7__anonymous__b0knam & 14) === 0)
          $dirty_0 = $dirty_0 | ($composer_11.z1a(tmp5__anonymous__kpxxpo) ? 4 : 2);
        if (!(($dirty_0 & 91) === 18) ? true : !$composer_11.l1m()) {
          // Inline function 'androidx.compose.foundation.layout.Box$composable' call
          var tmp_7 = Companion_getInstance();
          var tmp0_Box$composable = fillMaxWidth$default(tmp_7, 0.0, 1, null);
          var tmp1_Box$composable = Companion_getInstance_2().t4d_1;
          var tmp2_Box$composable = false;
          var tmp3_Box$composable = $composer_11;
          var modifier_1 = tmp0_Box$composable;
          var contentAlignment = tmp1_Box$composable;
          var propagateMinConstraints = tmp2_Box$composable;
          var $composer_12 = tmp3_Box$composable;
          $composer_12.y1a(1330882304);
          sourceInformation($composer_12, 'C(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
          if (!(0 === 0))
            modifier_1 = Companion_getInstance();
          if (!(0 === 0))
            contentAlignment = Companion_getInstance_2().s4d_1;
          if (!(4 === 0))
            propagateMinConstraints = false;
          var measurePolicy_0 = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_12, 6);
          // Inline function 'androidx.compose.ui.layout.Layout$composable' call
          var tmp0_Layout$composable_0 = modifier_1;
          var tmp1_Layout$composable_0 = $composer_12;
          var tmp2_Layout$composable_0 = 48;
          var modifier_2 = tmp0_Layout$composable_0;
          var $composer_13 = tmp1_Layout$composable_0;
          $composer_13.y1a(1725976829);
          sourceInformation($composer_13, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
          if (!(0 === 0))
            modifier_2 = Companion_getInstance();
          var tmp$ret$19;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp0_$get_current$$composable_h5ksy7_0 = get_LocalDensity();
          var tmp1_$get_current$$composable_gn3xww_0 = $composer_13;
          var $composer_14 = tmp1_$get_current$$composable_gn3xww_0;
          sourceInformationMarkerStart($composer_14, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_5 = $composer_14.w1n(tmp0_$get_current$$composable_h5ksy7_0);
          sourceInformationMarkerEnd($composer_14);
          tmp$ret$19 = tmp0_5;
          var density_0 = tmp$ret$19;
          var tmp$ret$20;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp2_$get_current$$composable_g4n2vl_0 = get_LocalLayoutDirection();
          var tmp3_$get_current$$composable_fm67ua_0 = $composer_13;
          var $composer_15 = tmp3_$get_current$$composable_fm67ua_0;
          sourceInformationMarkerStart($composer_15, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_6 = $composer_15.w1n(tmp2_$get_current$$composable_g4n2vl_0);
          sourceInformationMarkerEnd($composer_15);
          tmp$ret$20 = tmp0_6;
          var layoutDirection_0 = tmp$ret$20;
          var tmp$ret$21;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp4_$get_current$$composable_f3pcsz_0 = get_LocalViewConfiguration();
          var tmp5_$get_current$$composable_el8hro_0 = $composer_13;
          var $composer_16 = tmp5_$get_current$$composable_el8hro_0;
          sourceInformationMarkerStart($composer_16, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_7 = $composer_16.w1n(tmp4_$get_current$$composable_f3pcsz_0);
          sourceInformationMarkerEnd($composer_16);
          tmp$ret$21 = tmp0_7;
          var viewConfiguration_0 = tmp$ret$21;
          // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
          var tmp6_ReusableComposeNode$composable_0 = Companion_getInstance_1().a5e_1;
          var tmp7_ReusableComposeNode$composable_0 = materializerOf(modifier_2);
          var tmp8_ReusableComposeNode$composable_0 = $composer_13;
          var tmp9_ReusableComposeNode$composable_0 = 6 | 7168 & tmp2_Layout$composable_0 << 9;
          var $composer_17 = tmp8_ReusableComposeNode$composable_0;
          var tmp_8 = $composer_17.u1m();
          if (!isInterface(tmp_8, Applier)) {
            invalidApplier();
          }
          $composer_17.g1n();
          if ($composer_17.e1n()) {
            $composer_17.h1n(tmp6_ReusableComposeNode$composable_0);
          } else {
            $composer_17.j1n();
          }
          $composer_17.l1n();
          // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
          var tmp10__anonymous__yfiz50_0 = _Updater___init__impl__rbfxm8($composer_17);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, measurePolicy_0, Companion_getInstance_1().e5e_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, density_0, Companion_getInstance_1().d5e_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, layoutDirection_0, Companion_getInstance_1().f5e_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, viewConfiguration_0, Companion_getInstance_1().g5e_1);
          $composer_17.m1n();
          tmp7_ReusableComposeNode$composable_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_17)), $composer_17, 112 & tmp9_ReusableComposeNode$composable_0 >> 3);
          $composer_17.y1a(2058660585);
          // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
          var tmp3__anonymous__ufb84q_0 = $composer_17;
          var tmp4__anonymous__pkmkx7_0 = 14 & tmp9_ReusableComposeNode$composable_0 >> 9;
          var $composer_18 = tmp3__anonymous__ufb84q_0;
          $composer_18.y1a(-2137368960);
          sourceInformation($composer_18, 'C72@3384L9:Box.kt#2w3rfo');
          if (!((tmp4__anonymous__pkmkx7_0 & 11) === 2) ? true : !$composer_18.l1m()) {
            // Inline function 'com.patriker.icebreathing.StartScreen$composable.<anonymous>.<anonymous>' call
            var tmp4__anonymous__pkmkx7_1 = BoxScopeInstance_getInstance();
            var tmp5__anonymous__kpxxpo_0 = $composer_18;
            var tmp6__anonymous__fv9ai5_0 = 6;
            var $composer_19 = tmp5__anonymous__kpxxpo_0;
            var $dirty_1 = tmp6__anonymous__fv9ai5_0;
            if ((tmp6__anonymous__fv9ai5_0 & 14) === 0)
              $dirty_1 = $dirty_1 | ($composer_19.z1a(tmp4__anonymous__pkmkx7_1) ? 4 : 2);
            if (!(($dirty_1 & 91) === 18) ? true : !$composer_19.l1m()) {
              // Inline function 'androidx.compose.foundation.layout.Column$composable' call
              var tmp0_Column$composable = tmp4__anonymous__pkmkx7_1.c7d(Companion_getInstance(), Companion_getInstance_2().w4d_1);
              var tmp1_Column$composable = null;
              var tmp2_Column$composable = Companion_getInstance_2().f4e_1;
              var tmp3_Column$composable_0 = $composer_19;
              var modifier_3 = tmp0_Column$composable;
              var verticalArrangement_0 = tmp1_Column$composable;
              var horizontalAlignment_0 = tmp2_Column$composable;
              var $composer_20 = tmp3_Column$composable_0;
              $composer_20.y1a(860130704);
              sourceInformation($composer_20, 'C(Column$composable)P(2,3,1)77@3913L61,78@3979L133:Column.kt#2w3rfo');
              if (!(0 === 0))
                modifier_3 = Companion_getInstance();
              if (!(2 === 0))
                verticalArrangement_0 = Arrangement_getInstance().h7c_1;
              if (!(0 === 0))
                horizontalAlignment_0 = Companion_getInstance_2().e4e_1;
              var measurePolicy_1 = columnMeasurePolicy$composable(verticalArrangement_0, horizontalAlignment_0, $composer_20, 48);
              // Inline function 'androidx.compose.ui.layout.Layout$composable' call
              var tmp0_Layout$composable_1 = modifier_3;
              var tmp1_Layout$composable_1 = $composer_20;
              var tmp2_Layout$composable_1 = 0;
              var modifier_4 = tmp0_Layout$composable_1;
              var $composer_21 = tmp1_Layout$composable_1;
              $composer_21.y1a(1725976829);
              sourceInformation($composer_21, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
              if (!(0 === 0))
                modifier_4 = Companion_getInstance();
              var tmp$ret$22;
              // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
              var tmp0_$get_current$$composable_h5ksy7_1 = get_LocalDensity();
              var tmp1_$get_current$$composable_gn3xww_1 = $composer_21;
              var $composer_22 = tmp1_$get_current$$composable_gn3xww_1;
              sourceInformationMarkerStart($composer_22, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
              var tmp0_8 = $composer_22.w1n(tmp0_$get_current$$composable_h5ksy7_1);
              sourceInformationMarkerEnd($composer_22);
              tmp$ret$22 = tmp0_8;
              var density_1 = tmp$ret$22;
              var tmp$ret$23;
              // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
              var tmp2_$get_current$$composable_g4n2vl_1 = get_LocalLayoutDirection();
              var tmp3_$get_current$$composable_fm67ua_1 = $composer_21;
              var $composer_23 = tmp3_$get_current$$composable_fm67ua_1;
              sourceInformationMarkerStart($composer_23, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
              var tmp0_9 = $composer_23.w1n(tmp2_$get_current$$composable_g4n2vl_1);
              sourceInformationMarkerEnd($composer_23);
              tmp$ret$23 = tmp0_9;
              var layoutDirection_1 = tmp$ret$23;
              var tmp$ret$24;
              // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
              var tmp4_$get_current$$composable_f3pcsz_1 = get_LocalViewConfiguration();
              var tmp5_$get_current$$composable_el8hro_1 = $composer_21;
              var $composer_24 = tmp5_$get_current$$composable_el8hro_1;
              sourceInformationMarkerStart($composer_24, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
              var tmp0_10 = $composer_24.w1n(tmp4_$get_current$$composable_f3pcsz_1);
              sourceInformationMarkerEnd($composer_24);
              tmp$ret$24 = tmp0_10;
              var viewConfiguration_1 = tmp$ret$24;
              // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
              var tmp6_ReusableComposeNode$composable_1 = Companion_getInstance_1().a5e_1;
              var tmp7_ReusableComposeNode$composable_1 = materializerOf(modifier_4);
              var tmp8_ReusableComposeNode$composable_1 = $composer_21;
              var tmp9_ReusableComposeNode$composable_1 = 6 | 7168 & tmp2_Layout$composable_1 << 9;
              var $composer_25 = tmp8_ReusableComposeNode$composable_1;
              var tmp_9 = $composer_25.u1m();
              if (!isInterface(tmp_9, Applier)) {
                invalidApplier();
              }
              $composer_25.g1n();
              if ($composer_25.e1n()) {
                $composer_25.h1n(tmp6_ReusableComposeNode$composable_1);
              } else {
                $composer_25.j1n();
              }
              $composer_25.l1n();
              // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
              var tmp10__anonymous__yfiz50_1 = _Updater___init__impl__rbfxm8($composer_25);
              Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_1, measurePolicy_1, Companion_getInstance_1().e5e_1);
              Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_1, density_1, Companion_getInstance_1().d5e_1);
              Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_1, layoutDirection_1, Companion_getInstance_1().f5e_1);
              Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_1, viewConfiguration_1, Companion_getInstance_1().g5e_1);
              $composer_25.m1n();
              tmp7_ReusableComposeNode$composable_1(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_25)), $composer_25, 112 & tmp9_ReusableComposeNode$composable_1 >> 3);
              $composer_25.y1a(2058660585);
              // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
              var tmp3__anonymous__ufb84q_1 = $composer_25;
              var tmp4__anonymous__pkmkx7_2 = 14 & tmp9_ReusableComposeNode$composable_1 >> 9;
              var $composer_26 = tmp3__anonymous__ufb84q_1;
              $composer_26.y1a(-1163856341);
              sourceInformation($composer_26, 'C79@4027L9:Column.kt#2w3rfo');
              if (!((tmp4__anonymous__pkmkx7_2 & 11) === 2) ? true : !$composer_26.l1m()) {
                // Inline function 'com.patriker.icebreathing.StartScreen$composable.<anonymous>.<anonymous>.<anonymous>' call
                var tmp4__anonymous__pkmkx7_3 = ColumnScopeInstance_getInstance();
                var tmp5__anonymous__kpxxpo_1 = $composer_26;
                var tmp6__anonymous__fv9ai5_1 = 6;
                var $composer_27 = tmp5__anonymous__kpxxpo_1;
                if (!((tmp6__anonymous__fv9ai5_1 & 81) === 16) ? true : !$composer_27.l1m()) {
                  var tmp2_text = StrRes_getInstance().m9k_1;
                  var tmp3_textAlign = Companion_getInstance_3().k3v_1;
                  var tmp_10 = Companion_getInstance();
                  var tmp$ret$25;
                  // Inline function 'androidx.compose.ui.unit.dp' call
                  tmp$ret$25 = _Dp___init__impl__ms3zkb(10);
                  var tmp_11 = tmp$ret$25;
                  var tmp4_modifier = padding$default(tmp_10, tmp_11, null, 2, null);
                  var tmp5_fontWeight = Companion_getInstance_6().t3x_1;
                  var tmp0_fontSize = get_sp(18);
                  var tmp1_color = Companion_getInstance_4().h3a_1;
                  var tmp6_style = TextStyle_init_$Create$(tmp1_color, tmp0_fontSize, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 262140, null);
                  var tmp_12 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
                  var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_14 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_16 = _TextOverflow___init__impl__obguoe(0);
                  Text$composable(tmp2_text, tmp4_modifier, tmp_12, tmp_13, null, tmp5_fontWeight, null, tmp_14, null, tmp3_textAlign, tmp_15, tmp_16, false, 0, null, tmp6_style, $composer_27, 196656, 0, 32220);
                  var tmp_17 = Companion_getInstance();
                  var tmp$ret$26;
                  // Inline function 'androidx.compose.ui.unit.dp' call
                  tmp$ret$26 = _Dp___init__impl__ms3zkb(5);
                  Spacer$composable(padding_0(tmp_17, tmp$ret$26), $composer_27, 6);
                  var tmp9_value = StartScreen$composable$lambda_3(numBreaths$delegate);
                  var tmp10_range = numberRangeToNumber(5, 100);
                  var tmp7_fontSize = get_sp(22);
                  var tmp8_color = Companion_getInstance_4().h3a_1;
                  var tmp11_textStyle = TextStyle_init_$Create$(tmp8_color, tmp7_fontSize, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 262140, null);
                  var tmp$ret$31;
                  // Inline function 'androidx.compose.runtime.remember$composable' call
                  var tmp0_remember$composable_0 = $composer_27;
                  var $composer_28 = tmp0_remember$composable_0;
                  $composer_28.y1a(-838505973);
                  sourceInformation($composer_28, 'C(remember$composable)P(1):Composables.kt#9igjgp');
                  var tmp$ret$30;
                  // Inline function 'androidx.compose.runtime.cache' call
                  var tmp1_cache_2 = $composer_28;
                  var tmp2_cache = $composer_28.z1a(numBreaths$delegate);
                  var tmp$ret$29;
                  // Inline function 'kotlin.let' call
                  var tmp0_let_2 = tmp1_cache_2.a1b();
                  // Inline function 'kotlin.contracts.contract' call
                  var tmp$ret$28;
                  // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
                  var tmp_18;
                  if (tmp2_cache ? true : tmp0_let_2 === Companion_getInstance_0().c1b_1) {
                    var tmp$ret$27;
                    // Inline function 'com.patriker.icebreathing.StartScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                    tmp$ret$27 = StartScreen$composable$lambda_6(numBreaths$delegate);
                    var value_2 = tmp$ret$27;
                    tmp1_cache_2.b1b(value_2);
                    tmp_18 = value_2;
                  } else {
                    tmp_18 = tmp0_let_2;
                  }
                  tmp$ret$28 = tmp_18;
                  tmp$ret$29 = tmp$ret$28;
                  var tmp_19 = tmp$ret$29;
                  tmp$ret$30 = (tmp_19 == null ? true : isObject(tmp_19)) ? tmp_19 : THROW_CCE();
                  var tmp0_11 = tmp$ret$30;
                  $composer_28.d1b();
                  tmp$ret$31 = tmp0_11;
                  var tmp_20 = tmp$ret$31;
                  NumberPicker$composable(null, null, tmp9_value, tmp_20, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), tmp10_range, tmp11_textStyle, $composer_27, 0, 19);
                } else {
                  $composer_27.l1h();
                }
              } else {
                $composer_26.l1h();
              }
              $composer_26.d1b();
              $composer_25.d1b();
              $composer_25.k1n();
              $composer_21.d1b();
              $composer_20.d1b();
            } else {
              $composer_19.l1h();
            }
          } else {
            $composer_18.l1h();
          }
          $composer_18.d1b();
          $composer_17.d1b();
          $composer_17.k1n();
          $composer_13.d1b();
          $composer_12.d1b();
          // Inline function 'androidx.compose.foundation.layout.Box$composable' call
          var tmp_21 = Companion_getInstance();
          var tmp7_Box$composable = fillMaxWidth$default(tmp_21, 0.0, 1, null);
          var tmp8_Box$composable = null;
          var tmp9_Box$composable = false;
          var tmp10_Box$composable = $composer_11;
          var modifier_5 = tmp7_Box$composable;
          var contentAlignment_0 = tmp8_Box$composable;
          var propagateMinConstraints_0 = tmp9_Box$composable;
          var $composer_29 = tmp10_Box$composable;
          $composer_29.y1a(1330882304);
          sourceInformation($composer_29, 'C(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
          if (!(0 === 0))
            modifier_5 = Companion_getInstance();
          if (!(2 === 0))
            contentAlignment_0 = Companion_getInstance_2().s4d_1;
          if (!(4 === 0))
            propagateMinConstraints_0 = false;
          var measurePolicy_2 = rememberBoxMeasurePolicy$composable(contentAlignment_0, propagateMinConstraints_0, $composer_29, 0);
          // Inline function 'androidx.compose.ui.layout.Layout$composable' call
          var tmp0_Layout$composable_2 = modifier_5;
          var tmp1_Layout$composable_2 = $composer_29;
          var tmp2_Layout$composable_2 = 48;
          var modifier_6 = tmp0_Layout$composable_2;
          var $composer_30 = tmp1_Layout$composable_2;
          $composer_30.y1a(1725976829);
          sourceInformation($composer_30, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
          if (!(0 === 0))
            modifier_6 = Companion_getInstance();
          var tmp$ret$32;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp0_$get_current$$composable_h5ksy7_2 = get_LocalDensity();
          var tmp1_$get_current$$composable_gn3xww_2 = $composer_30;
          var $composer_31 = tmp1_$get_current$$composable_gn3xww_2;
          sourceInformationMarkerStart($composer_31, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_12 = $composer_31.w1n(tmp0_$get_current$$composable_h5ksy7_2);
          sourceInformationMarkerEnd($composer_31);
          tmp$ret$32 = tmp0_12;
          var density_2 = tmp$ret$32;
          var tmp$ret$33;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp2_$get_current$$composable_g4n2vl_2 = get_LocalLayoutDirection();
          var tmp3_$get_current$$composable_fm67ua_2 = $composer_30;
          var $composer_32 = tmp3_$get_current$$composable_fm67ua_2;
          sourceInformationMarkerStart($composer_32, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_13 = $composer_32.w1n(tmp2_$get_current$$composable_g4n2vl_2);
          sourceInformationMarkerEnd($composer_32);
          tmp$ret$33 = tmp0_13;
          var layoutDirection_2 = tmp$ret$33;
          var tmp$ret$34;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp4_$get_current$$composable_f3pcsz_2 = get_LocalViewConfiguration();
          var tmp5_$get_current$$composable_el8hro_2 = $composer_30;
          var $composer_33 = tmp5_$get_current$$composable_el8hro_2;
          sourceInformationMarkerStart($composer_33, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_14 = $composer_33.w1n(tmp4_$get_current$$composable_f3pcsz_2);
          sourceInformationMarkerEnd($composer_33);
          tmp$ret$34 = tmp0_14;
          var viewConfiguration_2 = tmp$ret$34;
          // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
          var tmp6_ReusableComposeNode$composable_2 = Companion_getInstance_1().a5e_1;
          var tmp7_ReusableComposeNode$composable_2 = materializerOf(modifier_6);
          var tmp8_ReusableComposeNode$composable_2 = $composer_30;
          var tmp9_ReusableComposeNode$composable_2 = 6 | 7168 & tmp2_Layout$composable_2 << 9;
          var $composer_34 = tmp8_ReusableComposeNode$composable_2;
          var tmp_22 = $composer_34.u1m();
          if (!isInterface(tmp_22, Applier)) {
            invalidApplier();
          }
          $composer_34.g1n();
          if ($composer_34.e1n()) {
            $composer_34.h1n(tmp6_ReusableComposeNode$composable_2);
          } else {
            $composer_34.j1n();
          }
          $composer_34.l1n();
          // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
          var tmp10__anonymous__yfiz50_2 = _Updater___init__impl__rbfxm8($composer_34);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_2, measurePolicy_2, Companion_getInstance_1().e5e_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_2, density_2, Companion_getInstance_1().d5e_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_2, layoutDirection_2, Companion_getInstance_1().f5e_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_2, viewConfiguration_2, Companion_getInstance_1().g5e_1);
          $composer_34.m1n();
          tmp7_ReusableComposeNode$composable_2(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_34)), $composer_34, 112 & tmp9_ReusableComposeNode$composable_2 >> 3);
          $composer_34.y1a(2058660585);
          // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
          var tmp3__anonymous__ufb84q_2 = $composer_34;
          var tmp4__anonymous__pkmkx7_4 = 14 & tmp9_ReusableComposeNode$composable_2 >> 9;
          var $composer_35 = tmp3__anonymous__ufb84q_2;
          $composer_35.y1a(-2137368960);
          sourceInformation($composer_35, 'C72@3384L9:Box.kt#2w3rfo');
          if (!((tmp4__anonymous__pkmkx7_4 & 11) === 2) ? true : !$composer_35.l1m()) {
            // Inline function 'com.patriker.icebreathing.StartScreen$composable.<anonymous>.<anonymous>' call
            var tmp11__anonymous__tkubxh = BoxScopeInstance_getInstance();
            var tmp12__anonymous__oq5opy = $composer_35;
            var tmp13__anonymous__jvh1if = 6;
            var $composer_36 = tmp12__anonymous__oq5opy;
            var $dirty_2 = tmp13__anonymous__jvh1if;
            if ((tmp13__anonymous__jvh1if & 14) === 0)
              $dirty_2 = $dirty_2 | ($composer_36.z1a(tmp11__anonymous__tkubxh) ? 4 : 2);
            if (!(($dirty_2 & 91) === 18) ? true : !$composer_36.l1m()) {
              // Inline function 'androidx.compose.foundation.layout.Column$composable' call
              var tmp0_Column$composable_0 = tmp11__anonymous__tkubxh.c7d(Companion_getInstance(), Companion_getInstance_2().w4d_1);
              var tmp1_Column$composable_0 = null;
              var tmp2_Column$composable_0 = Companion_getInstance_2().f4e_1;
              var tmp3_Column$composable_1 = $composer_36;
              var modifier_7 = tmp0_Column$composable_0;
              var verticalArrangement_1 = tmp1_Column$composable_0;
              var horizontalAlignment_1 = tmp2_Column$composable_0;
              var $composer_37 = tmp3_Column$composable_1;
              $composer_37.y1a(860130704);
              sourceInformation($composer_37, 'C(Column$composable)P(2,3,1)77@3913L61,78@3979L133:Column.kt#2w3rfo');
              if (!(0 === 0))
                modifier_7 = Companion_getInstance();
              if (!(2 === 0))
                verticalArrangement_1 = Arrangement_getInstance().h7c_1;
              if (!(0 === 0))
                horizontalAlignment_1 = Companion_getInstance_2().e4e_1;
              var measurePolicy_3 = columnMeasurePolicy$composable(verticalArrangement_1, horizontalAlignment_1, $composer_37, 48);
              // Inline function 'androidx.compose.ui.layout.Layout$composable' call
              var tmp0_Layout$composable_3 = modifier_7;
              var tmp1_Layout$composable_3 = $composer_37;
              var tmp2_Layout$composable_3 = 0;
              var modifier_8 = tmp0_Layout$composable_3;
              var $composer_38 = tmp1_Layout$composable_3;
              $composer_38.y1a(1725976829);
              sourceInformation($composer_38, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
              if (!(0 === 0))
                modifier_8 = Companion_getInstance();
              var tmp$ret$35;
              // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
              var tmp0_$get_current$$composable_h5ksy7_3 = get_LocalDensity();
              var tmp1_$get_current$$composable_gn3xww_3 = $composer_38;
              var $composer_39 = tmp1_$get_current$$composable_gn3xww_3;
              sourceInformationMarkerStart($composer_39, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
              var tmp0_15 = $composer_39.w1n(tmp0_$get_current$$composable_h5ksy7_3);
              sourceInformationMarkerEnd($composer_39);
              tmp$ret$35 = tmp0_15;
              var density_3 = tmp$ret$35;
              var tmp$ret$36;
              // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
              var tmp2_$get_current$$composable_g4n2vl_3 = get_LocalLayoutDirection();
              var tmp3_$get_current$$composable_fm67ua_3 = $composer_38;
              var $composer_40 = tmp3_$get_current$$composable_fm67ua_3;
              sourceInformationMarkerStart($composer_40, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
              var tmp0_16 = $composer_40.w1n(tmp2_$get_current$$composable_g4n2vl_3);
              sourceInformationMarkerEnd($composer_40);
              tmp$ret$36 = tmp0_16;
              var layoutDirection_3 = tmp$ret$36;
              var tmp$ret$37;
              // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
              var tmp4_$get_current$$composable_f3pcsz_3 = get_LocalViewConfiguration();
              var tmp5_$get_current$$composable_el8hro_3 = $composer_38;
              var $composer_41 = tmp5_$get_current$$composable_el8hro_3;
              sourceInformationMarkerStart($composer_41, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
              var tmp0_17 = $composer_41.w1n(tmp4_$get_current$$composable_f3pcsz_3);
              sourceInformationMarkerEnd($composer_41);
              tmp$ret$37 = tmp0_17;
              var viewConfiguration_3 = tmp$ret$37;
              // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
              var tmp6_ReusableComposeNode$composable_3 = Companion_getInstance_1().a5e_1;
              var tmp7_ReusableComposeNode$composable_3 = materializerOf(modifier_8);
              var tmp8_ReusableComposeNode$composable_3 = $composer_38;
              var tmp9_ReusableComposeNode$composable_3 = 6 | 7168 & tmp2_Layout$composable_3 << 9;
              var $composer_42 = tmp8_ReusableComposeNode$composable_3;
              var tmp_23 = $composer_42.u1m();
              if (!isInterface(tmp_23, Applier)) {
                invalidApplier();
              }
              $composer_42.g1n();
              if ($composer_42.e1n()) {
                $composer_42.h1n(tmp6_ReusableComposeNode$composable_3);
              } else {
                $composer_42.j1n();
              }
              $composer_42.l1n();
              // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
              var tmp10__anonymous__yfiz50_3 = _Updater___init__impl__rbfxm8($composer_42);
              Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_3, measurePolicy_3, Companion_getInstance_1().e5e_1);
              Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_3, density_3, Companion_getInstance_1().d5e_1);
              Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_3, layoutDirection_3, Companion_getInstance_1().f5e_1);
              Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_3, viewConfiguration_3, Companion_getInstance_1().g5e_1);
              $composer_42.m1n();
              tmp7_ReusableComposeNode$composable_3(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_42)), $composer_42, 112 & tmp9_ReusableComposeNode$composable_3 >> 3);
              $composer_42.y1a(2058660585);
              // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
              var tmp3__anonymous__ufb84q_3 = $composer_42;
              var tmp4__anonymous__pkmkx7_5 = 14 & tmp9_ReusableComposeNode$composable_3 >> 9;
              var $composer_43 = tmp3__anonymous__ufb84q_3;
              $composer_43.y1a(-1163856341);
              sourceInformation($composer_43, 'C79@4027L9:Column.kt#2w3rfo');
              if (!((tmp4__anonymous__pkmkx7_5 & 11) === 2) ? true : !$composer_43.l1m()) {
                // Inline function 'com.patriker.icebreathing.StartScreen$composable.<anonymous>.<anonymous>.<anonymous>' call
                var tmp4__anonymous__pkmkx7_6 = ColumnScopeInstance_getInstance();
                var tmp5__anonymous__kpxxpo_2 = $composer_43;
                var tmp6__anonymous__fv9ai5_2 = 6;
                var $composer_44 = tmp5__anonymous__kpxxpo_2;
                if (!((tmp6__anonymous__fv9ai5_2 & 81) === 16) ? true : !$composer_44.l1m()) {
                  var tmp2_text_0 = StrRes_getInstance().k9k_1;
                  var tmp3_textAlign_0 = Companion_getInstance_3().k3v_1;
                  var tmp_24 = Companion_getInstance();
                  var tmp$ret$38;
                  // Inline function 'androidx.compose.ui.unit.dp' call
                  tmp$ret$38 = _Dp___init__impl__ms3zkb(10);
                  var tmp_25 = tmp$ret$38;
                  var tmp4_modifier_0 = padding$default(tmp_24, tmp_25, null, 2, null);
                  var tmp5_fontWeight_0 = Companion_getInstance_6().t3x_1;
                  var tmp6_color = Companion_getInstance_4().h3a_1;
                  var tmp0_fontSize_0 = get_sp(18);
                  var tmp1_color_0 = Companion_getInstance_4().h3a_1;
                  var tmp7_style = TextStyle_init_$Create$(tmp1_color_0, tmp0_fontSize_0, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 262140, null);
                  var tmp_26 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_27 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_28 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_29 = _TextOverflow___init__impl__obguoe(0);
                  Text$composable(tmp2_text_0, tmp4_modifier_0, tmp6_color, tmp_26, null, tmp5_fontWeight_0, null, tmp_27, null, tmp3_textAlign_0, tmp_28, tmp_29, false, 0, null, tmp7_style, $composer_44, 197040, 0, 32216);
                  var tmp_30 = Companion_getInstance();
                  var tmp$ret$39;
                  // Inline function 'androidx.compose.ui.unit.dp' call
                  tmp$ret$39 = _Dp___init__impl__ms3zkb(5);
                  Spacer$composable(padding_0(tmp_30, tmp$ret$39), $composer_44, 6);
                  var tmp10_value = StartScreen$composable$lambda(numRoundsSelected$delegate);
                  var tmp11_range = numberRangeToNumber(1, 10);
                  var tmp8_fontSize = get_sp(22);
                  var tmp9_color = Companion_getInstance_4().h3a_1;
                  var tmp12_textStyle = TextStyle_init_$Create$(tmp9_color, tmp8_fontSize, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 262140, null);
                  var tmp$ret$44;
                  // Inline function 'androidx.compose.runtime.remember$composable' call
                  var tmp0_remember$composable_1 = $composer_44;
                  var $composer_45 = tmp0_remember$composable_1;
                  $composer_45.y1a(-838505973);
                  sourceInformation($composer_45, 'C(remember$composable)P(1):Composables.kt#9igjgp');
                  var tmp$ret$43;
                  // Inline function 'androidx.compose.runtime.cache' call
                  var tmp1_cache_3 = $composer_45;
                  var tmp2_cache_0 = $composer_45.z1a(numRoundsSelected$delegate);
                  var tmp$ret$42;
                  // Inline function 'kotlin.let' call
                  var tmp0_let_3 = tmp1_cache_3.a1b();
                  // Inline function 'kotlin.contracts.contract' call
                  var tmp$ret$41;
                  // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
                  var tmp_31;
                  if (tmp2_cache_0 ? true : tmp0_let_3 === Companion_getInstance_0().c1b_1) {
                    var tmp$ret$40;
                    // Inline function 'com.patriker.icebreathing.StartScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                    tmp$ret$40 = StartScreen$composable$lambda_7(numRoundsSelected$delegate);
                    var value_3 = tmp$ret$40;
                    tmp1_cache_3.b1b(value_3);
                    tmp_31 = value_3;
                  } else {
                    tmp_31 = tmp0_let_3;
                  }
                  tmp$ret$41 = tmp_31;
                  tmp$ret$42 = tmp$ret$41;
                  var tmp_32 = tmp$ret$42;
                  tmp$ret$43 = (tmp_32 == null ? true : isObject(tmp_32)) ? tmp_32 : THROW_CCE();
                  var tmp0_18 = tmp$ret$43;
                  $composer_45.d1b();
                  tmp$ret$44 = tmp0_18;
                  var tmp_33 = tmp$ret$44;
                  NumberPicker$composable(null, null, tmp10_value, tmp_33, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), tmp11_range, tmp12_textStyle, $composer_44, 0, 19);
                } else {
                  $composer_44.l1h();
                }
              } else {
                $composer_43.l1h();
              }
              $composer_43.d1b();
              $composer_42.d1b();
              $composer_42.k1n();
              $composer_38.d1b();
              $composer_37.d1b();
            } else {
              $composer_36.l1h();
            }
          } else {
            $composer_35.l1h();
          }
          $composer_35.d1b();
          $composer_34.d1b();
          $composer_34.k1n();
          $composer_30.d1b();
          $composer_29.d1b();
          // Inline function 'androidx.compose.foundation.layout.Box$composable' call
          var tmp_34 = Companion_getInstance();
          var tmp14_Box$composable = fillMaxWidth$default(tmp_34, 0.0, 1, null);
          var tmp15_Box$composable = null;
          var tmp16_Box$composable = false;
          var tmp17_Box$composable = $composer_11;
          var modifier_9 = tmp14_Box$composable;
          var contentAlignment_1 = tmp15_Box$composable;
          var propagateMinConstraints_1 = tmp16_Box$composable;
          var $composer_46 = tmp17_Box$composable;
          $composer_46.y1a(1330882304);
          sourceInformation($composer_46, 'C(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
          if (!(0 === 0))
            modifier_9 = Companion_getInstance();
          if (!(2 === 0))
            contentAlignment_1 = Companion_getInstance_2().s4d_1;
          if (!(4 === 0))
            propagateMinConstraints_1 = false;
          var measurePolicy_4 = rememberBoxMeasurePolicy$composable(contentAlignment_1, propagateMinConstraints_1, $composer_46, 0);
          // Inline function 'androidx.compose.ui.layout.Layout$composable' call
          var tmp0_Layout$composable_4 = modifier_9;
          var tmp1_Layout$composable_4 = $composer_46;
          var tmp2_Layout$composable_4 = 48;
          var modifier_10 = tmp0_Layout$composable_4;
          var $composer_47 = tmp1_Layout$composable_4;
          $composer_47.y1a(1725976829);
          sourceInformation($composer_47, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
          if (!(0 === 0))
            modifier_10 = Companion_getInstance();
          var tmp$ret$45;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp0_$get_current$$composable_h5ksy7_4 = get_LocalDensity();
          var tmp1_$get_current$$composable_gn3xww_4 = $composer_47;
          var $composer_48 = tmp1_$get_current$$composable_gn3xww_4;
          sourceInformationMarkerStart($composer_48, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_19 = $composer_48.w1n(tmp0_$get_current$$composable_h5ksy7_4);
          sourceInformationMarkerEnd($composer_48);
          tmp$ret$45 = tmp0_19;
          var density_4 = tmp$ret$45;
          var tmp$ret$46;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp2_$get_current$$composable_g4n2vl_4 = get_LocalLayoutDirection();
          var tmp3_$get_current$$composable_fm67ua_4 = $composer_47;
          var $composer_49 = tmp3_$get_current$$composable_fm67ua_4;
          sourceInformationMarkerStart($composer_49, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_20 = $composer_49.w1n(tmp2_$get_current$$composable_g4n2vl_4);
          sourceInformationMarkerEnd($composer_49);
          tmp$ret$46 = tmp0_20;
          var layoutDirection_4 = tmp$ret$46;
          var tmp$ret$47;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp4_$get_current$$composable_f3pcsz_4 = get_LocalViewConfiguration();
          var tmp5_$get_current$$composable_el8hro_4 = $composer_47;
          var $composer_50 = tmp5_$get_current$$composable_el8hro_4;
          sourceInformationMarkerStart($composer_50, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_21 = $composer_50.w1n(tmp4_$get_current$$composable_f3pcsz_4);
          sourceInformationMarkerEnd($composer_50);
          tmp$ret$47 = tmp0_21;
          var viewConfiguration_4 = tmp$ret$47;
          // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
          var tmp6_ReusableComposeNode$composable_4 = Companion_getInstance_1().a5e_1;
          var tmp7_ReusableComposeNode$composable_4 = materializerOf(modifier_10);
          var tmp8_ReusableComposeNode$composable_4 = $composer_47;
          var tmp9_ReusableComposeNode$composable_4 = 6 | 7168 & tmp2_Layout$composable_4 << 9;
          var $composer_51 = tmp8_ReusableComposeNode$composable_4;
          var tmp_35 = $composer_51.u1m();
          if (!isInterface(tmp_35, Applier)) {
            invalidApplier();
          }
          $composer_51.g1n();
          if ($composer_51.e1n()) {
            $composer_51.h1n(tmp6_ReusableComposeNode$composable_4);
          } else {
            $composer_51.j1n();
          }
          $composer_51.l1n();
          // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
          var tmp10__anonymous__yfiz50_4 = _Updater___init__impl__rbfxm8($composer_51);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_4, measurePolicy_4, Companion_getInstance_1().e5e_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_4, density_4, Companion_getInstance_1().d5e_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_4, layoutDirection_4, Companion_getInstance_1().f5e_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_4, viewConfiguration_4, Companion_getInstance_1().g5e_1);
          $composer_51.m1n();
          tmp7_ReusableComposeNode$composable_4(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_51)), $composer_51, 112 & tmp9_ReusableComposeNode$composable_4 >> 3);
          $composer_51.y1a(2058660585);
          // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
          var tmp3__anonymous__ufb84q_4 = $composer_51;
          var tmp4__anonymous__pkmkx7_7 = 14 & tmp9_ReusableComposeNode$composable_4 >> 9;
          var $composer_52 = tmp3__anonymous__ufb84q_4;
          $composer_52.y1a(-2137368960);
          sourceInformation($composer_52, 'C72@3384L9:Box.kt#2w3rfo');
          if (!((tmp4__anonymous__pkmkx7_7 & 11) === 2) ? true : !$composer_52.l1m()) {
            // Inline function 'com.patriker.icebreathing.StartScreen$composable.<anonymous>.<anonymous>' call
            var tmp18__anonymous__4dy6j8 = BoxScopeInstance_getInstance();
            var tmp19__anonymous__98mtqr = $composer_52;
            var tmp20__anonymous__q2j3lv = 6;
            var $composer_53 = tmp19__anonymous__98mtqr;
            if (!((tmp20__anonymous__q2j3lv & 81) === 16) ? true : !$composer_53.l1m()) {
              // Inline function 'androidx.compose.foundation.layout.Column$composable' call
              var tmp0_Column$composable_1 = null;
              var tmp1_Column$composable_1 = null;
              var tmp2_Column$composable_1 = Companion_getInstance_2().f4e_1;
              var tmp3_Column$composable_2 = $composer_53;
              var modifier_11 = tmp0_Column$composable_1;
              var verticalArrangement_2 = tmp1_Column$composable_1;
              var horizontalAlignment_2 = tmp2_Column$composable_1;
              var $composer_54 = tmp3_Column$composable_2;
              $composer_54.y1a(860130704);
              sourceInformation($composer_54, 'C(Column$composable)P(2,3,1)77@3913L61,78@3979L133:Column.kt#2w3rfo');
              if (!(1 === 0))
                modifier_11 = Companion_getInstance();
              if (!(2 === 0))
                verticalArrangement_2 = Arrangement_getInstance().h7c_1;
              if (!(0 === 0))
                horizontalAlignment_2 = Companion_getInstance_2().e4e_1;
              var measurePolicy_5 = columnMeasurePolicy$composable(verticalArrangement_2, horizontalAlignment_2, $composer_54, 48);
              // Inline function 'androidx.compose.ui.layout.Layout$composable' call
              var tmp0_Layout$composable_5 = modifier_11;
              var tmp1_Layout$composable_5 = $composer_54;
              var tmp2_Layout$composable_5 = 0;
              var modifier_12 = tmp0_Layout$composable_5;
              var $composer_55 = tmp1_Layout$composable_5;
              $composer_55.y1a(1725976829);
              sourceInformation($composer_55, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
              if (!(0 === 0))
                modifier_12 = Companion_getInstance();
              var tmp$ret$48;
              // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
              var tmp0_$get_current$$composable_h5ksy7_5 = get_LocalDensity();
              var tmp1_$get_current$$composable_gn3xww_5 = $composer_55;
              var $composer_56 = tmp1_$get_current$$composable_gn3xww_5;
              sourceInformationMarkerStart($composer_56, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
              var tmp0_22 = $composer_56.w1n(tmp0_$get_current$$composable_h5ksy7_5);
              sourceInformationMarkerEnd($composer_56);
              tmp$ret$48 = tmp0_22;
              var density_5 = tmp$ret$48;
              var tmp$ret$49;
              // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
              var tmp2_$get_current$$composable_g4n2vl_5 = get_LocalLayoutDirection();
              var tmp3_$get_current$$composable_fm67ua_5 = $composer_55;
              var $composer_57 = tmp3_$get_current$$composable_fm67ua_5;
              sourceInformationMarkerStart($composer_57, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
              var tmp0_23 = $composer_57.w1n(tmp2_$get_current$$composable_g4n2vl_5);
              sourceInformationMarkerEnd($composer_57);
              tmp$ret$49 = tmp0_23;
              var layoutDirection_5 = tmp$ret$49;
              var tmp$ret$50;
              // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
              var tmp4_$get_current$$composable_f3pcsz_5 = get_LocalViewConfiguration();
              var tmp5_$get_current$$composable_el8hro_5 = $composer_55;
              var $composer_58 = tmp5_$get_current$$composable_el8hro_5;
              sourceInformationMarkerStart($composer_58, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
              var tmp0_24 = $composer_58.w1n(tmp4_$get_current$$composable_f3pcsz_5);
              sourceInformationMarkerEnd($composer_58);
              tmp$ret$50 = tmp0_24;
              var viewConfiguration_5 = tmp$ret$50;
              // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
              var tmp6_ReusableComposeNode$composable_5 = Companion_getInstance_1().a5e_1;
              var tmp7_ReusableComposeNode$composable_5 = materializerOf(modifier_12);
              var tmp8_ReusableComposeNode$composable_5 = $composer_55;
              var tmp9_ReusableComposeNode$composable_5 = 6 | 7168 & tmp2_Layout$composable_5 << 9;
              var $composer_59 = tmp8_ReusableComposeNode$composable_5;
              var tmp_36 = $composer_59.u1m();
              if (!isInterface(tmp_36, Applier)) {
                invalidApplier();
              }
              $composer_59.g1n();
              if ($composer_59.e1n()) {
                $composer_59.h1n(tmp6_ReusableComposeNode$composable_5);
              } else {
                $composer_59.j1n();
              }
              $composer_59.l1n();
              // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
              var tmp10__anonymous__yfiz50_5 = _Updater___init__impl__rbfxm8($composer_59);
              Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_5, measurePolicy_5, Companion_getInstance_1().e5e_1);
              Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_5, density_5, Companion_getInstance_1().d5e_1);
              Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_5, layoutDirection_5, Companion_getInstance_1().f5e_1);
              Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_5, viewConfiguration_5, Companion_getInstance_1().g5e_1);
              $composer_59.m1n();
              tmp7_ReusableComposeNode$composable_5(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_59)), $composer_59, 112 & tmp9_ReusableComposeNode$composable_5 >> 3);
              $composer_59.y1a(2058660585);
              // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
              var tmp3__anonymous__ufb84q_5 = $composer_59;
              var tmp4__anonymous__pkmkx7_8 = 14 & tmp9_ReusableComposeNode$composable_5 >> 9;
              var $composer_60 = tmp3__anonymous__ufb84q_5;
              $composer_60.y1a(-1163856341);
              sourceInformation($composer_60, 'C79@4027L9:Column.kt#2w3rfo');
              if (!((tmp4__anonymous__pkmkx7_8 & 11) === 2) ? true : !$composer_60.l1m()) {
                // Inline function 'com.patriker.icebreathing.StartScreen$composable.<anonymous>.<anonymous>.<anonymous>' call
                var tmp4__anonymous__pkmkx7_9 = ColumnScopeInstance_getInstance();
                var tmp5__anonymous__kpxxpo_3 = $composer_60;
                var tmp6__anonymous__fv9ai5_3 = 6;
                var $composer_61 = tmp5__anonymous__kpxxpo_3;
                if (!((tmp6__anonymous__fv9ai5_3 & 81) === 16) ? true : !$composer_61.l1m()) {
                  var tmp2_text_1 = StrRes_getInstance().n9k_1;
                  var tmp3_textAlign_1 = Companion_getInstance_3().k3v_1;
                  var tmp_37 = Companion_getInstance();
                  var tmp$ret$51;
                  // Inline function 'androidx.compose.ui.unit.dp' call
                  tmp$ret$51 = _Dp___init__impl__ms3zkb(10);
                  var tmp_38 = tmp$ret$51;
                  var tmp4_modifier_1 = padding$default(tmp_37, tmp_38, null, 2, null);
                  var tmp5_fontWeight_1 = Companion_getInstance_6().t3x_1;
                  var tmp6_color_0 = Companion_getInstance_4().h3a_1;
                  var tmp0_fontSize_1 = get_sp(18);
                  var tmp1_color_1 = Companion_getInstance_4().h3a_1;
                  var tmp7_style_0 = TextStyle_init_$Create$(tmp1_color_1, tmp0_fontSize_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 262140, null);
                  var tmp_39 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_40 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_41 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                  var tmp_42 = _TextOverflow___init__impl__obguoe(0);
                  Text$composable(tmp2_text_1, tmp4_modifier_1, tmp6_color_0, tmp_39, null, tmp5_fontWeight_1, null, tmp_40, null, tmp3_textAlign_1, tmp_41, tmp_42, false, 0, null, tmp7_style_0, $composer_61, 197040, 0, 32216);
                  var tmp$ret$56;
                  // Inline function 'androidx.compose.runtime.remember$composable' call
                  var tmp0_remember$composable_2 = $composer_61;
                  var $composer_62 = tmp0_remember$composable_2;
                  $composer_62.y1a(547886695);
                  sourceInformation($composer_62, 'C(remember$composable):Composables.kt#9igjgp');
                  var tmp$ret$55;
                  // Inline function 'androidx.compose.runtime.cache' call
                  var tmp1_cache_4 = $composer_62;
                  var tmp$ret$54;
                  // Inline function 'kotlin.let' call
                  var tmp0_let_4 = tmp1_cache_4.a1b();
                  // Inline function 'kotlin.contracts.contract' call
                  var tmp$ret$53;
                  // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
                  var tmp_43;
                  if (false ? true : tmp0_let_4 === Companion_getInstance_0().c1b_1) {
                    var tmp$ret$52;
                    // Inline function 'com.patriker.icebreathing.StartScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                    tmp$ret$52 = StartScreen$composable$lambda_8;
                    var value_4 = tmp$ret$52;
                    tmp1_cache_4.b1b(value_4);
                    tmp_43 = value_4;
                  } else {
                    tmp_43 = tmp0_let_4;
                  }
                  tmp$ret$53 = tmp_43;
                  tmp$ret$54 = tmp$ret$53;
                  var tmp_44 = tmp$ret$54;
                  tmp$ret$55 = (tmp_44 == null ? true : isObject(tmp_44)) ? tmp_44 : THROW_CCE();
                  var tmp0_25 = tmp$ret$55;
                  $composer_62.d1b();
                  tmp$ret$56 = tmp0_25;
                  var tmp_45 = tmp$ret$56;
                  var tmp_46 = toList(StartScreen$composable$lambda_1(holdTimes$delegate).x2());
                  var tmp_47 = StartScreen$composable$lambda(numRoundsSelected$delegate);
                  HoldTimeSelector$composable(tmp_45, tmp_46, tmp_47, StartScreen$composable$holdTimesChanged$ref(holdTimes$delegate), $composer_61, 0);
                } else {
                  $composer_61.l1h();
                }
              } else {
                $composer_60.l1h();
              }
              $composer_60.d1b();
              $composer_59.d1b();
              $composer_59.k1n();
              $composer_55.d1b();
              $composer_54.d1b();
            } else {
              $composer_53.l1h();
            }
          } else {
            $composer_52.l1h();
          }
          $composer_52.d1b();
          $composer_51.d1b();
          $composer_51.k1n();
          $composer_47.d1b();
          $composer_46.d1b();
          // Inline function 'androidx.compose.foundation.layout.Row$composable' call
          var tmp_48 = Companion_getInstance();
          var tmp_49 = fillMaxSize$default(tmp_48, 0.0, 1, null);
          var tmp$ret$57;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$57 = _Dp___init__impl__ms3zkb(8);
          var tmp_50 = tmp$ret$57;
          var tmp$ret$58;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$58 = _Dp___init__impl__ms3zkb(8);
          var tmp21_Row$composable = tmp5__anonymous__kpxxpo.i7d(padding$default_0(tmp_49, null, tmp_50, null, tmp$ret$58, 5, null), Companion_getInstance_2().f4e_1);
          var tmp22_Row$composable = null;
          var tmp23_Row$composable = null;
          var tmp24_Row$composable = $composer_11;
          var modifier_13 = tmp21_Row$composable;
          var horizontalArrangement = tmp22_Row$composable;
          var verticalAlignment = tmp23_Row$composable;
          var $composer_63 = tmp24_Row$composable;
          $composer_63.y1a(-636825856);
          sourceInformation($composer_63, 'C(Row$composable)P(2,1,3)78@3913L58,79@3976L130:Row.kt#2w3rfo');
          if (!(0 === 0))
            modifier_13 = Companion_getInstance();
          if (!(2 === 0))
            horizontalArrangement = Arrangement_getInstance().f7c_1;
          if (!(4 === 0))
            verticalAlignment = Companion_getInstance_2().b4e_1;
          var measurePolicy_6 = rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer_63, 0);
          // Inline function 'androidx.compose.ui.layout.Layout$composable' call
          var tmp0_Layout$composable_6 = modifier_13;
          var tmp1_Layout$composable_6 = $composer_63;
          var tmp2_Layout$composable_6 = 0;
          var modifier_14 = tmp0_Layout$composable_6;
          var $composer_64 = tmp1_Layout$composable_6;
          $composer_64.y1a(1725976829);
          sourceInformation($composer_64, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
          if (!(0 === 0))
            modifier_14 = Companion_getInstance();
          var tmp$ret$59;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp0_$get_current$$composable_h5ksy7_6 = get_LocalDensity();
          var tmp1_$get_current$$composable_gn3xww_6 = $composer_64;
          var $composer_65 = tmp1_$get_current$$composable_gn3xww_6;
          sourceInformationMarkerStart($composer_65, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_26 = $composer_65.w1n(tmp0_$get_current$$composable_h5ksy7_6);
          sourceInformationMarkerEnd($composer_65);
          tmp$ret$59 = tmp0_26;
          var density_6 = tmp$ret$59;
          var tmp$ret$60;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp2_$get_current$$composable_g4n2vl_6 = get_LocalLayoutDirection();
          var tmp3_$get_current$$composable_fm67ua_6 = $composer_64;
          var $composer_66 = tmp3_$get_current$$composable_fm67ua_6;
          sourceInformationMarkerStart($composer_66, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_27 = $composer_66.w1n(tmp2_$get_current$$composable_g4n2vl_6);
          sourceInformationMarkerEnd($composer_66);
          tmp$ret$60 = tmp0_27;
          var layoutDirection_6 = tmp$ret$60;
          var tmp$ret$61;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp4_$get_current$$composable_f3pcsz_6 = get_LocalViewConfiguration();
          var tmp5_$get_current$$composable_el8hro_6 = $composer_64;
          var $composer_67 = tmp5_$get_current$$composable_el8hro_6;
          sourceInformationMarkerStart($composer_67, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_28 = $composer_67.w1n(tmp4_$get_current$$composable_f3pcsz_6);
          sourceInformationMarkerEnd($composer_67);
          tmp$ret$61 = tmp0_28;
          var viewConfiguration_6 = tmp$ret$61;
          // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
          var tmp6_ReusableComposeNode$composable_6 = Companion_getInstance_1().a5e_1;
          var tmp7_ReusableComposeNode$composable_6 = materializerOf(modifier_14);
          var tmp8_ReusableComposeNode$composable_6 = $composer_64;
          var tmp9_ReusableComposeNode$composable_6 = 6 | 7168 & tmp2_Layout$composable_6 << 9;
          var $composer_68 = tmp8_ReusableComposeNode$composable_6;
          var tmp_51 = $composer_68.u1m();
          if (!isInterface(tmp_51, Applier)) {
            invalidApplier();
          }
          $composer_68.g1n();
          if ($composer_68.e1n()) {
            $composer_68.h1n(tmp6_ReusableComposeNode$composable_6);
          } else {
            $composer_68.j1n();
          }
          $composer_68.l1n();
          // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
          var tmp10__anonymous__yfiz50_6 = _Updater___init__impl__rbfxm8($composer_68);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_6, measurePolicy_6, Companion_getInstance_1().e5e_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_6, density_6, Companion_getInstance_1().d5e_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_6, layoutDirection_6, Companion_getInstance_1().f5e_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_6, viewConfiguration_6, Companion_getInstance_1().g5e_1);
          $composer_68.m1n();
          tmp7_ReusableComposeNode$composable_6(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_68)), $composer_68, 112 & tmp9_ReusableComposeNode$composable_6 >> 3);
          $composer_68.y1a(2058660585);
          // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
          var tmp3__anonymous__ufb84q_6 = $composer_68;
          var tmp4__anonymous__pkmkx7_10 = 14 & tmp9_ReusableComposeNode$composable_6 >> 9;
          var $composer_69 = tmp3__anonymous__ufb84q_6;
          $composer_69.y1a(-678309503);
          sourceInformation($composer_69, 'C80@4021L9:Row.kt#2w3rfo');
          if (!((tmp4__anonymous__pkmkx7_10 & 11) === 2) ? true : !$composer_69.l1m()) {
            // Inline function 'com.patriker.icebreathing.StartScreen$composable.<anonymous>.<anonymous>' call
            var tmp25__anonymous__1t3vk8 = RowScopeInstance_getInstance();
            var tmp26__anonymous__31krnb = $composer_69;
            var tmp27__anonymous__7w9euu = 6;
            var $composer_70 = tmp26__anonymous__31krnb;
            var $dirty_3 = tmp27__anonymous__7w9euu;
            if ((tmp27__anonymous__7w9euu & 14) === 0)
              $dirty_3 = $dirty_3 | ($composer_70.z1a(tmp25__anonymous__1t3vk8) ? 4 : 2);
            if (!(($dirty_3 & 91) === 18) ? true : !$composer_70.l1m()) {
              var tmp_52 = Companion_getInstance();
              Spacer$composable(tmp25__anonymous__1t3vk8.t7e(tmp_52, 1.0, false, 2, null), $composer_70, 0);
              var tmp0_shape = get_CircleShape();
              var tmp_53 = Companion_getInstance();
              var tmp$ret$62;
              // Inline function 'androidx.compose.ui.unit.dp' call
              tmp$ret$62 = _Dp___init__impl__ms3zkb(92);
              var tmp1_modifier_0 = size_1(tmp_53, tmp$ret$62);
              var tmp$ret$67;
              // Inline function 'androidx.compose.runtime.remember$composable' call
              var tmp0_remember$composable_3 = $composer_70;
              var $composer_71 = tmp0_remember$composable_3;
              $composer_71.y1a(-1603429786);
              sourceInformation($composer_71, 'C(remember$composable)P(1):Composables.kt#9igjgp');
              var invalid = false;
              var indexedObject = [finishedSelection, numBreaths$delegate, numRoundsSelected$delegate, holdTimes$delegate];
              var inductionVariable = 0;
              var last = indexedObject.length;
              while (inductionVariable < last) {
                var key = indexedObject[inductionVariable];
                inductionVariable = inductionVariable + 1 | 0;
                invalid = !!(invalid | $composer_71.z1a(key));
              }
              var tmp$ret$66;
              // Inline function 'androidx.compose.runtime.cache' call
              var tmp1_cache_5 = $composer_71;
              var tmp2_cache_1 = invalid;
              var tmp$ret$65;
              // Inline function 'kotlin.let' call
              var tmp0_let_5 = tmp1_cache_5.a1b();
              // Inline function 'kotlin.contracts.contract' call
              var tmp$ret$64;
              // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
              var tmp_54;
              if (tmp2_cache_1 ? true : tmp0_let_5 === Companion_getInstance_0().c1b_1) {
                var tmp$ret$63;
                // Inline function 'com.patriker.icebreathing.StartScreen$composable.<anonymous>.<anonymous>.<anonymous>' call
                tmp$ret$63 = StartScreen$composable$lambda_9(finishedSelection, numBreaths$delegate, numRoundsSelected$delegate, holdTimes$delegate);
                var value_5 = tmp$ret$63;
                tmp1_cache_5.b1b(value_5);
                tmp_54 = value_5;
              } else {
                tmp_54 = tmp0_let_5;
              }
              tmp$ret$64 = tmp_54;
              tmp$ret$65 = tmp$ret$64;
              var tmp_55 = tmp$ret$65;
              tmp$ret$66 = (tmp_55 == null ? true : isObject(tmp_55)) ? tmp_55 : THROW_CCE();
              var tmp0_29 = tmp$ret$66;
              $composer_71.d1b();
              tmp$ret$67 = tmp0_29;
              var tmp_56 = tmp$ret$67;
              Button$composable(tmp_56, tmp1_modifier_0, false, null, null, tmp0_shape, null, null, null, ComposableSingletons$StartScreenKt_getInstance().o9n_1, $composer_70, 805306416, 476);
              var tmp_57 = Companion_getInstance();
              Spacer$composable(tmp25__anonymous__1t3vk8.t7e(tmp_57, 1.0, false, 2, null), $composer_70, 0);
            } else {
              $composer_70.l1h();
            }
          } else {
            $composer_69.l1h();
          }
          $composer_69.d1b();
          $composer_68.d1b();
          $composer_68.k1n();
          $composer_64.d1b();
          $composer_63.d1b();
        } else {
          $composer_11.l1h();
        }
      } else {
        $composer_10.l1h();
      }
      $composer_10.d1b();
      $composer_9.d1b();
      $composer_9.k1n();
      $composer_5.d1b();
      $composer_4.d1b();
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
      tmp0_safe_receiver.g1p(StartScreen$composable$lambda$ref(sessionData, finishedSelection, $changed));
    }
  }
  function TimeSliderCard$composable(initialTime, onTimeChanged, round, $composer, $changed) {
    init_properties_StartScreen_kt_8883gm();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(-319347540);
    sourceInformation($composer_0, 'C(TimeSliderCard$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.q1n(initialTime) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(onTimeChanged) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.q1n(round) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(-319347540, $dirty, -1, 'com.patriker.icebreathing.TimeSliderCard$composable (StartScreen.kt:154)');
      }
      var minValue = 30.0;
      var maxValue = 600.0;
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
        // Inline function 'com.patriker.icebreathing.TimeSliderCard$composable.<anonymous>' call
        var tmp_0;
        if (initialTime <= 30) {
          tmp_0 = mutableStateOf$default(0.0, null, 2, null);
        } else {
          var tmp_1 = initialTime;
          tmp_0 = mutableStateOf$default(tmp_1, null, 2, null);
        }
        tmp$ret$0 = tmp_0;
        var value = tmp$ret$0;
        tmp1_cache.b1b(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      tmp$ret$1 = tmp;
      tmp$ret$2 = tmp$ret$1;
      var tmp_2 = tmp$ret$2;
      tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.d1b();
      tmp$ret$4 = tmp0;
      var sliderValue$delegate = tmp$ret$4;
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp1_remember$composable = $composer_0;
      var tmp2_remember$composable = 112 & $dirty << 3;
      var $composer_2 = tmp1_remember$composable;
      $composer_2.y1a(-1124426577);
      sourceInformation($composer_2, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = !!($composer_2.z1a(sliderValue$delegate) | $composer_2.z1a(initialTime));
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$5;
        // Inline function 'com.patriker.icebreathing.TimeSliderCard$composable.<anonymous>' call
        tmp$ret$5 = TimeSliderCard$composable$slambda_0(initialTime, sliderValue$delegate, null);
        var value_0 = tmp$ret$5;
        tmp1_cache_0.b1b(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = tmp0_let_0;
      }
      tmp$ret$6 = tmp_3;
      tmp$ret$7 = tmp$ret$6;
      var tmp_4 = tmp$ret$7;
      tmp$ret$8 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.d1b();
      tmp$ret$9 = tmp0_0;
      LaunchedEffect$composable(initialTime, tmp$ret$9, $composer_0, 14 & $dirty);
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
        // Inline function 'com.patriker.icebreathing.TimeSliderCard$composable.<anonymous>' call
        tmp$ret$10 = derivedStateOf(TimeSliderCard$composable$lambda_4(sliderValue$delegate));
        var value_1 = tmp$ret$10;
        tmp1_cache_1.b1b(value_1);
        tmp_5 = value_1;
      } else {
        tmp_5 = tmp0_let_1;
      }
      tmp$ret$11 = tmp_5;
      tmp$ret$12 = tmp$ret$11;
      var tmp_6 = tmp$ret$12;
      tmp$ret$13 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      var tmp0_1 = tmp$ret$13;
      $composer_3.d1b();
      tmp$ret$14 = tmp0_1;
      var sliderSeconds$delegate = tmp$ret$14;
      var tmp$ret$19;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp4_remember$composable = $composer_0;
      var $composer_4 = tmp4_remember$composable;
      $composer_4.y1a(547886695);
      sourceInformation($composer_4, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$18;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_2 = $composer_4;
      var tmp$ret$17;
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = tmp1_cache_2.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_7;
      if (false ? true : tmp0_let_2 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$15;
        // Inline function 'com.patriker.icebreathing.TimeSliderCard$composable.<anonymous>' call
        tmp$ret$15 = derivedStateOf(TimeSliderCard$composable$lambda_5(sliderSeconds$delegate));
        var value_2 = tmp$ret$15;
        tmp1_cache_2.b1b(value_2);
        tmp_7 = value_2;
      } else {
        tmp_7 = tmp0_let_2;
      }
      tmp$ret$16 = tmp_7;
      tmp$ret$17 = tmp$ret$16;
      var tmp_8 = tmp$ret$17;
      tmp$ret$18 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
      var tmp0_2 = tmp$ret$18;
      $composer_4.d1b();
      tmp$ret$19 = tmp0_2;
      var timeText$delegate = tmp$ret$19;
      var tmp_9 = Companion_getInstance();
      var tmp$ret$20;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$20 = _Dp___init__impl__ms3zkb(100);
      var tmp_10 = tmp$ret$20;
      var tmp$ret$21;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$21 = _Dp___init__impl__ms3zkb(600);
      var tmp_11 = fillMaxWidth(widthIn(tmp_9, tmp_10, tmp$ret$21), 0.95);
      var tmp$ret$22;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$22 = _Dp___init__impl__ms3zkb(72);
      var tmp_12 = height(tmp_11, tmp$ret$22);
      var tmp$ret$23;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$23 = _Dp___init__impl__ms3zkb(16);
      var tmp_13 = tmp$ret$23;
      var tmp_14 = padding$default(tmp_12, tmp_13, null, 2, null);
      var tmp_15 = MaterialTheme_getInstance().e93($composer_0, 6).w96();
      var tmp_16 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_17 = _Dp___init__impl__ms3zkb(0.0);
      var tmp$ret$30;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$29;
      // Inline function 'com.patriker.icebreathing.TimeSliderCard$composable.<anonymous>' call
      var tmp_18 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_18, 1905261634, true, TimeSliderCard$composable$lambda_6(round, minValue, maxValue, $dirty, sliderValue$delegate, onTimeChanged, sliderSeconds$delegate, timeText$delegate));
      var tmp$ret$28;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_5 = tmp0_remember$composable_0;
      $composer_5.y1a(-838505973);
      sourceInformation($composer_5, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$27;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_3 = $composer_5;
      var tmp2_cache_0 = $composer_5.z1a(dispatchReceiver);
      var tmp$ret$26;
      // Inline function 'kotlin.let' call
      var tmp0_let_3 = tmp1_cache_3.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$25;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_19;
      if (tmp2_cache_0 ? true : tmp0_let_3 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$24;
        // Inline function 'com.patriker.icebreathing.TimeSliderCard$composable.<anonymous>.<anonymous>' call
        tmp$ret$24 = ComposableLambda$invoke$ref_5(dispatchReceiver);
        var value_3 = tmp$ret$24;
        tmp1_cache_3.b1b(value_3);
        tmp_19 = value_3;
      } else {
        tmp_19 = tmp0_let_3;
      }
      tmp$ret$25 = tmp_19;
      tmp$ret$26 = tmp$ret$25;
      var tmp_20 = tmp$ret$26;
      tmp$ret$27 = (tmp_20 == null ? true : isObject(tmp_20)) ? tmp_20 : THROW_CCE();
      var tmp0_3 = tmp$ret$27;
      $composer_5.d1b();
      tmp$ret$28 = tmp0_3;
      tmp$ret$29 = tmp$ret$28;
      tmp$ret$30 = tmp$ret$29;
      Card$composable(tmp_14, null, tmp_15, tmp_16, null, tmp_17, tmp$ret$30, $composer_0, 1572870, 58);
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
      tmp0_safe_receiver.g1p(TimeSliderCard$composable$lambda$ref(initialTime, onTimeChanged, round, $changed));
    }
  }
  function HoldTimeSelector$composable(onSelected, buttonLabels, numRoundsSelected, onTimeChanged, $composer, $changed) {
    init_properties_StartScreen_kt_8883gm();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(-1037022261);
    sourceInformation($composer_0, 'C(HoldTimeSelector$composable)P(2)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(onSelected) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(buttonLabels) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.q1n(numRoundsSelected) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.z1a(onTimeChanged) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(-1037022261, $dirty, -1, 'com.patriker.icebreathing.HoldTimeSelector$composable (StartScreen.kt:203)');
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
        // Inline function 'com.patriker.icebreathing.HoldTimeSelector$composable.<anonymous>' call
        tmp$ret$0 = mutableStateOf$default(-1, null, 2, null);
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
      var selectedIndex$delegate = tmp$ret$4;
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
      if (false ? true : tmp0_let_0 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$5;
        // Inline function 'com.patriker.icebreathing.HoldTimeSelector$composable.<anonymous>' call
        tmp$ret$5 = toMutableStateList(buttonLabels);
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
      var buttonSecs = tmp$ret$9;
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
      var tmp_3;
      if (false ? true : tmp0_let_1 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$10;
        // Inline function 'com.patriker.icebreathing.HoldTimeSelector$composable.<anonymous>' call
        var tmp_4 = ButtonClicked_init_$Create$(false, 0, 3, null);
        tmp$ret$10 = mutableStateOf$default(tmp_4, null, 2, null);
        var value_1 = tmp$ret$10;
        tmp1_cache_1.b1b(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = tmp0_let_1;
      }
      tmp$ret$11 = tmp_3;
      tmp$ret$12 = tmp$ret$11;
      var tmp_5 = tmp$ret$12;
      tmp$ret$13 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      var tmp0_1 = tmp$ret$13;
      $composer_3.d1b();
      tmp$ret$14 = tmp0_1;
      var lastClickedIndex$delegate = tmp$ret$14;
      var tmp$ret$19;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_4 = tmp3_remember$composable;
      $composer_4.y1a(547886695);
      sourceInformation($composer_4, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$18;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_2 = $composer_4;
      var tmp$ret$17;
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = tmp1_cache_2.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_6;
      if (false ? true : tmp0_let_2 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$15;
        // Inline function 'com.patriker.icebreathing.HoldTimeSelector$composable.<anonymous>' call
        tmp$ret$15 = mutableStateOf$default(0, null, 2, null);
        var value_2 = tmp$ret$15;
        tmp1_cache_2.b1b(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = tmp0_let_2;
      }
      tmp$ret$16 = tmp_6;
      tmp$ret$17 = tmp$ret$16;
      var tmp_7 = tmp$ret$17;
      tmp$ret$18 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
      var tmp0_2 = tmp$ret$18;
      $composer_4.d1b();
      tmp$ret$19 = tmp0_2;
      var lastClickedTime$delegate = tmp$ret$19;
      var tmp$ret$24;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp4_remember$composable = $composer_0;
      var $composer_5 = tmp4_remember$composable;
      $composer_5.y1a(547886695);
      sourceInformation($composer_5, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$23;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_3 = $composer_5;
      var tmp$ret$22;
      // Inline function 'kotlin.let' call
      var tmp0_let_3 = tmp1_cache_3.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$21;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_8;
      if (false ? true : tmp0_let_3 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$20;
        // Inline function 'com.patriker.icebreathing.HoldTimeSelector$composable.<anonymous>' call
        tmp$ret$20 = mutableStateOf$default(1, null, 2, null);
        var value_3 = tmp$ret$20;
        tmp1_cache_3.b1b(value_3);
        tmp_8 = value_3;
      } else {
        tmp_8 = tmp0_let_3;
      }
      tmp$ret$21 = tmp_8;
      tmp$ret$22 = tmp$ret$21;
      var tmp_9 = tmp$ret$22;
      tmp$ret$23 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
      var tmp0_3 = tmp$ret$23;
      $composer_5.d1b();
      tmp$ret$24 = tmp0_3;
      var lastClickedRound$delegate = tmp$ret$24;
      var tmp_10 = HoldTimeSelector$composable$lambda_1(lastClickedIndex$delegate);
      var tmp$ret$29;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp5_remember$composable = $composer_0;
      var $composer_6 = tmp5_remember$composable;
      $composer_6.y1a(-1603429786);
      sourceInformation($composer_6, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var indexedObject = [lastClickedIndex$delegate, lastClickedTime$delegate, buttonSecs, lastClickedRound$delegate];
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var key = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid = !!(invalid | $composer_6.z1a(key));
      }
      var tmp$ret$28;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_4 = $composer_6;
      var tmp2_cache = invalid;
      var tmp$ret$27;
      // Inline function 'kotlin.let' call
      var tmp0_let_4 = tmp1_cache_4.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$26;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_11;
      if (tmp2_cache ? true : tmp0_let_4 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$25;
        // Inline function 'com.patriker.icebreathing.HoldTimeSelector$composable.<anonymous>' call
        tmp$ret$25 = HoldTimeSelector$composable$slambda_0(buttonSecs, lastClickedIndex$delegate, lastClickedTime$delegate, lastClickedRound$delegate, null);
        var value_4 = tmp$ret$25;
        tmp1_cache_4.b1b(value_4);
        tmp_11 = value_4;
      } else {
        tmp_11 = tmp0_let_4;
      }
      tmp$ret$26 = tmp_11;
      tmp$ret$27 = tmp$ret$26;
      var tmp_12 = tmp$ret$27;
      tmp$ret$28 = (tmp_12 == null ? true : isObject(tmp_12)) ? tmp_12 : THROW_CCE();
      var tmp0_4 = tmp$ret$28;
      $composer_6.d1b();
      tmp$ret$29 = tmp0_4;
      LaunchedEffect$composable(tmp_10, tmp$ret$29, $composer_0, 0);
      var tmp$ret$34;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp6_remember$composable = $composer_0;
      var tmp7_remember$composable = 112 & $dirty >> 3;
      var $composer_7 = tmp6_remember$composable;
      $composer_7.y1a(-1058148781);
      sourceInformation($composer_7, 'C(remember$composable)P(1,2,3):Composables.kt#9igjgp');
      var tmp$ret$33;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_5 = $composer_7;
      var tmp2_cache_0 = !!(!!($composer_7.z1a(buttonSecs) | $composer_7.z1a(numRoundsSelected)) | $composer_7.z1a(lastClickedIndex$delegate));
      var tmp$ret$32;
      // Inline function 'kotlin.let' call
      var tmp0_let_5 = tmp1_cache_5.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$31;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_13;
      if (tmp2_cache_0 ? true : tmp0_let_5 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$30;
        // Inline function 'com.patriker.icebreathing.HoldTimeSelector$composable.<anonymous>' call
        tmp$ret$30 = HoldTimeSelector$composable$slambda_2(buttonSecs, numRoundsSelected, lastClickedIndex$delegate, null);
        var value_5 = tmp$ret$30;
        tmp1_cache_5.b1b(value_5);
        tmp_13 = value_5;
      } else {
        tmp_13 = tmp0_let_5;
      }
      tmp$ret$31 = tmp_13;
      tmp$ret$32 = tmp$ret$31;
      var tmp_14 = tmp$ret$32;
      tmp$ret$33 = (tmp_14 == null ? true : isObject(tmp_14)) ? tmp_14 : THROW_CCE();
      var tmp0_5 = tmp$ret$33;
      $composer_7.d1b();
      tmp$ret$34 = tmp0_5;
      LaunchedEffect$composable(numRoundsSelected, tmp$ret$34, $composer_0, 14 & $dirty >> 6);
      // Inline function 'androidx.compose.foundation.layout.Column$composable' call
      var tmp8_Column$composable = fillMaxWidth(Companion_getInstance(), 1.0);
      var tmp9_Column$composable = null;
      var tmp10_Column$composable = Companion_getInstance_2().f4e_1;
      var tmp11_Column$composable = $composer_0;
      var modifier = tmp8_Column$composable;
      var verticalArrangement = tmp9_Column$composable;
      var horizontalAlignment = tmp10_Column$composable;
      var $composer_8 = tmp11_Column$composable;
      $composer_8.y1a(860130704);
      sourceInformation($composer_8, 'C(Column$composable)P(2,3,1)77@3913L61,78@3979L133:Column.kt#2w3rfo');
      if (!(0 === 0))
        modifier = Companion_getInstance();
      if (!(2 === 0))
        verticalArrangement = Arrangement_getInstance().h7c_1;
      if (!(0 === 0))
        horizontalAlignment = Companion_getInstance_2().e4e_1;
      var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_8, 48);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp0_Layout$composable = modifier;
      var tmp1_Layout$composable = $composer_8;
      var tmp2_Layout$composable = 48;
      var modifier_0 = tmp0_Layout$composable;
      var $composer_9 = tmp1_Layout$composable;
      $composer_9.y1a(1725976829);
      sourceInformation($composer_9, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance();
      var tmp$ret$35;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_9;
      var $composer_10 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_10, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_6 = $composer_10.w1n(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_10);
      tmp$ret$35 = tmp0_6;
      var density = tmp$ret$35;
      var tmp$ret$36;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua = $composer_9;
      var $composer_11 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_11, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_7 = $composer_11.w1n(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_11);
      tmp$ret$36 = tmp0_7;
      var layoutDirection = tmp$ret$36;
      var tmp$ret$37;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro = $composer_9;
      var $composer_12 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_12, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_8 = $composer_12.w1n(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_12);
      tmp$ret$37 = tmp0_8;
      var viewConfiguration = tmp$ret$37;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_1().a5e_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
      var tmp8_ReusableComposeNode$composable = $composer_9;
      var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
      var $composer_13 = tmp8_ReusableComposeNode$composable;
      var tmp_15 = $composer_13.u1m();
      if (!isInterface(tmp_15, Applier)) {
        invalidApplier();
      }
      $composer_13.g1n();
      if ($composer_13.e1n()) {
        $composer_13.h1n(tmp6_ReusableComposeNode$composable);
      } else {
        $composer_13.j1n();
      }
      $composer_13.l1n();
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_1().e5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_1().d5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_1().f5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_1().g5e_1);
      $composer_13.m1n();
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_13)), $composer_13, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_13.y1a(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
      var tmp3__anonymous__ufb84q = $composer_13;
      var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_14 = tmp3__anonymous__ufb84q;
      $composer_14.y1a(-1163856341);
      sourceInformation($composer_14, 'C79@4027L9:Column.kt#2w3rfo');
      if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_14.l1m()) {
        // Inline function 'com.patriker.icebreathing.HoldTimeSelector$composable.<anonymous>' call
        var tmp12__anonymous__oq5opy = ColumnScopeInstance_getInstance();
        var tmp13__anonymous__jvh1if = $composer_14;
        var tmp14__anonymous__f0seaw = 6;
        var $composer_15 = tmp13__anonymous__jvh1if;
        var $dirty_0 = tmp14__anonymous__f0seaw;
        if ((tmp14__anonymous__f0seaw & 14) === 0)
          $dirty_0 = $dirty_0 | ($composer_15.z1a(tmp12__anonymous__oq5opy) ? 4 : 2);
        if (!(($dirty_0 & 91) === 18) ? true : !$composer_15.l1m()) {
          // Inline function 'androidx.compose.foundation.layout.Row$composable' call
          var tmp_16 = Companion_getInstance();
          var tmp$ret$38;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$38 = _Dp___init__impl__ms3zkb(8);
          var tmp0_Row$composable = fillMaxWidth(tmp12__anonymous__oq5opy.i7d(padding_0(tmp_16, tmp$ret$38), Companion_getInstance_2().f4e_1), 0.9);
          var tmp1_Row$composable = null;
          var tmp2_Row$composable = null;
          var tmp3_Row$composable = $composer_15;
          var modifier_1 = tmp0_Row$composable;
          var horizontalArrangement = tmp1_Row$composable;
          var verticalAlignment = tmp2_Row$composable;
          var $composer_16 = tmp3_Row$composable;
          $composer_16.y1a(-636825856);
          sourceInformation($composer_16, 'C(Row$composable)P(2,1,3)78@3913L58,79@3976L130:Row.kt#2w3rfo');
          if (!(0 === 0))
            modifier_1 = Companion_getInstance();
          if (!(2 === 0))
            horizontalArrangement = Arrangement_getInstance().f7c_1;
          if (!(4 === 0))
            verticalAlignment = Companion_getInstance_2().b4e_1;
          var measurePolicy_0 = rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer_16, 0);
          // Inline function 'androidx.compose.ui.layout.Layout$composable' call
          var tmp0_Layout$composable_0 = modifier_1;
          var tmp1_Layout$composable_0 = $composer_16;
          var tmp2_Layout$composable_0 = 0;
          var modifier_2 = tmp0_Layout$composable_0;
          var $composer_17 = tmp1_Layout$composable_0;
          $composer_17.y1a(1725976829);
          sourceInformation($composer_17, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
          if (!(0 === 0))
            modifier_2 = Companion_getInstance();
          var tmp$ret$39;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp0_$get_current$$composable_h5ksy7_0 = get_LocalDensity();
          var tmp1_$get_current$$composable_gn3xww_0 = $composer_17;
          var $composer_18 = tmp1_$get_current$$composable_gn3xww_0;
          sourceInformationMarkerStart($composer_18, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_9 = $composer_18.w1n(tmp0_$get_current$$composable_h5ksy7_0);
          sourceInformationMarkerEnd($composer_18);
          tmp$ret$39 = tmp0_9;
          var density_0 = tmp$ret$39;
          var tmp$ret$40;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp2_$get_current$$composable_g4n2vl_0 = get_LocalLayoutDirection();
          var tmp3_$get_current$$composable_fm67ua_0 = $composer_17;
          var $composer_19 = tmp3_$get_current$$composable_fm67ua_0;
          sourceInformationMarkerStart($composer_19, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_10 = $composer_19.w1n(tmp2_$get_current$$composable_g4n2vl_0);
          sourceInformationMarkerEnd($composer_19);
          tmp$ret$40 = tmp0_10;
          var layoutDirection_0 = tmp$ret$40;
          var tmp$ret$41;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp4_$get_current$$composable_f3pcsz_0 = get_LocalViewConfiguration();
          var tmp5_$get_current$$composable_el8hro_0 = $composer_17;
          var $composer_20 = tmp5_$get_current$$composable_el8hro_0;
          sourceInformationMarkerStart($composer_20, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_11 = $composer_20.w1n(tmp4_$get_current$$composable_f3pcsz_0);
          sourceInformationMarkerEnd($composer_20);
          tmp$ret$41 = tmp0_11;
          var viewConfiguration_0 = tmp$ret$41;
          // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
          var tmp6_ReusableComposeNode$composable_0 = Companion_getInstance_1().a5e_1;
          var tmp7_ReusableComposeNode$composable_0 = materializerOf(modifier_2);
          var tmp8_ReusableComposeNode$composable_0 = $composer_17;
          var tmp9_ReusableComposeNode$composable_0 = 6 | 7168 & tmp2_Layout$composable_0 << 9;
          var $composer_21 = tmp8_ReusableComposeNode$composable_0;
          var tmp_17 = $composer_21.u1m();
          if (!isInterface(tmp_17, Applier)) {
            invalidApplier();
          }
          $composer_21.g1n();
          if ($composer_21.e1n()) {
            $composer_21.h1n(tmp6_ReusableComposeNode$composable_0);
          } else {
            $composer_21.j1n();
          }
          $composer_21.l1n();
          // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
          var tmp10__anonymous__yfiz50_0 = _Updater___init__impl__rbfxm8($composer_21);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, measurePolicy_0, Companion_getInstance_1().e5e_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, density_0, Companion_getInstance_1().d5e_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, layoutDirection_0, Companion_getInstance_1().f5e_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, viewConfiguration_0, Companion_getInstance_1().g5e_1);
          $composer_21.m1n();
          tmp7_ReusableComposeNode$composable_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_21)), $composer_21, 112 & tmp9_ReusableComposeNode$composable_0 >> 3);
          $composer_21.y1a(2058660585);
          // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
          var tmp3__anonymous__ufb84q_0 = $composer_21;
          var tmp4__anonymous__pkmkx7_0 = 14 & tmp9_ReusableComposeNode$composable_0 >> 9;
          var $composer_22 = tmp3__anonymous__ufb84q_0;
          $composer_22.y1a(-678309503);
          sourceInformation($composer_22, 'C80@4021L9:Row.kt#2w3rfo');
          if (!((tmp4__anonymous__pkmkx7_0 & 11) === 2) ? true : !$composer_22.l1m()) {
            // Inline function 'com.patriker.icebreathing.HoldTimeSelector$composable.<anonymous>.<anonymous>' call
            var tmp4__anonymous__pkmkx7_1 = RowScopeInstance_getInstance();
            var tmp5__anonymous__kpxxpo = $composer_22;
            var tmp6__anonymous__fv9ai5 = 6;
            var $composer_23 = tmp5__anonymous__kpxxpo;
            var $dirty_1 = tmp6__anonymous__fv9ai5;
            if ((tmp6__anonymous__fv9ai5 & 14) === 0)
              $dirty_1 = $dirty_1 | ($composer_23.z1a(tmp4__anonymous__pkmkx7_1) ? 4 : 2);
            if (!(($dirty_1 & 91) === 18) ? true : !$composer_23.l1m()) {
              var tmp_18 = Companion_getInstance();
              Spacer$composable(tmp4__anonymous__pkmkx7_1.t7e(tmp_18, 1.0, false, 2, null), $composer_23, 0);
              $composer_23.y1a(-2069351804);
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_forEach = until(0, numRoundsSelected);
              var inductionVariable_0 = tmp0_forEach.j1_1;
              var last_0 = tmp0_forEach.k1_1;
              if (inductionVariable_0 <= last_0)
                do {
                  var element = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'com.patriker.icebreathing.HoldTimeSelector$composable.<anonymous>.<anonymous>.<anonymous>' call
                  var tmp_19 = Companion_getInstance();
                  var tmp$ret$42;
                  // Inline function 'androidx.compose.ui.unit.dp' call
                  tmp$ret$42 = _Dp___init__impl__ms3zkb(2);
                  var tmp_20 = tmp$ret$42;
                  var tmp$ret$43;
                  // Inline function 'androidx.compose.ui.unit.dp' call
                  tmp$ret$43 = _Dp___init__impl__ms3zkb(1);
                  var tmp0_modifier = padding(tmp_19, tmp_20, tmp$ret$43);
                  var tmp$ret$44;
                  // Inline function 'androidx.compose.ui.unit.dp' call
                  tmp$ret$44 = _Dp___init__impl__ms3zkb(4);
                  var tmp1_shape = RoundedCornerShape(tmp$ret$44);
                  var tmp$ret$45;
                  // Inline function 'androidx.compose.ui.unit.dp' call
                  tmp$ret$45 = _Dp___init__impl__ms3zkb(1);
                  var tmp_21 = tmp$ret$45;
                  var tmp_22;
                  if (HoldTimeSelector$composable$lambda(selectedIndex$delegate) === element) {
                    $composer_23.y1a(-1310343567);
                    var tmp0_group = MaterialTheme_getInstance().e93($composer_23, 6).u96();
                    $composer_23.d1b();
                    tmp_22 = tmp0_group;
                  } else {
                    $composer_23.y1a(-1310343479);
                    var tmp1_group = MaterialTheme_getInstance().e93($composer_23, 6).s93();
                    $composer_23.d1b();
                    tmp_22 = tmp1_group;
                  }
                  var tmp2_border = BorderStroke(tmp_21, tmp_22);
                  var tmp_23;
                  if (HoldTimeSelector$composable$lambda(selectedIndex$delegate) === element) {
                    $composer_23.y1a(-1310343391);
                    var tmp_24 = ButtonDefaults_getInstance();
                    var tmp_25 = MaterialTheme_getInstance().e93($composer_23, 6).s93();
                    var tmp_26 = Companion_getInstance_4().h3a_1;
                    var tmp2_group = tmp_24.x92(tmp_25, tmp_26, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_23, 3120, 4);
                    $composer_23.d1b();
                    tmp_23 = tmp2_group;
                  } else {
                    $composer_23.y1a(-1310343097);
                    var tmp_27 = ButtonDefaults_getInstance();
                    var tmp_28 = MaterialTheme_getInstance().e93($composer_23, 6).y3w();
                    var tmp_29 = MaterialTheme_getInstance().e93($composer_23, 6).u96();
                    var tmp3_group = tmp_27.x92(tmp_28, tmp_29, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_23, 3072, 4);
                    $composer_23.d1b();
                    tmp_23 = tmp3_group;
                  }
                  var tmp3_colors = tmp_23;
                  var tmp$ret$50;
                  // Inline function 'androidx.compose.runtime.remember$composable' call
                  var tmp0_remember$composable_0 = $composer_23;
                  var $composer_24 = tmp0_remember$composable_0;
                  $composer_24.y1a(-1603429786);
                  sourceInformation($composer_24, 'C(remember$composable)P(1):Composables.kt#9igjgp');
                  var invalid_0 = false;
                  var indexedObject_0 = [selectedIndex$delegate, lastClickedIndex$delegate, onSelected, element];
                  var inductionVariable_1 = 0;
                  var last_1 = indexedObject_0.length;
                  while (inductionVariable_1 < last_1) {
                    var key_0 = indexedObject_0[inductionVariable_1];
                    inductionVariable_1 = inductionVariable_1 + 1 | 0;
                    invalid_0 = !!(invalid_0 | $composer_24.z1a(key_0));
                  }
                  var tmp$ret$49;
                  // Inline function 'androidx.compose.runtime.cache' call
                  var tmp1_cache_6 = $composer_24;
                  var tmp2_cache_1 = invalid_0;
                  var tmp$ret$48;
                  // Inline function 'kotlin.let' call
                  var tmp0_let_6 = tmp1_cache_6.a1b();
                  // Inline function 'kotlin.contracts.contract' call
                  var tmp$ret$47;
                  // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
                  var tmp_30;
                  if (tmp2_cache_1 ? true : tmp0_let_6 === Companion_getInstance_0().c1b_1) {
                    var tmp$ret$46;
                    // Inline function 'com.patriker.icebreathing.HoldTimeSelector$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                    tmp$ret$46 = HoldTimeSelector$composable$lambda_8(element, selectedIndex$delegate, onSelected, lastClickedIndex$delegate);
                    var value_6 = tmp$ret$46;
                    tmp1_cache_6.b1b(value_6);
                    tmp_30 = value_6;
                  } else {
                    tmp_30 = tmp0_let_6;
                  }
                  tmp$ret$47 = tmp_30;
                  tmp$ret$48 = tmp$ret$47;
                  var tmp_31 = tmp$ret$48;
                  tmp$ret$49 = (tmp_31 == null ? true : isObject(tmp_31)) ? tmp_31 : THROW_CCE();
                  var tmp0_12 = tmp$ret$49;
                  $composer_24.d1b();
                  tmp$ret$50 = tmp0_12;
                  var tmp_32 = tmp$ret$50;
                  var tmp$ret$57;
                  // Inline function 'kotlin.run' call
                  // Inline function 'kotlin.contracts.contract' call
                  var tmp$ret$56;
                  // Inline function 'com.patriker.icebreathing.HoldTimeSelector$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  var tmp_33 = $composer_23;
                  var dispatchReceiver = composableLambda(tmp_33, -33120978, true, HoldTimeSelector$composable$lambda_9(element, buttonSecs, numRoundsSelected, selectedIndex$delegate));
                  var tmp$ret$55;
                  // Inline function 'androidx.compose.runtime.remember$composable' call
                  var tmp0_remember$composable_1 = $composer_23;
                  var $composer_25 = tmp0_remember$composable_1;
                  $composer_25.y1a(-838505973);
                  sourceInformation($composer_25, 'C(remember$composable)P(1):Composables.kt#9igjgp');
                  var tmp$ret$54;
                  // Inline function 'androidx.compose.runtime.cache' call
                  var tmp1_cache_7 = $composer_25;
                  var tmp2_cache_2 = $composer_25.z1a(dispatchReceiver);
                  var tmp$ret$53;
                  // Inline function 'kotlin.let' call
                  var tmp0_let_7 = tmp1_cache_7.a1b();
                  // Inline function 'kotlin.contracts.contract' call
                  var tmp$ret$52;
                  // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
                  var tmp_34;
                  if (tmp2_cache_2 ? true : tmp0_let_7 === Companion_getInstance_0().c1b_1) {
                    var tmp$ret$51;
                    // Inline function 'com.patriker.icebreathing.HoldTimeSelector$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                    tmp$ret$51 = ComposableLambda$invoke$ref_6(dispatchReceiver);
                    var value_7 = tmp$ret$51;
                    tmp1_cache_7.b1b(value_7);
                    tmp_34 = value_7;
                  } else {
                    tmp_34 = tmp0_let_7;
                  }
                  tmp$ret$52 = tmp_34;
                  tmp$ret$53 = tmp$ret$52;
                  var tmp_35 = tmp$ret$53;
                  tmp$ret$54 = (tmp_35 == null ? true : isObject(tmp_35)) ? tmp_35 : THROW_CCE();
                  var tmp0_13 = tmp$ret$54;
                  $composer_25.d1b();
                  tmp$ret$55 = tmp0_13;
                  tmp$ret$56 = tmp$ret$55;
                  tmp$ret$57 = tmp$ret$56;
                  OutlinedButton$composable(tmp_32, tmp0_modifier, false, null, null, tmp1_shape, tmp2_border, tmp3_colors, null, tmp$ret$57, $composer_23, 805306416, 284);
                }
                 while (!(element === last_0));
              $composer_23.d1b();
              var tmp_36 = Companion_getInstance();
              Spacer$composable(tmp4__anonymous__pkmkx7_1.t7e(tmp_36, 1.0, false, 2, null), $composer_23, 0);
            } else {
              $composer_23.l1h();
            }
          } else {
            $composer_22.l1h();
          }
          $composer_22.d1b();
          $composer_21.d1b();
          $composer_21.k1n();
          $composer_17.d1b();
          $composer_16.d1b();
          if (HoldTimeSelector$composable$lambda_1(lastClickedIndex$delegate).p9n_1) {
            // Inline function 'androidx.compose.foundation.layout.Box$composable' call
            var tmp7_Box$composable = tmp12__anonymous__oq5opy.i7d(fillMaxWidth(Companion_getInstance(), 0.93), Companion_getInstance_2().f4e_1);
            var tmp8_Box$composable = Companion_getInstance_2().w4d_1;
            var tmp9_Box$composable = false;
            var tmp10_Box$composable = $composer_15;
            var modifier_3 = tmp7_Box$composable;
            var contentAlignment = tmp8_Box$composable;
            var propagateMinConstraints = tmp9_Box$composable;
            var $composer_26 = tmp10_Box$composable;
            $composer_26.y1a(1330882304);
            sourceInformation($composer_26, 'C(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
            if (!(0 === 0))
              modifier_3 = Companion_getInstance();
            if (!(0 === 0))
              contentAlignment = Companion_getInstance_2().s4d_1;
            if (!(4 === 0))
              propagateMinConstraints = false;
            var measurePolicy_1 = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_26, 6);
            // Inline function 'androidx.compose.ui.layout.Layout$composable' call
            var tmp0_Layout$composable_1 = modifier_3;
            var tmp1_Layout$composable_1 = $composer_26;
            var tmp2_Layout$composable_1 = 0;
            var modifier_4 = tmp0_Layout$composable_1;
            var $composer_27 = tmp1_Layout$composable_1;
            $composer_27.y1a(1725976829);
            sourceInformation($composer_27, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
            if (!(0 === 0))
              modifier_4 = Companion_getInstance();
            var tmp$ret$58;
            // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
            var tmp0_$get_current$$composable_h5ksy7_1 = get_LocalDensity();
            var tmp1_$get_current$$composable_gn3xww_1 = $composer_27;
            var $composer_28 = tmp1_$get_current$$composable_gn3xww_1;
            sourceInformationMarkerStart($composer_28, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
            var tmp0_14 = $composer_28.w1n(tmp0_$get_current$$composable_h5ksy7_1);
            sourceInformationMarkerEnd($composer_28);
            tmp$ret$58 = tmp0_14;
            var density_1 = tmp$ret$58;
            var tmp$ret$59;
            // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
            var tmp2_$get_current$$composable_g4n2vl_1 = get_LocalLayoutDirection();
            var tmp3_$get_current$$composable_fm67ua_1 = $composer_27;
            var $composer_29 = tmp3_$get_current$$composable_fm67ua_1;
            sourceInformationMarkerStart($composer_29, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
            var tmp0_15 = $composer_29.w1n(tmp2_$get_current$$composable_g4n2vl_1);
            sourceInformationMarkerEnd($composer_29);
            tmp$ret$59 = tmp0_15;
            var layoutDirection_1 = tmp$ret$59;
            var tmp$ret$60;
            // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
            var tmp4_$get_current$$composable_f3pcsz_1 = get_LocalViewConfiguration();
            var tmp5_$get_current$$composable_el8hro_1 = $composer_27;
            var $composer_30 = tmp5_$get_current$$composable_el8hro_1;
            sourceInformationMarkerStart($composer_30, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
            var tmp0_16 = $composer_30.w1n(tmp4_$get_current$$composable_f3pcsz_1);
            sourceInformationMarkerEnd($composer_30);
            tmp$ret$60 = tmp0_16;
            var viewConfiguration_1 = tmp$ret$60;
            // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
            var tmp6_ReusableComposeNode$composable_1 = Companion_getInstance_1().a5e_1;
            var tmp7_ReusableComposeNode$composable_1 = materializerOf(modifier_4);
            var tmp8_ReusableComposeNode$composable_1 = $composer_27;
            var tmp9_ReusableComposeNode$composable_1 = 6 | 7168 & tmp2_Layout$composable_1 << 9;
            var $composer_31 = tmp8_ReusableComposeNode$composable_1;
            var tmp_37 = $composer_31.u1m();
            if (!isInterface(tmp_37, Applier)) {
              invalidApplier();
            }
            $composer_31.g1n();
            if ($composer_31.e1n()) {
              $composer_31.h1n(tmp6_ReusableComposeNode$composable_1);
            } else {
              $composer_31.j1n();
            }
            $composer_31.l1n();
            // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
            var tmp10__anonymous__yfiz50_1 = _Updater___init__impl__rbfxm8($composer_31);
            Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_1, measurePolicy_1, Companion_getInstance_1().e5e_1);
            Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_1, density_1, Companion_getInstance_1().d5e_1);
            Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_1, layoutDirection_1, Companion_getInstance_1().f5e_1);
            Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_1, viewConfiguration_1, Companion_getInstance_1().g5e_1);
            $composer_31.m1n();
            tmp7_ReusableComposeNode$composable_1(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_31)), $composer_31, 112 & tmp9_ReusableComposeNode$composable_1 >> 3);
            $composer_31.y1a(2058660585);
            // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
            var tmp3__anonymous__ufb84q_1 = $composer_31;
            var tmp4__anonymous__pkmkx7_2 = 14 & tmp9_ReusableComposeNode$composable_1 >> 9;
            var $composer_32 = tmp3__anonymous__ufb84q_1;
            $composer_32.y1a(-2137368960);
            sourceInformation($composer_32, 'C72@3384L9:Box.kt#2w3rfo');
            if (!((tmp4__anonymous__pkmkx7_2 & 11) === 2) ? true : !$composer_32.l1m()) {
              // Inline function 'com.patriker.icebreathing.HoldTimeSelector$composable.<anonymous>.<anonymous>' call
              var tmp11__anonymous__tkubxh = BoxScopeInstance_getInstance();
              var tmp12__anonymous__oq5opy_0 = $composer_32;
              var tmp13__anonymous__jvh1if_0 = 6;
              var $composer_33 = tmp12__anonymous__oq5opy_0;
              if (!((tmp13__anonymous__jvh1if_0 & 81) === 16) ? true : !$composer_33.l1m()) {
                var tmp_38 = HoldTimeSelector$composable$lambda_3(lastClickedTime$delegate);
                TimeSliderCard$composable(tmp_38, HoldTimeSelector$composable$timeChanged$ref(buttonSecs, onTimeChanged, lastClickedIndex$delegate), HoldTimeSelector$composable$lambda_5(lastClickedRound$delegate), $composer_33, 0);
              } else {
                $composer_33.l1h();
              }
            } else {
              $composer_32.l1h();
            }
            $composer_32.d1b();
            $composer_31.d1b();
            $composer_31.k1n();
            $composer_27.d1b();
            $composer_26.d1b();
          }
        } else {
          $composer_15.l1h();
        }
      } else {
        $composer_14.l1h();
      }
      $composer_14.d1b();
      $composer_13.d1b();
      $composer_13.k1n();
      $composer_9.d1b();
      $composer_8.d1b();
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
      tmp0_safe_receiver.g1p(HoldTimeSelector$composable$lambda$ref(onSelected, buttonLabels, numRoundsSelected, onTimeChanged, $changed));
    }
  }
  function StartScreen$composable$lambda($numRoundsSelected$delegate) {
    init_properties_StartScreen_kt_8883gm();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('numRoundsSelected', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $numRoundsSelected$delegate.i2();
    return tmp$ret$0;
  }
  function StartScreen$composable$lambda_0($numRoundsSelected$delegate, value) {
    init_properties_StartScreen_kt_8883gm();
    var tmp0_setValue = getLocalDelegateReference('numRoundsSelected', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $numRoundsSelected$delegate.p11(value);
  }
  function StartScreen$composable$lambda_1($holdTimes$delegate) {
    init_properties_StartScreen_kt_8883gm();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('holdTimes', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $holdTimes$delegate.i2();
    return tmp$ret$0;
  }
  function StartScreen$composable$lambda_2($holdTimes$delegate, value) {
    init_properties_StartScreen_kt_8883gm();
    var tmp0_setValue = getLocalDelegateReference('holdTimes', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $holdTimes$delegate.p11(value);
  }
  function StartScreen$composable$lambda_3($numBreaths$delegate) {
    init_properties_StartScreen_kt_8883gm();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('numBreaths', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $numBreaths$delegate.i2();
    return tmp$ret$0;
  }
  function StartScreen$composable$lambda_4($numBreaths$delegate, value) {
    init_properties_StartScreen_kt_8883gm();
    var tmp0_setValue = getLocalDelegateReference('numBreaths', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $numBreaths$delegate.p11(value);
  }
  function StartScreen$composable$holdTimesChanged(holdTimes$delegate, times) {
    StartScreen$composable$lambda_2(holdTimes$delegate, times);
  }
  function StartScreen$composable$lambda_5($sessionData, $finishedSelection, $$changed, $composer, $force) {
    return StartScreen$composable($sessionData, $finishedSelection, $composer, $$changed | 1);
  }
  function TimeSliderCard$composable$lambda($sliderValue$delegate) {
    init_properties_StartScreen_kt_8883gm();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('sliderValue', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $sliderValue$delegate.i2();
    return tmp$ret$0;
  }
  function TimeSliderCard$composable$lambda_0($sliderValue$delegate, value) {
    init_properties_StartScreen_kt_8883gm();
    var tmp0_setValue = getLocalDelegateReference('sliderValue', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $sliderValue$delegate.p11(value);
  }
  function TimeSliderCard$composable$lambda_1($sliderSeconds$delegate) {
    init_properties_StartScreen_kt_8883gm();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('sliderSeconds', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $sliderSeconds$delegate.i2();
    return tmp$ret$0;
  }
  function TimeSliderCard$composable$lambda_2($timeText$delegate) {
    init_properties_StartScreen_kt_8883gm();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('timeText', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $timeText$delegate.i2();
    return tmp$ret$0;
  }
  function TimeSliderCard$composable$lambda_3($initialTime, $onTimeChanged, $round, $$changed, $composer, $force) {
    return TimeSliderCard$composable($initialTime, $onTimeChanged, $round, $composer, $$changed | 1);
  }
  function HoldTimeSelector$composable$lambda($selectedIndex$delegate) {
    init_properties_StartScreen_kt_8883gm();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('selectedIndex', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $selectedIndex$delegate.i2();
    return tmp$ret$0;
  }
  function HoldTimeSelector$composable$lambda_0($selectedIndex$delegate, value) {
    init_properties_StartScreen_kt_8883gm();
    var tmp0_setValue = getLocalDelegateReference('selectedIndex', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $selectedIndex$delegate.p11(value);
  }
  function HoldTimeSelector$composable$lambda_1($lastClickedIndex$delegate) {
    init_properties_StartScreen_kt_8883gm();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('lastClickedIndex', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $lastClickedIndex$delegate.i2();
    return tmp$ret$0;
  }
  function HoldTimeSelector$composable$lambda_2($lastClickedIndex$delegate, value) {
    init_properties_StartScreen_kt_8883gm();
    var tmp0_setValue = getLocalDelegateReference('lastClickedIndex', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $lastClickedIndex$delegate.p11(value);
  }
  function HoldTimeSelector$composable$lambda_3($lastClickedTime$delegate) {
    init_properties_StartScreen_kt_8883gm();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('lastClickedTime', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $lastClickedTime$delegate.i2();
    return tmp$ret$0;
  }
  function HoldTimeSelector$composable$lambda_4($lastClickedTime$delegate, value) {
    init_properties_StartScreen_kt_8883gm();
    var tmp0_setValue = getLocalDelegateReference('lastClickedTime', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $lastClickedTime$delegate.p11(value);
  }
  function HoldTimeSelector$composable$lambda_5($lastClickedRound$delegate) {
    init_properties_StartScreen_kt_8883gm();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('lastClickedRound', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $lastClickedRound$delegate.i2();
    return tmp$ret$0;
  }
  function HoldTimeSelector$composable$lambda_6($lastClickedRound$delegate, value) {
    init_properties_StartScreen_kt_8883gm();
    var tmp0_setValue = getLocalDelegateReference('lastClickedRound', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $lastClickedRound$delegate.p11(value);
  }
  function HoldTimeSelector$composable$timeChanged(buttonSecs, $onTimeChanged, lastClickedIndex$delegate, newTime) {
    if (HoldTimeSelector$composable$lambda_1(lastClickedIndex$delegate).p9n_1) {
      buttonSecs.g21(HoldTimeSelector$composable$lambda_1(lastClickedIndex$delegate).q9n_1, newTime);
    }
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mapIndexed' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var tmp0_mapIndexedTo = ArrayList_init_$Create$(collectionSizeOrDefault(buttonSecs, 10));
    var index = 0;
    var tmp0_iterator = buttonSecs.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'com.patriker.icebreathing.HoldTimeSelector$composable.timeChanged.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp0__anonymous__q1qw7t = checkIndexOverflow(tmp1);
      tmp$ret$0 = to(tmp0__anonymous__q1qw7t + 1 | 0, item);
      tmp0_mapIndexedTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapIndexedTo;
    tmp$ret$2 = tmp$ret$1;
    var timesMap = toMap(tmp$ret$2);
    $onTimeChanged(timesMap);
  }
  function HoldTimeSelector$composable$buttonSelected($onSelected, lastClickedIndex$delegate, index) {
    HoldTimeSelector$composable$lambda_2(lastClickedIndex$delegate, new HoldTimeSelector$composable$ButtonClicked(true, index));
    $onSelected(index);
  }
  function HoldTimeSelector$composable$indexChanged(selectedIndex$delegate, $onSelected, lastClickedIndex$delegate, i) {
    HoldTimeSelector$composable$lambda_0(selectedIndex$delegate, i);
    HoldTimeSelector$composable$buttonSelected($onSelected, lastClickedIndex$delegate, HoldTimeSelector$composable$lambda(selectedIndex$delegate));
  }
  function HoldTimeSelector$composable$lambda_7($onSelected, $buttonLabels, $numRoundsSelected, $onTimeChanged, $$changed, $composer, $force) {
    return HoldTimeSelector$composable($onSelected, $buttonLabels, $numRoundsSelected, $onTimeChanged, $composer, $$changed | 1);
  }
  function StartScreen$composable$lambda_6($numBreaths$delegate) {
    return function (it) {
      StartScreen$composable$lambda_4($numBreaths$delegate, it);
      return Unit_getInstance();
    };
  }
  function StartScreen$composable$lambda_7($numRoundsSelected$delegate) {
    return function (it) {
      StartScreen$composable$lambda_0($numRoundsSelected$delegate, it);
      return Unit_getInstance();
    };
  }
  function StartScreen$composable$lambda_8(it) {
    init_properties_StartScreen_kt_8883gm();
    return Unit_getInstance();
  }
  function StartScreen$composable$holdTimesChanged$ref($holdTimes$delegate) {
    var l = function (p0) {
      StartScreen$composable$holdTimesChanged($holdTimes$delegate, p0);
      return Unit_getInstance();
    };
    l.callableName = 'holdTimesChanged';
    return l;
  }
  function StartScreen$composable$lambda_9($finishedSelection, $numBreaths$delegate, $numRoundsSelected$delegate, $holdTimes$delegate) {
    return function () {
      var tmp = StartScreen$composable$lambda_3($numBreaths$delegate);
      var tmp_0 = StartScreen$composable$lambda($numRoundsSelected$delegate);
      var tmp$ret$2;
      // Inline function 'kotlin.collections.filterKeys' call
      var tmp0_filterKeys = StartScreen$composable$lambda_1($holdTimes$delegate);
      var result = LinkedHashMap_init_$Create$();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$0 = tmp0_filterKeys.z().c();
      var tmp0_iterator = tmp$ret$0;
      while (tmp0_iterator.d()) {
        var entry = tmp0_iterator.e();
        var tmp$ret$1;
        // Inline function 'com.patriker.icebreathing.StartScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp1__anonymous__uwfjfc = entry.g2();
        tmp$ret$1 = tmp1__anonymous__uwfjfc <= StartScreen$composable$lambda($numRoundsSelected$delegate);
        if (tmp$ret$1) {
          result.q(entry.g2(), entry.i2());
        }
      }
      tmp$ret$2 = result;
      $finishedSelection(new SessionData(tmp, tmp_0, tmp$ret$2));
      return Unit_getInstance();
    };
  }
  function StartScreen$composable$lambda$ref($sessionData, $finishedSelection, $$changed) {
    return function (p0, p1) {
      StartScreen$composable$lambda_5($sessionData, $finishedSelection, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function TimeSliderCard$composable$slambda($initialTime, $sliderValue$delegate, resultContinuation) {
    this.z9n_1 = $initialTime;
    this.a9o_1 = $sliderValue$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  TimeSliderCard$composable$slambda.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  TimeSliderCard$composable$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  TimeSliderCard$composable$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          TimeSliderCard$composable$lambda_0(this.a9o_1, this.z9n_1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.cg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  TimeSliderCard$composable$slambda.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new TimeSliderCard$composable$slambda(this.z9n_1, this.a9o_1, completion);
    i.b9o_1 = $this$LaunchedEffect;
    return i;
  };
  TimeSliderCard$composable$slambda.$metadata$ = classMeta('TimeSliderCard$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function TimeSliderCard$composable$slambda_0($initialTime, $sliderValue$delegate, resultContinuation) {
    var i = new TimeSliderCard$composable$slambda($initialTime, $sliderValue$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function TimeSliderCard$composable$lambda_4($sliderValue$delegate) {
    return function () {
      return numberToInt(TimeSliderCard$composable$lambda($sliderValue$delegate));
    };
  }
  function TimeSliderCard$composable$lambda_5($sliderSeconds$delegate) {
    return function () {
      return secondsAsStr(TimeSliderCard$composable$lambda_1($sliderSeconds$delegate));
    };
  }
  function TimeSliderCard$composable$lambda$lambda($onTimeChanged, $sliderValue$delegate, $sliderSeconds$delegate) {
    return function (it) {
      TimeSliderCard$composable$lambda_0($sliderValue$delegate, it);
      $onTimeChanged(TimeSliderCard$composable$lambda_1($sliderSeconds$delegate));
      return Unit_getInstance();
    };
  }
  function TimeSliderCard$composable$lambda_6($round, $minValue, $maxValue, $$dirty, $sliderValue$delegate, $onTimeChanged, $sliderSeconds$delegate, $timeText$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.l1m()) {
        if (isTraceInProgress()) {
          traceEventStart(1905261634, $changed, -1, 'com.patriker.icebreathing.TimeSliderCard$composable.<anonymous> (StartScreen.kt:170)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp_0 = Companion_getInstance();
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$0 = _Dp___init__impl__ms3zkb(10);
        var tmp0_Box$composable = padding_0(tmp_0, tmp$ret$0);
        var tmp1_Box$composable = null;
        var tmp2_Box$composable = false;
        var tmp3_Box$composable = $composer_0;
        var modifier = tmp0_Box$composable;
        var contentAlignment = tmp1_Box$composable;
        var propagateMinConstraints = tmp2_Box$composable;
        var $composer_1 = tmp3_Box$composable;
        $composer_1.y1a(1330882304);
        sourceInformation($composer_1, 'C(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance();
        if (!(2 === 0))
          contentAlignment = Companion_getInstance_2().s4d_1;
        if (!(4 === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 0);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable = modifier;
        var tmp1_Layout$composable = $composer_1;
        var tmp2_Layout$composable = 48;
        var modifier_0 = tmp0_Layout$composable;
        var $composer_2 = tmp1_Layout$composable;
        $composer_2.y1a(1725976829);
        sourceInformation($composer_2, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
        var tmp1_$get_current$$composable_gn3xww = $composer_2;
        var $composer_3 = tmp1_$get_current$$composable_gn3xww;
        sourceInformationMarkerStart($composer_3, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_3.w1n(tmp0_$get_current$$composable_h5ksy7);
        sourceInformationMarkerEnd($composer_3);
        tmp$ret$1 = tmp0;
        var density = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
        var tmp3_$get_current$$composable_fm67ua = $composer_2;
        var $composer_4 = tmp3_$get_current$$composable_fm67ua;
        sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_0 = $composer_4.w1n(tmp2_$get_current$$composable_g4n2vl);
        sourceInformationMarkerEnd($composer_4);
        tmp$ret$2 = tmp0_0;
        var layoutDirection = tmp$ret$2;
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
        var tmp5_$get_current$$composable_el8hro = $composer_2;
        var $composer_5 = tmp5_$get_current$$composable_el8hro;
        sourceInformationMarkerStart($composer_5, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_1 = $composer_5.w1n(tmp4_$get_current$$composable_f3pcsz);
        sourceInformationMarkerEnd($composer_5);
        tmp$ret$3 = tmp0_1;
        var viewConfiguration = tmp$ret$3;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp6_ReusableComposeNode$composable = Companion_getInstance_1().a5e_1;
        var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp8_ReusableComposeNode$composable = $composer_2;
        var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
        var $composer_6 = tmp8_ReusableComposeNode$composable;
        var tmp_1 = $composer_6.u1m();
        if (!isInterface(tmp_1, Applier)) {
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
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_1().e5e_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_1().d5e_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_1().f5e_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_1().g5e_1);
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
          // Inline function 'com.patriker.icebreathing.TimeSliderCard$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp4__anonymous__pkmkx7_0 = BoxScopeInstance_getInstance();
          var tmp5__anonymous__kpxxpo = $composer_7;
          var tmp6__anonymous__fv9ai5 = 6;
          var $composer_8 = tmp5__anonymous__kpxxpo;
          var $dirty = tmp6__anonymous__fv9ai5;
          if ((tmp6__anonymous__fv9ai5 & 14) === 0)
            $dirty = $dirty | ($composer_8.z1a(tmp4__anonymous__pkmkx7_0) ? 4 : 2);
          if (!(($dirty & 91) === 18) ? true : !$composer_8.l1m()) {
            // Inline function 'androidx.compose.foundation.layout.Row$composable' call
            var tmp0_Row$composable = null;
            var tmp1_Row$composable = null;
            var tmp2_Row$composable = null;
            var tmp3_Row$composable = $composer_8;
            var modifier_1 = tmp0_Row$composable;
            var horizontalArrangement = tmp1_Row$composable;
            var verticalAlignment = tmp2_Row$composable;
            var $composer_9 = tmp3_Row$composable;
            $composer_9.y1a(-636825856);
            sourceInformation($composer_9, 'C(Row$composable)P(2,1,3)78@3913L58,79@3976L130:Row.kt#2w3rfo');
            if (!(1 === 0))
              modifier_1 = Companion_getInstance();
            if (!(2 === 0))
              horizontalArrangement = Arrangement_getInstance().f7c_1;
            if (!(4 === 0))
              verticalAlignment = Companion_getInstance_2().b4e_1;
            var measurePolicy_0 = rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer_9, 0);
            // Inline function 'androidx.compose.ui.layout.Layout$composable' call
            var tmp0_Layout$composable_0 = modifier_1;
            var tmp1_Layout$composable_0 = $composer_9;
            var tmp2_Layout$composable_0 = 0;
            var modifier_2 = tmp0_Layout$composable_0;
            var $composer_10 = tmp1_Layout$composable_0;
            $composer_10.y1a(1725976829);
            sourceInformation($composer_10, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
            if (!(0 === 0))
              modifier_2 = Companion_getInstance();
            var tmp$ret$4;
            // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
            var tmp0_$get_current$$composable_h5ksy7_0 = get_LocalDensity();
            var tmp1_$get_current$$composable_gn3xww_0 = $composer_10;
            var $composer_11 = tmp1_$get_current$$composable_gn3xww_0;
            sourceInformationMarkerStart($composer_11, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
            var tmp0_2 = $composer_11.w1n(tmp0_$get_current$$composable_h5ksy7_0);
            sourceInformationMarkerEnd($composer_11);
            tmp$ret$4 = tmp0_2;
            var density_0 = tmp$ret$4;
            var tmp$ret$5;
            // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
            var tmp2_$get_current$$composable_g4n2vl_0 = get_LocalLayoutDirection();
            var tmp3_$get_current$$composable_fm67ua_0 = $composer_10;
            var $composer_12 = tmp3_$get_current$$composable_fm67ua_0;
            sourceInformationMarkerStart($composer_12, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
            var tmp0_3 = $composer_12.w1n(tmp2_$get_current$$composable_g4n2vl_0);
            sourceInformationMarkerEnd($composer_12);
            tmp$ret$5 = tmp0_3;
            var layoutDirection_0 = tmp$ret$5;
            var tmp$ret$6;
            // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
            var tmp4_$get_current$$composable_f3pcsz_0 = get_LocalViewConfiguration();
            var tmp5_$get_current$$composable_el8hro_0 = $composer_10;
            var $composer_13 = tmp5_$get_current$$composable_el8hro_0;
            sourceInformationMarkerStart($composer_13, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
            var tmp0_4 = $composer_13.w1n(tmp4_$get_current$$composable_f3pcsz_0);
            sourceInformationMarkerEnd($composer_13);
            tmp$ret$6 = tmp0_4;
            var viewConfiguration_0 = tmp$ret$6;
            // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
            var tmp6_ReusableComposeNode$composable_0 = Companion_getInstance_1().a5e_1;
            var tmp7_ReusableComposeNode$composable_0 = materializerOf(modifier_2);
            var tmp8_ReusableComposeNode$composable_0 = $composer_10;
            var tmp9_ReusableComposeNode$composable_0 = 6 | 7168 & tmp2_Layout$composable_0 << 9;
            var $composer_14 = tmp8_ReusableComposeNode$composable_0;
            var tmp_2 = $composer_14.u1m();
            if (!isInterface(tmp_2, Applier)) {
              invalidApplier();
            }
            $composer_14.g1n();
            if ($composer_14.e1n()) {
              $composer_14.h1n(tmp6_ReusableComposeNode$composable_0);
            } else {
              $composer_14.j1n();
            }
            $composer_14.l1n();
            // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
            var tmp10__anonymous__yfiz50_0 = _Updater___init__impl__rbfxm8($composer_14);
            Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, measurePolicy_0, Companion_getInstance_1().e5e_1);
            Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, density_0, Companion_getInstance_1().d5e_1);
            Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, layoutDirection_0, Companion_getInstance_1().f5e_1);
            Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, viewConfiguration_0, Companion_getInstance_1().g5e_1);
            $composer_14.m1n();
            tmp7_ReusableComposeNode$composable_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_14)), $composer_14, 112 & tmp9_ReusableComposeNode$composable_0 >> 3);
            $composer_14.y1a(2058660585);
            // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
            var tmp3__anonymous__ufb84q_0 = $composer_14;
            var tmp4__anonymous__pkmkx7_1 = 14 & tmp9_ReusableComposeNode$composable_0 >> 9;
            var $composer_15 = tmp3__anonymous__ufb84q_0;
            $composer_15.y1a(-678309503);
            sourceInformation($composer_15, 'C80@4021L9:Row.kt#2w3rfo');
            if (!((tmp4__anonymous__pkmkx7_1 & 11) === 2) ? true : !$composer_15.l1m()) {
              // Inline function 'com.patriker.icebreathing.TimeSliderCard$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var tmp4__anonymous__pkmkx7_2 = RowScopeInstance_getInstance();
              var tmp5__anonymous__kpxxpo_0 = $composer_15;
              var tmp6__anonymous__fv9ai5_0 = 6;
              var $composer_16 = tmp5__anonymous__kpxxpo_0;
              var $dirty_0 = tmp6__anonymous__fv9ai5_0;
              if ((tmp6__anonymous__fv9ai5_0 & 14) === 0)
                $dirty_0 = $dirty_0 | ($composer_16.z1a(tmp4__anonymous__pkmkx7_2) ? 4 : 2);
              if (!(($dirty_0 & 91) === 18) ? true : !$composer_16.l1m()) {
                var tmp_3 = Companion_getInstance();
                var tmp0_modifier = tmp4__anonymous__pkmkx7_2.t7e(tmp_3, 2.0, false, 2, null);
                var tmp1_text = TimeSliderCard$composable$lambda_2($timeText$delegate);
                var tmp2_fontWeight = Companion_getInstance_6().t3x_1;
                var tmp3_color = Companion_getInstance_4().i3a_1;
                var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                var tmp_7 = _TextOverflow___init__impl__obguoe(0);
                Text$composable(tmp1_text, tmp0_modifier, tmp3_color, tmp_4, null, tmp2_fontWeight, null, tmp_5, null, null, tmp_6, tmp_7, false, 0, null, null, $composer_16, 196992, 0, 65496);
                var tmp_8 = Companion_getInstance();
                Spacer$composable(tmp4__anonymous__pkmkx7_2.t7e(tmp_8, 8.0, false, 2, null), $composer_16, 0);
                var tmp_9 = Companion_getInstance();
                var tmp4_modifier = tmp4__anonymous__pkmkx7_2.t7e(tmp_9, 2.0, false, 2, null);
                var tmp5_text = 'Round ' + $round;
                var tmp6_color = Companion_getInstance_4().i3a_1;
                var tmp7_textAlign = Companion_getInstance_3().n3v_1;
                var tmp_10 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                var tmp_11 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                var tmp_12 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
                var tmp_13 = _TextOverflow___init__impl__obguoe(0);
                Text$composable(tmp5_text, tmp4_modifier, tmp6_color, tmp_10, null, null, null, tmp_11, null, tmp7_textAlign, tmp_12, tmp_13, false, 0, null, null, $composer_16, 384, 0, 65016);
              } else {
                $composer_16.l1h();
              }
            } else {
              $composer_15.l1h();
            }
            $composer_15.d1b();
            $composer_14.d1b();
            $composer_14.k1n();
            $composer_10.d1b();
            $composer_9.d1b();
            var tmp_14 = Companion_getInstance();
            var tmp$ret$7;
            // Inline function 'androidx.compose.ui.unit.dp' call
            tmp$ret$7 = _Dp___init__impl__ms3zkb(16);
            var tmp0_modifier_0 = tmp4__anonymous__pkmkx7_0.c7d(offset$default(tmp_14, null, tmp$ret$7, 1, null), Companion_getInstance_2().w4d_1);
            var tmp1_value = TimeSliderCard$composable$lambda($sliderValue$delegate);
            var tmp2_valueRange = rangeTo($minValue, $maxValue);
            var tmp$ret$12;
            // Inline function 'androidx.compose.runtime.remember$composable' call
            var tmp7_remember$composable = $composer_8;
            var tmp8_remember$composable = 112 & $$dirty;
            var $composer_17 = tmp7_remember$composable;
            $composer_17.y1a(-1058148781);
            sourceInformation($composer_17, 'C(remember$composable)P(1,2,3):Composables.kt#9igjgp');
            var tmp$ret$11;
            // Inline function 'androidx.compose.runtime.cache' call
            var tmp1_cache = $composer_17;
            var tmp2_cache = !!(!!($composer_17.z1a($sliderValue$delegate) | $composer_17.z1a($onTimeChanged)) | $composer_17.z1a($sliderSeconds$delegate));
            var tmp$ret$10;
            // Inline function 'kotlin.let' call
            var tmp0_let = tmp1_cache.a1b();
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$9;
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var tmp_15;
            if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
              var tmp$ret$8;
              // Inline function 'com.patriker.icebreathing.TimeSliderCard$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              tmp$ret$8 = TimeSliderCard$composable$lambda$lambda($onTimeChanged, $sliderValue$delegate, $sliderSeconds$delegate);
              var value = tmp$ret$8;
              tmp1_cache.b1b(value);
              tmp_15 = value;
            } else {
              tmp_15 = tmp0_let;
            }
            tmp$ret$9 = tmp_15;
            tmp$ret$10 = tmp$ret$9;
            var tmp_16 = tmp$ret$10;
            tmp$ret$11 = (tmp_16 == null ? true : isObject(tmp_16)) ? tmp_16 : THROW_CCE();
            var tmp0_5 = tmp$ret$11;
            $composer_17.d1b();
            tmp$ret$12 = tmp0_5;
            var tmp_17 = tmp$ret$12;
            Slider$composable(tmp1_value, tmp_17, tmp0_modifier_0, false, tmp2_valueRange, 0, null, null, null, $composer_8, 196608, 456);
          } else {
            $composer_8.l1h();
          }
        } else {
          $composer_7.l1h();
        }
        $composer_7.d1b();
        $composer_6.d1b();
        $composer_6.k1n();
        $composer_2.d1b();
        $composer_1.d1b();
        var tmp_18;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_18 = Unit_getInstance();
        }
        tmp = tmp_18;
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
  function TimeSliderCard$composable$lambda$ref($initialTime, $onTimeChanged, $round, $$changed) {
    return function (p0, p1) {
      TimeSliderCard$composable$lambda_3($initialTime, $onTimeChanged, $round, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function ButtonClicked_init_$Init$(clicked, i, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      clicked = false;
    if (!(($mask0 & 2) === 0))
      i = -1;
    HoldTimeSelector$composable$ButtonClicked.call($this, clicked, i);
    return $this;
  }
  function ButtonClicked_init_$Create$(clicked, i, $mask0, $marker) {
    return ButtonClicked_init_$Init$(clicked, i, $mask0, $marker, Object.create(HoldTimeSelector$composable$ButtonClicked.prototype));
  }
  function HoldTimeSelector$composable$ButtonClicked(clicked, i) {
    this.p9n_1 = clicked;
    this.q9n_1 = i;
  }
  HoldTimeSelector$composable$ButtonClicked.prototype.c9o = function () {
    return this.p9n_1;
  };
  HoldTimeSelector$composable$ButtonClicked.prototype.d9o = function () {
    return this.q9n_1;
  };
  HoldTimeSelector$composable$ButtonClicked.prototype.toString = function () {
    return 'ButtonClicked(clicked=' + this.p9n_1 + ', i=' + this.q9n_1 + ')';
  };
  HoldTimeSelector$composable$ButtonClicked.prototype.hashCode = function () {
    var result = this.p9n_1 | 0;
    result = imul(result, 31) + this.q9n_1 | 0;
    return result;
  };
  HoldTimeSelector$composable$ButtonClicked.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HoldTimeSelector$composable$ButtonClicked))
      return false;
    var tmp0_other_with_cast = other instanceof HoldTimeSelector$composable$ButtonClicked ? other : THROW_CCE();
    if (!(this.p9n_1 === tmp0_other_with_cast.p9n_1))
      return false;
    if (!(this.q9n_1 === tmp0_other_with_cast.q9n_1))
      return false;
    return true;
  };
  HoldTimeSelector$composable$ButtonClicked.$metadata$ = classMeta('ButtonClicked');
  function HoldTimeSelector$composable$slambda($buttonSecs, $lastClickedIndex$delegate, $lastClickedTime$delegate, $lastClickedRound$delegate, resultContinuation) {
    this.m9o_1 = $buttonSecs;
    this.n9o_1 = $lastClickedIndex$delegate;
    this.o9o_1 = $lastClickedTime$delegate;
    this.p9o_1 = $lastClickedRound$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  HoldTimeSelector$composable$slambda.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  HoldTimeSelector$composable$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  HoldTimeSelector$composable$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          if (HoldTimeSelector$composable$lambda_1(this.n9o_1).p9n_1) {
            HoldTimeSelector$composable$lambda_4(this.o9o_1, this.m9o_1.g(HoldTimeSelector$composable$lambda_1(this.n9o_1).q9n_1));
            HoldTimeSelector$composable$lambda_6(this.p9o_1, HoldTimeSelector$composable$lambda_1(this.n9o_1).q9n_1 + 1 | 0);
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
  HoldTimeSelector$composable$slambda.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new HoldTimeSelector$composable$slambda(this.m9o_1, this.n9o_1, this.o9o_1, this.p9o_1, completion);
    i.q9o_1 = $this$LaunchedEffect;
    return i;
  };
  HoldTimeSelector$composable$slambda.$metadata$ = classMeta('HoldTimeSelector$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function HoldTimeSelector$composable$slambda_0($buttonSecs, $lastClickedIndex$delegate, $lastClickedTime$delegate, $lastClickedRound$delegate, resultContinuation) {
    var i = new HoldTimeSelector$composable$slambda($buttonSecs, $lastClickedIndex$delegate, $lastClickedTime$delegate, $lastClickedRound$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function HoldTimeSelector$composable$slambda_1($buttonSecs, $numRoundsSelected, $lastClickedIndex$delegate, resultContinuation) {
    this.z9o_1 = $buttonSecs;
    this.a9p_1 = $numRoundsSelected;
    this.b9p_1 = $lastClickedIndex$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  HoldTimeSelector$composable$slambda_1.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  HoldTimeSelector$composable$slambda_1.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  HoldTimeSelector$composable$slambda_1.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          console.log(this.z9o_1.f());
          if ((this.a9p_1 - 1 | 0) < HoldTimeSelector$composable$lambda_1(this.b9p_1).q9n_1) {
            HoldTimeSelector$composable$lambda_2(this.b9p_1, ButtonClicked_init_$Create$(false, 0, 3, null));
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
  HoldTimeSelector$composable$slambda_1.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new HoldTimeSelector$composable$slambda_1(this.z9o_1, this.a9p_1, this.b9p_1, completion);
    i.c9p_1 = $this$LaunchedEffect;
    return i;
  };
  HoldTimeSelector$composable$slambda_1.$metadata$ = classMeta('HoldTimeSelector$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function HoldTimeSelector$composable$slambda_2($buttonSecs, $numRoundsSelected, $lastClickedIndex$delegate, resultContinuation) {
    var i = new HoldTimeSelector$composable$slambda_1($buttonSecs, $numRoundsSelected, $lastClickedIndex$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function HoldTimeSelector$composable$lambda_8($element, $selectedIndex$delegate, $onSelected, $lastClickedIndex$delegate) {
    return function () {
      HoldTimeSelector$composable$indexChanged($selectedIndex$delegate, $onSelected, $lastClickedIndex$delegate, $element);
      return Unit_getInstance();
    };
  }
  function HoldTimeSelector$composable$lambda_9($element, $buttonSecs, $numRoundsSelected, $selectedIndex$delegate) {
    return function ($this$OutlinedButton, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.l1m()) {
        if (isTraceInProgress()) {
          traceEventStart(-33120978, $changed, -1, 'com.patriker.icebreathing.HoldTimeSelector$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (StartScreen.kt:283)');
        }
        // Inline function 'androidx.compose.foundation.layout.Column$composable' call
        var tmp0_Column$composable = null;
        var tmp1_Column$composable = null;
        var tmp2_Column$composable = null;
        var tmp3_Column$composable = $composer_0;
        var modifier = tmp0_Column$composable;
        var verticalArrangement = tmp1_Column$composable;
        var horizontalAlignment = tmp2_Column$composable;
        var $composer_1 = tmp3_Column$composable;
        $composer_1.y1a(860130704);
        sourceInformation($composer_1, 'C(Column$composable)P(2,3,1)77@3913L61,78@3979L133:Column.kt#2w3rfo');
        if (!(1 === 0))
          modifier = Companion_getInstance();
        if (!(2 === 0))
          verticalArrangement = Arrangement_getInstance().h7c_1;
        if (!(4 === 0))
          horizontalAlignment = Companion_getInstance_2().e4e_1;
        var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 0);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable = modifier;
        var tmp1_Layout$composable = $composer_1;
        var tmp2_Layout$composable = 0;
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
        var tmp6_ReusableComposeNode$composable = Companion_getInstance_1().a5e_1;
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
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_1().e5e_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_1().d5e_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_1().f5e_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_1().g5e_1);
        $composer_6.m1n();
        tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
        $composer_6.y1a(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
        var tmp3__anonymous__ufb84q = $composer_6;
        var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
        var $composer_7 = tmp3__anonymous__ufb84q;
        $composer_7.y1a(-1163856341);
        sourceInformation($composer_7, 'C79@4027L9:Column.kt#2w3rfo');
        if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_7.l1m()) {
          // Inline function 'com.patriker.icebreathing.HoldTimeSelector$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp4__anonymous__pkmkx7_0 = ColumnScopeInstance_getInstance();
          var tmp5__anonymous__kpxxpo = $composer_7;
          var tmp6__anonymous__fv9ai5 = 6;
          var $composer_8 = tmp5__anonymous__kpxxpo;
          var $dirty = tmp6__anonymous__fv9ai5;
          if ((tmp6__anonymous__fv9ai5 & 14) === 0)
            $dirty = $dirty | ($composer_8.z1a(tmp4__anonymous__pkmkx7_0) ? 4 : 2);
          if (!(($dirty & 91) === 18) ? true : !$composer_8.l1m()) {
            var tmp0_text = ($element + 1 | 0).toString();
            $composer_8.y1a(-436102679);
            var tmp_1;
            if (HoldTimeSelector$composable$lambda($selectedIndex$delegate) === $element) {
              tmp_1 = Companion_getInstance_4().h3a_1;
            } else {
              tmp_1 = MaterialTheme_getInstance().e93($composer_8, 6).u96();
            }
            var tmp0_group = tmp_1;
            $composer_8.d1b();
            var tmp1_color = tmp0_group;
            var tmp_2 = Companion_getInstance();
            var tmp$ret$3;
            // Inline function 'androidx.compose.ui.unit.dp' call
            tmp$ret$3 = _Dp___init__impl__ms3zkb(4);
            var tmp_3 = tmp$ret$3;
            var tmp2_modifier = tmp4__anonymous__pkmkx7_0.i7d(padding$default(tmp_2, tmp_3, null, 2, null), Companion_getInstance_2().f4e_1);
            var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
            var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
            var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
            var tmp_7 = _TextOverflow___init__impl__obguoe(0);
            Text$composable(tmp0_text, tmp2_modifier, tmp1_color, tmp_4, null, null, null, tmp_5, null, null, tmp_6, tmp_7, false, 0, null, null, $composer_8, 0, 0, 65528);
            var tmp3_text = secondsAsStr($buttonSecs.g($element));
            var tmp4_modifier = tmp4__anonymous__pkmkx7_0.i7d(Companion_getInstance(), Companion_getInstance_2().f4e_1);
            var tmp5_fontSize = $numRoundsSelected <= 4 ? get_sp(12) : get_sp(10);
            $composer_8.y1a(-436101963);
            var tmp_8;
            if (HoldTimeSelector$composable$lambda($selectedIndex$delegate) === $element) {
              tmp_8 = Companion_getInstance_4().h3a_1;
            } else {
              tmp_8 = MaterialTheme_getInstance().e93($composer_8, 6).u96();
            }
            var tmp1_group = tmp_8;
            $composer_8.d1b();
            var tmp6_color = tmp1_group;
            var tmp_9 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
            var tmp_10 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
            var tmp_11 = _TextOverflow___init__impl__obguoe(0);
            Text$composable(tmp3_text, tmp4_modifier, tmp6_color, tmp5_fontSize, null, null, null, tmp_9, null, null, tmp_10, tmp_11, false, 0, null, null, $composer_8, 0, 0, 65520);
          } else {
            $composer_8.l1h();
          }
        } else {
          $composer_7.l1h();
        }
        $composer_7.d1b();
        $composer_6.d1b();
        $composer_6.k1n();
        $composer_2.d1b();
        $composer_1.d1b();
        var tmp_12;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_12 = Unit_getInstance();
        }
        tmp = tmp_12;
      } else {
        $composer_0.l1h();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.e2i(p0, p1, p2);
    };
  }
  function HoldTimeSelector$composable$timeChanged$ref($buttonSecs, $onTimeChanged, $lastClickedIndex$delegate) {
    var l = function (p0) {
      HoldTimeSelector$composable$timeChanged($buttonSecs, $onTimeChanged, $lastClickedIndex$delegate, p0);
      return Unit_getInstance();
    };
    l.callableName = 'timeChanged';
    return l;
  }
  function HoldTimeSelector$composable$lambda$ref($onSelected, $buttonLabels, $numRoundsSelected, $onTimeChanged, $$changed) {
    return function (p0, p1) {
      HoldTimeSelector$composable$lambda_7($onSelected, $buttonLabels, $numRoundsSelected, $onTimeChanged, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  var properties_initialized_StartScreen_kt_yk8kke;
  function init_properties_StartScreen_kt_8883gm() {
    if (properties_initialized_StartScreen_kt_yk8kke) {
    } else {
      properties_initialized_StartScreen_kt_yk8kke = true;
      secondColorTemp = Color$default(143, 180, 255, 0, 8, null);
      mainColorTemp = Color$default(112, 197, 255, 0, 8, null);
    }
  }
  var PrepareState_Start_instance;
  var PrepareState_End_instance;
  var PrepareState_entriesInitialized;
  function PrepareState_initEntries() {
    if (PrepareState_entriesInitialized)
      return Unit_getInstance();
    PrepareState_entriesInitialized = true;
    PrepareState_Start_instance = new PrepareState('Start', 0);
    PrepareState_End_instance = new PrepareState('End', 1);
  }
  function PrepareState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  PrepareState.$metadata$ = classMeta('PrepareState', undefined, undefined, undefined, undefined, Enum.prototype);
  function TransitionScreen$composable(roundNum, breathGoal, finishedPrep, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(-204450597);
    sourceInformation($composer_0, 'C(TransitionScreen$composable)P(2)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.q1n(roundNum) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.q1n(breathGoal) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.z1a(finishedPrep) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(-204450597, $dirty, -1, 'com.patriker.icebreathing.TransitionScreen$composable (TransitionScreen.kt:23)');
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
        // Inline function 'com.patriker.icebreathing.TransitionScreen$composable.<anonymous>' call
        var tmp_0 = PrepareState_Start_getInstance();
        tmp$ret$0 = mutableStateOf$default(tmp_0, null, 2, null);
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
      var prepState$delegate = tmp$ret$4;
      var transition = updateTransition$composable(TransitionScreen$composable$lambda(prepState$delegate), 'Prepared State Transition', $composer_0, 48, 0);
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp1_remember$composable = $composer_0;
      var $composer_2 = tmp1_remember$composable;
      $composer_2.y1a(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = $composer_2.z1a(prepState$delegate);
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$5;
        // Inline function 'com.patriker.icebreathing.TransitionScreen$composable.<anonymous>' call
        tmp$ret$5 = TransitionScreen$composable$slambda_0(prepState$delegate, null);
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
      LaunchedEffect$composable(true, tmp$ret$9, $composer_0, 6);
      var tmp_4 = transition.d7a();
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var tmp3_remember$composable = 112 & $dirty >> 3;
      var $composer_3 = tmp2_remember$composable;
      $composer_3.y1a(-1124426577);
      sourceInformation($composer_3, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = $composer_3;
      var tmp2_cache_0 = !!($composer_3.z1a(transition) | $composer_3.z1a(finishedPrep));
      var tmp$ret$12;
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = tmp1_cache_1.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (tmp2_cache_0 ? true : tmp0_let_1 === Companion_getInstance_0().c1b_1) {
        var tmp$ret$10;
        // Inline function 'com.patriker.icebreathing.TransitionScreen$composable.<anonymous>' call
        tmp$ret$10 = TransitionScreen$composable$slambda_2(transition, finishedPrep, null);
        var value_1 = tmp$ret$10;
        tmp1_cache_1.b1b(value_1);
        tmp_5 = value_1;
      } else {
        tmp_5 = tmp0_let_1;
      }
      tmp$ret$11 = tmp_5;
      tmp$ret$12 = tmp$ret$11;
      var tmp_6 = tmp$ret$12;
      tmp$ret$13 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      var tmp0_1 = tmp$ret$13;
      $composer_3.d1b();
      tmp$ret$14 = tmp0_1;
      LaunchedEffect$composable(tmp_4, tmp$ret$14, $composer_0, 0);
      var tmp$ret$18;
      // Inline function 'androidx.compose.animation.core.animateFloat$composable' call
      var tmp4_animateFloat$composable = TransitionScreen$composable$lambda_3;
      var tmp5_animateFloat$composable = $composer_0;
      var transitionSpec = tmp4_animateFloat$composable;
      var label = 'Text Opacity';
      var $composer_4 = tmp5_animateFloat$composable;
      $composer_4.y1a(1610198356);
      sourceInformation($composer_4, 'C(animateFloat$composable)P(2)938@37489L78:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec = TransitionScreen$composable$lambda_4;
      }
      if (!(0 === 0))
        label = 'FloatAnimation';
      var tmp$ret$17;
      // Inline function 'androidx.compose.animation.core.animateValue$composable' call
      var tmp0_animateValue$composable = get_VectorConverter_0(FloatCompanionObject_getInstance());
      var tmp1_animateValue$composable = transitionSpec;
      var tmp2_animateValue$composable = label;
      var tmp3_animateValue$composable = $composer_4;
      var tmp4_animateValue$composable = 3072;
      var transitionSpec_0 = tmp1_animateValue$composable;
      var label_0 = tmp2_animateValue$composable;
      var $composer_5 = tmp3_animateValue$composable;
      $composer_5.y1a(-1940744337);
      sourceInformation($composer_5, 'C(animateValue$composable)P(3,2)856@34079L32,857@34134L31,858@34190L23,860@34226L89:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec_0 = TransitionScreen$composable$lambda_5;
      }
      if (!(0 === 0))
        label_0 = 'ValueAnimation';
      var tmp$ret$15;
      // Inline function 'com.patriker.icebreathing.TransitionScreen$composable.<anonymous>' call
      var tmp6__anonymous__fv9ai5 = transition.d7a();
      var tmp7__anonymous__b0knam = $composer_5;
      var tmp8__anonymous__65w033 = 112 & tmp4_animateValue$composable >> 9;
      var $composer_6 = tmp7__anonymous__b0knam;
      $composer_6.y1a(1463495723);
      if (isTraceInProgress()) {
        traceEventStart(1463495723, tmp8__anonymous__65w033, -1, 'com.patriker.icebreathing.TransitionScreen$composable.<anonymous> (TransitionScreen.kt:37)');
      }
      var tmp0_subject = tmp6__anonymous__fv9ai5;
      var tmp0_2 = tmp0_subject.t5_1;
      var tmp_7;
      switch (tmp0_2) {
        case 0:
          tmp_7 = 1.0;
          break;
        case 1:
          tmp_7 = 0.0;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_3 = tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_6.d1b();
      tmp$ret$15 = tmp0_3;
      var initialValue = tmp$ret$15;
      var tmp$ret$16;
      // Inline function 'com.patriker.icebreathing.TransitionScreen$composable.<anonymous>' call
      var tmp9__anonymous__1b7cvk = transition.o79();
      var tmp10__anonymous__yfiz50 = $composer_5;
      var tmp11__anonymous__tkubxh = 112 & tmp4_animateValue$composable >> 9;
      var $composer_7 = tmp10__anonymous__yfiz50;
      $composer_7.y1a(1463495723);
      if (isTraceInProgress()) {
        traceEventStart(1463495723, tmp11__anonymous__tkubxh, -1, 'com.patriker.icebreathing.TransitionScreen$composable.<anonymous> (TransitionScreen.kt:37)');
      }
      var tmp0_subject_0 = tmp9__anonymous__1b7cvk;
      var tmp0_4 = tmp0_subject_0.t5_1;
      var tmp_8;
      switch (tmp0_4) {
        case 0:
          tmp_8 = 1.0;
          break;
        case 1:
          tmp_8 = 0.0;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_5 = tmp_8;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_7.d1b();
      tmp$ret$16 = tmp0_5;
      var targetValue = tmp$ret$16;
      var animationSpec = transitionSpec_0(transition.k7a(), $composer_5, 112 & tmp4_animateValue$composable >> 3);
      var tmp0_6 = createTransitionAnimation$composable(transition, initialValue, targetValue, animationSpec, tmp0_animateValue$composable, label_0, $composer_5, 14 & tmp4_animateValue$composable | 57344 & tmp4_animateValue$composable << 9 | 458752 & tmp4_animateValue$composable << 6);
      $composer_5.d1b();
      tmp$ret$17 = tmp0_6;
      var tmp0_7 = tmp$ret$17;
      $composer_4.d1b();
      tmp$ret$18 = tmp0_7;
      var textOpacity$delegate = tmp$ret$18;
      // Inline function 'androidx.compose.foundation.layout.Column$composable' call
      var tmp12_Column$composable = null;
      var tmp13_Column$composable = null;
      var tmp14_Column$composable = Companion_getInstance_2().f4e_1;
      var tmp15_Column$composable = $composer_0;
      var modifier = tmp12_Column$composable;
      var verticalArrangement = tmp13_Column$composable;
      var horizontalAlignment = tmp14_Column$composable;
      var $composer_8 = tmp15_Column$composable;
      $composer_8.y1a(860130704);
      sourceInformation($composer_8, 'C(Column$composable)P(2,3,1)77@3913L61,78@3979L133:Column.kt#2w3rfo');
      if (!(1 === 0))
        modifier = Companion_getInstance();
      if (!(2 === 0))
        verticalArrangement = Arrangement_getInstance().h7c_1;
      if (!(0 === 0))
        horizontalAlignment = Companion_getInstance_2().e4e_1;
      var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_8, 48);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp0_Layout$composable = modifier;
      var tmp1_Layout$composable = $composer_8;
      var tmp2_Layout$composable = 0;
      var modifier_0 = tmp0_Layout$composable;
      var $composer_9 = tmp1_Layout$composable;
      $composer_9.y1a(1725976829);
      sourceInformation($composer_9, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance();
      var tmp$ret$19;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_9;
      var $composer_10 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_10, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_8 = $composer_10.w1n(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_10);
      tmp$ret$19 = tmp0_8;
      var density = tmp$ret$19;
      var tmp$ret$20;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua = $composer_9;
      var $composer_11 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_11, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_9 = $composer_11.w1n(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_11);
      tmp$ret$20 = tmp0_9;
      var layoutDirection = tmp$ret$20;
      var tmp$ret$21;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro = $composer_9;
      var $composer_12 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_12, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_10 = $composer_12.w1n(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_12);
      tmp$ret$21 = tmp0_10;
      var viewConfiguration = tmp$ret$21;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_1().a5e_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
      var tmp8_ReusableComposeNode$composable = $composer_9;
      var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
      var $composer_13 = tmp8_ReusableComposeNode$composable;
      var tmp_9 = $composer_13.u1m();
      if (!isInterface(tmp_9, Applier)) {
        invalidApplier();
      }
      $composer_13.g1n();
      if ($composer_13.e1n()) {
        $composer_13.h1n(tmp6_ReusableComposeNode$composable);
      } else {
        $composer_13.j1n();
      }
      $composer_13.l1n();
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp10__anonymous__yfiz50_0 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, measurePolicy, Companion_getInstance_1().e5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, density, Companion_getInstance_1().d5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, layoutDirection, Companion_getInstance_1().f5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, viewConfiguration, Companion_getInstance_1().g5e_1);
      $composer_13.m1n();
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_13)), $composer_13, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_13.y1a(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
      var tmp3__anonymous__ufb84q = $composer_13;
      var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_14 = tmp3__anonymous__ufb84q;
      $composer_14.y1a(-1163856341);
      sourceInformation($composer_14, 'C79@4027L9:Column.kt#2w3rfo');
      if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_14.l1m()) {
        // Inline function 'com.patriker.icebreathing.TransitionScreen$composable.<anonymous>' call
        var tmp16__anonymous__5bf3vu = ColumnScopeInstance_getInstance();
        var tmp17__anonymous__gqgob = $composer_14;
        var tmp18__anonymous__4dy6j8 = 6;
        var $composer_15 = tmp17__anonymous__gqgob;
        if (!((tmp18__anonymous__4dy6j8 & 81) === 16) ? true : !$composer_15.l1m()) {
          var tmp_10 = StrRes_getInstance().l9k_1 + ' ' + roundNum;
          var tmp_11 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_12 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_14 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_15 = _TextOverflow___init__impl__obguoe(0);
          var tmp0_fontSize = get_sp(28);
          var tmp_16 = Companion_getInstance_4().i3a_1;
          var tmp_17 = TransitionScreen$composable$lambda_1(textOpacity$delegate);
          var tmp1_color = Color__copy$default_impl_ectz3s(tmp_16, tmp_17, 0.0, 0.0, 0.0, 14, null);
          Text$composable(tmp_10, null, tmp_11, tmp_12, null, null, null, tmp_13, null, null, tmp_14, tmp_15, false, 0, null, TextStyle_init_$Create$(tmp1_color, tmp0_fontSize, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 262140, null), $composer_15, 0, 0, 32766);
          var tmp_18 = StrRes_getInstance().q9k_1;
          var tmp_19 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_20 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_21 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_22 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_23 = _TextOverflow___init__impl__obguoe(0);
          var tmp2_fontSize = get_sp(28);
          var tmp_24 = Companion_getInstance_4().i3a_1;
          var tmp_25 = TransitionScreen$composable$lambda_1(textOpacity$delegate);
          var tmp3_color = Color__copy$default_impl_ectz3s(tmp_24, tmp_25, 0.0, 0.0, 0.0, 14, null);
          Text$composable(tmp_18, null, tmp_19, tmp_20, null, null, null, tmp_21, null, null, tmp_22, tmp_23, false, 0, null, TextStyle_init_$Create$(tmp3_color, tmp2_fontSize, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 262140, null), $composer_15, 6, 0, 32766);
          var tmp_26 = Companion_getInstance();
          var tmp$ret$22;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$22 = _Dp___init__impl__ms3zkb(30);
          Spacer$composable(height(tmp_26, tmp$ret$22), $composer_15, 6);
          var tmp_27 = '' + breathGoal + ' ' + StrRes_getInstance().m9k_1;
          var tmp_28 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_29 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_30 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_31 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_32 = _TextOverflow___init__impl__obguoe(0);
          var tmp4_fontSize = get_sp(24);
          var tmp_33 = Companion_getInstance_4().i3a_1;
          var tmp_34 = TransitionScreen$composable$lambda_1(textOpacity$delegate);
          var tmp5_color = Color__copy$default_impl_ectz3s(tmp_33, tmp_34, 0.0, 0.0, 0.0, 14, null);
          Text$composable(tmp_27, null, tmp_28, tmp_29, null, null, null, tmp_30, null, null, tmp_31, tmp_32, false, 0, null, TextStyle_init_$Create$(tmp5_color, tmp4_fontSize, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 262140, null), $composer_15, 0, 0, 32766);
        } else {
          $composer_15.l1h();
        }
      } else {
        $composer_14.l1h();
      }
      $composer_14.d1b();
      $composer_13.d1b();
      $composer_13.k1n();
      $composer_9.d1b();
      $composer_8.d1b();
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
      tmp0_safe_receiver.g1p(TransitionScreen$composable$lambda$ref(roundNum, breathGoal, finishedPrep, $changed));
    }
  }
  function TransitionScreen$composable$lambda($prepState$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('prepState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $prepState$delegate.i2();
    return tmp$ret$0;
  }
  function TransitionScreen$composable$lambda_0($prepState$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('prepState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $prepState$delegate.p11(value);
  }
  function TransitionScreen$composable$lambda_1($textOpacity$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('textOpacity', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $textOpacity$delegate.i2();
    return tmp$ret$0;
  }
  function TransitionScreen$composable$lambda_2($roundNum, $breathGoal, $finishedPrep, $$changed, $composer, $force) {
    return TransitionScreen$composable($roundNum, $breathGoal, $finishedPrep, $composer, $$changed | 1);
  }
  function TransitionScreen$composable$slambda($prepState$delegate, resultContinuation) {
    this.l9p_1 = $prepState$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  TransitionScreen$composable$slambda.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  TransitionScreen$composable$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  TransitionScreen$composable$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          TransitionScreen$composable$lambda_0(this.l9p_1, PrepareState_End_getInstance());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.cg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  TransitionScreen$composable$slambda.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new TransitionScreen$composable$slambda(this.l9p_1, completion);
    i.m9p_1 = $this$LaunchedEffect;
    return i;
  };
  TransitionScreen$composable$slambda.$metadata$ = classMeta('TransitionScreen$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function TransitionScreen$composable$slambda_0($prepState$delegate, resultContinuation) {
    var i = new TransitionScreen$composable$slambda($prepState$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function TransitionScreen$composable$slambda_1($transition, $finishedPrep, resultContinuation) {
    this.v9p_1 = $transition;
    this.w9p_1 = $finishedPrep;
    CoroutineImpl.call(this, resultContinuation);
  }
  TransitionScreen$composable$slambda_1.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  TransitionScreen$composable$slambda_1.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  TransitionScreen$composable$slambda_1.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          if (this.v9p_1.d7a().equals(PrepareState_End_getInstance()))
            this.w9p_1(SessionState_Prepare_getInstance());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.cg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  TransitionScreen$composable$slambda_1.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new TransitionScreen$composable$slambda_1(this.v9p_1, this.w9p_1, completion);
    i.x9p_1 = $this$LaunchedEffect;
    return i;
  };
  TransitionScreen$composable$slambda_1.$metadata$ = classMeta('TransitionScreen$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function TransitionScreen$composable$slambda_2($transition, $finishedPrep, resultContinuation) {
    var i = new TransitionScreen$composable$slambda_1($transition, $finishedPrep, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function TransitionScreen$composable$lambda_3($this$animateFloat, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(-343298098);
    if (isTraceInProgress()) {
      traceEventStart(-343298098, $changed, -1, 'com.patriker.icebreathing.TransitionScreen$composable.<anonymous> (TransitionScreen.kt:35)');
    }
    var tmp0 = tween(2000, 500, get_LinearEasing());
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0;
  }
  function TransitionScreen$composable$lambda_4($this$null, $composer, $changed) {
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
  function TransitionScreen$composable$lambda_5($this$null, $composer, $changed) {
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
  function TransitionScreen$composable$lambda$ref($roundNum, $breathGoal, $finishedPrep, $$changed) {
    return function (p0, p1) {
      TransitionScreen$composable$lambda_2($roundNum, $breathGoal, $finishedPrep, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function PrepareState_Start_getInstance() {
    PrepareState_initEntries();
    return PrepareState_Start_instance;
  }
  function PrepareState_End_getInstance() {
    PrepareState_initEntries();
    return PrepareState_End_instance;
  }
  function main() {
    onWasmReady(main$lambda);
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1) {
      return $boundThis.j1m(p0, p1);
    };
  }
  function ComposableSingletons$Main_jsKt$lambda_1$lambda_p8n0x1($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(-1062432982, $changed, -1, 'com.patriker.icebreathing.ComposableSingletons$Main_jsKt.lambda-1.<anonymous> (main.js.kt:21)');
      }
      App$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1) {
      return $boundThis.j1m(p0, p1);
    };
  }
  function ComposableSingletons$Main_jsKt$lambda_2$lambda_gyujzw($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(1314294502, $changed, -1, 'com.patriker.icebreathing.ComposableSingletons$Main_jsKt.lambda-2.<anonymous> (main.js.kt:17)');
      }
      var tmp = Companion_getInstance();
      var tmp_0 = fillMaxSize$default(tmp, 0.0, 1, null);
      var tmp_1 = MaterialTheme_getInstance().e93($composer_0, 6).y3w();
      var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      Surface$composable(tmp_0, null, tmp_1, tmp_2, null, _Dp___init__impl__ms3zkb(0.0), ComposableSingletons$Main_jsKt_getInstance().y9p_1, $composer_0, 1572870, 58);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1) {
      return $boundThis.j1m(p0, p1);
    };
  }
  function ComposableSingletons$Main_jsKt$lambda_3$lambda_burx2b($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(-1877099462, $changed, -1, 'com.patriker.icebreathing.ComposableSingletons$Main_jsKt.lambda-3.<anonymous> (main.js.kt:16)');
      }
      IcedroidTheme$composable(false, ComposableSingletons$Main_jsKt_getInstance().z9p_1, $composer_0, 48, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$Main_jsKt() {
    ComposableSingletons$Main_jsKt_instance = this;
    var tmp = this;
    tmp.y9p_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-1062432982, false, ComposableSingletons$Main_jsKt$lambda_1$lambda_p8n0x1));
    var tmp_0 = this;
    tmp_0.z9p_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(1314294502, false, ComposableSingletons$Main_jsKt$lambda_2$lambda_gyujzw));
    var tmp_1 = this;
    tmp_1.a9q_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(-1877099462, false, ComposableSingletons$Main_jsKt$lambda_3$lambda_burx2b));
  }
  ComposableSingletons$Main_jsKt.$metadata$ = objectMeta('ComposableSingletons$Main_jsKt');
  var ComposableSingletons$Main_jsKt_instance;
  function ComposableSingletons$Main_jsKt_getInstance() {
    if (ComposableSingletons$Main_jsKt_instance == null)
      new ComposableSingletons$Main_jsKt();
    return ComposableSingletons$Main_jsKt_instance;
  }
  function main$lambda() {
    Window$composable('Ice Breathing', ComposableSingletons$Main_jsKt_getInstance().a9q_1);
    return Unit_getInstance();
  }
  var Purple200;
  function get_BlueLight() {
    init_properties_Color_kt_sl2q0h();
    return BlueLight;
  }
  var BlueLight;
  function get_DeepBlue() {
    init_properties_Color_kt_sl2q0h();
    return DeepBlue;
  }
  var DeepBlue;
  function get_MagentaLight() {
    init_properties_Color_kt_sl2q0h();
    return MagentaLight;
  }
  var MagentaLight;
  function get_Magenta2() {
    init_properties_Color_kt_sl2q0h();
    return Magenta2;
  }
  var Magenta2;
  function get_SeaBlue() {
    init_properties_Color_kt_sl2q0h();
    return SeaBlue;
  }
  var SeaBlue;
  var properties_initialized_Color_kt_bdybnx;
  function init_properties_Color_kt_sl2q0h() {
    if (properties_initialized_Color_kt_bdybnx) {
    } else {
      properties_initialized_Color_kt_bdybnx = true;
      Purple200 = Color_0(new Long(-4487428, 0));
      BlueLight = Color_0(new Long(-15698482, 0));
      DeepBlue = Color_0(new Long(-15133109, 0));
      MagentaLight = Color_0(new Long(-16546572, 0));
      Magenta2 = Color_0(new Long(-14273915, 0));
      SeaBlue = Color_0(new Long(-15133109, 0));
    }
  }
  function get_Shapes() {
    init_properties_Shape_kt_qnjoz7();
    return Shapes_0;
  }
  var Shapes_0;
  var properties_initialized_Shape_kt_9gfamn;
  function init_properties_Shape_kt_qnjoz7() {
    if (properties_initialized_Shape_kt_9gfamn) {
    } else {
      properties_initialized_Shape_kt_9gfamn = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
      var tmp = RoundedCornerShape(tmp$ret$0);
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(4);
      var tmp_0 = RoundedCornerShape(tmp$ret$1);
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$2 = _Dp___init__impl__ms3zkb(0);
      Shapes_0 = new Shapes(tmp, tmp_0, RoundedCornerShape(tmp$ret$2));
    }
  }
  var DarkColorPalette;
  function get_LightColorPalette() {
    init_properties_Theme_kt_dpes51();
    return LightColorPalette;
  }
  var LightColorPalette;
  function IcedroidTheme$composable(darkTheme, content, $composer, $changed, $default) {
    init_properties_Theme_kt_dpes51();
    var darkTheme_0 = {_v: darkTheme};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(1864499263);
    sourceInformation($composer_0, 'C(IcedroidTheme$composable)P(1)');
    var $dirty = $changed;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(content) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.l1m()) {
      $composer_0.y1m();
      if (($changed & 1) === 0 ? true : $composer_0.c1n()) {
        if (!(($default & 1) === 0)) {
          darkTheme_0._v = isSystemInDarkTheme$composable($composer_0, 0);
          $dirty = $dirty & -15;
        }
      } else {
        $composer_0.l1h();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.z1m();
      if (isTraceInProgress()) {
        traceEventStart(1864499263, $dirty, -1, 'com.patriker.icebreathing.ui.theme.IcedroidTheme$composable (Theme.kt:34)');
      }
      var colors = get_LightColorPalette();
      MaterialTheme$composable(colors, get_IceDroidFonts(), get_Shapes(), content, $composer_0, 54 | 7168 & $dirty << 6, 0);
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
      tmp0_safe_receiver.g1p(IcedroidTheme$composable$lambda$ref(darkTheme_0, content, $changed, $default));
    }
  }
  function IcedroidTheme$composable$lambda($darkTheme, $content, $$changed, $$default, $composer, $force) {
    return IcedroidTheme$composable($darkTheme._v, $content, $composer, $$changed | 1, $$default);
  }
  function IcedroidTheme$composable$lambda$ref($darkTheme, $content, $$changed, $$default) {
    return function (p0, p1) {
      IcedroidTheme$composable$lambda($darkTheme, $content, $$changed, $$default, p0, p1);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Theme_kt_uwj6hl;
  function init_properties_Theme_kt_dpes51() {
    if (properties_initialized_Theme_kt_uwj6hl) {
    } else {
      properties_initialized_Theme_kt_uwj6hl = true;
      var tmp = get_BlueLight();
      var tmp_0 = get_DeepBlue();
      var tmp_1 = get_MagentaLight();
      var tmp_2 = get_Magenta2();
      var tmp_3 = get_SeaBlue();
      DarkColorPalette = darkColors$default(tmp, tmp_0, tmp_1, tmp_2, tmp_3, null, null, null, null, null, null, null, 4064, null);
      var tmp_4 = get_BlueLight();
      var tmp_5 = get_DeepBlue();
      var tmp_6 = get_MagentaLight();
      var tmp_7 = get_Magenta2();
      var tmp_8 = get_SeaBlue();
      LightColorPalette = lightColors$default(tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, null, null, null, null, null, null, null, 4064, null);
    }
  }
  function get_IceDroidFonts() {
    init_properties_Type_kt_a27o2o();
    return IceDroidFonts;
  }
  var IceDroidFonts;
  var properties_initialized_Type_kt_b459h8;
  function init_properties_Type_kt_a27o2o() {
    if (properties_initialized_Type_kt_b459h8) {
    } else {
      properties_initialized_Type_kt_b459h8 = true;
      var tmp = Companion_getInstance_7().g3y_1;
      var tmp0_fontFamily = Companion_getInstance_7().g3y_1;
      var tmp1_fontWeight = Companion_getInstance_6().s3x_1;
      var tmp2_fontSize = get_sp(16);
      var tmp_0 = TextStyle_init_$Create$(null, tmp2_fontSize, tmp1_fontWeight, null, null, tmp0_fontFamily, null, null, null, null, null, null, null, null, null, null, null, null, 262105, null);
      IceDroidFonts = Typography_init_$Create$(tmp, null, null, null, null, null, null, null, null, tmp_0, null, null, null, null, 15870, null);
    }
  }
  //region block: init
  ANIM_MS = 1540;
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=icebreathing-mpp-jsApp.js.map
