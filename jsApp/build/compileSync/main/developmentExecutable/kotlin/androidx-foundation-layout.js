(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui-unit.js', './androidx-ui.js', './androidx-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui-unit.js'), require('./androidx-ui.js'), require('./androidx-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation-layout'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-foundation-layout'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation-layout'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-foundation-layout'.");
    }
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation-layout'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'androidx-foundation-layout'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation-layout'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-foundation-layout'.");
    }
    root['androidx-foundation-layout'] = factory(typeof this['androidx-foundation-layout'] === 'undefined' ? {} : this['androidx-foundation-layout'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui-unit'], this['androidx-ui'], this['androidx-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_androidx_compose_ui_ui_unit, kotlin_androidx_compose_ui_ui, kotlin_androidx_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var classMeta = kotlin_kotlin.$_$.q8;
  var _Dp___init__impl__ms3zkb = kotlin_androidx_compose_ui_ui_unit.$_$.i2;
  var Unit_getInstance = kotlin_kotlin.$_$.b3;
  var interfaceMeta = kotlin_kotlin.$_$.d9;
  var objectMeta = kotlin_kotlin.$_$.q9;
  var LayoutDirection_Rtl_getInstance = kotlin_androidx_compose_ui_ui_unit.$_$.w1;
  var LayoutDirection_Ltr_getInstance = kotlin_androidx_compose_ui_ui_unit.$_$.v1;
  var Dp = kotlin_androidx_compose_ui_ui_unit.$_$.v;
  var Dp__hashCode_impl_sxkrra = kotlin_androidx_compose_ui_ui_unit.$_$.k2;
  var hashCode = kotlin_kotlin.$_$.b9;
  var THROW_CCE = kotlin_kotlin.$_$.kc;
  var equals = kotlin_kotlin.$_$.t8;
  var Companion_getInstance = kotlin_androidx_compose_ui_ui.$_$.w4;
  var roundToInt = kotlin_kotlin.$_$.aa;
  var IntSize = kotlin_androidx_compose_ui_ui_unit.$_$.y;
  var get_NoInspectorInfo = kotlin_androidx_compose_ui_ui.$_$.w2;
  var InspectorValueInfo = kotlin_androidx_compose_ui_ui.$_$.q2;
  var foldIn = kotlin_androidx_compose_ui_ui.$_$.n3;
  var foldOut = kotlin_androidx_compose_ui_ui.$_$.o3;
  var any = kotlin_androidx_compose_ui_ui.$_$.m3;
  var all = kotlin_androidx_compose_ui_ui.$_$.l3;
  var then = kotlin_androidx_compose_ui_ui.$_$.p3;
  var ParentDataModifier = kotlin_androidx_compose_ui_ui.$_$.d2;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.s1;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.h1;
  var Companion_getInstance_0 = kotlin_androidx_compose_ui_ui.$_$.x4;
  var get_LocalDensity = kotlin_androidx_compose_ui_ui.$_$.r2;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.q1;
  var get_LocalLayoutDirection = kotlin_androidx_compose_ui_ui.$_$.u2;
  var get_LocalViewConfiguration = kotlin_androidx_compose_ui_ui.$_$.v2;
  var Companion_getInstance_1 = kotlin_androidx_compose_ui_ui.$_$.t4;
  var materializerOf = kotlin_androidx_compose_ui_ui.$_$.g2;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.g1;
  var Applier = kotlin_androidx_compose_runtime_runtime.$_$.k;
  var isInterface = kotlin_kotlin.$_$.i9;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.d2;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.e2;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_androidx_compose_runtime_runtime.$_$.b2;
  var SkippableUpdater = kotlin_androidx_compose_runtime_runtime.$_$.b1;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var Companion_getInstance_2 = kotlin_androidx_compose_runtime_runtime.$_$.g2;
  var isObject = kotlin_kotlin.$_$.j9;
  var get_isDebugInspectorInfoEnabled = kotlin_androidx_compose_ui_ui.$_$.y2;
  var Constraints = kotlin_androidx_compose_ui_ui_unit.$_$.b;
  var minIntrinsicWidth = kotlin_androidx_compose_ui_ui.$_$.z1;
  var minIntrinsicHeight = kotlin_androidx_compose_ui_ui.$_$.y1;
  var maxIntrinsicWidth = kotlin_androidx_compose_ui_ui.$_$.x1;
  var maxIntrinsicHeight = kotlin_androidx_compose_ui_ui.$_$.w1;
  var MeasurePolicy = kotlin_androidx_compose_ui_ui.$_$.a2;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_androidx_compose_ui_ui_unit.$_$.h2;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_androidx_compose_ui_ui_unit.$_$.g2;
  var Placeable = kotlin_androidx_compose_ui_ui.$_$.e2;
  var Constraints__copy$default_impl_f452rp = kotlin_androidx_compose_ui_ui_unit.$_$.k3;
  var Companion_getInstance_3 = kotlin_androidx_compose_ui_ui_unit.$_$.l3;
  var fillArrayVal = kotlin_kotlin.$_$.u8;
  var Constraints_0 = kotlin_androidx_compose_ui_ui_unit.$_$.a;
  var SubcomposeLayout$composable = kotlin_androidx_compose_ui_ui.$_$.f2;
  var Companion_getInstance_4 = kotlin_androidx_compose_ui_ui_unit.$_$.m3;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_androidx_compose_ui_ui_unit.$_$.f2;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_androidx_compose_ui_ui_unit.$_$.a2;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_androidx_compose_ui_ui_unit.$_$.e2;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_androidx_compose_ui_ui_unit.$_$.z1;
  var Constraints__hashCode_impl_ij7484 = kotlin_androidx_compose_ui_ui_unit.$_$.d2;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var toString = kotlin_kotlin.$_$.u9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var Annotation = kotlin_kotlin.$_$.tb;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_androidx_compose_ui_ui_unit.$_$.r2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_androidx_compose_ui_ui_unit.$_$.s2;
  var minIntrinsicWidth_0 = kotlin_androidx_compose_ui_ui.$_$.u1;
  var minIntrinsicHeight_0 = kotlin_androidx_compose_ui_ui.$_$.t1;
  var maxIntrinsicWidth_0 = kotlin_androidx_compose_ui_ui.$_$.s1;
  var maxIntrinsicHeight_0 = kotlin_androidx_compose_ui_ui.$_$.r1;
  var LayoutModifier = kotlin_androidx_compose_ui_ui.$_$.v1;
  var _Dp___get_value__impl__geb1vb = kotlin_androidx_compose_ui_ui_unit.$_$.l2;
  var offset = kotlin_androidx_compose_ui_ui_unit.$_$.n1;
  var constrainWidth = kotlin_androidx_compose_ui_ui_unit.$_$.i1;
  var constrainHeight = kotlin_androidx_compose_ui_ui_unit.$_$.h1;
  var Dp__compareTo_impl_tlg3dl = kotlin_androidx_compose_ui_ui_unit.$_$.j2;
  var get_FirstBaseline = kotlin_androidx_compose_ui_ui.$_$.o1;
  var THROW_ISE = kotlin_kotlin.$_$.lc;
  var Enum = kotlin_kotlin.$_$.zb;
  var Companion_getInstance_5 = kotlin_androidx_compose_ui_ui.$_$.r4;
  var getNumberHashCode = kotlin_kotlin.$_$.x8;
  var ensureNotNull = kotlin_kotlin.$_$.uc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var get_sign = kotlin_kotlin.$_$.ca;
  var coerceAtMost = kotlin_kotlin.$_$.ha;
  var coerceIn = kotlin_kotlin.$_$.ka;
  var IntSize_0 = kotlin_androidx_compose_ui_ui_unit.$_$.z;
  var _DpSize___get_width__impl__o3d5gt = kotlin_androidx_compose_ui_ui_unit.$_$.q2;
  var _DpSize___get_height__impl__5xueo2 = kotlin_androidx_compose_ui_ui_unit.$_$.p2;
  var coerceAtLeast = kotlin_kotlin.$_$.ea;
  var coerceAtLeast_0 = kotlin_kotlin.$_$.fa;
  var constrain = kotlin_androidx_compose_ui_ui_unit.$_$.j1;
  var _Constraints___get_hasFixedWidth__impl__4p17wc = kotlin_androidx_compose_ui_ui_unit.$_$.c2;
  var _Constraints___get_hasFixedHeight__impl__y56fxx = kotlin_androidx_compose_ui_ui_unit.$_$.b2;
  var _IntSize___get_width__impl__d9yl4o = kotlin_androidx_compose_ui_ui_unit.$_$.w2;
  var IntOffset = kotlin_androidx_compose_ui_ui_unit.$_$.w;
  var IntOffset_0 = kotlin_androidx_compose_ui_ui_unit.$_$.x;
  var _IntSize___get_height__impl__prv63b = kotlin_androidx_compose_ui_ui_unit.$_$.u2;
  var Companion_getInstance_6 = kotlin_androidx_compose_ui_ui_unit.$_$.r3;
  var modifierLocalOf = kotlin_androidx_compose_ui_ui.$_$.k2;
  //endregion
  //region block: pre-declaration
  function get_spacing() {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return tmp$ret$0;
  }
  function get_spacing_0() {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return tmp$ret$0;
  }
  function get_spacing_1() {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return tmp$ret$0;
  }
  BoxChildData.prototype = Object.create(InspectorValueInfo.prototype);
  BoxChildData.prototype.constructor = BoxChildData;
  function weight$default(_this__u8e3s4, weight, fill, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      fill = true;
    return $handler == null ? this.weight_eps4yz_k$(_this__u8e3s4, weight, fill) : $handler(weight, fill);
  }
  OffsetPxModifier.prototype = Object.create(InspectorValueInfo.prototype);
  OffsetPxModifier.prototype.constructor = OffsetPxModifier;
  OffsetModifier.prototype = Object.create(InspectorValueInfo.prototype);
  OffsetModifier.prototype.constructor = OffsetModifier;
  PaddingModifier.prototype = Object.create(InspectorValueInfo.prototype);
  PaddingModifier.prototype.constructor = PaddingModifier;
  PaddingValuesModifier.prototype = Object.create(InspectorValueInfo.prototype);
  PaddingValuesModifier.prototype.constructor = PaddingValuesModifier;
  function weight$default_0(_this__u8e3s4, weight, fill, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      fill = true;
    return $handler == null ? this.weight_eps4yz_k$(_this__u8e3s4, weight, fill) : $handler(weight, fill);
  }
  LayoutOrientation.prototype = Object.create(Enum.prototype);
  LayoutOrientation.prototype.constructor = LayoutOrientation;
  CenterCrossAxisAlignment.prototype = Object.create(CrossAxisAlignment.prototype);
  CenterCrossAxisAlignment.prototype.constructor = CenterCrossAxisAlignment;
  StartCrossAxisAlignment.prototype = Object.create(CrossAxisAlignment.prototype);
  StartCrossAxisAlignment.prototype.constructor = StartCrossAxisAlignment;
  EndCrossAxisAlignment.prototype = Object.create(CrossAxisAlignment.prototype);
  EndCrossAxisAlignment.prototype.constructor = EndCrossAxisAlignment;
  AlignmentLineCrossAxisAlignment.prototype = Object.create(CrossAxisAlignment.prototype);
  AlignmentLineCrossAxisAlignment.prototype.constructor = AlignmentLineCrossAxisAlignment;
  VerticalCrossAxisAlignment.prototype = Object.create(CrossAxisAlignment.prototype);
  VerticalCrossAxisAlignment.prototype.constructor = VerticalCrossAxisAlignment;
  HorizontalCrossAxisAlignment.prototype = Object.create(CrossAxisAlignment.prototype);
  HorizontalCrossAxisAlignment.prototype.constructor = HorizontalCrossAxisAlignment;
  SizeMode.prototype = Object.create(Enum.prototype);
  SizeMode.prototype.constructor = SizeMode;
  Block.prototype = Object.create(AlignmentLineProvider.prototype);
  Block.prototype.constructor = Block;
  Value.prototype = Object.create(AlignmentLineProvider.prototype);
  Value.prototype.constructor = Value;
  LayoutWeightImpl.prototype = Object.create(InspectorValueInfo.prototype);
  LayoutWeightImpl.prototype.constructor = LayoutWeightImpl;
  HorizontalAlignModifier.prototype = Object.create(InspectorValueInfo.prototype);
  HorizontalAlignModifier.prototype.constructor = HorizontalAlignModifier;
  SiblingsAlignedModifier.prototype = Object.create(InspectorValueInfo.prototype);
  SiblingsAlignedModifier.prototype.constructor = SiblingsAlignedModifier;
  WithAlignmentLineBlock.prototype = Object.create(SiblingsAlignedModifier.prototype);
  WithAlignmentLineBlock.prototype.constructor = WithAlignmentLineBlock;
  WithAlignmentLine.prototype = Object.create(SiblingsAlignedModifier.prototype);
  WithAlignmentLine.prototype.constructor = WithAlignmentLine;
  VerticalAlignModifier.prototype = Object.create(InspectorValueInfo.prototype);
  VerticalAlignModifier.prototype.constructor = VerticalAlignModifier;
  FillModifier.prototype = Object.create(InspectorValueInfo.prototype);
  FillModifier.prototype.constructor = FillModifier;
  WrapContentModifier.prototype = Object.create(InspectorValueInfo.prototype);
  WrapContentModifier.prototype.constructor = WrapContentModifier;
  Direction.prototype = Object.create(Enum.prototype);
  Direction.prototype.constructor = Direction;
  SizeModifier.prototype = Object.create(InspectorValueInfo.prototype);
  SizeModifier.prototype.constructor = SizeModifier;
  UnspecifiedConstraintsModifier.prototype = Object.create(InspectorValueInfo.prototype);
  UnspecifiedConstraintsModifier.prototype.constructor = UnspecifiedConstraintsModifier;
  //endregion
  function Arrangement$Absolute$Left$1() {
  }
  Arrangement$Absolute$Left$1.prototype.arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeLeftOrTop_1r2n9x_k$(sizes, outPositions, false);
  };
  Arrangement$Absolute$Left$1.prototype.toString = function () {
    return 'AbsoluteArrangement#Left';
  };
  Arrangement$Absolute$Left$1.$metadata$ = classMeta(undefined, [Horizontal]);
  function Arrangement$Absolute$Center$1() {
  }
  Arrangement$Absolute$Center$1.prototype.arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeCenter_icok0k_k$(totalSize, sizes, outPositions, false);
  };
  Arrangement$Absolute$Center$1.prototype.toString = function () {
    return 'AbsoluteArrangement#Center';
  };
  Arrangement$Absolute$Center$1.$metadata$ = classMeta(undefined, [Horizontal]);
  function Arrangement$Absolute$Right$1() {
  }
  Arrangement$Absolute$Right$1.prototype.arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeRightOrBottom_j5u2x1_k$(totalSize, sizes, outPositions, false);
  };
  Arrangement$Absolute$Right$1.prototype.toString = function () {
    return 'AbsoluteArrangement#Right';
  };
  Arrangement$Absolute$Right$1.$metadata$ = classMeta(undefined, [Horizontal]);
  function Arrangement$Absolute$SpaceBetween$1() {
  }
  Arrangement$Absolute$SpaceBetween$1.prototype.arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeSpaceBetween_8d7z33_k$(totalSize, sizes, outPositions, false);
  };
  Arrangement$Absolute$SpaceBetween$1.prototype.toString = function () {
    return 'AbsoluteArrangement#SpaceBetween';
  };
  Arrangement$Absolute$SpaceBetween$1.$metadata$ = classMeta(undefined, [Horizontal]);
  function Arrangement$Absolute$SpaceEvenly$1() {
  }
  Arrangement$Absolute$SpaceEvenly$1.prototype.arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeSpaceEvenly_ojzjdq_k$(totalSize, sizes, outPositions, false);
  };
  Arrangement$Absolute$SpaceEvenly$1.prototype.toString = function () {
    return 'AbsoluteArrangement#SpaceEvenly';
  };
  Arrangement$Absolute$SpaceEvenly$1.$metadata$ = classMeta(undefined, [Horizontal]);
  function Arrangement$Absolute$SpaceAround$1() {
  }
  Arrangement$Absolute$SpaceAround$1.prototype.arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeSpaceAround_2yd3pg_k$(totalSize, sizes, outPositions, false);
  };
  Arrangement$Absolute$SpaceAround$1.prototype.toString = function () {
    return 'AbsoluteArrangement#SpaceAround';
  };
  Arrangement$Absolute$SpaceAround$1.$metadata$ = classMeta(undefined, [Horizontal]);
  function Arrangement$Absolute$spacedBy$lambda($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_a5f08y_k$(0, size, layoutDirection);
    };
  }
  function Arrangement$Absolute$spacedBy$lambda_0($alignment) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return $alignment.align_1fj06d_k$(0, size);
    };
  }
  function Arrangement$Absolute$aligned$lambda($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_a5f08y_k$(0, size, layoutDirection);
    };
  }
  function Horizontal() {
  }
  Horizontal.$metadata$ = interfaceMeta('Horizontal');
  function Vertical() {
  }
  Vertical.$metadata$ = interfaceMeta('Vertical');
  function HorizontalOrVertical() {
  }
  HorizontalOrVertical.$metadata$ = interfaceMeta('HorizontalOrVertical', [Horizontal, Vertical]);
  function Absolute() {
    Absolute_instance = this;
    var tmp = this;
    tmp.Left_1 = new Arrangement$Absolute$Left$1();
    var tmp_0 = this;
    tmp_0.Center_1 = new Arrangement$Absolute$Center$1();
    var tmp_1 = this;
    tmp_1.Right_1 = new Arrangement$Absolute$Right$1();
    var tmp_2 = this;
    tmp_2.SpaceBetween_1 = new Arrangement$Absolute$SpaceBetween$1();
    var tmp_3 = this;
    tmp_3.SpaceEvenly_1 = new Arrangement$Absolute$SpaceEvenly$1();
    var tmp_4 = this;
    tmp_4.SpaceAround_1 = new Arrangement$Absolute$SpaceAround$1();
  }
  Absolute.prototype.get_Left_wo5bw0_k$ = function () {
    return this.Left_1;
  };
  Absolute.prototype.get_Center_3arb0i_k$ = function () {
    return this.Center_1;
  };
  Absolute.prototype.get_Right_igdsyb_k$ = function () {
    return this.Right_1;
  };
  Absolute.prototype.get_SpaceBetween_5p3wqd_k$ = function () {
    return this.SpaceBetween_1;
  };
  Absolute.prototype.get_SpaceEvenly_3s2yx0_k$ = function () {
    return this.SpaceEvenly_1;
  };
  Absolute.prototype.get_SpaceAround_1tvu22_k$ = function () {
    return this.SpaceAround_1;
  };
  Absolute.prototype.spacedBy_vy2thv_k$ = function (space) {
    return new SpacedAligned(space, false, null);
  };
  Absolute.prototype.spacedBy_junro7_k$ = function (space, alignment) {
    return new SpacedAligned(space, false, Arrangement$Absolute$spacedBy$lambda(alignment));
  };
  Absolute.prototype.spacedBy_osvfph_k$ = function (space, alignment) {
    return new SpacedAligned(space, false, Arrangement$Absolute$spacedBy$lambda_0(alignment));
  };
  Absolute.prototype.aligned_2187lk_k$ = function (alignment) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    var tmp = tmp$ret$0;
    return new SpacedAligned(tmp, false, Arrangement$Absolute$aligned$lambda(alignment));
  };
  Absolute.$metadata$ = objectMeta('Absolute');
  var Absolute_instance;
  function Absolute_getInstance() {
    if (Absolute_instance == null)
      new Absolute();
    return Absolute_instance;
  }
  function SpacedAligned(space, rtlMirror, alignment) {
    this.space_1 = space;
    this.rtlMirror_1 = rtlMirror;
    this.alignment_1 = alignment;
    this.spacing_1 = this.space_1;
  }
  SpacedAligned.prototype.get_space_glqwpk_k$ = function () {
    return this.space_1;
  };
  SpacedAligned.prototype.get_rtlMirror_4wv9cw_k$ = function () {
    return this.rtlMirror_1;
  };
  SpacedAligned.prototype.get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  SpacedAligned.prototype.get_spacing_kuwe3v_k$ = function () {
    return this.spacing_1;
  };
  SpacedAligned.prototype.arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$0 = sizes.length === 0;
    if (tmp$ret$0)
      return Unit_getInstance();
    var spacePx = _this__u8e3s4.roundToPx_hl1u8z_k$(this.space_1);
    var occupied = 0;
    var lastSpace = 0;
    var reversed = this.rtlMirror_1 ? layoutDirection.equals(LayoutDirection_Rtl_getInstance()) : false;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    var tmp0_forEachIndexed = Arrangement_getInstance();
    if (!reversed) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject = sizes;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.SpacedAligned.arrange.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp1__anonymous__uwfjfc = tmp1;
        var tmp$ret$1;
        // Inline function 'kotlin.math.min' call
        var tmp0_min = occupied;
        var tmp1_min = totalSize - item | 0;
        tmp$ret$1 = Math.min(tmp0_min, tmp1_min);
        outPositions[tmp1__anonymous__uwfjfc] = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'kotlin.math.min' call
        var tmp2_min = (totalSize - outPositions[tmp1__anonymous__uwfjfc] | 0) - item | 0;
        tmp$ret$2 = Math.min(spacePx, tmp2_min);
        lastSpace = tmp$ret$2;
        occupied = (outPositions[tmp1__anonymous__uwfjfc] + item | 0) + lastSpace | 0;
      }
    } else {
      var inductionVariable_0 = sizes.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.SpacedAligned.arrange.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = sizes[i];
          var tmp$ret$3;
          // Inline function 'kotlin.math.min' call
          var tmp0_min_0 = occupied;
          var tmp1_min_0 = totalSize - tmp2__anonymous__z9zvc9 | 0;
          tmp$ret$3 = Math.min(tmp0_min_0, tmp1_min_0);
          outPositions[i] = tmp$ret$3;
          var tmp$ret$4;
          // Inline function 'kotlin.math.min' call
          var tmp2_min_0 = (totalSize - outPositions[i] | 0) - tmp2__anonymous__z9zvc9 | 0;
          tmp$ret$4 = Math.min(spacePx, tmp2_min_0);
          lastSpace = tmp$ret$4;
          occupied = (outPositions[i] + tmp2__anonymous__z9zvc9 | 0) + lastSpace | 0;
        }
         while (0 <= inductionVariable_0);
    }
    occupied = occupied - lastSpace | 0;
    if (!(this.alignment_1 == null) ? occupied < totalSize : false) {
      var groupPosition = this.alignment_1(totalSize - occupied | 0, layoutDirection);
      var inductionVariable_1 = 0;
      var last_0 = outPositions.length - 1 | 0;
      if (inductionVariable_1 <= last_0)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var tmp1_array = outPositions;
          var tmp2_index0 = index_0;
          tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] + groupPosition | 0;
        }
         while (inductionVariable_1 <= last_0);
    }
  };
  SpacedAligned.prototype.arrange_bbki90_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return this.arrange_6sc983_k$(_this__u8e3s4, totalSize, sizes, LayoutDirection_Ltr_getInstance(), outPositions);
  };
  SpacedAligned.prototype.toString = function () {
    return (this.rtlMirror_1 ? '' : 'Absolute') + 'Arrangement#spacedAligned(' + new Dp(this.space_1) + ', ' + this.alignment_1 + ')';
  };
  SpacedAligned.prototype.component1_z2a8sv_k$ = function () {
    return this.space_1;
  };
  SpacedAligned.prototype.component2_7eebsb_k$ = function () {
    return this.rtlMirror_1;
  };
  SpacedAligned.prototype.component3_7eebsa_k$ = function () {
    return this.alignment_1;
  };
  SpacedAligned.prototype.copy_f6k3do_k$ = function (space, rtlMirror, alignment) {
    return new SpacedAligned(space, rtlMirror, alignment);
  };
  SpacedAligned.prototype.copy$default_iauowy_k$ = function (space, rtlMirror, alignment, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      space = this.space_1;
    if (!(($mask0 & 2) === 0))
      rtlMirror = this.rtlMirror_1;
    if (!(($mask0 & 4) === 0))
      alignment = this.alignment_1;
    return this.copy_f6k3do_k$(space, rtlMirror, alignment);
  };
  SpacedAligned.prototype.hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.space_1);
    result = imul(result, 31) + (this.rtlMirror_1 | 0) | 0;
    result = imul(result, 31) + (this.alignment_1 == null ? 0 : hashCode(this.alignment_1)) | 0;
    return result;
  };
  SpacedAligned.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpacedAligned))
      return false;
    var tmp0_other_with_cast = other instanceof SpacedAligned ? other : THROW_CCE();
    if (!equals(this.space_1, tmp0_other_with_cast.space_1))
      return false;
    if (!(this.rtlMirror_1 === tmp0_other_with_cast.rtlMirror_1))
      return false;
    if (!equals(this.alignment_1, tmp0_other_with_cast.alignment_1))
      return false;
    return true;
  };
  SpacedAligned.$metadata$ = classMeta('SpacedAligned', [HorizontalOrVertical]);
  function forEachIndexed(_this__u8e3s4, $this, reversed, action) {
    if (!reversed) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject = _this__u8e3s4;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        action(tmp1, item);
      }
    } else {
      var inductionVariable_0 = _this__u8e3s4.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          action(i, _this__u8e3s4[i]);
        }
         while (0 <= inductionVariable_0);
    }
  }
  function Arrangement$Start$1() {
  }
  Arrangement$Start$1.prototype.arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeLeftOrTop_1r2n9x_k$(sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeRightOrBottom_j5u2x1_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  Arrangement$Start$1.prototype.toString = function () {
    return 'Arrangement#Start';
  };
  Arrangement$Start$1.$metadata$ = classMeta(undefined, [Horizontal]);
  function Arrangement$End$1() {
  }
  Arrangement$End$1.prototype.arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeRightOrBottom_j5u2x1_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeLeftOrTop_1r2n9x_k$(sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  Arrangement$End$1.prototype.toString = function () {
    return 'Arrangement#End';
  };
  Arrangement$End$1.$metadata$ = classMeta(undefined, [Horizontal]);
  function Arrangement$Top$1() {
  }
  Arrangement$Top$1.prototype.arrange_bbki90_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeLeftOrTop_1r2n9x_k$(sizes, outPositions, false);
  };
  Arrangement$Top$1.prototype.toString = function () {
    return 'Arrangement#Top';
  };
  Arrangement$Top$1.$metadata$ = classMeta(undefined, [Vertical]);
  function Arrangement$Bottom$1() {
  }
  Arrangement$Bottom$1.prototype.arrange_bbki90_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeRightOrBottom_j5u2x1_k$(totalSize, sizes, outPositions, false);
  };
  Arrangement$Bottom$1.prototype.toString = function () {
    return 'Arrangement#Bottom';
  };
  Arrangement$Bottom$1.$metadata$ = classMeta(undefined, [Vertical]);
  function Arrangement$Center$1() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    tmp.spacing_1 = tmp$ret$0;
  }
  Arrangement$Center$1.prototype.get_spacing_kuwe3v_k$ = function () {
    return this.spacing_1;
  };
  Arrangement$Center$1.prototype.arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeCenter_icok0k_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeCenter_icok0k_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  Arrangement$Center$1.prototype.arrange_bbki90_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeCenter_icok0k_k$(totalSize, sizes, outPositions, false);
  };
  Arrangement$Center$1.prototype.toString = function () {
    return 'Arrangement#Center';
  };
  Arrangement$Center$1.$metadata$ = classMeta(undefined, [HorizontalOrVertical]);
  function Arrangement$SpaceEvenly$1() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    tmp.spacing_1 = tmp$ret$0;
  }
  Arrangement$SpaceEvenly$1.prototype.get_spacing_kuwe3v_k$ = function () {
    return this.spacing_1;
  };
  Arrangement$SpaceEvenly$1.prototype.arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeSpaceEvenly_ojzjdq_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeSpaceEvenly_ojzjdq_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  Arrangement$SpaceEvenly$1.prototype.arrange_bbki90_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeSpaceEvenly_ojzjdq_k$(totalSize, sizes, outPositions, false);
  };
  Arrangement$SpaceEvenly$1.prototype.toString = function () {
    return 'Arrangement#SpaceEvenly';
  };
  Arrangement$SpaceEvenly$1.$metadata$ = classMeta(undefined, [HorizontalOrVertical]);
  function Arrangement$SpaceBetween$1() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    tmp.spacing_1 = tmp$ret$0;
  }
  Arrangement$SpaceBetween$1.prototype.get_spacing_kuwe3v_k$ = function () {
    return this.spacing_1;
  };
  Arrangement$SpaceBetween$1.prototype.arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeSpaceBetween_8d7z33_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeSpaceBetween_8d7z33_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  Arrangement$SpaceBetween$1.prototype.arrange_bbki90_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeSpaceBetween_8d7z33_k$(totalSize, sizes, outPositions, false);
  };
  Arrangement$SpaceBetween$1.prototype.toString = function () {
    return 'Arrangement#SpaceBetween';
  };
  Arrangement$SpaceBetween$1.$metadata$ = classMeta(undefined, [HorizontalOrVertical]);
  function Arrangement$SpaceAround$1() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    tmp.spacing_1 = tmp$ret$0;
  }
  Arrangement$SpaceAround$1.prototype.get_spacing_kuwe3v_k$ = function () {
    return this.spacing_1;
  };
  Arrangement$SpaceAround$1.prototype.arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeSpaceAround_2yd3pg_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeSpaceAround_2yd3pg_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  Arrangement$SpaceAround$1.prototype.arrange_bbki90_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeSpaceAround_2yd3pg_k$(totalSize, sizes, outPositions, false);
  };
  Arrangement$SpaceAround$1.prototype.toString = function () {
    return 'Arrangement#SpaceAround';
  };
  Arrangement$SpaceAround$1.$metadata$ = classMeta(undefined, [HorizontalOrVertical]);
  function Arrangement$spacedBy$lambda(size, layoutDirection) {
    return Companion_getInstance().Start_1.align_a5f08y_k$(0, size, layoutDirection);
  }
  function Arrangement$spacedBy$lambda_0($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_a5f08y_k$(0, size, layoutDirection);
    };
  }
  function Arrangement$spacedBy$lambda_1($alignment) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return $alignment.align_1fj06d_k$(0, size);
    };
  }
  function Arrangement$aligned$lambda($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_a5f08y_k$(0, size, layoutDirection);
    };
  }
  function Arrangement$aligned$lambda_0($alignment) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return $alignment.align_1fj06d_k$(0, size);
    };
  }
  function Arrangement() {
    Arrangement_instance = this;
    var tmp = this;
    tmp.Start_1 = new Arrangement$Start$1();
    var tmp_0 = this;
    tmp_0.End_1 = new Arrangement$End$1();
    var tmp_1 = this;
    tmp_1.Top_1 = new Arrangement$Top$1();
    var tmp_2 = this;
    tmp_2.Bottom_1 = new Arrangement$Bottom$1();
    var tmp_3 = this;
    tmp_3.Center_1 = new Arrangement$Center$1();
    var tmp_4 = this;
    tmp_4.SpaceEvenly_1 = new Arrangement$SpaceEvenly$1();
    var tmp_5 = this;
    tmp_5.SpaceBetween_1 = new Arrangement$SpaceBetween$1();
    var tmp_6 = this;
    tmp_6.SpaceAround_1 = new Arrangement$SpaceAround$1();
  }
  Arrangement.prototype.get_Start_ih4i6x_k$ = function () {
    return this.Start_1;
  };
  Arrangement.prototype.get_End_18ju7i_k$ = function () {
    return this.End_1;
  };
  Arrangement.prototype.get_Top_18jj1w_k$ = function () {
    return this.Top_1;
  };
  Arrangement.prototype.get_Bottom_3m75bg_k$ = function () {
    return this.Bottom_1;
  };
  Arrangement.prototype.get_Center_3arb0i_k$ = function () {
    return this.Center_1;
  };
  Arrangement.prototype.get_SpaceEvenly_3s2yx0_k$ = function () {
    return this.SpaceEvenly_1;
  };
  Arrangement.prototype.get_SpaceBetween_5p3wqd_k$ = function () {
    return this.SpaceBetween_1;
  };
  Arrangement.prototype.get_SpaceAround_1tvu22_k$ = function () {
    return this.SpaceAround_1;
  };
  Arrangement.prototype.spacedBy_vy2thv_k$ = function (space) {
    return new SpacedAligned(space, true, Arrangement$spacedBy$lambda);
  };
  Arrangement.prototype.spacedBy_junro7_k$ = function (space, alignment) {
    return new SpacedAligned(space, true, Arrangement$spacedBy$lambda_0(alignment));
  };
  Arrangement.prototype.spacedBy_osvfph_k$ = function (space, alignment) {
    return new SpacedAligned(space, false, Arrangement$spacedBy$lambda_1(alignment));
  };
  Arrangement.prototype.aligned_2187lk_k$ = function (alignment) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    var tmp = tmp$ret$0;
    return new SpacedAligned(tmp, true, Arrangement$aligned$lambda(alignment));
  };
  Arrangement.prototype.aligned_8fzwhi_k$ = function (alignment) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    var tmp = tmp$ret$0;
    return new SpacedAligned(tmp, false, Arrangement$aligned$lambda_0(alignment));
  };
  Arrangement.prototype.placeRightOrBottom_j5u2x1_k$ = function (totalSize, size, outPosition, reverseInput) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var indexedObject = size;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      tmp$ret$0 = tmp0__anonymous__q1qw7t + element | 0;
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    var consumedSize = tmp$ret$1;
    var current = totalSize - consumedSize | 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject_0 = size;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var item = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp1__anonymous__uwfjfc = tmp1;
        outPosition[tmp1__anonymous__uwfjfc] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = size[i];
          outPosition[i] = current;
          current = current + tmp2__anonymous__z9zvc9 | 0;
        }
         while (0 <= inductionVariable_1);
    }
  };
  Arrangement.prototype.placeLeftOrTop_1r2n9x_k$ = function (size, outPosition, reverseInput) {
    var current = 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject = size;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeLeftOrTop.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp0__anonymous__q1qw7t = tmp1;
        outPosition[tmp0__anonymous__q1qw7t] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_0 = size.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeLeftOrTop.<anonymous>' call
          var tmp1__anonymous__uwfjfc = size[i];
          outPosition[i] = current;
          current = current + tmp1__anonymous__uwfjfc | 0;
        }
         while (0 <= inductionVariable_0);
    }
  };
  Arrangement.prototype.placeCenter_icok0k_k$ = function (totalSize, size, outPosition, reverseInput) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var indexedObject = size;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      tmp$ret$0 = tmp0__anonymous__q1qw7t + element | 0;
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    var consumedSize = tmp$ret$1;
    var current = (totalSize - consumedSize | 0) / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject_0 = size;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var item = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp1__anonymous__uwfjfc = tmp1;
        var tmp$ret$2;
        // Inline function 'kotlin.math.roundToInt' call
        var tmp0_roundToInt = current;
        tmp$ret$2 = roundToInt(tmp0_roundToInt);
        outPosition[tmp1__anonymous__uwfjfc] = tmp$ret$2;
        current = current + item;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = size[i];
          var tmp$ret$3;
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt_0 = current;
          tmp$ret$3 = roundToInt(tmp0_roundToInt_0);
          outPosition[i] = tmp$ret$3;
          current = current + tmp2__anonymous__z9zvc9;
        }
         while (0 <= inductionVariable_1);
    }
  };
  Arrangement.prototype.placeSpaceEvenly_ojzjdq_k$ = function (totalSize, size, outPosition, reverseInput) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var indexedObject = size;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      tmp$ret$0 = tmp0__anonymous__q1qw7t + element | 0;
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    var consumedSize = tmp$ret$1;
    var gapSize = (totalSize - consumedSize | 0) / (size.length + 1 | 0);
    var current = gapSize;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject_0 = size;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var item = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp1__anonymous__uwfjfc = tmp1;
        var tmp$ret$2;
        // Inline function 'kotlin.math.roundToInt' call
        var tmp0_roundToInt = current;
        tmp$ret$2 = roundToInt(tmp0_roundToInt);
        outPosition[tmp1__anonymous__uwfjfc] = tmp$ret$2;
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = size[i];
          var tmp$ret$3;
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt_0 = current;
          tmp$ret$3 = roundToInt(tmp0_roundToInt_0);
          outPosition[i] = tmp$ret$3;
          current = current + (tmp2__anonymous__z9zvc9 + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  Arrangement.prototype.placeSpaceBetween_8d7z33_k$ = function (totalSize, size, outPosition, reverseInput) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var indexedObject = size;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      tmp$ret$0 = tmp0__anonymous__q1qw7t + element | 0;
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    var consumedSize = tmp$ret$1;
    var tmp;
    if (size.length > 1) {
      tmp = (totalSize - consumedSize | 0) / (size.length - 1 | 0);
    } else {
      tmp = 0.0;
    }
    var gapSize = tmp;
    var current = 0.0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject_0 = size;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var item = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp1__anonymous__uwfjfc = tmp1;
        var tmp$ret$2;
        // Inline function 'kotlin.math.roundToInt' call
        var tmp0_roundToInt = current;
        tmp$ret$2 = roundToInt(tmp0_roundToInt);
        outPosition[tmp1__anonymous__uwfjfc] = tmp$ret$2;
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = size[i];
          var tmp$ret$3;
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt_0 = current;
          tmp$ret$3 = roundToInt(tmp0_roundToInt_0);
          outPosition[i] = tmp$ret$3;
          current = current + (tmp2__anonymous__z9zvc9 + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  Arrangement.prototype.placeSpaceAround_2yd3pg_k$ = function (totalSize, size, outPosition, reverseInput) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var indexedObject = size;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      tmp$ret$0 = tmp0__anonymous__q1qw7t + element | 0;
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    var consumedSize = tmp$ret$1;
    var tmp;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$2 = size.length === 0;
    tmp$ret$3 = !tmp$ret$2;
    if (tmp$ret$3) {
      tmp = (totalSize - consumedSize | 0) / size.length;
    } else {
      tmp = 0.0;
    }
    var gapSize = tmp;
    var current = gapSize / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject_0 = size;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var item = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp1__anonymous__uwfjfc = tmp1;
        var tmp$ret$4;
        // Inline function 'kotlin.math.roundToInt' call
        var tmp0_roundToInt = current;
        tmp$ret$4 = roundToInt(tmp0_roundToInt);
        outPosition[tmp1__anonymous__uwfjfc] = tmp$ret$4;
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = size[i];
          var tmp$ret$5;
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt_0 = current;
          tmp$ret$5 = roundToInt(tmp0_roundToInt_0);
          outPosition[i] = tmp$ret$5;
          current = current + (tmp2__anonymous__z9zvc9 + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  Arrangement.$metadata$ = objectMeta('Arrangement');
  var Arrangement_instance;
  function Arrangement_getInstance() {
    if (Arrangement_instance == null)
      new Arrangement();
    return Arrangement_instance;
  }
  function get_DefaultBoxMeasurePolicy() {
    init_properties_Box_kt_lftnux();
    return DefaultBoxMeasurePolicy;
  }
  var DefaultBoxMeasurePolicy;
  function get_EmptyBoxMeasurePolicy() {
    init_properties_Box_kt_lftnux();
    return EmptyBoxMeasurePolicy;
  }
  var EmptyBoxMeasurePolicy;
  function boxMeasurePolicy(alignment, propagateMinConstraints) {
    init_properties_Box_kt_lftnux();
    var tmp = boxMeasurePolicy$lambda(propagateMinConstraints, alignment);
    return new sam$androidx_compose_ui_layout_MeasurePolicy$0_0(tmp);
  }
  function get_matchesParentSize(_this__u8e3s4) {
    init_properties_Box_kt_lftnux();
    var tmp0_safe_receiver = get_boxChildData(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.matchParentSize_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function placeInBox(_this__u8e3s4, placeable, measurable, layoutDirection, boxWidth, boxHeight, alignment) {
    init_properties_Box_kt_lftnux();
    var tmp0_safe_receiver = get_boxChildData(measurable);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.alignment_1;
    var childAlignment = tmp1_elvis_lhs == null ? alignment : tmp1_elvis_lhs;
    var position = childAlignment.align_f85h4l_k$(IntSize(placeable.width_1, placeable.height_1), IntSize(boxWidth, boxHeight), layoutDirection);
    _this__u8e3s4.place$default_i08ls_k$(placeable, position, 0.0, 2, null);
  }
  function BoxChildData_init_$Init$(alignment, matchParentSize, inspectorInfo, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      matchParentSize = false;
    if (!(($mask0 & 4) === 0))
      inspectorInfo = get_NoInspectorInfo();
    BoxChildData.call($this, alignment, matchParentSize, inspectorInfo);
    return $this;
  }
  function BoxChildData_init_$Create$(alignment, matchParentSize, inspectorInfo, $mask0, $marker) {
    return BoxChildData_init_$Init$(alignment, matchParentSize, inspectorInfo, $mask0, $marker, Object.create(BoxChildData.prototype));
  }
  function BoxChildData(alignment, matchParentSize, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.alignment_1 = alignment;
    this.matchParentSize_1 = matchParentSize;
  }
  BoxChildData.prototype.set_alignment_ks94gw_k$ = function (_set____db54di) {
    this.alignment_1 = _set____db54di;
  };
  BoxChildData.prototype.get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  BoxChildData.prototype.set_matchParentSize_t943cm_k$ = function (_set____db54di) {
    this.matchParentSize_1 = _set____db54di;
  };
  BoxChildData.prototype.get_matchParentSize_onsyh3_k$ = function () {
    return this.matchParentSize_1;
  };
  BoxChildData.prototype.modifyParentData_x7ztp7_k$ = function (_this__u8e3s4, parentData) {
    return this;
  };
  BoxChildData.prototype.equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof BoxChildData ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.alignment_1, otherModifier.alignment_1) ? this.matchParentSize_1 === otherModifier.matchParentSize_1 : false;
  };
  BoxChildData.prototype.hashCode = function () {
    var result = hashCode(this.alignment_1);
    result = imul(31, result) + (this.matchParentSize_1 | 0) | 0;
    return result;
  };
  BoxChildData.prototype.toString = function () {
    return 'BoxChildData(alignment=' + this.alignment_1 + ', matchParentSize=' + this.matchParentSize_1 + ')';
  };
  BoxChildData.$metadata$ = classMeta('BoxChildData', [ParentDataModifier], undefined, undefined, undefined, InspectorValueInfo.prototype);
  function get_boxChildData(_this__u8e3s4) {
    init_properties_Box_kt_lftnux();
    var tmp = _this__u8e3s4.get_parentData_o87vnn_k$();
    return tmp instanceof BoxChildData ? tmp : null;
  }
  function Box$composable(modifier, $composer, $changed) {
    init_properties_Box_kt_lftnux();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-233896031);
    sourceInformation($composer_0, 'C(Box$composable)200@7989L70:Box.kt#2w3rfo');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-233896031, $dirty, -1, 'androidx.compose.foundation.layout.Box$composable (Box.kt:199)');
      }
      var tmp0_measurePolicy = get_EmptyBoxMeasurePolicy();
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp0_Layout$composable = $composer_0;
      var tmp1_Layout$composable = 384 | 112 & $dirty << 3;
      var modifier_0 = modifier;
      var $composer_1 = tmp0_Layout$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(1725976829);
      sourceInformation($composer_1, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance_0();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_1;
      var $composer_2 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_2, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_2.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_2);
      tmp$ret$0 = tmp0;
      var density = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua = $composer_1;
      var $composer_3 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_3, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_3.consume_93tbl1_k$(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_3);
      tmp$ret$1 = tmp0_0;
      var layoutDirection = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro = $composer_1;
      var $composer_4 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_4.consume_93tbl1_k$(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_4);
      tmp$ret$2 = tmp0_1;
      var viewConfiguration = tmp$ret$2;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_1().Constructor_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
      var tmp8_ReusableComposeNode$composable = $composer_1;
      var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp1_Layout$composable << 9;
      var $composer_5 = tmp8_ReusableComposeNode$composable;
      var tmp = $composer_5.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_5.startReusableNode_jk07k2_k$();
      if ($composer_5.get_inserting_25mlsw_k$()) {
        $composer_5.createNode_13g769_k$(tmp6_ReusableComposeNode$composable);
      } else {
        $composer_5.useNode_inlzo8_k$();
      }
      $composer_5.disableReusing_y35tew_k$();
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_5);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, tmp0_measurePolicy, Companion_getInstance_1().SetMeasurePolicy_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_1().SetDensity_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_1().SetLayoutDirection_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_1().SetViewConfiguration_1);
      $composer_5.enableReusing_6k309v_k$();
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_5)), $composer_5, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_5.startReplaceableGroup_rp6air_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = $composer_5;
      var tmp3__anonymous__ufb84q = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_6 = tmp2__anonymous__z9zvc9;
      $composer_6.startReplaceableGroup_rp6air_k$(1021196736);
      sourceInformation($composer_6, 'C:Box.kt#2w3rfo');
      if (!((tmp3__anonymous__ufb84q & 11) === 2) ? true : !$composer_6.get_skipping_3owdve_k$()) {
      } else {
        $composer_6.skipToGroupEnd_lhns3f_k$();
      }
      $composer_6.endReplaceableGroup_er37p7_k$();
      $composer_5.endReplaceableGroup_er37p7_k$();
      $composer_5.endNode_3mkr10_k$();
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Box$composable$lambda$ref(modifier, $changed));
    }
  }
  function Box$composable_0(modifier, contentAlignment, propagateMinConstraints, content, $composer, $changed, $default) {
    init_properties_Box_kt_lftnux();
    var modifier_0 = modifier;
    var contentAlignment_0 = contentAlignment;
    var propagateMinConstraints_0 = propagateMinConstraints;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1330882304);
    sourceInformation($composer_0, 'C(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
    if (!(($default & 1) === 0))
      modifier_0 = Companion_getInstance_0();
    if (!(($default & 2) === 0))
      contentAlignment_0 = Companion_getInstance().TopStart_1;
    if (!(($default & 4) === 0))
      propagateMinConstraints_0 = false;
    var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment_0, propagateMinConstraints_0, $composer_0, 14 & $changed >> 3 | 112 & $changed >> 3);
    // Inline function 'androidx.compose.ui.layout.Layout$composable' call
    var tmp0_Layout$composable = modifier_0;
    var tmp1_Layout$composable = $composer_0;
    var tmp2_Layout$composable = 112 & $changed << 3;
    var modifier_1 = tmp0_Layout$composable;
    var $composer_1 = tmp1_Layout$composable;
    $composer_1.startReplaceableGroup_rp6air_k$(1725976829);
    sourceInformation($composer_1, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
    if (!(0 === 0))
      modifier_1 = Companion_getInstance_0();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
    var tmp1_$get_current$$composable_gn3xww = $composer_1;
    var $composer_2 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_2, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_2.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_2);
    tmp$ret$0 = tmp0;
    var density = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
    var tmp3_$get_current$$composable_fm67ua = $composer_1;
    var $composer_3 = tmp3_$get_current$$composable_fm67ua;
    sourceInformationMarkerStart($composer_3, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_0 = $composer_3.consume_93tbl1_k$(tmp2_$get_current$$composable_g4n2vl);
    sourceInformationMarkerEnd($composer_3);
    tmp$ret$1 = tmp0_0;
    var layoutDirection = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
    var tmp5_$get_current$$composable_el8hro = $composer_1;
    var $composer_4 = tmp5_$get_current$$composable_el8hro;
    sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_1 = $composer_4.consume_93tbl1_k$(tmp4_$get_current$$composable_f3pcsz);
    sourceInformationMarkerEnd($composer_4);
    tmp$ret$2 = tmp0_1;
    var viewConfiguration = tmp$ret$2;
    // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
    var tmp6_ReusableComposeNode$composable = Companion_getInstance_1().Constructor_1;
    var tmp7_ReusableComposeNode$composable = materializerOf(modifier_1);
    var tmp8_ReusableComposeNode$composable = $composer_1;
    var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
    var $composer_5 = tmp8_ReusableComposeNode$composable;
    var tmp = $composer_5.get_applier_bupu8u_k$();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_5.startReusableNode_jk07k2_k$();
    if ($composer_5.get_inserting_25mlsw_k$()) {
      $composer_5.createNode_13g769_k$(tmp6_ReusableComposeNode$composable);
    } else {
      $composer_5.useNode_inlzo8_k$();
    }
    $composer_5.disableReusing_y35tew_k$();
    // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
    var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_5);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_1().SetMeasurePolicy_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_1().SetDensity_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_1().SetLayoutDirection_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_1().SetViewConfiguration_1);
    $composer_5.enableReusing_6k309v_k$();
    tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_5)), $composer_5, 112 & tmp9_ReusableComposeNode$composable >> 3);
    $composer_5.startReplaceableGroup_rp6air_k$(2058660585);
    // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
    var tmp3__anonymous__ufb84q = $composer_5;
    var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
    var $composer_6 = tmp3__anonymous__ufb84q;
    $composer_6.startReplaceableGroup_rp6air_k$(-2137368960);
    sourceInformation($composer_6, 'C72@3384L9:Box.kt#2w3rfo');
    if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_6.get_skipping_3owdve_k$()) {
      content(BoxScopeInstance_getInstance(), $composer_6, 6 | 112 & $changed >> 6);
    } else {
      $composer_6.skipToGroupEnd_lhns3f_k$();
    }
    $composer_6.endReplaceableGroup_er37p7_k$();
    $composer_5.endReplaceableGroup_er37p7_k$();
    $composer_5.endNode_3mkr10_k$();
    $composer_1.endReplaceableGroup_er37p7_k$();
    $composer_0.endReplaceableGroup_er37p7_k$();
  }
  function BoxScope() {
  }
  BoxScope.$metadata$ = interfaceMeta('BoxScope');
  function rememberBoxMeasurePolicy$composable(alignment, propagateMinConstraints, $composer, $changed) {
    init_properties_Box_kt_lftnux();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1048091512);
    sourceInformation($composer_0, 'C(rememberBoxMeasurePolicy$composable)86@3713L113:Box.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(-1048091512, $changed, -1, 'androidx.compose.foundation.layout.rememberBoxMeasurePolicy$composable (Box.kt:80)');
    }
    var tmp;
    if (equals(alignment, Companion_getInstance().TopStart_1) ? !propagateMinConstraints : false) {
      tmp = get_DefaultBoxMeasurePolicy();
    } else {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var tmp1_remember$composable = 14 & $changed | 112 & $changed;
      var $composer_1 = tmp0_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(-1124426577);
      sourceInformation($composer_1, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = !!($composer_1.changed_ga7h3f_k$(alignment) | $composer_1.changed_ga7h3f_k$(propagateMinConstraints));
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_2().Empty_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.layout.rememberBoxMeasurePolicy$composable.<anonymous>' call
        tmp$ret$0 = boxMeasurePolicy(alignment, propagateMinConstraints);
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
      tmp = tmp$ret$4;
    }
    var tmp1_group = tmp;
    var tmp0_0 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  }
  function BoxScopeInstance$align$lambda($alignment) {
    return function ($this$null) {
      $this$null.name_1 = 'align';
      $this$null.value_1 = $alignment;
      return Unit_getInstance();
    };
  }
  function BoxScopeInstance$matchParentSize$lambda($this$null) {
    // Inline function 'androidx.compose.foundation.layout.BoxScopeInstance.matchParentSize.<anonymous>' call
    $this$null.name_1 = 'matchParentSize';
    return Unit_getInstance();
  }
  function BoxScopeInstance() {
    BoxScopeInstance_instance = this;
  }
  BoxScopeInstance.prototype.align_eg370n_k$ = function (_this__u8e3s4, alignment) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = BoxScopeInstance$align$lambda(alignment);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new BoxChildData(alignment, false, tmp$ret$0));
  };
  BoxScopeInstance.prototype.matchParentSize_f3w2c1_k$ = function (_this__u8e3s4) {
    var tmp = Companion_getInstance().Center_1;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp_0;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp_0 = BoxScopeInstance$matchParentSize$lambda;
    } else {
      tmp_0 = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp_0;
    return _this__u8e3s4.then_5qw5wu_k$(new BoxChildData(tmp, true, tmp$ret$0));
  };
  BoxScopeInstance.$metadata$ = objectMeta('BoxScopeInstance', [BoxScope]);
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    if (BoxScopeInstance_instance == null)
      new BoxScopeInstance();
    return BoxScopeInstance_instance;
  }
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.function_1 = function_0;
  }
  sam$androidx_compose_ui_layout_MeasurePolicy$0.prototype.measure_i7pm3b_k$ = function (_this__u8e3s4, measurables, constraints) {
    return this.function_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  sam$androidx_compose_ui_layout_MeasurePolicy$0.$metadata$ = classMeta('sam$androidx_compose_ui_layout_MeasurePolicy$0', [MeasurePolicy]);
  function sam$androidx_compose_ui_layout_MeasurePolicy$0_0(function_0) {
    this.function_1 = function_0;
  }
  sam$androidx_compose_ui_layout_MeasurePolicy$0_0.prototype.measure_i7pm3b_k$ = function (_this__u8e3s4, measurables, constraints) {
    return this.function_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  sam$androidx_compose_ui_layout_MeasurePolicy$0_0.$metadata$ = classMeta('sam$androidx_compose_ui_layout_MeasurePolicy$0', [MeasurePolicy]);
  function Box$composable$lambda($modifier, $$changed, $composer, $force) {
    return Box$composable($modifier, $composer, $$changed | 1);
  }
  function EmptyBoxMeasurePolicy$lambda($this$MeasurePolicy, _anonymous_parameter_0__qggqh8, constraints) {
    init_properties_Box_kt_lftnux();
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints.value_1);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints.value_1);
    return $this$MeasurePolicy.layout$default_yb6zmd_k$(tmp, tmp_0, null, EmptyBoxMeasurePolicy$lambda$lambda, 4, null);
  }
  function EmptyBoxMeasurePolicy$lambda$lambda($this$layout) {
    init_properties_Box_kt_lftnux();
    return Unit_getInstance();
  }
  function boxMeasurePolicy$lambda$lambda($this$layout) {
    init_properties_Box_kt_lftnux();
    return Unit_getInstance();
  }
  function boxMeasurePolicy$lambda$lambda_0($placeable, $measurable, $this_MeasurePolicy, $boxWidth, $boxHeight, $alignment) {
    return function ($this$layout) {
      placeInBox($this$layout, $placeable, $measurable, $this_MeasurePolicy.get_layoutDirection_7e37v0_k$(), $boxWidth, $boxHeight, $alignment);
      return Unit_getInstance();
    };
  }
  function boxMeasurePolicy$lambda$lambda_1($placeables, $measurables, $this_MeasurePolicy, $boxWidth, $boxHeight, $alignment) {
    return function ($this$layout) {
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.boxMeasurePolicy.<anonymous>.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp0__anonymous__q1qw7t = tmp1;
        if (item instanceof Placeable)
          item;
        else
          THROW_CCE();
        var measurable = $measurables.get_fkrdnv_k$(tmp0__anonymous__q1qw7t);
        placeInBox($this$layout, item, measurable, $this_MeasurePolicy.get_layoutDirection_7e37v0_k$(), $boxWidth._v, $boxHeight._v, $alignment);
      }
      return Unit_getInstance();
    };
  }
  function boxMeasurePolicy$lambda($propagateMinConstraints, $alignment) {
    return function ($this$MeasurePolicy, measurables, constraints) {
      var tmp;
      if (measurables.isEmpty_y1axqb_k$()) {
        var tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(constraints.value_1);
        var tmp_1 = _Constraints___get_minHeight__impl__ev4bgx(constraints.value_1);
        return $this$MeasurePolicy.layout$default_yb6zmd_k$(tmp_0, tmp_1, null, boxMeasurePolicy$lambda$lambda, 4, null);
      }
      var tmp_2;
      if ($propagateMinConstraints) {
        tmp_2 = constraints.value_1;
      } else {
        var tmp_3 = constraints.value_1;
        tmp_2 = Constraints__copy$default_impl_f452rp(tmp_3, 0, 0, 0, 0, 10, null);
      }
      var contentConstraints = tmp_2;
      var tmp_4;
      if (measurables.get_size_woubt6_k$() === 1) {
        var measurable = measurables.get_fkrdnv_k$(0);
        var boxWidth;
        var boxHeight;
        var placeable;
        if (!get_matchesParentSize(measurable)) {
          placeable = measurable.measure_ikak0q_k$(contentConstraints);
          var tmp$ret$0;
          // Inline function 'kotlin.math.max' call
          var tmp0_max = _Constraints___get_minWidth__impl__hi9lfi(constraints.value_1);
          var tmp1_max = placeable.width_1;
          tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
          boxWidth = tmp$ret$0;
          var tmp$ret$1;
          // Inline function 'kotlin.math.max' call
          var tmp2_max = _Constraints___get_minHeight__impl__ev4bgx(constraints.value_1);
          var tmp3_max = placeable.height_1;
          tmp$ret$1 = Math.max(tmp2_max, tmp3_max);
          boxHeight = tmp$ret$1;
        } else {
          boxWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints.value_1);
          boxHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints.value_1);
          placeable = measurable.measure_ikak0q_k$(Companion_getInstance_3().fixed_bmujv7_k$(_Constraints___get_minWidth__impl__hi9lfi(constraints.value_1), _Constraints___get_minHeight__impl__ev4bgx(constraints.value_1)));
        }
        return $this$MeasurePolicy.layout$default_yb6zmd_k$(boxWidth, boxHeight, null, boxMeasurePolicy$lambda$lambda_0(placeable, measurable, $this$MeasurePolicy, boxWidth, boxHeight, $alignment), 4, null);
      }
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp4_arrayOfNulls = measurables.get_size_woubt6_k$();
      tmp$ret$2 = fillArrayVal(Array(tmp4_arrayOfNulls), null);
      var placeables = tmp$ret$2;
      var hasMatchParentSizeChildren = false;
      var boxWidth_0 = {_v: _Constraints___get_minWidth__impl__hi9lfi(constraints.value_1)};
      var boxHeight_0 = {_v: _Constraints___get_minHeight__impl__ev4bgx(constraints.value_1)};
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.get_size_woubt6_k$() - 1 | 0;
      var tmp_5;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.get_fkrdnv_k$(index);
          // Inline function 'androidx.compose.foundation.layout.boxMeasurePolicy.<anonymous>.<anonymous>' call
          if (!get_matchesParentSize(item)) {
            var placeable_0 = item.measure_ikak0q_k$(contentConstraints);
            placeables[index] = placeable_0;
            var tmp$ret$3;
            // Inline function 'kotlin.math.max' call
            var tmp0_max_0 = boxWidth_0._v;
            var tmp1_max_0 = placeable_0.width_1;
            tmp$ret$3 = Math.max(tmp0_max_0, tmp1_max_0);
            boxWidth_0._v = tmp$ret$3;
            var tmp$ret$4;
            // Inline function 'kotlin.math.max' call
            var tmp2_max_0 = boxHeight_0._v;
            var tmp3_max_0 = placeable_0.height_1;
            tmp$ret$4 = Math.max(tmp2_max_0, tmp3_max_0);
            boxHeight_0._v = tmp$ret$4;
          } else {
            hasMatchParentSizeChildren = true;
          }
        }
         while (inductionVariable <= last);
        tmp_5 = Unit_getInstance();
      }
      var tmp_6;
      if (hasMatchParentSizeChildren) {
        var tmp_7;
        var tmp_8 = boxWidth_0._v;
        Companion_getInstance_3();
        if (!(tmp_8 === 2147483647)) {
          tmp_7 = boxWidth_0._v;
        } else {
          tmp_7 = 0;
        }
        var tmp0_minWidth = tmp_7;
        var tmp_9;
        var tmp_10 = boxHeight_0._v;
        Companion_getInstance_3();
        if (!(tmp_10 === 2147483647)) {
          tmp_9 = boxHeight_0._v;
        } else {
          tmp_9 = 0;
        }
        var tmp1_minHeight = tmp_9;
        var tmp2_maxWidth = boxWidth_0._v;
        var tmp3_maxHeight = boxHeight_0._v;
        var matchParentSizeConstraints = Constraints_0(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        var last_0 = measurables.get_size_woubt6_k$() - 1 | 0;
        var tmp_11;
        if (inductionVariable_0 <= last_0) {
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_0 = measurables.get_fkrdnv_k$(index_0);
            // Inline function 'androidx.compose.foundation.layout.boxMeasurePolicy.<anonymous>.<anonymous>' call
            if (get_matchesParentSize(item_0)) {
              placeables[index_0] = item_0.measure_ikak0q_k$(matchParentSizeConstraints);
            }
          }
           while (inductionVariable_0 <= last_0);
          tmp_11 = Unit_getInstance();
        }
        tmp_6 = tmp_11;
      }
      var tmp_12 = boxWidth_0._v;
      var tmp_13 = boxHeight_0._v;
      return $this$MeasurePolicy.layout$default_yb6zmd_k$(tmp_12, tmp_13, null, boxMeasurePolicy$lambda$lambda_1(placeables, measurables, $this$MeasurePolicy, boxWidth_0, boxHeight_0, $alignment), 4, null);
    };
  }
  function Box$composable$lambda$ref($modifier, $$changed) {
    return function (p0, p1) {
      Box$composable$lambda($modifier, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Box_kt_kr8cbp;
  function init_properties_Box_kt_lftnux() {
    if (properties_initialized_Box_kt_kr8cbp) {
    } else {
      properties_initialized_Box_kt_kr8cbp = true;
      DefaultBoxMeasurePolicy = boxMeasurePolicy(Companion_getInstance().TopStart_1, false);
      var tmp = EmptyBoxMeasurePolicy$lambda;
      EmptyBoxMeasurePolicy = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp);
    }
  }
  function BoxWithConstraints$composable(modifier, contentAlignment, propagateMinConstraints, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var contentAlignment_0 = {_v: contentAlignment};
    var propagateMinConstraints_0 = {_v: propagateMinConstraints};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1571730894);
    sourceInformation($composer_0, 'C(BoxWithConstraints$composable)P(2,1,3)65@3186L67,66@3285L218,66@3258L245:BoxWithConstraints.kt#2w3rfo');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(contentAlignment_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(propagateMinConstraints_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(content) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (!(($default & 2) === 0)) {
        contentAlignment_0._v = Companion_getInstance().TopStart_1;
      }
      if (!(($default & 4) === 0)) {
        propagateMinConstraints_0._v = false;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1571730894, $dirty, -1, 'androidx.compose.foundation.layout.BoxWithConstraints$composable (BoxWithConstraints.kt:58)');
      }
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment_0._v, propagateMinConstraints_0._v, $composer_0, 14 & $dirty >> 3 | 112 & $dirty >> 3);
      var tmp = modifier_0._v;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var tmp1_remember$composable = 14 & $dirty >> 9;
      var $composer_1 = tmp0_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(-1124426577);
      sourceInformation($composer_1, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = !!($composer_1.changed_ga7h3f_k$(content) | $composer_1.changed_ga7h3f_k$(measurePolicy));
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_2().Empty_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.layout.BoxWithConstraints$composable.<anonymous>' call
        tmp$ret$0 = BoxWithConstraints$composable$lambda_0(measurePolicy, content, $dirty);
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
      SubcomposeLayout$composable(tmp, tmp$ret$4, $composer_0, 14 & $dirty, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(BoxWithConstraints$composable$lambda$ref(modifier_0, contentAlignment_0, propagateMinConstraints_0, content, $changed, $default));
    }
  }
  function BoxWithConstraintsScope() {
  }
  BoxWithConstraintsScope.$metadata$ = interfaceMeta('BoxWithConstraintsScope', [BoxScope]);
  function _get_density__l5pazb($this) {
    return $this.density_1;
  }
  function component1($this) {
    return $this.density_1;
  }
  function BoxWithConstraintsScopeImpl(density, constraints) {
    this.density_1 = density;
    this.constraints_1 = constraints;
    this.$$delegate_0__1 = BoxScopeInstance_getInstance();
  }
  BoxWithConstraintsScopeImpl.prototype.get_constraints_khg0u2_k$ = function () {
    return this.constraints_1;
  };
  BoxWithConstraintsScopeImpl.prototype.align_eg370n_k$ = function (_this__u8e3s4, alignment) {
    return this.$$delegate_0__1.align_eg370n_k$(_this__u8e3s4, alignment);
  };
  BoxWithConstraintsScopeImpl.prototype.matchParentSize_f3w2c1_k$ = function (_this__u8e3s4) {
    return this.$$delegate_0__1.matchParentSize_f3w2c1_k$(_this__u8e3s4);
  };
  BoxWithConstraintsScopeImpl.prototype.get_minWidth_iptkt4_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.density_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.foundation.layout.BoxWithConstraintsScopeImpl.<get-minWidth>.<anonymous>' call
    tmp$ret$0 = tmp0_with.toDp_2eugbd_k$(_Constraints___get_minWidth__impl__hi9lfi(this.constraints_1));
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  BoxWithConstraintsScopeImpl.prototype.get_maxWidth_fctp2y_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.density_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.foundation.layout.BoxWithConstraintsScopeImpl.<get-maxWidth>.<anonymous>' call
    tmp$ret$0 = _Constraints___get_hasBoundedWidth__impl__7hd0wr(this.constraints_1) ? tmp0_with.toDp_2eugbd_k$(_Constraints___get_maxWidth__impl__uuyqc(this.constraints_1)) : Companion_getInstance_4().Infinity_1;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  BoxWithConstraintsScopeImpl.prototype.get_minHeight_6vlbo5_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.density_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.foundation.layout.BoxWithConstraintsScopeImpl.<get-minHeight>.<anonymous>' call
    tmp$ret$0 = tmp0_with.toDp_2eugbd_k$(_Constraints___get_minHeight__impl__ev4bgx(this.constraints_1));
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  BoxWithConstraintsScopeImpl.prototype.get_maxHeight_2b1zct_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.density_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.foundation.layout.BoxWithConstraintsScopeImpl.<get-maxHeight>.<anonymous>' call
    tmp$ret$0 = _Constraints___get_hasBoundedHeight__impl__bsh4rw(this.constraints_1) ? tmp0_with.toDp_2eugbd_k$(_Constraints___get_maxHeight__impl__dt3e8z(this.constraints_1)) : Companion_getInstance_4().Infinity_1;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  BoxWithConstraintsScopeImpl.prototype.component2_bcaur6_k$ = function () {
    return this.constraints_1;
  };
  BoxWithConstraintsScopeImpl.prototype.copy_368myl_k$ = function (density, constraints) {
    return new BoxWithConstraintsScopeImpl(density, constraints);
  };
  BoxWithConstraintsScopeImpl.prototype.copy$default_fyqqs4_k$ = function (density, constraints, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      density = this.density_1;
    if (!(($mask0 & 2) === 0))
      constraints = this.constraints_1;
    return this.copy_368myl_k$(density, constraints);
  };
  BoxWithConstraintsScopeImpl.prototype.toString = function () {
    return 'BoxWithConstraintsScopeImpl(density=' + this.density_1 + ', constraints=' + new Constraints(this.constraints_1) + ')';
  };
  BoxWithConstraintsScopeImpl.prototype.hashCode = function () {
    var result = hashCode(this.density_1);
    result = imul(result, 31) + Constraints__hashCode_impl_ij7484(this.constraints_1) | 0;
    return result;
  };
  BoxWithConstraintsScopeImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BoxWithConstraintsScopeImpl))
      return false;
    var tmp0_other_with_cast = other instanceof BoxWithConstraintsScopeImpl ? other : THROW_CCE();
    if (!equals(this.density_1, tmp0_other_with_cast.density_1))
      return false;
    if (!equals(this.constraints_1, tmp0_other_with_cast.constraints_1))
      return false;
    return true;
  };
  BoxWithConstraintsScopeImpl.$metadata$ = classMeta('BoxWithConstraintsScopeImpl', [BoxWithConstraintsScope, BoxScope]);
  function BoxWithConstraints$composable$lambda($modifier, $contentAlignment, $propagateMinConstraints, $content, $$changed, $$default, $composer, $force) {
    return BoxWithConstraints$composable($modifier._v, $contentAlignment._v, $propagateMinConstraints._v, $content, $composer, $$changed | 1, $$default);
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function BoxWithConstraints$composable$lambda$lambda($content, $scope, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C68@3420L9:BoxWithConstraints.kt#2w3rfo');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1945019079, $changed, -1, 'androidx.compose.foundation.layout.BoxWithConstraints$composable.<anonymous>.<anonymous>.<anonymous> (BoxWithConstraints.kt:68)');
        }
        $content($scope, $composer_0, 112 & $$dirty >> 6);
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
  function BoxWithConstraints$composable$lambda_0($measurePolicy, $content, $$dirty) {
    return function ($this$SubcomposeLayout, constraints) {
      var scope = new BoxWithConstraintsScopeImpl($this$SubcomposeLayout, constraints.value_1);
      var measurables = $this$SubcomposeLayout.subcompose$composable_w3wgfm_k$(Unit_getInstance(), ComposableLambda$invoke$ref(composableLambdaInstance(-1945019079, true, BoxWithConstraints$composable$lambda$lambda($content, scope, $$dirty))));
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.BoxWithConstraints$composable.<anonymous>.<anonymous>.<anonymous>' call
      tmp$ret$0 = $measurePolicy.measure_i7pm3b_k$($this$SubcomposeLayout, measurables, constraints.value_1);
      tmp$ret$1 = tmp$ret$0;
      return tmp$ret$1;
    };
  }
  function BoxWithConstraints$composable$lambda$ref($modifier, $contentAlignment, $propagateMinConstraints, $content, $$changed, $$default) {
    return function (p0, p1) {
      BoxWithConstraints$composable$lambda($modifier, $contentAlignment, $propagateMinConstraints, $content, $$changed, $$default, p0, p1);
      return Unit_getInstance();
    };
  }
  function get_DefaultColumnMeasurePolicy() {
    init_properties_Column_kt_yghy2k();
    return DefaultColumnMeasurePolicy;
  }
  var DefaultColumnMeasurePolicy;
  function Column$composable(modifier, verticalArrangement, horizontalAlignment, content, $composer, $changed, $default) {
    init_properties_Column_kt_yghy2k();
    var modifier_0 = modifier;
    var verticalArrangement_0 = verticalArrangement;
    var horizontalAlignment_0 = horizontalAlignment;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(860130704);
    sourceInformation($composer_0, 'C(Column$composable)P(2,3,1)77@3913L61,78@3979L133:Column.kt#2w3rfo');
    if (!(($default & 1) === 0))
      modifier_0 = Companion_getInstance_0();
    if (!(($default & 2) === 0))
      verticalArrangement_0 = Arrangement_getInstance().Top_1;
    if (!(($default & 4) === 0))
      horizontalAlignment_0 = Companion_getInstance().Start_1;
    var measurePolicy = columnMeasurePolicy$composable(verticalArrangement_0, horizontalAlignment_0, $composer_0, 14 & $changed >> 3 | 112 & $changed >> 3);
    // Inline function 'androidx.compose.ui.layout.Layout$composable' call
    var tmp0_Layout$composable = modifier_0;
    var tmp1_Layout$composable = $composer_0;
    var tmp2_Layout$composable = 112 & $changed << 3;
    var modifier_1 = tmp0_Layout$composable;
    var $composer_1 = tmp1_Layout$composable;
    $composer_1.startReplaceableGroup_rp6air_k$(1725976829);
    sourceInformation($composer_1, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
    if (!(0 === 0))
      modifier_1 = Companion_getInstance_0();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
    var tmp1_$get_current$$composable_gn3xww = $composer_1;
    var $composer_2 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_2, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_2.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_2);
    tmp$ret$0 = tmp0;
    var density = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
    var tmp3_$get_current$$composable_fm67ua = $composer_1;
    var $composer_3 = tmp3_$get_current$$composable_fm67ua;
    sourceInformationMarkerStart($composer_3, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_0 = $composer_3.consume_93tbl1_k$(tmp2_$get_current$$composable_g4n2vl);
    sourceInformationMarkerEnd($composer_3);
    tmp$ret$1 = tmp0_0;
    var layoutDirection = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
    var tmp5_$get_current$$composable_el8hro = $composer_1;
    var $composer_4 = tmp5_$get_current$$composable_el8hro;
    sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_1 = $composer_4.consume_93tbl1_k$(tmp4_$get_current$$composable_f3pcsz);
    sourceInformationMarkerEnd($composer_4);
    tmp$ret$2 = tmp0_1;
    var viewConfiguration = tmp$ret$2;
    // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
    var tmp6_ReusableComposeNode$composable = Companion_getInstance_1().Constructor_1;
    var tmp7_ReusableComposeNode$composable = materializerOf(modifier_1);
    var tmp8_ReusableComposeNode$composable = $composer_1;
    var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
    var $composer_5 = tmp8_ReusableComposeNode$composable;
    var tmp = $composer_5.get_applier_bupu8u_k$();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_5.startReusableNode_jk07k2_k$();
    if ($composer_5.get_inserting_25mlsw_k$()) {
      $composer_5.createNode_13g769_k$(tmp6_ReusableComposeNode$composable);
    } else {
      $composer_5.useNode_inlzo8_k$();
    }
    $composer_5.disableReusing_y35tew_k$();
    // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
    var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_5);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_1().SetMeasurePolicy_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_1().SetDensity_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_1().SetLayoutDirection_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_1().SetViewConfiguration_1);
    $composer_5.enableReusing_6k309v_k$();
    tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_5)), $composer_5, 112 & tmp9_ReusableComposeNode$composable >> 3);
    $composer_5.startReplaceableGroup_rp6air_k$(2058660585);
    // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
    var tmp3__anonymous__ufb84q = $composer_5;
    var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
    var $composer_6 = tmp3__anonymous__ufb84q;
    $composer_6.startReplaceableGroup_rp6air_k$(-1163856341);
    sourceInformation($composer_6, 'C79@4027L9:Column.kt#2w3rfo');
    if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_6.get_skipping_3owdve_k$()) {
      content(ColumnScopeInstance_getInstance(), $composer_6, 6 | 112 & $changed >> 6);
    } else {
      $composer_6.skipToGroupEnd_lhns3f_k$();
    }
    $composer_6.endReplaceableGroup_er37p7_k$();
    $composer_5.endReplaceableGroup_er37p7_k$();
    $composer_5.endNode_3mkr10_k$();
    $composer_1.endReplaceableGroup_er37p7_k$();
    $composer_0.endReplaceableGroup_er37p7_k$();
  }
  function ColumnScope() {
  }
  ColumnScope.$metadata$ = interfaceMeta('ColumnScope');
  function columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer, $changed) {
    init_properties_Column_kt_yghy2k();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(47657763);
    sourceInformation($composer_0, 'C(columnMeasurePolicy$composable)P(1)101@4710L664:Column.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(47657763, $changed, -1, 'androidx.compose.foundation.layout.columnMeasurePolicy$composable (Column.kt:98)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = $composer_0;
    var tmp1_remember$composable = 14 & $changed | 112 & $changed;
    var $composer_1 = tmp0_remember$composable;
    $composer_1.startReplaceableGroup_rp6air_k$(-1124426577);
    sourceInformation($composer_1, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = !!($composer_1.changed_ga7h3f_k$(verticalArrangement) | $composer_1.changed_ga7h3f_k$(horizontalAlignment));
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_2().Empty_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.columnMeasurePolicy$composable.<anonymous>' call
      var tmp_0;
      if (equals(verticalArrangement, Arrangement_getInstance().Top_1) ? equals(horizontalAlignment, Companion_getInstance().Start_1) : false) {
        tmp_0 = get_DefaultColumnMeasurePolicy();
      } else {
        var tmp0_orientation = LayoutOrientation_Vertical_getInstance();
        var tmp1_arrangementSpacing = verticalArrangement.get_spacing_kuwe3v_k$();
        var tmp2_crossAxisAlignment = Companion_getInstance_7().horizontal_d2uuko_k$(horizontalAlignment);
        var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
        tmp_0 = rowColumnMeasurePolicy(tmp0_orientation, columnMeasurePolicy$composable$lambda(verticalArrangement), tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
      }
      tmp$ret$0 = tmp_0;
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
    var tmp0_0 = tmp$ret$4;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  }
  function ColumnScopeInstance$weight$lambda($weight, $fill) {
    return function ($this$null) {
      $this$null.name_1 = 'weight';
      $this$null.value_1 = $weight;
      $this$null.properties_1.set_y753qn_k$('weight', $weight);
      $this$null.properties_1.set_y753qn_k$('fill', $fill);
      return Unit_getInstance();
    };
  }
  function ColumnScopeInstance$align$lambda($alignment) {
    return function ($this$null) {
      $this$null.name_1 = 'align';
      $this$null.value_1 = $alignment;
      return Unit_getInstance();
    };
  }
  function ColumnScopeInstance$alignBy$lambda($alignmentLine) {
    return function ($this$null) {
      $this$null.name_1 = 'alignBy';
      $this$null.value_1 = $alignmentLine;
      return Unit_getInstance();
    };
  }
  function ColumnScopeInstance$alignBy$lambda_0($alignmentLineBlock) {
    return function ($this$null) {
      $this$null.name_1 = 'alignBy';
      $this$null.value_1 = $alignmentLineBlock;
      return Unit_getInstance();
    };
  }
  function ColumnScopeInstance() {
    ColumnScopeInstance_instance = this;
  }
  ColumnScopeInstance.prototype.weight_eps4yz_k$ = function (_this__u8e3s4, weight, fill) {
    // Inline function 'kotlin.require' call
    var tmp0_require = weight > 0.0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.ColumnScopeInstance.weight.<anonymous>' call
      tmp$ret$0 = 'invalid weight ' + weight + '; must be greater than zero';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = ColumnScopeInstance$weight$lambda(weight, fill);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$1 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new LayoutWeightImpl(weight, fill, tmp$ret$1));
  };
  ColumnScopeInstance.prototype.align_9ddj9c_k$ = function (_this__u8e3s4, alignment) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = ColumnScopeInstance$align$lambda(alignment);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new HorizontalAlignModifier(alignment, tmp$ret$0));
  };
  ColumnScopeInstance.prototype.alignBy_radkhc_k$ = function (_this__u8e3s4, alignmentLine) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = ColumnScopeInstance$alignBy$lambda(alignmentLine);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new WithAlignmentLine(alignmentLine, tmp$ret$0));
  };
  ColumnScopeInstance.prototype.alignBy_knmuph_k$ = function (_this__u8e3s4, alignmentLineBlock) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = ColumnScopeInstance$alignBy$lambda_0(alignmentLineBlock);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new WithAlignmentLineBlock(alignmentLineBlock, tmp$ret$0));
  };
  ColumnScopeInstance.$metadata$ = objectMeta('ColumnScopeInstance', [ColumnScope]);
  var ColumnScopeInstance_instance;
  function ColumnScopeInstance_getInstance() {
    if (ColumnScopeInstance_instance == null)
      new ColumnScopeInstance();
    return ColumnScopeInstance_instance;
  }
  function DefaultColumnMeasurePolicy$lambda(totalSize, size, _anonymous_parameter_2__qggqfi, density, outPosition) {
    init_properties_Column_kt_yghy2k();
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = Arrangement_getInstance().Top_1;
    // Inline function 'kotlin.contracts.contract' call
    tmp0_with.arrange_bbki90_k$(density, totalSize, size, outPosition);
    tmp$ret$0 = Unit_getInstance();
    return Unit_getInstance();
  }
  function columnMeasurePolicy$composable$lambda($verticalArrangement) {
    return function (totalSize, size, _anonymous_parameter_2__qggqfi, density, outPosition) {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $verticalArrangement.arrange_bbki90_k$(density, totalSize, size, outPosition);
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  var properties_initialized_Column_kt_nm4x4;
  function init_properties_Column_kt_yghy2k() {
    if (properties_initialized_Column_kt_nm4x4) {
    } else {
      properties_initialized_Column_kt_nm4x4 = true;
      var tmp0_orientation = LayoutOrientation_Vertical_getInstance();
      var tmp1_arrangementSpacing = Arrangement_getInstance().Top_1.get_spacing_kuwe3v_k$();
      var tmp2_crossAxisAlignment = Companion_getInstance_7().horizontal_d2uuko_k$(Companion_getInstance().Start_1);
      var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
      DefaultColumnMeasurePolicy = rowColumnMeasurePolicy(tmp0_orientation, DefaultColumnMeasurePolicy$lambda, tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
    }
  }
  function LayoutScopeMarker() {
  }
  LayoutScopeMarker.prototype.equals = function (other) {
    if (!(other instanceof LayoutScopeMarker))
      return false;
    var tmp0_other_with_cast = other instanceof LayoutScopeMarker ? other : THROW_CCE();
    return true;
  };
  LayoutScopeMarker.prototype.hashCode = function () {
    return 0;
  };
  LayoutScopeMarker.prototype.toString = function () {
    return '@androidx.compose.foundation.layout.LayoutScopeMarker()';
  };
  LayoutScopeMarker.$metadata$ = classMeta('LayoutScopeMarker', [Annotation]);
  function offset_0(_this__u8e3s4, offset) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = offset$lambda(offset);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new OffsetPxModifier(offset, true, tmp$ret$0));
  }
  function offset_1(_this__u8e3s4, x, y) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = offset$lambda_0(x, y);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$2 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new OffsetModifier(x, y, true, tmp$ret$2));
  }
  function offset$default(_this__u8e3s4, x, y, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$0_0 = Unit_getInstance();
      x = tmp$ret$0;
    }
    if (!(($mask0 & 2) === 0)) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$1 = Unit_getInstance();
      y = tmp$ret$0_1;
    }
    return offset_1(_this__u8e3s4, x, y);
  }
  function OffsetPxModifier$measure$lambda(this$0, $this_measure, $placeable) {
    return function ($this$layout) {
      var offsetValue = this$0.offset_1($this_measure).packedValue_1;
      var tmp;
      if (this$0.rtlAware_1) {
        var tmp_0 = _IntOffset___get_x__impl__qiqr5o(offsetValue);
        var tmp_1 = _IntOffset___get_y__impl__2avpwj(offsetValue);
        $this$layout.placeRelativeWithLayer$default_1pu36s_k$($placeable, tmp_0, tmp_1, 0.0, null, 12, null);
        tmp = Unit_getInstance();
      } else {
        var tmp_2 = _IntOffset___get_x__impl__qiqr5o(offsetValue);
        var tmp_3 = _IntOffset___get_y__impl__2avpwj(offsetValue);
        $this$layout.placeWithLayer$default_6a28sw_k$($placeable, tmp_2, tmp_3, 0.0, null, 12, null);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function OffsetPxModifier(offset, rtlAware, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.offset_1 = offset;
    this.rtlAware_1 = rtlAware;
  }
  OffsetPxModifier.prototype.get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  OffsetPxModifier.prototype.get_rtlAware_ydysrn_k$ = function () {
    return this.rtlAware_1;
  };
  OffsetPxModifier.prototype.measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.measure_ikak0q_k$(constraints);
    var tmp = placeable.width_1;
    var tmp_0 = placeable.height_1;
    return _this__u8e3s4.layout$default_yb6zmd_k$(tmp, tmp_0, null, OffsetPxModifier$measure$lambda(this, _this__u8e3s4, placeable), 4, null);
  };
  OffsetPxModifier.prototype.equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof OffsetPxModifier ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.offset_1, otherModifier.offset_1) ? this.rtlAware_1 === otherModifier.rtlAware_1 : false;
  };
  OffsetPxModifier.prototype.hashCode = function () {
    var result = hashCode(this.offset_1);
    result = imul(31, result) + (this.rtlAware_1 | 0) | 0;
    return result;
  };
  OffsetPxModifier.prototype.toString = function () {
    return 'OffsetPxModifier(offset=' + this.offset_1 + ', rtlAware=' + this.rtlAware_1 + ')';
  };
  OffsetPxModifier.$metadata$ = classMeta('OffsetPxModifier', [LayoutModifier], undefined, undefined, undefined, InspectorValueInfo.prototype);
  function OffsetModifier$measure$lambda(this$0, $placeable, $this_measure) {
    return function ($this$layout) {
      var tmp;
      if (this$0.rtlAware_1) {
        var tmp_0 = $this_measure.roundToPx_hl1u8z_k$(this$0.x_1);
        var tmp_1 = $this_measure.roundToPx_hl1u8z_k$(this$0.y_1);
        $this$layout.placeRelative$default_lh46qu_k$($placeable, tmp_0, tmp_1, 0.0, 4, null);
        tmp = Unit_getInstance();
      } else {
        var tmp_2 = $this_measure.roundToPx_hl1u8z_k$(this$0.x_1);
        var tmp_3 = $this_measure.roundToPx_hl1u8z_k$(this$0.y_1);
        $this$layout.place$default_lnyts6_k$($placeable, tmp_2, tmp_3, 0.0, 4, null);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function OffsetModifier(x, y, rtlAware, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.x_1 = x;
    this.y_1 = y;
    this.rtlAware_1 = rtlAware;
  }
  OffsetModifier.prototype.get_x_dgke16_k$ = function () {
    return this.x_1;
  };
  OffsetModifier.prototype.get_y_mnjdv9_k$ = function () {
    return this.y_1;
  };
  OffsetModifier.prototype.get_rtlAware_ydysrn_k$ = function () {
    return this.rtlAware_1;
  };
  OffsetModifier.prototype.measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.measure_ikak0q_k$(constraints);
    var tmp = placeable.width_1;
    var tmp_0 = placeable.height_1;
    return _this__u8e3s4.layout$default_yb6zmd_k$(tmp, tmp_0, null, OffsetModifier$measure$lambda(this, placeable, _this__u8e3s4), 4, null);
  };
  OffsetModifier.prototype.equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof OffsetModifier ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return (equals(this.x_1, otherModifier.x_1) ? equals(this.y_1, otherModifier.y_1) : false) ? this.rtlAware_1 === otherModifier.rtlAware_1 : false;
  };
  OffsetModifier.prototype.hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.x_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.y_1) | 0;
    result = imul(31, result) + (this.rtlAware_1 | 0) | 0;
    return result;
  };
  OffsetModifier.prototype.toString = function () {
    return 'OffsetModifier(x=' + new Dp(this.x_1) + ', y=' + new Dp(this.y_1) + ', rtlAware=' + this.rtlAware_1 + ')';
  };
  OffsetModifier.$metadata$ = classMeta('OffsetModifier', [LayoutModifier], undefined, undefined, undefined, InspectorValueInfo.prototype);
  function offset$lambda($offset) {
    return function ($this$null) {
      $this$null.name_1 = 'offset';
      $this$null.properties_1.set_y753qn_k$('offset', $offset);
      return Unit_getInstance();
    };
  }
  function offset$lambda_0($x, $y) {
    return function ($this$null) {
      $this$null.name_1 = 'offset';
      $this$null.properties_1.set_y753qn_k$('x', new Dp($x));
      $this$null.properties_1.set_y753qn_k$('y', new Dp($y));
      return Unit_getInstance();
    };
  }
  function padding(_this__u8e3s4, start, top, end, bottom) {
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = padding$lambda(start, top, end, bottom);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$4 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new PaddingModifier(start, top, end, bottom, true, tmp$ret$4));
  }
  function padding$default(_this__u8e3s4, start, top, end, bottom, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$0_0 = Unit_getInstance();
      start = tmp$ret$0;
    }
    if (!(($mask0 & 2) === 0)) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$1 = Unit_getInstance();
      top = tmp$ret$0_1;
    }
    if (!(($mask0 & 4) === 0)) {
      var tmp$ret$0_2;
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$2 = Unit_getInstance();
      end = tmp$ret$0_2;
    }
    if (!(($mask0 & 8) === 0)) {
      var tmp$ret$0_3;
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$3 = Unit_getInstance();
      bottom = tmp$ret$0_3;
    }
    return padding(_this__u8e3s4, start, top, end, bottom);
  }
  function padding_0(_this__u8e3s4, horizontal, vertical) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = padding$lambda_0(horizontal, vertical);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$2 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new PaddingModifier(horizontal, vertical, horizontal, vertical, true, tmp$ret$2));
  }
  function padding$default_0(_this__u8e3s4, horizontal, vertical, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$0_0 = Unit_getInstance();
      horizontal = tmp$ret$0;
    }
    if (!(($mask0 & 2) === 0)) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$1 = Unit_getInstance();
      vertical = tmp$ret$0_1;
    }
    return padding_0(_this__u8e3s4, horizontal, vertical);
  }
  function padding_1(_this__u8e3s4, all) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = padding$lambda_1(all);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new PaddingModifier(all, all, all, all, true, tmp$ret$0));
  }
  function PaddingModifier_init_$Init$(start, top, end, bottom, rtlAware, inspectorInfo, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$0_0 = Unit_getInstance();
      start = tmp$ret$0;
    }
    if (!(($mask0 & 2) === 0)) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$1 = Unit_getInstance();
      top = tmp$ret$0_1;
    }
    if (!(($mask0 & 4) === 0)) {
      var tmp$ret$0_2;
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$2 = Unit_getInstance();
      end = tmp$ret$0_2;
    }
    if (!(($mask0 & 8) === 0)) {
      var tmp$ret$0_3;
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$3 = Unit_getInstance();
      bottom = tmp$ret$0_3;
    }
    PaddingModifier.call($this, start, top, end, bottom, rtlAware, inspectorInfo);
    return $this;
  }
  function PaddingModifier_init_$Create$(start, top, end, bottom, rtlAware, inspectorInfo, $mask0, $marker) {
    return PaddingModifier_init_$Init$(start, top, end, bottom, rtlAware, inspectorInfo, $mask0, $marker, Object.create(PaddingModifier.prototype));
  }
  function PaddingModifier$measure$lambda(this$0, $placeable, $this_measure) {
    return function ($this$layout) {
      var tmp;
      if (this$0.rtlAware_1) {
        var tmp_0 = $this_measure.roundToPx_hl1u8z_k$(this$0.start_1);
        var tmp_1 = $this_measure.roundToPx_hl1u8z_k$(this$0.top_1);
        $this$layout.placeRelative$default_lh46qu_k$($placeable, tmp_0, tmp_1, 0.0, 4, null);
        tmp = Unit_getInstance();
      } else {
        var tmp_2 = $this_measure.roundToPx_hl1u8z_k$(this$0.start_1);
        var tmp_3 = $this_measure.roundToPx_hl1u8z_k$(this$0.top_1);
        $this$layout.place$default_lnyts6_k$($placeable, tmp_2, tmp_3, 0.0, 4, null);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function PaddingModifier(start, top, end, bottom, rtlAware, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.start_1 = start;
    this.top_1 = top;
    this.end_1 = end;
    this.bottom_1 = bottom;
    this.rtlAware_1 = rtlAware;
    // Inline function 'kotlin.require' call
    var tmp0_require = (((_Dp___get_value__impl__geb1vb(this.start_1) >= 0.0 ? true : equals(this.start_1, Companion_getInstance_4().Unspecified_1)) ? _Dp___get_value__impl__geb1vb(this.top_1) >= 0.0 ? true : equals(this.top_1, Companion_getInstance_4().Unspecified_1) : false) ? _Dp___get_value__impl__geb1vb(this.end_1) >= 0.0 ? true : equals(this.end_1, Companion_getInstance_4().Unspecified_1) : false) ? _Dp___get_value__impl__geb1vb(this.bottom_1) >= 0.0 ? true : equals(this.bottom_1, Companion_getInstance_4().Unspecified_1) : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.foundation.layout.PaddingModifier.<anonymous>' call
      tmp$ret$4 = 'Padding must be non-negative';
      var message = tmp$ret$4;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  PaddingModifier.prototype.get_start_dazqs_k$ = function () {
    return this.start_1;
  };
  PaddingModifier.prototype.get_top_qz4pg9_k$ = function () {
    return this.top_1;
  };
  PaddingModifier.prototype.get_end_wf34x9_k$ = function () {
    return this.end_1;
  };
  PaddingModifier.prototype.get_bottom_dp2gsx_k$ = function () {
    return this.bottom_1;
  };
  PaddingModifier.prototype.get_rtlAware_ydysrn_k$ = function () {
    return this.rtlAware_1;
  };
  PaddingModifier.prototype.measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    var horizontal = _this__u8e3s4.roundToPx_hl1u8z_k$(this.start_1) + _this__u8e3s4.roundToPx_hl1u8z_k$(this.end_1) | 0;
    var vertical = _this__u8e3s4.roundToPx_hl1u8z_k$(this.top_1) + _this__u8e3s4.roundToPx_hl1u8z_k$(this.bottom_1) | 0;
    var placeable = measurable.measure_ikak0q_k$(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.width_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.height_1 + vertical | 0);
    return _this__u8e3s4.layout$default_yb6zmd_k$(width, height, null, PaddingModifier$measure$lambda(this, placeable, _this__u8e3s4), 4, null);
  };
  PaddingModifier.prototype.hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.start_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.top_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.end_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.bottom_1) | 0;
    result = imul(31, result) + (this.rtlAware_1 | 0) | 0;
    return result;
  };
  PaddingModifier.prototype.equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingModifier ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return (((equals(this.start_1, otherModifier.start_1) ? equals(this.top_1, otherModifier.top_1) : false) ? equals(this.end_1, otherModifier.end_1) : false) ? equals(this.bottom_1, otherModifier.bottom_1) : false) ? this.rtlAware_1 === otherModifier.rtlAware_1 : false;
  };
  PaddingModifier.$metadata$ = classMeta('PaddingModifier', [LayoutModifier], undefined, undefined, undefined, InspectorValueInfo.prototype);
  function Absolute_init_$Init$(left, top, right, bottom, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$0_0 = Unit_getInstance();
      left = tmp$ret$0;
    }
    if (!(($mask0 & 2) === 0)) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$1 = Unit_getInstance();
      top = tmp$ret$0_1;
    }
    if (!(($mask0 & 4) === 0)) {
      var tmp$ret$0_2;
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$2 = Unit_getInstance();
      right = tmp$ret$0_2;
    }
    if (!(($mask0 & 8) === 0)) {
      var tmp$ret$0_3;
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$3 = Unit_getInstance();
      bottom = tmp$ret$0_3;
    }
    Absolute_0.call($this, left, top, right, bottom);
    return $this;
  }
  function Absolute_init_$Create$(left, top, right, bottom, $mask0, $marker) {
    return Absolute_init_$Init$(left, top, right, bottom, $mask0, $marker, Object.create(Absolute_0.prototype));
  }
  function _get_left__d9qyp0($this) {
    return $this.left_1;
  }
  function _get_top__e6hfbw($this) {
    return $this.top_1;
  }
  function _get_right__bvz45n($this) {
    return $this.right_1;
  }
  function _get_bottom__w3218g($this) {
    return $this.bottom_1;
  }
  function Absolute_0(left, top, right, bottom) {
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
  }
  Absolute_0.prototype.calculateLeftPadding_71tp16_k$ = function (layoutDirection) {
    return this.left_1;
  };
  Absolute_0.prototype.calculateTopPadding_ok52o3_k$ = function () {
    return this.top_1;
  };
  Absolute_0.prototype.calculateRightPadding_wmvkqr_k$ = function (layoutDirection) {
    return this.right_1;
  };
  Absolute_0.prototype.calculateBottomPadding_lu87vf_k$ = function () {
    return this.bottom_1;
  };
  Absolute_0.prototype.equals = function (other) {
    if (!(other instanceof Absolute_0))
      return false;
    return ((equals(this.left_1, other.left_1) ? equals(this.top_1, other.top_1) : false) ? equals(this.right_1, other.right_1) : false) ? equals(this.bottom_1, other.bottom_1) : false;
  };
  Absolute_0.prototype.hashCode = function () {
    return imul(imul(imul(Dp__hashCode_impl_sxkrra(this.left_1), 31) + Dp__hashCode_impl_sxkrra(this.top_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.right_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.bottom_1) | 0;
  };
  Absolute_0.prototype.toString = function () {
    return 'PaddingValues.Absolute(left=' + new Dp(this.left_1) + ', top=' + new Dp(this.top_1) + ', right=' + new Dp(this.right_1) + ', bottom=' + new Dp(this.bottom_1) + ')';
  };
  Absolute_0.$metadata$ = classMeta('Absolute', [PaddingValues]);
  function PaddingValues() {
  }
  PaddingValues.$metadata$ = interfaceMeta('PaddingValues');
  function PaddingValues_0(start, top, end, bottom) {
    return new PaddingValuesImpl(start, top, end, bottom);
  }
  function PaddingValues$default(start, top, end, bottom, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$0_0 = Unit_getInstance();
      start = tmp$ret$0;
    }
    if (!(($mask0 & 2) === 0)) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$1 = Unit_getInstance();
      top = tmp$ret$0_1;
    }
    if (!(($mask0 & 4) === 0)) {
      var tmp$ret$0_2;
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$2 = Unit_getInstance();
      end = tmp$ret$0_2;
    }
    if (!(($mask0 & 8) === 0)) {
      var tmp$ret$0_3;
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$3 = Unit_getInstance();
      bottom = tmp$ret$0_3;
    }
    return PaddingValues_0(start, top, end, bottom);
  }
  function padding_2(_this__u8e3s4, paddingValues) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = padding$lambda_2(paddingValues);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new PaddingValuesModifier(paddingValues, tmp$ret$0));
  }
  function PaddingValuesImpl_init_$Init$(start, top, end, bottom, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$0_0 = Unit_getInstance();
      start = tmp$ret$0;
    }
    if (!(($mask0 & 2) === 0)) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$1 = Unit_getInstance();
      top = tmp$ret$0_1;
    }
    if (!(($mask0 & 4) === 0)) {
      var tmp$ret$0_2;
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$2 = Unit_getInstance();
      end = tmp$ret$0_2;
    }
    if (!(($mask0 & 8) === 0)) {
      var tmp$ret$0_3;
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$3 = Unit_getInstance();
      bottom = tmp$ret$0_3;
    }
    PaddingValuesImpl.call($this, start, top, end, bottom);
    return $this;
  }
  function PaddingValuesImpl_init_$Create$(start, top, end, bottom, $mask0, $marker) {
    return PaddingValuesImpl_init_$Init$(start, top, end, bottom, $mask0, $marker, Object.create(PaddingValuesImpl.prototype));
  }
  function PaddingValuesImpl(start, top, end, bottom) {
    this.start_1 = start;
    this.top_1 = top;
    this.end_1 = end;
    this.bottom_1 = bottom;
  }
  PaddingValuesImpl.prototype.get_start_dazqs_k$ = function () {
    return this.start_1;
  };
  PaddingValuesImpl.prototype.get_top_qz4pg9_k$ = function () {
    return this.top_1;
  };
  PaddingValuesImpl.prototype.get_end_wf34x9_k$ = function () {
    return this.end_1;
  };
  PaddingValuesImpl.prototype.get_bottom_dp2gsx_k$ = function () {
    return this.bottom_1;
  };
  PaddingValuesImpl.prototype.calculateLeftPadding_71tp16_k$ = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.start_1 : this.end_1;
  };
  PaddingValuesImpl.prototype.calculateTopPadding_ok52o3_k$ = function () {
    return this.top_1;
  };
  PaddingValuesImpl.prototype.calculateRightPadding_wmvkqr_k$ = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.end_1 : this.start_1;
  };
  PaddingValuesImpl.prototype.calculateBottomPadding_lu87vf_k$ = function () {
    return this.bottom_1;
  };
  PaddingValuesImpl.prototype.equals = function (other) {
    if (!(other instanceof PaddingValuesImpl))
      return false;
    return ((equals(this.start_1, other.start_1) ? equals(this.top_1, other.top_1) : false) ? equals(this.end_1, other.end_1) : false) ? equals(this.bottom_1, other.bottom_1) : false;
  };
  PaddingValuesImpl.prototype.hashCode = function () {
    return imul(imul(imul(Dp__hashCode_impl_sxkrra(this.start_1), 31) + Dp__hashCode_impl_sxkrra(this.top_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.end_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.bottom_1) | 0;
  };
  PaddingValuesImpl.prototype.toString = function () {
    return 'PaddingValues(start=' + new Dp(this.start_1) + ', top=' + new Dp(this.top_1) + ', end=' + new Dp(this.end_1) + ', bottom=' + new Dp(this.bottom_1) + ')';
  };
  PaddingValuesImpl.$metadata$ = classMeta('PaddingValuesImpl', [PaddingValues]);
  function PaddingValuesModifier$measure$lambda($placeable, $this_measure, this$0) {
    return function ($this$layout) {
      var tmp = $this_measure.roundToPx_hl1u8z_k$(this$0.paddingValues_1.calculateLeftPadding_71tp16_k$($this_measure.get_layoutDirection_7e37v0_k$()));
      var tmp_0 = $this_measure.roundToPx_hl1u8z_k$(this$0.paddingValues_1.calculateTopPadding_ok52o3_k$());
      $this$layout.place$default_lnyts6_k$($placeable, tmp, tmp_0, 0.0, 4, null);
      return Unit_getInstance();
    };
  }
  function PaddingValuesModifier(paddingValues, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.paddingValues_1 = paddingValues;
  }
  PaddingValuesModifier.prototype.get_paddingValues_bdsiui_k$ = function () {
    return this.paddingValues_1;
  };
  PaddingValuesModifier.prototype.measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2 = this.paddingValues_1.calculateLeftPadding_71tp16_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$());
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (Dp__compareTo_impl_tlg3dl(tmp_2, tmp$ret$0) >= 0) {
      var tmp_3 = this.paddingValues_1.calculateTopPadding_ok52o3_k$();
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      tmp_1 = Dp__compareTo_impl_tlg3dl(tmp_3, tmp$ret$1) >= 0;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp_4 = this.paddingValues_1.calculateRightPadding_wmvkqr_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$());
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$2 = _Dp___init__impl__ms3zkb(0);
      tmp_0 = Dp__compareTo_impl_tlg3dl(tmp_4, tmp$ret$2) >= 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_5 = this.paddingValues_1.calculateBottomPadding_lu87vf_k$();
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$3 = _Dp___init__impl__ms3zkb(0);
      tmp = Dp__compareTo_impl_tlg3dl(tmp_5, tmp$ret$3) >= 0;
    } else {
      tmp = false;
    }
    var tmp0_require = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesModifier.measure.<anonymous>' call
      tmp$ret$4 = 'Padding must be non-negative';
      var message = tmp$ret$4;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var horizontal = _this__u8e3s4.roundToPx_hl1u8z_k$(this.paddingValues_1.calculateLeftPadding_71tp16_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$())) + _this__u8e3s4.roundToPx_hl1u8z_k$(this.paddingValues_1.calculateRightPadding_wmvkqr_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$())) | 0;
    var vertical = _this__u8e3s4.roundToPx_hl1u8z_k$(this.paddingValues_1.calculateTopPadding_ok52o3_k$()) + _this__u8e3s4.roundToPx_hl1u8z_k$(this.paddingValues_1.calculateBottomPadding_lu87vf_k$()) | 0;
    var placeable = measurable.measure_ikak0q_k$(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.width_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.height_1 + vertical | 0);
    return _this__u8e3s4.layout$default_yb6zmd_k$(width, height, null, PaddingValuesModifier$measure$lambda(placeable, _this__u8e3s4, this), 4, null);
  };
  PaddingValuesModifier.prototype.hashCode = function () {
    return hashCode(this.paddingValues_1);
  };
  PaddingValuesModifier.prototype.equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingValuesModifier ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.paddingValues_1, otherModifier.paddingValues_1);
  };
  PaddingValuesModifier.$metadata$ = classMeta('PaddingValuesModifier', [LayoutModifier], undefined, undefined, undefined, InspectorValueInfo.prototype);
  function padding$lambda($start, $top, $end, $bottom) {
    return function ($this$null) {
      $this$null.name_1 = 'padding';
      $this$null.properties_1.set_y753qn_k$('start', new Dp($start));
      $this$null.properties_1.set_y753qn_k$('top', new Dp($top));
      $this$null.properties_1.set_y753qn_k$('end', new Dp($end));
      $this$null.properties_1.set_y753qn_k$('bottom', new Dp($bottom));
      return Unit_getInstance();
    };
  }
  function padding$lambda_0($horizontal, $vertical) {
    return function ($this$null) {
      $this$null.name_1 = 'padding';
      $this$null.properties_1.set_y753qn_k$('horizontal', new Dp($horizontal));
      $this$null.properties_1.set_y753qn_k$('vertical', new Dp($vertical));
      return Unit_getInstance();
    };
  }
  function padding$lambda_1($all) {
    return function ($this$null) {
      $this$null.name_1 = 'padding';
      $this$null.value_1 = new Dp($all);
      return Unit_getInstance();
    };
  }
  function padding$lambda_2($paddingValues) {
    return function ($this$null) {
      $this$null.name_1 = 'padding';
      $this$null.properties_1.set_y753qn_k$('paddingValues', $paddingValues);
      return Unit_getInstance();
    };
  }
  function get_DefaultRowMeasurePolicy() {
    init_properties_Row_kt_t0iz6i();
    return DefaultRowMeasurePolicy;
  }
  var DefaultRowMeasurePolicy;
  function Row$composable(modifier, horizontalArrangement, verticalAlignment, content, $composer, $changed, $default) {
    init_properties_Row_kt_t0iz6i();
    var modifier_0 = modifier;
    var horizontalArrangement_0 = horizontalArrangement;
    var verticalAlignment_0 = verticalAlignment;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-636825856);
    sourceInformation($composer_0, 'C(Row$composable)P(2,1,3)78@3913L58,79@3976L130:Row.kt#2w3rfo');
    if (!(($default & 1) === 0))
      modifier_0 = Companion_getInstance_0();
    if (!(($default & 2) === 0))
      horizontalArrangement_0 = Arrangement_getInstance().Start_1;
    if (!(($default & 4) === 0))
      verticalAlignment_0 = Companion_getInstance().Top_1;
    var measurePolicy = rowMeasurePolicy$composable(horizontalArrangement_0, verticalAlignment_0, $composer_0, 14 & $changed >> 3 | 112 & $changed >> 3);
    // Inline function 'androidx.compose.ui.layout.Layout$composable' call
    var tmp0_Layout$composable = modifier_0;
    var tmp1_Layout$composable = $composer_0;
    var tmp2_Layout$composable = 112 & $changed << 3;
    var modifier_1 = tmp0_Layout$composable;
    var $composer_1 = tmp1_Layout$composable;
    $composer_1.startReplaceableGroup_rp6air_k$(1725976829);
    sourceInformation($composer_1, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
    if (!(0 === 0))
      modifier_1 = Companion_getInstance_0();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
    var tmp1_$get_current$$composable_gn3xww = $composer_1;
    var $composer_2 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_2, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_2.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_2);
    tmp$ret$0 = tmp0;
    var density = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
    var tmp3_$get_current$$composable_fm67ua = $composer_1;
    var $composer_3 = tmp3_$get_current$$composable_fm67ua;
    sourceInformationMarkerStart($composer_3, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_0 = $composer_3.consume_93tbl1_k$(tmp2_$get_current$$composable_g4n2vl);
    sourceInformationMarkerEnd($composer_3);
    tmp$ret$1 = tmp0_0;
    var layoutDirection = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
    var tmp5_$get_current$$composable_el8hro = $composer_1;
    var $composer_4 = tmp5_$get_current$$composable_el8hro;
    sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_1 = $composer_4.consume_93tbl1_k$(tmp4_$get_current$$composable_f3pcsz);
    sourceInformationMarkerEnd($composer_4);
    tmp$ret$2 = tmp0_1;
    var viewConfiguration = tmp$ret$2;
    // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
    var tmp6_ReusableComposeNode$composable = Companion_getInstance_1().Constructor_1;
    var tmp7_ReusableComposeNode$composable = materializerOf(modifier_1);
    var tmp8_ReusableComposeNode$composable = $composer_1;
    var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
    var $composer_5 = tmp8_ReusableComposeNode$composable;
    var tmp = $composer_5.get_applier_bupu8u_k$();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_5.startReusableNode_jk07k2_k$();
    if ($composer_5.get_inserting_25mlsw_k$()) {
      $composer_5.createNode_13g769_k$(tmp6_ReusableComposeNode$composable);
    } else {
      $composer_5.useNode_inlzo8_k$();
    }
    $composer_5.disableReusing_y35tew_k$();
    // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
    var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_5);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_1().SetMeasurePolicy_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_1().SetDensity_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_1().SetLayoutDirection_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_1().SetViewConfiguration_1);
    $composer_5.enableReusing_6k309v_k$();
    tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_5)), $composer_5, 112 & tmp9_ReusableComposeNode$composable >> 3);
    $composer_5.startReplaceableGroup_rp6air_k$(2058660585);
    // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
    var tmp3__anonymous__ufb84q = $composer_5;
    var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
    var $composer_6 = tmp3__anonymous__ufb84q;
    $composer_6.startReplaceableGroup_rp6air_k$(-678309503);
    sourceInformation($composer_6, 'C80@4021L9:Row.kt#2w3rfo');
    if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_6.get_skipping_3owdve_k$()) {
      content(RowScopeInstance_getInstance(), $composer_6, 6 | 112 & $changed >> 6);
    } else {
      $composer_6.skipToGroupEnd_lhns3f_k$();
    }
    $composer_6.endReplaceableGroup_er37p7_k$();
    $composer_5.endReplaceableGroup_er37p7_k$();
    $composer_5.endNode_3mkr10_k$();
    $composer_1.endReplaceableGroup_er37p7_k$();
    $composer_0.endReplaceableGroup_er37p7_k$();
  }
  function RowScope() {
  }
  RowScope.$metadata$ = interfaceMeta('RowScope');
  function rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer, $changed) {
    init_properties_Row_kt_t0iz6i();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(270154611);
    sourceInformation($composer_0, 'C(rowMeasurePolicy$composable)105@4830L730:Row.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(270154611, $changed, -1, 'androidx.compose.foundation.layout.rowMeasurePolicy$composable (Row.kt:102)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = $composer_0;
    var tmp1_remember$composable = 14 & $changed | 112 & $changed;
    var $composer_1 = tmp0_remember$composable;
    $composer_1.startReplaceableGroup_rp6air_k$(-1124426577);
    sourceInformation($composer_1, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = !!($composer_1.changed_ga7h3f_k$(horizontalArrangement) | $composer_1.changed_ga7h3f_k$(verticalAlignment));
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_2().Empty_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.rowMeasurePolicy$composable.<anonymous>' call
      var tmp_0;
      if (equals(horizontalArrangement, Arrangement_getInstance().Start_1) ? equals(verticalAlignment, Companion_getInstance().Top_1) : false) {
        tmp_0 = get_DefaultRowMeasurePolicy();
      } else {
        var tmp0_orientation = LayoutOrientation_Horizontal_getInstance();
        var tmp1_arrangementSpacing = horizontalArrangement.get_spacing_kuwe3v_k$();
        var tmp2_crossAxisAlignment = Companion_getInstance_7().vertical_qzmr60_k$(verticalAlignment);
        var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
        tmp_0 = rowColumnMeasurePolicy(tmp0_orientation, rowMeasurePolicy$composable$lambda(horizontalArrangement), tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
      }
      tmp$ret$0 = tmp_0;
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
    var tmp0_0 = tmp$ret$4;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  }
  function RowScopeInstance$weight$lambda($weight, $fill) {
    return function ($this$null) {
      $this$null.name_1 = 'weight';
      $this$null.value_1 = $weight;
      $this$null.properties_1.set_y753qn_k$('weight', $weight);
      $this$null.properties_1.set_y753qn_k$('fill', $fill);
      return Unit_getInstance();
    };
  }
  function RowScopeInstance$align$lambda($alignment) {
    return function ($this$null) {
      $this$null.name_1 = 'align';
      $this$null.value_1 = $alignment;
      return Unit_getInstance();
    };
  }
  function RowScopeInstance$alignBy$lambda($alignmentLine) {
    return function ($this$null) {
      $this$null.name_1 = 'alignBy';
      $this$null.value_1 = $alignmentLine;
      return Unit_getInstance();
    };
  }
  function RowScopeInstance$alignBy$lambda_0($alignmentLineBlock) {
    return function ($this$null) {
      $this$null.name_1 = 'alignBy';
      $this$null.value_1 = $alignmentLineBlock;
      return Unit_getInstance();
    };
  }
  function RowScopeInstance() {
    RowScopeInstance_instance = this;
  }
  RowScopeInstance.prototype.weight_eps4yz_k$ = function (_this__u8e3s4, weight, fill) {
    // Inline function 'kotlin.require' call
    var tmp0_require = weight > 0.0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.RowScopeInstance.weight.<anonymous>' call
      tmp$ret$0 = 'invalid weight ' + weight + '; must be greater than zero';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = RowScopeInstance$weight$lambda(weight, fill);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$1 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new LayoutWeightImpl(weight, fill, tmp$ret$1));
  };
  RowScopeInstance.prototype.align_h48q6q_k$ = function (_this__u8e3s4, alignment) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = RowScopeInstance$align$lambda(alignment);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new VerticalAlignModifier(alignment, tmp$ret$0));
  };
  RowScopeInstance.prototype.alignBy_9842pq_k$ = function (_this__u8e3s4, alignmentLine) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = RowScopeInstance$alignBy$lambda(alignmentLine);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new WithAlignmentLine(alignmentLine, tmp$ret$0));
  };
  RowScopeInstance.prototype.alignByBaseline_xip4e8_k$ = function (_this__u8e3s4) {
    return this.alignBy_9842pq_k$(_this__u8e3s4, get_FirstBaseline());
  };
  RowScopeInstance.prototype.alignBy_knmuph_k$ = function (_this__u8e3s4, alignmentLineBlock) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = RowScopeInstance$alignBy$lambda_0(alignmentLineBlock);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new WithAlignmentLineBlock(alignmentLineBlock, tmp$ret$0));
  };
  RowScopeInstance.$metadata$ = objectMeta('RowScopeInstance', [RowScope]);
  var RowScopeInstance_instance;
  function RowScopeInstance_getInstance() {
    if (RowScopeInstance_instance == null)
      new RowScopeInstance();
    return RowScopeInstance_instance;
  }
  function DefaultRowMeasurePolicy$lambda(totalSize, size, layoutDirection, density, outPosition) {
    init_properties_Row_kt_t0iz6i();
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = Arrangement_getInstance().Start_1;
    // Inline function 'kotlin.contracts.contract' call
    tmp0_with.arrange_6sc983_k$(density, totalSize, size, layoutDirection, outPosition);
    tmp$ret$0 = Unit_getInstance();
    return Unit_getInstance();
  }
  function rowMeasurePolicy$composable$lambda($horizontalArrangement) {
    return function (totalSize, size, layoutDirection, density, outPosition) {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $horizontalArrangement.arrange_6sc983_k$(density, totalSize, size, layoutDirection, outPosition);
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  var properties_initialized_Row_kt_sbxnna;
  function init_properties_Row_kt_t0iz6i() {
    if (properties_initialized_Row_kt_sbxnna) {
    } else {
      properties_initialized_Row_kt_sbxnna = true;
      var tmp0_orientation = LayoutOrientation_Horizontal_getInstance();
      var tmp1_arrangementSpacing = Arrangement_getInstance().Start_1.get_spacing_kuwe3v_k$();
      var tmp2_crossAxisAlignment = Companion_getInstance_7().vertical_qzmr60_k$(Companion_getInstance().Top_1);
      var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
      DefaultRowMeasurePolicy = rowColumnMeasurePolicy(tmp0_orientation, DefaultRowMeasurePolicy$lambda, tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
    }
  }
  var LayoutOrientation_Horizontal_instance;
  var LayoutOrientation_Vertical_instance;
  function values() {
    return [LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Vertical_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Horizontal':
        return LayoutOrientation_Horizontal_getInstance();
      case 'Vertical':
        return LayoutOrientation_Vertical_getInstance();
      default:
        LayoutOrientation_initEntries();
        THROW_ISE();
        break;
    }
  }
  var LayoutOrientation_entriesInitialized;
  function LayoutOrientation_initEntries() {
    if (LayoutOrientation_entriesInitialized)
      return Unit_getInstance();
    LayoutOrientation_entriesInitialized = true;
    LayoutOrientation_Horizontal_instance = new LayoutOrientation('Horizontal', 0);
    LayoutOrientation_Vertical_instance = new LayoutOrientation('Vertical', 1);
  }
  function LayoutOrientation(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  LayoutOrientation.$metadata$ = classMeta('LayoutOrientation', undefined, undefined, undefined, undefined, Enum.prototype);
  function Companion() {
    Companion_instance = this;
    this.Center_1 = CenterCrossAxisAlignment_getInstance();
    this.Start_1 = StartCrossAxisAlignment_getInstance();
    this.End_1 = EndCrossAxisAlignment_getInstance();
  }
  Companion.prototype.get_Center_3arb0i_k$ = function () {
    return this.Center_1;
  };
  Companion.prototype.get_Start_ih4i6x_k$ = function () {
    return this.Start_1;
  };
  Companion.prototype.get_End_18ju7i_k$ = function () {
    return this.End_1;
  };
  Companion.prototype.AlignmentLine_9o8d2s_k$ = function (alignmentLine) {
    return new AlignmentLineCrossAxisAlignment(new Value(alignmentLine));
  };
  Companion.prototype.Relative_767dzl_k$ = function (alignmentLineProvider) {
    return new AlignmentLineCrossAxisAlignment(alignmentLineProvider);
  };
  Companion.prototype.vertical_qzmr60_k$ = function (vertical) {
    return new VerticalCrossAxisAlignment(vertical);
  };
  Companion.prototype.horizontal_d2uuko_k$ = function (horizontal) {
    return new HorizontalCrossAxisAlignment(horizontal);
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CenterCrossAxisAlignment() {
    CenterCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  CenterCrossAxisAlignment.prototype.align_gldapf_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return size / 2 | 0;
  };
  CenterCrossAxisAlignment.$metadata$ = objectMeta('CenterCrossAxisAlignment', undefined, undefined, undefined, undefined, CrossAxisAlignment.prototype);
  var CenterCrossAxisAlignment_instance;
  function CenterCrossAxisAlignment_getInstance() {
    if (CenterCrossAxisAlignment_instance == null)
      new CenterCrossAxisAlignment();
    return CenterCrossAxisAlignment_instance;
  }
  function StartCrossAxisAlignment() {
    StartCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  StartCrossAxisAlignment.prototype.align_gldapf_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? 0 : size;
  };
  StartCrossAxisAlignment.$metadata$ = objectMeta('StartCrossAxisAlignment', undefined, undefined, undefined, undefined, CrossAxisAlignment.prototype);
  var StartCrossAxisAlignment_instance;
  function StartCrossAxisAlignment_getInstance() {
    if (StartCrossAxisAlignment_instance == null)
      new StartCrossAxisAlignment();
    return StartCrossAxisAlignment_instance;
  }
  function EndCrossAxisAlignment() {
    EndCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  EndCrossAxisAlignment.prototype.align_gldapf_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? size : 0;
  };
  EndCrossAxisAlignment.$metadata$ = objectMeta('EndCrossAxisAlignment', undefined, undefined, undefined, undefined, CrossAxisAlignment.prototype);
  var EndCrossAxisAlignment_instance;
  function EndCrossAxisAlignment_getInstance() {
    if (EndCrossAxisAlignment_instance == null)
      new EndCrossAxisAlignment();
    return EndCrossAxisAlignment_instance;
  }
  function AlignmentLineCrossAxisAlignment(alignmentLineProvider) {
    CrossAxisAlignment.call(this);
    this.alignmentLineProvider_1 = alignmentLineProvider;
  }
  AlignmentLineCrossAxisAlignment.prototype.get_alignmentLineProvider_242uu9_k$ = function () {
    return this.alignmentLineProvider_1;
  };
  AlignmentLineCrossAxisAlignment.prototype.get_isRelative_skgyhr_k$ = function () {
    return true;
  };
  AlignmentLineCrossAxisAlignment.prototype.calculateAlignmentLinePosition_92xdb9_k$ = function (placeable) {
    return this.alignmentLineProvider_1.calculateAlignmentLinePosition_92xdb9_k$(placeable);
  };
  AlignmentLineCrossAxisAlignment.prototype.align_gldapf_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    var alignmentLinePosition = this.alignmentLineProvider_1.calculateAlignmentLinePosition_92xdb9_k$(placeable);
    var tmp;
    Companion_getInstance_5();
    if (!(alignmentLinePosition === -2147483648)) {
      var line = beforeCrossAxisAlignmentLine - alignmentLinePosition | 0;
      var tmp_0;
      if (layoutDirection.equals(LayoutDirection_Rtl_getInstance())) {
        tmp_0 = size - line | 0;
      } else {
        tmp_0 = line;
      }
      tmp = tmp_0;
    } else {
      tmp = 0;
    }
    return tmp;
  };
  AlignmentLineCrossAxisAlignment.$metadata$ = classMeta('AlignmentLineCrossAxisAlignment', undefined, undefined, undefined, undefined, CrossAxisAlignment.prototype);
  function VerticalCrossAxisAlignment(vertical) {
    CrossAxisAlignment.call(this);
    this.vertical_1 = vertical;
  }
  VerticalCrossAxisAlignment.prototype.get_vertical_6ev9z3_k$ = function () {
    return this.vertical_1;
  };
  VerticalCrossAxisAlignment.prototype.align_gldapf_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.vertical_1.align_1fj06d_k$(0, size);
  };
  VerticalCrossAxisAlignment.$metadata$ = classMeta('VerticalCrossAxisAlignment', undefined, undefined, undefined, undefined, CrossAxisAlignment.prototype);
  function HorizontalCrossAxisAlignment(horizontal) {
    CrossAxisAlignment.call(this);
    this.horizontal_1 = horizontal;
  }
  HorizontalCrossAxisAlignment.prototype.get_horizontal_2rwn8t_k$ = function () {
    return this.horizontal_1;
  };
  HorizontalCrossAxisAlignment.prototype.align_gldapf_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.horizontal_1.align_a5f08y_k$(0, size, layoutDirection);
  };
  HorizontalCrossAxisAlignment.$metadata$ = classMeta('HorizontalCrossAxisAlignment', undefined, undefined, undefined, undefined, CrossAxisAlignment.prototype);
  function CrossAxisAlignment() {
    Companion_getInstance_7();
  }
  CrossAxisAlignment.prototype.get_isRelative_skgyhr_k$ = function () {
    return false;
  };
  CrossAxisAlignment.prototype.calculateAlignmentLinePosition_92xdb9_k$ = function (placeable) {
    return null;
  };
  CrossAxisAlignment.$metadata$ = classMeta('CrossAxisAlignment');
  var SizeMode_Wrap_instance;
  var SizeMode_Expand_instance;
  function values_0() {
    return [SizeMode_Wrap_getInstance(), SizeMode_Expand_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'Wrap':
        return SizeMode_Wrap_getInstance();
      case 'Expand':
        return SizeMode_Expand_getInstance();
      default:
        SizeMode_initEntries();
        THROW_ISE();
        break;
    }
  }
  var SizeMode_entriesInitialized;
  function SizeMode_initEntries() {
    if (SizeMode_entriesInitialized)
      return Unit_getInstance();
    SizeMode_entriesInitialized = true;
    SizeMode_Wrap_instance = new SizeMode('Wrap', 0);
    SizeMode_Expand_instance = new SizeMode('Expand', 1);
  }
  function SizeMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  SizeMode.$metadata$ = classMeta('SizeMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function rowColumnMeasurePolicy(orientation, arrangement, arrangementSpacing, crossAxisSize, crossAxisAlignment) {
    return new rowColumnMeasurePolicy$1(orientation, arrangementSpacing, crossAxisSize, arrangement, crossAxisAlignment);
  }
  function Block(lineProviderBlock) {
    AlignmentLineProvider.call(this);
    this.lineProviderBlock_1 = lineProviderBlock;
    this.$stable_1 = 0;
  }
  Block.prototype.get_lineProviderBlock_1gxdy7_k$ = function () {
    return this.lineProviderBlock_1;
  };
  Block.prototype.calculateAlignmentLinePosition_92xdb9_k$ = function (placeable) {
    return this.lineProviderBlock_1(placeable);
  };
  Block.prototype.component1_7eebsc_k$ = function () {
    return this.lineProviderBlock_1;
  };
  Block.prototype.copy_o786p1_k$ = function (lineProviderBlock) {
    return new Block(lineProviderBlock);
  };
  Block.prototype.copy$default_ftxiy1_k$ = function (lineProviderBlock, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      lineProviderBlock = this.lineProviderBlock_1;
    return this.copy_o786p1_k$(lineProviderBlock);
  };
  Block.prototype.toString = function () {
    return 'Block(lineProviderBlock=' + this.lineProviderBlock_1 + ')';
  };
  Block.prototype.hashCode = function () {
    return hashCode(this.lineProviderBlock_1);
  };
  Block.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Block))
      return false;
    var tmp0_other_with_cast = other instanceof Block ? other : THROW_CCE();
    if (!equals(this.lineProviderBlock_1, tmp0_other_with_cast.lineProviderBlock_1))
      return false;
    return true;
  };
  Block.$metadata$ = classMeta('Block', undefined, undefined, undefined, undefined, AlignmentLineProvider.prototype);
  function Value(alignmentLine) {
    AlignmentLineProvider.call(this);
    this.alignmentLine_1 = alignmentLine;
    this.$stable_1 = 0;
  }
  Value.prototype.get_alignmentLine_xlj9o2_k$ = function () {
    return this.alignmentLine_1;
  };
  Value.prototype.calculateAlignmentLinePosition_92xdb9_k$ = function (placeable) {
    return placeable.get_4x1crv_k$(this.alignmentLine_1);
  };
  Value.prototype.component1_7eebsc_k$ = function () {
    return this.alignmentLine_1;
  };
  Value.prototype.copy_d594q2_k$ = function (alignmentLine) {
    return new Value(alignmentLine);
  };
  Value.prototype.copy$default_ff1g3o_k$ = function (alignmentLine, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      alignmentLine = this.alignmentLine_1;
    return this.copy_d594q2_k$(alignmentLine);
  };
  Value.prototype.toString = function () {
    return 'Value(alignmentLine=' + this.alignmentLine_1 + ')';
  };
  Value.prototype.hashCode = function () {
    return hashCode(this.alignmentLine_1);
  };
  Value.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Value))
      return false;
    var tmp0_other_with_cast = other instanceof Value ? other : THROW_CCE();
    if (!equals(this.alignmentLine_1, tmp0_other_with_cast.alignmentLine_1))
      return false;
    return true;
  };
  Value.$metadata$ = classMeta('Value', undefined, undefined, undefined, undefined, AlignmentLineProvider.prototype);
  function AlignmentLineProvider() {
  }
  AlignmentLineProvider.$metadata$ = classMeta('AlignmentLineProvider');
  function OrientationIndependentConstraints_init_$Init$(c, orientation, $this) {
    OrientationIndependentConstraints.call($this, orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_minWidth__impl__hi9lfi(c) : _Constraints___get_minHeight__impl__ev4bgx(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_maxWidth__impl__uuyqc(c) : _Constraints___get_maxHeight__impl__dt3e8z(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_minHeight__impl__ev4bgx(c) : _Constraints___get_minWidth__impl__hi9lfi(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_maxHeight__impl__dt3e8z(c) : _Constraints___get_maxWidth__impl__uuyqc(c));
    return $this;
  }
  function OrientationIndependentConstraints_init_$Create$(c, orientation) {
    return OrientationIndependentConstraints_init_$Init$(c, orientation, Object.create(OrientationIndependentConstraints.prototype));
  }
  function OrientationIndependentConstraints(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax) {
    this.mainAxisMin_1 = mainAxisMin;
    this.mainAxisMax_1 = mainAxisMax;
    this.crossAxisMin_1 = crossAxisMin;
    this.crossAxisMax_1 = crossAxisMax;
  }
  OrientationIndependentConstraints.prototype.get_mainAxisMin_a6doq9_k$ = function () {
    return this.mainAxisMin_1;
  };
  OrientationIndependentConstraints.prototype.get_mainAxisMax_a6dowv_k$ = function () {
    return this.mainAxisMax_1;
  };
  OrientationIndependentConstraints.prototype.get_crossAxisMin_f0o1t2_k$ = function () {
    return this.crossAxisMin_1;
  };
  OrientationIndependentConstraints.prototype.get_crossAxisMax_f0o1zo_k$ = function () {
    return this.crossAxisMax_1;
  };
  OrientationIndependentConstraints.prototype.stretchCrossAxis_c8o32c_k$ = function () {
    var tmp;
    Companion_getInstance_3();
    if (!(this.crossAxisMax_1 === 2147483647)) {
      tmp = this.crossAxisMax_1;
    } else {
      tmp = this.crossAxisMin_1;
    }
    return new OrientationIndependentConstraints(this.mainAxisMin_1, this.mainAxisMax_1, tmp, this.crossAxisMax_1);
  };
  OrientationIndependentConstraints.prototype.toBoxConstraints_ru6otq_k$ = function (orientation) {
    var tmp;
    if (orientation === LayoutOrientation_Horizontal_getInstance()) {
      tmp = Constraints_0(this.mainAxisMin_1, this.mainAxisMax_1, this.crossAxisMin_1, this.crossAxisMax_1);
    } else {
      tmp = Constraints_0(this.crossAxisMin_1, this.crossAxisMax_1, this.mainAxisMin_1, this.mainAxisMax_1);
    }
    return tmp;
  };
  OrientationIndependentConstraints.prototype.maxWidth_g16g1l_k$ = function (orientation) {
    var tmp;
    if (orientation === LayoutOrientation_Horizontal_getInstance()) {
      tmp = this.mainAxisMax_1;
    } else {
      tmp = this.crossAxisMax_1;
    }
    return tmp;
  };
  OrientationIndependentConstraints.prototype.maxHeight_1ee5ps_k$ = function (orientation) {
    var tmp;
    if (orientation === LayoutOrientation_Horizontal_getInstance()) {
      tmp = this.crossAxisMax_1;
    } else {
      tmp = this.mainAxisMax_1;
    }
    return tmp;
  };
  OrientationIndependentConstraints.prototype.component1_7eebsc_k$ = function () {
    return this.mainAxisMin_1;
  };
  OrientationIndependentConstraints.prototype.component2_7eebsb_k$ = function () {
    return this.mainAxisMax_1;
  };
  OrientationIndependentConstraints.prototype.component3_7eebsa_k$ = function () {
    return this.crossAxisMin_1;
  };
  OrientationIndependentConstraints.prototype.component4_7eebs9_k$ = function () {
    return this.crossAxisMax_1;
  };
  OrientationIndependentConstraints.prototype.copy_2hj87f_k$ = function (mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax) {
    return new OrientationIndependentConstraints(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
  };
  OrientationIndependentConstraints.prototype.copy$default_ccxy8g_k$ = function (mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      mainAxisMin = this.mainAxisMin_1;
    if (!(($mask0 & 2) === 0))
      mainAxisMax = this.mainAxisMax_1;
    if (!(($mask0 & 4) === 0))
      crossAxisMin = this.crossAxisMin_1;
    if (!(($mask0 & 8) === 0))
      crossAxisMax = this.crossAxisMax_1;
    return this.copy_2hj87f_k$(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
  };
  OrientationIndependentConstraints.prototype.toString = function () {
    return 'OrientationIndependentConstraints(mainAxisMin=' + this.mainAxisMin_1 + ', mainAxisMax=' + this.mainAxisMax_1 + ', crossAxisMin=' + this.crossAxisMin_1 + ', crossAxisMax=' + this.crossAxisMax_1 + ')';
  };
  OrientationIndependentConstraints.prototype.hashCode = function () {
    var result = this.mainAxisMin_1;
    result = imul(result, 31) + this.mainAxisMax_1 | 0;
    result = imul(result, 31) + this.crossAxisMin_1 | 0;
    result = imul(result, 31) + this.crossAxisMax_1 | 0;
    return result;
  };
  OrientationIndependentConstraints.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OrientationIndependentConstraints))
      return false;
    var tmp0_other_with_cast = other instanceof OrientationIndependentConstraints ? other : THROW_CCE();
    if (!(this.mainAxisMin_1 === tmp0_other_with_cast.mainAxisMin_1))
      return false;
    if (!(this.mainAxisMax_1 === tmp0_other_with_cast.mainAxisMax_1))
      return false;
    if (!(this.crossAxisMin_1 === tmp0_other_with_cast.crossAxisMin_1))
      return false;
    if (!(this.crossAxisMax_1 === tmp0_other_with_cast.crossAxisMax_1))
      return false;
    return true;
  };
  OrientationIndependentConstraints.$metadata$ = classMeta('OrientationIndependentConstraints');
  function RowColumnParentData_init_$Init$(weight, fill, crossAxisAlignment, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      weight = 0.0;
    if (!(($mask0 & 2) === 0))
      fill = true;
    if (!(($mask0 & 4) === 0))
      crossAxisAlignment = null;
    RowColumnParentData.call($this, weight, fill, crossAxisAlignment);
    return $this;
  }
  function RowColumnParentData_init_$Create$(weight, fill, crossAxisAlignment, $mask0, $marker) {
    return RowColumnParentData_init_$Init$(weight, fill, crossAxisAlignment, $mask0, $marker, Object.create(RowColumnParentData.prototype));
  }
  function RowColumnParentData(weight, fill, crossAxisAlignment) {
    this.weight_1 = weight;
    this.fill_1 = fill;
    this.crossAxisAlignment_1 = crossAxisAlignment;
  }
  RowColumnParentData.prototype.set_weight_m01gs8_k$ = function (_set____db54di) {
    this.weight_1 = _set____db54di;
  };
  RowColumnParentData.prototype.get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  RowColumnParentData.prototype.set_fill_4bxxsn_k$ = function (_set____db54di) {
    this.fill_1 = _set____db54di;
  };
  RowColumnParentData.prototype.get_fill_wom0ng_k$ = function () {
    return this.fill_1;
  };
  RowColumnParentData.prototype.set_crossAxisAlignment_lamcle_k$ = function (_set____db54di) {
    this.crossAxisAlignment_1 = _set____db54di;
  };
  RowColumnParentData.prototype.get_crossAxisAlignment_ebqiz9_k$ = function () {
    return this.crossAxisAlignment_1;
  };
  RowColumnParentData.prototype.component1_7eebsc_k$ = function () {
    return this.weight_1;
  };
  RowColumnParentData.prototype.component2_7eebsb_k$ = function () {
    return this.fill_1;
  };
  RowColumnParentData.prototype.component3_7eebsa_k$ = function () {
    return this.crossAxisAlignment_1;
  };
  RowColumnParentData.prototype.copy_he66y9_k$ = function (weight, fill, crossAxisAlignment) {
    return new RowColumnParentData(weight, fill, crossAxisAlignment);
  };
  RowColumnParentData.prototype.copy$default_pj7wge_k$ = function (weight, fill, crossAxisAlignment, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      weight = this.weight_1;
    if (!(($mask0 & 2) === 0))
      fill = this.fill_1;
    if (!(($mask0 & 4) === 0))
      crossAxisAlignment = this.crossAxisAlignment_1;
    return this.copy_he66y9_k$(weight, fill, crossAxisAlignment);
  };
  RowColumnParentData.prototype.toString = function () {
    return 'RowColumnParentData(weight=' + this.weight_1 + ', fill=' + this.fill_1 + ', crossAxisAlignment=' + this.crossAxisAlignment_1 + ')';
  };
  RowColumnParentData.prototype.hashCode = function () {
    var result = getNumberHashCode(this.weight_1);
    result = imul(result, 31) + (this.fill_1 | 0) | 0;
    result = imul(result, 31) + (this.crossAxisAlignment_1 == null ? 0 : hashCode(this.crossAxisAlignment_1)) | 0;
    return result;
  };
  RowColumnParentData.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowColumnParentData))
      return false;
    var tmp0_other_with_cast = other instanceof RowColumnParentData ? other : THROW_CCE();
    if (!equals(this.weight_1, tmp0_other_with_cast.weight_1))
      return false;
    if (!(this.fill_1 === tmp0_other_with_cast.fill_1))
      return false;
    if (!equals(this.crossAxisAlignment_1, tmp0_other_with_cast.crossAxisAlignment_1))
      return false;
    return true;
  };
  RowColumnParentData.$metadata$ = classMeta('RowColumnParentData');
  function get_data(_this__u8e3s4) {
    var tmp = _this__u8e3s4.get_parentData_o87vnn_k$();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function get_weight(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.weight_1;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  }
  function get_isRelative(_this__u8e3s4) {
    var tmp0_safe_receiver = get_crossAxisAlignment(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isRelative_skgyhr_k$();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function get_fill(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.fill_1;
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function get_crossAxisAlignment(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.crossAxisAlignment_1;
  }
  function MinIntrinsicWidthMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().HorizontalMinWidth_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().VerticalMinWidth_1;
    }
    return tmp;
  }
  function MinIntrinsicHeightMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().HorizontalMinHeight_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().VerticalMinHeight_1;
    }
    return tmp;
  }
  function MaxIntrinsicWidthMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().HorizontalMaxWidth_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().VerticalMaxWidth_1;
    }
    return tmp;
  }
  function MaxIntrinsicHeightMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().HorizontalMaxHeight_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().VerticalMaxHeight_1;
    }
    return tmp;
  }
  function IntrinsicMeasureBlocks$HorizontalMinWidth$lambda(measurables, availableHeight, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda_0, availableHeight, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Horizontal_getInstance());
  }
  function IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda($this$intrinsicSize, h) {
    return $this$intrinsicSize.minIntrinsicWidth_3wv0r6_k$(h);
  }
  function IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda_0($this$intrinsicSize, w) {
    return $this$intrinsicSize.maxIntrinsicHeight_cegb5z_k$(w);
  }
  function IntrinsicMeasureBlocks$VerticalMinWidth$lambda(measurables, availableHeight, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda_0, availableHeight, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Horizontal_getInstance());
  }
  function IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda($this$intrinsicSize, h) {
    return $this$intrinsicSize.minIntrinsicWidth_3wv0r6_k$(h);
  }
  function IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda_0($this$intrinsicSize, w) {
    return $this$intrinsicSize.maxIntrinsicHeight_cegb5z_k$(w);
  }
  function IntrinsicMeasureBlocks$HorizontalMinHeight$lambda(measurables, availableWidth, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda_0, availableWidth, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Vertical_getInstance());
  }
  function IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda($this$intrinsicSize, w) {
    return $this$intrinsicSize.minIntrinsicHeight_7ydhpj_k$(w);
  }
  function IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda_0($this$intrinsicSize, h) {
    return $this$intrinsicSize.maxIntrinsicWidth_g1vwkc_k$(h);
  }
  function IntrinsicMeasureBlocks$VerticalMinHeight$lambda(measurables, availableWidth, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda_0, availableWidth, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Vertical_getInstance());
  }
  function IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda($this$intrinsicSize, w) {
    return $this$intrinsicSize.minIntrinsicHeight_7ydhpj_k$(w);
  }
  function IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda_0($this$intrinsicSize, h) {
    return $this$intrinsicSize.maxIntrinsicWidth_g1vwkc_k$(h);
  }
  function IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda(measurables, availableHeight, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda_0, availableHeight, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Horizontal_getInstance());
  }
  function IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda($this$intrinsicSize, h) {
    return $this$intrinsicSize.maxIntrinsicWidth_g1vwkc_k$(h);
  }
  function IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda_0($this$intrinsicSize, w) {
    return $this$intrinsicSize.maxIntrinsicHeight_cegb5z_k$(w);
  }
  function IntrinsicMeasureBlocks$VerticalMaxWidth$lambda(measurables, availableHeight, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda_0, availableHeight, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Horizontal_getInstance());
  }
  function IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda($this$intrinsicSize, h) {
    return $this$intrinsicSize.maxIntrinsicWidth_g1vwkc_k$(h);
  }
  function IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda_0($this$intrinsicSize, w) {
    return $this$intrinsicSize.maxIntrinsicHeight_cegb5z_k$(w);
  }
  function IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda(measurables, availableWidth, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda_0, availableWidth, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Vertical_getInstance());
  }
  function IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda($this$intrinsicSize, w) {
    return $this$intrinsicSize.maxIntrinsicHeight_cegb5z_k$(w);
  }
  function IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda_0($this$intrinsicSize, h) {
    return $this$intrinsicSize.maxIntrinsicWidth_g1vwkc_k$(h);
  }
  function IntrinsicMeasureBlocks$VerticalMaxHeight$lambda(measurables, availableWidth, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda_0, availableWidth, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Vertical_getInstance());
  }
  function IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda($this$intrinsicSize, w) {
    return $this$intrinsicSize.maxIntrinsicHeight_cegb5z_k$(w);
  }
  function IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda_0($this$intrinsicSize, h) {
    return $this$intrinsicSize.maxIntrinsicWidth_g1vwkc_k$(h);
  }
  function IntrinsicMeasureBlocks() {
    IntrinsicMeasureBlocks_instance = this;
    var tmp = this;
    tmp.HorizontalMinWidth_1 = IntrinsicMeasureBlocks$HorizontalMinWidth$lambda;
    var tmp_0 = this;
    tmp_0.VerticalMinWidth_1 = IntrinsicMeasureBlocks$VerticalMinWidth$lambda;
    var tmp_1 = this;
    tmp_1.HorizontalMinHeight_1 = IntrinsicMeasureBlocks$HorizontalMinHeight$lambda;
    var tmp_2 = this;
    tmp_2.VerticalMinHeight_1 = IntrinsicMeasureBlocks$VerticalMinHeight$lambda;
    var tmp_3 = this;
    tmp_3.HorizontalMaxWidth_1 = IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda;
    var tmp_4 = this;
    tmp_4.VerticalMaxWidth_1 = IntrinsicMeasureBlocks$VerticalMaxWidth$lambda;
    var tmp_5 = this;
    tmp_5.HorizontalMaxHeight_1 = IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda;
    var tmp_6 = this;
    tmp_6.VerticalMaxHeight_1 = IntrinsicMeasureBlocks$VerticalMaxHeight$lambda;
  }
  IntrinsicMeasureBlocks.prototype.get_HorizontalMinWidth_u55zsv_k$ = function () {
    return this.HorizontalMinWidth_1;
  };
  IntrinsicMeasureBlocks.prototype.get_VerticalMinWidth_gd1cdp_k$ = function () {
    return this.VerticalMinWidth_1;
  };
  IntrinsicMeasureBlocks.prototype.get_HorizontalMinHeight_i7hp2s_k$ = function () {
    return this.HorizontalMinHeight_1;
  };
  IntrinsicMeasureBlocks.prototype.get_VerticalMinHeight_h65uva_k$ = function () {
    return this.VerticalMinHeight_1;
  };
  IntrinsicMeasureBlocks.prototype.get_HorizontalMaxWidth_rnxox_k$ = function () {
    return this.HorizontalMaxWidth_1;
  };
  IntrinsicMeasureBlocks.prototype.get_VerticalMaxWidth_d0gpq9_k$ = function () {
    return this.VerticalMaxWidth_1;
  };
  IntrinsicMeasureBlocks.prototype.get_HorizontalMaxHeight_uzelcy_k$ = function () {
    return this.HorizontalMaxHeight_1;
  };
  IntrinsicMeasureBlocks.prototype.get_VerticalMaxHeight_ty2r5g_k$ = function () {
    return this.VerticalMaxHeight_1;
  };
  IntrinsicMeasureBlocks.$metadata$ = objectMeta('IntrinsicMeasureBlocks');
  var IntrinsicMeasureBlocks_instance;
  function IntrinsicMeasureBlocks_getInstance() {
    if (IntrinsicMeasureBlocks_instance == null)
      new IntrinsicMeasureBlocks();
    return IntrinsicMeasureBlocks_instance;
  }
  function intrinsicSize(children, intrinsicMainSize, intrinsicCrossSize, crossAxisAvailable, mainAxisSpacing, layoutOrientation, intrinsicOrientation) {
    var tmp;
    if (layoutOrientation.equals(intrinsicOrientation)) {
      tmp = intrinsicMainAxisSize(children, intrinsicMainSize, crossAxisAvailable, mainAxisSpacing);
    } else {
      tmp = intrinsicCrossAxisSize(children, intrinsicCrossSize, intrinsicMainSize, crossAxisAvailable, mainAxisSpacing);
    }
    return tmp;
  }
  function intrinsicMainAxisSize(children, mainAxisSize, crossAxisAvailable, mainAxisSpacing) {
    var weightUnitSpace = 0;
    var fixedSpace = 0;
    var totalWeight = 0.0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = children.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = children.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize.<anonymous>' call
        var weight = get_weight(get_data(item));
        var size = mainAxisSize(item, crossAxisAvailable);
        if (weight === 0.0) {
          fixedSpace = fixedSpace + size | 0;
        } else if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          var tmp$ret$1;
          // Inline function 'kotlin.math.max' call
          var tmp1_max = weightUnitSpace;
          var tmp$ret$0;
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt = size / weight;
          tmp$ret$0 = roundToInt(tmp0_roundToInt);
          var tmp2_max = tmp$ret$0;
          tmp$ret$1 = Math.max(tmp1_max, tmp2_max);
          weightUnitSpace = tmp$ret$1;
        }
      }
       while (inductionVariable <= last);
    var tmp$ret$2;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt_0 = weightUnitSpace * totalWeight;
    tmp$ret$2 = roundToInt(tmp0_roundToInt_0);
    return (tmp$ret$2 + fixedSpace | 0) + imul(children.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing) | 0;
  }
  function intrinsicCrossAxisSize(children, mainAxisSize, crossAxisSize, mainAxisAvailable, mainAxisSpacing) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = imul(children.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing);
    tmp$ret$0 = Math.min(tmp0_min, mainAxisAvailable);
    var fixedSpace = tmp$ret$0;
    var crossAxisMax = 0;
    var totalWeight = 0.0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = children.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = children.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
        var weight = get_weight(get_data(item));
        if (weight === 0.0) {
          var tmp$ret$1;
          // Inline function 'kotlin.math.min' call
          Companion_getInstance_3();
          var tmp0_min_0 = mainAxisSize(item, 2147483647);
          var tmp1_min = mainAxisAvailable - fixedSpace | 0;
          tmp$ret$1 = Math.min(tmp0_min_0, tmp1_min);
          var mainAxisSpace = tmp$ret$1;
          fixedSpace = fixedSpace + mainAxisSpace | 0;
          var tmp$ret$2;
          // Inline function 'kotlin.math.max' call
          var tmp2_max = crossAxisMax;
          var tmp3_max = crossAxisSize(item, mainAxisSpace);
          tmp$ret$2 = Math.max(tmp2_max, tmp3_max);
          crossAxisMax = tmp$ret$2;
        } else if (weight > 0.0) {
          totalWeight = totalWeight + weight;
        }
      }
       while (inductionVariable <= last);
    var tmp;
    if (totalWeight === 0.0) {
      tmp = 0;
    } else {
      Companion_getInstance_3();
      if (mainAxisAvailable === 2147483647) {
        Companion_getInstance_3();
        tmp = 2147483647;
      } else {
        var tmp$ret$4;
        // Inline function 'kotlin.math.roundToInt' call
        var tmp$ret$3;
        // Inline function 'kotlin.math.max' call
        var tmp1_max = mainAxisAvailable - fixedSpace | 0;
        tmp$ret$3 = Math.max(tmp1_max, 0);
        var tmp2_roundToInt = tmp$ret$3 / totalWeight;
        tmp$ret$4 = roundToInt(tmp2_roundToInt);
        tmp = tmp$ret$4;
      }
    }
    var weightUnitSpace = tmp;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = children.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = children.get_fkrdnv_k$(index_0);
        // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
        var weight_0 = get_weight(get_data(item_0));
        if (weight_0 > 0.0) {
          var tmp$ret$6;
          // Inline function 'kotlin.math.max' call
          var tmp1_max_0 = crossAxisMax;
          var tmp_0;
          Companion_getInstance_3();
          if (!(weightUnitSpace === 2147483647)) {
            var tmp$ret$5;
            // Inline function 'kotlin.math.roundToInt' call
            var tmp0_roundToInt = weightUnitSpace * weight_0;
            tmp$ret$5 = roundToInt(tmp0_roundToInt);
            tmp_0 = tmp$ret$5;
          } else {
            Companion_getInstance_3();
            tmp_0 = 2147483647;
          }
          var tmp2_max_0 = crossAxisSize(item_0, tmp_0);
          tmp$ret$6 = Math.max(tmp1_max_0, tmp2_max_0);
          crossAxisMax = tmp$ret$6;
        }
      }
       while (inductionVariable_0 <= last_0);
    return crossAxisMax;
  }
  function LayoutWeightImpl(weight, fill, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.weight_1 = weight;
    this.fill_1 = fill;
  }
  LayoutWeightImpl.prototype.get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  LayoutWeightImpl.prototype.get_fill_wom0ng_k$ = function () {
    return this.fill_1;
  };
  LayoutWeightImpl.prototype.modifyParentData_x7ztp7_k$ = function (_this__u8e3s4, parentData) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = RowColumnParentData_init_$Create$(0.0, false, null, 7, null);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp0_also = tmp;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.LayoutWeightImpl.modifyParentData.<anonymous>' call
    tmp0_also.weight_1 = this.weight_1;
    tmp0_also.fill_1 = this.fill_1;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  LayoutWeightImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof LayoutWeightImpl ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return this.weight_1 === otherModifier.weight_1 ? this.fill_1 === otherModifier.fill_1 : false;
  };
  LayoutWeightImpl.prototype.hashCode = function () {
    var result = getNumberHashCode(this.weight_1);
    result = imul(31, result) + (this.fill_1 | 0) | 0;
    return result;
  };
  LayoutWeightImpl.prototype.toString = function () {
    return 'LayoutWeightImpl(weight=' + this.weight_1 + ', fill=' + this.fill_1 + ')';
  };
  LayoutWeightImpl.$metadata$ = classMeta('LayoutWeightImpl', [ParentDataModifier], undefined, undefined, undefined, InspectorValueInfo.prototype);
  function HorizontalAlignModifier(horizontal, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.horizontal_1 = horizontal;
  }
  HorizontalAlignModifier.prototype.get_horizontal_2rwn8t_k$ = function () {
    return this.horizontal_1;
  };
  HorizontalAlignModifier.prototype.modifyParentData_x7ztp7_k$ = function (_this__u8e3s4, parentData) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = RowColumnParentData_init_$Create$(0.0, false, null, 7, null);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp0_also = tmp;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.HorizontalAlignModifier.modifyParentData.<anonymous>' call
    tmp0_also.crossAxisAlignment_1 = Companion_getInstance_7().horizontal_d2uuko_k$(this.horizontal_1);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  HorizontalAlignModifier.prototype.equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof HorizontalAlignModifier ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.horizontal_1, otherModifier.horizontal_1);
  };
  HorizontalAlignModifier.prototype.hashCode = function () {
    return hashCode(this.horizontal_1);
  };
  HorizontalAlignModifier.prototype.toString = function () {
    return 'HorizontalAlignModifier(horizontal=' + this.horizontal_1 + ')';
  };
  HorizontalAlignModifier.$metadata$ = classMeta('HorizontalAlignModifier', [ParentDataModifier], undefined, undefined, undefined, InspectorValueInfo.prototype);
  function WithAlignmentLineBlock(block, inspectorInfo) {
    SiblingsAlignedModifier.call(this, inspectorInfo);
    this.block_1 = block;
  }
  WithAlignmentLineBlock.prototype.get_block_ip8l7o_k$ = function () {
    return this.block_1;
  };
  WithAlignmentLineBlock.prototype.modifyParentData_x7ztp7_k$ = function (_this__u8e3s4, parentData) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = RowColumnParentData_init_$Create$(0.0, false, null, 7, null);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp0_also = tmp;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.WithAlignmentLineBlock.modifyParentData.<anonymous>' call
    tmp0_also.crossAxisAlignment_1 = Companion_getInstance_7().Relative_767dzl_k$(new Block(this.block_1));
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  WithAlignmentLineBlock.prototype.equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof WithAlignmentLineBlock ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.block_1, otherModifier.block_1);
  };
  WithAlignmentLineBlock.prototype.hashCode = function () {
    return hashCode(this.block_1);
  };
  WithAlignmentLineBlock.prototype.toString = function () {
    return 'WithAlignmentLineBlock(block=' + this.block_1 + ')';
  };
  WithAlignmentLineBlock.$metadata$ = classMeta('WithAlignmentLineBlock', undefined, undefined, undefined, undefined, SiblingsAlignedModifier.prototype);
  function WithAlignmentLine(alignmentLine, inspectorInfo) {
    SiblingsAlignedModifier.call(this, inspectorInfo);
    this.alignmentLine_1 = alignmentLine;
  }
  WithAlignmentLine.prototype.get_alignmentLine_xlj9o2_k$ = function () {
    return this.alignmentLine_1;
  };
  WithAlignmentLine.prototype.modifyParentData_x7ztp7_k$ = function (_this__u8e3s4, parentData) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = RowColumnParentData_init_$Create$(0.0, false, null, 7, null);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp0_also = tmp;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.WithAlignmentLine.modifyParentData.<anonymous>' call
    tmp0_also.crossAxisAlignment_1 = Companion_getInstance_7().Relative_767dzl_k$(new Value(this.alignmentLine_1));
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  WithAlignmentLine.prototype.equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof WithAlignmentLine ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.alignmentLine_1, otherModifier.alignmentLine_1);
  };
  WithAlignmentLine.prototype.hashCode = function () {
    return hashCode(this.alignmentLine_1);
  };
  WithAlignmentLine.prototype.toString = function () {
    return 'WithAlignmentLine(line=' + this.alignmentLine_1 + ')';
  };
  WithAlignmentLine.$metadata$ = classMeta('WithAlignmentLine', undefined, undefined, undefined, undefined, SiblingsAlignedModifier.prototype);
  function SiblingsAlignedModifier(inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
  }
  SiblingsAlignedModifier.$metadata$ = classMeta('SiblingsAlignedModifier', [ParentDataModifier], undefined, undefined, undefined, InspectorValueInfo.prototype);
  function VerticalAlignModifier(vertical, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.vertical_1 = vertical;
  }
  VerticalAlignModifier.prototype.get_vertical_6ev9z3_k$ = function () {
    return this.vertical_1;
  };
  VerticalAlignModifier.prototype.modifyParentData_x7ztp7_k$ = function (_this__u8e3s4, parentData) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = RowColumnParentData_init_$Create$(0.0, false, null, 7, null);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp0_also = tmp;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.VerticalAlignModifier.modifyParentData.<anonymous>' call
    tmp0_also.crossAxisAlignment_1 = Companion_getInstance_7().vertical_qzmr60_k$(this.vertical_1);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  VerticalAlignModifier.prototype.equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof VerticalAlignModifier ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.vertical_1, otherModifier.vertical_1);
  };
  VerticalAlignModifier.prototype.hashCode = function () {
    return hashCode(this.vertical_1);
  };
  VerticalAlignModifier.prototype.toString = function () {
    return 'VerticalAlignModifier(vertical=' + this.vertical_1 + ')';
  };
  VerticalAlignModifier.$metadata$ = classMeta('VerticalAlignModifier', [ParentDataModifier], undefined, undefined, undefined, InspectorValueInfo.prototype);
  function rowColumnMeasurePolicy$mainAxisSize(_this__u8e3s4, $orientation) {
    return $orientation.equals(LayoutOrientation_Horizontal_getInstance()) ? _this__u8e3s4.width_1 : _this__u8e3s4.height_1;
  }
  function rowColumnMeasurePolicy$crossAxisSize(_this__u8e3s4, $orientation) {
    return $orientation.equals(LayoutOrientation_Horizontal_getInstance()) ? _this__u8e3s4.height_1 : _this__u8e3s4.width_1;
  }
  function rowColumnMeasurePolicy$o$measure$lambda($measurables, $placeables, $arrangement, $mainAxisLayoutSize, $this_measure, $mainAxisPositions, $rowColumnParentData, $crossAxisAlignment, $crossAxisLayoutSize, $orientation, $beforeCrossAxisAlignmentLine) {
    return function ($this$layout) {
      var tmp = 0;
      var tmp_0 = $measurables.get_size_woubt6_k$();
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.layout.<no name provided>.measure.<anonymous>.<anonymous>' call
        tmp$ret$0 = rowColumnMeasurePolicy$mainAxisSize(ensureNotNull($placeables[tmp_2]), $orientation);
        tmp_1[tmp_2] = tmp$ret$0;
        tmp = tmp + 1 | 0;
      }
      var childrenMainAxisSize = tmp_1;
      $arrangement($mainAxisLayoutSize, childrenMainAxisSize, $this_measure.get_layoutDirection_7e37v0_k$(), $this_measure, $mainAxisPositions);
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.<no name provided>.measure.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp0__anonymous__q1qw7t = tmp1;
        ensureNotNull(item);
        var parentData = $rowColumnParentData[tmp0__anonymous__q1qw7t];
        var tmp0_elvis_lhs = get_crossAxisAlignment(parentData);
        var childCrossAlignment = tmp0_elvis_lhs == null ? $crossAxisAlignment : tmp0_elvis_lhs;
        var tmp_3 = $crossAxisLayoutSize - rowColumnMeasurePolicy$crossAxisSize(item, $orientation) | 0;
        var tmp_4;
        if ($orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
          tmp_4 = LayoutDirection_Ltr_getInstance();
        } else {
          tmp_4 = $this_measure.get_layoutDirection_7e37v0_k$();
        }
        var crossAxis = childCrossAlignment.align_gldapf_k$(tmp_3, tmp_4, item, $beforeCrossAxisAlignmentLine._v);
        if ($orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
          var tmp_5 = $mainAxisPositions[tmp0__anonymous__q1qw7t];
          $this$layout.place$default_lnyts6_k$(item, tmp_5, crossAxis, 0.0, 4, null);
        } else {
          var tmp_6 = $mainAxisPositions[tmp0__anonymous__q1qw7t];
          $this$layout.place$default_lnyts6_k$(item, crossAxis, tmp_6, 0.0, 4, null);
        }
      }
      return Unit_getInstance();
    };
  }
  function rowColumnMeasurePolicy$1($orientation, $arrangementSpacing, $crossAxisSize, $arrangement, $crossAxisAlignment) {
    this.$orientation_1 = $orientation;
    this.$arrangementSpacing_1 = $arrangementSpacing;
    this.$crossAxisSize_1 = $crossAxisSize;
    this.$arrangement_1 = $arrangement;
    this.$crossAxisAlignment_1 = $crossAxisAlignment;
  }
  rowColumnMeasurePolicy$1.prototype.measure_i7pm3b_k$ = function (_this__u8e3s4, measurables, constraints) {
    var constraints_0 = OrientationIndependentConstraints_init_$Create$(constraints, this.$orientation_1);
    var arrangementSpacingPx = _this__u8e3s4.roundToPx_hl1u8z_k$(this.$arrangementSpacing_1);
    var totalWeight = 0.0;
    var fixedSpace = 0;
    var crossAxisSpace = 0;
    var weightChildrenCount = 0;
    var anyAlignBy = false;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = measurables.get_size_woubt6_k$();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var placeables = tmp$ret$0;
    var tmp = 0;
    var tmp_0 = measurables.get_size_woubt6_k$();
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$1 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$1;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$2;
      // Inline function 'androidx.compose.foundation.layout.<no name provided>.measure.<anonymous>' call
      tmp$ret$2 = get_data(measurables.get_fkrdnv_k$(tmp_2));
      tmp_1[tmp_2] = tmp$ret$2;
      tmp = tmp + 1 | 0;
    }
    var rowColumnParentData = tmp_1;
    var spaceAfterLastNoWeight = 0;
    var inductionVariable = 0;
    var last = measurables.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var child = measurables.get_fkrdnv_k$(i);
        var parentData = rowColumnParentData[i];
        var weight = get_weight(parentData);
        if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          weightChildrenCount = weightChildrenCount + 1 | 0;
        } else {
          var mainAxisMax = constraints_0.mainAxisMax_1;
          var tmp_3;
          Companion_getInstance_3();
          if (mainAxisMax === 2147483647) {
            Companion_getInstance_3();
            tmp_3 = 2147483647;
          } else {
            tmp_3 = mainAxisMax - fixedSpace | 0;
          }
          var tmp_4 = tmp_3;
          var placeable = child.measure_ikak0q_k$(constraints_0.copy$default_ccxy8g_k$(0, tmp_4, 0, 0, 8, null).toBoxConstraints_ru6otq_k$(this.$orientation_1));
          var tmp$ret$3;
          // Inline function 'kotlin.math.min' call
          var tmp1_min = (mainAxisMax - fixedSpace | 0) - rowColumnMeasurePolicy$mainAxisSize(placeable, this.$orientation_1) | 0;
          tmp$ret$3 = Math.min(arrangementSpacingPx, tmp1_min);
          spaceAfterLastNoWeight = tmp$ret$3;
          fixedSpace = fixedSpace + (rowColumnMeasurePolicy$mainAxisSize(placeable, this.$orientation_1) + spaceAfterLastNoWeight | 0) | 0;
          var tmp$ret$4;
          // Inline function 'kotlin.math.max' call
          var tmp2_max = crossAxisSpace;
          var tmp3_max = rowColumnMeasurePolicy$crossAxisSize(placeable, this.$orientation_1);
          tmp$ret$4 = Math.max(tmp2_max, tmp3_max);
          crossAxisSpace = tmp$ret$4;
          anyAlignBy = anyAlignBy ? true : get_isRelative(parentData);
          placeables[i] = placeable;
        }
      }
       while (inductionVariable <= last);
    var weightedSpace = 0;
    if (weightChildrenCount === 0) {
      fixedSpace = fixedSpace - spaceAfterLastNoWeight | 0;
    } else {
      var tmp_5;
      var tmp_6;
      if (totalWeight > 0.0) {
        Companion_getInstance_3();
        tmp_6 = !(constraints_0.mainAxisMax_1 === 2147483647);
      } else {
        tmp_6 = false;
      }
      if (tmp_6) {
        tmp_5 = constraints_0.mainAxisMax_1;
      } else {
        tmp_5 = constraints_0.mainAxisMin_1;
      }
      var targetSpace = tmp_5;
      var remainingToTarget = (targetSpace - fixedSpace | 0) - imul(arrangementSpacingPx, weightChildrenCount - 1 | 0) | 0;
      var weightUnitSpace = totalWeight > 0 ? remainingToTarget / totalWeight : 0.0;
      var tmp$ret$7;
      // Inline function 'kotlin.collections.sumOf' call
      var sum = 0;
      var indexedObject = rowColumnParentData;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject.length;
      while (inductionVariable_0 < last_0) {
        var element = indexedObject[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp_7 = sum;
        var tmp$ret$6;
        // Inline function 'androidx.compose.foundation.layout.<no name provided>.measure.<anonymous>' call
        var tmp$ret$5;
        // Inline function 'kotlin.math.roundToInt' call
        var tmp0_roundToInt = weightUnitSpace * get_weight(element);
        tmp$ret$5 = roundToInt(tmp0_roundToInt);
        tmp$ret$6 = tmp$ret$5;
        sum = tmp_7 + tmp$ret$6 | 0;
      }
      tmp$ret$7 = sum;
      var remainder = remainingToTarget - tmp$ret$7 | 0;
      var inductionVariable_1 = 0;
      var last_1 = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var i_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          if (placeables[i_0] == null) {
            var child_0 = measurables.get_fkrdnv_k$(i_0);
            var parentData_0 = rowColumnParentData[i_0];
            var weight_0 = get_weight(parentData_0);
            // Inline function 'kotlin.check' call
            var tmp4_check = weight_0 > 0;
            // Inline function 'kotlin.contracts.contract' call
            if (!tmp4_check) {
              var tmp$ret$8;
              // Inline function 'androidx.compose.foundation.layout.<no name provided>.measure.<anonymous>' call
              tmp$ret$8 = 'All weights <= 0 should have placeables';
              var message = tmp$ret$8;
              throw IllegalStateException_init_$Create$(toString(message));
            }
            var remainderUnit = get_sign(remainder);
            remainder = remainder - remainderUnit | 0;
            var tmp$ret$10;
            // Inline function 'kotlin.math.max' call
            var tmp$ret$9;
            // Inline function 'kotlin.math.roundToInt' call
            var tmp5_roundToInt = weightUnitSpace * weight_0;
            tmp$ret$9 = roundToInt(tmp5_roundToInt);
            var tmp6_max = tmp$ret$9 + remainderUnit | 0;
            tmp$ret$10 = Math.max(0, tmp6_max);
            var childMainAxisSize = tmp$ret$10;
            var tmp_8;
            var tmp_9;
            if (get_fill(parentData_0)) {
              Companion_getInstance_3();
              tmp_9 = !(childMainAxisSize === 2147483647);
            } else {
              tmp_9 = false;
            }
            if (tmp_9) {
              tmp_8 = childMainAxisSize;
            } else {
              tmp_8 = 0;
            }
            var placeable_0 = child_0.measure_ikak0q_k$((new OrientationIndependentConstraints(tmp_8, childMainAxisSize, 0, constraints_0.crossAxisMax_1)).toBoxConstraints_ru6otq_k$(this.$orientation_1));
            weightedSpace = weightedSpace + rowColumnMeasurePolicy$mainAxisSize(placeable_0, this.$orientation_1) | 0;
            var tmp$ret$11;
            // Inline function 'kotlin.math.max' call
            var tmp7_max = crossAxisSpace;
            var tmp8_max = rowColumnMeasurePolicy$crossAxisSize(placeable_0, this.$orientation_1);
            tmp$ret$11 = Math.max(tmp7_max, tmp8_max);
            crossAxisSpace = tmp$ret$11;
            anyAlignBy = anyAlignBy ? true : get_isRelative(parentData_0);
            placeables[i_0] = placeable_0;
          }
        }
         while (inductionVariable_1 <= last_1);
      weightedSpace = coerceAtMost(weightedSpace + imul(arrangementSpacingPx, weightChildrenCount - 1 | 0) | 0, constraints_0.mainAxisMax_1 - fixedSpace | 0);
    }
    var beforeCrossAxisAlignmentLine = {_v: 0};
    var afterCrossAxisAlignmentLine = 0;
    if (anyAlignBy) {
      var inductionVariable_2 = 0;
      var last_2 = placeables.length - 1 | 0;
      if (inductionVariable_2 <= last_2)
        do {
          var i_1 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var placeable_1 = ensureNotNull(placeables[i_1]);
          var parentData_1 = rowColumnParentData[i_1];
          var tmp3_safe_receiver = get_crossAxisAlignment(parentData_1);
          var alignmentLinePosition = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.calculateAlignmentLinePosition_92xdb9_k$(placeable_1);
          if (!(alignmentLinePosition == null)) {
            var tmp$ret$14;
            // Inline function 'kotlin.math.max' call
            var tmp9_max = beforeCrossAxisAlignmentLine._v;
            var tmp$ret$13;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$12;
            // Inline function 'androidx.compose.foundation.layout.<no name provided>.measure.<anonymous>' call
            var tmp_10;
            Companion_getInstance_5();
            if (!(alignmentLinePosition === -2147483648)) {
              tmp_10 = alignmentLinePosition;
            } else {
              tmp_10 = 0;
            }
            tmp$ret$12 = tmp_10;
            tmp$ret$13 = tmp$ret$12;
            var tmp10_max = tmp$ret$13;
            tmp$ret$14 = Math.max(tmp9_max, tmp10_max);
            beforeCrossAxisAlignmentLine._v = tmp$ret$14;
            var tmp$ret$17;
            // Inline function 'kotlin.math.max' call
            var tmp11_max = afterCrossAxisAlignmentLine;
            var tmp_11 = rowColumnMeasurePolicy$crossAxisSize(placeable_1, this.$orientation_1);
            var tmp$ret$16;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$15;
            // Inline function 'androidx.compose.foundation.layout.<no name provided>.measure.<anonymous>' call
            var tmp_12;
            Companion_getInstance_5();
            if (!(alignmentLinePosition === -2147483648)) {
              tmp_12 = alignmentLinePosition;
            } else {
              tmp_12 = rowColumnMeasurePolicy$crossAxisSize(placeable_1, this.$orientation_1);
            }
            tmp$ret$15 = tmp_12;
            tmp$ret$16 = tmp$ret$15;
            var tmp12_max = tmp_11 - tmp$ret$16 | 0;
            tmp$ret$17 = Math.max(tmp11_max, tmp12_max);
            afterCrossAxisAlignmentLine = tmp$ret$17;
          }
        }
         while (inductionVariable_2 <= last_2);
    }
    var tmp$ret$18;
    // Inline function 'kotlin.math.max' call
    var tmp13_max = fixedSpace + weightedSpace | 0;
    var tmp14_max = constraints_0.mainAxisMin_1;
    tmp$ret$18 = Math.max(tmp13_max, tmp14_max);
    var mainAxisLayoutSize = tmp$ret$18;
    var tmp_13;
    var tmp_14;
    Companion_getInstance_3();
    if (!(constraints_0.crossAxisMax_1 === 2147483647)) {
      tmp_14 = this.$crossAxisSize_1.equals(SizeMode_Expand_getInstance());
    } else {
      tmp_14 = false;
    }
    if (tmp_14) {
      tmp_13 = constraints_0.crossAxisMax_1;
    } else {
      var tmp$ret$20;
      // Inline function 'kotlin.math.max' call
      var tmp17_max = crossAxisSpace;
      var tmp$ret$19;
      // Inline function 'kotlin.math.max' call
      var tmp15_max = constraints_0.crossAxisMin_1;
      var tmp16_max = beforeCrossAxisAlignmentLine._v + afterCrossAxisAlignmentLine | 0;
      tmp$ret$19 = Math.max(tmp15_max, tmp16_max);
      var tmp18_max = tmp$ret$19;
      tmp$ret$20 = Math.max(tmp17_max, tmp18_max);
      tmp_13 = tmp$ret$20;
    }
    var crossAxisLayoutSize = tmp_13;
    var tmp_15;
    if (this.$orientation_1.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp_15 = mainAxisLayoutSize;
    } else {
      tmp_15 = crossAxisLayoutSize;
    }
    var layoutWidth = tmp_15;
    var tmp_16;
    if (this.$orientation_1.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp_16 = crossAxisLayoutSize;
    } else {
      tmp_16 = mainAxisLayoutSize;
    }
    var layoutHeight = tmp_16;
    var tmp_17 = 0;
    var tmp_18 = measurables.get_size_woubt6_k$();
    var tmp_19 = new Int32Array(tmp_18);
    while (tmp_17 < tmp_18) {
      var tmp_20 = tmp_17;
      var tmp$ret$21;
      // Inline function 'androidx.compose.foundation.layout.<no name provided>.measure.<anonymous>' call
      tmp$ret$21 = 0;
      tmp_19[tmp_20] = tmp$ret$21;
      tmp_17 = tmp_17 + 1 | 0;
    }
    var mainAxisPositions = tmp_19;
    return _this__u8e3s4.layout$default_yb6zmd_k$(layoutWidth, layoutHeight, null, rowColumnMeasurePolicy$o$measure$lambda(measurables, placeables, this.$arrangement_1, mainAxisLayoutSize, _this__u8e3s4, mainAxisPositions, rowColumnParentData, this.$crossAxisAlignment_1, crossAxisLayoutSize, this.$orientation_1, beforeCrossAxisAlignmentLine), 4, null);
  };
  rowColumnMeasurePolicy$1.prototype.minIntrinsicWidth_h4fdo9_k$ = function (_this__u8e3s4, measurables, height) {
    return MinIntrinsicWidthMeasureBlock(this.$orientation_1)(measurables, height, _this__u8e3s4.roundToPx_hl1u8z_k$(this.$arrangementSpacing_1));
  };
  rowColumnMeasurePolicy$1.prototype.minIntrinsicHeight_n7gxym_k$ = function (_this__u8e3s4, measurables, width) {
    return MinIntrinsicHeightMeasureBlock(this.$orientation_1)(measurables, width, _this__u8e3s4.roundToPx_hl1u8z_k$(this.$arrangementSpacing_1));
  };
  rowColumnMeasurePolicy$1.prototype.maxIntrinsicWidth_4tn57d_k$ = function (_this__u8e3s4, measurables, height) {
    return MaxIntrinsicWidthMeasureBlock(this.$orientation_1)(measurables, height, _this__u8e3s4.roundToPx_hl1u8z_k$(this.$arrangementSpacing_1));
  };
  rowColumnMeasurePolicy$1.prototype.maxIntrinsicHeight_6rhckk_k$ = function (_this__u8e3s4, measurables, width) {
    return MaxIntrinsicHeightMeasureBlock(this.$orientation_1)(measurables, width, _this__u8e3s4.roundToPx_hl1u8z_k$(this.$arrangementSpacing_1));
  };
  rowColumnMeasurePolicy$1.$metadata$ = classMeta(undefined, [MeasurePolicy]);
  function LayoutOrientation_Horizontal_getInstance() {
    LayoutOrientation_initEntries();
    return LayoutOrientation_Horizontal_instance;
  }
  function LayoutOrientation_Vertical_getInstance() {
    LayoutOrientation_initEntries();
    return LayoutOrientation_Vertical_instance;
  }
  function SizeMode_Wrap_getInstance() {
    SizeMode_initEntries();
    return SizeMode_Wrap_instance;
  }
  function SizeMode_Expand_getInstance() {
    SizeMode_initEntries();
    return SizeMode_Expand_instance;
  }
  function get_FillWholeMaxWidth() {
    init_properties_Size_kt_c1emiv();
    return FillWholeMaxWidth;
  }
  var FillWholeMaxWidth;
  function get_FillWholeMaxHeight() {
    init_properties_Size_kt_c1emiv();
    return FillWholeMaxHeight;
  }
  var FillWholeMaxHeight;
  function get_FillWholeMaxSize() {
    init_properties_Size_kt_c1emiv();
    return FillWholeMaxSize;
  }
  var FillWholeMaxSize;
  function get_WrapContentWidthCenter() {
    init_properties_Size_kt_c1emiv();
    return WrapContentWidthCenter;
  }
  var WrapContentWidthCenter;
  function get_WrapContentWidthStart() {
    init_properties_Size_kt_c1emiv();
    return WrapContentWidthStart;
  }
  var WrapContentWidthStart;
  function get_WrapContentHeightCenter() {
    init_properties_Size_kt_c1emiv();
    return WrapContentHeightCenter;
  }
  var WrapContentHeightCenter;
  function get_WrapContentHeightTop() {
    init_properties_Size_kt_c1emiv();
    return WrapContentHeightTop;
  }
  var WrapContentHeightTop;
  function get_WrapContentSizeCenter() {
    init_properties_Size_kt_c1emiv();
    return WrapContentSizeCenter;
  }
  var WrapContentSizeCenter;
  function get_WrapContentSizeTopStart() {
    init_properties_Size_kt_c1emiv();
    return WrapContentSizeTopStart;
  }
  var WrapContentSizeTopStart;
  function _get_direction__hwzary($this) {
    return $this.direction_1;
  }
  function _get_fraction__t0yzux($this) {
    return $this.fraction_1;
  }
  function FillModifier$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.placeRelative$default_lh46qu_k$($placeable, 0, 0, 0.0, 4, null);
      return Unit_getInstance();
    };
  }
  function FillModifier(direction, fraction, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.direction_1 = direction;
    this.fraction_1 = fraction;
  }
  FillModifier.prototype.measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    var minWidth;
    var maxWidth;
    if (_Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) ? !this.direction_1.equals(Direction_Vertical_getInstance()) : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = _Constraints___get_maxWidth__impl__uuyqc(constraints) * this.fraction_1;
      tmp$ret$0 = roundToInt(tmp0_roundToInt);
      var width = coerceIn(tmp$ret$0, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
      minWidth = width;
      maxWidth = width;
    } else {
      minWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      maxWidth = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var minHeight;
    var maxHeight;
    if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints) ? !this.direction_1.equals(Direction_Horizontal_getInstance()) : false) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp1_roundToInt = _Constraints___get_maxHeight__impl__dt3e8z(constraints) * this.fraction_1;
      tmp$ret$1 = roundToInt(tmp1_roundToInt);
      var height = coerceIn(tmp$ret$1, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
      minHeight = height;
      maxHeight = height;
    } else {
      minHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var placeable = measurable.measure_ikak0q_k$(Constraints_0(minWidth, maxWidth, minHeight, maxHeight));
    var tmp = placeable.width_1;
    var tmp_0 = placeable.height_1;
    return _this__u8e3s4.layout$default_yb6zmd_k$(tmp, tmp_0, null, FillModifier$measure$lambda(placeable), 4, null);
  };
  FillModifier.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof FillModifier) {
      tmp_0 = this.direction_1.equals(other.direction_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.fraction_1 === other.fraction_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  FillModifier.prototype.hashCode = function () {
    return imul(this.direction_1.hashCode(), 31) + getNumberHashCode(this.fraction_1) | 0;
  };
  FillModifier.$metadata$ = classMeta('FillModifier', [LayoutModifier], undefined, undefined, undefined, InspectorValueInfo.prototype);
  function createFillWidthModifier(fraction) {
    init_properties_Size_kt_c1emiv();
    var tmp = Direction_Horizontal_getInstance();
    return new FillModifier(tmp, fraction, createFillWidthModifier$lambda(fraction));
  }
  function createFillHeightModifier(fraction) {
    init_properties_Size_kt_c1emiv();
    var tmp = Direction_Vertical_getInstance();
    return new FillModifier(tmp, fraction, createFillHeightModifier$lambda(fraction));
  }
  function createFillSizeModifier(fraction) {
    init_properties_Size_kt_c1emiv();
    var tmp = Direction_Both_getInstance();
    return new FillModifier(tmp, fraction, createFillSizeModifier$lambda(fraction));
  }
  function _get_direction__hwzary_0($this) {
    return $this.direction_1;
  }
  function _get_unbounded__vdc64z($this) {
    return $this.unbounded_1;
  }
  function _get_alignmentCallback__m7n7k9($this) {
    return $this.alignmentCallback_1;
  }
  function _get_align__jw21zo($this) {
    return $this.align_1;
  }
  function WrapContentModifier$measure$lambda(this$0, $wrapperWidth, $placeable, $wrapperHeight, $this_measure) {
    return function ($this$layout) {
      var position = this$0.alignmentCallback_1(new IntSize_0(IntSize($wrapperWidth - $placeable.width_1 | 0, $wrapperHeight - $placeable.height_1 | 0)), $this_measure.get_layoutDirection_7e37v0_k$()).packedValue_1;
      $this$layout.place$default_i08ls_k$($placeable, position, 0.0, 2, null);
      return Unit_getInstance();
    };
  }
  function WrapContentModifier(direction, unbounded, alignmentCallback, align, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.direction_1 = direction;
    this.unbounded_1 = unbounded;
    this.alignmentCallback_1 = alignmentCallback;
    this.align_1 = align;
  }
  WrapContentModifier.prototype.measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    var tmp0_minWidth = !this.direction_1.equals(Direction_Vertical_getInstance()) ? 0 : _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp1_minHeight = !this.direction_1.equals(Direction_Horizontal_getInstance()) ? 0 : _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp;
    if (!this.direction_1.equals(Direction_Vertical_getInstance()) ? this.unbounded_1 : false) {
      Companion_getInstance_3();
      tmp = 2147483647;
    } else {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var tmp2_maxWidth = tmp;
    var tmp_0;
    if (!this.direction_1.equals(Direction_Horizontal_getInstance()) ? this.unbounded_1 : false) {
      Companion_getInstance_3();
      tmp_0 = 2147483647;
    } else {
      tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var tmp3_maxHeight = tmp_0;
    var wrappedConstraints = Constraints_0(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
    var placeable = measurable.measure_ikak0q_k$(wrappedConstraints);
    var wrapperWidth = coerceIn(placeable.width_1, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
    var wrapperHeight = coerceIn(placeable.height_1, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    return _this__u8e3s4.layout$default_yb6zmd_k$(wrapperWidth, wrapperHeight, null, WrapContentModifier$measure$lambda(this, wrapperWidth, placeable, wrapperHeight, _this__u8e3s4), 4, null);
  };
  WrapContentModifier.prototype.equals = function (other) {
    if (!(other instanceof WrapContentModifier))
      return false;
    return (this.direction_1.equals(other.direction_1) ? this.unbounded_1 === other.unbounded_1 : false) ? equals(this.align_1, other.align_1) : false;
  };
  WrapContentModifier.prototype.hashCode = function () {
    return imul(imul(this.direction_1.hashCode(), 31) + (this.unbounded_1 | 0) | 0, 31) + hashCode(this.align_1) | 0;
  };
  WrapContentModifier.$metadata$ = classMeta('WrapContentModifier', [LayoutModifier], undefined, undefined, undefined, InspectorValueInfo.prototype);
  function createWrapContentWidthModifier(align, unbounded) {
    init_properties_Size_kt_c1emiv();
    var tmp = Direction_Horizontal_getInstance();
    var tmp_0 = createWrapContentWidthModifier$lambda(align);
    return new WrapContentModifier(tmp, unbounded, tmp_0, align, createWrapContentWidthModifier$lambda_0(align, unbounded));
  }
  function createWrapContentHeightModifier(align, unbounded) {
    init_properties_Size_kt_c1emiv();
    var tmp = Direction_Vertical_getInstance();
    var tmp_0 = createWrapContentHeightModifier$lambda(align);
    return new WrapContentModifier(tmp, unbounded, tmp_0, align, createWrapContentHeightModifier$lambda_0(align, unbounded));
  }
  function createWrapContentSizeModifier(align, unbounded) {
    init_properties_Size_kt_c1emiv();
    var tmp = Direction_Both_getInstance();
    var tmp_0 = createWrapContentSizeModifier$lambda(align);
    return new WrapContentModifier(tmp, unbounded, tmp_0, align, createWrapContentSizeModifier$lambda_0(align, unbounded));
  }
  var Direction_Vertical_instance;
  var Direction_Horizontal_instance;
  var Direction_Both_instance;
  function values_1() {
    return [Direction_Vertical_getInstance(), Direction_Horizontal_getInstance(), Direction_Both_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'Vertical':
        return Direction_Vertical_getInstance();
      case 'Horizontal':
        return Direction_Horizontal_getInstance();
      case 'Both':
        return Direction_Both_getInstance();
      default:
        Direction_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_getInstance();
    Direction_entriesInitialized = true;
    Direction_Vertical_instance = new Direction('Vertical', 0);
    Direction_Horizontal_instance = new Direction('Horizontal', 1);
    Direction_Both_instance = new Direction('Both', 2);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Direction.$metadata$ = classMeta('Direction', undefined, undefined, undefined, undefined, Enum.prototype);
  function width(_this__u8e3s4, width) {
    init_properties_Size_kt_c1emiv();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = width$lambda(width);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(SizeModifier_init_$Create$(width, null, width, null, true, tmp$ret$0, 10, null));
  }
  function fillMaxHeight(_this__u8e3s4, fraction) {
    init_properties_Size_kt_c1emiv();
    return _this__u8e3s4.then_5qw5wu_k$(fraction === 1.0 ? get_FillWholeMaxHeight() : createFillHeightModifier(fraction));
  }
  function fillMaxHeight$default(_this__u8e3s4, fraction, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      fraction = 1.0;
    return fillMaxHeight(_this__u8e3s4, fraction);
  }
  function size(_this__u8e3s4, size) {
    init_properties_Size_kt_c1emiv();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = size$lambda(size);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    var tmp0_inspectorInfo = tmp$ret$0;
    return _this__u8e3s4.then_5qw5wu_k$(new SizeModifier(size, size, size, size, true, tmp0_inspectorInfo));
  }
  function heightIn(_this__u8e3s4, min, max) {
    init_properties_Size_kt_c1emiv();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = heightIn$lambda(min, max);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(SizeModifier_init_$Create$(null, min, null, max, true, tmp$ret$0, 5, null));
  }
  function heightIn$default(_this__u8e3s4, min, max, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      min = Companion_getInstance_4().Unspecified_1;
    if (!(($mask0 & 2) === 0))
      max = Companion_getInstance_4().Unspecified_1;
    return heightIn(_this__u8e3s4, min, max);
  }
  function widthIn(_this__u8e3s4, min, max) {
    init_properties_Size_kt_c1emiv();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = widthIn$lambda(min, max);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(SizeModifier_init_$Create$(min, null, max, null, true, tmp$ret$0, 10, null));
  }
  function widthIn$default(_this__u8e3s4, min, max, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      min = Companion_getInstance_4().Unspecified_1;
    if (!(($mask0 & 2) === 0))
      max = Companion_getInstance_4().Unspecified_1;
    return widthIn(_this__u8e3s4, min, max);
  }
  function defaultMinSize(_this__u8e3s4, minWidth, minHeight) {
    init_properties_Size_kt_c1emiv();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = defaultMinSize$lambda(minWidth, minHeight);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new UnspecifiedConstraintsModifier(minWidth, minHeight, tmp$ret$0));
  }
  function defaultMinSize$default(_this__u8e3s4, minWidth, minHeight, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      minWidth = Companion_getInstance_4().Unspecified_1;
    if (!(($mask0 & 2) === 0))
      minHeight = Companion_getInstance_4().Unspecified_1;
    return defaultMinSize(_this__u8e3s4, minWidth, minHeight);
  }
  function height(_this__u8e3s4, height) {
    init_properties_Size_kt_c1emiv();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = height$lambda(height);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(SizeModifier_init_$Create$(null, height, null, height, true, tmp$ret$0, 5, null));
  }
  function size_0(_this__u8e3s4, size) {
    init_properties_Size_kt_c1emiv();
    return size_1(_this__u8e3s4, _DpSize___get_width__impl__o3d5gt(size), _DpSize___get_height__impl__5xueo2(size));
  }
  function fillMaxSize(_this__u8e3s4, fraction) {
    init_properties_Size_kt_c1emiv();
    return _this__u8e3s4.then_5qw5wu_k$(fraction === 1.0 ? get_FillWholeMaxSize() : createFillSizeModifier(fraction));
  }
  function fillMaxSize$default(_this__u8e3s4, fraction, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      fraction = 1.0;
    return fillMaxSize(_this__u8e3s4, fraction);
  }
  function size_1(_this__u8e3s4, width, height) {
    init_properties_Size_kt_c1emiv();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = size$lambda_0(width, height);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    var tmp0_inspectorInfo = tmp$ret$0;
    return _this__u8e3s4.then_5qw5wu_k$(new SizeModifier(width, height, width, height, true, tmp0_inspectorInfo));
  }
  function fillMaxWidth(_this__u8e3s4, fraction) {
    init_properties_Size_kt_c1emiv();
    return _this__u8e3s4.then_5qw5wu_k$(fraction === 1.0 ? get_FillWholeMaxWidth() : createFillWidthModifier(fraction));
  }
  function fillMaxWidth$default(_this__u8e3s4, fraction, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      fraction = 1.0;
    return fillMaxWidth(_this__u8e3s4, fraction);
  }
  function SizeModifier_init_$Init$(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      minWidth = Companion_getInstance_4().Unspecified_1;
    if (!(($mask0 & 2) === 0))
      minHeight = Companion_getInstance_4().Unspecified_1;
    if (!(($mask0 & 4) === 0))
      maxWidth = Companion_getInstance_4().Unspecified_1;
    if (!(($mask0 & 8) === 0))
      maxHeight = Companion_getInstance_4().Unspecified_1;
    SizeModifier.call($this, minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo);
    return $this;
  }
  function SizeModifier_init_$Create$(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo, $mask0, $marker) {
    return SizeModifier_init_$Init$(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo, $mask0, $marker, Object.create(SizeModifier.prototype));
  }
  function _get_minWidth__tgi6yf($this) {
    return $this.minWidth_1;
  }
  function _get_minHeight__j32lk8($this) {
    return $this.minHeight_1;
  }
  function _get_maxWidth__golao9($this) {
    return $this.maxWidth_1;
  }
  function _get_maxHeight__b29xja($this) {
    return $this.maxHeight_1;
  }
  function _get_enforceIncoming__5fpgix($this) {
    return $this.enforceIncoming_1;
  }
  function _get_targetConstraints__wn7g24(_this__u8e3s4, $this) {
    var tmp;
    if (!equals($this.maxWidth_1, Companion_getInstance_4().Unspecified_1)) {
      var tmp_0 = new Dp($this.maxWidth_1);
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
      tmp = _this__u8e3s4.roundToPx_hl1u8z_k$(coerceAtLeast(tmp_0, new Dp(tmp$ret$0)).value_1);
    } else {
      Companion_getInstance_3();
      tmp = 2147483647;
    }
    var maxWidth = tmp;
    var tmp_1;
    if (!equals($this.maxHeight_1, Companion_getInstance_4().Unspecified_1)) {
      var tmp_2 = new Dp($this.maxHeight_1);
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      tmp_1 = _this__u8e3s4.roundToPx_hl1u8z_k$(coerceAtLeast(tmp_2, new Dp(tmp$ret$1)).value_1);
    } else {
      Companion_getInstance_3();
      tmp_1 = 2147483647;
    }
    var maxHeight = tmp_1;
    var tmp_3;
    if (!equals($this.minWidth_1, Companion_getInstance_4().Unspecified_1)) {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      var tmp0_let = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.roundToPx_hl1u8z_k$($this.minWidth_1), maxWidth), 0);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.foundation.layout.SizeModifier.<get-targetConstraints>.<anonymous>' call
      var tmp_4;
      Companion_getInstance_3();
      if (!(tmp0_let === 2147483647)) {
        tmp_4 = tmp0_let;
      } else {
        tmp_4 = 0;
      }
      tmp$ret$2 = tmp_4;
      tmp$ret$3 = tmp$ret$2;
      tmp_3 = tmp$ret$3;
    } else {
      tmp_3 = 0;
    }
    var minWidth = tmp_3;
    var tmp_5;
    if (!equals($this.minHeight_1, Companion_getInstance_4().Unspecified_1)) {
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      var tmp1_let = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.roundToPx_hl1u8z_k$($this.minHeight_1), maxHeight), 0);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.foundation.layout.SizeModifier.<get-targetConstraints>.<anonymous>' call
      var tmp_6;
      Companion_getInstance_3();
      if (!(tmp1_let === 2147483647)) {
        tmp_6 = tmp1_let;
      } else {
        tmp_6 = 0;
      }
      tmp$ret$4 = tmp_6;
      tmp$ret$5 = tmp$ret$4;
      tmp_5 = tmp$ret$5;
    } else {
      tmp_5 = 0;
    }
    var minHeight = tmp_5;
    return Constraints_0(minWidth, maxWidth, minHeight, maxHeight);
  }
  function SizeModifier$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.placeRelative$default_lh46qu_k$($placeable, 0, 0, 0.0, 4, null);
      return Unit_getInstance();
    };
  }
  function SizeModifier(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.minWidth_1 = minWidth;
    this.minHeight_1 = minHeight;
    this.maxWidth_1 = maxWidth;
    this.maxHeight_1 = maxHeight;
    this.enforceIncoming_1 = enforceIncoming;
  }
  SizeModifier.prototype.measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.foundation.layout.SizeModifier.measure.<anonymous>' call
    var tmp;
    if (this.enforceIncoming_1) {
      tmp = constrain(constraints, tmp0_let);
    } else {
      var tmp_0;
      if (!equals(this.minWidth_1, Companion_getInstance_4().Unspecified_1)) {
        tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(tmp0_let);
      } else {
        tmp_0 = coerceAtMost(_Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(tmp0_let));
      }
      var resolvedMinWidth = tmp_0;
      var tmp_1;
      if (!equals(this.maxWidth_1, Companion_getInstance_4().Unspecified_1)) {
        tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(tmp0_let);
      } else {
        tmp_1 = coerceAtLeast_0(_Constraints___get_maxWidth__impl__uuyqc(constraints), _Constraints___get_minWidth__impl__hi9lfi(tmp0_let));
      }
      var resolvedMaxWidth = tmp_1;
      var tmp_2;
      if (!equals(this.minHeight_1, Companion_getInstance_4().Unspecified_1)) {
        tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(tmp0_let);
      } else {
        tmp_2 = coerceAtMost(_Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(tmp0_let));
      }
      var resolvedMinHeight = tmp_2;
      var tmp_3;
      if (!equals(this.maxHeight_1, Companion_getInstance_4().Unspecified_1)) {
        tmp_3 = _Constraints___get_maxHeight__impl__dt3e8z(tmp0_let);
      } else {
        tmp_3 = coerceAtLeast_0(_Constraints___get_maxHeight__impl__dt3e8z(constraints), _Constraints___get_minHeight__impl__ev4bgx(tmp0_let));
      }
      var resolvedMaxHeight = tmp_3;
      tmp = Constraints_0(resolvedMinWidth, resolvedMaxWidth, resolvedMinHeight, resolvedMaxHeight);
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    var wrappedConstraints = tmp$ret$1;
    var placeable = measurable.measure_ikak0q_k$(wrappedConstraints);
    var tmp_4 = placeable.width_1;
    var tmp_5 = placeable.height_1;
    return _this__u8e3s4.layout$default_yb6zmd_k$(tmp_4, tmp_5, null, SizeModifier$measure$lambda(placeable), 4, null);
  };
  SizeModifier.prototype.minIntrinsicWidth_72od57_k$ = function (_this__u8e3s4, measurable, height) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__4p17wc(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      tmp = constrainWidth(constraints, measurable.minIntrinsicWidth_3wv0r6_k$(height));
    }
    return tmp;
  };
  SizeModifier.prototype.minIntrinsicHeight_zr6pa_k$ = function (_this__u8e3s4, measurable, width) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedHeight__impl__y56fxx(constraints)) {
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    } else {
      tmp = constrainHeight(constraints, measurable.minIntrinsicHeight_7ydhpj_k$(width));
    }
    return tmp;
  };
  SizeModifier.prototype.maxIntrinsicWidth_o2xntp_k$ = function (_this__u8e3s4, measurable, height) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__4p17wc(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      tmp = constrainWidth(constraints, measurable.maxIntrinsicWidth_g1vwkc_k$(height));
    }
    return tmp;
  };
  SizeModifier.prototype.maxIntrinsicHeight_t0gmkg_k$ = function (_this__u8e3s4, measurable, width) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedHeight__impl__y56fxx(constraints)) {
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    } else {
      tmp = constrainHeight(constraints, measurable.maxIntrinsicHeight_cegb5z_k$(width));
    }
    return tmp;
  };
  SizeModifier.prototype.equals = function (other) {
    if (!(other instanceof SizeModifier))
      return false;
    return (((equals(this.minWidth_1, other.minWidth_1) ? equals(this.minHeight_1, other.minHeight_1) : false) ? equals(this.maxWidth_1, other.maxWidth_1) : false) ? equals(this.maxHeight_1, other.maxHeight_1) : false) ? this.enforceIncoming_1 === other.enforceIncoming_1 : false;
  };
  SizeModifier.prototype.hashCode = function () {
    return imul(imul(imul(imul(Dp__hashCode_impl_sxkrra(this.minWidth_1), 31) + Dp__hashCode_impl_sxkrra(this.minHeight_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.maxWidth_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.maxHeight_1) | 0, 31);
  };
  SizeModifier.$metadata$ = classMeta('SizeModifier', [LayoutModifier], undefined, undefined, undefined, InspectorValueInfo.prototype);
  function UnspecifiedConstraintsModifier_init_$Init$(minWidth, minHeight, inspectorInfo, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      minWidth = Companion_getInstance_4().Unspecified_1;
    if (!(($mask0 & 2) === 0))
      minHeight = Companion_getInstance_4().Unspecified_1;
    UnspecifiedConstraintsModifier.call($this, minWidth, minHeight, inspectorInfo);
    return $this;
  }
  function UnspecifiedConstraintsModifier_init_$Create$(minWidth, minHeight, inspectorInfo, $mask0, $marker) {
    return UnspecifiedConstraintsModifier_init_$Init$(minWidth, minHeight, inspectorInfo, $mask0, $marker, Object.create(UnspecifiedConstraintsModifier.prototype));
  }
  function UnspecifiedConstraintsModifier$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.placeRelative$default_lh46qu_k$($placeable, 0, 0, 0.0, 4, null);
      return Unit_getInstance();
    };
  }
  function UnspecifiedConstraintsModifier(minWidth, minHeight, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.minWidth_1 = minWidth;
    this.minHeight_1 = minHeight;
  }
  UnspecifiedConstraintsModifier.prototype.get_minWidth_iptkt4_k$ = function () {
    return this.minWidth_1;
  };
  UnspecifiedConstraintsModifier.prototype.get_minHeight_6vlbo5_k$ = function () {
    return this.minHeight_1;
  };
  UnspecifiedConstraintsModifier.prototype.measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    var tmp;
    if (!equals(this.minWidth_1, Companion_getInstance_4().Unspecified_1) ? _Constraints___get_minWidth__impl__hi9lfi(constraints) === 0 : false) {
      tmp = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.roundToPx_hl1u8z_k$(this.minWidth_1), _Constraints___get_maxWidth__impl__uuyqc(constraints)), 0);
    } else {
      tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    }
    var tmp_0 = tmp;
    var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_2;
    if (!equals(this.minHeight_1, Companion_getInstance_4().Unspecified_1) ? _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0 : false) {
      tmp_2 = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.roundToPx_hl1u8z_k$(this.minHeight_1), _Constraints___get_maxHeight__impl__dt3e8z(constraints)), 0);
    } else {
      tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    }
    var wrappedConstraints = Constraints_0(tmp_0, tmp_1, tmp_2, _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    var placeable = measurable.measure_ikak0q_k$(wrappedConstraints);
    var tmp_3 = placeable.width_1;
    var tmp_4 = placeable.height_1;
    return _this__u8e3s4.layout$default_yb6zmd_k$(tmp_3, tmp_4, null, UnspecifiedConstraintsModifier$measure$lambda(placeable), 4, null);
  };
  UnspecifiedConstraintsModifier.prototype.minIntrinsicWidth_72od57_k$ = function (_this__u8e3s4, measurable, height) {
    return coerceAtLeast_0(measurable.minIntrinsicWidth_3wv0r6_k$(height), !equals(this.minWidth_1, Companion_getInstance_4().Unspecified_1) ? _this__u8e3s4.roundToPx_hl1u8z_k$(this.minWidth_1) : 0);
  };
  UnspecifiedConstraintsModifier.prototype.maxIntrinsicWidth_o2xntp_k$ = function (_this__u8e3s4, measurable, height) {
    return coerceAtLeast_0(measurable.maxIntrinsicWidth_g1vwkc_k$(height), !equals(this.minWidth_1, Companion_getInstance_4().Unspecified_1) ? _this__u8e3s4.roundToPx_hl1u8z_k$(this.minWidth_1) : 0);
  };
  UnspecifiedConstraintsModifier.prototype.minIntrinsicHeight_zr6pa_k$ = function (_this__u8e3s4, measurable, width) {
    return coerceAtLeast_0(measurable.minIntrinsicHeight_7ydhpj_k$(width), !equals(this.minHeight_1, Companion_getInstance_4().Unspecified_1) ? _this__u8e3s4.roundToPx_hl1u8z_k$(this.minHeight_1) : 0);
  };
  UnspecifiedConstraintsModifier.prototype.maxIntrinsicHeight_t0gmkg_k$ = function (_this__u8e3s4, measurable, width) {
    return coerceAtLeast_0(measurable.maxIntrinsicHeight_cegb5z_k$(width), !equals(this.minHeight_1, Companion_getInstance_4().Unspecified_1) ? _this__u8e3s4.roundToPx_hl1u8z_k$(this.minHeight_1) : 0);
  };
  UnspecifiedConstraintsModifier.prototype.equals = function (other) {
    if (!(other instanceof UnspecifiedConstraintsModifier))
      return false;
    return equals(this.minWidth_1, other.minWidth_1) ? equals(this.minHeight_1, other.minHeight_1) : false;
  };
  UnspecifiedConstraintsModifier.prototype.hashCode = function () {
    return imul(Dp__hashCode_impl_sxkrra(this.minWidth_1), 31) + Dp__hashCode_impl_sxkrra(this.minHeight_1) | 0;
  };
  UnspecifiedConstraintsModifier.$metadata$ = classMeta('UnspecifiedConstraintsModifier', [LayoutModifier], undefined, undefined, undefined, InspectorValueInfo.prototype);
  function requiredSizeIn(_this__u8e3s4, minWidth, minHeight, maxWidth, maxHeight) {
    init_properties_Size_kt_c1emiv();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = requiredSizeIn$lambda(minWidth, minHeight, maxWidth, maxHeight);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new SizeModifier(minWidth, minHeight, maxWidth, maxHeight, false, tmp$ret$0));
  }
  function requiredSizeIn$default(_this__u8e3s4, minWidth, minHeight, maxWidth, maxHeight, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      minWidth = Companion_getInstance_4().Unspecified_1;
    if (!(($mask0 & 2) === 0))
      minHeight = Companion_getInstance_4().Unspecified_1;
    if (!(($mask0 & 4) === 0))
      maxWidth = Companion_getInstance_4().Unspecified_1;
    if (!(($mask0 & 8) === 0))
      maxHeight = Companion_getInstance_4().Unspecified_1;
    return requiredSizeIn(_this__u8e3s4, minWidth, minHeight, maxWidth, maxHeight);
  }
  function createFillWidthModifier$lambda($fraction) {
    return function ($this$$receiver) {
      $this$$receiver.name_1 = 'fillMaxWidth';
      $this$$receiver.properties_1.set_y753qn_k$('fraction', $fraction);
      return Unit_getInstance();
    };
  }
  function createFillHeightModifier$lambda($fraction) {
    return function ($this$$receiver) {
      $this$$receiver.name_1 = 'fillMaxHeight';
      $this$$receiver.properties_1.set_y753qn_k$('fraction', $fraction);
      return Unit_getInstance();
    };
  }
  function createFillSizeModifier$lambda($fraction) {
    return function ($this$$receiver) {
      $this$$receiver.name_1 = 'fillMaxSize';
      $this$$receiver.properties_1.set_y753qn_k$('fraction', $fraction);
      return Unit_getInstance();
    };
  }
  function createWrapContentWidthModifier$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0(IntOffset($align.align_a5f08y_k$(0, _IntSize___get_width__impl__d9yl4o(size.packedValue_1), layoutDirection), 0));
    };
  }
  function createWrapContentWidthModifier$lambda_0($align, $unbounded) {
    return function ($this$$receiver) {
      $this$$receiver.name_1 = 'wrapContentWidth';
      $this$$receiver.properties_1.set_y753qn_k$('align', $align);
      $this$$receiver.properties_1.set_y753qn_k$('unbounded', $unbounded);
      return Unit_getInstance();
    };
  }
  function createWrapContentHeightModifier$lambda($align) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return new IntOffset_0(IntOffset(0, $align.align_1fj06d_k$(0, _IntSize___get_height__impl__prv63b(size.packedValue_1))));
    };
  }
  function createWrapContentHeightModifier$lambda_0($align, $unbounded) {
    return function ($this$$receiver) {
      $this$$receiver.name_1 = 'wrapContentHeight';
      $this$$receiver.properties_1.set_y753qn_k$('align', $align);
      $this$$receiver.properties_1.set_y753qn_k$('unbounded', $unbounded);
      return Unit_getInstance();
    };
  }
  function createWrapContentSizeModifier$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0($align.align_f85h4l_k$(Companion_getInstance_6().Zero_1, size.packedValue_1, layoutDirection));
    };
  }
  function createWrapContentSizeModifier$lambda_0($align, $unbounded) {
    return function ($this$$receiver) {
      $this$$receiver.name_1 = 'wrapContentSize';
      $this$$receiver.properties_1.set_y753qn_k$('align', $align);
      $this$$receiver.properties_1.set_y753qn_k$('unbounded', $unbounded);
      return Unit_getInstance();
    };
  }
  function width$lambda($width) {
    return function ($this$null) {
      $this$null.name_1 = 'width';
      $this$null.value_1 = new Dp($width);
      return Unit_getInstance();
    };
  }
  function size$lambda($size) {
    return function ($this$null) {
      $this$null.name_1 = 'size';
      $this$null.value_1 = new Dp($size);
      return Unit_getInstance();
    };
  }
  function heightIn$lambda($min, $max) {
    return function ($this$null) {
      $this$null.name_1 = 'heightIn';
      $this$null.properties_1.set_y753qn_k$('min', new Dp($min));
      $this$null.properties_1.set_y753qn_k$('max', new Dp($max));
      return Unit_getInstance();
    };
  }
  function widthIn$lambda($min, $max) {
    return function ($this$null) {
      $this$null.name_1 = 'widthIn';
      $this$null.properties_1.set_y753qn_k$('min', new Dp($min));
      $this$null.properties_1.set_y753qn_k$('max', new Dp($max));
      return Unit_getInstance();
    };
  }
  function defaultMinSize$lambda($minWidth, $minHeight) {
    return function ($this$null) {
      $this$null.name_1 = 'defaultMinSize';
      $this$null.properties_1.set_y753qn_k$('minWidth', new Dp($minWidth));
      $this$null.properties_1.set_y753qn_k$('minHeight', new Dp($minHeight));
      return Unit_getInstance();
    };
  }
  function height$lambda($height) {
    return function ($this$null) {
      $this$null.name_1 = 'height';
      $this$null.value_1 = new Dp($height);
      return Unit_getInstance();
    };
  }
  function size$lambda_0($width, $height) {
    return function ($this$null) {
      $this$null.name_1 = 'size';
      $this$null.properties_1.set_y753qn_k$('width', new Dp($width));
      $this$null.properties_1.set_y753qn_k$('height', new Dp($height));
      return Unit_getInstance();
    };
  }
  function requiredSizeIn$lambda($minWidth, $minHeight, $maxWidth, $maxHeight) {
    return function ($this$null) {
      $this$null.name_1 = 'requiredSizeIn';
      $this$null.properties_1.set_y753qn_k$('minWidth', new Dp($minWidth));
      $this$null.properties_1.set_y753qn_k$('minHeight', new Dp($minHeight));
      $this$null.properties_1.set_y753qn_k$('maxWidth', new Dp($maxWidth));
      $this$null.properties_1.set_y753qn_k$('maxHeight', new Dp($maxHeight));
      return Unit_getInstance();
    };
  }
  function Direction_Vertical_getInstance() {
    Direction_initEntries();
    return Direction_Vertical_instance;
  }
  function Direction_Horizontal_getInstance() {
    Direction_initEntries();
    return Direction_Horizontal_instance;
  }
  function Direction_Both_getInstance() {
    Direction_initEntries();
    return Direction_Both_instance;
  }
  var properties_initialized_Size_kt_x7rk2r;
  function init_properties_Size_kt_c1emiv() {
    if (properties_initialized_Size_kt_x7rk2r) {
    } else {
      properties_initialized_Size_kt_x7rk2r = true;
      FillWholeMaxWidth = createFillWidthModifier(1.0);
      FillWholeMaxHeight = createFillHeightModifier(1.0);
      FillWholeMaxSize = createFillSizeModifier(1.0);
      WrapContentWidthCenter = createWrapContentWidthModifier(Companion_getInstance().CenterHorizontally_1, false);
      WrapContentWidthStart = createWrapContentWidthModifier(Companion_getInstance().Start_1, false);
      WrapContentHeightCenter = createWrapContentHeightModifier(Companion_getInstance().CenterVertically_1, false);
      WrapContentHeightTop = createWrapContentHeightModifier(Companion_getInstance().Top_1, false);
      WrapContentSizeCenter = createWrapContentSizeModifier(Companion_getInstance().Center_1, false);
      WrapContentSizeTopStart = createWrapContentSizeModifier(Companion_getInstance().TopStart_1, false);
    }
  }
  function Spacer$composable(modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(344887062);
    sourceInformation($composer_0, 'C(Spacer$composable)39@1433L68:Spacer.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(344887062, $changed, -1, 'androidx.compose.foundation.layout.Spacer$composable (Spacer.kt:38)');
    }
    var tmp0_measurePolicy = SpacerMeasurePolicy_getInstance();
    // Inline function 'androidx.compose.ui.layout.Layout$composable' call
    var tmp0_Layout$composable = $composer_0;
    var tmp1_Layout$composable = 384 | 112 & $changed << 3;
    var modifier_0 = modifier;
    var $composer_1 = tmp0_Layout$composable;
    $composer_1.startReplaceableGroup_rp6air_k$(1725976829);
    sourceInformation($composer_1, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
    if (!(0 === 0))
      modifier_0 = Companion_getInstance_0();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
    var tmp1_$get_current$$composable_gn3xww = $composer_1;
    var $composer_2 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_2, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_2.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_2);
    tmp$ret$0 = tmp0;
    var density = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
    var tmp3_$get_current$$composable_fm67ua = $composer_1;
    var $composer_3 = tmp3_$get_current$$composable_fm67ua;
    sourceInformationMarkerStart($composer_3, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_0 = $composer_3.consume_93tbl1_k$(tmp2_$get_current$$composable_g4n2vl);
    sourceInformationMarkerEnd($composer_3);
    tmp$ret$1 = tmp0_0;
    var layoutDirection = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
    var tmp5_$get_current$$composable_el8hro = $composer_1;
    var $composer_4 = tmp5_$get_current$$composable_el8hro;
    sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_1 = $composer_4.consume_93tbl1_k$(tmp4_$get_current$$composable_f3pcsz);
    sourceInformationMarkerEnd($composer_4);
    tmp$ret$2 = tmp0_1;
    var viewConfiguration = tmp$ret$2;
    // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
    var tmp6_ReusableComposeNode$composable = Companion_getInstance_1().Constructor_1;
    var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
    var tmp8_ReusableComposeNode$composable = $composer_1;
    var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp1_Layout$composable << 9;
    var $composer_5 = tmp8_ReusableComposeNode$composable;
    var tmp = $composer_5.get_applier_bupu8u_k$();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_5.startReusableNode_jk07k2_k$();
    if ($composer_5.get_inserting_25mlsw_k$()) {
      $composer_5.createNode_13g769_k$(tmp6_ReusableComposeNode$composable);
    } else {
      $composer_5.useNode_inlzo8_k$();
    }
    $composer_5.disableReusing_y35tew_k$();
    // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
    var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_5);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, tmp0_measurePolicy, Companion_getInstance_1().SetMeasurePolicy_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_1().SetDensity_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_1().SetLayoutDirection_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_1().SetViewConfiguration_1);
    $composer_5.enableReusing_6k309v_k$();
    tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_5)), $composer_5, 112 & tmp9_ReusableComposeNode$composable >> 3);
    $composer_5.startReplaceableGroup_rp6air_k$(2058660585);
    // Inline function 'androidx.compose.foundation.layout.Spacer$composable.<anonymous>' call
    var tmp2__anonymous__z9zvc9 = $composer_5;
    var tmp3__anonymous__ufb84q = 14 & tmp9_ReusableComposeNode$composable >> 9;
    var $composer_6 = tmp2__anonymous__z9zvc9;
    $composer_6.startReplaceableGroup_rp6air_k$(1142320198);
    sourceInformation($composer_6, 'C:Spacer.kt#2w3rfo');
    if (!((tmp3__anonymous__ufb84q & 11) === 2) ? true : !$composer_6.get_skipping_3owdve_k$()) {
    } else {
      $composer_6.skipToGroupEnd_lhns3f_k$();
    }
    $composer_6.endReplaceableGroup_er37p7_k$();
    $composer_5.endReplaceableGroup_er37p7_k$();
    $composer_5.endNode_3mkr10_k$();
    $composer_1.endReplaceableGroup_er37p7_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
  }
  function SpacerMeasurePolicy$measure$lambda($this$layout) {
    return Unit_getInstance();
  }
  function SpacerMeasurePolicy() {
    SpacerMeasurePolicy_instance = this;
  }
  SpacerMeasurePolicy.prototype.measure_i7pm3b_k$ = function (_this__u8e3s4, measurables, constraints) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.foundation.layout.SpacerMeasurePolicy.measure.<anonymous>' call
    var width = _Constraints___get_hasFixedWidth__impl__4p17wc(constraints) ? _Constraints___get_maxWidth__impl__uuyqc(constraints) : 0;
    var height = _Constraints___get_hasFixedHeight__impl__y56fxx(constraints) ? _Constraints___get_maxHeight__impl__dt3e8z(constraints) : 0;
    tmp$ret$0 = _this__u8e3s4.layout$default_yb6zmd_k$(width, height, null, SpacerMeasurePolicy$measure$lambda, 4, null);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  SpacerMeasurePolicy.$metadata$ = objectMeta('SpacerMeasurePolicy', [MeasurePolicy]);
  var SpacerMeasurePolicy_instance;
  function SpacerMeasurePolicy_getInstance() {
    if (SpacerMeasurePolicy_instance == null)
      new SpacerMeasurePolicy();
    return SpacerMeasurePolicy_instance;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function WindowInsets() {
    Companion_getInstance_8();
  }
  WindowInsets.$metadata$ = interfaceMeta('WindowInsets');
  function WindowInsets_0(left, top, right, bottom) {
    return new FixedIntInsets(left, top, right, bottom);
  }
  function WindowInsets$default(left, top, right, bottom, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      left = 0;
    if (!(($mask0 & 2) === 0))
      top = 0;
    if (!(($mask0 & 4) === 0))
      right = 0;
    if (!(($mask0 & 8) === 0))
      bottom = 0;
    return WindowInsets_0(left, top, right, bottom);
  }
  function _get_leftVal__7g7e4p($this) {
    return $this.leftVal_1;
  }
  function _get_topVal__iy0agv($this) {
    return $this.topVal_1;
  }
  function _get_rightVal__1fxr7e($this) {
    return $this.rightVal_1;
  }
  function _get_bottomVal__lks4yj($this) {
    return $this.bottomVal_1;
  }
  function FixedIntInsets(leftVal, topVal, rightVal, bottomVal) {
    this.leftVal_1 = leftVal;
    this.topVal_1 = topVal;
    this.rightVal_1 = rightVal;
    this.bottomVal_1 = bottomVal;
  }
  FixedIntInsets.prototype.getLeft_1vhdo6_k$ = function (density, layoutDirection) {
    return this.leftVal_1;
  };
  FixedIntInsets.prototype.getTop_6mwa89_k$ = function (density) {
    return this.topVal_1;
  };
  FixedIntInsets.prototype.getRight_tjbxo3_k$ = function (density, layoutDirection) {
    return this.rightVal_1;
  };
  FixedIntInsets.prototype.getBottom_smmq2d_k$ = function (density) {
    return this.bottomVal_1;
  };
  FixedIntInsets.prototype.toString = function () {
    return 'Insets(left=' + this.leftVal_1 + ', top=' + this.topVal_1 + ', right=' + this.rightVal_1 + ', bottom=' + this.bottomVal_1 + ')';
  };
  FixedIntInsets.prototype.equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof FixedIntInsets)) {
      return false;
    }
    return ((this.leftVal_1 === other.leftVal_1 ? this.topVal_1 === other.topVal_1 : false) ? this.rightVal_1 === other.rightVal_1 : false) ? this.bottomVal_1 === other.bottomVal_1 : false;
  };
  FixedIntInsets.prototype.hashCode = function () {
    var result = this.leftVal_1;
    result = imul(31, result) + this.topVal_1 | 0;
    result = imul(31, result) + this.rightVal_1 | 0;
    result = imul(31, result) + this.bottomVal_1 | 0;
    return result;
  };
  FixedIntInsets.$metadata$ = classMeta('FixedIntInsets', [WindowInsets]);
  function get_ModifierLocalConsumedWindowInsets() {
    init_properties_WindowInsetsPadding_kt_5tscdl();
    return ModifierLocalConsumedWindowInsets;
  }
  var ModifierLocalConsumedWindowInsets;
  function ModifierLocalConsumedWindowInsets$lambda() {
    init_properties_WindowInsetsPadding_kt_5tscdl();
    return WindowInsets_0(0, 0, 0, 0);
  }
  var properties_initialized_WindowInsetsPadding_kt_k80ef9;
  function init_properties_WindowInsetsPadding_kt_5tscdl() {
    if (properties_initialized_WindowInsetsPadding_kt_k80ef9) {
    } else {
      properties_initialized_WindowInsetsPadding_kt_k80ef9 = true;
      ModifierLocalConsumedWindowInsets = modifierLocalOf(ModifierLocalConsumedWindowInsets$lambda);
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
    return '@androidx.compose.foundation.layout.internal.NoOp()';
  };
  NoOp.$metadata$ = classMeta('NoOp', [Annotation]);
  //region block: post-declaration
  Arrangement$Absolute$Left$1.prototype.get_spacing_kuwe3v_k$ = get_spacing;
  Arrangement$Absolute$Center$1.prototype.get_spacing_kuwe3v_k$ = get_spacing;
  Arrangement$Absolute$Right$1.prototype.get_spacing_kuwe3v_k$ = get_spacing;
  Arrangement$Absolute$SpaceBetween$1.prototype.get_spacing_kuwe3v_k$ = get_spacing;
  Arrangement$Absolute$SpaceEvenly$1.prototype.get_spacing_kuwe3v_k$ = get_spacing;
  Arrangement$Absolute$SpaceAround$1.prototype.get_spacing_kuwe3v_k$ = get_spacing;
  Arrangement$Start$1.prototype.get_spacing_kuwe3v_k$ = get_spacing;
  Arrangement$End$1.prototype.get_spacing_kuwe3v_k$ = get_spacing;
  Arrangement$Top$1.prototype.get_spacing_kuwe3v_k$ = get_spacing_0;
  Arrangement$Bottom$1.prototype.get_spacing_kuwe3v_k$ = get_spacing_0;
  BoxChildData.prototype.foldIn_4qioq6_k$ = foldIn;
  BoxChildData.prototype.foldOut_ld23lz_k$ = foldOut;
  BoxChildData.prototype.any_hrontp_k$ = any;
  BoxChildData.prototype.all_ctzlrs_k$ = all;
  BoxChildData.prototype.then_5qw5wu_k$ = then;
  sam$androidx_compose_ui_layout_MeasurePolicy$0.prototype.minIntrinsicWidth_h4fdo9_k$ = minIntrinsicWidth;
  sam$androidx_compose_ui_layout_MeasurePolicy$0.prototype.minIntrinsicHeight_n7gxym_k$ = minIntrinsicHeight;
  sam$androidx_compose_ui_layout_MeasurePolicy$0.prototype.maxIntrinsicWidth_4tn57d_k$ = maxIntrinsicWidth;
  sam$androidx_compose_ui_layout_MeasurePolicy$0.prototype.maxIntrinsicHeight_6rhckk_k$ = maxIntrinsicHeight;
  sam$androidx_compose_ui_layout_MeasurePolicy$0_0.prototype.minIntrinsicWidth_h4fdo9_k$ = minIntrinsicWidth;
  sam$androidx_compose_ui_layout_MeasurePolicy$0_0.prototype.minIntrinsicHeight_n7gxym_k$ = minIntrinsicHeight;
  sam$androidx_compose_ui_layout_MeasurePolicy$0_0.prototype.maxIntrinsicWidth_4tn57d_k$ = maxIntrinsicWidth;
  sam$androidx_compose_ui_layout_MeasurePolicy$0_0.prototype.maxIntrinsicHeight_6rhckk_k$ = maxIntrinsicHeight;
  ColumnScopeInstance.prototype.weight$default_41nqei_k$ = weight$default;
  OffsetPxModifier.prototype.minIntrinsicWidth_72od57_k$ = minIntrinsicWidth_0;
  OffsetPxModifier.prototype.minIntrinsicHeight_zr6pa_k$ = minIntrinsicHeight_0;
  OffsetPxModifier.prototype.maxIntrinsicWidth_o2xntp_k$ = maxIntrinsicWidth_0;
  OffsetPxModifier.prototype.maxIntrinsicHeight_t0gmkg_k$ = maxIntrinsicHeight_0;
  OffsetPxModifier.prototype.foldIn_4qioq6_k$ = foldIn;
  OffsetPxModifier.prototype.foldOut_ld23lz_k$ = foldOut;
  OffsetPxModifier.prototype.any_hrontp_k$ = any;
  OffsetPxModifier.prototype.all_ctzlrs_k$ = all;
  OffsetPxModifier.prototype.then_5qw5wu_k$ = then;
  OffsetModifier.prototype.minIntrinsicWidth_72od57_k$ = minIntrinsicWidth_0;
  OffsetModifier.prototype.minIntrinsicHeight_zr6pa_k$ = minIntrinsicHeight_0;
  OffsetModifier.prototype.maxIntrinsicWidth_o2xntp_k$ = maxIntrinsicWidth_0;
  OffsetModifier.prototype.maxIntrinsicHeight_t0gmkg_k$ = maxIntrinsicHeight_0;
  OffsetModifier.prototype.foldIn_4qioq6_k$ = foldIn;
  OffsetModifier.prototype.foldOut_ld23lz_k$ = foldOut;
  OffsetModifier.prototype.any_hrontp_k$ = any;
  OffsetModifier.prototype.all_ctzlrs_k$ = all;
  OffsetModifier.prototype.then_5qw5wu_k$ = then;
  PaddingModifier.prototype.minIntrinsicWidth_72od57_k$ = minIntrinsicWidth_0;
  PaddingModifier.prototype.minIntrinsicHeight_zr6pa_k$ = minIntrinsicHeight_0;
  PaddingModifier.prototype.maxIntrinsicWidth_o2xntp_k$ = maxIntrinsicWidth_0;
  PaddingModifier.prototype.maxIntrinsicHeight_t0gmkg_k$ = maxIntrinsicHeight_0;
  PaddingModifier.prototype.foldIn_4qioq6_k$ = foldIn;
  PaddingModifier.prototype.foldOut_ld23lz_k$ = foldOut;
  PaddingModifier.prototype.any_hrontp_k$ = any;
  PaddingModifier.prototype.all_ctzlrs_k$ = all;
  PaddingModifier.prototype.then_5qw5wu_k$ = then;
  PaddingValuesModifier.prototype.minIntrinsicWidth_72od57_k$ = minIntrinsicWidth_0;
  PaddingValuesModifier.prototype.minIntrinsicHeight_zr6pa_k$ = minIntrinsicHeight_0;
  PaddingValuesModifier.prototype.maxIntrinsicWidth_o2xntp_k$ = maxIntrinsicWidth_0;
  PaddingValuesModifier.prototype.maxIntrinsicHeight_t0gmkg_k$ = maxIntrinsicHeight_0;
  PaddingValuesModifier.prototype.foldIn_4qioq6_k$ = foldIn;
  PaddingValuesModifier.prototype.foldOut_ld23lz_k$ = foldOut;
  PaddingValuesModifier.prototype.any_hrontp_k$ = any;
  PaddingValuesModifier.prototype.all_ctzlrs_k$ = all;
  PaddingValuesModifier.prototype.then_5qw5wu_k$ = then;
  RowScopeInstance.prototype.weight$default_41nqei_k$ = weight$default_0;
  LayoutWeightImpl.prototype.foldIn_4qioq6_k$ = foldIn;
  LayoutWeightImpl.prototype.foldOut_ld23lz_k$ = foldOut;
  LayoutWeightImpl.prototype.any_hrontp_k$ = any;
  LayoutWeightImpl.prototype.all_ctzlrs_k$ = all;
  LayoutWeightImpl.prototype.then_5qw5wu_k$ = then;
  HorizontalAlignModifier.prototype.foldIn_4qioq6_k$ = foldIn;
  HorizontalAlignModifier.prototype.foldOut_ld23lz_k$ = foldOut;
  HorizontalAlignModifier.prototype.any_hrontp_k$ = any;
  HorizontalAlignModifier.prototype.all_ctzlrs_k$ = all;
  HorizontalAlignModifier.prototype.then_5qw5wu_k$ = then;
  SiblingsAlignedModifier.prototype.foldIn_4qioq6_k$ = foldIn;
  SiblingsAlignedModifier.prototype.foldOut_ld23lz_k$ = foldOut;
  SiblingsAlignedModifier.prototype.any_hrontp_k$ = any;
  SiblingsAlignedModifier.prototype.all_ctzlrs_k$ = all;
  SiblingsAlignedModifier.prototype.then_5qw5wu_k$ = then;
  WithAlignmentLineBlock.prototype.foldIn_4qioq6_k$ = foldIn;
  WithAlignmentLineBlock.prototype.foldOut_ld23lz_k$ = foldOut;
  WithAlignmentLineBlock.prototype.any_hrontp_k$ = any;
  WithAlignmentLineBlock.prototype.all_ctzlrs_k$ = all;
  WithAlignmentLineBlock.prototype.then_5qw5wu_k$ = then;
  WithAlignmentLine.prototype.foldIn_4qioq6_k$ = foldIn;
  WithAlignmentLine.prototype.foldOut_ld23lz_k$ = foldOut;
  WithAlignmentLine.prototype.any_hrontp_k$ = any;
  WithAlignmentLine.prototype.all_ctzlrs_k$ = all;
  WithAlignmentLine.prototype.then_5qw5wu_k$ = then;
  VerticalAlignModifier.prototype.foldIn_4qioq6_k$ = foldIn;
  VerticalAlignModifier.prototype.foldOut_ld23lz_k$ = foldOut;
  VerticalAlignModifier.prototype.any_hrontp_k$ = any;
  VerticalAlignModifier.prototype.all_ctzlrs_k$ = all;
  VerticalAlignModifier.prototype.then_5qw5wu_k$ = then;
  FillModifier.prototype.minIntrinsicWidth_72od57_k$ = minIntrinsicWidth_0;
  FillModifier.prototype.minIntrinsicHeight_zr6pa_k$ = minIntrinsicHeight_0;
  FillModifier.prototype.maxIntrinsicWidth_o2xntp_k$ = maxIntrinsicWidth_0;
  FillModifier.prototype.maxIntrinsicHeight_t0gmkg_k$ = maxIntrinsicHeight_0;
  FillModifier.prototype.foldIn_4qioq6_k$ = foldIn;
  FillModifier.prototype.foldOut_ld23lz_k$ = foldOut;
  FillModifier.prototype.any_hrontp_k$ = any;
  FillModifier.prototype.all_ctzlrs_k$ = all;
  FillModifier.prototype.then_5qw5wu_k$ = then;
  WrapContentModifier.prototype.minIntrinsicWidth_72od57_k$ = minIntrinsicWidth_0;
  WrapContentModifier.prototype.minIntrinsicHeight_zr6pa_k$ = minIntrinsicHeight_0;
  WrapContentModifier.prototype.maxIntrinsicWidth_o2xntp_k$ = maxIntrinsicWidth_0;
  WrapContentModifier.prototype.maxIntrinsicHeight_t0gmkg_k$ = maxIntrinsicHeight_0;
  WrapContentModifier.prototype.foldIn_4qioq6_k$ = foldIn;
  WrapContentModifier.prototype.foldOut_ld23lz_k$ = foldOut;
  WrapContentModifier.prototype.any_hrontp_k$ = any;
  WrapContentModifier.prototype.all_ctzlrs_k$ = all;
  WrapContentModifier.prototype.then_5qw5wu_k$ = then;
  SizeModifier.prototype.foldIn_4qioq6_k$ = foldIn;
  SizeModifier.prototype.foldOut_ld23lz_k$ = foldOut;
  SizeModifier.prototype.any_hrontp_k$ = any;
  SizeModifier.prototype.all_ctzlrs_k$ = all;
  SizeModifier.prototype.then_5qw5wu_k$ = then;
  UnspecifiedConstraintsModifier.prototype.foldIn_4qioq6_k$ = foldIn;
  UnspecifiedConstraintsModifier.prototype.foldOut_ld23lz_k$ = foldOut;
  UnspecifiedConstraintsModifier.prototype.any_hrontp_k$ = any;
  UnspecifiedConstraintsModifier.prototype.all_ctzlrs_k$ = all;
  UnspecifiedConstraintsModifier.prototype.then_5qw5wu_k$ = then;
  SpacerMeasurePolicy.prototype.minIntrinsicWidth_h4fdo9_k$ = minIntrinsicWidth;
  SpacerMeasurePolicy.prototype.minIntrinsicHeight_n7gxym_k$ = minIntrinsicHeight;
  SpacerMeasurePolicy.prototype.maxIntrinsicWidth_4tn57d_k$ = maxIntrinsicWidth;
  SpacerMeasurePolicy.prototype.maxIntrinsicHeight_6rhckk_k$ = maxIntrinsicHeight;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Box$composable;
  _.$_$.b = BoxWithConstraints$composable;
  _.$_$.c = PaddingValues_0;
  _.$_$.d = Spacer$composable;
  _.$_$.e = columnMeasurePolicy$composable;
  _.$_$.f = defaultMinSize;
  _.$_$.g = fillMaxWidth;
  _.$_$.h = height;
  _.$_$.i = offset_1;
  _.$_$.j = offset_0;
  _.$_$.k = padding_1;
  _.$_$.l = padding_2;
  _.$_$.m = padding_0;
  _.$_$.n = rememberBoxMeasurePolicy$composable;
  _.$_$.o = rowMeasurePolicy$composable;
  _.$_$.p = size_1;
  _.$_$.q = size_0;
  _.$_$.r = size;
  _.$_$.s = widthIn;
  _.$_$.t = width;
  _.$_$.u = fillMaxHeight$default;
  _.$_$.v = fillMaxSize$default;
  _.$_$.w = fillMaxWidth$default;
  _.$_$.x = heightIn$default;
  _.$_$.y = offset$default;
  _.$_$.z = padding$default;
  _.$_$.a1 = padding$default_0;
  _.$_$.b1 = requiredSizeIn$default;
  _.$_$.c1 = widthIn$default;
  _.$_$.d1 = Arrangement_getInstance;
  _.$_$.e1 = BoxScopeInstance_getInstance;
  _.$_$.f1 = ColumnScopeInstance_getInstance;
  _.$_$.g1 = RowScopeInstance_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-foundation-layout.js.map
