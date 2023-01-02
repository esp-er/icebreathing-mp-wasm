(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui-geometry.js', './androidx-ui-unit.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui-geometry.js'), require('./androidx-ui-unit.js'), require('./skiko-kjs.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-graphics'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-ui-graphics'.");
    }
    if (typeof this['androidx-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-graphics'. Its dependency 'androidx-ui-geometry' was not found. Please, check whether 'androidx-ui-geometry' is loaded prior to 'androidx-ui-graphics'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-graphics'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-ui-graphics'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-graphics'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'androidx-ui-graphics'.");
    }
    root['androidx-ui-graphics'] = factory(typeof this['androidx-ui-graphics'] === 'undefined' ? {} : this['androidx-ui-graphics'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui-geometry'], this['androidx-ui-unit'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_kotlin, kotlin_androidx_compose_ui_ui_geometry, kotlin_androidx_compose_ui_ui_unit, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sign = Math.sign;
  var objectMeta = kotlin_kotlin.$_$.u7;
  var THROW_CCE = kotlin_kotlin.$_$.ba;
  var classMeta = kotlin_kotlin.$_$.y6;
  var Companion_getInstance = kotlin_androidx_compose_ui_ui_geometry.$_$.l1;
  var equals = kotlin_kotlin.$_$.a7;
  var Unit_getInstance = kotlin_kotlin.$_$.s2;
  var interfaceMeta = kotlin_kotlin.$_$.k7;
  var ULong = kotlin_kotlin.$_$.ea;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.i2;
  var Long = kotlin_kotlin.$_$.v9;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.h2;
  var ulongToDouble = kotlin_kotlin.$_$.db;
  var ULong__hashCode_impl_6hv2lb = kotlin_kotlin.$_$.j2;
  var numberToInt = kotlin_kotlin.$_$.s7;
  var toString = kotlin_kotlin.$_$.x7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var toLong = kotlin_kotlin.$_$.v7;
  var toRawBits = kotlin_kotlin.$_$.za;
  var toShort = kotlin_kotlin.$_$.w7;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.n2;
  var floatFromBits = kotlin_kotlin.$_$.c7;
  var _Offset___get_x__impl__xvi35n = kotlin_androidx_compose_ui_ui_geometry.$_$.b1;
  var _Offset___get_y__impl__8bzhra = kotlin_androidx_compose_ui_ui_geometry.$_$.c1;
  var isFinite = kotlin_kotlin.$_$.la;
  var Offset = kotlin_androidx_compose_ui_ui_geometry.$_$.d;
  var trimIndent = kotlin_kotlin.$_$.i9;
  var get_PI = kotlin_kotlin.$_$.y7;
  var hashCode = kotlin_kotlin.$_$.i7;
  var _CornerRadius___get_x__impl__1594cn = kotlin_androidx_compose_ui_ui_geometry.$_$.s;
  var _CornerRadius___get_y__impl__tyvleu = kotlin_androidx_compose_ui_ui_geometry.$_$.t;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ra;
  var CornerRadius$default = kotlin_androidx_compose_ui_ui_geometry.$_$.r;
  var Size = kotlin_androidx_compose_ui_ui_geometry.$_$.j;
  var Companion_getInstance_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.j1;
  var Offset_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.e;
  var toRect = kotlin_androidx_compose_ui_ui_geometry.$_$.q;
  var Offset__hashCode_impl_hbql41 = kotlin_androidx_compose_ui_ui_geometry.$_$.x;
  var getNumberHashCode = kotlin_kotlin.$_$.e7;
  var charSequenceLength = kotlin_kotlin.$_$.w6;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var getStringHashCode = kotlin_kotlin.$_$.h7;
  var withSign = kotlin_kotlin.$_$.f8;
  var compareTo = kotlin_kotlin.$_$.z6;
  var coerceIn = kotlin_kotlin.$_$.k8;
  var arrayCopy = kotlin_kotlin.$_$.t3;
  var coerceIn_0 = kotlin_kotlin.$_$.j8;
  var contentEquals = kotlin_kotlin.$_$.y3;
  var contentHashCode = kotlin_kotlin.$_$.a4;
  var toBits = kotlin_kotlin.$_$.xa;
  var isNaN_0 = kotlin_kotlin.$_$.oa;
  var LayoutDirection_Ltr_getInstance = kotlin_androidx_compose_ui_ui_unit.$_$.m1;
  var Size_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.k;
  var Size__hashCode_impl_2h1qpd = kotlin_androidx_compose_ui_ui_geometry.$_$.d1;
  var _Size___get_width__impl__58y75t = kotlin_androidx_compose_ui_ui_geometry.$_$.h1;
  var _Size___get_height__impl__a04p02 = kotlin_androidx_compose_ui_ui_geometry.$_$.e1;
  var toPx = kotlin_androidx_compose_ui_ui_unit.$_$.f;
  var toPx_0 = kotlin_androidx_compose_ui_ui_unit.$_$.g;
  var roundToPx = kotlin_androidx_compose_ui_ui_unit.$_$.c;
  var toDp = kotlin_androidx_compose_ui_ui_unit.$_$.d;
  var toSize = kotlin_androidx_compose_ui_ui_unit.$_$.h;
  var Density = kotlin_androidx_compose_ui_ui_unit.$_$.i;
  var get_center = kotlin_androidx_compose_ui_ui_geometry.$_$.l;
  var Companion_getInstance_1 = kotlin_androidx_compose_ui_ui_unit.$_$.d3;
  var IntSize = kotlin_androidx_compose_ui_ui_unit.$_$.r;
  var IntOffset = kotlin_androidx_compose_ui_ui_unit.$_$.q;
  var IntSize_0 = kotlin_androidx_compose_ui_ui_unit.$_$.s;
  var Companion_getInstance_2 = kotlin_androidx_compose_ui_ui_geometry.$_$.i1;
  var CornerRadius = kotlin_androidx_compose_ui_ui_geometry.$_$.b;
  var _Size___get_minDimension__impl__4iso0r = kotlin_androidx_compose_ui_ui_geometry.$_$.f1;
  var Density_0 = kotlin_androidx_compose_ui_ui_unit.$_$.j;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var Rect = kotlin_androidx_compose_ui_ui_geometry.$_$.f;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var ensureNotNull = kotlin_kotlin.$_$.ja;
  var BlendMode_SRC_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r1;
  var BlendMode_LUMINOSITY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g1;
  var BlendMode_COLOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u;
  var BlendMode_SATURATION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l1;
  var BlendMode_HUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e1;
  var BlendMode_MULTIPLY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i1;
  var BlendMode_EXCLUSION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c1;
  var BlendMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w;
  var BlendMode_SOFT_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n1;
  var BlendMode_HARD_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d1;
  var BlendMode_COLOR_BURN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s;
  var BlendMode_COLOR_DODGE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t;
  var BlendMode_LIGHTEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f1;
  var BlendMode_DARKEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v;
  var BlendMode_OVERLAY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j1;
  var BlendMode_SCREEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m1;
  var BlendMode_MODULATE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h1;
  var BlendMode_PLUS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k1;
  var BlendMode_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t1;
  var BlendMode_DST_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x;
  var BlendMode_SRC_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o1;
  var BlendMode_DST_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z;
  var BlendMode_SRC_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q1;
  var BlendMode_DST_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y;
  var BlendMode_SRC_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p1;
  var BlendMode_DST_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a1;
  var BlendMode_DST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b1;
  var BlendMode_SRC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s1;
  var BlendMode_CLEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r;
  var Companion_getInstance_3 = kotlin_org_jetbrains_skiko_skiko.$_$.p7;
  var Companion_getInstance_4 = kotlin_org_jetbrains_skiko_skiko.$_$.o7;
  var Rect_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.g;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$_$.l7;
  var until = kotlin_kotlin.$_$.q8;
  var step = kotlin_kotlin.$_$.p8;
  var ClipMode_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v1;
  var ClipMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u1;
  var Matrix44 = kotlin_org_jetbrains_skiko_skiko.$_$.g8;
  var FilterMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c2;
  var MipmapMode_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e2;
  var FilterMipmap = kotlin_org_jetbrains_skiko_skiko.$_$.e8;
  var CubicResampler = kotlin_org_jetbrains_skiko_skiko.$_$.d8;
  var FilterMode_LINEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b2;
  var MipmapMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d2;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_androidx_compose_ui_ui_unit.$_$.i2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_androidx_compose_ui_ui_unit.$_$.j2;
  var _IntSize___get_width__impl__d9yl4o = kotlin_androidx_compose_ui_ui_unit.$_$.n2;
  var _IntSize___get_height__impl__prv63b = kotlin_androidx_compose_ui_ui_unit.$_$.l2;
  var Canvas_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.t6;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.z6;
  var PaintMode_FILL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f2;
  var PaintMode_STROKE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g2;
  var PaintStrokeCap_BUTT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h2;
  var PaintStrokeCap_SQUARE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j2;
  var PaintStrokeCap_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i2;
  var PaintStrokeJoin_MITER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l2;
  var PaintStrokeJoin_BEVEL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k2;
  var PaintStrokeJoin_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m2;
  var Path_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.a7;
  var PathOp_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u2;
  var PathOp_REVERSE_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s2;
  var PathOp_UNION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t2;
  var PathOp_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r2;
  var PathOp_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q2;
  var PathFillMode_WINDING_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p2;
  var PathFillMode_EVEN_ODD_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o2;
  var PathDirection_COUNTER_CLOCKWISE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n2;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$_$.m7;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.n7;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.x1;
  var PathMeasure_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.b7;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.e7;
  var Companion_getInstance_9 = kotlin_org_jetbrains_skiko_skiko.$_$.f7;
  var ColorType_RGBA_F16_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z1;
  var ColorType_RGB_565_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a2;
  var ColorType_ALPHA_8_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y1;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$_$.g7;
  var ColorAlphaType_OPAQUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w1;
  var ColorAlphaType_PREMUL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x1;
  var ColorInfo = kotlin_org_jetbrains_skiko_skiko.$_$.c8;
  var ImageInfo = kotlin_org_jetbrains_skiko_skiko.$_$.f8;
  var Bitmap_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.x6;
  //endregion
  //region block: pre-declaration
  SolidColor.prototype = Object.create(Brush.prototype);
  SolidColor.prototype.constructor = SolidColor;
  function clipRect(rect, clipOp) {
    return this.h38(rect.u2i_1, rect.v2i_1, rect.w2i_1, rect.x2i_1, clipOp);
  }
  function clipRect$default(rect, clipOp, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      clipOp = Companion_getInstance_13().k38_1;
    var tmp;
    if ($handler == null) {
      this.g38(rect, clipOp);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = clipOp;
      tmp = $handler(rect, tmp_0 == null ? null : new ClipOp(tmp_0));
    }
    return tmp;
  }
  function clipPath$default(path, clipOp, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      clipOp = Companion_getInstance_13().k38_1;
    var tmp;
    if ($handler == null) {
      this.l38(path, clipOp);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = clipOp;
      tmp = $handler(path, tmp_0 == null ? null : new ClipOp(tmp_0));
    }
    return tmp;
  }
  function drawRect(rect, paint) {
    return this.p38(rect.u2i_1, rect.v2i_1, rect.w2i_1, rect.x2i_1, paint);
  }
  Rectangle.prototype = Object.create(Outline.prototype);
  Rectangle.prototype.constructor = Rectangle;
  Rounded.prototype = Object.create(Outline.prototype);
  Rounded.prototype.constructor = Rounded;
  Generic.prototype = Object.create(Outline.prototype);
  Generic.prototype.constructor = Generic;
  function addPath$default(path, offset, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = Companion_getInstance_0().o2i_1;
    var tmp;
    if ($handler == null) {
      this.y3f(path, offset);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = offset;
      tmp = $handler(path, tmp_0 == null ? null : new Offset_0(tmp_0));
    }
    return tmp;
  }
  Adaptation$Companion$Bradford$1.prototype = Object.create(Adaptation.prototype);
  Adaptation$Companion$Bradford$1.prototype.constructor = Adaptation$Companion$Bradford$1;
  Adaptation$Companion$VonKries$1.prototype = Object.create(Adaptation.prototype);
  Adaptation$Companion$VonKries$1.prototype.constructor = Adaptation$Companion$VonKries$1;
  Adaptation$Companion$Ciecat02$1.prototype = Object.create(Adaptation.prototype);
  Adaptation$Companion$Ciecat02$1.prototype.constructor = Adaptation$Companion$Ciecat02$1;
  Connector$Companion$identity$1.prototype = Object.create(Connector.prototype);
  Connector$Companion$identity$1.prototype.constructor = Connector$Companion$identity$1;
  RgbConnector.prototype = Object.create(Connector.prototype);
  RgbConnector.prototype.constructor = RgbConnector;
  Lab.prototype = Object.create(ColorSpace.prototype);
  Lab.prototype.constructor = Lab;
  Oklab.prototype = Object.create(ColorSpace.prototype);
  Oklab.prototype.constructor = Oklab;
  Rgb.prototype = Object.create(ColorSpace.prototype);
  Rgb.prototype.constructor = Rgb;
  Xyz.prototype = Object.create(ColorSpace.prototype);
  Xyz.prototype.constructor = Xyz;
  function get_center_0() {
    return get_center(this.z3k().j3k());
  }
  function get_size() {
    return this.z3k().j3k();
  }
  function drawLine$default(color, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      Companion_getInstance_36();
      strokeWidth = 0.0;
    }
    if (!(($mask0 & 16) === 0))
      cap = Companion_getInstance_36().y3l_1;
    if (!(($mask0 & 32) === 0))
      pathEffect = null;
    if (!(($mask0 & 64) === 0))
      alpha = 1.0;
    if (!(($mask0 & 128) === 0))
      colorFilter = null;
    if (!(($mask0 & 256) === 0))
      blendMode = Companion_getInstance_35().o3e_1;
    var tmp;
    if ($handler == null) {
      this.a3l(color, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = new Color(color);
      var tmp_1 = new Offset_0(start);
      var tmp_2 = new Offset_0(end);
      var tmp_3 = cap;
      var tmp_4 = tmp_3 == null ? null : new StrokeCap(tmp_3);
      var tmp_5 = blendMode;
      tmp = $handler(tmp_0, tmp_1, tmp_2, strokeWidth, tmp_4, pathEffect, alpha, colorFilter, tmp_5 == null ? null : new BlendMode(tmp_5));
    }
    return tmp;
  }
  function drawRect$default(brush, topLeft, size, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      topLeft = Companion_getInstance_0().o2i_1;
    if (!(($mask0 & 4) === 0))
      size = offsetSize(this.j3k(), this, topLeft);
    if (!(($mask0 & 8) === 0))
      alpha = 1.0;
    if (!(($mask0 & 16) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 32) === 0))
      colorFilter = null;
    if (!(($mask0 & 64) === 0))
      blendMode = Companion_getInstance_35().o3e_1;
    var tmp;
    if ($handler == null) {
      this.s3e(brush, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = topLeft;
      var tmp_1 = tmp_0 == null ? null : new Offset_0(tmp_0);
      var tmp_2 = size;
      var tmp_3 = tmp_2 == null ? null : new Size_0(tmp_2);
      var tmp_4 = blendMode;
      tmp = $handler(brush, tmp_1, tmp_3, alpha, style, colorFilter, tmp_4 == null ? null : new BlendMode(tmp_4));
    }
    return tmp;
  }
  function drawRect$default_0(color, topLeft, size, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      topLeft = Companion_getInstance_0().o2i_1;
    if (!(($mask0 & 4) === 0))
      size = offsetSize(this.j3k(), this, topLeft);
    if (!(($mask0 & 8) === 0))
      alpha = 1.0;
    if (!(($mask0 & 16) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 32) === 0))
      colorFilter = null;
    if (!(($mask0 & 64) === 0))
      blendMode = Companion_getInstance_35().o3e_1;
    var tmp;
    if ($handler == null) {
      this.n3e(color, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = new Color(color);
      var tmp_1 = topLeft;
      var tmp_2 = tmp_1 == null ? null : new Offset_0(tmp_1);
      var tmp_3 = size;
      var tmp_4 = tmp_3 == null ? null : new Size_0(tmp_3);
      var tmp_5 = blendMode;
      tmp = $handler(tmp_0, tmp_2, tmp_4, alpha, style, colorFilter, tmp_5 == null ? null : new BlendMode(tmp_5));
    }
    return tmp;
  }
  function drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    this.f3l(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, null, 512, null);
  }
  function drawImage$default(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      srcOffset = Companion_getInstance_1().l2l_1;
    if (!(($mask0 & 4) === 0))
      srcSize = IntSize(image.a2j(), image.b2j());
    if (!(($mask0 & 8) === 0))
      dstOffset = Companion_getInstance_1().l2l_1;
    if (!(($mask0 & 16) === 0))
      dstSize = srcSize;
    if (!(($mask0 & 32) === 0))
      alpha = 1.0;
    if (!(($mask0 & 64) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 128) === 0))
      colorFilter = null;
    if (!(($mask0 & 256) === 0))
      blendMode = Companion_getInstance_35().o3e_1;
    if (!(($mask0 & 512) === 0))
      filterQuality = Companion_getInstance_35().p3e_1;
    var tmp;
    if ($handler == null) {
      this.e3l(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = srcOffset;
      var tmp_1 = tmp_0 == null ? null : new IntOffset(tmp_0);
      var tmp_2 = srcSize;
      var tmp_3 = tmp_2 == null ? null : new IntSize_0(tmp_2);
      var tmp_4 = dstOffset;
      var tmp_5 = tmp_4 == null ? null : new IntOffset(tmp_4);
      var tmp_6 = dstSize;
      var tmp_7 = tmp_6 == null ? null : new IntSize_0(tmp_6);
      var tmp_8 = blendMode;
      var tmp_9 = tmp_8 == null ? null : new BlendMode(tmp_8);
      var tmp_10 = filterQuality;
      tmp = $handler(image, tmp_1, tmp_3, tmp_5, tmp_7, alpha, style, colorFilter, tmp_9, tmp_10 == null ? null : new FilterQuality(tmp_10));
    }
    return tmp;
  }
  function drawRoundRect$default(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      topLeft = Companion_getInstance_0().o2i_1;
    if (!(($mask0 & 4) === 0))
      size = offsetSize(this.j3k(), this, topLeft);
    if (!(($mask0 & 8) === 0))
      cornerRadius = Companion_getInstance_2().g2i_1;
    if (!(($mask0 & 16) === 0))
      alpha = 1.0;
    if (!(($mask0 & 32) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 64) === 0))
      colorFilter = null;
    if (!(($mask0 & 128) === 0))
      blendMode = Companion_getInstance_35().o3e_1;
    var tmp;
    if ($handler == null) {
      this.r3e(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = topLeft;
      var tmp_1 = tmp_0 == null ? null : new Offset_0(tmp_0);
      var tmp_2 = size;
      var tmp_3 = tmp_2 == null ? null : new Size_0(tmp_2);
      var tmp_4 = cornerRadius;
      var tmp_5 = tmp_4 == null ? null : new CornerRadius(tmp_4);
      var tmp_6 = blendMode;
      tmp = $handler(brush, tmp_1, tmp_3, tmp_5, alpha, style, colorFilter, tmp_6 == null ? null : new BlendMode(tmp_6));
    }
    return tmp;
  }
  function drawCircle$default(color, radius, center, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      radius = _Size___get_minDimension__impl__4iso0r(this.j3k()) / 2.0;
    if (!(($mask0 & 4) === 0))
      center = this.q3l();
    if (!(($mask0 & 8) === 0))
      alpha = 1.0;
    if (!(($mask0 & 16) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 32) === 0))
      colorFilter = null;
    if (!(($mask0 & 64) === 0))
      blendMode = Companion_getInstance_35().o3e_1;
    var tmp;
    if ($handler == null) {
      this.h3l(color, radius, center, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = new Color(color);
      var tmp_1 = center;
      var tmp_2 = tmp_1 == null ? null : new Offset_0(tmp_1);
      var tmp_3 = blendMode;
      tmp = $handler(tmp_0, radius, tmp_2, alpha, style, colorFilter, tmp_3 == null ? null : new BlendMode(tmp_3));
    }
    return tmp;
  }
  function drawArc$default(color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      topLeft = Companion_getInstance_0().o2i_1;
    if (!(($mask0 & 32) === 0))
      size = offsetSize(this.j3k(), this, topLeft);
    if (!(($mask0 & 64) === 0))
      alpha = 1.0;
    if (!(($mask0 & 128) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 256) === 0))
      colorFilter = null;
    if (!(($mask0 & 512) === 0))
      blendMode = Companion_getInstance_35().o3e_1;
    var tmp;
    if ($handler == null) {
      this.j3l(color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = new Color(color);
      var tmp_1 = topLeft;
      var tmp_2 = tmp_1 == null ? null : new Offset_0(tmp_1);
      var tmp_3 = size;
      var tmp_4 = tmp_3 == null ? null : new Size_0(tmp_3);
      var tmp_5 = blendMode;
      tmp = $handler(tmp_0, startAngle, sweepAngle, useCenter, tmp_2, tmp_4, alpha, style, colorFilter, tmp_5 == null ? null : new BlendMode(tmp_5));
    }
    return tmp;
  }
  function drawPath$default(path, color, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      alpha = 1.0;
    if (!(($mask0 & 8) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 16) === 0))
      colorFilter = null;
    if (!(($mask0 & 32) === 0))
      blendMode = Companion_getInstance_35().o3e_1;
    var tmp;
    if ($handler == null) {
      this.l3e(path, color, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = new Color(color);
      var tmp_1 = blendMode;
      tmp = $handler(path, tmp_0, alpha, style, colorFilter, tmp_1 == null ? null : new BlendMode(tmp_1));
    }
    return tmp;
  }
  function drawPath$default_0(path, brush, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      alpha = 1.0;
    if (!(($mask0 & 8) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 16) === 0))
      colorFilter = null;
    if (!(($mask0 & 32) === 0))
      blendMode = Companion_getInstance_35().o3e_1;
    var tmp;
    if ($handler == null) {
      this.q3e(path, brush, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = blendMode;
      tmp = $handler(path, brush, alpha, style, colorFilter, tmp_0 == null ? null : new BlendMode(tmp_0));
    }
    return tmp;
  }
  function drawPoints$default(points, pointMode, color, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      Companion_getInstance_36();
      strokeWidth = 0.0;
    }
    if (!(($mask0 & 16) === 0))
      cap = Companion_getInstance_25().y3g_1;
    if (!(($mask0 & 32) === 0))
      pathEffect = null;
    if (!(($mask0 & 64) === 0))
      alpha = 1.0;
    if (!(($mask0 & 128) === 0))
      colorFilter = null;
    if (!(($mask0 & 256) === 0))
      blendMode = Companion_getInstance_35().o3e_1;
    var tmp;
    if ($handler == null) {
      this.n3l(points, pointMode, color, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = new PointMode(pointMode);
      var tmp_1 = new Color(color);
      var tmp_2 = cap;
      var tmp_3 = tmp_2 == null ? null : new StrokeCap(tmp_2);
      var tmp_4 = blendMode;
      tmp = $handler(points, tmp_0, tmp_1, strokeWidth, tmp_3, pathEffect, alpha, colorFilter, tmp_4 == null ? null : new BlendMode(tmp_4));
    }
    return tmp;
  }
  function clipPath$default_0(path, clipOp, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      clipOp = Companion_getInstance_13().k38_1;
    var tmp;
    if ($handler == null) {
      this.l38(path, clipOp);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = clipOp;
      tmp = $handler(path, tmp_0 == null ? null : new ClipOp(tmp_0));
    }
    return tmp;
  }
  Stroke.prototype = Object.create(DrawStyle.prototype);
  Stroke.prototype.constructor = Stroke;
  Fill.prototype = Object.create(DrawStyle.prototype);
  Fill.prototype.constructor = Fill;
  Close.prototype = Object.create(PathNode.prototype);
  Close.prototype.constructor = Close;
  RelativeMoveTo.prototype = Object.create(PathNode.prototype);
  RelativeMoveTo.prototype.constructor = RelativeMoveTo;
  MoveTo.prototype = Object.create(PathNode.prototype);
  MoveTo.prototype.constructor = MoveTo;
  RelativeLineTo.prototype = Object.create(PathNode.prototype);
  RelativeLineTo.prototype.constructor = RelativeLineTo;
  LineTo.prototype = Object.create(PathNode.prototype);
  LineTo.prototype.constructor = LineTo;
  RelativeHorizontalTo.prototype = Object.create(PathNode.prototype);
  RelativeHorizontalTo.prototype.constructor = RelativeHorizontalTo;
  HorizontalTo.prototype = Object.create(PathNode.prototype);
  HorizontalTo.prototype.constructor = HorizontalTo;
  RelativeVerticalTo.prototype = Object.create(PathNode.prototype);
  RelativeVerticalTo.prototype.constructor = RelativeVerticalTo;
  VerticalTo.prototype = Object.create(PathNode.prototype);
  VerticalTo.prototype.constructor = VerticalTo;
  RelativeCurveTo.prototype = Object.create(PathNode.prototype);
  RelativeCurveTo.prototype.constructor = RelativeCurveTo;
  CurveTo.prototype = Object.create(PathNode.prototype);
  CurveTo.prototype.constructor = CurveTo;
  RelativeReflectiveCurveTo.prototype = Object.create(PathNode.prototype);
  RelativeReflectiveCurveTo.prototype.constructor = RelativeReflectiveCurveTo;
  ReflectiveCurveTo.prototype = Object.create(PathNode.prototype);
  ReflectiveCurveTo.prototype.constructor = ReflectiveCurveTo;
  RelativeQuadTo.prototype = Object.create(PathNode.prototype);
  RelativeQuadTo.prototype.constructor = RelativeQuadTo;
  QuadTo.prototype = Object.create(PathNode.prototype);
  QuadTo.prototype.constructor = QuadTo;
  RelativeReflectiveQuadTo.prototype = Object.create(PathNode.prototype);
  RelativeReflectiveQuadTo.prototype.constructor = RelativeReflectiveQuadTo;
  ReflectiveQuadTo.prototype = Object.create(PathNode.prototype);
  ReflectiveQuadTo.prototype.constructor = ReflectiveQuadTo;
  RelativeArcTo.prototype = Object.create(PathNode.prototype);
  RelativeArcTo.prototype.constructor = RelativeArcTo;
  ArcTo.prototype = Object.create(PathNode.prototype);
  ArcTo.prototype.constructor = ArcTo;
  //endregion
  function _BlendMode___init__impl__q6jalh(value) {
    return value;
  }
  function Companion() {
    Companion_instance = this;
    this.o36_1 = _BlendMode___init__impl__q6jalh(0);
    this.p36_1 = _BlendMode___init__impl__q6jalh(1);
    this.q36_1 = _BlendMode___init__impl__q6jalh(2);
    this.r36_1 = _BlendMode___init__impl__q6jalh(3);
    this.s36_1 = _BlendMode___init__impl__q6jalh(4);
    this.t36_1 = _BlendMode___init__impl__q6jalh(5);
    this.u36_1 = _BlendMode___init__impl__q6jalh(6);
    this.v36_1 = _BlendMode___init__impl__q6jalh(7);
    this.w36_1 = _BlendMode___init__impl__q6jalh(8);
    this.x36_1 = _BlendMode___init__impl__q6jalh(9);
    this.y36_1 = _BlendMode___init__impl__q6jalh(10);
    this.z36_1 = _BlendMode___init__impl__q6jalh(11);
    this.a37_1 = _BlendMode___init__impl__q6jalh(12);
    this.b37_1 = _BlendMode___init__impl__q6jalh(13);
    this.c37_1 = _BlendMode___init__impl__q6jalh(14);
    this.d37_1 = _BlendMode___init__impl__q6jalh(15);
    this.e37_1 = _BlendMode___init__impl__q6jalh(16);
    this.f37_1 = _BlendMode___init__impl__q6jalh(17);
    this.g37_1 = _BlendMode___init__impl__q6jalh(18);
    this.h37_1 = _BlendMode___init__impl__q6jalh(19);
    this.i37_1 = _BlendMode___init__impl__q6jalh(20);
    this.j37_1 = _BlendMode___init__impl__q6jalh(21);
    this.k37_1 = _BlendMode___init__impl__q6jalh(22);
    this.l37_1 = _BlendMode___init__impl__q6jalh(23);
    this.m37_1 = _BlendMode___init__impl__q6jalh(24);
    this.n37_1 = _BlendMode___init__impl__q6jalh(25);
    this.o37_1 = _BlendMode___init__impl__q6jalh(26);
    this.p37_1 = _BlendMode___init__impl__q6jalh(27);
    this.q37_1 = _BlendMode___init__impl__q6jalh(28);
  }
  Companion.prototype.r37 = function () {
    return this.o36_1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_11() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function BlendMode__toString_impl_uuibkd($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_11().o36_1 ? 'Clear' : tmp0_subject === Companion_getInstance_11().p36_1 ? 'Src' : tmp0_subject === Companion_getInstance_11().q36_1 ? 'Dst' : tmp0_subject === Companion_getInstance_11().r36_1 ? 'SrcOver' : tmp0_subject === Companion_getInstance_11().s36_1 ? 'DstOver' : tmp0_subject === Companion_getInstance_11().t36_1 ? 'SrcIn' : tmp0_subject === Companion_getInstance_11().u36_1 ? 'DstIn' : tmp0_subject === Companion_getInstance_11().v36_1 ? 'SrcOut' : tmp0_subject === Companion_getInstance_11().w36_1 ? 'DstOut' : tmp0_subject === Companion_getInstance_11().x36_1 ? 'SrcAtop' : tmp0_subject === Companion_getInstance_11().y36_1 ? 'DstAtop' : tmp0_subject === Companion_getInstance_11().z36_1 ? 'Xor' : tmp0_subject === Companion_getInstance_11().a37_1 ? 'Plus' : tmp0_subject === Companion_getInstance_11().b37_1 ? 'Modulate' : tmp0_subject === Companion_getInstance_11().c37_1 ? 'Screen' : tmp0_subject === Companion_getInstance_11().d37_1 ? 'Overlay' : tmp0_subject === Companion_getInstance_11().e37_1 ? 'Darken' : tmp0_subject === Companion_getInstance_11().f37_1 ? 'Lighten' : tmp0_subject === Companion_getInstance_11().g37_1 ? 'ColorDodge' : tmp0_subject === Companion_getInstance_11().h37_1 ? 'ColorBurn' : tmp0_subject === Companion_getInstance_11().i37_1 ? 'HardLight' : tmp0_subject === Companion_getInstance_11().j37_1 ? 'Softlight' : tmp0_subject === Companion_getInstance_11().k37_1 ? 'Difference' : tmp0_subject === Companion_getInstance_11().l37_1 ? 'Exclusion' : tmp0_subject === Companion_getInstance_11().m37_1 ? 'Multiply' : tmp0_subject === Companion_getInstance_11().n37_1 ? 'Hue' : tmp0_subject === Companion_getInstance_11().o37_1 ? 'Saturation' : tmp0_subject === Companion_getInstance_11().p37_1 ? 'Color' : tmp0_subject === Companion_getInstance_11().q37_1 ? 'Luminosity' : 'Unknown';
  }
  function BlendMode__hashCode_impl_93ceri($this) {
    return $this;
  }
  function BlendMode__equals_impl_1tm25i($this, other) {
    if (!(other instanceof BlendMode))
      return false;
    var tmp0_other_with_cast = other instanceof BlendMode ? other.s37_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function BlendMode(value) {
    Companion_getInstance_11();
    this.s37_1 = value;
  }
  BlendMode.prototype.toString = function () {
    return BlendMode__toString_impl_uuibkd(this.s37_1);
  };
  BlendMode.prototype.hashCode = function () {
    return BlendMode__hashCode_impl_93ceri(this.s37_1);
  };
  BlendMode.prototype.equals = function (other) {
    return BlendMode__equals_impl_1tm25i(this.s37_1, other);
  };
  BlendMode.$metadata$ = classMeta('BlendMode');
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_12() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Brush() {
    Companion_getInstance_12();
    this.t37_1 = Companion_getInstance().p2j_1;
  }
  Brush.$metadata$ = classMeta('Brush');
  function SolidColor(value) {
    Brush.call(this);
    this.w37_1 = value;
  }
  SolidColor.prototype.u37 = function (size, p, alpha) {
    p.x37(get_DefaultAlpha());
    var tmp;
    if (!(alpha === get_DefaultAlpha())) {
      var tmp_0 = _Color___get_alpha__impl__wcfyv1(this.w37_1) * alpha;
      tmp = Color__copy$default_impl_ectz3s(this.w37_1, tmp_0, 0.0, 0.0, 0.0, 14, null);
    } else {
      tmp = this.w37_1;
    }
    p.y37(tmp);
    if (!(p.z37() == null)) {
      p.x2t(null);
    }
  };
  SolidColor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SolidColor))
      return false;
    if (!equals(this.w37_1, other.w37_1))
      return false;
    return true;
  };
  SolidColor.prototype.hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.w37_1);
  };
  SolidColor.prototype.toString = function () {
    return 'SolidColor(value=' + new Color(this.w37_1) + ')';
  };
  SolidColor.$metadata$ = classMeta('SolidColor', undefined, undefined, undefined, undefined, Brush.prototype);
  function Canvas() {
  }
  Canvas.$metadata$ = interfaceMeta('Canvas');
  function withSaveLayer(_this__u8e3s4, bounds, paint, block) {
    try {
      _this__u8e3s4.c38(bounds, paint);
      block();
    }finally {
      _this__u8e3s4.b38();
    }
  }
  function Canvas_0(image) {
    return ActualCanvas(image);
  }
  function _ClipOp___init__impl__pqwwy8(value) {
    return value;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.j38_1 = _ClipOp___init__impl__pqwwy8(0);
    this.k38_1 = _ClipOp___init__impl__pqwwy8(1);
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_13() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ClipOp__toString_impl_vwrlao($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_13().j38_1 ? 'Difference' : tmp0_subject === Companion_getInstance_13().k38_1 ? 'Intersect' : 'Unknown';
  }
  function ClipOp__hashCode_impl_hd6jvl($this) {
    return $this;
  }
  function ClipOp__equals_impl_g5ajel($this, other) {
    if (!(other instanceof ClipOp))
      return false;
    var tmp0_other_with_cast = other instanceof ClipOp ? other.w38_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function ClipOp(value) {
    Companion_getInstance_13();
    this.w38_1 = value;
  }
  ClipOp.prototype.toString = function () {
    return ClipOp__toString_impl_vwrlao(this.w38_1);
  };
  ClipOp.prototype.hashCode = function () {
    return ClipOp__hashCode_impl_hd6jvl(this.w38_1);
  };
  ClipOp.prototype.equals = function (other) {
    return ClipOp__equals_impl_g5ajel(this.w38_1, other);
  };
  ClipOp.$metadata$ = classMeta('ClipOp');
  function _Color___init__impl__r6cqi2(value) {
    new ULong(value);
    return value;
  }
  function _Color___get_value__impl__1pls5m($this) {
    return $this;
  }
  function _Color___get_colorSpace__impl__jqqozk($this) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.ColorSpaces.getColorSpace' call
    var tmp2_getColorSpace = ColorSpaces_getInstance();
    var tmp$ret$1;
    // Inline function 'kotlin.ULong.toInt' call
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).r7(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    var tmp1_toInt = tmp$ret$0;
    tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_toInt).b7();
    var tmp3_getColorSpace = tmp$ret$1;
    tmp$ret$2 = tmp2_getColorSpace.t39_1[tmp3_getColorSpace];
    return tmp$ret$2;
  }
  function Color__convert_impl_so5m8t($this, colorSpace) {
    if (colorSpace.equals(_Color___get_colorSpace__impl__jqqozk($this))) {
      return $this;
    }
    var tmp = _Color___get_colorSpace__impl__jqqozk($this);
    var connector = connect$default(tmp, colorSpace, null, 2, null);
    var color = getComponents($this);
    connector.a3a(color);
    return Color_0(color[0], color[1], color[2], color[3], colorSpace);
  }
  function _Color___get_red__impl__cwrsk6($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).r7(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      var tmp$ret$4;
      // Inline function 'kotlin.ULong.toFloat' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).z7(48));
      var tmp2_and = tmp$ret$1;
      tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_and).r7(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
      var tmp3_toFloat = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.toDouble' call
      tmp$ret$3 = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp3_toFloat));
      tmp$ret$4 = tmp$ret$3;
      tmp = tmp$ret$4 / 255.0;
    } else {
      var tmp$ret$7;
      // Inline function 'kotlin.ULong.toShort' call
      var tmp$ret$6;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$5;
      // Inline function 'kotlin.ULong.shr' call
      var tmp4_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).z7(48));
      var tmp5_and = tmp$ret$5;
      tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).r7(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
      var tmp6_toShort = tmp$ret$6;
      tmp$ret$7 = _ULong___get_data__impl__fggpzb(tmp6_toShort).b8();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_green__impl__bta9rs($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).r7(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      var tmp$ret$4;
      // Inline function 'kotlin.ULong.toFloat' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).z7(40));
      var tmp2_and = tmp$ret$1;
      tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_and).r7(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
      var tmp3_toFloat = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.toDouble' call
      tmp$ret$3 = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp3_toFloat));
      tmp$ret$4 = tmp$ret$3;
      tmp = tmp$ret$4 / 255.0;
    } else {
      var tmp$ret$7;
      // Inline function 'kotlin.ULong.toShort' call
      var tmp$ret$6;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$5;
      // Inline function 'kotlin.ULong.shr' call
      var tmp4_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).z7(32));
      var tmp5_and = tmp$ret$5;
      tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).r7(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
      var tmp6_toShort = tmp$ret$6;
      tmp$ret$7 = _ULong___get_data__impl__fggpzb(tmp6_toShort).b8();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_blue__impl__xwez13($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).r7(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      var tmp$ret$4;
      // Inline function 'kotlin.ULong.toFloat' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).z7(32));
      var tmp2_and = tmp$ret$1;
      tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_and).r7(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
      var tmp3_toFloat = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.toDouble' call
      tmp$ret$3 = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp3_toFloat));
      tmp$ret$4 = tmp$ret$3;
      tmp = tmp$ret$4 / 255.0;
    } else {
      var tmp$ret$7;
      // Inline function 'kotlin.ULong.toShort' call
      var tmp$ret$6;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$5;
      // Inline function 'kotlin.ULong.shr' call
      var tmp4_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).z7(16));
      var tmp5_and = tmp$ret$5;
      tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).r7(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
      var tmp6_toShort = tmp$ret$6;
      tmp$ret$7 = _ULong___get_data__impl__fggpzb(tmp6_toShort).b8();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_alpha__impl__wcfyv1($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).r7(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      var tmp$ret$4;
      // Inline function 'kotlin.ULong.toFloat' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).z7(56));
      var tmp2_and = tmp$ret$1;
      tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_and).r7(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
      var tmp3_toFloat = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.toDouble' call
      tmp$ret$3 = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp3_toFloat));
      tmp$ret$4 = tmp$ret$3;
      tmp = tmp$ret$4 / 255.0;
    } else {
      var tmp$ret$8;
      // Inline function 'kotlin.ULong.toFloat' call
      var tmp$ret$6;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$5;
      // Inline function 'kotlin.ULong.shr' call
      var tmp4_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).z7(6));
      var tmp5_and = tmp$ret$5;
      tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).r7(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(1023, 0)))));
      var tmp6_toFloat = tmp$ret$6;
      var tmp$ret$7;
      // Inline function 'kotlin.ULong.toDouble' call
      tmp$ret$7 = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp6_toFloat));
      tmp$ret$8 = tmp$ret$7;
      tmp = tmp$ret$8 / 1023.0;
    }
    return tmp;
  }
  function Color__copy_impl_qlvcl1($this, alpha, red, green, blue) {
    return Color_0(red, green, blue, alpha, _Color___get_colorSpace__impl__jqqozk($this));
  }
  function Color__copy$default_impl_ectz3s($this, alpha, red, green, blue, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      alpha = _Color___get_alpha__impl__wcfyv1($this);
    if (!(($mask0 & 2) === 0))
      red = _Color___get_red__impl__cwrsk6($this);
    if (!(($mask0 & 4) === 0))
      green = _Color___get_green__impl__bta9rs($this);
    if (!(($mask0 & 8) === 0))
      blue = _Color___get_blue__impl__xwez13($this);
    return Color__copy_impl_qlvcl1($this, alpha, red, green, blue);
  }
  function Color__toString_impl_hpzmaq($this) {
    return 'Color(' + _Color___get_red__impl__cwrsk6($this) + ', ' + _Color___get_green__impl__bta9rs($this) + ', ' + _Color___get_blue__impl__xwez13($this) + ', ' + _Color___get_alpha__impl__wcfyv1($this) + ', ' + _Color___get_colorSpace__impl__jqqozk($this).b3a_1 + ')';
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.e3a_1 = Color_1(new Long(-16777216, 0));
    this.f3a_1 = Color_1(new Long(-12303292, 0));
    this.g3a_1 = Color_1(new Long(-7829368, 0));
    this.h3a_1 = Color_1(new Long(-3355444, 0));
    this.i3a_1 = Color_1(new Long(-1, 0));
    this.j3a_1 = Color_1(new Long(-65536, 0));
    this.k3a_1 = Color_1(new Long(-16711936, 0));
    this.l3a_1 = Color_1(new Long(-16776961, 0));
    this.m3a_1 = Color_1(new Long(-256, 0));
    this.n3a_1 = Color_1(new Long(-16711681, 0));
    this.o3a_1 = Color_1(new Long(-65281, 0));
    this.p3a_1 = Color_3(0);
    this.q3a_1 = Color_0(0.0, 0.0, 0.0, 0.0, ColorSpaces_getInstance().r39_1);
  }
  Companion_2.prototype.r3a = function () {
    return this.e3a_1;
  };
  Companion_2.prototype.s3a = function () {
    return this.f3a_1;
  };
  Companion_2.prototype.t3a = function () {
    return this.h3a_1;
  };
  Companion_2.prototype.u3a = function () {
    return this.i3a_1;
  };
  Companion_2.prototype.v3a = function () {
    return this.j3a_1;
  };
  Companion_2.prototype.w3a = function () {
    return this.l3a_1;
  };
  Companion_2.prototype.x3a = function () {
    return this.q3a_1;
  };
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_14() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Color__hashCode_impl_vjyivj($this) {
    return ULong__hashCode_impl_6hv2lb($this);
  }
  function Color__equals_impl_k06uqz($this, other) {
    if (!(other instanceof Color))
      return false;
    var tmp0_other_with_cast = other instanceof Color ? other.y3a_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Color(value) {
    Companion_getInstance_14();
    this.y3a_1 = value;
  }
  Color.prototype.toString = function () {
    return Color__toString_impl_hpzmaq(this.y3a_1);
  };
  Color.prototype.hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.y3a_1);
  };
  Color.prototype.equals = function (other) {
    return Color__equals_impl_k06uqz(this.y3a_1, other);
  };
  Color.$metadata$ = classMeta('Color');
  function takeOrElse(_this__u8e3s4, block) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(_this__u8e3s4), _Color___get_value__impl__1pls5m(Companion_getInstance_14().q3a_1));
    if (tmp$ret$0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = block().y3a_1;
    }
    return tmp;
  }
  function get_isSpecified(_this__u8e3s4) {
    return !equals(_Color___get_value__impl__1pls5m(_this__u8e3s4), _Color___get_value__impl__1pls5m(Companion_getInstance_14().q3a_1));
  }
  function toArgb(_this__u8e3s4) {
    var colorSpace = _Color___get_colorSpace__impl__jqqozk(_this__u8e3s4);
    if (colorSpace.z3a()) {
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toInt' call
      var tmp$ret$0;
      // Inline function 'kotlin.ULong.shr' call
      var tmp0_shr = _Color___get_value__impl__1pls5m(_this__u8e3s4);
      tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_shr).z7(32));
      var tmp1_toInt = tmp$ret$0;
      tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_toInt).b7();
      return tmp$ret$1;
    }
    var color = getComponents(_this__u8e3s4);
    connect$default(colorSpace, null, null, 3, null).a3a(color);
    return numberToInt(color[3] * 255.0 + 0.5) << 24 | numberToInt(color[0] * 255.0 + 0.5) << 16 | numberToInt(color[1] * 255.0 + 0.5) << 8 | numberToInt(color[2] * 255.0 + 0.5);
  }
  function Color_0(red, green, blue, alpha, colorSpace) {
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0;
    var tmp_1;
    var containsLower = colorSpace.a3b(0);
    if (red <= colorSpace.b3b(0) ? containsLower <= red : false) {
      var containsLower_0 = colorSpace.a3b(1);
      tmp_1 = green <= colorSpace.b3b(1) ? containsLower_0 <= green : false;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var containsLower_1 = colorSpace.a3b(2);
      tmp_0 = blue <= colorSpace.b3b(2) ? containsLower_1 <= blue : false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = 0.0 <= alpha ? alpha <= 1.0 : false;
    } else {
      tmp = false;
    }
    var tmp0_require = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      tmp$ret$0 = 'red = ' + red + ', green = ' + green + ', blue = ' + blue + ', alpha = ' + alpha + ' outside the range for ' + colorSpace;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (colorSpace.z3a()) {
      var argb = numberToInt(alpha * 255.0 + 0.5) << 24 | numberToInt(red * 255.0 + 0.5) << 16 | numberToInt(green * 255.0 + 0.5) << 8 | numberToInt(blue * 255.0 + 0.5);
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.shl' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$1;
      // Inline function 'kotlin.toULong' call
      tmp$ret$1 = _ULong___init__impl__c78o9k(toLong(argb));
      var tmp1_and = tmp$ret$1;
      tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_and).r7(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(-1, 0)))));
      var tmp2_shl = tmp$ret$2;
      tmp$ret$3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_shl).c7(32));
      return _Color___init__impl__r6cqi2(tmp$ret$3);
    }
    // Inline function 'kotlin.require' call
    var tmp3_require = colorSpace.c3b() === 3;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp3_require) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      tmp$ret$4 = 'Color only works with ColorSpaces with 3 components';
      var message_0 = tmp$ret$4;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var id = colorSpace.d3a_1;
    // Inline function 'kotlin.require' call
    Companion_getInstance_29();
    var tmp4_require = !(id === -1);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp4_require) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      tmp$ret$5 = 'Unknown color space, please use a color space in ColorSpaces';
      var message_1 = tmp$ret$5;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var r = _Float16___init__impl__fckrew_0(red);
    var g = _Float16___init__impl__fckrew_0(green);
    var b = _Float16___init__impl__fckrew_0(blue);
    var tmp$ret$7;
    // Inline function 'kotlin.math.max' call
    var tmp$ret$6;
    // Inline function 'kotlin.math.min' call
    tmp$ret$6 = Math.min(alpha, 1.0);
    var tmp5_max = tmp$ret$6;
    tmp$ret$7 = Math.max(0.0, tmp5_max);
    var a = numberToInt(tmp$ret$7 * 1023.0 + 0.5);
    var tmp$ret$25;
    // Inline function 'kotlin.ULong.or' call
    var tmp$ret$22;
    // Inline function 'kotlin.ULong.or' call
    var tmp$ret$18;
    // Inline function 'kotlin.ULong.or' call
    var tmp$ret$14;
    // Inline function 'kotlin.ULong.or' call
    var tmp$ret$10;
    // Inline function 'kotlin.ULong.shl' call
    var tmp$ret$9;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$8;
    // Inline function 'kotlin.toULong' call
    var tmp6_toULong = _Float16___get_halfValue__impl__89tmwx(r);
    tmp$ret$8 = _ULong___init__impl__c78o9k(toLong(tmp6_toULong));
    var tmp7_and = tmp$ret$8;
    tmp$ret$9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp7_and).r7(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
    var tmp8_shl = tmp$ret$9;
    tmp$ret$10 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp8_shl).c7(48));
    var tmp12_or = tmp$ret$10;
    var tmp$ret$13;
    // Inline function 'kotlin.ULong.shl' call
    var tmp$ret$12;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$11;
    // Inline function 'kotlin.toULong' call
    var tmp9_toULong = _Float16___get_halfValue__impl__89tmwx(g);
    tmp$ret$11 = _ULong___init__impl__c78o9k(toLong(tmp9_toULong));
    var tmp10_and = tmp$ret$11;
    tmp$ret$12 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp10_and).r7(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
    var tmp11_shl = tmp$ret$12;
    tmp$ret$13 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp11_shl).c7(32));
    var tmp13_or = tmp$ret$13;
    tmp$ret$14 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp12_or).a8(_ULong___get_data__impl__fggpzb(tmp13_or)));
    var tmp17_or = tmp$ret$14;
    var tmp$ret$17;
    // Inline function 'kotlin.ULong.shl' call
    var tmp$ret$16;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$15;
    // Inline function 'kotlin.toULong' call
    var tmp14_toULong = _Float16___get_halfValue__impl__89tmwx(b);
    tmp$ret$15 = _ULong___init__impl__c78o9k(toLong(tmp14_toULong));
    var tmp15_and = tmp$ret$15;
    tmp$ret$16 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp15_and).r7(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
    var tmp16_shl = tmp$ret$16;
    tmp$ret$17 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp16_shl).c7(16));
    var tmp18_or = tmp$ret$17;
    tmp$ret$18 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp17_or).a8(_ULong___get_data__impl__fggpzb(tmp18_or)));
    var tmp21_or = tmp$ret$18;
    var tmp$ret$21;
    // Inline function 'kotlin.ULong.shl' call
    var tmp$ret$20;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$19;
    // Inline function 'kotlin.toULong' call
    tmp$ret$19 = _ULong___init__impl__c78o9k(toLong(a));
    var tmp19_and = tmp$ret$19;
    tmp$ret$20 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp19_and).r7(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(1023, 0)))));
    var tmp20_shl = tmp$ret$20;
    tmp$ret$21 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp20_shl).c7(6));
    var tmp22_or = tmp$ret$21;
    tmp$ret$22 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp21_or).a8(_ULong___get_data__impl__fggpzb(tmp22_or)));
    var tmp24_or = tmp$ret$22;
    var tmp$ret$24;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$23;
    // Inline function 'kotlin.toULong' call
    tmp$ret$23 = _ULong___init__impl__c78o9k(toLong(id));
    var tmp23_and = tmp$ret$23;
    tmp$ret$24 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp23_and).r7(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    var tmp25_or = tmp$ret$24;
    tmp$ret$25 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp24_or).a8(_ULong___get_data__impl__fggpzb(tmp25_or)));
    return _Color___init__impl__r6cqi2(tmp$ret$25);
  }
  function Color_1(color) {
    var tmp$ret$2;
    // Inline function 'kotlin.ULong.shl' call
    var tmp$ret$1;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    tmp$ret$0 = _ULong___init__impl__c78o9k(color);
    var tmp0_and = tmp$ret$0;
    tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).r7(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(-1, 0)))));
    var tmp1_shl = tmp$ret$1;
    tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shl).c7(32));
    return _Color___init__impl__r6cqi2(tmp$ret$2);
  }
  function luminance(_this__u8e3s4) {
    var colorSpace = _Color___get_colorSpace__impl__jqqozk(_this__u8e3s4);
    // Inline function 'kotlin.require' call
    var tmp0_require = equals(colorSpace.c3a_1, Companion_getInstance_28().d3b_1);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.luminance.<anonymous>' call
      tmp$ret$0 = 'The specified color must be encoded in an RGB color space. ' + ('The supplied color space is ' + new ColorModel(colorSpace.c3a_1));
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var eotf = (colorSpace instanceof Rgb ? colorSpace : THROW_CCE()).u3b_1;
    var r = eotf(_Color___get_red__impl__cwrsk6(_this__u8e3s4));
    var g = eotf(_Color___get_green__impl__bta9rs(_this__u8e3s4));
    var b = eotf(_Color___get_blue__impl__xwez13(_this__u8e3s4));
    return saturate(0.2126 * r + 0.7152 * g + 0.0722 * b);
  }
  function compositeOver(_this__u8e3s4, background) {
    var fg = Color__convert_impl_so5m8t(_this__u8e3s4, _Color___get_colorSpace__impl__jqqozk(background));
    var bgA = _Color___get_alpha__impl__wcfyv1(background);
    var fgA = _Color___get_alpha__impl__wcfyv1(fg);
    var a = fgA + bgA * (1.0 - fgA);
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var tmp0_compositeComponent = _Color___get_red__impl__cwrsk6(fg);
    var tmp1_compositeComponent = _Color___get_red__impl__cwrsk6(background);
    tmp$ret$0 = a === 0.0 ? 0.0 : (tmp0_compositeComponent * fgA + tmp1_compositeComponent * bgA * (1.0 - fgA)) / a;
    var r = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var tmp2_compositeComponent = _Color___get_green__impl__bta9rs(fg);
    var tmp3_compositeComponent = _Color___get_green__impl__bta9rs(background);
    tmp$ret$1 = a === 0.0 ? 0.0 : (tmp2_compositeComponent * fgA + tmp3_compositeComponent * bgA * (1.0 - fgA)) / a;
    var g = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var tmp4_compositeComponent = _Color___get_blue__impl__xwez13(fg);
    var tmp5_compositeComponent = _Color___get_blue__impl__xwez13(background);
    tmp$ret$2 = a === 0.0 ? 0.0 : (tmp4_compositeComponent * fgA + tmp5_compositeComponent * bgA * (1.0 - fgA)) / a;
    var b = tmp$ret$2;
    return Color_0(r, g, b, a, _Color___get_colorSpace__impl__jqqozk(background));
  }
  function Color_2(red, green, blue, alpha) {
    var color = (alpha & 255) << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255;
    return Color_3(color);
  }
  function Color$default(red, green, blue, alpha, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      alpha = 255;
    return Color_2(red, green, blue, alpha);
  }
  function getComponents(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp0_floatArrayOf = new Float32Array([_Color___get_red__impl__cwrsk6(_this__u8e3s4), _Color___get_green__impl__bta9rs(_this__u8e3s4), _Color___get_blue__impl__xwez13(_this__u8e3s4), _Color___get_alpha__impl__wcfyv1(_this__u8e3s4)]);
    tmp$ret$0 = tmp0_floatArrayOf;
    return tmp$ret$0;
  }
  function Color_3(color) {
    var tmp$ret$1;
    // Inline function 'kotlin.ULong.shl' call
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    tmp$ret$0 = _ULong___init__impl__c78o9k(toLong(color));
    var tmp0_shl = tmp$ret$0;
    tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_shl).c7(32));
    return _Color___init__impl__r6cqi2(tmp$ret$1);
  }
  function saturate(v) {
    return v <= 0.0 ? 0.0 : v >= 1.0 ? 1.0 : v;
  }
  function compositeComponent(fgC, bgC, fgA, bgA, a) {
    return a === 0.0 ? 0.0 : (fgC * fgA + bgC * bgA * (1.0 - fgA)) / a;
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  Companion_3.prototype.x3b = function (color, blendMode) {
    return actualTintColorFilter(color, blendMode);
  };
  Companion_3.prototype.y3b = function (color, blendMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      blendMode = Companion_getInstance_11().t36_1;
    return this.x3b(color, blendMode);
  };
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_15() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ColorFilter(nativeColorFilter) {
    Companion_getInstance_15();
    this.z3b_1 = nativeColorFilter;
  }
  ColorFilter.$metadata$ = classMeta('ColorFilter');
  function _FilterQuality___init__impl__nv51aq(value) {
    return value;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.a3c_1 = _FilterQuality___init__impl__nv51aq(0);
    this.b3c_1 = _FilterQuality___init__impl__nv51aq(1);
    this.c3c_1 = _FilterQuality___init__impl__nv51aq(2);
    this.d3c_1 = _FilterQuality___init__impl__nv51aq(3);
  }
  Companion_4.$metadata$ = objectMeta('Companion');
  var Companion_instance_4;
  function Companion_getInstance_16() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function FilterQuality__toString_impl_i5cfty($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_16().a3c_1 ? 'None' : tmp0_subject === Companion_getInstance_16().b3c_1 ? 'Low' : tmp0_subject === Companion_getInstance_16().c3c_1 ? 'Medium' : tmp0_subject === Companion_getInstance_16().d3c_1 ? 'High' : 'Unknown';
  }
  function FilterQuality__hashCode_impl_v4lpcb($this) {
    return $this;
  }
  function FilterQuality__equals_impl_katg2v($this, other) {
    if (!(other instanceof FilterQuality))
      return false;
    var tmp0_other_with_cast = other instanceof FilterQuality ? other.e3c_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function FilterQuality(value) {
    Companion_getInstance_16();
    this.e3c_1 = value;
  }
  FilterQuality.prototype.toString = function () {
    return FilterQuality__toString_impl_i5cfty(this.e3c_1);
  };
  FilterQuality.prototype.hashCode = function () {
    return FilterQuality__hashCode_impl_v4lpcb(this.e3c_1);
  };
  FilterQuality.prototype.equals = function (other) {
    return FilterQuality__equals_impl_katg2v(this.e3c_1, other);
  };
  FilterQuality.$metadata$ = classMeta('FilterQuality');
  function floatToHalf($this, f) {
    var bits = toRawBits(f);
    var s = bits >>> 31 | 0;
    var e = (bits >>> 23 | 0) & 255;
    var m = bits & 8388607;
    var outE = 0;
    var outM = 0;
    if (e === 255) {
      outE = 31;
      outM = !(m === 0) ? 512 : 0;
    } else {
      e = (e - 127 | 0) + 15 | 0;
      if (e >= 31) {
        outE = 49;
      } else if (e <= 0) {
        if (e < -10) {
        } else {
          m = (m | 8388608) >> (1 - e | 0);
          if (!((m & 4096) === 0))
            m = m + 8192 | 0;
          outM = m >> 13;
        }
      } else {
        outE = e;
        outM = m >> 13;
        if (!((m & 4096) === 0)) {
          var out = outE << 10 | outM;
          var tmp0 = out;
          out = tmp0 + 1 | 0;
          return toShort(out | s << 15);
        }
      }
    }
    return toShort(s << 15 | outE << 10 | outM);
  }
  function _Float16___init__impl__fckrew(halfValue) {
    return halfValue;
  }
  function _Float16___get_halfValue__impl__89tmwx($this) {
    return $this;
  }
  function _Float16___init__impl__fckrew_0(value) {
    var tmp = _Float16___init__impl__fckrew(floatToHalf(Companion_getInstance_17(), value));
    return tmp;
  }
  function Float16__toFloat_impl_6i8dal($this) {
    var bits = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    Companion_getInstance_17();
    var s = bits & 32768;
    Companion_getInstance_17();
    var tmp = bits >>> 10 | 0;
    Companion_getInstance_17();
    var e = tmp & 31;
    Companion_getInstance_17();
    var m = bits & 1023;
    var outE = 0;
    var outM = 0;
    if (e === 0) {
      if (!(m === 0)) {
        var tmp$ret$0;
        // Inline function 'kotlin.fromBits' call
        var tmp0_fromBits = FloatCompanionObject_getInstance();
        Companion_getInstance_17();
        var tmp1_fromBits = 1056964608 + m | 0;
        tmp$ret$0 = floatFromBits(tmp1_fromBits);
        var o = tmp$ret$0;
        o = o - Companion_getInstance_17().j3d_1;
        return s === 0 ? o : -o;
      }
    } else {
      outM = m << 13;
      if (e === 31) {
        outE = 255;
        if (!(outM === 0)) {
          var tmp_0 = outM;
          Companion_getInstance_17();
          outM = tmp_0 | 4194304;
        }
      } else {
        Companion_getInstance_17();
        var tmp_1 = e - 15 | 0;
        Companion_getInstance_17();
        outE = tmp_1 + 127 | 0;
      }
    }
    var tmp_2 = s << 16;
    var tmp_3 = outE;
    Companion_getInstance_17();
    var out = tmp_2 | tmp_3 << 23 | outM;
    var tmp$ret$1;
    // Inline function 'kotlin.fromBits' call
    var tmp2_fromBits = FloatCompanionObject_getInstance();
    tmp$ret$1 = floatFromBits(out);
    return tmp$ret$1;
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.f3c_1 = 16;
    this.g3c_1 = _Float16___init__impl__fckrew(5120);
    this.h3c_1 = 15;
    this.i3c_1 = -14;
    this.j3c_1 = _Float16___init__impl__fckrew(-1025);
    this.k3c_1 = _Float16___init__impl__fckrew(31743);
    this.l3c_1 = _Float16___init__impl__fckrew(1024);
    this.m3c_1 = _Float16___init__impl__fckrew(1);
    this.n3c_1 = _Float16___init__impl__fckrew(32256);
    this.o3c_1 = _Float16___init__impl__fckrew(-1024);
    this.p3c_1 = _Float16___init__impl__fckrew(-32768);
    this.q3c_1 = _Float16___init__impl__fckrew(31744);
    this.r3c_1 = _Float16___init__impl__fckrew(0);
    this.s3c_1 = _Float16___init__impl__fckrew_0(1.0);
    this.t3c_1 = _Float16___init__impl__fckrew_0(-1.0);
    this.u3c_1 = 15;
    this.v3c_1 = 32768;
    this.w3c_1 = 10;
    this.x3c_1 = 31;
    this.y3c_1 = 1023;
    this.z3c_1 = 15;
    this.a3d_1 = 32767;
    this.b3d_1 = 31744;
    this.c3d_1 = 31;
    this.d3d_1 = 23;
    this.e3d_1 = 255;
    this.f3d_1 = 8388607;
    this.g3d_1 = 127;
    this.h3d_1 = 4194304;
    this.i3d_1 = 1056964608;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = 1056964608;
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    tmp.j3d_1 = tmp$ret$0;
  }
  Companion_5.$metadata$ = objectMeta('Companion');
  var Companion_instance_5;
  function Companion_getInstance_17() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function ImageBitmap() {
  }
  ImageBitmap.$metadata$ = interfaceMeta('ImageBitmap');
  function _ImageBitmapConfig___init__impl__wfx9yl(value) {
    return value;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.m3d_1 = _ImageBitmapConfig___init__impl__wfx9yl(0);
    this.n3d_1 = _ImageBitmapConfig___init__impl__wfx9yl(1);
    this.o3d_1 = _ImageBitmapConfig___init__impl__wfx9yl(2);
    this.p3d_1 = _ImageBitmapConfig___init__impl__wfx9yl(3);
    this.q3d_1 = _ImageBitmapConfig___init__impl__wfx9yl(4);
  }
  Companion_6.$metadata$ = objectMeta('Companion');
  var Companion_instance_6;
  function Companion_getInstance_18() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function ImageBitmapConfig__toString_impl_dfv42d($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_18().m3d_1 ? 'Argb8888' : tmp0_subject === Companion_getInstance_18().n3d_1 ? 'Alpha8' : tmp0_subject === Companion_getInstance_18().o3d_1 ? 'Rgb565' : tmp0_subject === Companion_getInstance_18().p3d_1 ? 'F16' : tmp0_subject === Companion_getInstance_18().q3d_1 ? 'Gpu' : 'Unknown';
  }
  function ImageBitmapConfig__hashCode_impl_8basqi($this) {
    return $this;
  }
  function ImageBitmapConfig__equals_impl_hqcsv2($this, other) {
    if (!(other instanceof ImageBitmapConfig))
      return false;
    var tmp0_other_with_cast = other instanceof ImageBitmapConfig ? other.r3d_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function ImageBitmapConfig(value) {
    Companion_getInstance_18();
    this.r3d_1 = value;
  }
  ImageBitmapConfig.prototype.toString = function () {
    return ImageBitmapConfig__toString_impl_dfv42d(this.r3d_1);
  };
  ImageBitmapConfig.prototype.hashCode = function () {
    return ImageBitmapConfig__hashCode_impl_8basqi(this.r3d_1);
  };
  ImageBitmapConfig.prototype.equals = function (other) {
    return ImageBitmapConfig__equals_impl_hqcsv2(this.r3d_1, other);
  };
  ImageBitmapConfig.$metadata$ = classMeta('ImageBitmapConfig');
  function ImageBitmap_0(width, height, config, hasAlpha, colorSpace) {
    return ActualImageBitmap(width, height, config, hasAlpha, colorSpace);
  }
  function ImageBitmap$default(width, height, config, hasAlpha, colorSpace, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      config = Companion_getInstance_18().m3d_1;
    if (!(($mask0 & 8) === 0))
      hasAlpha = true;
    if (!(($mask0 & 16) === 0))
      colorSpace = ColorSpaces_getInstance().b39_1;
    return ImageBitmap_0(width, height, config, hasAlpha, colorSpace);
  }
  function _Matrix___init__impl__q3kp4w(values) {
    return values;
  }
  function _Matrix___init__impl__q3kp4w_0(values, $mask0, $marker) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.floatArrayOf' call
      tmp$ret$0 = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
      tmp$ret$0_0 = Unit_getInstance();
      values = tmp$ret$0;
    }
    var tmp = _Matrix___init__impl__q3kp4w(values);
    return tmp;
  }
  function _Matrix___get_values__impl__fblr7b($this) {
    return $this;
  }
  function Matrix__get_impl_xogbpk($this, row, column) {
    return _Matrix___get_values__impl__fblr7b($this)[imul(row, 4) + column | 0];
  }
  function Matrix__set_impl_s2l54c($this, row, column, v) {
    _Matrix___get_values__impl__fblr7b($this)[imul(row, 4) + column | 0] = v;
  }
  function Matrix__map_impl_7meu7m($this, point) {
    var x = _Offset___get_x__impl__xvi35n(point);
    var y = _Offset___get_y__impl__8bzhra(point);
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$0 = _Matrix___get_values__impl__fblr7b($this)[3];
    var tmp = tmp$ret$0 * x;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$1 = _Matrix___get_values__impl__fblr7b($this)[7];
    var tmp_0 = tmp + tmp$ret$1 * y;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b($this)[15];
    var z = tmp_0 + tmp$ret$2;
    var inverseZ = 1 / z;
    var pZ = isFinite(inverseZ) ? inverseZ : 0.0;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b($this)[0];
    var tmp_1 = tmp$ret$3 * x;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b($this)[4];
    var tmp_2 = tmp_1 + tmp$ret$4 * y;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b($this)[12];
    var tmp_3 = pZ * (tmp_2 + tmp$ret$5);
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b($this)[1];
    var tmp_4 = tmp$ret$6 * x;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b($this)[5];
    var tmp_5 = tmp_4 + tmp$ret$7 * y;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[13];
    return Offset(tmp_3, pZ * (tmp_5 + tmp$ret$8));
  }
  function Matrix__map_impl_7meu7m_0($this, rect) {
    var p0 = Matrix__map_impl_7meu7m($this, Offset(rect.i2i_1, rect.j2i_1));
    var p1 = Matrix__map_impl_7meu7m($this, Offset(rect.i2i_1, rect.l2i_1));
    var p3 = Matrix__map_impl_7meu7m($this, Offset(rect.k2i_1, rect.j2i_1));
    var p4 = Matrix__map_impl_7meu7m($this, Offset(rect.k2i_1, rect.l2i_1));
    var tmp = rect;
    var tmp$ret$2;
    // Inline function 'kotlin.math.min' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = _Offset___get_x__impl__xvi35n(p0);
    var tmp1_min = _Offset___get_x__impl__xvi35n(p1);
    tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
    var tmp4_min = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.min' call
    var tmp2_min = _Offset___get_x__impl__xvi35n(p3);
    var tmp3_min = _Offset___get_x__impl__xvi35n(p4);
    tmp$ret$1 = Math.min(tmp2_min, tmp3_min);
    var tmp5_min = tmp$ret$1;
    tmp$ret$2 = Math.min(tmp4_min, tmp5_min);
    tmp.i2i_1 = tmp$ret$2;
    var tmp_0 = rect;
    var tmp$ret$5;
    // Inline function 'kotlin.math.min' call
    var tmp$ret$3;
    // Inline function 'kotlin.math.min' call
    var tmp6_min = _Offset___get_y__impl__8bzhra(p0);
    var tmp7_min = _Offset___get_y__impl__8bzhra(p1);
    tmp$ret$3 = Math.min(tmp6_min, tmp7_min);
    var tmp10_min = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.math.min' call
    var tmp8_min = _Offset___get_y__impl__8bzhra(p3);
    var tmp9_min = _Offset___get_y__impl__8bzhra(p4);
    tmp$ret$4 = Math.min(tmp8_min, tmp9_min);
    var tmp11_min = tmp$ret$4;
    tmp$ret$5 = Math.min(tmp10_min, tmp11_min);
    tmp_0.j2i_1 = tmp$ret$5;
    var tmp_1 = rect;
    var tmp$ret$8;
    // Inline function 'kotlin.math.max' call
    var tmp$ret$6;
    // Inline function 'kotlin.math.max' call
    var tmp12_max = _Offset___get_x__impl__xvi35n(p0);
    var tmp13_max = _Offset___get_x__impl__xvi35n(p1);
    tmp$ret$6 = Math.max(tmp12_max, tmp13_max);
    var tmp16_max = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'kotlin.math.max' call
    var tmp14_max = _Offset___get_x__impl__xvi35n(p3);
    var tmp15_max = _Offset___get_x__impl__xvi35n(p4);
    tmp$ret$7 = Math.max(tmp14_max, tmp15_max);
    var tmp17_max = tmp$ret$7;
    tmp$ret$8 = Math.max(tmp16_max, tmp17_max);
    tmp_1.k2i_1 = tmp$ret$8;
    var tmp_2 = rect;
    var tmp$ret$11;
    // Inline function 'kotlin.math.max' call
    var tmp$ret$9;
    // Inline function 'kotlin.math.max' call
    var tmp18_max = _Offset___get_y__impl__8bzhra(p0);
    var tmp19_max = _Offset___get_y__impl__8bzhra(p1);
    tmp$ret$9 = Math.max(tmp18_max, tmp19_max);
    var tmp22_max = tmp$ret$9;
    var tmp$ret$10;
    // Inline function 'kotlin.math.max' call
    var tmp20_max = _Offset___get_y__impl__8bzhra(p3);
    var tmp21_max = _Offset___get_y__impl__8bzhra(p4);
    tmp$ret$10 = Math.max(tmp20_max, tmp21_max);
    var tmp23_max = tmp$ret$10;
    tmp$ret$11 = Math.max(tmp22_max, tmp23_max);
    tmp_2.l2i_1 = tmp$ret$11;
  }
  function Matrix__timesAssign_impl_oas521($this, m) {
    var v00 = dot($this, 0, m, 0);
    var v01 = dot($this, 0, m, 1);
    var v02 = dot($this, 0, m, 2);
    var v03 = dot($this, 0, m, 3);
    var v10 = dot($this, 1, m, 0);
    var v11 = dot($this, 1, m, 1);
    var v12 = dot($this, 1, m, 2);
    var v13 = dot($this, 1, m, 3);
    var v20 = dot($this, 2, m, 0);
    var v21 = dot($this, 2, m, 1);
    var v22 = dot($this, 2, m, 2);
    var v23 = dot($this, 2, m, 3);
    var v30 = dot($this, 3, m, 0);
    var v31 = dot($this, 3, m, 1);
    var v32 = dot($this, 3, m, 2);
    var v33 = dot($this, 3, m, 3);
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[1] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[2] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[3] = v03;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[4] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[5] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[6] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[7] = v13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[8] = v20;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[9] = v21;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[10] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[11] = v23;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[12] = v30;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[13] = v31;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[14] = v32;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[15] = v33;
  }
  function Matrix__toString_impl_l0abk0($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$0 = _Matrix___get_values__impl__fblr7b($this)[0];
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$1 = _Matrix___get_values__impl__fblr7b($this)[1];
    var tmp_0 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b($this)[2];
    var tmp_1 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b($this)[3];
    var tmp_2 = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b($this)[4];
    var tmp_3 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b($this)[5];
    var tmp_4 = tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b($this)[6];
    var tmp_5 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b($this)[7];
    var tmp_6 = tmp$ret$7;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[8];
    var tmp_7 = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$9 = _Matrix___get_values__impl__fblr7b($this)[9];
    var tmp_8 = tmp$ret$9;
    var tmp$ret$10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$10 = _Matrix___get_values__impl__fblr7b($this)[10];
    var tmp_9 = tmp$ret$10;
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$11 = _Matrix___get_values__impl__fblr7b($this)[11];
    var tmp_10 = tmp$ret$11;
    var tmp$ret$12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$12 = _Matrix___get_values__impl__fblr7b($this)[12];
    var tmp_11 = tmp$ret$12;
    var tmp$ret$13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$13 = _Matrix___get_values__impl__fblr7b($this)[13];
    var tmp_12 = tmp$ret$13;
    var tmp$ret$14;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$14 = _Matrix___get_values__impl__fblr7b($this)[14];
    var tmp_13 = tmp$ret$14;
    var tmp$ret$15;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$15 = _Matrix___get_values__impl__fblr7b($this)[15];
    return trimIndent('\n            |' + tmp + ' ' + tmp_0 + ' ' + tmp_1 + ' ' + tmp_2 + '|\n            |' + tmp_3 + ' ' + tmp_4 + ' ' + tmp_5 + ' ' + tmp_6 + '|\n            |' + tmp_7 + ' ' + tmp_8 + ' ' + tmp_9 + ' ' + tmp_10 + '|\n            |' + tmp_11 + ' ' + tmp_12 + ' ' + tmp_13 + ' ' + tmp$ret$15 + '|\n        ');
  }
  function Matrix__invert_impl_9xyo46($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$0 = _Matrix___get_values__impl__fblr7b($this)[0];
    var a00 = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$1 = _Matrix___get_values__impl__fblr7b($this)[1];
    var a01 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b($this)[2];
    var a02 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b($this)[3];
    var a03 = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b($this)[4];
    var a10 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b($this)[5];
    var a11 = tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b($this)[6];
    var a12 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b($this)[7];
    var a13 = tmp$ret$7;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[8];
    var a20 = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$9 = _Matrix___get_values__impl__fblr7b($this)[9];
    var a21 = tmp$ret$9;
    var tmp$ret$10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$10 = _Matrix___get_values__impl__fblr7b($this)[10];
    var a22 = tmp$ret$10;
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$11 = _Matrix___get_values__impl__fblr7b($this)[11];
    var a23 = tmp$ret$11;
    var tmp$ret$12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$12 = _Matrix___get_values__impl__fblr7b($this)[12];
    var a30 = tmp$ret$12;
    var tmp$ret$13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$13 = _Matrix___get_values__impl__fblr7b($this)[13];
    var a31 = tmp$ret$13;
    var tmp$ret$14;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$14 = _Matrix___get_values__impl__fblr7b($this)[14];
    var a32 = tmp$ret$14;
    var tmp$ret$15;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$15 = _Matrix___get_values__impl__fblr7b($this)[15];
    var a33 = tmp$ret$15;
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32;
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (det === 0.0) {
      return Unit_getInstance();
    }
    var invDet = 1.0 / det;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp0_set = (a11 * b11 - a12 * b10 + a13 * b09) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[0] = tmp0_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp1_set = (-a01 * b11 + a02 * b10 - a03 * b09) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[1] = tmp1_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp2_set = (a31 * b05 - a32 * b04 + a33 * b03) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[2] = tmp2_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp3_set = (-a21 * b05 + a22 * b04 - a23 * b03) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[3] = tmp3_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp4_set = (-a10 * b11 + a12 * b08 - a13 * b07) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[4] = tmp4_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp5_set = (a00 * b11 - a02 * b08 + a03 * b07) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[5] = tmp5_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp6_set = (-a30 * b05 + a32 * b02 - a33 * b01) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[6] = tmp6_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp7_set = (a20 * b05 - a22 * b02 + a23 * b01) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[7] = tmp7_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp8_set = (a10 * b10 - a11 * b08 + a13 * b06) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[8] = tmp8_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp9_set = (-a00 * b10 + a01 * b08 - a03 * b06) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[9] = tmp9_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp10_set = (a30 * b04 - a31 * b02 + a33 * b00) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[10] = tmp10_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp11_set = (-a20 * b04 + a21 * b02 - a23 * b00) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[11] = tmp11_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp12_set = (-a10 * b09 + a11 * b07 - a12 * b06) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[12] = tmp12_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp13_set = (a00 * b09 - a01 * b07 + a02 * b06) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[13] = tmp13_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp14_set = (-a30 * b03 + a31 * b01 - a32 * b00) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[14] = tmp14_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp15_set = (a20 * b03 - a21 * b01 + a22 * b00) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[15] = tmp15_set;
  }
  function Matrix__reset_impl_4l49i7($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var c = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= 3)
          do {
            var r = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
            var tmp0_set = c === r ? 1.0 : 0.0;
            _Matrix___get_values__impl__fblr7b($this)[imul(r, 4) + c | 0] = tmp0_set;
          }
           while (inductionVariable_0 <= 3);
      }
       while (inductionVariable <= 3);
  }
  function Matrix__setFrom_impl_5fylsu($this, matrix) {
    var inductionVariable = 0;
    if (inductionVariable <= 15)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _Matrix___get_values__impl__fblr7b($this)[i] = _Matrix___get_values__impl__fblr7b(matrix)[i];
      }
       while (inductionVariable <= 15);
  }
  function Matrix__rotateX_impl_3e5y7j($this, degrees) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    var tmp0_cos = degrees * get_PI() / 180.0;
    tmp$ret$0 = Math.cos(tmp0_cos);
    var c = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sin' call
    var tmp1_sin = degrees * get_PI() / 180.0;
    tmp$ret$1 = Math.sin(tmp1_sin);
    var s = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b($this)[1];
    var a01 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b($this)[2];
    var a02 = tmp$ret$3;
    var v01 = a01 * c - a02 * s;
    var v02 = a01 * s + a02 * c;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b($this)[5];
    var a11 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b($this)[6];
    var a12 = tmp$ret$5;
    var v11 = a11 * c - a12 * s;
    var v12 = a11 * s + a12 * c;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b($this)[9];
    var a21 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b($this)[10];
    var a22 = tmp$ret$7;
    var v21 = a21 * c - a22 * s;
    var v22 = a21 * s + a22 * c;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[13];
    var a31 = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$9 = _Matrix___get_values__impl__fblr7b($this)[14];
    var a32 = tmp$ret$9;
    var v31 = a31 * c - a32 * s;
    var v32 = a31 * s + a32 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[1] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[2] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[5] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[6] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[9] = v21;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[10] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[13] = v31;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[14] = v32;
  }
  function Matrix__rotateY_impl_2x4btc($this, degrees) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    var tmp0_cos = degrees * get_PI() / 180.0;
    tmp$ret$0 = Math.cos(tmp0_cos);
    var c = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sin' call
    var tmp1_sin = degrees * get_PI() / 180.0;
    tmp$ret$1 = Math.sin(tmp1_sin);
    var s = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b($this)[0];
    var a00 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b($this)[2];
    var a02 = tmp$ret$3;
    var v00 = a00 * c + a02 * s;
    var v02 = -a00 * s + a02 * c;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b($this)[4];
    var a10 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b($this)[6];
    var a12 = tmp$ret$5;
    var v10 = a10 * c + a12 * s;
    var v12 = -a10 * s + a12 * c;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b($this)[8];
    var a20 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b($this)[10];
    var a22 = tmp$ret$7;
    var v20 = a20 * c + a22 * s;
    var v22 = -a20 * s + a22 * c;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[12];
    var a30 = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$9 = _Matrix___get_values__impl__fblr7b($this)[14];
    var a32 = tmp$ret$9;
    var v30 = a30 * c + a32 * s;
    var v32 = -a30 * s + a32 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[2] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[4] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[6] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[8] = v20;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[10] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[12] = v30;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[14] = v32;
  }
  function Matrix__rotateZ_impl_2g2pf5($this, degrees) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    var tmp0_cos = degrees * get_PI() / 180.0;
    tmp$ret$0 = Math.cos(tmp0_cos);
    var c = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sin' call
    var tmp1_sin = degrees * get_PI() / 180.0;
    tmp$ret$1 = Math.sin(tmp1_sin);
    var s = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b($this)[0];
    var a00 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b($this)[4];
    var a10 = tmp$ret$3;
    var v00 = c * a00 + s * a10;
    var v10 = -s * a00 + c * a10;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b($this)[1];
    var a01 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b($this)[5];
    var a11 = tmp$ret$5;
    var v01 = c * a01 + s * a11;
    var v11 = -s * a01 + c * a11;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b($this)[2];
    var a02 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b($this)[6];
    var a12 = tmp$ret$7;
    var v02 = c * a02 + s * a12;
    var v12 = -s * a02 + c * a12;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[3];
    var a03 = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$9 = _Matrix___get_values__impl__fblr7b($this)[7];
    var a13 = tmp$ret$9;
    var v03 = c * a03 + s * a13;
    var v13 = -s * a03 + c * a13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[1] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[2] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[3] = v03;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[4] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[5] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[6] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[7] = v13;
  }
  function Matrix__scale_impl_6w89a4($this, x, y, z) {
    var tmp0_array = $this;
    var tmp1_index0 = 0;
    var tmp2_index1 = 0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$0 = _Matrix___get_values__impl__fblr7b(tmp0_array)[imul(tmp1_index0, 4) + tmp2_index1 | 0];
    var tmp0_set = tmp$ret$0 * x;
    _Matrix___get_values__impl__fblr7b(tmp0_array)[imul(tmp1_index0, 4) + tmp2_index1 | 0] = tmp0_set;
    var tmp3_array = $this;
    var tmp4_index0 = 0;
    var tmp5_index1 = 1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$1 = _Matrix___get_values__impl__fblr7b(tmp3_array)[imul(tmp4_index0, 4) + tmp5_index1 | 0];
    var tmp1_set = tmp$ret$1 * x;
    _Matrix___get_values__impl__fblr7b(tmp3_array)[imul(tmp4_index0, 4) + tmp5_index1 | 0] = tmp1_set;
    var tmp6_array = $this;
    var tmp7_index0 = 0;
    var tmp8_index1 = 2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b(tmp6_array)[imul(tmp7_index0, 4) + tmp8_index1 | 0];
    var tmp2_set = tmp$ret$2 * x;
    _Matrix___get_values__impl__fblr7b(tmp6_array)[imul(tmp7_index0, 4) + tmp8_index1 | 0] = tmp2_set;
    var tmp9_array = $this;
    var tmp10_index0 = 0;
    var tmp11_index1 = 3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b(tmp9_array)[imul(tmp10_index0, 4) + tmp11_index1 | 0];
    var tmp3_set = tmp$ret$3 * x;
    _Matrix___get_values__impl__fblr7b(tmp9_array)[imul(tmp10_index0, 4) + tmp11_index1 | 0] = tmp3_set;
    var tmp12_array = $this;
    var tmp13_index0 = 1;
    var tmp14_index1 = 0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b(tmp12_array)[imul(tmp13_index0, 4) + tmp14_index1 | 0];
    var tmp4_set = tmp$ret$4 * y;
    _Matrix___get_values__impl__fblr7b(tmp12_array)[imul(tmp13_index0, 4) + tmp14_index1 | 0] = tmp4_set;
    var tmp15_array = $this;
    var tmp16_index0 = 1;
    var tmp17_index1 = 1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b(tmp15_array)[imul(tmp16_index0, 4) + tmp17_index1 | 0];
    var tmp5_set = tmp$ret$5 * y;
    _Matrix___get_values__impl__fblr7b(tmp15_array)[imul(tmp16_index0, 4) + tmp17_index1 | 0] = tmp5_set;
    var tmp18_array = $this;
    var tmp19_index0 = 1;
    var tmp20_index1 = 2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b(tmp18_array)[imul(tmp19_index0, 4) + tmp20_index1 | 0];
    var tmp6_set = tmp$ret$6 * y;
    _Matrix___get_values__impl__fblr7b(tmp18_array)[imul(tmp19_index0, 4) + tmp20_index1 | 0] = tmp6_set;
    var tmp21_array = $this;
    var tmp22_index0 = 1;
    var tmp23_index1 = 3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b(tmp21_array)[imul(tmp22_index0, 4) + tmp23_index1 | 0];
    var tmp7_set = tmp$ret$7 * y;
    _Matrix___get_values__impl__fblr7b(tmp21_array)[imul(tmp22_index0, 4) + tmp23_index1 | 0] = tmp7_set;
    var tmp24_array = $this;
    var tmp25_index0 = 2;
    var tmp26_index1 = 0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b(tmp24_array)[imul(tmp25_index0, 4) + tmp26_index1 | 0];
    var tmp8_set = tmp$ret$8 * z;
    _Matrix___get_values__impl__fblr7b(tmp24_array)[imul(tmp25_index0, 4) + tmp26_index1 | 0] = tmp8_set;
    var tmp27_array = $this;
    var tmp28_index0 = 2;
    var tmp29_index1 = 1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$9 = _Matrix___get_values__impl__fblr7b(tmp27_array)[imul(tmp28_index0, 4) + tmp29_index1 | 0];
    var tmp9_set = tmp$ret$9 * z;
    _Matrix___get_values__impl__fblr7b(tmp27_array)[imul(tmp28_index0, 4) + tmp29_index1 | 0] = tmp9_set;
    var tmp30_array = $this;
    var tmp31_index0 = 2;
    var tmp32_index1 = 2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$10 = _Matrix___get_values__impl__fblr7b(tmp30_array)[imul(tmp31_index0, 4) + tmp32_index1 | 0];
    var tmp10_set = tmp$ret$10 * z;
    _Matrix___get_values__impl__fblr7b(tmp30_array)[imul(tmp31_index0, 4) + tmp32_index1 | 0] = tmp10_set;
    var tmp33_array = $this;
    var tmp34_index0 = 2;
    var tmp35_index1 = 3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$11 = _Matrix___get_values__impl__fblr7b(tmp33_array)[imul(tmp34_index0, 4) + tmp35_index1 | 0];
    var tmp11_set = tmp$ret$11 * z;
    _Matrix___get_values__impl__fblr7b(tmp33_array)[imul(tmp34_index0, 4) + tmp35_index1 | 0] = tmp11_set;
  }
  function Matrix__scale$default_impl_snaws9($this, x, y, z, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = 1.0;
    if (!(($mask0 & 2) === 0))
      y = 1.0;
    if (!(($mask0 & 4) === 0))
      z = 1.0;
    return Matrix__scale_impl_6w89a4($this, x, y, z);
  }
  function Matrix__translate_impl_1hftog($this, x, y, z) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$0 = _Matrix___get_values__impl__fblr7b($this)[0];
    var tmp = tmp$ret$0 * x;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$1 = _Matrix___get_values__impl__fblr7b($this)[4];
    var tmp_0 = tmp + tmp$ret$1 * y;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b($this)[8];
    var tmp_1 = tmp_0 + tmp$ret$2 * z;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b($this)[12];
    var t1 = tmp_1 + tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b($this)[1];
    var tmp_2 = tmp$ret$4 * x;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b($this)[5];
    var tmp_3 = tmp_2 + tmp$ret$5 * y;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b($this)[9];
    var tmp_4 = tmp_3 + tmp$ret$6 * z;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b($this)[13];
    var t2 = tmp_4 + tmp$ret$7;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[2];
    var tmp_5 = tmp$ret$8 * x;
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$9 = _Matrix___get_values__impl__fblr7b($this)[6];
    var tmp_6 = tmp_5 + tmp$ret$9 * y;
    var tmp$ret$10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$10 = _Matrix___get_values__impl__fblr7b($this)[10];
    var tmp_7 = tmp_6 + tmp$ret$10 * z;
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$11 = _Matrix___get_values__impl__fblr7b($this)[14];
    var t3 = tmp_7 + tmp$ret$11;
    var tmp$ret$12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$12 = _Matrix___get_values__impl__fblr7b($this)[3];
    var tmp_8 = tmp$ret$12 * x;
    var tmp$ret$13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$13 = _Matrix___get_values__impl__fblr7b($this)[7];
    var tmp_9 = tmp_8 + tmp$ret$13 * y;
    var tmp$ret$14;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$14 = _Matrix___get_values__impl__fblr7b($this)[11];
    var tmp_10 = tmp_9 + tmp$ret$14 * z;
    var tmp$ret$15;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$15 = _Matrix___get_values__impl__fblr7b($this)[15];
    var t4 = tmp_10 + tmp$ret$15;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[12] = t1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[13] = t2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[14] = t3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[15] = t4;
  }
  function Matrix__translate$default_impl_10t8ql($this, x, y, z, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = 0.0;
    if (!(($mask0 & 2) === 0))
      y = 0.0;
    if (!(($mask0 & 4) === 0))
      z = 0.0;
    return Matrix__translate_impl_1hftog($this, x, y, z);
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.s3d_1 = 0;
    this.t3d_1 = 1;
    this.u3d_1 = 3;
    this.v3d_1 = 4;
    this.w3d_1 = 5;
    this.x3d_1 = 7;
    this.y3d_1 = 10;
    this.z3d_1 = 12;
    this.a3e_1 = 13;
    this.b3e_1 = 14;
    this.c3e_1 = 15;
  }
  Companion_7.$metadata$ = objectMeta('Companion');
  var Companion_instance_7;
  function Companion_getInstance_19() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function Matrix__hashCode_impl_s9ntm9($this) {
    return hashCode($this);
  }
  function Matrix__equals_impl_g5p8p9($this, other) {
    if (!(other instanceof Matrix))
      return false;
    var tmp0_other_with_cast = other instanceof Matrix ? other.d3e_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Matrix(values) {
    Companion_getInstance_19();
    this.d3e_1 = values;
  }
  Matrix.prototype.toString = function () {
    return Matrix__toString_impl_l0abk0(this.d3e_1);
  };
  Matrix.prototype.hashCode = function () {
    return Matrix__hashCode_impl_s9ntm9(this.d3e_1);
  };
  Matrix.prototype.equals = function (other) {
    return Matrix__equals_impl_g5p8p9(this.d3e_1, other);
  };
  Matrix.$metadata$ = classMeta('Matrix');
  function dot(m1, row, m2, column) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$0 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 0 | 0];
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$1 = _Matrix___get_values__impl__fblr7b(m2)[0 + column | 0];
    var tmp_0 = tmp * tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 1 | 0];
    var tmp_1 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b(m2)[4 + column | 0];
    var tmp_2 = tmp_0 + tmp_1 * tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 2 | 0];
    var tmp_3 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b(m2)[8 + column | 0];
    var tmp_4 = tmp_2 + tmp_3 * tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 3 | 0];
    var tmp_5 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b(m2)[12 + column | 0];
    return tmp_4 + tmp_5 * tmp$ret$7;
  }
  function isIdentity(_this__u8e3s4) {
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var row = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= 3)
          do {
            var column = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var expected = row === column ? 1.0 : 0.0;
            var tmp$ret$0;
            // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
            tmp$ret$0 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(row, 4) + column | 0];
            if (!(tmp$ret$0 === expected)) {
              return false;
            }
          }
           while (inductionVariable_0 <= 3);
      }
       while (inductionVariable <= 3);
    return true;
  }
  function Rectangle(rect) {
    Outline.call(this);
    this.e3e_1 = rect;
  }
  Rectangle.prototype.a31 = function () {
    return this.e3e_1;
  };
  Rectangle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rectangle))
      return false;
    if (!this.e3e_1.equals(other.e3e_1))
      return false;
    return true;
  };
  Rectangle.prototype.hashCode = function () {
    return this.e3e_1.hashCode();
  };
  Rectangle.$metadata$ = classMeta('Rectangle', undefined, undefined, undefined, undefined, Outline.prototype);
  function Rounded(roundRect) {
    Outline.call(this);
    this.f3e_1 = roundRect;
    var tmp = this;
    var tmp_0;
    if (!hasSameCornerRadius(this.f3e_1)) {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Path_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.Rounded.<anonymous>' call
      tmp0_apply.h3e(this.f3e_1);
      tmp$ret$0 = tmp0_apply;
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = null;
    }
    tmp.g3e_1 = tmp_0;
  }
  Rounded.prototype.i3e = function () {
    return this.f3e_1;
  };
  Rounded.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rounded))
      return false;
    if (!this.f3e_1.equals(other.f3e_1))
      return false;
    return true;
  };
  Rounded.prototype.hashCode = function () {
    return this.f3e_1.hashCode();
  };
  Rounded.$metadata$ = classMeta('Rounded', undefined, undefined, undefined, undefined, Outline.prototype);
  function Generic() {
  }
  Generic.prototype.k3e = function () {
    return this.j3e_1;
  };
  Generic.$metadata$ = classMeta('Generic', undefined, undefined, undefined, undefined, Outline.prototype);
  function Outline() {
  }
  Outline.$metadata$ = classMeta('Outline');
  function hasSameCornerRadius(_this__u8e3s4) {
    var sameRadiusX = (_CornerRadius___get_x__impl__1594cn(_this__u8e3s4.m2j_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.l2j_1) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.l2j_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k2j_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k2j_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.j2j_1) : false;
    var sameRadiusY = (_CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.m2j_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.l2j_1) ? _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.l2j_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.k2j_1) : false) ? _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.k2j_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.j2j_1) : false;
    return sameRadiusX ? sameRadiusY : false;
  }
  function drawOutline(_this__u8e3s4, outline, color, alpha, style, colorFilter, blendMode) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp0_subject = outline;
    var tmp;
    if (tmp0_subject instanceof Rectangle) {
      var tmp0__anonymous__q1qw7t = outline.e3e_1;
      _this__u8e3s4.n3e(color, topLeft(tmp0__anonymous__q1qw7t), size(tmp0__anonymous__q1qw7t), alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      if (tmp0_subject instanceof Rounded) {
        var path = outline.g3e_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.l3e(path, color, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        } else {
          var tmp1__anonymous__uwfjfc = outline.f3e_1;
          var radius = _CornerRadius___get_x__impl__1594cn(tmp1__anonymous__uwfjfc.m2j_1);
          var tmp0_topLeft = topLeft_0(tmp1__anonymous__uwfjfc);
          var tmp1_size = size_0(tmp1__anonymous__uwfjfc);
          var tmp2_cornerRadius = CornerRadius$default(radius, 0.0, 2, null);
          _this__u8e3s4.m3e(color, tmp0_topLeft, tmp1_size, tmp2_cornerRadius, style, alpha, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        if (tmp0_subject instanceof Generic) {
          var tmp2__anonymous__z9zvc9 = outline.j3e_1;
          _this__u8e3s4.l3e(tmp2__anonymous__z9zvc9, color, alpha, style, colorFilter, blendMode);
          tmp = Unit_getInstance();
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  }
  function drawOutline$default(_this__u8e3s4, outline, color, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      alpha = 1.0;
    if (!(($mask0 & 8) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 16) === 0))
      colorFilter = null;
    if (!(($mask0 & 32) === 0))
      blendMode = Companion_getInstance_35().o3e_1;
    return drawOutline(_this__u8e3s4, outline, color, alpha, style, colorFilter, blendMode);
  }
  function drawOutline_0(_this__u8e3s4, outline, brush, alpha, style, colorFilter, blendMode) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp0_subject = outline;
    var tmp;
    if (tmp0_subject instanceof Rectangle) {
      var tmp0__anonymous__q1qw7t = outline.e3e_1;
      _this__u8e3s4.s3e(brush, topLeft(tmp0__anonymous__q1qw7t), size(tmp0__anonymous__q1qw7t), alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      if (tmp0_subject instanceof Rounded) {
        var path = outline.g3e_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.q3e(path, brush, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        } else {
          var tmp1__anonymous__uwfjfc = outline.f3e_1;
          var radius = _CornerRadius___get_x__impl__1594cn(tmp1__anonymous__uwfjfc.m2j_1);
          var tmp_1 = topLeft_0(tmp1__anonymous__uwfjfc);
          var tmp_2 = size_0(tmp1__anonymous__uwfjfc);
          _this__u8e3s4.r3e(brush, tmp_1, tmp_2, CornerRadius$default(radius, 0.0, 2, null), alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        if (tmp0_subject instanceof Generic) {
          var tmp2__anonymous__z9zvc9 = outline.j3e_1;
          _this__u8e3s4.q3e(tmp2__anonymous__z9zvc9, brush, alpha, style, colorFilter, blendMode);
          tmp = Unit_getInstance();
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  }
  function drawOutline$default_0(_this__u8e3s4, outline, brush, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      alpha = 1.0;
    if (!(($mask0 & 8) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 16) === 0))
      colorFilter = null;
    if (!(($mask0 & 32) === 0))
      blendMode = Companion_getInstance_35().o3e_1;
    return drawOutline_0(_this__u8e3s4, outline, brush, alpha, style, colorFilter, blendMode);
  }
  function drawOutlineHelper(_this__u8e3s4, outline, drawRectBlock, drawRoundedRectBlock, drawPathBlock) {
    var tmp0_subject = outline;
    var tmp;
    if (tmp0_subject instanceof Rectangle) {
      tmp = drawRectBlock(_this__u8e3s4, outline.e3e_1);
    } else {
      if (tmp0_subject instanceof Rounded) {
        var path = outline.g3e_1;
        var tmp_0;
        if (!(path == null)) {
          tmp_0 = drawPathBlock(_this__u8e3s4, path);
        } else {
          tmp_0 = drawRoundedRectBlock(_this__u8e3s4, outline.f3e_1);
        }
        tmp = tmp_0;
      } else {
        if (tmp0_subject instanceof Generic) {
          tmp = drawPathBlock(_this__u8e3s4, outline.j3e_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function topLeft(_this__u8e3s4) {
    return Offset(_this__u8e3s4.u2i_1, _this__u8e3s4.v2i_1);
  }
  function size(_this__u8e3s4) {
    return Size(_this__u8e3s4.a2j(), _this__u8e3s4.b2j());
  }
  function topLeft_0(_this__u8e3s4) {
    return Offset(_this__u8e3s4.f2j_1, _this__u8e3s4.g2j_1);
  }
  function size_0(_this__u8e3s4) {
    return Size(_this__u8e3s4.a2j(), _this__u8e3s4.b2j());
  }
  function Paint() {
  }
  Paint.$metadata$ = interfaceMeta('Paint');
  function get_DefaultAlpha() {
    return DefaultAlpha;
  }
  var DefaultAlpha;
  function _PaintingStyle___init__impl__pwxppo(value) {
    return value;
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.k3f_1 = _PaintingStyle___init__impl__pwxppo(0);
    this.l3f_1 = _PaintingStyle___init__impl__pwxppo(1);
  }
  Companion_8.prototype.m3f = function () {
    return this.k3f_1;
  };
  Companion_8.prototype.n3f = function () {
    return this.l3f_1;
  };
  Companion_8.$metadata$ = objectMeta('Companion');
  var Companion_instance_8;
  function Companion_getInstance_20() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Path() {
  }
  Path.$metadata$ = interfaceMeta('Path');
  function PathEffect() {
  }
  PathEffect.$metadata$ = interfaceMeta('PathEffect');
  function _PathFillType___init__impl__d59lzz(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.d3g_1 = _PathFillType___init__impl__d59lzz(0);
    this.e3g_1 = _PathFillType___init__impl__d59lzz(1);
  }
  Companion_9.$metadata$ = objectMeta('Companion');
  var Companion_instance_9;
  function Companion_getInstance_21() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function PathFillType__toString_impl_nw7h1d($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_21().d3g_1 ? 'NonZero' : tmp0_subject === Companion_getInstance_21().e3g_1 ? 'EvenOdd' : 'Unknown';
  }
  function PathFillType__hashCode_impl_pdqo4w($this) {
    return $this;
  }
  function PathFillType__equals_impl_94fhtg($this, other) {
    if (!(other instanceof PathFillType))
      return false;
    var tmp0_other_with_cast = other instanceof PathFillType ? other.f3g_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function PathFillType(value) {
    Companion_getInstance_21();
    this.f3g_1 = value;
  }
  PathFillType.prototype.toString = function () {
    return PathFillType__toString_impl_nw7h1d(this.f3g_1);
  };
  PathFillType.prototype.hashCode = function () {
    return PathFillType__hashCode_impl_pdqo4w(this.f3g_1);
  };
  PathFillType.prototype.equals = function (other) {
    return PathFillType__equals_impl_94fhtg(this.f3g_1, other);
  };
  PathFillType.$metadata$ = classMeta('PathFillType');
  function PathMeasure() {
  }
  PathMeasure.$metadata$ = interfaceMeta('PathMeasure');
  function _PathOperation___init__impl__8ddeif(value) {
    return value;
  }
  function Companion_10() {
    Companion_instance_10 = this;
    this.i3g_1 = _PathOperation___init__impl__8ddeif(0);
    this.j3g_1 = _PathOperation___init__impl__8ddeif(1);
    this.k3g_1 = _PathOperation___init__impl__8ddeif(2);
    this.l3g_1 = _PathOperation___init__impl__8ddeif(3);
    this.m3g_1 = _PathOperation___init__impl__8ddeif(4);
  }
  Companion_10.prototype.n3g = function () {
    return this.i3g_1;
  };
  Companion_10.$metadata$ = objectMeta('Companion');
  var Companion_instance_10;
  function Companion_getInstance_22() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function _PointMode___init__impl__mgo5cq(value) {
    return value;
  }
  function Companion_11() {
    Companion_instance_11 = this;
    this.o3g_1 = _PointMode___init__impl__mgo5cq(0);
    this.p3g_1 = _PointMode___init__impl__mgo5cq(1);
    this.q3g_1 = _PointMode___init__impl__mgo5cq(2);
  }
  Companion_11.prototype.r3g = function () {
    return this.o3g_1;
  };
  Companion_11.$metadata$ = objectMeta('Companion');
  var Companion_instance_11;
  function Companion_getInstance_23() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function PointMode__toString_impl_nuk5g2($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_23().o3g_1 ? 'Points' : tmp0_subject === Companion_getInstance_23().p3g_1 ? 'Lines' : tmp0_subject === Companion_getInstance_23().q3g_1 ? 'Polygon' : 'Unknown';
  }
  function PointMode__hashCode_impl_pfdzq7($this) {
    return $this;
  }
  function PointMode__equals_impl_r8q797($this, other) {
    if (!(other instanceof PointMode))
      return false;
    var tmp0_other_with_cast = other instanceof PointMode ? other.s3g_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function PointMode(value) {
    Companion_getInstance_23();
    this.s3g_1 = value;
  }
  PointMode.prototype.toString = function () {
    return PointMode__toString_impl_nuk5g2(this.s3g_1);
  };
  PointMode.prototype.hashCode = function () {
    return PointMode__hashCode_impl_pfdzq7(this.s3g_1);
  };
  PointMode.prototype.equals = function (other) {
    return PointMode__equals_impl_r8q797(this.s3g_1, other);
  };
  PointMode.$metadata$ = classMeta('PointMode');
  function get_RectangleShape() {
    init_properties_RectangleShape_kt_wysml4();
    return RectangleShape;
  }
  var RectangleShape;
  function RectangleShape$1() {
  }
  RectangleShape$1.prototype.t3g = function (size, layoutDirection, density) {
    return new Rectangle(toRect(size));
  };
  RectangleShape$1.prototype.toString = function () {
    return 'RectangleShape';
  };
  RectangleShape$1.$metadata$ = classMeta(undefined, [Shape]);
  var properties_initialized_RectangleShape_kt_h73j90;
  function init_properties_RectangleShape_kt_wysml4() {
    if (properties_initialized_RectangleShape_kt_h73j90) {
    } else {
      properties_initialized_RectangleShape_kt_h73j90 = true;
      RectangleShape = new RectangleShape$1();
    }
  }
  function Shadow_init_$Init$(color, offset, blurRadius, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      color = Color_1(new Long(-16777216, 0));
    if (!(($mask0 & 2) === 0))
      offset = Companion_getInstance_0().o2i_1;
    if (!(($mask0 & 4) === 0))
      blurRadius = 0.0;
    Shadow.call($this, color, offset, blurRadius);
    return $this;
  }
  function Shadow_init_$Create$(color, offset, blurRadius, $mask0, $marker) {
    return Shadow_init_$Init$(color, offset, blurRadius, $mask0, $marker, Object.create(Shadow.prototype));
  }
  function Companion_12() {
    Companion_instance_12 = this;
    var tmp = this;
    tmp.u3g_1 = Shadow_init_$Create$(null, null, 0.0, 7, null);
  }
  Companion_12.$metadata$ = objectMeta('Companion');
  var Companion_instance_12;
  function Companion_getInstance_24() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function Shadow(color, offset, blurRadius) {
    Companion_getInstance_24();
    this.v3g_1 = color;
    this.w3g_1 = offset;
    this.x3g_1 = blurRadius;
  }
  Shadow.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!equals(this.v3g_1, other.v3g_1))
      return false;
    if (!equals(this.w3g_1, other.w3g_1))
      return false;
    if (!(this.x3g_1 === other.x3g_1))
      return false;
    return true;
  };
  Shadow.prototype.hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.v3g_1);
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.w3g_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.x3g_1) | 0;
    return result;
  };
  Shadow.prototype.toString = function () {
    return 'Shadow(color=' + new Color(this.v3g_1) + ', offset=' + new Offset_0(this.w3g_1) + ', blurRadius=' + this.x3g_1 + ')';
  };
  Shadow.$metadata$ = classMeta('Shadow');
  function Shape() {
  }
  Shape.$metadata$ = interfaceMeta('Shape');
  function _StrokeCap___init__impl__kfgr27(value) {
    return value;
  }
  function _get_value__a43j40_0($this) {
    return $this;
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.y3g_1 = _StrokeCap___init__impl__kfgr27(0);
    this.z3g_1 = _StrokeCap___init__impl__kfgr27(1);
    this.a3h_1 = _StrokeCap___init__impl__kfgr27(2);
  }
  Companion_13.prototype.b3h = function () {
    return this.y3g_1;
  };
  Companion_13.prototype.c3h = function () {
    return this.z3g_1;
  };
  Companion_13.$metadata$ = objectMeta('Companion');
  var Companion_instance_13;
  function Companion_getInstance_25() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function StrokeCap__toString_impl_3xn0rd($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_25().y3g_1 ? 'Butt' : tmp0_subject === Companion_getInstance_25().z3g_1 ? 'Round' : tmp0_subject === Companion_getInstance_25().a3h_1 ? 'Square' : 'Unknown';
  }
  function StrokeCap__hashCode_impl_posxk8($this) {
    return $this;
  }
  function StrokeCap__equals_impl_m9bjik($this, other) {
    if (!(other instanceof StrokeCap))
      return false;
    var tmp0_other_with_cast = other instanceof StrokeCap ? other.d3h_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function StrokeCap(value) {
    Companion_getInstance_25();
    this.d3h_1 = value;
  }
  StrokeCap.prototype.toString = function () {
    return StrokeCap__toString_impl_3xn0rd(this.d3h_1);
  };
  StrokeCap.prototype.hashCode = function () {
    return StrokeCap__hashCode_impl_posxk8(this.d3h_1);
  };
  StrokeCap.prototype.equals = function (other) {
    return StrokeCap__equals_impl_m9bjik(this.d3h_1, other);
  };
  StrokeCap.$metadata$ = classMeta('StrokeCap');
  function _StrokeJoin___init__impl__ig23zz(value) {
    return value;
  }
  function _get_value__a43j40_1($this) {
    return $this;
  }
  function Companion_14() {
    Companion_instance_14 = this;
    this.e3h_1 = _StrokeJoin___init__impl__ig23zz(0);
    this.f3h_1 = _StrokeJoin___init__impl__ig23zz(1);
    this.g3h_1 = _StrokeJoin___init__impl__ig23zz(2);
  }
  Companion_14.prototype.h3h = function () {
    return this.g3h_1;
  };
  Companion_14.$metadata$ = objectMeta('Companion');
  var Companion_instance_14;
  function Companion_getInstance_26() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function StrokeJoin__toString_impl_ph4e1r($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_26().e3h_1 ? 'Miter' : tmp0_subject === Companion_getInstance_26().f3h_1 ? 'Round' : tmp0_subject === Companion_getInstance_26().g3h_1 ? 'Bevel' : 'Unknown';
  }
  function StrokeJoin__hashCode_impl_3pyh8w($this) {
    return $this;
  }
  function StrokeJoin__equals_impl_hf9ej8($this, other) {
    if (!(other instanceof StrokeJoin))
      return false;
    var tmp0_other_with_cast = other instanceof StrokeJoin ? other.i3h_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function StrokeJoin(value) {
    Companion_getInstance_26();
    this.i3h_1 = value;
  }
  StrokeJoin.prototype.toString = function () {
    return StrokeJoin__toString_impl_ph4e1r(this.i3h_1);
  };
  StrokeJoin.prototype.hashCode = function () {
    return StrokeJoin__hashCode_impl_3pyh8w(this.i3h_1);
  };
  StrokeJoin.prototype.equals = function (other) {
    return StrokeJoin__equals_impl_hf9ej8(this.i3h_1, other);
  };
  StrokeJoin.$metadata$ = classMeta('StrokeJoin');
  function Adaptation$Companion$Bradford$1() {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.8951, -0.7502, 0.0389, 0.2664, 1.7135, -0.0685, -0.1614, 0.0367, 1.0296]);
    Adaptation.call(this, tmp$ret$0);
  }
  Adaptation$Companion$Bradford$1.prototype.toString = function () {
    return 'Bradford';
  };
  Adaptation$Companion$Bradford$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, Adaptation.prototype);
  function Adaptation$Companion$VonKries$1() {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.40024, -0.2263, 0.0, 0.7076, 1.16532, 0.0, -0.08081, 0.0457, 0.91822]);
    Adaptation.call(this, tmp$ret$0);
  }
  Adaptation$Companion$VonKries$1.prototype.toString = function () {
    return 'VonKries';
  };
  Adaptation$Companion$VonKries$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, Adaptation.prototype);
  function Adaptation$Companion$Ciecat02$1() {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.7328, -0.7036, 0.003, 0.4296, 1.6975, 0.0136, -0.1624, 0.0061, 0.9834]);
    Adaptation.call(this, tmp$ret$0);
  }
  Adaptation$Companion$Ciecat02$1.prototype.toString = function () {
    return 'Ciecat02';
  };
  Adaptation$Companion$Ciecat02$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, Adaptation.prototype);
  function Companion_15() {
    Companion_instance_15 = this;
    var tmp = this;
    tmp.j3h_1 = new Adaptation$Companion$Bradford$1();
    var tmp_0 = this;
    tmp_0.k3h_1 = new Adaptation$Companion$VonKries$1();
    var tmp_1 = this;
    tmp_1.l3h_1 = new Adaptation$Companion$Ciecat02$1();
  }
  Companion_15.$metadata$ = objectMeta('Companion');
  var Companion_instance_15;
  function Companion_getInstance_27() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function Adaptation(transform) {
    Companion_getInstance_27();
    this.m3h_1 = transform;
  }
  Adaptation.$metadata$ = classMeta('Adaptation');
  function _ColorModel___init__impl__b968n9(packedValue) {
    return packedValue;
  }
  function _ColorModel___get_packedValue__impl__uvxrhj($this) {
    return $this;
  }
  function _ColorModel___get_componentCount__impl__au0uoc($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var tmp0_unpackInt1 = _ColorModel___get_packedValue__impl__uvxrhj($this);
    tmp$ret$0 = tmp0_unpackInt1.a7(32).b7();
    return tmp$ret$0;
  }
  function Companion_16() {
    Companion_instance_16 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$0 = new Long(0, 3);
    tmp.d3b_1 = _ColorModel___init__impl__b968n9(tmp$ret$0);
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$1 = new Long(1, 3);
    tmp_0.e3b_1 = _ColorModel___init__impl__b968n9(tmp$ret$1);
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$2 = new Long(2, 3);
    tmp_1.f3b_1 = _ColorModel___init__impl__b968n9(tmp$ret$2);
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$3 = new Long(3, 4);
    tmp_2.g3b_1 = _ColorModel___init__impl__b968n9(tmp$ret$3);
  }
  Companion_16.$metadata$ = objectMeta('Companion');
  var Companion_instance_16;
  function Companion_getInstance_28() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function ColorModel__toString_impl_msukd7($this) {
    var tmp0_subject = $this;
    return equals(tmp0_subject, Companion_getInstance_28().d3b_1) ? 'Rgb' : equals(tmp0_subject, Companion_getInstance_28().e3b_1) ? 'Xyz' : equals(tmp0_subject, Companion_getInstance_28().f3b_1) ? 'Lab' : equals(tmp0_subject, Companion_getInstance_28().g3b_1) ? 'Cmyk' : 'Unknown';
  }
  function ColorModel__hashCode_impl_11onkc($this) {
    return $this.hashCode();
  }
  function ColorModel__equals_impl_dbkfqg($this, other) {
    if (!(other instanceof ColorModel))
      return false;
    var tmp0_other_with_cast = other instanceof ColorModel ? other.n3h_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function ColorModel(packedValue) {
    Companion_getInstance_28();
    this.n3h_1 = packedValue;
  }
  ColorModel.prototype.toString = function () {
    return ColorModel__toString_impl_msukd7(this.n3h_1);
  };
  ColorModel.prototype.hashCode = function () {
    return ColorModel__hashCode_impl_11onkc(this.n3h_1);
  };
  ColorModel.prototype.equals = function (other) {
    return ColorModel__equals_impl_dbkfqg(this.n3h_1, other);
  };
  ColorModel.$metadata$ = classMeta('ColorModel');
  function Companion_17() {
    Companion_instance_17 = this;
    this.o3h_1 = -1;
    this.p3h_1 = 63;
  }
  Companion_17.$metadata$ = objectMeta('Companion');
  var Companion_instance_17;
  function Companion_getInstance_29() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function ColorSpace(name, model, id) {
    Companion_getInstance_29();
    this.b3a_1 = name;
    this.c3a_1 = model;
    this.d3a_1 = id;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    var tmp0_isEmpty = this.b3a_1;
    tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
    if (tmp$ret$0) {
      throw IllegalArgumentException_init_$Create$('The name of a color space cannot be null and must contain at least 1 character');
    }
    var tmp;
    Companion_getInstance_29();
    if (this.d3a_1 < -1) {
      tmp = true;
    } else {
      Companion_getInstance_29();
      tmp = this.d3a_1 > 63;
    }
    if (tmp) {
      Companion_getInstance_29();
      Companion_getInstance_29();
      throw IllegalArgumentException_init_$Create$('The id must be between ' + -1 + ' and ' + 63);
    }
  }
  ColorSpace.prototype.q3h = function () {
    return this.c3a_1;
  };
  ColorSpace.prototype.c3b = function () {
    return _ColorModel___get_componentCount__impl__au0uoc(this.c3a_1);
  };
  ColorSpace.prototype.z3a = function () {
    return false;
  };
  ColorSpace.prototype.toString = function () {
    return this.b3a_1 + ' (id=' + this.d3a_1 + ', model=' + new ColorModel(this.c3a_1) + ')';
  };
  ColorSpace.prototype.equals = function (other) {
    if (this === other) {
      return true;
    }
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other))) {
      return false;
    }
    var that = other instanceof ColorSpace ? other : THROW_CCE();
    if (!(this.d3a_1 === that.d3a_1))
      return false;
    return !(this.b3a_1 === that.b3a_1) ? false : equals(this.c3a_1, that.c3a_1);
  };
  ColorSpace.prototype.hashCode = function () {
    var result = getStringHashCode(this.b3a_1);
    result = imul(31, result) + ColorModel__hashCode_impl_11onkc(this.c3a_1) | 0;
    result = imul(31, result) + this.d3a_1 | 0;
    return result;
  };
  ColorSpace.$metadata$ = classMeta('ColorSpace');
  function connect(_this__u8e3s4, destination, intent) {
    if (_this__u8e3s4 === destination) {
      return Companion_getInstance_30().t3h(_this__u8e3s4);
    }
    var tmp;
    if (equals(_this__u8e3s4.c3a_1, Companion_getInstance_28().d3b_1) ? equals(destination.c3a_1, Companion_getInstance_28().d3b_1) : false) {
      var tmp_0 = _this__u8e3s4 instanceof Rgb ? _this__u8e3s4 : THROW_CCE();
      tmp = new RgbConnector(tmp_0, destination instanceof Rgb ? destination : THROW_CCE(), intent);
    } else {
      tmp = Connector_init_$Create$(_this__u8e3s4, destination, intent);
    }
    return tmp;
  }
  function connect$default(_this__u8e3s4, destination, intent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      destination = ColorSpaces_getInstance().b39_1;
    if (!(($mask0 & 2) === 0))
      intent = Companion_getInstance_33().u3h_1;
    return connect(_this__u8e3s4, destination, intent);
  }
  function absRcpResponse(x, a, b, c, d, g) {
    return withSign(rcpResponse(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function absResponse(x, a, b, c, d, g) {
    return withSign(response(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function adapt(_this__u8e3s4, whitePoint, adaptation) {
    if (equals(_this__u8e3s4.c3a_1, Companion_getInstance_28().d3b_1)) {
      var rgb = _this__u8e3s4 instanceof Rgb ? _this__u8e3s4 : THROW_CCE();
      if (compare_0(rgb.k3b_1, whitePoint)) {
        return _this__u8e3s4;
      }
      var xyz = whitePoint.a3i();
      var adaptationTransform = chromaticAdaptation(adaptation.m3h_1, rgb.k3b_1.a3i(), xyz);
      var transform = mul3x3(adaptationTransform, rgb.p3b_1);
      return Rgb_init_$Create$_1(rgb, transform, whitePoint);
    }
    return _this__u8e3s4;
  }
  function adapt$default(_this__u8e3s4, whitePoint, adaptation, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      adaptation = Companion_getInstance_27().j3h_1;
    return adapt(_this__u8e3s4, whitePoint, adaptation);
  }
  function compare(a, b) {
    if (a === b)
      return true;
    var inductionVariable = 0;
    var last = a.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp;
        if (!(compareTo(a[i], b[i]) === 0)) {
          var tmp$ret$0;
          // Inline function 'kotlin.math.abs' call
          var tmp0_abs = a[i] - b[i];
          tmp$ret$0 = Math.abs(tmp0_abs);
          tmp = tmp$ret$0 > 0.001;
        } else {
          tmp = false;
        }
        if (tmp)
          return false;
      }
       while (inductionVariable <= last);
    return true;
  }
  function mul3x3Float3(lhs, rhs) {
    var r0 = rhs[0];
    var r1 = rhs[1];
    var r2 = rhs[2];
    rhs[0] = lhs[0] * r0 + lhs[3] * r1 + lhs[6] * r2;
    rhs[1] = lhs[1] * r0 + lhs[4] * r1 + lhs[7] * r2;
    rhs[2] = lhs[2] * r0 + lhs[5] * r1 + lhs[8] * r2;
    return rhs;
  }
  function compare_0(a, b) {
    if (a === b)
      return true;
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = a.y3h_1 - b.y3h_1;
    tmp$ret$0 = Math.abs(tmp0_abs);
    if (tmp$ret$0 < 0.001) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.abs' call
      var tmp1_abs = a.z3h_1 - b.z3h_1;
      tmp$ret$1 = Math.abs(tmp1_abs);
      tmp = tmp$ret$1 < 0.001;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function mul3x3(lhs, rhs) {
    var r = new Float32Array(9);
    r[0] = lhs[0] * rhs[0] + lhs[3] * rhs[1] + lhs[6] * rhs[2];
    r[1] = lhs[1] * rhs[0] + lhs[4] * rhs[1] + lhs[7] * rhs[2];
    r[2] = lhs[2] * rhs[0] + lhs[5] * rhs[1] + lhs[8] * rhs[2];
    r[3] = lhs[0] * rhs[3] + lhs[3] * rhs[4] + lhs[6] * rhs[5];
    r[4] = lhs[1] * rhs[3] + lhs[4] * rhs[4] + lhs[7] * rhs[5];
    r[5] = lhs[2] * rhs[3] + lhs[5] * rhs[4] + lhs[8] * rhs[5];
    r[6] = lhs[0] * rhs[6] + lhs[3] * rhs[7] + lhs[6] * rhs[8];
    r[7] = lhs[1] * rhs[6] + lhs[4] * rhs[7] + lhs[7] * rhs[8];
    r[8] = lhs[2] * rhs[6] + lhs[5] * rhs[7] + lhs[8] * rhs[8];
    return r;
  }
  function chromaticAdaptation(matrix, srcWhitePoint, dstWhitePoint) {
    var srcLMS = mul3x3Float3(matrix, srcWhitePoint);
    var dstLMS = mul3x3Float3(matrix, dstWhitePoint);
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp0_floatArrayOf = new Float32Array([dstLMS[0] / srcLMS[0], dstLMS[1] / srcLMS[1], dstLMS[2] / srcLMS[2]]);
    tmp$ret$0 = tmp0_floatArrayOf;
    var LMS = tmp$ret$0;
    return mul3x3(inverse3x3(matrix), mul3x3Diag(LMS, matrix));
  }
  function inverse3x3(m) {
    var a = m[0];
    var b = m[3];
    var c = m[6];
    var d = m[1];
    var e = m[4];
    var f = m[7];
    var g = m[2];
    var h = m[5];
    var i = m[8];
    var xA = e * i - f * h;
    var xB = f * g - d * i;
    var xC = d * h - e * g;
    var det = a * xA + b * xB + c * xC;
    var inverted = new Float32Array(m.length);
    inverted[0] = xA / det;
    inverted[1] = xB / det;
    inverted[2] = xC / det;
    inverted[3] = (c * h - b * i) / det;
    inverted[4] = (a * i - c * g) / det;
    inverted[5] = (b * g - a * h) / det;
    inverted[6] = (b * f - c * e) / det;
    inverted[7] = (c * d - a * f) / det;
    inverted[8] = (a * e - b * d) / det;
    return inverted;
  }
  function mul3x3Diag(lhs, rhs) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp0_floatArrayOf = new Float32Array([lhs[0] * rhs[0], lhs[1] * rhs[1], lhs[2] * rhs[2], lhs[0] * rhs[3], lhs[1] * rhs[4], lhs[2] * rhs[5], lhs[0] * rhs[6], lhs[1] * rhs[7], lhs[2] * rhs[8]]);
    tmp$ret$0 = tmp0_floatArrayOf;
    return tmp$ret$0;
  }
  function rcpResponse(x, a, b, c, d, g) {
    var tmp;
    if (x >= d * c) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = 1.0 / g;
      tmp$ret$0 = Math.pow(x, tmp0_pow);
      tmp = (tmp$ret$0 - b) / a;
    } else {
      tmp = x / c;
    }
    return tmp;
  }
  function rcpResponse_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d * c) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = x - e;
      var tmp1_pow = 1.0 / g;
      tmp$ret$0 = Math.pow(tmp0_pow, tmp1_pow);
      tmp = (tmp$ret$0 - b) / a;
    } else {
      tmp = (x - f) / c;
    }
    return tmp;
  }
  function response(x, a, b, c, d, g) {
    var tmp;
    if (x >= d) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = a * x + b;
      tmp$ret$0 = Math.pow(tmp0_pow, g);
      tmp = tmp$ret$0;
    } else {
      tmp = c * x;
    }
    return tmp;
  }
  function response_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = a * x + b;
      tmp$ret$0 = Math.pow(tmp0_pow, g);
      tmp = tmp$ret$0 + e;
    } else {
      tmp = c * x + f;
    }
    return tmp;
  }
  function ColorSpaces$ExtendedSrgb$lambda(x) {
    return absRcpResponse(x, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045, 2.4);
  }
  function ColorSpaces$ExtendedSrgb$lambda_0(x) {
    return absResponse(x, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045, 2.4);
  }
  function ColorSpaces() {
    ColorSpaces_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    tmp.x38_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$1 = new Float32Array([0.67, 0.33, 0.21, 0.71, 0.14, 0.08]);
    tmp_0.y38_1 = tmp$ret$1;
    var tmp_1 = this;
    tmp_1.z38_1 = TransferParameters_init_$Create$(2.4, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045, 0.0, 0.0, 96, null);
    var tmp_2 = this;
    tmp_2.a39_1 = TransferParameters_init_$Create$(2.2, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045, 0.0, 0.0, 96, null);
    this.b39_1 = Rgb_init_$Create$('sRGB IEC61966-2.1', this.x38_1, Illuminant_getInstance().h3i_1, this.z38_1, 0);
    this.c39_1 = Rgb_init_$Create$_0('sRGB IEC61966-2.1 (Linear)', this.x38_1, Illuminant_getInstance().h3i_1, 1.0, 0.0, 1.0, 1);
    var tmp_3 = this;
    var tmp_4 = Illuminant_getInstance().h3i_1;
    var tmp_5 = ColorSpaces$ExtendedSrgb$lambda;
    tmp_3.d39_1 = new Rgb('scRGB-nl IEC 61966-2-2:2003', this.x38_1, tmp_4, null, tmp_5, ColorSpaces$ExtendedSrgb$lambda_0, -0.799, 2.399, this.z38_1, 2);
    this.e39_1 = Rgb_init_$Create$_0('scRGB IEC 61966-2-2:2003', this.x38_1, Illuminant_getInstance().h3i_1, 1.0, -0.5, 7.499, 3);
    var tmp_6 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$2 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    var tmp_7 = tmp$ret$2;
    var tmp_8 = Illuminant_getInstance().h3i_1;
    tmp_6.f39_1 = Rgb_init_$Create$('Rec. ITU-R BT.709-5', tmp_7, tmp_8, TransferParameters_init_$Create$(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081, 0.0, 0.0, 96, null), 4);
    var tmp_9 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$3 = new Float32Array([0.708, 0.292, 0.17, 0.797, 0.131, 0.046]);
    var tmp_10 = tmp$ret$3;
    var tmp_11 = Illuminant_getInstance().h3i_1;
    tmp_9.g39_1 = Rgb_init_$Create$('Rec. ITU-R BT.2020-1', tmp_10, tmp_11, TransferParameters_init_$Create$(2.2222222222222223, 0.9096697898662786, 0.09033021013372146, 0.2222222222222222, 0.08145, 0.0, 0.0, 96, null), 5);
    var tmp_12 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$4 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_12.h39_1 = Rgb_init_$Create$_0('SMPTE RP 431-2-2007 DCI (P3)', tmp$ret$4, new WhitePoint(0.314, 0.351), 2.6, 0.0, 1.0, 6);
    var tmp_13 = this;
    var tmp$ret$5;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$5 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_13.i39_1 = Rgb_init_$Create$('Display P3', tmp$ret$5, Illuminant_getInstance().h3i_1, this.z38_1, 7);
    var tmp_14 = this;
    var tmp_15 = Illuminant_getInstance().d3i_1;
    tmp_14.j39_1 = Rgb_init_$Create$('NTSC (1953)', this.y38_1, tmp_15, TransferParameters_init_$Create$(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081, 0.0, 0.0, 96, null), 8);
    var tmp_16 = this;
    var tmp$ret$6;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$6 = new Float32Array([0.63, 0.34, 0.31, 0.595, 0.155, 0.07]);
    var tmp_17 = tmp$ret$6;
    var tmp_18 = Illuminant_getInstance().h3i_1;
    tmp_16.k39_1 = Rgb_init_$Create$('SMPTE-C RGB', tmp_17, tmp_18, TransferParameters_init_$Create$(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081, 0.0, 0.0, 96, null), 9);
    var tmp_19 = this;
    var tmp$ret$7;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$7 = new Float32Array([0.64, 0.33, 0.21, 0.71, 0.15, 0.06]);
    tmp_19.l39_1 = Rgb_init_$Create$_0('Adobe RGB (1998)', tmp$ret$7, Illuminant_getInstance().h3i_1, 2.2, 0.0, 1.0, 10);
    var tmp_20 = this;
    var tmp$ret$8;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$8 = new Float32Array([0.7347, 0.2653, 0.1596, 0.8404, 0.0366, 1.0E-4]);
    var tmp_21 = tmp$ret$8;
    var tmp_22 = Illuminant_getInstance().e3i_1;
    tmp_20.m39_1 = Rgb_init_$Create$('ROMM RGB ISO 22028-2:2013', tmp_21, tmp_22, TransferParameters_init_$Create$(1.8, 1.0, 0.0, 0.0625, 0.031248, 0.0, 0.0, 96, null), 11);
    var tmp_23 = this;
    var tmp$ret$9;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$9 = new Float32Array([0.7347, 0.2653, 0.0, 1.0, 1.0E-4, -0.077]);
    tmp_23.n39_1 = Rgb_init_$Create$_0('SMPTE ST 2065-1:2012 ACES', tmp$ret$9, Illuminant_getInstance().g3i_1, 1.0, -65504.0, 65504.0, 12);
    var tmp_24 = this;
    var tmp$ret$10;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$10 = new Float32Array([0.713, 0.293, 0.165, 0.83, 0.128, 0.044]);
    tmp_24.o39_1 = Rgb_init_$Create$_0('Academy S-2014-004 ACEScg', tmp$ret$10, Illuminant_getInstance().g3i_1, 1.0, -65504.0, 65504.0, 13);
    this.p39_1 = new Xyz('Generic XYZ', 14);
    this.q39_1 = new Lab('Generic L*a*b*', 15);
    this.r39_1 = Rgb_init_$Create$('None', this.x38_1, Illuminant_getInstance().h3i_1, this.a39_1, 16);
    this.s39_1 = new Oklab('Oklab', 17);
    var tmp_25 = this;
    var tmp$ret$13;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [this.b39_1, this.c39_1, this.d39_1, this.e39_1, this.f39_1, this.g39_1, this.h39_1, this.i39_1, this.j39_1, this.k39_1, this.l39_1, this.m39_1, this.n39_1, this.o39_1, this.p39_1, this.q39_1, this.r39_1, this.s39_1];
    var tmp$ret$12;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$11;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$11 = tmp0_arrayOf;
    tmp$ret$12 = tmp$ret$11;
    tmp$ret$13 = tmp$ret$12;
    tmp_25.t39_1 = tmp$ret$13;
  }
  ColorSpaces.prototype.l3i = function (id) {
    return this.t39_1[id];
  };
  ColorSpaces.$metadata$ = objectMeta('ColorSpaces');
  var ColorSpaces_instance;
  function ColorSpaces_getInstance() {
    if (ColorSpaces_instance == null)
      new ColorSpaces();
    return ColorSpaces_instance;
  }
  function computeTransform($this, source, destination, intent) {
    if (compare_0(source.k3b_1, destination.k3b_1)) {
      return mul3x3(destination.q3b_1, source.p3b_1);
    } else {
      var transform = source.p3b_1;
      var inverseTransform = destination.q3b_1;
      var srcXYZ = source.k3b_1.a3i();
      var dstXYZ = destination.k3b_1.a3i();
      if (!compare_0(source.k3b_1, Illuminant_getInstance().e3i_1)) {
        var tmp = Companion_getInstance_27().j3h_1.m3h_1;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.copyOf' call
        var tmp0_copyOf = Illuminant_getInstance().k3i_1;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_copyOf;
        tmp$ret$1 = tmp$ret$0.slice();
        var srcAdaptation = chromaticAdaptation(tmp, srcXYZ, tmp$ret$1);
        transform = mul3x3(srcAdaptation, source.p3b_1);
      }
      if (!compare_0(destination.k3b_1, Illuminant_getInstance().e3i_1)) {
        var tmp_0 = Companion_getInstance_27().j3h_1.m3h_1;
        var tmp$ret$3;
        // Inline function 'kotlin.collections.copyOf' call
        var tmp1_copyOf = Illuminant_getInstance().k3i_1;
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp1_copyOf;
        tmp$ret$3 = tmp$ret$2.slice();
        var dstAdaptation = chromaticAdaptation(tmp_0, dstXYZ, tmp$ret$3);
        inverseTransform = inverse3x3(mul3x3(dstAdaptation, destination.p3b_1));
      }
      if (intent === Companion_getInstance_33().x3h_1) {
        var tmp$ret$4;
        // Inline function 'kotlin.floatArrayOf' call
        var tmp2_floatArrayOf = new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
        tmp$ret$4 = tmp2_floatArrayOf;
        transform = mul3x3Diag(tmp$ret$4, transform);
      }
      return mul3x3(inverseTransform, transform);
    }
  }
  function computeTransform_0($this, source, destination, intent) {
    if (!(intent === Companion_getInstance_33().x3h_1))
      return null;
    var srcRGB = equals(source.c3a_1, Companion_getInstance_28().d3b_1);
    var dstRGB = equals(destination.c3a_1, Companion_getInstance_28().d3b_1);
    if (srcRGB ? dstRGB : false)
      return null;
    if (srcRGB ? true : dstRGB) {
      var tmp = srcRGB ? source : destination;
      var rgb = tmp instanceof Rgb ? tmp : THROW_CCE();
      var srcXYZ = srcRGB ? rgb.k3b_1.a3i() : Illuminant_getInstance().k3i_1;
      var dstXYZ = dstRGB ? rgb.k3b_1.a3i() : Illuminant_getInstance().k3i_1;
      var tmp$ret$0;
      // Inline function 'kotlin.floatArrayOf' call
      var tmp0_floatArrayOf = new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
      tmp$ret$0 = tmp0_floatArrayOf;
      return tmp$ret$0;
    }
    return null;
  }
  function Connector$Companion$identity$1($source) {
    Connector_init_$Init$($source, $source, Companion_getInstance_33().v3h_1, this);
  }
  Connector$Companion$identity$1.prototype.a3a = function (v) {
    return v;
  };
  Connector$Companion$identity$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, Connector.prototype);
  function Connector_init_$Init$(source, destination, intent, $this) {
    var tmp;
    if (equals(source.c3a_1, Companion_getInstance_28().d3b_1)) {
      var tmp_0 = Illuminant_getInstance().e3i_1;
      tmp = adapt$default(source, tmp_0, null, 2, null);
    } else {
      tmp = source;
    }
    var tmp_1 = tmp;
    var tmp_2;
    if (equals(destination.c3a_1, Companion_getInstance_28().d3b_1)) {
      var tmp_3 = Illuminant_getInstance().e3i_1;
      tmp_2 = adapt$default(destination, tmp_3, null, 2, null);
    } else {
      tmp_2 = destination;
    }
    Connector.call($this, source, destination, tmp_1, tmp_2, intent, computeTransform_0(Companion_getInstance_30(), source, destination, intent));
    return $this;
  }
  function Connector_init_$Create$(source, destination, intent) {
    return Connector_init_$Init$(source, destination, intent, Object.create(Connector.prototype));
  }
  function RgbConnector(mSource, mDestination, intent) {
    Connector.call(this, mSource, mDestination, mSource, mDestination, intent, null);
    this.y3i_1 = mSource;
    this.z3i_1 = mDestination;
    this.a3j_1 = computeTransform(this, this.y3i_1, this.z3i_1, intent);
  }
  RgbConnector.prototype.a3a = function (v) {
    v[0] = this.y3i_1.u3b_1(v[0]);
    v[1] = this.y3i_1.u3b_1(v[1]);
    v[2] = this.y3i_1.u3b_1(v[2]);
    mul3x3Float3(this.a3j_1, v);
    v[0] = this.z3i_1.s3b_1(v[0]);
    v[1] = this.z3i_1.s3b_1(v[1]);
    v[2] = this.z3i_1.s3b_1(v[2]);
    return v;
  };
  RgbConnector.$metadata$ = classMeta('RgbConnector', undefined, undefined, undefined, undefined, Connector.prototype);
  function Companion_18() {
    Companion_instance_18 = this;
  }
  Companion_18.prototype.t3h = function (source) {
    return new Connector$Companion$identity$1(source);
  };
  Companion_18.$metadata$ = objectMeta('Companion');
  var Companion_instance_18;
  function Companion_getInstance_30() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function Connector(source, destination, transformSource, transformDestination, renderIntent, transform) {
    Companion_getInstance_30();
    this.u39_1 = source;
    this.v39_1 = destination;
    this.w39_1 = transformSource;
    this.x39_1 = transformDestination;
    this.y39_1 = renderIntent;
    this.z39_1 = transform;
  }
  Connector.prototype.a3a = function (v) {
    var xyz = this.w39_1.r3h(v);
    if (!(this.z39_1 == null)) {
      var tmp0_array = xyz;
      var tmp1_index0 = 0;
      tmp0_array[tmp1_index0] = tmp0_array[tmp1_index0] * this.z39_1[0];
      var tmp2_array = xyz;
      var tmp3_index0 = 1;
      tmp2_array[tmp3_index0] = tmp2_array[tmp3_index0] * this.z39_1[1];
      var tmp4_array = xyz;
      var tmp5_index0 = 2;
      tmp4_array[tmp5_index0] = tmp4_array[tmp5_index0] * this.z39_1[2];
    }
    return this.x39_1.s3h(xyz);
  };
  Connector.$metadata$ = classMeta('Connector');
  function Illuminant() {
    Illuminant_instance = this;
    this.b3i_1 = new WhitePoint(0.44757, 0.40745);
    this.c3i_1 = new WhitePoint(0.34842, 0.35161);
    this.d3i_1 = new WhitePoint(0.31006, 0.31616);
    this.e3i_1 = new WhitePoint(0.34567, 0.3585);
    this.f3i_1 = new WhitePoint(0.33242, 0.34743);
    this.g3i_1 = new WhitePoint(0.32168, 0.33767);
    this.h3i_1 = new WhitePoint(0.31271, 0.32902);
    this.i3i_1 = new WhitePoint(0.29902, 0.31485);
    this.j3i_1 = new WhitePoint(0.33333, 0.33333);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.964212, 1.0, 0.825188]);
    tmp.k3i_1 = tmp$ret$0;
  }
  Illuminant.$metadata$ = objectMeta('Illuminant');
  var Illuminant_instance;
  function Illuminant_getInstance() {
    if (Illuminant_instance == null)
      new Illuminant();
    return Illuminant_instance;
  }
  function Companion_19() {
    Companion_instance_19 = this;
    this.b3j_1 = 0.008856452;
    this.c3j_1 = 7.787037;
    this.d3j_1 = 0.13793103;
    this.e3j_1 = 0.20689656;
  }
  Companion_19.$metadata$ = objectMeta('Companion');
  var Companion_instance_19;
  function Companion_getInstance_31() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function Lab(name, id) {
    Companion_getInstance_31();
    ColorSpace.call(this, name, Companion_getInstance_28().f3b_1, id);
  }
  Lab.prototype.a3b = function (component) {
    return component === 0 ? 0.0 : -128.0;
  };
  Lab.prototype.b3b = function (component) {
    return component === 0 ? 100.0 : 128.0;
  };
  Lab.prototype.r3h = function (v) {
    v[0] = coerceIn(v[0], 0.0, 100.0);
    v[1] = coerceIn(v[1], -128.0, 128.0);
    v[2] = coerceIn(v[2], -128.0, 128.0);
    var fy = (v[0] + 16.0) / 116.0;
    var fx = fy + v[1] * 0.002;
    var fz = fy - v[2] * 0.005;
    var tmp;
    Companion_getInstance_31();
    if (fx > 0.20689656) {
      tmp = fx * fx * fx;
    } else {
      Companion_getInstance_31();
      var tmp_0 = 1.0 / 7.787037;
      Companion_getInstance_31();
      tmp = tmp_0 * (fx - 0.13793103);
    }
    var x = tmp;
    var tmp_1;
    Companion_getInstance_31();
    if (fy > 0.20689656) {
      tmp_1 = fy * fy * fy;
    } else {
      Companion_getInstance_31();
      var tmp_2 = 1.0 / 7.787037;
      Companion_getInstance_31();
      tmp_1 = tmp_2 * (fy - 0.13793103);
    }
    var y = tmp_1;
    var tmp_3;
    Companion_getInstance_31();
    if (fz > 0.20689656) {
      tmp_3 = fz * fz * fz;
    } else {
      Companion_getInstance_31();
      var tmp_4 = 1.0 / 7.787037;
      Companion_getInstance_31();
      tmp_3 = tmp_4 * (fz - 0.13793103);
    }
    var z = tmp_3;
    v[0] = x * Illuminant_getInstance().k3i_1[0];
    v[1] = y * Illuminant_getInstance().k3i_1[1];
    v[2] = z * Illuminant_getInstance().k3i_1[2];
    return v;
  };
  Lab.prototype.s3h = function (v) {
    var x = v[0] / Illuminant_getInstance().k3i_1[0];
    var y = v[1] / Illuminant_getInstance().k3i_1[1];
    var z = v[2] / Illuminant_getInstance().k3i_1[2];
    var tmp;
    Companion_getInstance_31();
    if (x > 0.008856452) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = 1.0 / 3.0;
      tmp$ret$0 = Math.pow(x, tmp0_pow);
      tmp = tmp$ret$0;
    } else {
      Companion_getInstance_31();
      var tmp_0 = 7.787037 * x;
      Companion_getInstance_31();
      tmp = tmp_0 + 0.13793103;
    }
    var fx = tmp;
    var tmp_1;
    Companion_getInstance_31();
    if (y > 0.008856452) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.pow' call
      var tmp1_pow = 1.0 / 3.0;
      tmp$ret$1 = Math.pow(y, tmp1_pow);
      tmp_1 = tmp$ret$1;
    } else {
      Companion_getInstance_31();
      var tmp_2 = 7.787037 * y;
      Companion_getInstance_31();
      tmp_1 = tmp_2 + 0.13793103;
    }
    var fy = tmp_1;
    var tmp_3;
    Companion_getInstance_31();
    if (z > 0.008856452) {
      var tmp$ret$2;
      // Inline function 'kotlin.math.pow' call
      var tmp2_pow = 1.0 / 3.0;
      tmp$ret$2 = Math.pow(z, tmp2_pow);
      tmp_3 = tmp$ret$2;
    } else {
      Companion_getInstance_31();
      var tmp_4 = 7.787037 * z;
      Companion_getInstance_31();
      tmp_3 = tmp_4 + 0.13793103;
    }
    var fz = tmp_3;
    var l = 116.0 * fy - 16.0;
    var a = 500.0 * (fx - fy);
    var b = 200.0 * (fy - fz);
    v[0] = coerceIn(l, 0.0, 100.0);
    v[1] = coerceIn(a, -128.0, 128.0);
    v[2] = coerceIn(b, -128.0, 128.0);
    return v;
  };
  Lab.$metadata$ = classMeta('Lab', undefined, undefined, undefined, undefined, ColorSpace.prototype);
  function Companion_20() {
    Companion_instance_20 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.818933, 0.032984544, 0.0482003, 0.36186674, 0.9293119, 0.26436627, -0.12885971, 0.03614564, 0.6338517]);
    tmp.i3j_1 = mul3x3(tmp$ret$0, chromaticAdaptation(Companion_getInstance_27().j3h_1.m3h_1, Illuminant_getInstance().e3i_1.a3i(), Illuminant_getInstance().h3i_1.a3i()));
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$1 = new Float32Array([0.21045426, 1.9779985, 0.025904037, 0.7936178, -2.4285922, 0.78277177, -0.004072047, 0.4505937, -0.80867577]);
    tmp_0.j3j_1 = tmp$ret$1;
    this.k3j_1 = inverse3x3(this.i3j_1);
    this.l3j_1 = inverse3x3(this.j3j_1);
  }
  Companion_20.$metadata$ = objectMeta('Companion');
  var Companion_instance_20;
  function Companion_getInstance_32() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function Oklab(name, id) {
    Companion_getInstance_32();
    ColorSpace.call(this, name, Companion_getInstance_28().f3b_1, id);
  }
  Oklab.prototype.a3b = function (component) {
    return component === 0 ? 0.0 : -0.5;
  };
  Oklab.prototype.b3b = function (component) {
    return component === 0 ? 1.0 : 0.5;
  };
  Oklab.prototype.r3h = function (v) {
    v[0] = coerceIn(v[0], 0.0, 1.0);
    v[1] = coerceIn(v[1], -0.5, 0.5);
    v[2] = coerceIn(v[2], -0.5, 0.5);
    mul3x3Float3(Companion_getInstance_32().l3j_1, v);
    v[0] = v[0] * v[0] * v[0];
    v[1] = v[1] * v[1] * v[1];
    v[2] = v[2] * v[2] * v[2];
    mul3x3Float3(Companion_getInstance_32().k3j_1, v);
    return v;
  };
  Oklab.prototype.s3h = function (v) {
    mul3x3Float3(Companion_getInstance_32().i3j_1, v);
    var tmp$ret$0;
    // Inline function 'kotlin.math.sign' call
    var tmp0_sign = v[0];
    tmp$ret$0 = sign(tmp0_sign);
    var tmp = tmp$ret$0;
    var tmp$ret$2;
    // Inline function 'kotlin.math.pow' call
    var tmp$ret$1;
    // Inline function 'kotlin.math.abs' call
    var tmp1_abs = v[0];
    tmp$ret$1 = Math.abs(tmp1_abs);
    var tmp2_pow = tmp$ret$1;
    var tmp3_pow = 1.0 / 3.0;
    tmp$ret$2 = Math.pow(tmp2_pow, tmp3_pow);
    v[0] = tmp * tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.math.sign' call
    var tmp4_sign = v[1];
    tmp$ret$3 = sign(tmp4_sign);
    var tmp_0 = tmp$ret$3;
    var tmp$ret$5;
    // Inline function 'kotlin.math.pow' call
    var tmp$ret$4;
    // Inline function 'kotlin.math.abs' call
    var tmp5_abs = v[1];
    tmp$ret$4 = Math.abs(tmp5_abs);
    var tmp6_pow = tmp$ret$4;
    var tmp7_pow = 1.0 / 3.0;
    tmp$ret$5 = Math.pow(tmp6_pow, tmp7_pow);
    v[1] = tmp_0 * tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'kotlin.math.sign' call
    var tmp8_sign = v[2];
    tmp$ret$6 = sign(tmp8_sign);
    var tmp_1 = tmp$ret$6;
    var tmp$ret$8;
    // Inline function 'kotlin.math.pow' call
    var tmp$ret$7;
    // Inline function 'kotlin.math.abs' call
    var tmp9_abs = v[2];
    tmp$ret$7 = Math.abs(tmp9_abs);
    var tmp10_pow = tmp$ret$7;
    var tmp11_pow = 1.0 / 3.0;
    tmp$ret$8 = Math.pow(tmp10_pow, tmp11_pow);
    v[2] = tmp_1 * tmp$ret$8;
    mul3x3Float3(Companion_getInstance_32().j3j_1, v);
    return v;
  };
  Oklab.$metadata$ = classMeta('Oklab', undefined, undefined, undefined, undefined, ColorSpace.prototype);
  function _RenderIntent___init__impl__jceahd(value) {
    return value;
  }
  function Companion_21() {
    Companion_instance_21 = this;
    this.u3h_1 = _RenderIntent___init__impl__jceahd(0);
    this.v3h_1 = _RenderIntent___init__impl__jceahd(1);
    this.w3h_1 = _RenderIntent___init__impl__jceahd(2);
    this.x3h_1 = _RenderIntent___init__impl__jceahd(3);
  }
  Companion_21.$metadata$ = objectMeta('Companion');
  var Companion_instance_21;
  function Companion_getInstance_33() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function isSrgb($this, primaries, whitePoint, OETF, EOTF, min, max, id) {
    if (id === 0)
      return true;
    if (!compare(primaries, ColorSpaces_getInstance().x38_1)) {
      return false;
    }
    if (!compare_0(whitePoint, Illuminant_getInstance().h3i_1)) {
      return false;
    }
    if (!(min === 0.0))
      return false;
    if (!(max === 1.0))
      return false;
    var srgb = ColorSpaces_getInstance().b39_1;
    var x = 0.0;
    while (x <= 1.0) {
      if (!compare_1($this, x, OETF, srgb.r3b_1))
        return false;
      if (!compare_1($this, x, EOTF, srgb.t3b_1))
        return false;
      x = x + 0.00392156862745098;
    }
    return true;
  }
  function compare_1($this, point, a, b) {
    var rA = a(point);
    var rB = b(point);
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = rA - rB;
    tmp$ret$0 = Math.abs(tmp0_abs);
    return tmp$ret$0 <= 0.001;
  }
  function isWideGamut($this, primaries, min, max) {
    return (area($this, primaries) / area($this, ColorSpaces_getInstance().y38_1) > 0.9 ? contains($this, primaries, ColorSpaces_getInstance().x38_1) : false) ? true : min < 0.0 ? max > 1.0 : false;
  }
  function area($this, primaries) {
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var det = rx * gy + ry * bx + gx * by - gy * bx - ry * gx - rx * by;
    var r = 0.5 * det;
    return r < 0.0 ? -r : r;
  }
  function cross($this, ax, ay, bx, by) {
    return ax * by - ay * bx;
  }
  function contains($this, p1, p2) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp0_floatArrayOf = new Float32Array([p1[0] - p2[0], p1[1] - p2[1], p1[2] - p2[2], p1[3] - p2[3], p1[4] - p2[4], p1[5] - p2[5]]);
    tmp$ret$0 = tmp0_floatArrayOf;
    var p0 = tmp$ret$0;
    if (cross($this, p0[0], p0[1], p2[0] - p2[4], p2[1] - p2[5]) < 0 ? true : cross($this, p2[0] - p2[2], p2[1] - p2[3], p0[0], p0[1]) < 0) {
      return false;
    }
    if (cross($this, p0[2], p0[3], p2[2] - p2[0], p2[3] - p2[1]) < 0 ? true : cross($this, p2[2] - p2[4], p2[3] - p2[5], p0[2], p0[3]) < 0) {
      return false;
    }
    return !(cross($this, p0[4], p0[5], p2[4] - p2[2], p2[5] - p2[3]) < 0 ? true : cross($this, p2[4] - p2[0], p2[5] - p2[1], p0[4], p0[5]) < 0);
  }
  function xyPrimaries($this, primaries) {
    var xyPrimaries = new Float32Array(6);
    if (primaries.length === 9) {
      var sum = primaries[0] + primaries[1] + primaries[2];
      xyPrimaries[0] = primaries[0] / sum;
      xyPrimaries[1] = primaries[1] / sum;
      sum = primaries[3] + primaries[4] + primaries[5];
      xyPrimaries[2] = primaries[3] / sum;
      xyPrimaries[3] = primaries[4] / sum;
      sum = primaries[6] + primaries[7] + primaries[8];
      xyPrimaries[4] = primaries[6] / sum;
      xyPrimaries[5] = primaries[7] / sum;
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = primaries;
      tmp$ret$1 = tmp$ret$0;
      var tmp = tmp$ret$1;
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = xyPrimaries;
      tmp$ret$3 = tmp$ret$2;
      arrayCopy(tmp, tmp$ret$3, 0, 0, 6);
      tmp$ret$4 = xyPrimaries;
    }
    return xyPrimaries;
  }
  function computeXYZMatrix($this, primaries, whitePoint) {
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var wx = whitePoint.y3h_1;
    var wy = whitePoint.z3h_1;
    var oneRxRy = (1 - rx) / ry;
    var oneGxGy = (1 - gx) / gy;
    var oneBxBy = (1 - bx) / by;
    var oneWxWy = (1 - wx) / wy;
    var rxRy = rx / ry;
    var gxGy = gx / gy;
    var bxBy = bx / by;
    var wxWy = wx / wy;
    var byNumerator = (oneWxWy - oneRxRy) * (gxGy - rxRy) - (wxWy - rxRy) * (oneGxGy - oneRxRy);
    var byDenominator = (oneBxBy - oneRxRy) * (gxGy - rxRy) - (bxBy - rxRy) * (oneGxGy - oneRxRy);
    var bY = byNumerator / byDenominator;
    var gY = (wxWy - rxRy - bY * (bxBy - rxRy)) / (gxGy - rxRy);
    var rY = 1.0 - gY - bY;
    var rYRy = rY / ry;
    var gYGy = gY / gy;
    var bYBy = bY / by;
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp0_floatArrayOf = new Float32Array([rYRy * rx, rY, rYRy * (1.0 - rx - ry), gYGy * gx, gY, gYGy * (1.0 - gx - gy), bYBy * bx, bY, bYBy * (1.0 - bx - by)]);
    tmp$ret$0 = tmp0_floatArrayOf;
    return tmp$ret$0;
  }
  function Rgb$Companion$DoubleIdentity$lambda(d) {
    return d;
  }
  function Rgb_init_$Init$(name, primaries, whitePoint, function_0, id, $this) {
    var tmp;
    if (function_0.u3j_1 === 0.0 ? function_0.v3j_1 === 0.0 : false) {
      tmp = Rgb$_init_$lambda_yyl4se(function_0);
    } else {
      tmp = Rgb$_init_$lambda_yyl4se_0(function_0);
    }
    var tmp_0 = tmp;
    var tmp_1;
    if (function_0.u3j_1 === 0.0 ? function_0.v3j_1 === 0.0 : false) {
      tmp_1 = Rgb$_init_$lambda_yyl4se_1(function_0);
    } else {
      tmp_1 = Rgb$_init_$lambda_yyl4se_2(function_0);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_0, tmp_1, 0.0, 1.0, function_0, id);
    return $this;
  }
  function Rgb_init_$Create$(name, primaries, whitePoint, function_0, id) {
    return Rgb_init_$Init$(name, primaries, whitePoint, function_0, id, Object.create(Rgb.prototype));
  }
  function Rgb_init_$Init$_0(name, primaries, whitePoint, gamma, min, max, id, $this) {
    var tmp;
    if (gamma === 1.0) {
      tmp = Companion_getInstance_34().w3j_1;
    } else {
      tmp = Rgb$_init_$lambda_yyl4se_3(gamma);
    }
    var tmp_0 = tmp;
    var tmp_1;
    if (gamma === 1.0) {
      tmp_1 = Companion_getInstance_34().w3j_1;
    } else {
      tmp_1 = Rgb$_init_$lambda_yyl4se_4(gamma);
    }
    var tmp_2 = tmp_1;
    Rgb.call($this, name, primaries, whitePoint, null, tmp_0, tmp_2, min, max, TransferParameters_init_$Create$(gamma, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 96, null), id);
    return $this;
  }
  function Rgb_init_$Create$_0(name, primaries, whitePoint, gamma, min, max, id) {
    return Rgb_init_$Init$_0(name, primaries, whitePoint, gamma, min, max, id, Object.create(Rgb.prototype));
  }
  function Rgb_init_$Init$_1(colorSpace, transform, whitePoint, $this) {
    Companion_getInstance_29();
    Rgb.call($this, colorSpace.b3a_1, colorSpace.o3b_1, whitePoint, transform, colorSpace.r3b_1, colorSpace.t3b_1, colorSpace.l3b_1, colorSpace.m3b_1, colorSpace.n3b_1, -1);
    return $this;
  }
  function Rgb_init_$Create$_1(colorSpace, transform, whitePoint) {
    return Rgb_init_$Init$_1(colorSpace, transform, whitePoint, Object.create(Rgb.prototype));
  }
  function Companion_22() {
    Companion_instance_22 = this;
    var tmp = this;
    tmp.w3j_1 = Rgb$Companion$DoubleIdentity$lambda;
  }
  Companion_22.$metadata$ = objectMeta('Companion');
  var Companion_instance_22;
  function Companion_getInstance_34() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function Rgb$oetf$lambda(this$0) {
    return function (x) {
      return coerceIn_0(this$0.r3b_1(x), this$0.l3b_1, this$0.m3b_1);
    };
  }
  function Rgb$eotf$lambda(this$0) {
    return function (x) {
      return this$0.t3b_1(coerceIn_0(x, this$0.l3b_1, this$0.m3b_1));
    };
  }
  function Rgb$_init_$lambda_yyl4se($function) {
    return function (x) {
      return rcpResponse(x, $function.q3j_1, $function.r3j_1, $function.s3j_1, $function.t3j_1, $function.p3j_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_0($function) {
    return function (x) {
      return rcpResponse_0(x, $function.q3j_1, $function.r3j_1, $function.s3j_1, $function.t3j_1, $function.u3j_1, $function.v3j_1, $function.p3j_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_1($function) {
    return function (x) {
      return response(x, $function.q3j_1, $function.r3j_1, $function.s3j_1, $function.t3j_1, $function.p3j_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_2($function) {
    return function (x) {
      return response_0(x, $function.q3j_1, $function.r3j_1, $function.s3j_1, $function.t3j_1, $function.u3j_1, $function.v3j_1, $function.p3j_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_3($gamma) {
    return function (x) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = x < 0.0 ? 0.0 : x;
      var tmp1_pow = 1.0 / $gamma;
      tmp$ret$0 = Math.pow(tmp0_pow, tmp1_pow);
      return tmp$ret$0;
    };
  }
  function Rgb$_init_$lambda_yyl4se_4($gamma) {
    return function (x) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = x < 0.0 ? 0.0 : x;
      tmp$ret$0 = Math.pow(tmp0_pow, $gamma);
      return tmp$ret$0;
    };
  }
  function Rgb(name, primaries, whitePoint, transform, oetf, eotf, min, max, transferParameters, id) {
    Companion_getInstance_34();
    ColorSpace.call(this, name, Companion_getInstance_28().d3b_1, id);
    this.k3b_1 = whitePoint;
    this.l3b_1 = min;
    this.m3b_1 = max;
    this.n3b_1 = transferParameters;
    this.r3b_1 = oetf;
    var tmp = this;
    tmp.s3b_1 = Rgb$oetf$lambda(this);
    this.t3b_1 = eotf;
    var tmp_0 = this;
    tmp_0.u3b_1 = Rgb$eotf$lambda(this);
    if (!(primaries.length === 6) ? !(primaries.length === 9) : false) {
      throw IllegalArgumentException_init_$Create$("The color space's primaries must be defined as an array of 6 floats in xyY or 9 floats in XYZ");
    }
    if (this.l3b_1 >= this.m3b_1) {
      throw IllegalArgumentException_init_$Create$('Invalid range: min=' + this.l3b_1 + ', max=' + this.m3b_1 + '; min must ' + 'be strictly < max');
    }
    this.o3b_1 = xyPrimaries(Companion_getInstance_34(), primaries);
    if (transform == null) {
      this.p3b_1 = computeXYZMatrix(Companion_getInstance_34(), this.o3b_1, this.k3b_1);
    } else {
      if (!(transform.length === 9)) {
        throw IllegalArgumentException_init_$Create$('Transform must have 9 entries! Has ' + ('' + transform.length));
      }
      this.p3b_1 = transform;
    }
    this.q3b_1 = inverse3x3(this.p3b_1);
    this.v3b_1 = isWideGamut(Companion_getInstance_34(), this.o3b_1, this.l3b_1, this.m3b_1);
    this.w3b_1 = isSrgb(Companion_getInstance_34(), this.o3b_1, this.k3b_1, oetf, eotf, this.l3b_1, this.m3b_1, id);
  }
  Rgb.prototype.z3a = function () {
    return this.w3b_1;
  };
  Rgb.prototype.a3b = function (component) {
    return this.l3b_1;
  };
  Rgb.prototype.b3b = function (component) {
    return this.m3b_1;
  };
  Rgb.prototype.r3h = function (v) {
    v[0] = this.u3b_1(v[0]);
    v[1] = this.u3b_1(v[1]);
    v[2] = this.u3b_1(v[2]);
    return mul3x3Float3(this.p3b_1, v);
  };
  Rgb.prototype.s3h = function (v) {
    mul3x3Float3(this.q3b_1, v);
    v[0] = this.s3b_1(v[0]);
    v[1] = this.s3b_1(v[1]);
    v[2] = this.s3b_1(v[2]);
    return v;
  };
  Rgb.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!ColorSpace.prototype.equals.call(this, other))
      return false;
    var rgb = other instanceof Rgb ? other : THROW_CCE();
    if (!(compareTo(rgb.l3b_1, this.l3b_1) === 0))
      return false;
    if (!(compareTo(rgb.m3b_1, this.m3b_1) === 0))
      return false;
    if (!this.k3b_1.equals(rgb.k3b_1))
      return false;
    if (!contentEquals(this.o3b_1, rgb.o3b_1))
      return false;
    if (!(this.n3b_1 == null)) {
      return equals(this.n3b_1, rgb.n3b_1);
    } else if (rgb.n3b_1 == null) {
      return true;
    }
    return !equals(this.r3b_1, rgb.r3b_1) ? false : equals(this.t3b_1, rgb.t3b_1);
  };
  Rgb.prototype.hashCode = function () {
    var result = ColorSpace.prototype.hashCode.call(this);
    result = imul(31, result) + this.k3b_1.hashCode() | 0;
    result = imul(31, result) + contentHashCode(this.o3b_1) | 0;
    result = imul(31, result) + (!(this.l3b_1 === 0.0) ? toBits(this.l3b_1) : 0) | 0;
    result = imul(31, result) + (!(this.m3b_1 === 0.0) ? toBits(this.m3b_1) : 0) | 0;
    result = imul(31, result) + (!(this.n3b_1 == null) ? this.n3b_1.hashCode() : 0) | 0;
    if (this.n3b_1 == null) {
      result = imul(31, result) + hashCode(this.r3b_1) | 0;
      result = imul(31, result) + hashCode(this.t3b_1) | 0;
    }
    return result;
  };
  Rgb.$metadata$ = classMeta('Rgb', undefined, undefined, undefined, undefined, ColorSpace.prototype);
  function TransferParameters_init_$Init$(gamma, a, b, c, d, e, f, $mask0, $marker, $this) {
    if (!(($mask0 & 32) === 0))
      e = 0.0;
    if (!(($mask0 & 64) === 0))
      f = 0.0;
    TransferParameters.call($this, gamma, a, b, c, d, e, f);
    return $this;
  }
  function TransferParameters_init_$Create$(gamma, a, b, c, d, e, f, $mask0, $marker) {
    return TransferParameters_init_$Init$(gamma, a, b, c, d, e, f, $mask0, $marker, Object.create(TransferParameters.prototype));
  }
  function TransferParameters(gamma, a, b, c, d, e, f) {
    this.p3j_1 = gamma;
    this.q3j_1 = a;
    this.r3j_1 = b;
    this.s3j_1 = c;
    this.t3j_1 = d;
    this.u3j_1 = e;
    this.v3j_1 = f;
    if ((((((isNaN_0(this.q3j_1) ? true : isNaN_0(this.r3j_1)) ? true : isNaN_0(this.s3j_1)) ? true : isNaN_0(this.t3j_1)) ? true : isNaN_0(this.u3j_1)) ? true : isNaN_0(this.v3j_1)) ? true : isNaN_0(this.p3j_1)) {
      throw IllegalArgumentException_init_$Create$('Parameters cannot be NaN');
    }
    if (!(this.t3j_1 >= 0.0 ? this.t3j_1 <= 1.0 : false)) {
      throw IllegalArgumentException_init_$Create$('Parameter d must be in the range [0..1], was ' + ('' + this.t3j_1));
    }
    if (this.t3j_1 === 0.0 ? this.q3j_1 === 0.0 ? true : this.p3j_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, the transfer function is constant');
    }
    if (this.t3j_1 >= 1.0 ? this.s3j_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter c is zero, the transfer function is constant');
    }
    if ((this.q3j_1 === 0.0 ? true : this.p3j_1 === 0.0) ? this.s3j_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, and c is zero, the transfer function is constant');
    }
    if (this.s3j_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be increasing');
    }
    if (this.q3j_1 < 0.0 ? true : this.p3j_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be positive or increasing');
    }
  }
  TransferParameters.prototype.toString = function () {
    return 'TransferParameters(gamma=' + this.p3j_1 + ', a=' + this.q3j_1 + ', b=' + this.r3j_1 + ', c=' + this.s3j_1 + ', d=' + this.t3j_1 + ', e=' + this.u3j_1 + ', f=' + this.v3j_1 + ')';
  };
  TransferParameters.prototype.hashCode = function () {
    var result = getNumberHashCode(this.p3j_1);
    result = imul(result, 31) + getNumberHashCode(this.q3j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.r3j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s3j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.t3j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.u3j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v3j_1) | 0;
    return result;
  };
  TransferParameters.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransferParameters))
      return false;
    var tmp0_other_with_cast = other instanceof TransferParameters ? other : THROW_CCE();
    if (!equals(this.p3j_1, tmp0_other_with_cast.p3j_1))
      return false;
    if (!equals(this.q3j_1, tmp0_other_with_cast.q3j_1))
      return false;
    if (!equals(this.r3j_1, tmp0_other_with_cast.r3j_1))
      return false;
    if (!equals(this.s3j_1, tmp0_other_with_cast.s3j_1))
      return false;
    if (!equals(this.t3j_1, tmp0_other_with_cast.t3j_1))
      return false;
    if (!equals(this.u3j_1, tmp0_other_with_cast.u3j_1))
      return false;
    if (!equals(this.v3j_1, tmp0_other_with_cast.v3j_1))
      return false;
    return true;
  };
  TransferParameters.$metadata$ = classMeta('TransferParameters');
  function WhitePoint(x, y) {
    this.y3h_1 = x;
    this.z3h_1 = y;
  }
  WhitePoint.prototype.a3i = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp0_floatArrayOf = new Float32Array([this.y3h_1 / this.z3h_1, 1.0, (1.0 - this.y3h_1 - this.z3h_1) / this.z3h_1]);
    tmp$ret$0 = tmp0_floatArrayOf;
    return tmp$ret$0;
  };
  WhitePoint.prototype.toString = function () {
    return 'WhitePoint(x=' + this.y3h_1 + ', y=' + this.z3h_1 + ')';
  };
  WhitePoint.prototype.hashCode = function () {
    var result = getNumberHashCode(this.y3h_1);
    result = imul(result, 31) + getNumberHashCode(this.z3h_1) | 0;
    return result;
  };
  WhitePoint.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WhitePoint))
      return false;
    var tmp0_other_with_cast = other instanceof WhitePoint ? other : THROW_CCE();
    if (!equals(this.y3h_1, tmp0_other_with_cast.y3h_1))
      return false;
    if (!equals(this.z3h_1, tmp0_other_with_cast.z3h_1))
      return false;
    return true;
  };
  WhitePoint.$metadata$ = classMeta('WhitePoint');
  function clamp($this, x) {
    return coerceIn(x, -2.0, 2.0);
  }
  function Xyz(name, id) {
    ColorSpace.call(this, name, Companion_getInstance_28().e3b_1, id);
  }
  Xyz.prototype.a3b = function (component) {
    return -2.0;
  };
  Xyz.prototype.b3b = function (component) {
    return 2.0;
  };
  Xyz.prototype.r3h = function (v) {
    v[0] = clamp(this, v[0]);
    v[1] = clamp(this, v[1]);
    v[2] = clamp(this, v[2]);
    return v;
  };
  Xyz.prototype.s3h = function (v) {
    v[0] = clamp(this, v[0]);
    v[1] = clamp(this, v[1]);
    v[2] = clamp(this, v[2]);
    return v;
  };
  Xyz.$metadata$ = classMeta('Xyz', undefined, undefined, undefined, undefined, ColorSpace.prototype);
  function get_DefaultDensity() {
    init_properties_CanvasDrawScope_kt_hh6bzw();
    return DefaultDensity;
  }
  var DefaultDensity;
  function DrawParams_init_$Init$(density, layoutDirection, canvas, size, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      density = get_DefaultDensity();
    if (!(($mask0 & 2) === 0))
      layoutDirection = LayoutDirection_Ltr_getInstance();
    if (!(($mask0 & 4) === 0))
      canvas = new EmptyCanvas();
    if (!(($mask0 & 8) === 0))
      size = Companion_getInstance().o2j_1;
    DrawParams.call($this, density, layoutDirection, canvas, size);
    return $this;
  }
  function DrawParams_init_$Create$(density, layoutDirection, canvas, size, $mask0, $marker) {
    return DrawParams_init_$Init$(density, layoutDirection, canvas, size, $mask0, $marker, Object.create(DrawParams.prototype));
  }
  function obtainFillPaint($this) {
    var tmp0_elvis_lhs = $this.c3k_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Paint_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainFillPaint.<anonymous>' call
      tmp0_apply.x3e(Companion_getInstance_20().k3f_1);
      tmp$ret$0 = tmp0_apply;
      var tmp1_also = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainFillPaint.<anonymous>' call
      $this.c3k_1 = tmp1_also;
      tmp$ret$1 = tmp1_also;
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function obtainStrokePaint($this) {
    var tmp0_elvis_lhs = $this.d3k_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Paint_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainStrokePaint.<anonymous>' call
      tmp0_apply.x3e(Companion_getInstance_20().l3f_1);
      tmp$ret$0 = tmp0_apply;
      var tmp1_also = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainStrokePaint.<anonymous>' call
      $this.d3k_1 = tmp1_also;
      tmp$ret$1 = tmp1_also;
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function selectPaint($this, drawStyle) {
    var tmp0_subject = drawStyle;
    var tmp;
    if (equals(tmp0_subject, Fill_getInstance())) {
      tmp = obtainFillPaint($this);
    } else {
      if (tmp0_subject instanceof Stroke) {
        var tmp$ret$0;
        // Inline function 'kotlin.apply' call
        var tmp0_apply = obtainStrokePaint($this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.selectPaint.<anonymous>' call
        if (!(tmp0_apply.t2t() === drawStyle.e3k_1)) {
          tmp0_apply.s2t(drawStyle.e3k_1);
        }
        if (!(tmp0_apply.z3e() === drawStyle.g3k_1)) {
          tmp0_apply.y3e(drawStyle.g3k_1);
        }
        if (!(tmp0_apply.d3f() === drawStyle.f3k_1)) {
          tmp0_apply.c3f(drawStyle.f3k_1);
        }
        if (!(tmp0_apply.b3f() === drawStyle.h3k_1)) {
          tmp0_apply.a3f(drawStyle.h3k_1);
        }
        if (!equals(tmp0_apply.j3f(), drawStyle.i3k_1)) {
          tmp0_apply.i3f(drawStyle.i3k_1);
        }
        tmp$ret$0 = tmp0_apply;
        tmp = tmp$ret$0;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = selectPaint($this, style);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configurePaint.<anonymous>' call
    if (!(brush == null)) {
      brush.u37($this.j3k(), tmp0_apply, alpha);
    } else if (!(tmp0_apply.c36() === alpha)) {
      tmp0_apply.x37(alpha);
    }
    if (!equals(tmp0_apply.h3f(), colorFilter)) {
      tmp0_apply.g3f(colorFilter);
    }
    if (!(tmp0_apply.w3e() === blendMode)) {
      tmp0_apply.v3e(blendMode);
    }
    if (!(tmp0_apply.f3f() === filterQuality)) {
      tmp0_apply.e3f(filterQuality);
    }
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function configurePaint$default($this, brush, style, alpha, colorFilter, blendMode, filterQuality, $mask0, $handler) {
    if (!(($mask0 & 64) === 0))
      filterQuality = Companion_getInstance_35().p3e_1;
    return configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = selectPaint($this, style);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configurePaint.<anonymous>' call
    var targetColor = modulate(color, $this, alpha);
    if (!equals(tmp0_apply.u3e(), targetColor)) {
      tmp0_apply.y37(targetColor);
    }
    if (!(tmp0_apply.z37() == null)) {
      tmp0_apply.x2t(null);
    }
    if (!equals(tmp0_apply.h3f(), colorFilter)) {
      tmp0_apply.g3f(colorFilter);
    }
    if (!(tmp0_apply.w3e() === blendMode)) {
      tmp0_apply.v3e(blendMode);
    }
    if (!(tmp0_apply.f3f() === filterQuality)) {
      tmp0_apply.e3f(filterQuality);
    }
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function configurePaint$default_0($this, color, style, alpha, colorFilter, blendMode, filterQuality, $mask0, $handler) {
    if (!(($mask0 & 64) === 0))
      filterQuality = Companion_getInstance_35().p3e_1;
    return configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function configureStrokePaint($this, color, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = obtainStrokePaint($this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configureStrokePaint.<anonymous>' call
    var targetColor = modulate(color, $this, alpha);
    if (!equals(tmp0_apply.u3e(), targetColor)) {
      tmp0_apply.y37(targetColor);
    }
    if (!(tmp0_apply.z37() == null)) {
      tmp0_apply.x2t(null);
    }
    if (!equals(tmp0_apply.h3f(), colorFilter)) {
      tmp0_apply.g3f(colorFilter);
    }
    if (!(tmp0_apply.w3e() === blendMode)) {
      tmp0_apply.v3e(blendMode);
    }
    if (!(tmp0_apply.t2t() === strokeWidth)) {
      tmp0_apply.s2t(strokeWidth);
    }
    if (!(tmp0_apply.d3f() === miter)) {
      tmp0_apply.c3f(miter);
    }
    if (!(tmp0_apply.z3e() === cap)) {
      tmp0_apply.y3e(cap);
    }
    if (!(tmp0_apply.b3f() === join)) {
      tmp0_apply.a3f(join);
    }
    if (!equals(tmp0_apply.j3f(), pathEffect)) {
      tmp0_apply.i3f(pathEffect);
    }
    if (!(tmp0_apply.f3f() === filterQuality)) {
      tmp0_apply.e3f(filterQuality);
    }
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function configureStrokePaint$default($this, color, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality, $mask0, $handler) {
    if (!(($mask0 & 1024) === 0))
      filterQuality = Companion_getInstance_35().p3e_1;
    return configureStrokePaint($this, color, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality);
  }
  function modulate(_this__u8e3s4, $this, alpha) {
    var tmp;
    if (!(alpha === 1.0)) {
      var tmp_0 = _Color___get_alpha__impl__wcfyv1(_this__u8e3s4) * alpha;
      tmp = Color__copy$default_impl_ectz3s(_this__u8e3s4, tmp_0, 0.0, 0.0, 0.0, 14, null);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function DrawParams(density, layoutDirection, canvas, size) {
    this.k3k_1 = density;
    this.l3k_1 = layoutDirection;
    this.m3k_1 = canvas;
    this.n3k_1 = size;
  }
  DrawParams.prototype.o3k = function (_set____db54di) {
    this.k3k_1 = _set____db54di;
  };
  DrawParams.prototype.p3k = function (_set____db54di) {
    this.l3k_1 = _set____db54di;
  };
  DrawParams.prototype.q3k = function (_set____db54di) {
    this.m3k_1 = _set____db54di;
  };
  DrawParams.prototype.r3k = function (_set____db54di) {
    this.n3k_1 = _set____db54di;
  };
  DrawParams.prototype.z3 = function () {
    return this.k3k_1;
  };
  DrawParams.prototype.a4 = function () {
    return this.l3k_1;
  };
  DrawParams.prototype.s3k = function () {
    return this.m3k_1;
  };
  DrawParams.prototype.t3k = function () {
    return this.n3k_1;
  };
  DrawParams.prototype.toString = function () {
    return 'DrawParams(density=' + this.k3k_1 + ', layoutDirection=' + this.l3k_1 + ', canvas=' + this.m3k_1 + ', size=' + new Size_0(this.n3k_1) + ')';
  };
  DrawParams.prototype.hashCode = function () {
    var result = hashCode(this.k3k_1);
    result = imul(result, 31) + this.l3k_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.m3k_1) | 0;
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.n3k_1) | 0;
    return result;
  };
  DrawParams.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DrawParams))
      return false;
    var tmp0_other_with_cast = other instanceof DrawParams ? other : THROW_CCE();
    if (!equals(this.k3k_1, tmp0_other_with_cast.k3k_1))
      return false;
    if (!this.l3k_1.equals(tmp0_other_with_cast.l3k_1))
      return false;
    if (!equals(this.m3k_1, tmp0_other_with_cast.m3k_1))
      return false;
    if (!equals(this.n3k_1, tmp0_other_with_cast.n3k_1))
      return false;
    return true;
  };
  DrawParams.$metadata$ = classMeta('DrawParams');
  function CanvasDrawScope$drawContext$1(this$0) {
    this.v3k_1 = this$0;
    this.u3k_1 = asDrawTransform(this);
  }
  CanvasDrawScope$drawContext$1.prototype.u2w = function () {
    return this.v3k_1.a3k_1.m3k_1;
  };
  CanvasDrawScope$drawContext$1.prototype.r3k = function (value) {
    this.v3k_1.a3k_1.n3k_1 = value;
  };
  CanvasDrawScope$drawContext$1.prototype.j3k = function () {
    return this.v3k_1.a3k_1.n3k_1;
  };
  CanvasDrawScope$drawContext$1.prototype.w3k = function () {
    return this.u3k_1;
  };
  CanvasDrawScope$drawContext$1.$metadata$ = classMeta(undefined, [DrawContext]);
  function CanvasDrawScope() {
    var tmp = this;
    tmp.a3k_1 = DrawParams_init_$Create$(null, null, null, null, 15, null);
    var tmp_0 = this;
    tmp_0.b3k_1 = new CanvasDrawScope$drawContext$1(this);
    this.c3k_1 = null;
    this.d3k_1 = null;
  }
  CanvasDrawScope.prototype.x3k = function () {
    return this.a3k_1;
  };
  CanvasDrawScope.prototype.y3k = function () {
    return this.a3k_1.l3k_1;
  };
  CanvasDrawScope.prototype.m2k = function () {
    return this.a3k_1.k3k_1.m2k();
  };
  CanvasDrawScope.prototype.n2k = function () {
    return this.a3k_1.k3k_1.n2k();
  };
  CanvasDrawScope.prototype.z3k = function () {
    return this.b3k_1;
  };
  CanvasDrawScope.prototype.a3l = function (color, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    var tmp = this.a3k_1.m3k_1;
    Companion_getInstance_36();
    var tmp_0 = Companion_getInstance_26().e3h_1;
    return tmp.n38(start, end, configureStrokePaint$default(this, color, strokeWidth, 4.0, cap, tmp_0, pathEffect, alpha, colorFilter, blendMode, null, 1024, null));
  };
  CanvasDrawScope.prototype.s3e = function (brush, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.a3k_1.m3k_1;
    var tmp_0 = _Offset___get_x__impl__xvi35n(topLeft);
    var tmp_1 = _Offset___get_y__impl__8bzhra(topLeft);
    var tmp_2 = _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size);
    var tmp_3 = _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size);
    return tmp.p38(tmp_0, tmp_1, tmp_2, tmp_3, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.n3e = function (color, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.a3k_1.m3k_1;
    var tmp_0 = _Offset___get_x__impl__xvi35n(topLeft);
    var tmp_1 = _Offset___get_y__impl__8bzhra(topLeft);
    var tmp_2 = _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size);
    var tmp_3 = _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size);
    return tmp.p38(tmp_0, tmp_1, tmp_2, tmp_3, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.e3l = function (image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    return this.a3k_1.m3k_1.u38(image, srcOffset, srcSize, dstOffset, dstSize, configurePaint(this, null, style, alpha, colorFilter, blendMode, filterQuality));
  };
  CanvasDrawScope.prototype.r3e = function (brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode) {
    var tmp = this.a3k_1.m3k_1;
    var tmp_0 = _Offset___get_x__impl__xvi35n(topLeft);
    var tmp_1 = _Offset___get_y__impl__8bzhra(topLeft);
    var tmp_2 = _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size);
    var tmp_3 = _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size);
    var tmp_4 = _CornerRadius___get_x__impl__1594cn(cornerRadius);
    var tmp_5 = _CornerRadius___get_y__impl__tyvleu(cornerRadius);
    return tmp.q38(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.m3e = function (color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode) {
    var tmp = this.a3k_1.m3k_1;
    var tmp_0 = _Offset___get_x__impl__xvi35n(topLeft);
    var tmp_1 = _Offset___get_y__impl__8bzhra(topLeft);
    var tmp_2 = _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size);
    var tmp_3 = _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size);
    var tmp_4 = _CornerRadius___get_x__impl__1594cn(cornerRadius);
    var tmp_5 = _CornerRadius___get_y__impl__tyvleu(cornerRadius);
    return tmp.q38(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.h3l = function (color, radius, center, alpha, style, colorFilter, blendMode) {
    var tmp = this.a3k_1.m3k_1;
    return tmp.r38(center, radius, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.j3l = function (color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.a3k_1.m3k_1;
    var tmp_0 = _Offset___get_x__impl__xvi35n(topLeft);
    var tmp_1 = _Offset___get_y__impl__8bzhra(topLeft);
    var tmp_2 = _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size);
    var tmp_3 = _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size);
    return tmp.s38(tmp_0, tmp_1, tmp_2, tmp_3, startAngle, sweepAngle, useCenter, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.l3e = function (path, color, alpha, style, colorFilter, blendMode) {
    var tmp = this.a3k_1.m3k_1;
    return tmp.t38(path, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.q3e = function (path, brush, alpha, style, colorFilter, blendMode) {
    var tmp = this.a3k_1.m3k_1;
    return tmp.t38(path, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.n3l = function (points, pointMode, color, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    var tmp = this.a3k_1.m3k_1;
    Companion_getInstance_36();
    var tmp_0 = Companion_getInstance_26().e3h_1;
    return tmp.v38(pointMode, points, configureStrokePaint$default(this, color, strokeWidth, 4.0, cap, tmp_0, pathEffect, alpha, colorFilter, blendMode, null, 1024, null));
  };
  CanvasDrawScope.prototype.p3l = function (density, layoutDirection, canvas, size, block) {
    var tmp0_container = this.a3k_1;
    var prevDensity = tmp0_container.z3();
    var prevLayoutDirection = tmp0_container.a4();
    var prevCanvas = tmp0_container.s3k();
    var prevSize = tmp0_container.t3k();
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.a3k_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    tmp0_apply.k3k_1 = density;
    tmp0_apply.l3k_1 = layoutDirection;
    tmp0_apply.m3k_1 = canvas;
    tmp0_apply.n3k_1 = size;
    tmp$ret$0 = tmp0_apply;
    canvas.a38();
    block(this);
    canvas.b38();
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp1_apply = this.a3k_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    tmp1_apply.k3k_1 = prevDensity;
    tmp1_apply.l3k_1 = prevLayoutDirection;
    tmp1_apply.m3k_1 = prevCanvas;
    tmp1_apply.n3k_1 = prevSize;
    tmp$ret$1 = tmp1_apply;
  };
  CanvasDrawScope.$metadata$ = classMeta('CanvasDrawScope', [DrawScope]);
  function asDrawTransform(_this__u8e3s4) {
    init_properties_CanvasDrawScope_kt_hh6bzw();
    return new asDrawTransform$1(_this__u8e3s4);
  }
  function asDrawTransform$1($this_asDrawTransform) {
    this.r3l_1 = $this_asDrawTransform;
  }
  asDrawTransform$1.prototype.j3k = function () {
    return this.r3l_1.j3k();
  };
  asDrawTransform$1.prototype.s3l = function (left, top, right, bottom) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.r3l_1.u2w();
    // Inline function 'kotlin.contracts.contract' call
    var updatedSize = Size(_Size___get_width__impl__58y75t(this.j3k()) - (left + right), _Size___get_height__impl__a04p02(this.j3k()) - (top + bottom));
    // Inline function 'kotlin.require' call
    var tmp0_require = _Size___get_width__impl__58y75t(updatedSize) >= 0 ? _Size___get_height__impl__a04p02(updatedSize) >= 0 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.drawscope.<no name provided>.inset.<anonymous>.<anonymous>' call
      tmp$ret$0 = 'Width and height must be greater than or equal to zero';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.r3l_1.r3k(updatedSize);
    tmp0_let.d38(left, top);
    tmp$ret$1 = Unit_getInstance();
  };
  asDrawTransform$1.prototype.h38 = function (left, top, right, bottom, clipOp) {
    this.r3l_1.u2w().h38(left, top, right, bottom, clipOp);
  };
  asDrawTransform$1.prototype.l38 = function (path, clipOp) {
    this.r3l_1.u2w().l38(path, clipOp);
  };
  asDrawTransform$1.prototype.d38 = function (left, top) {
    this.r3l_1.u2w().d38(left, top);
  };
  asDrawTransform$1.prototype.t3l = function (scaleX, scaleY, pivot) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.r3l_1.u2w();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.<no name provided>.scale.<anonymous>' call
    tmp0_apply.d38(_Offset___get_x__impl__xvi35n(pivot), _Offset___get_y__impl__8bzhra(pivot));
    tmp0_apply.e38(scaleX, scaleY);
    tmp0_apply.d38(-_Offset___get_x__impl__xvi35n(pivot), -_Offset___get_y__impl__8bzhra(pivot));
    tmp$ret$0 = tmp0_apply;
  };
  asDrawTransform$1.prototype.u3l = function (matrix) {
    this.r3l_1.u2w().f38(matrix);
  };
  asDrawTransform$1.$metadata$ = classMeta(undefined, [DrawTransform]);
  var properties_initialized_CanvasDrawScope_kt_93ztlk;
  function init_properties_CanvasDrawScope_kt_hh6bzw() {
    if (properties_initialized_CanvasDrawScope_kt_93ztlk) {
    } else {
      properties_initialized_CanvasDrawScope_kt_93ztlk = true;
      DefaultDensity = Density(1.0, 1.0);
    }
  }
  function ContentDrawScope() {
  }
  ContentDrawScope.$metadata$ = interfaceMeta('ContentDrawScope', [DrawScope]);
  function DrawContext() {
  }
  DrawContext.$metadata$ = interfaceMeta('DrawContext');
  function offsetSize(_this__u8e3s4, $this, offset) {
    return Size(_Size___get_width__impl__58y75t(_this__u8e3s4) - _Offset___get_x__impl__xvi35n(offset), _Size___get_height__impl__a04p02(_this__u8e3s4) - _Offset___get_y__impl__8bzhra(offset));
  }
  function Companion_23() {
    Companion_instance_23 = this;
    this.o3e_1 = Companion_getInstance_11().r36_1;
    this.p3e_1 = Companion_getInstance_16().b3c_1;
  }
  Companion_23.$metadata$ = objectMeta('Companion');
  var Companion_instance_23;
  function Companion_getInstance_35() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function DrawScope() {
  }
  DrawScope.$metadata$ = interfaceMeta('DrawScope', [Density_0]);
  function DrawStyle() {
  }
  DrawStyle.$metadata$ = classMeta('DrawStyle');
  function drawIntoCanvas(_this__u8e3s4, block) {
    return block(_this__u8e3s4.z3k().u2w());
  }
  function Stroke_init_$Init$(width, miter, cap, join, pathEffect, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      width = 0.0;
    if (!(($mask0 & 2) === 0)) {
      Companion_getInstance_36();
      miter = 4.0;
    }
    if (!(($mask0 & 4) === 0))
      cap = Companion_getInstance_25().y3g_1;
    if (!(($mask0 & 8) === 0))
      join = Companion_getInstance_26().e3h_1;
    if (!(($mask0 & 16) === 0))
      pathEffect = null;
    Stroke.call($this, width, miter, cap, join, pathEffect);
    return $this;
  }
  function Stroke_init_$Create$(width, miter, cap, join, pathEffect, $mask0, $marker) {
    return Stroke_init_$Init$(width, miter, cap, join, pathEffect, $mask0, $marker, Object.create(Stroke.prototype));
  }
  function Companion_24() {
    Companion_instance_24 = this;
    this.w3l_1 = 0.0;
    this.x3l_1 = 4.0;
    this.y3l_1 = Companion_getInstance_25().y3g_1;
    this.z3l_1 = Companion_getInstance_26().e3h_1;
  }
  Companion_24.$metadata$ = objectMeta('Companion');
  var Companion_instance_24;
  function Companion_getInstance_36() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function Stroke(width, miter, cap, join, pathEffect) {
    Companion_getInstance_36();
    DrawStyle.call(this);
    this.e3k_1 = width;
    this.f3k_1 = miter;
    this.g3k_1 = cap;
    this.h3k_1 = join;
    this.i3k_1 = pathEffect;
  }
  Stroke.prototype.a2j = function () {
    return this.e3k_1;
  };
  Stroke.prototype.a3m = function () {
    return this.f3k_1;
  };
  Stroke.prototype.b3m = function () {
    return this.g3k_1;
  };
  Stroke.prototype.c3m = function () {
    return this.h3k_1;
  };
  Stroke.prototype.j3f = function () {
    return this.i3k_1;
  };
  Stroke.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stroke))
      return false;
    if (!(this.e3k_1 === other.e3k_1))
      return false;
    if (!(this.f3k_1 === other.f3k_1))
      return false;
    if (!(this.g3k_1 === other.g3k_1))
      return false;
    if (!(this.h3k_1 === other.h3k_1))
      return false;
    if (!equals(this.i3k_1, other.i3k_1))
      return false;
    return true;
  };
  Stroke.prototype.hashCode = function () {
    var result = getNumberHashCode(this.e3k_1);
    result = imul(31, result) + getNumberHashCode(this.f3k_1) | 0;
    result = imul(31, result) + StrokeCap__hashCode_impl_posxk8(this.g3k_1) | 0;
    result = imul(31, result) + StrokeJoin__hashCode_impl_3pyh8w(this.h3k_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.i3k_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  Stroke.prototype.toString = function () {
    return 'Stroke(width=' + this.e3k_1 + ', miter=' + this.f3k_1 + ', cap=' + new StrokeCap(this.g3k_1) + ', join=' + new StrokeJoin(this.h3k_1) + ', pathEffect=' + this.i3k_1 + ')';
  };
  Stroke.$metadata$ = classMeta('Stroke', undefined, undefined, undefined, undefined, DrawStyle.prototype);
  function Fill() {
    Fill_instance = this;
    DrawStyle.call(this);
  }
  Fill.$metadata$ = objectMeta('Fill', undefined, undefined, undefined, undefined, DrawStyle.prototype);
  var Fill_instance;
  function Fill_getInstance() {
    if (Fill_instance == null)
      new Fill();
    return Fill_instance;
  }
  function inset(_this__u8e3s4, left, top, right, bottom, block) {
    _this__u8e3s4.z3k().w3k().s3l(left, top, right, bottom);
    block(_this__u8e3s4);
    _this__u8e3s4.z3k().w3k().s3l(-left, -top, -right, -bottom);
  }
  function scale(_this__u8e3s4, scaleX, scaleY, pivot, block) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = _this__u8e3s4.z3k();
    // Inline function 'kotlin.contracts.contract' call
    var previousSize = tmp0_with.j3k();
    tmp0_with.u2w().a38();
    // Inline function 'androidx.compose.ui.graphics.drawscope.scale.<anonymous>' call
    var tmp1__anonymous__uwfjfc = tmp0_with.w3k();
    tmp1__anonymous__uwfjfc.t3l(scaleX, scaleY, pivot);
    block(_this__u8e3s4);
    tmp0_with.u2w().b38();
    tmp0_with.r3k(previousSize);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function translate(_this__u8e3s4, left, top, block) {
    _this__u8e3s4.z3k().w3k().d38(left, top);
    block(_this__u8e3s4);
    _this__u8e3s4.z3k().w3k().d38(-left, -top);
  }
  function withTransform(_this__u8e3s4, transformBlock, drawBlock) {
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = _this__u8e3s4.z3k();
    // Inline function 'kotlin.contracts.contract' call
    var previousSize = tmp0_with.j3k();
    tmp0_with.u2w().a38();
    transformBlock(tmp0_with.w3k());
    drawBlock(_this__u8e3s4);
    tmp0_with.u2w().b38();
    tmp0_with.r3k(previousSize);
    tmp$ret$0 = Unit_getInstance();
    return tmp$ret$0;
  }
  function clipRect_0(_this__u8e3s4, left, top, right, bottom, clipOp, block) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = _this__u8e3s4.z3k();
    // Inline function 'kotlin.contracts.contract' call
    var previousSize = tmp0_with.j3k();
    tmp0_with.u2w().a38();
    // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
    var tmp0__anonymous__q1qw7t = tmp0_with.w3k();
    tmp0__anonymous__q1qw7t.h38(left, top, right, bottom, clipOp);
    block(_this__u8e3s4);
    tmp0_with.u2w().b38();
    tmp0_with.r3k(previousSize);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function DrawTransform() {
  }
  DrawTransform.$metadata$ = interfaceMeta('DrawTransform');
  function EmptyCanvas() {
  }
  EmptyCanvas.prototype.a38 = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.b38 = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.c38 = function (bounds, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.d38 = function (dx, dy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.e38 = function (sx, sy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.f38 = function (matrix) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.h38 = function (left, top, right, bottom, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.l38 = function (path, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.n38 = function (p1, p2, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.p38 = function (left, top, right, bottom, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.q38 = function (left, top, right, bottom, radiusX, radiusY, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.r38 = function (center, radius, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.s38 = function (left, top, right, bottom, startAngle, sweepAngle, useCenter, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.t38 = function (path, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.u38 = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.v38 = function (pointMode, points, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.$metadata$ = classMeta('EmptyCanvas', [Canvas]);
  function obtainPaint($this) {
    var target = $this.d3m_1;
    if (target == null) {
      target = Paint_0();
      $this.d3m_1 = target;
    }
    return target;
  }
  function configureColorFilter($this, colorFilter) {
    if (!equals($this.f3m_1, colorFilter)) {
      var consumedColorFilter = $this.j3m(colorFilter);
      if (!consumedColorFilter) {
        if (colorFilter == null) {
          var tmp0_safe_receiver = $this.d3m_1;
          if (tmp0_safe_receiver == null) {
          } else {
            tmp0_safe_receiver.g3f(null);
          }
          $this.e3m_1 = false;
        } else {
          obtainPaint($this).g3f(colorFilter);
          $this.e3m_1 = true;
        }
      }
      $this.f3m_1 = colorFilter;
    }
  }
  function configureAlpha($this, alpha) {
    if (!($this.g3m_1 === alpha)) {
      var consumed = $this.k3m(alpha);
      if (!consumed) {
        if (alpha === get_DefaultAlpha()) {
          var tmp0_safe_receiver = $this.d3m_1;
          if (tmp0_safe_receiver == null) {
          } else {
            tmp0_safe_receiver.x37(alpha);
          }
          $this.e3m_1 = false;
        } else {
          obtainPaint($this).x37(alpha);
          $this.e3m_1 = true;
        }
      }
      $this.g3m_1 = alpha;
    }
  }
  function configureLayoutDirection($this, rtl) {
    if (!$this.h3m_1.equals(rtl)) {
      $this.l3m(rtl);
      $this.h3m_1 = rtl;
    }
  }
  function Painter$drawLambda$lambda(this$0) {
    return function ($this$null) {
      this$0.m3m($this$null);
      return Unit_getInstance();
    };
  }
  function Painter() {
    this.d3m_1 = null;
    this.e3m_1 = false;
    this.f3m_1 = null;
    this.g3m_1 = get_DefaultAlpha();
    this.h3m_1 = LayoutDirection_Ltr_getInstance();
    var tmp = this;
    tmp.i3m_1 = Painter$drawLambda$lambda(this);
  }
  Painter.prototype.k3m = function (alpha) {
    return false;
  };
  Painter.prototype.j3m = function (colorFilter) {
    return false;
  };
  Painter.prototype.l3m = function (layoutDirection) {
    return false;
  };
  Painter.prototype.o3m = function (_this__u8e3s4, size, alpha, colorFilter) {
    configureAlpha(this, alpha);
    configureColorFilter(this, colorFilter);
    configureLayoutDirection(this, _this__u8e3s4.y3k());
    // Inline function 'androidx.compose.ui.graphics.drawscope.inset' call
    var tmp0_inset = _Size___get_width__impl__58y75t(_this__u8e3s4.j3k()) - _Size___get_width__impl__58y75t(size);
    var tmp1_inset = _Size___get_height__impl__a04p02(_this__u8e3s4.j3k()) - _Size___get_height__impl__a04p02(size);
    _this__u8e3s4.z3k().w3k().s3l(0.0, 0.0, tmp0_inset, tmp1_inset);
    // Inline function 'androidx.compose.ui.graphics.painter.Painter.draw.<anonymous>' call
    if ((alpha > 0.0 ? _Size___get_width__impl__58y75t(size) > 0 : false) ? _Size___get_height__impl__a04p02(size) > 0 : false) {
      if (this.e3m_1) {
        var layerRect = Rect(Companion_getInstance_0().o2i_1, Size(_Size___get_width__impl__58y75t(size), _Size___get_height__impl__a04p02(size)));
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
        var tmp0__anonymous__q1qw7t = _this__u8e3s4.z3k().u2w();
        var tmp0_withSaveLayer = obtainPaint(this);
        var tmp;
        try {
          tmp0__anonymous__q1qw7t.c38(layerRect, tmp0_withSaveLayer);
          this.m3m(_this__u8e3s4);
          tmp = Unit_getInstance();
        }finally {
          tmp0__anonymous__q1qw7t.b38();
        }
        tmp$ret$0 = tmp;
      } else {
        this.m3m(_this__u8e3s4);
      }
    }
    _this__u8e3s4.z3k().w3k().s3l(-0.0, -0.0, -tmp0_inset, -tmp1_inset);
  };
  Painter.$metadata$ = classMeta('Painter');
  function addNode($this, node) {
    $this.p3m_1.a(node);
    return $this;
  }
  function PathBuilder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.p3m_1 = tmp$ret$0;
  }
  PathBuilder.prototype.q3m = function () {
    return this.p3m_1;
  };
  PathBuilder.prototype.r3m = function () {
    return addNode(this, Close_getInstance());
  };
  PathBuilder.prototype.l2u = function (x, y) {
    return addNode(this, new MoveTo(x, y));
  };
  PathBuilder.prototype.n2u = function (x, y) {
    return addNode(this, new LineTo(x, y));
  };
  PathBuilder.prototype.s3m = function (dx, dy) {
    return addNode(this, new RelativeLineTo(dx, dy));
  };
  PathBuilder.prototype.t3m = function (x) {
    return addNode(this, new HorizontalTo(x));
  };
  PathBuilder.prototype.u3m = function (dx) {
    return addNode(this, new RelativeHorizontalTo(dx));
  };
  PathBuilder.prototype.v3m = function (y) {
    return addNode(this, new VerticalTo(y));
  };
  PathBuilder.prototype.w3m = function (dy) {
    return addNode(this, new RelativeVerticalTo(dy));
  };
  PathBuilder.prototype.x3m = function (x1, y1, x2, y2, x3, y3) {
    return addNode(this, new CurveTo(x1, y1, x2, y2, x3, y3));
  };
  PathBuilder.prototype.y3m = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    return addNode(this, new RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3));
  };
  PathBuilder.prototype.z3m = function (x1, y1, x2, y2) {
    return addNode(this, new ReflectiveCurveTo(x1, y1, x2, y2));
  };
  PathBuilder.prototype.a3n = function (dx1, dy1, dx2, dy2) {
    return addNode(this, new RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2));
  };
  PathBuilder.$metadata$ = classMeta('PathBuilder');
  function PathNode_init_$Init$(isCurve, isQuad, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      isCurve = false;
    if (!(($mask0 & 2) === 0))
      isQuad = false;
    PathNode.call($this, isCurve, isQuad);
    return $this;
  }
  function Close() {
    Close_instance = this;
    PathNode_init_$Init$(false, false, 3, null, this);
  }
  Close.$metadata$ = objectMeta('Close', undefined, undefined, undefined, undefined, PathNode.prototype);
  var Close_instance;
  function Close_getInstance() {
    if (Close_instance == null)
      new Close();
    return Close_instance;
  }
  function RelativeMoveTo() {
  }
  RelativeMoveTo.$metadata$ = classMeta('RelativeMoveTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function MoveTo(x, y) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.h3n_1 = x;
    this.i3n_1 = y;
  }
  MoveTo.prototype.toString = function () {
    return 'MoveTo(x=' + this.h3n_1 + ', y=' + this.i3n_1 + ')';
  };
  MoveTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.h3n_1);
    result = imul(result, 31) + getNumberHashCode(this.i3n_1) | 0;
    return result;
  };
  MoveTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MoveTo))
      return false;
    var tmp0_other_with_cast = other instanceof MoveTo ? other : THROW_CCE();
    if (!equals(this.h3n_1, tmp0_other_with_cast.h3n_1))
      return false;
    if (!equals(this.i3n_1, tmp0_other_with_cast.i3n_1))
      return false;
    return true;
  };
  MoveTo.$metadata$ = classMeta('MoveTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function RelativeLineTo(dx, dy) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.l3n_1 = dx;
    this.m3n_1 = dy;
  }
  RelativeLineTo.prototype.toString = function () {
    return 'RelativeLineTo(dx=' + this.l3n_1 + ', dy=' + this.m3n_1 + ')';
  };
  RelativeLineTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.l3n_1);
    result = imul(result, 31) + getNumberHashCode(this.m3n_1) | 0;
    return result;
  };
  RelativeLineTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeLineTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeLineTo ? other : THROW_CCE();
    if (!equals(this.l3n_1, tmp0_other_with_cast.l3n_1))
      return false;
    if (!equals(this.m3n_1, tmp0_other_with_cast.m3n_1))
      return false;
    return true;
  };
  RelativeLineTo.$metadata$ = classMeta('RelativeLineTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function LineTo(x, y) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.p3n_1 = x;
    this.q3n_1 = y;
  }
  LineTo.prototype.toString = function () {
    return 'LineTo(x=' + this.p3n_1 + ', y=' + this.q3n_1 + ')';
  };
  LineTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.p3n_1);
    result = imul(result, 31) + getNumberHashCode(this.q3n_1) | 0;
    return result;
  };
  LineTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LineTo))
      return false;
    var tmp0_other_with_cast = other instanceof LineTo ? other : THROW_CCE();
    if (!equals(this.p3n_1, tmp0_other_with_cast.p3n_1))
      return false;
    if (!equals(this.q3n_1, tmp0_other_with_cast.q3n_1))
      return false;
    return true;
  };
  LineTo.$metadata$ = classMeta('LineTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function RelativeHorizontalTo(dx) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.t3n_1 = dx;
  }
  RelativeHorizontalTo.prototype.toString = function () {
    return 'RelativeHorizontalTo(dx=' + this.t3n_1 + ')';
  };
  RelativeHorizontalTo.prototype.hashCode = function () {
    return getNumberHashCode(this.t3n_1);
  };
  RelativeHorizontalTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeHorizontalTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeHorizontalTo ? other : THROW_CCE();
    if (!equals(this.t3n_1, tmp0_other_with_cast.t3n_1))
      return false;
    return true;
  };
  RelativeHorizontalTo.$metadata$ = classMeta('RelativeHorizontalTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function HorizontalTo(x) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.w3n_1 = x;
  }
  HorizontalTo.prototype.toString = function () {
    return 'HorizontalTo(x=' + this.w3n_1 + ')';
  };
  HorizontalTo.prototype.hashCode = function () {
    return getNumberHashCode(this.w3n_1);
  };
  HorizontalTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HorizontalTo))
      return false;
    var tmp0_other_with_cast = other instanceof HorizontalTo ? other : THROW_CCE();
    if (!equals(this.w3n_1, tmp0_other_with_cast.w3n_1))
      return false;
    return true;
  };
  HorizontalTo.$metadata$ = classMeta('HorizontalTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function RelativeVerticalTo(dy) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.z3n_1 = dy;
  }
  RelativeVerticalTo.prototype.toString = function () {
    return 'RelativeVerticalTo(dy=' + this.z3n_1 + ')';
  };
  RelativeVerticalTo.prototype.hashCode = function () {
    return getNumberHashCode(this.z3n_1);
  };
  RelativeVerticalTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeVerticalTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeVerticalTo ? other : THROW_CCE();
    if (!equals(this.z3n_1, tmp0_other_with_cast.z3n_1))
      return false;
    return true;
  };
  RelativeVerticalTo.$metadata$ = classMeta('RelativeVerticalTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function VerticalTo(y) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.c3o_1 = y;
  }
  VerticalTo.prototype.toString = function () {
    return 'VerticalTo(y=' + this.c3o_1 + ')';
  };
  VerticalTo.prototype.hashCode = function () {
    return getNumberHashCode(this.c3o_1);
  };
  VerticalTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerticalTo))
      return false;
    var tmp0_other_with_cast = other instanceof VerticalTo ? other : THROW_CCE();
    if (!equals(this.c3o_1, tmp0_other_with_cast.c3o_1))
      return false;
    return true;
  };
  VerticalTo.$metadata$ = classMeta('VerticalTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3) {
    PathNode_init_$Init$(true, false, 2, null, this);
    this.f3o_1 = dx1;
    this.g3o_1 = dy1;
    this.h3o_1 = dx2;
    this.i3o_1 = dy2;
    this.j3o_1 = dx3;
    this.k3o_1 = dy3;
  }
  RelativeCurveTo.prototype.toString = function () {
    return 'RelativeCurveTo(dx1=' + this.f3o_1 + ', dy1=' + this.g3o_1 + ', dx2=' + this.h3o_1 + ', dy2=' + this.i3o_1 + ', dx3=' + this.j3o_1 + ', dy3=' + this.k3o_1 + ')';
  };
  RelativeCurveTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.f3o_1);
    result = imul(result, 31) + getNumberHashCode(this.g3o_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.h3o_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.i3o_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.j3o_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.k3o_1) | 0;
    return result;
  };
  RelativeCurveTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeCurveTo ? other : THROW_CCE();
    if (!equals(this.f3o_1, tmp0_other_with_cast.f3o_1))
      return false;
    if (!equals(this.g3o_1, tmp0_other_with_cast.g3o_1))
      return false;
    if (!equals(this.h3o_1, tmp0_other_with_cast.h3o_1))
      return false;
    if (!equals(this.i3o_1, tmp0_other_with_cast.i3o_1))
      return false;
    if (!equals(this.j3o_1, tmp0_other_with_cast.j3o_1))
      return false;
    if (!equals(this.k3o_1, tmp0_other_with_cast.k3o_1))
      return false;
    return true;
  };
  RelativeCurveTo.$metadata$ = classMeta('RelativeCurveTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function CurveTo(x1, y1, x2, y2, x3, y3) {
    PathNode_init_$Init$(true, false, 2, null, this);
    this.n3o_1 = x1;
    this.o3o_1 = y1;
    this.p3o_1 = x2;
    this.q3o_1 = y2;
    this.r3o_1 = x3;
    this.s3o_1 = y3;
  }
  CurveTo.prototype.toString = function () {
    return 'CurveTo(x1=' + this.n3o_1 + ', y1=' + this.o3o_1 + ', x2=' + this.p3o_1 + ', y2=' + this.q3o_1 + ', x3=' + this.r3o_1 + ', y3=' + this.s3o_1 + ')';
  };
  CurveTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.n3o_1);
    result = imul(result, 31) + getNumberHashCode(this.o3o_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p3o_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.q3o_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.r3o_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s3o_1) | 0;
    return result;
  };
  CurveTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof CurveTo ? other : THROW_CCE();
    if (!equals(this.n3o_1, tmp0_other_with_cast.n3o_1))
      return false;
    if (!equals(this.o3o_1, tmp0_other_with_cast.o3o_1))
      return false;
    if (!equals(this.p3o_1, tmp0_other_with_cast.p3o_1))
      return false;
    if (!equals(this.q3o_1, tmp0_other_with_cast.q3o_1))
      return false;
    if (!equals(this.r3o_1, tmp0_other_with_cast.r3o_1))
      return false;
    if (!equals(this.s3o_1, tmp0_other_with_cast.s3o_1))
      return false;
    return true;
  };
  CurveTo.$metadata$ = classMeta('CurveTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2) {
    PathNode_init_$Init$(true, false, 2, null, this);
    this.v3o_1 = dx1;
    this.w3o_1 = dy1;
    this.x3o_1 = dx2;
    this.y3o_1 = dy2;
  }
  RelativeReflectiveCurveTo.prototype.toString = function () {
    return 'RelativeReflectiveCurveTo(dx1=' + this.v3o_1 + ', dy1=' + this.w3o_1 + ', dx2=' + this.x3o_1 + ', dy2=' + this.y3o_1 + ')';
  };
  RelativeReflectiveCurveTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.v3o_1);
    result = imul(result, 31) + getNumberHashCode(this.w3o_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x3o_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y3o_1) | 0;
    return result;
  };
  RelativeReflectiveCurveTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeReflectiveCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeReflectiveCurveTo ? other : THROW_CCE();
    if (!equals(this.v3o_1, tmp0_other_with_cast.v3o_1))
      return false;
    if (!equals(this.w3o_1, tmp0_other_with_cast.w3o_1))
      return false;
    if (!equals(this.x3o_1, tmp0_other_with_cast.x3o_1))
      return false;
    if (!equals(this.y3o_1, tmp0_other_with_cast.y3o_1))
      return false;
    return true;
  };
  RelativeReflectiveCurveTo.$metadata$ = classMeta('RelativeReflectiveCurveTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function ReflectiveCurveTo(x1, y1, x2, y2) {
    PathNode_init_$Init$(true, false, 2, null, this);
    this.b3p_1 = x1;
    this.c3p_1 = y1;
    this.d3p_1 = x2;
    this.e3p_1 = y2;
  }
  ReflectiveCurveTo.prototype.toString = function () {
    return 'ReflectiveCurveTo(x1=' + this.b3p_1 + ', y1=' + this.c3p_1 + ', x2=' + this.d3p_1 + ', y2=' + this.e3p_1 + ')';
  };
  ReflectiveCurveTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.b3p_1);
    result = imul(result, 31) + getNumberHashCode(this.c3p_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d3p_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e3p_1) | 0;
    return result;
  };
  ReflectiveCurveTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReflectiveCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof ReflectiveCurveTo ? other : THROW_CCE();
    if (!equals(this.b3p_1, tmp0_other_with_cast.b3p_1))
      return false;
    if (!equals(this.c3p_1, tmp0_other_with_cast.c3p_1))
      return false;
    if (!equals(this.d3p_1, tmp0_other_with_cast.d3p_1))
      return false;
    if (!equals(this.e3p_1, tmp0_other_with_cast.e3p_1))
      return false;
    return true;
  };
  ReflectiveCurveTo.$metadata$ = classMeta('ReflectiveCurveTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function RelativeQuadTo() {
  }
  RelativeQuadTo.$metadata$ = classMeta('RelativeQuadTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function QuadTo() {
  }
  QuadTo.$metadata$ = classMeta('QuadTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function RelativeReflectiveQuadTo() {
  }
  RelativeReflectiveQuadTo.$metadata$ = classMeta('RelativeReflectiveQuadTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function ReflectiveQuadTo() {
  }
  ReflectiveQuadTo.$metadata$ = classMeta('ReflectiveQuadTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function RelativeArcTo() {
  }
  RelativeArcTo.$metadata$ = classMeta('RelativeArcTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function ArcTo() {
  }
  ArcTo.$metadata$ = classMeta('ArcTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function PathNode(isCurve, isQuad) {
    this.b3n_1 = isCurve;
    this.c3n_1 = isQuad;
  }
  PathNode.prototype.d3n = function () {
    return this.b3n_1;
  };
  PathNode.prototype.e3n = function () {
    return this.c3n_1;
  };
  PathNode.$metadata$ = classMeta('PathNode');
  function PathPoint_init_$Init$(x, y, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      x = 0.0;
    if (!(($mask0 & 2) === 0))
      y = 0.0;
    PathPoint.call($this, x, y);
    return $this;
  }
  function PathPoint_init_$Create$(x, y, $mask0, $marker) {
    return PathPoint_init_$Init$(x, y, $mask0, $marker, Object.create(PathPoint.prototype));
  }
  function PathPoint(x, y) {
    this.f3p_1 = x;
    this.g3p_1 = y;
  }
  PathPoint.prototype.b1q = function () {
    this.f3p_1 = 0.0;
    this.g3p_1 = 0.0;
  };
  PathPoint.prototype.toString = function () {
    return 'PathPoint(x=' + this.f3p_1 + ', y=' + this.g3p_1 + ')';
  };
  PathPoint.prototype.hashCode = function () {
    var result = getNumberHashCode(this.f3p_1);
    result = imul(result, 31) + getNumberHashCode(this.g3p_1) | 0;
    return result;
  };
  PathPoint.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PathPoint))
      return false;
    var tmp0_other_with_cast = other instanceof PathPoint ? other : THROW_CCE();
    if (!equals(this.f3p_1, tmp0_other_with_cast.f3p_1))
      return false;
    if (!equals(this.g3p_1, tmp0_other_with_cast.g3p_1))
      return false;
    return true;
  };
  PathPoint.$metadata$ = classMeta('PathPoint');
  function close($this, target) {
    $this.i3p_1.f3p_1 = $this.k3p_1.f3p_1;
    $this.i3p_1.g3p_1 = $this.k3p_1.g3p_1;
    $this.j3p_1.f3p_1 = $this.k3p_1.f3p_1;
    $this.j3p_1.g3p_1 = $this.k3p_1.g3p_1;
    target.z1g();
    target.p3f($this.i3p_1.f3p_1, $this.i3p_1.g3p_1);
  }
  function relativeMoveTo(_this__u8e3s4, $this, target) {
    var tmp0_this = $this.i3p_1;
    tmp0_this.f3p_1 = tmp0_this.f3p_1 + _this__u8e3s4.o3p_1;
    var tmp1_this = $this.i3p_1;
    tmp1_this.g3p_1 = tmp1_this.g3p_1 + _this__u8e3s4.p3p_1;
    target.q3f(_this__u8e3s4.o3p_1, _this__u8e3s4.p3p_1);
    $this.k3p_1.f3p_1 = $this.i3p_1.f3p_1;
    $this.k3p_1.g3p_1 = $this.i3p_1.g3p_1;
  }
  function moveTo(_this__u8e3s4, $this, target) {
    $this.i3p_1.f3p_1 = _this__u8e3s4.h3n_1;
    $this.i3p_1.g3p_1 = _this__u8e3s4.i3n_1;
    target.p3f(_this__u8e3s4.h3n_1, _this__u8e3s4.i3n_1);
    $this.k3p_1.f3p_1 = $this.i3p_1.f3p_1;
    $this.k3p_1.g3p_1 = $this.i3p_1.g3p_1;
  }
  function relativeLineTo(_this__u8e3s4, $this, target) {
    target.s3f(_this__u8e3s4.l3n_1, _this__u8e3s4.m3n_1);
    var tmp0_this = $this.i3p_1;
    tmp0_this.f3p_1 = tmp0_this.f3p_1 + _this__u8e3s4.l3n_1;
    var tmp1_this = $this.i3p_1;
    tmp1_this.g3p_1 = tmp1_this.g3p_1 + _this__u8e3s4.m3n_1;
  }
  function lineTo(_this__u8e3s4, $this, target) {
    target.r3f(_this__u8e3s4.p3n_1, _this__u8e3s4.q3n_1);
    $this.i3p_1.f3p_1 = _this__u8e3s4.p3n_1;
    $this.i3p_1.g3p_1 = _this__u8e3s4.q3n_1;
  }
  function relativeHorizontalTo(_this__u8e3s4, $this, target) {
    target.s3f(_this__u8e3s4.t3n_1, 0.0);
    var tmp0_this = $this.i3p_1;
    tmp0_this.f3p_1 = tmp0_this.f3p_1 + _this__u8e3s4.t3n_1;
  }
  function horizontalTo(_this__u8e3s4, $this, target) {
    target.r3f(_this__u8e3s4.w3n_1, $this.i3p_1.g3p_1);
    $this.i3p_1.f3p_1 = _this__u8e3s4.w3n_1;
  }
  function relativeVerticalTo(_this__u8e3s4, $this, target) {
    target.s3f(0.0, _this__u8e3s4.z3n_1);
    var tmp0_this = $this.i3p_1;
    tmp0_this.g3p_1 = tmp0_this.g3p_1 + _this__u8e3s4.z3n_1;
  }
  function verticalTo(_this__u8e3s4, $this, target) {
    target.r3f($this.i3p_1.f3p_1, _this__u8e3s4.c3o_1);
    $this.i3p_1.g3p_1 = _this__u8e3s4.c3o_1;
  }
  function relativeCurveTo(_this__u8e3s4, $this, target) {
    target.w3f(_this__u8e3s4.f3o_1, _this__u8e3s4.g3o_1, _this__u8e3s4.h3o_1, _this__u8e3s4.i3o_1, _this__u8e3s4.j3o_1, _this__u8e3s4.k3o_1);
    $this.j3p_1.f3p_1 = $this.i3p_1.f3p_1 + _this__u8e3s4.h3o_1;
    $this.j3p_1.g3p_1 = $this.i3p_1.g3p_1 + _this__u8e3s4.i3o_1;
    var tmp0_this = $this.i3p_1;
    tmp0_this.f3p_1 = tmp0_this.f3p_1 + _this__u8e3s4.j3o_1;
    var tmp1_this = $this.i3p_1;
    tmp1_this.g3p_1 = tmp1_this.g3p_1 + _this__u8e3s4.k3o_1;
  }
  function curveTo(_this__u8e3s4, $this, target) {
    target.v3f(_this__u8e3s4.n3o_1, _this__u8e3s4.o3o_1, _this__u8e3s4.p3o_1, _this__u8e3s4.q3o_1, _this__u8e3s4.r3o_1, _this__u8e3s4.s3o_1);
    $this.j3p_1.f3p_1 = _this__u8e3s4.p3o_1;
    $this.j3p_1.g3p_1 = _this__u8e3s4.q3o_1;
    $this.i3p_1.f3p_1 = _this__u8e3s4.r3o_1;
    $this.i3p_1.g3p_1 = _this__u8e3s4.s3o_1;
  }
  function relativeReflectiveCurveTo(_this__u8e3s4, $this, prevIsCurve, target) {
    if (prevIsCurve) {
      $this.l3p_1.f3p_1 = $this.i3p_1.f3p_1 - $this.j3p_1.f3p_1;
      $this.l3p_1.g3p_1 = $this.i3p_1.g3p_1 - $this.j3p_1.g3p_1;
    } else {
      $this.l3p_1.b1q();
    }
    target.w3f($this.l3p_1.f3p_1, $this.l3p_1.g3p_1, _this__u8e3s4.v3o_1, _this__u8e3s4.w3o_1, _this__u8e3s4.x3o_1, _this__u8e3s4.y3o_1);
    $this.j3p_1.f3p_1 = $this.i3p_1.f3p_1 + _this__u8e3s4.v3o_1;
    $this.j3p_1.g3p_1 = $this.i3p_1.g3p_1 + _this__u8e3s4.w3o_1;
    var tmp0_this = $this.i3p_1;
    tmp0_this.f3p_1 = tmp0_this.f3p_1 + _this__u8e3s4.x3o_1;
    var tmp1_this = $this.i3p_1;
    tmp1_this.g3p_1 = tmp1_this.g3p_1 + _this__u8e3s4.y3o_1;
  }
  function reflectiveCurveTo(_this__u8e3s4, $this, prevIsCurve, target) {
    if (prevIsCurve) {
      $this.l3p_1.f3p_1 = 2 * $this.i3p_1.f3p_1 - $this.j3p_1.f3p_1;
      $this.l3p_1.g3p_1 = 2 * $this.i3p_1.g3p_1 - $this.j3p_1.g3p_1;
    } else {
      $this.l3p_1.f3p_1 = $this.i3p_1.f3p_1;
      $this.l3p_1.g3p_1 = $this.i3p_1.g3p_1;
    }
    target.v3f($this.l3p_1.f3p_1, $this.l3p_1.g3p_1, _this__u8e3s4.b3p_1, _this__u8e3s4.c3p_1, _this__u8e3s4.d3p_1, _this__u8e3s4.e3p_1);
    $this.j3p_1.f3p_1 = _this__u8e3s4.b3p_1;
    $this.j3p_1.g3p_1 = _this__u8e3s4.c3p_1;
    $this.i3p_1.f3p_1 = _this__u8e3s4.d3p_1;
    $this.i3p_1.g3p_1 = _this__u8e3s4.e3p_1;
  }
  function relativeQuadTo(_this__u8e3s4, $this, target) {
    target.u3f(_this__u8e3s4.s3p_1, _this__u8e3s4.t3p_1, _this__u8e3s4.u3p_1, _this__u8e3s4.v3p_1);
    $this.j3p_1.f3p_1 = $this.i3p_1.f3p_1 + _this__u8e3s4.s3p_1;
    $this.j3p_1.g3p_1 = $this.i3p_1.g3p_1 + _this__u8e3s4.t3p_1;
    var tmp0_this = $this.i3p_1;
    tmp0_this.f3p_1 = tmp0_this.f3p_1 + _this__u8e3s4.u3p_1;
    var tmp1_this = $this.i3p_1;
    tmp1_this.g3p_1 = tmp1_this.g3p_1 + _this__u8e3s4.v3p_1;
  }
  function quadTo(_this__u8e3s4, $this, target) {
    target.t3f(_this__u8e3s4.y3p_1, _this__u8e3s4.z3p_1, _this__u8e3s4.a3q_1, _this__u8e3s4.b3q_1);
    $this.j3p_1.f3p_1 = _this__u8e3s4.y3p_1;
    $this.j3p_1.g3p_1 = _this__u8e3s4.z3p_1;
    $this.i3p_1.f3p_1 = _this__u8e3s4.a3q_1;
    $this.i3p_1.g3p_1 = _this__u8e3s4.b3q_1;
  }
  function relativeReflectiveQuadTo(_this__u8e3s4, $this, prevIsQuad, target) {
    if (prevIsQuad) {
      $this.l3p_1.f3p_1 = $this.i3p_1.f3p_1 - $this.j3p_1.f3p_1;
      $this.l3p_1.g3p_1 = $this.i3p_1.g3p_1 - $this.j3p_1.g3p_1;
    } else {
      $this.l3p_1.b1q();
    }
    target.u3f($this.l3p_1.f3p_1, $this.l3p_1.g3p_1, _this__u8e3s4.e3q_1, _this__u8e3s4.f3q_1);
    $this.j3p_1.f3p_1 = $this.i3p_1.f3p_1 + $this.l3p_1.f3p_1;
    $this.j3p_1.g3p_1 = $this.i3p_1.g3p_1 + $this.l3p_1.g3p_1;
    var tmp0_this = $this.i3p_1;
    tmp0_this.f3p_1 = tmp0_this.f3p_1 + _this__u8e3s4.e3q_1;
    var tmp1_this = $this.i3p_1;
    tmp1_this.g3p_1 = tmp1_this.g3p_1 + _this__u8e3s4.f3q_1;
  }
  function reflectiveQuadTo(_this__u8e3s4, $this, prevIsQuad, target) {
    if (prevIsQuad) {
      $this.l3p_1.f3p_1 = 2 * $this.i3p_1.f3p_1 - $this.j3p_1.f3p_1;
      $this.l3p_1.g3p_1 = 2 * $this.i3p_1.g3p_1 - $this.j3p_1.g3p_1;
    } else {
      $this.l3p_1.f3p_1 = $this.i3p_1.f3p_1;
      $this.l3p_1.g3p_1 = $this.i3p_1.g3p_1;
    }
    target.t3f($this.l3p_1.f3p_1, $this.l3p_1.g3p_1, _this__u8e3s4.i3q_1, _this__u8e3s4.j3q_1);
    $this.j3p_1.f3p_1 = $this.l3p_1.f3p_1;
    $this.j3p_1.g3p_1 = $this.l3p_1.g3p_1;
    $this.i3p_1.f3p_1 = _this__u8e3s4.i3q_1;
    $this.i3p_1.g3p_1 = _this__u8e3s4.j3q_1;
  }
  function relativeArcTo(_this__u8e3s4, $this, target) {
    var arcStartX = _this__u8e3s4.r3q_1 + $this.i3p_1.f3p_1;
    var arcStartY = _this__u8e3s4.s3q_1 + $this.i3p_1.g3p_1;
    drawArc($this, target, $this.i3p_1.f3p_1, $this.i3p_1.g3p_1, arcStartX, arcStartY, _this__u8e3s4.m3q_1, _this__u8e3s4.n3q_1, _this__u8e3s4.o3q_1, _this__u8e3s4.p3q_1, _this__u8e3s4.q3q_1);
    $this.i3p_1.f3p_1 = arcStartX;
    $this.i3p_1.g3p_1 = arcStartY;
    $this.j3p_1.f3p_1 = $this.i3p_1.f3p_1;
    $this.j3p_1.g3p_1 = $this.i3p_1.g3p_1;
  }
  function arcTo(_this__u8e3s4, $this, target) {
    drawArc($this, target, $this.i3p_1.f3p_1, $this.i3p_1.g3p_1, _this__u8e3s4.a3r_1, _this__u8e3s4.b3r_1, _this__u8e3s4.v3q_1, _this__u8e3s4.w3q_1, _this__u8e3s4.x3q_1, _this__u8e3s4.y3q_1, _this__u8e3s4.z3q_1);
    $this.i3p_1.f3p_1 = _this__u8e3s4.a3r_1;
    $this.i3p_1.g3p_1 = _this__u8e3s4.b3r_1;
    $this.j3p_1.f3p_1 = $this.i3p_1.f3p_1;
    $this.j3p_1.g3p_1 = $this.i3p_1.g3p_1;
  }
  function drawArc($this, p, x0, y0, x1, y1, a, b, theta, isMoreThanHalf, isPositiveArc) {
    var thetaD = toRadians(theta, $this);
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    tmp$ret$0 = Math.cos(thetaD);
    var cosTheta = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sin' call
    tmp$ret$1 = Math.sin(thetaD);
    var sinTheta = tmp$ret$1;
    var x0p = (x0 * cosTheta + y0 * sinTheta) / a;
    var y0p = (-x0 * sinTheta + y0 * cosTheta) / b;
    var x1p = (x1 * cosTheta + y1 * sinTheta) / a;
    var y1p = (-x1 * sinTheta + y1 * cosTheta) / b;
    var dx = x0p - x1p;
    var dy = y0p - y1p;
    var xm = (x0p + x1p) / 2;
    var ym = (y0p + y1p) / 2;
    var dsq = dx * dx + dy * dy;
    if (dsq === 0.0) {
      return Unit_getInstance();
    }
    var disc = 1.0 / dsq - 0.25;
    if (disc < 0.0) {
      var tmp$ret$2;
      // Inline function 'kotlin.math.sqrt' call
      tmp$ret$2 = Math.sqrt(dsq);
      var adjust = tmp$ret$2 / 1.99999;
      drawArc($this, p, x0, y0, x1, y1, a * adjust, b * adjust, theta, isMoreThanHalf, isPositiveArc);
      return Unit_getInstance();
    }
    var tmp$ret$3;
    // Inline function 'kotlin.math.sqrt' call
    tmp$ret$3 = Math.sqrt(disc);
    var s = tmp$ret$3;
    var sdx = s * dx;
    var sdy = s * dy;
    var cx;
    var cy;
    if (isMoreThanHalf === isPositiveArc) {
      cx = xm - sdy;
      cy = ym + sdx;
    } else {
      cx = xm + sdy;
      cy = ym - sdx;
    }
    var tmp$ret$4;
    // Inline function 'kotlin.math.atan2' call
    var tmp0_atan2 = y0p - cy;
    var tmp1_atan2 = x0p - cx;
    tmp$ret$4 = Math.atan2(tmp0_atan2, tmp1_atan2);
    var eta0 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'kotlin.math.atan2' call
    var tmp2_atan2 = y1p - cy;
    var tmp3_atan2 = x1p - cx;
    tmp$ret$5 = Math.atan2(tmp2_atan2, tmp3_atan2);
    var eta1 = tmp$ret$5;
    var sweep = eta1 - eta0;
    if (!(isPositiveArc === sweep >= 0.0)) {
      if (sweep > 0.0) {
        sweep = sweep - 2 * get_PI();
      } else {
        sweep = sweep + 2 * get_PI();
      }
    }
    cx = cx * a;
    cy = cy * b;
    var tcx = cx;
    cx = cx * cosTheta - cy * sinTheta;
    cy = tcx * sinTheta + cy * cosTheta;
    arcToBezier($this, p, cx, cy, a, b, x0, y0, thetaD, eta0, sweep);
  }
  function arcToBezier($this, p, cx, cy, a, b, e1x, e1y, theta, start, sweep) {
    var eta1x = e1x;
    var eta1y = e1y;
    var tmp$ret$1;
    // Inline function 'kotlin.math.ceil' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = sweep * 4 / get_PI();
    tmp$ret$0 = Math.abs(tmp0_abs);
    var tmp1_ceil = tmp$ret$0;
    tmp$ret$1 = Math.ceil(tmp1_ceil);
    var numSegments = numberToInt(tmp$ret$1);
    var eta1 = start;
    var tmp$ret$2;
    // Inline function 'kotlin.math.cos' call
    tmp$ret$2 = Math.cos(theta);
    var cosTheta = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.math.sin' call
    tmp$ret$3 = Math.sin(theta);
    var sinTheta = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.math.cos' call
    var tmp2_cos = eta1;
    tmp$ret$4 = Math.cos(tmp2_cos);
    var cosEta1 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'kotlin.math.sin' call
    var tmp3_sin = eta1;
    tmp$ret$5 = Math.sin(tmp3_sin);
    var sinEta1 = tmp$ret$5;
    var ep1x = -a * cosTheta * sinEta1 - b * sinTheta * cosEta1;
    var ep1y = -a * sinTheta * sinEta1 + b * cosTheta * cosEta1;
    var anglePerSegment = sweep / numSegments;
    var inductionVariable = 0;
    if (inductionVariable < numSegments)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var eta2 = eta1 + anglePerSegment;
        var tmp$ret$6;
        // Inline function 'kotlin.math.sin' call
        tmp$ret$6 = Math.sin(eta2);
        var sinEta2 = tmp$ret$6;
        var tmp$ret$7;
        // Inline function 'kotlin.math.cos' call
        tmp$ret$7 = Math.cos(eta2);
        var cosEta2 = tmp$ret$7;
        var e2x = cx + a * cosTheta * cosEta2 - b * sinTheta * sinEta2;
        var e2y = cy + a * sinTheta * cosEta2 + b * cosTheta * sinEta2;
        var ep2x = -a * cosTheta * sinEta2 - b * sinTheta * cosEta2;
        var ep2y = -a * sinTheta * sinEta2 + b * cosTheta * cosEta2;
        var tmp$ret$8;
        // Inline function 'kotlin.math.tan' call
        var tmp4_tan = (eta2 - eta1) / 2;
        tmp$ret$8 = Math.tan(tmp4_tan);
        var tanDiff2 = tmp$ret$8;
        var tmp$ret$9;
        // Inline function 'kotlin.math.sin' call
        var tmp5_sin = eta2 - eta1;
        tmp$ret$9 = Math.sin(tmp5_sin);
        var tmp = tmp$ret$9;
        var tmp$ret$10;
        // Inline function 'kotlin.math.sqrt' call
        var tmp6_sqrt = 4 + 3.0 * tanDiff2 * tanDiff2;
        tmp$ret$10 = Math.sqrt(tmp6_sqrt);
        var alpha = tmp * (tmp$ret$10 - 1) / 3;
        var q1x = eta1x + alpha * ep1x;
        var q1y = eta1y + alpha * ep1y;
        var q2x = e2x - alpha * ep2x;
        var q2y = e2y - alpha * ep2y;
        p.v3f(q1x, q1y, q2x, q2y, e2x, e2y);
        eta1 = eta2;
        eta1x = e2x;
        eta1y = e2y;
        ep1x = ep2x;
        ep1y = ep2y;
      }
       while (inductionVariable < numSegments);
  }
  function toRadians(_this__u8e3s4, $this) {
    return _this__u8e3s4 / 180 * get_PI();
  }
  function PathParser() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.h3p_1 = tmp$ret$0;
    var tmp_0 = this;
    tmp_0.i3p_1 = PathPoint_init_$Create$(0.0, 0.0, 3, null);
    var tmp_1 = this;
    tmp_1.j3p_1 = PathPoint_init_$Create$(0.0, 0.0, 3, null);
    var tmp_2 = this;
    tmp_2.k3p_1 = PathPoint_init_$Create$(0.0, 0.0, 3, null);
    var tmp_3 = this;
    tmp_3.l3p_1 = PathPoint_init_$Create$(0.0, 0.0, 3, null);
  }
  PathParser.prototype.g9 = function () {
    this.h3p_1.g9();
  };
  PathParser.prototype.c3r = function (nodes) {
    this.h3p_1.l(nodes);
    return this;
  };
  PathParser.prototype.d3r = function (target) {
    target.b1q();
    this.i3p_1.b1q();
    this.j3p_1.b1q();
    this.k3p_1.b1q();
    this.l3p_1.b1q();
    var previousNode = null;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var tmp0_fastForEach = this.h3p_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.g(index);
        // Inline function 'androidx.compose.ui.graphics.vector.PathParser.toPath.<anonymous>' call
        if (previousNode == null)
          previousNode = item;
        var tmp0_subject = item;
        if (tmp0_subject instanceof Close) {
          close(this, target);
        } else {
          if (tmp0_subject instanceof RelativeMoveTo) {
            relativeMoveTo(item, this, target);
          } else {
            if (tmp0_subject instanceof MoveTo) {
              moveTo(item, this, target);
            } else {
              if (tmp0_subject instanceof RelativeLineTo) {
                relativeLineTo(item, this, target);
              } else {
                if (tmp0_subject instanceof LineTo) {
                  lineTo(item, this, target);
                } else {
                  if (tmp0_subject instanceof RelativeHorizontalTo) {
                    relativeHorizontalTo(item, this, target);
                  } else {
                    if (tmp0_subject instanceof HorizontalTo) {
                      horizontalTo(item, this, target);
                    } else {
                      if (tmp0_subject instanceof RelativeVerticalTo) {
                        relativeVerticalTo(item, this, target);
                      } else {
                        if (tmp0_subject instanceof VerticalTo) {
                          verticalTo(item, this, target);
                        } else {
                          if (tmp0_subject instanceof RelativeCurveTo) {
                            relativeCurveTo(item, this, target);
                          } else {
                            if (tmp0_subject instanceof CurveTo) {
                              curveTo(item, this, target);
                            } else {
                              if (tmp0_subject instanceof RelativeReflectiveCurveTo) {
                                relativeReflectiveCurveTo(item, this, ensureNotNull(previousNode).b3n_1, target);
                              } else {
                                if (tmp0_subject instanceof ReflectiveCurveTo) {
                                  reflectiveCurveTo(item, this, ensureNotNull(previousNode).b3n_1, target);
                                } else {
                                  if (tmp0_subject instanceof RelativeQuadTo) {
                                    relativeQuadTo(item, this, target);
                                  } else {
                                    if (tmp0_subject instanceof QuadTo) {
                                      quadTo(item, this, target);
                                    } else {
                                      if (tmp0_subject instanceof RelativeReflectiveQuadTo) {
                                        relativeReflectiveQuadTo(item, this, ensureNotNull(previousNode).c3n_1, target);
                                      } else {
                                        if (tmp0_subject instanceof ReflectiveQuadTo) {
                                          reflectiveQuadTo(item, this, ensureNotNull(previousNode).c3n_1, target);
                                        } else {
                                          if (tmp0_subject instanceof RelativeArcTo) {
                                            relativeArcTo(item, this, target);
                                          } else {
                                            if (tmp0_subject instanceof ArcTo) {
                                              arcTo(item, this, target);
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        previousNode = item;
      }
       while (inductionVariable <= last);
    return target;
  };
  PathParser.$metadata$ = classMeta('PathParser');
  function toSkia(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_11().o36_1 ? BlendMode_CLEAR_getInstance() : tmp0_subject === Companion_getInstance_11().p36_1 ? BlendMode_SRC_getInstance() : tmp0_subject === Companion_getInstance_11().q36_1 ? BlendMode_DST_getInstance() : tmp0_subject === Companion_getInstance_11().r36_1 ? BlendMode_SRC_OVER_getInstance() : tmp0_subject === Companion_getInstance_11().s36_1 ? BlendMode_DST_OVER_getInstance() : tmp0_subject === Companion_getInstance_11().t36_1 ? BlendMode_SRC_IN_getInstance() : tmp0_subject === Companion_getInstance_11().u36_1 ? BlendMode_DST_IN_getInstance() : tmp0_subject === Companion_getInstance_11().v36_1 ? BlendMode_SRC_OUT_getInstance() : tmp0_subject === Companion_getInstance_11().w36_1 ? BlendMode_DST_OUT_getInstance() : tmp0_subject === Companion_getInstance_11().x36_1 ? BlendMode_SRC_ATOP_getInstance() : tmp0_subject === Companion_getInstance_11().y36_1 ? BlendMode_DST_ATOP_getInstance() : tmp0_subject === Companion_getInstance_11().z36_1 ? BlendMode_XOR_getInstance() : tmp0_subject === Companion_getInstance_11().a37_1 ? BlendMode_PLUS_getInstance() : tmp0_subject === Companion_getInstance_11().b37_1 ? BlendMode_MODULATE_getInstance() : tmp0_subject === Companion_getInstance_11().c37_1 ? BlendMode_SCREEN_getInstance() : tmp0_subject === Companion_getInstance_11().d37_1 ? BlendMode_OVERLAY_getInstance() : tmp0_subject === Companion_getInstance_11().e37_1 ? BlendMode_DARKEN_getInstance() : tmp0_subject === Companion_getInstance_11().f37_1 ? BlendMode_LIGHTEN_getInstance() : tmp0_subject === Companion_getInstance_11().g37_1 ? BlendMode_COLOR_DODGE_getInstance() : tmp0_subject === Companion_getInstance_11().h37_1 ? BlendMode_COLOR_BURN_getInstance() : tmp0_subject === Companion_getInstance_11().i37_1 ? BlendMode_HARD_LIGHT_getInstance() : tmp0_subject === Companion_getInstance_11().j37_1 ? BlendMode_SOFT_LIGHT_getInstance() : tmp0_subject === Companion_getInstance_11().k37_1 ? BlendMode_DIFFERENCE_getInstance() : tmp0_subject === Companion_getInstance_11().l37_1 ? BlendMode_EXCLUSION_getInstance() : tmp0_subject === Companion_getInstance_11().m37_1 ? BlendMode_MULTIPLY_getInstance() : tmp0_subject === Companion_getInstance_11().n37_1 ? BlendMode_HUE_getInstance() : tmp0_subject === Companion_getInstance_11().o37_1 ? BlendMode_SATURATION_getInstance() : tmp0_subject === Companion_getInstance_11().p37_1 ? BlendMode_COLOR_getInstance() : tmp0_subject === Companion_getInstance_11().q37_1 ? BlendMode_LUMINOSITY_getInstance() : BlendMode_SRC_OVER_getInstance();
  }
  function toSkiaRect(_this__u8e3s4) {
    return Companion_getInstance_3().i2w(_this__u8e3s4.u2i_1, _this__u8e3s4.v2i_1, _this__u8e3s4.w2i_1, _this__u8e3s4.x2i_1);
  }
  function toSkiaRRect(_this__u8e3s4) {
    var radii = new Float32Array(8);
    radii[0] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.j2j_1);
    radii[1] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.j2j_1);
    radii[2] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k2j_1);
    radii[3] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.k2j_1);
    radii[4] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.l2j_1);
    radii[5] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.l2j_1);
    radii[6] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.m2j_1);
    radii[7] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.m2j_1);
    return Companion_getInstance_4().h2w(_this__u8e3s4.f2j_1, _this__u8e3s4.g2j_1, _this__u8e3s4.h2j_1, _this__u8e3s4.i2j_1, radii);
  }
  function toComposeRect(_this__u8e3s4) {
    return new Rect_0(_this__u8e3s4.p2n_1, _this__u8e3s4.q2n_1, _this__u8e3s4.r2n_1, _this__u8e3s4.s2n_1);
  }
  function asComposeCanvas(_this__u8e3s4) {
    return new SkiaBackedCanvas(_this__u8e3s4);
  }
  function get_nativeCanvas(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).e3r_1;
  }
  function _get_skia__ddpejf(_this__u8e3s4, $this) {
    return (_this__u8e3s4 instanceof SkiaBackedPaint ? _this__u8e3s4 : THROW_CCE()).f3r_1;
  }
  function drawImageRect($this, image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    var bitmap = asSkiaBitmap(image);
    var tmp$ret$1;
    // Inline function 'org.jetbrains.skia.impl.use' call
    var tmp0_use = Companion_getInstance_5().t2s(bitmap);
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.drawImageRect.<anonymous>' call
      tmp$ret$0 = $this.e3r_1.e2o(tmp0_use, Companion_getInstance_3().j2w(_Offset___get_x__impl__xvi35n(srcOffset), _Offset___get_y__impl__8bzhra(srcOffset), _Size___get_width__impl__58y75t(srcSize), _Size___get_height__impl__a04p02(srcSize)), Companion_getInstance_3().j2w(_Offset___get_x__impl__xvi35n(dstOffset), _Offset___get_y__impl__8bzhra(dstOffset), _Size___get_width__impl__58y75t(dstSize), _Size___get_height__impl__a04p02(dstSize)), toSkia_2(paint.f3f(), $this), _get_skia__ddpejf(paint, $this), true);
      tmp = tmp$ret$0;
    }finally {
      tmp0_use.z1g();
    }
    tmp$ret$1 = tmp;
  }
  function drawPoints($this, points, paint) {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = points.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = points.g(index).s2i_1;
        // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.drawPoints.<anonymous>' call
        $this.e3r_1.l2n(_Offset___get_x__impl__xvi35n(item), _Offset___get_y__impl__8bzhra(item), _get_skia__ddpejf(paint, $this));
      }
       while (inductionVariable <= last);
  }
  function drawLines($this, points, paint, stepBy) {
    if (points.f() >= 2) {
      var progression = step(until(0, points.f() - 1 | 0), stepBy);
      var inductionVariable = progression.j1_1;
      var last = progression.k1_1;
      var step_0 = progression.l1_1;
      if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + step_0 | 0;
          var p1 = points.g(i).s2i_1;
          var p2 = points.g(i + 1 | 0).s2i_1;
          $this.e3r_1.m2n(_Offset___get_x__impl__xvi35n(p1), _Offset___get_y__impl__8bzhra(p1), _Offset___get_x__impl__xvi35n(p2), _Offset___get_y__impl__8bzhra(p2), _get_skia__ddpejf(paint, $this));
        }
         while (!(i === last));
    }
  }
  function toSkia_0(_this__u8e3s4, $this) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_13().j38_1 ? ClipMode_DIFFERENCE_getInstance() : tmp0_subject === Companion_getInstance_13().k38_1 ? ClipMode_INTERSECT_getInstance() : ClipMode_INTERSECT_getInstance();
  }
  function toSkia_1(_this__u8e3s4, $this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$0 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[0];
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$1 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[4];
    var tmp_0 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[8];
    var tmp_1 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[12];
    var tmp_2 = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[1];
    var tmp_3 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[5];
    var tmp_4 = tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[9];
    var tmp_5 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[13];
    var tmp_6 = tmp$ret$7;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[2];
    var tmp_7 = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$9 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[6];
    var tmp_8 = tmp$ret$9;
    var tmp$ret$10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$10 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[10];
    var tmp_9 = tmp$ret$10;
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$11 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[14];
    var tmp_10 = tmp$ret$11;
    var tmp$ret$12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$12 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[3];
    var tmp_11 = tmp$ret$12;
    var tmp$ret$13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$13 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[7];
    var tmp_12 = tmp$ret$13;
    var tmp$ret$14;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$14 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[11];
    var tmp_13 = tmp$ret$14;
    var tmp$ret$15;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$15 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[15];
    return new Matrix44(new Float32Array([tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp$ret$15]));
  }
  function toSkia_2(_this__u8e3s4, $this) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_16().b3c_1 ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NONE_getInstance()) : tmp0_subject === Companion_getInstance_16().c3c_1 ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NEAREST_getInstance()) : tmp0_subject === Companion_getInstance_16().d3c_1 ? new CubicResampler(1 / 3.0, 1 / 3.0) : new FilterMipmap(FilterMode_NEAREST_getInstance(), MipmapMode_NONE_getInstance());
  }
  function SkiaBackedCanvas(skia) {
    this.e3r_1 = skia;
  }
  SkiaBackedCanvas.prototype.p3r = function () {
    return this.e3r_1;
  };
  SkiaBackedCanvas.prototype.a38 = function () {
    this.e3r_1.u2o();
  };
  SkiaBackedCanvas.prototype.b38 = function () {
    this.e3r_1.w2o();
  };
  SkiaBackedCanvas.prototype.c38 = function (bounds, paint) {
    this.e3r_1.v2o(bounds.u2i_1, bounds.v2i_1, bounds.w2i_1, bounds.x2i_1, _get_skia__ddpejf(paint, this));
  };
  SkiaBackedCanvas.prototype.d38 = function (dx, dy) {
    this.e3r_1.d2j(dx, dy);
  };
  SkiaBackedCanvas.prototype.e38 = function (sx, sy) {
    this.e3r_1.q2o(sx, sy);
  };
  SkiaBackedCanvas.prototype.f38 = function (matrix) {
    if (!isIdentity(matrix)) {
      this.e3r_1.s2o(toSkia_1(matrix, this));
    }
  };
  SkiaBackedCanvas.prototype.h38 = function (left, top, right, bottom, clipOp) {
    var antiAlias = true;
    this.e3r_1.k2o(Companion_getInstance_3().i2w(left, top, right, bottom), toSkia_0(clipOp, this), antiAlias);
  };
  SkiaBackedCanvas.prototype.l38 = function (path, clipOp) {
    var antiAlias = true;
    this.e3r_1.m2o(asSkiaPath(path), toSkia_0(clipOp, this), antiAlias);
  };
  SkiaBackedCanvas.prototype.n38 = function (p1, p2, paint) {
    this.e3r_1.m2n(_Offset___get_x__impl__xvi35n(p1), _Offset___get_y__impl__8bzhra(p1), _Offset___get_x__impl__xvi35n(p2), _Offset___get_y__impl__8bzhra(p2), _get_skia__ddpejf(paint, this));
  };
  SkiaBackedCanvas.prototype.p38 = function (left, top, right, bottom, paint) {
    this.e3r_1.o2n(Companion_getInstance_3().i2w(left, top, right, bottom), _get_skia__ddpejf(paint, this));
  };
  SkiaBackedCanvas.prototype.q38 = function (left, top, right, bottom, radiusX, radiusY, paint) {
    this.e3r_1.u2n(Companion_getInstance_4().g2w(left, top, right, bottom, radiusX, radiusY), _get_skia__ddpejf(paint, this));
  };
  SkiaBackedCanvas.prototype.r38 = function (center, radius, paint) {
    this.e3r_1.t2n(_Offset___get_x__impl__xvi35n(center), _Offset___get_y__impl__8bzhra(center), radius, _get_skia__ddpejf(paint, this));
  };
  SkiaBackedCanvas.prototype.s38 = function (left, top, right, bottom, startAngle, sweepAngle, useCenter, paint) {
    this.e3r_1.n2n(left, top, right, bottom, startAngle, sweepAngle, useCenter, _get_skia__ddpejf(paint, this));
  };
  SkiaBackedCanvas.prototype.t38 = function (path, paint) {
    this.e3r_1.d2o(asSkiaPath(path), _get_skia__ddpejf(paint, this));
  };
  SkiaBackedCanvas.prototype.u38 = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    drawImageRect(this, image, Offset(_IntOffset___get_x__impl__qiqr5o(srcOffset), _IntOffset___get_y__impl__2avpwj(srcOffset)), Size(_IntSize___get_width__impl__d9yl4o(srcSize), _IntSize___get_height__impl__prv63b(srcSize)), Offset(_IntOffset___get_x__impl__qiqr5o(dstOffset), _IntOffset___get_y__impl__2avpwj(dstOffset)), Size(_IntSize___get_width__impl__d9yl4o(dstSize), _IntSize___get_height__impl__prv63b(dstSize)), paint);
  };
  SkiaBackedCanvas.prototype.v38 = function (pointMode, points, paint) {
    var tmp0_subject = pointMode;
    if (tmp0_subject === Companion_getInstance_23().p3g_1) {
      drawLines(this, points, paint, 2);
    } else if (tmp0_subject === Companion_getInstance_23().q3g_1) {
      drawLines(this, points, paint, 1);
    } else if (tmp0_subject === Companion_getInstance_23().o3g_1) {
      drawPoints(this, points, paint);
    }
  };
  SkiaBackedCanvas.$metadata$ = classMeta('SkiaBackedCanvas', [Canvas]);
  function ActualCanvas(image) {
    var skiaBitmap = asSkiaBitmap(image);
    // Inline function 'kotlin.require' call
    var tmp0_require = !skiaBitmap.r2m();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.ActualCanvas.<anonymous>' call
      tmp$ret$0 = 'Cannot draw on immutable ImageBitmap';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new SkiaBackedCanvas(Canvas_init_$Create$(skiaBitmap, null, 2, null));
  }
  function Paint_0() {
    return SkiaBackedPaint_init_$Create$(null, 1, null);
  }
  function SkiaBackedPaint_init_$Init$(skia, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      skia = Paint_init_$Create$();
    SkiaBackedPaint.call($this, skia);
    return $this;
  }
  function SkiaBackedPaint_init_$Create$(skia, $mask0, $marker) {
    return SkiaBackedPaint_init_$Init$(skia, $mask0, $marker, Object.create(SkiaBackedPaint.prototype));
  }
  function toSkia_3(_this__u8e3s4, $this) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_20().k3f_1 ? PaintMode_FILL_getInstance() : tmp0_subject === Companion_getInstance_20().l3f_1 ? PaintMode_STROKE_getInstance() : PaintMode_FILL_getInstance();
  }
  function toSkia_4(_this__u8e3s4, $this) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_25().y3g_1 ? PaintStrokeCap_BUTT_getInstance() : tmp0_subject === Companion_getInstance_25().z3g_1 ? PaintStrokeCap_ROUND_getInstance() : tmp0_subject === Companion_getInstance_25().a3h_1 ? PaintStrokeCap_SQUARE_getInstance() : PaintStrokeCap_BUTT_getInstance();
  }
  function toSkia_5(_this__u8e3s4, $this) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_26().e3h_1 ? PaintStrokeJoin_MITER_getInstance() : tmp0_subject === Companion_getInstance_26().f3h_1 ? PaintStrokeJoin_ROUND_getInstance() : tmp0_subject === Companion_getInstance_26().g3h_1 ? PaintStrokeJoin_BEVEL_getInstance() : PaintStrokeJoin_MITER_getInstance();
  }
  function SkiaBackedPaint(skia) {
    this.f3r_1 = skia;
    this.g3r_1 = Companion_getInstance_11().r36_1;
    this.h3r_1 = Companion_getInstance_20().k3f_1;
    this.i3r_1 = Companion_getInstance_25().y3g_1;
    this.j3r_1 = Companion_getInstance_26().f3h_1;
    this.k3r_1 = 0.0;
    this.l3r_1 = Companion_getInstance_16().c3c_1;
    this.m3r_1 = null;
    this.n3r_1 = null;
    this.o3r_1 = null;
  }
  SkiaBackedPaint.prototype.t3e = function () {
    return this.f3r_1;
  };
  SkiaBackedPaint.prototype.x37 = function (value) {
    var tmp = Color_3(this.f3r_1.r2t());
    this.f3r_1.q2t(toArgb(Color__copy$default_impl_ectz3s(tmp, value, 0.0, 0.0, 0.0, 14, null)));
  };
  SkiaBackedPaint.prototype.c36 = function () {
    return _Color___get_alpha__impl__wcfyv1(Color_3(this.f3r_1.r2t()));
  };
  SkiaBackedPaint.prototype.y37 = function (color) {
    this.f3r_1.q2t(toArgb(color));
  };
  SkiaBackedPaint.prototype.u3e = function () {
    return Color_3(this.f3r_1.r2t());
  };
  SkiaBackedPaint.prototype.v3e = function (value) {
    this.f3r_1.z2t(toSkia(value));
    this.g3r_1 = value;
  };
  SkiaBackedPaint.prototype.w3e = function () {
    return this.g3r_1;
  };
  SkiaBackedPaint.prototype.x3e = function (value) {
    this.f3r_1.p2t(toSkia_3(value, this));
    this.h3r_1 = value;
  };
  SkiaBackedPaint.prototype.s2t = function (value) {
    this.f3r_1.s2t(value);
  };
  SkiaBackedPaint.prototype.t2t = function () {
    return this.f3r_1.t2t();
  };
  SkiaBackedPaint.prototype.y3e = function (value) {
    this.f3r_1.v2t(toSkia_4(value, this));
    this.i3r_1 = value;
  };
  SkiaBackedPaint.prototype.z3e = function () {
    return this.i3r_1;
  };
  SkiaBackedPaint.prototype.a3f = function (value) {
    this.f3r_1.w2t(toSkia_5(value, this));
    this.j3r_1 = value;
  };
  SkiaBackedPaint.prototype.b3f = function () {
    return this.j3r_1;
  };
  SkiaBackedPaint.prototype.c3f = function (value) {
    this.f3r_1.u2t(value);
    this.k3r_1 = value;
  };
  SkiaBackedPaint.prototype.d3f = function () {
    return this.k3r_1;
  };
  SkiaBackedPaint.prototype.e3f = function (_set____db54di) {
    this.l3r_1 = _set____db54di;
  };
  SkiaBackedPaint.prototype.f3f = function () {
    return this.l3r_1;
  };
  SkiaBackedPaint.prototype.x2t = function (value) {
    this.f3r_1.x2t(value);
    this.m3r_1 = value;
  };
  SkiaBackedPaint.prototype.z37 = function () {
    return this.m3r_1;
  };
  SkiaBackedPaint.prototype.g3f = function (value) {
    var tmp0_safe_receiver = value;
    this.f3r_1.y2t(tmp0_safe_receiver == null ? null : asSkiaColorFilter(tmp0_safe_receiver));
    this.n3r_1 = value;
  };
  SkiaBackedPaint.prototype.h3f = function () {
    return this.n3r_1;
  };
  SkiaBackedPaint.prototype.i3f = function (value) {
    var tmp0_safe_receiver = (value == null ? true : value instanceof SkiaBackedPathEffect) ? value : THROW_CCE();
    this.f3r_1.a2u(tmp0_safe_receiver == null ? null : asSkiaPathEffect(tmp0_safe_receiver));
    this.o3r_1 = value;
  };
  SkiaBackedPaint.prototype.j3f = function () {
    return this.o3r_1;
  };
  SkiaBackedPaint.$metadata$ = classMeta('SkiaBackedPaint', [Paint]);
  function Path_0() {
    return SkiaBackedPath_init_$Create$(null, 1, null);
  }
  function SkiaBackedPath_init_$Init$(internalPath, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      internalPath = Path_init_$Create$();
    SkiaBackedPath.call($this, internalPath);
    return $this;
  }
  function SkiaBackedPath_init_$Create$(internalPath, $mask0, $marker) {
    return SkiaBackedPath_init_$Init$(internalPath, $mask0, $marker, Object.create(SkiaBackedPath.prototype));
  }
  function toSkiaOperation(_this__u8e3s4, $this) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_22().i3g_1 ? PathOp_DIFFERENCE_getInstance() : tmp0_subject === Companion_getInstance_22().j3g_1 ? PathOp_INTERSECT_getInstance() : tmp0_subject === Companion_getInstance_22().k3g_1 ? PathOp_UNION_getInstance() : tmp0_subject === Companion_getInstance_22().l3g_1 ? PathOp_XOR_getInstance() : tmp0_subject === Companion_getInstance_22().m3g_1 ? PathOp_REVERSE_DIFFERENCE_getInstance() : PathOp_XOR_getInstance();
  }
  function SkiaBackedPath(internalPath) {
    this.q3r_1 = internalPath;
  }
  SkiaBackedPath.prototype.o3f = function (value) {
    var tmp = this.q3r_1;
    var tmp_0;
    if (value === Companion_getInstance_21().e3g_1) {
      tmp_0 = PathFillMode_EVEN_ODD_getInstance();
    } else {
      tmp_0 = PathFillMode_WINDING_getInstance();
    }
    tmp.g2u(tmp_0);
  };
  SkiaBackedPath.prototype.r3r = function () {
    if (this.q3r_1.h2u().equals(PathFillMode_EVEN_ODD_getInstance())) {
      return Companion_getInstance_21().e3g_1;
    } else {
      return Companion_getInstance_21().d3g_1;
    }
  };
  SkiaBackedPath.prototype.p3f = function (x, y) {
    this.q3r_1.l2u(x, y);
  };
  SkiaBackedPath.prototype.q3f = function (dx, dy) {
    this.q3r_1.m2u(dx, dy);
  };
  SkiaBackedPath.prototype.r3f = function (x, y) {
    this.q3r_1.n2u(x, y);
  };
  SkiaBackedPath.prototype.s3f = function (dx, dy) {
    this.q3r_1.o2u(dx, dy);
  };
  SkiaBackedPath.prototype.t3f = function (x1, y1, x2, y2) {
    this.q3r_1.p2u(x1, y1, x2, y2);
  };
  SkiaBackedPath.prototype.u3f = function (dx1, dy1, dx2, dy2) {
    this.q3r_1.q2u(dx1, dy1, dx2, dy2);
  };
  SkiaBackedPath.prototype.v3f = function (x1, y1, x2, y2, x3, y3) {
    this.q3r_1.r2u(x1, y1, x2, y2, x3, y3);
  };
  SkiaBackedPath.prototype.w3f = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    this.q3r_1.s2u(dx1, dy1, dx2, dy2, dx3, dy3);
  };
  SkiaBackedPath.prototype.x3f = function (rect) {
    var tmp = this.q3r_1;
    var tmp_0 = toSkiaRect(rect);
    var tmp_1 = PathDirection_COUNTER_CLOCKWISE_getInstance();
    tmp.v2u(tmp_0, tmp_1, 0, 4, null);
  };
  SkiaBackedPath.prototype.h3e = function (roundRect) {
    var tmp = this.q3r_1;
    var tmp_0 = toSkiaRRect(roundRect);
    var tmp_1 = PathDirection_COUNTER_CLOCKWISE_getInstance();
    tmp.x2u(tmp_0, tmp_1, 0, 4, null);
  };
  SkiaBackedPath.prototype.y3f = function (path, offset) {
    var tmp = this.q3r_1;
    var tmp_0 = asSkiaPath(path);
    var tmp_1 = _Offset___get_x__impl__xvi35n(offset);
    var tmp_2 = _Offset___get_y__impl__8bzhra(offset);
    tmp.z2u(tmp_0, tmp_1, tmp_2, false, 8, null);
  };
  SkiaBackedPath.prototype.z1g = function () {
    this.q3r_1.t2u();
  };
  SkiaBackedPath.prototype.b1q = function () {
    var fillType = this.r3r();
    this.q3r_1.i2u();
    this.o3f(fillType);
  };
  SkiaBackedPath.prototype.a3g = function (offset) {
    var tmp = this.q3r_1;
    var tmp_0 = Companion_getInstance_6().o2o(_Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset));
    tmp.b2v(tmp_0, null, false, 6, null);
  };
  SkiaBackedPath.prototype.b3g = function () {
    var bounds = this.q3r_1.j2u();
    return new Rect_0(bounds.p2n_1, bounds.q2n_1, bounds.r2n_1, bounds.s2n_1);
  };
  SkiaBackedPath.prototype.c3g = function (path1, path2, operation) {
    var path = Companion_getInstance_7().c2u(asSkiaPath(path1), asSkiaPath(path2), toSkiaOperation(operation, this));
    var tmp = this;
    var tmp0_elvis_lhs = path;
    tmp.q3r_1 = tmp0_elvis_lhs == null ? this.q3r_1 : tmp0_elvis_lhs;
    return !(path == null);
  };
  SkiaBackedPath.prototype.po = function () {
    return this.q3r_1.po();
  };
  SkiaBackedPath.$metadata$ = classMeta('SkiaBackedPath', [Path]);
  function asSkiaPath(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedPath) {
      tmp = _this__u8e3s4.q3r_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Path');
    }
    return tmp;
  }
  function SkiaBackedPathEffect() {
  }
  SkiaBackedPathEffect.$metadata$ = classMeta('SkiaBackedPathEffect', [PathEffect]);
  function asSkiaPathEffect(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedPathEffect ? _this__u8e3s4 : THROW_CCE()).s3r_1;
  }
  function PathMeasure_0() {
    return SkiaBackedPathMeasure_init_$Create$(null, 1, null);
  }
  function SkiaBackedPathMeasure_init_$Init$(skia, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      skia = PathMeasure_init_$Create$();
    SkiaBackedPathMeasure.call($this, skia);
    return $this;
  }
  function SkiaBackedPathMeasure_init_$Create$(skia, $mask0, $marker) {
    return SkiaBackedPathMeasure_init_$Init$(skia, $mask0, $marker, Object.create(SkiaBackedPathMeasure.prototype));
  }
  function SkiaBackedPathMeasure(skia) {
    this.t3r_1 = skia;
  }
  SkiaBackedPathMeasure.prototype.h3g = function (path, forceClosed) {
    var tmp0_safe_receiver = path;
    this.t3r_1.h2v(tmp0_safe_receiver == null ? null : asSkiaPath(tmp0_safe_receiver), forceClosed);
  };
  SkiaBackedPathMeasure.prototype.g3g = function (startDistance, stopDistance, destination, startWithMoveTo) {
    return this.t3r_1.i2v(startDistance, stopDistance, asSkiaPath(destination), startWithMoveTo);
  };
  SkiaBackedPathMeasure.prototype.f8 = function () {
    return this.t3r_1.f8();
  };
  SkiaBackedPathMeasure.$metadata$ = classMeta('SkiaBackedPathMeasure', [PathMeasure]);
  function asSkiaColorFilter(_this__u8e3s4) {
    return _this__u8e3s4.z3b_1;
  }
  function actualTintColorFilter(color, blendMode) {
    return new ColorFilter(Companion_getInstance_8().z2o(toArgb(color), toSkia(blendMode)));
  }
  function asSkiaBitmap(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof SkiaBackedImageBitmap) {
      tmp = _this__u8e3s4.u3r_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Image');
    }
    return tmp;
  }
  function SkiaBackedImageBitmap(bitmap) {
    this.u3r_1 = bitmap;
    this.v3r_1 = toComposeColorSpace(this.u3r_1.c2n());
    this.w3r_1 = toComposeConfig(this.u3r_1.b2n());
    this.x3r_1 = !this.u3r_1.d2n();
  }
  SkiaBackedImageBitmap.prototype.k3d = function () {
    return this.w3r_1;
  };
  SkiaBackedImageBitmap.prototype.b2j = function () {
    return this.u3r_1.b2j();
  };
  SkiaBackedImageBitmap.prototype.a2j = function () {
    return this.u3r_1.a2j();
  };
  SkiaBackedImageBitmap.prototype.l3d = function () {
    return Unit_getInstance();
  };
  SkiaBackedImageBitmap.$metadata$ = classMeta('SkiaBackedImageBitmap', [ImageBitmap]);
  function toComposeColorSpace(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return equals(tmp0_subject, Companion_getInstance_9().i2p_1) ? ColorSpaces_getInstance().b39_1 : equals(tmp0_subject, Companion_getInstance_9().j2p_1) ? ColorSpaces_getInstance().c39_1 : equals(tmp0_subject, Companion_getInstance_9().k2p_1) ? ColorSpaces_getInstance().i39_1 : ColorSpaces_getInstance().b39_1;
  }
  function toComposeConfig(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject.equals(Companion_getInstance_10().m2p_1) ? Companion_getInstance_18().m3d_1 : tmp0_subject.equals(ColorType_ALPHA_8_getInstance()) ? Companion_getInstance_18().n3d_1 : tmp0_subject.equals(ColorType_RGB_565_getInstance()) ? Companion_getInstance_18().o3d_1 : tmp0_subject.equals(ColorType_RGBA_F16_getInstance()) ? Companion_getInstance_18().p3d_1 : Companion_getInstance_18().m3d_1;
  }
  function ActualImageBitmap(width, height, config, hasAlpha, colorSpace) {
    var colorType = toSkiaColorType(config);
    var alphaType = hasAlpha ? ColorAlphaType_PREMUL_getInstance() : ColorAlphaType_OPAQUE_getInstance();
    var skiaColorSpace = toSkiaColorSpace(colorSpace);
    var colorInfo = new ColorInfo(colorType, alphaType, skiaColorSpace);
    var imageInfo = new ImageInfo(colorInfo, width, height);
    var bitmap = Bitmap_init_$Create$();
    bitmap.z2m(imageInfo);
    return new SkiaBackedImageBitmap(bitmap);
  }
  function toSkiaColorType(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_18().m3d_1 ? Companion_getInstance_10().m2p_1 : tmp0_subject === Companion_getInstance_18().n3d_1 ? ColorType_ALPHA_8_getInstance() : tmp0_subject === Companion_getInstance_18().o3d_1 ? ColorType_RGB_565_getInstance() : tmp0_subject === Companion_getInstance_18().p3d_1 ? ColorType_RGBA_F16_getInstance() : Companion_getInstance_10().m2p_1;
  }
  function toSkiaColorSpace(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject.equals(ColorSpaces_getInstance().b39_1) ? Companion_getInstance_9().i2p_1 : tmp0_subject.equals(ColorSpaces_getInstance().c39_1) ? Companion_getInstance_9().j2p_1 : tmp0_subject.equals(ColorSpaces_getInstance().i39_1) ? Companion_getInstance_9().k2p_1 : Companion_getInstance_9().i2p_1;
  }
  //region block: post-declaration
  CanvasDrawScope.prototype.b3l = drawLine$default;
  CanvasDrawScope.prototype.c3l = drawRect$default;
  CanvasDrawScope.prototype.d3l = drawRect$default_0;
  CanvasDrawScope.prototype.f3l = drawImage$default;
  CanvasDrawScope.prototype.g3l = drawRoundRect$default;
  CanvasDrawScope.prototype.i3l = drawCircle$default;
  CanvasDrawScope.prototype.k3l = drawArc$default;
  CanvasDrawScope.prototype.l3l = drawPath$default;
  CanvasDrawScope.prototype.m3l = drawPath$default_0;
  CanvasDrawScope.prototype.o3l = drawPoints$default;
  CanvasDrawScope.prototype.q3l = get_center_0;
  CanvasDrawScope.prototype.j3k = get_size;
  CanvasDrawScope.prototype.o2k = toPx;
  CanvasDrawScope.prototype.q2k = toPx_0;
  CanvasDrawScope.prototype.p2k = roundToPx;
  CanvasDrawScope.prototype.v2k = toDp;
  CanvasDrawScope.prototype.w2k = toSize;
  asDrawTransform$1.prototype.m38 = clipPath$default_0;
  EmptyCanvas.prototype.m38 = clipPath$default;
  EmptyCanvas.prototype.g38 = clipRect;
  EmptyCanvas.prototype.i38 = clipRect$default;
  EmptyCanvas.prototype.o38 = drawRect;
  SkiaBackedCanvas.prototype.m38 = clipPath$default;
  SkiaBackedCanvas.prototype.g38 = clipRect;
  SkiaBackedCanvas.prototype.i38 = clipRect$default;
  SkiaBackedCanvas.prototype.o38 = drawRect;
  SkiaBackedPath.prototype.z3f = addPath$default;
  //endregion
  //region block: init
  DefaultAlpha = 1.0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CanvasDrawScope;
  _.$_$.b = ContentDrawScope;
  _.$_$.c = DrawScope;
  _.$_$.d = Painter;
  _.$_$.e = PathBuilder;
  _.$_$.f = PathParser;
  _.$_$.g = BlendMode;
  _.$_$.h = Canvas_0;
  _.$_$.i = Color_0;
  _.$_$.j = Color_1;
  _.$_$.k = Color;
  _.$_$.l = get_DefaultAlpha;
  _.$_$.m = ImageBitmapConfig;
  _.$_$.n = Matrix;
  _.$_$.o = Generic;
  _.$_$.p = Rectangle;
  _.$_$.q = Rounded;
  _.$_$.r = Paint_0;
  _.$_$.s = PathFillType;
  _.$_$.t = PathMeasure_0;
  _.$_$.u = Path_0;
  _.$_$.v = get_RectangleShape;
  _.$_$.w = Shape;
  _.$_$.x = SolidColor;
  _.$_$.y = StrokeCap;
  _.$_$.z = StrokeJoin;
  _.$_$.a1 = asComposeCanvas;
  _.$_$.b1 = asSkiaPath;
  _.$_$.c1 = compositeOver;
  _.$_$.d1 = luminance;
  _.$_$.e1 = get_nativeCanvas;
  _.$_$.f1 = toArgb;
  _.$_$.g1 = toComposeRect;
  _.$_$.h1 = toSkiaRRect;
  _.$_$.i1 = toSkiaRect;
  _.$_$.j1 = _get_value__a43j40;
  _.$_$.k1 = _get_value__a43j40_0;
  _.$_$.l1 = _get_value__a43j40_1;
  _.$_$.m1 = drawArc$default;
  _.$_$.n1 = drawCircle$default;
  _.$_$.o1 = drawImage$default;
  _.$_$.p1 = drawLine$default;
  _.$_$.q1 = drawPath$default_0;
  _.$_$.r1 = drawPath$default;
  _.$_$.s1 = drawPoints$default;
  _.$_$.t1 = drawRect$default;
  _.$_$.u1 = drawRect$default_0;
  _.$_$.v1 = drawRoundRect$default;
  _.$_$.w1 = Color$default;
  _.$_$.x1 = ImageBitmap$default;
  _.$_$.y1 = drawOutline$default;
  _.$_$.z1 = drawOutline$default_0;
  _.$_$.a2 = Stroke_init_$Create$;
  _.$_$.b2 = BlendMode__hashCode_impl_93ceri;
  _.$_$.c2 = _Color___init__impl__r6cqi2;
  _.$_$.d2 = _Color___get_alpha__impl__wcfyv1;
  _.$_$.e2 = _Color___get_blue__impl__xwez13;
  _.$_$.f2 = _Color___get_colorSpace__impl__jqqozk;
  _.$_$.g2 = Color__convert_impl_so5m8t;
  _.$_$.h2 = _Color___get_green__impl__bta9rs;
  _.$_$.i2 = Color__hashCode_impl_vjyivj;
  _.$_$.j2 = _Color___get_red__impl__cwrsk6;
  _.$_$.k2 = _Color___get_value__impl__1pls5m;
  _.$_$.l2 = Matrix__invert_impl_9xyo46;
  _.$_$.m2 = Matrix__map_impl_7meu7m;
  _.$_$.n2 = Matrix__map_impl_7meu7m_0;
  _.$_$.o2 = Matrix__reset_impl_4l49i7;
  _.$_$.p2 = Matrix__rotateX_impl_3e5y7j;
  _.$_$.q2 = Matrix__rotateY_impl_2x4btc;
  _.$_$.r2 = Matrix__rotateZ_impl_2g2pf5;
  _.$_$.s2 = Matrix__scale_impl_6w89a4;
  _.$_$.t2 = Matrix__setFrom_impl_5fylsu;
  _.$_$.u2 = Matrix__timesAssign_impl_oas521;
  _.$_$.v2 = PathFillType__hashCode_impl_pdqo4w;
  _.$_$.w2 = StrokeCap__hashCode_impl_posxk8;
  _.$_$.x2 = StrokeJoin__hashCode_impl_3pyh8w;
  _.$_$.y2 = Color__copy$default_impl_ectz3s;
  _.$_$.z2 = _Matrix___init__impl__q3kp4w_0;
  _.$_$.a3 = Matrix__scale$default_impl_snaws9;
  _.$_$.b3 = Matrix__translate$default_impl_10t8ql;
  _.$_$.c3 = ColorSpaces_getInstance;
  _.$_$.d3 = Fill_getInstance;
  _.$_$.e3 = Companion_getInstance_11;
  _.$_$.f3 = Companion_getInstance_13;
  _.$_$.g3 = Companion_getInstance_14;
  _.$_$.h3 = Companion_getInstance_15;
  _.$_$.i3 = Companion_getInstance_18;
  _.$_$.j3 = Companion_getInstance_20;
  _.$_$.k3 = Companion_getInstance_21;
  _.$_$.l3 = Companion_getInstance_22;
  _.$_$.m3 = Companion_getInstance_23;
  _.$_$.n3 = Companion_getInstance_24;
  _.$_$.o3 = Companion_getInstance_25;
  _.$_$.p3 = Companion_getInstance_26;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-ui-graphics.js.map
