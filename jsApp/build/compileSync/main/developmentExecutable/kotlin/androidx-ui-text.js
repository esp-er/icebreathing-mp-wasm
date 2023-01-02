(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui-unit.js', './androidx-ui-graphics.js', './androidx-ui-geometry.js', './androidx-runtime-saveable.js', './androidx-runtime.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui-unit.js'), require('./androidx-ui-graphics.js'), require('./androidx-ui-geometry.js'), require('./androidx-runtime-saveable.js'), require('./androidx-runtime.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./skiko-kjs.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-text'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-ui-text'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-text'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-ui-text'.");
    }
    if (typeof this['androidx-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-text'. Its dependency 'androidx-ui-graphics' was not found. Please, check whether 'androidx-ui-graphics' is loaded prior to 'androidx-ui-text'.");
    }
    if (typeof this['androidx-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-text'. Its dependency 'androidx-ui-geometry' was not found. Please, check whether 'androidx-ui-geometry' is loaded prior to 'androidx-ui-text'.");
    }
    if (typeof this['androidx-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-text'. Its dependency 'androidx-runtime-saveable' was not found. Please, check whether 'androidx-runtime-saveable' is loaded prior to 'androidx-ui-text'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-text'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-ui-text'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-text'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'androidx-ui-text'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-text'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'androidx-ui-text'.");
    }
    root['androidx-ui-text'] = factory(typeof this['androidx-ui-text'] === 'undefined' ? {} : this['androidx-ui-text'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui-unit'], this['androidx-ui-graphics'], this['androidx-ui-geometry'], this['androidx-runtime-saveable'], this['androidx-runtime'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_kotlin, kotlin_androidx_compose_ui_ui_unit, kotlin_androidx_compose_ui_ui_graphics, kotlin_androidx_compose_ui_ui_geometry, kotlin_androidx_compose_runtime_runtime_saveable, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.x2;
  var Unit_getInstance = kotlin_kotlin.$_$.b3;
  var toString = kotlin_kotlin.$_$.u9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var hashCode = kotlin_kotlin.$_$.b9;
  var getStringHashCode = kotlin_kotlin.$_$.a9;
  var THROW_CCE = kotlin_kotlin.$_$.kc;
  var equals = kotlin_kotlin.$_$.t8;
  var classMeta = kotlin_kotlin.$_$.q8;
  var emptyList = kotlin_kotlin.$_$.a5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.f1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.p;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var Comparator = kotlin_kotlin.$_$.yb;
  var compareValues = kotlin_kotlin.$_$.g7;
  var sortedWith = kotlin_kotlin.$_$.s6;
  var charSequenceGet = kotlin_kotlin.$_$.n8;
  var List = kotlin_kotlin.$_$.p3;
  var isInterface = kotlin_kotlin.$_$.i9;
  var CharSequence = kotlin_kotlin.$_$.ub;
  var coerceIn = kotlin_kotlin.$_$.ka;
  var Annotation = kotlin_kotlin.$_$.tb;
  var Constraints$default = kotlin_androidx_compose_ui_ui_unit.$_$.x1;
  var charSequenceLength = kotlin_kotlin.$_$.o8;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_androidx_compose_ui_ui_unit.$_$.g2;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_androidx_compose_ui_ui_unit.$_$.h2;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_androidx_compose_ui_ui_unit.$_$.f2;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_androidx_compose_ui_ui_unit.$_$.e2;
  var coerceAtLeast = kotlin_kotlin.$_$.fa;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_androidx_compose_ui_ui_unit.$_$.z1;
  var get_lastIndex = kotlin_kotlin.$_$.t5;
  var addAll = kotlin_kotlin.$_$.b4;
  var plus = kotlin_kotlin.$_$.h6;
  var last = kotlin_kotlin.$_$.y5;
  var Companion_getInstance = kotlin_androidx_compose_ui_ui_graphics.$_$.r3;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.w2;
  var Path = kotlin_androidx_compose_ui_ui_graphics.$_$.u;
  var _Offset___get_y__impl__8bzhra = kotlin_androidx_compose_ui_ui_geometry.$_$.f1;
  var _Offset___get_x__impl__xvi35n = kotlin_androidx_compose_ui_ui_geometry.$_$.e1;
  var Offset = kotlin_androidx_compose_ui_ui_geometry.$_$.d;
  var getNumberHashCode = kotlin_kotlin.$_$.x8;
  var compareTo = kotlin_kotlin.$_$.r8;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.e;
  var lazy = kotlin_kotlin.$_$.ad;
  var KProperty1 = kotlin_kotlin.$_$.ta;
  var getPropertyCallableRef = kotlin_kotlin.$_$.z8;
  var numberToInt = kotlin_kotlin.$_$.o9;
  var interfaceMeta = kotlin_kotlin.$_$.d9;
  var Companion_getInstance_0 = kotlin_androidx_compose_ui_ui_unit.$_$.s3;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_androidx_compose_ui_ui_unit.$_$.e3;
  var get_isUnspecified = kotlin_androidx_compose_ui_ui_unit.$_$.l1;
  var TextUnit__hashCode_impl_qsmeov = kotlin_androidx_compose_ui_ui_unit.$_$.y2;
  var TextUnit = kotlin_androidx_compose_ui_ui_unit.$_$.c1;
  var objectMeta = kotlin_kotlin.$_$.q9;
  var THROW_ISE = kotlin_kotlin.$_$.lc;
  var Enum = kotlin_kotlin.$_$.zb;
  var arrayListOf = kotlin_kotlin.$_$.d4;
  var ensureNotNull = kotlin_kotlin.$_$.uc;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.cd;
  var Color = kotlin_androidx_compose_ui_ui_graphics.$_$.k;
  var Companion_getInstance_1 = kotlin_androidx_compose_ui_ui_graphics.$_$.y3;
  var Shadow = kotlin_androidx_compose_ui_ui_graphics.$_$.x;
  var Offset_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.e;
  var Companion_getInstance_2 = kotlin_androidx_compose_ui_ui_geometry.$_$.m1;
  var _Color___get_value__impl__1pls5m = kotlin_androidx_compose_ui_ui_graphics.$_$.v2;
  var ULong = kotlin_kotlin.$_$.nc;
  var _Color___init__impl__r6cqi2 = kotlin_androidx_compose_ui_ui_graphics.$_$.n2;
  var _TextUnit___get_type__impl__uc2olt = kotlin_androidx_compose_ui_ui_unit.$_$.d3;
  var TextUnitType = kotlin_androidx_compose_ui_ui_unit.$_$.a1;
  var TextUnit_0 = kotlin_androidx_compose_ui_ui_unit.$_$.b1;
  var Saver = kotlin_androidx_compose_runtime_runtime_saveable.$_$.a;
  var Color__hashCode_impl_vjyivj = kotlin_androidx_compose_ui_ui_graphics.$_$.t2;
  var get_sp = kotlin_androidx_compose_ui_ui_unit.$_$.s1;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.g1;
  var toString_0 = kotlin_kotlin.$_$.ld;
  var Char = kotlin_kotlin.$_$.vb;
  var isCharSequence = kotlin_kotlin.$_$.g9;
  var _IntSize___get_height__impl__prv63b = kotlin_androidx_compose_ui_ui_unit.$_$.u2;
  var _IntSize___get_width__impl__d9yl4o = kotlin_androidx_compose_ui_ui_unit.$_$.w2;
  var IntSize__hashCode_impl_gm9mta = kotlin_androidx_compose_ui_ui_unit.$_$.t2;
  var IntSize = kotlin_androidx_compose_ui_ui_unit.$_$.z;
  var Constraints__hashCode_impl_ij7484 = kotlin_androidx_compose_ui_ui_unit.$_$.d2;
  var Constraints = kotlin_androidx_compose_ui_ui_unit.$_$.b;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.x;
  var Size = kotlin_androidx_compose_ui_ui_geometry.$_$.j;
  var Rect = kotlin_androidx_compose_ui_ui_geometry.$_$.f;
  var Long = kotlin_kotlin.$_$.ec;
  var toLong = kotlin_kotlin.$_$.s9;
  var fillArrayVal = kotlin_kotlin.$_$.u8;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.y;
  var NullPointerException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var first = kotlin_kotlin.$_$.k5;
  var Map = kotlin_kotlin.$_$.r3;
  var MutableMap = kotlin_kotlin.$_$.x3;
  var MutableCollection = kotlin_kotlin.$_$.s3;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var copyOf = kotlin_kotlin.$_$.x4;
  var copyOf_0 = kotlin_kotlin.$_$.w4;
  var isObject = kotlin_kotlin.$_$.j9;
  var println = kotlin_kotlin.$_$.h8;
  var arrayCopy = kotlin_kotlin.$_$.c4;
  var ClassCastException = kotlin_kotlin.$_$.wb;
  var NullPointerException = kotlin_kotlin.$_$.hc;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g2;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.q;
  var asList = kotlin_kotlin.$_$.e4;
  var CoroutineImpl = kotlin_kotlin.$_$.a8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.k7;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.t1;
  var Exception = kotlin_kotlin.$_$.bc;
  var State = kotlin_androidx_compose_runtime_runtime.$_$.c1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.o7;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var get = kotlin_kotlin.$_$.v7;
  var fold = kotlin_kotlin.$_$.u7;
  var minusKey = kotlin_kotlin.$_$.w7;
  var plus_0 = kotlin_kotlin.$_$.z7;
  var CoroutineExceptionHandler = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var withTimeout = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.u2;
  var async$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var joinAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var Key_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var to = kotlin_kotlin.$_$.md;
  var first_0 = kotlin_kotlin.$_$.j5;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var get_indices = kotlin_kotlin.$_$.s5;
  var yield_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var CancellationException = kotlin_kotlin.$_$.j7;
  var mutableStateOf$default = kotlin_androidx_compose_runtime_runtime.$_$.a2;
  var mutableListOf = kotlin_kotlin.$_$.f6;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.z2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.k2;
  var createFailure = kotlin_kotlin.$_$.tc;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.n2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.m2;
  var KMutableProperty1 = kotlin_kotlin.$_$.ra;
  var SuspendFunction1 = kotlin_kotlin.$_$.c8;
  var SuspendFunction0 = kotlin_kotlin.$_$.b8;
  var listOf = kotlin_kotlin.$_$.c6;
  var Comparable = kotlin_kotlin.$_$.xb;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var charArray = kotlin_kotlin.$_$.m8;
  var AtomicReference = kotlin_androidx_compose_runtime_runtime.$_$.l;
  var split$default = kotlin_kotlin.$_$.m;
  var trim = kotlin_kotlin.$_$.rb;
  var toList = kotlin_kotlin.$_$.b7;
  var Collection = kotlin_kotlin.$_$.l3;
  var ShaderBrush = kotlin_androidx_compose_ui_ui_graphics.$_$.w;
  var SolidColor = kotlin_androidx_compose_ui_ui_graphics.$_$.z;
  var isNaN_0 = kotlin_kotlin.$_$.yc;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_androidx_compose_ui_ui_graphics.$_$.o2;
  var Color__copy$default_impl_ectz3s = kotlin_androidx_compose_ui_ui_graphics.$_$.j3;
  var NotImplementedError = kotlin_kotlin.$_$.gc;
  var listOf_0 = kotlin_kotlin.$_$.b6;
  var lazy_0 = kotlin_kotlin.$_$.bd;
  var Companion_getInstance_4 = kotlin_org_jetbrains_skiko_skiko.$_$.g8;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$_$.t7;
  var mapOf = kotlin_kotlin.$_$.e6;
  var KProperty0 = kotlin_kotlin.$_$.sa;
  var capitalize = kotlin_kotlin.$_$.ab;
  var decapitalize = kotlin_kotlin.$_$.cb;
  var NotImplementedError_init_$Create$ = kotlin_kotlin.$_$.n;
  var until = kotlin_kotlin.$_$.pa;
  var getObjectHashCode = kotlin_kotlin.$_$.y8;
  var last_0 = kotlin_kotlin.$_$.a6;
  var isArray = kotlin_kotlin.$_$.e9;
  var LineMetrics = kotlin_org_jetbrains_skiko_skiko.$_$.j8;
  var RectHeightMode_STRUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p;
  var RectWidthMode_TIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q;
  var firstOrNull = kotlin_kotlin.$_$.i5;
  var first_1 = kotlin_kotlin.$_$.l5;
  var Rect_0 = kotlin_org_jetbrains_skiko_skiko.$_$.a9;
  var TextBox = kotlin_org_jetbrains_skiko_skiko.$_$.o8;
  var get_lastIndex_0 = kotlin_kotlin.$_$.gb;
  var lastOrNull = kotlin_kotlin.$_$.x5;
  var toComposeRect = kotlin_androidx_compose_ui_ui_graphics.$_$.i1;
  var RectHeightMode_MAX_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o;
  var asSkiaPath = kotlin_androidx_compose_ui_ui_graphics.$_$.d1;
  var coerceAtMost = kotlin_kotlin.$_$.ga;
  var Rect_1 = kotlin_androidx_compose_ui_ui_geometry.$_$.g;
  var getOrNull = kotlin_kotlin.$_$.n5;
  var Direction_RTL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j;
  var Direction_LTR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i;
  var getOrNull_0 = kotlin_kotlin.$_$.eb;
  var isLetterOrDigit = kotlin_kotlin.$_$.fb;
  var get_nativeCanvas = kotlin_androidx_compose_ui_ui_graphics.$_$.g1;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.e2;
  var FontCollection_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.g7;
  var TypefaceFontProvider = kotlin_org_jetbrains_skiko_skiko.$_$.q8;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$_$.v7;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var copyToArray = kotlin_kotlin.$_$.y4;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.w7;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.i7;
  var toArgb = kotlin_androidx_compose_ui_ui_graphics.$_$.h1;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.l7;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.u7;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.d2;
  var _TextUnit___get_isSp__impl__8c3r6q = kotlin_androidx_compose_ui_ui_unit.$_$.a3;
  var _TextUnit___get_isEm__impl__esrmtl = kotlin_androidx_compose_ui_ui_unit.$_$.z2;
  var DecorationLineStyle_SOLID_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h;
  var DecorationStyle = kotlin_org_jetbrains_skiko_skiko.$_$.i8;
  var Shadow_0 = kotlin_org_jetbrains_skiko_skiko.$_$.n8;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.hd;
  var sortWith = kotlin_kotlin.$_$.q6;
  var asReversed = kotlin_kotlin.$_$.f4;
  var ParagraphStyle = kotlin_org_jetbrains_skiko_skiko.$_$.l8;
  var StrutStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.h7;
  var TextIndent = kotlin_org_jetbrains_skiko_skiko.$_$.p8;
  var Font_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.k7;
  var ParagraphBuilder = kotlin_org_jetbrains_skiko_skiko.$_$.k8;
  var charSequenceSubSequence = kotlin_kotlin.$_$.p8;
  var BaselineMode_ALPHABETIC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g;
  var PlaceholderStyle = kotlin_org_jetbrains_skiko_skiko.$_$.m8;
  var checkArithmetic = kotlin_androidx_compose_ui_ui_unit.$_$.g1;
  var _TextUnit___get_rawType__impl__tu8yq5 = kotlin_androidx_compose_ui_ui_unit.$_$.c3;
  var pack = kotlin_androidx_compose_ui_ui_unit.$_$.o1;
  var PlaceholderAlignment_MIDDLE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m;
  var PlaceholderAlignment_BOTTOM_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l;
  var PlaceholderAlignment_TOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n;
  var PlaceholderAlignment_ABOVE_BASELINE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k;
  var Alignment_END_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b;
  var Alignment_START_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f;
  var Alignment_JUSTIFY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c;
  var Alignment_CENTER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a;
  var Alignment_RIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e;
  var Alignment_LEFT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d;
  //endregion
  //region block: pre-declaration
  function get_hasStaleResolvedFonts() {
    return false;
  }
  AnnotationType.prototype = Object.create(Enum.prototype);
  AnnotationType.prototype.constructor = AnnotationType;
  VerbatimTtsAnnotation.prototype = Object.create(TtsAnnotation.prototype);
  VerbatimTtsAnnotation.prototype.constructor = VerbatimTtsAnnotation;
  function resolve$default(fontFamily, fontWeight, fontStyle, fontSynthesis, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      fontFamily = null;
    if (!(($mask0 & 2) === 0))
      fontWeight = Companion_getInstance_20().Normal_1;
    if (!(($mask0 & 4) === 0))
      fontStyle = Companion_getInstance_18().Normal_1;
    if (!(($mask0 & 8) === 0))
      fontSynthesis = Companion_getInstance_19().All_1;
    var tmp;
    if ($handler == null) {
      tmp = this.resolve_3z78ru_k$(fontFamily, fontWeight, fontStyle, fontSynthesis);
    } else {
      var tmp_0 = fontStyle;
      var tmp_1 = tmp_0 == null ? null : new FontStyle(tmp_0);
      var tmp_2 = fontSynthesis;
      tmp = $handler(fontFamily, fontWeight, tmp_1, tmp_2 == null ? null : new FontSynthesis(tmp_2));
    }
    return tmp;
  }
  SystemFontFamily.prototype = Object.create(FontFamily.prototype);
  SystemFontFamily.prototype.constructor = SystemFontFamily;
  DefaultFontFamily.prototype = Object.create(SystemFontFamily.prototype);
  DefaultFontFamily.prototype.constructor = DefaultFontFamily;
  GenericFontFamily.prototype = Object.create(SystemFontFamily.prototype);
  GenericFontFamily.prototype.constructor = GenericFontFamily;
  FileBasedFontFamily.prototype = Object.create(FontFamily.prototype);
  FileBasedFontFamily.prototype.constructor = FileBasedFontFamily;
  LoadedFontFamily.prototype = Object.create(FontFamily.prototype);
  LoadedFontFamily.prototype.constructor = LoadedFontFamily;
  FontListFontFamily.prototype = Object.create(FileBasedFontFamily.prototype);
  FontListFontFamily.prototype.constructor = FontListFontFamily;
  $preloadCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $preloadCOROUTINE$0.prototype.constructor = $preloadCOROUTINE$0;
  function interceptFontFamily(fontFamily) {
    return fontFamily;
  }
  function interceptFontWeight(fontWeight) {
    return fontWeight;
  }
  function interceptFontStyle(fontStyle) {
    return fontStyle;
  }
  function interceptFontSynthesis(fontSynthesis) {
    return fontSynthesis;
  }
  $runCachedCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $runCachedCOROUTINE$1.prototype.constructor = $runCachedCOROUTINE$1;
  _no_name_provided__qut3iv.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  _no_name_provided__qut3iv.prototype.constructor = _no_name_provided__qut3iv;
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda.prototype.constructor = FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda;
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda.prototype.constructor = FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda;
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda.prototype.constructor = FontListFontFamilyTypefaceAdapter$preload$slambda$slambda;
  FontListFontFamilyTypefaceAdapter$preload$slambda.prototype = Object.create(CoroutineImpl.prototype);
  FontListFontFamilyTypefaceAdapter$preload$slambda.prototype.constructor = FontListFontFamilyTypefaceAdapter$preload$slambda;
  FontListFontFamilyTypefaceAdapter$resolve$slambda.prototype = Object.create(CoroutineImpl.prototype);
  FontListFontFamilyTypefaceAdapter$resolve$slambda.prototype.constructor = FontListFontFamilyTypefaceAdapter$resolve$slambda;
  AsyncFontListLoader$load$slambda.prototype = Object.create(CoroutineImpl.prototype);
  AsyncFontListLoader$load$slambda.prototype.constructor = AsyncFontListLoader$load$slambda;
  AsyncFontListLoader$loadWithTimeoutOrNull$slambda.prototype = Object.create(CoroutineImpl.prototype);
  AsyncFontListLoader$loadWithTimeoutOrNull$slambda.prototype.constructor = AsyncFontListLoader$loadWithTimeoutOrNull$slambda;
  $loadCOROUTINE$2.prototype = Object.create(CoroutineImpl.prototype);
  $loadCOROUTINE$2.prototype.constructor = $loadCOROUTINE$2;
  $loadWithTimeoutOrNullCOROUTINE$3.prototype = Object.create(CoroutineImpl.prototype);
  $loadWithTimeoutOrNullCOROUTINE$3.prototype.constructor = $loadWithTimeoutOrNullCOROUTINE$3;
  function notifyFocusedRect(rect) {
  }
  ResolvedTextDirection.prototype = Object.create(Enum.prototype);
  ResolvedTextDirection.prototype.constructor = ResolvedTextDirection;
  function merge(other) {
    var tmp;
    var tmp_0;
    if (other instanceof BrushStyle) {
      tmp_0 = this instanceof BrushStyle;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_1 = other.get_alpha_iooth1_k$();
      tmp = new BrushStyle(other.value_1, takeOrElse_0(tmp_1, TextForegroundStyle$merge$lambda(this)));
    } else {
      var tmp_2;
      if (other instanceof BrushStyle) {
        tmp_2 = !(this instanceof BrushStyle);
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp = other;
      } else {
        var tmp_3;
        if (!(other instanceof BrushStyle)) {
          tmp_3 = this instanceof BrushStyle;
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp = this;
        } else {
          tmp = other.takeOrElse_9aen5f_k$(TextForegroundStyle$merge$lambda_0(this));
        }
      }
    }
    return tmp;
  }
  function takeOrElse(other) {
    return !equals(this, Unspecified_getInstance()) ? this : other();
  }
  Platform.prototype = Object.create(Enum.prototype);
  Platform.prototype.constructor = Platform;
  function getLineEnd$default(lineIndex, visibleEnd, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      visibleEnd = false;
    return $handler == null ? this.getLineEnd_7kqxuy_k$(lineIndex, visibleEnd) : $handler(lineIndex, visibleEnd);
  }
  function paint$default(canvas, color, shadow, textDecoration, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      color = Companion_getInstance().Unspecified_1;
    if (!(($mask0 & 4) === 0))
      shadow = null;
    if (!(($mask0 & 8) === 0))
      textDecoration = null;
    var tmp;
    if ($handler == null) {
      this.paint_aoyx3m_k$(canvas, color, shadow, textDecoration);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = color;
      tmp = $handler(canvas, tmp_0 == null ? null : new Color(tmp_0), shadow, textDecoration);
    }
    return tmp;
  }
  function paint$default_0(canvas, color, shadow, textDecoration, drawStyle, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      color = Companion_getInstance().Unspecified_1;
    if (!(($mask0 & 4) === 0))
      shadow = null;
    if (!(($mask0 & 8) === 0))
      textDecoration = null;
    if (!(($mask0 & 16) === 0))
      drawStyle = null;
    var tmp;
    if ($handler == null) {
      this.paint_8g9j3d_k$(canvas, color, shadow, textDecoration, drawStyle);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = color;
      tmp = $handler(canvas, tmp_0 == null ? null : new Color(tmp_0), shadow, textDecoration, drawStyle);
    }
    return tmp;
  }
  function paint$default_1(canvas, brush, alpha, shadow, textDecoration, drawStyle, $mask0, $handler) {
    if (!(($mask0 & 4) === 0)) {
      FloatCompanionObject_getInstance();
      alpha = NaN;
    }
    if (!(($mask0 & 8) === 0))
      shadow = null;
    if (!(($mask0 & 16) === 0))
      textDecoration = null;
    if (!(($mask0 & 32) === 0))
      drawStyle = null;
    var tmp;
    if ($handler == null) {
      this.paint_ae2j82_k$(canvas, brush, alpha, shadow, textDecoration, drawStyle);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(canvas, brush, alpha, shadow, textDecoration, drawStyle);
    }
    return tmp;
  }
  LoadedFont.prototype = Object.create(PlatformFont.prototype);
  LoadedFont.prototype.constructor = LoadedFont;
  StyleAdd.prototype = Object.create(Op.prototype);
  StyleAdd.prototype.constructor = StyleAdd;
  PutPlaceholder.prototype = Object.create(Op.prototype);
  PutPlaceholder.prototype.constructor = PutPlaceholder;
  EndPlaceholder.prototype = Object.create(Op.prototype);
  EndPlaceholder.prototype.constructor = EndPlaceholder;
  StyleAdd_0.prototype = Object.create(Cut.prototype);
  StyleAdd_0.prototype.constructor = StyleAdd_0;
  StyleRemove.prototype = Object.create(Cut.prototype);
  StyleRemove.prototype.constructor = StyleRemove;
  PutPlaceholder_0.prototype = Object.create(Cut.prototype);
  PutPlaceholder_0.prototype.constructor = PutPlaceholder_0;
  EndPlaceholder_0.prototype = Object.create(Cut.prototype);
  EndPlaceholder_0.prototype.constructor = EndPlaceholder_0;
  //endregion
  function get_EmptyAnnotatedString() {
    init_properties_AnnotatedString_kt_m8toad();
    return EmptyAnnotatedString;
  }
  var EmptyAnnotatedString;
  function Range_init_$Init$(item, start, end, $this) {
    Range.call($this, item, start, end, '');
    return $this;
  }
  function Range_init_$Create$(item, start, end) {
    return Range_init_$Init$(item, start, end, Object.create(Range.prototype));
  }
  function MutableRange_init_$Init$(item, start, end, tag, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      end = IntCompanionObject_getInstance().MIN_VALUE_1;
    if (!(($mask0 & 8) === 0))
      tag = '';
    MutableRange.call($this, item, start, end, tag);
    return $this;
  }
  function MutableRange_init_$Create$(item, start, end, tag, $mask0, $marker) {
    return MutableRange_init_$Init$(item, start, end, tag, $mask0, $marker, Object.create(MutableRange.prototype));
  }
  function Builder_init_$Init$(capacity, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      capacity = 16;
    Builder.call($this, capacity);
    return $this;
  }
  function Builder_init_$Create$(capacity, $mask0, $marker) {
    return Builder_init_$Init$(capacity, $mask0, $marker, Object.create(Builder.prototype));
  }
  function MutableRange(item, start, end, tag) {
    this.item_1 = item;
    this.start_1 = start;
    this.end_1 = end;
    this.tag_1 = tag;
  }
  MutableRange.prototype.get_item_woo5lo_k$ = function () {
    return this.item_1;
  };
  MutableRange.prototype.get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  MutableRange.prototype.set_end_1n4q6m_k$ = function (_set____db54di) {
    this.end_1 = _set____db54di;
  };
  MutableRange.prototype.get_end_18j6ha_k$ = function () {
    return this.end_1;
  };
  MutableRange.prototype.get_tag_18ivnz_k$ = function () {
    return this.tag_1;
  };
  MutableRange.prototype.toRange_axwxfj_k$ = function (defaultEnd) {
    var end = this.end_1 === IntCompanionObject_getInstance().MIN_VALUE_1 ? defaultEnd : this.end_1;
    // Inline function 'kotlin.check' call
    var tmp0_check = !(end === IntCompanionObject_getInstance().MIN_VALUE_1);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.MutableRange.toRange.<anonymous>' call
      tmp$ret$0 = 'Item.end should be set first';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return new Range(this.item_1, this.start_1, end, this.tag_1);
  };
  MutableRange.prototype.toRange$default_l8xn7k_k$ = function (defaultEnd, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      defaultEnd = IntCompanionObject_getInstance().MIN_VALUE_1;
    return this.toRange_axwxfj_k$(defaultEnd);
  };
  MutableRange.prototype.component1_7eebsc_k$ = function () {
    return this.item_1;
  };
  MutableRange.prototype.component2_7eebsb_k$ = function () {
    return this.start_1;
  };
  MutableRange.prototype.component3_7eebsa_k$ = function () {
    return this.end_1;
  };
  MutableRange.prototype.component4_7eebs9_k$ = function () {
    return this.tag_1;
  };
  MutableRange.prototype.copy_8fvktl_k$ = function (item, start, end, tag) {
    return new MutableRange(item, start, end, tag);
  };
  MutableRange.prototype.copy$default_a4t9dy_k$ = function (item, start, end, tag, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      item = this.item_1;
    if (!(($mask0 & 2) === 0))
      start = this.start_1;
    if (!(($mask0 & 4) === 0))
      end = this.end_1;
    if (!(($mask0 & 8) === 0))
      tag = this.tag_1;
    return this.copy_8fvktl_k$(item, start, end, tag);
  };
  MutableRange.prototype.toString = function () {
    return 'MutableRange(item=' + this.item_1 + ', start=' + this.start_1 + ', end=' + this.end_1 + ', tag=' + this.tag_1 + ')';
  };
  MutableRange.prototype.hashCode = function () {
    var result = this.item_1 == null ? 0 : hashCode(this.item_1);
    result = imul(result, 31) + this.start_1 | 0;
    result = imul(result, 31) + this.end_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.tag_1) | 0;
    return result;
  };
  MutableRange.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MutableRange))
      return false;
    var tmp0_other_with_cast = other instanceof MutableRange ? other : THROW_CCE();
    if (!equals(this.item_1, tmp0_other_with_cast.item_1))
      return false;
    if (!(this.start_1 === tmp0_other_with_cast.start_1))
      return false;
    if (!(this.end_1 === tmp0_other_with_cast.end_1))
      return false;
    if (!(this.tag_1 === tmp0_other_with_cast.tag_1))
      return false;
    return true;
  };
  MutableRange.$metadata$ = classMeta('MutableRange');
  function _get_text__de5ose($this) {
    return $this.text_1;
  }
  function _get_spanStyles__69finz($this) {
    return $this.spanStyles_1;
  }
  function _get_paragraphStyles__eun5lt($this) {
    return $this.paragraphStyles_1;
  }
  function _get_annotations__virbvx($this) {
    return $this.annotations_1;
  }
  function _get_styleStack__yy45qs($this) {
    return $this.styleStack_1;
  }
  function Builder_init_$Init$_0(text, $this) {
    Builder_init_$Init$(0, 1, null, $this);
    $this.append_1o6mm0_k$(text);
    return $this;
  }
  function Builder_init_$Create$_0(text) {
    return Builder_init_$Init$_0(text, Object.create(Builder.prototype));
  }
  function Builder_init_$Init$_1(text, $this) {
    Builder_init_$Init$(0, 1, null, $this);
    $this.append_o859sl_k$(text);
    return $this;
  }
  function Builder_init_$Create$_1(text) {
    return Builder_init_$Init$_1(text, Object.create(Builder.prototype));
  }
  function AnnotatedString_init_$Init$(text, spanStyles, paragraphStyles, annotations, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      spanStyles = emptyList();
    if (!(($mask0 & 4) === 0))
      paragraphStyles = emptyList();
    if (!(($mask0 & 8) === 0))
      annotations = emptyList();
    AnnotatedString.call($this, text, spanStyles, paragraphStyles, annotations);
    return $this;
  }
  function AnnotatedString_init_$Create$(text, spanStyles, paragraphStyles, annotations, $mask0, $marker) {
    return AnnotatedString_init_$Init$(text, spanStyles, paragraphStyles, annotations, $mask0, $marker, Object.create(AnnotatedString.prototype));
  }
  function AnnotatedString_init_$Init$_0(text, spanStyles, paragraphStyles, $this) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$2 = emptyList();
    AnnotatedString.call($this, text, spanStyles, paragraphStyles, tmp$ret$2);
    return $this;
  }
  function AnnotatedString_init_$Create$_0(text, spanStyles, paragraphStyles) {
    return AnnotatedString_init_$Init$_0(text, spanStyles, paragraphStyles, Object.create(AnnotatedString.prototype));
  }
  function AnnotatedString_init_$Init$_1(text, spanStyles, paragraphStyles, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0 = emptyList();
      tmp$ret$0_0 = Unit_getInstance();
      spanStyles = tmp$ret$0;
    }
    if (!(($mask0 & 4) === 0)) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0_1 = emptyList();
      tmp$ret$1 = Unit_getInstance();
      paragraphStyles = tmp$ret$0_1;
    }
    AnnotatedString_init_$Init$_0(text, spanStyles, paragraphStyles, $this);
    return $this;
  }
  function AnnotatedString_init_$Create$_1(text, spanStyles, paragraphStyles, $mask0, $marker) {
    return AnnotatedString_init_$Init$_1(text, spanStyles, paragraphStyles, $mask0, $marker, Object.create(AnnotatedString.prototype));
  }
  function Range(item, start, end, tag) {
    this.item_1 = item;
    this.start_1 = start;
    this.end_1 = end;
    this.tag_1 = tag;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.start_1 <= this.end_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.Range.<anonymous>' call
      tmp$ret$0 = 'Reversed range is not supported';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  Range.prototype.get_item_woo5lo_k$ = function () {
    return this.item_1;
  };
  Range.prototype.get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  Range.prototype.get_end_18j6ha_k$ = function () {
    return this.end_1;
  };
  Range.prototype.get_tag_18ivnz_k$ = function () {
    return this.tag_1;
  };
  Range.prototype.component1_7eebsc_k$ = function () {
    return this.item_1;
  };
  Range.prototype.component2_7eebsb_k$ = function () {
    return this.start_1;
  };
  Range.prototype.component3_7eebsa_k$ = function () {
    return this.end_1;
  };
  Range.prototype.component4_7eebs9_k$ = function () {
    return this.tag_1;
  };
  Range.prototype.copy_8fvktl_k$ = function (item, start, end, tag) {
    return new Range(item, start, end, tag);
  };
  Range.prototype.copy$default_a4t9dy_k$ = function (item, start, end, tag, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      item = this.item_1;
    if (!(($mask0 & 2) === 0))
      start = this.start_1;
    if (!(($mask0 & 4) === 0))
      end = this.end_1;
    if (!(($mask0 & 8) === 0))
      tag = this.tag_1;
    return this.copy_8fvktl_k$(item, start, end, tag);
  };
  Range.prototype.toString = function () {
    return 'Range(item=' + this.item_1 + ', start=' + this.start_1 + ', end=' + this.end_1 + ', tag=' + this.tag_1 + ')';
  };
  Range.prototype.hashCode = function () {
    var result = this.item_1 == null ? 0 : hashCode(this.item_1);
    result = imul(result, 31) + this.start_1 | 0;
    result = imul(result, 31) + this.end_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.tag_1) | 0;
    return result;
  };
  Range.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Range))
      return false;
    var tmp0_other_with_cast = other instanceof Range ? other : THROW_CCE();
    if (!equals(this.item_1, tmp0_other_with_cast.item_1))
      return false;
    if (!(this.start_1 === tmp0_other_with_cast.start_1))
      return false;
    if (!(this.end_1 === tmp0_other_with_cast.end_1))
      return false;
    if (!(this.tag_1 === tmp0_other_with_cast.tag_1))
      return false;
    return true;
  };
  Range.$metadata$ = classMeta('Range');
  function Builder(capacity) {
    this.text_1 = StringBuilder_init_$Create$(capacity);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.spanStyles_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.paragraphStyles_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$2 = ArrayList_init_$Create$();
    tmp_1.annotations_1 = tmp$ret$2;
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$3 = ArrayList_init_$Create$();
    tmp_2.styleStack_1 = tmp$ret$3;
    this.$stable_1 = 8;
  }
  Builder.prototype.get_length_g42xv3_k$ = function () {
    return this.text_1.get_length_g42xv3_k$();
  };
  Builder.prototype.append_1o6mm0_k$ = function (text) {
    this.text_1.append_ssq29y_k$(text);
  };
  Builder.prototype.append_y20c3x_k$ = function (char) {
    this.text_1.append_t8oh9e_k$(char);
  };
  Builder.prototype.append_o859sl_k$ = function (text) {
    var start = this.text_1.get_length_g42xv3_k$();
    this.text_1.append_ssq29y_k$(text.text_1);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var tmp0_fastForEach = text.spanStyles_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.text.Builder.append.<anonymous>' call
        this.addStyle_jucs1v_k$(item.item_1, start + item.start_1 | 0, start + item.end_1 | 0);
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var tmp1_fastForEach = text.paragraphStyles_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = tmp1_fastForEach.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = tmp1_fastForEach.get_fkrdnv_k$(index_0);
        // Inline function 'androidx.compose.ui.text.Builder.append.<anonymous>' call
        this.addStyle_n7uutx_k$(item_0.item_1, start + item_0.start_1 | 0, start + item_0.end_1 | 0);
      }
       while (inductionVariable_0 <= last_0);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var tmp2_fastForEach = text.annotations_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_1 = 0;
    var last_1 = tmp2_fastForEach.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_1 <= last_1)
      do {
        var index_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var item_1 = tmp2_fastForEach.get_fkrdnv_k$(index_1);
        // Inline function 'androidx.compose.ui.text.Builder.append.<anonymous>' call
        this.annotations_1.add_1j60pz_k$(new MutableRange(item_1.item_1, start + item_1.start_1 | 0, start + item_1.end_1 | 0, item_1.tag_1));
      }
       while (inductionVariable_1 <= last_1);
  };
  Builder.prototype.addStyle_jucs1v_k$ = function (style, start, end) {
    this.spanStyles_1.add_1j60pz_k$(MutableRange_init_$Create$(style, start, end, null, 8, null));
  };
  Builder.prototype.addStyle_n7uutx_k$ = function (style, start, end) {
    this.paragraphStyles_1.add_1j60pz_k$(MutableRange_init_$Create$(style, start, end, null, 8, null));
  };
  Builder.prototype.addStringAnnotation_gkf2b2_k$ = function (tag, annotation, start, end) {
    this.annotations_1.add_1j60pz_k$(new MutableRange(annotation, start, end, tag));
  };
  Builder.prototype.addTtsAnnotation_b18ufb_k$ = function (ttsAnnotation, start, end) {
    this.annotations_1.add_1j60pz_k$(MutableRange_init_$Create$(ttsAnnotation, start, end, null, 8, null));
  };
  Builder.prototype.addUrlAnnotation_hxexdz_k$ = function (urlAnnotation, start, end) {
    this.annotations_1.add_1j60pz_k$(MutableRange_init_$Create$(urlAnnotation, start, end, null, 8, null));
  };
  Builder.prototype.pushStyle_xj8fdz_k$ = function (style) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp = this.text_1.get_length_g42xv3_k$();
    var tmp0_also = MutableRange_init_$Create$(style, tmp, 0, null, 12, null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.Builder.pushStyle.<anonymous>' call
    this.styleStack_1.add_1j60pz_k$(tmp0_also);
    this.spanStyles_1.add_1j60pz_k$(tmp0_also);
    tmp$ret$0 = tmp0_also;
    return this.styleStack_1.get_size_woubt6_k$() - 1 | 0;
  };
  Builder.prototype.pushStyle_asyo3n_k$ = function (style) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp = this.text_1.get_length_g42xv3_k$();
    var tmp0_also = MutableRange_init_$Create$(style, tmp, 0, null, 12, null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.Builder.pushStyle.<anonymous>' call
    this.styleStack_1.add_1j60pz_k$(tmp0_also);
    this.paragraphStyles_1.add_1j60pz_k$(tmp0_also);
    tmp$ret$0 = tmp0_also;
    return this.styleStack_1.get_size_woubt6_k$() - 1 | 0;
  };
  Builder.prototype.pushStringAnnotation_sekajs_k$ = function (tag, annotation) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp = this.text_1.get_length_g42xv3_k$();
    var tmp0_also = MutableRange_init_$Create$(annotation, tmp, 0, tag, 4, null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.Builder.pushStringAnnotation.<anonymous>' call
    this.styleStack_1.add_1j60pz_k$(tmp0_also);
    this.annotations_1.add_1j60pz_k$(tmp0_also);
    tmp$ret$0 = tmp0_also;
    return this.styleStack_1.get_size_woubt6_k$() - 1 | 0;
  };
  Builder.prototype.pushTtsAnnotation_6qwefj_k$ = function (ttsAnnotation) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp = this.text_1.get_length_g42xv3_k$();
    var tmp0_also = MutableRange_init_$Create$(ttsAnnotation, tmp, 0, null, 12, null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.Builder.pushTtsAnnotation.<anonymous>' call
    this.styleStack_1.add_1j60pz_k$(tmp0_also);
    this.annotations_1.add_1j60pz_k$(tmp0_also);
    tmp$ret$0 = tmp0_also;
    return this.styleStack_1.get_size_woubt6_k$() - 1 | 0;
  };
  Builder.prototype.pushUrlAnnotation_hujfdb_k$ = function (urlAnnotation) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp = this.text_1.get_length_g42xv3_k$();
    var tmp0_also = MutableRange_init_$Create$(urlAnnotation, tmp, 0, null, 12, null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.Builder.pushUrlAnnotation.<anonymous>' call
    this.styleStack_1.add_1j60pz_k$(tmp0_also);
    this.annotations_1.add_1j60pz_k$(tmp0_also);
    tmp$ret$0 = tmp0_also;
    return this.styleStack_1.get_size_woubt6_k$() - 1 | 0;
  };
  Builder.prototype.pop_6ofvgg_k$ = function () {
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.styleStack_1;
    tmp$ret$0 = !tmp0_isNotEmpty.isEmpty_y1axqb_k$();
    var tmp1_check = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.text.Builder.pop.<anonymous>' call
      tmp$ret$1 = 'Nothing to pop.';
      var message = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var item = this.styleStack_1.removeAt_qvpkxi_k$(this.styleStack_1.get_size_woubt6_k$() - 1 | 0);
    item.end_1 = this.text_1.get_length_g42xv3_k$();
  };
  Builder.prototype.pop_8luzb5_k$ = function (index) {
    // Inline function 'kotlin.check' call
    var tmp0_check = index < this.styleStack_1.get_size_woubt6_k$();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.Builder.pop.<anonymous>' call
      tmp$ret$0 = '' + index + ' should be less than ' + this.styleStack_1.get_size_woubt6_k$();
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    while ((this.styleStack_1.get_size_woubt6_k$() - 1 | 0) >= index) {
      this.pop_6ofvgg_k$();
    }
  };
  Builder.prototype.toAnnotatedString_yesz4e_k$ = function () {
    var tmp = this.text_1.toString();
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp0_fastMap = this.spanStyles_1;
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(tmp0_fastMap.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastMap.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastMap.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
        tmp$ret$0 = item.toRange_axwxfj_k$(this.text_1.get_length_g42xv3_k$());
        var tmp0_plusAssign = tmp$ret$0;
        target.add_1j60pz_k$(tmp0_plusAssign);
      }
       while (inductionVariable <= last);
    tmp$ret$1 = target;
    var tmp_0 = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp1_fastMap = this.paragraphStyles_1;
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(tmp1_fastMap.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = tmp1_fastMap.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = tmp1_fastMap.get_fkrdnv_k$(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$2;
        // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
        tmp$ret$2 = item_0.toRange_axwxfj_k$(this.text_1.get_length_g42xv3_k$());
        var tmp0_plusAssign_0 = tmp$ret$2;
        target_0.add_1j60pz_k$(tmp0_plusAssign_0);
      }
       while (inductionVariable_0 <= last_0);
    tmp$ret$3 = target_0;
    var tmp_1 = tmp$ret$3;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp2_fastMap = this.annotations_1;
    // Inline function 'kotlin.contracts.contract' call
    var target_1 = ArrayList_init_$Create$_0(tmp2_fastMap.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_1 = 0;
    var last_1 = tmp2_fastMap.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_1 <= last_1)
      do {
        var index_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var item_1 = tmp2_fastMap.get_fkrdnv_k$(index_1);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$4;
        // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
        tmp$ret$4 = item_1.toRange_axwxfj_k$(this.text_1.get_length_g42xv3_k$());
        var tmp0_plusAssign_1 = tmp$ret$4;
        target_1.add_1j60pz_k$(tmp0_plusAssign_1);
      }
       while (inductionVariable_1 <= last_1);
    tmp$ret$5 = target_1;
    return new AnnotatedString(tmp, tmp_0, tmp_1, tmp$ret$5);
  };
  Builder.$metadata$ = classMeta('Builder');
  function sam$kotlin_Comparator$0(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.compare_6tbigh_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.compare_6tbigh_k$(a, b);
  };
  sam$kotlin_Comparator$0.$metadata$ = classMeta('sam$kotlin_Comparator$0', [Comparator]);
  function AnnotatedString$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
    tmp$ret$0 = a.start_1;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
    tmp$ret$1 = b.start_1;
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function AnnotatedString(text, spanStyles, paragraphStyles, annotations) {
    this.text_1 = text;
    this.spanStyles_1 = spanStyles;
    this.paragraphStyles_1 = paragraphStyles;
    this.annotations_1 = annotations;
    var lastStyleEnd = -1;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.sortedBy' call
    var tmp0_sortedBy = this.paragraphStyles_1;
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = AnnotatedString$lambda;
    tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    tmp$ret$1 = sortedWith(tmp0_sortedBy, tmp$ret$0);
    var tmp1_fastForEach = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp1_fastForEach.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp1_fastForEach.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
        // Inline function 'kotlin.require' call
        var tmp0_require = item.start_1 >= lastStyleEnd;
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_require) {
          var tmp$ret$2;
          // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>.<anonymous>' call
          tmp$ret$2 = 'ParagraphStyle should not overlap';
          var message = tmp$ret$2;
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
        // Inline function 'kotlin.require' call
        var tmp1_require = item.end_1 <= this.text_1.length;
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp1_require) {
          var tmp$ret$3;
          // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>.<anonymous>' call
          tmp$ret$3 = 'ParagraphStyle range [' + item.start_1 + ', ' + item.end_1 + ')' + ' is out of boundary';
          var message_0 = tmp$ret$3;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
        lastStyleEnd = item.end_1;
      }
       while (inductionVariable <= last);
  }
  AnnotatedString.prototype.get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  AnnotatedString.prototype.get_spanStyles_muoq3_k$ = function () {
    return this.spanStyles_1;
  };
  AnnotatedString.prototype.get_paragraphStyles_29kgs9_k$ = function () {
    return this.paragraphStyles_1;
  };
  AnnotatedString.prototype.get_annotations_20dirp_k$ = function () {
    return this.annotations_1;
  };
  AnnotatedString.prototype.get_length_g42xv3_k$ = function () {
    return this.text_1.length;
  };
  AnnotatedString.prototype.get_a7b70_k$ = function (index) {
    return charSequenceGet(this.text_1, index);
  };
  AnnotatedString.prototype.subSequence_5fh70h_k$ = function (startIndex, endIndex) {
    // Inline function 'kotlin.require' call
    var tmp0_require = startIndex <= endIndex;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.AnnotatedString.subSequence.<anonymous>' call
      tmp$ret$0 = 'start (' + startIndex + ') should be less or equal to end (' + endIndex + ')';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (startIndex === 0 ? endIndex === this.text_1.length : false)
      return this;
    var tmp$ret$2;
    // Inline function 'kotlin.text.substring' call
    var tmp1_substring = this.text_1;
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = tmp1_substring;
    tmp$ret$2 = tmp$ret$1.substring(startIndex, endIndex);
    var text = tmp$ret$2;
    return new AnnotatedString(text, filterRanges(this.spanStyles_1, startIndex, endIndex), filterRanges(this.paragraphStyles_1, startIndex, endIndex), filterRanges(this.annotations_1, startIndex, endIndex));
  };
  AnnotatedString.prototype.subSequence_k52qt6_k$ = function (range) {
    return this.subSequence_5fh70h_k$(_TextRange___get_min__impl__uu95c4(range), _TextRange___get_max__impl__owm8m(range));
  };
  AnnotatedString.prototype.plus_ya3dly_k$ = function (other) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = Builder_init_$Create$_1(this);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.AnnotatedString.plus.<anonymous>' call
    tmp0_with.append_o859sl_k$(other);
    tmp$ret$0 = tmp0_with.toAnnotatedString_yesz4e_k$();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  AnnotatedString.prototype.getStringAnnotations_z0uxhg_k$ = function (tag, start, end) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    var tmp0_fastFilter = this.annotations_1;
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(tmp0_fastFilter.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastFilter.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastFilter.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.AnnotatedString.getStringAnnotations.<anonymous>' call
        var tmp;
        var tmp_0;
        var tmp_1 = item.item_1;
        if (typeof tmp_1 === 'string') {
          tmp_0 = tag === item.tag_1;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp = intersect(start, end, item.start_1, item.end_1);
        } else {
          tmp = false;
        }
        tmp$ret$0 = tmp;
        if (tmp$ret$0) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_1j60pz_k$(item);
        }
      }
       while (inductionVariable <= last);
    tmp$ret$1 = target;
    var tmp_2 = tmp$ret$1;
    return isInterface(tmp_2, List) ? tmp_2 : THROW_CCE();
  };
  AnnotatedString.prototype.getStringAnnotations_cnnz5v_k$ = function (start, end) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    var tmp0_fastFilter = this.annotations_1;
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(tmp0_fastFilter.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastFilter.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastFilter.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.AnnotatedString.getStringAnnotations.<anonymous>' call
        var tmp;
        var tmp_0 = item.item_1;
        if (typeof tmp_0 === 'string') {
          tmp = intersect(start, end, item.start_1, item.end_1);
        } else {
          tmp = false;
        }
        tmp$ret$0 = tmp;
        if (tmp$ret$0) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_1j60pz_k$(item);
        }
      }
       while (inductionVariable <= last);
    tmp$ret$1 = target;
    var tmp_1 = tmp$ret$1;
    return isInterface(tmp_1, List) ? tmp_1 : THROW_CCE();
  };
  AnnotatedString.prototype.getTtsAnnotations_fb1uwp_k$ = function (start, end) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    var tmp0_fastFilter = this.annotations_1;
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(tmp0_fastFilter.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastFilter.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastFilter.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.AnnotatedString.getTtsAnnotations.<anonymous>' call
        var tmp;
        var tmp_0 = item.item_1;
        if (tmp_0 instanceof TtsAnnotation) {
          tmp = intersect(start, end, item.start_1, item.end_1);
        } else {
          tmp = false;
        }
        tmp$ret$0 = tmp;
        if (tmp$ret$0) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_1j60pz_k$(item);
        }
      }
       while (inductionVariable <= last);
    tmp$ret$1 = target;
    var tmp_1 = tmp$ret$1;
    return isInterface(tmp_1, List) ? tmp_1 : THROW_CCE();
  };
  AnnotatedString.prototype.getUrlAnnotations_gs53n9_k$ = function (start, end) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    var tmp0_fastFilter = this.annotations_1;
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(tmp0_fastFilter.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastFilter.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastFilter.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.AnnotatedString.getUrlAnnotations.<anonymous>' call
        var tmp;
        var tmp_0 = item.item_1;
        if (tmp_0 instanceof UrlAnnotation) {
          tmp = intersect(start, end, item.start_1, item.end_1);
        } else {
          tmp = false;
        }
        tmp$ret$0 = tmp;
        if (tmp$ret$0) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_1j60pz_k$(item);
        }
      }
       while (inductionVariable <= last);
    tmp$ret$1 = target;
    var tmp_1 = tmp$ret$1;
    return isInterface(tmp_1, List) ? tmp_1 : THROW_CCE();
  };
  AnnotatedString.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnnotatedString))
      return false;
    if (!(this.text_1 === other.text_1))
      return false;
    if (!equals(this.spanStyles_1, other.spanStyles_1))
      return false;
    if (!equals(this.paragraphStyles_1, other.paragraphStyles_1))
      return false;
    if (!equals(this.annotations_1, other.annotations_1))
      return false;
    return true;
  };
  AnnotatedString.prototype.hashCode = function () {
    var result = getStringHashCode(this.text_1);
    result = imul(31, result) + hashCode(this.spanStyles_1) | 0;
    result = imul(31, result) + hashCode(this.paragraphStyles_1) | 0;
    result = imul(31, result) + hashCode(this.annotations_1) | 0;
    return result;
  };
  AnnotatedString.prototype.toString = function () {
    return this.text_1;
  };
  AnnotatedString.$metadata$ = classMeta('AnnotatedString', [CharSequence]);
  function filterRanges(ranges, start, end) {
    init_properties_AnnotatedString_kt_m8toad();
    // Inline function 'kotlin.require' call
    var tmp0_require = start <= end;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
      tmp$ret$0 = 'start (' + start + ') should be less than or equal to end (' + end + ')';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(ranges.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = ranges.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = ranges.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
        tmp$ret$1 = intersect(start, end, item.start_1, item.end_1);
        if (tmp$ret$1) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_1j60pz_k$(item);
        }
      }
       while (inductionVariable <= last);
    tmp$ret$2 = target;
    var tmp1_fastMap = tmp$ret$2;
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(tmp1_fastMap.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = tmp1_fastMap.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = tmp1_fastMap.get_fkrdnv_k$(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
        var tmp$ret$3;
        // Inline function 'kotlin.comparisons.maxOf' call
        var tmp0_maxOf = item_0.start_1;
        tmp$ret$3 = Math.max(start, tmp0_maxOf);
        var tmp = tmp$ret$3 - start | 0;
        var tmp$ret$4;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp1_minOf = item_0.end_1;
        tmp$ret$4 = Math.min(end, tmp1_minOf);
        tmp$ret$5 = new Range(item_0.item_1, tmp, tmp$ret$4 - start | 0, item_0.tag_1);
        var tmp0_plusAssign = tmp$ret$5;
        target_0.add_1j60pz_k$(tmp0_plusAssign);
      }
       while (inductionVariable_0 <= last_0);
    tmp$ret$6 = target_0;
    return tmp$ret$6;
  }
  function intersect(lStart, lEnd, rStart, rEnd) {
    init_properties_AnnotatedString_kt_m8toad();
    var tmp;
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    tmp$ret$0 = Math.max(lStart, rStart);
    var tmp_1 = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.comparisons.minOf' call
    tmp$ret$1 = Math.min(lEnd, rEnd);
    if (tmp_1 < tmp$ret$1) {
      tmp_0 = true;
    } else {
      tmp_0 = contains(lStart, lEnd, rStart, rEnd);
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = contains(rStart, rEnd, lStart, lEnd);
    }
    return tmp;
  }
  function contains(baseStart, baseEnd, targetStart, targetEnd) {
    init_properties_AnnotatedString_kt_m8toad();
    return (baseStart <= targetStart ? targetEnd <= baseEnd : false) ? !(baseEnd === targetEnd) ? true : targetStart === targetEnd === (baseStart === baseEnd) : false;
  }
  function mapEachParagraphStyle(_this__u8e3s4, defaultParagraphStyle, block) {
    init_properties_AnnotatedString_kt_m8toad();
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp0_fastMap = normalizedParagraphStyles(_this__u8e3s4, defaultParagraphStyle);
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(tmp0_fastMap.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastMap.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastMap.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle.<anonymous>' call
        var annotatedString = substringWithoutParagraphStyles(_this__u8e3s4, item.start_1, item.end_1);
        tmp$ret$0 = block(annotatedString, item);
        var tmp0_plusAssign = tmp$ret$0;
        target.add_1j60pz_k$(tmp0_plusAssign);
      }
       while (inductionVariable <= last);
    tmp$ret$1 = target;
    return tmp$ret$1;
  }
  function substringWithoutParagraphStyles(_this__u8e3s4, start, end) {
    init_properties_AnnotatedString_kt_m8toad();
    var tmp;
    if (!(start === end)) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = _this__u8e3s4.text_1;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_substring;
      tmp$ret$1 = tmp$ret$0.substring(start, end);
      tmp = tmp$ret$1;
    } else {
      tmp = '';
    }
    var tmp_0 = tmp;
    var tmp_1 = getLocalStyles(_this__u8e3s4, start, end);
    return AnnotatedString_init_$Create$_1(tmp_0, tmp_1, null, 4, null);
  }
  function normalizedParagraphStyles(_this__u8e3s4, defaultParagraphStyle) {
    init_properties_AnnotatedString_kt_m8toad();
    var length = _this__u8e3s4.text_1.length;
    var paragraphStyles = _this__u8e3s4.paragraphStyles_1;
    var lastOffset = 0;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = paragraphStyles.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = paragraphStyles.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.text.normalizedParagraphStyles.<anonymous>' call
        var style = item.component1_7eebsc_k$();
        var start = item.component2_7eebsb_k$();
        var end = item.component3_7eebsa_k$();
        if (!(start === lastOffset)) {
          result.add_1j60pz_k$(Range_init_$Create$(defaultParagraphStyle, lastOffset, start));
        }
        result.add_1j60pz_k$(Range_init_$Create$(defaultParagraphStyle.merge_y8afnf_k$(style), start, end));
        lastOffset = end;
      }
       while (inductionVariable <= last);
    if (!(lastOffset === length)) {
      result.add_1j60pz_k$(Range_init_$Create$(defaultParagraphStyle, lastOffset, length));
    }
    if (result.isEmpty_y1axqb_k$()) {
      result.add_1j60pz_k$(Range_init_$Create$(defaultParagraphStyle, 0, 0));
    }
    return result;
  }
  function getLocalStyles(_this__u8e3s4, start, end) {
    init_properties_AnnotatedString_kt_m8toad();
    if (start === end) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0 = emptyList();
      return tmp$ret$0;
    }
    if (start === 0 ? end >= _this__u8e3s4.text_1.length : false) {
      return _this__u8e3s4.spanStyles_1;
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    var tmp0_fastFilter = _this__u8e3s4.spanStyles_1;
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(tmp0_fastFilter.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastFilter.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastFilter.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.text.getLocalStyles.<anonymous>' call
        tmp$ret$1 = intersect(start, end, item.start_1, item.end_1);
        if (tmp$ret$1) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_1j60pz_k$(item);
        }
      }
       while (inductionVariable <= last);
    tmp$ret$2 = target;
    var tmp1_fastMap = tmp$ret$2;
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(tmp1_fastMap.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = tmp1_fastMap.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = tmp1_fastMap.get_fkrdnv_k$(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.text.getLocalStyles.<anonymous>' call
        tmp$ret$3 = Range_init_$Create$(item_0.item_1, coerceIn(item_0.start_1, start, end) - start | 0, coerceIn(item_0.end_1, start, end) - start | 0);
        var tmp0_plusAssign = tmp$ret$3;
        target_0.add_1j60pz_k$(tmp0_plusAssign);
      }
       while (inductionVariable_0 <= last_0);
    tmp$ret$4 = target_0;
    return tmp$ret$4;
  }
  var properties_initialized_AnnotatedString_kt_um06op;
  function init_properties_AnnotatedString_kt_m8toad() {
    if (properties_initialized_AnnotatedString_kt_um06op) {
    } else {
      properties_initialized_AnnotatedString_kt_um06op = true;
      EmptyAnnotatedString = AnnotatedString_init_$Create$_1('', null, null, 6, null);
    }
  }
  function ExperimentalTextApi() {
  }
  ExperimentalTextApi.prototype.equals = function (other) {
    if (!(other instanceof ExperimentalTextApi))
      return false;
    var tmp0_other_with_cast = other instanceof ExperimentalTextApi ? other : THROW_CCE();
    return true;
  };
  ExperimentalTextApi.prototype.hashCode = function () {
    return 0;
  };
  ExperimentalTextApi.prototype.toString = function () {
    return '@androidx.compose.ui.text.ExperimentalTextApi()';
  };
  ExperimentalTextApi.$metadata$ = classMeta('ExperimentalTextApi', [Annotation]);
  function InternalTextApi() {
  }
  InternalTextApi.prototype.equals = function (other) {
    if (!(other instanceof InternalTextApi))
      return false;
    var tmp0_other_with_cast = other instanceof InternalTextApi ? other : THROW_CCE();
    return true;
  };
  InternalTextApi.prototype.hashCode = function () {
    return 0;
  };
  InternalTextApi.prototype.toString = function () {
    return '@androidx.compose.ui.text.InternalTextApi()';
  };
  InternalTextApi.$metadata$ = classMeta('InternalTextApi', [Annotation]);
  function MultiParagraph_init_$Init$(intrinsics, constraints, maxLines, ellipsis, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      maxLines = get_DefaultMaxLines();
    if (!(($mask0 & 8) === 0))
      ellipsis = false;
    MultiParagraph.call($this, intrinsics, constraints, maxLines, ellipsis);
    return $this;
  }
  function MultiParagraph_init_$Create$(intrinsics, constraints, maxLines, ellipsis, $mask0, $marker) {
    return MultiParagraph_init_$Init$(intrinsics, constraints, maxLines, ellipsis, $mask0, $marker, Object.create(MultiParagraph.prototype));
  }
  function MultiParagraph_init_$Init$_0(intrinsics, maxLines, ellipsis, width, $this) {
    var tmp = ceilToInt(width);
    MultiParagraph.call($this, intrinsics, Constraints$default(0, tmp, 0, 0, 13, null), maxLines, ellipsis);
    return $this;
  }
  function MultiParagraph_init_$Create$_0(intrinsics, maxLines, ellipsis, width) {
    return MultiParagraph_init_$Init$_0(intrinsics, maxLines, ellipsis, width, Object.create(MultiParagraph.prototype));
  }
  function MultiParagraph_init_$Init$_1(intrinsics, maxLines, ellipsis, width, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      maxLines = get_DefaultMaxLines();
    if (!(($mask0 & 4) === 0))
      ellipsis = false;
    MultiParagraph_init_$Init$_0(intrinsics, maxLines, ellipsis, width, $this);
    return $this;
  }
  function MultiParagraph_init_$Create$_1(intrinsics, maxLines, ellipsis, width, $mask0, $marker) {
    return MultiParagraph_init_$Init$_1(intrinsics, maxLines, ellipsis, width, $mask0, $marker, Object.create(MultiParagraph.prototype));
  }
  function MultiParagraph_init_$Init$_2(annotatedString, style, placeholders, maxLines, ellipsis, width, density, resourceLoader, $this) {
    var tmp0_intrinsics = new MultiParagraphIntrinsics(annotatedString, style, placeholders, density, createFontFamilyResolver(resourceLoader));
    var tmp = ceilToInt(width);
    var tmp1_constraints = Constraints$default(0, tmp, 0, 0, 13, null);
    MultiParagraph.call($this, tmp0_intrinsics, tmp1_constraints, maxLines, ellipsis);
    return $this;
  }
  function MultiParagraph_init_$Create$_2(annotatedString, style, placeholders, maxLines, ellipsis, width, density, resourceLoader) {
    return MultiParagraph_init_$Init$_2(annotatedString, style, placeholders, maxLines, ellipsis, width, density, resourceLoader, Object.create(MultiParagraph.prototype));
  }
  function MultiParagraph_init_$Init$_3(annotatedString, style, placeholders, maxLines, ellipsis, width, density, resourceLoader, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0 = emptyList();
      tmp$ret$0_0 = Unit_getInstance();
      placeholders = tmp$ret$0;
    }
    if (!(($mask0 & 8) === 0))
      maxLines = IntCompanionObject_getInstance().MAX_VALUE_1;
    if (!(($mask0 & 16) === 0))
      ellipsis = false;
    MultiParagraph_init_$Init$_2(annotatedString, style, placeholders, maxLines, ellipsis, width, density, resourceLoader, $this);
    return $this;
  }
  function MultiParagraph_init_$Create$_3(annotatedString, style, placeholders, maxLines, ellipsis, width, density, resourceLoader, $mask0, $marker) {
    return MultiParagraph_init_$Init$_3(annotatedString, style, placeholders, maxLines, ellipsis, width, density, resourceLoader, $mask0, $marker, Object.create(MultiParagraph.prototype));
  }
  function MultiParagraph_init_$Init$_4(annotatedString, style, width, density, fontFamilyResolver, placeholders, maxLines, ellipsis, $this) {
    var tmp0_intrinsics = new MultiParagraphIntrinsics(annotatedString, style, placeholders, density, fontFamilyResolver);
    var tmp = ceilToInt(width);
    var tmp1_constraints = Constraints$default(0, tmp, 0, 0, 13, null);
    MultiParagraph.call($this, tmp0_intrinsics, tmp1_constraints, maxLines, ellipsis);
    return $this;
  }
  function MultiParagraph_init_$Create$_4(annotatedString, style, width, density, fontFamilyResolver, placeholders, maxLines, ellipsis) {
    return MultiParagraph_init_$Init$_4(annotatedString, style, width, density, fontFamilyResolver, placeholders, maxLines, ellipsis, Object.create(MultiParagraph.prototype));
  }
  function MultiParagraph_init_$Init$_5(annotatedString, style, width, density, fontFamilyResolver, placeholders, maxLines, ellipsis, $mask0, $marker, $this) {
    if (!(($mask0 & 32) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0 = emptyList();
      tmp$ret$0_0 = Unit_getInstance();
      placeholders = tmp$ret$0;
    }
    if (!(($mask0 & 64) === 0))
      maxLines = IntCompanionObject_getInstance().MAX_VALUE_1;
    if (!(($mask0 & 128) === 0))
      ellipsis = false;
    MultiParagraph_init_$Init$_4(annotatedString, style, width, density, fontFamilyResolver, placeholders, maxLines, ellipsis, $this);
    return $this;
  }
  function MultiParagraph_init_$Create$_5(annotatedString, style, width, density, fontFamilyResolver, placeholders, maxLines, ellipsis, $mask0, $marker) {
    return MultiParagraph_init_$Init$_5(annotatedString, style, width, density, fontFamilyResolver, placeholders, maxLines, ellipsis, $mask0, $marker, Object.create(MultiParagraph.prototype));
  }
  function MultiParagraph_init_$Init$_6(annotatedString, style, constraints, density, fontFamilyResolver, placeholders, maxLines, ellipsis, $this) {
    var tmp0_intrinsics = new MultiParagraphIntrinsics(annotatedString, style, placeholders, density, fontFamilyResolver);
    MultiParagraph.call($this, tmp0_intrinsics, constraints, maxLines, ellipsis);
    return $this;
  }
  function MultiParagraph_init_$Create$_6(annotatedString, style, constraints, density, fontFamilyResolver, placeholders, maxLines, ellipsis) {
    return MultiParagraph_init_$Init$_6(annotatedString, style, constraints, density, fontFamilyResolver, placeholders, maxLines, ellipsis, Object.create(MultiParagraph.prototype));
  }
  function MultiParagraph_init_$Init$_7(annotatedString, style, constraints, density, fontFamilyResolver, placeholders, maxLines, ellipsis, $mask0, $marker, $this) {
    if (!(($mask0 & 32) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0 = emptyList();
      tmp$ret$0_0 = Unit_getInstance();
      placeholders = tmp$ret$0;
    }
    if (!(($mask0 & 64) === 0))
      maxLines = IntCompanionObject_getInstance().MAX_VALUE_1;
    if (!(($mask0 & 128) === 0))
      ellipsis = false;
    MultiParagraph_init_$Init$_6(annotatedString, style, constraints, density, fontFamilyResolver, placeholders, maxLines, ellipsis, $this);
    return $this;
  }
  function MultiParagraph_init_$Create$_7(annotatedString, style, constraints, density, fontFamilyResolver, placeholders, maxLines, ellipsis, $mask0, $marker) {
    return MultiParagraph_init_$Init$_7(annotatedString, style, constraints, density, fontFamilyResolver, placeholders, maxLines, ellipsis, $mask0, $marker, Object.create(MultiParagraph.prototype));
  }
  function _get_annotatedString__kqljtk($this) {
    return $this.intrinsics_1.annotatedString_1;
  }
  function requireIndexInRange($this, offset) {
    // Inline function 'kotlin.require' call
    var tmp0_require = 0 <= offset ? offset <= (charSequenceLength(_get_annotatedString__kqljtk($this).text_1) - 1 | 0) : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.MultiParagraph.requireIndexInRange.<anonymous>' call
      tmp$ret$0 = 'offset(' + offset + ') is out of bounds [0, ' + _get_annotatedString__kqljtk($this).get_length_g42xv3_k$() + ')';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function requireIndexInRangeInclusiveEnd($this, offset) {
    // Inline function 'kotlin.require' call
    var tmp0_require = 0 <= offset ? offset <= _get_annotatedString__kqljtk($this).text_1.length : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.MultiParagraph.requireIndexInRangeInclusiveEnd.<anonymous>' call
      tmp$ret$0 = 'offset(' + offset + ') is out of bounds [0, ' + _get_annotatedString__kqljtk($this).get_length_g42xv3_k$() + ']';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function requireLineIndexInRange($this, lineIndex) {
    // Inline function 'kotlin.require' call
    var tmp0_require = 0 <= lineIndex ? lineIndex < $this.lineCount_1 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.MultiParagraph.requireLineIndexInRange.<anonymous>' call
      tmp$ret$0 = 'lineIndex(' + lineIndex + ') is out of bounds [0, ' + lineIndex + ')';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function MultiParagraph(intrinsics, constraints, maxLines, ellipsis) {
    this.intrinsics_1 = intrinsics;
    this.maxLines_1 = maxLines;
    // Inline function 'kotlin.require' call
    var tmp0_require = _Constraints___get_minWidth__impl__hi9lfi(constraints) === 0 ? _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
      tmp$ret$0 = 'Setting Constraints.minWidth and Constraints.minHeight is not supported, these should be the default zero values instead.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var currentHeight = 0.0;
    var currentLineCount = 0;
    var didExceedMaxLines = false;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    var paragraphInfoList = tmp$ret$1;
    var infoList = this.intrinsics_1.infoList_1;
    var inductionVariable = 0;
    var last = infoList.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paragraphInfo = infoList.get_fkrdnv_k$(index);
        var tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
        var tmp_0;
        if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints)) {
          tmp_0 = coerceAtLeast(_Constraints___get_maxHeight__impl__dt3e8z(constraints) - ceilToInt(currentHeight) | 0, 0);
        } else {
          tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
        }
        var paragraph = Paragraph(paragraphInfo.intrinsics_1, Constraints$default(0, tmp, 0, tmp_0, 5, null), this.maxLines_1 - currentLineCount | 0, ellipsis);
        var paragraphTop = currentHeight;
        var paragraphBottom = currentHeight + paragraph.get_height_e7t92o_k$();
        currentHeight = paragraphBottom;
        var startLineIndex = currentLineCount;
        var endLineIndex = startLineIndex + paragraph.get_lineCount_lmaazy_k$() | 0;
        currentLineCount = endLineIndex;
        paragraphInfoList.add_1j60pz_k$(new ParagraphInfo(paragraph, paragraphInfo.startIndex_1, paragraphInfo.endIndex_1, startLineIndex, endLineIndex, paragraphTop, paragraphBottom));
        if (paragraph.get_didExceedMaxLines_xyxo57_k$() ? true : endLineIndex === this.maxLines_1 ? !(index === get_lastIndex(this.intrinsics_1.infoList_1)) : false) {
          didExceedMaxLines = true;
          break $l$loop;
        }
      }
       while (inductionVariable <= last);
    this.height_1 = currentHeight;
    this.lineCount_1 = currentLineCount;
    this.didExceedMaxLines_1 = didExceedMaxLines;
    this.paragraphInfoList_1 = paragraphInfoList;
    this.width_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_1 = this;
    var tmp$ret$12;
    // Inline function 'kotlin.let' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.text.fastFlatMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(paragraphInfoList.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = paragraphInfoList.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item = paragraphInfoList.get_fkrdnv_k$(index_0);
        // Inline function 'androidx.compose.ui.text.fastFlatMap.<anonymous>' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
        var tmp$ret$5;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$4;
        // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.util.fastMap' call
        var tmp0_fastMap = item.paragraph_1.get_placeholderRects_1ky2fv_k$();
        // Inline function 'kotlin.contracts.contract' call
        var target_0 = ArrayList_init_$Create$_0(tmp0_fastMap.get_size_woubt6_k$());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last_1 = tmp0_fastMap.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable_1 <= last_1)
          do {
            var index_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item_0 = tmp0_fastMap.get_fkrdnv_k$(index_1);
            // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            var tmp$ret$2;
            // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>.<anonymous>' call
            var tmp0_safe_receiver = item_0;
            tmp$ret$2 = tmp0_safe_receiver == null ? null : item.toGlobal_fkwano_k$(tmp0_safe_receiver);
            var tmp0_plusAssign = tmp$ret$2;
            target_0.add_1j60pz_k$(tmp0_plusAssign);
          }
           while (inductionVariable_1 <= last_1);
        tmp$ret$3 = target_0;
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        var list = tmp$ret$6;
        addAll(target, list);
      }
       while (inductionVariable_0 <= last_0);
    tmp$ret$7 = target;
    var tmp1_let = tmp$ret$7;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
    var tmp_2;
    if (tmp1_let.get_size_woubt6_k$() < this.intrinsics_1.placeholders_1.get_size_woubt6_k$()) {
      var tmp$ret$10;
      // Inline function 'kotlin.collections.List' call
      var tmp0_List = this.intrinsics_1.placeholders_1.get_size_woubt6_k$() - tmp1_let.get_size_woubt6_k$() | 0;
      var tmp$ret$9;
      // Inline function 'kotlin.collections.MutableList' call
      var list_0 = ArrayList_init_$Create$_0(tmp0_List);
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < tmp0_List)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          var tmp$ret$8;
          // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>' call
          tmp$ret$8 = null;
          list_0.add_1j60pz_k$(tmp$ret$8);
        }
         while (inductionVariable_2 < tmp0_List);
      tmp$ret$9 = list_0;
      tmp$ret$10 = tmp$ret$9;
      tmp_2 = plus(tmp1_let, tmp$ret$10);
    } else {
      tmp_2 = tmp1_let;
    }
    tmp$ret$11 = tmp_2;
    tmp$ret$12 = tmp$ret$11;
    tmp_1.placeholderRects_1 = tmp$ret$12;
    this.$stable_1 = 0;
  }
  MultiParagraph.prototype.get_intrinsics_1zqd0p_k$ = function () {
    return this.intrinsics_1;
  };
  MultiParagraph.prototype.get_maxLines_pclpoc_k$ = function () {
    return this.maxLines_1;
  };
  MultiParagraph.prototype.get_minIntrinsicWidth_lmc1rq_k$ = function () {
    return this.intrinsics_1.get_maxIntrinsicWidth_b4gk2k_k$();
  };
  MultiParagraph.prototype.get_maxIntrinsicWidth_b4gk2k_k$ = function () {
    return this.intrinsics_1.get_maxIntrinsicWidth_b4gk2k_k$();
  };
  MultiParagraph.prototype.get_didExceedMaxLines_xyxo57_k$ = function () {
    return this.didExceedMaxLines_1;
  };
  MultiParagraph.prototype.get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  MultiParagraph.prototype.get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  MultiParagraph.prototype.get_firstBaseline_s5430_k$ = function () {
    var tmp;
    if (this.paragraphInfoList_1.isEmpty_y1axqb_k$()) {
      tmp = 0.0;
    } else {
      tmp = this.paragraphInfoList_1.get_fkrdnv_k$(0).paragraph_1.get_firstBaseline_s5430_k$();
    }
    return tmp;
  };
  MultiParagraph.prototype.get_lastBaseline_inuptw_k$ = function () {
    var tmp;
    if (this.paragraphInfoList_1.isEmpty_y1axqb_k$()) {
      tmp = 0.0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      var tmp0_with = last(this.paragraphInfoList_1);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.MultiParagraph.<get-lastBaseline>.<anonymous>' call
      tmp$ret$0 = tmp0_with.toGlobalYPosition_9cwjwk_k$(tmp0_with.paragraph_1.get_lastBaseline_inuptw_k$());
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  MultiParagraph.prototype.get_lineCount_lmaazy_k$ = function () {
    return this.lineCount_1;
  };
  MultiParagraph.prototype.get_placeholderRects_1ky2fv_k$ = function () {
    return this.placeholderRects_1;
  };
  MultiParagraph.prototype.get_paragraphInfoList_5kk1wv_k$ = function () {
    return this.paragraphInfoList_1;
  };
  MultiParagraph.prototype.paint_aoyx3m_k$ = function (canvas, color, shadow, decoration) {
    canvas.save_erlm4_k$();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var tmp0_fastForEach = this.paragraphInfoList_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.text.MultiParagraph.paint.<anonymous>' call
        item.paragraph_1.paint_aoyx3m_k$(canvas, color, shadow, decoration);
        canvas.translate_62wf99_k$(0.0, item.paragraph_1.get_height_e7t92o_k$());
      }
       while (inductionVariable <= last);
    canvas.restore_a2id37_k$();
  };
  MultiParagraph.prototype.paint$default_wa4bwc_k$ = function (canvas, color, shadow, decoration, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      color = Companion_getInstance().Unspecified_1;
    if (!(($mask0 & 4) === 0))
      shadow = null;
    if (!(($mask0 & 8) === 0))
      decoration = null;
    return this.paint_aoyx3m_k$(canvas, color, shadow, decoration);
  };
  MultiParagraph.prototype.paint_kx3vu1_k$ = function (canvas, brush, alpha, shadow, decoration) {
    drawMultiParagraph(this, canvas, brush, alpha, shadow, decoration);
  };
  MultiParagraph.prototype.paint$default_5g468c_k$ = function (canvas, brush, alpha, shadow, decoration, $mask0, $handler) {
    if (!(($mask0 & 4) === 0)) {
      FloatCompanionObject_getInstance();
      alpha = NaN;
    }
    if (!(($mask0 & 8) === 0))
      shadow = null;
    if (!(($mask0 & 16) === 0))
      decoration = null;
    return this.paint_kx3vu1_k$(canvas, brush, alpha, shadow, decoration);
  };
  MultiParagraph.prototype.getPathForRange_i163f3_k$ = function (start, end) {
    // Inline function 'kotlin.require' call
    var tmp0_require = (0 <= start ? start <= end : false) ? end <= _get_annotatedString__kqljtk(this).text_1.length : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.MultiParagraph.getPathForRange.<anonymous>' call
      tmp$ret$0 = 'Start(' + start + ') or End(' + end + ') is out of range [0..' + _get_annotatedString__kqljtk(this).text_1.length + '),' + ' or start > end!';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (start === end)
      return Path();
    var paragraphIndex = findParagraphByIndex(this.paragraphInfoList_1, start);
    var path = Path();
    var inductionVariable = paragraphIndex;
    var last = this.paragraphInfoList_1.get_size_woubt6_k$();
    if (inductionVariable < last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var p = this.paragraphInfoList_1.get_fkrdnv_k$(i);
        if (p.startIndex_1 >= end)
          break $l$loop_0;
        if (p.startIndex_1 === p.endIndex_1)
          continue $l$loop_0;
        var tmp$ret$1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp = p.toGlobal_wzvkqk_k$(p.paragraph_1.getPathForRange_i163f3_k$(p.toLocalIndex_wba0oh_k$(start), p.toLocalIndex_wba0oh_k$(end)));
        path.addPath$default_qq1a1o_k$(tmp, null, 2, null);
        tmp$ret$1 = Unit_getInstance();
      }
       while (inductionVariable < last);
    return path;
  };
  MultiParagraph.prototype.getLineForVerticalPosition_c1p2r4_k$ = function (vertical) {
    var paragraphIndex = vertical <= 0.0 ? 0 : vertical >= this.height_1 ? get_lastIndex(this.paragraphInfoList_1) : findParagraphByY(this.paragraphInfoList_1, vertical);
    var tmp$ret$2;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineForVerticalPosition.<anonymous>' call
    var tmp;
    if (tmp0_with.get_length_g42xv3_k$() === 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.max' call
      var tmp0_max = tmp0_with.startIndex_1 - 1 | 0;
      tmp$ret$0 = Math.max(0, tmp0_max);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_with.toGlobalLineIndex_mdumgd_k$(tmp0_with.paragraph_1.getLineForVerticalPosition_c1p2r4_k$(tmp0_with.toLocalYPosition_j2kqvm_k$(vertical)));
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  MultiParagraph.prototype.getOffsetForPosition_f04xcw_k$ = function (position) {
    var paragraphIndex = _Offset___get_y__impl__8bzhra(position) <= 0.0 ? 0 : _Offset___get_y__impl__8bzhra(position) >= this.height_1 ? get_lastIndex(this.paragraphInfoList_1) : findParagraphByY(this.paragraphInfoList_1, _Offset___get_y__impl__8bzhra(position));
    var tmp$ret$2;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getOffsetForPosition.<anonymous>' call
    var tmp;
    if (tmp0_with.get_length_g42xv3_k$() === 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.max' call
      var tmp0_max = tmp0_with.startIndex_1 - 1 | 0;
      tmp$ret$0 = Math.max(0, tmp0_max);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_with.toGlobalIndex_v98a4h_k$(tmp0_with.paragraph_1.getOffsetForPosition_f04xcw_k$(tmp0_with.toLocal_92y82x_k$(position)));
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  MultiParagraph.prototype.getBoundingBox_urudbk_k$ = function (offset) {
    requireIndexInRange(this, offset);
    var paragraphIndex = findParagraphByIndex(this.paragraphInfoList_1, offset);
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getBoundingBox.<anonymous>' call
    tmp$ret$0 = tmp0_with.toGlobal_fkwano_k$(tmp0_with.paragraph_1.getBoundingBox_urudbk_k$(tmp0_with.toLocalIndex_wba0oh_k$(offset)));
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getHorizontalPosition_b8vvic_k$ = function (offset, usePrimaryDirection) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).get_length_g42xv3_k$()) {
      tmp = get_lastIndex(this.paragraphInfoList_1);
    } else {
      tmp = findParagraphByIndex(this.paragraphInfoList_1, offset);
    }
    var paragraphIndex = tmp;
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getHorizontalPosition.<anonymous>' call
    tmp$ret$0 = tmp0_with.paragraph_1.getHorizontalPosition_b8vvic_k$(tmp0_with.toLocalIndex_wba0oh_k$(offset), usePrimaryDirection);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getParagraphDirection_x8sft2_k$ = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).get_length_g42xv3_k$()) {
      tmp = get_lastIndex(this.paragraphInfoList_1);
    } else {
      tmp = findParagraphByIndex(this.paragraphInfoList_1, offset);
    }
    var paragraphIndex = tmp;
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getParagraphDirection.<anonymous>' call
    tmp$ret$0 = tmp0_with.paragraph_1.getParagraphDirection_x8sft2_k$(tmp0_with.toLocalIndex_wba0oh_k$(offset));
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getBidiRunDirection_dqdnqj_k$ = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).get_length_g42xv3_k$()) {
      tmp = get_lastIndex(this.paragraphInfoList_1);
    } else {
      tmp = findParagraphByIndex(this.paragraphInfoList_1, offset);
    }
    var paragraphIndex = tmp;
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getBidiRunDirection.<anonymous>' call
    tmp$ret$0 = tmp0_with.paragraph_1.getBidiRunDirection_dqdnqj_k$(tmp0_with.toLocalIndex_wba0oh_k$(offset));
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getWordBoundary_qx0177_k$ = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).get_length_g42xv3_k$()) {
      tmp = get_lastIndex(this.paragraphInfoList_1);
    } else {
      tmp = findParagraphByIndex(this.paragraphInfoList_1, offset);
    }
    var paragraphIndex = tmp;
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getWordBoundary.<anonymous>' call
    tmp$ret$0 = tmp0_with.toGlobal_swnfqp_k$(tmp0_with.paragraph_1.getWordBoundary_qx0177_k$(tmp0_with.toLocalIndex_wba0oh_k$(offset)));
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getCursorRect_x5c8fl_k$ = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).get_length_g42xv3_k$()) {
      tmp = get_lastIndex(this.paragraphInfoList_1);
    } else {
      tmp = findParagraphByIndex(this.paragraphInfoList_1, offset);
    }
    var paragraphIndex = tmp;
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getCursorRect.<anonymous>' call
    tmp$ret$0 = tmp0_with.toGlobal_fkwano_k$(tmp0_with.paragraph_1.getCursorRect_x5c8fl_k$(tmp0_with.toLocalIndex_wba0oh_k$(offset)));
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getLineForOffset_9a3vwv_k$ = function (offset) {
    var tmp;
    if (offset >= _get_annotatedString__kqljtk(this).get_length_g42xv3_k$()) {
      tmp = get_lastIndex(this.paragraphInfoList_1);
    } else if (offset < 0) {
      tmp = 0;
    } else {
      tmp = findParagraphByIndex(this.paragraphInfoList_1, offset);
    }
    var paragraphIndex = tmp;
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineForOffset.<anonymous>' call
    tmp$ret$0 = tmp0_with.toGlobalLineIndex_mdumgd_k$(tmp0_with.paragraph_1.getLineForOffset_9a3vwv_k$(tmp0_with.toLocalIndex_wba0oh_k$(offset)));
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getLineLeft_w1obtc_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineLeft.<anonymous>' call
    tmp$ret$0 = tmp0_with.paragraph_1.getLineLeft_w1obtc_k$(tmp0_with.toLocalLineIndex_br45j9_k$(lineIndex));
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getLineRight_bo0e7j_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineRight.<anonymous>' call
    tmp$ret$0 = tmp0_with.paragraph_1.getLineRight_bo0e7j_k$(tmp0_with.toLocalLineIndex_br45j9_k$(lineIndex));
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getLineTop_8a2w7q_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineTop.<anonymous>' call
    tmp$ret$0 = tmp0_with.toGlobalYPosition_9cwjwk_k$(tmp0_with.paragraph_1.getLineTop_8a2w7q_k$(tmp0_with.toLocalLineIndex_br45j9_k$(lineIndex)));
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getLineBottom_spjtf0_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineBottom.<anonymous>' call
    tmp$ret$0 = tmp0_with.toGlobalYPosition_9cwjwk_k$(tmp0_with.paragraph_1.getLineBottom_spjtf0_k$(tmp0_with.toLocalLineIndex_br45j9_k$(lineIndex)));
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getLineHeight_ba5d5c_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineHeight.<anonymous>' call
    tmp$ret$0 = tmp0_with.paragraph_1.getLineHeight_ba5d5c_k$(tmp0_with.toLocalLineIndex_br45j9_k$(lineIndex));
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getLineWidth_ia4jjv_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineWidth.<anonymous>' call
    tmp$ret$0 = tmp0_with.paragraph_1.getLineWidth_ia4jjv_k$(tmp0_with.toLocalLineIndex_br45j9_k$(lineIndex));
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getLineStart_504snr_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineStart.<anonymous>' call
    tmp$ret$0 = tmp0_with.toGlobalIndex_v98a4h_k$(tmp0_with.paragraph_1.getLineStart_504snr_k$(tmp0_with.toLocalLineIndex_br45j9_k$(lineIndex)));
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getLineEnd_7kqxuy_k$ = function (lineIndex, visibleEnd) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineEnd.<anonymous>' call
    tmp$ret$0 = tmp0_with.toGlobalIndex_v98a4h_k$(tmp0_with.paragraph_1.getLineEnd_7kqxuy_k$(tmp0_with.toLocalLineIndex_br45j9_k$(lineIndex), visibleEnd));
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getLineEnd$default_prmziz_k$ = function (lineIndex, visibleEnd, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      visibleEnd = false;
    return this.getLineEnd_7kqxuy_k$(lineIndex, visibleEnd);
  };
  MultiParagraph.prototype.isLineEllipsized_r1ol1o_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.isLineEllipsized.<anonymous>' call
    tmp$ret$0 = tmp0_with.paragraph_1.isLineEllipsized_r1ol1o_k$(lineIndex);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  MultiParagraph.$metadata$ = classMeta('MultiParagraph');
  function ParagraphInfo_init_$Init$(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      startLineIndex = -1;
    if (!(($mask0 & 16) === 0))
      endLineIndex = -1;
    if (!(($mask0 & 32) === 0))
      top = -1.0;
    if (!(($mask0 & 64) === 0))
      bottom = -1.0;
    ParagraphInfo.call($this, paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom);
    return $this;
  }
  function ParagraphInfo_init_$Create$(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom, $mask0, $marker) {
    return ParagraphInfo_init_$Init$(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom, $mask0, $marker, Object.create(ParagraphInfo.prototype));
  }
  function ParagraphInfo(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom) {
    this.paragraph_1 = paragraph;
    this.startIndex_1 = startIndex;
    this.endIndex_1 = endIndex;
    this.startLineIndex_1 = startLineIndex;
    this.endLineIndex_1 = endLineIndex;
    this.top_1 = top;
    this.bottom_1 = bottom;
  }
  ParagraphInfo.prototype.get_paragraph_ua17wb_k$ = function () {
    return this.paragraph_1;
  };
  ParagraphInfo.prototype.get_startIndex_oi1lp5_k$ = function () {
    return this.startIndex_1;
  };
  ParagraphInfo.prototype.get_endIndex_3lslfk_k$ = function () {
    return this.endIndex_1;
  };
  ParagraphInfo.prototype.set_startLineIndex_gckpef_k$ = function (_set____db54di) {
    this.startLineIndex_1 = _set____db54di;
  };
  ParagraphInfo.prototype.get_startLineIndex_2jj8jf_k$ = function () {
    return this.startLineIndex_1;
  };
  ParagraphInfo.prototype.set_endLineIndex_4g8xww_k$ = function (_set____db54di) {
    this.endLineIndex_1 = _set____db54di;
  };
  ParagraphInfo.prototype.get_endLineIndex_wassus_k$ = function () {
    return this.endLineIndex_1;
  };
  ParagraphInfo.prototype.set_top_62laxx_k$ = function (_set____db54di) {
    this.top_1 = _set____db54di;
  };
  ParagraphInfo.prototype.get_top_18ivbo_k$ = function () {
    return this.top_1;
  };
  ParagraphInfo.prototype.set_bottom_y9ard7_k$ = function (_set____db54di) {
    this.bottom_1 = _set____db54di;
  };
  ParagraphInfo.prototype.get_bottom_bj8ras_k$ = function () {
    return this.bottom_1;
  };
  ParagraphInfo.prototype.get_length_g42xv3_k$ = function () {
    return this.endIndex_1 - this.startIndex_1 | 0;
  };
  ParagraphInfo.prototype.toLocalIndex_wba0oh_k$ = function (_this__u8e3s4) {
    return coerceIn(_this__u8e3s4, this.startIndex_1, this.endIndex_1) - this.startIndex_1 | 0;
  };
  ParagraphInfo.prototype.toGlobalIndex_v98a4h_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.startIndex_1 | 0;
  };
  ParagraphInfo.prototype.toLocalLineIndex_br45j9_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.startLineIndex_1 | 0;
  };
  ParagraphInfo.prototype.toGlobalLineIndex_mdumgd_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.startLineIndex_1 | 0;
  };
  ParagraphInfo.prototype.toGlobalYPosition_9cwjwk_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.top_1;
  };
  ParagraphInfo.prototype.toLocalYPosition_j2kqvm_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.top_1;
  };
  ParagraphInfo.prototype.toLocal_92y82x_k$ = function (_this__u8e3s4) {
    return Offset(_Offset___get_x__impl__xvi35n(_this__u8e3s4), _Offset___get_y__impl__8bzhra(_this__u8e3s4) - this.top_1);
  };
  ParagraphInfo.prototype.toGlobal_fkwano_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.translate_bllf6j_k$(Offset(0.0, this.top_1));
  };
  ParagraphInfo.prototype.toGlobal_wzvkqk_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.translate_mdejcc_k$(Offset(0.0, this.top_1));
    return _this__u8e3s4;
  };
  ParagraphInfo.prototype.toGlobal_swnfqp_k$ = function (_this__u8e3s4) {
    return TextRange_0(this.toGlobalIndex_v98a4h_k$(_TextRange___get_start__impl__ww4t90(_this__u8e3s4)), this.toGlobalIndex_v98a4h_k$(_TextRange___get_end__impl__gcdxpp(_this__u8e3s4)));
  };
  ParagraphInfo.prototype.component1_7eebsc_k$ = function () {
    return this.paragraph_1;
  };
  ParagraphInfo.prototype.component2_7eebsb_k$ = function () {
    return this.startIndex_1;
  };
  ParagraphInfo.prototype.component3_7eebsa_k$ = function () {
    return this.endIndex_1;
  };
  ParagraphInfo.prototype.component4_7eebs9_k$ = function () {
    return this.startLineIndex_1;
  };
  ParagraphInfo.prototype.component5_7eebs8_k$ = function () {
    return this.endLineIndex_1;
  };
  ParagraphInfo.prototype.component6_7eebs7_k$ = function () {
    return this.top_1;
  };
  ParagraphInfo.prototype.component7_7eebs6_k$ = function () {
    return this.bottom_1;
  };
  ParagraphInfo.prototype.copy_c94g8g_k$ = function (paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom) {
    return new ParagraphInfo(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom);
  };
  ParagraphInfo.prototype.copy$default_7zjybu_k$ = function (paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      paragraph = this.paragraph_1;
    if (!(($mask0 & 2) === 0))
      startIndex = this.startIndex_1;
    if (!(($mask0 & 4) === 0))
      endIndex = this.endIndex_1;
    if (!(($mask0 & 8) === 0))
      startLineIndex = this.startLineIndex_1;
    if (!(($mask0 & 16) === 0))
      endLineIndex = this.endLineIndex_1;
    if (!(($mask0 & 32) === 0))
      top = this.top_1;
    if (!(($mask0 & 64) === 0))
      bottom = this.bottom_1;
    return this.copy_c94g8g_k$(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom);
  };
  ParagraphInfo.prototype.toString = function () {
    return 'ParagraphInfo(paragraph=' + this.paragraph_1 + ', startIndex=' + this.startIndex_1 + ', endIndex=' + this.endIndex_1 + ', startLineIndex=' + this.startLineIndex_1 + ', endLineIndex=' + this.endLineIndex_1 + ', top=' + this.top_1 + ', bottom=' + this.bottom_1 + ')';
  };
  ParagraphInfo.prototype.hashCode = function () {
    var result = hashCode(this.paragraph_1);
    result = imul(result, 31) + this.startIndex_1 | 0;
    result = imul(result, 31) + this.endIndex_1 | 0;
    result = imul(result, 31) + this.startLineIndex_1 | 0;
    result = imul(result, 31) + this.endLineIndex_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.top_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.bottom_1) | 0;
    return result;
  };
  ParagraphInfo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphInfo ? other : THROW_CCE();
    if (!equals(this.paragraph_1, tmp0_other_with_cast.paragraph_1))
      return false;
    if (!(this.startIndex_1 === tmp0_other_with_cast.startIndex_1))
      return false;
    if (!(this.endIndex_1 === tmp0_other_with_cast.endIndex_1))
      return false;
    if (!(this.startLineIndex_1 === tmp0_other_with_cast.startLineIndex_1))
      return false;
    if (!(this.endLineIndex_1 === tmp0_other_with_cast.endLineIndex_1))
      return false;
    if (!equals(this.top_1, tmp0_other_with_cast.top_1))
      return false;
    if (!equals(this.bottom_1, tmp0_other_with_cast.bottom_1))
      return false;
    return true;
  };
  ParagraphInfo.$metadata$ = classMeta('ParagraphInfo');
  function findParagraphByIndex(paragraphInfoList, index) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.get_size_woubt6_k$() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.get_fkrdnv_k$(mid);
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.findParagraphByIndex.<anonymous>' call
        tmp$ret$0 = midVal.startIndex_1 > index ? 1 : midVal.endIndex_1 <= index ? -1 : 0;
        var cmp = tmp$ret$0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function findParagraphByY(paragraphInfoList, y) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.get_size_woubt6_k$() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.get_fkrdnv_k$(mid);
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.findParagraphByY.<anonymous>' call
        tmp$ret$0 = midVal.top_1 > y ? 1 : midVal.bottom_1 <= y ? -1 : 0;
        var cmp = tmp$ret$0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function findParagraphByLineIndex(paragraphInfoList, lineIndex) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.get_size_woubt6_k$() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.get_fkrdnv_k$(mid);
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.findParagraphByLineIndex.<anonymous>' call
        tmp$ret$0 = midVal.startLineIndex_1 > lineIndex ? 1 : midVal.endLineIndex_1 <= lineIndex ? -1 : 0;
        var cmp = tmp$ret$0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function fastBinarySearch(_this__u8e3s4, comparison) {
    var low = 0;
    var high = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.get_fkrdnv_k$(mid);
      var cmp = comparison(midVal);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function MultiParagraphIntrinsics_init_$Init$(annotatedString, style, placeholders, density, resourceLoader, $this) {
    MultiParagraphIntrinsics.call($this, annotatedString, style, placeholders, density, createFontFamilyResolver(resourceLoader));
    return $this;
  }
  function MultiParagraphIntrinsics_init_$Create$(annotatedString, style, placeholders, density, resourceLoader) {
    return MultiParagraphIntrinsics_init_$Init$(annotatedString, style, placeholders, density, resourceLoader, Object.create(MultiParagraphIntrinsics.prototype));
  }
  function resolveTextDirection($this, style, defaultStyle) {
    var tmp0_safe_receiver = style.textDirection_1;
    var tmp;
    var tmp_0 = tmp0_safe_receiver;
    if ((tmp_0 == null ? null : new TextDirection(tmp_0)) == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.resolveTextDirection.<anonymous>' call
      tmp$ret$0 = style;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      tmp_1 = style.copy$default_jk8vas_k$(null, defaultStyle.textDirection_1, null, null, 13, null);
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        var tmp0_fastMaxBy = this$0.infoList_1;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp0_fastMaxBy.isEmpty_y1axqb_k$()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = tmp0_fastMaxBy.get_fkrdnv_k$(0);
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.minIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
        var tmp1__anonymous__uwfjfc = maxElem;
        tmp$ret$1 = tmp1__anonymous__uwfjfc.intrinsics_1.get_minIntrinsicWidth_lmc1rq_k$();
        var maxValue = tmp$ret$1;
        var inductionVariable = 1;
        var last = get_lastIndex(tmp0_fastMaxBy);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = tmp0_fastMaxBy.get_fkrdnv_k$(i);
            var tmp$ret$2;
            // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.minIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
            tmp$ret$2 = e.intrinsics_1.get_minIntrinsicWidth_lmc1rq_k$();
            var v = tmp$ret$2;
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.intrinsics_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_minIntrinsicWidth_lmc1rq_k$();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        var tmp0_fastMaxBy = this$0.infoList_1;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp0_fastMaxBy.isEmpty_y1axqb_k$()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = tmp0_fastMaxBy.get_fkrdnv_k$(0);
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.maxIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
        var tmp1__anonymous__uwfjfc = maxElem;
        tmp$ret$1 = tmp1__anonymous__uwfjfc.intrinsics_1.get_maxIntrinsicWidth_b4gk2k_k$();
        var maxValue = tmp$ret$1;
        var inductionVariable = 1;
        var last = get_lastIndex(tmp0_fastMaxBy);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = tmp0_fastMaxBy.get_fkrdnv_k$(i);
            var tmp$ret$2;
            // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.maxIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
            tmp$ret$2 = e.intrinsics_1.get_maxIntrinsicWidth_b4gk2k_k$();
            var v = tmp$ret$2;
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.intrinsics_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_maxIntrinsicWidth_b4gk2k_k$();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics(annotatedString, style, placeholders, density, fontFamilyResolver) {
    this.annotatedString_1 = annotatedString;
    this.placeholders_1 = placeholders;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    tmp.minIntrinsicWidth$delegate_1 = lazy(tmp_0, MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this));
    var tmp_1 = this;
    var tmp_2 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_1.maxIntrinsicWidth$delegate_1 = lazy(tmp_2, MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this));
    var paragraphStyle = style.toParagraphStyle_zfuegy_k$();
    var tmp_3 = this;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle' call
    var tmp0_mapEachParagraphStyle = this.annotatedString_1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp0_fastMap = normalizedParagraphStyles(tmp0_mapEachParagraphStyle, paragraphStyle);
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(tmp0_fastMap.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastMap.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastMap.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle.<anonymous>' call
        var annotatedString_0 = substringWithoutParagraphStyles(tmp0_mapEachParagraphStyle, item.start_1, item.end_1);
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.<anonymous>' call
        var currentParagraphStyle = resolveTextDirection(this, item.item_1, paragraphStyle);
        tmp$ret$0 = new ParagraphIntrinsicInfo(ParagraphIntrinsics_0(annotatedString_0.text_1, style.merge_lt4ge4_k$(currentParagraphStyle), annotatedString_0.spanStyles_1, getLocalPlaceholders(this.placeholders_1, item.start_1, item.end_1), density, fontFamilyResolver), item.start_1, item.end_1);
        tmp$ret$1 = tmp$ret$0;
        var tmp0_plusAssign = tmp$ret$1;
        target.add_1j60pz_k$(tmp0_plusAssign);
      }
       while (inductionVariable <= last);
    tmp$ret$2 = target;
    tmp$ret$3 = tmp$ret$2;
    tmp_3.infoList_1 = tmp$ret$3;
    this.$stable_1 = 0;
  }
  MultiParagraphIntrinsics.prototype.get_annotatedString_5pdwrk_k$ = function () {
    return this.annotatedString_1;
  };
  MultiParagraphIntrinsics.prototype.get_placeholders_r4ppyh_k$ = function () {
    return this.placeholders_1;
  };
  MultiParagraphIntrinsics.prototype.get_minIntrinsicWidth_lmc1rq_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = minIntrinsicWidth$factory();
    tmp$ret$0 = this.minIntrinsicWidth$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  MultiParagraphIntrinsics.prototype.get_maxIntrinsicWidth_b4gk2k_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = maxIntrinsicWidth$factory();
    tmp$ret$0 = this.maxIntrinsicWidth$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  MultiParagraphIntrinsics.prototype.get_infoList_sv4zbf_k$ = function () {
    return this.infoList_1;
  };
  MultiParagraphIntrinsics.prototype.get_hasStaleResolvedFonts_tun9ic_k$ = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      var tmp0_fastAny = this.infoList_1;
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
          // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.<get-hasStaleResolvedFonts>.<anonymous>' call
          tmp$ret$0 = item.intrinsics_1.get_hasStaleResolvedFonts_tun9ic_k$();
          if (tmp$ret$0) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  };
  MultiParagraphIntrinsics.$metadata$ = classMeta('MultiParagraphIntrinsics', [ParagraphIntrinsics]);
  function ParagraphIntrinsicInfo(intrinsics, startIndex, endIndex) {
    this.intrinsics_1 = intrinsics;
    this.startIndex_1 = startIndex;
    this.endIndex_1 = endIndex;
  }
  ParagraphIntrinsicInfo.prototype.get_intrinsics_1zqd0p_k$ = function () {
    return this.intrinsics_1;
  };
  ParagraphIntrinsicInfo.prototype.get_startIndex_oi1lp5_k$ = function () {
    return this.startIndex_1;
  };
  ParagraphIntrinsicInfo.prototype.get_endIndex_3lslfk_k$ = function () {
    return this.endIndex_1;
  };
  ParagraphIntrinsicInfo.prototype.component1_7eebsc_k$ = function () {
    return this.intrinsics_1;
  };
  ParagraphIntrinsicInfo.prototype.component2_7eebsb_k$ = function () {
    return this.startIndex_1;
  };
  ParagraphIntrinsicInfo.prototype.component3_7eebsa_k$ = function () {
    return this.endIndex_1;
  };
  ParagraphIntrinsicInfo.prototype.copy_ani2qm_k$ = function (intrinsics, startIndex, endIndex) {
    return new ParagraphIntrinsicInfo(intrinsics, startIndex, endIndex);
  };
  ParagraphIntrinsicInfo.prototype.copy$default_o1zf5w_k$ = function (intrinsics, startIndex, endIndex, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      intrinsics = this.intrinsics_1;
    if (!(($mask0 & 2) === 0))
      startIndex = this.startIndex_1;
    if (!(($mask0 & 4) === 0))
      endIndex = this.endIndex_1;
    return this.copy_ani2qm_k$(intrinsics, startIndex, endIndex);
  };
  ParagraphIntrinsicInfo.prototype.toString = function () {
    return 'ParagraphIntrinsicInfo(intrinsics=' + this.intrinsics_1 + ', startIndex=' + this.startIndex_1 + ', endIndex=' + this.endIndex_1 + ')';
  };
  ParagraphIntrinsicInfo.prototype.hashCode = function () {
    var result = hashCode(this.intrinsics_1);
    result = imul(result, 31) + this.startIndex_1 | 0;
    result = imul(result, 31) + this.endIndex_1 | 0;
    return result;
  };
  ParagraphIntrinsicInfo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphIntrinsicInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphIntrinsicInfo ? other : THROW_CCE();
    if (!equals(this.intrinsics_1, tmp0_other_with_cast.intrinsics_1))
      return false;
    if (!(this.startIndex_1 === tmp0_other_with_cast.startIndex_1))
      return false;
    if (!(this.endIndex_1 === tmp0_other_with_cast.endIndex_1))
      return false;
    return true;
  };
  ParagraphIntrinsicInfo.$metadata$ = classMeta('ParagraphIntrinsicInfo');
  function getLocalPlaceholders(_this__u8e3s4, start, end) {
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>' call
        tmp$ret$0 = intersect(start, end, item.start_1, item.end_1);
        if (tmp$ret$0) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_1j60pz_k$(item);
        }
      }
       while (inductionVariable <= last);
    tmp$ret$1 = target;
    var tmp0_fastMap = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(tmp0_fastMap.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = tmp0_fastMap.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = tmp0_fastMap.get_fkrdnv_k$(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>' call
        // Inline function 'kotlin.require' call
        var tmp0_require = start <= item_0.start_1 ? item_0.end_1 <= end : false;
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_require) {
          var tmp$ret$2;
          // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>.<anonymous>' call
          tmp$ret$2 = 'placeholder can not overlap with paragraph.';
          var message = tmp$ret$2;
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
        tmp$ret$3 = Range_init_$Create$(item_0.item_1, item_0.start_1 - start | 0, item_0.end_1 - start | 0);
        var tmp0_plusAssign = tmp$ret$3;
        target_0.add_1j60pz_k$(tmp0_plusAssign);
      }
       while (inductionVariable_0 <= last_0);
    tmp$ret$4 = target_0;
    return tmp$ret$4;
  }
  function minIntrinsicWidth$factory() {
    return getPropertyCallableRef('minIntrinsicWidth', 1, KProperty1, function (receiver) {
      return receiver.get_minIntrinsicWidth_lmc1rq_k$();
    }, null);
  }
  function maxIntrinsicWidth$factory() {
    return getPropertyCallableRef('maxIntrinsicWidth', 1, KProperty1, function (receiver) {
      return receiver.get_maxIntrinsicWidth_b4gk2k_k$();
    }, null);
  }
  function get_DefaultMaxLines() {
    return DefaultMaxLines;
  }
  var DefaultMaxLines;
  function ceilToInt(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.ceil' call
    tmp$ret$0 = Math.ceil(_this__u8e3s4);
    return numberToInt(tmp$ret$0);
  }
  function Paragraph(paragraphIntrinsics, constraints, maxLines, ellipsis) {
    return ActualParagraph(paragraphIntrinsics, maxLines, ellipsis, constraints);
  }
  function Paragraph$default(paragraphIntrinsics, constraints, maxLines, ellipsis, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      maxLines = 2147483647;
    if (!(($mask0 & 8) === 0))
      ellipsis = false;
    return Paragraph(paragraphIntrinsics, constraints, maxLines, ellipsis);
  }
  function ParagraphIntrinsics() {
  }
  ParagraphIntrinsics.$metadata$ = interfaceMeta('ParagraphIntrinsics');
  function ParagraphIntrinsics_0(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    return ActualParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver);
  }
  function ParagraphIntrinsics$default(text, style, spanStyles, placeholders, density, fontFamilyResolver, $mask0, $handler) {
    if (!(($mask0 & 4) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0 = emptyList();
      tmp$ret$0_0 = Unit_getInstance();
      spanStyles = tmp$ret$0;
    }
    if (!(($mask0 & 8) === 0)) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0_1 = emptyList();
      tmp$ret$1 = Unit_getInstance();
      placeholders = tmp$ret$0_1;
    }
    return ParagraphIntrinsics_0(text, style, spanStyles, placeholders, density, fontFamilyResolver);
  }
  function get_DefaultLineHeight() {
    init_properties_ParagraphStyle_kt_l2iumv();
    return DefaultLineHeight;
  }
  var DefaultLineHeight;
  function ParagraphStyle_init_$Init$(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      textAlign = null;
    if (!(($mask0 & 2) === 0))
      textDirection = null;
    if (!(($mask0 & 4) === 0))
      lineHeight = Companion_getInstance_0().Unspecified_1;
    if (!(($mask0 & 8) === 0))
      textIndent = null;
    if (!(($mask0 & 16) === 0))
      platformStyle = null;
    if (!(($mask0 & 32) === 0))
      lineHeightStyle = null;
    if (!(($mask0 & 64) === 0))
      lineBreak = null;
    if (!(($mask0 & 128) === 0))
      hyphens = null;
    ParagraphStyle_0.call($this, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens);
    return $this;
  }
  function ParagraphStyle_init_$Create$(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $mask0, $marker) {
    return ParagraphStyle_init_$Init$(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $mask0, $marker, Object.create(ParagraphStyle_0.prototype));
  }
  function ParagraphStyle_init_$Init$_0(textAlign, textDirection, lineHeight, textIndent, $this) {
    ParagraphStyle_init_$Init$_2(textAlign, textDirection, lineHeight, textIndent, null, null, $this);
    return $this;
  }
  function ParagraphStyle_init_$Create$_0(textAlign, textDirection, lineHeight, textIndent) {
    return ParagraphStyle_init_$Init$_0(textAlign, textDirection, lineHeight, textIndent, Object.create(ParagraphStyle_0.prototype));
  }
  function ParagraphStyle_init_$Init$_1(textAlign, textDirection, lineHeight, textIndent, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      textAlign = null;
    if (!(($mask0 & 2) === 0))
      textDirection = null;
    if (!(($mask0 & 4) === 0))
      lineHeight = Companion_getInstance_0().Unspecified_1;
    if (!(($mask0 & 8) === 0))
      textIndent = null;
    ParagraphStyle_init_$Init$_0(textAlign, textDirection, lineHeight, textIndent, $this);
    return $this;
  }
  function ParagraphStyle_init_$Create$_1(textAlign, textDirection, lineHeight, textIndent, $mask0, $marker) {
    return ParagraphStyle_init_$Init$_1(textAlign, textDirection, lineHeight, textIndent, $mask0, $marker, Object.create(ParagraphStyle_0.prototype));
  }
  function ParagraphStyle_init_$Init$_2(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, $this) {
    ParagraphStyle_0.call($this, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, null, null);
    return $this;
  }
  function ParagraphStyle_init_$Create$_2(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle) {
    return ParagraphStyle_init_$Init$_2(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, Object.create(ParagraphStyle_0.prototype));
  }
  function ParagraphStyle_init_$Init$_3(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      textAlign = null;
    if (!(($mask0 & 2) === 0))
      textDirection = null;
    if (!(($mask0 & 4) === 0))
      lineHeight = Companion_getInstance_0().Unspecified_1;
    if (!(($mask0 & 8) === 0))
      textIndent = null;
    if (!(($mask0 & 16) === 0))
      platformStyle = null;
    if (!(($mask0 & 32) === 0))
      lineHeightStyle = null;
    ParagraphStyle_init_$Init$_2(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, $this);
    return $this;
  }
  function ParagraphStyle_init_$Create$_3(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, $mask0, $marker) {
    return ParagraphStyle_init_$Init$_3(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, $mask0, $marker, Object.create(ParagraphStyle_0.prototype));
  }
  function mergePlatformStyle($this, other) {
    if ($this.platformStyle_1 == null)
      return other;
    if (other == null)
      return $this.platformStyle_1;
    return $this.platformStyle_1.merge_phrebc_k$(other);
  }
  function ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens) {
    this.textAlign_1 = textAlign;
    this.textDirection_1 = textDirection;
    this.lineHeight_1 = lineHeight;
    this.textIndent_1 = textIndent;
    this.platformStyle_1 = platformStyle;
    this.lineHeightStyle_1 = lineHeightStyle;
    this.lineBreak_1 = lineBreak;
    this.hyphens_1 = hyphens;
    if (!equals(this.lineHeight_1, Companion_getInstance_0().Unspecified_1)) {
      // Inline function 'kotlin.check' call
      var tmp0_check = _TextUnit___get_value__impl__hpbx0k(this.lineHeight_1) >= 0.0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.ParagraphStyle.<anonymous>' call
        tmp$ret$0 = "lineHeight can't be negative (" + _TextUnit___get_value__impl__hpbx0k(this.lineHeight_1) + ')';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  ParagraphStyle_0.prototype.get_textAlign_ihj0br_k$ = function () {
    return this.textAlign_1;
  };
  ParagraphStyle_0.prototype.get_textDirection_fsfodj_k$ = function () {
    return this.textDirection_1;
  };
  ParagraphStyle_0.prototype.get_lineHeight_oovvjw_k$ = function () {
    return this.lineHeight_1;
  };
  ParagraphStyle_0.prototype.get_textIndent_5mau2q_k$ = function () {
    return this.textIndent_1;
  };
  ParagraphStyle_0.prototype.get_platformStyle_7i053p_k$ = function () {
    return this.platformStyle_1;
  };
  ParagraphStyle_0.prototype.get_lineHeightStyle_fzu4s3_k$ = function () {
    return this.lineHeightStyle_1;
  };
  ParagraphStyle_0.prototype.get_lineBreak_lmsita_k$ = function () {
    return this.lineBreak_1;
  };
  ParagraphStyle_0.prototype.get_hyphens_o4a26w_k$ = function () {
    return this.hyphens_1;
  };
  ParagraphStyle_0.prototype.merge_y8afnf_k$ = function (other) {
    if (other == null)
      return this;
    var tmp;
    if (get_isUnspecified(other.lineHeight_1)) {
      tmp = this.lineHeight_1;
    } else {
      tmp = other.lineHeight_1;
    }
    var tmp6_lineHeight = tmp;
    var tmp2_elvis_lhs = other.textIndent_1;
    var tmp7_textIndent = tmp2_elvis_lhs == null ? this.textIndent_1 : tmp2_elvis_lhs;
    var tmp0_elvis_lhs = other.textAlign_1;
    var tmp_0;
    var tmp_1 = tmp0_elvis_lhs;
    if ((tmp_1 == null ? null : new TextAlign(tmp_1)) == null) {
      tmp_0 = this.textAlign_1;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var tmp8_textAlign = tmp_0;
    var tmp1_elvis_lhs = other.textDirection_1;
    var tmp_2;
    var tmp_3 = tmp1_elvis_lhs;
    if ((tmp_3 == null ? null : new TextDirection(tmp_3)) == null) {
      tmp_2 = this.textDirection_1;
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var tmp9_textDirection = tmp_2;
    var tmp10_platformStyle = mergePlatformStyle(this, other.platformStyle_1);
    var tmp3_elvis_lhs = other.lineHeightStyle_1;
    var tmp11_lineHeightStyle = tmp3_elvis_lhs == null ? this.lineHeightStyle_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = other.lineBreak_1;
    var tmp12_lineBreak = tmp4_elvis_lhs == null ? this.lineBreak_1 : tmp4_elvis_lhs;
    var tmp5_elvis_lhs = other.hyphens_1;
    var tmp13_hyphens = tmp5_elvis_lhs == null ? this.hyphens_1 : tmp5_elvis_lhs;
    return new ParagraphStyle_0(tmp8_textAlign, tmp9_textDirection, tmp6_lineHeight, tmp7_textIndent, tmp10_platformStyle, tmp11_lineHeightStyle, tmp12_lineBreak, tmp13_hyphens);
  };
  ParagraphStyle_0.prototype.merge$default_kpt5hg_k$ = function (other, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      other = null;
    return this.merge_y8afnf_k$(other);
  };
  ParagraphStyle_0.prototype.plus_3d6656_k$ = function (other) {
    return this.merge_y8afnf_k$(other);
  };
  ParagraphStyle_0.prototype.copy_eifuig_k$ = function (textAlign, textDirection, lineHeight, textIndent) {
    return new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, this.platformStyle_1, this.lineHeightStyle_1, this.lineBreak_1, this.hyphens_1);
  };
  ParagraphStyle_0.prototype.copy$default_jk8vas_k$ = function (textAlign, textDirection, lineHeight, textIndent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      textAlign = this.textAlign_1;
    if (!(($mask0 & 2) === 0))
      textDirection = this.textDirection_1;
    if (!(($mask0 & 4) === 0))
      lineHeight = this.lineHeight_1;
    if (!(($mask0 & 8) === 0))
      textIndent = this.textIndent_1;
    return this.copy_eifuig_k$(textAlign, textDirection, lineHeight, textIndent);
  };
  ParagraphStyle_0.prototype.copy_20901z_k$ = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle) {
    return new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, this.lineBreak_1, this.hyphens_1);
  };
  ParagraphStyle_0.prototype.copy$default_p92po7_k$ = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      textAlign = this.textAlign_1;
    if (!(($mask0 & 2) === 0))
      textDirection = this.textDirection_1;
    if (!(($mask0 & 4) === 0))
      lineHeight = this.lineHeight_1;
    if (!(($mask0 & 8) === 0))
      textIndent = this.textIndent_1;
    if (!(($mask0 & 16) === 0))
      platformStyle = this.platformStyle_1;
    if (!(($mask0 & 32) === 0))
      lineHeightStyle = this.lineHeightStyle_1;
    return this.copy_20901z_k$(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle);
  };
  ParagraphStyle_0.prototype.copy_xzidet_k$ = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens) {
    return new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens);
  };
  ParagraphStyle_0.prototype.copy$default_gyeh05_k$ = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      textAlign = this.textAlign_1;
    if (!(($mask0 & 2) === 0))
      textDirection = this.textDirection_1;
    if (!(($mask0 & 4) === 0))
      lineHeight = this.lineHeight_1;
    if (!(($mask0 & 8) === 0))
      textIndent = this.textIndent_1;
    if (!(($mask0 & 16) === 0))
      platformStyle = this.platformStyle_1;
    if (!(($mask0 & 32) === 0))
      lineHeightStyle = this.lineHeightStyle_1;
    if (!(($mask0 & 64) === 0))
      lineBreak = this.lineBreak_1;
    if (!(($mask0 & 128) === 0))
      hyphens = this.hyphens_1;
    return this.copy_xzidet_k$(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens);
  };
  ParagraphStyle_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphStyle_0))
      return false;
    var tmp = this.textAlign_1;
    var tmp_0 = tmp == null ? null : new TextAlign(tmp);
    var tmp_1 = other.textAlign_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new TextAlign(tmp_1)))
      return false;
    var tmp_2 = this.textDirection_1;
    var tmp_3 = tmp_2 == null ? null : new TextDirection(tmp_2);
    var tmp_4 = other.textDirection_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new TextDirection(tmp_4)))
      return false;
    if (!equals(this.lineHeight_1, other.lineHeight_1))
      return false;
    if (!equals(this.textIndent_1, other.textIndent_1))
      return false;
    if (!equals(this.platformStyle_1, other.platformStyle_1))
      return false;
    if (!equals(this.lineHeightStyle_1, other.lineHeightStyle_1))
      return false;
    if (!equals(this.lineBreak_1, other.lineBreak_1))
      return false;
    if (!equals(this.hyphens_1, other.hyphens_1))
      return false;
    return true;
  };
  ParagraphStyle_0.prototype.hashCode = function () {
    var tmp0_safe_receiver = this.textAlign_1;
    var tmp;
    var tmp_0 = tmp0_safe_receiver;
    if ((tmp_0 == null ? null : new TextAlign(tmp_0)) == null) {
      tmp = null;
    } else {
      tmp = TextAlign__hashCode_impl_s8g35y(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp_1 = imul(31, result);
    var tmp2_safe_receiver = this.textDirection_1;
    var tmp_2;
    var tmp_3 = tmp2_safe_receiver;
    if ((tmp_3 == null ? null : new TextDirection(tmp_3)) == null) {
      tmp_2 = null;
    } else {
      tmp_2 = TextDirection__hashCode_impl_g63nwg(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_2;
    result = tmp_1 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.lineHeight_1) | 0;
    var tmp_4 = imul(31, result);
    var tmp4_safe_receiver = this.textIndent_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_4 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_5 = imul(31, result);
    var tmp6_safe_receiver = this.platformStyle_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.hashCode();
    result = tmp_5 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_6 = imul(31, result);
    var tmp8_safe_receiver = this.lineHeightStyle_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.hashCode();
    result = tmp_6 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    var tmp_7 = imul(31, result);
    var tmp10_safe_receiver = this.lineBreak_1;
    var tmp11_elvis_lhs = tmp10_safe_receiver == null ? null : hashCode(tmp10_safe_receiver);
    result = tmp_7 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    var tmp_8 = imul(31, result);
    var tmp12_safe_receiver = this.hyphens_1;
    var tmp13_elvis_lhs = tmp12_safe_receiver == null ? null : hashCode(tmp12_safe_receiver);
    result = tmp_8 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    return result;
  };
  ParagraphStyle_0.prototype.toString = function () {
    var tmp = this.textAlign_1;
    var tmp_0 = 'ParagraphStyle(' + ('textAlign=' + (tmp == null ? null : new TextAlign(tmp)) + ', ');
    var tmp_1 = this.textDirection_1;
    return tmp_0 + ('textDirection=' + (tmp_1 == null ? null : new TextDirection(tmp_1)) + ', ') + ('lineHeight=' + new TextUnit(this.lineHeight_1) + ', ') + ('textIndent=' + this.textIndent_1 + ', ') + ('platformStyle=' + this.platformStyle_1 + ', ') + ('lineHeightStyle=' + this.lineHeightStyle_1 + ', ') + ('lineBreak=' + this.lineBreak_1 + ', ') + ('hyphens=' + this.hyphens_1) + ')';
  };
  ParagraphStyle_0.$metadata$ = classMeta('ParagraphStyle');
  function resolveParagraphStyleDefaults(style, direction) {
    init_properties_ParagraphStyle_kt_l2iumv();
    var tmp0_elvis_lhs = style.textAlign_1;
    var tmp;
    var tmp_0 = tmp0_elvis_lhs;
    if ((tmp_0 == null ? null : new TextAlign(tmp_0)) == null) {
      tmp = Companion_getInstance_36().Start_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp_1 = tmp;
    var tmp_2 = resolveTextDirection_0(direction, style.textDirection_1);
    var tmp_3 = get_isUnspecified(style.lineHeight_1) ? get_DefaultLineHeight() : style.lineHeight_1;
    var tmp1_elvis_lhs = style.textIndent_1;
    var tmp_4 = tmp1_elvis_lhs == null ? Companion_getInstance_41().None_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = style.lineBreak_1;
    var tmp_5 = tmp2_elvis_lhs == null ? Companion_getInstance_46().Simple_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = style.hyphens_1;
    return new ParagraphStyle_0(tmp_1, tmp_2, tmp_3, tmp_4, style.platformStyle_1, style.lineHeightStyle_1, tmp_5, tmp3_elvis_lhs == null ? Companion_getInstance_32().None_1 : tmp3_elvis_lhs);
  }
  var properties_initialized_ParagraphStyle_kt_y6w405;
  function init_properties_ParagraphStyle_kt_l2iumv() {
    if (properties_initialized_ParagraphStyle_kt_y6w405) {
    } else {
      properties_initialized_ParagraphStyle_kt_y6w405 = true;
      DefaultLineHeight = Companion_getInstance_0().Unspecified_1;
    }
  }
  function Placeholder(width, height, placeholderVerticalAlign) {
    this.width_1 = width;
    this.height_1 = height;
    this.placeholderVerticalAlign_1 = placeholderVerticalAlign;
    // Inline function 'kotlin.require' call
    var tmp0_require = !get_isUnspecified(this.width_1);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.Placeholder.<anonymous>' call
      tmp$ret$0 = 'width cannot be TextUnit.Unspecified';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = !get_isUnspecified(this.height_1);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.text.Placeholder.<anonymous>' call
      tmp$ret$1 = 'height cannot be TextUnit.Unspecified';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  Placeholder.prototype.get_width_832krh_k$ = function () {
    return this.width_1;
  };
  Placeholder.prototype.get_height_owlek0_k$ = function () {
    return this.height_1;
  };
  Placeholder.prototype.get_placeholderVerticalAlign_amg7on_k$ = function () {
    return this.placeholderVerticalAlign_1;
  };
  Placeholder.prototype.copy_1mnfs0_k$ = function (width, height, placeholderVerticalAlign) {
    return new Placeholder(width, height, placeholderVerticalAlign);
  };
  Placeholder.prototype.copy$default_2abday_k$ = function (width, height, placeholderVerticalAlign, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      width = this.width_1;
    if (!(($mask0 & 2) === 0))
      height = this.height_1;
    if (!(($mask0 & 4) === 0))
      placeholderVerticalAlign = this.placeholderVerticalAlign_1;
    return this.copy_1mnfs0_k$(width, height, placeholderVerticalAlign);
  };
  Placeholder.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Placeholder))
      return false;
    if (!equals(this.width_1, other.width_1))
      return false;
    if (!equals(this.height_1, other.height_1))
      return false;
    if (!(this.placeholderVerticalAlign_1 === other.placeholderVerticalAlign_1))
      return false;
    return true;
  };
  Placeholder.prototype.hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.width_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.height_1) | 0;
    result = imul(31, result) + PlaceholderVerticalAlign__hashCode_impl_1c0k16(this.placeholderVerticalAlign_1) | 0;
    return result;
  };
  Placeholder.prototype.toString = function () {
    return 'Placeholder(' + ('width=' + new TextUnit(this.width_1) + ', ') + ('height=' + new TextUnit(this.height_1) + ', ') + ('placeholderVerticalAlign=' + new PlaceholderVerticalAlign(this.placeholderVerticalAlign_1)) + ')';
  };
  Placeholder.$metadata$ = classMeta('Placeholder');
  function _PlaceholderVerticalAlign___init__impl__mll0or(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function PlaceholderVerticalAlign__toString_impl_kf5crp($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_9().AboveBaseline_1 ? 'AboveBaseline' : tmp0_subject === Companion_getInstance_9().Top_1 ? 'Top' : tmp0_subject === Companion_getInstance_9().Bottom_1 ? 'Bottom' : tmp0_subject === Companion_getInstance_9().Center_1 ? 'Center' : tmp0_subject === Companion_getInstance_9().TextTop_1 ? 'TextTop' : tmp0_subject === Companion_getInstance_9().TextBottom_1 ? 'TextBottom' : tmp0_subject === Companion_getInstance_9().TextCenter_1 ? 'TextCenter' : 'Invalid';
  }
  function Companion() {
    Companion_instance = this;
    this.AboveBaseline_1 = _PlaceholderVerticalAlign___init__impl__mll0or(1);
    this.Top_1 = _PlaceholderVerticalAlign___init__impl__mll0or(2);
    this.Bottom_1 = _PlaceholderVerticalAlign___init__impl__mll0or(3);
    this.Center_1 = _PlaceholderVerticalAlign___init__impl__mll0or(4);
    this.TextTop_1 = _PlaceholderVerticalAlign___init__impl__mll0or(5);
    this.TextBottom_1 = _PlaceholderVerticalAlign___init__impl__mll0or(6);
    this.TextCenter_1 = _PlaceholderVerticalAlign___init__impl__mll0or(7);
  }
  Companion.prototype.get_AboveBaseline_fxmzdx_k$ = function () {
    return this.AboveBaseline_1;
  };
  Companion.prototype.get_Top_qulelq_k$ = function () {
    return this.Top_1;
  };
  Companion.prototype.get_Bottom_kiigty_k$ = function () {
    return this.Bottom_1;
  };
  Companion.prototype.get_Center_89tqw0_k$ = function () {
    return this.Center_1;
  };
  Companion.prototype.get_TextTop_8n8utb_k$ = function () {
    return this.TextTop_1;
  };
  Companion.prototype.get_TextBottom_9104cj_k$ = function () {
    return this.TextBottom_1;
  };
  Companion.prototype.get_TextCenter_37ollf_k$ = function () {
    return this.TextCenter_1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_9() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function PlaceholderVerticalAlign__hashCode_impl_1c0k16($this) {
    return $this;
  }
  function PlaceholderVerticalAlign__equals_impl_e3pkzy($this, other) {
    if (!(other instanceof PlaceholderVerticalAlign))
      return false;
    var tmp0_other_with_cast = other instanceof PlaceholderVerticalAlign ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function PlaceholderVerticalAlign(value) {
    Companion_getInstance_9();
    this.value_1 = value;
  }
  PlaceholderVerticalAlign.prototype.toString = function () {
    return PlaceholderVerticalAlign__toString_impl_kf5crp(this.value_1);
  };
  PlaceholderVerticalAlign.prototype.hashCode = function () {
    return PlaceholderVerticalAlign__hashCode_impl_1c0k16(this.value_1);
  };
  PlaceholderVerticalAlign.prototype.equals = function (other) {
    return PlaceholderVerticalAlign__equals_impl_e3pkzy(this.value_1, other);
  };
  PlaceholderVerticalAlign.$metadata$ = classMeta('PlaceholderVerticalAlign');
  function get_AnnotatedStringSaver() {
    init_properties_Savers_kt_4dapzw();
    return AnnotatedStringSaver;
  }
  var AnnotatedStringSaver;
  function get_AnnotationRangeListSaver() {
    init_properties_Savers_kt_4dapzw();
    return AnnotationRangeListSaver;
  }
  var AnnotationRangeListSaver;
  function get_AnnotationRangeSaver() {
    init_properties_Savers_kt_4dapzw();
    return AnnotationRangeSaver;
  }
  var AnnotationRangeSaver;
  function get_VerbatimTtsAnnotationSaver() {
    init_properties_Savers_kt_4dapzw();
    return VerbatimTtsAnnotationSaver;
  }
  var VerbatimTtsAnnotationSaver;
  function get_UrlAnnotationSaver() {
    init_properties_Savers_kt_4dapzw();
    return UrlAnnotationSaver;
  }
  var UrlAnnotationSaver;
  function get_ParagraphStyleSaver() {
    init_properties_Savers_kt_4dapzw();
    return ParagraphStyleSaver;
  }
  var ParagraphStyleSaver;
  function get_SpanStyleSaver() {
    init_properties_Savers_kt_4dapzw();
    return SpanStyleSaver;
  }
  var SpanStyleSaver;
  function get_TextDecorationSaver() {
    init_properties_Savers_kt_4dapzw();
    return TextDecorationSaver;
  }
  var TextDecorationSaver;
  function get_TextGeometricTransformSaver() {
    init_properties_Savers_kt_4dapzw();
    return TextGeometricTransformSaver;
  }
  var TextGeometricTransformSaver;
  function get_TextIndentSaver() {
    init_properties_Savers_kt_4dapzw();
    return TextIndentSaver;
  }
  var TextIndentSaver;
  function get_FontWeightSaver() {
    init_properties_Savers_kt_4dapzw();
    return FontWeightSaver;
  }
  var FontWeightSaver;
  function get_BaselineShiftSaver() {
    init_properties_Savers_kt_4dapzw();
    return BaselineShiftSaver;
  }
  var BaselineShiftSaver;
  function get_TextRangeSaver() {
    init_properties_Savers_kt_4dapzw();
    return TextRangeSaver;
  }
  var TextRangeSaver;
  function get_ShadowSaver() {
    init_properties_Savers_kt_4dapzw();
    return ShadowSaver;
  }
  var ShadowSaver;
  function get_ColorSaver() {
    init_properties_Savers_kt_4dapzw();
    return ColorSaver;
  }
  var ColorSaver;
  function get_TextUnitSaver() {
    init_properties_Savers_kt_4dapzw();
    return TextUnitSaver;
  }
  var TextUnitSaver;
  function get_OffsetSaver() {
    init_properties_Savers_kt_4dapzw();
    return OffsetSaver;
  }
  var OffsetSaver;
  function get_LocaleListSaver() {
    init_properties_Savers_kt_4dapzw();
    return LocaleListSaver;
  }
  var LocaleListSaver;
  function get_LocaleSaver() {
    init_properties_Savers_kt_4dapzw();
    return LocaleSaver;
  }
  var LocaleSaver;
  function save(value) {
    init_properties_Savers_kt_4dapzw();
    return value;
  }
  function save_0(value, saver, scope) {
    init_properties_Savers_kt_4dapzw();
    var tmp0_safe_receiver = value;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.text.save.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.save.<anonymous>.<anonymous>' call
      tmp$ret$0 = saver.save_ef702r_k$(scope, value);
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      tmp = tmp$ret$3;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  var AnnotationType_Paragraph_instance;
  var AnnotationType_Span_instance;
  var AnnotationType_VerbatimTts_instance;
  var AnnotationType_Url_instance;
  var AnnotationType_String_instance;
  function values() {
    return [AnnotationType_Paragraph_getInstance(), AnnotationType_Span_getInstance(), AnnotationType_VerbatimTts_getInstance(), AnnotationType_Url_getInstance(), AnnotationType_String_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Paragraph':
        return AnnotationType_Paragraph_getInstance();
      case 'Span':
        return AnnotationType_Span_getInstance();
      case 'VerbatimTts':
        return AnnotationType_VerbatimTts_getInstance();
      case 'Url':
        return AnnotationType_Url_getInstance();
      case 'String':
        return AnnotationType_String_getInstance();
      default:
        AnnotationType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var AnnotationType_entriesInitialized;
  function AnnotationType_initEntries() {
    if (AnnotationType_entriesInitialized)
      return Unit_getInstance();
    AnnotationType_entriesInitialized = true;
    AnnotationType_Paragraph_instance = new AnnotationType('Paragraph', 0);
    AnnotationType_Span_instance = new AnnotationType('Span', 1);
    AnnotationType_VerbatimTts_instance = new AnnotationType('VerbatimTts', 2);
    AnnotationType_Url_instance = new AnnotationType('Url', 3);
    AnnotationType_String_instance = new AnnotationType('String', 4);
  }
  function AnnotationType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  AnnotationType.$metadata$ = classMeta('AnnotationType', undefined, undefined, undefined, undefined, Enum.prototype);
  function get_Saver(_this__u8e3s4) {
    init_properties_Savers_kt_4dapzw();
    return get_TextUnitSaver();
  }
  function get_Saver_0(_this__u8e3s4) {
    init_properties_Savers_kt_4dapzw();
    return get_TextIndentSaver();
  }
  function get_Saver_1(_this__u8e3s4) {
    init_properties_Savers_kt_4dapzw();
    return get_ColorSaver();
  }
  function get_Saver_2(_this__u8e3s4) {
    init_properties_Savers_kt_4dapzw();
    return get_FontWeightSaver();
  }
  function get_Saver_3(_this__u8e3s4) {
    init_properties_Savers_kt_4dapzw();
    return get_BaselineShiftSaver();
  }
  function get_Saver_4(_this__u8e3s4) {
    init_properties_Savers_kt_4dapzw();
    return get_TextGeometricTransformSaver();
  }
  function get_Saver_5(_this__u8e3s4) {
    init_properties_Savers_kt_4dapzw();
    return get_LocaleListSaver();
  }
  function get_Saver_6(_this__u8e3s4) {
    init_properties_Savers_kt_4dapzw();
    return get_TextDecorationSaver();
  }
  function get_Saver_7(_this__u8e3s4) {
    init_properties_Savers_kt_4dapzw();
    return get_ShadowSaver();
  }
  function get_Saver_8(_this__u8e3s4) {
    init_properties_Savers_kt_4dapzw();
    return get_OffsetSaver();
  }
  function get_Saver_9(_this__u8e3s4) {
    init_properties_Savers_kt_4dapzw();
    return get_LocaleSaver();
  }
  function get_Saver_10(_this__u8e3s4) {
    init_properties_Savers_kt_4dapzw();
    return get_TextRangeSaver();
  }
  function AnnotatedStringSaver$lambda($this$Saver, it) {
    init_properties_Savers_kt_4dapzw();
    return arrayListOf([save(it.text_1), save_0(it.spanStyles_1, get_AnnotationRangeListSaver(), $this$Saver), save_0(it.paragraphStyles_1, get_AnnotationRangeListSaver(), $this$Saver), save_0(it.annotations_1, get_AnnotationRangeListSaver(), $this$Saver)]);
  }
  function AnnotatedStringSaver$lambda_0(it) {
    init_properties_Savers_kt_4dapzw();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_restore = list.get_fkrdnv_k$(0);
    var tmp0_safe_receiver = tmp0_restore;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp$ret$0 = (tmp0_safe_receiver == null ? true : typeof tmp0_safe_receiver === 'string') ? tmp0_safe_receiver : THROW_CCE();
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    var tmp_0 = ensureNotNull(tmp$ret$2);
    var tmp$ret$3;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp1_restore = list.get_fkrdnv_k$(1);
      var tmp2_restore = get_AnnotationRangeListSaver();
      if (equals(tmp1_restore, false)) {
        tmp$ret$3 = null;
        break $l$block;
      }
      var tmp0_safe_receiver_0 = tmp1_restore;
      var tmp_1;
      if (tmp0_safe_receiver_0 == null) {
        tmp_1 = null;
      } else {
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        var tmp$ret$5;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$4;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        tmp$ret$4 = tmp2_restore.restore_uzeo8_k$(tmp1_restore);
        tmp$ret$5 = tmp$ret$4;
        var tmp_2 = tmp$ret$5;
        tmp$ret$6 = (tmp_2 == null ? true : isInterface(tmp_2, List)) ? tmp_2 : THROW_CCE();
        tmp$ret$7 = tmp$ret$6;
        tmp_1 = tmp$ret$7;
      }
      tmp$ret$3 = tmp_1;
    }
    var tmp_3 = ensureNotNull(tmp$ret$3);
    var tmp$ret$8;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp3_restore = list.get_fkrdnv_k$(2);
      var tmp4_restore = get_AnnotationRangeListSaver();
      if (equals(tmp3_restore, false)) {
        tmp$ret$8 = null;
        break $l$block_0;
      }
      var tmp0_safe_receiver_1 = tmp3_restore;
      var tmp_4;
      if (tmp0_safe_receiver_1 == null) {
        tmp_4 = null;
      } else {
        var tmp$ret$12;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        var tmp$ret$10;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$9;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        tmp$ret$9 = tmp4_restore.restore_uzeo8_k$(tmp3_restore);
        tmp$ret$10 = tmp$ret$9;
        var tmp_5 = tmp$ret$10;
        tmp$ret$11 = (tmp_5 == null ? true : isInterface(tmp_5, List)) ? tmp_5 : THROW_CCE();
        tmp$ret$12 = tmp$ret$11;
        tmp_4 = tmp$ret$12;
      }
      tmp$ret$8 = tmp_4;
    }
    var tmp_6 = ensureNotNull(tmp$ret$8);
    var tmp$ret$13;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp5_restore = list.get_fkrdnv_k$(3);
      var tmp6_restore = get_AnnotationRangeListSaver();
      if (equals(tmp5_restore, false)) {
        tmp$ret$13 = null;
        break $l$block_1;
      }
      var tmp0_safe_receiver_2 = tmp5_restore;
      var tmp_7;
      if (tmp0_safe_receiver_2 == null) {
        tmp_7 = null;
      } else {
        var tmp$ret$17;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$16;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        var tmp$ret$15;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$14;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        tmp$ret$14 = tmp6_restore.restore_uzeo8_k$(tmp5_restore);
        tmp$ret$15 = tmp$ret$14;
        var tmp_8 = tmp$ret$15;
        tmp$ret$16 = (tmp_8 == null ? true : isInterface(tmp_8, List)) ? tmp_8 : THROW_CCE();
        tmp$ret$17 = tmp$ret$16;
        tmp_7 = tmp$ret$17;
      }
      tmp$ret$13 = tmp_7;
    }
    return new AnnotatedString(tmp_0, tmp_3, tmp_6, ensureNotNull(tmp$ret$13));
  }
  function AnnotationRangeListSaver$lambda($this$Saver, it) {
    init_properties_Savers_kt_4dapzw();
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(it.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = it.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = it.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.AnnotationRangeListSaver.<anonymous>.<anonymous>' call
        tmp$ret$0 = save_0(item, get_AnnotationRangeSaver(), $this$Saver);
        var tmp0_plusAssign = tmp$ret$0;
        target.add_1j60pz_k$(tmp0_plusAssign);
      }
       while (inductionVariable <= last);
    tmp$ret$1 = target;
    return tmp$ret$1;
  }
  function AnnotationRangeListSaver$lambda_0(it) {
    init_properties_Savers_kt_4dapzw();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(list.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = list.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = list.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.ui.text.AnnotationRangeListSaver.<anonymous>.<anonymous>' call
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp0_restore = get_AnnotationRangeSaver();
          if (equals(item, false)) {
            tmp$ret$0 = null;
            break $l$block;
          }
          var tmp0_safe_receiver = item;
          var tmp;
          if (tmp0_safe_receiver == null) {
            tmp = null;
          } else {
            var tmp$ret$4;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$3;
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            var tmp$ret$2;
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$1;
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            tmp$ret$1 = tmp0_restore.restore_uzeo8_k$(item);
            tmp$ret$2 = tmp$ret$1;
            var tmp_0 = tmp$ret$2;
            tmp$ret$3 = (tmp_0 == null ? true : tmp_0 instanceof Range) ? tmp_0 : THROW_CCE();
            tmp$ret$4 = tmp$ret$3;
            tmp = tmp$ret$4;
          }
          tmp$ret$0 = tmp;
        }
        var range = ensureNotNull(tmp$ret$0);
        tmp$ret$5 = range;
        var tmp0_plusAssign = tmp$ret$5;
        target.add_1j60pz_k$(tmp0_plusAssign);
      }
       while (inductionVariable <= last);
    tmp$ret$6 = target;
    return tmp$ret$6;
  }
  function AnnotationRangeSaver$lambda($this$Saver, it) {
    init_properties_Savers_kt_4dapzw();
    var tmp0_subject = it.item_1;
    var tmp;
    if (tmp0_subject instanceof ParagraphStyle_0) {
      tmp = AnnotationType_Paragraph_getInstance();
    } else {
      if (tmp0_subject instanceof SpanStyle) {
        tmp = AnnotationType_Span_getInstance();
      } else {
        if (tmp0_subject instanceof VerbatimTtsAnnotation) {
          tmp = AnnotationType_VerbatimTts_getInstance();
        } else {
          if (tmp0_subject instanceof UrlAnnotation) {
            tmp = AnnotationType_Url_getInstance();
          } else {
            tmp = AnnotationType_String_getInstance();
          }
        }
      }
    }
    var marker = tmp;
    var tmp1_subject = marker;
    var tmp0 = tmp1_subject.ordinal_1;
    var tmp_0;
    switch (tmp0) {
      case 0:
        var tmp_1 = it.item_1;
        tmp_0 = save_0(tmp_1 instanceof ParagraphStyle_0 ? tmp_1 : THROW_CCE(), get_ParagraphStyleSaver(), $this$Saver);
        break;
      case 1:
        var tmp_2 = it.item_1;
        tmp_0 = save_0(tmp_2 instanceof SpanStyle ? tmp_2 : THROW_CCE(), get_SpanStyleSaver(), $this$Saver);
        break;
      case 2:
        var tmp_3 = it.item_1;
        tmp_0 = save_0(tmp_3 instanceof VerbatimTtsAnnotation ? tmp_3 : THROW_CCE(), get_VerbatimTtsAnnotationSaver(), $this$Saver);
        break;
      case 3:
        var tmp_4 = it.item_1;
        tmp_0 = save_0(tmp_4 instanceof UrlAnnotation ? tmp_4 : THROW_CCE(), get_UrlAnnotationSaver(), $this$Saver);
        break;
      case 4:
        tmp_0 = save(it.item_1);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var item = tmp_0;
    return arrayListOf([save(marker), item, save(it.start_1), save(it.end_1), save(it.tag_1)]);
  }
  function AnnotationRangeSaver$lambda_0(it) {
    init_properties_Savers_kt_4dapzw();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_restore = list.get_fkrdnv_k$(0);
    var tmp0_safe_receiver = tmp0_restore;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp$ret$0 = (tmp0_safe_receiver == null ? true : tmp0_safe_receiver instanceof AnnotationType) ? tmp0_safe_receiver : THROW_CCE();
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    var marker = ensureNotNull(tmp$ret$2);
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp1_restore = list.get_fkrdnv_k$(2);
    var tmp0_safe_receiver_0 = tmp1_restore;
    var tmp_0;
    if (tmp0_safe_receiver_0 == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp$ret$3 = (tmp0_safe_receiver_0 == null ? true : typeof tmp0_safe_receiver_0 === 'number') ? tmp0_safe_receiver_0 : THROW_CCE();
      tmp$ret$4 = tmp$ret$3;
      tmp_0 = tmp$ret$4;
    }
    tmp$ret$5 = tmp_0;
    var start = ensureNotNull(tmp$ret$5);
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp2_restore = list.get_fkrdnv_k$(3);
    var tmp0_safe_receiver_1 = tmp2_restore;
    var tmp_1;
    if (tmp0_safe_receiver_1 == null) {
      tmp_1 = null;
    } else {
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp$ret$6 = (tmp0_safe_receiver_1 == null ? true : typeof tmp0_safe_receiver_1 === 'number') ? tmp0_safe_receiver_1 : THROW_CCE();
      tmp$ret$7 = tmp$ret$6;
      tmp_1 = tmp$ret$7;
    }
    tmp$ret$8 = tmp_1;
    var end = ensureNotNull(tmp$ret$8);
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp3_restore = list.get_fkrdnv_k$(4);
    var tmp0_safe_receiver_2 = tmp3_restore;
    var tmp_2;
    if (tmp0_safe_receiver_2 == null) {
      tmp_2 = null;
    } else {
      var tmp$ret$10;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp$ret$9 = (tmp0_safe_receiver_2 == null ? true : typeof tmp0_safe_receiver_2 === 'string') ? tmp0_safe_receiver_2 : THROW_CCE();
      tmp$ret$10 = tmp$ret$9;
      tmp_2 = tmp$ret$10;
    }
    tmp$ret$11 = tmp_2;
    var tag = ensureNotNull(tmp$ret$11);
    var tmp0_subject = marker;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp_3;
    switch (tmp0) {
      case 0:
        var tmp$ret$12;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp4_restore = list.get_fkrdnv_k$(1);
          var tmp5_restore = get_ParagraphStyleSaver();
          if (equals(tmp4_restore, false)) {
            tmp$ret$12 = null;
            break $l$block;
          }
          var tmp0_safe_receiver_3 = tmp4_restore;
          var tmp_4;
          if (tmp0_safe_receiver_3 == null) {
            tmp_4 = null;
          } else {
            var tmp$ret$16;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$15;
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            var tmp$ret$14;
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$13;
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            tmp$ret$13 = tmp5_restore.restore_uzeo8_k$(tmp4_restore);
            tmp$ret$14 = tmp$ret$13;
            var tmp_5 = tmp$ret$14;
            tmp$ret$15 = (tmp_5 == null ? true : tmp_5 instanceof ParagraphStyle_0) ? tmp_5 : THROW_CCE();
            tmp$ret$16 = tmp$ret$15;
            tmp_4 = tmp$ret$16;
          }
          tmp$ret$12 = tmp_4;
        }

        var item = ensureNotNull(tmp$ret$12);
        tmp_3 = new Range(item, start, end, tag);
        break;
      case 1:
        var tmp$ret$17;
        $l$block_0: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp6_restore = list.get_fkrdnv_k$(1);
          var tmp7_restore = get_SpanStyleSaver();
          if (equals(tmp6_restore, false)) {
            tmp$ret$17 = null;
            break $l$block_0;
          }
          var tmp0_safe_receiver_4 = tmp6_restore;
          var tmp_6;
          if (tmp0_safe_receiver_4 == null) {
            tmp_6 = null;
          } else {
            var tmp$ret$21;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$20;
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            var tmp$ret$19;
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$18;
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            tmp$ret$18 = tmp7_restore.restore_uzeo8_k$(tmp6_restore);
            tmp$ret$19 = tmp$ret$18;
            var tmp_7 = tmp$ret$19;
            tmp$ret$20 = (tmp_7 == null ? true : tmp_7 instanceof SpanStyle) ? tmp_7 : THROW_CCE();
            tmp$ret$21 = tmp$ret$20;
            tmp_6 = tmp$ret$21;
          }
          tmp$ret$17 = tmp_6;
        }

        var item_0 = ensureNotNull(tmp$ret$17);
        tmp_3 = new Range(item_0, start, end, tag);
        break;
      case 2:
        var tmp$ret$22;
        $l$block_1: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp8_restore = list.get_fkrdnv_k$(1);
          var tmp9_restore = get_VerbatimTtsAnnotationSaver();
          if (equals(tmp8_restore, false)) {
            tmp$ret$22 = null;
            break $l$block_1;
          }
          var tmp0_safe_receiver_5 = tmp8_restore;
          var tmp_8;
          if (tmp0_safe_receiver_5 == null) {
            tmp_8 = null;
          } else {
            var tmp$ret$26;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$25;
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            var tmp$ret$24;
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$23;
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            tmp$ret$23 = tmp9_restore.restore_uzeo8_k$(tmp8_restore);
            tmp$ret$24 = tmp$ret$23;
            var tmp_9 = tmp$ret$24;
            tmp$ret$25 = (tmp_9 == null ? true : tmp_9 instanceof VerbatimTtsAnnotation) ? tmp_9 : THROW_CCE();
            tmp$ret$26 = tmp$ret$25;
            tmp_8 = tmp$ret$26;
          }
          tmp$ret$22 = tmp_8;
        }

        var item_1 = ensureNotNull(tmp$ret$22);
        tmp_3 = new Range(item_1, start, end, tag);
        break;
      case 3:
        var tmp$ret$27;
        $l$block_2: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp10_restore = list.get_fkrdnv_k$(1);
          var tmp11_restore = get_UrlAnnotationSaver();
          if (equals(tmp10_restore, false)) {
            tmp$ret$27 = null;
            break $l$block_2;
          }
          var tmp0_safe_receiver_6 = tmp10_restore;
          var tmp_10;
          if (tmp0_safe_receiver_6 == null) {
            tmp_10 = null;
          } else {
            var tmp$ret$31;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$30;
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            var tmp$ret$29;
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$28;
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            tmp$ret$28 = tmp11_restore.restore_uzeo8_k$(tmp10_restore);
            tmp$ret$29 = tmp$ret$28;
            var tmp_11 = tmp$ret$29;
            tmp$ret$30 = (tmp_11 == null ? true : tmp_11 instanceof UrlAnnotation) ? tmp_11 : THROW_CCE();
            tmp$ret$31 = tmp$ret$30;
            tmp_10 = tmp$ret$31;
          }
          tmp$ret$27 = tmp_10;
        }

        var item_2 = ensureNotNull(tmp$ret$27);
        tmp_3 = new Range(item_2, start, end, tag);
        break;
      case 4:
        var tmp$ret$34;
        // Inline function 'androidx.compose.ui.text.restore' call
        var tmp12_restore = list.get_fkrdnv_k$(1);
        var tmp0_safe_receiver_7 = tmp12_restore;
        var tmp_12;
        if (tmp0_safe_receiver_7 == null) {
          tmp_12 = null;
        } else {
          var tmp$ret$33;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$32;
          // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
          tmp$ret$32 = (tmp0_safe_receiver_7 == null ? true : typeof tmp0_safe_receiver_7 === 'string') ? tmp0_safe_receiver_7 : THROW_CCE();
          tmp$ret$33 = tmp$ret$32;
          tmp_12 = tmp$ret$33;
        }
        tmp$ret$34 = tmp_12;

        var item_3 = ensureNotNull(tmp$ret$34);
        tmp_3 = new Range(item_3, start, end, tag);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_3;
  }
  function VerbatimTtsAnnotationSaver$lambda($this$Saver, it) {
    init_properties_Savers_kt_4dapzw();
    return save(it.verbatim_1);
  }
  function VerbatimTtsAnnotationSaver$lambda_0(it) {
    init_properties_Savers_kt_4dapzw();
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = it;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp$ret$0 = (tmp0_safe_receiver == null ? true : typeof tmp0_safe_receiver === 'string') ? tmp0_safe_receiver : THROW_CCE();
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    return new VerbatimTtsAnnotation(ensureNotNull(tmp$ret$2));
  }
  function UrlAnnotationSaver$lambda($this$Saver, it) {
    init_properties_Savers_kt_4dapzw();
    return save(it.url_1);
  }
  function UrlAnnotationSaver$lambda_0(it) {
    init_properties_Savers_kt_4dapzw();
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = it;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp$ret$0 = (tmp0_safe_receiver == null ? true : typeof tmp0_safe_receiver === 'string') ? tmp0_safe_receiver : THROW_CCE();
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    return new UrlAnnotation(ensureNotNull(tmp$ret$2));
  }
  function ParagraphStyleSaver$lambda($this$Saver, it) {
    init_properties_Savers_kt_4dapzw();
    var tmp = it.textAlign_1;
    var tmp_0 = save(tmp == null ? null : new TextAlign(tmp));
    var tmp_1 = it.textDirection_1;
    return arrayListOf([tmp_0, save(tmp_1 == null ? null : new TextDirection(tmp_1)), save_0(new TextUnit(it.lineHeight_1), get_Saver(Companion_getInstance_0()), $this$Saver), save_0(it.textIndent_1, get_Saver_0(Companion_getInstance_41()), $this$Saver)]);
  }
  function ParagraphStyleSaver$lambda_0(it) {
    init_properties_Savers_kt_4dapzw();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_restore = list.get_fkrdnv_k$(0);
    var tmp0_safe_receiver = tmp0_restore;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      var tmp_0;
      if (tmp0_safe_receiver == null ? true : tmp0_safe_receiver instanceof TextAlign) {
        var tmp_1 = tmp0_safe_receiver;
        tmp_0 = tmp_1 == null ? null : tmp_1.value_1;
      } else {
        tmp_0 = THROW_CCE();
      }
      tmp$ret$0 = tmp_0;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    var tmp_2 = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp1_restore = list.get_fkrdnv_k$(1);
    var tmp0_safe_receiver_0 = tmp1_restore;
    var tmp_3;
    if (tmp0_safe_receiver_0 == null) {
      tmp_3 = null;
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      var tmp_4;
      if (tmp0_safe_receiver_0 == null ? true : tmp0_safe_receiver_0 instanceof TextDirection) {
        var tmp_5 = tmp0_safe_receiver_0;
        tmp_4 = tmp_5 == null ? null : tmp_5.value_1;
      } else {
        tmp_4 = THROW_CCE();
      }
      tmp$ret$3 = tmp_4;
      tmp$ret$4 = tmp$ret$3;
      tmp_3 = tmp$ret$4;
    }
    tmp$ret$5 = tmp_3;
    var tmp_6 = tmp$ret$5;
    var tmp$ret$6;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp2_restore = list.get_fkrdnv_k$(2);
      var tmp3_restore = get_Saver(Companion_getInstance_0());
      if (equals(tmp2_restore, false)) {
        tmp$ret$6 = null;
        break $l$block;
      }
      var tmp0_safe_receiver_1 = tmp2_restore;
      var tmp_7;
      if (tmp0_safe_receiver_1 == null) {
        tmp_7 = null;
      } else {
        var tmp$ret$10;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$9;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        var tmp$ret$8;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$7;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_8 = tmp3_restore.restore_uzeo8_k$(tmp2_restore);
        tmp$ret$7 = tmp_8 == null ? null : tmp_8.packedValue_1;
        tmp$ret$8 = tmp$ret$7;
        var tmp_9 = tmp$ret$8;
        var tmp_10;
        var tmp_11;
        var tmp_12 = tmp_9;
        if ((tmp_12 == null ? null : new TextUnit(tmp_12)) == null) {
          tmp_11 = true;
        } else {
          var tmp_13 = tmp_9;
          tmp_11 = (tmp_13 == null ? null : new TextUnit(tmp_13))instanceof TextUnit;
        }
        if (tmp_11) {
          tmp_10 = tmp_9;
        } else {
          tmp_10 = THROW_CCE();
        }
        tmp$ret$9 = tmp_10;
        tmp$ret$10 = tmp$ret$9;
        tmp_7 = tmp$ret$10;
      }
      tmp$ret$6 = tmp_7;
    }
    var tmp_14 = tmp$ret$6;
    var tmp_15 = ensureNotNull(tmp_14 == null ? null : new TextUnit(tmp_14)).packedValue_1;
    var tmp$ret$11;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp4_restore = list.get_fkrdnv_k$(3);
      var tmp5_restore = get_Saver_0(Companion_getInstance_41());
      if (equals(tmp4_restore, false)) {
        tmp$ret$11 = null;
        break $l$block_0;
      }
      var tmp0_safe_receiver_2 = tmp4_restore;
      var tmp_16;
      if (tmp0_safe_receiver_2 == null) {
        tmp_16 = null;
      } else {
        var tmp$ret$15;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$14;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        var tmp$ret$13;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$12;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        tmp$ret$12 = tmp5_restore.restore_uzeo8_k$(tmp4_restore);
        tmp$ret$13 = tmp$ret$12;
        var tmp_17 = tmp$ret$13;
        tmp$ret$14 = (tmp_17 == null ? true : tmp_17 instanceof TextIndent_0) ? tmp_17 : THROW_CCE();
        tmp$ret$15 = tmp$ret$14;
        tmp_16 = tmp$ret$15;
      }
      tmp$ret$11 = tmp_16;
    }
    return ParagraphStyle_init_$Create$_0(tmp_2, tmp_6, tmp_15, tmp$ret$11);
  }
  function SpanStyleSaver$lambda($this$Saver, it) {
    init_properties_Savers_kt_4dapzw();
    var tmp = save_0(new Color(it.get_color_v34vrz_k$()), get_Saver_1(Companion_getInstance()), $this$Saver);
    var tmp_0 = save_0(new TextUnit(it.fontSize_1), get_Saver(Companion_getInstance_0()), $this$Saver);
    var tmp_1 = save_0(it.fontWeight_1, get_Saver_2(Companion_getInstance_20()), $this$Saver);
    var tmp_2 = it.fontStyle_1;
    var tmp_3 = save(tmp_2 == null ? null : new FontStyle(tmp_2));
    var tmp_4 = it.fontSynthesis_1;
    var tmp_5 = save(tmp_4 == null ? null : new FontSynthesis(tmp_4));
    var tmp_6 = save(-1);
    var tmp_7 = save(it.fontFeatureSettings_1);
    var tmp_8 = save_0(new TextUnit(it.letterSpacing_1), get_Saver(Companion_getInstance_0()), $this$Saver);
    var tmp_9 = it.baselineShift_1;
    return arrayListOf([tmp, tmp_0, tmp_1, tmp_3, tmp_5, tmp_6, tmp_7, tmp_8, save_0(tmp_9 == null ? null : new BaselineShift(tmp_9), get_Saver_3(Companion_getInstance_31()), $this$Saver), save_0(it.textGeometricTransform_1, get_Saver_4(Companion_getInstance_40()), $this$Saver), save_0(it.localeList_1, get_Saver_5(Companion_getInstance_30()), $this$Saver), save_0(new Color(it.background_1), get_Saver_1(Companion_getInstance()), $this$Saver), save_0(it.textDecoration_1, get_Saver_6(Companion_getInstance_37()), $this$Saver), save_0(it.shadow_1, get_Saver_7(Companion_getInstance_1()), $this$Saver)]);
  }
  function SpanStyleSaver$lambda_0(it) {
    init_properties_Savers_kt_4dapzw();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_restore = list.get_fkrdnv_k$(0);
      var tmp1_restore = get_Saver_1(Companion_getInstance());
      if (equals(tmp0_restore, false)) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp0_safe_receiver = tmp0_restore;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$4;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_0 = tmp1_restore.restore_uzeo8_k$(tmp0_restore);
        tmp$ret$1 = tmp_0 == null ? null : tmp_0.value_1;
        tmp$ret$2 = tmp$ret$1;
        var tmp_1 = tmp$ret$2;
        var tmp_2;
        var tmp_3;
        var tmp_4 = tmp_1;
        if ((tmp_4 == null ? null : new Color(tmp_4)) == null) {
          tmp_3 = true;
        } else {
          var tmp_5 = tmp_1;
          tmp_3 = (tmp_5 == null ? null : new Color(tmp_5))instanceof Color;
        }
        if (tmp_3) {
          tmp_2 = tmp_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        tmp$ret$3 = tmp_2;
        tmp$ret$4 = tmp$ret$3;
        tmp = tmp$ret$4;
      }
      tmp$ret$0 = tmp;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new Color(tmp_6)).value_1;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp2_restore = list.get_fkrdnv_k$(1);
      var tmp3_restore = get_Saver(Companion_getInstance_0());
      if (equals(tmp2_restore, false)) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp0_safe_receiver_0 = tmp2_restore;
      var tmp_8;
      if (tmp0_safe_receiver_0 == null) {
        tmp_8 = null;
      } else {
        var tmp$ret$9;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$8;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        var tmp$ret$7;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_9 = tmp3_restore.restore_uzeo8_k$(tmp2_restore);
        tmp$ret$6 = tmp_9 == null ? null : tmp_9.packedValue_1;
        tmp$ret$7 = tmp$ret$6;
        var tmp_10 = tmp$ret$7;
        var tmp_11;
        var tmp_12;
        var tmp_13 = tmp_10;
        if ((tmp_13 == null ? null : new TextUnit(tmp_13)) == null) {
          tmp_12 = true;
        } else {
          var tmp_14 = tmp_10;
          tmp_12 = (tmp_14 == null ? null : new TextUnit(tmp_14))instanceof TextUnit;
        }
        if (tmp_12) {
          tmp_11 = tmp_10;
        } else {
          tmp_11 = THROW_CCE();
        }
        tmp$ret$8 = tmp_11;
        tmp$ret$9 = tmp$ret$8;
        tmp_8 = tmp$ret$9;
      }
      tmp$ret$5 = tmp_8;
    }
    var tmp_15 = tmp$ret$5;
    var tmp_16 = ensureNotNull(tmp_15 == null ? null : new TextUnit(tmp_15)).packedValue_1;
    var tmp$ret$10;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp4_restore = list.get_fkrdnv_k$(2);
      var tmp5_restore = get_Saver_2(Companion_getInstance_20());
      if (equals(tmp4_restore, false)) {
        tmp$ret$10 = null;
        break $l$block_1;
      }
      var tmp0_safe_receiver_1 = tmp4_restore;
      var tmp_17;
      if (tmp0_safe_receiver_1 == null) {
        tmp_17 = null;
      } else {
        var tmp$ret$14;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$13;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        var tmp$ret$12;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        tmp$ret$11 = tmp5_restore.restore_uzeo8_k$(tmp4_restore);
        tmp$ret$12 = tmp$ret$11;
        var tmp_18 = tmp$ret$12;
        tmp$ret$13 = (tmp_18 == null ? true : tmp_18 instanceof FontWeight) ? tmp_18 : THROW_CCE();
        tmp$ret$14 = tmp$ret$13;
        tmp_17 = tmp$ret$14;
      }
      tmp$ret$10 = tmp_17;
    }
    var tmp_19 = tmp$ret$10;
    var tmp$ret$17;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp6_restore = list.get_fkrdnv_k$(3);
    var tmp0_safe_receiver_2 = tmp6_restore;
    var tmp_20;
    if (tmp0_safe_receiver_2 == null) {
      tmp_20 = null;
    } else {
      var tmp$ret$16;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$15;
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      var tmp_21;
      if (tmp0_safe_receiver_2 == null ? true : tmp0_safe_receiver_2 instanceof FontStyle) {
        var tmp_22 = tmp0_safe_receiver_2;
        tmp_21 = tmp_22 == null ? null : tmp_22.value_1;
      } else {
        tmp_21 = THROW_CCE();
      }
      tmp$ret$15 = tmp_21;
      tmp$ret$16 = tmp$ret$15;
      tmp_20 = tmp$ret$16;
    }
    tmp$ret$17 = tmp_20;
    var tmp_23 = tmp$ret$17;
    var tmp$ret$20;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp7_restore = list.get_fkrdnv_k$(4);
    var tmp0_safe_receiver_3 = tmp7_restore;
    var tmp_24;
    if (tmp0_safe_receiver_3 == null) {
      tmp_24 = null;
    } else {
      var tmp$ret$19;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$18;
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      var tmp_25;
      if (tmp0_safe_receiver_3 == null ? true : tmp0_safe_receiver_3 instanceof FontSynthesis) {
        var tmp_26 = tmp0_safe_receiver_3;
        tmp_25 = tmp_26 == null ? null : tmp_26.value_1;
      } else {
        tmp_25 = THROW_CCE();
      }
      tmp$ret$18 = tmp_25;
      tmp$ret$19 = tmp$ret$18;
      tmp_24 = tmp$ret$19;
    }
    tmp$ret$20 = tmp_24;
    var tmp_27 = tmp$ret$20;
    var tmp$ret$23;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp8_restore = list.get_fkrdnv_k$(6);
    var tmp0_safe_receiver_4 = tmp8_restore;
    var tmp_28;
    if (tmp0_safe_receiver_4 == null) {
      tmp_28 = null;
    } else {
      var tmp$ret$22;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$21;
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp$ret$21 = (tmp0_safe_receiver_4 == null ? true : typeof tmp0_safe_receiver_4 === 'string') ? tmp0_safe_receiver_4 : THROW_CCE();
      tmp$ret$22 = tmp$ret$21;
      tmp_28 = tmp$ret$22;
    }
    tmp$ret$23 = tmp_28;
    var tmp_29 = tmp$ret$23;
    var tmp$ret$24;
    $l$block_2: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp9_restore = list.get_fkrdnv_k$(7);
      var tmp10_restore = get_Saver(Companion_getInstance_0());
      if (equals(tmp9_restore, false)) {
        tmp$ret$24 = null;
        break $l$block_2;
      }
      var tmp0_safe_receiver_5 = tmp9_restore;
      var tmp_30;
      if (tmp0_safe_receiver_5 == null) {
        tmp_30 = null;
      } else {
        var tmp$ret$28;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$27;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        var tmp$ret$26;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$25;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_31 = tmp10_restore.restore_uzeo8_k$(tmp9_restore);
        tmp$ret$25 = tmp_31 == null ? null : tmp_31.packedValue_1;
        tmp$ret$26 = tmp$ret$25;
        var tmp_32 = tmp$ret$26;
        var tmp_33;
        var tmp_34;
        var tmp_35 = tmp_32;
        if ((tmp_35 == null ? null : new TextUnit(tmp_35)) == null) {
          tmp_34 = true;
        } else {
          var tmp_36 = tmp_32;
          tmp_34 = (tmp_36 == null ? null : new TextUnit(tmp_36))instanceof TextUnit;
        }
        if (tmp_34) {
          tmp_33 = tmp_32;
        } else {
          tmp_33 = THROW_CCE();
        }
        tmp$ret$27 = tmp_33;
        tmp$ret$28 = tmp$ret$27;
        tmp_30 = tmp$ret$28;
      }
      tmp$ret$24 = tmp_30;
    }
    var tmp_37 = tmp$ret$24;
    var tmp_38 = ensureNotNull(tmp_37 == null ? null : new TextUnit(tmp_37)).packedValue_1;
    var tmp$ret$29;
    $l$block_3: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp11_restore = list.get_fkrdnv_k$(8);
      var tmp12_restore = get_Saver_3(Companion_getInstance_31());
      if (equals(tmp11_restore, false)) {
        tmp$ret$29 = null;
        break $l$block_3;
      }
      var tmp0_safe_receiver_6 = tmp11_restore;
      var tmp_39;
      if (tmp0_safe_receiver_6 == null) {
        tmp_39 = null;
      } else {
        var tmp$ret$33;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$32;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        var tmp$ret$31;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$30;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_40 = tmp12_restore.restore_uzeo8_k$(tmp11_restore);
        tmp$ret$30 = tmp_40 == null ? null : tmp_40.multiplier_1;
        tmp$ret$31 = tmp$ret$30;
        var tmp_41 = tmp$ret$31;
        var tmp_42;
        var tmp_43;
        var tmp_44 = tmp_41;
        if ((tmp_44 == null ? null : new BaselineShift(tmp_44)) == null) {
          tmp_43 = true;
        } else {
          var tmp_45 = tmp_41;
          tmp_43 = (tmp_45 == null ? null : new BaselineShift(tmp_45))instanceof BaselineShift;
        }
        if (tmp_43) {
          tmp_42 = tmp_41;
        } else {
          tmp_42 = THROW_CCE();
        }
        tmp$ret$32 = tmp_42;
        tmp$ret$33 = tmp$ret$32;
        tmp_39 = tmp$ret$33;
      }
      tmp$ret$29 = tmp_39;
    }
    var tmp_46 = tmp$ret$29;
    var tmp$ret$34;
    $l$block_4: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp13_restore = list.get_fkrdnv_k$(9);
      var tmp14_restore = get_Saver_4(Companion_getInstance_40());
      if (equals(tmp13_restore, false)) {
        tmp$ret$34 = null;
        break $l$block_4;
      }
      var tmp0_safe_receiver_7 = tmp13_restore;
      var tmp_47;
      if (tmp0_safe_receiver_7 == null) {
        tmp_47 = null;
      } else {
        var tmp$ret$38;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$37;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        var tmp$ret$36;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$35;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        tmp$ret$35 = tmp14_restore.restore_uzeo8_k$(tmp13_restore);
        tmp$ret$36 = tmp$ret$35;
        var tmp_48 = tmp$ret$36;
        tmp$ret$37 = (tmp_48 == null ? true : tmp_48 instanceof TextGeometricTransform) ? tmp_48 : THROW_CCE();
        tmp$ret$38 = tmp$ret$37;
        tmp_47 = tmp$ret$38;
      }
      tmp$ret$34 = tmp_47;
    }
    var tmp_49 = tmp$ret$34;
    var tmp$ret$39;
    $l$block_5: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp15_restore = list.get_fkrdnv_k$(10);
      var tmp16_restore = get_Saver_5(Companion_getInstance_30());
      if (equals(tmp15_restore, false)) {
        tmp$ret$39 = null;
        break $l$block_5;
      }
      var tmp0_safe_receiver_8 = tmp15_restore;
      var tmp_50;
      if (tmp0_safe_receiver_8 == null) {
        tmp_50 = null;
      } else {
        var tmp$ret$43;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$42;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        var tmp$ret$41;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$40;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        tmp$ret$40 = tmp16_restore.restore_uzeo8_k$(tmp15_restore);
        tmp$ret$41 = tmp$ret$40;
        var tmp_51 = tmp$ret$41;
        tmp$ret$42 = (tmp_51 == null ? true : tmp_51 instanceof LocaleList) ? tmp_51 : THROW_CCE();
        tmp$ret$43 = tmp$ret$42;
        tmp_50 = tmp$ret$43;
      }
      tmp$ret$39 = tmp_50;
    }
    var tmp_52 = tmp$ret$39;
    var tmp$ret$44;
    $l$block_6: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp17_restore = list.get_fkrdnv_k$(11);
      var tmp18_restore = get_Saver_1(Companion_getInstance());
      if (equals(tmp17_restore, false)) {
        tmp$ret$44 = null;
        break $l$block_6;
      }
      var tmp0_safe_receiver_9 = tmp17_restore;
      var tmp_53;
      if (tmp0_safe_receiver_9 == null) {
        tmp_53 = null;
      } else {
        var tmp$ret$48;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$47;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        var tmp$ret$46;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$45;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_54 = tmp18_restore.restore_uzeo8_k$(tmp17_restore);
        tmp$ret$45 = tmp_54 == null ? null : tmp_54.value_1;
        tmp$ret$46 = tmp$ret$45;
        var tmp_55 = tmp$ret$46;
        var tmp_56;
        var tmp_57;
        var tmp_58 = tmp_55;
        if ((tmp_58 == null ? null : new Color(tmp_58)) == null) {
          tmp_57 = true;
        } else {
          var tmp_59 = tmp_55;
          tmp_57 = (tmp_59 == null ? null : new Color(tmp_59))instanceof Color;
        }
        if (tmp_57) {
          tmp_56 = tmp_55;
        } else {
          tmp_56 = THROW_CCE();
        }
        tmp$ret$47 = tmp_56;
        tmp$ret$48 = tmp$ret$47;
        tmp_53 = tmp$ret$48;
      }
      tmp$ret$44 = tmp_53;
    }
    var tmp_60 = tmp$ret$44;
    var tmp_61 = ensureNotNull(tmp_60 == null ? null : new Color(tmp_60)).value_1;
    var tmp$ret$49;
    $l$block_7: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp19_restore = list.get_fkrdnv_k$(12);
      var tmp20_restore = get_Saver_6(Companion_getInstance_37());
      if (equals(tmp19_restore, false)) {
        tmp$ret$49 = null;
        break $l$block_7;
      }
      var tmp0_safe_receiver_10 = tmp19_restore;
      var tmp_62;
      if (tmp0_safe_receiver_10 == null) {
        tmp_62 = null;
      } else {
        var tmp$ret$53;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$52;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        var tmp$ret$51;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$50;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        tmp$ret$50 = tmp20_restore.restore_uzeo8_k$(tmp19_restore);
        tmp$ret$51 = tmp$ret$50;
        var tmp_63 = tmp$ret$51;
        tmp$ret$52 = (tmp_63 == null ? true : tmp_63 instanceof TextDecoration) ? tmp_63 : THROW_CCE();
        tmp$ret$53 = tmp$ret$52;
        tmp_62 = tmp$ret$53;
      }
      tmp$ret$49 = tmp_62;
    }
    var tmp_64 = tmp$ret$49;
    var tmp$ret$54;
    $l$block_8: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp21_restore = list.get_fkrdnv_k$(13);
      var tmp22_restore = get_Saver_7(Companion_getInstance_1());
      if (equals(tmp21_restore, false)) {
        tmp$ret$54 = null;
        break $l$block_8;
      }
      var tmp0_safe_receiver_11 = tmp21_restore;
      var tmp_65;
      if (tmp0_safe_receiver_11 == null) {
        tmp_65 = null;
      } else {
        var tmp$ret$58;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$57;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        var tmp$ret$56;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$55;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        tmp$ret$55 = tmp22_restore.restore_uzeo8_k$(tmp21_restore);
        tmp$ret$56 = tmp$ret$55;
        var tmp_66 = tmp$ret$56;
        tmp$ret$57 = (tmp_66 == null ? true : tmp_66 instanceof Shadow) ? tmp_66 : THROW_CCE();
        tmp$ret$58 = tmp$ret$57;
        tmp_65 = tmp$ret$58;
      }
      tmp$ret$54 = tmp_65;
    }
    return SpanStyle_init_$Create$_1(tmp_7, tmp_16, tmp_19, tmp_23, tmp_27, null, tmp_29, tmp_38, tmp_46, tmp_49, tmp_52, tmp_61, tmp_64, tmp$ret$54, 32, null);
  }
  function TextDecorationSaver$lambda($this$Saver, it) {
    init_properties_Savers_kt_4dapzw();
    return it.mask_1;
  }
  function TextDecorationSaver$lambda_0(it) {
    init_properties_Savers_kt_4dapzw();
    return new TextDecoration(typeof it === 'number' ? it : THROW_CCE());
  }
  function TextGeometricTransformSaver$lambda($this$Saver, it) {
    init_properties_Savers_kt_4dapzw();
    return arrayListOf([it.scaleX_1, it.skewX_1]);
  }
  function TextGeometricTransformSaver$lambda_0(it) {
    init_properties_Savers_kt_4dapzw();
    var list = isInterface(it, List) ? it : THROW_CCE();
    return new TextGeometricTransform(list.get_fkrdnv_k$(0), list.get_fkrdnv_k$(1));
  }
  function TextIndentSaver$lambda($this$Saver, it) {
    init_properties_Savers_kt_4dapzw();
    return arrayListOf([save_0(new TextUnit(it.firstLine_1), get_Saver(Companion_getInstance_0()), $this$Saver), save_0(new TextUnit(it.restLine_1), get_Saver(Companion_getInstance_0()), $this$Saver)]);
  }
  function TextIndentSaver$lambda_0(it) {
    init_properties_Savers_kt_4dapzw();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_restore = list.get_fkrdnv_k$(0);
      var tmp1_restore = get_Saver(Companion_getInstance_0());
      if (equals(tmp0_restore, false)) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp0_safe_receiver = tmp0_restore;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$4;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_0 = tmp1_restore.restore_uzeo8_k$(tmp0_restore);
        tmp$ret$1 = tmp_0 == null ? null : tmp_0.packedValue_1;
        tmp$ret$2 = tmp$ret$1;
        var tmp_1 = tmp$ret$2;
        var tmp_2;
        var tmp_3;
        var tmp_4 = tmp_1;
        if ((tmp_4 == null ? null : new TextUnit(tmp_4)) == null) {
          tmp_3 = true;
        } else {
          var tmp_5 = tmp_1;
          tmp_3 = (tmp_5 == null ? null : new TextUnit(tmp_5))instanceof TextUnit;
        }
        if (tmp_3) {
          tmp_2 = tmp_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        tmp$ret$3 = tmp_2;
        tmp$ret$4 = tmp$ret$3;
        tmp = tmp$ret$4;
      }
      tmp$ret$0 = tmp;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new TextUnit(tmp_6)).packedValue_1;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp2_restore = list.get_fkrdnv_k$(1);
      var tmp3_restore = get_Saver(Companion_getInstance_0());
      if (equals(tmp2_restore, false)) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp0_safe_receiver_0 = tmp2_restore;
      var tmp_8;
      if (tmp0_safe_receiver_0 == null) {
        tmp_8 = null;
      } else {
        var tmp$ret$9;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$8;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        var tmp$ret$7;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_9 = tmp3_restore.restore_uzeo8_k$(tmp2_restore);
        tmp$ret$6 = tmp_9 == null ? null : tmp_9.packedValue_1;
        tmp$ret$7 = tmp$ret$6;
        var tmp_10 = tmp$ret$7;
        var tmp_11;
        var tmp_12;
        var tmp_13 = tmp_10;
        if ((tmp_13 == null ? null : new TextUnit(tmp_13)) == null) {
          tmp_12 = true;
        } else {
          var tmp_14 = tmp_10;
          tmp_12 = (tmp_14 == null ? null : new TextUnit(tmp_14))instanceof TextUnit;
        }
        if (tmp_12) {
          tmp_11 = tmp_10;
        } else {
          tmp_11 = THROW_CCE();
        }
        tmp$ret$8 = tmp_11;
        tmp$ret$9 = tmp$ret$8;
        tmp_8 = tmp$ret$9;
      }
      tmp$ret$5 = tmp_8;
    }
    var tmp_15 = tmp$ret$5;
    return new TextIndent_0(tmp_7, ensureNotNull(tmp_15 == null ? null : new TextUnit(tmp_15)).packedValue_1);
  }
  function FontWeightSaver$lambda($this$Saver, it) {
    init_properties_Savers_kt_4dapzw();
    return it.weight_1;
  }
  function FontWeightSaver$lambda_0(it) {
    init_properties_Savers_kt_4dapzw();
    return new FontWeight(typeof it === 'number' ? it : THROW_CCE());
  }
  function BaselineShiftSaver$lambda($this$Saver, it) {
    init_properties_Savers_kt_4dapzw();
    return _BaselineShift___get_multiplier__impl__qhmjek(it.multiplier_1);
  }
  function BaselineShiftSaver$lambda_0(it) {
    init_properties_Savers_kt_4dapzw();
    return new BaselineShift(_BaselineShift___init__impl__scj05g(typeof it === 'number' ? it : THROW_CCE()));
  }
  function TextRangeSaver$lambda($this$Saver, it) {
    init_properties_Savers_kt_4dapzw();
    return arrayListOf([save(_TextRange___get_start__impl__ww4t90(it.packedValue_1)), save(_TextRange___get_end__impl__gcdxpp(it.packedValue_1))]);
  }
  function TextRangeSaver$lambda_0(it) {
    init_properties_Savers_kt_4dapzw();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_restore = list.get_fkrdnv_k$(0);
    var tmp0_safe_receiver = tmp0_restore;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp$ret$0 = (tmp0_safe_receiver == null ? true : typeof tmp0_safe_receiver === 'number') ? tmp0_safe_receiver : THROW_CCE();
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    var tmp_0 = ensureNotNull(tmp$ret$2);
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp1_restore = list.get_fkrdnv_k$(1);
    var tmp0_safe_receiver_0 = tmp1_restore;
    var tmp_1;
    if (tmp0_safe_receiver_0 == null) {
      tmp_1 = null;
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp$ret$3 = (tmp0_safe_receiver_0 == null ? true : typeof tmp0_safe_receiver_0 === 'number') ? tmp0_safe_receiver_0 : THROW_CCE();
      tmp$ret$4 = tmp$ret$3;
      tmp_1 = tmp$ret$4;
    }
    tmp$ret$5 = tmp_1;
    return new TextRange(TextRange_0(tmp_0, ensureNotNull(tmp$ret$5)));
  }
  function ShadowSaver$lambda($this$Saver, it) {
    init_properties_Savers_kt_4dapzw();
    return arrayListOf([save_0(new Color(it.color_1), get_Saver_1(Companion_getInstance()), $this$Saver), save_0(new Offset_0(it.offset_1), get_Saver_8(Companion_getInstance_2()), $this$Saver), save(it.blurRadius_1)]);
  }
  function ShadowSaver$lambda_0(it) {
    init_properties_Savers_kt_4dapzw();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_restore = list.get_fkrdnv_k$(0);
      var tmp1_restore = get_Saver_1(Companion_getInstance());
      if (equals(tmp0_restore, false)) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp0_safe_receiver = tmp0_restore;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$4;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_0 = tmp1_restore.restore_uzeo8_k$(tmp0_restore);
        tmp$ret$1 = tmp_0 == null ? null : tmp_0.value_1;
        tmp$ret$2 = tmp$ret$1;
        var tmp_1 = tmp$ret$2;
        var tmp_2;
        var tmp_3;
        var tmp_4 = tmp_1;
        if ((tmp_4 == null ? null : new Color(tmp_4)) == null) {
          tmp_3 = true;
        } else {
          var tmp_5 = tmp_1;
          tmp_3 = (tmp_5 == null ? null : new Color(tmp_5))instanceof Color;
        }
        if (tmp_3) {
          tmp_2 = tmp_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        tmp$ret$3 = tmp_2;
        tmp$ret$4 = tmp$ret$3;
        tmp = tmp$ret$4;
      }
      tmp$ret$0 = tmp;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new Color(tmp_6)).value_1;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp2_restore = list.get_fkrdnv_k$(1);
      var tmp3_restore = get_Saver_8(Companion_getInstance_2());
      if (equals(tmp2_restore, false)) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp0_safe_receiver_0 = tmp2_restore;
      var tmp_8;
      if (tmp0_safe_receiver_0 == null) {
        tmp_8 = null;
      } else {
        var tmp$ret$9;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$8;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        var tmp$ret$7;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_9 = tmp3_restore.restore_uzeo8_k$(tmp2_restore);
        tmp$ret$6 = tmp_9 == null ? null : tmp_9.packedValue_1;
        tmp$ret$7 = tmp$ret$6;
        var tmp_10 = tmp$ret$7;
        var tmp_11;
        var tmp_12;
        var tmp_13 = tmp_10;
        if ((tmp_13 == null ? null : new Offset_0(tmp_13)) == null) {
          tmp_12 = true;
        } else {
          var tmp_14 = tmp_10;
          tmp_12 = (tmp_14 == null ? null : new Offset_0(tmp_14))instanceof Offset_0;
        }
        if (tmp_12) {
          tmp_11 = tmp_10;
        } else {
          tmp_11 = THROW_CCE();
        }
        tmp$ret$8 = tmp_11;
        tmp$ret$9 = tmp$ret$8;
        tmp_8 = tmp$ret$9;
      }
      tmp$ret$5 = tmp_8;
    }
    var tmp_15 = tmp$ret$5;
    var tmp_16 = ensureNotNull(tmp_15 == null ? null : new Offset_0(tmp_15)).packedValue_1;
    var tmp$ret$12;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp4_restore = list.get_fkrdnv_k$(2);
    var tmp0_safe_receiver_1 = tmp4_restore;
    var tmp_17;
    if (tmp0_safe_receiver_1 == null) {
      tmp_17 = null;
    } else {
      var tmp$ret$11;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp$ret$10 = (tmp0_safe_receiver_1 == null ? true : typeof tmp0_safe_receiver_1 === 'number') ? tmp0_safe_receiver_1 : THROW_CCE();
      tmp$ret$11 = tmp$ret$10;
      tmp_17 = tmp$ret$11;
    }
    tmp$ret$12 = tmp_17;
    return new Shadow(tmp_7, tmp_16, ensureNotNull(tmp$ret$12));
  }
  function ColorSaver$lambda($this$Saver, it) {
    init_properties_Savers_kt_4dapzw();
    return new ULong(_Color___get_value__impl__1pls5m(it.value_1));
  }
  function ColorSaver$lambda_0(it) {
    init_properties_Savers_kt_4dapzw();
    return new Color(_Color___init__impl__r6cqi2(it instanceof ULong ? it.data_1 : THROW_CCE()));
  }
  function TextUnitSaver$lambda($this$Saver, it) {
    init_properties_Savers_kt_4dapzw();
    return arrayListOf([save(_TextUnit___get_value__impl__hpbx0k(it.packedValue_1)), save(new TextUnitType(_TextUnit___get_type__impl__uc2olt(it.packedValue_1)))]);
  }
  function TextUnitSaver$lambda_0(it) {
    init_properties_Savers_kt_4dapzw();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_restore = list.get_fkrdnv_k$(0);
    var tmp0_safe_receiver = tmp0_restore;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp$ret$0 = (tmp0_safe_receiver == null ? true : typeof tmp0_safe_receiver === 'number') ? tmp0_safe_receiver : THROW_CCE();
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    var tmp_0 = ensureNotNull(tmp$ret$2);
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp1_restore = list.get_fkrdnv_k$(1);
    var tmp0_safe_receiver_0 = tmp1_restore;
    var tmp_1;
    if (tmp0_safe_receiver_0 == null) {
      tmp_1 = null;
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      var tmp_2;
      if (tmp0_safe_receiver_0 == null ? true : tmp0_safe_receiver_0 instanceof TextUnitType) {
        var tmp_3 = tmp0_safe_receiver_0;
        tmp_2 = tmp_3 == null ? null : tmp_3.type_1;
      } else {
        tmp_2 = THROW_CCE();
      }
      tmp$ret$3 = tmp_2;
      tmp$ret$4 = tmp$ret$3;
      tmp_1 = tmp$ret$4;
    }
    tmp$ret$5 = tmp_1;
    var tmp_4 = tmp$ret$5;
    return new TextUnit(TextUnit_0(tmp_0, ensureNotNull(tmp_4 == null ? null : new TextUnitType(tmp_4)).type_1));
  }
  function OffsetSaver$lambda($this$Saver, it) {
    init_properties_Savers_kt_4dapzw();
    var tmp;
    if (equals(it, new Offset_0(Companion_getInstance_2().Unspecified_1))) {
      tmp = false;
    } else {
      tmp = arrayListOf([save(_Offset___get_x__impl__xvi35n(it.packedValue_1)), save(_Offset___get_y__impl__8bzhra(it.packedValue_1))]);
    }
    return tmp;
  }
  function OffsetSaver$lambda_0(it) {
    init_properties_Savers_kt_4dapzw();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance_2().Unspecified_1;
    } else {
      var list = isInterface(it, List) ? it : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_restore = list.get_fkrdnv_k$(0);
      var tmp0_safe_receiver = tmp0_restore;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        tmp$ret$0 = (tmp0_safe_receiver == null ? true : typeof tmp0_safe_receiver === 'number') ? tmp0_safe_receiver : THROW_CCE();
        tmp$ret$1 = tmp$ret$0;
        tmp_0 = tmp$ret$1;
      }
      tmp$ret$2 = tmp_0;
      var tmp_1 = ensureNotNull(tmp$ret$2);
      var tmp$ret$5;
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp1_restore = list.get_fkrdnv_k$(1);
      var tmp0_safe_receiver_0 = tmp1_restore;
      var tmp_2;
      if (tmp0_safe_receiver_0 == null) {
        tmp_2 = null;
      } else {
        var tmp$ret$4;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        tmp$ret$3 = (tmp0_safe_receiver_0 == null ? true : typeof tmp0_safe_receiver_0 === 'number') ? tmp0_safe_receiver_0 : THROW_CCE();
        tmp$ret$4 = tmp$ret$3;
        tmp_2 = tmp$ret$4;
      }
      tmp$ret$5 = tmp_2;
      tmp = Offset(tmp_1, ensureNotNull(tmp$ret$5));
    }
    var tmp_3 = tmp;
    return tmp_3 == null ? null : new Offset_0(tmp_3);
  }
  function LocaleListSaver$lambda($this$Saver, it) {
    init_properties_Savers_kt_4dapzw();
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp0_fastMap = it.localeList_1;
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(tmp0_fastMap.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastMap.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastMap.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.LocaleListSaver.<anonymous>.<anonymous>' call
        tmp$ret$0 = save_0(item, get_Saver_9(Companion_getInstance_29()), $this$Saver);
        var tmp0_plusAssign = tmp$ret$0;
        target.add_1j60pz_k$(tmp0_plusAssign);
      }
       while (inductionVariable <= last);
    tmp$ret$1 = target;
    return tmp$ret$1;
  }
  function LocaleListSaver$lambda_0(it) {
    init_properties_Savers_kt_4dapzw();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(list.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = list.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = list.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.ui.text.LocaleListSaver.<anonymous>.<anonymous>' call
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp0_restore = get_Saver_9(Companion_getInstance_29());
          if (equals(item, false)) {
            tmp$ret$0 = null;
            break $l$block;
          }
          var tmp0_safe_receiver = item;
          var tmp;
          if (tmp0_safe_receiver == null) {
            tmp = null;
          } else {
            var tmp$ret$4;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$3;
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            var tmp$ret$2;
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$1;
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            tmp$ret$1 = tmp0_restore.restore_uzeo8_k$(item);
            tmp$ret$2 = tmp$ret$1;
            var tmp_0 = tmp$ret$2;
            tmp$ret$3 = (tmp_0 == null ? true : tmp_0 instanceof Locale) ? tmp_0 : THROW_CCE();
            tmp$ret$4 = tmp$ret$3;
            tmp = tmp$ret$4;
          }
          tmp$ret$0 = tmp;
        }
        tmp$ret$5 = ensureNotNull(tmp$ret$0);
        var tmp0_plusAssign = tmp$ret$5;
        target.add_1j60pz_k$(tmp0_plusAssign);
      }
       while (inductionVariable <= last);
    tmp$ret$6 = target;
    return new LocaleList(tmp$ret$6);
  }
  function LocaleSaver$lambda($this$Saver, it) {
    init_properties_Savers_kt_4dapzw();
    return it.toLanguageTag_xneel5_k$();
  }
  function LocaleSaver$lambda_0(it) {
    init_properties_Savers_kt_4dapzw();
    return Locale_init_$Create$(typeof it === 'string' ? it : THROW_CCE());
  }
  function AnnotationType_Paragraph_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Paragraph_instance;
  }
  function AnnotationType_Span_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Span_instance;
  }
  function AnnotationType_VerbatimTts_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_VerbatimTts_instance;
  }
  function AnnotationType_Url_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Url_instance;
  }
  function AnnotationType_String_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_String_instance;
  }
  var properties_initialized_Savers_kt_vjp8zk;
  function init_properties_Savers_kt_4dapzw() {
    if (properties_initialized_Savers_kt_vjp8zk) {
    } else {
      properties_initialized_Savers_kt_vjp8zk = true;
      var tmp = AnnotatedStringSaver$lambda;
      AnnotatedStringSaver = Saver(tmp, AnnotatedStringSaver$lambda_0);
      var tmp_0 = AnnotationRangeListSaver$lambda;
      AnnotationRangeListSaver = Saver(tmp_0, AnnotationRangeListSaver$lambda_0);
      var tmp_1 = AnnotationRangeSaver$lambda;
      AnnotationRangeSaver = Saver(tmp_1, AnnotationRangeSaver$lambda_0);
      var tmp_2 = VerbatimTtsAnnotationSaver$lambda;
      VerbatimTtsAnnotationSaver = Saver(tmp_2, VerbatimTtsAnnotationSaver$lambda_0);
      var tmp_3 = UrlAnnotationSaver$lambda;
      UrlAnnotationSaver = Saver(tmp_3, UrlAnnotationSaver$lambda_0);
      var tmp_4 = ParagraphStyleSaver$lambda;
      ParagraphStyleSaver = Saver(tmp_4, ParagraphStyleSaver$lambda_0);
      var tmp_5 = SpanStyleSaver$lambda;
      SpanStyleSaver = Saver(tmp_5, SpanStyleSaver$lambda_0);
      var tmp_6 = TextDecorationSaver$lambda;
      TextDecorationSaver = Saver(tmp_6, TextDecorationSaver$lambda_0);
      var tmp_7 = TextGeometricTransformSaver$lambda;
      TextGeometricTransformSaver = Saver(tmp_7, TextGeometricTransformSaver$lambda_0);
      var tmp_8 = TextIndentSaver$lambda;
      TextIndentSaver = Saver(tmp_8, TextIndentSaver$lambda_0);
      var tmp_9 = FontWeightSaver$lambda;
      FontWeightSaver = Saver(tmp_9, FontWeightSaver$lambda_0);
      var tmp_10 = BaselineShiftSaver$lambda;
      BaselineShiftSaver = Saver(tmp_10, BaselineShiftSaver$lambda_0);
      var tmp_11 = TextRangeSaver$lambda;
      TextRangeSaver = Saver(tmp_11, TextRangeSaver$lambda_0);
      var tmp_12 = ShadowSaver$lambda;
      ShadowSaver = Saver(tmp_12, ShadowSaver$lambda_0);
      var tmp_13 = ColorSaver$lambda;
      ColorSaver = Saver(tmp_13, ColorSaver$lambda_0);
      var tmp_14 = TextUnitSaver$lambda;
      TextUnitSaver = Saver(tmp_14, TextUnitSaver$lambda_0);
      var tmp_15 = OffsetSaver$lambda;
      OffsetSaver = Saver(tmp_15, OffsetSaver$lambda_0);
      var tmp_16 = LocaleListSaver$lambda;
      LocaleListSaver = Saver(tmp_16, LocaleListSaver$lambda_0);
      var tmp_17 = LocaleSaver$lambda;
      LocaleSaver = Saver(tmp_17, LocaleSaver$lambda_0);
    }
  }
  function get_DefaultFontSize() {
    init_properties_SpanStyle_kt_tje8dv();
    return DefaultFontSize;
  }
  var DefaultFontSize;
  function get_DefaultLetterSpacing() {
    init_properties_SpanStyle_kt_tje8dv();
    return DefaultLetterSpacing;
  }
  var DefaultLetterSpacing;
  function get_DefaultBackgroundColor() {
    init_properties_SpanStyle_kt_tje8dv();
    return DefaultBackgroundColor;
  }
  var DefaultBackgroundColor;
  function get_DefaultColor() {
    init_properties_SpanStyle_kt_tje8dv();
    return DefaultColor;
  }
  var DefaultColor;
  function SpanStyle_init_$Init$(textForegroundStyle, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      fontSize = Companion_getInstance_0().Unspecified_1;
    if (!(($mask0 & 4) === 0))
      fontWeight = null;
    if (!(($mask0 & 8) === 0))
      fontStyle = null;
    if (!(($mask0 & 16) === 0))
      fontSynthesis = null;
    if (!(($mask0 & 32) === 0))
      fontFamily = null;
    if (!(($mask0 & 64) === 0))
      fontFeatureSettings = null;
    if (!(($mask0 & 128) === 0))
      letterSpacing = Companion_getInstance_0().Unspecified_1;
    if (!(($mask0 & 256) === 0))
      baselineShift = null;
    if (!(($mask0 & 512) === 0))
      textGeometricTransform = null;
    if (!(($mask0 & 1024) === 0))
      localeList = null;
    if (!(($mask0 & 2048) === 0))
      background = Companion_getInstance().Unspecified_1;
    if (!(($mask0 & 4096) === 0))
      textDecoration = null;
    if (!(($mask0 & 8192) === 0))
      shadow = null;
    if (!(($mask0 & 16384) === 0))
      platformStyle = null;
    SpanStyle.call($this, textForegroundStyle, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle);
    return $this;
  }
  function SpanStyle_init_$Create$(textForegroundStyle, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $mask0, $marker) {
    return SpanStyle_init_$Init$(textForegroundStyle, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $mask0, $marker, Object.create(SpanStyle.prototype));
  }
  function SpanStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $this) {
    SpanStyle.call($this, Companion_getInstance_39().from_ofk88i_k$(color), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, null);
    return $this;
  }
  function SpanStyle_init_$Create$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow) {
    return SpanStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, Object.create(SpanStyle.prototype));
  }
  function SpanStyle_init_$Init$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      color = Companion_getInstance().Unspecified_1;
    if (!(($mask0 & 2) === 0))
      fontSize = Companion_getInstance_0().Unspecified_1;
    if (!(($mask0 & 4) === 0))
      fontWeight = null;
    if (!(($mask0 & 8) === 0))
      fontStyle = null;
    if (!(($mask0 & 16) === 0))
      fontSynthesis = null;
    if (!(($mask0 & 32) === 0))
      fontFamily = null;
    if (!(($mask0 & 64) === 0))
      fontFeatureSettings = null;
    if (!(($mask0 & 128) === 0))
      letterSpacing = Companion_getInstance_0().Unspecified_1;
    if (!(($mask0 & 256) === 0))
      baselineShift = null;
    if (!(($mask0 & 512) === 0))
      textGeometricTransform = null;
    if (!(($mask0 & 1024) === 0))
      localeList = null;
    if (!(($mask0 & 2048) === 0))
      background = Companion_getInstance().Unspecified_1;
    if (!(($mask0 & 4096) === 0))
      textDecoration = null;
    if (!(($mask0 & 8192) === 0))
      shadow = null;
    SpanStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $this);
    return $this;
  }
  function SpanStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $mask0, $marker) {
    return SpanStyle_init_$Init$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $mask0, $marker, Object.create(SpanStyle.prototype));
  }
  function SpanStyle_init_$Init$_2(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $this) {
    SpanStyle.call($this, Companion_getInstance_39().from_ofk88i_k$(color), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle);
    return $this;
  }
  function SpanStyle_init_$Create$_2(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle) {
    return SpanStyle_init_$Init$_2(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, Object.create(SpanStyle.prototype));
  }
  function SpanStyle_init_$Init$_3(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      color = Companion_getInstance().Unspecified_1;
    if (!(($mask0 & 2) === 0))
      fontSize = Companion_getInstance_0().Unspecified_1;
    if (!(($mask0 & 4) === 0))
      fontWeight = null;
    if (!(($mask0 & 8) === 0))
      fontStyle = null;
    if (!(($mask0 & 16) === 0))
      fontSynthesis = null;
    if (!(($mask0 & 32) === 0))
      fontFamily = null;
    if (!(($mask0 & 64) === 0))
      fontFeatureSettings = null;
    if (!(($mask0 & 128) === 0))
      letterSpacing = Companion_getInstance_0().Unspecified_1;
    if (!(($mask0 & 256) === 0))
      baselineShift = null;
    if (!(($mask0 & 512) === 0))
      textGeometricTransform = null;
    if (!(($mask0 & 1024) === 0))
      localeList = null;
    if (!(($mask0 & 2048) === 0))
      background = Companion_getInstance().Unspecified_1;
    if (!(($mask0 & 4096) === 0))
      textDecoration = null;
    if (!(($mask0 & 8192) === 0))
      shadow = null;
    if (!(($mask0 & 16384) === 0))
      platformStyle = null;
    SpanStyle_init_$Init$_2(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $this);
    return $this;
  }
  function SpanStyle_init_$Create$_3(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $mask0, $marker) {
    return SpanStyle_init_$Init$_3(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $mask0, $marker, Object.create(SpanStyle.prototype));
  }
  function SpanStyle_init_$Init$_4(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $this) {
    SpanStyle.call($this, Companion_getInstance_39().from_4hvn90_k$(brush, alpha), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle);
    return $this;
  }
  function SpanStyle_init_$Create$_4(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle) {
    return SpanStyle_init_$Init$_4(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, Object.create(SpanStyle.prototype));
  }
  function SpanStyle_init_$Init$_5(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0)) {
      FloatCompanionObject_getInstance();
      alpha = NaN;
    }
    if (!(($mask0 & 4) === 0))
      fontSize = Companion_getInstance_0().Unspecified_1;
    if (!(($mask0 & 8) === 0))
      fontWeight = null;
    if (!(($mask0 & 16) === 0))
      fontStyle = null;
    if (!(($mask0 & 32) === 0))
      fontSynthesis = null;
    if (!(($mask0 & 64) === 0))
      fontFamily = null;
    if (!(($mask0 & 128) === 0))
      fontFeatureSettings = null;
    if (!(($mask0 & 256) === 0))
      letterSpacing = Companion_getInstance_0().Unspecified_1;
    if (!(($mask0 & 512) === 0))
      baselineShift = null;
    if (!(($mask0 & 1024) === 0))
      textGeometricTransform = null;
    if (!(($mask0 & 2048) === 0))
      localeList = null;
    if (!(($mask0 & 4096) === 0))
      background = Companion_getInstance().Unspecified_1;
    if (!(($mask0 & 8192) === 0))
      textDecoration = null;
    if (!(($mask0 & 16384) === 0))
      shadow = null;
    if (!(($mask0 & 32768) === 0))
      platformStyle = null;
    SpanStyle_init_$Init$_4(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $this);
    return $this;
  }
  function SpanStyle_init_$Create$_5(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $mask0, $marker) {
    return SpanStyle_init_$Init$_5(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $mask0, $marker, Object.create(SpanStyle.prototype));
  }
  function mergePlatformStyle_0($this, other) {
    if ($this.platformStyle_1 == null)
      return other;
    if (other == null)
      return $this.platformStyle_1;
    return $this.platformStyle_1.merge_o4jtak_k$(other);
  }
  function hasSameNonLayoutAttributes($this, other) {
    if (!equals($this.textForegroundStyle_1, other.textForegroundStyle_1))
      return false;
    if (!equals($this.textDecoration_1, other.textDecoration_1))
      return false;
    if (!equals($this.shadow_1, other.shadow_1))
      return false;
    return true;
  }
  function SpanStyle(textForegroundStyle, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle) {
    this.textForegroundStyle_1 = textForegroundStyle;
    this.fontSize_1 = fontSize;
    this.fontWeight_1 = fontWeight;
    this.fontStyle_1 = fontStyle;
    this.fontSynthesis_1 = fontSynthesis;
    this.fontFamily_1 = fontFamily;
    this.fontFeatureSettings_1 = fontFeatureSettings;
    this.letterSpacing_1 = letterSpacing;
    this.baselineShift_1 = baselineShift;
    this.textGeometricTransform_1 = textGeometricTransform;
    this.localeList_1 = localeList;
    this.background_1 = background;
    this.textDecoration_1 = textDecoration;
    this.shadow_1 = shadow;
    this.platformStyle_1 = platformStyle;
  }
  SpanStyle.prototype.get_textForegroundStyle_1frzu0_k$ = function () {
    return this.textForegroundStyle_1;
  };
  SpanStyle.prototype.get_fontSize_61k213_k$ = function () {
    return this.fontSize_1;
  };
  SpanStyle.prototype.get_fontWeight_wbif2o_k$ = function () {
    return this.fontWeight_1;
  };
  SpanStyle.prototype.get_fontStyle_fze7ml_k$ = function () {
    return this.fontStyle_1;
  };
  SpanStyle.prototype.get_fontSynthesis_t08ei1_k$ = function () {
    return this.fontSynthesis_1;
  };
  SpanStyle.prototype.get_fontFamily_ulphcs_k$ = function () {
    return this.fontFamily_1;
  };
  SpanStyle.prototype.get_fontFeatureSettings_a47533_k$ = function () {
    return this.fontFeatureSettings_1;
  };
  SpanStyle.prototype.get_letterSpacing_u0tnf8_k$ = function () {
    return this.letterSpacing_1;
  };
  SpanStyle.prototype.get_baselineShift_yg9i0p_k$ = function () {
    return this.baselineShift_1;
  };
  SpanStyle.prototype.get_textGeometricTransform_tdfmin_k$ = function () {
    return this.textGeometricTransform_1;
  };
  SpanStyle.prototype.get_localeList_1gj9gh_k$ = function () {
    return this.localeList_1;
  };
  SpanStyle.prototype.get_background_ubksc_k$ = function () {
    return this.background_1;
  };
  SpanStyle.prototype.get_textDecoration_itgjwm_k$ = function () {
    return this.textDecoration_1;
  };
  SpanStyle.prototype.get_shadow_jgtb8p_k$ = function () {
    return this.shadow_1;
  };
  SpanStyle.prototype.get_platformStyle_7i053p_k$ = function () {
    return this.platformStyle_1;
  };
  SpanStyle.prototype.get_color_v34vrz_k$ = function () {
    return this.textForegroundStyle_1.get_color_v34vrz_k$();
  };
  SpanStyle.prototype.get_brush_ipcjyp_k$ = function () {
    return this.textForegroundStyle_1.get_brush_ipcjyp_k$();
  };
  SpanStyle.prototype.get_alpha_iooth1_k$ = function () {
    return this.textForegroundStyle_1.get_alpha_iooth1_k$();
  };
  SpanStyle.prototype.merge_m0r35z_k$ = function (other) {
    if (other == null)
      return this;
    var tmp10_textForegroundStyle = this.textForegroundStyle_1.merge_o4w5dp_k$(other.textForegroundStyle_1);
    var tmp3_elvis_lhs = other.fontFamily_1;
    var tmp11_fontFamily = tmp3_elvis_lhs == null ? this.fontFamily_1 : tmp3_elvis_lhs;
    var tmp12_fontSize = !get_isUnspecified(other.fontSize_1) ? other.fontSize_1 : this.fontSize_1;
    var tmp0_elvis_lhs = other.fontWeight_1;
    var tmp13_fontWeight = tmp0_elvis_lhs == null ? this.fontWeight_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = other.fontStyle_1;
    var tmp;
    var tmp_0 = tmp1_elvis_lhs;
    if ((tmp_0 == null ? null : new FontStyle(tmp_0)) == null) {
      tmp = this.fontStyle_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var tmp14_fontStyle = tmp;
    var tmp2_elvis_lhs = other.fontSynthesis_1;
    var tmp_1;
    var tmp_2 = tmp2_elvis_lhs;
    if ((tmp_2 == null ? null : new FontSynthesis(tmp_2)) == null) {
      tmp_1 = this.fontSynthesis_1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    var tmp15_fontSynthesis = tmp_1;
    var tmp4_elvis_lhs = other.fontFeatureSettings_1;
    var tmp16_fontFeatureSettings = tmp4_elvis_lhs == null ? this.fontFeatureSettings_1 : tmp4_elvis_lhs;
    var tmp_3;
    if (!get_isUnspecified(other.letterSpacing_1)) {
      tmp_3 = other.letterSpacing_1;
    } else {
      tmp_3 = this.letterSpacing_1;
    }
    var tmp17_letterSpacing = tmp_3;
    var tmp5_elvis_lhs = other.baselineShift_1;
    var tmp_4;
    var tmp_5 = tmp5_elvis_lhs;
    if ((tmp_5 == null ? null : new BaselineShift(tmp_5)) == null) {
      tmp_4 = this.baselineShift_1;
    } else {
      tmp_4 = tmp5_elvis_lhs;
    }
    var tmp18_baselineShift = tmp_4;
    var tmp6_elvis_lhs = other.textGeometricTransform_1;
    var tmp19_textGeometricTransform = tmp6_elvis_lhs == null ? this.textGeometricTransform_1 : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = other.localeList_1;
    var tmp20_localeList = tmp7_elvis_lhs == null ? this.localeList_1 : tmp7_elvis_lhs;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp0_takeOrElse = other.background_1;
    var tmp_6;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(tmp0_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance().Unspecified_1));
    if (tmp$ret$0) {
      tmp_6 = tmp0_takeOrElse;
    } else {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.text.SpanStyle.merge.<anonymous>' call
      tmp$ret$1 = this.background_1;
      tmp_6 = tmp$ret$1;
    }
    tmp$ret$2 = tmp_6;
    var tmp21_background = tmp$ret$2;
    var tmp8_elvis_lhs = other.textDecoration_1;
    var tmp22_textDecoration = tmp8_elvis_lhs == null ? this.textDecoration_1 : tmp8_elvis_lhs;
    var tmp9_elvis_lhs = other.shadow_1;
    var tmp23_shadow = tmp9_elvis_lhs == null ? this.shadow_1 : tmp9_elvis_lhs;
    var tmp24_platformStyle = mergePlatformStyle_0(this, other.platformStyle_1);
    return new SpanStyle(tmp10_textForegroundStyle, tmp12_fontSize, tmp13_fontWeight, tmp14_fontStyle, tmp15_fontSynthesis, tmp11_fontFamily, tmp16_fontFeatureSettings, tmp17_letterSpacing, tmp18_baselineShift, tmp19_textGeometricTransform, tmp20_localeList, tmp21_background, tmp22_textDecoration, tmp23_shadow, tmp24_platformStyle);
  };
  SpanStyle.prototype.merge$default_wxkcr8_k$ = function (other, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      other = null;
    return this.merge_m0r35z_k$(other);
  };
  SpanStyle.prototype.plus_mcrows_k$ = function (other) {
    return this.merge_m0r35z_k$(other);
  };
  SpanStyle.prototype.copy_mos7vk_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow) {
    var tmp;
    if (equals(color, this.get_color_v34vrz_k$())) {
      tmp = this.textForegroundStyle_1;
    } else {
      tmp = Companion_getInstance_39().from_ofk88i_k$(color);
    }
    return new SpanStyle(tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, this.platformStyle_1);
  };
  SpanStyle.prototype.copy$default_833x4x_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      color = this.get_color_v34vrz_k$();
    if (!(($mask0 & 2) === 0))
      fontSize = this.fontSize_1;
    if (!(($mask0 & 4) === 0))
      fontWeight = this.fontWeight_1;
    if (!(($mask0 & 8) === 0))
      fontStyle = this.fontStyle_1;
    if (!(($mask0 & 16) === 0))
      fontSynthesis = this.fontSynthesis_1;
    if (!(($mask0 & 32) === 0))
      fontFamily = this.fontFamily_1;
    if (!(($mask0 & 64) === 0))
      fontFeatureSettings = this.fontFeatureSettings_1;
    if (!(($mask0 & 128) === 0))
      letterSpacing = this.letterSpacing_1;
    if (!(($mask0 & 256) === 0))
      baselineShift = this.baselineShift_1;
    if (!(($mask0 & 512) === 0))
      textGeometricTransform = this.textGeometricTransform_1;
    if (!(($mask0 & 1024) === 0))
      localeList = this.localeList_1;
    if (!(($mask0 & 2048) === 0))
      background = this.background_1;
    if (!(($mask0 & 4096) === 0))
      textDecoration = this.textDecoration_1;
    if (!(($mask0 & 8192) === 0))
      shadow = this.shadow_1;
    return this.copy_mos7vk_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow);
  };
  SpanStyle.prototype.copy_wai6a4_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle) {
    var tmp;
    if (equals(color, this.get_color_v34vrz_k$())) {
      tmp = this.textForegroundStyle_1;
    } else {
      tmp = Companion_getInstance_39().from_ofk88i_k$(color);
    }
    return new SpanStyle(tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle);
  };
  SpanStyle.prototype.copy$default_knhf3f_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      color = this.get_color_v34vrz_k$();
    if (!(($mask0 & 2) === 0))
      fontSize = this.fontSize_1;
    if (!(($mask0 & 4) === 0))
      fontWeight = this.fontWeight_1;
    if (!(($mask0 & 8) === 0))
      fontStyle = this.fontStyle_1;
    if (!(($mask0 & 16) === 0))
      fontSynthesis = this.fontSynthesis_1;
    if (!(($mask0 & 32) === 0))
      fontFamily = this.fontFamily_1;
    if (!(($mask0 & 64) === 0))
      fontFeatureSettings = this.fontFeatureSettings_1;
    if (!(($mask0 & 128) === 0))
      letterSpacing = this.letterSpacing_1;
    if (!(($mask0 & 256) === 0))
      baselineShift = this.baselineShift_1;
    if (!(($mask0 & 512) === 0))
      textGeometricTransform = this.textGeometricTransform_1;
    if (!(($mask0 & 1024) === 0))
      localeList = this.localeList_1;
    if (!(($mask0 & 2048) === 0))
      background = this.background_1;
    if (!(($mask0 & 4096) === 0))
      textDecoration = this.textDecoration_1;
    if (!(($mask0 & 8192) === 0))
      shadow = this.shadow_1;
    if (!(($mask0 & 16384) === 0))
      platformStyle = this.platformStyle_1;
    return this.copy_wai6a4_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle);
  };
  SpanStyle.prototype.copy_t225qm_k$ = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle) {
    return new SpanStyle(Companion_getInstance_39().from_4hvn90_k$(brush, alpha), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle);
  };
  SpanStyle.prototype.copy$default_8btfdk_k$ = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      alpha = this.get_alpha_iooth1_k$();
    if (!(($mask0 & 4) === 0))
      fontSize = this.fontSize_1;
    if (!(($mask0 & 8) === 0))
      fontWeight = this.fontWeight_1;
    if (!(($mask0 & 16) === 0))
      fontStyle = this.fontStyle_1;
    if (!(($mask0 & 32) === 0))
      fontSynthesis = this.fontSynthesis_1;
    if (!(($mask0 & 64) === 0))
      fontFamily = this.fontFamily_1;
    if (!(($mask0 & 128) === 0))
      fontFeatureSettings = this.fontFeatureSettings_1;
    if (!(($mask0 & 256) === 0))
      letterSpacing = this.letterSpacing_1;
    if (!(($mask0 & 512) === 0))
      baselineShift = this.baselineShift_1;
    if (!(($mask0 & 1024) === 0))
      textGeometricTransform = this.textGeometricTransform_1;
    if (!(($mask0 & 2048) === 0))
      localeList = this.localeList_1;
    if (!(($mask0 & 4096) === 0))
      background = this.background_1;
    if (!(($mask0 & 8192) === 0))
      textDecoration = this.textDecoration_1;
    if (!(($mask0 & 16384) === 0))
      shadow = this.shadow_1;
    if (!(($mask0 & 32768) === 0))
      platformStyle = this.platformStyle_1;
    return this.copy_t225qm_k$(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle);
  };
  SpanStyle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpanStyle))
      return false;
    return this.hasSameLayoutAffectingAttributes_h43d5o_k$(other) ? hasSameNonLayoutAttributes(this, other) : false;
  };
  SpanStyle.prototype.hasSameLayoutAffectingAttributes_h43d5o_k$ = function (other) {
    if (this === other)
      return true;
    if (!equals(this.fontSize_1, other.fontSize_1))
      return false;
    if (!equals(this.fontWeight_1, other.fontWeight_1))
      return false;
    var tmp = this.fontStyle_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = other.fontStyle_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.fontSynthesis_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = other.fontSynthesis_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.fontFamily_1, other.fontFamily_1))
      return false;
    if (!(this.fontFeatureSettings_1 == other.fontFeatureSettings_1))
      return false;
    if (!equals(this.letterSpacing_1, other.letterSpacing_1))
      return false;
    var tmp_5 = this.baselineShift_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = other.baselineShift_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.textGeometricTransform_1, other.textGeometricTransform_1))
      return false;
    if (!equals(this.localeList_1, other.localeList_1))
      return false;
    if (!equals(this.background_1, other.background_1))
      return false;
    if (!equals(this.platformStyle_1, other.platformStyle_1))
      return false;
    return true;
  };
  SpanStyle.prototype.hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.get_color_v34vrz_k$());
    var tmp = imul(31, result);
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.get_brush_ipcjyp_k$();
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = tmp + tmp$ret$0 | 0;
    result = imul(31, result) + getNumberHashCode(this.get_alpha_iooth1_k$()) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.fontSize_1) | 0;
    var tmp_0 = imul(31, result);
    var tmp0_safe_receiver_0 = this.fontWeight_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.hashCode();
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(31, result);
    var tmp2_safe_receiver = this.fontStyle_1;
    var tmp_2;
    var tmp_3 = tmp2_safe_receiver;
    if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
      tmp_2 = null;
    } else {
      tmp_2 = FontStyle__hashCode_impl_7qhg4w(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_2;
    result = tmp_1 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_4 = imul(31, result);
    var tmp4_safe_receiver = this.fontSynthesis_1;
    var tmp_5;
    var tmp_6 = tmp4_safe_receiver;
    if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
      tmp_5 = null;
    } else {
      tmp_5 = FontSynthesis__hashCode_impl_4wi11v(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_5;
    result = tmp_4 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_7 = imul(31, result);
    var tmp6_safe_receiver = this.fontFamily_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_7 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_8 = imul(31, result);
    var tmp8_safe_receiver = this.fontFeatureSettings_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : getStringHashCode(tmp8_safe_receiver);
    result = tmp_8 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.letterSpacing_1) | 0;
    var tmp_9 = imul(31, result);
    var tmp10_safe_receiver = this.baselineShift_1;
    var tmp_10;
    var tmp_11 = tmp10_safe_receiver;
    if ((tmp_11 == null ? null : new BaselineShift(tmp_11)) == null) {
      tmp_10 = null;
    } else {
      tmp_10 = BaselineShift__hashCode_impl_g0potx(tmp10_safe_receiver);
    }
    var tmp11_elvis_lhs = tmp_10;
    result = tmp_9 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    var tmp_12 = imul(31, result);
    var tmp12_safe_receiver = this.textGeometricTransform_1;
    var tmp13_elvis_lhs = tmp12_safe_receiver == null ? null : tmp12_safe_receiver.hashCode();
    result = tmp_12 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    var tmp_13 = imul(31, result);
    var tmp14_safe_receiver = this.localeList_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.hashCode();
    result = tmp_13 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.background_1) | 0;
    var tmp_14 = imul(31, result);
    var tmp16_safe_receiver = this.textDecoration_1;
    var tmp17_elvis_lhs = tmp16_safe_receiver == null ? null : tmp16_safe_receiver.hashCode();
    result = tmp_14 + (tmp17_elvis_lhs == null ? 0 : tmp17_elvis_lhs) | 0;
    var tmp_15 = imul(31, result);
    var tmp18_safe_receiver = this.shadow_1;
    var tmp19_elvis_lhs = tmp18_safe_receiver == null ? null : tmp18_safe_receiver.hashCode();
    result = tmp_15 + (tmp19_elvis_lhs == null ? 0 : tmp19_elvis_lhs) | 0;
    var tmp_16 = imul(31, result);
    var tmp20_safe_receiver = this.platformStyle_1;
    var tmp21_elvis_lhs = tmp20_safe_receiver == null ? null : tmp20_safe_receiver.hashCode();
    result = tmp_16 + (tmp21_elvis_lhs == null ? 0 : tmp21_elvis_lhs) | 0;
    return result;
  };
  SpanStyle.prototype.hashCodeLayoutAffectingAttributes_3jfwjl_k$ = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.fontSize_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.fontWeight_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.fontStyle_1;
    var tmp_1;
    var tmp_2 = tmp2_safe_receiver;
    if ((tmp_2 == null ? null : new FontStyle(tmp_2)) == null) {
      tmp_1 = null;
    } else {
      tmp_1 = FontStyle__hashCode_impl_7qhg4w(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_1;
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_3 = imul(31, result);
    var tmp4_safe_receiver = this.fontSynthesis_1;
    var tmp_4;
    var tmp_5 = tmp4_safe_receiver;
    if ((tmp_5 == null ? null : new FontSynthesis(tmp_5)) == null) {
      tmp_4 = null;
    } else {
      tmp_4 = FontSynthesis__hashCode_impl_4wi11v(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_4;
    result = tmp_3 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_6 = imul(31, result);
    var tmp6_safe_receiver = this.fontFamily_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_6 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_7 = imul(31, result);
    var tmp8_safe_receiver = this.fontFeatureSettings_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : getStringHashCode(tmp8_safe_receiver);
    result = tmp_7 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.letterSpacing_1) | 0;
    var tmp_8 = imul(31, result);
    var tmp10_safe_receiver = this.baselineShift_1;
    var tmp_9;
    var tmp_10 = tmp10_safe_receiver;
    if ((tmp_10 == null ? null : new BaselineShift(tmp_10)) == null) {
      tmp_9 = null;
    } else {
      tmp_9 = BaselineShift__hashCode_impl_g0potx(tmp10_safe_receiver);
    }
    var tmp11_elvis_lhs = tmp_9;
    result = tmp_8 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    var tmp_11 = imul(31, result);
    var tmp12_safe_receiver = this.textGeometricTransform_1;
    var tmp13_elvis_lhs = tmp12_safe_receiver == null ? null : tmp12_safe_receiver.hashCode();
    result = tmp_11 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    var tmp_12 = imul(31, result);
    var tmp14_safe_receiver = this.localeList_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.hashCode();
    result = tmp_12 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.background_1) | 0;
    var tmp_13 = imul(31, result);
    var tmp16_safe_receiver = this.platformStyle_1;
    var tmp17_elvis_lhs = tmp16_safe_receiver == null ? null : tmp16_safe_receiver.hashCode();
    result = tmp_13 + (tmp17_elvis_lhs == null ? 0 : tmp17_elvis_lhs) | 0;
    return result;
  };
  SpanStyle.prototype.toString = function () {
    var tmp = 'SpanStyle(' + ('color=' + new Color(this.get_color_v34vrz_k$()) + ', ') + ('brush=' + this.get_brush_ipcjyp_k$() + ', ') + ('alpha=' + this.get_alpha_iooth1_k$() + ', ') + ('fontSize=' + new TextUnit(this.fontSize_1) + ', ') + ('fontWeight=' + this.fontWeight_1 + ', ');
    var tmp_0 = this.fontStyle_1;
    var tmp_1 = tmp + ('fontStyle=' + (tmp_0 == null ? null : new FontStyle(tmp_0)) + ', ');
    var tmp_2 = this.fontSynthesis_1;
    var tmp_3 = tmp_1 + ('fontSynthesis=' + (tmp_2 == null ? null : new FontSynthesis(tmp_2)) + ', ') + ('fontFamily=' + this.fontFamily_1 + ', ') + ('fontFeatureSettings=' + this.fontFeatureSettings_1 + ', ') + ('letterSpacing=' + new TextUnit(this.letterSpacing_1) + ', ');
    var tmp_4 = this.baselineShift_1;
    return tmp_3 + ('baselineShift=' + (tmp_4 == null ? null : new BaselineShift(tmp_4)) + ', ') + ('textGeometricTransform=' + this.textGeometricTransform_1 + ', ') + ('localeList=' + this.localeList_1 + ', ') + ('background=' + new Color(this.background_1) + ', ') + ('textDecoration=' + this.textDecoration_1 + ', ') + ('shadow=' + this.shadow_1 + ', ') + ('platformStyle=' + this.platformStyle_1) + ')';
  };
  SpanStyle.$metadata$ = classMeta('SpanStyle');
  function resolveSpanStyleDefaults(style) {
    init_properties_SpanStyle_kt_tje8dv();
    var tmp = style.textForegroundStyle_1.takeOrElse_9aen5f_k$(resolveSpanStyleDefaults$lambda);
    var tmp_0 = get_isUnspecified(style.fontSize_1) ? get_DefaultFontSize() : style.fontSize_1;
    var tmp0_elvis_lhs = style.fontWeight_1;
    var tmp_1 = tmp0_elvis_lhs == null ? Companion_getInstance_20().Normal_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.fontStyle_1;
    var tmp_2;
    var tmp_3 = tmp1_elvis_lhs;
    if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
      tmp_2 = Companion_getInstance_18().Normal_1;
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var tmp_4 = tmp_2;
    var tmp2_elvis_lhs = style.fontSynthesis_1;
    var tmp_5;
    var tmp_6 = tmp2_elvis_lhs;
    if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_19().All_1;
    } else {
      tmp_5 = tmp2_elvis_lhs;
    }
    var tmp_7 = tmp_5;
    var tmp3_elvis_lhs = style.fontFamily_1;
    var tmp_8 = tmp3_elvis_lhs == null ? Companion_getInstance_14().Default_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = style.fontFeatureSettings_1;
    var tmp_9 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_10;
    if (get_isUnspecified(style.letterSpacing_1)) {
      tmp_10 = get_DefaultLetterSpacing();
    } else {
      tmp_10 = style.letterSpacing_1;
    }
    var tmp_11 = tmp_10;
    var tmp5_elvis_lhs = style.baselineShift_1;
    var tmp_12;
    var tmp_13 = tmp5_elvis_lhs;
    if ((tmp_13 == null ? null : new BaselineShift(tmp_13)) == null) {
      tmp_12 = Companion_getInstance_31().None_1;
    } else {
      tmp_12 = tmp5_elvis_lhs;
    }
    var tmp_14 = tmp_12;
    var tmp6_elvis_lhs = style.textGeometricTransform_1;
    var tmp_15 = tmp6_elvis_lhs == null ? Companion_getInstance_40().None_1 : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = style.localeList_1;
    var tmp_16 = tmp7_elvis_lhs == null ? Companion_getInstance_30().get_current_jwi6j4_k$() : tmp7_elvis_lhs;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp0_takeOrElse = style.background_1;
    var tmp_17;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(tmp0_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance().Unspecified_1));
    if (tmp$ret$0) {
      tmp_17 = tmp0_takeOrElse;
    } else {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.text.resolveSpanStyleDefaults.<anonymous>' call
      tmp$ret$1 = get_DefaultBackgroundColor();
      tmp_17 = tmp$ret$1;
    }
    tmp$ret$2 = tmp_17;
    var tmp_18 = tmp$ret$2;
    var tmp8_elvis_lhs = style.textDecoration_1;
    var tmp_19 = tmp8_elvis_lhs == null ? Companion_getInstance_37().None_1 : tmp8_elvis_lhs;
    var tmp9_elvis_lhs = style.shadow_1;
    return new SpanStyle(tmp, tmp_0, tmp_1, tmp_4, tmp_7, tmp_8, tmp_9, tmp_11, tmp_14, tmp_15, tmp_16, tmp_18, tmp_19, tmp9_elvis_lhs == null ? Companion_getInstance_1().None_1 : tmp9_elvis_lhs, style.platformStyle_1);
  }
  function resolveSpanStyleDefaults$lambda() {
    init_properties_SpanStyle_kt_tje8dv();
    return Companion_getInstance_39().from_ofk88i_k$(get_DefaultColor());
  }
  var properties_initialized_SpanStyle_kt_cqbdlj;
  function init_properties_SpanStyle_kt_tje8dv() {
    if (properties_initialized_SpanStyle_kt_cqbdlj) {
    } else {
      properties_initialized_SpanStyle_kt_cqbdlj = true;
      DefaultFontSize = get_sp(14);
      DefaultLetterSpacing = get_sp(0);
      DefaultBackgroundColor = Companion_getInstance().Transparent_1;
      DefaultColor = Companion_getInstance().Black_1;
    }
  }
  function get_stringDelegate() {
    init_properties_String_kt_23g57b();
    return stringDelegate;
  }
  var stringDelegate;
  function PlatformStringDelegate() {
  }
  PlatformStringDelegate.$metadata$ = interfaceMeta('PlatformStringDelegate');
  var properties_initialized_String_kt_x0nxsd;
  function init_properties_String_kt_23g57b() {
    if (properties_initialized_String_kt_x0nxsd) {
    } else {
      properties_initialized_String_kt_x0nxsd = true;
      stringDelegate = ActualStringDelegate();
    }
  }
  function SynchronizedObject() {
  }
  SynchronizedObject.$metadata$ = classMeta('SynchronizedObject');
  function createSynchronizedObject() {
    return new SynchronizedObject();
  }
  function synchronized(lock, block) {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    tmp$ret$0 = block();
    return tmp$ret$0;
  }
  function fastFilter(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        if (predicate(item)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_1j60pz_k$(item);
        }
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastDistinctBy(_this__u8e3s4, selector) {
    // Inline function 'kotlin.contracts.contract' call
    var set = HashSet_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
    var target = ArrayList_init_$Create$_0(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.text.fastDistinctBy.<anonymous>' call
        var key = selector(item);
        if (set.add_1j60pz_k$(key)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_1j60pz_k$(item);
        }
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastFold(_this__u8e3s4, initial, operation) {
    // Inline function 'kotlin.contracts.contract' call
    var accumulator = initial;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.text.fastFold.<anonymous>' call
        accumulator = operation(accumulator, item);
      }
       while (inductionVariable <= last);
    return accumulator;
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastJoinToString$default(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform);
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_oz4qxs_k$(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.get_fkrdnv_k$(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.append_oz4qxs_k$(separator);
        }
        if (limit < 0 ? true : count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 ? count > limit : false) {
      buffer.append_oz4qxs_k$(truncated);
    }
    buffer.append_oz4qxs_k$(postfix);
    return buffer;
  }
  function fastJoinTo$default(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      separator = ', ';
    if (!(($mask0 & 4) === 0))
      prefix = '';
    if (!(($mask0 & 8) === 0))
      postfix = '';
    if (!(($mask0 & 16) === 0))
      limit = -1;
    if (!(($mask0 & 32) === 0))
      truncated = '...';
    if (!(($mask0 & 64) === 0))
      transform = null;
    return fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform);
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.append_oz4qxs_k$(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.append_oz4qxs_k$(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.append_t8oh9e_k$(element.value_1);
        } else {
          _this__u8e3s4.append_oz4qxs_k$(toString_0(element));
        }
      }
    }
  }
  function fastFlatMap(_this__u8e3s4, transform) {
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.text.fastFlatMap.<anonymous>' call
        var list = transform(item);
        addAll(target, list);
      }
       while (inductionVariable <= last);
    return target;
  }
  function TextLayoutResult(layoutInput, multiParagraph, size) {
    this.layoutInput_1 = layoutInput;
    this.multiParagraph_1 = multiParagraph;
    this.size_1 = size;
    this.firstBaseline_1 = this.multiParagraph_1.get_firstBaseline_s5430_k$();
    this.lastBaseline_1 = this.multiParagraph_1.get_lastBaseline_inuptw_k$();
    this.placeholderRects_1 = this.multiParagraph_1.placeholderRects_1;
    this.$stable_1 = 8;
  }
  TextLayoutResult.prototype.get_layoutInput_o7gjah_k$ = function () {
    return this.layoutInput_1;
  };
  TextLayoutResult.prototype.get_multiParagraph_xte3we_k$ = function () {
    return this.multiParagraph_1;
  };
  TextLayoutResult.prototype.get_size_yscczt_k$ = function () {
    return this.size_1;
  };
  TextLayoutResult.prototype.get_firstBaseline_s5430_k$ = function () {
    return this.firstBaseline_1;
  };
  TextLayoutResult.prototype.get_lastBaseline_inuptw_k$ = function () {
    return this.lastBaseline_1;
  };
  TextLayoutResult.prototype.get_didOverflowHeight_k18vi9_k$ = function () {
    return this.multiParagraph_1.didExceedMaxLines_1 ? true : _IntSize___get_height__impl__prv63b(this.size_1) < this.multiParagraph_1.height_1;
  };
  TextLayoutResult.prototype.get_didOverflowWidth_9kwej6_k$ = function () {
    return _IntSize___get_width__impl__d9yl4o(this.size_1) < this.multiParagraph_1.width_1;
  };
  TextLayoutResult.prototype.get_hasVisualOverflow_ocbqq5_k$ = function () {
    return this.get_didOverflowWidth_9kwej6_k$() ? true : this.get_didOverflowHeight_k18vi9_k$();
  };
  TextLayoutResult.prototype.get_placeholderRects_1ky2fv_k$ = function () {
    return this.placeholderRects_1;
  };
  TextLayoutResult.prototype.get_lineCount_lmaazy_k$ = function () {
    return this.multiParagraph_1.lineCount_1;
  };
  TextLayoutResult.prototype.getLineStart_504snr_k$ = function (lineIndex) {
    return this.multiParagraph_1.getLineStart_504snr_k$(lineIndex);
  };
  TextLayoutResult.prototype.getLineEnd_7kqxuy_k$ = function (lineIndex, visibleEnd) {
    return this.multiParagraph_1.getLineEnd_7kqxuy_k$(lineIndex, visibleEnd);
  };
  TextLayoutResult.prototype.getLineEnd$default_prmziz_k$ = function (lineIndex, visibleEnd, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      visibleEnd = false;
    return this.getLineEnd_7kqxuy_k$(lineIndex, visibleEnd);
  };
  TextLayoutResult.prototype.isLineEllipsized_r1ol1o_k$ = function (lineIndex) {
    return this.multiParagraph_1.isLineEllipsized_r1ol1o_k$(lineIndex);
  };
  TextLayoutResult.prototype.getLineTop_8a2w7q_k$ = function (lineIndex) {
    return this.multiParagraph_1.getLineTop_8a2w7q_k$(lineIndex);
  };
  TextLayoutResult.prototype.getLineBottom_spjtf0_k$ = function (lineIndex) {
    return this.multiParagraph_1.getLineBottom_spjtf0_k$(lineIndex);
  };
  TextLayoutResult.prototype.getLineLeft_w1obtc_k$ = function (lineIndex) {
    return this.multiParagraph_1.getLineLeft_w1obtc_k$(lineIndex);
  };
  TextLayoutResult.prototype.getLineRight_bo0e7j_k$ = function (lineIndex) {
    return this.multiParagraph_1.getLineRight_bo0e7j_k$(lineIndex);
  };
  TextLayoutResult.prototype.getLineForOffset_9a3vwv_k$ = function (offset) {
    return this.multiParagraph_1.getLineForOffset_9a3vwv_k$(offset);
  };
  TextLayoutResult.prototype.getLineForVerticalPosition_c1p2r4_k$ = function (vertical) {
    return this.multiParagraph_1.getLineForVerticalPosition_c1p2r4_k$(vertical);
  };
  TextLayoutResult.prototype.getHorizontalPosition_b8vvic_k$ = function (offset, usePrimaryDirection) {
    return this.multiParagraph_1.getHorizontalPosition_b8vvic_k$(offset, usePrimaryDirection);
  };
  TextLayoutResult.prototype.getParagraphDirection_x8sft2_k$ = function (offset) {
    return this.multiParagraph_1.getParagraphDirection_x8sft2_k$(offset);
  };
  TextLayoutResult.prototype.getBidiRunDirection_dqdnqj_k$ = function (offset) {
    return this.multiParagraph_1.getBidiRunDirection_dqdnqj_k$(offset);
  };
  TextLayoutResult.prototype.getOffsetForPosition_f04xcw_k$ = function (position) {
    return this.multiParagraph_1.getOffsetForPosition_f04xcw_k$(position);
  };
  TextLayoutResult.prototype.getBoundingBox_urudbk_k$ = function (offset) {
    return this.multiParagraph_1.getBoundingBox_urudbk_k$(offset);
  };
  TextLayoutResult.prototype.getWordBoundary_qx0177_k$ = function (offset) {
    return this.multiParagraph_1.getWordBoundary_qx0177_k$(offset);
  };
  TextLayoutResult.prototype.getCursorRect_x5c8fl_k$ = function (offset) {
    return this.multiParagraph_1.getCursorRect_x5c8fl_k$(offset);
  };
  TextLayoutResult.prototype.getPathForRange_i163f3_k$ = function (start, end) {
    return this.multiParagraph_1.getPathForRange_i163f3_k$(start, end);
  };
  TextLayoutResult.prototype.copy_wbg4xj_k$ = function (layoutInput, size) {
    return new TextLayoutResult(layoutInput, this.multiParagraph_1, size);
  };
  TextLayoutResult.prototype.copy$default_r9l2hm_k$ = function (layoutInput, size, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      layoutInput = this.layoutInput_1;
    if (!(($mask0 & 2) === 0))
      size = this.size_1;
    return this.copy_wbg4xj_k$(layoutInput, size);
  };
  TextLayoutResult.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutResult))
      return false;
    if (!this.layoutInput_1.equals(other.layoutInput_1))
      return false;
    if (!equals(this.multiParagraph_1, other.multiParagraph_1))
      return false;
    if (!equals(this.size_1, other.size_1))
      return false;
    if (!(this.firstBaseline_1 === other.firstBaseline_1))
      return false;
    if (!(this.lastBaseline_1 === other.lastBaseline_1))
      return false;
    if (!equals(this.placeholderRects_1, other.placeholderRects_1))
      return false;
    return true;
  };
  TextLayoutResult.prototype.hashCode = function () {
    var result = this.layoutInput_1.hashCode();
    result = imul(31, result) + hashCode(this.multiParagraph_1) | 0;
    result = imul(31, result) + IntSize__hashCode_impl_gm9mta(this.size_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.firstBaseline_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.lastBaseline_1) | 0;
    result = imul(31, result) + hashCode(this.placeholderRects_1) | 0;
    return result;
  };
  TextLayoutResult.prototype.toString = function () {
    return 'TextLayoutResult(' + ('layoutInput=' + this.layoutInput_1 + ', ') + ('multiParagraph=' + this.multiParagraph_1 + ', ') + ('size=' + new IntSize(this.size_1) + ', ') + ('firstBaseline=' + this.firstBaseline_1 + ', ') + ('lastBaseline=' + this.lastBaseline_1 + ', ') + ('placeholderRects=' + this.placeholderRects_1) + ')';
  };
  TextLayoutResult.$metadata$ = classMeta('TextLayoutResult');
  function _set__developerSuppliedResourceLoader__3zinn7($this, _set____db54di) {
    $this._developerSuppliedResourceLoader_1 = _set____db54di;
  }
  function _get__developerSuppliedResourceLoader__1ll3nl($this) {
    return $this._developerSuppliedResourceLoader_1;
  }
  function TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, constraints, $this) {
    TextLayoutInput.call($this, text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, createFontFamilyResolver(resourceLoader), constraints);
    return $this;
  }
  function TextLayoutInput_init_$Create$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, constraints) {
    return TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, constraints, Object.create(TextLayoutInput.prototype));
  }
  function TextLayoutInput_init_$Init$_0(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, $this) {
    TextLayoutInput.call($this, text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, null, fontFamilyResolver, constraints);
    return $this;
  }
  function TextLayoutInput_init_$Create$_0(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints) {
    return TextLayoutInput_init_$Init$_0(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, Object.create(TextLayoutInput.prototype));
  }
  function TextLayoutInput(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, fontFamilyResolver, constraints) {
    this.text_1 = text;
    this.style_1 = style;
    this.placeholders_1 = placeholders;
    this.maxLines_1 = maxLines;
    this.softWrap_1 = softWrap;
    this.overflow_1 = overflow;
    this.density_1 = density;
    this.layoutDirection_1 = layoutDirection;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.constraints_1 = constraints;
    this._developerSuppliedResourceLoader_1 = resourceLoader;
    this.$stable_1 = 8;
  }
  TextLayoutInput.prototype.get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  TextLayoutInput.prototype.get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  TextLayoutInput.prototype.get_placeholders_r4ppyh_k$ = function () {
    return this.placeholders_1;
  };
  TextLayoutInput.prototype.get_maxLines_pclpoc_k$ = function () {
    return this.maxLines_1;
  };
  TextLayoutInput.prototype.get_softWrap_a000bn_k$ = function () {
    return this.softWrap_1;
  };
  TextLayoutInput.prototype.get_overflow_rjdkkj_k$ = function () {
    return this.overflow_1;
  };
  TextLayoutInput.prototype.get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  TextLayoutInput.prototype.get_layoutDirection_7e37v0_k$ = function () {
    return this.layoutDirection_1;
  };
  TextLayoutInput.prototype.get_fontFamilyResolver_9o0fjy_k$ = function () {
    return this.fontFamilyResolver_1;
  };
  TextLayoutInput.prototype.get_constraints_khg0u2_k$ = function () {
    return this.constraints_1;
  };
  TextLayoutInput.prototype.get_resourceLoader_tankju_k$ = function () {
    var tmp0_elvis_lhs = this._developerSuppliedResourceLoader_1;
    return tmp0_elvis_lhs == null ? Companion_getInstance_10().from_6vr3se_k$(this.fontFamilyResolver_1) : tmp0_elvis_lhs;
  };
  TextLayoutInput.prototype.copy_w1u5jh_k$ = function (text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, constraints) {
    return new TextLayoutInput(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, this.fontFamilyResolver_1, constraints);
  };
  TextLayoutInput.prototype.copy$default_ejit2c_k$ = function (text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, constraints, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      text = this.text_1;
    if (!(($mask0 & 2) === 0))
      style = this.style_1;
    if (!(($mask0 & 4) === 0))
      placeholders = this.placeholders_1;
    if (!(($mask0 & 8) === 0))
      maxLines = this.maxLines_1;
    if (!(($mask0 & 16) === 0))
      softWrap = this.softWrap_1;
    if (!(($mask0 & 32) === 0))
      overflow = this.overflow_1;
    if (!(($mask0 & 64) === 0))
      density = this.density_1;
    if (!(($mask0 & 128) === 0))
      layoutDirection = this.layoutDirection_1;
    if (!(($mask0 & 256) === 0))
      resourceLoader = this.get_resourceLoader_tankju_k$();
    if (!(($mask0 & 512) === 0))
      constraints = this.constraints_1;
    return this.copy_w1u5jh_k$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, constraints);
  };
  TextLayoutInput.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutInput))
      return false;
    if (!this.text_1.equals(other.text_1))
      return false;
    if (!this.style_1.equals(other.style_1))
      return false;
    if (!equals(this.placeholders_1, other.placeholders_1))
      return false;
    if (!(this.maxLines_1 === other.maxLines_1))
      return false;
    if (!(this.softWrap_1 === other.softWrap_1))
      return false;
    if (!(this.overflow_1 === other.overflow_1))
      return false;
    if (!equals(this.density_1, other.density_1))
      return false;
    if (!this.layoutDirection_1.equals(other.layoutDirection_1))
      return false;
    if (!equals(this.fontFamilyResolver_1, other.fontFamilyResolver_1))
      return false;
    if (!equals(this.constraints_1, other.constraints_1))
      return false;
    return true;
  };
  TextLayoutInput.prototype.hashCode = function () {
    var result = this.text_1.hashCode();
    result = imul(31, result) + this.style_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.placeholders_1) | 0;
    result = imul(31, result) + this.maxLines_1 | 0;
    result = imul(31, result) + (this.softWrap_1 | 0) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.overflow_1) | 0;
    result = imul(31, result) + hashCode(this.density_1) | 0;
    result = imul(31, result) + this.layoutDirection_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.fontFamilyResolver_1) | 0;
    result = imul(31, result) + Constraints__hashCode_impl_ij7484(this.constraints_1) | 0;
    return result;
  };
  TextLayoutInput.prototype.toString = function () {
    return 'TextLayoutInput(' + ('text=' + this.text_1 + ', ') + ('style=' + this.style_1 + ', ') + ('placeholders=' + this.placeholders_1 + ', ') + ('maxLines=' + this.maxLines_1 + ', ') + ('softWrap=' + this.softWrap_1 + ', ') + ('overflow=' + new TextOverflow(this.overflow_1) + ', ') + ('density=' + this.density_1 + ', ') + ('layoutDirection=' + this.layoutDirection_1 + ', ') + ('fontFamilyResolver=' + this.fontFamilyResolver_1 + ', ') + ('constraints=' + new Constraints(this.constraints_1)) + ')';
  };
  TextLayoutInput.$metadata$ = classMeta('TextLayoutInput');
  function _get_fontFamilyResolver__s3uj2m($this) {
    return $this.fontFamilyResolver_1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.cache_1 = tmp$ret$0;
    this.lock_1 = createSynchronizedObject();
  }
  Companion_0.prototype.set_cache_yzktuo_k$ = function (_set____db54di) {
    this.cache_1 = _set____db54di;
  };
  Companion_0.prototype.get_cache_ipl461_k$ = function () {
    return this.cache_1;
  };
  Companion_0.prototype.get_lock_wopyt0_k$ = function () {
    return this.lock_1;
  };
  Companion_0.prototype.from_6vr3se_k$ = function (fontFamilyResolver) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.lock_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_safe_receiver = Companion_getInstance_10().cache_1.get_1mhr4y_k$(fontFamilyResolver);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var deprecatedBridgeFontResourceLoader = new DeprecatedBridgeFontResourceLoader(fontFamilyResolver);
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = Companion_getInstance_10().cache_1;
    tmp0_set.put_3mhbri_k$(fontFamilyResolver, deprecatedBridgeFontResourceLoader);
    return deprecatedBridgeFontResourceLoader;
    tmp$ret$2 = tmp$ret$1;
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_10() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function DeprecatedBridgeFontResourceLoader(fontFamilyResolver) {
    Companion_getInstance_10();
    this.fontFamilyResolver_1 = fontFamilyResolver;
  }
  DeprecatedBridgeFontResourceLoader.prototype.load_oj7ae9_k$ = function (font) {
    var tmp = toFontFamily(font);
    var tmp_0 = font.get_weight_lbhkzl_k$();
    var tmp_1 = font.get_style_e2e1yp_k$();
    return this.fontFamilyResolver_1.resolve$default_g9k5q4_k$(tmp, tmp_0, tmp_1, null, 8, null).get_value_j01efc_k$();
  };
  DeprecatedBridgeFontResourceLoader.$metadata$ = classMeta('DeprecatedBridgeFontResourceLoader', [ResourceLoader]);
  function get_DefaultCacheSize() {
    return DefaultCacheSize;
  }
  var DefaultCacheSize;
  function TextPainter() {
    TextPainter_instance = this;
    this.$stable_1 = 0;
  }
  TextPainter.prototype.paint_ct2xtf_k$ = function (canvas, textLayoutResult) {
    var needClipping = textLayoutResult.get_hasVisualOverflow_ocbqq5_k$() ? !(textLayoutResult.layoutInput_1.overflow_1 === Companion_getInstance_42().Visible_1) : false;
    if (needClipping) {
      var width = _IntSize___get_width__impl__d9yl4o(textLayoutResult.size_1);
      var height = _IntSize___get_height__impl__prv63b(textLayoutResult.size_1);
      var bounds = Rect(Companion_getInstance_2().Zero_1, Size(width, height));
      canvas.save_erlm4_k$();
      canvas.clipRect$default_rf6xmh_k$(bounds, null, 2, null);
    }
    try {
      var brush = textLayoutResult.layoutInput_1.style_1.get_brush_ipcjyp_k$();
      if (!(brush == null)) {
        textLayoutResult.multiParagraph_1.paint_kx3vu1_k$(canvas, brush, textLayoutResult.layoutInput_1.style_1.get_alpha_iooth1_k$(), textLayoutResult.layoutInput_1.style_1.get_shadow_jgtb8p_k$(), textLayoutResult.layoutInput_1.style_1.get_textDecoration_itgjwm_k$());
      } else {
        textLayoutResult.multiParagraph_1.paint_aoyx3m_k$(canvas, textLayoutResult.layoutInput_1.style_1.get_color_v34vrz_k$(), textLayoutResult.layoutInput_1.style_1.get_shadow_jgtb8p_k$(), textLayoutResult.layoutInput_1.style_1.get_textDecoration_itgjwm_k$());
      }
    }finally {
      if (needClipping) {
        canvas.restore_a2id37_k$();
      }
    }
  };
  TextPainter.$metadata$ = objectMeta('TextPainter');
  var TextPainter_instance;
  function TextPainter_getInstance() {
    if (TextPainter_instance == null)
      new TextPainter();
    return TextPainter_instance;
  }
  function _TextRange___init__impl__h6icbt(packedValue) {
    return packedValue;
  }
  function _get_packedValue__aj623s($this) {
    return $this;
  }
  function _TextRange___get_start__impl__ww4t90($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var tmp0_unpackInt1 = _get_packedValue__aj623s($this);
    tmp$ret$0 = tmp0_unpackInt1.shr_wjue3g_k$(32).toInt_1tsl84_k$();
    return tmp$ret$0;
  }
  function _TextRange___get_end__impl__gcdxpp($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var tmp0_unpackInt2 = _get_packedValue__aj623s($this);
    tmp$ret$0 = tmp0_unpackInt2.and_jhajnj_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    return tmp$ret$0;
  }
  function _TextRange___get_min__impl__uu95c4($this) {
    return _TextRange___get_start__impl__ww4t90($this) > _TextRange___get_end__impl__gcdxpp($this) ? _TextRange___get_end__impl__gcdxpp($this) : _TextRange___get_start__impl__ww4t90($this);
  }
  function _TextRange___get_max__impl__owm8m($this) {
    return _TextRange___get_start__impl__ww4t90($this) > _TextRange___get_end__impl__gcdxpp($this) ? _TextRange___get_start__impl__ww4t90($this) : _TextRange___get_end__impl__gcdxpp($this);
  }
  function _TextRange___get_collapsed__impl__cilesp($this) {
    return _TextRange___get_start__impl__ww4t90($this) === _TextRange___get_end__impl__gcdxpp($this);
  }
  function _TextRange___get_reversed__impl__emhnbm($this) {
    return _TextRange___get_start__impl__ww4t90($this) > _TextRange___get_end__impl__gcdxpp($this);
  }
  function _TextRange___get_length__impl__7qes3a($this) {
    return _TextRange___get_max__impl__owm8m($this) - _TextRange___get_min__impl__uu95c4($this) | 0;
  }
  function TextRange__intersects_impl_mhtn49($this, other) {
    return _TextRange___get_min__impl__uu95c4($this) < _TextRange___get_max__impl__owm8m(other) ? _TextRange___get_min__impl__uu95c4(other) < _TextRange___get_max__impl__owm8m($this) : false;
  }
  function TextRange__contains_impl_ws45z2($this, other) {
    return _TextRange___get_min__impl__uu95c4($this) <= _TextRange___get_min__impl__uu95c4(other) ? _TextRange___get_max__impl__owm8m(other) <= _TextRange___get_max__impl__owm8m($this) : false;
  }
  function TextRange__contains_impl_ws45z2_0($this, offset) {
    var containsLower = _TextRange___get_min__impl__uu95c4($this);
    return offset < _TextRange___get_max__impl__owm8m($this) ? containsLower <= offset : false;
  }
  function TextRange__toString_impl_pqvlzl($this) {
    return 'TextRange(' + _TextRange___get_start__impl__ww4t90($this) + ', ' + _TextRange___get_end__impl__gcdxpp($this) + ')';
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.Zero_1 = TextRange_1(0);
  }
  Companion_1.prototype.get_Zero_e8si87_k$ = function () {
    return this.Zero_1;
  };
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_11() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function TextRange__hashCode_impl_3zpp6q($this) {
    return $this.hashCode();
  }
  function TextRange__equals_impl_hkkmea($this, other) {
    if (!(other instanceof TextRange))
      return false;
    var tmp0_other_with_cast = other instanceof TextRange ? other.packedValue_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextRange(packedValue) {
    Companion_getInstance_11();
    this.packedValue_1 = packedValue;
  }
  TextRange.prototype.toString = function () {
    return TextRange__toString_impl_pqvlzl(this.packedValue_1);
  };
  TextRange.prototype.hashCode = function () {
    return TextRange__hashCode_impl_3zpp6q(this.packedValue_1);
  };
  TextRange.prototype.equals = function (other) {
    return TextRange__equals_impl_hkkmea(this.packedValue_1, other);
  };
  TextRange.$metadata$ = classMeta('TextRange');
  function TextRange_0(start, end) {
    return _TextRange___init__impl__h6icbt(packWithCheck(start, end));
  }
  function TextRange_1(index) {
    return TextRange_0(index, index);
  }
  function packWithCheck(start, end) {
    // Inline function 'kotlin.require' call
    var tmp0_require = start >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.packWithCheck.<anonymous>' call
      tmp$ret$0 = 'start cannot be negative. [start: ' + start + ', end: ' + end + ']';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = end >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.text.packWithCheck.<anonymous>' call
      tmp$ret$1 = 'end cannot be negative. [start: ' + start + ', end: ' + end + ']';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$2 = toLong(start).shl_po5ip6_k$(32).or_s401rn_k$(toLong(end).and_jhajnj_k$(new Long(-1, 0)));
    return tmp$ret$2;
  }
  function constrain(_this__u8e3s4, minimumValue, maximumValue) {
    var newStart = coerceIn(_TextRange___get_start__impl__ww4t90(_this__u8e3s4), minimumValue, maximumValue);
    var newEnd = coerceIn(_TextRange___get_end__impl__gcdxpp(_this__u8e3s4), minimumValue, maximumValue);
    if (!(newStart === _TextRange___get_start__impl__ww4t90(_this__u8e3s4)) ? true : !(newEnd === _TextRange___get_end__impl__gcdxpp(_this__u8e3s4))) {
      return TextRange_0(newStart, newEnd);
    }
    return _this__u8e3s4;
  }
  function TextStyle_init_$Init$(spanStyle, paragraphStyle, platformStyle, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      platformStyle = null;
    TextStyle.call($this, spanStyle, paragraphStyle, platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_0(spanStyle, paragraphStyle, platformStyle, $mask0, $marker) {
    return TextStyle_init_$Init$(spanStyle, paragraphStyle, platformStyle, $mask0, $marker, Object.create(TextStyle.prototype));
  }
  function TextStyle_init_$Init$_0(spanStyle, paragraphStyle, $this) {
    TextStyle.call($this, spanStyle, paragraphStyle, createPlatformTextStyleInternal(spanStyle.platformStyle_1, paragraphStyle.platformStyle_1));
    return $this;
  }
  function TextStyle_init_$Create$_1(spanStyle, paragraphStyle) {
    return TextStyle_init_$Init$_0(spanStyle, paragraphStyle, Object.create(TextStyle.prototype));
  }
  function TextStyle_init_$Init$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, $this) {
    TextStyle.call($this, SpanStyle_init_$Create$_2(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, null), new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, null, null, null, null), null);
    return $this;
  }
  function TextStyle_init_$Create$_2(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent) {
    return TextStyle_init_$Init$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, Object.create(TextStyle.prototype));
  }
  function TextStyle_init_$Init$_2(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      color = Companion_getInstance().Unspecified_1;
    if (!(($mask0 & 2) === 0))
      fontSize = Companion_getInstance_0().Unspecified_1;
    if (!(($mask0 & 4) === 0))
      fontWeight = null;
    if (!(($mask0 & 8) === 0))
      fontStyle = null;
    if (!(($mask0 & 16) === 0))
      fontSynthesis = null;
    if (!(($mask0 & 32) === 0))
      fontFamily = null;
    if (!(($mask0 & 64) === 0))
      fontFeatureSettings = null;
    if (!(($mask0 & 128) === 0))
      letterSpacing = Companion_getInstance_0().Unspecified_1;
    if (!(($mask0 & 256) === 0))
      baselineShift = null;
    if (!(($mask0 & 512) === 0))
      textGeometricTransform = null;
    if (!(($mask0 & 1024) === 0))
      localeList = null;
    if (!(($mask0 & 2048) === 0))
      background = Companion_getInstance().Unspecified_1;
    if (!(($mask0 & 4096) === 0))
      textDecoration = null;
    if (!(($mask0 & 8192) === 0))
      shadow = null;
    if (!(($mask0 & 16384) === 0))
      textAlign = null;
    if (!(($mask0 & 32768) === 0))
      textDirection = null;
    if (!(($mask0 & 65536) === 0))
      lineHeight = Companion_getInstance_0().Unspecified_1;
    if (!(($mask0 & 131072) === 0))
      textIndent = null;
    TextStyle_init_$Init$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, $this);
    return $this;
  }
  function TextStyle_init_$Create$_3(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, $mask0, $marker) {
    return TextStyle_init_$Init$_2(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, $mask0, $marker, Object.create(TextStyle.prototype));
  }
  function TextStyle_init_$Init$_3(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, $this) {
    var tmp0_safe_receiver = platformStyle;
    var tmp = SpanStyle_init_$Create$_2(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.spanStyle_1);
    var tmp1_safe_receiver = platformStyle;
    TextStyle.call($this, tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.paragraphStyle_1, lineHeightStyle, null, null), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_4(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle) {
    return TextStyle_init_$Init$_3(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, Object.create(TextStyle.prototype));
  }
  function TextStyle_init_$Init$_4(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      color = Companion_getInstance().Unspecified_1;
    if (!(($mask0 & 2) === 0))
      fontSize = Companion_getInstance_0().Unspecified_1;
    if (!(($mask0 & 4) === 0))
      fontWeight = null;
    if (!(($mask0 & 8) === 0))
      fontStyle = null;
    if (!(($mask0 & 16) === 0))
      fontSynthesis = null;
    if (!(($mask0 & 32) === 0))
      fontFamily = null;
    if (!(($mask0 & 64) === 0))
      fontFeatureSettings = null;
    if (!(($mask0 & 128) === 0))
      letterSpacing = Companion_getInstance_0().Unspecified_1;
    if (!(($mask0 & 256) === 0))
      baselineShift = null;
    if (!(($mask0 & 512) === 0))
      textGeometricTransform = null;
    if (!(($mask0 & 1024) === 0))
      localeList = null;
    if (!(($mask0 & 2048) === 0))
      background = Companion_getInstance().Unspecified_1;
    if (!(($mask0 & 4096) === 0))
      textDecoration = null;
    if (!(($mask0 & 8192) === 0))
      shadow = null;
    if (!(($mask0 & 16384) === 0))
      textAlign = null;
    if (!(($mask0 & 32768) === 0))
      textDirection = null;
    if (!(($mask0 & 65536) === 0))
      lineHeight = Companion_getInstance_0().Unspecified_1;
    if (!(($mask0 & 131072) === 0))
      textIndent = null;
    if (!(($mask0 & 262144) === 0))
      platformStyle = null;
    if (!(($mask0 & 524288) === 0))
      lineHeightStyle = null;
    TextStyle_init_$Init$_3(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, $this);
    return $this;
  }
  function TextStyle_init_$Create$_5(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, $mask0, $marker) {
    return TextStyle_init_$Init$_4(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, $mask0, $marker, Object.create(TextStyle.prototype));
  }
  function TextStyle_init_$Init$_5(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $this) {
    var tmp0_safe_receiver = platformStyle;
    var tmp = SpanStyle_init_$Create$_2(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.spanStyle_1);
    var tmp1_safe_receiver = platformStyle;
    TextStyle.call($this, tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.paragraphStyle_1, lineHeightStyle, lineBreak, hyphens), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_6(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens) {
    return TextStyle_init_$Init$_5(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, Object.create(TextStyle.prototype));
  }
  function TextStyle_init_$Init$_6(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      color = Companion_getInstance().Unspecified_1;
    if (!(($mask0 & 2) === 0))
      fontSize = Companion_getInstance_0().Unspecified_1;
    if (!(($mask0 & 4) === 0))
      fontWeight = null;
    if (!(($mask0 & 8) === 0))
      fontStyle = null;
    if (!(($mask0 & 16) === 0))
      fontSynthesis = null;
    if (!(($mask0 & 32) === 0))
      fontFamily = null;
    if (!(($mask0 & 64) === 0))
      fontFeatureSettings = null;
    if (!(($mask0 & 128) === 0))
      letterSpacing = Companion_getInstance_0().Unspecified_1;
    if (!(($mask0 & 256) === 0))
      baselineShift = null;
    if (!(($mask0 & 512) === 0))
      textGeometricTransform = null;
    if (!(($mask0 & 1024) === 0))
      localeList = null;
    if (!(($mask0 & 2048) === 0))
      background = Companion_getInstance().Unspecified_1;
    if (!(($mask0 & 4096) === 0))
      textDecoration = null;
    if (!(($mask0 & 8192) === 0))
      shadow = null;
    if (!(($mask0 & 16384) === 0))
      textAlign = null;
    if (!(($mask0 & 32768) === 0))
      textDirection = null;
    if (!(($mask0 & 65536) === 0))
      lineHeight = Companion_getInstance_0().Unspecified_1;
    if (!(($mask0 & 131072) === 0))
      textIndent = null;
    if (!(($mask0 & 262144) === 0))
      platformStyle = null;
    if (!(($mask0 & 524288) === 0))
      lineHeightStyle = null;
    if (!(($mask0 & 1048576) === 0))
      lineBreak = null;
    if (!(($mask0 & 2097152) === 0))
      hyphens = null;
    TextStyle_init_$Init$_5(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $this);
    return $this;
  }
  function TextStyle_init_$Create$_7(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $mask0, $marker) {
    return TextStyle_init_$Init$_6(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $mask0, $marker, Object.create(TextStyle.prototype));
  }
  function TextStyle_init_$Init$_7(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $this) {
    var tmp0_safe_receiver = platformStyle;
    var tmp = SpanStyle_init_$Create$_4(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.spanStyle_1);
    var tmp1_safe_receiver = platformStyle;
    TextStyle.call($this, tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.paragraphStyle_1, lineHeightStyle, lineBreak, hyphens), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_8(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens) {
    return TextStyle_init_$Init$_7(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, Object.create(TextStyle.prototype));
  }
  function TextStyle_init_$Init$_8(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0)) {
      FloatCompanionObject_getInstance();
      alpha = NaN;
    }
    if (!(($mask0 & 4) === 0))
      fontSize = Companion_getInstance_0().Unspecified_1;
    if (!(($mask0 & 8) === 0))
      fontWeight = null;
    if (!(($mask0 & 16) === 0))
      fontStyle = null;
    if (!(($mask0 & 32) === 0))
      fontSynthesis = null;
    if (!(($mask0 & 64) === 0))
      fontFamily = null;
    if (!(($mask0 & 128) === 0))
      fontFeatureSettings = null;
    if (!(($mask0 & 256) === 0))
      letterSpacing = Companion_getInstance_0().Unspecified_1;
    if (!(($mask0 & 512) === 0))
      baselineShift = null;
    if (!(($mask0 & 1024) === 0))
      textGeometricTransform = null;
    if (!(($mask0 & 2048) === 0))
      localeList = null;
    if (!(($mask0 & 4096) === 0))
      background = Companion_getInstance().Unspecified_1;
    if (!(($mask0 & 8192) === 0))
      textDecoration = null;
    if (!(($mask0 & 16384) === 0))
      shadow = null;
    if (!(($mask0 & 32768) === 0))
      textAlign = null;
    if (!(($mask0 & 65536) === 0))
      textDirection = null;
    if (!(($mask0 & 131072) === 0))
      lineHeight = Companion_getInstance_0().Unspecified_1;
    if (!(($mask0 & 262144) === 0))
      textIndent = null;
    if (!(($mask0 & 524288) === 0))
      platformStyle = null;
    if (!(($mask0 & 1048576) === 0))
      lineHeightStyle = null;
    if (!(($mask0 & 2097152) === 0))
      lineBreak = null;
    if (!(($mask0 & 4194304) === 0))
      hyphens = null;
    TextStyle_init_$Init$_7(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $this);
    return $this;
  }
  function TextStyle_init_$Create$_9(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $mask0, $marker) {
    return TextStyle_init_$Init$_8(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $mask0, $marker, Object.create(TextStyle.prototype));
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    tmp.Default_1 = TextStyle_init_$Create$_3(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 262143, null);
  }
  Companion_2.prototype.get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_12() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function TextStyle(spanStyle, paragraphStyle, platformStyle) {
    Companion_getInstance_12();
    this.spanStyle_1 = spanStyle;
    this.paragraphStyle_1 = paragraphStyle;
    this.platformStyle_1 = platformStyle;
  }
  TextStyle.prototype.get_spanStyle_2b836q_k$ = function () {
    return this.spanStyle_1;
  };
  TextStyle.prototype.get_paragraphStyle_27utpo_k$ = function () {
    return this.paragraphStyle_1;
  };
  TextStyle.prototype.get_platformStyle_7i053p_k$ = function () {
    return this.platformStyle_1;
  };
  TextStyle.prototype.toSpanStyle_l454tw_k$ = function () {
    return this.spanStyle_1;
  };
  TextStyle.prototype.toParagraphStyle_zfuegy_k$ = function () {
    return this.paragraphStyle_1;
  };
  TextStyle.prototype.merge_axh15w_k$ = function (other) {
    if (other == null ? true : equals(other, Companion_getInstance_12().Default_1))
      return this;
    return TextStyle_init_$Create$_1(this.toSpanStyle_l454tw_k$().merge_m0r35z_k$(other.toSpanStyle_l454tw_k$()), this.toParagraphStyle_zfuegy_k$().merge_y8afnf_k$(other.toParagraphStyle_zfuegy_k$()));
  };
  TextStyle.prototype.merge$default_5073op_k$ = function (other, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      other = null;
    return this.merge_axh15w_k$(other);
  };
  TextStyle.prototype.merge_pkm62_k$ = function (other) {
    return TextStyle_init_$Create$_1(this.toSpanStyle_l454tw_k$().merge_m0r35z_k$(other), this.toParagraphStyle_zfuegy_k$());
  };
  TextStyle.prototype.merge_lt4ge4_k$ = function (other) {
    return TextStyle_init_$Create$_1(this.toSpanStyle_l454tw_k$(), this.toParagraphStyle_zfuegy_k$().merge_y8afnf_k$(other));
  };
  TextStyle.prototype.plus_svcnvj_k$ = function (other) {
    return this.merge_axh15w_k$(other);
  };
  TextStyle.prototype.plus_3d6656_k$ = function (other) {
    return this.merge_lt4ge4_k$(other);
  };
  TextStyle.prototype.plus_mcrows_k$ = function (other) {
    return this.merge_pkm62_k$(other);
  };
  TextStyle.prototype.copy_byi62l_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent) {
    var tmp;
    if (equals(color, this.spanStyle_1.get_color_v34vrz_k$())) {
      tmp = this.spanStyle_1.textForegroundStyle_1;
    } else {
      tmp = Companion_getInstance_39().from_ofk88i_k$(color);
    }
    return new TextStyle(new SpanStyle(tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, this.spanStyle_1.platformStyle_1), new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, this.paragraphStyle_1.platformStyle_1, this.get_lineHeightStyle_fzu4s3_k$(), this.get_lineBreak_lmsita_k$(), this.get_hyphens_o4a26w_k$()), this.platformStyle_1);
  };
  TextStyle.prototype.copy$default_m6tbq3_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      color = this.spanStyle_1.get_color_v34vrz_k$();
    if (!(($mask0 & 2) === 0))
      fontSize = this.spanStyle_1.fontSize_1;
    if (!(($mask0 & 4) === 0))
      fontWeight = this.spanStyle_1.fontWeight_1;
    if (!(($mask0 & 8) === 0))
      fontStyle = this.spanStyle_1.fontStyle_1;
    if (!(($mask0 & 16) === 0))
      fontSynthesis = this.spanStyle_1.fontSynthesis_1;
    if (!(($mask0 & 32) === 0))
      fontFamily = this.spanStyle_1.fontFamily_1;
    if (!(($mask0 & 64) === 0))
      fontFeatureSettings = this.spanStyle_1.fontFeatureSettings_1;
    if (!(($mask0 & 128) === 0))
      letterSpacing = this.spanStyle_1.letterSpacing_1;
    if (!(($mask0 & 256) === 0))
      baselineShift = this.spanStyle_1.baselineShift_1;
    if (!(($mask0 & 512) === 0))
      textGeometricTransform = this.spanStyle_1.textGeometricTransform_1;
    if (!(($mask0 & 1024) === 0))
      localeList = this.spanStyle_1.localeList_1;
    if (!(($mask0 & 2048) === 0))
      background = this.spanStyle_1.background_1;
    if (!(($mask0 & 4096) === 0))
      textDecoration = this.spanStyle_1.textDecoration_1;
    if (!(($mask0 & 8192) === 0))
      shadow = this.spanStyle_1.shadow_1;
    if (!(($mask0 & 16384) === 0))
      textAlign = this.paragraphStyle_1.textAlign_1;
    if (!(($mask0 & 32768) === 0))
      textDirection = this.paragraphStyle_1.textDirection_1;
    if (!(($mask0 & 65536) === 0))
      lineHeight = this.paragraphStyle_1.lineHeight_1;
    if (!(($mask0 & 131072) === 0))
      textIndent = this.paragraphStyle_1.textIndent_1;
    return this.copy_byi62l_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent);
  };
  TextStyle.prototype.copy_ejjj43_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle) {
    var tmp;
    if (equals(color, this.spanStyle_1.get_color_v34vrz_k$())) {
      tmp = this.spanStyle_1.textForegroundStyle_1;
    } else {
      tmp = Companion_getInstance_39().from_ofk88i_k$(color);
    }
    var tmp_0 = tmp;
    var tmp0_safe_receiver = platformStyle;
    var tmp_1 = new SpanStyle(tmp_0, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.spanStyle_1);
    var tmp1_safe_receiver = platformStyle;
    return new TextStyle(tmp_1, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.paragraphStyle_1, lineHeightStyle, this.get_lineBreak_lmsita_k$(), this.get_hyphens_o4a26w_k$()), platformStyle);
  };
  TextStyle.prototype.copy$default_qnawkr_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      color = this.spanStyle_1.get_color_v34vrz_k$();
    if (!(($mask0 & 2) === 0))
      fontSize = this.spanStyle_1.fontSize_1;
    if (!(($mask0 & 4) === 0))
      fontWeight = this.spanStyle_1.fontWeight_1;
    if (!(($mask0 & 8) === 0))
      fontStyle = this.spanStyle_1.fontStyle_1;
    if (!(($mask0 & 16) === 0))
      fontSynthesis = this.spanStyle_1.fontSynthesis_1;
    if (!(($mask0 & 32) === 0))
      fontFamily = this.spanStyle_1.fontFamily_1;
    if (!(($mask0 & 64) === 0))
      fontFeatureSettings = this.spanStyle_1.fontFeatureSettings_1;
    if (!(($mask0 & 128) === 0))
      letterSpacing = this.spanStyle_1.letterSpacing_1;
    if (!(($mask0 & 256) === 0))
      baselineShift = this.spanStyle_1.baselineShift_1;
    if (!(($mask0 & 512) === 0))
      textGeometricTransform = this.spanStyle_1.textGeometricTransform_1;
    if (!(($mask0 & 1024) === 0))
      localeList = this.spanStyle_1.localeList_1;
    if (!(($mask0 & 2048) === 0))
      background = this.spanStyle_1.background_1;
    if (!(($mask0 & 4096) === 0))
      textDecoration = this.spanStyle_1.textDecoration_1;
    if (!(($mask0 & 8192) === 0))
      shadow = this.spanStyle_1.shadow_1;
    if (!(($mask0 & 16384) === 0))
      textAlign = this.paragraphStyle_1.textAlign_1;
    if (!(($mask0 & 32768) === 0))
      textDirection = this.paragraphStyle_1.textDirection_1;
    if (!(($mask0 & 65536) === 0))
      lineHeight = this.paragraphStyle_1.lineHeight_1;
    if (!(($mask0 & 131072) === 0))
      textIndent = this.paragraphStyle_1.textIndent_1;
    if (!(($mask0 & 262144) === 0))
      platformStyle = this.platformStyle_1;
    if (!(($mask0 & 524288) === 0))
      lineHeightStyle = this.paragraphStyle_1.lineHeightStyle_1;
    return this.copy_ejjj43_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle);
  };
  TextStyle.prototype.copy_puho4h_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens) {
    var tmp;
    if (equals(color, this.spanStyle_1.get_color_v34vrz_k$())) {
      tmp = this.spanStyle_1.textForegroundStyle_1;
    } else {
      tmp = Companion_getInstance_39().from_ofk88i_k$(color);
    }
    var tmp_0 = tmp;
    var tmp0_safe_receiver = platformStyle;
    var tmp_1 = new SpanStyle(tmp_0, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.spanStyle_1);
    var tmp1_safe_receiver = platformStyle;
    return new TextStyle(tmp_1, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.paragraphStyle_1, lineHeightStyle, lineBreak, hyphens), platformStyle);
  };
  TextStyle.prototype.copy$default_wqem4p_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      color = this.spanStyle_1.get_color_v34vrz_k$();
    if (!(($mask0 & 2) === 0))
      fontSize = this.spanStyle_1.fontSize_1;
    if (!(($mask0 & 4) === 0))
      fontWeight = this.spanStyle_1.fontWeight_1;
    if (!(($mask0 & 8) === 0))
      fontStyle = this.spanStyle_1.fontStyle_1;
    if (!(($mask0 & 16) === 0))
      fontSynthesis = this.spanStyle_1.fontSynthesis_1;
    if (!(($mask0 & 32) === 0))
      fontFamily = this.spanStyle_1.fontFamily_1;
    if (!(($mask0 & 64) === 0))
      fontFeatureSettings = this.spanStyle_1.fontFeatureSettings_1;
    if (!(($mask0 & 128) === 0))
      letterSpacing = this.spanStyle_1.letterSpacing_1;
    if (!(($mask0 & 256) === 0))
      baselineShift = this.spanStyle_1.baselineShift_1;
    if (!(($mask0 & 512) === 0))
      textGeometricTransform = this.spanStyle_1.textGeometricTransform_1;
    if (!(($mask0 & 1024) === 0))
      localeList = this.spanStyle_1.localeList_1;
    if (!(($mask0 & 2048) === 0))
      background = this.spanStyle_1.background_1;
    if (!(($mask0 & 4096) === 0))
      textDecoration = this.spanStyle_1.textDecoration_1;
    if (!(($mask0 & 8192) === 0))
      shadow = this.spanStyle_1.shadow_1;
    if (!(($mask0 & 16384) === 0))
      textAlign = this.paragraphStyle_1.textAlign_1;
    if (!(($mask0 & 32768) === 0))
      textDirection = this.paragraphStyle_1.textDirection_1;
    if (!(($mask0 & 65536) === 0))
      lineHeight = this.paragraphStyle_1.lineHeight_1;
    if (!(($mask0 & 131072) === 0))
      textIndent = this.paragraphStyle_1.textIndent_1;
    if (!(($mask0 & 262144) === 0))
      platformStyle = this.platformStyle_1;
    if (!(($mask0 & 524288) === 0))
      lineHeightStyle = this.paragraphStyle_1.lineHeightStyle_1;
    if (!(($mask0 & 1048576) === 0))
      lineBreak = this.paragraphStyle_1.lineBreak_1;
    if (!(($mask0 & 2097152) === 0))
      hyphens = this.paragraphStyle_1.hyphens_1;
    return this.copy_puho4h_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens);
  };
  TextStyle.prototype.copy_hu401z_k$ = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens) {
    var tmp0_safe_receiver = platformStyle;
    var tmp = SpanStyle_init_$Create$_4(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.spanStyle_1);
    var tmp1_safe_receiver = platformStyle;
    return new TextStyle(tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.paragraphStyle_1, lineHeightStyle, lineBreak, hyphens), platformStyle);
  };
  TextStyle.prototype.copy$default_r797oc_k$ = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      alpha = this.spanStyle_1.get_alpha_iooth1_k$();
    if (!(($mask0 & 4) === 0))
      fontSize = this.spanStyle_1.fontSize_1;
    if (!(($mask0 & 8) === 0))
      fontWeight = this.spanStyle_1.fontWeight_1;
    if (!(($mask0 & 16) === 0))
      fontStyle = this.spanStyle_1.fontStyle_1;
    if (!(($mask0 & 32) === 0))
      fontSynthesis = this.spanStyle_1.fontSynthesis_1;
    if (!(($mask0 & 64) === 0))
      fontFamily = this.spanStyle_1.fontFamily_1;
    if (!(($mask0 & 128) === 0))
      fontFeatureSettings = this.spanStyle_1.fontFeatureSettings_1;
    if (!(($mask0 & 256) === 0))
      letterSpacing = this.spanStyle_1.letterSpacing_1;
    if (!(($mask0 & 512) === 0))
      baselineShift = this.spanStyle_1.baselineShift_1;
    if (!(($mask0 & 1024) === 0))
      textGeometricTransform = this.spanStyle_1.textGeometricTransform_1;
    if (!(($mask0 & 2048) === 0))
      localeList = this.spanStyle_1.localeList_1;
    if (!(($mask0 & 4096) === 0))
      background = this.spanStyle_1.background_1;
    if (!(($mask0 & 8192) === 0))
      textDecoration = this.spanStyle_1.textDecoration_1;
    if (!(($mask0 & 16384) === 0))
      shadow = this.spanStyle_1.shadow_1;
    if (!(($mask0 & 32768) === 0))
      textAlign = this.paragraphStyle_1.textAlign_1;
    if (!(($mask0 & 65536) === 0))
      textDirection = this.paragraphStyle_1.textDirection_1;
    if (!(($mask0 & 131072) === 0))
      lineHeight = this.paragraphStyle_1.lineHeight_1;
    if (!(($mask0 & 262144) === 0))
      textIndent = this.paragraphStyle_1.textIndent_1;
    if (!(($mask0 & 524288) === 0))
      platformStyle = this.platformStyle_1;
    if (!(($mask0 & 1048576) === 0))
      lineHeightStyle = this.paragraphStyle_1.lineHeightStyle_1;
    if (!(($mask0 & 2097152) === 0))
      lineBreak = this.paragraphStyle_1.lineBreak_1;
    if (!(($mask0 & 4194304) === 0))
      hyphens = this.paragraphStyle_1.hyphens_1;
    return this.copy_hu401z_k$(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens);
  };
  TextStyle.prototype.get_brush_ipcjyp_k$ = function () {
    return this.spanStyle_1.get_brush_ipcjyp_k$();
  };
  TextStyle.prototype.get_color_v34vrz_k$ = function () {
    return this.spanStyle_1.get_color_v34vrz_k$();
  };
  TextStyle.prototype.get_alpha_iooth1_k$ = function () {
    return this.spanStyle_1.get_alpha_iooth1_k$();
  };
  TextStyle.prototype.get_fontSize_61k213_k$ = function () {
    return this.spanStyle_1.fontSize_1;
  };
  TextStyle.prototype.get_fontWeight_wbif2o_k$ = function () {
    return this.spanStyle_1.fontWeight_1;
  };
  TextStyle.prototype.get_fontStyle_fze7ml_k$ = function () {
    return this.spanStyle_1.fontStyle_1;
  };
  TextStyle.prototype.get_fontSynthesis_t08ei1_k$ = function () {
    return this.spanStyle_1.fontSynthesis_1;
  };
  TextStyle.prototype.get_fontFamily_ulphcs_k$ = function () {
    return this.spanStyle_1.fontFamily_1;
  };
  TextStyle.prototype.get_fontFeatureSettings_a47533_k$ = function () {
    return this.spanStyle_1.fontFeatureSettings_1;
  };
  TextStyle.prototype.get_letterSpacing_u0tnf8_k$ = function () {
    return this.spanStyle_1.letterSpacing_1;
  };
  TextStyle.prototype.get_baselineShift_yg9i0p_k$ = function () {
    return this.spanStyle_1.baselineShift_1;
  };
  TextStyle.prototype.get_textGeometricTransform_tdfmin_k$ = function () {
    return this.spanStyle_1.textGeometricTransform_1;
  };
  TextStyle.prototype.get_localeList_1gj9gh_k$ = function () {
    return this.spanStyle_1.localeList_1;
  };
  TextStyle.prototype.get_background_ubksc_k$ = function () {
    return this.spanStyle_1.background_1;
  };
  TextStyle.prototype.get_textDecoration_itgjwm_k$ = function () {
    return this.spanStyle_1.textDecoration_1;
  };
  TextStyle.prototype.get_shadow_jgtb8p_k$ = function () {
    return this.spanStyle_1.shadow_1;
  };
  TextStyle.prototype.get_textAlign_ihj0br_k$ = function () {
    return this.paragraphStyle_1.textAlign_1;
  };
  TextStyle.prototype.get_textDirection_fsfodj_k$ = function () {
    return this.paragraphStyle_1.textDirection_1;
  };
  TextStyle.prototype.get_lineHeight_oovvjw_k$ = function () {
    return this.paragraphStyle_1.lineHeight_1;
  };
  TextStyle.prototype.get_textIndent_5mau2q_k$ = function () {
    return this.paragraphStyle_1.textIndent_1;
  };
  TextStyle.prototype.get_lineHeightStyle_fzu4s3_k$ = function () {
    return this.paragraphStyle_1.lineHeightStyle_1;
  };
  TextStyle.prototype.get_hyphens_o4a26w_k$ = function () {
    return this.paragraphStyle_1.hyphens_1;
  };
  TextStyle.prototype.get_lineBreak_lmsita_k$ = function () {
    return this.paragraphStyle_1.lineBreak_1;
  };
  TextStyle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextStyle))
      return false;
    if (!this.spanStyle_1.equals(other.spanStyle_1))
      return false;
    if (!this.paragraphStyle_1.equals(other.paragraphStyle_1))
      return false;
    if (!equals(this.platformStyle_1, other.platformStyle_1))
      return false;
    return true;
  };
  TextStyle.prototype.hasSameLayoutAffectingAttributes_nmoc4f_k$ = function (other) {
    return this === other ? true : this.paragraphStyle_1.equals(other.paragraphStyle_1) ? this.spanStyle_1.hasSameLayoutAffectingAttributes_h43d5o_k$(other.spanStyle_1) : false;
  };
  TextStyle.prototype.hashCode = function () {
    var result = this.spanStyle_1.hashCode();
    result = imul(31, result) + this.paragraphStyle_1.hashCode() | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.platformStyle_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  TextStyle.prototype.hashCodeLayoutAffectingAttributes_3jfwjl_k$ = function () {
    var result = this.spanStyle_1.hashCodeLayoutAffectingAttributes_3jfwjl_k$();
    result = imul(31, result) + this.paragraphStyle_1.hashCode() | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.platformStyle_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  TextStyle.prototype.toString = function () {
    var tmp = 'TextStyle(' + ('color=' + new Color(this.get_color_v34vrz_k$()) + ', ') + ('brush=' + this.get_brush_ipcjyp_k$() + ', ') + ('alpha=' + this.get_alpha_iooth1_k$() + ', ') + ('fontSize=' + new TextUnit(this.get_fontSize_61k213_k$()) + ', ') + ('fontWeight=' + this.get_fontWeight_wbif2o_k$() + ', ');
    var tmp_0 = this.get_fontStyle_fze7ml_k$();
    var tmp_1 = tmp + ('fontStyle=' + (tmp_0 == null ? null : new FontStyle(tmp_0)) + ', ');
    var tmp_2 = this.get_fontSynthesis_t08ei1_k$();
    var tmp_3 = tmp_1 + ('fontSynthesis=' + (tmp_2 == null ? null : new FontSynthesis(tmp_2)) + ', ') + ('fontFamily=' + this.get_fontFamily_ulphcs_k$() + ', ') + ('fontFeatureSettings=' + this.get_fontFeatureSettings_a47533_k$() + ', ') + ('letterSpacing=' + new TextUnit(this.get_letterSpacing_u0tnf8_k$()) + ', ');
    var tmp_4 = this.get_baselineShift_yg9i0p_k$();
    var tmp_5 = tmp_3 + ('baselineShift=' + (tmp_4 == null ? null : new BaselineShift(tmp_4)) + ', ') + ('textGeometricTransform=' + this.get_textGeometricTransform_tdfmin_k$() + ', ') + ('localeList=' + this.get_localeList_1gj9gh_k$() + ', ') + ('background=' + new Color(this.get_background_ubksc_k$()) + ', ') + ('textDecoration=' + this.get_textDecoration_itgjwm_k$() + ', ');
    var tmp_6 = this.get_shadow_jgtb8p_k$();
    var tmp_7 = this.get_textAlign_ihj0br_k$();
    var tmp_8 = tmp_5 + ('shadow=' + tmp_6 + ', textAlign=' + (tmp_7 == null ? null : new TextAlign(tmp_7)) + ', ');
    var tmp_9 = this.get_textDirection_fsfodj_k$();
    return tmp_8 + ('textDirection=' + (tmp_9 == null ? null : new TextDirection(tmp_9)) + ', ') + ('lineHeight=' + new TextUnit(this.get_lineHeight_oovvjw_k$()) + ', ') + ('textIndent=' + this.get_textIndent_5mau2q_k$() + ', ') + ('platformStyle=' + this.platformStyle_1 + ', ') + ('lineHeightStyle=' + this.get_lineHeightStyle_fzu4s3_k$() + ', ') + ('lineBreak=' + this.get_lineBreak_lmsita_k$() + ', ') + ('hyphens=' + this.get_hyphens_o4a26w_k$()) + ')';
  };
  TextStyle.$metadata$ = classMeta('TextStyle');
  function createPlatformTextStyleInternal(platformSpanStyle, platformParagraphStyle) {
    var tmp;
    if (platformSpanStyle == null ? platformParagraphStyle == null : false) {
      tmp = null;
    } else {
      tmp = createPlatformTextStyle(platformSpanStyle, platformParagraphStyle);
    }
    return tmp;
  }
  function resolveDefaults(style, direction) {
    return new TextStyle(resolveSpanStyleDefaults(style.spanStyle_1), resolveParagraphStyleDefaults(style.paragraphStyle_1, direction), style.platformStyle_1);
  }
  function resolveTextDirection_0(layoutDirection, textDirection) {
    var tmp0_subject = textDirection;
    var tmp;
    var tmp_0 = tmp0_subject;
    if (equals(tmp_0 == null ? null : new TextDirection(tmp_0), new TextDirection(Companion_getInstance_38().Content_1))) {
      var tmp1_subject = layoutDirection;
      var tmp0 = tmp1_subject.ordinal_1;
      var tmp_1;
      switch (tmp0) {
        case 0:
          tmp_1 = Companion_getInstance_38().ContentOrLtr_1;
          break;
        case 1:
          tmp_1 = Companion_getInstance_38().ContentOrRtl_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_1;
    } else {
      var tmp_2 = tmp0_subject;
      if ((tmp_2 == null ? null : new TextDirection(tmp_2)) == null) {
        var tmp2_subject = layoutDirection;
        var tmp0_0 = tmp2_subject.ordinal_1;
        var tmp_3;
        switch (tmp0_0) {
          case 0:
            tmp_3 = Companion_getInstance_38().Ltr_1;
            break;
          case 1:
            tmp_3 = Companion_getInstance_38().Rtl_1;
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_3;
      } else {
        tmp = textDirection;
      }
    }
    return tmp;
  }
  function TtsAnnotation() {
    this.$stable_1 = 0;
  }
  TtsAnnotation.$metadata$ = classMeta('TtsAnnotation');
  function VerbatimTtsAnnotation(verbatim) {
    TtsAnnotation.call(this);
    this.verbatim_1 = verbatim;
    this.$stable_2 = 0;
  }
  VerbatimTtsAnnotation.prototype.get_verbatim_64u873_k$ = function () {
    return this.verbatim_1;
  };
  VerbatimTtsAnnotation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerbatimTtsAnnotation))
      return false;
    if (!(this.verbatim_1 === other.verbatim_1))
      return false;
    return true;
  };
  VerbatimTtsAnnotation.prototype.hashCode = function () {
    return getStringHashCode(this.verbatim_1);
  };
  VerbatimTtsAnnotation.prototype.toString = function () {
    return 'VerbatimTtsAnnotation(verbatim=' + this.verbatim_1 + ')';
  };
  VerbatimTtsAnnotation.$metadata$ = classMeta('VerbatimTtsAnnotation', undefined, undefined, undefined, undefined, TtsAnnotation.prototype);
  function UrlAnnotation(url) {
    this.url_1 = url;
    this.$stable_1 = 0;
  }
  UrlAnnotation.prototype.get_url_18iuii_k$ = function () {
    return this.url_1;
  };
  UrlAnnotation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UrlAnnotation))
      return false;
    if (!(this.url_1 === other.url_1))
      return false;
    return true;
  };
  UrlAnnotation.prototype.hashCode = function () {
    return getStringHashCode(this.url_1);
  };
  UrlAnnotation.prototype.toString = function () {
    return 'UrlAnnotation(url=' + this.url_1 + ')';
  };
  UrlAnnotation.$metadata$ = classMeta('UrlAnnotation');
  function get_EMPTY_INTS() {
    init_properties_ContainerHelpers_kt_fcg78q();
    return EMPTY_INTS;
  }
  var EMPTY_INTS;
  function get_EMPTY_OBJECTS() {
    init_properties_ContainerHelpers_kt_fcg78q();
    return EMPTY_OBJECTS;
  }
  var EMPTY_OBJECTS;
  function binarySearchInternal(_this__u8e3s4, size, value) {
    init_properties_ContainerHelpers_kt_fcg78q();
    var lo = 0;
    var hi = size - 1 | 0;
    while (lo <= hi) {
      var mid = (lo + hi | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (midVal < value) {
        lo = mid + 1 | 0;
      } else if (midVal > value) {
        hi = mid - 1 | 0;
      } else {
        return mid;
      }
    }
    return ~lo;
  }
  var properties_initialized_ContainerHelpers_kt_9fe6be;
  function init_properties_ContainerHelpers_kt_fcg78q() {
    if (properties_initialized_ContainerHelpers_kt_9fe6be) {
    } else {
      properties_initialized_ContainerHelpers_kt_9fe6be = true;
      EMPTY_INTS = new Int32Array(0);
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(0), null);
      EMPTY_OBJECTS = tmp$ret$0;
    }
  }
  function _get_monitor__tq0hyv($this) {
    return $this.monitor_1;
  }
  function _get_map__e6co1h($this) {
    return $this.map_1;
  }
  function _get_keySet__ob3y08($this) {
    return $this.keySet_1;
  }
  function _set_size__9twho6($this, _set____db54di) {
    $this.size_1 = _set____db54di;
  }
  function _set_maxSize__3ox4yo($this, _set____db54di) {
    $this.maxSize_1 = _set____db54di;
  }
  function _get_maxSize__tb5fbo($this) {
    return $this.maxSize_1;
  }
  function _set_putCount__m02mjb($this, _set____db54di) {
    $this.putCount_1 = _set____db54di;
  }
  function _get_putCount__976b2j($this) {
    return $this.putCount_1;
  }
  function _set_createCount__etewhe($this, _set____db54di) {
    $this.createCount_1 = _set____db54di;
  }
  function _get_createCount__pxaz5u($this) {
    return $this.createCount_1;
  }
  function _set_evictionCount__96h6gb($this, _set____db54di) {
    $this.evictionCount_1 = _set____db54di;
  }
  function _get_evictionCount__oe8oyn($this) {
    return $this.evictionCount_1;
  }
  function _set_hitCount__dpetwl($this, _set____db54di) {
    $this.hitCount_1 = _set____db54di;
  }
  function _get_hitCount__qib5dd($this) {
    return $this.hitCount_1;
  }
  function _set_missCount__k5nle($this, _set____db54di) {
    $this.missCount_1 = _set____db54di;
  }
  function _get_missCount__tv03zy($this) {
    return $this.missCount_1;
  }
  function LruCache_init_$Init$(maxSize, $this) {
    LruCache.call($this);
    // Inline function 'kotlin.require' call
    var tmp0_require = maxSize > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.caches.LruCache.<init>.<anonymous>' call
      tmp$ret$0 = 'maxSize <= 0';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.maxSize_1 = maxSize;
    $this.map_1 = HashMap_init_$Create$(0, 0.75);
    $this.keySet_1 = LinkedHashSet_init_$Create$();
    return $this;
  }
  function LruCache_init_$Create$(maxSize) {
    return LruCache_init_$Init$(maxSize, Object.create(LruCache.prototype));
  }
  function safeSizeOf($this, key, value) {
    var result = $this.sizeOf_xsmc0r_k$(key, value);
    // Inline function 'kotlin.check' call
    var tmp0_check = result >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.caches.LruCache.safeSizeOf.<anonymous>' call
      tmp$ret$0 = 'Negative size: ' + key + '=' + value;
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return result;
  }
  LruCache.prototype.get_size_woubt6_k$ = function () {
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.synchronizedValue' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.monitor_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    return this.size_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  LruCache.prototype.resize_w0jdrw_k$ = function (maxSize) {
    // Inline function 'kotlin.require' call
    var tmp0_require = maxSize > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.caches.LruCache.resize.<anonymous>' call
      tmp$ret$0 = 'maxSize <= 0';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp1_synchronized = this.monitor_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.maxSize_1 = maxSize;
    tmp$ret$1 = Unit_getInstance();
    tmp$ret$2 = tmp$ret$1;
    this.trimToSize_kob4eq_k$(maxSize);
  };
  LruCache.prototype.get_1mhr4y_k$ = function (key) {
    var mapValue = null;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.monitor_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.get.<anonymous>' call
    mapValue = this.map_1.get_1mhr4y_k$(key);
    var tmp;
    if (!(mapValue == null)) {
      this.keySet_1.remove_8hbkc6_k$(key);
      this.keySet_1.add_1j60pz_k$(key);
      var tmp0_this = this;
      var tmp1 = tmp0_this.hitCount_1;
      tmp0_this.hitCount_1 = tmp1 + 1 | 0;
      return mapValue;
    } else {
      var tmp2_this = this;
      var tmp3 = tmp2_this.missCount_1;
      tmp2_this.missCount_1 = tmp3 + 1 | 0;
      tmp = tmp3;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var createdValue = this.create_u3tv48_k$(key);
    if (createdValue == null) {
      return null;
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp1_synchronized = this.monitor_1;
    var tmp$ret$3;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_this_0 = this;
    var tmp1_0 = tmp0_this_0.createCount_1;
    tmp0_this_0.createCount_1 = tmp1_0 + 1 | 0;
    var previousValue = this.map_1.put_3mhbri_k$(key, createdValue);
    this.keySet_1.remove_8hbkc6_k$(key);
    this.keySet_1.add_1j60pz_k$(key);
    var tmp_0;
    if (!(previousValue == null)) {
      this.map_1.put_3mhbri_k$(key, previousValue);
      mapValue = previousValue;
      tmp_0 = Unit_getInstance();
    } else {
      var tmp2_this_0 = this;
      tmp2_this_0.size_1 = tmp2_this_0.get_size_woubt6_k$() + safeSizeOf(this, key, createdValue) | 0;
      tmp_0 = Unit_getInstance();
    }
    tmp$ret$3 = tmp_0;
    tmp$ret$4 = tmp$ret$3;
    if (!(mapValue == null)) {
      this.entryRemoved_l91vrc_k$(false, key, createdValue, mapValue);
      return mapValue;
    } else {
      this.trimToSize_kob4eq_k$(this.maxSize_1);
      return createdValue;
    }
  };
  LruCache.prototype.put_3mhbri_k$ = function (key, value) {
    if (key == null ? true : value == null) {
      throw NullPointerException_init_$Create$();
    }
    var previous = null;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.monitor_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.put.<anonymous>' call
    var tmp0_this = this;
    var tmp1 = tmp0_this.putCount_1;
    tmp0_this.putCount_1 = tmp1 + 1 | 0;
    var tmp2_this = this;
    tmp2_this.size_1 = tmp2_this.get_size_woubt6_k$() + safeSizeOf(this, key, value) | 0;
    previous = this.map_1.put_3mhbri_k$(key, value);
    if (!(previous == null)) {
      var tmp3_this = this;
      tmp3_this.size_1 = tmp3_this.get_size_woubt6_k$() - safeSizeOf(this, key, ensureNotNull(previous)) | 0;
    }
    if (this.keySet_1.contains_2ehdt1_k$(key)) {
      this.keySet_1.remove_8hbkc6_k$(key);
    }
    tmp$ret$0 = this.keySet_1.add_1j60pz_k$(key);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    if (!(previous == null)) {
      this.entryRemoved_l91vrc_k$(false, key, ensureNotNull(previous), value);
    }
    this.trimToSize_kob4eq_k$(this.maxSize_1);
    return previous;
  };
  LruCache.prototype.trimToSize_kob4eq_k$ = function (maxSize) {
    $l$loop: while (true) {
      var key = null;
      var value = null;
      var tmp$ret$4;
      // Inline function 'androidx.compose.ui.text.synchronized' call
      var tmp0_synchronized = this.monitor_1;
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      if ((this.get_size_woubt6_k$() < 0 ? true : this.map_1.isEmpty_y1axqb_k$() ? !(this.get_size_woubt6_k$() === 0) : false) ? true : !(this.map_1.isEmpty_y1axqb_k$() === this.keySet_1.isEmpty_y1axqb_k$())) {
        throw IllegalStateException_init_$Create$('map/keySet size inconsistency');
      }
      var tmp;
      if (this.get_size_woubt6_k$() > maxSize ? !this.map_1.isEmpty_y1axqb_k$() : false) {
        key = first(this.keySet_1);
        var tmp$ret$0;
        // Inline function 'kotlin.collections.get' call
        var tmp0_get = this.map_1;
        var tmp1_get = key;
        tmp$ret$0 = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).get_1mhr4y_k$(tmp1_get);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          throw IllegalStateException_init_$Create$('inconsistent state');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        value = tmp_0;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.remove' call
        var tmp2_remove = this.map_1;
        var tmp3_remove = key;
        tmp$ret$1 = (isInterface(tmp2_remove, MutableMap) ? tmp2_remove : THROW_CCE()).remove_8hbkc0_k$(tmp3_remove);
        var tmp$ret$2;
        // Inline function 'kotlin.collections.remove' call
        var tmp4_remove = this.keySet_1;
        var tmp5_remove = key;
        tmp$ret$2 = (isInterface(tmp4_remove, MutableCollection) ? tmp4_remove : THROW_CCE()).remove_8hbkc6_k$(tmp5_remove);
        var tmp1_this = this;
        tmp1_this.size_1 = tmp1_this.get_size_woubt6_k$() - safeSizeOf(this, ensureNotNull(key), ensureNotNull(value)) | 0;
        var tmp2_this = this;
        var tmp3 = tmp2_this.evictionCount_1;
        tmp2_this.evictionCount_1 = tmp3 + 1 | 0;
        tmp = Unit_getInstance();
      }
      tmp$ret$3 = tmp;
      tmp$ret$4 = tmp$ret$3;
      if (key == null ? value == null : false) {
        break $l$loop;
      } else {
        this.entryRemoved_l91vrc_k$(true, ensureNotNull(key), ensureNotNull(value), null);
      }
    }
  };
  LruCache.prototype.remove_8hbkc0_k$ = function (key) {
    if (key == null) {
      throw NullPointerException_init_$Create$();
    }
    var previous = null;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.monitor_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    previous = this.map_1.remove_8hbkc0_k$(key);
    this.keySet_1.remove_8hbkc6_k$(key);
    var tmp;
    if (!(previous == null)) {
      var tmp0_this = this;
      tmp0_this.size_1 = tmp0_this.get_size_woubt6_k$() - safeSizeOf(this, key, ensureNotNull(previous)) | 0;
      tmp = Unit_getInstance();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    if (!(previous == null)) {
      this.entryRemoved_l91vrc_k$(false, key, ensureNotNull(previous), null);
    }
    return previous;
  };
  LruCache.prototype.entryRemoved_l91vrc_k$ = function (evicted, key, oldValue, newValue) {
  };
  LruCache.prototype.create_u3tv48_k$ = function (key) {
    return null;
  };
  LruCache.prototype.sizeOf_xsmc0r_k$ = function (key, value) {
    return 1;
  };
  LruCache.prototype.evictAll_sd7znr_k$ = function () {
    this.trimToSize_kob4eq_k$(-1);
  };
  LruCache.prototype.maxSize_dyjl39_k$ = function () {
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.synchronizedValue' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.monitor_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.maxSize.<anonymous>' call
    tmp$ret$0 = this.maxSize_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  LruCache.prototype.hitCount_m9mq4k_k$ = function () {
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.synchronizedValue' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.monitor_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.hitCount.<anonymous>' call
    tmp$ret$0 = this.hitCount_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  LruCache.prototype.missCount_jzozn7_k$ = function () {
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.synchronizedValue' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.monitor_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.missCount.<anonymous>' call
    tmp$ret$0 = this.missCount_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  LruCache.prototype.createCount_8lc6tp_k$ = function () {
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.synchronizedValue' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.monitor_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.createCount.<anonymous>' call
    tmp$ret$0 = this.createCount_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  LruCache.prototype.putCount_tak75s_k$ = function () {
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.synchronizedValue' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.monitor_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.putCount.<anonymous>' call
    tmp$ret$0 = this.putCount_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  LruCache.prototype.evictionCount_nzallc_k$ = function () {
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.synchronizedValue' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.monitor_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.evictionCount.<anonymous>' call
    tmp$ret$0 = this.evictionCount_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  LruCache.prototype.snapshot_4plubo_k$ = function () {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.monitor_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var linkedHashMap = LinkedHashMap_init_$Create$();
    var tmp0_iterator = this.keySet_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var key = tmp0_iterator.next_20eer_k$();
      linkedHashMap.put_3mhbri_k$(key, ensureNotNull(this.map_1.get_1mhr4y_k$(key)));
    }
    return linkedHashMap;
    tmp$ret$1 = tmp$ret$0;
  };
  LruCache.prototype.toString = function () {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.monitor_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var accesses = this.hitCount_1 + this.missCount_1 | 0;
    var hitPercent = !(accesses === 0) ? imul(100, this.hitCount_1) / accesses | 0 : 0;
    return 'LruCache[maxSize=' + this.maxSize_1 + ',hits=' + this.hitCount_1 + ',misses=' + this.missCount_1 + ',' + ('hitRate=' + hitPercent + '%]');
    tmp$ret$1 = tmp$ret$0;
  };
  LruCache.prototype.synchronizedValue_9k0sbh_k$ = function (block) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.monitor_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    tmp$ret$0 = block();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  function LruCache() {
    this.monitor_1 = createSynchronizedObject();
    this.size_1 = 0;
    this.maxSize_1 = 0;
    this.putCount_1 = 0;
    this.createCount_1 = 0;
    this.evictionCount_1 = 0;
    this.hitCount_1 = 0;
    this.missCount_1 = 0;
  }
  LruCache.$metadata$ = classMeta('LruCache');
  function _set_hashes__n5xbqd($this, _set____db54di) {
    $this.hashes_1 = _set____db54di;
  }
  function _get_hashes__lp6r3l($this) {
    return $this.hashes_1;
  }
  function _set_keyValues__u4rhj8($this, _set____db54di) {
    $this.keyValues_1 = _set____db54di;
  }
  function _get_keyValues__bli41c($this) {
    return $this.keyValues_1;
  }
  function SimpleArrayMap_init_$Init$(capacity, $this) {
    SimpleArrayMap.call($this);
    if (capacity === 0) {
      $this.hashes_1 = get_EMPTY_INTS();
      $this.keyValues_1 = get_EMPTY_OBJECTS();
    } else {
      $this.hashes_1 = new Int32Array(capacity);
      var tmp = $this;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = capacity << 1;
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      tmp.keyValues_1 = tmp$ret$0;
    }
    $this._size_1 = 0;
    return $this;
  }
  function SimpleArrayMap_init_$Create$(capacity) {
    return SimpleArrayMap_init_$Init$(capacity, Object.create(SimpleArrayMap.prototype));
  }
  function SimpleArrayMap_init_$Init$_0(capacity, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      capacity = 0;
    SimpleArrayMap_init_$Init$(capacity, $this);
    return $this;
  }
  function SimpleArrayMap_init_$Create$_0(capacity, $mask0, $marker) {
    return SimpleArrayMap_init_$Init$_0(capacity, $mask0, $marker, Object.create(SimpleArrayMap.prototype));
  }
  function SimpleArrayMap_init_$Init$_1(map, $this) {
    SimpleArrayMap_init_$Init$_0(0, 1, null, $this);
    if (!(map == null)) {
      $this.putAll_jjpgox_k$(map);
    }
    return $this;
  }
  function SimpleArrayMap_init_$Create$_1(map) {
    return SimpleArrayMap_init_$Init$_1(map, Object.create(SimpleArrayMap.prototype));
  }
  SimpleArrayMap.prototype.set__size_taaznx_k$ = function (_set____db54di) {
    this._size_1 = _set____db54di;
  };
  SimpleArrayMap.prototype.get__size_inpkfr_k$ = function () {
    return this._size_1;
  };
  SimpleArrayMap.prototype.get_size_woubt6_k$ = function () {
    return this._size_1;
  };
  SimpleArrayMap.prototype.indexOf_37mh4k_k$ = function (key, hash) {
    var N = this._size_1;
    if (N === 0) {
      return -1;
    }
    var index = binarySearchInternal(this.hashes_1, N, hash);
    if (index < 0) {
      return index;
    }
    if (equals(key, this.keyValues_1[index << 1])) {
      return index;
    }
    var end;
    end = index + 1 | 0;
    while (end < N ? this.hashes_1[end] === hash : false) {
      if (equals(key, this.keyValues_1[end << 1]))
        return end;
      var tmp0 = end;
      end = tmp0 + 1 | 0;
    }
    var i = index - 1 | 0;
    while (i >= 0 ? this.hashes_1[i] === hash : false) {
      if (equals(key, this.keyValues_1[i << 1]))
        return i;
      var tmp1 = i;
      i = tmp1 - 1 | 0;
    }
    return ~end;
  };
  SimpleArrayMap.prototype.indexOfNull_k3dchc_k$ = function () {
    var N = this._size_1;
    if (N === 0) {
      return -1;
    }
    var index = binarySearchInternal(this.hashes_1, N, 0);
    if (index < 0) {
      return index;
    }
    if (null == this.keyValues_1[index << 1]) {
      return index;
    }
    var end;
    end = index + 1 | 0;
    while (end < N ? this.hashes_1[end] === 0 : false) {
      if (null == this.keyValues_1[end << 1])
        return end;
      var tmp0 = end;
      end = tmp0 + 1 | 0;
    }
    var i = index - 1 | 0;
    while (i >= 0 ? this.hashes_1[i] === 0 : false) {
      if (null == this.keyValues_1[i << 1])
        return i;
      var tmp1 = i;
      i = tmp1 - 1 | 0;
    }
    return ~end;
  };
  SimpleArrayMap.prototype.clear_j9y8zo_k$ = function () {
    if (this._size_1 > 0) {
      this.hashes_1 = get_EMPTY_INTS();
      this.keyValues_1 = get_EMPTY_OBJECTS();
      this._size_1 = 0;
    }
    if (this._size_1 > 0) {
      throw ConcurrentModificationException_init_$Create$();
    }
  };
  SimpleArrayMap.prototype.ensureCapacity_ignus8_k$ = function (minimumCapacity) {
    var osize = this._size_1;
    if (this.hashes_1.length < minimumCapacity) {
      this.hashes_1 = copyOf(this.hashes_1, minimumCapacity);
      this.keyValues_1 = copyOf_0(this.keyValues_1, minimumCapacity << 1);
    }
    if (!(this._size_1 === osize)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  };
  SimpleArrayMap.prototype.containsKey_wgk31w_k$ = function (key) {
    return this.indexOfKey_ht9ei1_k$(key) >= 0;
  };
  SimpleArrayMap.prototype.indexOfKey_ht9ei1_k$ = function (key) {
    return key == null ? this.indexOfNull_k3dchc_k$() : this.indexOf_37mh4k_k$(key, hashCode(key));
  };
  SimpleArrayMap.prototype.indexOfValue_26501t_k$ = function (value) {
    var N = this._size_1 << 1;
    var array = this.keyValues_1;
    if (value == null) {
      var i = 1;
      while (i < N) {
        if (array[i] == null) {
          return i >> 1;
        }
        i = i + 2 | 0;
      }
    } else {
      var i_0 = 1;
      while (i_0 < N) {
        if (equals(value, array[i_0])) {
          return i_0 >> 1;
        }
        i_0 = i_0 + 2 | 0;
      }
    }
    return -1;
  };
  SimpleArrayMap.prototype.containsValue_5viga1_k$ = function (value) {
    return this.indexOfValue_26501t_k$(value) >= 0;
  };
  SimpleArrayMap.prototype.get_1mhr4y_k$ = function (key) {
    var index = this.indexOfKey_ht9ei1_k$(key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.keyValues_1[(index << 1) + 1 | 0];
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  SimpleArrayMap.prototype.getOrDefault_98tstx_k$ = function (key, defaultValue) {
    var index = this.indexOfKey_ht9ei1_k$(key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.keyValues_1[(index << 1) + 1 | 0];
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = defaultValue;
    }
    return tmp;
  };
  SimpleArrayMap.prototype.keyAt_krkslr_k$ = function (index) {
    var tmp = this.keyValues_1[index << 1];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  SimpleArrayMap.prototype.valueAt_mb56gt_k$ = function (index) {
    var tmp = this.keyValues_1[(index << 1) + 1 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  SimpleArrayMap.prototype.setValueAt_pzoq2_k$ = function (index, value) {
    var actualIndex = (index << 1) + 1 | 0;
    var tmp = this.keyValues_1[actualIndex];
    var old = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    this.keyValues_1[actualIndex] = value;
    return old;
  };
  SimpleArrayMap.prototype.isEmpty_y1axqb_k$ = function () {
    return this._size_1 <= 0;
  };
  SimpleArrayMap.prototype.put_3mhbri_k$ = function (key, value) {
    var osize = this._size_1;
    var hash;
    var index;
    if (key == null) {
      hash = 0;
      index = this.indexOfNull_k3dchc_k$();
    } else {
      hash = hashCode(key);
      index = this.indexOf_37mh4k_k$(key, hash);
    }
    if (index >= 0) {
      index = (index << 1) + 1 | 0;
      var tmp = this.keyValues_1[index];
      var old = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      this.keyValues_1[index] = value;
      return old;
    }
    index = ~index;
    if (osize >= this.hashes_1.length) {
      var n = osize >= 8 ? osize + (osize >> 1) | 0 : osize >= 4 ? 8 : 4;
      if (false) {
        println('SimpleArrayMap put: grow from ' + this.hashes_1.length + ' to ' + n);
      }
      this.hashes_1 = copyOf(this.hashes_1, n);
      this.keyValues_1 = copyOf_0(this.keyValues_1, n << 1);
      if (!(osize === this._size_1)) {
        throw ConcurrentModificationException_init_$Create$();
      }
    }
    if (index < osize) {
      if (false) {
        println('SimpleArrayMap put: move ' + index + '-' + (osize - index | 0) + ' to ' + (index + 1 | 0));
      }
      var tmp$ret$4;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = this.hashes_1;
      var tmp1_copyInto = this.hashes_1;
      var tmp2_copyInto = index + 1 | 0;
      var tmp3_copyInto = index;
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_copyInto;
      tmp$ret$1 = tmp$ret$0;
      var tmp_0 = tmp$ret$1;
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp1_copyInto;
      tmp$ret$3 = tmp$ret$2;
      arrayCopy(tmp_0, tmp$ret$3, tmp2_copyInto, tmp3_copyInto, osize);
      tmp$ret$4 = tmp1_copyInto;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = this.keyValues_1;
      var tmp5_copyInto = this.keyValues_1;
      var tmp6_copyInto = (index + 1 | 0) << 1;
      var tmp7_copyInto = index << 1;
      var tmp8_copyInto = this._size_1 << 1;
      arrayCopy(tmp4_copyInto, tmp5_copyInto, tmp6_copyInto, tmp7_copyInto, tmp8_copyInto);
      tmp$ret$5 = tmp5_copyInto;
    }
    {
      if (!(osize === this._size_1) ? true : index >= this.hashes_1.length) {
        throw ConcurrentModificationException_init_$Create$();
      }
    }
    this.hashes_1[index] = hash;
    this.keyValues_1[index << 1] = key;
    this.keyValues_1[(index << 1) + 1 | 0] = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this._size_1;
    tmp0_this._size_1 = tmp1 + 1 | 0;
    return null;
  };
  SimpleArrayMap.prototype.putAll_jjpgox_k$ = function (array) {
    var N = array._size_1;
    this.ensureCapacity_ignus8_k$(this._size_1 + N | 0);
    if (this._size_1 === 0) {
      if (N > 0) {
        var tmp$ret$4;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = array.hashes_1;
        var tmp1_copyInto = this.hashes_1;
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_copyInto;
        tmp$ret$1 = tmp$ret$0;
        var tmp = tmp$ret$1;
        var tmp$ret$3;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp1_copyInto;
        tmp$ret$3 = tmp$ret$2;
        arrayCopy(tmp, tmp$ret$3, 0, 0, N);
        tmp$ret$4 = tmp1_copyInto;
        var tmp$ret$5;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp2_copyInto = array.keyValues_1;
        var tmp3_copyInto = this.keyValues_1;
        var tmp4_copyInto = N << 1;
        arrayCopy(tmp2_copyInto, tmp3_copyInto, 0, 0, tmp4_copyInto);
        tmp$ret$5 = tmp3_copyInto;
        this._size_1 = N;
      }
    } else {
      var inductionVariable = 0;
      if (inductionVariable < N)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          this.put_3mhbri_k$(array.keyAt_krkslr_k$(i), array.valueAt_mb56gt_k$(i));
        }
         while (inductionVariable < N);
    }
  };
  SimpleArrayMap.prototype.putIfAbsent_f5fh1k_k$ = function (key, value) {
    var mapValue = this.get_1mhr4y_k$(key);
    if (mapValue == null) {
      mapValue = this.put_3mhbri_k$(key, value);
    }
    return mapValue;
  };
  SimpleArrayMap.prototype.remove_8hbkc0_k$ = function (key) {
    var index = this.indexOfKey_ht9ei1_k$(key);
    return index >= 0 ? this.removeAt_qvpkxi_k$(index) : null;
  };
  SimpleArrayMap.prototype.remove_i68l5z_k$ = function (key, value) {
    var index = this.indexOfKey_ht9ei1_k$(key);
    if (index >= 0) {
      var mapValue = this.valueAt_mb56gt_k$(index);
      if (equals(value, mapValue)) {
        this.removeAt_qvpkxi_k$(index);
        return true;
      }
    }
    return false;
  };
  SimpleArrayMap.prototype.removeAt_qvpkxi_k$ = function (index) {
    var old = this.keyValues_1[(index << 1) + 1 | 0];
    var osize = this._size_1;
    if (osize <= 1) {
      if (false) {
        println('SimpleArrayMap remove: shrink from ' + this.hashes_1 + '.size to 0');
      }
      this.clear_j9y8zo_k$();
    } else {
      var nsize = osize - 1 | 0;
      if (this.hashes_1.length > 8 ? osize < (this.hashes_1.length / 3 | 0) : false) {
        var n = osize > 8 ? osize + (osize >> 1) | 0 : 8;
        if (false) {
          println('SimpleArrayMap remove: shrink from ' + this.hashes_1 + '.size to ' + n);
        }
        var ohashes = this.hashes_1;
        var oarray = this.keyValues_1;
        this.hashes_1 = new Int32Array(n);
        var tmp = this;
        var tmp$ret$0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp0_arrayOfNulls = n << 1;
        tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
        tmp.keyValues_1 = tmp$ret$0;
        if (!(osize === this._size_1)) {
          throw ConcurrentModificationException_init_$Create$();
        }
        if (index > 0) {
          if (false) {
            println('SimpleArrayMap remove: copy from 0-' + index + ' to 0');
          }
          var tmp$ret$5;
          // Inline function 'kotlin.collections.copyInto' call
          var tmp1_copyInto = this.hashes_1;
          var tmp$ret$2;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$1;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$1 = ohashes;
          tmp$ret$2 = tmp$ret$1;
          var tmp_0 = tmp$ret$2;
          var tmp$ret$4;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$3;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$3 = tmp1_copyInto;
          tmp$ret$4 = tmp$ret$3;
          arrayCopy(tmp_0, tmp$ret$4, 0, 0, index);
          tmp$ret$5 = tmp1_copyInto;
          var tmp$ret$6;
          // Inline function 'kotlin.collections.copyInto' call
          var tmp2_copyInto = this.keyValues_1;
          var tmp3_copyInto = index << 1;
          arrayCopy(oarray, tmp2_copyInto, 0, 0, tmp3_copyInto);
          tmp$ret$6 = tmp2_copyInto;
        }
        if (index < nsize) {
          if (false) {
            println('SimpleArrayMap remove: copy from ' + (index + 1 | 0) + '-' + nsize + ' to ' + index);
          }
          var tmp$ret$11;
          // Inline function 'kotlin.collections.copyInto' call
          var tmp4_copyInto = this.hashes_1;
          var tmp5_copyInto = index + 1 | 0;
          var tmp6_copyInto = nsize + 1 | 0;
          var tmp$ret$8;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$7;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$7 = ohashes;
          tmp$ret$8 = tmp$ret$7;
          var tmp_1 = tmp$ret$8;
          var tmp$ret$10;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$9;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$9 = tmp4_copyInto;
          tmp$ret$10 = tmp$ret$9;
          arrayCopy(tmp_1, tmp$ret$10, index, tmp5_copyInto, tmp6_copyInto);
          tmp$ret$11 = tmp4_copyInto;
          var tmp$ret$12;
          // Inline function 'kotlin.collections.copyInto' call
          var tmp7_copyInto = this.keyValues_1;
          var tmp8_copyInto = index << 1;
          var tmp9_copyInto = (index + 1 | 0) << 1;
          var tmp10_copyInto = (nsize + 1 | 0) << 1;
          arrayCopy(oarray, tmp7_copyInto, tmp8_copyInto, tmp9_copyInto, tmp10_copyInto);
          tmp$ret$12 = tmp7_copyInto;
        }
      } else {
        if (index < nsize) {
          if (false) {
            println('SimpleArrayMap remove: move ' + (index + 1 | 0) + '-' + nsize + ' to ' + index);
          }
          var tmp$ret$17;
          // Inline function 'kotlin.collections.copyInto' call
          var tmp11_copyInto = this.hashes_1;
          var tmp12_copyInto = this.hashes_1;
          var tmp13_copyInto = index + 1 | 0;
          var tmp14_copyInto = nsize + 1 | 0;
          var tmp$ret$14;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$13;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$13 = tmp11_copyInto;
          tmp$ret$14 = tmp$ret$13;
          var tmp_2 = tmp$ret$14;
          var tmp$ret$16;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$15;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$15 = tmp12_copyInto;
          tmp$ret$16 = tmp$ret$15;
          arrayCopy(tmp_2, tmp$ret$16, index, tmp13_copyInto, tmp14_copyInto);
          tmp$ret$17 = tmp12_copyInto;
          var tmp$ret$18;
          // Inline function 'kotlin.collections.copyInto' call
          var tmp15_copyInto = this.keyValues_1;
          var tmp16_copyInto = this.keyValues_1;
          var tmp17_copyInto = index << 1;
          var tmp18_copyInto = (index + 1 | 0) << 1;
          var tmp19_copyInto = (nsize + 1 | 0) << 1;
          arrayCopy(tmp15_copyInto, tmp16_copyInto, tmp17_copyInto, tmp18_copyInto, tmp19_copyInto);
          tmp$ret$18 = tmp16_copyInto;
        }
        this.keyValues_1[nsize << 1] = null;
        this.keyValues_1[(nsize << 1) + 1 | 0] = null;
      }
      if (!(osize === this._size_1)) {
        throw ConcurrentModificationException_init_$Create$();
      }
      this._size_1 = nsize;
    }
    return (old == null ? true : isObject(old)) ? old : THROW_CCE();
  };
  SimpleArrayMap.prototype.replace_74alw7_k$ = function (key, value) {
    var index = this.indexOfKey_ht9ei1_k$(key);
    return index >= 0 ? this.setValueAt_pzoq2_k$(index, value) : null;
  };
  SimpleArrayMap.prototype.replace_mod94e_k$ = function (key, oldValue, newValue) {
    var index = this.indexOfKey_ht9ei1_k$(key);
    if (index >= 0) {
      var mapValue = this.valueAt_mb56gt_k$(index);
      if (mapValue === oldValue) {
        this.setValueAt_pzoq2_k$(index, newValue);
        return true;
      }
    }
    return false;
  };
  SimpleArrayMap.prototype.equals = function (other) {
    if (this === other) {
      return true;
    }
    try {
      if (other instanceof SimpleArrayMap) {
        var map = other instanceof SimpleArrayMap ? other : THROW_CCE();
        if (!(this._size_1 === map._size_1)) {
          return false;
        }
        var inductionVariable = 0;
        var last = this._size_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var key = this.keyAt_krkslr_k$(i);
            var mine = this.valueAt_mb56gt_k$(i);
            var theirs = map.get_1mhr4y_k$(key);
            if (mine == null) {
              if (!(theirs == null) ? true : !map.containsKey_wgk31w_k$(key)) {
                return false;
              }
            } else if (!equals(mine, theirs)) {
              return false;
            }
          }
           while (inductionVariable < last);
        return true;
      } else {
        if (!(other == null) ? isInterface(other, Map) : false) {
          var map_0 = other;
          if (!(this._size_1 === map_0.get_size_woubt6_k$())) {
            return false;
          }
          var inductionVariable_0 = 0;
          var last_0 = this._size_1;
          if (inductionVariable_0 < last_0)
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var key_0 = this.keyAt_krkslr_k$(i_0);
              var mine_0 = this.valueAt_mb56gt_k$(i_0);
              var tmp$ret$0;
              // Inline function 'kotlin.collections.get' call
              var tmp0_get = map_0;
              tmp$ret$0 = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).get_1mhr4y_k$(key_0);
              var theirs_0 = tmp$ret$0;
              if (mine_0 == null) {
                var tmp;
                if (!(theirs_0 == null)) {
                  tmp = true;
                } else {
                  var tmp$ret$1;
                  // Inline function 'kotlin.collections.containsKey' call
                  var tmp1_containsKey = map_0;
                  tmp$ret$1 = (isInterface(tmp1_containsKey, Map) ? tmp1_containsKey : THROW_CCE()).containsKey_wgk31w_k$(key_0);
                  tmp = !tmp$ret$1;
                }
                if (tmp) {
                  return false;
                }
              } else if (!equals(mine_0, theirs_0)) {
                return false;
              }
            }
             while (inductionVariable_0 < last_0);
          return true;
        }
      }
    } catch ($p) {
      if ($p instanceof NullPointerException) {
      } else {
        if ($p instanceof ClassCastException) {
        } else {
          throw $p;
        }
      }
    }
    return false;
  };
  SimpleArrayMap.prototype.hashCode = function () {
    var hashes = this.hashes_1;
    var array = this.keyValues_1;
    var result = 0;
    var i = 0;
    var v = 1;
    var s = this._size_1;
    while (i < s) {
      var value = array[v];
      var tmp = result;
      var tmp_0 = hashes[i];
      var tmp0_safe_receiver = value;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      result = tmp + (tmp_0 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
      var tmp2 = i;
      i = tmp2 + 1 | 0;
      v = v + 2 | 0;
    }
    return result;
  };
  SimpleArrayMap.prototype.toString = function () {
    if (this.isEmpty_y1axqb_k$()) {
      return '{}';
    }
    var buffer = StringBuilder_init_$Create$(imul(this._size_1, 28));
    buffer.append_t8oh9e_k$(_Char___init__impl__6a9atx(123));
    var inductionVariable = 0;
    var last = this._size_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i > 0) {
          buffer.append_ssq29y_k$(', ');
        }
        var key = this.keyAt_krkslr_k$(i);
        if (!(key === this)) {
          buffer.append_t8pm91_k$(key);
        } else {
          buffer.append_ssq29y_k$('(this Map)');
        }
        buffer.append_t8oh9e_k$(_Char___init__impl__6a9atx(61));
        var value = this.valueAt_mb56gt_k$(i);
        if (!(value === this)) {
          buffer.append_t8pm91_k$(value);
        } else {
          buffer.append_ssq29y_k$('(this Map)');
        }
      }
       while (inductionVariable < last);
    buffer.append_t8oh9e_k$(_Char___init__impl__6a9atx(125));
    return buffer.toString();
  };
  function SimpleArrayMap() {
    this._size_1 = 0;
  }
  SimpleArrayMap.$metadata$ = classMeta('SimpleArrayMap');
  function get_CONCURRENT_MODIFICATION_EXCEPTIONS() {
    return CONCURRENT_MODIFICATION_EXCEPTIONS;
  }
  var CONCURRENT_MODIFICATION_EXCEPTIONS;
  function get_BASE_SIZE() {
    return BASE_SIZE;
  }
  var BASE_SIZE;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_TAG() {
    return TAG;
  }
  var TAG;
  function ResourceLoader() {
  }
  ResourceLoader.$metadata$ = interfaceMeta('ResourceLoader');
  function Companion_3() {
    Companion_instance_3 = this;
    this.MaximumAsyncTimeout_1 = new Long(15000, 0);
  }
  Companion_3.prototype.get_MaximumAsyncTimeout_umyww4_k$ = function () {
    return this.MaximumAsyncTimeout_1;
  };
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_13() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Font() {
    Companion_getInstance_13();
  }
  Font.$metadata$ = interfaceMeta('Font');
  function PlatformFontLoader() {
  }
  PlatformFontLoader.$metadata$ = interfaceMeta('PlatformFontLoader');
  function toFontFamily(_this__u8e3s4) {
    return FontFamily_0([_this__u8e3s4]);
  }
  function Resolver() {
  }
  Resolver.$metadata$ = interfaceMeta('Resolver');
  function Companion_4() {
    Companion_instance_4 = this;
    this.Default_1 = new DefaultFontFamily();
    this.SansSerif_1 = new GenericFontFamily('sans-serif', 'FontFamily.SansSerif');
    this.Serif_1 = new GenericFontFamily('serif', 'FontFamily.Serif');
    this.Monospace_1 = new GenericFontFamily('monospace', 'FontFamily.Monospace');
    this.Cursive_1 = new GenericFontFamily('cursive', 'FontFamily.Cursive');
  }
  Companion_4.prototype.get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  Companion_4.prototype.get_SansSerif_4qz17l_k$ = function () {
    return this.SansSerif_1;
  };
  Companion_4.prototype.get_Serif_igv9ro_k$ = function () {
    return this.Serif_1;
  };
  Companion_4.prototype.get_Monospace_hz2yii_k$ = function () {
    return this.Monospace_1;
  };
  Companion_4.prototype.get_Cursive_nlhumc_k$ = function () {
    return this.Cursive_1;
  };
  Companion_4.$metadata$ = objectMeta('Companion');
  var Companion_instance_4;
  function Companion_getInstance_14() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function FontFamily(canLoadSynchronously) {
    Companion_getInstance_14();
    this.canLoadSynchronously_1 = canLoadSynchronously;
  }
  FontFamily.prototype.get_canLoadSynchronously_7ivot3_k$ = function () {
    return this.canLoadSynchronously_1;
  };
  FontFamily.$metadata$ = classMeta('FontFamily');
  function SystemFontFamily() {
    FontFamily.call(this, true);
    this.$stable_1 = 0;
  }
  SystemFontFamily.$metadata$ = classMeta('SystemFontFamily', undefined, undefined, undefined, undefined, FontFamily.prototype);
  function DefaultFontFamily() {
    SystemFontFamily.call(this);
  }
  DefaultFontFamily.prototype.toString = function () {
    return 'FontFamily.Default';
  };
  DefaultFontFamily.$metadata$ = classMeta('DefaultFontFamily', undefined, undefined, undefined, undefined, SystemFontFamily.prototype);
  function _get_fontFamilyName__opab5f($this) {
    return $this.fontFamilyName_1;
  }
  function GenericFontFamily(name, fontFamilyName) {
    SystemFontFamily.call(this);
    this.name_1 = name;
    this.fontFamilyName_1 = fontFamilyName;
  }
  GenericFontFamily.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  GenericFontFamily.prototype.toString = function () {
    return this.fontFamilyName_1;
  };
  GenericFontFamily.$metadata$ = classMeta('GenericFontFamily', undefined, undefined, undefined, undefined, SystemFontFamily.prototype);
  function FileBasedFontFamily() {
    FontFamily.call(this, false);
    this.$stable_1 = 0;
  }
  FileBasedFontFamily.$metadata$ = classMeta('FileBasedFontFamily', undefined, undefined, undefined, undefined, FontFamily.prototype);
  function LoadedFontFamily(typeface) {
    FontFamily.call(this, true);
    this.typeface_1 = typeface;
    this.$stable_1 = 0;
  }
  LoadedFontFamily.prototype.get_typeface_s1tqao_k$ = function () {
    return this.typeface_1;
  };
  LoadedFontFamily.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LoadedFontFamily))
      return false;
    if (!equals(this.typeface_1, other.typeface_1))
      return false;
    return true;
  };
  LoadedFontFamily.prototype.hashCode = function () {
    return hashCode(this.typeface_1);
  };
  LoadedFontFamily.prototype.toString = function () {
    return 'LoadedFontFamily(typeface=' + this.typeface_1 + ')';
  };
  LoadedFontFamily.$metadata$ = classMeta('LoadedFontFamily', undefined, undefined, undefined, undefined, FontFamily.prototype);
  function FontListFontFamily(fonts) {
    FileBasedFontFamily.call(this);
    this.$$delegate_0__1 = fonts;
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$0 = !fonts.isEmpty_y1axqb_k$();
    var tmp0_check = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.text.font.FontListFontFamily.<anonymous>' call
      tmp$ret$1 = 'At least one font should be passed to FontFamily';
      var message = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.fonts_1 = ArrayList_init_$Create$_1(fonts);
  }
  FontListFontFamily.prototype.get_size_woubt6_k$ = function () {
    return this.$$delegate_0__1.get_size_woubt6_k$();
  };
  FontListFontFamily.prototype.contains_m15m86_k$ = function (element) {
    return this.$$delegate_0__1.contains_2ehdt1_k$(element);
  };
  FontListFontFamily.prototype.contains_2ehdt1_k$ = function (element) {
    if (!(!(element == null) ? isInterface(element, Font) : false))
      return false;
    return this.contains_m15m86_k$((!(element == null) ? isInterface(element, Font) : false) ? element : THROW_CCE());
  };
  FontListFontFamily.prototype.containsAll_3sdfdp_k$ = function (elements) {
    return this.$$delegate_0__1.containsAll_jr3fla_k$(elements);
  };
  FontListFontFamily.prototype.containsAll_jr3fla_k$ = function (elements) {
    return this.containsAll_3sdfdp_k$(elements);
  };
  FontListFontFamily.prototype.get_fkrdnv_k$ = function (index) {
    return this.$$delegate_0__1.get_fkrdnv_k$(index);
  };
  FontListFontFamily.prototype.indexOf_st0xpg_k$ = function (element) {
    return this.$$delegate_0__1.indexOf_dcv8dt_k$(element);
  };
  FontListFontFamily.prototype.indexOf_dcv8dt_k$ = function (element) {
    if (!(!(element == null) ? isInterface(element, Font) : false))
      return -1;
    return this.indexOf_st0xpg_k$((!(element == null) ? isInterface(element, Font) : false) ? element : THROW_CCE());
  };
  FontListFontFamily.prototype.isEmpty_y1axqb_k$ = function () {
    return this.$$delegate_0__1.isEmpty_y1axqb_k$();
  };
  FontListFontFamily.prototype.iterator_jk1svi_k$ = function () {
    return this.$$delegate_0__1.iterator_jk1svi_k$();
  };
  FontListFontFamily.prototype.lastIndexOf_3okdbi_k$ = function (element) {
    return this.$$delegate_0__1.lastIndexOf_rzx8t5_k$(element);
  };
  FontListFontFamily.prototype.lastIndexOf_rzx8t5_k$ = function (element) {
    if (!(!(element == null) ? isInterface(element, Font) : false))
      return -1;
    return this.lastIndexOf_3okdbi_k$((!(element == null) ? isInterface(element, Font) : false) ? element : THROW_CCE());
  };
  FontListFontFamily.prototype.listIterator_xjshxw_k$ = function () {
    return this.$$delegate_0__1.listIterator_xjshxw_k$();
  };
  FontListFontFamily.prototype.listIterator_5hanv9_k$ = function (index) {
    return this.$$delegate_0__1.listIterator_5hanv9_k$(index);
  };
  FontListFontFamily.prototype.subList_d153ha_k$ = function (fromIndex, toIndex) {
    return this.$$delegate_0__1.subList_d153ha_k$(fromIndex, toIndex);
  };
  FontListFontFamily.prototype.get_fonts_irho7v_k$ = function () {
    return this.fonts_1;
  };
  FontListFontFamily.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontListFontFamily))
      return false;
    if (!equals(this.fonts_1, other.fonts_1))
      return false;
    return true;
  };
  FontListFontFamily.prototype.hashCode = function () {
    return hashCode(this.fonts_1);
  };
  FontListFontFamily.prototype.toString = function () {
    return 'FontListFontFamily(fonts=' + this.fonts_1 + ')';
  };
  FontListFontFamily.$metadata$ = classMeta('FontListFontFamily', [List], undefined, undefined, undefined, FileBasedFontFamily.prototype);
  function FontFamily_0(fonts) {
    return new FontListFontFamily(asList(fonts));
  }
  function get_GlobalTypefaceRequestCache() {
    init_properties_FontFamilyResolver_kt_7tanwf();
    return GlobalTypefaceRequestCache;
  }
  var GlobalTypefaceRequestCache;
  function get_GlobalAsyncTypefaceCache() {
    init_properties_FontFamilyResolver_kt_7tanwf();
    return GlobalAsyncTypefaceCache;
  }
  var GlobalAsyncTypefaceCache;
  function FontFamilyResolverImpl_init_$Init$(platformFontLoader, platformResolveInterceptor, typefaceRequestCache, fontListFontFamilyTypefaceAdapter, platformFamilyTypefaceAdapter, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      platformResolveInterceptor = Companion_getInstance_15().Default_1;
    if (!(($mask0 & 4) === 0))
      typefaceRequestCache = get_GlobalTypefaceRequestCache();
    if (!(($mask0 & 8) === 0)) {
      var tmp = get_GlobalAsyncTypefaceCache();
      fontListFontFamilyTypefaceAdapter = FontListFontFamilyTypefaceAdapter_init_$Create$(tmp, null, 2, null);
    }
    if (!(($mask0 & 16) === 0))
      platformFamilyTypefaceAdapter = new PlatformFontFamilyTypefaceAdapter();
    FontFamilyResolverImpl.call($this, platformFontLoader, platformResolveInterceptor, typefaceRequestCache, fontListFontFamilyTypefaceAdapter, platformFamilyTypefaceAdapter);
    return $this;
  }
  function FontFamilyResolverImpl_init_$Create$(platformFontLoader, platformResolveInterceptor, typefaceRequestCache, fontListFontFamilyTypefaceAdapter, platformFamilyTypefaceAdapter, $mask0, $marker) {
    return FontFamilyResolverImpl_init_$Init$(platformFontLoader, platformResolveInterceptor, typefaceRequestCache, fontListFontFamilyTypefaceAdapter, platformFamilyTypefaceAdapter, $mask0, $marker, Object.create(FontFamilyResolverImpl.prototype));
  }
  function _get_platformResolveInterceptor__j8yljz($this) {
    return $this.platformResolveInterceptor_1;
  }
  function _get_typefaceRequestCache__6x0zxb($this) {
    return $this.typefaceRequestCache_1;
  }
  function _get_fontListFontFamilyTypefaceAdapter__9wmrev($this) {
    return $this.fontListFontFamilyTypefaceAdapter_1;
  }
  function _get_platformFamilyTypefaceAdapter__lu65u8($this) {
    return $this.platformFamilyTypefaceAdapter_1;
  }
  function _get_createDefaultTypeface__ho6dxn($this) {
    return $this.createDefaultTypeface_1;
  }
  function resolve($this, typefaceRequest) {
    var result = $this.typefaceRequestCache_1.runCached_i96p5x_k$(typefaceRequest, FontFamilyResolverImpl$resolve$lambda($this, typefaceRequest));
    return result;
  }
  function FontFamilyResolverImpl$createDefaultTypeface$lambda(this$0) {
    return function (it) {
      return resolve(this$0, it.copy$default_jauo7a_k$(null, null, null, null, null, 30, null)).get_value_j01efc_k$();
    };
  }
  function FontFamilyResolverImpl$preload$lambda$lambda(it) {
    return Unit_getInstance();
  }
  function FontFamilyResolverImpl$preload$lambda$lambda_0(it) {
    return Unit_getInstance();
  }
  function FontFamilyResolverImpl$preload$lambda(this$0) {
    return function (typeRequest) {
      var tmp0_elvis_lhs = this$0.fontListFontFamilyTypefaceAdapter_1.resolve_wbzvw9_k$(typeRequest, this$0.platformFontLoader_1, FontFamilyResolverImpl$preload$lambda$lambda, this$0.createDefaultTypeface_1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp = this$0.platformFamilyTypefaceAdapter_1.resolve_wbzvw9_k$(typeRequest, this$0.platformFontLoader_1, FontFamilyResolverImpl$preload$lambda$lambda_0, this$0.createDefaultTypeface_1);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('Could not load font');
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      return tmp_0;
    };
  }
  function FontFamilyResolverImpl$resolve$lambda(this$0, $typefaceRequest) {
    return function (onAsyncCompletion) {
      var tmp0_elvis_lhs = this$0.fontListFontFamilyTypefaceAdapter_1.resolve_wbzvw9_k$($typefaceRequest, this$0.platformFontLoader_1, onAsyncCompletion, this$0.createDefaultTypeface_1);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.platformFamilyTypefaceAdapter_1.resolve_wbzvw9_k$($typefaceRequest, this$0.platformFontLoader_1, onAsyncCompletion, this$0.createDefaultTypeface_1) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('Could not load font');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      return tmp;
    };
  }
  function $preloadCOROUTINE$0(_this__u8e3s4, fontFamily, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.fontFamily_1 = fontFamily;
  }
  $preloadCOROUTINE$0.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            var tmp_0 = this.fontFamily_1;
            if (!(tmp_0 instanceof FontListFontFamily))
              return Unit_getInstance();
            this.state_1 = 1;
            suspendResult = this._this__u8e3s4__1.fontListFontFamilyTypefaceAdapter_1.preload_5j1p48_k$(this.fontFamily_1, this._this__u8e3s4__1.platformFontLoader_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_fastMap = this.fontFamily_1.fonts_1;
            var target = ArrayList_init_$Create$_0(tmp0_fastMap.get_size_woubt6_k$());
            var inductionVariable = 0;
            var last = tmp0_fastMap.get_size_woubt6_k$() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = tmp0_fastMap.get_fkrdnv_k$(index);
                var tmp0_plusAssign = new TypefaceRequest(this._this__u8e3s4__1.platformResolveInterceptor_1.interceptFontFamily_ok416z_k$(this.fontFamily_1), this._this__u8e3s4__1.platformResolveInterceptor_1.interceptFontWeight_yj7vf0_k$(item.get_weight_lbhkzl_k$()), this._this__u8e3s4__1.platformResolveInterceptor_1.interceptFontStyle_aqbvzf_k$(item.get_style_e2e1yp_k$()), Companion_getInstance_19().All_1, this._this__u8e3s4__1.platformFontLoader_1.get_cacheKey_w22q12_k$());
                target.add_1j60pz_k$(tmp0_plusAssign);
              }
               while (inductionVariable <= last);
            var typeRequests = target;
            this._this__u8e3s4__1.typefaceRequestCache_1.preWarmCache_a6a4xg_k$(typeRequests, FontFamilyResolverImpl$preload$lambda(this._this__u8e3s4__1));
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
  $preloadCOROUTINE$0.$metadata$ = classMeta('$preloadCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function FontFamilyResolverImpl(platformFontLoader, platformResolveInterceptor, typefaceRequestCache, fontListFontFamilyTypefaceAdapter, platformFamilyTypefaceAdapter) {
    this.platformFontLoader_1 = platformFontLoader;
    this.platformResolveInterceptor_1 = platformResolveInterceptor;
    this.typefaceRequestCache_1 = typefaceRequestCache;
    this.fontListFontFamilyTypefaceAdapter_1 = fontListFontFamilyTypefaceAdapter;
    this.platformFamilyTypefaceAdapter_1 = platformFamilyTypefaceAdapter;
    var tmp = this;
    tmp.createDefaultTypeface_1 = FontFamilyResolverImpl$createDefaultTypeface$lambda(this);
  }
  FontFamilyResolverImpl.prototype.get_platformFontLoader_35ioim_k$ = function () {
    return this.platformFontLoader_1;
  };
  FontFamilyResolverImpl.prototype.preload_i81elv_k$ = function (fontFamily, $cont) {
    var tmp = new $preloadCOROUTINE$0(this, fontFamily, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  FontFamilyResolverImpl.prototype.resolve_3z78ru_k$ = function (fontFamily, fontWeight, fontStyle, fontSynthesis) {
    return resolve(this, new TypefaceRequest(this.platformResolveInterceptor_1.interceptFontFamily_ok416z_k$(fontFamily), this.platformResolveInterceptor_1.interceptFontWeight_yj7vf0_k$(fontWeight), this.platformResolveInterceptor_1.interceptFontStyle_aqbvzf_k$(fontStyle), this.platformResolveInterceptor_1.interceptFontSynthesis_3mzb7i_k$(fontSynthesis), this.platformFontLoader_1.get_cacheKey_w22q12_k$()));
  };
  FontFamilyResolverImpl.$metadata$ = classMeta('FontFamilyResolverImpl', [Resolver]);
  function _get_resultCache__mkt3v0($this) {
    return $this.resultCache_1;
  }
  function TypefaceRequestCache$runCached$lambda(this$0, $typefaceRequest) {
    return function (finalResult) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.text.synchronized' call
      var tmp0_synchronized = this$0.lock_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp;
      if (finalResult.get_cacheable_mudhp_k$()) {
        this$0.resultCache_1.put_3mhbri_k$($typefaceRequest, finalResult);
        tmp = Unit_getInstance();
      } else {
        this$0.resultCache_1.remove_8hbkc0_k$($typefaceRequest);
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      return Unit_getInstance();
    };
  }
  function TypefaceRequestCache() {
    this.lock_1 = createSynchronizedObject();
    this.resultCache_1 = LruCache_init_$Create$(16);
  }
  TypefaceRequestCache.prototype.get_lock_wopyt0_k$ = function () {
    return this.lock_1;
  };
  TypefaceRequestCache.prototype.runCached_i96p5x_k$ = function (typefaceRequest, resolveTypeface) {
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.lock_1;
    var tmp$ret$3;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.runCached.<anonymous>' call
    var tmp0_safe_receiver = this.resultCache_1.get_1mhr4y_k$(typefaceRequest);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.runCached.<anonymous>.<anonymous>' call
      var tmp_0;
      if (tmp0_safe_receiver.get_cacheable_mudhp_k$()) {
        return tmp0_safe_receiver;
      } else {
        tmp_0 = this.resultCache_1.remove_8hbkc0_k$(typefaceRequest);
      }
      tmp$ret$0 = tmp_0;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp_1;
    try {
      tmp_1 = resolveTypeface(TypefaceRequestCache$runCached$lambda(this, typefaceRequest));
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        throw IllegalStateException_init_$Create$_0('Could not load font', $p);
      } else {
        throw $p;
      }
      tmp_1 = tmp_2;
    }
    var currentTypefaceResult = tmp_1;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp1_synchronized = this.lock_1;
    var tmp$ret$5;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp_3;
    if (this.resultCache_1.get_1mhr4y_k$(typefaceRequest) == null ? currentTypefaceResult.get_cacheable_mudhp_k$() : false) {
      this.resultCache_1.put_3mhbri_k$(typefaceRequest, currentTypefaceResult);
      tmp_3 = Unit_getInstance();
    }
    tmp$ret$5 = tmp_3;
    tmp$ret$6 = tmp$ret$5;
    return currentTypefaceResult;
  };
  TypefaceRequestCache.prototype.preWarmCache_a6a4xg_k$ = function (typefaceRequests, resolveTypeface) {
    var inductionVariable = 0;
    var last = typefaceRequests.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var typeRequest = typefaceRequests.get_fkrdnv_k$(i);
        var tmp$ret$2;
        // Inline function 'androidx.compose.ui.text.synchronized' call
        var tmp0_synchronized = this.lock_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.preWarmCache.<anonymous>' call
        tmp$ret$0 = this.resultCache_1.get_1mhr4y_k$(typeRequest);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        var prior = tmp$ret$2;
        if (!(prior == null))
          continue $l$loop_0;
        var tmp;
        try {
          tmp = resolveTypeface(typeRequest);
        } catch ($p) {
          var tmp_0;
          if ($p instanceof Exception) {
            throw IllegalStateException_init_$Create$_0('Could not load font', $p);
          } else {
            throw $p;
          }
          tmp = tmp_0;
        }
        var next = tmp;
        if (next instanceof Async)
          continue $l$loop_0;
        var tmp$ret$5;
        // Inline function 'androidx.compose.ui.text.synchronized' call
        var tmp1_synchronized = this.lock_1;
        var tmp$ret$4;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.preWarmCache.<anonymous>' call
        tmp$ret$3 = this.resultCache_1.put_3mhbri_k$(typeRequest, next);
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = tmp$ret$4;
      }
       while (inductionVariable <= last);
  };
  TypefaceRequestCache.prototype.get_kfouzs_k$ = function (typefaceRequest) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.lock_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.get.<anonymous>' call
    tmp$ret$0 = this.resultCache_1.get_1mhr4y_k$(typefaceRequest);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  TypefaceRequestCache.prototype.get_size_woubt6_k$ = function () {
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.lock_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.<get-size>.<anonymous>' call
    tmp$ret$0 = this.resultCache_1.get_size_woubt6_k$();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  TypefaceRequestCache.$metadata$ = classMeta('TypefaceRequestCache');
  function PlatformResolveInterceptor$Companion$Default$1() {
  }
  PlatformResolveInterceptor$Companion$Default$1.$metadata$ = classMeta(undefined, [PlatformResolveInterceptor]);
  function Companion_5() {
    Companion_instance_5 = this;
    var tmp = this;
    tmp.Default_1 = new PlatformResolveInterceptor$Companion$Default$1();
  }
  Companion_5.prototype.get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  Companion_5.$metadata$ = objectMeta('Companion');
  var Companion_instance_5;
  function Companion_getInstance_15() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function PlatformResolveInterceptor() {
    Companion_getInstance_15();
  }
  PlatformResolveInterceptor.$metadata$ = interfaceMeta('PlatformResolveInterceptor');
  function TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    this.fontFamily_1 = fontFamily;
    this.fontWeight_1 = fontWeight;
    this.fontStyle_1 = fontStyle;
    this.fontSynthesis_1 = fontSynthesis;
    this.resourceLoaderCacheKey_1 = resourceLoaderCacheKey;
  }
  TypefaceRequest.prototype.get_fontFamily_ulphcs_k$ = function () {
    return this.fontFamily_1;
  };
  TypefaceRequest.prototype.get_fontWeight_wbif2o_k$ = function () {
    return this.fontWeight_1;
  };
  TypefaceRequest.prototype.get_fontStyle_htc78e_k$ = function () {
    return this.fontStyle_1;
  };
  TypefaceRequest.prototype.get_fontSynthesis_f3q6y0_k$ = function () {
    return this.fontSynthesis_1;
  };
  TypefaceRequest.prototype.get_resourceLoaderCacheKey_29b1wn_k$ = function () {
    return this.resourceLoaderCacheKey_1;
  };
  TypefaceRequest.prototype.component1_7eebsc_k$ = function () {
    return this.fontFamily_1;
  };
  TypefaceRequest.prototype.component2_7eebsb_k$ = function () {
    return this.fontWeight_1;
  };
  TypefaceRequest.prototype.component3_phv0lb_k$ = function () {
    return this.fontStyle_1;
  };
  TypefaceRequest.prototype.component4_rmvhp9_k$ = function () {
    return this.fontSynthesis_1;
  };
  TypefaceRequest.prototype.component5_7eebs8_k$ = function () {
    return this.resourceLoaderCacheKey_1;
  };
  TypefaceRequest.prototype.copy_thy6aa_k$ = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    return new TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey);
  };
  TypefaceRequest.prototype.copy$default_jauo7a_k$ = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      fontFamily = this.fontFamily_1;
    if (!(($mask0 & 2) === 0))
      fontWeight = this.fontWeight_1;
    if (!(($mask0 & 4) === 0))
      fontStyle = this.fontStyle_1;
    if (!(($mask0 & 8) === 0))
      fontSynthesis = this.fontSynthesis_1;
    if (!(($mask0 & 16) === 0))
      resourceLoaderCacheKey = this.resourceLoaderCacheKey_1;
    return this.copy_thy6aa_k$(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey);
  };
  TypefaceRequest.prototype.toString = function () {
    return 'TypefaceRequest(fontFamily=' + this.fontFamily_1 + ', fontWeight=' + this.fontWeight_1 + ', fontStyle=' + new FontStyle(this.fontStyle_1) + ', fontSynthesis=' + new FontSynthesis(this.fontSynthesis_1) + ', resourceLoaderCacheKey=' + toString_0(this.resourceLoaderCacheKey_1) + ')';
  };
  TypefaceRequest.prototype.hashCode = function () {
    var result = this.fontFamily_1 == null ? 0 : hashCode(this.fontFamily_1);
    result = imul(result, 31) + this.fontWeight_1.hashCode() | 0;
    result = imul(result, 31) + FontStyle__hashCode_impl_7qhg4w(this.fontStyle_1) | 0;
    result = imul(result, 31) + FontSynthesis__hashCode_impl_4wi11v(this.fontSynthesis_1) | 0;
    result = imul(result, 31) + (this.resourceLoaderCacheKey_1 == null ? 0 : hashCode(this.resourceLoaderCacheKey_1)) | 0;
    return result;
  };
  TypefaceRequest.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypefaceRequest))
      return false;
    var tmp0_other_with_cast = other instanceof TypefaceRequest ? other : THROW_CCE();
    if (!equals(this.fontFamily_1, tmp0_other_with_cast.fontFamily_1))
      return false;
    if (!this.fontWeight_1.equals(tmp0_other_with_cast.fontWeight_1))
      return false;
    if (!(this.fontStyle_1 === tmp0_other_with_cast.fontStyle_1))
      return false;
    if (!(this.fontSynthesis_1 === tmp0_other_with_cast.fontSynthesis_1))
      return false;
    if (!equals(this.resourceLoaderCacheKey_1, tmp0_other_with_cast.resourceLoaderCacheKey_1))
      return false;
    return true;
  };
  TypefaceRequest.$metadata$ = classMeta('TypefaceRequest');
  function Immutable_init_$Init$(value, cacheable, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cacheable = true;
    Immutable.call($this, value, cacheable);
    return $this;
  }
  function Immutable_init_$Create$(value, cacheable, $mask0, $marker) {
    return Immutable_init_$Init$(value, cacheable, $mask0, $marker, Object.create(Immutable.prototype));
  }
  function Immutable(value, cacheable) {
    this.value_1 = value;
    this.cacheable_1 = cacheable;
    this.$stable_1 = 0;
  }
  Immutable.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  Immutable.prototype.get_cacheable_mudhp_k$ = function () {
    return this.cacheable_1;
  };
  Immutable.$metadata$ = classMeta('Immutable', [TypefaceResult]);
  function Async(current) {
    this.current_1 = current;
    this.$stable_1 = 0;
  }
  Async.prototype.get_current_jwi6j4_k$ = function () {
    return this.current_1;
  };
  Async.prototype.get_value_j01efc_k$ = function () {
    return this.current_1.get_value_j01efc_k$();
  };
  Async.prototype.get_cacheable_mudhp_k$ = function () {
    return this.current_1.cacheable_1;
  };
  Async.$metadata$ = classMeta('Async', [TypefaceResult, State]);
  function TypefaceResult() {
  }
  TypefaceResult.$metadata$ = interfaceMeta('TypefaceResult', [State]);
  var properties_initialized_FontFamilyResolver_kt_43uw85;
  function init_properties_FontFamilyResolver_kt_7tanwf() {
    if (properties_initialized_FontFamilyResolver_kt_43uw85) {
    } else {
      properties_initialized_FontFamilyResolver_kt_43uw85 = true;
      GlobalTypefaceRequestCache = new TypefaceRequestCache();
      GlobalAsyncTypefaceCache = new AsyncTypefaceCache();
    }
  }
  function FontFamilyTypefaceAdapter() {
  }
  FontFamilyTypefaceAdapter.$metadata$ = interfaceMeta('FontFamilyTypefaceAdapter');
  function _AsyncTypefaceResult___init__impl__h4msax(result) {
    return result;
  }
  function _AsyncTypefaceResult___get_result__impl__kpcqqb($this) {
    return $this;
  }
  function _AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca($this) {
    return _AsyncTypefaceResult___get_result__impl__kpcqqb($this) == null;
  }
  function AsyncTypefaceResult__toString_impl_imltdd($this) {
    return 'AsyncTypefaceResult(result=' + toString_0($this) + ')';
  }
  function AsyncTypefaceResult__hashCode_impl_34k3fi($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function AsyncTypefaceResult__equals_impl_4qqxz2($this, other) {
    if (!(other instanceof AsyncTypefaceResult))
      return false;
    var tmp0_other_with_cast = other instanceof AsyncTypefaceResult ? other.result_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function AsyncTypefaceResult(result) {
    this.result_1 = result;
  }
  AsyncTypefaceResult.prototype.toString = function () {
    return AsyncTypefaceResult__toString_impl_imltdd(this.result_1);
  };
  AsyncTypefaceResult.prototype.hashCode = function () {
    return AsyncTypefaceResult__hashCode_impl_34k3fi(this.result_1);
  };
  AsyncTypefaceResult.prototype.equals = function (other) {
    return AsyncTypefaceResult__equals_impl_4qqxz2(this.result_1, other);
  };
  AsyncTypefaceResult.$metadata$ = classMeta('AsyncTypefaceResult');
  function _get_PermanentFailure__9wvopd($this) {
    return $this.PermanentFailure_1;
  }
  function Key(font, loaderKey) {
    this.font_1 = font;
    this.loaderKey_1 = loaderKey;
  }
  Key.prototype.get_font_wom55k_k$ = function () {
    return this.font_1;
  };
  Key.prototype.get_loaderKey_vl3btv_k$ = function () {
    return this.loaderKey_1;
  };
  Key.prototype.component1_7eebsc_k$ = function () {
    return this.font_1;
  };
  Key.prototype.component2_7eebsb_k$ = function () {
    return this.loaderKey_1;
  };
  Key.prototype.copy_m7n4q9_k$ = function (font, loaderKey) {
    return new Key(font, loaderKey);
  };
  Key.prototype.copy$default_7n6yph_k$ = function (font, loaderKey, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      font = this.font_1;
    if (!(($mask0 & 2) === 0))
      loaderKey = this.loaderKey_1;
    return this.copy_m7n4q9_k$(font, loaderKey);
  };
  Key.prototype.toString = function () {
    return 'Key(font=' + this.font_1 + ', loaderKey=' + toString_0(this.loaderKey_1) + ')';
  };
  Key.prototype.hashCode = function () {
    var result = hashCode(this.font_1);
    result = imul(result, 31) + (this.loaderKey_1 == null ? 0 : hashCode(this.loaderKey_1)) | 0;
    return result;
  };
  Key.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!equals(this.font_1, tmp0_other_with_cast.font_1))
      return false;
    if (!equals(this.loaderKey_1, tmp0_other_with_cast.loaderKey_1))
      return false;
    return true;
  };
  Key.$metadata$ = classMeta('Key');
  function _get_resultCache__mkt3v0_0($this) {
    return $this.resultCache_1;
  }
  function _get_permanentCache__oc9pt5($this) {
    return $this.permanentCache_1;
  }
  function _get_cacheLock__lfu8yk($this) {
    return $this.cacheLock_1;
  }
  function $runCachedCOROUTINE$1(_this__u8e3s4, font, platformFontLoader, forever, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.font_1 = font;
    this.platformFontLoader_1 = platformFontLoader;
    this.forever_1 = forever;
    this.block_1 = block;
  }
  $runCachedCOROUTINE$1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.key0__1 = new Key(this.font_1, this.platformFontLoader_1.get_cacheKey_w22q12_k$());
            var tmp_0 = this;
            tmp_0.tmp0_synchronized1__1 = this._this__u8e3s4__1.cacheLock_1;
            var tmp_1 = this;
            var tmp0_elvis_lhs = this._this__u8e3s4__1.resultCache_1.get_1mhr4y_k$(this.key0__1);
            tmp_1.priorResult2__1 = tmp0_elvis_lhs == null ? this._this__u8e3s4__1.permanentCache_1.get_1mhr4y_k$(this.key0__1) : tmp0_elvis_lhs;
            if (!(this.priorResult2__1 == null)) {
              return _AsyncTypefaceResult___get_result__impl__kpcqqb(this.priorResult2__1.result_1);
            }

            this.state_1 = 1;
            suspendResult = this.block_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1_also = suspendResult;
            var tmp0_synchronized = this._this__u8e3s4__1.cacheLock_1;
            if (tmp1_also == null) {
              this._this__u8e3s4__1.permanentCache_1.put_3mhbri_k$(this.key0__1, new AsyncTypefaceResult(this._this__u8e3s4__1.PermanentFailure_1));
            } else if (this.forever_1) {
              this._this__u8e3s4__1.permanentCache_1.put_3mhbri_k$(this.key0__1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(tmp1_also)));
            } else {
              this._this__u8e3s4__1.resultCache_1.put_3mhbri_k$(this.key0__1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(tmp1_also)));
            }

            return tmp1_also;
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
  $runCachedCOROUTINE$1.$metadata$ = classMeta('$runCachedCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function AsyncTypefaceCache() {
    this.PermanentFailure_1 = _AsyncTypefaceResult___init__impl__h4msax(null);
    this.resultCache_1 = LruCache_init_$Create$(16);
    var tmp = this;
    tmp.permanentCache_1 = SimpleArrayMap_init_$Create$_0(0, 1, null);
    this.cacheLock_1 = createSynchronizedObject();
  }
  AsyncTypefaceCache.prototype.put_z5rljh_k$ = function (font, platformFontLoader, result, forever) {
    var key = new Key(font, platformFontLoader.get_cacheKey_w22q12_k$());
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.cacheLock_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.put.<anonymous>' call
    var tmp;
    if (result == null) {
      tmp = this.permanentCache_1.put_3mhbri_k$(key, new AsyncTypefaceResult(this.PermanentFailure_1));
    } else if (forever) {
      tmp = this.permanentCache_1.put_3mhbri_k$(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    } else {
      tmp = this.resultCache_1.put_3mhbri_k$(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  AsyncTypefaceCache.prototype.put$default_1dy8l2_k$ = function (font, platformFontLoader, result, forever, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      forever = false;
    return this.put_z5rljh_k$(font, platformFontLoader, result, forever);
  };
  AsyncTypefaceCache.prototype.get_q1bm7w_k$ = function (font, platformFontLoader) {
    var key = new Key(font, platformFontLoader.get_cacheKey_w22q12_k$());
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.cacheLock_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.get.<anonymous>' call
    var tmp0_elvis_lhs = this.resultCache_1.get_1mhr4y_k$(key);
    tmp$ret$0 = tmp0_elvis_lhs == null ? this.permanentCache_1.get_1mhr4y_k$(key) : tmp0_elvis_lhs;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  AsyncTypefaceCache.prototype.runCached_dc5hvi_k$ = function (font, platformFontLoader, forever, block, $cont) {
    var tmp = new $runCachedCOROUTINE$1(this, font, platformFontLoader, forever, block, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  AsyncTypefaceCache.prototype.runCachedBlocking_wh48iw_k$ = function (font, platformFontLoader, block) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.cacheLock_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var key = new Key(font, platformFontLoader.get_cacheKey_w22q12_k$());
    var tmp0_elvis_lhs = this.resultCache_1.get_1mhr4y_k$(key);
    var priorResult = tmp0_elvis_lhs == null ? this.permanentCache_1.get_1mhr4y_k$(key) : tmp0_elvis_lhs;
    var tmp;
    if (!(priorResult == null)) {
      return _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.result_1);
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp1_also = block();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking.<anonymous>' call
    this.put$default_1dy8l2_k$(font, platformFontLoader, tmp1_also, false, 8, null);
    tmp$ret$2 = tmp1_also;
    return tmp$ret$2;
  };
  AsyncTypefaceCache.$metadata$ = classMeta('AsyncTypefaceCache');
  function _no_name_provided__qut3iv() {
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  _no_name_provided__qut3iv.prototype.handleException_w1h9is_k$ = function (context, exception) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.font.Companion.DropExceptionHandler.<anonymous>' call
    tmp$ret$0 = Unit_getInstance();
    return tmp$ret$0;
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [CoroutineExceptionHandler], undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda($resourceLoader, $item, resultContinuation) {
    this.$resourceLoader_1 = $resourceLoader;
    this.$item_1 = $item;
    CoroutineImpl.call(this, resultContinuation);
  }
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda.prototype.invoke_cvgqj3_k$ = function ($this$withTimeout, $cont) {
    var tmp = this.create_b6qu53_k$($this$withTimeout, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_cvgqj3_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = this.$resourceLoader_1.awaitLoad_kuymx_k$(this.$item_1, this);
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
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda.prototype.create_b6qu53_k$ = function ($this$withTimeout, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda(this.$resourceLoader_1, this.$item_1, completion);
    i.$this$withTimeout_1 = $this$withTimeout;
    return i;
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda.$metadata$ = classMeta('FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda_0($resourceLoader, $item, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda($resourceLoader, $item, resultContinuation);
    var l = function ($this$withTimeout, $cont) {
      return i.invoke_cvgqj3_k$($this$withTimeout, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda($item, $resourceLoader, resultContinuation) {
    this.$item_1 = $item;
    this.$resourceLoader_1 = $resourceLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda.prototype.invoke_p0bf06_k$ = function ($cont) {
    var tmp = this.create_lvr374_k$($cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda.prototype.invoke_34if6s_k$ = function ($cont) {
    return this.invoke_p0bf06_k$($cont);
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            Companion_getInstance_13();
            var tmp_0 = new Long(15000, 0);
            suspendResult = withTimeout(tmp_0, FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda_0(this.$resourceLoader_1, this.$item_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.TRY_RESULT0__1 = suspendResult;
            this.exceptionState_1 = 3;
            this.state_1 = 4;
            continue $sm;
          case 2:
            this.exceptionState_1 = 3;
            var tmp_1 = this.exception_1;
            if (tmp_1 instanceof Exception) {
              var cause = this.exception_1;
              var tmp_2 = this;
              throw IllegalStateException_init_$Create$_0('Unable to load font ' + this.$item_1, cause);
            } else {
              throw this.exception_1;
            }

            break;
          case 3:
            throw this.exception_1;
          case 4:
            this.exceptionState_1 = 3;
            var tmp0_elvis_lhs = this.TRY_RESULT0__1;
            var tmp_3;
            if (tmp0_elvis_lhs == null) {
              throw IllegalStateException_init_$Create$('Unable to load font ' + this.$item_1);
            } else {
              tmp_3 = tmp0_elvis_lhs;
            }

            return tmp_3;
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
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda.prototype.create_lvr374_k$ = function (completion) {
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda(this.$item_1, this.$resourceLoader_1, completion);
    return i;
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda.$metadata$ = classMeta('FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda_0($item, $resourceLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda($item, $resourceLoader, resultContinuation);
    var l = function ($cont) {
      return i.invoke_p0bf06_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter$preload$slambda$slambda(this$0, $item, $resourceLoader, resultContinuation) {
    this.this$0__1 = this$0;
    this.$item_1 = $item;
    this.$resourceLoader_1 = $resourceLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda.prototype.invoke_cvgqj3_k$ = function ($this$async, $cont) {
    var tmp = this.create_b6qu53_k$($this$async, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_cvgqj3_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = this.this$0__1.asyncTypefaceCache_1.runCached_dc5hvi_k$(this.$item_1, this.$resourceLoader_1, true, FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda_0(this.$item_1, this.$resourceLoader_1, null), this);
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
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda.prototype.create_b6qu53_k$ = function ($this$async, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda$slambda(this.this$0__1, this.$item_1, this.$resourceLoader_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda.$metadata$ = classMeta('FontListFontFamilyTypefaceAdapter$preload$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function FontListFontFamilyTypefaceAdapter$preload$slambda$slambda_0(this$0, $item, $resourceLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda$slambda(this$0, $item, $resourceLoader, resultContinuation);
    var l = function ($this$async, $cont) {
      return i.invoke_cvgqj3_k$($this$async, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter_init_$Init$(asyncTypefaceCache, injectedContext, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      asyncTypefaceCache = new AsyncTypefaceCache();
    if (!(($mask0 & 2) === 0))
      injectedContext = EmptyCoroutineContext_getInstance();
    FontListFontFamilyTypefaceAdapter.call($this, asyncTypefaceCache, injectedContext);
    return $this;
  }
  function FontListFontFamilyTypefaceAdapter_init_$Create$(asyncTypefaceCache, injectedContext, $mask0, $marker) {
    return FontListFontFamilyTypefaceAdapter_init_$Init$(asyncTypefaceCache, injectedContext, $mask0, $marker, Object.create(FontListFontFamilyTypefaceAdapter.prototype));
  }
  function _get_asyncTypefaceCache__u2d4d8($this) {
    return $this.asyncTypefaceCache_1;
  }
  function _set_asyncLoadScope__1wnnvf($this, _set____db54di) {
    $this.asyncLoadScope_1 = _set____db54di;
  }
  function _get_asyncLoadScope__nmfs61($this) {
    return $this.asyncLoadScope_1;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.fontMatcher_1 = new FontMatcher();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    tmp$ret$0 = new _no_name_provided__qut3iv();
    tmp.DropExceptionHandler_1 = tmp$ret$0;
  }
  Companion_6.prototype.get_fontMatcher_dx896u_k$ = function () {
    return this.fontMatcher_1;
  };
  Companion_6.prototype.get_DropExceptionHandler_ef4cy5_k$ = function () {
    return this.DropExceptionHandler_1;
  };
  Companion_6.$metadata$ = objectMeta('Companion');
  var Companion_instance_6;
  function Companion_getInstance_16() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function FontListFontFamilyTypefaceAdapter$preload$lambda(it) {
    return Unit_getInstance();
  }
  function FontListFontFamilyTypefaceAdapter$preload$slambda($asyncLoads, this$0, $resourceLoader, resultContinuation) {
    this.$asyncLoads_1 = $asyncLoads;
    this.this$0__1 = this$0;
    this.$resourceLoader_1 = $resourceLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  FontListFontFamilyTypefaceAdapter$preload$slambda.prototype.invoke_d6gbsu_k$ = function ($this$coroutineScope, $cont) {
    var tmp = this.create_b6qu53_k$($this$coroutineScope, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            var tmp_0 = this;
            var set = HashSet_init_$Create$(this.$asyncLoads_1.get_size_woubt6_k$());
            var target = ArrayList_init_$Create$_0(this.$asyncLoads_1.get_size_woubt6_k$());
            var inductionVariable = 0;
            var last = this.$asyncLoads_1.get_size_woubt6_k$() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = this.$asyncLoads_1.get_fkrdnv_k$(index);
                var key = item;
                if (set.add_1j60pz_k$(key)) {
                  target.add_1j60pz_k$(item);
                }
              }
               while (inductionVariable <= last);
            tmp_0.tmp0_fastMap0__1 = target;
            this.target1__1 = ArrayList_init_$Create$_0(this.tmp0_fastMap0__1.get_size_woubt6_k$());
            var inductionVariable_0 = 0;
            var last_0 = this.tmp0_fastMap0__1.get_size_woubt6_k$() - 1 | 0;
            if (inductionVariable_0 <= last_0)
              do {
                var index_0 = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var item_0 = this.tmp0_fastMap0__1.get_fkrdnv_k$(index_0);
                var tmp0_plusAssign = async$default(this.$this$coroutineScope_1, null, null, FontListFontFamilyTypefaceAdapter$preload$slambda$slambda_0(this.this$0__1, item_0, this.$resourceLoader_1, null), 3, null);
                this.target1__1.add_1j60pz_k$(tmp0_plusAssign);
              }
               while (inductionVariable_0 <= last_0);
            suspendResult = joinAll(this.target1__1, this);
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
  FontListFontFamilyTypefaceAdapter$preload$slambda.prototype.create_b6qu53_k$ = function ($this$coroutineScope, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda(this.$asyncLoads_1, this.this$0__1, this.$resourceLoader_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda.$metadata$ = classMeta('FontListFontFamilyTypefaceAdapter$preload$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function FontListFontFamilyTypefaceAdapter$preload$slambda_0($asyncLoads, this$0, $resourceLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda($asyncLoads, this$0, $resourceLoader, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.invoke_d6gbsu_k$($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation) {
    this.$asyncLoader_1 = $asyncLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  FontListFontFamilyTypefaceAdapter$resolve$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  FontListFontFamilyTypefaceAdapter$resolve$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  FontListFontFamilyTypefaceAdapter$resolve$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = this.$asyncLoader_1.load_ne61sj_k$(this);
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
  FontListFontFamilyTypefaceAdapter$resolve$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda(this.$asyncLoader_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  FontListFontFamilyTypefaceAdapter$resolve$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  FontListFontFamilyTypefaceAdapter$resolve$slambda.$metadata$ = classMeta('FontListFontFamilyTypefaceAdapter$resolve$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function FontListFontFamilyTypefaceAdapter$resolve$slambda_0($asyncLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter(asyncTypefaceCache, injectedContext) {
    Companion_getInstance_16();
    this.asyncTypefaceCache_1 = asyncTypefaceCache;
    this.asyncLoadScope_1 = CoroutineScope_0(Companion_getInstance_16().DropExceptionHandler_1.plus_rgw9wi_k$(injectedContext).plus_rgw9wi_k$(SupervisorJob(injectedContext.get_1pi7hg_k$(Key_getInstance_0()))));
  }
  FontListFontFamilyTypefaceAdapter.prototype.preload_5j1p48_k$ = function (family, resourceLoader, $cont) {
    if (!(family instanceof FontListFontFamily))
      return Unit_getInstance();
    var allFonts = family.fonts_1;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.text.fastDistinctBy' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    var tmp0_fastFilter = family.fonts_1;
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(tmp0_fastFilter.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastFilter.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastFilter.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.font.FontListFontFamilyTypefaceAdapter.preload.<anonymous>' call
        tmp$ret$0 = item.get_loadingStrategy_w877gz_k$() === Companion_getInstance_17().Async_1;
        if (tmp$ret$0) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_1j60pz_k$(item);
        }
      }
       while (inductionVariable <= last);
    tmp$ret$1 = target;
    var tmp1_fastMap = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(tmp1_fastMap.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = tmp1_fastMap.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = tmp1_fastMap.get_fkrdnv_k$(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$2;
        // Inline function 'androidx.compose.ui.text.font.FontListFontFamilyTypefaceAdapter.preload.<anonymous>' call
        tmp$ret$2 = to(item_0.get_weight_lbhkzl_k$(), new FontStyle(item_0.get_style_e2e1yp_k$()));
        var tmp0_plusAssign = tmp$ret$2;
        target_0.add_1j60pz_k$(tmp0_plusAssign);
      }
       while (inductionVariable_0 <= last_0);
    tmp$ret$3 = target_0;
    var tmp2_fastDistinctBy = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    var set = HashSet_init_$Create$(tmp2_fastDistinctBy.get_size_woubt6_k$());
    var target_1 = ArrayList_init_$Create$_0(tmp2_fastDistinctBy.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_1 = 0;
    var last_1 = tmp2_fastDistinctBy.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_1 <= last_1)
      do {
        var index_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var item_1 = tmp2_fastDistinctBy.get_fkrdnv_k$(index_1);
        // Inline function 'androidx.compose.ui.text.fastDistinctBy.<anonymous>' call
        var tmp$ret$4;
        // Inline function 'androidx.compose.ui.text.font.FontListFontFamilyTypefaceAdapter.preload.<anonymous>' call
        tmp$ret$4 = item_1;
        var key = tmp$ret$4;
        if (set.add_1j60pz_k$(key)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target_1.add_1j60pz_k$(item_1);
        }
      }
       while (inductionVariable_1 <= last_1);
    tmp$ret$5 = target_1;
    var asyncStyles = tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$6 = ArrayList_init_$Create$();
    var asyncLoads = tmp$ret$6;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_2 = 0;
    var last_2 = asyncStyles.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_2 <= last_2)
      do {
        var index_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        var item_2 = asyncStyles.get_fkrdnv_k$(index_2);
        // Inline function 'androidx.compose.ui.text.font.FontListFontFamilyTypefaceAdapter.preload.<anonymous>' call
        var fontWeight = item_2.component1_7eebsc_k$();
        var fontStyle = item_2.component2_7eebsb_k$().value_1;
        var matched = Companion_getInstance_16().fontMatcher_1.matchFont_7ocsoc_k$(allFonts, fontWeight, fontStyle);
        var typeRequest = new TypefaceRequest(family, fontWeight, fontStyle, Companion_getInstance_19().All_1, resourceLoader.get_cacheKey_w22q12_k$());
        var tmp0_container = firstImmediatelyAvailable(matched, typeRequest, this.asyncTypefaceCache_1, resourceLoader, FontListFontFamilyTypefaceAdapter$preload$lambda);
        var asyncFontsToLoad = tmp0_container.component1_7eebsc_k$();
        if (!(asyncFontsToLoad == null)) {
          asyncLoads.add_1j60pz_k$(first_0(asyncFontsToLoad));
        }
      }
       while (inductionVariable_2 <= last_2);
    return coroutineScope(FontListFontFamilyTypefaceAdapter$preload$slambda_0(asyncLoads, this, resourceLoader, null), $cont);
  };
  FontListFontFamilyTypefaceAdapter.prototype.resolve_wbzvw9_k$ = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.fontFamily_1;
    if (!(tmp instanceof FontListFontFamily))
      return null;
    var matched = Companion_getInstance_16().fontMatcher_1.matchFont_7ocsoc_k$(typefaceRequest.fontFamily_1.fonts_1, typefaceRequest.fontWeight_1, typefaceRequest.fontStyle_1);
    var tmp0_container = firstImmediatelyAvailable(matched, typefaceRequest, this.asyncTypefaceCache_1, platformFontLoader, createDefaultTypeface);
    var asyncFontsToLoad = tmp0_container.component1_7eebsc_k$();
    var synthesizedTypeface = tmp0_container.component2_7eebsb_k$();
    if (asyncFontsToLoad == null) {
      return Immutable_init_$Create$(synthesizedTypeface, false, 2, null);
    }
    var asyncLoader = new AsyncFontListLoader(asyncFontsToLoad, synthesizedTypeface, typefaceRequest, this.asyncTypefaceCache_1, onAsyncCompletion, platformFontLoader);
    var tmp_0 = this.asyncLoadScope_1;
    var tmp_1 = CoroutineStart_UNDISPATCHED_getInstance();
    launch$default(tmp_0, null, tmp_1, FontListFontFamilyTypefaceAdapter$resolve$slambda_0(asyncLoader, null), 1, null);
    return new Async(asyncLoader);
  };
  FontListFontFamilyTypefaceAdapter.$metadata$ = classMeta('FontListFontFamilyTypefaceAdapter', [FontFamilyTypefaceAdapter]);
  function _get_fontList__196yaq($this) {
    return $this.fontList_1;
  }
  function _get_typefaceRequest__ypbief($this) {
    return $this.typefaceRequest_1;
  }
  function _get_asyncTypefaceCache__u2d4d8_0($this) {
    return $this.asyncTypefaceCache_1;
  }
  function _get_onCompletion__aa185s($this) {
    return $this.onCompletion_1;
  }
  function _get_platformFontLoader__e61p92($this) {
    return $this.platformFontLoader_1;
  }
  function _set_value__lx0xdg($this, _set____db54di) {
    var tmp0_setValue = value$factory();
    return $this.value$delegate_1.set_value_rnwamw_k$(_set____db54di);
  }
  function AsyncFontListLoader$load$slambda(this$0, $item, resultContinuation) {
    this.this$0__1 = this$0;
    this.$item_1 = $item;
    CoroutineImpl.call(this, resultContinuation);
  }
  AsyncFontListLoader$load$slambda.prototype.invoke_p0bf06_k$ = function ($cont) {
    var tmp = this.create_lvr374_k$($cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  AsyncFontListLoader$load$slambda.prototype.invoke_34if6s_k$ = function ($cont) {
    return this.invoke_p0bf06_k$($cont);
  };
  AsyncFontListLoader$load$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = this.this$0__1.loadWithTimeoutOrNull_1il4qe_k$(this.$item_1, this);
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
  AsyncFontListLoader$load$slambda.prototype.create_lvr374_k$ = function (completion) {
    var i = new AsyncFontListLoader$load$slambda(this.this$0__1, this.$item_1, completion);
    return i;
  };
  AsyncFontListLoader$load$slambda.$metadata$ = classMeta('AsyncFontListLoader$load$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function AsyncFontListLoader$load$slambda_0(this$0, $item, resultContinuation) {
    var i = new AsyncFontListLoader$load$slambda(this$0, $item, resultContinuation);
    var l = function ($cont) {
      return i.invoke_p0bf06_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    this.this$0__1 = this$0;
    this.$this_loadWithTimeoutOrNull_1 = $this_loadWithTimeoutOrNull;
    CoroutineImpl.call(this, resultContinuation);
  }
  AsyncFontListLoader$loadWithTimeoutOrNull$slambda.prototype.invoke_cvgqj3_k$ = function ($this$withTimeoutOrNull, $cont) {
    var tmp = this.create_b6qu53_k$($this$withTimeoutOrNull, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  AsyncFontListLoader$loadWithTimeoutOrNull$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_cvgqj3_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  AsyncFontListLoader$loadWithTimeoutOrNull$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = this.this$0__1.platformFontLoader_1.awaitLoad_kuymx_k$(this.$this_loadWithTimeoutOrNull_1, this);
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
  AsyncFontListLoader$loadWithTimeoutOrNull$slambda.prototype.create_b6qu53_k$ = function ($this$withTimeoutOrNull, completion) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this.this$0__1, this.$this_loadWithTimeoutOrNull_1, completion);
    i.$this$withTimeoutOrNull_1 = $this$withTimeoutOrNull;
    return i;
  };
  AsyncFontListLoader$loadWithTimeoutOrNull$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  AsyncFontListLoader$loadWithTimeoutOrNull$slambda.$metadata$ = classMeta('AsyncFontListLoader$loadWithTimeoutOrNull$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $cont) {
      return i.invoke_cvgqj3_k$($this$withTimeoutOrNull, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $loadCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  $loadCOROUTINE$2.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 12;
            this.state_1 = 1;
            continue $sm;
          case 1:
            this.state_1 = 2;
            continue $sm;
          case 2:
            this.exceptionState_1 = 11;
            var tmp_0 = this;
            tmp_0.tmp0_fastForEach2__1 = this._this__u8e3s4__1.fontList_1;
            this.tmp0_iterator3__1 = get_indices(this.tmp0_fastForEach2__1).iterator_jk1svi_k$();
            this.state_1 = 3;
            continue $sm;
          case 3:
            if (!this.tmp0_iterator3__1.hasNext_bitz1p_k$()) {
              this.state_1 = 9;
              continue $sm;
            }

            this.index4__1 = this.tmp0_iterator3__1.next_20eer_k$();
            this.item5__1 = this.tmp0_fastForEach2__1.get_fkrdnv_k$(this.index4__1);
            if (this.item5__1.get_loadingStrategy_w877gz_k$() === Companion_getInstance_17().Async_1) {
              this.state_1 = 4;
              suspendResult = this._this__u8e3s4__1.asyncTypefaceCache_1.runCached_dc5hvi_k$(this.item5__1, this._this__u8e3s4__1.platformFontLoader_1, false, AsyncFontListLoader$load$slambda_0(this._this__u8e3s4__1, this.item5__1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.state_1 = 7;
              continue $sm;
            }

            break;
          case 4:
            this.typeface6__1 = suspendResult;
            if (!(this.typeface6__1 == null)) {
              _set_value__lx0xdg(this._this__u8e3s4__1, synthesizeTypeface(this._this__u8e3s4__1.typefaceRequest_1.fontSynthesis_1, this.typeface6__1, this.item5__1, this._this__u8e3s4__1.typefaceRequest_1.fontWeight_1, this._this__u8e3s4__1.typefaceRequest_1.fontStyle_1));
              this.tmp$ret$01__1 = Unit_getInstance();
              this.exceptionState_1 = 12;
              this.state_1 = 8;
              continue $sm;
            } else {
              this.state_1 = 5;
              suspendResult = yield_0(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 5:
            this.state_1 = 6;
            continue $sm;
          case 6:
            this.state_1 = 7;
            continue $sm;
          case 7:
            this.state_1 = 3;
            continue $sm;
          case 8:
            var shouldCache = get_isActive(this.get_context_h02k06_k$());
            this._this__u8e3s4__1.cacheable_1 = false;
            this._this__u8e3s4__1.onCompletion_1(new Immutable(this._this__u8e3s4__1.get_value_j01efc_k$(), shouldCache));
            return Unit_getInstance();
          case 9:
            this.tmp$ret$20__1 = Unit_getInstance();
            this.exceptionState_1 = 12;
            this.state_1 = 10;
            continue $sm;
          case 10:
            var shouldCache_0 = get_isActive(this.get_context_h02k06_k$());
            this._this__u8e3s4__1.cacheable_1 = false;
            this._this__u8e3s4__1.onCompletion_1(new Immutable(this._this__u8e3s4__1.get_value_j01efc_k$(), shouldCache_0));
            return Unit_getInstance();
          case 11:
            this.exceptionState_1 = 12;
            var t = this.exception_1;
            var shouldCache_1 = get_isActive(this.get_context_h02k06_k$());
            this._this__u8e3s4__1.cacheable_1 = false;
            this._this__u8e3s4__1.onCompletion_1(new Immutable(this._this__u8e3s4__1.get_value_j01efc_k$(), shouldCache_1));
            throw t;
          case 12:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 12) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  $loadCOROUTINE$2.$metadata$ = classMeta('$loadCOROUTINE$2', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $loadWithTimeoutOrNullCOROUTINE$3(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this._this__u8e3s4__2 = _this__u8e3s4_0;
  }
  $loadWithTimeoutOrNullCOROUTINE$3.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            Companion_getInstance_13();
            var tmp_0 = new Long(15000, 0);
            suspendResult = withTimeoutOrNull(tmp_0, AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this._this__u8e3s4__1, this._this__u8e3s4__2, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.TRY_RESULT0__1 = suspendResult;
            this.exceptionState_1 = 3;
            this.state_1 = 4;
            continue $sm;
          case 2:
            this.exceptionState_1 = 3;
            var tmp_1 = this.exception_1;
            if (tmp_1 instanceof CancellationException) {
              var cancel = this.exception_1;
              var tmp_2 = this;
              var tmp_3;
              if (get_isActive(this.get_context_h02k06_k$())) {
                tmp_3 = null;
              } else {
                throw cancel;
              }
              tmp_2.TRY_RESULT0__1 = tmp_3;
              this.state_1 = 4;
              continue $sm;
            } else {
              var tmp_4 = this.exception_1;
              if (tmp_4 instanceof Exception) {
                var uncaughtFontLoadException = this.exception_1;
                var tmp_5 = this;
                var tmp0_safe_receiver = this.get_context_h02k06_k$().get_1pi7hg_k$(Key_getInstance());
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  tmp0_safe_receiver.handleException_w1h9is_k$(this.get_context_h02k06_k$(), IllegalStateException_init_$Create$_0('Unable to load font ' + this._this__u8e3s4__2, uncaughtFontLoadException));
                }
                tmp_5.TRY_RESULT0__1 = null;
                this.state_1 = 4;
                continue $sm;
              } else {
                throw this.exception_1;
              }
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
  $loadWithTimeoutOrNullCOROUTINE$3.$metadata$ = classMeta('$loadWithTimeoutOrNullCOROUTINE$3', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function AsyncFontListLoader(fontList, initialType, typefaceRequest, asyncTypefaceCache, onCompletion, platformFontLoader) {
    this.fontList_1 = fontList;
    this.typefaceRequest_1 = typefaceRequest;
    this.asyncTypefaceCache_1 = asyncTypefaceCache;
    this.onCompletion_1 = onCompletion;
    this.platformFontLoader_1 = platformFontLoader;
    var tmp = this;
    tmp.value$delegate_1 = mutableStateOf$default(initialType, null, 2, null);
    this.cacheable_1 = true;
  }
  AsyncFontListLoader.prototype.get_value_j01efc_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = value$factory_0();
    tmp$ret$0 = this.value$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  AsyncFontListLoader.prototype.set_cacheable_mjhhdi_k$ = function (_set____db54di) {
    this.cacheable_1 = _set____db54di;
  };
  AsyncFontListLoader.prototype.get_cacheable_mudhp_k$ = function () {
    return this.cacheable_1;
  };
  AsyncFontListLoader.prototype.load_ne61sj_k$ = function ($cont) {
    var tmp = new $loadCOROUTINE$2(this, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  AsyncFontListLoader.prototype.loadWithTimeoutOrNull_1il4qe_k$ = function (_this__u8e3s4, $cont) {
    var tmp = new $loadWithTimeoutOrNullCOROUTINE$3(this, _this__u8e3s4, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  AsyncFontListLoader.$metadata$ = classMeta('AsyncFontListLoader', [State]);
  function firstImmediatelyAvailable(_this__u8e3s4, typefaceRequest, asyncTypefaceCache, platformFontLoader, createDefaultTypeface) {
    var asyncFontsToLoad = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var idx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var font = _this__u8e3s4.get_fkrdnv_k$(idx);
        var tmp1_subject = font.get_loadingStrategy_w877gz_k$();
        if (tmp1_subject === Companion_getInstance_17().Blocking_1) {
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            var tmp$ret$2;
            // Inline function 'androidx.compose.ui.text.synchronized' call
            var tmp0_synchronized = asyncTypefaceCache.cacheLock_1;
            var tmp$ret$1;
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            var key = new Key(font, platformFontLoader.get_cacheKey_w22q12_k$());
            var tmp0_elvis_lhs = asyncTypefaceCache.resultCache_1.get_1mhr4y_k$(key);
            var priorResult = tmp0_elvis_lhs == null ? asyncTypefaceCache.permanentCache_1.get_1mhr4y_k$(key) : tmp0_elvis_lhs;
            var tmp;
            if (!(priorResult == null)) {
              tmp$ret$0 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.result_1);
              break $l$block;
            }
            tmp$ret$1 = tmp;
            tmp$ret$2 = tmp$ret$1;
            var tmp$ret$4;
            // Inline function 'kotlin.also' call
            var tmp$ret$3;
            // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>' call
            var tmp_0;
            try {
              tmp_0 = platformFontLoader.loadBlocking_w5fd92_k$(font);
            } catch ($p) {
              var tmp_1;
              if ($p instanceof Exception) {
                throw IllegalStateException_init_$Create$_0('Unable to load font ' + font, $p);
              } else {
                throw $p;
              }
              tmp_0 = tmp_1;
            }
            tmp$ret$3 = tmp_0;
            var tmp1_also = tmp$ret$3;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking.<anonymous>' call
            asyncTypefaceCache.put$default_1dy8l2_k$(font, platformFontLoader, tmp1_also, false, 8, null);
            tmp$ret$4 = tmp1_also;
            tmp$ret$0 = tmp$ret$4;
          }
          var tmp2_elvis_lhs = tmp$ret$0;
          var tmp_2;
          if (tmp2_elvis_lhs == null) {
            throw IllegalStateException_init_$Create$('Unable to load font ' + font);
          } else {
            tmp_2 = tmp2_elvis_lhs;
          }
          var result = tmp_2;
          return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.fontSynthesis_1, result, font, typefaceRequest.fontWeight_1, typefaceRequest.fontStyle_1));
        } else if (tmp1_subject === Companion_getInstance_17().OptionalLocal_1) {
          var tmp$ret$5;
          $l$block_0: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            var tmp$ret$7;
            // Inline function 'androidx.compose.ui.text.synchronized' call
            var tmp0_synchronized_0 = asyncTypefaceCache.cacheLock_1;
            var tmp$ret$6;
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            var key_0 = new Key(font, platformFontLoader.get_cacheKey_w22q12_k$());
            var tmp0_elvis_lhs_0 = asyncTypefaceCache.resultCache_1.get_1mhr4y_k$(key_0);
            var priorResult_0 = tmp0_elvis_lhs_0 == null ? asyncTypefaceCache.permanentCache_1.get_1mhr4y_k$(key_0) : tmp0_elvis_lhs_0;
            var tmp_3;
            if (!(priorResult_0 == null)) {
              tmp$ret$5 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult_0.result_1);
              break $l$block_0;
            }
            tmp$ret$6 = tmp_3;
            tmp$ret$7 = tmp$ret$6;
            var tmp$ret$14;
            // Inline function 'kotlin.also' call
            var tmp$ret$13;
            // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>' call
            var tmp$ret$12;
            // Inline function 'kotlin.Result.getOrNull' call
            var tmp$ret$11;
            // Inline function 'kotlin.runCatching' call
            var tmp_4;
            try {
              var tmp$ret$9;
              // Inline function 'kotlin.Companion.success' call
              var tmp0_success = Companion_getInstance_3();
              var tmp$ret$8;
              // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>.<anonymous>' call
              tmp$ret$8 = platformFontLoader.loadBlocking_w5fd92_k$(font);
              var tmp1_success = tmp$ret$8;
              tmp$ret$9 = _Result___init__impl__xyqfz8(tmp1_success);
              tmp_4 = tmp$ret$9;
            } catch ($p) {
              var tmp_5;
              if ($p instanceof Error) {
                var tmp$ret$10;
                // Inline function 'kotlin.Companion.failure' call
                var tmp2_failure = Companion_getInstance_3();
                tmp$ret$10 = _Result___init__impl__xyqfz8(createFailure($p));
                tmp_5 = tmp$ret$10;
              } else {
                throw $p;
              }
              tmp_4 = tmp_5;
            }
            tmp$ret$11 = tmp_4;
            var tmp0_getOrNull = tmp$ret$11;
            var tmp_6;
            if (_Result___get_isFailure__impl__jpiriv(tmp0_getOrNull)) {
              tmp_6 = null;
            } else {
              var tmp_7 = _Result___get_value__impl__bjfvqg(tmp0_getOrNull);
              tmp_6 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
            }
            tmp$ret$12 = tmp_6;
            tmp$ret$13 = tmp$ret$12;
            var tmp1_also_0 = tmp$ret$13;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking.<anonymous>' call
            asyncTypefaceCache.put$default_1dy8l2_k$(font, platformFontLoader, tmp1_also_0, false, 8, null);
            tmp$ret$14 = tmp1_also_0;
            tmp$ret$5 = tmp$ret$14;
          }
          var result_0 = tmp$ret$5;
          if (!(result_0 == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.fontSynthesis_1, result_0, font, typefaceRequest.fontWeight_1, typefaceRequest.fontStyle_1));
          }
        } else if (tmp1_subject === Companion_getInstance_17().Async_1) {
          var cacheResult = asyncTypefaceCache.get_q1bm7w_k$(font, platformFontLoader);
          if (cacheResult == null) {
            if (asyncFontsToLoad == null) {
              asyncFontsToLoad = mutableListOf([font]);
            } else {
              asyncFontsToLoad.add_1j60pz_k$(font);
            }
          } else if (_AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca(cacheResult.result_1)) {
            continue $l$loop;
          } else if (!(_AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.result_1) == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.fontSynthesis_1, _AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.result_1), font, typefaceRequest.fontWeight_1, typefaceRequest.fontStyle_1));
          }
        } else
          throw IllegalStateException_init_$Create$('Unknown font type ' + font);
      }
       while (inductionVariable <= last);
    var fallbackTypeface = createDefaultTypeface(typefaceRequest);
    return to(asyncFontsToLoad, fallbackTypeface);
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return _set_value__lx0xdg(receiver, value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return _set_value__lx0xdg(receiver, value);
    });
  }
  function _FontLoadingStrategy___init__impl__if1sp3(value) {
    return value;
  }
  function _FontLoadingStrategy___get_value__impl__ggsl83($this) {
    return $this;
  }
  function FontLoadingStrategy__toString_impl_fx0z8f($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_17().Blocking_1 ? 'Blocking' : tmp0_subject === Companion_getInstance_17().OptionalLocal_1 ? 'Optional' : tmp0_subject === Companion_getInstance_17().Async_1 ? 'Async' : 'Invalid(value=' + _FontLoadingStrategy___get_value__impl__ggsl83($this) + ')';
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.Blocking_1 = _FontLoadingStrategy___init__impl__if1sp3(0);
    this.OptionalLocal_1 = _FontLoadingStrategy___init__impl__if1sp3(1);
    this.Async_1 = _FontLoadingStrategy___init__impl__if1sp3(2);
  }
  Companion_7.prototype.get_Blocking_pdgcwr_k$ = function () {
    return this.Blocking_1;
  };
  Companion_7.prototype.get_OptionalLocal_iiqguv_k$ = function () {
    return this.OptionalLocal_1;
  };
  Companion_7.prototype.get_Async_e1a1ve_k$ = function () {
    return this.Async_1;
  };
  Companion_7.$metadata$ = objectMeta('Companion');
  var Companion_instance_7;
  function Companion_getInstance_17() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function FontLoadingStrategy__hashCode_impl_xcx5xu($this) {
    return $this;
  }
  function FontLoadingStrategy__equals_impl_5w10z2($this, other) {
    if (!(other instanceof FontLoadingStrategy))
      return false;
    var tmp0_other_with_cast = other instanceof FontLoadingStrategy ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function FontLoadingStrategy(value) {
    Companion_getInstance_17();
    this.value_1 = value;
  }
  FontLoadingStrategy.prototype.toString = function () {
    return FontLoadingStrategy__toString_impl_fx0z8f(this.value_1);
  };
  FontLoadingStrategy.prototype.hashCode = function () {
    return FontLoadingStrategy__hashCode_impl_xcx5xu(this.value_1);
  };
  FontLoadingStrategy.prototype.equals = function (other) {
    return FontLoadingStrategy__equals_impl_5w10z2(this.value_1, other);
  };
  FontLoadingStrategy.$metadata$ = classMeta('FontLoadingStrategy');
  function FontMatcher() {
  }
  FontMatcher.prototype.matchFont_7ocsoc_k$ = function (fontList, fontWeight, fontStyle) {
    var tmp$ret$3;
    // Inline function 'kotlin.let' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(fontList.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = fontList.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = fontList.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        tmp$ret$0 = item.get_weight_lbhkzl_k$().equals(fontWeight) ? item.get_style_e2e1yp_k$() === fontStyle : false;
        if (tmp$ret$0) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_1j60pz_k$(item);
        }
      }
       while (inductionVariable <= last);
    tmp$ret$1 = target;
    var tmp0_let = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$2 = !tmp0_let.isEmpty_y1axqb_k$();
    if (tmp$ret$2) {
      return tmp0_let;
    }
    tmp$ret$3 = tmp;
    var tmp$ret$7;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(fontList.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = fontList.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = fontList.get_fkrdnv_k$(index_0);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        var tmp$ret$4;
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        tmp$ret$4 = item_0.get_style_e2e1yp_k$() === fontStyle;
        if (tmp$ret$4) {
          // Inline function 'kotlin.collections.plusAssign' call
          target_0.add_1j60pz_k$(item_0);
        }
      }
       while (inductionVariable_0 <= last_0);
    tmp$ret$5 = target_0;
    var tmp1_ifEmpty = tmp$ret$5;
    var tmp_0;
    if (tmp1_ifEmpty.isEmpty_y1axqb_k$()) {
      var tmp$ret$6;
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
      tmp$ret$6 = fontList;
      tmp_0 = tmp$ret$6;
    } else {
      tmp_0 = tmp1_ifEmpty;
    }
    tmp$ret$7 = tmp_0;
    var fontsToSearch = tmp$ret$7;
    var tmp_1;
    if (fontWeight.compareTo_ag9b1f_k$(Companion_getInstance_20().W400__1) < 0) {
      var tmp$ret$10;
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove = null;
      var bestWeightBelow = null;
      var inductionVariable_1 = 0;
      var last_1 = fontsToSearch.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        $l$loop_1: do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var font = fontsToSearch.get_fkrdnv_k$(index_1);
          var possibleWeight = font.get_weight_lbhkzl_k$();
          if (!(null == null) ? possibleWeight.compareTo_ag9b1f_k$(null) < 0 : false) {
            continue $l$loop_1;
          }
          if (!(null == null) ? possibleWeight.compareTo_ag9b1f_k$(null) > 0 : false) {
            continue $l$loop_1;
          }
          if (possibleWeight.compareTo_ag9b1f_k$(fontWeight) < 0) {
            if (bestWeightBelow == null ? true : possibleWeight.compareTo_ag9b1f_k$(bestWeightBelow) > 0) {
              bestWeightBelow = possibleWeight;
            }
          } else if (possibleWeight.compareTo_ag9b1f_k$(fontWeight) > 0) {
            if (bestWeightAbove == null ? true : possibleWeight.compareTo_ag9b1f_k$(bestWeightAbove) < 0) {
              bestWeightAbove = possibleWeight;
            }
          } else {
            bestWeightAbove = possibleWeight;
            bestWeightBelow = possibleWeight;
            break $l$loop_1;
          }
        }
         while (inductionVariable_1 <= last_1);
      var tmp_2;
      {
        var tmp1_elvis_lhs = bestWeightBelow;
        tmp_2 = tmp1_elvis_lhs == null ? bestWeightAbove : tmp1_elvis_lhs;
      }
      var bestWeight = tmp_2;
      var tmp$ret$9;
      // Inline function 'androidx.compose.ui.text.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target_1 = ArrayList_init_$Create$_0(fontsToSearch.get_size_woubt6_k$());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      var last_2 = fontsToSearch.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_2 <= last_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_1 = fontsToSearch.get_fkrdnv_k$(index_2);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          var tmp$ret$8;
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          tmp$ret$8 = item_1.get_weight_lbhkzl_k$().equals(bestWeight);
          if (tmp$ret$8) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_1.add_1j60pz_k$(item_1);
          }
        }
         while (inductionVariable_2 <= last_2);
      tmp$ret$9 = target_1;
      tmp$ret$10 = tmp$ret$9;
      tmp_1 = tmp$ret$10;
    } else if (fontWeight.compareTo_ag9b1f_k$(Companion_getInstance_20().W500__1) > 0) {
      var tmp$ret$13;
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove_0 = null;
      var bestWeightBelow_0 = null;
      var inductionVariable_3 = 0;
      var last_3 = fontsToSearch.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        $l$loop_4: do {
          var index_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var font_0 = fontsToSearch.get_fkrdnv_k$(index_3);
          var possibleWeight_0 = font_0.get_weight_lbhkzl_k$();
          if (!(null == null) ? possibleWeight_0.compareTo_ag9b1f_k$(null) < 0 : false) {
            continue $l$loop_4;
          }
          if (!(null == null) ? possibleWeight_0.compareTo_ag9b1f_k$(null) > 0 : false) {
            continue $l$loop_4;
          }
          if (possibleWeight_0.compareTo_ag9b1f_k$(fontWeight) < 0) {
            if (bestWeightBelow_0 == null ? true : possibleWeight_0.compareTo_ag9b1f_k$(bestWeightBelow_0) > 0) {
              bestWeightBelow_0 = possibleWeight_0;
            }
          } else if (possibleWeight_0.compareTo_ag9b1f_k$(fontWeight) > 0) {
            if (bestWeightAbove_0 == null ? true : possibleWeight_0.compareTo_ag9b1f_k$(bestWeightAbove_0) < 0) {
              bestWeightAbove_0 = possibleWeight_0;
            }
          } else {
            bestWeightAbove_0 = possibleWeight_0;
            bestWeightBelow_0 = possibleWeight_0;
            break $l$loop_4;
          }
        }
         while (inductionVariable_3 <= last_3);
      var tmp_3;
      if (false) {
        var tmp1_elvis_lhs_0 = bestWeightBelow_0;
        tmp_3 = tmp1_elvis_lhs_0 == null ? bestWeightAbove_0 : tmp1_elvis_lhs_0;
      } else {
        var tmp2_elvis_lhs = bestWeightAbove_0;
        tmp_3 = tmp2_elvis_lhs == null ? bestWeightBelow_0 : tmp2_elvis_lhs;
      }
      var bestWeight_0 = tmp_3;
      var tmp$ret$12;
      // Inline function 'androidx.compose.ui.text.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target_2 = ArrayList_init_$Create$_0(fontsToSearch.get_size_woubt6_k$());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_4 = 0;
      var last_4 = fontsToSearch.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_4 <= last_4)
        do {
          var index_4 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var item_2 = fontsToSearch.get_fkrdnv_k$(index_4);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          var tmp$ret$11;
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          tmp$ret$11 = item_2.get_weight_lbhkzl_k$().equals(bestWeight_0);
          if (tmp$ret$11) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_2.add_1j60pz_k$(item_2);
          }
        }
         while (inductionVariable_4 <= last_4);
      tmp$ret$12 = target_2;
      tmp$ret$13 = tmp$ret$12;
      tmp_1 = tmp$ret$13;
    } else {
      var tmp$ret$21;
      // Inline function 'kotlin.collections.ifEmpty' call
      var tmp$ret$16;
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var tmp2_filterByClosestWeight = Companion_getInstance_20().W500__1;
      var bestWeightAbove_1 = null;
      var bestWeightBelow_1 = null;
      var inductionVariable_5 = 0;
      var last_5 = fontsToSearch.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_5 <= last_5)
        $l$loop_7: do {
          var index_5 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          var font_1 = fontsToSearch.get_fkrdnv_k$(index_5);
          var possibleWeight_1 = font_1.get_weight_lbhkzl_k$();
          if (!(null == null) ? possibleWeight_1.compareTo_ag9b1f_k$(null) < 0 : false) {
            continue $l$loop_7;
          }
          if (!(tmp2_filterByClosestWeight == null) ? possibleWeight_1.compareTo_ag9b1f_k$(tmp2_filterByClosestWeight) > 0 : false) {
            continue $l$loop_7;
          }
          if (possibleWeight_1.compareTo_ag9b1f_k$(fontWeight) < 0) {
            if (bestWeightBelow_1 == null ? true : possibleWeight_1.compareTo_ag9b1f_k$(bestWeightBelow_1) > 0) {
              bestWeightBelow_1 = possibleWeight_1;
            }
          } else if (possibleWeight_1.compareTo_ag9b1f_k$(fontWeight) > 0) {
            if (bestWeightAbove_1 == null ? true : possibleWeight_1.compareTo_ag9b1f_k$(bestWeightAbove_1) < 0) {
              bestWeightAbove_1 = possibleWeight_1;
            }
          } else {
            bestWeightAbove_1 = possibleWeight_1;
            bestWeightBelow_1 = possibleWeight_1;
            break $l$loop_7;
          }
        }
         while (inductionVariable_5 <= last_5);
      var tmp_4;
      if (false) {
        var tmp1_elvis_lhs_1 = bestWeightBelow_1;
        tmp_4 = tmp1_elvis_lhs_1 == null ? bestWeightAbove_1 : tmp1_elvis_lhs_1;
      } else {
        var tmp2_elvis_lhs_0 = bestWeightAbove_1;
        tmp_4 = tmp2_elvis_lhs_0 == null ? bestWeightBelow_1 : tmp2_elvis_lhs_0;
      }
      var bestWeight_1 = tmp_4;
      var tmp$ret$15;
      // Inline function 'androidx.compose.ui.text.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target_3 = ArrayList_init_$Create$_0(fontsToSearch.get_size_woubt6_k$());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_6 = 0;
      var last_6 = fontsToSearch.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_6 <= last_6)
        do {
          var index_6 = inductionVariable_6;
          inductionVariable_6 = inductionVariable_6 + 1 | 0;
          var item_3 = fontsToSearch.get_fkrdnv_k$(index_6);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          var tmp$ret$14;
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          tmp$ret$14 = item_3.get_weight_lbhkzl_k$().equals(bestWeight_1);
          if (tmp$ret$14) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_3.add_1j60pz_k$(item_3);
          }
        }
         while (inductionVariable_6 <= last_6);
      tmp$ret$15 = target_3;
      tmp$ret$16 = tmp$ret$15;
      var tmp3_ifEmpty = tmp$ret$16;
      var tmp_5;
      if (tmp3_ifEmpty.isEmpty_y1axqb_k$()) {
        var tmp$ret$20;
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        var tmp$ret$19;
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
        var tmp0_filterByClosestWeight = Companion_getInstance_20().W500__1;
        var bestWeightAbove_2 = null;
        var bestWeightBelow_2 = null;
        var inductionVariable_7 = 0;
        var last_7 = fontsToSearch.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable_7 <= last_7)
          $l$loop_10: do {
            var index_7 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            var font_2 = fontsToSearch.get_fkrdnv_k$(index_7);
            var possibleWeight_2 = font_2.get_weight_lbhkzl_k$();
            if (!(tmp0_filterByClosestWeight == null) ? possibleWeight_2.compareTo_ag9b1f_k$(tmp0_filterByClosestWeight) < 0 : false) {
              continue $l$loop_10;
            }
            if (!(null == null) ? possibleWeight_2.compareTo_ag9b1f_k$(null) > 0 : false) {
              continue $l$loop_10;
            }
            if (possibleWeight_2.compareTo_ag9b1f_k$(fontWeight) < 0) {
              if (bestWeightBelow_2 == null ? true : possibleWeight_2.compareTo_ag9b1f_k$(bestWeightBelow_2) > 0) {
                bestWeightBelow_2 = possibleWeight_2;
              }
            } else if (possibleWeight_2.compareTo_ag9b1f_k$(fontWeight) > 0) {
              if (bestWeightAbove_2 == null ? true : possibleWeight_2.compareTo_ag9b1f_k$(bestWeightAbove_2) < 0) {
                bestWeightAbove_2 = possibleWeight_2;
              }
            } else {
              bestWeightAbove_2 = possibleWeight_2;
              bestWeightBelow_2 = possibleWeight_2;
              break $l$loop_10;
            }
          }
           while (inductionVariable_7 <= last_7);
        var tmp_6;
        if (false) {
          var tmp1_elvis_lhs_2 = bestWeightBelow_2;
          tmp_6 = tmp1_elvis_lhs_2 == null ? bestWeightAbove_2 : tmp1_elvis_lhs_2;
        } else {
          var tmp2_elvis_lhs_1 = bestWeightAbove_2;
          tmp_6 = tmp2_elvis_lhs_1 == null ? bestWeightBelow_2 : tmp2_elvis_lhs_1;
        }
        var bestWeight_2 = tmp_6;
        var tmp$ret$18;
        // Inline function 'androidx.compose.ui.text.fastFilter' call
        // Inline function 'kotlin.contracts.contract' call
        var target_4 = ArrayList_init_$Create$_0(fontsToSearch.get_size_woubt6_k$());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_8 = 0;
        var last_8 = fontsToSearch.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable_8 <= last_8)
          do {
            var index_8 = inductionVariable_8;
            inductionVariable_8 = inductionVariable_8 + 1 | 0;
            var item_4 = fontsToSearch.get_fkrdnv_k$(index_8);
            // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
            var tmp$ret$17;
            // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
            tmp$ret$17 = item_4.get_weight_lbhkzl_k$().equals(bestWeight_2);
            if (tmp$ret$17) {
              // Inline function 'kotlin.collections.plusAssign' call
              target_4.add_1j60pz_k$(item_4);
            }
          }
           while (inductionVariable_8 <= last_8);
        tmp$ret$18 = target_4;
        tmp$ret$19 = tmp$ret$18;
        tmp$ret$20 = tmp$ret$19;
        tmp_5 = tmp$ret$20;
      } else {
        tmp_5 = tmp3_ifEmpty;
      }
      tmp$ret$21 = tmp_5;
      tmp_1 = tmp$ret$21;
    }
    var result = tmp_1;
    return result;
  };
  FontMatcher.prototype.filterByClosestWeight_p3e8ge_k$ = function (_this__u8e3s4, fontWeight, preferBelow, minSearchRange, maxSearchRange) {
    var bestWeightAbove = null;
    var bestWeightBelow = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop_1: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var font = _this__u8e3s4.get_fkrdnv_k$(index);
        var possibleWeight = font.get_weight_lbhkzl_k$();
        if (!(minSearchRange == null) ? possibleWeight.compareTo_ag9b1f_k$(minSearchRange) < 0 : false) {
          continue $l$loop_1;
        }
        if (!(maxSearchRange == null) ? possibleWeight.compareTo_ag9b1f_k$(maxSearchRange) > 0 : false) {
          continue $l$loop_1;
        }
        if (possibleWeight.compareTo_ag9b1f_k$(fontWeight) < 0) {
          if (bestWeightBelow == null ? true : possibleWeight.compareTo_ag9b1f_k$(bestWeightBelow) > 0) {
            bestWeightBelow = possibleWeight;
          }
        } else if (possibleWeight.compareTo_ag9b1f_k$(fontWeight) > 0) {
          if (bestWeightAbove == null ? true : possibleWeight.compareTo_ag9b1f_k$(bestWeightAbove) < 0) {
            bestWeightAbove = possibleWeight;
          }
        } else {
          bestWeightAbove = possibleWeight;
          bestWeightBelow = possibleWeight;
          break $l$loop_1;
        }
      }
       while (inductionVariable <= last);
    var tmp;
    if (preferBelow) {
      var tmp1_elvis_lhs = bestWeightBelow;
      tmp = tmp1_elvis_lhs == null ? bestWeightAbove : tmp1_elvis_lhs;
    } else {
      var tmp2_elvis_lhs = bestWeightAbove;
      tmp = tmp2_elvis_lhs == null ? bestWeightBelow : tmp2_elvis_lhs;
    }
    var bestWeight = tmp;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item = _this__u8e3s4.get_fkrdnv_k$(index_0);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
        tmp$ret$0 = item.get_weight_lbhkzl_k$().equals(bestWeight);
        if (tmp$ret$0) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_1j60pz_k$(item);
        }
      }
       while (inductionVariable_0 <= last_0);
    tmp$ret$1 = target;
    return tmp$ret$1;
  };
  FontMatcher.prototype.matchFont_g2rquk_k$ = function (fontFamily, fontWeight, fontStyle) {
    if (!(fontFamily instanceof FontListFontFamily))
      throw IllegalArgumentException_init_$Create$('Only FontFamily instances that presents a list of Fonts can be used');
    return this.matchFont_swq5c7_k$(fontFamily, fontWeight, fontStyle);
  };
  FontMatcher.prototype.matchFont_swq5c7_k$ = function (fontFamily, fontWeight, fontStyle) {
    return this.matchFont_7ocsoc_k$(fontFamily.fonts_1, fontWeight, fontStyle);
  };
  FontMatcher.$metadata$ = classMeta('FontMatcher');
  function _FontStyle___init__impl__jcnduf(value) {
    return value;
  }
  function _FontStyle___get_value__impl__gx8aaz($this) {
    return $this;
  }
  function FontStyle__toString_impl_thncxr($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_18().Normal_1 ? 'Normal' : tmp0_subject === Companion_getInstance_18().Italic_1 ? 'Italic' : 'Invalid';
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.Normal_1 = _FontStyle___init__impl__jcnduf(0);
    this.Italic_1 = _FontStyle___init__impl__jcnduf(1);
  }
  Companion_8.prototype.get_Normal_b4ik9_k$ = function () {
    return this.Normal_1;
  };
  Companion_8.prototype.get_Italic_o1ev2a_k$ = function () {
    return this.Italic_1;
  };
  Companion_8.prototype.values_dmh61q_k$ = function () {
    return listOf([new FontStyle(this.Normal_1), new FontStyle(this.Italic_1)]);
  };
  Companion_8.$metadata$ = objectMeta('Companion');
  var Companion_instance_8;
  function Companion_getInstance_18() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function FontStyle__hashCode_impl_7qhg4w($this) {
    return $this;
  }
  function FontStyle__equals_impl_2zal3g($this, other) {
    if (!(other instanceof FontStyle))
      return false;
    var tmp0_other_with_cast = other instanceof FontStyle ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function FontStyle(value) {
    Companion_getInstance_18();
    this.value_1 = value;
  }
  FontStyle.prototype.toString = function () {
    return FontStyle__toString_impl_thncxr(this.value_1);
  };
  FontStyle.prototype.hashCode = function () {
    return FontStyle__hashCode_impl_7qhg4w(this.value_1);
  };
  FontStyle.prototype.equals = function (other) {
    return FontStyle__equals_impl_2zal3g(this.value_1, other);
  };
  FontStyle.$metadata$ = classMeta('FontStyle');
  function _FontSynthesis___init__impl__n397bg(value) {
    return value;
  }
  function _FontSynthesis___get_value__impl__xrueqg($this) {
    return $this;
  }
  function FontSynthesis__toString_impl_gunvr0($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_19().None_1 ? 'None' : tmp0_subject === Companion_getInstance_19().All_1 ? 'All' : tmp0_subject === Companion_getInstance_19().Weight_1 ? 'Weight' : tmp0_subject === Companion_getInstance_19().Style_1 ? 'Style' : 'Invalid';
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.None_1 = _FontSynthesis___init__impl__n397bg(0);
    this.All_1 = _FontSynthesis___init__impl__n397bg(1);
    this.Weight_1 = _FontSynthesis___init__impl__n397bg(2);
    this.Style_1 = _FontSynthesis___init__impl__n397bg(3);
  }
  Companion_9.prototype.get_None_ph8z9v_k$ = function () {
    return this.None_1;
  };
  Companion_9.prototype.get_All_wqntwc_k$ = function () {
    return this.All_1;
  };
  Companion_9.prototype.get_Weight_p3166r_k$ = function () {
    return this.Weight_1;
  };
  Companion_9.prototype.get_Style_2cv83w_k$ = function () {
    return this.Style_1;
  };
  Companion_9.$metadata$ = objectMeta('Companion');
  var Companion_instance_9;
  function Companion_getInstance_19() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function _FontSynthesis___get_isWeightOn__impl__6dyd1g($this) {
    return $this === Companion_getInstance_19().All_1 ? true : $this === Companion_getInstance_19().Weight_1;
  }
  function _FontSynthesis___get_isStyleOn__impl__vevcx9($this) {
    return $this === Companion_getInstance_19().All_1 ? true : $this === Companion_getInstance_19().Style_1;
  }
  function FontSynthesis__hashCode_impl_4wi11v($this) {
    return $this;
  }
  function FontSynthesis__equals_impl_zgu9mf($this, other) {
    if (!(other instanceof FontSynthesis))
      return false;
    var tmp0_other_with_cast = other instanceof FontSynthesis ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function FontSynthesis(value) {
    Companion_getInstance_19();
    this.value_1 = value;
  }
  FontSynthesis.prototype.toString = function () {
    return FontSynthesis__toString_impl_gunvr0(this.value_1);
  };
  FontSynthesis.prototype.hashCode = function () {
    return FontSynthesis__hashCode_impl_4wi11v(this.value_1);
  };
  FontSynthesis.prototype.equals = function (other) {
    return FontSynthesis__equals_impl_zgu9mf(this.value_1, other);
  };
  FontSynthesis.$metadata$ = classMeta('FontSynthesis');
  function Companion_10() {
    Companion_instance_10 = this;
    this.W100__1 = new FontWeight(100);
    this.W200__1 = new FontWeight(200);
    this.W300__1 = new FontWeight(300);
    this.W400__1 = new FontWeight(400);
    this.W500__1 = new FontWeight(500);
    this.W600__1 = new FontWeight(600);
    this.W700__1 = new FontWeight(700);
    this.W800__1 = new FontWeight(800);
    this.W900__1 = new FontWeight(900);
    this.Thin_1 = this.W100__1;
    this.ExtraLight_1 = this.W200__1;
    this.Light_1 = this.W300__1;
    this.Normal_1 = this.W400__1;
    this.Medium_1 = this.W500__1;
    this.SemiBold_1 = this.W600__1;
    this.Bold_1 = this.W700__1;
    this.ExtraBold_1 = this.W800__1;
    this.Black_1 = this.W900__1;
    this.values_1 = listOf([this.W100__1, this.W200__1, this.W300__1, this.W400__1, this.W500__1, this.W600__1, this.W700__1, this.W800__1, this.W900__1]);
  }
  Companion_10.prototype.get_W100_wob8ub_k$ = function () {
    return this.W100__1;
  };
  Companion_10.prototype.get_W200_wob9l0_k$ = function () {
    return this.W200__1;
  };
  Companion_10.prototype.get_W300_wobabp_k$ = function () {
    return this.W300__1;
  };
  Companion_10.prototype.get_W400_wobb2e_k$ = function () {
    return this.W400__1;
  };
  Companion_10.prototype.get_W500_wobbt3_k$ = function () {
    return this.W500__1;
  };
  Companion_10.prototype.get_W600_wobcjs_k$ = function () {
    return this.W600__1;
  };
  Companion_10.prototype.get_W700_wobdah_k$ = function () {
    return this.W700__1;
  };
  Companion_10.prototype.get_W800_wobe16_k$ = function () {
    return this.W800__1;
  };
  Companion_10.prototype.get_W900_woberv_k$ = function () {
    return this.W900__1;
  };
  Companion_10.prototype.get_Thin_woai2q_k$ = function () {
    return this.Thin_1;
  };
  Companion_10.prototype.get_ExtraLight_ov7yxb_k$ = function () {
    return this.ExtraLight_1;
  };
  Companion_10.prototype.get_Light_id31e5_k$ = function () {
    return this.Light_1;
  };
  Companion_10.prototype.get_Normal_22avww_k$ = function () {
    return this.Normal_1;
  };
  Companion_10.prototype.get_Medium_1fiba6_k$ = function () {
    return this.Medium_1;
  };
  Companion_10.prototype.get_SemiBold_aid1c4_k$ = function () {
    return this.SemiBold_1;
  };
  Companion_10.prototype.get_Bold_wnz5ke_k$ = function () {
    return this.Bold_1;
  };
  Companion_10.prototype.get_ExtraBold_xklwd0_k$ = function () {
    return this.ExtraBold_1;
  };
  Companion_10.prototype.get_Black_i7mvue_k$ = function () {
    return this.Black_1;
  };
  Companion_10.prototype.get_values_ksazhn_k$ = function () {
    return this.values_1;
  };
  Companion_10.$metadata$ = objectMeta('Companion');
  var Companion_instance_10;
  function Companion_getInstance_20() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function FontWeight(weight) {
    Companion_getInstance_20();
    this.weight_1 = weight;
    // Inline function 'kotlin.require' call
    var containsArg = this.weight_1;
    var tmp0_require = 1 <= containsArg ? containsArg <= 1000 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.font.FontWeight.<anonymous>' call
      tmp$ret$0 = 'Font weight can be in range [1, 1000]. Current value: ' + this.weight_1;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  FontWeight.prototype.get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  FontWeight.prototype.compareTo_ag9b1f_k$ = function (other) {
    return compareTo(this.weight_1, other.weight_1);
  };
  FontWeight.prototype.compareTo_6thzaj_k$ = function (other) {
    return this.compareTo_ag9b1f_k$(other instanceof FontWeight ? other : THROW_CCE());
  };
  FontWeight.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontWeight))
      return false;
    if (!(this.weight_1 === other.weight_1))
      return false;
    return true;
  };
  FontWeight.prototype.hashCode = function () {
    return this.weight_1;
  };
  FontWeight.prototype.toString = function () {
    return 'FontWeight(weight=' + this.weight_1 + ')';
  };
  FontWeight.$metadata$ = classMeta('FontWeight', [Comparable]);
  function Typeface() {
  }
  Typeface.$metadata$ = interfaceMeta('Typeface');
  function EditCommand() {
  }
  EditCommand.$metadata$ = interfaceMeta('EditCommand');
  function CommitTextCommand_init_$Init$(text, newCursorPosition, $this) {
    CommitTextCommand.call($this, AnnotatedString_init_$Create$_1(text, null, null, 6, null), newCursorPosition);
    return $this;
  }
  function CommitTextCommand_init_$Create$(text, newCursorPosition) {
    return CommitTextCommand_init_$Init$(text, newCursorPosition, Object.create(CommitTextCommand.prototype));
  }
  function CommitTextCommand(annotatedString, newCursorPosition) {
    this.annotatedString_1 = annotatedString;
    this.newCursorPosition_1 = newCursorPosition;
    this.$stable_1 = 0;
  }
  CommitTextCommand.prototype.get_annotatedString_5pdwrk_k$ = function () {
    return this.annotatedString_1;
  };
  CommitTextCommand.prototype.get_newCursorPosition_tgzkui_k$ = function () {
    return this.newCursorPosition_1;
  };
  CommitTextCommand.prototype.get_text_wouvsm_k$ = function () {
    return this.annotatedString_1.text_1;
  };
  CommitTextCommand.prototype.applyTo_mffvzj_k$ = function (buffer) {
    if (buffer.hasComposition_fjs7rk_k$()) {
      buffer.replace_z6e3jy_k$(buffer.compositionStart_1, buffer.compositionEnd_1, this.get_text_wouvsm_k$());
    } else {
      buffer.replace_z6e3jy_k$(buffer.selectionStart_1, buffer.selectionEnd_1, this.get_text_wouvsm_k$());
    }
    var newCursor = buffer.get_cursor_c3jujj_k$();
    var tmp;
    if (this.newCursorPosition_1 > 0) {
      tmp = (newCursor + this.newCursorPosition_1 | 0) - 1 | 0;
    } else {
      tmp = (newCursor + this.newCursorPosition_1 | 0) - this.get_text_wouvsm_k$().length | 0;
    }
    var newCursorInBuffer = tmp;
    buffer.set_cursor_2gs2kj_k$(coerceIn(newCursorInBuffer, 0, buffer.get_length_g42xv3_k$()));
  };
  CommitTextCommand.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CommitTextCommand))
      return false;
    if (!(this.get_text_wouvsm_k$() === other.get_text_wouvsm_k$()))
      return false;
    if (!(this.newCursorPosition_1 === other.newCursorPosition_1))
      return false;
    return true;
  };
  CommitTextCommand.prototype.hashCode = function () {
    var result = getStringHashCode(this.get_text_wouvsm_k$());
    result = imul(31, result) + this.newCursorPosition_1 | 0;
    return result;
  };
  CommitTextCommand.prototype.toString = function () {
    return "CommitTextCommand(text='" + this.get_text_wouvsm_k$() + "', newCursorPosition=" + this.newCursorPosition_1 + ')';
  };
  CommitTextCommand.$metadata$ = classMeta('CommitTextCommand', [EditCommand]);
  function Companion_11() {
    Companion_instance_11 = this;
    this.NOWHERE_1 = -1;
  }
  Companion_11.prototype.get_NOWHERE_mmp54z_k$ = function () {
    return this.NOWHERE_1;
  };
  Companion_11.$metadata$ = objectMeta('Companion');
  var Companion_instance_11;
  function Companion_getInstance_21() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function _get_gapBuffer__3kebmj($this) {
    return $this.gapBuffer_1;
  }
  function _set_selectionStart__65lsx($this, value) {
    // Inline function 'kotlin.require' call
    var tmp0_require = value >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.input.EditingBuffer.<set-selectionStart>.<anonymous>' call
      tmp$ret$0 = 'Cannot set selectionStart to a negative value: ' + value;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.selectionStart_1 = value;
  }
  function _set_selectionEnd__2o1cag($this, value) {
    // Inline function 'kotlin.require' call
    var tmp0_require = value >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.input.EditingBuffer.<set-selectionEnd>.<anonymous>' call
      tmp$ret$0 = 'Cannot set selectionEnd to a negative value: ' + value;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.selectionEnd_1 = value;
  }
  function _set_compositionStart__ds49vj($this, _set____db54di) {
    $this.compositionStart_1 = _set____db54di;
  }
  function _set_compositionEnd__mwlz8a($this, _set____db54di) {
    $this.compositionEnd_1 = _set____db54di;
  }
  function EditingBuffer_init_$Init$(text, selection, $this) {
    EditingBuffer.call($this, AnnotatedString_init_$Create$_1(text, null, null, 6, null), selection);
    return $this;
  }
  function EditingBuffer_init_$Create$(text, selection) {
    return EditingBuffer_init_$Init$(text, selection, Object.create(EditingBuffer.prototype));
  }
  function EditingBuffer(text, selection) {
    Companion_getInstance_21();
    this.gapBuffer_1 = new PartialGapBuffer(text.text_1);
    this.selectionStart_1 = _TextRange___get_min__impl__uu95c4(selection);
    this.selectionEnd_1 = _TextRange___get_max__impl__owm8m(selection);
    var tmp = this;
    Companion_getInstance_21();
    tmp.compositionStart_1 = -1;
    var tmp_0 = this;
    Companion_getInstance_21();
    tmp_0.compositionEnd_1 = -1;
    var start = _TextRange___get_min__impl__uu95c4(selection);
    var end = _TextRange___get_max__impl__owm8m(selection);
    if (start < 0 ? true : start > text.get_length_g42xv3_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + text.get_length_g42xv3_k$());
    }
    if (end < 0 ? true : end > text.get_length_g42xv3_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + text.get_length_g42xv3_k$());
    }
    if (start > end) {
      throw IllegalArgumentException_init_$Create$('Do not set reversed range: ' + start + ' > ' + end);
    }
    this.$stable_1 = 8;
  }
  EditingBuffer.prototype.get_selectionStart_1zskht_k$ = function () {
    return this.selectionStart_1;
  };
  EditingBuffer.prototype.get_selectionEnd_mebxu0_k$ = function () {
    return this.selectionEnd_1;
  };
  EditingBuffer.prototype.get_compositionStart_3if7fj_k$ = function () {
    return this.compositionStart_1;
  };
  EditingBuffer.prototype.get_compositionEnd_xx7h0a_k$ = function () {
    return this.compositionEnd_1;
  };
  EditingBuffer.prototype.hasComposition_fjs7rk_k$ = function () {
    var tmp = this.compositionStart_1;
    Companion_getInstance_21();
    return !(tmp === -1);
  };
  EditingBuffer.prototype.get_composition_7jhfbq_k$ = function () {
    var tmp;
    if (this.hasComposition_fjs7rk_k$()) {
      tmp = TextRange_0(this.compositionStart_1, this.compositionEnd_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  EditingBuffer.prototype.get_selection_iqfejd_k$ = function () {
    return TextRange_0(this.selectionStart_1, this.selectionEnd_1);
  };
  EditingBuffer.prototype.set_cursor_2gs2kj_k$ = function (cursor) {
    return this.setSelection_d0tzo9_k$(cursor, cursor);
  };
  EditingBuffer.prototype.get_cursor_c3jujj_k$ = function () {
    return this.selectionStart_1 === this.selectionEnd_1 ? this.selectionEnd_1 : -1;
  };
  EditingBuffer.prototype.get_a7b70_k$ = function (index) {
    return this.gapBuffer_1.get_a7b70_k$(index);
  };
  EditingBuffer.prototype.get_length_g42xv3_k$ = function () {
    return this.gapBuffer_1.get_length_g42xv3_k$();
  };
  EditingBuffer.prototype.replace_kdonvp_k$ = function (start, end, text) {
    this.replace_z6e3jy_k$(start, end, text.text_1);
  };
  EditingBuffer.prototype.replace_z6e3jy_k$ = function (start, end, text) {
    if (start < 0 ? true : start > this.gapBuffer_1.get_length_g42xv3_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + this.gapBuffer_1.get_length_g42xv3_k$());
    }
    if (end < 0 ? true : end > this.gapBuffer_1.get_length_g42xv3_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + this.gapBuffer_1.get_length_g42xv3_k$());
    }
    if (start > end) {
      throw IllegalArgumentException_init_$Create$('Do not set reversed range: ' + start + ' > ' + end);
    }
    this.gapBuffer_1.replace_z6e3jy_k$(start, end, text);
    _set_selectionStart__65lsx(this, start + text.length | 0);
    _set_selectionEnd__2o1cag(this, start + text.length | 0);
    var tmp = this;
    Companion_getInstance_21();
    tmp.compositionStart_1 = -1;
    var tmp_0 = this;
    Companion_getInstance_21();
    tmp_0.compositionEnd_1 = -1;
  };
  EditingBuffer.prototype.delete_pnzhq2_k$ = function (start, end) {
    var deleteRange = TextRange_0(start, end);
    this.gapBuffer_1.replace_z6e3jy_k$(start, end, '');
    var newSelection = updateRangeAfterDelete(TextRange_0(this.selectionStart_1, this.selectionEnd_1), deleteRange);
    _set_selectionStart__65lsx(this, _TextRange___get_min__impl__uu95c4(newSelection));
    _set_selectionEnd__2o1cag(this, _TextRange___get_max__impl__owm8m(newSelection));
    if (this.hasComposition_fjs7rk_k$()) {
      var compositionRange = TextRange_0(this.compositionStart_1, this.compositionEnd_1);
      var newComposition = updateRangeAfterDelete(compositionRange, deleteRange);
      if (_TextRange___get_collapsed__impl__cilesp(newComposition)) {
        this.commitComposition_8woa5a_k$();
      } else {
        this.compositionStart_1 = _TextRange___get_min__impl__uu95c4(newComposition);
        this.compositionEnd_1 = _TextRange___get_max__impl__owm8m(newComposition);
      }
    }
  };
  EditingBuffer.prototype.setSelection_d0tzo9_k$ = function (start, end) {
    if (start < 0 ? true : start > this.gapBuffer_1.get_length_g42xv3_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + this.gapBuffer_1.get_length_g42xv3_k$());
    }
    if (end < 0 ? true : end > this.gapBuffer_1.get_length_g42xv3_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + this.gapBuffer_1.get_length_g42xv3_k$());
    }
    if (start > end) {
      throw IllegalArgumentException_init_$Create$('Do not set reversed range: ' + start + ' > ' + end);
    }
    _set_selectionStart__65lsx(this, start);
    _set_selectionEnd__2o1cag(this, end);
  };
  EditingBuffer.prototype.setComposition_3gafav_k$ = function (start, end) {
    if (start < 0 ? true : start > this.gapBuffer_1.get_length_g42xv3_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + this.gapBuffer_1.get_length_g42xv3_k$());
    }
    if (end < 0 ? true : end > this.gapBuffer_1.get_length_g42xv3_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + this.gapBuffer_1.get_length_g42xv3_k$());
    }
    if (start >= end) {
      throw IllegalArgumentException_init_$Create$('Do not set reversed or empty range: ' + start + ' > ' + end);
    }
    this.compositionStart_1 = start;
    this.compositionEnd_1 = end;
  };
  EditingBuffer.prototype.cancelComposition_m3imwv_k$ = function () {
    this.replace_z6e3jy_k$(this.compositionStart_1, this.compositionEnd_1, '');
    var tmp = this;
    Companion_getInstance_21();
    tmp.compositionStart_1 = -1;
    var tmp_0 = this;
    Companion_getInstance_21();
    tmp_0.compositionEnd_1 = -1;
  };
  EditingBuffer.prototype.commitComposition_8woa5a_k$ = function () {
    var tmp = this;
    Companion_getInstance_21();
    tmp.compositionStart_1 = -1;
    var tmp_0 = this;
    Companion_getInstance_21();
    tmp_0.compositionEnd_1 = -1;
  };
  EditingBuffer.prototype.toString = function () {
    return this.gapBuffer_1.toString();
  };
  EditingBuffer.prototype.toAnnotatedString_yesz4e_k$ = function () {
    var tmp = this.toString();
    return AnnotatedString_init_$Create$_1(tmp, null, null, 6, null);
  };
  EditingBuffer.$metadata$ = classMeta('EditingBuffer');
  function updateRangeAfterDelete(target, deleted) {
    var targetMin = _TextRange___get_min__impl__uu95c4(target);
    var targetMax = _TextRange___get_max__impl__owm8m(target);
    if (TextRange__intersects_impl_mhtn49(deleted, target)) {
      if (TextRange__contains_impl_ws45z2(deleted, target)) {
        targetMin = _TextRange___get_min__impl__uu95c4(deleted);
        targetMax = targetMin;
      } else if (TextRange__contains_impl_ws45z2(target, deleted)) {
        targetMax = targetMax - _TextRange___get_length__impl__7qes3a(deleted) | 0;
      } else if (TextRange__contains_impl_ws45z2_0(deleted, targetMin)) {
        targetMin = _TextRange___get_min__impl__uu95c4(deleted);
        targetMax = targetMax - _TextRange___get_length__impl__7qes3a(deleted) | 0;
      } else {
        targetMax = _TextRange___get_min__impl__uu95c4(deleted);
      }
    } else {
      if (targetMax <= _TextRange___get_min__impl__uu95c4(deleted)) {
      } else {
        targetMin = targetMin - _TextRange___get_length__impl__7qes3a(deleted) | 0;
        targetMax = targetMax - _TextRange___get_length__impl__7qes3a(deleted) | 0;
      }
    }
    return TextRange_0(targetMin, targetMax);
  }
  function Companion_12() {
    Companion_instance_12 = this;
    this.BUF_SIZE_1 = 255;
    this.SURROUNDING_SIZE_1 = 64;
    this.NOWHERE_1 = -1;
  }
  Companion_12.prototype.get_BUF_SIZE_rdxtme_k$ = function () {
    return this.BUF_SIZE_1;
  };
  Companion_12.prototype.get_SURROUNDING_SIZE_5vdy1n_k$ = function () {
    return this.SURROUNDING_SIZE_1;
  };
  Companion_12.prototype.get_NOWHERE_mmp54z_k$ = function () {
    return this.NOWHERE_1;
  };
  Companion_12.$metadata$ = objectMeta('Companion');
  var Companion_instance_12;
  function Companion_getInstance_22() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function _set_buffer__uxh4x5($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad($this) {
    return $this.buffer_1;
  }
  function _set_bufStart__tjv11k($this, _set____db54di) {
    $this.bufStart_1 = _set____db54di;
  }
  function _get_bufStart__gqypks($this) {
    return $this.bufStart_1;
  }
  function _set_bufEnd__uy215d($this, _set____db54di) {
    $this.bufEnd_1 = _set____db54di;
  }
  function _get_bufEnd__thbgil($this) {
    return $this.bufEnd_1;
  }
  function PartialGapBuffer(text) {
    Companion_getInstance_22();
    this.text_1 = text;
    this.buffer_1 = null;
    var tmp = this;
    Companion_getInstance_22();
    tmp.bufStart_1 = -1;
    var tmp_0 = this;
    Companion_getInstance_22();
    tmp_0.bufEnd_1 = -1;
    this.$stable_1 = 8;
  }
  PartialGapBuffer.prototype.set_text_c28oiw_k$ = function (_set____db54di) {
    this.text_1 = _set____db54di;
  };
  PartialGapBuffer.prototype.get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  PartialGapBuffer.prototype.get_length_g42xv3_k$ = function () {
    var tmp0_elvis_lhs = this.buffer_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.text_1.length;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var buffer = tmp;
    return (this.text_1.length - (this.bufEnd_1 - this.bufStart_1 | 0) | 0) + buffer.length_iap7oa_k$() | 0;
  };
  PartialGapBuffer.prototype.replace_z6e3jy_k$ = function (start, end, text) {
    // Inline function 'kotlin.require' call
    var tmp0_require = start <= end;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.input.PartialGapBuffer.replace.<anonymous>' call
      tmp$ret$0 = 'start index must be less than or equal to end index: ' + start + ' > ' + end;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = start >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.text.input.PartialGapBuffer.replace.<anonymous>' call
      tmp$ret$1 = 'start must be non-negative, but was ' + start;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var buffer = this.buffer_1;
    if (buffer == null) {
      var tmp$ret$2;
      // Inline function 'kotlin.comparisons.maxOf' call
      Companion_getInstance_22();
      var tmp2_maxOf = 255;
      var tmp = text.length;
      Companion_getInstance_22();
      var tmp3_maxOf = tmp + imul(2, 64) | 0;
      tmp$ret$2 = Math.max(tmp2_maxOf, tmp3_maxOf);
      var charArray_0 = charArray(tmp$ret$2);
      var tmp$ret$3;
      // Inline function 'kotlin.comparisons.minOf' call
      Companion_getInstance_22();
      var tmp4_minOf = 64;
      tmp$ret$3 = Math.min(start, tmp4_minOf);
      var leftCopyCount = tmp$ret$3;
      var tmp$ret$4;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp5_minOf = this.text_1.length - end | 0;
      Companion_getInstance_22();
      var tmp6_minOf = 64;
      tmp$ret$4 = Math.min(tmp5_minOf, tmp6_minOf);
      var rightCopyCount = tmp$ret$4;
      toCharArray_0(this.text_1, charArray_0, 0, start - leftCopyCount | 0, start);
      toCharArray_0(this.text_1, charArray_0, charArray_0.length - rightCopyCount | 0, end, end + rightCopyCount | 0);
      toCharArray(text, charArray_0, leftCopyCount);
      this.buffer_1 = new GapBuffer(charArray_0, leftCopyCount + text.length | 0, charArray_0.length - rightCopyCount | 0);
      this.bufStart_1 = start - leftCopyCount | 0;
      this.bufEnd_1 = end + rightCopyCount | 0;
      return Unit_getInstance();
    }
    var bufferStart = start - this.bufStart_1 | 0;
    var bufferEnd = end - this.bufStart_1 | 0;
    if (bufferStart < 0 ? true : bufferEnd > buffer.length_iap7oa_k$()) {
      this.text_1 = this.toString();
      this.buffer_1 = null;
      var tmp_0 = this;
      Companion_getInstance_22();
      tmp_0.bufStart_1 = -1;
      var tmp_1 = this;
      Companion_getInstance_22();
      tmp_1.bufEnd_1 = -1;
      return this.replace_z6e3jy_k$(start, end, text);
    }
    buffer.replace_z6e3jy_k$(bufferStart, bufferEnd, text);
  };
  PartialGapBuffer.prototype.get_a7b70_k$ = function (index) {
    var tmp0_elvis_lhs = this.buffer_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return charSequenceGet(this.text_1, index);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var buffer = tmp;
    if (index < this.bufStart_1) {
      return charSequenceGet(this.text_1, index);
    }
    var gapBufLength = buffer.length_iap7oa_k$();
    if (index < (gapBufLength + this.bufStart_1 | 0)) {
      return buffer.get_a7b70_k$(index - this.bufStart_1 | 0);
    }
    return charSequenceGet(this.text_1, index - ((gapBufLength - this.bufEnd_1 | 0) + this.bufStart_1 | 0) | 0);
  };
  PartialGapBuffer.prototype.toString = function () {
    var tmp0_elvis_lhs = this.buffer_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.text_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var b = tmp;
    var sb = StringBuilder_init_$Create$_0();
    sb.append_tbojcw_k$(this.text_1, 0, this.bufStart_1);
    b.append_oi41kw_k$(sb);
    sb.append_tbojcw_k$(this.text_1, this.bufEnd_1, this.text_1.length);
    return sb.toString();
  };
  PartialGapBuffer.$metadata$ = classMeta('PartialGapBuffer');
  function _set_capacity__2jc21p($this, _set____db54di) {
    $this.capacity_1 = _set____db54di;
  }
  function _get_capacity__a9k9f3($this) {
    return $this.capacity_1;
  }
  function _set_buffer__uxh4x5_0($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_0($this) {
    return $this.buffer_1;
  }
  function _set_gapStart__inopwr($this, _set____db54di) {
    $this.gapStart_1 = _set____db54di;
  }
  function _get_gapStart__5usefz($this) {
    return $this.gapStart_1;
  }
  function _set_gapEnd__x4iw0i($this, _set____db54di) {
    $this.gapEnd_1 = _set____db54di;
  }
  function _get_gapEnd__yl9gna($this) {
    return $this.gapEnd_1;
  }
  function gapLength($this) {
    return $this.gapEnd_1 - $this.gapStart_1 | 0;
  }
  function makeSureAvailableSpace($this, requestSize) {
    if (requestSize <= gapLength($this)) {
      return Unit_getInstance();
    }
    var necessarySpace = requestSize - gapLength($this) | 0;
    var newCapacity = imul($this.capacity_1, 2);
    while ((newCapacity - $this.capacity_1 | 0) < necessarySpace) {
      newCapacity = imul(newCapacity, 2);
    }
    var newBuffer = charArray(newCapacity);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.buffer_1;
    var tmp1_copyInto = $this.gapStart_1;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyInto;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = newBuffer;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, 0, 0, tmp1_copyInto);
    tmp$ret$4 = newBuffer;
    var tailLength = $this.capacity_1 - $this.gapEnd_1 | 0;
    var newEnd = newCapacity - tailLength | 0;
    var tmp$ret$9;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = $this.buffer_1;
    var tmp3_copyInto = $this.gapEnd_1;
    var tmp4_copyInto = $this.gapEnd_1 + tailLength | 0;
    var tmp$ret$6;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$5 = tmp2_copyInto;
    tmp$ret$6 = tmp$ret$5;
    var tmp_0 = tmp$ret$6;
    var tmp$ret$8;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$7;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$7 = newBuffer;
    tmp$ret$8 = tmp$ret$7;
    arrayCopy(tmp_0, tmp$ret$8, newEnd, tmp3_copyInto, tmp4_copyInto);
    tmp$ret$9 = newBuffer;
    $this.buffer_1 = newBuffer;
    $this.capacity_1 = newCapacity;
    $this.gapEnd_1 = newEnd;
  }
  function delete_0($this, start, end) {
    if (start < $this.gapStart_1 ? end <= $this.gapStart_1 : false) {
      var copyLen = $this.gapStart_1 - end | 0;
      var tmp$ret$4;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.buffer_1;
      var tmp1_copyInto = $this.buffer_1;
      var tmp2_copyInto = $this.gapEnd_1 - copyLen | 0;
      var tmp3_copyInto = $this.gapStart_1;
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_copyInto;
      tmp$ret$1 = tmp$ret$0;
      var tmp = tmp$ret$1;
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp1_copyInto;
      tmp$ret$3 = tmp$ret$2;
      arrayCopy(tmp, tmp$ret$3, tmp2_copyInto, end, tmp3_copyInto);
      tmp$ret$4 = tmp1_copyInto;
      $this.gapStart_1 = start;
      var tmp0_this = $this;
      tmp0_this.gapEnd_1 = tmp0_this.gapEnd_1 - copyLen | 0;
    } else if (start < $this.gapStart_1 ? end >= $this.gapStart_1 : false) {
      $this.gapEnd_1 = end + gapLength($this) | 0;
      $this.gapStart_1 = start;
    } else {
      var startInBuffer = start + gapLength($this) | 0;
      var endInBuffer = end + gapLength($this) | 0;
      var copyLen_0 = startInBuffer - $this.gapEnd_1 | 0;
      var tmp$ret$9;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = $this.buffer_1;
      var tmp5_copyInto = $this.buffer_1;
      var tmp6_copyInto = $this.gapStart_1;
      var tmp7_copyInto = $this.gapEnd_1;
      var tmp$ret$6;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$5;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$5 = tmp4_copyInto;
      tmp$ret$6 = tmp$ret$5;
      var tmp_0 = tmp$ret$6;
      var tmp$ret$8;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$7;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$7 = tmp5_copyInto;
      tmp$ret$8 = tmp$ret$7;
      arrayCopy(tmp_0, tmp$ret$8, tmp6_copyInto, tmp7_copyInto, startInBuffer);
      tmp$ret$9 = tmp5_copyInto;
      var tmp1_this = $this;
      tmp1_this.gapStart_1 = tmp1_this.gapStart_1 + copyLen_0 | 0;
      $this.gapEnd_1 = endInBuffer;
    }
  }
  function GapBuffer(initBuffer, initGapStart, initGapEnd) {
    this.capacity_1 = initBuffer.length;
    this.buffer_1 = initBuffer;
    this.gapStart_1 = initGapStart;
    this.gapEnd_1 = initGapEnd;
  }
  GapBuffer.prototype.get_a7b70_k$ = function (index) {
    if (index < this.gapStart_1) {
      return this.buffer_1[index];
    } else {
      return this.buffer_1[(index - this.gapStart_1 | 0) + this.gapEnd_1 | 0];
    }
  };
  GapBuffer.prototype.replace_z6e3jy_k$ = function (start, end, text) {
    makeSureAvailableSpace(this, text.length - (end - start | 0) | 0);
    delete_0(this, start, end);
    toCharArray(text, this.buffer_1, this.gapStart_1);
    var tmp0_this = this;
    tmp0_this.gapStart_1 = tmp0_this.gapStart_1 + text.length | 0;
  };
  GapBuffer.prototype.append_oi41kw_k$ = function (builder) {
    appendPartOfCharArray(builder, this.buffer_1, 0, this.gapStart_1);
    appendPartOfCharArray(builder, this.buffer_1, this.gapEnd_1, this.capacity_1 - this.gapEnd_1 | 0);
  };
  GapBuffer.prototype.length_iap7oa_k$ = function () {
    return this.capacity_1 - gapLength(this) | 0;
  };
  GapBuffer.prototype.toString = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.GapBuffer.toString.<anonymous>' call
    tmp0_apply.append_oz4qxs_k$(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.toString();
  };
  GapBuffer.$metadata$ = classMeta('GapBuffer');
  function toCharArray(_this__u8e3s4, destination, destinationOffset) {
    return toCharArray_0(_this__u8e3s4, destination, destinationOffset, 0, _this__u8e3s4.length);
  }
  function _ImeAction___init__impl__ucgwde(value) {
    return value;
  }
  function _get_value__a43j40_0($this) {
    return $this;
  }
  function ImeAction__toString_impl_r8bdhy($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_23().None_1 ? 'None' : tmp0_subject === Companion_getInstance_23().Default_1 ? 'Default' : tmp0_subject === Companion_getInstance_23().Go_1 ? 'Go' : tmp0_subject === Companion_getInstance_23().Search_1 ? 'Search' : tmp0_subject === Companion_getInstance_23().Send_1 ? 'Send' : tmp0_subject === Companion_getInstance_23().Previous_1 ? 'Previous' : tmp0_subject === Companion_getInstance_23().Next_1 ? 'Next' : tmp0_subject === Companion_getInstance_23().Done_1 ? 'Done' : 'Invalid';
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.Default_1 = _ImeAction___init__impl__ucgwde(1);
    this.None_1 = _ImeAction___init__impl__ucgwde(0);
    this.Go_1 = _ImeAction___init__impl__ucgwde(2);
    this.Search_1 = _ImeAction___init__impl__ucgwde(3);
    this.Send_1 = _ImeAction___init__impl__ucgwde(4);
    this.Previous_1 = _ImeAction___init__impl__ucgwde(5);
    this.Next_1 = _ImeAction___init__impl__ucgwde(6);
    this.Done_1 = _ImeAction___init__impl__ucgwde(7);
  }
  Companion_13.prototype.get_Default_74yox7_k$ = function () {
    return this.Default_1;
  };
  Companion_13.prototype.get_None_mrn910_k$ = function () {
    return this.None_1;
  };
  Companion_13.prototype.get_Go_nezxic_k$ = function () {
    return this.Go_1;
  };
  Companion_13.prototype.get_Search_umu0rg_k$ = function () {
    return this.Search_1;
  };
  Companion_13.prototype.get_Send_m4mbb8_k$ = function () {
    return this.Send_1;
  };
  Companion_13.prototype.get_Previous_rwgujx_k$ = function () {
    return this.Previous_1;
  };
  Companion_13.prototype.get_Next_8nlv7z_k$ = function () {
    return this.Next_1;
  };
  Companion_13.prototype.get_Done_lhg5fi_k$ = function () {
    return this.Done_1;
  };
  Companion_13.$metadata$ = objectMeta('Companion');
  var Companion_instance_13;
  function Companion_getInstance_23() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function ImeAction__hashCode_impl_m1mrob($this) {
    return $this;
  }
  function ImeAction__equals_impl_tgas09($this, other) {
    if (!(other instanceof ImeAction))
      return false;
    var tmp0_other_with_cast = other instanceof ImeAction ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function ImeAction(value) {
    Companion_getInstance_23();
    this.value_1 = value;
  }
  ImeAction.prototype.toString = function () {
    return ImeAction__toString_impl_r8bdhy(this.value_1);
  };
  ImeAction.prototype.hashCode = function () {
    return ImeAction__hashCode_impl_m1mrob(this.value_1);
  };
  ImeAction.prototype.equals = function (other) {
    return ImeAction__equals_impl_tgas09(this.value_1, other);
  };
  ImeAction.$metadata$ = classMeta('ImeAction');
  function ImeOptions_init_$Init$(singleLine, capitalization, autoCorrect, keyboardType, imeAction, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      singleLine = false;
    if (!(($mask0 & 2) === 0))
      capitalization = Companion_getInstance_25().None_1;
    if (!(($mask0 & 4) === 0))
      autoCorrect = true;
    if (!(($mask0 & 8) === 0))
      keyboardType = Companion_getInstance_26().Text_1;
    if (!(($mask0 & 16) === 0))
      imeAction = Companion_getInstance_23().Default_1;
    ImeOptions.call($this, singleLine, capitalization, autoCorrect, keyboardType, imeAction);
    return $this;
  }
  function ImeOptions_init_$Create$(singleLine, capitalization, autoCorrect, keyboardType, imeAction, $mask0, $marker) {
    return ImeOptions_init_$Init$(singleLine, capitalization, autoCorrect, keyboardType, imeAction, $mask0, $marker, Object.create(ImeOptions.prototype));
  }
  function Companion_14() {
    Companion_instance_14 = this;
    var tmp = this;
    tmp.Default_1 = ImeOptions_init_$Create$(false, null, false, null, null, 31, null);
  }
  Companion_14.prototype.get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  Companion_14.$metadata$ = objectMeta('Companion');
  var Companion_instance_14;
  function Companion_getInstance_24() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function ImeOptions(singleLine, capitalization, autoCorrect, keyboardType, imeAction) {
    Companion_getInstance_24();
    this.singleLine_1 = singleLine;
    this.capitalization_1 = capitalization;
    this.autoCorrect_1 = autoCorrect;
    this.keyboardType_1 = keyboardType;
    this.imeAction_1 = imeAction;
  }
  ImeOptions.prototype.get_singleLine_52fw9n_k$ = function () {
    return this.singleLine_1;
  };
  ImeOptions.prototype.get_capitalization_vcick2_k$ = function () {
    return this.capitalization_1;
  };
  ImeOptions.prototype.get_autoCorrect_6oo18y_k$ = function () {
    return this.autoCorrect_1;
  };
  ImeOptions.prototype.get_keyboardType_yaywgl_k$ = function () {
    return this.keyboardType_1;
  };
  ImeOptions.prototype.get_imeAction_y0cbl_k$ = function () {
    return this.imeAction_1;
  };
  ImeOptions.prototype.copy_nqct7b_k$ = function (singleLine, capitalization, autoCorrect, keyboardType, imeAction) {
    return new ImeOptions(singleLine, capitalization, autoCorrect, keyboardType, imeAction);
  };
  ImeOptions.prototype.copy$default_pzk5pt_k$ = function (singleLine, capitalization, autoCorrect, keyboardType, imeAction, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      singleLine = this.singleLine_1;
    if (!(($mask0 & 2) === 0))
      capitalization = this.capitalization_1;
    if (!(($mask0 & 4) === 0))
      autoCorrect = this.autoCorrect_1;
    if (!(($mask0 & 8) === 0))
      keyboardType = this.keyboardType_1;
    if (!(($mask0 & 16) === 0))
      imeAction = this.imeAction_1;
    return this.copy_nqct7b_k$(singleLine, capitalization, autoCorrect, keyboardType, imeAction);
  };
  ImeOptions.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ImeOptions))
      return false;
    if (!(this.singleLine_1 === other.singleLine_1))
      return false;
    if (!(this.capitalization_1 === other.capitalization_1))
      return false;
    if (!(this.autoCorrect_1 === other.autoCorrect_1))
      return false;
    if (!(this.keyboardType_1 === other.keyboardType_1))
      return false;
    if (!(this.imeAction_1 === other.imeAction_1))
      return false;
    return true;
  };
  ImeOptions.prototype.hashCode = function () {
    var result = this.singleLine_1 | 0;
    result = imul(31, result) + KeyboardCapitalization__hashCode_impl_6ibuz5(this.capitalization_1) | 0;
    result = imul(31, result) + (this.autoCorrect_1 | 0) | 0;
    result = imul(31, result) + KeyboardType__hashCode_impl_mw6m33(this.keyboardType_1) | 0;
    result = imul(31, result) + ImeAction__hashCode_impl_m1mrob(this.imeAction_1) | 0;
    return result;
  };
  ImeOptions.prototype.toString = function () {
    return 'ImeOptions(singleLine=' + this.singleLine_1 + ', capitalization=' + new KeyboardCapitalization(this.capitalization_1) + ', ' + ('autoCorrect=' + this.autoCorrect_1 + ', keyboardType=' + new KeyboardType(this.keyboardType_1) + ', imeAction=' + new ImeAction(this.imeAction_1) + ')');
  };
  ImeOptions.$metadata$ = classMeta('ImeOptions');
  function _KeyboardCapitalization___init__impl__fmdpvi(value) {
    return value;
  }
  function _KeyboardCapitalization___get_value__impl__zfyhn2($this) {
    return $this;
  }
  function KeyboardCapitalization__toString_impl_f8u1tq($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_25().None_1 ? 'None' : tmp0_subject === Companion_getInstance_25().Characters_1 ? 'Characters' : tmp0_subject === Companion_getInstance_25().Words_1 ? 'Words' : tmp0_subject === Companion_getInstance_25().Sentences_1 ? 'Sentences' : 'Invalid';
  }
  function Companion_15() {
    Companion_instance_15 = this;
    this.None_1 = _KeyboardCapitalization___init__impl__fmdpvi(0);
    this.Characters_1 = _KeyboardCapitalization___init__impl__fmdpvi(1);
    this.Words_1 = _KeyboardCapitalization___init__impl__fmdpvi(2);
    this.Sentences_1 = _KeyboardCapitalization___init__impl__fmdpvi(3);
  }
  Companion_15.prototype.get_None_icfadu_k$ = function () {
    return this.None_1;
  };
  Companion_15.prototype.get_Characters_3xid7k_k$ = function () {
    return this.Characters_1;
  };
  Companion_15.prototype.get_Words_8i3rrn_k$ = function () {
    return this.Words_1;
  };
  Companion_15.prototype.get_Sentences_no7038_k$ = function () {
    return this.Sentences_1;
  };
  Companion_15.$metadata$ = objectMeta('Companion');
  var Companion_instance_15;
  function Companion_getInstance_25() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function KeyboardCapitalization__hashCode_impl_6ibuz5($this) {
    return $this;
  }
  function KeyboardCapitalization__equals_impl_dba8wb($this, other) {
    if (!(other instanceof KeyboardCapitalization))
      return false;
    var tmp0_other_with_cast = other instanceof KeyboardCapitalization ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function KeyboardCapitalization(value) {
    Companion_getInstance_25();
    this.value_1 = value;
  }
  KeyboardCapitalization.prototype.toString = function () {
    return KeyboardCapitalization__toString_impl_f8u1tq(this.value_1);
  };
  KeyboardCapitalization.prototype.hashCode = function () {
    return KeyboardCapitalization__hashCode_impl_6ibuz5(this.value_1);
  };
  KeyboardCapitalization.prototype.equals = function (other) {
    return KeyboardCapitalization__equals_impl_dba8wb(this.value_1, other);
  };
  KeyboardCapitalization.$metadata$ = classMeta('KeyboardCapitalization');
  function _KeyboardType___init__impl__csir7k(value) {
    return value;
  }
  function _get_value__a43j40_1($this) {
    return $this;
  }
  function KeyboardType__toString_impl_150pa8($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_26().Text_1 ? 'Text' : tmp0_subject === Companion_getInstance_26().Ascii_1 ? 'Ascii' : tmp0_subject === Companion_getInstance_26().Number_1 ? 'Number' : tmp0_subject === Companion_getInstance_26().Phone_1 ? 'Phone' : tmp0_subject === Companion_getInstance_26().Uri_1 ? 'Uri' : tmp0_subject === Companion_getInstance_26().Email_1 ? 'Email' : tmp0_subject === Companion_getInstance_26().Password_1 ? 'Password' : tmp0_subject === Companion_getInstance_26().NumberPassword_1 ? 'NumberPassword' : tmp0_subject === Companion_getInstance_26().Decimal_1 ? 'Decimal' : 'Invalid';
  }
  function Companion_16() {
    Companion_instance_16 = this;
    this.Text_1 = _KeyboardType___init__impl__csir7k(1);
    this.Ascii_1 = _KeyboardType___init__impl__csir7k(2);
    this.Number_1 = _KeyboardType___init__impl__csir7k(3);
    this.Phone_1 = _KeyboardType___init__impl__csir7k(4);
    this.Uri_1 = _KeyboardType___init__impl__csir7k(5);
    this.Email_1 = _KeyboardType___init__impl__csir7k(6);
    this.Password_1 = _KeyboardType___init__impl__csir7k(7);
    this.NumberPassword_1 = _KeyboardType___init__impl__csir7k(8);
    this.Decimal_1 = _KeyboardType___init__impl__csir7k(9);
  }
  Companion_16.prototype.get_Text_qopopt_k$ = function () {
    return this.Text_1;
  };
  Companion_16.prototype.get_Ascii_71un6b_k$ = function () {
    return this.Ascii_1;
  };
  Companion_16.prototype.get_Number_pqqf1_k$ = function () {
    return this.Number_1;
  };
  Companion_16.prototype.get_Phone_l5fx0w_k$ = function () {
    return this.Phone_1;
  };
  Companion_16.prototype.get_Uri_qc0sdq_k$ = function () {
    return this.Uri_1;
  };
  Companion_16.prototype.get_Email_lfbvmq_k$ = function () {
    return this.Email_1;
  };
  Companion_16.prototype.get_Password_pnggc1_k$ = function () {
    return this.Password_1;
  };
  Companion_16.prototype.get_NumberPassword_w409hk_k$ = function () {
    return this.NumberPassword_1;
  };
  Companion_16.prototype.get_Decimal_f1xq8j_k$ = function () {
    return this.Decimal_1;
  };
  Companion_16.$metadata$ = objectMeta('Companion');
  var Companion_instance_16;
  function Companion_getInstance_26() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function KeyboardType__hashCode_impl_mw6m33($this) {
    return $this;
  }
  function KeyboardType__equals_impl_1eug1f($this, other) {
    if (!(other instanceof KeyboardType))
      return false;
    var tmp0_other_with_cast = other instanceof KeyboardType ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function KeyboardType(value) {
    Companion_getInstance_26();
    this.value_1 = value;
  }
  KeyboardType.prototype.toString = function () {
    return KeyboardType__toString_impl_150pa8(this.value_1);
  };
  KeyboardType.prototype.hashCode = function () {
    return KeyboardType__hashCode_impl_mw6m33(this.value_1);
  };
  KeyboardType.prototype.equals = function (other) {
    return KeyboardType__equals_impl_1eug1f(this.value_1, other);
  };
  KeyboardType.$metadata$ = classMeta('KeyboardType');
  function OffsetMapping$Companion$Identity$1() {
  }
  OffsetMapping$Companion$Identity$1.prototype.originalToTransformed_c5d2si_k$ = function (offset) {
    return offset;
  };
  OffsetMapping$Companion$Identity$1.prototype.transformedToOriginal_xp4com_k$ = function (offset) {
    return offset;
  };
  OffsetMapping$Companion$Identity$1.$metadata$ = classMeta(undefined, [OffsetMapping]);
  function Companion_17() {
    Companion_instance_17 = this;
    var tmp = this;
    tmp.Identity_1 = new OffsetMapping$Companion$Identity$1();
  }
  Companion_17.prototype.get_Identity_wza1cp_k$ = function () {
    return this.Identity_1;
  };
  Companion_17.$metadata$ = objectMeta('Companion');
  var Companion_instance_17;
  function Companion_getInstance_27() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function OffsetMapping() {
    Companion_getInstance_27();
  }
  OffsetMapping.$metadata$ = interfaceMeta('OffsetMapping');
  function TextFieldValue$Companion$Saver$lambda($this$Saver, it) {
    return arrayListOf([save_0(it.annotatedString_1, get_AnnotatedStringSaver(), $this$Saver), save_0(new TextRange(it.selection_1), get_Saver_10(Companion_getInstance_11()), $this$Saver)]);
  }
  function TextFieldValue$Companion$Saver$lambda_0(it) {
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_restore = list.get_fkrdnv_k$(0);
      var tmp1_restore = get_AnnotatedStringSaver();
      if (equals(tmp0_restore, false)) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp0_safe_receiver = tmp0_restore;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$4;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        tmp$ret$1 = tmp1_restore.restore_uzeo8_k$(tmp0_restore);
        tmp$ret$2 = tmp$ret$1;
        var tmp_0 = tmp$ret$2;
        tmp$ret$3 = (tmp_0 == null ? true : tmp_0 instanceof AnnotatedString) ? tmp_0 : THROW_CCE();
        tmp$ret$4 = tmp$ret$3;
        tmp = tmp$ret$4;
      }
      tmp$ret$0 = tmp;
    }
    var tmp_1 = ensureNotNull(tmp$ret$0);
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp2_restore = list.get_fkrdnv_k$(1);
      var tmp3_restore = get_Saver_10(Companion_getInstance_11());
      if (equals(tmp2_restore, false)) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp0_safe_receiver_0 = tmp2_restore;
      var tmp_2;
      if (tmp0_safe_receiver_0 == null) {
        tmp_2 = null;
      } else {
        var tmp$ret$9;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$8;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        var tmp$ret$7;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_3 = tmp3_restore.restore_uzeo8_k$(tmp2_restore);
        tmp$ret$6 = tmp_3 == null ? null : tmp_3.packedValue_1;
        tmp$ret$7 = tmp$ret$6;
        var tmp_4 = tmp$ret$7;
        var tmp_5;
        var tmp_6;
        var tmp_7 = tmp_4;
        if ((tmp_7 == null ? null : new TextRange(tmp_7)) == null) {
          tmp_6 = true;
        } else {
          var tmp_8 = tmp_4;
          tmp_6 = (tmp_8 == null ? null : new TextRange(tmp_8))instanceof TextRange;
        }
        if (tmp_6) {
          tmp_5 = tmp_4;
        } else {
          tmp_5 = THROW_CCE();
        }
        tmp$ret$8 = tmp_5;
        tmp$ret$9 = tmp$ret$8;
        tmp_2 = tmp$ret$9;
      }
      tmp$ret$5 = tmp_2;
    }
    var tmp_9 = tmp$ret$5;
    var tmp_10 = ensureNotNull(tmp_9 == null ? null : new TextRange(tmp_9)).packedValue_1;
    return TextFieldValue_init_$Create$(tmp_1, tmp_10, null, 4, null);
  }
  function TextFieldValue_init_$Init$(annotatedString, selection, composition, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      selection = Companion_getInstance_11().Zero_1;
    if (!(($mask0 & 4) === 0))
      composition = null;
    TextFieldValue.call($this, annotatedString, selection, composition);
    return $this;
  }
  function TextFieldValue_init_$Create$(annotatedString, selection, composition, $mask0, $marker) {
    return TextFieldValue_init_$Init$(annotatedString, selection, composition, $mask0, $marker, Object.create(TextFieldValue.prototype));
  }
  function TextFieldValue_init_$Init$_0(text, selection, composition, $this) {
    TextFieldValue.call($this, AnnotatedString_init_$Create$_1(text, null, null, 6, null), selection, composition);
    return $this;
  }
  function TextFieldValue_init_$Create$_0(text, selection, composition) {
    return TextFieldValue_init_$Init$_0(text, selection, composition, Object.create(TextFieldValue.prototype));
  }
  function TextFieldValue_init_$Init$_1(text, selection, composition, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      text = '';
    if (!(($mask0 & 2) === 0))
      selection = Companion_getInstance_11().Zero_1;
    if (!(($mask0 & 4) === 0))
      composition = null;
    TextFieldValue_init_$Init$_0(text, selection, composition, $this);
    return $this;
  }
  function TextFieldValue_init_$Create$_1(text, selection, composition, $mask0, $marker) {
    return TextFieldValue_init_$Init$_1(text, selection, composition, $mask0, $marker, Object.create(TextFieldValue.prototype));
  }
  function Companion_18() {
    Companion_instance_18 = this;
    var tmp = this;
    var tmp_0 = TextFieldValue$Companion$Saver$lambda;
    tmp.Saver_1 = Saver(tmp_0, TextFieldValue$Companion$Saver$lambda_0);
  }
  Companion_18.prototype.get_Saver_igssp8_k$ = function () {
    return this.Saver_1;
  };
  Companion_18.$metadata$ = objectMeta('Companion');
  var Companion_instance_18;
  function Companion_getInstance_28() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function TextFieldValue(annotatedString, selection, composition) {
    Companion_getInstance_28();
    this.annotatedString_1 = annotatedString;
    this.selection_1 = constrain(selection, 0, this.get_text_wouvsm_k$().length);
    var tmp = this;
    var tmp0_safe_receiver = composition;
    var tmp_0;
    var tmp_1 = tmp0_safe_receiver;
    if ((tmp_1 == null ? null : new TextRange(tmp_1)) == null) {
      tmp_0 = null;
    } else {
      tmp_0 = constrain(tmp0_safe_receiver, 0, this.get_text_wouvsm_k$().length);
    }
    tmp.composition_1 = tmp_0;
  }
  TextFieldValue.prototype.get_annotatedString_5pdwrk_k$ = function () {
    return this.annotatedString_1;
  };
  TextFieldValue.prototype.get_text_wouvsm_k$ = function () {
    return this.annotatedString_1.text_1;
  };
  TextFieldValue.prototype.get_selection_iqfejd_k$ = function () {
    return this.selection_1;
  };
  TextFieldValue.prototype.get_composition_7jhfbq_k$ = function () {
    return this.composition_1;
  };
  TextFieldValue.prototype.copy_5pnje4_k$ = function (annotatedString, selection, composition) {
    return new TextFieldValue(annotatedString, selection, composition);
  };
  TextFieldValue.prototype.copy$default_11resf_k$ = function (annotatedString, selection, composition, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      annotatedString = this.annotatedString_1;
    if (!(($mask0 & 2) === 0))
      selection = this.selection_1;
    if (!(($mask0 & 4) === 0))
      composition = this.composition_1;
    return this.copy_5pnje4_k$(annotatedString, selection, composition);
  };
  TextFieldValue.prototype.copy_cnpmxh_k$ = function (text, selection, composition) {
    return new TextFieldValue(AnnotatedString_init_$Create$_1(text, null, null, 6, null), selection, composition);
  };
  TextFieldValue.prototype.copy$default_pjfmp_k$ = function (text, selection, composition, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      selection = this.selection_1;
    if (!(($mask0 & 4) === 0))
      composition = this.composition_1;
    return this.copy_cnpmxh_k$(text, selection, composition);
  };
  TextFieldValue.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextFieldValue))
      return false;
    var tmp;
    var tmp_0;
    if (equals(this.selection_1, other.selection_1)) {
      var tmp_1 = this.composition_1;
      var tmp_2 = tmp_1 == null ? null : new TextRange(tmp_1);
      var tmp_3 = other.composition_1;
      tmp_0 = equals(tmp_2, tmp_3 == null ? null : new TextRange(tmp_3));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.annotatedString_1.equals(other.annotatedString_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  TextFieldValue.prototype.hashCode = function () {
    var result = this.annotatedString_1.hashCode();
    result = imul(31, result) + TextRange__hashCode_impl_3zpp6q(this.selection_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.composition_1;
    var tmp_0;
    var tmp_1 = tmp0_safe_receiver;
    if ((tmp_1 == null ? null : new TextRange(tmp_1)) == null) {
      tmp_0 = null;
    } else {
      tmp_0 = TextRange__hashCode_impl_3zpp6q(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  TextFieldValue.prototype.toString = function () {
    var tmp = 'TextFieldValue(' + ("text='" + this.annotatedString_1 + "', ") + ('selection=' + new TextRange(this.selection_1) + ', ');
    var tmp_0 = this.composition_1;
    return tmp + ('composition=' + (tmp_0 == null ? null : new TextRange(tmp_0)) + ')');
  };
  TextFieldValue.$metadata$ = classMeta('TextFieldValue');
  function _get_platformTextInputService__t1msw0($this) {
    return $this.platformTextInputService_1;
  }
  function _get__currentInputSession__sue20r($this) {
    return $this._currentInputSession_1;
  }
  function TextInputService(platformTextInputService) {
    this.platformTextInputService_1 = platformTextInputService;
    this._currentInputSession_1 = new AtomicReference(null);
    this.$stable_1 = 8;
  }
  TextInputService.prototype.get_currentInputSession_pf4yjo_k$ = function () {
    return this._currentInputSession_1.get_26vq_k$();
  };
  TextInputService.prototype.startInput_5hgpy9_k$ = function (value, imeOptions, onEditCommand, onImeActionPerformed) {
    this.platformTextInputService_1.startInput_uss168_k$(value, imeOptions, onEditCommand, onImeActionPerformed);
    var nextSession = new TextInputSession(this, this.platformTextInputService_1);
    this._currentInputSession_1.set_8wdrq0_k$(nextSession);
    return nextSession;
  };
  TextInputService.prototype.stopInput_e0taal_k$ = function (session) {
    if (this._currentInputSession_1.compareAndSet_fjyh1e_k$(session, null)) {
      this.platformTextInputService_1.stopInput_mtwgvd_k$();
    }
  };
  TextInputService.prototype.showSoftwareKeyboard_p4xnqy_k$ = function () {
    if (!(this._currentInputSession_1.get_26vq_k$() == null)) {
      this.platformTextInputService_1.showSoftwareKeyboard_p4xnqy_k$();
    }
  };
  TextInputService.prototype.hideSoftwareKeyboard_kb3flr_k$ = function () {
    return this.platformTextInputService_1.hideSoftwareKeyboard_kb3flr_k$();
  };
  TextInputService.$metadata$ = classMeta('TextInputService');
  function PlatformTextInputService() {
  }
  PlatformTextInputService.$metadata$ = interfaceMeta('PlatformTextInputService');
  function _get_textInputService__q1au7n($this) {
    return $this.textInputService_1;
  }
  function _get_platformTextInputService__t1msw0_0($this) {
    return $this.platformTextInputService_1;
  }
  function ensureOpenSession($this, block) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.get_isOpen_ew3kpp_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession.<anonymous>' call
    if (tmp0_also) {
      block();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function TextInputSession(textInputService, platformTextInputService) {
    this.textInputService_1 = textInputService;
    this.platformTextInputService_1 = platformTextInputService;
    this.$stable_1 = 8;
  }
  TextInputSession.prototype.get_isOpen_ew3kpp_k$ = function () {
    return equals(this.textInputService_1.get_currentInputSession_pf4yjo_k$(), this);
  };
  TextInputSession.prototype.dispose_3n44we_k$ = function () {
    this.textInputService_1.stopInput_e0taal_k$(this);
  };
  TextInputSession.prototype.notifyFocusedRect_xqvesm_k$ = function (rect) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.get_isOpen_ew3kpp_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession.<anonymous>' call
    if (tmp0_also) {
      // Inline function 'androidx.compose.ui.text.input.TextInputSession.notifyFocusedRect.<anonymous>' call
      this.platformTextInputService_1.notifyFocusedRect_jql0y1_k$(rect);
    }
    tmp$ret$0 = tmp0_also;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  TextInputSession.prototype.updateState_h3q7x3_k$ = function (oldValue, newValue) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.get_isOpen_ew3kpp_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession.<anonymous>' call
    if (tmp0_also) {
      // Inline function 'androidx.compose.ui.text.input.TextInputSession.updateState.<anonymous>' call
      this.platformTextInputService_1.updateState_rj03ay_k$(oldValue, newValue);
    }
    tmp$ret$0 = tmp0_also;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  TextInputSession.prototype.showSoftwareKeyboard_6wjho5_k$ = function () {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.get_isOpen_ew3kpp_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession.<anonymous>' call
    if (tmp0_also) {
      // Inline function 'androidx.compose.ui.text.input.TextInputSession.showSoftwareKeyboard.<anonymous>' call
      this.platformTextInputService_1.showSoftwareKeyboard_p4xnqy_k$();
    }
    tmp$ret$0 = tmp0_also;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  TextInputSession.prototype.hideSoftwareKeyboard_pwrw8g_k$ = function () {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.get_isOpen_ew3kpp_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession.<anonymous>' call
    if (tmp0_also) {
      // Inline function 'androidx.compose.ui.text.input.TextInputSession.hideSoftwareKeyboard.<anonymous>' call
      this.platformTextInputService_1.hideSoftwareKeyboard_kb3flr_k$();
    }
    tmp$ret$0 = tmp0_also;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  TextInputSession.$metadata$ = classMeta('TextInputSession');
  function Companion_19() {
    Companion_instance_19 = this;
  }
  Companion_19.prototype.get_current_jwi6j4_k$ = function () {
    return new Locale(get_platformLocaleDelegate().get_current_jwi6j4_k$().get_fkrdnv_k$(0));
  };
  Companion_19.$metadata$ = objectMeta('Companion');
  var Companion_instance_19;
  function Companion_getInstance_29() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function Locale_init_$Init$(languageTag, $this) {
    Locale.call($this, get_platformLocaleDelegate().parseLanguageTag_fhwnvy_k$(languageTag));
    return $this;
  }
  function Locale_init_$Create$(languageTag) {
    return Locale_init_$Init$(languageTag, Object.create(Locale.prototype));
  }
  function Locale(platformLocale) {
    Companion_getInstance_29();
    this.platformLocale_1 = platformLocale;
  }
  Locale.prototype.get_platformLocale_g0bmwm_k$ = function () {
    return this.platformLocale_1;
  };
  Locale.prototype.get_language_cjhhk1_k$ = function () {
    return this.platformLocale_1.get_language_cjhhk1_k$();
  };
  Locale.prototype.get_script_jedas4_k$ = function () {
    return this.platformLocale_1.get_script_jedas4_k$();
  };
  Locale.prototype.get_region_iy88ot_k$ = function () {
    return this.platformLocale_1.get_region_iy88ot_k$();
  };
  Locale.prototype.toLanguageTag_xneel5_k$ = function () {
    return this.platformLocale_1.toLanguageTag_xneel5_k$();
  };
  Locale.prototype.equals = function (other) {
    if (other == null)
      return false;
    if (!(other instanceof Locale))
      return false;
    if (this === other)
      return true;
    return this.toLanguageTag_xneel5_k$() === other.toLanguageTag_xneel5_k$();
  };
  Locale.prototype.hashCode = function () {
    return getStringHashCode(this.toLanguageTag_xneel5_k$());
  };
  Locale.prototype.toString = function () {
    return this.toLanguageTag_xneel5_k$();
  };
  Locale.$metadata$ = classMeta('Locale');
  function Companion_20() {
    Companion_instance_20 = this;
  }
  Companion_20.prototype.get_current_jwi6j4_k$ = function () {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp0_fastMap = get_platformLocaleDelegate().get_current_jwi6j4_k$();
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(tmp0_fastMap.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastMap.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastMap.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.intl.Companion.<get-current>.<anonymous>' call
        tmp$ret$0 = new Locale(item);
        var tmp0_plusAssign = tmp$ret$0;
        target.add_1j60pz_k$(tmp0_plusAssign);
      }
       while (inductionVariable <= last);
    tmp$ret$1 = target;
    return new LocaleList(tmp$ret$1);
  };
  Companion_20.$metadata$ = objectMeta('Companion');
  var Companion_instance_20;
  function Companion_getInstance_30() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function LocaleList_init_$Init$(languageTags, $this) {
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp0_fastMap = split$default(languageTags, [','], false, 0, 6, null);
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(tmp0_fastMap.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastMap.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastMap.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.text.intl.LocaleList.<init>.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.text.trim' call
        tmp$ret$0 = toString(trim(isCharSequence(item) ? item : THROW_CCE()));
        tmp$ret$1 = tmp$ret$0;
        var tmp0_plusAssign = tmp$ret$1;
        target.add_1j60pz_k$(tmp0_plusAssign);
      }
       while (inductionVariable <= last);
    tmp$ret$2 = target;
    var tmp1_fastMap = tmp$ret$2;
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(tmp1_fastMap.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = tmp1_fastMap.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = tmp1_fastMap.get_fkrdnv_k$(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.text.intl.LocaleList.<init>.<anonymous>' call
        tmp$ret$3 = Locale_init_$Create$(item_0);
        var tmp0_plusAssign_0 = tmp$ret$3;
        target_0.add_1j60pz_k$(tmp0_plusAssign_0);
      }
       while (inductionVariable_0 <= last_0);
    tmp$ret$4 = target_0;
    LocaleList.call($this, tmp$ret$4);
    return $this;
  }
  function LocaleList_init_$Create$(languageTags) {
    return LocaleList_init_$Init$(languageTags, Object.create(LocaleList.prototype));
  }
  function LocaleList_init_$Init$_0(locales, $this) {
    LocaleList.call($this, toList(locales));
    return $this;
  }
  function LocaleList_init_$Create$_0(locales) {
    return LocaleList_init_$Init$_0(locales, Object.create(LocaleList.prototype));
  }
  function LocaleList(localeList) {
    Companion_getInstance_30();
    this.localeList_1 = localeList;
    this.size_1 = this.localeList_1.get_size_woubt6_k$();
  }
  LocaleList.prototype.get_localeList_1gj9gh_k$ = function () {
    return this.localeList_1;
  };
  LocaleList.prototype.get_fkrdnv_k$ = function (i) {
    return this.localeList_1.get_fkrdnv_k$(i);
  };
  LocaleList.prototype.get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  LocaleList.prototype.contains_9v037n_k$ = function (element) {
    return this.localeList_1.contains_2ehdt1_k$(element);
  };
  LocaleList.prototype.contains_2ehdt1_k$ = function (element) {
    if (!(element instanceof Locale))
      return false;
    return this.contains_9v037n_k$(element instanceof Locale ? element : THROW_CCE());
  };
  LocaleList.prototype.containsAll_tbwud6_k$ = function (elements) {
    return this.localeList_1.containsAll_jr3fla_k$(elements);
  };
  LocaleList.prototype.containsAll_jr3fla_k$ = function (elements) {
    return this.containsAll_tbwud6_k$(elements);
  };
  LocaleList.prototype.isEmpty_y1axqb_k$ = function () {
    return this.localeList_1.isEmpty_y1axqb_k$();
  };
  LocaleList.prototype.iterator_jk1svi_k$ = function () {
    return this.localeList_1.iterator_jk1svi_k$();
  };
  LocaleList.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LocaleList))
      return false;
    if (!equals(this.localeList_1, other.localeList_1))
      return false;
    return true;
  };
  LocaleList.prototype.hashCode = function () {
    return hashCode(this.localeList_1);
  };
  LocaleList.prototype.toString = function () {
    return 'LocaleList(localeList=' + this.localeList_1 + ')';
  };
  LocaleList.$metadata$ = classMeta('LocaleList', [Collection]);
  function get_platformLocaleDelegate() {
    init_properties_PlatformLocale_kt_iijf65();
    return platformLocaleDelegate;
  }
  var platformLocaleDelegate;
  function PlatformLocale() {
  }
  PlatformLocale.$metadata$ = interfaceMeta('PlatformLocale');
  function PlatformLocaleDelegate() {
  }
  PlatformLocaleDelegate.$metadata$ = interfaceMeta('PlatformLocaleDelegate');
  var properties_initialized_PlatformLocale_kt_ya8ii9;
  function init_properties_PlatformLocale_kt_iijf65() {
    if (properties_initialized_PlatformLocale_kt_ya8ii9) {
    } else {
      properties_initialized_PlatformLocale_kt_ya8ii9 = true;
      platformLocaleDelegate = createPlatformLocaleDelegate();
    }
  }
  function _BaselineShift___init__impl__scj05g(multiplier) {
    return multiplier;
  }
  function _BaselineShift___get_multiplier__impl__qhmjek($this) {
    return $this;
  }
  function Companion_21() {
    Companion_instance_21 = this;
    this.Superscript_1 = _BaselineShift___init__impl__scj05g(0.5);
    this.Subscript_1 = _BaselineShift___init__impl__scj05g(-0.5);
    this.None_1 = _BaselineShift___init__impl__scj05g(0.0);
  }
  Companion_21.prototype.get_Superscript_ei59a5_k$ = function () {
    return this.Superscript_1;
  };
  Companion_21.prototype.get_Subscript_hglgbs_k$ = function () {
    return this.Subscript_1;
  };
  Companion_21.prototype.get_None_burezd_k$ = function () {
    return this.None_1;
  };
  Companion_21.$metadata$ = objectMeta('Companion');
  var Companion_instance_21;
  function Companion_getInstance_31() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function BaselineShift__toString_impl_x98gcc($this) {
    return 'BaselineShift(multiplier=' + $this + ')';
  }
  function BaselineShift__hashCode_impl_g0potx($this) {
    return getNumberHashCode($this);
  }
  function BaselineShift__equals_impl_37wrjj($this, other) {
    if (!(other instanceof BaselineShift))
      return false;
    var tmp0_other_with_cast = other instanceof BaselineShift ? other.multiplier_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function BaselineShift(multiplier) {
    Companion_getInstance_31();
    this.multiplier_1 = multiplier;
  }
  BaselineShift.prototype.toString = function () {
    return BaselineShift__toString_impl_x98gcc(this.multiplier_1);
  };
  BaselineShift.prototype.hashCode = function () {
    return BaselineShift__hashCode_impl_g0potx(this.multiplier_1);
  };
  BaselineShift.prototype.equals = function (other) {
    return BaselineShift__equals_impl_37wrjj(this.multiplier_1, other);
  };
  BaselineShift.$metadata$ = classMeta('BaselineShift');
  function Companion_22() {
    Companion_instance_22 = this;
    this.None_1 = new Hyphens();
    this.Auto_1 = new Hyphens();
  }
  Companion_22.prototype.get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  Companion_22.prototype.get_Auto_wnyn88_k$ = function () {
    return this.Auto_1;
  };
  Companion_22.$metadata$ = objectMeta('Companion');
  var Companion_instance_22;
  function Companion_getInstance_32() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function Hyphens() {
    Companion_getInstance_32();
    this.$stable_1 = 0;
  }
  Hyphens.$metadata$ = classMeta('Hyphens');
  function _get_FlagTrimTop__843pyu($this) {
    return $this.FlagTrimTop_1;
  }
  function _get_FlagTrimBottom__ejbxxu($this) {
    return $this.FlagTrimBottom_1;
  }
  function _Trim___init__impl__tcc1lr(value) {
    return value;
  }
  function _get_value__a43j40_2($this) {
    return $this;
  }
  function Trim__toString_impl_hxcm0x($this) {
    var tmp0_subject = _get_value__a43j40_2($this);
    return tmp0_subject === _get_value__a43j40_2(Companion_getInstance_33().FirstLineTop_1) ? 'LineHeightStyle.Trim.FirstLineTop' : tmp0_subject === _get_value__a43j40_2(Companion_getInstance_33().LastLineBottom_1) ? 'LineHeightStyle.Trim.LastLineBottom' : tmp0_subject === _get_value__a43j40_2(Companion_getInstance_33().Both_1) ? 'LineHeightStyle.Trim.Both' : tmp0_subject === _get_value__a43j40_2(Companion_getInstance_33().None_1) ? 'LineHeightStyle.Trim.None' : 'Invalid';
  }
  function Companion_23() {
    Companion_instance_23 = this;
    this.FlagTrimTop_1 = 1;
    this.FlagTrimBottom_1 = 16;
    this.FirstLineTop_1 = _Trim___init__impl__tcc1lr(1);
    this.LastLineBottom_1 = _Trim___init__impl__tcc1lr(16);
    this.Both_1 = _Trim___init__impl__tcc1lr(17);
    this.None_1 = _Trim___init__impl__tcc1lr(0);
  }
  Companion_23.prototype.get_FirstLineTop_gh51xd_k$ = function () {
    return this.FirstLineTop_1;
  };
  Companion_23.prototype.get_LastLineBottom_tktzr7_k$ = function () {
    return this.LastLineBottom_1;
  };
  Companion_23.prototype.get_Both_d6cq5t_k$ = function () {
    return this.Both_1;
  };
  Companion_23.prototype.get_None_99291i_k$ = function () {
    return this.None_1;
  };
  Companion_23.$metadata$ = objectMeta('Companion');
  var Companion_instance_23;
  function Companion_getInstance_33() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function Trim__isTrimFirstLineTop_impl_tqdsaa($this) {
    var tmp = _get_value__a43j40_2($this);
    Companion_getInstance_33();
    return (tmp & 1) > 0;
  }
  function Trim__isTrimLastLineBottom_impl_8k6x3e($this) {
    var tmp = _get_value__a43j40_2($this);
    Companion_getInstance_33();
    return (tmp & 16) > 0;
  }
  function Trim__hashCode_impl_vclj5c($this) {
    return $this;
  }
  function Trim__equals_impl_6x7eks($this, other) {
    if (!(other instanceof Trim))
      return false;
    var tmp0_other_with_cast = other instanceof Trim ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function _Alignment___init__impl__it107q(topRatio) {
    // Inline function 'kotlin.check' call
    var tmp;
    var containsArg = _Alignment___get_topRatio__impl__gg7tir(topRatio);
    if (0.0 <= containsArg ? containsArg <= 1.0 : false) {
      tmp = true;
    } else {
      tmp = _Alignment___get_topRatio__impl__gg7tir(topRatio) === -1.0;
    }
    var tmp0_check = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.style.Alignment.<anonymous>' call
      tmp$ret$0 = 'topRatio should be in [0..1] range or -1';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return topRatio;
  }
  function _Alignment___get_topRatio__impl__gg7tir($this) {
    return $this;
  }
  function Alignment__toString_impl_on6yhu($this) {
    var tmp0_subject = _Alignment___get_topRatio__impl__gg7tir($this);
    return tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_34().Top_1) ? 'LineHeightStyle.Alignment.Top' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_34().Center_1) ? 'LineHeightStyle.Alignment.Center' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_34().Proportional_1) ? 'LineHeightStyle.Alignment.Proportional' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_34().Bottom_1) ? 'LineHeightStyle.Alignment.Bottom' : 'LineHeightStyle.Alignment(topPercentage = ' + _Alignment___get_topRatio__impl__gg7tir($this) + ')';
  }
  function Companion_24() {
    Companion_instance_24 = this;
    this.Top_1 = _Alignment___init__impl__it107q(0.0);
    this.Center_1 = _Alignment___init__impl__it107q(0.5);
    this.Proportional_1 = _Alignment___init__impl__it107q(-1.0);
    this.Bottom_1 = _Alignment___init__impl__it107q(1.0);
  }
  Companion_24.prototype.get_Top_qxsa30_k$ = function () {
    return this.Top_1;
  };
  Companion_24.prototype.get_Center_2ofmv6_k$ = function () {
    return this.Center_1;
  };
  Companion_24.prototype.get_Proportional_driab2_k$ = function () {
    return this.Proportional_1;
  };
  Companion_24.prototype.get_Bottom_c1i4bw_k$ = function () {
    return this.Bottom_1;
  };
  Companion_24.$metadata$ = objectMeta('Companion');
  var Companion_instance_24;
  function Companion_getInstance_34() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function Alignment__hashCode_impl_omr6of($this) {
    return getNumberHashCode($this);
  }
  function Alignment__equals_impl_9ve0tn($this, other) {
    if (!(other instanceof Alignment))
      return false;
    var tmp0_other_with_cast = other instanceof Alignment ? other.topRatio_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Companion_25() {
    Companion_instance_25 = this;
    this.Default_1 = new LineHeightStyle(Companion_getInstance_34().Proportional_1, Companion_getInstance_33().Both_1);
  }
  Companion_25.prototype.get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  Companion_25.$metadata$ = objectMeta('Companion');
  var Companion_instance_25;
  function Companion_getInstance_35() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function Trim(value) {
    Companion_getInstance_33();
    this.value_1 = value;
  }
  Trim.prototype.toString = function () {
    return Trim__toString_impl_hxcm0x(this.value_1);
  };
  Trim.prototype.hashCode = function () {
    return Trim__hashCode_impl_vclj5c(this.value_1);
  };
  Trim.prototype.equals = function (other) {
    return Trim__equals_impl_6x7eks(this.value_1, other);
  };
  Trim.$metadata$ = classMeta('Trim');
  function Alignment(topRatio) {
    Companion_getInstance_34();
    this.topRatio_1 = topRatio;
  }
  Alignment.prototype.toString = function () {
    return Alignment__toString_impl_on6yhu(this.topRatio_1);
  };
  Alignment.prototype.hashCode = function () {
    return Alignment__hashCode_impl_omr6of(this.topRatio_1);
  };
  Alignment.prototype.equals = function (other) {
    return Alignment__equals_impl_9ve0tn(this.topRatio_1, other);
  };
  Alignment.$metadata$ = classMeta('Alignment');
  function LineHeightStyle(alignment, trim) {
    Companion_getInstance_35();
    this.alignment_1 = alignment;
    this.trim_1 = trim;
    this.$stable_1 = 0;
  }
  LineHeightStyle.prototype.get_alignment_1e7lq2_k$ = function () {
    return this.alignment_1;
  };
  LineHeightStyle.prototype.get_trim_2b9cg_k$ = function () {
    return this.trim_1;
  };
  LineHeightStyle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LineHeightStyle))
      return false;
    if (!equals(this.alignment_1, other.alignment_1))
      return false;
    if (!(this.trim_1 === other.trim_1))
      return false;
    return true;
  };
  LineHeightStyle.prototype.hashCode = function () {
    var result = Alignment__hashCode_impl_omr6of(this.alignment_1);
    result = imul(31, result) + Trim__hashCode_impl_vclj5c(this.trim_1) | 0;
    return result;
  };
  LineHeightStyle.prototype.toString = function () {
    return 'LineHeightStyle(' + ('alignment=' + new Alignment(this.alignment_1) + ', ') + ('trim=' + new Trim(this.trim_1)) + ')';
  };
  LineHeightStyle.$metadata$ = classMeta('LineHeightStyle');
  var ResolvedTextDirection_Ltr_instance;
  var ResolvedTextDirection_Rtl_instance;
  function values_0() {
    return [ResolvedTextDirection_Ltr_getInstance(), ResolvedTextDirection_Rtl_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'Ltr':
        return ResolvedTextDirection_Ltr_getInstance();
      case 'Rtl':
        return ResolvedTextDirection_Rtl_getInstance();
      default:
        ResolvedTextDirection_initEntries();
        THROW_ISE();
        break;
    }
  }
  var ResolvedTextDirection_entriesInitialized;
  function ResolvedTextDirection_initEntries() {
    if (ResolvedTextDirection_entriesInitialized)
      return Unit_getInstance();
    ResolvedTextDirection_entriesInitialized = true;
    ResolvedTextDirection_Ltr_instance = new ResolvedTextDirection('Ltr', 0);
    ResolvedTextDirection_Rtl_instance = new ResolvedTextDirection('Rtl', 1);
  }
  function ResolvedTextDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  ResolvedTextDirection.$metadata$ = classMeta('ResolvedTextDirection', undefined, undefined, undefined, undefined, Enum.prototype);
  function ResolvedTextDirection_Ltr_getInstance() {
    ResolvedTextDirection_initEntries();
    return ResolvedTextDirection_Ltr_instance;
  }
  function ResolvedTextDirection_Rtl_getInstance() {
    ResolvedTextDirection_initEntries();
    return ResolvedTextDirection_Rtl_instance;
  }
  function _TextAlign___init__impl__99wz4v(value) {
    return value;
  }
  function _TextAlign___get_value__impl__lst7m3($this) {
    return $this;
  }
  function TextAlign__toString_impl_6ha6d3($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_36().Left_1 ? 'Left' : tmp0_subject === Companion_getInstance_36().Right_1 ? 'Right' : tmp0_subject === Companion_getInstance_36().Center_1 ? 'Center' : tmp0_subject === Companion_getInstance_36().Justify_1 ? 'Justify' : tmp0_subject === Companion_getInstance_36().Start_1 ? 'Start' : tmp0_subject === Companion_getInstance_36().End_1 ? 'End' : 'Invalid';
  }
  function Companion_26() {
    Companion_instance_26 = this;
    this.Left_1 = _TextAlign___init__impl__99wz4v(1);
    this.Right_1 = _TextAlign___init__impl__99wz4v(2);
    this.Center_1 = _TextAlign___init__impl__99wz4v(3);
    this.Justify_1 = _TextAlign___init__impl__99wz4v(4);
    this.Start_1 = _TextAlign___init__impl__99wz4v(5);
    this.End_1 = _TextAlign___init__impl__99wz4v(6);
  }
  Companion_26.prototype.get_Left_e5glad_k$ = function () {
    return this.Left_1;
  };
  Companion_26.prototype.get_Right_evf9vi_k$ = function () {
    return this.Right_1;
  };
  Companion_26.prototype.get_Center_qumdtj_k$ = function () {
    return this.Center_1;
  };
  Companion_26.prototype.get_Justify_c4m1vy_k$ = function () {
    return this.Justify_1;
  };
  Companion_26.prototype.get_Start_3lwnd0_k$ = function () {
    return this.Start_1;
  };
  Companion_26.prototype.get_End_tzj12b_k$ = function () {
    return this.End_1;
  };
  Companion_26.prototype.values_dmh61q_k$ = function () {
    return listOf([new TextAlign(this.Left_1), new TextAlign(this.Right_1), new TextAlign(this.Center_1), new TextAlign(this.Justify_1), new TextAlign(this.Start_1), new TextAlign(this.End_1)]);
  };
  Companion_26.$metadata$ = objectMeta('Companion');
  var Companion_instance_26;
  function Companion_getInstance_36() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function TextAlign__hashCode_impl_s8g35y($this) {
    return $this;
  }
  function TextAlign__equals_impl_latoh6($this, other) {
    if (!(other instanceof TextAlign))
      return false;
    var tmp0_other_with_cast = other instanceof TextAlign ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextAlign(value) {
    Companion_getInstance_36();
    this.value_1 = value;
  }
  TextAlign.prototype.toString = function () {
    return TextAlign__toString_impl_6ha6d3(this.value_1);
  };
  TextAlign.prototype.hashCode = function () {
    return TextAlign__hashCode_impl_s8g35y(this.value_1);
  };
  TextAlign.prototype.equals = function (other) {
    return TextAlign__equals_impl_latoh6(this.value_1, other);
  };
  TextAlign.$metadata$ = classMeta('TextAlign');
  function Companion_27() {
    Companion_instance_27 = this;
    this.None_1 = new TextDecoration(0);
    this.Underline_1 = new TextDecoration(1);
    this.LineThrough_1 = new TextDecoration(2);
  }
  Companion_27.prototype.get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  Companion_27.prototype.get_Underline_oo7egz_k$ = function () {
    return this.Underline_1;
  };
  Companion_27.prototype.get_LineThrough_pr9ajs_k$ = function () {
    return this.LineThrough_1;
  };
  Companion_27.prototype.combine_6kxqyc_k$ = function (decorations) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.fastFold' call
    // Inline function 'kotlin.contracts.contract' call
    var accumulator = 0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = decorations.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = decorations.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.text.fastFold.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.style.Companion.combine.<anonymous>' call
        var tmp0__anonymous__q1qw7t = accumulator;
        tmp$ret$0 = tmp0__anonymous__q1qw7t | item.mask_1;
        accumulator = tmp$ret$0;
      }
       while (inductionVariable <= last);
    tmp$ret$1 = accumulator;
    var mask = tmp$ret$1;
    return new TextDecoration(mask);
  };
  Companion_27.$metadata$ = objectMeta('Companion');
  var Companion_instance_27;
  function Companion_getInstance_37() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function TextDecoration(mask) {
    Companion_getInstance_37();
    this.mask_1 = mask;
  }
  TextDecoration.prototype.get_mask_woqbsl_k$ = function () {
    return this.mask_1;
  };
  TextDecoration.prototype.plus_18b76r_k$ = function (decoration) {
    return new TextDecoration(this.mask_1 | decoration.mask_1);
  };
  TextDecoration.prototype.contains_8528ny_k$ = function (other) {
    return (this.mask_1 | other.mask_1) === this.mask_1;
  };
  TextDecoration.prototype.toString = function () {
    if (this.mask_1 === 0) {
      return 'TextDecoration.None';
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var values = tmp$ret$0;
    if (!((this.mask_1 & Companion_getInstance_37().Underline_1.mask_1) === 0)) {
      values.add_1j60pz_k$('Underline');
    }
    if (!((this.mask_1 & Companion_getInstance_37().LineThrough_1.mask_1) === 0)) {
      values.add_1j60pz_k$('LineThrough');
    }
    if (values.get_size_woubt6_k$() === 1) {
      return 'TextDecoration.' + values.get_fkrdnv_k$(0);
    }
    return 'TextDecoration[' + fastJoinToString$default(values, ', ', null, null, 0, null, null, 62, null) + ']';
  };
  TextDecoration.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextDecoration))
      return false;
    if (!(this.mask_1 === other.mask_1))
      return false;
    return true;
  };
  TextDecoration.prototype.hashCode = function () {
    return this.mask_1;
  };
  TextDecoration.$metadata$ = classMeta('TextDecoration');
  function _TextDirection___init__impl__lh8lzt(value) {
    return value;
  }
  function _TextDirection___get_value__impl__ka7r45($this) {
    return $this;
  }
  function TextDirection__toString_impl_x3uh9t($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_38().Ltr_1 ? 'Ltr' : tmp0_subject === Companion_getInstance_38().Rtl_1 ? 'Rtl' : tmp0_subject === Companion_getInstance_38().Content_1 ? 'Content' : tmp0_subject === Companion_getInstance_38().ContentOrLtr_1 ? 'ContentOrLtr' : tmp0_subject === Companion_getInstance_38().ContentOrRtl_1 ? 'ContentOrRtl' : 'Invalid';
  }
  function Companion_28() {
    Companion_instance_28 = this;
    this.Ltr_1 = _TextDirection___init__impl__lh8lzt(1);
    this.Rtl_1 = _TextDirection___init__impl__lh8lzt(2);
    this.Content_1 = _TextDirection___init__impl__lh8lzt(3);
    this.ContentOrLtr_1 = _TextDirection___init__impl__lh8lzt(4);
    this.ContentOrRtl_1 = _TextDirection___init__impl__lh8lzt(5);
  }
  Companion_28.prototype.get_Ltr_y8cfpu_k$ = function () {
    return this.Ltr_1;
  };
  Companion_28.prototype.get_Rtl_52ixoy_k$ = function () {
    return this.Rtl_1;
  };
  Companion_28.prototype.get_Content_x7rqv5_k$ = function () {
    return this.Content_1;
  };
  Companion_28.prototype.get_ContentOrLtr_xdyfbs_k$ = function () {
    return this.ContentOrLtr_1;
  };
  Companion_28.prototype.get_ContentOrRtl_8hc4mg_k$ = function () {
    return this.ContentOrRtl_1;
  };
  Companion_28.$metadata$ = objectMeta('Companion');
  var Companion_instance_28;
  function Companion_getInstance_38() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function TextDirection__hashCode_impl_g63nwg($this) {
    return $this;
  }
  function TextDirection__equals_impl_3fvxt0($this, other) {
    if (!(other instanceof TextDirection))
      return false;
    var tmp0_other_with_cast = other instanceof TextDirection ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextDirection(value) {
    Companion_getInstance_38();
    this.value_1 = value;
  }
  TextDirection.prototype.toString = function () {
    return TextDirection__toString_impl_x3uh9t(this.value_1);
  };
  TextDirection.prototype.hashCode = function () {
    return TextDirection__hashCode_impl_g63nwg(this.value_1);
  };
  TextDirection.prototype.equals = function (other) {
    return TextDirection__equals_impl_3fvxt0(this.value_1, other);
  };
  TextDirection.$metadata$ = classMeta('TextDirection');
  function Unspecified() {
    Unspecified_instance = this;
    this.$stable_1 = 0;
  }
  Unspecified.prototype.get_color_v34vrz_k$ = function () {
    return Companion_getInstance().Unspecified_1;
  };
  Unspecified.prototype.get_brush_ipcjyp_k$ = function () {
    return null;
  };
  Unspecified.prototype.get_alpha_iooth1_k$ = function () {
    FloatCompanionObject_getInstance();
    return NaN;
  };
  Unspecified.$metadata$ = objectMeta('Unspecified', [TextForegroundStyle]);
  var Unspecified_instance;
  function Unspecified_getInstance() {
    if (Unspecified_instance == null)
      new Unspecified();
    return Unspecified_instance;
  }
  function Companion_29() {
    Companion_instance_29 = this;
  }
  Companion_29.prototype.from_ofk88i_k$ = function (color) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(color), _Color___get_value__impl__1pls5m(Companion_getInstance().Unspecified_1));
    if (tmp$ret$0) {
      tmp = new ColorStyle(color);
    } else {
      tmp = Unspecified_getInstance();
    }
    return tmp;
  };
  Companion_29.prototype.from_4hvn90_k$ = function (brush, alpha) {
    var tmp0_subject = brush;
    var tmp;
    if (tmp0_subject == null) {
      tmp = Unspecified_getInstance();
    } else {
      if (tmp0_subject instanceof SolidColor) {
        tmp = this.from_ofk88i_k$(modulate(brush.value_1, alpha));
      } else {
        if (tmp0_subject instanceof ShaderBrush) {
          tmp = new BrushStyle(brush, alpha);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  Companion_29.$metadata$ = objectMeta('Companion');
  var Companion_instance_29;
  function Companion_getInstance_39() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function TextForegroundStyle$merge$lambda(this$0) {
    return function () {
      return this$0.get_alpha_iooth1_k$();
    };
  }
  function TextForegroundStyle$merge$lambda_0(this$0) {
    return function () {
      return this$0;
    };
  }
  function TextForegroundStyle() {
    Companion_getInstance_39();
  }
  TextForegroundStyle.$metadata$ = interfaceMeta('TextForegroundStyle');
  function BrushStyle(value, alpha) {
    this.value_1 = value;
    this.alpha_1 = alpha;
  }
  BrushStyle.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  BrushStyle.prototype.get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  BrushStyle.prototype.get_color_v34vrz_k$ = function () {
    return Companion_getInstance().Unspecified_1;
  };
  BrushStyle.prototype.get_brush_ipcjyp_k$ = function () {
    return this.value_1;
  };
  BrushStyle.prototype.component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  BrushStyle.prototype.component2_7eebsb_k$ = function () {
    return this.alpha_1;
  };
  BrushStyle.prototype.copy_9hw5mh_k$ = function (value, alpha) {
    return new BrushStyle(value, alpha);
  };
  BrushStyle.prototype.copy$default_scw16t_k$ = function (value, alpha, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      value = this.value_1;
    if (!(($mask0 & 2) === 0))
      alpha = this.alpha_1;
    return this.copy_9hw5mh_k$(value, alpha);
  };
  BrushStyle.prototype.toString = function () {
    return 'BrushStyle(value=' + this.value_1 + ', alpha=' + this.alpha_1 + ')';
  };
  BrushStyle.prototype.hashCode = function () {
    var result = hashCode(this.value_1);
    result = imul(result, 31) + getNumberHashCode(this.alpha_1) | 0;
    return result;
  };
  BrushStyle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BrushStyle))
      return false;
    var tmp0_other_with_cast = other instanceof BrushStyle ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    if (!equals(this.alpha_1, tmp0_other_with_cast.alpha_1))
      return false;
    return true;
  };
  BrushStyle.$metadata$ = classMeta('BrushStyle', [TextForegroundStyle]);
  function takeOrElse_0(_this__u8e3s4, block) {
    return isNaN_0(_this__u8e3s4) ? block() : _this__u8e3s4;
  }
  function ColorStyle(value) {
    this.value_1 = value;
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var tmp0__get_isSpecified__cddt7f = this.value_1;
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(tmp0__get_isSpecified__cddt7f), _Color___get_value__impl__1pls5m(Companion_getInstance().Unspecified_1));
    var tmp1_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.text.style.ColorStyle.<anonymous>' call
      tmp$ret$1 = 'ColorStyle value must be specified, use TextForegroundStyle.Unspecified instead.';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  ColorStyle.prototype.get_value_puk9xv_k$ = function () {
    return this.value_1;
  };
  ColorStyle.prototype.get_color_v34vrz_k$ = function () {
    return this.value_1;
  };
  ColorStyle.prototype.get_brush_ipcjyp_k$ = function () {
    return null;
  };
  ColorStyle.prototype.get_alpha_iooth1_k$ = function () {
    return _Color___get_alpha__impl__wcfyv1(this.get_color_v34vrz_k$());
  };
  ColorStyle.prototype.component1_j10ipl_k$ = function () {
    return this.value_1;
  };
  ColorStyle.prototype.copy_mb92sd_k$ = function (value) {
    return new ColorStyle(value);
  };
  ColorStyle.prototype.copy$default_5ybctz_k$ = function (value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      value = this.value_1;
    return this.copy_mb92sd_k$(value);
  };
  ColorStyle.prototype.toString = function () {
    return 'ColorStyle(value=' + new Color(this.value_1) + ')';
  };
  ColorStyle.prototype.hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.value_1);
  };
  ColorStyle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColorStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ColorStyle ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  ColorStyle.$metadata$ = classMeta('ColorStyle', [TextForegroundStyle]);
  function modulate(_this__u8e3s4, alpha) {
    var tmp;
    if (isNaN_0(alpha) ? true : alpha >= 1.0) {
      tmp = _this__u8e3s4;
    } else {
      var tmp_0 = _Color___get_alpha__impl__wcfyv1(_this__u8e3s4) * alpha;
      tmp = Color__copy$default_impl_ectz3s(_this__u8e3s4, tmp_0, 0.0, 0.0, 0.0, 14, null);
    }
    return tmp;
  }
  function TextGeometricTransform_init_$Init$(scaleX, skewX, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      scaleX = 1.0;
    if (!(($mask0 & 2) === 0))
      skewX = 0.0;
    TextGeometricTransform.call($this, scaleX, skewX);
    return $this;
  }
  function TextGeometricTransform_init_$Create$(scaleX, skewX, $mask0, $marker) {
    return TextGeometricTransform_init_$Init$(scaleX, skewX, $mask0, $marker, Object.create(TextGeometricTransform.prototype));
  }
  function Companion_30() {
    Companion_instance_30 = this;
    this.None_1 = new TextGeometricTransform(1.0, 0.0);
  }
  Companion_30.prototype.get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  Companion_30.$metadata$ = objectMeta('Companion');
  var Companion_instance_30;
  function Companion_getInstance_40() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function TextGeometricTransform(scaleX, skewX) {
    Companion_getInstance_40();
    this.scaleX_1 = scaleX;
    this.skewX_1 = skewX;
  }
  TextGeometricTransform.prototype.get_scaleX_je2hxz_k$ = function () {
    return this.scaleX_1;
  };
  TextGeometricTransform.prototype.get_skewX_iyk9d1_k$ = function () {
    return this.skewX_1;
  };
  TextGeometricTransform.prototype.copy_138fzp_k$ = function (scaleX, skewX) {
    return new TextGeometricTransform(scaleX, skewX);
  };
  TextGeometricTransform.prototype.copy$default_bbfa40_k$ = function (scaleX, skewX, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      scaleX = this.scaleX_1;
    if (!(($mask0 & 2) === 0))
      skewX = this.skewX_1;
    return this.copy_138fzp_k$(scaleX, skewX);
  };
  TextGeometricTransform.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextGeometricTransform))
      return false;
    if (!(this.scaleX_1 === other.scaleX_1))
      return false;
    if (!(this.skewX_1 === other.skewX_1))
      return false;
    return true;
  };
  TextGeometricTransform.prototype.hashCode = function () {
    var result = getNumberHashCode(this.scaleX_1);
    result = imul(31, result) + getNumberHashCode(this.skewX_1) | 0;
    return result;
  };
  TextGeometricTransform.prototype.toString = function () {
    return 'TextGeometricTransform(scaleX=' + this.scaleX_1 + ', skewX=' + this.skewX_1 + ')';
  };
  TextGeometricTransform.$metadata$ = classMeta('TextGeometricTransform');
  function TextIndent_init_$Init$(firstLine, restLine, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      firstLine = get_sp(0);
    if (!(($mask0 & 2) === 0))
      restLine = get_sp(0);
    TextIndent_0.call($this, firstLine, restLine);
    return $this;
  }
  function TextIndent_init_$Create$(firstLine, restLine, $mask0, $marker) {
    return TextIndent_init_$Init$(firstLine, restLine, $mask0, $marker, Object.create(TextIndent_0.prototype));
  }
  function Companion_31() {
    Companion_instance_31 = this;
    var tmp = this;
    tmp.None_1 = TextIndent_init_$Create$(null, null, 3, null);
  }
  Companion_31.prototype.get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  Companion_31.$metadata$ = objectMeta('Companion');
  var Companion_instance_31;
  function Companion_getInstance_41() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function TextIndent_0(firstLine, restLine) {
    Companion_getInstance_41();
    this.firstLine_1 = firstLine;
    this.restLine_1 = restLine;
  }
  TextIndent_0.prototype.get_firstLine_axcdcr_k$ = function () {
    return this.firstLine_1;
  };
  TextIndent_0.prototype.get_restLine_6dnanl_k$ = function () {
    return this.restLine_1;
  };
  TextIndent_0.prototype.copy_4au3wb_k$ = function (firstLine, restLine) {
    return new TextIndent_0(firstLine, restLine);
  };
  TextIndent_0.prototype.copy$default_b7ckb4_k$ = function (firstLine, restLine, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      firstLine = this.firstLine_1;
    if (!(($mask0 & 2) === 0))
      restLine = this.restLine_1;
    return this.copy_4au3wb_k$(firstLine, restLine);
  };
  TextIndent_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent_0))
      return false;
    if (!equals(this.firstLine_1, other.firstLine_1))
      return false;
    if (!equals(this.restLine_1, other.restLine_1))
      return false;
    return true;
  };
  TextIndent_0.prototype.hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.firstLine_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.restLine_1) | 0;
    return result;
  };
  TextIndent_0.prototype.toString = function () {
    return 'TextIndent(firstLine=' + new TextUnit(this.firstLine_1) + ', restLine=' + new TextUnit(this.restLine_1) + ')';
  };
  TextIndent_0.$metadata$ = classMeta('TextIndent');
  function _TextOverflow___init__impl__obguoe(value) {
    return value;
  }
  function _TextOverflow___get_value__impl__vugm5i($this) {
    return $this;
  }
  function TextOverflow__toString_impl_10s0c2($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_42().Clip_1 ? 'Clip' : tmp0_subject === Companion_getInstance_42().Ellipsis_1 ? 'Ellipsis' : tmp0_subject === Companion_getInstance_42().Visible_1 ? 'Visible' : 'Invalid';
  }
  function Companion_32() {
    Companion_instance_32 = this;
    this.Clip_1 = _TextOverflow___init__impl__obguoe(1);
    this.Ellipsis_1 = _TextOverflow___init__impl__obguoe(2);
    this.Visible_1 = _TextOverflow___init__impl__obguoe(3);
  }
  Companion_32.prototype.get_Clip_a6y3d7_k$ = function () {
    return this.Clip_1;
  };
  Companion_32.prototype.get_Ellipsis_xgxit0_k$ = function () {
    return this.Ellipsis_1;
  };
  Companion_32.prototype.get_Visible_2hbc1x_k$ = function () {
    return this.Visible_1;
  };
  Companion_32.$metadata$ = objectMeta('Companion');
  var Companion_instance_32;
  function Companion_getInstance_42() {
    if (Companion_instance_32 == null)
      new Companion_32();
    return Companion_instance_32;
  }
  function TextOverflow__hashCode_impl_kqdwgt($this) {
    return $this;
  }
  function TextOverflow__equals_impl_jkxdof($this, other) {
    if (!(other instanceof TextOverflow))
      return false;
    var tmp0_other_with_cast = other instanceof TextOverflow ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextOverflow(value) {
    Companion_getInstance_42();
    this.value_1 = value;
  }
  TextOverflow.prototype.toString = function () {
    return TextOverflow__toString_impl_10s0c2(this.value_1);
  };
  TextOverflow.prototype.hashCode = function () {
    return TextOverflow__hashCode_impl_kqdwgt(this.value_1);
  };
  TextOverflow.prototype.equals = function (other) {
    return TextOverflow__equals_impl_jkxdof(this.value_1, other);
  };
  TextOverflow.$metadata$ = classMeta('TextOverflow');
  function synthesizeTypeface(_this__u8e3s4, typeface, font, requestedWeight, requestedStyle) {
    return typeface;
  }
  function appendPartOfCharArray(_this__u8e3s4, charArray, offset, len) {
    var inductionVariable = offset;
    var last = offset + len | 0;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.append_t8oh9e_k$(charArray[i]);
      }
       while (inductionVariable < last);
  }
  function createPlatformLocaleDelegate() {
    return new createPlatformLocaleDelegate$1();
  }
  function JsLocale(locale) {
    this.locale_1 = locale;
  }
  JsLocale.prototype.get_locale_g9dqar_k$ = function () {
    return this.locale_1;
  };
  JsLocale.prototype.get_language_cjhhk1_k$ = function () {
    return ensureNotNull(this.locale_1.languageCode);
  };
  JsLocale.prototype.get_script_jedas4_k$ = function () {
    return ensureNotNull(this.locale_1.scriptCode);
  };
  JsLocale.prototype.get_region_iy88ot_k$ = function () {
    return ensureNotNull(this.locale_1.countryCode);
  };
  JsLocale.prototype.toLanguageTag_xneel5_k$ = function () {
    throw new NotImplementedError('An operation is not implemented: implement native toLanguageTag');
  };
  JsLocale.$metadata$ = classMeta('JsLocale', [PlatformLocale]);
  function createPlatformLocaleDelegate$1() {
  }
  createPlatformLocaleDelegate$1.prototype.get_current_jwi6j4_k$ = function () {
    return listOf_0(new JsLocale(new Object()));
  };
  createPlatformLocaleDelegate$1.prototype.parseLanguageTag_fhwnvy_k$ = function (languageTag) {
    return new JsLocale(new Object());
  };
  createPlatformLocaleDelegate$1.$metadata$ = classMeta(undefined, [PlatformLocaleDelegate]);
  function get_GenericFontFamiliesMapping() {
    init_properties_JsFont_js_kt_nctwph();
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = GenericFontFamiliesMapping$factory();
    tmp$ret$0 = GenericFontFamiliesMapping$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  var GenericFontFamiliesMapping$delegate;
  function get_typefacesCache() {
    init_properties_JsFont_js_kt_nctwph();
    return typefacesCache;
  }
  var typefacesCache;
  function Platform$Companion$Current$delegate$lambda() {
    println('TODO: selecting MacOS unconditionally');
    return Platform_MacOS_getInstance();
  }
  var Platform_Linux_instance;
  var Platform_Windows_instance;
  var Platform_MacOS_instance;
  var Platform_Unknown_instance;
  function Companion_33() {
    Companion_instance_33 = this;
    var tmp = this;
    tmp.Current$delegate_1 = lazy_0(Platform$Companion$Current$delegate$lambda);
  }
  Companion_33.prototype.get_Current_nlikr4_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = Current$factory();
    tmp$ret$0 = this.Current$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  Companion_33.$metadata$ = objectMeta('Companion');
  var Companion_instance_33;
  function Companion_getInstance_43() {
    Platform_initEntries();
    if (Companion_instance_33 == null)
      new Companion_33();
    return Companion_instance_33;
  }
  function values_1() {
    return [Platform_Linux_getInstance(), Platform_Windows_getInstance(), Platform_MacOS_getInstance(), Platform_Unknown_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'Linux':
        return Platform_Linux_getInstance();
      case 'Windows':
        return Platform_Windows_getInstance();
      case 'MacOS':
        return Platform_MacOS_getInstance();
      case 'Unknown':
        return Platform_Unknown_getInstance();
      default:
        Platform_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Platform_entriesInitialized;
  function Platform_initEntries() {
    if (Platform_entriesInitialized)
      return Unit_getInstance();
    Platform_entriesInitialized = true;
    Platform_Linux_instance = new Platform('Linux', 0);
    Platform_Windows_instance = new Platform('Windows', 1);
    Platform_MacOS_instance = new Platform('MacOS', 2);
    Platform_Unknown_instance = new Platform('Unknown', 3);
    Companion_getInstance_43();
  }
  function Platform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Platform.$metadata$ = classMeta('Platform', undefined, undefined, undefined, undefined, Enum.prototype);
  function loadFromTypefacesCache(font) {
    init_properties_JsFont_js_kt_nctwph();
    if (!(font instanceof PlatformFont)) {
      throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + font);
    }
    var tmp0_subject = font;
    var tmp;
    if (tmp0_subject instanceof LoadedFont) {
      var tmp_0 = Companion_getInstance_4();
      var tmp_1 = Companion_getInstance_5();
      var tmp_2 = tmp_1.makeFromBytes$default_mgrzan_k$(font.data_1, 0, 0, 6, null);
      tmp = tmp_0.makeFromData$default_gyxsbd_k$(tmp_2, 0, 2, null);
    } else {
      throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + font);
    }
    return tmp;
  }
  function GenericFontFamiliesMapping$delegate$lambda() {
    init_properties_JsFont_js_kt_nctwph();
    var tmp0_subject = Companion_getInstance_43().get_Current_nlikr4_k$();
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 1:
        tmp = mapOf([to(Companion_getInstance_14().SansSerif_1.name_1, listOf_0('Arial')), to(Companion_getInstance_14().Serif_1.name_1, listOf_0('Times New Roman')), to(Companion_getInstance_14().Monospace_1.name_1, listOf_0('Consolas')), to(Companion_getInstance_14().Cursive_1.name_1, listOf_0('Comic Sans MS'))]);
        break;
      case 2:
        tmp = mapOf([to(Companion_getInstance_14().SansSerif_1.name_1, listOf(['Helvetica Neue', 'Helvetica'])), to(Companion_getInstance_14().Serif_1.name_1, listOf_0('Times')), to(Companion_getInstance_14().Monospace_1.name_1, listOf_0('Courier')), to(Companion_getInstance_14().Cursive_1.name_1, listOf_0('Apple Chancery'))]);
        break;
      case 0:
        tmp = mapOf([to(Companion_getInstance_14().SansSerif_1.name_1, listOf(['Noto Sans', 'DejaVu Sans'])), to(Companion_getInstance_14().Serif_1.name_1, listOf(['Noto Serif', 'DejaVu Serif', 'Times New Roman'])), to(Companion_getInstance_14().Monospace_1.name_1, listOf(['Noto Sans Mono', 'DejaVu Sans Mono'])), to(Companion_getInstance_14().Cursive_1.name_1, listOf_0('Comic Sans MS'))]);
        break;
      case 3:
        tmp = mapOf([to(Companion_getInstance_14().SansSerif_1.name_1, listOf_0('Arial')), to(Companion_getInstance_14().Serif_1.name_1, listOf_0('Times New Roman')), to(Companion_getInstance_14().Monospace_1.name_1, listOf_0('Consolas')), to(Companion_getInstance_14().Cursive_1.name_1, listOf_0('Comic Sans MS'))]);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function typefacesCache$1() {
  }
  typefacesCache$1.prototype.get_eczep_k$ = function (key, loader) {
    throw new NotImplementedError('An operation is not implemented: implement js typefacesCache');
  };
  typefacesCache$1.prototype.get_7qedx8_k$ = function (key, loader) {
    return this.get_eczep_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE(), loader);
  };
  typefacesCache$1.$metadata$ = classMeta(undefined, [Cache]);
  function Platform_Linux_getInstance() {
    Platform_initEntries();
    return Platform_Linux_instance;
  }
  function Platform_Windows_getInstance() {
    Platform_initEntries();
    return Platform_Windows_instance;
  }
  function Platform_MacOS_getInstance() {
    Platform_initEntries();
    return Platform_MacOS_instance;
  }
  function Platform_Unknown_getInstance() {
    Platform_initEntries();
    return Platform_Unknown_instance;
  }
  function GenericFontFamiliesMapping$factory() {
    return getPropertyCallableRef('GenericFontFamiliesMapping', 0, KProperty0, function () {
      return get_GenericFontFamiliesMapping();
    }, null);
  }
  function Current$factory() {
    return getPropertyCallableRef('Current', 1, KProperty1, function (receiver) {
      return receiver.get_Current_nlikr4_k$();
    }, null);
  }
  var properties_initialized_JsFont_js_kt_uv7ahb;
  function init_properties_JsFont_js_kt_nctwph() {
    if (properties_initialized_JsFont_js_kt_uv7ahb) {
    } else {
      properties_initialized_JsFont_js_kt_uv7ahb = true;
      GenericFontFamiliesMapping$delegate = lazy_0(GenericFontFamiliesMapping$delegate$lambda);
      typefacesCache = new typefacesCache$1();
    }
  }
  function contentBasedTextDirection(_this__u8e3s4) {
    return null;
  }
  function ActualStringDelegate() {
    return new NativeStringDelegate();
  }
  function NativeStringDelegate() {
  }
  NativeStringDelegate.prototype.toUpperCase_m677z5_k$ = function (string, locale) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.toUpperCase' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = string;
    tmp$ret$1 = tmp$ret$0.toUpperCase();
    return tmp$ret$1;
  };
  NativeStringDelegate.prototype.toLowerCase_gkzuzk_k$ = function (string, locale) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.toLowerCase' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = string;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    return tmp$ret$1;
  };
  NativeStringDelegate.prototype.capitalize_4m08za_k$ = function (string, locale) {
    return capitalize(string);
  };
  NativeStringDelegate.prototype.decapitalize_81f6p5_k$ = function (string, locale) {
    return decapitalize(string);
  };
  NativeStringDelegate.$metadata$ = classMeta('NativeStringDelegate', [PlatformStringDelegate]);
  function PlatformFont() {
    this.$stable_1 = 0;
  }
  PlatformFont.prototype.get_cacheKey_w22q12_k$ = function () {
    println('TODO: implement proper js PlatformFont.cacheKey');
    return this.get_identity_y1rl2x_k$();
  };
  PlatformFont.$metadata$ = classMeta('PlatformFont', [Font]);
  function WeakHashMap() {
  }
  WeakHashMap.prototype.get_entries_p20ztl_k$ = function () {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.get_values_ksazhn_k$ = function () {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.get_keys_wop4xp_k$ = function () {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.get_size_woubt6_k$ = function () {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.containsKey_wgk31w_k$ = function (key) {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.containsValue_5viga1_k$ = function (key) {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.clear_1keqml_k$ = function () {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.clear_j9y8zo_k$ = function () {
    return this.clear_1keqml_k$();
  };
  WeakHashMap.prototype.get_1mhr4y_k$ = function (key) {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.put_3mhbri_k$ = function (key, value) {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.putAll_mee1c3_k$ = function (from) {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.remove_8hbkc0_k$ = function (key) {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.isEmpty_y1axqb_k$ = function () {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.$metadata$ = classMeta('WeakHashMap', [MutableMap]);
  function getOrPut(_this__u8e3s4, key, default_0) {
    return default_0(key);
  }
  function toCharArray_0(_this__u8e3s4, destination, destinationOffset, startIndex, endIndex) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = until(startIndex, endIndex);
    var inductionVariable = tmp0_forEach.first_1;
    var last = tmp0_forEach.last_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.ui.text.input.toCharArray.<anonymous>' call
        destination[destinationOffset + element | 0] = charSequenceGet(_this__u8e3s4, element);
      }
       while (!(element === last));
  }
  function isNeutralDirectionality(_this__u8e3s4) {
    println('TODO: implement Char.isNeutralDirectionality in jsNativeMain');
    return false;
  }
  function Cache() {
  }
  Cache.$metadata$ = interfaceMeta('Cache');
  function Companion_34() {
    Companion_instance_34 = this;
    this.Default_1 = new PlatformParagraphStyle();
  }
  Companion_34.prototype.get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  Companion_34.$metadata$ = objectMeta('Companion');
  var Companion_instance_34;
  function Companion_getInstance_44() {
    if (Companion_instance_34 == null)
      new Companion_34();
    return Companion_instance_34;
  }
  function PlatformParagraphStyle() {
    Companion_getInstance_44();
    this.$stable_1 = 0;
  }
  PlatformParagraphStyle.prototype.merge_phrebc_k$ = function (other) {
    return this;
  };
  PlatformParagraphStyle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformParagraphStyle))
      return false;
    return true;
  };
  PlatformParagraphStyle.prototype.hashCode = function () {
    return getObjectHashCode(this);
  };
  PlatformParagraphStyle.$metadata$ = classMeta('PlatformParagraphStyle');
  function Companion_35() {
    Companion_instance_35 = this;
    this.Default_1 = new PlatformSpanStyle();
  }
  Companion_35.prototype.get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  Companion_35.$metadata$ = objectMeta('Companion');
  var Companion_instance_35;
  function Companion_getInstance_45() {
    if (Companion_instance_35 == null)
      new Companion_35();
    return Companion_instance_35;
  }
  function PlatformSpanStyle() {
    Companion_getInstance_45();
    this.$stable_1 = 0;
  }
  PlatformSpanStyle.prototype.merge_o4jtak_k$ = function (other) {
    return this;
  };
  PlatformSpanStyle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformSpanStyle))
      return false;
    return true;
  };
  PlatformSpanStyle.prototype.hashCode = function () {
    return getObjectHashCode(this);
  };
  PlatformSpanStyle.$metadata$ = classMeta('PlatformSpanStyle');
  function PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    PlatformTextStyle.call($this);
    $this.spanStyle_1 = spanStyle;
    $this.paragraphStyle_1 = paragraphStyle;
    return $this;
  }
  function PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, Object.create(PlatformTextStyle.prototype));
  }
  PlatformTextStyle.prototype.get_spanStyle_2b836q_k$ = function () {
    return this.spanStyle_1;
  };
  PlatformTextStyle.prototype.get_paragraphStyle_27utpo_k$ = function () {
    return this.paragraphStyle_1;
  };
  PlatformTextStyle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformTextStyle))
      return false;
    if (!equals(this.paragraphStyle_1, other.paragraphStyle_1))
      return false;
    if (!equals(this.spanStyle_1, other.spanStyle_1))
      return false;
    return true;
  };
  PlatformTextStyle.prototype.hashCode = function () {
    return getObjectHashCode(this);
  };
  function PlatformTextStyle() {
    this.$stable_1 = 0;
  }
  PlatformTextStyle.$metadata$ = classMeta('PlatformTextStyle');
  function createPlatformTextStyle(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle);
  }
  function Paragraph_0() {
  }
  Paragraph_0.$metadata$ = interfaceMeta('Paragraph');
  function _get_ellipsisChar__lqwbxg($this) {
    return $this.ellipsisChar_1;
  }
  function _get_paragraphIntrinsics__noc1dh($this) {
    return $this.paragraphIntrinsics_1;
  }
  function _get_layouter__1rxx78($this) {
    return $this.layouter_1;
  }
  function _set_para__9s3tyv($this, _set____db54di) {
    $this.para_1 = _set____db54di;
  }
  function _get_para__dbvtkb($this) {
    return $this.para_1;
  }
  function _get_text__de5ose_0($this) {
    return $this.paragraphIntrinsics_1.text_1;
  }
  function lineMetricsForOffset($this, offset) {
    var metrics = _get_lineMetrics__5iiuki($this);
    var indexedObject = metrics;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var line = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (offset < line.endIncludingNewline_1) {
        return line;
      }
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$0 = metrics.length === 0;
    if (tmp$ret$0) {
      return null;
    }
    return last_0(metrics);
  }
  function getLineMetricsForVerticalPosition($this, vertical) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_firstOrNull = _get_lineMetrics__5iiuki($this);
      var indexedObject = tmp0_firstOrNull;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.SkiaParagraph.getLineMetricsForVerticalPosition.<anonymous>' call
        tmp$ret$0 = vertical < element.baseline_1 + element.descent_1;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function _get_lineMetrics__5iiuki($this) {
    var tmp;
    if (_get_text__de5ose_0($this) === '') {
      var metrics = $this.layouter_1.get_defaultFont_6nsy4n_k$().get_metrics_h2mme2_k$();
      var ascent = -metrics.ascent_1;
      var descent = metrics.descent_1;
      var baseline = $this.para_1.get_alphabeticBaseline_rczsqt_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      var tmp0_with = $this.layouter_1.get_paragraphStyle_27utpo_k$().get_strutStyle_9kfpti_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-lineMetrics>.<anonymous>' call
      var tmp_0;
      if (((tmp0_with.get_isEnabled_roz1ma_k$() ? !tmp0_with.get_isHeightForced_n6afgt_k$() : false) ? tmp0_with.get_isHeightOverridden_qmvgge_k$() : false) ? tmp0_with.get_fontSize_pr9n47_k$() > 0.0 : false) {
        tmp_0 = tmp0_with.get_height_e7t92o_k$() * tmp0_with.get_fontSize_pr9n47_k$();
      } else {
        tmp_0 = ascent + descent;
      }
      tmp$ret$0 = tmp_0;
      tmp$ret$1 = tmp$ret$0;
      var height = tmp$ret$1;
      var tmp$ret$4;
      // Inline function 'kotlin.arrayOf' call
      var tmp1_arrayOf = [new LineMetrics(0, 0, 0, 0, true, ascent, descent, ascent, height, 0.0, 0.0, baseline, 0)];
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp1_arrayOf;
      tmp$ret$3 = tmp$ret$2;
      tmp$ret$4 = tmp$ret$3;
      tmp = tmp$ret$4;
    } else {
      var tmp_1 = $this.para_1.get_lineMetrics_yxegqi_k$();
      tmp = isArray(tmp_1) ? tmp_1 : THROW_CCE();
    }
    return tmp;
  }
  function getBoxForwardByOffset($this, offset) {
    var to = offset + 1 | 0;
    while (to <= _get_text__de5ose_0($this).length) {
      var box = firstOrNull($this.para_1.getRectsForRange_8yx14g_k$(offset, to, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
      if (!(box == null)) {
        return box;
      }
      to = to + 1 | 0;
    }
    return null;
  }
  function getBoxBackwardByOffset($this, offset, end) {
    var from = offset - 1 | 0;
    var isRtl = $this.paragraphIntrinsics_1.textDirection_1.equals(ResolvedTextDirection_Rtl_getInstance());
    while (from >= 0) {
      var box = firstOrNull($this.para_1.getRectsForRange_8yx14g_k$(from, end, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
      if (box == null)
        from = from - 1 | 0;
      else if (equals(new Char(charSequenceGet(_get_text__de5ose_0($this), from)), new Char(_Char___init__impl__6a9atx(10)))) {
        var tmp;
        if (!isRtl) {
          var bottom = box.rect_1.bottom_1 + box.rect_1.bottom_1 - box.rect_1.top_1;
          var rect = new Rect_0(0.0, box.rect_1.bottom_1, 0.0, bottom);
          return new TextBox(rect, box.get_direction_7ekune_k$());
        } else {
          var tmp_0;
          if (from === get_lastIndex_0(_get_text__de5ose_0($this))) {
            var bottom_0 = box.rect_1.bottom_1 + box.rect_1.bottom_1 - box.rect_1.top_1;
            var rect_0 = new Rect_0($this.get_width_j0q4yl_k$(), box.rect_1.bottom_1, $this.get_width_j0q4yl_k$(), bottom_0);
            tmp_0 = new TextBox(rect_0, box.get_direction_7ekune_k$());
          } else {
            var nextBox = first_1($this.para_1.getRectsForRange_8yx14g_k$(offset, offset + 1 | 0, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
            var rect_1 = new Rect_0(nextBox.rect_1.left_1, nextBox.rect_1.top_1, nextBox.rect_1.left_1, nextBox.rect_1.bottom_1);
            tmp_0 = new TextBox(rect_1, nextBox.get_direction_7ekune_k$());
          }
          tmp = tmp_0;
        }
        return tmp;
      } else
        return box;
    }
    return null;
  }
  function getBoxBackwardByOffset$default($this, offset, end, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      end = offset;
    return getBoxBackwardByOffset($this, offset, end);
  }
  function SkiaParagraph(intrinsics, maxLines, ellipsis, constraints) {
    this.maxLines_1 = maxLines;
    this.ellipsis_1 = ellipsis;
    this.constraints_1 = constraints;
    this.ellipsisChar_1 = this.ellipsis_1 ? '\u2026' : '';
    var tmp = this;
    tmp.paragraphIntrinsics_1 = intrinsics instanceof SkiaParagraphIntrinsics ? intrinsics : THROW_CCE();
    this.layouter_1 = this.paragraphIntrinsics_1.layouter_lcs8mh_k$();
    var tmp_0 = this;
    var tmp_1 = this.get_width_j0q4yl_k$();
    tmp_0.para_1 = this.layouter_1.layoutParagraph$default_batlz_k$(tmp_1, this.maxLines_1, this.ellipsisChar_1, null, null, null, 56, null);
    this.para_1.layout_foik1o_k$(this.get_width_j0q4yl_k$());
  }
  SkiaParagraph.prototype.get_maxLines_pclpoc_k$ = function () {
    return this.maxLines_1;
  };
  SkiaParagraph.prototype.get_ellipsis_sol6jq_k$ = function () {
    return this.ellipsis_1;
  };
  SkiaParagraph.prototype.get_constraints_khg0u2_k$ = function () {
    return this.constraints_1;
  };
  SkiaParagraph.prototype.get_width_j0q4yl_k$ = function () {
    return _Constraints___get_maxWidth__impl__uuyqc(this.constraints_1);
  };
  SkiaParagraph.prototype.get_height_e7t92o_k$ = function () {
    return this.para_1.get_height_e7t92o_k$();
  };
  SkiaParagraph.prototype.get_minIntrinsicWidth_lmc1rq_k$ = function () {
    return this.paragraphIntrinsics_1.minIntrinsicWidth_1;
  };
  SkiaParagraph.prototype.get_maxIntrinsicWidth_b4gk2k_k$ = function () {
    return this.paragraphIntrinsics_1.maxIntrinsicWidth_1;
  };
  SkiaParagraph.prototype.get_firstBaseline_s5430_k$ = function () {
    var tmp0_safe_receiver = firstOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-firstBaseline>.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.baseline_1;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  SkiaParagraph.prototype.get_lastBaseline_inuptw_k$ = function () {
    var tmp0_safe_receiver = lastOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-lastBaseline>.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.baseline_1;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  SkiaParagraph.prototype.get_didExceedMaxLines_xyxo57_k$ = function () {
    return this.para_1.didExceedMaxLines_51frgy_k$();
  };
  SkiaParagraph.prototype.get_lineCount_lmaazy_k$ = function () {
    var tmp;
    if (_get_text__de5ose_0(this) === '') {
      tmp = 1;
    } else {
      tmp = this.para_1.get_lineNumber_pm7qca_k$();
    }
    return tmp;
  };
  SkiaParagraph.prototype.get_placeholderRects_1ky2fv_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.para_1.get_rectsForPlaceholders_vi296l_k$();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(tmp0_map.length);
    var indexedObject = tmp0_map;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-placeholderRects>.<anonymous>' call
      tmp$ret$0 = toComposeRect(item.rect_1);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  SkiaParagraph.prototype.getPathForRange_i163f3_k$ = function (start, end) {
    var boxes = this.para_1.getRectsForRange_8yx14g_k$(start, end, RectHeightMode_MAX_getInstance(), RectWidthMode_TIGHT_getInstance());
    var path = Path();
    var indexedObject = boxes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var b = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp = asSkiaPath(path);
      tmp.addRect$default_rgvch2_k$(b.rect_1, null, 0, 6, null);
    }
    return path;
  };
  SkiaParagraph.prototype.getCursorRect_x5c8fl_k$ = function (offset) {
    var horizontal = this.getHorizontalPosition_b8vvic_k$(offset, true);
    var line = ensureNotNull(lineMetricsForOffset(this, offset));
    var isNewEmptyLine = (offset - 1 | 0) === line.startIndex_1 ? offset === _get_text__de5ose_0(this).length : false;
    var metrics = this.layouter_1.get_defaultFont_6nsy4n_k$().get_metrics_h2mme2_k$();
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = line.ascent_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.getCursorRect.<anonymous>' call
    var tmp;
    if (isNewEmptyLine) {
      var ascent = -metrics.ascent_1;
      tmp = coerceAtMost(tmp0_let, ascent);
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    var asc = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.let' call
    var tmp1_let = line.descent_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.getCursorRect.<anonymous>' call
    var tmp_0;
    if (isNewEmptyLine) {
      var descent = metrics.descent_1;
      tmp_0 = coerceAtMost(tmp1_let, descent);
    } else {
      tmp_0 = tmp1_let;
    }
    tmp$ret$2 = tmp_0;
    tmp$ret$3 = tmp$ret$2;
    var desc = tmp$ret$3;
    return new Rect_1(horizontal, line.baseline_1 - asc, horizontal, line.baseline_1 + desc);
  };
  SkiaParagraph.prototype.getLineLeft_w1obtc_k$ = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.left_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  SkiaParagraph.prototype.getLineRight_bo0e7j_k$ = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_right_ixz7xv_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  SkiaParagraph.prototype.getLineTop_8a2w7q_k$ = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.getLineTop.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.math.floor' call
      var tmp0_floor = tmp0_safe_receiver.baseline_1 - tmp0_safe_receiver.ascent_1;
      tmp$ret$0 = Math.floor(tmp0_floor);
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  SkiaParagraph.prototype.getLineBottom_spjtf0_k$ = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.getLineBottom.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.math.floor' call
      var tmp0_floor = tmp0_safe_receiver.baseline_1 + tmp0_safe_receiver.descent_1;
      tmp$ret$0 = Math.floor(tmp0_floor);
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  SkiaParagraph.prototype.getLineHeight_ba5d5c_k$ = function (lineIndex) {
    return _get_lineMetrics__5iiuki(this)[lineIndex].height_1;
  };
  SkiaParagraph.prototype.getLineWidth_ia4jjv_k$ = function (lineIndex) {
    return _get_lineMetrics__5iiuki(this)[lineIndex].width_1;
  };
  SkiaParagraph.prototype.getLineStart_504snr_k$ = function (lineIndex) {
    return _get_lineMetrics__5iiuki(this)[lineIndex].startIndex_1;
  };
  SkiaParagraph.prototype.getLineEnd_7kqxuy_k$ = function (lineIndex, visibleEnd) {
    var tmp;
    if (visibleEnd) {
      var metrics = _get_lineMetrics__5iiuki(this)[lineIndex];
      var tmp_0;
      if (lineIndex > 0 ? metrics.startIndex_1 < _get_lineMetrics__5iiuki(this)[lineIndex - 1 | 0].endIndex_1 : false) {
        tmp_0 = metrics.endIndex_1;
      } else if (metrics.startIndex_1 < _get_text__de5ose_0(this).length ? equals(new Char(charSequenceGet(_get_text__de5ose_0(this), metrics.startIndex_1)), new Char(_Char___init__impl__6a9atx(10))) : false) {
        tmp_0 = metrics.startIndex_1;
      } else {
        tmp_0 = metrics.endExcludingWhitespaces_1;
      }
      tmp = tmp_0;
    } else {
      tmp = _get_lineMetrics__5iiuki(this)[lineIndex].endIndex_1;
    }
    return tmp;
  };
  SkiaParagraph.prototype.isLineEllipsized_r1ol1o_k$ = function (lineIndex) {
    return false;
  };
  SkiaParagraph.prototype.getLineForOffset_9a3vwv_k$ = function (offset) {
    var tmp0_safe_receiver = lineMetricsForOffset(this, offset);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.getLineForOffset.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.lineNumber_1;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  SkiaParagraph.prototype.getLineForVerticalPosition_c1p2r4_k$ = function (vertical) {
    var tmp0_safe_receiver = getLineMetricsForVerticalPosition(this, vertical);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lineNumber_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  SkiaParagraph.prototype.getHorizontalPosition_b8vvic_k$ = function (offset, usePrimaryDirection) {
    var prevBox = getBoxBackwardByOffset$default(this, offset, 0, 4, null);
    var nextBox = getBoxForwardByOffset(this, offset);
    var isRtl = this.paragraphIntrinsics_1.textDirection_1.equals(ResolvedTextDirection_Rtl_getInstance());
    var isLtr = !isRtl;
    var tmp;
    if (prevBox == null ? nextBox == null : false) {
      tmp = isRtl ? this.get_width_j0q4yl_k$() : 0.0;
    } else if (prevBox == null) {
      tmp = cursorHorizontalPosition(ensureNotNull(nextBox), true);
    } else if (nextBox == null) {
      tmp = cursorHorizontalPosition$default(prevBox, false, 1, null);
    } else if (nextBox.get_direction_7ekune_k$().equals(prevBox.get_direction_7ekune_k$())) {
      tmp = cursorHorizontalPosition(nextBox, true);
    } else if (isLtr ? prevBox.get_direction_7ekune_k$().equals(Direction_LTR_getInstance()) : false) {
      tmp = cursorHorizontalPosition(nextBox, true);
    } else if (isRtl ? prevBox.get_direction_7ekune_k$().equals(Direction_RTL_getInstance()) : false) {
      tmp = cursorHorizontalPosition(nextBox, true);
    } else if (usePrimaryDirection) {
      tmp = cursorHorizontalPosition$default(prevBox, false, 1, null);
    } else {
      tmp = cursorHorizontalPosition(nextBox, true);
    }
    return tmp;
  };
  SkiaParagraph.prototype.getParagraphDirection_x8sft2_k$ = function (offset) {
    return this.paragraphIntrinsics_1.textDirection_1;
  };
  SkiaParagraph.prototype.getBidiRunDirection_dqdnqj_k$ = function (offset) {
    var tmp0_safe_receiver = getBoxForwardByOffset(this, offset);
    var tmp1_subject = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_direction_7ekune_k$();
    var tmp0 = tmp1_subject == null ? -1 : tmp1_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = ResolvedTextDirection_Rtl_getInstance();
        break;
      case 1:
        tmp = ResolvedTextDirection_Ltr_getInstance();
        break;
      case -1:
        tmp = ResolvedTextDirection_Ltr_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  SkiaParagraph.prototype.getOffsetForPosition_f04xcw_k$ = function (position) {
    var glyphPosition = this.para_1.getGlyphPositionAtCoordinate_iqdtii_k$(_Offset___get_x__impl__xvi35n(position), _Offset___get_y__impl__8bzhra(position)).position_1;
    var tmp0_elvis_lhs = getLineMetricsForVerticalPosition(this, _Offset___get_y__impl__8bzhra(position));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return glyphPosition;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var expectedLine = tmp;
    var isNotEmptyLine = expectedLine.startIndex_1 < expectedLine.endIndex_1;
    if (_Offset___get_x__impl__xvi35n(position) > expectedLine.left_1 ? _Offset___get_x__impl__xvi35n(position) < expectedLine.get_right_ixz7xv_k$() : false) {
      return glyphPosition;
    }
    var tmp_0;
    if (isNotEmptyLine) {
      tmp_0 = this.para_1.getRectsForRange_8yx14g_k$(expectedLine.startIndex_1, expectedLine.isHardBreak_1 ? expectedLine.endIndex_1 : expectedLine.endIndex_1 - 1 | 0, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance());
    } else {
      tmp_0 = null;
    }
    var rects = tmp_0;
    var tmp1_safe_receiver = rects;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : firstOrNull(tmp1_safe_receiver);
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.rect_1;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.left_1;
    var leftX = tmp4_elvis_lhs == null ? expectedLine.left_1 : tmp4_elvis_lhs;
    var tmp5_safe_receiver = rects;
    var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : lastOrNull(tmp5_safe_receiver);
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.rect_1;
    var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.right_1;
    var rightX = tmp8_elvis_lhs == null ? expectedLine.get_right_ixz7xv_k$() : tmp8_elvis_lhs;
    if (leftX === rightX) {
      return glyphPosition;
    }
    var correctedGlyphPosition = glyphPosition;
    if (_Offset___get_x__impl__xvi35n(position) <= leftX) {
      correctedGlyphPosition = this.para_1.getGlyphPositionAtCoordinate_iqdtii_k$(leftX + 1.0, _Offset___get_y__impl__8bzhra(position)).position_1;
    } else if (_Offset___get_x__impl__xvi35n(position) >= rightX) {
      correctedGlyphPosition = this.para_1.getGlyphPositionAtCoordinate_iqdtii_k$(rightX - 1.0, _Offset___get_y__impl__8bzhra(position)).position_1;
      var tmp9_safe_receiver = getOrNull_0(_get_text__de5ose_0(this), correctedGlyphPosition);
      var tmp_1;
      var tmp_2 = tmp9_safe_receiver;
      if ((tmp_2 == null ? null : new Char(tmp_2)) == null) {
        tmp_1 = null;
      } else {
        tmp_1 = isNeutralDirectionality(tmp9_safe_receiver);
      }
      var tmp10_elvis_lhs = tmp_1;
      var isNeutralChar = tmp10_elvis_lhs == null ? false : tmp10_elvis_lhs;
      var tmp_3;
      if (!isNeutralChar) {
        var tmp_4 = correctedGlyphPosition;
        var tmp11_safe_receiver = getBoxBackwardByOffset$default(this, tmp_4, 0, 4, null);
        tmp_3 = equals(tmp11_safe_receiver == null ? null : tmp11_safe_receiver.get_direction_7ekune_k$(), Direction_RTL_getInstance());
      } else {
        tmp_3 = false;
      }
      if (tmp_3) {
        correctedGlyphPosition = correctedGlyphPosition - 1 | 0;
      }
    }
    return correctedGlyphPosition;
  };
  SkiaParagraph.prototype.getBoundingBox_urudbk_k$ = function (offset) {
    var tmp0_elvis_lhs = getBoxForwardByOffset(this, offset);
    var box = tmp0_elvis_lhs == null ? ensureNotNull(getBoxBackwardByOffset(this, offset, _get_text__de5ose_0(this).length)) : tmp0_elvis_lhs;
    return toComposeRect(box.rect_1);
  };
  SkiaParagraph.prototype.getWordBoundary_qx0177_k$ = function (offset) {
    var tmp;
    var tmp0_safe_receiver = getOrNull_0(_get_text__de5ose_0(this), offset);
    var tmp_0;
    var tmp_1 = tmp0_safe_receiver;
    if ((tmp_1 == null ? null : new Char(tmp_1)) == null) {
      tmp_0 = null;
    } else {
      tmp_0 = isLetterOrDigit(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    if (tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs) {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = this.para_1.getWordBoundary_3s8nhz_k$(offset);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.getWordBoundary.<anonymous>' call
      tmp$ret$0 = TextRange_0(tmp0_let.start_1, tmp0_let.end_1);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    } else {
      var tmp2_safe_receiver = getOrNull_0(_get_text__de5ose_0(this), offset - 1 | 0);
      var tmp_2;
      var tmp_3 = tmp2_safe_receiver;
      if ((tmp_3 == null ? null : new Char(tmp_3)) == null) {
        tmp_2 = null;
      } else {
        tmp_2 = isLetterOrDigit(tmp2_safe_receiver);
      }
      var tmp3_elvis_lhs = tmp_2;
      if (tmp3_elvis_lhs == null ? false : tmp3_elvis_lhs) {
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        var tmp1_let = this.para_1.getWordBoundary_3s8nhz_k$(offset - 1 | 0);
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$2;
        // Inline function 'androidx.compose.ui.text.SkiaParagraph.getWordBoundary.<anonymous>' call
        tmp$ret$2 = TextRange_0(tmp1_let.start_1, tmp1_let.end_1);
        tmp$ret$3 = tmp$ret$2;
        tmp = tmp$ret$3;
      } else {
        tmp = TextRange_0(offset, offset);
      }
    }
    return tmp;
  };
  SkiaParagraph.prototype.paint_aoyx3m_k$ = function (canvas, color, shadow, textDecoration) {
    this.para_1 = this.layouter_1.layoutParagraph_8yeuwa_k$(this.get_width_j0q4yl_k$(), this.maxLines_1, this.ellipsisChar_1, color, shadow, textDecoration);
    this.para_1.paint_86qq3w_k$(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  SkiaParagraph.prototype.paint_8g9j3d_k$ = function (canvas, color, shadow, textDecoration, drawStyle) {
    this.para_1 = this.layouter_1.layoutParagraph_8yeuwa_k$(this.get_width_j0q4yl_k$(), this.maxLines_1, this.ellipsisChar_1, color, shadow, textDecoration);
    this.para_1.paint_86qq3w_k$(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  SkiaParagraph.prototype.paint_ae2j82_k$ = function (canvas, brush, alpha, shadow, textDecoration, drawStyle) {
    throw UnsupportedOperationException_init_$Create$('Using brush for painting the paragraph is a separate functionality that is not supported on this platform');
  };
  SkiaParagraph.$metadata$ = classMeta('SkiaParagraph', [Paragraph_0]);
  function createFontFamilyResolver(fontResourceLoader) {
    if (!(fontResourceLoader instanceof FontLoader))
      throw IllegalArgumentException_init_$Create$('Unexpected type: ' + fontResourceLoader + ' must be FontLoader');
    return fontResourceLoader.fontFamilyResolver_1;
  }
  function createFontFamilyResolver_0() {
    var tmp = SkiaFontLoader_init_$Create$(null, 1, null);
    return FontFamilyResolverImpl_init_$Create$(tmp, null, null, null, null, 30, null);
  }
  function createFontFamilyResolver_1(fontCache) {
    var tmp = new SkiaFontLoader(fontCache);
    return FontFamilyResolverImpl_init_$Create$(tmp, null, null, null, null, 30, null);
  }
  function PlatformFontFamilyTypefaceAdapter() {
  }
  PlatformFontFamilyTypefaceAdapter.prototype.resolve_wbzvw9_k$ = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.fontFamily_1;
    if (tmp instanceof FontListFontFamily)
      return null;
    var skiaFontLoader = platformFontLoader instanceof SkiaFontLoader ? platformFontLoader : THROW_CCE();
    var tmp0_elvis_lhs = typefaceRequest.fontFamily_1;
    var result = skiaFontLoader.loadPlatformTypes_tevpy8_k$(tmp0_elvis_lhs == null ? Companion_getInstance_14().Default_1 : tmp0_elvis_lhs, typefaceRequest.fontWeight_1, typefaceRequest.fontStyle_1);
    return Immutable_init_$Create$(result, false, 2, null);
  };
  PlatformFontFamilyTypefaceAdapter.$metadata$ = classMeta('PlatformFontFamilyTypefaceAdapter', [FontFamilyTypefaceAdapter]);
  function SkiaFontLoader_init_$Init$(fontCache, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      fontCache = new FontCache();
    SkiaFontLoader.call($this, fontCache);
    return $this;
  }
  function SkiaFontLoader_init_$Create$(fontCache, $mask0, $marker) {
    return SkiaFontLoader_init_$Init$(fontCache, $mask0, $marker, Object.create(SkiaFontLoader.prototype));
  }
  function _get_fontCache__rq14qm($this) {
    return $this.fontCache_1;
  }
  function SkiaFontLoader(fontCache) {
    this.fontCache_1 = fontCache;
    this.cacheKey_1 = this.fontCache_1;
  }
  SkiaFontLoader.prototype.get_fontCollection_kf4vje_k$ = function () {
    return this.fontCache_1.fonts_1;
  };
  SkiaFontLoader.prototype.loadBlocking_w5fd92_k$ = function (font) {
    if (!(font instanceof PlatformFont)) {
      if (!(font.get_loadingStrategy_w877gz_k$() === Companion_getInstance_17().OptionalLocal_1)) {
        throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + font);
      }
      return null;
    }
    var tmp0_subject = font.get_loadingStrategy_w877gz_k$();
    var tmp;
    if (tmp0_subject === Companion_getInstance_17().Blocking_1) {
      tmp = this.fontCache_1.load_oz8zua_k$(font);
    } else if (tmp0_subject === Companion_getInstance_17().OptionalLocal_1) {
      var tmp$ret$4;
      // Inline function 'kotlin.Result.getOrNull' call
      var tmp$ret$3;
      // Inline function 'kotlin.runCatching' call
      var tmp_0;
      try {
        var tmp$ret$1;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance_3();
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.font.SkiaFontLoader.loadBlocking.<anonymous>' call
        tmp$ret$0 = this.fontCache_1.load_oz8zua_k$(font);
        var tmp1_success = tmp$ret$0;
        tmp$ret$1 = _Result___init__impl__xyqfz8(tmp1_success);
        tmp_0 = tmp$ret$1;
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var tmp$ret$2;
          // Inline function 'kotlin.Companion.failure' call
          var tmp2_failure = Companion_getInstance_3();
          tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure($p));
          tmp_1 = tmp$ret$2;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$3 = tmp_0;
      var tmp0_getOrNull = tmp$ret$3;
      var tmp_2;
      if (_Result___get_isFailure__impl__jpiriv(tmp0_getOrNull)) {
        tmp_2 = null;
      } else {
        var tmp_3 = _Result___get_value__impl__bjfvqg(tmp0_getOrNull);
        tmp_2 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      }
      tmp$ret$4 = tmp_2;
      tmp = tmp$ret$4;
    } else if (tmp0_subject === Companion_getInstance_17().Async_1) {
      throw UnsupportedOperationException_init_$Create$('Unsupported Async font load path');
    } else {
      throw IllegalArgumentException_init_$Create$('Unknown loading type ' + new FontLoadingStrategy(font.get_loadingStrategy_w877gz_k$()));
    }
    return tmp;
  };
  SkiaFontLoader.prototype.loadPlatformTypes_tevpy8_k$ = function (fontFamily, fontWeight, fontStyle) {
    return this.fontCache_1.loadPlatformTypes_tevpy8_k$(fontFamily, fontWeight, fontStyle);
  };
  SkiaFontLoader.prototype.loadPlatformTypes$default_2cpwir_k$ = function (fontFamily, fontWeight, fontStyle, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      fontWeight = Companion_getInstance_20().Normal_1;
    if (!(($mask0 & 4) === 0))
      fontStyle = Companion_getInstance_18().Normal_1;
    return this.loadPlatformTypes_tevpy8_k$(fontFamily, fontWeight, fontStyle);
  };
  SkiaFontLoader.prototype.awaitLoad_hbev9p_k$ = function (font, $cont) {
    return this.loadBlocking_w5fd92_k$(font);
  };
  SkiaFontLoader.prototype.awaitLoad_kuymx_k$ = function (font, $cont) {
    return this.awaitLoad_hbev9p_k$(font, $cont);
  };
  SkiaFontLoader.prototype.get_cacheKey_w22q12_k$ = function () {
    return this.cacheKey_1;
  };
  SkiaFontLoader.$metadata$ = classMeta('SkiaFontLoader', [PlatformFontLoader]);
  function _get_builder__bi005y($this) {
    return $this.builder_1;
  }
  function _set_para__9s3tyv_0($this, _set____db54di) {
    $this.para_1 = _set____db54di;
  }
  function _get_para__dbvtkb_0($this) {
    return $this.para_1;
  }
  function _set_width__mibry7($this, _set____db54di) {
    $this.width_1 = _set____db54di;
  }
  function _get_width__9isoj9($this) {
    return $this.width_1;
  }
  function ParagraphLayouter(text, textDirection, style, spanStyles, placeholders, density, fontFamilyResolver) {
    this.text_1 = text;
    var tmp = this;
    tmp.builder_1 = ParagraphBuilder_init_$Create$(fontFamilyResolver, this.text_1, style, null, 0, spanStyles, placeholders, density, textDirection, 24, null);
    this.para_1 = this.builder_1.build_1k0s4u_k$();
    this.width_1 = -1.0;
    this.$stable_1 = 8;
  }
  ParagraphLayouter.prototype.get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  ParagraphLayouter.prototype.get_defaultHeight_9g40wv_k$ = function () {
    return this.builder_1.get_defaultHeight_9g40wv_k$();
  };
  ParagraphLayouter.prototype.get_defaultFont_6nsy4n_k$ = function () {
    return this.builder_1.get_defaultFont_6nsy4n_k$();
  };
  ParagraphLayouter.prototype.get_paragraphStyle_27utpo_k$ = function () {
    return this.builder_1.get_paragraphStyle_27utpo_k$();
  };
  ParagraphLayouter.prototype.layoutParagraph_8yeuwa_k$ = function (width, maxLines, ellipsis, color, shadow, textDecoration) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(color), _Color___get_value__impl__1pls5m(Companion_getInstance().Unspecified_1));
    if (tmp$ret$0) {
      tmp = color;
    } else {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.text.platform.ParagraphLayouter.layoutParagraph.<anonymous>' call
      tmp$ret$1 = this.builder_1.textStyle_1.get_color_v34vrz_k$();
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    var actualColor = tmp$ret$2;
    if ((((!(this.builder_1.maxLines_1 === maxLines) ? true : !(this.builder_1.ellipsis_1 === ellipsis)) ? true : !equals(this.builder_1.textStyle_1.get_color_v34vrz_k$(), actualColor)) ? true : !equals(this.builder_1.textStyle_1.get_shadow_jgtb8p_k$(), shadow)) ? true : !equals(this.builder_1.textStyle_1.get_textDecoration_itgjwm_k$(), textDecoration)) {
      this.width_1 = width;
      this.builder_1.maxLines_1 = maxLines;
      this.builder_1.ellipsis_1 = ellipsis;
      var tmp_0 = this.builder_1;
      var tmp_1 = this.builder_1.textStyle_1;
      tmp_0.textStyle_1 = tmp_1.copy$default_m6tbq3_k$(actualColor, null, null, null, null, null, null, null, null, null, null, null, textDecoration, shadow, null, null, null, null, 249854, null);
      this.para_1 = this.builder_1.build_1k0s4u_k$();
      this.para_1.layout_foik1o_k$(width);
    } else if (!(this.width_1 === width)) {
      this.width_1 = width;
      this.para_1.layout_foik1o_k$(width);
    }
    return this.para_1;
  };
  ParagraphLayouter.prototype.layoutParagraph$default_batlz_k$ = function (width, maxLines, ellipsis, color, shadow, textDecoration, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      width = this.width_1;
    if (!(($mask0 & 2) === 0))
      maxLines = this.builder_1.maxLines_1;
    if (!(($mask0 & 4) === 0))
      ellipsis = this.builder_1.ellipsis_1;
    if (!(($mask0 & 8) === 0))
      color = this.builder_1.textStyle_1.get_color_v34vrz_k$();
    if (!(($mask0 & 16) === 0))
      shadow = this.builder_1.textStyle_1.get_shadow_jgtb8p_k$();
    if (!(($mask0 & 32) === 0))
      textDecoration = this.builder_1.textStyle_1.get_textDecoration_itgjwm_k$();
    return this.layoutParagraph_8yeuwa_k$(width, maxLines, ellipsis, color, shadow, textDecoration);
  };
  ParagraphLayouter.$metadata$ = classMeta('ParagraphLayouter');
  function FontLoadResult(typeface, aliases) {
    this.typeface_1 = typeface;
    this.aliases_1 = aliases;
    this.$stable_1 = 8;
  }
  FontLoadResult.prototype.get_typeface_s1tqao_k$ = function () {
    return this.typeface_1;
  };
  FontLoadResult.prototype.get_aliases_duxpez_k$ = function () {
    return this.aliases_1;
  };
  FontLoadResult.$metadata$ = classMeta('FontLoadResult');
  function _get_fontProvider__mhw44r($this) {
    return $this.fontProvider_1;
  }
  function mapGenericFontFamily($this, generic) {
    var tmp0_elvis_lhs = get_GenericFontFamiliesMapping().get_1mhr4y_k$(generic.name_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'Unknown generic font family ' + generic.name_1;
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_registered__4jyert($this) {
    return $this.registered_1;
  }
  function ensureRegistered($this, typeface, key) {
    if (!$this.registered_1.contains_2ehdt1_k$(key)) {
      $this.fontProvider_1.registerTypeface_apdxu9_k$(typeface, key);
      $this.registered_1.add_1j60pz_k$(key);
    }
  }
  function ensureRegistered_0($this, fontFamily) {
    var tmp0_subject = fontFamily;
    var tmp;
    if (tmp0_subject instanceof FontListFontFamily) {
      throw IllegalArgumentException_init_$Create$("Don't load FontListFontFamily through ensureRegistered: " + fontFamily);
    } else {
      if (tmp0_subject instanceof LoadedFontFamily) {
        var tmp_0 = fontFamily.typeface_1;
        var typeface = tmp_0 instanceof SkiaBackedTypeface ? tmp_0 : THROW_CCE();
        var tmp1_elvis_lhs = typeface.alias_1;
        var alias = tmp1_elvis_lhs == null ? typeface.nativeTypeface_1.get_familyName_6ytaaw_k$() : tmp1_elvis_lhs;
        if (!$this.registered_1.contains_2ehdt1_k$(alias)) {
          $this.fontProvider_1.registerTypeface_apdxu9_k$(typeface.nativeTypeface_1, alias);
          $this.registered_1.add_1j60pz_k$(alias);
        }
        tmp = listOf_0(alias);
      } else {
        if (tmp0_subject instanceof GenericFontFamily) {
          tmp = mapGenericFontFamily($this, fontFamily);
        } else {
          if (equals(tmp0_subject, Companion_getInstance_14().Default_1)) {
            tmp = mapGenericFontFamily($this, Companion_getInstance_14().SansSerif_1);
          } else {
            throw IllegalArgumentException_init_$Create$('Unknown font family type: ' + fontFamily);
          }
        }
      }
    }
    return tmp;
  }
  function FontCache() {
    this.fonts_1 = FontCollection_init_$Create$();
    this.fontProvider_1 = new TypefaceFontProvider();
    this.fonts_1.setDefaultFontManager_qraotu_k$(Companion_getInstance_6().default_1);
    this.fonts_1.setAssetFontManager_nxzdib_k$(this.fontProvider_1);
    this.registered_1 = HashSet_init_$Create$_0();
  }
  FontCache.prototype.get_fonts_irho7v_k$ = function () {
    return this.fonts_1;
  };
  FontCache.prototype.load_oz8zua_k$ = function (font) {
    var typeface = loadFromTypefacesCache(font);
    ensureRegistered(this, typeface, font.get_cacheKey_w22q12_k$());
    return new FontLoadResult(typeface, listOf_0(font.get_cacheKey_w22q12_k$()));
  };
  FontCache.prototype.loadPlatformTypes_tevpy8_k$ = function (fontFamily, fontWeight, fontStyle) {
    var aliases = ensureRegistered_0(this, fontFamily);
    var style = toSkFontStyle(fontStyle).withWeight_dafbdv_k$(fontWeight.weight_1);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$0 = copyToArray(aliases);
    return new FontLoadResult(first_1(this.fonts_1.findTypefaces_6egsg0_k$(tmp$ret$0, style)), aliases);
  };
  FontCache.prototype.loadPlatformTypes$default_2cpwir_k$ = function (fontFamily, fontWeight, fontStyle, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      fontWeight = Companion_getInstance_20().Normal_1;
    if (!(($mask0 & 4) === 0))
      fontStyle = Companion_getInstance_18().Normal_1;
    return this.loadPlatformTypes_tevpy8_k$(fontFamily, fontWeight, fontStyle);
  };
  FontCache.$metadata$ = classMeta('FontCache');
  function SkiaBackedTypeface(alias, nativeTypeface) {
    this.alias_1 = alias;
    this.nativeTypeface_1 = nativeTypeface;
    this.fontFamily_1 = null;
  }
  SkiaBackedTypeface.prototype.get_alias_iooo4n_k$ = function () {
    return this.alias_1;
  };
  SkiaBackedTypeface.prototype.get_nativeTypeface_sttuqf_k$ = function () {
    return this.nativeTypeface_1;
  };
  SkiaBackedTypeface.prototype.get_fontFamily_ulphcs_k$ = function () {
    return this.fontFamily_1;
  };
  SkiaBackedTypeface.$metadata$ = classMeta('SkiaBackedTypeface', [Typeface]);
  function LoadedFont(identity, data, weight, style) {
    PlatformFont.call(this);
    this.identity_1 = identity;
    this.data_1 = data;
    this.weight_1 = weight;
    this.style_1 = style;
    this.loadingStrategy_1 = Companion_getInstance_17().Blocking_1;
    this.$stable_2 = 0;
  }
  LoadedFont.prototype.get_identity_y1rl2x_k$ = function () {
    return this.identity_1;
  };
  LoadedFont.prototype.get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  LoadedFont.prototype.get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  LoadedFont.prototype.get_style_e2e1yp_k$ = function () {
    return this.style_1;
  };
  LoadedFont.prototype.get_loadingStrategy_w877gz_k$ = function () {
    return this.loadingStrategy_1;
  };
  LoadedFont.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LoadedFont))
      return false;
    if (!(this.identity_1 === other.identity_1))
      return false;
    if (!this.weight_1.equals(other.weight_1))
      return false;
    if (!(this.style_1 === other.style_1))
      return false;
    return true;
  };
  LoadedFont.prototype.hashCode = function () {
    var result = getStringHashCode(this.identity_1);
    result = imul(31, result) + this.weight_1.hashCode() | 0;
    result = imul(31, result) + FontStyle__hashCode_impl_7qhg4w(this.style_1) | 0;
    return result;
  };
  LoadedFont.prototype.toString = function () {
    return "LoadedFont(identity='" + this.identity_1 + "', weight=" + this.weight_1 + ', style=' + new FontStyle(this.style_1) + ')';
  };
  LoadedFont.$metadata$ = classMeta('LoadedFont', undefined, undefined, undefined, undefined, PlatformFont.prototype);
  function FontLoader() {
    this.fontCache_1 = new FontCache();
    this.fontFamilyResolver_1 = createFontFamilyResolver_1(this.fontCache_1);
    this.$stable_1 = 8;
  }
  FontLoader.prototype.get_fontCache_he0l6e_k$ = function () {
    return this.fontCache_1;
  };
  FontLoader.prototype.get_fontFamilyResolver_9o0fjy_k$ = function () {
    return this.fontFamilyResolver_1;
  };
  FontLoader.prototype.load_oj7ae9_k$ = function (font) {
    if (!(font instanceof PlatformFont)) {
      throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + font);
    }
    return ensureNotNull(this.fontCache_1.load_oz8zua_k$(font).typeface_1);
  };
  FontLoader.$metadata$ = classMeta('FontLoader', [ResourceLoader]);
  function drawMultiParagraph(_this__u8e3s4, canvas, brush, alpha, shadow, decoration) {
    canvas.save_erlm4_k$();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var tmp0_fastForEach = _this__u8e3s4.paragraphInfoList_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.text.platform.drawMultiParagraph.<anonymous>' call
        item.paragraph_1.paint$default_6evzch_k$(canvas, brush, alpha, shadow, decoration, null, 32, null);
        canvas.translate_62wf99_k$(0.0, item.paragraph_1.get_height_e7t92o_k$());
      }
       while (inductionVariable <= last);
    canvas.restore_a2id37_k$();
  }
  function drawMultiParagraph$default(_this__u8e3s4, canvas, brush, alpha, shadow, decoration, $mask0, $handler) {
    if (!(($mask0 & 4) === 0)) {
      FloatCompanionObject_getInstance();
      alpha = NaN;
    }
    if (!(($mask0 & 8) === 0))
      shadow = null;
    if (!(($mask0 & 16) === 0))
      decoration = null;
    return drawMultiParagraph(_this__u8e3s4, canvas, brush, alpha, shadow, decoration);
  }
  function get_DefaultFontSize_0() {
    init_properties_SkiaParagraph_skiko_kt_5inyi7();
    return DefaultFontSize_0;
  }
  var DefaultFontSize_0;
  function get_skTextStylesCache() {
    init_properties_SkiaParagraph_skiko_kt_5inyi7();
    return skTextStylesCache;
  }
  var skTextStylesCache;
  function toSkFontStyle(_this__u8e3s4) {
    init_properties_SkiaParagraph_skiko_kt_5inyi7();
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_18().Italic_1 ? Companion_getInstance_7().ITALIC_1 : Companion_getInstance_7().NORMAL_1;
  }
  function ComputedStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $mask0, $marker, $this) {
    if (!(($mask0 & 2048) === 0))
      background = Companion_getInstance().Unspecified_1;
    ComputedStyle.call($this, color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow);
    return $this;
  }
  function ComputedStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $mask0, $marker) {
    return ComputedStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $mask0, $marker, Object.create(ComputedStyle.prototype));
  }
  function ComputedStyle_init_$Init$_0(density, spanStyle, $this) {
    var tmp = spanStyle.get_color_v34vrz_k$();
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.<init>.<anonymous>' call
    tmp$ret$0 = density.toPx_x7oik4_k$(spanStyle.fontSize_1);
    tmp$ret$1 = tmp$ret$0;
    var tmp_0 = tmp$ret$1;
    var tmp_1;
    if (get_isUnspecified(spanStyle.letterSpacing_1)) {
      tmp_1 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.<init>.<anonymous>' call
      tmp$ret$2 = density.toPx_x7oik4_k$(spanStyle.letterSpacing_1);
      tmp$ret$3 = tmp$ret$2;
      tmp_1 = tmp$ret$3;
    }
    ComputedStyle.call($this, tmp, tmp_0, spanStyle.fontWeight_1, spanStyle.fontStyle_1, spanStyle.fontSynthesis_1, spanStyle.fontFamily_1, spanStyle.fontFeatureSettings_1, tmp_1, spanStyle.baselineShift_1, spanStyle.textGeometricTransform_1, spanStyle.localeList_1, spanStyle.background_1, spanStyle.textDecoration_1, spanStyle.shadow_1);
    return $this;
  }
  function ComputedStyle_init_$Create$_0(density, spanStyle) {
    return ComputedStyle_init_$Init$_0(density, spanStyle, Object.create(ComputedStyle.prototype));
  }
  function ComputedStyle(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow) {
    this.color_1 = color;
    this.fontSize_1 = fontSize;
    this.fontWeight_1 = fontWeight;
    this.fontStyle_1 = fontStyle;
    this.fontSynthesis_1 = fontSynthesis;
    this.fontFamily_1 = fontFamily;
    this.fontFeatureSettings_1 = fontFeatureSettings;
    this.letterSpacing_1 = letterSpacing;
    this.baselineShift_1 = baselineShift;
    this.textGeometricTransform_1 = textGeometricTransform;
    this.localeList_1 = localeList;
    this.background_1 = background;
    this.textDecoration_1 = textDecoration;
    this.shadow_1 = shadow;
  }
  ComputedStyle.prototype.set_color_b5evhd_k$ = function (_set____db54di) {
    this.color_1 = _set____db54di;
  };
  ComputedStyle.prototype.get_color_v34vrz_k$ = function () {
    return this.color_1;
  };
  ComputedStyle.prototype.set_fontSize_ucdk6o_k$ = function (_set____db54di) {
    this.fontSize_1 = _set____db54di;
  };
  ComputedStyle.prototype.get_fontSize_pr9n47_k$ = function () {
    return this.fontSize_1;
  };
  ComputedStyle.prototype.set_fontWeight_lntfjf_k$ = function (_set____db54di) {
    this.fontWeight_1 = _set____db54di;
  };
  ComputedStyle.prototype.get_fontWeight_wbif2o_k$ = function () {
    return this.fontWeight_1;
  };
  ComputedStyle.prototype.set_fontStyle_3v7dr7_k$ = function (_set____db54di) {
    this.fontStyle_1 = _set____db54di;
  };
  ComputedStyle.prototype.get_fontStyle_fze7ml_k$ = function () {
    return this.fontStyle_1;
  };
  ComputedStyle.prototype.set_fontSynthesis_g5z66v_k$ = function (_set____db54di) {
    this.fontSynthesis_1 = _set____db54di;
  };
  ComputedStyle.prototype.get_fontSynthesis_t08ei1_k$ = function () {
    return this.fontSynthesis_1;
  };
  ComputedStyle.prototype.set_fontFamily_jtv90r_k$ = function (_set____db54di) {
    this.fontFamily_1 = _set____db54di;
  };
  ComputedStyle.prototype.get_fontFamily_ulphcs_k$ = function () {
    return this.fontFamily_1;
  };
  ComputedStyle.prototype.set_fontFeatureSettings_l7hb6q_k$ = function (_set____db54di) {
    this.fontFeatureSettings_1 = _set____db54di;
  };
  ComputedStyle.prototype.get_fontFeatureSettings_a47533_k$ = function () {
    return this.fontFeatureSettings_1;
  };
  ComputedStyle.prototype.set_letterSpacing_liw6qo_k$ = function (_set____db54di) {
    this.letterSpacing_1 = _set____db54di;
  };
  ComputedStyle.prototype.get_letterSpacing_xp4v84_k$ = function () {
    return this.letterSpacing_1;
  };
  ComputedStyle.prototype.set_baselineShift_espa4p_k$ = function (_set____db54di) {
    this.baselineShift_1 = _set____db54di;
  };
  ComputedStyle.prototype.get_baselineShift_yg9i0p_k$ = function () {
    return this.baselineShift_1;
  };
  ComputedStyle.prototype.set_textGeometricTransform_mbxvkr_k$ = function (_set____db54di) {
    this.textGeometricTransform_1 = _set____db54di;
  };
  ComputedStyle.prototype.get_textGeometricTransform_tdfmin_k$ = function () {
    return this.textGeometricTransform_1;
  };
  ComputedStyle.prototype.set_localeList_cmua65_k$ = function (_set____db54di) {
    this.localeList_1 = _set____db54di;
  };
  ComputedStyle.prototype.get_localeList_1gj9gh_k$ = function () {
    return this.localeList_1;
  };
  ComputedStyle.prototype.set_background_kwyuos_k$ = function (_set____db54di) {
    this.background_1 = _set____db54di;
  };
  ComputedStyle.prototype.get_background_ubksc_k$ = function () {
    return this.background_1;
  };
  ComputedStyle.prototype.set_textDecoration_q8ys1_k$ = function (_set____db54di) {
    this.textDecoration_1 = _set____db54di;
  };
  ComputedStyle.prototype.get_textDecoration_itgjwm_k$ = function () {
    return this.textDecoration_1;
  };
  ComputedStyle.prototype.set_shadow_z65f6i_k$ = function (_set____db54di) {
    this.shadow_1 = _set____db54di;
  };
  ComputedStyle.prototype.get_shadow_jgtb8p_k$ = function () {
    return this.shadow_1;
  };
  ComputedStyle.prototype.toSkTextStyle_9a1jf_k$ = function (fontFamilyResolver) {
    var res = TextStyle_init_$Create$();
    if (!equals(this.color_1, Companion_getInstance().Unspecified_1)) {
      res.set_color_n2ch1y_k$(toArgb(this.color_1));
    }
    var tmp0_safe_receiver = this.fontStyle_1;
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.set_fontStyle_v4cfyn_k$(toSkFontStyle(tmp0_safe_receiver));
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = this.textDecoration_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.set_decorationStyle_ju3chb_k$(toSkDecorationStyle(tmp1_safe_receiver, this.color_1));
      tmp$ret$1 = Unit_getInstance();
    }
    if (!equals(this.background_1, Companion_getInstance().Unspecified_1)) {
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      var tmp0_also = Paint_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      tmp0_also.set_color_n2ch1y_k$(toArgb(this.background_1));
      tmp$ret$2 = tmp0_also;
      res.set_background_4t8lag_k$(tmp$ret$2);
    }
    var tmp2_safe_receiver = this.fontWeight_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.set_fontStyle_v4cfyn_k$(res.get_fontStyle_h4vaiv_k$().withWeight_dafbdv_k$(tmp2_safe_receiver.weight_1));
      tmp$ret$3 = Unit_getInstance();
    }
    var tmp3_safe_receiver = this.shadow_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      tmp$ret$4 = res.addShadow_rsdpq6_k$(toSkShadow(tmp3_safe_receiver));
      tmp$ret$5 = tmp$ret$4;
    }
    var tmp4_safe_receiver = this.letterSpacing_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      var tmp$ret$6;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.set_letterSpacing_xkr43h_k$(tmp4_safe_receiver);
      tmp$ret$6 = Unit_getInstance();
    }
    var tmp_0 = Companion_getInstance_8();
    var tmp$ret$7;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp1_orEmpty = this.fontFeatureSettings_1;
    var tmp0_elvis_lhs = tmp1_orEmpty;
    tmp$ret$7 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    res.addFontFeatures_3au7u3_k$(tmp_0.parseW3_w7ggfi_k$(tmp$ret$7));
    res.set_fontSize_ucdk6o_k$(this.fontSize_1);
    var tmp5_safe_receiver = this.fontFamily_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      var tmp$ret$9;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp0_elvis_lhs_0 = this.fontWeight_1;
      var tmp_1 = tmp0_elvis_lhs_0 == null ? Companion_getInstance_20().Normal_1 : tmp0_elvis_lhs_0;
      var tmp1_elvis_lhs = this.fontStyle_1;
      var tmp_2;
      var tmp_3 = tmp1_elvis_lhs;
      if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
        tmp_2 = Companion_getInstance_18().Normal_1;
      } else {
        tmp_2 = tmp1_elvis_lhs;
      }
      var tmp_4 = tmp_2;
      var tmp2_elvis_lhs = this.fontSynthesis_1;
      var tmp_5;
      var tmp_6 = tmp2_elvis_lhs;
      if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
        tmp_5 = Companion_getInstance_19().None_1;
      } else {
        tmp_5 = tmp2_elvis_lhs;
      }
      var tmp_7 = fontFamilyResolver.resolve_3z78ru_k$(tmp5_safe_receiver, tmp_1, tmp_4, tmp_5).get_value_j01efc_k$();
      var resolved = tmp_7 instanceof FontLoadResult ? tmp_7 : THROW_CCE();
      var tmp$ret$8;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp0_toTypedArray = resolved.aliases_1;
      tmp$ret$8 = copyToArray(tmp0_toTypedArray);
      res.set_fontFamilies_tfym8e_k$(tmp$ret$8);
      tmp$ret$9 = Unit_getInstance();
    }
    var tmp6_safe_receiver = this.baselineShift_1;
    var tmp_8 = tmp6_safe_receiver;
    if ((tmp_8 == null ? null : new BaselineShift(tmp_8)) == null)
      null;
    else {
      var tmp$ret$10;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var fontMetrics = res.get_fontMetrics_c0s645_k$();
      res.set_baselineShift_ci5bwd_k$(_BaselineShift___get_multiplier__impl__qhmjek(tmp6_safe_receiver) * fontMetrics.ascent_1);
      tmp$ret$10 = Unit_getInstance();
    }
    return res;
  };
  ComputedStyle.prototype.merge_y90v2p_k$ = function (density, other) {
    var fontSize = fontSizeInHierarchy(density, this.fontSize_1, other.fontSize_1);
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var tmp0__get_isSpecified__cddt7f = other.get_color_v34vrz_k$();
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(tmp0__get_isSpecified__cddt7f), _Color___get_value__impl__1pls5m(Companion_getInstance().Unspecified_1));
    if (tmp$ret$0) {
      this.color_1 = other.get_color_v34vrz_k$();
    }
    var tmp0_safe_receiver = other.fontFamily_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.fontFamily_1 = tmp0_safe_receiver;
      tmp$ret$1 = Unit_getInstance();
    }
    this.fontSize_1 = fontSize;
    var tmp1_safe_receiver = other.fontWeight_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.fontWeight_1 = tmp1_safe_receiver;
      tmp$ret$2 = Unit_getInstance();
    }
    var tmp2_safe_receiver = other.fontStyle_1;
    var tmp = tmp2_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.fontStyle_1 = tmp2_safe_receiver;
      tmp$ret$3 = Unit_getInstance();
    }
    var tmp3_safe_receiver = other.fontSynthesis_1;
    var tmp_0 = tmp3_safe_receiver;
    if ((tmp_0 == null ? null : new FontSynthesis(tmp_0)) == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.fontSynthesis_1 = tmp3_safe_receiver;
      tmp$ret$4 = Unit_getInstance();
    }
    var tmp4_safe_receiver = other.fontFeatureSettings_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.fontFeatureSettings_1 = tmp4_safe_receiver;
      tmp$ret$5 = Unit_getInstance();
    }
    if (!get_isUnspecified(other.letterSpacing_1)) {
      if (_TextUnit___get_isEm__impl__esrmtl(other.letterSpacing_1))
        this.letterSpacing_1 = fontSize * _TextUnit___get_value__impl__hpbx0k(other.letterSpacing_1);
      else if (_TextUnit___get_isSp__impl__8c3r6q(other.letterSpacing_1)) {
        var tmp_1 = this;
        var tmp$ret$7;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>' call
        tmp$ret$6 = density.toPx_x7oik4_k$(other.letterSpacing_1);
        tmp$ret$7 = tmp$ret$6;
        tmp_1.letterSpacing_1 = tmp$ret$7;
      } else
        throw UnsupportedOperationException_init_$Create$_0();
    }
    var tmp5_safe_receiver = other.baselineShift_1;
    var tmp_2 = tmp5_safe_receiver;
    if ((tmp_2 == null ? null : new BaselineShift(tmp_2)) == null)
      null;
    else {
      var tmp$ret$8;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.baselineShift_1 = tmp5_safe_receiver;
      tmp$ret$8 = Unit_getInstance();
    }
    var tmp6_safe_receiver = other.textGeometricTransform_1;
    if (tmp6_safe_receiver == null)
      null;
    else {
      var tmp$ret$9;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.textGeometricTransform_1 = tmp6_safe_receiver;
      tmp$ret$9 = Unit_getInstance();
    }
    var tmp7_safe_receiver = other.localeList_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      var tmp$ret$10;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.localeList_1 = tmp7_safe_receiver;
      tmp$ret$10 = Unit_getInstance();
    }
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var tmp1__get_isSpecified__qc5rve = other.background_1;
    tmp$ret$11 = !equals(_Color___get_value__impl__1pls5m(tmp1__get_isSpecified__qc5rve), _Color___get_value__impl__1pls5m(Companion_getInstance().Unspecified_1));
    if (tmp$ret$11) {
      this.background_1 = other.background_1;
    }
    var tmp8_safe_receiver = other.textDecoration_1;
    if (tmp8_safe_receiver == null)
      null;
    else {
      var tmp$ret$12;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.textDecoration_1 = tmp8_safe_receiver;
      tmp$ret$12 = Unit_getInstance();
    }
    var tmp9_safe_receiver = other.shadow_1;
    if (tmp9_safe_receiver == null)
      null;
    else {
      var tmp$ret$13;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.shadow_1 = tmp9_safe_receiver;
      tmp$ret$13 = Unit_getInstance();
    }
  };
  ComputedStyle.prototype.component1_j10ipl_k$ = function () {
    return this.color_1;
  };
  ComputedStyle.prototype.component2_7eebsb_k$ = function () {
    return this.fontSize_1;
  };
  ComputedStyle.prototype.component3_7eebsa_k$ = function () {
    return this.fontWeight_1;
  };
  ComputedStyle.prototype.component4_aj2by9_k$ = function () {
    return this.fontStyle_1;
  };
  ComputedStyle.prototype.component5_8az6xx_k$ = function () {
    return this.fontSynthesis_1;
  };
  ComputedStyle.prototype.component6_7eebs7_k$ = function () {
    return this.fontFamily_1;
  };
  ComputedStyle.prototype.component7_7eebs6_k$ = function () {
    return this.fontFeatureSettings_1;
  };
  ComputedStyle.prototype.component8_7eebs5_k$ = function () {
    return this.letterSpacing_1;
  };
  ComputedStyle.prototype.component9_mqmaf5_k$ = function () {
    return this.baselineShift_1;
  };
  ComputedStyle.prototype.component10_gazzfo_k$ = function () {
    return this.textGeometricTransform_1;
  };
  ComputedStyle.prototype.component11_gazzfn_k$ = function () {
    return this.localeList_1;
  };
  ComputedStyle.prototype.component12_mt65tv_k$ = function () {
    return this.background_1;
  };
  ComputedStyle.prototype.component13_gazzfl_k$ = function () {
    return this.textDecoration_1;
  };
  ComputedStyle.prototype.component14_gazzfk_k$ = function () {
    return this.shadow_1;
  };
  ComputedStyle.prototype.copy_vmthop_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow) {
    return new ComputedStyle(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow);
  };
  ComputedStyle.prototype.copy$default_x88l4i_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      color = this.color_1;
    if (!(($mask0 & 2) === 0))
      fontSize = this.fontSize_1;
    if (!(($mask0 & 4) === 0))
      fontWeight = this.fontWeight_1;
    if (!(($mask0 & 8) === 0))
      fontStyle = this.fontStyle_1;
    if (!(($mask0 & 16) === 0))
      fontSynthesis = this.fontSynthesis_1;
    if (!(($mask0 & 32) === 0))
      fontFamily = this.fontFamily_1;
    if (!(($mask0 & 64) === 0))
      fontFeatureSettings = this.fontFeatureSettings_1;
    if (!(($mask0 & 128) === 0))
      letterSpacing = this.letterSpacing_1;
    if (!(($mask0 & 256) === 0))
      baselineShift = this.baselineShift_1;
    if (!(($mask0 & 512) === 0))
      textGeometricTransform = this.textGeometricTransform_1;
    if (!(($mask0 & 1024) === 0))
      localeList = this.localeList_1;
    if (!(($mask0 & 2048) === 0))
      background = this.background_1;
    if (!(($mask0 & 4096) === 0))
      textDecoration = this.textDecoration_1;
    if (!(($mask0 & 8192) === 0))
      shadow = this.shadow_1;
    return this.copy_vmthop_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow);
  };
  ComputedStyle.prototype.toString = function () {
    var tmp = new Color(this.color_1);
    var tmp_0 = this.fontSize_1;
    var tmp_1 = this.fontWeight_1;
    var tmp_2 = this.fontStyle_1;
    var tmp_3 = tmp_2 == null ? null : new FontStyle(tmp_2);
    var tmp_4 = this.fontSynthesis_1;
    var tmp_5 = tmp_4 == null ? null : new FontSynthesis(tmp_4);
    var tmp_6 = this.fontFamily_1;
    var tmp_7 = this.fontFeatureSettings_1;
    var tmp_8 = this.letterSpacing_1;
    var tmp_9 = this.baselineShift_1;
    return 'ComputedStyle(color=' + tmp + ', fontSize=' + tmp_0 + ', fontWeight=' + tmp_1 + ', fontStyle=' + tmp_3 + ', fontSynthesis=' + tmp_5 + ', fontFamily=' + tmp_6 + ', fontFeatureSettings=' + tmp_7 + ', letterSpacing=' + tmp_8 + ', baselineShift=' + (tmp_9 == null ? null : new BaselineShift(tmp_9)) + ', textGeometricTransform=' + this.textGeometricTransform_1 + ', localeList=' + this.localeList_1 + ', background=' + new Color(this.background_1) + ', textDecoration=' + this.textDecoration_1 + ', shadow=' + this.shadow_1 + ')';
  };
  ComputedStyle.prototype.hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.color_1);
    result = imul(result, 31) + getNumberHashCode(this.fontSize_1) | 0;
    result = imul(result, 31) + (this.fontWeight_1 == null ? 0 : this.fontWeight_1.hashCode()) | 0;
    var tmp = imul(result, 31);
    var tmp_0;
    var tmp_1 = this.fontStyle_1;
    if ((tmp_1 == null ? null : new FontStyle(tmp_1)) == null) {
      tmp_0 = 0;
    } else {
      tmp_0 = FontStyle__hashCode_impl_7qhg4w(this.fontStyle_1);
    }
    result = tmp + tmp_0 | 0;
    var tmp_2 = imul(result, 31);
    var tmp_3;
    var tmp_4 = this.fontSynthesis_1;
    if ((tmp_4 == null ? null : new FontSynthesis(tmp_4)) == null) {
      tmp_3 = 0;
    } else {
      tmp_3 = FontSynthesis__hashCode_impl_4wi11v(this.fontSynthesis_1);
    }
    result = tmp_2 + tmp_3 | 0;
    result = imul(result, 31) + (this.fontFamily_1 == null ? 0 : hashCode(this.fontFamily_1)) | 0;
    result = imul(result, 31) + (this.fontFeatureSettings_1 == null ? 0 : getStringHashCode(this.fontFeatureSettings_1)) | 0;
    result = imul(result, 31) + (this.letterSpacing_1 == null ? 0 : getNumberHashCode(this.letterSpacing_1)) | 0;
    var tmp_5 = imul(result, 31);
    var tmp_6;
    var tmp_7 = this.baselineShift_1;
    if ((tmp_7 == null ? null : new BaselineShift(tmp_7)) == null) {
      tmp_6 = 0;
    } else {
      tmp_6 = BaselineShift__hashCode_impl_g0potx(this.baselineShift_1);
    }
    result = tmp_5 + tmp_6 | 0;
    result = imul(result, 31) + (this.textGeometricTransform_1 == null ? 0 : this.textGeometricTransform_1.hashCode()) | 0;
    result = imul(result, 31) + (this.localeList_1 == null ? 0 : this.localeList_1.hashCode()) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.background_1) | 0;
    result = imul(result, 31) + (this.textDecoration_1 == null ? 0 : this.textDecoration_1.hashCode()) | 0;
    result = imul(result, 31) + (this.shadow_1 == null ? 0 : this.shadow_1.hashCode()) | 0;
    return result;
  };
  ComputedStyle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComputedStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ComputedStyle ? other : THROW_CCE();
    if (!equals(this.color_1, tmp0_other_with_cast.color_1))
      return false;
    if (!equals(this.fontSize_1, tmp0_other_with_cast.fontSize_1))
      return false;
    if (!equals(this.fontWeight_1, tmp0_other_with_cast.fontWeight_1))
      return false;
    var tmp = this.fontStyle_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = tmp0_other_with_cast.fontStyle_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.fontSynthesis_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = tmp0_other_with_cast.fontSynthesis_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.fontFamily_1, tmp0_other_with_cast.fontFamily_1))
      return false;
    if (!(this.fontFeatureSettings_1 == tmp0_other_with_cast.fontFeatureSettings_1))
      return false;
    if (!equals(this.letterSpacing_1, tmp0_other_with_cast.letterSpacing_1))
      return false;
    var tmp_5 = this.baselineShift_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = tmp0_other_with_cast.baselineShift_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.textGeometricTransform_1, tmp0_other_with_cast.textGeometricTransform_1))
      return false;
    if (!equals(this.localeList_1, tmp0_other_with_cast.localeList_1))
      return false;
    if (!equals(this.background_1, tmp0_other_with_cast.background_1))
      return false;
    if (!equals(this.textDecoration_1, tmp0_other_with_cast.textDecoration_1))
      return false;
    if (!equals(this.shadow_1, tmp0_other_with_cast.shadow_1))
      return false;
    return true;
  };
  ComputedStyle.$metadata$ = classMeta('ComputedStyle');
  function toSkDecorationStyle(_this__u8e3s4, color) {
    init_properties_SkiaParagraph_skiko_kt_5inyi7();
    var underline = _this__u8e3s4.contains_8528ny_k$(Companion_getInstance_37().Underline_1);
    var overline = false;
    var lineThrough = _this__u8e3s4.contains_8528ny_k$(Companion_getInstance_37().LineThrough_1);
    var gaps = false;
    var lineStyle = DecorationLineStyle_SOLID_getInstance();
    var thicknessMultiplier = 1.0;
    return new DecorationStyle(underline, overline, lineThrough, gaps, toArgb(color), lineStyle, thicknessMultiplier);
  }
  function toSkShadow(_this__u8e3s4) {
    init_properties_SkiaParagraph_skiko_kt_5inyi7();
    return new Shadow_0(toArgb(_this__u8e3s4.color_1), _Offset___get_x__impl__xvi35n(_this__u8e3s4.offset_1), _Offset___get_y__impl__8bzhra(_this__u8e3s4.offset_1), _this__u8e3s4.blurRadius_1);
  }
  function fontSizeInHierarchy(density, base, other) {
    init_properties_SkiaParagraph_skiko_kt_5inyi7();
    var tmp;
    if (get_isUnspecified(other)) {
      tmp = base;
    } else if (_TextUnit___get_isEm__impl__esrmtl(other)) {
      tmp = base * _TextUnit___get_value__impl__hpbx0k(other);
    } else if (_TextUnit___get_isSp__impl__8c3r6q(other)) {
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.platform.fontSizeInHierarchy.<anonymous>' call
      tmp$ret$0 = density.toPx_x7oik4_k$(other);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    } else {
      throw IllegalStateException_init_$Create$('Unexpected size in fontSizeInHierarchy');
    }
    return tmp;
  }
  function ActualParagraph(paragraphIntrinsics, maxLines, ellipsis, constraints) {
    init_properties_SkiaParagraph_skiko_kt_5inyi7();
    return new SkiaParagraph(paragraphIntrinsics instanceof SkiaParagraphIntrinsics ? paragraphIntrinsics : THROW_CCE(), maxLines, ellipsis, constraints);
  }
  function cursorHorizontalPosition(_this__u8e3s4, opposite) {
    init_properties_SkiaParagraph_skiko_kt_5inyi7();
    var tmp0_subject = _this__u8e3s4.get_direction_7ekune_k$();
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 1:
        tmp = opposite ? _this__u8e3s4.rect_1.left_1 : _this__u8e3s4.rect_1.right_1;
        break;
      case 0:
        tmp = opposite ? _this__u8e3s4.rect_1.right_1 : _this__u8e3s4.rect_1.left_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function cursorHorizontalPosition$default(_this__u8e3s4, opposite, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      opposite = false;
    return cursorHorizontalPosition(_this__u8e3s4, opposite);
  }
  function StyleAdd(position, style) {
    Op.call(this);
    this.position_1 = position;
    this.style_1 = style;
    this.$stable_1 = 8;
  }
  StyleAdd.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  StyleAdd.prototype.get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  StyleAdd.prototype.component1_7eebsc_k$ = function () {
    return this.position_1;
  };
  StyleAdd.prototype.component2_7eebsb_k$ = function () {
    return this.style_1;
  };
  StyleAdd.prototype.copy_xm3ya_k$ = function (position, style) {
    return new StyleAdd(position, style);
  };
  StyleAdd.prototype.copy$default_bxq144_k$ = function (position, style, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      position = this.position_1;
    if (!(($mask0 & 2) === 0))
      style = this.style_1;
    return this.copy_xm3ya_k$(position, style);
  };
  StyleAdd.prototype.toString = function () {
    return 'StyleAdd(position=' + this.position_1 + ', style=' + this.style_1 + ')';
  };
  StyleAdd.prototype.hashCode = function () {
    var result = this.position_1;
    result = imul(result, 31) + this.style_1.hashCode() | 0;
    return result;
  };
  StyleAdd.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd ? other : THROW_CCE();
    if (!(this.position_1 === tmp0_other_with_cast.position_1))
      return false;
    if (!this.style_1.equals(tmp0_other_with_cast.style_1))
      return false;
    return true;
  };
  StyleAdd.$metadata$ = classMeta('StyleAdd', undefined, undefined, undefined, undefined, Op.prototype);
  function PutPlaceholder(cut, width, height) {
    Op.call(this);
    this.cut_1 = cut;
    this.width_1 = width;
    this.height_1 = height;
    this.position$delegate_1 = position$factory(this.cut_1);
    this.$stable_1 = 8;
  }
  PutPlaceholder.prototype.get_cut_18j7s7_k$ = function () {
    return this.cut_1;
  };
  PutPlaceholder.prototype.set_width_7urlas_k$ = function (_set____db54di) {
    this.width_1 = _set____db54di;
  };
  PutPlaceholder.prototype.get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  PutPlaceholder.prototype.set_height_nuysnb_k$ = function (_set____db54di) {
    this.height_1 = _set____db54di;
  };
  PutPlaceholder.prototype.get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  PutPlaceholder.prototype.get_position_jfponi_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = position$factory_0();
    tmp$ret$0 = this.position$delegate_1.get();
    return tmp$ret$0;
  };
  PutPlaceholder.prototype.component1_7eebsc_k$ = function () {
    return this.cut_1;
  };
  PutPlaceholder.prototype.component2_7eebsb_k$ = function () {
    return this.width_1;
  };
  PutPlaceholder.prototype.component3_7eebsa_k$ = function () {
    return this.height_1;
  };
  PutPlaceholder.prototype.copy_rklg67_k$ = function (cut, width, height) {
    return new PutPlaceholder(cut, width, height);
  };
  PutPlaceholder.prototype.copy$default_gzwp8n_k$ = function (cut, width, height, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cut = this.cut_1;
    if (!(($mask0 & 2) === 0))
      width = this.width_1;
    if (!(($mask0 & 4) === 0))
      height = this.height_1;
    return this.copy_rklg67_k$(cut, width, height);
  };
  PutPlaceholder.prototype.toString = function () {
    return 'PutPlaceholder(cut=' + this.cut_1 + ', width=' + this.width_1 + ', height=' + this.height_1 + ')';
  };
  PutPlaceholder.prototype.hashCode = function () {
    var result = this.cut_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.width_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.height_1) | 0;
    return result;
  };
  PutPlaceholder.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder ? other : THROW_CCE();
    if (!this.cut_1.equals(tmp0_other_with_cast.cut_1))
      return false;
    if (!equals(this.width_1, tmp0_other_with_cast.width_1))
      return false;
    if (!equals(this.height_1, tmp0_other_with_cast.height_1))
      return false;
    return true;
  };
  PutPlaceholder.$metadata$ = classMeta('PutPlaceholder', undefined, undefined, undefined, undefined, Op.prototype);
  function EndPlaceholder(cut) {
    Op.call(this);
    this.cut_1 = cut;
    this.position$delegate_1 = position$factory_1(this.cut_1);
    this.$stable_1 = 8;
  }
  EndPlaceholder.prototype.get_cut_18j7s7_k$ = function () {
    return this.cut_1;
  };
  EndPlaceholder.prototype.get_position_jfponi_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = position$factory_2();
    tmp$ret$0 = this.position$delegate_1.get();
    return tmp$ret$0;
  };
  EndPlaceholder.prototype.component1_7eebsc_k$ = function () {
    return this.cut_1;
  };
  EndPlaceholder.prototype.copy_juie51_k$ = function (cut) {
    return new EndPlaceholder(cut);
  };
  EndPlaceholder.prototype.copy$default_ruh0u3_k$ = function (cut, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cut = this.cut_1;
    return this.copy_juie51_k$(cut);
  };
  EndPlaceholder.prototype.toString = function () {
    return 'EndPlaceholder(cut=' + this.cut_1 + ')';
  };
  EndPlaceholder.prototype.hashCode = function () {
    return this.cut_1.hashCode();
  };
  EndPlaceholder.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder ? other : THROW_CCE();
    if (!this.cut_1.equals(tmp0_other_with_cast.cut_1))
      return false;
    return true;
  };
  EndPlaceholder.$metadata$ = classMeta('EndPlaceholder', undefined, undefined, undefined, undefined, Op.prototype);
  function StyleAdd_0(position, style) {
    Cut.call(this);
    this.position_1 = position;
    this.style_1 = style;
    this.$stable_1 = 0;
  }
  StyleAdd_0.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  StyleAdd_0.prototype.get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  StyleAdd_0.prototype.component1_7eebsc_k$ = function () {
    return this.position_1;
  };
  StyleAdd_0.prototype.component2_7eebsb_k$ = function () {
    return this.style_1;
  };
  StyleAdd_0.prototype.copy_ql720e_k$ = function (position, style) {
    return new StyleAdd_0(position, style);
  };
  StyleAdd_0.prototype.copy$default_20n44u_k$ = function (position, style, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      position = this.position_1;
    if (!(($mask0 & 2) === 0))
      style = this.style_1;
    return this.copy_ql720e_k$(position, style);
  };
  StyleAdd_0.prototype.toString = function () {
    return 'StyleAdd(position=' + this.position_1 + ', style=' + this.style_1 + ')';
  };
  StyleAdd_0.prototype.hashCode = function () {
    var result = this.position_1;
    result = imul(result, 31) + this.style_1.hashCode() | 0;
    return result;
  };
  StyleAdd_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd_0))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd_0 ? other : THROW_CCE();
    if (!(this.position_1 === tmp0_other_with_cast.position_1))
      return false;
    if (!this.style_1.equals(tmp0_other_with_cast.style_1))
      return false;
    return true;
  };
  StyleAdd_0.$metadata$ = classMeta('StyleAdd', undefined, undefined, undefined, undefined, Cut.prototype);
  function StyleRemove(position, style) {
    Cut.call(this);
    this.position_1 = position;
    this.style_1 = style;
    this.$stable_1 = 0;
  }
  StyleRemove.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  StyleRemove.prototype.get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  StyleRemove.prototype.component1_7eebsc_k$ = function () {
    return this.position_1;
  };
  StyleRemove.prototype.component2_7eebsb_k$ = function () {
    return this.style_1;
  };
  StyleRemove.prototype.copy_ql720e_k$ = function (position, style) {
    return new StyleRemove(position, style);
  };
  StyleRemove.prototype.copy$default_20n44u_k$ = function (position, style, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      position = this.position_1;
    if (!(($mask0 & 2) === 0))
      style = this.style_1;
    return this.copy_ql720e_k$(position, style);
  };
  StyleRemove.prototype.toString = function () {
    return 'StyleRemove(position=' + this.position_1 + ', style=' + this.style_1 + ')';
  };
  StyleRemove.prototype.hashCode = function () {
    var result = this.position_1;
    result = imul(result, 31) + this.style_1.hashCode() | 0;
    return result;
  };
  StyleRemove.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleRemove))
      return false;
    var tmp0_other_with_cast = other instanceof StyleRemove ? other : THROW_CCE();
    if (!(this.position_1 === tmp0_other_with_cast.position_1))
      return false;
    if (!this.style_1.equals(tmp0_other_with_cast.style_1))
      return false;
    return true;
  };
  StyleRemove.$metadata$ = classMeta('StyleRemove', undefined, undefined, undefined, undefined, Cut.prototype);
  function PutPlaceholder_0(position, placeholder) {
    Cut.call(this);
    this.position_1 = position;
    this.placeholder_1 = placeholder;
    this.$stable_1 = 0;
  }
  PutPlaceholder_0.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  PutPlaceholder_0.prototype.get_placeholder_nsdr0q_k$ = function () {
    return this.placeholder_1;
  };
  PutPlaceholder_0.prototype.component1_7eebsc_k$ = function () {
    return this.position_1;
  };
  PutPlaceholder_0.prototype.component2_7eebsb_k$ = function () {
    return this.placeholder_1;
  };
  PutPlaceholder_0.prototype.copy_893v0i_k$ = function (position, placeholder) {
    return new PutPlaceholder_0(position, placeholder);
  };
  PutPlaceholder_0.prototype.copy$default_x7s5ku_k$ = function (position, placeholder, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      position = this.position_1;
    if (!(($mask0 & 2) === 0))
      placeholder = this.placeholder_1;
    return this.copy_893v0i_k$(position, placeholder);
  };
  PutPlaceholder_0.prototype.toString = function () {
    return 'PutPlaceholder(position=' + this.position_1 + ', placeholder=' + this.placeholder_1 + ')';
  };
  PutPlaceholder_0.prototype.hashCode = function () {
    var result = this.position_1;
    result = imul(result, 31) + this.placeholder_1.hashCode() | 0;
    return result;
  };
  PutPlaceholder_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder_0 ? other : THROW_CCE();
    if (!(this.position_1 === tmp0_other_with_cast.position_1))
      return false;
    if (!this.placeholder_1.equals(tmp0_other_with_cast.placeholder_1))
      return false;
    return true;
  };
  PutPlaceholder_0.$metadata$ = classMeta('PutPlaceholder', undefined, undefined, undefined, undefined, Cut.prototype);
  function EndPlaceholder_0(position) {
    Cut.call(this);
    this.position_1 = position;
    this.$stable_1 = 0;
  }
  EndPlaceholder_0.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  EndPlaceholder_0.prototype.component1_7eebsc_k$ = function () {
    return this.position_1;
  };
  EndPlaceholder_0.prototype.copy_u8zkvg_k$ = function (position) {
    return new EndPlaceholder_0(position);
  };
  EndPlaceholder_0.prototype.copy$default_pqo5jh_k$ = function (position, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      position = this.position_1;
    return this.copy_u8zkvg_k$(position);
  };
  EndPlaceholder_0.prototype.toString = function () {
    return 'EndPlaceholder(position=' + this.position_1 + ')';
  };
  EndPlaceholder_0.prototype.hashCode = function () {
    return this.position_1;
  };
  EndPlaceholder_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder_0 ? other : THROW_CCE();
    if (!(this.position_1 === tmp0_other_with_cast.position_1))
      return false;
    return true;
  };
  EndPlaceholder_0.$metadata$ = classMeta('EndPlaceholder', undefined, undefined, undefined, undefined, Cut.prototype);
  function ParagraphBuilder_init_$Init$(fontFamilyResolver, text, textStyle, ellipsis, maxLines, spanStyles, placeholders, density, textDirection, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      ellipsis = '';
    if (!(($mask0 & 16) === 0))
      maxLines = IntCompanionObject_getInstance().MAX_VALUE_1;
    ParagraphBuilder_0.call($this, fontFamilyResolver, text, textStyle, ellipsis, maxLines, spanStyles, placeholders, density, textDirection);
    return $this;
  }
  function ParagraphBuilder_init_$Create$(fontFamilyResolver, text, textStyle, ellipsis, maxLines, spanStyles, placeholders, density, textDirection, $mask0, $marker) {
    return ParagraphBuilder_init_$Init$(fontFamilyResolver, text, textStyle, ellipsis, maxLines, spanStyles, placeholders, density, textDirection, $mask0, $marker, Object.create(ParagraphBuilder_0.prototype));
  }
  function _set_initialStyle__mdespi($this, _set____db54di) {
    $this.initialStyle_1 = _set____db54di;
  }
  function _get_initialStyle__6to25e($this) {
    var tmp = $this.initialStyle_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('initialStyle');
    }
  }
  function _set_defaultStyle__3qqnq1($this, _set____db54di) {
    $this.defaultStyle_1 = _set____db54di;
  }
  function _get_defaultStyle__bt02u3($this) {
    var tmp = $this.defaultStyle_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('defaultStyle');
    }
  }
  function _set_paragraphStyle__bax9po($this, _set____db54di) {
    $this.paragraphStyle_1 = _set____db54di;
  }
  function _set_ops__4wbo2b($this, _set____db54di) {
    $this.ops_1 = _set____db54di;
  }
  function _get_ops__e6e97j($this) {
    var tmp = $this.ops_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('ops');
    }
  }
  function Op() {
  }
  Op.$metadata$ = classMeta('Op');
  function Cut() {
  }
  Cut.$metadata$ = classMeta('Cut');
  function makeOps($this, spans, placeholders) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var cuts = tmp$ret$0;
    var tmp0_iterator = spans.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var span = tmp0_iterator.next_20eer_k$();
      cuts.add_1j60pz_k$(new StyleAdd_0(span.start_1, span.item_1));
      cuts.add_1j60pz_k$(new StyleRemove(span.end_1, span.item_1));
    }
    var tmp1_iterator = placeholders.iterator_jk1svi_k$();
    while (tmp1_iterator.hasNext_bitz1p_k$()) {
      var placeholder = tmp1_iterator.next_20eer_k$();
      cuts.add_1j60pz_k$(new PutPlaceholder_0(placeholder.start_1, placeholder.item_1));
      cuts.add_1j60pz_k$(new EndPlaceholder_0(placeholder.end_1));
    }
    var ops = mutableListOf([new StyleAdd(0, _get_defaultStyle__bt02u3($this))]);
    // Inline function 'kotlin.collections.sortBy' call
    if (cuts.get_size_woubt6_k$() > 1) {
      var tmp$ret$1;
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp = ParagraphBuilder$makeOps$lambda;
      tmp$ret$1 = new sam$kotlin_Comparator$0_0(tmp);
      sortWith(cuts, tmp$ret$1);
    }
    var activeStyles = mutableListOf([_get_initialStyle__6to25e($this)]);
    var tmp2_iterator = cuts.iterator_jk1svi_k$();
    while (tmp2_iterator.hasNext_bitz1p_k$()) {
      var cut = tmp2_iterator.next_20eer_k$();
      if (cut instanceof StyleAdd_0) {
        activeStyles.add_1j60pz_k$(cut.style_1);
        var prev = previousStyleAddAtTheSamePosition($this, cut.get_position_jfponi_k$(), ops);
        if (prev == null) {
          var tmp_0 = cut.get_position_jfponi_k$();
          var tmp$ret$2;
          // Inline function 'kotlin.also' call
          var tmp0_also = mergeStyles($this, activeStyles);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
          tmp0_also.merge_y90v2p_k$($this.density_1, cut.style_1);
          tmp$ret$2 = tmp0_also;
          ops.add_1j60pz_k$(new StyleAdd(tmp_0, tmp$ret$2));
        } else {
          prev.style_1.merge_y90v2p_k$($this.density_1, cut.style_1);
        }
      } else {
        if (cut instanceof StyleRemove) {
          activeStyles.remove_8hbkc6_k$(cut.style_1);
          ops.add_1j60pz_k$(new StyleAdd(cut.get_position_jfponi_k$(), mergeStyles($this, activeStyles)));
        } else {
          if (cut instanceof PutPlaceholder_0) {
            var currentStyle = mergeStyles($this, activeStyles);
            var op = new PutPlaceholder(cut, fontSizeInHierarchy($this.density_1, currentStyle.fontSize_1, cut.placeholder_1.width_1), fontSizeInHierarchy($this.density_1, currentStyle.fontSize_1, cut.placeholder_1.height_1));
            ops.add_1j60pz_k$(op);
          } else {
            if (cut instanceof EndPlaceholder_0) {
              ops.add_1j60pz_k$(new EndPlaceholder(cut));
            }
          }
        }
      }
    }
    return ops;
  }
  function mergeStyles($this, activeStyles) {
    var style = ComputedStyle_init_$Create$_0($this.density_1, activeStyles.get_fkrdnv_k$(0));
    var inductionVariable = 1;
    var last = activeStyles.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        style.merge_y90v2p_k$($this.density_1, activeStyles.get_fkrdnv_k$(i));
      }
       while (inductionVariable < last);
    return style;
  }
  function previousStyleAddAtTheSamePosition($this, position, ops) {
    var tmp0_iterator = asReversed(ops).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var prevOp = tmp0_iterator.next_20eer_k$();
      if (prevOp.get_position_jfponi_k$() < position)
        return null;
      if (prevOp instanceof StyleAdd)
        return prevOp;
    }
    return null;
  }
  function textStyleToParagraphStyle($this, style, computedStyle) {
    var pStyle = new ParagraphStyle();
    pStyle.set_textStyle_dpq9o1_k$(makeSkTextStyle($this, computedStyle));
    var tmp0_safe_receiver = style.get_textAlign_ihj0br_k$();
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new TextAlign(tmp)) == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      pStyle.set_alignment_vl4ggh_k$(toSkAlignment(tmp0_safe_receiver));
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var tmp0__get_isSpecified__cddt7f = style.get_lineHeight_oovvjw_k$();
    tmp$ret$1 = !get_isUnspecified(tmp0__get_isSpecified__cddt7f);
    if (tmp$ret$1) {
      var strutStyle = StrutStyle_init_$Create$();
      strutStyle.set_isEnabled_65t46p_k$(true);
      strutStyle.set_isHeightOverridden_tb0fyx_k$(true);
      var tmp$ret$3;
      // Inline function 'kotlin.with' call
      var tmp1_with = $this.density_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.textStyleToParagraphStyle.<anonymous>' call
      tmp$ret$2 = tmp1_with.toPx_x7oik4_k$(orDefaultFontSize(style.get_fontSize_61k213_k$()));
      tmp$ret$3 = tmp$ret$2;
      var fontSize = tmp$ret$3;
      var tmp_0;
      if (_TextUnit___get_isSp__impl__8c3r6q(style.get_lineHeight_oovvjw_k$())) {
        var tmp$ret$5;
        // Inline function 'kotlin.with' call
        var tmp2_with = $this.density_1;
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$4;
        // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.textStyleToParagraphStyle.<anonymous>' call
        tmp$ret$4 = tmp2_with.toPx_x7oik4_k$(style.get_lineHeight_oovvjw_k$());
        tmp$ret$5 = tmp$ret$4;
        tmp_0 = tmp$ret$5;
      } else if (_TextUnit___get_isEm__impl__esrmtl(style.get_lineHeight_oovvjw_k$())) {
        tmp_0 = fontSize * _TextUnit___get_value__impl__hpbx0k(style.get_lineHeight_oovvjw_k$());
      } else {
        throw IllegalStateException_init_$Create$('Unexpected size in textStyleToParagraphStyle');
      }
      var lineHeight = tmp_0;
      strutStyle.set_height_nuysnb_k$(lineHeight / fontSize);
      strutStyle.set_fontSize_ucdk6o_k$(fontSize);
      pStyle.set_strutStyle_yeqgid_k$(strutStyle);
    }
    pStyle.set_direction_yz5smn_k$(toSkDirection($this.textDirection_1));
    var tmp1_safe_receiver = $this.textStyle_1.get_textIndent_5mau2q_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$7;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'kotlin.with' call
      var tmp0_with = $this.density_1;
      // Inline function 'kotlin.contracts.contract' call
      pStyle.set_textIndent_76en2z_k$(new TextIndent(tmp0_with.toPx_x7oik4_k$(tmp1_safe_receiver.firstLine_1), tmp0_with.toPx_x7oik4_k$(tmp1_safe_receiver.restLine_1)));
      tmp$ret$6 = Unit_getInstance();
      tmp$ret$7 = tmp$ret$6;
    }
    return pStyle;
  }
  function makeSkTextStyle($this, style) {
    var tmp = get_skTextStylesCache();
    return getOrPut(tmp, style, ParagraphBuilder$makeSkTextStyle$lambda(style, $this));
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlin_Comparator$0_0.prototype.compare_6tbigh_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  sam$kotlin_Comparator$0_0.prototype.compare = function (a, b) {
    return this.compare_6tbigh_k$(a, b);
  };
  sam$kotlin_Comparator$0_0.$metadata$ = classMeta('sam$kotlin_Comparator$0', [Comparator]);
  function ParagraphBuilder$makeOps$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
    tmp$ret$0 = a.get_position_jfponi_k$();
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
    tmp$ret$1 = b.get_position_jfponi_k$();
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function ParagraphBuilder$makeSkTextStyle$lambda($style, this$0) {
    return function (it) {
      return $style.toSkTextStyle_9a1jf_k$(this$0.fontFamilyResolver_1);
    };
  }
  function ParagraphBuilder$defaultFont$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.textStyle_1.get_fontFamily_ulphcs_k$();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.defaultFont$delegate.<anonymous>.<anonymous>' call
        var tmp0_elvis_lhs = this$0.textStyle_1.get_fontWeight_wbif2o_k$();
        var tmp_0 = tmp0_elvis_lhs == null ? Companion_getInstance_20().Normal_1 : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = this$0.textStyle_1.get_fontStyle_fze7ml_k$();
        var tmp_1;
        var tmp_2 = tmp1_elvis_lhs;
        if ((tmp_2 == null ? null : new FontStyle(tmp_2)) == null) {
          tmp_1 = Companion_getInstance_18().Normal_1;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        var tmp_3 = tmp_1;
        var tmp2_elvis_lhs = this$0.textStyle_1.get_fontSynthesis_t08ei1_k$();
        var tmp_4;
        var tmp_5 = tmp2_elvis_lhs;
        if ((tmp_5 == null ? null : new FontSynthesis(tmp_5)) == null) {
          tmp_4 = Companion_getInstance_19().All_1;
        } else {
          tmp_4 = tmp2_elvis_lhs;
        }
        var tmp_6 = this$0.fontFamilyResolver_1.resolve_3z78ru_k$(tmp0_safe_receiver, tmp_0, tmp_3, tmp_4).get_value_j01efc_k$();
        tmp$ret$0 = tmp_6 instanceof FontLoadResult ? tmp_6 : THROW_CCE();
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp$ret$1;
      }
      var loadResult = tmp;
      var tmp1_safe_receiver = loadResult;
      return Font_init_$Create$(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.typeface_1, _get_defaultStyle__bt02u3(this$0).fontSize_1);
    };
  }
  function ParagraphBuilder$defaultHeight$delegate$lambda(this$0) {
    return function () {
      return this$0.get_defaultFont_6nsy4n_k$().get_metrics_h2mme2_k$().get_height_e7t92o_k$();
    };
  }
  function ParagraphBuilder_0(fontFamilyResolver, text, textStyle, ellipsis, maxLines, spanStyles, placeholders, density, textDirection) {
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.text_1 = text;
    this.textStyle_1 = textStyle;
    this.ellipsis_1 = ellipsis;
    this.maxLines_1 = maxLines;
    this.spanStyles_1 = spanStyles;
    this.placeholders_1 = placeholders;
    this.density_1 = density;
    this.textDirection_1 = textDirection;
    var tmp = this;
    tmp.defaultFont$delegate_1 = lazy_0(ParagraphBuilder$defaultFont$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.defaultHeight$delegate_1 = lazy_0(ParagraphBuilder$defaultHeight$delegate$lambda(this));
  }
  ParagraphBuilder_0.prototype.get_fontFamilyResolver_9o0fjy_k$ = function () {
    return this.fontFamilyResolver_1;
  };
  ParagraphBuilder_0.prototype.get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  ParagraphBuilder_0.prototype.set_textStyle_x7o2al_k$ = function (_set____db54di) {
    this.textStyle_1 = _set____db54di;
  };
  ParagraphBuilder_0.prototype.get_textStyle_8tt25h_k$ = function () {
    return this.textStyle_1;
  };
  ParagraphBuilder_0.prototype.set_ellipsis_bpvke4_k$ = function (_set____db54di) {
    this.ellipsis_1 = _set____db54di;
  };
  ParagraphBuilder_0.prototype.get_ellipsis_sol6jq_k$ = function () {
    return this.ellipsis_1;
  };
  ParagraphBuilder_0.prototype.set_maxLines_gpw0p4_k$ = function (_set____db54di) {
    this.maxLines_1 = _set____db54di;
  };
  ParagraphBuilder_0.prototype.get_maxLines_pclpoc_k$ = function () {
    return this.maxLines_1;
  };
  ParagraphBuilder_0.prototype.get_spanStyles_muoq3_k$ = function () {
    return this.spanStyles_1;
  };
  ParagraphBuilder_0.prototype.get_placeholders_r4ppyh_k$ = function () {
    return this.placeholders_1;
  };
  ParagraphBuilder_0.prototype.get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  ParagraphBuilder_0.prototype.get_textDirection_cl6v6f_k$ = function () {
    return this.textDirection_1;
  };
  ParagraphBuilder_0.prototype.get_paragraphStyle_27utpo_k$ = function () {
    var tmp = this.paragraphStyle_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('paragraphStyle');
    }
  };
  ParagraphBuilder_0.prototype.build_1k0s4u_k$ = function () {
    this.initialStyle_1 = withDefaultFontSize(this.textStyle_1.toSpanStyle_l454tw_k$());
    this.defaultStyle_1 = ComputedStyle_init_$Create$_0(this.density_1, _get_initialStyle__6to25e(this));
    this.ops_1 = makeOps(this, this.spanStyles_1, this.placeholders_1);
    var pos = 0;
    var ps = textStyleToParagraphStyle(this, this.textStyle_1, _get_defaultStyle__bt02u3(this));
    this.paragraphStyle_1 = ps;
    if (!(this.maxLines_1 === IntCompanionObject_getInstance().MAX_VALUE_1)) {
      ps.set_maxLinesCount_1kfq07_k$(this.maxLines_1);
      ps.set_ellipsis_b72e69_k$(this.ellipsis_1);
    }
    var tmp = this.fontFamilyResolver_1;
    var platformFontLoader = (tmp instanceof FontFamilyResolverImpl ? tmp : THROW_CCE()).platformFontLoader_1;
    var tmp0_subject = platformFontLoader;
    var tmp_0;
    if (tmp0_subject instanceof SkiaFontLoader) {
      tmp_0 = platformFontLoader.get_fontCollection_kf4vje_k$();
    } else {
      throw IllegalStateException_init_$Create$('Unsupported font loader ' + platformFontLoader);
    }
    var fontCollection = tmp_0;
    var pb = new ParagraphBuilder(ps, fontCollection);
    var addText = true;
    var tmp1_iterator = _get_ops__e6e97j(this).iterator_jk1svi_k$();
    while (tmp1_iterator.hasNext_bitz1p_k$()) {
      var op = tmp1_iterator.next_20eer_k$();
      if (addText ? pos < op.get_position_jfponi_k$() : false) {
        pb.addText_jamnxp_k$(toString(charSequenceSubSequence(this.text_1, pos, op.get_position_jfponi_k$())));
      }
      var tmp2_subject = op;
      if (tmp2_subject instanceof StyleAdd) {
        var tmp_1 = op.style_1.fontFamily_1;
        var tmp3_elvis_lhs = op.style_1.fontWeight_1;
        var tmp_2 = tmp3_elvis_lhs == null ? Companion_getInstance_20().Normal_1 : tmp3_elvis_lhs;
        var tmp4_elvis_lhs = op.style_1.fontStyle_1;
        var tmp_3;
        var tmp_4 = tmp4_elvis_lhs;
        if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
          tmp_3 = Companion_getInstance_18().Normal_1;
        } else {
          tmp_3 = tmp4_elvis_lhs;
        }
        var tmp_5 = tmp_3;
        var tmp5_elvis_lhs = op.style_1.fontSynthesis_1;
        var tmp_6;
        var tmp_7 = tmp5_elvis_lhs;
        if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
          tmp_6 = Companion_getInstance_19().All_1;
        } else {
          tmp_6 = tmp5_elvis_lhs;
        }
        this.fontFamilyResolver_1.resolve_3z78ru_k$(tmp_1, tmp_2, tmp_5, tmp_6);
        pb.pushStyle_ypbmq9_k$(makeSkTextStyle(this, op.style_1));
      } else {
        if (tmp2_subject instanceof PutPlaceholder) {
          var placeholderStyle = new PlaceholderStyle(op.width_1, op.height_1, toSkPlaceholderAlignment(op.cut_1.placeholder_1.placeholderVerticalAlign_1), BaselineMode_ALPHABETIC_getInstance(), 0.0);
          pb.addPlaceholder_xmxrm5_k$(placeholderStyle);
          addText = false;
        } else {
          if (tmp2_subject instanceof EndPlaceholder) {
            addText = true;
          }
        }
      }
      pos = op.get_position_jfponi_k$();
    }
    if (addText ? pos < this.text_1.length : false) {
      pb.addText_jamnxp_k$(toString(charSequenceSubSequence(this.text_1, pos, this.text_1.length)));
    }
    return pb.build_1k0s4u_k$();
  };
  ParagraphBuilder_0.prototype.get_defaultFont_6nsy4n_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = defaultFont$factory();
    tmp$ret$0 = this.defaultFont$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  ParagraphBuilder_0.prototype.get_defaultHeight_9g40wv_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = defaultHeight$factory();
    tmp$ret$0 = this.defaultHeight$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  ParagraphBuilder_0.$metadata$ = classMeta('ParagraphBuilder');
  function withDefaultFontSize(_this__u8e3s4) {
    init_properties_SkiaParagraph_skiko_kt_5inyi7();
    var fontSize = orDefaultFontSize(_this__u8e3s4.fontSize_1);
    var tmp;
    if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4.letterSpacing_1)) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
      var tmp0_times = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4.letterSpacing_1);
      checkArithmetic(fontSize);
      tmp$ret$0 = pack(_TextUnit___get_rawType__impl__tu8yq5(fontSize), _TextUnit___get_value__impl__hpbx0k(fontSize) * tmp0_times);
      tmp = tmp$ret$0;
    } else {
      tmp = _this__u8e3s4.letterSpacing_1;
    }
    var letterSpacing = tmp;
    return _this__u8e3s4.copy$default_833x4x_k$(null, fontSize, null, null, null, null, null, letterSpacing, null, null, null, null, null, null, 16253, null);
  }
  function toSkPlaceholderAlignment(_this__u8e3s4) {
    init_properties_SkiaParagraph_skiko_kt_5inyi7();
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject === Companion_getInstance_9().AboveBaseline_1) {
      tmp = PlaceholderAlignment_ABOVE_BASELINE_getInstance();
    } else if (tmp0_subject === Companion_getInstance_9().TextTop_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (tmp0_subject === Companion_getInstance_9().TextBottom_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (tmp0_subject === Companion_getInstance_9().TextCenter_1) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else if (tmp0_subject === Companion_getInstance_9().Top_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (tmp0_subject === Companion_getInstance_9().Bottom_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (tmp0_subject === Companion_getInstance_9().Center_1) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('Invalid PlaceholderVerticalAlign.');
    }
    return tmp;
  }
  function toSkAlignment(_this__u8e3s4) {
    init_properties_SkiaParagraph_skiko_kt_5inyi7();
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject === Companion_getInstance_36().Left_1) {
      tmp = Alignment_LEFT_getInstance();
    } else if (tmp0_subject === Companion_getInstance_36().Right_1) {
      tmp = Alignment_RIGHT_getInstance();
    } else if (tmp0_subject === Companion_getInstance_36().Center_1) {
      tmp = Alignment_CENTER_getInstance();
    } else if (tmp0_subject === Companion_getInstance_36().Justify_1) {
      tmp = Alignment_JUSTIFY_getInstance();
    } else if (tmp0_subject === Companion_getInstance_36().Start_1) {
      tmp = Alignment_START_getInstance();
    } else if (tmp0_subject === Companion_getInstance_36().End_1) {
      tmp = Alignment_END_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('Invalid TextAlign');
    }
    return tmp;
  }
  function orDefaultFontSize(_this__u8e3s4) {
    init_properties_SkiaParagraph_skiko_kt_5inyi7();
    var tmp;
    if (get_isUnspecified(_this__u8e3s4)) {
      tmp = get_DefaultFontSize_0();
    } else if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4)) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
      var tmp0_times = get_DefaultFontSize_0();
      var tmp1_times = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4);
      checkArithmetic(tmp0_times);
      tmp$ret$0 = pack(_TextUnit___get_rawType__impl__tu8yq5(tmp0_times), _TextUnit___get_value__impl__hpbx0k(tmp0_times) * tmp1_times);
      tmp = tmp$ret$0;
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function toSkDirection(_this__u8e3s4) {
    init_properties_SkiaParagraph_skiko_kt_5inyi7();
    var tmp0_subject = _this__u8e3s4;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = Direction_LTR_getInstance();
        break;
      case 1:
        tmp = Direction_RTL_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function position$factory($b0) {
    return getPropertyCallableRef('position', 0, KProperty0, function () {
      return $b0.position_1;
    }, null);
  }
  function position$factory_0() {
    return getPropertyCallableRef('position', 1, KProperty1, function (receiver) {
      return receiver.get_position_jfponi_k$();
    }, null);
  }
  function position$factory_1($b0) {
    return getPropertyCallableRef('position', 0, KProperty0, function () {
      return $b0.position_1;
    }, null);
  }
  function position$factory_2() {
    return getPropertyCallableRef('position', 1, KProperty1, function (receiver) {
      return receiver.get_position_jfponi_k$();
    }, null);
  }
  function defaultFont$factory() {
    return getPropertyCallableRef('defaultFont', 1, KProperty1, function (receiver) {
      return receiver.get_defaultFont_6nsy4n_k$();
    }, null);
  }
  function defaultHeight$factory() {
    return getPropertyCallableRef('defaultHeight', 1, KProperty1, function (receiver) {
      return receiver.get_defaultHeight_9g40wv_k$();
    }, null);
  }
  var properties_initialized_SkiaParagraph_skiko_kt_jww0jv;
  function init_properties_SkiaParagraph_skiko_kt_5inyi7() {
    if (properties_initialized_SkiaParagraph_skiko_kt_jww0jv) {
    } else {
      properties_initialized_SkiaParagraph_skiko_kt_jww0jv = true;
      DefaultFontSize_0 = get_sp(16);
      skTextStylesCache = new WeakHashMap();
    }
  }
  function ActualParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    return new SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver);
  }
  function _get_style__b8k6v4($this) {
    return $this.style_1;
  }
  function _get_spanStyles__69finz_0($this) {
    return $this.spanStyles_1;
  }
  function _get_placeholders__eecbo5($this) {
    return $this.placeholders_1;
  }
  function _get_density__l5pazb($this) {
    return $this.density_1;
  }
  function _get_fontFamilyResolver__s3uj2m_0($this) {
    return $this.fontFamilyResolver_1;
  }
  function _set_layouter__eku8o0($this, _set____db54di) {
    $this.layouter_1 = _set____db54di;
  }
  function _get_layouter__1rxx78_0($this) {
    return $this.layouter_1;
  }
  function newLayouter($this) {
    return new ParagraphLayouter($this.text_1, $this.textDirection_1, $this.style_1, $this.spanStyles_1, $this.placeholders_1, $this.density_1, $this.fontFamilyResolver_1);
  }
  function _set_minIntrinsicWidth__6e9wfm($this, _set____db54di) {
    $this.minIntrinsicWidth_1 = _set____db54di;
  }
  function _set_maxIntrinsicWidth__r1bxuo($this, _set____db54di) {
    $this.maxIntrinsicWidth_1 = _set____db54di;
  }
  function resolveTextDirection_1($this, direction) {
    var tmp0_subject = direction;
    var tmp;
    var tmp_0 = tmp0_subject;
    if (equals(tmp_0 == null ? null : new TextDirection(tmp_0), new TextDirection(Companion_getInstance_38().Ltr_1))) {
      tmp = ResolvedTextDirection_Ltr_getInstance();
    } else {
      var tmp_1 = tmp0_subject;
      if (equals(tmp_1 == null ? null : new TextDirection(tmp_1), new TextDirection(Companion_getInstance_38().Rtl_1))) {
        tmp = ResolvedTextDirection_Rtl_getInstance();
      } else {
        var tmp_2 = tmp0_subject;
        if (equals(tmp_2 == null ? null : new TextDirection(tmp_2), new TextDirection(Companion_getInstance_38().Content_1))) {
          var tmp1_elvis_lhs = contentBasedTextDirection_0($this);
          tmp = tmp1_elvis_lhs == null ? ResolvedTextDirection_Ltr_getInstance() : tmp1_elvis_lhs;
        } else {
          var tmp_3 = tmp0_subject;
          if (equals(tmp_3 == null ? null : new TextDirection(tmp_3), new TextDirection(Companion_getInstance_38().ContentOrLtr_1))) {
            var tmp2_elvis_lhs = contentBasedTextDirection_0($this);
            tmp = tmp2_elvis_lhs == null ? ResolvedTextDirection_Ltr_getInstance() : tmp2_elvis_lhs;
          } else {
            var tmp_4 = tmp0_subject;
            if (equals(tmp_4 == null ? null : new TextDirection(tmp_4), new TextDirection(Companion_getInstance_38().ContentOrRtl_1))) {
              var tmp3_elvis_lhs = contentBasedTextDirection_0($this);
              tmp = tmp3_elvis_lhs == null ? ResolvedTextDirection_Rtl_getInstance() : tmp3_elvis_lhs;
            } else {
              tmp = ResolvedTextDirection_Ltr_getInstance();
            }
          }
        }
      }
    }
    return tmp;
  }
  function contentBasedTextDirection_0($this) {
    return contentBasedTextDirection($this.text_1);
  }
  function SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    this.text_1 = text;
    this.style_1 = style;
    this.spanStyles_1 = spanStyles;
    this.placeholders_1 = placeholders;
    this.density_1 = density;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.textDirection_1 = resolveTextDirection_1(this, this.style_1.get_textDirection_fsfodj_k$());
    this.layouter_1 = newLayouter(this);
    this.minIntrinsicWidth_1 = 0.0;
    this.maxIntrinsicWidth_1 = 0.0;
    var tmp = ensureNotNull(this.layouter_1);
    FloatCompanionObject_getInstance();
    var para = tmp.layoutParagraph$default_batlz_k$(Infinity, 0, null, null, null, null, 62, null);
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.math.ceil' call
    var tmp0_ceil = para.get_minIntrinsicWidth_lmc1rq_k$();
    tmp$ret$0 = Math.ceil(tmp0_ceil);
    tmp_0.minIntrinsicWidth_1 = tmp$ret$0;
    var tmp_1 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.math.ceil' call
    var tmp1_ceil = para.get_maxIntrinsicWidth_b4gk2k_k$();
    tmp$ret$1 = Math.ceil(tmp1_ceil);
    tmp_1.maxIntrinsicWidth_1 = tmp$ret$1;
  }
  SkiaParagraphIntrinsics.prototype.get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  SkiaParagraphIntrinsics.prototype.get_textDirection_cl6v6f_k$ = function () {
    return this.textDirection_1;
  };
  SkiaParagraphIntrinsics.prototype.layouter_lcs8mh_k$ = function () {
    var tmp0_elvis_lhs = this.layouter_1;
    var layouter = tmp0_elvis_lhs == null ? newLayouter(this) : tmp0_elvis_lhs;
    this.layouter_1 = null;
    return layouter;
  };
  SkiaParagraphIntrinsics.prototype.get_minIntrinsicWidth_lmc1rq_k$ = function () {
    return this.minIntrinsicWidth_1;
  };
  SkiaParagraphIntrinsics.prototype.get_maxIntrinsicWidth_b4gk2k_k$ = function () {
    return this.maxIntrinsicWidth_1;
  };
  SkiaParagraphIntrinsics.$metadata$ = classMeta('SkiaParagraphIntrinsics', [ParagraphIntrinsics]);
  function Companion_36() {
    Companion_instance_36 = this;
    this.Simple_1 = new LineBreak();
    this.Heading_1 = new LineBreak();
    this.Paragraph_1 = new LineBreak();
  }
  Companion_36.prototype.get_Simple_4c53vf_k$ = function () {
    return this.Simple_1;
  };
  Companion_36.prototype.get_Heading_t2yivb_k$ = function () {
    return this.Heading_1;
  };
  Companion_36.prototype.get_Paragraph_2v2rol_k$ = function () {
    return this.Paragraph_1;
  };
  Companion_36.$metadata$ = objectMeta('Companion');
  var Companion_instance_36;
  function Companion_getInstance_46() {
    if (Companion_instance_36 == null)
      new Companion_36();
    return Companion_instance_36;
  }
  function LineBreak() {
    Companion_getInstance_46();
  }
  LineBreak.$metadata$ = classMeta('LineBreak');
  //region block: post-declaration
  FontFamilyResolverImpl.prototype.resolve$default_g9k5q4_k$ = resolve$default;
  PlatformResolveInterceptor$Companion$Default$1.prototype.interceptFontFamily_ok416z_k$ = interceptFontFamily;
  PlatformResolveInterceptor$Companion$Default$1.prototype.interceptFontWeight_yj7vf0_k$ = interceptFontWeight;
  PlatformResolveInterceptor$Companion$Default$1.prototype.interceptFontStyle_aqbvzf_k$ = interceptFontStyle;
  PlatformResolveInterceptor$Companion$Default$1.prototype.interceptFontSynthesis_3mzb7i_k$ = interceptFontSynthesis;
  _no_name_provided__qut3iv.prototype.get_1pi7hg_k$ = get;
  _no_name_provided__qut3iv.prototype.fold_6dbyow_k$ = fold;
  _no_name_provided__qut3iv.prototype.minusKey_y21q55_k$ = minusKey;
  _no_name_provided__qut3iv.prototype.plus_rgw9wi_k$ = plus_0;
  Unspecified.prototype.merge_o4w5dp_k$ = merge;
  Unspecified.prototype.takeOrElse_9aen5f_k$ = takeOrElse;
  BrushStyle.prototype.merge_o4w5dp_k$ = merge;
  BrushStyle.prototype.takeOrElse_9aen5f_k$ = takeOrElse;
  ColorStyle.prototype.merge_o4w5dp_k$ = merge;
  ColorStyle.prototype.takeOrElse_9aen5f_k$ = takeOrElse;
  SkiaParagraph.prototype.getLineEnd$default_prmziz_k$ = getLineEnd$default;
  SkiaParagraph.prototype.paint$default_wa4bwc_k$ = paint$default;
  SkiaParagraph.prototype.paint$default_d3b6zb_k$ = paint$default_0;
  SkiaParagraph.prototype.paint$default_6evzch_k$ = paint$default_1;
  SkiaParagraphIntrinsics.prototype.get_hasStaleResolvedFonts_tun9ic_k$ = get_hasStaleResolvedFonts;
  //endregion
  //region block: init
  DefaultMaxLines = 2147483647;
  DefaultCacheSize = 8;
  CONCURRENT_MODIFICATION_EXCEPTIONS = true;
  BASE_SIZE = 4;
  DEBUG = false;
  TAG = 'SimpleArrayMap';
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FontStyle;
  _.$_$.b = createFontFamilyResolver_0;
  _.$_$.c = ImeAction;
  _.$_$.d = OffsetMapping;
  _.$_$.e = notifyFocusedRect;
  _.$_$.f = PlatformTextInputService;
  _.$_$.g = TextInputService;
  _.$_$.h = FontLoader;
  _.$_$.i = TextAlign;
  _.$_$.j = TextOverflow;
  _.$_$.k = MultiParagraphIntrinsics;
  _.$_$.l = MultiParagraph;
  _.$_$.m = TextLayoutResult;
  _.$_$.n = TextRange_0;
  _.$_$.o = TextRange;
  _.$_$.p = resolveDefaults;
  _.$_$.q = CommitTextCommand_init_$Create$;
  _.$_$.r = TextLayoutInput_init_$Create$_0;
  _.$_$.s = AnnotatedString_init_$Create$_1;
  _.$_$.t = TextStyle_init_$Create$_3;
  _.$_$.u = _TextOverflow___init__impl__obguoe;
  _.$_$.v = _TextOverflow___get_value__impl__vugm5i;
  _.$_$.w = _TextRange___get_collapsed__impl__cilesp;
  _.$_$.x = _TextRange___get_end__impl__gcdxpp;
  _.$_$.y = _TextRange___get_reversed__impl__emhnbm;
  _.$_$.z = _TextRange___get_start__impl__ww4t90;
  _.$_$.a1 = Companion_getInstance_14;
  _.$_$.b1 = Companion_getInstance_20;
  _.$_$.c1 = Companion_getInstance_27;
  _.$_$.d1 = Companion_getInstance_36;
  _.$_$.e1 = Companion_getInstance_42;
  _.$_$.f1 = TextPainter_getInstance;
  _.$_$.g1 = Companion_getInstance_11;
  _.$_$.h1 = Companion_getInstance_12;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-ui-text.js.map
