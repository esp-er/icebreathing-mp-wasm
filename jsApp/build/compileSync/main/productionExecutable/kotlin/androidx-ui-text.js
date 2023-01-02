(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui-unit.js', './androidx-ui-graphics.js', './androidx-ui-geometry.js', './androidx-runtime.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui-unit.js'), require('./androidx-ui-graphics.js'), require('./androidx-ui-geometry.js'), require('./androidx-runtime.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./skiko-kjs.js'));
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
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-text'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-ui-text'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-text'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'androidx-ui-text'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-text'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'androidx-ui-text'.");
    }
    root['androidx-ui-text'] = factory(typeof this['androidx-ui-text'] === 'undefined' ? {} : this['androidx-ui-text'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui-unit'], this['androidx-ui-graphics'], this['androidx-ui-geometry'], this['androidx-runtime'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_kotlin, kotlin_androidx_compose_ui_ui_unit, kotlin_androidx_compose_ui_ui_graphics, kotlin_androidx_compose_ui_ui_geometry, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var emptyList = kotlin_kotlin.$_$.g4;
  var Unit_getInstance = kotlin_kotlin.$_$.s2;
  var toString = kotlin_kotlin.$_$.x7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var hashCode = kotlin_kotlin.$_$.i7;
  var getStringHashCode = kotlin_kotlin.$_$.h7;
  var THROW_CCE = kotlin_kotlin.$_$.ba;
  var equals = kotlin_kotlin.$_$.a7;
  var classMeta = kotlin_kotlin.$_$.y6;
  var Comparator = kotlin_kotlin.$_$.p9;
  var compareValues = kotlin_kotlin.$_$.t5;
  var sortedWith = kotlin_kotlin.$_$.m5;
  var charSequenceGet = kotlin_kotlin.$_$.v6;
  var CharSequence = kotlin_kotlin.$_$.l9;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var coerceIn = kotlin_kotlin.$_$.l8;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_androidx_compose_ui_ui_unit.$_$.x1;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_androidx_compose_ui_ui_unit.$_$.y1;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_androidx_compose_ui_ui_unit.$_$.w1;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_androidx_compose_ui_ui_unit.$_$.v1;
  var coerceAtLeast = kotlin_kotlin.$_$.h8;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_androidx_compose_ui_ui_unit.$_$.q1;
  var Constraints$default = kotlin_androidx_compose_ui_ui_unit.$_$.o1;
  var get_lastIndex = kotlin_kotlin.$_$.u4;
  var addAll = kotlin_kotlin.$_$.s3;
  var plus = kotlin_kotlin.$_$.g5;
  var last = kotlin_kotlin.$_$.y4;
  var Path = kotlin_androidx_compose_ui_ui_graphics.$_$.u;
  var _Offset___get_y__impl__8bzhra = kotlin_androidx_compose_ui_ui_geometry.$_$.c1;
  var _Offset___get_x__impl__xvi35n = kotlin_androidx_compose_ui_ui_geometry.$_$.b1;
  var Offset = kotlin_androidx_compose_ui_ui_geometry.$_$.d;
  var getNumberHashCode = kotlin_kotlin.$_$.e7;
  var compareTo = kotlin_kotlin.$_$.z6;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.e;
  var lazy = kotlin_kotlin.$_$.pa;
  var KProperty1 = kotlin_kotlin.$_$.u8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.g7;
  var numberToInt = kotlin_kotlin.$_$.s7;
  var interfaceMeta = kotlin_kotlin.$_$.k7;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_androidx_compose_ui_ui_unit.$_$.u2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var Companion_getInstance = kotlin_androidx_compose_ui_ui_unit.$_$.g3;
  var get_isUnspecified = kotlin_androidx_compose_ui_ui_unit.$_$.c1;
  var TextUnit__hashCode_impl_qsmeov = kotlin_androidx_compose_ui_ui_unit.$_$.p2;
  var TextUnit = kotlin_androidx_compose_ui_ui_unit.$_$.t;
  var objectMeta = kotlin_kotlin.$_$.u7;
  var _Color___get_value__impl__1pls5m = kotlin_androidx_compose_ui_ui_graphics.$_$.k2;
  var Companion_getInstance_0 = kotlin_androidx_compose_ui_ui_graphics.$_$.g3;
  var Color__hashCode_impl_vjyivj = kotlin_androidx_compose_ui_ui_graphics.$_$.i2;
  var Color = kotlin_androidx_compose_ui_ui_graphics.$_$.k;
  var Companion_getInstance_1 = kotlin_androidx_compose_ui_ui_graphics.$_$.n3;
  var get_sp = kotlin_androidx_compose_ui_ui_unit.$_$.j1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d1;
  var toString_0 = kotlin_kotlin.$_$.ab;
  var Char = kotlin_kotlin.$_$.m9;
  var isCharSequence = kotlin_kotlin.$_$.m7;
  var _IntSize___get_height__impl__prv63b = kotlin_androidx_compose_ui_ui_unit.$_$.l2;
  var _IntSize___get_width__impl__d9yl4o = kotlin_androidx_compose_ui_ui_unit.$_$.n2;
  var IntSize__hashCode_impl_gm9mta = kotlin_androidx_compose_ui_ui_unit.$_$.k2;
  var IntSize = kotlin_androidx_compose_ui_ui_unit.$_$.s;
  var Constraints__hashCode_impl_ij7484 = kotlin_androidx_compose_ui_ui_unit.$_$.u1;
  var Constraints = kotlin_androidx_compose_ui_ui_unit.$_$.b;
  var Companion_getInstance_2 = kotlin_androidx_compose_ui_ui_geometry.$_$.j1;
  var Size = kotlin_androidx_compose_ui_ui_geometry.$_$.j;
  var Rect = kotlin_androidx_compose_ui_ui_geometry.$_$.f;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ra;
  var fillArrayVal = kotlin_kotlin.$_$.b7;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v;
  var NullPointerException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var ensureNotNull = kotlin_kotlin.$_$.ja;
  var first = kotlin_kotlin.$_$.m4;
  var Map = kotlin_kotlin.$_$.i3;
  var isInterface = kotlin_kotlin.$_$.n7;
  var MutableMap = kotlin_kotlin.$_$.o3;
  var MutableCollection = kotlin_kotlin.$_$.j3;
  var isObject = kotlin_kotlin.$_$.o7;
  var println = kotlin_kotlin.$_$.q6;
  var copyOf = kotlin_kotlin.$_$.d4;
  var copyOf_0 = kotlin_kotlin.$_$.c4;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var arrayCopy = kotlin_kotlin.$_$.t3;
  var ClassCastException = kotlin_kotlin.$_$.n9;
  var NullPointerException = kotlin_kotlin.$_$.y9;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.c1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.z1;
  var Long = kotlin_kotlin.$_$.v9;
  var List = kotlin_kotlin.$_$.g3;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.o1;
  var Exception = kotlin_kotlin.$_$.s9;
  var State = kotlin_androidx_compose_runtime_runtime.$_$.b1;
  var CoroutineImpl = kotlin_kotlin.$_$.k6;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v5;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.y5;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var get = kotlin_kotlin.$_$.f6;
  var fold = kotlin_kotlin.$_$.e6;
  var minusKey = kotlin_kotlin.$_$.g6;
  var plus_0 = kotlin_kotlin.$_$.j6;
  var CoroutineExceptionHandler = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.l2;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var Key_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var get_indices = kotlin_kotlin.$_$.t4;
  var yield_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var CancellationException = kotlin_kotlin.$_$.u5;
  var mutableStateOf$default = kotlin_androidx_compose_runtime_runtime.$_$.z1;
  var to = kotlin_kotlin.$_$.bb;
  var mutableListOf = kotlin_kotlin.$_$.e5;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.q2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.b2;
  var createFailure = kotlin_kotlin.$_$.ia;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.e2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.d2;
  var KMutableProperty1 = kotlin_kotlin.$_$.s8;
  var SuspendFunction1 = kotlin_kotlin.$_$.m6;
  var SuspendFunction0 = kotlin_kotlin.$_$.l6;
  var listOf = kotlin_kotlin.$_$.b5;
  var Comparable = kotlin_kotlin.$_$.o9;
  var AtomicReference = kotlin_androidx_compose_runtime_runtime.$_$.k;
  var Collection = kotlin_kotlin.$_$.c3;
  var Enum = kotlin_kotlin.$_$.q9;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.n2;
  var isNaN_0 = kotlin_kotlin.$_$.na;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_androidx_compose_ui_ui_graphics.$_$.d2;
  var NotImplementedError = kotlin_kotlin.$_$.x9;
  var listOf_0 = kotlin_kotlin.$_$.a5;
  var lazy_0 = kotlin_kotlin.$_$.qa;
  var Companion_getInstance_4 = kotlin_org_jetbrains_skiko_skiko.$_$.r7;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$_$.h7;
  var mapOf = kotlin_kotlin.$_$.d5;
  var KProperty0 = kotlin_kotlin.$_$.t8;
  var NotImplementedError_init_$Create$ = kotlin_kotlin.$_$.l;
  var getObjectHashCode = kotlin_kotlin.$_$.f7;
  var isArray = kotlin_kotlin.$_$.l7;
  var LineMetrics = kotlin_org_jetbrains_skiko_skiko.$_$.u7;
  var RectHeightMode_STRUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p;
  var RectWidthMode_TIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q;
  var firstOrNull = kotlin_kotlin.$_$.k4;
  var first_0 = kotlin_kotlin.$_$.n4;
  var Rect_0 = kotlin_org_jetbrains_skiko_skiko.$_$.i8;
  var TextBox = kotlin_org_jetbrains_skiko_skiko.$_$.z7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.c9;
  var lastOrNull = kotlin_kotlin.$_$.x4;
  var toComposeRect = kotlin_androidx_compose_ui_ui_graphics.$_$.g1;
  var RectHeightMode_MAX_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o;
  var asSkiaPath = kotlin_androidx_compose_ui_ui_graphics.$_$.b1;
  var getOrNull = kotlin_kotlin.$_$.b9;
  var Direction_RTL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j;
  var get_nativeCanvas = kotlin_androidx_compose_ui_ui_graphics.$_$.e1;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var FontCollection_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.u6;
  var TypefaceFontProvider = kotlin_org_jetbrains_skiko_skiko.$_$.b8;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$_$.j7;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.s;
  var copyToArray = kotlin_kotlin.$_$.e4;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.k7;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.w6;
  var toArgb = kotlin_androidx_compose_ui_ui_graphics.$_$.f1;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.z6;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.i7;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.w1;
  var _TextUnit___get_isSp__impl__8c3r6q = kotlin_androidx_compose_ui_ui_unit.$_$.r2;
  var _TextUnit___get_isEm__impl__esrmtl = kotlin_androidx_compose_ui_ui_unit.$_$.q2;
  var DecorationLineStyle_SOLID_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h;
  var DecorationStyle = kotlin_org_jetbrains_skiko_skiko.$_$.t7;
  var Shadow = kotlin_org_jetbrains_skiko_skiko.$_$.y7;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.o2;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.wa;
  var sortWith = kotlin_kotlin.$_$.k5;
  var asReversed = kotlin_kotlin.$_$.u3;
  var ParagraphStyle = kotlin_org_jetbrains_skiko_skiko.$_$.w7;
  var StrutStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.v6;
  var TextIndent = kotlin_org_jetbrains_skiko_skiko.$_$.a8;
  var Font_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.y6;
  var ParagraphBuilder = kotlin_org_jetbrains_skiko_skiko.$_$.v7;
  var charSequenceSubSequence = kotlin_kotlin.$_$.x6;
  var BaselineMode_ALPHABETIC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g;
  var PlaceholderStyle = kotlin_org_jetbrains_skiko_skiko.$_$.x7;
  var checkArithmetic = kotlin_androidx_compose_ui_ui_unit.$_$.x;
  var _TextUnit___get_rawType__impl__tu8yq5 = kotlin_androidx_compose_ui_ui_unit.$_$.t2;
  var pack = kotlin_androidx_compose_ui_ui_unit.$_$.f1;
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
  var Direction_LTR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i;
  //endregion
  //region block: pre-declaration
  function get_hasStaleResolvedFonts() {
    return false;
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
      var tmp_1 = other.c36();
      tmp = new BrushStyle(other.y48_1, takeOrElse_0(tmp_1, TextForegroundStyle$merge$lambda(this)));
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
          tmp = other.f3x(TextForegroundStyle$merge$lambda_0(this));
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
  function paint$default(canvas, brush, alpha, shadow, textDecoration, drawStyle, $mask0, $handler) {
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
      this.p49(canvas, brush, alpha, shadow, textDecoration, drawStyle);
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
  var EmptyAnnotatedString;
  function Range_init_$Init$(item, start, end, $this) {
    Range.call($this, item, start, end, '');
    return $this;
  }
  function Range_init_$Create$(item, start, end) {
    return Range_init_$Init$(item, start, end, Object.create(Range.prototype));
  }
  function AnnotatedString_init_$Init$(text, spanStyles, paragraphStyles, $this) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$2 = emptyList();
    AnnotatedString.call($this, text, spanStyles, paragraphStyles, tmp$ret$2);
    return $this;
  }
  function AnnotatedString_init_$Init$_0(text, spanStyles, paragraphStyles, $mask0, $marker, $this) {
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
    AnnotatedString_init_$Init$(text, spanStyles, paragraphStyles, $this);
    return $this;
  }
  function AnnotatedString_init_$Create$(text, spanStyles, paragraphStyles, $mask0, $marker) {
    return AnnotatedString_init_$Init$_0(text, spanStyles, paragraphStyles, $mask0, $marker, Object.create(AnnotatedString.prototype));
  }
  function Range(item, start, end, tag) {
    this.i3s_1 = item;
    this.j3s_1 = start;
    this.k3s_1 = end;
    this.l3s_1 = tag;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.j3s_1 <= this.k3s_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.Range.<anonymous>' call
      tmp$ret$0 = 'Reversed range is not supported';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  Range.prototype.m3s = function () {
    return this.i3s_1;
  };
  Range.prototype.o1 = function () {
    return this.j3s_1;
  };
  Range.prototype.n3s = function () {
    return this.k3s_1;
  };
  Range.prototype.w2q = function () {
    return this.l3s_1;
  };
  Range.prototype.z3 = function () {
    return this.i3s_1;
  };
  Range.prototype.a4 = function () {
    return this.j3s_1;
  };
  Range.prototype.s3k = function () {
    return this.k3s_1;
  };
  Range.prototype.toString = function () {
    return 'Range(item=' + this.i3s_1 + ', start=' + this.j3s_1 + ', end=' + this.k3s_1 + ', tag=' + this.l3s_1 + ')';
  };
  Range.prototype.hashCode = function () {
    var result = this.i3s_1 == null ? 0 : hashCode(this.i3s_1);
    result = imul(result, 31) + this.j3s_1 | 0;
    result = imul(result, 31) + this.k3s_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.l3s_1) | 0;
    return result;
  };
  Range.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Range))
      return false;
    var tmp0_other_with_cast = other instanceof Range ? other : THROW_CCE();
    if (!equals(this.i3s_1, tmp0_other_with_cast.i3s_1))
      return false;
    if (!(this.j3s_1 === tmp0_other_with_cast.j3s_1))
      return false;
    if (!(this.k3s_1 === tmp0_other_with_cast.k3s_1))
      return false;
    if (!(this.l3s_1 === tmp0_other_with_cast.l3s_1))
      return false;
    return true;
  };
  Range.$metadata$ = classMeta('Range');
  function sam$kotlin_Comparator$0(function_0) {
    this.o3s_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.x = function (a, b) {
    return this.o3s_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.x(a, b);
  };
  sam$kotlin_Comparator$0.$metadata$ = classMeta('sam$kotlin_Comparator$0', [Comparator]);
  function AnnotatedString$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
    tmp$ret$0 = a.j3s_1;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
    tmp$ret$1 = b.j3s_1;
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function AnnotatedString(text, spanStyles, paragraphStyles, annotations) {
    this.p3s_1 = text;
    this.q3s_1 = spanStyles;
    this.r3s_1 = paragraphStyles;
    this.s3s_1 = annotations;
    var lastStyleEnd = -1;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.sortedBy' call
    var tmp0_sortedBy = this.r3s_1;
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = AnnotatedString$lambda;
    tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    tmp$ret$1 = sortedWith(tmp0_sortedBy, tmp$ret$0);
    var tmp1_fastForEach = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp1_fastForEach.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp1_fastForEach.g(index);
        // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
        // Inline function 'kotlin.require' call
        var tmp0_require = item.j3s_1 >= lastStyleEnd;
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_require) {
          var tmp$ret$2;
          // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>.<anonymous>' call
          tmp$ret$2 = 'ParagraphStyle should not overlap';
          var message = tmp$ret$2;
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
        // Inline function 'kotlin.require' call
        var tmp1_require = item.k3s_1 <= this.p3s_1.length;
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp1_require) {
          var tmp$ret$3;
          // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>.<anonymous>' call
          tmp$ret$3 = 'ParagraphStyle range [' + item.j3s_1 + ', ' + item.k3s_1 + ')' + ' is out of boundary';
          var message_0 = tmp$ret$3;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
        lastStyleEnd = item.k3s_1;
      }
       while (inductionVariable <= last);
  }
  AnnotatedString.prototype.t3s = function () {
    return this.p3s_1;
  };
  AnnotatedString.prototype.u3s = function () {
    return this.q3s_1;
  };
  AnnotatedString.prototype.f8 = function () {
    return this.p3s_1.length;
  };
  AnnotatedString.prototype.g8 = function (index) {
    return charSequenceGet(this.p3s_1, index);
  };
  AnnotatedString.prototype.h8 = function (startIndex, endIndex) {
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
    if (startIndex === 0 ? endIndex === this.p3s_1.length : false)
      return this;
    var tmp$ret$2;
    // Inline function 'kotlin.text.substring' call
    var tmp1_substring = this.p3s_1;
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = tmp1_substring;
    tmp$ret$2 = tmp$ret$1.substring(startIndex, endIndex);
    var text = tmp$ret$2;
    return new AnnotatedString(text, filterRanges(this.q3s_1, startIndex, endIndex), filterRanges(this.r3s_1, startIndex, endIndex), filterRanges(this.s3s_1, startIndex, endIndex));
  };
  AnnotatedString.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnnotatedString))
      return false;
    if (!(this.p3s_1 === other.p3s_1))
      return false;
    if (!equals(this.q3s_1, other.q3s_1))
      return false;
    if (!equals(this.r3s_1, other.r3s_1))
      return false;
    if (!equals(this.s3s_1, other.s3s_1))
      return false;
    return true;
  };
  AnnotatedString.prototype.hashCode = function () {
    var result = getStringHashCode(this.p3s_1);
    result = imul(31, result) + hashCode(this.q3s_1) | 0;
    result = imul(31, result) + hashCode(this.r3s_1) | 0;
    result = imul(31, result) + hashCode(this.s3s_1) | 0;
    return result;
  };
  AnnotatedString.prototype.toString = function () {
    return this.p3s_1;
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
    var target = ArrayList_init_$Create$(ranges.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = ranges.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = ranges.g(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
        tmp$ret$1 = intersect(start, end, item.j3s_1, item.k3s_1);
        if (tmp$ret$1) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.a(item);
        }
      }
       while (inductionVariable <= last);
    tmp$ret$2 = target;
    var tmp1_fastMap = tmp$ret$2;
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$(tmp1_fastMap.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = tmp1_fastMap.f() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = tmp1_fastMap.g(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
        var tmp$ret$3;
        // Inline function 'kotlin.comparisons.maxOf' call
        var tmp0_maxOf = item_0.j3s_1;
        tmp$ret$3 = Math.max(start, tmp0_maxOf);
        var tmp = tmp$ret$3 - start | 0;
        var tmp$ret$4;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp1_minOf = item_0.k3s_1;
        tmp$ret$4 = Math.min(end, tmp1_minOf);
        tmp$ret$5 = new Range(item_0.i3s_1, tmp, tmp$ret$4 - start | 0, item_0.l3s_1);
        var tmp0_plusAssign = tmp$ret$5;
        target_0.a(tmp0_plusAssign);
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
    var target = ArrayList_init_$Create$(tmp0_fastMap.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastMap.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastMap.g(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle.<anonymous>' call
        var annotatedString = substringWithoutParagraphStyles(_this__u8e3s4, item.j3s_1, item.k3s_1);
        tmp$ret$0 = block(annotatedString, item);
        var tmp0_plusAssign = tmp$ret$0;
        target.a(tmp0_plusAssign);
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
      var tmp0_substring = _this__u8e3s4.p3s_1;
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
    return AnnotatedString_init_$Create$(tmp_0, tmp_1, null, 4, null);
  }
  function normalizedParagraphStyles(_this__u8e3s4, defaultParagraphStyle) {
    init_properties_AnnotatedString_kt_m8toad();
    var length = _this__u8e3s4.p3s_1.length;
    var paragraphStyles = _this__u8e3s4.r3s_1;
    var lastOffset = 0;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var result = tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = paragraphStyles.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = paragraphStyles.g(index);
        // Inline function 'androidx.compose.ui.text.normalizedParagraphStyles.<anonymous>' call
        var style = item.z3();
        var start = item.a4();
        var end = item.s3k();
        if (!(start === lastOffset)) {
          result.a(Range_init_$Create$(defaultParagraphStyle, lastOffset, start));
        }
        result.a(Range_init_$Create$(defaultParagraphStyle.d3t(style), start, end));
        lastOffset = end;
      }
       while (inductionVariable <= last);
    if (!(lastOffset === length)) {
      result.a(Range_init_$Create$(defaultParagraphStyle, lastOffset, length));
    }
    if (result.h()) {
      result.a(Range_init_$Create$(defaultParagraphStyle, 0, 0));
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
    if (start === 0 ? end >= _this__u8e3s4.p3s_1.length : false) {
      return _this__u8e3s4.q3s_1;
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    var tmp0_fastFilter = _this__u8e3s4.q3s_1;
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(tmp0_fastFilter.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastFilter.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastFilter.g(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.text.getLocalStyles.<anonymous>' call
        tmp$ret$1 = intersect(start, end, item.j3s_1, item.k3s_1);
        if (tmp$ret$1) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.a(item);
        }
      }
       while (inductionVariable <= last);
    tmp$ret$2 = target;
    var tmp1_fastMap = tmp$ret$2;
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$(tmp1_fastMap.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = tmp1_fastMap.f() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = tmp1_fastMap.g(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.text.getLocalStyles.<anonymous>' call
        tmp$ret$3 = Range_init_$Create$(item_0.i3s_1, coerceIn(item_0.j3s_1, start, end) - start | 0, coerceIn(item_0.k3s_1, start, end) - start | 0);
        var tmp0_plusAssign = tmp$ret$3;
        target_0.a(tmp0_plusAssign);
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
      EmptyAnnotatedString = AnnotatedString_init_$Create$('', null, null, 6, null);
    }
  }
  function _get_annotatedString__kqljtk($this) {
    return $this.k3t_1.e3t_1;
  }
  function MultiParagraph(intrinsics, constraints, maxLines, ellipsis) {
    this.k3t_1 = intrinsics;
    this.l3t_1 = maxLines;
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
    tmp$ret$1 = ArrayList_init_$Create$_0();
    var paragraphInfoList = tmp$ret$1;
    var infoList = this.k3t_1.i3t_1;
    var inductionVariable = 0;
    var last = infoList.f() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paragraphInfo = infoList.g(index);
        var tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
        var tmp_0;
        if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints)) {
          tmp_0 = coerceAtLeast(_Constraints___get_maxHeight__impl__dt3e8z(constraints) - ceilToInt(currentHeight) | 0, 0);
        } else {
          tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
        }
        var paragraph = Paragraph(paragraphInfo.t3t_1, Constraints$default(0, tmp, 0, tmp_0, 5, null), this.l3t_1 - currentLineCount | 0, ellipsis);
        var paragraphTop = currentHeight;
        var paragraphBottom = currentHeight + paragraph.b2j();
        currentHeight = paragraphBottom;
        var startLineIndex = currentLineCount;
        var endLineIndex = startLineIndex + paragraph.w3t() | 0;
        currentLineCount = endLineIndex;
        paragraphInfoList.a(new ParagraphInfo(paragraph, paragraphInfo.u3t_1, paragraphInfo.v3t_1, startLineIndex, endLineIndex, paragraphTop, paragraphBottom));
        if (paragraph.x3t() ? true : endLineIndex === this.l3t_1 ? !(index === get_lastIndex(this.k3t_1.i3t_1)) : false) {
          didExceedMaxLines = true;
          break $l$loop;
        }
      }
       while (inductionVariable <= last);
    this.o3t_1 = currentHeight;
    this.p3t_1 = currentLineCount;
    this.m3t_1 = didExceedMaxLines;
    this.r3t_1 = paragraphInfoList;
    this.n3t_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_1 = this;
    var tmp$ret$12;
    // Inline function 'kotlin.let' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.text.fastFlatMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(paragraphInfoList.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = paragraphInfoList.f() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item = paragraphInfoList.g(index_0);
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
        var tmp0_fastMap = item.y3t_1.f3u();
        // Inline function 'kotlin.contracts.contract' call
        var target_0 = ArrayList_init_$Create$(tmp0_fastMap.f());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last_1 = tmp0_fastMap.f() - 1 | 0;
        if (inductionVariable_1 <= last_1)
          do {
            var index_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item_0 = tmp0_fastMap.g(index_1);
            // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            var tmp$ret$2;
            // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>.<anonymous>' call
            var tmp0_safe_receiver = item_0;
            tmp$ret$2 = tmp0_safe_receiver == null ? null : item.g3u(tmp0_safe_receiver);
            var tmp0_plusAssign = tmp$ret$2;
            target_0.a(tmp0_plusAssign);
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
    if (tmp1_let.f() < this.k3t_1.f3t_1.f()) {
      var tmp$ret$10;
      // Inline function 'kotlin.collections.List' call
      var tmp0_List = this.k3t_1.f3t_1.f() - tmp1_let.f() | 0;
      var tmp$ret$9;
      // Inline function 'kotlin.collections.MutableList' call
      var list_0 = ArrayList_init_$Create$(tmp0_List);
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
          list_0.a(tmp$ret$8);
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
    tmp_1.q3t_1 = tmp$ret$12;
    this.s3t_1 = 0;
  }
  MultiParagraph.prototype.h3u = function () {
    return this.k3t_1;
  };
  MultiParagraph.prototype.a2j = function () {
    return this.n3t_1;
  };
  MultiParagraph.prototype.b2j = function () {
    return this.o3t_1;
  };
  MultiParagraph.prototype.i3u = function () {
    var tmp;
    if (this.r3t_1.h()) {
      tmp = 0.0;
    } else {
      tmp = this.r3t_1.g(0).y3t_1.i3u();
    }
    return tmp;
  };
  MultiParagraph.prototype.j3u = function () {
    var tmp;
    if (this.r3t_1.h()) {
      tmp = 0.0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      var tmp0_with = last(this.r3t_1);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.MultiParagraph.<get-lastBaseline>.<anonymous>' call
      tmp$ret$0 = tmp0_with.k3u(tmp0_with.y3t_1.j3u());
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  MultiParagraph.prototype.l3u = function (canvas, color, shadow, decoration) {
    canvas.a38();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var tmp0_fastForEach = this.r3t_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.g(index);
        // Inline function 'androidx.compose.ui.text.MultiParagraph.paint.<anonymous>' call
        item.y3t_1.l3u(canvas, color, shadow, decoration);
        canvas.d38(0.0, item.y3t_1.b2j());
      }
       while (inductionVariable <= last);
    canvas.b38();
  };
  MultiParagraph.prototype.m3u = function (canvas, brush, alpha, shadow, decoration) {
    drawMultiParagraph(this, canvas, brush, alpha, shadow, decoration);
  };
  MultiParagraph.prototype.n3u = function (start, end) {
    // Inline function 'kotlin.require' call
    var tmp0_require = (0 <= start ? start <= end : false) ? end <= _get_annotatedString__kqljtk(this).p3s_1.length : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.MultiParagraph.getPathForRange.<anonymous>' call
      tmp$ret$0 = 'Start(' + start + ') or End(' + end + ') is out of range [0..' + _get_annotatedString__kqljtk(this).p3s_1.length + '),' + ' or start > end!';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (start === end)
      return Path();
    var paragraphIndex = findParagraphByIndex(this.r3t_1, start);
    var path = Path();
    var inductionVariable = paragraphIndex;
    var last = this.r3t_1.f();
    if (inductionVariable < last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var p = this.r3t_1.g(i);
        if (p.z3t_1 >= end)
          break $l$loop_0;
        if (p.z3t_1 === p.a3u_1)
          continue $l$loop_0;
        var tmp$ret$1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp = p.p3u(p.y3t_1.n3u(p.o3u(start), p.o3u(end)));
        path.z3f(tmp, null, 2, null);
        tmp$ret$1 = Unit_getInstance();
      }
       while (inductionVariable < last);
    return path;
  };
  MultiParagraph.prototype.q3u = function (position) {
    var paragraphIndex = _Offset___get_y__impl__8bzhra(position) <= 0.0 ? 0 : _Offset___get_y__impl__8bzhra(position) >= this.o3t_1 ? get_lastIndex(this.r3t_1) : findParagraphByY(this.r3t_1, _Offset___get_y__impl__8bzhra(position));
    var tmp$ret$2;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.r3t_1.g(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getOffsetForPosition.<anonymous>' call
    var tmp;
    if (tmp0_with.f8() === 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.max' call
      var tmp0_max = tmp0_with.z3t_1 - 1 | 0;
      tmp$ret$0 = Math.max(0, tmp0_max);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_with.s3u(tmp0_with.y3t_1.q3u(tmp0_with.r3u(position)));
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  MultiParagraph.$metadata$ = classMeta('MultiParagraph');
  function ParagraphInfo(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom) {
    this.y3t_1 = paragraph;
    this.z3t_1 = startIndex;
    this.a3u_1 = endIndex;
    this.b3u_1 = startLineIndex;
    this.c3u_1 = endLineIndex;
    this.d3u_1 = top;
    this.e3u_1 = bottom;
  }
  ParagraphInfo.prototype.t3u = function () {
    return this.y3t_1;
  };
  ParagraphInfo.prototype.j1p = function () {
    return this.z3t_1;
  };
  ParagraphInfo.prototype.u3u = function () {
    return this.a3u_1;
  };
  ParagraphInfo.prototype.z2i = function () {
    return this.d3u_1;
  };
  ParagraphInfo.prototype.v3u = function () {
    return this.e3u_1;
  };
  ParagraphInfo.prototype.f8 = function () {
    return this.a3u_1 - this.z3t_1 | 0;
  };
  ParagraphInfo.prototype.o3u = function (_this__u8e3s4) {
    return coerceIn(_this__u8e3s4, this.z3t_1, this.a3u_1) - this.z3t_1 | 0;
  };
  ParagraphInfo.prototype.s3u = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.z3t_1 | 0;
  };
  ParagraphInfo.prototype.k3u = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.d3u_1;
  };
  ParagraphInfo.prototype.r3u = function (_this__u8e3s4) {
    return Offset(_Offset___get_x__impl__xvi35n(_this__u8e3s4), _Offset___get_y__impl__8bzhra(_this__u8e3s4) - this.d3u_1);
  };
  ParagraphInfo.prototype.g3u = function (_this__u8e3s4) {
    return _this__u8e3s4.c2j(Offset(0.0, this.d3u_1));
  };
  ParagraphInfo.prototype.p3u = function (_this__u8e3s4) {
    _this__u8e3s4.a3g(Offset(0.0, this.d3u_1));
    return _this__u8e3s4;
  };
  ParagraphInfo.prototype.toString = function () {
    return 'ParagraphInfo(paragraph=' + this.y3t_1 + ', startIndex=' + this.z3t_1 + ', endIndex=' + this.a3u_1 + ', startLineIndex=' + this.b3u_1 + ', endLineIndex=' + this.c3u_1 + ', top=' + this.d3u_1 + ', bottom=' + this.e3u_1 + ')';
  };
  ParagraphInfo.prototype.hashCode = function () {
    var result = hashCode(this.y3t_1);
    result = imul(result, 31) + this.z3t_1 | 0;
    result = imul(result, 31) + this.a3u_1 | 0;
    result = imul(result, 31) + this.b3u_1 | 0;
    result = imul(result, 31) + this.c3u_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.d3u_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e3u_1) | 0;
    return result;
  };
  ParagraphInfo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphInfo ? other : THROW_CCE();
    if (!equals(this.y3t_1, tmp0_other_with_cast.y3t_1))
      return false;
    if (!(this.z3t_1 === tmp0_other_with_cast.z3t_1))
      return false;
    if (!(this.a3u_1 === tmp0_other_with_cast.a3u_1))
      return false;
    if (!(this.b3u_1 === tmp0_other_with_cast.b3u_1))
      return false;
    if (!(this.c3u_1 === tmp0_other_with_cast.c3u_1))
      return false;
    if (!equals(this.d3u_1, tmp0_other_with_cast.d3u_1))
      return false;
    if (!equals(this.e3u_1, tmp0_other_with_cast.e3u_1))
      return false;
    return true;
  };
  ParagraphInfo.$metadata$ = classMeta('ParagraphInfo');
  function findParagraphByIndex(paragraphInfoList, index) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.f() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.g(mid);
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.findParagraphByIndex.<anonymous>' call
        tmp$ret$0 = midVal.z3t_1 > index ? 1 : midVal.a3u_1 <= index ? -1 : 0;
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
      var high = paragraphInfoList.f() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.g(mid);
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.findParagraphByY.<anonymous>' call
        tmp$ret$0 = midVal.d3u_1 > y ? 1 : midVal.e3u_1 <= y ? -1 : 0;
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
    var high = _this__u8e3s4.f() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.g(mid);
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
  function resolveTextDirection($this, style, defaultStyle) {
    var tmp0_safe_receiver = style.w3s_1;
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
      tmp_1 = style.w3u(null, defaultStyle.w3s_1, null, null, 13, null);
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
        var tmp0_fastMaxBy = this$0.i3t_1;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp0_fastMaxBy.h()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = tmp0_fastMaxBy.g(0);
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.minIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
        var tmp1__anonymous__uwfjfc = maxElem;
        tmp$ret$1 = tmp1__anonymous__uwfjfc.t3t_1.q2y();
        var maxValue = tmp$ret$1;
        var inductionVariable = 1;
        var last = get_lastIndex(tmp0_fastMaxBy);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = tmp0_fastMaxBy.g(i);
            var tmp$ret$2;
            // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.minIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
            tmp$ret$2 = e.t3t_1.q2y();
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
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t3t_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q2y();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        var tmp0_fastMaxBy = this$0.i3t_1;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp0_fastMaxBy.h()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = tmp0_fastMaxBy.g(0);
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.maxIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
        var tmp1__anonymous__uwfjfc = maxElem;
        tmp$ret$1 = tmp1__anonymous__uwfjfc.t3t_1.r2y();
        var maxValue = tmp$ret$1;
        var inductionVariable = 1;
        var last = get_lastIndex(tmp0_fastMaxBy);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = tmp0_fastMaxBy.g(i);
            var tmp$ret$2;
            // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.maxIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
            tmp$ret$2 = e.t3t_1.r2y();
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
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t3t_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.r2y();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics(annotatedString, style, placeholders, density, fontFamilyResolver) {
    this.e3t_1 = annotatedString;
    this.f3t_1 = placeholders;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    tmp.g3t_1 = lazy(tmp_0, MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this));
    var tmp_1 = this;
    var tmp_2 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_1.h3t_1 = lazy(tmp_2, MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this));
    var paragraphStyle = style.a3v();
    var tmp_3 = this;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle' call
    var tmp0_mapEachParagraphStyle = this.e3t_1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp0_fastMap = normalizedParagraphStyles(tmp0_mapEachParagraphStyle, paragraphStyle);
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(tmp0_fastMap.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastMap.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastMap.g(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle.<anonymous>' call
        var annotatedString_0 = substringWithoutParagraphStyles(tmp0_mapEachParagraphStyle, item.j3s_1, item.k3s_1);
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.<anonymous>' call
        var currentParagraphStyle = resolveTextDirection(this, item.i3s_1, paragraphStyle);
        tmp$ret$0 = new ParagraphIntrinsicInfo(ParagraphIntrinsics_0(annotatedString_0.p3s_1, style.b3v(currentParagraphStyle), annotatedString_0.q3s_1, getLocalPlaceholders(this.f3t_1, item.j3s_1, item.k3s_1), density, fontFamilyResolver), item.j3s_1, item.k3s_1);
        tmp$ret$1 = tmp$ret$0;
        var tmp0_plusAssign = tmp$ret$1;
        target.a(tmp0_plusAssign);
      }
       while (inductionVariable <= last);
    tmp$ret$2 = target;
    tmp$ret$3 = tmp$ret$2;
    tmp_3.i3t_1 = tmp$ret$3;
    this.j3t_1 = 0;
  }
  MultiParagraphIntrinsics.prototype.c3v = function () {
    return this.f3t_1;
  };
  MultiParagraphIntrinsics.prototype.q2y = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = minIntrinsicWidth$factory();
    tmp$ret$0 = this.g3t_1.i2();
    return tmp$ret$0;
  };
  MultiParagraphIntrinsics.prototype.r2y = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = maxIntrinsicWidth$factory();
    tmp$ret$0 = this.h3t_1.i2();
    return tmp$ret$0;
  };
  MultiParagraphIntrinsics.prototype.d3v = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      var tmp0_fastAny = this.i3t_1;
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
          // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.<get-hasStaleResolvedFonts>.<anonymous>' call
          tmp$ret$0 = item.t3t_1.d3v();
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
    this.t3t_1 = intrinsics;
    this.u3t_1 = startIndex;
    this.v3t_1 = endIndex;
  }
  ParagraphIntrinsicInfo.prototype.h3u = function () {
    return this.t3t_1;
  };
  ParagraphIntrinsicInfo.prototype.toString = function () {
    return 'ParagraphIntrinsicInfo(intrinsics=' + this.t3t_1 + ', startIndex=' + this.u3t_1 + ', endIndex=' + this.v3t_1 + ')';
  };
  ParagraphIntrinsicInfo.prototype.hashCode = function () {
    var result = hashCode(this.t3t_1);
    result = imul(result, 31) + this.u3t_1 | 0;
    result = imul(result, 31) + this.v3t_1 | 0;
    return result;
  };
  ParagraphIntrinsicInfo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphIntrinsicInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphIntrinsicInfo ? other : THROW_CCE();
    if (!equals(this.t3t_1, tmp0_other_with_cast.t3t_1))
      return false;
    if (!(this.u3t_1 === tmp0_other_with_cast.u3t_1))
      return false;
    if (!(this.v3t_1 === tmp0_other_with_cast.v3t_1))
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
    var target = ArrayList_init_$Create$(_this__u8e3s4.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.g(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>' call
        tmp$ret$0 = intersect(start, end, item.j3s_1, item.k3s_1);
        if (tmp$ret$0) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.a(item);
        }
      }
       while (inductionVariable <= last);
    tmp$ret$1 = target;
    var tmp0_fastMap = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$(tmp0_fastMap.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = tmp0_fastMap.f() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = tmp0_fastMap.g(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>' call
        // Inline function 'kotlin.require' call
        var tmp0_require = start <= item_0.j3s_1 ? item_0.k3s_1 <= end : false;
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_require) {
          var tmp$ret$2;
          // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>.<anonymous>' call
          tmp$ret$2 = 'placeholder can not overlap with paragraph.';
          var message = tmp$ret$2;
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
        tmp$ret$3 = Range_init_$Create$(item_0.i3s_1, item_0.j3s_1 - start | 0, item_0.k3s_1 - start | 0);
        var tmp0_plusAssign = tmp$ret$3;
        target_0.a(tmp0_plusAssign);
      }
       while (inductionVariable_0 <= last_0);
    tmp$ret$4 = target_0;
    return tmp$ret$4;
  }
  function minIntrinsicWidth$factory() {
    return getPropertyCallableRef('minIntrinsicWidth', 1, KProperty1, function (receiver) {
      return receiver.q2y();
    }, null);
  }
  function maxIntrinsicWidth$factory() {
    return getPropertyCallableRef('maxIntrinsicWidth', 1, KProperty1, function (receiver) {
      return receiver.r2y();
    }, null);
  }
  function ceilToInt(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.ceil' call
    tmp$ret$0 = Math.ceil(_this__u8e3s4);
    return numberToInt(tmp$ret$0);
  }
  function Paragraph(paragraphIntrinsics, constraints, maxLines, ellipsis) {
    return ActualParagraph(paragraphIntrinsics, maxLines, ellipsis, constraints);
  }
  function ParagraphIntrinsics() {
  }
  ParagraphIntrinsics.$metadata$ = interfaceMeta('ParagraphIntrinsics');
  function ParagraphIntrinsics_0(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    return ActualParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver);
  }
  function get_DefaultLineHeight() {
    init_properties_ParagraphStyle_kt_l2iumv();
    return DefaultLineHeight;
  }
  var DefaultLineHeight;
  function mergePlatformStyle($this, other) {
    if ($this.z3s_1 == null)
      return other;
    if (other == null)
      return $this.z3s_1;
    return $this.z3s_1.f3v(other);
  }
  function ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens) {
    this.v3s_1 = textAlign;
    this.w3s_1 = textDirection;
    this.x3s_1 = lineHeight;
    this.y3s_1 = textIndent;
    this.z3s_1 = platformStyle;
    this.a3t_1 = lineHeightStyle;
    this.b3t_1 = lineBreak;
    this.c3t_1 = hyphens;
    if (!equals(this.x3s_1, Companion_getInstance().x2l_1)) {
      // Inline function 'kotlin.check' call
      var tmp0_check = _TextUnit___get_value__impl__hpbx0k(this.x3s_1) >= 0.0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.ParagraphStyle.<anonymous>' call
        tmp$ret$0 = "lineHeight can't be negative (" + _TextUnit___get_value__impl__hpbx0k(this.x3s_1) + ')';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  ParagraphStyle_0.prototype.g3v = function () {
    return this.x3s_1;
  };
  ParagraphStyle_0.prototype.d3t = function (other) {
    if (other == null)
      return this;
    var tmp;
    if (get_isUnspecified(other.x3s_1)) {
      tmp = this.x3s_1;
    } else {
      tmp = other.x3s_1;
    }
    var tmp6_lineHeight = tmp;
    var tmp2_elvis_lhs = other.y3s_1;
    var tmp7_textIndent = tmp2_elvis_lhs == null ? this.y3s_1 : tmp2_elvis_lhs;
    var tmp0_elvis_lhs = other.v3s_1;
    var tmp_0;
    var tmp_1 = tmp0_elvis_lhs;
    if ((tmp_1 == null ? null : new TextAlign(tmp_1)) == null) {
      tmp_0 = this.v3s_1;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var tmp8_textAlign = tmp_0;
    var tmp1_elvis_lhs = other.w3s_1;
    var tmp_2;
    var tmp_3 = tmp1_elvis_lhs;
    if ((tmp_3 == null ? null : new TextDirection(tmp_3)) == null) {
      tmp_2 = this.w3s_1;
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var tmp9_textDirection = tmp_2;
    var tmp10_platformStyle = mergePlatformStyle(this, other.z3s_1);
    var tmp3_elvis_lhs = other.a3t_1;
    var tmp11_lineHeightStyle = tmp3_elvis_lhs == null ? this.a3t_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = other.b3t_1;
    var tmp12_lineBreak = tmp4_elvis_lhs == null ? this.b3t_1 : tmp4_elvis_lhs;
    var tmp5_elvis_lhs = other.c3t_1;
    var tmp13_hyphens = tmp5_elvis_lhs == null ? this.c3t_1 : tmp5_elvis_lhs;
    return new ParagraphStyle_0(tmp8_textAlign, tmp9_textDirection, tmp6_lineHeight, tmp7_textIndent, tmp10_platformStyle, tmp11_lineHeightStyle, tmp12_lineBreak, tmp13_hyphens);
  };
  ParagraphStyle_0.prototype.h3v = function (textAlign, textDirection, lineHeight, textIndent) {
    return new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, this.z3s_1, this.a3t_1, this.b3t_1, this.c3t_1);
  };
  ParagraphStyle_0.prototype.w3u = function (textAlign, textDirection, lineHeight, textIndent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      textAlign = this.v3s_1;
    if (!(($mask0 & 2) === 0))
      textDirection = this.w3s_1;
    if (!(($mask0 & 4) === 0))
      lineHeight = this.x3s_1;
    if (!(($mask0 & 8) === 0))
      textIndent = this.y3s_1;
    return this.h3v(textAlign, textDirection, lineHeight, textIndent);
  };
  ParagraphStyle_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphStyle_0))
      return false;
    var tmp = this.v3s_1;
    var tmp_0 = tmp == null ? null : new TextAlign(tmp);
    var tmp_1 = other.v3s_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new TextAlign(tmp_1)))
      return false;
    var tmp_2 = this.w3s_1;
    var tmp_3 = tmp_2 == null ? null : new TextDirection(tmp_2);
    var tmp_4 = other.w3s_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new TextDirection(tmp_4)))
      return false;
    if (!equals(this.x3s_1, other.x3s_1))
      return false;
    if (!equals(this.y3s_1, other.y3s_1))
      return false;
    if (!equals(this.z3s_1, other.z3s_1))
      return false;
    if (!equals(this.a3t_1, other.a3t_1))
      return false;
    if (!equals(this.b3t_1, other.b3t_1))
      return false;
    if (!equals(this.c3t_1, other.c3t_1))
      return false;
    return true;
  };
  ParagraphStyle_0.prototype.hashCode = function () {
    var tmp0_safe_receiver = this.v3s_1;
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
    var tmp2_safe_receiver = this.w3s_1;
    var tmp_2;
    var tmp_3 = tmp2_safe_receiver;
    if ((tmp_3 == null ? null : new TextDirection(tmp_3)) == null) {
      tmp_2 = null;
    } else {
      tmp_2 = TextDirection__hashCode_impl_g63nwg(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_2;
    result = tmp_1 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.x3s_1) | 0;
    var tmp_4 = imul(31, result);
    var tmp4_safe_receiver = this.y3s_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_4 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_5 = imul(31, result);
    var tmp6_safe_receiver = this.z3s_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.hashCode();
    result = tmp_5 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_6 = imul(31, result);
    var tmp8_safe_receiver = this.a3t_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.hashCode();
    result = tmp_6 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    var tmp_7 = imul(31, result);
    var tmp10_safe_receiver = this.b3t_1;
    var tmp11_elvis_lhs = tmp10_safe_receiver == null ? null : hashCode(tmp10_safe_receiver);
    result = tmp_7 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    var tmp_8 = imul(31, result);
    var tmp12_safe_receiver = this.c3t_1;
    var tmp13_elvis_lhs = tmp12_safe_receiver == null ? null : hashCode(tmp12_safe_receiver);
    result = tmp_8 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    return result;
  };
  ParagraphStyle_0.prototype.toString = function () {
    var tmp = this.v3s_1;
    var tmp_0 = 'ParagraphStyle(' + ('textAlign=' + (tmp == null ? null : new TextAlign(tmp)) + ', ');
    var tmp_1 = this.w3s_1;
    return tmp_0 + ('textDirection=' + (tmp_1 == null ? null : new TextDirection(tmp_1)) + ', ') + ('lineHeight=' + new TextUnit(this.x3s_1) + ', ') + ('textIndent=' + this.y3s_1 + ', ') + ('platformStyle=' + this.z3s_1 + ', ') + ('lineHeightStyle=' + this.a3t_1 + ', ') + ('lineBreak=' + this.b3t_1 + ', ') + ('hyphens=' + this.c3t_1) + ')';
  };
  ParagraphStyle_0.$metadata$ = classMeta('ParagraphStyle');
  function resolveParagraphStyleDefaults(style, direction) {
    init_properties_ParagraphStyle_kt_l2iumv();
    var tmp0_elvis_lhs = style.v3s_1;
    var tmp;
    var tmp_0 = tmp0_elvis_lhs;
    if ((tmp_0 == null ? null : new TextAlign(tmp_0)) == null) {
      tmp = Companion_getInstance_23().m3v_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp_1 = tmp;
    var tmp_2 = resolveTextDirection_0(direction, style.w3s_1);
    var tmp_3 = get_isUnspecified(style.x3s_1) ? get_DefaultLineHeight() : style.x3s_1;
    var tmp1_elvis_lhs = style.y3s_1;
    var tmp_4 = tmp1_elvis_lhs == null ? Companion_getInstance_28().o3v_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = style.b3t_1;
    var tmp_5 = tmp2_elvis_lhs == null ? Companion_getInstance_31().p3v_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = style.c3t_1;
    return new ParagraphStyle_0(tmp_1, tmp_2, tmp_3, tmp_4, style.z3s_1, style.a3t_1, tmp_5, tmp3_elvis_lhs == null ? Companion_getInstance_22().s3v_1 : tmp3_elvis_lhs);
  }
  var properties_initialized_ParagraphStyle_kt_y6w405;
  function init_properties_ParagraphStyle_kt_l2iumv() {
    if (properties_initialized_ParagraphStyle_kt_y6w405) {
    } else {
      properties_initialized_ParagraphStyle_kt_y6w405 = true;
      DefaultLineHeight = Companion_getInstance().x2l_1;
    }
  }
  function Placeholder() {
  }
  Placeholder.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Placeholder))
      return false;
    if (!equals(this.u3v_1, other.u3v_1))
      return false;
    if (!equals(this.v3v_1, other.v3v_1))
      return false;
    if (!(this.w3v_1 === other.w3v_1))
      return false;
    return true;
  };
  Placeholder.prototype.hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.u3v_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.v3v_1) | 0;
    result = imul(31, result) + PlaceholderVerticalAlign__hashCode_impl_1c0k16(this.w3v_1) | 0;
    return result;
  };
  Placeholder.$metadata$ = classMeta('Placeholder');
  function _PlaceholderVerticalAlign___init__impl__mll0or(value) {
    return value;
  }
  function Companion() {
    Companion_instance = this;
    this.x3v_1 = _PlaceholderVerticalAlign___init__impl__mll0or(1);
    this.y3v_1 = _PlaceholderVerticalAlign___init__impl__mll0or(2);
    this.z3v_1 = _PlaceholderVerticalAlign___init__impl__mll0or(3);
    this.a3w_1 = _PlaceholderVerticalAlign___init__impl__mll0or(4);
    this.b3w_1 = _PlaceholderVerticalAlign___init__impl__mll0or(5);
    this.c3w_1 = _PlaceholderVerticalAlign___init__impl__mll0or(6);
    this.d3w_1 = _PlaceholderVerticalAlign___init__impl__mll0or(7);
  }
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
  function SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $this) {
    SpanStyle.call($this, Companion_getInstance_26().e3w(color), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle);
    return $this;
  }
  function SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle) {
    return SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, Object.create(SpanStyle.prototype));
  }
  function mergePlatformStyle_0($this, other) {
    if ($this.t3w_1 == null)
      return other;
    if (other == null)
      return $this.t3w_1;
    return $this.t3w_1.v3w(other);
  }
  function hasSameNonLayoutAttributes($this, other) {
    if (!equals($this.f3w_1, other.f3w_1))
      return false;
    if (!equals($this.r3w_1, other.r3w_1))
      return false;
    if (!equals($this.s3w_1, other.s3w_1))
      return false;
    return true;
  }
  function SpanStyle(textForegroundStyle, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle) {
    this.f3w_1 = textForegroundStyle;
    this.g3w_1 = fontSize;
    this.h3w_1 = fontWeight;
    this.i3w_1 = fontStyle;
    this.j3w_1 = fontSynthesis;
    this.k3w_1 = fontFamily;
    this.l3w_1 = fontFeatureSettings;
    this.m3w_1 = letterSpacing;
    this.n3w_1 = baselineShift;
    this.o3w_1 = textGeometricTransform;
    this.p3w_1 = localeList;
    this.q3w_1 = background;
    this.r3w_1 = textDecoration;
    this.s3w_1 = shadow;
    this.t3w_1 = platformStyle;
  }
  SpanStyle.prototype.w3w = function () {
    return this.g3w_1;
  };
  SpanStyle.prototype.x3w = function () {
    return this.m3w_1;
  };
  SpanStyle.prototype.y3w = function () {
    return this.q3w_1;
  };
  SpanStyle.prototype.u3e = function () {
    return this.f3w_1.u3e();
  };
  SpanStyle.prototype.z3w = function () {
    return this.f3w_1.z3w();
  };
  SpanStyle.prototype.c36 = function () {
    return this.f3w_1.c36();
  };
  SpanStyle.prototype.a3x = function (other) {
    if (other == null)
      return this;
    var tmp10_textForegroundStyle = this.f3w_1.b3x(other.f3w_1);
    var tmp3_elvis_lhs = other.k3w_1;
    var tmp11_fontFamily = tmp3_elvis_lhs == null ? this.k3w_1 : tmp3_elvis_lhs;
    var tmp12_fontSize = !get_isUnspecified(other.g3w_1) ? other.g3w_1 : this.g3w_1;
    var tmp0_elvis_lhs = other.h3w_1;
    var tmp13_fontWeight = tmp0_elvis_lhs == null ? this.h3w_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = other.i3w_1;
    var tmp;
    var tmp_0 = tmp1_elvis_lhs;
    if ((tmp_0 == null ? null : new FontStyle(tmp_0)) == null) {
      tmp = this.i3w_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var tmp14_fontStyle = tmp;
    var tmp2_elvis_lhs = other.j3w_1;
    var tmp_1;
    var tmp_2 = tmp2_elvis_lhs;
    if ((tmp_2 == null ? null : new FontSynthesis(tmp_2)) == null) {
      tmp_1 = this.j3w_1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    var tmp15_fontSynthesis = tmp_1;
    var tmp4_elvis_lhs = other.l3w_1;
    var tmp16_fontFeatureSettings = tmp4_elvis_lhs == null ? this.l3w_1 : tmp4_elvis_lhs;
    var tmp_3;
    if (!get_isUnspecified(other.m3w_1)) {
      tmp_3 = other.m3w_1;
    } else {
      tmp_3 = this.m3w_1;
    }
    var tmp17_letterSpacing = tmp_3;
    var tmp5_elvis_lhs = other.n3w_1;
    var tmp_4;
    var tmp_5 = tmp5_elvis_lhs;
    if ((tmp_5 == null ? null : new BaselineShift(tmp_5)) == null) {
      tmp_4 = this.n3w_1;
    } else {
      tmp_4 = tmp5_elvis_lhs;
    }
    var tmp18_baselineShift = tmp_4;
    var tmp6_elvis_lhs = other.o3w_1;
    var tmp19_textGeometricTransform = tmp6_elvis_lhs == null ? this.o3w_1 : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = other.p3w_1;
    var tmp20_localeList = tmp7_elvis_lhs == null ? this.p3w_1 : tmp7_elvis_lhs;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp0_takeOrElse = other.q3w_1;
    var tmp_6;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(tmp0_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance_0().q3a_1));
    if (tmp$ret$0) {
      tmp_6 = tmp0_takeOrElse;
    } else {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.text.SpanStyle.merge.<anonymous>' call
      tmp$ret$1 = this.q3w_1;
      tmp_6 = tmp$ret$1;
    }
    tmp$ret$2 = tmp_6;
    var tmp21_background = tmp$ret$2;
    var tmp8_elvis_lhs = other.r3w_1;
    var tmp22_textDecoration = tmp8_elvis_lhs == null ? this.r3w_1 : tmp8_elvis_lhs;
    var tmp9_elvis_lhs = other.s3w_1;
    var tmp23_shadow = tmp9_elvis_lhs == null ? this.s3w_1 : tmp9_elvis_lhs;
    var tmp24_platformStyle = mergePlatformStyle_0(this, other.t3w_1);
    return new SpanStyle(tmp10_textForegroundStyle, tmp12_fontSize, tmp13_fontWeight, tmp14_fontStyle, tmp15_fontSynthesis, tmp11_fontFamily, tmp16_fontFeatureSettings, tmp17_letterSpacing, tmp18_baselineShift, tmp19_textGeometricTransform, tmp20_localeList, tmp21_background, tmp22_textDecoration, tmp23_shadow, tmp24_platformStyle);
  };
  SpanStyle.prototype.c3x = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow) {
    var tmp;
    if (equals(color, this.u3e())) {
      tmp = this.f3w_1;
    } else {
      tmp = Companion_getInstance_26().e3w(color);
    }
    return new SpanStyle(tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, this.t3w_1);
  };
  SpanStyle.prototype.d3x = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      color = this.u3e();
    if (!(($mask0 & 2) === 0))
      fontSize = this.g3w_1;
    if (!(($mask0 & 4) === 0))
      fontWeight = this.h3w_1;
    if (!(($mask0 & 8) === 0))
      fontStyle = this.i3w_1;
    if (!(($mask0 & 16) === 0))
      fontSynthesis = this.j3w_1;
    if (!(($mask0 & 32) === 0))
      fontFamily = this.k3w_1;
    if (!(($mask0 & 64) === 0))
      fontFeatureSettings = this.l3w_1;
    if (!(($mask0 & 128) === 0))
      letterSpacing = this.m3w_1;
    if (!(($mask0 & 256) === 0))
      baselineShift = this.n3w_1;
    if (!(($mask0 & 512) === 0))
      textGeometricTransform = this.o3w_1;
    if (!(($mask0 & 1024) === 0))
      localeList = this.p3w_1;
    if (!(($mask0 & 2048) === 0))
      background = this.q3w_1;
    if (!(($mask0 & 4096) === 0))
      textDecoration = this.r3w_1;
    if (!(($mask0 & 8192) === 0))
      shadow = this.s3w_1;
    return this.c3x(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow);
  };
  SpanStyle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpanStyle))
      return false;
    return this.e3x(other) ? hasSameNonLayoutAttributes(this, other) : false;
  };
  SpanStyle.prototype.e3x = function (other) {
    if (this === other)
      return true;
    if (!equals(this.g3w_1, other.g3w_1))
      return false;
    if (!equals(this.h3w_1, other.h3w_1))
      return false;
    var tmp = this.i3w_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = other.i3w_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.j3w_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = other.j3w_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.k3w_1, other.k3w_1))
      return false;
    if (!(this.l3w_1 == other.l3w_1))
      return false;
    if (!equals(this.m3w_1, other.m3w_1))
      return false;
    var tmp_5 = this.n3w_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = other.n3w_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.o3w_1, other.o3w_1))
      return false;
    if (!equals(this.p3w_1, other.p3w_1))
      return false;
    if (!equals(this.q3w_1, other.q3w_1))
      return false;
    if (!equals(this.t3w_1, other.t3w_1))
      return false;
    return true;
  };
  SpanStyle.prototype.hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.u3e());
    var tmp = imul(31, result);
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.z3w();
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = tmp + tmp$ret$0 | 0;
    result = imul(31, result) + getNumberHashCode(this.c36()) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.g3w_1) | 0;
    var tmp_0 = imul(31, result);
    var tmp0_safe_receiver_0 = this.h3w_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.hashCode();
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(31, result);
    var tmp2_safe_receiver = this.i3w_1;
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
    var tmp4_safe_receiver = this.j3w_1;
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
    var tmp6_safe_receiver = this.k3w_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_7 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_8 = imul(31, result);
    var tmp8_safe_receiver = this.l3w_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : getStringHashCode(tmp8_safe_receiver);
    result = tmp_8 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.m3w_1) | 0;
    var tmp_9 = imul(31, result);
    var tmp10_safe_receiver = this.n3w_1;
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
    var tmp12_safe_receiver = this.o3w_1;
    var tmp13_elvis_lhs = tmp12_safe_receiver == null ? null : tmp12_safe_receiver.hashCode();
    result = tmp_12 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    var tmp_13 = imul(31, result);
    var tmp14_safe_receiver = this.p3w_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.hashCode();
    result = tmp_13 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.q3w_1) | 0;
    var tmp_14 = imul(31, result);
    var tmp16_safe_receiver = this.r3w_1;
    var tmp17_elvis_lhs = tmp16_safe_receiver == null ? null : tmp16_safe_receiver.hashCode();
    result = tmp_14 + (tmp17_elvis_lhs == null ? 0 : tmp17_elvis_lhs) | 0;
    var tmp_15 = imul(31, result);
    var tmp18_safe_receiver = this.s3w_1;
    var tmp19_elvis_lhs = tmp18_safe_receiver == null ? null : tmp18_safe_receiver.hashCode();
    result = tmp_15 + (tmp19_elvis_lhs == null ? 0 : tmp19_elvis_lhs) | 0;
    var tmp_16 = imul(31, result);
    var tmp20_safe_receiver = this.t3w_1;
    var tmp21_elvis_lhs = tmp20_safe_receiver == null ? null : tmp20_safe_receiver.hashCode();
    result = tmp_16 + (tmp21_elvis_lhs == null ? 0 : tmp21_elvis_lhs) | 0;
    return result;
  };
  SpanStyle.prototype.toString = function () {
    var tmp = 'SpanStyle(' + ('color=' + new Color(this.u3e()) + ', ') + ('brush=' + this.z3w() + ', ') + ('alpha=' + this.c36() + ', ') + ('fontSize=' + new TextUnit(this.g3w_1) + ', ') + ('fontWeight=' + this.h3w_1 + ', ');
    var tmp_0 = this.i3w_1;
    var tmp_1 = tmp + ('fontStyle=' + (tmp_0 == null ? null : new FontStyle(tmp_0)) + ', ');
    var tmp_2 = this.j3w_1;
    var tmp_3 = tmp_1 + ('fontSynthesis=' + (tmp_2 == null ? null : new FontSynthesis(tmp_2)) + ', ') + ('fontFamily=' + this.k3w_1 + ', ') + ('fontFeatureSettings=' + this.l3w_1 + ', ') + ('letterSpacing=' + new TextUnit(this.m3w_1) + ', ');
    var tmp_4 = this.n3w_1;
    return tmp_3 + ('baselineShift=' + (tmp_4 == null ? null : new BaselineShift(tmp_4)) + ', ') + ('textGeometricTransform=' + this.o3w_1 + ', ') + ('localeList=' + this.p3w_1 + ', ') + ('background=' + new Color(this.q3w_1) + ', ') + ('textDecoration=' + this.r3w_1 + ', ') + ('shadow=' + this.s3w_1 + ', ') + ('platformStyle=' + this.t3w_1) + ')';
  };
  SpanStyle.$metadata$ = classMeta('SpanStyle');
  function resolveSpanStyleDefaults(style) {
    init_properties_SpanStyle_kt_tje8dv();
    var tmp = style.f3w_1.f3x(resolveSpanStyleDefaults$lambda);
    var tmp_0 = get_isUnspecified(style.g3w_1) ? get_DefaultFontSize() : style.g3w_1;
    var tmp0_elvis_lhs = style.h3w_1;
    var tmp_1 = tmp0_elvis_lhs == null ? Companion_getInstance_18().s3x_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.i3w_1;
    var tmp_2;
    var tmp_3 = tmp1_elvis_lhs;
    if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
      tmp_2 = Companion_getInstance_16().z3x_1;
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var tmp_4 = tmp_2;
    var tmp2_elvis_lhs = style.j3w_1;
    var tmp_5;
    var tmp_6 = tmp2_elvis_lhs;
    if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_17().c3y_1;
    } else {
      tmp_5 = tmp2_elvis_lhs;
    }
    var tmp_7 = tmp_5;
    var tmp3_elvis_lhs = style.k3w_1;
    var tmp_8 = tmp3_elvis_lhs == null ? Companion_getInstance_12().f3y_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = style.l3w_1;
    var tmp_9 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_10;
    if (get_isUnspecified(style.m3w_1)) {
      tmp_10 = get_DefaultLetterSpacing();
    } else {
      tmp_10 = style.m3w_1;
    }
    var tmp_11 = tmp_10;
    var tmp5_elvis_lhs = style.n3w_1;
    var tmp_12;
    var tmp_13 = tmp5_elvis_lhs;
    if ((tmp_13 == null ? null : new BaselineShift(tmp_13)) == null) {
      tmp_12 = Companion_getInstance_21().m3y_1;
    } else {
      tmp_12 = tmp5_elvis_lhs;
    }
    var tmp_14 = tmp_12;
    var tmp6_elvis_lhs = style.o3w_1;
    var tmp_15 = tmp6_elvis_lhs == null ? Companion_getInstance_27().n3y_1 : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = style.p3w_1;
    var tmp_16 = tmp7_elvis_lhs == null ? Companion_getInstance_20().s19() : tmp7_elvis_lhs;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp0_takeOrElse = style.q3w_1;
    var tmp_17;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(tmp0_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance_0().q3a_1));
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
    var tmp8_elvis_lhs = style.r3w_1;
    var tmp_19 = tmp8_elvis_lhs == null ? Companion_getInstance_24().o3y_1 : tmp8_elvis_lhs;
    var tmp9_elvis_lhs = style.s3w_1;
    return new SpanStyle(tmp, tmp_0, tmp_1, tmp_4, tmp_7, tmp_8, tmp_9, tmp_11, tmp_14, tmp_15, tmp_16, tmp_18, tmp_19, tmp9_elvis_lhs == null ? Companion_getInstance_1().u3g_1 : tmp9_elvis_lhs, style.t3w_1);
  }
  function resolveSpanStyleDefaults$lambda() {
    init_properties_SpanStyle_kt_tje8dv();
    return Companion_getInstance_26().e3w(get_DefaultColor());
  }
  var properties_initialized_SpanStyle_kt_cqbdlj;
  function init_properties_SpanStyle_kt_tje8dv() {
    if (properties_initialized_SpanStyle_kt_cqbdlj) {
    } else {
      properties_initialized_SpanStyle_kt_cqbdlj = true;
      DefaultFontSize = get_sp(14);
      DefaultLetterSpacing = get_sp(0);
      DefaultBackgroundColor = Companion_getInstance_0().p3a_1;
      DefaultColor = Companion_getInstance_0().e3a_1;
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
    var target = ArrayList_init_$Create$(_this__u8e3s4.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.g(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        if (predicate(item)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.a(item);
        }
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
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
    buffer.b(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.g(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.b(separator);
        }
        if (limit < 0 ? true : count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 ? count > limit : false) {
      buffer.b(truncated);
    }
    buffer.b(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.b(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.b(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.i6(element.q1_1);
        } else {
          _this__u8e3s4.b(toString_0(element));
        }
      }
    }
  }
  function fastFlatMap(_this__u8e3s4, transform) {
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(_this__u8e3s4.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.g(index);
        // Inline function 'androidx.compose.ui.text.fastFlatMap.<anonymous>' call
        var list = transform(item);
        addAll(target, list);
      }
       while (inductionVariable <= last);
    return target;
  }
  function TextLayoutResult(layoutInput, multiParagraph, size) {
    this.r3y_1 = layoutInput;
    this.s3y_1 = multiParagraph;
    this.t3y_1 = size;
    this.u3y_1 = this.s3y_1.i3u();
    this.v3y_1 = this.s3y_1.j3u();
    this.w3y_1 = this.s3y_1.q3t_1;
    this.x3y_1 = 8;
  }
  TextLayoutResult.prototype.y3y = function () {
    return this.r3y_1;
  };
  TextLayoutResult.prototype.z3y = function () {
    return this.s3y_1;
  };
  TextLayoutResult.prototype.a3z = function () {
    return this.s3y_1.m3t_1 ? true : _IntSize___get_height__impl__prv63b(this.t3y_1) < this.s3y_1.o3t_1;
  };
  TextLayoutResult.prototype.b3z = function () {
    return _IntSize___get_width__impl__d9yl4o(this.t3y_1) < this.s3y_1.n3t_1;
  };
  TextLayoutResult.prototype.c3z = function () {
    return this.b3z() ? true : this.a3z();
  };
  TextLayoutResult.prototype.q3u = function (position) {
    return this.s3y_1.q3u(position);
  };
  TextLayoutResult.prototype.d3z = function (layoutInput, size) {
    return new TextLayoutResult(layoutInput, this.s3y_1, size);
  };
  TextLayoutResult.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutResult))
      return false;
    if (!this.r3y_1.equals(other.r3y_1))
      return false;
    if (!equals(this.s3y_1, other.s3y_1))
      return false;
    if (!equals(this.t3y_1, other.t3y_1))
      return false;
    if (!(this.u3y_1 === other.u3y_1))
      return false;
    if (!(this.v3y_1 === other.v3y_1))
      return false;
    if (!equals(this.w3y_1, other.w3y_1))
      return false;
    return true;
  };
  TextLayoutResult.prototype.hashCode = function () {
    var result = this.r3y_1.hashCode();
    result = imul(31, result) + hashCode(this.s3y_1) | 0;
    result = imul(31, result) + IntSize__hashCode_impl_gm9mta(this.t3y_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.u3y_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.v3y_1) | 0;
    result = imul(31, result) + hashCode(this.w3y_1) | 0;
    return result;
  };
  TextLayoutResult.prototype.toString = function () {
    return 'TextLayoutResult(' + ('layoutInput=' + this.r3y_1 + ', ') + ('multiParagraph=' + this.s3y_1 + ', ') + ('size=' + new IntSize(this.t3y_1) + ', ') + ('firstBaseline=' + this.u3y_1 + ', ') + ('lastBaseline=' + this.v3y_1 + ', ') + ('placeholderRects=' + this.w3y_1) + ')';
  };
  TextLayoutResult.$metadata$ = classMeta('TextLayoutResult');
  function TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, $this) {
    TextLayoutInput.call($this, text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, null, fontFamilyResolver, constraints);
    return $this;
  }
  function TextLayoutInput_init_$Create$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints) {
    return TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, Object.create(TextLayoutInput.prototype));
  }
  function TextLayoutInput(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, fontFamilyResolver, constraints) {
    this.e3z_1 = text;
    this.f3z_1 = style;
    this.g3z_1 = placeholders;
    this.h3z_1 = maxLines;
    this.i3z_1 = softWrap;
    this.j3z_1 = overflow;
    this.k3z_1 = density;
    this.l3z_1 = layoutDirection;
    this.m3z_1 = fontFamilyResolver;
    this.n3z_1 = constraints;
    this.o3z_1 = resourceLoader;
    this.p3z_1 = 8;
  }
  TextLayoutInput.prototype.t3s = function () {
    return this.e3z_1;
  };
  TextLayoutInput.prototype.c3v = function () {
    return this.g3z_1;
  };
  TextLayoutInput.prototype.q3z = function () {
    return this.h3z_1;
  };
  TextLayoutInput.prototype.r3z = function () {
    return this.i3z_1;
  };
  TextLayoutInput.prototype.s3z = function () {
    return this.j3z_1;
  };
  TextLayoutInput.prototype.m2k = function () {
    return this.k3z_1;
  };
  TextLayoutInput.prototype.y3k = function () {
    return this.l3z_1;
  };
  TextLayoutInput.prototype.t3z = function () {
    return this.m3z_1;
  };
  TextLayoutInput.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutInput))
      return false;
    if (!this.e3z_1.equals(other.e3z_1))
      return false;
    if (!this.f3z_1.equals(other.f3z_1))
      return false;
    if (!equals(this.g3z_1, other.g3z_1))
      return false;
    if (!(this.h3z_1 === other.h3z_1))
      return false;
    if (!(this.i3z_1 === other.i3z_1))
      return false;
    if (!(this.j3z_1 === other.j3z_1))
      return false;
    if (!equals(this.k3z_1, other.k3z_1))
      return false;
    if (!this.l3z_1.equals(other.l3z_1))
      return false;
    if (!equals(this.m3z_1, other.m3z_1))
      return false;
    if (!equals(this.n3z_1, other.n3z_1))
      return false;
    return true;
  };
  TextLayoutInput.prototype.hashCode = function () {
    var result = this.e3z_1.hashCode();
    result = imul(31, result) + this.f3z_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.g3z_1) | 0;
    result = imul(31, result) + this.h3z_1 | 0;
    result = imul(31, result) + (this.i3z_1 | 0) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.j3z_1) | 0;
    result = imul(31, result) + hashCode(this.k3z_1) | 0;
    result = imul(31, result) + this.l3z_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.m3z_1) | 0;
    result = imul(31, result) + Constraints__hashCode_impl_ij7484(this.n3z_1) | 0;
    return result;
  };
  TextLayoutInput.prototype.toString = function () {
    return 'TextLayoutInput(' + ('text=' + this.e3z_1 + ', ') + ('style=' + this.f3z_1 + ', ') + ('placeholders=' + this.g3z_1 + ', ') + ('maxLines=' + this.h3z_1 + ', ') + ('softWrap=' + this.i3z_1 + ', ') + ('overflow=' + new TextOverflow(this.j3z_1) + ', ') + ('density=' + this.k3z_1 + ', ') + ('layoutDirection=' + this.l3z_1 + ', ') + ('fontFamilyResolver=' + this.m3z_1 + ', ') + ('constraints=' + new Constraints(this.n3z_1)) + ')';
  };
  TextLayoutInput.$metadata$ = classMeta('TextLayoutInput');
  var DefaultCacheSize;
  function TextPainter() {
    TextPainter_instance = this;
    this.u3z_1 = 0;
  }
  TextPainter.prototype.v3z = function (canvas, textLayoutResult) {
    var needClipping = textLayoutResult.c3z() ? !(textLayoutResult.r3y_1.j3z_1 === Companion_getInstance_29().y3z_1) : false;
    if (needClipping) {
      var width = _IntSize___get_width__impl__d9yl4o(textLayoutResult.t3y_1);
      var height = _IntSize___get_height__impl__prv63b(textLayoutResult.t3y_1);
      var bounds = Rect(Companion_getInstance_2().o2i_1, Size(width, height));
      canvas.a38();
      canvas.i38(bounds, null, 2, null);
    }
    try {
      var brush = textLayoutResult.r3y_1.f3z_1.z3w();
      if (!(brush == null)) {
        textLayoutResult.s3y_1.m3u(canvas, brush, textLayoutResult.r3y_1.f3z_1.c36(), textLayoutResult.r3y_1.f3z_1.z3z(), textLayoutResult.r3y_1.f3z_1.a40());
      } else {
        textLayoutResult.s3y_1.l3u(canvas, textLayoutResult.r3y_1.f3z_1.u3e(), textLayoutResult.r3y_1.f3z_1.z3z(), textLayoutResult.r3y_1.f3z_1.a40());
      }
    }finally {
      if (needClipping) {
        canvas.b38();
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
  function TextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    TextStyle.call($this, spanStyle, paragraphStyle, createPlatformTextStyleInternal(spanStyle.t3w_1, paragraphStyle.z3s_1));
    return $this;
  }
  function TextStyle_init_$Create$_0(spanStyle, paragraphStyle) {
    return TextStyle_init_$Init$(spanStyle, paragraphStyle, Object.create(TextStyle.prototype));
  }
  function TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, $this) {
    TextStyle.call($this, SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, null), new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, null, null, null, null), null);
    return $this;
  }
  function TextStyle_init_$Init$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      color = Companion_getInstance_0().q3a_1;
    if (!(($mask0 & 2) === 0))
      fontSize = Companion_getInstance().x2l_1;
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
      letterSpacing = Companion_getInstance().x2l_1;
    if (!(($mask0 & 256) === 0))
      baselineShift = null;
    if (!(($mask0 & 512) === 0))
      textGeometricTransform = null;
    if (!(($mask0 & 1024) === 0))
      localeList = null;
    if (!(($mask0 & 2048) === 0))
      background = Companion_getInstance_0().q3a_1;
    if (!(($mask0 & 4096) === 0))
      textDecoration = null;
    if (!(($mask0 & 8192) === 0))
      shadow = null;
    if (!(($mask0 & 16384) === 0))
      textAlign = null;
    if (!(($mask0 & 32768) === 0))
      textDirection = null;
    if (!(($mask0 & 65536) === 0))
      lineHeight = Companion_getInstance().x2l_1;
    if (!(($mask0 & 131072) === 0))
      textIndent = null;
    TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, $this);
    return $this;
  }
  function TextStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, $mask0, $marker) {
    return TextStyle_init_$Init$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, $mask0, $marker, Object.create(TextStyle.prototype));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.b40_1 = TextStyle_init_$Create$_1(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 262143, null);
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_10() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function TextStyle(spanStyle, paragraphStyle, platformStyle) {
    Companion_getInstance_10();
    this.x3u_1 = spanStyle;
    this.y3u_1 = paragraphStyle;
    this.z3u_1 = platformStyle;
  }
  TextStyle.prototype.c40 = function () {
    return this.x3u_1;
  };
  TextStyle.prototype.a3v = function () {
    return this.y3u_1;
  };
  TextStyle.prototype.d40 = function (other) {
    if (other == null ? true : equals(other, Companion_getInstance_10().b40_1))
      return this;
    return TextStyle_init_$Create$_0(this.c40().a3x(other.c40()), this.a3v().d3t(other.a3v()));
  };
  TextStyle.prototype.b3v = function (other) {
    return TextStyle_init_$Create$_0(this.c40(), this.a3v().d3t(other));
  };
  TextStyle.prototype.e40 = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent) {
    var tmp;
    if (equals(color, this.x3u_1.u3e())) {
      tmp = this.x3u_1.f3w_1;
    } else {
      tmp = Companion_getInstance_26().e3w(color);
    }
    return new TextStyle(new SpanStyle(tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, this.x3u_1.t3w_1), new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, this.y3u_1.z3s_1, this.f40(), this.g40(), this.h40()), this.z3u_1);
  };
  TextStyle.prototype.i40 = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      color = this.x3u_1.u3e();
    if (!(($mask0 & 2) === 0))
      fontSize = this.x3u_1.g3w_1;
    if (!(($mask0 & 4) === 0))
      fontWeight = this.x3u_1.h3w_1;
    if (!(($mask0 & 8) === 0))
      fontStyle = this.x3u_1.i3w_1;
    if (!(($mask0 & 16) === 0))
      fontSynthesis = this.x3u_1.j3w_1;
    if (!(($mask0 & 32) === 0))
      fontFamily = this.x3u_1.k3w_1;
    if (!(($mask0 & 64) === 0))
      fontFeatureSettings = this.x3u_1.l3w_1;
    if (!(($mask0 & 128) === 0))
      letterSpacing = this.x3u_1.m3w_1;
    if (!(($mask0 & 256) === 0))
      baselineShift = this.x3u_1.n3w_1;
    if (!(($mask0 & 512) === 0))
      textGeometricTransform = this.x3u_1.o3w_1;
    if (!(($mask0 & 1024) === 0))
      localeList = this.x3u_1.p3w_1;
    if (!(($mask0 & 2048) === 0))
      background = this.x3u_1.q3w_1;
    if (!(($mask0 & 4096) === 0))
      textDecoration = this.x3u_1.r3w_1;
    if (!(($mask0 & 8192) === 0))
      shadow = this.x3u_1.s3w_1;
    if (!(($mask0 & 16384) === 0))
      textAlign = this.y3u_1.v3s_1;
    if (!(($mask0 & 32768) === 0))
      textDirection = this.y3u_1.w3s_1;
    if (!(($mask0 & 65536) === 0))
      lineHeight = this.y3u_1.x3s_1;
    if (!(($mask0 & 131072) === 0))
      textIndent = this.y3u_1.y3s_1;
    return this.e40(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent);
  };
  TextStyle.prototype.z3w = function () {
    return this.x3u_1.z3w();
  };
  TextStyle.prototype.u3e = function () {
    return this.x3u_1.u3e();
  };
  TextStyle.prototype.c36 = function () {
    return this.x3u_1.c36();
  };
  TextStyle.prototype.w3w = function () {
    return this.x3u_1.g3w_1;
  };
  TextStyle.prototype.j40 = function () {
    return this.x3u_1.h3w_1;
  };
  TextStyle.prototype.k40 = function () {
    return this.x3u_1.i3w_1;
  };
  TextStyle.prototype.l40 = function () {
    return this.x3u_1.j3w_1;
  };
  TextStyle.prototype.m40 = function () {
    return this.x3u_1.k3w_1;
  };
  TextStyle.prototype.n40 = function () {
    return this.x3u_1.l3w_1;
  };
  TextStyle.prototype.x3w = function () {
    return this.x3u_1.m3w_1;
  };
  TextStyle.prototype.o40 = function () {
    return this.x3u_1.n3w_1;
  };
  TextStyle.prototype.p40 = function () {
    return this.x3u_1.o3w_1;
  };
  TextStyle.prototype.q40 = function () {
    return this.x3u_1.p3w_1;
  };
  TextStyle.prototype.y3w = function () {
    return this.x3u_1.q3w_1;
  };
  TextStyle.prototype.a40 = function () {
    return this.x3u_1.r3w_1;
  };
  TextStyle.prototype.z3z = function () {
    return this.x3u_1.s3w_1;
  };
  TextStyle.prototype.r40 = function () {
    return this.y3u_1.v3s_1;
  };
  TextStyle.prototype.s40 = function () {
    return this.y3u_1.w3s_1;
  };
  TextStyle.prototype.g3v = function () {
    return this.y3u_1.x3s_1;
  };
  TextStyle.prototype.t40 = function () {
    return this.y3u_1.y3s_1;
  };
  TextStyle.prototype.f40 = function () {
    return this.y3u_1.a3t_1;
  };
  TextStyle.prototype.h40 = function () {
    return this.y3u_1.c3t_1;
  };
  TextStyle.prototype.g40 = function () {
    return this.y3u_1.b3t_1;
  };
  TextStyle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextStyle))
      return false;
    if (!this.x3u_1.equals(other.x3u_1))
      return false;
    if (!this.y3u_1.equals(other.y3u_1))
      return false;
    if (!equals(this.z3u_1, other.z3u_1))
      return false;
    return true;
  };
  TextStyle.prototype.u40 = function (other) {
    return this === other ? true : this.y3u_1.equals(other.y3u_1) ? this.x3u_1.e3x(other.x3u_1) : false;
  };
  TextStyle.prototype.hashCode = function () {
    var result = this.x3u_1.hashCode();
    result = imul(31, result) + this.y3u_1.hashCode() | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.z3u_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  TextStyle.prototype.toString = function () {
    var tmp = 'TextStyle(' + ('color=' + new Color(this.u3e()) + ', ') + ('brush=' + this.z3w() + ', ') + ('alpha=' + this.c36() + ', ') + ('fontSize=' + new TextUnit(this.w3w()) + ', ') + ('fontWeight=' + this.j40() + ', ');
    var tmp_0 = this.k40();
    var tmp_1 = tmp + ('fontStyle=' + (tmp_0 == null ? null : new FontStyle(tmp_0)) + ', ');
    var tmp_2 = this.l40();
    var tmp_3 = tmp_1 + ('fontSynthesis=' + (tmp_2 == null ? null : new FontSynthesis(tmp_2)) + ', ') + ('fontFamily=' + this.m40() + ', ') + ('fontFeatureSettings=' + this.n40() + ', ') + ('letterSpacing=' + new TextUnit(this.x3w()) + ', ');
    var tmp_4 = this.o40();
    var tmp_5 = tmp_3 + ('baselineShift=' + (tmp_4 == null ? null : new BaselineShift(tmp_4)) + ', ') + ('textGeometricTransform=' + this.p40() + ', ') + ('localeList=' + this.q40() + ', ') + ('background=' + new Color(this.y3w()) + ', ') + ('textDecoration=' + this.a40() + ', ');
    var tmp_6 = this.z3z();
    var tmp_7 = this.r40();
    var tmp_8 = tmp_5 + ('shadow=' + tmp_6 + ', textAlign=' + (tmp_7 == null ? null : new TextAlign(tmp_7)) + ', ');
    var tmp_9 = this.s40();
    return tmp_8 + ('textDirection=' + (tmp_9 == null ? null : new TextDirection(tmp_9)) + ', ') + ('lineHeight=' + new TextUnit(this.g3v()) + ', ') + ('textIndent=' + this.t40() + ', ') + ('platformStyle=' + this.z3u_1 + ', ') + ('lineHeightStyle=' + this.f40() + ', ') + ('lineBreak=' + this.g40() + ', ') + ('hyphens=' + this.h40()) + ')';
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
    return new TextStyle(resolveSpanStyleDefaults(style.x3u_1), resolveParagraphStyleDefaults(style.y3u_1, direction), style.z3u_1);
  }
  function resolveTextDirection_0(layoutDirection, textDirection) {
    var tmp0_subject = textDirection;
    var tmp;
    var tmp_0 = tmp0_subject;
    if (equals(tmp_0 == null ? null : new TextDirection(tmp_0), new TextDirection(Companion_getInstance_25().x40_1))) {
      var tmp1_subject = layoutDirection;
      var tmp0 = tmp1_subject.t5_1;
      var tmp_1;
      switch (tmp0) {
        case 0:
          tmp_1 = Companion_getInstance_25().y40_1;
          break;
        case 1:
          tmp_1 = Companion_getInstance_25().z40_1;
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
        var tmp0_0 = tmp2_subject.t5_1;
        var tmp_3;
        switch (tmp0_0) {
          case 0:
            tmp_3 = Companion_getInstance_25().v40_1;
            break;
          case 1:
            tmp_3 = Companion_getInstance_25().w40_1;
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
    $this.e41_1 = maxSize;
    $this.b41_1 = HashMap_init_$Create$(0, 0.75);
    $this.c41_1 = LinkedHashSet_init_$Create$();
    return $this;
  }
  function LruCache_init_$Create$(maxSize) {
    return LruCache_init_$Init$(maxSize, Object.create(LruCache.prototype));
  }
  function safeSizeOf($this, key, value) {
    var result = $this.k41(key, value);
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
  LruCache.prototype.f = function () {
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.synchronizedValue' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.a41_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    return this.d41_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  LruCache.prototype.v = function (key) {
    var mapValue = null;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.a41_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.get.<anonymous>' call
    mapValue = this.b41_1.v(key);
    var tmp;
    if (!(mapValue == null)) {
      this.c41_1.b4(key);
      this.c41_1.a(key);
      var tmp0_this = this;
      var tmp1 = tmp0_this.i41_1;
      tmp0_this.i41_1 = tmp1 + 1 | 0;
      return mapValue;
    } else {
      var tmp2_this = this;
      var tmp3 = tmp2_this.j41_1;
      tmp2_this.j41_1 = tmp3 + 1 | 0;
      tmp = tmp3;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var createdValue = this.l41(key);
    if (createdValue == null) {
      return null;
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp1_synchronized = this.a41_1;
    var tmp$ret$3;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_this_0 = this;
    var tmp1_0 = tmp0_this_0.g41_1;
    tmp0_this_0.g41_1 = tmp1_0 + 1 | 0;
    var previousValue = this.b41_1.q(key, createdValue);
    this.c41_1.b4(key);
    this.c41_1.a(key);
    var tmp_0;
    if (!(previousValue == null)) {
      this.b41_1.q(key, previousValue);
      mapValue = previousValue;
      tmp_0 = Unit_getInstance();
    } else {
      var tmp2_this_0 = this;
      tmp2_this_0.d41_1 = tmp2_this_0.f() + safeSizeOf(this, key, createdValue) | 0;
      tmp_0 = Unit_getInstance();
    }
    tmp$ret$3 = tmp_0;
    tmp$ret$4 = tmp$ret$3;
    if (!(mapValue == null)) {
      this.n41(false, key, createdValue, mapValue);
      return mapValue;
    } else {
      this.m41(this.e41_1);
      return createdValue;
    }
  };
  LruCache.prototype.q = function (key, value) {
    if (key == null ? true : value == null) {
      throw NullPointerException_init_$Create$();
    }
    var previous = null;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.a41_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.put.<anonymous>' call
    var tmp0_this = this;
    var tmp1 = tmp0_this.f41_1;
    tmp0_this.f41_1 = tmp1 + 1 | 0;
    var tmp2_this = this;
    tmp2_this.d41_1 = tmp2_this.f() + safeSizeOf(this, key, value) | 0;
    previous = this.b41_1.q(key, value);
    if (!(previous == null)) {
      var tmp3_this = this;
      tmp3_this.d41_1 = tmp3_this.f() - safeSizeOf(this, key, ensureNotNull(previous)) | 0;
    }
    if (this.c41_1.m(key)) {
      this.c41_1.b4(key);
    }
    tmp$ret$0 = this.c41_1.a(key);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    if (!(previous == null)) {
      this.n41(false, key, ensureNotNull(previous), value);
    }
    this.m41(this.e41_1);
    return previous;
  };
  LruCache.prototype.m41 = function (maxSize) {
    $l$loop: while (true) {
      var key = null;
      var value = null;
      var tmp$ret$4;
      // Inline function 'androidx.compose.ui.text.synchronized' call
      var tmp0_synchronized = this.a41_1;
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      if ((this.f() < 0 ? true : this.b41_1.h() ? !(this.f() === 0) : false) ? true : !(this.b41_1.h() === this.c41_1.h())) {
        throw IllegalStateException_init_$Create$('map/keySet size inconsistency');
      }
      var tmp;
      if (this.f() > maxSize ? !this.b41_1.h() : false) {
        key = first(this.c41_1);
        var tmp$ret$0;
        // Inline function 'kotlin.collections.get' call
        var tmp0_get = this.b41_1;
        var tmp1_get = key;
        tmp$ret$0 = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).v(tmp1_get);
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
        var tmp2_remove = this.b41_1;
        var tmp3_remove = key;
        tmp$ret$1 = (isInterface(tmp2_remove, MutableMap) ? tmp2_remove : THROW_CCE()).k3(tmp3_remove);
        var tmp$ret$2;
        // Inline function 'kotlin.collections.remove' call
        var tmp4_remove = this.c41_1;
        var tmp5_remove = key;
        tmp$ret$2 = (isInterface(tmp4_remove, MutableCollection) ? tmp4_remove : THROW_CCE()).b4(tmp5_remove);
        var tmp1_this = this;
        tmp1_this.d41_1 = tmp1_this.f() - safeSizeOf(this, ensureNotNull(key), ensureNotNull(value)) | 0;
        var tmp2_this = this;
        var tmp3 = tmp2_this.h41_1;
        tmp2_this.h41_1 = tmp3 + 1 | 0;
        tmp = Unit_getInstance();
      }
      tmp$ret$3 = tmp;
      tmp$ret$4 = tmp$ret$3;
      if (key == null ? value == null : false) {
        break $l$loop;
      } else {
        this.n41(true, ensureNotNull(key), ensureNotNull(value), null);
      }
    }
  };
  LruCache.prototype.k3 = function (key) {
    if (key == null) {
      throw NullPointerException_init_$Create$();
    }
    var previous = null;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.a41_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    previous = this.b41_1.k3(key);
    this.c41_1.b4(key);
    var tmp;
    if (!(previous == null)) {
      var tmp0_this = this;
      tmp0_this.d41_1 = tmp0_this.f() - safeSizeOf(this, key, ensureNotNull(previous)) | 0;
      tmp = Unit_getInstance();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    if (!(previous == null)) {
      this.n41(false, key, ensureNotNull(previous), null);
    }
    return previous;
  };
  LruCache.prototype.n41 = function (evicted, key, oldValue, newValue) {
  };
  LruCache.prototype.l41 = function (key) {
    return null;
  };
  LruCache.prototype.k41 = function (key, value) {
    return 1;
  };
  LruCache.prototype.toString = function () {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.a41_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var accesses = this.i41_1 + this.j41_1 | 0;
    var hitPercent = !(accesses === 0) ? imul(100, this.i41_1) / accesses | 0 : 0;
    return 'LruCache[maxSize=' + this.e41_1 + ',hits=' + this.i41_1 + ',misses=' + this.j41_1 + ',' + ('hitRate=' + hitPercent + '%]');
    tmp$ret$1 = tmp$ret$0;
  };
  LruCache.prototype.o41 = function (block) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.a41_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    tmp$ret$0 = block();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  function LruCache() {
    this.a41_1 = createSynchronizedObject();
    this.d41_1 = 0;
    this.e41_1 = 0;
    this.f41_1 = 0;
    this.g41_1 = 0;
    this.h41_1 = 0;
    this.i41_1 = 0;
    this.j41_1 = 0;
  }
  LruCache.$metadata$ = classMeta('LruCache');
  function SimpleArrayMap_init_$Init$(capacity, $this) {
    SimpleArrayMap.call($this);
    if (capacity === 0) {
      $this.p41_1 = get_EMPTY_INTS();
      $this.q41_1 = get_EMPTY_OBJECTS();
    } else {
      $this.p41_1 = new Int32Array(capacity);
      var tmp = $this;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = capacity << 1;
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      tmp.q41_1 = tmp$ret$0;
    }
    $this.r41_1 = 0;
    return $this;
  }
  function SimpleArrayMap_init_$Init$_0(capacity, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      capacity = 0;
    SimpleArrayMap_init_$Init$(capacity, $this);
    return $this;
  }
  function SimpleArrayMap_init_$Create$(capacity, $mask0, $marker) {
    return SimpleArrayMap_init_$Init$_0(capacity, $mask0, $marker, Object.create(SimpleArrayMap.prototype));
  }
  SimpleArrayMap.prototype.s41 = function (key, hash) {
    var N = this.r41_1;
    if (N === 0) {
      return -1;
    }
    var index = binarySearchInternal(this.p41_1, N, hash);
    if (index < 0) {
      return index;
    }
    if (equals(key, this.q41_1[index << 1])) {
      return index;
    }
    var end;
    end = index + 1 | 0;
    while (end < N ? this.p41_1[end] === hash : false) {
      if (equals(key, this.q41_1[end << 1]))
        return end;
      var tmp0 = end;
      end = tmp0 + 1 | 0;
    }
    var i = index - 1 | 0;
    while (i >= 0 ? this.p41_1[i] === hash : false) {
      if (equals(key, this.q41_1[i << 1]))
        return i;
      var tmp1 = i;
      i = tmp1 - 1 | 0;
    }
    return ~end;
  };
  SimpleArrayMap.prototype.t41 = function () {
    var N = this.r41_1;
    if (N === 0) {
      return -1;
    }
    var index = binarySearchInternal(this.p41_1, N, 0);
    if (index < 0) {
      return index;
    }
    if (null == this.q41_1[index << 1]) {
      return index;
    }
    var end;
    end = index + 1 | 0;
    while (end < N ? this.p41_1[end] === 0 : false) {
      if (null == this.q41_1[end << 1])
        return end;
      var tmp0 = end;
      end = tmp0 + 1 | 0;
    }
    var i = index - 1 | 0;
    while (i >= 0 ? this.p41_1[i] === 0 : false) {
      if (null == this.q41_1[i << 1])
        return i;
      var tmp1 = i;
      i = tmp1 - 1 | 0;
    }
    return ~end;
  };
  SimpleArrayMap.prototype.q2 = function (key) {
    return this.u41(key) >= 0;
  };
  SimpleArrayMap.prototype.u41 = function (key) {
    return key == null ? this.t41() : this.s41(key, hashCode(key));
  };
  SimpleArrayMap.prototype.v = function (key) {
    var index = this.u41(key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.q41_1[(index << 1) + 1 | 0];
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  SimpleArrayMap.prototype.v41 = function (index) {
    var tmp = this.q41_1[index << 1];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  SimpleArrayMap.prototype.w41 = function (index) {
    var tmp = this.q41_1[(index << 1) + 1 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  SimpleArrayMap.prototype.h = function () {
    return this.r41_1 <= 0;
  };
  SimpleArrayMap.prototype.q = function (key, value) {
    var osize = this.r41_1;
    var hash;
    var index;
    if (key == null) {
      hash = 0;
      index = this.t41();
    } else {
      hash = hashCode(key);
      index = this.s41(key, hash);
    }
    if (index >= 0) {
      index = (index << 1) + 1 | 0;
      var tmp = this.q41_1[index];
      var old = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      this.q41_1[index] = value;
      return old;
    }
    index = ~index;
    if (osize >= this.p41_1.length) {
      var n = osize >= 8 ? osize + (osize >> 1) | 0 : osize >= 4 ? 8 : 4;
      if (false) {
        println('SimpleArrayMap put: grow from ' + this.p41_1.length + ' to ' + n);
      }
      this.p41_1 = copyOf(this.p41_1, n);
      this.q41_1 = copyOf_0(this.q41_1, n << 1);
      if (!(osize === this.r41_1)) {
        throw ConcurrentModificationException_init_$Create$();
      }
    }
    if (index < osize) {
      if (false) {
        println('SimpleArrayMap put: move ' + index + '-' + (osize - index | 0) + ' to ' + (index + 1 | 0));
      }
      var tmp$ret$4;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = this.p41_1;
      var tmp1_copyInto = this.p41_1;
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
      var tmp4_copyInto = this.q41_1;
      var tmp5_copyInto = this.q41_1;
      var tmp6_copyInto = (index + 1 | 0) << 1;
      var tmp7_copyInto = index << 1;
      var tmp8_copyInto = this.r41_1 << 1;
      arrayCopy(tmp4_copyInto, tmp5_copyInto, tmp6_copyInto, tmp7_copyInto, tmp8_copyInto);
      tmp$ret$5 = tmp5_copyInto;
    }
    {
      if (!(osize === this.r41_1) ? true : index >= this.p41_1.length) {
        throw ConcurrentModificationException_init_$Create$();
      }
    }
    this.p41_1[index] = hash;
    this.q41_1[index << 1] = key;
    this.q41_1[(index << 1) + 1 | 0] = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this.r41_1;
    tmp0_this.r41_1 = tmp1 + 1 | 0;
    return null;
  };
  SimpleArrayMap.prototype.equals = function (other) {
    if (this === other) {
      return true;
    }
    try {
      if (other instanceof SimpleArrayMap) {
        var map = other instanceof SimpleArrayMap ? other : THROW_CCE();
        if (!(this.r41_1 === map.r41_1)) {
          return false;
        }
        var inductionVariable = 0;
        var last = this.r41_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var key = this.v41(i);
            var mine = this.w41(i);
            var theirs = map.v(key);
            if (mine == null) {
              if (!(theirs == null) ? true : !map.q2(key)) {
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
          if (!(this.r41_1 === map_0.f())) {
            return false;
          }
          var inductionVariable_0 = 0;
          var last_0 = this.r41_1;
          if (inductionVariable_0 < last_0)
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var key_0 = this.v41(i_0);
              var mine_0 = this.w41(i_0);
              var tmp$ret$0;
              // Inline function 'kotlin.collections.get' call
              var tmp0_get = map_0;
              tmp$ret$0 = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).v(key_0);
              var theirs_0 = tmp$ret$0;
              if (mine_0 == null) {
                var tmp;
                if (!(theirs_0 == null)) {
                  tmp = true;
                } else {
                  var tmp$ret$1;
                  // Inline function 'kotlin.collections.containsKey' call
                  var tmp1_containsKey = map_0;
                  tmp$ret$1 = (isInterface(tmp1_containsKey, Map) ? tmp1_containsKey : THROW_CCE()).q2(key_0);
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
    var hashes = this.p41_1;
    var array = this.q41_1;
    var result = 0;
    var i = 0;
    var v = 1;
    var s = this.r41_1;
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
    if (this.h()) {
      return '{}';
    }
    var buffer = StringBuilder_init_$Create$_0(imul(this.r41_1, 28));
    buffer.i6(_Char___init__impl__6a9atx(123));
    var inductionVariable = 0;
    var last = this.r41_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i > 0) {
          buffer.k6(', ');
        }
        var key = this.v41(i);
        if (!(key === this)) {
          buffer.fe(key);
        } else {
          buffer.k6('(this Map)');
        }
        buffer.i6(_Char___init__impl__6a9atx(61));
        var value = this.w41(i);
        if (!(value === this)) {
          buffer.fe(value);
        } else {
          buffer.k6('(this Map)');
        }
      }
       while (inductionVariable < last);
    buffer.i6(_Char___init__impl__6a9atx(125));
    return buffer.toString();
  };
  function SimpleArrayMap() {
    this.r41_1 = 0;
  }
  SimpleArrayMap.$metadata$ = classMeta('SimpleArrayMap');
  function ResourceLoader() {
  }
  ResourceLoader.$metadata$ = interfaceMeta('ResourceLoader');
  function Companion_1() {
    Companion_instance_1 = this;
    this.x41_1 = new Long(15000, 0);
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_11() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Font() {
  }
  Font.$metadata$ = interfaceMeta('Font');
  function PlatformFontLoader() {
  }
  PlatformFontLoader.$metadata$ = interfaceMeta('PlatformFontLoader');
  function Resolver() {
  }
  Resolver.$metadata$ = interfaceMeta('Resolver');
  function Companion_2() {
    Companion_instance_2 = this;
    this.f3y_1 = new DefaultFontFamily();
    this.g3y_1 = new GenericFontFamily('sans-serif', 'FontFamily.SansSerif');
    this.h3y_1 = new GenericFontFamily('serif', 'FontFamily.Serif');
    this.i3y_1 = new GenericFontFamily('monospace', 'FontFamily.Monospace');
    this.j3y_1 = new GenericFontFamily('cursive', 'FontFamily.Cursive');
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_12() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function FontFamily(canLoadSynchronously) {
    Companion_getInstance_12();
    this.e42_1 = canLoadSynchronously;
  }
  FontFamily.$metadata$ = classMeta('FontFamily');
  function SystemFontFamily() {
    FontFamily.call(this, true);
    this.g42_1 = 0;
  }
  SystemFontFamily.$metadata$ = classMeta('SystemFontFamily', undefined, undefined, undefined, undefined, FontFamily.prototype);
  function DefaultFontFamily() {
    SystemFontFamily.call(this);
  }
  DefaultFontFamily.prototype.toString = function () {
    return 'FontFamily.Default';
  };
  DefaultFontFamily.$metadata$ = classMeta('DefaultFontFamily', undefined, undefined, undefined, undefined, SystemFontFamily.prototype);
  function GenericFontFamily(name, fontFamilyName) {
    SystemFontFamily.call(this);
    this.j42_1 = name;
    this.k42_1 = fontFamilyName;
  }
  GenericFontFamily.prototype.toString = function () {
    return this.k42_1;
  };
  GenericFontFamily.$metadata$ = classMeta('GenericFontFamily', undefined, undefined, undefined, undefined, SystemFontFamily.prototype);
  function FileBasedFontFamily() {
  }
  FileBasedFontFamily.$metadata$ = classMeta('FileBasedFontFamily', undefined, undefined, undefined, undefined, FontFamily.prototype);
  function LoadedFontFamily() {
  }
  LoadedFontFamily.$metadata$ = classMeta('LoadedFontFamily', undefined, undefined, undefined, undefined, FontFamily.prototype);
  function FontListFontFamily() {
  }
  FontListFontFamily.$metadata$ = classMeta('FontListFontFamily', [List], undefined, undefined, undefined, FileBasedFontFamily.prototype);
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
      platformResolveInterceptor = Companion_getInstance_13().l42_1;
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
  function resolve($this, typefaceRequest) {
    var result = $this.o42_1.u42(typefaceRequest, FontFamilyResolverImpl$resolve$lambda($this, typefaceRequest));
    return result;
  }
  function FontFamilyResolverImpl$createDefaultTypeface$lambda(this$0) {
    return function (it) {
      return resolve(this$0, it.a43(null, null, null, null, null, 30, null)).i2();
    };
  }
  function FontFamilyResolverImpl$resolve$lambda(this$0, $typefaceRequest) {
    return function (onAsyncCompletion) {
      var tmp0_elvis_lhs = this$0.p42_1.d43($typefaceRequest, this$0.m42_1, onAsyncCompletion, this$0.r42_1);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.q42_1.d43($typefaceRequest, this$0.m42_1, onAsyncCompletion, this$0.r42_1) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('Could not load font');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      return tmp;
    };
  }
  function FontFamilyResolverImpl(platformFontLoader, platformResolveInterceptor, typefaceRequestCache, fontListFontFamilyTypefaceAdapter, platformFamilyTypefaceAdapter) {
    this.m42_1 = platformFontLoader;
    this.n42_1 = platformResolveInterceptor;
    this.o42_1 = typefaceRequestCache;
    this.p42_1 = fontListFontFamilyTypefaceAdapter;
    this.q42_1 = platformFamilyTypefaceAdapter;
    var tmp = this;
    tmp.r42_1 = FontFamilyResolverImpl$createDefaultTypeface$lambda(this);
  }
  FontFamilyResolverImpl.prototype.d42 = function (fontFamily, fontWeight, fontStyle, fontSynthesis) {
    return resolve(this, new TypefaceRequest(this.n42_1.e43(fontFamily), this.n42_1.f43(fontWeight), this.n42_1.g43(fontStyle), this.n42_1.h43(fontSynthesis), this.m42_1.c42()));
  };
  FontFamilyResolverImpl.$metadata$ = classMeta('FontFamilyResolverImpl', [Resolver]);
  function TypefaceRequestCache$runCached$lambda(this$0, $typefaceRequest) {
    return function (finalResult) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.text.synchronized' call
      var tmp0_synchronized = this$0.s42_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp;
      if (finalResult.i43()) {
        this$0.t42_1.q($typefaceRequest, finalResult);
        tmp = Unit_getInstance();
      } else {
        this$0.t42_1.k3($typefaceRequest);
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      return Unit_getInstance();
    };
  }
  function TypefaceRequestCache() {
    this.s42_1 = createSynchronizedObject();
    this.t42_1 = LruCache_init_$Create$(16);
  }
  TypefaceRequestCache.prototype.u42 = function (typefaceRequest, resolveTypeface) {
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.s42_1;
    var tmp$ret$3;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.runCached.<anonymous>' call
    var tmp0_safe_receiver = this.t42_1.v(typefaceRequest);
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
      if (tmp0_safe_receiver.i43()) {
        return tmp0_safe_receiver;
      } else {
        tmp_0 = this.t42_1.k3(typefaceRequest);
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
    var tmp1_synchronized = this.s42_1;
    var tmp$ret$5;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp_3;
    if (this.t42_1.v(typefaceRequest) == null ? currentTypefaceResult.i43() : false) {
      this.t42_1.q(typefaceRequest, currentTypefaceResult);
      tmp_3 = Unit_getInstance();
    }
    tmp$ret$5 = tmp_3;
    tmp$ret$6 = tmp$ret$5;
    return currentTypefaceResult;
  };
  TypefaceRequestCache.$metadata$ = classMeta('TypefaceRequestCache');
  function PlatformResolveInterceptor$Companion$Default$1() {
  }
  PlatformResolveInterceptor$Companion$Default$1.$metadata$ = classMeta(undefined, [PlatformResolveInterceptor]);
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    tmp.l42_1 = new PlatformResolveInterceptor$Companion$Default$1();
  }
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_13() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function PlatformResolveInterceptor() {
  }
  PlatformResolveInterceptor.$metadata$ = interfaceMeta('PlatformResolveInterceptor');
  function TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    this.v42_1 = fontFamily;
    this.w42_1 = fontWeight;
    this.x42_1 = fontStyle;
    this.y42_1 = fontSynthesis;
    this.z42_1 = resourceLoaderCacheKey;
  }
  TypefaceRequest.prototype.j43 = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    return new TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey);
  };
  TypefaceRequest.prototype.a43 = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      fontFamily = this.v42_1;
    if (!(($mask0 & 2) === 0))
      fontWeight = this.w42_1;
    if (!(($mask0 & 4) === 0))
      fontStyle = this.x42_1;
    if (!(($mask0 & 8) === 0))
      fontSynthesis = this.y42_1;
    if (!(($mask0 & 16) === 0))
      resourceLoaderCacheKey = this.z42_1;
    return this.j43(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey);
  };
  TypefaceRequest.prototype.toString = function () {
    return 'TypefaceRequest(fontFamily=' + this.v42_1 + ', fontWeight=' + this.w42_1 + ', fontStyle=' + new FontStyle(this.x42_1) + ', fontSynthesis=' + new FontSynthesis(this.y42_1) + ', resourceLoaderCacheKey=' + toString_0(this.z42_1) + ')';
  };
  TypefaceRequest.prototype.hashCode = function () {
    var result = this.v42_1 == null ? 0 : hashCode(this.v42_1);
    result = imul(result, 31) + this.w42_1.hashCode() | 0;
    result = imul(result, 31) + FontStyle__hashCode_impl_7qhg4w(this.x42_1) | 0;
    result = imul(result, 31) + FontSynthesis__hashCode_impl_4wi11v(this.y42_1) | 0;
    result = imul(result, 31) + (this.z42_1 == null ? 0 : hashCode(this.z42_1)) | 0;
    return result;
  };
  TypefaceRequest.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypefaceRequest))
      return false;
    var tmp0_other_with_cast = other instanceof TypefaceRequest ? other : THROW_CCE();
    if (!equals(this.v42_1, tmp0_other_with_cast.v42_1))
      return false;
    if (!this.w42_1.equals(tmp0_other_with_cast.w42_1))
      return false;
    if (!(this.x42_1 === tmp0_other_with_cast.x42_1))
      return false;
    if (!(this.y42_1 === tmp0_other_with_cast.y42_1))
      return false;
    if (!equals(this.z42_1, tmp0_other_with_cast.z42_1))
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
    this.k43_1 = value;
    this.l43_1 = cacheable;
    this.m43_1 = 0;
  }
  Immutable.prototype.i2 = function () {
    return this.k43_1;
  };
  Immutable.prototype.i43 = function () {
    return this.l43_1;
  };
  Immutable.$metadata$ = classMeta('Immutable', [TypefaceResult]);
  function Async(current) {
    this.n43_1 = current;
    this.o43_1 = 0;
  }
  Async.prototype.i2 = function () {
    return this.n43_1.i2();
  };
  Async.prototype.i43 = function () {
    return this.n43_1.v43_1;
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
    var tmp0_other_with_cast = other instanceof AsyncTypefaceResult ? other.w43_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function AsyncTypefaceResult(result) {
    this.w43_1 = result;
  }
  AsyncTypefaceResult.prototype.toString = function () {
    return AsyncTypefaceResult__toString_impl_imltdd(this.w43_1);
  };
  AsyncTypefaceResult.prototype.hashCode = function () {
    return AsyncTypefaceResult__hashCode_impl_34k3fi(this.w43_1);
  };
  AsyncTypefaceResult.prototype.equals = function (other) {
    return AsyncTypefaceResult__equals_impl_4qqxz2(this.w43_1, other);
  };
  AsyncTypefaceResult.$metadata$ = classMeta('AsyncTypefaceResult');
  function Key(font, loaderKey) {
    this.x43_1 = font;
    this.y43_1 = loaderKey;
  }
  Key.prototype.toString = function () {
    return 'Key(font=' + this.x43_1 + ', loaderKey=' + toString_0(this.y43_1) + ')';
  };
  Key.prototype.hashCode = function () {
    var result = hashCode(this.x43_1);
    result = imul(result, 31) + (this.y43_1 == null ? 0 : hashCode(this.y43_1)) | 0;
    return result;
  };
  Key.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!equals(this.x43_1, tmp0_other_with_cast.x43_1))
      return false;
    if (!equals(this.y43_1, tmp0_other_with_cast.y43_1))
      return false;
    return true;
  };
  Key.$metadata$ = classMeta('Key');
  function $runCachedCOROUTINE$1(_this__u8e3s4, font, platformFontLoader, forever, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h44_1 = _this__u8e3s4;
    this.i44_1 = font;
    this.j44_1 = platformFontLoader;
    this.k44_1 = forever;
    this.l44_1 = block;
  }
  $runCachedCOROUTINE$1.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.m44_1 = new Key(this.i44_1, this.j44_1.c42());
            var tmp_0 = this;
            tmp_0.n44_1 = this.h44_1.s44_1;
            var tmp_1 = this;
            var tmp0_elvis_lhs = this.h44_1.q44_1.v(this.m44_1);
            tmp_1.o44_1 = tmp0_elvis_lhs == null ? this.h44_1.r44_1.v(this.m44_1) : tmp0_elvis_lhs;
            if (!(this.o44_1 == null)) {
              return _AsyncTypefaceResult___get_result__impl__kpcqqb(this.o44_1.w43_1);
            }

            this.zf_1 = 1;
            suspendResult = this.l44_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1_also = suspendResult;
            var tmp0_synchronized = this.h44_1.s44_1;
            if (tmp1_also == null) {
              this.h44_1.r44_1.q(this.m44_1, new AsyncTypefaceResult(this.h44_1.p44_1));
            } else if (this.k44_1) {
              this.h44_1.r44_1.q(this.m44_1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(tmp1_also)));
            } else {
              this.h44_1.q44_1.q(this.m44_1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(tmp1_also)));
            }

            return tmp1_also;
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
  $runCachedCOROUTINE$1.$metadata$ = classMeta('$runCachedCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function AsyncTypefaceCache() {
    this.p44_1 = _AsyncTypefaceResult___init__impl__h4msax(null);
    this.q44_1 = LruCache_init_$Create$(16);
    var tmp = this;
    tmp.r44_1 = SimpleArrayMap_init_$Create$(0, 1, null);
    this.s44_1 = createSynchronizedObject();
  }
  AsyncTypefaceCache.prototype.t44 = function (font, platformFontLoader, result, forever) {
    var key = new Key(font, platformFontLoader.c42());
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.s44_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.put.<anonymous>' call
    var tmp;
    if (result == null) {
      tmp = this.r44_1.q(key, new AsyncTypefaceResult(this.p44_1));
    } else if (forever) {
      tmp = this.r44_1.q(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    } else {
      tmp = this.q44_1.q(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  AsyncTypefaceCache.prototype.u44 = function (font, platformFontLoader, result, forever, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      forever = false;
    return this.t44(font, platformFontLoader, result, forever);
  };
  AsyncTypefaceCache.prototype.v44 = function (font, platformFontLoader) {
    var key = new Key(font, platformFontLoader.c42());
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.s44_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.get.<anonymous>' call
    var tmp0_elvis_lhs = this.q44_1.v(key);
    tmp$ret$0 = tmp0_elvis_lhs == null ? this.r44_1.v(key) : tmp0_elvis_lhs;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  AsyncTypefaceCache.prototype.w44 = function (font, platformFontLoader, forever, block, $cont) {
    var tmp = new $runCachedCOROUTINE$1(this, font, platformFontLoader, forever, block, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  AsyncTypefaceCache.prototype.x44 = function (font, platformFontLoader, block) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.s44_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var key = new Key(font, platformFontLoader.c42());
    var tmp0_elvis_lhs = this.q44_1.v(key);
    var priorResult = tmp0_elvis_lhs == null ? this.r44_1.v(key) : tmp0_elvis_lhs;
    var tmp;
    if (!(priorResult == null)) {
      return _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.w43_1);
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp1_also = block();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking.<anonymous>' call
    this.u44(font, platformFontLoader, tmp1_also, false, 8, null);
    tmp$ret$2 = tmp1_also;
    return tmp$ret$2;
  };
  AsyncTypefaceCache.$metadata$ = classMeta('AsyncTypefaceCache');
  function _no_name_provided__qut3iv() {
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  _no_name_provided__qut3iv.prototype.xn = function (context, exception) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.font.Companion.DropExceptionHandler.<anonymous>' call
    tmp$ret$0 = Unit_getInstance();
    return tmp$ret$0;
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [CoroutineExceptionHandler], undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
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
  function Companion_4() {
    Companion_instance_4 = this;
    this.z44_1 = new FontMatcher();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    tmp$ret$0 = new _no_name_provided__qut3iv();
    tmp.a45_1 = tmp$ret$0;
  }
  Companion_4.$metadata$ = objectMeta('Companion');
  var Companion_instance_4;
  function Companion_getInstance_14() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation) {
    this.j45_1 = $asyncLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  FontListFontFamilyTypefaceAdapter$resolve$slambda.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  FontListFontFamilyTypefaceAdapter$resolve$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  FontListFontFamilyTypefaceAdapter$resolve$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = this.j45_1.l45(this);
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
  FontListFontFamilyTypefaceAdapter$resolve$slambda.prototype.f1w = function ($this$launch, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda(this.j45_1, completion);
    i.k45_1 = $this$launch;
    return i;
  };
  FontListFontFamilyTypefaceAdapter$resolve$slambda.$metadata$ = classMeta('FontListFontFamilyTypefaceAdapter$resolve$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function FontListFontFamilyTypefaceAdapter$resolve$slambda_0($asyncLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter(asyncTypefaceCache, injectedContext) {
    Companion_getInstance_14();
    this.b43_1 = asyncTypefaceCache;
    this.c43_1 = CoroutineScope_0(Companion_getInstance_14().a45_1.n5(injectedContext).n5(SupervisorJob(injectedContext.g5(Key_getInstance_0()))));
  }
  FontListFontFamilyTypefaceAdapter.prototype.d43 = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.v42_1;
    if (!(tmp instanceof FontListFontFamily))
      return null;
    var matched = Companion_getInstance_14().z44_1.o45(typefaceRequest.v42_1.n45_1, typefaceRequest.w42_1, typefaceRequest.x42_1);
    var tmp0_container = firstImmediatelyAvailable(matched, typefaceRequest, this.b43_1, platformFontLoader, createDefaultTypeface);
    var asyncFontsToLoad = tmp0_container.z3();
    var synthesizedTypeface = tmp0_container.a4();
    if (asyncFontsToLoad == null) {
      return Immutable_init_$Create$(synthesizedTypeface, false, 2, null);
    }
    var asyncLoader = new AsyncFontListLoader(asyncFontsToLoad, synthesizedTypeface, typefaceRequest, this.b43_1, onAsyncCompletion, platformFontLoader);
    var tmp_0 = this.c43_1;
    var tmp_1 = CoroutineStart_UNDISPATCHED_getInstance();
    launch$default(tmp_0, null, tmp_1, FontListFontFamilyTypefaceAdapter$resolve$slambda_0(asyncLoader, null), 1, null);
    return new Async(asyncLoader);
  };
  FontListFontFamilyTypefaceAdapter.$metadata$ = classMeta('FontListFontFamilyTypefaceAdapter', [FontFamilyTypefaceAdapter]);
  function _set_value__lx0xdg($this, _set____db54di) {
    var tmp0_setValue = value$factory();
    return $this.u43_1.p11(_set____db54di);
  }
  function AsyncFontListLoader$load$slambda(this$0, $item, resultContinuation) {
    this.x45_1 = this$0;
    this.y45_1 = $item;
    CoroutineImpl.call(this, resultContinuation);
  }
  AsyncFontListLoader$load$slambda.prototype.z45 = function ($cont) {
    var tmp = this.a46($cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  AsyncFontListLoader$load$slambda.prototype.gh = function ($cont) {
    return this.z45($cont);
  };
  AsyncFontListLoader$load$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = this.x45_1.b46(this.y45_1, this);
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
  AsyncFontListLoader$load$slambda.prototype.a46 = function (completion) {
    var i = new AsyncFontListLoader$load$slambda(this.x45_1, this.y45_1, completion);
    return i;
  };
  AsyncFontListLoader$load$slambda.$metadata$ = classMeta('AsyncFontListLoader$load$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function AsyncFontListLoader$load$slambda_0(this$0, $item, resultContinuation) {
    var i = new AsyncFontListLoader$load$slambda(this$0, $item, resultContinuation);
    var l = function ($cont) {
      return i.z45($cont);
    };
    l.$arity = 0;
    return l;
  }
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    this.k46_1 = this$0;
    this.l46_1 = $this_loadWithTimeoutOrNull;
    CoroutineImpl.call(this, resultContinuation);
  }
  AsyncFontListLoader$loadWithTimeoutOrNull$slambda.prototype.n46 = function ($this$withTimeoutOrNull, $cont) {
    var tmp = this.f1w($this$withTimeoutOrNull, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  AsyncFontListLoader$loadWithTimeoutOrNull$slambda.prototype.jg = function (p1, $cont) {
    return this.n46((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  AsyncFontListLoader$loadWithTimeoutOrNull$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = this.k46_1.t43_1.b42(this.l46_1, this);
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
  AsyncFontListLoader$loadWithTimeoutOrNull$slambda.prototype.f1w = function ($this$withTimeoutOrNull, completion) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this.k46_1, this.l46_1, completion);
    i.m46_1 = $this$withTimeoutOrNull;
    return i;
  };
  AsyncFontListLoader$loadWithTimeoutOrNull$slambda.$metadata$ = classMeta('AsyncFontListLoader$loadWithTimeoutOrNull$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $cont) {
      return i.n46($this$withTimeoutOrNull, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $loadCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w46_1 = _this__u8e3s4;
  }
  $loadCOROUTINE$2.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 12;
            this.zf_1 = 1;
            continue $sm;
          case 1:
            this.zf_1 = 2;
            continue $sm;
          case 2:
            this.ag_1 = 11;
            var tmp_0 = this;
            tmp_0.z46_1 = this.w46_1.p43_1;
            this.a47_1 = get_indices(this.z46_1).c();
            this.zf_1 = 3;
            continue $sm;
          case 3:
            if (!this.a47_1.d()) {
              this.zf_1 = 9;
              continue $sm;
            }

            this.b47_1 = this.a47_1.e();
            this.c47_1 = this.z46_1.g(this.b47_1);
            if (this.c47_1.z41() === Companion_getInstance_15().g47_1) {
              this.zf_1 = 4;
              suspendResult = this.w46_1.r43_1.w44(this.c47_1, this.w46_1.t43_1, false, AsyncFontListLoader$load$slambda_0(this.w46_1, this.c47_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zf_1 = 7;
              continue $sm;
            }

            break;
          case 4:
            this.d47_1 = suspendResult;
            if (!(this.d47_1 == null)) {
              _set_value__lx0xdg(this.w46_1, synthesizeTypeface(this.w46_1.q43_1.y42_1, this.d47_1, this.c47_1, this.w46_1.q43_1.w42_1, this.w46_1.q43_1.x42_1));
              this.y46_1 = Unit_getInstance();
              this.ag_1 = 12;
              this.zf_1 = 8;
              continue $sm;
            } else {
              this.zf_1 = 5;
              suspendResult = yield_0(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 5:
            this.zf_1 = 6;
            continue $sm;
          case 6:
            this.zf_1 = 7;
            continue $sm;
          case 7:
            this.zf_1 = 3;
            continue $sm;
          case 8:
            var shouldCache = get_isActive(this.o4());
            this.w46_1.v43_1 = false;
            this.w46_1.s43_1(new Immutable(this.w46_1.i2(), shouldCache));
            return Unit_getInstance();
          case 9:
            this.x46_1 = Unit_getInstance();
            this.ag_1 = 12;
            this.zf_1 = 10;
            continue $sm;
          case 10:
            var shouldCache_0 = get_isActive(this.o4());
            this.w46_1.v43_1 = false;
            this.w46_1.s43_1(new Immutable(this.w46_1.i2(), shouldCache_0));
            return Unit_getInstance();
          case 11:
            this.ag_1 = 12;
            var t = this.cg_1;
            var shouldCache_1 = get_isActive(this.o4());
            this.w46_1.v43_1 = false;
            this.w46_1.s43_1(new Immutable(this.w46_1.i2(), shouldCache_1));
            throw t;
          case 12:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 12) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  $loadCOROUTINE$2.$metadata$ = classMeta('$loadCOROUTINE$2', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $loadWithTimeoutOrNullCOROUTINE$3(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p47_1 = _this__u8e3s4;
    this.q47_1 = _this__u8e3s4_0;
  }
  $loadWithTimeoutOrNullCOROUTINE$3.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 3;
            this.ag_1 = 2;
            this.zf_1 = 1;
            Companion_getInstance_11();
            var tmp_0 = new Long(15000, 0);
            suspendResult = withTimeoutOrNull(tmp_0, AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this.p47_1, this.q47_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.r47_1 = suspendResult;
            this.ag_1 = 3;
            this.zf_1 = 4;
            continue $sm;
          case 2:
            this.ag_1 = 3;
            var tmp_1 = this.cg_1;
            if (tmp_1 instanceof CancellationException) {
              var cancel = this.cg_1;
              var tmp_2 = this;
              var tmp_3;
              if (get_isActive(this.o4())) {
                tmp_3 = null;
              } else {
                throw cancel;
              }
              tmp_2.r47_1 = tmp_3;
              this.zf_1 = 4;
              continue $sm;
            } else {
              var tmp_4 = this.cg_1;
              if (tmp_4 instanceof Exception) {
                var uncaughtFontLoadException = this.cg_1;
                var tmp_5 = this;
                var tmp0_safe_receiver = this.o4().g5(Key_getInstance());
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  tmp0_safe_receiver.xn(this.o4(), IllegalStateException_init_$Create$_0('Unable to load font ' + this.q47_1, uncaughtFontLoadException));
                }
                tmp_5.r47_1 = null;
                this.zf_1 = 4;
                continue $sm;
              } else {
                throw this.cg_1;
              }
            }

            break;
          case 3:
            throw this.cg_1;
          case 4:
            this.ag_1 = 3;
            return this.r47_1;
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
  $loadWithTimeoutOrNullCOROUTINE$3.$metadata$ = classMeta('$loadWithTimeoutOrNullCOROUTINE$3', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function AsyncFontListLoader(fontList, initialType, typefaceRequest, asyncTypefaceCache, onCompletion, platformFontLoader) {
    this.p43_1 = fontList;
    this.q43_1 = typefaceRequest;
    this.r43_1 = asyncTypefaceCache;
    this.s43_1 = onCompletion;
    this.t43_1 = platformFontLoader;
    var tmp = this;
    tmp.u43_1 = mutableStateOf$default(initialType, null, 2, null);
    this.v43_1 = true;
  }
  AsyncFontListLoader.prototype.i2 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = value$factory_0();
    tmp$ret$0 = this.u43_1.i2();
    return tmp$ret$0;
  };
  AsyncFontListLoader.prototype.l45 = function ($cont) {
    var tmp = new $loadCOROUTINE$2(this, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  AsyncFontListLoader.prototype.b46 = function (_this__u8e3s4, $cont) {
    var tmp = new $loadWithTimeoutOrNullCOROUTINE$3(this, _this__u8e3s4, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  AsyncFontListLoader.$metadata$ = classMeta('AsyncFontListLoader', [State]);
  function firstImmediatelyAvailable(_this__u8e3s4, typefaceRequest, asyncTypefaceCache, platformFontLoader, createDefaultTypeface) {
    var asyncFontsToLoad = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var idx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var font = _this__u8e3s4.g(idx);
        var tmp1_subject = font.z41();
        if (tmp1_subject === Companion_getInstance_15().e47_1) {
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            var tmp$ret$2;
            // Inline function 'androidx.compose.ui.text.synchronized' call
            var tmp0_synchronized = asyncTypefaceCache.s44_1;
            var tmp$ret$1;
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            var key = new Key(font, platformFontLoader.c42());
            var tmp0_elvis_lhs = asyncTypefaceCache.q44_1.v(key);
            var priorResult = tmp0_elvis_lhs == null ? asyncTypefaceCache.r44_1.v(key) : tmp0_elvis_lhs;
            var tmp;
            if (!(priorResult == null)) {
              tmp$ret$0 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.w43_1);
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
              tmp_0 = platformFontLoader.a42(font);
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
            asyncTypefaceCache.u44(font, platformFontLoader, tmp1_also, false, 8, null);
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
          return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.y42_1, result, font, typefaceRequest.w42_1, typefaceRequest.x42_1));
        } else if (tmp1_subject === Companion_getInstance_15().f47_1) {
          var tmp$ret$5;
          $l$block_0: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            var tmp$ret$7;
            // Inline function 'androidx.compose.ui.text.synchronized' call
            var tmp0_synchronized_0 = asyncTypefaceCache.s44_1;
            var tmp$ret$6;
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            var key_0 = new Key(font, platformFontLoader.c42());
            var tmp0_elvis_lhs_0 = asyncTypefaceCache.q44_1.v(key_0);
            var priorResult_0 = tmp0_elvis_lhs_0 == null ? asyncTypefaceCache.r44_1.v(key_0) : tmp0_elvis_lhs_0;
            var tmp_3;
            if (!(priorResult_0 == null)) {
              tmp$ret$5 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult_0.w43_1);
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
              tmp$ret$8 = platformFontLoader.a42(font);
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
            asyncTypefaceCache.u44(font, platformFontLoader, tmp1_also_0, false, 8, null);
            tmp$ret$14 = tmp1_also_0;
            tmp$ret$5 = tmp$ret$14;
          }
          var result_0 = tmp$ret$5;
          if (!(result_0 == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.y42_1, result_0, font, typefaceRequest.w42_1, typefaceRequest.x42_1));
          }
        } else if (tmp1_subject === Companion_getInstance_15().g47_1) {
          var cacheResult = asyncTypefaceCache.v44(font, platformFontLoader);
          if (cacheResult == null) {
            if (asyncFontsToLoad == null) {
              asyncFontsToLoad = mutableListOf([font]);
            } else {
              asyncFontsToLoad.a(font);
            }
          } else if (_AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca(cacheResult.w43_1)) {
            continue $l$loop;
          } else if (!(_AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.w43_1) == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.y42_1, _AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.w43_1), font, typefaceRequest.w42_1, typefaceRequest.x42_1));
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
      return receiver.i2();
    }, function (receiver, value) {
      return _set_value__lx0xdg(receiver, value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.i2();
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
    return tmp0_subject === Companion_getInstance_15().e47_1 ? 'Blocking' : tmp0_subject === Companion_getInstance_15().f47_1 ? 'Optional' : tmp0_subject === Companion_getInstance_15().g47_1 ? 'Async' : 'Invalid(value=' + _FontLoadingStrategy___get_value__impl__ggsl83($this) + ')';
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.e47_1 = _FontLoadingStrategy___init__impl__if1sp3(0);
    this.f47_1 = _FontLoadingStrategy___init__impl__if1sp3(1);
    this.g47_1 = _FontLoadingStrategy___init__impl__if1sp3(2);
  }
  Companion_5.$metadata$ = objectMeta('Companion');
  var Companion_instance_5;
  function Companion_getInstance_15() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function FontLoadingStrategy__hashCode_impl_xcx5xu($this) {
    return $this;
  }
  function FontLoadingStrategy__equals_impl_5w10z2($this, other) {
    if (!(other instanceof FontLoadingStrategy))
      return false;
    var tmp0_other_with_cast = other instanceof FontLoadingStrategy ? other.s47_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function FontLoadingStrategy(value) {
    Companion_getInstance_15();
    this.s47_1 = value;
  }
  FontLoadingStrategy.prototype.toString = function () {
    return FontLoadingStrategy__toString_impl_fx0z8f(this.s47_1);
  };
  FontLoadingStrategy.prototype.hashCode = function () {
    return FontLoadingStrategy__hashCode_impl_xcx5xu(this.s47_1);
  };
  FontLoadingStrategy.prototype.equals = function (other) {
    return FontLoadingStrategy__equals_impl_5w10z2(this.s47_1, other);
  };
  FontLoadingStrategy.$metadata$ = classMeta('FontLoadingStrategy');
  function FontMatcher() {
  }
  FontMatcher.prototype.o45 = function (fontList, fontWeight, fontStyle) {
    var tmp$ret$3;
    // Inline function 'kotlin.let' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(fontList.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = fontList.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = fontList.g(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        tmp$ret$0 = item.w2r().equals(fontWeight) ? item.y41() === fontStyle : false;
        if (tmp$ret$0) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.a(item);
        }
      }
       while (inductionVariable <= last);
    tmp$ret$1 = target;
    var tmp0_let = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$2 = !tmp0_let.h();
    if (tmp$ret$2) {
      return tmp0_let;
    }
    tmp$ret$3 = tmp;
    var tmp$ret$7;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$(fontList.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = fontList.f() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = fontList.g(index_0);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        var tmp$ret$4;
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        tmp$ret$4 = item_0.y41() === fontStyle;
        if (tmp$ret$4) {
          // Inline function 'kotlin.collections.plusAssign' call
          target_0.a(item_0);
        }
      }
       while (inductionVariable_0 <= last_0);
    tmp$ret$5 = target_0;
    var tmp1_ifEmpty = tmp$ret$5;
    var tmp_0;
    if (tmp1_ifEmpty.h()) {
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
    if (fontWeight.u47(Companion_getInstance_18().j3x_1) < 0) {
      var tmp$ret$10;
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove = null;
      var bestWeightBelow = null;
      var inductionVariable_1 = 0;
      var last_1 = fontsToSearch.f() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        $l$loop_1: do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var font = fontsToSearch.g(index_1);
          var possibleWeight = font.w2r();
          if (!(null == null) ? possibleWeight.u47(null) < 0 : false) {
            continue $l$loop_1;
          }
          if (!(null == null) ? possibleWeight.u47(null) > 0 : false) {
            continue $l$loop_1;
          }
          if (possibleWeight.u47(fontWeight) < 0) {
            if (bestWeightBelow == null ? true : possibleWeight.u47(bestWeightBelow) > 0) {
              bestWeightBelow = possibleWeight;
            }
          } else if (possibleWeight.u47(fontWeight) > 0) {
            if (bestWeightAbove == null ? true : possibleWeight.u47(bestWeightAbove) < 0) {
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
      var target_1 = ArrayList_init_$Create$(fontsToSearch.f());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      var last_2 = fontsToSearch.f() - 1 | 0;
      if (inductionVariable_2 <= last_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_1 = fontsToSearch.g(index_2);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          var tmp$ret$8;
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          tmp$ret$8 = item_1.w2r().equals(bestWeight);
          if (tmp$ret$8) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_1.a(item_1);
          }
        }
         while (inductionVariable_2 <= last_2);
      tmp$ret$9 = target_1;
      tmp$ret$10 = tmp$ret$9;
      tmp_1 = tmp$ret$10;
    } else if (fontWeight.u47(Companion_getInstance_18().k3x_1) > 0) {
      var tmp$ret$13;
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove_0 = null;
      var bestWeightBelow_0 = null;
      var inductionVariable_3 = 0;
      var last_3 = fontsToSearch.f() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        $l$loop_4: do {
          var index_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var font_0 = fontsToSearch.g(index_3);
          var possibleWeight_0 = font_0.w2r();
          if (!(null == null) ? possibleWeight_0.u47(null) < 0 : false) {
            continue $l$loop_4;
          }
          if (!(null == null) ? possibleWeight_0.u47(null) > 0 : false) {
            continue $l$loop_4;
          }
          if (possibleWeight_0.u47(fontWeight) < 0) {
            if (bestWeightBelow_0 == null ? true : possibleWeight_0.u47(bestWeightBelow_0) > 0) {
              bestWeightBelow_0 = possibleWeight_0;
            }
          } else if (possibleWeight_0.u47(fontWeight) > 0) {
            if (bestWeightAbove_0 == null ? true : possibleWeight_0.u47(bestWeightAbove_0) < 0) {
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
      var target_2 = ArrayList_init_$Create$(fontsToSearch.f());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_4 = 0;
      var last_4 = fontsToSearch.f() - 1 | 0;
      if (inductionVariable_4 <= last_4)
        do {
          var index_4 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var item_2 = fontsToSearch.g(index_4);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          var tmp$ret$11;
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          tmp$ret$11 = item_2.w2r().equals(bestWeight_0);
          if (tmp$ret$11) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_2.a(item_2);
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
      var tmp2_filterByClosestWeight = Companion_getInstance_18().k3x_1;
      var bestWeightAbove_1 = null;
      var bestWeightBelow_1 = null;
      var inductionVariable_5 = 0;
      var last_5 = fontsToSearch.f() - 1 | 0;
      if (inductionVariable_5 <= last_5)
        $l$loop_7: do {
          var index_5 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          var font_1 = fontsToSearch.g(index_5);
          var possibleWeight_1 = font_1.w2r();
          if (!(null == null) ? possibleWeight_1.u47(null) < 0 : false) {
            continue $l$loop_7;
          }
          if (!(tmp2_filterByClosestWeight == null) ? possibleWeight_1.u47(tmp2_filterByClosestWeight) > 0 : false) {
            continue $l$loop_7;
          }
          if (possibleWeight_1.u47(fontWeight) < 0) {
            if (bestWeightBelow_1 == null ? true : possibleWeight_1.u47(bestWeightBelow_1) > 0) {
              bestWeightBelow_1 = possibleWeight_1;
            }
          } else if (possibleWeight_1.u47(fontWeight) > 0) {
            if (bestWeightAbove_1 == null ? true : possibleWeight_1.u47(bestWeightAbove_1) < 0) {
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
      var target_3 = ArrayList_init_$Create$(fontsToSearch.f());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_6 = 0;
      var last_6 = fontsToSearch.f() - 1 | 0;
      if (inductionVariable_6 <= last_6)
        do {
          var index_6 = inductionVariable_6;
          inductionVariable_6 = inductionVariable_6 + 1 | 0;
          var item_3 = fontsToSearch.g(index_6);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          var tmp$ret$14;
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          tmp$ret$14 = item_3.w2r().equals(bestWeight_1);
          if (tmp$ret$14) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_3.a(item_3);
          }
        }
         while (inductionVariable_6 <= last_6);
      tmp$ret$15 = target_3;
      tmp$ret$16 = tmp$ret$15;
      var tmp3_ifEmpty = tmp$ret$16;
      var tmp_5;
      if (tmp3_ifEmpty.h()) {
        var tmp$ret$20;
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        var tmp$ret$19;
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
        var tmp0_filterByClosestWeight = Companion_getInstance_18().k3x_1;
        var bestWeightAbove_2 = null;
        var bestWeightBelow_2 = null;
        var inductionVariable_7 = 0;
        var last_7 = fontsToSearch.f() - 1 | 0;
        if (inductionVariable_7 <= last_7)
          $l$loop_10: do {
            var index_7 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            var font_2 = fontsToSearch.g(index_7);
            var possibleWeight_2 = font_2.w2r();
            if (!(tmp0_filterByClosestWeight == null) ? possibleWeight_2.u47(tmp0_filterByClosestWeight) < 0 : false) {
              continue $l$loop_10;
            }
            if (!(null == null) ? possibleWeight_2.u47(null) > 0 : false) {
              continue $l$loop_10;
            }
            if (possibleWeight_2.u47(fontWeight) < 0) {
              if (bestWeightBelow_2 == null ? true : possibleWeight_2.u47(bestWeightBelow_2) > 0) {
                bestWeightBelow_2 = possibleWeight_2;
              }
            } else if (possibleWeight_2.u47(fontWeight) > 0) {
              if (bestWeightAbove_2 == null ? true : possibleWeight_2.u47(bestWeightAbove_2) < 0) {
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
        var target_4 = ArrayList_init_$Create$(fontsToSearch.f());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_8 = 0;
        var last_8 = fontsToSearch.f() - 1 | 0;
        if (inductionVariable_8 <= last_8)
          do {
            var index_8 = inductionVariable_8;
            inductionVariable_8 = inductionVariable_8 + 1 | 0;
            var item_4 = fontsToSearch.g(index_8);
            // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
            var tmp$ret$17;
            // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
            tmp$ret$17 = item_4.w2r().equals(bestWeight_2);
            if (tmp$ret$17) {
              // Inline function 'kotlin.collections.plusAssign' call
              target_4.a(item_4);
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
  FontMatcher.prototype.v47 = function (_this__u8e3s4, fontWeight, preferBelow, minSearchRange, maxSearchRange) {
    var bestWeightAbove = null;
    var bestWeightBelow = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop_1: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var font = _this__u8e3s4.g(index);
        var possibleWeight = font.w2r();
        if (!(minSearchRange == null) ? possibleWeight.u47(minSearchRange) < 0 : false) {
          continue $l$loop_1;
        }
        if (!(maxSearchRange == null) ? possibleWeight.u47(maxSearchRange) > 0 : false) {
          continue $l$loop_1;
        }
        if (possibleWeight.u47(fontWeight) < 0) {
          if (bestWeightBelow == null ? true : possibleWeight.u47(bestWeightBelow) > 0) {
            bestWeightBelow = possibleWeight;
          }
        } else if (possibleWeight.u47(fontWeight) > 0) {
          if (bestWeightAbove == null ? true : possibleWeight.u47(bestWeightAbove) < 0) {
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
    var target = ArrayList_init_$Create$(_this__u8e3s4.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item = _this__u8e3s4.g(index_0);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
        tmp$ret$0 = item.w2r().equals(bestWeight);
        if (tmp$ret$0) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.a(item);
        }
      }
       while (inductionVariable_0 <= last_0);
    tmp$ret$1 = target;
    return tmp$ret$1;
  };
  FontMatcher.$metadata$ = classMeta('FontMatcher');
  function _FontStyle___init__impl__jcnduf(value) {
    return value;
  }
  function FontStyle__toString_impl_thncxr($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_16().z3x_1 ? 'Normal' : tmp0_subject === Companion_getInstance_16().a3y_1 ? 'Italic' : 'Invalid';
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.z3x_1 = _FontStyle___init__impl__jcnduf(0);
    this.a3y_1 = _FontStyle___init__impl__jcnduf(1);
  }
  Companion_6.prototype.w47 = function () {
    return this.z3x_1;
  };
  Companion_6.$metadata$ = objectMeta('Companion');
  var Companion_instance_6;
  function Companion_getInstance_16() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function FontStyle__hashCode_impl_7qhg4w($this) {
    return $this;
  }
  function FontStyle__equals_impl_2zal3g($this, other) {
    if (!(other instanceof FontStyle))
      return false;
    var tmp0_other_with_cast = other instanceof FontStyle ? other.x47_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function FontStyle(value) {
    Companion_getInstance_16();
    this.x47_1 = value;
  }
  FontStyle.prototype.toString = function () {
    return FontStyle__toString_impl_thncxr(this.x47_1);
  };
  FontStyle.prototype.hashCode = function () {
    return FontStyle__hashCode_impl_7qhg4w(this.x47_1);
  };
  FontStyle.prototype.equals = function (other) {
    return FontStyle__equals_impl_2zal3g(this.x47_1, other);
  };
  FontStyle.$metadata$ = classMeta('FontStyle');
  function _FontSynthesis___init__impl__n397bg(value) {
    return value;
  }
  function FontSynthesis__toString_impl_gunvr0($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_17().b3y_1 ? 'None' : tmp0_subject === Companion_getInstance_17().c3y_1 ? 'All' : tmp0_subject === Companion_getInstance_17().d3y_1 ? 'Weight' : tmp0_subject === Companion_getInstance_17().e3y_1 ? 'Style' : 'Invalid';
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.b3y_1 = _FontSynthesis___init__impl__n397bg(0);
    this.c3y_1 = _FontSynthesis___init__impl__n397bg(1);
    this.d3y_1 = _FontSynthesis___init__impl__n397bg(2);
    this.e3y_1 = _FontSynthesis___init__impl__n397bg(3);
  }
  Companion_7.prototype.y47 = function () {
    return this.c3y_1;
  };
  Companion_7.$metadata$ = objectMeta('Companion');
  var Companion_instance_7;
  function Companion_getInstance_17() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function FontSynthesis__hashCode_impl_4wi11v($this) {
    return $this;
  }
  function FontSynthesis__equals_impl_zgu9mf($this, other) {
    if (!(other instanceof FontSynthesis))
      return false;
    var tmp0_other_with_cast = other instanceof FontSynthesis ? other.z47_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function FontSynthesis(value) {
    Companion_getInstance_17();
    this.z47_1 = value;
  }
  FontSynthesis.prototype.toString = function () {
    return FontSynthesis__toString_impl_gunvr0(this.z47_1);
  };
  FontSynthesis.prototype.hashCode = function () {
    return FontSynthesis__hashCode_impl_4wi11v(this.z47_1);
  };
  FontSynthesis.prototype.equals = function (other) {
    return FontSynthesis__equals_impl_zgu9mf(this.z47_1, other);
  };
  FontSynthesis.$metadata$ = classMeta('FontSynthesis');
  function Companion_8() {
    Companion_instance_8 = this;
    this.g3x_1 = new FontWeight(100);
    this.h3x_1 = new FontWeight(200);
    this.i3x_1 = new FontWeight(300);
    this.j3x_1 = new FontWeight(400);
    this.k3x_1 = new FontWeight(500);
    this.l3x_1 = new FontWeight(600);
    this.m3x_1 = new FontWeight(700);
    this.n3x_1 = new FontWeight(800);
    this.o3x_1 = new FontWeight(900);
    this.p3x_1 = this.g3x_1;
    this.q3x_1 = this.h3x_1;
    this.r3x_1 = this.i3x_1;
    this.s3x_1 = this.j3x_1;
    this.t3x_1 = this.k3x_1;
    this.u3x_1 = this.l3x_1;
    this.v3x_1 = this.m3x_1;
    this.w3x_1 = this.n3x_1;
    this.x3x_1 = this.o3x_1;
    this.y3x_1 = listOf([this.g3x_1, this.h3x_1, this.i3x_1, this.j3x_1, this.k3x_1, this.l3x_1, this.m3x_1, this.n3x_1, this.o3x_1]);
  }
  Companion_8.prototype.a48 = function () {
    return this.k3x_1;
  };
  Companion_8.prototype.b48 = function () {
    return this.s3x_1;
  };
  Companion_8.prototype.c48 = function () {
    return this.t3x_1;
  };
  Companion_8.$metadata$ = objectMeta('Companion');
  var Companion_instance_8;
  function Companion_getInstance_18() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function FontWeight(weight) {
    Companion_getInstance_18();
    this.t47_1 = weight;
    // Inline function 'kotlin.require' call
    var containsArg = this.t47_1;
    var tmp0_require = 1 <= containsArg ? containsArg <= 1000 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.font.FontWeight.<anonymous>' call
      tmp$ret$0 = 'Font weight can be in range [1, 1000]. Current value: ' + this.t47_1;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  FontWeight.prototype.w2r = function () {
    return this.t47_1;
  };
  FontWeight.prototype.u47 = function (other) {
    return compareTo(this.t47_1, other.t47_1);
  };
  FontWeight.prototype.t7 = function (other) {
    return this.u47(other instanceof FontWeight ? other : THROW_CCE());
  };
  FontWeight.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontWeight))
      return false;
    if (!(this.t47_1 === other.t47_1))
      return false;
    return true;
  };
  FontWeight.prototype.hashCode = function () {
    return this.t47_1;
  };
  FontWeight.prototype.toString = function () {
    return 'FontWeight(weight=' + this.t47_1 + ')';
  };
  FontWeight.$metadata$ = classMeta('FontWeight', [Comparable]);
  function Typeface() {
  }
  Typeface.$metadata$ = interfaceMeta('Typeface');
  function EditCommand() {
  }
  EditCommand.$metadata$ = interfaceMeta('EditCommand');
  function CommitTextCommand_init_$Init$(text, newCursorPosition, $this) {
    CommitTextCommand.call($this, AnnotatedString_init_$Create$(text, null, null, 6, null), newCursorPosition);
    return $this;
  }
  function CommitTextCommand_init_$Create$(text, newCursorPosition) {
    return CommitTextCommand_init_$Init$(text, newCursorPosition, Object.create(CommitTextCommand.prototype));
  }
  function CommitTextCommand(annotatedString, newCursorPosition) {
    this.d48_1 = annotatedString;
    this.e48_1 = newCursorPosition;
    this.f48_1 = 0;
  }
  CommitTextCommand.prototype.t3s = function () {
    return this.d48_1.p3s_1;
  };
  CommitTextCommand.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CommitTextCommand))
      return false;
    if (!(this.t3s() === other.t3s()))
      return false;
    if (!(this.e48_1 === other.e48_1))
      return false;
    return true;
  };
  CommitTextCommand.prototype.hashCode = function () {
    var result = getStringHashCode(this.t3s());
    result = imul(31, result) + this.e48_1 | 0;
    return result;
  };
  CommitTextCommand.prototype.toString = function () {
    return "CommitTextCommand(text='" + this.t3s() + "', newCursorPosition=" + this.e48_1 + ')';
  };
  CommitTextCommand.$metadata$ = classMeta('CommitTextCommand', [EditCommand]);
  function TextInputService(platformTextInputService) {
    this.g48_1 = platformTextInputService;
    this.h48_1 = new AtomicReference(null);
    this.i48_1 = 8;
  }
  TextInputService.$metadata$ = classMeta('TextInputService');
  function PlatformTextInputService() {
  }
  PlatformTextInputService.$metadata$ = interfaceMeta('PlatformTextInputService');
  function Companion_9() {
    Companion_instance_9 = this;
  }
  Companion_9.$metadata$ = objectMeta('Companion');
  var Companion_instance_9;
  function Companion_getInstance_19() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function Locale(platformLocale) {
    Companion_getInstance_19();
    this.j48_1 = platformLocale;
  }
  Locale.prototype.k48 = function () {
    return this.j48_1.k48();
  };
  Locale.prototype.equals = function (other) {
    if (other == null)
      return false;
    if (!(other instanceof Locale))
      return false;
    if (this === other)
      return true;
    return this.k48() === other.k48();
  };
  Locale.prototype.hashCode = function () {
    return getStringHashCode(this.k48());
  };
  Locale.prototype.toString = function () {
    return this.k48();
  };
  Locale.$metadata$ = classMeta('Locale');
  function Companion_10() {
    Companion_instance_10 = this;
  }
  Companion_10.prototype.s19 = function () {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp0_fastMap = get_platformLocaleDelegate().s19();
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(tmp0_fastMap.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastMap.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastMap.g(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.intl.Companion.<get-current>.<anonymous>' call
        tmp$ret$0 = new Locale(item);
        var tmp0_plusAssign = tmp$ret$0;
        target.a(tmp0_plusAssign);
      }
       while (inductionVariable <= last);
    tmp$ret$1 = target;
    return new LocaleList(tmp$ret$1);
  };
  Companion_10.$metadata$ = objectMeta('Companion');
  var Companion_instance_10;
  function Companion_getInstance_20() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function LocaleList(localeList) {
    Companion_getInstance_20();
    this.l48_1 = localeList;
    this.m48_1 = this.l48_1.f();
  }
  LocaleList.prototype.f = function () {
    return this.m48_1;
  };
  LocaleList.prototype.n48 = function (element) {
    return this.l48_1.m(element);
  };
  LocaleList.prototype.m = function (element) {
    if (!(element instanceof Locale))
      return false;
    return this.n48(element instanceof Locale ? element : THROW_CCE());
  };
  LocaleList.prototype.o48 = function (elements) {
    return this.l48_1.t1(elements);
  };
  LocaleList.prototype.t1 = function (elements) {
    return this.o48(elements);
  };
  LocaleList.prototype.h = function () {
    return this.l48_1.h();
  };
  LocaleList.prototype.c = function () {
    return this.l48_1.c();
  };
  LocaleList.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LocaleList))
      return false;
    if (!equals(this.l48_1, other.l48_1))
      return false;
    return true;
  };
  LocaleList.prototype.hashCode = function () {
    return hashCode(this.l48_1);
  };
  LocaleList.prototype.toString = function () {
    return 'LocaleList(localeList=' + this.l48_1 + ')';
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
  function Companion_11() {
    Companion_instance_11 = this;
    this.k3y_1 = _BaselineShift___init__impl__scj05g(0.5);
    this.l3y_1 = _BaselineShift___init__impl__scj05g(-0.5);
    this.m3y_1 = _BaselineShift___init__impl__scj05g(0.0);
  }
  Companion_11.$metadata$ = objectMeta('Companion');
  var Companion_instance_11;
  function Companion_getInstance_21() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
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
    var tmp0_other_with_cast = other instanceof BaselineShift ? other.p48_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function BaselineShift(multiplier) {
    Companion_getInstance_21();
    this.p48_1 = multiplier;
  }
  BaselineShift.prototype.toString = function () {
    return BaselineShift__toString_impl_x98gcc(this.p48_1);
  };
  BaselineShift.prototype.hashCode = function () {
    return BaselineShift__hashCode_impl_g0potx(this.p48_1);
  };
  BaselineShift.prototype.equals = function (other) {
    return BaselineShift__equals_impl_37wrjj(this.p48_1, other);
  };
  BaselineShift.$metadata$ = classMeta('BaselineShift');
  function Companion_12() {
    Companion_instance_12 = this;
    this.s3v_1 = new Hyphens();
    this.t3v_1 = new Hyphens();
  }
  Companion_12.$metadata$ = objectMeta('Companion');
  var Companion_instance_12;
  function Companion_getInstance_22() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function Hyphens() {
    Companion_getInstance_22();
    this.q48_1 = 0;
  }
  Hyphens.$metadata$ = classMeta('Hyphens');
  function Trim__hashCode_impl_vclj5c($this) {
    return $this;
  }
  function Alignment__hashCode_impl_omr6of($this) {
    return getNumberHashCode($this);
  }
  var ResolvedTextDirection_Ltr_instance;
  var ResolvedTextDirection_Rtl_instance;
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
  function TextAlign__toString_impl_6ha6d3($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_23().i3v_1 ? 'Left' : tmp0_subject === Companion_getInstance_23().j3v_1 ? 'Right' : tmp0_subject === Companion_getInstance_23().k3v_1 ? 'Center' : tmp0_subject === Companion_getInstance_23().l3v_1 ? 'Justify' : tmp0_subject === Companion_getInstance_23().m3v_1 ? 'Start' : tmp0_subject === Companion_getInstance_23().n3v_1 ? 'End' : 'Invalid';
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.i3v_1 = _TextAlign___init__impl__99wz4v(1);
    this.j3v_1 = _TextAlign___init__impl__99wz4v(2);
    this.k3v_1 = _TextAlign___init__impl__99wz4v(3);
    this.l3v_1 = _TextAlign___init__impl__99wz4v(4);
    this.m3v_1 = _TextAlign___init__impl__99wz4v(5);
    this.n3v_1 = _TextAlign___init__impl__99wz4v(6);
  }
  Companion_13.prototype.r48 = function () {
    return this.k3v_1;
  };
  Companion_13.prototype.s48 = function () {
    return this.n3v_1;
  };
  Companion_13.$metadata$ = objectMeta('Companion');
  var Companion_instance_13;
  function Companion_getInstance_23() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function TextAlign__hashCode_impl_s8g35y($this) {
    return $this;
  }
  function TextAlign__equals_impl_latoh6($this, other) {
    if (!(other instanceof TextAlign))
      return false;
    var tmp0_other_with_cast = other instanceof TextAlign ? other.t48_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextAlign(value) {
    Companion_getInstance_23();
    this.t48_1 = value;
  }
  TextAlign.prototype.toString = function () {
    return TextAlign__toString_impl_6ha6d3(this.t48_1);
  };
  TextAlign.prototype.hashCode = function () {
    return TextAlign__hashCode_impl_s8g35y(this.t48_1);
  };
  TextAlign.prototype.equals = function (other) {
    return TextAlign__equals_impl_latoh6(this.t48_1, other);
  };
  TextAlign.$metadata$ = classMeta('TextAlign');
  function Companion_14() {
    Companion_instance_14 = this;
    this.o3y_1 = new TextDecoration(0);
    this.p3y_1 = new TextDecoration(1);
    this.q3y_1 = new TextDecoration(2);
  }
  Companion_14.$metadata$ = objectMeta('Companion');
  var Companion_instance_14;
  function Companion_getInstance_24() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function TextDecoration(mask) {
    Companion_getInstance_24();
    this.u48_1 = mask;
  }
  TextDecoration.prototype.v48 = function (other) {
    return (this.u48_1 | other.u48_1) === this.u48_1;
  };
  TextDecoration.prototype.toString = function () {
    if (this.u48_1 === 0) {
      return 'TextDecoration.None';
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var values = tmp$ret$0;
    if (!((this.u48_1 & Companion_getInstance_24().p3y_1.u48_1) === 0)) {
      values.a('Underline');
    }
    if (!((this.u48_1 & Companion_getInstance_24().q3y_1.u48_1) === 0)) {
      values.a('LineThrough');
    }
    if (values.f() === 1) {
      return 'TextDecoration.' + values.g(0);
    }
    return 'TextDecoration[' + fastJoinToString$default(values, ', ', null, null, 0, null, null, 62, null) + ']';
  };
  TextDecoration.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextDecoration))
      return false;
    if (!(this.u48_1 === other.u48_1))
      return false;
    return true;
  };
  TextDecoration.prototype.hashCode = function () {
    return this.u48_1;
  };
  TextDecoration.$metadata$ = classMeta('TextDecoration');
  function _TextDirection___init__impl__lh8lzt(value) {
    return value;
  }
  function TextDirection__toString_impl_x3uh9t($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_25().v40_1 ? 'Ltr' : tmp0_subject === Companion_getInstance_25().w40_1 ? 'Rtl' : tmp0_subject === Companion_getInstance_25().x40_1 ? 'Content' : tmp0_subject === Companion_getInstance_25().y40_1 ? 'ContentOrLtr' : tmp0_subject === Companion_getInstance_25().z40_1 ? 'ContentOrRtl' : 'Invalid';
  }
  function Companion_15() {
    Companion_instance_15 = this;
    this.v40_1 = _TextDirection___init__impl__lh8lzt(1);
    this.w40_1 = _TextDirection___init__impl__lh8lzt(2);
    this.x40_1 = _TextDirection___init__impl__lh8lzt(3);
    this.y40_1 = _TextDirection___init__impl__lh8lzt(4);
    this.z40_1 = _TextDirection___init__impl__lh8lzt(5);
  }
  Companion_15.$metadata$ = objectMeta('Companion');
  var Companion_instance_15;
  function Companion_getInstance_25() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function TextDirection__hashCode_impl_g63nwg($this) {
    return $this;
  }
  function TextDirection__equals_impl_3fvxt0($this, other) {
    if (!(other instanceof TextDirection))
      return false;
    var tmp0_other_with_cast = other instanceof TextDirection ? other.w48_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextDirection(value) {
    Companion_getInstance_25();
    this.w48_1 = value;
  }
  TextDirection.prototype.toString = function () {
    return TextDirection__toString_impl_x3uh9t(this.w48_1);
  };
  TextDirection.prototype.hashCode = function () {
    return TextDirection__hashCode_impl_g63nwg(this.w48_1);
  };
  TextDirection.prototype.equals = function (other) {
    return TextDirection__equals_impl_3fvxt0(this.w48_1, other);
  };
  TextDirection.$metadata$ = classMeta('TextDirection');
  function Unspecified() {
    Unspecified_instance = this;
    this.x48_1 = 0;
  }
  Unspecified.prototype.u3e = function () {
    return Companion_getInstance_0().q3a_1;
  };
  Unspecified.prototype.z3w = function () {
    return null;
  };
  Unspecified.prototype.c36 = function () {
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
  function Companion_16() {
    Companion_instance_16 = this;
  }
  Companion_16.prototype.e3w = function (color) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(color), _Color___get_value__impl__1pls5m(Companion_getInstance_0().q3a_1));
    if (tmp$ret$0) {
      tmp = new ColorStyle(color);
    } else {
      tmp = Unspecified_getInstance();
    }
    return tmp;
  };
  Companion_16.$metadata$ = objectMeta('Companion');
  var Companion_instance_16;
  function Companion_getInstance_26() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function TextForegroundStyle$merge$lambda(this$0) {
    return function () {
      return this$0.c36();
    };
  }
  function TextForegroundStyle$merge$lambda_0(this$0) {
    return function () {
      return this$0;
    };
  }
  function TextForegroundStyle() {
  }
  TextForegroundStyle.$metadata$ = interfaceMeta('TextForegroundStyle');
  function BrushStyle(value, alpha) {
    this.y48_1 = value;
    this.z48_1 = alpha;
  }
  BrushStyle.prototype.c36 = function () {
    return this.z48_1;
  };
  BrushStyle.prototype.u3e = function () {
    return Companion_getInstance_0().q3a_1;
  };
  BrushStyle.prototype.z3w = function () {
    return this.y48_1;
  };
  BrushStyle.prototype.toString = function () {
    return 'BrushStyle(value=' + this.y48_1 + ', alpha=' + this.z48_1 + ')';
  };
  BrushStyle.prototype.hashCode = function () {
    var result = hashCode(this.y48_1);
    result = imul(result, 31) + getNumberHashCode(this.z48_1) | 0;
    return result;
  };
  BrushStyle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BrushStyle))
      return false;
    var tmp0_other_with_cast = other instanceof BrushStyle ? other : THROW_CCE();
    if (!equals(this.y48_1, tmp0_other_with_cast.y48_1))
      return false;
    if (!equals(this.z48_1, tmp0_other_with_cast.z48_1))
      return false;
    return true;
  };
  BrushStyle.$metadata$ = classMeta('BrushStyle', [TextForegroundStyle]);
  function takeOrElse_0(_this__u8e3s4, block) {
    return isNaN_0(_this__u8e3s4) ? block() : _this__u8e3s4;
  }
  function ColorStyle(value) {
    this.a49_1 = value;
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var tmp0__get_isSpecified__cddt7f = this.a49_1;
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(tmp0__get_isSpecified__cddt7f), _Color___get_value__impl__1pls5m(Companion_getInstance_0().q3a_1));
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
  ColorStyle.prototype.u3e = function () {
    return this.a49_1;
  };
  ColorStyle.prototype.z3w = function () {
    return null;
  };
  ColorStyle.prototype.c36 = function () {
    return _Color___get_alpha__impl__wcfyv1(this.u3e());
  };
  ColorStyle.prototype.toString = function () {
    return 'ColorStyle(value=' + new Color(this.a49_1) + ')';
  };
  ColorStyle.prototype.hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.a49_1);
  };
  ColorStyle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColorStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ColorStyle ? other : THROW_CCE();
    if (!equals(this.a49_1, tmp0_other_with_cast.a49_1))
      return false;
    return true;
  };
  ColorStyle.$metadata$ = classMeta('ColorStyle', [TextForegroundStyle]);
  function Companion_17() {
    Companion_instance_17 = this;
    this.n3y_1 = new TextGeometricTransform(1.0, 0.0);
  }
  Companion_17.$metadata$ = objectMeta('Companion');
  var Companion_instance_17;
  function Companion_getInstance_27() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function TextGeometricTransform(scaleX, skewX) {
    Companion_getInstance_27();
    this.b49_1 = scaleX;
    this.c49_1 = skewX;
  }
  TextGeometricTransform.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextGeometricTransform))
      return false;
    if (!(this.b49_1 === other.b49_1))
      return false;
    if (!(this.c49_1 === other.c49_1))
      return false;
    return true;
  };
  TextGeometricTransform.prototype.hashCode = function () {
    var result = getNumberHashCode(this.b49_1);
    result = imul(31, result) + getNumberHashCode(this.c49_1) | 0;
    return result;
  };
  TextGeometricTransform.prototype.toString = function () {
    return 'TextGeometricTransform(scaleX=' + this.b49_1 + ', skewX=' + this.c49_1 + ')';
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
  function Companion_18() {
    Companion_instance_18 = this;
    var tmp = this;
    tmp.o3v_1 = TextIndent_init_$Create$(null, null, 3, null);
  }
  Companion_18.$metadata$ = objectMeta('Companion');
  var Companion_instance_18;
  function Companion_getInstance_28() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function TextIndent_0(firstLine, restLine) {
    Companion_getInstance_28();
    this.d49_1 = firstLine;
    this.e49_1 = restLine;
  }
  TextIndent_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent_0))
      return false;
    if (!equals(this.d49_1, other.d49_1))
      return false;
    if (!equals(this.e49_1, other.e49_1))
      return false;
    return true;
  };
  TextIndent_0.prototype.hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.d49_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.e49_1) | 0;
    return result;
  };
  TextIndent_0.prototype.toString = function () {
    return 'TextIndent(firstLine=' + new TextUnit(this.d49_1) + ', restLine=' + new TextUnit(this.e49_1) + ')';
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
    return tmp0_subject === Companion_getInstance_29().w3z_1 ? 'Clip' : tmp0_subject === Companion_getInstance_29().x3z_1 ? 'Ellipsis' : tmp0_subject === Companion_getInstance_29().y3z_1 ? 'Visible' : 'Invalid';
  }
  function Companion_19() {
    Companion_instance_19 = this;
    this.w3z_1 = _TextOverflow___init__impl__obguoe(1);
    this.x3z_1 = _TextOverflow___init__impl__obguoe(2);
    this.y3z_1 = _TextOverflow___init__impl__obguoe(3);
  }
  Companion_19.$metadata$ = objectMeta('Companion');
  var Companion_instance_19;
  function Companion_getInstance_29() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function TextOverflow__hashCode_impl_kqdwgt($this) {
    return $this;
  }
  function TextOverflow__equals_impl_jkxdof($this, other) {
    if (!(other instanceof TextOverflow))
      return false;
    var tmp0_other_with_cast = other instanceof TextOverflow ? other.f49_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextOverflow(value) {
    Companion_getInstance_29();
    this.f49_1 = value;
  }
  TextOverflow.prototype.toString = function () {
    return TextOverflow__toString_impl_10s0c2(this.f49_1);
  };
  TextOverflow.prototype.hashCode = function () {
    return TextOverflow__hashCode_impl_kqdwgt(this.f49_1);
  };
  TextOverflow.prototype.equals = function (other) {
    return TextOverflow__equals_impl_jkxdof(this.f49_1, other);
  };
  TextOverflow.$metadata$ = classMeta('TextOverflow');
  function synthesizeTypeface(_this__u8e3s4, typeface, font, requestedWeight, requestedStyle) {
    return typeface;
  }
  function createPlatformLocaleDelegate() {
    return new createPlatformLocaleDelegate$1();
  }
  function JsLocale(locale) {
    this.g49_1 = locale;
  }
  JsLocale.prototype.k48 = function () {
    throw new NotImplementedError('An operation is not implemented: implement native toLanguageTag');
  };
  JsLocale.$metadata$ = classMeta('JsLocale', [PlatformLocale]);
  function createPlatformLocaleDelegate$1() {
  }
  createPlatformLocaleDelegate$1.prototype.s19 = function () {
    return listOf_0(new JsLocale(new Object()));
  };
  createPlatformLocaleDelegate$1.$metadata$ = classMeta(undefined, [PlatformLocaleDelegate]);
  function get_GenericFontFamiliesMapping() {
    init_properties_JsFont_js_kt_nctwph();
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = GenericFontFamiliesMapping$factory();
    tmp$ret$0 = GenericFontFamiliesMapping$delegate.i2();
    return tmp$ret$0;
  }
  var GenericFontFamiliesMapping$delegate;
  var typefacesCache;
  function Platform$Companion$Current$delegate$lambda() {
    println('TODO: selecting MacOS unconditionally');
    return Platform_MacOS_getInstance();
  }
  var Platform_Linux_instance;
  var Platform_Windows_instance;
  var Platform_MacOS_instance;
  var Platform_Unknown_instance;
  function Companion_20() {
    Companion_instance_20 = this;
    var tmp = this;
    tmp.h49_1 = lazy_0(Platform$Companion$Current$delegate$lambda);
  }
  Companion_20.prototype.i49 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = Current$factory();
    tmp$ret$0 = this.h49_1.i2();
    return tmp$ret$0;
  };
  Companion_20.$metadata$ = objectMeta('Companion');
  var Companion_instance_20;
  function Companion_getInstance_30() {
    Platform_initEntries();
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
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
    Companion_getInstance_30();
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
      var tmp_2 = tmp_1.r2p(font.j49_1, 0, 0, 6, null);
      tmp = tmp_0.x2w(tmp_2, 0, 2, null);
    } else {
      throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + font);
    }
    return tmp;
  }
  function GenericFontFamiliesMapping$delegate$lambda() {
    init_properties_JsFont_js_kt_nctwph();
    var tmp0_subject = Companion_getInstance_30().i49();
    var tmp0 = tmp0_subject.t5_1;
    var tmp;
    switch (tmp0) {
      case 1:
        tmp = mapOf([to(Companion_getInstance_12().g3y_1.j42_1, listOf_0('Arial')), to(Companion_getInstance_12().h3y_1.j42_1, listOf_0('Times New Roman')), to(Companion_getInstance_12().i3y_1.j42_1, listOf_0('Consolas')), to(Companion_getInstance_12().j3y_1.j42_1, listOf_0('Comic Sans MS'))]);
        break;
      case 2:
        tmp = mapOf([to(Companion_getInstance_12().g3y_1.j42_1, listOf(['Helvetica Neue', 'Helvetica'])), to(Companion_getInstance_12().h3y_1.j42_1, listOf_0('Times')), to(Companion_getInstance_12().i3y_1.j42_1, listOf_0('Courier')), to(Companion_getInstance_12().j3y_1.j42_1, listOf_0('Apple Chancery'))]);
        break;
      case 0:
        tmp = mapOf([to(Companion_getInstance_12().g3y_1.j42_1, listOf(['Noto Sans', 'DejaVu Sans'])), to(Companion_getInstance_12().h3y_1.j42_1, listOf(['Noto Serif', 'DejaVu Serif', 'Times New Roman'])), to(Companion_getInstance_12().i3y_1.j42_1, listOf(['Noto Sans Mono', 'DejaVu Sans Mono'])), to(Companion_getInstance_12().j3y_1.j42_1, listOf_0('Comic Sans MS'))]);
        break;
      case 3:
        tmp = mapOf([to(Companion_getInstance_12().g3y_1.j42_1, listOf_0('Arial')), to(Companion_getInstance_12().h3y_1.j42_1, listOf_0('Times New Roman')), to(Companion_getInstance_12().i3y_1.j42_1, listOf_0('Consolas')), to(Companion_getInstance_12().j3y_1.j42_1, listOf_0('Comic Sans MS'))]);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function typefacesCache$1() {
  }
  typefacesCache$1.$metadata$ = classMeta(undefined, [Cache]);
  function Platform_MacOS_getInstance() {
    Platform_initEntries();
    return Platform_MacOS_instance;
  }
  function GenericFontFamiliesMapping$factory() {
    return getPropertyCallableRef('GenericFontFamiliesMapping', 0, KProperty0, function () {
      return get_GenericFontFamiliesMapping();
    }, null);
  }
  function Current$factory() {
    return getPropertyCallableRef('Current', 1, KProperty1, function (receiver) {
      return receiver.i49();
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
  function PlatformFont() {
  }
  PlatformFont.prototype.c42 = function () {
    println('TODO: implement proper js PlatformFont.cacheKey');
    return this.k49();
  };
  PlatformFont.$metadata$ = classMeta('PlatformFont', [Font]);
  function WeakHashMap() {
  }
  WeakHashMap.prototype.z = function () {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.x2 = function () {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.w2 = function () {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.f = function () {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.q2 = function (key) {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.l49 = function () {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.g9 = function () {
    return this.l49();
  };
  WeakHashMap.prototype.v = function (key) {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.q = function (key, value) {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.l3 = function (from) {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.k3 = function (key) {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.h = function () {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.$metadata$ = classMeta('WeakHashMap', [MutableMap]);
  function getOrPut(_this__u8e3s4, key, default_0) {
    return default_0(key);
  }
  function isNeutralDirectionality(_this__u8e3s4) {
    println('TODO: implement Char.isNeutralDirectionality in jsNativeMain');
    return false;
  }
  function Cache() {
  }
  Cache.$metadata$ = interfaceMeta('Cache');
  function PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    PlatformTextStyle.call($this);
    $this.m49_1 = spanStyle;
    $this.n49_1 = paragraphStyle;
    return $this;
  }
  function PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, Object.create(PlatformTextStyle.prototype));
  }
  PlatformTextStyle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformTextStyle))
      return false;
    if (!equals(this.n49_1, other.n49_1))
      return false;
    if (!equals(this.m49_1, other.m49_1))
      return false;
    return true;
  };
  PlatformTextStyle.prototype.hashCode = function () {
    return getObjectHashCode(this);
  };
  function PlatformTextStyle() {
    this.o49_1 = 0;
  }
  PlatformTextStyle.$metadata$ = classMeta('PlatformTextStyle');
  function createPlatformTextStyle(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle);
  }
  function Paragraph_0() {
  }
  Paragraph_0.$metadata$ = interfaceMeta('Paragraph');
  function _get_text__de5ose($this) {
    return $this.f4a_1.r49_1;
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
        tmp$ret$0 = vertical < element.h2y_1 + element.c2y_1;
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
    if (_get_text__de5ose($this) === '') {
      var metrics = $this.g4a_1.n4a().f2q();
      var ascent = -metrics.z2q_1;
      var descent = metrics.a2r_1;
      var baseline = $this.h4a_1.s2y();
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      var tmp0_with = $this.g4a_1.o4a().t2z();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-lineMetrics>.<anonymous>' call
      var tmp_0;
      if (((tmp0_with.t30() ? !tmp0_with.u30() : false) ? tmp0_with.x30() : false) ? tmp0_with.o30() > 0.0 : false) {
        tmp_0 = tmp0_with.b2j() * tmp0_with.o30();
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
      var tmp_1 = $this.h4a_1.z2y();
      tmp = isArray(tmp_1) ? tmp_1 : THROW_CCE();
    }
    return tmp;
  }
  function getBoxBackwardByOffset($this, offset, end) {
    var from = offset - 1 | 0;
    var isRtl = $this.f4a_1.x49_1.equals(ResolvedTextDirection_Rtl_getInstance());
    while (from >= 0) {
      var box = firstOrNull($this.h4a_1.w2y(from, end, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
      if (box == null)
        from = from - 1 | 0;
      else if (equals(new Char(charSequenceGet(_get_text__de5ose($this), from)), new Char(_Char___init__impl__6a9atx(10)))) {
        var tmp;
        if (!isRtl) {
          var bottom = box.y30_1.s2n_1 + box.y30_1.s2n_1 - box.y30_1.q2n_1;
          var rect = new Rect_0(0.0, box.y30_1.s2n_1, 0.0, bottom);
          return new TextBox(rect, box.b31());
        } else {
          var tmp_0;
          if (from === get_lastIndex_0(_get_text__de5ose($this))) {
            var bottom_0 = box.y30_1.s2n_1 + box.y30_1.s2n_1 - box.y30_1.q2n_1;
            var rect_0 = new Rect_0($this.a2j(), box.y30_1.s2n_1, $this.a2j(), bottom_0);
            tmp_0 = new TextBox(rect_0, box.b31());
          } else {
            var nextBox = first_0($this.h4a_1.w2y(offset, offset + 1 | 0, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
            var rect_1 = new Rect_0(nextBox.y30_1.p2n_1, nextBox.y30_1.q2n_1, nextBox.y30_1.p2n_1, nextBox.y30_1.s2n_1);
            tmp_0 = new TextBox(rect_1, nextBox.b31());
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
    this.b4a_1 = maxLines;
    this.c4a_1 = ellipsis;
    this.d4a_1 = constraints;
    this.e4a_1 = this.c4a_1 ? '\u2026' : '';
    var tmp = this;
    tmp.f4a_1 = intrinsics instanceof SkiaParagraphIntrinsics ? intrinsics : THROW_CCE();
    this.g4a_1 = this.f4a_1.p4a();
    var tmp_0 = this;
    var tmp_1 = this.a2j();
    tmp_0.h4a_1 = this.g4a_1.q4a(tmp_1, this.b4a_1, this.e4a_1, null, null, null, 56, null);
    this.h4a_1.u2y(this.a2j());
  }
  SkiaParagraph.prototype.a2j = function () {
    return _Constraints___get_maxWidth__impl__uuyqc(this.d4a_1);
  };
  SkiaParagraph.prototype.b2j = function () {
    return this.h4a_1.b2j();
  };
  SkiaParagraph.prototype.i3u = function () {
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
      tmp$ret$0 = tmp0_safe_receiver.h2y_1;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  SkiaParagraph.prototype.j3u = function () {
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
      tmp$ret$0 = tmp0_safe_receiver.h2y_1;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  SkiaParagraph.prototype.x3t = function () {
    return this.h4a_1.t2y();
  };
  SkiaParagraph.prototype.w3t = function () {
    var tmp;
    if (_get_text__de5ose(this) === '') {
      tmp = 1;
    } else {
      tmp = this.h4a_1.a2z();
    }
    return tmp;
  };
  SkiaParagraph.prototype.f3u = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.h4a_1.x2y();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(tmp0_map.length);
    var indexedObject = tmp0_map;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-placeholderRects>.<anonymous>' call
      tmp$ret$0 = toComposeRect(item.y30_1);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  SkiaParagraph.prototype.n3u = function (start, end) {
    var boxes = this.h4a_1.w2y(start, end, RectHeightMode_MAX_getInstance(), RectWidthMode_TIGHT_getInstance());
    var path = Path();
    var indexedObject = boxes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var b = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp = asSkiaPath(path);
      tmp.v2u(b.y30_1, null, 0, 6, null);
    }
    return path;
  };
  SkiaParagraph.prototype.q3u = function (position) {
    var glyphPosition = this.h4a_1.y2y(_Offset___get_x__impl__xvi35n(position), _Offset___get_y__impl__8bzhra(position)).c30_1;
    var tmp0_elvis_lhs = getLineMetricsForVerticalPosition(this, _Offset___get_y__impl__8bzhra(position));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return glyphPosition;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var expectedLine = tmp;
    var isNotEmptyLine = expectedLine.w2x_1 < expectedLine.x2x_1;
    if (_Offset___get_x__impl__xvi35n(position) > expectedLine.g2y_1 ? _Offset___get_x__impl__xvi35n(position) < expectedLine.l2y() : false) {
      return glyphPosition;
    }
    var tmp_0;
    if (isNotEmptyLine) {
      tmp_0 = this.h4a_1.w2y(expectedLine.w2x_1, expectedLine.a2y_1 ? expectedLine.x2x_1 : expectedLine.x2x_1 - 1 | 0, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance());
    } else {
      tmp_0 = null;
    }
    var rects = tmp_0;
    var tmp1_safe_receiver = rects;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : firstOrNull(tmp1_safe_receiver);
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.y30_1;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.p2n_1;
    var leftX = tmp4_elvis_lhs == null ? expectedLine.g2y_1 : tmp4_elvis_lhs;
    var tmp5_safe_receiver = rects;
    var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : lastOrNull(tmp5_safe_receiver);
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.y30_1;
    var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.r2n_1;
    var rightX = tmp8_elvis_lhs == null ? expectedLine.l2y() : tmp8_elvis_lhs;
    if (leftX === rightX) {
      return glyphPosition;
    }
    var correctedGlyphPosition = glyphPosition;
    if (_Offset___get_x__impl__xvi35n(position) <= leftX) {
      correctedGlyphPosition = this.h4a_1.y2y(leftX + 1.0, _Offset___get_y__impl__8bzhra(position)).c30_1;
    } else if (_Offset___get_x__impl__xvi35n(position) >= rightX) {
      correctedGlyphPosition = this.h4a_1.y2y(rightX - 1.0, _Offset___get_y__impl__8bzhra(position)).c30_1;
      var tmp9_safe_receiver = getOrNull(_get_text__de5ose(this), correctedGlyphPosition);
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
        tmp_3 = equals(tmp11_safe_receiver == null ? null : tmp11_safe_receiver.b31(), Direction_RTL_getInstance());
      } else {
        tmp_3 = false;
      }
      if (tmp_3) {
        correctedGlyphPosition = correctedGlyphPosition - 1 | 0;
      }
    }
    return correctedGlyphPosition;
  };
  SkiaParagraph.prototype.l3u = function (canvas, color, shadow, textDecoration) {
    this.h4a_1 = this.g4a_1.r4a(this.a2j(), this.b4a_1, this.e4a_1, color, shadow, textDecoration);
    this.h4a_1.v2y(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  SkiaParagraph.prototype.p49 = function (canvas, brush, alpha, shadow, textDecoration, drawStyle) {
    throw UnsupportedOperationException_init_$Create$('Using brush for painting the paragraph is a separate functionality that is not supported on this platform');
  };
  SkiaParagraph.$metadata$ = classMeta('SkiaParagraph', [Paragraph_0]);
  function createFontFamilyResolver() {
    var tmp = SkiaFontLoader_init_$Create$(null, 1, null);
    return FontFamilyResolverImpl_init_$Create$(tmp, null, null, null, null, 30, null);
  }
  function createFontFamilyResolver_0(fontCache) {
    var tmp = new SkiaFontLoader(fontCache);
    return FontFamilyResolverImpl_init_$Create$(tmp, null, null, null, null, 30, null);
  }
  function PlatformFontFamilyTypefaceAdapter() {
  }
  PlatformFontFamilyTypefaceAdapter.prototype.d43 = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.v42_1;
    if (tmp instanceof FontListFontFamily)
      return null;
    var skiaFontLoader = platformFontLoader instanceof SkiaFontLoader ? platformFontLoader : THROW_CCE();
    var tmp0_elvis_lhs = typefaceRequest.v42_1;
    var result = skiaFontLoader.u4a(tmp0_elvis_lhs == null ? Companion_getInstance_12().f3y_1 : tmp0_elvis_lhs, typefaceRequest.w42_1, typefaceRequest.x42_1);
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
  function SkiaFontLoader(fontCache) {
    this.s4a_1 = fontCache;
    this.t4a_1 = this.s4a_1;
  }
  SkiaFontLoader.prototype.v4a = function () {
    return this.s4a_1.w4a_1;
  };
  SkiaFontLoader.prototype.a42 = function (font) {
    if (!(font instanceof PlatformFont)) {
      if (!(font.z41() === Companion_getInstance_15().f47_1)) {
        throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + font);
      }
      return null;
    }
    var tmp0_subject = font.z41();
    var tmp;
    if (tmp0_subject === Companion_getInstance_15().e47_1) {
      tmp = this.s4a_1.z4a(font);
    } else if (tmp0_subject === Companion_getInstance_15().f47_1) {
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
        tmp$ret$0 = this.s4a_1.z4a(font);
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
    } else if (tmp0_subject === Companion_getInstance_15().g47_1) {
      throw UnsupportedOperationException_init_$Create$('Unsupported Async font load path');
    } else {
      throw IllegalArgumentException_init_$Create$('Unknown loading type ' + new FontLoadingStrategy(font.z41()));
    }
    return tmp;
  };
  SkiaFontLoader.prototype.u4a = function (fontFamily, fontWeight, fontStyle) {
    return this.s4a_1.u4a(fontFamily, fontWeight, fontStyle);
  };
  SkiaFontLoader.prototype.a4b = function (font, $cont) {
    return this.a42(font);
  };
  SkiaFontLoader.prototype.b42 = function (font, $cont) {
    return this.a4b(font, $cont);
  };
  SkiaFontLoader.prototype.c42 = function () {
    return this.t4a_1;
  };
  SkiaFontLoader.$metadata$ = classMeta('SkiaFontLoader', [PlatformFontLoader]);
  function ParagraphLayouter(text, textDirection, style, spanStyles, placeholders, density, fontFamilyResolver) {
    this.i4a_1 = text;
    var tmp = this;
    tmp.j4a_1 = ParagraphBuilder_init_$Create$(fontFamilyResolver, this.i4a_1, style, null, 0, spanStyles, placeholders, density, textDirection, 24, null);
    this.k4a_1 = this.j4a_1.h1h();
    this.l4a_1 = -1.0;
    this.m4a_1 = 8;
  }
  ParagraphLayouter.prototype.n4a = function () {
    return this.j4a_1.n4a();
  };
  ParagraphLayouter.prototype.o4a = function () {
    return this.j4a_1.o4a();
  };
  ParagraphLayouter.prototype.r4a = function (width, maxLines, ellipsis, color, shadow, textDecoration) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(color), _Color___get_value__impl__1pls5m(Companion_getInstance_0().q3a_1));
    if (tmp$ret$0) {
      tmp = color;
    } else {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.text.platform.ParagraphLayouter.layoutParagraph.<anonymous>' call
      tmp$ret$1 = this.j4a_1.d4b_1.u3e();
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    var actualColor = tmp$ret$2;
    if ((((!(this.j4a_1.f4b_1 === maxLines) ? true : !(this.j4a_1.e4b_1 === ellipsis)) ? true : !equals(this.j4a_1.d4b_1.u3e(), actualColor)) ? true : !equals(this.j4a_1.d4b_1.z3z(), shadow)) ? true : !equals(this.j4a_1.d4b_1.a40(), textDecoration)) {
      this.l4a_1 = width;
      this.j4a_1.f4b_1 = maxLines;
      this.j4a_1.e4b_1 = ellipsis;
      var tmp_0 = this.j4a_1;
      var tmp_1 = this.j4a_1.d4b_1;
      tmp_0.d4b_1 = tmp_1.i40(actualColor, null, null, null, null, null, null, null, null, null, null, null, textDecoration, shadow, null, null, null, null, 249854, null);
      this.k4a_1 = this.j4a_1.h1h();
      this.k4a_1.u2y(width);
    } else if (!(this.l4a_1 === width)) {
      this.l4a_1 = width;
      this.k4a_1.u2y(width);
    }
    return this.k4a_1;
  };
  ParagraphLayouter.prototype.q4a = function (width, maxLines, ellipsis, color, shadow, textDecoration, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      width = this.l4a_1;
    if (!(($mask0 & 2) === 0))
      maxLines = this.j4a_1.f4b_1;
    if (!(($mask0 & 4) === 0))
      ellipsis = this.j4a_1.e4b_1;
    if (!(($mask0 & 8) === 0))
      color = this.j4a_1.d4b_1.u3e();
    if (!(($mask0 & 16) === 0))
      shadow = this.j4a_1.d4b_1.z3z();
    if (!(($mask0 & 32) === 0))
      textDecoration = this.j4a_1.d4b_1.a40();
    return this.r4a(width, maxLines, ellipsis, color, shadow, textDecoration);
  };
  ParagraphLayouter.$metadata$ = classMeta('ParagraphLayouter');
  function FontLoadResult(typeface, aliases) {
    this.q4b_1 = typeface;
    this.r4b_1 = aliases;
    this.s4b_1 = 8;
  }
  FontLoadResult.$metadata$ = classMeta('FontLoadResult');
  function mapGenericFontFamily($this, generic) {
    var tmp0_elvis_lhs = get_GenericFontFamiliesMapping().v(generic.j42_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'Unknown generic font family ' + generic.j42_1;
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function ensureRegistered($this, typeface, key) {
    if (!$this.y4a_1.m(key)) {
      $this.x4a_1.z31(typeface, key);
      $this.y4a_1.a(key);
    }
  }
  function ensureRegistered_0($this, fontFamily) {
    var tmp0_subject = fontFamily;
    var tmp;
    if (tmp0_subject instanceof FontListFontFamily) {
      throw IllegalArgumentException_init_$Create$("Don't load FontListFontFamily through ensureRegistered: " + fontFamily);
    } else {
      if (tmp0_subject instanceof LoadedFontFamily) {
        var tmp_0 = fontFamily.u4b_1;
        var typeface = tmp_0 instanceof SkiaBackedTypeface ? tmp_0 : THROW_CCE();
        var tmp1_elvis_lhs = typeface.v4b_1;
        var alias = tmp1_elvis_lhs == null ? typeface.w4b_1.a2x() : tmp1_elvis_lhs;
        if (!$this.y4a_1.m(alias)) {
          $this.x4a_1.z31(typeface.w4b_1, alias);
          $this.y4a_1.a(alias);
        }
        tmp = listOf_0(alias);
      } else {
        if (tmp0_subject instanceof GenericFontFamily) {
          tmp = mapGenericFontFamily($this, fontFamily);
        } else {
          if (equals(tmp0_subject, Companion_getInstance_12().f3y_1)) {
            tmp = mapGenericFontFamily($this, Companion_getInstance_12().g3y_1);
          } else {
            throw IllegalArgumentException_init_$Create$('Unknown font family type: ' + fontFamily);
          }
        }
      }
    }
    return tmp;
  }
  function FontCache() {
    this.w4a_1 = FontCollection_init_$Create$();
    this.x4a_1 = new TypefaceFontProvider();
    this.w4a_1.q2x(Companion_getInstance_6().p2r_1);
    this.w4a_1.p2x(this.x4a_1);
    this.y4a_1 = HashSet_init_$Create$();
  }
  FontCache.prototype.z4a = function (font) {
    var typeface = loadFromTypefacesCache(font);
    ensureRegistered(this, typeface, font.c42());
    return new FontLoadResult(typeface, listOf_0(font.c42()));
  };
  FontCache.prototype.u4a = function (fontFamily, fontWeight, fontStyle) {
    var aliases = ensureRegistered_0(this, fontFamily);
    var style = toSkFontStyle(fontStyle).x2r(fontWeight.t47_1);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$0 = copyToArray(aliases);
    return new FontLoadResult(first_0(this.w4a_1.s2x(tmp$ret$0, style)), aliases);
  };
  FontCache.$metadata$ = classMeta('FontCache');
  function SkiaBackedTypeface() {
  }
  SkiaBackedTypeface.$metadata$ = classMeta('SkiaBackedTypeface', [Typeface]);
  function LoadedFont() {
  }
  LoadedFont.$metadata$ = classMeta('LoadedFont', undefined, undefined, undefined, undefined, PlatformFont.prototype);
  function FontLoader() {
    this.x4b_1 = new FontCache();
    this.y4b_1 = createFontFamilyResolver_0(this.x4b_1);
    this.z4b_1 = 8;
  }
  FontLoader.$metadata$ = classMeta('FontLoader', [ResourceLoader]);
  function drawMultiParagraph(_this__u8e3s4, canvas, brush, alpha, shadow, decoration) {
    canvas.a38();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var tmp0_fastForEach = _this__u8e3s4.r3t_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.g(index);
        // Inline function 'androidx.compose.ui.text.platform.drawMultiParagraph.<anonymous>' call
        item.y3t_1.q49(canvas, brush, alpha, shadow, decoration, null, 32, null);
        canvas.d38(0.0, item.y3t_1.b2j());
      }
       while (inductionVariable <= last);
    canvas.b38();
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
    return tmp0_subject === Companion_getInstance_16().a3y_1 ? Companion_getInstance_7().t2r_1 : Companion_getInstance_7().r2r_1;
  }
  function ComputedStyle_init_$Init$(density, spanStyle, $this) {
    var tmp = spanStyle.u3e();
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.<init>.<anonymous>' call
    tmp$ret$0 = density.q2k(spanStyle.g3w_1);
    tmp$ret$1 = tmp$ret$0;
    var tmp_0 = tmp$ret$1;
    var tmp_1;
    if (get_isUnspecified(spanStyle.m3w_1)) {
      tmp_1 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.<init>.<anonymous>' call
      tmp$ret$2 = density.q2k(spanStyle.m3w_1);
      tmp$ret$3 = tmp$ret$2;
      tmp_1 = tmp$ret$3;
    }
    ComputedStyle.call($this, tmp, tmp_0, spanStyle.h3w_1, spanStyle.i3w_1, spanStyle.j3w_1, spanStyle.k3w_1, spanStyle.l3w_1, tmp_1, spanStyle.n3w_1, spanStyle.o3w_1, spanStyle.p3w_1, spanStyle.q3w_1, spanStyle.r3w_1, spanStyle.s3w_1);
    return $this;
  }
  function ComputedStyle_init_$Create$(density, spanStyle) {
    return ComputedStyle_init_$Init$(density, spanStyle, Object.create(ComputedStyle.prototype));
  }
  function ComputedStyle(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow) {
    this.a4c_1 = color;
    this.b4c_1 = fontSize;
    this.c4c_1 = fontWeight;
    this.d4c_1 = fontStyle;
    this.e4c_1 = fontSynthesis;
    this.f4c_1 = fontFamily;
    this.g4c_1 = fontFeatureSettings;
    this.h4c_1 = letterSpacing;
    this.i4c_1 = baselineShift;
    this.j4c_1 = textGeometricTransform;
    this.k4c_1 = localeList;
    this.l4c_1 = background;
    this.m4c_1 = textDecoration;
    this.n4c_1 = shadow;
  }
  ComputedStyle.prototype.y3w = function () {
    return this.l4c_1;
  };
  ComputedStyle.prototype.o4c = function (fontFamilyResolver) {
    var res = TextStyle_init_$Create$();
    if (!equals(this.a4c_1, Companion_getInstance_0().q3a_1)) {
      res.q2t(toArgb(this.a4c_1));
    }
    var tmp0_safe_receiver = this.d4c_1;
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.k31(toSkFontStyle(tmp0_safe_receiver));
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = this.m4c_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.i31(toSkDecorationStyle(tmp1_safe_receiver, this.a4c_1));
      tmp$ret$1 = Unit_getInstance();
    }
    if (!equals(this.l4c_1, Companion_getInstance_0().q3a_1)) {
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      var tmp0_also = Paint_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      tmp0_also.q2t(toArgb(this.l4c_1));
      tmp$ret$2 = tmp0_also;
      res.g31(tmp$ret$2);
    }
    var tmp2_safe_receiver = this.c4c_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.k31(res.m31().x2r(tmp2_safe_receiver.t47_1));
      tmp$ret$3 = Unit_getInstance();
    }
    var tmp3_safe_receiver = this.n4c_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      tmp$ret$4 = res.n31(toSkShadow(tmp3_safe_receiver));
      tmp$ret$5 = tmp$ret$4;
    }
    var tmp4_safe_receiver = this.h4c_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      var tmp$ret$6;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.s31(tmp4_safe_receiver);
      tmp$ret$6 = Unit_getInstance();
    }
    var tmp_0 = Companion_getInstance_8();
    var tmp$ret$7;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp1_orEmpty = this.g4c_1;
    var tmp0_elvis_lhs = tmp1_orEmpty;
    tmp$ret$7 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    res.p31(tmp_0.r2q(tmp$ret$7));
    res.m30(this.b4c_1);
    var tmp5_safe_receiver = this.f4c_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      var tmp$ret$9;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp0_elvis_lhs_0 = this.c4c_1;
      var tmp_1 = tmp0_elvis_lhs_0 == null ? Companion_getInstance_18().s3x_1 : tmp0_elvis_lhs_0;
      var tmp1_elvis_lhs = this.d4c_1;
      var tmp_2;
      var tmp_3 = tmp1_elvis_lhs;
      if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
        tmp_2 = Companion_getInstance_16().z3x_1;
      } else {
        tmp_2 = tmp1_elvis_lhs;
      }
      var tmp_4 = tmp_2;
      var tmp2_elvis_lhs = this.e4c_1;
      var tmp_5;
      var tmp_6 = tmp2_elvis_lhs;
      if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
        tmp_5 = Companion_getInstance_17().b3y_1;
      } else {
        tmp_5 = tmp2_elvis_lhs;
      }
      var tmp_7 = fontFamilyResolver.d42(tmp5_safe_receiver, tmp_1, tmp_4, tmp_5).i2();
      var resolved = tmp_7 instanceof FontLoadResult ? tmp_7 : THROW_CCE();
      var tmp$ret$8;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp0_toTypedArray = resolved.r4b_1;
      tmp$ret$8 = copyToArray(tmp0_toTypedArray);
      res.q31(tmp$ret$8);
      tmp$ret$9 = Unit_getInstance();
    }
    var tmp6_safe_receiver = this.i4c_1;
    var tmp_8 = tmp6_safe_receiver;
    if ((tmp_8 == null ? null : new BaselineShift(tmp_8)) == null)
      null;
    else {
      var tmp$ret$10;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var fontMetrics = res.w31();
      res.u31(_BaselineShift___get_multiplier__impl__qhmjek(tmp6_safe_receiver) * fontMetrics.z2q_1);
      tmp$ret$10 = Unit_getInstance();
    }
    return res;
  };
  ComputedStyle.prototype.p4c = function (density, other) {
    var fontSize = fontSizeInHierarchy(density, this.b4c_1, other.g3w_1);
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var tmp0__get_isSpecified__cddt7f = other.u3e();
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(tmp0__get_isSpecified__cddt7f), _Color___get_value__impl__1pls5m(Companion_getInstance_0().q3a_1));
    if (tmp$ret$0) {
      this.a4c_1 = other.u3e();
    }
    var tmp0_safe_receiver = other.k3w_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.f4c_1 = tmp0_safe_receiver;
      tmp$ret$1 = Unit_getInstance();
    }
    this.b4c_1 = fontSize;
    var tmp1_safe_receiver = other.h3w_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.c4c_1 = tmp1_safe_receiver;
      tmp$ret$2 = Unit_getInstance();
    }
    var tmp2_safe_receiver = other.i3w_1;
    var tmp = tmp2_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.d4c_1 = tmp2_safe_receiver;
      tmp$ret$3 = Unit_getInstance();
    }
    var tmp3_safe_receiver = other.j3w_1;
    var tmp_0 = tmp3_safe_receiver;
    if ((tmp_0 == null ? null : new FontSynthesis(tmp_0)) == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.e4c_1 = tmp3_safe_receiver;
      tmp$ret$4 = Unit_getInstance();
    }
    var tmp4_safe_receiver = other.l3w_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.g4c_1 = tmp4_safe_receiver;
      tmp$ret$5 = Unit_getInstance();
    }
    if (!get_isUnspecified(other.m3w_1)) {
      if (_TextUnit___get_isEm__impl__esrmtl(other.m3w_1))
        this.h4c_1 = fontSize * _TextUnit___get_value__impl__hpbx0k(other.m3w_1);
      else if (_TextUnit___get_isSp__impl__8c3r6q(other.m3w_1)) {
        var tmp_1 = this;
        var tmp$ret$7;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>' call
        tmp$ret$6 = density.q2k(other.m3w_1);
        tmp$ret$7 = tmp$ret$6;
        tmp_1.h4c_1 = tmp$ret$7;
      } else
        throw UnsupportedOperationException_init_$Create$_0();
    }
    var tmp5_safe_receiver = other.n3w_1;
    var tmp_2 = tmp5_safe_receiver;
    if ((tmp_2 == null ? null : new BaselineShift(tmp_2)) == null)
      null;
    else {
      var tmp$ret$8;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.i4c_1 = tmp5_safe_receiver;
      tmp$ret$8 = Unit_getInstance();
    }
    var tmp6_safe_receiver = other.o3w_1;
    if (tmp6_safe_receiver == null)
      null;
    else {
      var tmp$ret$9;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.j4c_1 = tmp6_safe_receiver;
      tmp$ret$9 = Unit_getInstance();
    }
    var tmp7_safe_receiver = other.p3w_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      var tmp$ret$10;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.k4c_1 = tmp7_safe_receiver;
      tmp$ret$10 = Unit_getInstance();
    }
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var tmp1__get_isSpecified__qc5rve = other.q3w_1;
    tmp$ret$11 = !equals(_Color___get_value__impl__1pls5m(tmp1__get_isSpecified__qc5rve), _Color___get_value__impl__1pls5m(Companion_getInstance_0().q3a_1));
    if (tmp$ret$11) {
      this.l4c_1 = other.q3w_1;
    }
    var tmp8_safe_receiver = other.r3w_1;
    if (tmp8_safe_receiver == null)
      null;
    else {
      var tmp$ret$12;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.m4c_1 = tmp8_safe_receiver;
      tmp$ret$12 = Unit_getInstance();
    }
    var tmp9_safe_receiver = other.s3w_1;
    if (tmp9_safe_receiver == null)
      null;
    else {
      var tmp$ret$13;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.n4c_1 = tmp9_safe_receiver;
      tmp$ret$13 = Unit_getInstance();
    }
  };
  ComputedStyle.prototype.toString = function () {
    var tmp = new Color(this.a4c_1);
    var tmp_0 = this.b4c_1;
    var tmp_1 = this.c4c_1;
    var tmp_2 = this.d4c_1;
    var tmp_3 = tmp_2 == null ? null : new FontStyle(tmp_2);
    var tmp_4 = this.e4c_1;
    var tmp_5 = tmp_4 == null ? null : new FontSynthesis(tmp_4);
    var tmp_6 = this.f4c_1;
    var tmp_7 = this.g4c_1;
    var tmp_8 = this.h4c_1;
    var tmp_9 = this.i4c_1;
    return 'ComputedStyle(color=' + tmp + ', fontSize=' + tmp_0 + ', fontWeight=' + tmp_1 + ', fontStyle=' + tmp_3 + ', fontSynthesis=' + tmp_5 + ', fontFamily=' + tmp_6 + ', fontFeatureSettings=' + tmp_7 + ', letterSpacing=' + tmp_8 + ', baselineShift=' + (tmp_9 == null ? null : new BaselineShift(tmp_9)) + ', textGeometricTransform=' + this.j4c_1 + ', localeList=' + this.k4c_1 + ', background=' + new Color(this.l4c_1) + ', textDecoration=' + this.m4c_1 + ', shadow=' + this.n4c_1 + ')';
  };
  ComputedStyle.prototype.hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.a4c_1);
    result = imul(result, 31) + getNumberHashCode(this.b4c_1) | 0;
    result = imul(result, 31) + (this.c4c_1 == null ? 0 : this.c4c_1.hashCode()) | 0;
    var tmp = imul(result, 31);
    var tmp_0;
    var tmp_1 = this.d4c_1;
    if ((tmp_1 == null ? null : new FontStyle(tmp_1)) == null) {
      tmp_0 = 0;
    } else {
      tmp_0 = FontStyle__hashCode_impl_7qhg4w(this.d4c_1);
    }
    result = tmp + tmp_0 | 0;
    var tmp_2 = imul(result, 31);
    var tmp_3;
    var tmp_4 = this.e4c_1;
    if ((tmp_4 == null ? null : new FontSynthesis(tmp_4)) == null) {
      tmp_3 = 0;
    } else {
      tmp_3 = FontSynthesis__hashCode_impl_4wi11v(this.e4c_1);
    }
    result = tmp_2 + tmp_3 | 0;
    result = imul(result, 31) + (this.f4c_1 == null ? 0 : hashCode(this.f4c_1)) | 0;
    result = imul(result, 31) + (this.g4c_1 == null ? 0 : getStringHashCode(this.g4c_1)) | 0;
    result = imul(result, 31) + (this.h4c_1 == null ? 0 : getNumberHashCode(this.h4c_1)) | 0;
    var tmp_5 = imul(result, 31);
    var tmp_6;
    var tmp_7 = this.i4c_1;
    if ((tmp_7 == null ? null : new BaselineShift(tmp_7)) == null) {
      tmp_6 = 0;
    } else {
      tmp_6 = BaselineShift__hashCode_impl_g0potx(this.i4c_1);
    }
    result = tmp_5 + tmp_6 | 0;
    result = imul(result, 31) + (this.j4c_1 == null ? 0 : this.j4c_1.hashCode()) | 0;
    result = imul(result, 31) + (this.k4c_1 == null ? 0 : this.k4c_1.hashCode()) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.l4c_1) | 0;
    result = imul(result, 31) + (this.m4c_1 == null ? 0 : this.m4c_1.hashCode()) | 0;
    result = imul(result, 31) + (this.n4c_1 == null ? 0 : this.n4c_1.hashCode()) | 0;
    return result;
  };
  ComputedStyle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComputedStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ComputedStyle ? other : THROW_CCE();
    if (!equals(this.a4c_1, tmp0_other_with_cast.a4c_1))
      return false;
    if (!equals(this.b4c_1, tmp0_other_with_cast.b4c_1))
      return false;
    if (!equals(this.c4c_1, tmp0_other_with_cast.c4c_1))
      return false;
    var tmp = this.d4c_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = tmp0_other_with_cast.d4c_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.e4c_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = tmp0_other_with_cast.e4c_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.f4c_1, tmp0_other_with_cast.f4c_1))
      return false;
    if (!(this.g4c_1 == tmp0_other_with_cast.g4c_1))
      return false;
    if (!equals(this.h4c_1, tmp0_other_with_cast.h4c_1))
      return false;
    var tmp_5 = this.i4c_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = tmp0_other_with_cast.i4c_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.j4c_1, tmp0_other_with_cast.j4c_1))
      return false;
    if (!equals(this.k4c_1, tmp0_other_with_cast.k4c_1))
      return false;
    if (!equals(this.l4c_1, tmp0_other_with_cast.l4c_1))
      return false;
    if (!equals(this.m4c_1, tmp0_other_with_cast.m4c_1))
      return false;
    if (!equals(this.n4c_1, tmp0_other_with_cast.n4c_1))
      return false;
    return true;
  };
  ComputedStyle.$metadata$ = classMeta('ComputedStyle');
  function toSkDecorationStyle(_this__u8e3s4, color) {
    init_properties_SkiaParagraph_skiko_kt_5inyi7();
    var underline = _this__u8e3s4.v48(Companion_getInstance_24().p3y_1);
    var overline = false;
    var lineThrough = _this__u8e3s4.v48(Companion_getInstance_24().q3y_1);
    var gaps = false;
    var lineStyle = DecorationLineStyle_SOLID_getInstance();
    var thicknessMultiplier = 1.0;
    return new DecorationStyle(underline, overline, lineThrough, gaps, toArgb(color), lineStyle, thicknessMultiplier);
  }
  function toSkShadow(_this__u8e3s4) {
    init_properties_SkiaParagraph_skiko_kt_5inyi7();
    return new Shadow(toArgb(_this__u8e3s4.v3g_1), _Offset___get_x__impl__xvi35n(_this__u8e3s4.w3g_1), _Offset___get_y__impl__8bzhra(_this__u8e3s4.w3g_1), _this__u8e3s4.x3g_1);
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
      tmp$ret$0 = density.q2k(other);
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
  function StyleAdd(position, style) {
    Op.call(this);
    this.q4c_1 = position;
    this.r4c_1 = style;
    this.s4c_1 = 8;
  }
  StyleAdd.prototype.t4c = function () {
    return this.q4c_1;
  };
  StyleAdd.prototype.toString = function () {
    return 'StyleAdd(position=' + this.q4c_1 + ', style=' + this.r4c_1 + ')';
  };
  StyleAdd.prototype.hashCode = function () {
    var result = this.q4c_1;
    result = imul(result, 31) + this.r4c_1.hashCode() | 0;
    return result;
  };
  StyleAdd.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd ? other : THROW_CCE();
    if (!(this.q4c_1 === tmp0_other_with_cast.q4c_1))
      return false;
    if (!this.r4c_1.equals(tmp0_other_with_cast.r4c_1))
      return false;
    return true;
  };
  StyleAdd.$metadata$ = classMeta('StyleAdd', undefined, undefined, undefined, undefined, Op.prototype);
  function PutPlaceholder(cut, width, height) {
    Op.call(this);
    this.u4c_1 = cut;
    this.v4c_1 = width;
    this.w4c_1 = height;
    this.x4c_1 = position$factory(this.u4c_1);
    this.y4c_1 = 8;
  }
  PutPlaceholder.prototype.t4c = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = position$factory_0();
    tmp$ret$0 = this.x4c_1.get();
    return tmp$ret$0;
  };
  PutPlaceholder.prototype.toString = function () {
    return 'PutPlaceholder(cut=' + this.u4c_1 + ', width=' + this.v4c_1 + ', height=' + this.w4c_1 + ')';
  };
  PutPlaceholder.prototype.hashCode = function () {
    var result = this.u4c_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.v4c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.w4c_1) | 0;
    return result;
  };
  PutPlaceholder.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder ? other : THROW_CCE();
    if (!this.u4c_1.equals(tmp0_other_with_cast.u4c_1))
      return false;
    if (!equals(this.v4c_1, tmp0_other_with_cast.v4c_1))
      return false;
    if (!equals(this.w4c_1, tmp0_other_with_cast.w4c_1))
      return false;
    return true;
  };
  PutPlaceholder.$metadata$ = classMeta('PutPlaceholder', undefined, undefined, undefined, undefined, Op.prototype);
  function EndPlaceholder(cut) {
    Op.call(this);
    this.z4c_1 = cut;
    this.a4d_1 = position$factory_1(this.z4c_1);
    this.b4d_1 = 8;
  }
  EndPlaceholder.prototype.t4c = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = position$factory_2();
    tmp$ret$0 = this.a4d_1.get();
    return tmp$ret$0;
  };
  EndPlaceholder.prototype.toString = function () {
    return 'EndPlaceholder(cut=' + this.z4c_1 + ')';
  };
  EndPlaceholder.prototype.hashCode = function () {
    return this.z4c_1.hashCode();
  };
  EndPlaceholder.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder ? other : THROW_CCE();
    if (!this.z4c_1.equals(tmp0_other_with_cast.z4c_1))
      return false;
    return true;
  };
  EndPlaceholder.$metadata$ = classMeta('EndPlaceholder', undefined, undefined, undefined, undefined, Op.prototype);
  function StyleAdd_0(position, style) {
    Cut.call(this);
    this.c4d_1 = position;
    this.d4d_1 = style;
    this.e4d_1 = 0;
  }
  StyleAdd_0.prototype.t4c = function () {
    return this.c4d_1;
  };
  StyleAdd_0.prototype.f4d = function () {
    return this.d4d_1;
  };
  StyleAdd_0.prototype.toString = function () {
    return 'StyleAdd(position=' + this.c4d_1 + ', style=' + this.d4d_1 + ')';
  };
  StyleAdd_0.prototype.hashCode = function () {
    var result = this.c4d_1;
    result = imul(result, 31) + this.d4d_1.hashCode() | 0;
    return result;
  };
  StyleAdd_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd_0))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd_0 ? other : THROW_CCE();
    if (!(this.c4d_1 === tmp0_other_with_cast.c4d_1))
      return false;
    if (!this.d4d_1.equals(tmp0_other_with_cast.d4d_1))
      return false;
    return true;
  };
  StyleAdd_0.$metadata$ = classMeta('StyleAdd', undefined, undefined, undefined, undefined, Cut.prototype);
  function StyleRemove(position, style) {
    Cut.call(this);
    this.g4d_1 = position;
    this.h4d_1 = style;
    this.i4d_1 = 0;
  }
  StyleRemove.prototype.t4c = function () {
    return this.g4d_1;
  };
  StyleRemove.prototype.toString = function () {
    return 'StyleRemove(position=' + this.g4d_1 + ', style=' + this.h4d_1 + ')';
  };
  StyleRemove.prototype.hashCode = function () {
    var result = this.g4d_1;
    result = imul(result, 31) + this.h4d_1.hashCode() | 0;
    return result;
  };
  StyleRemove.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleRemove))
      return false;
    var tmp0_other_with_cast = other instanceof StyleRemove ? other : THROW_CCE();
    if (!(this.g4d_1 === tmp0_other_with_cast.g4d_1))
      return false;
    if (!this.h4d_1.equals(tmp0_other_with_cast.h4d_1))
      return false;
    return true;
  };
  StyleRemove.$metadata$ = classMeta('StyleRemove', undefined, undefined, undefined, undefined, Cut.prototype);
  function PutPlaceholder_0(position, placeholder) {
    Cut.call(this);
    this.j4d_1 = position;
    this.k4d_1 = placeholder;
    this.l4d_1 = 0;
  }
  PutPlaceholder_0.prototype.t4c = function () {
    return this.j4d_1;
  };
  PutPlaceholder_0.prototype.toString = function () {
    return 'PutPlaceholder(position=' + this.j4d_1 + ', placeholder=' + this.k4d_1 + ')';
  };
  PutPlaceholder_0.prototype.hashCode = function () {
    var result = this.j4d_1;
    result = imul(result, 31) + this.k4d_1.hashCode() | 0;
    return result;
  };
  PutPlaceholder_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder_0 ? other : THROW_CCE();
    if (!(this.j4d_1 === tmp0_other_with_cast.j4d_1))
      return false;
    if (!this.k4d_1.equals(tmp0_other_with_cast.k4d_1))
      return false;
    return true;
  };
  PutPlaceholder_0.$metadata$ = classMeta('PutPlaceholder', undefined, undefined, undefined, undefined, Cut.prototype);
  function EndPlaceholder_0(position) {
    Cut.call(this);
    this.m4d_1 = position;
    this.n4d_1 = 0;
  }
  EndPlaceholder_0.prototype.t4c = function () {
    return this.m4d_1;
  };
  EndPlaceholder_0.prototype.toString = function () {
    return 'EndPlaceholder(position=' + this.m4d_1 + ')';
  };
  EndPlaceholder_0.prototype.hashCode = function () {
    return this.m4d_1;
  };
  EndPlaceholder_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder_0 ? other : THROW_CCE();
    if (!(this.m4d_1 === tmp0_other_with_cast.m4d_1))
      return false;
    return true;
  };
  EndPlaceholder_0.$metadata$ = classMeta('EndPlaceholder', undefined, undefined, undefined, undefined, Cut.prototype);
  function ParagraphBuilder_init_$Init$(fontFamilyResolver, text, textStyle, ellipsis, maxLines, spanStyles, placeholders, density, textDirection, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      ellipsis = '';
    if (!(($mask0 & 16) === 0))
      maxLines = IntCompanionObject_getInstance().c1_1;
    ParagraphBuilder_0.call($this, fontFamilyResolver, text, textStyle, ellipsis, maxLines, spanStyles, placeholders, density, textDirection);
    return $this;
  }
  function ParagraphBuilder_init_$Create$(fontFamilyResolver, text, textStyle, ellipsis, maxLines, spanStyles, placeholders, density, textDirection, $mask0, $marker) {
    return ParagraphBuilder_init_$Init$(fontFamilyResolver, text, textStyle, ellipsis, maxLines, spanStyles, placeholders, density, textDirection, $mask0, $marker, Object.create(ParagraphBuilder_0.prototype));
  }
  function _get_initialStyle__6to25e($this) {
    var tmp = $this.k4b_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('initialStyle');
    }
  }
  function _get_defaultStyle__bt02u3($this) {
    var tmp = $this.l4b_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('defaultStyle');
    }
  }
  function _get_ops__e6e97j($this) {
    var tmp = $this.n4b_1;
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
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var cuts = tmp$ret$0;
    var tmp0_iterator = spans.c();
    while (tmp0_iterator.d()) {
      var span = tmp0_iterator.e();
      cuts.a(new StyleAdd_0(span.j3s_1, span.i3s_1));
      cuts.a(new StyleRemove(span.k3s_1, span.i3s_1));
    }
    var tmp1_iterator = placeholders.c();
    while (tmp1_iterator.d()) {
      var placeholder = tmp1_iterator.e();
      cuts.a(new PutPlaceholder_0(placeholder.j3s_1, placeholder.i3s_1));
      cuts.a(new EndPlaceholder_0(placeholder.k3s_1));
    }
    var ops = mutableListOf([new StyleAdd(0, _get_defaultStyle__bt02u3($this))]);
    // Inline function 'kotlin.collections.sortBy' call
    if (cuts.f() > 1) {
      var tmp$ret$1;
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp = ParagraphBuilder$makeOps$lambda;
      tmp$ret$1 = new sam$kotlin_Comparator$0_0(tmp);
      sortWith(cuts, tmp$ret$1);
    }
    var activeStyles = mutableListOf([_get_initialStyle__6to25e($this)]);
    var tmp2_iterator = cuts.c();
    while (tmp2_iterator.d()) {
      var cut = tmp2_iterator.e();
      if (cut instanceof StyleAdd_0) {
        activeStyles.a(cut.d4d_1);
        var prev = previousStyleAddAtTheSamePosition($this, cut.t4c(), ops);
        if (prev == null) {
          var tmp_0 = cut.t4c();
          var tmp$ret$2;
          // Inline function 'kotlin.also' call
          var tmp0_also = mergeStyles($this, activeStyles);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
          tmp0_also.p4c($this.i4b_1, cut.d4d_1);
          tmp$ret$2 = tmp0_also;
          ops.a(new StyleAdd(tmp_0, tmp$ret$2));
        } else {
          prev.r4c_1.p4c($this.i4b_1, cut.d4d_1);
        }
      } else {
        if (cut instanceof StyleRemove) {
          activeStyles.b4(cut.h4d_1);
          ops.a(new StyleAdd(cut.t4c(), mergeStyles($this, activeStyles)));
        } else {
          if (cut instanceof PutPlaceholder_0) {
            var currentStyle = mergeStyles($this, activeStyles);
            var op = new PutPlaceholder(cut, fontSizeInHierarchy($this.i4b_1, currentStyle.b4c_1, cut.k4d_1.u3v_1), fontSizeInHierarchy($this.i4b_1, currentStyle.b4c_1, cut.k4d_1.v3v_1));
            ops.a(op);
          } else {
            if (cut instanceof EndPlaceholder_0) {
              ops.a(new EndPlaceholder(cut));
            }
          }
        }
      }
    }
    return ops;
  }
  function mergeStyles($this, activeStyles) {
    var style = ComputedStyle_init_$Create$($this.i4b_1, activeStyles.g(0));
    var inductionVariable = 1;
    var last = activeStyles.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        style.p4c($this.i4b_1, activeStyles.g(i));
      }
       while (inductionVariable < last);
    return style;
  }
  function previousStyleAddAtTheSamePosition($this, position, ops) {
    var tmp0_iterator = asReversed(ops).c();
    while (tmp0_iterator.d()) {
      var prevOp = tmp0_iterator.e();
      if (prevOp.t4c() < position)
        return null;
      if (prevOp instanceof StyleAdd)
        return prevOp;
    }
    return null;
  }
  function textStyleToParagraphStyle($this, style, computedStyle) {
    var pStyle = new ParagraphStyle();
    pStyle.u2z(makeSkTextStyle($this, computedStyle));
    var tmp0_safe_receiver = style.r40();
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new TextAlign(tmp)) == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      pStyle.w2z(toSkAlignment(tmp0_safe_receiver));
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var tmp0__get_isSpecified__cddt7f = style.g3v();
    tmp$ret$1 = !get_isUnspecified(tmp0__get_isSpecified__cddt7f);
    if (tmp$ret$1) {
      var strutStyle = StrutStyle_init_$Create$();
      strutStyle.r30(true);
      strutStyle.v30(true);
      var tmp$ret$3;
      // Inline function 'kotlin.with' call
      var tmp1_with = $this.i4b_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.textStyleToParagraphStyle.<anonymous>' call
      tmp$ret$2 = tmp1_with.q2k(orDefaultFontSize(style.w3w()));
      tmp$ret$3 = tmp$ret$2;
      var fontSize = tmp$ret$3;
      var tmp_0;
      if (_TextUnit___get_isSp__impl__8c3r6q(style.g3v())) {
        var tmp$ret$5;
        // Inline function 'kotlin.with' call
        var tmp2_with = $this.i4b_1;
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$4;
        // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.textStyleToParagraphStyle.<anonymous>' call
        tmp$ret$4 = tmp2_with.q2k(style.g3v());
        tmp$ret$5 = tmp$ret$4;
        tmp_0 = tmp$ret$5;
      } else if (_TextUnit___get_isEm__impl__esrmtl(style.g3v())) {
        tmp_0 = fontSize * _TextUnit___get_value__impl__hpbx0k(style.g3v());
      } else {
        throw IllegalStateException_init_$Create$('Unexpected size in textStyleToParagraphStyle');
      }
      var lineHeight = tmp_0;
      strutStyle.p30(lineHeight / fontSize);
      strutStyle.m30(fontSize);
      pStyle.s2z(strutStyle);
    }
    pStyle.v2z(toSkDirection($this.j4b_1));
    var tmp1_safe_receiver = $this.d4b_1.t40();
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$7;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'kotlin.with' call
      var tmp0_with = $this.i4b_1;
      // Inline function 'kotlin.contracts.contract' call
      pStyle.z2z(new TextIndent(tmp0_with.q2k(tmp1_safe_receiver.d49_1), tmp0_with.q2k(tmp1_safe_receiver.e49_1)));
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
    this.o4d_1 = function_0;
  }
  sam$kotlin_Comparator$0_0.prototype.x = function (a, b) {
    return this.o4d_1(a, b);
  };
  sam$kotlin_Comparator$0_0.prototype.compare = function (a, b) {
    return this.x(a, b);
  };
  sam$kotlin_Comparator$0_0.$metadata$ = classMeta('sam$kotlin_Comparator$0', [Comparator]);
  function ParagraphBuilder$makeOps$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
    tmp$ret$0 = a.t4c();
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
    tmp$ret$1 = b.t4c();
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function ParagraphBuilder$makeSkTextStyle$lambda($style, this$0) {
    return function (it) {
      return $style.o4c(this$0.b4b_1);
    };
  }
  function ParagraphBuilder$defaultFont$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.d4b_1.m40();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.defaultFont$delegate.<anonymous>.<anonymous>' call
        var tmp0_elvis_lhs = this$0.d4b_1.j40();
        var tmp_0 = tmp0_elvis_lhs == null ? Companion_getInstance_18().s3x_1 : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = this$0.d4b_1.k40();
        var tmp_1;
        var tmp_2 = tmp1_elvis_lhs;
        if ((tmp_2 == null ? null : new FontStyle(tmp_2)) == null) {
          tmp_1 = Companion_getInstance_16().z3x_1;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        var tmp_3 = tmp_1;
        var tmp2_elvis_lhs = this$0.d4b_1.l40();
        var tmp_4;
        var tmp_5 = tmp2_elvis_lhs;
        if ((tmp_5 == null ? null : new FontSynthesis(tmp_5)) == null) {
          tmp_4 = Companion_getInstance_17().c3y_1;
        } else {
          tmp_4 = tmp2_elvis_lhs;
        }
        var tmp_6 = this$0.b4b_1.d42(tmp0_safe_receiver, tmp_0, tmp_3, tmp_4).i2();
        tmp$ret$0 = tmp_6 instanceof FontLoadResult ? tmp_6 : THROW_CCE();
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp$ret$1;
      }
      var loadResult = tmp;
      var tmp1_safe_receiver = loadResult;
      return Font_init_$Create$(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q4b_1, _get_defaultStyle__bt02u3(this$0).b4c_1);
    };
  }
  function ParagraphBuilder$defaultHeight$delegate$lambda(this$0) {
    return function () {
      return this$0.n4a().f2q().b2j();
    };
  }
  function ParagraphBuilder_0(fontFamilyResolver, text, textStyle, ellipsis, maxLines, spanStyles, placeholders, density, textDirection) {
    this.b4b_1 = fontFamilyResolver;
    this.c4b_1 = text;
    this.d4b_1 = textStyle;
    this.e4b_1 = ellipsis;
    this.f4b_1 = maxLines;
    this.g4b_1 = spanStyles;
    this.h4b_1 = placeholders;
    this.i4b_1 = density;
    this.j4b_1 = textDirection;
    var tmp = this;
    tmp.o4b_1 = lazy_0(ParagraphBuilder$defaultFont$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.p4b_1 = lazy_0(ParagraphBuilder$defaultHeight$delegate$lambda(this));
  }
  ParagraphBuilder_0.prototype.t3z = function () {
    return this.b4b_1;
  };
  ParagraphBuilder_0.prototype.p4d = function () {
    return this.d4b_1;
  };
  ParagraphBuilder_0.prototype.m2k = function () {
    return this.i4b_1;
  };
  ParagraphBuilder_0.prototype.o4a = function () {
    var tmp = this.m4b_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('paragraphStyle');
    }
  };
  ParagraphBuilder_0.prototype.h1h = function () {
    this.k4b_1 = withDefaultFontSize(this.d4b_1.c40());
    this.l4b_1 = ComputedStyle_init_$Create$(this.i4b_1, _get_initialStyle__6to25e(this));
    this.n4b_1 = makeOps(this, this.g4b_1, this.h4b_1);
    var pos = 0;
    var ps = textStyleToParagraphStyle(this, this.d4b_1, _get_defaultStyle__bt02u3(this));
    this.m4b_1 = ps;
    if (!(this.f4b_1 === IntCompanionObject_getInstance().c1_1)) {
      ps.x2z(this.f4b_1);
      ps.y2z(this.e4b_1);
    }
    var tmp = this.b4b_1;
    var platformFontLoader = (tmp instanceof FontFamilyResolverImpl ? tmp : THROW_CCE()).m42_1;
    var tmp0_subject = platformFontLoader;
    var tmp_0;
    if (tmp0_subject instanceof SkiaFontLoader) {
      tmp_0 = platformFontLoader.v4a();
    } else {
      throw IllegalStateException_init_$Create$('Unsupported font loader ' + platformFontLoader);
    }
    var fontCollection = tmp_0;
    var pb = new ParagraphBuilder(ps, fontCollection);
    var addText = true;
    var tmp1_iterator = _get_ops__e6e97j(this).c();
    while (tmp1_iterator.d()) {
      var op = tmp1_iterator.e();
      if (addText ? pos < op.t4c() : false) {
        pb.g2z(toString(charSequenceSubSequence(this.c4b_1, pos, op.t4c())));
      }
      var tmp2_subject = op;
      if (tmp2_subject instanceof StyleAdd) {
        var tmp_1 = op.r4c_1.f4c_1;
        var tmp3_elvis_lhs = op.r4c_1.c4c_1;
        var tmp_2 = tmp3_elvis_lhs == null ? Companion_getInstance_18().s3x_1 : tmp3_elvis_lhs;
        var tmp4_elvis_lhs = op.r4c_1.d4c_1;
        var tmp_3;
        var tmp_4 = tmp4_elvis_lhs;
        if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
          tmp_3 = Companion_getInstance_16().z3x_1;
        } else {
          tmp_3 = tmp4_elvis_lhs;
        }
        var tmp_5 = tmp_3;
        var tmp5_elvis_lhs = op.r4c_1.e4c_1;
        var tmp_6;
        var tmp_7 = tmp5_elvis_lhs;
        if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
          tmp_6 = Companion_getInstance_17().c3y_1;
        } else {
          tmp_6 = tmp5_elvis_lhs;
        }
        this.b4b_1.d42(tmp_1, tmp_2, tmp_5, tmp_6);
        pb.f2z(makeSkTextStyle(this, op.r4c_1));
      } else {
        if (tmp2_subject instanceof PutPlaceholder) {
          var placeholderStyle = new PlaceholderStyle(op.v4c_1, op.w4c_1, toSkPlaceholderAlignment(op.u4c_1.k4d_1.w3v_1), BaselineMode_ALPHABETIC_getInstance(), 0.0);
          pb.h2z(placeholderStyle);
          addText = false;
        } else {
          if (tmp2_subject instanceof EndPlaceholder) {
            addText = true;
          }
        }
      }
      pos = op.t4c();
    }
    if (addText ? pos < this.c4b_1.length : false) {
      pb.g2z(toString(charSequenceSubSequence(this.c4b_1, pos, this.c4b_1.length)));
    }
    return pb.h1h();
  };
  ParagraphBuilder_0.prototype.n4a = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = defaultFont$factory();
    tmp$ret$0 = this.o4b_1.i2();
    return tmp$ret$0;
  };
  ParagraphBuilder_0.$metadata$ = classMeta('ParagraphBuilder');
  function withDefaultFontSize(_this__u8e3s4) {
    init_properties_SkiaParagraph_skiko_kt_5inyi7();
    var fontSize = orDefaultFontSize(_this__u8e3s4.g3w_1);
    var tmp;
    if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4.m3w_1)) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
      var tmp0_times = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4.m3w_1);
      checkArithmetic(fontSize);
      tmp$ret$0 = pack(_TextUnit___get_rawType__impl__tu8yq5(fontSize), _TextUnit___get_value__impl__hpbx0k(fontSize) * tmp0_times);
      tmp = tmp$ret$0;
    } else {
      tmp = _this__u8e3s4.m3w_1;
    }
    var letterSpacing = tmp;
    return _this__u8e3s4.d3x(null, fontSize, null, null, null, null, null, letterSpacing, null, null, null, null, null, null, 16253, null);
  }
  function toSkPlaceholderAlignment(_this__u8e3s4) {
    init_properties_SkiaParagraph_skiko_kt_5inyi7();
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject === Companion_getInstance_9().x3v_1) {
      tmp = PlaceholderAlignment_ABOVE_BASELINE_getInstance();
    } else if (tmp0_subject === Companion_getInstance_9().b3w_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (tmp0_subject === Companion_getInstance_9().c3w_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (tmp0_subject === Companion_getInstance_9().d3w_1) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else if (tmp0_subject === Companion_getInstance_9().y3v_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (tmp0_subject === Companion_getInstance_9().z3v_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (tmp0_subject === Companion_getInstance_9().a3w_1) {
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
    if (tmp0_subject === Companion_getInstance_23().i3v_1) {
      tmp = Alignment_LEFT_getInstance();
    } else if (tmp0_subject === Companion_getInstance_23().j3v_1) {
      tmp = Alignment_RIGHT_getInstance();
    } else if (tmp0_subject === Companion_getInstance_23().k3v_1) {
      tmp = Alignment_CENTER_getInstance();
    } else if (tmp0_subject === Companion_getInstance_23().l3v_1) {
      tmp = Alignment_JUSTIFY_getInstance();
    } else if (tmp0_subject === Companion_getInstance_23().m3v_1) {
      tmp = Alignment_START_getInstance();
    } else if (tmp0_subject === Companion_getInstance_23().n3v_1) {
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
    var tmp0 = tmp0_subject.t5_1;
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
      return $b0.j4d_1;
    }, null);
  }
  function position$factory_0() {
    return getPropertyCallableRef('position', 1, KProperty1, function (receiver) {
      return receiver.t4c();
    }, null);
  }
  function position$factory_1($b0) {
    return getPropertyCallableRef('position', 0, KProperty0, function () {
      return $b0.m4d_1;
    }, null);
  }
  function position$factory_2() {
    return getPropertyCallableRef('position', 1, KProperty1, function (receiver) {
      return receiver.t4c();
    }, null);
  }
  function defaultFont$factory() {
    return getPropertyCallableRef('defaultFont', 1, KProperty1, function (receiver) {
      return receiver.n4a();
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
  function newLayouter($this) {
    return new ParagraphLayouter($this.r49_1, $this.x49_1, $this.s49_1, $this.t49_1, $this.u49_1, $this.v49_1, $this.w49_1);
  }
  function resolveTextDirection_1($this, direction) {
    var tmp0_subject = direction;
    var tmp;
    var tmp_0 = tmp0_subject;
    if (equals(tmp_0 == null ? null : new TextDirection(tmp_0), new TextDirection(Companion_getInstance_25().v40_1))) {
      tmp = ResolvedTextDirection_Ltr_getInstance();
    } else {
      var tmp_1 = tmp0_subject;
      if (equals(tmp_1 == null ? null : new TextDirection(tmp_1), new TextDirection(Companion_getInstance_25().w40_1))) {
        tmp = ResolvedTextDirection_Rtl_getInstance();
      } else {
        var tmp_2 = tmp0_subject;
        if (equals(tmp_2 == null ? null : new TextDirection(tmp_2), new TextDirection(Companion_getInstance_25().x40_1))) {
          var tmp1_elvis_lhs = contentBasedTextDirection_0($this);
          tmp = tmp1_elvis_lhs == null ? ResolvedTextDirection_Ltr_getInstance() : tmp1_elvis_lhs;
        } else {
          var tmp_3 = tmp0_subject;
          if (equals(tmp_3 == null ? null : new TextDirection(tmp_3), new TextDirection(Companion_getInstance_25().y40_1))) {
            var tmp2_elvis_lhs = contentBasedTextDirection_0($this);
            tmp = tmp2_elvis_lhs == null ? ResolvedTextDirection_Ltr_getInstance() : tmp2_elvis_lhs;
          } else {
            var tmp_4 = tmp0_subject;
            if (equals(tmp_4 == null ? null : new TextDirection(tmp_4), new TextDirection(Companion_getInstance_25().z40_1))) {
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
    return contentBasedTextDirection($this.r49_1);
  }
  function SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    this.r49_1 = text;
    this.s49_1 = style;
    this.t49_1 = spanStyles;
    this.u49_1 = placeholders;
    this.v49_1 = density;
    this.w49_1 = fontFamilyResolver;
    this.x49_1 = resolveTextDirection_1(this, this.s49_1.s40());
    this.y49_1 = newLayouter(this);
    this.z49_1 = 0.0;
    this.a4a_1 = 0.0;
    var tmp = ensureNotNull(this.y49_1);
    FloatCompanionObject_getInstance();
    var para = tmp.q4a(Infinity, 0, null, null, null, null, 62, null);
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.math.ceil' call
    var tmp0_ceil = para.q2y();
    tmp$ret$0 = Math.ceil(tmp0_ceil);
    tmp_0.z49_1 = tmp$ret$0;
    var tmp_1 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.math.ceil' call
    var tmp1_ceil = para.r2y();
    tmp$ret$1 = Math.ceil(tmp1_ceil);
    tmp_1.a4a_1 = tmp$ret$1;
  }
  SkiaParagraphIntrinsics.prototype.p4a = function () {
    var tmp0_elvis_lhs = this.y49_1;
    var layouter = tmp0_elvis_lhs == null ? newLayouter(this) : tmp0_elvis_lhs;
    this.y49_1 = null;
    return layouter;
  };
  SkiaParagraphIntrinsics.prototype.q2y = function () {
    return this.z49_1;
  };
  SkiaParagraphIntrinsics.prototype.r2y = function () {
    return this.a4a_1;
  };
  SkiaParagraphIntrinsics.$metadata$ = classMeta('SkiaParagraphIntrinsics', [ParagraphIntrinsics]);
  function Companion_21() {
    Companion_instance_21 = this;
    this.p3v_1 = new LineBreak();
    this.q3v_1 = new LineBreak();
    this.r3v_1 = new LineBreak();
  }
  Companion_21.$metadata$ = objectMeta('Companion');
  var Companion_instance_21;
  function Companion_getInstance_31() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function LineBreak() {
    Companion_getInstance_31();
  }
  LineBreak.$metadata$ = classMeta('LineBreak');
  //region block: post-declaration
  PlatformResolveInterceptor$Companion$Default$1.prototype.e43 = interceptFontFamily;
  PlatformResolveInterceptor$Companion$Default$1.prototype.f43 = interceptFontWeight;
  PlatformResolveInterceptor$Companion$Default$1.prototype.g43 = interceptFontStyle;
  PlatformResolveInterceptor$Companion$Default$1.prototype.h43 = interceptFontSynthesis;
  _no_name_provided__qut3iv.prototype.g5 = get;
  _no_name_provided__qut3iv.prototype.m5 = fold;
  _no_name_provided__qut3iv.prototype.l5 = minusKey;
  _no_name_provided__qut3iv.prototype.n5 = plus_0;
  Unspecified.prototype.b3x = merge;
  Unspecified.prototype.f3x = takeOrElse;
  BrushStyle.prototype.b3x = merge;
  BrushStyle.prototype.f3x = takeOrElse;
  ColorStyle.prototype.b3x = merge;
  ColorStyle.prototype.f3x = takeOrElse;
  SkiaParagraph.prototype.q49 = paint$default;
  SkiaParagraphIntrinsics.prototype.d3v = get_hasStaleResolvedFonts;
  //endregion
  //region block: init
  DefaultCacheSize = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FontStyle;
  _.$_$.b = createFontFamilyResolver;
  _.$_$.c = PlatformTextInputService;
  _.$_$.d = TextInputService;
  _.$_$.e = FontLoader;
  _.$_$.f = TextAlign;
  _.$_$.g = TextOverflow;
  _.$_$.h = MultiParagraphIntrinsics;
  _.$_$.i = MultiParagraph;
  _.$_$.j = TextLayoutResult;
  _.$_$.k = resolveDefaults;
  _.$_$.l = CommitTextCommand_init_$Create$;
  _.$_$.m = TextLayoutInput_init_$Create$;
  _.$_$.n = AnnotatedString_init_$Create$;
  _.$_$.o = TextStyle_init_$Create$_1;
  _.$_$.p = _TextOverflow___init__impl__obguoe;
  _.$_$.q = _TextOverflow___get_value__impl__vugm5i;
  _.$_$.r = Companion_getInstance_12;
  _.$_$.s = Companion_getInstance_18;
  _.$_$.t = Companion_getInstance_23;
  _.$_$.u = Companion_getInstance_29;
  _.$_$.v = TextPainter_getInstance;
  _.$_$.w = Companion_getInstance_10;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-ui-text.js.map
