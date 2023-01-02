(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui-util.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui-util.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-geometry'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-ui-geometry'.");
    }
    if (typeof this['androidx-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-geometry'. Its dependency 'androidx-ui-util' was not found. Please, check whether 'androidx-ui-util' is loaded prior to 'androidx-ui-geometry'.");
    }
    root['androidx-ui-geometry'] = factory(typeof this['androidx-ui-geometry'] === 'undefined' ? {} : this['androidx-ui-geometry'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui-util']);
  }
}(this, function (_, kotlin_kotlin, kotlin_androidx_compose_ui_ui_util) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.n2;
  var floatFromBits = kotlin_kotlin.$_$.c7;
  var Unit_getInstance = kotlin_kotlin.$_$.s2;
  var Long = kotlin_kotlin.$_$.v9;
  var objectMeta = kotlin_kotlin.$_$.u7;
  var THROW_CCE = kotlin_kotlin.$_$.ba;
  var classMeta = kotlin_kotlin.$_$.y6;
  var toBits = kotlin_kotlin.$_$.xa;
  var toLong = kotlin_kotlin.$_$.v7;
  var numberToInt = kotlin_kotlin.$_$.s7;
  var toString = kotlin_kotlin.$_$.x7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var isFinite = kotlin_kotlin.$_$.la;
  var lerp = kotlin_androidx_compose_ui_ui_util.$_$.a;
  var getNumberHashCode = kotlin_kotlin.$_$.e7;
  var equals = kotlin_kotlin.$_$.a7;
  //endregion
  //region block: pre-declaration
  //endregion
  function _CornerRadius___init__impl__ojmabe(packedValue) {
    return packedValue;
  }
  function _CornerRadius___get_packedValue__impl__okv4jq($this) {
    return $this;
  }
  function _CornerRadius___get_x__impl__1594cn($this) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp0_unpackFloat1 = _CornerRadius___get_packedValue__impl__okv4jq($this);
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp0_unpackFloat1.a7(32).b7();
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function _CornerRadius___get_y__impl__tyvleu($this) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp0_unpackFloat2 = _CornerRadius___get_packedValue__impl__okv4jq($this);
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp0_unpackFloat2.r7(new Long(-1, 0)).b7();
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    tmp.g2i_1 = CornerRadius$default(0.0, 0.0, 2, null);
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CornerRadius__toString_impl_m3k4zq($this) {
    var tmp;
    if (_CornerRadius___get_x__impl__1594cn($this) === _CornerRadius___get_y__impl__tyvleu($this)) {
      tmp = 'CornerRadius.circular(' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn($this), 1) + ')';
    } else {
      tmp = 'CornerRadius.elliptical(' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn($this), 1) + ', ' + toStringAsFixed(_CornerRadius___get_y__impl__tyvleu($this), 1) + ')';
    }
    return tmp;
  }
  function CornerRadius__hashCode_impl_r6e06j($this) {
    return $this.hashCode();
  }
  function CornerRadius__equals_impl_776hdl($this, other) {
    if (!(other instanceof CornerRadius))
      return false;
    var tmp0_other_with_cast = other instanceof CornerRadius ? other.h2i_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function CornerRadius(packedValue) {
    Companion_getInstance();
    this.h2i_1 = packedValue;
  }
  CornerRadius.prototype.toString = function () {
    return CornerRadius__toString_impl_m3k4zq(this.h2i_1);
  };
  CornerRadius.prototype.hashCode = function () {
    return CornerRadius__hashCode_impl_r6e06j(this.h2i_1);
  };
  CornerRadius.prototype.equals = function (other) {
    return CornerRadius__equals_impl_776hdl(this.h2i_1, other);
  };
  CornerRadius.$metadata$ = classMeta('CornerRadius');
  function CornerRadius_0(x, y) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(x));
    var v2 = toLong(toBits(y));
    tmp$ret$0 = v1.c7(32).a8(v2.r7(new Long(-1, 0)));
    return _CornerRadius___init__impl__ojmabe(tmp$ret$0);
  }
  function CornerRadius$default(x, y, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      y = x;
    return CornerRadius_0(x, y);
  }
  function toStringAsFixed(_this__u8e3s4, digits) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    tmp$ret$0 = Math.max(digits, 0);
    var clampedDigits = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.pow' call
    tmp$ret$1 = Math.pow(10.0, clampedDigits);
    var pow = tmp$ret$1;
    var shifted = _this__u8e3s4 * pow;
    var decimal = shifted - numberToInt(shifted);
    var tmp;
    if (decimal >= 0.5) {
      tmp = numberToInt(shifted) + 1 | 0;
    } else {
      tmp = numberToInt(shifted);
    }
    var roundedShifted = tmp;
    var rounded = roundedShifted / pow;
    var tmp_0;
    if (clampedDigits > 0) {
      tmp_0 = rounded.toString();
    } else {
      tmp_0 = numberToInt(rounded).toString();
    }
    return tmp_0;
  }
  function MutableRect(left, top, right, bottom) {
    this.i2i_1 = left;
    this.j2i_1 = top;
    this.k2i_1 = right;
    this.l2i_1 = bottom;
    this.m2i_1 = 8;
  }
  MutableRect.prototype.po = function () {
    return this.i2i_1 >= this.k2i_1 ? true : this.j2i_1 >= this.l2i_1;
  };
  MutableRect.prototype.n2i = function (left, top, right, bottom) {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = this.i2i_1;
    tmp$ret$0 = Math.max(left, tmp0_max);
    tmp.i2i_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.math.max' call
    var tmp1_max = this.j2i_1;
    tmp$ret$1 = Math.max(top, tmp1_max);
    tmp_0.j2i_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.math.min' call
    var tmp2_min = this.k2i_1;
    tmp$ret$2 = Math.min(right, tmp2_min);
    tmp_1.k2i_1 = tmp$ret$2;
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.math.min' call
    var tmp3_min = this.l2i_1;
    tmp$ret$3 = Math.min(bottom, tmp3_min);
    tmp_2.l2i_1 = tmp$ret$3;
  };
  MutableRect.prototype.toString = function () {
    return 'MutableRect(' + (toStringAsFixed(this.i2i_1, 1) + ', ') + (toStringAsFixed(this.j2i_1, 1) + ', ') + (toStringAsFixed(this.k2i_1, 1) + ', ') + (toStringAsFixed(this.l2i_1, 1) + ')');
  };
  MutableRect.$metadata$ = classMeta('MutableRect');
  function toRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.i2i_1, _this__u8e3s4.j2i_1, _this__u8e3s4.k2i_1, _this__u8e3s4.l2i_1);
  }
  function _Offset___init__impl__c168vi(packedValue) {
    return packedValue;
  }
  function _Offset___get_packedValue__impl__xh2k8q($this) {
    return $this;
  }
  function _Offset___get_x__impl__xvi35n($this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !_Offset___get_packedValue__impl__xh2k8q($this).equals(_Offset___get_packedValue__impl__xh2k8q(Companion_getInstance_0().q2i_1));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.geometry.Offset.<get-x>.<anonymous>' call
      tmp$ret$0 = 'Offset is unspecified';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp1_unpackFloat1 = _Offset___get_packedValue__impl__xh2k8q($this);
    var tmp$ret$1;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp1_unpackFloat1.a7(32).b7();
    tmp$ret$1 = floatFromBits(tmp1_fromBits);
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function _Offset___get_y__impl__8bzhra($this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !_Offset___get_packedValue__impl__xh2k8q($this).equals(_Offset___get_packedValue__impl__xh2k8q(Companion_getInstance_0().q2i_1));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.geometry.Offset.<get-y>.<anonymous>' call
      tmp$ret$0 = 'Offset is unspecified';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp1_unpackFloat2 = _Offset___get_packedValue__impl__xh2k8q($this);
    var tmp$ret$1;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp1_unpackFloat2.r7(new Long(-1, 0)).b7();
    tmp$ret$1 = floatFromBits(tmp1_fromBits);
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.o2i_1 = Offset_0(0.0, 0.0);
    var tmp = this;
    FloatCompanionObject_getInstance();
    FloatCompanionObject_getInstance();
    tmp.p2i_1 = Offset_0(Infinity, Infinity);
    var tmp_0 = this;
    FloatCompanionObject_getInstance();
    FloatCompanionObject_getInstance();
    tmp_0.q2i_1 = Offset_0(NaN, NaN);
  }
  Companion_0.prototype.r2i = function () {
    return this.o2i_1;
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Offset__getDistance_impl_pclvxn($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.sqrt' call
    var tmp0_sqrt = _Offset___get_x__impl__xvi35n($this) * _Offset___get_x__impl__xvi35n($this) + _Offset___get_y__impl__8bzhra($this) * _Offset___get_y__impl__8bzhra($this);
    tmp$ret$0 = Math.sqrt(tmp0_sqrt);
    return tmp$ret$0;
  }
  function Offset__getDistanceSquared_impl_97mhi6($this) {
    return _Offset___get_x__impl__xvi35n($this) * _Offset___get_x__impl__xvi35n($this) + _Offset___get_y__impl__8bzhra($this) * _Offset___get_y__impl__8bzhra($this);
  }
  function Offset__minus_impl_hoj2c0($this, other) {
    return Offset_0(_Offset___get_x__impl__xvi35n($this) - _Offset___get_x__impl__xvi35n(other), _Offset___get_y__impl__8bzhra($this) - _Offset___get_y__impl__8bzhra(other));
  }
  function Offset__plus_impl_c78cg0($this, other) {
    return Offset_0(_Offset___get_x__impl__xvi35n($this) + _Offset___get_x__impl__xvi35n(other), _Offset___get_y__impl__8bzhra($this) + _Offset___get_y__impl__8bzhra(other));
  }
  function Offset__times_impl_jz1mli($this, operand) {
    return Offset_0(_Offset___get_x__impl__xvi35n($this) * operand, _Offset___get_y__impl__8bzhra($this) * operand);
  }
  function Offset__div_impl_eaxtg1($this, operand) {
    return Offset_0(_Offset___get_x__impl__xvi35n($this) / operand, _Offset___get_y__impl__8bzhra($this) / operand);
  }
  function Offset__toString_impl_4ffbou($this) {
    var tmp;
    if (get_isSpecified($this)) {
      tmp = 'Offset(' + toStringAsFixed(_Offset___get_x__impl__xvi35n($this), 1) + ', ' + toStringAsFixed(_Offset___get_y__impl__8bzhra($this), 1) + ')';
    } else {
      tmp = 'Offset.Unspecified';
    }
    return tmp;
  }
  function Offset__hashCode_impl_hbql41($this) {
    return $this.hashCode();
  }
  function Offset__equals_impl_exf2yj($this, other) {
    if (!(other instanceof Offset))
      return false;
    var tmp0_other_with_cast = other instanceof Offset ? other.s2i_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Offset(packedValue) {
    Companion_getInstance_0();
    this.s2i_1 = packedValue;
  }
  Offset.prototype.toString = function () {
    return Offset__toString_impl_4ffbou(this.s2i_1);
  };
  Offset.prototype.hashCode = function () {
    return Offset__hashCode_impl_hbql41(this.s2i_1);
  };
  Offset.prototype.equals = function (other) {
    return Offset__equals_impl_exf2yj(this.s2i_1, other);
  };
  Offset.$metadata$ = classMeta('Offset');
  function Offset_0(x, y) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(x));
    var v2 = toLong(toBits(y));
    tmp$ret$0 = v1.c7(32).a8(v2.r7(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  }
  function get_isFinite(_this__u8e3s4) {
    return isFinite(_Offset___get_x__impl__xvi35n(_this__u8e3s4)) ? isFinite(_Offset___get_y__impl__8bzhra(_this__u8e3s4)) : false;
  }
  function get_isSpecified(_this__u8e3s4) {
    return !_Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4).equals(_Offset___get_packedValue__impl__xh2k8q(Companion_getInstance_0().q2i_1));
  }
  function lerp_0(start, stop, fraction) {
    return Offset_0(lerp(_Offset___get_x__impl__xvi35n(start), _Offset___get_x__impl__xvi35n(stop), fraction), lerp(_Offset___get_y__impl__8bzhra(start), _Offset___get_y__impl__8bzhra(stop), fraction));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.t2i_1 = new Rect(0.0, 0.0, 0.0, 0.0);
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Rect(left, top, right, bottom) {
    Companion_getInstance_1();
    this.u2i_1 = left;
    this.v2i_1 = top;
    this.w2i_1 = right;
    this.x2i_1 = bottom;
  }
  Rect.prototype.y2i = function () {
    return this.u2i_1;
  };
  Rect.prototype.z2i = function () {
    return this.v2i_1;
  };
  Rect.prototype.a2j = function () {
    return this.w2i_1 - this.u2i_1;
  };
  Rect.prototype.b2j = function () {
    return this.x2i_1 - this.v2i_1;
  };
  Rect.prototype.c2j = function (offset) {
    return new Rect(this.u2i_1 + _Offset___get_x__impl__xvi35n(offset), this.v2i_1 + _Offset___get_y__impl__8bzhra(offset), this.w2i_1 + _Offset___get_x__impl__xvi35n(offset), this.x2i_1 + _Offset___get_y__impl__8bzhra(offset));
  };
  Rect.prototype.d2j = function (translateX, translateY) {
    return new Rect(this.u2i_1 + translateX, this.v2i_1 + translateY, this.w2i_1 + translateX, this.x2i_1 + translateY);
  };
  Rect.prototype.toString = function () {
    return 'Rect.fromLTRB(' + (toStringAsFixed(this.u2i_1, 1) + ', ') + (toStringAsFixed(this.v2i_1, 1) + ', ') + (toStringAsFixed(this.w2i_1, 1) + ', ') + (toStringAsFixed(this.x2i_1, 1) + ')');
  };
  Rect.prototype.hashCode = function () {
    var result = getNumberHashCode(this.u2i_1);
    result = imul(result, 31) + getNumberHashCode(this.v2i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.w2i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x2i_1) | 0;
    return result;
  };
  Rect.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rect))
      return false;
    var tmp0_other_with_cast = other instanceof Rect ? other : THROW_CCE();
    if (!equals(this.u2i_1, tmp0_other_with_cast.u2i_1))
      return false;
    if (!equals(this.v2i_1, tmp0_other_with_cast.v2i_1))
      return false;
    if (!equals(this.w2i_1, tmp0_other_with_cast.w2i_1))
      return false;
    if (!equals(this.x2i_1, tmp0_other_with_cast.x2i_1))
      return false;
    return true;
  };
  Rect.$metadata$ = classMeta('Rect');
  function Rect_0(offset, size) {
    return new Rect(_Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset), _Offset___get_x__impl__xvi35n(offset) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(offset) + _Size___get_height__impl__a04p02(size));
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.e2j_1 = RoundRect_1(0.0, 0.0, 0.0, 0.0, Companion_getInstance().g2i_1);
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function RoundRect(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius) {
    Companion_getInstance_2();
    this.f2j_1 = left;
    this.g2j_1 = top;
    this.h2j_1 = right;
    this.i2j_1 = bottom;
    this.j2j_1 = topLeftCornerRadius;
    this.k2j_1 = topRightCornerRadius;
    this.l2j_1 = bottomRightCornerRadius;
    this.m2j_1 = bottomLeftCornerRadius;
    this.n2j_1 = null;
  }
  RoundRect.prototype.a2j = function () {
    return this.h2j_1 - this.f2j_1;
  };
  RoundRect.prototype.b2j = function () {
    return this.i2j_1 - this.g2j_1;
  };
  RoundRect.prototype.toString = function () {
    var tlRadius = this.j2j_1;
    var trRadius = this.k2j_1;
    var brRadius = this.l2j_1;
    var blRadius = this.m2j_1;
    var rect = toStringAsFixed(this.f2j_1, 1) + ', ' + (toStringAsFixed(this.g2j_1, 1) + ', ') + (toStringAsFixed(this.h2j_1, 1) + ', ') + toStringAsFixed(this.i2j_1, 1);
    if ((equals(tlRadius, trRadius) ? equals(trRadius, brRadius) : false) ? equals(brRadius, blRadius) : false) {
      if (_CornerRadius___get_x__impl__1594cn(tlRadius) === _CornerRadius___get_y__impl__tyvleu(tlRadius)) {
        return 'RoundRect(rect=' + rect + ', radius=' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn(tlRadius), 1) + ')';
      }
      return 'RoundRect(rect=' + rect + ', x=' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn(tlRadius), 1) + ', ' + ('y=' + toStringAsFixed(_CornerRadius___get_y__impl__tyvleu(tlRadius), 1) + ')');
    }
    return 'RoundRect(' + ('rect=' + rect + ', ') + ('topLeft=' + new CornerRadius(tlRadius) + ', ') + ('topRight=' + new CornerRadius(trRadius) + ', ') + ('bottomRight=' + new CornerRadius(brRadius) + ', ') + ('bottomLeft=' + new CornerRadius(blRadius) + ')');
  };
  RoundRect.prototype.hashCode = function () {
    var result = getNumberHashCode(this.f2j_1);
    result = imul(result, 31) + getNumberHashCode(this.g2j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.h2j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.i2j_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.j2j_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.k2j_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.l2j_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.m2j_1) | 0;
    return result;
  };
  RoundRect.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundRect))
      return false;
    var tmp0_other_with_cast = other instanceof RoundRect ? other : THROW_CCE();
    if (!equals(this.f2j_1, tmp0_other_with_cast.f2j_1))
      return false;
    if (!equals(this.g2j_1, tmp0_other_with_cast.g2j_1))
      return false;
    if (!equals(this.h2j_1, tmp0_other_with_cast.h2j_1))
      return false;
    if (!equals(this.i2j_1, tmp0_other_with_cast.i2j_1))
      return false;
    if (!equals(this.j2j_1, tmp0_other_with_cast.j2j_1))
      return false;
    if (!equals(this.k2j_1, tmp0_other_with_cast.k2j_1))
      return false;
    if (!equals(this.l2j_1, tmp0_other_with_cast.l2j_1))
      return false;
    if (!equals(this.m2j_1, tmp0_other_with_cast.m2j_1))
      return false;
    return true;
  };
  RoundRect.$metadata$ = classMeta('RoundRect');
  function RoundRect_0(rect, topLeft, topRight, bottomRight, bottomLeft) {
    return new RoundRect(rect.u2i_1, rect.v2i_1, rect.w2i_1, rect.x2i_1, topLeft, topRight, bottomRight, bottomLeft);
  }
  function RoundRect_1(left, top, right, bottom, cornerRadius) {
    return RoundRect_2(left, top, right, bottom, _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius));
  }
  function RoundRect_2(left, top, right, bottom, radiusX, radiusY) {
    var radius = CornerRadius_0(radiusX, radiusY);
    return new RoundRect(left, top, right, bottom, radius, radius, radius, radius);
  }
  function get_isSimple(_this__u8e3s4) {
    return (((((_CornerRadius___get_x__impl__1594cn(_this__u8e3s4.j2j_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.j2j_1) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.j2j_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k2j_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.j2j_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.k2j_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.j2j_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.l2j_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.j2j_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.l2j_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.j2j_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.m2j_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.j2j_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.m2j_1) : false;
  }
  function _Size___init__impl__aywn0g(packedValue) {
    return packedValue;
  }
  function _Size___get_packedValue__impl__7rlt1o($this) {
    return $this;
  }
  function _Size___get_width__impl__58y75t($this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !_Size___get_packedValue__impl__7rlt1o($this).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_3().p2j_1));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.geometry.Size.<get-width>.<anonymous>' call
      tmp$ret$0 = 'Size is unspecified';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp1_unpackFloat1 = _Size___get_packedValue__impl__7rlt1o($this);
    var tmp$ret$1;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp1_unpackFloat1.a7(32).b7();
    tmp$ret$1 = floatFromBits(tmp1_fromBits);
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function _Size___get_height__impl__a04p02($this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !_Size___get_packedValue__impl__7rlt1o($this).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_3().p2j_1));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.geometry.Size.<get-height>.<anonymous>' call
      tmp$ret$0 = 'Size is unspecified';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp1_unpackFloat2 = _Size___get_packedValue__impl__7rlt1o($this);
    var tmp$ret$1;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp1_unpackFloat2.r7(new Long(-1, 0)).b7();
    tmp$ret$1 = floatFromBits(tmp1_fromBits);
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function Size__component1_impl_9kmfl4($this) {
    return _Size___get_width__impl__58y75t($this);
  }
  function Size__component2_impl_93kt6x($this) {
    return _Size___get_height__impl__a04p02($this);
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.o2j_1 = Size_0(0.0, 0.0);
    var tmp = this;
    FloatCompanionObject_getInstance();
    FloatCompanionObject_getInstance();
    tmp.p2j_1 = Size_0(NaN, NaN);
  }
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function _Size___get_minDimension__impl__4iso0r($this) {
    var tmp$ret$2;
    // Inline function 'kotlin.math.min' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp0__get_absoluteValue__nukmtt = _Size___get_width__impl__58y75t($this);
    tmp$ret$0 = Math.abs(tmp0__get_absoluteValue__nukmtt);
    var tmp2_min = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp1__get_absoluteValue__rcem8i = _Size___get_height__impl__a04p02($this);
    tmp$ret$1 = Math.abs(tmp1__get_absoluteValue__rcem8i);
    var tmp3_min = tmp$ret$1;
    tmp$ret$2 = Math.min(tmp2_min, tmp3_min);
    return tmp$ret$2;
  }
  function Size__toString_impl_o87ni8($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    tmp$ret$0 = !_Size___get_packedValue__impl__7rlt1o($this).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_3().p2j_1));
    if (tmp$ret$0) {
      tmp = 'Size(' + toStringAsFixed(_Size___get_width__impl__58y75t($this), 1) + ', ' + toStringAsFixed(_Size___get_height__impl__a04p02($this), 1) + ')';
    } else {
      tmp = 'Size.Unspecified';
    }
    return tmp;
  }
  function Size__hashCode_impl_2h1qpd($this) {
    return $this.hashCode();
  }
  function Size__equals_impl_gzcc1f($this, other) {
    if (!(other instanceof Size))
      return false;
    var tmp0_other_with_cast = other instanceof Size ? other.q2j_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Size(packedValue) {
    Companion_getInstance_3();
    this.q2j_1 = packedValue;
  }
  Size.prototype.toString = function () {
    return Size__toString_impl_o87ni8(this.q2j_1);
  };
  Size.prototype.hashCode = function () {
    return Size__hashCode_impl_2h1qpd(this.q2j_1);
  };
  Size.prototype.equals = function (other) {
    return Size__equals_impl_gzcc1f(this.q2j_1, other);
  };
  Size.$metadata$ = classMeta('Size');
  function toRect_0(_this__u8e3s4) {
    return Rect_0(Companion_getInstance_0().o2i_1, _this__u8e3s4);
  }
  function Size_0(width, height) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(width));
    var v2 = toLong(toBits(height));
    tmp$ret$0 = v1.c7(32).a8(v2.r7(new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$0);
  }
  function get_center(_this__u8e3s4) {
    return Offset_0(_Size___get_width__impl__58y75t(_this__u8e3s4) / 2.0, _Size___get_height__impl__a04p02(_this__u8e3s4) / 2.0);
  }
  function get_isSpecified_0(_this__u8e3s4) {
    return !_Size___get_packedValue__impl__7rlt1o(_this__u8e3s4).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_3().p2j_1));
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CornerRadius_0;
  _.$_$.b = CornerRadius;
  _.$_$.c = MutableRect;
  _.$_$.d = Offset_0;
  _.$_$.e = Offset;
  _.$_$.f = Rect_0;
  _.$_$.g = Rect;
  _.$_$.h = RoundRect_0;
  _.$_$.i = RoundRect;
  _.$_$.j = Size_0;
  _.$_$.k = Size;
  _.$_$.l = get_center;
  _.$_$.m = get_isFinite;
  _.$_$.n = get_isSimple;
  _.$_$.o = lerp_0;
  _.$_$.p = toRect;
  _.$_$.q = toRect_0;
  _.$_$.r = CornerRadius$default;
  _.$_$.s = _CornerRadius___get_x__impl__1594cn;
  _.$_$.t = _CornerRadius___get_y__impl__tyvleu;
  _.$_$.u = Offset__div_impl_eaxtg1;
  _.$_$.v = Offset__getDistanceSquared_impl_97mhi6;
  _.$_$.w = Offset__getDistance_impl_pclvxn;
  _.$_$.x = Offset__hashCode_impl_hbql41;
  _.$_$.y = Offset__minus_impl_hoj2c0;
  _.$_$.z = Offset__plus_impl_c78cg0;
  _.$_$.a1 = Offset__times_impl_jz1mli;
  _.$_$.b1 = _Offset___get_x__impl__xvi35n;
  _.$_$.c1 = _Offset___get_y__impl__8bzhra;
  _.$_$.d1 = Size__hashCode_impl_2h1qpd;
  _.$_$.e1 = _Size___get_height__impl__a04p02;
  _.$_$.f1 = _Size___get_minDimension__impl__4iso0r;
  _.$_$.g1 = _Size___get_packedValue__impl__7rlt1o;
  _.$_$.h1 = _Size___get_width__impl__58y75t;
  _.$_$.i1 = Companion_getInstance;
  _.$_$.j1 = Companion_getInstance_0;
  _.$_$.k1 = Companion_getInstance_1;
  _.$_$.l1 = Companion_getInstance_3;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-ui-geometry.js.map
