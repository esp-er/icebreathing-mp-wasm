(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'skiko-kjs'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'skiko-kjs'.");
    }
    root['skiko-kjs'] = factory(typeof this['skiko-kjs'] === 'undefined' ? {} : this['skiko-kjs'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var objectMeta = kotlin_kotlin.$_$.u7;
  var classMeta = kotlin_kotlin.$_$.y6;
  var Unit_getInstance = kotlin_kotlin.$_$.s2;
  var ensureNotNull = kotlin_kotlin.$_$.ja;
  var Enum = kotlin_kotlin.$_$.q9;
  var equals = kotlin_kotlin.$_$.a7;
  var hashCode = kotlin_kotlin.$_$.i7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ra;
  var toBits = kotlin_kotlin.$_$.xa;
  var compareTo = kotlin_kotlin.$_$.z6;
  var THROW_CCE = kotlin_kotlin.$_$.ba;
  var isCharSequence = kotlin_kotlin.$_$.m7;
  var trim = kotlin_kotlin.$_$.j9;
  var toString = kotlin_kotlin.$_$.x7;
  var split$default = kotlin_kotlin.$_$.k;
  var getOrNull = kotlin_kotlin.$_$.p4;
  var toIntOrNull = kotlin_kotlin.$_$.f9;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.f2;
  var fillArrayVal = kotlin_kotlin.$_$.b7;
  var splitToSequence$default = kotlin_kotlin.$_$.j;
  var mapNotNull = kotlin_kotlin.$_$.w8;
  var toList = kotlin_kotlin.$_$.y8;
  var copyToArray = kotlin_kotlin.$_$.e4;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.g2;
  var uintCompare = kotlin_kotlin.$_$.cb;
  var Companion_getInstance = kotlin_kotlin.$_$.r2;
  var UInt = kotlin_kotlin.$_$.da;
  var isNaN_0 = kotlin_kotlin.$_$.na;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var charSequenceGet = kotlin_kotlin.$_$.v6;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.a2;
  var numberToChar = kotlin_kotlin.$_$.r7;
  var charArrayOf = kotlin_kotlin.$_$.u6;
  var concatToString = kotlin_kotlin.$_$.z8;
  var interfaceMeta = kotlin_kotlin.$_$.k7;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var decodeToString = kotlin_kotlin.$_$.a9;
  var contentEquals = kotlin_kotlin.$_$.y3;
  var contentHashCode = kotlin_kotlin.$_$.a4;
  var Iterable = kotlin_kotlin.$_$.d3;
  var contentHashCode_0 = kotlin_kotlin.$_$.z3;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var NotImplementedError = kotlin_kotlin.$_$.x9;
  var MutableIterator = kotlin_kotlin.$_$.k3;
  var last = kotlin_kotlin.$_$.z4;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.n2;
  var floatFromBits = kotlin_kotlin.$_$.c7;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var Error_init_$Create$ = kotlin_kotlin.$_$.g1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.i1;
  var until = kotlin_kotlin.$_$.q8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var toBits_0 = kotlin_kotlin.$_$.ya;
  var getNumberHashCode = kotlin_kotlin.$_$.e7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var getStringHashCode = kotlin_kotlin.$_$.h7;
  var Long = kotlin_kotlin.$_$.v9;
  var captureStack = kotlin_kotlin.$_$.t6;
  var RuntimeException = kotlin_kotlin.$_$.aa;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.u1;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.b1;
  var charSequenceLength = kotlin_kotlin.$_$.w6;
  var lazy = kotlin_kotlin.$_$.qa;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var arrayIterator = kotlin_kotlin.$_$.s6;
  var toIntArray = kotlin_kotlin.$_$.o5;
  var plus = kotlin_kotlin.$_$.sa;
  var toString_0 = kotlin_kotlin.$_$.h9;
  var numberToLong = kotlin_kotlin.$_$.t7;
  var numberToInt = kotlin_kotlin.$_$.s7;
  var setOf = kotlin_kotlin.$_$.i5;
  //endregion
  //region block: pre-declaration
  Managed.prototype = Object.create(Native.prototype);
  Managed.prototype.constructor = Managed;
  BackendRenderTarget.prototype = Object.create(Managed.prototype);
  BackendRenderTarget.prototype.constructor = BackendRenderTarget;
  function get_width() {
    return this.o2m().u2m_1;
  }
  function get_height() {
    return this.o2m().v2m_1;
  }
  function get_colorType() {
    return this.o2m().t2m_1.w2m_1;
  }
  function get_colorSpace() {
    return this.o2m().t2m_1.y2m_1;
  }
  function get_isOpaque() {
    return this.o2m().t2m_1.d2n();
  }
  Bitmap.prototype = Object.create(Managed.prototype);
  Bitmap.prototype.constructor = Bitmap;
  BlendMode.prototype = Object.create(Enum.prototype);
  BlendMode.prototype.constructor = BlendMode;
  Canvas.prototype = Object.create(Managed.prototype);
  Canvas.prototype.constructor = Canvas;
  ClipMode.prototype = Object.create(Enum.prototype);
  ClipMode.prototype.constructor = ClipMode;
  ColorAlphaType.prototype = Object.create(Enum.prototype);
  ColorAlphaType.prototype.constructor = ColorAlphaType;
  RefCnt.prototype = Object.create(Managed.prototype);
  RefCnt.prototype.constructor = RefCnt;
  ColorFilter.prototype = Object.create(RefCnt.prototype);
  ColorFilter.prototype.constructor = ColorFilter;
  ColorSpace.prototype = Object.create(Managed.prototype);
  ColorSpace.prototype.constructor = ColorSpace;
  ColorType.prototype = Object.create(Enum.prototype);
  ColorType.prototype.constructor = ColorType;
  Data.prototype = Object.create(Managed.prototype);
  Data.prototype.constructor = Data;
  DirectContext.prototype = Object.create(RefCnt.prototype);
  DirectContext.prototype.constructor = DirectContext;
  FilterMode.prototype = Object.create(Enum.prototype);
  FilterMode.prototype.constructor = FilterMode;
  Font.prototype = Object.create(Managed.prototype);
  Font.prototype.constructor = Font;
  FontMgr.prototype = Object.create(RefCnt.prototype);
  FontMgr.prototype.constructor = FontMgr;
  FontSlant.prototype = Object.create(Enum.prototype);
  FontSlant.prototype.constructor = FontSlant;
  Image.prototype = Object.create(RefCnt.prototype);
  Image.prototype.constructor = Image;
  ManagedString.prototype = Object.create(Managed.prototype);
  ManagedString.prototype.constructor = ManagedString;
  MipmapMode.prototype = Object.create(Enum.prototype);
  MipmapMode.prototype.constructor = MipmapMode;
  Paint.prototype = Object.create(Managed.prototype);
  Paint.prototype.constructor = Paint;
  PaintMode.prototype = Object.create(Enum.prototype);
  PaintMode.prototype.constructor = PaintMode;
  PaintStrokeCap.prototype = Object.create(Enum.prototype);
  PaintStrokeCap.prototype.constructor = PaintStrokeCap;
  PaintStrokeJoin.prototype = Object.create(Enum.prototype);
  PaintStrokeJoin.prototype.constructor = PaintStrokeJoin;
  Path.prototype = Object.create(Managed.prototype);
  Path.prototype.constructor = Path;
  PathDirection.prototype = Object.create(Enum.prototype);
  PathDirection.prototype.constructor = PathDirection;
  PathFillMode.prototype = Object.create(Enum.prototype);
  PathFillMode.prototype.constructor = PathFillMode;
  PathMeasure.prototype = Object.create(Managed.prototype);
  PathMeasure.prototype.constructor = PathMeasure;
  PathOp.prototype = Object.create(Enum.prototype);
  PathOp.prototype.constructor = PathOp;
  PathSegmentIterator.prototype = Object.create(Managed.prototype);
  PathSegmentIterator.prototype.constructor = PathSegmentIterator;
  PathVerb.prototype = Object.create(Enum.prototype);
  PathVerb.prototype.constructor = PathVerb;
  Picture.prototype = Object.create(RefCnt.prototype);
  Picture.prototype.constructor = Picture;
  PictureRecorder.prototype = Object.create(Managed.prototype);
  PictureRecorder.prototype.constructor = PictureRecorder;
  PixelGeometry.prototype = Object.create(Enum.prototype);
  PixelGeometry.prototype.constructor = PixelGeometry;
  RRect.prototype = Object.create(Rect.prototype);
  RRect.prototype.constructor = RRect;
  Surface.prototype = Object.create(RefCnt.prototype);
  Surface.prototype.constructor = Surface;
  SurfaceColorFormat.prototype = Object.create(Enum.prototype);
  SurfaceColorFormat.prototype.constructor = SurfaceColorFormat;
  SurfaceOrigin.prototype = Object.create(Enum.prototype);
  SurfaceOrigin.prototype.constructor = SurfaceOrigin;
  Typeface.prototype = Object.create(RefCnt.prototype);
  Typeface.prototype.constructor = Typeface;
  Affinity.prototype = Object.create(Enum.prototype);
  Affinity.prototype.constructor = Affinity;
  Alignment.prototype = Object.create(Enum.prototype);
  Alignment.prototype.constructor = Alignment;
  BaselineMode.prototype = Object.create(Enum.prototype);
  BaselineMode.prototype.constructor = BaselineMode;
  DecorationLineStyle.prototype = Object.create(Enum.prototype);
  DecorationLineStyle.prototype.constructor = DecorationLineStyle;
  Direction.prototype = Object.create(Enum.prototype);
  Direction.prototype.constructor = Direction;
  FontCollection.prototype = Object.create(RefCnt.prototype);
  FontCollection.prototype.constructor = FontCollection;
  Paragraph.prototype = Object.create(Managed.prototype);
  Paragraph.prototype.constructor = Paragraph;
  ParagraphBuilder.prototype = Object.create(Managed.prototype);
  ParagraphBuilder.prototype.constructor = ParagraphBuilder;
  ParagraphStyle.prototype = Object.create(Managed.prototype);
  ParagraphStyle.prototype.constructor = ParagraphStyle;
  PlaceholderAlignment.prototype = Object.create(Enum.prototype);
  PlaceholderAlignment.prototype.constructor = PlaceholderAlignment;
  RectHeightMode.prototype = Object.create(Enum.prototype);
  RectHeightMode.prototype.constructor = RectHeightMode;
  RectWidthMode.prototype = Object.create(Enum.prototype);
  RectWidthMode.prototype.constructor = RectWidthMode;
  StrutStyle.prototype = Object.create(Managed.prototype);
  StrutStyle.prototype.constructor = StrutStyle;
  TextStyle.prototype = Object.create(Managed.prototype);
  TextStyle.prototype.constructor = TextStyle;
  TypefaceFontProvider.prototype = Object.create(FontMgr.prototype);
  TypefaceFontProvider.prototype.constructor = TypefaceFontProvider;
  SkikoKeyboardEventKind.prototype = Object.create(Enum.prototype);
  SkikoKeyboardEventKind.prototype.constructor = SkikoKeyboardEventKind;
  SkikoPointerEventKind.prototype = Object.create(Enum.prototype);
  SkikoPointerEventKind.prototype.constructor = SkikoPointerEventKind;
  GraphicsApi.prototype = Object.create(Enum.prototype);
  GraphicsApi.prototype.constructor = GraphicsApi;
  RenderException.prototype = Object.create(RuntimeException.prototype);
  RenderException.prototype.constructor = RenderException;
  function onKeyboardEvent(event) {
    return Unit_getInstance();
  }
  function onPointerEvent(event) {
    return Unit_getInstance();
  }
  function get_input() {
    return Empty_getInstance();
  }
  SystemTheme.prototype = Object.create(Enum.prototype);
  SystemTheme.prototype.constructor = SystemTheme;
  SkiaLayer$attachTo$1.prototype = Object.create(CanvasRenderer.prototype);
  SkiaLayer$attachTo$1.prototype.constructor = SkiaLayer$attachTo$1;
  SkikoKey.prototype = Object.create(Enum.prototype);
  SkikoKey.prototype.constructor = SkikoKey;
  //endregion
  function Companion() {
    Companion_instance = this;
    Companion_getInstance_46().c2m();
  }
  Companion.prototype.d2m = function (width, height, sampleCnt, stencilBits, fbId, fbFormat) {
    Stats_getInstance().e2m();
    return new BackendRenderTarget(org_jetbrains_skia_BackendRenderTarget__1nMakeGL(width, height, sampleCnt, stencilBits, fbId, fbFormat));
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function _FinalizerHolder() {
    _FinalizerHolder_instance = this;
    this.f2m_1 = org_jetbrains_skia_BackendRenderTarget__1nGetFinalizer();
  }
  _FinalizerHolder.$metadata$ = objectMeta('_FinalizerHolder');
  var _FinalizerHolder_instance;
  function _FinalizerHolder_getInstance() {
    if (_FinalizerHolder_instance == null)
      new _FinalizerHolder();
    return _FinalizerHolder_instance;
  }
  function BackendRenderTarget(ptr) {
    Companion_getInstance_0();
    var tmp = _FinalizerHolder_getInstance().f2m_1;
    Managed_init_$Init$(ptr, tmp, false, 4, null, this);
  }
  BackendRenderTarget.$metadata$ = classMeta('BackendRenderTarget', undefined, undefined, undefined, undefined, Managed.prototype);
  function Companion_0() {
    Companion_instance_0 = this;
    Companion_getInstance_46().c2m();
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Bitmap_init_$Init$($this) {
    Bitmap.call($this, org_jetbrains_skia_Bitmap__1nMake());
    Stats_getInstance().e2m();
    return $this;
  }
  function Bitmap_init_$Create$() {
    return Bitmap_init_$Init$(Object.create(Bitmap.prototype));
  }
  function _FinalizerHolder_0() {
    _FinalizerHolder_instance_0 = this;
    this.k2m_1 = org_jetbrains_skia_Bitmap__1nGetFinalizer();
  }
  _FinalizerHolder_0.$metadata$ = objectMeta('_FinalizerHolder');
  var _FinalizerHolder_instance_0;
  function _FinalizerHolder_getInstance_0() {
    if (_FinalizerHolder_instance_0 == null)
      new _FinalizerHolder_0();
    return _FinalizerHolder_instance_0;
  }
  function _nGetImageInfo$ref() {
    var l = function (p0, p1, p2) {
      org_jetbrains_skia_Bitmap__1nGetImageInfo(p0, p1, p2);
      return Unit_getInstance();
    };
    l.callableName = '_nGetImageInfo';
    return l;
  }
  function Bitmap(ptr) {
    Companion_getInstance_1();
    var tmp = _FinalizerHolder_getInstance_0().k2m_1;
    Managed_init_$Init$(ptr, tmp, false, 4, null, this);
    this.n2m_1 = null;
  }
  Bitmap.prototype.o2m = function () {
    var tmp;
    try {
      if (this.n2m_1 == null) {
        var tmp_0 = this;
        var tmp_1 = Companion_getInstance_18();
        var tmp_2 = this.i2m_1;
        tmp_0.n2m_1 = tmp_1.q2m(tmp_2, _nGetImageInfo$ref());
      }
      tmp = ensureNotNull(this.n2m_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Bitmap.prototype.r2m = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = org_jetbrains_skia_Bitmap__1nIsImmutable(this.i2m_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Bitmap.prototype.s2m = function (info, rowBytes) {
    var tmp;
    try {
      this.n2m_1 = null;
      Stats_getInstance().e2m();
      tmp = org_jetbrains_skia_Bitmap__1nAllocPixelsRowBytes(this.i2m_1, info.u2m_1, info.v2m_1, info.t2m_1.w2m_1.t5_1, info.t2m_1.x2m_1.t5_1, getPtr(info.t2m_1.y2m_1), rowBytes);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(info.t2m_1.y2m_1);
    }
    return tmp;
  };
  Bitmap.prototype.z2m = function (imageInfo) {
    return this.s2m(imageInfo, imageInfo.a2n());
  };
  Bitmap.$metadata$ = classMeta('Bitmap', [IHasImageInfo], undefined, undefined, undefined, Managed.prototype);
  var BlendMode_CLEAR_instance;
  var BlendMode_SRC_instance;
  var BlendMode_DST_instance;
  var BlendMode_SRC_OVER_instance;
  var BlendMode_DST_OVER_instance;
  var BlendMode_SRC_IN_instance;
  var BlendMode_DST_IN_instance;
  var BlendMode_SRC_OUT_instance;
  var BlendMode_DST_OUT_instance;
  var BlendMode_SRC_ATOP_instance;
  var BlendMode_DST_ATOP_instance;
  var BlendMode_XOR_instance;
  var BlendMode_PLUS_instance;
  var BlendMode_MODULATE_instance;
  var BlendMode_SCREEN_instance;
  var BlendMode_OVERLAY_instance;
  var BlendMode_DARKEN_instance;
  var BlendMode_LIGHTEN_instance;
  var BlendMode_COLOR_DODGE_instance;
  var BlendMode_COLOR_BURN_instance;
  var BlendMode_HARD_LIGHT_instance;
  var BlendMode_SOFT_LIGHT_instance;
  var BlendMode_DIFFERENCE_instance;
  var BlendMode_EXCLUSION_instance;
  var BlendMode_MULTIPLY_instance;
  var BlendMode_HUE_instance;
  var BlendMode_SATURATION_instance;
  var BlendMode_COLOR_instance;
  var BlendMode_LUMINOSITY_instance;
  var BlendMode_entriesInitialized;
  function BlendMode_initEntries() {
    if (BlendMode_entriesInitialized)
      return Unit_getInstance();
    BlendMode_entriesInitialized = true;
    BlendMode_CLEAR_instance = new BlendMode('CLEAR', 0);
    BlendMode_SRC_instance = new BlendMode('SRC', 1);
    BlendMode_DST_instance = new BlendMode('DST', 2);
    BlendMode_SRC_OVER_instance = new BlendMode('SRC_OVER', 3);
    BlendMode_DST_OVER_instance = new BlendMode('DST_OVER', 4);
    BlendMode_SRC_IN_instance = new BlendMode('SRC_IN', 5);
    BlendMode_DST_IN_instance = new BlendMode('DST_IN', 6);
    BlendMode_SRC_OUT_instance = new BlendMode('SRC_OUT', 7);
    BlendMode_DST_OUT_instance = new BlendMode('DST_OUT', 8);
    BlendMode_SRC_ATOP_instance = new BlendMode('SRC_ATOP', 9);
    BlendMode_DST_ATOP_instance = new BlendMode('DST_ATOP', 10);
    BlendMode_XOR_instance = new BlendMode('XOR', 11);
    BlendMode_PLUS_instance = new BlendMode('PLUS', 12);
    BlendMode_MODULATE_instance = new BlendMode('MODULATE', 13);
    BlendMode_SCREEN_instance = new BlendMode('SCREEN', 14);
    BlendMode_OVERLAY_instance = new BlendMode('OVERLAY', 15);
    BlendMode_DARKEN_instance = new BlendMode('DARKEN', 16);
    BlendMode_LIGHTEN_instance = new BlendMode('LIGHTEN', 17);
    BlendMode_COLOR_DODGE_instance = new BlendMode('COLOR_DODGE', 18);
    BlendMode_COLOR_BURN_instance = new BlendMode('COLOR_BURN', 19);
    BlendMode_HARD_LIGHT_instance = new BlendMode('HARD_LIGHT', 20);
    BlendMode_SOFT_LIGHT_instance = new BlendMode('SOFT_LIGHT', 21);
    BlendMode_DIFFERENCE_instance = new BlendMode('DIFFERENCE', 22);
    BlendMode_EXCLUSION_instance = new BlendMode('EXCLUSION', 23);
    BlendMode_MULTIPLY_instance = new BlendMode('MULTIPLY', 24);
    BlendMode_HUE_instance = new BlendMode('HUE', 25);
    BlendMode_SATURATION_instance = new BlendMode('SATURATION', 26);
    BlendMode_COLOR_instance = new BlendMode('COLOR', 27);
    BlendMode_LUMINOSITY_instance = new BlendMode('LUMINOSITY', 28);
  }
  function BlendMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  BlendMode.$metadata$ = classMeta('BlendMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function BlendMode_CLEAR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_CLEAR_instance;
  }
  function BlendMode_SRC_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_instance;
  }
  function BlendMode_DST_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_instance;
  }
  function BlendMode_SRC_OVER_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_OVER_instance;
  }
  function BlendMode_DST_OVER_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_OVER_instance;
  }
  function BlendMode_SRC_IN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_IN_instance;
  }
  function BlendMode_DST_IN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_IN_instance;
  }
  function BlendMode_SRC_OUT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_OUT_instance;
  }
  function BlendMode_DST_OUT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_OUT_instance;
  }
  function BlendMode_SRC_ATOP_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_ATOP_instance;
  }
  function BlendMode_DST_ATOP_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_ATOP_instance;
  }
  function BlendMode_XOR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_XOR_instance;
  }
  function BlendMode_PLUS_getInstance() {
    BlendMode_initEntries();
    return BlendMode_PLUS_instance;
  }
  function BlendMode_MODULATE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_MODULATE_instance;
  }
  function BlendMode_SCREEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SCREEN_instance;
  }
  function BlendMode_OVERLAY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_OVERLAY_instance;
  }
  function BlendMode_DARKEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DARKEN_instance;
  }
  function BlendMode_LIGHTEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_LIGHTEN_instance;
  }
  function BlendMode_COLOR_DODGE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_DODGE_instance;
  }
  function BlendMode_COLOR_BURN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_BURN_instance;
  }
  function BlendMode_HARD_LIGHT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_HARD_LIGHT_instance;
  }
  function BlendMode_SOFT_LIGHT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SOFT_LIGHT_instance;
  }
  function BlendMode_DIFFERENCE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DIFFERENCE_instance;
  }
  function BlendMode_EXCLUSION_getInstance() {
    BlendMode_initEntries();
    return BlendMode_EXCLUSION_instance;
  }
  function BlendMode_MULTIPLY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_MULTIPLY_instance;
  }
  function BlendMode_HUE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_HUE_instance;
  }
  function BlendMode_SATURATION_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SATURATION_instance;
  }
  function BlendMode_COLOR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_instance;
  }
  function BlendMode_LUMINOSITY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_LUMINOSITY_instance;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    Companion_getInstance_46().c2m();
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Canvas_init_$Init$(bitmap, surfaceProps, $this) {
    Canvas.call($this, org_jetbrains_skia_Canvas__1nMakeFromBitmap(bitmap.i2m_1, surfaceProps.g2n(), surfaceProps.f2n_1.t5_1), true, bitmap);
    Stats_getInstance().e2m();
    reachabilityBarrier(bitmap);
    return $this;
  }
  function Canvas_init_$Init$_0(bitmap, surfaceProps, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0)) {
      surfaceProps = SurfaceProps_init_$Create$(false, null, 3, null);
    }
    Canvas_init_$Init$(bitmap, surfaceProps, $this);
    return $this;
  }
  function Canvas_init_$Create$(bitmap, surfaceProps, $mask0, $marker) {
    return Canvas_init_$Init$_0(bitmap, surfaceProps, $mask0, $marker, Object.create(Canvas.prototype));
  }
  function _FinalizerHolder_1() {
    _FinalizerHolder_instance_1 = this;
    this.h2n_1 = org_jetbrains_skia_Canvas__1nGetFinalizer();
  }
  _FinalizerHolder_1.$metadata$ = objectMeta('_FinalizerHolder');
  var _FinalizerHolder_instance_1;
  function _FinalizerHolder_getInstance_1() {
    if (_FinalizerHolder_instance_1 == null)
      new _FinalizerHolder_1();
    return _FinalizerHolder_instance_1;
  }
  function Canvas(ptr, managed, _owner) {
    Companion_getInstance_2();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_1().h2n_1, managed);
    this.k2n_1 = _owner;
  }
  Canvas.prototype.l2n = function (x, y, paint) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_Canvas__1nDrawPoint(this.i2m_1, x, y, getPtr(paint));
    reachabilityBarrier(paint);
    return this;
  };
  Canvas.prototype.m2n = function (x0, y0, x1, y1, paint) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_Canvas__1nDrawLine(this.i2m_1, x0, y0, x1, y1, getPtr(paint));
    reachabilityBarrier(paint);
    return this;
  };
  Canvas.prototype.n2n = function (left, top, right, bottom, startAngle, sweepAngle, includeCenter, paint) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_Canvas__1nDrawArc(this.i2m_1, left, top, right, bottom, startAngle, sweepAngle, includeCenter, getPtr(paint));
    reachabilityBarrier(paint);
    return this;
  };
  Canvas.prototype.o2n = function (r, paint) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_Canvas__1nDrawRect(this.i2m_1, r.p2n_1, r.q2n_1, r.r2n_1, r.s2n_1, getPtr(paint));
    reachabilityBarrier(paint);
    return this;
  };
  Canvas.prototype.t2n = function (x, y, radius, paint) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_Canvas__1nDrawOval(this.i2m_1, x - radius, y - radius, x + radius, y + radius, getPtr(paint));
    reachabilityBarrier(paint);
    return this;
  };
  Canvas.prototype.u2n = function (r, paint) {
    Stats_getInstance().e2m();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_Canvas__1nDrawRRect(this.i2m_1, r.p2n_1, r.q2n_1, r.r2n_1, r.s2n_1, tmp0__anonymous__q1qw7t.c2o(r.z2n_1), r.z2n_1.length, getPtr(paint));
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
        }
      }
    }
    reachabilityBarrier(paint);
    return this;
  };
  Canvas.prototype.d2o = function (path, paint) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_Canvas__1nDrawPath(this.i2m_1, getPtr(path), getPtr(paint));
    reachabilityBarrier(path);
    reachabilityBarrier(paint);
    return this;
  };
  Canvas.prototype.e2o = function (image, src, dst, samplingMode, paint, strict) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_Canvas__1nDrawImageRect(this.i2m_1, getPtr(image), src.p2n_1, src.q2n_1, src.r2n_1, src.s2n_1, dst.p2n_1, dst.q2n_1, dst.r2n_1, dst.s2n_1, samplingMode.f2o(), samplingMode.g2o(), getPtr(paint), strict);
    reachabilityBarrier(image);
    reachabilityBarrier(paint);
    return this;
  };
  Canvas.prototype.h2o = function (picture, matrix, paint) {
    Stats_getInstance().e2m();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var tmp = this.i2m_1;
        var tmp_0 = getPtr(picture);
        var tmp0_safe_receiver = matrix;
        org_jetbrains_skia_Canvas__1nDrawPicture(tmp, tmp_0, tmp0__anonymous__q1qw7t.c2o(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i2o_1), getPtr(paint));
        reachabilityBarrier(picture);
        reachabilityBarrier(paint);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
        }
      }
    }
    return this;
  };
  Canvas.prototype.a29 = function (color) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_Canvas__1nClear(this.i2m_1, color);
    return this;
  };
  Canvas.prototype.j2o = function () {
    Stats_getInstance().e2m();
    org_jetbrains_skia_Canvas__1nResetMatrix(this.i2m_1);
    return this;
  };
  Canvas.prototype.k2o = function (r, mode, antiAlias) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_Canvas__1nClipRect(this.i2m_1, r.p2n_1, r.q2n_1, r.r2n_1, r.s2n_1, mode.t5_1, antiAlias);
    return this;
  };
  Canvas.prototype.l2o = function (r, mode, antiAlias) {
    Stats_getInstance().e2m();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_Canvas__1nClipRRect(this.i2m_1, r.p2n_1, r.q2n_1, r.r2n_1, r.s2n_1, tmp0__anonymous__q1qw7t.c2o(r.z2n_1), r.z2n_1.length, mode.t5_1, antiAlias);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
        }
      }
    }
    return this;
  };
  Canvas.prototype.m2o = function (p, mode, antiAlias) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_Canvas__1nClipPath(this.i2m_1, getPtr(p), mode.t5_1, antiAlias);
    reachabilityBarrier(p);
    return this;
  };
  Canvas.prototype.d2j = function (dx, dy) {
    return this.p2o(Companion_getInstance_20().o2o(dx, dy));
  };
  Canvas.prototype.q2o = function (sx, sy) {
    return this.p2o(Companion_getInstance_20().r2o(sx, sy));
  };
  Canvas.prototype.p2o = function (matrix) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        Stats_getInstance().e2m();
        org_jetbrains_skia_Canvas__1nConcat(this.i2m_1, tmp0__anonymous__q1qw7t.c2o(matrix.i2o_1));
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
        }
      }
    }
    return this;
  };
  Canvas.prototype.s2o = function (matrix) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        Stats_getInstance().e2m();
        org_jetbrains_skia_Canvas__1nConcat44(this.i2m_1, tmp0__anonymous__q1qw7t.c2o(matrix.t2o_1));
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
        }
      }
    }
    return this;
  };
  Canvas.prototype.u2o = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = org_jetbrains_skia_Canvas__1nSave(this.i2m_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Canvas.prototype.v2o = function (left, top, right, bottom, paint) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = org_jetbrains_skia_Canvas__1nSaveLayerRect(this.i2m_1, left, top, right, bottom, getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  Canvas.prototype.w2o = function () {
    Stats_getInstance().e2m();
    org_jetbrains_skia_Canvas__1nRestore(this.i2m_1);
    return this;
  };
  Canvas.$metadata$ = classMeta('Canvas', undefined, undefined, undefined, undefined, Managed.prototype);
  var ClipMode_DIFFERENCE_instance;
  var ClipMode_INTERSECT_instance;
  var ClipMode_entriesInitialized;
  function ClipMode_initEntries() {
    if (ClipMode_entriesInitialized)
      return Unit_getInstance();
    ClipMode_entriesInitialized = true;
    ClipMode_DIFFERENCE_instance = new ClipMode('DIFFERENCE', 0);
    ClipMode_INTERSECT_instance = new ClipMode('INTERSECT', 1);
  }
  function ClipMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  ClipMode.$metadata$ = classMeta('ClipMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function ClipMode_DIFFERENCE_getInstance() {
    ClipMode_initEntries();
    return ClipMode_DIFFERENCE_instance;
  }
  function ClipMode_INTERSECT_getInstance() {
    ClipMode_initEntries();
    return ClipMode_INTERSECT_instance;
  }
  var ColorAlphaType_UNKNOWN_instance;
  var ColorAlphaType_OPAQUE_instance;
  var ColorAlphaType_PREMUL_instance;
  var ColorAlphaType_UNPREMUL_instance;
  function values() {
    return [ColorAlphaType_UNKNOWN_getInstance(), ColorAlphaType_OPAQUE_getInstance(), ColorAlphaType_PREMUL_getInstance(), ColorAlphaType_UNPREMUL_getInstance()];
  }
  var ColorAlphaType_entriesInitialized;
  function ColorAlphaType_initEntries() {
    if (ColorAlphaType_entriesInitialized)
      return Unit_getInstance();
    ColorAlphaType_entriesInitialized = true;
    ColorAlphaType_UNKNOWN_instance = new ColorAlphaType('UNKNOWN', 0);
    ColorAlphaType_OPAQUE_instance = new ColorAlphaType('OPAQUE', 1);
    ColorAlphaType_PREMUL_instance = new ColorAlphaType('PREMUL', 2);
    ColorAlphaType_UNPREMUL_instance = new ColorAlphaType('UNPREMUL', 3);
  }
  function ColorAlphaType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  ColorAlphaType.$metadata$ = classMeta('ColorAlphaType', undefined, undefined, undefined, undefined, Enum.prototype);
  function ColorAlphaType_UNKNOWN_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_UNKNOWN_instance;
  }
  function ColorAlphaType_OPAQUE_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_OPAQUE_instance;
  }
  function ColorAlphaType_PREMUL_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_PREMUL_instance;
  }
  function ColorAlphaType_UNPREMUL_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_UNPREMUL_instance;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    Companion_getInstance_46().c2m();
    this.x2o_1 = ColorFilter_init_$Create$_0(org_jetbrains_skia_ColorFilter__1nGetSRGBToLinearGamma(), false);
    this.y2o_1 = ColorFilter_init_$Create$_0(org_jetbrains_skia_ColorFilter__1nGetLuma(), false);
  }
  Companion_2.prototype.z2o = function (color, mode) {
    Stats_getInstance().e2m();
    return ColorFilter_init_$Create$(org_jetbrains_skia_ColorFilter__1nMakeBlend(color, mode.t5_1));
  };
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function ColorFilter_init_$Init$(ptr, $this) {
    RefCnt_init_$Init$(ptr, $this);
    ColorFilter.call($this);
    return $this;
  }
  function ColorFilter_init_$Create$(ptr) {
    return ColorFilter_init_$Init$(ptr, Object.create(ColorFilter.prototype));
  }
  function ColorFilter_init_$Init$_0(ptr, allowClose, $this) {
    RefCnt_init_$Init$_0(ptr, allowClose, $this);
    ColorFilter.call($this);
    return $this;
  }
  function ColorFilter_init_$Create$_0(ptr, allowClose) {
    return ColorFilter_init_$Init$_0(ptr, allowClose, Object.create(ColorFilter.prototype));
  }
  function ColorFilter() {
    Companion_getInstance_3();
  }
  ColorFilter.$metadata$ = classMeta('ColorFilter', undefined, undefined, undefined, undefined, RefCnt.prototype);
  function Companion_3() {
    Companion_instance_3 = this;
    this.d2p_1 = new ColorInfo(ColorType_UNKNOWN_getInstance(), ColorAlphaType_UNKNOWN_getInstance(), null);
  }
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ColorInfo(colorType, alphaType, colorSpace) {
    Companion_getInstance_4();
    this.w2m_1 = colorType;
    this.x2m_1 = alphaType;
    this.y2m_1 = colorSpace;
  }
  ColorInfo.prototype.d2n = function () {
    return this.x2m_1.equals(ColorAlphaType_OPAQUE_getInstance()) ? true : this.w2m_1.g2p();
  };
  ColorInfo.prototype.h2p = function () {
    return this.w2m_1.h2p();
  };
  ColorInfo.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof ColorInfo))
      return false;
    if (!this.w2m_1.equals(other.w2m_1))
      return false;
    if (!this.x2m_1.equals(other.x2m_1))
      return false;
    return equals(this.y2m_1, other.y2m_1);
  };
  ColorInfo.prototype.hashCode = function () {
    var prime = 59;
    var result = 1;
    result = imul(result, prime) + this.w2m_1.hashCode() | 0;
    result = imul(result, prime) + this.x2m_1.hashCode() | 0;
    var tmp = imul(result, prime);
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.y2m_1;
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = tmp + tmp$ret$0 | 0;
    return result;
  };
  ColorInfo.prototype.toString = function () {
    return 'ColorInfo(_colorType=' + this.w2m_1 + ', _alphaType=' + this.x2m_1 + ', _colorSpace=' + this.y2m_1 + ')';
  };
  ColorInfo.$metadata$ = classMeta('ColorInfo');
  function Companion_4() {
    Companion_instance_4 = this;
    Companion_getInstance_46().c2m();
    this.i2p_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeSRGB(), false);
    this.j2p_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeSRGBLinear(), false);
    this.k2p_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeDisplayP3(), false);
  }
  Companion_4.$metadata$ = objectMeta('Companion');
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function ColorSpace_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_2().l2p_1, true);
    ColorSpace.call($this);
    return $this;
  }
  function ColorSpace_init_$Create$(ptr) {
    return ColorSpace_init_$Init$(ptr, Object.create(ColorSpace.prototype));
  }
  function ColorSpace_init_$Init$_0(ptr, managed, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_2().l2p_1, managed);
    ColorSpace.call($this);
    return $this;
  }
  function ColorSpace_init_$Create$_0(ptr, managed) {
    return ColorSpace_init_$Init$_0(ptr, managed, Object.create(ColorSpace.prototype));
  }
  function _FinalizerHolder_2() {
    _FinalizerHolder_instance_2 = this;
    this.l2p_1 = org_jetbrains_skia_ColorSpace__1nGetFinalizer();
  }
  _FinalizerHolder_2.$metadata$ = objectMeta('_FinalizerHolder');
  var _FinalizerHolder_instance_2;
  function _FinalizerHolder_getInstance_2() {
    if (_FinalizerHolder_instance_2 == null)
      new _FinalizerHolder_2();
    return _FinalizerHolder_instance_2;
  }
  function ColorSpace() {
    Companion_getInstance_5();
  }
  ColorSpace.$metadata$ = classMeta('ColorSpace', undefined, undefined, undefined, undefined, Managed.prototype);
  var ColorType_UNKNOWN_instance;
  var ColorType_ALPHA_8_instance;
  var ColorType_RGB_565_instance;
  var ColorType_ARGB_4444_instance;
  var ColorType_RGBA_8888_instance;
  var ColorType_RGB_888X_instance;
  var ColorType_BGRA_8888_instance;
  var ColorType_RGBA_1010102_instance;
  var ColorType_BGRA_1010102_instance;
  var ColorType_RGB_101010X_instance;
  var ColorType_BGR_101010X_instance;
  var ColorType_GRAY_8_instance;
  var ColorType_RGBA_F16NORM_instance;
  var ColorType_RGBA_F16_instance;
  var ColorType_RGBA_F32_instance;
  var ColorType_R8G8_UNORM_instance;
  var ColorType_A16_FLOAT_instance;
  var ColorType_R16G16_FLOAT_instance;
  var ColorType_A16_UNORM_instance;
  var ColorType_R16G16_UNORM_instance;
  var ColorType_R16G16B16A16_UNORM_instance;
  function Companion_5() {
    Companion_instance_5 = this;
    this.m2p_1 = ColorType_BGRA_8888_getInstance();
  }
  Companion_5.$metadata$ = objectMeta('Companion');
  var Companion_instance_5;
  function Companion_getInstance_6() {
    ColorType_initEntries();
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function values_0() {
    return [ColorType_UNKNOWN_getInstance(), ColorType_ALPHA_8_getInstance(), ColorType_RGB_565_getInstance(), ColorType_ARGB_4444_getInstance(), ColorType_RGBA_8888_getInstance(), ColorType_RGB_888X_getInstance(), ColorType_BGRA_8888_getInstance(), ColorType_RGBA_1010102_getInstance(), ColorType_BGRA_1010102_getInstance(), ColorType_RGB_101010X_getInstance(), ColorType_BGR_101010X_getInstance(), ColorType_GRAY_8_getInstance(), ColorType_RGBA_F16NORM_getInstance(), ColorType_RGBA_F16_getInstance(), ColorType_RGBA_F32_getInstance(), ColorType_R8G8_UNORM_getInstance(), ColorType_A16_FLOAT_getInstance(), ColorType_R16G16_FLOAT_getInstance(), ColorType_A16_UNORM_getInstance(), ColorType_R16G16_UNORM_getInstance(), ColorType_R16G16B16A16_UNORM_getInstance()];
  }
  var ColorType_entriesInitialized;
  function ColorType_initEntries() {
    if (ColorType_entriesInitialized)
      return Unit_getInstance();
    ColorType_entriesInitialized = true;
    ColorType_UNKNOWN_instance = new ColorType('UNKNOWN', 0);
    ColorType_ALPHA_8_instance = new ColorType('ALPHA_8', 1);
    ColorType_RGB_565_instance = new ColorType('RGB_565', 2);
    ColorType_ARGB_4444_instance = new ColorType('ARGB_4444', 3);
    ColorType_RGBA_8888_instance = new ColorType('RGBA_8888', 4);
    ColorType_RGB_888X_instance = new ColorType('RGB_888X', 5);
    ColorType_BGRA_8888_instance = new ColorType('BGRA_8888', 6);
    ColorType_RGBA_1010102_instance = new ColorType('RGBA_1010102', 7);
    ColorType_BGRA_1010102_instance = new ColorType('BGRA_1010102', 8);
    ColorType_RGB_101010X_instance = new ColorType('RGB_101010X', 9);
    ColorType_BGR_101010X_instance = new ColorType('BGR_101010X', 10);
    ColorType_GRAY_8_instance = new ColorType('GRAY_8', 11);
    ColorType_RGBA_F16NORM_instance = new ColorType('RGBA_F16NORM', 12);
    ColorType_RGBA_F16_instance = new ColorType('RGBA_F16', 13);
    ColorType_RGBA_F32_instance = new ColorType('RGBA_F32', 14);
    ColorType_R8G8_UNORM_instance = new ColorType('R8G8_UNORM', 15);
    ColorType_A16_FLOAT_instance = new ColorType('A16_FLOAT', 16);
    ColorType_R16G16_FLOAT_instance = new ColorType('R16G16_FLOAT', 17);
    ColorType_A16_UNORM_instance = new ColorType('A16_UNORM', 18);
    ColorType_R16G16_UNORM_instance = new ColorType('R16G16_UNORM', 19);
    ColorType_R16G16B16A16_UNORM_instance = new ColorType('R16G16B16A16_UNORM', 20);
    Companion_getInstance_6();
  }
  function ColorType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  ColorType.prototype.h2p = function () {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.t5_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = 0;
        break;
      case 1:
        tmp = 1;
        break;
      case 2:
        tmp = 2;
        break;
      case 3:
        tmp = 2;
        break;
      case 4:
        tmp = 4;
        break;
      case 6:
        tmp = 4;
        break;
      case 5:
        tmp = 4;
        break;
      case 7:
        tmp = 4;
        break;
      case 9:
        tmp = 4;
        break;
      case 8:
        tmp = 4;
        break;
      case 10:
        tmp = 4;
        break;
      case 11:
        tmp = 1;
        break;
      case 12:
        tmp = 8;
        break;
      case 13:
        tmp = 8;
        break;
      case 14:
        tmp = 16;
        break;
      case 15:
        tmp = 2;
        break;
      case 18:
        tmp = 2;
        break;
      case 19:
        tmp = 4;
        break;
      case 16:
        tmp = 2;
        break;
      case 17:
        tmp = 4;
        break;
      case 20:
        tmp = 8;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  ColorType.prototype.g2p = function () {
    return org_jetbrains_skia_ColorType__1nIsAlwaysOpaque(this.t5_1);
  };
  ColorType.$metadata$ = classMeta('ColorType', undefined, undefined, undefined, undefined, Enum.prototype);
  function ColorType_UNKNOWN_getInstance() {
    ColorType_initEntries();
    return ColorType_UNKNOWN_instance;
  }
  function ColorType_ALPHA_8_getInstance() {
    ColorType_initEntries();
    return ColorType_ALPHA_8_instance;
  }
  function ColorType_RGB_565_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_565_instance;
  }
  function ColorType_ARGB_4444_getInstance() {
    ColorType_initEntries();
    return ColorType_ARGB_4444_instance;
  }
  function ColorType_RGBA_8888_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_8888_instance;
  }
  function ColorType_RGB_888X_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_888X_instance;
  }
  function ColorType_BGRA_8888_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_8888_instance;
  }
  function ColorType_RGBA_1010102_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_1010102_instance;
  }
  function ColorType_BGRA_1010102_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_1010102_instance;
  }
  function ColorType_RGB_101010X_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_101010X_instance;
  }
  function ColorType_BGR_101010X_getInstance() {
    ColorType_initEntries();
    return ColorType_BGR_101010X_instance;
  }
  function ColorType_GRAY_8_getInstance() {
    ColorType_initEntries();
    return ColorType_GRAY_8_instance;
  }
  function ColorType_RGBA_F16NORM_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F16NORM_instance;
  }
  function ColorType_RGBA_F16_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F16_instance;
  }
  function ColorType_RGBA_F32_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F32_instance;
  }
  function ColorType_R8G8_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R8G8_UNORM_instance;
  }
  function ColorType_A16_FLOAT_getInstance() {
    ColorType_initEntries();
    return ColorType_A16_FLOAT_instance;
  }
  function ColorType_R16G16_FLOAT_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16_FLOAT_instance;
  }
  function ColorType_A16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_A16_UNORM_instance;
  }
  function ColorType_R16G16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16_UNORM_instance;
  }
  function ColorType_R16G16B16A16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16B16A16_UNORM_instance;
  }
  function CubicResampler(b, c) {
    this.n2p_1 = b;
    this.o2p_1 = c;
  }
  CubicResampler.prototype.f2o = function () {
    return toBits(this.n2p_1) | -2147483648;
  };
  CubicResampler.prototype.g2o = function () {
    return toBits(this.o2p_1);
  };
  CubicResampler.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof CubicResampler))
      return false;
    if (!(compareTo(this.n2p_1, other.n2p_1) === 0))
      return false;
    return compareTo(this.o2p_1, other.o2p_1) === 0;
  };
  CubicResampler.prototype.hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.n2p_1) | 0;
    result = imul(result, PRIME) + toBits(this.o2p_1) | 0;
    return result;
  };
  CubicResampler.prototype.toString = function () {
    return 'CubicResampler(_B=' + this.n2p_1 + ', _C=' + this.o2p_1 + ')';
  };
  CubicResampler.$metadata$ = classMeta('CubicResampler', [SamplingMode]);
  function Companion_6() {
    Companion_instance_6 = this;
    Companion_getInstance_46().c2m();
  }
  Companion_6.prototype.p2p = function (bytes, offset, length) {
    Stats_getInstance().e2m();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp$ret$0;
        // Inline function 'org.jetbrains.skia.Companion.makeFromBytes.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        tmp$ret$0 = org_jetbrains_skia_Data__1nMakeFromBytes(tmp0__anonymous__q1qw7t.q2p(bytes), offset, length);
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
        }
      }
    }
    return new Data(tmp$ret$1);
  };
  Companion_6.prototype.r2p = function (bytes, offset, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      length = bytes.length;
    return this.p2p(bytes, offset, length);
  };
  Companion_6.$metadata$ = objectMeta('Companion');
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function _FinalizerHolder_3() {
    _FinalizerHolder_instance_3 = this;
    this.s2p_1 = org_jetbrains_skia_Data__1nGetFinalizer();
  }
  _FinalizerHolder_3.$metadata$ = objectMeta('_FinalizerHolder');
  var _FinalizerHolder_instance_3;
  function _FinalizerHolder_getInstance_3() {
    if (_FinalizerHolder_instance_3 == null)
      new _FinalizerHolder_3();
    return _FinalizerHolder_instance_3;
  }
  function Data(ptr) {
    Companion_getInstance_7();
    var tmp = _FinalizerHolder_getInstance_3().s2p_1;
    Managed_init_$Init$(ptr, tmp, false, 4, null, this);
    this.v2p_1 = null;
  }
  Data.prototype.equals = function (other) {
    var tmp0_elvis_lhs = other instanceof Data ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherData = tmp;
    return this.j2m(otherData);
  };
  Data.prototype.j2m = function (other) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = org_jetbrains_skia_Data__1nEquals(this.i2m_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  Data.$metadata$ = classMeta('Data', undefined, undefined, undefined, undefined, Managed.prototype);
  function Companion_7() {
    Companion_instance_7 = this;
    Companion_getInstance_46().c2m();
  }
  Companion_7.prototype.w2p = function () {
    Stats_getInstance().e2m();
    return new DirectContext(org_jetbrains_skia_DirectContext__1nMakeGL());
  };
  Companion_7.$metadata$ = objectMeta('Companion');
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function DirectContext(ptr) {
    Companion_getInstance_8();
    RefCnt_init_$Init$(ptr, this);
  }
  DirectContext.prototype.z2p = function () {
    Stats_getInstance().e2m();
    org_jetbrains_skia_DirectContext__1nFlush(this.i2m_1);
    return this;
  };
  DirectContext.$metadata$ = classMeta('DirectContext', undefined, undefined, undefined, undefined, RefCnt.prototype);
  function FilterMipmap(filterMode, mipmapMode) {
    this.a2q_1 = filterMode;
    this.b2q_1 = mipmapMode;
  }
  FilterMipmap.prototype.f2o = function () {
    return this.a2q_1.t5_1;
  };
  FilterMipmap.prototype.g2o = function () {
    return this.b2q_1.t5_1;
  };
  FilterMipmap.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FilterMipmap))
      return false;
    if (!this.a2q_1.equals(other.a2q_1))
      return false;
    return this.b2q_1.equals(other.b2q_1);
  };
  FilterMipmap.prototype.hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.a2q_1.hashCode() | 0;
    result = imul(result, PRIME) + this.b2q_1.hashCode() | 0;
    return result;
  };
  FilterMipmap.prototype.toString = function () {
    return 'FilterMipmap(_filterMode=' + this.a2q_1 + ', _mipmapMode=' + this.b2q_1 + ')';
  };
  FilterMipmap.$metadata$ = classMeta('FilterMipmap', [SamplingMode]);
  var FilterMode_NEAREST_instance;
  var FilterMode_LINEAR_instance;
  var FilterMode_entriesInitialized;
  function FilterMode_initEntries() {
    if (FilterMode_entriesInitialized)
      return Unit_getInstance();
    FilterMode_entriesInitialized = true;
    FilterMode_NEAREST_instance = new FilterMode('NEAREST', 0);
    FilterMode_LINEAR_instance = new FilterMode('LINEAR', 1);
  }
  function FilterMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  FilterMode.$metadata$ = classMeta('FilterMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function FilterMode_NEAREST_getInstance() {
    FilterMode_initEntries();
    return FilterMode_NEAREST_instance;
  }
  function FilterMode_LINEAR_getInstance() {
    FilterMode_initEntries();
    return FilterMode_LINEAR_instance;
  }
  function Companion_8() {
    Companion_instance_8 = this;
    Companion_getInstance_46().c2m();
  }
  Companion_8.$metadata$ = objectMeta('Companion');
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Font_init_$Init$(ptr, $this) {
    var tmp = _FinalizerHolder_getInstance_4().c2q_1;
    Managed_init_$Init$(ptr, tmp, false, 4, null, $this);
    Font.call($this);
    return $this;
  }
  function Font_init_$Init$_0(typeface, size, $this) {
    Font_init_$Init$(org_jetbrains_skia_Font__1nMakeTypefaceSize(getPtr(typeface), size), $this);
    Stats_getInstance().e2m();
    reachabilityBarrier(typeface);
    return $this;
  }
  function Font_init_$Create$(typeface, size) {
    return Font_init_$Init$_0(typeface, size, Object.create(Font.prototype));
  }
  function _FinalizerHolder_4() {
    _FinalizerHolder_instance_4 = this;
    this.c2q_1 = org_jetbrains_skia_Font__1nGetFinalizer();
  }
  _FinalizerHolder_4.$metadata$ = objectMeta('_FinalizerHolder');
  var _FinalizerHolder_instance_4;
  function _FinalizerHolder_getInstance_4() {
    if (_FinalizerHolder_instance_4 == null)
      new _FinalizerHolder_4();
    return _FinalizerHolder_instance_4;
  }
  function Font$_get_metrics_$lambda_bxy7iq(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_Font__1nGetMetrics(this$0.i2m_1, it);
      return Unit_getInstance();
    };
  }
  Font.prototype.j2m = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Font__1nEquals(this.i2m_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  Font.prototype.f2q = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      var tmp_0 = Companion_getInstance_11();
      tmp = fromInteropPointer(tmp_0, Font$_get_metrics_$lambda_bxy7iq(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Font() {
    Companion_getInstance_9();
  }
  Font.$metadata$ = classMeta('Font', undefined, undefined, undefined, undefined, Managed.prototype);
  function FontFeature$Companion$parseW3$lambda(it) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.trim' call
    tmp$ret$0 = toString(trim(isCharSequence(it) ? it : THROW_CCE()));
    var tmp = tmp$ret$0;
    var parts = split$default(tmp, [' '], false, 0, 6, null);
    var name = parts.g(0);
    var value = getOrNull(parts, 1);
    var tmp_0;
    switch (value) {
      case 'on':
      case null:
        tmp_0 = 1;
        break;
      case 'off':
        tmp_0 = 0;
        break;
      default:
        var tmp0_elvis_lhs = toIntOrNull(value);
        tmp_0 = tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs;
        break;
    }
    var value_0 = tmp_0;
    return name.length === 4 ? FontFeature_init_$Create$(name, value_0) : null;
  }
  function FontFeature_init_$Init$(feature, value, $this) {
    var tmp = Companion_getInstance_16().g2q(feature);
    Companion_getInstance_10();
    var tmp_0 = _UInt___init__impl__l7qpdl(0);
    Companion_getInstance_10();
    FontFeature.call($this, tmp, value, tmp_0, _UInt___init__impl__l7qpdl(-1));
    return $this;
  }
  function FontFeature_init_$Create$(feature, value) {
    return FontFeature_init_$Init$(feature, value, Object.create(FontFeature.prototype));
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.h2q_1 = _UInt___init__impl__l7qpdl(0);
    this.i2q_1 = _UInt___init__impl__l7qpdl(-1);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(0), null);
    tmp.j2q_1 = tmp$ret$0;
    this.k2q_1 = compilePattern('\\s+');
    this.l2q_1 = compilePattern('([-+])?([a-z0-9]{4})(?:\\[(\\d+)?:(\\d+)?\\])?(?:=(\\d+))?');
    this.m2q_1 = 1;
    this.n2q_1 = 2;
    this.o2q_1 = 3;
    this.p2q_1 = 4;
    this.q2q_1 = 5;
  }
  Companion_9.prototype.r2q = function (str) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp = splitToSequence$default(str, [','], false, 0, 6, null);
    var tmp0_toTypedArray = toList(mapNotNull(tmp, FontFeature$Companion$parseW3$lambda));
    tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    return tmp$ret$0;
  };
  Companion_9.$metadata$ = objectMeta('Companion');
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function FontFeature(_tag, value, start, end) {
    Companion_getInstance_10();
    this.s2q_1 = _tag;
    this.t2q_1 = value;
    this.u2q_1 = start;
    this.v2q_1 = end;
  }
  FontFeature.prototype.w2q = function () {
    return Companion_getInstance_16().x2q(this.s2q_1);
  };
  FontFeature.prototype.toString = function () {
    var range = '';
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.UInt.compareTo' call
    var tmp0_compareTo = this.u2q_1;
    tmp$ret$0 = uintCompare(_UInt___get_data__impl__f0vqqw(tmp0_compareTo), _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(0)));
    if (tmp$ret$0 > 0) {
      tmp = true;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.UInt.compareTo' call
      var tmp1_compareTo = this.v2q_1;
      Companion_getInstance();
      var tmp2_compareTo = _UInt___init__impl__l7qpdl(-1);
      tmp$ret$1 = uintCompare(_UInt___get_data__impl__f0vqqw(tmp1_compareTo), _UInt___get_data__impl__f0vqqw(tmp2_compareTo));
      tmp = tmp$ret$1 < 0;
    }
    if (tmp) {
      var tmp_0;
      var tmp$ret$2;
      // Inline function 'kotlin.UInt.compareTo' call
      var tmp3_compareTo = this.u2q_1;
      tmp$ret$2 = uintCompare(_UInt___get_data__impl__f0vqqw(tmp3_compareTo), _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(0)));
      if (tmp$ret$2 > 0) {
        tmp_0 = new UInt(this.u2q_1);
      } else {
        tmp_0 = '';
      }
      var tmp_1 = '[' + tmp_0 + ':';
      var tmp_2;
      var tmp$ret$3;
      // Inline function 'kotlin.UInt.compareTo' call
      var tmp4_compareTo = this.v2q_1;
      Companion_getInstance();
      var tmp5_compareTo = _UInt___init__impl__l7qpdl(-1);
      tmp$ret$3 = uintCompare(_UInt___get_data__impl__f0vqqw(tmp4_compareTo), _UInt___get_data__impl__f0vqqw(tmp5_compareTo));
      if (tmp$ret$3 < 0) {
        tmp_2 = new UInt(this.v2q_1);
      } else {
        tmp_2 = '';
      }
      range = tmp_1 + toString(tmp_2) + ']';
    }
    var valuePrefix = '';
    var valueSuffix = '';
    if (this.t2q_1 === 0)
      valuePrefix = '-';
    else if (this.t2q_1 === 1)
      valuePrefix = '+';
    else
      valueSuffix = '=' + this.t2q_1;
    return 'FontFeature(' + valuePrefix + this.s2q_1 + range + valueSuffix + ')';
  };
  FontFeature.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontFeature))
      return false;
    if (!(this.w2q() === other.w2q()))
      return false;
    if (!(this.t2q_1 === other.t2q_1))
      return false;
    if (!(this.u2q_1 === other.u2q_1))
      return false;
    return this.v2q_1 === other.v2q_1;
  };
  FontFeature.prototype.hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.s2q_1 | 0;
    result = imul(result, PRIME) + this.t2q_1 | 0;
    var tmp = imul(result, PRIME);
    var tmp$ret$2;
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$1;
    // Inline function 'kotlin.UInt.xor' call
    var tmp$ret$0;
    // Inline function 'kotlin.UInt.shr' call
    var tmp0_shr = this.u2q_1;
    tmp$ret$0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_shr) >>> 16 | 0);
    var tmp1_xor = tmp$ret$0;
    var tmp2_xor = this.u2q_1;
    tmp$ret$1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp1_xor) ^ _UInt___get_data__impl__f0vqqw(tmp2_xor));
    var tmp3_toInt = tmp$ret$1;
    tmp$ret$2 = _UInt___get_data__impl__f0vqqw(tmp3_toInt);
    result = tmp + tmp$ret$2 | 0;
    var tmp_0 = imul(result, PRIME);
    var tmp$ret$5;
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$4;
    // Inline function 'kotlin.UInt.xor' call
    var tmp$ret$3;
    // Inline function 'kotlin.UInt.shr' call
    var tmp4_shr = this.v2q_1;
    tmp$ret$3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp4_shr) >>> 16 | 0);
    var tmp5_xor = tmp$ret$3;
    var tmp6_xor = this.v2q_1;
    tmp$ret$4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp5_xor) ^ _UInt___get_data__impl__f0vqqw(tmp6_xor));
    var tmp7_toInt = tmp$ret$4;
    tmp$ret$5 = _UInt___get_data__impl__f0vqqw(tmp7_toInt);
    result = tmp_0 + tmp$ret$5 | 0;
    return result;
  };
  FontFeature.$metadata$ = classMeta('FontFeature');
  function Companion_10() {
    Companion_instance_10 = this;
  }
  Companion_10.$metadata$ = objectMeta('Companion');
  var Companion_instance_10;
  function Companion_getInstance_11() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function FontMetrics(top, ascent, descent, bottom, leading, avgCharWidth, maxCharWidth, xMin, xMax, xHeight, capHeight, underlineThickness, underlinePosition, strikeoutThickness, strikeoutPosition) {
    Companion_getInstance_11();
    this.y2q_1 = top;
    this.z2q_1 = ascent;
    this.a2r_1 = descent;
    this.b2r_1 = bottom;
    this.c2r_1 = leading;
    this.d2r_1 = avgCharWidth;
    this.e2r_1 = maxCharWidth;
    this.f2r_1 = xMin;
    this.g2r_1 = xMax;
    this.h2r_1 = xHeight;
    this.i2r_1 = capHeight;
    this.j2r_1 = underlineThickness;
    this.k2r_1 = underlinePosition;
    this.l2r_1 = strikeoutThickness;
    this.m2r_1 = strikeoutPosition;
  }
  FontMetrics.prototype.b2j = function () {
    return this.a2r_1 - this.z2q_1;
  };
  FontMetrics.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontMetrics))
      return false;
    if (!(compareTo(this.y2q_1, other.y2q_1) === 0))
      return false;
    if (!(compareTo(this.z2q_1, other.z2q_1) === 0))
      return false;
    if (!(compareTo(this.a2r_1, other.a2r_1) === 0))
      return false;
    if (!(compareTo(this.b2r_1, other.b2r_1) === 0))
      return false;
    if (!(compareTo(this.c2r_1, other.c2r_1) === 0))
      return false;
    if (!(compareTo(this.d2r_1, other.d2r_1) === 0))
      return false;
    if (!(compareTo(this.e2r_1, other.e2r_1) === 0))
      return false;
    if (!(compareTo(this.f2r_1, other.f2r_1) === 0))
      return false;
    if (!(compareTo(this.g2r_1, other.g2r_1) === 0))
      return false;
    if (!(compareTo(this.h2r_1, other.h2r_1) === 0))
      return false;
    if (!(compareTo(this.i2r_1, other.i2r_1) === 0))
      return false;
    if (this.j2r_1 == null ? !(other.j2r_1 == null) : !(this.j2r_1 == other.j2r_1))
      return false;
    if (this.k2r_1 == null ? !(other.k2r_1 == null) : !(this.k2r_1 == other.k2r_1))
      return false;
    if (this.l2r_1 == null ? !(other.l2r_1 == null) : !(this.l2r_1 == other.l2r_1))
      return false;
    return !(this.m2r_1 == null ? !(other.m2r_1 == null) : !(this.m2r_1 == other.m2r_1));
  };
  FontMetrics.prototype.hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.y2q_1) | 0;
    result = imul(result, PRIME) + toBits(this.z2q_1) | 0;
    result = imul(result, PRIME) + toBits(this.a2r_1) | 0;
    result = imul(result, PRIME) + toBits(this.b2r_1) | 0;
    result = imul(result, PRIME) + toBits(this.c2r_1) | 0;
    result = imul(result, PRIME) + toBits(this.d2r_1) | 0;
    result = imul(result, PRIME) + toBits(this.e2r_1) | 0;
    result = imul(result, PRIME) + toBits(this.f2r_1) | 0;
    result = imul(result, PRIME) + toBits(this.g2r_1) | 0;
    result = imul(result, PRIME) + toBits(this.h2r_1) | 0;
    result = imul(result, PRIME) + toBits(this.i2r_1) | 0;
    var tmp = imul(result, PRIME);
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.j2r_1;
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = tmp + tmp$ret$0 | 0;
    var tmp_0 = imul(result, PRIME);
    var tmp$ret$1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_hashCode = this.k2r_1;
    var tmp0_safe_receiver_0 = tmp1_hashCode;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    tmp$ret$1 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    result = tmp_0 + tmp$ret$1 | 0;
    var tmp_1 = imul(result, PRIME);
    var tmp$ret$2;
    // Inline function 'kotlin.hashCode' call
    var tmp2_hashCode = this.l2r_1;
    var tmp0_safe_receiver_1 = tmp2_hashCode;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    tmp$ret$2 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
    result = tmp_1 + tmp$ret$2 | 0;
    var tmp_2 = imul(result, PRIME);
    var tmp$ret$3;
    // Inline function 'kotlin.hashCode' call
    var tmp3_hashCode = this.m2r_1;
    var tmp0_safe_receiver_2 = tmp3_hashCode;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    tmp$ret$3 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
    result = tmp_2 + tmp$ret$3 | 0;
    return result;
  };
  FontMetrics.prototype.toString = function () {
    return 'FontMetrics(_top=' + this.y2q_1 + ', _ascent=' + this.z2q_1 + ', _descent=' + this.a2r_1 + ', _bottom=' + this.b2r_1 + ', _leading=' + this.c2r_1 + ', _avgCharWidth=' + this.d2r_1 + ', _maxCharWidth=' + this.e2r_1 + ', _xMin=' + this.f2r_1 + ', _xMax=' + this.g2r_1 + ', _xHeight=' + this.h2r_1 + ', _capHeight=' + this.i2r_1 + ', _underlineThickness=' + this.j2r_1 + ', _underlinePosition=' + this.k2r_1 + ', _strikeoutThickness=' + this.l2r_1 + ', _strikeoutPosition=' + this.m2r_1 + ')';
  };
  FontMetrics.$metadata$ = classMeta('FontMetrics');
  function fromInteropPointer(_this__u8e3s4, block) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var tmp1_withResult = new Float32Array(15);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp$ret$0;
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = tmp0__anonymous__q1qw7t.n2r(tmp1_withResult);
        block(tmp0__anonymous__q1qw7t, handle);
        tmp0__anonymous__q1qw7t.o2r(handle, tmp1_withResult);
        tmp$ret$0 = tmp1_withResult;
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
        }
      }
    }
    tmp$ret$2 = tmp$ret$1;
    return fromRawData(_this__u8e3s4, tmp$ret$2);
  }
  function fromRawData(_this__u8e3s4, rawData) {
    var tmp = rawData[0];
    var tmp_0 = rawData[1];
    var tmp_1 = rawData[2];
    var tmp_2 = rawData[3];
    var tmp_3 = rawData[4];
    var tmp_4 = rawData[5];
    var tmp_5 = rawData[6];
    var tmp_6 = rawData[7];
    var tmp_7 = rawData[8];
    var tmp_8 = rawData[9];
    var tmp_9 = rawData[10];
    var tmp$ret$0;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var tmp0_asNumberOrNull = rawData[11];
    tmp$ret$0 = isNaN_0(tmp0_asNumberOrNull) ? null : tmp0_asNumberOrNull;
    var tmp_10 = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var tmp1_asNumberOrNull = rawData[12];
    tmp$ret$1 = isNaN_0(tmp1_asNumberOrNull) ? null : tmp1_asNumberOrNull;
    var tmp_11 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var tmp2_asNumberOrNull = rawData[13];
    tmp$ret$2 = isNaN_0(tmp2_asNumberOrNull) ? null : tmp2_asNumberOrNull;
    var tmp_12 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var tmp3_asNumberOrNull = rawData[14];
    tmp$ret$3 = isNaN_0(tmp3_asNumberOrNull) ? null : tmp3_asNumberOrNull;
    return new FontMetrics(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp$ret$3);
  }
  function asNumberOrNull(_this__u8e3s4) {
    return isNaN_0(_this__u8e3s4) ? null : _this__u8e3s4;
  }
  function Companion_11() {
    Companion_instance_11 = this;
    Companion_getInstance_46().c2m();
    this.p2r_1 = FontMgr_init_$Create$(org_jetbrains_skia_FontMgr__1nDefault(), false);
  }
  Companion_11.$metadata$ = objectMeta('Companion');
  var Companion_instance_11;
  function Companion_getInstance_12() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function FontMgr_init_$Init$(ptr, $this) {
    RefCnt_init_$Init$(ptr, $this);
    FontMgr.call($this);
    return $this;
  }
  function FontMgr_init_$Init$_0(ptr, allowClose, $this) {
    RefCnt_init_$Init$_0(ptr, allowClose, $this);
    FontMgr.call($this);
    return $this;
  }
  function FontMgr_init_$Create$(ptr, allowClose) {
    return FontMgr_init_$Init$_0(ptr, allowClose, Object.create(FontMgr.prototype));
  }
  function FontMgr() {
    Companion_getInstance_12();
  }
  FontMgr.$metadata$ = classMeta('FontMgr', undefined, undefined, undefined, undefined, RefCnt.prototype);
  var FontSlant_UPRIGHT_instance;
  var FontSlant_ITALIC_instance;
  var FontSlant_OBLIQUE_instance;
  function values_1() {
    return [FontSlant_UPRIGHT_getInstance(), FontSlant_ITALIC_getInstance(), FontSlant_OBLIQUE_getInstance()];
  }
  var FontSlant_entriesInitialized;
  function FontSlant_initEntries() {
    if (FontSlant_entriesInitialized)
      return Unit_getInstance();
    FontSlant_entriesInitialized = true;
    FontSlant_UPRIGHT_instance = new FontSlant('UPRIGHT', 0);
    FontSlant_ITALIC_instance = new FontSlant('ITALIC', 1);
    FontSlant_OBLIQUE_instance = new FontSlant('OBLIQUE', 2);
  }
  function FontSlant(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  FontSlant.$metadata$ = classMeta('FontSlant', undefined, undefined, undefined, undefined, Enum.prototype);
  function FontSlant_UPRIGHT_getInstance() {
    FontSlant_initEntries();
    return FontSlant_UPRIGHT_instance;
  }
  function FontSlant_ITALIC_getInstance() {
    FontSlant_initEntries();
    return FontSlant_ITALIC_instance;
  }
  function FontSlant_OBLIQUE_getInstance() {
    FontSlant_initEntries();
    return FontSlant_OBLIQUE_instance;
  }
  function FontStyle_init_$Init$(weight, width, slant, $this) {
    FontStyle.call($this);
    $this.q2r_1 = weight & 65535 | (width & 255) << 16 | slant.t5_1 << 24;
    return $this;
  }
  function FontStyle_init_$Create$(weight, width, slant) {
    return FontStyle_init_$Init$(weight, width, slant, Object.create(FontStyle.prototype));
  }
  function FontStyle_init_$Init$_0(value, $this) {
    FontStyle.call($this);
    $this.q2r_1 = value;
    return $this;
  }
  function FontStyle_init_$Create$_0(value) {
    return FontStyle_init_$Init$_0(value, Object.create(FontStyle.prototype));
  }
  function Companion_12() {
    Companion_instance_12 = this;
    var tmp = this;
    Companion_getInstance_14();
    Companion_getInstance_15();
    tmp.r2r_1 = FontStyle_init_$Create$(400, 5, FontSlant_UPRIGHT_getInstance());
    var tmp_0 = this;
    Companion_getInstance_14();
    Companion_getInstance_15();
    tmp_0.s2r_1 = FontStyle_init_$Create$(700, 5, FontSlant_UPRIGHT_getInstance());
    var tmp_1 = this;
    Companion_getInstance_14();
    Companion_getInstance_15();
    tmp_1.t2r_1 = FontStyle_init_$Create$(400, 5, FontSlant_ITALIC_getInstance());
    var tmp_2 = this;
    Companion_getInstance_14();
    Companion_getInstance_15();
    tmp_2.u2r_1 = FontStyle_init_$Create$(700, 5, FontSlant_ITALIC_getInstance());
  }
  Companion_12.$metadata$ = objectMeta('Companion');
  var Companion_instance_12;
  function Companion_getInstance_13() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  FontStyle.prototype.v2r = function () {
    return this.q2r_1;
  };
  FontStyle.prototype.w2r = function () {
    return this.q2r_1 & 65535;
  };
  FontStyle.prototype.x2r = function (weight) {
    return FontStyle_init_$Create$(weight, this.a2j(), this.y2r());
  };
  FontStyle.prototype.a2j = function () {
    return this.q2r_1 >> 16 & 255;
  };
  FontStyle.prototype.y2r = function () {
    return values_1()[this.q2r_1 >> 24 & 255];
  };
  FontStyle.prototype.toString = function () {
    return 'FontStyle(weight=' + this.w2r() + ', width=' + this.a2j() + ', slant=' + this.y2r() + ')';
  };
  FontStyle.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontStyle))
      return false;
    return this.q2r_1 === other.q2r_1;
  };
  FontStyle.prototype.hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.q2r_1 | 0;
    return result;
  };
  function FontStyle() {
    Companion_getInstance_13();
  }
  FontStyle.$metadata$ = classMeta('FontStyle');
  function Companion_13() {
    Companion_instance_13 = this;
    this.z2r_1 = 0;
    this.a2s_1 = 100;
    this.b2s_1 = 200;
    this.c2s_1 = 300;
    this.d2s_1 = 400;
    this.e2s_1 = 500;
    this.f2s_1 = 600;
    this.g2s_1 = 700;
    this.h2s_1 = 800;
    this.i2s_1 = 900;
    this.j2s_1 = 1000;
  }
  Companion_13.$metadata$ = objectMeta('Companion');
  var Companion_instance_13;
  function Companion_getInstance_14() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function Companion_14() {
    Companion_instance_14 = this;
    this.k2s_1 = 1;
    this.l2s_1 = 2;
    this.m2s_1 = 3;
    this.n2s_1 = 4;
    this.o2s_1 = 5;
    this.p2s_1 = 6;
    this.q2s_1 = 7;
    this.r2s_1 = 8;
    this.s2s_1 = 9;
  }
  Companion_14.$metadata$ = objectMeta('Companion');
  var Companion_instance_14;
  function Companion_getInstance_15() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function Companion_15() {
    Companion_instance_15 = this;
  }
  Companion_15.prototype.g2q = function (name) {
    // Inline function 'kotlin.require' call
    var tmp0_require = name.length === 4;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'org.jetbrains.skia.Companion.fromString.<anonymous>' call
      tmp$ret$0 = "Name must be exactly 4 symbols, got: '" + name + "'";
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp$ret$1;
    // Inline function 'kotlin.code' call
    var tmp1__get_code__adl84j = charSequenceGet(name, 0);
    tmp$ret$1 = Char__toInt_impl_vasixd(tmp1__get_code__adl84j);
    var tmp = (tmp$ret$1 & 255) << 24;
    var tmp$ret$2;
    // Inline function 'kotlin.code' call
    var tmp2__get_code__cifwzm = charSequenceGet(name, 1);
    tmp$ret$2 = Char__toInt_impl_vasixd(tmp2__get_code__cifwzm);
    var tmp_0 = tmp | (tmp$ret$2 & 255) << 16;
    var tmp$ret$3;
    // Inline function 'kotlin.code' call
    var tmp3__get_code__enalup = charSequenceGet(name, 2);
    tmp$ret$3 = Char__toInt_impl_vasixd(tmp3__get_code__enalup);
    var tmp_1 = tmp_0 | (tmp$ret$3 & 255) << 8;
    var tmp$ret$4;
    // Inline function 'kotlin.code' call
    var tmp4__get_code__gs5aps = charSequenceGet(name, 3);
    tmp$ret$4 = Char__toInt_impl_vasixd(tmp4__get_code__gs5aps);
    return tmp_1 | tmp$ret$4 & 255;
  };
  Companion_15.prototype.x2q = function (tag) {
    var tmp$ret$0;
    // Inline function 'kotlin.charArrayOf' call
    var tmp0_charArrayOf = charArrayOf([numberToChar(tag >> 24 & 255), numberToChar(tag >> 16 & 255), numberToChar(tag >> 8 & 255), numberToChar(tag & 255)]);
    tmp$ret$0 = tmp0_charArrayOf;
    return concatToString(tmp$ret$0);
  };
  Companion_15.$metadata$ = objectMeta('Companion');
  var Companion_instance_15;
  function Companion_getInstance_16() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function IHasImageInfo() {
  }
  IHasImageInfo.$metadata$ = interfaceMeta('IHasImageInfo');
  function Companion_16() {
    Companion_instance_16 = this;
    Companion_getInstance_46().c2m();
  }
  Companion_16.prototype.t2s = function (bitmap) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      var ptr = org_jetbrains_skia_Image__1nMakeFromBitmap(getPtr(bitmap));
      if (ptr === Companion_getInstance_48().u2s())
        throw RuntimeException_init_$Create$('Failed to Image::makeFromBitmap ' + bitmap);
      tmp = new Image(ptr);
    }finally {
      reachabilityBarrier(bitmap);
    }
    return tmp;
  };
  Companion_16.$metadata$ = objectMeta('Companion');
  var Companion_instance_16;
  function Companion_getInstance_17() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function Image_nGetImageInfo$ref() {
    var l = function (p0, p1, p2) {
      org_jetbrains_skia_Image__1nGetImageInfo(p0, p1, p2);
      return Unit_getInstance();
    };
    l.callableName = 'Image_nGetImageInfo';
    return l;
  }
  function Image$_get_imageInfo_$lambda_c2a05w(this$0) {
    return function () {
      var tmp;
      if (this$0.x2s_1 == null) {
        var tmp_0 = this$0;
        var tmp_1 = Companion_getInstance_18();
        var tmp_2 = this$0.i2m_1;
        tmp_0.x2s_1 = tmp_1.q2m(tmp_2, Image_nGetImageInfo$ref());
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Image(ptr) {
    Companion_getInstance_17();
    RefCnt_init_$Init$(ptr, this);
    this.x2s_1 = null;
  }
  Image.prototype.o2m = function () {
    var tmp;
    try {
      if (this.x2s_1 == null) {
        commonSynchronized(this, Image$_get_imageInfo_$lambda_c2a05w(this));
      }
      tmp = ensureNotNull(this.x2s_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Image.$metadata$ = classMeta('Image', [IHasImageInfo], undefined, undefined, undefined, RefCnt.prototype);
  function ImageInfo_init_$Init$(width, height, colorType, alphaType, colorSpace, $this) {
    ImageInfo.call($this, new ColorInfo(colorType, alphaType, colorSpace), width, height);
    return $this;
  }
  function ImageInfo_init_$Init$_0(width, height, colorType, alphaType, colorSpace, $this) {
    ImageInfo_init_$Init$(width, height, values_0()[colorType], values()[alphaType], colorSpace === Companion_getInstance_48().u2s() ? null : ColorSpace_init_$Create$(colorSpace), $this);
    return $this;
  }
  function ImageInfo_init_$Create$(width, height, colorType, alphaType, colorSpace) {
    return ImageInfo_init_$Init$_0(width, height, colorType, alphaType, colorSpace, Object.create(ImageInfo.prototype));
  }
  function Companion_17() {
    Companion_instance_17 = this;
    this.p2m_1 = new ImageInfo(Companion_getInstance_4().d2p_1, 0, 0);
  }
  Companion_17.prototype.q2m = function (_ptr, _nGetImageInfo) {
    Stats_getInstance().e2m();
    var colorSpacePtr = null;
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp$ret$5;
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var tmp1_withResult = new Int32Array(4);
    var tmp$ret$4;
    $l$block_0: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp$ret$3;
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = tmp0__anonymous__q1qw7t.y2s(tmp1_withResult);
        // Inline function 'org.jetbrains.skia.Companion.createUsing.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'org.jetbrains.skia.impl.withResult' call
        var tmp1_withResult_0 = new NativePointerArray(1);
        var tmp$ret$1;
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0_0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0_0 + 1 | 0);
            var tmp$ret$0;
            // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
            var tmp0__anonymous__q1qw7t_0 = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
            var handle_0 = tmp0__anonymous__q1qw7t_0.z2s(tmp1_withResult_0);
            // Inline function 'org.jetbrains.skia.Companion.createUsing.<anonymous>.<anonymous>' call
            _nGetImageInfo(_ptr, handle, handle_0);
            tmp0__anonymous__q1qw7t_0.a2t(handle_0, tmp1_withResult_0);
            tmp$ret$0 = tmp1_withResult_0;
            tmp$ret$1 = tmp$ret$0;
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
              _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
            }
          }
        }
        tmp$ret$2 = tmp$ret$1;
        colorSpacePtr = tmp$ret$2.g(0);
        tmp0__anonymous__q1qw7t.c2t(handle, tmp1_withResult);
        tmp$ret$3 = tmp1_withResult;
        tmp$ret$4 = tmp$ret$3;
        break $l$block_0;
      }finally {
        var tmp1_0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1_0 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
        }
      }
    }
    tmp$ret$5 = tmp$ret$4;
    var tmp2_let = tmp$ret$5;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'org.jetbrains.skia.Companion.createUsing.<anonymous>' call
    tmp$ret$6 = ImageInfo_init_$Create$(tmp2_let[0], tmp2_let[1], tmp2_let[2], tmp2_let[3], ensureNotNull(colorSpacePtr));
    tmp$ret$7 = tmp$ret$6;
    return tmp$ret$7;
  };
  Companion_17.$metadata$ = objectMeta('Companion');
  var Companion_instance_17;
  function Companion_getInstance_18() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function ImageInfo(colorInfo, width, height) {
    Companion_getInstance_18();
    this.t2m_1 = colorInfo;
    this.u2m_1 = width;
    this.v2m_1 = height;
  }
  ImageInfo.prototype.a2n = function () {
    return imul(this.u2m_1, this.h2p());
  };
  ImageInfo.prototype.h2p = function () {
    return this.t2m_1.h2p();
  };
  ImageInfo.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof ImageInfo))
      return false;
    if (!(this.u2m_1 === other.u2m_1))
      return false;
    if (!(this.v2m_1 === other.v2m_1))
      return false;
    return this.t2m_1.equals(other.t2m_1);
  };
  ImageInfo.prototype.hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.u2m_1 | 0;
    result = imul(result, PRIME) + this.v2m_1 | 0;
    result = imul(result, PRIME) + this.t2m_1.hashCode() | 0;
    return result;
  };
  ImageInfo.prototype.toString = function () {
    return 'ImageInfo(_colorInfo=' + this.t2m_1 + ', _width=' + this.u2m_1 + ', _height=' + this.v2m_1 + ')';
  };
  ImageInfo.$metadata$ = classMeta('ImageInfo');
  function ManagedString_init_$Init$(ptr, managed, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      managed = true;
    ManagedString.call($this, ptr, managed);
    return $this;
  }
  function ManagedString_init_$Create$(ptr, managed, $mask0, $marker) {
    return ManagedString_init_$Init$(ptr, managed, $mask0, $marker, Object.create(ManagedString.prototype));
  }
  function Companion_18() {
    Companion_instance_18 = this;
    Companion_getInstance_46().c2m();
  }
  Companion_18.$metadata$ = objectMeta('Companion');
  var Companion_instance_18;
  function Companion_getInstance_19() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function ManagedString_init_$Init$_0(s, $this) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp$ret$0;
        // Inline function 'org.jetbrains.skia.ManagedString.<init>.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        tmp$ret$0 = org_jetbrains_skia_ManagedString__1nMake(tmp0__anonymous__q1qw7t.d2t(s));
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
        }
      }
    }
    var tmp = tmp$ret$1;
    ManagedString_init_$Init$(tmp, false, 2, null, $this);
    Stats_getInstance().e2m();
    return $this;
  }
  function ManagedString_init_$Create$_0(s) {
    return ManagedString_init_$Init$_0(s, Object.create(ManagedString.prototype));
  }
  function _FinalizerHolder_5() {
    _FinalizerHolder_instance_5 = this;
    this.e2t_1 = org_jetbrains_skia_ManagedString__1nGetFinalizer();
  }
  _FinalizerHolder_5.$metadata$ = objectMeta('_FinalizerHolder');
  var _FinalizerHolder_instance_5;
  function _FinalizerHolder_getInstance_5() {
    if (_FinalizerHolder_instance_5 == null)
      new _FinalizerHolder_5();
    return _FinalizerHolder_instance_5;
  }
  function ManagedString(ptr, managed) {
    Companion_getInstance_19();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_5().e2t_1, managed);
  }
  ManagedString.prototype.toString = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      var size = org_jetbrains_skia_ManagedString__nStringSize(this.i2m_1);
      var tmp$ret$2;
      // Inline function 'org.jetbrains.skia.impl.withResult' call
      var tmp1_withResult = new Int8Array(size);
      var tmp$ret$1;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp$ret$0;
          // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
          var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          var handle = tmp0__anonymous__q1qw7t.f2t(tmp1_withResult);
          // Inline function 'org.jetbrains.skia.ManagedString.toString.<anonymous>' call
          org_jetbrains_skia_ManagedString__nStringData(this.i2m_1, handle, size);
          tmp0__anonymous__q1qw7t.g2t(handle, tmp1_withResult);
          tmp$ret$0 = tmp1_withResult;
          tmp$ret$1 = tmp$ret$0;
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
          }
        }
      }
      tmp$ret$2 = tmp$ret$1;
      tmp = decodeToString(tmp$ret$2);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  ManagedString.prototype.j2t = function (s) {
    Stats_getInstance().e2m();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_ManagedString__1nAppend(this.i2m_1, tmp0__anonymous__q1qw7t.d2t(s));
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
        }
      }
    }
    return this;
  };
  ManagedString.$metadata$ = classMeta('ManagedString', undefined, undefined, undefined, undefined, Managed.prototype);
  function Companion_19() {
    Companion_instance_19 = this;
    this.n2o_1 = this.o2o(0.0, 0.0);
  }
  Companion_19.prototype.o2o = function (dx, dy) {
    return new Matrix33(new Float32Array([1.0, 0.0, dx, 0.0, 1.0, dy, 0.0, 0.0, 1.0]));
  };
  Companion_19.prototype.r2o = function (sx, sy) {
    return new Matrix33(new Float32Array([sx, 0.0, 0.0, 0.0, sy, 0.0, 0.0, 0.0, 1.0]));
  };
  Companion_19.$metadata$ = objectMeta('Companion');
  var Companion_instance_19;
  function Companion_getInstance_20() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function Matrix33(mat) {
    Companion_getInstance_20();
    // Inline function 'kotlin.require' call
    var tmp0_require = mat.length === 9;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'org.jetbrains.skia.Matrix33.<anonymous>' call
      tmp$ret$0 = 'Expected 9 elements, got ' + mat.length;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.i2o_1 = mat;
  }
  Matrix33.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Matrix33))
      return false;
    return contentEquals(this.i2o_1, other.i2o_1);
  };
  Matrix33.prototype.hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + contentHashCode(this.i2o_1) | 0;
    return result;
  };
  Matrix33.prototype.toString = function () {
    return 'Matrix33(_mat=' + this.i2o_1 + ')';
  };
  Matrix33.$metadata$ = classMeta('Matrix33');
  function Companion_20() {
    Companion_instance_20 = this;
    this.l2t_1 = new Matrix44(new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]));
  }
  Companion_20.$metadata$ = objectMeta('Companion');
  var Companion_instance_20;
  function Companion_getInstance_21() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function Matrix44(mat) {
    Companion_getInstance_21();
    // Inline function 'kotlin.require' call
    var tmp0_require = mat.length === 16;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'org.jetbrains.skia.Matrix44.<anonymous>' call
      tmp$ret$0 = 'Expected 16 elements, got ' + mat.length;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.t2o_1 = mat;
  }
  Matrix44.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Matrix44))
      return false;
    return contentEquals(this.t2o_1, other.t2o_1);
  };
  Matrix44.prototype.hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + contentHashCode(this.t2o_1) | 0;
    return result;
  };
  Matrix44.prototype.toString = function () {
    return 'Matrix44(_mat=' + this.t2o_1 + ')';
  };
  Matrix44.$metadata$ = classMeta('Matrix44');
  var MipmapMode_NONE_instance;
  var MipmapMode_NEAREST_instance;
  var MipmapMode_LINEAR_instance;
  var MipmapMode_entriesInitialized;
  function MipmapMode_initEntries() {
    if (MipmapMode_entriesInitialized)
      return Unit_getInstance();
    MipmapMode_entriesInitialized = true;
    MipmapMode_NONE_instance = new MipmapMode('NONE', 0);
    MipmapMode_NEAREST_instance = new MipmapMode('NEAREST', 1);
    MipmapMode_LINEAR_instance = new MipmapMode('LINEAR', 2);
  }
  function MipmapMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  MipmapMode.$metadata$ = classMeta('MipmapMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function MipmapMode_NONE_getInstance() {
    MipmapMode_initEntries();
    return MipmapMode_NONE_instance;
  }
  function MipmapMode_NEAREST_getInstance() {
    MipmapMode_initEntries();
    return MipmapMode_NEAREST_instance;
  }
  function Companion_21() {
    Companion_instance_21 = this;
    Companion_getInstance_46().c2m();
  }
  Companion_21.$metadata$ = objectMeta('Companion');
  var Companion_instance_21;
  function Companion_getInstance_22() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function _FinalizerHolder_6() {
    _FinalizerHolder_instance_6 = this;
    this.m2t_1 = org_jetbrains_skia_Paint__1nGetFinalizer();
  }
  _FinalizerHolder_6.$metadata$ = objectMeta('_FinalizerHolder');
  var _FinalizerHolder_instance_6;
  function _FinalizerHolder_getInstance_6() {
    if (_FinalizerHolder_instance_6 == null)
      new _FinalizerHolder_6();
    return _FinalizerHolder_instance_6;
  }
  function Paint_init_$Init$($this) {
    var tmp = org_jetbrains_skia_Paint__1nMake();
    var tmp_0 = _FinalizerHolder_getInstance_6().m2t_1;
    Managed_init_$Init$(tmp, tmp_0, false, 4, null, $this);
    Paint.call($this);
    Stats_getInstance().e2m();
    return $this;
  }
  function Paint_init_$Create$() {
    return Paint_init_$Init$(Object.create(Paint.prototype));
  }
  Paint.prototype.j2m = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Paint__1nEquals(this.i2m_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  Paint.prototype.p2t = function (value) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_Paint__1nSetMode(this.i2m_1, value.t5_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Paint.prototype.q2t = function (value) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_Paint__1nSetColor(this.i2m_1, value);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Paint.prototype.r2t = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = org_jetbrains_skia_Paint__1nGetColor(this.i2m_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Paint.prototype.s2t = function (value) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_Paint__1nSetStrokeWidth(this.i2m_1, value);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Paint.prototype.t2t = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = org_jetbrains_skia_Paint__1nGetStrokeWidth(this.i2m_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Paint.prototype.u2t = function (value) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_Paint__1nSetStrokeMiter(this.i2m_1, value);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Paint.prototype.v2t = function (value) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_Paint__1nSetStrokeCap(this.i2m_1, value.t5_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Paint.prototype.w2t = function (value) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_Paint__1nSetStrokeJoin(this.i2m_1, value.t5_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Paint.prototype.x2t = function (value) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_Paint__1nSetShader(this.i2m_1, getPtr(value));
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(value);
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Paint.prototype.y2t = function (value) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_Paint__1nSetColorFilter(this.i2m_1, getPtr(value));
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  Paint.prototype.z2t = function (value) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_Paint__1nSetBlendMode(this.i2m_1, value.t5_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Paint.prototype.a2u = function (value) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_Paint__1nSetPathEffect(this.i2m_1, getPtr(value));
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  Paint.prototype.b2u = function (value) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_Paint__1nSetImageFilter(this.i2m_1, getPtr(value));
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  function Paint() {
    Companion_getInstance_22();
  }
  Paint.$metadata$ = classMeta('Paint', undefined, undefined, undefined, undefined, Managed.prototype);
  var PaintMode_FILL_instance;
  var PaintMode_STROKE_instance;
  var PaintMode_STROKE_AND_FILL_instance;
  var PaintMode_entriesInitialized;
  function PaintMode_initEntries() {
    if (PaintMode_entriesInitialized)
      return Unit_getInstance();
    PaintMode_entriesInitialized = true;
    PaintMode_FILL_instance = new PaintMode('FILL', 0);
    PaintMode_STROKE_instance = new PaintMode('STROKE', 1);
    PaintMode_STROKE_AND_FILL_instance = new PaintMode('STROKE_AND_FILL', 2);
  }
  function PaintMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  PaintMode.$metadata$ = classMeta('PaintMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function PaintMode_FILL_getInstance() {
    PaintMode_initEntries();
    return PaintMode_FILL_instance;
  }
  function PaintMode_STROKE_getInstance() {
    PaintMode_initEntries();
    return PaintMode_STROKE_instance;
  }
  var PaintStrokeCap_BUTT_instance;
  var PaintStrokeCap_ROUND_instance;
  var PaintStrokeCap_SQUARE_instance;
  var PaintStrokeCap_entriesInitialized;
  function PaintStrokeCap_initEntries() {
    if (PaintStrokeCap_entriesInitialized)
      return Unit_getInstance();
    PaintStrokeCap_entriesInitialized = true;
    PaintStrokeCap_BUTT_instance = new PaintStrokeCap('BUTT', 0);
    PaintStrokeCap_ROUND_instance = new PaintStrokeCap('ROUND', 1);
    PaintStrokeCap_SQUARE_instance = new PaintStrokeCap('SQUARE', 2);
  }
  function PaintStrokeCap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  PaintStrokeCap.$metadata$ = classMeta('PaintStrokeCap', undefined, undefined, undefined, undefined, Enum.prototype);
  function PaintStrokeCap_BUTT_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_BUTT_instance;
  }
  function PaintStrokeCap_ROUND_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_ROUND_instance;
  }
  function PaintStrokeCap_SQUARE_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_SQUARE_instance;
  }
  var PaintStrokeJoin_MITER_instance;
  var PaintStrokeJoin_ROUND_instance;
  var PaintStrokeJoin_BEVEL_instance;
  var PaintStrokeJoin_entriesInitialized;
  function PaintStrokeJoin_initEntries() {
    if (PaintStrokeJoin_entriesInitialized)
      return Unit_getInstance();
    PaintStrokeJoin_entriesInitialized = true;
    PaintStrokeJoin_MITER_instance = new PaintStrokeJoin('MITER', 0);
    PaintStrokeJoin_ROUND_instance = new PaintStrokeJoin('ROUND', 1);
    PaintStrokeJoin_BEVEL_instance = new PaintStrokeJoin('BEVEL', 2);
  }
  function PaintStrokeJoin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  PaintStrokeJoin.$metadata$ = classMeta('PaintStrokeJoin', undefined, undefined, undefined, undefined, Enum.prototype);
  function PaintStrokeJoin_MITER_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_MITER_instance;
  }
  function PaintStrokeJoin_ROUND_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_ROUND_instance;
  }
  function PaintStrokeJoin_BEVEL_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_BEVEL_instance;
  }
  function Companion_22() {
    Companion_instance_22 = this;
    Companion_getInstance_46().c2m();
  }
  Companion_22.prototype.c2u = function (one, two, op) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      var ptr = org_jetbrains_skia_Path__1nMakeCombining(getPtr(one), getPtr(two), op.t5_1);
      tmp = ptr === Companion_getInstance_48().u2s() ? null : new Path(ptr);
    }finally {
      reachabilityBarrier(one);
      reachabilityBarrier(two);
    }
    return tmp;
  };
  Companion_22.$metadata$ = objectMeta('Companion');
  var Companion_instance_22;
  function Companion_getInstance_23() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function _FinalizerHolder_7() {
    _FinalizerHolder_instance_7 = this;
    this.d2u_1 = org_jetbrains_skia_Path__1nGetFinalizer();
  }
  _FinalizerHolder_7.$metadata$ = objectMeta('_FinalizerHolder');
  var _FinalizerHolder_instance_7;
  function _FinalizerHolder_getInstance_7() {
    if (_FinalizerHolder_instance_7 == null)
      new _FinalizerHolder_7();
    return _FinalizerHolder_instance_7;
  }
  function Path_init_$Init$($this) {
    Path.call($this, org_jetbrains_skia_Path__1nMake());
    Stats_getInstance().e2m();
    return $this;
  }
  function Path_init_$Create$() {
    return Path_init_$Init$(Object.create(Path.prototype));
  }
  function Path$_get_bounds_$lambda_qr8ora(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_Path__1nGetBounds(this$0.i2m_1, it);
      return Unit_getInstance();
    };
  }
  function Path(ptr) {
    Companion_getInstance_23();
    var tmp = _FinalizerHolder_getInstance_7().d2u_1;
    Managed_init_$Init$(ptr, tmp, false, 4, null, this);
  }
  Path.prototype.j2m = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Path__1nEquals(this.i2m_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  Path.prototype.g2u = function (value) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_Path__1nSetFillMode(this.i2m_1, value.t5_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Path.prototype.h2u = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = values_2()[org_jetbrains_skia_Path__1nGetFillMode(this.i2m_1)];
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Path.prototype.i2u = function () {
    Stats_getInstance().e2m();
    org_jetbrains_skia_Path__1nReset(this.i2m_1);
    return this;
  };
  Path.prototype.po = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = org_jetbrains_skia_Path__1nIsEmpty(this.i2m_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Path.prototype.j2u = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      var tmp_0 = Companion_getInstance_30();
      tmp = tmp_0.k2u(Path$_get_bounds_$lambda_qr8ora(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Path.prototype.l2u = function (x, y) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_Path__1nMoveTo(this.i2m_1, x, y);
    return this;
  };
  Path.prototype.m2u = function (dx, dy) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_Path__1nRMoveTo(this.i2m_1, dx, dy);
    return this;
  };
  Path.prototype.n2u = function (x, y) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_Path__1nLineTo(this.i2m_1, x, y);
    return this;
  };
  Path.prototype.o2u = function (dx, dy) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_Path__1nRLineTo(this.i2m_1, dx, dy);
    return this;
  };
  Path.prototype.p2u = function (x1, y1, x2, y2) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_Path__1nQuadTo(this.i2m_1, x1, y1, x2, y2);
    return this;
  };
  Path.prototype.q2u = function (dx1, dy1, dx2, dy2) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_Path__1nRQuadTo(this.i2m_1, dx1, dy1, dx2, dy2);
    return this;
  };
  Path.prototype.r2u = function (x1, y1, x2, y2, x3, y3) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_Path__1nCubicTo(this.i2m_1, x1, y1, x2, y2, x3, y3);
    return this;
  };
  Path.prototype.s2u = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_Path__1nRCubicTo(this.i2m_1, dx1, dy1, dx2, dy2, dx3, dy3);
    return this;
  };
  Path.prototype.t2u = function () {
    Stats_getInstance().e2m();
    org_jetbrains_skia_Path__1nClosePath(this.i2m_1);
    return this;
  };
  Path.prototype.u2u = function (rect, dir, start) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_Path__1nAddRect(this.i2m_1, rect.p2n_1, rect.q2n_1, rect.r2n_1, rect.s2n_1, dir.t5_1, start);
    return this;
  };
  Path.prototype.v2u = function (rect, dir, start, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      dir = PathDirection_CLOCKWISE_getInstance();
    if (!(($mask0 & 4) === 0))
      start = 0;
    return this.u2u(rect, dir, start);
  };
  Path.prototype.w2u = function (rrect, dir, start) {
    Stats_getInstance().e2m();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_Path__1nAddRRect(this.i2m_1, rrect.p2n_1, rrect.q2n_1, rrect.r2n_1, rrect.s2n_1, tmp0__anonymous__q1qw7t.c2o(rrect.z2n_1), rrect.z2n_1.length, dir.t5_1, start);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
        }
      }
    }
    return this;
  };
  Path.prototype.x2u = function (rrect, dir, start, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      dir = PathDirection_CLOCKWISE_getInstance();
    if (!(($mask0 & 4) === 0))
      start = 6;
    return this.w2u(rrect, dir, start);
  };
  Path.prototype.y2u = function (src, dx, dy, extend) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_Path__1nAddPathOffset(this.i2m_1, getPtr(src), dx, dy, extend);
      tmp = this;
    }finally {
      reachabilityBarrier(src);
    }
    return tmp;
  };
  Path.prototype.z2u = function (src, dx, dy, extend, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      extend = false;
    return this.y2u(src, dx, dy, extend);
  };
  Path.prototype.a2v = function (matrix, dst, applyPerspectiveClip) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      var tmp$ret$0;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_Path__1nTransform(this.i2m_1, tmp0__anonymous__q1qw7t.c2o(matrix.i2o_1), getPtr(dst), applyPerspectiveClip);
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(dst);
    }
    return tmp;
  };
  Path.prototype.b2v = function (matrix, dst, applyPerspectiveClip, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      dst = null;
    if (!(($mask0 & 4) === 0))
      applyPerspectiveClip = true;
    return this.a2v(matrix, dst, applyPerspectiveClip);
  };
  Path.prototype.c = function () {
    return this.c2v(false);
  };
  Path.prototype.c2v = function (forceClose) {
    return Companion_getInstance_25().d2v(this, forceClose);
  };
  Path.$metadata$ = classMeta('Path', [Iterable], undefined, undefined, undefined, Managed.prototype);
  var PathDirection_CLOCKWISE_instance;
  var PathDirection_COUNTER_CLOCKWISE_instance;
  var PathDirection_entriesInitialized;
  function PathDirection_initEntries() {
    if (PathDirection_entriesInitialized)
      return Unit_getInstance();
    PathDirection_entriesInitialized = true;
    PathDirection_CLOCKWISE_instance = new PathDirection('CLOCKWISE', 0);
    PathDirection_COUNTER_CLOCKWISE_instance = new PathDirection('COUNTER_CLOCKWISE', 1);
  }
  function PathDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  PathDirection.$metadata$ = classMeta('PathDirection', undefined, undefined, undefined, undefined, Enum.prototype);
  function PathDirection_CLOCKWISE_getInstance() {
    PathDirection_initEntries();
    return PathDirection_CLOCKWISE_instance;
  }
  function PathDirection_COUNTER_CLOCKWISE_getInstance() {
    PathDirection_initEntries();
    return PathDirection_COUNTER_CLOCKWISE_instance;
  }
  var PathFillMode_WINDING_instance;
  var PathFillMode_EVEN_ODD_instance;
  var PathFillMode_INVERSE_WINDING_instance;
  var PathFillMode_INVERSE_EVEN_ODD_instance;
  function values_2() {
    return [PathFillMode_WINDING_getInstance(), PathFillMode_EVEN_ODD_getInstance(), PathFillMode_INVERSE_WINDING_getInstance(), PathFillMode_INVERSE_EVEN_ODD_getInstance()];
  }
  var PathFillMode_entriesInitialized;
  function PathFillMode_initEntries() {
    if (PathFillMode_entriesInitialized)
      return Unit_getInstance();
    PathFillMode_entriesInitialized = true;
    PathFillMode_WINDING_instance = new PathFillMode('WINDING', 0);
    PathFillMode_EVEN_ODD_instance = new PathFillMode('EVEN_ODD', 1);
    PathFillMode_INVERSE_WINDING_instance = new PathFillMode('INVERSE_WINDING', 2);
    PathFillMode_INVERSE_EVEN_ODD_instance = new PathFillMode('INVERSE_EVEN_ODD', 3);
  }
  function PathFillMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  PathFillMode.$metadata$ = classMeta('PathFillMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function PathFillMode_WINDING_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_WINDING_instance;
  }
  function PathFillMode_EVEN_ODD_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_EVEN_ODD_instance;
  }
  function PathFillMode_INVERSE_WINDING_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_INVERSE_WINDING_instance;
  }
  function PathFillMode_INVERSE_EVEN_ODD_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_INVERSE_EVEN_ODD_instance;
  }
  function Companion_23() {
    Companion_instance_23 = this;
    Companion_getInstance_46().c2m();
  }
  Companion_23.$metadata$ = objectMeta('Companion');
  var Companion_instance_23;
  function Companion_getInstance_24() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function PathMeasure_init_$Init$($this) {
    PathMeasure.call($this, org_jetbrains_skia_PathMeasure__1nMake());
    Stats_getInstance().e2m();
    return $this;
  }
  function PathMeasure_init_$Create$() {
    return PathMeasure_init_$Init$(Object.create(PathMeasure.prototype));
  }
  function _FinalizerHolder_8() {
    _FinalizerHolder_instance_8 = this;
    this.e2v_1 = org_jetbrains_skia_PathMeasure__1nGetFinalizer();
  }
  _FinalizerHolder_8.$metadata$ = objectMeta('_FinalizerHolder');
  var _FinalizerHolder_instance_8;
  function _FinalizerHolder_getInstance_8() {
    if (_FinalizerHolder_instance_8 == null)
      new _FinalizerHolder_8();
    return _FinalizerHolder_instance_8;
  }
  function PathMeasure(ptr) {
    Companion_getInstance_24();
    var tmp = _FinalizerHolder_getInstance_8().e2v_1;
    Managed_init_$Init$(ptr, tmp, false, 4, null, this);
  }
  PathMeasure.prototype.h2v = function (path, forceClosed) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_PathMeasure__1nSetPath(this.i2m_1, getPtr(path), forceClosed);
      tmp = this;
    }finally {
      reachabilityBarrier(path);
    }
    return tmp;
  };
  PathMeasure.prototype.f8 = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = org_jetbrains_skia_PathMeasure__1nGetLength(this.i2m_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  PathMeasure.prototype.i2v = function (startD, endD, dst, startWithMoveTo) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = org_jetbrains_skia_PathMeasure__1nGetSegment(this.i2m_1, startD, endD, getPtr(dst), startWithMoveTo);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(dst);
    }
    return tmp;
  };
  PathMeasure.$metadata$ = classMeta('PathMeasure', undefined, undefined, undefined, undefined, Managed.prototype);
  var PathOp_DIFFERENCE_instance;
  var PathOp_INTERSECT_instance;
  var PathOp_UNION_instance;
  var PathOp_XOR_instance;
  var PathOp_REVERSE_DIFFERENCE_instance;
  var PathOp_entriesInitialized;
  function PathOp_initEntries() {
    if (PathOp_entriesInitialized)
      return Unit_getInstance();
    PathOp_entriesInitialized = true;
    PathOp_DIFFERENCE_instance = new PathOp('DIFFERENCE', 0);
    PathOp_INTERSECT_instance = new PathOp('INTERSECT', 1);
    PathOp_UNION_instance = new PathOp('UNION', 2);
    PathOp_XOR_instance = new PathOp('XOR', 3);
    PathOp_REVERSE_DIFFERENCE_instance = new PathOp('REVERSE_DIFFERENCE', 4);
  }
  function PathOp(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  PathOp.$metadata$ = classMeta('PathOp', undefined, undefined, undefined, undefined, Enum.prototype);
  function PathOp_DIFFERENCE_getInstance() {
    PathOp_initEntries();
    return PathOp_DIFFERENCE_instance;
  }
  function PathOp_INTERSECT_getInstance() {
    PathOp_initEntries();
    return PathOp_INTERSECT_instance;
  }
  function PathOp_UNION_getInstance() {
    PathOp_initEntries();
    return PathOp_UNION_instance;
  }
  function PathOp_XOR_getInstance() {
    PathOp_initEntries();
    return PathOp_XOR_instance;
  }
  function PathOp_REVERSE_DIFFERENCE_getInstance() {
    PathOp_initEntries();
    return PathOp_REVERSE_DIFFERENCE_instance;
  }
  function PathSegment_init_$Init$(verb, p0, p1, p2, p3, conicWeight, isCloseLine, isClosedContour, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      verb = PathVerb_DONE_getInstance();
    if (!(($mask0 & 2) === 0))
      p0 = null;
    if (!(($mask0 & 4) === 0))
      p1 = null;
    if (!(($mask0 & 8) === 0))
      p2 = null;
    if (!(($mask0 & 16) === 0))
      p3 = null;
    if (!(($mask0 & 32) === 0))
      conicWeight = 0.0;
    if (!(($mask0 & 64) === 0))
      isCloseLine = false;
    if (!(($mask0 & 128) === 0))
      isClosedContour = false;
    PathSegment.call($this, verb, p0, p1, p2, p3, conicWeight, isCloseLine, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$(verb, p0, p1, p2, p3, conicWeight, isCloseLine, isClosedContour, $mask0, $marker) {
    return PathSegment_init_$Init$(verb, p0, p1, p2, p3, conicWeight, isCloseLine, isClosedContour, $mask0, $marker, Object.create(PathSegment.prototype));
  }
  function PathSegment_init_$Init$_0(verbOrdinal, x0, y0, isClosedContour, $this) {
    PathSegment.call($this, values_3()[verbOrdinal], new Point(x0, y0), null, null, null, 0.0, false, isClosedContour);
    // Inline function 'kotlin.require' call
    var tmp0_require = verbOrdinal === PathVerb_MOVE_getInstance().t5_1 ? true : verbOrdinal === PathVerb_CLOSE_getInstance().t5_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'org.jetbrains.skia.PathSegment.<init>.<anonymous>' call
      tmp$ret$0 = 'Expected MOVE or CLOSE, got ' + values_3()[verbOrdinal];
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return $this;
  }
  function PathSegment_init_$Create$_0(verbOrdinal, x0, y0, isClosedContour) {
    return PathSegment_init_$Init$_0(verbOrdinal, x0, y0, isClosedContour, Object.create(PathSegment.prototype));
  }
  function PathSegment_init_$Init$_1(x0, y0, x1, y1, isCloseLine, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_LINE_getInstance(), new Point(x0, y0), new Point(x1, y1), null, null, 0.0, isCloseLine, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_1(x0, y0, x1, y1, isCloseLine, isClosedContour) {
    return PathSegment_init_$Init$_1(x0, y0, x1, y1, isCloseLine, isClosedContour, Object.create(PathSegment.prototype));
  }
  function PathSegment_init_$Init$_2(x0, y0, x1, y1, x2, y2, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_QUAD_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), null, 0.0, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_2(x0, y0, x1, y1, x2, y2, isClosedContour) {
    return PathSegment_init_$Init$_2(x0, y0, x1, y1, x2, y2, isClosedContour, Object.create(PathSegment.prototype));
  }
  function PathSegment_init_$Init$_3(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_CONIC_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), null, conicWeight, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_3(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour) {
    return PathSegment_init_$Init$_3(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour, Object.create(PathSegment.prototype));
  }
  function PathSegment_init_$Init$_4(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_CUBIC_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), new Point(x3, y3), 0.0, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_4(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour) {
    return PathSegment_init_$Init$_4(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour, Object.create(PathSegment.prototype));
  }
  function PathSegment(verb, p0, p1, p2, p3, conicWeight, isCloseLine, isClosedContour) {
    this.j2v_1 = verb;
    this.k2v_1 = p0;
    this.l2v_1 = p1;
    this.m2v_1 = p2;
    this.n2v_1 = p3;
    this.o2v_1 = conicWeight;
    this.p2v_1 = isCloseLine;
    this.q2v_1 = isClosedContour;
  }
  PathSegment.prototype.toString = function () {
    return 'Segment(verb=' + this.j2v_1 + (!this.j2v_1.equals(PathVerb_DONE_getInstance()) ? ', p0=' + this.k2v_1 : '') + ((((this.j2v_1.equals(PathVerb_LINE_getInstance()) ? true : this.j2v_1.equals(PathVerb_QUAD_getInstance())) ? true : this.j2v_1.equals(PathVerb_CONIC_getInstance())) ? true : this.j2v_1.equals(PathVerb_CUBIC_getInstance())) ? ', p1=' + this.l2v_1 : '') + (((this.j2v_1.equals(PathVerb_QUAD_getInstance()) ? true : this.j2v_1.equals(PathVerb_CONIC_getInstance())) ? true : this.j2v_1.equals(PathVerb_CUBIC_getInstance())) ? ', p2=' + this.m2v_1 : '') + (this.j2v_1.equals(PathVerb_CUBIC_getInstance()) ? ', p3=' + this.n2v_1 : '') + (this.j2v_1.equals(PathVerb_CONIC_getInstance()) ? ', conicWeight=' + this.o2v_1 : '') + (this.j2v_1.equals(PathVerb_LINE_getInstance()) ? ', closeLine=' + this.p2v_1 : '') + (!this.j2v_1.equals(PathVerb_DONE_getInstance()) ? ', closedContour=' + this.q2v_1 : '') + ')';
  };
  PathSegment.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PathSegment))
      return false;
    return ((((((this.j2v_1.equals(other.j2v_1) ? !this.j2v_1.equals(PathVerb_DONE_getInstance()) ? equals(this.k2v_1, other.k2v_1) : true : false) ? (((this.j2v_1.equals(PathVerb_LINE_getInstance()) ? true : this.j2v_1.equals(PathVerb_QUAD_getInstance())) ? true : this.j2v_1.equals(PathVerb_CONIC_getInstance())) ? true : this.j2v_1.equals(PathVerb_CUBIC_getInstance())) ? equals(this.l2v_1, other.l2v_1) : true : false) ? ((this.j2v_1.equals(PathVerb_QUAD_getInstance()) ? true : this.j2v_1.equals(PathVerb_CONIC_getInstance())) ? true : this.j2v_1.equals(PathVerb_CUBIC_getInstance())) ? equals(this.m2v_1, other.m2v_1) : true : false) ? this.j2v_1.equals(PathVerb_CUBIC_getInstance()) ? equals(this.n2v_1, other.n2v_1) : true : false) ? this.j2v_1.equals(PathVerb_CONIC_getInstance()) ? compareTo(other.o2v_1, this.o2v_1) === 0 : true : false) ? this.j2v_1.equals(PathVerb_LINE_getInstance()) ? this.p2v_1 === other.p2v_1 : true : false) ? !this.j2v_1.equals(PathVerb_DONE_getInstance()) ? this.q2v_1 === other.q2v_1 : true : false;
  };
  PathSegment.prototype.hashCode = function () {
    var tmp0_subject = this.j2v_1;
    var tmp0 = tmp0_subject.t5_1;
    var tmp;
    switch (tmp0) {
      case 6:
        tmp = objectHashes([this.j2v_1]);
        break;
      case 0:
        tmp = objectHashes([this.j2v_1, this.k2v_1, this.q2v_1]);
        break;
      case 1:
        tmp = objectHashes([this.j2v_1, this.k2v_1, this.l2v_1, this.p2v_1, this.q2v_1]);
        break;
      case 2:
        tmp = objectHashes([this.j2v_1, this.k2v_1, this.l2v_1, this.m2v_1, this.q2v_1]);
        break;
      case 3:
        tmp = objectHashes([this.j2v_1, this.k2v_1, this.l2v_1, this.m2v_1, this.o2v_1, this.q2v_1]);
        break;
      case 4:
        tmp = objectHashes([this.j2v_1, this.k2v_1, this.l2v_1, this.m2v_1, this.n2v_1, this.q2v_1]);
        break;
      default:
        throw RuntimeException_init_$Create$('Unreachable');
    }
    return tmp;
  };
  PathSegment.$metadata$ = classMeta('PathSegment');
  function objectHashes(args) {
    return contentHashCode_0(args);
  }
  function Companion_24() {
    Companion_instance_24 = this;
    Companion_getInstance_46().c2m();
  }
  Companion_24.prototype.d2v = function (path, forceClose) {
    var tmp;
    try {
      var i = new PathSegmentIterator(path, org_jetbrains_skia_PathSegmentIterator__1nMake(getPtr(path), forceClose));
      i.u2v_1 = nextSegment(i);
      tmp = i;
    }finally {
      reachabilityBarrier(path);
    }
    return tmp;
  };
  Companion_24.$metadata$ = objectMeta('Companion');
  var Companion_instance_24;
  function Companion_getInstance_25() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function nextSegment($this) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var tmp1_withResult = new Int32Array(10);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp$ret$0;
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = tmp0__anonymous__q1qw7t.y2s(tmp1_withResult);
        // Inline function 'org.jetbrains.skia.PathSegmentIterator.nextSegment.<anonymous>' call
        org_jetbrains_skia_PathSegmentIterator__1nNext($this.i2m_1, handle);
        tmp0__anonymous__q1qw7t.c2t(handle, tmp1_withResult);
        tmp$ret$0 = tmp1_withResult;
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
        }
      }
    }
    tmp$ret$2 = tmp$ret$1;
    return pathSegmentFromIntArray(tmp$ret$2);
  }
  function PathSegmentIterator(_path, ptr) {
    Companion_getInstance_25();
    var tmp = org_jetbrains_skia_PathSegmentIterator__1nGetFinalizer();
    Managed_init_$Init$(ptr, tmp, false, 4, null, this);
    this.t2v_1 = _path;
    this.u2v_1 = null;
    Stats_getInstance().e2m();
  }
  PathSegmentIterator.prototype.e = function () {
    var tmp;
    try {
      var tmp0_safe_receiver = this.u2v_1;
      if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2v_1, PathVerb_DONE_getInstance()))
        throw NoSuchElementException_init_$Create$();
      var res = this.u2v_1;
      this.u2v_1 = nextSegment(this);
      tmp = res;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  PathSegmentIterator.prototype.d = function () {
    var tmp0_safe_receiver = this.u2v_1;
    return !equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2v_1, PathVerb_DONE_getInstance());
  };
  PathSegmentIterator.prototype.d4 = function () {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError('An operation is not implemented: Not yet implemented');
  };
  PathSegmentIterator.$metadata$ = classMeta('PathSegmentIterator', [MutableIterator], undefined, undefined, undefined, Managed.prototype);
  function pathSegmentFromIntArray(points) {
    var context = last(points);
    var verb = context & 7;
    var isClosedBit = context >> 7 & 1;
    var isClosedLineBit = context >> 6 & 1;
    var isClosed = !(isClosedBit === 0);
    var tmp0_subject = values_3()[verb];
    var tmp0 = tmp0_subject.t5_1;
    var tmp;
    switch (tmp0) {
      case 0:
      case 5:
        var tmp$ret$0;
        // Inline function 'kotlin.fromBits' call
        var tmp0_fromBits = FloatCompanionObject_getInstance();
        var tmp1_fromBits = points[0];
        tmp$ret$0 = floatFromBits(tmp1_fromBits);

        var tmp_0 = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'kotlin.fromBits' call
        var tmp2_fromBits = FloatCompanionObject_getInstance();
        var tmp3_fromBits = points[1];
        tmp$ret$1 = floatFromBits(tmp3_fromBits);

        tmp = PathSegment_init_$Create$_0(verb, tmp_0, tmp$ret$1, isClosed);
        break;
      case 1:
        var tmp$ret$2;
        // Inline function 'kotlin.fromBits' call
        var tmp4_fromBits = FloatCompanionObject_getInstance();
        var tmp5_fromBits = points[0];
        tmp$ret$2 = floatFromBits(tmp5_fromBits);

        var tmp_1 = tmp$ret$2;
        var tmp$ret$3;
        // Inline function 'kotlin.fromBits' call
        var tmp6_fromBits = FloatCompanionObject_getInstance();
        var tmp7_fromBits = points[1];
        tmp$ret$3 = floatFromBits(tmp7_fromBits);

        var tmp_2 = tmp$ret$3;
        var tmp$ret$4;
        // Inline function 'kotlin.fromBits' call
        var tmp8_fromBits = FloatCompanionObject_getInstance();
        var tmp9_fromBits = points[2];
        tmp$ret$4 = floatFromBits(tmp9_fromBits);

        var tmp_3 = tmp$ret$4;
        var tmp$ret$5;
        // Inline function 'kotlin.fromBits' call
        var tmp10_fromBits = FloatCompanionObject_getInstance();
        var tmp11_fromBits = points[3];
        tmp$ret$5 = floatFromBits(tmp11_fromBits);

        tmp = PathSegment_init_$Create$_1(tmp_1, tmp_2, tmp_3, tmp$ret$5, !(isClosedLineBit === 0), isClosed);
        break;
      case 2:
        var tmp$ret$6;
        // Inline function 'kotlin.fromBits' call
        var tmp12_fromBits = FloatCompanionObject_getInstance();
        var tmp13_fromBits = points[0];
        tmp$ret$6 = floatFromBits(tmp13_fromBits);

        var tmp_4 = tmp$ret$6;
        var tmp$ret$7;
        // Inline function 'kotlin.fromBits' call
        var tmp14_fromBits = FloatCompanionObject_getInstance();
        var tmp15_fromBits = points[1];
        tmp$ret$7 = floatFromBits(tmp15_fromBits);

        var tmp_5 = tmp$ret$7;
        var tmp$ret$8;
        // Inline function 'kotlin.fromBits' call
        var tmp16_fromBits = FloatCompanionObject_getInstance();
        var tmp17_fromBits = points[2];
        tmp$ret$8 = floatFromBits(tmp17_fromBits);

        var tmp_6 = tmp$ret$8;
        var tmp$ret$9;
        // Inline function 'kotlin.fromBits' call
        var tmp18_fromBits = FloatCompanionObject_getInstance();
        var tmp19_fromBits = points[3];
        tmp$ret$9 = floatFromBits(tmp19_fromBits);

        var tmp_7 = tmp$ret$9;
        var tmp$ret$10;
        // Inline function 'kotlin.fromBits' call
        var tmp20_fromBits = FloatCompanionObject_getInstance();
        var tmp21_fromBits = points[4];
        tmp$ret$10 = floatFromBits(tmp21_fromBits);

        var tmp_8 = tmp$ret$10;
        var tmp$ret$11;
        // Inline function 'kotlin.fromBits' call
        var tmp22_fromBits = FloatCompanionObject_getInstance();
        var tmp23_fromBits = points[5];
        tmp$ret$11 = floatFromBits(tmp23_fromBits);

        tmp = PathSegment_init_$Create$_2(tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp$ret$11, isClosed);
        break;
      case 3:
        var tmp$ret$12;
        // Inline function 'kotlin.fromBits' call
        var tmp24_fromBits = FloatCompanionObject_getInstance();
        var tmp25_fromBits = points[0];
        tmp$ret$12 = floatFromBits(tmp25_fromBits);

        var tmp_9 = tmp$ret$12;
        var tmp$ret$13;
        // Inline function 'kotlin.fromBits' call
        var tmp26_fromBits = FloatCompanionObject_getInstance();
        var tmp27_fromBits = points[1];
        tmp$ret$13 = floatFromBits(tmp27_fromBits);

        var tmp_10 = tmp$ret$13;
        var tmp$ret$14;
        // Inline function 'kotlin.fromBits' call
        var tmp28_fromBits = FloatCompanionObject_getInstance();
        var tmp29_fromBits = points[2];
        tmp$ret$14 = floatFromBits(tmp29_fromBits);

        var tmp_11 = tmp$ret$14;
        var tmp$ret$15;
        // Inline function 'kotlin.fromBits' call
        var tmp30_fromBits = FloatCompanionObject_getInstance();
        var tmp31_fromBits = points[3];
        tmp$ret$15 = floatFromBits(tmp31_fromBits);

        var tmp_12 = tmp$ret$15;
        var tmp$ret$16;
        // Inline function 'kotlin.fromBits' call
        var tmp32_fromBits = FloatCompanionObject_getInstance();
        var tmp33_fromBits = points[4];
        tmp$ret$16 = floatFromBits(tmp33_fromBits);

        var tmp_13 = tmp$ret$16;
        var tmp$ret$17;
        // Inline function 'kotlin.fromBits' call
        var tmp34_fromBits = FloatCompanionObject_getInstance();
        var tmp35_fromBits = points[5];
        tmp$ret$17 = floatFromBits(tmp35_fromBits);

        var tmp_14 = tmp$ret$17;
        var tmp$ret$18;
        // Inline function 'kotlin.fromBits' call
        var tmp36_fromBits = FloatCompanionObject_getInstance();
        var tmp37_fromBits = points[8];
        tmp$ret$18 = floatFromBits(tmp37_fromBits);

        tmp = PathSegment_init_$Create$_3(tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp$ret$18, isClosed);
        break;
      case 4:
        var tmp$ret$19;
        // Inline function 'kotlin.fromBits' call
        var tmp38_fromBits = FloatCompanionObject_getInstance();
        var tmp39_fromBits = points[0];
        tmp$ret$19 = floatFromBits(tmp39_fromBits);

        var tmp_15 = tmp$ret$19;
        var tmp$ret$20;
        // Inline function 'kotlin.fromBits' call
        var tmp40_fromBits = FloatCompanionObject_getInstance();
        var tmp41_fromBits = points[1];
        tmp$ret$20 = floatFromBits(tmp41_fromBits);

        var tmp_16 = tmp$ret$20;
        var tmp$ret$21;
        // Inline function 'kotlin.fromBits' call
        var tmp42_fromBits = FloatCompanionObject_getInstance();
        var tmp43_fromBits = points[2];
        tmp$ret$21 = floatFromBits(tmp43_fromBits);

        var tmp_17 = tmp$ret$21;
        var tmp$ret$22;
        // Inline function 'kotlin.fromBits' call
        var tmp44_fromBits = FloatCompanionObject_getInstance();
        var tmp45_fromBits = points[3];
        tmp$ret$22 = floatFromBits(tmp45_fromBits);

        var tmp_18 = tmp$ret$22;
        var tmp$ret$23;
        // Inline function 'kotlin.fromBits' call
        var tmp46_fromBits = FloatCompanionObject_getInstance();
        var tmp47_fromBits = points[4];
        tmp$ret$23 = floatFromBits(tmp47_fromBits);

        var tmp_19 = tmp$ret$23;
        var tmp$ret$24;
        // Inline function 'kotlin.fromBits' call
        var tmp48_fromBits = FloatCompanionObject_getInstance();
        var tmp49_fromBits = points[5];
        tmp$ret$24 = floatFromBits(tmp49_fromBits);

        var tmp_20 = tmp$ret$24;
        var tmp$ret$25;
        // Inline function 'kotlin.fromBits' call
        var tmp50_fromBits = FloatCompanionObject_getInstance();
        var tmp51_fromBits = points[6];
        tmp$ret$25 = floatFromBits(tmp51_fromBits);

        var tmp_21 = tmp$ret$25;
        var tmp$ret$26;
        // Inline function 'kotlin.fromBits' call
        var tmp52_fromBits = FloatCompanionObject_getInstance();
        var tmp53_fromBits = points[7];
        tmp$ret$26 = floatFromBits(tmp53_fromBits);

        tmp = PathSegment_init_$Create$_4(tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp$ret$26, isClosed);
        break;
      case 6:
        tmp = PathSegment_init_$Create$(null, null, null, null, null, 0.0, false, false, 255, null);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  var PathVerb_MOVE_instance;
  var PathVerb_LINE_instance;
  var PathVerb_QUAD_instance;
  var PathVerb_CONIC_instance;
  var PathVerb_CUBIC_instance;
  var PathVerb_CLOSE_instance;
  var PathVerb_DONE_instance;
  function values_3() {
    return [PathVerb_MOVE_getInstance(), PathVerb_LINE_getInstance(), PathVerb_QUAD_getInstance(), PathVerb_CONIC_getInstance(), PathVerb_CUBIC_getInstance(), PathVerb_CLOSE_getInstance(), PathVerb_DONE_getInstance()];
  }
  var PathVerb_entriesInitialized;
  function PathVerb_initEntries() {
    if (PathVerb_entriesInitialized)
      return Unit_getInstance();
    PathVerb_entriesInitialized = true;
    PathVerb_MOVE_instance = new PathVerb('MOVE', 0);
    PathVerb_LINE_instance = new PathVerb('LINE', 1);
    PathVerb_QUAD_instance = new PathVerb('QUAD', 2);
    PathVerb_CONIC_instance = new PathVerb('CONIC', 3);
    PathVerb_CUBIC_instance = new PathVerb('CUBIC', 4);
    PathVerb_CLOSE_instance = new PathVerb('CLOSE', 5);
    PathVerb_DONE_instance = new PathVerb('DONE', 6);
  }
  function PathVerb(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  PathVerb.$metadata$ = classMeta('PathVerb', undefined, undefined, undefined, undefined, Enum.prototype);
  function PathVerb_MOVE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_MOVE_instance;
  }
  function PathVerb_LINE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_LINE_instance;
  }
  function PathVerb_QUAD_getInstance() {
    PathVerb_initEntries();
    return PathVerb_QUAD_instance;
  }
  function PathVerb_CONIC_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CONIC_instance;
  }
  function PathVerb_CUBIC_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CUBIC_instance;
  }
  function PathVerb_CLOSE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CLOSE_instance;
  }
  function PathVerb_DONE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_DONE_instance;
  }
  function Companion_25() {
    Companion_instance_25 = this;
    Companion_getInstance_46().c2m();
  }
  Companion_25.$metadata$ = objectMeta('Companion');
  var Companion_instance_25;
  function Companion_getInstance_26() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function Picture(ptr) {
    Companion_getInstance_26();
    RefCnt_init_$Init$(ptr, this);
  }
  Picture.$metadata$ = classMeta('Picture', undefined, undefined, undefined, undefined, RefCnt.prototype);
  function Companion_26() {
    Companion_instance_26 = this;
    Companion_getInstance_46().c2m();
  }
  Companion_26.$metadata$ = objectMeta('Companion');
  var Companion_instance_26;
  function Companion_getInstance_27() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function PictureRecorder_init_$Init$($this) {
    PictureRecorder.call($this, org_jetbrains_skia_PictureRecorder__1nMake());
    Stats_getInstance().e2m();
    return $this;
  }
  function PictureRecorder_init_$Create$() {
    return PictureRecorder_init_$Init$(Object.create(PictureRecorder.prototype));
  }
  function _FinalizerHolder_9() {
    _FinalizerHolder_instance_9 = this;
    this.v2v_1 = org_jetbrains_skia_PictureRecorder__1nGetFinalizer();
  }
  _FinalizerHolder_9.$metadata$ = objectMeta('_FinalizerHolder');
  var _FinalizerHolder_instance_9;
  function _FinalizerHolder_getInstance_9() {
    if (_FinalizerHolder_instance_9 == null)
      new _FinalizerHolder_9();
    return _FinalizerHolder_instance_9;
  }
  function PictureRecorder(ptr) {
    Companion_getInstance_27();
    var tmp = _FinalizerHolder_getInstance_9().v2v_1;
    Managed_init_$Init$(ptr, tmp, false, 4, null, this);
  }
  PictureRecorder.prototype.y2v = function (bounds) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = new Canvas(org_jetbrains_skia_PictureRecorder__1nBeginRecording(this.i2m_1, bounds.p2n_1, bounds.q2n_1, bounds.r2n_1, bounds.s2n_1), false, this);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  PictureRecorder.prototype.z2v = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = new Picture(org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPicture(this.i2m_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  PictureRecorder.$metadata$ = classMeta('PictureRecorder', undefined, undefined, undefined, undefined, Managed.prototype);
  var PixelGeometry_UNKNOWN_instance;
  var PixelGeometry_RGB_H_instance;
  var PixelGeometry_BGR_H_instance;
  var PixelGeometry_RGB_V_instance;
  var PixelGeometry_BGR_V_instance;
  var PixelGeometry_entriesInitialized;
  function PixelGeometry_initEntries() {
    if (PixelGeometry_entriesInitialized)
      return Unit_getInstance();
    PixelGeometry_entriesInitialized = true;
    PixelGeometry_UNKNOWN_instance = new PixelGeometry('UNKNOWN', 0);
    PixelGeometry_RGB_H_instance = new PixelGeometry('RGB_H', 1);
    PixelGeometry_BGR_H_instance = new PixelGeometry('BGR_H', 2);
    PixelGeometry_RGB_V_instance = new PixelGeometry('RGB_V', 3);
    PixelGeometry_BGR_V_instance = new PixelGeometry('BGR_V', 4);
  }
  function PixelGeometry(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  PixelGeometry.$metadata$ = classMeta('PixelGeometry', undefined, undefined, undefined, undefined, Enum.prototype);
  function PixelGeometry_UNKNOWN_getInstance() {
    PixelGeometry_initEntries();
    return PixelGeometry_UNKNOWN_instance;
  }
  function Companion_27() {
    Companion_instance_27 = this;
    this.a2w_1 = new Point(0.0, 0.0);
  }
  Companion_27.$metadata$ = objectMeta('Companion');
  var Companion_instance_27;
  function Companion_getInstance_28() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function Point(x, y) {
    Companion_getInstance_28();
    this.b2w_1 = x;
    this.c2w_1 = y;
  }
  Point.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Point))
      return false;
    if (!(compareTo(this.b2w_1, other.b2w_1) === 0))
      return false;
    return compareTo(this.c2w_1, other.c2w_1) === 0;
  };
  Point.prototype.hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.b2w_1) | 0;
    result = imul(result, PRIME) + toBits(this.c2w_1) | 0;
    return result;
  };
  Point.prototype.toString = function () {
    return 'Point(_x=' + this.b2w_1 + ', _y=' + this.c2w_1 + ')';
  };
  Point.$metadata$ = classMeta('Point');
  function Point3(x, y, z) {
    this.d2w_1 = x;
    this.e2w_1 = y;
    this.f2w_1 = z;
  }
  Point3.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Point3))
      return false;
    if (!(compareTo(this.d2w_1, other.d2w_1) === 0))
      return false;
    if (!(compareTo(this.e2w_1, other.e2w_1) === 0))
      return false;
    return compareTo(this.f2w_1, other.f2w_1) === 0;
  };
  Point3.prototype.hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.d2w_1) | 0;
    result = imul(result, PRIME) + toBits(this.e2w_1) | 0;
    result = imul(result, PRIME) + toBits(this.f2w_1) | 0;
    return result;
  };
  Point3.prototype.toString = function () {
    return 'Point3(_x=' + this.d2w_1 + ', _y=' + this.e2w_1 + ', _z=' + this.f2w_1 + ')';
  };
  Point3.$metadata$ = classMeta('Point3');
  function Companion_28() {
    Companion_instance_28 = this;
  }
  Companion_28.prototype.g2w = function (l, t, r, b, xRad, yRad) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([xRad, yRad]);
    return new RRect(l, t, r, b, tmp$ret$0);
  };
  Companion_28.prototype.h2w = function (l, t, r, b, radii) {
    return new RRect(l, t, r, b, radii);
  };
  Companion_28.$metadata$ = objectMeta('Companion');
  var Companion_instance_28;
  function Companion_getInstance_29() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function RRect(l, t, r, b, radii) {
    Companion_getInstance_29();
    Rect.call(this, l, t, r, b);
    this.z2n_1 = radii;
  }
  RRect.prototype.toString = function () {
    return 'RRect(_left=' + this.p2n_1 + ', _top=' + this.q2n_1 + ', _right=' + this.r2n_1 + ', _bottom=' + this.s2n_1 + ', _radii=' + joinToString$default(this.z2n_1, null, null, null, 0, null, null, 63, null) + ')';
  };
  RRect.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof RRect))
      return false;
    if (!Rect.prototype.equals.call(this, other))
      return false;
    var tmp;
    if (this.z2n_1.length === other.z2n_1.length) {
      tmp = contentEquals(this.z2n_1, other.z2n_1);
    } else {
      tmp = contentEquals(normalizeRadii(this.z2n_1), normalizeRadii(other.z2n_1));
    }
    return tmp;
  };
  RRect.prototype.hashCode = function () {
    var PRIME = 59;
    var result = Rect.prototype.hashCode.call(this);
    result = imul(result, PRIME) + contentHashCode(this.z2n_1) | 0;
    return result;
  };
  RRect.$metadata$ = classMeta('RRect', undefined, undefined, undefined, undefined, Rect.prototype);
  function normalizeRadii(radii) {
    var tmp0_subject = radii.length;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        var tmp_0 = 0;
        var tmp_1 = 8;
        var tmp_2 = new Float32Array(tmp_1);
        while (tmp_0 < tmp_1) {
          var tmp_3 = tmp_0;
          var tmp$ret$0;
          // Inline function 'org.jetbrains.skia.normalizeRadii.<anonymous>' call
          tmp$ret$0 = 0.0;
          tmp_2[tmp_3] = tmp$ret$0;
          tmp_0 = tmp_0 + 1 | 0;
        }

        tmp = tmp_2;
        break;
      case 1:
        var tmp_4 = 0;
        var tmp_5 = 8;
        var tmp_6 = new Float32Array(tmp_5);
        while (tmp_4 < tmp_5) {
          var tmp_7 = tmp_4;
          var tmp$ret$1;
          // Inline function 'org.jetbrains.skia.normalizeRadii.<anonymous>' call
          tmp$ret$1 = radii[0];
          tmp_6[tmp_7] = tmp$ret$1;
          tmp_4 = tmp_4 + 1 | 0;
        }

        tmp = tmp_6;
        break;
      case 2:
        var tmp_8 = 0;
        var tmp_9 = 8;
        var tmp_10 = new Float32Array(tmp_9);
        while (tmp_8 < tmp_9) {
          var tmp_11 = tmp_8;
          var tmp$ret$2;
          // Inline function 'org.jetbrains.skia.normalizeRadii.<anonymous>' call
          tmp$ret$2 = radii[tmp_11 % 2 | 0];
          tmp_10[tmp_11] = tmp$ret$2;
          tmp_8 = tmp_8 + 1 | 0;
        }

        tmp = tmp_10;
        break;
      case 4:
        var tmp_12 = 0;
        var tmp_13 = 8;
        var tmp_14 = new Float32Array(tmp_13);
        while (tmp_12 < tmp_13) {
          var tmp_15 = tmp_12;
          var tmp$ret$3;
          // Inline function 'org.jetbrains.skia.normalizeRadii.<anonymous>' call
          tmp$ret$3 = radii[tmp_15 / 2 | 0];
          tmp_14[tmp_15] = tmp$ret$3;
          tmp_12 = tmp_12 + 1 | 0;
        }

        tmp = tmp_14;
        break;
      case 8:
        tmp = radii;
        break;
      default:
        throw Error_init_$Create$('illegal radii array');
    }
    return tmp;
  }
  function Companion_29() {
    Companion_instance_29 = this;
  }
  Companion_29.prototype.i2w = function (l, t, r, b) {
    // Inline function 'kotlin.require' call
    var tmp0_require = l <= r;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'org.jetbrains.skia.Companion.makeLTRB.<anonymous>' call
      tmp$ret$0 = 'Rect::makeLTRB expected l <= r, got ' + l + ' > ' + r;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = t <= b;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'org.jetbrains.skia.Companion.makeLTRB.<anonymous>' call
      tmp$ret$1 = 'Rect::makeLTRB expected t <= b, got ' + t + ' > ' + b;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return new Rect(l, t, r, b);
  };
  Companion_29.prototype.j2w = function (l, t, w, h) {
    // Inline function 'kotlin.require' call
    var tmp0_require = w >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'org.jetbrains.skia.Companion.makeXYWH.<anonymous>' call
      tmp$ret$0 = 'Rect::makeXYWH expected w >= 0, got: ' + w;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = h >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'org.jetbrains.skia.Companion.makeXYWH.<anonymous>' call
      tmp$ret$1 = 'Rect::makeXYWH expected h >= 0, got: ' + h;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return new Rect(l, t, l + w, t + h);
  };
  Companion_29.prototype.k2u = function (block) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var tmp1_withResult = new Float32Array(4);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp$ret$0;
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = tmp0__anonymous__q1qw7t.n2r(tmp1_withResult);
        block(tmp0__anonymous__q1qw7t, handle);
        tmp0__anonymous__q1qw7t.o2r(handle, tmp1_withResult);
        tmp$ret$0 = tmp1_withResult;
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
        }
      }
    }
    tmp$ret$2 = tmp$ret$1;
    var result = tmp$ret$2;
    return new Rect(result[0], result[1], result[2], result[3]);
  };
  Companion_29.$metadata$ = objectMeta('Companion');
  var Companion_instance_29;
  function Companion_getInstance_30() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function Rect(left, top, right, bottom) {
    Companion_getInstance_30();
    this.p2n_1 = left;
    this.q2n_1 = top;
    this.r2n_1 = right;
    this.s2n_1 = bottom;
  }
  Rect.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Rect))
      return false;
    if (!(compareTo(this.p2n_1, other.p2n_1) === 0))
      return false;
    if (!(compareTo(this.q2n_1, other.q2n_1) === 0))
      return false;
    if (!(compareTo(this.r2n_1, other.r2n_1) === 0))
      return false;
    return compareTo(this.s2n_1, other.s2n_1) === 0;
  };
  Rect.prototype.hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.p2n_1) | 0;
    result = imul(result, PRIME) + toBits(this.q2n_1) | 0;
    result = imul(result, PRIME) + toBits(this.r2n_1) | 0;
    result = imul(result, PRIME) + toBits(this.s2n_1) | 0;
    return result;
  };
  Rect.prototype.toString = function () {
    return 'Rect(_left=' + this.p2n_1 + ', _top=' + this.q2n_1 + ', _right=' + this.r2n_1 + ', _bottom=' + this.s2n_1 + ')';
  };
  Rect.$metadata$ = classMeta('Rect');
  function SamplingMode() {
  }
  SamplingMode.$metadata$ = interfaceMeta('SamplingMode');
  function ShadowUtils() {
    ShadowUtils_instance = this;
    Companion_getInstance_46().c2m();
  }
  ShadowUtils.prototype.k2w = function (canvas, path, zPlaneParams, lightPos, lightRadius, ambientColor, spotColor, transparentOccluder, geometricOnly) {
    Stats_getInstance().e2m();
    var flags = 0;
    if (transparentOccluder)
      flags = flags | 1;
    if (geometricOnly)
      flags = flags | 2;
    org_jetbrains_skia_ShadowUtils__1nDrawShadow(getPtr(canvas), getPtr(path), zPlaneParams.d2w_1, zPlaneParams.e2w_1, zPlaneParams.f2w_1, lightPos.d2w_1, lightPos.e2w_1, lightPos.f2w_1, lightRadius, ambientColor, spotColor, flags);
  };
  ShadowUtils.$metadata$ = objectMeta('ShadowUtils');
  var ShadowUtils_instance;
  function ShadowUtils_getInstance() {
    if (ShadowUtils_instance == null)
      new ShadowUtils();
    return ShadowUtils_instance;
  }
  function arrayDecoderScope(arrayDecoderBlock, block) {
    var arrayDecoder = null;
    var tmp;
    try {
      arrayDecoder = arrayDecoderBlock();
      tmp = block(arrayDecoder);
    }finally {
      var tmp0_safe_receiver = arrayDecoder;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.vk();
      }
    }
    return tmp;
  }
  function ArrayDecoder(ptr, disposePtr) {
    this.l2w_1 = ptr;
    this.m2w_1 = disposePtr;
  }
  ArrayDecoder.prototype.vk = function () {
    org_jetbrains_skia_StdVectorDecoder__1nDisposeArray(this.l2w_1, this.m2w_1);
  };
  ArrayDecoder.prototype.n2w = function (index) {
    return org_jetbrains_skia_StdVectorDecoder__1nReleaseElement(this.l2w_1, index);
  };
  ArrayDecoder.prototype.f = function () {
    return org_jetbrains_skia_StdVectorDecoder__1nGetArraySize(this.l2w_1);
  };
  ArrayDecoder.$metadata$ = classMeta('ArrayDecoder');
  function Companion_30() {
    Companion_instance_30 = this;
    Companion_getInstance_46().c2m();
  }
  Companion_30.prototype.o2w = function (context, rt, origin, colorFormat, colorSpace, surfaceProps) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      var ptr = org_jetbrains_skia_Surface__1nMakeFromBackendRenderTarget(getPtr(context), getPtr(rt), origin.t5_1, colorFormat.t5_1, getPtr(colorSpace), surfaceProps);
      tmp = ptr === Companion_getInstance_48().u2s() ? null : Surface_init_$Create$(ptr, context, rt);
    }finally {
      reachabilityBarrier(context);
      reachabilityBarrier(rt);
      reachabilityBarrier(colorSpace);
    }
    return tmp;
  };
  Companion_30.prototype.p2w = function (context, rt, origin, colorFormat, colorSpace, surfaceProps, $mask0, $handler) {
    if (!(($mask0 & 32) === 0))
      surfaceProps = null;
    return this.o2w(context, rt, origin, colorFormat, colorSpace, surfaceProps);
  };
  Companion_30.$metadata$ = objectMeta('Companion');
  var Companion_instance_30;
  function Companion_getInstance_31() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function Surface_init_$Init$(ptr, context, renderTarget, $this) {
    RefCnt_init_$Init$(ptr, $this);
    Surface.call($this);
    $this.s2w_1 = context;
    $this.t2w_1 = renderTarget;
    return $this;
  }
  function Surface_init_$Create$(ptr, context, renderTarget) {
    return Surface_init_$Init$(ptr, context, renderTarget, Object.create(Surface.prototype));
  }
  Surface.prototype.u2w = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      var ptr = org_jetbrains_skia_Surface__1nGetCanvas(this.i2m_1);
      var tmp_0;
      if (ptr === Companion_getInstance_48().u2s()) {
        throw IllegalArgumentException_init_$Create$_0();
      } else {
        tmp_0 = new Canvas(ptr, false, this);
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Surface.prototype.v2w = function () {
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_Surface__1nFlushAndSubmit(this.i2m_1, false);
    }finally {
      reachabilityBarrier(this);
    }
  };
  function Surface() {
    Companion_getInstance_31();
  }
  Surface.$metadata$ = classMeta('Surface', undefined, undefined, undefined, undefined, RefCnt.prototype);
  var SurfaceColorFormat_UNKNOWN_instance;
  var SurfaceColorFormat_ALPHA_8_instance;
  var SurfaceColorFormat_RGB_565_instance;
  var SurfaceColorFormat_ARGB_4444_instance;
  var SurfaceColorFormat_RGBA_8888_instance;
  var SurfaceColorFormat_RGB_888x_instance;
  var SurfaceColorFormat_BGRA_8888_instance;
  var SurfaceColorFormat_RGBA_1010102_instance;
  var SurfaceColorFormat_RGB_101010x_instance;
  var SurfaceColorFormat_GRAY_8_instance;
  var SurfaceColorFormat_RGBA_F16_NORM_instance;
  var SurfaceColorFormat_RGBA_F16_instance;
  var SurfaceColorFormat_RGBA_F32_instance;
  var SurfaceColorFormat_R8G8_UNORM_instance;
  var SurfaceColorFormat_A16_FLOAT_instance;
  var SurfaceColorFormat_R16G16_FLOAT_instance;
  var SurfaceColorFormat_A16_UNORM_instance;
  var SurfaceColorFormat_R16G16_UNORM_instance;
  var SurfaceColorFormat_R16G16B16A16_UNORM_instance;
  var SurfaceColorFormat_entriesInitialized;
  function SurfaceColorFormat_initEntries() {
    if (SurfaceColorFormat_entriesInitialized)
      return Unit_getInstance();
    SurfaceColorFormat_entriesInitialized = true;
    SurfaceColorFormat_UNKNOWN_instance = new SurfaceColorFormat('UNKNOWN', 0);
    SurfaceColorFormat_ALPHA_8_instance = new SurfaceColorFormat('ALPHA_8', 1);
    SurfaceColorFormat_RGB_565_instance = new SurfaceColorFormat('RGB_565', 2);
    SurfaceColorFormat_ARGB_4444_instance = new SurfaceColorFormat('ARGB_4444', 3);
    SurfaceColorFormat_RGBA_8888_instance = new SurfaceColorFormat('RGBA_8888', 4);
    SurfaceColorFormat_RGB_888x_instance = new SurfaceColorFormat('RGB_888x', 5);
    SurfaceColorFormat_BGRA_8888_instance = new SurfaceColorFormat('BGRA_8888', 6);
    SurfaceColorFormat_RGBA_1010102_instance = new SurfaceColorFormat('RGBA_1010102', 7);
    SurfaceColorFormat_RGB_101010x_instance = new SurfaceColorFormat('RGB_101010x', 8);
    SurfaceColorFormat_GRAY_8_instance = new SurfaceColorFormat('GRAY_8', 9);
    SurfaceColorFormat_RGBA_F16_NORM_instance = new SurfaceColorFormat('RGBA_F16_NORM', 10);
    SurfaceColorFormat_RGBA_F16_instance = new SurfaceColorFormat('RGBA_F16', 11);
    SurfaceColorFormat_RGBA_F32_instance = new SurfaceColorFormat('RGBA_F32', 12);
    SurfaceColorFormat_R8G8_UNORM_instance = new SurfaceColorFormat('R8G8_UNORM', 13);
    SurfaceColorFormat_A16_FLOAT_instance = new SurfaceColorFormat('A16_FLOAT', 14);
    SurfaceColorFormat_R16G16_FLOAT_instance = new SurfaceColorFormat('R16G16_FLOAT', 15);
    SurfaceColorFormat_A16_UNORM_instance = new SurfaceColorFormat('A16_UNORM', 16);
    SurfaceColorFormat_R16G16_UNORM_instance = new SurfaceColorFormat('R16G16_UNORM', 17);
    SurfaceColorFormat_R16G16B16A16_UNORM_instance = new SurfaceColorFormat('R16G16B16A16_UNORM', 18);
  }
  function SurfaceColorFormat(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  SurfaceColorFormat.$metadata$ = classMeta('SurfaceColorFormat', undefined, undefined, undefined, undefined, Enum.prototype);
  function SurfaceColorFormat_RGBA_8888_getInstance() {
    SurfaceColorFormat_initEntries();
    return SurfaceColorFormat_RGBA_8888_instance;
  }
  var SurfaceOrigin_TOP_LEFT_instance;
  var SurfaceOrigin_BOTTOM_LEFT_instance;
  var SurfaceOrigin_entriesInitialized;
  function SurfaceOrigin_initEntries() {
    if (SurfaceOrigin_entriesInitialized)
      return Unit_getInstance();
    SurfaceOrigin_entriesInitialized = true;
    SurfaceOrigin_TOP_LEFT_instance = new SurfaceOrigin('TOP_LEFT', 0);
    SurfaceOrigin_BOTTOM_LEFT_instance = new SurfaceOrigin('BOTTOM_LEFT', 1);
  }
  function SurfaceOrigin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  SurfaceOrigin.$metadata$ = classMeta('SurfaceOrigin', undefined, undefined, undefined, undefined, Enum.prototype);
  function SurfaceOrigin_BOTTOM_LEFT_getInstance() {
    SurfaceOrigin_initEntries();
    return SurfaceOrigin_BOTTOM_LEFT_instance;
  }
  function SurfaceProps_init_$Init$(isDeviceIndependentFonts, pixelGeometry, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      isDeviceIndependentFonts = false;
    if (!(($mask0 & 2) === 0))
      pixelGeometry = PixelGeometry_UNKNOWN_getInstance();
    SurfaceProps.call($this, isDeviceIndependentFonts, pixelGeometry);
    return $this;
  }
  function SurfaceProps_init_$Create$(isDeviceIndependentFonts, pixelGeometry, $mask0, $marker) {
    return SurfaceProps_init_$Init$(isDeviceIndependentFonts, pixelGeometry, $mask0, $marker, Object.create(SurfaceProps.prototype));
  }
  function SurfaceProps(isDeviceIndependentFonts, pixelGeometry) {
    this.e2n_1 = isDeviceIndependentFonts;
    this.f2n_1 = pixelGeometry;
  }
  SurfaceProps.prototype.g2n = function () {
    return 0 | (this.e2n_1 ? 1 : 0);
  };
  SurfaceProps.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof SurfaceProps))
      return false;
    if (!(this.e2n_1 === other.e2n_1))
      return false;
    return this.f2n_1.equals(other.f2n_1);
  };
  SurfaceProps.prototype.hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.e2n_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.f2n_1.hashCode() | 0;
    return result;
  };
  SurfaceProps.prototype.toString = function () {
    return 'SurfaceProps(_deviceIndependentFonts=' + this.e2n_1 + ', _pixelGeometry=' + this.f2n_1 + ')';
  };
  SurfaceProps.$metadata$ = classMeta('SurfaceProps');
  function Companion_31() {
    Companion_instance_31 = this;
    Companion_getInstance_46().c2m();
  }
  Companion_31.prototype.w2w = function (data, index) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      var ptr = org_jetbrains_skia_Typeface__1nMakeFromData(getPtr(data), index);
      // Inline function 'kotlin.require' call
      var tmp0_require = !(ptr === Companion_getInstance_48().u2s());
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'org.jetbrains.skia.Companion.makeFromData.<anonymous>' call
        tmp$ret$0 = 'Failed to create Typeface from data ' + data;
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = new Typeface(ptr);
    }finally {
      reachabilityBarrier(data);
    }
    return tmp;
  };
  Companion_31.prototype.x2w = function (data, index, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      index = 0;
    return this.w2w(data, index);
  };
  Companion_31.$metadata$ = objectMeta('Companion');
  var Companion_instance_31;
  function Companion_getInstance_32() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function Typeface(ptr) {
    Companion_getInstance_32();
    RefCnt_init_$Init$(ptr, this);
  }
  Typeface.prototype.j2m = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Typeface__1nEquals(this.i2m_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  Typeface.prototype.a2x = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      var tmp$ret$3;
      // Inline function 'org.jetbrains.skia.impl.withStringResult' call
      var tmp$ret$2;
      // Inline function 'org.jetbrains.skia.impl.use' call
      var tmp$ret$0;
      // Inline function 'org.jetbrains.skia.Typeface.<get-familyName>.<anonymous>' call
      tmp$ret$0 = org_jetbrains_skia_Typeface__1nGetFamilyName(this.i2m_1);
      var tmp_0 = tmp$ret$0;
      var tmp0_use = ManagedString_init_$Create$(tmp_0, false, 2, null);
      var tmp_1;
      try {
        var tmp$ret$1;
        // Inline function 'org.jetbrains.skia.impl.withStringResult.<anonymous>' call
        tmp$ret$1 = tmp0_use.toString();
        tmp_1 = tmp$ret$1;
      }finally {
        tmp0_use.z1g();
      }
      tmp$ret$2 = tmp_1;
      tmp$ret$3 = tmp$ret$2;
      tmp = tmp$ret$3;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Typeface.$metadata$ = classMeta('Typeface', undefined, undefined, undefined, undefined, RefCnt.prototype);
  function use(_this__u8e3s4, block) {
    var tmp;
    try {
      tmp = block(_this__u8e3s4);
    }finally {
      _this__u8e3s4.z1g();
    }
    return tmp;
  }
  function ArrayInteropDecoder() {
  }
  ArrayInteropDecoder.$metadata$ = interfaceMeta('ArrayInteropDecoder');
  function withResult(result, block) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp$ret$0;
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = tmp0__anonymous__q1qw7t.n2r(result);
        block(tmp0__anonymous__q1qw7t, handle);
        tmp0__anonymous__q1qw7t.o2r(handle, result);
        tmp$ret$0 = result;
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
        }
      }
    }
    return tmp$ret$1;
  }
  function getPtr(n) {
    var tmp0_safe_receiver = n;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i2m_1;
    return tmp1_elvis_lhs == null ? Companion_getInstance_48().u2s() : tmp1_elvis_lhs;
  }
  function withResult_0(result, block) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp$ret$0;
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = tmp0__anonymous__q1qw7t.f2t(result);
        block(tmp0__anonymous__q1qw7t, handle);
        tmp0__anonymous__q1qw7t.g2t(handle, result);
        tmp$ret$0 = result;
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
        }
      }
    }
    return tmp$ret$1;
  }
  function withResult_1(result, block) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp$ret$0;
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = tmp0__anonymous__q1qw7t.y2s(result);
        block(tmp0__anonymous__q1qw7t, handle);
        tmp0__anonymous__q1qw7t.c2t(handle, result);
        tmp$ret$0 = result;
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
        }
      }
    }
    return tmp$ret$1;
  }
  function withStringResult(block) {
    var tmp$ret$1;
    // Inline function 'org.jetbrains.skia.impl.use' call
    var tmp = block();
    var tmp0_use = ManagedString_init_$Create$(tmp, false, 2, null);
    var tmp_0;
    try {
      var tmp$ret$0;
      // Inline function 'org.jetbrains.skia.impl.withStringResult.<anonymous>' call
      tmp$ret$0 = tmp0_use.toString();
      tmp_0 = tmp$ret$0;
    }finally {
      tmp0_use.z1g();
    }
    tmp$ret$1 = tmp_0;
    return tmp$ret$1;
  }
  function withResult_2(result, block) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp$ret$0;
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = tmp0__anonymous__q1qw7t.z2s(result);
        block(tmp0__anonymous__q1qw7t, handle);
        tmp0__anonymous__q1qw7t.a2t(handle, result);
        tmp$ret$0 = result;
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
        }
      }
    }
    return tmp$ret$1;
  }
  var Affinity_UPSTREAM_instance;
  var Affinity_DOWNSTREAM_instance;
  var Affinity_entriesInitialized;
  function Affinity_initEntries() {
    if (Affinity_entriesInitialized)
      return Unit_getInstance();
    Affinity_entriesInitialized = true;
    Affinity_UPSTREAM_instance = new Affinity('UPSTREAM', 0);
    Affinity_DOWNSTREAM_instance = new Affinity('DOWNSTREAM', 1);
  }
  function Affinity(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Affinity.$metadata$ = classMeta('Affinity', undefined, undefined, undefined, undefined, Enum.prototype);
  function Affinity_UPSTREAM_getInstance() {
    Affinity_initEntries();
    return Affinity_UPSTREAM_instance;
  }
  function Affinity_DOWNSTREAM_getInstance() {
    Affinity_initEntries();
    return Affinity_DOWNSTREAM_instance;
  }
  var Alignment_LEFT_instance;
  var Alignment_RIGHT_instance;
  var Alignment_CENTER_instance;
  var Alignment_JUSTIFY_instance;
  var Alignment_START_instance;
  var Alignment_END_instance;
  var Alignment_entriesInitialized;
  function Alignment_initEntries() {
    if (Alignment_entriesInitialized)
      return Unit_getInstance();
    Alignment_entriesInitialized = true;
    Alignment_LEFT_instance = new Alignment('LEFT', 0);
    Alignment_RIGHT_instance = new Alignment('RIGHT', 1);
    Alignment_CENTER_instance = new Alignment('CENTER', 2);
    Alignment_JUSTIFY_instance = new Alignment('JUSTIFY', 3);
    Alignment_START_instance = new Alignment('START', 4);
    Alignment_END_instance = new Alignment('END', 5);
  }
  function Alignment(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Alignment.$metadata$ = classMeta('Alignment', undefined, undefined, undefined, undefined, Enum.prototype);
  function Alignment_LEFT_getInstance() {
    Alignment_initEntries();
    return Alignment_LEFT_instance;
  }
  function Alignment_RIGHT_getInstance() {
    Alignment_initEntries();
    return Alignment_RIGHT_instance;
  }
  function Alignment_CENTER_getInstance() {
    Alignment_initEntries();
    return Alignment_CENTER_instance;
  }
  function Alignment_JUSTIFY_getInstance() {
    Alignment_initEntries();
    return Alignment_JUSTIFY_instance;
  }
  function Alignment_START_getInstance() {
    Alignment_initEntries();
    return Alignment_START_instance;
  }
  function Alignment_END_getInstance() {
    Alignment_initEntries();
    return Alignment_END_instance;
  }
  var BaselineMode_ALPHABETIC_instance;
  var BaselineMode_IDEOGRAPHIC_instance;
  var BaselineMode_entriesInitialized;
  function BaselineMode_initEntries() {
    if (BaselineMode_entriesInitialized)
      return Unit_getInstance();
    BaselineMode_entriesInitialized = true;
    BaselineMode_ALPHABETIC_instance = new BaselineMode('ALPHABETIC', 0);
    BaselineMode_IDEOGRAPHIC_instance = new BaselineMode('IDEOGRAPHIC', 1);
  }
  function BaselineMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  BaselineMode.$metadata$ = classMeta('BaselineMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function BaselineMode_ALPHABETIC_getInstance() {
    BaselineMode_initEntries();
    return BaselineMode_ALPHABETIC_instance;
  }
  var DecorationLineStyle_SOLID_instance;
  var DecorationLineStyle_DOUBLE_instance;
  var DecorationLineStyle_DOTTED_instance;
  var DecorationLineStyle_DASHED_instance;
  var DecorationLineStyle_WAVY_instance;
  var DecorationLineStyle_entriesInitialized;
  function DecorationLineStyle_initEntries() {
    if (DecorationLineStyle_entriesInitialized)
      return Unit_getInstance();
    DecorationLineStyle_entriesInitialized = true;
    DecorationLineStyle_SOLID_instance = new DecorationLineStyle('SOLID', 0);
    DecorationLineStyle_DOUBLE_instance = new DecorationLineStyle('DOUBLE', 1);
    DecorationLineStyle_DOTTED_instance = new DecorationLineStyle('DOTTED', 2);
    DecorationLineStyle_DASHED_instance = new DecorationLineStyle('DASHED', 3);
    DecorationLineStyle_WAVY_instance = new DecorationLineStyle('WAVY', 4);
  }
  function DecorationLineStyle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  DecorationLineStyle.$metadata$ = classMeta('DecorationLineStyle', undefined, undefined, undefined, undefined, Enum.prototype);
  function DecorationLineStyle_SOLID_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_SOLID_instance;
  }
  function Companion_32() {
    Companion_instance_32 = this;
    this.e2x_1 = new DecorationStyle(false, false, false, true, -16777216, DecorationLineStyle_SOLID_getInstance(), 1.0);
  }
  Companion_32.$metadata$ = objectMeta('Companion');
  var Companion_instance_32;
  function Companion_getInstance_33() {
    if (Companion_instance_32 == null)
      new Companion_32();
    return Companion_instance_32;
  }
  function DecorationStyle(_underline, _overline, _lineThrough, _gaps, color, lineStyle, thicknessMultiplier) {
    Companion_getInstance_33();
    this.f2x_1 = _underline;
    this.g2x_1 = _overline;
    this.h2x_1 = _lineThrough;
    this.i2x_1 = _gaps;
    this.j2x_1 = color;
    this.k2x_1 = lineStyle;
    this.l2x_1 = thicknessMultiplier;
  }
  DecorationStyle.prototype.m2x = function () {
    return this.k2x_1;
  };
  DecorationStyle.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof DecorationStyle))
      return false;
    if (!(this.f2x_1 === other.f2x_1))
      return false;
    if (!(this.g2x_1 === other.g2x_1))
      return false;
    if (!(this.h2x_1 === other.h2x_1))
      return false;
    if (!(this.i2x_1 === other.i2x_1))
      return false;
    if (!(this.j2x_1 === other.j2x_1))
      return false;
    if (!(compareTo(this.l2x_1, other.l2x_1) === 0))
      return false;
    return this.m2x().equals(other.m2x());
  };
  DecorationStyle.prototype.hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.f2x_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.g2x_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.h2x_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.i2x_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.j2x_1 | 0;
    result = imul(result, PRIME) + toBits(this.l2x_1) | 0;
    result = imul(result, PRIME) + this.m2x().hashCode() | 0;
    return result;
  };
  DecorationStyle.prototype.toString = function () {
    return 'DecorationStyle(_underline=' + this.f2x_1 + ', _overline=' + this.g2x_1 + ', _lineThrough=' + this.h2x_1 + ', _gaps=' + this.i2x_1 + ', _color=' + this.j2x_1 + ', _lineStyle=' + this.m2x() + ', _thicknessMultiplier=' + this.l2x_1 + ')';
  };
  DecorationStyle.$metadata$ = classMeta('DecorationStyle');
  var Direction_RTL_instance;
  var Direction_LTR_instance;
  function values_4() {
    return [Direction_RTL_getInstance(), Direction_LTR_getInstance()];
  }
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_getInstance();
    Direction_entriesInitialized = true;
    Direction_RTL_instance = new Direction('RTL', 0);
    Direction_LTR_instance = new Direction('LTR', 1);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Direction.$metadata$ = classMeta('Direction', undefined, undefined, undefined, undefined, Enum.prototype);
  function Direction_RTL_getInstance() {
    Direction_initEntries();
    return Direction_RTL_instance;
  }
  function Direction_LTR_getInstance() {
    Direction_initEntries();
    return Direction_LTR_instance;
  }
  function Companion_33() {
    Companion_instance_33 = this;
    Companion_getInstance_46().c2m();
  }
  Companion_33.$metadata$ = objectMeta('Companion');
  var Companion_instance_33;
  function Companion_getInstance_34() {
    if (Companion_instance_33 == null)
      new Companion_33();
    return Companion_instance_33;
  }
  function FontCollection_init_$Init$($this) {
    FontCollection.call($this, org_jetbrains_skia_paragraph_FontCollection__1nMake());
    Stats_getInstance().e2m();
    return $this;
  }
  function FontCollection_init_$Create$() {
    return FontCollection_init_$Init$(Object.create(FontCollection.prototype));
  }
  function FontCollection(ptr) {
    Companion_getInstance_34();
    RefCnt_init_$Init$(ptr, this);
  }
  FontCollection.prototype.p2x = function (fontMgr) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_paragraph_FontCollection__1nSetAssetFontManager(this.i2m_1, getPtr(fontMgr));
      tmp = this;
    }finally {
      reachabilityBarrier(fontMgr);
    }
    return tmp;
  };
  FontCollection.prototype.q2x = function (fontMgr) {
    return this.r2x(fontMgr, null);
  };
  FontCollection.prototype.r2x = function (fontMgr, defaultFamilyName) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp$ret$0;
          // Inline function 'org.jetbrains.skia.paragraph.FontCollection.setDefaultFontManager.<anonymous>' call
          var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          tmp$ret$0 = org_jetbrains_skia_paragraph_FontCollection__1nSetDefaultFontManager(this.i2m_1, getPtr(fontMgr), tmp0__anonymous__q1qw7t.d2t(defaultFamilyName));
          tmp$ret$1 = tmp$ret$0;
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(fontMgr);
    }
    return tmp;
  };
  FontCollection.prototype.s2x = function (familyNames, style) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      var tmp$ret$8;
      // Inline function 'org.jetbrains.skia.arrayDecoderScope' call
      var arrayDecoder = null;
      var tmp_0;
      try {
        var tmp$ret$2;
        // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>' call
        var tmp$ret$1;
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
            var tmp$ret$0;
            // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>.<anonymous>' call
            var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
            var tmp_1 = this.i2m_1;
            var tmp_2 = tmp0__anonymous__q1qw7t.t2x(familyNames);
            var tmp0_safe_receiver = familyNames;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.length;
            tmp$ret$0 = org_jetbrains_skia_paragraph_FontCollection__1nFindTypefaces(tmp_1, tmp_2, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs, style.q2r_1);
            tmp$ret$1 = tmp$ret$0;
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
              _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
            }
          }
        }
        tmp$ret$2 = new ArrayDecoder(tmp$ret$1, org_jetbrains_skia_impl_RefCnt__getFinalizer());
        arrayDecoder = tmp$ret$2;
        var tmp$ret$7;
        // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>' call
        var tmp0__anonymous__q1qw7t_0 = arrayDecoder;
        var tmp$ret$6;
        // Inline function 'kotlin.collections.toTypedArray' call
        var tmp$ret$5;
        // Inline function 'kotlin.collections.map' call
        var tmp0_map = until(0, tmp0__anonymous__q1qw7t_0.f());
        var tmp$ret$4;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
        var inductionVariable = tmp0_map.j1_1;
        var last = tmp0_map.k1_1;
        if (inductionVariable <= last)
          do {
            var item = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$3;
            // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>.<anonymous>' call
            tmp$ret$3 = new Typeface(tmp0__anonymous__q1qw7t_0.n2w(item));
            tmp0_mapTo.a(tmp$ret$3);
          }
           while (!(item === last));
        tmp$ret$4 = tmp0_mapTo;
        tmp$ret$5 = tmp$ret$4;
        var tmp1_toTypedArray = tmp$ret$5;
        tmp$ret$6 = copyToArray(tmp1_toTypedArray);
        tmp$ret$7 = tmp$ret$6;
        tmp_0 = tmp$ret$7;
      }finally {
        var tmp0_safe_receiver_0 = arrayDecoder;
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          tmp0_safe_receiver_0.vk();
        }
      }
      tmp$ret$8 = tmp_0;
      tmp = tmp$ret$8;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  FontCollection.$metadata$ = classMeta('FontCollection', undefined, undefined, undefined, undefined, RefCnt.prototype);
  function Companion_34() {
    Companion_instance_34 = this;
  }
  Companion_34.prototype.c2x = function (array) {
    return org_jetbrains_skia_paragraph_LineMetrics__1nGetArraySize(array);
  };
  Companion_34.prototype.d2x = function (array) {
    return org_jetbrains_skia_paragraph_LineMetrics__1nDisposeArray(array);
  };
  Companion_34.prototype.b2x = function (array, index) {
    var intArray = new Int32Array(6);
    var doubleArray = new Float64Array(7);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_paragraph_LineMetrics__1nGetArrayElement(array, index, tmp0__anonymous__q1qw7t.u2x(intArray), tmp0__anonymous__q1qw7t.v2x(doubleArray));
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
        }
      }
    }
    return new LineMetrics(intArray[0], intArray[1], intArray[2], intArray[3], !(intArray[4] === 0), doubleArray[0], doubleArray[1], doubleArray[2], doubleArray[3], doubleArray[4], doubleArray[5], doubleArray[6], intArray[5]);
  };
  Companion_34.$metadata$ = objectMeta('Companion', [ArrayInteropDecoder]);
  var Companion_instance_34;
  function Companion_getInstance_35() {
    if (Companion_instance_34 == null)
      new Companion_34();
    return Companion_instance_34;
  }
  function LineMetrics(startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber) {
    Companion_getInstance_35();
    this.w2x_1 = startIndex;
    this.x2x_1 = endIndex;
    this.y2x_1 = endExcludingWhitespaces;
    this.z2x_1 = endIncludingNewline;
    this.a2y_1 = isHardBreak;
    this.b2y_1 = ascent;
    this.c2y_1 = descent;
    this.d2y_1 = unscaledAscent;
    this.e2y_1 = height;
    this.f2y_1 = width;
    this.g2y_1 = left;
    this.h2y_1 = baseline;
    this.i2y_1 = lineNumber;
  }
  LineMetrics.prototype.j2y = function () {
    return this.c2y_1;
  };
  LineMetrics.prototype.k2y = function () {
    return this.h2y_1;
  };
  LineMetrics.prototype.l2y = function () {
    return this.g2y_1 + this.f2y_1;
  };
  LineMetrics.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof LineMetrics))
      return false;
    if (!(this.w2x_1 === other.w2x_1))
      return false;
    if (!(this.x2x_1 === other.x2x_1))
      return false;
    if (!(this.y2x_1 === other.y2x_1))
      return false;
    if (!(this.z2x_1 === other.z2x_1))
      return false;
    if (!(this.a2y_1 === other.a2y_1))
      return false;
    if (!(compareTo(this.b2y_1, other.b2y_1) === 0))
      return false;
    if (!(compareTo(this.c2y_1, other.c2y_1) === 0))
      return false;
    if (!(compareTo(this.d2y_1, other.d2y_1) === 0))
      return false;
    if (!(compareTo(this.e2y_1, other.e2y_1) === 0))
      return false;
    if (!(compareTo(this.f2y_1, other.f2y_1) === 0))
      return false;
    if (!(compareTo(this.g2y_1, other.g2y_1) === 0))
      return false;
    if (!(compareTo(this.h2y_1, other.h2y_1) === 0))
      return false;
    return this.i2y_1 === other.i2y_1;
  };
  LineMetrics.prototype.hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.w2x_1 | 0;
    result = imul(result, PRIME) + this.x2x_1 | 0;
    result = imul(result, PRIME) + this.y2x_1 | 0;
    result = imul(result, PRIME) + this.z2x_1 | 0;
    result = imul(result, PRIME) + (this.a2y_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + toBits_0(this.b2y_1).b7() | 0;
    result = imul(result, PRIME) + toBits_0(this.c2y_1).b7() | 0;
    result = imul(result, PRIME) + toBits_0(this.d2y_1).b7() | 0;
    result = imul(result, PRIME) + toBits_0(this.e2y_1).b7() | 0;
    result = imul(result, PRIME) + toBits_0(this.f2y_1).b7() | 0;
    result = imul(result, PRIME) + toBits_0(this.g2y_1).b7() | 0;
    result = imul(result, PRIME) + toBits_0(this.h2y_1).b7() | 0;
    result = imul(result, PRIME) + this.i2y_1 | 0;
    return result;
  };
  LineMetrics.prototype.toString = function () {
    return 'LineMetrics(_startIndex=' + this.w2x_1 + ', _endIndex=' + this.x2x_1 + ', _endExcludingWhitespaces=' + this.y2x_1 + ', _endIncludingNewline=' + this.z2x_1 + ', _hardBreak=' + this.a2y_1 + ', _ascent=' + this.b2y_1 + ', _descent=' + this.c2y_1 + ', _unscaledAscent=' + this.d2y_1 + ', _height=' + this.e2y_1 + ', _width=' + this.f2y_1 + ', _left=' + this.g2y_1 + ', _baseline=' + this.h2y_1 + ', _lineNumber=' + this.i2y_1 + ')';
  };
  LineMetrics.$metadata$ = classMeta('LineMetrics');
  function Companion_35() {
    Companion_instance_35 = this;
    Companion_getInstance_46().c2m();
  }
  Companion_35.$metadata$ = objectMeta('Companion');
  var Companion_instance_35;
  function Companion_getInstance_36() {
    if (Companion_instance_35 == null)
      new Companion_35();
    return Companion_instance_35;
  }
  function _FinalizerHolder_10() {
    _FinalizerHolder_instance_10 = this;
    this.m2y_1 = org_jetbrains_skia_paragraph_Paragraph__1nGetFinalizer();
  }
  _FinalizerHolder_10.$metadata$ = objectMeta('_FinalizerHolder');
  var _FinalizerHolder_instance_10;
  function _FinalizerHolder_getInstance_10() {
    if (_FinalizerHolder_instance_10 == null)
      new _FinalizerHolder_10();
    return _FinalizerHolder_instance_10;
  }
  function Paragraph(ptr, text) {
    Companion_getInstance_36();
    var tmp = _FinalizerHolder_getInstance_10().m2y_1;
    Managed_init_$Init$(ptr, tmp, false, 4, null, this);
    Stats_getInstance().e2m();
    this.p2y_1 = text;
  }
  Paragraph.prototype.z1g = function () {
    if (!(this.p2y_1 == null)) {
      ensureNotNull(this.p2y_1).z1g();
      this.p2y_1 = null;
    }
    Managed.prototype.z1g.call(this);
  };
  Paragraph.prototype.b2j = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetHeight(this.i2m_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Paragraph.prototype.q2y = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetMinIntrinsicWidth(this.i2m_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Paragraph.prototype.r2y = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetMaxIntrinsicWidth(this.i2m_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Paragraph.prototype.s2y = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetAlphabeticBaseline(this.i2m_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Paragraph.prototype.t2y = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nDidExceedMaxLines(this.i2m_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Paragraph.prototype.u2y = function (width) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_paragraph_Paragraph__1nLayout(this.i2m_1, width);
    return this;
  };
  Paragraph.prototype.v2y = function (canvas, x, y) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_paragraph_Paragraph__1nPaint(this.i2m_1, getPtr(canvas), x, y);
      tmp = this;
    }finally {
      reachabilityBarrier(canvas);
    }
    return tmp;
  };
  Paragraph.prototype.w2y = function (start, end, rectHeightMode, rectWidthMode) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      var tmp$ret$4;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp$ret$3;
          // Inline function 'org.jetbrains.skia.paragraph.Paragraph.getRectsForRange.<anonymous>' call
          var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          var tmp$ret$2;
          // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
          var tmp0_fromInterop = org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForRange(this.i2m_1, start, end, rectHeightMode.t5_1, rectWidthMode.t5_1);
          var tmp1_fromInterop = Companion_getInstance_41();
          var size = tmp1_fromInterop.c2x(tmp0_fromInterop);
          var tmp_0 = 0;
          var tmp_1 = size;
          var tmp$ret$0;
          // Inline function 'kotlin.arrayOfNulls' call
          tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
          var tmp_2 = tmp$ret$0;
          while (tmp_0 < tmp_1) {
            var tmp_3 = tmp_0;
            var tmp$ret$1;
            // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop.<anonymous>' call
            tmp$ret$1 = tmp1_fromInterop.b2x(tmp0_fromInterop, tmp_3);
            tmp_2[tmp_3] = tmp$ret$1;
            tmp_0 = tmp_0 + 1 | 0;
          }
          var result = tmp_2;
          tmp1_fromInterop.d2x(tmp0_fromInterop);
          tmp$ret$2 = result;
          tmp$ret$3 = tmp$ret$2;
          tmp$ret$4 = tmp$ret$3;
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
          }
        }
      }
      tmp = tmp$ret$4;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Paragraph.prototype.x2y = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      var tmp$ret$4;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp$ret$3;
          // Inline function 'org.jetbrains.skia.paragraph.Paragraph.<get-rectsForPlaceholders>.<anonymous>' call
          var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          var tmp$ret$2;
          // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
          var tmp0_fromInterop = org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForPlaceholders(this.i2m_1);
          var tmp1_fromInterop = Companion_getInstance_41();
          var size = tmp1_fromInterop.c2x(tmp0_fromInterop);
          var tmp_0 = 0;
          var tmp_1 = size;
          var tmp$ret$0;
          // Inline function 'kotlin.arrayOfNulls' call
          tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
          var tmp_2 = tmp$ret$0;
          while (tmp_0 < tmp_1) {
            var tmp_3 = tmp_0;
            var tmp$ret$1;
            // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop.<anonymous>' call
            tmp$ret$1 = tmp1_fromInterop.b2x(tmp0_fromInterop, tmp_3);
            tmp_2[tmp_3] = tmp$ret$1;
            tmp_0 = tmp_0 + 1 | 0;
          }
          var result = tmp_2;
          tmp1_fromInterop.d2x(tmp0_fromInterop);
          tmp$ret$2 = result;
          tmp$ret$3 = tmp$ret$2;
          tmp$ret$4 = tmp$ret$3;
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
          }
        }
      }
      tmp = tmp$ret$4;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Paragraph.prototype.y2y = function (dx, dy) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      var res = org_jetbrains_skia_paragraph_Paragraph__1nGetGlyphPositionAtCoordinate(this.i2m_1, dx, dy);
      tmp = res >= 0 ? new PositionWithAffinity(res, Affinity_DOWNSTREAM_getInstance()) : new PositionWithAffinity((-res | 0) - 1 | 0, Affinity_UPSTREAM_getInstance());
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Paragraph.prototype.z2y = function () {
    var tmp;
    try {
      var tmp_0;
      if (this.p2y_1 == null) {
        var tmp$ret$2;
        // Inline function 'kotlin.arrayOf' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = [];
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp_0 = tmp$ret$2;
      } else {
        Stats_getInstance().e2m();
        var tmp$ret$7;
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
            var tmp$ret$6;
            // Inline function 'org.jetbrains.skia.paragraph.Paragraph.<get-lineMetrics>.<anonymous>' call
            var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
            var tmp$ret$5;
            // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
            var tmp0_fromInterop = org_jetbrains_skia_paragraph_Paragraph__1nGetLineMetrics(this.i2m_1, getPtr(this.p2y_1));
            var tmp1_fromInterop = Companion_getInstance_35();
            var size = tmp1_fromInterop.c2x(tmp0_fromInterop);
            var tmp_1 = 0;
            var tmp_2 = size;
            var tmp$ret$3;
            // Inline function 'kotlin.arrayOfNulls' call
            tmp$ret$3 = fillArrayVal(Array(tmp_2), null);
            var tmp_3 = tmp$ret$3;
            while (tmp_1 < tmp_2) {
              var tmp_4 = tmp_1;
              var tmp$ret$4;
              // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop.<anonymous>' call
              tmp$ret$4 = tmp1_fromInterop.b2x(tmp0_fromInterop, tmp_4);
              tmp_3[tmp_4] = tmp$ret$4;
              tmp_1 = tmp_1 + 1 | 0;
            }
            var result = tmp_3;
            tmp1_fromInterop.d2x(tmp0_fromInterop);
            tmp$ret$5 = result;
            tmp$ret$6 = tmp$ret$5;
            tmp$ret$7 = tmp$ret$6;
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
              _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
            }
          }
        }
        tmp_0 = tmp$ret$7;
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(this.p2y_1);
    }
    return tmp;
  };
  Paragraph.prototype.a2z = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetLineNumber(this.i2m_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  Paragraph.$metadata$ = classMeta('Paragraph', undefined, undefined, undefined, undefined, Managed.prototype);
  function Companion_36() {
    Companion_instance_36 = this;
    Companion_getInstance_46().c2m();
  }
  Companion_36.$metadata$ = objectMeta('Companion');
  var Companion_instance_36;
  function Companion_getInstance_37() {
    if (Companion_instance_36 == null)
      new Companion_36();
    return Companion_instance_36;
  }
  function _FinalizerHolder_11() {
    _FinalizerHolder_instance_11 = this;
    this.b2z_1 = org_jetbrains_skia_paragraph_ParagraphBuilder__1nGetFinalizer();
  }
  _FinalizerHolder_11.$metadata$ = objectMeta('_FinalizerHolder');
  var _FinalizerHolder_instance_11;
  function _FinalizerHolder_getInstance_11() {
    if (_FinalizerHolder_instance_11 == null)
      new _FinalizerHolder_11();
    return _FinalizerHolder_instance_11;
  }
  function ParagraphBuilder(style, fc) {
    Companion_getInstance_37();
    var tmp = org_jetbrains_skia_paragraph_ParagraphBuilder__1nMake(getPtr(style), getPtr(fc));
    var tmp_0 = _FinalizerHolder_getInstance_11().b2z_1;
    Managed_init_$Init$(tmp, tmp_0, false, 4, null, this);
    this.e2z_1 = null;
    Stats_getInstance().e2m();
    reachabilityBarrier(style);
    reachabilityBarrier(fc);
  }
  ParagraphBuilder.prototype.f2z = function (style) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_paragraph_ParagraphBuilder__1nPushStyle(this.i2m_1, getPtr(style));
      tmp = this;
    }finally {
      reachabilityBarrier(style);
    }
    return tmp;
  };
  ParagraphBuilder.prototype.g2z = function (text) {
    Stats_getInstance().e2m();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddText(this.i2m_1, tmp0__anonymous__q1qw7t.d2t(text));
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
        }
      }
    }
    if (this.e2z_1 == null)
      this.e2z_1 = ManagedString_init_$Create$_0(text);
    else {
      ensureNotNull(this.e2z_1).j2t(text);
    }
    return this;
  };
  ParagraphBuilder.prototype.h2z = function (style) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddPlaceholder(this.i2m_1, style.i2z_1, style.j2z_1, style.n2z().t5_1, style.o2z().t5_1, style.m2z_1);
    return this;
  };
  ParagraphBuilder.prototype.h1h = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      var paragraph = new Paragraph(org_jetbrains_skia_paragraph_ParagraphBuilder__1nBuild(this.i2m_1), this.e2z_1);
      this.e2z_1 = null;
      tmp = paragraph;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  ParagraphBuilder.$metadata$ = classMeta('ParagraphBuilder', undefined, undefined, undefined, undefined, Managed.prototype);
  function Companion_37() {
    Companion_instance_37 = this;
    Companion_getInstance_46().c2m();
  }
  Companion_37.$metadata$ = objectMeta('Companion');
  var Companion_instance_37;
  function Companion_getInstance_38() {
    if (Companion_instance_37 == null)
      new Companion_37();
    return Companion_instance_37;
  }
  function _FinalizerHolder_12() {
    _FinalizerHolder_instance_12 = this;
    this.p2z_1 = org_jetbrains_skia_paragraph_ParagraphStyle__1nGetFinalizer();
  }
  _FinalizerHolder_12.$metadata$ = objectMeta('_FinalizerHolder');
  var _FinalizerHolder_instance_12;
  function _FinalizerHolder_getInstance_12() {
    if (_FinalizerHolder_instance_12 == null)
      new _FinalizerHolder_12();
    return _FinalizerHolder_instance_12;
  }
  function ParagraphStyle() {
    Companion_getInstance_38();
    var tmp = org_jetbrains_skia_paragraph_ParagraphStyle__1nMake();
    var tmp_0 = _FinalizerHolder_getInstance_12().p2z_1;
    Managed_init_$Init$(tmp, tmp_0, false, 4, null, this);
    Stats_getInstance().e2m();
  }
  ParagraphStyle.prototype.j2m = function (other) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = org_jetbrains_skia_paragraph_ParagraphStyle__1nEquals(this.i2m_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  ParagraphStyle.prototype.s2z = function (value) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetStrutStyle(this.i2m_1, getPtr(value));
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  ParagraphStyle.prototype.t2z = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = new StrutStyle(org_jetbrains_skia_paragraph_ParagraphStyle__1nGetStrutStyle(this.i2m_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  ParagraphStyle.prototype.u2z = function (value) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextStyle(this.i2m_1, getPtr(value));
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(value);
      reachabilityBarrier(this);
    }
    return tmp;
  };
  ParagraphStyle.prototype.v2z = function (value) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetDirection(this.i2m_1, value.t5_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  ParagraphStyle.prototype.w2z = function (value) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetAlignment(this.i2m_1, value.t5_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  ParagraphStyle.prototype.x2z = function (value) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetMaxLinesCount(this.i2m_1, value);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  ParagraphStyle.prototype.y2z = function (value) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      var tmp$ret$0;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_paragraph_ParagraphStyle__1nSetEllipsis(this.i2m_1, tmp0__anonymous__q1qw7t.d2t(value));
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
          }
        }
      }
      tmp = tmp$ret$0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  ParagraphStyle.prototype.z2z = function (value) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextIndent(this.i2m_1, value.a30_1, value.b30_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  ParagraphStyle.$metadata$ = classMeta('ParagraphStyle', undefined, undefined, undefined, undefined, Managed.prototype);
  var PlaceholderAlignment_BASELINE_instance;
  var PlaceholderAlignment_ABOVE_BASELINE_instance;
  var PlaceholderAlignment_BELOW_BASELINE_instance;
  var PlaceholderAlignment_TOP_instance;
  var PlaceholderAlignment_BOTTOM_instance;
  var PlaceholderAlignment_MIDDLE_instance;
  var PlaceholderAlignment_entriesInitialized;
  function PlaceholderAlignment_initEntries() {
    if (PlaceholderAlignment_entriesInitialized)
      return Unit_getInstance();
    PlaceholderAlignment_entriesInitialized = true;
    PlaceholderAlignment_BASELINE_instance = new PlaceholderAlignment('BASELINE', 0);
    PlaceholderAlignment_ABOVE_BASELINE_instance = new PlaceholderAlignment('ABOVE_BASELINE', 1);
    PlaceholderAlignment_BELOW_BASELINE_instance = new PlaceholderAlignment('BELOW_BASELINE', 2);
    PlaceholderAlignment_TOP_instance = new PlaceholderAlignment('TOP', 3);
    PlaceholderAlignment_BOTTOM_instance = new PlaceholderAlignment('BOTTOM', 4);
    PlaceholderAlignment_MIDDLE_instance = new PlaceholderAlignment('MIDDLE', 5);
  }
  function PlaceholderAlignment(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  PlaceholderAlignment.$metadata$ = classMeta('PlaceholderAlignment', undefined, undefined, undefined, undefined, Enum.prototype);
  function PlaceholderAlignment_ABOVE_BASELINE_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_ABOVE_BASELINE_instance;
  }
  function PlaceholderAlignment_TOP_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_TOP_instance;
  }
  function PlaceholderAlignment_BOTTOM_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_BOTTOM_instance;
  }
  function PlaceholderAlignment_MIDDLE_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_MIDDLE_instance;
  }
  function PlaceholderStyle(width, height, alignment, baselineMode, baseline) {
    this.i2z_1 = width;
    this.j2z_1 = height;
    this.k2z_1 = alignment;
    this.l2z_1 = baselineMode;
    this.m2z_1 = baseline;
  }
  PlaceholderStyle.prototype.n2z = function () {
    return this.k2z_1;
  };
  PlaceholderStyle.prototype.o2z = function () {
    return this.l2z_1;
  };
  PlaceholderStyle.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof PlaceholderStyle))
      return false;
    if (!(compareTo(this.i2z_1, other.i2z_1) === 0))
      return false;
    if (!(compareTo(this.j2z_1, other.j2z_1) === 0))
      return false;
    if (!(compareTo(this.m2z_1, other.m2z_1) === 0))
      return false;
    if (!this.n2z().equals(other.n2z()))
      return false;
    return this.o2z().equals(other.o2z());
  };
  PlaceholderStyle.prototype.hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.i2z_1) | 0;
    result = imul(result, PRIME) + toBits(this.j2z_1) | 0;
    result = imul(result, PRIME) + toBits(this.m2z_1) | 0;
    result = imul(result, PRIME) + this.n2z().hashCode() | 0;
    result = imul(result, PRIME) + this.o2z().hashCode() | 0;
    return result;
  };
  PlaceholderStyle.prototype.toString = function () {
    return 'PlaceholderStyle(_width=' + this.i2z_1 + ', _height=' + this.j2z_1 + ', _alignment=' + this.n2z() + ', _baselineMode=' + this.o2z() + ', _baseline=' + this.m2z_1 + ')';
  };
  PlaceholderStyle.$metadata$ = classMeta('PlaceholderStyle');
  function PositionWithAffinity(position, affinity) {
    this.c30_1 = position;
    this.d30_1 = affinity;
  }
  PositionWithAffinity.prototype.e30 = function () {
    return this.d30_1;
  };
  PositionWithAffinity.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof PositionWithAffinity))
      return false;
    if (!(this.c30_1 === other.c30_1))
      return false;
    return this.e30().equals(other.e30());
  };
  PositionWithAffinity.prototype.hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.c30_1 | 0;
    result = imul(result, PRIME) + this.e30().hashCode() | 0;
    return result;
  };
  PositionWithAffinity.prototype.toString = function () {
    return 'PositionWithAffinity(_position=' + this.c30_1 + ', _affinity=' + this.e30() + ')';
  };
  PositionWithAffinity.$metadata$ = classMeta('PositionWithAffinity');
  var RectHeightMode_TIGHT_instance;
  var RectHeightMode_MAX_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_MIDDLE_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_TOP_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_BOTTOM_instance;
  var RectHeightMode_STRUT_instance;
  var RectHeightMode_entriesInitialized;
  function RectHeightMode_initEntries() {
    if (RectHeightMode_entriesInitialized)
      return Unit_getInstance();
    RectHeightMode_entriesInitialized = true;
    RectHeightMode_TIGHT_instance = new RectHeightMode('TIGHT', 0);
    RectHeightMode_MAX_instance = new RectHeightMode('MAX', 1);
    RectHeightMode_INCLUDE_LINE_SPACING_MIDDLE_instance = new RectHeightMode('INCLUDE_LINE_SPACING_MIDDLE', 2);
    RectHeightMode_INCLUDE_LINE_SPACING_TOP_instance = new RectHeightMode('INCLUDE_LINE_SPACING_TOP', 3);
    RectHeightMode_INCLUDE_LINE_SPACING_BOTTOM_instance = new RectHeightMode('INCLUDE_LINE_SPACING_BOTTOM', 4);
    RectHeightMode_STRUT_instance = new RectHeightMode('STRUT', 5);
  }
  function RectHeightMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  RectHeightMode.$metadata$ = classMeta('RectHeightMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function RectHeightMode_MAX_getInstance() {
    RectHeightMode_initEntries();
    return RectHeightMode_MAX_instance;
  }
  function RectHeightMode_STRUT_getInstance() {
    RectHeightMode_initEntries();
    return RectHeightMode_STRUT_instance;
  }
  var RectWidthMode_TIGHT_instance;
  var RectWidthMode_MAX_instance;
  var RectWidthMode_entriesInitialized;
  function RectWidthMode_initEntries() {
    if (RectWidthMode_entriesInitialized)
      return Unit_getInstance();
    RectWidthMode_entriesInitialized = true;
    RectWidthMode_TIGHT_instance = new RectWidthMode('TIGHT', 0);
    RectWidthMode_MAX_instance = new RectWidthMode('MAX', 1);
  }
  function RectWidthMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  RectWidthMode.$metadata$ = classMeta('RectWidthMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function RectWidthMode_TIGHT_getInstance() {
    RectWidthMode_initEntries();
    return RectWidthMode_TIGHT_instance;
  }
  function Companion_38() {
    Companion_instance_38 = this;
  }
  Companion_38.$metadata$ = objectMeta('Companion');
  var Companion_instance_38;
  function Companion_getInstance_39() {
    if (Companion_instance_38 == null)
      new Companion_38();
    return Companion_instance_38;
  }
  function Shadow(color, offsetX, offsetY, blurSigma) {
    Companion_getInstance_39();
    this.f30_1 = color;
    this.g30_1 = offsetX;
    this.h30_1 = offsetY;
    this.i30_1 = blurSigma;
  }
  Shadow.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!(this.f30_1 === other.f30_1))
      return false;
    if (!(compareTo(this.g30_1, other.g30_1) === 0))
      return false;
    if (!(compareTo(this.h30_1, other.h30_1) === 0))
      return false;
    return compareTo(this.i30_1, other.i30_1) === 0;
  };
  Shadow.prototype.hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.f30_1 | 0;
    result = imul(result, PRIME) + toBits(this.g30_1) | 0;
    result = imul(result, PRIME) + toBits(this.h30_1) | 0;
    var blurSigma = toBits_0(this.i30_1);
    result = imul(result, PRIME) + blurSigma.z7(32).d8(blurSigma).b7() | 0;
    return result;
  };
  Shadow.prototype.toString = function () {
    return 'Shadow(_color=' + this.f30_1 + ', _offsetX=' + this.g30_1 + ', _offsetY=' + this.h30_1 + ', _blurSigma=' + this.i30_1 + ')';
  };
  Shadow.$metadata$ = classMeta('Shadow');
  function Companion_39() {
    Companion_instance_39 = this;
    Companion_getInstance_46().c2m();
  }
  Companion_39.$metadata$ = objectMeta('Companion');
  var Companion_instance_39;
  function Companion_getInstance_40() {
    if (Companion_instance_39 == null)
      new Companion_39();
    return Companion_instance_39;
  }
  function StrutStyle_init_$Init$($this) {
    StrutStyle.call($this, org_jetbrains_skia_paragraph_StrutStyle__1nMake());
    Stats_getInstance().e2m();
    return $this;
  }
  function StrutStyle_init_$Create$() {
    return StrutStyle_init_$Init$(Object.create(StrutStyle.prototype));
  }
  function _FinalizerHolder_13() {
    _FinalizerHolder_instance_13 = this;
    this.j30_1 = org_jetbrains_skia_paragraph_StrutStyle__1nGetFinalizer();
  }
  _FinalizerHolder_13.$metadata$ = objectMeta('_FinalizerHolder');
  var _FinalizerHolder_instance_13;
  function _FinalizerHolder_getInstance_13() {
    if (_FinalizerHolder_instance_13 == null)
      new _FinalizerHolder_13();
    return _FinalizerHolder_instance_13;
  }
  function StrutStyle(ptr) {
    Companion_getInstance_40();
    var tmp = _FinalizerHolder_getInstance_13().j30_1;
    Managed_init_$Init$(ptr, tmp, false, 4, null, this);
  }
  StrutStyle.prototype.j2m = function (other) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nEquals(this.i2m_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  StrutStyle.prototype.m30 = function (value) {
    this.n30(value);
  };
  StrutStyle.prototype.o30 = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nGetFontSize(this.i2m_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  StrutStyle.prototype.n30 = function (value) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_paragraph_StrutStyle__1nSetFontSize(this.i2m_1, value);
    return this;
  };
  StrutStyle.prototype.p30 = function (value) {
    this.q30(value);
  };
  StrutStyle.prototype.b2j = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nGetHeight(this.i2m_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  StrutStyle.prototype.q30 = function (value) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_paragraph_StrutStyle__1nSetHeight(this.i2m_1, value);
    return this;
  };
  StrutStyle.prototype.r30 = function (value) {
    this.s30(value);
  };
  StrutStyle.prototype.t30 = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nIsEnabled(this.i2m_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  StrutStyle.prototype.s30 = function (value) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_paragraph_StrutStyle__1nSetEnabled(this.i2m_1, value);
    return this;
  };
  StrutStyle.prototype.u30 = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightForced(this.i2m_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  StrutStyle.prototype.v30 = function (value) {
    this.w30(value);
  };
  StrutStyle.prototype.x30 = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightOverridden(this.i2m_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  StrutStyle.prototype.w30 = function (value) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_paragraph_StrutStyle__1nSetHeightOverridden(this.i2m_1, value);
    return this;
  };
  StrutStyle.$metadata$ = classMeta('StrutStyle', undefined, undefined, undefined, undefined, Managed.prototype);
  function TextBox_init_$Init$(l, t, r, b, direction, $this) {
    TextBox.call($this, Companion_getInstance_30().i2w(l, t, r, b), values_4()[direction]);
    return $this;
  }
  function TextBox_init_$Create$(l, t, r, b, direction) {
    return TextBox_init_$Init$(l, t, r, b, direction, Object.create(TextBox.prototype));
  }
  function Companion_40() {
    Companion_instance_40 = this;
  }
  Companion_40.prototype.b2x = function (array, index) {
    var rect = new Float32Array(4);
    var direction = new Int32Array(1);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var rectPtr = tmp0__anonymous__q1qw7t.c2o(rect);
        var directionPtr = tmp0__anonymous__q1qw7t.u2x(direction);
        org_jetbrains_skia_paragraph_TextBox__1nGetArrayElement(array, index, rectPtr, directionPtr);
        tmp0__anonymous__q1qw7t.o2r(rectPtr, rect);
        tmp0__anonymous__q1qw7t.c2t(directionPtr, direction);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
        }
      }
    }
    return TextBox_init_$Create$(rect[0], rect[1], rect[2], rect[3], direction[0]);
  };
  Companion_40.prototype.c2x = function (array) {
    return org_jetbrains_skia_paragraph_TextBox__1nGetArraySize(array);
  };
  Companion_40.prototype.d2x = function (array) {
    return org_jetbrains_skia_paragraph_TextBox__1nDisposeArray(array);
  };
  Companion_40.$metadata$ = objectMeta('Companion', [ArrayInteropDecoder]);
  var Companion_instance_40;
  function Companion_getInstance_41() {
    if (Companion_instance_40 == null)
      new Companion_40();
    return Companion_instance_40;
  }
  function TextBox(rect, direction) {
    Companion_getInstance_41();
    this.y30_1 = rect;
    this.z30_1 = direction;
  }
  TextBox.prototype.a31 = function () {
    return this.y30_1;
  };
  TextBox.prototype.b31 = function () {
    return this.z30_1;
  };
  TextBox.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof TextBox))
      return false;
    if (!this.y30_1.equals(other.y30_1))
      return false;
    return this.b31().equals(other.b31());
  };
  TextBox.prototype.hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.y30_1.hashCode() | 0;
    result = imul(result, PRIME) + this.b31().hashCode() | 0;
    return result;
  };
  TextBox.prototype.toString = function () {
    return 'TextBox(_rect=' + this.y30_1 + ', _direction=' + this.b31() + ')';
  };
  TextBox.$metadata$ = classMeta('TextBox');
  function TextIndent(firstLine, restLine) {
    this.a30_1 = firstLine;
    this.b30_1 = restLine;
  }
  TextIndent.prototype.toString = function () {
    return 'TextIndent(firstLine=' + this.a30_1 + ', restLine=' + this.b30_1 + ')';
  };
  TextIndent.prototype.hashCode = function () {
    var result = getNumberHashCode(this.a30_1);
    result = imul(result, 31) + getNumberHashCode(this.b30_1) | 0;
    return result;
  };
  TextIndent.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent))
      return false;
    var tmp0_other_with_cast = other instanceof TextIndent ? other : THROW_CCE();
    if (!equals(this.a30_1, tmp0_other_with_cast.a30_1))
      return false;
    if (!equals(this.b30_1, tmp0_other_with_cast.b30_1))
      return false;
    return true;
  };
  TextIndent.$metadata$ = classMeta('TextIndent');
  function Companion_41() {
    Companion_instance_41 = this;
    Companion_getInstance_46().c2m();
  }
  Companion_41.$metadata$ = objectMeta('Companion');
  var Companion_instance_41;
  function Companion_getInstance_42() {
    if (Companion_instance_41 == null)
      new Companion_41();
    return Companion_instance_41;
  }
  function TextStyle_init_$Init$($this) {
    TextStyle.call($this, org_jetbrains_skia_paragraph_TextStyle__1nMake());
    Stats_getInstance().e2m();
    return $this;
  }
  function TextStyle_init_$Create$() {
    return TextStyle_init_$Init$(Object.create(TextStyle.prototype));
  }
  function _FinalizerHolder_14() {
    _FinalizerHolder_instance_14 = this;
    this.c31_1 = org_jetbrains_skia_paragraph_TextStyle__1nGetFinalizer();
  }
  _FinalizerHolder_14.$metadata$ = objectMeta('_FinalizerHolder');
  var _FinalizerHolder_instance_14;
  function _FinalizerHolder_getInstance_14() {
    if (_FinalizerHolder_instance_14 == null)
      new _FinalizerHolder_14();
    return _FinalizerHolder_instance_14;
  }
  function TextStyle$_get_fontMetrics_$lambda_9osnwy(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_paragraph_TextStyle__1nGetFontMetrics(this$0.i2m_1, it);
      return Unit_getInstance();
    };
  }
  function TextStyle(ptr) {
    Companion_getInstance_42();
    var tmp = _FinalizerHolder_getInstance_14().c31_1;
    Managed_init_$Init$(ptr, tmp, false, 4, null, this);
  }
  TextStyle.prototype.j2m = function (other) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = org_jetbrains_skia_paragraph_TextStyle__1nEquals(this.i2m_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  TextStyle.prototype.q2t = function (value) {
    this.f31(value);
  };
  TextStyle.prototype.f31 = function (color) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_paragraph_TextStyle__1nSetColor(this.i2m_1, color);
    return this;
  };
  TextStyle.prototype.g31 = function (value) {
    this.h31(value);
  };
  TextStyle.prototype.h31 = function (paint) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      org_jetbrains_skia_paragraph_TextStyle__1nSetBackground(this.i2m_1, getPtr(paint));
      tmp = this;
    }finally {
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  TextStyle.prototype.i31 = function (value) {
    this.j31(value);
  };
  TextStyle.prototype.j31 = function (d) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_paragraph_TextStyle__1nSetDecorationStyle(this.i2m_1, d.f2x_1, d.g2x_1, d.h2x_1, d.i2x_1, d.j2x_1, d.k2x_1.t5_1, d.l2x_1);
    return this;
  };
  TextStyle.prototype.k31 = function (value) {
    this.l31(value);
  };
  TextStyle.prototype.m31 = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      tmp = FontStyle_init_$Create$_0(org_jetbrains_skia_paragraph_TextStyle__1nGetFontStyle(this.i2m_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  TextStyle.prototype.l31 = function (s) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_paragraph_TextStyle__1nSetFontStyle(this.i2m_1, s.q2r_1);
    return this;
  };
  TextStyle.prototype.n31 = function (s) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_paragraph_TextStyle__1nAddShadow(this.i2m_1, s.f30_1, s.g30_1, s.h30_1, s.i30_1);
    return this;
  };
  TextStyle.prototype.o31 = function (f) {
    Stats_getInstance().e2m();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_paragraph_TextStyle__1nAddFontFeature(this.i2m_1, tmp0__anonymous__q1qw7t.d2t(f.w2q()), f.t2q_1);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
        }
      }
    }
    return this;
  };
  TextStyle.prototype.p31 = function (FontFeatures) {
    var indexedObject = FontFeatures;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var s = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this.o31(s);
    }
    return this;
  };
  TextStyle.prototype.m30 = function (value) {
    this.n30(value);
  };
  TextStyle.prototype.n30 = function (size) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_paragraph_TextStyle__1nSetFontSize(this.i2m_1, size);
    return this;
  };
  TextStyle.prototype.q31 = function (value) {
    this.r31(value);
  };
  TextStyle.prototype.r31 = function (families) {
    Stats_getInstance().e2m();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var tmp = this.i2m_1;
        var tmp_0 = tmp0__anonymous__q1qw7t.t2x(families);
        var tmp0_safe_receiver = families;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.length;
        org_jetbrains_skia_paragraph_TextStyle__1nSetFontFamilies(tmp, tmp_0, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
        }
      }
    }
    return this;
  };
  TextStyle.prototype.s31 = function (value) {
    this.t31(value);
  };
  TextStyle.prototype.t31 = function (letterSpacing) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_paragraph_TextStyle__1nSetLetterSpacing(this.i2m_1, letterSpacing);
    return this;
  };
  TextStyle.prototype.u31 = function (value) {
    this.v31(value);
  };
  TextStyle.prototype.v31 = function (baselineShift) {
    Stats_getInstance().e2m();
    org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineShift(this.i2m_1, baselineShift);
    return this;
  };
  TextStyle.prototype.w31 = function () {
    var tmp;
    try {
      Stats_getInstance().e2m();
      var tmp_0 = Companion_getInstance_11();
      tmp = fromInteropPointer(tmp_0, TextStyle$_get_fontMetrics_$lambda_9osnwy(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  TextStyle.$metadata$ = classMeta('TextStyle', undefined, undefined, undefined, undefined, Managed.prototype);
  function Companion_42() {
    Companion_instance_42 = this;
    Companion_getInstance_46().c2m();
  }
  Companion_42.$metadata$ = objectMeta('Companion');
  var Companion_instance_42;
  function Companion_getInstance_43() {
    if (Companion_instance_42 == null)
      new Companion_42();
    return Companion_instance_42;
  }
  function TypefaceFontProvider() {
    Companion_getInstance_43();
    FontMgr_init_$Init$(org_jetbrains_skia_paragraph_TypefaceFontProvider__1nMake(), this);
    Stats_getInstance().e2m();
  }
  TypefaceFontProvider.prototype.z31 = function (typeface, alias) {
    var tmp;
    try {
      Stats_getInstance().e2m();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp$ret$0;
          // Inline function 'org.jetbrains.skia.paragraph.TypefaceFontProvider.registerTypeface.<anonymous>' call
          var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          tmp$ret$0 = org_jetbrains_skia_paragraph_TypefaceFontProvider__1nRegisterTypeface(this.i2m_1, getPtr(typeface), tmp0__anonymous__q1qw7t.d2t(alias));
          tmp$ret$1 = tmp$ret$0;
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(typeface);
    }
    return tmp;
  };
  TypefaceFontProvider.$metadata$ = classMeta('TypefaceFontProvider', undefined, undefined, undefined, undefined, FontMgr.prototype);
  function SkikoKeyboardEvent(key, modifiers, kind, timestamp, platform) {
    this.a32_1 = key;
    this.b32_1 = modifiers;
    this.c32_1 = kind;
    this.d32_1 = timestamp;
    this.e32_1 = platform;
  }
  SkikoKeyboardEvent.prototype.toString = function () {
    return 'SkikoKeyboardEvent(key=' + this.a32_1 + ', modifiers=' + new SkikoInputModifiers(this.b32_1) + ', kind=' + this.c32_1 + ', timestamp=' + toString(this.d32_1) + ', platform=' + this.e32_1 + ')';
  };
  SkikoKeyboardEvent.prototype.hashCode = function () {
    var result = this.a32_1.hashCode();
    result = imul(result, 31) + SkikoInputModifiers__hashCode_impl_dkoeid(this.b32_1) | 0;
    result = imul(result, 31) + this.c32_1.hashCode() | 0;
    result = imul(result, 31) + this.d32_1.hashCode() | 0;
    result = imul(result, 31) + (this.e32_1 == null ? 0 : hashCode(this.e32_1)) | 0;
    return result;
  };
  SkikoKeyboardEvent.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkikoKeyboardEvent))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoKeyboardEvent ? other : THROW_CCE();
    if (!this.a32_1.equals(tmp0_other_with_cast.a32_1))
      return false;
    if (!equals(new SkikoInputModifiers(this.b32_1), new SkikoInputModifiers(tmp0_other_with_cast.b32_1)))
      return false;
    if (!this.c32_1.equals(tmp0_other_with_cast.c32_1))
      return false;
    if (!this.d32_1.equals(tmp0_other_with_cast.d32_1))
      return false;
    if (!equals(this.e32_1, tmp0_other_with_cast.e32_1))
      return false;
    return true;
  };
  SkikoKeyboardEvent.$metadata$ = classMeta('SkikoKeyboardEvent');
  function _SkikoInputModifiers___init__impl__z8g2zy(value) {
    return value;
  }
  function _SkikoInputModifiers___get_value__impl__13eq4a($this) {
    return $this;
  }
  function Companion_43() {
    Companion_instance_43 = this;
    this.f32_1 = _SkikoInputModifiers___init__impl__z8g2zy(0);
    this.g32_1 = _SkikoInputModifiers___init__impl__z8g2zy(1);
    this.h32_1 = _SkikoInputModifiers___init__impl__z8g2zy(2);
    this.i32_1 = _SkikoInputModifiers___init__impl__z8g2zy(4);
    this.j32_1 = _SkikoInputModifiers___init__impl__z8g2zy(8);
  }
  Companion_43.prototype.k32 = function () {
    return this.g32_1;
  };
  Companion_43.prototype.l32 = function () {
    return this.h32_1;
  };
  Companion_43.prototype.m32 = function () {
    return this.i32_1;
  };
  Companion_43.prototype.n32 = function () {
    return this.j32_1;
  };
  Companion_43.$metadata$ = objectMeta('Companion');
  var Companion_instance_43;
  function Companion_getInstance_44() {
    if (Companion_instance_43 == null)
      new Companion_43();
    return Companion_instance_43;
  }
  function SkikoInputModifiers__has_impl_qg30o6($this, value) {
    if (!((_SkikoInputModifiers___get_value__impl__13eq4a(value) & _SkikoInputModifiers___get_value__impl__13eq4a($this)) === 0)) {
      return true;
    }
    return false;
  }
  function SkikoInputModifiers__toString_impl_86hiai($this) {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var tmp0_apply = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skiko.SkikoInputModifiers.toString.<anonymous>' call
    if (SkikoInputModifiers__has_impl_qg30o6($this, Companion_getInstance_44().g32_1)) {
      tmp0_apply.a('META');
    }
    if (SkikoInputModifiers__has_impl_qg30o6($this, Companion_getInstance_44().h32_1)) {
      tmp0_apply.a('CONTROL');
    }
    if (SkikoInputModifiers__has_impl_qg30o6($this, Companion_getInstance_44().i32_1)) {
      tmp0_apply.a('ALT');
    }
    if (SkikoInputModifiers__has_impl_qg30o6($this, Companion_getInstance_44().j32_1)) {
      tmp0_apply.a('SHIFT');
    }
    tmp$ret$1 = tmp0_apply;
    var result = tmp$ret$1;
    return !result.h() ? toString(result) : '';
  }
  function SkikoInputModifiers__hashCode_impl_dkoeid($this) {
    return $this;
  }
  function SkikoInputModifiers__equals_impl_tcfkiv($this, other) {
    if (!(other instanceof SkikoInputModifiers))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoInputModifiers ? other.o32_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function SkikoInputModifiers(value) {
    Companion_getInstance_44();
    this.o32_1 = value;
  }
  SkikoInputModifiers.prototype.toString = function () {
    return SkikoInputModifiers__toString_impl_86hiai(this.o32_1);
  };
  SkikoInputModifiers.prototype.hashCode = function () {
    return SkikoInputModifiers__hashCode_impl_dkoeid(this.o32_1);
  };
  SkikoInputModifiers.prototype.equals = function (other) {
    return SkikoInputModifiers__equals_impl_tcfkiv(this.o32_1, other);
  };
  SkikoInputModifiers.$metadata$ = classMeta('SkikoInputModifiers');
  var SkikoKeyboardEventKind_UP_instance;
  var SkikoKeyboardEventKind_DOWN_instance;
  var SkikoKeyboardEventKind_TYPE_instance;
  var SkikoKeyboardEventKind_UNKNOWN_instance;
  var SkikoKeyboardEventKind_entriesInitialized;
  function SkikoKeyboardEventKind_initEntries() {
    if (SkikoKeyboardEventKind_entriesInitialized)
      return Unit_getInstance();
    SkikoKeyboardEventKind_entriesInitialized = true;
    SkikoKeyboardEventKind_UP_instance = new SkikoKeyboardEventKind('UP', 0);
    SkikoKeyboardEventKind_DOWN_instance = new SkikoKeyboardEventKind('DOWN', 1);
    SkikoKeyboardEventKind_TYPE_instance = new SkikoKeyboardEventKind('TYPE', 2);
    SkikoKeyboardEventKind_UNKNOWN_instance = new SkikoKeyboardEventKind('UNKNOWN', 3);
  }
  function SkikoKeyboardEventKind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  SkikoKeyboardEventKind.$metadata$ = classMeta('SkikoKeyboardEventKind', undefined, undefined, undefined, undefined, Enum.prototype);
  function SkikoInputEvent(input, key, modifiers, kind, platform) {
    this.p32_1 = input;
    this.q32_1 = key;
    this.r32_1 = modifiers;
    this.s32_1 = kind;
    this.t32_1 = platform;
  }
  SkikoInputEvent.prototype.toString = function () {
    return 'SkikoInputEvent(input=' + this.p32_1 + ', key=' + this.q32_1 + ', modifiers=' + new SkikoInputModifiers(this.r32_1) + ', kind=' + this.s32_1 + ', platform=' + this.t32_1 + ')';
  };
  SkikoInputEvent.prototype.hashCode = function () {
    var result = getStringHashCode(this.p32_1);
    result = imul(result, 31) + this.q32_1.hashCode() | 0;
    result = imul(result, 31) + SkikoInputModifiers__hashCode_impl_dkoeid(this.r32_1) | 0;
    result = imul(result, 31) + this.s32_1.hashCode() | 0;
    result = imul(result, 31) + (this.t32_1 == null ? 0 : hashCode(this.t32_1)) | 0;
    return result;
  };
  SkikoInputEvent.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkikoInputEvent))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoInputEvent ? other : THROW_CCE();
    if (!(this.p32_1 === tmp0_other_with_cast.p32_1))
      return false;
    if (!this.q32_1.equals(tmp0_other_with_cast.q32_1))
      return false;
    if (!equals(new SkikoInputModifiers(this.r32_1), new SkikoInputModifiers(tmp0_other_with_cast.r32_1)))
      return false;
    if (!this.s32_1.equals(tmp0_other_with_cast.s32_1))
      return false;
    if (!equals(this.t32_1, tmp0_other_with_cast.t32_1))
      return false;
    return true;
  };
  SkikoInputEvent.$metadata$ = classMeta('SkikoInputEvent');
  function SkikoPointerEvent_init_$Init$(x, y, deltaX, deltaY, pressedButtons, button, modifiers, kind, timestamp, platform, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      deltaX = 0.0;
    if (!(($mask0 & 8) === 0))
      deltaY = 0.0;
    if (!(($mask0 & 16) === 0))
      pressedButtons = Companion_getInstance_45().u32_1;
    if (!(($mask0 & 32) === 0))
      button = Companion_getInstance_45().u32_1;
    if (!(($mask0 & 64) === 0))
      modifiers = Companion_getInstance_44().f32_1;
    if (!(($mask0 & 256) === 0))
      timestamp = new Long(0, 0);
    SkikoPointerEvent.call($this, x, y, deltaX, deltaY, pressedButtons, button, modifiers, kind, timestamp, platform);
    return $this;
  }
  function SkikoPointerEvent_init_$Create$(x, y, deltaX, deltaY, pressedButtons, button, modifiers, kind, timestamp, platform, $mask0, $marker) {
    return SkikoPointerEvent_init_$Init$(x, y, deltaX, deltaY, pressedButtons, button, modifiers, kind, timestamp, platform, $mask0, $marker, Object.create(SkikoPointerEvent.prototype));
  }
  function SkikoPointerEvent(x, y, deltaX, deltaY, pressedButtons, button, modifiers, kind, timestamp, platform) {
    this.g33_1 = x;
    this.h33_1 = y;
    this.i33_1 = deltaX;
    this.j33_1 = deltaY;
    this.k33_1 = pressedButtons;
    this.l33_1 = button;
    this.m33_1 = modifiers;
    this.n33_1 = kind;
    this.o33_1 = timestamp;
    this.p33_1 = platform;
  }
  SkikoPointerEvent.prototype.toString = function () {
    return 'SkikoPointerEvent(x=' + this.g33_1 + ', y=' + this.h33_1 + ', deltaX=' + this.i33_1 + ', deltaY=' + this.j33_1 + ', pressedButtons=' + new SkikoMouseButtons(this.k33_1) + ', button=' + new SkikoMouseButtons(this.l33_1) + ', modifiers=' + new SkikoInputModifiers(this.m33_1) + ', kind=' + this.n33_1 + ', timestamp=' + toString(this.o33_1) + ', platform=' + this.p33_1 + ')';
  };
  SkikoPointerEvent.prototype.hashCode = function () {
    var result = getNumberHashCode(this.g33_1);
    result = imul(result, 31) + getNumberHashCode(this.h33_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.i33_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.j33_1) | 0;
    result = imul(result, 31) + SkikoMouseButtons__hashCode_impl_7jywqn(this.k33_1) | 0;
    result = imul(result, 31) + SkikoMouseButtons__hashCode_impl_7jywqn(this.l33_1) | 0;
    result = imul(result, 31) + SkikoInputModifiers__hashCode_impl_dkoeid(this.m33_1) | 0;
    result = imul(result, 31) + this.n33_1.hashCode() | 0;
    result = imul(result, 31) + this.o33_1.hashCode() | 0;
    result = imul(result, 31) + (this.p33_1 == null ? 0 : hashCode(this.p33_1)) | 0;
    return result;
  };
  SkikoPointerEvent.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkikoPointerEvent))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoPointerEvent ? other : THROW_CCE();
    if (!equals(this.g33_1, tmp0_other_with_cast.g33_1))
      return false;
    if (!equals(this.h33_1, tmp0_other_with_cast.h33_1))
      return false;
    if (!equals(this.i33_1, tmp0_other_with_cast.i33_1))
      return false;
    if (!equals(this.j33_1, tmp0_other_with_cast.j33_1))
      return false;
    if (!equals(new SkikoMouseButtons(this.k33_1), new SkikoMouseButtons(tmp0_other_with_cast.k33_1)))
      return false;
    if (!equals(new SkikoMouseButtons(this.l33_1), new SkikoMouseButtons(tmp0_other_with_cast.l33_1)))
      return false;
    if (!equals(new SkikoInputModifiers(this.m33_1), new SkikoInputModifiers(tmp0_other_with_cast.m33_1)))
      return false;
    if (!this.n33_1.equals(tmp0_other_with_cast.n33_1))
      return false;
    if (!this.o33_1.equals(tmp0_other_with_cast.o33_1))
      return false;
    if (!equals(this.p33_1, tmp0_other_with_cast.p33_1))
      return false;
    return true;
  };
  SkikoPointerEvent.$metadata$ = classMeta('SkikoPointerEvent');
  var SkikoPointerEventKind_UP_instance;
  var SkikoPointerEventKind_DOWN_instance;
  var SkikoPointerEventKind_MOVE_instance;
  var SkikoPointerEventKind_DRAG_instance;
  var SkikoPointerEventKind_SCROLL_instance;
  var SkikoPointerEventKind_ENTER_instance;
  var SkikoPointerEventKind_EXIT_instance;
  var SkikoPointerEventKind_UNKNOWN_instance;
  var SkikoPointerEventKind_entriesInitialized;
  function SkikoPointerEventKind_initEntries() {
    if (SkikoPointerEventKind_entriesInitialized)
      return Unit_getInstance();
    SkikoPointerEventKind_entriesInitialized = true;
    SkikoPointerEventKind_UP_instance = new SkikoPointerEventKind('UP', 0);
    SkikoPointerEventKind_DOWN_instance = new SkikoPointerEventKind('DOWN', 1);
    SkikoPointerEventKind_MOVE_instance = new SkikoPointerEventKind('MOVE', 2);
    SkikoPointerEventKind_DRAG_instance = new SkikoPointerEventKind('DRAG', 3);
    SkikoPointerEventKind_SCROLL_instance = new SkikoPointerEventKind('SCROLL', 4);
    SkikoPointerEventKind_ENTER_instance = new SkikoPointerEventKind('ENTER', 5);
    SkikoPointerEventKind_EXIT_instance = new SkikoPointerEventKind('EXIT', 6);
    SkikoPointerEventKind_UNKNOWN_instance = new SkikoPointerEventKind('UNKNOWN', 7);
  }
  function SkikoPointerEventKind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  SkikoPointerEventKind.$metadata$ = classMeta('SkikoPointerEventKind', undefined, undefined, undefined, undefined, Enum.prototype);
  function _SkikoMouseButtons___init__impl__kylsco(value) {
    return value;
  }
  function _SkikoMouseButtons___get_value__impl__ltkvwc($this) {
    return $this;
  }
  function Companion_44() {
    Companion_instance_44 = this;
    this.u32_1 = _SkikoMouseButtons___init__impl__kylsco(0);
    this.v32_1 = _SkikoMouseButtons___init__impl__kylsco(1);
    this.w32_1 = _SkikoMouseButtons___init__impl__kylsco(2);
    this.x32_1 = _SkikoMouseButtons___init__impl__kylsco(4);
    this.y32_1 = _SkikoMouseButtons___init__impl__kylsco(1);
    this.z32_1 = _SkikoMouseButtons___init__impl__kylsco(2);
    this.a33_1 = _SkikoMouseButtons___init__impl__kylsco(4);
    this.b33_1 = _SkikoMouseButtons___init__impl__kylsco(8);
    this.c33_1 = _SkikoMouseButtons___init__impl__kylsco(16);
    this.d33_1 = _SkikoMouseButtons___init__impl__kylsco(32);
    this.e33_1 = _SkikoMouseButtons___init__impl__kylsco(64);
    this.f33_1 = _SkikoMouseButtons___init__impl__kylsco(128);
  }
  Companion_44.prototype.q33 = function () {
    return this.v32_1;
  };
  Companion_44.prototype.r33 = function () {
    return this.w32_1;
  };
  Companion_44.prototype.s33 = function () {
    return this.x32_1;
  };
  Companion_44.prototype.t33 = function () {
    return this.b33_1;
  };
  Companion_44.prototype.u33 = function () {
    return this.c33_1;
  };
  Companion_44.prototype.v33 = function () {
    return this.d33_1;
  };
  Companion_44.prototype.w33 = function () {
    return this.e33_1;
  };
  Companion_44.prototype.x33 = function () {
    return this.f33_1;
  };
  Companion_44.$metadata$ = objectMeta('Companion');
  var Companion_instance_44;
  function Companion_getInstance_45() {
    if (Companion_instance_44 == null)
      new Companion_44();
    return Companion_instance_44;
  }
  function SkikoMouseButtons__has_impl_481exw($this, value) {
    if (!((_SkikoMouseButtons___get_value__impl__ltkvwc(value) & _SkikoMouseButtons___get_value__impl__ltkvwc($this)) === 0)) {
      return true;
    }
    return false;
  }
  function SkikoMouseButtons__toString_impl_e77028($this) {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var tmp0_apply = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skiko.SkikoMouseButtons.toString.<anonymous>' call
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_45().v32_1)) {
      tmp0_apply.a('LEFT');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_45().w32_1)) {
      tmp0_apply.a('RIGHT');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_45().x32_1)) {
      tmp0_apply.a('MIDDLE');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_45().b33_1)) {
      tmp0_apply.a('BUTTON_4');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_45().c33_1)) {
      tmp0_apply.a('BUTTON_5');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_45().d33_1)) {
      tmp0_apply.a('BUTTON_6');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_45().e33_1)) {
      tmp0_apply.a('BUTTON_7');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_45().f33_1)) {
      tmp0_apply.a('BUTTON_8');
    }
    tmp$ret$1 = tmp0_apply;
    var result = tmp$ret$1;
    return !result.h() ? toString(result) : '';
  }
  function SkikoMouseButtons__hashCode_impl_7jywqn($this) {
    return $this;
  }
  function SkikoMouseButtons__equals_impl_jnid9f($this, other) {
    if (!(other instanceof SkikoMouseButtons))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoMouseButtons ? other.y33_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function SkikoMouseButtons(value) {
    Companion_getInstance_45();
    this.y33_1 = value;
  }
  SkikoMouseButtons.prototype.toString = function () {
    return SkikoMouseButtons__toString_impl_e77028(this.y33_1);
  };
  SkikoMouseButtons.prototype.hashCode = function () {
    return SkikoMouseButtons__hashCode_impl_7jywqn(this.y33_1);
  };
  SkikoMouseButtons.prototype.equals = function (other) {
    return SkikoMouseButtons__equals_impl_jnid9f(this.y33_1, other);
  };
  SkikoMouseButtons.$metadata$ = classMeta('SkikoMouseButtons');
  function SkikoKeyboardEventKind_UP_getInstance() {
    SkikoKeyboardEventKind_initEntries();
    return SkikoKeyboardEventKind_UP_instance;
  }
  function SkikoKeyboardEventKind_DOWN_getInstance() {
    SkikoKeyboardEventKind_initEntries();
    return SkikoKeyboardEventKind_DOWN_instance;
  }
  function SkikoKeyboardEventKind_TYPE_getInstance() {
    SkikoKeyboardEventKind_initEntries();
    return SkikoKeyboardEventKind_TYPE_instance;
  }
  function SkikoPointerEventKind_UP_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_UP_instance;
  }
  function SkikoPointerEventKind_DOWN_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_DOWN_instance;
  }
  function SkikoPointerEventKind_MOVE_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_MOVE_instance;
  }
  function SkikoPointerEventKind_DRAG_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_DRAG_instance;
  }
  function SkikoPointerEventKind_SCROLL_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_SCROLL_instance;
  }
  var GraphicsApi_UNKNOWN_instance;
  var GraphicsApi_SOFTWARE_FAST_instance;
  var GraphicsApi_SOFTWARE_COMPAT_instance;
  var GraphicsApi_OPENGL_instance;
  var GraphicsApi_DIRECT3D_instance;
  var GraphicsApi_VULKAN_instance;
  var GraphicsApi_METAL_instance;
  var GraphicsApi_WEBGL_instance;
  var GraphicsApi_entriesInitialized;
  function GraphicsApi_initEntries() {
    if (GraphicsApi_entriesInitialized)
      return Unit_getInstance();
    GraphicsApi_entriesInitialized = true;
    GraphicsApi_UNKNOWN_instance = new GraphicsApi('UNKNOWN', 0);
    GraphicsApi_SOFTWARE_FAST_instance = new GraphicsApi('SOFTWARE_FAST', 1);
    GraphicsApi_SOFTWARE_COMPAT_instance = new GraphicsApi('SOFTWARE_COMPAT', 2);
    GraphicsApi_OPENGL_instance = new GraphicsApi('OPENGL', 3);
    GraphicsApi_DIRECT3D_instance = new GraphicsApi('DIRECT3D', 4);
    GraphicsApi_VULKAN_instance = new GraphicsApi('VULKAN', 5);
    GraphicsApi_METAL_instance = new GraphicsApi('METAL', 6);
    GraphicsApi_WEBGL_instance = new GraphicsApi('WEBGL', 7);
  }
  function GraphicsApi(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  GraphicsApi.$metadata$ = classMeta('GraphicsApi', undefined, undefined, undefined, undefined, Enum.prototype);
  function GraphicsApi_WEBGL_getInstance() {
    GraphicsApi_initEntries();
    return GraphicsApi_WEBGL_instance;
  }
  function ClipboardManager() {
  }
  ClipboardManager.$metadata$ = classMeta('ClipboardManager');
  function URIManager() {
  }
  URIManager.$metadata$ = classMeta('URIManager');
  function RenderException_init_$Init$(message, cause, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      message = null;
    if (!(($mask0 & 2) === 0))
      cause = null;
    RenderException.call($this, message, cause);
    return $this;
  }
  function RenderException_init_$Create$(message, cause, $mask0, $marker) {
    var tmp = RenderException_init_$Init$(message, cause, $mask0, $marker, Object.create(RenderException.prototype));
    captureStack(tmp, RenderException_init_$Create$);
    return tmp;
  }
  function RenderException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, RenderException);
  }
  RenderException.$metadata$ = classMeta('RenderException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function SkikoView() {
  }
  SkikoView.$metadata$ = interfaceMeta('SkikoView');
  var SystemTheme_DARK_instance;
  var SystemTheme_LIGHT_instance;
  var SystemTheme_UNKNOWN_instance;
  var SystemTheme_entriesInitialized;
  function SystemTheme_initEntries() {
    if (SystemTheme_entriesInitialized)
      return Unit_getInstance();
    SystemTheme_entriesInitialized = true;
    SystemTheme_DARK_instance = new SystemTheme('DARK', 0);
    SystemTheme_LIGHT_instance = new SystemTheme('LIGHT', 1);
    SystemTheme_UNKNOWN_instance = new SystemTheme('UNKNOWN', 2);
  }
  function SystemTheme(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  SystemTheme.$metadata$ = classMeta('SystemTheme', undefined, undefined, undefined, undefined, Enum.prototype);
  function SystemTheme_DARK_getInstance() {
    SystemTheme_initEntries();
    return SystemTheme_DARK_instance;
  }
  function SystemTheme_UNKNOWN_getInstance() {
    SystemTheme_initEntries();
    return SystemTheme_UNKNOWN_instance;
  }
  var LANG$delegate;
  function Pattern(regex) {
    this.d34_1 = Regex_init_$Create$(regex);
  }
  Pattern.$metadata$ = classMeta('Pattern');
  function compilePattern(regex) {
    init_properties_Actuals_js_kt_7xmfmg();
    return new Pattern(regex);
  }
  function commonSynchronized(lock, block) {
    init_properties_Actuals_js_kt_7xmfmg();
    block();
  }
  function LANG$delegate$lambda() {
    init_properties_Actuals_js_kt_7xmfmg();
    var lang = window.navigator.language;
    var tmp;
    var tmp_0;
    if (lang == null) {
      tmp_0 = true;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.text.isEmpty' call
      tmp$ret$0 = charSequenceLength(lang) === 0;
      tmp_0 = tmp$ret$0;
    }
    if (tmp_0) {
      tmp = 'en-US';
    } else {
      tmp = lang;
    }
    return tmp;
  }
  var properties_initialized_Actuals_js_kt_fw1oy4;
  function init_properties_Actuals_js_kt_7xmfmg() {
    if (properties_initialized_Actuals_js_kt_fw1oy4) {
    } else {
      properties_initialized_Actuals_js_kt_fw1oy4 = true;
      LANG$delegate = lazy(LANG$delegate$lambda);
    }
  }
  function Companion_45() {
    Companion_instance_45 = this;
  }
  Companion_45.prototype.c2m = function () {
  };
  Companion_45.$metadata$ = objectMeta('Companion');
  var Companion_instance_45;
  function Companion_getInstance_46() {
    if (Companion_instance_45 == null)
      new Companion_45();
    return Companion_instance_45;
  }
  function get_registry() {
    init_properties_Managed_js_kt_27q6fy();
    return registry;
  }
  var registry;
  function FinalizationThunk(finalizer, obj) {
    this.e34_1 = finalizer;
    this.f34_1 = obj;
  }
  FinalizationThunk.prototype.g34 = function () {
    if (!(this.f34_1 === 0)) {
      org_jetbrains_skia_impl_Managed__invokeFinalizer(this.e34_1, this.f34_1);
    }
    this.f34_1 = 0;
  };
  FinalizationThunk.$metadata$ = classMeta('FinalizationThunk');
  function Managed_init_$Init$(ptr, finalizer, managed, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      managed = true;
    Managed.call($this, ptr, finalizer, managed);
    return $this;
  }
  function Managed(ptr, finalizer, managed) {
    Native.call(this, ptr);
    this.h2m_1 = null;
    if (managed) {
      // Inline function 'kotlin.require' call
      var tmp0_require = !(ptr === 0);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'org.jetbrains.skia.impl.Managed.<anonymous>' call
        tmp$ret$0 = 'Managed ptr is 0';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      var tmp1_require = !(finalizer === 0);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_require) {
        var tmp$ret$1;
        // Inline function 'org.jetbrains.skia.impl.Managed.<anonymous>' call
        tmp$ret$1 = 'Managed finalizer is 0';
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var thunk = new FinalizationThunk(finalizer, ptr);
      register(this, thunk);
      this.h2m_1 = thunk;
    }
  }
  Managed.prototype.z1g = function () {
    if (Companion_getInstance_48().u2s() === this.i2m_1)
      throw RuntimeException_init_$Create$('Object already closed: ' + getKClassFromExpression(this).jc() + ', _ptr=' + this.i2m_1);
    else if (null == this.h2m_1)
      throw RuntimeException_init_$Create$("Object is not managed, can't close(): " + getKClassFromExpression(this).jc() + ', _ptr=' + this.i2m_1);
    else {
      unregister(this);
      ensureNotNull(this.h2m_1).g34();
      this.h2m_1 = null;
      this.i2m_1 = 0;
    }
  };
  Managed.$metadata$ = classMeta('Managed', undefined, undefined, undefined, undefined, Native.prototype);
  function unregister(managed) {
    init_properties_Managed_js_kt_27q6fy();
    get_registry().unregister(managed);
  }
  function register(managed, thunk) {
    init_properties_Managed_js_kt_27q6fy();
    get_registry().register(managed, thunk);
  }
  function registry$lambda(it) {
    init_properties_Managed_js_kt_27q6fy();
    var thunk = it instanceof FinalizationThunk ? it : THROW_CCE();
    thunk.g34();
    return Unit_getInstance();
  }
  var properties_initialized_Managed_js_kt_llxy4m;
  function init_properties_Managed_js_kt_27q6fy() {
    if (properties_initialized_Managed_js_kt_llxy4m) {
    } else {
      properties_initialized_Managed_js_kt_llxy4m = true;
      registry = new FinalizationRegistry(registry$lambda);
    }
  }
  function get_INTEROP_SCOPE() {
    init_properties_Native_js_kt_w6kccs();
    return INTEROP_SCOPE;
  }
  var INTEROP_SCOPE;
  function set_interopScopeCounter(_set____db54di) {
    init_properties_Native_js_kt_w6kccs();
    interopScopeCounter = _set____db54di;
  }
  function get_interopScopeCounter() {
    init_properties_Native_js_kt_w6kccs();
    return interopScopeCounter;
  }
  var interopScopeCounter;
  function toInterop($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isEmpty' call
      tmp$ret$0 = array.length === 0;
      tmp$ret$1 = !tmp$ret$0;
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(array.length);
      $this.a2o_1.a(data);
      if (copyArrayToWasm) {
        toWasm(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_0($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isEmpty' call
      tmp$ret$0 = array.length === 0;
      tmp$ret$1 = !tmp$ret$0;
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 4));
      $this.a2o_1.a(data);
      if (copyArrayToWasm) {
        toWasm_0(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_1($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isEmpty' call
      tmp$ret$0 = array.length === 0;
      tmp$ret$1 = !tmp$ret$0;
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 4));
      $this.a2o_1.a(data);
      if (copyArrayToWasm) {
        toWasm_1(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_2($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isEmpty' call
      tmp$ret$0 = array.length === 0;
      tmp$ret$1 = !tmp$ret$0;
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 8));
      $this.a2o_1.a(data);
      if (copyArrayToWasm) {
        toWasm_2(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_3($this, array, copyArrayToWasm) {
    var tmp;
    if (!(array == null) ? array.f() > 0 : false) {
      var data = _malloc(imul(array.f(), 4));
      $this.a2o_1.a(data);
      if (copyArrayToWasm) {
        toWasm_0(data, array.b2t_1);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function InteropScope() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.a2o_1 = tmp$ret$0;
    this.b2o_1 = false;
  }
  InteropScope.prototype.d2t = function (string) {
    var tmp;
    if (!(string == null)) {
      var data = _malloc(imul(string.length, 4));
      stringToUTF8(string, data, imul(string.length, 4));
      this.a2o_1.a(data);
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  };
  InteropScope.prototype.q2p = function (array) {
    return toInterop(this, array, true);
  };
  InteropScope.prototype.f2t = function (array) {
    return toInterop(this, array, false);
  };
  InteropScope.prototype.c2t = function (_this__u8e3s4, result) {
    fromWasm(_this__u8e3s4, result);
  };
  InteropScope.prototype.u2x = function (array) {
    return toInterop_0(this, array, true);
  };
  InteropScope.prototype.y2s = function (array) {
    return toInterop_0(this, array, false);
  };
  InteropScope.prototype.o2r = function (_this__u8e3s4, result) {
    fromWasm_0(_this__u8e3s4, result);
  };
  InteropScope.prototype.c2o = function (array) {
    return toInterop_1(this, array, true);
  };
  InteropScope.prototype.n2r = function (array) {
    return toInterop_1(this, array, false);
  };
  InteropScope.prototype.v2x = function (array) {
    return toInterop_2(this, array, true);
  };
  InteropScope.prototype.g2t = function (_this__u8e3s4, result) {
    fromWasm_1(_this__u8e3s4, result);
  };
  InteropScope.prototype.z2s = function (array) {
    return toInterop_3(this, array, false);
  };
  InteropScope.prototype.a2t = function (_this__u8e3s4, result) {
    return fromWasm(_this__u8e3s4, result.b2t_1);
  };
  InteropScope.prototype.t2x = function (stringArray) {
    var tmp;
    var tmp_0;
    if (!(stringArray == null)) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isEmpty' call
      tmp$ret$0 = stringArray.length === 0;
      tmp$ret$1 = !tmp$ret$0;
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp$ret$4;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$3;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(stringArray.length);
      var tmp0_iterator = arrayIterator(stringArray);
      while (tmp0_iterator.d()) {
        var item = tmp0_iterator.e();
        var tmp$ret$2;
        // Inline function 'org.jetbrains.skia.impl.InteropScope.toInterop.<anonymous>' call
        tmp$ret$2 = this.d2t(item);
        tmp0_mapTo.a(tmp$ret$2);
      }
      tmp$ret$3 = tmp0_mapTo;
      tmp$ret$4 = tmp$ret$3;
      var ptrs = toIntArray(tmp$ret$4);
      tmp = this.u2x(ptrs);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  InteropScope.prototype.wn = function () {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.a2o_1;
    var tmp0_iterator = tmp0_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'org.jetbrains.skia.impl.InteropScope.release.<anonymous>' call
      _free(element);
    }
    this.a2o_1.g9();
    // Inline function 'org.jetbrains.skia.impl.InteropScope.releaseCallbacks' call
    if (this.b2o_1) {
      _releaseLocalCallbackScope$accessor$wmqves();
      this.b2o_1 = false;
    }
  };
  InteropScope.$metadata$ = classMeta('InteropScope');
  function toWasm(dest, src) {
    init_properties_Native_js_kt_w6kccs();
    return HEAPU8.set(src, dest);
  }
  function fromWasm(src, result) {
    init_properties_Native_js_kt_w6kccs();
    var startIndex = src / 4 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = result;
    tmp$ret$0.set(HEAPU32.subarray(startIndex, startIndex + result.length | 0));
  }
  function toWasm_0(dest, src) {
    init_properties_Native_js_kt_w6kccs();
    return HEAPU32.set(src, dest / 4 | 0);
  }
  function fromWasm_0(src, result) {
    init_properties_Native_js_kt_w6kccs();
    var startIndex = src / 4 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = result;
    tmp$ret$0.set(HEAPF32.subarray(startIndex, startIndex + result.length | 0));
  }
  function toWasm_1(dest, src) {
    init_properties_Native_js_kt_w6kccs();
    return HEAPF32.set(src, dest / 4 | 0);
  }
  function toWasm_2(dest, src) {
    init_properties_Native_js_kt_w6kccs();
    return HEAPF64.set(src, dest / 8 | 0);
  }
  function fromWasm_1(src, result) {
    init_properties_Native_js_kt_w6kccs();
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = result;
    tmp$ret$0.set(HEAPU8.subarray(src, src + result.length | 0));
  }
  function Companion_46() {
    Companion_instance_46 = this;
  }
  Companion_46.$metadata$ = objectMeta('Companion');
  var Companion_instance_46;
  function Companion_getInstance_47() {
    if (Companion_instance_46 == null)
      new Companion_46();
    return Companion_instance_46;
  }
  function NativePointerArray(size) {
    Companion_getInstance_47();
    this.b2t_1 = new Int32Array(size);
  }
  NativePointerArray.prototype.g = function (index) {
    return this.b2t_1[index];
  };
  NativePointerArray.prototype.f = function () {
    return this.b2t_1.length;
  };
  NativePointerArray.$metadata$ = classMeta('NativePointerArray');
  function interopScope(block) {
    init_properties_Native_js_kt_w6kccs();
    try {
      var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
      _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
      return block(_get_INTEROP_SCOPE_$accessor$wmqves_peku9r());
    }finally {
      var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
      _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
      if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
        _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().wn();
      }
    }
  }
  function Companion_47() {
    Companion_instance_47 = this;
  }
  Companion_47.prototype.u2s = function () {
    return 0;
  };
  Companion_47.$metadata$ = objectMeta('Companion');
  var Companion_instance_47;
  function Companion_getInstance_48() {
    if (Companion_instance_47 == null)
      new Companion_47();
    return Companion_instance_47;
  }
  function Native(ptr) {
    Companion_getInstance_48();
    if (ptr === Companion_getInstance_48().u2s())
      throw RuntimeException_init_$Create$("Can't wrap nullptr");
    this.i2m_1 = ptr;
  }
  Native.prototype.k2t = function () {
    return this.i2m_1;
  };
  Native.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (null == other)
      return false;
    if (!(other instanceof Native))
      return false;
    return this.i2m_1 === other.i2m_1 ? true : this.j2m(other);
  };
  Native.prototype.hashCode = function () {
    return this.i2m_1;
  };
  Native.prototype.j2m = function (other) {
    return false;
  };
  Native.prototype.toString = function () {
    return plus(getKClassFromExpression(this).jc(), '(_ptr=0x') + toString_0(this.i2m_1, 16) + ')';
  };
  Native.$metadata$ = classMeta('Native');
  function reachabilityBarrier(obj) {
    init_properties_Native_js_kt_w6kccs();
  }
  function _createLocalCallbackScope$accessor$wmqves() {
    init_properties_Native_js_kt_w6kccs();
    return _createLocalCallbackScope();
  }
  function _releaseLocalCallbackScope$accessor$wmqves() {
    init_properties_Native_js_kt_w6kccs();
    return _releaseLocalCallbackScope();
  }
  function _set_interopScopeCounter_$accessor$wmqves_ygusxq(_set____db54di) {
    init_properties_Native_js_kt_w6kccs();
    return set_interopScopeCounter(_set____db54di);
  }
  function _get_interopScopeCounter_$accessor$wmqves_umgosu() {
    init_properties_Native_js_kt_w6kccs();
    return get_interopScopeCounter();
  }
  function _get_INTEROP_SCOPE_$accessor$wmqves_peku9r() {
    init_properties_Native_js_kt_w6kccs();
    return get_INTEROP_SCOPE();
  }
  var properties_initialized_Native_js_kt_fdhhkg;
  function init_properties_Native_js_kt_w6kccs() {
    if (properties_initialized_Native_js_kt_fdhhkg) {
    } else {
      properties_initialized_Native_js_kt_fdhhkg = true;
      INTEROP_SCOPE = new InteropScope();
      interopScopeCounter = 0;
    }
  }
  function RefCnt_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_15().h34_1, true);
    RefCnt.call($this);
    return $this;
  }
  function RefCnt_init_$Init$_0(ptr, allowClose, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_15().h34_1, allowClose);
    RefCnt.call($this);
    return $this;
  }
  RefCnt.prototype.c2p = function () {
    Stats_getInstance().e2m();
    return org_jetbrains_skia_impl_RefCnt__getRefCount(this.i2m_1);
  };
  RefCnt.prototype.toString = function () {
    var s = Managed.prototype.toString.call(this);
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = s.length - 1 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = s;
    tmp$ret$1 = tmp$ret$0.substring(0, tmp0_substring);
    return tmp$ret$1 + ', refCount=' + this.c2p() + ')';
  };
  function RefCnt() {
  }
  RefCnt.$metadata$ = classMeta('RefCnt', undefined, undefined, undefined, undefined, Managed.prototype);
  function _FinalizerHolder_15() {
    _FinalizerHolder_instance_15 = this;
    this.h34_1 = org_jetbrains_skia_impl_RefCnt__getFinalizer();
  }
  _FinalizerHolder_15.$metadata$ = objectMeta('_FinalizerHolder');
  var _FinalizerHolder_instance_15;
  function _FinalizerHolder_getInstance_15() {
    if (_FinalizerHolder_instance_15 == null)
      new _FinalizerHolder_15();
    return _FinalizerHolder_instance_15;
  }
  function Stats() {
    Stats_instance = this;
  }
  Stats.prototype.e2m = function () {
  };
  Stats.$metadata$ = objectMeta('Stats');
  var Stats_instance;
  function Stats_getInstance() {
    if (Stats_instance == null)
      new Stats();
    return Stats_instance;
  }
  function currentNanoTime() {
    return numberToLong(window.performance.now() * 1000000);
  }
  function disposeCanvas($this) {
    var tmp0_safe_receiver = $this.l34_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1g();
    }
    $this.l34_1 = null;
    var tmp1_safe_receiver = $this.m34_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.z1g();
    }
    $this.m34_1 = null;
  }
  function CanvasRenderer$needRedraw$lambda(this$0) {
    return function (timestamp) {
      this$0.o34_1 = false;
      GL.makeContextCurrent(this$0.j34_1);
      var tmp0_safe_receiver = this$0.n34_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.a29(-1);
      var tmp1_safe_receiver = this$0.n34_1;
      if (tmp1_safe_receiver == null)
        null;
      else
        tmp1_safe_receiver.j2o();
      this$0.p34(timestamp);
      var tmp2_safe_receiver = this$0.l34_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.v2w();
      }
      this$0.k34_1.z2p();
      return Unit_getInstance();
    };
  }
  function CanvasRenderer(htmlCanvas) {
    this.i34_1 = htmlCanvas;
    var tmp = this;
    tmp.j34_1 = createWebGLContext$default(this.i34_1, null, 2, null);
    this.l34_1 = null;
    this.m34_1 = null;
    this.n34_1 = null;
    GL.makeContextCurrent(this.j34_1);
    this.k34_1 = Companion_getInstance_8().w2p();
    this.o34_1 = false;
  }
  CanvasRenderer.prototype.a2j = function () {
    return this.i34_1.width;
  };
  CanvasRenderer.prototype.b2j = function () {
    return this.i34_1.height;
  };
  CanvasRenderer.prototype.q34 = function (desiredWidth, desiredHeight, scale) {
    disposeCanvas(this);
    this.i34_1.width = numberToInt(desiredWidth * scale);
    this.i34_1.height = numberToInt(desiredHeight * scale);
    this.m34_1 = Companion_getInstance_0().d2m(this.a2j(), this.b2j(), 1, 8, 0, 32856);
    var tmp = this;
    var tmp_0 = Companion_getInstance_31();
    var tmp_1 = ensureNotNull(this.m34_1);
    var tmp_2 = SurfaceOrigin_BOTTOM_LEFT_getInstance();
    var tmp_3 = SurfaceColorFormat_RGBA_8888_getInstance();
    var tmp_4 = Companion_getInstance_5().i2p_1;
    var tmp0_elvis_lhs = tmp_0.p2w(this.k34_1, tmp_1, tmp_2, tmp_3, tmp_4, null, 32, null);
    var tmp_5;
    if (tmp0_elvis_lhs == null) {
      throw RenderException_init_$Create$('Cannot create surface', null, 2, null);
    } else {
      tmp_5 = tmp0_elvis_lhs;
    }
    tmp.l34_1 = tmp_5;
    this.n34_1 = ensureNotNull(this.l34_1).u2w();
  };
  CanvasRenderer.prototype.r34 = function () {
    if (this.o34_1) {
      return Unit_getInstance();
    }
    this.o34_1 = true;
    var tmp = window;
    tmp.requestAnimationFrame(CanvasRenderer$needRedraw$lambda(this));
  };
  CanvasRenderer.$metadata$ = classMeta('CanvasRenderer');
  function get_SPECIAL_KEYS() {
    init_properties_Convertors_js_kt_ym3oai();
    return SPECIAL_KEYS;
  }
  var SPECIAL_KEYS;
  function set_buttonsFlags(_set____db54di) {
    init_properties_Convertors_js_kt_ym3oai();
    buttonsFlags = _set____db54di;
  }
  function get_buttonsFlags() {
    init_properties_Convertors_js_kt_ym3oai();
    return buttonsFlags;
  }
  var buttonsFlags;
  function toSkikoEvent(event, kind) {
    init_properties_Convertors_js_kt_ym3oai();
    var tmp = event.offsetX;
    var tmp_0 = event.offsetY;
    return SkikoPointerEvent_init_$Create$(tmp, tmp_0, 0.0, 0.0, toSkikoPressedMouseButtons(event, kind), toSkikoMouseButton(event), toSkikoModifiers(event), kind, numberToLong(event.timeStamp), event, 12, null);
  }
  function toSkikoDragEvent(event) {
    init_properties_Convertors_js_kt_ym3oai();
    var tmp = event.offsetX;
    var tmp_0 = event.offsetY;
    return SkikoPointerEvent_init_$Create$(tmp, tmp_0, 0.0, 0.0, _SkikoMouseButtons___init__impl__kylsco(get_buttonsFlags()), toSkikoMouseButton(event), toSkikoModifiers(event), SkikoPointerEventKind_DRAG_getInstance(), numberToLong(event.timeStamp), event, 12, null);
  }
  function toSkikoScrollEvent(event) {
    init_properties_Convertors_js_kt_ym3oai();
    return new SkikoPointerEvent(event.offsetX, event.offsetY, event.deltaX, event.deltaY, _SkikoMouseButtons___init__impl__kylsco(get_buttonsFlags()), Companion_getInstance_45().u32_1, toSkikoModifiers(event), SkikoPointerEventKind_SCROLL_getInstance(), numberToLong(event.timeStamp), event);
  }
  function toSkikoEvent_0(event, kind) {
    init_properties_Convertors_js_kt_ym3oai();
    return new SkikoKeyboardEvent(Companion_getInstance_49().s34(toSkikoKey(event)), toSkikoModifiers_0(event), kind, numberToLong(event.timeStamp), event);
  }
  function toSkikoTypeEvent(character, event) {
    init_properties_Convertors_js_kt_ym3oai();
    var tmp;
    if (get_SPECIAL_KEYS().m(character)) {
      tmp = null;
    } else {
      var tmp0_subject = character;
      {
        var input;
        switch (tmp0_subject) {
          case 'Enter':
            input = '\n';
            break;
          case 'Tab':
            input = '\t';
            break;
          default:
            input = character;
            break;
        }
      }
      var key = !(event == null) ? Companion_getInstance_49().s34(event.keyCode) : SkikoKey_KEY_UNKNOWN_getInstance();
      var modifiers = !(event == null) ? toSkikoModifiers_0(event) : Companion_getInstance_44().f32_1;
      tmp = new SkikoInputEvent(input, key, modifiers, SkikoKeyboardEventKind_TYPE_getInstance(), event);
    }
    return tmp;
  }
  function toSkikoPressedMouseButtons(event, kind) {
    init_properties_Convertors_js_kt_ym3oai();
    var button = event.button;
    if (kind.equals(SkikoPointerEventKind_DOWN_getInstance())) {
      set_buttonsFlags(get_buttonsFlags() | getSkikoButtonValue(button));
      return _SkikoMouseButtons___init__impl__kylsco(get_buttonsFlags());
    }
    set_buttonsFlags(get_buttonsFlags() ^ getSkikoButtonValue(button));
    return _SkikoMouseButtons___init__impl__kylsco(get_buttonsFlags());
  }
  function toSkikoMouseButton(event) {
    init_properties_Convertors_js_kt_ym3oai();
    return _SkikoMouseButtons___init__impl__kylsco(getSkikoButtonValue(event.button));
  }
  function toSkikoModifiers(event) {
    init_properties_Convertors_js_kt_ym3oai();
    var result = 0;
    if (event.altKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_44().i32_1);
    }
    if (event.shiftKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_44().j32_1);
    }
    if (event.ctrlKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_44().h32_1);
    }
    if (event.metaKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_44().g32_1);
    }
    return _SkikoInputModifiers___init__impl__z8g2zy(result);
  }
  function toSkikoKey(event) {
    init_properties_Convertors_js_kt_ym3oai();
    var key = event.keyCode;
    var side = event.location;
    if (side === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
      if ((key === SkikoKey_KEY_LEFT_CONTROL_getInstance().v34_1 ? true : key === SkikoKey_KEY_LEFT_SHIFT_getInstance().v34_1) ? true : key === SkikoKey_KEY_LEFT_META_getInstance().v34_1)
        key = key | -2147483648;
    }
    return key;
  }
  function toSkikoModifiers_0(event) {
    init_properties_Convertors_js_kt_ym3oai();
    var result = 0;
    if (event.altKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_44().i32_1);
    }
    if (event.shiftKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_44().j32_1);
    }
    if (event.ctrlKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_44().h32_1);
    }
    if (event.metaKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_44().g32_1);
    }
    return _SkikoInputModifiers___init__impl__z8g2zy(result);
  }
  function getSkikoButtonValue(button) {
    init_properties_Convertors_js_kt_ym3oai();
    var tmp0_subject = button;
    switch (tmp0_subject) {
      case 0:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_45().v32_1);
      case 1:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_45().x32_1);
      case 2:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_45().w32_1);
      case 3:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_45().b33_1);
      case 4:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_45().c33_1);
      default:
        return 0;
    }
  }
  var properties_initialized_Convertors_js_kt_vbq0oa;
  function init_properties_Convertors_js_kt_ym3oai() {
    if (properties_initialized_Convertors_js_kt_vbq0oa) {
    } else {
      properties_initialized_Convertors_js_kt_vbq0oa = true;
      SPECIAL_KEYS = setOf(['Unidentified', 'Alt', 'AltGraph', 'Backspace', 'CapsLock', 'Control', 'Fn', 'FnLock', 'Hyper', 'Meta', 'NumLock', 'ScrollLock', 'Shift', 'Super', 'Symbol', 'SymbolLock', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'F21', 'F22', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'Help', 'Home', 'Delete', 'End', 'PageUp', 'PageDown', 'Escape', 'Clear', 'Clear']);
      buttonsFlags = 0;
    }
  }
  var onContentScaleChanged;
  function setOnChangeScaleNotifier($this) {
    var tmp0_safe_receiver = $this.w34_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.q34($this.a35_1, $this.b35_1, $this.d35());
    }
    var tmp = window.matchMedia('(resolution: ' + $this.d35() + 'dppx)');
    tmp.addEventListener('change', SkiaLayer$setOnChangeScaleNotifier$lambda($this), true);
    var tmp1_safe_receiver = onContentScaleChanged;
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver($this.d35());
  }
  function SkiaLayer$attachTo$1($htmlCanvas, this$0) {
    this.l35_1 = this$0;
    CanvasRenderer.call(this, $htmlCanvas);
  }
  SkiaLayer$attachTo$1.prototype.p34 = function (currentTimestamp) {
    var currentNanos = currentTimestamp * 1000000;
    var tmp0_safe_receiver = this.l35_1.y34_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.c34(ensureNotNull(this.n34_1), this.a2j(), this.b2j(), numberToLong(currentNanos));
    }
  };
  SkiaLayer$attachTo$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, CanvasRenderer.prototype);
  function SkiaLayer$attachTo$lambda(this$0) {
    return function (event) {
      if (event instanceof MouseEvent)
        event;
      else
        THROW_CCE();
      this$0.z34_1 = true;
      var tmp0_safe_receiver = this$0.y34_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.a34(toSkikoEvent(event, SkikoPointerEventKind_DOWN_getInstance()));
      }
      return Unit_getInstance();
    };
  }
  function SkiaLayer$attachTo$lambda_0(this$0) {
    return function (event) {
      if (event instanceof MouseEvent)
        event;
      else
        THROW_CCE();
      this$0.z34_1 = false;
      var tmp0_safe_receiver = this$0.y34_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.a34(toSkikoEvent(event, SkikoPointerEventKind_UP_getInstance()));
      }
      return Unit_getInstance();
    };
  }
  function SkiaLayer$attachTo$lambda_1(this$0) {
    return function (event) {
      if (event instanceof MouseEvent)
        event;
      else
        THROW_CCE();
      var tmp;
      if (this$0.z34_1) {
        var tmp0_safe_receiver = this$0.y34_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.a34(toSkikoDragEvent(event));
        }
        tmp = Unit_getInstance();
      } else {
        var tmp1_safe_receiver = this$0.y34_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          tmp1_safe_receiver.a34(toSkikoEvent(event, SkikoPointerEventKind_MOVE_getInstance()));
        }
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SkiaLayer$attachTo$lambda_2(this$0) {
    return function (event) {
      if (event instanceof WheelEvent)
        event;
      else
        THROW_CCE();
      var tmp0_safe_receiver = this$0.y34_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.a34(toSkikoScrollEvent(event));
      }
      return Unit_getInstance();
    };
  }
  function SkiaLayer$attachTo$lambda_3(event) {
    event.preventDefault();
    return Unit_getInstance();
  }
  function SkiaLayer$attachTo$lambda_4(this$0) {
    return function (event) {
      if (event instanceof KeyboardEvent)
        event;
      else
        THROW_CCE();
      var tmp0_safe_receiver = this$0.y34_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.z33(toSkikoEvent_0(event, SkikoKeyboardEventKind_DOWN_getInstance()));
      }
      var tmp1_safe_receiver = toSkikoTypeEvent(event.key, event);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp0_safe_receiver_0 = this$0.y34_1;
        var tmp1_safe_receiver_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.b34();
        if (tmp1_safe_receiver_0 == null)
          null;
        else {
          tmp1_safe_receiver_0.m35(tmp1_safe_receiver);
        }
        tmp$ret$0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SkiaLayer$attachTo$lambda_5(this$0) {
    return function (event) {
      if (event instanceof KeyboardEvent)
        event;
      else
        THROW_CCE();
      var tmp0_safe_receiver = this$0.y34_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.z33(toSkikoEvent_0(event, SkikoKeyboardEventKind_UP_getInstance()));
      }
      return Unit_getInstance();
    };
  }
  function SkiaLayer$setOnChangeScaleNotifier$lambda(this$0) {
    return function (it) {
      setOnChangeScaleNotifier(this$0);
      return Unit_getInstance();
    };
  }
  function SkiaLayer() {
    this.w34_1 = null;
    this.x34_1 = GraphicsApi_WEBGL_getInstance();
    this.y34_1 = null;
    this.z34_1 = false;
    this.a35_1 = 0;
    this.b35_1 = 0;
    this.c35_1 = null;
  }
  SkiaLayer.prototype.d35 = function () {
    return window.devicePixelRatio;
  };
  SkiaLayer.prototype.r34 = function () {
    var tmp0_safe_receiver = this.w34_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r34();
    }
  };
  SkiaLayer.prototype.n35 = function (htmlCanvas, autoDetach) {
    this.c35_1 = htmlCanvas;
    this.a35_1 = htmlCanvas.width;
    this.b35_1 = htmlCanvas.height;
    htmlCanvas.style.width = '' + this.a35_1 + 'px';
    htmlCanvas.style.height = '' + this.b35_1 + 'px';
    setOnChangeScaleNotifier(this);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new SkiaLayer$attachTo$1(htmlCanvas, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skiko.SkiaLayer.attachTo.<anonymous>' call
    tmp0_apply.q34(this.a35_1, this.b35_1, this.d35());
    tmp$ret$0 = tmp0_apply;
    tmp.w34_1 = tmp$ret$0;
    htmlCanvas.addEventListener('mousedown', SkiaLayer$attachTo$lambda(this));
    htmlCanvas.addEventListener('mouseup', SkiaLayer$attachTo$lambda_0(this));
    htmlCanvas.addEventListener('mousemove', SkiaLayer$attachTo$lambda_1(this));
    htmlCanvas.addEventListener('wheel', SkiaLayer$attachTo$lambda_2(this));
    htmlCanvas.addEventListener('contextmenu', SkiaLayer$attachTo$lambda_3);
    htmlCanvas.addEventListener('keydown', SkiaLayer$attachTo$lambda_4(this));
    htmlCanvas.addEventListener('keyup', SkiaLayer$attachTo$lambda_5(this));
  };
  SkiaLayer.prototype.o35 = function (htmlCanvas, autoDetach, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      autoDetach = true;
    return this.n35(htmlCanvas, autoDetach);
  };
  SkiaLayer.$metadata$ = classMeta('SkiaLayer');
  function Empty() {
    Empty_instance = this;
  }
  Empty.prototype.m35 = function (event) {
    return Unit_getInstance();
  };
  Empty.$metadata$ = objectMeta('Empty', [SkikoInput]);
  var Empty_instance;
  function Empty_getInstance() {
    if (Empty_instance == null)
      new Empty();
    return Empty_instance;
  }
  function SkikoInput() {
  }
  SkikoInput.$metadata$ = interfaceMeta('SkikoInput');
  var SkikoKey_KEY_UNKNOWN_instance;
  var SkikoKey_KEY_A_instance;
  var SkikoKey_KEY_S_instance;
  var SkikoKey_KEY_D_instance;
  var SkikoKey_KEY_F_instance;
  var SkikoKey_KEY_H_instance;
  var SkikoKey_KEY_G_instance;
  var SkikoKey_KEY_Z_instance;
  var SkikoKey_KEY_X_instance;
  var SkikoKey_KEY_C_instance;
  var SkikoKey_KEY_V_instance;
  var SkikoKey_KEY_B_instance;
  var SkikoKey_KEY_Q_instance;
  var SkikoKey_KEY_W_instance;
  var SkikoKey_KEY_E_instance;
  var SkikoKey_KEY_R_instance;
  var SkikoKey_KEY_Y_instance;
  var SkikoKey_KEY_T_instance;
  var SkikoKey_KEY_U_instance;
  var SkikoKey_KEY_I_instance;
  var SkikoKey_KEY_P_instance;
  var SkikoKey_KEY_L_instance;
  var SkikoKey_KEY_J_instance;
  var SkikoKey_KEY_K_instance;
  var SkikoKey_KEY_N_instance;
  var SkikoKey_KEY_M_instance;
  var SkikoKey_KEY_O_instance;
  var SkikoKey_KEY_1_instance;
  var SkikoKey_KEY_2_instance;
  var SkikoKey_KEY_3_instance;
  var SkikoKey_KEY_4_instance;
  var SkikoKey_KEY_5_instance;
  var SkikoKey_KEY_6_instance;
  var SkikoKey_KEY_7_instance;
  var SkikoKey_KEY_8_instance;
  var SkikoKey_KEY_9_instance;
  var SkikoKey_KEY_0_instance;
  var SkikoKey_KEY_CLOSE_BRACKET_instance;
  var SkikoKey_KEY_OPEN_BRACKET_instance;
  var SkikoKey_KEY_QUOTE_instance;
  var SkikoKey_KEY_SEMICOLON_instance;
  var SkikoKey_KEY_SLASH_instance;
  var SkikoKey_KEY_COMMA_instance;
  var SkikoKey_KEY_BACKSLASH_instance;
  var SkikoKey_KEY_PERIOD_instance;
  var SkikoKey_KEY_BACK_QUOTE_instance;
  var SkikoKey_KEY_EQUALS_instance;
  var SkikoKey_KEY_MINUS_instance;
  var SkikoKey_KEY_ENTER_instance;
  var SkikoKey_KEY_ESCAPE_instance;
  var SkikoKey_KEY_TAB_instance;
  var SkikoKey_KEY_BACKSPACE_instance;
  var SkikoKey_KEY_SPACE_instance;
  var SkikoKey_KEY_CAPSLOCK_instance;
  var SkikoKey_KEY_LEFT_META_instance;
  var SkikoKey_KEY_LEFT_SHIFT_instance;
  var SkikoKey_KEY_LEFT_ALT_instance;
  var SkikoKey_KEY_LEFT_CONTROL_instance;
  var SkikoKey_KEY_RIGHT_META_instance;
  var SkikoKey_KEY_RIGHT_SHIFT_instance;
  var SkikoKey_KEY_RIGHT_ALT_instance;
  var SkikoKey_KEY_RIGHT_CONTROL_instance;
  var SkikoKey_KEY_MENU_instance;
  var SkikoKey_KEY_UP_instance;
  var SkikoKey_KEY_DOWN_instance;
  var SkikoKey_KEY_LEFT_instance;
  var SkikoKey_KEY_RIGHT_instance;
  var SkikoKey_KEY_F1_instance;
  var SkikoKey_KEY_F2_instance;
  var SkikoKey_KEY_F3_instance;
  var SkikoKey_KEY_F4_instance;
  var SkikoKey_KEY_F5_instance;
  var SkikoKey_KEY_F6_instance;
  var SkikoKey_KEY_F7_instance;
  var SkikoKey_KEY_F8_instance;
  var SkikoKey_KEY_F9_instance;
  var SkikoKey_KEY_F10_instance;
  var SkikoKey_KEY_F11_instance;
  var SkikoKey_KEY_F12_instance;
  var SkikoKey_KEY_PRINTSCEEN_instance;
  var SkikoKey_KEY_SCROLL_LOCK_instance;
  var SkikoKey_KEY_PAUSE_instance;
  var SkikoKey_KEY_INSERT_instance;
  var SkikoKey_KEY_HOME_instance;
  var SkikoKey_KEY_PGUP_instance;
  var SkikoKey_KEY_DELETE_instance;
  var SkikoKey_KEY_END_instance;
  var SkikoKey_KEY_PGDOWN_instance;
  var SkikoKey_KEY_NUM_LOCK_instance;
  var SkikoKey_KEY_NUMPAD_0_instance;
  var SkikoKey_KEY_NUMPAD_1_instance;
  var SkikoKey_KEY_NUMPAD_2_instance;
  var SkikoKey_KEY_NUMPAD_3_instance;
  var SkikoKey_KEY_NUMPAD_4_instance;
  var SkikoKey_KEY_NUMPAD_5_instance;
  var SkikoKey_KEY_NUMPAD_6_instance;
  var SkikoKey_KEY_NUMPAD_7_instance;
  var SkikoKey_KEY_NUMPAD_8_instance;
  var SkikoKey_KEY_NUMPAD_9_instance;
  var SkikoKey_KEY_NUMPAD_ENTER_instance;
  var SkikoKey_KEY_NUMPAD_ADD_instance;
  var SkikoKey_KEY_NUMPAD_SUBTRACT_instance;
  var SkikoKey_KEY_NUMPAD_MULTIPLY_instance;
  var SkikoKey_KEY_NUMPAD_DIVIDE_instance;
  var SkikoKey_KEY_NUMPAD_DECIMAL_instance;
  function Companion_48() {
    Companion_instance_48 = this;
  }
  Companion_48.prototype.s34 = function (platformKeyCode) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_firstOrNull = values_5();
      var indexedObject = tmp0_firstOrNull;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'org.jetbrains.skiko.Companion.valueOf.<anonymous>' call
        tmp$ret$0 = element.v34_1 === platformKeyCode;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    return tmp0_elvis_lhs == null ? SkikoKey_KEY_UNKNOWN_getInstance() : tmp0_elvis_lhs;
  };
  Companion_48.$metadata$ = objectMeta('Companion');
  var Companion_instance_48;
  function Companion_getInstance_49() {
    SkikoKey_initEntries();
    if (Companion_instance_48 == null)
      new Companion_48();
    return Companion_instance_48;
  }
  function values_5() {
    return [SkikoKey_KEY_UNKNOWN_getInstance(), SkikoKey_KEY_A_getInstance(), SkikoKey_KEY_S_getInstance(), SkikoKey_KEY_D_getInstance(), SkikoKey_KEY_F_getInstance(), SkikoKey_KEY_H_getInstance(), SkikoKey_KEY_G_getInstance(), SkikoKey_KEY_Z_getInstance(), SkikoKey_KEY_X_getInstance(), SkikoKey_KEY_C_getInstance(), SkikoKey_KEY_V_getInstance(), SkikoKey_KEY_B_getInstance(), SkikoKey_KEY_Q_getInstance(), SkikoKey_KEY_W_getInstance(), SkikoKey_KEY_E_getInstance(), SkikoKey_KEY_R_getInstance(), SkikoKey_KEY_Y_getInstance(), SkikoKey_KEY_T_getInstance(), SkikoKey_KEY_U_getInstance(), SkikoKey_KEY_I_getInstance(), SkikoKey_KEY_P_getInstance(), SkikoKey_KEY_L_getInstance(), SkikoKey_KEY_J_getInstance(), SkikoKey_KEY_K_getInstance(), SkikoKey_KEY_N_getInstance(), SkikoKey_KEY_M_getInstance(), SkikoKey_KEY_O_getInstance(), SkikoKey_KEY_1_getInstance(), SkikoKey_KEY_2_getInstance(), SkikoKey_KEY_3_getInstance(), SkikoKey_KEY_4_getInstance(), SkikoKey_KEY_5_getInstance(), SkikoKey_KEY_6_getInstance(), SkikoKey_KEY_7_getInstance(), SkikoKey_KEY_8_getInstance(), SkikoKey_KEY_9_getInstance(), SkikoKey_KEY_0_getInstance(), SkikoKey_KEY_CLOSE_BRACKET_getInstance(), SkikoKey_KEY_OPEN_BRACKET_getInstance(), SkikoKey_KEY_QUOTE_getInstance(), SkikoKey_KEY_SEMICOLON_getInstance(), SkikoKey_KEY_SLASH_getInstance(), SkikoKey_KEY_COMMA_getInstance(), SkikoKey_KEY_BACKSLASH_getInstance(), SkikoKey_KEY_PERIOD_getInstance(), SkikoKey_KEY_BACK_QUOTE_getInstance(), SkikoKey_KEY_EQUALS_getInstance(), SkikoKey_KEY_MINUS_getInstance(), SkikoKey_KEY_ENTER_getInstance(), SkikoKey_KEY_ESCAPE_getInstance(), SkikoKey_KEY_TAB_getInstance(), SkikoKey_KEY_BACKSPACE_getInstance(), SkikoKey_KEY_SPACE_getInstance(), SkikoKey_KEY_CAPSLOCK_getInstance(), SkikoKey_KEY_LEFT_META_getInstance(), SkikoKey_KEY_LEFT_SHIFT_getInstance(), SkikoKey_KEY_LEFT_ALT_getInstance(), SkikoKey_KEY_LEFT_CONTROL_getInstance(), SkikoKey_KEY_RIGHT_META_getInstance(), SkikoKey_KEY_RIGHT_SHIFT_getInstance(), SkikoKey_KEY_RIGHT_ALT_getInstance(), SkikoKey_KEY_RIGHT_CONTROL_getInstance(), SkikoKey_KEY_MENU_getInstance(), SkikoKey_KEY_UP_getInstance(), SkikoKey_KEY_DOWN_getInstance(), SkikoKey_KEY_LEFT_getInstance(), SkikoKey_KEY_RIGHT_getInstance(), SkikoKey_KEY_F1_getInstance(), SkikoKey_KEY_F2_getInstance(), SkikoKey_KEY_F3_getInstance(), SkikoKey_KEY_F4_getInstance(), SkikoKey_KEY_F5_getInstance(), SkikoKey_KEY_F6_getInstance(), SkikoKey_KEY_F7_getInstance(), SkikoKey_KEY_F8_getInstance(), SkikoKey_KEY_F9_getInstance(), SkikoKey_KEY_F10_getInstance(), SkikoKey_KEY_F11_getInstance(), SkikoKey_KEY_F12_getInstance(), SkikoKey_KEY_PRINTSCEEN_getInstance(), SkikoKey_KEY_SCROLL_LOCK_getInstance(), SkikoKey_KEY_PAUSE_getInstance(), SkikoKey_KEY_INSERT_getInstance(), SkikoKey_KEY_HOME_getInstance(), SkikoKey_KEY_PGUP_getInstance(), SkikoKey_KEY_DELETE_getInstance(), SkikoKey_KEY_END_getInstance(), SkikoKey_KEY_PGDOWN_getInstance(), SkikoKey_KEY_NUM_LOCK_getInstance(), SkikoKey_KEY_NUMPAD_0_getInstance(), SkikoKey_KEY_NUMPAD_1_getInstance(), SkikoKey_KEY_NUMPAD_2_getInstance(), SkikoKey_KEY_NUMPAD_3_getInstance(), SkikoKey_KEY_NUMPAD_4_getInstance(), SkikoKey_KEY_NUMPAD_5_getInstance(), SkikoKey_KEY_NUMPAD_6_getInstance(), SkikoKey_KEY_NUMPAD_7_getInstance(), SkikoKey_KEY_NUMPAD_8_getInstance(), SkikoKey_KEY_NUMPAD_9_getInstance(), SkikoKey_KEY_NUMPAD_ENTER_getInstance(), SkikoKey_KEY_NUMPAD_ADD_getInstance(), SkikoKey_KEY_NUMPAD_SUBTRACT_getInstance(), SkikoKey_KEY_NUMPAD_MULTIPLY_getInstance(), SkikoKey_KEY_NUMPAD_DIVIDE_getInstance(), SkikoKey_KEY_NUMPAD_DECIMAL_getInstance()];
  }
  var SkikoKey_entriesInitialized;
  function SkikoKey_initEntries() {
    if (SkikoKey_entriesInitialized)
      return Unit_getInstance();
    SkikoKey_entriesInitialized = true;
    SkikoKey_KEY_UNKNOWN_instance = new SkikoKey('KEY_UNKNOWN', 0, -1);
    SkikoKey_KEY_A_instance = new SkikoKey('KEY_A', 1, 65);
    SkikoKey_KEY_S_instance = new SkikoKey('KEY_S', 2, 83);
    SkikoKey_KEY_D_instance = new SkikoKey('KEY_D', 3, 68);
    SkikoKey_KEY_F_instance = new SkikoKey('KEY_F', 4, 70);
    SkikoKey_KEY_H_instance = new SkikoKey('KEY_H', 5, 72);
    SkikoKey_KEY_G_instance = new SkikoKey('KEY_G', 6, 71);
    SkikoKey_KEY_Z_instance = new SkikoKey('KEY_Z', 7, 90);
    SkikoKey_KEY_X_instance = new SkikoKey('KEY_X', 8, 88);
    SkikoKey_KEY_C_instance = new SkikoKey('KEY_C', 9, 67);
    SkikoKey_KEY_V_instance = new SkikoKey('KEY_V', 10, 86);
    SkikoKey_KEY_B_instance = new SkikoKey('KEY_B', 11, 66);
    SkikoKey_KEY_Q_instance = new SkikoKey('KEY_Q', 12, 81);
    SkikoKey_KEY_W_instance = new SkikoKey('KEY_W', 13, 87);
    SkikoKey_KEY_E_instance = new SkikoKey('KEY_E', 14, 69);
    SkikoKey_KEY_R_instance = new SkikoKey('KEY_R', 15, 82);
    SkikoKey_KEY_Y_instance = new SkikoKey('KEY_Y', 16, 89);
    SkikoKey_KEY_T_instance = new SkikoKey('KEY_T', 17, 54);
    SkikoKey_KEY_U_instance = new SkikoKey('KEY_U', 18, 85);
    SkikoKey_KEY_I_instance = new SkikoKey('KEY_I', 19, 73);
    SkikoKey_KEY_P_instance = new SkikoKey('KEY_P', 20, 80);
    SkikoKey_KEY_L_instance = new SkikoKey('KEY_L', 21, 76);
    SkikoKey_KEY_J_instance = new SkikoKey('KEY_J', 22, 74);
    SkikoKey_KEY_K_instance = new SkikoKey('KEY_K', 23, 75);
    SkikoKey_KEY_N_instance = new SkikoKey('KEY_N', 24, 78);
    SkikoKey_KEY_M_instance = new SkikoKey('KEY_M', 25, 77);
    SkikoKey_KEY_O_instance = new SkikoKey('KEY_O', 26, 79);
    SkikoKey_KEY_1_instance = new SkikoKey('KEY_1', 27, 49);
    SkikoKey_KEY_2_instance = new SkikoKey('KEY_2', 28, 50);
    SkikoKey_KEY_3_instance = new SkikoKey('KEY_3', 29, 51);
    SkikoKey_KEY_4_instance = new SkikoKey('KEY_4', 30, 52);
    SkikoKey_KEY_5_instance = new SkikoKey('KEY_5', 31, 53);
    SkikoKey_KEY_6_instance = new SkikoKey('KEY_6', 32, 54);
    SkikoKey_KEY_7_instance = new SkikoKey('KEY_7', 33, 55);
    SkikoKey_KEY_8_instance = new SkikoKey('KEY_8', 34, 56);
    SkikoKey_KEY_9_instance = new SkikoKey('KEY_9', 35, 57);
    SkikoKey_KEY_0_instance = new SkikoKey('KEY_0', 36, 48);
    SkikoKey_KEY_CLOSE_BRACKET_instance = new SkikoKey('KEY_CLOSE_BRACKET', 37, 221);
    SkikoKey_KEY_OPEN_BRACKET_instance = new SkikoKey('KEY_OPEN_BRACKET', 38, 219);
    SkikoKey_KEY_QUOTE_instance = new SkikoKey('KEY_QUOTE', 39, 222);
    SkikoKey_KEY_SEMICOLON_instance = new SkikoKey('KEY_SEMICOLON', 40, 59);
    SkikoKey_KEY_SLASH_instance = new SkikoKey('KEY_SLASH', 41, 191);
    SkikoKey_KEY_COMMA_instance = new SkikoKey('KEY_COMMA', 42, 188);
    SkikoKey_KEY_BACKSLASH_instance = new SkikoKey('KEY_BACKSLASH', 43, 220);
    SkikoKey_KEY_PERIOD_instance = new SkikoKey('KEY_PERIOD', 44, 190);
    SkikoKey_KEY_BACK_QUOTE_instance = new SkikoKey('KEY_BACK_QUOTE', 45, 192);
    SkikoKey_KEY_EQUALS_instance = new SkikoKey('KEY_EQUALS', 46, 61);
    SkikoKey_KEY_MINUS_instance = new SkikoKey('KEY_MINUS', 47, 173);
    SkikoKey_KEY_ENTER_instance = new SkikoKey('KEY_ENTER', 48, 13);
    SkikoKey_KEY_ESCAPE_instance = new SkikoKey('KEY_ESCAPE', 49, 27);
    SkikoKey_KEY_TAB_instance = new SkikoKey('KEY_TAB', 50, 9);
    SkikoKey_KEY_BACKSPACE_instance = new SkikoKey('KEY_BACKSPACE', 51, 8);
    SkikoKey_KEY_SPACE_instance = new SkikoKey('KEY_SPACE', 52, 32);
    SkikoKey_KEY_CAPSLOCK_instance = new SkikoKey('KEY_CAPSLOCK', 53, 20);
    SkikoKey_KEY_LEFT_META_instance = new SkikoKey('KEY_LEFT_META', 54, 224);
    SkikoKey_KEY_LEFT_SHIFT_instance = new SkikoKey('KEY_LEFT_SHIFT', 55, 16);
    SkikoKey_KEY_LEFT_ALT_instance = new SkikoKey('KEY_LEFT_ALT', 56, 18);
    SkikoKey_KEY_LEFT_CONTROL_instance = new SkikoKey('KEY_LEFT_CONTROL', 57, 17);
    SkikoKey_KEY_RIGHT_META_instance = new SkikoKey('KEY_RIGHT_META', 58, -2147483424);
    SkikoKey_KEY_RIGHT_SHIFT_instance = new SkikoKey('KEY_RIGHT_SHIFT', 59, -2147483632);
    SkikoKey_KEY_RIGHT_ALT_instance = new SkikoKey('KEY_RIGHT_ALT', 60, 225);
    SkikoKey_KEY_RIGHT_CONTROL_instance = new SkikoKey('KEY_RIGHT_CONTROL', 61, -2147483631);
    SkikoKey_KEY_MENU_instance = new SkikoKey('KEY_MENU', 62, 93);
    SkikoKey_KEY_UP_instance = new SkikoKey('KEY_UP', 63, 38);
    SkikoKey_KEY_DOWN_instance = new SkikoKey('KEY_DOWN', 64, 40);
    SkikoKey_KEY_LEFT_instance = new SkikoKey('KEY_LEFT', 65, 37);
    SkikoKey_KEY_RIGHT_instance = new SkikoKey('KEY_RIGHT', 66, 39);
    SkikoKey_KEY_F1_instance = new SkikoKey('KEY_F1', 67, 112);
    SkikoKey_KEY_F2_instance = new SkikoKey('KEY_F2', 68, 113);
    SkikoKey_KEY_F3_instance = new SkikoKey('KEY_F3', 69, 114);
    SkikoKey_KEY_F4_instance = new SkikoKey('KEY_F4', 70, 115);
    SkikoKey_KEY_F5_instance = new SkikoKey('KEY_F5', 71, 116);
    SkikoKey_KEY_F6_instance = new SkikoKey('KEY_F6', 72, 117);
    SkikoKey_KEY_F7_instance = new SkikoKey('KEY_F7', 73, 118);
    SkikoKey_KEY_F8_instance = new SkikoKey('KEY_F8', 74, 119);
    SkikoKey_KEY_F9_instance = new SkikoKey('KEY_F9', 75, 120);
    SkikoKey_KEY_F10_instance = new SkikoKey('KEY_F10', 76, 121);
    SkikoKey_KEY_F11_instance = new SkikoKey('KEY_F11', 77, 122);
    SkikoKey_KEY_F12_instance = new SkikoKey('KEY_F12', 78, 123);
    SkikoKey_KEY_PRINTSCEEN_instance = new SkikoKey('KEY_PRINTSCEEN', 79, 44);
    SkikoKey_KEY_SCROLL_LOCK_instance = new SkikoKey('KEY_SCROLL_LOCK', 80, 145);
    SkikoKey_KEY_PAUSE_instance = new SkikoKey('KEY_PAUSE', 81, 19);
    SkikoKey_KEY_INSERT_instance = new SkikoKey('KEY_INSERT', 82, 45);
    SkikoKey_KEY_HOME_instance = new SkikoKey('KEY_HOME', 83, 36);
    SkikoKey_KEY_PGUP_instance = new SkikoKey('KEY_PGUP', 84, 33);
    SkikoKey_KEY_DELETE_instance = new SkikoKey('KEY_DELETE', 85, 46);
    SkikoKey_KEY_END_instance = new SkikoKey('KEY_END', 86, 35);
    SkikoKey_KEY_PGDOWN_instance = new SkikoKey('KEY_PGDOWN', 87, 34);
    SkikoKey_KEY_NUM_LOCK_instance = new SkikoKey('KEY_NUM_LOCK', 88, 144);
    SkikoKey_KEY_NUMPAD_0_instance = new SkikoKey('KEY_NUMPAD_0', 89, 96);
    SkikoKey_KEY_NUMPAD_1_instance = new SkikoKey('KEY_NUMPAD_1', 90, 97);
    SkikoKey_KEY_NUMPAD_2_instance = new SkikoKey('KEY_NUMPAD_2', 91, 98);
    SkikoKey_KEY_NUMPAD_3_instance = new SkikoKey('KEY_NUMPAD_3', 92, 99);
    SkikoKey_KEY_NUMPAD_4_instance = new SkikoKey('KEY_NUMPAD_4', 93, 100);
    SkikoKey_KEY_NUMPAD_5_instance = new SkikoKey('KEY_NUMPAD_5', 94, 101);
    SkikoKey_KEY_NUMPAD_6_instance = new SkikoKey('KEY_NUMPAD_6', 95, 102);
    SkikoKey_KEY_NUMPAD_7_instance = new SkikoKey('KEY_NUMPAD_7', 96, 103);
    SkikoKey_KEY_NUMPAD_8_instance = new SkikoKey('KEY_NUMPAD_8', 97, 104);
    SkikoKey_KEY_NUMPAD_9_instance = new SkikoKey('KEY_NUMPAD_9', 98, 105);
    SkikoKey_KEY_NUMPAD_ENTER_instance = new SkikoKey('KEY_NUMPAD_ENTER', 99, 14);
    SkikoKey_KEY_NUMPAD_ADD_instance = new SkikoKey('KEY_NUMPAD_ADD', 100, 107);
    SkikoKey_KEY_NUMPAD_SUBTRACT_instance = new SkikoKey('KEY_NUMPAD_SUBTRACT', 101, 109);
    SkikoKey_KEY_NUMPAD_MULTIPLY_instance = new SkikoKey('KEY_NUMPAD_MULTIPLY', 102, 106);
    SkikoKey_KEY_NUMPAD_DIVIDE_instance = new SkikoKey('KEY_NUMPAD_DIVIDE', 103, 111);
    SkikoKey_KEY_NUMPAD_DECIMAL_instance = new SkikoKey('KEY_NUMPAD_DECIMAL', 104, 110);
    Companion_getInstance_49();
  }
  function SkikoKey(name, ordinal, platformKeyCode) {
    Enum.call(this, name, ordinal);
    this.v34_1 = platformKeyCode;
  }
  SkikoKey.prototype.p35 = function () {
    return this.v34_1;
  };
  SkikoKey.$metadata$ = classMeta('SkikoKey', undefined, undefined, undefined, undefined, Enum.prototype);
  function SkikoKey_KEY_UNKNOWN_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_UNKNOWN_instance;
  }
  function SkikoKey_KEY_A_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_A_instance;
  }
  function SkikoKey_KEY_S_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_S_instance;
  }
  function SkikoKey_KEY_D_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_D_instance;
  }
  function SkikoKey_KEY_F_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F_instance;
  }
  function SkikoKey_KEY_H_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_H_instance;
  }
  function SkikoKey_KEY_G_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_G_instance;
  }
  function SkikoKey_KEY_Z_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_Z_instance;
  }
  function SkikoKey_KEY_X_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_X_instance;
  }
  function SkikoKey_KEY_C_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_C_instance;
  }
  function SkikoKey_KEY_V_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_V_instance;
  }
  function SkikoKey_KEY_B_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_B_instance;
  }
  function SkikoKey_KEY_Q_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_Q_instance;
  }
  function SkikoKey_KEY_W_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_W_instance;
  }
  function SkikoKey_KEY_E_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_E_instance;
  }
  function SkikoKey_KEY_R_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_R_instance;
  }
  function SkikoKey_KEY_Y_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_Y_instance;
  }
  function SkikoKey_KEY_T_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_T_instance;
  }
  function SkikoKey_KEY_U_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_U_instance;
  }
  function SkikoKey_KEY_I_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_I_instance;
  }
  function SkikoKey_KEY_P_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_P_instance;
  }
  function SkikoKey_KEY_L_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_L_instance;
  }
  function SkikoKey_KEY_J_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_J_instance;
  }
  function SkikoKey_KEY_K_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_K_instance;
  }
  function SkikoKey_KEY_N_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_N_instance;
  }
  function SkikoKey_KEY_M_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_M_instance;
  }
  function SkikoKey_KEY_O_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_O_instance;
  }
  function SkikoKey_KEY_1_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_1_instance;
  }
  function SkikoKey_KEY_2_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_2_instance;
  }
  function SkikoKey_KEY_3_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_3_instance;
  }
  function SkikoKey_KEY_4_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_4_instance;
  }
  function SkikoKey_KEY_5_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_5_instance;
  }
  function SkikoKey_KEY_6_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_6_instance;
  }
  function SkikoKey_KEY_7_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_7_instance;
  }
  function SkikoKey_KEY_8_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_8_instance;
  }
  function SkikoKey_KEY_9_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_9_instance;
  }
  function SkikoKey_KEY_0_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_0_instance;
  }
  function SkikoKey_KEY_CLOSE_BRACKET_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_CLOSE_BRACKET_instance;
  }
  function SkikoKey_KEY_OPEN_BRACKET_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_OPEN_BRACKET_instance;
  }
  function SkikoKey_KEY_QUOTE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_QUOTE_instance;
  }
  function SkikoKey_KEY_SEMICOLON_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_SEMICOLON_instance;
  }
  function SkikoKey_KEY_SLASH_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_SLASH_instance;
  }
  function SkikoKey_KEY_COMMA_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_COMMA_instance;
  }
  function SkikoKey_KEY_BACKSLASH_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_BACKSLASH_instance;
  }
  function SkikoKey_KEY_PERIOD_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PERIOD_instance;
  }
  function SkikoKey_KEY_BACK_QUOTE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_BACK_QUOTE_instance;
  }
  function SkikoKey_KEY_EQUALS_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_EQUALS_instance;
  }
  function SkikoKey_KEY_MINUS_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_MINUS_instance;
  }
  function SkikoKey_KEY_ENTER_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_ENTER_instance;
  }
  function SkikoKey_KEY_ESCAPE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_ESCAPE_instance;
  }
  function SkikoKey_KEY_TAB_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_TAB_instance;
  }
  function SkikoKey_KEY_BACKSPACE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_BACKSPACE_instance;
  }
  function SkikoKey_KEY_SPACE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_SPACE_instance;
  }
  function SkikoKey_KEY_CAPSLOCK_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_CAPSLOCK_instance;
  }
  function SkikoKey_KEY_LEFT_META_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_META_instance;
  }
  function SkikoKey_KEY_LEFT_SHIFT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_SHIFT_instance;
  }
  function SkikoKey_KEY_LEFT_ALT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_ALT_instance;
  }
  function SkikoKey_KEY_LEFT_CONTROL_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_CONTROL_instance;
  }
  function SkikoKey_KEY_RIGHT_META_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_META_instance;
  }
  function SkikoKey_KEY_RIGHT_SHIFT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_SHIFT_instance;
  }
  function SkikoKey_KEY_RIGHT_ALT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_ALT_instance;
  }
  function SkikoKey_KEY_RIGHT_CONTROL_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_CONTROL_instance;
  }
  function SkikoKey_KEY_MENU_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_MENU_instance;
  }
  function SkikoKey_KEY_UP_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_UP_instance;
  }
  function SkikoKey_KEY_DOWN_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_DOWN_instance;
  }
  function SkikoKey_KEY_LEFT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_instance;
  }
  function SkikoKey_KEY_RIGHT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_instance;
  }
  function SkikoKey_KEY_F1_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F1_instance;
  }
  function SkikoKey_KEY_F2_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F2_instance;
  }
  function SkikoKey_KEY_F3_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F3_instance;
  }
  function SkikoKey_KEY_F4_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F4_instance;
  }
  function SkikoKey_KEY_F5_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F5_instance;
  }
  function SkikoKey_KEY_F6_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F6_instance;
  }
  function SkikoKey_KEY_F7_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F7_instance;
  }
  function SkikoKey_KEY_F8_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F8_instance;
  }
  function SkikoKey_KEY_F9_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F9_instance;
  }
  function SkikoKey_KEY_F10_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F10_instance;
  }
  function SkikoKey_KEY_F11_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F11_instance;
  }
  function SkikoKey_KEY_F12_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F12_instance;
  }
  function SkikoKey_KEY_PRINTSCEEN_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PRINTSCEEN_instance;
  }
  function SkikoKey_KEY_SCROLL_LOCK_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_SCROLL_LOCK_instance;
  }
  function SkikoKey_KEY_PAUSE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PAUSE_instance;
  }
  function SkikoKey_KEY_INSERT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_INSERT_instance;
  }
  function SkikoKey_KEY_HOME_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_HOME_instance;
  }
  function SkikoKey_KEY_PGUP_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PGUP_instance;
  }
  function SkikoKey_KEY_DELETE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_DELETE_instance;
  }
  function SkikoKey_KEY_END_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_END_instance;
  }
  function SkikoKey_KEY_PGDOWN_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PGDOWN_instance;
  }
  function SkikoKey_KEY_NUM_LOCK_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUM_LOCK_instance;
  }
  function SkikoKey_KEY_NUMPAD_0_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_0_instance;
  }
  function SkikoKey_KEY_NUMPAD_1_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_1_instance;
  }
  function SkikoKey_KEY_NUMPAD_2_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_2_instance;
  }
  function SkikoKey_KEY_NUMPAD_3_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_3_instance;
  }
  function SkikoKey_KEY_NUMPAD_4_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_4_instance;
  }
  function SkikoKey_KEY_NUMPAD_5_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_5_instance;
  }
  function SkikoKey_KEY_NUMPAD_6_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_6_instance;
  }
  function SkikoKey_KEY_NUMPAD_7_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_7_instance;
  }
  function SkikoKey_KEY_NUMPAD_8_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_8_instance;
  }
  function SkikoKey_KEY_NUMPAD_9_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_9_instance;
  }
  function SkikoKey_KEY_NUMPAD_ENTER_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_ENTER_instance;
  }
  function SkikoKey_KEY_NUMPAD_ADD_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_ADD_instance;
  }
  function SkikoKey_KEY_NUMPAD_SUBTRACT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_SUBTRACT_instance;
  }
  function SkikoKey_KEY_NUMPAD_MULTIPLY_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_MULTIPLY_instance;
  }
  function SkikoKey_KEY_NUMPAD_DIVIDE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_DIVIDE_instance;
  }
  function SkikoKey_KEY_NUMPAD_DECIMAL_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_DECIMAL_instance;
  }
  function get_currentSystemTheme() {
    return SystemTheme_UNKNOWN_getInstance();
  }
  function createWebGLContext(canvas, attr) {
    var contextAttributes = new createWebGLContext$contextAttributes$1(attr);
    return GL.createContext(canvas, asJsObject(contextAttributes));
  }
  function createWebGLContext$default(canvas, attr, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      attr = null;
    return createWebGLContext(canvas, attr);
  }
  function asJsObject(_this__u8e3s4) {
    var jsObject = {};
    var tmp0_safe_receiver = _this__u8e3s4.alpha;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = jsObject.alpha = _this__u8e3s4.alpha;
    }
    var tmp1_safe_receiver = _this__u8e3s4.depth;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$1 = jsObject.depth = _this__u8e3s4.depth;
    }
    var tmp2_safe_receiver = _this__u8e3s4.stencil;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$2 = jsObject.stencil = _this__u8e3s4.stencil;
    }
    var tmp3_safe_receiver = _this__u8e3s4.antialias;
    if (tmp3_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$3 = jsObject.antialias = _this__u8e3s4.antialias;
    }
    var tmp4_safe_receiver = _this__u8e3s4.premultipliedAlpha;
    if (tmp4_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$4 = jsObject.premultipliedAlpha = _this__u8e3s4.premultipliedAlpha;
    }
    var tmp5_safe_receiver = _this__u8e3s4.preserveDrawingBuffer;
    if (tmp5_safe_receiver == null)
      null;
    else {
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$5 = jsObject.preserveDrawingBuffer = _this__u8e3s4.preserveDrawingBuffer;
    }
    var tmp6_safe_receiver = _this__u8e3s4.preferLowPowerToHighPerformance;
    if (tmp6_safe_receiver == null)
      null;
    else {
      var tmp$ret$6;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$6 = jsObject.preferLowPowerToHighPerformance = _this__u8e3s4.preferLowPowerToHighPerformance;
    }
    var tmp7_safe_receiver = _this__u8e3s4.failIfMajorPerformanceCaveat;
    if (tmp7_safe_receiver == null)
      null;
    else {
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$7 = jsObject.failIfMajorPerformanceCaveat = _this__u8e3s4.failIfMajorPerformanceCaveat;
    }
    var tmp8_safe_receiver = _this__u8e3s4.enableExtensionsByDefault;
    if (tmp8_safe_receiver == null)
      null;
    else {
      var tmp$ret$8;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$8 = jsObject.enableExtensionsByDefault = _this__u8e3s4.enableExtensionsByDefault;
    }
    var tmp9_safe_receiver = _this__u8e3s4.explicitSwapControl;
    if (tmp9_safe_receiver == null)
      null;
    else {
      var tmp$ret$9;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$9 = jsObject.explicitSwapControl = _this__u8e3s4.explicitSwapControl;
    }
    var tmp10_safe_receiver = _this__u8e3s4.renderViaOffscreenBackBuffer;
    if (tmp10_safe_receiver == null)
      null;
    else {
      var tmp$ret$10;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$10 = jsObject.renderViaOffscreenBackBuffer = _this__u8e3s4.renderViaOffscreenBackBuffer;
    }
    var tmp11_safe_receiver = _this__u8e3s4.majorVersion;
    if (tmp11_safe_receiver == null)
      null;
    else {
      var tmp$ret$11;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$11 = jsObject.majorVersion = _this__u8e3s4.majorVersion;
    }
    return jsObject;
  }
  function createWebGLContext$contextAttributes$1($attr) {
    var tmp = this;
    var tmp0_safe_receiver = $attr;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.alpha;
    tmp.q35_1 = tmp1_elvis_lhs == null ? 1 : tmp1_elvis_lhs;
    var tmp_0 = this;
    var tmp0_safe_receiver_0 = $attr;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.depth;
    tmp_0.r35_1 = tmp1_elvis_lhs_0 == null ? 1 : tmp1_elvis_lhs_0;
    var tmp_1 = this;
    var tmp0_safe_receiver_1 = $attr;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : tmp0_safe_receiver_1.stencil;
    tmp_1.s35_1 = tmp1_elvis_lhs_1 == null ? 8 : tmp1_elvis_lhs_1;
    var tmp_2 = this;
    var tmp0_safe_receiver_2 = $attr;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : tmp0_safe_receiver_2.antialias;
    tmp_2.t35_1 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
    var tmp_3 = this;
    var tmp0_safe_receiver_3 = $attr;
    var tmp1_elvis_lhs_3 = tmp0_safe_receiver_3 == null ? null : tmp0_safe_receiver_3.premultipliedAlpha;
    tmp_3.u35_1 = tmp1_elvis_lhs_3 == null ? 1 : tmp1_elvis_lhs_3;
    var tmp_4 = this;
    var tmp0_safe_receiver_4 = $attr;
    var tmp1_elvis_lhs_4 = tmp0_safe_receiver_4 == null ? null : tmp0_safe_receiver_4.preserveDrawingBuffer;
    tmp_4.v35_1 = tmp1_elvis_lhs_4 == null ? 0 : tmp1_elvis_lhs_4;
    var tmp_5 = this;
    var tmp0_safe_receiver_5 = $attr;
    var tmp1_elvis_lhs_5 = tmp0_safe_receiver_5 == null ? null : tmp0_safe_receiver_5.preferLowPowerToHighPerformance;
    tmp_5.w35_1 = tmp1_elvis_lhs_5 == null ? 0 : tmp1_elvis_lhs_5;
    var tmp_6 = this;
    var tmp0_safe_receiver_6 = $attr;
    var tmp1_elvis_lhs_6 = tmp0_safe_receiver_6 == null ? null : tmp0_safe_receiver_6.failIfMajorPerformanceCaveat;
    tmp_6.x35_1 = tmp1_elvis_lhs_6 == null ? 0 : tmp1_elvis_lhs_6;
    var tmp_7 = this;
    var tmp0_safe_receiver_7 = $attr;
    var tmp1_elvis_lhs_7 = tmp0_safe_receiver_7 == null ? null : tmp0_safe_receiver_7.enableExtensionsByDefault;
    tmp_7.y35_1 = tmp1_elvis_lhs_7 == null ? 1 : tmp1_elvis_lhs_7;
    var tmp_8 = this;
    var tmp0_safe_receiver_8 = $attr;
    var tmp1_elvis_lhs_8 = tmp0_safe_receiver_8 == null ? null : tmp0_safe_receiver_8.explicitSwapControl;
    tmp_8.z35_1 = tmp1_elvis_lhs_8 == null ? 0 : tmp1_elvis_lhs_8;
    var tmp_9 = this;
    var tmp0_safe_receiver_9 = $attr;
    var tmp1_elvis_lhs_9 = tmp0_safe_receiver_9 == null ? null : tmp0_safe_receiver_9.renderViaOffscreenBackBuffer;
    tmp_9.a36_1 = tmp1_elvis_lhs_9 == null ? 0 : tmp1_elvis_lhs_9;
    var tmp_10 = this;
    var tmp0_safe_receiver_10 = $attr;
    var tmp1_elvis_lhs_10 = tmp0_safe_receiver_10 == null ? null : tmp0_safe_receiver_10.majorVersion;
    tmp_10.b36_1 = tmp1_elvis_lhs_10 == null ? 1 : tmp1_elvis_lhs_10;
  }
  createWebGLContext$contextAttributes$1.prototype.c36 = function () {
    return this.q35_1;
  };
  createWebGLContext$contextAttributes$1.prototype.d36 = function () {
    return this.r35_1;
  };
  createWebGLContext$contextAttributes$1.prototype.e36 = function () {
    return this.s35_1;
  };
  createWebGLContext$contextAttributes$1.prototype.f36 = function () {
    return this.t35_1;
  };
  createWebGLContext$contextAttributes$1.prototype.g36 = function () {
    return this.u35_1;
  };
  createWebGLContext$contextAttributes$1.prototype.h36 = function () {
    return this.v35_1;
  };
  createWebGLContext$contextAttributes$1.prototype.i36 = function () {
    return this.w35_1;
  };
  createWebGLContext$contextAttributes$1.prototype.j36 = function () {
    return this.x35_1;
  };
  createWebGLContext$contextAttributes$1.prototype.k36 = function () {
    return this.y35_1;
  };
  createWebGLContext$contextAttributes$1.prototype.l36 = function () {
    return this.z35_1;
  };
  createWebGLContext$contextAttributes$1.prototype.m36 = function () {
    return this.a36_1;
  };
  createWebGLContext$contextAttributes$1.prototype.n36 = function () {
    return this.b36_1;
  };
  createWebGLContext$contextAttributes$1.$metadata$ = classMeta();
  Object.defineProperty(createWebGLContext$contextAttributes$1.prototype, 'alpha', {
    configurable: true,
    get: function () {
      return this.c36();
    }
  });
  Object.defineProperty(createWebGLContext$contextAttributes$1.prototype, 'depth', {
    configurable: true,
    get: function () {
      return this.d36();
    }
  });
  Object.defineProperty(createWebGLContext$contextAttributes$1.prototype, 'stencil', {
    configurable: true,
    get: function () {
      return this.e36();
    }
  });
  Object.defineProperty(createWebGLContext$contextAttributes$1.prototype, 'antialias', {
    configurable: true,
    get: function () {
      return this.f36();
    }
  });
  Object.defineProperty(createWebGLContext$contextAttributes$1.prototype, 'premultipliedAlpha', {
    configurable: true,
    get: function () {
      return this.g36();
    }
  });
  Object.defineProperty(createWebGLContext$contextAttributes$1.prototype, 'preserveDrawingBuffer', {
    configurable: true,
    get: function () {
      return this.h36();
    }
  });
  Object.defineProperty(createWebGLContext$contextAttributes$1.prototype, 'preferLowPowerToHighPerformance', {
    configurable: true,
    get: function () {
      return this.i36();
    }
  });
  Object.defineProperty(createWebGLContext$contextAttributes$1.prototype, 'failIfMajorPerformanceCaveat', {
    configurable: true,
    get: function () {
      return this.j36();
    }
  });
  Object.defineProperty(createWebGLContext$contextAttributes$1.prototype, 'enableExtensionsByDefault', {
    configurable: true,
    get: function () {
      return this.k36();
    }
  });
  Object.defineProperty(createWebGLContext$contextAttributes$1.prototype, 'explicitSwapControl', {
    configurable: true,
    get: function () {
      return this.l36();
    }
  });
  Object.defineProperty(createWebGLContext$contextAttributes$1.prototype, 'renderViaOffscreenBackBuffer', {
    configurable: true,
    get: function () {
      return this.m36();
    }
  });
  Object.defineProperty(createWebGLContext$contextAttributes$1.prototype, 'majorVersion', {
    configurable: true,
    get: function () {
      return this.n36();
    }
  });
  //region block: post-declaration
  Bitmap.prototype.a2j = get_width;
  Bitmap.prototype.b2j = get_height;
  Bitmap.prototype.b2n = get_colorType;
  Bitmap.prototype.c2n = get_colorSpace;
  Bitmap.prototype.d2n = get_isOpaque;
  //endregion
  //region block: init
  onContentScaleChanged = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Alignment_CENTER_getInstance;
  _.$_$.b = Alignment_END_getInstance;
  _.$_$.c = Alignment_JUSTIFY_getInstance;
  _.$_$.d = Alignment_LEFT_getInstance;
  _.$_$.e = Alignment_RIGHT_getInstance;
  _.$_$.f = Alignment_START_getInstance;
  _.$_$.g = BaselineMode_ALPHABETIC_getInstance;
  _.$_$.h = DecorationLineStyle_SOLID_getInstance;
  _.$_$.i = Direction_LTR_getInstance;
  _.$_$.j = Direction_RTL_getInstance;
  _.$_$.k = PlaceholderAlignment_ABOVE_BASELINE_getInstance;
  _.$_$.l = PlaceholderAlignment_BOTTOM_getInstance;
  _.$_$.m = PlaceholderAlignment_MIDDLE_getInstance;
  _.$_$.n = PlaceholderAlignment_TOP_getInstance;
  _.$_$.o = RectHeightMode_MAX_getInstance;
  _.$_$.p = RectHeightMode_STRUT_getInstance;
  _.$_$.q = RectWidthMode_TIGHT_getInstance;
  _.$_$.r = BlendMode_CLEAR_getInstance;
  _.$_$.s = BlendMode_COLOR_BURN_getInstance;
  _.$_$.t = BlendMode_COLOR_DODGE_getInstance;
  _.$_$.u = BlendMode_COLOR_getInstance;
  _.$_$.v = BlendMode_DARKEN_getInstance;
  _.$_$.w = BlendMode_DIFFERENCE_getInstance;
  _.$_$.x = BlendMode_DST_ATOP_getInstance;
  _.$_$.y = BlendMode_DST_IN_getInstance;
  _.$_$.z = BlendMode_DST_OUT_getInstance;
  _.$_$.a1 = BlendMode_DST_OVER_getInstance;
  _.$_$.b1 = BlendMode_DST_getInstance;
  _.$_$.c1 = BlendMode_EXCLUSION_getInstance;
  _.$_$.d1 = BlendMode_HARD_LIGHT_getInstance;
  _.$_$.e1 = BlendMode_HUE_getInstance;
  _.$_$.f1 = BlendMode_LIGHTEN_getInstance;
  _.$_$.g1 = BlendMode_LUMINOSITY_getInstance;
  _.$_$.h1 = BlendMode_MODULATE_getInstance;
  _.$_$.i1 = BlendMode_MULTIPLY_getInstance;
  _.$_$.j1 = BlendMode_OVERLAY_getInstance;
  _.$_$.k1 = BlendMode_PLUS_getInstance;
  _.$_$.l1 = BlendMode_SATURATION_getInstance;
  _.$_$.m1 = BlendMode_SCREEN_getInstance;
  _.$_$.n1 = BlendMode_SOFT_LIGHT_getInstance;
  _.$_$.o1 = BlendMode_SRC_ATOP_getInstance;
  _.$_$.p1 = BlendMode_SRC_IN_getInstance;
  _.$_$.q1 = BlendMode_SRC_OUT_getInstance;
  _.$_$.r1 = BlendMode_SRC_OVER_getInstance;
  _.$_$.s1 = BlendMode_SRC_getInstance;
  _.$_$.t1 = BlendMode_XOR_getInstance;
  _.$_$.u1 = ClipMode_DIFFERENCE_getInstance;
  _.$_$.v1 = ClipMode_INTERSECT_getInstance;
  _.$_$.w1 = ColorAlphaType_OPAQUE_getInstance;
  _.$_$.x1 = ColorAlphaType_PREMUL_getInstance;
  _.$_$.y1 = ColorType_ALPHA_8_getInstance;
  _.$_$.z1 = ColorType_RGBA_F16_getInstance;
  _.$_$.a2 = ColorType_RGB_565_getInstance;
  _.$_$.b2 = FilterMode_LINEAR_getInstance;
  _.$_$.c2 = FilterMode_NEAREST_getInstance;
  _.$_$.d2 = MipmapMode_NEAREST_getInstance;
  _.$_$.e2 = MipmapMode_NONE_getInstance;
  _.$_$.f2 = PaintMode_FILL_getInstance;
  _.$_$.g2 = PaintMode_STROKE_getInstance;
  _.$_$.h2 = PaintStrokeCap_BUTT_getInstance;
  _.$_$.i2 = PaintStrokeCap_ROUND_getInstance;
  _.$_$.j2 = PaintStrokeCap_SQUARE_getInstance;
  _.$_$.k2 = PaintStrokeJoin_BEVEL_getInstance;
  _.$_$.l2 = PaintStrokeJoin_MITER_getInstance;
  _.$_$.m2 = PaintStrokeJoin_ROUND_getInstance;
  _.$_$.n2 = PathDirection_COUNTER_CLOCKWISE_getInstance;
  _.$_$.o2 = PathFillMode_EVEN_ODD_getInstance;
  _.$_$.p2 = PathFillMode_WINDING_getInstance;
  _.$_$.q2 = PathOp_DIFFERENCE_getInstance;
  _.$_$.r2 = PathOp_INTERSECT_getInstance;
  _.$_$.s2 = PathOp_REVERSE_DIFFERENCE_getInstance;
  _.$_$.t2 = PathOp_UNION_getInstance;
  _.$_$.u2 = PathOp_XOR_getInstance;
  _.$_$.v2 = SkikoKey_KEY_0_getInstance;
  _.$_$.w2 = SkikoKey_KEY_1_getInstance;
  _.$_$.x2 = SkikoKey_KEY_2_getInstance;
  _.$_$.y2 = SkikoKey_KEY_3_getInstance;
  _.$_$.z2 = SkikoKey_KEY_4_getInstance;
  _.$_$.a3 = SkikoKey_KEY_5_getInstance;
  _.$_$.b3 = SkikoKey_KEY_6_getInstance;
  _.$_$.c3 = SkikoKey_KEY_7_getInstance;
  _.$_$.d3 = SkikoKey_KEY_8_getInstance;
  _.$_$.e3 = SkikoKey_KEY_9_getInstance;
  _.$_$.f3 = SkikoKey_KEY_A_getInstance;
  _.$_$.g3 = SkikoKey_KEY_BACKSLASH_getInstance;
  _.$_$.h3 = SkikoKey_KEY_BACKSPACE_getInstance;
  _.$_$.i3 = SkikoKey_KEY_BACK_QUOTE_getInstance;
  _.$_$.j3 = SkikoKey_KEY_B_getInstance;
  _.$_$.k3 = SkikoKey_KEY_CAPSLOCK_getInstance;
  _.$_$.l3 = SkikoKey_KEY_CLOSE_BRACKET_getInstance;
  _.$_$.m3 = SkikoKey_KEY_COMMA_getInstance;
  _.$_$.n3 = SkikoKey_KEY_C_getInstance;
  _.$_$.o3 = SkikoKey_KEY_DELETE_getInstance;
  _.$_$.p3 = SkikoKey_KEY_DOWN_getInstance;
  _.$_$.q3 = SkikoKey_KEY_D_getInstance;
  _.$_$.r3 = SkikoKey_KEY_END_getInstance;
  _.$_$.s3 = SkikoKey_KEY_ENTER_getInstance;
  _.$_$.t3 = SkikoKey_KEY_EQUALS_getInstance;
  _.$_$.u3 = SkikoKey_KEY_ESCAPE_getInstance;
  _.$_$.v3 = SkikoKey_KEY_E_getInstance;
  _.$_$.w3 = SkikoKey_KEY_F10_getInstance;
  _.$_$.x3 = SkikoKey_KEY_F11_getInstance;
  _.$_$.y3 = SkikoKey_KEY_F12_getInstance;
  _.$_$.z3 = SkikoKey_KEY_F1_getInstance;
  _.$_$.a4 = SkikoKey_KEY_F2_getInstance;
  _.$_$.b4 = SkikoKey_KEY_F3_getInstance;
  _.$_$.c4 = SkikoKey_KEY_F4_getInstance;
  _.$_$.d4 = SkikoKey_KEY_F5_getInstance;
  _.$_$.e4 = SkikoKey_KEY_F6_getInstance;
  _.$_$.f4 = SkikoKey_KEY_F7_getInstance;
  _.$_$.g4 = SkikoKey_KEY_F8_getInstance;
  _.$_$.h4 = SkikoKey_KEY_F9_getInstance;
  _.$_$.i4 = SkikoKey_KEY_F_getInstance;
  _.$_$.j4 = SkikoKey_KEY_G_getInstance;
  _.$_$.k4 = SkikoKey_KEY_HOME_getInstance;
  _.$_$.l4 = SkikoKey_KEY_H_getInstance;
  _.$_$.m4 = SkikoKey_KEY_INSERT_getInstance;
  _.$_$.n4 = SkikoKey_KEY_I_getInstance;
  _.$_$.o4 = SkikoKey_KEY_J_getInstance;
  _.$_$.p4 = SkikoKey_KEY_K_getInstance;
  _.$_$.q4 = SkikoKey_KEY_LEFT_ALT_getInstance;
  _.$_$.r4 = SkikoKey_KEY_LEFT_CONTROL_getInstance;
  _.$_$.s4 = SkikoKey_KEY_LEFT_META_getInstance;
  _.$_$.t4 = SkikoKey_KEY_LEFT_SHIFT_getInstance;
  _.$_$.u4 = SkikoKey_KEY_LEFT_getInstance;
  _.$_$.v4 = SkikoKey_KEY_L_getInstance;
  _.$_$.w4 = SkikoKey_KEY_MINUS_getInstance;
  _.$_$.x4 = SkikoKey_KEY_M_getInstance;
  _.$_$.y4 = SkikoKey_KEY_NUMPAD_0_getInstance;
  _.$_$.z4 = SkikoKey_KEY_NUMPAD_1_getInstance;
  _.$_$.a5 = SkikoKey_KEY_NUMPAD_2_getInstance;
  _.$_$.b5 = SkikoKey_KEY_NUMPAD_3_getInstance;
  _.$_$.c5 = SkikoKey_KEY_NUMPAD_4_getInstance;
  _.$_$.d5 = SkikoKey_KEY_NUMPAD_5_getInstance;
  _.$_$.e5 = SkikoKey_KEY_NUMPAD_6_getInstance;
  _.$_$.f5 = SkikoKey_KEY_NUMPAD_7_getInstance;
  _.$_$.g5 = SkikoKey_KEY_NUMPAD_8_getInstance;
  _.$_$.h5 = SkikoKey_KEY_NUMPAD_9_getInstance;
  _.$_$.i5 = SkikoKey_KEY_NUMPAD_ADD_getInstance;
  _.$_$.j5 = SkikoKey_KEY_NUMPAD_DIVIDE_getInstance;
  _.$_$.k5 = SkikoKey_KEY_NUMPAD_ENTER_getInstance;
  _.$_$.l5 = SkikoKey_KEY_NUMPAD_MULTIPLY_getInstance;
  _.$_$.m5 = SkikoKey_KEY_NUMPAD_SUBTRACT_getInstance;
  _.$_$.n5 = SkikoKey_KEY_NUM_LOCK_getInstance;
  _.$_$.o5 = SkikoKey_KEY_N_getInstance;
  _.$_$.p5 = SkikoKey_KEY_OPEN_BRACKET_getInstance;
  _.$_$.q5 = SkikoKey_KEY_O_getInstance;
  _.$_$.r5 = SkikoKey_KEY_PERIOD_getInstance;
  _.$_$.s5 = SkikoKey_KEY_PGDOWN_getInstance;
  _.$_$.t5 = SkikoKey_KEY_PGUP_getInstance;
  _.$_$.u5 = SkikoKey_KEY_PRINTSCEEN_getInstance;
  _.$_$.v5 = SkikoKey_KEY_P_getInstance;
  _.$_$.w5 = SkikoKey_KEY_Q_getInstance;
  _.$_$.x5 = SkikoKey_KEY_RIGHT_ALT_getInstance;
  _.$_$.y5 = SkikoKey_KEY_RIGHT_CONTROL_getInstance;
  _.$_$.z5 = SkikoKey_KEY_RIGHT_META_getInstance;
  _.$_$.a6 = SkikoKey_KEY_RIGHT_SHIFT_getInstance;
  _.$_$.b6 = SkikoKey_KEY_RIGHT_getInstance;
  _.$_$.c6 = SkikoKey_KEY_R_getInstance;
  _.$_$.d6 = SkikoKey_KEY_SCROLL_LOCK_getInstance;
  _.$_$.e6 = SkikoKey_KEY_SEMICOLON_getInstance;
  _.$_$.f6 = SkikoKey_KEY_SLASH_getInstance;
  _.$_$.g6 = SkikoKey_KEY_SPACE_getInstance;
  _.$_$.h6 = SkikoKey_KEY_S_getInstance;
  _.$_$.i6 = SkikoKey_KEY_TAB_getInstance;
  _.$_$.j6 = SkikoKey_KEY_T_getInstance;
  _.$_$.k6 = SkikoKey_KEY_UNKNOWN_getInstance;
  _.$_$.l6 = SkikoKey_KEY_UP_getInstance;
  _.$_$.m6 = SkikoKey_KEY_U_getInstance;
  _.$_$.n6 = SkikoKey_KEY_V_getInstance;
  _.$_$.o6 = SkikoKey_KEY_W_getInstance;
  _.$_$.p6 = SkikoKey_KEY_X_getInstance;
  _.$_$.q6 = SkikoKey_KEY_Y_getInstance;
  _.$_$.r6 = SkikoKey_KEY_Z_getInstance;
  _.$_$.s6 = SystemTheme_DARK_getInstance;
  _.$_$.t6 = Canvas_init_$Create$;
  _.$_$.u6 = FontCollection_init_$Create$;
  _.$_$.v6 = StrutStyle_init_$Create$;
  _.$_$.w6 = TextStyle_init_$Create$;
  _.$_$.x6 = Bitmap_init_$Create$;
  _.$_$.y6 = Font_init_$Create$;
  _.$_$.z6 = Paint_init_$Create$;
  _.$_$.a7 = Path_init_$Create$;
  _.$_$.b7 = PathMeasure_init_$Create$;
  _.$_$.c7 = PictureRecorder_init_$Create$;
  _.$_$.d7 = SkikoInputModifiers__has_impl_qg30o6;
  _.$_$.e7 = Companion_getInstance_3;
  _.$_$.f7 = Companion_getInstance_5;
  _.$_$.g7 = Companion_getInstance_6;
  _.$_$.h7 = Companion_getInstance_7;
  _.$_$.i7 = Companion_getInstance_10;
  _.$_$.j7 = Companion_getInstance_12;
  _.$_$.k7 = Companion_getInstance_13;
  _.$_$.l7 = Companion_getInstance_17;
  _.$_$.m7 = Companion_getInstance_20;
  _.$_$.n7 = Companion_getInstance_23;
  _.$_$.o7 = Companion_getInstance_29;
  _.$_$.p7 = Companion_getInstance_30;
  _.$_$.q7 = ShadowUtils_getInstance;
  _.$_$.r7 = Companion_getInstance_32;
  _.$_$.s7 = Companion_getInstance_44;
  _.$_$.t7 = DecorationStyle;
  _.$_$.u7 = LineMetrics;
  _.$_$.v7 = ParagraphBuilder;
  _.$_$.w7 = ParagraphStyle;
  _.$_$.x7 = PlaceholderStyle;
  _.$_$.y7 = Shadow;
  _.$_$.z7 = TextBox;
  _.$_$.a8 = TextIndent;
  _.$_$.b8 = TypefaceFontProvider;
  _.$_$.c8 = ColorInfo;
  _.$_$.d8 = CubicResampler;
  _.$_$.e8 = FilterMipmap;
  _.$_$.f8 = ImageInfo;
  _.$_$.g8 = Matrix44;
  _.$_$.h8 = Point3;
  _.$_$.i8 = Rect;
  _.$_$.j8 = ClipboardManager;
  _.$_$.k8 = SkiaLayer;
  _.$_$.l8 = SkikoInput;
  _.$_$.m8 = SkikoView;
  _.$_$.n8 = URIManager;
  _.$_$.o8 = currentNanoTime;
  _.$_$.p8 = get_currentSystemTheme;
  //endregion
  return _;
}));

//# sourceMappingURL=skiko-kjs.js.map
