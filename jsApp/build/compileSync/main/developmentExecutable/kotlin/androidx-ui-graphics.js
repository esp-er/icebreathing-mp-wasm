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
  var objectMeta = kotlin_kotlin.$_$.q9;
  var THROW_CCE = kotlin_kotlin.$_$.kc;
  var classMeta = kotlin_kotlin.$_$.q8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.o;
  var Unit_getInstance = kotlin_kotlin.$_$.b3;
  var Companion_getInstance = kotlin_androidx_compose_ui_ui_geometry.$_$.m1;
  var Offset = kotlin_androidx_compose_ui_ui_geometry.$_$.d;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.w2;
  var Companion_getInstance_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.o1;
  var equals = kotlin_kotlin.$_$.t8;
  var _Offset___get_x__impl__xvi35n = kotlin_androidx_compose_ui_ui_geometry.$_$.e1;
  var isFinite = kotlin_kotlin.$_$.wc;
  var _Offset___get_y__impl__8bzhra = kotlin_androidx_compose_ui_ui_geometry.$_$.f1;
  var Size = kotlin_androidx_compose_ui_ui_geometry.$_$.j;
  var _Size___get_width__impl__58y75t = kotlin_androidx_compose_ui_ui_geometry.$_$.k1;
  var _Size___get_height__impl__a04p02 = kotlin_androidx_compose_ui_ui_geometry.$_$.h1;
  var hashCode = kotlin_kotlin.$_$.b9;
  var Offset__hashCode_impl_hbql41 = kotlin_androidx_compose_ui_ui_geometry.$_$.a1;
  var Offset_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.e;
  var get_isFinite = kotlin_androidx_compose_ui_ui_geometry.$_$.n;
  var get_center = kotlin_androidx_compose_ui_ui_geometry.$_$.m;
  var get_isUnspecified = kotlin_androidx_compose_ui_ui_geometry.$_$.q;
  var _Size___get_minDimension__impl__4iso0r = kotlin_androidx_compose_ui_ui_geometry.$_$.i1;
  var getNumberHashCode = kotlin_kotlin.$_$.x8;
  var get_isSpecified = kotlin_androidx_compose_ui_ui_geometry.$_$.p;
  var Companion_getInstance_1 = kotlin_androidx_compose_ui_ui_unit.$_$.p3;
  var IntSize = kotlin_androidx_compose_ui_ui_unit.$_$.y;
  var IntOffset = kotlin_androidx_compose_ui_ui_unit.$_$.x;
  var IntSize_0 = kotlin_androidx_compose_ui_ui_unit.$_$.z;
  var interfaceMeta = kotlin_kotlin.$_$.d9;
  var ULong = kotlin_kotlin.$_$.nc;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.r2;
  var Long = kotlin_kotlin.$_$.ec;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.q2;
  var ulongToDouble = kotlin_kotlin.$_$.od;
  var toString = kotlin_kotlin.$_$.u9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var ULong__hashCode_impl_6hv2lb = kotlin_kotlin.$_$.s2;
  var numberToInt = kotlin_kotlin.$_$.o9;
  var toLong = kotlin_kotlin.$_$.s9;
  var fill$default = kotlin_kotlin.$_$.h;
  var arrayCopy = kotlin_kotlin.$_$.c4;
  var get_PI = kotlin_kotlin.$_$.v9;
  var toRawBits = kotlin_kotlin.$_$.kd;
  var toShort = kotlin_kotlin.$_$.t9;
  var toByte = kotlin_kotlin.$_$.r9;
  var numberToLong = kotlin_kotlin.$_$.p9;
  var floatFromBits = kotlin_kotlin.$_$.v8;
  var compareTo = kotlin_kotlin.$_$.r8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.g1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g2;
  var toString_0 = kotlin_kotlin.$_$.ob;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.e1;
  var Comparable = kotlin_kotlin.$_$.xb;
  var Rect = kotlin_androidx_compose_ui_ui_geometry.$_$.g;
  var trimIndent = kotlin_kotlin.$_$.qb;
  var get_boundingRect = kotlin_androidx_compose_ui_ui_geometry.$_$.l;
  var _CornerRadius___get_x__impl__1594cn = kotlin_androidx_compose_ui_ui_geometry.$_$.v;
  var _CornerRadius___get_y__impl__tyvleu = kotlin_androidx_compose_ui_ui_geometry.$_$.w;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.cd;
  var CornerRadius$default = kotlin_androidx_compose_ui_ui_geometry.$_$.u;
  var toRect = kotlin_androidx_compose_ui_ui_geometry.$_$.t;
  var charSequenceLength = kotlin_kotlin.$_$.o8;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var getStringHashCode = kotlin_kotlin.$_$.a9;
  var withSign = kotlin_kotlin.$_$.da;
  var coerceIn = kotlin_kotlin.$_$.ja;
  var coerceIn_0 = kotlin_kotlin.$_$.ia;
  var contentEquals = kotlin_kotlin.$_$.o4;
  var contentHashCode = kotlin_kotlin.$_$.r4;
  var toBits = kotlin_kotlin.$_$.id;
  var isNaN_0 = kotlin_kotlin.$_$.zc;
  var LayoutDirection_Ltr_getInstance = kotlin_androidx_compose_ui_ui_unit.$_$.v1;
  var Size_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.k;
  var Size__hashCode_impl_2h1qpd = kotlin_androidx_compose_ui_ui_geometry.$_$.g1;
  var toPx = kotlin_androidx_compose_ui_ui_unit.$_$.i;
  var toPx_0 = kotlin_androidx_compose_ui_ui_unit.$_$.j;
  var roundToPx = kotlin_androidx_compose_ui_ui_unit.$_$.c;
  var roundToPx_0 = kotlin_androidx_compose_ui_ui_unit.$_$.d;
  var toSp = kotlin_androidx_compose_ui_ui_unit.$_$.n;
  var toSp_0 = kotlin_androidx_compose_ui_ui_unit.$_$.m;
  var toSp_1 = kotlin_androidx_compose_ui_ui_unit.$_$.o;
  var toDp = kotlin_androidx_compose_ui_ui_unit.$_$.g;
  var toDp_0 = kotlin_androidx_compose_ui_ui_unit.$_$.h;
  var toDp_1 = kotlin_androidx_compose_ui_ui_unit.$_$.f;
  var toRect_0 = kotlin_androidx_compose_ui_ui_unit.$_$.k;
  var toSize = kotlin_androidx_compose_ui_ui_unit.$_$.l;
  var toDpSize = kotlin_androidx_compose_ui_ui_unit.$_$.e;
  var Density = kotlin_androidx_compose_ui_ui_unit.$_$.p;
  var Companion_getInstance_2 = kotlin_androidx_compose_ui_ui_geometry.$_$.l1;
  var CornerRadius = kotlin_androidx_compose_ui_ui_geometry.$_$.b;
  var Density_0 = kotlin_androidx_compose_ui_ui_unit.$_$.q;
  var Annotation = kotlin_kotlin.$_$.tb;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.d2;
  var Rect_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.f;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var Char = kotlin_kotlin.$_$.vb;
  var numberRangeToNumber = kotlin_kotlin.$_$.m9;
  var step = kotlin_kotlin.$_$.oa;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.i4;
  var copyOfRange = kotlin_kotlin.$_$.t4;
  var listOf = kotlin_kotlin.$_$.b6;
  var charSequenceGet = kotlin_kotlin.$_$.n8;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.i2;
  var toDouble = kotlin_kotlin.$_$.kb;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.n1;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var isCharSequence = kotlin_kotlin.$_$.g9;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.h2;
  var charSequenceSubSequence = kotlin_kotlin.$_$.p8;
  var ensureNotNull = kotlin_kotlin.$_$.uc;
  var NotImplementedError = kotlin_kotlin.$_$.gc;
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
  var Matrix33 = kotlin_org_jetbrains_skiko_skiko.$_$.x8;
  var Companion_getInstance_3 = kotlin_org_jetbrains_skiko_skiko.$_$.d8;
  var Companion_getInstance_4 = kotlin_org_jetbrains_skiko_skiko.$_$.c8;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$_$.x7;
  var until = kotlin_kotlin.$_$.pa;
  var ClipMode_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v1;
  var ClipMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u1;
  var Matrix44 = kotlin_org_jetbrains_skiko_skiko.$_$.y8;
  var FilterMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e2;
  var MipmapMode_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k2;
  var FilterMipmap = kotlin_org_jetbrains_skiko_skiko.$_$.u8;
  var CubicResampler = kotlin_org_jetbrains_skiko_skiko.$_$.t8;
  var FilterMode_LINEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d2;
  var MipmapMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j2;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_androidx_compose_ui_ui_unit.$_$.r2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_androidx_compose_ui_ui_unit.$_$.s2;
  var _IntSize___get_width__impl__d9yl4o = kotlin_androidx_compose_ui_ui_unit.$_$.w2;
  var _IntSize___get_height__impl__prv63b = kotlin_androidx_compose_ui_ui_unit.$_$.u2;
  var Canvas_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.f7;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.l7;
  var PaintMode_FILL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l2;
  var PaintMode_STROKE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m2;
  var PaintStrokeCap_BUTT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n2;
  var PaintStrokeCap_SQUARE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p2;
  var PaintStrokeCap_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o2;
  var PaintStrokeJoin_MITER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r2;
  var PaintStrokeJoin_BEVEL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q2;
  var PaintStrokeJoin_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s2;
  var Path_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.m7;
  var PathOp_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d3;
  var PathOp_REVERSE_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b3;
  var PathOp_UNION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c3;
  var PathOp_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a3;
  var PathOp_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z2;
  var PathFillMode_WINDING_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y2;
  var PathFillMode_EVEN_ODD_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x2;
  var PathDirection_COUNTER_CLOCKWISE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t2;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$_$.z7;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.a8;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.e2;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.b8;
  var Style_TRANSLATE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w2;
  var Style_ROTATE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v2;
  var Style_MORPH_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u2;
  var PathMeasure_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.n7;
  var Companion_getInstance_9 = kotlin_org_jetbrains_skiko_skiko.$_$.y7;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$_$.q7;
  var ColorMatrix = kotlin_org_jetbrains_skiko_skiko.$_$.s8;
  var abs = kotlin_kotlin.$_$.w9;
  var ColorType_BGRA_8888_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a2;
  var ColorAlphaType_UNPREMUL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y1;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.r7;
  var ColorInfo = kotlin_org_jetbrains_skiko_skiko.$_$.r8;
  var ImageInfo = kotlin_org_jetbrains_skiko_skiko.$_$.w8;
  var ColorType_RGBA_F16_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b2;
  var ColorType_RGB_565_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c2;
  var ColorType_ALPHA_8_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z1;
  var Companion_getInstance_12 = kotlin_org_jetbrains_skiko_skiko.$_$.s7;
  var ColorAlphaType_OPAQUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w1;
  var ColorAlphaType_PREMUL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x1;
  var Bitmap_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.j7;
  var Companion_getInstance_13 = kotlin_org_jetbrains_skiko_skiko.$_$.e8;
  var toFloatArray = kotlin_kotlin.$_$.v6;
  var GradientStyle = kotlin_org_jetbrains_skiko_skiko.$_$.v8;
  var FilterTileMode_CLAMP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f2;
  var FilterTileMode_DECAL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g2;
  var FilterTileMode_MIRROR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h2;
  var FilterTileMode_REPEAT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i2;
  var VertexMode_TRIANGLES_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e3;
  var VertexMode_TRIANGLE_FAN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f3;
  var VertexMode_TRIANGLE_STRIP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g3;
  //endregion
  //region block: pre-declaration
  ShaderBrush.prototype = Object.create(Brush.prototype);
  ShaderBrush.prototype.constructor = ShaderBrush;
  SolidColor.prototype = Object.create(Brush.prototype);
  SolidColor.prototype.constructor = SolidColor;
  LinearGradient.prototype = Object.create(ShaderBrush.prototype);
  LinearGradient.prototype.constructor = LinearGradient;
  RadialGradient.prototype = Object.create(ShaderBrush.prototype);
  RadialGradient.prototype.constructor = RadialGradient;
  SweepGradient.prototype = Object.create(ShaderBrush.prototype);
  SweepGradient.prototype.constructor = SweepGradient;
  function scale$default(sx, sy, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      sy = sx;
    var tmp;
    if ($handler == null) {
      this.scale_sphyvb_k$(sx, sy);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(sx, sy);
    }
    return tmp;
  }
  function skewRad(sxRad, syRad) {
    this.skew_hcshkp_k$(degrees(sxRad), degrees(syRad));
  }
  function clipRect(rect, clipOp) {
    return this.clipRect_si0ig1_k$(rect.left_1, rect.top_1, rect.right_1, rect.bottom_1, clipOp);
  }
  function clipRect$default(rect, clipOp, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      clipOp = Companion_getInstance_16().Intersect_1;
    var tmp;
    if ($handler == null) {
      this.clipRect_5p7fgn_k$(rect, clipOp);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = clipOp;
      tmp = $handler(rect, tmp_0 == null ? null : new ClipOp(tmp_0));
    }
    return tmp;
  }
  function clipRect$default_0(left, top, right, bottom, clipOp, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      clipOp = Companion_getInstance_16().Intersect_1;
    var tmp;
    if ($handler == null) {
      this.clipRect_si0ig1_k$(left, top, right, bottom, clipOp);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = clipOp;
      tmp = $handler(left, top, right, bottom, tmp_0 == null ? null : new ClipOp(tmp_0));
    }
    return tmp;
  }
  function clipPath$default(path, clipOp, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      clipOp = Companion_getInstance_16().Intersect_1;
    var tmp;
    if ($handler == null) {
      this.clipPath_kn87dc_k$(path, clipOp);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = clipOp;
      tmp = $handler(path, tmp_0 == null ? null : new ClipOp(tmp_0));
    }
    return tmp;
  }
  function drawRect(rect, paint) {
    return this.drawRect_iwqaze_k$(rect.left_1, rect.top_1, rect.right_1, rect.bottom_1, paint);
  }
  function drawOval(rect, paint) {
    return this.drawOval_wmf8q4_k$(rect.left_1, rect.top_1, rect.right_1, rect.bottom_1, paint);
  }
  function drawArc(rect, startAngle, sweepAngle, useCenter, paint) {
    return this.drawArc_xj6sd2_k$(rect.left_1, rect.top_1, rect.right_1, rect.bottom_1, startAngle, sweepAngle, useCenter, paint);
  }
  function drawArcRad(rect, startAngleRad, sweepAngleRad, useCenter, paint) {
    this.drawArc_wasmwu_k$(rect, degrees(startAngleRad), degrees(sweepAngleRad), useCenter, paint);
  }
  function drawImageRect$default(image, srcOffset, srcSize, dstOffset, dstSize, paint, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      srcOffset = Companion_getInstance_1().Zero_1;
    if (!(($mask0 & 4) === 0))
      srcSize = IntSize(image.get_width_j0q4yl_k$(), image.get_height_e7t92o_k$());
    if (!(($mask0 & 8) === 0))
      dstOffset = Companion_getInstance_1().Zero_1;
    if (!(($mask0 & 16) === 0))
      dstSize = srcSize;
    var tmp;
    if ($handler == null) {
      this.drawImageRect_pn8joi_k$(image, srcOffset, srcSize, dstOffset, dstSize, paint);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = srcOffset;
      var tmp_1 = tmp_0 == null ? null : new IntOffset(tmp_0);
      var tmp_2 = srcSize;
      var tmp_3 = tmp_2 == null ? null : new IntSize_0(tmp_2);
      var tmp_4 = dstOffset;
      var tmp_5 = tmp_4 == null ? null : new IntOffset(tmp_4);
      var tmp_6 = dstSize;
      tmp = $handler(image, tmp_1, tmp_3, tmp_5, tmp_6 == null ? null : new IntSize_0(tmp_6), paint);
    }
    return tmp;
  }
  function readPixels$default(buffer, startX, startY, width, height, bufferOffset, stride, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startX = 0;
    if (!(($mask0 & 4) === 0))
      startY = 0;
    if (!(($mask0 & 8) === 0))
      width = this.get_width_j0q4yl_k$();
    if (!(($mask0 & 16) === 0))
      height = this.get_height_e7t92o_k$();
    if (!(($mask0 & 32) === 0))
      bufferOffset = 0;
    if (!(($mask0 & 64) === 0))
      stride = width;
    var tmp;
    if ($handler == null) {
      this.readPixels_foa4om_k$(buffer, startX, startY, width, height, bufferOffset, stride);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(buffer, startX, startY, width, height, bufferOffset, stride);
    }
    return tmp;
  }
  Rectangle.prototype = Object.create(Outline.prototype);
  Rectangle.prototype.constructor = Rectangle;
  Rounded.prototype = Object.create(Outline.prototype);
  Rounded.prototype.constructor = Rounded;
  Generic.prototype = Object.create(Outline.prototype);
  Generic.prototype.constructor = Generic;
  function arcToRad(rect, startAngleRadians, sweepAngleRadians, forceMoveTo) {
    this.arcTo_948klo_k$(rect, degrees(startAngleRadians), degrees(sweepAngleRadians), forceMoveTo);
  }
  function addPath$default(path, offset, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = Companion_getInstance().Zero_1;
    var tmp;
    if ($handler == null) {
      this.addPath_9947vg_k$(path, offset);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = offset;
      tmp = $handler(path, tmp_0 == null ? null : new Offset_0(tmp_0));
    }
    return tmp;
  }
  function getSegment$default(startDistance, stopDistance, destination, startWithMoveTo, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      startWithMoveTo = true;
    return $handler == null ? this.getSegment_54x8z1_k$(startDistance, stopDistance, destination, startWithMoveTo) : $handler(startDistance, stopDistance, destination, startWithMoveTo);
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
    return get_center(this.get_drawContext_ffwztu_k$().get_size_x9ctfw_k$());
  }
  function get_size() {
    return this.get_drawContext_ffwztu_k$().get_size_x9ctfw_k$();
  }
  function drawLine$default(brush, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      Companion_getInstance_45();
      strokeWidth = 0.0;
    }
    if (!(($mask0 & 16) === 0))
      cap = Companion_getInstance_45().DefaultCap_1;
    if (!(($mask0 & 32) === 0))
      pathEffect = null;
    if (!(($mask0 & 64) === 0))
      alpha = 1.0;
    if (!(($mask0 & 128) === 0))
      colorFilter = null;
    if (!(($mask0 & 256) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      this.drawLine_94tzv7_k$(brush, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = new Offset_0(start);
      var tmp_1 = new Offset_0(end);
      var tmp_2 = cap;
      var tmp_3 = tmp_2 == null ? null : new StrokeCap(tmp_2);
      var tmp_4 = blendMode;
      tmp = $handler(brush, tmp_0, tmp_1, strokeWidth, tmp_3, pathEffect, alpha, colorFilter, tmp_4 == null ? null : new BlendMode(tmp_4));
    }
    return tmp;
  }
  function drawLine$default_0(color, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      Companion_getInstance_45();
      strokeWidth = 0.0;
    }
    if (!(($mask0 & 16) === 0))
      cap = Companion_getInstance_45().DefaultCap_1;
    if (!(($mask0 & 32) === 0))
      pathEffect = null;
    if (!(($mask0 & 64) === 0))
      alpha = 1.0;
    if (!(($mask0 & 128) === 0))
      colorFilter = null;
    if (!(($mask0 & 256) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      this.drawLine_qcvbii_k$(color, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
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
      topLeft = Companion_getInstance().Zero_1;
    if (!(($mask0 & 4) === 0))
      size = offsetSize(this.get_size_x9ctfw_k$(), this, topLeft);
    if (!(($mask0 & 8) === 0))
      alpha = 1.0;
    if (!(($mask0 & 16) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 32) === 0))
      colorFilter = null;
    if (!(($mask0 & 64) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      this.drawRect_4jm64w_k$(brush, topLeft, size, alpha, style, colorFilter, blendMode);
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
      topLeft = Companion_getInstance().Zero_1;
    if (!(($mask0 & 4) === 0))
      size = offsetSize(this.get_size_x9ctfw_k$(), this, topLeft);
    if (!(($mask0 & 8) === 0))
      alpha = 1.0;
    if (!(($mask0 & 16) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 32) === 0))
      colorFilter = null;
    if (!(($mask0 & 64) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      this.drawRect_srg7q1_k$(color, topLeft, size, alpha, style, colorFilter, blendMode);
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
  function drawImage$default(image, topLeft, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      topLeft = Companion_getInstance().Zero_1;
    if (!(($mask0 & 4) === 0))
      alpha = 1.0;
    if (!(($mask0 & 8) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 16) === 0))
      colorFilter = null;
    if (!(($mask0 & 32) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      this.drawImage_bk8e6s_k$(image, topLeft, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = topLeft;
      var tmp_1 = tmp_0 == null ? null : new Offset_0(tmp_0);
      var tmp_2 = blendMode;
      tmp = $handler(image, tmp_1, alpha, style, colorFilter, tmp_2 == null ? null : new BlendMode(tmp_2));
    }
    return tmp;
  }
  function drawImage$default_0(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      srcOffset = Companion_getInstance_1().Zero_1;
    if (!(($mask0 & 4) === 0))
      srcSize = IntSize(image.get_width_j0q4yl_k$(), image.get_height_e7t92o_k$());
    if (!(($mask0 & 8) === 0))
      dstOffset = Companion_getInstance_1().Zero_1;
    if (!(($mask0 & 16) === 0))
      dstSize = srcSize;
    if (!(($mask0 & 32) === 0))
      alpha = 1.0;
    if (!(($mask0 & 64) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 128) === 0))
      colorFilter = null;
    if (!(($mask0 & 256) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      this.drawImage_td6jz_k$(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode);
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
      tmp = $handler(image, tmp_1, tmp_3, tmp_5, tmp_7, alpha, style, colorFilter, tmp_8 == null ? null : new BlendMode(tmp_8));
    }
    return tmp;
  }
  function drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    this.drawImage$default_9i1j05_k$(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, null, 512, null);
  }
  function drawImage$default_1(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      srcOffset = Companion_getInstance_1().Zero_1;
    if (!(($mask0 & 4) === 0))
      srcSize = IntSize(image.get_width_j0q4yl_k$(), image.get_height_e7t92o_k$());
    if (!(($mask0 & 8) === 0))
      dstOffset = Companion_getInstance_1().Zero_1;
    if (!(($mask0 & 16) === 0))
      dstSize = srcSize;
    if (!(($mask0 & 32) === 0))
      alpha = 1.0;
    if (!(($mask0 & 64) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 128) === 0))
      colorFilter = null;
    if (!(($mask0 & 256) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    if (!(($mask0 & 512) === 0))
      filterQuality = Companion_getInstance_44().DefaultFilterQuality_1;
    var tmp;
    if ($handler == null) {
      this.drawImage_riofdh_k$(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
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
      topLeft = Companion_getInstance().Zero_1;
    if (!(($mask0 & 4) === 0))
      size = offsetSize(this.get_size_x9ctfw_k$(), this, topLeft);
    if (!(($mask0 & 8) === 0))
      cornerRadius = Companion_getInstance_2().Zero_1;
    if (!(($mask0 & 16) === 0))
      alpha = 1.0;
    if (!(($mask0 & 32) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 64) === 0))
      colorFilter = null;
    if (!(($mask0 & 128) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      this.drawRoundRect_nkvmol_k$(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode);
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
  function drawRoundRect$default_0(color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      topLeft = Companion_getInstance().Zero_1;
    if (!(($mask0 & 4) === 0))
      size = offsetSize(this.get_size_x9ctfw_k$(), this, topLeft);
    if (!(($mask0 & 8) === 0))
      cornerRadius = Companion_getInstance_2().Zero_1;
    if (!(($mask0 & 16) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 32) === 0))
      alpha = 1.0;
    if (!(($mask0 & 64) === 0))
      colorFilter = null;
    if (!(($mask0 & 128) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      this.drawRoundRect_q7amlu_k$(color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = new Color(color);
      var tmp_1 = topLeft;
      var tmp_2 = tmp_1 == null ? null : new Offset_0(tmp_1);
      var tmp_3 = size;
      var tmp_4 = tmp_3 == null ? null : new Size_0(tmp_3);
      var tmp_5 = cornerRadius;
      var tmp_6 = tmp_5 == null ? null : new CornerRadius(tmp_5);
      var tmp_7 = blendMode;
      tmp = $handler(tmp_0, tmp_2, tmp_4, tmp_6, style, alpha, colorFilter, tmp_7 == null ? null : new BlendMode(tmp_7));
    }
    return tmp;
  }
  function drawCircle$default(brush, radius, center, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      radius = _Size___get_minDimension__impl__4iso0r(this.get_size_x9ctfw_k$()) / 2.0;
    if (!(($mask0 & 4) === 0))
      center = this.get_center_568eeq_k$();
    if (!(($mask0 & 8) === 0))
      alpha = 1.0;
    if (!(($mask0 & 16) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 32) === 0))
      colorFilter = null;
    if (!(($mask0 & 64) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      this.drawCircle_sp46sp_k$(brush, radius, center, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = center;
      var tmp_1 = tmp_0 == null ? null : new Offset_0(tmp_0);
      var tmp_2 = blendMode;
      tmp = $handler(brush, radius, tmp_1, alpha, style, colorFilter, tmp_2 == null ? null : new BlendMode(tmp_2));
    }
    return tmp;
  }
  function drawCircle$default_0(color, radius, center, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      radius = _Size___get_minDimension__impl__4iso0r(this.get_size_x9ctfw_k$()) / 2.0;
    if (!(($mask0 & 4) === 0))
      center = this.get_center_568eeq_k$();
    if (!(($mask0 & 8) === 0))
      alpha = 1.0;
    if (!(($mask0 & 16) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 32) === 0))
      colorFilter = null;
    if (!(($mask0 & 64) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      this.drawCircle_n7txn6_k$(color, radius, center, alpha, style, colorFilter, blendMode);
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
  function drawOval$default(brush, topLeft, size, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      topLeft = Companion_getInstance().Zero_1;
    if (!(($mask0 & 4) === 0))
      size = offsetSize(this.get_size_x9ctfw_k$(), this, topLeft);
    if (!(($mask0 & 8) === 0))
      alpha = 1.0;
    if (!(($mask0 & 16) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 32) === 0))
      colorFilter = null;
    if (!(($mask0 & 64) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      this.drawOval_poyb4u_k$(brush, topLeft, size, alpha, style, colorFilter, blendMode);
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
  function drawOval$default_0(color, topLeft, size, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      topLeft = Companion_getInstance().Zero_1;
    if (!(($mask0 & 4) === 0))
      size = offsetSize(this.get_size_x9ctfw_k$(), this, topLeft);
    if (!(($mask0 & 8) === 0))
      alpha = 1.0;
    if (!(($mask0 & 16) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 32) === 0))
      colorFilter = null;
    if (!(($mask0 & 64) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      this.drawOval_1h49jp_k$(color, topLeft, size, alpha, style, colorFilter, blendMode);
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
  function drawArc$default(brush, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      topLeft = Companion_getInstance().Zero_1;
    if (!(($mask0 & 32) === 0))
      size = offsetSize(this.get_size_x9ctfw_k$(), this, topLeft);
    if (!(($mask0 & 64) === 0))
      alpha = 1.0;
    if (!(($mask0 & 128) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 256) === 0))
      colorFilter = null;
    if (!(($mask0 & 512) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      this.drawArc_vjjneq_k$(brush, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = topLeft;
      var tmp_1 = tmp_0 == null ? null : new Offset_0(tmp_0);
      var tmp_2 = size;
      var tmp_3 = tmp_2 == null ? null : new Size_0(tmp_2);
      var tmp_4 = blendMode;
      tmp = $handler(brush, startAngle, sweepAngle, useCenter, tmp_1, tmp_3, alpha, style, colorFilter, tmp_4 == null ? null : new BlendMode(tmp_4));
    }
    return tmp;
  }
  function drawArc$default_0(color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      topLeft = Companion_getInstance().Zero_1;
    if (!(($mask0 & 32) === 0))
      size = offsetSize(this.get_size_x9ctfw_k$(), this, topLeft);
    if (!(($mask0 & 64) === 0))
      alpha = 1.0;
    if (!(($mask0 & 128) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 256) === 0))
      colorFilter = null;
    if (!(($mask0 & 512) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      this.drawArc_y7e861_k$(color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode);
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
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      this.drawPath_vpl0ok_k$(path, color, alpha, style, colorFilter, blendMode);
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
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      this.drawPath_vsb9f_k$(path, brush, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = blendMode;
      tmp = $handler(path, brush, alpha, style, colorFilter, tmp_0 == null ? null : new BlendMode(tmp_0));
    }
    return tmp;
  }
  function drawPoints$default(points, pointMode, color, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      Companion_getInstance_45();
      strokeWidth = 0.0;
    }
    if (!(($mask0 & 16) === 0))
      cap = Companion_getInstance_32().Butt_1;
    if (!(($mask0 & 32) === 0))
      pathEffect = null;
    if (!(($mask0 & 64) === 0))
      alpha = 1.0;
    if (!(($mask0 & 128) === 0))
      colorFilter = null;
    if (!(($mask0 & 256) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      this.drawPoints_tvcs0g_k$(points, pointMode, color, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
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
  function drawPoints$default_0(points, pointMode, brush, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      Companion_getInstance_45();
      strokeWidth = 0.0;
    }
    if (!(($mask0 & 16) === 0))
      cap = Companion_getInstance_32().Butt_1;
    if (!(($mask0 & 32) === 0))
      pathEffect = null;
    if (!(($mask0 & 64) === 0))
      alpha = 1.0;
    if (!(($mask0 & 128) === 0))
      colorFilter = null;
    if (!(($mask0 & 256) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      this.drawPoints_yexgjr_k$(points, pointMode, brush, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = new PointMode(pointMode);
      var tmp_1 = cap;
      var tmp_2 = tmp_1 == null ? null : new StrokeCap(tmp_1);
      var tmp_3 = blendMode;
      tmp = $handler(points, tmp_0, brush, strokeWidth, tmp_2, pathEffect, alpha, colorFilter, tmp_3 == null ? null : new BlendMode(tmp_3));
    }
    return tmp;
  }
  function get_center_1() {
    return Offset(_Size___get_width__impl__58y75t(this.get_size_x9ctfw_k$()) / 2, _Size___get_height__impl__a04p02(this.get_size_x9ctfw_k$()) / 2);
  }
  function clipRect$default_1(left, top, right, bottom, clipOp, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      left = 0.0;
    if (!(($mask0 & 2) === 0))
      top = 0.0;
    if (!(($mask0 & 4) === 0))
      right = _Size___get_width__impl__58y75t(this.get_size_x9ctfw_k$());
    if (!(($mask0 & 8) === 0))
      bottom = _Size___get_height__impl__a04p02(this.get_size_x9ctfw_k$());
    if (!(($mask0 & 16) === 0))
      clipOp = Companion_getInstance_16().Intersect_1;
    var tmp;
    if ($handler == null) {
      this.clipRect_si0ig1_k$(left, top, right, bottom, clipOp);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = clipOp;
      tmp = $handler(left, top, right, bottom, tmp_0 == null ? null : new ClipOp(tmp_0));
    }
    return tmp;
  }
  function clipPath$default_0(path, clipOp, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      clipOp = Companion_getInstance_16().Intersect_1;
    var tmp;
    if ($handler == null) {
      this.clipPath_kn87dc_k$(path, clipOp);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = clipOp;
      tmp = $handler(path, tmp_0 == null ? null : new ClipOp(tmp_0));
    }
    return tmp;
  }
  function translate$default(left, top, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      left = 0.0;
    if (!(($mask0 & 2) === 0))
      top = 0.0;
    var tmp;
    if ($handler == null) {
      this.translate_62wf99_k$(left, top);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(left, top);
    }
    return tmp;
  }
  function rotate$default(degrees, pivot, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      pivot = this.get_center_568eeq_k$();
    var tmp;
    if ($handler == null) {
      this.rotate_qski4n_k$(degrees, pivot);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = pivot;
      tmp = $handler(degrees, tmp_0 == null ? null : new Offset_0(tmp_0));
    }
    return tmp;
  }
  function scale$default_0(scaleX, scaleY, pivot, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      pivot = this.get_center_568eeq_k$();
    var tmp;
    if ($handler == null) {
      this.scale_qp5ya8_k$(scaleX, scaleY, pivot);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = pivot;
      tmp = $handler(scaleX, scaleY, tmp_0 == null ? null : new Offset_0(tmp_0));
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
  BlurEffect.prototype = Object.create(RenderEffect.prototype);
  BlurEffect.prototype.constructor = BlurEffect;
  OffsetEffect.prototype = Object.create(RenderEffect.prototype);
  OffsetEffect.prototype.constructor = OffsetEffect;
  SkiaBackedRenderEffect.prototype = Object.create(RenderEffect.prototype);
  SkiaBackedRenderEffect.prototype.constructor = SkiaBackedRenderEffect;
  //endregion
  function _BlendMode___init__impl__q6jalh(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function Companion() {
    Companion_instance = this;
    this.Clear_1 = _BlendMode___init__impl__q6jalh(0);
    this.Src_1 = _BlendMode___init__impl__q6jalh(1);
    this.Dst_1 = _BlendMode___init__impl__q6jalh(2);
    this.SrcOver_1 = _BlendMode___init__impl__q6jalh(3);
    this.DstOver_1 = _BlendMode___init__impl__q6jalh(4);
    this.SrcIn_1 = _BlendMode___init__impl__q6jalh(5);
    this.DstIn_1 = _BlendMode___init__impl__q6jalh(6);
    this.SrcOut_1 = _BlendMode___init__impl__q6jalh(7);
    this.DstOut_1 = _BlendMode___init__impl__q6jalh(8);
    this.SrcAtop_1 = _BlendMode___init__impl__q6jalh(9);
    this.DstAtop_1 = _BlendMode___init__impl__q6jalh(10);
    this.Xor_1 = _BlendMode___init__impl__q6jalh(11);
    this.Plus_1 = _BlendMode___init__impl__q6jalh(12);
    this.Modulate_1 = _BlendMode___init__impl__q6jalh(13);
    this.Screen_1 = _BlendMode___init__impl__q6jalh(14);
    this.Overlay_1 = _BlendMode___init__impl__q6jalh(15);
    this.Darken_1 = _BlendMode___init__impl__q6jalh(16);
    this.Lighten_1 = _BlendMode___init__impl__q6jalh(17);
    this.ColorDodge_1 = _BlendMode___init__impl__q6jalh(18);
    this.ColorBurn_1 = _BlendMode___init__impl__q6jalh(19);
    this.Hardlight_1 = _BlendMode___init__impl__q6jalh(20);
    this.Softlight_1 = _BlendMode___init__impl__q6jalh(21);
    this.Difference_1 = _BlendMode___init__impl__q6jalh(22);
    this.Exclusion_1 = _BlendMode___init__impl__q6jalh(23);
    this.Multiply_1 = _BlendMode___init__impl__q6jalh(24);
    this.Hue_1 = _BlendMode___init__impl__q6jalh(25);
    this.Saturation_1 = _BlendMode___init__impl__q6jalh(26);
    this.Color_1 = _BlendMode___init__impl__q6jalh(27);
    this.Luminosity_1 = _BlendMode___init__impl__q6jalh(28);
  }
  Companion.prototype.get_Clear_9hhqh4_k$ = function () {
    return this.Clear_1;
  };
  Companion.prototype.get_Src_o7e167_k$ = function () {
    return this.Src_1;
  };
  Companion.prototype.get_Dst_o5v574_k$ = function () {
    return this.Dst_1;
  };
  Companion.prototype.get_SrcOver_uyf80z_k$ = function () {
    return this.SrcOver_1;
  };
  Companion.prototype.get_DstOver_h25nrw_k$ = function () {
    return this.DstOver_1;
  };
  Companion.prototype.get_SrcIn_yyf2fo_k$ = function () {
    return this.SrcIn_1;
  };
  Companion.prototype.get_DstIn_7c3x3p_k$ = function () {
    return this.DstIn_1;
  };
  Companion.prototype.get_SrcOut_78cqo7_k$ = function () {
    return this.SrcOut_1;
  };
  Companion.prototype.get_DstOut_3e3t2e_k$ = function () {
    return this.DstOut_1;
  };
  Companion.prototype.get_SrcAtop_erwkkd_k$ = function () {
    return this.SrcAtop_1;
  };
  Companion.prototype.get_DstAtop_88mllw_k$ = function () {
    return this.DstAtop_1;
  };
  Companion.prototype.get_Xor_7r0wg6_k$ = function () {
    return this.Xor_1;
  };
  Companion.prototype.get_Plus_sl45pl_k$ = function () {
    return this.Plus_1;
  };
  Companion.prototype.get_Modulate_xd1sfq_k$ = function () {
    return this.Modulate_1;
  };
  Companion.prototype.get_Screen_76rbx3_k$ = function () {
    return this.Screen_1;
  };
  Companion.prototype.get_Overlay_2mxasb_k$ = function () {
    return this.Overlay_1;
  };
  Companion.prototype.get_Darken_1ojojo_k$ = function () {
    return this.Darken_1;
  };
  Companion.prototype.get_Lighten_afcpbe_k$ = function () {
    return this.Lighten_1;
  };
  Companion.prototype.get_ColorDodge_gwt0pb_k$ = function () {
    return this.ColorDodge_1;
  };
  Companion.prototype.get_ColorBurn_55chr1_k$ = function () {
    return this.ColorBurn_1;
  };
  Companion.prototype.get_Hardlight_ie4bsm_k$ = function () {
    return this.Hardlight_1;
  };
  Companion.prototype.get_Softlight_3emetl_k$ = function () {
    return this.Softlight_1;
  };
  Companion.prototype.get_Difference_k61r8m_k$ = function () {
    return this.Difference_1;
  };
  Companion.prototype.get_Exclusion_cabql5_k$ = function () {
    return this.Exclusion_1;
  };
  Companion.prototype.get_Multiply_bawk0x_k$ = function () {
    return this.Multiply_1;
  };
  Companion.prototype.get_Hue_1rhqm5_k$ = function () {
    return this.Hue_1;
  };
  Companion.prototype.get_Saturation_y5o6lt_k$ = function () {
    return this.Saturation_1;
  };
  Companion.prototype.get_Color_2ootbm_k$ = function () {
    return this.Color_1;
  };
  Companion.prototype.get_Luminosity_99tf6q_k$ = function () {
    return this.Luminosity_1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_14() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function BlendMode__toString_impl_uuibkd($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_14().Clear_1 ? 'Clear' : tmp0_subject === Companion_getInstance_14().Src_1 ? 'Src' : tmp0_subject === Companion_getInstance_14().Dst_1 ? 'Dst' : tmp0_subject === Companion_getInstance_14().SrcOver_1 ? 'SrcOver' : tmp0_subject === Companion_getInstance_14().DstOver_1 ? 'DstOver' : tmp0_subject === Companion_getInstance_14().SrcIn_1 ? 'SrcIn' : tmp0_subject === Companion_getInstance_14().DstIn_1 ? 'DstIn' : tmp0_subject === Companion_getInstance_14().SrcOut_1 ? 'SrcOut' : tmp0_subject === Companion_getInstance_14().DstOut_1 ? 'DstOut' : tmp0_subject === Companion_getInstance_14().SrcAtop_1 ? 'SrcAtop' : tmp0_subject === Companion_getInstance_14().DstAtop_1 ? 'DstAtop' : tmp0_subject === Companion_getInstance_14().Xor_1 ? 'Xor' : tmp0_subject === Companion_getInstance_14().Plus_1 ? 'Plus' : tmp0_subject === Companion_getInstance_14().Modulate_1 ? 'Modulate' : tmp0_subject === Companion_getInstance_14().Screen_1 ? 'Screen' : tmp0_subject === Companion_getInstance_14().Overlay_1 ? 'Overlay' : tmp0_subject === Companion_getInstance_14().Darken_1 ? 'Darken' : tmp0_subject === Companion_getInstance_14().Lighten_1 ? 'Lighten' : tmp0_subject === Companion_getInstance_14().ColorDodge_1 ? 'ColorDodge' : tmp0_subject === Companion_getInstance_14().ColorBurn_1 ? 'ColorBurn' : tmp0_subject === Companion_getInstance_14().Hardlight_1 ? 'HardLight' : tmp0_subject === Companion_getInstance_14().Softlight_1 ? 'Softlight' : tmp0_subject === Companion_getInstance_14().Difference_1 ? 'Difference' : tmp0_subject === Companion_getInstance_14().Exclusion_1 ? 'Exclusion' : tmp0_subject === Companion_getInstance_14().Multiply_1 ? 'Multiply' : tmp0_subject === Companion_getInstance_14().Hue_1 ? 'Hue' : tmp0_subject === Companion_getInstance_14().Saturation_1 ? 'Saturation' : tmp0_subject === Companion_getInstance_14().Color_1 ? 'Color' : tmp0_subject === Companion_getInstance_14().Luminosity_1 ? 'Luminosity' : 'Unknown';
  }
  function BlendMode__hashCode_impl_93ceri($this) {
    return $this;
  }
  function BlendMode__equals_impl_1tm25i($this, other) {
    if (!(other instanceof BlendMode))
      return false;
    var tmp0_other_with_cast = other instanceof BlendMode ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function BlendMode(value) {
    Companion_getInstance_14();
    this.value_1 = value;
  }
  BlendMode.prototype.toString = function () {
    return BlendMode__toString_impl_uuibkd(this.value_1);
  };
  BlendMode.prototype.hashCode = function () {
    return BlendMode__hashCode_impl_93ceri(this.value_1);
  };
  BlendMode.prototype.equals = function (other) {
    return BlendMode__equals_impl_1tm25i(this.value_1, other);
  };
  BlendMode.$metadata$ = classMeta('BlendMode');
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.linearGradient_hzla25_k$ = function (colorStops, start, end, tileMode) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.List' call
    var tmp0_List = colorStops.length;
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
        // Inline function 'androidx.compose.ui.graphics.Companion.linearGradient.<anonymous>' call
        tmp$ret$0 = colorStops[index].second_1.value_1;
        list.add_1j60pz_k$(new Color(tmp$ret$0));
      }
       while (inductionVariable < tmp0_List);
    tmp$ret$1 = list;
    tmp$ret$2 = tmp$ret$1;
    var tmp = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.List' call
    var tmp1_List = colorStops.length;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.MutableList' call
    var list_0 = ArrayList_init_$Create$(tmp1_List);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < tmp1_List)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.graphics.Companion.linearGradient.<anonymous>' call
        tmp$ret$3 = colorStops[index_0].first_1;
        list_0.add_1j60pz_k$(tmp$ret$3);
      }
       while (inductionVariable_0 < tmp1_List);
    tmp$ret$4 = list_0;
    tmp$ret$5 = tmp$ret$4;
    return new LinearGradient(tmp, tmp$ret$5, start, end, tileMode);
  };
  Companion_0.prototype.linearGradient$default_hj3qlx_k$ = function (colorStops, start, end, tileMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      start = Companion_getInstance().Zero_1;
    if (!(($mask0 & 4) === 0))
      end = Companion_getInstance().Infinite_1;
    if (!(($mask0 & 8) === 0))
      tileMode = Companion_getInstance_34().Clamp_1;
    return this.linearGradient_hzla25_k$(colorStops, start, end, tileMode);
  };
  Companion_0.prototype.linearGradient_shb1il_k$ = function (colors, start, end, tileMode) {
    return new LinearGradient(colors, null, start, end, tileMode);
  };
  Companion_0.prototype.linearGradient$default_etbc3l_k$ = function (colors, start, end, tileMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      start = Companion_getInstance().Zero_1;
    if (!(($mask0 & 4) === 0))
      end = Companion_getInstance().Infinite_1;
    if (!(($mask0 & 8) === 0))
      tileMode = Companion_getInstance_34().Clamp_1;
    return this.linearGradient_shb1il_k$(colors, start, end, tileMode);
  };
  Companion_0.prototype.horizontalGradient_tfs9xe_k$ = function (colors, startX, endX, tileMode) {
    return this.linearGradient_shb1il_k$(colors, Offset(startX, 0.0), Offset(endX, 0.0), tileMode);
  };
  Companion_0.prototype.horizontalGradient$default_b2z7pe_k$ = function (colors, startX, endX, tileMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startX = 0.0;
    if (!(($mask0 & 4) === 0)) {
      FloatCompanionObject_getInstance();
      endX = Infinity;
    }
    if (!(($mask0 & 8) === 0))
      tileMode = Companion_getInstance_34().Clamp_1;
    return this.horizontalGradient_tfs9xe_k$(colors, startX, endX, tileMode);
  };
  Companion_0.prototype.horizontalGradient_i469mu_k$ = function (colorStops, startX, endX, tileMode) {
    return this.linearGradient_hzla25_k$(colorStops.slice(), Offset(startX, 0.0), Offset(endX, 0.0), tileMode);
  };
  Companion_0.prototype.horizontalGradient$default_cf1vn0_k$ = function (colorStops, startX, endX, tileMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startX = 0.0;
    if (!(($mask0 & 4) === 0)) {
      FloatCompanionObject_getInstance();
      endX = Infinity;
    }
    if (!(($mask0 & 8) === 0))
      tileMode = Companion_getInstance_34().Clamp_1;
    return this.horizontalGradient_i469mu_k$(colorStops, startX, endX, tileMode);
  };
  Companion_0.prototype.verticalGradient_d79o9c_k$ = function (colors, startY, endY, tileMode) {
    return this.linearGradient_shb1il_k$(colors, Offset(0.0, startY), Offset(0.0, endY), tileMode);
  };
  Companion_0.prototype.verticalGradient$default_kc8rrk_k$ = function (colors, startY, endY, tileMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startY = 0.0;
    if (!(($mask0 & 4) === 0)) {
      FloatCompanionObject_getInstance();
      endY = Infinity;
    }
    if (!(($mask0 & 8) === 0))
      tileMode = Companion_getInstance_34().Clamp_1;
    return this.verticalGradient_d79o9c_k$(colors, startY, endY, tileMode);
  };
  Companion_0.prototype.verticalGradient_inf80c_k$ = function (colorStops, startY, endY, tileMode) {
    return this.linearGradient_hzla25_k$(colorStops.slice(), Offset(0.0, startY), Offset(0.0, endY), tileMode);
  };
  Companion_0.prototype.verticalGradient$default_7awhcq_k$ = function (colorStops, startY, endY, tileMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startY = 0.0;
    if (!(($mask0 & 4) === 0)) {
      FloatCompanionObject_getInstance();
      endY = Infinity;
    }
    if (!(($mask0 & 8) === 0))
      tileMode = Companion_getInstance_34().Clamp_1;
    return this.verticalGradient_inf80c_k$(colorStops, startY, endY, tileMode);
  };
  Companion_0.prototype.radialGradient_ge8bks_k$ = function (colorStops, center, radius, tileMode) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.List' call
    var tmp0_List = colorStops.length;
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
        // Inline function 'androidx.compose.ui.graphics.Companion.radialGradient.<anonymous>' call
        tmp$ret$0 = colorStops[index].second_1.value_1;
        list.add_1j60pz_k$(new Color(tmp$ret$0));
      }
       while (inductionVariable < tmp0_List);
    tmp$ret$1 = list;
    tmp$ret$2 = tmp$ret$1;
    var tmp = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.List' call
    var tmp1_List = colorStops.length;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.MutableList' call
    var list_0 = ArrayList_init_$Create$(tmp1_List);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < tmp1_List)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.graphics.Companion.radialGradient.<anonymous>' call
        tmp$ret$3 = colorStops[index_0].first_1;
        list_0.add_1j60pz_k$(tmp$ret$3);
      }
       while (inductionVariable_0 < tmp1_List);
    tmp$ret$4 = list_0;
    tmp$ret$5 = tmp$ret$4;
    return new RadialGradient(tmp, tmp$ret$5, center, radius, tileMode);
  };
  Companion_0.prototype.radialGradient$default_jsze89_k$ = function (colorStops, center, radius, tileMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      center = Companion_getInstance().Unspecified_1;
    if (!(($mask0 & 4) === 0)) {
      FloatCompanionObject_getInstance();
      radius = Infinity;
    }
    if (!(($mask0 & 8) === 0))
      tileMode = Companion_getInstance_34().Clamp_1;
    return this.radialGradient_ge8bks_k$(colorStops, center, radius, tileMode);
  };
  Companion_0.prototype.radialGradient_x8fw6i_k$ = function (colors, center, radius, tileMode) {
    return new RadialGradient(colors, null, center, radius, tileMode);
  };
  Companion_0.prototype.radialGradient$default_vgr8pr_k$ = function (colors, center, radius, tileMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      center = Companion_getInstance().Unspecified_1;
    if (!(($mask0 & 4) === 0)) {
      FloatCompanionObject_getInstance();
      radius = Infinity;
    }
    if (!(($mask0 & 8) === 0))
      tileMode = Companion_getInstance_34().Clamp_1;
    return this.radialGradient_x8fw6i_k$(colors, center, radius, tileMode);
  };
  Companion_0.prototype.sweepGradient_nrx7hj_k$ = function (colorStops, center) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.List' call
    var tmp0_List = colorStops.length;
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
        // Inline function 'androidx.compose.ui.graphics.Companion.sweepGradient.<anonymous>' call
        tmp$ret$0 = colorStops[index].second_1.value_1;
        list.add_1j60pz_k$(new Color(tmp$ret$0));
      }
       while (inductionVariable < tmp0_List);
    tmp$ret$1 = list;
    tmp$ret$2 = tmp$ret$1;
    var tmp0_colors = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.List' call
    var tmp1_List = colorStops.length;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.MutableList' call
    var list_0 = ArrayList_init_$Create$(tmp1_List);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < tmp1_List)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.graphics.Companion.sweepGradient.<anonymous>' call
        tmp$ret$3 = colorStops[index_0].first_1;
        list_0.add_1j60pz_k$(tmp$ret$3);
      }
       while (inductionVariable_0 < tmp1_List);
    tmp$ret$4 = list_0;
    tmp$ret$5 = tmp$ret$4;
    var tmp1_stops = tmp$ret$5;
    return new SweepGradient(center, tmp0_colors, tmp1_stops);
  };
  Companion_0.prototype.sweepGradient$default_3xzz3z_k$ = function (colorStops, center, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      center = Companion_getInstance().Unspecified_1;
    return this.sweepGradient_nrx7hj_k$(colorStops, center);
  };
  Companion_0.prototype.sweepGradient_uggmap_k$ = function (colors, center) {
    return new SweepGradient(center, colors, null);
  };
  Companion_0.prototype.sweepGradient$default_ao4xen_k$ = function (colors, center, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      center = Companion_getInstance().Unspecified_1;
    return this.sweepGradient_uggmap_k$(colors, center);
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_15() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Brush() {
    Companion_getInstance_15();
    this.intrinsicSize_1 = Companion_getInstance_0().Unspecified_1;
  }
  Brush.prototype.get_intrinsicSize_x61on3_k$ = function () {
    return this.intrinsicSize_1;
  };
  Brush.$metadata$ = classMeta('Brush');
  function _set_internalShader__t1be7f($this, _set____db54di) {
    $this.internalShader_1 = _set____db54di;
  }
  function _get_internalShader__3i7y5z($this) {
    return $this.internalShader_1;
  }
  function _set_createdSize__u0arks($this, _set____db54di) {
    $this.createdSize_1 = _set____db54di;
  }
  function _get_createdSize__aqf42g($this) {
    return $this.createdSize_1;
  }
  function ShaderBrush() {
    Brush.call(this);
    this.internalShader_1 = null;
    this.createdSize_1 = Companion_getInstance_0().Unspecified_1;
  }
  ShaderBrush.prototype.applyTo_w34vc_k$ = function (size, p, alpha) {
    var shader = this.internalShader_1;
    if (shader == null ? true : !equals(this.createdSize_1, size)) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = this.createShader_myfnlm_k$(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.ShaderBrush.applyTo.<anonymous>' call
      this.internalShader_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      shader = tmp$ret$0;
      this.createdSize_1 = size;
    }
    if (!equals(p.get_color_v34vrz_k$(), Companion_getInstance_17().Black_1)) {
      p.set_color_b5evhd_k$(Companion_getInstance_17().Black_1);
    }
    if (!equals(p.get_shader_jgtazy_k$(), shader)) {
      p.set_shader_bd5o0m_k$(shader);
    }
    if (!(p.get_alpha_iooth1_k$() === alpha)) {
      p.set_alpha_k1tx50_k$(alpha);
    }
  };
  ShaderBrush.$metadata$ = classMeta('ShaderBrush', undefined, undefined, undefined, undefined, Brush.prototype);
  function SolidColor(value) {
    Brush.call(this);
    this.value_1 = value;
  }
  SolidColor.prototype.get_value_puk9xv_k$ = function () {
    return this.value_1;
  };
  SolidColor.prototype.applyTo_w34vc_k$ = function (size, p, alpha) {
    p.set_alpha_k1tx50_k$(get_DefaultAlpha());
    var tmp;
    if (!(alpha === get_DefaultAlpha())) {
      var tmp_0 = _Color___get_alpha__impl__wcfyv1(this.value_1) * alpha;
      tmp = Color__copy$default_impl_ectz3s(this.value_1, tmp_0, 0.0, 0.0, 0.0, 14, null);
    } else {
      tmp = this.value_1;
    }
    p.set_color_b5evhd_k$(tmp);
    if (!(p.get_shader_jgtazy_k$() == null)) {
      p.set_shader_bd5o0m_k$(null);
    }
  };
  SolidColor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SolidColor))
      return false;
    if (!equals(this.value_1, other.value_1))
      return false;
    return true;
  };
  SolidColor.prototype.hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.value_1);
  };
  SolidColor.prototype.toString = function () {
    return 'SolidColor(value=' + new Color(this.value_1) + ')';
  };
  SolidColor.$metadata$ = classMeta('SolidColor', undefined, undefined, undefined, undefined, Brush.prototype);
  function LinearGradient_init_$Init$(colors, stops, start, end, tileMode, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      stops = null;
    if (!(($mask0 & 16) === 0))
      tileMode = Companion_getInstance_34().Clamp_1;
    LinearGradient.call($this, colors, stops, start, end, tileMode);
    return $this;
  }
  function LinearGradient_init_$Create$(colors, stops, start, end, tileMode, $mask0, $marker) {
    return LinearGradient_init_$Init$(colors, stops, start, end, tileMode, $mask0, $marker, Object.create(LinearGradient.prototype));
  }
  function _get_colors__hj58bp($this) {
    return $this.colors_1;
  }
  function _get_stops__b8qhfk($this) {
    return $this.stops_1;
  }
  function _get_start__b8zdqp($this) {
    return $this.start_1;
  }
  function _get_end__e67thy($this) {
    return $this.end_1;
  }
  function _get_tileMode__a5osqi($this) {
    return $this.tileMode_1;
  }
  function LinearGradient(colors, stops, start, end, tileMode) {
    ShaderBrush.call(this);
    this.colors_1 = colors;
    this.stops_1 = stops;
    this.start_1 = start;
    this.end_1 = end;
    this.tileMode_1 = tileMode;
  }
  LinearGradient.prototype.get_intrinsicSize_x61on3_k$ = function () {
    var tmp;
    if (isFinite(_Offset___get_x__impl__xvi35n(this.start_1)) ? isFinite(_Offset___get_x__impl__xvi35n(this.end_1)) : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.abs' call
      var tmp0_abs = _Offset___get_x__impl__xvi35n(this.start_1) - _Offset___get_x__impl__xvi35n(this.end_1);
      tmp$ret$0 = Math.abs(tmp0_abs);
      tmp = tmp$ret$0;
    } else {
      FloatCompanionObject_getInstance();
      tmp = NaN;
    }
    var tmp_0 = tmp;
    var tmp_1;
    if (isFinite(_Offset___get_y__impl__8bzhra(this.start_1)) ? isFinite(_Offset___get_y__impl__8bzhra(this.end_1)) : false) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.abs' call
      var tmp1_abs = _Offset___get_y__impl__8bzhra(this.start_1) - _Offset___get_y__impl__8bzhra(this.end_1);
      tmp$ret$1 = Math.abs(tmp1_abs);
      tmp_1 = tmp$ret$1;
    } else {
      FloatCompanionObject_getInstance();
      tmp_1 = NaN;
    }
    return Size(tmp_0, tmp_1);
  };
  LinearGradient.prototype.createShader_myfnlm_k$ = function (size) {
    var tmp;
    var tmp_0 = _Offset___get_x__impl__xvi35n(this.start_1);
    FloatCompanionObject_getInstance();
    if (tmp_0 === Infinity) {
      tmp = _Size___get_width__impl__58y75t(size);
    } else {
      tmp = _Offset___get_x__impl__xvi35n(this.start_1);
    }
    var startX = tmp;
    var tmp_1;
    var tmp_2 = _Offset___get_y__impl__8bzhra(this.start_1);
    FloatCompanionObject_getInstance();
    if (tmp_2 === Infinity) {
      tmp_1 = _Size___get_height__impl__a04p02(size);
    } else {
      tmp_1 = _Offset___get_y__impl__8bzhra(this.start_1);
    }
    var startY = tmp_1;
    var tmp_3;
    var tmp_4 = _Offset___get_x__impl__xvi35n(this.end_1);
    FloatCompanionObject_getInstance();
    if (tmp_4 === Infinity) {
      tmp_3 = _Size___get_width__impl__58y75t(size);
    } else {
      tmp_3 = _Offset___get_x__impl__xvi35n(this.end_1);
    }
    var endX = tmp_3;
    var tmp_5;
    var tmp_6 = _Offset___get_y__impl__8bzhra(this.end_1);
    FloatCompanionObject_getInstance();
    if (tmp_6 === Infinity) {
      tmp_5 = _Size___get_height__impl__a04p02(size);
    } else {
      tmp_5 = _Offset___get_y__impl__8bzhra(this.end_1);
    }
    var endY = tmp_5;
    var tmp0_colors = this.colors_1;
    var tmp1_colorStops = this.stops_1;
    var tmp2_from = Offset(startX, startY);
    var tmp3_to = Offset(endX, endY);
    var tmp4_tileMode = this.tileMode_1;
    return LinearGradientShader(tmp2_from, tmp3_to, tmp0_colors, tmp1_colorStops, tmp4_tileMode);
  };
  LinearGradient.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LinearGradient))
      return false;
    if (!equals(this.colors_1, other.colors_1))
      return false;
    if (!equals(this.stops_1, other.stops_1))
      return false;
    if (!equals(this.start_1, other.start_1))
      return false;
    if (!equals(this.end_1, other.end_1))
      return false;
    if (!(this.tileMode_1 === other.tileMode_1))
      return false;
    return true;
  };
  LinearGradient.prototype.hashCode = function () {
    var result = hashCode(this.colors_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.stops_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.start_1) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.end_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.tileMode_1) | 0;
    return result;
  };
  LinearGradient.prototype.toString = function () {
    var startValue = get_isFinite(this.start_1) ? 'start=' + new Offset_0(this.start_1) + ', ' : '';
    var endValue = get_isFinite(this.end_1) ? 'end=' + new Offset_0(this.end_1) + ', ' : '';
    return 'LinearGradient(colors=' + this.colors_1 + ', ' + ('stops=' + this.stops_1 + ', ') + startValue + endValue + ('tileMode=' + new TileMode(this.tileMode_1) + ')');
  };
  LinearGradient.$metadata$ = classMeta('LinearGradient', undefined, undefined, undefined, undefined, ShaderBrush.prototype);
  function RadialGradient_init_$Init$(colors, stops, center, radius, tileMode, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      stops = null;
    if (!(($mask0 & 16) === 0))
      tileMode = Companion_getInstance_34().Clamp_1;
    RadialGradient.call($this, colors, stops, center, radius, tileMode);
    return $this;
  }
  function RadialGradient_init_$Create$(colors, stops, center, radius, tileMode, $mask0, $marker) {
    return RadialGradient_init_$Init$(colors, stops, center, radius, tileMode, $mask0, $marker, Object.create(RadialGradient.prototype));
  }
  function _get_colors__hj58bp_0($this) {
    return $this.colors_1;
  }
  function _get_stops__b8qhfk_0($this) {
    return $this.stops_1;
  }
  function _get_center__m8ext6($this) {
    return $this.center_1;
  }
  function _get_radius__h7nyvb($this) {
    return $this.radius_1;
  }
  function _get_tileMode__a5osqi_0($this) {
    return $this.tileMode_1;
  }
  function RadialGradient(colors, stops, center, radius, tileMode) {
    ShaderBrush.call(this);
    this.colors_1 = colors;
    this.stops_1 = stops;
    this.center_1 = center;
    this.radius_1 = radius;
    this.tileMode_1 = tileMode;
  }
  RadialGradient.prototype.get_intrinsicSize_x61on3_k$ = function () {
    return isFinite(this.radius_1) ? Size(this.radius_1 * 2, this.radius_1 * 2) : Companion_getInstance_0().Unspecified_1;
  };
  RadialGradient.prototype.createShader_myfnlm_k$ = function (size) {
    var centerX;
    var centerY;
    if (get_isUnspecified(this.center_1)) {
      var drawCenter = get_center(size);
      centerX = _Offset___get_x__impl__xvi35n(drawCenter);
      centerY = _Offset___get_y__impl__8bzhra(drawCenter);
    } else {
      var tmp;
      var tmp_0 = _Offset___get_x__impl__xvi35n(this.center_1);
      FloatCompanionObject_getInstance();
      if (tmp_0 === Infinity) {
        tmp = _Size___get_width__impl__58y75t(size);
      } else {
        tmp = _Offset___get_x__impl__xvi35n(this.center_1);
      }
      centerX = tmp;
      var tmp_1;
      var tmp_2 = _Offset___get_y__impl__8bzhra(this.center_1);
      FloatCompanionObject_getInstance();
      if (tmp_2 === Infinity) {
        tmp_1 = _Size___get_height__impl__a04p02(size);
      } else {
        tmp_1 = _Offset___get_y__impl__8bzhra(this.center_1);
      }
      centerY = tmp_1;
    }
    var tmp0_colors = this.colors_1;
    var tmp1_colorStops = this.stops_1;
    var tmp2_center = Offset(centerX, centerY);
    var tmp_3;
    FloatCompanionObject_getInstance();
    if (this.radius_1 === Infinity) {
      tmp_3 = _Size___get_minDimension__impl__4iso0r(size) / 2;
    } else {
      tmp_3 = this.radius_1;
    }
    var tmp3_radius = tmp_3;
    var tmp4_tileMode = this.tileMode_1;
    return RadialGradientShader(tmp2_center, tmp3_radius, tmp0_colors, tmp1_colorStops, tmp4_tileMode);
  };
  RadialGradient.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RadialGradient))
      return false;
    if (!equals(this.colors_1, other.colors_1))
      return false;
    if (!equals(this.stops_1, other.stops_1))
      return false;
    if (!equals(this.center_1, other.center_1))
      return false;
    if (!(this.radius_1 === other.radius_1))
      return false;
    if (!(this.tileMode_1 === other.tileMode_1))
      return false;
    return true;
  };
  RadialGradient.prototype.hashCode = function () {
    var result = hashCode(this.colors_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.stops_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.center_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.radius_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.tileMode_1) | 0;
    return result;
  };
  RadialGradient.prototype.toString = function () {
    var centerValue = get_isSpecified(this.center_1) ? 'center=' + new Offset_0(this.center_1) + ', ' : '';
    var radiusValue = isFinite(this.radius_1) ? 'radius=' + this.radius_1 + ', ' : '';
    return 'RadialGradient(' + ('colors=' + this.colors_1 + ', ') + ('stops=' + this.stops_1 + ', ') + centerValue + radiusValue + ('tileMode=' + new TileMode(this.tileMode_1) + ')');
  };
  RadialGradient.$metadata$ = classMeta('RadialGradient', undefined, undefined, undefined, undefined, ShaderBrush.prototype);
  function SweepGradient_init_$Init$(center, colors, stops, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      stops = null;
    SweepGradient.call($this, center, colors, stops);
    return $this;
  }
  function SweepGradient_init_$Create$(center, colors, stops, $mask0, $marker) {
    return SweepGradient_init_$Init$(center, colors, stops, $mask0, $marker, Object.create(SweepGradient.prototype));
  }
  function _get_center__m8ext6_0($this) {
    return $this.center_1;
  }
  function _get_colors__hj58bp_1($this) {
    return $this.colors_1;
  }
  function _get_stops__b8qhfk_1($this) {
    return $this.stops_1;
  }
  function SweepGradient(center, colors, stops) {
    ShaderBrush.call(this);
    this.center_1 = center;
    this.colors_1 = colors;
    this.stops_1 = stops;
  }
  SweepGradient.prototype.createShader_myfnlm_k$ = function (size) {
    var tmp;
    if (get_isUnspecified(this.center_1)) {
      tmp = get_center(size);
    } else {
      var tmp_0;
      var tmp_1 = _Offset___get_x__impl__xvi35n(this.center_1);
      FloatCompanionObject_getInstance();
      if (tmp_1 === Infinity) {
        tmp_0 = _Size___get_width__impl__58y75t(size);
      } else {
        tmp_0 = _Offset___get_x__impl__xvi35n(this.center_1);
      }
      var tmp_2 = tmp_0;
      var tmp_3;
      var tmp_4 = _Offset___get_y__impl__8bzhra(this.center_1);
      FloatCompanionObject_getInstance();
      if (tmp_4 === Infinity) {
        tmp_3 = _Size___get_height__impl__a04p02(size);
      } else {
        tmp_3 = _Offset___get_y__impl__8bzhra(this.center_1);
      }
      tmp = Offset(tmp_2, tmp_3);
    }
    return SweepGradientShader(tmp, this.colors_1, this.stops_1);
  };
  SweepGradient.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SweepGradient))
      return false;
    if (!equals(this.center_1, other.center_1))
      return false;
    if (!equals(this.colors_1, other.colors_1))
      return false;
    if (!equals(this.stops_1, other.stops_1))
      return false;
    return true;
  };
  SweepGradient.prototype.hashCode = function () {
    var result = Offset__hashCode_impl_hbql41(this.center_1);
    result = imul(31, result) + hashCode(this.colors_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.stops_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  SweepGradient.prototype.toString = function () {
    var centerValue = get_isSpecified(this.center_1) ? 'center=' + new Offset_0(this.center_1) + ', ' : '';
    return 'SweepGradient(' + centerValue + ('colors=' + this.colors_1 + ', stops=' + this.stops_1 + ')');
  };
  SweepGradient.$metadata$ = classMeta('SweepGradient', undefined, undefined, undefined, undefined, ShaderBrush.prototype);
  function Canvas() {
  }
  Canvas.$metadata$ = interfaceMeta('Canvas');
  function withSaveLayer(_this__u8e3s4, bounds, paint, block) {
    try {
      _this__u8e3s4.saveLayer_f9ux7q_k$(bounds, paint);
      block();
    }finally {
      _this__u8e3s4.restore_a2id37_k$();
    }
  }
  function Canvas_0(image) {
    return ActualCanvas(image);
  }
  function _ClipOp___init__impl__pqwwy8(value) {
    return value;
  }
  function _get_value__a43j40_0($this) {
    return $this;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.Difference_1 = _ClipOp___init__impl__pqwwy8(0);
    this.Intersect_1 = _ClipOp___init__impl__pqwwy8(1);
  }
  Companion_1.prototype.get_Difference_tu92bl_k$ = function () {
    return this.Difference_1;
  };
  Companion_1.prototype.get_Intersect_ow3v69_k$ = function () {
    return this.Intersect_1;
  };
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_16() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ClipOp__toString_impl_vwrlao($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_16().Difference_1 ? 'Difference' : tmp0_subject === Companion_getInstance_16().Intersect_1 ? 'Intersect' : 'Unknown';
  }
  function ClipOp__hashCode_impl_hd6jvl($this) {
    return $this;
  }
  function ClipOp__equals_impl_g5ajel($this, other) {
    if (!(other instanceof ClipOp))
      return false;
    var tmp0_other_with_cast = other instanceof ClipOp ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function ClipOp(value) {
    Companion_getInstance_16();
    this.value_1 = value;
  }
  ClipOp.prototype.toString = function () {
    return ClipOp__toString_impl_vwrlao(this.value_1);
  };
  ClipOp.prototype.hashCode = function () {
    return ClipOp__hashCode_impl_hd6jvl(this.value_1);
  };
  ClipOp.prototype.equals = function (other) {
    return ClipOp__equals_impl_g5ajel(this.value_1, other);
  };
  ClipOp.$metadata$ = classMeta('ClipOp');
  function hsvToRgbComponent($this, n, h, s, v) {
    var k = (n + h / 60.0) % 6.0;
    var tmp = v * s;
    var tmp$ret$1;
    // Inline function 'kotlin.math.max' call
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = 4 - k;
    tmp$ret$0 = Math.min(k, tmp0_minOf, 1.0);
    var tmp1_max = tmp$ret$0;
    tmp$ret$1 = Math.max(0.0, tmp1_max);
    return v - tmp * tmp$ret$1;
  }
  function hslToRgbComponent($this, n, h, s, l) {
    var k = (n + h / 30.0) % 12.0;
    var tmp$ret$0;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = 1.0 - l;
    tmp$ret$0 = Math.min(l, tmp0_min);
    var a = s * tmp$ret$0;
    var tmp$ret$2;
    // Inline function 'kotlin.math.max' call
    var tmp$ret$1;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp1_minOf = k - 3;
    var tmp2_minOf = 9 - k;
    tmp$ret$1 = Math.min(tmp1_minOf, tmp2_minOf, 1.0);
    var tmp3_max = tmp$ret$1;
    tmp$ret$2 = Math.max(-1.0, tmp3_max);
    return l - a * tmp$ret$2;
  }
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
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    var tmp1_toInt = tmp$ret$0;
    tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_toInt).toInt_1tsl84_k$();
    var tmp3_getColorSpace = tmp$ret$1;
    tmp$ret$2 = tmp2_getColorSpace.ColorSpacesArray_1[tmp3_getColorSpace];
    return tmp$ret$2;
  }
  function Color__convert_impl_so5m8t($this, colorSpace) {
    if (colorSpace.equals(_Color___get_colorSpace__impl__jqqozk($this))) {
      return $this;
    }
    var tmp = _Color___get_colorSpace__impl__jqqozk($this);
    var connector = connect$default(tmp, colorSpace, null, 2, null);
    var color = getComponents($this);
    connector.transform_aitls9_k$(color);
    return Color_0(color[0], color[1], color[2], color[3], colorSpace);
  }
  function _Color___get_red__impl__cwrsk6($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      var tmp$ret$4;
      // Inline function 'kotlin.ULong.toFloat' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).ushr_rr8rvr_k$(48));
      var tmp2_and = tmp$ret$1;
      tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
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
      tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).ushr_rr8rvr_k$(48));
      var tmp5_and = tmp$ret$5;
      tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
      var tmp6_toShort = tmp$ret$6;
      tmp$ret$7 = _ULong___get_data__impl__fggpzb(tmp6_toShort).toShort_ja8oqn_k$();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_green__impl__bta9rs($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      var tmp$ret$4;
      // Inline function 'kotlin.ULong.toFloat' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).ushr_rr8rvr_k$(40));
      var tmp2_and = tmp$ret$1;
      tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
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
      tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).ushr_rr8rvr_k$(32));
      var tmp5_and = tmp$ret$5;
      tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
      var tmp6_toShort = tmp$ret$6;
      tmp$ret$7 = _ULong___get_data__impl__fggpzb(tmp6_toShort).toShort_ja8oqn_k$();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_blue__impl__xwez13($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      var tmp$ret$4;
      // Inline function 'kotlin.ULong.toFloat' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).ushr_rr8rvr_k$(32));
      var tmp2_and = tmp$ret$1;
      tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
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
      tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).ushr_rr8rvr_k$(16));
      var tmp5_and = tmp$ret$5;
      tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
      var tmp6_toShort = tmp$ret$6;
      tmp$ret$7 = _ULong___get_data__impl__fggpzb(tmp6_toShort).toShort_ja8oqn_k$();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_alpha__impl__wcfyv1($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      var tmp$ret$4;
      // Inline function 'kotlin.ULong.toFloat' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).ushr_rr8rvr_k$(56));
      var tmp2_and = tmp$ret$1;
      tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
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
      tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).ushr_rr8rvr_k$(6));
      var tmp5_and = tmp$ret$5;
      tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(1023, 0)))));
      var tmp6_toFloat = tmp$ret$6;
      var tmp$ret$7;
      // Inline function 'kotlin.ULong.toDouble' call
      tmp$ret$7 = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp6_toFloat));
      tmp$ret$8 = tmp$ret$7;
      tmp = tmp$ret$8 / 1023.0;
    }
    return tmp;
  }
  function Color__component1_impl_lz80qe($this) {
    return _Color___get_red__impl__cwrsk6($this);
  }
  function Color__component2_impl_mg9n4l($this) {
    return _Color___get_green__impl__bta9rs($this);
  }
  function Color__component3_impl_mxb9is($this) {
    return _Color___get_blue__impl__xwez13($this);
  }
  function Color__component4_impl_necvwz($this) {
    return _Color___get_alpha__impl__wcfyv1($this);
  }
  function Color__component5_impl_nveib6($this) {
    return _Color___get_colorSpace__impl__jqqozk($this);
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
    return 'Color(' + _Color___get_red__impl__cwrsk6($this) + ', ' + _Color___get_green__impl__bta9rs($this) + ', ' + _Color___get_blue__impl__xwez13($this) + ', ' + _Color___get_alpha__impl__wcfyv1($this) + ', ' + _Color___get_colorSpace__impl__jqqozk($this).name_1 + ')';
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.Black_1 = Color_1(new Long(-16777216, 0));
    this.DarkGray_1 = Color_1(new Long(-12303292, 0));
    this.Gray_1 = Color_1(new Long(-7829368, 0));
    this.LightGray_1 = Color_1(new Long(-3355444, 0));
    this.White_1 = Color_1(new Long(-1, 0));
    this.Red_1 = Color_1(new Long(-65536, 0));
    this.Green_1 = Color_1(new Long(-16711936, 0));
    this.Blue_1 = Color_1(new Long(-16776961, 0));
    this.Yellow_1 = Color_1(new Long(-256, 0));
    this.Cyan_1 = Color_1(new Long(-16711681, 0));
    this.Magenta_1 = Color_1(new Long(-65281, 0));
    this.Transparent_1 = Color_3(0);
    this.Unspecified_1 = Color_0(0.0, 0.0, 0.0, 0.0, ColorSpaces_getInstance().Unspecified_1);
  }
  Companion_2.prototype.get_Black_wh3yn9_k$ = function () {
    return this.Black_1;
  };
  Companion_2.prototype.get_DarkGray_gff893_k$ = function () {
    return this.DarkGray_1;
  };
  Companion_2.prototype.get_Gray_32p7wv_k$ = function () {
    return this.Gray_1;
  };
  Companion_2.prototype.get_LightGray_ivooxh_k$ = function () {
    return this.LightGray_1;
  };
  Companion_2.prototype.get_White_rvz4cb_k$ = function () {
    return this.White_1;
  };
  Companion_2.prototype.get_Red_fzly7h_k$ = function () {
    return this.Red_1;
  };
  Companion_2.prototype.get_Green_91utzz_k$ = function () {
    return this.Green_1;
  };
  Companion_2.prototype.get_Blue_ucp8js_k$ = function () {
    return this.Blue_1;
  };
  Companion_2.prototype.get_Yellow_yypdia_k$ = function () {
    return this.Yellow_1;
  };
  Companion_2.prototype.get_Cyan_5ocx2p_k$ = function () {
    return this.Cyan_1;
  };
  Companion_2.prototype.get_Magenta_a957np_k$ = function () {
    return this.Magenta_1;
  };
  Companion_2.prototype.get_Transparent_8zprqq_k$ = function () {
    return this.Transparent_1;
  };
  Companion_2.prototype.get_Unspecified_9ntdt9_k$ = function () {
    return this.Unspecified_1;
  };
  Companion_2.prototype.hsv_eajx0j_k$ = function (hue, saturation, value, alpha, colorSpace) {
    // Inline function 'kotlin.require' call
    var tmp0_require = ((0.0 <= hue ? hue <= 360.0 : false) ? 0.0 <= saturation ? saturation <= 1.0 : false : false) ? 0.0 <= value ? value <= 1.0 : false : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.Companion.hsv.<anonymous>' call
      tmp$ret$0 = 'HSV (' + hue + ', ' + saturation + ', ' + value + ') must be in range (0..360, 0..1, 0..1)';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var red = hsvToRgbComponent(this, 5, hue, saturation, value);
    var green = hsvToRgbComponent(this, 3, hue, saturation, value);
    var blue = hsvToRgbComponent(this, 1, hue, saturation, value);
    return Color_0(red, green, blue, alpha, colorSpace);
  };
  Companion_2.prototype.hsv$default_w3tbkz_k$ = function (hue, saturation, value, alpha, colorSpace, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      alpha = 1.0;
    if (!(($mask0 & 16) === 0))
      colorSpace = ColorSpaces_getInstance().Srgb_1;
    return this.hsv_eajx0j_k$(hue, saturation, value, alpha, colorSpace);
  };
  Companion_2.prototype.hsl_k9g3wz_k$ = function (hue, saturation, lightness, alpha, colorSpace) {
    // Inline function 'kotlin.require' call
    var tmp0_require = ((0.0 <= hue ? hue <= 360.0 : false) ? 0.0 <= saturation ? saturation <= 1.0 : false : false) ? 0.0 <= lightness ? lightness <= 1.0 : false : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.Companion.hsl.<anonymous>' call
      tmp$ret$0 = 'HSL (' + hue + ', ' + saturation + ', ' + lightness + ') must be in range (0..360, 0..1, 0..1)';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var red = hslToRgbComponent(this, 0, hue, saturation, lightness);
    var green = hslToRgbComponent(this, 8, hue, saturation, lightness);
    var blue = hslToRgbComponent(this, 4, hue, saturation, lightness);
    return Color_0(red, green, blue, alpha, colorSpace);
  };
  Companion_2.prototype.hsl$default_i48oj1_k$ = function (hue, saturation, lightness, alpha, colorSpace, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      alpha = 1.0;
    if (!(($mask0 & 16) === 0))
      colorSpace = ColorSpaces_getInstance().Srgb_1;
    return this.hsl_k9g3wz_k$(hue, saturation, lightness, alpha, colorSpace);
  };
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_17() {
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
    var tmp0_other_with_cast = other instanceof Color ? other.value_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Color(value) {
    Companion_getInstance_17();
    this.value_1 = value;
  }
  Color.prototype.toString = function () {
    return Color__toString_impl_hpzmaq(this.value_1);
  };
  Color.prototype.hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.value_1);
  };
  Color.prototype.equals = function (other) {
    return Color__equals_impl_k06uqz(this.value_1, other);
  };
  Color.$metadata$ = classMeta('Color');
  function takeOrElse(_this__u8e3s4, block) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(_this__u8e3s4), _Color___get_value__impl__1pls5m(Companion_getInstance_17().Unspecified_1));
    if (tmp$ret$0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = block().value_1;
    }
    return tmp;
  }
  function get_isSpecified_0(_this__u8e3s4) {
    return !equals(_Color___get_value__impl__1pls5m(_this__u8e3s4), _Color___get_value__impl__1pls5m(Companion_getInstance_17().Unspecified_1));
  }
  function toArgb(_this__u8e3s4) {
    var colorSpace = _Color___get_colorSpace__impl__jqqozk(_this__u8e3s4);
    if (colorSpace.get_isSrgb_ew666l_k$()) {
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toInt' call
      var tmp$ret$0;
      // Inline function 'kotlin.ULong.shr' call
      var tmp0_shr = _Color___get_value__impl__1pls5m(_this__u8e3s4);
      tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_shr).ushr_rr8rvr_k$(32));
      var tmp1_toInt = tmp$ret$0;
      tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_toInt).toInt_1tsl84_k$();
      return tmp$ret$1;
    }
    var color = getComponents(_this__u8e3s4);
    connect$default(colorSpace, null, null, 3, null).transform_aitls9_k$(color);
    return numberToInt(color[3] * 255.0 + 0.5) << 24 | numberToInt(color[0] * 255.0 + 0.5) << 16 | numberToInt(color[1] * 255.0 + 0.5) << 8 | numberToInt(color[2] * 255.0 + 0.5);
  }
  function Color_0(red, green, blue, alpha, colorSpace) {
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0;
    var tmp_1;
    var containsLower = colorSpace.getMinValue_7r60q4_k$(0);
    if (red <= colorSpace.getMaxValue_8bwqwu_k$(0) ? containsLower <= red : false) {
      var containsLower_0 = colorSpace.getMinValue_7r60q4_k$(1);
      tmp_1 = green <= colorSpace.getMaxValue_8bwqwu_k$(1) ? containsLower_0 <= green : false;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var containsLower_1 = colorSpace.getMinValue_7r60q4_k$(2);
      tmp_0 = blue <= colorSpace.getMaxValue_8bwqwu_k$(2) ? containsLower_1 <= blue : false;
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
    if (colorSpace.get_isSrgb_ew666l_k$()) {
      var argb = numberToInt(alpha * 255.0 + 0.5) << 24 | numberToInt(red * 255.0 + 0.5) << 16 | numberToInt(green * 255.0 + 0.5) << 8 | numberToInt(blue * 255.0 + 0.5);
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.shl' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$1;
      // Inline function 'kotlin.toULong' call
      tmp$ret$1 = _ULong___init__impl__c78o9k(toLong(argb));
      var tmp1_and = tmp$ret$1;
      tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(-1, 0)))));
      var tmp2_shl = tmp$ret$2;
      tmp$ret$3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_shl).shl_po5ip6_k$(32));
      return _Color___init__impl__r6cqi2(tmp$ret$3);
    }
    // Inline function 'kotlin.require' call
    var tmp3_require = colorSpace.get_componentCount_ffrht1_k$() === 3;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp3_require) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      tmp$ret$4 = 'Color only works with ColorSpaces with 3 components';
      var message_0 = tmp$ret$4;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var id = colorSpace.id_1;
    // Inline function 'kotlin.require' call
    Companion_getInstance_38();
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
    tmp$ret$9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp7_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
    var tmp8_shl = tmp$ret$9;
    tmp$ret$10 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp8_shl).shl_po5ip6_k$(48));
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
    tmp$ret$12 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp10_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
    var tmp11_shl = tmp$ret$12;
    tmp$ret$13 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp11_shl).shl_po5ip6_k$(32));
    var tmp13_or = tmp$ret$13;
    tmp$ret$14 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp12_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp13_or)));
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
    tmp$ret$16 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp15_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
    var tmp16_shl = tmp$ret$16;
    tmp$ret$17 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp16_shl).shl_po5ip6_k$(16));
    var tmp18_or = tmp$ret$17;
    tmp$ret$18 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp17_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp18_or)));
    var tmp21_or = tmp$ret$18;
    var tmp$ret$21;
    // Inline function 'kotlin.ULong.shl' call
    var tmp$ret$20;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$19;
    // Inline function 'kotlin.toULong' call
    tmp$ret$19 = _ULong___init__impl__c78o9k(toLong(a));
    var tmp19_and = tmp$ret$19;
    tmp$ret$20 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp19_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(1023, 0)))));
    var tmp20_shl = tmp$ret$20;
    tmp$ret$21 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp20_shl).shl_po5ip6_k$(6));
    var tmp22_or = tmp$ret$21;
    tmp$ret$22 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp21_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp22_or)));
    var tmp24_or = tmp$ret$22;
    var tmp$ret$24;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$23;
    // Inline function 'kotlin.toULong' call
    tmp$ret$23 = _ULong___init__impl__c78o9k(toLong(id));
    var tmp23_and = tmp$ret$23;
    tmp$ret$24 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp23_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    var tmp25_or = tmp$ret$24;
    tmp$ret$25 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp24_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp25_or)));
    return _Color___init__impl__r6cqi2(tmp$ret$25);
  }
  function Color$default(red, green, blue, alpha, colorSpace, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      alpha = 1.0;
    if (!(($mask0 & 16) === 0))
      colorSpace = ColorSpaces_getInstance().Srgb_1;
    return Color_0(red, green, blue, alpha, colorSpace);
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
    tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(-1, 0)))));
    var tmp1_shl = tmp$ret$1;
    tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shl).shl_po5ip6_k$(32));
    return _Color___init__impl__r6cqi2(tmp$ret$2);
  }
  function luminance(_this__u8e3s4) {
    var colorSpace = _Color___get_colorSpace__impl__jqqozk(_this__u8e3s4);
    // Inline function 'kotlin.require' call
    var tmp0_require = equals(colorSpace.model_1, Companion_getInstance_37().Rgb_1);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.luminance.<anonymous>' call
      tmp$ret$0 = 'The specified color must be encoded in an RGB color space. ' + ('The supplied color space is ' + new ColorModel(colorSpace.model_1));
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var eotf = (colorSpace instanceof Rgb ? colorSpace : THROW_CCE()).eotf_1;
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
  function Color$default_0(red, green, blue, alpha, $mask0, $handler) {
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
    tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_shl).shl_po5ip6_k$(32));
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
  Companion_3.prototype.tint_oz42r0_k$ = function (color, blendMode) {
    return actualTintColorFilter(color, blendMode);
  };
  Companion_3.prototype.tint$default_1preek_k$ = function (color, blendMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      blendMode = Companion_getInstance_14().SrcIn_1;
    return this.tint_oz42r0_k$(color, blendMode);
  };
  Companion_3.prototype.colorMatrix_16db4l_k$ = function (colorMatrix) {
    return actualColorMatrixColorFilter(colorMatrix);
  };
  Companion_3.prototype.lighting_pskwdw_k$ = function (multiply, add) {
    return actualLightingColorFilter(multiply, add);
  };
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_18() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ColorFilter(nativeColorFilter) {
    Companion_getInstance_18();
    this.nativeColorFilter_1 = nativeColorFilter;
  }
  ColorFilter.prototype.get_nativeColorFilter_tol2md_k$ = function () {
    return this.nativeColorFilter_1;
  };
  ColorFilter.$metadata$ = classMeta('ColorFilter');
  function _ColorMatrix___init__impl__3gytx1(values) {
    return values;
  }
  function _ColorMatrix___init__impl__3gytx1_0(values, $mask0, $marker) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.floatArrayOf' call
      tmp$ret$0 = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0]);
      tmp$ret$0_0 = Unit_getInstance();
      values = tmp$ret$0;
    }
    var tmp = _ColorMatrix___init__impl__3gytx1(values);
    return tmp;
  }
  function _ColorMatrix___get_values__impl__bpwpry($this) {
    return $this;
  }
  function ColorMatrix__get_impl_cdhqm3($this, row, column) {
    return _ColorMatrix___get_values__impl__bpwpry($this)[imul(row, 5) + column | 0];
  }
  function ColorMatrix__set_impl_33f5gv($this, row, column, v) {
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(row, 5) + column | 0] = v;
  }
  function ColorMatrix__reset_impl_aaa3ky($this) {
    var tmp = _ColorMatrix___get_values__impl__bpwpry($this);
    fill$default(tmp, 0.0, 0, 0, 6, null);
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[12] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[6] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[18] = 1.0;
  }
  function ColorMatrix__set_impl_33f5gv_0($this, src) {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = _ColorMatrix___get_values__impl__bpwpry(src);
    var tmp1_copyInto = _ColorMatrix___get_values__impl__bpwpry($this);
    var tmp2_copyInto = tmp0_copyInto.length;
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
    arrayCopy(tmp, tmp$ret$3, 0, 0, tmp2_copyInto);
    tmp$ret$4 = tmp1_copyInto;
  }
  function rotateInternal($this, degrees, block) {
    ColorMatrix__reset_impl_aaa3ky($this);
    var radians = degrees * get_PI() / 180.0;
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    tmp$ret$0 = Math.cos(radians);
    var cosine = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sin' call
    tmp$ret$1 = Math.sin(radians);
    var sine = tmp$ret$1;
    block(cosine, sine);
  }
  function ColorMatrix__timesAssign_impl_tpdrdo($this, colorMatrix) {
    var v00 = dot($this, $this, 0, colorMatrix, 0);
    var v01 = dot($this, $this, 0, colorMatrix, 1);
    var v02 = dot($this, $this, 0, colorMatrix, 2);
    var v03 = dot($this, $this, 0, colorMatrix, 3);
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$0 = _ColorMatrix___get_values__impl__bpwpry($this)[0];
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$1 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[4];
    var tmp_0 = tmp * tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$2 = _ColorMatrix___get_values__impl__bpwpry($this)[1];
    var tmp_1 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$3 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[9];
    var tmp_2 = tmp_0 + tmp_1 * tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$4 = _ColorMatrix___get_values__impl__bpwpry($this)[2];
    var tmp_3 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$5 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[14];
    var tmp_4 = tmp_2 + tmp_3 * tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$6 = _ColorMatrix___get_values__impl__bpwpry($this)[3];
    var tmp_5 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$7 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[19];
    var tmp_6 = tmp_4 + tmp_5 * tmp$ret$7;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$8 = _ColorMatrix___get_values__impl__bpwpry($this)[4];
    var v04 = tmp_6 + tmp$ret$8;
    var v10 = dot($this, $this, 1, colorMatrix, 0);
    var v11 = dot($this, $this, 1, colorMatrix, 1);
    var v12 = dot($this, $this, 1, colorMatrix, 2);
    var v13 = dot($this, $this, 1, colorMatrix, 3);
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$9 = _ColorMatrix___get_values__impl__bpwpry($this)[5];
    var tmp_7 = tmp$ret$9;
    var tmp$ret$10;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$10 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[4];
    var tmp_8 = tmp_7 * tmp$ret$10;
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$11 = _ColorMatrix___get_values__impl__bpwpry($this)[6];
    var tmp_9 = tmp$ret$11;
    var tmp$ret$12;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$12 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[9];
    var tmp_10 = tmp_8 + tmp_9 * tmp$ret$12;
    var tmp$ret$13;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$13 = _ColorMatrix___get_values__impl__bpwpry($this)[7];
    var tmp_11 = tmp$ret$13;
    var tmp$ret$14;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$14 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[14];
    var tmp_12 = tmp_10 + tmp_11 * tmp$ret$14;
    var tmp$ret$15;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$15 = _ColorMatrix___get_values__impl__bpwpry($this)[8];
    var tmp_13 = tmp$ret$15;
    var tmp$ret$16;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$16 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[19];
    var tmp_14 = tmp_12 + tmp_13 * tmp$ret$16;
    var tmp$ret$17;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$17 = _ColorMatrix___get_values__impl__bpwpry($this)[9];
    var v14 = tmp_14 + tmp$ret$17;
    var v20 = dot($this, $this, 2, colorMatrix, 0);
    var v21 = dot($this, $this, 2, colorMatrix, 1);
    var v22 = dot($this, $this, 2, colorMatrix, 2);
    var v23 = dot($this, $this, 2, colorMatrix, 3);
    var tmp$ret$18;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$18 = _ColorMatrix___get_values__impl__bpwpry($this)[10];
    var tmp_15 = tmp$ret$18;
    var tmp$ret$19;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$19 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[4];
    var tmp_16 = tmp_15 * tmp$ret$19;
    var tmp$ret$20;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$20 = _ColorMatrix___get_values__impl__bpwpry($this)[11];
    var tmp_17 = tmp$ret$20;
    var tmp$ret$21;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$21 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[9];
    var tmp_18 = tmp_16 + tmp_17 * tmp$ret$21;
    var tmp$ret$22;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$22 = _ColorMatrix___get_values__impl__bpwpry($this)[12];
    var tmp_19 = tmp$ret$22;
    var tmp$ret$23;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$23 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[14];
    var tmp_20 = tmp_18 + tmp_19 * tmp$ret$23;
    var tmp$ret$24;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$24 = _ColorMatrix___get_values__impl__bpwpry($this)[13];
    var tmp_21 = tmp$ret$24;
    var tmp$ret$25;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$25 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[19];
    var tmp_22 = tmp_20 + tmp_21 * tmp$ret$25;
    var tmp$ret$26;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$26 = _ColorMatrix___get_values__impl__bpwpry($this)[14];
    var v24 = tmp_22 + tmp$ret$26;
    var v30 = dot($this, $this, 3, colorMatrix, 0);
    var v31 = dot($this, $this, 3, colorMatrix, 1);
    var v32 = dot($this, $this, 3, colorMatrix, 2);
    var v33 = dot($this, $this, 3, colorMatrix, 3);
    var tmp$ret$27;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$27 = _ColorMatrix___get_values__impl__bpwpry($this)[15];
    var tmp_23 = tmp$ret$27;
    var tmp$ret$28;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$28 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[4];
    var tmp_24 = tmp_23 * tmp$ret$28;
    var tmp$ret$29;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$29 = _ColorMatrix___get_values__impl__bpwpry($this)[16];
    var tmp_25 = tmp$ret$29;
    var tmp$ret$30;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$30 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[9];
    var tmp_26 = tmp_24 + tmp_25 * tmp$ret$30;
    var tmp$ret$31;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$31 = _ColorMatrix___get_values__impl__bpwpry($this)[17];
    var tmp_27 = tmp$ret$31;
    var tmp$ret$32;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$32 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[14];
    var tmp_28 = tmp_26 + tmp_27 * tmp$ret$32;
    var tmp$ret$33;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$33 = _ColorMatrix___get_values__impl__bpwpry($this)[18];
    var tmp_29 = tmp$ret$33;
    var tmp$ret$34;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$34 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[19];
    var tmp_30 = tmp_28 + tmp_29 * tmp$ret$34;
    var tmp$ret$35;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$35 = _ColorMatrix___get_values__impl__bpwpry($this)[19];
    var v34 = tmp_30 + tmp$ret$35;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[0] = v00;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[1] = v01;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[2] = v02;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[3] = v03;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[4] = v04;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[5] = v10;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[6] = v11;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[7] = v12;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[8] = v13;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[9] = v14;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[10] = v20;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[11] = v21;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[12] = v22;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[13] = v23;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[14] = v24;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[15] = v30;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[16] = v31;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[17] = v32;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[18] = v33;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[19] = v34;
  }
  function dot($this, m1, row, m2, column) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$0 = _ColorMatrix___get_values__impl__bpwpry(m1)[imul(row, 5) + 0 | 0];
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$1 = _ColorMatrix___get_values__impl__bpwpry(m2)[0 + column | 0];
    var tmp_0 = tmp * tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$2 = _ColorMatrix___get_values__impl__bpwpry(m1)[imul(row, 5) + 1 | 0];
    var tmp_1 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$3 = _ColorMatrix___get_values__impl__bpwpry(m2)[5 + column | 0];
    var tmp_2 = tmp_0 + tmp_1 * tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$4 = _ColorMatrix___get_values__impl__bpwpry(m1)[imul(row, 5) + 2 | 0];
    var tmp_3 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$5 = _ColorMatrix___get_values__impl__bpwpry(m2)[10 + column | 0];
    var tmp_4 = tmp_2 + tmp_3 * tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$6 = _ColorMatrix___get_values__impl__bpwpry(m1)[imul(row, 5) + 3 | 0];
    var tmp_5 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$7 = _ColorMatrix___get_values__impl__bpwpry(m2)[15 + column | 0];
    return tmp_4 + tmp_5 * tmp$ret$7;
  }
  function ColorMatrix__setToSaturation_impl_j3wbeq($this, sat) {
    ColorMatrix__reset_impl_aaa3ky($this);
    var invSat = 1 - sat;
    var R = 0.213 * invSat;
    var G = 0.715 * invSat;
    var B = 0.072 * invSat;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var tmp0_set = R + sat;
    _ColorMatrix___get_values__impl__bpwpry($this)[0] = tmp0_set;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[1] = G;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[2] = B;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[5] = R;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var tmp1_set = G + sat;
    _ColorMatrix___get_values__impl__bpwpry($this)[6] = tmp1_set;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[7] = B;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[10] = R;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[11] = G;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var tmp2_set = B + sat;
    _ColorMatrix___get_values__impl__bpwpry($this)[12] = tmp2_set;
  }
  function ColorMatrix__setToScale_impl_162gnw($this, redScale, greenScale, blueScale, alphaScale) {
    ColorMatrix__reset_impl_aaa3ky($this);
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[0] = redScale;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[6] = greenScale;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[12] = blueScale;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[18] = alphaScale;
  }
  function ColorMatrix__setToRotateRed_impl_xjp2wg($this, degrees) {
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.rotateInternal' call
    ColorMatrix__reset_impl_aaa3ky($this);
    var radians = degrees * get_PI() / 180.0;
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    tmp$ret$0 = Math.cos(radians);
    var cosine = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sin' call
    tmp$ret$1 = Math.sin(radians);
    var sine = tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.setToRotateRed.<anonymous>' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[12] = cosine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[6] = cosine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[7] = sine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var tmp0_set = -sine;
    _ColorMatrix___get_values__impl__bpwpry($this)[11] = tmp0_set;
  }
  function ColorMatrix__setToRotateGreen_impl_7547ya($this, degrees) {
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.rotateInternal' call
    ColorMatrix__reset_impl_aaa3ky($this);
    var radians = degrees * get_PI() / 180.0;
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    tmp$ret$0 = Math.cos(radians);
    var cosine = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sin' call
    tmp$ret$1 = Math.sin(radians);
    var sine = tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.setToRotateGreen.<anonymous>' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[12] = cosine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[0] = cosine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var tmp0_set = -sine;
    _ColorMatrix___get_values__impl__bpwpry($this)[2] = tmp0_set;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[10] = sine;
  }
  function ColorMatrix__setToRotateBlue_impl_68t0yn($this, degrees) {
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.rotateInternal' call
    ColorMatrix__reset_impl_aaa3ky($this);
    var radians = degrees * get_PI() / 180.0;
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    tmp$ret$0 = Math.cos(radians);
    var cosine = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sin' call
    tmp$ret$1 = Math.sin(radians);
    var sine = tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.setToRotateBlue.<anonymous>' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[6] = cosine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[0] = cosine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[1] = sine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var tmp0_set = -sine;
    _ColorMatrix___get_values__impl__bpwpry($this)[5] = tmp0_set;
  }
  function ColorMatrix__convertRgbToYuv_impl_9vsur8($this) {
    ColorMatrix__reset_impl_aaa3ky($this);
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[0] = 0.299;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[1] = 0.587;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[2] = 0.114;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[5] = -0.16874;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[6] = -0.33126;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[7] = 0.5;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[10] = 0.5;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[11] = -0.41869;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[12] = -0.08131;
  }
  function ColorMatrix__convertYuvToRgb_impl_um2qre($this) {
    ColorMatrix__reset_impl_aaa3ky($this);
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[2] = 1.402;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[5] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[6] = -0.34414;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[7] = -0.71414;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[10] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[11] = 1.772;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[12] = 0.0;
  }
  function ColorMatrix__toString_impl_7jheub($this) {
    return 'ColorMatrix(values=' + toString($this) + ')';
  }
  function ColorMatrix__hashCode_impl_tanbn6($this) {
    return hashCode($this);
  }
  function ColorMatrix__equals_impl_k9m0uu($this, other) {
    if (!(other instanceof ColorMatrix_0))
      return false;
    var tmp0_other_with_cast = other instanceof ColorMatrix_0 ? other.values_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ColorMatrix_0(values) {
    this.values_1 = values;
  }
  ColorMatrix_0.prototype.toString = function () {
    return ColorMatrix__toString_impl_7jheub(this.values_1);
  };
  ColorMatrix_0.prototype.hashCode = function () {
    return ColorMatrix__hashCode_impl_tanbn6(this.values_1);
  };
  ColorMatrix_0.prototype.equals = function (other) {
    return ColorMatrix__equals_impl_k9m0uu(this.values_1, other);
  };
  ColorMatrix_0.$metadata$ = classMeta('ColorMatrix');
  function degrees(radians) {
    return 57.29578 * radians;
  }
  function get_RadiansToDegrees() {
    return RadiansToDegrees;
  }
  var RadiansToDegrees;
  function _FilterQuality___init__impl__nv51aq(value) {
    return value;
  }
  function _FilterQuality___get_value__impl__vmx58a($this) {
    return $this;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.None_1 = _FilterQuality___init__impl__nv51aq(0);
    this.Low_1 = _FilterQuality___init__impl__nv51aq(1);
    this.Medium_1 = _FilterQuality___init__impl__nv51aq(2);
    this.High_1 = _FilterQuality___init__impl__nv51aq(3);
  }
  Companion_4.prototype.get_None_8r7mce_k$ = function () {
    return this.None_1;
  };
  Companion_4.prototype.get_Low_lx4az0_k$ = function () {
    return this.Low_1;
  };
  Companion_4.prototype.get_Medium_l95upr_k$ = function () {
    return this.Medium_1;
  };
  Companion_4.prototype.get_High_utfc24_k$ = function () {
    return this.High_1;
  };
  Companion_4.$metadata$ = objectMeta('Companion');
  var Companion_instance_4;
  function Companion_getInstance_19() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function FilterQuality__toString_impl_i5cfty($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_19().None_1 ? 'None' : tmp0_subject === Companion_getInstance_19().Low_1 ? 'Low' : tmp0_subject === Companion_getInstance_19().Medium_1 ? 'Medium' : tmp0_subject === Companion_getInstance_19().High_1 ? 'High' : 'Unknown';
  }
  function FilterQuality__hashCode_impl_v4lpcb($this) {
    return $this;
  }
  function FilterQuality__equals_impl_katg2v($this, other) {
    if (!(other instanceof FilterQuality))
      return false;
    var tmp0_other_with_cast = other instanceof FilterQuality ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function FilterQuality(value) {
    Companion_getInstance_19();
    this.value_1 = value;
  }
  FilterQuality.prototype.toString = function () {
    return FilterQuality__toString_impl_i5cfty(this.value_1);
  };
  FilterQuality.prototype.hashCode = function () {
    return FilterQuality__hashCode_impl_v4lpcb(this.value_1);
  };
  FilterQuality.prototype.equals = function (other) {
    return FilterQuality__equals_impl_katg2v(this.value_1, other);
  };
  FilterQuality.$metadata$ = classMeta('FilterQuality');
  function _get_One__e5trt7($this) {
    return $this.One_1;
  }
  function _get_NegativeOne__yf0cgw($this) {
    return $this.NegativeOne_1;
  }
  function _get_FP16_SIGN_SHIFT__s6944f($this) {
    return $this.FP16_SIGN_SHIFT_1;
  }
  function _get_FP16_SIGN_MASK__x2ykk3($this) {
    return $this.FP16_SIGN_MASK_1;
  }
  function _get_FP16_EXPONENT_SHIFT__eyg8q7($this) {
    return $this.FP16_EXPONENT_SHIFT_1;
  }
  function _get_FP16_EXPONENT_MASK__k8fogx($this) {
    return $this.FP16_EXPONENT_MASK_1;
  }
  function _get_FP16_SIGNIFICAND_MASK__ngumxz($this) {
    return $this.FP16_SIGNIFICAND_MASK_1;
  }
  function _get_FP16_EXPONENT_BIAS__keco9a($this) {
    return $this.FP16_EXPONENT_BIAS_1;
  }
  function _get_FP16_COMBINED__cpsvbw($this) {
    return $this.FP16_COMBINED_1;
  }
  function _get_FP16_EXPONENT_MAX__fdwxfx($this) {
    return $this.FP16_EXPONENT_MAX_1;
  }
  function _get_FP32_SIGN_SHIFT__phiacl($this) {
    return $this.FP32_SIGN_SHIFT_1;
  }
  function _get_FP32_EXPONENT_SHIFT__yiiezt($this) {
    return $this.FP32_EXPONENT_SHIFT_1;
  }
  function _get_FP32_EXPONENT_MASK__cq9esb($this) {
    return $this.FP32_EXPONENT_MASK_1;
  }
  function _get_FP32_SIGNIFICAND_MASK__ivg64z($this) {
    return $this.FP32_SIGNIFICAND_MASK_1;
  }
  function _get_FP32_EXPONENT_BIAS__cw6eko($this) {
    return $this.FP32_EXPONENT_BIAS_1;
  }
  function _get_FP32_QNAN_MASK__c2hda8($this) {
    return $this.FP32_QNAN_MASK_1;
  }
  function _get_FP32_DENORMAL_MAGIC__or798b($this) {
    return $this.FP32_DENORMAL_MAGIC_1;
  }
  function _get_FP32_DENORMAL_FLOAT__rwbx3e($this) {
    return $this.FP32_DENORMAL_FLOAT_1;
  }
  function toCompareValue($this, value) {
    var tmp;
    if (!((value & 32768) === 0)) {
      tmp = 32768 - (value & 65535) | 0;
    } else {
      tmp = value & 65535;
    }
    return tmp;
  }
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
    var tmp = _Float16___init__impl__fckrew(floatToHalf(Companion_getInstance_20(), value));
    return tmp;
  }
  function _Float16___init__impl__fckrew_1(value) {
    var tmp = _Float16___init__impl__fckrew_0(value);
    return tmp;
  }
  function Float16__toByte_impl_mggro7($this) {
    return toByte(numberToInt(Float16__toFloat_impl_6i8dal($this)));
  }
  function Float16__toShort_impl_lt4jwz($this) {
    return toShort(numberToInt(Float16__toFloat_impl_6i8dal($this)));
  }
  function Float16__toInt_impl_6odjmi($this) {
    return numberToInt(Float16__toFloat_impl_6i8dal($this));
  }
  function Float16__toLong_impl_dl0d11($this) {
    return numberToLong(Float16__toFloat_impl_6i8dal($this));
  }
  function Float16__toFloat_impl_6i8dal($this) {
    var bits = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    Companion_getInstance_20();
    var s = bits & 32768;
    Companion_getInstance_20();
    var tmp = bits >>> 10 | 0;
    Companion_getInstance_20();
    var e = tmp & 31;
    Companion_getInstance_20();
    var m = bits & 1023;
    var outE = 0;
    var outM = 0;
    if (e === 0) {
      if (!(m === 0)) {
        var tmp$ret$0;
        // Inline function 'kotlin.fromBits' call
        var tmp0_fromBits = FloatCompanionObject_getInstance();
        Companion_getInstance_20();
        var tmp1_fromBits = 1056964608 + m | 0;
        tmp$ret$0 = floatFromBits(tmp1_fromBits);
        var o = tmp$ret$0;
        o = o - Companion_getInstance_20().FP32_DENORMAL_FLOAT_1;
        return s === 0 ? o : -o;
      }
    } else {
      outM = m << 13;
      if (e === 31) {
        outE = 255;
        if (!(outM === 0)) {
          var tmp_0 = outM;
          Companion_getInstance_20();
          outM = tmp_0 | 4194304;
        }
      } else {
        Companion_getInstance_20();
        var tmp_1 = e - 15 | 0;
        Companion_getInstance_20();
        outE = tmp_1 + 127 | 0;
      }
    }
    var tmp_2 = s << 16;
    var tmp_3 = outE;
    Companion_getInstance_20();
    var out = tmp_2 | tmp_3 << 23 | outM;
    var tmp$ret$1;
    // Inline function 'kotlin.fromBits' call
    var tmp2_fromBits = FloatCompanionObject_getInstance();
    tmp$ret$1 = floatFromBits(out);
    return tmp$ret$1;
  }
  function Float16__toDouble_impl_915zuo($this) {
    return Float16__toFloat_impl_6i8dal($this);
  }
  function Float16__toBits_impl_k7yqp7($this) {
    var tmp;
    if (Float16__isNaN_impl_8e8jh($this)) {
      tmp = _Float16___get_halfValue__impl__89tmwx(Companion_getInstance_20().NaN_1);
    } else {
      tmp = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    }
    return tmp;
  }
  function Float16__toRawBits_impl_4w2cf9($this) {
    return _Float16___get_halfValue__impl__89tmwx($this) & 65535;
  }
  function Float16__toString_impl_at3wqo($this) {
    return Float16__toFloat_impl_6i8dal($this).toString();
  }
  function Float16__compareTo_impl_vr2ku($this, other) {
    if (Float16__isNaN_impl_8e8jh($this)) {
      return Float16__isNaN_impl_8e8jh(other) ? 0 : 1;
    } else if (Float16__isNaN_impl_8e8jh(other)) {
      return -1;
    }
    return compareTo(toCompareValue(Companion_getInstance_20(), _Float16___get_halfValue__impl__89tmwx($this)), toCompareValue(Companion_getInstance_20(), _Float16___get_halfValue__impl__89tmwx(other)));
  }
  function Float16__compareTo_impl_vr2ku_0($this, other) {
    var tmp = $this.halfValue_1;
    return Float16__compareTo_impl_vr2ku(tmp, other instanceof Float16 ? other.halfValue_1 : THROW_CCE());
  }
  function _Float16___get_sign__impl__t10b9g($this) {
    if (Float16__isNaN_impl_8e8jh($this)) {
      return Companion_getInstance_20().NaN_1;
    }
    if (Float16__compareTo_impl_vr2ku($this, Companion_getInstance_20().NegativeZero_1) < 0)
      return Companion_getInstance_20().NegativeOne_1;
    else if (Float16__compareTo_impl_vr2ku($this, Companion_getInstance_20().PositiveZero_1) > 0)
      return Companion_getInstance_20().One_1;
    else
      return $this;
  }
  function Float16__withSign_impl_b0tr55($this, sign) {
    var tmp = _Float16___get_halfValue__impl__89tmwx(sign);
    Companion_getInstance_20();
    var tmp_0 = tmp & 32768;
    var tmp_1 = _Float16___get_halfValue__impl__89tmwx($this);
    Companion_getInstance_20();
    return _Float16___init__impl__fckrew(toShort(tmp_0 | tmp_1 & 32767));
  }
  function Float16__absoluteValue_impl_nv6ulo($this) {
    var tmp = _Float16___get_halfValue__impl__89tmwx($this);
    Companion_getInstance_20();
    return _Float16___init__impl__fckrew(toShort(tmp & 32767));
  }
  function Float16__round_impl_4qwlz4($this) {
    var bits = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    var e = bits & 32767;
    var result = bits;
    if (e < 15360) {
      var tmp = result;
      Companion_getInstance_20();
      result = tmp & 32768;
      result = result | 15360 & (e >= 14336 ? 65535 : 0);
    } else if (e < 25600) {
      e = 25 - (e >> 10) | 0;
      var mask = (1 << e) - 1 | 0;
      result = result + (1 << (e - 1 | 0)) | 0;
      result = result & ~mask;
    }
    return _Float16___init__impl__fckrew(toShort(result));
  }
  function Float16__ceil_impl_6fo2k9($this) {
    var bits = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    var e = bits & 32767;
    var result = bits;
    if (e < 15360) {
      var tmp = result;
      Companion_getInstance_20();
      result = tmp & 32768;
      result = result | 15360 & (-(~(bits >> 15) & (!(e === 0) ? 1 : 0)) | 0);
    } else if (e < 25600) {
      e = 25 - (e >> 10) | 0;
      var mask = (1 << e) - 1 | 0;
      result = result + (mask & ((bits >> 15) - 1 | 0)) | 0;
      result = result & ~mask;
    }
    return _Float16___init__impl__fckrew(toShort(result));
  }
  function Float16__floor_impl_rpasqm($this) {
    var bits = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    var e = bits & 32767;
    var result = bits;
    if (e < 15360) {
      var tmp = result;
      Companion_getInstance_20();
      result = tmp & 32768;
      result = result | 15360 & (bits > 32768 ? 65535 : 0);
    } else if (e < 25600) {
      e = 25 - (e >> 10) | 0;
      var mask = (1 << e) - 1 | 0;
      result = result + (mask & (-(bits >> 15) | 0)) | 0;
      result = result & ~mask;
    }
    return _Float16___init__impl__fckrew(toShort(result));
  }
  function Float16__trunc_impl_ud66ce($this) {
    var bits = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    var e = bits & 32767;
    var result = bits;
    if (e < 15360) {
      var tmp = result;
      Companion_getInstance_20();
      result = tmp & 32768;
    } else if (e < 25600) {
      e = 25 - (e >> 10) | 0;
      var mask = (1 << e) - 1 | 0;
      result = result & ~mask;
    }
    return _Float16___init__impl__fckrew(toShort(result));
  }
  function _Float16___get_exponent__impl__3tixn6($this) {
    var tmp = _Float16___get_halfValue__impl__89tmwx($this);
    Companion_getInstance_20();
    var tmp_0 = tmp >>> 10 | 0;
    Companion_getInstance_20();
    var tmp_1 = tmp_0 & 31;
    Companion_getInstance_20();
    return tmp_1 - 15 | 0;
  }
  function _Float16___get_significand__impl__ku8yuy($this) {
    var tmp = _Float16___get_halfValue__impl__89tmwx($this);
    Companion_getInstance_20();
    return tmp & 1023;
  }
  function Float16__isNaN_impl_8e8jh($this) {
    var tmp = _Float16___get_halfValue__impl__89tmwx($this);
    Companion_getInstance_20();
    var tmp_0 = tmp & 32767;
    Companion_getInstance_20();
    return tmp_0 > 31744;
  }
  function Float16__isInfinite_impl_9h5mgi($this) {
    var tmp = _Float16___get_halfValue__impl__89tmwx($this);
    Companion_getInstance_20();
    var tmp_0 = tmp & 32767;
    Companion_getInstance_20();
    return tmp_0 === 31744;
  }
  function Float16__isFinite_impl_8t6ust($this) {
    var tmp = _Float16___get_halfValue__impl__89tmwx($this);
    Companion_getInstance_20();
    var tmp_0 = tmp & 32767;
    Companion_getInstance_20();
    return !(tmp_0 === 31744);
  }
  function Float16__isNormalized_impl_l312k5($this) {
    var tmp;
    var tmp_0 = _Float16___get_halfValue__impl__89tmwx($this);
    Companion_getInstance_20();
    if (!((tmp_0 & 31744) === 0)) {
      var tmp_1 = _Float16___get_halfValue__impl__89tmwx($this);
      Companion_getInstance_20();
      var tmp_2 = tmp_1 & 31744;
      Companion_getInstance_20();
      tmp = !(tmp_2 === 31744);
    } else {
      tmp = false;
    }
    return tmp;
  }
  function Float16__toHexString_impl_o1d02l($this) {
    var o = StringBuilder_init_$Create$();
    var bits = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    Companion_getInstance_20();
    var s = bits >>> 15 | 0;
    Companion_getInstance_20();
    var tmp = bits >>> 10 | 0;
    Companion_getInstance_20();
    var e = tmp & 31;
    Companion_getInstance_20();
    var m = bits & 1023;
    if (e === 31) {
      if (m === 0) {
        if (!(s === 0)) {
          o.append_t8oh9e_k$(_Char___init__impl__6a9atx(45));
        }
        o.append_ssq29y_k$('Infinity');
      } else {
        o.append_ssq29y_k$('NaN');
      }
    } else {
      if (s === 1) {
        o.append_t8oh9e_k$(_Char___init__impl__6a9atx(45));
      }
      if (e === 0) {
        if (m === 0) {
          o.append_ssq29y_k$('0x0.0p0');
        } else {
          o.append_ssq29y_k$('0x0.');
          var significand = toString_0(m, 16);
          var tmp$ret$1;
          // Inline function 'kotlin.text.replaceFirst' call
          var tmp$ret$0;
          // Inline function 'kotlin.text.toRegex' call
          tmp$ret$0 = Regex_init_$Create$('0{2,}$');
          var tmp0_replaceFirst = tmp$ret$0;
          tmp$ret$1 = tmp0_replaceFirst.replaceFirst_hwe6o0_k$(significand, '');
          o.append_ssq29y_k$(tmp$ret$1);
          o.append_ssq29y_k$('p-14');
        }
      } else {
        o.append_ssq29y_k$('0x1.');
        var significand_0 = toString_0(m, 16);
        var tmp$ret$3;
        // Inline function 'kotlin.text.replaceFirst' call
        var tmp$ret$2;
        // Inline function 'kotlin.text.toRegex' call
        tmp$ret$2 = Regex_init_$Create$('0{2,}$');
        var tmp1_replaceFirst = tmp$ret$2;
        tmp$ret$3 = tmp1_replaceFirst.replaceFirst_hwe6o0_k$(significand_0, '');
        o.append_ssq29y_k$(tmp$ret$3);
        o.append_t8oh9e_k$(_Char___init__impl__6a9atx(112));
        Companion_getInstance_20();
        o.append_ssq29y_k$((e - 15 | 0).toString());
      }
    }
    return o.toString();
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.Size_1 = 16;
    this.Epsilon_1 = _Float16___init__impl__fckrew(5120);
    this.MaxExponent_1 = 15;
    this.MinExponent_1 = -14;
    this.LowestValue_1 = _Float16___init__impl__fckrew(-1025);
    this.MaxValue_1 = _Float16___init__impl__fckrew(31743);
    this.MinNormal_1 = _Float16___init__impl__fckrew(1024);
    this.MinValue_1 = _Float16___init__impl__fckrew(1);
    this.NaN_1 = _Float16___init__impl__fckrew(32256);
    this.NegativeInfinity_1 = _Float16___init__impl__fckrew(-1024);
    this.NegativeZero_1 = _Float16___init__impl__fckrew(-32768);
    this.PositiveInfinity_1 = _Float16___init__impl__fckrew(31744);
    this.PositiveZero_1 = _Float16___init__impl__fckrew(0);
    this.One_1 = _Float16___init__impl__fckrew_0(1.0);
    this.NegativeOne_1 = _Float16___init__impl__fckrew_0(-1.0);
    this.FP16_SIGN_SHIFT_1 = 15;
    this.FP16_SIGN_MASK_1 = 32768;
    this.FP16_EXPONENT_SHIFT_1 = 10;
    this.FP16_EXPONENT_MASK_1 = 31;
    this.FP16_SIGNIFICAND_MASK_1 = 1023;
    this.FP16_EXPONENT_BIAS_1 = 15;
    this.FP16_COMBINED_1 = 32767;
    this.FP16_EXPONENT_MAX_1 = 31744;
    this.FP32_SIGN_SHIFT_1 = 31;
    this.FP32_EXPONENT_SHIFT_1 = 23;
    this.FP32_EXPONENT_MASK_1 = 255;
    this.FP32_SIGNIFICAND_MASK_1 = 8388607;
    this.FP32_EXPONENT_BIAS_1 = 127;
    this.FP32_QNAN_MASK_1 = 4194304;
    this.FP32_DENORMAL_MAGIC_1 = 1056964608;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = 1056964608;
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    tmp.FP32_DENORMAL_FLOAT_1 = tmp$ret$0;
  }
  Companion_5.prototype.get_Size_wo9w8a_k$ = function () {
    return this.Size_1;
  };
  Companion_5.prototype.get_Epsilon_uqs4fs_k$ = function () {
    return this.Epsilon_1;
  };
  Companion_5.prototype.get_MaxExponent_rspx06_k$ = function () {
    return this.MaxExponent_1;
  };
  Companion_5.prototype.get_MinExponent_w12emw_k$ = function () {
    return this.MinExponent_1;
  };
  Companion_5.prototype.get_LowestValue_trry71_k$ = function () {
    return this.LowestValue_1;
  };
  Companion_5.prototype.get_MaxValue_n7sqoz_k$ = function () {
    return this.MaxValue_1;
  };
  Companion_5.prototype.get_MinNormal_5b73h3_k$ = function () {
    return this.MinNormal_1;
  };
  Companion_5.prototype.get_MinValue_webzhr_k$ = function () {
    return this.MinValue_1;
  };
  Companion_5.prototype.get_NaN_11glfr_k$ = function () {
    return this.NaN_1;
  };
  Companion_5.prototype.get_NegativeInfinity_d523fx_k$ = function () {
    return this.NegativeInfinity_1;
  };
  Companion_5.prototype.get_NegativeZero_isdqb1_k$ = function () {
    return this.NegativeZero_1;
  };
  Companion_5.prototype.get_PositiveInfinity_6gf60h_k$ = function () {
    return this.PositiveInfinity_1;
  };
  Companion_5.prototype.get_PositiveZero_op9tfz_k$ = function () {
    return this.PositiveZero_1;
  };
  Companion_5.$metadata$ = objectMeta('Companion');
  var Companion_instance_5;
  function Companion_getInstance_20() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Float16__hashCode_impl_ay2027($this) {
    return $this;
  }
  function Float16__equals_impl_7m8a8d($this, other) {
    if (!(other instanceof Float16))
      return false;
    var tmp0_other_with_cast = other instanceof Float16 ? other.halfValue_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function Float16(halfValue) {
    Companion_getInstance_20();
    this.halfValue_1 = halfValue;
  }
  Float16.prototype.toString = function () {
    return Float16__toString_impl_at3wqo(this.halfValue_1);
  };
  Float16.prototype.compareTo_pe5tm2_k$ = function (other) {
    return Float16__compareTo_impl_vr2ku(this.halfValue_1, other);
  };
  Float16.prototype.compareTo_6thzaj_k$ = function (other) {
    return Float16__compareTo_impl_vr2ku_0(this, other);
  };
  Float16.prototype.hashCode = function () {
    return Float16__hashCode_impl_ay2027(this.halfValue_1);
  };
  Float16.prototype.equals = function (other) {
    return Float16__equals_impl_7m8a8d(this.halfValue_1, other);
  };
  Float16.$metadata$ = classMeta('Float16', [Comparable]);
  function Companion_6() {
    Companion_instance_6 = this;
  }
  Companion_6.$metadata$ = objectMeta('Companion');
  var Companion_instance_6;
  function Companion_getInstance_21() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function ImageBitmap() {
    Companion_getInstance_21();
  }
  ImageBitmap.$metadata$ = interfaceMeta('ImageBitmap');
  function _ImageBitmapConfig___init__impl__wfx9yl(value) {
    return value;
  }
  function _ImageBitmapConfig___get_value__impl__fqx4u7($this) {
    return $this;
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.Argb8888__1 = _ImageBitmapConfig___init__impl__wfx9yl(0);
    this.Alpha8__1 = _ImageBitmapConfig___init__impl__wfx9yl(1);
    this.Rgb565__1 = _ImageBitmapConfig___init__impl__wfx9yl(2);
    this.F16__1 = _ImageBitmapConfig___init__impl__wfx9yl(3);
    this.Gpu_1 = _ImageBitmapConfig___init__impl__wfx9yl(4);
  }
  Companion_7.prototype.get_Argb8888_tpu17z_k$ = function () {
    return this.Argb8888__1;
  };
  Companion_7.prototype.get_Alpha8_zceb6n_k$ = function () {
    return this.Alpha8__1;
  };
  Companion_7.prototype.get_Rgb565_i09itw_k$ = function () {
    return this.Rgb565__1;
  };
  Companion_7.prototype.get_F16_f3achu_k$ = function () {
    return this.F16__1;
  };
  Companion_7.prototype.get_Gpu_p1fzpd_k$ = function () {
    return this.Gpu_1;
  };
  Companion_7.$metadata$ = objectMeta('Companion');
  var Companion_instance_7;
  function Companion_getInstance_22() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function ImageBitmapConfig__toString_impl_dfv42d($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_22().Argb8888__1 ? 'Argb8888' : tmp0_subject === Companion_getInstance_22().Alpha8__1 ? 'Alpha8' : tmp0_subject === Companion_getInstance_22().Rgb565__1 ? 'Rgb565' : tmp0_subject === Companion_getInstance_22().F16__1 ? 'F16' : tmp0_subject === Companion_getInstance_22().Gpu_1 ? 'Gpu' : 'Unknown';
  }
  function ImageBitmapConfig__hashCode_impl_8basqi($this) {
    return $this;
  }
  function ImageBitmapConfig__equals_impl_hqcsv2($this, other) {
    if (!(other instanceof ImageBitmapConfig))
      return false;
    var tmp0_other_with_cast = other instanceof ImageBitmapConfig ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function ImageBitmapConfig(value) {
    Companion_getInstance_22();
    this.value_1 = value;
  }
  ImageBitmapConfig.prototype.toString = function () {
    return ImageBitmapConfig__toString_impl_dfv42d(this.value_1);
  };
  ImageBitmapConfig.prototype.hashCode = function () {
    return ImageBitmapConfig__hashCode_impl_8basqi(this.value_1);
  };
  ImageBitmapConfig.prototype.equals = function (other) {
    return ImageBitmapConfig__equals_impl_hqcsv2(this.value_1, other);
  };
  ImageBitmapConfig.$metadata$ = classMeta('ImageBitmapConfig');
  function ImageBitmap_0(width, height, config, hasAlpha, colorSpace) {
    return ActualImageBitmap(width, height, config, hasAlpha, colorSpace);
  }
  function ImageBitmap$default(width, height, config, hasAlpha, colorSpace, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      config = Companion_getInstance_22().Argb8888__1;
    if (!(($mask0 & 8) === 0))
      hasAlpha = true;
    if (!(($mask0 & 16) === 0))
      colorSpace = ColorSpaces_getInstance().Srgb_1;
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
    var p0 = Matrix__map_impl_7meu7m($this, Offset(rect.left_1, rect.top_1));
    var p1 = Matrix__map_impl_7meu7m($this, Offset(rect.left_1, rect.bottom_1));
    var p3 = Matrix__map_impl_7meu7m($this, Offset(rect.right_1, rect.top_1));
    var p4 = Matrix__map_impl_7meu7m($this, Offset(rect.right_1, rect.bottom_1));
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
    var left = tmp$ret$2;
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
    var top = tmp$ret$5;
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
    var right = tmp$ret$8;
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
    var bottom = tmp$ret$11;
    return new Rect(left, top, right, bottom);
  }
  function Matrix__map_impl_7meu7m_1($this, rect) {
    var p0 = Matrix__map_impl_7meu7m($this, Offset(rect.left_1, rect.top_1));
    var p1 = Matrix__map_impl_7meu7m($this, Offset(rect.left_1, rect.bottom_1));
    var p3 = Matrix__map_impl_7meu7m($this, Offset(rect.right_1, rect.top_1));
    var p4 = Matrix__map_impl_7meu7m($this, Offset(rect.right_1, rect.bottom_1));
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
    tmp.left_1 = tmp$ret$2;
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
    tmp_0.top_1 = tmp$ret$5;
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
    tmp_1.right_1 = tmp$ret$8;
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
    tmp_2.bottom_1 = tmp$ret$11;
  }
  function Matrix__timesAssign_impl_oas521($this, m) {
    var v00 = dot_0($this, 0, m, 0);
    var v01 = dot_0($this, 0, m, 1);
    var v02 = dot_0($this, 0, m, 2);
    var v03 = dot_0($this, 0, m, 3);
    var v10 = dot_0($this, 1, m, 0);
    var v11 = dot_0($this, 1, m, 1);
    var v12 = dot_0($this, 1, m, 2);
    var v13 = dot_0($this, 1, m, 3);
    var v20 = dot_0($this, 2, m, 0);
    var v21 = dot_0($this, 2, m, 1);
    var v22 = dot_0($this, 2, m, 2);
    var v23 = dot_0($this, 2, m, 3);
    var v30 = dot_0($this, 3, m, 0);
    var v31 = dot_0($this, 3, m, 1);
    var v32 = dot_0($this, 3, m, 2);
    var v33 = dot_0($this, 3, m, 3);
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
  function Companion_8() {
    Companion_instance_8 = this;
    this.ScaleX_1 = 0;
    this.SkewY_1 = 1;
    this.Perspective0__1 = 3;
    this.SkewX_1 = 4;
    this.ScaleY_1 = 5;
    this.Perspective1__1 = 7;
    this.ScaleZ_1 = 10;
    this.TranslateX_1 = 12;
    this.TranslateY_1 = 13;
    this.TranslateZ_1 = 14;
    this.Perspective2__1 = 15;
  }
  Companion_8.prototype.get_ScaleX_48mlbr_k$ = function () {
    return this.ScaleX_1;
  };
  Companion_8.prototype.get_SkewY_igyudi_k$ = function () {
    return this.SkewY_1;
  };
  Companion_8.prototype.get_Perspective0_s6kzs3_k$ = function () {
    return this.Perspective0__1;
  };
  Companion_8.prototype.get_SkewX_igyudh_k$ = function () {
    return this.SkewX_1;
  };
  Companion_8.prototype.get_ScaleY_48mlbs_k$ = function () {
    return this.ScaleY_1;
  };
  Companion_8.prototype.get_Perspective1_s6kzs2_k$ = function () {
    return this.Perspective1__1;
  };
  Companion_8.prototype.get_ScaleZ_48mlbt_k$ = function () {
    return this.ScaleZ_1;
  };
  Companion_8.prototype.get_TranslateX_folfnx_k$ = function () {
    return this.TranslateX_1;
  };
  Companion_8.prototype.get_TranslateY_folfnw_k$ = function () {
    return this.TranslateY_1;
  };
  Companion_8.prototype.get_TranslateZ_folfnv_k$ = function () {
    return this.TranslateZ_1;
  };
  Companion_8.prototype.get_Perspective2_s6kzs1_k$ = function () {
    return this.Perspective2__1;
  };
  Companion_8.$metadata$ = objectMeta('Companion');
  var Companion_instance_8;
  function Companion_getInstance_23() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Matrix__hashCode_impl_s9ntm9($this) {
    return hashCode($this);
  }
  function Matrix__equals_impl_g5p8p9($this, other) {
    if (!(other instanceof Matrix))
      return false;
    var tmp0_other_with_cast = other instanceof Matrix ? other.values_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Matrix(values) {
    Companion_getInstance_23();
    this.values_1 = values;
  }
  Matrix.prototype.toString = function () {
    return Matrix__toString_impl_l0abk0(this.values_1);
  };
  Matrix.prototype.hashCode = function () {
    return Matrix__hashCode_impl_s9ntm9(this.values_1);
  };
  Matrix.prototype.equals = function (other) {
    return Matrix__equals_impl_g5p8p9(this.values_1, other);
  };
  Matrix.$metadata$ = classMeta('Matrix');
  function dot_0(m1, row, m2, column) {
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
    this.rect_1 = rect;
  }
  Rectangle.prototype.get_rect_wotlbh_k$ = function () {
    return this.rect_1;
  };
  Rectangle.prototype.get_bounds_bj99ku_k$ = function () {
    return this.rect_1;
  };
  Rectangle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rectangle))
      return false;
    if (!this.rect_1.equals(other.rect_1))
      return false;
    return true;
  };
  Rectangle.prototype.hashCode = function () {
    return this.rect_1.hashCode();
  };
  Rectangle.$metadata$ = classMeta('Rectangle', undefined, undefined, undefined, undefined, Outline.prototype);
  function Rounded(roundRect) {
    Outline.call(this);
    this.roundRect_1 = roundRect;
    var tmp = this;
    var tmp_0;
    if (!hasSameCornerRadius(this.roundRect_1)) {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Path_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.Rounded.<anonymous>' call
      tmp0_apply.addRoundRect_kr3fpw_k$(this.roundRect_1);
      tmp$ret$0 = tmp0_apply;
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = null;
    }
    tmp.roundRectPath_1 = tmp_0;
  }
  Rounded.prototype.get_roundRect_8fhall_k$ = function () {
    return this.roundRect_1;
  };
  Rounded.prototype.get_roundRectPath_kvhz1q_k$ = function () {
    return this.roundRectPath_1;
  };
  Rounded.prototype.get_bounds_bj99ku_k$ = function () {
    return get_boundingRect(this.roundRect_1);
  };
  Rounded.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rounded))
      return false;
    if (!this.roundRect_1.equals(other.roundRect_1))
      return false;
    return true;
  };
  Rounded.prototype.hashCode = function () {
    return this.roundRect_1.hashCode();
  };
  Rounded.$metadata$ = classMeta('Rounded', undefined, undefined, undefined, undefined, Outline.prototype);
  function Generic(path) {
    Outline.call(this);
    this.path_1 = path;
  }
  Generic.prototype.get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  Generic.prototype.get_bounds_bj99ku_k$ = function () {
    return this.path_1.getBounds_568lnv_k$();
  };
  Generic.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Generic))
      return false;
    if (!equals(this.path_1, other.path_1))
      return false;
    return true;
  };
  Generic.prototype.hashCode = function () {
    return hashCode(this.path_1);
  };
  Generic.$metadata$ = classMeta('Generic', undefined, undefined, undefined, undefined, Outline.prototype);
  function Outline() {
  }
  Outline.$metadata$ = classMeta('Outline');
  function hasSameCornerRadius(_this__u8e3s4) {
    var sameRadiusX = (_CornerRadius___get_x__impl__1594cn(_this__u8e3s4.bottomLeftCornerRadius_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.bottomRightCornerRadius_1) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.bottomRightCornerRadius_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.topRightCornerRadius_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.topRightCornerRadius_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.topLeftCornerRadius_1) : false;
    var sameRadiusY = (_CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.bottomLeftCornerRadius_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.bottomRightCornerRadius_1) ? _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.bottomRightCornerRadius_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.topRightCornerRadius_1) : false) ? _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.topRightCornerRadius_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.topLeftCornerRadius_1) : false;
    return sameRadiusX ? sameRadiusY : false;
  }
  function drawOutline(_this__u8e3s4, outline, color, alpha, style, colorFilter, blendMode) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp0_subject = outline;
    var tmp;
    if (tmp0_subject instanceof Rectangle) {
      var tmp0__anonymous__q1qw7t = outline.rect_1;
      _this__u8e3s4.drawRect_srg7q1_k$(color, topLeft(tmp0__anonymous__q1qw7t), size(tmp0__anonymous__q1qw7t), alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      if (tmp0_subject instanceof Rounded) {
        var path = outline.roundRectPath_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.drawPath_vpl0ok_k$(path, color, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        } else {
          var tmp1__anonymous__uwfjfc = outline.roundRect_1;
          var radius = _CornerRadius___get_x__impl__1594cn(tmp1__anonymous__uwfjfc.bottomLeftCornerRadius_1);
          var tmp0_topLeft = topLeft_0(tmp1__anonymous__uwfjfc);
          var tmp1_size = size_0(tmp1__anonymous__uwfjfc);
          var tmp2_cornerRadius = CornerRadius$default(radius, 0.0, 2, null);
          _this__u8e3s4.drawRoundRect_q7amlu_k$(color, tmp0_topLeft, tmp1_size, tmp2_cornerRadius, style, alpha, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        if (tmp0_subject instanceof Generic) {
          var tmp2__anonymous__z9zvc9 = outline.path_1;
          _this__u8e3s4.drawPath_vpl0ok_k$(tmp2__anonymous__z9zvc9, color, alpha, style, colorFilter, blendMode);
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
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    return drawOutline(_this__u8e3s4, outline, color, alpha, style, colorFilter, blendMode);
  }
  function drawOutline_0(_this__u8e3s4, outline, brush, alpha, style, colorFilter, blendMode) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp0_subject = outline;
    var tmp;
    if (tmp0_subject instanceof Rectangle) {
      var tmp0__anonymous__q1qw7t = outline.rect_1;
      _this__u8e3s4.drawRect_4jm64w_k$(brush, topLeft(tmp0__anonymous__q1qw7t), size(tmp0__anonymous__q1qw7t), alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      if (tmp0_subject instanceof Rounded) {
        var path = outline.roundRectPath_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.drawPath_vsb9f_k$(path, brush, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        } else {
          var tmp1__anonymous__uwfjfc = outline.roundRect_1;
          var radius = _CornerRadius___get_x__impl__1594cn(tmp1__anonymous__uwfjfc.bottomLeftCornerRadius_1);
          var tmp_1 = topLeft_0(tmp1__anonymous__uwfjfc);
          var tmp_2 = size_0(tmp1__anonymous__uwfjfc);
          _this__u8e3s4.drawRoundRect_nkvmol_k$(brush, tmp_1, tmp_2, CornerRadius$default(radius, 0.0, 2, null), alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        if (tmp0_subject instanceof Generic) {
          var tmp2__anonymous__z9zvc9 = outline.path_1;
          _this__u8e3s4.drawPath_vsb9f_k$(tmp2__anonymous__z9zvc9, brush, alpha, style, colorFilter, blendMode);
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
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    return drawOutline_0(_this__u8e3s4, outline, brush, alpha, style, colorFilter, blendMode);
  }
  function drawOutlineHelper(_this__u8e3s4, outline, drawRectBlock, drawRoundedRectBlock, drawPathBlock) {
    var tmp0_subject = outline;
    var tmp;
    if (tmp0_subject instanceof Rectangle) {
      tmp = drawRectBlock(_this__u8e3s4, outline.rect_1);
    } else {
      if (tmp0_subject instanceof Rounded) {
        var path = outline.roundRectPath_1;
        var tmp_0;
        if (!(path == null)) {
          tmp_0 = drawPathBlock(_this__u8e3s4, path);
        } else {
          tmp_0 = drawRoundedRectBlock(_this__u8e3s4, outline.roundRect_1);
        }
        tmp = tmp_0;
      } else {
        if (tmp0_subject instanceof Generic) {
          tmp = drawPathBlock(_this__u8e3s4, outline.path_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function topLeft(_this__u8e3s4) {
    return Offset(_this__u8e3s4.left_1, _this__u8e3s4.top_1);
  }
  function size(_this__u8e3s4) {
    return Size(_this__u8e3s4.get_width_j0q4yl_k$(), _this__u8e3s4.get_height_e7t92o_k$());
  }
  function topLeft_0(_this__u8e3s4) {
    return Offset(_this__u8e3s4.left_1, _this__u8e3s4.top_1);
  }
  function size_0(_this__u8e3s4) {
    return Size(_this__u8e3s4.get_width_j0q4yl_k$(), _this__u8e3s4.get_height_e7t92o_k$());
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
  function _get_value__a43j40_1($this) {
    return $this;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.Fill_1 = _PaintingStyle___init__impl__pwxppo(0);
    this.Stroke_1 = _PaintingStyle___init__impl__pwxppo(1);
  }
  Companion_9.prototype.get_Fill_xeknbt_k$ = function () {
    return this.Fill_1;
  };
  Companion_9.prototype.get_Stroke_dv2xoc_k$ = function () {
    return this.Stroke_1;
  };
  Companion_9.$metadata$ = objectMeta('Companion');
  var Companion_instance_9;
  function Companion_getInstance_24() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function PaintingStyle__toString_impl_anxeq4($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_24().Fill_1 ? 'Fill' : tmp0_subject === Companion_getInstance_24().Stroke_1 ? 'Stroke' : 'Unknown';
  }
  function PaintingStyle__hashCode_impl_wf3biz($this) {
    return $this;
  }
  function PaintingStyle__equals_impl_r3webl($this, other) {
    if (!(other instanceof PaintingStyle))
      return false;
    var tmp0_other_with_cast = other instanceof PaintingStyle ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function PaintingStyle(value) {
    Companion_getInstance_24();
    this.value_1 = value;
  }
  PaintingStyle.prototype.toString = function () {
    return PaintingStyle__toString_impl_anxeq4(this.value_1);
  };
  PaintingStyle.prototype.hashCode = function () {
    return PaintingStyle__hashCode_impl_wf3biz(this.value_1);
  };
  PaintingStyle.prototype.equals = function (other) {
    return PaintingStyle__equals_impl_r3webl(this.value_1, other);
  };
  PaintingStyle.$metadata$ = classMeta('PaintingStyle');
  function Companion_10() {
    Companion_instance_10 = this;
  }
  Companion_10.prototype.combine_ydees8_k$ = function (operation, path1, path2) {
    var path = Path_0();
    if (path.op_eh4rey_k$(path1, path2, operation)) {
      return path;
    }
    throw IllegalArgumentException_init_$Create$('Path.combine() failed.  This may be due an invalid path; in particular, check for NaN values.');
  };
  Companion_10.$metadata$ = objectMeta('Companion');
  var Companion_instance_10;
  function Companion_getInstance_25() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function Path() {
    Companion_getInstance_25();
  }
  Path.$metadata$ = interfaceMeta('Path');
  function Companion_11() {
    Companion_instance_11 = this;
  }
  Companion_11.prototype.cornerPathEffect_fpocxv_k$ = function (radius) {
    return actualCornerPathEffect(radius);
  };
  Companion_11.prototype.dashPathEffect_iz0b5x_k$ = function (intervals, phase) {
    return actualDashPathEffect(intervals, phase);
  };
  Companion_11.prototype.dashPathEffect$default_v98i9w_k$ = function (intervals, phase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      phase = 0.0;
    return this.dashPathEffect_iz0b5x_k$(intervals, phase);
  };
  Companion_11.prototype.chainPathEffect_8y4kg7_k$ = function (outer, inner) {
    return actualChainPathEffect(outer, inner);
  };
  Companion_11.prototype.stampedPathEffect_uzafgs_k$ = function (shape, advance, phase, style) {
    return actualStampedPathEffect(shape, advance, phase, style);
  };
  Companion_11.$metadata$ = objectMeta('Companion');
  var Companion_instance_11;
  function Companion_getInstance_26() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function PathEffect() {
    Companion_getInstance_26();
  }
  PathEffect.$metadata$ = interfaceMeta('PathEffect');
  function _StampedPathEffectStyle___init__impl__ekt0so(value) {
    return value;
  }
  function _get_value__a43j40_2($this) {
    return $this;
  }
  function Companion_12() {
    Companion_instance_12 = this;
    this.Translate_1 = _StampedPathEffectStyle___init__impl__ekt0so(0);
    this.Rotate_1 = _StampedPathEffectStyle___init__impl__ekt0so(1);
    this.Morph_1 = _StampedPathEffectStyle___init__impl__ekt0so(2);
  }
  Companion_12.prototype.get_Translate_oyad1i_k$ = function () {
    return this.Translate_1;
  };
  Companion_12.prototype.get_Rotate_t1fpff_k$ = function () {
    return this.Rotate_1;
  };
  Companion_12.prototype.get_Morph_35mk00_k$ = function () {
    return this.Morph_1;
  };
  Companion_12.$metadata$ = objectMeta('Companion');
  var Companion_instance_12;
  function Companion_getInstance_27() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function StampedPathEffectStyle__toString_impl_nfgepk($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_27().Translate_1 ? 'Translate' : tmp0_subject === Companion_getInstance_27().Rotate_1 ? 'Rotate' : tmp0_subject === Companion_getInstance_27().Morph_1 ? 'Morph' : 'Unknown';
  }
  function StampedPathEffectStyle__hashCode_impl_puhqgp($this) {
    return $this;
  }
  function StampedPathEffectStyle__equals_impl_nbax4b($this, other) {
    if (!(other instanceof StampedPathEffectStyle))
      return false;
    var tmp0_other_with_cast = other instanceof StampedPathEffectStyle ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function StampedPathEffectStyle(value) {
    Companion_getInstance_27();
    this.value_1 = value;
  }
  StampedPathEffectStyle.prototype.toString = function () {
    return StampedPathEffectStyle__toString_impl_nfgepk(this.value_1);
  };
  StampedPathEffectStyle.prototype.hashCode = function () {
    return StampedPathEffectStyle__hashCode_impl_puhqgp(this.value_1);
  };
  StampedPathEffectStyle.prototype.equals = function (other) {
    return StampedPathEffectStyle__equals_impl_nbax4b(this.value_1, other);
  };
  StampedPathEffectStyle.$metadata$ = classMeta('StampedPathEffectStyle');
  function _PathFillType___init__impl__d59lzz(value) {
    return value;
  }
  function _get_value__a43j40_3($this) {
    return $this;
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.NonZero_1 = _PathFillType___init__impl__d59lzz(0);
    this.EvenOdd_1 = _PathFillType___init__impl__d59lzz(1);
  }
  Companion_13.prototype.get_NonZero_j4d1fu_k$ = function () {
    return this.NonZero_1;
  };
  Companion_13.prototype.get_EvenOdd_pai4nq_k$ = function () {
    return this.EvenOdd_1;
  };
  Companion_13.$metadata$ = objectMeta('Companion');
  var Companion_instance_13;
  function Companion_getInstance_28() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function PathFillType__toString_impl_nw7h1d($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_28().NonZero_1 ? 'NonZero' : tmp0_subject === Companion_getInstance_28().EvenOdd_1 ? 'EvenOdd' : 'Unknown';
  }
  function PathFillType__hashCode_impl_pdqo4w($this) {
    return $this;
  }
  function PathFillType__equals_impl_94fhtg($this, other) {
    if (!(other instanceof PathFillType))
      return false;
    var tmp0_other_with_cast = other instanceof PathFillType ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function PathFillType(value) {
    Companion_getInstance_28();
    this.value_1 = value;
  }
  PathFillType.prototype.toString = function () {
    return PathFillType__toString_impl_nw7h1d(this.value_1);
  };
  PathFillType.prototype.hashCode = function () {
    return PathFillType__hashCode_impl_pdqo4w(this.value_1);
  };
  PathFillType.prototype.equals = function (other) {
    return PathFillType__equals_impl_94fhtg(this.value_1, other);
  };
  PathFillType.$metadata$ = classMeta('PathFillType');
  function PathMeasure() {
  }
  PathMeasure.$metadata$ = interfaceMeta('PathMeasure');
  function _PathOperation___init__impl__8ddeif(value) {
    return value;
  }
  function _get_value__a43j40_4($this) {
    return $this;
  }
  function Companion_14() {
    Companion_instance_14 = this;
    this.Difference_1 = _PathOperation___init__impl__8ddeif(0);
    this.Intersect_1 = _PathOperation___init__impl__8ddeif(1);
    this.Union_1 = _PathOperation___init__impl__8ddeif(2);
    this.Xor_1 = _PathOperation___init__impl__8ddeif(3);
    this.ReverseDifference_1 = _PathOperation___init__impl__8ddeif(4);
  }
  Companion_14.prototype.get_Difference_61syb0_k$ = function () {
    return this.Difference_1;
  };
  Companion_14.prototype.get_Intersect_pr81lo_k$ = function () {
    return this.Intersect_1;
  };
  Companion_14.prototype.get_Union_6aiks4_k$ = function () {
    return this.Union_1;
  };
  Companion_14.prototype.get_Xor_ja5law_k$ = function () {
    return this.Xor_1;
  };
  Companion_14.prototype.get_ReverseDifference_yow8fw_k$ = function () {
    return this.ReverseDifference_1;
  };
  Companion_14.$metadata$ = objectMeta('Companion');
  var Companion_instance_14;
  function Companion_getInstance_29() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function PathOperation__toString_impl_z2c7a9($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_29().Difference_1 ? 'Difference' : tmp0_subject === Companion_getInstance_29().Intersect_1 ? 'Intersect' : tmp0_subject === Companion_getInstance_29().Union_1 ? 'Union' : tmp0_subject === Companion_getInstance_29().Xor_1 ? 'Xor' : tmp0_subject === Companion_getInstance_29().ReverseDifference_1 ? 'ReverseDifference' : 'Unknown';
  }
  function PathOperation__hashCode_impl_e7lxw0($this) {
    return $this;
  }
  function PathOperation__equals_impl_kfyq50($this, other) {
    if (!(other instanceof PathOperation))
      return false;
    var tmp0_other_with_cast = other instanceof PathOperation ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function PathOperation(value) {
    Companion_getInstance_29();
    this.value_1 = value;
  }
  PathOperation.prototype.toString = function () {
    return PathOperation__toString_impl_z2c7a9(this.value_1);
  };
  PathOperation.prototype.hashCode = function () {
    return PathOperation__hashCode_impl_e7lxw0(this.value_1);
  };
  PathOperation.prototype.equals = function (other) {
    return PathOperation__equals_impl_kfyq50(this.value_1, other);
  };
  PathOperation.$metadata$ = classMeta('PathOperation');
  function _PointMode___init__impl__mgo5cq(value) {
    return value;
  }
  function _get_value__a43j40_5($this) {
    return $this;
  }
  function Companion_15() {
    Companion_instance_15 = this;
    this.Points_1 = _PointMode___init__impl__mgo5cq(0);
    this.Lines_1 = _PointMode___init__impl__mgo5cq(1);
    this.Polygon_1 = _PointMode___init__impl__mgo5cq(2);
  }
  Companion_15.prototype.get_Points_g9arr3_k$ = function () {
    return this.Points_1;
  };
  Companion_15.prototype.get_Lines_pf6qy3_k$ = function () {
    return this.Lines_1;
  };
  Companion_15.prototype.get_Polygon_n5et2y_k$ = function () {
    return this.Polygon_1;
  };
  Companion_15.$metadata$ = objectMeta('Companion');
  var Companion_instance_15;
  function Companion_getInstance_30() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function PointMode__toString_impl_nuk5g2($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_30().Points_1 ? 'Points' : tmp0_subject === Companion_getInstance_30().Lines_1 ? 'Lines' : tmp0_subject === Companion_getInstance_30().Polygon_1 ? 'Polygon' : 'Unknown';
  }
  function PointMode__hashCode_impl_pfdzq7($this) {
    return $this;
  }
  function PointMode__equals_impl_r8q797($this, other) {
    if (!(other instanceof PointMode))
      return false;
    var tmp0_other_with_cast = other instanceof PointMode ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function PointMode(value) {
    Companion_getInstance_30();
    this.value_1 = value;
  }
  PointMode.prototype.toString = function () {
    return PointMode__toString_impl_nuk5g2(this.value_1);
  };
  PointMode.prototype.hashCode = function () {
    return PointMode__hashCode_impl_pfdzq7(this.value_1);
  };
  PointMode.prototype.equals = function (other) {
    return PointMode__equals_impl_r8q797(this.value_1, other);
  };
  PointMode.$metadata$ = classMeta('PointMode');
  function get_RectangleShape() {
    init_properties_RectangleShape_kt_wysml4();
    return RectangleShape;
  }
  var RectangleShape;
  function RectangleShape$1() {
  }
  RectangleShape$1.prototype.createOutline_p92zi6_k$ = function (size, layoutDirection, density) {
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
  function LinearGradientShader(from, to, colors, colorStops, tileMode) {
    return ActualLinearGradientShader(from, to, colors, colorStops, tileMode);
  }
  function LinearGradientShader$default(from, to, colors, colorStops, tileMode, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      colorStops = null;
    if (!(($mask0 & 16) === 0))
      tileMode = Companion_getInstance_34().Clamp_1;
    return LinearGradientShader(from, to, colors, colorStops, tileMode);
  }
  function RadialGradientShader(center, radius, colors, colorStops, tileMode) {
    return ActualRadialGradientShader(center, radius, colors, colorStops, tileMode);
  }
  function RadialGradientShader$default(center, radius, colors, colorStops, tileMode, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      colorStops = null;
    if (!(($mask0 & 16) === 0))
      tileMode = Companion_getInstance_34().Clamp_1;
    return RadialGradientShader(center, radius, colors, colorStops, tileMode);
  }
  function SweepGradientShader(center, colors, colorStops) {
    return ActualSweepGradientShader(center, colors, colorStops);
  }
  function SweepGradientShader$default(center, colors, colorStops, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      colorStops = null;
    return SweepGradientShader(center, colors, colorStops);
  }
  function Shadow_init_$Init$(color, offset, blurRadius, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      color = Color_1(new Long(-16777216, 0));
    if (!(($mask0 & 2) === 0))
      offset = Companion_getInstance().Zero_1;
    if (!(($mask0 & 4) === 0))
      blurRadius = 0.0;
    Shadow.call($this, color, offset, blurRadius);
    return $this;
  }
  function Shadow_init_$Create$(color, offset, blurRadius, $mask0, $marker) {
    return Shadow_init_$Init$(color, offset, blurRadius, $mask0, $marker, Object.create(Shadow.prototype));
  }
  function Companion_16() {
    Companion_instance_16 = this;
    var tmp = this;
    tmp.None_1 = Shadow_init_$Create$(null, null, 0.0, 7, null);
  }
  Companion_16.prototype.get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  Companion_16.$metadata$ = objectMeta('Companion');
  var Companion_instance_16;
  function Companion_getInstance_31() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function Shadow(color, offset, blurRadius) {
    Companion_getInstance_31();
    this.color_1 = color;
    this.offset_1 = offset;
    this.blurRadius_1 = blurRadius;
  }
  Shadow.prototype.get_color_v34vrz_k$ = function () {
    return this.color_1;
  };
  Shadow.prototype.get_offset_y9g6r4_k$ = function () {
    return this.offset_1;
  };
  Shadow.prototype.get_blurRadius_r8jo0y_k$ = function () {
    return this.blurRadius_1;
  };
  Shadow.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!equals(this.color_1, other.color_1))
      return false;
    if (!equals(this.offset_1, other.offset_1))
      return false;
    if (!(this.blurRadius_1 === other.blurRadius_1))
      return false;
    return true;
  };
  Shadow.prototype.hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.color_1);
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.offset_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.blurRadius_1) | 0;
    return result;
  };
  Shadow.prototype.toString = function () {
    return 'Shadow(color=' + new Color(this.color_1) + ', offset=' + new Offset_0(this.offset_1) + ', blurRadius=' + this.blurRadius_1 + ')';
  };
  Shadow.prototype.copy_rnsz8_k$ = function (color, offset, blurRadius) {
    return new Shadow(color, offset, blurRadius);
  };
  Shadow.prototype.copy$default_dfbwwz_k$ = function (color, offset, blurRadius, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      color = this.color_1;
    if (!(($mask0 & 2) === 0))
      offset = this.offset_1;
    if (!(($mask0 & 4) === 0))
      blurRadius = this.blurRadius_1;
    return this.copy_rnsz8_k$(color, offset, blurRadius);
  };
  Shadow.$metadata$ = classMeta('Shadow');
  function Shape() {
  }
  Shape.$metadata$ = interfaceMeta('Shape');
  function _StrokeCap___init__impl__kfgr27(value) {
    return value;
  }
  function _get_value__a43j40_6($this) {
    return $this;
  }
  function Companion_17() {
    Companion_instance_17 = this;
    this.Butt_1 = _StrokeCap___init__impl__kfgr27(0);
    this.Round_1 = _StrokeCap___init__impl__kfgr27(1);
    this.Square_1 = _StrokeCap___init__impl__kfgr27(2);
  }
  Companion_17.prototype.get_Butt_vf89me_k$ = function () {
    return this.Butt_1;
  };
  Companion_17.prototype.get_Round_x6oq4t_k$ = function () {
    return this.Round_1;
  };
  Companion_17.prototype.get_Square_xmkdw4_k$ = function () {
    return this.Square_1;
  };
  Companion_17.$metadata$ = objectMeta('Companion');
  var Companion_instance_17;
  function Companion_getInstance_32() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function StrokeCap__toString_impl_3xn0rd($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_32().Butt_1 ? 'Butt' : tmp0_subject === Companion_getInstance_32().Round_1 ? 'Round' : tmp0_subject === Companion_getInstance_32().Square_1 ? 'Square' : 'Unknown';
  }
  function StrokeCap__hashCode_impl_posxk8($this) {
    return $this;
  }
  function StrokeCap__equals_impl_m9bjik($this, other) {
    if (!(other instanceof StrokeCap))
      return false;
    var tmp0_other_with_cast = other instanceof StrokeCap ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function StrokeCap(value) {
    Companion_getInstance_32();
    this.value_1 = value;
  }
  StrokeCap.prototype.toString = function () {
    return StrokeCap__toString_impl_3xn0rd(this.value_1);
  };
  StrokeCap.prototype.hashCode = function () {
    return StrokeCap__hashCode_impl_posxk8(this.value_1);
  };
  StrokeCap.prototype.equals = function (other) {
    return StrokeCap__equals_impl_m9bjik(this.value_1, other);
  };
  StrokeCap.$metadata$ = classMeta('StrokeCap');
  function _StrokeJoin___init__impl__ig23zz(value) {
    return value;
  }
  function _get_value__a43j40_7($this) {
    return $this;
  }
  function Companion_18() {
    Companion_instance_18 = this;
    this.Miter_1 = _StrokeJoin___init__impl__ig23zz(0);
    this.Round_1 = _StrokeJoin___init__impl__ig23zz(1);
    this.Bevel_1 = _StrokeJoin___init__impl__ig23zz(2);
  }
  Companion_18.prototype.get_Miter_rcwd8a_k$ = function () {
    return this.Miter_1;
  };
  Companion_18.prototype.get_Round_ybuhov_k$ = function () {
    return this.Round_1;
  };
  Companion_18.prototype.get_Bevel_1szraz_k$ = function () {
    return this.Bevel_1;
  };
  Companion_18.$metadata$ = objectMeta('Companion');
  var Companion_instance_18;
  function Companion_getInstance_33() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function StrokeJoin__toString_impl_ph4e1r($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_33().Miter_1 ? 'Miter' : tmp0_subject === Companion_getInstance_33().Round_1 ? 'Round' : tmp0_subject === Companion_getInstance_33().Bevel_1 ? 'Bevel' : 'Unknown';
  }
  function StrokeJoin__hashCode_impl_3pyh8w($this) {
    return $this;
  }
  function StrokeJoin__equals_impl_hf9ej8($this, other) {
    if (!(other instanceof StrokeJoin))
      return false;
    var tmp0_other_with_cast = other instanceof StrokeJoin ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function StrokeJoin(value) {
    Companion_getInstance_33();
    this.value_1 = value;
  }
  StrokeJoin.prototype.toString = function () {
    return StrokeJoin__toString_impl_ph4e1r(this.value_1);
  };
  StrokeJoin.prototype.hashCode = function () {
    return StrokeJoin__hashCode_impl_3pyh8w(this.value_1);
  };
  StrokeJoin.prototype.equals = function (other) {
    return StrokeJoin__equals_impl_hf9ej8(this.value_1, other);
  };
  StrokeJoin.$metadata$ = classMeta('StrokeJoin');
  function _TileMode___init__impl__syhjao(value) {
    return value;
  }
  function _get_value__a43j40_8($this) {
    return $this;
  }
  function Companion_19() {
    Companion_instance_19 = this;
    this.Clamp_1 = _TileMode___init__impl__syhjao(0);
    this.Repeated_1 = _TileMode___init__impl__syhjao(1);
    this.Mirror_1 = _TileMode___init__impl__syhjao(2);
    this.Decal_1 = _TileMode___init__impl__syhjao(3);
  }
  Companion_19.prototype.get_Clamp_q8g1jp_k$ = function () {
    return this.Clamp_1;
  };
  Companion_19.prototype.get_Repeated_k0uuck_k$ = function () {
    return this.Repeated_1;
  };
  Companion_19.prototype.get_Mirror_3kopi9_k$ = function () {
    return this.Mirror_1;
  };
  Companion_19.prototype.get_Decal_z0hn4z_k$ = function () {
    return this.Decal_1;
  };
  Companion_19.$metadata$ = objectMeta('Companion');
  var Companion_instance_19;
  function Companion_getInstance_34() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function TileMode__toString_impl_tlb7f4($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_34().Clamp_1 ? 'Clamp' : tmp0_subject === Companion_getInstance_34().Repeated_1 ? 'Repeated' : tmp0_subject === Companion_getInstance_34().Mirror_1 ? 'Mirror' : tmp0_subject === Companion_getInstance_34().Decal_1 ? 'Decal' : 'Unknown';
  }
  function TileMode__hashCode_impl_7u5am9($this) {
    return $this;
  }
  function TileMode__equals_impl_7nvbdv($this, other) {
    if (!(other instanceof TileMode))
      return false;
    var tmp0_other_with_cast = other instanceof TileMode ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function TileMode(value) {
    Companion_getInstance_34();
    this.value_1 = value;
  }
  TileMode.prototype.toString = function () {
    return TileMode__toString_impl_tlb7f4(this.value_1);
  };
  TileMode.prototype.hashCode = function () {
    return TileMode__hashCode_impl_7u5am9(this.value_1);
  };
  TileMode.prototype.equals = function (other) {
    return TileMode__equals_impl_7nvbdv(this.value_1, other);
  };
  TileMode.$metadata$ = classMeta('TileMode');
  function _VertexMode___init__impl__btp65i(value) {
    return value;
  }
  function _get_value__a43j40_9($this) {
    return $this;
  }
  function Companion_20() {
    Companion_instance_20 = this;
    this.Triangles_1 = _VertexMode___init__impl__btp65i(0);
    this.TriangleStrip_1 = _VertexMode___init__impl__btp65i(1);
    this.TriangleFan_1 = _VertexMode___init__impl__btp65i(2);
  }
  Companion_20.prototype.get_Triangles_3v3h75_k$ = function () {
    return this.Triangles_1;
  };
  Companion_20.prototype.get_TriangleStrip_fj1wve_k$ = function () {
    return this.TriangleStrip_1;
  };
  Companion_20.prototype.get_TriangleFan_hugsxb_k$ = function () {
    return this.TriangleFan_1;
  };
  Companion_20.$metadata$ = objectMeta('Companion');
  var Companion_instance_20;
  function Companion_getInstance_35() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function VertexMode__toString_impl_ujymw6($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_35().Triangles_1 ? 'Triangles' : tmp0_subject === Companion_getInstance_35().TriangleStrip_1 ? 'TriangleStrip' : tmp0_subject === Companion_getInstance_35().TriangleFan_1 ? 'TriangleFan' : 'Unknown';
  }
  function VertexMode__hashCode_impl_ipzia3($this) {
    return $this;
  }
  function VertexMode__equals_impl_k7ox9j($this, other) {
    if (!(other instanceof VertexMode))
      return false;
    var tmp0_other_with_cast = other instanceof VertexMode ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function VertexMode(value) {
    Companion_getInstance_35();
    this.value_1 = value;
  }
  VertexMode.prototype.toString = function () {
    return VertexMode__toString_impl_ujymw6(this.value_1);
  };
  VertexMode.prototype.hashCode = function () {
    return VertexMode__hashCode_impl_ipzia3(this.value_1);
  };
  VertexMode.prototype.equals = function (other) {
    return VertexMode__equals_impl_k7ox9j(this.value_1, other);
  };
  VertexMode.$metadata$ = classMeta('VertexMode');
  function encodeColorList($this, colors) {
    var tmp = 0;
    var tmp_0 = colors.get_size_woubt6_k$();
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.Vertices.encodeColorList.<anonymous>' call
      tmp$ret$0 = toArgb(colors.get_fkrdnv_k$(tmp_2).value_1);
      tmp_1[tmp_2] = tmp$ret$0;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function encodePointList($this, points) {
    var tmp = 0;
    var tmp_0 = imul(points.get_size_woubt6_k$(), 2);
    var tmp_1 = new Float32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.Vertices.encodePointList.<anonymous>' call
      var pointIndex = tmp_2 / 2 | 0;
      var point = points.get_fkrdnv_k$(pointIndex).packedValue_1;
      var tmp_3;
      if ((tmp_2 % 2 | 0) === 0) {
        tmp_3 = _Offset___get_x__impl__xvi35n(point);
      } else {
        tmp_3 = _Offset___get_y__impl__8bzhra(point);
      }
      tmp$ret$0 = tmp_3;
      tmp_1[tmp_2] = tmp$ret$0;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function Vertices$lambda($positions) {
    return function (it) {
      return it < 0 ? true : it >= $positions.get_size_woubt6_k$();
    };
  }
  function Vertices(vertexMode, positions, textureCoordinates, colors, indices) {
    this.vertexMode_1 = vertexMode;
    var outOfBounds = Vertices$lambda(positions);
    if (!(textureCoordinates.get_size_woubt6_k$() === positions.get_size_woubt6_k$()))
      throw IllegalArgumentException_init_$Create$('positions and textureCoordinates lengths must match.');
    if (!(colors.get_size_woubt6_k$() === positions.get_size_woubt6_k$()))
      throw IllegalArgumentException_init_$Create$('positions and colors lengths must match.');
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = indices.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = indices.get_fkrdnv_k$(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          if (outOfBounds(item)) {
            tmp$ret$0 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$0 = false;
    }
    if (tmp$ret$0)
      throw IllegalArgumentException_init_$Create$('indices values must be valid indices in the positions list.');
    this.positions_1 = encodePointList(this, positions);
    this.textureCoordinates_1 = encodePointList(this, textureCoordinates);
    this.colors_1 = encodeColorList(this, colors);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = indices.get_size_woubt6_k$();
    var tmp_2 = new Int16Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.graphics.Vertices.<anonymous>' call
      tmp$ret$1 = toShort(indices.get_fkrdnv_k$(tmp_3));
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.indices_1 = tmp_2;
  }
  Vertices.prototype.get_vertexMode_afoau9_k$ = function () {
    return this.vertexMode_1;
  };
  Vertices.prototype.get_positions_ya7scf_k$ = function () {
    return this.positions_1;
  };
  Vertices.prototype.get_textureCoordinates_1i3vqh_k$ = function () {
    return this.textureCoordinates_1;
  };
  Vertices.prototype.get_colors_c05661_k$ = function () {
    return this.colors_1;
  };
  Vertices.prototype.get_indices_xelk8u_k$ = function () {
    return this.indices_1;
  };
  Vertices.$metadata$ = classMeta('Vertices');
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
  function Companion_21() {
    Companion_instance_21 = this;
    var tmp = this;
    tmp.Bradford_1 = new Adaptation$Companion$Bradford$1();
    var tmp_0 = this;
    tmp_0.VonKries_1 = new Adaptation$Companion$VonKries$1();
    var tmp_1 = this;
    tmp_1.Ciecat02__1 = new Adaptation$Companion$Ciecat02$1();
  }
  Companion_21.prototype.get_Bradford_vb0mll_k$ = function () {
    return this.Bradford_1;
  };
  Companion_21.prototype.get_VonKries_9ojdic_k$ = function () {
    return this.VonKries_1;
  };
  Companion_21.prototype.get_Ciecat02_9csyjm_k$ = function () {
    return this.Ciecat02__1;
  };
  Companion_21.$metadata$ = objectMeta('Companion');
  var Companion_instance_21;
  function Companion_getInstance_36() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function Adaptation(transform) {
    Companion_getInstance_36();
    this.transform_1 = transform;
  }
  Adaptation.prototype.get_transform_px941v_k$ = function () {
    return this.transform_1;
  };
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
    tmp$ret$0 = tmp0_unpackInt1.shr_wjue3g_k$(32).toInt_1tsl84_k$();
    return tmp$ret$0;
  }
  function Companion_22() {
    Companion_instance_22 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$0 = new Long(0, 3);
    tmp.Rgb_1 = _ColorModel___init__impl__b968n9(tmp$ret$0);
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$1 = new Long(1, 3);
    tmp_0.Xyz_1 = _ColorModel___init__impl__b968n9(tmp$ret$1);
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$2 = new Long(2, 3);
    tmp_1.Lab_1 = _ColorModel___init__impl__b968n9(tmp$ret$2);
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$3 = new Long(3, 4);
    tmp_2.Cmyk_1 = _ColorModel___init__impl__b968n9(tmp$ret$3);
  }
  Companion_22.prototype.get_Rgb_hxm2yj_k$ = function () {
    return this.Rgb_1;
  };
  Companion_22.prototype.get_Xyz_dr76iv_k$ = function () {
    return this.Xyz_1;
  };
  Companion_22.prototype.get_Lab_uzchff_k$ = function () {
    return this.Lab_1;
  };
  Companion_22.prototype.get_Cmyk_iotmf0_k$ = function () {
    return this.Cmyk_1;
  };
  Companion_22.$metadata$ = objectMeta('Companion');
  var Companion_instance_22;
  function Companion_getInstance_37() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function ColorModel__toString_impl_msukd7($this) {
    var tmp0_subject = $this;
    return equals(tmp0_subject, Companion_getInstance_37().Rgb_1) ? 'Rgb' : equals(tmp0_subject, Companion_getInstance_37().Xyz_1) ? 'Xyz' : equals(tmp0_subject, Companion_getInstance_37().Lab_1) ? 'Lab' : equals(tmp0_subject, Companion_getInstance_37().Cmyk_1) ? 'Cmyk' : 'Unknown';
  }
  function ColorModel__hashCode_impl_11onkc($this) {
    return $this.hashCode();
  }
  function ColorModel__equals_impl_dbkfqg($this, other) {
    if (!(other instanceof ColorModel))
      return false;
    var tmp0_other_with_cast = other instanceof ColorModel ? other.packedValue_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function ColorModel(packedValue) {
    Companion_getInstance_37();
    this.packedValue_1 = packedValue;
  }
  ColorModel.prototype.toString = function () {
    return ColorModel__toString_impl_msukd7(this.packedValue_1);
  };
  ColorModel.prototype.hashCode = function () {
    return ColorModel__hashCode_impl_11onkc(this.packedValue_1);
  };
  ColorModel.prototype.equals = function (other) {
    return ColorModel__equals_impl_dbkfqg(this.packedValue_1, other);
  };
  ColorModel.$metadata$ = classMeta('ColorModel');
  function ColorSpace_init_$Init$(name, model, $this) {
    Companion_getInstance_38();
    ColorSpace.call($this, name, model, -1);
    return $this;
  }
  function ColorSpace_init_$Create$(name, model) {
    return ColorSpace_init_$Init$(name, model, Object.create(ColorSpace.prototype));
  }
  function Companion_23() {
    Companion_instance_23 = this;
    this.MinId_1 = -1;
    this.MaxId_1 = 63;
  }
  Companion_23.prototype.get_MinId_idmyf8_k$ = function () {
    return this.MinId_1;
  };
  Companion_23.prototype.get_MaxId_idi1xy_k$ = function () {
    return this.MaxId_1;
  };
  Companion_23.$metadata$ = objectMeta('Companion');
  var Companion_instance_23;
  function Companion_getInstance_38() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function ColorSpace(name, model, id) {
    Companion_getInstance_38();
    this.name_1 = name;
    this.model_1 = model;
    this.id_1 = id;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    var tmp0_isEmpty = this.name_1;
    tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
    if (tmp$ret$0) {
      throw IllegalArgumentException_init_$Create$('The name of a color space cannot be null and must contain at least 1 character');
    }
    var tmp;
    Companion_getInstance_38();
    if (this.id_1 < -1) {
      tmp = true;
    } else {
      Companion_getInstance_38();
      tmp = this.id_1 > 63;
    }
    if (tmp) {
      Companion_getInstance_38();
      Companion_getInstance_38();
      throw IllegalArgumentException_init_$Create$('The id must be between ' + -1 + ' and ' + 63);
    }
  }
  ColorSpace.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  ColorSpace.prototype.get_model_rk6821_k$ = function () {
    return this.model_1;
  };
  ColorSpace.prototype.get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  ColorSpace.prototype.get_componentCount_ffrht1_k$ = function () {
    return _ColorModel___get_componentCount__impl__au0uoc(this.model_1);
  };
  ColorSpace.prototype.get_isSrgb_ew666l_k$ = function () {
    return false;
  };
  ColorSpace.prototype.toXyz_htgd3k_k$ = function (r, g, b) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([r, g, b]);
    return this.toXyz_ox86g9_k$(tmp$ret$0);
  };
  ColorSpace.prototype.fromXyz_sxy01r_k$ = function (x, y, z) {
    var xyz = new Float32Array(_ColorModel___get_componentCount__impl__au0uoc(this.model_1));
    xyz[0] = x;
    xyz[1] = y;
    xyz[2] = z;
    return this.fromXyz_idrdie_k$(xyz);
  };
  ColorSpace.prototype.toString = function () {
    return this.name_1 + ' (id=' + this.id_1 + ', model=' + new ColorModel(this.model_1) + ')';
  };
  ColorSpace.prototype.equals = function (other) {
    if (this === other) {
      return true;
    }
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other))) {
      return false;
    }
    var that = other instanceof ColorSpace ? other : THROW_CCE();
    if (!(this.id_1 === that.id_1))
      return false;
    return !(this.name_1 === that.name_1) ? false : equals(this.model_1, that.model_1);
  };
  ColorSpace.prototype.hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(31, result) + ColorModel__hashCode_impl_11onkc(this.model_1) | 0;
    result = imul(31, result) + this.id_1 | 0;
    return result;
  };
  ColorSpace.$metadata$ = classMeta('ColorSpace');
  function connect(_this__u8e3s4, destination, intent) {
    if (_this__u8e3s4 === destination) {
      return Companion_getInstance_39().identity_orxv0l_k$(_this__u8e3s4);
    }
    var tmp;
    if (equals(_this__u8e3s4.model_1, Companion_getInstance_37().Rgb_1) ? equals(destination.model_1, Companion_getInstance_37().Rgb_1) : false) {
      var tmp_0 = _this__u8e3s4 instanceof Rgb ? _this__u8e3s4 : THROW_CCE();
      tmp = new RgbConnector(tmp_0, destination instanceof Rgb ? destination : THROW_CCE(), intent);
    } else {
      tmp = Connector_init_$Create$(_this__u8e3s4, destination, intent);
    }
    return tmp;
  }
  function connect$default(_this__u8e3s4, destination, intent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      destination = ColorSpaces_getInstance().Srgb_1;
    if (!(($mask0 & 2) === 0))
      intent = Companion_getInstance_42().Perceptual_1;
    return connect(_this__u8e3s4, destination, intent);
  }
  function absRcpResponse(x, a, b, c, d, g) {
    return withSign(rcpResponse(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function absResponse(x, a, b, c, d, g) {
    return withSign(response(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function adapt(_this__u8e3s4, whitePoint, adaptation) {
    if (equals(_this__u8e3s4.model_1, Companion_getInstance_37().Rgb_1)) {
      var rgb = _this__u8e3s4 instanceof Rgb ? _this__u8e3s4 : THROW_CCE();
      if (compare_1(rgb.whitePoint_1, whitePoint)) {
        return _this__u8e3s4;
      }
      var xyz = whitePoint.toXyz_1tswm6_k$();
      var adaptationTransform = chromaticAdaptation(adaptation.transform_1, rgb.whitePoint_1.toXyz_1tswm6_k$(), xyz);
      var transform = mul3x3(adaptationTransform, rgb.transform_1);
      return Rgb_init_$Create$_7(rgb, transform, whitePoint);
    }
    return _this__u8e3s4;
  }
  function adapt$default(_this__u8e3s4, whitePoint, adaptation, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      adaptation = Companion_getInstance_36().Bradford_1;
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
  function compare_0(a, b) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    if (!(b == null)) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.abs' call
      var tmp0_abs = a.a_1 - b.a_1;
      tmp$ret$0 = Math.abs(tmp0_abs);
      tmp_5 = tmp$ret$0 < 0.001;
    } else {
      tmp_5 = false;
    }
    if (tmp_5) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.abs' call
      var tmp1_abs = a.b_1 - b.b_1;
      tmp$ret$1 = Math.abs(tmp1_abs);
      tmp_4 = tmp$ret$1 < 0.001;
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      var tmp$ret$2;
      // Inline function 'kotlin.math.abs' call
      var tmp2_abs = a.c_1 - b.c_1;
      tmp$ret$2 = Math.abs(tmp2_abs);
      tmp_3 = tmp$ret$2 < 0.001;
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      var tmp$ret$3;
      // Inline function 'kotlin.math.abs' call
      var tmp3_abs = a.d_1 - b.d_1;
      tmp$ret$3 = Math.abs(tmp3_abs);
      tmp_2 = tmp$ret$3 < 0.002;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      var tmp$ret$4;
      // Inline function 'kotlin.math.abs' call
      var tmp4_abs = a.e_1 - b.e_1;
      tmp$ret$4 = Math.abs(tmp4_abs);
      tmp_1 = tmp$ret$4 < 0.001;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp$ret$5;
      // Inline function 'kotlin.math.abs' call
      var tmp5_abs = a.f_1 - b.f_1;
      tmp$ret$5 = Math.abs(tmp5_abs);
      tmp_0 = tmp$ret$5 < 0.001;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp$ret$6;
      // Inline function 'kotlin.math.abs' call
      var tmp6_abs = a.gamma_1 - b.gamma_1;
      tmp$ret$6 = Math.abs(tmp6_abs);
      tmp = tmp$ret$6 < 0.001;
    } else {
      tmp = false;
    }
    return tmp;
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
  function compare_1(a, b) {
    if (a === b)
      return true;
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = a.x_1 - b.x_1;
    tmp$ret$0 = Math.abs(tmp0_abs);
    if (tmp$ret$0 < 0.001) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.abs' call
      var tmp1_abs = a.y_1 - b.y_1;
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
  function _get_NoneTransferParameters__hzx9fi($this) {
    return $this.NoneTransferParameters_1;
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
    tmp.SrgbPrimaries_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$1 = new Float32Array([0.67, 0.33, 0.21, 0.71, 0.14, 0.08]);
    tmp_0.Ntsc1953Primaries_1 = tmp$ret$1;
    var tmp_1 = this;
    tmp_1.SrgbTransferParameters_1 = TransferParameters_init_$Create$(2.4, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045, 0.0, 0.0, 96, null);
    var tmp_2 = this;
    tmp_2.NoneTransferParameters_1 = TransferParameters_init_$Create$(2.2, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045, 0.0, 0.0, 96, null);
    this.Srgb_1 = Rgb_init_$Create$_3('sRGB IEC61966-2.1', this.SrgbPrimaries_1, Illuminant_getInstance().D65__1, this.SrgbTransferParameters_1, 0);
    this.LinearSrgb_1 = Rgb_init_$Create$_6('sRGB IEC61966-2.1 (Linear)', this.SrgbPrimaries_1, Illuminant_getInstance().D65__1, 1.0, 0.0, 1.0, 1);
    var tmp_3 = this;
    var tmp_4 = Illuminant_getInstance().D65__1;
    var tmp_5 = ColorSpaces$ExtendedSrgb$lambda;
    tmp_3.ExtendedSrgb_1 = new Rgb('scRGB-nl IEC 61966-2-2:2003', this.SrgbPrimaries_1, tmp_4, null, tmp_5, ColorSpaces$ExtendedSrgb$lambda_0, -0.799, 2.399, this.SrgbTransferParameters_1, 2);
    this.LinearExtendedSrgb_1 = Rgb_init_$Create$_6('scRGB IEC 61966-2-2:2003', this.SrgbPrimaries_1, Illuminant_getInstance().D65__1, 1.0, -0.5, 7.499, 3);
    var tmp_6 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$2 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    var tmp_7 = tmp$ret$2;
    var tmp_8 = Illuminant_getInstance().D65__1;
    tmp_6.Bt709__1 = Rgb_init_$Create$_3('Rec. ITU-R BT.709-5', tmp_7, tmp_8, TransferParameters_init_$Create$(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081, 0.0, 0.0, 96, null), 4);
    var tmp_9 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$3 = new Float32Array([0.708, 0.292, 0.17, 0.797, 0.131, 0.046]);
    var tmp_10 = tmp$ret$3;
    var tmp_11 = Illuminant_getInstance().D65__1;
    tmp_9.Bt2020__1 = Rgb_init_$Create$_3('Rec. ITU-R BT.2020-1', tmp_10, tmp_11, TransferParameters_init_$Create$(2.2222222222222223, 0.9096697898662786, 0.09033021013372146, 0.2222222222222222, 0.08145, 0.0, 0.0, 96, null), 5);
    var tmp_12 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$4 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_12.DciP3__1 = Rgb_init_$Create$_6('SMPTE RP 431-2-2007 DCI (P3)', tmp$ret$4, new WhitePoint(0.314, 0.351), 2.6, 0.0, 1.0, 6);
    var tmp_13 = this;
    var tmp$ret$5;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$5 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_13.DisplayP3__1 = Rgb_init_$Create$_3('Display P3', tmp$ret$5, Illuminant_getInstance().D65__1, this.SrgbTransferParameters_1, 7);
    var tmp_14 = this;
    var tmp_15 = Illuminant_getInstance().C_1;
    tmp_14.Ntsc1953__1 = Rgb_init_$Create$_3('NTSC (1953)', this.Ntsc1953Primaries_1, tmp_15, TransferParameters_init_$Create$(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081, 0.0, 0.0, 96, null), 8);
    var tmp_16 = this;
    var tmp$ret$6;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$6 = new Float32Array([0.63, 0.34, 0.31, 0.595, 0.155, 0.07]);
    var tmp_17 = tmp$ret$6;
    var tmp_18 = Illuminant_getInstance().D65__1;
    tmp_16.SmpteC_1 = Rgb_init_$Create$_3('SMPTE-C RGB', tmp_17, tmp_18, TransferParameters_init_$Create$(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081, 0.0, 0.0, 96, null), 9);
    var tmp_19 = this;
    var tmp$ret$7;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$7 = new Float32Array([0.64, 0.33, 0.21, 0.71, 0.15, 0.06]);
    tmp_19.AdobeRgb_1 = Rgb_init_$Create$_6('Adobe RGB (1998)', tmp$ret$7, Illuminant_getInstance().D65__1, 2.2, 0.0, 1.0, 10);
    var tmp_20 = this;
    var tmp$ret$8;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$8 = new Float32Array([0.7347, 0.2653, 0.1596, 0.8404, 0.0366, 1.0E-4]);
    var tmp_21 = tmp$ret$8;
    var tmp_22 = Illuminant_getInstance().D50__1;
    tmp_20.ProPhotoRgb_1 = Rgb_init_$Create$_3('ROMM RGB ISO 22028-2:2013', tmp_21, tmp_22, TransferParameters_init_$Create$(1.8, 1.0, 0.0, 0.0625, 0.031248, 0.0, 0.0, 96, null), 11);
    var tmp_23 = this;
    var tmp$ret$9;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$9 = new Float32Array([0.7347, 0.2653, 0.0, 1.0, 1.0E-4, -0.077]);
    tmp_23.Aces_1 = Rgb_init_$Create$_6('SMPTE ST 2065-1:2012 ACES', tmp$ret$9, Illuminant_getInstance().D60__1, 1.0, -65504.0, 65504.0, 12);
    var tmp_24 = this;
    var tmp$ret$10;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$10 = new Float32Array([0.713, 0.293, 0.165, 0.83, 0.128, 0.044]);
    tmp_24.Acescg_1 = Rgb_init_$Create$_6('Academy S-2014-004 ACEScg', tmp$ret$10, Illuminant_getInstance().D60__1, 1.0, -65504.0, 65504.0, 13);
    this.CieXyz_1 = new Xyz('Generic XYZ', 14);
    this.CieLab_1 = new Lab('Generic L*a*b*', 15);
    this.Unspecified_1 = Rgb_init_$Create$_3('None', this.SrgbPrimaries_1, Illuminant_getInstance().D65__1, this.NoneTransferParameters_1, 16);
    this.Oklab_1 = new Oklab('Oklab', 17);
    var tmp_25 = this;
    var tmp$ret$13;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [this.Srgb_1, this.LinearSrgb_1, this.ExtendedSrgb_1, this.LinearExtendedSrgb_1, this.Bt709__1, this.Bt2020__1, this.DciP3__1, this.DisplayP3__1, this.Ntsc1953__1, this.SmpteC_1, this.AdobeRgb_1, this.ProPhotoRgb_1, this.Aces_1, this.Acescg_1, this.CieXyz_1, this.CieLab_1, this.Unspecified_1, this.Oklab_1];
    var tmp$ret$12;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$11;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$11 = tmp0_arrayOf;
    tmp$ret$12 = tmp$ret$11;
    tmp$ret$13 = tmp$ret$12;
    tmp_25.ColorSpacesArray_1 = tmp$ret$13;
  }
  ColorSpaces.prototype.get_SrgbPrimaries_e57bel_k$ = function () {
    return this.SrgbPrimaries_1;
  };
  ColorSpaces.prototype.get_Ntsc1953Primaries_s9kth_k$ = function () {
    return this.Ntsc1953Primaries_1;
  };
  ColorSpaces.prototype.get_SrgbTransferParameters_mwzq88_k$ = function () {
    return this.SrgbTransferParameters_1;
  };
  ColorSpaces.prototype.get_Srgb_woa2g3_k$ = function () {
    return this.Srgb_1;
  };
  ColorSpaces.prototype.get_LinearSrgb_gaeay0_k$ = function () {
    return this.LinearSrgb_1;
  };
  ColorSpaces.prototype.get_ExtendedSrgb_860058_k$ = function () {
    return this.ExtendedSrgb_1;
  };
  ColorSpaces.prototype.get_LinearExtendedSrgb_2lon29_k$ = function () {
    return this.LinearExtendedSrgb_1;
  };
  ColorSpaces.prototype.get_Bt709_i7r3c5_k$ = function () {
    return this.Bt709__1;
  };
  ColorSpaces.prototype.get_Bt2020_3knrex_k$ = function () {
    return this.Bt2020__1;
  };
  ColorSpaces.prototype.get_DciP3_i8kvl0_k$ = function () {
    return this.DciP3__1;
  };
  ColorSpaces.prototype.get_DisplayP3_pa2gtg_k$ = function () {
    return this.DisplayP3__1;
  };
  ColorSpaces.prototype.get_Ntsc1953_2r08mz_k$ = function () {
    return this.Ntsc1953__1;
  };
  ColorSpaces.prototype.get_SmpteC_4ee9z9_k$ = function () {
    return this.SmpteC_1;
  };
  ColorSpaces.prototype.get_AdobeRgb_p3r0p3_k$ = function () {
    return this.AdobeRgb_1;
  };
  ColorSpaces.prototype.get_ProPhotoRgb_ygdri9_k$ = function () {
    return this.ProPhotoRgb_1;
  };
  ColorSpaces.prototype.get_Aces_wny9ix_k$ = function () {
    return this.Aces_1;
  };
  ColorSpaces.prototype.get_Acescg_4a3wo3_k$ = function () {
    return this.Acescg_1;
  };
  ColorSpaces.prototype.get_CieXyz_38qfst_k$ = function () {
    return this.CieXyz_1;
  };
  ColorSpaces.prototype.get_CieLab_38qpah_k$ = function () {
    return this.CieLab_1;
  };
  ColorSpaces.prototype.get_Unspecified_el0w4u_k$ = function () {
    return this.Unspecified_1;
  };
  ColorSpaces.prototype.get_Oklab_ierso8_k$ = function () {
    return this.Oklab_1;
  };
  ColorSpaces.prototype.match_gsgfej_k$ = function (toXYZD50, function_0) {
    var indexedObject = this.ColorSpacesArray_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var colorSpace = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (equals(colorSpace.model_1, Companion_getInstance_37().Rgb_1)) {
        var tmp = Illuminant_getInstance().D50__1;
        var tmp_0 = adapt$default(colorSpace, tmp, null, 2, null);
        var rgb = tmp_0 instanceof Rgb ? tmp_0 : THROW_CCE();
        if (compare(toXYZD50, rgb.transform_1) ? compare_0(function_0, rgb.transferParameters_1) : false) {
          return colorSpace;
        }
      }
    }
    return null;
  };
  ColorSpaces.prototype.getColorSpace_n6qo08_k$ = function (id) {
    return this.ColorSpacesArray_1[id];
  };
  ColorSpaces.prototype.get_ColorSpacesArray_qsodou_k$ = function () {
    return this.ColorSpacesArray_1;
  };
  ColorSpaces.$metadata$ = objectMeta('ColorSpaces');
  var ColorSpaces_instance;
  function ColorSpaces_getInstance() {
    if (ColorSpaces_instance == null)
      new ColorSpaces();
    return ColorSpaces_instance;
  }
  function _get_mSource__pfxk2f($this) {
    return $this.mSource_1;
  }
  function _get_mDestination__f08o3u($this) {
    return $this.mDestination_1;
  }
  function _get_mTransform__1c5rl8($this) {
    return $this.mTransform_1;
  }
  function computeTransform($this, source, destination, intent) {
    if (compare_1(source.whitePoint_1, destination.whitePoint_1)) {
      return mul3x3(destination.inverseTransform_1, source.transform_1);
    } else {
      var transform = source.transform_1;
      var inverseTransform = destination.inverseTransform_1;
      var srcXYZ = source.whitePoint_1.toXyz_1tswm6_k$();
      var dstXYZ = destination.whitePoint_1.toXyz_1tswm6_k$();
      if (!compare_1(source.whitePoint_1, Illuminant_getInstance().D50__1)) {
        var tmp = Companion_getInstance_36().Bradford_1.transform_1;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.copyOf' call
        var tmp0_copyOf = Illuminant_getInstance().D50Xyz_1;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_copyOf;
        tmp$ret$1 = tmp$ret$0.slice();
        var srcAdaptation = chromaticAdaptation(tmp, srcXYZ, tmp$ret$1);
        transform = mul3x3(srcAdaptation, source.transform_1);
      }
      if (!compare_1(destination.whitePoint_1, Illuminant_getInstance().D50__1)) {
        var tmp_0 = Companion_getInstance_36().Bradford_1.transform_1;
        var tmp$ret$3;
        // Inline function 'kotlin.collections.copyOf' call
        var tmp1_copyOf = Illuminant_getInstance().D50Xyz_1;
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp1_copyOf;
        tmp$ret$3 = tmp$ret$2.slice();
        var dstAdaptation = chromaticAdaptation(tmp_0, dstXYZ, tmp$ret$3);
        inverseTransform = inverse3x3(mul3x3(dstAdaptation, destination.transform_1));
      }
      if (intent === Companion_getInstance_42().Absolute_1) {
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
    if (!(intent === Companion_getInstance_42().Absolute_1))
      return null;
    var srcRGB = equals(source.model_1, Companion_getInstance_37().Rgb_1);
    var dstRGB = equals(destination.model_1, Companion_getInstance_37().Rgb_1);
    if (srcRGB ? dstRGB : false)
      return null;
    if (srcRGB ? true : dstRGB) {
      var tmp = srcRGB ? source : destination;
      var rgb = tmp instanceof Rgb ? tmp : THROW_CCE();
      var srcXYZ = srcRGB ? rgb.whitePoint_1.toXyz_1tswm6_k$() : Illuminant_getInstance().D50Xyz_1;
      var dstXYZ = dstRGB ? rgb.whitePoint_1.toXyz_1tswm6_k$() : Illuminant_getInstance().D50Xyz_1;
      var tmp$ret$0;
      // Inline function 'kotlin.floatArrayOf' call
      var tmp0_floatArrayOf = new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
      tmp$ret$0 = tmp0_floatArrayOf;
      return tmp$ret$0;
    }
    return null;
  }
  function Connector$Companion$identity$1($source) {
    Connector_init_$Init$($source, $source, Companion_getInstance_42().Relative_1, this);
  }
  Connector$Companion$identity$1.prototype.transform_aitls9_k$ = function (v) {
    return v;
  };
  Connector$Companion$identity$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, Connector.prototype);
  function _get_transformSource__ks0k3a($this) {
    return $this.transformSource_1;
  }
  function _get_transformDestination__y9np1l($this) {
    return $this.transformDestination_1;
  }
  function _get_transform__ku8tb9($this) {
    return $this.transform_1;
  }
  function Connector_init_$Init$(source, destination, intent, $this) {
    var tmp;
    if (equals(source.model_1, Companion_getInstance_37().Rgb_1)) {
      var tmp_0 = Illuminant_getInstance().D50__1;
      tmp = adapt$default(source, tmp_0, null, 2, null);
    } else {
      tmp = source;
    }
    var tmp_1 = tmp;
    var tmp_2;
    if (equals(destination.model_1, Companion_getInstance_37().Rgb_1)) {
      var tmp_3 = Illuminant_getInstance().D50__1;
      tmp_2 = adapt$default(destination, tmp_3, null, 2, null);
    } else {
      tmp_2 = destination;
    }
    Connector.call($this, source, destination, tmp_1, tmp_2, intent, computeTransform_0(Companion_getInstance_39(), source, destination, intent));
    return $this;
  }
  function Connector_init_$Create$(source, destination, intent) {
    return Connector_init_$Init$(source, destination, intent, Object.create(Connector.prototype));
  }
  function RgbConnector(mSource, mDestination, intent) {
    Connector.call(this, mSource, mDestination, mSource, mDestination, intent, null);
    this.mSource_1 = mSource;
    this.mDestination_1 = mDestination;
    this.mTransform_1 = computeTransform(this, this.mSource_1, this.mDestination_1, intent);
  }
  RgbConnector.prototype.transform_aitls9_k$ = function (v) {
    v[0] = this.mSource_1.eotf_1(v[0]);
    v[1] = this.mSource_1.eotf_1(v[1]);
    v[2] = this.mSource_1.eotf_1(v[2]);
    mul3x3Float3(this.mTransform_1, v);
    v[0] = this.mDestination_1.oetf_1(v[0]);
    v[1] = this.mDestination_1.oetf_1(v[1]);
    v[2] = this.mDestination_1.oetf_1(v[2]);
    return v;
  };
  RgbConnector.$metadata$ = classMeta('RgbConnector', undefined, undefined, undefined, undefined, Connector.prototype);
  function Companion_24() {
    Companion_instance_24 = this;
  }
  Companion_24.prototype.identity_orxv0l_k$ = function (source) {
    return new Connector$Companion$identity$1(source);
  };
  Companion_24.$metadata$ = objectMeta('Companion');
  var Companion_instance_24;
  function Companion_getInstance_39() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function Connector(source, destination, transformSource, transformDestination, renderIntent, transform) {
    Companion_getInstance_39();
    this.source_1 = source;
    this.destination_1 = destination;
    this.transformSource_1 = transformSource;
    this.transformDestination_1 = transformDestination;
    this.renderIntent_1 = renderIntent;
    this.transform_1 = transform;
  }
  Connector.prototype.get_source_jl0x7o_k$ = function () {
    return this.source_1;
  };
  Connector.prototype.get_destination_9r3c63_k$ = function () {
    return this.destination_1;
  };
  Connector.prototype.get_renderIntent_qndnh6_k$ = function () {
    return this.renderIntent_1;
  };
  Connector.prototype.transform_2zmpfm_k$ = function (r, g, b) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([r, g, b]);
    return this.transform_aitls9_k$(tmp$ret$0);
  };
  Connector.prototype.transform_aitls9_k$ = function (v) {
    var xyz = this.transformSource_1.toXyz_ox86g9_k$(v);
    if (!(this.transform_1 == null)) {
      var tmp0_array = xyz;
      var tmp1_index0 = 0;
      tmp0_array[tmp1_index0] = tmp0_array[tmp1_index0] * this.transform_1[0];
      var tmp2_array = xyz;
      var tmp3_index0 = 1;
      tmp2_array[tmp3_index0] = tmp2_array[tmp3_index0] * this.transform_1[1];
      var tmp4_array = xyz;
      var tmp5_index0 = 2;
      tmp4_array[tmp5_index0] = tmp4_array[tmp5_index0] * this.transform_1[2];
    }
    return this.transformDestination_1.fromXyz_idrdie_k$(xyz);
  };
  Connector.$metadata$ = classMeta('Connector');
  function Illuminant() {
    Illuminant_instance = this;
    this.A_1 = new WhitePoint(0.44757, 0.40745);
    this.B_1 = new WhitePoint(0.34842, 0.35161);
    this.C_1 = new WhitePoint(0.31006, 0.31616);
    this.D50__1 = new WhitePoint(0.34567, 0.3585);
    this.D55__1 = new WhitePoint(0.33242, 0.34743);
    this.D60__1 = new WhitePoint(0.32168, 0.33767);
    this.D65__1 = new WhitePoint(0.31271, 0.32902);
    this.D75__1 = new WhitePoint(0.29902, 0.31485);
    this.E_1 = new WhitePoint(0.33333, 0.33333);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.964212, 1.0, 0.825188]);
    tmp.D50Xyz_1 = tmp$ret$0;
  }
  Illuminant.prototype.get_A_1mhr4o_k$ = function () {
    return this.A_1;
  };
  Illuminant.prototype.get_B_1mhr4p_k$ = function () {
    return this.B_1;
  };
  Illuminant.prototype.get_C_1mhr4q_k$ = function () {
    return this.C_1;
  };
  Illuminant.prototype.get_D50_18jwcq_k$ = function () {
    return this.D50__1;
  };
  Illuminant.prototype.get_D55_18jwcl_k$ = function () {
    return this.D55__1;
  };
  Illuminant.prototype.get_D60_18jwbv_k$ = function () {
    return this.D60__1;
  };
  Illuminant.prototype.get_D65_18jwbq_k$ = function () {
    return this.D65__1;
  };
  Illuminant.prototype.get_D75_18jwav_k$ = function () {
    return this.D75__1;
  };
  Illuminant.prototype.get_E_1mhr4s_k$ = function () {
    return this.E_1;
  };
  Illuminant.prototype.get_D50Xyz_3l7ykd_k$ = function () {
    return this.D50Xyz_1;
  };
  Illuminant.$metadata$ = objectMeta('Illuminant');
  var Illuminant_instance;
  function Illuminant_getInstance() {
    if (Illuminant_instance == null)
      new Illuminant();
    return Illuminant_instance;
  }
  function _get_A__7mlnow($this) {
    return $this.A_1;
  }
  function _get_B__7mlnpr($this) {
    return $this.B_1;
  }
  function _get_C__7mlnqm($this) {
    return $this.C_1;
  }
  function _get_D__7mlnrh($this) {
    return $this.D_1;
  }
  function Companion_25() {
    Companion_instance_25 = this;
    this.A_1 = 0.008856452;
    this.B_1 = 7.787037;
    this.C_1 = 0.13793103;
    this.D_1 = 0.20689656;
  }
  Companion_25.$metadata$ = objectMeta('Companion');
  var Companion_instance_25;
  function Companion_getInstance_40() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function Lab(name, id) {
    Companion_getInstance_40();
    ColorSpace.call(this, name, Companion_getInstance_37().Lab_1, id);
  }
  Lab.prototype.get_isWideGamut_oxj4to_k$ = function () {
    return true;
  };
  Lab.prototype.getMinValue_7r60q4_k$ = function (component) {
    return component === 0 ? 0.0 : -128.0;
  };
  Lab.prototype.getMaxValue_8bwqwu_k$ = function (component) {
    return component === 0 ? 100.0 : 128.0;
  };
  Lab.prototype.toXyz_ox86g9_k$ = function (v) {
    v[0] = coerceIn(v[0], 0.0, 100.0);
    v[1] = coerceIn(v[1], -128.0, 128.0);
    v[2] = coerceIn(v[2], -128.0, 128.0);
    var fy = (v[0] + 16.0) / 116.0;
    var fx = fy + v[1] * 0.002;
    var fz = fy - v[2] * 0.005;
    var tmp;
    Companion_getInstance_40();
    if (fx > 0.20689656) {
      tmp = fx * fx * fx;
    } else {
      Companion_getInstance_40();
      var tmp_0 = 1.0 / 7.787037;
      Companion_getInstance_40();
      tmp = tmp_0 * (fx - 0.13793103);
    }
    var x = tmp;
    var tmp_1;
    Companion_getInstance_40();
    if (fy > 0.20689656) {
      tmp_1 = fy * fy * fy;
    } else {
      Companion_getInstance_40();
      var tmp_2 = 1.0 / 7.787037;
      Companion_getInstance_40();
      tmp_1 = tmp_2 * (fy - 0.13793103);
    }
    var y = tmp_1;
    var tmp_3;
    Companion_getInstance_40();
    if (fz > 0.20689656) {
      tmp_3 = fz * fz * fz;
    } else {
      Companion_getInstance_40();
      var tmp_4 = 1.0 / 7.787037;
      Companion_getInstance_40();
      tmp_3 = tmp_4 * (fz - 0.13793103);
    }
    var z = tmp_3;
    v[0] = x * Illuminant_getInstance().D50Xyz_1[0];
    v[1] = y * Illuminant_getInstance().D50Xyz_1[1];
    v[2] = z * Illuminant_getInstance().D50Xyz_1[2];
    return v;
  };
  Lab.prototype.fromXyz_idrdie_k$ = function (v) {
    var x = v[0] / Illuminant_getInstance().D50Xyz_1[0];
    var y = v[1] / Illuminant_getInstance().D50Xyz_1[1];
    var z = v[2] / Illuminant_getInstance().D50Xyz_1[2];
    var tmp;
    Companion_getInstance_40();
    if (x > 0.008856452) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = 1.0 / 3.0;
      tmp$ret$0 = Math.pow(x, tmp0_pow);
      tmp = tmp$ret$0;
    } else {
      Companion_getInstance_40();
      var tmp_0 = 7.787037 * x;
      Companion_getInstance_40();
      tmp = tmp_0 + 0.13793103;
    }
    var fx = tmp;
    var tmp_1;
    Companion_getInstance_40();
    if (y > 0.008856452) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.pow' call
      var tmp1_pow = 1.0 / 3.0;
      tmp$ret$1 = Math.pow(y, tmp1_pow);
      tmp_1 = tmp$ret$1;
    } else {
      Companion_getInstance_40();
      var tmp_2 = 7.787037 * y;
      Companion_getInstance_40();
      tmp_1 = tmp_2 + 0.13793103;
    }
    var fy = tmp_1;
    var tmp_3;
    Companion_getInstance_40();
    if (z > 0.008856452) {
      var tmp$ret$2;
      // Inline function 'kotlin.math.pow' call
      var tmp2_pow = 1.0 / 3.0;
      tmp$ret$2 = Math.pow(z, tmp2_pow);
      tmp_3 = tmp$ret$2;
    } else {
      Companion_getInstance_40();
      var tmp_4 = 7.787037 * z;
      Companion_getInstance_40();
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
  function _get_M1__ndbh53($this) {
    return $this.M1__1;
  }
  function _get_M2__ndbh5y($this) {
    return $this.M2__1;
  }
  function _get_InverseM1__sa58eb($this) {
    return $this.InverseM1__1;
  }
  function _get_InverseM2__sa58dg($this) {
    return $this.InverseM2__1;
  }
  function Companion_26() {
    Companion_instance_26 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.818933, 0.032984544, 0.0482003, 0.36186674, 0.9293119, 0.26436627, -0.12885971, 0.03614564, 0.6338517]);
    tmp.M1__1 = mul3x3(tmp$ret$0, chromaticAdaptation(Companion_getInstance_36().Bradford_1.transform_1, Illuminant_getInstance().D50__1.toXyz_1tswm6_k$(), Illuminant_getInstance().D65__1.toXyz_1tswm6_k$()));
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$1 = new Float32Array([0.21045426, 1.9779985, 0.025904037, 0.7936178, -2.4285922, 0.78277177, -0.004072047, 0.4505937, -0.80867577]);
    tmp_0.M2__1 = tmp$ret$1;
    this.InverseM1__1 = inverse3x3(this.M1__1);
    this.InverseM2__1 = inverse3x3(this.M2__1);
  }
  Companion_26.$metadata$ = objectMeta('Companion');
  var Companion_instance_26;
  function Companion_getInstance_41() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function Oklab(name, id) {
    Companion_getInstance_41();
    ColorSpace.call(this, name, Companion_getInstance_37().Lab_1, id);
  }
  Oklab.prototype.get_isWideGamut_oxj4to_k$ = function () {
    return true;
  };
  Oklab.prototype.getMinValue_7r60q4_k$ = function (component) {
    return component === 0 ? 0.0 : -0.5;
  };
  Oklab.prototype.getMaxValue_8bwqwu_k$ = function (component) {
    return component === 0 ? 1.0 : 0.5;
  };
  Oklab.prototype.toXyz_ox86g9_k$ = function (v) {
    v[0] = coerceIn(v[0], 0.0, 1.0);
    v[1] = coerceIn(v[1], -0.5, 0.5);
    v[2] = coerceIn(v[2], -0.5, 0.5);
    mul3x3Float3(Companion_getInstance_41().InverseM2__1, v);
    v[0] = v[0] * v[0] * v[0];
    v[1] = v[1] * v[1] * v[1];
    v[2] = v[2] * v[2] * v[2];
    mul3x3Float3(Companion_getInstance_41().InverseM1__1, v);
    return v;
  };
  Oklab.prototype.fromXyz_idrdie_k$ = function (v) {
    mul3x3Float3(Companion_getInstance_41().M1__1, v);
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
    mul3x3Float3(Companion_getInstance_41().M2__1, v);
    return v;
  };
  Oklab.$metadata$ = classMeta('Oklab', undefined, undefined, undefined, undefined, ColorSpace.prototype);
  function _RenderIntent___init__impl__jceahd(value) {
    return value;
  }
  function _get_value__a43j40_10($this) {
    return $this;
  }
  function Companion_27() {
    Companion_instance_27 = this;
    this.Perceptual_1 = _RenderIntent___init__impl__jceahd(0);
    this.Relative_1 = _RenderIntent___init__impl__jceahd(1);
    this.Saturation_1 = _RenderIntent___init__impl__jceahd(2);
    this.Absolute_1 = _RenderIntent___init__impl__jceahd(3);
  }
  Companion_27.prototype.get_Perceptual_20219r_k$ = function () {
    return this.Perceptual_1;
  };
  Companion_27.prototype.get_Relative_yydwow_k$ = function () {
    return this.Relative_1;
  };
  Companion_27.prototype.get_Saturation_agk0g6_k$ = function () {
    return this.Saturation_1;
  };
  Companion_27.prototype.get_Absolute_4abvrf_k$ = function () {
    return this.Absolute_1;
  };
  Companion_27.$metadata$ = objectMeta('Companion');
  var Companion_instance_27;
  function Companion_getInstance_42() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function RenderIntent__toString_impl_b479rl($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_42().Perceptual_1 ? 'Perceptual' : tmp0_subject === Companion_getInstance_42().Relative_1 ? 'Relative' : tmp0_subject === Companion_getInstance_42().Saturation_1 ? 'Saturation' : tmp0_subject === Companion_getInstance_42().Absolute_1 ? 'Absolute' : 'Unknown';
  }
  function RenderIntent__hashCode_impl_wvd6kg($this) {
    return $this;
  }
  function RenderIntent__equals_impl_5o84ik($this, other) {
    if (!(other instanceof RenderIntent))
      return false;
    var tmp0_other_with_cast = other instanceof RenderIntent ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function RenderIntent(value) {
    Companion_getInstance_42();
    this.value_1 = value;
  }
  RenderIntent.prototype.toString = function () {
    return RenderIntent__toString_impl_b479rl(this.value_1);
  };
  RenderIntent.prototype.hashCode = function () {
    return RenderIntent__hashCode_impl_wvd6kg(this.value_1);
  };
  RenderIntent.prototype.equals = function (other) {
    return RenderIntent__equals_impl_5o84ik(this.value_1, other);
  };
  RenderIntent.$metadata$ = classMeta('RenderIntent');
  function _get_DoubleIdentity__g3p9ng($this) {
    return $this.DoubleIdentity_1;
  }
  function isSrgb($this, primaries, whitePoint, OETF, EOTF, min, max, id) {
    if (id === 0)
      return true;
    if (!compare(primaries, ColorSpaces_getInstance().SrgbPrimaries_1)) {
      return false;
    }
    if (!compare_1(whitePoint, Illuminant_getInstance().D65__1)) {
      return false;
    }
    if (!(min === 0.0))
      return false;
    if (!(max === 1.0))
      return false;
    var srgb = ColorSpaces_getInstance().Srgb_1;
    var x = 0.0;
    while (x <= 1.0) {
      if (!compare_2($this, x, OETF, srgb.oetfOrig_1))
        return false;
      if (!compare_2($this, x, EOTF, srgb.eotfOrig_1))
        return false;
      x = x + 0.00392156862745098;
    }
    return true;
  }
  function compare_2($this, point, a, b) {
    var rA = a(point);
    var rB = b(point);
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = rA - rB;
    tmp$ret$0 = Math.abs(tmp0_abs);
    return tmp$ret$0 <= 0.001;
  }
  function isWideGamut($this, primaries, min, max) {
    return (area($this, primaries) / area($this, ColorSpaces_getInstance().Ntsc1953Primaries_1) > 0.9 ? contains($this, primaries, ColorSpaces_getInstance().SrgbPrimaries_1) : false) ? true : min < 0.0 ? max > 1.0 : false;
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
  function computeWhitePoint($this, toXYZ) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([1.0, 1.0, 1.0]);
    var w = mul3x3Float3(toXYZ, tmp$ret$0);
    var sum = w[0] + w[1] + w[2];
    return new WhitePoint(w[0] / sum, w[1] / sum);
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
    var wx = whitePoint.x_1;
    var wy = whitePoint.y_1;
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
  function _get_min__e6ctxb($this) {
    return $this.min_1;
  }
  function _get_max__e6co8d($this) {
    return $this.max_1;
  }
  function Rgb_init_$Init$(name, toXYZ, oetf, eotf, $this) {
    var tmp = Companion_getInstance_43().computePrimaries_bmzsl0_k$(toXYZ);
    var tmp_0 = computeWhitePoint(Companion_getInstance_43(), toXYZ);
    Companion_getInstance_38();
    Rgb.call($this, name, tmp, tmp_0, null, oetf, eotf, 0.0, 1.0, null, -1);
    return $this;
  }
  function Rgb_init_$Create$(name, toXYZ, oetf, eotf) {
    return Rgb_init_$Init$(name, toXYZ, oetf, eotf, Object.create(Rgb.prototype));
  }
  function Rgb_init_$Init$_0(name, primaries, whitePoint, oetf, eotf, min, max, $this) {
    Companion_getInstance_38();
    Rgb.call($this, name, primaries, whitePoint, null, oetf, eotf, min, max, null, -1);
    return $this;
  }
  function Rgb_init_$Create$_0(name, primaries, whitePoint, oetf, eotf, min, max) {
    return Rgb_init_$Init$_0(name, primaries, whitePoint, oetf, eotf, min, max, Object.create(Rgb.prototype));
  }
  function Rgb_init_$Init$_1(name, toXYZ, function_0, $this) {
    var tmp = Companion_getInstance_43().computePrimaries_bmzsl0_k$(toXYZ);
    var tmp_0 = computeWhitePoint(Companion_getInstance_43(), toXYZ);
    Companion_getInstance_38();
    Rgb_init_$Init$_3(name, tmp, tmp_0, function_0, -1, $this);
    return $this;
  }
  function Rgb_init_$Create$_1(name, toXYZ, function_0) {
    return Rgb_init_$Init$_1(name, toXYZ, function_0, Object.create(Rgb.prototype));
  }
  function Rgb_init_$Init$_2(name, primaries, whitePoint, function_0, $this) {
    Companion_getInstance_38();
    Rgb_init_$Init$_3(name, primaries, whitePoint, function_0, -1, $this);
    return $this;
  }
  function Rgb_init_$Create$_2(name, primaries, whitePoint, function_0) {
    return Rgb_init_$Init$_2(name, primaries, whitePoint, function_0, Object.create(Rgb.prototype));
  }
  function Rgb_init_$Init$_3(name, primaries, whitePoint, function_0, id, $this) {
    var tmp;
    if (function_0.e_1 === 0.0 ? function_0.f_1 === 0.0 : false) {
      tmp = Rgb$_init_$lambda_yyl4se(function_0);
    } else {
      tmp = Rgb$_init_$lambda_yyl4se_0(function_0);
    }
    var tmp_0 = tmp;
    var tmp_1;
    if (function_0.e_1 === 0.0 ? function_0.f_1 === 0.0 : false) {
      tmp_1 = Rgb$_init_$lambda_yyl4se_1(function_0);
    } else {
      tmp_1 = Rgb$_init_$lambda_yyl4se_2(function_0);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_0, tmp_1, 0.0, 1.0, function_0, id);
    return $this;
  }
  function Rgb_init_$Create$_3(name, primaries, whitePoint, function_0, id) {
    return Rgb_init_$Init$_3(name, primaries, whitePoint, function_0, id, Object.create(Rgb.prototype));
  }
  function Rgb_init_$Init$_4(name, toXYZ, gamma, $this) {
    var tmp = Companion_getInstance_43().computePrimaries_bmzsl0_k$(toXYZ);
    var tmp_0 = computeWhitePoint(Companion_getInstance_43(), toXYZ);
    Companion_getInstance_38();
    Rgb_init_$Init$_6(name, tmp, tmp_0, gamma, 0.0, 1.0, -1, $this);
    return $this;
  }
  function Rgb_init_$Create$_4(name, toXYZ, gamma) {
    return Rgb_init_$Init$_4(name, toXYZ, gamma, Object.create(Rgb.prototype));
  }
  function Rgb_init_$Init$_5(name, primaries, whitePoint, gamma, $this) {
    Companion_getInstance_38();
    Rgb_init_$Init$_6(name, primaries, whitePoint, gamma, 0.0, 1.0, -1, $this);
    return $this;
  }
  function Rgb_init_$Create$_5(name, primaries, whitePoint, gamma) {
    return Rgb_init_$Init$_5(name, primaries, whitePoint, gamma, Object.create(Rgb.prototype));
  }
  function Rgb_init_$Init$_6(name, primaries, whitePoint, gamma, min, max, id, $this) {
    var tmp;
    if (gamma === 1.0) {
      tmp = Companion_getInstance_43().DoubleIdentity_1;
    } else {
      tmp = Rgb$_init_$lambda_yyl4se_3(gamma);
    }
    var tmp_0 = tmp;
    var tmp_1;
    if (gamma === 1.0) {
      tmp_1 = Companion_getInstance_43().DoubleIdentity_1;
    } else {
      tmp_1 = Rgb$_init_$lambda_yyl4se_4(gamma);
    }
    var tmp_2 = tmp_1;
    Rgb.call($this, name, primaries, whitePoint, null, tmp_0, tmp_2, min, max, TransferParameters_init_$Create$(gamma, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 96, null), id);
    return $this;
  }
  function Rgb_init_$Create$_6(name, primaries, whitePoint, gamma, min, max, id) {
    return Rgb_init_$Init$_6(name, primaries, whitePoint, gamma, min, max, id, Object.create(Rgb.prototype));
  }
  function Rgb_init_$Init$_7(colorSpace, transform, whitePoint, $this) {
    Companion_getInstance_38();
    Rgb.call($this, colorSpace.name_1, colorSpace.primaries_1, whitePoint, transform, colorSpace.oetfOrig_1, colorSpace.eotfOrig_1, colorSpace.min_1, colorSpace.max_1, colorSpace.transferParameters_1, -1);
    return $this;
  }
  function Rgb_init_$Create$_7(colorSpace, transform, whitePoint) {
    return Rgb_init_$Init$_7(colorSpace, transform, whitePoint, Object.create(Rgb.prototype));
  }
  function Companion_28() {
    Companion_instance_28 = this;
    var tmp = this;
    tmp.DoubleIdentity_1 = Rgb$Companion$DoubleIdentity$lambda;
  }
  Companion_28.prototype.computePrimaries_bmzsl0_k$ = function (toXYZ) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([1.0, 0.0, 0.0]);
    var r = mul3x3Float3(toXYZ, tmp$ret$0);
    var tmp$ret$1;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$1 = new Float32Array([0.0, 1.0, 0.0]);
    var g = mul3x3Float3(toXYZ, tmp$ret$1);
    var tmp$ret$2;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$2 = new Float32Array([0.0, 0.0, 1.0]);
    var b = mul3x3Float3(toXYZ, tmp$ret$2);
    var rSum = r[0] + r[1] + r[2];
    var gSum = g[0] + g[1] + g[2];
    var bSum = b[0] + b[1] + b[2];
    var tmp$ret$3;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp0_floatArrayOf = new Float32Array([r[0] / rSum, r[1] / rSum, g[0] / gSum, g[1] / gSum, b[0] / bSum, b[1] / bSum]);
    tmp$ret$3 = tmp0_floatArrayOf;
    return tmp$ret$3;
  };
  Companion_28.$metadata$ = objectMeta('Companion');
  var Companion_instance_28;
  function Companion_getInstance_43() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function Rgb$oetf$lambda(this$0) {
    return function (x) {
      return coerceIn_0(this$0.oetfOrig_1(x), this$0.min_1, this$0.max_1);
    };
  }
  function Rgb$eotf$lambda(this$0) {
    return function (x) {
      return this$0.eotfOrig_1(coerceIn_0(x, this$0.min_1, this$0.max_1));
    };
  }
  function Rgb$_init_$lambda_yyl4se($function) {
    return function (x) {
      return rcpResponse(x, $function.a_1, $function.b_1, $function.c_1, $function.d_1, $function.gamma_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_0($function) {
    return function (x) {
      return rcpResponse_0(x, $function.a_1, $function.b_1, $function.c_1, $function.d_1, $function.e_1, $function.f_1, $function.gamma_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_1($function) {
    return function (x) {
      return response(x, $function.a_1, $function.b_1, $function.c_1, $function.d_1, $function.gamma_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_2($function) {
    return function (x) {
      return response_0(x, $function.a_1, $function.b_1, $function.c_1, $function.d_1, $function.e_1, $function.f_1, $function.gamma_1);
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
    Companion_getInstance_43();
    ColorSpace.call(this, name, Companion_getInstance_37().Rgb_1, id);
    this.whitePoint_1 = whitePoint;
    this.min_1 = min;
    this.max_1 = max;
    this.transferParameters_1 = transferParameters;
    this.oetfOrig_1 = oetf;
    var tmp = this;
    tmp.oetf_1 = Rgb$oetf$lambda(this);
    this.eotfOrig_1 = eotf;
    var tmp_0 = this;
    tmp_0.eotf_1 = Rgb$eotf$lambda(this);
    if (!(primaries.length === 6) ? !(primaries.length === 9) : false) {
      throw IllegalArgumentException_init_$Create$("The color space's primaries must be defined as an array of 6 floats in xyY or 9 floats in XYZ");
    }
    if (this.min_1 >= this.max_1) {
      throw IllegalArgumentException_init_$Create$('Invalid range: min=' + this.min_1 + ', max=' + this.max_1 + '; min must ' + 'be strictly < max');
    }
    this.primaries_1 = xyPrimaries(Companion_getInstance_43(), primaries);
    if (transform == null) {
      this.transform_1 = computeXYZMatrix(Companion_getInstance_43(), this.primaries_1, this.whitePoint_1);
    } else {
      if (!(transform.length === 9)) {
        throw IllegalArgumentException_init_$Create$('Transform must have 9 entries! Has ' + ('' + transform.length));
      }
      this.transform_1 = transform;
    }
    this.inverseTransform_1 = inverse3x3(this.transform_1);
    this.isWideGamut_1 = isWideGamut(Companion_getInstance_43(), this.primaries_1, this.min_1, this.max_1);
    this.isSrgb_1 = isSrgb(Companion_getInstance_43(), this.primaries_1, this.whitePoint_1, oetf, eotf, this.min_1, this.max_1, id);
  }
  Rgb.prototype.get_whitePoint_g4n5ow_k$ = function () {
    return this.whitePoint_1;
  };
  Rgb.prototype.get_transferParameters_ak703m_k$ = function () {
    return this.transferParameters_1;
  };
  Rgb.prototype.get_primaries_lyb4w9_k$ = function () {
    return this.primaries_1;
  };
  Rgb.prototype.get_transform_px941v_k$ = function () {
    return this.transform_1;
  };
  Rgb.prototype.get_inverseTransform_5ywsth_k$ = function () {
    return this.inverseTransform_1;
  };
  Rgb.prototype.get_oetfOrig_igrylu_k$ = function () {
    return this.oetfOrig_1;
  };
  Rgb.prototype.get_oetf_woror5_k$ = function () {
    return this.oetf_1;
  };
  Rgb.prototype.get_eotfOrig_j2q66e_k$ = function () {
    return this.eotfOrig_1;
  };
  Rgb.prototype.get_eotf_woliat_k$ = function () {
    return this.eotf_1;
  };
  Rgb.prototype.get_isWideGamut_oxj4to_k$ = function () {
    return this.isWideGamut_1;
  };
  Rgb.prototype.get_isSrgb_ew666l_k$ = function () {
    return this.isSrgb_1;
  };
  Rgb.prototype.getPrimaries_umjt7a_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.primaries_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    return tmp$ret$1;
  };
  Rgb.prototype.getTransform_h90fqu_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.transform_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    return tmp$ret$1;
  };
  Rgb.prototype.getInverseTransform_s9peaa_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.inverseTransform_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    return tmp$ret$1;
  };
  Rgb.prototype.getPrimaries_y37ab9_k$ = function (primaries) {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = this.primaries_1;
    var tmp1_copyInto = tmp0_copyInto.length;
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
    tmp$ret$2 = primaries;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, 0, 0, tmp1_copyInto);
    tmp$ret$4 = primaries;
    return tmp$ret$4;
  };
  Rgb.prototype.getTransform_qtf3nl_k$ = function (transform) {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = this.transform_1;
    var tmp1_copyInto = tmp0_copyInto.length;
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
    tmp$ret$2 = transform;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, 0, 0, tmp1_copyInto);
    tmp$ret$4 = transform;
    return tmp$ret$4;
  };
  Rgb.prototype.getInverseTransform_wdrspp_k$ = function (inverseTransform) {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = this.inverseTransform_1;
    var tmp1_copyInto = tmp0_copyInto.length;
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
    tmp$ret$2 = inverseTransform;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, 0, 0, tmp1_copyInto);
    tmp$ret$4 = inverseTransform;
    return tmp$ret$4;
  };
  Rgb.prototype.getMinValue_7r60q4_k$ = function (component) {
    return this.min_1;
  };
  Rgb.prototype.getMaxValue_8bwqwu_k$ = function (component) {
    return this.max_1;
  };
  Rgb.prototype.toLinear_913fy_k$ = function (r, g, b) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([r, g, b]);
    return this.toLinear_7ax7rf_k$(tmp$ret$0);
  };
  Rgb.prototype.toLinear_7ax7rf_k$ = function (v) {
    v[0] = this.eotf_1(v[0]);
    v[1] = this.eotf_1(v[1]);
    v[2] = this.eotf_1(v[2]);
    return v;
  };
  Rgb.prototype.fromLinear_df0aht_k$ = function (r, g, b) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([r, g, b]);
    return this.fromLinear_yxqibq_k$(tmp$ret$0);
  };
  Rgb.prototype.fromLinear_yxqibq_k$ = function (v) {
    v[0] = this.oetf_1(v[0]);
    v[1] = this.oetf_1(v[1]);
    v[2] = this.oetf_1(v[2]);
    return v;
  };
  Rgb.prototype.toXyz_ox86g9_k$ = function (v) {
    v[0] = this.eotf_1(v[0]);
    v[1] = this.eotf_1(v[1]);
    v[2] = this.eotf_1(v[2]);
    return mul3x3Float3(this.transform_1, v);
  };
  Rgb.prototype.fromXyz_idrdie_k$ = function (v) {
    mul3x3Float3(this.inverseTransform_1, v);
    v[0] = this.oetf_1(v[0]);
    v[1] = this.oetf_1(v[1]);
    v[2] = this.oetf_1(v[2]);
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
    if (!(compareTo(rgb.min_1, this.min_1) === 0))
      return false;
    if (!(compareTo(rgb.max_1, this.max_1) === 0))
      return false;
    if (!this.whitePoint_1.equals(rgb.whitePoint_1))
      return false;
    if (!contentEquals(this.primaries_1, rgb.primaries_1))
      return false;
    if (!(this.transferParameters_1 == null)) {
      return equals(this.transferParameters_1, rgb.transferParameters_1);
    } else if (rgb.transferParameters_1 == null) {
      return true;
    }
    return !equals(this.oetfOrig_1, rgb.oetfOrig_1) ? false : equals(this.eotfOrig_1, rgb.eotfOrig_1);
  };
  Rgb.prototype.hashCode = function () {
    var result = ColorSpace.prototype.hashCode.call(this);
    result = imul(31, result) + this.whitePoint_1.hashCode() | 0;
    result = imul(31, result) + contentHashCode(this.primaries_1) | 0;
    result = imul(31, result) + (!(this.min_1 === 0.0) ? toBits(this.min_1) : 0) | 0;
    result = imul(31, result) + (!(this.max_1 === 0.0) ? toBits(this.max_1) : 0) | 0;
    result = imul(31, result) + (!(this.transferParameters_1 == null) ? this.transferParameters_1.hashCode() : 0) | 0;
    if (this.transferParameters_1 == null) {
      result = imul(31, result) + hashCode(this.oetfOrig_1) | 0;
      result = imul(31, result) + hashCode(this.eotfOrig_1) | 0;
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
    this.gamma_1 = gamma;
    this.a_1 = a;
    this.b_1 = b;
    this.c_1 = c;
    this.d_1 = d;
    this.e_1 = e;
    this.f_1 = f;
    if ((((((isNaN_0(this.a_1) ? true : isNaN_0(this.b_1)) ? true : isNaN_0(this.c_1)) ? true : isNaN_0(this.d_1)) ? true : isNaN_0(this.e_1)) ? true : isNaN_0(this.f_1)) ? true : isNaN_0(this.gamma_1)) {
      throw IllegalArgumentException_init_$Create$('Parameters cannot be NaN');
    }
    if (!(this.d_1 >= 0.0 ? this.d_1 <= 1.0 : false)) {
      throw IllegalArgumentException_init_$Create$('Parameter d must be in the range [0..1], was ' + ('' + this.d_1));
    }
    if (this.d_1 === 0.0 ? this.a_1 === 0.0 ? true : this.gamma_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, the transfer function is constant');
    }
    if (this.d_1 >= 1.0 ? this.c_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter c is zero, the transfer function is constant');
    }
    if ((this.a_1 === 0.0 ? true : this.gamma_1 === 0.0) ? this.c_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, and c is zero, the transfer function is constant');
    }
    if (this.c_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be increasing');
    }
    if (this.a_1 < 0.0 ? true : this.gamma_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be positive or increasing');
    }
  }
  TransferParameters.prototype.get_gamma_irsi2m_k$ = function () {
    return this.gamma_1;
  };
  TransferParameters.prototype.get_a_1mhr5k_k$ = function () {
    return this.a_1;
  };
  TransferParameters.prototype.get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  TransferParameters.prototype.get_c_1mhr5m_k$ = function () {
    return this.c_1;
  };
  TransferParameters.prototype.get_d_1mhr5n_k$ = function () {
    return this.d_1;
  };
  TransferParameters.prototype.get_e_1mhr5o_k$ = function () {
    return this.e_1;
  };
  TransferParameters.prototype.get_f_1mhr5p_k$ = function () {
    return this.f_1;
  };
  TransferParameters.prototype.component1_7eebsc_k$ = function () {
    return this.gamma_1;
  };
  TransferParameters.prototype.component2_7eebsb_k$ = function () {
    return this.a_1;
  };
  TransferParameters.prototype.component3_7eebsa_k$ = function () {
    return this.b_1;
  };
  TransferParameters.prototype.component4_7eebs9_k$ = function () {
    return this.c_1;
  };
  TransferParameters.prototype.component5_7eebs8_k$ = function () {
    return this.d_1;
  };
  TransferParameters.prototype.component6_7eebs7_k$ = function () {
    return this.e_1;
  };
  TransferParameters.prototype.component7_7eebs6_k$ = function () {
    return this.f_1;
  };
  TransferParameters.prototype.copy_hfgv4i_k$ = function (gamma, a, b, c, d, e, f) {
    return new TransferParameters(gamma, a, b, c, d, e, f);
  };
  TransferParameters.prototype.copy$default_wkmlyh_k$ = function (gamma, a, b, c, d, e, f, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      gamma = this.gamma_1;
    if (!(($mask0 & 2) === 0))
      a = this.a_1;
    if (!(($mask0 & 4) === 0))
      b = this.b_1;
    if (!(($mask0 & 8) === 0))
      c = this.c_1;
    if (!(($mask0 & 16) === 0))
      d = this.d_1;
    if (!(($mask0 & 32) === 0))
      e = this.e_1;
    if (!(($mask0 & 64) === 0))
      f = this.f_1;
    return this.copy_hfgv4i_k$(gamma, a, b, c, d, e, f);
  };
  TransferParameters.prototype.toString = function () {
    return 'TransferParameters(gamma=' + this.gamma_1 + ', a=' + this.a_1 + ', b=' + this.b_1 + ', c=' + this.c_1 + ', d=' + this.d_1 + ', e=' + this.e_1 + ', f=' + this.f_1 + ')';
  };
  TransferParameters.prototype.hashCode = function () {
    var result = getNumberHashCode(this.gamma_1);
    result = imul(result, 31) + getNumberHashCode(this.a_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.f_1) | 0;
    return result;
  };
  TransferParameters.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransferParameters))
      return false;
    var tmp0_other_with_cast = other instanceof TransferParameters ? other : THROW_CCE();
    if (!equals(this.gamma_1, tmp0_other_with_cast.gamma_1))
      return false;
    if (!equals(this.a_1, tmp0_other_with_cast.a_1))
      return false;
    if (!equals(this.b_1, tmp0_other_with_cast.b_1))
      return false;
    if (!equals(this.c_1, tmp0_other_with_cast.c_1))
      return false;
    if (!equals(this.d_1, tmp0_other_with_cast.d_1))
      return false;
    if (!equals(this.e_1, tmp0_other_with_cast.e_1))
      return false;
    if (!equals(this.f_1, tmp0_other_with_cast.f_1))
      return false;
    return true;
  };
  TransferParameters.$metadata$ = classMeta('TransferParameters');
  function WhitePoint_init_$Init$(x, y, z, $this) {
    WhitePoint_init_$Init$_0(x, y, z, x + y + z, $this);
    return $this;
  }
  function WhitePoint_init_$Create$(x, y, z) {
    return WhitePoint_init_$Init$(x, y, z, Object.create(WhitePoint.prototype));
  }
  function WhitePoint_init_$Init$_0(x, y, z, sum, $this) {
    WhitePoint.call($this, x / sum, y / sum);
    return $this;
  }
  function WhitePoint_init_$Create$_0(x, y, z, sum) {
    return WhitePoint_init_$Init$_0(x, y, z, sum, Object.create(WhitePoint.prototype));
  }
  function WhitePoint(x, y) {
    this.x_1 = x;
    this.y_1 = y;
  }
  WhitePoint.prototype.get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  WhitePoint.prototype.get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  WhitePoint.prototype.toXyz_1tswm6_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp0_floatArrayOf = new Float32Array([this.x_1 / this.y_1, 1.0, (1.0 - this.x_1 - this.y_1) / this.y_1]);
    tmp$ret$0 = tmp0_floatArrayOf;
    return tmp$ret$0;
  };
  WhitePoint.prototype.component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  WhitePoint.prototype.component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  WhitePoint.prototype.copy_138fzp_k$ = function (x, y) {
    return new WhitePoint(x, y);
  };
  WhitePoint.prototype.copy$default_bbfa40_k$ = function (x, y, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = this.x_1;
    if (!(($mask0 & 2) === 0))
      y = this.y_1;
    return this.copy_138fzp_k$(x, y);
  };
  WhitePoint.prototype.toString = function () {
    return 'WhitePoint(x=' + this.x_1 + ', y=' + this.y_1 + ')';
  };
  WhitePoint.prototype.hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    return result;
  };
  WhitePoint.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WhitePoint))
      return false;
    var tmp0_other_with_cast = other instanceof WhitePoint ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  WhitePoint.$metadata$ = classMeta('WhitePoint');
  function clamp($this, x) {
    return coerceIn(x, -2.0, 2.0);
  }
  function Xyz(name, id) {
    ColorSpace.call(this, name, Companion_getInstance_37().Xyz_1, id);
  }
  Xyz.prototype.get_isWideGamut_oxj4to_k$ = function () {
    return true;
  };
  Xyz.prototype.getMinValue_7r60q4_k$ = function (component) {
    return -2.0;
  };
  Xyz.prototype.getMaxValue_8bwqwu_k$ = function (component) {
    return 2.0;
  };
  Xyz.prototype.toXyz_ox86g9_k$ = function (v) {
    v[0] = clamp(this, v[0]);
    v[1] = clamp(this, v[1]);
    v[2] = clamp(this, v[2]);
    return v;
  };
  Xyz.prototype.fromXyz_idrdie_k$ = function (v) {
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
      size = Companion_getInstance_0().Zero_1;
    DrawParams.call($this, density, layoutDirection, canvas, size);
    return $this;
  }
  function DrawParams_init_$Create$(density, layoutDirection, canvas, size, $mask0, $marker) {
    return DrawParams_init_$Init$(density, layoutDirection, canvas, size, $mask0, $marker, Object.create(DrawParams.prototype));
  }
  function _set_fillPaint__8v4n0q($this, _set____db54di) {
    $this.fillPaint_1 = _set____db54di;
  }
  function _get_fillPaint__wv4yju($this) {
    return $this.fillPaint_1;
  }
  function _set_strokePaint__ed14xt($this, _set____db54di) {
    $this.strokePaint_1 = _set____db54di;
  }
  function _get_strokePaint__fxd1e3($this) {
    return $this.strokePaint_1;
  }
  function obtainFillPaint($this) {
    var tmp0_elvis_lhs = $this.fillPaint_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Paint_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainFillPaint.<anonymous>' call
      tmp0_apply.set_style_yrvwzh_k$(Companion_getInstance_24().Fill_1);
      tmp$ret$0 = tmp0_apply;
      var tmp1_also = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainFillPaint.<anonymous>' call
      $this.fillPaint_1 = tmp1_also;
      tmp$ret$1 = tmp1_also;
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function obtainStrokePaint($this) {
    var tmp0_elvis_lhs = $this.strokePaint_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Paint_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainStrokePaint.<anonymous>' call
      tmp0_apply.set_style_yrvwzh_k$(Companion_getInstance_24().Stroke_1);
      tmp$ret$0 = tmp0_apply;
      var tmp1_also = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainStrokePaint.<anonymous>' call
      $this.strokePaint_1 = tmp1_also;
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
        if (!(tmp0_apply.get_strokeWidth_pbded7_k$() === drawStyle.width_1)) {
          tmp0_apply.set_strokeWidth_3zju8k_k$(drawStyle.width_1);
        }
        if (!(tmp0_apply.get_strokeCap_du2v9b_k$() === drawStyle.cap_1)) {
          tmp0_apply.set_strokeCap_un0ni9_k$(drawStyle.cap_1);
        }
        if (!(tmp0_apply.get_strokeMiterLimit_p3434n_k$() === drawStyle.miter_1)) {
          tmp0_apply.set_strokeMiterLimit_jliqsy_k$(drawStyle.miter_1);
        }
        if (!(tmp0_apply.get_strokeJoin_t4v9w5_k$() === drawStyle.join_1)) {
          tmp0_apply.set_strokeJoin_oa46bf_k$(drawStyle.join_1);
        }
        if (!equals(tmp0_apply.get_pathEffect_d6tz6p_k$(), drawStyle.pathEffect_1)) {
          tmp0_apply.set_pathEffect_eo4nwm_k$(drawStyle.pathEffect_1);
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
      brush.applyTo_w34vc_k$($this.get_size_x9ctfw_k$(), tmp0_apply, alpha);
    } else if (!(tmp0_apply.get_alpha_iooth1_k$() === alpha)) {
      tmp0_apply.set_alpha_k1tx50_k$(alpha);
    }
    if (!equals(tmp0_apply.get_colorFilter_nt8pqq_k$(), colorFilter)) {
      tmp0_apply.set_colorFilter_l1l4p0_k$(colorFilter);
    }
    if (!(tmp0_apply.get_blendMode_m8dzwh_k$() === blendMode)) {
      tmp0_apply.set_blendMode_gchh35_k$(blendMode);
    }
    if (!(tmp0_apply.get_filterQuality_2xbue9_k$() === filterQuality)) {
      tmp0_apply.set_filterQuality_8e157j_k$(filterQuality);
    }
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function configurePaint$default($this, brush, style, alpha, colorFilter, blendMode, filterQuality, $mask0, $handler) {
    if (!(($mask0 & 64) === 0))
      filterQuality = Companion_getInstance_44().DefaultFilterQuality_1;
    return configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = selectPaint($this, style);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configurePaint.<anonymous>' call
    var targetColor = modulate(color, $this, alpha);
    if (!equals(tmp0_apply.get_color_v34vrz_k$(), targetColor)) {
      tmp0_apply.set_color_b5evhd_k$(targetColor);
    }
    if (!(tmp0_apply.get_shader_jgtazy_k$() == null)) {
      tmp0_apply.set_shader_bd5o0m_k$(null);
    }
    if (!equals(tmp0_apply.get_colorFilter_nt8pqq_k$(), colorFilter)) {
      tmp0_apply.set_colorFilter_l1l4p0_k$(colorFilter);
    }
    if (!(tmp0_apply.get_blendMode_m8dzwh_k$() === blendMode)) {
      tmp0_apply.set_blendMode_gchh35_k$(blendMode);
    }
    if (!(tmp0_apply.get_filterQuality_2xbue9_k$() === filterQuality)) {
      tmp0_apply.set_filterQuality_8e157j_k$(filterQuality);
    }
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function configurePaint$default_0($this, color, style, alpha, colorFilter, blendMode, filterQuality, $mask0, $handler) {
    if (!(($mask0 & 64) === 0))
      filterQuality = Companion_getInstance_44().DefaultFilterQuality_1;
    return configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function configureStrokePaint($this, color, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = obtainStrokePaint($this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configureStrokePaint.<anonymous>' call
    var targetColor = modulate(color, $this, alpha);
    if (!equals(tmp0_apply.get_color_v34vrz_k$(), targetColor)) {
      tmp0_apply.set_color_b5evhd_k$(targetColor);
    }
    if (!(tmp0_apply.get_shader_jgtazy_k$() == null)) {
      tmp0_apply.set_shader_bd5o0m_k$(null);
    }
    if (!equals(tmp0_apply.get_colorFilter_nt8pqq_k$(), colorFilter)) {
      tmp0_apply.set_colorFilter_l1l4p0_k$(colorFilter);
    }
    if (!(tmp0_apply.get_blendMode_m8dzwh_k$() === blendMode)) {
      tmp0_apply.set_blendMode_gchh35_k$(blendMode);
    }
    if (!(tmp0_apply.get_strokeWidth_pbded7_k$() === strokeWidth)) {
      tmp0_apply.set_strokeWidth_3zju8k_k$(strokeWidth);
    }
    if (!(tmp0_apply.get_strokeMiterLimit_p3434n_k$() === miter)) {
      tmp0_apply.set_strokeMiterLimit_jliqsy_k$(miter);
    }
    if (!(tmp0_apply.get_strokeCap_du2v9b_k$() === cap)) {
      tmp0_apply.set_strokeCap_un0ni9_k$(cap);
    }
    if (!(tmp0_apply.get_strokeJoin_t4v9w5_k$() === join)) {
      tmp0_apply.set_strokeJoin_oa46bf_k$(join);
    }
    if (!equals(tmp0_apply.get_pathEffect_d6tz6p_k$(), pathEffect)) {
      tmp0_apply.set_pathEffect_eo4nwm_k$(pathEffect);
    }
    if (!(tmp0_apply.get_filterQuality_2xbue9_k$() === filterQuality)) {
      tmp0_apply.set_filterQuality_8e157j_k$(filterQuality);
    }
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function configureStrokePaint$default($this, color, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality, $mask0, $handler) {
    if (!(($mask0 & 1024) === 0))
      filterQuality = Companion_getInstance_44().DefaultFilterQuality_1;
    return configureStrokePaint($this, color, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality);
  }
  function configureStrokePaint_0($this, brush, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = obtainStrokePaint($this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configureStrokePaint.<anonymous>' call
    if (!(brush == null)) {
      brush.applyTo_w34vc_k$($this.get_size_x9ctfw_k$(), tmp0_apply, alpha);
    } else if (!(tmp0_apply.get_alpha_iooth1_k$() === alpha)) {
      tmp0_apply.set_alpha_k1tx50_k$(alpha);
    }
    if (!equals(tmp0_apply.get_colorFilter_nt8pqq_k$(), colorFilter)) {
      tmp0_apply.set_colorFilter_l1l4p0_k$(colorFilter);
    }
    if (!(tmp0_apply.get_blendMode_m8dzwh_k$() === blendMode)) {
      tmp0_apply.set_blendMode_gchh35_k$(blendMode);
    }
    if (!(tmp0_apply.get_strokeWidth_pbded7_k$() === strokeWidth)) {
      tmp0_apply.set_strokeWidth_3zju8k_k$(strokeWidth);
    }
    if (!(tmp0_apply.get_strokeMiterLimit_p3434n_k$() === miter)) {
      tmp0_apply.set_strokeMiterLimit_jliqsy_k$(miter);
    }
    if (!(tmp0_apply.get_strokeCap_du2v9b_k$() === cap)) {
      tmp0_apply.set_strokeCap_un0ni9_k$(cap);
    }
    if (!(tmp0_apply.get_strokeJoin_t4v9w5_k$() === join)) {
      tmp0_apply.set_strokeJoin_oa46bf_k$(join);
    }
    if (!equals(tmp0_apply.get_pathEffect_d6tz6p_k$(), pathEffect)) {
      tmp0_apply.set_pathEffect_eo4nwm_k$(pathEffect);
    }
    if (!(tmp0_apply.get_filterQuality_2xbue9_k$() === filterQuality)) {
      tmp0_apply.set_filterQuality_8e157j_k$(filterQuality);
    }
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function configureStrokePaint$default_0($this, brush, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality, $mask0, $handler) {
    if (!(($mask0 & 1024) === 0))
      filterQuality = Companion_getInstance_44().DefaultFilterQuality_1;
    return configureStrokePaint_0($this, brush, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality);
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
    this.density_1 = density;
    this.layoutDirection_1 = layoutDirection;
    this.canvas_1 = canvas;
    this.size_1 = size;
  }
  DrawParams.prototype.set_density_kzqph6_k$ = function (_set____db54di) {
    this.density_1 = _set____db54di;
  };
  DrawParams.prototype.get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  DrawParams.prototype.set_layoutDirection_g6d9ui_k$ = function (_set____db54di) {
    this.layoutDirection_1 = _set____db54di;
  };
  DrawParams.prototype.get_layoutDirection_7e37v0_k$ = function () {
    return this.layoutDirection_1;
  };
  DrawParams.prototype.set_canvas_eyjvr_k$ = function (_set____db54di) {
    this.canvas_1 = _set____db54di;
  };
  DrawParams.prototype.get_canvas_bshgm9_k$ = function () {
    return this.canvas_1;
  };
  DrawParams.prototype.set_size_xj1bzm_k$ = function (_set____db54di) {
    this.size_1 = _set____db54di;
  };
  DrawParams.prototype.get_size_x9ctfw_k$ = function () {
    return this.size_1;
  };
  DrawParams.prototype.component1_7eebsc_k$ = function () {
    return this.density_1;
  };
  DrawParams.prototype.component2_7eebsb_k$ = function () {
    return this.layoutDirection_1;
  };
  DrawParams.prototype.component3_7eebsa_k$ = function () {
    return this.canvas_1;
  };
  DrawParams.prototype.component4_e3pqs9_k$ = function () {
    return this.size_1;
  };
  DrawParams.prototype.copy_vtyzqi_k$ = function (density, layoutDirection, canvas, size) {
    return new DrawParams(density, layoutDirection, canvas, size);
  };
  DrawParams.prototype.copy$default_xm32sz_k$ = function (density, layoutDirection, canvas, size, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      density = this.density_1;
    if (!(($mask0 & 2) === 0))
      layoutDirection = this.layoutDirection_1;
    if (!(($mask0 & 4) === 0))
      canvas = this.canvas_1;
    if (!(($mask0 & 8) === 0))
      size = this.size_1;
    return this.copy_vtyzqi_k$(density, layoutDirection, canvas, size);
  };
  DrawParams.prototype.toString = function () {
    return 'DrawParams(density=' + this.density_1 + ', layoutDirection=' + this.layoutDirection_1 + ', canvas=' + this.canvas_1 + ', size=' + new Size_0(this.size_1) + ')';
  };
  DrawParams.prototype.hashCode = function () {
    var result = hashCode(this.density_1);
    result = imul(result, 31) + this.layoutDirection_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.canvas_1) | 0;
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.size_1) | 0;
    return result;
  };
  DrawParams.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DrawParams))
      return false;
    var tmp0_other_with_cast = other instanceof DrawParams ? other : THROW_CCE();
    if (!equals(this.density_1, tmp0_other_with_cast.density_1))
      return false;
    if (!this.layoutDirection_1.equals(tmp0_other_with_cast.layoutDirection_1))
      return false;
    if (!equals(this.canvas_1, tmp0_other_with_cast.canvas_1))
      return false;
    if (!equals(this.size_1, tmp0_other_with_cast.size_1))
      return false;
    return true;
  };
  DrawParams.$metadata$ = classMeta('DrawParams');
  function CanvasDrawScope$drawContext$1(this$0) {
    this.this$0__1 = this$0;
    this.transform_1 = asDrawTransform(this);
  }
  CanvasDrawScope$drawContext$1.prototype.get_canvas_bshgm9_k$ = function () {
    return this.this$0__1.drawParams_1.canvas_1;
  };
  CanvasDrawScope$drawContext$1.prototype.set_size_xj1bzm_k$ = function (value) {
    this.this$0__1.drawParams_1.size_1 = value;
  };
  CanvasDrawScope$drawContext$1.prototype.get_size_x9ctfw_k$ = function () {
    return this.this$0__1.drawParams_1.size_1;
  };
  CanvasDrawScope$drawContext$1.prototype.get_transform_px941v_k$ = function () {
    return this.transform_1;
  };
  CanvasDrawScope$drawContext$1.$metadata$ = classMeta(undefined, [DrawContext]);
  function CanvasDrawScope() {
    var tmp = this;
    tmp.drawParams_1 = DrawParams_init_$Create$(null, null, null, null, 15, null);
    var tmp_0 = this;
    tmp_0.drawContext_1 = new CanvasDrawScope$drawContext$1(this);
    this.fillPaint_1 = null;
    this.strokePaint_1 = null;
  }
  CanvasDrawScope.prototype.get_drawParams_ncgfpp_k$ = function () {
    return this.drawParams_1;
  };
  CanvasDrawScope.prototype.get_layoutDirection_7e37v0_k$ = function () {
    return this.drawParams_1.layoutDirection_1;
  };
  CanvasDrawScope.prototype.get_density_qy0267_k$ = function () {
    return this.drawParams_1.density_1.get_density_qy0267_k$();
  };
  CanvasDrawScope.prototype.get_fontScale_h56n3i_k$ = function () {
    return this.drawParams_1.density_1.get_fontScale_h56n3i_k$();
  };
  CanvasDrawScope.prototype.get_drawContext_ffwztu_k$ = function () {
    return this.drawContext_1;
  };
  CanvasDrawScope.prototype.drawLine_94tzv7_k$ = function (brush, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    Companion_getInstance_45();
    var tmp_0 = Companion_getInstance_33().Miter_1;
    return tmp.drawLine_uyv0nw_k$(start, end, configureStrokePaint$default_0(this, brush, strokeWidth, 4.0, cap, tmp_0, pathEffect, alpha, colorFilter, blendMode, null, 1024, null));
  };
  CanvasDrawScope.prototype.drawLine_qcvbii_k$ = function (color, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    Companion_getInstance_45();
    var tmp_0 = Companion_getInstance_33().Miter_1;
    return tmp.drawLine_uyv0nw_k$(start, end, configureStrokePaint$default(this, color, strokeWidth, 4.0, cap, tmp_0, pathEffect, alpha, colorFilter, blendMode, null, 1024, null));
  };
  CanvasDrawScope.prototype.drawRect_4jm64w_k$ = function (brush, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    var tmp_0 = _Offset___get_x__impl__xvi35n(topLeft);
    var tmp_1 = _Offset___get_y__impl__8bzhra(topLeft);
    var tmp_2 = _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size);
    var tmp_3 = _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size);
    return tmp.drawRect_iwqaze_k$(tmp_0, tmp_1, tmp_2, tmp_3, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawRect_srg7q1_k$ = function (color, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    var tmp_0 = _Offset___get_x__impl__xvi35n(topLeft);
    var tmp_1 = _Offset___get_y__impl__8bzhra(topLeft);
    var tmp_2 = _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size);
    var tmp_3 = _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size);
    return tmp.drawRect_iwqaze_k$(tmp_0, tmp_1, tmp_2, tmp_3, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawImage_bk8e6s_k$ = function (image, topLeft, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    return tmp.drawImage_wbfair_k$(image, topLeft, configurePaint$default(this, null, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawImage_td6jz_k$ = function (image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    return tmp.drawImageRect_pn8joi_k$(image, srcOffset, srcSize, dstOffset, dstSize, configurePaint$default(this, null, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawImage_riofdh_k$ = function (image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    return this.drawParams_1.canvas_1.drawImageRect_pn8joi_k$(image, srcOffset, srcSize, dstOffset, dstSize, configurePaint(this, null, style, alpha, colorFilter, blendMode, filterQuality));
  };
  CanvasDrawScope.prototype.drawRoundRect_nkvmol_k$ = function (brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    var tmp_0 = _Offset___get_x__impl__xvi35n(topLeft);
    var tmp_1 = _Offset___get_y__impl__8bzhra(topLeft);
    var tmp_2 = _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size);
    var tmp_3 = _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size);
    var tmp_4 = _CornerRadius___get_x__impl__1594cn(cornerRadius);
    var tmp_5 = _CornerRadius___get_y__impl__tyvleu(cornerRadius);
    return tmp.drawRoundRect_8v0cs4_k$(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawRoundRect_q7amlu_k$ = function (color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    var tmp_0 = _Offset___get_x__impl__xvi35n(topLeft);
    var tmp_1 = _Offset___get_y__impl__8bzhra(topLeft);
    var tmp_2 = _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size);
    var tmp_3 = _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size);
    var tmp_4 = _CornerRadius___get_x__impl__1594cn(cornerRadius);
    var tmp_5 = _CornerRadius___get_y__impl__tyvleu(cornerRadius);
    return tmp.drawRoundRect_8v0cs4_k$(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawCircle_sp46sp_k$ = function (brush, radius, center, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    return tmp.drawCircle_8yzxtr_k$(center, radius, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawCircle_n7txn6_k$ = function (color, radius, center, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    return tmp.drawCircle_8yzxtr_k$(center, radius, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawOval_poyb4u_k$ = function (brush, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    var tmp_0 = _Offset___get_x__impl__xvi35n(topLeft);
    var tmp_1 = _Offset___get_y__impl__8bzhra(topLeft);
    var tmp_2 = _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size);
    var tmp_3 = _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size);
    return tmp.drawOval_wmf8q4_k$(tmp_0, tmp_1, tmp_2, tmp_3, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawOval_1h49jp_k$ = function (color, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    var tmp_0 = _Offset___get_x__impl__xvi35n(topLeft);
    var tmp_1 = _Offset___get_y__impl__8bzhra(topLeft);
    var tmp_2 = _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size);
    var tmp_3 = _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size);
    return tmp.drawOval_wmf8q4_k$(tmp_0, tmp_1, tmp_2, tmp_3, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawArc_vjjneq_k$ = function (brush, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    var tmp_0 = _Offset___get_x__impl__xvi35n(topLeft);
    var tmp_1 = _Offset___get_y__impl__8bzhra(topLeft);
    var tmp_2 = _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size);
    var tmp_3 = _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size);
    return tmp.drawArc_xj6sd2_k$(tmp_0, tmp_1, tmp_2, tmp_3, startAngle, sweepAngle, useCenter, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawArc_y7e861_k$ = function (color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    var tmp_0 = _Offset___get_x__impl__xvi35n(topLeft);
    var tmp_1 = _Offset___get_y__impl__8bzhra(topLeft);
    var tmp_2 = _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size);
    var tmp_3 = _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size);
    return tmp.drawArc_xj6sd2_k$(tmp_0, tmp_1, tmp_2, tmp_3, startAngle, sweepAngle, useCenter, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawPath_vpl0ok_k$ = function (path, color, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    return tmp.drawPath_843lu1_k$(path, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawPath_vsb9f_k$ = function (path, brush, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    return tmp.drawPath_843lu1_k$(path, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawPoints_tvcs0g_k$ = function (points, pointMode, color, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    Companion_getInstance_45();
    var tmp_0 = Companion_getInstance_33().Miter_1;
    return tmp.drawPoints_7nk41w_k$(pointMode, points, configureStrokePaint$default(this, color, strokeWidth, 4.0, cap, tmp_0, pathEffect, alpha, colorFilter, blendMode, null, 1024, null));
  };
  CanvasDrawScope.prototype.drawPoints_yexgjr_k$ = function (points, pointMode, brush, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    Companion_getInstance_45();
    var tmp_0 = Companion_getInstance_33().Miter_1;
    return tmp.drawPoints_7nk41w_k$(pointMode, points, configureStrokePaint$default_0(this, brush, strokeWidth, 4.0, cap, tmp_0, pathEffect, alpha, colorFilter, blendMode, null, 1024, null));
  };
  CanvasDrawScope.prototype.draw_3qpj3e_k$ = function (density, layoutDirection, canvas, size, block) {
    var tmp0_container = this.drawParams_1;
    var prevDensity = tmp0_container.component1_7eebsc_k$();
    var prevLayoutDirection = tmp0_container.component2_7eebsb_k$();
    var prevCanvas = tmp0_container.component3_7eebsa_k$();
    var prevSize = tmp0_container.component4_e3pqs9_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.drawParams_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    tmp0_apply.density_1 = density;
    tmp0_apply.layoutDirection_1 = layoutDirection;
    tmp0_apply.canvas_1 = canvas;
    tmp0_apply.size_1 = size;
    tmp$ret$0 = tmp0_apply;
    canvas.save_erlm4_k$();
    block(this);
    canvas.restore_a2id37_k$();
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp1_apply = this.drawParams_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    tmp1_apply.density_1 = prevDensity;
    tmp1_apply.layoutDirection_1 = prevLayoutDirection;
    tmp1_apply.canvas_1 = prevCanvas;
    tmp1_apply.size_1 = prevSize;
    tmp$ret$1 = tmp1_apply;
  };
  CanvasDrawScope.$metadata$ = classMeta('CanvasDrawScope', [DrawScope]);
  function asDrawTransform(_this__u8e3s4) {
    init_properties_CanvasDrawScope_kt_hh6bzw();
    return new asDrawTransform$1(_this__u8e3s4);
  }
  function asDrawTransform$1($this_asDrawTransform) {
    this.$this_asDrawTransform_1 = $this_asDrawTransform;
  }
  asDrawTransform$1.prototype.get_size_x9ctfw_k$ = function () {
    return this.$this_asDrawTransform_1.get_size_x9ctfw_k$();
  };
  asDrawTransform$1.prototype.get_center_568eeq_k$ = function () {
    return get_center(this.get_size_x9ctfw_k$());
  };
  asDrawTransform$1.prototype.inset_n0cgms_k$ = function (left, top, right, bottom) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.$this_asDrawTransform_1.get_canvas_bshgm9_k$();
    // Inline function 'kotlin.contracts.contract' call
    var updatedSize = Size(_Size___get_width__impl__58y75t(this.get_size_x9ctfw_k$()) - (left + right), _Size___get_height__impl__a04p02(this.get_size_x9ctfw_k$()) - (top + bottom));
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
    this.$this_asDrawTransform_1.set_size_xj1bzm_k$(updatedSize);
    tmp0_let.translate_62wf99_k$(left, top);
    tmp$ret$1 = Unit_getInstance();
  };
  asDrawTransform$1.prototype.clipRect_si0ig1_k$ = function (left, top, right, bottom, clipOp) {
    this.$this_asDrawTransform_1.get_canvas_bshgm9_k$().clipRect_si0ig1_k$(left, top, right, bottom, clipOp);
  };
  asDrawTransform$1.prototype.clipPath_kn87dc_k$ = function (path, clipOp) {
    this.$this_asDrawTransform_1.get_canvas_bshgm9_k$().clipPath_kn87dc_k$(path, clipOp);
  };
  asDrawTransform$1.prototype.translate_62wf99_k$ = function (left, top) {
    this.$this_asDrawTransform_1.get_canvas_bshgm9_k$().translate_62wf99_k$(left, top);
  };
  asDrawTransform$1.prototype.rotate_qski4n_k$ = function (degrees, pivot) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.$this_asDrawTransform_1.get_canvas_bshgm9_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.<no name provided>.rotate.<anonymous>' call
    tmp0_apply.translate_62wf99_k$(_Offset___get_x__impl__xvi35n(pivot), _Offset___get_y__impl__8bzhra(pivot));
    tmp0_apply.rotate_ypq2w2_k$(degrees);
    tmp0_apply.translate_62wf99_k$(-_Offset___get_x__impl__xvi35n(pivot), -_Offset___get_y__impl__8bzhra(pivot));
    tmp$ret$0 = tmp0_apply;
  };
  asDrawTransform$1.prototype.scale_qp5ya8_k$ = function (scaleX, scaleY, pivot) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.$this_asDrawTransform_1.get_canvas_bshgm9_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.<no name provided>.scale.<anonymous>' call
    tmp0_apply.translate_62wf99_k$(_Offset___get_x__impl__xvi35n(pivot), _Offset___get_y__impl__8bzhra(pivot));
    tmp0_apply.scale_sphyvb_k$(scaleX, scaleY);
    tmp0_apply.translate_62wf99_k$(-_Offset___get_x__impl__xvi35n(pivot), -_Offset___get_y__impl__8bzhra(pivot));
    tmp$ret$0 = tmp0_apply;
  };
  asDrawTransform$1.prototype.transform_v2nyvt_k$ = function (matrix) {
    this.$this_asDrawTransform_1.get_canvas_bshgm9_k$().concat_oxfhdd_k$(matrix);
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
  function Companion_29() {
    Companion_instance_29 = this;
    this.DefaultBlendMode_1 = Companion_getInstance_14().SrcOver_1;
    this.DefaultFilterQuality_1 = Companion_getInstance_19().Low_1;
  }
  Companion_29.prototype.get_DefaultBlendMode_8kor9s_k$ = function () {
    return this.DefaultBlendMode_1;
  };
  Companion_29.prototype.get_DefaultFilterQuality_lpc3m8_k$ = function () {
    return this.DefaultFilterQuality_1;
  };
  Companion_29.$metadata$ = objectMeta('Companion');
  var Companion_instance_29;
  function Companion_getInstance_44() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function DrawScope() {
    Companion_getInstance_44();
  }
  DrawScope.$metadata$ = interfaceMeta('DrawScope', [Density_0]);
  function DrawStyle() {
  }
  DrawStyle.$metadata$ = classMeta('DrawStyle');
  function drawIntoCanvas(_this__u8e3s4, block) {
    return block(_this__u8e3s4.get_drawContext_ffwztu_k$().get_canvas_bshgm9_k$());
  }
  function Stroke_init_$Init$(width, miter, cap, join, pathEffect, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      width = 0.0;
    if (!(($mask0 & 2) === 0)) {
      Companion_getInstance_45();
      miter = 4.0;
    }
    if (!(($mask0 & 4) === 0))
      cap = Companion_getInstance_32().Butt_1;
    if (!(($mask0 & 8) === 0))
      join = Companion_getInstance_33().Miter_1;
    if (!(($mask0 & 16) === 0))
      pathEffect = null;
    Stroke.call($this, width, miter, cap, join, pathEffect);
    return $this;
  }
  function Stroke_init_$Create$(width, miter, cap, join, pathEffect, $mask0, $marker) {
    return Stroke_init_$Init$(width, miter, cap, join, pathEffect, $mask0, $marker, Object.create(Stroke.prototype));
  }
  function Companion_30() {
    Companion_instance_30 = this;
    this.HairlineWidth_1 = 0.0;
    this.DefaultMiter_1 = 4.0;
    this.DefaultCap_1 = Companion_getInstance_32().Butt_1;
    this.DefaultJoin_1 = Companion_getInstance_33().Miter_1;
  }
  Companion_30.prototype.get_HairlineWidth_tck213_k$ = function () {
    return this.HairlineWidth_1;
  };
  Companion_30.prototype.get_DefaultMiter_3rtz6b_k$ = function () {
    return this.DefaultMiter_1;
  };
  Companion_30.prototype.get_DefaultCap_alsnaw_k$ = function () {
    return this.DefaultCap_1;
  };
  Companion_30.prototype.get_DefaultJoin_5ovl58_k$ = function () {
    return this.DefaultJoin_1;
  };
  Companion_30.$metadata$ = objectMeta('Companion');
  var Companion_instance_30;
  function Companion_getInstance_45() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function Stroke(width, miter, cap, join, pathEffect) {
    Companion_getInstance_45();
    DrawStyle.call(this);
    this.width_1 = width;
    this.miter_1 = miter;
    this.cap_1 = cap;
    this.join_1 = join;
    this.pathEffect_1 = pathEffect;
  }
  Stroke.prototype.get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  Stroke.prototype.get_miter_iv8ijg_k$ = function () {
    return this.miter_1;
  };
  Stroke.prototype.get_cap_nlcndj_k$ = function () {
    return this.cap_1;
  };
  Stroke.prototype.get_join_s7mxx9_k$ = function () {
    return this.join_1;
  };
  Stroke.prototype.get_pathEffect_d6tz6p_k$ = function () {
    return this.pathEffect_1;
  };
  Stroke.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stroke))
      return false;
    if (!(this.width_1 === other.width_1))
      return false;
    if (!(this.miter_1 === other.miter_1))
      return false;
    if (!(this.cap_1 === other.cap_1))
      return false;
    if (!(this.join_1 === other.join_1))
      return false;
    if (!equals(this.pathEffect_1, other.pathEffect_1))
      return false;
    return true;
  };
  Stroke.prototype.hashCode = function () {
    var result = getNumberHashCode(this.width_1);
    result = imul(31, result) + getNumberHashCode(this.miter_1) | 0;
    result = imul(31, result) + StrokeCap__hashCode_impl_posxk8(this.cap_1) | 0;
    result = imul(31, result) + StrokeJoin__hashCode_impl_3pyh8w(this.join_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.pathEffect_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  Stroke.prototype.toString = function () {
    return 'Stroke(width=' + this.width_1 + ', miter=' + this.miter_1 + ', cap=' + new StrokeCap(this.cap_1) + ', join=' + new StrokeJoin(this.join_1) + ', pathEffect=' + this.pathEffect_1 + ')';
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
    _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().inset_n0cgms_k$(left, top, right, bottom);
    block(_this__u8e3s4);
    _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().inset_n0cgms_k$(-left, -top, -right, -bottom);
  }
  function scale(_this__u8e3s4, scaleX, scaleY, pivot, block) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = _this__u8e3s4.get_drawContext_ffwztu_k$();
    // Inline function 'kotlin.contracts.contract' call
    var previousSize = tmp0_with.get_size_x9ctfw_k$();
    tmp0_with.get_canvas_bshgm9_k$().save_erlm4_k$();
    // Inline function 'androidx.compose.ui.graphics.drawscope.scale.<anonymous>' call
    var tmp1__anonymous__uwfjfc = tmp0_with.get_transform_px941v_k$();
    tmp1__anonymous__uwfjfc.scale_qp5ya8_k$(scaleX, scaleY, pivot);
    block(_this__u8e3s4);
    tmp0_with.get_canvas_bshgm9_k$().restore_a2id37_k$();
    tmp0_with.set_size_xj1bzm_k$(previousSize);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function translate(_this__u8e3s4, left, top, block) {
    _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_62wf99_k$(left, top);
    block(_this__u8e3s4);
    _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_62wf99_k$(-left, -top);
  }
  function withTransform(_this__u8e3s4, transformBlock, drawBlock) {
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = _this__u8e3s4.get_drawContext_ffwztu_k$();
    // Inline function 'kotlin.contracts.contract' call
    var previousSize = tmp0_with.get_size_x9ctfw_k$();
    tmp0_with.get_canvas_bshgm9_k$().save_erlm4_k$();
    transformBlock(tmp0_with.get_transform_px941v_k$());
    drawBlock(_this__u8e3s4);
    tmp0_with.get_canvas_bshgm9_k$().restore_a2id37_k$();
    tmp0_with.set_size_xj1bzm_k$(previousSize);
    tmp$ret$0 = Unit_getInstance();
    return tmp$ret$0;
  }
  function clipRect_0(_this__u8e3s4, left, top, right, bottom, clipOp, block) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = _this__u8e3s4.get_drawContext_ffwztu_k$();
    // Inline function 'kotlin.contracts.contract' call
    var previousSize = tmp0_with.get_size_x9ctfw_k$();
    tmp0_with.get_canvas_bshgm9_k$().save_erlm4_k$();
    // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
    var tmp0__anonymous__q1qw7t = tmp0_with.get_transform_px941v_k$();
    tmp0__anonymous__q1qw7t.clipRect_si0ig1_k$(left, top, right, bottom, clipOp);
    block(_this__u8e3s4);
    tmp0_with.get_canvas_bshgm9_k$().restore_a2id37_k$();
    tmp0_with.set_size_xj1bzm_k$(previousSize);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function DrawScopeMarker() {
  }
  DrawScopeMarker.prototype.equals = function (other) {
    if (!(other instanceof DrawScopeMarker))
      return false;
    var tmp0_other_with_cast = other instanceof DrawScopeMarker ? other : THROW_CCE();
    return true;
  };
  DrawScopeMarker.prototype.hashCode = function () {
    return 0;
  };
  DrawScopeMarker.prototype.toString = function () {
    return '@androidx.compose.ui.graphics.drawscope.DrawScopeMarker()';
  };
  DrawScopeMarker.$metadata$ = classMeta('DrawScopeMarker', [Annotation]);
  function DrawTransform() {
  }
  DrawTransform.$metadata$ = interfaceMeta('DrawTransform');
  function EmptyCanvas() {
  }
  EmptyCanvas.prototype.save_erlm4_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.restore_a2id37_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.saveLayer_f9ux7q_k$ = function (bounds, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.translate_62wf99_k$ = function (dx, dy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.scale_sphyvb_k$ = function (sx, sy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.rotate_ypq2w2_k$ = function (degrees) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.skew_hcshkp_k$ = function (sx, sy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.concat_oxfhdd_k$ = function (matrix) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.clipRect_si0ig1_k$ = function (left, top, right, bottom, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.clipPath_kn87dc_k$ = function (path, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.drawLine_uyv0nw_k$ = function (p1, p2, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.drawRect_iwqaze_k$ = function (left, top, right, bottom, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.drawRoundRect_8v0cs4_k$ = function (left, top, right, bottom, radiusX, radiusY, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.drawOval_wmf8q4_k$ = function (left, top, right, bottom, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.drawCircle_8yzxtr_k$ = function (center, radius, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.drawArc_xj6sd2_k$ = function (left, top, right, bottom, startAngle, sweepAngle, useCenter, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.drawPath_843lu1_k$ = function (path, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.drawImage_wbfair_k$ = function (image, topLeftOffset, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.drawImageRect_pn8joi_k$ = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.drawPoints_7nk41w_k$ = function (pointMode, points, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.drawRawPoints_xnm1nu_k$ = function (pointMode, points, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.drawVertices_blo9xi_k$ = function (vertices, blendMode, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.enableZ_eyv21m_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.disableZ_14frxd_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.$metadata$ = classMeta('EmptyCanvas', [Canvas]);
  function _set_layerPaint__n08z3e($this, _set____db54di) {
    $this.layerPaint_1 = _set____db54di;
  }
  function _get_layerPaint__7y0dy6($this) {
    return $this.layerPaint_1;
  }
  function obtainPaint($this) {
    var target = $this.layerPaint_1;
    if (target == null) {
      target = Paint_0();
      $this.layerPaint_1 = target;
    }
    return target;
  }
  function _set_useLayer__oyrhfx($this, _set____db54di) {
    $this.useLayer_1 = _set____db54di;
  }
  function _get_useLayer__c5v5z5($this) {
    return $this.useLayer_1;
  }
  function _set_colorFilter__ke9voq($this, _set____db54di) {
    $this.colorFilter_1 = _set____db54di;
  }
  function _get_colorFilter__kcfzyi($this) {
    return $this.colorFilter_1;
  }
  function configureColorFilter($this, colorFilter) {
    if (!equals($this.colorFilter_1, colorFilter)) {
      var consumedColorFilter = $this.applyColorFilter_lr96qs_k$(colorFilter);
      if (!consumedColorFilter) {
        if (colorFilter == null) {
          var tmp0_safe_receiver = $this.layerPaint_1;
          if (tmp0_safe_receiver == null) {
          } else {
            tmp0_safe_receiver.set_colorFilter_l1l4p0_k$(null);
          }
          $this.useLayer_1 = false;
        } else {
          obtainPaint($this).set_colorFilter_l1l4p0_k$(colorFilter);
          $this.useLayer_1 = true;
        }
      }
      $this.colorFilter_1 = colorFilter;
    }
  }
  function _set_alpha__c56vtz($this, _set____db54di) {
    $this.alpha_1 = _set____db54di;
  }
  function _get_alpha__jvxknh($this) {
    return $this.alpha_1;
  }
  function configureAlpha($this, alpha) {
    if (!($this.alpha_1 === alpha)) {
      var consumed = $this.applyAlpha_luh7xa_k$(alpha);
      if (!consumed) {
        if (alpha === get_DefaultAlpha()) {
          var tmp0_safe_receiver = $this.layerPaint_1;
          if (tmp0_safe_receiver == null) {
          } else {
            tmp0_safe_receiver.set_alpha_k1tx50_k$(alpha);
          }
          $this.useLayer_1 = false;
        } else {
          obtainPaint($this).set_alpha_k1tx50_k$(alpha);
          $this.useLayer_1 = true;
        }
      }
      $this.alpha_1 = alpha;
    }
  }
  function _set_layoutDirection__jzuy7k($this, _set____db54di) {
    $this.layoutDirection_1 = _set____db54di;
  }
  function _get_layoutDirection__u3l5q4($this) {
    return $this.layoutDirection_1;
  }
  function configureLayoutDirection($this, rtl) {
    if (!$this.layoutDirection_1.equals(rtl)) {
      $this.applyLayoutDirection_nfptms_k$(rtl);
      $this.layoutDirection_1 = rtl;
    }
  }
  function _get_drawLambda__orm7r4($this) {
    return $this.drawLambda_1;
  }
  function Painter$drawLambda$lambda(this$0) {
    return function ($this$null) {
      this$0.onDraw_lvum79_k$($this$null);
      return Unit_getInstance();
    };
  }
  function Painter() {
    this.layerPaint_1 = null;
    this.useLayer_1 = false;
    this.colorFilter_1 = null;
    this.alpha_1 = get_DefaultAlpha();
    this.layoutDirection_1 = LayoutDirection_Ltr_getInstance();
    var tmp = this;
    tmp.drawLambda_1 = Painter$drawLambda$lambda(this);
  }
  Painter.prototype.applyAlpha_luh7xa_k$ = function (alpha) {
    return false;
  };
  Painter.prototype.applyColorFilter_lr96qs_k$ = function (colorFilter) {
    return false;
  };
  Painter.prototype.applyLayoutDirection_nfptms_k$ = function (layoutDirection) {
    return false;
  };
  Painter.prototype.draw_hzw39q_k$ = function (_this__u8e3s4, size, alpha, colorFilter) {
    configureAlpha(this, alpha);
    configureColorFilter(this, colorFilter);
    configureLayoutDirection(this, _this__u8e3s4.get_layoutDirection_7e37v0_k$());
    // Inline function 'androidx.compose.ui.graphics.drawscope.inset' call
    var tmp0_inset = _Size___get_width__impl__58y75t(_this__u8e3s4.get_size_x9ctfw_k$()) - _Size___get_width__impl__58y75t(size);
    var tmp1_inset = _Size___get_height__impl__a04p02(_this__u8e3s4.get_size_x9ctfw_k$()) - _Size___get_height__impl__a04p02(size);
    _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().inset_n0cgms_k$(0.0, 0.0, tmp0_inset, tmp1_inset);
    // Inline function 'androidx.compose.ui.graphics.painter.Painter.draw.<anonymous>' call
    if ((alpha > 0.0 ? _Size___get_width__impl__58y75t(size) > 0 : false) ? _Size___get_height__impl__a04p02(size) > 0 : false) {
      if (this.useLayer_1) {
        var layerRect = Rect_0(Companion_getInstance().Zero_1, Size(_Size___get_width__impl__58y75t(size), _Size___get_height__impl__a04p02(size)));
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
        var tmp0__anonymous__q1qw7t = _this__u8e3s4.get_drawContext_ffwztu_k$().get_canvas_bshgm9_k$();
        var tmp0_withSaveLayer = obtainPaint(this);
        var tmp;
        try {
          tmp0__anonymous__q1qw7t.saveLayer_f9ux7q_k$(layerRect, tmp0_withSaveLayer);
          this.onDraw_lvum79_k$(_this__u8e3s4);
          tmp = Unit_getInstance();
        }finally {
          tmp0__anonymous__q1qw7t.restore_a2id37_k$();
        }
        tmp$ret$0 = tmp;
      } else {
        this.onDraw_lvum79_k$(_this__u8e3s4);
      }
    }
    _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().inset_n0cgms_k$(-0.0, -0.0, -tmp0_inset, -tmp1_inset);
  };
  Painter.prototype.draw$default_wvvk4v_k$ = function (_this__u8e3s4, size, alpha, colorFilter, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      alpha = get_DefaultAlpha();
    if (!(($mask0 & 4) === 0))
      colorFilter = null;
    return this.draw_hzw39q_k$(_this__u8e3s4, size, alpha, colorFilter);
  };
  Painter.$metadata$ = classMeta('Painter');
  function _get_nodes__dowtds($this) {
    return $this.nodes_1;
  }
  function addNode($this, node) {
    $this.nodes_1.add_1j60pz_k$(node);
    return $this;
  }
  function PathBuilder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.nodes_1 = tmp$ret$0;
  }
  PathBuilder.prototype.getNodes_wff5kr_k$ = function () {
    return this.nodes_1;
  };
  PathBuilder.prototype.close_1keygo_k$ = function () {
    return addNode(this, Close_getInstance());
  };
  PathBuilder.prototype.moveTo_5934es_k$ = function (x, y) {
    return addNode(this, new MoveTo(x, y));
  };
  PathBuilder.prototype.moveToRelative_wrunko_k$ = function (dx, dy) {
    return addNode(this, new RelativeMoveTo(dx, dy));
  };
  PathBuilder.prototype.lineTo_8bd4s1_k$ = function (x, y) {
    return addNode(this, new LineTo(x, y));
  };
  PathBuilder.prototype.lineToRelative_q6wnej_k$ = function (dx, dy) {
    return addNode(this, new RelativeLineTo(dx, dy));
  };
  PathBuilder.prototype.horizontalLineTo_16vzsr_k$ = function (x) {
    return addNode(this, new HorizontalTo(x));
  };
  PathBuilder.prototype.horizontalLineToRelative_3x1qwh_k$ = function (dx) {
    return addNode(this, new RelativeHorizontalTo(dx));
  };
  PathBuilder.prototype.verticalLineTo_6l74o9_k$ = function (y) {
    return addNode(this, new VerticalTo(y));
  };
  PathBuilder.prototype.verticalLineToRelative_y89ou5_k$ = function (dy) {
    return addNode(this, new RelativeVerticalTo(dy));
  };
  PathBuilder.prototype.curveTo_h5uh6_k$ = function (x1, y1, x2, y2, x3, y3) {
    return addNode(this, new CurveTo(x1, y1, x2, y2, x3, y3));
  };
  PathBuilder.prototype.curveToRelative_246fzq_k$ = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    return addNode(this, new RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3));
  };
  PathBuilder.prototype.reflectiveCurveTo_t9fw6p_k$ = function (x1, y1, x2, y2) {
    return addNode(this, new ReflectiveCurveTo(x1, y1, x2, y2));
  };
  PathBuilder.prototype.reflectiveCurveToRelative_88xs1n_k$ = function (dx1, dy1, dx2, dy2) {
    return addNode(this, new RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2));
  };
  PathBuilder.prototype.quadTo_qnlly6_k$ = function (x1, y1, x2, y2) {
    return addNode(this, new QuadTo(x1, y1, x2, y2));
  };
  PathBuilder.prototype.quadToRelative_fyh7da_k$ = function (dx1, dy1, dx2, dy2) {
    return addNode(this, new RelativeQuadTo(dx1, dy1, dx2, dy2));
  };
  PathBuilder.prototype.reflectiveQuadTo_iwwnlp_k$ = function (x1, y1) {
    return addNode(this, new ReflectiveQuadTo(x1, y1));
  };
  PathBuilder.prototype.reflectiveQuadToRelative_cupod3_k$ = function (dx1, dy1) {
    return addNode(this, new RelativeReflectiveQuadTo(dx1, dy1));
  };
  PathBuilder.prototype.arcTo_pysgpt_k$ = function (horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, x1, y1) {
    return addNode(this, new ArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, x1, y1));
  };
  PathBuilder.prototype.arcToRelative_ghjikr_k$ = function (a, b, theta, isMoreThanHalf, isPositiveArc, dx1, dy1) {
    return addNode(this, new RelativeArcTo(a, b, theta, isMoreThanHalf, isPositiveArc, dx1, dy1));
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
  function PathNode_init_$Create$(isCurve, isQuad, $mask0, $marker) {
    return PathNode_init_$Init$(isCurve, isQuad, $mask0, $marker, Object.create(PathNode.prototype));
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
  function RelativeMoveTo(dx, dy) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.dx_1 = dx;
    this.dy_1 = dy;
  }
  RelativeMoveTo.prototype.get_dx_knto0z_k$ = function () {
    return this.dx_1;
  };
  RelativeMoveTo.prototype.get_dy_knto0y_k$ = function () {
    return this.dy_1;
  };
  RelativeMoveTo.prototype.component1_7eebsc_k$ = function () {
    return this.dx_1;
  };
  RelativeMoveTo.prototype.component2_7eebsb_k$ = function () {
    return this.dy_1;
  };
  RelativeMoveTo.prototype.copy_138fzp_k$ = function (dx, dy) {
    return new RelativeMoveTo(dx, dy);
  };
  RelativeMoveTo.prototype.copy$default_bbfa40_k$ = function (dx, dy, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      dx = this.dx_1;
    if (!(($mask0 & 2) === 0))
      dy = this.dy_1;
    return this.copy_138fzp_k$(dx, dy);
  };
  RelativeMoveTo.prototype.toString = function () {
    return 'RelativeMoveTo(dx=' + this.dx_1 + ', dy=' + this.dy_1 + ')';
  };
  RelativeMoveTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.dx_1);
    result = imul(result, 31) + getNumberHashCode(this.dy_1) | 0;
    return result;
  };
  RelativeMoveTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeMoveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeMoveTo ? other : THROW_CCE();
    if (!equals(this.dx_1, tmp0_other_with_cast.dx_1))
      return false;
    if (!equals(this.dy_1, tmp0_other_with_cast.dy_1))
      return false;
    return true;
  };
  RelativeMoveTo.$metadata$ = classMeta('RelativeMoveTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function MoveTo(x, y) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.x_1 = x;
    this.y_1 = y;
  }
  MoveTo.prototype.get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  MoveTo.prototype.get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  MoveTo.prototype.component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  MoveTo.prototype.component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  MoveTo.prototype.copy_138fzp_k$ = function (x, y) {
    return new MoveTo(x, y);
  };
  MoveTo.prototype.copy$default_bbfa40_k$ = function (x, y, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = this.x_1;
    if (!(($mask0 & 2) === 0))
      y = this.y_1;
    return this.copy_138fzp_k$(x, y);
  };
  MoveTo.prototype.toString = function () {
    return 'MoveTo(x=' + this.x_1 + ', y=' + this.y_1 + ')';
  };
  MoveTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    return result;
  };
  MoveTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MoveTo))
      return false;
    var tmp0_other_with_cast = other instanceof MoveTo ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  MoveTo.$metadata$ = classMeta('MoveTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function RelativeLineTo(dx, dy) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.dx_1 = dx;
    this.dy_1 = dy;
  }
  RelativeLineTo.prototype.get_dx_knto0z_k$ = function () {
    return this.dx_1;
  };
  RelativeLineTo.prototype.get_dy_knto0y_k$ = function () {
    return this.dy_1;
  };
  RelativeLineTo.prototype.component1_7eebsc_k$ = function () {
    return this.dx_1;
  };
  RelativeLineTo.prototype.component2_7eebsb_k$ = function () {
    return this.dy_1;
  };
  RelativeLineTo.prototype.copy_138fzp_k$ = function (dx, dy) {
    return new RelativeLineTo(dx, dy);
  };
  RelativeLineTo.prototype.copy$default_bbfa40_k$ = function (dx, dy, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      dx = this.dx_1;
    if (!(($mask0 & 2) === 0))
      dy = this.dy_1;
    return this.copy_138fzp_k$(dx, dy);
  };
  RelativeLineTo.prototype.toString = function () {
    return 'RelativeLineTo(dx=' + this.dx_1 + ', dy=' + this.dy_1 + ')';
  };
  RelativeLineTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.dx_1);
    result = imul(result, 31) + getNumberHashCode(this.dy_1) | 0;
    return result;
  };
  RelativeLineTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeLineTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeLineTo ? other : THROW_CCE();
    if (!equals(this.dx_1, tmp0_other_with_cast.dx_1))
      return false;
    if (!equals(this.dy_1, tmp0_other_with_cast.dy_1))
      return false;
    return true;
  };
  RelativeLineTo.$metadata$ = classMeta('RelativeLineTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function LineTo(x, y) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.x_1 = x;
    this.y_1 = y;
  }
  LineTo.prototype.get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  LineTo.prototype.get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  LineTo.prototype.component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  LineTo.prototype.component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  LineTo.prototype.copy_138fzp_k$ = function (x, y) {
    return new LineTo(x, y);
  };
  LineTo.prototype.copy$default_bbfa40_k$ = function (x, y, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = this.x_1;
    if (!(($mask0 & 2) === 0))
      y = this.y_1;
    return this.copy_138fzp_k$(x, y);
  };
  LineTo.prototype.toString = function () {
    return 'LineTo(x=' + this.x_1 + ', y=' + this.y_1 + ')';
  };
  LineTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    return result;
  };
  LineTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LineTo))
      return false;
    var tmp0_other_with_cast = other instanceof LineTo ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  LineTo.$metadata$ = classMeta('LineTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function RelativeHorizontalTo(dx) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.dx_1 = dx;
  }
  RelativeHorizontalTo.prototype.get_dx_knto0z_k$ = function () {
    return this.dx_1;
  };
  RelativeHorizontalTo.prototype.component1_7eebsc_k$ = function () {
    return this.dx_1;
  };
  RelativeHorizontalTo.prototype.copy_i912ft_k$ = function (dx) {
    return new RelativeHorizontalTo(dx);
  };
  RelativeHorizontalTo.prototype.copy$default_iojlsq_k$ = function (dx, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      dx = this.dx_1;
    return this.copy_i912ft_k$(dx);
  };
  RelativeHorizontalTo.prototype.toString = function () {
    return 'RelativeHorizontalTo(dx=' + this.dx_1 + ')';
  };
  RelativeHorizontalTo.prototype.hashCode = function () {
    return getNumberHashCode(this.dx_1);
  };
  RelativeHorizontalTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeHorizontalTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeHorizontalTo ? other : THROW_CCE();
    if (!equals(this.dx_1, tmp0_other_with_cast.dx_1))
      return false;
    return true;
  };
  RelativeHorizontalTo.$metadata$ = classMeta('RelativeHorizontalTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function HorizontalTo(x) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.x_1 = x;
  }
  HorizontalTo.prototype.get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  HorizontalTo.prototype.component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  HorizontalTo.prototype.copy_i912ft_k$ = function (x) {
    return new HorizontalTo(x);
  };
  HorizontalTo.prototype.copy$default_iojlsq_k$ = function (x, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = this.x_1;
    return this.copy_i912ft_k$(x);
  };
  HorizontalTo.prototype.toString = function () {
    return 'HorizontalTo(x=' + this.x_1 + ')';
  };
  HorizontalTo.prototype.hashCode = function () {
    return getNumberHashCode(this.x_1);
  };
  HorizontalTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HorizontalTo))
      return false;
    var tmp0_other_with_cast = other instanceof HorizontalTo ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    return true;
  };
  HorizontalTo.$metadata$ = classMeta('HorizontalTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function RelativeVerticalTo(dy) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.dy_1 = dy;
  }
  RelativeVerticalTo.prototype.get_dy_knto0y_k$ = function () {
    return this.dy_1;
  };
  RelativeVerticalTo.prototype.component1_7eebsc_k$ = function () {
    return this.dy_1;
  };
  RelativeVerticalTo.prototype.copy_i912ft_k$ = function (dy) {
    return new RelativeVerticalTo(dy);
  };
  RelativeVerticalTo.prototype.copy$default_iojlsq_k$ = function (dy, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      dy = this.dy_1;
    return this.copy_i912ft_k$(dy);
  };
  RelativeVerticalTo.prototype.toString = function () {
    return 'RelativeVerticalTo(dy=' + this.dy_1 + ')';
  };
  RelativeVerticalTo.prototype.hashCode = function () {
    return getNumberHashCode(this.dy_1);
  };
  RelativeVerticalTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeVerticalTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeVerticalTo ? other : THROW_CCE();
    if (!equals(this.dy_1, tmp0_other_with_cast.dy_1))
      return false;
    return true;
  };
  RelativeVerticalTo.$metadata$ = classMeta('RelativeVerticalTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function VerticalTo(y) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.y_1 = y;
  }
  VerticalTo.prototype.get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  VerticalTo.prototype.component1_7eebsc_k$ = function () {
    return this.y_1;
  };
  VerticalTo.prototype.copy_i912ft_k$ = function (y) {
    return new VerticalTo(y);
  };
  VerticalTo.prototype.copy$default_iojlsq_k$ = function (y, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      y = this.y_1;
    return this.copy_i912ft_k$(y);
  };
  VerticalTo.prototype.toString = function () {
    return 'VerticalTo(y=' + this.y_1 + ')';
  };
  VerticalTo.prototype.hashCode = function () {
    return getNumberHashCode(this.y_1);
  };
  VerticalTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerticalTo))
      return false;
    var tmp0_other_with_cast = other instanceof VerticalTo ? other : THROW_CCE();
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  VerticalTo.$metadata$ = classMeta('VerticalTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3) {
    PathNode_init_$Init$(true, false, 2, null, this);
    this.dx1__1 = dx1;
    this.dy1__1 = dy1;
    this.dx2__1 = dx2;
    this.dy2__1 = dy2;
    this.dx3__1 = dx3;
    this.dy3__1 = dy3;
  }
  RelativeCurveTo.prototype.get_dx1_18j70s_k$ = function () {
    return this.dx1__1;
  };
  RelativeCurveTo.prototype.get_dy1_18j6zx_k$ = function () {
    return this.dy1__1;
  };
  RelativeCurveTo.prototype.get_dx2_18j70r_k$ = function () {
    return this.dx2__1;
  };
  RelativeCurveTo.prototype.get_dy2_18j6zw_k$ = function () {
    return this.dy2__1;
  };
  RelativeCurveTo.prototype.get_dx3_18j70q_k$ = function () {
    return this.dx3__1;
  };
  RelativeCurveTo.prototype.get_dy3_18j6zv_k$ = function () {
    return this.dy3__1;
  };
  RelativeCurveTo.prototype.component1_7eebsc_k$ = function () {
    return this.dx1__1;
  };
  RelativeCurveTo.prototype.component2_7eebsb_k$ = function () {
    return this.dy1__1;
  };
  RelativeCurveTo.prototype.component3_7eebsa_k$ = function () {
    return this.dx2__1;
  };
  RelativeCurveTo.prototype.component4_7eebs9_k$ = function () {
    return this.dy2__1;
  };
  RelativeCurveTo.prototype.component5_7eebs8_k$ = function () {
    return this.dx3__1;
  };
  RelativeCurveTo.prototype.component6_7eebs7_k$ = function () {
    return this.dy3__1;
  };
  RelativeCurveTo.prototype.copy_htf379_k$ = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    return new RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3);
  };
  RelativeCurveTo.prototype.copy$default_vtoeb4_k$ = function (dx1, dy1, dx2, dy2, dx3, dy3, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      dx1 = this.dx1__1;
    if (!(($mask0 & 2) === 0))
      dy1 = this.dy1__1;
    if (!(($mask0 & 4) === 0))
      dx2 = this.dx2__1;
    if (!(($mask0 & 8) === 0))
      dy2 = this.dy2__1;
    if (!(($mask0 & 16) === 0))
      dx3 = this.dx3__1;
    if (!(($mask0 & 32) === 0))
      dy3 = this.dy3__1;
    return this.copy_htf379_k$(dx1, dy1, dx2, dy2, dx3, dy3);
  };
  RelativeCurveTo.prototype.toString = function () {
    return 'RelativeCurveTo(dx1=' + this.dx1__1 + ', dy1=' + this.dy1__1 + ', dx2=' + this.dx2__1 + ', dy2=' + this.dy2__1 + ', dx3=' + this.dx3__1 + ', dy3=' + this.dy3__1 + ')';
  };
  RelativeCurveTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.dx1__1);
    result = imul(result, 31) + getNumberHashCode(this.dy1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dx2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dy2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dx3__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dy3__1) | 0;
    return result;
  };
  RelativeCurveTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeCurveTo ? other : THROW_CCE();
    if (!equals(this.dx1__1, tmp0_other_with_cast.dx1__1))
      return false;
    if (!equals(this.dy1__1, tmp0_other_with_cast.dy1__1))
      return false;
    if (!equals(this.dx2__1, tmp0_other_with_cast.dx2__1))
      return false;
    if (!equals(this.dy2__1, tmp0_other_with_cast.dy2__1))
      return false;
    if (!equals(this.dx3__1, tmp0_other_with_cast.dx3__1))
      return false;
    if (!equals(this.dy3__1, tmp0_other_with_cast.dy3__1))
      return false;
    return true;
  };
  RelativeCurveTo.$metadata$ = classMeta('RelativeCurveTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function CurveTo(x1, y1, x2, y2, x3, y3) {
    PathNode_init_$Init$(true, false, 2, null, this);
    this.x1__1 = x1;
    this.y1__1 = y1;
    this.x2__1 = x2;
    this.y2__1 = y2;
    this.x3__1 = x3;
    this.y3__1 = y3;
  }
  CurveTo.prototype.get_x1_kntnlq_k$ = function () {
    return this.x1__1;
  };
  CurveTo.prototype.get_y1_kntnkv_k$ = function () {
    return this.y1__1;
  };
  CurveTo.prototype.get_x2_kntnlp_k$ = function () {
    return this.x2__1;
  };
  CurveTo.prototype.get_y2_kntnku_k$ = function () {
    return this.y2__1;
  };
  CurveTo.prototype.get_x3_kntnlo_k$ = function () {
    return this.x3__1;
  };
  CurveTo.prototype.get_y3_kntnkt_k$ = function () {
    return this.y3__1;
  };
  CurveTo.prototype.component1_7eebsc_k$ = function () {
    return this.x1__1;
  };
  CurveTo.prototype.component2_7eebsb_k$ = function () {
    return this.y1__1;
  };
  CurveTo.prototype.component3_7eebsa_k$ = function () {
    return this.x2__1;
  };
  CurveTo.prototype.component4_7eebs9_k$ = function () {
    return this.y2__1;
  };
  CurveTo.prototype.component5_7eebs8_k$ = function () {
    return this.x3__1;
  };
  CurveTo.prototype.component6_7eebs7_k$ = function () {
    return this.y3__1;
  };
  CurveTo.prototype.copy_htf379_k$ = function (x1, y1, x2, y2, x3, y3) {
    return new CurveTo(x1, y1, x2, y2, x3, y3);
  };
  CurveTo.prototype.copy$default_vtoeb4_k$ = function (x1, y1, x2, y2, x3, y3, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x1 = this.x1__1;
    if (!(($mask0 & 2) === 0))
      y1 = this.y1__1;
    if (!(($mask0 & 4) === 0))
      x2 = this.x2__1;
    if (!(($mask0 & 8) === 0))
      y2 = this.y2__1;
    if (!(($mask0 & 16) === 0))
      x3 = this.x3__1;
    if (!(($mask0 & 32) === 0))
      y3 = this.y3__1;
    return this.copy_htf379_k$(x1, y1, x2, y2, x3, y3);
  };
  CurveTo.prototype.toString = function () {
    return 'CurveTo(x1=' + this.x1__1 + ', y1=' + this.y1__1 + ', x2=' + this.x2__1 + ', y2=' + this.y2__1 + ', x3=' + this.x3__1 + ', y3=' + this.y3__1 + ')';
  };
  CurveTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.x1__1);
    result = imul(result, 31) + getNumberHashCode(this.y1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x3__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y3__1) | 0;
    return result;
  };
  CurveTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof CurveTo ? other : THROW_CCE();
    if (!equals(this.x1__1, tmp0_other_with_cast.x1__1))
      return false;
    if (!equals(this.y1__1, tmp0_other_with_cast.y1__1))
      return false;
    if (!equals(this.x2__1, tmp0_other_with_cast.x2__1))
      return false;
    if (!equals(this.y2__1, tmp0_other_with_cast.y2__1))
      return false;
    if (!equals(this.x3__1, tmp0_other_with_cast.x3__1))
      return false;
    if (!equals(this.y3__1, tmp0_other_with_cast.y3__1))
      return false;
    return true;
  };
  CurveTo.$metadata$ = classMeta('CurveTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2) {
    PathNode_init_$Init$(true, false, 2, null, this);
    this.dx1__1 = dx1;
    this.dy1__1 = dy1;
    this.dx2__1 = dx2;
    this.dy2__1 = dy2;
  }
  RelativeReflectiveCurveTo.prototype.get_dx1_18j70s_k$ = function () {
    return this.dx1__1;
  };
  RelativeReflectiveCurveTo.prototype.get_dy1_18j6zx_k$ = function () {
    return this.dy1__1;
  };
  RelativeReflectiveCurveTo.prototype.get_dx2_18j70r_k$ = function () {
    return this.dx2__1;
  };
  RelativeReflectiveCurveTo.prototype.get_dy2_18j6zw_k$ = function () {
    return this.dy2__1;
  };
  RelativeReflectiveCurveTo.prototype.component1_7eebsc_k$ = function () {
    return this.dx1__1;
  };
  RelativeReflectiveCurveTo.prototype.component2_7eebsb_k$ = function () {
    return this.dy1__1;
  };
  RelativeReflectiveCurveTo.prototype.component3_7eebsa_k$ = function () {
    return this.dx2__1;
  };
  RelativeReflectiveCurveTo.prototype.component4_7eebs9_k$ = function () {
    return this.dy2__1;
  };
  RelativeReflectiveCurveTo.prototype.copy_skjbed_k$ = function (dx1, dy1, dx2, dy2) {
    return new RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2);
  };
  RelativeReflectiveCurveTo.prototype.copy$default_ijqd2o_k$ = function (dx1, dy1, dx2, dy2, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      dx1 = this.dx1__1;
    if (!(($mask0 & 2) === 0))
      dy1 = this.dy1__1;
    if (!(($mask0 & 4) === 0))
      dx2 = this.dx2__1;
    if (!(($mask0 & 8) === 0))
      dy2 = this.dy2__1;
    return this.copy_skjbed_k$(dx1, dy1, dx2, dy2);
  };
  RelativeReflectiveCurveTo.prototype.toString = function () {
    return 'RelativeReflectiveCurveTo(dx1=' + this.dx1__1 + ', dy1=' + this.dy1__1 + ', dx2=' + this.dx2__1 + ', dy2=' + this.dy2__1 + ')';
  };
  RelativeReflectiveCurveTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.dx1__1);
    result = imul(result, 31) + getNumberHashCode(this.dy1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dx2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dy2__1) | 0;
    return result;
  };
  RelativeReflectiveCurveTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeReflectiveCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeReflectiveCurveTo ? other : THROW_CCE();
    if (!equals(this.dx1__1, tmp0_other_with_cast.dx1__1))
      return false;
    if (!equals(this.dy1__1, tmp0_other_with_cast.dy1__1))
      return false;
    if (!equals(this.dx2__1, tmp0_other_with_cast.dx2__1))
      return false;
    if (!equals(this.dy2__1, tmp0_other_with_cast.dy2__1))
      return false;
    return true;
  };
  RelativeReflectiveCurveTo.$metadata$ = classMeta('RelativeReflectiveCurveTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function ReflectiveCurveTo(x1, y1, x2, y2) {
    PathNode_init_$Init$(true, false, 2, null, this);
    this.x1__1 = x1;
    this.y1__1 = y1;
    this.x2__1 = x2;
    this.y2__1 = y2;
  }
  ReflectiveCurveTo.prototype.get_x1_kntnlq_k$ = function () {
    return this.x1__1;
  };
  ReflectiveCurveTo.prototype.get_y1_kntnkv_k$ = function () {
    return this.y1__1;
  };
  ReflectiveCurveTo.prototype.get_x2_kntnlp_k$ = function () {
    return this.x2__1;
  };
  ReflectiveCurveTo.prototype.get_y2_kntnku_k$ = function () {
    return this.y2__1;
  };
  ReflectiveCurveTo.prototype.component1_7eebsc_k$ = function () {
    return this.x1__1;
  };
  ReflectiveCurveTo.prototype.component2_7eebsb_k$ = function () {
    return this.y1__1;
  };
  ReflectiveCurveTo.prototype.component3_7eebsa_k$ = function () {
    return this.x2__1;
  };
  ReflectiveCurveTo.prototype.component4_7eebs9_k$ = function () {
    return this.y2__1;
  };
  ReflectiveCurveTo.prototype.copy_skjbed_k$ = function (x1, y1, x2, y2) {
    return new ReflectiveCurveTo(x1, y1, x2, y2);
  };
  ReflectiveCurveTo.prototype.copy$default_ijqd2o_k$ = function (x1, y1, x2, y2, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x1 = this.x1__1;
    if (!(($mask0 & 2) === 0))
      y1 = this.y1__1;
    if (!(($mask0 & 4) === 0))
      x2 = this.x2__1;
    if (!(($mask0 & 8) === 0))
      y2 = this.y2__1;
    return this.copy_skjbed_k$(x1, y1, x2, y2);
  };
  ReflectiveCurveTo.prototype.toString = function () {
    return 'ReflectiveCurveTo(x1=' + this.x1__1 + ', y1=' + this.y1__1 + ', x2=' + this.x2__1 + ', y2=' + this.y2__1 + ')';
  };
  ReflectiveCurveTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.x1__1);
    result = imul(result, 31) + getNumberHashCode(this.y1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y2__1) | 0;
    return result;
  };
  ReflectiveCurveTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReflectiveCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof ReflectiveCurveTo ? other : THROW_CCE();
    if (!equals(this.x1__1, tmp0_other_with_cast.x1__1))
      return false;
    if (!equals(this.y1__1, tmp0_other_with_cast.y1__1))
      return false;
    if (!equals(this.x2__1, tmp0_other_with_cast.x2__1))
      return false;
    if (!equals(this.y2__1, tmp0_other_with_cast.y2__1))
      return false;
    return true;
  };
  ReflectiveCurveTo.$metadata$ = classMeta('ReflectiveCurveTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function RelativeQuadTo(dx1, dy1, dx2, dy2) {
    PathNode_init_$Init$(false, true, 1, null, this);
    this.dx1__1 = dx1;
    this.dy1__1 = dy1;
    this.dx2__1 = dx2;
    this.dy2__1 = dy2;
  }
  RelativeQuadTo.prototype.get_dx1_18j70s_k$ = function () {
    return this.dx1__1;
  };
  RelativeQuadTo.prototype.get_dy1_18j6zx_k$ = function () {
    return this.dy1__1;
  };
  RelativeQuadTo.prototype.get_dx2_18j70r_k$ = function () {
    return this.dx2__1;
  };
  RelativeQuadTo.prototype.get_dy2_18j6zw_k$ = function () {
    return this.dy2__1;
  };
  RelativeQuadTo.prototype.component1_7eebsc_k$ = function () {
    return this.dx1__1;
  };
  RelativeQuadTo.prototype.component2_7eebsb_k$ = function () {
    return this.dy1__1;
  };
  RelativeQuadTo.prototype.component3_7eebsa_k$ = function () {
    return this.dx2__1;
  };
  RelativeQuadTo.prototype.component4_7eebs9_k$ = function () {
    return this.dy2__1;
  };
  RelativeQuadTo.prototype.copy_skjbed_k$ = function (dx1, dy1, dx2, dy2) {
    return new RelativeQuadTo(dx1, dy1, dx2, dy2);
  };
  RelativeQuadTo.prototype.copy$default_ijqd2o_k$ = function (dx1, dy1, dx2, dy2, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      dx1 = this.dx1__1;
    if (!(($mask0 & 2) === 0))
      dy1 = this.dy1__1;
    if (!(($mask0 & 4) === 0))
      dx2 = this.dx2__1;
    if (!(($mask0 & 8) === 0))
      dy2 = this.dy2__1;
    return this.copy_skjbed_k$(dx1, dy1, dx2, dy2);
  };
  RelativeQuadTo.prototype.toString = function () {
    return 'RelativeQuadTo(dx1=' + this.dx1__1 + ', dy1=' + this.dy1__1 + ', dx2=' + this.dx2__1 + ', dy2=' + this.dy2__1 + ')';
  };
  RelativeQuadTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.dx1__1);
    result = imul(result, 31) + getNumberHashCode(this.dy1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dx2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dy2__1) | 0;
    return result;
  };
  RelativeQuadTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeQuadTo ? other : THROW_CCE();
    if (!equals(this.dx1__1, tmp0_other_with_cast.dx1__1))
      return false;
    if (!equals(this.dy1__1, tmp0_other_with_cast.dy1__1))
      return false;
    if (!equals(this.dx2__1, tmp0_other_with_cast.dx2__1))
      return false;
    if (!equals(this.dy2__1, tmp0_other_with_cast.dy2__1))
      return false;
    return true;
  };
  RelativeQuadTo.$metadata$ = classMeta('RelativeQuadTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function QuadTo(x1, y1, x2, y2) {
    PathNode_init_$Init$(false, true, 1, null, this);
    this.x1__1 = x1;
    this.y1__1 = y1;
    this.x2__1 = x2;
    this.y2__1 = y2;
  }
  QuadTo.prototype.get_x1_kntnlq_k$ = function () {
    return this.x1__1;
  };
  QuadTo.prototype.get_y1_kntnkv_k$ = function () {
    return this.y1__1;
  };
  QuadTo.prototype.get_x2_kntnlp_k$ = function () {
    return this.x2__1;
  };
  QuadTo.prototype.get_y2_kntnku_k$ = function () {
    return this.y2__1;
  };
  QuadTo.prototype.component1_7eebsc_k$ = function () {
    return this.x1__1;
  };
  QuadTo.prototype.component2_7eebsb_k$ = function () {
    return this.y1__1;
  };
  QuadTo.prototype.component3_7eebsa_k$ = function () {
    return this.x2__1;
  };
  QuadTo.prototype.component4_7eebs9_k$ = function () {
    return this.y2__1;
  };
  QuadTo.prototype.copy_skjbed_k$ = function (x1, y1, x2, y2) {
    return new QuadTo(x1, y1, x2, y2);
  };
  QuadTo.prototype.copy$default_ijqd2o_k$ = function (x1, y1, x2, y2, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x1 = this.x1__1;
    if (!(($mask0 & 2) === 0))
      y1 = this.y1__1;
    if (!(($mask0 & 4) === 0))
      x2 = this.x2__1;
    if (!(($mask0 & 8) === 0))
      y2 = this.y2__1;
    return this.copy_skjbed_k$(x1, y1, x2, y2);
  };
  QuadTo.prototype.toString = function () {
    return 'QuadTo(x1=' + this.x1__1 + ', y1=' + this.y1__1 + ', x2=' + this.x2__1 + ', y2=' + this.y2__1 + ')';
  };
  QuadTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.x1__1);
    result = imul(result, 31) + getNumberHashCode(this.y1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y2__1) | 0;
    return result;
  };
  QuadTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof QuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof QuadTo ? other : THROW_CCE();
    if (!equals(this.x1__1, tmp0_other_with_cast.x1__1))
      return false;
    if (!equals(this.y1__1, tmp0_other_with_cast.y1__1))
      return false;
    if (!equals(this.x2__1, tmp0_other_with_cast.x2__1))
      return false;
    if (!equals(this.y2__1, tmp0_other_with_cast.y2__1))
      return false;
    return true;
  };
  QuadTo.$metadata$ = classMeta('QuadTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function RelativeReflectiveQuadTo(dx, dy) {
    PathNode_init_$Init$(false, true, 1, null, this);
    this.dx_1 = dx;
    this.dy_1 = dy;
  }
  RelativeReflectiveQuadTo.prototype.get_dx_knto0z_k$ = function () {
    return this.dx_1;
  };
  RelativeReflectiveQuadTo.prototype.get_dy_knto0y_k$ = function () {
    return this.dy_1;
  };
  RelativeReflectiveQuadTo.prototype.component1_7eebsc_k$ = function () {
    return this.dx_1;
  };
  RelativeReflectiveQuadTo.prototype.component2_7eebsb_k$ = function () {
    return this.dy_1;
  };
  RelativeReflectiveQuadTo.prototype.copy_138fzp_k$ = function (dx, dy) {
    return new RelativeReflectiveQuadTo(dx, dy);
  };
  RelativeReflectiveQuadTo.prototype.copy$default_bbfa40_k$ = function (dx, dy, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      dx = this.dx_1;
    if (!(($mask0 & 2) === 0))
      dy = this.dy_1;
    return this.copy_138fzp_k$(dx, dy);
  };
  RelativeReflectiveQuadTo.prototype.toString = function () {
    return 'RelativeReflectiveQuadTo(dx=' + this.dx_1 + ', dy=' + this.dy_1 + ')';
  };
  RelativeReflectiveQuadTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.dx_1);
    result = imul(result, 31) + getNumberHashCode(this.dy_1) | 0;
    return result;
  };
  RelativeReflectiveQuadTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeReflectiveQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeReflectiveQuadTo ? other : THROW_CCE();
    if (!equals(this.dx_1, tmp0_other_with_cast.dx_1))
      return false;
    if (!equals(this.dy_1, tmp0_other_with_cast.dy_1))
      return false;
    return true;
  };
  RelativeReflectiveQuadTo.$metadata$ = classMeta('RelativeReflectiveQuadTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function ReflectiveQuadTo(x, y) {
    PathNode_init_$Init$(false, true, 1, null, this);
    this.x_1 = x;
    this.y_1 = y;
  }
  ReflectiveQuadTo.prototype.get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  ReflectiveQuadTo.prototype.get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  ReflectiveQuadTo.prototype.component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  ReflectiveQuadTo.prototype.component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  ReflectiveQuadTo.prototype.copy_138fzp_k$ = function (x, y) {
    return new ReflectiveQuadTo(x, y);
  };
  ReflectiveQuadTo.prototype.copy$default_bbfa40_k$ = function (x, y, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = this.x_1;
    if (!(($mask0 & 2) === 0))
      y = this.y_1;
    return this.copy_138fzp_k$(x, y);
  };
  ReflectiveQuadTo.prototype.toString = function () {
    return 'ReflectiveQuadTo(x=' + this.x_1 + ', y=' + this.y_1 + ')';
  };
  ReflectiveQuadTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    return result;
  };
  ReflectiveQuadTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReflectiveQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof ReflectiveQuadTo ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  ReflectiveQuadTo.$metadata$ = classMeta('ReflectiveQuadTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function RelativeArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.horizontalEllipseRadius_1 = horizontalEllipseRadius;
    this.verticalEllipseRadius_1 = verticalEllipseRadius;
    this.theta_1 = theta;
    this.isMoreThanHalf_1 = isMoreThanHalf;
    this.isPositiveArc_1 = isPositiveArc;
    this.arcStartDx_1 = arcStartDx;
    this.arcStartDy_1 = arcStartDy;
  }
  RelativeArcTo.prototype.get_horizontalEllipseRadius_i0l277_k$ = function () {
    return this.horizontalEllipseRadius_1;
  };
  RelativeArcTo.prototype.get_verticalEllipseRadius_bilkpd_k$ = function () {
    return this.verticalEllipseRadius_1;
  };
  RelativeArcTo.prototype.get_theta_iz24xh_k$ = function () {
    return this.theta_1;
  };
  RelativeArcTo.prototype.get_isMoreThanHalf_ok4n2c_k$ = function () {
    return this.isMoreThanHalf_1;
  };
  RelativeArcTo.prototype.get_isPositiveArc_qpecd6_k$ = function () {
    return this.isPositiveArc_1;
  };
  RelativeArcTo.prototype.get_arcStartDx_twxbvx_k$ = function () {
    return this.arcStartDx_1;
  };
  RelativeArcTo.prototype.get_arcStartDy_twxbvy_k$ = function () {
    return this.arcStartDy_1;
  };
  RelativeArcTo.prototype.component1_7eebsc_k$ = function () {
    return this.horizontalEllipseRadius_1;
  };
  RelativeArcTo.prototype.component2_7eebsb_k$ = function () {
    return this.verticalEllipseRadius_1;
  };
  RelativeArcTo.prototype.component3_7eebsa_k$ = function () {
    return this.theta_1;
  };
  RelativeArcTo.prototype.component4_7eebs9_k$ = function () {
    return this.isMoreThanHalf_1;
  };
  RelativeArcTo.prototype.component5_7eebs8_k$ = function () {
    return this.isPositiveArc_1;
  };
  RelativeArcTo.prototype.component6_7eebs7_k$ = function () {
    return this.arcStartDx_1;
  };
  RelativeArcTo.prototype.component7_7eebs6_k$ = function () {
    return this.arcStartDy_1;
  };
  RelativeArcTo.prototype.copy_2l8civ_k$ = function (horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy) {
    return new RelativeArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy);
  };
  RelativeArcTo.prototype.copy$default_c0gzmi_k$ = function (horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      horizontalEllipseRadius = this.horizontalEllipseRadius_1;
    if (!(($mask0 & 2) === 0))
      verticalEllipseRadius = this.verticalEllipseRadius_1;
    if (!(($mask0 & 4) === 0))
      theta = this.theta_1;
    if (!(($mask0 & 8) === 0))
      isMoreThanHalf = this.isMoreThanHalf_1;
    if (!(($mask0 & 16) === 0))
      isPositiveArc = this.isPositiveArc_1;
    if (!(($mask0 & 32) === 0))
      arcStartDx = this.arcStartDx_1;
    if (!(($mask0 & 64) === 0))
      arcStartDy = this.arcStartDy_1;
    return this.copy_2l8civ_k$(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy);
  };
  RelativeArcTo.prototype.toString = function () {
    return 'RelativeArcTo(horizontalEllipseRadius=' + this.horizontalEllipseRadius_1 + ', verticalEllipseRadius=' + this.verticalEllipseRadius_1 + ', theta=' + this.theta_1 + ', isMoreThanHalf=' + this.isMoreThanHalf_1 + ', isPositiveArc=' + this.isPositiveArc_1 + ', arcStartDx=' + this.arcStartDx_1 + ', arcStartDy=' + this.arcStartDy_1 + ')';
  };
  RelativeArcTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.horizontalEllipseRadius_1);
    result = imul(result, 31) + getNumberHashCode(this.verticalEllipseRadius_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.theta_1) | 0;
    result = imul(result, 31) + (this.isMoreThanHalf_1 | 0) | 0;
    result = imul(result, 31) + (this.isPositiveArc_1 | 0) | 0;
    result = imul(result, 31) + getNumberHashCode(this.arcStartDx_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.arcStartDy_1) | 0;
    return result;
  };
  RelativeArcTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeArcTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeArcTo ? other : THROW_CCE();
    if (!equals(this.horizontalEllipseRadius_1, tmp0_other_with_cast.horizontalEllipseRadius_1))
      return false;
    if (!equals(this.verticalEllipseRadius_1, tmp0_other_with_cast.verticalEllipseRadius_1))
      return false;
    if (!equals(this.theta_1, tmp0_other_with_cast.theta_1))
      return false;
    if (!(this.isMoreThanHalf_1 === tmp0_other_with_cast.isMoreThanHalf_1))
      return false;
    if (!(this.isPositiveArc_1 === tmp0_other_with_cast.isPositiveArc_1))
      return false;
    if (!equals(this.arcStartDx_1, tmp0_other_with_cast.arcStartDx_1))
      return false;
    if (!equals(this.arcStartDy_1, tmp0_other_with_cast.arcStartDy_1))
      return false;
    return true;
  };
  RelativeArcTo.$metadata$ = classMeta('RelativeArcTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function ArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.horizontalEllipseRadius_1 = horizontalEllipseRadius;
    this.verticalEllipseRadius_1 = verticalEllipseRadius;
    this.theta_1 = theta;
    this.isMoreThanHalf_1 = isMoreThanHalf;
    this.isPositiveArc_1 = isPositiveArc;
    this.arcStartX_1 = arcStartX;
    this.arcStartY_1 = arcStartY;
  }
  ArcTo.prototype.get_horizontalEllipseRadius_i0l277_k$ = function () {
    return this.horizontalEllipseRadius_1;
  };
  ArcTo.prototype.get_verticalEllipseRadius_bilkpd_k$ = function () {
    return this.verticalEllipseRadius_1;
  };
  ArcTo.prototype.get_theta_iz24xh_k$ = function () {
    return this.theta_1;
  };
  ArcTo.prototype.get_isMoreThanHalf_ok4n2c_k$ = function () {
    return this.isMoreThanHalf_1;
  };
  ArcTo.prototype.get_isPositiveArc_qpecd6_k$ = function () {
    return this.isPositiveArc_1;
  };
  ArcTo.prototype.get_arcStartX_stlj0h_k$ = function () {
    return this.arcStartX_1;
  };
  ArcTo.prototype.get_arcStartY_stlj0g_k$ = function () {
    return this.arcStartY_1;
  };
  ArcTo.prototype.component1_7eebsc_k$ = function () {
    return this.horizontalEllipseRadius_1;
  };
  ArcTo.prototype.component2_7eebsb_k$ = function () {
    return this.verticalEllipseRadius_1;
  };
  ArcTo.prototype.component3_7eebsa_k$ = function () {
    return this.theta_1;
  };
  ArcTo.prototype.component4_7eebs9_k$ = function () {
    return this.isMoreThanHalf_1;
  };
  ArcTo.prototype.component5_7eebs8_k$ = function () {
    return this.isPositiveArc_1;
  };
  ArcTo.prototype.component6_7eebs7_k$ = function () {
    return this.arcStartX_1;
  };
  ArcTo.prototype.component7_7eebs6_k$ = function () {
    return this.arcStartY_1;
  };
  ArcTo.prototype.copy_2l8civ_k$ = function (horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY) {
    return new ArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY);
  };
  ArcTo.prototype.copy$default_c0gzmi_k$ = function (horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      horizontalEllipseRadius = this.horizontalEllipseRadius_1;
    if (!(($mask0 & 2) === 0))
      verticalEllipseRadius = this.verticalEllipseRadius_1;
    if (!(($mask0 & 4) === 0))
      theta = this.theta_1;
    if (!(($mask0 & 8) === 0))
      isMoreThanHalf = this.isMoreThanHalf_1;
    if (!(($mask0 & 16) === 0))
      isPositiveArc = this.isPositiveArc_1;
    if (!(($mask0 & 32) === 0))
      arcStartX = this.arcStartX_1;
    if (!(($mask0 & 64) === 0))
      arcStartY = this.arcStartY_1;
    return this.copy_2l8civ_k$(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY);
  };
  ArcTo.prototype.toString = function () {
    return 'ArcTo(horizontalEllipseRadius=' + this.horizontalEllipseRadius_1 + ', verticalEllipseRadius=' + this.verticalEllipseRadius_1 + ', theta=' + this.theta_1 + ', isMoreThanHalf=' + this.isMoreThanHalf_1 + ', isPositiveArc=' + this.isPositiveArc_1 + ', arcStartX=' + this.arcStartX_1 + ', arcStartY=' + this.arcStartY_1 + ')';
  };
  ArcTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.horizontalEllipseRadius_1);
    result = imul(result, 31) + getNumberHashCode(this.verticalEllipseRadius_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.theta_1) | 0;
    result = imul(result, 31) + (this.isMoreThanHalf_1 | 0) | 0;
    result = imul(result, 31) + (this.isPositiveArc_1 | 0) | 0;
    result = imul(result, 31) + getNumberHashCode(this.arcStartX_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.arcStartY_1) | 0;
    return result;
  };
  ArcTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ArcTo))
      return false;
    var tmp0_other_with_cast = other instanceof ArcTo ? other : THROW_CCE();
    if (!equals(this.horizontalEllipseRadius_1, tmp0_other_with_cast.horizontalEllipseRadius_1))
      return false;
    if (!equals(this.verticalEllipseRadius_1, tmp0_other_with_cast.verticalEllipseRadius_1))
      return false;
    if (!equals(this.theta_1, tmp0_other_with_cast.theta_1))
      return false;
    if (!(this.isMoreThanHalf_1 === tmp0_other_with_cast.isMoreThanHalf_1))
      return false;
    if (!(this.isPositiveArc_1 === tmp0_other_with_cast.isPositiveArc_1))
      return false;
    if (!equals(this.arcStartX_1, tmp0_other_with_cast.arcStartX_1))
      return false;
    if (!equals(this.arcStartY_1, tmp0_other_with_cast.arcStartY_1))
      return false;
    return true;
  };
  ArcTo.$metadata$ = classMeta('ArcTo', undefined, undefined, undefined, undefined, PathNode.prototype);
  function PathNode(isCurve, isQuad) {
    this.isCurve_1 = isCurve;
    this.isQuad_1 = isQuad;
  }
  PathNode.prototype.get_isCurve_z9wfzw_k$ = function () {
    return this.isCurve_1;
  };
  PathNode.prototype.get_isQuad_ew4yai_k$ = function () {
    return this.isQuad_1;
  };
  PathNode.$metadata$ = classMeta('PathNode');
  function toPathNodes(_this__u8e3s4, args) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(122))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(90)))) {
      tmp = listOf(Close_getInstance());
    } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(109)))) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var tmp1_pathNodesFromArgs = 2;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = step(numberRangeToNumber(0, args.length - tmp1_pathNodesFromArgs | 0), tmp1_pathNodesFromArgs);
      var tmp$ret$2;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
      var inductionVariable = tmp0_map.first_1;
      var last = tmp0_map.last_1;
      var step_0 = tmp0_map.step_1;
      if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
        do {
          var item = inductionVariable;
          inductionVariable = inductionVariable + step_0 | 0;
          var tmp$ret$1;
          // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs.<anonymous>' call
          var subArray = copyOfRange(args, item, item + tmp1_pathNodesFromArgs | 0);
          var tmp$ret$0;
          // Inline function 'androidx.compose.ui.graphics.vector.toPathNodes.<anonymous>' call
          tmp$ret$0 = new RelativeMoveTo(subArray[0], subArray[1]);
          var node = tmp$ret$0;
          var tmp_0;
          var tmp_1;
          if (node instanceof MoveTo) {
            tmp_1 = item > 0;
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            tmp_0 = new LineTo(subArray[0], subArray[1]);
          } else {
            var tmp_2;
            if (node instanceof RelativeMoveTo) {
              tmp_2 = item > 0;
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp_0 = new RelativeLineTo(subArray[0], subArray[1]);
            } else {
              tmp_0 = node;
            }
          }
          tmp$ret$1 = tmp_0;
          tmp0_mapTo.add_1j60pz_k$(tmp$ret$1);
        }
         while (!(item === last));
      tmp$ret$2 = tmp0_mapTo;
      tmp$ret$3 = tmp$ret$2;
      tmp$ret$4 = tmp$ret$3;
      tmp = tmp$ret$4;
    } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(77)))) {
      var tmp$ret$9;
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var tmp3_pathNodesFromArgs = 2;
      var tmp$ret$8;
      // Inline function 'kotlin.collections.map' call
      var tmp2_map = step(numberRangeToNumber(0, args.length - tmp3_pathNodesFromArgs | 0), tmp3_pathNodesFromArgs);
      var tmp$ret$7;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp2_map, 10));
      var inductionVariable_0 = tmp2_map.first_1;
      var last_0 = tmp2_map.last_1;
      var step_1 = tmp2_map.step_1;
      if ((step_1 > 0 ? inductionVariable_0 <= last_0 : false) ? true : step_1 < 0 ? last_0 <= inductionVariable_0 : false)
        do {
          var item_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + step_1 | 0;
          var tmp$ret$6;
          // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs.<anonymous>' call
          var subArray_0 = copyOfRange(args, item_0, item_0 + tmp3_pathNodesFromArgs | 0);
          var tmp$ret$5;
          // Inline function 'androidx.compose.ui.graphics.vector.toPathNodes.<anonymous>' call
          tmp$ret$5 = new MoveTo(subArray_0[0], subArray_0[1]);
          var node_0 = tmp$ret$5;
          var tmp_3;
          var tmp_4;
          if (node_0 instanceof MoveTo) {
            tmp_4 = item_0 > 0;
          } else {
            tmp_4 = false;
          }
          if (tmp_4) {
            tmp_3 = new LineTo(subArray_0[0], subArray_0[1]);
          } else {
            var tmp_5;
            if (node_0 instanceof RelativeMoveTo) {
              tmp_5 = item_0 > 0;
            } else {
              tmp_5 = false;
            }
            if (tmp_5) {
              tmp_3 = new RelativeLineTo(subArray_0[0], subArray_0[1]);
            } else {
              tmp_3 = node_0;
            }
          }
          tmp$ret$6 = tmp_3;
          tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$6);
        }
         while (!(item_0 === last_0));
      tmp$ret$7 = tmp0_mapTo_0;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp = tmp$ret$9;
    } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(108)))) {
      var tmp$ret$14;
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var tmp5_pathNodesFromArgs = 2;
      var tmp$ret$13;
      // Inline function 'kotlin.collections.map' call
      var tmp4_map = step(numberRangeToNumber(0, args.length - tmp5_pathNodesFromArgs | 0), tmp5_pathNodesFromArgs);
      var tmp$ret$12;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_1 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp4_map, 10));
      var inductionVariable_1 = tmp4_map.first_1;
      var last_1 = tmp4_map.last_1;
      var step_2 = tmp4_map.step_1;
      if ((step_2 > 0 ? inductionVariable_1 <= last_1 : false) ? true : step_2 < 0 ? last_1 <= inductionVariable_1 : false)
        do {
          var item_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + step_2 | 0;
          var tmp$ret$11;
          // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs.<anonymous>' call
          var subArray_1 = copyOfRange(args, item_1, item_1 + tmp5_pathNodesFromArgs | 0);
          var tmp$ret$10;
          // Inline function 'androidx.compose.ui.graphics.vector.toPathNodes.<anonymous>' call
          tmp$ret$10 = new RelativeLineTo(subArray_1[0], subArray_1[1]);
          var node_1 = tmp$ret$10;
          var tmp_6;
          var tmp_7;
          if (node_1 instanceof MoveTo) {
            tmp_7 = item_1 > 0;
          } else {
            tmp_7 = false;
          }
          if (tmp_7) {
            tmp_6 = new LineTo(subArray_1[0], subArray_1[1]);
          } else {
            var tmp_8;
            if (node_1 instanceof RelativeMoveTo) {
              tmp_8 = item_1 > 0;
            } else {
              tmp_8 = false;
            }
            if (tmp_8) {
              tmp_6 = new RelativeLineTo(subArray_1[0], subArray_1[1]);
            } else {
              tmp_6 = node_1;
            }
          }
          tmp$ret$11 = tmp_6;
          tmp0_mapTo_1.add_1j60pz_k$(tmp$ret$11);
        }
         while (!(item_1 === last_1));
      tmp$ret$12 = tmp0_mapTo_1;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp = tmp$ret$14;
    } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(76)))) {
      var tmp$ret$19;
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var tmp7_pathNodesFromArgs = 2;
      var tmp$ret$18;
      // Inline function 'kotlin.collections.map' call
      var tmp6_map = step(numberRangeToNumber(0, args.length - tmp7_pathNodesFromArgs | 0), tmp7_pathNodesFromArgs);
      var tmp$ret$17;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_2 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp6_map, 10));
      var inductionVariable_2 = tmp6_map.first_1;
      var last_2 = tmp6_map.last_1;
      var step_3 = tmp6_map.step_1;
      if ((step_3 > 0 ? inductionVariable_2 <= last_2 : false) ? true : step_3 < 0 ? last_2 <= inductionVariable_2 : false)
        do {
          var item_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + step_3 | 0;
          var tmp$ret$16;
          // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs.<anonymous>' call
          var subArray_2 = copyOfRange(args, item_2, item_2 + tmp7_pathNodesFromArgs | 0);
          var tmp$ret$15;
          // Inline function 'androidx.compose.ui.graphics.vector.toPathNodes.<anonymous>' call
          tmp$ret$15 = new LineTo(subArray_2[0], subArray_2[1]);
          var node_2 = tmp$ret$15;
          var tmp_9;
          var tmp_10;
          if (node_2 instanceof MoveTo) {
            tmp_10 = item_2 > 0;
          } else {
            tmp_10 = false;
          }
          if (tmp_10) {
            tmp_9 = new LineTo(subArray_2[0], subArray_2[1]);
          } else {
            var tmp_11;
            if (node_2 instanceof RelativeMoveTo) {
              tmp_11 = item_2 > 0;
            } else {
              tmp_11 = false;
            }
            if (tmp_11) {
              tmp_9 = new RelativeLineTo(subArray_2[0], subArray_2[1]);
            } else {
              tmp_9 = node_2;
            }
          }
          tmp$ret$16 = tmp_9;
          tmp0_mapTo_2.add_1j60pz_k$(tmp$ret$16);
        }
         while (!(item_2 === last_2));
      tmp$ret$17 = tmp0_mapTo_2;
      tmp$ret$18 = tmp$ret$17;
      tmp$ret$19 = tmp$ret$18;
      tmp = tmp$ret$19;
    } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(104)))) {
      var tmp$ret$24;
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var tmp9_pathNodesFromArgs = 1;
      var tmp$ret$23;
      // Inline function 'kotlin.collections.map' call
      var tmp8_map = step(numberRangeToNumber(0, args.length - tmp9_pathNodesFromArgs | 0), tmp9_pathNodesFromArgs);
      var tmp$ret$22;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_3 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp8_map, 10));
      var inductionVariable_3 = tmp8_map.first_1;
      var last_3 = tmp8_map.last_1;
      var step_4 = tmp8_map.step_1;
      if ((step_4 > 0 ? inductionVariable_3 <= last_3 : false) ? true : step_4 < 0 ? last_3 <= inductionVariable_3 : false)
        do {
          var item_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + step_4 | 0;
          var tmp$ret$21;
          // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs.<anonymous>' call
          var subArray_3 = copyOfRange(args, item_3, item_3 + tmp9_pathNodesFromArgs | 0);
          var tmp$ret$20;
          // Inline function 'androidx.compose.ui.graphics.vector.toPathNodes.<anonymous>' call
          tmp$ret$20 = new RelativeHorizontalTo(subArray_3[0]);
          var node_3 = tmp$ret$20;
          var tmp_12;
          var tmp_13;
          if (node_3 instanceof MoveTo) {
            tmp_13 = item_3 > 0;
          } else {
            tmp_13 = false;
          }
          if (tmp_13) {
            tmp_12 = new LineTo(subArray_3[0], subArray_3[1]);
          } else {
            var tmp_14;
            if (node_3 instanceof RelativeMoveTo) {
              tmp_14 = item_3 > 0;
            } else {
              tmp_14 = false;
            }
            if (tmp_14) {
              tmp_12 = new RelativeLineTo(subArray_3[0], subArray_3[1]);
            } else {
              tmp_12 = node_3;
            }
          }
          tmp$ret$21 = tmp_12;
          tmp0_mapTo_3.add_1j60pz_k$(tmp$ret$21);
        }
         while (!(item_3 === last_3));
      tmp$ret$22 = tmp0_mapTo_3;
      tmp$ret$23 = tmp$ret$22;
      tmp$ret$24 = tmp$ret$23;
      tmp = tmp$ret$24;
    } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(72)))) {
      var tmp$ret$29;
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var tmp11_pathNodesFromArgs = 1;
      var tmp$ret$28;
      // Inline function 'kotlin.collections.map' call
      var tmp10_map = step(numberRangeToNumber(0, args.length - tmp11_pathNodesFromArgs | 0), tmp11_pathNodesFromArgs);
      var tmp$ret$27;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_4 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp10_map, 10));
      var inductionVariable_4 = tmp10_map.first_1;
      var last_4 = tmp10_map.last_1;
      var step_5 = tmp10_map.step_1;
      if ((step_5 > 0 ? inductionVariable_4 <= last_4 : false) ? true : step_5 < 0 ? last_4 <= inductionVariable_4 : false)
        do {
          var item_4 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + step_5 | 0;
          var tmp$ret$26;
          // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs.<anonymous>' call
          var subArray_4 = copyOfRange(args, item_4, item_4 + tmp11_pathNodesFromArgs | 0);
          var tmp$ret$25;
          // Inline function 'androidx.compose.ui.graphics.vector.toPathNodes.<anonymous>' call
          tmp$ret$25 = new HorizontalTo(subArray_4[0]);
          var node_4 = tmp$ret$25;
          var tmp_15;
          var tmp_16;
          if (node_4 instanceof MoveTo) {
            tmp_16 = item_4 > 0;
          } else {
            tmp_16 = false;
          }
          if (tmp_16) {
            tmp_15 = new LineTo(subArray_4[0], subArray_4[1]);
          } else {
            var tmp_17;
            if (node_4 instanceof RelativeMoveTo) {
              tmp_17 = item_4 > 0;
            } else {
              tmp_17 = false;
            }
            if (tmp_17) {
              tmp_15 = new RelativeLineTo(subArray_4[0], subArray_4[1]);
            } else {
              tmp_15 = node_4;
            }
          }
          tmp$ret$26 = tmp_15;
          tmp0_mapTo_4.add_1j60pz_k$(tmp$ret$26);
        }
         while (!(item_4 === last_4));
      tmp$ret$27 = tmp0_mapTo_4;
      tmp$ret$28 = tmp$ret$27;
      tmp$ret$29 = tmp$ret$28;
      tmp = tmp$ret$29;
    } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(118)))) {
      var tmp$ret$34;
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var tmp13_pathNodesFromArgs = 1;
      var tmp$ret$33;
      // Inline function 'kotlin.collections.map' call
      var tmp12_map = step(numberRangeToNumber(0, args.length - tmp13_pathNodesFromArgs | 0), tmp13_pathNodesFromArgs);
      var tmp$ret$32;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_5 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp12_map, 10));
      var inductionVariable_5 = tmp12_map.first_1;
      var last_5 = tmp12_map.last_1;
      var step_6 = tmp12_map.step_1;
      if ((step_6 > 0 ? inductionVariable_5 <= last_5 : false) ? true : step_6 < 0 ? last_5 <= inductionVariable_5 : false)
        do {
          var item_5 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + step_6 | 0;
          var tmp$ret$31;
          // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs.<anonymous>' call
          var subArray_5 = copyOfRange(args, item_5, item_5 + tmp13_pathNodesFromArgs | 0);
          var tmp$ret$30;
          // Inline function 'androidx.compose.ui.graphics.vector.toPathNodes.<anonymous>' call
          tmp$ret$30 = new RelativeVerticalTo(subArray_5[0]);
          var node_5 = tmp$ret$30;
          var tmp_18;
          var tmp_19;
          if (node_5 instanceof MoveTo) {
            tmp_19 = item_5 > 0;
          } else {
            tmp_19 = false;
          }
          if (tmp_19) {
            tmp_18 = new LineTo(subArray_5[0], subArray_5[1]);
          } else {
            var tmp_20;
            if (node_5 instanceof RelativeMoveTo) {
              tmp_20 = item_5 > 0;
            } else {
              tmp_20 = false;
            }
            if (tmp_20) {
              tmp_18 = new RelativeLineTo(subArray_5[0], subArray_5[1]);
            } else {
              tmp_18 = node_5;
            }
          }
          tmp$ret$31 = tmp_18;
          tmp0_mapTo_5.add_1j60pz_k$(tmp$ret$31);
        }
         while (!(item_5 === last_5));
      tmp$ret$32 = tmp0_mapTo_5;
      tmp$ret$33 = tmp$ret$32;
      tmp$ret$34 = tmp$ret$33;
      tmp = tmp$ret$34;
    } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(86)))) {
      var tmp$ret$39;
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var tmp15_pathNodesFromArgs = 1;
      var tmp$ret$38;
      // Inline function 'kotlin.collections.map' call
      var tmp14_map = step(numberRangeToNumber(0, args.length - tmp15_pathNodesFromArgs | 0), tmp15_pathNodesFromArgs);
      var tmp$ret$37;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_6 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp14_map, 10));
      var inductionVariable_6 = tmp14_map.first_1;
      var last_6 = tmp14_map.last_1;
      var step_7 = tmp14_map.step_1;
      if ((step_7 > 0 ? inductionVariable_6 <= last_6 : false) ? true : step_7 < 0 ? last_6 <= inductionVariable_6 : false)
        do {
          var item_6 = inductionVariable_6;
          inductionVariable_6 = inductionVariable_6 + step_7 | 0;
          var tmp$ret$36;
          // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs.<anonymous>' call
          var subArray_6 = copyOfRange(args, item_6, item_6 + tmp15_pathNodesFromArgs | 0);
          var tmp$ret$35;
          // Inline function 'androidx.compose.ui.graphics.vector.toPathNodes.<anonymous>' call
          tmp$ret$35 = new VerticalTo(subArray_6[0]);
          var node_6 = tmp$ret$35;
          var tmp_21;
          var tmp_22;
          if (node_6 instanceof MoveTo) {
            tmp_22 = item_6 > 0;
          } else {
            tmp_22 = false;
          }
          if (tmp_22) {
            tmp_21 = new LineTo(subArray_6[0], subArray_6[1]);
          } else {
            var tmp_23;
            if (node_6 instanceof RelativeMoveTo) {
              tmp_23 = item_6 > 0;
            } else {
              tmp_23 = false;
            }
            if (tmp_23) {
              tmp_21 = new RelativeLineTo(subArray_6[0], subArray_6[1]);
            } else {
              tmp_21 = node_6;
            }
          }
          tmp$ret$36 = tmp_21;
          tmp0_mapTo_6.add_1j60pz_k$(tmp$ret$36);
        }
         while (!(item_6 === last_6));
      tmp$ret$37 = tmp0_mapTo_6;
      tmp$ret$38 = tmp$ret$37;
      tmp$ret$39 = tmp$ret$38;
      tmp = tmp$ret$39;
    } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(99)))) {
      var tmp$ret$44;
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var tmp17_pathNodesFromArgs = 6;
      var tmp$ret$43;
      // Inline function 'kotlin.collections.map' call
      var tmp16_map = step(numberRangeToNumber(0, args.length - tmp17_pathNodesFromArgs | 0), tmp17_pathNodesFromArgs);
      var tmp$ret$42;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_7 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp16_map, 10));
      var inductionVariable_7 = tmp16_map.first_1;
      var last_7 = tmp16_map.last_1;
      var step_8 = tmp16_map.step_1;
      if ((step_8 > 0 ? inductionVariable_7 <= last_7 : false) ? true : step_8 < 0 ? last_7 <= inductionVariable_7 : false)
        do {
          var item_7 = inductionVariable_7;
          inductionVariable_7 = inductionVariable_7 + step_8 | 0;
          var tmp$ret$41;
          // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs.<anonymous>' call
          var subArray_7 = copyOfRange(args, item_7, item_7 + tmp17_pathNodesFromArgs | 0);
          var tmp$ret$40;
          // Inline function 'androidx.compose.ui.graphics.vector.toPathNodes.<anonymous>' call
          tmp$ret$40 = new RelativeCurveTo(subArray_7[0], subArray_7[1], subArray_7[2], subArray_7[3], subArray_7[4], subArray_7[5]);
          var node_7 = tmp$ret$40;
          var tmp_24;
          var tmp_25;
          if (node_7 instanceof MoveTo) {
            tmp_25 = item_7 > 0;
          } else {
            tmp_25 = false;
          }
          if (tmp_25) {
            tmp_24 = new LineTo(subArray_7[0], subArray_7[1]);
          } else {
            var tmp_26;
            if (node_7 instanceof RelativeMoveTo) {
              tmp_26 = item_7 > 0;
            } else {
              tmp_26 = false;
            }
            if (tmp_26) {
              tmp_24 = new RelativeLineTo(subArray_7[0], subArray_7[1]);
            } else {
              tmp_24 = node_7;
            }
          }
          tmp$ret$41 = tmp_24;
          tmp0_mapTo_7.add_1j60pz_k$(tmp$ret$41);
        }
         while (!(item_7 === last_7));
      tmp$ret$42 = tmp0_mapTo_7;
      tmp$ret$43 = tmp$ret$42;
      tmp$ret$44 = tmp$ret$43;
      tmp = tmp$ret$44;
    } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(67)))) {
      var tmp$ret$49;
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var tmp19_pathNodesFromArgs = 6;
      var tmp$ret$48;
      // Inline function 'kotlin.collections.map' call
      var tmp18_map = step(numberRangeToNumber(0, args.length - tmp19_pathNodesFromArgs | 0), tmp19_pathNodesFromArgs);
      var tmp$ret$47;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_8 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp18_map, 10));
      var inductionVariable_8 = tmp18_map.first_1;
      var last_8 = tmp18_map.last_1;
      var step_9 = tmp18_map.step_1;
      if ((step_9 > 0 ? inductionVariable_8 <= last_8 : false) ? true : step_9 < 0 ? last_8 <= inductionVariable_8 : false)
        do {
          var item_8 = inductionVariable_8;
          inductionVariable_8 = inductionVariable_8 + step_9 | 0;
          var tmp$ret$46;
          // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs.<anonymous>' call
          var subArray_8 = copyOfRange(args, item_8, item_8 + tmp19_pathNodesFromArgs | 0);
          var tmp$ret$45;
          // Inline function 'androidx.compose.ui.graphics.vector.toPathNodes.<anonymous>' call
          tmp$ret$45 = new CurveTo(subArray_8[0], subArray_8[1], subArray_8[2], subArray_8[3], subArray_8[4], subArray_8[5]);
          var node_8 = tmp$ret$45;
          var tmp_27;
          var tmp_28;
          if (node_8 instanceof MoveTo) {
            tmp_28 = item_8 > 0;
          } else {
            tmp_28 = false;
          }
          if (tmp_28) {
            tmp_27 = new LineTo(subArray_8[0], subArray_8[1]);
          } else {
            var tmp_29;
            if (node_8 instanceof RelativeMoveTo) {
              tmp_29 = item_8 > 0;
            } else {
              tmp_29 = false;
            }
            if (tmp_29) {
              tmp_27 = new RelativeLineTo(subArray_8[0], subArray_8[1]);
            } else {
              tmp_27 = node_8;
            }
          }
          tmp$ret$46 = tmp_27;
          tmp0_mapTo_8.add_1j60pz_k$(tmp$ret$46);
        }
         while (!(item_8 === last_8));
      tmp$ret$47 = tmp0_mapTo_8;
      tmp$ret$48 = tmp$ret$47;
      tmp$ret$49 = tmp$ret$48;
      tmp = tmp$ret$49;
    } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(115)))) {
      var tmp$ret$54;
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var tmp21_pathNodesFromArgs = 4;
      var tmp$ret$53;
      // Inline function 'kotlin.collections.map' call
      var tmp20_map = step(numberRangeToNumber(0, args.length - tmp21_pathNodesFromArgs | 0), tmp21_pathNodesFromArgs);
      var tmp$ret$52;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_9 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp20_map, 10));
      var inductionVariable_9 = tmp20_map.first_1;
      var last_9 = tmp20_map.last_1;
      var step_10 = tmp20_map.step_1;
      if ((step_10 > 0 ? inductionVariable_9 <= last_9 : false) ? true : step_10 < 0 ? last_9 <= inductionVariable_9 : false)
        do {
          var item_9 = inductionVariable_9;
          inductionVariable_9 = inductionVariable_9 + step_10 | 0;
          var tmp$ret$51;
          // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs.<anonymous>' call
          var subArray_9 = copyOfRange(args, item_9, item_9 + tmp21_pathNodesFromArgs | 0);
          var tmp$ret$50;
          // Inline function 'androidx.compose.ui.graphics.vector.toPathNodes.<anonymous>' call
          tmp$ret$50 = new RelativeReflectiveCurveTo(subArray_9[0], subArray_9[1], subArray_9[2], subArray_9[3]);
          var node_9 = tmp$ret$50;
          var tmp_30;
          var tmp_31;
          if (node_9 instanceof MoveTo) {
            tmp_31 = item_9 > 0;
          } else {
            tmp_31 = false;
          }
          if (tmp_31) {
            tmp_30 = new LineTo(subArray_9[0], subArray_9[1]);
          } else {
            var tmp_32;
            if (node_9 instanceof RelativeMoveTo) {
              tmp_32 = item_9 > 0;
            } else {
              tmp_32 = false;
            }
            if (tmp_32) {
              tmp_30 = new RelativeLineTo(subArray_9[0], subArray_9[1]);
            } else {
              tmp_30 = node_9;
            }
          }
          tmp$ret$51 = tmp_30;
          tmp0_mapTo_9.add_1j60pz_k$(tmp$ret$51);
        }
         while (!(item_9 === last_9));
      tmp$ret$52 = tmp0_mapTo_9;
      tmp$ret$53 = tmp$ret$52;
      tmp$ret$54 = tmp$ret$53;
      tmp = tmp$ret$54;
    } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(83)))) {
      var tmp$ret$59;
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var tmp23_pathNodesFromArgs = 4;
      var tmp$ret$58;
      // Inline function 'kotlin.collections.map' call
      var tmp22_map = step(numberRangeToNumber(0, args.length - tmp23_pathNodesFromArgs | 0), tmp23_pathNodesFromArgs);
      var tmp$ret$57;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_10 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp22_map, 10));
      var inductionVariable_10 = tmp22_map.first_1;
      var last_10 = tmp22_map.last_1;
      var step_11 = tmp22_map.step_1;
      if ((step_11 > 0 ? inductionVariable_10 <= last_10 : false) ? true : step_11 < 0 ? last_10 <= inductionVariable_10 : false)
        do {
          var item_10 = inductionVariable_10;
          inductionVariable_10 = inductionVariable_10 + step_11 | 0;
          var tmp$ret$56;
          // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs.<anonymous>' call
          var subArray_10 = copyOfRange(args, item_10, item_10 + tmp23_pathNodesFromArgs | 0);
          var tmp$ret$55;
          // Inline function 'androidx.compose.ui.graphics.vector.toPathNodes.<anonymous>' call
          tmp$ret$55 = new ReflectiveCurveTo(subArray_10[0], subArray_10[1], subArray_10[2], subArray_10[3]);
          var node_10 = tmp$ret$55;
          var tmp_33;
          var tmp_34;
          if (node_10 instanceof MoveTo) {
            tmp_34 = item_10 > 0;
          } else {
            tmp_34 = false;
          }
          if (tmp_34) {
            tmp_33 = new LineTo(subArray_10[0], subArray_10[1]);
          } else {
            var tmp_35;
            if (node_10 instanceof RelativeMoveTo) {
              tmp_35 = item_10 > 0;
            } else {
              tmp_35 = false;
            }
            if (tmp_35) {
              tmp_33 = new RelativeLineTo(subArray_10[0], subArray_10[1]);
            } else {
              tmp_33 = node_10;
            }
          }
          tmp$ret$56 = tmp_33;
          tmp0_mapTo_10.add_1j60pz_k$(tmp$ret$56);
        }
         while (!(item_10 === last_10));
      tmp$ret$57 = tmp0_mapTo_10;
      tmp$ret$58 = tmp$ret$57;
      tmp$ret$59 = tmp$ret$58;
      tmp = tmp$ret$59;
    } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(113)))) {
      var tmp$ret$64;
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var tmp25_pathNodesFromArgs = 4;
      var tmp$ret$63;
      // Inline function 'kotlin.collections.map' call
      var tmp24_map = step(numberRangeToNumber(0, args.length - tmp25_pathNodesFromArgs | 0), tmp25_pathNodesFromArgs);
      var tmp$ret$62;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_11 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp24_map, 10));
      var inductionVariable_11 = tmp24_map.first_1;
      var last_11 = tmp24_map.last_1;
      var step_12 = tmp24_map.step_1;
      if ((step_12 > 0 ? inductionVariable_11 <= last_11 : false) ? true : step_12 < 0 ? last_11 <= inductionVariable_11 : false)
        do {
          var item_11 = inductionVariable_11;
          inductionVariable_11 = inductionVariable_11 + step_12 | 0;
          var tmp$ret$61;
          // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs.<anonymous>' call
          var subArray_11 = copyOfRange(args, item_11, item_11 + tmp25_pathNodesFromArgs | 0);
          var tmp$ret$60;
          // Inline function 'androidx.compose.ui.graphics.vector.toPathNodes.<anonymous>' call
          tmp$ret$60 = new RelativeQuadTo(subArray_11[0], subArray_11[1], subArray_11[2], subArray_11[3]);
          var node_11 = tmp$ret$60;
          var tmp_36;
          var tmp_37;
          if (node_11 instanceof MoveTo) {
            tmp_37 = item_11 > 0;
          } else {
            tmp_37 = false;
          }
          if (tmp_37) {
            tmp_36 = new LineTo(subArray_11[0], subArray_11[1]);
          } else {
            var tmp_38;
            if (node_11 instanceof RelativeMoveTo) {
              tmp_38 = item_11 > 0;
            } else {
              tmp_38 = false;
            }
            if (tmp_38) {
              tmp_36 = new RelativeLineTo(subArray_11[0], subArray_11[1]);
            } else {
              tmp_36 = node_11;
            }
          }
          tmp$ret$61 = tmp_36;
          tmp0_mapTo_11.add_1j60pz_k$(tmp$ret$61);
        }
         while (!(item_11 === last_11));
      tmp$ret$62 = tmp0_mapTo_11;
      tmp$ret$63 = tmp$ret$62;
      tmp$ret$64 = tmp$ret$63;
      tmp = tmp$ret$64;
    } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(81)))) {
      var tmp$ret$69;
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var tmp27_pathNodesFromArgs = 4;
      var tmp$ret$68;
      // Inline function 'kotlin.collections.map' call
      var tmp26_map = step(numberRangeToNumber(0, args.length - tmp27_pathNodesFromArgs | 0), tmp27_pathNodesFromArgs);
      var tmp$ret$67;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_12 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp26_map, 10));
      var inductionVariable_12 = tmp26_map.first_1;
      var last_12 = tmp26_map.last_1;
      var step_13 = tmp26_map.step_1;
      if ((step_13 > 0 ? inductionVariable_12 <= last_12 : false) ? true : step_13 < 0 ? last_12 <= inductionVariable_12 : false)
        do {
          var item_12 = inductionVariable_12;
          inductionVariable_12 = inductionVariable_12 + step_13 | 0;
          var tmp$ret$66;
          // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs.<anonymous>' call
          var subArray_12 = copyOfRange(args, item_12, item_12 + tmp27_pathNodesFromArgs | 0);
          var tmp$ret$65;
          // Inline function 'androidx.compose.ui.graphics.vector.toPathNodes.<anonymous>' call
          tmp$ret$65 = new QuadTo(subArray_12[0], subArray_12[1], subArray_12[2], subArray_12[3]);
          var node_12 = tmp$ret$65;
          var tmp_39;
          var tmp_40;
          if (node_12 instanceof MoveTo) {
            tmp_40 = item_12 > 0;
          } else {
            tmp_40 = false;
          }
          if (tmp_40) {
            tmp_39 = new LineTo(subArray_12[0], subArray_12[1]);
          } else {
            var tmp_41;
            if (node_12 instanceof RelativeMoveTo) {
              tmp_41 = item_12 > 0;
            } else {
              tmp_41 = false;
            }
            if (tmp_41) {
              tmp_39 = new RelativeLineTo(subArray_12[0], subArray_12[1]);
            } else {
              tmp_39 = node_12;
            }
          }
          tmp$ret$66 = tmp_39;
          tmp0_mapTo_12.add_1j60pz_k$(tmp$ret$66);
        }
         while (!(item_12 === last_12));
      tmp$ret$67 = tmp0_mapTo_12;
      tmp$ret$68 = tmp$ret$67;
      tmp$ret$69 = tmp$ret$68;
      tmp = tmp$ret$69;
    } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(116)))) {
      var tmp$ret$74;
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var tmp29_pathNodesFromArgs = 2;
      var tmp$ret$73;
      // Inline function 'kotlin.collections.map' call
      var tmp28_map = step(numberRangeToNumber(0, args.length - tmp29_pathNodesFromArgs | 0), tmp29_pathNodesFromArgs);
      var tmp$ret$72;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_13 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp28_map, 10));
      var inductionVariable_13 = tmp28_map.first_1;
      var last_13 = tmp28_map.last_1;
      var step_14 = tmp28_map.step_1;
      if ((step_14 > 0 ? inductionVariable_13 <= last_13 : false) ? true : step_14 < 0 ? last_13 <= inductionVariable_13 : false)
        do {
          var item_13 = inductionVariable_13;
          inductionVariable_13 = inductionVariable_13 + step_14 | 0;
          var tmp$ret$71;
          // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs.<anonymous>' call
          var subArray_13 = copyOfRange(args, item_13, item_13 + tmp29_pathNodesFromArgs | 0);
          var tmp$ret$70;
          // Inline function 'androidx.compose.ui.graphics.vector.toPathNodes.<anonymous>' call
          tmp$ret$70 = new RelativeReflectiveQuadTo(subArray_13[0], subArray_13[1]);
          var node_13 = tmp$ret$70;
          var tmp_42;
          var tmp_43;
          if (node_13 instanceof MoveTo) {
            tmp_43 = item_13 > 0;
          } else {
            tmp_43 = false;
          }
          if (tmp_43) {
            tmp_42 = new LineTo(subArray_13[0], subArray_13[1]);
          } else {
            var tmp_44;
            if (node_13 instanceof RelativeMoveTo) {
              tmp_44 = item_13 > 0;
            } else {
              tmp_44 = false;
            }
            if (tmp_44) {
              tmp_42 = new RelativeLineTo(subArray_13[0], subArray_13[1]);
            } else {
              tmp_42 = node_13;
            }
          }
          tmp$ret$71 = tmp_42;
          tmp0_mapTo_13.add_1j60pz_k$(tmp$ret$71);
        }
         while (!(item_13 === last_13));
      tmp$ret$72 = tmp0_mapTo_13;
      tmp$ret$73 = tmp$ret$72;
      tmp$ret$74 = tmp$ret$73;
      tmp = tmp$ret$74;
    } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(84)))) {
      var tmp$ret$79;
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var tmp31_pathNodesFromArgs = 2;
      var tmp$ret$78;
      // Inline function 'kotlin.collections.map' call
      var tmp30_map = step(numberRangeToNumber(0, args.length - tmp31_pathNodesFromArgs | 0), tmp31_pathNodesFromArgs);
      var tmp$ret$77;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_14 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp30_map, 10));
      var inductionVariable_14 = tmp30_map.first_1;
      var last_14 = tmp30_map.last_1;
      var step_15 = tmp30_map.step_1;
      if ((step_15 > 0 ? inductionVariable_14 <= last_14 : false) ? true : step_15 < 0 ? last_14 <= inductionVariable_14 : false)
        do {
          var item_14 = inductionVariable_14;
          inductionVariable_14 = inductionVariable_14 + step_15 | 0;
          var tmp$ret$76;
          // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs.<anonymous>' call
          var subArray_14 = copyOfRange(args, item_14, item_14 + tmp31_pathNodesFromArgs | 0);
          var tmp$ret$75;
          // Inline function 'androidx.compose.ui.graphics.vector.toPathNodes.<anonymous>' call
          tmp$ret$75 = new ReflectiveQuadTo(subArray_14[0], subArray_14[1]);
          var node_14 = tmp$ret$75;
          var tmp_45;
          var tmp_46;
          if (node_14 instanceof MoveTo) {
            tmp_46 = item_14 > 0;
          } else {
            tmp_46 = false;
          }
          if (tmp_46) {
            tmp_45 = new LineTo(subArray_14[0], subArray_14[1]);
          } else {
            var tmp_47;
            if (node_14 instanceof RelativeMoveTo) {
              tmp_47 = item_14 > 0;
            } else {
              tmp_47 = false;
            }
            if (tmp_47) {
              tmp_45 = new RelativeLineTo(subArray_14[0], subArray_14[1]);
            } else {
              tmp_45 = node_14;
            }
          }
          tmp$ret$76 = tmp_45;
          tmp0_mapTo_14.add_1j60pz_k$(tmp$ret$76);
        }
         while (!(item_14 === last_14));
      tmp$ret$77 = tmp0_mapTo_14;
      tmp$ret$78 = tmp$ret$77;
      tmp$ret$79 = tmp$ret$78;
      tmp = tmp$ret$79;
    } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(97)))) {
      var tmp$ret$84;
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var tmp33_pathNodesFromArgs = 7;
      var tmp$ret$83;
      // Inline function 'kotlin.collections.map' call
      var tmp32_map = step(numberRangeToNumber(0, args.length - tmp33_pathNodesFromArgs | 0), tmp33_pathNodesFromArgs);
      var tmp$ret$82;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_15 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp32_map, 10));
      var inductionVariable_15 = tmp32_map.first_1;
      var last_15 = tmp32_map.last_1;
      var step_16 = tmp32_map.step_1;
      if ((step_16 > 0 ? inductionVariable_15 <= last_15 : false) ? true : step_16 < 0 ? last_15 <= inductionVariable_15 : false)
        do {
          var item_15 = inductionVariable_15;
          inductionVariable_15 = inductionVariable_15 + step_16 | 0;
          var tmp$ret$81;
          // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs.<anonymous>' call
          var subArray_15 = copyOfRange(args, item_15, item_15 + tmp33_pathNodesFromArgs | 0);
          var tmp$ret$80;
          // Inline function 'androidx.compose.ui.graphics.vector.toPathNodes.<anonymous>' call
          tmp$ret$80 = new RelativeArcTo(subArray_15[0], subArray_15[1], subArray_15[2], !(compareTo(subArray_15[3], 0.0) === 0), !(compareTo(subArray_15[4], 0.0) === 0), subArray_15[5], subArray_15[6]);
          var node_15 = tmp$ret$80;
          var tmp_48;
          var tmp_49;
          if (node_15 instanceof MoveTo) {
            tmp_49 = item_15 > 0;
          } else {
            tmp_49 = false;
          }
          if (tmp_49) {
            tmp_48 = new LineTo(subArray_15[0], subArray_15[1]);
          } else {
            var tmp_50;
            if (node_15 instanceof RelativeMoveTo) {
              tmp_50 = item_15 > 0;
            } else {
              tmp_50 = false;
            }
            if (tmp_50) {
              tmp_48 = new RelativeLineTo(subArray_15[0], subArray_15[1]);
            } else {
              tmp_48 = node_15;
            }
          }
          tmp$ret$81 = tmp_48;
          tmp0_mapTo_15.add_1j60pz_k$(tmp$ret$81);
        }
         while (!(item_15 === last_15));
      tmp$ret$82 = tmp0_mapTo_15;
      tmp$ret$83 = tmp$ret$82;
      tmp$ret$84 = tmp$ret$83;
      tmp = tmp$ret$84;
    } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(65)))) {
      var tmp$ret$89;
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var tmp35_pathNodesFromArgs = 7;
      var tmp$ret$88;
      // Inline function 'kotlin.collections.map' call
      var tmp34_map = step(numberRangeToNumber(0, args.length - tmp35_pathNodesFromArgs | 0), tmp35_pathNodesFromArgs);
      var tmp$ret$87;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_16 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp34_map, 10));
      var inductionVariable_16 = tmp34_map.first_1;
      var last_16 = tmp34_map.last_1;
      var step_17 = tmp34_map.step_1;
      if ((step_17 > 0 ? inductionVariable_16 <= last_16 : false) ? true : step_17 < 0 ? last_16 <= inductionVariable_16 : false)
        do {
          var item_16 = inductionVariable_16;
          inductionVariable_16 = inductionVariable_16 + step_17 | 0;
          var tmp$ret$86;
          // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs.<anonymous>' call
          var subArray_16 = copyOfRange(args, item_16, item_16 + tmp35_pathNodesFromArgs | 0);
          var tmp$ret$85;
          // Inline function 'androidx.compose.ui.graphics.vector.toPathNodes.<anonymous>' call
          tmp$ret$85 = new ArcTo(subArray_16[0], subArray_16[1], subArray_16[2], !(compareTo(subArray_16[3], 0.0) === 0), !(compareTo(subArray_16[4], 0.0) === 0), subArray_16[5], subArray_16[6]);
          var node_16 = tmp$ret$85;
          var tmp_51;
          var tmp_52;
          if (node_16 instanceof MoveTo) {
            tmp_52 = item_16 > 0;
          } else {
            tmp_52 = false;
          }
          if (tmp_52) {
            tmp_51 = new LineTo(subArray_16[0], subArray_16[1]);
          } else {
            var tmp_53;
            if (node_16 instanceof RelativeMoveTo) {
              tmp_53 = item_16 > 0;
            } else {
              tmp_53 = false;
            }
            if (tmp_53) {
              tmp_51 = new RelativeLineTo(subArray_16[0], subArray_16[1]);
            } else {
              tmp_51 = node_16;
            }
          }
          tmp$ret$86 = tmp_51;
          tmp0_mapTo_16.add_1j60pz_k$(tmp$ret$86);
        }
         while (!(item_16 === last_16));
      tmp$ret$87 = tmp0_mapTo_16;
      tmp$ret$88 = tmp$ret$87;
      tmp$ret$89 = tmp$ret$88;
      tmp = tmp$ret$89;
    } else {
      throw IllegalArgumentException_init_$Create$('Unknown command for: ' + new Char(_this__u8e3s4));
    }
    return tmp;
  }
  function get_RelativeCloseKey() {
    return RelativeCloseKey;
  }
  var RelativeCloseKey;
  function get_CloseKey() {
    return CloseKey;
  }
  var CloseKey;
  function get_RelativeMoveToKey() {
    return RelativeMoveToKey;
  }
  var RelativeMoveToKey;
  function pathNodesFromArgs(args, numArgs, nodeFor) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = step(numberRangeToNumber(0, args.length - numArgs | 0), numArgs);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var inductionVariable = tmp0_map.first_1;
    var last = tmp0_map.last_1;
    var step_0 = tmp0_map.step_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var item = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs.<anonymous>' call
        var subArray = copyOfRange(args, item, item + numArgs | 0);
        var node = nodeFor(subArray);
        var tmp;
        var tmp_0;
        if (node instanceof MoveTo) {
          tmp_0 = item > 0;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp = new LineTo(subArray[0], subArray[1]);
        } else {
          var tmp_1;
          if (node instanceof RelativeMoveTo) {
            tmp_1 = item > 0;
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            tmp = new RelativeLineTo(subArray[0], subArray[1]);
          } else {
            tmp = node;
          }
        }
        tmp$ret$0 = tmp;
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
      }
       while (!(item === last));
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function get_NUM_MOVE_TO_ARGS() {
    return NUM_MOVE_TO_ARGS;
  }
  var NUM_MOVE_TO_ARGS;
  function get_MoveToKey() {
    return MoveToKey;
  }
  var MoveToKey;
  function get_RelativeLineToKey() {
    return RelativeLineToKey;
  }
  var RelativeLineToKey;
  function get_NUM_LINE_TO_ARGS() {
    return NUM_LINE_TO_ARGS;
  }
  var NUM_LINE_TO_ARGS;
  function get_LineToKey() {
    return LineToKey;
  }
  var LineToKey;
  function get_RelativeHorizontalToKey() {
    return RelativeHorizontalToKey;
  }
  var RelativeHorizontalToKey;
  function get_NUM_HORIZONTAL_TO_ARGS() {
    return NUM_HORIZONTAL_TO_ARGS;
  }
  var NUM_HORIZONTAL_TO_ARGS;
  function get_HorizontalToKey() {
    return HorizontalToKey;
  }
  var HorizontalToKey;
  function get_RelativeVerticalToKey() {
    return RelativeVerticalToKey;
  }
  var RelativeVerticalToKey;
  function get_NUM_VERTICAL_TO_ARGS() {
    return NUM_VERTICAL_TO_ARGS;
  }
  var NUM_VERTICAL_TO_ARGS;
  function get_VerticalToKey() {
    return VerticalToKey;
  }
  var VerticalToKey;
  function get_RelativeCurveToKey() {
    return RelativeCurveToKey;
  }
  var RelativeCurveToKey;
  function get_NUM_CURVE_TO_ARGS() {
    return NUM_CURVE_TO_ARGS;
  }
  var NUM_CURVE_TO_ARGS;
  function get_CurveToKey() {
    return CurveToKey;
  }
  var CurveToKey;
  function get_RelativeReflectiveCurveToKey() {
    return RelativeReflectiveCurveToKey;
  }
  var RelativeReflectiveCurveToKey;
  function get_NUM_REFLECTIVE_CURVE_TO_ARGS() {
    return NUM_REFLECTIVE_CURVE_TO_ARGS;
  }
  var NUM_REFLECTIVE_CURVE_TO_ARGS;
  function get_ReflectiveCurveToKey() {
    return ReflectiveCurveToKey;
  }
  var ReflectiveCurveToKey;
  function get_RelativeQuadToKey() {
    return RelativeQuadToKey;
  }
  var RelativeQuadToKey;
  function get_NUM_QUAD_TO_ARGS() {
    return NUM_QUAD_TO_ARGS;
  }
  var NUM_QUAD_TO_ARGS;
  function get_QuadToKey() {
    return QuadToKey;
  }
  var QuadToKey;
  function get_RelativeReflectiveQuadToKey() {
    return RelativeReflectiveQuadToKey;
  }
  var RelativeReflectiveQuadToKey;
  function get_NUM_REFLECTIVE_QUAD_TO_ARGS() {
    return NUM_REFLECTIVE_QUAD_TO_ARGS;
  }
  var NUM_REFLECTIVE_QUAD_TO_ARGS;
  function get_ReflectiveQuadToKey() {
    return ReflectiveQuadToKey;
  }
  var ReflectiveQuadToKey;
  function get_RelativeArcToKey() {
    return RelativeArcToKey;
  }
  var RelativeArcToKey;
  function get_NUM_ARC_TO_ARGS() {
    return NUM_ARC_TO_ARGS;
  }
  var NUM_ARC_TO_ARGS;
  function get_ArcToKey() {
    return ArcToKey;
  }
  var ArcToKey;
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
  function ExtractFloatResult_init_$Init$(endPosition, endWithNegativeOrDot, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      endPosition = 0;
    if (!(($mask0 & 2) === 0))
      endWithNegativeOrDot = false;
    ExtractFloatResult.call($this, endPosition, endWithNegativeOrDot);
    return $this;
  }
  function ExtractFloatResult_init_$Create$(endPosition, endWithNegativeOrDot, $mask0, $marker) {
    return ExtractFloatResult_init_$Init$(endPosition, endWithNegativeOrDot, $mask0, $marker, Object.create(ExtractFloatResult.prototype));
  }
  function PathPoint(x, y) {
    this.x_1 = x;
    this.y_1 = y;
  }
  PathPoint.prototype.set_x_kbokf2_k$ = function (_set____db54di) {
    this.x_1 = _set____db54di;
  };
  PathPoint.prototype.get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  PathPoint.prototype.set_y_k4y0u7_k$ = function (_set____db54di) {
    this.y_1 = _set____db54di;
  };
  PathPoint.prototype.get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  PathPoint.prototype.reset_5tn5dq_k$ = function () {
    this.x_1 = 0.0;
    this.y_1 = 0.0;
  };
  PathPoint.prototype.component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  PathPoint.prototype.component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  PathPoint.prototype.copy_138fzp_k$ = function (x, y) {
    return new PathPoint(x, y);
  };
  PathPoint.prototype.copy$default_bbfa40_k$ = function (x, y, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = this.x_1;
    if (!(($mask0 & 2) === 0))
      y = this.y_1;
    return this.copy_138fzp_k$(x, y);
  };
  PathPoint.prototype.toString = function () {
    return 'PathPoint(x=' + this.x_1 + ', y=' + this.y_1 + ')';
  };
  PathPoint.prototype.hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    return result;
  };
  PathPoint.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PathPoint))
      return false;
    var tmp0_other_with_cast = other instanceof PathPoint ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  PathPoint.$metadata$ = classMeta('PathPoint');
  function _get_nodes__dowtds_0($this) {
    return $this.nodes_1;
  }
  function _get_currentPoint__vaoolw($this) {
    return $this.currentPoint_1;
  }
  function _get_ctrlPoint__ybetqk($this) {
    return $this.ctrlPoint_1;
  }
  function _get_segmentPoint__lgx4j6($this) {
    return $this.segmentPoint_1;
  }
  function _get_reflectiveCtrlPoint__60z8t5($this) {
    return $this.reflectiveCtrlPoint_1;
  }
  function close($this, target) {
    $this.currentPoint_1.x_1 = $this.segmentPoint_1.x_1;
    $this.currentPoint_1.y_1 = $this.segmentPoint_1.y_1;
    $this.ctrlPoint_1.x_1 = $this.segmentPoint_1.x_1;
    $this.ctrlPoint_1.y_1 = $this.segmentPoint_1.y_1;
    target.close_ymq55z_k$();
    target.moveTo_ga4oez_k$($this.currentPoint_1.x_1, $this.currentPoint_1.y_1);
  }
  function relativeMoveTo(_this__u8e3s4, $this, target) {
    var tmp0_this = $this.currentPoint_1;
    tmp0_this.x_1 = tmp0_this.x_1 + _this__u8e3s4.dx_1;
    var tmp1_this = $this.currentPoint_1;
    tmp1_this.y_1 = tmp1_this.y_1 + _this__u8e3s4.dy_1;
    target.relativeMoveTo_4j9kzr_k$(_this__u8e3s4.dx_1, _this__u8e3s4.dy_1);
    $this.segmentPoint_1.x_1 = $this.currentPoint_1.x_1;
    $this.segmentPoint_1.y_1 = $this.currentPoint_1.y_1;
  }
  function moveTo(_this__u8e3s4, $this, target) {
    $this.currentPoint_1.x_1 = _this__u8e3s4.x_1;
    $this.currentPoint_1.y_1 = _this__u8e3s4.y_1;
    target.moveTo_ga4oez_k$(_this__u8e3s4.x_1, _this__u8e3s4.y_1);
    $this.segmentPoint_1.x_1 = $this.currentPoint_1.x_1;
    $this.segmentPoint_1.y_1 = $this.currentPoint_1.y_1;
  }
  function relativeLineTo(_this__u8e3s4, $this, target) {
    target.relativeLineTo_kipmp6_k$(_this__u8e3s4.dx_1, _this__u8e3s4.dy_1);
    var tmp0_this = $this.currentPoint_1;
    tmp0_this.x_1 = tmp0_this.x_1 + _this__u8e3s4.dx_1;
    var tmp1_this = $this.currentPoint_1;
    tmp1_this.y_1 = tmp1_this.y_1 + _this__u8e3s4.dy_1;
  }
  function lineTo(_this__u8e3s4, $this, target) {
    target.lineTo_w9kq4e_k$(_this__u8e3s4.x_1, _this__u8e3s4.y_1);
    $this.currentPoint_1.x_1 = _this__u8e3s4.x_1;
    $this.currentPoint_1.y_1 = _this__u8e3s4.y_1;
  }
  function relativeHorizontalTo(_this__u8e3s4, $this, target) {
    target.relativeLineTo_kipmp6_k$(_this__u8e3s4.dx_1, 0.0);
    var tmp0_this = $this.currentPoint_1;
    tmp0_this.x_1 = tmp0_this.x_1 + _this__u8e3s4.dx_1;
  }
  function horizontalTo(_this__u8e3s4, $this, target) {
    target.lineTo_w9kq4e_k$(_this__u8e3s4.x_1, $this.currentPoint_1.y_1);
    $this.currentPoint_1.x_1 = _this__u8e3s4.x_1;
  }
  function relativeVerticalTo(_this__u8e3s4, $this, target) {
    target.relativeLineTo_kipmp6_k$(0.0, _this__u8e3s4.dy_1);
    var tmp0_this = $this.currentPoint_1;
    tmp0_this.y_1 = tmp0_this.y_1 + _this__u8e3s4.dy_1;
  }
  function verticalTo(_this__u8e3s4, $this, target) {
    target.lineTo_w9kq4e_k$($this.currentPoint_1.x_1, _this__u8e3s4.y_1);
    $this.currentPoint_1.y_1 = _this__u8e3s4.y_1;
  }
  function relativeCurveTo(_this__u8e3s4, $this, target) {
    target.relativeCubicTo_a0rn6w_k$(_this__u8e3s4.dx1__1, _this__u8e3s4.dy1__1, _this__u8e3s4.dx2__1, _this__u8e3s4.dy2__1, _this__u8e3s4.dx3__1, _this__u8e3s4.dy3__1);
    $this.ctrlPoint_1.x_1 = $this.currentPoint_1.x_1 + _this__u8e3s4.dx2__1;
    $this.ctrlPoint_1.y_1 = $this.currentPoint_1.y_1 + _this__u8e3s4.dy2__1;
    var tmp0_this = $this.currentPoint_1;
    tmp0_this.x_1 = tmp0_this.x_1 + _this__u8e3s4.dx3__1;
    var tmp1_this = $this.currentPoint_1;
    tmp1_this.y_1 = tmp1_this.y_1 + _this__u8e3s4.dy3__1;
  }
  function curveTo(_this__u8e3s4, $this, target) {
    target.cubicTo_1m51n8_k$(_this__u8e3s4.x1__1, _this__u8e3s4.y1__1, _this__u8e3s4.x2__1, _this__u8e3s4.y2__1, _this__u8e3s4.x3__1, _this__u8e3s4.y3__1);
    $this.ctrlPoint_1.x_1 = _this__u8e3s4.x2__1;
    $this.ctrlPoint_1.y_1 = _this__u8e3s4.y2__1;
    $this.currentPoint_1.x_1 = _this__u8e3s4.x3__1;
    $this.currentPoint_1.y_1 = _this__u8e3s4.y3__1;
  }
  function relativeReflectiveCurveTo(_this__u8e3s4, $this, prevIsCurve, target) {
    if (prevIsCurve) {
      $this.reflectiveCtrlPoint_1.x_1 = $this.currentPoint_1.x_1 - $this.ctrlPoint_1.x_1;
      $this.reflectiveCtrlPoint_1.y_1 = $this.currentPoint_1.y_1 - $this.ctrlPoint_1.y_1;
    } else {
      $this.reflectiveCtrlPoint_1.reset_5tn5dq_k$();
    }
    target.relativeCubicTo_a0rn6w_k$($this.reflectiveCtrlPoint_1.x_1, $this.reflectiveCtrlPoint_1.y_1, _this__u8e3s4.dx1__1, _this__u8e3s4.dy1__1, _this__u8e3s4.dx2__1, _this__u8e3s4.dy2__1);
    $this.ctrlPoint_1.x_1 = $this.currentPoint_1.x_1 + _this__u8e3s4.dx1__1;
    $this.ctrlPoint_1.y_1 = $this.currentPoint_1.y_1 + _this__u8e3s4.dy1__1;
    var tmp0_this = $this.currentPoint_1;
    tmp0_this.x_1 = tmp0_this.x_1 + _this__u8e3s4.dx2__1;
    var tmp1_this = $this.currentPoint_1;
    tmp1_this.y_1 = tmp1_this.y_1 + _this__u8e3s4.dy2__1;
  }
  function reflectiveCurveTo(_this__u8e3s4, $this, prevIsCurve, target) {
    if (prevIsCurve) {
      $this.reflectiveCtrlPoint_1.x_1 = 2 * $this.currentPoint_1.x_1 - $this.ctrlPoint_1.x_1;
      $this.reflectiveCtrlPoint_1.y_1 = 2 * $this.currentPoint_1.y_1 - $this.ctrlPoint_1.y_1;
    } else {
      $this.reflectiveCtrlPoint_1.x_1 = $this.currentPoint_1.x_1;
      $this.reflectiveCtrlPoint_1.y_1 = $this.currentPoint_1.y_1;
    }
    target.cubicTo_1m51n8_k$($this.reflectiveCtrlPoint_1.x_1, $this.reflectiveCtrlPoint_1.y_1, _this__u8e3s4.x1__1, _this__u8e3s4.y1__1, _this__u8e3s4.x2__1, _this__u8e3s4.y2__1);
    $this.ctrlPoint_1.x_1 = _this__u8e3s4.x1__1;
    $this.ctrlPoint_1.y_1 = _this__u8e3s4.y1__1;
    $this.currentPoint_1.x_1 = _this__u8e3s4.x2__1;
    $this.currentPoint_1.y_1 = _this__u8e3s4.y2__1;
  }
  function relativeQuadTo(_this__u8e3s4, $this, target) {
    target.relativeQuadraticBezierTo_z1apmz_k$(_this__u8e3s4.dx1__1, _this__u8e3s4.dy1__1, _this__u8e3s4.dx2__1, _this__u8e3s4.dy2__1);
    $this.ctrlPoint_1.x_1 = $this.currentPoint_1.x_1 + _this__u8e3s4.dx1__1;
    $this.ctrlPoint_1.y_1 = $this.currentPoint_1.y_1 + _this__u8e3s4.dy1__1;
    var tmp0_this = $this.currentPoint_1;
    tmp0_this.x_1 = tmp0_this.x_1 + _this__u8e3s4.dx2__1;
    var tmp1_this = $this.currentPoint_1;
    tmp1_this.y_1 = tmp1_this.y_1 + _this__u8e3s4.dy2__1;
  }
  function quadTo(_this__u8e3s4, $this, target) {
    target.quadraticBezierTo_t2qfc1_k$(_this__u8e3s4.x1__1, _this__u8e3s4.y1__1, _this__u8e3s4.x2__1, _this__u8e3s4.y2__1);
    $this.ctrlPoint_1.x_1 = _this__u8e3s4.x1__1;
    $this.ctrlPoint_1.y_1 = _this__u8e3s4.y1__1;
    $this.currentPoint_1.x_1 = _this__u8e3s4.x2__1;
    $this.currentPoint_1.y_1 = _this__u8e3s4.y2__1;
  }
  function relativeReflectiveQuadTo(_this__u8e3s4, $this, prevIsQuad, target) {
    if (prevIsQuad) {
      $this.reflectiveCtrlPoint_1.x_1 = $this.currentPoint_1.x_1 - $this.ctrlPoint_1.x_1;
      $this.reflectiveCtrlPoint_1.y_1 = $this.currentPoint_1.y_1 - $this.ctrlPoint_1.y_1;
    } else {
      $this.reflectiveCtrlPoint_1.reset_5tn5dq_k$();
    }
    target.relativeQuadraticBezierTo_z1apmz_k$($this.reflectiveCtrlPoint_1.x_1, $this.reflectiveCtrlPoint_1.y_1, _this__u8e3s4.dx_1, _this__u8e3s4.dy_1);
    $this.ctrlPoint_1.x_1 = $this.currentPoint_1.x_1 + $this.reflectiveCtrlPoint_1.x_1;
    $this.ctrlPoint_1.y_1 = $this.currentPoint_1.y_1 + $this.reflectiveCtrlPoint_1.y_1;
    var tmp0_this = $this.currentPoint_1;
    tmp0_this.x_1 = tmp0_this.x_1 + _this__u8e3s4.dx_1;
    var tmp1_this = $this.currentPoint_1;
    tmp1_this.y_1 = tmp1_this.y_1 + _this__u8e3s4.dy_1;
  }
  function reflectiveQuadTo(_this__u8e3s4, $this, prevIsQuad, target) {
    if (prevIsQuad) {
      $this.reflectiveCtrlPoint_1.x_1 = 2 * $this.currentPoint_1.x_1 - $this.ctrlPoint_1.x_1;
      $this.reflectiveCtrlPoint_1.y_1 = 2 * $this.currentPoint_1.y_1 - $this.ctrlPoint_1.y_1;
    } else {
      $this.reflectiveCtrlPoint_1.x_1 = $this.currentPoint_1.x_1;
      $this.reflectiveCtrlPoint_1.y_1 = $this.currentPoint_1.y_1;
    }
    target.quadraticBezierTo_t2qfc1_k$($this.reflectiveCtrlPoint_1.x_1, $this.reflectiveCtrlPoint_1.y_1, _this__u8e3s4.x_1, _this__u8e3s4.y_1);
    $this.ctrlPoint_1.x_1 = $this.reflectiveCtrlPoint_1.x_1;
    $this.ctrlPoint_1.y_1 = $this.reflectiveCtrlPoint_1.y_1;
    $this.currentPoint_1.x_1 = _this__u8e3s4.x_1;
    $this.currentPoint_1.y_1 = _this__u8e3s4.y_1;
  }
  function relativeArcTo(_this__u8e3s4, $this, target) {
    var arcStartX = _this__u8e3s4.arcStartDx_1 + $this.currentPoint_1.x_1;
    var arcStartY = _this__u8e3s4.arcStartDy_1 + $this.currentPoint_1.y_1;
    drawArc_0($this, target, $this.currentPoint_1.x_1, $this.currentPoint_1.y_1, arcStartX, arcStartY, _this__u8e3s4.horizontalEllipseRadius_1, _this__u8e3s4.verticalEllipseRadius_1, _this__u8e3s4.theta_1, _this__u8e3s4.isMoreThanHalf_1, _this__u8e3s4.isPositiveArc_1);
    $this.currentPoint_1.x_1 = arcStartX;
    $this.currentPoint_1.y_1 = arcStartY;
    $this.ctrlPoint_1.x_1 = $this.currentPoint_1.x_1;
    $this.ctrlPoint_1.y_1 = $this.currentPoint_1.y_1;
  }
  function arcTo(_this__u8e3s4, $this, target) {
    drawArc_0($this, target, $this.currentPoint_1.x_1, $this.currentPoint_1.y_1, _this__u8e3s4.arcStartX_1, _this__u8e3s4.arcStartY_1, _this__u8e3s4.horizontalEllipseRadius_1, _this__u8e3s4.verticalEllipseRadius_1, _this__u8e3s4.theta_1, _this__u8e3s4.isMoreThanHalf_1, _this__u8e3s4.isPositiveArc_1);
    $this.currentPoint_1.x_1 = _this__u8e3s4.arcStartX_1;
    $this.currentPoint_1.y_1 = _this__u8e3s4.arcStartY_1;
    $this.ctrlPoint_1.x_1 = $this.currentPoint_1.x_1;
    $this.ctrlPoint_1.y_1 = $this.currentPoint_1.y_1;
  }
  function drawArc_0($this, p, x0, y0, x1, y1, a, b, theta, isMoreThanHalf, isPositiveArc) {
    var thetaD = toRadians_0(theta, $this);
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
      drawArc_0($this, p, x0, y0, x1, y1, a * adjust, b * adjust, theta, isMoreThanHalf, isPositiveArc);
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
        p.cubicTo_1m51n8_k$(q1x, q1y, q2x, q2y, e2x, e2y);
        eta1 = eta2;
        eta1x = e2x;
        eta1y = e2y;
        ep1x = ep2x;
        ep1y = ep2y;
      }
       while (inductionVariable < numSegments);
  }
  function addNode_0($this, cmd, args) {
    $this.nodes_1.addAll_oxxjjk_k$(toPathNodes(cmd, args));
  }
  function nextStart($this, s, end) {
    var index = end;
    var c;
    while (index < s.length) {
      c = charSequenceGet(s, index);
      if (((imul(Char__minus_impl_a2frrh(c, _Char___init__impl__6a9atx(65)), Char__minus_impl_a2frrh(c, _Char___init__impl__6a9atx(90))) <= 0 ? true : imul(Char__minus_impl_a2frrh(c, _Char___init__impl__6a9atx(97)), Char__minus_impl_a2frrh(c, _Char___init__impl__6a9atx(122))) <= 0) ? !equals(new Char(c), new Char(_Char___init__impl__6a9atx(101))) : false) ? !equals(new Char(c), new Char(_Char___init__impl__6a9atx(69))) : false) {
        return index;
      }
      var tmp0 = index;
      index = tmp0 + 1 | 0;
    }
    return index;
  }
  function getFloats($this, s) {
    if (equals(new Char(charSequenceGet(s, 0)), new Char(_Char___init__impl__6a9atx(122))) ? true : equals(new Char(charSequenceGet(s, 0)), new Char(_Char___init__impl__6a9atx(90)))) {
      return new Float32Array(0);
    }
    var results = new Float32Array(s.length);
    var count = 0;
    var startPosition = 1;
    var endPosition;
    var result = ExtractFloatResult_init_$Create$(0, false, 3, null);
    var totalLength = s.length;
    while (startPosition < totalLength) {
      extract($this, s, startPosition, result);
      endPosition = result.endPosition_1;
      if (startPosition < endPosition) {
        var tmp0 = count;
        count = tmp0 + 1 | 0;
        var tmp$ret$4;
        // Inline function 'kotlin.text.toFloat' call
        var tmp$ret$1;
        // Inline function 'kotlin.text.substring' call
        var tmp0_substring = startPosition;
        var tmp1_substring = endPosition;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = s;
        tmp$ret$1 = tmp$ret$0.substring(tmp0_substring, tmp1_substring);
        var tmp2_toFloat = tmp$ret$1;
        var tmp$ret$3;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp0_unsafeCast = toDouble(tmp2_toFloat);
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp0_unsafeCast;
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$3;
        results[tmp0] = tmp$ret$4;
      }
      if (result.endWithNegativeOrDot_1) {
        startPosition = endPosition;
      } else {
        startPosition = endPosition + 1 | 0;
      }
    }
    return copyOfRange_0($this, results, 0, count);
  }
  function copyOfRange_0($this, original, start, end) {
    if (start > end) {
      throw IllegalArgumentException_init_$Create$_0();
    }
    var originalLength = original.length;
    if (start < 0 ? true : start > originalLength) {
      throw IndexOutOfBoundsException_init_$Create$();
    }
    var resultLength = end - start | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = originalLength - start | 0;
    tmp$ret$0 = Math.min(resultLength, tmp0_minOf);
    var copyLength = tmp$ret$0;
    var result = new Float32Array(resultLength);
    var tmp$ret$5;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = start + copyLength | 0;
    var tmp$ret$2;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = original;
    tmp$ret$2 = tmp$ret$1;
    var tmp = tmp$ret$2;
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = result;
    tmp$ret$4 = tmp$ret$3;
    arrayCopy(tmp, tmp$ret$4, 0, start, tmp1_copyInto);
    tmp$ret$5 = result;
    return result;
  }
  function extract($this, s, start, result) {
    var currentIndex = start;
    var foundSeparator = false;
    result.endWithNegativeOrDot_1 = false;
    var secondDot = false;
    var isExponential = false;
    $l$loop: while (currentIndex < s.length) {
      var isPrevExponential = isExponential;
      isExponential = false;
      var currentChar = charSequenceGet(s, currentIndex);
      var tmp0_subject = currentChar;
      if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44))))
        foundSeparator = true;
      else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(45)))) {
        if (!(currentIndex === start) ? !isPrevExponential : false) {
          foundSeparator = true;
          result.endWithNegativeOrDot_1 = true;
        }
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(46))))
        if (!secondDot) {
          secondDot = true;
        } else {
          foundSeparator = true;
          result.endWithNegativeOrDot_1 = true;
        }
       else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(101))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(69))))
        isExponential = true;
      if (foundSeparator) {
        break $l$loop;
      }
      var tmp1 = currentIndex;
      currentIndex = tmp1 + 1 | 0;
    }
    result.endPosition_1 = currentIndex;
  }
  function ExtractFloatResult(endPosition, endWithNegativeOrDot) {
    this.endPosition_1 = endPosition;
    this.endWithNegativeOrDot_1 = endWithNegativeOrDot;
  }
  ExtractFloatResult.prototype.set_endPosition_rxwqyf_k$ = function (_set____db54di) {
    this.endPosition_1 = _set____db54di;
  };
  ExtractFloatResult.prototype.get_endPosition_u5xob_k$ = function () {
    return this.endPosition_1;
  };
  ExtractFloatResult.prototype.set_endWithNegativeOrDot_kat1jw_k$ = function (_set____db54di) {
    this.endWithNegativeOrDot_1 = _set____db54di;
  };
  ExtractFloatResult.prototype.get_endWithNegativeOrDot_k8f5x5_k$ = function () {
    return this.endWithNegativeOrDot_1;
  };
  ExtractFloatResult.prototype.component1_7eebsc_k$ = function () {
    return this.endPosition_1;
  };
  ExtractFloatResult.prototype.component2_7eebsb_k$ = function () {
    return this.endWithNegativeOrDot_1;
  };
  ExtractFloatResult.prototype.copy_fat0zy_k$ = function (endPosition, endWithNegativeOrDot) {
    return new ExtractFloatResult(endPosition, endWithNegativeOrDot);
  };
  ExtractFloatResult.prototype.copy$default_53wjnt_k$ = function (endPosition, endWithNegativeOrDot, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      endPosition = this.endPosition_1;
    if (!(($mask0 & 2) === 0))
      endWithNegativeOrDot = this.endWithNegativeOrDot_1;
    return this.copy_fat0zy_k$(endPosition, endWithNegativeOrDot);
  };
  ExtractFloatResult.prototype.toString = function () {
    return 'ExtractFloatResult(endPosition=' + this.endPosition_1 + ', endWithNegativeOrDot=' + this.endWithNegativeOrDot_1 + ')';
  };
  ExtractFloatResult.prototype.hashCode = function () {
    var result = this.endPosition_1;
    result = imul(result, 31) + (this.endWithNegativeOrDot_1 | 0) | 0;
    return result;
  };
  ExtractFloatResult.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ExtractFloatResult))
      return false;
    var tmp0_other_with_cast = other instanceof ExtractFloatResult ? other : THROW_CCE();
    if (!(this.endPosition_1 === tmp0_other_with_cast.endPosition_1))
      return false;
    if (!(this.endWithNegativeOrDot_1 === tmp0_other_with_cast.endWithNegativeOrDot_1))
      return false;
    return true;
  };
  ExtractFloatResult.$metadata$ = classMeta('ExtractFloatResult');
  function toRadians(_this__u8e3s4, $this) {
    return _this__u8e3s4 / 180.0 * get_PI();
  }
  function toRadians_0(_this__u8e3s4, $this) {
    return _this__u8e3s4 / 180 * get_PI();
  }
  function PathParser() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.nodes_1 = tmp$ret$0;
    var tmp_0 = this;
    tmp_0.currentPoint_1 = PathPoint_init_$Create$(0.0, 0.0, 3, null);
    var tmp_1 = this;
    tmp_1.ctrlPoint_1 = PathPoint_init_$Create$(0.0, 0.0, 3, null);
    var tmp_2 = this;
    tmp_2.segmentPoint_1 = PathPoint_init_$Create$(0.0, 0.0, 3, null);
    var tmp_3 = this;
    tmp_3.reflectiveCtrlPoint_1 = PathPoint_init_$Create$(0.0, 0.0, 3, null);
  }
  PathParser.prototype.clear_j9y8zo_k$ = function () {
    this.nodes_1.clear_j9y8zo_k$();
  };
  PathParser.prototype.parsePathString_obiteg_k$ = function (pathData) {
    this.nodes_1.clear_j9y8zo_k$();
    var start = 0;
    var end = 1;
    while (end < pathData.length) {
      end = nextStart(this, pathData, end);
      var tmp$ret$4;
      // Inline function 'kotlin.text.trim' call
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = start;
      var tmp1_substring = end;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = pathData;
      tmp$ret$1 = tmp$ret$0.substring(tmp0_substring, tmp1_substring);
      var tmp2_trim = tmp$ret$1;
      var tmp$ret$3;
      // Inline function 'kotlin.text.trim' call
      var tmp0_trim = isCharSequence(tmp2_trim) ? tmp2_trim : THROW_CCE();
      var startIndex = 0;
      var endIndex = charSequenceLength(tmp0_trim) - 1 | 0;
      var startFound = false;
      $l$loop: while (startIndex <= endIndex) {
        var index = !startFound ? startIndex : endIndex;
        var tmp$ret$2;
        // Inline function 'androidx.compose.ui.graphics.vector.PathParser.parsePathString.<anonymous>' call
        var tmp3__anonymous__ufb84q = charSequenceGet(tmp0_trim, index);
        tmp$ret$2 = Char__compareTo_impl_ypi4mb(tmp3__anonymous__ufb84q, _Char___init__impl__6a9atx(32)) <= 0;
        var match = tmp$ret$2;
        if (!startFound) {
          if (!match)
            startFound = true;
          else
            startIndex = startIndex + 1 | 0;
        } else {
          if (!match)
            break $l$loop;
          else
            endIndex = endIndex - 1 | 0;
        }
      }
      tmp$ret$3 = charSequenceSubSequence(tmp0_trim, startIndex, endIndex + 1 | 0);
      tmp$ret$4 = toString(tmp$ret$3);
      var s = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.text.isNotEmpty' call
      tmp$ret$5 = charSequenceLength(s) > 0;
      if (tmp$ret$5) {
        var args = getFloats(this, s);
        addNode_0(this, charSequenceGet(s, 0), args);
      }
      start = end;
      var tmp0 = end;
      end = tmp0 + 1 | 0;
    }
    if ((end - start | 0) === 1 ? start < pathData.length : false) {
      addNode_0(this, charSequenceGet(pathData, start), new Float32Array(0));
    }
    return this;
  };
  PathParser.prototype.addPathNodes_kbkq3a_k$ = function (nodes) {
    this.nodes_1.addAll_oxxjjk_k$(nodes);
    return this;
  };
  PathParser.prototype.toNodes_jcvf9m_k$ = function () {
    return this.nodes_1;
  };
  PathParser.prototype.toPath_uv3z80_k$ = function (target) {
    target.reset_5tn5dq_k$();
    this.currentPoint_1.reset_5tn5dq_k$();
    this.ctrlPoint_1.reset_5tn5dq_k$();
    this.segmentPoint_1.reset_5tn5dq_k$();
    this.reflectiveCtrlPoint_1.reset_5tn5dq_k$();
    var previousNode = null;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var tmp0_fastForEach = this.nodes_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.get_fkrdnv_k$(index);
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
                                relativeReflectiveCurveTo(item, this, ensureNotNull(previousNode).isCurve_1, target);
                              } else {
                                if (tmp0_subject instanceof ReflectiveCurveTo) {
                                  reflectiveCurveTo(item, this, ensureNotNull(previousNode).isCurve_1, target);
                                } else {
                                  if (tmp0_subject instanceof RelativeQuadTo) {
                                    relativeQuadTo(item, this, target);
                                  } else {
                                    if (tmp0_subject instanceof QuadTo) {
                                      quadTo(item, this, target);
                                    } else {
                                      if (tmp0_subject instanceof RelativeReflectiveQuadTo) {
                                        relativeReflectiveQuadTo(item, this, ensureNotNull(previousNode).isQuad_1, target);
                                      } else {
                                        if (tmp0_subject instanceof ReflectiveQuadTo) {
                                          reflectiveQuadTo(item, this, ensureNotNull(previousNode).isQuad_1, target);
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
  PathParser.prototype.toPath$default_5k1epc_k$ = function (target, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      target = Path_0();
    return this.toPath_uv3z80_k$(target);
  };
  PathParser.$metadata$ = classMeta('PathParser');
  function putBytesInto(_this__u8e3s4, array, offset, length) {
    throw new NotImplementedError('An operation is not implemented: implement js ByteArray.putBytesInto()');
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
    return '@androidx.compose.ui.graphics.internal.NoOp()';
  };
  NoOp.$metadata$ = classMeta('NoOp', [Annotation]);
  function toSkia(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_14().Clear_1 ? BlendMode_CLEAR_getInstance() : tmp0_subject === Companion_getInstance_14().Src_1 ? BlendMode_SRC_getInstance() : tmp0_subject === Companion_getInstance_14().Dst_1 ? BlendMode_DST_getInstance() : tmp0_subject === Companion_getInstance_14().SrcOver_1 ? BlendMode_SRC_OVER_getInstance() : tmp0_subject === Companion_getInstance_14().DstOver_1 ? BlendMode_DST_OVER_getInstance() : tmp0_subject === Companion_getInstance_14().SrcIn_1 ? BlendMode_SRC_IN_getInstance() : tmp0_subject === Companion_getInstance_14().DstIn_1 ? BlendMode_DST_IN_getInstance() : tmp0_subject === Companion_getInstance_14().SrcOut_1 ? BlendMode_SRC_OUT_getInstance() : tmp0_subject === Companion_getInstance_14().DstOut_1 ? BlendMode_DST_OUT_getInstance() : tmp0_subject === Companion_getInstance_14().SrcAtop_1 ? BlendMode_SRC_ATOP_getInstance() : tmp0_subject === Companion_getInstance_14().DstAtop_1 ? BlendMode_DST_ATOP_getInstance() : tmp0_subject === Companion_getInstance_14().Xor_1 ? BlendMode_XOR_getInstance() : tmp0_subject === Companion_getInstance_14().Plus_1 ? BlendMode_PLUS_getInstance() : tmp0_subject === Companion_getInstance_14().Modulate_1 ? BlendMode_MODULATE_getInstance() : tmp0_subject === Companion_getInstance_14().Screen_1 ? BlendMode_SCREEN_getInstance() : tmp0_subject === Companion_getInstance_14().Overlay_1 ? BlendMode_OVERLAY_getInstance() : tmp0_subject === Companion_getInstance_14().Darken_1 ? BlendMode_DARKEN_getInstance() : tmp0_subject === Companion_getInstance_14().Lighten_1 ? BlendMode_LIGHTEN_getInstance() : tmp0_subject === Companion_getInstance_14().ColorDodge_1 ? BlendMode_COLOR_DODGE_getInstance() : tmp0_subject === Companion_getInstance_14().ColorBurn_1 ? BlendMode_COLOR_BURN_getInstance() : tmp0_subject === Companion_getInstance_14().Hardlight_1 ? BlendMode_HARD_LIGHT_getInstance() : tmp0_subject === Companion_getInstance_14().Softlight_1 ? BlendMode_SOFT_LIGHT_getInstance() : tmp0_subject === Companion_getInstance_14().Difference_1 ? BlendMode_DIFFERENCE_getInstance() : tmp0_subject === Companion_getInstance_14().Exclusion_1 ? BlendMode_EXCLUSION_getInstance() : tmp0_subject === Companion_getInstance_14().Multiply_1 ? BlendMode_MULTIPLY_getInstance() : tmp0_subject === Companion_getInstance_14().Hue_1 ? BlendMode_HUE_getInstance() : tmp0_subject === Companion_getInstance_14().Saturation_1 ? BlendMode_SATURATION_getInstance() : tmp0_subject === Companion_getInstance_14().Color_1 ? BlendMode_COLOR_getInstance() : tmp0_subject === Companion_getInstance_14().Luminosity_1 ? BlendMode_LUMINOSITY_getInstance() : BlendMode_SRC_OVER_getInstance();
  }
  function identityMatrix33() {
    return new Matrix33(new Float32Array([1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0]));
  }
  function toSkiaRect(_this__u8e3s4) {
    return Companion_getInstance_3().makeLTRB_ax757q_k$(_this__u8e3s4.left_1, _this__u8e3s4.top_1, _this__u8e3s4.right_1, _this__u8e3s4.bottom_1);
  }
  function toSkiaRRect(_this__u8e3s4) {
    var radii = new Float32Array(8);
    radii[0] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.topLeftCornerRadius_1);
    radii[1] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.topLeftCornerRadius_1);
    radii[2] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.topRightCornerRadius_1);
    radii[3] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.topRightCornerRadius_1);
    radii[4] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.bottomRightCornerRadius_1);
    radii[5] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.bottomRightCornerRadius_1);
    radii[6] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.bottomLeftCornerRadius_1);
    radii[7] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.bottomLeftCornerRadius_1);
    return Companion_getInstance_4().makeComplexLTRB_r9qn2z_k$(_this__u8e3s4.left_1, _this__u8e3s4.top_1, _this__u8e3s4.right_1, _this__u8e3s4.bottom_1, radii);
  }
  function toComposeRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.left_1, _this__u8e3s4.top_1, _this__u8e3s4.right_1, _this__u8e3s4.bottom_1);
  }
  function asComposeCanvas(_this__u8e3s4) {
    return new SkiaBackedCanvas(_this__u8e3s4);
  }
  function get_nativeCanvas(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).skia_1;
  }
  function _get_skia__ddpejf(_this__u8e3s4, $this) {
    return (_this__u8e3s4 instanceof SkiaBackedPaint ? _this__u8e3s4 : THROW_CCE()).skia_1;
  }
  function drawImageRect($this, image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    var bitmap = asSkiaBitmap(image);
    var tmp$ret$1;
    // Inline function 'org.jetbrains.skia.impl.use' call
    var tmp0_use = Companion_getInstance_5().makeFromBitmap_yu8eml_k$(bitmap);
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.drawImageRect.<anonymous>' call
      tmp$ret$0 = $this.skia_1.drawImageRect_cpr7cg_k$(tmp0_use, Companion_getInstance_3().makeXYWH_bits74_k$(_Offset___get_x__impl__xvi35n(srcOffset), _Offset___get_y__impl__8bzhra(srcOffset), _Size___get_width__impl__58y75t(srcSize), _Size___get_height__impl__a04p02(srcSize)), Companion_getInstance_3().makeXYWH_bits74_k$(_Offset___get_x__impl__xvi35n(dstOffset), _Offset___get_y__impl__8bzhra(dstOffset), _Size___get_width__impl__58y75t(dstSize), _Size___get_height__impl__a04p02(dstSize)), toSkia_2(paint.get_filterQuality_2xbue9_k$(), $this), _get_skia__ddpejf(paint, $this), true);
      tmp = tmp$ret$0;
    }finally {
      tmp0_use.close_ymq55z_k$();
    }
    tmp$ret$1 = tmp;
  }
  function drawPoints($this, points, paint) {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = points.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = points.get_fkrdnv_k$(index).packedValue_1;
        // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.drawPoints.<anonymous>' call
        $this.skia_1.drawPoint_1b3djp_k$(_Offset___get_x__impl__xvi35n(item), _Offset___get_y__impl__8bzhra(item), _get_skia__ddpejf(paint, $this));
      }
       while (inductionVariable <= last);
  }
  function drawLines($this, points, paint, stepBy) {
    if (points.get_size_woubt6_k$() >= 2) {
      var progression = step(until(0, points.get_size_woubt6_k$() - 1 | 0), stepBy);
      var inductionVariable = progression.first_1;
      var last = progression.last_1;
      var step_0 = progression.step_1;
      if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + step_0 | 0;
          var p1 = points.get_fkrdnv_k$(i).packedValue_1;
          var p2 = points.get_fkrdnv_k$(i + 1 | 0).packedValue_1;
          $this.skia_1.drawLine_t27q09_k$(_Offset___get_x__impl__xvi35n(p1), _Offset___get_y__impl__8bzhra(p1), _Offset___get_x__impl__xvi35n(p2), _Offset___get_y__impl__8bzhra(p2), _get_skia__ddpejf(paint, $this));
        }
         while (!(i === last));
    }
  }
  function drawRawPoints($this, points, paint, stepBy) {
    if ((points.length % 2 | 0) === 0) {
      var progression = step(until(0, points.length - 1 | 0), stepBy);
      var inductionVariable = progression.first_1;
      var last = progression.last_1;
      var step_0 = progression.step_1;
      if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + step_0 | 0;
          var x = points[i];
          var y = points[i + 1 | 0];
          $this.skia_1.drawPoint_1b3djp_k$(x, y, _get_skia__ddpejf(paint, $this));
        }
         while (!(i === last));
    }
  }
  function drawRawLines($this, points, paint, stepBy) {
    if (points.length >= 4 ? (points.length % 2 | 0) === 0 : false) {
      var progression = step(until(0, points.length - 3 | 0), imul(stepBy, 2));
      var inductionVariable = progression.first_1;
      var last = progression.last_1;
      var step_0 = progression.step_1;
      if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + step_0 | 0;
          var x1 = points[i];
          var y1 = points[i + 1 | 0];
          var x2 = points[i + 2 | 0];
          var y2 = points[i + 3 | 0];
          $this.skia_1.drawLine_t27q09_k$(x1, y1, x2, y2, _get_skia__ddpejf(paint, $this));
        }
         while (!(i === last));
    }
  }
  function toSkia_0(_this__u8e3s4, $this) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_16().Difference_1 ? ClipMode_DIFFERENCE_getInstance() : tmp0_subject === Companion_getInstance_16().Intersect_1 ? ClipMode_INTERSECT_getInstance() : ClipMode_INTERSECT_getInstance();
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
    return tmp0_subject === Companion_getInstance_19().Low_1 ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NONE_getInstance()) : tmp0_subject === Companion_getInstance_19().Medium_1 ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NEAREST_getInstance()) : tmp0_subject === Companion_getInstance_19().High_1 ? new CubicResampler(1 / 3.0, 1 / 3.0) : new FilterMipmap(FilterMode_NEAREST_getInstance(), MipmapMode_NONE_getInstance());
  }
  function SkiaBackedCanvas(skia) {
    this.skia_1 = skia;
  }
  SkiaBackedCanvas.prototype.get_skia_woucvt_k$ = function () {
    return this.skia_1;
  };
  SkiaBackedCanvas.prototype.save_erlm4_k$ = function () {
    this.skia_1.save_23ibh_k$();
  };
  SkiaBackedCanvas.prototype.restore_a2id37_k$ = function () {
    this.skia_1.restore_i5fnny_k$();
  };
  SkiaBackedCanvas.prototype.saveLayer_f9ux7q_k$ = function (bounds, paint) {
    this.skia_1.saveLayer_dsxx8u_k$(bounds.left_1, bounds.top_1, bounds.right_1, bounds.bottom_1, _get_skia__ddpejf(paint, this));
  };
  SkiaBackedCanvas.prototype.translate_62wf99_k$ = function (dx, dy) {
    this.skia_1.translate_y4aglq_k$(dx, dy);
  };
  SkiaBackedCanvas.prototype.scale_sphyvb_k$ = function (sx, sy) {
    this.skia_1.scale_6iftdi_k$(sx, sy);
  };
  SkiaBackedCanvas.prototype.rotate_ypq2w2_k$ = function (degrees) {
    this.skia_1.rotate_aghjf1_k$(degrees);
  };
  SkiaBackedCanvas.prototype.skew_hcshkp_k$ = function (sx, sy) {
    this.skia_1.skew_r8bu0m_k$(sx, sy);
  };
  SkiaBackedCanvas.prototype.concat_oxfhdd_k$ = function (matrix) {
    if (!isIdentity(matrix)) {
      this.skia_1.concat_f2glzm_k$(toSkia_1(matrix, this));
    }
  };
  SkiaBackedCanvas.prototype.clipRect_si0ig1_k$ = function (left, top, right, bottom, clipOp) {
    var antiAlias = true;
    this.skia_1.clipRect_9zlxw5_k$(Companion_getInstance_3().makeLTRB_ax757q_k$(left, top, right, bottom), toSkia_0(clipOp, this), antiAlias);
  };
  SkiaBackedCanvas.prototype.clipPath_kn87dc_k$ = function (path, clipOp) {
    var antiAlias = true;
    this.skia_1.clipPath_yggl5f_k$(asSkiaPath(path), toSkia_0(clipOp, this), antiAlias);
  };
  SkiaBackedCanvas.prototype.drawLine_uyv0nw_k$ = function (p1, p2, paint) {
    this.skia_1.drawLine_t27q09_k$(_Offset___get_x__impl__xvi35n(p1), _Offset___get_y__impl__8bzhra(p1), _Offset___get_x__impl__xvi35n(p2), _Offset___get_y__impl__8bzhra(p2), _get_skia__ddpejf(paint, this));
  };
  SkiaBackedCanvas.prototype.drawRect_iwqaze_k$ = function (left, top, right, bottom, paint) {
    this.skia_1.drawRect_svy35k_k$(Companion_getInstance_3().makeLTRB_ax757q_k$(left, top, right, bottom), _get_skia__ddpejf(paint, this));
  };
  SkiaBackedCanvas.prototype.drawRoundRect_8v0cs4_k$ = function (left, top, right, bottom, radiusX, radiusY, paint) {
    this.skia_1.drawRRect_i1m3a2_k$(Companion_getInstance_4().makeLTRB_o5673a_k$(left, top, right, bottom, radiusX, radiusY), _get_skia__ddpejf(paint, this));
  };
  SkiaBackedCanvas.prototype.drawOval_wmf8q4_k$ = function (left, top, right, bottom, paint) {
    this.skia_1.drawOval_k4zfhy_k$(Companion_getInstance_3().makeLTRB_ax757q_k$(left, top, right, bottom), _get_skia__ddpejf(paint, this));
  };
  SkiaBackedCanvas.prototype.drawCircle_8yzxtr_k$ = function (center, radius, paint) {
    this.skia_1.drawCircle_on0wlj_k$(_Offset___get_x__impl__xvi35n(center), _Offset___get_y__impl__8bzhra(center), radius, _get_skia__ddpejf(paint, this));
  };
  SkiaBackedCanvas.prototype.drawArc_xj6sd2_k$ = function (left, top, right, bottom, startAngle, sweepAngle, useCenter, paint) {
    this.skia_1.drawArc_hhkfpn_k$(left, top, right, bottom, startAngle, sweepAngle, useCenter, _get_skia__ddpejf(paint, this));
  };
  SkiaBackedCanvas.prototype.drawPath_843lu1_k$ = function (path, paint) {
    this.skia_1.drawPath_qvim9i_k$(asSkiaPath(path), _get_skia__ddpejf(paint, this));
  };
  SkiaBackedCanvas.prototype.drawImage_wbfair_k$ = function (image, topLeftOffset, paint) {
    var size = Size(image.get_width_j0q4yl_k$(), image.get_height_e7t92o_k$());
    drawImageRect(this, image, Companion_getInstance().Zero_1, size, topLeftOffset, size, paint);
  };
  SkiaBackedCanvas.prototype.drawImageRect_pn8joi_k$ = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    drawImageRect(this, image, Offset(_IntOffset___get_x__impl__qiqr5o(srcOffset), _IntOffset___get_y__impl__2avpwj(srcOffset)), Size(_IntSize___get_width__impl__d9yl4o(srcSize), _IntSize___get_height__impl__prv63b(srcSize)), Offset(_IntOffset___get_x__impl__qiqr5o(dstOffset), _IntOffset___get_y__impl__2avpwj(dstOffset)), Size(_IntSize___get_width__impl__d9yl4o(dstSize), _IntSize___get_height__impl__prv63b(dstSize)), paint);
  };
  SkiaBackedCanvas.prototype.drawPoints_7nk41w_k$ = function (pointMode, points, paint) {
    var tmp0_subject = pointMode;
    if (tmp0_subject === Companion_getInstance_30().Lines_1) {
      drawLines(this, points, paint, 2);
    } else if (tmp0_subject === Companion_getInstance_30().Polygon_1) {
      drawLines(this, points, paint, 1);
    } else if (tmp0_subject === Companion_getInstance_30().Points_1) {
      drawPoints(this, points, paint);
    }
  };
  SkiaBackedCanvas.prototype.enableZ_eyv21m_k$ = function () {
    return Unit_getInstance();
  };
  SkiaBackedCanvas.prototype.disableZ_14frxd_k$ = function () {
    return Unit_getInstance();
  };
  SkiaBackedCanvas.prototype.drawRawPoints_xnm1nu_k$ = function (pointMode, points, paint) {
    if (!((points.length % 2 | 0) === 0)) {
      throw IllegalArgumentException_init_$Create$('points must have an even number of values');
    }
    var tmp0_subject = pointMode;
    if (tmp0_subject === Companion_getInstance_30().Lines_1) {
      drawRawLines(this, points, paint, 2);
    } else if (tmp0_subject === Companion_getInstance_30().Polygon_1) {
      drawRawLines(this, points, paint, 1);
    } else if (tmp0_subject === Companion_getInstance_30().Points_1) {
      drawRawPoints(this, points, paint, 2);
    }
  };
  SkiaBackedCanvas.prototype.drawVertices_blo9xi_k$ = function (vertices, blendMode, paint) {
    this.skia_1.drawVertices_5fhilh_k$(toSkiaVertexMode(vertices.vertexMode_1), vertices.positions_1, vertices.colors_1, vertices.textureCoordinates_1, vertices.indices_1, toSkia(blendMode), paint.asFrameworkPaint_huz48e_k$());
  };
  SkiaBackedCanvas.$metadata$ = classMeta('SkiaBackedCanvas', [Canvas]);
  function ActualCanvas(image) {
    var skiaBitmap = asSkiaBitmap(image);
    // Inline function 'kotlin.require' call
    var tmp0_require = !skiaBitmap.get_isImmutable_b8i701_k$();
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
    return tmp0_subject === Companion_getInstance_24().Fill_1 ? PaintMode_FILL_getInstance() : tmp0_subject === Companion_getInstance_24().Stroke_1 ? PaintMode_STROKE_getInstance() : PaintMode_FILL_getInstance();
  }
  function toSkia_4(_this__u8e3s4, $this) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_32().Butt_1 ? PaintStrokeCap_BUTT_getInstance() : tmp0_subject === Companion_getInstance_32().Round_1 ? PaintStrokeCap_ROUND_getInstance() : tmp0_subject === Companion_getInstance_32().Square_1 ? PaintStrokeCap_SQUARE_getInstance() : PaintStrokeCap_BUTT_getInstance();
  }
  function toSkia_5(_this__u8e3s4, $this) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_33().Miter_1 ? PaintStrokeJoin_MITER_getInstance() : tmp0_subject === Companion_getInstance_33().Round_1 ? PaintStrokeJoin_ROUND_getInstance() : tmp0_subject === Companion_getInstance_33().Bevel_1 ? PaintStrokeJoin_BEVEL_getInstance() : PaintStrokeJoin_MITER_getInstance();
  }
  function SkiaBackedPaint(skia) {
    this.skia_1 = skia;
    this.blendMode_1 = Companion_getInstance_14().SrcOver_1;
    this.style_1 = Companion_getInstance_24().Fill_1;
    this.strokeCap_1 = Companion_getInstance_32().Butt_1;
    this.strokeJoin_1 = Companion_getInstance_33().Round_1;
    this.strokeMiterLimit_1 = 0.0;
    this.filterQuality_1 = Companion_getInstance_19().Medium_1;
    this.shader_1 = null;
    this.colorFilter_1 = null;
    this.pathEffect_1 = null;
  }
  SkiaBackedPaint.prototype.get_skia_woucvt_k$ = function () {
    return this.skia_1;
  };
  SkiaBackedPaint.prototype.asFrameworkPaint_huz48e_k$ = function () {
    return this.skia_1;
  };
  SkiaBackedPaint.prototype.set_alpha_k1tx50_k$ = function (value) {
    var tmp = Color_3(this.skia_1.get_color_ipu8u2_k$());
    this.skia_1.set_color_n2ch1y_k$(toArgb(Color__copy$default_impl_ectz3s(tmp, value, 0.0, 0.0, 0.0, 14, null)));
  };
  SkiaBackedPaint.prototype.get_alpha_iooth1_k$ = function () {
    return _Color___get_alpha__impl__wcfyv1(Color_3(this.skia_1.get_color_ipu8u2_k$()));
  };
  SkiaBackedPaint.prototype.set_isAntiAlias_1h4ndu_k$ = function (value) {
    this.skia_1.set_isAntiAlias_1h4ndu_k$(value);
  };
  SkiaBackedPaint.prototype.get_isAntiAlias_255n51_k$ = function () {
    return this.skia_1.get_isAntiAlias_255n51_k$();
  };
  SkiaBackedPaint.prototype.set_color_b5evhd_k$ = function (color) {
    this.skia_1.set_color_n2ch1y_k$(toArgb(color));
  };
  SkiaBackedPaint.prototype.get_color_v34vrz_k$ = function () {
    return Color_3(this.skia_1.get_color_ipu8u2_k$());
  };
  SkiaBackedPaint.prototype.set_blendMode_gchh35_k$ = function (value) {
    this.skia_1.set_blendMode_2o4s1d_k$(toSkia(value));
    this.blendMode_1 = value;
  };
  SkiaBackedPaint.prototype.get_blendMode_m8dzwh_k$ = function () {
    return this.blendMode_1;
  };
  SkiaBackedPaint.prototype.set_style_yrvwzh_k$ = function (value) {
    this.skia_1.set_mode_2kzbql_k$(toSkia_3(value, this));
    this.style_1 = value;
  };
  SkiaBackedPaint.prototype.get_style_cnsirn_k$ = function () {
    return this.style_1;
  };
  SkiaBackedPaint.prototype.set_strokeWidth_3zju8k_k$ = function (value) {
    this.skia_1.set_strokeWidth_3zju8k_k$(value);
  };
  SkiaBackedPaint.prototype.get_strokeWidth_pbded7_k$ = function () {
    return this.skia_1.get_strokeWidth_pbded7_k$();
  };
  SkiaBackedPaint.prototype.set_strokeCap_un0ni9_k$ = function (value) {
    this.skia_1.set_strokeCap_awr7nf_k$(toSkia_4(value, this));
    this.strokeCap_1 = value;
  };
  SkiaBackedPaint.prototype.get_strokeCap_du2v9b_k$ = function () {
    return this.strokeCap_1;
  };
  SkiaBackedPaint.prototype.set_strokeJoin_oa46bf_k$ = function (value) {
    this.skia_1.set_strokeJoin_earh59_k$(toSkia_5(value, this));
    this.strokeJoin_1 = value;
  };
  SkiaBackedPaint.prototype.get_strokeJoin_t4v9w5_k$ = function () {
    return this.strokeJoin_1;
  };
  SkiaBackedPaint.prototype.set_strokeMiterLimit_jliqsy_k$ = function (value) {
    this.skia_1.set_strokeMiter_9aj8vn_k$(value);
    this.strokeMiterLimit_1 = value;
  };
  SkiaBackedPaint.prototype.get_strokeMiterLimit_p3434n_k$ = function () {
    return this.strokeMiterLimit_1;
  };
  SkiaBackedPaint.prototype.set_filterQuality_8e157j_k$ = function (_set____db54di) {
    this.filterQuality_1 = _set____db54di;
  };
  SkiaBackedPaint.prototype.get_filterQuality_2xbue9_k$ = function () {
    return this.filterQuality_1;
  };
  SkiaBackedPaint.prototype.set_shader_bd5o0m_k$ = function (value) {
    this.skia_1.set_shader_bd5o0m_k$(value);
    this.shader_1 = value;
  };
  SkiaBackedPaint.prototype.get_shader_jgtazy_k$ = function () {
    return this.shader_1;
  };
  SkiaBackedPaint.prototype.set_colorFilter_l1l4p0_k$ = function (value) {
    var tmp0_safe_receiver = value;
    this.skia_1.set_colorFilter_t69fte_k$(tmp0_safe_receiver == null ? null : asSkiaColorFilter(tmp0_safe_receiver));
    this.colorFilter_1 = value;
  };
  SkiaBackedPaint.prototype.get_colorFilter_nt8pqq_k$ = function () {
    return this.colorFilter_1;
  };
  SkiaBackedPaint.prototype.set_pathEffect_eo4nwm_k$ = function (value) {
    var tmp0_safe_receiver = (value == null ? true : value instanceof SkiaBackedPathEffect) ? value : THROW_CCE();
    this.skia_1.set_pathEffect_5avi6g_k$(tmp0_safe_receiver == null ? null : asSkiaPathEffect(tmp0_safe_receiver));
    this.pathEffect_1 = value;
  };
  SkiaBackedPaint.prototype.get_pathEffect_d6tz6p_k$ = function () {
    return this.pathEffect_1;
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
  function _set_internalPath__a4co45($this, _set____db54di) {
    $this.internalPath_1 = _set____db54di;
  }
  function toSkiaOperation(_this__u8e3s4, $this) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_29().Difference_1 ? PathOp_DIFFERENCE_getInstance() : tmp0_subject === Companion_getInstance_29().Intersect_1 ? PathOp_INTERSECT_getInstance() : tmp0_subject === Companion_getInstance_29().Union_1 ? PathOp_UNION_getInstance() : tmp0_subject === Companion_getInstance_29().Xor_1 ? PathOp_XOR_getInstance() : tmp0_subject === Companion_getInstance_29().ReverseDifference_1 ? PathOp_REVERSE_DIFFERENCE_getInstance() : PathOp_XOR_getInstance();
  }
  function SkiaBackedPath(internalPath) {
    this.internalPath_1 = internalPath;
  }
  SkiaBackedPath.prototype.get_internalPath_37vr9n_k$ = function () {
    return this.internalPath_1;
  };
  SkiaBackedPath.prototype.set_fillType_288nii_k$ = function (value) {
    var tmp = this.internalPath_1;
    var tmp_0;
    if (value === Companion_getInstance_28().EvenOdd_1) {
      tmp_0 = PathFillMode_EVEN_ODD_getInstance();
    } else {
      tmp_0 = PathFillMode_WINDING_getInstance();
    }
    tmp.set_fillMode_dzxls6_k$(tmp_0);
  };
  SkiaBackedPath.prototype.get_fillType_qtoiy8_k$ = function () {
    if (this.internalPath_1.get_fillMode_r5zfyn_k$().equals(PathFillMode_EVEN_ODD_getInstance())) {
      return Companion_getInstance_28().EvenOdd_1;
    } else {
      return Companion_getInstance_28().NonZero_1;
    }
  };
  SkiaBackedPath.prototype.moveTo_ga4oez_k$ = function (x, y) {
    this.internalPath_1.moveTo_5934es_k$(x, y);
  };
  SkiaBackedPath.prototype.relativeMoveTo_4j9kzr_k$ = function (dx, dy) {
    this.internalPath_1.rMoveTo_44r2iq_k$(dx, dy);
  };
  SkiaBackedPath.prototype.lineTo_w9kq4e_k$ = function (x, y) {
    this.internalPath_1.lineTo_8bd4s1_k$(x, y);
  };
  SkiaBackedPath.prototype.relativeLineTo_kipmp6_k$ = function (dx, dy) {
    this.internalPath_1.rLineTo_7712vz_k$(dx, dy);
  };
  SkiaBackedPath.prototype.quadraticBezierTo_t2qfc1_k$ = function (x1, y1, x2, y2) {
    this.internalPath_1.quadTo_qnlly6_k$(x1, y1, x2, y2);
  };
  SkiaBackedPath.prototype.relativeQuadraticBezierTo_z1apmz_k$ = function (dx1, dy1, dx2, dy2) {
    this.internalPath_1.rQuadTo_vz8b04_k$(dx1, dy1, dx2, dy2);
  };
  SkiaBackedPath.prototype.cubicTo_1m51n8_k$ = function (x1, y1, x2, y2, x3, y3) {
    this.internalPath_1.cubicTo_tf08o5_k$(x1, y1, x2, y2, x3, y3);
  };
  SkiaBackedPath.prototype.relativeCubicTo_a0rn6w_k$ = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    this.internalPath_1.rCubicTo_uljamr_k$(dx1, dy1, dx2, dy2, dx3, dy3);
  };
  SkiaBackedPath.prototype.arcTo_948klo_k$ = function (rect, startAngleDegrees, sweepAngleDegrees, forceMoveTo) {
    this.internalPath_1.arcTo_ecvj8s_k$(toSkiaRect(rect), startAngleDegrees, sweepAngleDegrees, forceMoveTo);
  };
  SkiaBackedPath.prototype.addRect_xu2nic_k$ = function (rect) {
    var tmp = this.internalPath_1;
    var tmp_0 = toSkiaRect(rect);
    var tmp_1 = PathDirection_COUNTER_CLOCKWISE_getInstance();
    tmp.addRect$default_rgvch2_k$(tmp_0, tmp_1, 0, 4, null);
  };
  SkiaBackedPath.prototype.addOval_91jhpm_k$ = function (oval) {
    var tmp = this.internalPath_1;
    var tmp_0 = toSkiaRect(oval);
    var tmp_1 = PathDirection_COUNTER_CLOCKWISE_getInstance();
    tmp.addOval$default_22wyfo_k$(tmp_0, tmp_1, 0, 4, null);
  };
  SkiaBackedPath.prototype.addArcRad_jcx1ob_k$ = function (oval, startAngleRadians, sweepAngleRadians) {
    this.addArc_p7ur08_k$(oval, degrees(startAngleRadians), degrees(sweepAngleRadians));
  };
  SkiaBackedPath.prototype.addArc_p7ur08_k$ = function (oval, startAngleDegrees, sweepAngleDegrees) {
    this.internalPath_1.addArc_vnodq_k$(toSkiaRect(oval), startAngleDegrees, sweepAngleDegrees);
  };
  SkiaBackedPath.prototype.addRoundRect_kr3fpw_k$ = function (roundRect) {
    var tmp = this.internalPath_1;
    var tmp_0 = toSkiaRRect(roundRect);
    var tmp_1 = PathDirection_COUNTER_CLOCKWISE_getInstance();
    tmp.addRRect$default_pcyjai_k$(tmp_0, tmp_1, 0, 4, null);
  };
  SkiaBackedPath.prototype.addPath_9947vg_k$ = function (path, offset) {
    var tmp = this.internalPath_1;
    var tmp_0 = asSkiaPath(path);
    var tmp_1 = _Offset___get_x__impl__xvi35n(offset);
    var tmp_2 = _Offset___get_y__impl__8bzhra(offset);
    tmp.addPath$default_jehum6_k$(tmp_0, tmp_1, tmp_2, false, 8, null);
  };
  SkiaBackedPath.prototype.close_ymq55z_k$ = function () {
    this.internalPath_1.closePath_7zbz5v_k$();
  };
  SkiaBackedPath.prototype.reset_5tn5dq_k$ = function () {
    var fillType = this.get_fillType_qtoiy8_k$();
    this.internalPath_1.reset_1sjh3j_k$();
    this.set_fillType_288nii_k$(fillType);
  };
  SkiaBackedPath.prototype.translate_mdejcc_k$ = function (offset) {
    var tmp = this.internalPath_1;
    var tmp_0 = Companion_getInstance_6().makeTranslate_bkaev4_k$(_Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset));
    tmp.transform$default_9i06se_k$(tmp_0, null, false, 6, null);
  };
  SkiaBackedPath.prototype.getBounds_568lnv_k$ = function () {
    var bounds = this.internalPath_1.get_bounds_bj99ku_k$();
    return new Rect(bounds.left_1, bounds.top_1, bounds.right_1, bounds.bottom_1);
  };
  SkiaBackedPath.prototype.op_eh4rey_k$ = function (path1, path2, operation) {
    var path = Companion_getInstance_7().makeCombining_738xp1_k$(asSkiaPath(path1), asSkiaPath(path2), toSkiaOperation(operation, this));
    var tmp = this;
    var tmp0_elvis_lhs = path;
    tmp.internalPath_1 = tmp0_elvis_lhs == null ? this.internalPath_1 : tmp0_elvis_lhs;
    return !(path == null);
  };
  SkiaBackedPath.prototype.get_isConvex_ryvmuy_k$ = function () {
    return this.internalPath_1.get_isConvex_ryvmuy_k$();
  };
  SkiaBackedPath.prototype.get_isEmpty_zauvru_k$ = function () {
    return this.internalPath_1.get_isEmpty_zauvru_k$();
  };
  SkiaBackedPath.$metadata$ = classMeta('SkiaBackedPath', [Path]);
  function asSkiaPath(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedPath) {
      tmp = _this__u8e3s4.internalPath_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Path');
    }
    return tmp;
  }
  function SkiaBackedPathEffect(nativePathEffect) {
    this.nativePathEffect_1 = nativePathEffect;
  }
  SkiaBackedPathEffect.prototype.get_nativePathEffect_o1bxhy_k$ = function () {
    return this.nativePathEffect_1;
  };
  SkiaBackedPathEffect.$metadata$ = classMeta('SkiaBackedPathEffect', [PathEffect]);
  function asSkiaPathEffect(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedPathEffect ? _this__u8e3s4 : THROW_CCE()).nativePathEffect_1;
  }
  function actualCornerPathEffect(radius) {
    return new SkiaBackedPathEffect(Companion_getInstance_8().makeCorner_nvvp4b_k$(radius));
  }
  function actualDashPathEffect(intervals, phase) {
    return new SkiaBackedPathEffect(Companion_getInstance_8().makeDash_l6ju8t_k$(intervals, phase));
  }
  function actualChainPathEffect(outer, inner) {
    return new SkiaBackedPathEffect(asSkiaPathEffect(outer).makeCompose_8fhb2g_k$(asSkiaPathEffect(inner)));
  }
  function actualStampedPathEffect(shape, advance, phase, style) {
    return new SkiaBackedPathEffect(Companion_getInstance_8().makePath1D_ivleto_k$(asSkiaPath(shape), advance, phase, toSkiaStampedPathEffectStyle(style)));
  }
  function toSkiaStampedPathEffectStyle(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_27().Morph_1 ? Style_MORPH_getInstance() : tmp0_subject === Companion_getInstance_27().Rotate_1 ? Style_ROTATE_getInstance() : tmp0_subject === Companion_getInstance_27().Translate_1 ? Style_TRANSLATE_getInstance() : Style_TRANSLATE_getInstance();
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
    this.skia_1 = skia;
  }
  SkiaBackedPathMeasure.prototype.get_skia_woucvt_k$ = function () {
    return this.skia_1;
  };
  SkiaBackedPathMeasure.prototype.setPath_2lqht_k$ = function (path, forceClosed) {
    var tmp0_safe_receiver = path;
    this.skia_1.setPath_l64k9w_k$(tmp0_safe_receiver == null ? null : asSkiaPath(tmp0_safe_receiver), forceClosed);
  };
  SkiaBackedPathMeasure.prototype.getSegment_54x8z1_k$ = function (startDistance, stopDistance, destination, startWithMoveTo) {
    return this.skia_1.getSegment_jdt43f_k$(startDistance, stopDistance, asSkiaPath(destination), startWithMoveTo);
  };
  SkiaBackedPathMeasure.prototype.get_length_g42xv3_k$ = function () {
    return this.skia_1.get_length_g42xv3_k$();
  };
  SkiaBackedPathMeasure.$metadata$ = classMeta('SkiaBackedPathMeasure', [PathMeasure]);
  function _set_internalImageFilter__a836z3($this, _set____db54di) {
    $this.internalImageFilter_1 = _set____db54di;
  }
  function _get_internalImageFilter__nitfvf($this) {
    return $this.internalImageFilter_1;
  }
  function RenderEffect() {
    this.internalImageFilter_1 = null;
  }
  RenderEffect.prototype.asSkiaImageFilter_1de1rj_k$ = function () {
    var tmp0_elvis_lhs = this.internalImageFilter_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = this.createImageFilter_sv02y1_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.RenderEffect.asSkiaImageFilter.<anonymous>' call
      this.internalImageFilter_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  RenderEffect.prototype.isSupported_j5t6ec_k$ = function () {
    return true;
  };
  RenderEffect.$metadata$ = classMeta('RenderEffect');
  function BlurEffect_init_$Init$(renderEffect, radiusX, radiusY, edgeTreatment, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      radiusY = radiusX;
    if (!(($mask0 & 8) === 0))
      edgeTreatment = Companion_getInstance_34().Clamp_1;
    BlurEffect.call($this, renderEffect, radiusX, radiusY, edgeTreatment);
    return $this;
  }
  function BlurEffect_init_$Create$(renderEffect, radiusX, radiusY, edgeTreatment, $mask0, $marker) {
    return BlurEffect_init_$Init$(renderEffect, radiusX, radiusY, edgeTreatment, $mask0, $marker, Object.create(BlurEffect.prototype));
  }
  function _get_renderEffect__lnsspw($this) {
    return $this.renderEffect_1;
  }
  function _get_radiusX__yn9fij($this) {
    return $this.radiusX_1;
  }
  function _get_radiusY__yn9fje($this) {
    return $this.radiusY_1;
  }
  function _get_edgeTreatment__hm26t2($this) {
    return $this.edgeTreatment_1;
  }
  function Companion_31() {
    Companion_instance_31 = this;
    this.BlurSigmaScale_1 = 0.57735;
  }
  Companion_31.prototype.get_BlurSigmaScale_a4lbmd_k$ = function () {
    return this.BlurSigmaScale_1;
  };
  Companion_31.prototype.convertRadiusToSigma_iw86v_k$ = function (radius) {
    var tmp;
    if (radius > 0) {
      tmp = this.BlurSigmaScale_1 * radius + 0.5;
    } else {
      tmp = 0.0;
    }
    return tmp;
  };
  Companion_31.$metadata$ = objectMeta('Companion');
  var Companion_instance_31;
  function Companion_getInstance_46() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function BlurEffect(renderEffect, radiusX, radiusY, edgeTreatment) {
    Companion_getInstance_46();
    RenderEffect.call(this);
    this.renderEffect_1 = renderEffect;
    this.radiusX_1 = radiusX;
    this.radiusY_1 = radiusY;
    this.edgeTreatment_1 = edgeTreatment;
  }
  BlurEffect.prototype.createImageFilter_sv02y1_k$ = function () {
    var tmp;
    if (this.renderEffect_1 == null) {
      var tmp_0 = Companion_getInstance_9();
      var tmp_1 = Companion_getInstance_46().convertRadiusToSigma_iw86v_k$(this.radiusX_1);
      var tmp_2 = Companion_getInstance_46().convertRadiusToSigma_iw86v_k$(this.radiusY_1);
      var tmp_3 = toSkiaTileMode(this.edgeTreatment_1);
      tmp = tmp_0.makeBlur$default_vog8fi_k$(tmp_1, tmp_2, tmp_3, null, null, 24, null);
    } else {
      tmp = Companion_getInstance_9().makeBlur_3mengz_k$(Companion_getInstance_46().convertRadiusToSigma_iw86v_k$(this.radiusX_1), Companion_getInstance_46().convertRadiusToSigma_iw86v_k$(this.radiusY_1), toSkiaTileMode(this.edgeTreatment_1), this.renderEffect_1.asSkiaImageFilter_1de1rj_k$(), null);
    }
    return tmp;
  };
  BlurEffect.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlurEffect))
      return false;
    if (!(this.radiusX_1 === other.radiusX_1))
      return false;
    if (!(this.radiusY_1 === other.radiusY_1))
      return false;
    if (!(this.edgeTreatment_1 === other.edgeTreatment_1))
      return false;
    if (!equals(this.renderEffect_1, other.renderEffect_1))
      return false;
    return true;
  };
  BlurEffect.prototype.hashCode = function () {
    var tmp0_safe_receiver = this.renderEffect_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = imul(31, result) + getNumberHashCode(this.radiusX_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.radiusY_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.edgeTreatment_1) | 0;
    return result;
  };
  BlurEffect.prototype.toString = function () {
    return 'BlurEffect(renderEffect=' + this.renderEffect_1 + ', radiusX=' + this.radiusX_1 + ', radiusY=' + this.radiusY_1 + ', ' + ('edgeTreatment=' + new TileMode(this.edgeTreatment_1) + ')');
  };
  BlurEffect.$metadata$ = classMeta('BlurEffect', undefined, undefined, undefined, undefined, RenderEffect.prototype);
  function _get_renderEffect__lnsspw_0($this) {
    return $this.renderEffect_1;
  }
  function _get_offset__c6qzmg($this) {
    return $this.offset_1;
  }
  function OffsetEffect(renderEffect, offset) {
    RenderEffect.call(this);
    this.renderEffect_1 = renderEffect;
    this.offset_1 = offset;
  }
  OffsetEffect.prototype.createImageFilter_sv02y1_k$ = function () {
    var tmp = Companion_getInstance_9();
    var tmp_0 = _Offset___get_x__impl__xvi35n(this.offset_1);
    var tmp_1 = _Offset___get_y__impl__8bzhra(this.offset_1);
    var tmp0_safe_receiver = this.renderEffect_1;
    return tmp.makeOffset_8qoczr_k$(tmp_0, tmp_1, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.asSkiaImageFilter_1de1rj_k$(), null);
  };
  OffsetEffect.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OffsetEffect))
      return false;
    if (!equals(this.renderEffect_1, other.renderEffect_1))
      return false;
    if (!equals(this.offset_1, other.offset_1))
      return false;
    return true;
  };
  OffsetEffect.prototype.hashCode = function () {
    var tmp0_safe_receiver = this.renderEffect_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.offset_1) | 0;
    return result;
  };
  OffsetEffect.prototype.toString = function () {
    return 'OffsetEffect(renderEffect=' + this.renderEffect_1 + ', offset=' + new Offset_0(this.offset_1) + ')';
  };
  OffsetEffect.$metadata$ = classMeta('OffsetEffect', undefined, undefined, undefined, undefined, RenderEffect.prototype);
  function SkiaBackedRenderEffect(imageFilter) {
    RenderEffect.call(this);
    this.imageFilter_1 = imageFilter;
  }
  SkiaBackedRenderEffect.prototype.get_imageFilter_rhhupi_k$ = function () {
    return this.imageFilter_1;
  };
  SkiaBackedRenderEffect.prototype.createImageFilter_sv02y1_k$ = function () {
    return this.imageFilter_1;
  };
  SkiaBackedRenderEffect.$metadata$ = classMeta('SkiaBackedRenderEffect', undefined, undefined, undefined, undefined, RenderEffect.prototype);
  function asSkiaColorFilter(_this__u8e3s4) {
    return _this__u8e3s4.nativeColorFilter_1;
  }
  function actualTintColorFilter(color, blendMode) {
    return new ColorFilter(Companion_getInstance_10().makeBlend_s8ia93_k$(toArgb(color), toSkia(blendMode)));
  }
  function actualColorMatrixColorFilter(colorMatrix) {
    return new ColorFilter(Companion_getInstance_10().makeMatrix_rjjhx4_k$(new ColorMatrix(_ColorMatrix___get_values__impl__bpwpry(colorMatrix).slice())));
  }
  function actualLightingColorFilter(multiply, add) {
    return new ColorFilter(Companion_getInstance_10().makeLighting_u1dhx6_k$(toArgb(multiply), toArgb(add)));
  }
  function asSkiaBitmap(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof SkiaBackedImageBitmap) {
      tmp = _this__u8e3s4.bitmap_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Image');
    }
    return tmp;
  }
  function SkiaBackedImageBitmap(bitmap) {
    this.bitmap_1 = bitmap;
    this.colorSpace_1 = toComposeColorSpace(this.bitmap_1.get_colorSpace_yx2b0_k$());
    this.config_1 = toComposeConfig(this.bitmap_1.get_colorType_tr6rn0_k$());
    this.hasAlpha_1 = !this.bitmap_1.get_isOpaque_xnqi0k_k$();
  }
  SkiaBackedImageBitmap.prototype.get_bitmap_bfxu7s_k$ = function () {
    return this.bitmap_1;
  };
  SkiaBackedImageBitmap.prototype.get_colorSpace_yx2b0_k$ = function () {
    return this.colorSpace_1;
  };
  SkiaBackedImageBitmap.prototype.get_config_df1eav_k$ = function () {
    return this.config_1;
  };
  SkiaBackedImageBitmap.prototype.get_hasAlpha_txpv0z_k$ = function () {
    return this.hasAlpha_1;
  };
  SkiaBackedImageBitmap.prototype.get_height_e7t92o_k$ = function () {
    return this.bitmap_1.get_height_e7t92o_k$();
  };
  SkiaBackedImageBitmap.prototype.get_width_j0q4yl_k$ = function () {
    return this.bitmap_1.get_width_j0q4yl_k$();
  };
  SkiaBackedImageBitmap.prototype.prepareToDraw_sbmxaj_k$ = function () {
    return Unit_getInstance();
  };
  SkiaBackedImageBitmap.prototype.readPixels_foa4om_k$ = function (buffer, startX, startY, width, height, bufferOffset, stride) {
    var lastScanline = bufferOffset + imul(height - 1 | 0, stride) | 0;
    // Inline function 'kotlin.require' call
    var tmp0_require = startX >= 0 ? startY >= 0 : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = width > 0 ? (startX + width | 0) <= this.get_width_j0q4yl_k$() : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$1 = 'Failed requirement.';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp2_require = height > 0 ? (startY + height | 0) <= this.get_height_e7t92o_k$() : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$2;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$2 = 'Failed requirement.';
      var message_1 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.require' call
    var tmp3_require = abs(stride) >= width;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp3_require) {
      var tmp$ret$3;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$3 = 'Failed requirement.';
      var message_2 = tmp$ret$3;
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
    // Inline function 'kotlin.require' call
    var tmp4_require = bufferOffset >= 0 ? (bufferOffset + width | 0) <= buffer.length : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp4_require) {
      var tmp$ret$4;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$4 = 'Failed requirement.';
      var message_3 = tmp$ret$4;
      throw IllegalArgumentException_init_$Create$(toString(message_3));
    }
    // Inline function 'kotlin.require' call
    var tmp5_require = lastScanline >= 0 ? (lastScanline + width | 0) <= buffer.length : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp5_require) {
      var tmp$ret$5;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$5 = 'Failed requirement.';
      var message_4 = tmp$ret$5;
      throw IllegalArgumentException_init_$Create$(toString(message_4));
    }
    var colorInfo = new ColorInfo(ColorType_BGRA_8888_getInstance(), ColorAlphaType_UNPREMUL_getInstance(), Companion_getInstance_11().sRGB_1);
    var imageInfo = new ImageInfo(colorInfo, width, height);
    var bytesPerPixel = 4;
    var bytes = ensureNotNull(this.bitmap_1.readPixels_bwiudk_k$(imageInfo, imul(stride, bytesPerPixel), startX, startY));
    putBytesInto(bytes, buffer, bufferOffset, bytes.length / bytesPerPixel | 0);
  };
  SkiaBackedImageBitmap.$metadata$ = classMeta('SkiaBackedImageBitmap', [ImageBitmap]);
  function toComposeColorSpace(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return equals(tmp0_subject, Companion_getInstance_11().sRGB_1) ? ColorSpaces_getInstance().Srgb_1 : equals(tmp0_subject, Companion_getInstance_11().sRGBLinear_1) ? ColorSpaces_getInstance().LinearSrgb_1 : equals(tmp0_subject, Companion_getInstance_11().displayP3__1) ? ColorSpaces_getInstance().DisplayP3__1 : ColorSpaces_getInstance().Srgb_1;
  }
  function toComposeConfig(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject.equals(Companion_getInstance_12().N32__1) ? Companion_getInstance_22().Argb8888__1 : tmp0_subject.equals(ColorType_ALPHA_8_getInstance()) ? Companion_getInstance_22().Alpha8__1 : tmp0_subject.equals(ColorType_RGB_565_getInstance()) ? Companion_getInstance_22().Rgb565__1 : tmp0_subject.equals(ColorType_RGBA_F16_getInstance()) ? Companion_getInstance_22().F16__1 : Companion_getInstance_22().Argb8888__1;
  }
  function ActualImageBitmap(width, height, config, hasAlpha, colorSpace) {
    var colorType = toSkiaColorType(config);
    var alphaType = hasAlpha ? ColorAlphaType_PREMUL_getInstance() : ColorAlphaType_OPAQUE_getInstance();
    var skiaColorSpace = toSkiaColorSpace(colorSpace);
    var colorInfo = new ColorInfo(colorType, alphaType, skiaColorSpace);
    var imageInfo = new ImageInfo(colorInfo, width, height);
    var bitmap = Bitmap_init_$Create$();
    bitmap.allocPixels_jyyvpm_k$(imageInfo);
    return new SkiaBackedImageBitmap(bitmap);
  }
  function toSkiaColorType(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_22().Argb8888__1 ? Companion_getInstance_12().N32__1 : tmp0_subject === Companion_getInstance_22().Alpha8__1 ? ColorType_ALPHA_8_getInstance() : tmp0_subject === Companion_getInstance_22().Rgb565__1 ? ColorType_RGB_565_getInstance() : tmp0_subject === Companion_getInstance_22().F16__1 ? ColorType_RGBA_F16_getInstance() : Companion_getInstance_12().N32__1;
  }
  function toSkiaColorSpace(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject.equals(ColorSpaces_getInstance().Srgb_1) ? Companion_getInstance_11().sRGB_1 : tmp0_subject.equals(ColorSpaces_getInstance().LinearSrgb_1) ? Companion_getInstance_11().sRGBLinear_1 : tmp0_subject.equals(ColorSpaces_getInstance().DisplayP3__1) ? Companion_getInstance_11().displayP3__1 : Companion_getInstance_11().sRGB_1;
  }
  function ActualLinearGradientShader(from, to, colors, colorStops, tileMode) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_13();
    var tmp_0 = _Offset___get_x__impl__xvi35n(from);
    var tmp_1 = _Offset___get_y__impl__8bzhra(from);
    var tmp_2 = _Offset___get_x__impl__xvi35n(to);
    var tmp_3 = _Offset___get_y__impl__8bzhra(to);
    var tmp_4 = toIntArray(colors);
    var tmp0_safe_receiver = colorStops;
    return tmp.makeLinearGradient_p3pmrv_k$(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp0_safe_receiver == null ? null : toFloatArray(tmp0_safe_receiver), new GradientStyle(toSkiaTileMode(tileMode), true, identityMatrix33()));
  }
  function ActualRadialGradientShader(center, radius, colors, colorStops, tileMode) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_13();
    var tmp_0 = _Offset___get_x__impl__xvi35n(center);
    var tmp_1 = _Offset___get_y__impl__8bzhra(center);
    var tmp_2 = toIntArray(colors);
    var tmp0_safe_receiver = colorStops;
    return tmp.makeRadialGradient_gn4elj_k$(tmp_0, tmp_1, radius, tmp_2, tmp0_safe_receiver == null ? null : toFloatArray(tmp0_safe_receiver), new GradientStyle(toSkiaTileMode(tileMode), true, identityMatrix33()));
  }
  function ActualSweepGradientShader(center, colors, colorStops) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_13();
    var tmp_0 = _Offset___get_x__impl__xvi35n(center);
    var tmp_1 = _Offset___get_y__impl__8bzhra(center);
    var tmp_2 = toIntArray(colors);
    var tmp0_safe_receiver = colorStops;
    return tmp.makeSweepGradient_3ha3m6_k$(tmp_0, tmp_1, tmp_2, tmp0_safe_receiver == null ? null : toFloatArray(tmp0_safe_receiver));
  }
  function validateColorStops(colors, colorStops) {
    if (colorStops == null) {
      if (colors.get_size_woubt6_k$() < 2) {
        throw IllegalArgumentException_init_$Create$('colors must have length of at least 2 if colorStops is omitted.');
      }
    } else if (!(colors.get_size_woubt6_k$() === colorStops.get_size_woubt6_k$())) {
      throw IllegalArgumentException_init_$Create$('colors and colorStops arguments must have equal length.');
    }
  }
  function toIntArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.get_size_woubt6_k$();
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.toIntArray.<anonymous>' call
      tmp$ret$0 = toArgb(_this__u8e3s4.get_fkrdnv_k$(tmp_2).value_1);
      tmp_1[tmp_2] = tmp$ret$0;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function toSkiaTileMode(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_34().Clamp_1 ? FilterTileMode_CLAMP_getInstance() : tmp0_subject === Companion_getInstance_34().Repeated_1 ? FilterTileMode_REPEAT_getInstance() : tmp0_subject === Companion_getInstance_34().Mirror_1 ? FilterTileMode_MIRROR_getInstance() : tmp0_subject === Companion_getInstance_34().Decal_1 ? FilterTileMode_DECAL_getInstance() : FilterTileMode_CLAMP_getInstance();
  }
  function toSkiaVertexMode(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_35().Triangles_1 ? VertexMode_TRIANGLES_getInstance() : tmp0_subject === Companion_getInstance_35().TriangleStrip_1 ? VertexMode_TRIANGLE_STRIP_getInstance() : tmp0_subject === Companion_getInstance_35().TriangleFan_1 ? VertexMode_TRIANGLE_FAN_getInstance() : VertexMode_TRIANGLES_getInstance();
  }
  //region block: post-declaration
  CanvasDrawScope.prototype.drawLine$default_cr5axy_k$ = drawLine$default;
  CanvasDrawScope.prototype.drawLine$default_wkqhm9_k$ = drawLine$default_0;
  CanvasDrawScope.prototype.drawRect$default_3hujnj_k$ = drawRect$default;
  CanvasDrawScope.prototype.drawRect$default_xwjj6g_k$ = drawRect$default_0;
  CanvasDrawScope.prototype.drawImage$default_93ints_k$ = drawImage$default;
  CanvasDrawScope.prototype.drawImage$default_mvyqz6_k$ = drawImage$default_0;
  CanvasDrawScope.prototype.drawImage$default_9i1j05_k$ = drawImage$default_1;
  CanvasDrawScope.prototype.drawRoundRect$default_jt4nwh_k$ = drawRoundRect$default;
  CanvasDrawScope.prototype.drawRoundRect$default_7fqhzi_k$ = drawRoundRect$default_0;
  CanvasDrawScope.prototype.drawCircle$default_zdw55n_k$ = drawCircle$default;
  CanvasDrawScope.prototype.drawCircle$default_36xhbw_k$ = drawCircle$default_0;
  CanvasDrawScope.prototype.drawOval$default_y6t2oh_k$ = drawOval$default;
  CanvasDrawScope.prototype.drawOval$default_37l05i_k$ = drawOval$default_0;
  CanvasDrawScope.prototype.drawArc$default_hgk6ob_k$ = drawArc$default;
  CanvasDrawScope.prototype.drawArc$default_y02lvi_k$ = drawArc$default_0;
  CanvasDrawScope.prototype.drawPath$default_kl4g8r_k$ = drawPath$default;
  CanvasDrawScope.prototype.drawPath$default_delt9g_k$ = drawPath$default_0;
  CanvasDrawScope.prototype.drawPoints$default_c8ymp5_k$ = drawPoints$default;
  CanvasDrawScope.prototype.drawPoints$default_j1qm9s_k$ = drawPoints$default_0;
  CanvasDrawScope.prototype.get_center_568eeq_k$ = get_center_0;
  CanvasDrawScope.prototype.get_size_x9ctfw_k$ = get_size;
  CanvasDrawScope.prototype.toPx_u0ojv5_k$ = toPx;
  CanvasDrawScope.prototype.toPx_x7oik4_k$ = toPx_0;
  CanvasDrawScope.prototype.roundToPx_hl1u8z_k$ = roundToPx;
  CanvasDrawScope.prototype.roundToPx_bdej4u_k$ = roundToPx_0;
  CanvasDrawScope.prototype.toSp_ul0xj8_k$ = toSp;
  CanvasDrawScope.prototype.toSp_8a8emd_k$ = toSp_0;
  CanvasDrawScope.prototype.toSp_j4kre0_k$ = toSp_1;
  CanvasDrawScope.prototype.toDp_amhzyl_k$ = toDp;
  CanvasDrawScope.prototype.toDp_2eugbd_k$ = toDp_0;
  CanvasDrawScope.prototype.toDp_2y47ho_k$ = toDp_1;
  CanvasDrawScope.prototype.toRect_l767f3_k$ = toRect_0;
  CanvasDrawScope.prototype.toSize_z60fpn_k$ = toSize;
  CanvasDrawScope.prototype.toDpSize_ncjzav_k$ = toDpSize;
  asDrawTransform$1.prototype.clipRect$default_il0869_k$ = clipRect$default_1;
  asDrawTransform$1.prototype.clipPath$default_m1la40_k$ = clipPath$default_0;
  asDrawTransform$1.prototype.translate$default_1pb5ra_k$ = translate$default;
  asDrawTransform$1.prototype.rotate$default_1ca7j3_k$ = rotate$default;
  asDrawTransform$1.prototype.scale$default_b1nocw_k$ = scale$default_0;
  EmptyCanvas.prototype.scale$default_65y6i2_k$ = scale$default;
  EmptyCanvas.prototype.clipRect$default_il0869_k$ = clipRect$default_0;
  EmptyCanvas.prototype.clipPath$default_m1la40_k$ = clipPath$default;
  EmptyCanvas.prototype.drawImageRect$default_hpapqz_k$ = drawImageRect$default;
  EmptyCanvas.prototype.skewRad_jnvexm_k$ = skewRad;
  EmptyCanvas.prototype.clipRect_5p7fgn_k$ = clipRect;
  EmptyCanvas.prototype.clipRect$default_rf6xmh_k$ = clipRect$default;
  EmptyCanvas.prototype.drawRect_gsp0aa_k$ = drawRect;
  EmptyCanvas.prototype.drawOval_5ze9o_k$ = drawOval;
  EmptyCanvas.prototype.drawArc_wasmwu_k$ = drawArc;
  EmptyCanvas.prototype.drawArcRad_pebonr_k$ = drawArcRad;
  SkiaBackedCanvas.prototype.scale$default_65y6i2_k$ = scale$default;
  SkiaBackedCanvas.prototype.clipRect$default_il0869_k$ = clipRect$default_0;
  SkiaBackedCanvas.prototype.clipPath$default_m1la40_k$ = clipPath$default;
  SkiaBackedCanvas.prototype.drawImageRect$default_hpapqz_k$ = drawImageRect$default;
  SkiaBackedCanvas.prototype.skewRad_jnvexm_k$ = skewRad;
  SkiaBackedCanvas.prototype.clipRect_5p7fgn_k$ = clipRect;
  SkiaBackedCanvas.prototype.clipRect$default_rf6xmh_k$ = clipRect$default;
  SkiaBackedCanvas.prototype.drawRect_gsp0aa_k$ = drawRect;
  SkiaBackedCanvas.prototype.drawOval_5ze9o_k$ = drawOval;
  SkiaBackedCanvas.prototype.drawArc_wasmwu_k$ = drawArc;
  SkiaBackedCanvas.prototype.drawArcRad_pebonr_k$ = drawArcRad;
  SkiaBackedPath.prototype.addPath$default_qq1a1o_k$ = addPath$default;
  SkiaBackedPath.prototype.arcToRad_lid0rr_k$ = arcToRad;
  SkiaBackedPathMeasure.prototype.getSegment$default_j0wwb6_k$ = getSegment$default;
  SkiaBackedImageBitmap.prototype.readPixels$default_vzwszd_k$ = readPixels$default;
  //endregion
  //region block: init
  RadiansToDegrees = 57.29578;
  DefaultAlpha = 1.0;
  RelativeCloseKey = _Char___init__impl__6a9atx(122);
  CloseKey = _Char___init__impl__6a9atx(90);
  RelativeMoveToKey = _Char___init__impl__6a9atx(109);
  NUM_MOVE_TO_ARGS = 2;
  MoveToKey = _Char___init__impl__6a9atx(77);
  RelativeLineToKey = _Char___init__impl__6a9atx(108);
  NUM_LINE_TO_ARGS = 2;
  LineToKey = _Char___init__impl__6a9atx(76);
  RelativeHorizontalToKey = _Char___init__impl__6a9atx(104);
  NUM_HORIZONTAL_TO_ARGS = 1;
  HorizontalToKey = _Char___init__impl__6a9atx(72);
  RelativeVerticalToKey = _Char___init__impl__6a9atx(118);
  NUM_VERTICAL_TO_ARGS = 1;
  VerticalToKey = _Char___init__impl__6a9atx(86);
  RelativeCurveToKey = _Char___init__impl__6a9atx(99);
  NUM_CURVE_TO_ARGS = 6;
  CurveToKey = _Char___init__impl__6a9atx(67);
  RelativeReflectiveCurveToKey = _Char___init__impl__6a9atx(115);
  NUM_REFLECTIVE_CURVE_TO_ARGS = 4;
  ReflectiveCurveToKey = _Char___init__impl__6a9atx(83);
  RelativeQuadToKey = _Char___init__impl__6a9atx(113);
  NUM_QUAD_TO_ARGS = 4;
  QuadToKey = _Char___init__impl__6a9atx(81);
  RelativeReflectiveQuadToKey = _Char___init__impl__6a9atx(116);
  NUM_REFLECTIVE_QUAD_TO_ARGS = 2;
  ReflectiveQuadToKey = _Char___init__impl__6a9atx(84);
  RelativeArcToKey = _Char___init__impl__6a9atx(97);
  NUM_ARC_TO_ARGS = 7;
  ArcToKey = _Char___init__impl__6a9atx(65);
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
  _.$_$.w = ShaderBrush;
  _.$_$.x = Shadow;
  _.$_$.y = Shape;
  _.$_$.z = SolidColor;
  _.$_$.a1 = StrokeCap;
  _.$_$.b1 = StrokeJoin;
  _.$_$.c1 = asComposeCanvas;
  _.$_$.d1 = asSkiaPath;
  _.$_$.e1 = compositeOver;
  _.$_$.f1 = luminance;
  _.$_$.g1 = get_nativeCanvas;
  _.$_$.h1 = toArgb;
  _.$_$.i1 = toComposeRect;
  _.$_$.j1 = toSkiaRRect;
  _.$_$.k1 = toSkiaRect;
  _.$_$.l1 = _get_value__a43j40_3;
  _.$_$.m1 = _get_value__a43j40_6;
  _.$_$.n1 = _get_value__a43j40_7;
  _.$_$.o1 = drawArc$default;
  _.$_$.p1 = drawArc$default_0;
  _.$_$.q1 = drawCircle$default;
  _.$_$.r1 = drawCircle$default_0;
  _.$_$.s1 = drawImage$default_0;
  _.$_$.t1 = drawImage$default;
  _.$_$.u1 = drawImage$default_1;
  _.$_$.v1 = drawLine$default;
  _.$_$.w1 = drawLine$default_0;
  _.$_$.x1 = drawOval$default;
  _.$_$.y1 = drawOval$default_0;
  _.$_$.z1 = drawPath$default_0;
  _.$_$.a2 = drawPath$default;
  _.$_$.b2 = drawPoints$default_0;
  _.$_$.c2 = drawPoints$default;
  _.$_$.d2 = drawRect$default;
  _.$_$.e2 = drawRect$default_0;
  _.$_$.f2 = drawRoundRect$default;
  _.$_$.g2 = drawRoundRect$default_0;
  _.$_$.h2 = Color$default_0;
  _.$_$.i2 = ImageBitmap$default;
  _.$_$.j2 = drawOutline$default;
  _.$_$.k2 = drawOutline$default_0;
  _.$_$.l2 = Stroke_init_$Create$;
  _.$_$.m2 = BlendMode__hashCode_impl_93ceri;
  _.$_$.n2 = _Color___init__impl__r6cqi2;
  _.$_$.o2 = _Color___get_alpha__impl__wcfyv1;
  _.$_$.p2 = _Color___get_blue__impl__xwez13;
  _.$_$.q2 = _Color___get_colorSpace__impl__jqqozk;
  _.$_$.r2 = Color__convert_impl_so5m8t;
  _.$_$.s2 = _Color___get_green__impl__bta9rs;
  _.$_$.t2 = Color__hashCode_impl_vjyivj;
  _.$_$.u2 = _Color___get_red__impl__cwrsk6;
  _.$_$.v2 = _Color___get_value__impl__1pls5m;
  _.$_$.w2 = Matrix__invert_impl_9xyo46;
  _.$_$.x2 = Matrix__map_impl_7meu7m;
  _.$_$.y2 = Matrix__map_impl_7meu7m_1;
  _.$_$.z2 = Matrix__reset_impl_4l49i7;
  _.$_$.a3 = Matrix__rotateX_impl_3e5y7j;
  _.$_$.b3 = Matrix__rotateY_impl_2x4btc;
  _.$_$.c3 = Matrix__rotateZ_impl_2g2pf5;
  _.$_$.d3 = Matrix__scale_impl_6w89a4;
  _.$_$.e3 = Matrix__setFrom_impl_5fylsu;
  _.$_$.f3 = Matrix__timesAssign_impl_oas521;
  _.$_$.g3 = PathFillType__hashCode_impl_pdqo4w;
  _.$_$.h3 = StrokeCap__hashCode_impl_posxk8;
  _.$_$.i3 = StrokeJoin__hashCode_impl_3pyh8w;
  _.$_$.j3 = Color__copy$default_impl_ectz3s;
  _.$_$.k3 = _Matrix___init__impl__q3kp4w_0;
  _.$_$.l3 = Matrix__scale$default_impl_snaws9;
  _.$_$.m3 = Matrix__translate$default_impl_10t8ql;
  _.$_$.n3 = ColorSpaces_getInstance;
  _.$_$.o3 = Fill_getInstance;
  _.$_$.p3 = Companion_getInstance_14;
  _.$_$.q3 = Companion_getInstance_16;
  _.$_$.r3 = Companion_getInstance_17;
  _.$_$.s3 = Companion_getInstance_18;
  _.$_$.t3 = Companion_getInstance_22;
  _.$_$.u3 = Companion_getInstance_24;
  _.$_$.v3 = Companion_getInstance_28;
  _.$_$.w3 = Companion_getInstance_29;
  _.$_$.x3 = Companion_getInstance_30;
  _.$_$.y3 = Companion_getInstance_31;
  _.$_$.z3 = Companion_getInstance_32;
  _.$_$.a4 = Companion_getInstance_33;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-ui-graphics.js.map
