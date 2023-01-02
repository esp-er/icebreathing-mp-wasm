(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-ui-unit.js', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui.js', './androidx-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-ui-unit.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui.js'), require('./androidx-runtime.js'));
  else {
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation-layout'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-foundation-layout'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation-layout'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-foundation-layout'.");
    }
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation-layout'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'androidx-foundation-layout'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation-layout'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-foundation-layout'.");
    }
    root['androidx-foundation-layout'] = factory(typeof this['androidx-foundation-layout'] === 'undefined' ? {} : this['androidx-foundation-layout'], this['androidx-ui-unit'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui'], this['androidx-runtime']);
  }
}(this, function (_, kotlin_androidx_compose_ui_ui_unit, kotlin_kotlin, kotlin_androidx_compose_ui_ui, kotlin_androidx_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var _Dp___init__impl__ms3zkb = kotlin_androidx_compose_ui_ui_unit.$_$.z1;
  var Unit_getInstance = kotlin_kotlin.$_$.s2;
  var interfaceMeta = kotlin_kotlin.$_$.k7;
  var LayoutDirection_Ltr_getInstance = kotlin_androidx_compose_ui_ui_unit.$_$.m1;
  var classMeta = kotlin_kotlin.$_$.y6;
  var roundToInt = kotlin_kotlin.$_$.d8;
  var objectMeta = kotlin_kotlin.$_$.u7;
  var IntSize = kotlin_androidx_compose_ui_ui_unit.$_$.r;
  var InspectorValueInfo = kotlin_androidx_compose_ui_ui.$_$.b2;
  var equals = kotlin_kotlin.$_$.a7;
  var hashCode = kotlin_kotlin.$_$.i7;
  var foldIn = kotlin_androidx_compose_ui_ui.$_$.x2;
  var all = kotlin_androidx_compose_ui_ui.$_$.w2;
  var then = kotlin_androidx_compose_ui_ui.$_$.y2;
  var ParentDataModifier = kotlin_androidx_compose_ui_ui.$_$.q1;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.g1;
  var Companion_getInstance = kotlin_androidx_compose_ui_ui.$_$.b4;
  var get_LocalDensity = kotlin_androidx_compose_ui_ui.$_$.c2;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.q1;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.p1;
  var get_LocalLayoutDirection = kotlin_androidx_compose_ui_ui.$_$.f2;
  var get_LocalViewConfiguration = kotlin_androidx_compose_ui_ui.$_$.g2;
  var Companion_getInstance_0 = kotlin_androidx_compose_ui_ui.$_$.x3;
  var materializerOf = kotlin_androidx_compose_ui_ui.$_$.t1;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var Applier = kotlin_androidx_compose_runtime_runtime.$_$.j;
  var isInterface = kotlin_kotlin.$_$.n7;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.c2;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.d2;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_androidx_compose_runtime_runtime.$_$.a2;
  var SkippableUpdater = kotlin_androidx_compose_runtime_runtime.$_$.a1;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.v1;
  var Companion_getInstance_1 = kotlin_androidx_compose_ui_ui.$_$.a4;
  var Companion_getInstance_2 = kotlin_androidx_compose_runtime_runtime.$_$.f2;
  var THROW_CCE = kotlin_kotlin.$_$.ba;
  var isObject = kotlin_kotlin.$_$.o7;
  var get_NoInspectorInfo = kotlin_androidx_compose_ui_ui.$_$.h2;
  var get_isDebugInspectorInfoEnabled = kotlin_androidx_compose_ui_ui.$_$.j2;
  var Constraints = kotlin_androidx_compose_ui_ui_unit.$_$.b;
  var MeasurePolicy = kotlin_androidx_compose_ui_ui.$_$.n1;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_androidx_compose_ui_ui_unit.$_$.y1;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_androidx_compose_ui_ui_unit.$_$.x1;
  var Placeable = kotlin_androidx_compose_ui_ui.$_$.r1;
  var Constraints__copy$default_impl_f452rp = kotlin_androidx_compose_ui_ui_unit.$_$.y2;
  var Companion_getInstance_3 = kotlin_androidx_compose_ui_ui_unit.$_$.z2;
  var fillArrayVal = kotlin_kotlin.$_$.b7;
  var Constraints_0 = kotlin_androidx_compose_ui_ui_unit.$_$.a;
  var SubcomposeLayout$composable = kotlin_androidx_compose_ui_ui.$_$.s1;
  var Constraints__hashCode_impl_ij7484 = kotlin_androidx_compose_ui_ui_unit.$_$.u1;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_androidx_compose_ui_ui_unit.$_$.i2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_androidx_compose_ui_ui_unit.$_$.j2;
  var LayoutModifier = kotlin_androidx_compose_ui_ui.$_$.m1;
  var Dp__hashCode_impl_sxkrra = kotlin_androidx_compose_ui_ui_unit.$_$.b2;
  var Dp = kotlin_androidx_compose_ui_ui_unit.$_$.o;
  var Companion_getInstance_4 = kotlin_androidx_compose_ui_ui_unit.$_$.a3;
  var _Dp___get_value__impl__geb1vb = kotlin_androidx_compose_ui_ui_unit.$_$.c2;
  var toString = kotlin_kotlin.$_$.x7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var offset = kotlin_androidx_compose_ui_ui_unit.$_$.e1;
  var constrainWidth = kotlin_androidx_compose_ui_ui_unit.$_$.z;
  var constrainHeight = kotlin_androidx_compose_ui_ui_unit.$_$.y;
  var Dp__compareTo_impl_tlg3dl = kotlin_androidx_compose_ui_ui_unit.$_$.a2;
  var Enum = kotlin_kotlin.$_$.q9;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_androidx_compose_ui_ui_unit.$_$.v1;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_androidx_compose_ui_ui_unit.$_$.w1;
  var getNumberHashCode = kotlin_kotlin.$_$.e7;
  var ensureNotNull = kotlin_kotlin.$_$.ja;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var get_sign = kotlin_kotlin.$_$.e8;
  var coerceAtMost = kotlin_kotlin.$_$.i8;
  var Companion_getInstance_5 = kotlin_androidx_compose_ui_ui.$_$.v3;
  var coerceIn = kotlin_kotlin.$_$.l8;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_androidx_compose_ui_ui_unit.$_$.r1;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_androidx_compose_ui_ui_unit.$_$.q1;
  var IntSize_0 = kotlin_androidx_compose_ui_ui_unit.$_$.s;
  var _DpSize___get_width__impl__o3d5gt = kotlin_androidx_compose_ui_ui_unit.$_$.h2;
  var _DpSize___get_height__impl__5xueo2 = kotlin_androidx_compose_ui_ui_unit.$_$.g2;
  var coerceAtLeast = kotlin_kotlin.$_$.g8;
  var coerceAtLeast_0 = kotlin_kotlin.$_$.h8;
  var constrain = kotlin_androidx_compose_ui_ui_unit.$_$.a1;
  var _IntSize___get_width__impl__d9yl4o = kotlin_androidx_compose_ui_ui_unit.$_$.n2;
  var IntOffset = kotlin_androidx_compose_ui_ui_unit.$_$.p;
  var IntOffset_0 = kotlin_androidx_compose_ui_ui_unit.$_$.q;
  var _IntSize___get_height__impl__prv63b = kotlin_androidx_compose_ui_ui_unit.$_$.l2;
  var Companion_getInstance_6 = kotlin_androidx_compose_ui_ui_unit.$_$.f3;
  var _Constraints___get_hasFixedWidth__impl__4p17wc = kotlin_androidx_compose_ui_ui_unit.$_$.t1;
  var _Constraints___get_hasFixedHeight__impl__y56fxx = kotlin_androidx_compose_ui_ui_unit.$_$.s1;
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
  BoxChildData.prototype = Object.create(InspectorValueInfo.prototype);
  BoxChildData.prototype.constructor = BoxChildData;
  OffsetPxModifier.prototype = Object.create(InspectorValueInfo.prototype);
  OffsetPxModifier.prototype.constructor = OffsetPxModifier;
  OffsetModifier.prototype = Object.create(InspectorValueInfo.prototype);
  OffsetModifier.prototype.constructor = OffsetModifier;
  PaddingModifier.prototype = Object.create(InspectorValueInfo.prototype);
  PaddingModifier.prototype.constructor = PaddingModifier;
  PaddingValuesModifier.prototype = Object.create(InspectorValueInfo.prototype);
  PaddingValuesModifier.prototype.constructor = PaddingValuesModifier;
  function weight$default(_this__u8e3s4, weight, fill, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      fill = true;
    return $handler == null ? this.s7e(_this__u8e3s4, weight, fill) : $handler(weight, fill);
  }
  LayoutOrientation.prototype = Object.create(Enum.prototype);
  LayoutOrientation.prototype.constructor = LayoutOrientation;
  CenterCrossAxisAlignment.prototype = Object.create(CrossAxisAlignment.prototype);
  CenterCrossAxisAlignment.prototype.constructor = CenterCrossAxisAlignment;
  StartCrossAxisAlignment.prototype = Object.create(CrossAxisAlignment.prototype);
  StartCrossAxisAlignment.prototype.constructor = StartCrossAxisAlignment;
  EndCrossAxisAlignment.prototype = Object.create(CrossAxisAlignment.prototype);
  EndCrossAxisAlignment.prototype.constructor = EndCrossAxisAlignment;
  VerticalCrossAxisAlignment.prototype = Object.create(CrossAxisAlignment.prototype);
  VerticalCrossAxisAlignment.prototype.constructor = VerticalCrossAxisAlignment;
  HorizontalCrossAxisAlignment.prototype = Object.create(CrossAxisAlignment.prototype);
  HorizontalCrossAxisAlignment.prototype.constructor = HorizontalCrossAxisAlignment;
  SizeMode.prototype = Object.create(Enum.prototype);
  SizeMode.prototype.constructor = SizeMode;
  LayoutWeightImpl.prototype = Object.create(InspectorValueInfo.prototype);
  LayoutWeightImpl.prototype.constructor = LayoutWeightImpl;
  HorizontalAlignModifier.prototype = Object.create(InspectorValueInfo.prototype);
  HorizontalAlignModifier.prototype.constructor = HorizontalAlignModifier;
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
  function Horizontal() {
  }
  Horizontal.$metadata$ = interfaceMeta('Horizontal');
  function Vertical() {
  }
  Vertical.$metadata$ = interfaceMeta('Vertical');
  function HorizontalOrVertical() {
  }
  HorizontalOrVertical.$metadata$ = interfaceMeta('HorizontalOrVertical', [Horizontal, Vertical]);
  function Arrangement$Start$1() {
  }
  Arrangement$Start$1.prototype.d7c = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().o7c(sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().n7c(totalSize, sizes, outPositions, true);
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
  Arrangement$End$1.prototype.d7c = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().n7c(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().o7c(sizes, outPositions, true);
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
  Arrangement$Top$1.prototype.e7c = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().o7c(sizes, outPositions, false);
  };
  Arrangement$Top$1.prototype.toString = function () {
    return 'Arrangement#Top';
  };
  Arrangement$Top$1.$metadata$ = classMeta(undefined, [Vertical]);
  function Arrangement$Bottom$1() {
  }
  Arrangement$Bottom$1.prototype.e7c = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().n7c(totalSize, sizes, outPositions, false);
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
    tmp.p7c_1 = tmp$ret$0;
  }
  Arrangement$Center$1.prototype.c7c = function () {
    return this.p7c_1;
  };
  Arrangement$Center$1.prototype.d7c = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().q7c(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().q7c(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  Arrangement$Center$1.prototype.e7c = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().q7c(totalSize, sizes, outPositions, false);
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
    tmp.r7c_1 = tmp$ret$0;
  }
  Arrangement$SpaceEvenly$1.prototype.c7c = function () {
    return this.r7c_1;
  };
  Arrangement$SpaceEvenly$1.prototype.d7c = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().s7c(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().s7c(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  Arrangement$SpaceEvenly$1.prototype.e7c = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().s7c(totalSize, sizes, outPositions, false);
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
    tmp.t7c_1 = tmp$ret$0;
  }
  Arrangement$SpaceBetween$1.prototype.c7c = function () {
    return this.t7c_1;
  };
  Arrangement$SpaceBetween$1.prototype.d7c = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().u7c(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().u7c(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  Arrangement$SpaceBetween$1.prototype.e7c = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().u7c(totalSize, sizes, outPositions, false);
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
    tmp.v7c_1 = tmp$ret$0;
  }
  Arrangement$SpaceAround$1.prototype.c7c = function () {
    return this.v7c_1;
  };
  Arrangement$SpaceAround$1.prototype.d7c = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().w7c(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().w7c(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  Arrangement$SpaceAround$1.prototype.e7c = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().w7c(totalSize, sizes, outPositions, false);
  };
  Arrangement$SpaceAround$1.prototype.toString = function () {
    return 'Arrangement#SpaceAround';
  };
  Arrangement$SpaceAround$1.$metadata$ = classMeta(undefined, [HorizontalOrVertical]);
  function Arrangement() {
    Arrangement_instance = this;
    var tmp = this;
    tmp.f7c_1 = new Arrangement$Start$1();
    var tmp_0 = this;
    tmp_0.g7c_1 = new Arrangement$End$1();
    var tmp_1 = this;
    tmp_1.h7c_1 = new Arrangement$Top$1();
    var tmp_2 = this;
    tmp_2.i7c_1 = new Arrangement$Bottom$1();
    var tmp_3 = this;
    tmp_3.j7c_1 = new Arrangement$Center$1();
    var tmp_4 = this;
    tmp_4.k7c_1 = new Arrangement$SpaceEvenly$1();
    var tmp_5 = this;
    tmp_5.l7c_1 = new Arrangement$SpaceBetween$1();
    var tmp_6 = this;
    tmp_6.m7c_1 = new Arrangement$SpaceAround$1();
  }
  Arrangement.prototype.p4e = function () {
    return this.f7c_1;
  };
  Arrangement.prototype.n4e = function () {
    return this.h7c_1;
  };
  Arrangement.prototype.j4e = function () {
    return this.j7c_1;
  };
  Arrangement.prototype.n7c = function (totalSize, size, outPosition, reverseInput) {
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
  Arrangement.prototype.o7c = function (size, outPosition, reverseInput) {
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
  Arrangement.prototype.q7c = function (totalSize, size, outPosition, reverseInput) {
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
  Arrangement.prototype.s7c = function (totalSize, size, outPosition, reverseInput) {
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
  Arrangement.prototype.u7c = function (totalSize, size, outPosition, reverseInput) {
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
  Arrangement.prototype.w7c = function (totalSize, size, outPosition, reverseInput) {
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
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b7d_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function placeInBox(_this__u8e3s4, placeable, measurable, layoutDirection, boxWidth, boxHeight, alignment) {
    init_properties_Box_kt_lftnux();
    var tmp0_safe_receiver = get_boxChildData(measurable);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a7d_1;
    var childAlignment = tmp1_elvis_lhs == null ? alignment : tmp1_elvis_lhs;
    var position = childAlignment.r4e(IntSize(placeable.h4i_1, placeable.i4i_1), IntSize(boxWidth, boxHeight), layoutDirection);
    _this__u8e3s4.n5g(placeable, position, 0.0, 2, null);
  }
  function BoxChildData(alignment, matchParentSize, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.a7d_1 = alignment;
    this.b7d_1 = matchParentSize;
  }
  BoxChildData.prototype.f5g = function (_this__u8e3s4, parentData) {
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
    return equals(this.a7d_1, otherModifier.a7d_1) ? this.b7d_1 === otherModifier.b7d_1 : false;
  };
  BoxChildData.prototype.hashCode = function () {
    var result = hashCode(this.a7d_1);
    result = imul(31, result) + (this.b7d_1 | 0) | 0;
    return result;
  };
  BoxChildData.prototype.toString = function () {
    return 'BoxChildData(alignment=' + this.a7d_1 + ', matchParentSize=' + this.b7d_1 + ')';
  };
  BoxChildData.$metadata$ = classMeta('BoxChildData', [ParentDataModifier], undefined, undefined, undefined, InspectorValueInfo.prototype);
  function get_boxChildData(_this__u8e3s4) {
    init_properties_Box_kt_lftnux();
    var tmp = _this__u8e3s4.z5d();
    return tmp instanceof BoxChildData ? tmp : null;
  }
  function Box$composable(modifier, $composer, $changed) {
    init_properties_Box_kt_lftnux();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(-233896031);
    sourceInformation($composer_0, 'C(Box$composable)200@7989L70:Box.kt#2w3rfo');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(modifier) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(-233896031, $dirty, -1, 'androidx.compose.foundation.layout.Box$composable (Box.kt:199)');
      }
      var tmp0_measurePolicy = get_EmptyBoxMeasurePolicy();
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp0_Layout$composable = $composer_0;
      var tmp1_Layout$composable = 384 | 112 & $dirty << 3;
      var modifier_0 = modifier;
      var $composer_1 = tmp0_Layout$composable;
      $composer_1.y1a(1725976829);
      sourceInformation($composer_1, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_1;
      var $composer_2 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_2, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_2.w1n(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_2);
      tmp$ret$0 = tmp0;
      var density = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua = $composer_1;
      var $composer_3 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_3, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_3.w1n(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_3);
      tmp$ret$1 = tmp0_0;
      var layoutDirection = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro = $composer_1;
      var $composer_4 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_4.w1n(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_4);
      tmp$ret$2 = tmp0_1;
      var viewConfiguration = tmp$ret$2;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_0().a5e_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
      var tmp8_ReusableComposeNode$composable = $composer_1;
      var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp1_Layout$composable << 9;
      var $composer_5 = tmp8_ReusableComposeNode$composable;
      var tmp = $composer_5.u1m();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_5.g1n();
      if ($composer_5.e1n()) {
        $composer_5.h1n(tmp6_ReusableComposeNode$composable);
      } else {
        $composer_5.j1n();
      }
      $composer_5.l1n();
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_5);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, tmp0_measurePolicy, Companion_getInstance_0().e5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_0().d5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_0().f5e_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_0().g5e_1);
      $composer_5.m1n();
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_5)), $composer_5, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_5.y1a(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = $composer_5;
      var tmp3__anonymous__ufb84q = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_6 = tmp2__anonymous__z9zvc9;
      $composer_6.y1a(1021196736);
      sourceInformation($composer_6, 'C:Box.kt#2w3rfo');
      if (!((tmp3__anonymous__ufb84q & 11) === 2) ? true : !$composer_6.l1m()) {
      } else {
        $composer_6.l1h();
      }
      $composer_6.d1b();
      $composer_5.d1b();
      $composer_5.k1n();
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
      tmp0_safe_receiver.g1p(Box$composable$lambda$ref(modifier, $changed));
    }
  }
  function Box$composable_0(modifier, contentAlignment, propagateMinConstraints, content, $composer, $changed, $default) {
    init_properties_Box_kt_lftnux();
    var modifier_0 = modifier;
    var contentAlignment_0 = contentAlignment;
    var propagateMinConstraints_0 = propagateMinConstraints;
    var $composer_0 = $composer;
    $composer_0.y1a(1330882304);
    sourceInformation($composer_0, 'C(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
    if (!(($default & 1) === 0))
      modifier_0 = Companion_getInstance();
    if (!(($default & 2) === 0))
      contentAlignment_0 = Companion_getInstance_1().s4d_1;
    if (!(($default & 4) === 0))
      propagateMinConstraints_0 = false;
    var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment_0, propagateMinConstraints_0, $composer_0, 14 & $changed >> 3 | 112 & $changed >> 3);
    // Inline function 'androidx.compose.ui.layout.Layout$composable' call
    var tmp0_Layout$composable = modifier_0;
    var tmp1_Layout$composable = $composer_0;
    var tmp2_Layout$composable = 112 & $changed << 3;
    var modifier_1 = tmp0_Layout$composable;
    var $composer_1 = tmp1_Layout$composable;
    $composer_1.y1a(1725976829);
    sourceInformation($composer_1, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
    if (!(0 === 0))
      modifier_1 = Companion_getInstance();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
    var tmp1_$get_current$$composable_gn3xww = $composer_1;
    var $composer_2 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_2, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_2.w1n(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_2);
    tmp$ret$0 = tmp0;
    var density = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
    var tmp3_$get_current$$composable_fm67ua = $composer_1;
    var $composer_3 = tmp3_$get_current$$composable_fm67ua;
    sourceInformationMarkerStart($composer_3, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_0 = $composer_3.w1n(tmp2_$get_current$$composable_g4n2vl);
    sourceInformationMarkerEnd($composer_3);
    tmp$ret$1 = tmp0_0;
    var layoutDirection = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
    var tmp5_$get_current$$composable_el8hro = $composer_1;
    var $composer_4 = tmp5_$get_current$$composable_el8hro;
    sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_1 = $composer_4.w1n(tmp4_$get_current$$composable_f3pcsz);
    sourceInformationMarkerEnd($composer_4);
    tmp$ret$2 = tmp0_1;
    var viewConfiguration = tmp$ret$2;
    // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
    var tmp6_ReusableComposeNode$composable = Companion_getInstance_0().a5e_1;
    var tmp7_ReusableComposeNode$composable = materializerOf(modifier_1);
    var tmp8_ReusableComposeNode$composable = $composer_1;
    var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
    var $composer_5 = tmp8_ReusableComposeNode$composable;
    var tmp = $composer_5.u1m();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_5.g1n();
    if ($composer_5.e1n()) {
      $composer_5.h1n(tmp6_ReusableComposeNode$composable);
    } else {
      $composer_5.j1n();
    }
    $composer_5.l1n();
    // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
    var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_5);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_0().e5e_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_0().d5e_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_0().f5e_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_0().g5e_1);
    $composer_5.m1n();
    tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_5)), $composer_5, 112 & tmp9_ReusableComposeNode$composable >> 3);
    $composer_5.y1a(2058660585);
    // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
    var tmp3__anonymous__ufb84q = $composer_5;
    var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
    var $composer_6 = tmp3__anonymous__ufb84q;
    $composer_6.y1a(-2137368960);
    sourceInformation($composer_6, 'C72@3384L9:Box.kt#2w3rfo');
    if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_6.l1m()) {
      content(BoxScopeInstance_getInstance(), $composer_6, 6 | 112 & $changed >> 6);
    } else {
      $composer_6.l1h();
    }
    $composer_6.d1b();
    $composer_5.d1b();
    $composer_5.k1n();
    $composer_1.d1b();
    $composer_0.d1b();
  }
  function BoxScope() {
  }
  BoxScope.$metadata$ = interfaceMeta('BoxScope');
  function rememberBoxMeasurePolicy$composable(alignment, propagateMinConstraints, $composer, $changed) {
    init_properties_Box_kt_lftnux();
    var $composer_0 = $composer;
    $composer_0.y1a(-1048091512);
    sourceInformation($composer_0, 'C(rememberBoxMeasurePolicy$composable)86@3713L113:Box.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(-1048091512, $changed, -1, 'androidx.compose.foundation.layout.rememberBoxMeasurePolicy$composable (Box.kt:80)');
    }
    var tmp;
    if (equals(alignment, Companion_getInstance_1().s4d_1) ? !propagateMinConstraints : false) {
      tmp = get_DefaultBoxMeasurePolicy();
    } else {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var tmp1_remember$composable = 14 & $changed | 112 & $changed;
      var $composer_1 = tmp0_remember$composable;
      $composer_1.y1a(-1124426577);
      sourceInformation($composer_1, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = !!($composer_1.z1a(alignment) | $composer_1.z1a(propagateMinConstraints));
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_2().c1b_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.layout.rememberBoxMeasurePolicy$composable.<anonymous>' call
        tmp$ret$0 = boxMeasurePolicy(alignment, propagateMinConstraints);
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
      tmp = tmp$ret$4;
    }
    var tmp1_group = tmp;
    var tmp0_0 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0_0;
  }
  function BoxScopeInstance$align$lambda($alignment) {
    return function ($this$null) {
      $this$null.e4h_1 = 'align';
      $this$null.f4h_1 = $alignment;
      return Unit_getInstance();
    };
  }
  function BoxScopeInstance() {
    BoxScopeInstance_instance = this;
  }
  BoxScopeInstance.prototype.c7d = function (_this__u8e3s4, alignment) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = BoxScopeInstance$align$lambda(alignment);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.y4e(new BoxChildData(alignment, false, tmp$ret$0));
  };
  BoxScopeInstance.$metadata$ = objectMeta('BoxScopeInstance', [BoxScope]);
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    if (BoxScopeInstance_instance == null)
      new BoxScopeInstance();
    return BoxScopeInstance_instance;
  }
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.d7d_1 = function_0;
  }
  sam$androidx_compose_ui_layout_MeasurePolicy$0.prototype.d5f = function (_this__u8e3s4, measurables, constraints) {
    return this.d7d_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  sam$androidx_compose_ui_layout_MeasurePolicy$0.$metadata$ = classMeta('sam$androidx_compose_ui_layout_MeasurePolicy$0', [MeasurePolicy]);
  function sam$androidx_compose_ui_layout_MeasurePolicy$0_0(function_0) {
    this.e7d_1 = function_0;
  }
  sam$androidx_compose_ui_layout_MeasurePolicy$0_0.prototype.d5f = function (_this__u8e3s4, measurables, constraints) {
    return this.e7d_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  sam$androidx_compose_ui_layout_MeasurePolicy$0_0.$metadata$ = classMeta('sam$androidx_compose_ui_layout_MeasurePolicy$0', [MeasurePolicy]);
  function Box$composable$lambda($modifier, $$changed, $composer, $force) {
    return Box$composable($modifier, $composer, $$changed | 1);
  }
  function EmptyBoxMeasurePolicy$lambda($this$MeasurePolicy, _anonymous_parameter_0__qggqh8, constraints) {
    init_properties_Box_kt_lftnux();
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints.l2k_1);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints.l2k_1);
    return $this$MeasurePolicy.m4i(tmp, tmp_0, null, EmptyBoxMeasurePolicy$lambda$lambda, 4, null);
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
      placeInBox($this$layout, $placeable, $measurable, $this_MeasurePolicy.y3k(), $boxWidth, $boxHeight, $alignment);
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
        var measurable = $measurables.g(tmp0__anonymous__q1qw7t);
        placeInBox($this$layout, item, measurable, $this_MeasurePolicy.y3k(), $boxWidth._v, $boxHeight._v, $alignment);
      }
      return Unit_getInstance();
    };
  }
  function boxMeasurePolicy$lambda($propagateMinConstraints, $alignment) {
    return function ($this$MeasurePolicy, measurables, constraints) {
      var tmp;
      if (measurables.h()) {
        var tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(constraints.l2k_1);
        var tmp_1 = _Constraints___get_minHeight__impl__ev4bgx(constraints.l2k_1);
        return $this$MeasurePolicy.m4i(tmp_0, tmp_1, null, boxMeasurePolicy$lambda$lambda, 4, null);
      }
      var tmp_2;
      if ($propagateMinConstraints) {
        tmp_2 = constraints.l2k_1;
      } else {
        var tmp_3 = constraints.l2k_1;
        tmp_2 = Constraints__copy$default_impl_f452rp(tmp_3, 0, 0, 0, 0, 10, null);
      }
      var contentConstraints = tmp_2;
      var tmp_4;
      if (measurables.f() === 1) {
        var measurable = measurables.g(0);
        var boxWidth;
        var boxHeight;
        var placeable;
        if (!get_matchesParentSize(measurable)) {
          placeable = measurable.g4i(contentConstraints);
          var tmp$ret$0;
          // Inline function 'kotlin.math.max' call
          var tmp0_max = _Constraints___get_minWidth__impl__hi9lfi(constraints.l2k_1);
          var tmp1_max = placeable.h4i_1;
          tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
          boxWidth = tmp$ret$0;
          var tmp$ret$1;
          // Inline function 'kotlin.math.max' call
          var tmp2_max = _Constraints___get_minHeight__impl__ev4bgx(constraints.l2k_1);
          var tmp3_max = placeable.i4i_1;
          tmp$ret$1 = Math.max(tmp2_max, tmp3_max);
          boxHeight = tmp$ret$1;
        } else {
          boxWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints.l2k_1);
          boxHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints.l2k_1);
          placeable = measurable.g4i(Companion_getInstance_3().k2k(_Constraints___get_minWidth__impl__hi9lfi(constraints.l2k_1), _Constraints___get_minHeight__impl__ev4bgx(constraints.l2k_1)));
        }
        return $this$MeasurePolicy.m4i(boxWidth, boxHeight, null, boxMeasurePolicy$lambda$lambda_0(placeable, measurable, $this$MeasurePolicy, boxWidth, boxHeight, $alignment), 4, null);
      }
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp4_arrayOfNulls = measurables.f();
      tmp$ret$2 = fillArrayVal(Array(tmp4_arrayOfNulls), null);
      var placeables = tmp$ret$2;
      var hasMatchParentSizeChildren = false;
      var boxWidth_0 = {_v: _Constraints___get_minWidth__impl__hi9lfi(constraints.l2k_1)};
      var boxHeight_0 = {_v: _Constraints___get_minHeight__impl__ev4bgx(constraints.l2k_1)};
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.f() - 1 | 0;
      var tmp_5;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.g(index);
          // Inline function 'androidx.compose.foundation.layout.boxMeasurePolicy.<anonymous>.<anonymous>' call
          if (!get_matchesParentSize(item)) {
            var placeable_0 = item.g4i(contentConstraints);
            placeables[index] = placeable_0;
            var tmp$ret$3;
            // Inline function 'kotlin.math.max' call
            var tmp0_max_0 = boxWidth_0._v;
            var tmp1_max_0 = placeable_0.h4i_1;
            tmp$ret$3 = Math.max(tmp0_max_0, tmp1_max_0);
            boxWidth_0._v = tmp$ret$3;
            var tmp$ret$4;
            // Inline function 'kotlin.math.max' call
            var tmp2_max_0 = boxHeight_0._v;
            var tmp3_max_0 = placeable_0.i4i_1;
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
        var last_0 = measurables.f() - 1 | 0;
        var tmp_11;
        if (inductionVariable_0 <= last_0) {
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_0 = measurables.g(index_0);
            // Inline function 'androidx.compose.foundation.layout.boxMeasurePolicy.<anonymous>.<anonymous>' call
            if (get_matchesParentSize(item_0)) {
              placeables[index_0] = item_0.g4i(matchParentSizeConstraints);
            }
          }
           while (inductionVariable_0 <= last_0);
          tmp_11 = Unit_getInstance();
        }
        tmp_6 = tmp_11;
      }
      var tmp_12 = boxWidth_0._v;
      var tmp_13 = boxHeight_0._v;
      return $this$MeasurePolicy.m4i(tmp_12, tmp_13, null, boxMeasurePolicy$lambda$lambda_1(placeables, measurables, $this$MeasurePolicy, boxWidth_0, boxHeight_0, $alignment), 4, null);
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
      DefaultBoxMeasurePolicy = boxMeasurePolicy(Companion_getInstance_1().s4d_1, false);
      var tmp = EmptyBoxMeasurePolicy$lambda;
      EmptyBoxMeasurePolicy = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp);
    }
  }
  function BoxWithConstraints$composable(modifier, contentAlignment, propagateMinConstraints, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var contentAlignment_0 = {_v: contentAlignment};
    var propagateMinConstraints_0 = {_v: propagateMinConstraints};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(-1571730894);
    sourceInformation($composer_0, 'C(BoxWithConstraints$composable)P(2,1,3)65@3186L67,66@3285L218,66@3258L245:BoxWithConstraints.kt#2w3rfo');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(contentAlignment_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.f1b(propagateMinConstraints_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.z1a(content) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.l1m()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        contentAlignment_0._v = Companion_getInstance_1().s4d_1;
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
      $composer_1.y1a(-1124426577);
      sourceInformation($composer_1, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = !!($composer_1.z1a(content) | $composer_1.z1a(measurePolicy));
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_2().c1b_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.layout.BoxWithConstraints$composable.<anonymous>' call
        tmp$ret$0 = BoxWithConstraints$composable$lambda_0(measurePolicy, content, $dirty);
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
      SubcomposeLayout$composable(tmp, tmp$ret$4, $composer_0, 14 & $dirty, 0);
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
      tmp0_safe_receiver.g1p(BoxWithConstraints$composable$lambda$ref(modifier_0, contentAlignment_0, propagateMinConstraints_0, content, $changed, $default));
    }
  }
  function BoxWithConstraintsScope() {
  }
  BoxWithConstraintsScope.$metadata$ = interfaceMeta('BoxWithConstraintsScope', [BoxScope]);
  function BoxWithConstraintsScopeImpl(density, constraints) {
    this.f7d_1 = density;
    this.g7d_1 = constraints;
    this.h7d_1 = BoxScopeInstance_getInstance();
  }
  BoxWithConstraintsScopeImpl.prototype.z6r = function () {
    return this.g7d_1;
  };
  BoxWithConstraintsScopeImpl.prototype.c7d = function (_this__u8e3s4, alignment) {
    return this.h7d_1.c7d(_this__u8e3s4, alignment);
  };
  BoxWithConstraintsScopeImpl.prototype.toString = function () {
    return 'BoxWithConstraintsScopeImpl(density=' + this.f7d_1 + ', constraints=' + new Constraints(this.g7d_1) + ')';
  };
  BoxWithConstraintsScopeImpl.prototype.hashCode = function () {
    var result = hashCode(this.f7d_1);
    result = imul(result, 31) + Constraints__hashCode_impl_ij7484(this.g7d_1) | 0;
    return result;
  };
  BoxWithConstraintsScopeImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BoxWithConstraintsScopeImpl))
      return false;
    var tmp0_other_with_cast = other instanceof BoxWithConstraintsScopeImpl ? other : THROW_CCE();
    if (!equals(this.f7d_1, tmp0_other_with_cast.f7d_1))
      return false;
    if (!equals(this.g7d_1, tmp0_other_with_cast.g7d_1))
      return false;
    return true;
  };
  BoxWithConstraintsScopeImpl.$metadata$ = classMeta('BoxWithConstraintsScopeImpl', [BoxWithConstraintsScope, BoxScope]);
  function BoxWithConstraints$composable$lambda($modifier, $contentAlignment, $propagateMinConstraints, $content, $$changed, $$default, $composer, $force) {
    return BoxWithConstraints$composable($modifier._v, $contentAlignment._v, $propagateMinConstraints._v, $content, $composer, $$changed | 1, $$default);
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.j1m(p0, p1);
    };
  }
  function BoxWithConstraints$composable$lambda$lambda($content, $scope, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C68@3420L9:BoxWithConstraints.kt#2w3rfo');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.l1m()) {
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
        $composer_0.l1h();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function BoxWithConstraints$composable$lambda_0($measurePolicy, $content, $$dirty) {
    return function ($this$SubcomposeLayout, constraints) {
      var scope = new BoxWithConstraintsScopeImpl($this$SubcomposeLayout, constraints.l2k_1);
      var measurables = $this$SubcomposeLayout.j5i(Unit_getInstance(), ComposableLambda$invoke$ref(composableLambdaInstance(-1945019079, true, BoxWithConstraints$composable$lambda$lambda($content, scope, $$dirty))));
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.BoxWithConstraints$composable.<anonymous>.<anonymous>.<anonymous>' call
      tmp$ret$0 = $measurePolicy.d5f($this$SubcomposeLayout, measurables, constraints.l2k_1);
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
    $composer_0.y1a(860130704);
    sourceInformation($composer_0, 'C(Column$composable)P(2,3,1)77@3913L61,78@3979L133:Column.kt#2w3rfo');
    if (!(($default & 1) === 0))
      modifier_0 = Companion_getInstance();
    if (!(($default & 2) === 0))
      verticalArrangement_0 = Arrangement_getInstance().h7c_1;
    if (!(($default & 4) === 0))
      horizontalAlignment_0 = Companion_getInstance_1().e4e_1;
    var measurePolicy = columnMeasurePolicy$composable(verticalArrangement_0, horizontalAlignment_0, $composer_0, 14 & $changed >> 3 | 112 & $changed >> 3);
    // Inline function 'androidx.compose.ui.layout.Layout$composable' call
    var tmp0_Layout$composable = modifier_0;
    var tmp1_Layout$composable = $composer_0;
    var tmp2_Layout$composable = 112 & $changed << 3;
    var modifier_1 = tmp0_Layout$composable;
    var $composer_1 = tmp1_Layout$composable;
    $composer_1.y1a(1725976829);
    sourceInformation($composer_1, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
    if (!(0 === 0))
      modifier_1 = Companion_getInstance();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
    var tmp1_$get_current$$composable_gn3xww = $composer_1;
    var $composer_2 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_2, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_2.w1n(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_2);
    tmp$ret$0 = tmp0;
    var density = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
    var tmp3_$get_current$$composable_fm67ua = $composer_1;
    var $composer_3 = tmp3_$get_current$$composable_fm67ua;
    sourceInformationMarkerStart($composer_3, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_0 = $composer_3.w1n(tmp2_$get_current$$composable_g4n2vl);
    sourceInformationMarkerEnd($composer_3);
    tmp$ret$1 = tmp0_0;
    var layoutDirection = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
    var tmp5_$get_current$$composable_el8hro = $composer_1;
    var $composer_4 = tmp5_$get_current$$composable_el8hro;
    sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_1 = $composer_4.w1n(tmp4_$get_current$$composable_f3pcsz);
    sourceInformationMarkerEnd($composer_4);
    tmp$ret$2 = tmp0_1;
    var viewConfiguration = tmp$ret$2;
    // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
    var tmp6_ReusableComposeNode$composable = Companion_getInstance_0().a5e_1;
    var tmp7_ReusableComposeNode$composable = materializerOf(modifier_1);
    var tmp8_ReusableComposeNode$composable = $composer_1;
    var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
    var $composer_5 = tmp8_ReusableComposeNode$composable;
    var tmp = $composer_5.u1m();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_5.g1n();
    if ($composer_5.e1n()) {
      $composer_5.h1n(tmp6_ReusableComposeNode$composable);
    } else {
      $composer_5.j1n();
    }
    $composer_5.l1n();
    // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
    var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_5);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_0().e5e_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_0().d5e_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_0().f5e_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_0().g5e_1);
    $composer_5.m1n();
    tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_5)), $composer_5, 112 & tmp9_ReusableComposeNode$composable >> 3);
    $composer_5.y1a(2058660585);
    // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
    var tmp3__anonymous__ufb84q = $composer_5;
    var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
    var $composer_6 = tmp3__anonymous__ufb84q;
    $composer_6.y1a(-1163856341);
    sourceInformation($composer_6, 'C79@4027L9:Column.kt#2w3rfo');
    if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_6.l1m()) {
      content(ColumnScopeInstance_getInstance(), $composer_6, 6 | 112 & $changed >> 6);
    } else {
      $composer_6.l1h();
    }
    $composer_6.d1b();
    $composer_5.d1b();
    $composer_5.k1n();
    $composer_1.d1b();
    $composer_0.d1b();
  }
  function ColumnScope() {
  }
  ColumnScope.$metadata$ = interfaceMeta('ColumnScope');
  function columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer, $changed) {
    init_properties_Column_kt_yghy2k();
    var $composer_0 = $composer;
    $composer_0.y1a(47657763);
    sourceInformation($composer_0, 'C(columnMeasurePolicy$composable)P(1)101@4710L664:Column.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(47657763, $changed, -1, 'androidx.compose.foundation.layout.columnMeasurePolicy$composable (Column.kt:98)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = $composer_0;
    var tmp1_remember$composable = 14 & $changed | 112 & $changed;
    var $composer_1 = tmp0_remember$composable;
    $composer_1.y1a(-1124426577);
    sourceInformation($composer_1, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = !!($composer_1.z1a(verticalArrangement) | $composer_1.z1a(horizontalAlignment));
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_2().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.columnMeasurePolicy$composable.<anonymous>' call
      var tmp_0;
      if (equals(verticalArrangement, Arrangement_getInstance().h7c_1) ? equals(horizontalAlignment, Companion_getInstance_1().e4e_1) : false) {
        tmp_0 = get_DefaultColumnMeasurePolicy();
      } else {
        var tmp0_orientation = LayoutOrientation_Vertical_getInstance();
        var tmp1_arrangementSpacing = verticalArrangement.c7c();
        var tmp2_crossAxisAlignment = Companion_getInstance_7().m7d(horizontalAlignment);
        var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
        tmp_0 = rowColumnMeasurePolicy(tmp0_orientation, columnMeasurePolicy$composable$lambda(verticalArrangement), tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
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
    var tmp_1 = tmp$ret$2;
    tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
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
  function ColumnScopeInstance$align$lambda($alignment) {
    return function ($this$null) {
      $this$null.e4h_1 = 'align';
      $this$null.f4h_1 = $alignment;
      return Unit_getInstance();
    };
  }
  function ColumnScopeInstance() {
    ColumnScopeInstance_instance = this;
  }
  ColumnScopeInstance.prototype.i7d = function (_this__u8e3s4, alignment) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = ColumnScopeInstance$align$lambda(alignment);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.y4e(new HorizontalAlignModifier(alignment, tmp$ret$0));
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
    var tmp0_with = Arrangement_getInstance().h7c_1;
    // Inline function 'kotlin.contracts.contract' call
    tmp0_with.e7c(density, totalSize, size, outPosition);
    tmp$ret$0 = Unit_getInstance();
    return Unit_getInstance();
  }
  function columnMeasurePolicy$composable$lambda($verticalArrangement) {
    return function (totalSize, size, _anonymous_parameter_2__qggqfi, density, outPosition) {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $verticalArrangement.e7c(density, totalSize, size, outPosition);
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
      var tmp1_arrangementSpacing = Arrangement_getInstance().h7c_1.c7c();
      var tmp2_crossAxisAlignment = Companion_getInstance_7().m7d(Companion_getInstance_1().e4e_1);
      var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
      DefaultColumnMeasurePolicy = rowColumnMeasurePolicy(tmp0_orientation, DefaultColumnMeasurePolicy$lambda, tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
    }
  }
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
    return _this__u8e3s4.y4e(new OffsetPxModifier(offset, true, tmp$ret$0));
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
    return _this__u8e3s4.y4e(new OffsetModifier(x, y, true, tmp$ret$2));
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
      var offsetValue = this$0.q7d_1($this_measure).m2l_1;
      var tmp;
      if (this$0.r7d_1) {
        var tmp_0 = _IntOffset___get_x__impl__qiqr5o(offsetValue);
        var tmp_1 = _IntOffset___get_y__impl__2avpwj(offsetValue);
        $this$layout.p5g($placeable, tmp_0, tmp_1, 0.0, null, 12, null);
        tmp = Unit_getInstance();
      } else {
        var tmp_2 = _IntOffset___get_x__impl__qiqr5o(offsetValue);
        var tmp_3 = _IntOffset___get_y__impl__2avpwj(offsetValue);
        $this$layout.t4r($placeable, tmp_2, tmp_3, 0.0, null, 12, null);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function OffsetPxModifier(offset, rtlAware, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.q7d_1 = offset;
    this.r7d_1 = rtlAware;
  }
  OffsetPxModifier.prototype.f4i = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.g4i(constraints);
    var tmp = placeable.h4i_1;
    var tmp_0 = placeable.i4i_1;
    return _this__u8e3s4.m4i(tmp, tmp_0, null, OffsetPxModifier$measure$lambda(this, _this__u8e3s4, placeable), 4, null);
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
    return equals(this.q7d_1, otherModifier.q7d_1) ? this.r7d_1 === otherModifier.r7d_1 : false;
  };
  OffsetPxModifier.prototype.hashCode = function () {
    var result = hashCode(this.q7d_1);
    result = imul(31, result) + (this.r7d_1 | 0) | 0;
    return result;
  };
  OffsetPxModifier.prototype.toString = function () {
    return 'OffsetPxModifier(offset=' + this.q7d_1 + ', rtlAware=' + this.r7d_1 + ')';
  };
  OffsetPxModifier.$metadata$ = classMeta('OffsetPxModifier', [LayoutModifier], undefined, undefined, undefined, InspectorValueInfo.prototype);
  function OffsetModifier$measure$lambda(this$0, $placeable, $this_measure) {
    return function ($this$layout) {
      var tmp;
      if (this$0.x7d_1) {
        var tmp_0 = $this_measure.p2k(this$0.v7d_1);
        var tmp_1 = $this_measure.p2k(this$0.w7d_1);
        $this$layout.d4i($placeable, tmp_0, tmp_1, 0.0, 4, null);
        tmp = Unit_getInstance();
      } else {
        var tmp_2 = $this_measure.p2k(this$0.v7d_1);
        var tmp_3 = $this_measure.p2k(this$0.w7d_1);
        $this$layout.l5g($placeable, tmp_2, tmp_3, 0.0, 4, null);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function OffsetModifier(x, y, rtlAware, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.v7d_1 = x;
    this.w7d_1 = y;
    this.x7d_1 = rtlAware;
  }
  OffsetModifier.prototype.f4i = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.g4i(constraints);
    var tmp = placeable.h4i_1;
    var tmp_0 = placeable.i4i_1;
    return _this__u8e3s4.m4i(tmp, tmp_0, null, OffsetModifier$measure$lambda(this, placeable, _this__u8e3s4), 4, null);
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
    return (equals(this.v7d_1, otherModifier.v7d_1) ? equals(this.w7d_1, otherModifier.w7d_1) : false) ? this.x7d_1 === otherModifier.x7d_1 : false;
  };
  OffsetModifier.prototype.hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.v7d_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.w7d_1) | 0;
    result = imul(31, result) + (this.x7d_1 | 0) | 0;
    return result;
  };
  OffsetModifier.prototype.toString = function () {
    return 'OffsetModifier(x=' + new Dp(this.v7d_1) + ', y=' + new Dp(this.w7d_1) + ', rtlAware=' + this.x7d_1 + ')';
  };
  OffsetModifier.$metadata$ = classMeta('OffsetModifier', [LayoutModifier], undefined, undefined, undefined, InspectorValueInfo.prototype);
  function offset$lambda($offset) {
    return function ($this$null) {
      $this$null.e4h_1 = 'offset';
      $this$null.g4h_1.k4h('offset', $offset);
      return Unit_getInstance();
    };
  }
  function offset$lambda_0($x, $y) {
    return function ($this$null) {
      $this$null.e4h_1 = 'offset';
      $this$null.g4h_1.k4h('x', new Dp($x));
      $this$null.g4h_1.k4h('y', new Dp($y));
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
    return _this__u8e3s4.y4e(new PaddingModifier(start, top, end, bottom, true, tmp$ret$4));
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
    return _this__u8e3s4.y4e(new PaddingModifier(horizontal, vertical, horizontal, vertical, true, tmp$ret$2));
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
    return _this__u8e3s4.y4e(new PaddingModifier(all, all, all, all, true, tmp$ret$0));
  }
  function PaddingModifier$measure$lambda(this$0, $placeable, $this_measure) {
    return function ($this$layout) {
      var tmp;
      if (this$0.f7e_1) {
        var tmp_0 = $this_measure.p2k(this$0.b7e_1);
        var tmp_1 = $this_measure.p2k(this$0.c7e_1);
        $this$layout.d4i($placeable, tmp_0, tmp_1, 0.0, 4, null);
        tmp = Unit_getInstance();
      } else {
        var tmp_2 = $this_measure.p2k(this$0.b7e_1);
        var tmp_3 = $this_measure.p2k(this$0.c7e_1);
        $this$layout.l5g($placeable, tmp_2, tmp_3, 0.0, 4, null);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function PaddingModifier(start, top, end, bottom, rtlAware, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.b7e_1 = start;
    this.c7e_1 = top;
    this.d7e_1 = end;
    this.e7e_1 = bottom;
    this.f7e_1 = rtlAware;
    // Inline function 'kotlin.require' call
    var tmp0_require = (((_Dp___get_value__impl__geb1vb(this.b7e_1) >= 0.0 ? true : equals(this.b7e_1, Companion_getInstance_4().d2l_1)) ? _Dp___get_value__impl__geb1vb(this.c7e_1) >= 0.0 ? true : equals(this.c7e_1, Companion_getInstance_4().d2l_1) : false) ? _Dp___get_value__impl__geb1vb(this.d7e_1) >= 0.0 ? true : equals(this.d7e_1, Companion_getInstance_4().d2l_1) : false) ? _Dp___get_value__impl__geb1vb(this.e7e_1) >= 0.0 ? true : equals(this.e7e_1, Companion_getInstance_4().d2l_1) : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.foundation.layout.PaddingModifier.<anonymous>' call
      tmp$ret$4 = 'Padding must be non-negative';
      var message = tmp$ret$4;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  PaddingModifier.prototype.f4i = function (_this__u8e3s4, measurable, constraints) {
    var horizontal = _this__u8e3s4.p2k(this.b7e_1) + _this__u8e3s4.p2k(this.d7e_1) | 0;
    var vertical = _this__u8e3s4.p2k(this.c7e_1) + _this__u8e3s4.p2k(this.e7e_1) | 0;
    var placeable = measurable.g4i(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.h4i_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.i4i_1 + vertical | 0);
    return _this__u8e3s4.m4i(width, height, null, PaddingModifier$measure$lambda(this, placeable, _this__u8e3s4), 4, null);
  };
  PaddingModifier.prototype.hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.b7e_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.c7e_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.d7e_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.e7e_1) | 0;
    result = imul(31, result) + (this.f7e_1 | 0) | 0;
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
    return (((equals(this.b7e_1, otherModifier.b7e_1) ? equals(this.c7e_1, otherModifier.c7e_1) : false) ? equals(this.d7e_1, otherModifier.d7e_1) : false) ? equals(this.e7e_1, otherModifier.e7e_1) : false) ? this.f7e_1 === otherModifier.f7e_1 : false;
  };
  PaddingModifier.$metadata$ = classMeta('PaddingModifier', [LayoutModifier], undefined, undefined, undefined, InspectorValueInfo.prototype);
  function PaddingValues() {
  }
  PaddingValues.$metadata$ = interfaceMeta('PaddingValues');
  function PaddingValues_0(start, top, end, bottom) {
    return new PaddingValuesImpl(start, top, end, bottom);
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
    return _this__u8e3s4.y4e(new PaddingValuesModifier(paddingValues, tmp$ret$0));
  }
  function PaddingValuesImpl(start, top, end, bottom) {
    this.k7e_1 = start;
    this.l7e_1 = top;
    this.m7e_1 = end;
    this.n7e_1 = bottom;
  }
  PaddingValuesImpl.prototype.g7e = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.k7e_1 : this.m7e_1;
  };
  PaddingValuesImpl.prototype.h7e = function () {
    return this.l7e_1;
  };
  PaddingValuesImpl.prototype.i7e = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.m7e_1 : this.k7e_1;
  };
  PaddingValuesImpl.prototype.j7e = function () {
    return this.n7e_1;
  };
  PaddingValuesImpl.prototype.equals = function (other) {
    if (!(other instanceof PaddingValuesImpl))
      return false;
    return ((equals(this.k7e_1, other.k7e_1) ? equals(this.l7e_1, other.l7e_1) : false) ? equals(this.m7e_1, other.m7e_1) : false) ? equals(this.n7e_1, other.n7e_1) : false;
  };
  PaddingValuesImpl.prototype.hashCode = function () {
    return imul(imul(imul(Dp__hashCode_impl_sxkrra(this.k7e_1), 31) + Dp__hashCode_impl_sxkrra(this.l7e_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.m7e_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.n7e_1) | 0;
  };
  PaddingValuesImpl.prototype.toString = function () {
    return 'PaddingValues(start=' + new Dp(this.k7e_1) + ', top=' + new Dp(this.l7e_1) + ', end=' + new Dp(this.m7e_1) + ', bottom=' + new Dp(this.n7e_1) + ')';
  };
  PaddingValuesImpl.$metadata$ = classMeta('PaddingValuesImpl', [PaddingValues]);
  function PaddingValuesModifier$measure$lambda($placeable, $this_measure, this$0) {
    return function ($this$layout) {
      var tmp = $this_measure.p2k(this$0.r7e_1.g7e($this_measure.y3k()));
      var tmp_0 = $this_measure.p2k(this$0.r7e_1.h7e());
      $this$layout.l5g($placeable, tmp, tmp_0, 0.0, 4, null);
      return Unit_getInstance();
    };
  }
  function PaddingValuesModifier(paddingValues, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.r7e_1 = paddingValues;
  }
  PaddingValuesModifier.prototype.f4i = function (_this__u8e3s4, measurable, constraints) {
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2 = this.r7e_1.g7e(_this__u8e3s4.y3k());
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (Dp__compareTo_impl_tlg3dl(tmp_2, tmp$ret$0) >= 0) {
      var tmp_3 = this.r7e_1.h7e();
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      tmp_1 = Dp__compareTo_impl_tlg3dl(tmp_3, tmp$ret$1) >= 0;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp_4 = this.r7e_1.i7e(_this__u8e3s4.y3k());
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$2 = _Dp___init__impl__ms3zkb(0);
      tmp_0 = Dp__compareTo_impl_tlg3dl(tmp_4, tmp$ret$2) >= 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_5 = this.r7e_1.j7e();
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
    var horizontal = _this__u8e3s4.p2k(this.r7e_1.g7e(_this__u8e3s4.y3k())) + _this__u8e3s4.p2k(this.r7e_1.i7e(_this__u8e3s4.y3k())) | 0;
    var vertical = _this__u8e3s4.p2k(this.r7e_1.h7e()) + _this__u8e3s4.p2k(this.r7e_1.j7e()) | 0;
    var placeable = measurable.g4i(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.h4i_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.i4i_1 + vertical | 0);
    return _this__u8e3s4.m4i(width, height, null, PaddingValuesModifier$measure$lambda(placeable, _this__u8e3s4, this), 4, null);
  };
  PaddingValuesModifier.prototype.hashCode = function () {
    return hashCode(this.r7e_1);
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
    return equals(this.r7e_1, otherModifier.r7e_1);
  };
  PaddingValuesModifier.$metadata$ = classMeta('PaddingValuesModifier', [LayoutModifier], undefined, undefined, undefined, InspectorValueInfo.prototype);
  function padding$lambda($start, $top, $end, $bottom) {
    return function ($this$null) {
      $this$null.e4h_1 = 'padding';
      $this$null.g4h_1.k4h('start', new Dp($start));
      $this$null.g4h_1.k4h('top', new Dp($top));
      $this$null.g4h_1.k4h('end', new Dp($end));
      $this$null.g4h_1.k4h('bottom', new Dp($bottom));
      return Unit_getInstance();
    };
  }
  function padding$lambda_0($horizontal, $vertical) {
    return function ($this$null) {
      $this$null.e4h_1 = 'padding';
      $this$null.g4h_1.k4h('horizontal', new Dp($horizontal));
      $this$null.g4h_1.k4h('vertical', new Dp($vertical));
      return Unit_getInstance();
    };
  }
  function padding$lambda_1($all) {
    return function ($this$null) {
      $this$null.e4h_1 = 'padding';
      $this$null.f4h_1 = new Dp($all);
      return Unit_getInstance();
    };
  }
  function padding$lambda_2($paddingValues) {
    return function ($this$null) {
      $this$null.e4h_1 = 'padding';
      $this$null.g4h_1.k4h('paddingValues', $paddingValues);
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
    $composer_0.y1a(-636825856);
    sourceInformation($composer_0, 'C(Row$composable)P(2,1,3)78@3913L58,79@3976L130:Row.kt#2w3rfo');
    if (!(($default & 1) === 0))
      modifier_0 = Companion_getInstance();
    if (!(($default & 2) === 0))
      horizontalArrangement_0 = Arrangement_getInstance().f7c_1;
    if (!(($default & 4) === 0))
      verticalAlignment_0 = Companion_getInstance_1().b4e_1;
    var measurePolicy = rowMeasurePolicy$composable(horizontalArrangement_0, verticalAlignment_0, $composer_0, 14 & $changed >> 3 | 112 & $changed >> 3);
    // Inline function 'androidx.compose.ui.layout.Layout$composable' call
    var tmp0_Layout$composable = modifier_0;
    var tmp1_Layout$composable = $composer_0;
    var tmp2_Layout$composable = 112 & $changed << 3;
    var modifier_1 = tmp0_Layout$composable;
    var $composer_1 = tmp1_Layout$composable;
    $composer_1.y1a(1725976829);
    sourceInformation($composer_1, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
    if (!(0 === 0))
      modifier_1 = Companion_getInstance();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
    var tmp1_$get_current$$composable_gn3xww = $composer_1;
    var $composer_2 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_2, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_2.w1n(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_2);
    tmp$ret$0 = tmp0;
    var density = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
    var tmp3_$get_current$$composable_fm67ua = $composer_1;
    var $composer_3 = tmp3_$get_current$$composable_fm67ua;
    sourceInformationMarkerStart($composer_3, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_0 = $composer_3.w1n(tmp2_$get_current$$composable_g4n2vl);
    sourceInformationMarkerEnd($composer_3);
    tmp$ret$1 = tmp0_0;
    var layoutDirection = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
    var tmp5_$get_current$$composable_el8hro = $composer_1;
    var $composer_4 = tmp5_$get_current$$composable_el8hro;
    sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_1 = $composer_4.w1n(tmp4_$get_current$$composable_f3pcsz);
    sourceInformationMarkerEnd($composer_4);
    tmp$ret$2 = tmp0_1;
    var viewConfiguration = tmp$ret$2;
    // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
    var tmp6_ReusableComposeNode$composable = Companion_getInstance_0().a5e_1;
    var tmp7_ReusableComposeNode$composable = materializerOf(modifier_1);
    var tmp8_ReusableComposeNode$composable = $composer_1;
    var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
    var $composer_5 = tmp8_ReusableComposeNode$composable;
    var tmp = $composer_5.u1m();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_5.g1n();
    if ($composer_5.e1n()) {
      $composer_5.h1n(tmp6_ReusableComposeNode$composable);
    } else {
      $composer_5.j1n();
    }
    $composer_5.l1n();
    // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
    var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_5);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_0().e5e_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_0().d5e_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_0().f5e_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_0().g5e_1);
    $composer_5.m1n();
    tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_5)), $composer_5, 112 & tmp9_ReusableComposeNode$composable >> 3);
    $composer_5.y1a(2058660585);
    // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
    var tmp3__anonymous__ufb84q = $composer_5;
    var tmp4__anonymous__pkmkx7 = 14 & tmp9_ReusableComposeNode$composable >> 9;
    var $composer_6 = tmp3__anonymous__ufb84q;
    $composer_6.y1a(-678309503);
    sourceInformation($composer_6, 'C80@4021L9:Row.kt#2w3rfo');
    if (!((tmp4__anonymous__pkmkx7 & 11) === 2) ? true : !$composer_6.l1m()) {
      content(RowScopeInstance_getInstance(), $composer_6, 6 | 112 & $changed >> 6);
    } else {
      $composer_6.l1h();
    }
    $composer_6.d1b();
    $composer_5.d1b();
    $composer_5.k1n();
    $composer_1.d1b();
    $composer_0.d1b();
  }
  function RowScope() {
  }
  RowScope.$metadata$ = interfaceMeta('RowScope');
  function rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer, $changed) {
    init_properties_Row_kt_t0iz6i();
    var $composer_0 = $composer;
    $composer_0.y1a(270154611);
    sourceInformation($composer_0, 'C(rowMeasurePolicy$composable)105@4830L730:Row.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(270154611, $changed, -1, 'androidx.compose.foundation.layout.rowMeasurePolicy$composable (Row.kt:102)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = $composer_0;
    var tmp1_remember$composable = 14 & $changed | 112 & $changed;
    var $composer_1 = tmp0_remember$composable;
    $composer_1.y1a(-1124426577);
    sourceInformation($composer_1, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = !!($composer_1.z1a(horizontalArrangement) | $composer_1.z1a(verticalAlignment));
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_2().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.rowMeasurePolicy$composable.<anonymous>' call
      var tmp_0;
      if (equals(horizontalArrangement, Arrangement_getInstance().f7c_1) ? equals(verticalAlignment, Companion_getInstance_1().b4e_1) : false) {
        tmp_0 = get_DefaultRowMeasurePolicy();
      } else {
        var tmp0_orientation = LayoutOrientation_Horizontal_getInstance();
        var tmp1_arrangementSpacing = horizontalArrangement.c7c();
        var tmp2_crossAxisAlignment = Companion_getInstance_7().v7e(verticalAlignment);
        var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
        tmp_0 = rowColumnMeasurePolicy(tmp0_orientation, rowMeasurePolicy$composable$lambda(horizontalArrangement), tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
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
    var tmp_1 = tmp$ret$2;
    tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
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
  function RowScopeInstance$weight$lambda($weight, $fill) {
    return function ($this$null) {
      $this$null.e4h_1 = 'weight';
      $this$null.f4h_1 = $weight;
      $this$null.g4h_1.k4h('weight', $weight);
      $this$null.g4h_1.k4h('fill', $fill);
      return Unit_getInstance();
    };
  }
  function RowScopeInstance$align$lambda($alignment) {
    return function ($this$null) {
      $this$null.e4h_1 = 'align';
      $this$null.f4h_1 = $alignment;
      return Unit_getInstance();
    };
  }
  function RowScopeInstance() {
    RowScopeInstance_instance = this;
  }
  RowScopeInstance.prototype.s7e = function (_this__u8e3s4, weight, fill) {
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
    return _this__u8e3s4.y4e(new LayoutWeightImpl(weight, fill, tmp$ret$1));
  };
  RowScopeInstance.prototype.u7e = function (_this__u8e3s4, alignment) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = RowScopeInstance$align$lambda(alignment);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.y4e(new VerticalAlignModifier(alignment, tmp$ret$0));
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
    var tmp0_with = Arrangement_getInstance().f7c_1;
    // Inline function 'kotlin.contracts.contract' call
    tmp0_with.d7c(density, totalSize, size, layoutDirection, outPosition);
    tmp$ret$0 = Unit_getInstance();
    return Unit_getInstance();
  }
  function rowMeasurePolicy$composable$lambda($horizontalArrangement) {
    return function (totalSize, size, layoutDirection, density, outPosition) {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $horizontalArrangement.d7c(density, totalSize, size, layoutDirection, outPosition);
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
      var tmp1_arrangementSpacing = Arrangement_getInstance().f7c_1.c7c();
      var tmp2_crossAxisAlignment = Companion_getInstance_7().v7e(Companion_getInstance_1().b4e_1);
      var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
      DefaultRowMeasurePolicy = rowColumnMeasurePolicy(tmp0_orientation, DefaultRowMeasurePolicy$lambda, tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
    }
  }
  var LayoutOrientation_Horizontal_instance;
  var LayoutOrientation_Vertical_instance;
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
    this.j7d_1 = CenterCrossAxisAlignment_getInstance();
    this.k7d_1 = StartCrossAxisAlignment_getInstance();
    this.l7d_1 = EndCrossAxisAlignment_getInstance();
  }
  Companion.prototype.v7e = function (vertical) {
    return new VerticalCrossAxisAlignment(vertical);
  };
  Companion.prototype.m7d = function (horizontal) {
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
  CenterCrossAxisAlignment.prototype.w7e = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
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
  StartCrossAxisAlignment.prototype.w7e = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
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
  EndCrossAxisAlignment.prototype.w7e = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? size : 0;
  };
  EndCrossAxisAlignment.$metadata$ = objectMeta('EndCrossAxisAlignment', undefined, undefined, undefined, undefined, CrossAxisAlignment.prototype);
  var EndCrossAxisAlignment_instance;
  function EndCrossAxisAlignment_getInstance() {
    if (EndCrossAxisAlignment_instance == null)
      new EndCrossAxisAlignment();
    return EndCrossAxisAlignment_instance;
  }
  function VerticalCrossAxisAlignment(vertical) {
    CrossAxisAlignment.call(this);
    this.z7e_1 = vertical;
  }
  VerticalCrossAxisAlignment.prototype.w7e = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.z7e_1.r4d(0, size);
  };
  VerticalCrossAxisAlignment.$metadata$ = classMeta('VerticalCrossAxisAlignment', undefined, undefined, undefined, undefined, CrossAxisAlignment.prototype);
  function HorizontalCrossAxisAlignment(horizontal) {
    CrossAxisAlignment.call(this);
    this.a7f_1 = horizontal;
  }
  HorizontalCrossAxisAlignment.prototype.w7e = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.a7f_1.q4d(0, size, layoutDirection);
  };
  HorizontalCrossAxisAlignment.$metadata$ = classMeta('HorizontalCrossAxisAlignment', undefined, undefined, undefined, undefined, CrossAxisAlignment.prototype);
  function CrossAxisAlignment() {
    Companion_getInstance_7();
  }
  CrossAxisAlignment.prototype.x7e = function () {
    return false;
  };
  CrossAxisAlignment.prototype.y7e = function (placeable) {
    return null;
  };
  CrossAxisAlignment.$metadata$ = classMeta('CrossAxisAlignment');
  var SizeMode_Wrap_instance;
  var SizeMode_Expand_instance;
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
  function OrientationIndependentConstraints_init_$Init$(c, orientation, $this) {
    OrientationIndependentConstraints.call($this, orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_minWidth__impl__hi9lfi(c) : _Constraints___get_minHeight__impl__ev4bgx(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_maxWidth__impl__uuyqc(c) : _Constraints___get_maxHeight__impl__dt3e8z(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_minHeight__impl__ev4bgx(c) : _Constraints___get_minWidth__impl__hi9lfi(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_maxHeight__impl__dt3e8z(c) : _Constraints___get_maxWidth__impl__uuyqc(c));
    return $this;
  }
  function OrientationIndependentConstraints_init_$Create$(c, orientation) {
    return OrientationIndependentConstraints_init_$Init$(c, orientation, Object.create(OrientationIndependentConstraints.prototype));
  }
  function OrientationIndependentConstraints(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax) {
    this.b7f_1 = mainAxisMin;
    this.c7f_1 = mainAxisMax;
    this.d7f_1 = crossAxisMin;
    this.e7f_1 = crossAxisMax;
  }
  OrientationIndependentConstraints.prototype.f7f = function (orientation) {
    var tmp;
    if (orientation === LayoutOrientation_Horizontal_getInstance()) {
      tmp = Constraints_0(this.b7f_1, this.c7f_1, this.d7f_1, this.e7f_1);
    } else {
      tmp = Constraints_0(this.d7f_1, this.e7f_1, this.b7f_1, this.c7f_1);
    }
    return tmp;
  };
  OrientationIndependentConstraints.prototype.g7f = function (mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax) {
    return new OrientationIndependentConstraints(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
  };
  OrientationIndependentConstraints.prototype.h7f = function (mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      mainAxisMin = this.b7f_1;
    if (!(($mask0 & 2) === 0))
      mainAxisMax = this.c7f_1;
    if (!(($mask0 & 4) === 0))
      crossAxisMin = this.d7f_1;
    if (!(($mask0 & 8) === 0))
      crossAxisMax = this.e7f_1;
    return this.g7f(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
  };
  OrientationIndependentConstraints.prototype.toString = function () {
    return 'OrientationIndependentConstraints(mainAxisMin=' + this.b7f_1 + ', mainAxisMax=' + this.c7f_1 + ', crossAxisMin=' + this.d7f_1 + ', crossAxisMax=' + this.e7f_1 + ')';
  };
  OrientationIndependentConstraints.prototype.hashCode = function () {
    var result = this.b7f_1;
    result = imul(result, 31) + this.c7f_1 | 0;
    result = imul(result, 31) + this.d7f_1 | 0;
    result = imul(result, 31) + this.e7f_1 | 0;
    return result;
  };
  OrientationIndependentConstraints.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OrientationIndependentConstraints))
      return false;
    var tmp0_other_with_cast = other instanceof OrientationIndependentConstraints ? other : THROW_CCE();
    if (!(this.b7f_1 === tmp0_other_with_cast.b7f_1))
      return false;
    if (!(this.c7f_1 === tmp0_other_with_cast.c7f_1))
      return false;
    if (!(this.d7f_1 === tmp0_other_with_cast.d7f_1))
      return false;
    if (!(this.e7f_1 === tmp0_other_with_cast.e7f_1))
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
    this.i7f_1 = weight;
    this.j7f_1 = fill;
    this.k7f_1 = crossAxisAlignment;
  }
  RowColumnParentData.prototype.l7f = function (_set____db54di) {
    this.i7f_1 = _set____db54di;
  };
  RowColumnParentData.prototype.m7f = function (_set____db54di) {
    this.j7f_1 = _set____db54di;
  };
  RowColumnParentData.prototype.n7f = function (_set____db54di) {
    this.k7f_1 = _set____db54di;
  };
  RowColumnParentData.prototype.toString = function () {
    return 'RowColumnParentData(weight=' + this.i7f_1 + ', fill=' + this.j7f_1 + ', crossAxisAlignment=' + this.k7f_1 + ')';
  };
  RowColumnParentData.prototype.hashCode = function () {
    var result = getNumberHashCode(this.i7f_1);
    result = imul(result, 31) + (this.j7f_1 | 0) | 0;
    result = imul(result, 31) + (this.k7f_1 == null ? 0 : hashCode(this.k7f_1)) | 0;
    return result;
  };
  RowColumnParentData.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowColumnParentData))
      return false;
    var tmp0_other_with_cast = other instanceof RowColumnParentData ? other : THROW_CCE();
    if (!equals(this.i7f_1, tmp0_other_with_cast.i7f_1))
      return false;
    if (!(this.j7f_1 === tmp0_other_with_cast.j7f_1))
      return false;
    if (!equals(this.k7f_1, tmp0_other_with_cast.k7f_1))
      return false;
    return true;
  };
  RowColumnParentData.$metadata$ = classMeta('RowColumnParentData');
  function get_data(_this__u8e3s4) {
    var tmp = _this__u8e3s4.z5d();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function get_weight(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i7f_1;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  }
  function get_isRelative(_this__u8e3s4) {
    var tmp0_safe_receiver = get_crossAxisAlignment(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x7e();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function get_fill(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j7f_1;
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function get_crossAxisAlignment(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k7f_1;
  }
  function LayoutWeightImpl(weight, fill, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.r7f_1 = weight;
    this.s7f_1 = fill;
  }
  LayoutWeightImpl.prototype.w2r = function () {
    return this.r7f_1;
  };
  LayoutWeightImpl.prototype.t7f = function () {
    return this.s7f_1;
  };
  LayoutWeightImpl.prototype.f5g = function (_this__u8e3s4, parentData) {
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
    tmp0_also.i7f_1 = this.r7f_1;
    tmp0_also.j7f_1 = this.s7f_1;
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
    return this.r7f_1 === otherModifier.r7f_1 ? this.s7f_1 === otherModifier.s7f_1 : false;
  };
  LayoutWeightImpl.prototype.hashCode = function () {
    var result = getNumberHashCode(this.r7f_1);
    result = imul(31, result) + (this.s7f_1 | 0) | 0;
    return result;
  };
  LayoutWeightImpl.prototype.toString = function () {
    return 'LayoutWeightImpl(weight=' + this.r7f_1 + ', fill=' + this.s7f_1 + ')';
  };
  LayoutWeightImpl.$metadata$ = classMeta('LayoutWeightImpl', [ParentDataModifier], undefined, undefined, undefined, InspectorValueInfo.prototype);
  function HorizontalAlignModifier(horizontal, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.x7f_1 = horizontal;
  }
  HorizontalAlignModifier.prototype.y7f = function () {
    return this.x7f_1;
  };
  HorizontalAlignModifier.prototype.f5g = function (_this__u8e3s4, parentData) {
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
    tmp0_also.k7f_1 = Companion_getInstance_7().m7d(this.x7f_1);
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
    return equals(this.x7f_1, otherModifier.x7f_1);
  };
  HorizontalAlignModifier.prototype.hashCode = function () {
    return hashCode(this.x7f_1);
  };
  HorizontalAlignModifier.prototype.toString = function () {
    return 'HorizontalAlignModifier(horizontal=' + this.x7f_1 + ')';
  };
  HorizontalAlignModifier.$metadata$ = classMeta('HorizontalAlignModifier', [ParentDataModifier], undefined, undefined, undefined, InspectorValueInfo.prototype);
  function VerticalAlignModifier(vertical, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.c7g_1 = vertical;
  }
  VerticalAlignModifier.prototype.d7g = function () {
    return this.c7g_1;
  };
  VerticalAlignModifier.prototype.f5g = function (_this__u8e3s4, parentData) {
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
    tmp0_also.k7f_1 = Companion_getInstance_7().v7e(this.c7g_1);
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
    return equals(this.c7g_1, otherModifier.c7g_1);
  };
  VerticalAlignModifier.prototype.hashCode = function () {
    return hashCode(this.c7g_1);
  };
  VerticalAlignModifier.prototype.toString = function () {
    return 'VerticalAlignModifier(vertical=' + this.c7g_1 + ')';
  };
  VerticalAlignModifier.$metadata$ = classMeta('VerticalAlignModifier', [ParentDataModifier], undefined, undefined, undefined, InspectorValueInfo.prototype);
  function rowColumnMeasurePolicy$mainAxisSize(_this__u8e3s4, $orientation) {
    return $orientation.equals(LayoutOrientation_Horizontal_getInstance()) ? _this__u8e3s4.h4i_1 : _this__u8e3s4.i4i_1;
  }
  function rowColumnMeasurePolicy$crossAxisSize(_this__u8e3s4, $orientation) {
    return $orientation.equals(LayoutOrientation_Horizontal_getInstance()) ? _this__u8e3s4.i4i_1 : _this__u8e3s4.h4i_1;
  }
  function rowColumnMeasurePolicy$o$measure$lambda($measurables, $placeables, $arrangement, $mainAxisLayoutSize, $this_measure, $mainAxisPositions, $rowColumnParentData, $crossAxisAlignment, $crossAxisLayoutSize, $orientation, $beforeCrossAxisAlignmentLine) {
    return function ($this$layout) {
      var tmp = 0;
      var tmp_0 = $measurables.f();
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
      $arrangement($mainAxisLayoutSize, childrenMainAxisSize, $this_measure.y3k(), $this_measure, $mainAxisPositions);
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
          tmp_4 = $this_measure.y3k();
        }
        var crossAxis = childCrossAlignment.w7e(tmp_3, tmp_4, item, $beforeCrossAxisAlignmentLine._v);
        if ($orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
          var tmp_5 = $mainAxisPositions[tmp0__anonymous__q1qw7t];
          $this$layout.l5g(item, tmp_5, crossAxis, 0.0, 4, null);
        } else {
          var tmp_6 = $mainAxisPositions[tmp0__anonymous__q1qw7t];
          $this$layout.l5g(item, crossAxis, tmp_6, 0.0, 4, null);
        }
      }
      return Unit_getInstance();
    };
  }
  function rowColumnMeasurePolicy$1($orientation, $arrangementSpacing, $crossAxisSize, $arrangement, $crossAxisAlignment) {
    this.e7g_1 = $orientation;
    this.f7g_1 = $arrangementSpacing;
    this.g7g_1 = $crossAxisSize;
    this.h7g_1 = $arrangement;
    this.i7g_1 = $crossAxisAlignment;
  }
  rowColumnMeasurePolicy$1.prototype.d5f = function (_this__u8e3s4, measurables, constraints) {
    var constraints_0 = OrientationIndependentConstraints_init_$Create$(constraints, this.e7g_1);
    var arrangementSpacingPx = _this__u8e3s4.p2k(this.f7g_1);
    var totalWeight = 0.0;
    var fixedSpace = 0;
    var crossAxisSpace = 0;
    var weightChildrenCount = 0;
    var anyAlignBy = false;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = measurables.f();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var placeables = tmp$ret$0;
    var tmp = 0;
    var tmp_0 = measurables.f();
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$1 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$1;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$2;
      // Inline function 'androidx.compose.foundation.layout.<no name provided>.measure.<anonymous>' call
      tmp$ret$2 = get_data(measurables.g(tmp_2));
      tmp_1[tmp_2] = tmp$ret$2;
      tmp = tmp + 1 | 0;
    }
    var rowColumnParentData = tmp_1;
    var spaceAfterLastNoWeight = 0;
    var inductionVariable = 0;
    var last = measurables.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var child = measurables.g(i);
        var parentData = rowColumnParentData[i];
        var weight = get_weight(parentData);
        if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          weightChildrenCount = weightChildrenCount + 1 | 0;
        } else {
          var mainAxisMax = constraints_0.c7f_1;
          var tmp_3;
          Companion_getInstance_3();
          if (mainAxisMax === 2147483647) {
            Companion_getInstance_3();
            tmp_3 = 2147483647;
          } else {
            tmp_3 = mainAxisMax - fixedSpace | 0;
          }
          var tmp_4 = tmp_3;
          var placeable = child.g4i(constraints_0.h7f(0, tmp_4, 0, 0, 8, null).f7f(this.e7g_1));
          var tmp$ret$3;
          // Inline function 'kotlin.math.min' call
          var tmp1_min = (mainAxisMax - fixedSpace | 0) - rowColumnMeasurePolicy$mainAxisSize(placeable, this.e7g_1) | 0;
          tmp$ret$3 = Math.min(arrangementSpacingPx, tmp1_min);
          spaceAfterLastNoWeight = tmp$ret$3;
          fixedSpace = fixedSpace + (rowColumnMeasurePolicy$mainAxisSize(placeable, this.e7g_1) + spaceAfterLastNoWeight | 0) | 0;
          var tmp$ret$4;
          // Inline function 'kotlin.math.max' call
          var tmp2_max = crossAxisSpace;
          var tmp3_max = rowColumnMeasurePolicy$crossAxisSize(placeable, this.e7g_1);
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
        tmp_6 = !(constraints_0.c7f_1 === 2147483647);
      } else {
        tmp_6 = false;
      }
      if (tmp_6) {
        tmp_5 = constraints_0.c7f_1;
      } else {
        tmp_5 = constraints_0.b7f_1;
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
      var last_1 = measurables.f() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var i_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          if (placeables[i_0] == null) {
            var child_0 = measurables.g(i_0);
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
            var placeable_0 = child_0.g4i((new OrientationIndependentConstraints(tmp_8, childMainAxisSize, 0, constraints_0.e7f_1)).f7f(this.e7g_1));
            weightedSpace = weightedSpace + rowColumnMeasurePolicy$mainAxisSize(placeable_0, this.e7g_1) | 0;
            var tmp$ret$11;
            // Inline function 'kotlin.math.max' call
            var tmp7_max = crossAxisSpace;
            var tmp8_max = rowColumnMeasurePolicy$crossAxisSize(placeable_0, this.e7g_1);
            tmp$ret$11 = Math.max(tmp7_max, tmp8_max);
            crossAxisSpace = tmp$ret$11;
            anyAlignBy = anyAlignBy ? true : get_isRelative(parentData_0);
            placeables[i_0] = placeable_0;
          }
        }
         while (inductionVariable_1 <= last_1);
      weightedSpace = coerceAtMost(weightedSpace + imul(arrangementSpacingPx, weightChildrenCount - 1 | 0) | 0, constraints_0.c7f_1 - fixedSpace | 0);
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
          var alignmentLinePosition = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.y7e(placeable_1);
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
            var tmp_11 = rowColumnMeasurePolicy$crossAxisSize(placeable_1, this.e7g_1);
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
              tmp_12 = rowColumnMeasurePolicy$crossAxisSize(placeable_1, this.e7g_1);
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
    var tmp14_max = constraints_0.b7f_1;
    tmp$ret$18 = Math.max(tmp13_max, tmp14_max);
    var mainAxisLayoutSize = tmp$ret$18;
    var tmp_13;
    var tmp_14;
    Companion_getInstance_3();
    if (!(constraints_0.e7f_1 === 2147483647)) {
      tmp_14 = this.g7g_1.equals(SizeMode_Expand_getInstance());
    } else {
      tmp_14 = false;
    }
    if (tmp_14) {
      tmp_13 = constraints_0.e7f_1;
    } else {
      var tmp$ret$20;
      // Inline function 'kotlin.math.max' call
      var tmp17_max = crossAxisSpace;
      var tmp$ret$19;
      // Inline function 'kotlin.math.max' call
      var tmp15_max = constraints_0.d7f_1;
      var tmp16_max = beforeCrossAxisAlignmentLine._v + afterCrossAxisAlignmentLine | 0;
      tmp$ret$19 = Math.max(tmp15_max, tmp16_max);
      var tmp18_max = tmp$ret$19;
      tmp$ret$20 = Math.max(tmp17_max, tmp18_max);
      tmp_13 = tmp$ret$20;
    }
    var crossAxisLayoutSize = tmp_13;
    var tmp_15;
    if (this.e7g_1.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp_15 = mainAxisLayoutSize;
    } else {
      tmp_15 = crossAxisLayoutSize;
    }
    var layoutWidth = tmp_15;
    var tmp_16;
    if (this.e7g_1.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp_16 = crossAxisLayoutSize;
    } else {
      tmp_16 = mainAxisLayoutSize;
    }
    var layoutHeight = tmp_16;
    var tmp_17 = 0;
    var tmp_18 = measurables.f();
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
    return _this__u8e3s4.m4i(layoutWidth, layoutHeight, null, rowColumnMeasurePolicy$o$measure$lambda(measurables, placeables, this.h7g_1, mainAxisLayoutSize, _this__u8e3s4, mainAxisPositions, rowColumnParentData, this.i7g_1, crossAxisLayoutSize, this.e7g_1, beforeCrossAxisAlignmentLine), 4, null);
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
  var FillWholeMaxHeight;
  function get_FillWholeMaxSize() {
    init_properties_Size_kt_c1emiv();
    return FillWholeMaxSize;
  }
  var FillWholeMaxSize;
  var WrapContentWidthCenter;
  var WrapContentWidthStart;
  var WrapContentHeightCenter;
  var WrapContentHeightTop;
  var WrapContentSizeCenter;
  var WrapContentSizeTopStart;
  function FillModifier$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.d4i($placeable, 0, 0, 0.0, 4, null);
      return Unit_getInstance();
    };
  }
  function FillModifier(direction, fraction, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.m7g_1 = direction;
    this.n7g_1 = fraction;
  }
  FillModifier.prototype.f4i = function (_this__u8e3s4, measurable, constraints) {
    var minWidth;
    var maxWidth;
    if (_Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) ? !this.m7g_1.equals(Direction_Vertical_getInstance()) : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = _Constraints___get_maxWidth__impl__uuyqc(constraints) * this.n7g_1;
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
    if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints) ? !this.m7g_1.equals(Direction_Horizontal_getInstance()) : false) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp1_roundToInt = _Constraints___get_maxHeight__impl__dt3e8z(constraints) * this.n7g_1;
      tmp$ret$1 = roundToInt(tmp1_roundToInt);
      var height = coerceIn(tmp$ret$1, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
      minHeight = height;
      maxHeight = height;
    } else {
      minHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var placeable = measurable.g4i(Constraints_0(minWidth, maxWidth, minHeight, maxHeight));
    var tmp = placeable.h4i_1;
    var tmp_0 = placeable.i4i_1;
    return _this__u8e3s4.m4i(tmp, tmp_0, null, FillModifier$measure$lambda(placeable), 4, null);
  };
  FillModifier.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof FillModifier) {
      tmp_0 = this.m7g_1.equals(other.m7g_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.n7g_1 === other.n7g_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  FillModifier.prototype.hashCode = function () {
    return imul(this.m7g_1.hashCode(), 31) + getNumberHashCode(this.n7g_1) | 0;
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
  function WrapContentModifier$measure$lambda(this$0, $wrapperWidth, $placeable, $wrapperHeight, $this_measure) {
    return function ($this$layout) {
      var position = this$0.t7g_1(new IntSize_0(IntSize($wrapperWidth - $placeable.h4i_1 | 0, $wrapperHeight - $placeable.i4i_1 | 0)), $this_measure.y3k()).m2l_1;
      $this$layout.n5g($placeable, position, 0.0, 2, null);
      return Unit_getInstance();
    };
  }
  function WrapContentModifier(direction, unbounded, alignmentCallback, align, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.r7g_1 = direction;
    this.s7g_1 = unbounded;
    this.t7g_1 = alignmentCallback;
    this.u7g_1 = align;
  }
  WrapContentModifier.prototype.f4i = function (_this__u8e3s4, measurable, constraints) {
    var tmp0_minWidth = !this.r7g_1.equals(Direction_Vertical_getInstance()) ? 0 : _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp1_minHeight = !this.r7g_1.equals(Direction_Horizontal_getInstance()) ? 0 : _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp;
    if (!this.r7g_1.equals(Direction_Vertical_getInstance()) ? this.s7g_1 : false) {
      Companion_getInstance_3();
      tmp = 2147483647;
    } else {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var tmp2_maxWidth = tmp;
    var tmp_0;
    if (!this.r7g_1.equals(Direction_Horizontal_getInstance()) ? this.s7g_1 : false) {
      Companion_getInstance_3();
      tmp_0 = 2147483647;
    } else {
      tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var tmp3_maxHeight = tmp_0;
    var wrappedConstraints = Constraints_0(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
    var placeable = measurable.g4i(wrappedConstraints);
    var wrapperWidth = coerceIn(placeable.h4i_1, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
    var wrapperHeight = coerceIn(placeable.i4i_1, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    return _this__u8e3s4.m4i(wrapperWidth, wrapperHeight, null, WrapContentModifier$measure$lambda(this, wrapperWidth, placeable, wrapperHeight, _this__u8e3s4), 4, null);
  };
  WrapContentModifier.prototype.equals = function (other) {
    if (!(other instanceof WrapContentModifier))
      return false;
    return (this.r7g_1.equals(other.r7g_1) ? this.s7g_1 === other.s7g_1 : false) ? equals(this.u7g_1, other.u7g_1) : false;
  };
  WrapContentModifier.prototype.hashCode = function () {
    return imul(imul(this.r7g_1.hashCode(), 31) + (this.s7g_1 | 0) | 0, 31) + hashCode(this.u7g_1) | 0;
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
    return _this__u8e3s4.y4e(SizeModifier_init_$Create$(width, null, width, null, true, tmp$ret$0, 10, null));
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
    return _this__u8e3s4.y4e(new SizeModifier(size, size, size, size, true, tmp0_inspectorInfo));
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
    return _this__u8e3s4.y4e(SizeModifier_init_$Create$(null, min, null, max, true, tmp$ret$0, 5, null));
  }
  function heightIn$default(_this__u8e3s4, min, max, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      min = Companion_getInstance_4().d2l_1;
    if (!(($mask0 & 2) === 0))
      max = Companion_getInstance_4().d2l_1;
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
    return _this__u8e3s4.y4e(SizeModifier_init_$Create$(min, null, max, null, true, tmp$ret$0, 10, null));
  }
  function widthIn$default(_this__u8e3s4, min, max, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      min = Companion_getInstance_4().d2l_1;
    if (!(($mask0 & 2) === 0))
      max = Companion_getInstance_4().d2l_1;
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
    return _this__u8e3s4.y4e(new UnspecifiedConstraintsModifier(minWidth, minHeight, tmp$ret$0));
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
    return _this__u8e3s4.y4e(SizeModifier_init_$Create$(null, height, null, height, true, tmp$ret$0, 5, null));
  }
  function size_0(_this__u8e3s4, size) {
    init_properties_Size_kt_c1emiv();
    return size_1(_this__u8e3s4, _DpSize___get_width__impl__o3d5gt(size), _DpSize___get_height__impl__5xueo2(size));
  }
  function fillMaxSize(_this__u8e3s4, fraction) {
    init_properties_Size_kt_c1emiv();
    return _this__u8e3s4.y4e(fraction === 1.0 ? get_FillWholeMaxSize() : createFillSizeModifier(fraction));
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
    return _this__u8e3s4.y4e(new SizeModifier(width, height, width, height, true, tmp0_inspectorInfo));
  }
  function fillMaxWidth(_this__u8e3s4, fraction) {
    init_properties_Size_kt_c1emiv();
    return _this__u8e3s4.y4e(fraction === 1.0 ? get_FillWholeMaxWidth() : createFillWidthModifier(fraction));
  }
  function fillMaxWidth$default(_this__u8e3s4, fraction, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      fraction = 1.0;
    return fillMaxWidth(_this__u8e3s4, fraction);
  }
  function SizeModifier_init_$Init$(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      minWidth = Companion_getInstance_4().d2l_1;
    if (!(($mask0 & 2) === 0))
      minHeight = Companion_getInstance_4().d2l_1;
    if (!(($mask0 & 4) === 0))
      maxWidth = Companion_getInstance_4().d2l_1;
    if (!(($mask0 & 8) === 0))
      maxHeight = Companion_getInstance_4().d2l_1;
    SizeModifier.call($this, minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo);
    return $this;
  }
  function SizeModifier_init_$Create$(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo, $mask0, $marker) {
    return SizeModifier_init_$Init$(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo, $mask0, $marker, Object.create(SizeModifier.prototype));
  }
  function _get_targetConstraints__wn7g24(_this__u8e3s4, $this) {
    var tmp;
    if (!equals($this.a7h_1, Companion_getInstance_4().d2l_1)) {
      var tmp_0 = new Dp($this.a7h_1);
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
      tmp = _this__u8e3s4.p2k(coerceAtLeast(tmp_0, new Dp(tmp$ret$0)).f2l_1);
    } else {
      Companion_getInstance_3();
      tmp = 2147483647;
    }
    var maxWidth = tmp;
    var tmp_1;
    if (!equals($this.b7h_1, Companion_getInstance_4().d2l_1)) {
      var tmp_2 = new Dp($this.b7h_1);
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      tmp_1 = _this__u8e3s4.p2k(coerceAtLeast(tmp_2, new Dp(tmp$ret$1)).f2l_1);
    } else {
      Companion_getInstance_3();
      tmp_1 = 2147483647;
    }
    var maxHeight = tmp_1;
    var tmp_3;
    if (!equals($this.y7g_1, Companion_getInstance_4().d2l_1)) {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      var tmp0_let = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.p2k($this.y7g_1), maxWidth), 0);
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
    if (!equals($this.z7g_1, Companion_getInstance_4().d2l_1)) {
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      var tmp1_let = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.p2k($this.z7g_1), maxHeight), 0);
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
      $this$layout.d4i($placeable, 0, 0, 0.0, 4, null);
      return Unit_getInstance();
    };
  }
  function SizeModifier(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.y7g_1 = minWidth;
    this.z7g_1 = minHeight;
    this.a7h_1 = maxWidth;
    this.b7h_1 = maxHeight;
    this.c7h_1 = enforceIncoming;
  }
  SizeModifier.prototype.f4i = function (_this__u8e3s4, measurable, constraints) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.foundation.layout.SizeModifier.measure.<anonymous>' call
    var tmp;
    if (this.c7h_1) {
      tmp = constrain(constraints, tmp0_let);
    } else {
      var tmp_0;
      if (!equals(this.y7g_1, Companion_getInstance_4().d2l_1)) {
        tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(tmp0_let);
      } else {
        tmp_0 = coerceAtMost(_Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(tmp0_let));
      }
      var resolvedMinWidth = tmp_0;
      var tmp_1;
      if (!equals(this.a7h_1, Companion_getInstance_4().d2l_1)) {
        tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(tmp0_let);
      } else {
        tmp_1 = coerceAtLeast_0(_Constraints___get_maxWidth__impl__uuyqc(constraints), _Constraints___get_minWidth__impl__hi9lfi(tmp0_let));
      }
      var resolvedMaxWidth = tmp_1;
      var tmp_2;
      if (!equals(this.z7g_1, Companion_getInstance_4().d2l_1)) {
        tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(tmp0_let);
      } else {
        tmp_2 = coerceAtMost(_Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(tmp0_let));
      }
      var resolvedMinHeight = tmp_2;
      var tmp_3;
      if (!equals(this.b7h_1, Companion_getInstance_4().d2l_1)) {
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
    var placeable = measurable.g4i(wrappedConstraints);
    var tmp_4 = placeable.h4i_1;
    var tmp_5 = placeable.i4i_1;
    return _this__u8e3s4.m4i(tmp_4, tmp_5, null, SizeModifier$measure$lambda(placeable), 4, null);
  };
  SizeModifier.prototype.equals = function (other) {
    if (!(other instanceof SizeModifier))
      return false;
    return (((equals(this.y7g_1, other.y7g_1) ? equals(this.z7g_1, other.z7g_1) : false) ? equals(this.a7h_1, other.a7h_1) : false) ? equals(this.b7h_1, other.b7h_1) : false) ? this.c7h_1 === other.c7h_1 : false;
  };
  SizeModifier.prototype.hashCode = function () {
    return imul(imul(imul(imul(Dp__hashCode_impl_sxkrra(this.y7g_1), 31) + Dp__hashCode_impl_sxkrra(this.z7g_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.a7h_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.b7h_1) | 0, 31);
  };
  SizeModifier.$metadata$ = classMeta('SizeModifier', [LayoutModifier], undefined, undefined, undefined, InspectorValueInfo.prototype);
  function UnspecifiedConstraintsModifier$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.d4i($placeable, 0, 0, 0.0, 4, null);
      return Unit_getInstance();
    };
  }
  function UnspecifiedConstraintsModifier(minWidth, minHeight, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.g7h_1 = minWidth;
    this.h7h_1 = minHeight;
  }
  UnspecifiedConstraintsModifier.prototype.f4i = function (_this__u8e3s4, measurable, constraints) {
    var tmp;
    if (!equals(this.g7h_1, Companion_getInstance_4().d2l_1) ? _Constraints___get_minWidth__impl__hi9lfi(constraints) === 0 : false) {
      tmp = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.p2k(this.g7h_1), _Constraints___get_maxWidth__impl__uuyqc(constraints)), 0);
    } else {
      tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    }
    var tmp_0 = tmp;
    var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_2;
    if (!equals(this.h7h_1, Companion_getInstance_4().d2l_1) ? _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0 : false) {
      tmp_2 = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.p2k(this.h7h_1), _Constraints___get_maxHeight__impl__dt3e8z(constraints)), 0);
    } else {
      tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    }
    var wrappedConstraints = Constraints_0(tmp_0, tmp_1, tmp_2, _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    var placeable = measurable.g4i(wrappedConstraints);
    var tmp_3 = placeable.h4i_1;
    var tmp_4 = placeable.i4i_1;
    return _this__u8e3s4.m4i(tmp_3, tmp_4, null, UnspecifiedConstraintsModifier$measure$lambda(placeable), 4, null);
  };
  UnspecifiedConstraintsModifier.prototype.equals = function (other) {
    if (!(other instanceof UnspecifiedConstraintsModifier))
      return false;
    return equals(this.g7h_1, other.g7h_1) ? equals(this.h7h_1, other.h7h_1) : false;
  };
  UnspecifiedConstraintsModifier.prototype.hashCode = function () {
    return imul(Dp__hashCode_impl_sxkrra(this.g7h_1), 31) + Dp__hashCode_impl_sxkrra(this.h7h_1) | 0;
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
    return _this__u8e3s4.y4e(new SizeModifier(minWidth, minHeight, maxWidth, maxHeight, false, tmp$ret$0));
  }
  function requiredSizeIn$default(_this__u8e3s4, minWidth, minHeight, maxWidth, maxHeight, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      minWidth = Companion_getInstance_4().d2l_1;
    if (!(($mask0 & 2) === 0))
      minHeight = Companion_getInstance_4().d2l_1;
    if (!(($mask0 & 4) === 0))
      maxWidth = Companion_getInstance_4().d2l_1;
    if (!(($mask0 & 8) === 0))
      maxHeight = Companion_getInstance_4().d2l_1;
    return requiredSizeIn(_this__u8e3s4, minWidth, minHeight, maxWidth, maxHeight);
  }
  function createFillWidthModifier$lambda($fraction) {
    return function ($this$$receiver) {
      $this$$receiver.e4h_1 = 'fillMaxWidth';
      $this$$receiver.g4h_1.k4h('fraction', $fraction);
      return Unit_getInstance();
    };
  }
  function createFillHeightModifier$lambda($fraction) {
    return function ($this$$receiver) {
      $this$$receiver.e4h_1 = 'fillMaxHeight';
      $this$$receiver.g4h_1.k4h('fraction', $fraction);
      return Unit_getInstance();
    };
  }
  function createFillSizeModifier$lambda($fraction) {
    return function ($this$$receiver) {
      $this$$receiver.e4h_1 = 'fillMaxSize';
      $this$$receiver.g4h_1.k4h('fraction', $fraction);
      return Unit_getInstance();
    };
  }
  function createWrapContentWidthModifier$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0(IntOffset($align.q4d(0, _IntSize___get_width__impl__d9yl4o(size.v2l_1), layoutDirection), 0));
    };
  }
  function createWrapContentWidthModifier$lambda_0($align, $unbounded) {
    return function ($this$$receiver) {
      $this$$receiver.e4h_1 = 'wrapContentWidth';
      $this$$receiver.g4h_1.k4h('align', $align);
      $this$$receiver.g4h_1.k4h('unbounded', $unbounded);
      return Unit_getInstance();
    };
  }
  function createWrapContentHeightModifier$lambda($align) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return new IntOffset_0(IntOffset(0, $align.r4d(0, _IntSize___get_height__impl__prv63b(size.v2l_1))));
    };
  }
  function createWrapContentHeightModifier$lambda_0($align, $unbounded) {
    return function ($this$$receiver) {
      $this$$receiver.e4h_1 = 'wrapContentHeight';
      $this$$receiver.g4h_1.k4h('align', $align);
      $this$$receiver.g4h_1.k4h('unbounded', $unbounded);
      return Unit_getInstance();
    };
  }
  function createWrapContentSizeModifier$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0($align.r4e(Companion_getInstance_6().t2l_1, size.v2l_1, layoutDirection));
    };
  }
  function createWrapContentSizeModifier$lambda_0($align, $unbounded) {
    return function ($this$$receiver) {
      $this$$receiver.e4h_1 = 'wrapContentSize';
      $this$$receiver.g4h_1.k4h('align', $align);
      $this$$receiver.g4h_1.k4h('unbounded', $unbounded);
      return Unit_getInstance();
    };
  }
  function width$lambda($width) {
    return function ($this$null) {
      $this$null.e4h_1 = 'width';
      $this$null.f4h_1 = new Dp($width);
      return Unit_getInstance();
    };
  }
  function size$lambda($size) {
    return function ($this$null) {
      $this$null.e4h_1 = 'size';
      $this$null.f4h_1 = new Dp($size);
      return Unit_getInstance();
    };
  }
  function heightIn$lambda($min, $max) {
    return function ($this$null) {
      $this$null.e4h_1 = 'heightIn';
      $this$null.g4h_1.k4h('min', new Dp($min));
      $this$null.g4h_1.k4h('max', new Dp($max));
      return Unit_getInstance();
    };
  }
  function widthIn$lambda($min, $max) {
    return function ($this$null) {
      $this$null.e4h_1 = 'widthIn';
      $this$null.g4h_1.k4h('min', new Dp($min));
      $this$null.g4h_1.k4h('max', new Dp($max));
      return Unit_getInstance();
    };
  }
  function defaultMinSize$lambda($minWidth, $minHeight) {
    return function ($this$null) {
      $this$null.e4h_1 = 'defaultMinSize';
      $this$null.g4h_1.k4h('minWidth', new Dp($minWidth));
      $this$null.g4h_1.k4h('minHeight', new Dp($minHeight));
      return Unit_getInstance();
    };
  }
  function height$lambda($height) {
    return function ($this$null) {
      $this$null.e4h_1 = 'height';
      $this$null.f4h_1 = new Dp($height);
      return Unit_getInstance();
    };
  }
  function size$lambda_0($width, $height) {
    return function ($this$null) {
      $this$null.e4h_1 = 'size';
      $this$null.g4h_1.k4h('width', new Dp($width));
      $this$null.g4h_1.k4h('height', new Dp($height));
      return Unit_getInstance();
    };
  }
  function requiredSizeIn$lambda($minWidth, $minHeight, $maxWidth, $maxHeight) {
    return function ($this$null) {
      $this$null.e4h_1 = 'requiredSizeIn';
      $this$null.g4h_1.k4h('minWidth', new Dp($minWidth));
      $this$null.g4h_1.k4h('minHeight', new Dp($minHeight));
      $this$null.g4h_1.k4h('maxWidth', new Dp($maxWidth));
      $this$null.g4h_1.k4h('maxHeight', new Dp($maxHeight));
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
      WrapContentWidthCenter = createWrapContentWidthModifier(Companion_getInstance_1().f4e_1, false);
      WrapContentWidthStart = createWrapContentWidthModifier(Companion_getInstance_1().e4e_1, false);
      WrapContentHeightCenter = createWrapContentHeightModifier(Companion_getInstance_1().c4e_1, false);
      WrapContentHeightTop = createWrapContentHeightModifier(Companion_getInstance_1().b4e_1, false);
      WrapContentSizeCenter = createWrapContentSizeModifier(Companion_getInstance_1().w4d_1, false);
      WrapContentSizeTopStart = createWrapContentSizeModifier(Companion_getInstance_1().s4d_1, false);
    }
  }
  function Spacer$composable(modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(344887062);
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
    $composer_1.y1a(1725976829);
    sourceInformation($composer_1, 'C(Layout$composable)P(!1,2)74@2907L7,75@2962L7,76@3021L7,77@3033L460:Layout.kt#80mrfh');
    if (!(0 === 0))
      modifier_0 = Companion_getInstance();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
    var tmp1_$get_current$$composable_gn3xww = $composer_1;
    var $composer_2 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_2, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_2.w1n(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_2);
    tmp$ret$0 = tmp0;
    var density = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
    var tmp3_$get_current$$composable_fm67ua = $composer_1;
    var $composer_3 = tmp3_$get_current$$composable_fm67ua;
    sourceInformationMarkerStart($composer_3, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_0 = $composer_3.w1n(tmp2_$get_current$$composable_g4n2vl);
    sourceInformationMarkerEnd($composer_3);
    tmp$ret$1 = tmp0_0;
    var layoutDirection = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
    var tmp5_$get_current$$composable_el8hro = $composer_1;
    var $composer_4 = tmp5_$get_current$$composable_el8hro;
    sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_1 = $composer_4.w1n(tmp4_$get_current$$composable_f3pcsz);
    sourceInformationMarkerEnd($composer_4);
    tmp$ret$2 = tmp0_1;
    var viewConfiguration = tmp$ret$2;
    // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
    var tmp6_ReusableComposeNode$composable = Companion_getInstance_0().a5e_1;
    var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
    var tmp8_ReusableComposeNode$composable = $composer_1;
    var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp1_Layout$composable << 9;
    var $composer_5 = tmp8_ReusableComposeNode$composable;
    var tmp = $composer_5.u1m();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_5.g1n();
    if ($composer_5.e1n()) {
      $composer_5.h1n(tmp6_ReusableComposeNode$composable);
    } else {
      $composer_5.j1n();
    }
    $composer_5.l1n();
    // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
    var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_5);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, tmp0_measurePolicy, Companion_getInstance_0().e5e_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_0().d5e_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_0().f5e_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_0().g5e_1);
    $composer_5.m1n();
    tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_5)), $composer_5, 112 & tmp9_ReusableComposeNode$composable >> 3);
    $composer_5.y1a(2058660585);
    // Inline function 'androidx.compose.foundation.layout.Spacer$composable.<anonymous>' call
    var tmp2__anonymous__z9zvc9 = $composer_5;
    var tmp3__anonymous__ufb84q = 14 & tmp9_ReusableComposeNode$composable >> 9;
    var $composer_6 = tmp2__anonymous__z9zvc9;
    $composer_6.y1a(1142320198);
    sourceInformation($composer_6, 'C:Spacer.kt#2w3rfo');
    if (!((tmp3__anonymous__ufb84q & 11) === 2) ? true : !$composer_6.l1m()) {
    } else {
      $composer_6.l1h();
    }
    $composer_6.d1b();
    $composer_5.d1b();
    $composer_5.k1n();
    $composer_1.d1b();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
  }
  function SpacerMeasurePolicy$measure$lambda($this$layout) {
    return Unit_getInstance();
  }
  function SpacerMeasurePolicy() {
    SpacerMeasurePolicy_instance = this;
  }
  SpacerMeasurePolicy.prototype.d5f = function (_this__u8e3s4, measurables, constraints) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.foundation.layout.SpacerMeasurePolicy.measure.<anonymous>' call
    var width = _Constraints___get_hasFixedWidth__impl__4p17wc(constraints) ? _Constraints___get_maxWidth__impl__uuyqc(constraints) : 0;
    var height = _Constraints___get_hasFixedHeight__impl__y56fxx(constraints) ? _Constraints___get_maxHeight__impl__dt3e8z(constraints) : 0;
    tmp$ret$0 = _this__u8e3s4.m4i(width, height, null, SpacerMeasurePolicy$measure$lambda, 4, null);
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
  //region block: post-declaration
  Arrangement$Start$1.prototype.c7c = get_spacing;
  Arrangement$End$1.prototype.c7c = get_spacing;
  Arrangement$Top$1.prototype.c7c = get_spacing_0;
  Arrangement$Bottom$1.prototype.c7c = get_spacing_0;
  BoxChildData.prototype.x4e = foldIn;
  BoxChildData.prototype.w4e = all;
  BoxChildData.prototype.y4e = then;
  OffsetPxModifier.prototype.x4e = foldIn;
  OffsetPxModifier.prototype.w4e = all;
  OffsetPxModifier.prototype.y4e = then;
  OffsetModifier.prototype.x4e = foldIn;
  OffsetModifier.prototype.w4e = all;
  OffsetModifier.prototype.y4e = then;
  PaddingModifier.prototype.x4e = foldIn;
  PaddingModifier.prototype.w4e = all;
  PaddingModifier.prototype.y4e = then;
  PaddingValuesModifier.prototype.x4e = foldIn;
  PaddingValuesModifier.prototype.w4e = all;
  PaddingValuesModifier.prototype.y4e = then;
  RowScopeInstance.prototype.t7e = weight$default;
  LayoutWeightImpl.prototype.x4e = foldIn;
  LayoutWeightImpl.prototype.w4e = all;
  LayoutWeightImpl.prototype.y4e = then;
  HorizontalAlignModifier.prototype.x4e = foldIn;
  HorizontalAlignModifier.prototype.w4e = all;
  HorizontalAlignModifier.prototype.y4e = then;
  VerticalAlignModifier.prototype.x4e = foldIn;
  VerticalAlignModifier.prototype.w4e = all;
  VerticalAlignModifier.prototype.y4e = then;
  FillModifier.prototype.x4e = foldIn;
  FillModifier.prototype.w4e = all;
  FillModifier.prototype.y4e = then;
  WrapContentModifier.prototype.x4e = foldIn;
  WrapContentModifier.prototype.w4e = all;
  WrapContentModifier.prototype.y4e = then;
  SizeModifier.prototype.x4e = foldIn;
  SizeModifier.prototype.w4e = all;
  SizeModifier.prototype.y4e = then;
  UnspecifiedConstraintsModifier.prototype.x4e = foldIn;
  UnspecifiedConstraintsModifier.prototype.w4e = all;
  UnspecifiedConstraintsModifier.prototype.y4e = then;
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
  _.$_$.u = fillMaxSize$default;
  _.$_$.v = fillMaxWidth$default;
  _.$_$.w = heightIn$default;
  _.$_$.x = offset$default;
  _.$_$.y = padding$default;
  _.$_$.z = padding$default_0;
  _.$_$.a1 = requiredSizeIn$default;
  _.$_$.b1 = widthIn$default;
  _.$_$.c1 = Arrangement_getInstance;
  _.$_$.d1 = BoxScopeInstance_getInstance;
  _.$_$.e1 = ColumnScopeInstance_getInstance;
  _.$_$.f1 = RowScopeInstance_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-foundation-layout.js.map
