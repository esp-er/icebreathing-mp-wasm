(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui-unit.js', './androidx-ui.js', './androidx-ui-graphics.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui-unit.js'), require('./androidx-ui.js'), require('./androidx-ui-graphics.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-icons-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-material-icons-core'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-icons-core'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-material-icons-core'.");
    }
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-icons-core'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'androidx-material-icons-core'.");
    }
    if (typeof this['androidx-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-icons-core'. Its dependency 'androidx-ui-graphics' was not found. Please, check whether 'androidx-ui-graphics' is loaded prior to 'androidx-material-icons-core'.");
    }
    root['androidx-material-icons-core'] = factory(typeof this['androidx-material-icons-core'] === 'undefined' ? {} : this['androidx-material-icons-core'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui-unit'], this['androidx-ui'], this['androidx-ui-graphics']);
  }
}(this, function (_, kotlin_kotlin, kotlin_androidx_compose_ui_ui_unit, kotlin_androidx_compose_ui_ui, kotlin_androidx_compose_ui_ui_graphics) {
  'use strict';
  //region block: imports
  var objectMeta = kotlin_kotlin.$_$.u7;
  var _Dp___init__impl__ms3zkb = kotlin_androidx_compose_ui_ui_unit.$_$.z1;
  var Unit_getInstance = kotlin_kotlin.$_$.s2;
  var Builder_init_$Create$ = kotlin_androidx_compose_ui_ui.$_$.n3;
  var Companion_getInstance = kotlin_androidx_compose_ui_ui_graphics.$_$.g3;
  var SolidColor = kotlin_androidx_compose_ui_ui_graphics.$_$.x;
  var Companion_getInstance_0 = kotlin_androidx_compose_ui_ui_graphics.$_$.o3;
  var Companion_getInstance_1 = kotlin_androidx_compose_ui_ui_graphics.$_$.p3;
  var get_DefaultPathName = kotlin_androidx_compose_ui_ui.$_$.k;
  var PathBuilder = kotlin_androidx_compose_ui_ui_graphics.$_$.e;
  var ensureNotNull = kotlin_kotlin.$_$.ja;
  var get_DefaultFillType = kotlin_androidx_compose_ui_ui.$_$.j;
  //endregion
  //region block: pre-declaration
  //endregion
  function Filled() {
    Filled_instance = this;
    this.d92_1 = 0;
  }
  Filled.$metadata$ = objectMeta('Filled');
  var Filled_instance;
  function Filled_getInstance() {
    if (Filled_instance == null)
      new Filled();
    return Filled_instance;
  }
  function Outlined() {
    Outlined_instance = this;
    this.e92_1 = 0;
  }
  Outlined.$metadata$ = objectMeta('Outlined');
  var Outlined_instance;
  function Outlined_getInstance() {
    if (Outlined_instance == null)
      new Outlined();
    return Outlined_instance;
  }
  function materialIcon(name, block) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = 24.0;
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp1__get_dp__sde38c = 24.0;
    tmp$ret$1 = _Dp___init__impl__ms3zkb(tmp1__get_dp__sde38c);
    var tmp_0 = tmp$ret$1;
    return block(Builder_init_$Create$(name, tmp, tmp_0, 24.0, 24.0, null, null, false, 224, null)).h1h();
  }
  function materialPath(_this__u8e3s4, fillAlpha, strokeAlpha, pathFillType, pathBuilder) {
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp0_path = new SolidColor(Companion_getInstance().e3a_1);
    var tmp1_path = Companion_getInstance_0().y3g_1;
    var tmp2_path = Companion_getInstance_1().g3h_1;
    var tmp3_path = get_DefaultPathName();
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    pathBuilder(tmp0_with);
    tmp$ret$0 = tmp0_with.q3m();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp = tmp$ret$2;
    tmp$ret$3 = _this__u8e3s4.f4u(tmp, pathFillType, tmp3_path, tmp0_path, fillAlpha, null, strokeAlpha, 1.0, tmp1_path, tmp2_path, 1.0, 0.0, 0.0, 0.0, 14336, null);
    return tmp$ret$3;
  }
  function get_MaterialIconDimension() {
    return MaterialIconDimension;
  }
  var MaterialIconDimension;
  var _accountBox;
  var _accountCircle;
  var _add;
  var _addCircle;
  var _arrowBack;
  var _arrowDropDown;
  var _arrowForward;
  var _build;
  var _call;
  var _check;
  var _checkCircle;
  var _clear;
  var _close;
  var _create;
  var _dateRange;
  var _delete;
  var _done;
  var _edit;
  var _email;
  var _exitToApp;
  var _face;
  var _favorite;
  var _favoriteBorder;
  var _home;
  var _info;
  var _keyboardArrowDown;
  var _keyboardArrowLeft;
  var _keyboardArrowRight;
  var _keyboardArrowUp;
  var _list;
  var _locationOn;
  var _lock;
  var _mailOutline;
  var _menu;
  var _moreVert;
  var _notifications;
  var _person;
  var _phone;
  var _place;
  var _playArrow;
  var _refresh;
  var _search;
  var _send;
  var _settings;
  var _share;
  var _shoppingCart;
  var _star;
  var _thumbUp;
  var _warning;
  var _accountBox_0;
  var _accountCircle_0;
  var _add_0;
  var _addCircle_0;
  var _arrowBack_0;
  function get_ArrowBack(_this__u8e3s4) {
    if (!(_arrowBack_0 == null)) {
      return ensureNotNull(_arrowBack_0);
    }
    var tmp$ret$8;
    // Inline function 'androidx.compose.material.icons.materialIcon' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.material.icons.outlined.<get-ArrowBack>.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = get_MaterialIconDimension();
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp1__get_dp__sde38c = get_MaterialIconDimension();
    tmp$ret$1 = _Dp___init__impl__ms3zkb(tmp1__get_dp__sde38c);
    var tmp_0 = tmp$ret$1;
    var tmp_1 = get_MaterialIconDimension();
    var tmp_2 = get_MaterialIconDimension();
    var tmp0__anonymous__q1qw7t = Builder_init_$Create$('Outlined.ArrowBack', tmp, tmp_0, tmp_1, tmp_2, null, null, false, 224, null);
    var tmp$ret$6;
    // Inline function 'androidx.compose.material.icons.materialPath' call
    var tmp0_materialPath = get_DefaultFillType();
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp0_path = new SolidColor(Companion_getInstance().e3a_1);
    var tmp1_path = Companion_getInstance_0().y3g_1;
    var tmp2_path = Companion_getInstance_1().g3h_1;
    var tmp3_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    var tmp$ret$3;
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'androidx.compose.material.icons.outlined.<get-ArrowBack>.<anonymous>.<anonymous>' call
    tmp0_with.l2u(20.0, 11.0);
    tmp0_with.t3m(7.83);
    tmp0_with.s3m(5.59, -5.59);
    tmp0_with.n2u(12.0, 4.0);
    tmp0_with.s3m(-8.0, 8.0);
    tmp0_with.s3m(8.0, 8.0);
    tmp0_with.s3m(1.41, -1.41);
    tmp0_with.n2u(7.83, 13.0);
    tmp0_with.t3m(20.0);
    tmp0_with.w3m(-2.0);
    tmp0_with.r3m();
    tmp$ret$2 = tmp0_with.q3m();
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp_3 = tmp$ret$4;
    tmp$ret$5 = tmp0__anonymous__q1qw7t.f4u(tmp_3, tmp0_materialPath, tmp3_path, tmp0_path, 1.0, null, 1.0, 1.0, tmp1_path, tmp2_path, 1.0, 0.0, 0.0, 0.0, 14336, null);
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7.h1h();
    _arrowBack_0 = tmp$ret$8;
    return ensureNotNull(_arrowBack_0);
  }
  var _arrowDropDown_0;
  var _arrowForward_0;
  var _build_0;
  var _call_0;
  var _check_0;
  var _checkCircle_0;
  function get_CheckCircle(_this__u8e3s4) {
    if (!(_checkCircle_0 == null)) {
      return ensureNotNull(_checkCircle_0);
    }
    var tmp$ret$8;
    // Inline function 'androidx.compose.material.icons.materialIcon' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.material.icons.outlined.<get-CheckCircle>.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = get_MaterialIconDimension();
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp1__get_dp__sde38c = get_MaterialIconDimension();
    tmp$ret$1 = _Dp___init__impl__ms3zkb(tmp1__get_dp__sde38c);
    var tmp_0 = tmp$ret$1;
    var tmp_1 = get_MaterialIconDimension();
    var tmp_2 = get_MaterialIconDimension();
    var tmp0__anonymous__q1qw7t = Builder_init_$Create$('Outlined.CheckCircle', tmp, tmp_0, tmp_1, tmp_2, null, null, false, 224, null);
    var tmp$ret$6;
    // Inline function 'androidx.compose.material.icons.materialPath' call
    var tmp0_materialPath = get_DefaultFillType();
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp0_path = new SolidColor(Companion_getInstance().e3a_1);
    var tmp1_path = Companion_getInstance_0().y3g_1;
    var tmp2_path = Companion_getInstance_1().g3h_1;
    var tmp3_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    var tmp$ret$3;
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'androidx.compose.material.icons.outlined.<get-CheckCircle>.<anonymous>.<anonymous>' call
    tmp0_with.l2u(12.0, 2.0);
    tmp0_with.x3m(6.48, 2.0, 2.0, 6.48, 2.0, 12.0);
    tmp0_with.a3n(4.48, 10.0, 10.0, 10.0);
    tmp0_with.a3n(10.0, -4.48, 10.0, -10.0);
    tmp0_with.z3m(17.52, 2.0, 12.0, 2.0);
    tmp0_with.r3m();
    tmp0_with.l2u(12.0, 20.0);
    tmp0_with.y3m(-4.41, 0.0, -8.0, -3.59, -8.0, -8.0);
    tmp0_with.a3n(3.59, -8.0, 8.0, -8.0);
    tmp0_with.a3n(8.0, 3.59, 8.0, 8.0);
    tmp0_with.a3n(-3.59, 8.0, -8.0, 8.0);
    tmp0_with.r3m();
    tmp0_with.l2u(16.59, 7.58);
    tmp0_with.n2u(10.0, 14.17);
    tmp0_with.s3m(-2.59, -2.58);
    tmp0_with.n2u(6.0, 13.0);
    tmp0_with.s3m(4.0, 4.0);
    tmp0_with.s3m(8.0, -8.0);
    tmp0_with.r3m();
    tmp$ret$2 = tmp0_with.q3m();
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp_3 = tmp$ret$4;
    tmp$ret$5 = tmp0__anonymous__q1qw7t.f4u(tmp_3, tmp0_materialPath, tmp3_path, tmp0_path, 1.0, null, 1.0, 1.0, tmp1_path, tmp2_path, 1.0, 0.0, 0.0, 0.0, 14336, null);
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7.h1h();
    _checkCircle_0 = tmp$ret$8;
    return ensureNotNull(_checkCircle_0);
  }
  var _clear_0;
  var _close_0;
  var _create_0;
  var _dateRange_0;
  var _delete_0;
  var _done_0;
  var _edit_0;
  var _email_0;
  var _exitToApp_0;
  var _face_0;
  var _favorite_0;
  var _favoriteBorder_0;
  var _home_0;
  var _info_0;
  var _keyboardArrowDown_0;
  var _keyboardArrowLeft_0;
  var _keyboardArrowRight_0;
  var _keyboardArrowUp_0;
  var _list_0;
  var _locationOn_0;
  var _lock_0;
  var _mailOutline_0;
  var _menu_0;
  var _moreVert_0;
  var _notifications_0;
  var _person_0;
  var _phone_0;
  var _place_0;
  var _playArrow_0;
  function get_PlayArrow(_this__u8e3s4) {
    if (!(_playArrow_0 == null)) {
      return ensureNotNull(_playArrow_0);
    }
    var tmp$ret$8;
    // Inline function 'androidx.compose.material.icons.materialIcon' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.material.icons.outlined.<get-PlayArrow>.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = get_MaterialIconDimension();
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp1__get_dp__sde38c = get_MaterialIconDimension();
    tmp$ret$1 = _Dp___init__impl__ms3zkb(tmp1__get_dp__sde38c);
    var tmp_0 = tmp$ret$1;
    var tmp_1 = get_MaterialIconDimension();
    var tmp_2 = get_MaterialIconDimension();
    var tmp0__anonymous__q1qw7t = Builder_init_$Create$('Outlined.PlayArrow', tmp, tmp_0, tmp_1, tmp_2, null, null, false, 224, null);
    var tmp$ret$6;
    // Inline function 'androidx.compose.material.icons.materialPath' call
    var tmp0_materialPath = get_DefaultFillType();
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp0_path = new SolidColor(Companion_getInstance().e3a_1);
    var tmp1_path = Companion_getInstance_0().y3g_1;
    var tmp2_path = Companion_getInstance_1().g3h_1;
    var tmp3_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    var tmp$ret$3;
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'androidx.compose.material.icons.outlined.<get-PlayArrow>.<anonymous>.<anonymous>' call
    tmp0_with.l2u(10.0, 8.64);
    tmp0_with.n2u(15.27, 12.0);
    tmp0_with.n2u(10.0, 15.36);
    tmp0_with.v3m(8.64);
    tmp0_with.l2u(8.0, 5.0);
    tmp0_with.w3m(14.0);
    tmp0_with.s3m(11.0, -7.0);
    tmp0_with.n2u(8.0, 5.0);
    tmp0_with.r3m();
    tmp$ret$2 = tmp0_with.q3m();
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp_3 = tmp$ret$4;
    tmp$ret$5 = tmp0__anonymous__q1qw7t.f4u(tmp_3, tmp0_materialPath, tmp3_path, tmp0_path, 1.0, null, 1.0, 1.0, tmp1_path, tmp2_path, 1.0, 0.0, 0.0, 0.0, 14336, null);
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7.h1h();
    _playArrow_0 = tmp$ret$8;
    return ensureNotNull(_playArrow_0);
  }
  var _refresh_0;
  var _search_0;
  var _send_0;
  var _settings_0;
  var _share_0;
  var _shoppingCart_0;
  var _star_0;
  var _thumbUp_0;
  var _warning_0;
  var _accountBox_1;
  var _accountCircle_1;
  var _add_1;
  var _addCircle_1;
  var _arrowBack_1;
  var _arrowDropDown_1;
  var _arrowForward_1;
  var _build_1;
  var _call_1;
  var _check_1;
  var _checkCircle_1;
  var _clear_1;
  var _close_1;
  var _create_1;
  var _dateRange_1;
  var _delete_1;
  var _done_1;
  var _edit_1;
  var _email_1;
  var _exitToApp_1;
  var _face_1;
  var _favorite_1;
  var _favoriteBorder_1;
  var _home_1;
  var _info_1;
  var _keyboardArrowDown_1;
  var _keyboardArrowLeft_1;
  var _keyboardArrowRight_1;
  var _keyboardArrowUp_1;
  var _list_1;
  var _locationOn_1;
  var _lock_1;
  var _mailOutline_1;
  var _menu_1;
  var _moreVert_1;
  var _notifications_1;
  var _person_1;
  var _phone_1;
  var _place_1;
  var _playArrow_1;
  var _refresh_1;
  var _search_1;
  var _send_1;
  var _settings_1;
  var _share_1;
  var _shoppingCart_1;
  var _star_1;
  var _thumbUp_1;
  var _warning_1;
  var _accountBox_2;
  var _accountCircle_2;
  var _add_2;
  var _addCircle_2;
  var _arrowBack_2;
  var _arrowDropDown_2;
  var _arrowForward_2;
  var _build_2;
  var _call_2;
  var _check_2;
  var _checkCircle_2;
  var _clear_2;
  var _close_2;
  var _create_2;
  var _dateRange_2;
  var _delete_2;
  var _done_2;
  var _edit_2;
  var _email_2;
  var _exitToApp_2;
  var _face_2;
  var _favorite_2;
  var _favoriteBorder_2;
  var _home_2;
  var _info_2;
  var _keyboardArrowDown_2;
  var _keyboardArrowLeft_2;
  var _keyboardArrowRight_2;
  var _keyboardArrowUp_2;
  var _list_2;
  var _locationOn_2;
  var _lock_2;
  var _mailOutline_2;
  var _menu_2;
  var _moreVert_2;
  var _notifications_2;
  var _person_2;
  var _phone_2;
  var _place_2;
  var _playArrow_2;
  var _refresh_2;
  var _search_2;
  var _send_2;
  var _settings_2;
  var _share_2;
  var _shoppingCart_2;
  var _star_2;
  var _thumbUp_2;
  var _warning_2;
  var _accountBox_3;
  var _accountCircle_3;
  var _add_3;
  var _addCircle_3;
  var _arrowBack_3;
  var _arrowDropDown_3;
  var _arrowForward_3;
  var _build_3;
  var _call_3;
  var _check_3;
  var _checkCircle_3;
  var _clear_3;
  var _close_3;
  var _create_3;
  var _dateRange_3;
  var _delete_3;
  var _done_3;
  var _edit_3;
  var _email_3;
  var _exitToApp_3;
  var _face_3;
  var _favorite_3;
  var _favoriteBorder_3;
  var _home_3;
  var _info_3;
  var _keyboardArrowDown_3;
  var _keyboardArrowLeft_3;
  var _keyboardArrowRight_3;
  var _keyboardArrowUp_3;
  var _list_3;
  var _locationOn_3;
  var _lock_3;
  var _mailOutline_3;
  var _menu_3;
  var _moreVert_3;
  var _notifications_3;
  var _person_3;
  var _phone_3;
  var _place_3;
  var _playArrow_3;
  var _refresh_3;
  var _search_3;
  var _send_3;
  var _settings_3;
  var _share_3;
  var _shoppingCart_3;
  var _star_3;
  var _thumbUp_3;
  var _warning_3;
  //region block: init
  MaterialIconDimension = 24.0;
  _accountBox = null;
  _accountCircle = null;
  _add = null;
  _addCircle = null;
  _arrowBack = null;
  _arrowDropDown = null;
  _arrowForward = null;
  _build = null;
  _call = null;
  _check = null;
  _checkCircle = null;
  _clear = null;
  _close = null;
  _create = null;
  _dateRange = null;
  _delete = null;
  _done = null;
  _edit = null;
  _email = null;
  _exitToApp = null;
  _face = null;
  _favorite = null;
  _favoriteBorder = null;
  _home = null;
  _info = null;
  _keyboardArrowDown = null;
  _keyboardArrowLeft = null;
  _keyboardArrowRight = null;
  _keyboardArrowUp = null;
  _list = null;
  _locationOn = null;
  _lock = null;
  _mailOutline = null;
  _menu = null;
  _moreVert = null;
  _notifications = null;
  _person = null;
  _phone = null;
  _place = null;
  _playArrow = null;
  _refresh = null;
  _search = null;
  _send = null;
  _settings = null;
  _share = null;
  _shoppingCart = null;
  _star = null;
  _thumbUp = null;
  _warning = null;
  _accountBox_0 = null;
  _accountCircle_0 = null;
  _add_0 = null;
  _addCircle_0 = null;
  _arrowBack_0 = null;
  _arrowDropDown_0 = null;
  _arrowForward_0 = null;
  _build_0 = null;
  _call_0 = null;
  _check_0 = null;
  _checkCircle_0 = null;
  _clear_0 = null;
  _close_0 = null;
  _create_0 = null;
  _dateRange_0 = null;
  _delete_0 = null;
  _done_0 = null;
  _edit_0 = null;
  _email_0 = null;
  _exitToApp_0 = null;
  _face_0 = null;
  _favorite_0 = null;
  _favoriteBorder_0 = null;
  _home_0 = null;
  _info_0 = null;
  _keyboardArrowDown_0 = null;
  _keyboardArrowLeft_0 = null;
  _keyboardArrowRight_0 = null;
  _keyboardArrowUp_0 = null;
  _list_0 = null;
  _locationOn_0 = null;
  _lock_0 = null;
  _mailOutline_0 = null;
  _menu_0 = null;
  _moreVert_0 = null;
  _notifications_0 = null;
  _person_0 = null;
  _phone_0 = null;
  _place_0 = null;
  _playArrow_0 = null;
  _refresh_0 = null;
  _search_0 = null;
  _send_0 = null;
  _settings_0 = null;
  _share_0 = null;
  _shoppingCart_0 = null;
  _star_0 = null;
  _thumbUp_0 = null;
  _warning_0 = null;
  _accountBox_1 = null;
  _accountCircle_1 = null;
  _add_1 = null;
  _addCircle_1 = null;
  _arrowBack_1 = null;
  _arrowDropDown_1 = null;
  _arrowForward_1 = null;
  _build_1 = null;
  _call_1 = null;
  _check_1 = null;
  _checkCircle_1 = null;
  _clear_1 = null;
  _close_1 = null;
  _create_1 = null;
  _dateRange_1 = null;
  _delete_1 = null;
  _done_1 = null;
  _edit_1 = null;
  _email_1 = null;
  _exitToApp_1 = null;
  _face_1 = null;
  _favorite_1 = null;
  _favoriteBorder_1 = null;
  _home_1 = null;
  _info_1 = null;
  _keyboardArrowDown_1 = null;
  _keyboardArrowLeft_1 = null;
  _keyboardArrowRight_1 = null;
  _keyboardArrowUp_1 = null;
  _list_1 = null;
  _locationOn_1 = null;
  _lock_1 = null;
  _mailOutline_1 = null;
  _menu_1 = null;
  _moreVert_1 = null;
  _notifications_1 = null;
  _person_1 = null;
  _phone_1 = null;
  _place_1 = null;
  _playArrow_1 = null;
  _refresh_1 = null;
  _search_1 = null;
  _send_1 = null;
  _settings_1 = null;
  _share_1 = null;
  _shoppingCart_1 = null;
  _star_1 = null;
  _thumbUp_1 = null;
  _warning_1 = null;
  _accountBox_2 = null;
  _accountCircle_2 = null;
  _add_2 = null;
  _addCircle_2 = null;
  _arrowBack_2 = null;
  _arrowDropDown_2 = null;
  _arrowForward_2 = null;
  _build_2 = null;
  _call_2 = null;
  _check_2 = null;
  _checkCircle_2 = null;
  _clear_2 = null;
  _close_2 = null;
  _create_2 = null;
  _dateRange_2 = null;
  _delete_2 = null;
  _done_2 = null;
  _edit_2 = null;
  _email_2 = null;
  _exitToApp_2 = null;
  _face_2 = null;
  _favorite_2 = null;
  _favoriteBorder_2 = null;
  _home_2 = null;
  _info_2 = null;
  _keyboardArrowDown_2 = null;
  _keyboardArrowLeft_2 = null;
  _keyboardArrowRight_2 = null;
  _keyboardArrowUp_2 = null;
  _list_2 = null;
  _locationOn_2 = null;
  _lock_2 = null;
  _mailOutline_2 = null;
  _menu_2 = null;
  _moreVert_2 = null;
  _notifications_2 = null;
  _person_2 = null;
  _phone_2 = null;
  _place_2 = null;
  _playArrow_2 = null;
  _refresh_2 = null;
  _search_2 = null;
  _send_2 = null;
  _settings_2 = null;
  _share_2 = null;
  _shoppingCart_2 = null;
  _star_2 = null;
  _thumbUp_2 = null;
  _warning_2 = null;
  _accountBox_3 = null;
  _accountCircle_3 = null;
  _add_3 = null;
  _addCircle_3 = null;
  _arrowBack_3 = null;
  _arrowDropDown_3 = null;
  _arrowForward_3 = null;
  _build_3 = null;
  _call_3 = null;
  _check_3 = null;
  _checkCircle_3 = null;
  _clear_3 = null;
  _close_3 = null;
  _create_3 = null;
  _dateRange_3 = null;
  _delete_3 = null;
  _done_3 = null;
  _edit_3 = null;
  _email_3 = null;
  _exitToApp_3 = null;
  _face_3 = null;
  _favorite_3 = null;
  _favoriteBorder_3 = null;
  _home_3 = null;
  _info_3 = null;
  _keyboardArrowDown_3 = null;
  _keyboardArrowLeft_3 = null;
  _keyboardArrowRight_3 = null;
  _keyboardArrowUp_3 = null;
  _list_3 = null;
  _locationOn_3 = null;
  _lock_3 = null;
  _mailOutline_3 = null;
  _menu_3 = null;
  _moreVert_3 = null;
  _notifications_3 = null;
  _person_3 = null;
  _phone_3 = null;
  _place_3 = null;
  _playArrow_3 = null;
  _refresh_3 = null;
  _search_3 = null;
  _send_3 = null;
  _settings_3 = null;
  _share_3 = null;
  _shoppingCart_3 = null;
  _star_3 = null;
  _thumbUp_3 = null;
  _warning_3 = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_ArrowBack;
  _.$_$.b = get_CheckCircle;
  _.$_$.c = get_PlayArrow;
  _.$_$.d = get_MaterialIconDimension;
  _.$_$.e = Filled_getInstance;
  _.$_$.f = Outlined_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-material-icons-core.js.map
