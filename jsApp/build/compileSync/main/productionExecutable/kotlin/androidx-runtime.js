(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-runtime'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-runtime'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-runtime'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'androidx-runtime'.");
    }
    root['androidx-runtime'] = factory(typeof this['androidx-runtime'] === 'undefined' ? {} : this['androidx-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var interfaceMeta = kotlin_kotlin.$_$.k7;
  var Unit_getInstance = kotlin_kotlin.$_$.s2;
  var toString = kotlin_kotlin.$_$.x7;
  var classMeta = kotlin_kotlin.$_$.y6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var THROW_CCE = kotlin_kotlin.$_$.ba;
  var isObject = kotlin_kotlin.$_$.o7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var rotateLeft = kotlin_kotlin.$_$.ta;
  var rotateRight = kotlin_kotlin.$_$.ua;
  var Companion_getInstance = kotlin_kotlin.$_$.q2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.b2;
  var createFailure = kotlin_kotlin.$_$.ia;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.wa;
  var intercepted = kotlin_kotlin.$_$.x5;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var get = kotlin_kotlin.$_$.f6;
  var fold = kotlin_kotlin.$_$.e6;
  var minusKey = kotlin_kotlin.$_$.g6;
  var plus = kotlin_kotlin.$_$.j6;
  var isInterface = kotlin_kotlin.$_$.n7;
  var equals = kotlin_kotlin.$_$.a7;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v;
  var fill$default = kotlin_kotlin.$_$.g;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var hashCode = kotlin_kotlin.$_$.i7;
  var Enum = kotlin_kotlin.$_$.q9;
  var emptyList = kotlin_kotlin.$_$.g4;
  var toMutableList = kotlin_kotlin.$_$.r5;
  var MutableCollection = kotlin_kotlin.$_$.j3;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.s;
  var sortWith = kotlin_kotlin.$_$.k5;
  var Comparator = kotlin_kotlin.$_$.p9;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var to = kotlin_kotlin.$_$.bb;
  var compareValues = kotlin_kotlin.$_$.t5;
  var Long = kotlin_kotlin.$_$.v9;
  var objectMeta = kotlin_kotlin.$_$.u7;
  var IllegalStateException = kotlin_kotlin.$_$.u9;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.k1;
  var captureStack = kotlin_kotlin.$_$.t6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var lazy = kotlin_kotlin.$_$.qa;
  var firstOrNull = kotlin_kotlin.$_$.j4;
  var compareTo = kotlin_kotlin.$_$.z6;
  var KMutableProperty1 = kotlin_kotlin.$_$.s8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.g7;
  var KProperty1 = kotlin_kotlin.$_$.u8;
  var isArray = kotlin_kotlin.$_$.l7;
  var Set = kotlin_kotlin.$_$.r3;
  var ensureNotNull = kotlin_kotlin.$_$.ja;
  var plus_0 = kotlin_kotlin.$_$.f5;
  var Exception = kotlin_kotlin.$_$.s9;
  var copyToArray = kotlin_kotlin.$_$.e4;
  var fillArrayVal = kotlin_kotlin.$_$.b7;
  var toString_0 = kotlin_kotlin.$_$.ab;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.o2;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var cancel$default_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var Job$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.l2;
  var Key = kotlin_kotlin.$_$.i6;
  var Element = kotlin_kotlin.$_$.h6;
  var getStringHashCode = kotlin_kotlin.$_$.h7;
  var Collection = kotlin_kotlin.$_$.c3;
  var addAll = kotlin_kotlin.$_$.s3;
  var CoroutineImpl = kotlin_kotlin.$_$.k6;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v5;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var toList = kotlin_kotlin.$_$.p5;
  var flatten = kotlin_kotlin.$_$.o4;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.z;
  var CancellationException = kotlin_kotlin.$_$.u5;
  var addSuppressed = kotlin_kotlin.$_$.ga;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var returnIfSuspended = kotlin_kotlin.$_$.f;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var removeFirst = kotlin_kotlin.$_$.h5;
  var SuspendFunction1 = kotlin_kotlin.$_$.m6;
  var SuspendFunction2 = kotlin_kotlin.$_$.n6;
  var arrayCopy = kotlin_kotlin.$_$.t3;
  var fill = kotlin_kotlin.$_$.i4;
  var Iterator = kotlin_kotlin.$_$.e3;
  var Iterable = kotlin_kotlin.$_$.d3;
  var first = kotlin_kotlin.$_$.l4;
  var last = kotlin_kotlin.$_$.y4;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var copyOf = kotlin_kotlin.$_$.d4;
  var fill$default_0 = kotlin_kotlin.$_$.h;
  var copyOf_0 = kotlin_kotlin.$_$.c4;
  var MutableListIterator = kotlin_kotlin.$_$.l3;
  var MutableList = kotlin_kotlin.$_$.m3;
  var numberRangeToNumber = kotlin_kotlin.$_$.q7;
  var checkIndexOverflow = kotlin_kotlin.$_$.v3;
  var sortWith_0 = kotlin_kotlin.$_$.l5;
  var RandomAccess = kotlin_kotlin.$_$.q3;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var List = kotlin_kotlin.$_$.g3;
  var MutableMap = kotlin_kotlin.$_$.o3;
  var Map = kotlin_kotlin.$_$.i3;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var ListIterator = kotlin_kotlin.$_$.f3;
  var AbstractList = kotlin_kotlin.$_$.u2;
  var coerceAtMost = kotlin_kotlin.$_$.i8;
  var arrayIterator = kotlin_kotlin.$_$.s6;
  var AbstractMutableList = kotlin_kotlin.$_$.x2;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.l1;
  var indexOf = kotlin_kotlin.$_$.r4;
  var lastIndexOf = kotlin_kotlin.$_$.v4;
  var AbstractMap = kotlin_kotlin.$_$.v2;
  var AbstractMutableMap = kotlin_kotlin.$_$.y2;
  var MutableIterator = kotlin_kotlin.$_$.k3;
  var MutableEntry = kotlin_kotlin.$_$.n3;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var AbstractMutableSet = kotlin_kotlin.$_$.z2;
  var MutableSet = kotlin_kotlin.$_$.p3;
  var AbstractMutableCollection = kotlin_kotlin.$_$.w2;
  var Entry = kotlin_kotlin.$_$.h3;
  var AbstractSet = kotlin_kotlin.$_$.a3;
  var AbstractCollection = kotlin_kotlin.$_$.t2;
  var until = kotlin_kotlin.$_$.q8;
  var step = kotlin_kotlin.$_$.p8;
  var countOneBits = kotlin_kotlin.$_$.ha;
  var takeLowestOneBit = kotlin_kotlin.$_$.va;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.f1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d1;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var Char = kotlin_kotlin.$_$.m9;
  var isCharSequence = kotlin_kotlin.$_$.m7;
  var contains = kotlin_kotlin.$_$.x3;
  var primitiveArrayConcat = kotlin_kotlin.$_$.c;
  var singleOrNull = kotlin_kotlin.$_$.j5;
  var SequenceScope = kotlin_kotlin.$_$.v8;
  var intArrayIterator = kotlin_kotlin.$_$.j7;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.p2;
  var toIntArray = kotlin_kotlin.$_$.o5;
  var sequence = kotlin_kotlin.$_$.x8;
  var anyToString = kotlin_kotlin.$_$.r6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w3;
  var toSet = kotlin_kotlin.$_$.s5;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.d;
  var toDuration = kotlin_kotlin.$_$.k9;
  var Duration__toLongNanoseconds_impl_xyxob7 = kotlin_kotlin.$_$.y1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.a1;
  //endregion
  //region block: pre-declaration
  function onBeginChanges() {
  }
  function onEndChanges() {
  }
  function get_key() {
    return Key_getInstance_0();
  }
  CompositionContextImpl.prototype = Object.create(CompositionContext.prototype);
  CompositionContextImpl.prototype.constructor = CompositionContextImpl;
  function changed(value) {
    return this.f1b(value);
  }
  function changed_0(value) {
    return this.q1n(value);
  }
  function changed_1(value) {
    return this.o1n(value);
  }
  function changed_2(value) {
    return this.p1n(value);
  }
  InvalidationResult.prototype = Object.create(Enum.prototype);
  InvalidationResult.prototype.constructor = InvalidationResult;
  ComposeRuntimeError.prototype = Object.create(IllegalStateException.prototype);
  ComposeRuntimeError.prototype.constructor = ComposeRuntimeError;
  ProvidableCompositionLocal.prototype = Object.create(CompositionLocal.prototype);
  ProvidableCompositionLocal.prototype.constructor = ProvidableCompositionLocal;
  StaticProvidableCompositionLocal.prototype = Object.create(ProvidableCompositionLocal.prototype);
  StaticProvidableCompositionLocal.prototype.constructor = StaticProvidableCompositionLocal;
  DynamicProvidableCompositionLocal.prototype = Object.create(ProvidableCompositionLocal.prototype);
  DynamicProvidableCompositionLocal.prototype.constructor = DynamicProvidableCompositionLocal;
  ResultRecord.prototype = Object.create(StateRecord.prototype);
  ResultRecord.prototype.constructor = ResultRecord;
  function mergeRecords(previous, current, applied) {
    return null;
  }
  Recomposer$recompositionRunner$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Recomposer$recompositionRunner$slambda$slambda.prototype.constructor = Recomposer$recompositionRunner$slambda$slambda;
  State.prototype = Object.create(Enum.prototype);
  State.prototype.constructor = State;
  Recomposer$runRecomposeAndApplyChanges$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Recomposer$runRecomposeAndApplyChanges$slambda.prototype.constructor = Recomposer$runRecomposeAndApplyChanges$slambda;
  Recomposer$recompositionRunner$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Recomposer$recompositionRunner$slambda.prototype.constructor = Recomposer$recompositionRunner$slambda;
  $awaitWorkAvailableCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $awaitWorkAvailableCOROUTINE$1.prototype.constructor = $awaitWorkAvailableCOROUTINE$1;
  Recomposer.prototype = Object.create(CompositionContext.prototype);
  Recomposer.prototype.constructor = Recomposer;
  function merge(previous, current, applied) {
    return null;
  }
  StateStateRecord.prototype = Object.create(StateRecord.prototype);
  StateStateRecord.prototype.constructor = StateStateRecord;
  AbstractPersistentList.prototype = Object.create(AbstractList.prototype);
  AbstractPersistentList.prototype.constructor = AbstractPersistentList;
  BufferIterator.prototype = Object.create(AbstractListIterator.prototype);
  BufferIterator.prototype.constructor = BufferIterator;
  PersistentVector.prototype = Object.create(AbstractPersistentList.prototype);
  PersistentVector.prototype.constructor = PersistentVector;
  PersistentVectorBuilder.prototype = Object.create(AbstractMutableList.prototype);
  PersistentVectorBuilder.prototype.constructor = PersistentVectorBuilder;
  PersistentVectorIterator.prototype = Object.create(AbstractListIterator.prototype);
  PersistentVectorIterator.prototype.constructor = PersistentVectorIterator;
  PersistentVectorMutableIterator.prototype = Object.create(AbstractListIterator.prototype);
  PersistentVectorMutableIterator.prototype.constructor = PersistentVectorMutableIterator;
  SmallPersistentVector.prototype = Object.create(AbstractPersistentList.prototype);
  SmallPersistentVector.prototype.constructor = SmallPersistentVector;
  TrieIterator.prototype = Object.create(AbstractListIterator.prototype);
  TrieIterator.prototype.constructor = TrieIterator;
  PersistentHashMap.prototype = Object.create(AbstractMap.prototype);
  PersistentHashMap.prototype.constructor = PersistentHashMap;
  PersistentHashMapBuilder.prototype = Object.create(AbstractMutableMap.prototype);
  PersistentHashMapBuilder.prototype.constructor = PersistentHashMapBuilder;
  PersistentHashMapBuilderBaseIterator.prototype = Object.create(PersistentHashMapBaseIterator.prototype);
  PersistentHashMapBuilderBaseIterator.prototype.constructor = PersistentHashMapBuilderBaseIterator;
  PersistentHashMapBuilderKeysIterator.prototype = Object.create(PersistentHashMapBuilderBaseIterator.prototype);
  PersistentHashMapBuilderKeysIterator.prototype.constructor = PersistentHashMapBuilderKeysIterator;
  PersistentHashMapBuilderValuesIterator.prototype = Object.create(PersistentHashMapBuilderBaseIterator.prototype);
  PersistentHashMapBuilderValuesIterator.prototype.constructor = PersistentHashMapBuilderValuesIterator;
  TrieNodeMutableEntriesIterator.prototype = Object.create(TrieNodeBaseIterator.prototype);
  TrieNodeMutableEntriesIterator.prototype.constructor = TrieNodeMutableEntriesIterator;
  MutableMapEntry.prototype = Object.create(MapEntry.prototype);
  MutableMapEntry.prototype.constructor = MutableMapEntry;
  AbstractMapBuilderEntries.prototype = Object.create(AbstractMutableSet.prototype);
  AbstractMapBuilderEntries.prototype.constructor = AbstractMapBuilderEntries;
  PersistentHashMapBuilderEntries.prototype = Object.create(AbstractMapBuilderEntries.prototype);
  PersistentHashMapBuilderEntries.prototype.constructor = PersistentHashMapBuilderEntries;
  PersistentHashMapBuilderKeys.prototype = Object.create(AbstractMutableSet.prototype);
  PersistentHashMapBuilderKeys.prototype.constructor = PersistentHashMapBuilderKeys;
  PersistentHashMapBuilderValues.prototype = Object.create(AbstractMutableCollection.prototype);
  PersistentHashMapBuilderValues.prototype.constructor = PersistentHashMapBuilderValues;
  PersistentHashMapKeysIterator.prototype = Object.create(PersistentHashMapBaseIterator.prototype);
  PersistentHashMapKeysIterator.prototype.constructor = PersistentHashMapKeysIterator;
  PersistentHashMapValuesIterator.prototype = Object.create(PersistentHashMapBaseIterator.prototype);
  PersistentHashMapValuesIterator.prototype.constructor = PersistentHashMapValuesIterator;
  PersistentHashMapEntriesIterator.prototype = Object.create(PersistentHashMapBaseIterator.prototype);
  PersistentHashMapEntriesIterator.prototype.constructor = PersistentHashMapEntriesIterator;
  TrieNodeKeysIterator.prototype = Object.create(TrieNodeBaseIterator.prototype);
  TrieNodeKeysIterator.prototype.constructor = TrieNodeKeysIterator;
  TrieNodeValuesIterator.prototype = Object.create(TrieNodeBaseIterator.prototype);
  TrieNodeValuesIterator.prototype.constructor = TrieNodeValuesIterator;
  TrieNodeEntriesIterator.prototype = Object.create(TrieNodeBaseIterator.prototype);
  TrieNodeEntriesIterator.prototype.constructor = TrieNodeEntriesIterator;
  PersistentHashMapKeys.prototype = Object.create(AbstractSet.prototype);
  PersistentHashMapKeys.prototype.constructor = PersistentHashMapKeys;
  PersistentHashMapValues.prototype = Object.create(AbstractCollection.prototype);
  PersistentHashMapValues.prototype.constructor = PersistentHashMapValues;
  PersistentHashMapEntries.prototype = Object.create(AbstractSet.prototype);
  PersistentHashMapEntries.prototype.constructor = PersistentHashMapEntries;
  PersistentOrderedSet.prototype = Object.create(AbstractSet.prototype);
  PersistentOrderedSet.prototype.constructor = PersistentOrderedSet;
  MutableSnapshot.prototype = Object.create(Snapshot.prototype);
  MutableSnapshot.prototype.constructor = MutableSnapshot;
  Success.prototype = Object.create(SnapshotApplyResult.prototype);
  Success.prototype.constructor = Success;
  Failure.prototype = Object.create(SnapshotApplyResult.prototype);
  Failure.prototype.constructor = Failure;
  GlobalSnapshot.prototype = Object.create(MutableSnapshot.prototype);
  GlobalSnapshot.prototype.constructor = GlobalSnapshot;
  TransparentObserverMutableSnapshot.prototype = Object.create(MutableSnapshot.prototype);
  TransparentObserverMutableSnapshot.prototype.constructor = TransparentObserverMutableSnapshot;
  NestedReadonlySnapshot.prototype = Object.create(Snapshot.prototype);
  NestedReadonlySnapshot.prototype.constructor = NestedReadonlySnapshot;
  ReadonlySnapshot.prototype = Object.create(Snapshot.prototype);
  ReadonlySnapshot.prototype.constructor = ReadonlySnapshot;
  TransparentObserverSnapshot.prototype = Object.create(Snapshot.prototype);
  TransparentObserverSnapshot.prototype.constructor = TransparentObserverSnapshot;
  NestedMutableSnapshot.prototype = Object.create(MutableSnapshot.prototype);
  NestedMutableSnapshot.prototype.constructor = NestedMutableSnapshot;
  SnapshotIdSet$iterator$slambda.prototype = Object.create(CoroutineImpl.prototype);
  SnapshotIdSet$iterator$slambda.prototype.constructor = SnapshotIdSet$iterator$slambda;
  StateListStateRecord.prototype = Object.create(StateRecord.prototype);
  StateListStateRecord.prototype.constructor = StateListStateRecord;
  StateMapStateRecord.prototype = Object.create(StateRecord.prototype);
  StateMapStateRecord.prototype.constructor = StateMapStateRecord;
  SnapshotMapEntrySet.prototype = Object.create(SnapshotMapSet.prototype);
  SnapshotMapEntrySet.prototype.constructor = SnapshotMapEntrySet;
  SnapshotMapKeySet.prototype = Object.create(SnapshotMapSet.prototype);
  SnapshotMapKeySet.prototype.constructor = SnapshotMapKeySet;
  SnapshotMapValueSet.prototype = Object.create(SnapshotMapSet.prototype);
  SnapshotMapValueSet.prototype.constructor = SnapshotMapValueSet;
  StateMapMutableEntriesIterator.prototype = Object.create(StateMapMutableIterator.prototype);
  StateMapMutableEntriesIterator.prototype.constructor = StateMapMutableEntriesIterator;
  StateMapMutableKeysIterator.prototype = Object.create(StateMapMutableIterator.prototype);
  StateMapMutableKeysIterator.prototype.constructor = StateMapMutableKeysIterator;
  StateMapMutableValuesIterator.prototype = Object.create(StateMapMutableIterator.prototype);
  StateMapMutableValuesIterator.prototype.constructor = StateMapMutableValuesIterator;
  $withFrameNanosCOROUTINE$4.prototype = Object.create(CoroutineImpl.prototype);
  $withFrameNanosCOROUTINE$4.prototype.constructor = $withFrameNanosCOROUTINE$4;
  //endregion
  function Applier() {
  }
  Applier.$metadata$ = interfaceMeta('Applier');
  function OffsetApplier(applier, offset) {
    this.b1a_1 = applier;
    this.c1a_1 = offset;
    this.d1a_1 = 0;
  }
  OffsetApplier.prototype.s19 = function () {
    return this.b1a_1.s19();
  };
  OffsetApplier.prototype.v19 = function (node) {
    var tmp0_this = this;
    var tmp1 = tmp0_this.d1a_1;
    tmp0_this.d1a_1 = tmp1 + 1 | 0;
    this.b1a_1.v19(node);
  };
  OffsetApplier.prototype.w19 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.d1a_1 > 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.OffsetApplier.up.<anonymous>' call
      tmp$ret$0 = 'OffsetApplier up called with no corresponding down';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.d1a_1;
    tmp0_this.d1a_1 = tmp1 - 1 | 0;
    this.b1a_1.w19();
  };
  OffsetApplier.prototype.x19 = function (index, instance) {
    this.b1a_1.x19(index + (this.d1a_1 === 0 ? this.c1a_1 : 0) | 0, instance);
  };
  OffsetApplier.prototype.y19 = function (index, instance) {
    this.b1a_1.y19(index + (this.d1a_1 === 0 ? this.c1a_1 : 0) | 0, instance);
  };
  OffsetApplier.prototype.z19 = function (index, count) {
    this.b1a_1.z19(index + (this.d1a_1 === 0 ? this.c1a_1 : 0) | 0, count);
  };
  OffsetApplier.prototype.a1a = function (from, to, count) {
    var effectiveOffset = this.d1a_1 === 0 ? this.c1a_1 : 0;
    this.b1a_1.a1a(from + effectiveOffset | 0, to + effectiveOffset | 0, count);
  };
  OffsetApplier.prototype.g9 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.OffsetApplier.clear.<anonymous>' call
      tmp$ret$0 = 'Clear is not valid on OffsetApplier';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
  };
  OffsetApplier.$metadata$ = classMeta('OffsetApplier', [Applier]);
  function AbstractApplier(root) {
    this.e1a_1 = root;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.f1a_1 = tmp$ret$0;
    this.g1a_1 = this.e1a_1;
    this.h1a_1 = 8;
  }
  AbstractApplier.prototype.i1a = function (_set____db54di) {
    this.g1a_1 = _set____db54di;
  };
  AbstractApplier.prototype.s19 = function () {
    return this.g1a_1;
  };
  AbstractApplier.prototype.j1a = function (node) {
    this.f1a_1.a(this.s19());
    this.i1a(node);
  };
  AbstractApplier.prototype.v19 = function (node) {
    return this.j1a((node == null ? true : isObject(node)) ? node : THROW_CCE());
  };
  AbstractApplier.prototype.w19 = function () {
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.f1a_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    var tmp1_check = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$1 = 'Check failed.';
      var message = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.i1a(this.f1a_1.c4(this.f1a_1.f() - 1 | 0));
  };
  AbstractApplier.prototype.g9 = function () {
    this.f1a_1.g9();
    this.i1a(this.e1a_1);
    this.k1a();
  };
  AbstractApplier.$metadata$ = classMeta('AbstractApplier', [Applier]);
  function rol(_this__u8e3s4, other) {
    return rotateLeft(_this__u8e3s4, other);
  }
  function ror(_this__u8e3s4, other) {
    return rotateRight(_this__u8e3s4, other);
  }
  function FrameAwaiter(onFrame, continuation) {
    this.l1a_1 = onFrame;
    this.m1a_1 = continuation;
  }
  FrameAwaiter.prototype.n1a = function () {
    return this.l1a_1;
  };
  FrameAwaiter.prototype.c16 = function () {
    return this.m1a_1;
  };
  FrameAwaiter.prototype.o1a = function (timeNanos) {
    var tmp$ret$3;
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.FrameAwaiter.resume.<anonymous>' call
      tmp$ret$0 = this.l1a_1(timeNanos);
      var tmp1_success = tmp$ret$0;
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp1_success);
      tmp = tmp$ret$1;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure = Companion_getInstance();
        tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure($p));
        tmp_0 = tmp$ret$2;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    tmp$ret$3 = tmp;
    this.m1a_1.m4(tmp$ret$3);
  };
  FrameAwaiter.$metadata$ = classMeta('FrameAwaiter');
  function fail($this, cause) {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.q1a_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    if (!($this.r1a_1 == null))
      return Unit_getInstance();
    $this.r1a_1 = cause;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var tmp0_fastForEach = $this.s1a_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.g(index);
        // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp0_resumeWithException = item.m1a_1;
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        tmp0_resumeWithException.m4(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
      }
       while (inductionVariable <= last);
    $this.s1a_1.g9();
    tmp$ret$2 = Unit_getInstance();
    tmp$ret$3 = tmp$ret$2;
  }
  function BroadcastFrameClock$withFrameNanos$lambda(this$0, $awaiter) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.q1a_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp = this$0.s1a_1;
      var tmp_0;
      if ($awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = $awaiter._v;
      }
      tmp.b4(tmp_0);
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      return Unit_getInstance();
    };
  }
  function BroadcastFrameClock(onNewAwaiters) {
    this.p1a_1 = onNewAwaiters;
    this.q1a_1 = createSynchronizedObject();
    this.r1a_1 = null;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.s1a_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.t1a_1 = tmp$ret$1;
    this.u1a_1 = 8;
  }
  BroadcastFrameClock.prototype.v1a = function () {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.q1a_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.BroadcastFrameClock.<get-hasAwaiters>.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.s1a_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  BroadcastFrameClock.prototype.w1a = function (timeNanos) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.q1a_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var toResume = this.s1a_1;
    this.s1a_1 = this.t1a_1;
    this.t1a_1 = toResume;
    var inductionVariable = 0;
    var last = toResume.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        toResume.g(i).o1a(timeNanos);
      }
       while (inductionVariable < last);
    toResume.g9();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  BroadcastFrameClock.prototype.x1a = function (onFrame, $cont) {
    var tmp$ret$7;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.fm();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>' call
      var awaiter = {_v: null};
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this.q1a_1;
      var tmp$ret$5;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>' call
      var cause = this.r1a_1;
      if (!(cause == null)) {
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        cancellable.m4(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        tmp$ret$2 = Unit_getInstance();
        break $l$block;
      }
      awaiter._v = new FrameAwaiter(onFrame, cancellable);
      var tmp$ret$3;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp0_isNotEmpty = this.s1a_1;
      tmp$ret$3 = !tmp0_isNotEmpty.h();
      var hadAwaiters = tmp$ret$3;
      var tmp = this.s1a_1;
      var tmp_0;
      if (awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = awaiter._v;
      }
      tmp.a(tmp_0);
      tmp$ret$4 = !hadAwaiters;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      var hasNewAwaiters = tmp$ret$6;
      cancellable.qk(BroadcastFrameClock$withFrameNanos$lambda(this, awaiter));
      if (hasNewAwaiters ? !(this.p1a_1 == null) : false) {
        try {
          this.p1a_1();
        } catch ($p) {
          if ($p instanceof Error) {
            fail(this, $p);
          } else {
            throw $p;
          }
        }
      }
    }
    tmp$ret$7 = cancellable.wj();
    return tmp$ret$7;
  };
  BroadcastFrameClock.$metadata$ = classMeta('BroadcastFrameClock', [MonotonicFrameClock]);
  function remember$composable(key1, calculation, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(-838505973);
    sourceInformation($composer_0, 'C(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_0;
    var tmp2_cache = $composer_0.z1a(key1);
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().c1b_1) {
      var value = calculation();
      tmp1_cache.b1b(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    var tmp_0 = tmp$ret$1;
    tmp$ret$2 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$2;
    $composer_0.d1b();
    return tmp0;
  }
  function remember$composable_0(calculation, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(547886695);
    sourceInformation($composer_0, 'C(remember$composable):Composables.kt#9igjgp');
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_0;
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance_1().c1b_1) {
      var value = calculation();
      tmp1_cache.b1b(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    var tmp_0 = tmp$ret$1;
    tmp$ret$2 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$2;
    $composer_0.d1b();
    return tmp0;
  }
  function ReusableContentHost$composable(active, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.e1b(get_reuseKey(), active);
    var activeChanged = $composer_0.f1b(active);
    if (active) {
      content($composer_0, 14 & $changed >> 3);
    } else {
      $composer_0.g1b(activeChanged);
    }
    $composer_0.h1b();
  }
  function remember$composable_1(key1, key2, calculation, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(-1124426577);
    sourceInformation($composer_0, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_0;
    var tmp2_cache = !!($composer_0.z1a(key1) | $composer_0.z1a(key2));
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().c1b_1) {
      var value = calculation();
      tmp1_cache.b1b(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    var tmp_0 = tmp$ret$1;
    tmp$ret$2 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$2;
    $composer_0.d1b();
    return tmp0;
  }
  function remember$composable_2(keys, calculation, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(-1603429786);
    sourceInformation($composer_0, 'C(remember$composable)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var indexedObject = keys;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var key = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_0.z1a(key));
    }
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_0;
    var tmp2_cache = invalid;
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().c1b_1) {
      var value = calculation();
      tmp1_cache.b1b(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    var tmp_0 = tmp$ret$1;
    tmp$ret$2 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$2;
    $composer_0.d1b();
    return tmp0;
  }
  function remember$composable_3(key1, key2, key3, calculation, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(-1058148781);
    sourceInformation($composer_0, 'C(remember$composable)P(1,2,3):Composables.kt#9igjgp');
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_0;
    var tmp2_cache = !!(!!($composer_0.z1a(key1) | $composer_0.z1a(key2)) | $composer_0.z1a(key3));
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().c1b_1) {
      var value = calculation();
      tmp1_cache.b1b(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    var tmp_0 = tmp$ret$1;
    tmp$ret$2 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$2;
    $composer_0.d1b();
    return tmp0;
  }
  function $get_currentCompositeKeyHash$$composable_u3vbzj($composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1422486212, $changed, -1, 'androidx.compose.runtime.$get-currentCompositeKeyHash$$composable (Composables.kt:224)');
    }
    var tmp0 = $composer_0.i1b();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0;
  }
  function invalidApplier() {
    throw IllegalStateException_init_$Create$('Invalid applier');
  }
  function rememberCompositionContext$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(1739317627);
    sourceInformation($composer_0, 'C(rememberCompositionContext$composable):Composables.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1739317627, $changed, -1, 'androidx.compose.runtime.rememberCompositionContext$composable (Composables.kt:486)');
    }
    var tmp0 = $composer_0.j1b();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0;
  }
  function get_compositionTracer() {
    init_properties_Composer_kt_de8r5y();
    return compositionTracer;
  }
  var compositionTracer;
  function get_removeCurrentGroupInstance() {
    init_properties_Composer_kt_de8r5y();
    return removeCurrentGroupInstance;
  }
  var removeCurrentGroupInstance;
  function get_skipToGroupEndInstance() {
    init_properties_Composer_kt_de8r5y();
    return skipToGroupEndInstance;
  }
  var skipToGroupEndInstance;
  function get_endGroupInstance() {
    init_properties_Composer_kt_de8r5y();
    return endGroupInstance;
  }
  var endGroupInstance;
  function get_startRootGroup() {
    init_properties_Composer_kt_de8r5y();
    return startRootGroup;
  }
  var startRootGroup;
  function get_resetSlotsInstance() {
    init_properties_Composer_kt_de8r5y();
    return resetSlotsInstance;
  }
  var resetSlotsInstance;
  function get_invocation() {
    init_properties_Composer_kt_de8r5y();
    return invocation;
  }
  var invocation;
  function get_provider() {
    init_properties_Composer_kt_de8r5y();
    return provider;
  }
  var provider;
  function get_compositionLocalMap() {
    init_properties_Composer_kt_de8r5y();
    return compositionLocalMap;
  }
  var compositionLocalMap;
  function get_providerValues() {
    init_properties_Composer_kt_de8r5y();
    return providerValues;
  }
  var providerValues;
  function get_providerMaps() {
    init_properties_Composer_kt_de8r5y();
    return providerMaps;
  }
  var providerMaps;
  function get_reference() {
    init_properties_Composer_kt_de8r5y();
    return reference;
  }
  var reference;
  function RememberManager() {
  }
  RememberManager.$metadata$ = interfaceMeta('RememberManager');
  function removeCurrentGroup(_this__u8e3s4, rememberManager) {
    init_properties_Composer_kt_de8r5y();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.i1c();
    tmp$ret$0 = tmp0_iterator;
    var tmp0_iterator_0 = tmp$ret$0;
    while (tmp0_iterator_0.d()) {
      var slot = tmp0_iterator_0.e();
      var tmp1_subject = slot;
      if (!(tmp1_subject == null) ? isInterface(tmp1_subject, RememberObserver) : false) {
        rememberManager.l1b(slot);
      } else {
        if (tmp1_subject instanceof RecomposeScopeImpl) {
          var composition = slot.k1c_1;
          if (!(composition == null)) {
            composition.d1d_1 = true;
            slot.wn();
          }
        }
      }
    }
    _this__u8e3s4.l1d();
  }
  function _set_compositionLocalScope__ya1b9q($this, _set____db54di) {
    var tmp0_setValue = compositionLocalScope$factory();
    return $this.r1d_1.p11(_set____db54di);
  }
  function _get_compositionLocalScope__ulge9q($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = compositionLocalScope$factory_0();
    tmp$ret$0 = $this.r1d_1.i2();
    return tmp$ret$0;
  }
  function startRoot($this) {
    $this.z1e_1 = $this.v1d_1.c1g();
    startGroup($this, 100);
    $this.u1d_1.e1g();
    $this.n1e_1 = $this.u1d_1.f1g();
    $this.q1e_1.i1g(asInt($this.p1e_1));
    $this.p1e_1 = $this.z1a($this.n1e_1);
    $this.d1f_1 = null;
    if (!$this.i1e_1) {
      $this.i1e_1 = $this.u1d_1.j1g();
    }
    var tmp0_safe_receiver = resolveCompositionLocal($this, get_LocalInspectionTables(), $this.n1e_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.a($this.v1d_1);
      $this.u1d_1.k1g(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    startGroup($this, $this.u1d_1.l1g());
  }
  function endRoot($this) {
    endGroup($this);
    $this.u1d_1.m1g();
    endGroup($this);
    recordEndRoot($this);
    finalizeCompose($this);
    $this.z1e_1.z1g();
    $this.j1e_1 = false;
  }
  function abortRoot($this) {
    cleanUpCompose($this);
    $this.a1e_1.g9();
    $this.d1e_1.g9();
    $this.f1e_1.g9();
    $this.m1e_1.g9();
    $this.q1e_1.g9();
    $this.o1e_1.g9();
    if (!$this.z1e_1.s1g_1) {
      $this.z1e_1.z1g();
    }
    if (!$this.b1f_1.g1c_1) {
      $this.b1f_1.z1g();
    }
    createFreshInsertTable($this);
    $this.i1f_1 = 0;
    $this.t1e_1 = 0;
    $this.k1e_1 = false;
    $this.h1f_1 = false;
    $this.r1e_1 = false;
    $this.x1e_1 = false;
    $this.j1e_1 = false;
  }
  function startGroup($this, key) {
    return start($this, key, null, false, null);
  }
  function startGroup_0($this, key, dataKey) {
    return start($this, key, dataKey, false, null);
  }
  function endGroup($this) {
    return end($this, false);
  }
  function skipGroup($this) {
    var tmp0_this = $this;
    tmp0_this.e1e_1 = tmp0_this.e1e_1 + $this.z1e_1.b1h() | 0;
  }
  function currentCompositionLocalScope($this, group) {
    if (group == null) {
      var tmp0_safe_receiver = $this.d1f_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
    }
    if ($this.h1f_1 ? $this.c1f_1 : false) {
      var current = $this.b1f_1.f1c_1;
      while (current > 0) {
        if ($this.b1f_1.e1h(current) === 202 ? equals($this.b1f_1.d1h(current), get_compositionLocalMap()) : false) {
          var tmp = $this.b1f_1.c1h(current);
          var providers = (!(tmp == null) ? isInterface(tmp, PersistentMap) : false) ? tmp : THROW_CCE();
          $this.d1f_1 = providers;
          return providers;
        }
        current = $this.b1f_1.f1h(current);
      }
    }
    if ($this.z1e_1.f() > 0) {
      var tmp1_elvis_lhs = group;
      var current_0 = tmp1_elvis_lhs == null ? $this.z1e_1.v1g_1 : tmp1_elvis_lhs;
      while (current_0 > 0) {
        if ($this.z1e_1.e1h(current_0) === 202 ? equals($this.z1e_1.d1h(current_0), get_compositionLocalMap()) : false) {
          var tmp2_elvis_lhs = $this.o1e_1.v(current_0);
          var tmp_0;
          if (tmp2_elvis_lhs == null) {
            var tmp_1 = $this.z1e_1.c1h(current_0);
            tmp_0 = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentMap) : false) ? tmp_1 : THROW_CCE();
          } else {
            tmp_0 = tmp2_elvis_lhs;
          }
          var providers_0 = tmp_0;
          $this.d1f_1 = providers_0;
          return providers_0;
        }
        current_0 = $this.z1e_1.f1h(current_0);
      }
    }
    $this.d1f_1 = $this.n1e_1;
    return $this.n1e_1;
  }
  function currentCompositionLocalScope$default($this, group, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      group = null;
    return currentCompositionLocalScope($this, group);
  }
  function updateProviderMapGroup($this, parentScope, currentProviders) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.mutate' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = parentScope.g1h();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateProviderMapGroup.<anonymous>' call
    tmp0_apply.l3(currentProviders);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.h1h();
    var providerScope = tmp$ret$1;
    startGroup_0($this, 204, get_providerMaps());
    $this.z1a(providerScope);
    $this.z1a(currentProviders);
    endGroup($this);
    return providerScope;
  }
  function resolveCompositionLocal($this, key, scope) {
    var tmp;
    if (contains_0(scope, key)) {
      tmp = getValueOf(scope, key);
    } else {
      tmp = key.i1h_1.i2();
    }
    return tmp;
  }
  function ensureWriter($this) {
    if ($this.b1f_1.g1c_1) {
      $this.b1f_1 = $this.a1f_1.k1h();
      $this.b1f_1.l1h();
      $this.c1f_1 = false;
      $this.d1f_1 = null;
    }
  }
  function createFreshInsertTable($this) {
    runtimeCheck($this.b1f_1.g1c_1);
    $this.a1f_1 = new SlotTable();
    var tmp = $this;
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.a1f_1.k1h();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.createFreshInsertTable.<anonymous>' call
    tmp0_also.z1g();
    tmp$ret$0 = tmp0_also;
    tmp.b1f_1 = tmp$ret$0;
  }
  function startReaderGroup($this, isNode, data) {
    if (isNode) {
      $this.z1e_1.o1h();
    } else {
      if (!(data == null) ? !($this.z1e_1.m1h() === data) : false) {
        recordSlotTableOperation$default($this, false, ComposerImpl$startReaderGroup$lambda(data), 2, null);
      }
      $this.z1e_1.n1h();
    }
  }
  function start($this, key, objectKey, isNode, data) {
    validateNodeNotExpected($this);
    updateCompoundKeyWhenWeEnterGroup($this, key, objectKey, data);
    if ($this.h1f_1) {
      $this.z1e_1.p1h();
      var startIndex = $this.b1f_1.e1c_1;
      if (isNode) {
        $this.b1f_1.s1h(Companion_getInstance_1().c1b_1);
      } else if (!(data == null)) {
        var tmp = $this.b1f_1;
        var tmp0_elvis_lhs = objectKey;
        tmp.r1h(key, tmp0_elvis_lhs == null ? Companion_getInstance_1().c1b_1 : tmp0_elvis_lhs, data);
      } else {
        var tmp_0 = $this.b1f_1;
        var tmp1_elvis_lhs = objectKey;
        tmp_0.q1h(key, tmp1_elvis_lhs == null ? Companion_getInstance_1().c1b_1 : tmp1_elvis_lhs);
      }
      var tmp2_safe_receiver = $this.b1e_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.ComposerImpl.start.<anonymous>' call
        var insertKeyInfo = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex), -1, 0);
        tmp2_safe_receiver.z1h(insertKeyInfo, $this.c1e_1 - tmp2_safe_receiver.u1h_1 | 0);
        tmp$ret$0 = tmp2_safe_receiver.a1i(insertKeyInfo);
        tmp$ret$1 = tmp$ret$0;
      }
      enterGroup($this, isNode, null);
      return Unit_getInstance();
    }
    if ($this.b1e_1 == null) {
      var slotKey = $this.z1e_1.b1i();
      if (slotKey === key ? equals(objectKey, $this.z1e_1.d1i()) : false) {
        startReaderGroup($this, isNode, data);
      } else {
        $this.b1e_1 = new Pending($this.z1e_1.c1i(), $this.c1e_1);
      }
    }
    var pending = $this.b1e_1;
    var newPending = null;
    if (!(pending == null)) {
      var keyInfo = pending.e1i(key, objectKey);
      if (!(keyInfo == null)) {
        pending.a1i(keyInfo);
        var location = keyInfo.j1i_1;
        $this.c1e_1 = pending.m1i(keyInfo) + pending.u1h_1 | 0;
        var relativePosition = pending.n1i(keyInfo);
        var currentRelativePosition = relativePosition - pending.v1h_1 | 0;
        pending.o1i(relativePosition, pending.v1h_1);
        recordReaderMoving($this, location);
        $this.z1e_1.p1i(location);
        if (currentRelativePosition > 0) {
          recordSlotEditingOperation($this, ComposerImpl$start$lambda(currentRelativePosition));
        }
        startReaderGroup($this, isNode, data);
      } else {
        $this.z1e_1.p1h();
        $this.h1f_1 = true;
        $this.d1f_1 = null;
        ensureWriter($this);
        $this.b1f_1.f1i();
        var startIndex_0 = $this.b1f_1.e1c_1;
        if (isNode) {
          $this.b1f_1.s1h(Companion_getInstance_1().c1b_1);
        } else if (!(data == null)) {
          var tmp_1 = $this.b1f_1;
          var tmp3_elvis_lhs = objectKey;
          tmp_1.r1h(key, tmp3_elvis_lhs == null ? Companion_getInstance_1().c1b_1 : tmp3_elvis_lhs, data);
        } else {
          var tmp_2 = $this.b1f_1;
          var tmp4_elvis_lhs = objectKey;
          tmp_2.q1h(key, tmp4_elvis_lhs == null ? Companion_getInstance_1().c1b_1 : tmp4_elvis_lhs);
        }
        $this.f1f_1 = $this.b1f_1.g1i(startIndex_0);
        var insertKeyInfo_0 = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex_0), -1, 0);
        pending.z1h(insertKeyInfo_0, $this.c1e_1 - pending.u1h_1 | 0);
        pending.a1i(insertKeyInfo_0);
        var tmp$ret$2;
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp$ret$2 = ArrayList_init_$Create$();
        newPending = new Pending(tmp$ret$2, isNode ? 0 : $this.c1e_1);
      }
    }
    enterGroup($this, isNode, newPending);
  }
  function enterGroup($this, isNode, newPending) {
    $this.a1e_1.q1i($this.b1e_1);
    $this.b1e_1 = newPending;
    $this.d1e_1.i1g($this.c1e_1);
    if (isNode)
      $this.c1e_1 = 0;
    $this.f1e_1.i1g($this.e1e_1);
    $this.e1e_1 = 0;
  }
  function exitGroup($this, expectedNodeCount, inserting) {
    var previousPending = $this.a1e_1.r1i();
    if (!(previousPending == null) ? !inserting : false) {
      var tmp0_this = previousPending;
      var tmp1 = tmp0_this.v1h_1;
      tmp0_this.v1h_1 = tmp1 + 1 | 0;
    }
    $this.b1e_1 = previousPending;
    $this.c1e_1 = $this.d1e_1.r1i() + expectedNodeCount | 0;
    $this.e1e_1 = $this.f1e_1.r1i() + expectedNodeCount | 0;
  }
  function end($this, isNode) {
    if ($this.h1f_1) {
      var parent = $this.b1f_1.f1c_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.b1f_1.e1h(parent), $this.b1f_1.d1h(parent), $this.b1f_1.c1h(parent));
    } else {
      var parent_0 = $this.z1e_1.v1g_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.z1e_1.e1h(parent_0), $this.z1e_1.d1h(parent_0), $this.z1e_1.c1h(parent_0));
    }
    var expectedNodeCount = $this.e1e_1;
    var pending = $this.b1e_1;
    if (!(pending == null) ? pending.t1h_1.f() > 0 : false) {
      var previous = pending.t1h_1;
      var current = pending.s1i();
      var usedKeys = fastToSet(current);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp$ret$0 = LinkedHashSet_init_$Create$();
      var placedKeys = tmp$ret$0;
      var currentIndex = 0;
      var currentEnd = current.f();
      var previousIndex = 0;
      var previousEnd = previous.f();
      var nodeOffset = 0;
      $l$loop_0: while (previousIndex < previousEnd) {
        var previousInfo = previous.g(previousIndex);
        if (!usedKeys.m(previousInfo)) {
          var deleteOffset = pending.m1i(previousInfo);
          recordRemoveNode($this, deleteOffset + pending.u1h_1 | 0, previousInfo.k1i_1);
          pending.t1i(previousInfo.j1i_1, 0);
          recordReaderMoving($this, previousInfo.j1i_1);
          $this.z1e_1.p1i(previousInfo.j1i_1);
          recordDelete($this);
          $this.z1e_1.b1h();
          removeRange($this.l1e_1, previousInfo.j1i_1, previousInfo.j1i_1 + $this.z1e_1.u1i(previousInfo.j1i_1) | 0);
          var tmp0 = previousIndex;
          previousIndex = tmp0 + 1 | 0;
          continue $l$loop_0;
        }
        if (placedKeys.m(previousInfo)) {
          var tmp1 = previousIndex;
          previousIndex = tmp1 + 1 | 0;
          continue $l$loop_0;
        }
        if (currentIndex < currentEnd) {
          var currentInfo = current.g(currentIndex);
          if (!(currentInfo === previousInfo)) {
            var nodePosition = pending.m1i(currentInfo);
            placedKeys.a(currentInfo);
            if (!(nodePosition === nodeOffset)) {
              var updatedCount = pending.v1i(currentInfo);
              recordMoveNode($this, nodePosition + pending.u1h_1 | 0, nodeOffset + pending.u1h_1 | 0, updatedCount);
              pending.w1i(nodePosition, nodeOffset, updatedCount);
            }
          } else {
            var tmp2 = previousIndex;
            previousIndex = tmp2 + 1 | 0;
          }
          var tmp3 = currentIndex;
          currentIndex = tmp3 + 1 | 0;
          nodeOffset = nodeOffset + pending.v1i(currentInfo) | 0;
        }
      }
      realizeMovement($this);
      if (previous.f() > 0) {
        recordReaderMoving($this, $this.z1e_1.x1i());
        $this.z1e_1.l1h();
      }
    }
    var removeIndex = $this.c1e_1;
    while (!$this.z1e_1.y1i()) {
      var startSlot = $this.z1e_1.t1g_1;
      recordDelete($this);
      var nodesToRemove = $this.z1e_1.b1h();
      recordRemoveNode($this, removeIndex, nodesToRemove);
      removeRange($this.l1e_1, startSlot, $this.z1e_1.t1g_1);
    }
    var inserting = $this.h1f_1;
    if (inserting) {
      if (isNode) {
        registerInsertUpFixup($this);
        expectedNodeCount = 1;
      }
      $this.z1e_1.a1j();
      var parentGroup = $this.b1f_1.f1c_1;
      $this.b1f_1.b1j();
      if (!$this.z1e_1.d1j()) {
        var virtualIndex = insertedGroupVirtualIndex($this, parentGroup);
        $this.b1f_1.c1j();
        $this.b1f_1.z1g();
        recordInsert($this, $this.f1f_1);
        $this.h1f_1 = false;
        if (!$this.v1d_1.po()) {
          updateNodeCount($this, virtualIndex, 0);
          updateNodeCountOverrides($this, virtualIndex, expectedNodeCount);
        }
      }
    } else {
      if (isNode) {
        recordUp($this);
      }
      recordEndGroup($this);
      var parentGroup_0 = $this.z1e_1.v1g_1;
      var parentNodeCount = updatedNodeCount($this, parentGroup_0);
      if (!(expectedNodeCount === parentNodeCount)) {
        updateNodeCountOverrides($this, parentGroup_0, expectedNodeCount);
      }
      if (isNode) {
        expectedNodeCount = 1;
      }
      $this.z1e_1.z1i();
      realizeMovement($this);
    }
    exitGroup($this, expectedNodeCount, inserting);
  }
  function recomposeToGroupEnd($this) {
    var wasComposing = $this.x1e_1;
    $this.x1e_1 = true;
    var recomposed = false;
    var parent = $this.z1e_1.v1g_1;
    var end = parent + $this.z1e_1.u1i(parent) | 0;
    var recomposeIndex = $this.c1e_1;
    var recomposeCompoundKey = $this.i1f_1;
    var oldGroupNodeCount = $this.e1e_1;
    var oldGroup = parent;
    var firstInRange_0 = firstInRange($this.l1e_1, $this.z1e_1.t1g_1, end);
    while (!(firstInRange_0 == null)) {
      var location = firstInRange_0.f1j_1;
      removeLocation($this.l1e_1, location);
      if (firstInRange_0.k1j()) {
        recomposed = true;
        $this.z1e_1.p1i(location);
        var newGroup = $this.z1e_1.t1g_1;
        recordUpsAndDowns($this, oldGroup, newGroup, parent);
        oldGroup = newGroup;
        $this.c1e_1 = nodeIndexOf($this, location, newGroup, parent, recomposeIndex);
        $this.i1f_1 = compoundKeyOf($this, $this.z1e_1.f1h(newGroup), parent, recomposeCompoundKey);
        $this.d1f_1 = null;
        firstInRange_0.e1j_1.i1j($this);
        $this.d1f_1 = null;
        $this.z1e_1.j1j(parent);
      } else {
        $this.w1e_1.q1i(firstInRange_0.e1j_1);
        firstInRange_0.e1j_1.h1j();
        $this.w1e_1.r1i();
      }
      firstInRange_0 = firstInRange($this.l1e_1, $this.z1e_1.t1g_1, end);
    }
    if (recomposed) {
      recordUpsAndDowns($this, oldGroup, parent, parent);
      $this.z1e_1.l1h();
      var parentGroupNodes = updatedNodeCount($this, parent);
      $this.c1e_1 = recomposeIndex + parentGroupNodes | 0;
      $this.e1e_1 = oldGroupNodeCount + parentGroupNodes | 0;
    } else {
      skipReaderToGroupEnd($this);
    }
    $this.i1f_1 = recomposeCompoundKey;
    $this.x1e_1 = wasComposing;
  }
  function insertedGroupVirtualIndex($this, index) {
    return -2 - index | 0;
  }
  function updateNodeCountOverrides($this, group, newCount) {
    var currentCount = updatedNodeCount($this, group);
    if (!(currentCount === newCount)) {
      var delta = newCount - currentCount | 0;
      var current = group;
      var minPending = $this.a1e_1.f() - 1 | 0;
      $l$loop_0: while (!(current === -1)) {
        var newCurrentNodes = updatedNodeCount($this, current) + delta | 0;
        updateNodeCount($this, current, newCurrentNodes);
        var inductionVariable = minPending;
        if (0 <= inductionVariable)
          $l$loop: do {
            var pendingIndex = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var pending = $this.a1e_1.l1j(pendingIndex);
            if (!(pending == null) ? pending.t1i(current, newCurrentNodes) : false) {
              minPending = pendingIndex - 1 | 0;
              break $l$loop;
            }
          }
           while (0 <= inductionVariable);
        if (current < 0) {
          current = $this.z1e_1.v1g_1;
        } else {
          if ($this.z1e_1.m1j(current))
            break $l$loop_0;
          current = $this.z1e_1.f1h(current);
        }
      }
    }
  }
  function nodeIndexOf($this, groupLocation, group, recomposeGroup, recomposeIndex) {
    var anchorGroup = $this.z1e_1.f1h(group);
    $l$loop: while (!(anchorGroup === recomposeGroup)) {
      if ($this.z1e_1.m1j(anchorGroup))
        break $l$loop;
      anchorGroup = $this.z1e_1.f1h(anchorGroup);
    }
    var index = $this.z1e_1.m1j(anchorGroup) ? 0 : recomposeIndex;
    if (anchorGroup === group)
      return index;
    var current = anchorGroup;
    var nodeIndexLimit = index + (updatedNodeCount($this, anchorGroup) - $this.z1e_1.n1j(group) | 0) | 0;
    loop: while (index < nodeIndexLimit) {
      if (current === groupLocation)
        break loop;
      var tmp0 = current;
      current = tmp0 + 1 | 0;
      while (current < groupLocation) {
        var end = current + $this.z1e_1.u1i(current) | 0;
        if (groupLocation < end)
          continue loop;
        index = index + updatedNodeCount($this, current) | 0;
        current = end;
      }
      break loop;
    }
    return index;
  }
  function updatedNodeCount($this, group) {
    if (group < 0) {
      var tmp0_safe_receiver = $this.h1e_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.ComposerImpl.updatedNodeCount.<anonymous>' call
        tmp$ret$0 = tmp0_safe_receiver.v(group);
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp$ret$1;
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var nodeCounts = $this.g1e_1;
    if (!(nodeCounts == null)) {
      var override = nodeCounts[group];
      if (override >= 0)
        return override;
    }
    return $this.z1e_1.n1j(group);
  }
  function updateNodeCount($this, group, count) {
    if (!(updatedNodeCount($this, group) === count)) {
      if (group < 0) {
        var tmp0_elvis_lhs = $this.h1e_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp$ret$1;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts = HashMap_init_$Create$();
          $this.h1e_1 = newCounts;
          tmp$ret$0 = newCounts;
          tmp$ret$1 = tmp$ret$0;
          tmp = tmp$ret$1;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var virtualCounts = tmp;
        // Inline function 'kotlin.collections.set' call
        virtualCounts.q(group, count);
      } else {
        var tmp1_elvis_lhs = $this.g1e_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          var tmp$ret$3;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts_0 = new Int32Array($this.z1e_1.f());
          fill$default(newCounts_0, -1, 0, 0, 6, null);
          $this.g1e_1 = newCounts_0;
          tmp$ret$2 = newCounts_0;
          tmp$ret$3 = tmp$ret$2;
          tmp_0 = tmp$ret$3;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var nodeCounts = tmp_0;
        nodeCounts[group] = count;
      }
    }
  }
  function clearUpdatedNodeCounts($this) {
    $this.g1e_1 = null;
    $this.h1e_1 = null;
  }
  function recordUpsAndDowns($this, oldGroup, newGroup, commonRoot) {
    var reader = $this.z1e_1;
    var nearestCommonRoot = nearestCommonRootOf(reader, oldGroup, newGroup, commonRoot);
    var current = oldGroup;
    while (current > 0 ? !(current === nearestCommonRoot) : false) {
      if (reader.m1j(current)) {
        recordUp($this);
      }
      current = reader.f1h(current);
    }
    doRecordDownsFor($this, newGroup, nearestCommonRoot);
  }
  function doRecordDownsFor($this, group, nearestCommonRoot) {
    if (group > 0 ? !(group === nearestCommonRoot) : false) {
      doRecordDownsFor($this, $this.z1e_1.f1h(group), nearestCommonRoot);
      if ($this.z1e_1.m1j(group)) {
        recordDown($this, nodeAt($this.z1e_1, $this, group));
      }
    }
  }
  function compoundKeyOf($this, group, recomposeGroup, recomposeKey) {
    var tmp;
    if (group === recomposeGroup) {
      tmp = recomposeKey;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.ComposerImpl.compoundKeyOf.<anonymous>' call
      var groupKey = groupCompoundKeyPart($this.z1e_1, $this, group);
      var tmp_0;
      if (groupKey === get_movableContentKey()) {
        tmp_0 = groupKey;
      } else {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.rol' call
        var tmp0_rol = compoundKeyOf($this, $this.z1e_1.f1h(group), recomposeGroup, recomposeKey);
        tmp$ret$0 = rotateLeft(tmp0_rol, 3);
        tmp_0 = tmp$ret$0 ^ groupKey;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    return tmp;
  }
  function groupCompoundKeyPart(_this__u8e3s4, $this, group) {
    var tmp;
    if (_this__u8e3s4.o1j(group)) {
      var tmp0_safe_receiver = _this__u8e3s4.d1h(group);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
        var tmp0_subject = tmp0_safe_receiver;
        var tmp_1;
        if (tmp0_subject instanceof Enum) {
          tmp_1 = tmp0_safe_receiver.t5_1;
        } else {
          if (tmp0_subject instanceof MovableContent) {
            tmp_1 = get_movableContentKey();
          } else {
            tmp_1 = hashCode(tmp0_safe_receiver);
          }
        }
        tmp$ret$0 = tmp_1;
        tmp$ret$1 = tmp$ret$0;
        tmp_0 = tmp$ret$1;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    } else {
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      var tmp0_let = _this__u8e3s4.e1h(group);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
      var tmp_2;
      if (tmp0_let === 207) {
        var tmp0_safe_receiver_0 = _this__u8e3s4.c1h(group);
        var tmp_3;
        if (tmp0_safe_receiver_0 == null) {
          tmp_3 = null;
        } else {
          var tmp$ret$3;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>.<anonymous>' call
          tmp$ret$2 = equals(tmp0_safe_receiver_0, Companion_getInstance_1().c1b_1) ? tmp0_let : hashCode(tmp0_safe_receiver_0);
          tmp$ret$3 = tmp$ret$2;
          tmp_3 = tmp$ret$3;
        }
        var tmp1_elvis_lhs_0 = tmp_3;
        tmp_2 = tmp1_elvis_lhs_0 == null ? tmp0_let : tmp1_elvis_lhs_0;
      } else {
        tmp_2 = tmp0_let;
      }
      tmp$ret$4 = tmp_2;
      tmp$ret$5 = tmp$ret$4;
      tmp = tmp$ret$5;
    }
    return tmp;
  }
  function skipReaderToGroupEnd($this) {
    $this.e1e_1 = $this.z1e_1.p1j();
    $this.z1e_1.l1h();
  }
  function addRecomposeScope($this) {
    if ($this.h1f_1) {
      var tmp = $this.z1d_1;
      var scope = new RecomposeScopeImpl(tmp instanceof CompositionImpl ? tmp : THROW_CCE());
      $this.w1e_1.q1i(scope);
      $this.q1j(scope);
      scope.s1j($this.v1e_1);
    } else {
      var invalidation = removeLocation($this.l1e_1, $this.z1e_1.v1g_1);
      var slot = $this.z1e_1.e();
      var tmp_0;
      if (equals(slot, Companion_getInstance_1().c1b_1)) {
        var tmp_1 = $this.z1d_1;
        var newScope = new RecomposeScopeImpl(tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE());
        $this.q1j(newScope);
        tmp_0 = newScope;
      } else {
        tmp_0 = slot instanceof RecomposeScopeImpl ? slot : THROW_CCE();
      }
      var scope_0 = tmp_0;
      scope_0.r1j(!(invalidation == null));
      $this.w1e_1.q1i(scope_0);
      scope_0.s1j($this.v1e_1);
    }
  }
  function invokeMovableContentLambda($this, content, locals, parameter, force) {
    $this.t1j(get_movableContentKey(), content);
    $this.z1a(parameter);
    var savedCompoundKeyHash = $this.i1f_1;
    try {
      $this.i1f_1 = get_movableContentKey();
      if ($this.h1f_1) {
        var tmp = $this.b1f_1;
        tmp.u1j(0, 1, null);
      }
      var providersChanged = $this.h1f_1 ? false : !equals($this.z1e_1.m1h(), locals);
      if (providersChanged) {
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = $this.o1e_1;
        var tmp1_set = $this.z1e_1.t1g_1;
        tmp0_set.q(tmp1_set, locals);
      }
      start($this, 202, get_compositionLocalMap(), false, locals);
      if ($this.h1f_1 ? !force : false) {
        $this.c1f_1 = true;
        $this.d1f_1 = null;
        var anchor = $this.b1f_1.g1i($this.b1f_1.f1h($this.b1f_1.f1c_1));
        var tmp_0 = $this.a1f_1;
        var tmp_1 = emptyList();
        var reference = new MovableContentStateReference(content, parameter, $this.z1d_1, tmp_0, anchor, tmp_1, currentCompositionLocalScope$default($this, null, 2, null));
        $this.u1d_1.v1j(reference);
      } else {
        var savedProvidersInvalid = $this.p1e_1;
        $this.p1e_1 = providersChanged;
        invokeComposable$composable($this, ComposableLambda$invoke$ref(composableLambdaInstance(694380496, true, ComposerImpl$invokeMovableContentLambda$lambda(content, parameter))));
        $this.p1e_1 = savedProvidersInvalid;
      }
    }finally {
      endGroup($this);
      $this.i1f_1 = savedCompoundKeyHash;
      $this.w1j();
    }
  }
  function insertMovableContentGuarded($this, references) {
    var tmp$ret$13;
    $l$block_1: {
      // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
      var tmp0_withChanges = $this.y1d_1;
      var savedChanges = $this.x1d_1;
      try {
        $this.x1d_1 = tmp0_withChanges;
        record($this, get_resetSlotsInstance());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = references.f() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = references.g(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>' call
            var to = item.z3();
            var from = item.a4();
            var anchor = to.b1k_1;
            var location = to.a1k_1.f1k(anchor);
            var effectiveNodeIndex = {_v: 0};
            realizeUps($this);
            record($this, ComposerImpl$insertMovableContentGuarded$lambda(effectiveNodeIndex, anchor));
            if (from == null) {
              var toSlotTable = to.a1k_1;
              if (equals(toSlotTable, $this.a1f_1)) {
                createFreshInsertTable($this);
              }
              var tmp$ret$4;
              // Inline function 'androidx.compose.runtime.SlotTable.read' call
              var tmp1_read = to.a1k_1;
              var tmp$ret$3;
              // Inline function 'kotlin.let' call
              var tmp0_let = tmp1_read.c1g();
              // Inline function 'kotlin.contracts.contract' call
              var tmp$ret$2;
              // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
              var tmp;
              try {
                tmp0_let.p1i(location);
                $this.l1f_1 = location;
                var tmp$ret$0;
                // Inline function 'kotlin.collections.mutableListOf' call
                tmp$ret$0 = ArrayList_init_$Create$();
                var offsetChanges = tmp$ret$0;
                recomposeMovableContent$default($this, null, null, null, null, ComposerImpl$insertMovableContentGuarded$lambda_0($this, offsetChanges, tmp0_let, to), 30, null);
                var tmp_0;
                var tmp$ret$1;
                // Inline function 'kotlin.collections.isNotEmpty' call
                tmp$ret$1 = !offsetChanges.h();
                if (tmp$ret$1) {
                  record($this, ComposerImpl$insertMovableContentGuarded$lambda_1(effectiveNodeIndex, offsetChanges));
                  tmp_0 = Unit_getInstance();
                }
                tmp = tmp_0;
              }finally {
                tmp0_let.z1g();
              }
              tmp$ret$2 = tmp;
              tmp$ret$3 = tmp$ret$2;
              tmp$ret$4 = tmp$ret$3;
            } else {
              var resolvedState = $this.u1d_1.g1k(from);
              var tmp0_safe_receiver = resolvedState;
              var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h1k_1;
              var fromTable = tmp1_elvis_lhs == null ? from.a1k_1 : tmp1_elvis_lhs;
              var tmp2_safe_receiver = resolvedState;
              var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.h1k_1;
              var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.g1i(0);
              var fromAnchor = tmp4_elvis_lhs == null ? from.b1k_1 : tmp4_elvis_lhs;
              var nodesToInsert = collectNodesFrom(fromTable, fromAnchor);
              var tmp$ret$5;
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp$ret$5 = !nodesToInsert.h();
              if (tmp$ret$5) {
                record($this, ComposerImpl$insertMovableContentGuarded$lambda_2(effectiveNodeIndex, nodesToInsert));
                if (equals(to.a1k_1, $this.v1d_1)) {
                  var group = $this.v1d_1.f1k(anchor);
                  updateNodeCount($this, group, updatedNodeCount($this, group) + nodesToInsert.f() | 0);
                }
              }
              record($this, ComposerImpl$insertMovableContentGuarded$lambda_3(resolvedState, $this, from, to));
              var tmp$ret$12;
              // Inline function 'androidx.compose.runtime.SlotTable.read' call
              var tmp$ret$11;
              // Inline function 'kotlin.let' call
              var tmp2_let = fromTable.c1g();
              // Inline function 'kotlin.contracts.contract' call
              var tmp$ret$10;
              // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
              var tmp_1;
              try {
                var tmp$ret$9;
                $l$block_0: {
                  // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
                  var savedReader = $this.z1e_1;
                  var savedCountOverrides = $this.g1e_1;
                  $this.g1e_1 = null;
                  try {
                    $this.z1e_1 = tmp2_let;
                    var newLocation = fromTable.f1k(fromAnchor);
                    tmp2_let.p1i(newLocation);
                    $this.l1f_1 = newLocation;
                    var tmp$ret$6;
                    // Inline function 'kotlin.collections.mutableListOf' call
                    tmp$ret$6 = ArrayList_init_$Create$();
                    var offsetChanges_0 = tmp$ret$6;
                    var tmp$ret$7;
                    $l$block: {
                      // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
                      var savedChanges_0 = $this.x1d_1;
                      try {
                        $this.x1d_1 = offsetChanges_0;
                        var tmp_2 = tmp2_let.t1g_1;
                        tmp$ret$7 = recomposeMovableContent($this, from.z1j_1, to.z1j_1, tmp_2, from.c1k_1, ComposerImpl$insertMovableContentGuarded$lambda_4($this, to));
                        break $l$block;
                      }finally {
                        $this.x1d_1 = savedChanges_0;
                      }
                    }
                    var tmp_3;
                    var tmp$ret$8;
                    // Inline function 'kotlin.collections.isNotEmpty' call
                    tmp$ret$8 = !offsetChanges_0.h();
                    if (tmp$ret$8) {
                      record($this, ComposerImpl$insertMovableContentGuarded$lambda_5(effectiveNodeIndex, offsetChanges_0));
                      tmp_3 = Unit_getInstance();
                    }
                    tmp$ret$9 = tmp_3;
                    break $l$block_0;
                  }finally {
                    $this.z1e_1 = savedReader;
                    $this.g1e_1 = savedCountOverrides;
                  }
                }
                tmp_1 = tmp$ret$9;
              }finally {
                tmp2_let.z1g();
              }
              tmp$ret$10 = tmp_1;
              tmp$ret$11 = tmp$ret$10;
              tmp$ret$12 = tmp$ret$11;
            }
            record($this, get_skipToGroupEndInstance());
          }
           while (inductionVariable <= last);
        record($this, ComposerImpl$insertMovableContentGuarded$lambda_6);
        $this.l1f_1 = 0;
        tmp$ret$13 = Unit_getInstance();
        break $l$block_1;
      }finally {
        $this.x1d_1 = savedChanges;
      }
    }
  }
  function recomposeMovableContent($this, from, to, index, invalidations, block) {
    var savedImplicitRootStart = $this.n1f_1;
    var savedIsComposing = $this.x1e_1;
    var savedNodeIndex = $this.c1e_1;
    try {
      $this.n1f_1 = false;
      $this.x1e_1 = true;
      $this.c1e_1 = 0;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = invalidations.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = invalidations.g(index_0);
          // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>' call
          var scope = item.z3();
          var instances = item.a4();
          if (!(instances == null)) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var inductionVariable_0 = 0;
            var last_0 = instances.k1k_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>.<anonymous>' call
                var tmp0__anonymous__q1qw7t = instances.g(i);
                $this.j1k(scope, tmp0__anonymous__q1qw7t);
              }
               while (inductionVariable_0 < last_0);
          } else {
            $this.j1k(scope, null);
          }
        }
         while (inductionVariable <= last);
      var tmp1_safe_receiver = from;
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp0_elvis_lhs = index;
        tmp = tmp1_safe_receiver.m1k(to, tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs, block);
      }
      var tmp2_elvis_lhs = tmp;
      return tmp2_elvis_lhs == null ? block() : tmp2_elvis_lhs;
    }finally {
      $this.n1f_1 = savedImplicitRootStart;
      $this.x1e_1 = savedIsComposing;
      $this.c1e_1 = savedNodeIndex;
    }
  }
  function recomposeMovableContent$default($this, from, to, index, invalidations, block, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      from = null;
    if (!(($mask0 & 4) === 0))
      to = null;
    if (!(($mask0 & 8) === 0))
      index = null;
    if (!(($mask0 & 16) === 0))
      invalidations = emptyList();
    return recomposeMovableContent($this, from, to, index, invalidations, block);
  }
  function _get_node__db0vwp(_this__u8e3s4, $this) {
    return _this__u8e3s4.n1k(_this__u8e3s4.v1g_1);
  }
  function nodeAt(_this__u8e3s4, $this, index) {
    return _this__u8e3s4.n1k(index);
  }
  function validateNodeExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = $this.k1e_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeExpected.<anonymous>' call
      tmp$ret$0 = 'A call to createNode(), emitNode() or useNode() expected was not expected';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    $this.k1e_1 = false;
  }
  function validateNodeNotExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !$this.k1e_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeNotExpected.<anonymous>' call
      tmp$ret$0 = 'A call to createNode(), emitNode() or useNode() expected';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
  }
  function record($this, change) {
    $this.x1d_1.a(change);
  }
  function recordApplierOperation($this, change) {
    realizeUps($this);
    realizeDowns_0($this);
    record($this, change);
  }
  function recordSlotEditingOperation($this, change) {
    realizeOperationLocation$default($this, false, 2, null);
    recordSlotEditing($this);
    record($this, change);
  }
  function recordSlotTableOperation($this, forParent, change) {
    realizeOperationLocation($this, forParent);
    record($this, change);
  }
  function recordSlotTableOperation$default($this, forParent, change, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      forParent = false;
    return recordSlotTableOperation($this, forParent, change);
  }
  function realizeUps($this) {
    var count = $this.j1f_1;
    if (count > 0) {
      $this.j1f_1 = 0;
      record($this, ComposerImpl$realizeUps$lambda(count));
    }
  }
  function realizeDowns($this, nodes) {
    record($this, ComposerImpl$realizeDowns$lambda(nodes));
  }
  function realizeDowns_0($this) {
    if ($this.k1f_1.o1k()) {
      realizeDowns($this, $this.k1f_1.ma());
      $this.k1f_1.g9();
    }
  }
  function recordDown($this, node) {
    $this.k1f_1.q1i(node);
  }
  function recordUp($this) {
    if ($this.k1f_1.o1k()) {
      $this.k1f_1.r1i();
    } else {
      var tmp0_this = $this;
      var tmp1 = tmp0_this.j1f_1;
      tmp0_this.j1f_1 = tmp1 + 1 | 0;
    }
  }
  function realizeOperationLocation($this, forParent) {
    var location = forParent ? $this.z1e_1.v1g_1 : $this.z1e_1.t1g_1;
    var distance = location - $this.l1f_1 | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = distance >= 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.realizeOperationLocation.<anonymous>' call
      tmp$ret$0 = 'Tried to seek backward';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    if (distance > 0) {
      record($this, ComposerImpl$realizeOperationLocation$lambda(distance));
      $this.l1f_1 = location;
    }
  }
  function realizeOperationLocation$default($this, forParent, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      forParent = false;
    return realizeOperationLocation($this, forParent);
  }
  function recordInsert($this, anchor) {
    if ($this.g1f_1.h()) {
      var insertTable = $this.a1f_1;
      recordSlotEditingOperation($this, ComposerImpl$recordInsert$lambda(insertTable, anchor));
    } else {
      var fixups = toMutableList($this.g1f_1);
      $this.g1f_1.g9();
      realizeUps($this);
      realizeDowns_0($this);
      var insertTable_0 = $this.a1f_1;
      recordSlotEditingOperation($this, ComposerImpl$recordInsert$lambda_0(insertTable_0, fixups, anchor));
    }
  }
  function recordFixup($this, change) {
    $this.g1f_1.a(change);
  }
  function recordInsertUpFixup($this, change) {
    $this.p1f_1.q1i(change);
  }
  function registerInsertUpFixup($this) {
    $this.g1f_1.a($this.p1f_1.r1i());
  }
  function recordDelete($this) {
    reportFreeMovableContent($this, $this.z1e_1.t1g_1);
    recordSlotEditingOperation($this, get_removeCurrentGroupInstance());
    var tmp0_this = $this;
    tmp0_this.l1f_1 = tmp0_this.l1f_1 + $this.z1e_1.p1k() | 0;
  }
  function reportFreeMovableContent($this, groupBeingRemoved) {
    reportFreeMovableContent$reportGroup($this, groupBeingRemoved, false, 0);
    realizeMovement($this);
  }
  function releaseMovableGroupAtCurrent($this, reference, slots) {
    var slotTable = new SlotTable();
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = slotTable.k1h();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      tmp0_let.f1i();
      tmp0_let.q1h(get_movableContentKey(), reference.x1j_1);
      tmp0_let.u1j(0, 1, null);
      tmp0_let.q1k(reference.y1j_1);
      slots.r1k(reference.b1k_1, 1, tmp0_let);
      tmp0_let.b1h();
      tmp0_let.b1j();
      tmp0_let.c1j();
      tmp = Unit_getInstance();
    }finally {
      tmp0_let.z1g();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var state = new MovableContentState(slotTable);
    $this.u1d_1.s1k(reference, state);
  }
  function reportAllMovableContent($this) {
    if ($this.v1d_1.t1k()) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      var changes = tmp$ret$0;
      $this.e1f_1 = changes;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.SlotTable.read' call
      var tmp1_read = $this.v1d_1;
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_read.c1g();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
      var tmp;
      try {
        $this.z1e_1 = tmp0_let;
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
          var savedChanges = $this.x1d_1;
          try {
            $this.x1d_1 = changes;
            reportFreeMovableContent($this, 0);
            realizeUps($this);
            var tmp_0;
            if ($this.m1f_1) {
              record($this, get_skipToGroupEndInstance());
              recordEndRoot($this);
              tmp_0 = Unit_getInstance();
            }
            tmp$ret$1 = tmp_0;
            break $l$block;
          }finally {
            $this.x1d_1 = savedChanges;
          }
        }
        tmp = tmp$ret$1;
      }finally {
        tmp0_let.z1g();
      }
      tmp$ret$2 = tmp;
      tmp$ret$3 = tmp$ret$2;
      tmp$ret$4 = tmp$ret$3;
    }
  }
  function recordReaderMoving($this, location) {
    var distance = $this.z1e_1.t1g_1 - $this.l1f_1 | 0;
    $this.l1f_1 = location - distance | 0;
  }
  function recordSlotEditing($this) {
    if ($this.z1e_1.f() > 0) {
      var reader = $this.z1e_1;
      var location = reader.v1g_1;
      if (!($this.o1f_1.u1k(-2) === location)) {
        if (!$this.m1f_1 ? $this.n1f_1 : false) {
          recordSlotTableOperation$default($this, false, get_startRootGroup(), 2, null);
          $this.m1f_1 = true;
        }
        if (location > 0) {
          var anchor = reader.g1i(location);
          $this.o1f_1.i1g(location);
          recordSlotTableOperation$default($this, false, ComposerImpl$recordSlotEditing$lambda(anchor), 2, null);
        }
      }
    }
  }
  function recordEndGroup($this) {
    var location = $this.z1e_1.v1g_1;
    var currentStartedGroup = $this.o1f_1.u1k(-1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = currentStartedGroup <= location;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.recordEndGroup.<anonymous>' call
      tmp$ret$0 = 'Missed recording an endGroup';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    if ($this.o1f_1.u1k(-1) === location) {
      $this.o1f_1.r1i();
      recordSlotTableOperation$default($this, false, get_endGroupInstance(), 2, null);
    }
  }
  function recordEndRoot($this) {
    if ($this.m1f_1) {
      recordSlotTableOperation$default($this, false, get_endGroupInstance(), 2, null);
      $this.m1f_1 = false;
    }
  }
  function finalizeCompose($this) {
    realizeUps($this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = $this.a1e_1.h();
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      tmp$ret$0 = 'Start/end imbalance';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp1_runtimeCheck = $this.o1f_1.h();
    if (!tmp1_runtimeCheck) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      tmp$ret$1 = 'Missed recording an endGroup()';
      var message_0 = tmp$ret$1;
      composeRuntimeError(toString(message_0));
    }
    cleanUpCompose($this);
  }
  function cleanUpCompose($this) {
    $this.b1e_1 = null;
    $this.c1e_1 = 0;
    $this.e1e_1 = 0;
    $this.l1f_1 = 0;
    $this.i1f_1 = 0;
    $this.k1e_1 = false;
    $this.m1f_1 = false;
    $this.o1f_1.g9();
    $this.w1e_1.g9();
    clearUpdatedNodeCounts($this);
  }
  function recordRemoveNode($this, nodeIndex, count) {
    if (count > 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp0_runtimeCheck = nodeIndex >= 0;
      if (!tmp0_runtimeCheck) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.ComposerImpl.recordRemoveNode.<anonymous>' call
        tmp$ret$0 = 'Invalid remove index ' + nodeIndex;
        var message = tmp$ret$0;
        composeRuntimeError(toString(message));
      }
      if ($this.q1f_1 === nodeIndex) {
        var tmp0_this = $this;
        tmp0_this.t1f_1 = tmp0_this.t1f_1 + count | 0;
      } else {
        realizeMovement($this);
        $this.q1f_1 = nodeIndex;
        $this.t1f_1 = count;
      }
    }
  }
  function recordMoveNode($this, from, to, count) {
    if (count > 0) {
      if (($this.t1f_1 > 0 ? $this.r1f_1 === (from - $this.t1f_1 | 0) : false) ? $this.s1f_1 === (to - $this.t1f_1 | 0) : false) {
        var tmp0_this = $this;
        tmp0_this.t1f_1 = tmp0_this.t1f_1 + count | 0;
      } else {
        realizeMovement($this);
        $this.r1f_1 = from;
        $this.s1f_1 = to;
        $this.t1f_1 = count;
      }
    }
  }
  function realizeMovement($this) {
    var count = $this.t1f_1;
    $this.t1f_1 = 0;
    if (count > 0) {
      if ($this.q1f_1 >= 0) {
        var removeIndex = $this.q1f_1;
        $this.q1f_1 = -1;
        recordApplierOperation($this, ComposerImpl$realizeMovement$lambda(removeIndex, count));
      } else {
        var from = $this.r1f_1;
        $this.r1f_1 = -1;
        var to = $this.s1f_1;
        $this.s1f_1 = -1;
        recordApplierOperation($this, ComposerImpl$realizeMovement$lambda_0(from, to, count));
      }
    }
  }
  function CompositionContextHolder(ref) {
    this.v1k_1 = ref;
  }
  CompositionContextHolder.prototype.w1k = function () {
  };
  CompositionContextHolder.prototype.x1k = function () {
    this.v1k_1.vk();
  };
  CompositionContextHolder.prototype.y1k = function () {
    this.v1k_1.vk();
  };
  CompositionContextHolder.$metadata$ = classMeta('CompositionContextHolder', [RememberObserver]);
  function CompositionContextImpl($outer, compoundHashKey, collectingParameterInformation) {
    this.s1d_1 = $outer;
    CompositionContext.call(this);
    this.n1d_1 = compoundHashKey;
    this.o1d_1 = collectingParameterInformation;
    this.p1d_1 = null;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    tmp.q1d_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp_1 = persistentHashMapOf();
    tmp_0.r1d_1 = mutableStateOf$default(tmp_1, null, 2, null);
  }
  CompositionContextImpl.prototype.l1g = function () {
    return this.n1d_1;
  };
  CompositionContextImpl.prototype.j1g = function () {
    return this.o1d_1;
  };
  CompositionContextImpl.prototype.z1k = function (_set____db54di) {
    this.p1d_1 = _set____db54di;
  };
  CompositionContextImpl.prototype.vk = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.q1d_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      var tmp0_safe_receiver = this.p1d_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp0_iterator = this.q1d_1.c();
        while (tmp0_iterator.d()) {
          var composer = tmp0_iterator.e();
          var tmp1_iterator = tmp0_safe_receiver.c();
          while (tmp1_iterator.d()) {
            var table = tmp1_iterator.e();
            table.b4(composer.v1d_1);
          }
        }
        tmp$ret$1 = Unit_getInstance();
      }
      this.q1d_1.g9();
    }
  };
  CompositionContextImpl.prototype.a1l = function (composer) {
    CompositionContext.prototype.a1l.call(this, composer instanceof ComposerImpl ? composer : THROW_CCE());
    this.q1d_1.a(composer);
  };
  CompositionContextImpl.prototype.b1l = function (composer) {
    var tmp0_safe_receiver = this.p1d_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp0_safe_receiver.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.CompositionContextImpl.unregisterComposer.<anonymous>' call
        element.b4((composer instanceof ComposerImpl ? composer : THROW_CCE()).v1d_1);
      }
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.remove' call
    var tmp0_remove = this.q1d_1;
    tmp$ret$0 = (isInterface(tmp0_remove, MutableCollection) ? tmp0_remove : THROW_CCE()).b4(composer);
  };
  CompositionContextImpl.prototype.c1l = function (composition) {
    this.s1d_1.u1d_1.c1l(composition);
  };
  CompositionContextImpl.prototype.d1l = function () {
    return this.s1d_1.u1d_1.d1l();
  };
  CompositionContextImpl.prototype.e1l = function (composition) {
    this.s1d_1.u1d_1.e1l(this.s1d_1.z1d_1);
    this.s1d_1.u1d_1.e1l(composition);
  };
  CompositionContextImpl.prototype.f1g = function () {
    return _get_compositionLocalScope__ulge9q(this);
  };
  CompositionContextImpl.prototype.f1l = function (scope) {
    _set_compositionLocalScope__ya1b9q(this, scope);
  };
  CompositionContextImpl.prototype.k1g = function (table) {
    var tmp0_elvis_lhs = this.p1d_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = HashSet_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.CompositionContextImpl.recordInspectionTable.<anonymous>' call
      this.p1d_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.a(table);
  };
  CompositionContextImpl.prototype.e1g = function () {
    var tmp0_this = this.s1d_1;
    var tmp1 = tmp0_this.t1e_1;
    tmp0_this.t1e_1 = tmp1 + 1 | 0;
  };
  CompositionContextImpl.prototype.m1g = function () {
    var tmp0_this = this.s1d_1;
    var tmp1 = tmp0_this.t1e_1;
    tmp0_this.t1e_1 = tmp1 - 1 | 0;
  };
  CompositionContextImpl.prototype.v1j = function (reference) {
    this.s1d_1.u1d_1.v1j(reference);
  };
  CompositionContextImpl.prototype.g1l = function (reference) {
    this.s1d_1.u1d_1.g1l(reference);
  };
  CompositionContextImpl.prototype.g1k = function (reference) {
    return this.s1d_1.u1d_1.g1k(reference);
  };
  CompositionContextImpl.prototype.s1k = function (reference, data) {
    this.s1d_1.u1d_1.s1k(reference, data);
  };
  CompositionContextImpl.prototype.h1l = function (composition, content) {
    this.s1d_1.u1d_1.h1l(composition, content);
  };
  CompositionContextImpl.$metadata$ = classMeta('CompositionContextImpl', undefined, undefined, undefined, undefined, CompositionContext.prototype);
  function updateCompoundKeyWhenWeEnterGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_1().c1b_1) : false) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, dataKey.t5_1);
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeEnterGroupKeyHash($this, keyHash) {
    var tmp = $this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.rol' call
    var tmp0_rol = $this.i1f_1;
    tmp$ret$0 = rotateLeft(tmp0_rol, 3);
    tmp.i1f_1 = tmp$ret$0 ^ keyHash;
  }
  function updateCompoundKeyWhenWeExitGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_1().c1b_1) : false) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, dataKey.t5_1);
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey) {
    var tmp = $this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.ror' call
    var tmp0_ror = $this.i1f_1 ^ groupKey;
    tmp$ret$0 = rotateRight(tmp0_ror, 3);
    tmp.i1f_1 = tmp$ret$0;
  }
  function doCompose$composable($this, invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !$this.x1e_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>' call
      tmp$ret$0 = 'Reentrant composition is not supported';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.runtime.trace' call
      var token = Trace_getInstance().i1l('Compose:recompose');
      try {
        $this.u1e_1 = currentSnapshot();
        $this.v1e_1 = $this.u1e_1.o1l();
        $this.o1e_1.g9();
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.forEach' call
        var inductionVariable = 0;
        var last = invalidationsRequested.r1l_1;
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
            var tmp = invalidationsRequested.p1l_1[index];
            var tmp0__anonymous__q1qw7t = isObject(tmp) ? tmp : THROW_CCE();
            var tmp_0 = invalidationsRequested.q1l_1[index];
            var tmp1__anonymous__uwfjfc = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
            var tmp0_safe_receiver = tmp0__anonymous__q1qw7t.l1c_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s1l_1;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }
            var location = tmp_1;
            $this.l1e_1.a(new Invalidation(tmp0__anonymous__q1qw7t, location, tmp1__anonymous__uwfjfc));
          }
           while (inductionVariable < last);
        // Inline function 'kotlin.collections.sortBy' call
        var tmp2_sortBy = $this.l1e_1;
        if (tmp2_sortBy.f() > 1) {
          var tmp$ret$1;
          // Inline function 'kotlin.comparisons.compareBy' call
          var tmp_2 = ComposerImpl$doCompose$composable$lambda;
          tmp$ret$1 = new sam$kotlin_Comparator$0(tmp_2);
          sortWith(tmp2_sortBy, tmp$ret$1);
        }
        $this.c1e_1 = 0;
        var complete = false;
        $this.x1e_1 = true;
        var tmp_3;
        try {
          startRoot($this);
          var savedContent = $this.t1l();
          if (!(savedContent === content) ? !(content == null) : false) {
            $this.q1j((content == null ? true : isObject(content)) ? content : THROW_CCE());
          }
          var tmp_4 = ComposerImpl$doCompose$composable$lambda_0($this);
          var tmp_5 = ComposerImpl$doCompose$composable$lambda_1($this);
          observeDerivedStateRecalculations(tmp_4, tmp_5, ComposerImpl$doCompose$composable$lambda_2(content, $this, savedContent));
          endRoot($this);
          complete = true;
          tmp_3 = Unit_getInstance();
        }finally {
          $this.x1e_1 = false;
          $this.l1e_1.g9();
          if (!complete) {
            abortRoot($this);
          }
        }
        tmp$ret$2 = tmp_3;
        break $l$block;
      }finally {
        Trace_getInstance().u1l(token);
      }
    }
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.v1l_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.x = function (a, b) {
    return this.v1l_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.x(a, b);
  };
  sam$kotlin_Comparator$0.$metadata$ = classMeta('sam$kotlin_Comparator$0', [Comparator]);
  function insertMovableContentGuarded$positionToParentOf(slots, applier, index) {
    while (!slots.w1l(index)) {
      slots.l1h();
      if (slots.m1j(slots.f1c_1)) {
        applier.w19();
      }
      slots.b1j();
    }
  }
  function insertMovableContentGuarded$currentNodeIndex(slots) {
    var original = slots.e1c_1;
    var current = slots.f1c_1;
    while (current >= 0 ? !slots.m1j(current) : false) {
      current = slots.f1h(current);
    }
    var index = 0;
    var tmp0 = current;
    current = tmp0 + 1 | 0;
    while (current < original) {
      if (slots.x1l(original, current)) {
        if (slots.m1j(current))
          index = 0;
        var tmp1 = current;
        current = tmp1 + 1 | 0;
      } else {
        index = index + (slots.m1j(current) ? 1 : slots.n1j(current)) | 0;
        current = current + slots.u1i(current) | 0;
      }
    }
    return index;
  }
  function insertMovableContentGuarded$positionToInsert(slots, anchor, applier) {
    var destination = slots.f1k(anchor);
    runtimeCheck(slots.e1c_1 < destination);
    insertMovableContentGuarded$positionToParentOf(slots, applier, destination);
    var nodeIndex = insertMovableContentGuarded$currentNodeIndex(slots);
    while (slots.e1c_1 < destination) {
      if (slots.z1l(destination)) {
        if (slots.y1l()) {
          applier.v19(slots.n1k(slots.e1c_1));
          nodeIndex = 0;
        }
        slots.n1h();
      } else
        nodeIndex = nodeIndex + slots.b1h() | 0;
    }
    runtimeCheck(slots.e1c_1 === destination);
    return nodeIndex;
  }
  function reportFreeMovableContent$reportGroup(this$0, group, needsNodeDelete, nodeIndex) {
    var tmp;
    if (this$0.z1e_1.c1m(group)) {
      var key = this$0.z1e_1.e1h(group);
      var objectKey = this$0.z1e_1.d1h(group);
      var tmp_0;
      var tmp_1;
      if (key === get_movableContentKey()) {
        tmp_1 = objectKey instanceof MovableContent;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var movableContent = objectKey instanceof MovableContent ? objectKey : THROW_CCE();
        var parameter = this$0.z1e_1.b1m(group, 0);
        var anchor = this$0.z1e_1.g1i(group);
        var end = group + this$0.z1e_1.u1i(group) | 0;
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
        var tmp0_fastMap = filterToRange(this$0.l1e_1, group, end);
        // Inline function 'kotlin.contracts.contract' call
        var target = ArrayList_init_$Create$_0(tmp0_fastMap.f());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = tmp0_fastMap.f() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_fastMap.g(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            var tmp$ret$0;
            // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
            tmp$ret$0 = to(item.e1j_1, item.g1j_1);
            var tmp0_plusAssign = tmp$ret$0;
            target.a(tmp0_plusAssign);
          }
           while (inductionVariable <= last);
        tmp$ret$1 = target;
        var invalidations = tmp$ret$1;
        var reference = new MovableContentStateReference(movableContent, parameter, this$0.z1d_1, this$0.v1d_1, anchor, invalidations, currentCompositionLocalScope(this$0, group));
        this$0.u1d_1.g1l(reference);
        recordSlotEditing(this$0);
        record(this$0, ComposerImpl$reportFreeMovableContent$reportGroup$lambda(this$0, reference));
        var tmp_2;
        if (needsNodeDelete) {
          realizeMovement(this$0);
          realizeUps(this$0);
          realizeDowns_0(this$0);
          var nodeCount = this$0.z1e_1.m1j(group) ? 1 : this$0.z1e_1.n1j(group);
          if (nodeCount > 0) {
            recordRemoveNode(this$0, nodeIndex, nodeCount);
          }
          tmp_2 = 0;
        } else {
          tmp_2 = this$0.z1e_1.n1j(group);
        }
        tmp_0 = tmp_2;
      } else {
        if (key === 206 ? equals(objectKey, get_reference()) : false) {
          var tmp_3 = this$0.z1e_1.b1m(group, 0);
          var contextHolder = tmp_3 instanceof CompositionContextHolder ? tmp_3 : null;
          if (!(contextHolder == null)) {
            var compositionContext = contextHolder.v1k_1;
            // Inline function 'kotlin.collections.forEach' call
            var tmp1_forEach = compositionContext.q1d_1;
            var tmp0_iterator = tmp1_forEach.c();
            while (tmp0_iterator.d()) {
              var element = tmp0_iterator.e();
              // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
              reportAllMovableContent(element);
            }
          }
          tmp_0 = this$0.z1e_1.n1j(group);
        } else {
          tmp_0 = this$0.z1e_1.n1j(group);
        }
      }
      tmp = tmp_0;
    } else if (this$0.z1e_1.a1m(group)) {
      var size = this$0.z1e_1.u1i(group);
      var end_0 = group + size | 0;
      var current = group + 1 | 0;
      var runningNodeCount = 0;
      while (current < end_0) {
        var isNode = this$0.z1e_1.m1j(current);
        if (isNode) {
          realizeMovement(this$0);
          recordDown(this$0, this$0.z1e_1.n1k(current));
        }
        runningNodeCount = runningNodeCount + reportFreeMovableContent$reportGroup(this$0, current, isNode ? true : needsNodeDelete, isNode ? 0 : nodeIndex + runningNodeCount | 0) | 0;
        if (isNode) {
          realizeMovement(this$0);
          recordUp(this$0);
        }
        current = current + this$0.z1e_1.u1i(current) | 0;
      }
      tmp = runningNodeCount;
    } else {
      tmp = this$0.z1e_1.n1j(group);
    }
    return tmp;
  }
  function ComposerImpl$createNode$lambda($factory, $groupAnchor, $insertIndex) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      var node = $factory();
      slots.d1m($groupAnchor, node);
      var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
      nodeApplier.x19($insertIndex, node);
      applier.v19(node);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$createNode$lambda_0($groupAnchor, $insertIndex) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      var nodeToInsert = slots.e1m($groupAnchor);
      applier.w19();
      var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
      nodeApplier.y19($insertIndex, nodeToInsert);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$apply$lambda($block, $value) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var tmp = applier.s19();
      $block((tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE(), $value);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$updateValue$lambda($value) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, rememberManager) {
      rememberManager.k1b($value);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$updateValue$lambda_0($value, $groupSlotIndex) {
    return function (_anonymous_parameter_0__qggqh8, slots, rememberManager) {
      var tmp;
      if (!($value == null) ? isInterface($value, RememberObserver) : false) {
        rememberManager.k1b($value);
        tmp = Unit_getInstance();
      }
      var previous = slots.f1m($groupSlotIndex, $value);
      var tmp_0;
      if (!(previous == null) ? isInterface(previous, RememberObserver) : false) {
        rememberManager.l1b(previous);
        tmp_0 = Unit_getInstance();
      } else {
        if (previous instanceof RecomposeScopeImpl) {
          var composition = previous.k1c_1;
          var tmp_1;
          if (!(composition == null)) {
            previous.wn();
            composition.d1d_1 = true;
            tmp_1 = Unit_getInstance();
          }
          tmp_0 = tmp_1;
        }
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordSideEffect$lambda($effect) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, rememberManager) {
      rememberManager.m1b($effect);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$startProviders$lambda($values, $parentScope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.y1a(935231726);
      sourceInformation($composer_0, 'C1894@69916L42:Composer.kt#9igjgp');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(935231726, $changed, -1, 'androidx.compose.runtime.ComposerImpl.startProviders.<anonymous> (Composer.kt:1893)');
        tmp = Unit_getInstance();
      }
      var tmp0 = compositionLocalMapOf$composable($values, $parentScope, $composer_0, 0);
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.d1b();
      return tmp0;
    };
  }
  function ComposerImpl$startReaderGroup$lambda($data) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.g1m($data);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$start$lambda($currentRelativePosition) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.h1m($currentRelativePosition);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$deactivateToEndGroup$lambda$lambda($data, $group, $index) {
    return function (_anonymous_parameter_0__qggqh8, slots, rememberManager) {
      var tmp0_runtimeCheck = equals($data, slots.i1m($group, $index));
      var tmp;
      if (!tmp0_runtimeCheck) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.ComposerImpl.deactivateToEndGroup.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$0 = 'Slot table is out of sync';
        var message = tmp$ret$0;
        composeRuntimeError(toString(message));
      }
      rememberManager.l1b($data);
      slots.f1m($index, Companion_getInstance_1().c1b_1);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$deactivateToEndGroup$lambda$lambda_0($data, $group, $index) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      var tmp0_runtimeCheck = equals($data, slots.i1m($group, $index));
      var tmp;
      if (!tmp0_runtimeCheck) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.ComposerImpl.deactivateToEndGroup.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$0 = 'Slot table is out of sync';
        var message = tmp$ret$0;
        composeRuntimeError(toString(message));
      }
      slots.f1m($index, Companion_getInstance_1().c1b_1);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$deactivateToEndGroup$lambda(this$0, $group) {
    return function (index, data) {
      var tmp0_subject = data;
      var tmp;
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, RememberObserver) : false) {
        this$0.z1e_1.p1i($group);
        recordSlotTableOperation$default(this$0, false, ComposerImpl$deactivateToEndGroup$lambda$lambda(data, $group, index), 2, null);
        tmp = Unit_getInstance();
      } else {
        if (tmp0_subject instanceof RecomposeScopeImpl) {
          var composition = data.k1c_1;
          if (!(composition == null)) {
            composition.d1d_1 = true;
            data.wn();
          }
          this$0.z1e_1.p1i($group);
          recordSlotTableOperation$default(this$0, false, ComposerImpl$deactivateToEndGroup$lambda$lambda_0(data, $group, index), 2, null);
          tmp = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$endRestartGroup$lambda($tmp2_safe_receiver, this$0) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      $tmp2_safe_receiver(this$0.z1d_1);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.j1m(p0, p1);
    };
  }
  function ComposerImpl$invokeMovableContentLambda$lambda($content, $parameter) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C2848@108576L18:Composer.kt#9igjgp');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.l1m()) {
        if (isTraceInProgress()) {
          traceEventStart(694380496, $changed, -1, 'androidx.compose.runtime.ComposerImpl.invokeMovableContentLambda.<anonymous> (Composer.kt:2848)');
        }
        $content.k1m_1($parameter, $composer_0, 0);
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
  function ComposerImpl$insertMovableContentGuarded$lambda($effectiveNodeIndex, $anchor) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      if (isInterface(applier, Applier))
        applier;
      else
        THROW_CCE();
      $effectiveNodeIndex._v = insertMovableContentGuarded$positionToInsert(slots, $anchor, applier);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_0(this$0, $offsetChanges, $tmp0_let, $to) {
    return function () {
      var tmp$ret$1;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
        var savedChanges = this$0.x1d_1;
        try {
          this$0.x1d_1 = $offsetChanges;
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
            var savedReader = this$0.z1e_1;
            var savedCountOverrides = this$0.g1e_1;
            this$0.g1e_1 = null;
            try {
              this$0.z1e_1 = $tmp0_let;
              invokeMovableContentLambda(this$0, $to.x1j_1, $to.d1k_1, $to.y1j_1, true);
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }finally {
              this$0.z1e_1 = savedReader;
              this$0.g1e_1 = savedCountOverrides;
            }
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }finally {
          this$0.x1d_1 = savedChanges;
        }
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_1($effectiveNodeIndex, $offsetChanges) {
    return function (applier, slots, rememberManager) {
      var offsetApplier = $effectiveNodeIndex._v > 0 ? new OffsetApplier(applier, $effectiveNodeIndex._v) : applier;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $offsetChanges.f() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $offsetChanges.g(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(offsetApplier, slots, rememberManager);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_2($effectiveNodeIndex, $nodesToInsert) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var base = $effectiveNodeIndex._v;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $nodesToInsert.f() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $nodesToInsert.g(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (isInterface(applier, Applier))
            applier;
          else
            THROW_CCE();
          applier.y19(base + index | 0, item);
          applier.x19(base + index | 0, item);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_3($resolvedState, this$0, $from, $to) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      var tmp0_elvis_lhs = $resolvedState;
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.u1d_1.g1k($from) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        composeRuntimeError('Could not resolve state for movable content');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var state = tmp;
      var anchors = slots.m1m(1, state.h1k_1, 2);
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$0 = !anchors.h();
      if (tmp$ret$0) {
        var tmp_1 = $to.z1j_1;
        var toComposition = tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = anchors.f() - 1 | 0;
        var tmp_2;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = anchors.g(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var tmp_3 = slots.n1m(item, 0);
            var recomposeScope = tmp_3 instanceof RecomposeScopeImpl ? tmp_3 : null;
            var tmp0_safe_receiver = recomposeScope;
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.o1m(toComposition);
            }
          }
           while (inductionVariable <= last);
          tmp_2 = Unit_getInstance();
        }
        tmp_0 = tmp_2;
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_4(this$0, $to) {
    return function () {
      invokeMovableContentLambda(this$0, $to.x1j_1, $to.d1k_1, $to.y1j_1, true);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_5($effectiveNodeIndex, $offsetChanges) {
    return function (applier, slots, rememberManager) {
      var offsetApplier = $effectiveNodeIndex._v > 0 ? new OffsetApplier(applier, $effectiveNodeIndex._v) : applier;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $offsetChanges.f() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $offsetChanges.g(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(offsetApplier, slots, rememberManager);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_6(applier, slots, _anonymous_parameter_2__qggqfi) {
    if (isInterface(applier, Applier))
      applier;
    else
      THROW_CCE();
    insertMovableContentGuarded$positionToParentOf(slots, applier, 0);
    slots.b1j();
    return Unit_getInstance();
  }
  function ComposerImpl$realizeUps$lambda($count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var tmp;
      if (inductionVariable < $count) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.ComposerImpl.realizeUps.<anonymous>.<anonymous>' call
          applier.w19();
        }
         while (inductionVariable < $count);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeDowns$lambda($nodes) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var inductionVariable = 0;
      var last = $nodes.length - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
          nodeApplier.v19($nodes[index]);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeOperationLocation$lambda($distance) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.p1m($distance);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordInsert$lambda($insertTable, $anchor) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.f1i();
      slots.r1m($insertTable, $anchor.q1m($insertTable));
      slots.c1j();
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordInsert$lambda_0($insertTable, $fixups, $anchor) {
    return function (applier, slots, rememberManager) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = $insertTable.k1h();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var tmp;
      try {
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = $fixups.f() - 1 | 0;
        var tmp_0;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = $fixups.g(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.recordInsert.<anonymous>.<anonymous>.<anonymous>' call
            item(applier, tmp0_let, rememberManager);
          }
           while (inductionVariable <= last);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }finally {
        tmp0_let.z1g();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      slots.f1i();
      slots.r1m($insertTable, $anchor.q1m($insertTable));
      slots.c1j();
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordSlotEditing$lambda($anchor) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.s1m($anchor);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeMovement$lambda($removeIndex, $count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      applier.z19($removeIndex, $count);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeMovement$lambda_0($from, $to, $count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      applier.a1a($from, $to, $count);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$doCompose$composable$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
    tmp$ret$0 = a.f1j_1;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
    tmp$ret$1 = b.f1j_1;
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function ComposerImpl$doCompose$composable$lambda_0(this$0) {
    return function (it) {
      var tmp0_this = this$0;
      var tmp1 = tmp0_this.t1e_1;
      tmp0_this.t1e_1 = tmp1 + 1 | 0;
      return Unit_getInstance();
    };
  }
  function ComposerImpl$doCompose$composable$lambda_1(this$0) {
    return function (it) {
      var tmp0_this = this$0;
      var tmp1 = tmp0_this.t1e_1;
      tmp0_this.t1e_1 = tmp1 - 1 | 0;
      return Unit_getInstance();
    };
  }
  function ComposerImpl$doCompose$composable$lambda_2($content, this$0, $savedContent) {
    return function () {
      var tmp;
      if (!($content == null)) {
        startGroup_0(this$0, 200, get_invocation());
        invokeComposable$composable(this$0, $content);
        endGroup(this$0);
        tmp = Unit_getInstance();
      } else if ((this$0.j1e_1 ? !($savedContent == null) : false) ? !equals($savedContent, Companion_getInstance_1().c1b_1) : false) {
        startGroup_0(this$0, 200, get_invocation());
        invokeComposable$composable(this$0, (!($savedContent == null) ? typeof $savedContent === 'function' : false) ? $savedContent : THROW_CCE());
        endGroup(this$0);
        tmp = Unit_getInstance();
      } else {
        this$0.t1m();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$reportFreeMovableContent$reportGroup$lambda(this$0, $reference) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      releaseMovableGroupAtCurrent(this$0, $reference, slots);
      return Unit_getInstance();
    };
  }
  function ComposerImpl(applier, parentContext, slotTable, abandonSet, changes, lateChanges, composition) {
    this.t1d_1 = applier;
    this.u1d_1 = parentContext;
    this.v1d_1 = slotTable;
    this.w1d_1 = abandonSet;
    this.x1d_1 = changes;
    this.y1d_1 = lateChanges;
    this.z1d_1 = composition;
    this.a1e_1 = new Stack();
    this.b1e_1 = null;
    this.c1e_1 = 0;
    this.d1e_1 = new IntStack();
    this.e1e_1 = 0;
    this.f1e_1 = new IntStack();
    this.g1e_1 = null;
    this.h1e_1 = null;
    this.i1e_1 = false;
    this.j1e_1 = false;
    this.k1e_1 = false;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.l1e_1 = tmp$ret$0;
    this.m1e_1 = new IntStack();
    this.n1e_1 = persistentHashMapOf();
    this.o1e_1 = HashMap_init_$Create$();
    this.p1e_1 = false;
    this.q1e_1 = new IntStack();
    this.r1e_1 = false;
    this.s1e_1 = -1;
    this.t1e_1 = 0;
    this.u1e_1 = currentSnapshot();
    this.v1e_1 = 0;
    this.w1e_1 = new Stack();
    this.x1e_1 = false;
    this.y1e_1 = false;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.v1d_1.c1g();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.reader.<anonymous>' call
    tmp0_also.z1g();
    tmp$ret$1 = tmp0_also;
    tmp_0.z1e_1 = tmp$ret$1;
    this.a1f_1 = new SlotTable();
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp0_also_0 = this.a1f_1.k1h();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.writer.<anonymous>' call
    tmp0_also_0.z1g();
    tmp$ret$2 = tmp0_also_0;
    tmp_1.b1f_1 = tmp$ret$2;
    this.c1f_1 = false;
    this.d1f_1 = null;
    this.e1f_1 = null;
    var tmp_2 = this;
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    var tmp1_read = this.a1f_1;
    var tmp$ret$5;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_read.c1g();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var tmp_3;
    try {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertAnchor.<anonymous>' call
      tmp$ret$3 = tmp0_let.g1i(0);
      tmp_3 = tmp$ret$3;
    }finally {
      tmp0_let.z1g();
    }
    tmp$ret$4 = tmp_3;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp_2.f1f_1 = tmp$ret$6;
    var tmp_4 = this;
    var tmp$ret$7;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$7 = ArrayList_init_$Create$();
    tmp_4.g1f_1 = tmp$ret$7;
    this.h1f_1 = false;
    this.i1f_1 = 0;
    this.j1f_1 = 0;
    this.k1f_1 = new Stack();
    this.l1f_1 = 0;
    this.m1f_1 = false;
    this.n1f_1 = true;
    this.o1f_1 = new IntStack();
    this.p1f_1 = new Stack();
    this.q1f_1 = -1;
    this.r1f_1 = -1;
    this.s1f_1 = -1;
    this.t1f_1 = 0;
  }
  ComposerImpl.prototype.u1m = function () {
    return this.t1d_1;
  };
  ComposerImpl.prototype.v1m = function () {
    return this.t1e_1 > 0;
  };
  ComposerImpl.prototype.w1m = function () {
    return this.a1f_1;
  };
  ComposerImpl.prototype.x1m = function () {
    return this.u1d_1.d1l();
  };
  ComposerImpl.prototype.y1a = function (key) {
    return start(this, key, null, false, null);
  };
  ComposerImpl.prototype.d1b = function () {
    return endGroup(this);
  };
  ComposerImpl.prototype.y1m = function () {
    return start(this, -127, null, false, null);
  };
  ComposerImpl.prototype.z1m = function () {
    endGroup(this);
    var scope = this.a1n();
    if (!(scope == null) ? scope.s1i() : false) {
      scope.b1n(true);
    }
  };
  ComposerImpl.prototype.c1n = function () {
    var tmp;
    if (this.p1e_1) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = this.a1n();
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c1n()) === true;
    }
    return tmp;
  };
  ComposerImpl.prototype.t1j = function (key, dataKey) {
    return start(this, key, dataKey, false, null);
  };
  ComposerImpl.prototype.w1j = function () {
    return endGroup(this);
  };
  ComposerImpl.prototype.d1n = function () {
    this.o1e_1.g9();
  };
  ComposerImpl.prototype.e1n = function () {
    return this.h1f_1;
  };
  ComposerImpl.prototype.l1m = function () {
    var tmp;
    var tmp_0;
    if ((!this.h1f_1 ? !this.r1e_1 : false) ? !this.p1e_1 : false) {
      var tmp0_safe_receiver = this.a1n();
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f1n()) === false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !this.j1e_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  ComposerImpl.prototype.i1b = function () {
    return this.i1f_1;
  };
  ComposerImpl.prototype.vk = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.runtime.trace' call
      var token = Trace_getInstance().i1l('Compose:Composer.dispose');
      try {
        this.u1d_1.b1l(this);
        this.w1e_1.g9();
        this.l1e_1.g9();
        this.x1d_1.g9();
        this.o1e_1.g9();
        this.t1d_1.g9();
        this.y1e_1 = true;
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }finally {
        Trace_getInstance().u1l(token);
      }
    }
  };
  ComposerImpl.prototype.o1h = function () {
    var key = this.h1f_1 ? 125 : this.r1e_1 ? this.z1e_1.b1i() === 125 ? 126 : 125 : this.z1e_1.b1i() === 126 ? 126 : 125;
    start(this, key, null, true, null);
    this.k1e_1 = true;
  };
  ComposerImpl.prototype.g1n = function () {
    start(this, 125, null, true, null);
    this.k1e_1 = true;
  };
  ComposerImpl.prototype.h1n = function (factory) {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.h1f_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.createNode.<anonymous>' call
      tmp$ret$0 = 'createNode() can only be called when inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var insertIndex = this.d1e_1.i1n();
    var groupAnchor = this.b1f_1.g1i(this.b1f_1.f1c_1);
    var tmp0_this = this;
    var tmp1 = tmp0_this.e1e_1;
    tmp0_this.e1e_1 = tmp1 + 1 | 0;
    recordFixup(this, ComposerImpl$createNode$lambda(factory, groupAnchor, insertIndex));
    recordInsertUpFixup(this, ComposerImpl$createNode$lambda_0(groupAnchor, insertIndex));
  };
  ComposerImpl.prototype.j1n = function () {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.h1f_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.useNode.<anonymous>' call
      tmp$ret$0 = 'useNode() called while inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    recordDown(this, _get_node__db0vwp(this.z1e_1, this));
  };
  ComposerImpl.prototype.k1n = function () {
    return end(this, true);
  };
  ComposerImpl.prototype.e1b = function (key, dataKey) {
    if ((this.z1e_1.b1i() === key ? !equals(this.z1e_1.m1h(), dataKey) : false) ? this.s1e_1 < 0 : false) {
      this.s1e_1 = this.z1e_1.t1g_1;
      this.r1e_1 = true;
    }
    start(this, key, null, false, dataKey);
  };
  ComposerImpl.prototype.h1b = function () {
    if (this.r1e_1 ? this.z1e_1.v1g_1 === this.s1e_1 : false) {
      this.s1e_1 = -1;
      this.r1e_1 = false;
    }
    end(this, false);
  };
  ComposerImpl.prototype.l1n = function () {
    this.r1e_1 = false;
  };
  ComposerImpl.prototype.m1n = function () {
    this.r1e_1 = this.s1e_1 >= 0;
  };
  ComposerImpl.prototype.n1n = function (value, block) {
    var operation = ComposerImpl$apply$lambda(block, value);
    if (this.h1f_1) {
      recordFixup(this, operation);
    } else {
      recordApplierOperation(this, operation);
    }
  };
  ComposerImpl.prototype.t1l = function () {
    var tmp;
    if (this.h1f_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance_1().c1b_1;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = this.z1e_1.e();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlot.<anonymous>' call
      tmp$ret$0 = this.r1e_1 ? Companion_getInstance_1().c1b_1 : tmp0_let;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  ComposerImpl.prototype.z1a = function (value) {
    var tmp;
    if (!equals(this.t1l(), value)) {
      this.q1j(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  ComposerImpl.prototype.f1b = function (value) {
    var next = this.t1l();
    if (!(next == null) ? typeof next === 'boolean' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.q1j(value);
    return true;
  };
  ComposerImpl.prototype.o1n = function (value) {
    var next = this.t1l();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.q1j(value);
    return true;
  };
  ComposerImpl.prototype.p1n = function (value) {
    var next = this.t1l();
    if (next instanceof Long) {
      var nextPrimitive = next;
      if (value.equals(nextPrimitive))
        return false;
    }
    this.q1j(value);
    return true;
  };
  ComposerImpl.prototype.q1n = function (value) {
    var next = this.t1l();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.q1j(value);
    return true;
  };
  ComposerImpl.prototype.q1j = function (value) {
    if (this.h1f_1) {
      this.b1f_1.q1k(value);
      if (!(value == null) ? isInterface(value, RememberObserver) : false) {
        record(this, ComposerImpl$updateValue$lambda(value));
        this.w1d_1.a(value);
      }
    } else {
      var groupSlotIndex = this.z1e_1.r1n() - 1 | 0;
      if (!(value == null) ? isInterface(value, RememberObserver) : false) {
        this.w1d_1.a(value);
      }
      recordSlotTableOperation(this, true, ComposerImpl$updateValue$lambda_0(value, groupSlotIndex));
    }
  };
  ComposerImpl.prototype.s1n = function (effect) {
    record(this, ComposerImpl$recordSideEffect$lambda(effect));
  };
  ComposerImpl.prototype.t1n = function (values) {
    var parentScope = currentCompositionLocalScope$default(this, null, 2, null);
    startGroup_0(this, 201, get_provider());
    startGroup_0(this, 203, get_providerValues());
    var currentProviders = invokeComposableForResult$composable(this, ComposerImpl$startProviders$lambda(values, parentScope));
    endGroup(this);
    var providers;
    var invalid;
    if (this.h1f_1) {
      providers = updateProviderMapGroup(this, parentScope, currentProviders);
      invalid = false;
      this.c1f_1 = true;
    } else {
      var tmp = this.z1e_1.u1n(0);
      var oldScope = (!(tmp == null) ? isInterface(tmp, PersistentMap) : false) ? tmp : THROW_CCE();
      var tmp_0 = this.z1e_1.u1n(1);
      var oldValues = (!(tmp_0 == null) ? isInterface(tmp_0, PersistentMap) : false) ? tmp_0 : THROW_CCE();
      if (!this.l1m() ? true : !equals(oldValues, currentProviders)) {
        providers = updateProviderMapGroup(this, parentScope, currentProviders);
        invalid = !equals(providers, oldScope);
      } else {
        skipGroup(this);
        providers = oldScope;
        invalid = false;
      }
    }
    if (invalid ? !this.h1f_1 : false) {
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = this.o1e_1;
      var tmp1_set = this.z1e_1.t1g_1;
      tmp0_set.q(tmp1_set, providers);
    }
    this.q1e_1.i1g(asInt(this.p1e_1));
    this.p1e_1 = invalid;
    this.d1f_1 = providers;
    start(this, 202, get_compositionLocalMap(), false, providers);
  };
  ComposerImpl.prototype.v1n = function () {
    endGroup(this);
    endGroup(this);
    this.p1e_1 = asBool(this.q1e_1.r1i());
    this.d1f_1 = null;
  };
  ComposerImpl.prototype.w1n = function (key) {
    return resolveCompositionLocal(this, key, currentCompositionLocalScope$default(this, null, 2, null));
  };
  ComposerImpl.prototype.j1b = function () {
    startGroup_0(this, 206, get_reference());
    if (this.h1f_1) {
      var tmp = this.b1f_1;
      tmp.u1j(0, 1, null);
    }
    var tmp_0 = this.t1l();
    var holder = tmp_0 instanceof CompositionContextHolder ? tmp_0 : null;
    if (holder == null) {
      holder = new CompositionContextHolder(new CompositionContextImpl(this, this.i1f_1, this.i1e_1));
      this.q1j(holder);
    }
    var tmp_1 = holder.v1k_1;
    tmp_1.f1l(currentCompositionLocalScope$default(this, null, 2, null));
    endGroup(this);
    return holder.v1k_1;
  };
  ComposerImpl.prototype.a1n = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.w1e_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.ComposerImpl.<get-currentRecomposeScope>.<anonymous>' call
    tmp$ret$0 = (this.t1e_1 === 0 ? tmp0_let.o1k() : false) ? tmp0_let.i1n() : null;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ComposerImpl.prototype.j1k = function (scope, instance) {
    var tmp0_elvis_lhs = scope.l1c_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchor = tmp;
    var location = anchor.q1m(this.v1d_1);
    if (this.x1e_1 ? location >= this.z1e_1.t1g_1 : false) {
      insertIfMissing(this.l1e_1, location, scope, instance);
      return true;
    }
    return false;
  };
  ComposerImpl.prototype.t1m = function () {
    if (this.l1e_1.h()) {
      skipGroup(this);
    } else {
      var reader = this.z1e_1;
      var key = reader.b1i();
      var dataKey = reader.d1i();
      var aux = reader.m1h();
      updateCompoundKeyWhenWeEnterGroup(this, key, dataKey, aux);
      startReaderGroup(this, reader.y1l(), null);
      recomposeToGroupEnd(this);
      reader.z1i();
      updateCompoundKeyWhenWeExitGroup(this, key, dataKey, aux);
    }
  };
  ComposerImpl.prototype.l1h = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.e1e_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.skipToGroupEnd.<anonymous>' call
      tmp$ret$0 = 'No nodes can be emitted before calling skipAndEndGroup';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var tmp0_safe_receiver = this.a1n();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.x1n();
    }
    if (this.l1e_1.h()) {
      skipReaderToGroupEnd(this);
    } else {
      recomposeToGroupEnd(this);
    }
  };
  ComposerImpl.prototype.g1b = function (changed) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.e1e_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.deactivateToEndGroup.<anonymous>' call
      tmp$ret$0 = 'No nodes can be emitted before calling dactivateToEndGroup';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    if (!this.h1f_1) {
      if (!changed) {
        skipReaderToGroupEnd(this);
        return Unit_getInstance();
      }
      var start = this.z1e_1.t1g_1;
      var end = this.z1e_1.u1g_1;
      var inductionVariable = start;
      if (inductionVariable < end)
        do {
          var group = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = this.z1e_1;
          tmp.y1n(group, ComposerImpl$deactivateToEndGroup$lambda(this, group));
        }
         while (inductionVariable < end);
      removeRange(this.l1e_1, start, end);
      this.z1e_1.p1i(start);
      this.z1e_1.l1h();
    }
  };
  ComposerImpl.prototype.z1n = function (key) {
    start(this, key, null, false, null);
    addRecomposeScope(this);
    return this;
  };
  ComposerImpl.prototype.a1o = function () {
    var scope = this.w1e_1.o1k() ? this.w1e_1.r1i() : null;
    var tmp0_safe_receiver = scope;
    if (tmp0_safe_receiver == null) {
    } else {
      tmp0_safe_receiver.r1j(false);
    }
    var tmp1_safe_receiver = scope;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.b1o(this.v1e_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      record(this, ComposerImpl$endRestartGroup$lambda(tmp2_safe_receiver, this));
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp;
    if ((!(scope == null) ? !scope.d1o() : false) ? scope.s1i() ? true : this.i1e_1 : false) {
      if (scope.l1c_1 == null) {
        var tmp_0 = scope;
        var tmp_1;
        if (this.h1f_1) {
          tmp_1 = this.b1f_1.g1i(this.b1f_1.f1c_1);
        } else {
          tmp_1 = this.z1e_1.g1i(this.z1e_1.v1g_1);
        }
        tmp_0.l1c_1 = tmp_1;
      }
      scope.c1o(false);
      tmp = scope;
    } else {
      tmp = null;
    }
    var result = tmp;
    end(this, false);
    return result;
  };
  ComposerImpl.prototype.e1o = function (references) {
    var completed = false;
    try {
      insertMovableContentGuarded(this, references);
      completed = true;
    }finally {
      if (completed) {
        cleanUpCompose(this);
      } else {
        abortRoot(this);
      }
    }
  };
  ComposerImpl.prototype.f1o = function (sourceInformation) {
    if (this.h1f_1) {
      this.b1f_1.g1o(sourceInformation);
    }
  };
  ComposerImpl.prototype.h1o = function (key, sourceInformation) {
    start(this, key, null, false, sourceInformation);
  };
  ComposerImpl.prototype.i1o = function () {
    end(this, false);
  };
  ComposerImpl.prototype.j1o = function (block) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.x1e_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.prepareCompose.<anonymous>' call
      tmp$ret$0 = 'Preparing a composition while composing is not supported';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.x1e_1 = true;
    try {
      block();
    }finally {
      this.x1e_1 = false;
    }
  };
  ComposerImpl.prototype.k1o = function (invalidationsRequested) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.x1d_1.h();
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.recompose.<anonymous>' call
      tmp$ret$0 = 'Expected applyChanges() to have been called';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var tmp;
    var tmp_0;
    if (invalidationsRequested.o1k()) {
      tmp_0 = true;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp1_isNotEmpty = this.l1e_1;
      tmp$ret$1 = !tmp1_isNotEmpty.h();
      tmp_0 = tmp$ret$1;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.j1e_1;
    }
    if (tmp) {
      doCompose$composable(this, invalidationsRequested, null);
      var tmp$ret$2;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp2_isNotEmpty = this.x1d_1;
      tmp$ret$2 = !tmp2_isNotEmpty.h();
      return tmp$ret$2;
    }
    return false;
  };
  ComposerImpl.prototype.l1o = function () {
    return this.a1n();
  };
  ComposerImpl.prototype.a1b = function () {
    return this.t1l();
  };
  ComposerImpl.prototype.b1b = function (value) {
    return this.q1j(value);
  };
  ComposerImpl.prototype.m1o = function (scope) {
    var tmp0_safe_receiver = scope instanceof RecomposeScopeImpl ? scope : null;
    if (tmp0_safe_receiver == null) {
    } else {
      tmp0_safe_receiver.n1o(true);
    }
  };
  ComposerImpl.prototype.o1o = function (invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.x1d_1.h();
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.composeContent$composable.<anonymous>' call
      tmp$ret$0 = 'Expected applyChanges() to have been called';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    doCompose$composable(this, invalidationsRequested, content);
  };
  ComposerImpl.$metadata$ = classMeta('ComposerImpl', [Composer]);
  function Composer$Companion$Empty$1() {
  }
  Composer$Companion$Empty$1.prototype.toString = function () {
    return 'Empty';
  };
  Composer$Companion$Empty$1.$metadata$ = classMeta();
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    tmp.c1b_1 = new Composer$Companion$Empty$1();
  }
  Companion.prototype.p1o = function () {
    return this.c1b_1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Composer() {
  }
  Composer.$metadata$ = interfaceMeta('Composer');
  var InvalidationResult_IGNORED_instance;
  var InvalidationResult_SCHEDULED_instance;
  var InvalidationResult_DEFERRED_instance;
  var InvalidationResult_IMMINENT_instance;
  var InvalidationResult_entriesInitialized;
  function InvalidationResult_initEntries() {
    if (InvalidationResult_entriesInitialized)
      return Unit_getInstance();
    InvalidationResult_entriesInitialized = true;
    InvalidationResult_IGNORED_instance = new InvalidationResult('IGNORED', 0);
    InvalidationResult_SCHEDULED_instance = new InvalidationResult('SCHEDULED', 1);
    InvalidationResult_DEFERRED_instance = new InvalidationResult('DEFERRED', 2);
    InvalidationResult_IMMINENT_instance = new InvalidationResult('IMMINENT', 3);
  }
  function InvalidationResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  InvalidationResult.$metadata$ = classMeta('InvalidationResult', undefined, undefined, undefined, undefined, Enum.prototype);
  function composeRuntimeError(message) {
    init_properties_Composer_kt_de8r5y();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function MovableContentStateReference(content, parameter, composition, slotTable, anchor, invalidations, locals) {
    this.x1j_1 = content;
    this.y1j_1 = parameter;
    this.z1j_1 = composition;
    this.a1k_1 = slotTable;
    this.b1k_1 = anchor;
    this.c1k_1 = invalidations;
    this.d1k_1 = locals;
    this.e1k_1 = 8;
  }
  MovableContentStateReference.prototype.q1o = function () {
    return this.x1j_1;
  };
  MovableContentStateReference.prototype.r1o = function () {
    return this.y1j_1;
  };
  MovableContentStateReference.prototype.s1o = function () {
    return this.z1j_1;
  };
  MovableContentStateReference.prototype.t1o = function () {
    return this.a1k_1;
  };
  MovableContentStateReference.prototype.u1o = function () {
    return this.b1k_1;
  };
  MovableContentStateReference.prototype.v1o = function () {
    return this.c1k_1;
  };
  MovableContentStateReference.prototype.w1o = function () {
    return this.d1k_1;
  };
  MovableContentStateReference.$metadata$ = classMeta('MovableContentStateReference');
  function runtimeCheck(value) {
    init_properties_Composer_kt_de8r5y();
    var tmp;
    if (!value) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.runtimeCheck.<anonymous>' call
      tmp$ret$0 = 'Check failed';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    return tmp;
  }
  function MovableContentState(slotTable) {
    this.h1k_1 = slotTable;
    this.i1k_1 = 8;
  }
  MovableContentState.prototype.t1o = function () {
    return this.h1k_1;
  };
  MovableContentState.$metadata$ = classMeta('MovableContentState');
  function sourceInformation(composer, sourceInformation) {
    init_properties_Composer_kt_de8r5y();
    composer.f1o(sourceInformation);
  }
  function isTraceInProgress() {
    init_properties_Composer_kt_de8r5y();
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = get_compositionTracer();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.isTraceInProgress.<anonymous>' call
    tmp$ret$0 = !(tmp0_let == null) ? tmp0_let.x1o() : false;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function traceEventStart(key, dirty1, dirty2, info) {
    init_properties_Composer_kt_de8r5y();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1o(key, dirty1, dirty2, info);
    }
  }
  function traceEventEnd() {
    init_properties_Composer_kt_de8r5y();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1o();
    }
  }
  function sourceInformationMarkerStart(composer, key, sourceInformation) {
    init_properties_Composer_kt_de8r5y();
    composer.h1o(key, sourceInformation);
  }
  function sourceInformationMarkerEnd(composer) {
    init_properties_Composer_kt_de8r5y();
    composer.i1o();
  }
  function ProvidedValue(compositionLocal, value, canOverride) {
    this.a1p_1 = compositionLocal;
    this.b1p_1 = value;
    this.c1p_1 = canOverride;
    this.d1p_1 = 0;
  }
  ProvidedValue.prototype.e1p = function () {
    return this.a1p_1;
  };
  ProvidedValue.prototype.i2 = function () {
    return this.b1p_1;
  };
  ProvidedValue.prototype.f1p = function () {
    return this.c1p_1;
  };
  ProvidedValue.$metadata$ = classMeta('ProvidedValue');
  function ScopeUpdateScope() {
  }
  ScopeUpdateScope.$metadata$ = interfaceMeta('ScopeUpdateScope');
  function MovableContent() {
  }
  MovableContent.$metadata$ = classMeta('MovableContent');
  function ComposeRuntimeError(message) {
    IllegalStateException_init_$Init$(this);
    this.h1p_1 = message;
    captureStack(this, ComposeRuntimeError);
  }
  ComposeRuntimeError.prototype.r1 = function () {
    return this.h1p_1;
  };
  ComposeRuntimeError.$metadata$ = classMeta('ComposeRuntimeError', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  Object.defineProperty(ComposeRuntimeError.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.r1();
    }
  });
  function runtimeCheck_0(value, lazyMessage) {
    init_properties_Composer_kt_de8r5y();
    if (!value) {
      var message = lazyMessage();
      composeRuntimeError(toString(message));
    }
  }
  function Pending$keyMap$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = multiMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Pending.keyMap$delegate.<anonymous>.<anonymous>' call
      var inductionVariable = 0;
      var last = this$0.t1h_1.f();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var keyInfo = this$0.t1h_1.g(index);
          put(tmp0_also, get_joinedKey(keyInfo), keyInfo);
        }
         while (inductionVariable < last);
      tmp$ret$0 = tmp0_also;
      return tmp$ret$0;
    };
  }
  function Pending(keyInfos, startIndex) {
    this.t1h_1 = keyInfos;
    this.u1h_1 = startIndex;
    this.v1h_1 = 0;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.u1h_1 >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.Pending.<anonymous>' call
      tmp$ret$0 = 'Invalid start index';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp.w1h_1 = tmp$ret$1;
    var tmp_0 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.Pending.groupInfos.<anonymous>' call
    var runningNodeIndex = 0;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp$ret$2 = HashMap_init_$Create$();
    var result = tmp$ret$2;
    var inductionVariable = 0;
    var last = this.t1h_1.f();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keyInfo = this.t1h_1.g(index);
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = keyInfo.j1i_1;
        var tmp1_set = new GroupInfo(index, runningNodeIndex, keyInfo.k1i_1);
        result.q(tmp0_set, tmp1_set);
        runningNodeIndex = runningNodeIndex + keyInfo.k1i_1 | 0;
      }
       while (inductionVariable < last);
    tmp$ret$3 = result;
    tmp$ret$4 = tmp$ret$3;
    tmp_0.x1h_1 = tmp$ret$4;
    var tmp_1 = this;
    tmp_1.y1h_1 = lazy(Pending$keyMap$delegate$lambda(this));
  }
  Pending.prototype.i1p = function () {
    return this.t1h_1;
  };
  Pending.prototype.j1p = function () {
    return this.u1h_1;
  };
  Pending.prototype.k1p = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = keyMap$factory();
    tmp$ret$0 = this.y1h_1.i2();
    return tmp$ret$0;
  };
  Pending.prototype.e1i = function (key, dataKey) {
    var joinedKey = !(dataKey == null) ? new JoinedKey(key, dataKey) : key;
    return pop(this.k1p(), joinedKey);
  };
  Pending.prototype.a1i = function (keyInfo) {
    return this.w1h_1.a(keyInfo);
  };
  Pending.prototype.s1i = function () {
    return this.w1h_1;
  };
  Pending.prototype.o1i = function (from, to) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_forEach = this.x1h_1.x2();
      var tmp0_iterator = tmp0_forEach.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position = element.l1p_1;
        if (position === from)
          element.l1p_1 = to;
        else if (to <= position ? position < from : false)
          element.l1p_1 = position + 1 | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp1_forEach = this.x1h_1.x2();
      var tmp0_iterator_0 = tmp1_forEach.c();
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position_0 = element_0.l1p_1;
        if (position_0 === from)
          element_0.l1p_1 = to;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.l1p_1 = position_0 - 1 | 0;
      }
    }
  };
  Pending.prototype.w1i = function (from, to, count) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_forEach = this.x1h_1.x2();
      var tmp0_iterator = tmp0_forEach.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position = element.m1p_1;
        if (from <= position ? position < (from + count | 0) : false)
          element.m1p_1 = to + (position - from | 0) | 0;
        else if (to <= position ? position < from : false)
          element.m1p_1 = position + count | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp1_forEach = this.x1h_1.x2();
      var tmp0_iterator_0 = tmp1_forEach.c();
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position_0 = element_0.m1p_1;
        if (from <= position_0 ? position_0 < (from + count | 0) : false)
          element_0.m1p_1 = to + (position_0 - from | 0) | 0;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.m1p_1 = position_0 - count | 0;
      }
    }
  };
  Pending.prototype.z1h = function (keyInfo, insertIndex) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.x1h_1;
    var tmp1_set = keyInfo.j1i_1;
    var tmp2_set = new GroupInfo(-1, insertIndex, 0);
    tmp0_set.q(tmp1_set, tmp2_set);
  };
  Pending.prototype.t1i = function (group, newCount) {
    var groupInfo = this.x1h_1.v(group);
    if (!(groupInfo == null)) {
      var index = groupInfo.m1p_1;
      var difference = newCount - groupInfo.n1p_1 | 0;
      groupInfo.n1p_1 = newCount;
      if (!(difference === 0)) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_forEach = this.x1h_1.x2();
        var tmp0_iterator = tmp0_forEach.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'androidx.compose.runtime.Pending.updateNodeCount.<anonymous>' call
          if (element.m1p_1 >= index ? !equals(element, groupInfo) : false) {
            var newIndex = element.m1p_1 + difference | 0;
            if (newIndex >= 0)
              element.m1p_1 = newIndex;
          }
        }
      }
      return true;
    }
    return false;
  };
  Pending.prototype.n1i = function (keyInfo) {
    var tmp0_safe_receiver = this.x1h_1.v(keyInfo.j1i_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l1p_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  Pending.prototype.m1i = function (keyInfo) {
    var tmp0_safe_receiver = this.x1h_1.v(keyInfo.j1i_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m1p_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  Pending.prototype.v1i = function (keyInfo) {
    var tmp0_safe_receiver = this.x1h_1.v(keyInfo.j1i_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1p_1;
    return tmp1_elvis_lhs == null ? keyInfo.k1i_1 : tmp1_elvis_lhs;
  };
  Pending.$metadata$ = classMeta('Pending');
  function Invalidation(scope, location, instances) {
    this.e1j_1 = scope;
    this.f1j_1 = location;
    this.g1j_1 = instances;
  }
  Invalidation.prototype.o1p = function () {
    return this.e1j_1;
  };
  Invalidation.prototype.p1p = function () {
    return this.f1j_1;
  };
  Invalidation.prototype.q1p = function () {
    return this.g1j_1;
  };
  Invalidation.prototype.k1j = function () {
    return this.e1j_1.r1p(this.g1j_1);
  };
  Invalidation.$metadata$ = classMeta('Invalidation');
  function asInt(_this__u8e3s4) {
    init_properties_Composer_kt_de8r5y();
    return _this__u8e3s4 ? 1 : 0;
  }
  function mutate(_this__u8e3s4, mutator) {
    init_properties_Composer_kt_de8r5y();
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = _this__u8e3s4.g1h();
    // Inline function 'kotlin.contracts.contract' call
    mutator(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.h1h();
  }
  function compositionLocalMapOf$composable(values, parentScope, $composer, $changed) {
    init_properties_Composer_kt_de8r5y();
    var $composer_0 = $composer;
    $composer_0.y1a(692276709);
    sourceInformation($composer_0, 'C(compositionLocalMapOf$composable)P(1):Composer.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(692276709, $changed, -1, 'androidx.compose.runtime.compositionLocalMapOf$composable (Composer.kt:307)');
    }
    var result = persistentHashMapOf();
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.mutate' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = result.g1h();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.compositionLocalMapOf$composable.<anonymous>' call
    var indexedObject = values;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var provided = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      $composer_0.y1a(1391442818);
      sourceInformation($composer_0, '*317@11596L24');
      if (provided.c1p_1 ? true : !contains_0(parentScope, provided.a1p_1)) {
        // Inline function 'kotlin.collections.set' call
        var tmp = provided.a1p_1;
        var tmp0_set = tmp instanceof CompositionLocal ? tmp : THROW_CCE();
        var tmp1_set = provided.a1p_1.s1p(provided.b1p_1, $composer_0, 0);
        tmp0_apply.q(tmp0_set, tmp1_set);
      }
      $composer_0.d1b();
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.h1h();
    var tmp1_group = tmp$ret$1;
    var tmp0 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0;
  }
  function asBool(_this__u8e3s4) {
    init_properties_Composer_kt_de8r5y();
    return !(_this__u8e3s4 === 0);
  }
  function contains_0(_this__u8e3s4, key) {
    init_properties_Composer_kt_de8r5y();
    return _this__u8e3s4.q2(key instanceof CompositionLocal ? key : THROW_CCE());
  }
  function getValueOf(_this__u8e3s4, key) {
    init_properties_Composer_kt_de8r5y();
    var tmp0_safe_receiver = _this__u8e3s4.v(key instanceof CompositionLocal ? key : THROW_CCE());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i2();
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function removeRange(_this__u8e3s4, start, end) {
    init_properties_Composer_kt_de8r5y();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.f()) {
      var validation = _this__u8e3s4.g(index);
      if (validation.f1j_1 < end) {
        _this__u8e3s4.c4(index);
      } else
        break $l$loop;
    }
  }
  function firstInRange(_this__u8e3s4, start, end) {
    init_properties_Composer_kt_de8r5y();
    var index = findInsertLocation(_this__u8e3s4, start);
    if (index < _this__u8e3s4.f()) {
      var firstInvalidation = _this__u8e3s4.g(index);
      if (firstInvalidation.f1j_1 < end)
        return firstInvalidation;
    }
    return null;
  }
  function removeLocation(_this__u8e3s4, location) {
    init_properties_Composer_kt_de8r5y();
    var index = findLocation(_this__u8e3s4, location);
    return index >= 0 ? _this__u8e3s4.c4(index) : null;
  }
  function nearestCommonRootOf(_this__u8e3s4, a, b, common) {
    init_properties_Composer_kt_de8r5y();
    if (a === b)
      return a;
    if (a === common ? true : b === common)
      return common;
    if (_this__u8e3s4.f1h(a) === b)
      return b;
    if (_this__u8e3s4.f1h(b) === a)
      return a;
    if (_this__u8e3s4.f1h(a) === _this__u8e3s4.f1h(b))
      return _this__u8e3s4.f1h(a);
    var currentA = a;
    var currentB = b;
    var aDistance = distanceFrom(_this__u8e3s4, a, common);
    var bDistance = distanceFrom(_this__u8e3s4, b, common);
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = aDistance - bDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentA = _this__u8e3s4.f1h(currentA);
      }
       while (inductionVariable < tmp0_repeat);
    // Inline function 'kotlin.repeat' call
    var tmp1_repeat = bDistance - aDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < tmp1_repeat)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentB = _this__u8e3s4.f1h(currentB);
      }
       while (inductionVariable_0 < tmp1_repeat);
    while (!(currentA === currentB)) {
      currentA = _this__u8e3s4.f1h(currentA);
      currentB = _this__u8e3s4.f1h(currentB);
    }
    return currentA;
  }
  function get_reuseKey() {
    return reuseKey;
  }
  var reuseKey;
  function insertIfMissing(_this__u8e3s4, location, scope, instance) {
    init_properties_Composer_kt_de8r5y();
    var index = findLocation(_this__u8e3s4, location);
    if (index < 0) {
      var tmp = -(index + 1 | 0) | 0;
      var tmp0_safe_receiver = instance;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>.<anonymous>' call
        tmp0_also.t1p(tmp0_safe_receiver);
        tmp$ret$0 = tmp0_also;
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp_0 = tmp$ret$2;
      }
      _this__u8e3s4.t9(tmp, new Invalidation(scope, location, tmp_0));
    } else {
      if (instance == null) {
        _this__u8e3s4.g(index).g1j_1 = null;
      } else {
        var tmp1_safe_receiver = _this__u8e3s4.g(index).g1j_1;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver.t1p(instance);
      }
    }
  }
  function collectNodesFrom(_this__u8e3s4, anchor) {
    init_properties_Composer_kt_de8r5y();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = _this__u8e3s4.c1g();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var tmp;
    try {
      var index = _this__u8e3s4.f1k(anchor);
      collectNodesFrom$collectFromGroup(tmp0_let, result, index);
      tmp = Unit_getInstance();
    }finally {
      tmp0_let.z1g();
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return result;
  }
  function filterToRange(_this__u8e3s4, start, end) {
    init_properties_Composer_kt_de8r5y();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.f()) {
      var invalidation = _this__u8e3s4.g(index);
      if (invalidation.f1j_1 < end) {
        result.a(invalidation);
      } else
        break $l$loop;
      var tmp0 = index;
      index = tmp0 + 1 | 0;
    }
    return result;
  }
  function GroupInfo(slotIndex, nodeIndex, nodeCount) {
    this.l1p_1 = slotIndex;
    this.m1p_1 = nodeIndex;
    this.n1p_1 = nodeCount;
  }
  GroupInfo.prototype.u1p = function (_set____db54di) {
    this.l1p_1 = _set____db54di;
  };
  GroupInfo.prototype.v1p = function () {
    return this.l1p_1;
  };
  GroupInfo.prototype.w1p = function (_set____db54di) {
    this.m1p_1 = _set____db54di;
  };
  GroupInfo.prototype.x1p = function () {
    return this.m1p_1;
  };
  GroupInfo.$metadata$ = classMeta('GroupInfo');
  function put(_this__u8e3s4, key, value) {
    init_properties_Composer_kt_de8r5y();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.v(key);
    var tmp;
    if (value_0 == null) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.put.<anonymous>' call
      tmp$ret$0 = LinkedHashSet_init_$Create$();
      var answer = tmp$ret$0;
      _this__u8e3s4.q(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    tmp$ret$1 = tmp;
    return tmp$ret$1.a(value);
  }
  function get_joinedKey(_this__u8e3s4) {
    init_properties_Composer_kt_de8r5y();
    return !(_this__u8e3s4.i1i_1 == null) ? new JoinedKey(_this__u8e3s4.h1i_1, _this__u8e3s4.i1i_1) : _this__u8e3s4.h1i_1;
  }
  function multiMap() {
    init_properties_Composer_kt_de8r5y();
    return HashMap_init_$Create$();
  }
  function pop(_this__u8e3s4, key) {
    init_properties_Composer_kt_de8r5y();
    var tmp0_safe_receiver = _this__u8e3s4.v(key);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.pop.<anonymous>' call
      remove(_this__u8e3s4, key, tmp1_safe_receiver);
      tmp$ret$0 = tmp1_safe_receiver;
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function findInsertLocation(_this__u8e3s4, location) {
    init_properties_Composer_kt_de8r5y();
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = findLocation(_this__u8e3s4, location);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.findInsertLocation.<anonymous>' call
    tmp$ret$0 = tmp0_let < 0 ? -(tmp0_let + 1 | 0) | 0 : tmp0_let;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function findLocation(_this__u8e3s4, location) {
    init_properties_Composer_kt_de8r5y();
    var low = 0;
    var high = _this__u8e3s4.f() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.g(mid);
      var cmp = compareTo(midVal.f1j_1, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function distanceFrom(_this__u8e3s4, index, root) {
    init_properties_Composer_kt_de8r5y();
    var count = 0;
    var current = index;
    while (current > 0 ? !(current === root) : false) {
      current = _this__u8e3s4.f1h(current);
      var tmp0 = count;
      count = tmp0 + 1 | 0;
    }
    return count;
  }
  function remove(_this__u8e3s4, key, value) {
    init_properties_Composer_kt_de8r5y();
    var tmp0_safe_receiver = _this__u8e3s4.v(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.b4(value);
      var tmp_0;
      if (tmp0_safe_receiver.h()) {
        _this__u8e3s4.k3(key);
        tmp_0 = Unit_getInstance();
      }
      tmp$ret$0 = tmp_0;
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function cache(_this__u8e3s4, invalid, block) {
    init_properties_Composer_kt_de8r5y();
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = _this__u8e3s4.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (invalid ? true : tmp0_let === Companion_getInstance_1().c1b_1) {
      var value = block();
      _this__u8e3s4.b1b(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    var tmp_0 = tmp$ret$1;
    return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
  }
  function _Updater___init__impl__rbfxm8(composer) {
    return composer;
  }
  function _Updater___get_composer__impl__9ty7av($this) {
    return $this;
  }
  function Updater__set_impl_v7kwss($this, value, block) {
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = _Updater___get_composer__impl__9ty7av($this);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (tmp0_with.e1n() ? true : !equals(tmp0_with.a1b(), value)) {
      tmp0_with.b1b(value);
      _Updater___get_composer__impl__9ty7av($this).n1n(value, block);
      tmp = Unit_getInstance();
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  }
  function Updater__toString_impl_xbgnns($this) {
    return 'Updater(composer=' + $this + ')';
  }
  function Updater__hashCode_impl_fyhhih($this) {
    return hashCode($this);
  }
  function Updater__equals_impl_pu56kb($this, other) {
    if (!(other instanceof Updater))
      return false;
    var tmp0_other_with_cast = other instanceof Updater ? other.y1p_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Updater(composer) {
    this.y1p_1 = composer;
  }
  Updater.prototype.toString = function () {
    return Updater__toString_impl_xbgnns(this.y1p_1);
  };
  Updater.prototype.hashCode = function () {
    return Updater__hashCode_impl_fyhhih(this.y1p_1);
  };
  Updater.prototype.equals = function (other) {
    return Updater__equals_impl_pu56kb(this.y1p_1, other);
  };
  Updater.$metadata$ = classMeta('Updater');
  function _SkippableUpdater___init__impl__4ft0t9(composer) {
    return composer;
  }
  function _SkippableUpdater___get_composer__impl__6t7yne($this) {
    return $this;
  }
  function SkippableUpdater__update_impl_yrdzqy($this, block) {
    _SkippableUpdater___get_composer__impl__6t7yne($this).y1a(509942095);
    block(new Updater(_Updater___init__impl__rbfxm8(_SkippableUpdater___get_composer__impl__6t7yne($this))));
    _SkippableUpdater___get_composer__impl__6t7yne($this).d1b();
  }
  function SkippableUpdater__toString_impl_9wisn1($this) {
    return 'SkippableUpdater(composer=' + $this + ')';
  }
  function SkippableUpdater__hashCode_impl_vnopfw($this) {
    return hashCode($this);
  }
  function SkippableUpdater__equals_impl_vm8qds($this, other) {
    if (!(other instanceof SkippableUpdater))
      return false;
    var tmp0_other_with_cast = other instanceof SkippableUpdater ? other.z1p_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SkippableUpdater(composer) {
    this.z1p_1 = composer;
  }
  SkippableUpdater.prototype.toString = function () {
    return SkippableUpdater__toString_impl_9wisn1(this.z1p_1);
  };
  SkippableUpdater.prototype.hashCode = function () {
    return SkippableUpdater__hashCode_impl_vnopfw(this.z1p_1);
  };
  SkippableUpdater.prototype.equals = function (other) {
    return SkippableUpdater__equals_impl_vm8qds(this.z1p_1, other);
  };
  SkippableUpdater.$metadata$ = classMeta('SkippableUpdater');
  function collectNodesFrom$collectFromGroup(tmp0_let, result, group) {
    if (tmp0_let.m1j(group)) {
      result.a(tmp0_let.n1k(group));
    } else {
      var current = group + 1 | 0;
      var end = group + tmp0_let.u1i(group) | 0;
      while (current < end) {
        collectNodesFrom$collectFromGroup(tmp0_let, result, current);
        current = current + tmp0_let.u1i(current) | 0;
      }
    }
  }
  function removeCurrentGroupInstance$lambda(_anonymous_parameter_0__qggqh8, slots, rememberManager) {
    init_properties_Composer_kt_de8r5y();
    removeCurrentGroup(slots, rememberManager);
    return Unit_getInstance();
  }
  function skipToGroupEndInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    init_properties_Composer_kt_de8r5y();
    slots.l1h();
    return Unit_getInstance();
  }
  function endGroupInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    init_properties_Composer_kt_de8r5y();
    slots.b1j();
    return Unit_getInstance();
  }
  function startRootGroup$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    init_properties_Composer_kt_de8r5y();
    slots.a1q(0);
    return Unit_getInstance();
  }
  function resetSlotsInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    init_properties_Composer_kt_de8r5y();
    slots.b1q();
    return Unit_getInstance();
  }
  function InvalidationResult_IGNORED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IGNORED_instance;
  }
  function InvalidationResult_SCHEDULED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_SCHEDULED_instance;
  }
  function InvalidationResult_DEFERRED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_DEFERRED_instance;
  }
  function InvalidationResult_IMMINENT_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IMMINENT_instance;
  }
  function compositionLocalScope$factory() {
    return getPropertyCallableRef('compositionLocalScope', 1, KMutableProperty1, function (receiver) {
      return _get_compositionLocalScope__ulge9q(receiver);
    }, function (receiver, value) {
      return _set_compositionLocalScope__ya1b9q(receiver, value);
    });
  }
  function compositionLocalScope$factory_0() {
    return getPropertyCallableRef('compositionLocalScope', 1, KMutableProperty1, function (receiver) {
      return _get_compositionLocalScope__ulge9q(receiver);
    }, function (receiver, value) {
      return _set_compositionLocalScope__ya1b9q(receiver, value);
    });
  }
  function keyMap$factory() {
    return getPropertyCallableRef('keyMap', 1, KProperty1, function (receiver) {
      return receiver.k1p();
    }, null);
  }
  var properties_initialized_Composer_kt_89qzc2;
  function init_properties_Composer_kt_de8r5y() {
    if (properties_initialized_Composer_kt_89qzc2) {
    } else {
      properties_initialized_Composer_kt_89qzc2 = true;
      compositionTracer = null;
      removeCurrentGroupInstance = removeCurrentGroupInstance$lambda;
      skipToGroupEndInstance = skipToGroupEndInstance$lambda;
      endGroupInstance = endGroupInstance$lambda;
      startRootGroup = startRootGroup$lambda;
      resetSlotsInstance = resetSlotsInstance$lambda;
      invocation = new OpaqueKey('provider');
      provider = new OpaqueKey('provider');
      compositionLocalMap = new OpaqueKey('compositionLocalMap');
      providerValues = new OpaqueKey('providerValues');
      providerMaps = new OpaqueKey('providers');
      reference = new OpaqueKey('reference');
    }
  }
  function get_PendingApplyNoModifications() {
    init_properties_Composition_kt_ckysay();
    return PendingApplyNoModifications;
  }
  var PendingApplyNoModifications;
  function CompositionImpl_init_$Init$(parent, applier, recomposeContext, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      recomposeContext = null;
    CompositionImpl.call($this, parent, applier, recomposeContext);
    return $this;
  }
  function CompositionImpl_init_$Create$(parent, applier, recomposeContext, $mask0, $marker) {
    return CompositionImpl_init_$Init$(parent, applier, recomposeContext, $mask0, $marker, Object.create(CompositionImpl.prototype));
  }
  function _get_areChildrenComposing__c1uwup($this) {
    return $this.g1d_1.v1m();
  }
  function drainPendingModificationsForCompositionLocked($this) {
    var toRecord = $this.s1c_1.e1q(get_PendingApplyNoModifications());
    if (toRecord == null) {
    } else {
      if (equals(toRecord, get_PendingApplyNoModifications())) {
        composeRuntimeError('pending composition has not been applied');
      } else {
        if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
          addPendingInvalidationsLocked($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), true);
        } else {
          if (!(toRecord == null) ? isArray(toRecord) : false) {
            var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var changed = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              addPendingInvalidationsLocked($this, changed, true);
            }
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.s1c_1);
          }
        }
      }
    }
  }
  function drainPendingModificationsLocked($this) {
    var toRecord = $this.s1c_1.e1q(null);
    if (equals(toRecord, get_PendingApplyNoModifications())) {
    } else {
      if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
        addPendingInvalidationsLocked($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), false);
      } else {
        if (!(toRecord == null) ? isArray(toRecord) : false) {
          var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var changed = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            addPendingInvalidationsLocked($this, changed, false);
          }
        } else {
          if (toRecord == null) {
            composeRuntimeError('calling recordModificationsOf and applyChanges concurrently is not supported');
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.s1c_1);
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked($this, values, forgetConditionalScopes) {
    var invalidated = {_v: null};
    var tmp0_iterator = values.c();
    while (tmp0_iterator.d()) {
      var value = tmp0_iterator.e();
      if (value instanceof RecomposeScopeImpl) {
        value.f1q(null);
      } else {
        addPendingInvalidationsLocked$invalidate($this, forgetConditionalScopes, invalidated, value);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
        var tmp1_forEachScopeOf = $this.y1c_1;
        var index = find_2(tmp1_forEachScopeOf, value);
        if (index >= 0) {
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
          var tmp0_fastForEach = scopeSetAt(tmp1_forEachScopeOf, index);
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = tmp0_fastForEach.k1k_1;
          if (inductionVariable < last)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
              var tmp2__anonymous__z9zvc9 = tmp0_fastForEach.g(i);
              addPendingInvalidationsLocked$invalidate($this, forgetConditionalScopes, invalidated, tmp2__anonymous__z9zvc9);
            }
             while (inductionVariable < last);
        }
      }
    }
    var tmp;
    if (forgetConditionalScopes) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp3_isNotEmpty = $this.x1c_1;
      tmp$ret$0 = !tmp3_isNotEmpty.h();
      tmp = tmp$ret$0;
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
      var tmp4_removeValueIf = $this.w1c_1;
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
      var destinationIndex = 0;
      var inductionVariable_0 = 0;
      var last_0 = tmp4_removeValueIf.j1q_1;
      if (inductionVariable_0 < last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var valueIndex = tmp4_removeValueIf.g1q_1[i_0];
          var set = ensureNotNull(tmp4_removeValueIf.i1q_1[valueIndex]);
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
          var destinationIndex_0 = 0;
          var inductionVariable_1 = 0;
          var last_1 = set.k1k_1;
          if (inductionVariable_1 < last_1)
            do {
              var i_1 = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              var tmp_0 = set.l1k_1[i_1];
              var item = isObject(tmp_0) ? tmp_0 : THROW_CCE();
              var tmp$ret$3;
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
              var tmp_1;
              if ($this.x1c_1.m(item)) {
                tmp_1 = true;
              } else {
                var tmp0_safe_receiver = invalidated._v;
                var tmp_2;
                if (tmp0_safe_receiver == null) {
                  tmp_2 = null;
                } else {
                  var tmp$ret$2;
                  // Inline function 'kotlin.let' call
                  // Inline function 'kotlin.contracts.contract' call
                  var tmp$ret$1;
                  // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                  tmp$ret$1 = tmp0_safe_receiver.m(item);
                  tmp$ret$2 = tmp$ret$1;
                  tmp_2 = tmp$ret$2;
                }
                tmp_1 = tmp_2 === true;
              }
              tmp$ret$3 = tmp_1;
              if (!tmp$ret$3) {
                if (!(destinationIndex_0 === i_1)) {
                  set.l1k_1[destinationIndex_0] = item;
                }
                var tmp1 = destinationIndex_0;
                destinationIndex_0 = tmp1 + 1 | 0;
              }
            }
             while (inductionVariable_1 < last_1);
          var inductionVariable_2 = destinationIndex_0;
          var last_2 = set.k1k_1;
          if (inductionVariable_2 < last_2)
            do {
              var i_2 = inductionVariable_2;
              inductionVariable_2 = inductionVariable_2 + 1 | 0;
              set.l1k_1[i_2] = null;
            }
             while (inductionVariable_2 < last_2);
          set.k1k_1 = destinationIndex_0;
          if (set.k1k_1 > 0) {
            if (!(destinationIndex === i_0)) {
              var destinationKeyOrder = tmp4_removeValueIf.g1q_1[destinationIndex];
              tmp4_removeValueIf.g1q_1[destinationIndex] = valueIndex;
              tmp4_removeValueIf.g1q_1[i_0] = destinationKeyOrder;
            }
            var tmp1_0 = destinationIndex;
            destinationIndex = tmp1_0 + 1 | 0;
          }
        }
         while (inductionVariable_0 < last_0);
      var inductionVariable_3 = destinationIndex;
      var last_3 = tmp4_removeValueIf.j1q_1;
      if (inductionVariable_3 < last_3)
        do {
          var i_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          tmp4_removeValueIf.h1q_1[tmp4_removeValueIf.g1q_1[i_3]] = null;
        }
         while (inductionVariable_3 < last_3);
      tmp4_removeValueIf.j1q_1 = destinationIndex;
      cleanUpDerivedStateObservations($this);
      $this.x1c_1.g9();
    } else {
      var tmp1_safe_receiver = invalidated._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$5;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
        var tmp0_removeValueIf = $this.w1c_1;
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
        var destinationIndex_1 = 0;
        var inductionVariable_4 = 0;
        var last_4 = tmp0_removeValueIf.j1q_1;
        if (inductionVariable_4 < last_4)
          do {
            var i_4 = inductionVariable_4;
            inductionVariable_4 = inductionVariable_4 + 1 | 0;
            var valueIndex_0 = tmp0_removeValueIf.g1q_1[i_4];
            var set_0 = ensureNotNull(tmp0_removeValueIf.i1q_1[valueIndex_0]);
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
            var destinationIndex_2 = 0;
            var inductionVariable_5 = 0;
            var last_5 = set_0.k1k_1;
            if (inductionVariable_5 < last_5)
              do {
                var i_5 = inductionVariable_5;
                inductionVariable_5 = inductionVariable_5 + 1 | 0;
                var tmp_3 = set_0.l1k_1[i_5];
                var item_0 = isObject(tmp_3) ? tmp_3 : THROW_CCE();
                var tmp$ret$4;
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                tmp$ret$4 = tmp1_safe_receiver.m(item_0);
                if (!tmp$ret$4) {
                  if (!(destinationIndex_2 === i_5)) {
                    set_0.l1k_1[destinationIndex_2] = item_0;
                  }
                  var tmp1_1 = destinationIndex_2;
                  destinationIndex_2 = tmp1_1 + 1 | 0;
                }
              }
               while (inductionVariable_5 < last_5);
            var inductionVariable_6 = destinationIndex_2;
            var last_6 = set_0.k1k_1;
            if (inductionVariable_6 < last_6)
              do {
                var i_6 = inductionVariable_6;
                inductionVariable_6 = inductionVariable_6 + 1 | 0;
                set_0.l1k_1[i_6] = null;
              }
               while (inductionVariable_6 < last_6);
            set_0.k1k_1 = destinationIndex_2;
            if (set_0.k1k_1 > 0) {
              if (!(destinationIndex_1 === i_4)) {
                var destinationKeyOrder_0 = tmp0_removeValueIf.g1q_1[destinationIndex_1];
                tmp0_removeValueIf.g1q_1[destinationIndex_1] = valueIndex_0;
                tmp0_removeValueIf.g1q_1[i_4] = destinationKeyOrder_0;
              }
              var tmp1_2 = destinationIndex_1;
              destinationIndex_1 = tmp1_2 + 1 | 0;
            }
          }
           while (inductionVariable_4 < last_4);
        var inductionVariable_7 = destinationIndex_1;
        var last_7 = tmp0_removeValueIf.j1q_1;
        if (inductionVariable_7 < last_7)
          do {
            var i_7 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            tmp0_removeValueIf.h1q_1[tmp0_removeValueIf.g1q_1[i_7]] = null;
          }
           while (inductionVariable_7 < last_7);
        tmp0_removeValueIf.j1q_1 = destinationIndex_1;
        cleanUpDerivedStateObservations($this);
        tmp$ret$5 = Unit_getInstance();
      }
    }
  }
  function cleanUpDerivedStateObservations($this) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
    var tmp0_removeValueIf = $this.y1c_1;
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = tmp0_removeValueIf.j1q_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = tmp0_removeValueIf.g1q_1[i];
        var set = ensureNotNull(tmp0_removeValueIf.i1q_1[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
        var destinationIndex_0 = 0;
        var inductionVariable_0 = 0;
        var last_0 = set.k1k_1;
        if (inductionVariable_0 < last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp = set.l1k_1[i_0];
            var item = isObject(tmp) ? tmp : THROW_CCE();
            var tmp$ret$0;
            // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
            tmp$ret$0 = !$this.w1c_1.k1q(item);
            if (!tmp$ret$0) {
              if (!(destinationIndex_0 === i_0)) {
                set.l1k_1[destinationIndex_0] = item;
              }
              var tmp1 = destinationIndex_0;
              destinationIndex_0 = tmp1 + 1 | 0;
            }
          }
           while (inductionVariable_0 < last_0);
        var inductionVariable_1 = destinationIndex_0;
        var last_1 = set.k1k_1;
        if (inductionVariable_1 < last_1)
          do {
            var i_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            set.l1k_1[i_1] = null;
          }
           while (inductionVariable_1 < last_1);
        set.k1k_1 = destinationIndex_0;
        if (set.k1k_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = tmp0_removeValueIf.g1q_1[destinationIndex];
            tmp0_removeValueIf.g1q_1[destinationIndex] = valueIndex;
            tmp0_removeValueIf.g1q_1[i] = destinationKeyOrder;
          }
          var tmp1_0 = destinationIndex;
          destinationIndex = tmp1_0 + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_2 = destinationIndex;
    var last_2 = tmp0_removeValueIf.j1q_1;
    if (inductionVariable_2 < last_2)
      do {
        var i_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        tmp0_removeValueIf.h1q_1[tmp0_removeValueIf.g1q_1[i_2]] = null;
      }
       while (inductionVariable_2 < last_2);
    tmp0_removeValueIf.j1q_1 = destinationIndex;
    // Inline function 'androidx.compose.runtime.removeValueIf' call
    var tmp1_removeValueIf = $this.x1c_1;
    var iter = tmp1_removeValueIf.c();
    while (iter.d()) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = iter.e();
      tmp$ret$1 = !tmp2__anonymous__z9zvc9.l1q();
      if (tmp$ret$1) {
        iter.d4();
      }
    }
  }
  function invalidateScopeOfLocked($this, value) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var tmp1_forEachScopeOf = $this.w1c_1;
    var index = find_2(tmp1_forEachScopeOf, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var tmp0_fastForEach = scopeSetAt(tmp1_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastForEach.k1k_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = tmp0_fastForEach.g(i);
          if (tmp2__anonymous__z9zvc9.f1q(value).equals(InvalidationResult_IMMINENT_getInstance())) {
            $this.b1d_1.m1q(value, tmp2__anonymous__z9zvc9);
          }
        }
         while (inductionVariable < last);
    }
  }
  function applyChangesInLocked($this, changes) {
    var manager = new RememberEventDispatcher($this.u1c_1);
    try {
      if (changes.h())
        return Unit_getInstance();
      var tmp$ret$3;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().i1l('Compose:applyChanges');
        try {
          $this.r1c_1.t19();
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          var tmp1_write = $this.v1c_1;
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp1_write.k1h();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var tmp;
          try {
            var applier = $this.r1c_1;
            // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var inductionVariable = 0;
            var last = changes.f() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = changes.g(index);
                // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>.<anonymous>' call
                item(applier, tmp0_let, manager);
              }
               while (inductionVariable <= last);
            changes.g9();
            tmp = Unit_getInstance();
          }finally {
            tmp0_let.z1g();
          }
          tmp$ret$0 = tmp;
          tmp$ret$1 = tmp$ret$0;
          tmp$ret$2 = tmp$ret$1;
          $this.r1c_1.u19();
          tmp$ret$3 = Unit_getInstance();
          break $l$block;
        }finally {
          Trace_getInstance().u1l(token);
        }
      }
      manager.r1q();
      manager.s1q();
      if ($this.d1d_1) {
        var tmp$ret$5;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.trace' call
          var token_0 = Trace_getInstance().i1l('Compose:unobserve');
          try {
            $this.d1d_1 = false;
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
            var tmp0_removeValueIf = $this.w1c_1;
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
            var destinationIndex = 0;
            var inductionVariable_0 = 0;
            var last_0 = tmp0_removeValueIf.j1q_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var valueIndex = tmp0_removeValueIf.g1q_1[i];
                var set = ensureNotNull(tmp0_removeValueIf.i1q_1[valueIndex]);
                // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
                // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
                var destinationIndex_0 = 0;
                var inductionVariable_1 = 0;
                var last_1 = set.k1k_1;
                if (inductionVariable_1 < last_1)
                  do {
                    var i_0 = inductionVariable_1;
                    inductionVariable_1 = inductionVariable_1 + 1 | 0;
                    var tmp_0 = set.l1k_1[i_0];
                    var item_0 = isObject(tmp_0) ? tmp_0 : THROW_CCE();
                    var tmp$ret$4;
                    // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                    tmp$ret$4 = !item_0.t1q();
                    if (!tmp$ret$4) {
                      if (!(destinationIndex_0 === i_0)) {
                        set.l1k_1[destinationIndex_0] = item_0;
                      }
                      var tmp1 = destinationIndex_0;
                      destinationIndex_0 = tmp1 + 1 | 0;
                    }
                  }
                   while (inductionVariable_1 < last_1);
                var inductionVariable_2 = destinationIndex_0;
                var last_2 = set.k1k_1;
                if (inductionVariable_2 < last_2)
                  do {
                    var i_1 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    set.l1k_1[i_1] = null;
                  }
                   while (inductionVariable_2 < last_2);
                set.k1k_1 = destinationIndex_0;
                if (set.k1k_1 > 0) {
                  if (!(destinationIndex === i)) {
                    var destinationKeyOrder = tmp0_removeValueIf.g1q_1[destinationIndex];
                    tmp0_removeValueIf.g1q_1[destinationIndex] = valueIndex;
                    tmp0_removeValueIf.g1q_1[i] = destinationKeyOrder;
                  }
                  var tmp1_0 = destinationIndex;
                  destinationIndex = tmp1_0 + 1 | 0;
                }
              }
               while (inductionVariable_0 < last_0);
            var inductionVariable_3 = destinationIndex;
            var last_3 = tmp0_removeValueIf.j1q_1;
            if (inductionVariable_3 < last_3)
              do {
                var i_2 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                tmp0_removeValueIf.h1q_1[tmp0_removeValueIf.g1q_1[i_2]] = null;
              }
               while (inductionVariable_3 < last_3);
            tmp0_removeValueIf.j1q_1 = destinationIndex;
            cleanUpDerivedStateObservations($this);
            tmp$ret$5 = Unit_getInstance();
            break $l$block_0;
          }finally {
            Trace_getInstance().u1l(token_0);
          }
        }
      }
    }finally {
      if ($this.a1d_1.h()) {
        manager.u1q();
      }
    }
  }
  function abandonChanges($this) {
    $this.s1c_1.v1q(null);
    $this.z1c_1.g9();
    $this.a1d_1.g9();
    $this.u1c_1.g9();
  }
  function invalidateChecked($this, scope, anchor, instance) {
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.t1c_1;
    var tmp$ret$3;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>' call
    var tmp0_safe_receiver = $this.e1d_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
      var tmp_0;
      if ($this.v1c_1.w1q($this.f1d_1, anchor)) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp$ret$0 = tmp_0;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var delegate = tmp;
    if (delegate == null) {
      if ($this.x1q() ? $this.g1d_1.j1k(scope, instance) : false) {
        return InvalidationResult_IMMINENT_getInstance();
      }
      if (instance == null) {
        $this.c1d_1.y1q(scope, null);
      } else {
        addValue($this.c1d_1, scope, instance);
      }
    }
    tmp$ret$2 = delegate;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var delegate_0 = tmp$ret$4;
    if (!(delegate_0 == null)) {
      return invalidateChecked(delegate_0, scope, anchor, instance);
    }
    $this.q1c_1.e1l($this);
    return $this.x1q() ? InvalidationResult_DEFERRED_getInstance() : InvalidationResult_SCHEDULED_getInstance();
  }
  function takeInvalidations($this) {
    var invalidations = $this.c1d_1;
    var tmp = $this;
    tmp.c1d_1 = IdentityArrayMap_init_$Create$(0, 1, null);
    return invalidations;
  }
  function RememberEventDispatcher(abandoning) {
    this.n1q_1 = abandoning;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.o1q_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.p1q_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$2 = ArrayList_init_$Create$();
    tmp_1.q1q_1 = tmp$ret$2;
  }
  RememberEventDispatcher.prototype.k1b = function (instance) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.p1q_1.e2(instance);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.RememberEventDispatcher.remembering.<anonymous>' call
    var tmp;
    if (tmp0_let >= 0) {
      this.p1q_1.c4(tmp0_let);
      tmp = this.n1q_1.b4(instance);
    } else {
      tmp = this.o1q_1.a(instance);
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
  };
  RememberEventDispatcher.prototype.l1b = function (instance) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.o1q_1.e2(instance);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.RememberEventDispatcher.forgetting.<anonymous>' call
    var tmp;
    if (tmp0_let >= 0) {
      this.o1q_1.c4(tmp0_let);
      tmp = this.n1q_1.b4(instance);
    } else {
      tmp = this.p1q_1.a(instance);
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
  };
  RememberEventDispatcher.prototype.m1b = function (effect) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.q1q_1;
    tmp0_plusAssign.a(effect);
  };
  RememberEventDispatcher.prototype.r1q = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.p1q_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().i1l('Compose:onForgotten');
        try {
          var inductionVariable = this.p1q_1.f() - 1 | 0;
          var tmp;
          if (0 <= inductionVariable) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = this.p1q_1.g(i);
              if (!this.n1q_1.m(instance)) {
                instance.y1k();
              }
            }
             while (0 <= inductionVariable);
            tmp = Unit_getInstance();
          }
          tmp$ret$1 = tmp;
          break $l$block;
        }finally {
          Trace_getInstance().u1l(token);
        }
      }
    }
    var tmp$ret$2;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp1_isNotEmpty = this.o1q_1;
    tmp$ret$2 = !tmp1_isNotEmpty.h();
    if (tmp$ret$2) {
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_getInstance().i1l('Compose:onRemembered');
        try {
          var tmp0_fastForEach = this.o1q_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_0 = 0;
          var last = tmp0_fastForEach.f() - 1 | 0;
          var tmp_0;
          if (inductionVariable_0 <= last) {
            do {
              var index = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var item = tmp0_fastForEach.g(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>.<anonymous>' call
              this.n1q_1.b4(item);
              item.w1k();
            }
             while (inductionVariable_0 <= last);
            tmp_0 = Unit_getInstance();
          }
          tmp$ret$3 = tmp_0;
          break $l$block_0;
        }finally {
          Trace_getInstance().u1l(token_0);
        }
      }
    }
  };
  RememberEventDispatcher.prototype.s1q = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.q1q_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().i1l('Compose:sideeffects');
        try {
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var tmp0_fastForEach = this.q1q_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = tmp0_fastForEach.f() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0_fastForEach.g(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>.<anonymous>' call
              item();
            }
             while (inductionVariable <= last);
          this.q1q_1.g9();
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }finally {
          Trace_getInstance().u1l(token);
        }
      }
    }
  };
  RememberEventDispatcher.prototype.u1q = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.n1q_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().i1l('Compose:abandons');
        try {
          var iterator = this.n1q_1.c();
          while (iterator.d()) {
            var instance = iterator.e();
            iterator.d4();
            instance.x1k();
          }
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }finally {
          Trace_getInstance().u1l(token);
        }
      }
    }
  };
  RememberEventDispatcher.$metadata$ = classMeta('RememberEventDispatcher', [RememberManager]);
  function addPendingInvalidationsLocked$invalidate(this$0, $forgetConditionalScopes, invalidated, value) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var tmp1_forEachScopeOf = this$0.w1c_1;
    var index = find_2(tmp1_forEachScopeOf, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var tmp0_fastForEach = scopeSetAt(tmp1_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastForEach.k1k_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.invalidate.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = tmp0_fastForEach.g(i);
          if (!this$0.b1d_1.z1q(value, tmp2__anonymous__z9zvc9) ? !tmp2__anonymous__z9zvc9.f1q(value).equals(InvalidationResult_IGNORED_getInstance()) : false) {
            if (tmp2__anonymous__z9zvc9.l1q() ? !$forgetConditionalScopes : false) {
              this$0.x1c_1.a(tmp2__anonymous__z9zvc9);
            } else {
              var tmp0_elvis_lhs = invalidated._v;
              var tmp;
              if (tmp0_elvis_lhs == null) {
                var tmp$ret$0;
                // Inline function 'kotlin.also' call
                var tmp0_also = HashSet_init_$Create$();
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.invalidate.<anonymous>.<anonymous>' call
                invalidated._v = tmp0_also;
                tmp$ret$0 = tmp0_also;
                tmp = tmp$ret$0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var set = tmp;
              set.a(tmp2__anonymous__z9zvc9);
            }
          }
        }
         while (inductionVariable < last);
    }
  }
  function CompositionImpl(parent, applier, recomposeContext) {
    this.q1c_1 = parent;
    this.r1c_1 = applier;
    this.s1c_1 = new AtomicReference(null);
    this.t1c_1 = createSynchronizedObject();
    this.u1c_1 = HashSet_init_$Create$();
    this.v1c_1 = new SlotTable();
    this.w1c_1 = new IdentityScopeMap();
    this.x1c_1 = HashSet_init_$Create$();
    this.y1c_1 = new IdentityScopeMap();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.z1c_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.a1d_1 = tmp$ret$1;
    this.b1d_1 = new IdentityScopeMap();
    var tmp_1 = this;
    tmp_1.c1d_1 = IdentityArrayMap_init_$Create$(0, 1, null);
    this.d1d_1 = false;
    this.e1d_1 = null;
    this.f1d_1 = 0;
    var tmp_2 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp0_also = new ComposerImpl(this.r1c_1, this.q1c_1, this.v1c_1, this.u1c_1, this.z1c_1, this.a1d_1, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.composer.<anonymous>' call
    this.q1c_1.a1l(tmp0_also);
    tmp$ret$2 = tmp0_also;
    tmp_2.g1d_1 = tmp$ret$2;
    this.h1d_1 = recomposeContext;
    var tmp_3 = this;
    var tmp_4 = this.q1c_1;
    tmp_3.i1d_1 = tmp_4 instanceof Recomposer;
    this.j1d_1 = false;
    this.k1d_1 = ComposableSingletons$CompositionKt_getInstance().a1r_1;
  }
  CompositionImpl.prototype.t1o = function () {
    return this.v1c_1;
  };
  CompositionImpl.prototype.x1q = function () {
    return this.g1d_1.x1e_1;
  };
  CompositionImpl.prototype.c1r = function () {
    return this.j1d_1;
  };
  CompositionImpl.prototype.vk = function () {
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.t1c_1;
    var tmp$ret$4;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp;
    if (!this.j1d_1) {
      this.j1d_1 = true;
      this.d1r(ComposableSingletons$CompositionKt_getInstance().b1r_1);
      var deferredChanges = this.g1d_1.e1f_1;
      if (!(deferredChanges == null)) {
        applyChangesInLocked(this, deferredChanges);
      }
      var nonEmptySlotTable = this.v1c_1.v1f_1 > 0;
      var tmp_0;
      if (nonEmptySlotTable) {
        tmp_0 = true;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.collections.isNotEmpty' call
        var tmp0_isNotEmpty = this.u1c_1;
        tmp$ret$0 = !tmp0_isNotEmpty.h();
        tmp_0 = tmp$ret$0;
      }
      if (tmp_0) {
        var manager = new RememberEventDispatcher(this.u1c_1);
        if (nonEmptySlotTable) {
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          var tmp2_write = this.v1c_1;
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          var tmp1_let = tmp2_write.k1h();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var tmp_1;
          try {
            removeCurrentGroup(tmp1_let, manager);
            tmp_1 = Unit_getInstance();
          }finally {
            tmp1_let.z1g();
          }
          tmp$ret$1 = tmp_1;
          tmp$ret$2 = tmp$ret$1;
          tmp$ret$3 = tmp$ret$2;
          this.r1c_1.g9();
          manager.r1q();
        }
        manager.u1q();
      }
      this.g1d_1.vk();
      tmp = Unit_getInstance();
    }
    tmp$ret$4 = tmp;
    tmp$ret$5 = tmp$ret$4;
    this.q1c_1.c1l(this);
  };
  CompositionImpl.prototype.e1r = function () {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.t1c_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionImpl.<get-hasInvalidations>.<anonymous>' call
    tmp$ret$0 = this.c1d_1.r1l_1 > 0;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  CompositionImpl.prototype.f1r = function (values) {
    $l$loop: while (true) {
      var old = this.s1c_1.wo();
      var tmp0_subject = old;
      var tmp;
      if (tmp0_subject == null ? true : equals(tmp0_subject, get_PendingApplyNoModifications())) {
        tmp = values;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Set) : false) {
          var tmp$ret$2;
          // Inline function 'kotlin.arrayOf' call
          var tmp0_arrayOf = [old, values];
          var tmp$ret$1;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_arrayOf;
          tmp$ret$1 = tmp$ret$0;
          tmp$ret$2 = tmp$ret$1;
          tmp = tmp$ret$2;
        } else {
          if (!(tmp0_subject == null) ? isArray(tmp0_subject) : false) {
            tmp = plus_0((!(old == null) ? isArray(old) : false) ? old : THROW_CCE(), values);
          } else {
            var tmp1_error = 'corrupt pendingModifications: ' + this.s1c_1;
            throw IllegalStateException_init_$Create$(toString(tmp1_error));
          }
        }
      }
      var new_0 = tmp;
      if (this.s1c_1.g1r(old, new_0)) {
        if (old == null) {
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp2_synchronized = this.t1c_1;
          var tmp$ret$3;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          drainPendingModificationsLocked(this);
          tmp$ret$3 = Unit_getInstance();
          tmp$ret$4 = tmp$ret$3;
        }
        break $l$loop;
      }
    }
  };
  CompositionImpl.prototype.h1r = function (values) {
    var tmp0_iterator = values.c();
    while (tmp0_iterator.d()) {
      var value = tmp0_iterator.e();
      if (this.w1c_1.k1q(value) ? true : this.y1c_1.k1q(value))
        return true;
    }
    return false;
  };
  CompositionImpl.prototype.j1o = function (block) {
    return this.g1d_1.j1o(block);
  };
  CompositionImpl.prototype.i1r = function (value) {
    if (!_get_areChildrenComposing__c1uwup(this)) {
      var tmp0_safe_receiver = this.g1d_1.a1n();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.n1o(true);
        this.w1c_1.m1q(value, tmp0_safe_receiver);
        if (isInterface(value, DerivedState)) {
          this.y1c_1.j1r(value);
          var indexedObject = value.k1r();
          var inductionVariable = 0;
          var last = indexedObject.length;
          $l$loop: while (inductionVariable < last) {
            var dependency = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            if (dependency == null)
              break $l$loop;
            this.y1c_1.m1q(dependency, value);
          }
        }
        tmp0_safe_receiver.l1r(value);
        tmp$ret$0 = Unit_getInstance();
      }
    }
  };
  CompositionImpl.prototype.m1r = function (value) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.t1c_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    invalidateScopeOfLocked(this, value);
    var tmp1_forEachScopeOf = this.y1c_1;
    var index = find_2(tmp1_forEachScopeOf, value);
    var tmp;
    if (index >= 0) {
      var tmp0_fastForEach = scopeSetAt(tmp1_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastForEach.k1k_1;
      var tmp_0;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = tmp0_fastForEach.g(i);
          invalidateScopeOfLocked(this, tmp2__anonymous__z9zvc9);
        }
         while (inductionVariable < last);
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  CompositionImpl.prototype.n1r = function () {
    var tmp$ret$10;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.t1c_1;
    var tmp$ret$9;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>' call
    drainPendingModificationsForCompositionLocked(this);
    var tmp$ret$7;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        var tmp$ret$4;
        // Inline function 'kotlin.also' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'kotlin.also' call
          var tmp0_also = this.g1d_1.k1o(invalidations);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!tmp0_also) {
            drainPendingModificationsLocked(this);
          }
          tmp$ret$0 = tmp0_also;
          tmp$ret$1 = tmp$ret$0;
          tmp_1 = tmp$ret$1;
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            this.c1d_1 = invalidations;
            throw $p;
          } else {
            throw $p;
          }
          tmp_1 = tmp_2;
        }
        tmp$ret$2 = tmp_1;
        tmp$ret$3 = tmp$ret$2;
        var tmp0_also_0 = tmp$ret$3;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp$ret$4 = tmp0_also_0;
        tmp_0 = tmp$ret$4;
      }finally {
        var tmp_3;
        if (!success) {
          var tmp$ret$5;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = this.u1c_1;
          tmp$ret$5 = !tmp1_isNotEmpty.h();
          tmp_3 = tmp$ret$5;
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          (new RememberEventDispatcher(this.u1c_1)).u1q();
        }
      }
      tmp$ret$6 = tmp_0;
      tmp = tmp$ret$6;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Exception) {
        abandonChanges(this);
        throw $p;
      } else {
        throw $p;
      }
      tmp = tmp_4;
    }
    tmp$ret$7 = tmp;
    tmp$ret$8 = tmp$ret$7;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    return tmp$ret$10;
  };
  CompositionImpl.prototype.o1r = function (references) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.g(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.insertMovableContent.<anonymous>' call
          tmp$ret$0 = equals(item.o_1.z1j_1, this);
          if (!tmp$ret$0) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    runtimeCheck(tmp$ret$1);
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        var tmp$ret$2;
        // Inline function 'kotlin.also' call
        this.g1d_1.e1o(references);
        var tmp0_also = Unit_getInstance();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp$ret$2 = tmp0_also;
        tmp_0 = tmp$ret$2;
      }finally {
        var tmp_1;
        if (!success) {
          var tmp$ret$3;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = this.u1c_1;
          tmp$ret$3 = !tmp1_isNotEmpty.h();
          tmp_1 = tmp$ret$3;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.u1c_1)).u1q();
        }
      }
      tmp$ret$4 = tmp_0;
      tmp = tmp$ret$4;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        abandonChanges(this);
        throw $p;
      } else {
        throw $p;
      }
      tmp = tmp_2;
    }
    tmp$ret$5 = tmp;
  };
  CompositionImpl.prototype.p1r = function (state) {
    var manager = new RememberEventDispatcher(this.u1c_1);
    var slotTable = state.h1k_1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = slotTable.k1h();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      removeCurrentGroup(tmp0_let, manager);
      tmp = Unit_getInstance();
    }finally {
      tmp0_let.z1g();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    manager.r1q();
  };
  CompositionImpl.prototype.q1r = function () {
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.t1c_1;
    var tmp$ret$4;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        applyChangesInLocked(this, this.z1c_1);
        drainPendingModificationsLocked(this);
        var tmp0_also = Unit_getInstance();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp$ret$0 = tmp0_also;
        tmp_0 = tmp$ret$0;
      }finally {
        var tmp_1;
        if (!success) {
          var tmp$ret$1;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = this.u1c_1;
          tmp$ret$1 = !tmp1_isNotEmpty.h();
          tmp_1 = tmp$ret$1;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.u1c_1)).u1q();
        }
      }
      tmp$ret$2 = tmp_0;
      tmp = tmp$ret$2;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        abandonChanges(this);
        throw $p;
      } else {
        throw $p;
      }
      tmp = tmp_2;
    }
    tmp$ret$3 = tmp;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
  };
  CompositionImpl.prototype.r1r = function () {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.t1c_1;
    var tmp$ret$5;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        var tmp_1;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.isNotEmpty' call
        var tmp0_isNotEmpty = this.a1d_1;
        tmp$ret$0 = !tmp0_isNotEmpty.h();
        if (tmp$ret$0) {
          applyChangesInLocked(this, this.a1d_1);
          tmp_1 = Unit_getInstance();
        }
        var tmp0_also = tmp_1;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp$ret$1 = tmp0_also;
        tmp_0 = tmp$ret$1;
      }finally {
        var tmp_2;
        if (!success) {
          var tmp$ret$2;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = this.u1c_1;
          tmp$ret$2 = !tmp1_isNotEmpty.h();
          tmp_2 = tmp$ret$2;
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          (new RememberEventDispatcher(this.u1c_1)).u1q();
        }
      }
      tmp$ret$3 = tmp_0;
      tmp = tmp$ret$3;
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Exception) {
        abandonChanges(this);
        throw $p;
      } else {
        throw $p;
      }
      tmp = tmp_3;
    }
    tmp$ret$4 = tmp;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
  };
  CompositionImpl.prototype.d1n = function () {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.t1c_1;
    var tmp$ret$5;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        this.g1d_1.d1n();
        var tmp_1;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.isNotEmpty' call
        var tmp0_isNotEmpty = this.u1c_1;
        tmp$ret$0 = !tmp0_isNotEmpty.h();
        if (tmp$ret$0) {
          (new RememberEventDispatcher(this.u1c_1)).u1q();
          tmp_1 = Unit_getInstance();
        }
        var tmp0_also = tmp_1;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp$ret$1 = tmp0_also;
        tmp_0 = tmp$ret$1;
      }finally {
        var tmp_2;
        if (!success) {
          var tmp$ret$2;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = this.u1c_1;
          tmp$ret$2 = !tmp1_isNotEmpty.h();
          tmp_2 = tmp$ret$2;
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          (new RememberEventDispatcher(this.u1c_1)).u1q();
        }
      }
      tmp$ret$3 = tmp_0;
      tmp = tmp$ret$3;
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Exception) {
        abandonChanges(this);
        throw $p;
      } else {
        throw $p;
      }
      tmp = tmp_3;
    }
    tmp$ret$4 = tmp;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
  };
  CompositionImpl.prototype.s1r = function () {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.t1c_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_forEach = this.v1c_1.w1f_1;
    var indexedObject = tmp0_forEach;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateAll.<anonymous>.<anonymous>' call
      var tmp0_safe_receiver = element instanceof RecomposeScopeImpl ? element : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.t1r();
      }
    }
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  CompositionImpl.prototype.m1k = function (to, groupIndex, block) {
    var tmp;
    if ((!(to == null) ? !equals(to, this) : false) ? groupIndex >= 0 : false) {
      var tmp_0 = this;
      tmp_0.e1d_1 = to instanceof CompositionImpl ? to : THROW_CCE();
      this.f1d_1 = groupIndex;
      var tmp_1;
      try {
        tmp_1 = block();
      }finally {
        this.e1d_1 = null;
        this.f1d_1 = 0;
      }
      tmp = tmp_1;
    } else {
      tmp = block();
    }
    return tmp;
  };
  CompositionImpl.prototype.u1r = function (scope, instance) {
    if (scope.v1r()) {
      scope.c1o(true);
    }
    var anchor = scope.l1c_1;
    if ((anchor == null ? true : !this.v1c_1.w1r(anchor)) ? true : !anchor.t1q())
      return InvalidationResult_IGNORED_getInstance();
    if (!anchor.t1q())
      return InvalidationResult_IGNORED_getInstance();
    if (!scope.x1r())
      return InvalidationResult_IGNORED_getInstance();
    return invalidateChecked(this, scope, anchor, instance);
  };
  CompositionImpl.prototype.y1r = function (instance, scope) {
    this.w1c_1.z1q(instance, scope);
  };
  CompositionImpl.prototype.z1r = function (state) {
    if (!this.w1c_1.k1q(state)) {
      this.y1c_1.j1r(state);
    }
  };
  CompositionImpl.prototype.d1r = function (set__$_ezb9bk) {
    this.k1d_1 = set__$_ezb9bk;
  };
  CompositionImpl.prototype.a1s = function (content) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.j1d_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.setContent$composable.<anonymous>' call
      tmp$ret$0 = 'The composition is disposed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.d1r(content);
    this.q1c_1.h1l(this, this.k1d_1);
  };
  CompositionImpl.prototype.b1s = function (content) {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        var tmp$ret$3;
        // Inline function 'kotlin.also' call
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp0_synchronized = this.t1c_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        drainPendingModificationsForCompositionLocked(this);
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          this.g1d_1.o1o(invalidations, content);
          tmp_1 = Unit_getInstance();
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            this.c1d_1 = invalidations;
            throw $p;
          } else {
            throw $p;
          }
          tmp_1 = tmp_2;
        }
        tmp$ret$0 = tmp_1;
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        var tmp0_also = tmp$ret$2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp$ret$3 = tmp0_also;
        tmp_0 = tmp$ret$3;
      }finally {
        var tmp_3;
        if (!success) {
          var tmp$ret$4;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = this.u1c_1;
          tmp$ret$4 = !tmp1_isNotEmpty.h();
          tmp_3 = tmp$ret$4;
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          (new RememberEventDispatcher(this.u1c_1)).u1q();
        }
      }
      tmp$ret$5 = tmp_0;
      tmp = tmp$ret$5;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Exception) {
        abandonChanges(this);
        throw $p;
      } else {
        throw $p;
      }
      tmp = tmp_4;
    }
    tmp$ret$6 = tmp;
  };
  CompositionImpl.$metadata$ = classMeta('CompositionImpl', [ControlledComposition]);
  function ControlledComposition() {
  }
  ControlledComposition.$metadata$ = interfaceMeta('ControlledComposition', [Composition]);
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.j1m(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(954879418, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-1.<anonymous> (Composition.kt:505)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.j1m(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(1918065384, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-2.<anonymous> (Composition.kt:596)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$CompositionKt() {
    ComposableSingletons$CompositionKt_instance = this;
    var tmp = this;
    tmp.a1r_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(954879418, false, ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s));
    var tmp_0 = this;
    tmp_0.b1r_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1918065384, false, ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5));
  }
  ComposableSingletons$CompositionKt.$metadata$ = objectMeta('ComposableSingletons$CompositionKt');
  var ComposableSingletons$CompositionKt_instance;
  function ComposableSingletons$CompositionKt_getInstance() {
    if (ComposableSingletons$CompositionKt_instance == null)
      new ComposableSingletons$CompositionKt();
    return ComposableSingletons$CompositionKt_instance;
  }
  function removeValueIf(_this__u8e3s4, predicate) {
    init_properties_Composition_kt_ckysay();
    var iter = _this__u8e3s4.c();
    while (iter.d()) {
      if (predicate(iter.e())) {
        iter.d4();
      }
    }
  }
  function addValue(_this__u8e3s4, key, value) {
    init_properties_Composition_kt_ckysay();
    if (_this__u8e3s4.d1s(key)) {
      var tmp0_safe_receiver = _this__u8e3s4.c1s(key);
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.t1p(value);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.addValue.<anonymous>' call
      tmp0_also.t1p(value);
      tmp$ret$0 = tmp0_also;
      _this__u8e3s4.y1q(key, tmp$ret$0);
    }
  }
  function Composition() {
  }
  Composition.$metadata$ = interfaceMeta('Composition');
  function Composition_0(applier, parent) {
    init_properties_Composition_kt_ckysay();
    return CompositionImpl_init_$Create$(parent, applier, null, 4, null);
  }
  var properties_initialized_Composition_kt_u7hvq2;
  function init_properties_Composition_kt_ckysay() {
    if (properties_initialized_Composition_kt_u7hvq2) {
    } else {
      properties_initialized_Composition_kt_u7hvq2 = true;
      PendingApplyNoModifications = new Object();
    }
  }
  function get_EmptyCompositionLocalMap() {
    init_properties_CompositionContext_kt_yh8t7v();
    return EmptyCompositionLocalMap;
  }
  var EmptyCompositionLocalMap;
  function CompositionContext() {
    this.d1g_1 = 0;
  }
  CompositionContext.prototype.k1g = function (table) {
  };
  CompositionContext.prototype.a1l = function (composer) {
  };
  CompositionContext.prototype.b1l = function (composer) {
  };
  CompositionContext.prototype.f1g = function () {
    return get_EmptyCompositionLocalMap();
  };
  CompositionContext.prototype.e1g = function () {
  };
  CompositionContext.prototype.m1g = function () {
  };
  CompositionContext.prototype.g1k = function (reference) {
    return null;
  };
  CompositionContext.$metadata$ = classMeta('CompositionContext');
  var properties_initialized_CompositionContext_kt_mk393b;
  function init_properties_CompositionContext_kt_yh8t7v() {
    if (properties_initialized_CompositionContext_kt_mk393b) {
    } else {
      properties_initialized_CompositionContext_kt_mk393b = true;
      EmptyCompositionLocalMap = persistentHashMapOf();
    }
  }
  function CompositionLocal(defaultFactory) {
    this.i1h_1 = new LazyValueHolder(defaultFactory);
  }
  CompositionLocal.prototype.e1s = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_0.w1n(this);
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  CompositionLocal.$metadata$ = classMeta('CompositionLocal');
  function ProvidableCompositionLocal(defaultFactory) {
    CompositionLocal.call(this, defaultFactory);
  }
  ProvidableCompositionLocal.prototype.g1s = function (value) {
    return new ProvidedValue(this, value, true);
  };
  ProvidableCompositionLocal.prototype.h1s = function (value) {
    return new ProvidedValue(this, value, false);
  };
  ProvidableCompositionLocal.$metadata$ = classMeta('ProvidableCompositionLocal', undefined, undefined, undefined, undefined, CompositionLocal.prototype);
  function staticCompositionLocalOf(defaultFactory) {
    return new StaticProvidableCompositionLocal(defaultFactory);
  }
  function StaticProvidableCompositionLocal(defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
  }
  StaticProvidableCompositionLocal.prototype.s1p = function (value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(571516549);
    sourceInformation($composer_0, 'C(provided$composable):CompositionLocal.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(571516549, $changed, -1, 'androidx.compose.runtime.StaticProvidableCompositionLocal.provided$composable (CompositionLocal.kt:139)');
    }
    var tmp0 = new StaticValueHolder(value);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0;
  };
  StaticProvidableCompositionLocal.$metadata$ = classMeta('StaticProvidableCompositionLocal', undefined, undefined, undefined, undefined, ProvidableCompositionLocal.prototype);
  function CompositionLocalProvider$composable(values, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(-266554972);
    sourceInformation($composer_0, 'C(CompositionLocalProvider$composable)P(1)227@9992L9:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-266554972, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider$composable (CompositionLocal.kt:225)');
    }
    $composer_0.t1n(values);
    content($composer_0, 14 & $dirty >> 3);
    $composer_0.v1n();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.a1o();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.g1p(CompositionLocalProvider$composable$lambda$ref(values, content, $changed));
    }
  }
  function CompositionLocalProvider$composable_0(context, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(-221175223);
    sourceInformation($composer_0, 'C(CompositionLocalProvider$composable)P(1)247@10697L209:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(context) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(-221175223, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider$composable (CompositionLocal.kt:246)');
      }
      var tmp$ret$4;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$3;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = context.j1s_1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(tmp0_map.f());
      var tmp$ret$0;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$0 = tmp0_map.z().c();
      var tmp0_iterator = tmp$ret$0;
      while (tmp0_iterator.d()) {
        var item = tmp0_iterator.e();
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.CompositionLocalProvider$composable.<anonymous>' call
        var tmp = item.g2();
        var tmp0_return = (tmp instanceof ProvidableCompositionLocal ? tmp : THROW_CCE()).g1s(item.i2().i2());
        tmp$ret$1 = tmp0_return;
        tmp0_mapTo.a(tmp$ret$1);
      }
      tmp$ret$2 = tmp0_mapTo;
      tmp$ret$3 = tmp$ret$2;
      var tmp1_toTypedArray = tmp$ret$3;
      tmp$ret$4 = copyToArray(tmp1_toTypedArray);
      CompositionLocalProvider$composable(tmp$ret$4.slice(), content, $composer_0, 112 & $dirty);
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
      tmp0_safe_receiver.g1p(CompositionLocalProvider$composable$lambda$ref_0(context, content, $changed));
    }
  }
  function compositionLocalOf(policy, defaultFactory) {
    return new DynamicProvidableCompositionLocal(policy, defaultFactory);
  }
  function compositionLocalOf$default(policy, defaultFactory, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      policy = structuralEqualityPolicy();
    return compositionLocalOf(policy, defaultFactory);
  }
  function DynamicProvidableCompositionLocal(policy, defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
    this.l1s_1 = policy;
  }
  DynamicProvidableCompositionLocal.prototype.s1p = function (value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(-1327537144);
    sourceInformation($composer_0, 'C(provided$composable)*125@5325L42:CompositionLocal.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1327537144, $changed, -1, 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable (CompositionLocal.kt:125)');
    }
    var tmp$ret$5;
    // Inline function 'kotlin.apply' call
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
    if (false ? true : tmp0_let === Companion_getInstance_1().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable.<anonymous>' call
      tmp$ret$0 = mutableStateOf(value, this.l1s_1);
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
    var tmp1_apply = tmp$ret$4;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable.<anonymous>' call
    tmp1_apply.p11(value);
    tmp$ret$5 = tmp1_apply;
    var tmp0_0 = tmp$ret$5;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0_0;
  };
  DynamicProvidableCompositionLocal.$metadata$ = classMeta('DynamicProvidableCompositionLocal', undefined, undefined, undefined, undefined, ProvidableCompositionLocal.prototype);
  function CompositionLocalProvider$composable$lambda($values, $content, $$changed, $composer, $force) {
    return CompositionLocalProvider$composable($values.slice(), $content, $composer, $$changed | 1);
  }
  function CompositionLocalProvider$composable$lambda_0($context, $content, $$changed, $composer, $force) {
    return CompositionLocalProvider$composable_0($context, $content, $composer, $$changed | 1);
  }
  function CompositionLocalProvider$composable$lambda$ref($values, $content, $$changed) {
    return function (p0, p1) {
      CompositionLocalProvider$composable$lambda($values, $content, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function CompositionLocalProvider$composable$lambda$ref_0($context, $content, $$changed) {
    return function (p0, p1) {
      CompositionLocalProvider$composable$lambda_0($context, $content, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function get_calculationBlockNestedLevel() {
    init_properties_DerivedState_kt_59k4km();
    return calculationBlockNestedLevel;
  }
  var calculationBlockNestedLevel;
  function get_derivedStateObservers() {
    init_properties_DerivedState_kt_59k4km();
    return derivedStateObservers;
  }
  var derivedStateObservers;
  function DerivedState() {
  }
  DerivedState.$metadata$ = interfaceMeta('DerivedState', [State_0]);
  function observeDerivedStateRecalculations(start, done, block) {
    init_properties_DerivedState_kt_59k4km();
    var tmp0_elvis_lhs = _get_derivedStateObservers_$accessor$zxz8qy_fmk8o5().wo();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$3;
      // Inline function 'kotlin.also' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(16), null);
      tmp$ret$1 = new MutableVector(tmp$ret$0, 0);
      tmp$ret$2 = tmp$ret$1;
      var tmp0_also = tmp$ret$2;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations.<anonymous>' call
      _get_derivedStateObservers_$accessor$zxz8qy_fmk8o5().p1s(tmp0_also);
      tmp$ret$3 = tmp0_also;
      tmp = tmp$ret$3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var observers = tmp;
    var observer = to(start, done);
    try {
      observers.t1p(observer);
      block();
    }finally {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
      tmp$ret$4 = observers.s1s_1 - 1 | 0;
      observers.c4(tmp$ret$4);
    }
  }
  function derivedStateOf(calculation) {
    init_properties_DerivedState_kt_59k4km();
    return new DerivedSnapshotState(calculation, null);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.u1s_1 = new Object();
  }
  Companion_0.prototype.v1s = function () {
    return this.u1s_1;
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ResultRecord() {
    Companion_getInstance_2();
    StateRecord.call(this);
    this.z1s_1 = null;
    this.a1t_1 = Companion_getInstance_2().u1s_1;
    this.b1t_1 = 0;
    this.c1t_1 = 8;
  }
  ResultRecord.prototype.d1t = function (_set____db54di) {
    this.z1s_1 = _set____db54di;
  };
  ResultRecord.prototype.k1r = function () {
    return this.z1s_1;
  };
  ResultRecord.prototype.vv = function (_set____db54di) {
    this.a1t_1 = _set____db54di;
  };
  ResultRecord.prototype.e1t = function () {
    return this.a1t_1;
  };
  ResultRecord.prototype.f1t = function (_set____db54di) {
    this.b1t_1 = _set____db54di;
  };
  ResultRecord.prototype.g1t = function (value) {
    var other = value instanceof ResultRecord ? value : THROW_CCE();
    this.z1s_1 = other.z1s_1;
    this.a1t_1 = other.a1t_1;
    this.b1t_1 = other.b1t_1;
  };
  ResultRecord.prototype.h1t = function () {
    return new ResultRecord();
  };
  ResultRecord.prototype.i1t = function (derivedState, snapshot) {
    return !(this.a1t_1 === Companion_getInstance_2().u1s_1) ? this.b1t_1 === this.j1t(derivedState, snapshot) : false;
  };
  ResultRecord.prototype.j1t = function (derivedState, snapshot) {
    var hash = 7;
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.ResultRecord.readableHash.<anonymous>' call
    tmp$ret$0 = this.z1s_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var dependencies = tmp$ret$3;
    if (!(dependencies == null)) {
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.notifyObservers' call
      var tmp0_elvis_lhs = _get_derivedStateObservers_$accessor$zxz8qy_fmk8o5().wo();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.collection.MutableVector' call
        var tmp$ret$4;
        // Inline function 'kotlin.arrayOfNulls' call
        tmp$ret$4 = fillArrayVal(Array(0), null);
        tmp$ret$5 = new MutableVector(tmp$ret$4, 0);
        tmp = tmp$ret$5;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var observers = tmp;
      // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var size = observers.s1s_1;
      if (size > 0) {
        var i = 0;
        var tmp_0 = observers.q1s_1;
        var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
        do {
          // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
          var tmp1__anonymous__uwfjfc = content[i];
          var start = tmp1__anonymous__uwfjfc.z3();
          start(derivedState);
          var tmp0 = i;
          i = tmp0 + 1 | 0;
        }
         while (i < size);
      }
      var tmp_1;
      try {
        var inductionVariable = 0;
        var last = dependencies.r1l_1;
        var tmp_2;
        if (inductionVariable < last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$6;
            $l$block: {
              // Inline function 'androidx.compose.runtime.ResultRecord.readableHash.<anonymous>.<anonymous>' call
              var tmp_3 = dependencies.p1l_1[index];
              var tmp0__anonymous__q1qw7t = isObject(tmp_3) ? tmp_3 : THROW_CCE();
              var tmp_4 = dependencies.q1l_1[index];
              var tmp1__anonymous__uwfjfc_0 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
              if (!equals(tmp1__anonymous__uwfjfc_0, 1)) {
                tmp$ret$6 = Unit_getInstance();
                break $l$block;
              }
              var tmp_5;
              if (tmp0__anonymous__q1qw7t instanceof DerivedSnapshotState) {
                tmp_5 = tmp0__anonymous__q1qw7t.o1t(snapshot);
              } else {
                tmp_5 = current_0(tmp0__anonymous__q1qw7t.k1t(), snapshot);
              }
              var record = tmp_5;
              hash = imul(31, hash) + identityHashCode(record) | 0;
              hash = imul(31, hash) + record.p1t_1 | 0;
            }
          }
           while (inductionVariable < last);
          tmp_2 = Unit_getInstance();
        }
        tmp_1 = tmp_2;
      }finally {
        // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var size_0 = observers.s1s_1;
        if (size_0 > 0) {
          var i_0 = 0;
          var tmp_6 = observers.q1s_1;
          var content_0 = isArray(tmp_6) ? tmp_6 : THROW_CCE();
          do {
            // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
            var tmp2__anonymous__z9zvc9 = content_0[i_0];
            var done = tmp2__anonymous__z9zvc9.a4();
            done(derivedState);
            var tmp0_0 = i_0;
            i_0 = tmp0_0 + 1 | 0;
          }
           while (i_0 < size_0);
        }
      }
      tmp$ret$7 = tmp_1;
    }
    return hash;
  };
  ResultRecord.$metadata$ = classMeta('ResultRecord', undefined, undefined, undefined, undefined, StateRecord.prototype);
  function currentRecord($this, readable, snapshot, forceDependencyReads, calculation) {
    if (readable.i1t($this, snapshot)) {
      if (forceDependencyReads) {
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.notifyObservers' call
        var tmp0_elvis_lhs = _get_derivedStateObservers_$accessor$zxz8qy_fmk8o5().wo();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.collection.MutableVector' call
          var tmp$ret$0;
          // Inline function 'kotlin.arrayOfNulls' call
          tmp$ret$0 = fillArrayVal(Array(0), null);
          tmp$ret$1 = new MutableVector(tmp$ret$0, 0);
          tmp = tmp$ret$1;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var observers = tmp;
        // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var size = observers.s1s_1;
        if (size > 0) {
          var i = 0;
          var tmp_0 = observers.q1s_1;
          var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
          do {
            // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
            var tmp0__anonymous__q1qw7t = content[i];
            var start = tmp0__anonymous__q1qw7t.z3();
            start($this);
            var tmp0 = i;
            i = tmp0 + 1 | 0;
          }
           while (i < size);
        }
        var tmp_1;
        try {
          var dependencies = readable.z1s_1;
          var tmp0_elvis_lhs_0 = get_calculationBlockNestedLevel().wo();
          var invalidationNestedLevel = tmp0_elvis_lhs_0 == null ? 0 : tmp0_elvis_lhs_0;
          var tmp1_safe_receiver = dependencies;
          if (tmp1_safe_receiver == null)
            null;
          else {
            // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.forEach' call
            var inductionVariable = 0;
            var last = tmp1_safe_receiver.r1l_1;
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                // Inline function 'androidx.compose.runtime.DerivedSnapshotState.currentRecord.<anonymous>.<anonymous>' call
                var tmp_2 = tmp1_safe_receiver.p1l_1[index];
                var tmp0__anonymous__q1qw7t_0 = isObject(tmp_2) ? tmp_2 : THROW_CCE();
                var tmp_3 = tmp1_safe_receiver.q1l_1[index];
                var tmp1__anonymous__uwfjfc = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
                get_calculationBlockNestedLevel().p1s(tmp1__anonymous__uwfjfc + invalidationNestedLevel | 0);
                var tmp0_safe_receiver = snapshot.v1t();
                if (tmp0_safe_receiver == null)
                  null;
                else
                  tmp0_safe_receiver(tmp0__anonymous__q1qw7t_0);
              }
               while (inductionVariable < last);
          }
          get_calculationBlockNestedLevel().p1s(invalidationNestedLevel);
          tmp_1 = Unit_getInstance();
        }finally {
          // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
          // Inline function 'kotlin.contracts.contract' call
          var size_0 = observers.s1s_1;
          if (size_0 > 0) {
            var i_0 = 0;
            var tmp_4 = observers.q1s_1;
            var content_0 = isArray(tmp_4) ? tmp_4 : THROW_CCE();
            do {
              // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
              var tmp1__anonymous__uwfjfc_0 = content_0[i_0];
              var done = tmp1__anonymous__uwfjfc_0.a4();
              done($this);
              var tmp0_0 = i_0;
              i_0 = tmp0_0 + 1 | 0;
            }
             while (i_0 < size_0);
          }
        }
        tmp$ret$2 = tmp_1;
      }
      return readable;
    }
    var tmp0_elvis_lhs_1 = get_calculationBlockNestedLevel().wo();
    var nestedCalculationLevel = tmp0_elvis_lhs_1 == null ? 0 : tmp0_elvis_lhs_1;
    var newDependencies = IdentityArrayMap_init_$Create$(0, 1, null);
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.notifyObservers' call
    var tmp0_elvis_lhs_2 = _get_derivedStateObservers_$accessor$zxz8qy_fmk8o5().wo();
    var tmp_5;
    if (tmp0_elvis_lhs_2 == null) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      var tmp$ret$3;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$3 = fillArrayVal(Array(0), null);
      tmp$ret$4 = new MutableVector(tmp$ret$3, 0);
      tmp_5 = tmp$ret$4;
    } else {
      tmp_5 = tmp0_elvis_lhs_2;
    }
    var observers_0 = tmp_5;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var size_1 = observers_0.s1s_1;
    if (size_1 > 0) {
      var i_1 = 0;
      var tmp_6 = observers_0.q1s_1;
      var content_1 = isArray(tmp_6) ? tmp_6 : THROW_CCE();
      do {
        // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
        var tmp2__anonymous__z9zvc9 = content_1[i_1];
        var start_0 = tmp2__anonymous__z9zvc9.z3();
        start_0($this);
        var tmp0_1 = i_1;
        i_1 = tmp0_1 + 1 | 0;
      }
       while (i_1 < size_1);
    }
    var tmp_7;
    try {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.DerivedSnapshotState.currentRecord.<anonymous>' call
      get_calculationBlockNestedLevel().p1s(nestedCalculationLevel + 1 | 0);
      var tmp_8 = Companion_getInstance_9();
      var result = tmp_8.w1t(DerivedSnapshotState$currentRecord$lambda($this, newDependencies, nestedCalculationLevel), null, calculation);
      get_calculationBlockNestedLevel().p1s(nestedCalculationLevel);
      tmp$ret$5 = result;
      tmp_7 = tmp$ret$5;
    }finally {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var size_2 = observers_0.s1s_1;
      if (size_2 > 0) {
        var i_2 = 0;
        var tmp_9 = observers_0.q1s_1;
        var content_2 = isArray(tmp_9) ? tmp_9 : THROW_CCE();
        do {
          // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
          var tmp3__anonymous__ufb84q = content_2[i_2];
          var done_0 = tmp3__anonymous__ufb84q.a4();
          done_0($this);
          var tmp0_2 = i_2;
          i_2 = tmp0_2 + 1 | 0;
        }
         while (i_2 < size_2);
      }
    }
    tmp$ret$6 = tmp_7;
    var result_0 = tmp$ret$6;
    var tmp$ret$10;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp4_synchronized = get_lock();
    var tmp$ret$8;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.runtime.DerivedSnapshotState.currentRecord.<anonymous>' call
    var currentSnapshot = Companion_getInstance_9().s19();
    var tmp_10;
    var tmp_11;
    if (!(readable.a1t_1 === Companion_getInstance_2().u1s_1)) {
      var tmp0_safe_receiver_0 = $this.m1t_1;
      var tmp_12;
      if (tmp0_safe_receiver_0 == null) {
        tmp_12 = null;
      } else {
        var tmp_13 = readable.a1t_1;
        tmp_12 = tmp0_safe_receiver_0.x1t(result_0, (tmp_13 == null ? true : isObject(tmp_13)) ? tmp_13 : THROW_CCE());
      }
      tmp_11 = tmp_12 === true;
    } else {
      tmp_11 = false;
    }
    if (tmp_11) {
      readable.z1s_1 = newDependencies;
      readable.b1t_1 = readable.j1t($this, currentSnapshot);
      tmp_10 = readable;
    } else {
      var writable = newWritableRecord($this.n1t_1, $this, currentSnapshot);
      writable.z1s_1 = newDependencies;
      writable.b1t_1 = writable.j1t($this, currentSnapshot);
      writable.a1t_1 = result_0;
      tmp_10 = writable;
    }
    tmp$ret$7 = tmp_10;
    tmp$ret$8 = tmp$ret$7;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    var record = tmp$ret$10;
    if (nestedCalculationLevel === 0) {
      Companion_getInstance_9().y1t();
    }
    return record;
  }
  function displayValue($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = $this.n1t_1;
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    if (tmp1__anonymous__uwfjfc.i1t($this, Companion_getInstance_9().s19())) {
      return toString_0(tmp1__anonymous__uwfjfc.a1t_1);
    }
    return '<Not calculated>';
  }
  function DerivedSnapshotState$currentRecord$lambda(this$0, $newDependencies, $nestedCalculationLevel) {
    return function (it) {
      var tmp;
      if (it === this$0) {
        throw IllegalStateException_init_$Create$('A derived state calculation cannot read itself');
      }
      var tmp_0;
      if (isInterface(it, StateObject)) {
        var readNestedLevel = ensureNotNull(get_calculationBlockNestedLevel().wo());
        var tmp$ret$0;
        // Inline function 'kotlin.math.min' call
        var tmp0_min = readNestedLevel - $nestedCalculationLevel | 0;
        var tmp0_elvis_lhs = $newDependencies.c1s(it);
        var tmp1_min = tmp0_elvis_lhs == null ? IntCompanionObject_getInstance().c1_1 : tmp0_elvis_lhs;
        tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
        $newDependencies.y1q(it, tmp$ret$0);
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function DerivedSnapshotState(calculation, policy) {
    this.l1t_1 = calculation;
    this.m1t_1 = policy;
    this.n1t_1 = new ResultRecord();
  }
  DerivedSnapshotState.prototype.n1s = function () {
    return this.m1t_1;
  };
  DerivedSnapshotState.prototype.o1t = function (snapshot) {
    return currentRecord(this, current_0(this.n1t_1, snapshot), snapshot, false, this.l1t_1);
  };
  DerivedSnapshotState.prototype.k1t = function () {
    return this.n1t_1;
  };
  DerivedSnapshotState.prototype.z1t = function (value) {
    var tmp = this;
    tmp.n1t_1 = value instanceof ResultRecord ? value : THROW_CCE();
  };
  DerivedSnapshotState.prototype.i2 = function () {
    var tmp0_safe_receiver = Companion_getInstance_9().s19().v1t();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(this);
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.n1t_1;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.DerivedSnapshotState.<get-value>.<anonymous>' call
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    var tmp = currentRecord(this, tmp1__anonymous__uwfjfc, Companion_getInstance_9().s19(), true, this.l1t_1).a1t_1;
    tmp$ret$0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  DerivedSnapshotState.prototype.m1s = function () {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.n1t_1;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.DerivedSnapshotState.<get-currentValue>.<anonymous>' call
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    var tmp = currentRecord(this, tmp1__anonymous__uwfjfc, Companion_getInstance_9().s19(), false, this.l1t_1).a1t_1;
    tmp$ret$0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  DerivedSnapshotState.prototype.k1r = function () {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.n1t_1;
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.DerivedSnapshotState.<get-dependencies>.<anonymous>' call
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    var record = currentRecord(this, tmp1__anonymous__uwfjfc, Companion_getInstance_9().s19(), false, this.l1t_1);
    var tmp0_safe_receiver = record.z1s_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p1l_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.emptyArray' call
      tmp$ret$0 = [];
      tmp = tmp$ret$0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  DerivedSnapshotState.prototype.toString = function () {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.n1t_1;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.DerivedSnapshotState.toString.<anonymous>' call
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    tmp$ret$0 = 'DerivedState(value=' + displayValue(this) + ')@' + hashCode(this);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  DerivedSnapshotState.$metadata$ = classMeta('DerivedSnapshotState', [StateObject, DerivedState]);
  function notifyObservers(derivedState, block) {
    init_properties_DerivedState_kt_59k4km();
    var tmp0_elvis_lhs = _get_derivedStateObservers_$accessor$zxz8qy_fmk8o5().wo();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(0), null);
      tmp$ret$1 = new MutableVector(tmp$ret$0, 0);
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var observers = tmp;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var size = observers.s1s_1;
    if (size > 0) {
      var i = 0;
      var tmp_0 = observers.q1s_1;
      var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
      do {
        // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
        var tmp0__anonymous__q1qw7t = content[i];
        var start = tmp0__anonymous__q1qw7t.z3();
        start(derivedState);
        var tmp0 = i;
        i = tmp0 + 1 | 0;
      }
       while (i < size);
    }
    var tmp_1;
    try {
      tmp_1 = block();
    }finally {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var size_0 = observers.s1s_1;
      if (size_0 > 0) {
        var i_0 = 0;
        var tmp_2 = observers.q1s_1;
        var content_0 = isArray(tmp_2) ? tmp_2 : THROW_CCE();
        do {
          // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
          var tmp1__anonymous__uwfjfc = content_0[i_0];
          var done = tmp1__anonymous__uwfjfc.a4();
          done(derivedState);
          var tmp0_0 = i_0;
          i_0 = tmp0_0 + 1 | 0;
        }
         while (i_0 < size_0);
      }
    }
    return tmp_1;
  }
  function _get_derivedStateObservers_$accessor$zxz8qy_fmk8o5() {
    init_properties_DerivedState_kt_59k4km();
    return get_derivedStateObservers();
  }
  var properties_initialized_DerivedState_kt_scch8q;
  function init_properties_DerivedState_kt_59k4km() {
    if (properties_initialized_DerivedState_kt_scch8q) {
    } else {
      properties_initialized_DerivedState_kt_scch8q = true;
      calculationBlockNestedLevel = new SnapshotThreadLocal();
      derivedStateObservers = new SnapshotThreadLocal();
    }
  }
  function get_InternalDisposableEffectScope() {
    init_properties_Effects_kt_ajl6oe();
    return InternalDisposableEffectScope;
  }
  var InternalDisposableEffectScope;
  function _no_name_provided__qut3iv($onDisposeEffect) {
    this.b1u_1 = $onDisposeEffect;
  }
  _no_name_provided__qut3iv.prototype.vk = function () {
    this.b1u_1();
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [DisposableEffectResult]);
  function DisposableEffectScope() {
    this.c1u_1 = 0;
  }
  DisposableEffectScope.prototype.d1u = function (onDisposeEffect) {
    return new _no_name_provided__qut3iv(onDisposeEffect);
  };
  DisposableEffectScope.$metadata$ = classMeta('DisposableEffectScope');
  function DisposableEffectResult() {
  }
  DisposableEffectResult.$metadata$ = interfaceMeta('DisposableEffectResult');
  function SideEffect$composable(effect, $composer, $changed) {
    init_properties_Effects_kt_ajl6oe();
    var $composer_0 = $composer;
    $composer_0.y1a(-706403066);
    sourceInformation($composer_0, 'C(SideEffect$composable):Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-706403066, $changed, -1, 'androidx.compose.runtime.SideEffect$composable (Effects.kt:44)');
    }
    $composer_0.s1n(effect);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
  }
  function LaunchedEffect$composable(key1, block, $composer, $changed) {
    init_properties_Effects_kt_ajl6oe();
    var $composer_0 = $composer;
    $composer_0.y1a(1556009691);
    sourceInformation($composer_0, 'C(LaunchedEffect$composable)P(1)336@14101L58:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1556009691, $changed, -1, 'androidx.compose.runtime.LaunchedEffect$composable (Effects.kt:331)');
    }
    var applyContext = $composer_0.x1m();
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = $composer_0;
    var tmp1_remember$composable = 14 & $changed;
    var $composer_1 = tmp0_remember$composable;
    $composer_1.y1a(-838505973);
    sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = $composer_1.z1a(key1);
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.LaunchedEffect$composable.<anonymous>' call
      tmp$ret$0 = new LaunchedEffectImpl(applyContext, block);
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
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
  }
  function rememberCoroutineScope$composable(getContext, $composer, $changed, $default) {
    init_properties_Effects_kt_ajl6oe();
    var getContext_0 = {_v: getContext};
    var $composer_0 = $composer;
    $composer_0.y1a(102870005);
    sourceInformation($composer_0, 'C(rememberCoroutineScope$composable)476@19869L144:Effects.kt#9igjgp');
    if (!(($default & 1) === 0)) {
      getContext_0._v = rememberCoroutineScope$composable$lambda;
    }
    var composer = $composer_0;
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
    if (false ? true : tmp0_let === Companion_getInstance_1().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
      tmp$ret$0 = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext_0._v(), composer));
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
    var wrapper = tmp$ret$4;
    var tmp0_0 = wrapper.e1u_1;
    $composer_0.d1b();
    return tmp0_0;
  }
  function LaunchedEffect$composable_0(key1, key2, block, $composer, $changed) {
    init_properties_Effects_kt_ajl6oe();
    var $composer_0 = $composer;
    $composer_0.y1a(-1365960137);
    sourceInformation($composer_0, 'C(LaunchedEffect$composable)P(1,2)359@15109L64:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1365960137, $changed, -1, 'androidx.compose.runtime.LaunchedEffect$composable (Effects.kt:353)');
    }
    var applyContext = $composer_0.x1m();
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
    var tmp2_cache = !!($composer_1.z1a(key1) | $composer_1.z1a(key2));
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.LaunchedEffect$composable.<anonymous>' call
      tmp$ret$0 = new LaunchedEffectImpl(applyContext, block);
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
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
  }
  function LaunchedEffectImpl(parentCoroutineContext, task) {
    this.f1u_1 = task;
    this.g1u_1 = CoroutineScope(parentCoroutineContext);
    this.h1u_1 = null;
  }
  LaunchedEffectImpl.prototype.w1k = function () {
    var tmp0_safe_receiver = this.h1u_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel$default(tmp0_safe_receiver, 'Old job was still running!', null, 2, null);
    }
    var tmp = this;
    tmp.h1u_1 = launch$default(this.g1u_1, null, null, this.f1u_1, 3, null);
  };
  LaunchedEffectImpl.prototype.y1k = function () {
    var tmp0_safe_receiver = this.h1u_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.dj(null, 1, null);
    }
    this.h1u_1 = null;
  };
  LaunchedEffectImpl.prototype.x1k = function () {
    var tmp0_safe_receiver = this.h1u_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.dj(null, 1, null);
    }
    this.h1u_1 = null;
  };
  LaunchedEffectImpl.$metadata$ = classMeta('LaunchedEffectImpl', [RememberObserver]);
  function CompositionScopedCoroutineScopeCanceller(coroutineScope) {
    this.e1u_1 = coroutineScope;
  }
  CompositionScopedCoroutineScopeCanceller.prototype.i1u = function () {
    return this.e1u_1;
  };
  CompositionScopedCoroutineScopeCanceller.prototype.w1k = function () {
  };
  CompositionScopedCoroutineScopeCanceller.prototype.y1k = function () {
    cancel$default_0(this.e1u_1, null, 1, null);
  };
  CompositionScopedCoroutineScopeCanceller.prototype.x1k = function () {
    cancel$default_0(this.e1u_1, null, 1, null);
  };
  CompositionScopedCoroutineScopeCanceller.$metadata$ = classMeta('CompositionScopedCoroutineScopeCanceller', [RememberObserver]);
  function createCompositionCoroutineScope(coroutineContext, composer) {
    init_properties_Effects_kt_ajl6oe();
    var tmp;
    if (!(coroutineContext.g5(Key_getInstance()) == null)) {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Job$default(null, 1, null);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.createCompositionCoroutineScope.<anonymous>' call
      tmp0_apply.on(IllegalArgumentException_init_$Create$('CoroutineContext supplied to rememberCoroutineScope may not include a parent job'));
      tmp$ret$0 = tmp0_apply;
      tmp = CoroutineScope(tmp$ret$0);
    } else {
      var applyContext = composer.x1m();
      tmp = CoroutineScope(applyContext.n5(Job(applyContext.g5(Key_getInstance()))).n5(coroutineContext));
    }
    return tmp;
  }
  function DisposableEffect$composable(key1, key2, effect, $composer, $changed) {
    init_properties_Effects_kt_ajl6oe();
    var $composer_0 = $composer;
    $composer_0.y1a(235732070);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1,2)194@8057L53:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(235732070, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:189)');
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
    var tmp2_cache = !!($composer_1.z1a(key1) | $composer_1.z1a(key2));
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      tmp$ret$0 = new DisposableEffectImpl(effect);
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
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
  }
  function DisposableEffect$composable_0(key1, effect, $composer, $changed) {
    init_properties_Effects_kt_ajl6oe();
    var $composer_0 = $composer;
    $composer_0.y1a(927399050);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1)154@6171L47:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(927399050, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:150)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = $composer_0;
    var tmp1_remember$composable = 14 & $changed;
    var $composer_1 = tmp0_remember$composable;
    $composer_1.y1a(-838505973);
    sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = $composer_1.z1a(key1);
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      tmp$ret$0 = new DisposableEffectImpl(effect);
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
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
  }
  function DisposableEffectImpl(effect) {
    this.j1u_1 = effect;
    this.k1u_1 = null;
  }
  DisposableEffectImpl.prototype.w1k = function () {
    this.k1u_1 = this.j1u_1(get_InternalDisposableEffectScope());
  };
  DisposableEffectImpl.prototype.y1k = function () {
    var tmp0_safe_receiver = this.k1u_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.vk();
    }
    this.k1u_1 = null;
  };
  DisposableEffectImpl.prototype.x1k = function () {
  };
  DisposableEffectImpl.$metadata$ = classMeta('DisposableEffectImpl', [RememberObserver]);
  function LaunchedEffect$composable_1(keys, block, $composer, $changed) {
    init_properties_Effects_kt_ajl6oe();
    var $composer_0 = $composer;
    $composer_0.y1a(-132231756);
    sourceInformation($composer_0, 'C(LaunchedEffect$composable)P(1)406@17175L59:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-132231756, $changed, -1, 'androidx.compose.runtime.LaunchedEffect$composable (Effects.kt:401)');
    }
    var applyContext = $composer_0.x1m();
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = keys.slice();
    var tmp1_remember$composable = $composer_0;
    var $composer_1 = tmp1_remember$composable;
    $composer_1.y1a(-1603429786);
    sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var indexedObject = tmp0_remember$composable;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var key = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_1.z1a(key));
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = invalid;
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.LaunchedEffect$composable.<anonymous>' call
      tmp$ret$0 = new LaunchedEffectImpl(applyContext, block);
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
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
  }
  function LaunchedEffect$composable_2(key1, key2, key3, block, $composer, $changed) {
    init_properties_Effects_kt_ajl6oe();
    var $composer_0 = $composer;
    $composer_0.y1a(-1589460333);
    sourceInformation($composer_0, 'C(LaunchedEffect$composable)P(1,2,3)383@16147L70:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1589460333, $changed, -1, 'androidx.compose.runtime.LaunchedEffect$composable (Effects.kt:376)');
    }
    var applyContext = $composer_0.x1m();
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = $composer_0;
    var tmp1_remember$composable = 14 & $changed | 112 & $changed | 896 & $changed;
    var $composer_1 = tmp0_remember$composable;
    $composer_1.y1a(-1058148781);
    sourceInformation($composer_1, 'C(remember$composable)P(1,2,3):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = !!(!!($composer_1.z1a(key1) | $composer_1.z1a(key2)) | $composer_1.z1a(key3));
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.LaunchedEffect$composable.<anonymous>' call
      tmp$ret$0 = new LaunchedEffectImpl(applyContext, block);
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
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
  }
  function rememberCoroutineScope$composable$lambda() {
    init_properties_Effects_kt_ajl6oe();
    return EmptyCoroutineContext_getInstance();
  }
  var properties_initialized_Effects_kt_cj8kem;
  function init_properties_Effects_kt_ajl6oe() {
    if (properties_initialized_Effects_kt_cj8kem) {
    } else {
      properties_initialized_Effects_kt_cj8kem = true;
      InternalDisposableEffectScope = new DisposableEffectScope();
    }
  }
  function hashCodeOf($this, value) {
    var tmp;
    if (value instanceof Enum) {
      tmp = value.t5_1;
    } else {
      var tmp0_safe_receiver = value;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp;
  }
  function JoinedKey(left, right) {
    this.l1u_1 = left;
    this.m1u_1 = right;
  }
  JoinedKey.prototype.hashCode = function () {
    return imul(hashCodeOf(this, this.l1u_1), 31) + hashCodeOf(this, this.m1u_1) | 0;
  };
  JoinedKey.prototype.toString = function () {
    return 'JoinedKey(left=' + toString_0(this.l1u_1) + ', right=' + toString_0(this.m1u_1) + ')';
  };
  JoinedKey.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinedKey))
      return false;
    var tmp0_other_with_cast = other instanceof JoinedKey ? other : THROW_CCE();
    if (!equals(this.l1u_1, tmp0_other_with_cast.l1u_1))
      return false;
    if (!equals(this.m1u_1, tmp0_other_with_cast.m1u_1))
      return false;
    return true;
  };
  JoinedKey.$metadata$ = classMeta('JoinedKey');
  function Key_0() {
    Key_instance = this;
  }
  Key_0.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key_0();
    return Key_instance;
  }
  function MonotonicFrameClock() {
  }
  MonotonicFrameClock.$metadata$ = interfaceMeta('MonotonicFrameClock', [Element]);
  function get_monotonicFrameClock(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.g5(Key_getInstance_0());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'A MonotonicFrameClock is not available in this CoroutineContext. Callers should supply an appropriate MonotonicFrameClock using withContext.';
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function withFrameNanos(onFrame, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $cont.o4();
    return get_monotonicFrameClock(tmp$ret$0).x1a(onFrame, $cont);
  }
  function get_movableContentKey() {
    return movableContentKey;
  }
  var movableContentKey;
  function OpaqueKey(key) {
    this.n1u_1 = key;
  }
  OpaqueKey.prototype.toString = function () {
    return 'OpaqueKey(key=' + this.n1u_1 + ')';
  };
  OpaqueKey.prototype.hashCode = function () {
    return getStringHashCode(this.n1u_1);
  };
  OpaqueKey.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpaqueKey))
      return false;
    var tmp0_other_with_cast = other instanceof OpaqueKey ? other : THROW_CCE();
    if (!(this.n1u_1 === tmp0_other_with_cast.n1u_1))
      return false;
    return true;
  };
  OpaqueKey.$metadata$ = classMeta('OpaqueKey');
  function _set_rereading__pnqtpo($this, value) {
    if (value) {
      $this.j1c_1 = $this.j1c_1 | 32;
    } else {
      $this.j1c_1 = $this.j1c_1 & -33;
    }
  }
  function _get_rereading__g2iruw($this) {
    return !(($this.j1c_1 & 32) === 0);
  }
  function _set_skipped__p8q2c5($this, value) {
    if (value) {
      $this.j1c_1 = $this.j1c_1 | 16;
    } else {
      $this.j1c_1 = $this.j1c_1 & -17;
    }
  }
  function RecomposeScopeImpl$end$lambda(this$0, $token, $tmp0_safe_receiver) {
    return function (composition) {
      var tmp;
      var tmp_0;
      if (this$0.n1c_1 === $token ? equals($tmp0_safe_receiver, this$0.o1c_1) : false) {
        tmp_0 = composition instanceof CompositionImpl;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.removeValueIf' call
        var destinationIndex = 0;
        var inductionVariable = 0;
        var last = $tmp0_safe_receiver.o1u_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp_1 = $tmp0_safe_receiver.p1u_1[i];
            var key = isObject(tmp_1) ? tmp_1 : THROW_CCE();
            var value = $tmp0_safe_receiver.q1u_1[i];
            var tmp$ret$4;
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>' call
            var tmp$ret$3;
            // Inline function 'kotlin.also' call
            var tmp0_also = !(value === $token);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            if (tmp0_also) {
              composition.y1r(key, this$0);
              var tmp0_safe_receiver = isInterface(key, DerivedState) ? key : null;
              if (tmp0_safe_receiver == null)
                null;
              else {
                var tmp$ret$2;
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$1;
                // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                composition.z1r(tmp0_safe_receiver);
                var tmp0_safe_receiver_0 = this$0.p1c_1;
                var tmp_2;
                if (tmp0_safe_receiver_0 == null) {
                  tmp_2 = null;
                } else {
                  var tmp$ret$0;
                  // Inline function 'kotlin.let' call
                  // Inline function 'kotlin.contracts.contract' call
                  tmp0_safe_receiver_0.r1u(tmp0_safe_receiver);
                  var tmp_3;
                  if (tmp0_safe_receiver_0.r1l_1 === 0) {
                    this$0.p1c_1 = null;
                    tmp_3 = Unit_getInstance();
                  }
                  tmp$ret$0 = tmp_3;
                  tmp_2 = Unit_getInstance();
                }
                tmp$ret$1 = tmp_2;
                tmp$ret$2 = tmp$ret$1;
              }
            }
            tmp$ret$3 = tmp0_also;
            tmp$ret$4 = tmp$ret$3;
            if (!tmp$ret$4) {
              if (!(destinationIndex === i)) {
                $tmp0_safe_receiver.p1u_1[destinationIndex] = key;
                $tmp0_safe_receiver.q1u_1[destinationIndex] = value;
              }
              var tmp1 = destinationIndex;
              destinationIndex = tmp1 + 1 | 0;
            }
          }
           while (inductionVariable < last);
        var inductionVariable_0 = destinationIndex;
        var last_0 = $tmp0_safe_receiver.o1u_1;
        if (inductionVariable_0 < last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            $tmp0_safe_receiver.p1u_1[i_0] = null;
          }
           while (inductionVariable_0 < last_0);
        $tmp0_safe_receiver.o1u_1 = destinationIndex;
        var tmp_4;
        if ($tmp0_safe_receiver.o1u_1 === 0) {
          this$0.o1c_1 = null;
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      }
      return Unit_getInstance();
    };
  }
  function RecomposeScopeImpl(composition) {
    this.j1c_1 = 0;
    this.k1c_1 = composition;
    this.l1c_1 = null;
    this.m1c_1 = null;
    this.n1c_1 = 0;
    this.o1c_1 = null;
    this.p1c_1 = null;
  }
  RecomposeScopeImpl.prototype.u1o = function () {
    return this.l1c_1;
  };
  RecomposeScopeImpl.prototype.t1q = function () {
    var tmp;
    if (!(this.k1c_1 == null)) {
      var tmp0_safe_receiver = this.l1c_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t1q();
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  };
  RecomposeScopeImpl.prototype.x1r = function () {
    return !(this.m1c_1 == null);
  };
  RecomposeScopeImpl.prototype.n1o = function (value) {
    if (value) {
      this.j1c_1 = this.j1c_1 | 1;
    } else {
      this.j1c_1 = this.j1c_1 & -2;
    }
  };
  RecomposeScopeImpl.prototype.s1i = function () {
    return !((this.j1c_1 & 1) === 0);
  };
  RecomposeScopeImpl.prototype.b1n = function (value) {
    if (value) {
      this.j1c_1 = this.j1c_1 | 2;
    } else {
      this.j1c_1 = this.j1c_1 & -3;
    }
  };
  RecomposeScopeImpl.prototype.v1r = function () {
    return !((this.j1c_1 & 2) === 0);
  };
  RecomposeScopeImpl.prototype.c1o = function (value) {
    if (value) {
      this.j1c_1 = this.j1c_1 | 4;
    } else {
      this.j1c_1 = this.j1c_1 & -5;
    }
  };
  RecomposeScopeImpl.prototype.c1n = function () {
    return !((this.j1c_1 & 4) === 0);
  };
  RecomposeScopeImpl.prototype.r1j = function (value) {
    if (value) {
      this.j1c_1 = this.j1c_1 | 8;
    } else {
      this.j1c_1 = this.j1c_1 & -9;
    }
  };
  RecomposeScopeImpl.prototype.f1n = function () {
    return !((this.j1c_1 & 8) === 0);
  };
  RecomposeScopeImpl.prototype.i1j = function (composer) {
    var tmp0_safe_receiver = this.m1c_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver(composer, 1);
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Invalid restart scope');
    } else {
    }
  };
  RecomposeScopeImpl.prototype.f1q = function (value) {
    var tmp0_safe_receiver = this.k1c_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u1r(this, value);
    return tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
  };
  RecomposeScopeImpl.prototype.wn = function () {
    this.k1c_1 = null;
    this.o1c_1 = null;
    this.p1c_1 = null;
  };
  RecomposeScopeImpl.prototype.o1m = function (composition) {
    this.k1c_1 = composition;
  };
  RecomposeScopeImpl.prototype.t1r = function () {
    var tmp0_safe_receiver = this.k1c_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.u1r(this, null);
  };
  RecomposeScopeImpl.prototype.g1p = function (block) {
    this.m1c_1 = block;
  };
  RecomposeScopeImpl.prototype.d1o = function () {
    return !((this.j1c_1 & 16) === 0);
  };
  RecomposeScopeImpl.prototype.s1j = function (token) {
    this.n1c_1 = token;
    _set_skipped__p8q2c5(this, false);
  };
  RecomposeScopeImpl.prototype.x1n = function () {
    _set_skipped__p8q2c5(this, true);
  };
  RecomposeScopeImpl.prototype.l1r = function (instance) {
    if (_get_rereading__g2iruw(this))
      return Unit_getInstance();
    var tmp0_elvis_lhs = this.o1c_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new IdentityArrayIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
      this.o1c_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.s1u(instance, this.n1c_1);
    if (isInterface(instance, DerivedState)) {
      var tmp1_elvis_lhs = this.p1c_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        var tmp1_also = IdentityArrayMap_init_$Create$(0, 1, null);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
        this.p1c_1 = tmp1_also;
        tmp$ret$1 = tmp1_also;
        tmp_0 = tmp$ret$1;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var tracked = tmp_0;
      tracked.y1q(instance, instance.m1s());
    }
  };
  RecomposeScopeImpl.prototype.l1q = function () {
    return !(this.p1c_1 == null);
  };
  RecomposeScopeImpl.prototype.r1p = function (instances) {
    if (instances == null)
      return true;
    var tmp0_elvis_lhs = this.p1c_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    var tmp_0;
    if (instances.o1k()) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp_1;
        if (!(instances == null) ? isInterface(instances, Collection) : false) {
          tmp_1 = instances.h();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = instances.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>' call
          var tmp_2;
          if (isInterface(element, DerivedState)) {
            var tmp$ret$2;
            // Inline function 'kotlin.let' call
            var tmp0_let = element;
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$1;
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>.<anonymous>' call
            if (isInterface(tmp0_let, DerivedState))
              tmp0_let;
            else
              THROW_CCE();
            var tmp0_elvis_lhs_0 = tmp0_let.n1s();
            var policy = tmp0_elvis_lhs_0 == null ? structuralEqualityPolicy() : tmp0_elvis_lhs_0;
            tmp$ret$1 = policy.x1t(tmp0_let.m1s(), trackedDependencies.c1s(tmp0_let));
            tmp$ret$2 = tmp$ret$1;
            tmp_2 = tmp$ret$2;
          } else {
            tmp_2 = false;
          }
          tmp$ret$3 = tmp_2;
          if (!tmp$ret$3) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0)
      return false;
    return true;
  };
  RecomposeScopeImpl.prototype.h1j = function () {
    var tmp0_safe_receiver = this.k1c_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>' call
      var tmp0_safe_receiver_0 = this.o1c_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _set_rereading__pnqtpo(this, true);
        var tmp_0;
        try {
          var inductionVariable = 0;
          var last = tmp0_safe_receiver_0.o1u_1;
          var tmp_1;
          if (inductionVariable < last) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_2 = tmp0_safe_receiver_0.p1u_1[i];
              var tmp0__anonymous__q1qw7t = isObject(tmp_2) ? tmp_2 : THROW_CCE();
              var tmp1__anonymous__uwfjfc = tmp0_safe_receiver_0.q1u_1[i];
              tmp0_safe_receiver.i1r(tmp0__anonymous__q1qw7t);
            }
             while (inductionVariable < last);
            tmp_1 = Unit_getInstance();
          }
          tmp_0 = tmp_1;
        }finally {
          _set_rereading__pnqtpo(this, false);
        }
        tmp$ret$0 = tmp_0;
        tmp = Unit_getInstance();
      }
      tmp$ret$1 = tmp;
      tmp$ret$2 = tmp$ret$1;
    }
  };
  RecomposeScopeImpl.prototype.b1o = function (token) {
    var tmp0_safe_receiver = this.o1c_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>' call
      var tmp_0;
      var tmp_1;
      if (!this.d1o()) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.any' call
          var inductionVariable = 0;
          var last = tmp0_safe_receiver.o1u_1;
          if (inductionVariable < last)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var tmp$ret$0;
              // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>' call
              var tmp_2 = tmp0_safe_receiver.p1u_1[i];
              var tmp0__anonymous__q1qw7t = isObject(tmp_2) ? tmp_2 : THROW_CCE();
              var tmp1__anonymous__uwfjfc = tmp0_safe_receiver.q1u_1[i];
              tmp$ret$0 = !(tmp1__anonymous__uwfjfc === token);
              if (tmp$ret$0) {
                tmp$ret$1 = true;
                break $l$block;
              }
            }
             while (inductionVariable < last);
          tmp$ret$1 = false;
        }
        tmp_1 = tmp$ret$1;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = RecomposeScopeImpl$end$lambda(this, token, tmp0_safe_receiver);
      } else {
        tmp_0 = null;
      }
      tmp$ret$2 = tmp_0;
      tmp$ret$3 = tmp$ret$2;
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  RecomposeScopeImpl.$metadata$ = classMeta('RecomposeScopeImpl', [ScopeUpdateScope, RecomposeScope]);
  function RecomposeScope() {
  }
  RecomposeScope.$metadata$ = interfaceMeta('RecomposeScope');
  var ProduceAnotherFrame;
  var FramePending;
  var State_ShutDown_instance;
  var State_ShuttingDown_instance;
  var State_Inactive_instance;
  var State_InactivePendingWork_instance;
  var State_Idle_instance;
  var State_PendingWork_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_getInstance();
    State_entriesInitialized = true;
    State_ShutDown_instance = new State('ShutDown', 0);
    State_ShuttingDown_instance = new State('ShuttingDown', 1);
    State_Inactive_instance = new State('Inactive', 2);
    State_InactivePendingWork_instance = new State('InactivePendingWork', 3);
    State_Idle_instance = new State('Idle', 4);
    State_PendingWork_instance = new State('PendingWork', 5);
  }
  function addRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.t1u_1.i2();
      var new_0 = old.a(info);
      if (old === new_0 ? true : $this.t1u_1.q11(old, new_0))
        break $l$loop;
    }
  }
  function removeRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.t1u_1.i2();
      var new_0 = old.b4(info);
      if (old === new_0 ? true : $this.t1u_1.q11(old, new_0))
        break $l$loop;
    }
  }
  function invoke$clearRecompositionState(toRecompose, toInsert, toApply, toLateApply, toComplete) {
    toRecompose.g9();
    toInsert.g9();
    toApply.g9();
    toLateApply.g9();
    toComplete.g9();
  }
  function invoke$fillToInsert(toInsert, this$0) {
    toInsert.g9();
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this$0.a1v_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var tmp0_fastForEach = this$0.h1v_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.g(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        toInsert.a(item);
      }
       while (inductionVariable <= last);
    this$0.h1v_1.g9();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete) {
    return function (frameTime) {
      var tmp;
      if (this$0.x1u_1.v1a()) {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.runtime.trace' call
          var token = Trace_getInstance().i1l('Recomposer:animation');
          try {
            this$0.x1u_1.w1a(frameTime);
            Companion_getInstance_9().s1v();
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }finally {
            Trace_getInstance().u1l(token);
          }
        }
        tmp = tmp$ret$0;
      }
      var tmp$ret$16;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_getInstance().i1l('Recomposer:recompose');
        try {
          var tmp$ret$15;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp0_synchronized = this$0.a1v_1;
          var tmp$ret$1;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          recordComposerModificationsLocked(this$0);
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var tmp0_fastForEach = this$0.f1v_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = tmp0_fastForEach.f() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0_fastForEach.g(index);
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              // Inline function 'kotlin.collections.plusAssign' call
              $toRecompose.a(item);
            }
             while (inductionVariable <= last);
          this$0.f1v_1.g9();
          tmp$ret$1 = Unit_getInstance();
          tmp$ret$2 = tmp$ret$1;
          var modifiedValues = new IdentityArraySet();
          var alreadyComposed = new IdentityArraySet();
          $l$loop: while (true) {
            var tmp_0;
            var tmp$ret$3;
            // Inline function 'kotlin.collections.isNotEmpty' call
            tmp$ret$3 = !$toRecompose.h();
            if (tmp$ret$3) {
              tmp_0 = true;
            } else {
              var tmp$ret$4;
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp$ret$4 = !$toInsert.h();
              tmp_0 = tmp$ret$4;
            }
            if (!tmp_0) {
              break $l$loop;
            }
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = $toRecompose.f() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = $toRecompose.g(index_0);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  alreadyComposed.t1p(item_0);
                  var tmp0_safe_receiver = performRecompose(this$0, item_0, modifiedValues);
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    var tmp$ret$5;
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    $toApply.a(tmp0_safe_receiver);
                    tmp$ret$5 = Unit_getInstance();
                  }
                }
                 while (inductionVariable_0 <= last_0);
            } catch ($p) {
              if ($p instanceof Exception) {
                processCompositionError$default(this$0, $p, null, true, 4, null);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toRecompose.g9();
            }
            if (modifiedValues.o1k()) {
              var tmp$ret$7;
              // Inline function 'androidx.compose.runtime.synchronized' call
              var tmp1_synchronized = this$0.a1v_1;
              var tmp$ret$6;
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              var tmp0_fastForEach_0 = this$0.d1v_1;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_1 = 0;
              var last_1 = tmp0_fastForEach_0.f() - 1 | 0;
              var tmp_1;
              if (inductionVariable_1 <= last_1) {
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = tmp0_fastForEach_0.g(index_1);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  if (!alreadyComposed.g3(item_1) ? item_1.h1r(modifiedValues) : false) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.a(item_1);
                  }
                }
                 while (inductionVariable_1 <= last_1);
                tmp_1 = Unit_getInstance();
              }
              tmp$ret$6 = tmp_1;
              tmp$ret$7 = tmp$ret$6;
            }
            if ($toRecompose.h()) {
              try {
                invoke$fillToInsert($toInsert, this$0);
                $l$loop_0: while (true) {
                  var tmp$ret$8;
                  // Inline function 'kotlin.collections.isNotEmpty' call
                  tmp$ret$8 = !$toInsert.h();
                  if (!tmp$ret$8) {
                    break $l$loop_0;
                  }
                  // Inline function 'kotlin.collections.plusAssign' call
                  var tmp2_plusAssign = performInsertValues(this$0, $toInsert, modifiedValues);
                  addAll($toLateApply, tmp2_plusAssign);
                  invoke$fillToInsert($toInsert, this$0);
                }
              } catch ($p) {
                if ($p instanceof Exception) {
                  processCompositionError$default(this$0, $p, null, true, 4, null);
                  invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                  return Unit_getInstance();
                } else {
                  throw $p;
                }
              }
            }
          }
          var tmp$ret$9;
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp$ret$9 = !$toApply.h();
          if (tmp$ret$9) {
            var tmp0_this = this$0;
            var tmp1 = tmp0_this.w1u_1;
            tmp0_this.w1u_1 = tmp1.vf();
            try {
              // Inline function 'kotlin.collections.plusAssign' call
              addAll($toComplete, $toApply);
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_2 = 0;
              var last_2 = $toApply.f() - 1 | 0;
              if (inductionVariable_2 <= last_2)
                do {
                  var index_2 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  var item_2 = $toApply.g(index_2);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  item_2.q1r();
                }
                 while (inductionVariable_2 <= last_2);
            } catch ($p) {
              if ($p instanceof Exception) {
                processCompositionError$default(this$0, $p, null, false, 12, null);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toApply.g9();
            }
          }
          var tmp$ret$10;
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp$ret$10 = !$toLateApply.h();
          if (tmp$ret$10) {
            try {
              // Inline function 'kotlin.collections.plusAssign' call
              addAll($toComplete, $toLateApply);
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator = $toLateApply.c();
              while (tmp0_iterator.d()) {
                var element = tmp0_iterator.e();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element.r1r();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                processCompositionError$default(this$0, $p, null, false, 12, null);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toLateApply.g9();
            }
          }
          var tmp$ret$11;
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp$ret$11 = !$toComplete.h();
          if (tmp$ret$11) {
            try {
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator_0 = $toComplete.c();
              while (tmp0_iterator_0.d()) {
                var element_0 = tmp0_iterator_0.e();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element_0.d1n();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                processCompositionError$default(this$0, $p, null, false, 12, null);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toComplete.g9();
            }
          }
          var tmp$ret$14;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp3_synchronized = this$0.a1v_1;
          var tmp$ret$13;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          var tmp$ret$12;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$12 = deriveStateLocked(this$0);
          tmp$ret$13 = tmp$ret$12;
          tmp$ret$14 = tmp$ret$13;
          tmp$ret$15 = tmp$ret$14;
          tmp$ret$16 = tmp$ret$15;
          break $l$block_0;
        }finally {
          Trace_getInstance().u1l(token_0);
        }
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$recompositionRunner$slambda$lambda(this$0) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.a1v_1;
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>' call
      var tmp;
      if (this$0.p1v_1.i2().v5(State_Idle_getInstance()) >= 0) {
        var tmp0_this = this$0;
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp0_plusAssign = tmp0_this.e1v_1;
        tmp0_plusAssign.a(changed);
        tmp = deriveStateLocked(this$0);
      } else {
        tmp = null;
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var tmp0_safe_receiver = tmp$ret$2;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$3;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp0_safe_receiver.m4(tmp$ret$3);
        tmp$ret$4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation) {
    this.b1w_1 = $block;
    this.c1w_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  Recomposer$recompositionRunner$slambda$slambda.prototype.e1w = function ($this$coroutineScope, $cont) {
    var tmp = this.f1w($this$coroutineScope, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  Recomposer$recompositionRunner$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $cont);
  };
  Recomposer$recompositionRunner$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = this.b1w_1(this.d1w_1, this.c1w_1, this);
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
  Recomposer$recompositionRunner$slambda$slambda.prototype.f1w = function ($this$coroutineScope, completion) {
    var i = new Recomposer$recompositionRunner$slambda$slambda(this.b1w_1, this.c1w_1, completion);
    i.d1w_1 = $this$coroutineScope;
    return i;
  };
  Recomposer$recompositionRunner$slambda$slambda.$metadata$ = classMeta('Recomposer$recompositionRunner$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Recomposer$recompositionRunner$slambda$slambda_0($block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.e1w($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  State.$metadata$ = classMeta('State', undefined, undefined, undefined, undefined, Enum.prototype);
  function deriveStateLocked($this) {
    if ($this.p1v_1.i2().v5(State_ShuttingDown_getInstance()) <= 0) {
      $this.d1v_1.g9();
      $this.e1v_1.g9();
      $this.f1v_1.g9();
      $this.g1v_1.g9();
      $this.h1v_1.g9();
      $this.k1v_1 = null;
      var tmp0_safe_receiver = $this.l1v_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.pk(null, 1, null);
      }
      $this.l1v_1 = null;
      $this.o1v_1 = null;
      return null;
    }
    var tmp;
    if (!($this.o1v_1 == null)) {
      tmp = State_Inactive_getInstance();
    } else {
      if ($this.b1v_1 == null) {
        $this.e1v_1.g9();
        $this.f1v_1.g9();
        tmp = $this.x1u_1.v1a() ? State_InactivePendingWork_getInstance() : State_Inactive_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        var tmp_2;
        var tmp_3;
        var tmp_4;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.isNotEmpty' call
        var tmp0_isNotEmpty = $this.f1v_1;
        tmp$ret$0 = !tmp0_isNotEmpty.h();
        if (tmp$ret$0) {
          tmp_4 = true;
        } else {
          var tmp$ret$1;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = $this.e1v_1;
          tmp$ret$1 = !tmp1_isNotEmpty.h();
          tmp_4 = tmp$ret$1;
        }
        if (tmp_4) {
          tmp_3 = true;
        } else {
          var tmp$ret$2;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp2_isNotEmpty = $this.g1v_1;
          tmp$ret$2 = !tmp2_isNotEmpty.h();
          tmp_3 = tmp$ret$2;
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          var tmp$ret$3;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp3_isNotEmpty = $this.h1v_1;
          tmp$ret$3 = !tmp3_isNotEmpty.h();
          tmp_2 = tmp$ret$3;
        }
        if (tmp_2) {
          tmp_1 = true;
        } else {
          tmp_1 = $this.m1v_1 > 0;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = $this.x1u_1.v1a();
        }
        if (tmp_0) {
          tmp = State_PendingWork_getInstance();
        } else {
          tmp = State_Idle_getInstance();
        }
      }
    }
    var newState = tmp;
    $this.p1v_1.p11(newState);
    var tmp_5;
    if (newState.equals(State_PendingWork_getInstance())) {
      var tmp$ret$4;
      // Inline function 'kotlin.also' call
      var tmp4_also = $this.l1v_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.deriveStateLocked.<anonymous>' call
      $this.l1v_1 = null;
      tmp$ret$4 = tmp4_also;
      tmp_5 = tmp$ret$4;
    } else {
      tmp_5 = null;
    }
    return tmp_5;
  }
  function _get_shouldKeepRecomposing__5j79sd($this) {
    var tmp;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.a1v_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
    tmp$ret$0 = !$this.n1v_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    if (tmp$ret$2) {
      tmp = true;
    } else {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.sequences.any' call
        var tmp1_any = $this.y1u_1.pn();
        var tmp0_iterator = tmp1_any.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
          tmp$ret$3 = element.wh();
          if (tmp$ret$3) {
            tmp$ret$4 = true;
            break $l$block;
          }
        }
        tmp$ret$4 = false;
      }
      tmp = tmp$ret$4;
    }
    return tmp;
  }
  function RecomposerInfoImpl($outer) {
    this.g1w_1 = $outer;
  }
  RecomposerInfoImpl.$metadata$ = classMeta('RecomposerInfoImpl', [RecomposerInfo]);
  function RecomposerErrorState(recoverable, cause) {
    this.h1w_1 = recoverable;
    this.i1w_1 = cause;
  }
  RecomposerErrorState.$metadata$ = classMeta('RecomposerErrorState', [RecomposerErrorInfo]);
  function recordComposerModificationsLocked($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = $this.e1v_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var tmp1_fastForEach = $this.e1v_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp1_fastForEach.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp1_fastForEach.g(index);
          // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModificationsLocked.<anonymous>' call
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var tmp0_fastForEach = $this.d1v_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_0 = 0;
          var last_0 = tmp0_fastForEach.f() - 1 | 0;
          if (inductionVariable_0 <= last_0)
            do {
              var index_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var item_0 = tmp0_fastForEach.g(index_0);
              // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModificationsLocked.<anonymous>.<anonymous>' call
              item_0.f1r(item);
            }
             while (inductionVariable_0 <= last_0);
        }
         while (inductionVariable <= last);
      $this.e1v_1.g9();
      if (!(deriveStateLocked($this) == null)) {
        // Inline function 'kotlin.error' call
        throw IllegalStateException_init_$Create$('called outside of runRecomposeAndApplyChanges');
      }
    }
  }
  function registerRunnerJob($this, callingJob) {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.a1v_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.Recomposer.registerRunnerJob.<anonymous>' call
    var tmp0_safe_receiver = $this.c1v_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    if ($this.p1v_1.i2().v5(State_ShuttingDown_getInstance()) <= 0) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Recomposer shut down');
    }
    if (!($this.b1v_1 == null)) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Recomposer already running');
    }
    $this.b1v_1 = callingJob;
    tmp$ret$1 = deriveStateLocked($this);
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
  }
  function processCompositionError($this, e, failedInitialComposition, recoverable) {
    var tmp;
    if (Companion_getInstance_3().u1u_1.wo()) {
      tmp = !(e instanceof ComposeRuntimeError);
    } else {
      tmp = false;
    }
    if (tmp) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = $this.a1v_1;
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      $this.g1v_1.g9();
      $this.f1v_1.g9();
      $this.e1v_1.g9();
      $this.h1v_1.g9();
      $this.i1v_1.g9();
      $this.j1v_1.g9();
      $this.o1v_1 = new RecomposerErrorState(recoverable, e);
      if (!(failedInitialComposition == null)) {
        var tmp0_elvis_lhs = $this.k1v_1;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          var tmp$ret$1;
          // Inline function 'kotlin.also' call
          var tmp$ret$0;
          // Inline function 'kotlin.collections.mutableListOf' call
          tmp$ret$0 = ArrayList_init_$Create$();
          var tmp0_also = tmp$ret$0;
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>.<anonymous>' call
          $this.k1v_1 = tmp0_also;
          tmp$ret$1 = tmp0_also;
          tmp_0 = tmp$ret$1;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var failedCompositions = tmp_0;
        if (!failedCompositions.m(failedInitialComposition)) {
          // Inline function 'kotlin.collections.plusAssign' call
          failedCompositions.a(failedInitialComposition);
        }
        var tmp1_this = $this;
        // Inline function 'kotlin.collections.minusAssign' call
        var tmp1_minusAssign = tmp1_this.d1v_1;
        tmp1_minusAssign.b4(failedInitialComposition);
      }
      tmp$ret$2 = deriveStateLocked($this);
      tmp$ret$3 = tmp$ret$2;
      tmp$ret$4 = tmp$ret$3;
    } else {
      throw e;
    }
  }
  function processCompositionError$default($this, e, failedInitialComposition, recoverable, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      failedInitialComposition = null;
    if (!(($mask0 & 8) === 0))
      recoverable = false;
    return processCompositionError($this, e, failedInitialComposition, recoverable);
  }
  function _get_hasSchedulingWork__b617oy($this) {
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.a1v_1;
    var tmp$ret$3;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasSchedulingWork>.<anonymous>' call
    var tmp;
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = $this.e1v_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      tmp_0 = true;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp1_isNotEmpty = $this.f1v_1;
      tmp$ret$1 = !tmp1_isNotEmpty.h();
      tmp_0 = tmp$ret$1;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = $this.x1u_1.v1a();
    }
    tmp$ret$2 = tmp;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    return tmp$ret$4;
  }
  function awaitWorkAvailable($this, $cont) {
    var tmp = new $awaitWorkAvailableCOROUTINE$1($this, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  }
  function recompositionRunner($this, block, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $cont.o4();
    var parentFrameClock = get_monotonicFrameClock(tmp$ret$0);
    return withContext($this.x1u_1, Recomposer$recompositionRunner$slambda_0($this, block, parentFrameClock, null), $cont);
  }
  function performInitialMovableContentInserts($this, composition) {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.a1v_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
      var tmp0_fastAny = $this.h1v_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastAny.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastAny.g(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>.<anonymous>' call
          tmp$ret$0 = equals(item.z1j_1, composition);
          if (tmp$ret$0) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (!tmp$ret$1) {
      return Unit_getInstance();
    }
    tmp$ret$2 = tmp;
    tmp$ret$3 = tmp$ret$2;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$4 = ArrayList_init_$Create$();
    var toInsert = tmp$ret$4;
    performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    $l$loop: while (true) {
      var tmp$ret$5;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$5 = !toInsert.h();
      if (!tmp$ret$5) {
        break $l$loop;
      }
      performInsertValues($this, toInsert, null);
      performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    }
  }
  function performRecompose($this, composition, modifiedValues) {
    if (composition.x1q() ? true : composition.c1r())
      return null;
    var tmp;
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.Recomposer.composing' call
      var snapshot = Companion_getInstance_9().v1w(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.w1w();
          try {
            var tmp$ret$0;
            // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>' call
            var tmp0_safe_receiver = modifiedValues;
            if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o1k()) === true) {
              composition.j1o(Recomposer$performRecompose$lambda(modifiedValues, composition));
            }
            tmp$ret$0 = composition.n1r();
            tmp$ret$1 = tmp$ret$0;
            break $l$block;
          }finally {
            snapshot.x1w(previous);
          }
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_0;
      }finally {
        applyAndCheck($this, snapshot);
      }
    }
    if (tmp$ret$2) {
      tmp = composition;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function performInsertValues($this, references, modifiedValues) {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy' call
    // Inline function 'kotlin.contracts.contract' call
    var destination = HashMap_init_$Create$_0(references.f());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = references.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = references.g(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>' call
        tmp$ret$0 = item.z1j_1;
        var key = tmp$ret$0;
        var tmp$ret$2;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.v(key);
        var tmp;
        if (value == null) {
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          tmp$ret$1 = ArrayList_init_$Create$();
          var answer = tmp$ret$1;
          destination.q(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        tmp$ret$2 = tmp;
        var list = tmp$ret$2;
        list.a(item);
      }
       while (inductionVariable <= last);
    tmp$ret$3 = destination;
    var tasks = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$4 = tasks.z().c();
    var tmp0_iterator = tmp$ret$4;
    while (tmp0_iterator.d()) {
      var tmp1_loop_parameter = tmp0_iterator.e();
      var tmp$ret$5;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$5 = tmp1_loop_parameter.g2();
      var composition = tmp$ret$5;
      var tmp$ret$6;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$6 = tmp1_loop_parameter.i2();
      var refs = tmp$ret$6;
      runtimeCheck(!composition.x1q());
      var tmp$ret$13;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_getInstance_9().v1w(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
        try {
          var tmp$ret$12;
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.w1w();
            try {
              var tmp$ret$11;
              // Inline function 'androidx.compose.runtime.synchronized' call
              var tmp0_synchronized = $this.a1v_1;
              var tmp$ret$10;
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              var tmp$ret$9;
              // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
              var tmp$ret$8;
              // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
              // Inline function 'kotlin.contracts.contract' call
              var target = ArrayList_init_$Create$_0(refs.f());
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = refs.f() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = refs.g(index_0);
                  // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
                  // Inline function 'kotlin.collections.plusAssign' call
                  var tmp$ret$7;
                  // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>.<anonymous>' call
                  tmp$ret$7 = to(item_0, removeLastMultiValue($this.i1v_1, item_0.x1j_1));
                  var tmp0_plusAssign = tmp$ret$7;
                  target.a(tmp0_plusAssign);
                }
                 while (inductionVariable_0 <= last_0);
              tmp$ret$8 = target;
              tmp$ret$9 = tmp$ret$8;
              tmp$ret$10 = tmp$ret$9;
              tmp$ret$11 = tmp$ret$10;
              var pairs = tmp$ret$11;
              composition.o1r(pairs);
              tmp$ret$12 = Unit_getInstance();
              break $l$block;
            }finally {
              snapshot.x1w(previous);
            }
          }
          tmp$ret$13 = tmp$ret$12;
          break $l$block_0;
        }finally {
          applyAndCheck($this, snapshot);
        }
      }
    }
    return toList(tasks.w2());
  }
  function discardUnusedValues($this) {
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.a1v_1;
    var tmp$ret$4;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = $this.i1v_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      var references = flatten($this.i1v_1.x2());
      $this.i1v_1.g9();
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(references.f());
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.g(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>.<anonymous>' call
          tmp$ret$1 = to(item, $this.j1v_1.v(item));
          var tmp0_plusAssign = tmp$ret$1;
          target.a(tmp0_plusAssign);
        }
         while (inductionVariable <= last);
      tmp$ret$2 = target;
      var unusedValues = tmp$ret$2;
      $this.j1v_1.g9();
      tmp = unusedValues;
    } else {
      tmp = emptyList();
    }
    tmp$ret$3 = tmp;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    var unusedValues_0 = tmp$ret$5;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = unusedValues_0.f() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = unusedValues_0.g(index_0);
        // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
        var reference = item_0.z3();
        var state = item_0.a4();
        if (!(state == null)) {
          reference.z1j_1.p1r(state);
        }
      }
       while (inductionVariable_0 <= last_0);
  }
  function readObserverOf($this, composition) {
    return Recomposer$readObserverOf$lambda(composition);
  }
  function writeObserverOf($this, composition, modifiedValues) {
    return Recomposer$writeObserverOf$lambda(composition, modifiedValues);
  }
  function applyAndCheck($this, snapshot) {
    try {
      var applyResult = snapshot.l1x();
      if (applyResult instanceof Failure) {
        // Inline function 'kotlin.error' call
        var tmp0_error = 'Unsupported concurrent change during composition. A state object was modified by composition as well as being modified outside composition.';
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }finally {
      snapshot.vk();
    }
  }
  function _get_hasFrameWorkLocked__1gtyf7($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = $this.f1v_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      tmp = true;
    } else {
      tmp = $this.x1u_1.v1a();
    }
    return tmp;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.t1u_1 = MutableStateFlow(persistentSetOf());
    this.u1u_1 = new AtomicReference(false);
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_3() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function performInitialMovableContentInserts$fillToInsert(toInsert, this$0, $composition) {
    toInsert.g9();
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this$0.a1v_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var iterator = this$0.h1v_1.c();
    while (iterator.d()) {
      var value = iterator.e();
      if (equals(value.z1j_1, $composition)) {
        toInsert.a(value);
        iterator.d4();
      }
    }
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  }
  function Recomposer$broadcastFrameClock$lambda(this$0) {
    return function () {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.a1v_1;
      var tmp$ret$2;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = deriveStateLocked(this$0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>.<anonymous>' call
      if (this$0.p1v_1.i2().v5(State_ShuttingDown_getInstance()) <= 0)
        throw CancellationException_init_$Create$('Recomposer shutdown; frame clock awaiter will never resume', this$0.c1v_1);
      tmp$ret$0 = tmp0_also;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp0_safe_receiver = tmp$ret$3;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$5;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$4;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp0_safe_receiver.m4(tmp$ret$4);
        tmp$ret$5 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$effectJob$lambda$lambda(this$0, $throwable) {
    return function (runnerJobCause) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.a1v_1;
      var tmp$ret$4;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp = this$0;
      var tmp0_safe_receiver = $throwable;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp0_safe_receiver_0 = runnerJobCause;
        var tmp_1;
        if (tmp0_safe_receiver_0 == null) {
          tmp_1 = null;
        } else {
          var tmp$ret$1;
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_2;
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = !(tmp0_safe_receiver_0 instanceof CancellationException);
          if (tmp$ret$0) {
            tmp_2 = tmp0_safe_receiver_0;
          } else {
            tmp_2 = null;
          }
          tmp$ret$1 = tmp_2;
          tmp_1 = tmp$ret$1;
        }
        var tmp1_safe_receiver = tmp_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          addSuppressed(tmp0_safe_receiver, tmp1_safe_receiver);
          tmp$ret$2 = Unit_getInstance();
        }
        tmp$ret$3 = tmp0_safe_receiver;
        tmp_0 = tmp$ret$3;
      }
      tmp.c1v_1 = tmp_0;
      this$0.p1v_1.p11(State_ShutDown_getInstance());
      tmp$ret$4 = Unit_getInstance();
      tmp$ret$5 = tmp$ret$4;
      return Unit_getInstance();
    };
  }
  function Recomposer$effectJob$lambda(this$0) {
    return function (throwable) {
      var cancellation = CancellationException_init_$Create$('Recomposer effect job completed', throwable);
      var continuationToResume = null;
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.a1v_1;
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>' call
      var runnerJob = this$0.b1v_1;
      var tmp;
      if (!(runnerJob == null)) {
        this$0.p1v_1.p11(State_ShuttingDown_getInstance());
        if (!this$0.n1v_1) {
          runnerJob.cj(cancellation);
        } else if (!(this$0.l1v_1 == null)) {
          continuationToResume = this$0.l1v_1;
        }
        this$0.l1v_1 = null;
        tmp = runnerJob.wi(Recomposer$effectJob$lambda$lambda(this$0, throwable));
      } else {
        this$0.c1v_1 = cancellation;
        this$0.p1v_1.p11(State_ShutDown_getInstance());
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var tmp0_safe_receiver = continuationToResume;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$3;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp0_safe_receiver.m4(tmp$ret$3);
        tmp$ret$4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation) {
    this.u1x_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  Recomposer$runRecomposeAndApplyChanges$slambda.prototype.d1y = function ($this$recompositionRunner, parentFrameClock, $cont) {
    var tmp = this.e1y($this$recompositionRunner, parentFrameClock, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  Recomposer$runRecomposeAndApplyChanges$slambda.prototype.hh = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE();
    return this.d1y(tmp, (!(p2 == null) ? isInterface(p2, MonotonicFrameClock) : false) ? p2 : THROW_CCE(), $cont);
  };
  Recomposer$runRecomposeAndApplyChanges$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 6;
            var tmp_0 = this;
            tmp_0.x1x_1 = ArrayList_init_$Create$();
            var tmp_1 = this;
            tmp_1.y1x_1 = ArrayList_init_$Create$();
            var tmp_2 = this;
            tmp_2.z1x_1 = ArrayList_init_$Create$();
            var tmp_3 = this;
            tmp_3.a1y_1 = LinkedHashSet_init_$Create$();
            var tmp_4 = this;
            tmp_4.b1y_1 = LinkedHashSet_init_$Create$();
            this.zf_1 = 1;
            continue $sm;
          case 1:
            if (!_get_shouldKeepRecomposing__5j79sd(this.u1x_1)) {
              this.zf_1 = 5;
              continue $sm;
            }

            this.zf_1 = 2;
            suspendResult = awaitWorkAvailable(this.u1x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_5 = this;
            tmp_5.c1y_1 = this.u1x_1.a1v_1;
            var tmp_6;
            if (!_get_hasFrameWorkLocked__1gtyf7(this.u1x_1)) {
              recordComposerModificationsLocked(this.u1x_1);
              tmp_6 = !_get_hasFrameWorkLocked__1gtyf7(this.u1x_1);
            } else {
              tmp_6 = false;
            }

            if (tmp_6) {
              this.zf_1 = 1;
              continue $sm;
            } else {
              this.zf_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.zf_1 = 4;
            suspendResult = this.w1x_1.x1a(Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this.u1x_1, this.x1x_1, this.y1x_1, this.z1x_1, this.a1y_1, this.b1y_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            ;
            discardUnusedValues(this.u1x_1);
            this.zf_1 = 1;
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 6) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  Recomposer$runRecomposeAndApplyChanges$slambda.prototype.e1y = function ($this$recompositionRunner, parentFrameClock, completion) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this.u1x_1, completion);
    i.v1x_1 = $this$recompositionRunner;
    i.w1x_1 = parentFrameClock;
    return i;
  };
  Recomposer$runRecomposeAndApplyChanges$slambda.$metadata$ = classMeta('Recomposer$runRecomposeAndApplyChanges$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function Recomposer$runRecomposeAndApplyChanges$slambda_0(this$0, resultContinuation) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation);
    var l = function ($this$recompositionRunner, parentFrameClock, $cont) {
      return i.d1y($this$recompositionRunner, parentFrameClock, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation) {
    this.n1y_1 = this$0;
    this.o1y_1 = $block;
    this.p1y_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  Recomposer$recompositionRunner$slambda.prototype.e1w = function ($this$withContext, $cont) {
    var tmp = this.f1w($this$withContext, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  Recomposer$recompositionRunner$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $cont);
  };
  Recomposer$recompositionRunner$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 5;
            this.r1y_1 = get_job(this.q1y_1.vh());
            registerRunnerJob(this.n1y_1, this.r1y_1);
            var tmp_0 = this;
            var tmp_1 = Companion_getInstance_9();
            tmp_0.s1y_1 = tmp_1.w1y(Recomposer$recompositionRunner$slambda$lambda(this.n1y_1));
            addRunning(Companion_getInstance_3(), this.n1y_1.q1v_1);
            this.zf_1 = 1;
            continue $sm;
          case 1:
            this.ag_1 = 4;
            var tmp_2 = this;
            tmp_2.u1y_1 = this.n1y_1.a1v_1;
            var tmp_3 = this;
            tmp_3.v1y_1 = this.n1y_1.d1v_1;
            var inductionVariable = 0;
            var last = this.v1y_1.f() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = this.v1y_1.g(index);
                item.s1r();
              }
               while (inductionVariable <= last);
            this.zf_1 = 2;
            suspendResult = coroutineScope(Recomposer$recompositionRunner$slambda$slambda_0(this.o1y_1, this.p1y_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.t1y_1 = suspendResult;
            this.ag_1 = 5;
            this.zf_1 = 3;
            continue $sm;
          case 3:
            this.s1y_1.vk();
            var tmp1_synchronized = this.n1y_1.a1v_1;
            if (this.n1y_1.b1v_1 === this.r1y_1) {
              this.n1y_1.b1v_1 = null;
            }

            deriveStateLocked(this.n1y_1);
            ;
            removeRunning(Companion_getInstance_3(), this.n1y_1.q1v_1);
            ;
            return Unit_getInstance();
          case 4:
            this.ag_1 = 5;
            var t = this.cg_1;
            this.s1y_1.vk();
            var tmp1_synchronized_0 = this.n1y_1.a1v_1;
            if (this.n1y_1.b1v_1 === this.r1y_1) {
              this.n1y_1.b1v_1 = null;
            }

            deriveStateLocked(this.n1y_1);
            ;
            removeRunning(Companion_getInstance_3(), this.n1y_1.q1v_1);
            ;
            throw t;
          case 5:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 5) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  Recomposer$recompositionRunner$slambda.prototype.f1w = function ($this$withContext, completion) {
    var i = new Recomposer$recompositionRunner$slambda(this.n1y_1, this.o1y_1, this.p1y_1, completion);
    i.q1y_1 = $this$withContext;
    return i;
  };
  Recomposer$recompositionRunner$slambda.$metadata$ = classMeta('Recomposer$recompositionRunner$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Recomposer$recompositionRunner$slambda_0(this$0, $block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation);
    var l = function ($this$withContext, $cont) {
      return i.e1w($this$withContext, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Recomposer$performRecompose$lambda($modifiedValues, $composition) {
    return function () {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $modifiedValues.k1k_1;
      var tmp;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>.<anonymous>.<anonymous>' call
          var tmp0__anonymous__q1qw7t = $modifiedValues.g(i);
          $composition.m1r(tmp0__anonymous__q1qw7t);
        }
         while (inductionVariable < last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$readObserverOf$lambda($composition) {
    return function (value) {
      $composition.i1r(value);
      return Unit_getInstance();
    };
  }
  function Recomposer$writeObserverOf$lambda($composition, $modifiedValues) {
    return function (value) {
      $composition.m1r(value);
      var tmp0_safe_receiver = $modifiedValues;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.t1p(value);
      return Unit_getInstance();
    };
  }
  function State_ShutDown_getInstance() {
    State_initEntries();
    return State_ShutDown_instance;
  }
  function State_ShuttingDown_getInstance() {
    State_initEntries();
    return State_ShuttingDown_instance;
  }
  function State_Inactive_getInstance() {
    State_initEntries();
    return State_Inactive_instance;
  }
  function State_InactivePendingWork_getInstance() {
    State_initEntries();
    return State_InactivePendingWork_instance;
  }
  function State_Idle_getInstance() {
    State_initEntries();
    return State_Idle_instance;
  }
  function State_PendingWork_getInstance() {
    State_initEntries();
    return State_PendingWork_instance;
  }
  function $awaitWorkAvailableCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r1w_1 = _this__u8e3s4;
  }
  $awaitWorkAvailableCOROUTINE$1.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 3;
            if (!_get_hasSchedulingWork__b617oy(this.r1w_1)) {
              this.zf_1 = 1;
              var tmp_0 = this;
              tmp_0.s1w_1 = this;
              this.t1w_1 = new CancellableContinuationImpl(intercepted(this.s1w_1), get_MODE_CANCELLABLE());
              this.t1w_1.fm();
              var tmp_1 = this;
              tmp_1.u1w_1 = this.r1w_1.a1v_1;
              if (_get_hasSchedulingWork__b617oy(this.r1w_1)) {
                var tmp0_success = Companion_getInstance();
                this.t1w_1.m4(_Result___init__impl__xyqfz8(Unit_getInstance()));
              } else {
                this.r1w_1.l1v_1 = this.t1w_1;
              }
              suspendResult = returnIfSuspended(this.t1w_1.wj(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zf_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            this.zf_1 = 2;
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
  $awaitWorkAvailableCOROUTINE$1.$metadata$ = classMeta('$awaitWorkAvailableCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function Recomposer(effectCoroutineContext) {
    Companion_getInstance_3();
    CompositionContext.call(this);
    this.w1u_1 = new Long(0, 0);
    var tmp = this;
    tmp.x1u_1 = new BroadcastFrameClock(Recomposer$broadcastFrameClock$lambda(this));
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = Job(effectCoroutineContext.g5(Key_getInstance()));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>' call
    tmp0_apply.wi(Recomposer$effectJob$lambda(this));
    tmp$ret$0 = tmp0_apply;
    tmp_0.y1u_1 = tmp$ret$0;
    this.z1u_1 = effectCoroutineContext.n5(this.x1u_1).n5(this.y1u_1);
    this.a1v_1 = createSynchronizedObject();
    this.b1v_1 = null;
    this.c1v_1 = null;
    var tmp_1 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_1.d1v_1 = tmp$ret$1;
    var tmp_2 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$2 = ArrayList_init_$Create$();
    tmp_2.e1v_1 = tmp$ret$2;
    var tmp_3 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$3 = ArrayList_init_$Create$();
    tmp_3.f1v_1 = tmp$ret$3;
    var tmp_4 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$4 = ArrayList_init_$Create$();
    tmp_4.g1v_1 = tmp$ret$4;
    var tmp_5 = this;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$5 = ArrayList_init_$Create$();
    tmp_5.h1v_1 = tmp$ret$5;
    var tmp_6 = this;
    var tmp$ret$6;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$6 = LinkedHashMap_init_$Create$();
    tmp_6.i1v_1 = tmp$ret$6;
    var tmp_7 = this;
    var tmp$ret$7;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$7 = LinkedHashMap_init_$Create$();
    tmp_7.j1v_1 = tmp$ret$7;
    this.k1v_1 = null;
    this.l1v_1 = null;
    this.m1v_1 = 0;
    this.n1v_1 = false;
    this.o1v_1 = null;
    this.p1v_1 = MutableStateFlow(State_Inactive_getInstance());
    this.q1v_1 = new RecomposerInfoImpl(this);
    this.r1v_1 = 8;
  }
  Recomposer.prototype.x1y = function () {
    return this.w1u_1;
  };
  Recomposer.prototype.d1l = function () {
    return this.z1u_1;
  };
  Recomposer.prototype.y1y = function ($cont) {
    return recompositionRunner(this, Recomposer$runRecomposeAndApplyChanges$slambda_0(this, null), $cont);
  };
  Recomposer.prototype.l1g = function () {
    return 1000;
  };
  Recomposer.prototype.j1g = function () {
    return false;
  };
  Recomposer.prototype.k1g = function (table) {
  };
  Recomposer.prototype.c1l = function (composition) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.a1v_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_this = this;
    // Inline function 'kotlin.collections.minusAssign' call
    var tmp0_minusAssign = tmp0_this.d1v_1;
    tmp0_minusAssign.b4(composition);
    var tmp1_this = this;
    // Inline function 'kotlin.collections.minusAssign' call
    var tmp1_minusAssign = tmp1_this.f1v_1;
    tmp1_minusAssign.b4(composition);
    var tmp2_this = this;
    var tmp2_minusAssign = tmp2_this.g1v_1;
    tmp2_minusAssign.b4(composition);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  Recomposer.prototype.e1l = function (composition) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.a1v_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.invalidate.<anonymous>' call
    var tmp;
    if (!this.f1v_1.m(composition)) {
      var tmp0_this = this;
      // Inline function 'kotlin.collections.plusAssign' call
      var tmp0_plusAssign = tmp0_this.f1v_1;
      tmp0_plusAssign.a(composition);
      tmp = deriveStateLocked(this);
    } else {
      tmp = null;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp0_safe_receiver = tmp$ret$2;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp0_safe_receiver.m4(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
    }
  };
  Recomposer.prototype.v1j = function (reference) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.a1v_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.insertMovableContent.<anonymous>' call
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.h1v_1;
    tmp0_plusAssign.a(reference);
    tmp$ret$0 = deriveStateLocked(this);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp0_safe_receiver = tmp$ret$2;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp0_safe_receiver.m4(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
    }
  };
  Recomposer.prototype.g1l = function (reference) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.a1v_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.deletedMovableContent.<anonymous>' call
    tmp$ret$0 = addMultiValue(this.i1v_1, reference.x1j_1, reference);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  Recomposer.prototype.s1k = function (reference, data) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.a1v_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_set = this.j1v_1;
    tmp0_set.q(reference, data);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  Recomposer.prototype.g1k = function (reference) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.a1v_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateResolve.<anonymous>' call
    tmp$ret$0 = this.j1v_1.k3(reference);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  Recomposer.prototype.h1l = function (composition, content) {
    var composerWasComposing = composition.x1q();
    try {
      var tmp$ret$1;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_getInstance_9().v1w(readObserverOf(this, composition), writeObserverOf(this, composition, null));
        try {
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.w1w();
            try {
              composition.b1s(content);
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }finally {
              snapshot.x1w(previous);
            }
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }finally {
          applyAndCheck(this, snapshot);
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        processCompositionError(this, $p, composition, true);
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_getInstance_9().y1t();
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.a1v_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp;
    if (this.p1v_1.i2().v5(State_ShuttingDown_getInstance()) > 0) {
      var tmp_0;
      if (!this.d1v_1.m(composition)) {
        var tmp0_this = this;
        var tmp0_plusAssign = tmp0_this.d1v_1;
        tmp0_plusAssign.a(composition);
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    }
    tmp$ret$2 = tmp;
    tmp$ret$3 = tmp$ret$2;
    try {
      performInitialMovableContentInserts(this, composition);
    } catch ($p) {
      if ($p instanceof Exception) {
        processCompositionError(this, $p, composition, true);
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    try {
      composition.q1r();
      composition.r1r();
    } catch ($p) {
      if ($p instanceof Exception) {
        processCompositionError$default(this, $p, null, false, 12, null);
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_getInstance_9().y1t();
    }
  };
  Recomposer.$metadata$ = classMeta('Recomposer', undefined, undefined, undefined, undefined, CompositionContext.prototype);
  function RecomposerInfo() {
  }
  RecomposerInfo.$metadata$ = interfaceMeta('RecomposerInfo');
  function RecomposerErrorInfo() {
  }
  RecomposerErrorInfo.$metadata$ = interfaceMeta('RecomposerErrorInfo');
  function removeLastMultiValue(_this__u8e3s4, key) {
    init_properties_Recomposer_kt_qypup3();
    var tmp0_safe_receiver = _this__u8e3s4.v(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = removeFirst(tmp0_safe_receiver);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>.<anonymous>' call
      if (tmp0_safe_receiver.h()) {
        _this__u8e3s4.k3(key);
      }
      tmp$ret$0 = tmp0_also;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    return tmp;
  }
  function addMultiValue(_this__u8e3s4, key, value) {
    init_properties_Recomposer_kt_qypup3();
    var tmp$ret$2;
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.v(key);
    var tmp;
    if (value_0 == null) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.addMultiValue.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      tmp$ret$1 = tmp$ret$0;
      var answer = tmp$ret$1;
      _this__u8e3s4.q(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2.a(value);
  }
  var properties_initialized_Recomposer_kt_k8q2ph;
  function init_properties_Recomposer_kt_qypup3() {
    if (properties_initialized_Recomposer_kt_k8q2ph) {
    } else {
      properties_initialized_Recomposer_kt_k8q2ph = true;
      ProduceAnotherFrame = new Object();
      FramePending = new Object();
    }
  }
  function RememberObserver() {
  }
  RememberObserver.$metadata$ = interfaceMeta('RememberObserver');
  function moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor) {
    var groupsToMove = fromWriter.u1i(fromIndex);
    var sourceGroupsEnd = fromIndex + groupsToMove | 0;
    var sourceSlotsStart = dataIndex(fromWriter, fromIndex);
    var sourceSlotsEnd = dataIndex(fromWriter, sourceGroupsEnd);
    var slotsToMove = sourceSlotsEnd - sourceSlotsStart | 0;
    var hasMarks = containsAnyGroupMarks(fromWriter, fromIndex);
    insertGroups(toWriter, groupsToMove);
    insertSlots(toWriter, slotsToMove, toWriter.e1c_1);
    if (fromWriter.r1b_1 < sourceGroupsEnd) {
      moveGroupGapTo(fromWriter, sourceGroupsEnd);
    }
    if (fromWriter.w1b_1 < sourceSlotsEnd) {
      moveSlotGapTo(fromWriter, sourceSlotsEnd, sourceGroupsEnd);
    }
    var groups = toWriter.o1b_1;
    var currentGroup = toWriter.e1c_1;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = fromWriter.o1b_1;
    var tmp1_copyInto = imul(currentGroup, 5);
    var tmp2_copyInto = imul(fromIndex, 5);
    var tmp3_copyInto = imul(sourceGroupsEnd, 5);
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
    tmp$ret$2 = groups;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, tmp1_copyInto, tmp2_copyInto, tmp3_copyInto);
    tmp$ret$4 = groups;
    var slots = toWriter.p1b_1;
    var currentSlot = toWriter.u1b_1;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp4_copyInto = fromWriter.p1b_1;
    arrayCopy(tmp4_copyInto, slots, currentSlot, sourceSlotsStart, sourceSlotsEnd);
    tmp$ret$5 = slots;
    var parent = toWriter.f1c_1;
    updateParentAnchor(groups, currentGroup, parent);
    var parentDelta = currentGroup - fromIndex | 0;
    var moveEnd = currentGroup + groupsToMove | 0;
    var tmp$ret$7;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
    tmp$ret$6 = dataIndex_0(groups, toWriter, currentGroup);
    tmp$ret$7 = tmp$ret$6;
    var dataIndexDelta = currentSlot - tmp$ret$7 | 0;
    var slotsGapOwner = toWriter.y1b_1;
    var slotsGapLen = toWriter.x1b_1;
    var slotsCapacity = slots.length;
    var inductionVariable = currentGroup;
    if (inductionVariable < moveEnd)
      do {
        var groupAddress = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(groupAddress === currentGroup)) {
          var previousParent = parentAnchor(groups, groupAddress);
          updateParentAnchor(groups, groupAddress, previousParent + parentDelta | 0);
        }
        var tmp$ret$9;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        tmp$ret$8 = dataIndex_0(groups, toWriter, groupAddress) + dataIndexDelta | 0;
        tmp$ret$9 = tmp$ret$8;
        var newDataIndex = tmp$ret$9;
        var tmp$ret$11;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        tmp$ret$10 = dataIndexToDataAnchor(toWriter, newDataIndex, slotsGapOwner < groupAddress ? 0 : toWriter.w1b_1, slotsGapLen, slotsCapacity);
        tmp$ret$11 = tmp$ret$10;
        var newDataAnchor = tmp$ret$11;
        updateDataAnchor(groups, groupAddress, newDataAnchor);
        if (groupAddress === slotsGapOwner) {
          var tmp1 = slotsGapOwner;
          slotsGapOwner = tmp1 + 1 | 0;
        }
      }
       while (inductionVariable < moveEnd);
    toWriter.y1b_1 = slotsGapOwner;
    var startAnchors = locationOf(fromWriter.q1b_1, fromIndex, fromWriter.f());
    var endAnchors = locationOf(fromWriter.q1b_1, sourceGroupsEnd, fromWriter.f());
    var tmp_0;
    if (startAnchors < endAnchors) {
      var sourceAnchors = fromWriter.q1b_1;
      var anchors = ArrayList_init_$Create$_0(endAnchors - startAnchors | 0);
      var anchorDelta = currentGroup - fromIndex | 0;
      var inductionVariable_0 = startAnchors;
      if (inductionVariable_0 < endAnchors)
        do {
          var anchorIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var sourceAnchor = sourceAnchors.g(anchorIndex);
          var tmp3_this = sourceAnchor;
          tmp3_this.s1l_1 = tmp3_this.s1l_1 + anchorDelta | 0;
          anchors.a(sourceAnchor);
        }
         while (inductionVariable_0 < endAnchors);
      var insertLocation = locationOf(toWriter.q1b_1, toWriter.e1c_1, toWriter.f());
      toWriter.q1b_1.la(insertLocation, anchors);
      sourceAnchors.v9(startAnchors, endAnchors).g9();
      tmp_0 = anchors;
    } else {
      tmp_0 = emptyList();
    }
    var anchors_0 = tmp_0;
    var parentGroup = fromWriter.f1h(fromIndex);
    var tmp_1;
    if (updateFromCursor) {
      var needsStartGroups = parentGroup >= 0;
      if (needsStartGroups) {
        fromWriter.n1h();
        fromWriter.p1m(parentGroup - fromWriter.e1c_1 | 0);
        fromWriter.n1h();
      }
      fromWriter.p1m(fromIndex - fromWriter.e1c_1 | 0);
      var anchorsRemoved = fromWriter.l1d();
      if (needsStartGroups) {
        fromWriter.l1h();
        fromWriter.b1j();
        fromWriter.l1h();
        fromWriter.b1j();
      }
      tmp_1 = anchorsRemoved;
    } else {
      var anchorsRemoved_0 = removeGroups(fromWriter, fromIndex, groupsToMove);
      removeSlots(fromWriter, sourceSlotsStart, slotsToMove, fromIndex - 1 | 0);
      tmp_1 = anchorsRemoved_0;
    }
    var anchorsRemoved_1 = tmp_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp5_runtimeCheck = !anchorsRemoved_1;
    if (!tmp5_runtimeCheck) {
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
      tmp$ret$12 = 'Unexpectedly removed anchors';
      var message = tmp$ret$12;
      composeRuntimeError(toString(message));
    }
    var tmp4_this = toWriter;
    tmp4_this.a1c_1 = tmp4_this.a1c_1 + (isNode(groups, currentGroup) ? 1 : nodeCount(groups, currentGroup)) | 0;
    if (updateToCursor) {
      toWriter.e1c_1 = currentGroup + groupsToMove | 0;
      toWriter.u1b_1 = currentSlot + slotsToMove | 0;
    }
    if (hasMarks) {
      updateContainsMark(toWriter, parent);
    }
    return anchors_0;
  }
  function startGroup_1($this, key, objectKey, isNode, aux) {
    var inserting = $this.z1b_1 > 0;
    $this.d1c_1.i1g($this.a1c_1);
    var tmp = $this;
    var tmp_0;
    if (inserting) {
      insertGroups($this, 1);
      var current = $this.e1c_1;
      var currentAddress = groupIndexToAddress($this, current);
      var hasObjectKey = !(objectKey === Companion_getInstance_1().c1b_1);
      var hasAux = !isNode ? !(aux === Companion_getInstance_1().c1b_1) : false;
      initGroup($this.o1b_1, currentAddress, key, isNode, hasObjectKey, hasAux, $this.f1c_1, $this.u1b_1);
      $this.v1b_1 = $this.u1b_1;
      var dataSlotsNeeded = ((isNode ? 1 : 0) + (hasObjectKey ? 1 : 0) | 0) + (hasAux ? 1 : 0) | 0;
      if (dataSlotsNeeded > 0) {
        insertSlots($this, dataSlotsNeeded, current);
        var slots = $this.p1b_1;
        var currentSlot = $this.u1b_1;
        if (isNode) {
          var tmp0 = currentSlot;
          currentSlot = tmp0 + 1 | 0;
          slots[tmp0] = aux;
        }
        if (hasObjectKey) {
          var tmp1 = currentSlot;
          currentSlot = tmp1 + 1 | 0;
          slots[tmp1] = objectKey;
        }
        if (hasAux) {
          var tmp2 = currentSlot;
          currentSlot = tmp2 + 1 | 0;
          slots[tmp2] = aux;
        }
        $this.u1b_1 = currentSlot;
      }
      $this.a1c_1 = 0;
      var newCurrent = current + 1 | 0;
      $this.f1c_1 = current;
      $this.e1c_1 = newCurrent;
      tmp_0 = newCurrent;
    } else {
      var previousParent = $this.f1c_1;
      $this.b1c_1.i1g(previousParent);
      saveCurrentGroupEnd($this);
      var currentGroup = $this.e1c_1;
      var currentGroupAddress = groupIndexToAddress($this, currentGroup);
      if (!equals(aux, Companion_getInstance_1().c1b_1)) {
        if (isNode) {
          $this.z1y(aux);
        } else {
          $this.g1m(aux);
        }
      }
      $this.u1b_1 = slotIndex($this.o1b_1, $this, currentGroupAddress);
      $this.v1b_1 = dataIndex_0($this.o1b_1, $this, groupIndexToAddress($this, $this.e1c_1 + 1 | 0));
      $this.a1c_1 = nodeCount($this.o1b_1, currentGroupAddress);
      $this.f1c_1 = currentGroup;
      $this.e1c_1 = currentGroup + 1 | 0;
      tmp_0 = currentGroup + groupSize($this.o1b_1, currentGroupAddress) | 0;
    }
    tmp.t1b_1 = tmp_0;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_4() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function containsGroupMark($this, group) {
    return group >= 0 ? containsMark($this.o1b_1, groupIndexToAddress($this, group)) : false;
  }
  function containsAnyGroupMarks($this, group) {
    return group >= 0 ? containsAnyMark($this.o1b_1, groupIndexToAddress($this, group)) : false;
  }
  function recalculateMarks($this) {
    var tmp0_safe_receiver = $this.h1c_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.o1k()) {
        updateContainsMarkNow($this, tmp0_safe_receiver.b1z(), tmp0_safe_receiver);
      }
      tmp$ret$0 = Unit_getInstance();
    }
  }
  function updateContainsMark($this, group) {
    if (group >= 0) {
      var tmp0_elvis_lhs = $this.h1c_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = PrioritySet_init_$Create$(null, 1, null);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.updateContainsMark.<anonymous>' call
        $this.h1c_1 = tmp0_also;
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.c1z(group);
    }
  }
  function updateContainsMarkNow($this, group, set) {
    var groupAddress = groupIndexToAddress($this, group);
    var containsAnyMarks = childContainsAnyMarks($this, group);
    var markChanges = !(containsMark($this.o1b_1, groupAddress) === containsAnyMarks);
    if (markChanges) {
      updateContainsMark_0($this.o1b_1, groupAddress, containsAnyMarks);
      var parent = $this.f1h(group);
      if (parent >= 0) {
        set.c1z(parent);
      }
    }
  }
  function childContainsAnyMarks($this, group) {
    var child = group + 1 | 0;
    var end = group + $this.u1i(group) | 0;
    while (child < end) {
      if (containsAnyMark($this.o1b_1, groupIndexToAddress($this, child)))
        return true;
      child = child + $this.u1i(child) | 0;
    }
    return false;
  }
  function saveCurrentGroupEnd($this) {
    $this.c1c_1.i1g((_get_capacity__a9k9f3($this) - $this.s1b_1 | 0) - $this.t1b_1 | 0);
  }
  function restoreCurrentGroupEnd($this) {
    var newGroupEnd = (_get_capacity__a9k9f3($this) - $this.s1b_1 | 0) - $this.c1c_1.r1i() | 0;
    $this.t1b_1 = newGroupEnd;
    return newGroupEnd;
  }
  function fixParentAnchorsFor($this, parent, endGroup, firstChild) {
    var parentAnchor = parentIndexToAnchor($this, parent, $this.r1b_1);
    var child = firstChild;
    while (child < endGroup) {
      updateParentAnchor($this.o1b_1, groupIndexToAddress($this, child), parentAnchor);
      var childEnd = child + groupSize($this.o1b_1, groupIndexToAddress($this, child)) | 0;
      fixParentAnchorsFor($this, child, childEnd, child + 1 | 0);
      child = childEnd;
    }
  }
  function moveGroupGapTo($this, index) {
    var gapLen = $this.s1b_1;
    var gapStart = $this.r1b_1;
    if (!(gapStart === index)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp0_isNotEmpty = $this.q1b_1;
      tmp$ret$0 = !tmp0_isNotEmpty.h();
      if (tmp$ret$0) {
        updateAnchors($this, gapStart, index);
      }
      if (gapLen > 0) {
        var groups = $this.o1b_1;
        var groupPhysicalAddress = imul(index, 5);
        var groupPhysicalGapLen = imul(gapLen, 5);
        var groupPhysicalGapStart = imul(gapStart, 5);
        if (index < gapStart) {
          var tmp$ret$5;
          // Inline function 'kotlin.collections.copyInto' call
          var tmp1_copyInto = groupPhysicalAddress + groupPhysicalGapLen | 0;
          var tmp$ret$2;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$1;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$1 = groups;
          tmp$ret$2 = tmp$ret$1;
          var tmp = tmp$ret$2;
          var tmp$ret$4;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$3;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$3 = groups;
          tmp$ret$4 = tmp$ret$3;
          arrayCopy(tmp, tmp$ret$4, tmp1_copyInto, groupPhysicalAddress, groupPhysicalGapStart);
          tmp$ret$5 = groups;
        } else {
          var tmp$ret$10;
          // Inline function 'kotlin.collections.copyInto' call
          var tmp2_copyInto = groupPhysicalGapStart + groupPhysicalGapLen | 0;
          var tmp3_copyInto = groupPhysicalAddress + groupPhysicalGapLen | 0;
          var tmp$ret$7;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$6;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$6 = groups;
          tmp$ret$7 = tmp$ret$6;
          var tmp_0 = tmp$ret$7;
          var tmp$ret$9;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$8;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$8 = groups;
          tmp$ret$9 = tmp$ret$8;
          arrayCopy(tmp_0, tmp$ret$9, groupPhysicalGapStart, tmp2_copyInto, tmp3_copyInto);
          tmp$ret$10 = groups;
        }
      }
      var groupAddress = index < gapStart ? index + gapLen | 0 : gapStart;
      var capacity = _get_capacity__a9k9f3($this);
      runtimeCheck(groupAddress < capacity);
      while (groupAddress < capacity) {
        var oldAnchor = parentAnchor($this.o1b_1, groupAddress);
        var oldIndex = parentAnchorToIndex($this, oldAnchor);
        var newAnchor = parentIndexToAnchor($this, oldIndex, index);
        if (!(newAnchor === oldAnchor)) {
          updateParentAnchor($this.o1b_1, groupAddress, newAnchor);
        }
        var tmp0 = groupAddress;
        groupAddress = tmp0 + 1 | 0;
        if (groupAddress === index)
          groupAddress = groupAddress + gapLen | 0;
      }
    }
    $this.r1b_1 = index;
  }
  function moveSlotGapTo($this, index, group) {
    var gapLen = $this.x1b_1;
    var gapStart = $this.w1b_1;
    var slotsGapOwner = $this.y1b_1;
    if (!(gapStart === index)) {
      var slots = $this.p1b_1;
      if (index < gapStart) {
        var tmp$ret$0;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = index + gapLen | 0;
        arrayCopy(slots, slots, tmp0_copyInto, index, gapStart);
        tmp$ret$0 = slots;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp1_copyInto = gapStart + gapLen | 0;
        var tmp2_copyInto = index + gapLen | 0;
        arrayCopy(slots, slots, gapStart, tmp1_copyInto, tmp2_copyInto);
        tmp$ret$1 = slots;
      }
      fill(slots, null, index, index + gapLen | 0);
    }
    var tmp$ret$2;
    // Inline function 'kotlin.math.min' call
    var tmp3_min = group + 1 | 0;
    var tmp4_min = $this.f();
    tmp$ret$2 = Math.min(tmp3_min, tmp4_min);
    var newSlotsGapOwner = tmp$ret$2;
    if (!(slotsGapOwner === newSlotsGapOwner)) {
      var slotsSize = $this.p1b_1.length - gapLen | 0;
      if (newSlotsGapOwner < slotsGapOwner) {
        var updateAddress = groupIndexToAddress($this, newSlotsGapOwner);
        var stopUpdateAddress = groupIndexToAddress($this, slotsGapOwner);
        var groupGapStart = $this.r1b_1;
        while (updateAddress < stopUpdateAddress) {
          var anchor = dataAnchor($this.o1b_1, updateAddress);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          var tmp5_runtimeCheck = anchor >= 0;
          if (!tmp5_runtimeCheck) {
            var tmp$ret$3;
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            tmp$ret$3 = 'Unexpected anchor value, expected a positive anchor';
            var message = tmp$ret$3;
            composeRuntimeError(toString(message));
          }
          updateDataAnchor($this.o1b_1, updateAddress, -((slotsSize - anchor | 0) + 1 | 0) | 0);
          var tmp0 = updateAddress;
          updateAddress = tmp0 + 1 | 0;
          if (updateAddress === groupGapStart)
            updateAddress = updateAddress + $this.s1b_1 | 0;
        }
      } else {
        var updateAddress_0 = groupIndexToAddress($this, slotsGapOwner);
        var stopUpdateAddress_0 = groupIndexToAddress($this, newSlotsGapOwner);
        while (updateAddress_0 < stopUpdateAddress_0) {
          var anchor_0 = dataAnchor($this.o1b_1, updateAddress_0);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          var tmp6_runtimeCheck = anchor_0 < 0;
          if (!tmp6_runtimeCheck) {
            var tmp$ret$4;
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            tmp$ret$4 = 'Unexpected anchor value, expected a negative anchor';
            var message_0 = tmp$ret$4;
            composeRuntimeError(toString(message_0));
          }
          updateDataAnchor($this.o1b_1, updateAddress_0, (slotsSize + anchor_0 | 0) + 1 | 0);
          var tmp1 = updateAddress_0;
          updateAddress_0 = tmp1 + 1 | 0;
          if (updateAddress_0 === $this.r1b_1)
            updateAddress_0 = updateAddress_0 + $this.s1b_1 | 0;
        }
      }
      $this.y1b_1 = newSlotsGapOwner;
    }
    $this.w1b_1 = index;
  }
  function insertGroups($this, size) {
    if (size > 0) {
      var currentGroup = $this.e1c_1;
      moveGroupGapTo($this, currentGroup);
      var gapStart = $this.r1b_1;
      var gapLen = $this.s1b_1;
      var oldCapacity = $this.o1b_1.length / 5 | 0;
      var oldSize = oldCapacity - gapLen | 0;
      if (gapLen < size) {
        var groups = $this.o1b_1;
        var tmp$ret$1;
        // Inline function 'kotlin.math.max' call
        var tmp$ret$0;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = imul(oldCapacity, 2);
        var tmp1_max = oldSize + size | 0;
        tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
        var tmp2_max = tmp$ret$0;
        var tmp3_max = 32;
        tmp$ret$1 = Math.max(tmp2_max, tmp3_max);
        var newCapacity = tmp$ret$1;
        var newGroups = new Int32Array(imul(newCapacity, 5));
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        var tmp$ret$6;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp4_copyInto = imul(gapStart, 5);
        var tmp$ret$3;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = groups;
        tmp$ret$3 = tmp$ret$2;
        var tmp = tmp$ret$3;
        var tmp$ret$5;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$4;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = newGroups;
        tmp$ret$5 = tmp$ret$4;
        arrayCopy(tmp, tmp$ret$5, 0, 0, tmp4_copyInto);
        tmp$ret$6 = newGroups;
        var tmp$ret$11;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp5_copyInto = imul(newGapEndAddress, 5);
        var tmp6_copyInto = imul(oldGapEndAddress, 5);
        var tmp7_copyInto = imul(oldCapacity, 5);
        var tmp$ret$8;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$7;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$7 = groups;
        tmp$ret$8 = tmp$ret$7;
        var tmp_0 = tmp$ret$8;
        var tmp$ret$10;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$9;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$9 = newGroups;
        tmp$ret$10 = tmp$ret$9;
        arrayCopy(tmp_0, tmp$ret$10, tmp5_copyInto, tmp6_copyInto, tmp7_copyInto);
        tmp$ret$11 = newGroups;
        $this.o1b_1 = newGroups;
        gapLen = newGapLen;
      }
      var currentEnd = $this.t1b_1;
      if (currentEnd >= gapStart)
        $this.t1b_1 = currentEnd + size | 0;
      $this.r1b_1 = gapStart + size | 0;
      $this.s1b_1 = gapLen - size | 0;
      var index = oldSize > 0 ? dataIndex($this, currentGroup + size | 0) : 0;
      var anchor = dataIndexToDataAnchor($this, index, $this.y1b_1 < gapStart ? 0 : $this.w1b_1, $this.x1b_1, $this.p1b_1.length);
      var inductionVariable = gapStart;
      var last = gapStart + size | 0;
      if (inductionVariable < last)
        do {
          var groupAddress = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          updateDataAnchor($this.o1b_1, groupAddress, anchor);
        }
         while (inductionVariable < last);
      var slotsGapOwner = $this.y1b_1;
      if (slotsGapOwner >= gapStart) {
        $this.y1b_1 = slotsGapOwner + size | 0;
      }
    }
  }
  function insertSlots($this, size, group) {
    if (size > 0) {
      moveSlotGapTo($this, $this.u1b_1, group);
      var gapStart = $this.w1b_1;
      var gapLen = $this.x1b_1;
      if (gapLen < size) {
        var slots = $this.p1b_1;
        var oldCapacity = slots.length;
        var oldSize = oldCapacity - gapLen | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.math.max' call
        var tmp$ret$0;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = imul(oldCapacity, 2);
        var tmp1_max = oldSize + size | 0;
        tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
        var tmp2_max = tmp$ret$0;
        var tmp3_max = 32;
        tmp$ret$1 = Math.max(tmp2_max, tmp3_max);
        var newCapacity = tmp$ret$1;
        var tmp = 0;
        var tmp_0 = newCapacity;
        var tmp$ret$2;
        // Inline function 'kotlin.arrayOfNulls' call
        tmp$ret$2 = fillArrayVal(Array(tmp_0), null);
        var tmp_1 = tmp$ret$2;
        while (tmp < tmp_0) {
          var tmp_2 = tmp;
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.SlotWriter.insertSlots.<anonymous>' call
          tmp$ret$3 = null;
          tmp_1[tmp_2] = tmp$ret$3;
          tmp = tmp + 1 | 0;
        }
        var newData = tmp_1;
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        var tmp$ret$4;
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, 0, 0, gapStart);
        tmp$ret$4 = newData;
        var tmp$ret$5;
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, newGapEndAddress, oldGapEndAddress, oldCapacity);
        tmp$ret$5 = newData;
        $this.p1b_1 = newData;
        gapLen = newGapLen;
      }
      var currentDataEnd = $this.v1b_1;
      if (currentDataEnd >= gapStart)
        $this.v1b_1 = currentDataEnd + size | 0;
      $this.w1b_1 = gapStart + size | 0;
      $this.x1b_1 = gapLen - size | 0;
    }
  }
  function removeGroups($this, start, len) {
    var tmp;
    if (len > 0) {
      var anchorsRemoved = false;
      var anchors = $this.q1b_1;
      moveGroupGapTo($this, start);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$0 = !anchors.h();
      if (tmp$ret$0)
        anchorsRemoved = removeAnchors($this, start, len);
      $this.r1b_1 = start;
      var previousGapLen = $this.s1b_1;
      var newGapLen = previousGapLen + len | 0;
      $this.s1b_1 = newGapLen;
      var slotsGapOwner = $this.y1b_1;
      if (slotsGapOwner > start) {
        var tmp_0 = $this;
        var tmp$ret$1;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = slotsGapOwner - len | 0;
        tmp$ret$1 = Math.max(start, tmp0_max);
        tmp_0.y1b_1 = tmp$ret$1;
      }
      if ($this.t1b_1 >= $this.r1b_1) {
        var tmp0_this = $this;
        tmp0_this.t1b_1 = tmp0_this.t1b_1 - len | 0;
      }
      if (containsGroupMark($this, $this.f1c_1)) {
        updateContainsMark($this, $this.f1c_1);
      }
      tmp = anchorsRemoved;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function removeSlots($this, start, len, group) {
    if (len > 0) {
      var gapLen = $this.x1b_1;
      var removeEnd = start + len | 0;
      moveSlotGapTo($this, removeEnd, group);
      $this.w1b_1 = start;
      $this.x1b_1 = gapLen + len | 0;
      fill($this.p1b_1, null, start, start + len | 0);
      var currentDataEnd = $this.v1b_1;
      if (currentDataEnd >= start)
        $this.v1b_1 = currentDataEnd - len | 0;
    }
  }
  function updateNodeOfGroup($this, index, value) {
    var address = groupIndexToAddress($this, index);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = address < $this.o1b_1.length ? isNode($this.o1b_1, address) : false;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.updateNodeOfGroup.<anonymous>' call
      tmp$ret$0 = 'Updating the node of a group at ' + index + ' that was not created with as a node group';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    $this.p1b_1[dataIndexToDataAddress($this, nodeIndex($this.o1b_1, $this, address))] = value;
  }
  function updateAnchors($this, previousGapStart, newGapStart) {
    var gapLen = $this.s1b_1;
    var size = _get_capacity__a9k9f3($this) - gapLen | 0;
    if (previousGapStart < newGapStart) {
      var index = locationOf($this.q1b_1, previousGapStart, size);
      $l$loop_0: while (index < $this.q1b_1.f()) {
        var anchor = $this.q1b_1.g(index);
        var location = anchor.s1l_1;
        if (location < 0) {
          var newLocation = size + location | 0;
          if (newLocation < newGapStart) {
            anchor.s1l_1 = size + location | 0;
            var tmp0 = index;
            index = tmp0 + 1 | 0;
          } else
            break $l$loop_0;
        } else
          break $l$loop_0;
      }
    } else {
      var index_0 = locationOf($this.q1b_1, newGapStart, size);
      $l$loop_1: while (index_0 < $this.q1b_1.f()) {
        var anchor_0 = $this.q1b_1.g(index_0);
        var location_0 = anchor_0.s1l_1;
        if (location_0 >= 0) {
          anchor_0.s1l_1 = -(size - location_0 | 0) | 0;
          var tmp1 = index_0;
          index_0 = tmp1 + 1 | 0;
        } else
          break $l$loop_1;
      }
    }
  }
  function removeAnchors($this, gapStart, size) {
    var gapLen = $this.s1b_1;
    var removeEnd = gapStart + size | 0;
    var groupsSize = _get_capacity__a9k9f3($this) - gapLen | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = locationOf($this.q1b_1, gapStart + size | 0, groupsSize);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    tmp$ret$0 = tmp0_let >= $this.q1b_1.f() ? tmp0_let - 1 | 0 : tmp0_let;
    tmp$ret$1 = tmp$ret$0;
    var index = tmp$ret$1;
    var removeAnchorEnd = 0;
    var removeAnchorStart = index + 1 | 0;
    $l$loop: while (index >= 0) {
      var anchor = $this.q1b_1.g(index);
      var location = $this.f1k(anchor);
      if (location >= gapStart) {
        if (location < removeEnd) {
          anchor.s1l_1 = IntCompanionObject_getInstance().b1_1;
          removeAnchorStart = index;
          if (removeAnchorEnd === 0)
            removeAnchorEnd = index + 1 | 0;
        }
        var tmp0 = index;
        index = tmp0 - 1 | 0;
      } else
        break $l$loop;
    }
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp1_also = removeAnchorStart < removeAnchorEnd;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    if (tmp1_also) {
      $this.q1b_1.v9(removeAnchorStart, removeAnchorEnd).g9();
    }
    tmp$ret$2 = tmp1_also;
    return tmp$ret$2;
  }
  function moveAnchors($this, originalLocation, newLocation, size) {
    var end = originalLocation + size | 0;
    var groupsSize = $this.f();
    var index = locationOf($this.q1b_1, originalLocation, groupsSize);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var removedAnchors = tmp$ret$0;
    if (index >= 0) {
      $l$loop: while (index < $this.q1b_1.f()) {
        var anchor = $this.q1b_1.g(index);
        var location = $this.f1k(anchor);
        if (location >= originalLocation ? location < end : false) {
          removedAnchors.a(anchor);
          $this.q1b_1.c4(index);
        } else
          break $l$loop;
      }
    }
    var moveDelta = newLocation - originalLocation | 0;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = removedAnchors.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = removedAnchors.g(index_0);
        // Inline function 'androidx.compose.runtime.SlotWriter.moveAnchors.<anonymous>' call
        var anchorIndex = $this.f1k(item);
        var newAnchorIndex = anchorIndex + moveDelta | 0;
        if (newAnchorIndex >= $this.r1b_1) {
          item.s1l_1 = -(groupsSize - newAnchorIndex | 0) | 0;
        } else {
          item.s1l_1 = newAnchorIndex;
        }
        var insertIndex = locationOf($this.q1b_1, newAnchorIndex, groupsSize);
        $this.q1b_1.t9(insertIndex, item);
      }
       while (inductionVariable <= last);
  }
  function _get_capacity__a9k9f3($this) {
    return $this.o1b_1.length / 5 | 0;
  }
  function groupIndexToAddress($this, index) {
    return index < $this.r1b_1 ? index : index + $this.s1b_1 | 0;
  }
  function dataIndexToDataAddress($this, dataIndex) {
    return dataIndex < $this.w1b_1 ? dataIndex : dataIndex + $this.x1b_1 | 0;
  }
  function parent(_this__u8e3s4, $this, index) {
    return parentAnchorToIndex($this, parentAnchor(_this__u8e3s4, groupIndexToAddress($this, index)));
  }
  function dataIndex($this, index) {
    return dataIndex_0($this.o1b_1, $this, groupIndexToAddress($this, index));
  }
  function dataIndex_0(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.p1b_1.length - $this.x1b_1 | 0 : dataAnchorToDataIndex($this, dataAnchor(_this__u8e3s4, address), $this.x1b_1, $this.p1b_1.length);
  }
  function slotIndex(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.p1b_1.length - $this.x1b_1 | 0 : dataAnchorToDataIndex($this, slotAnchor(_this__u8e3s4, address), $this.x1b_1, $this.p1b_1.length);
  }
  function updateDataIndex(_this__u8e3s4, $this, address, dataIndex) {
    updateDataAnchor(_this__u8e3s4, address, dataIndexToDataAnchor($this, dataIndex, $this.w1b_1, $this.x1b_1, $this.p1b_1.length));
  }
  function nodeIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address);
  }
  function auxIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address) + countOneBits_0(groupInfo(_this__u8e3s4, address) >> 29) | 0;
  }
  function dataIndexToDataAnchor($this, index, gapStart, gapLen, capacity) {
    return index > gapStart ? -(((capacity - gapLen | 0) - index | 0) + 1 | 0) | 0 : index;
  }
  function dataAnchorToDataIndex($this, anchor, gapLen, capacity) {
    return anchor < 0 ? ((capacity - gapLen | 0) + anchor | 0) + 1 | 0 : anchor;
  }
  function parentIndexToAnchor($this, index, gapStart) {
    return index < gapStart ? index : -(($this.f() - index | 0) - -2 | 0) | 0;
  }
  function parentAnchorToIndex($this, index) {
    return index > -2 ? index : ($this.f() + index | 0) - -2 | 0;
  }
  function SlotWriter$groupSlots$1($start, $end, this$0) {
    this.e1z_1 = $end;
    this.f1z_1 = this$0;
    this.d1z_1 = $start;
  }
  SlotWriter$groupSlots$1.prototype.d = function () {
    return this.d1z_1 < this.e1z_1;
  };
  SlotWriter$groupSlots$1.prototype.e = function () {
    var tmp;
    if (this.d()) {
      var tmp_0 = this.f1z_1.p1b_1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.d1z_1;
      tmp0_this.d1z_1 = tmp1 + 1 | 0;
      tmp = tmp_0[dataIndexToDataAddress(this.f1z_1, tmp1)];
    } else {
      tmp = null;
    }
    return tmp;
  };
  SlotWriter$groupSlots$1.$metadata$ = classMeta(undefined, [Iterator]);
  function SlotWriter(table) {
    Companion_getInstance_4();
    this.n1b_1 = table;
    this.o1b_1 = this.n1b_1.u1f_1;
    this.p1b_1 = this.n1b_1.w1f_1;
    this.q1b_1 = this.n1b_1.b1g_1;
    this.r1b_1 = this.n1b_1.v1f_1;
    this.s1b_1 = (this.o1b_1.length / 5 | 0) - this.n1b_1.v1f_1 | 0;
    this.t1b_1 = this.n1b_1.v1f_1;
    this.u1b_1 = 0;
    this.v1b_1 = 0;
    this.w1b_1 = this.n1b_1.x1f_1;
    this.x1b_1 = this.p1b_1.length - this.n1b_1.x1f_1 | 0;
    this.y1b_1 = this.n1b_1.v1f_1;
    this.z1b_1 = 0;
    this.a1c_1 = 0;
    this.b1c_1 = new IntStack();
    this.c1c_1 = new IntStack();
    this.d1c_1 = new IntStack();
    this.e1c_1 = 0;
    this.f1c_1 = -1;
    this.g1c_1 = false;
    this.h1c_1 = null;
  }
  SlotWriter.prototype.g1z = function () {
    return this.e1c_1;
  };
  SlotWriter.prototype.y1l = function () {
    return this.e1c_1 < this.t1b_1 ? isNode(this.o1b_1, groupIndexToAddress(this, this.e1c_1)) : false;
  };
  SlotWriter.prototype.m1j = function (index) {
    return isNode(this.o1b_1, groupIndexToAddress(this, index));
  };
  SlotWriter.prototype.n1j = function (index) {
    return nodeCount(this.o1b_1, groupIndexToAddress(this, index));
  };
  SlotWriter.prototype.e1h = function (index) {
    return key(this.o1b_1, groupIndexToAddress(this, index));
  };
  SlotWriter.prototype.d1h = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasObjectKey(this.o1b_1, address) ? this.p1b_1[objectKeyIndex(this.o1b_1, address)] : null;
  };
  SlotWriter.prototype.u1i = function (index) {
    return groupSize(this.o1b_1, groupIndexToAddress(this, index));
  };
  SlotWriter.prototype.c1h = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasAux(this.o1b_1, address) ? this.p1b_1[auxIndex(this.o1b_1, this, address)] : Companion_getInstance_1().c1b_1;
  };
  SlotWriter.prototype.w1l = function (index) {
    return (index > this.f1c_1 ? index < this.t1b_1 : false) ? true : this.f1c_1 === 0 ? index === 0 : false;
  };
  SlotWriter.prototype.z1l = function (index) {
    return this.x1l(index, this.e1c_1);
  };
  SlotWriter.prototype.x1l = function (index, group) {
    var tmp;
    if (group === this.f1c_1) {
      tmp = this.t1b_1;
    } else if (group > this.b1c_1.u1k(0)) {
      tmp = group + this.u1i(group) | 0;
    } else {
      var openIndex = this.b1c_1.h1z(group);
      tmp = openIndex < 0 ? group + this.u1i(group) | 0 : (_get_capacity__a9k9f3(this) - this.s1b_1 | 0) - this.c1c_1.l1j(openIndex) | 0;
    }
    var end = tmp;
    return index > group ? index < end : false;
  };
  SlotWriter.prototype.n1k = function (index) {
    var address = groupIndexToAddress(this, index);
    return isNode(this.o1b_1, address) ? this.p1b_1[dataIndexToDataAddress(this, nodeIndex(this.o1b_1, this, address))] : null;
  };
  SlotWriter.prototype.e1m = function (anchor) {
    return this.n1k(anchor.i1z(this));
  };
  SlotWriter.prototype.ik = function () {
    return this.f1c_1;
  };
  SlotWriter.prototype.f1h = function (index) {
    return parent(this.o1b_1, this, index);
  };
  SlotWriter.prototype.z1g = function () {
    this.g1c_1 = true;
    if (this.b1c_1.h()) {
      moveGroupGapTo(this, this.f());
      moveSlotGapTo(this, this.p1b_1.length - this.x1b_1 | 0, this.r1b_1);
      recalculateMarks(this);
    }
    this.n1b_1.j1z(this, this.o1b_1, this.r1b_1, this.p1b_1, this.w1b_1, this.q1b_1);
  };
  SlotWriter.prototype.b1q = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.z1b_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.reset.<anonymous>' call
      tmp$ret$0 = 'Cannot reset when inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    recalculateMarks(this);
    this.e1c_1 = 0;
    this.t1b_1 = _get_capacity__a9k9f3(this) - this.s1b_1 | 0;
    this.u1b_1 = 0;
    this.v1b_1 = 0;
    this.a1c_1 = 0;
  };
  SlotWriter.prototype.q1k = function (value) {
    var result = this.k1z();
    this.l1z(value);
    return result;
  };
  SlotWriter.prototype.g1m = function (value) {
    var address = groupIndexToAddress(this, this.e1c_1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = hasAux(this.o1b_1, address);
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.updateAux.<anonymous>' call
      tmp$ret$0 = 'Updating the data of a group that was not created with a data slot';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.p1b_1[dataIndexToDataAddress(this, auxIndex(this.o1b_1, this, address))] = value;
  };
  SlotWriter.prototype.g1o = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.z1b_1 >= 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
      tmp$ret$0 = 'Cannot insert auxiliary data when not inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var parent = this.f1c_1;
    var parentGroupAddress = groupIndexToAddress(this, parent);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp1_runtimeCheck = !hasAux(this.o1b_1, parentGroupAddress);
    if (!tmp1_runtimeCheck) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
      tmp$ret$1 = 'Group already has auxiliary data';
      var message_0 = tmp$ret$1;
      composeRuntimeError(toString(message_0));
    }
    insertSlots(this, 1, parent);
    var auxIndex_0 = auxIndex(this.o1b_1, this, parentGroupAddress);
    var auxAddress = dataIndexToDataAddress(this, auxIndex_0);
    if (this.u1b_1 > auxIndex_0) {
      var slotsToMove = this.u1b_1 - auxIndex_0 | 0;
      // Inline function 'kotlin.check' call
      var tmp2_check = slotsToMove < 3;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp2_check) {
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
        tmp$ret$2 = 'Moving more than two slot not supported';
        var message_1 = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
      if (slotsToMove > 1) {
        this.p1b_1[auxAddress + 2 | 0] = this.p1b_1[auxAddress + 1 | 0];
      }
      this.p1b_1[auxAddress + 1 | 0] = this.p1b_1[auxAddress];
    }
    addAux(this.o1b_1, parentGroupAddress);
    this.p1b_1[auxAddress] = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this.u1b_1;
    tmp0_this.u1b_1 = tmp1 + 1 | 0;
  };
  SlotWriter.prototype.z1y = function (value) {
    return updateNodeOfGroup(this, this.e1c_1, value);
  };
  SlotWriter.prototype.d1m = function (anchor, value) {
    return updateNodeOfGroup(this, anchor.i1z(this), value);
  };
  SlotWriter.prototype.l1z = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.u1b_1 <= this.v1b_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      tmp$ret$0 = 'Writing to an invalid slot';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.p1b_1[dataIndexToDataAddress(this, this.u1b_1 - 1 | 0)] = value;
  };
  SlotWriter.prototype.f1m = function (index, value) {
    var address = groupIndexToAddress(this, this.e1c_1);
    var slotsStart = slotIndex(this.o1b_1, this, address);
    var slotsEnd = dataIndex_0(this.o1b_1, this, groupIndexToAddress(this, this.e1c_1 + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = slotsIndex >= slotsStart ? slotsIndex < slotsEnd : false;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      tmp$ret$0 = 'Write to an invalid slot index ' + index + ' for group ' + this.e1c_1;
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    var result = this.p1b_1[slotAddress];
    this.p1b_1[slotAddress] = value;
    return result;
  };
  SlotWriter.prototype.k1z = function () {
    if (this.z1b_1 > 0) {
      insertSlots(this, 1, this.f1c_1);
    }
    var tmp = this.p1b_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.u1b_1;
    tmp0_this.u1b_1 = tmp1 + 1 | 0;
    return tmp[dataIndexToDataAddress(this, tmp1)];
  };
  SlotWriter.prototype.n1m = function (anchor, index) {
    return this.i1m(this.f1k(anchor), index);
  };
  SlotWriter.prototype.i1m = function (groupIndex, index) {
    var address = groupIndexToAddress(this, groupIndex);
    var slotsStart = slotIndex(this.o1b_1, this, address);
    var slotsEnd = dataIndex_0(this.o1b_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    if (!(slotsStart <= slotsIndex ? slotsIndex < slotsEnd : false)) {
      return Companion_getInstance_1().c1b_1;
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    return this.p1b_1[slotAddress];
  };
  SlotWriter.prototype.p1m = function (amount) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = amount >= 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      tmp$ret$0 = 'Cannot seek backwards';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp1_check = this.z1b_1 <= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      tmp$ret$1 = 'Cannot call seek() while inserting';
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (amount === 0)
      return Unit_getInstance();
    var index = this.e1c_1 + amount | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp2_runtimeCheck = index >= this.f1c_1 ? index <= this.t1b_1 : false;
    if (!tmp2_runtimeCheck) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      tmp$ret$2 = 'Cannot seek outside the current group (' + this.f1c_1 + '-' + this.t1b_1 + ')';
      var message_1 = tmp$ret$2;
      composeRuntimeError(toString(message_1));
    }
    this.e1c_1 = index;
    var newSlot = dataIndex_0(this.o1b_1, this, groupIndexToAddress(this, index));
    this.u1b_1 = newSlot;
    this.v1b_1 = newSlot;
  };
  SlotWriter.prototype.l1h = function () {
    var newGroup = this.t1b_1;
    this.e1c_1 = newGroup;
    this.u1b_1 = dataIndex_0(this.o1b_1, this, groupIndexToAddress(this, newGroup));
  };
  SlotWriter.prototype.f1i = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.z1b_1;
    tmp0_this.z1b_1 = tmp1 + 1 | 0;
    if (tmp1 === 0) {
      saveCurrentGroupEnd(this);
    }
  };
  SlotWriter.prototype.c1j = function () {
    // Inline function 'kotlin.check' call
    var tmp0_check = this.z1b_1 > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
      tmp$ret$0 = 'Unbalanced begin/end insert';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    tmp0_this.z1b_1 = tmp0_this.z1b_1 - 1 | 0;
    if (tmp0_this.z1b_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp1_runtimeCheck = this.d1c_1.f() === this.b1c_1.f();
      if (!tmp1_runtimeCheck) {
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
        tmp$ret$1 = 'startGroup/endGroup mismatch while inserting';
        var message_0 = tmp$ret$1;
        composeRuntimeError(toString(message_0));
      }
      restoreCurrentGroupEnd(this);
    }
  };
  SlotWriter.prototype.n1h = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.z1b_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      tmp$ret$0 = 'Key must be supplied when inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    startGroup_1(this, 0, Companion_getInstance_1().c1b_1, false, Companion_getInstance_1().c1b_1);
  };
  SlotWriter.prototype.q1h = function (key, dataKey) {
    return startGroup_1(this, key, dataKey, false, Companion_getInstance_1().c1b_1);
  };
  SlotWriter.prototype.s1h = function (key) {
    return startGroup_1(this, 125, key, true, Companion_getInstance_1().c1b_1);
  };
  SlotWriter.prototype.r1h = function (key, objectKey, aux) {
    return startGroup_1(this, key, objectKey, false, aux);
  };
  SlotWriter.prototype.b1j = function () {
    var inserting = this.z1b_1 > 0;
    var currentGroup = this.e1c_1;
    var currentGroupEnd = this.t1b_1;
    var groupIndex = this.f1c_1;
    var groupAddress = groupIndexToAddress(this, groupIndex);
    var newNodes = this.a1c_1;
    var newGroupSize = currentGroup - groupIndex | 0;
    var isNode_0 = isNode(this.o1b_1, groupAddress);
    if (inserting) {
      updateGroupSize(this.o1b_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.o1b_1, groupAddress, newNodes);
      this.a1c_1 = this.d1c_1.r1i() + (isNode_0 ? 1 : newNodes) | 0;
      this.f1c_1 = parent(this.o1b_1, this, groupIndex);
    } else {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp0_runtimeCheck = currentGroup === currentGroupEnd;
      if (!tmp0_runtimeCheck) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        tmp$ret$0 = 'Expected to be at the end of a group';
        var message = tmp$ret$0;
        composeRuntimeError(toString(message));
      }
      var oldGroupSize = groupSize(this.o1b_1, groupAddress);
      var oldNodes = nodeCount(this.o1b_1, groupAddress);
      updateGroupSize(this.o1b_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.o1b_1, groupAddress, newNodes);
      var newParent = this.b1c_1.r1i();
      restoreCurrentGroupEnd(this);
      this.f1c_1 = newParent;
      var groupParent = parent(this.o1b_1, this, groupIndex);
      this.a1c_1 = this.d1c_1.r1i();
      if (groupParent === newParent) {
        var tmp0_this = this;
        tmp0_this.a1c_1 = tmp0_this.a1c_1 + (isNode_0 ? 0 : newNodes - oldNodes | 0) | 0;
      } else {
        var groupSizeDelta = newGroupSize - oldGroupSize | 0;
        var nodesDelta = isNode_0 ? 0 : newNodes - oldNodes | 0;
        if (!(groupSizeDelta === 0) ? true : !(nodesDelta === 0)) {
          var current = groupParent;
          while ((!(current === 0) ? !(current === newParent) : false) ? !(nodesDelta === 0) ? true : !(groupSizeDelta === 0) : false) {
            var currentAddress = groupIndexToAddress(this, current);
            if (!(groupSizeDelta === 0)) {
              var newSize = groupSize(this.o1b_1, currentAddress) + groupSizeDelta | 0;
              updateGroupSize(this.o1b_1, currentAddress, newSize);
            }
            if (!(nodesDelta === 0)) {
              updateNodeCount_0(this.o1b_1, currentAddress, nodeCount(this.o1b_1, currentAddress) + nodesDelta | 0);
            }
            if (isNode(this.o1b_1, currentAddress))
              nodesDelta = 0;
            current = parent(this.o1b_1, this, current);
          }
        }
        var tmp1_this = this;
        tmp1_this.a1c_1 = tmp1_this.a1c_1 + nodesDelta | 0;
      }
    }
    return newNodes;
  };
  SlotWriter.prototype.a1q = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.z1b_1 <= 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
      tmp$ret$0 = 'Cannot call ensureStarted() while inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var parent = this.f1c_1;
    if (!(parent === index)) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp1_runtimeCheck = index >= parent ? index < this.t1b_1 : false;
      if (!tmp1_runtimeCheck) {
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
        tmp$ret$1 = 'Started group at ' + index + ' must be a subgroup of the group at ' + parent;
        var message_0 = tmp$ret$1;
        composeRuntimeError(toString(message_0));
      }
      var oldCurrent = this.e1c_1;
      var oldCurrentSlot = this.u1b_1;
      var oldCurrentSlotEnd = this.v1b_1;
      this.e1c_1 = index;
      this.n1h();
      this.e1c_1 = oldCurrent;
      this.u1b_1 = oldCurrentSlot;
      this.v1b_1 = oldCurrentSlotEnd;
    }
  };
  SlotWriter.prototype.s1m = function (anchor) {
    return this.a1q(anchor.i1z(this));
  };
  SlotWriter.prototype.b1h = function () {
    var groupAddress = groupIndexToAddress(this, this.e1c_1);
    var newGroup = this.e1c_1 + groupSize(this.o1b_1, groupAddress) | 0;
    this.e1c_1 = newGroup;
    this.u1b_1 = dataIndex_0(this.o1b_1, this, groupIndexToAddress(this, newGroup));
    return isNode(this.o1b_1, groupAddress) ? 1 : nodeCount(this.o1b_1, groupAddress);
  };
  SlotWriter.prototype.l1d = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.z1b_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      tmp$ret$0 = 'Cannot remove group while inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var oldGroup = this.e1c_1;
    var oldSlot = this.u1b_1;
    var count = this.b1h();
    var tmp0_safe_receiver = this.h1c_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.o1k() ? tmp0_safe_receiver.i1n() >= oldGroup : false) {
        tmp0_safe_receiver.b1z();
      }
      tmp$ret$1 = Unit_getInstance();
    }
    var anchorsRemoved = removeGroups(this, oldGroup, this.e1c_1 - oldGroup | 0);
    removeSlots(this, oldSlot, this.u1b_1 - oldSlot | 0, oldGroup - 1 | 0);
    this.e1c_1 = oldGroup;
    this.u1b_1 = oldSlot;
    var tmp1_this = this;
    tmp1_this.a1c_1 = tmp1_this.a1c_1 - count | 0;
    return anchorsRemoved;
  };
  SlotWriter.prototype.i1c = function () {
    var start = dataIndex_0(this.o1b_1, this, groupIndexToAddress(this, this.e1c_1));
    var end = dataIndex_0(this.o1b_1, this, groupIndexToAddress(this, this.e1c_1 + this.u1i(this.e1c_1) | 0));
    return new SlotWriter$groupSlots$1(start, end, this);
  };
  SlotWriter.prototype.h1m = function (offset) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.z1b_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      tmp$ret$0 = 'Cannot move a group while inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp1_runtimeCheck = offset >= 0;
    if (!tmp1_runtimeCheck) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      tmp$ret$1 = 'Parameter offset is out of bounds';
      var message_0 = tmp$ret$1;
      composeRuntimeError(toString(message_0));
    }
    if (offset === 0)
      return Unit_getInstance();
    var current = this.e1c_1;
    var parent = this.f1c_1;
    var parentEnd = this.t1b_1;
    var count = offset;
    var groupToMove = current;
    while (count > 0) {
      groupToMove = groupToMove + groupSize(this.o1b_1, groupIndexToAddress(this, groupToMove)) | 0;
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp2_runtimeCheck = groupToMove <= parentEnd;
      if (!tmp2_runtimeCheck) {
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
        tmp$ret$2 = 'Parameter offset is out of bounds';
        var message_1 = tmp$ret$2;
        composeRuntimeError(toString(message_1));
      }
      var tmp0 = count;
      count = tmp0 - 1 | 0;
    }
    var moveLen = groupSize(this.o1b_1, groupIndexToAddress(this, groupToMove));
    var currentSlot = this.u1b_1;
    var dataStart = dataIndex_0(this.o1b_1, this, groupIndexToAddress(this, groupToMove));
    var dataEnd = dataIndex_0(this.o1b_1, this, groupIndexToAddress(this, groupToMove + moveLen | 0));
    var moveDataLen = dataEnd - dataStart | 0;
    var tmp$ret$3;
    // Inline function 'kotlin.math.max' call
    var tmp3_max = this.e1c_1 - 1 | 0;
    tmp$ret$3 = Math.max(tmp3_max, 0);
    insertSlots(this, moveDataLen, tmp$ret$3);
    insertGroups(this, moveLen);
    var groups = this.o1b_1;
    var moveLocationAddress = groupIndexToAddress(this, groupToMove + moveLen | 0);
    var moveLocationOffset = imul(moveLocationAddress, 5);
    var currentAddress = groupIndexToAddress(this, current);
    var tmp$ret$8;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp4_copyInto = imul(currentAddress, 5);
    var tmp5_copyInto = moveLocationOffset + imul(moveLen, 5) | 0;
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = groups;
    tmp$ret$5 = tmp$ret$4;
    var tmp = tmp$ret$5;
    var tmp$ret$7;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$6;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$6 = groups;
    tmp$ret$7 = tmp$ret$6;
    arrayCopy(tmp, tmp$ret$7, tmp4_copyInto, moveLocationOffset, tmp5_copyInto);
    tmp$ret$8 = groups;
    if (moveDataLen > 0) {
      var slots = this.p1b_1;
      var tmp$ret$9;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp6_copyInto = dataIndexToDataAddress(this, dataStart + moveDataLen | 0);
      var tmp7_copyInto = dataIndexToDataAddress(this, dataEnd + moveDataLen | 0);
      arrayCopy(slots, slots, currentSlot, tmp6_copyInto, tmp7_copyInto);
      tmp$ret$9 = slots;
    }
    var dataMoveDistance = (dataStart + moveDataLen | 0) - currentSlot | 0;
    var slotsGapStart = this.w1b_1;
    var slotsGapLen = this.x1b_1;
    var slotsCapacity = this.p1b_1.length;
    var slotsGapOwner = this.y1b_1;
    var inductionVariable = current;
    var last = current + moveLen | 0;
    if (inductionVariable < last)
      do {
        var group = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var groupAddress = groupIndexToAddress(this, group);
        var oldIndex = dataIndex_0(groups, this, groupAddress);
        var newIndex = oldIndex - dataMoveDistance | 0;
        var newAnchor = dataIndexToDataAnchor(this, newIndex, slotsGapOwner < groupAddress ? 0 : slotsGapStart, slotsGapLen, slotsCapacity);
        updateDataIndex(groups, this, groupAddress, newAnchor);
      }
       while (inductionVariable < last);
    moveAnchors(this, groupToMove + moveLen | 0, current, moveLen);
    var anchorsRemoved = removeGroups(this, groupToMove + moveLen | 0, moveLen);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp8_runtimeCheck = !anchorsRemoved;
    if (!tmp8_runtimeCheck) {
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      tmp$ret$10 = 'Unexpectedly removed anchors';
      var message_2 = tmp$ret$10;
      composeRuntimeError(toString(message_2));
    }
    fixParentAnchorsFor(this, parent, this.t1b_1, current);
    if (moveDataLen > 0) {
      removeSlots(this, dataStart + moveDataLen | 0, moveDataLen, (groupToMove + moveLen | 0) - 1 | 0);
    }
  };
  SlotWriter.prototype.r1k = function (anchor, offset, writer) {
    runtimeCheck(writer.z1b_1 > 0);
    runtimeCheck(this.z1b_1 === 0);
    runtimeCheck(anchor.t1q());
    var location = this.f1k(anchor) + offset | 0;
    var currentGroup = this.e1c_1;
    runtimeCheck(currentGroup <= location ? location < this.t1b_1 : false);
    var parent = this.f1h(location);
    var size = this.u1i(location);
    var nodes = this.m1j(location) ? 1 : this.n1j(location);
    var result = moveGroup(Companion_getInstance_4(), this, location, writer, false, false);
    updateContainsMark(this, parent);
    var current = parent;
    var updatingNodes = nodes > 0;
    while (current >= currentGroup) {
      var currentAddress = groupIndexToAddress(this, current);
      updateGroupSize(this.o1b_1, currentAddress, groupSize(this.o1b_1, currentAddress) - size | 0);
      if (updatingNodes) {
        if (isNode(this.o1b_1, currentAddress))
          updatingNodes = false;
        else {
          updateNodeCount_0(this.o1b_1, currentAddress, nodeCount(this.o1b_1, currentAddress) - nodes | 0);
        }
      }
      current = this.f1h(current);
    }
    if (updatingNodes) {
      runtimeCheck(this.a1c_1 >= nodes);
      var tmp0_this = this;
      tmp0_this.a1c_1 = tmp0_this.a1c_1 - nodes | 0;
    }
    return result;
  };
  SlotWriter.prototype.r1m = function (table, index) {
    runtimeCheck(this.z1b_1 > 0);
    if ((index === 0 ? this.e1c_1 === 0 : false) ? this.n1b_1.v1f_1 === 0 : false) {
      var myGroups = this.o1b_1;
      var mySlots = this.p1b_1;
      var myAnchors = this.q1b_1;
      var groups = table.u1f_1;
      var groupsSize = table.v1f_1;
      var slots = table.w1f_1;
      var slotsSize = table.x1f_1;
      this.o1b_1 = groups;
      this.p1b_1 = slots;
      this.q1b_1 = table.b1g_1;
      this.r1b_1 = groupsSize;
      this.s1b_1 = (groups.length / 5 | 0) - groupsSize | 0;
      this.w1b_1 = slotsSize;
      this.x1b_1 = slots.length - slotsSize | 0;
      this.y1b_1 = groupsSize;
      table.m1z(myGroups, 0, mySlots, 0, myAnchors);
      return this.q1b_1;
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = table.k1h();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.moveFrom.<anonymous>' call
      tmp$ret$0 = moveGroup(Companion_getInstance_4(), tmp0_let, index, this, true, true);
      tmp = tmp$ret$0;
    }finally {
      tmp0_let.z1g();
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  SlotWriter.prototype.m1m = function (offset, table, index) {
    runtimeCheck(this.z1b_1 <= 0 ? this.u1i(this.e1c_1 + offset | 0) === 1 : false);
    var previousCurrentGroup = this.e1c_1;
    var previousCurrentSlot = this.u1b_1;
    var previousCurrentSlotEnd = this.v1b_1;
    this.p1m(offset);
    this.n1h();
    this.f1i();
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = table.k1h();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.moveIntoGroupFrom.<anonymous>' call
      tmp$ret$0 = moveGroup(Companion_getInstance_4(), tmp0_let, index, this, false, true);
      tmp = tmp$ret$0;
    }finally {
      tmp0_let.z1g();
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var anchors = tmp$ret$3;
    this.c1j();
    this.b1j();
    this.e1c_1 = previousCurrentGroup;
    this.u1b_1 = previousCurrentSlot;
    this.v1b_1 = previousCurrentSlotEnd;
    return anchors;
  };
  SlotWriter.prototype.g1i = function (index) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var tmp0_getOrAdd = this.q1b_1;
    var tmp1_getOrAdd = this.f();
    var location = search$accessor$v4m42o(tmp0_getOrAdd, index, tmp1_getOrAdd);
    var tmp;
    if (location < 0) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.anchor.<anonymous>' call
      tmp$ret$0 = new Anchor(index <= this.r1b_1 ? index : -(this.f() - index | 0) | 0);
      var anchor = tmp$ret$0;
      tmp0_getOrAdd.t9(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0_getOrAdd.g(location);
    }
    tmp$ret$1 = tmp;
    return tmp$ret$1;
  };
  SlotWriter.prototype.n1z = function (group) {
    var groupAddress = groupIndexToAddress(this, group);
    if (!hasMark(this.o1b_1, groupAddress)) {
      updateMark(this.o1b_1, groupAddress, true);
      if (!containsMark(this.o1b_1, groupAddress)) {
        updateContainsMark(this, this.f1h(group));
      }
    }
  };
  SlotWriter.prototype.u1j = function (group, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      group = this.f1c_1;
    return this.n1z(group);
  };
  SlotWriter.prototype.f1k = function (anchor) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = anchor.s1l_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SlotWriter.anchorIndex.<anonymous>' call
    tmp$ret$0 = tmp0_let < 0 ? this.f() + tmp0_let | 0 : tmp0_let;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  SlotWriter.prototype.toString = function () {
    return 'SlotWriter(current = ' + this.e1c_1 + ' end=' + this.t1b_1 + ' size = ' + this.f() + ' ' + ('gap=' + this.r1b_1 + '-' + (this.r1b_1 + this.s1b_1 | 0) + ')');
  };
  SlotWriter.prototype.f = function () {
    return _get_capacity__a9k9f3(this) - this.s1b_1 | 0;
  };
  SlotWriter.$metadata$ = classMeta('SlotWriter');
  function SlotTable() {
    this.u1f_1 = new Int32Array(0);
    this.v1f_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = 0;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotTable.slots.<anonymous>' call
      tmp$ret$1 = null;
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.w1f_1 = tmp_2;
    this.x1f_1 = 0;
    this.y1f_1 = 0;
    this.z1f_1 = false;
    this.a1g_1 = 0;
    var tmp_4 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$2 = ArrayList_init_$Create$();
    tmp_4.b1g_1 = tmp$ret$2;
  }
  SlotTable.prototype.o1z = function () {
    return this.b1g_1;
  };
  SlotTable.prototype.po = function () {
    return this.v1f_1 === 0;
  };
  SlotTable.prototype.p1z = function (block) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.c1g();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var tmp;
    try {
      tmp = block(tmp0_let);
    }finally {
      tmp0_let.z1g();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  SlotTable.prototype.q1z = function (block) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.k1h();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      tmp = block(tmp0_let);
    }finally {
      tmp0_let.z1g();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  SlotTable.prototype.c1g = function () {
    if (this.z1f_1) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Cannot read while a writer is pending');
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.y1f_1;
    tmp0_this.y1f_1 = tmp1 + 1 | 0;
    return new SlotReader(this);
  };
  SlotTable.prototype.k1h = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.z1f_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      tmp$ret$0 = 'Cannot start a writer when another writer is pending';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp1_runtimeCheck = this.y1f_1 <= 0;
    if (!tmp1_runtimeCheck) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      tmp$ret$1 = 'Cannot start a writer when a reader is pending';
      var message_0 = tmp$ret$1;
      composeRuntimeError(toString(message_0));
    }
    this.z1f_1 = true;
    var tmp0_this = this;
    var tmp1 = tmp0_this.a1g_1;
    tmp0_this.a1g_1 = tmp1 + 1 | 0;
    return new SlotWriter(this);
  };
  SlotTable.prototype.g1i = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.z1f_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      tmp$ret$0 = 'use active SlotWriter to create an anchor location instead ';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = 0 <= index ? index < this.v1f_1 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      tmp$ret$1 = 'Parameter index is out of range';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var tmp2_getOrAdd = this.b1g_1;
    var tmp3_getOrAdd = this.v1f_1;
    var location = search$accessor$v4m42o(tmp2_getOrAdd, index, tmp3_getOrAdd);
    var tmp;
    if (location < 0) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      tmp$ret$2 = new Anchor(index);
      var anchor = tmp$ret$2;
      tmp2_getOrAdd.t9(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp2_getOrAdd.g(location);
    }
    tmp$ret$3 = tmp;
    return tmp$ret$3;
  };
  SlotTable.prototype.f1k = function (anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.z1f_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      tmp$ret$0 = 'Use active SlotWriter to determine anchor location instead';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = anchor.t1q();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      tmp$ret$1 = 'Anchor refers to a group that was removed';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return anchor.s1l_1;
  };
  SlotTable.prototype.w1r = function (anchor) {
    var tmp;
    if (anchor.t1q()) {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = search$accessor$v4m42o(this.b1g_1, anchor.s1l_1, this.v1f_1);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.ownsAnchor.<anonymous>' call
      tmp$ret$0 = tmp0_let >= 0 ? equals(this.b1g_1.g(tmp0_let), anchor) : false;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  SlotTable.prototype.w1q = function (groupIndex, anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.z1f_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      tmp$ret$0 = 'Writer is active';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp1_runtimeCheck = 0 <= groupIndex ? groupIndex < this.v1f_1 : false;
    if (!tmp1_runtimeCheck) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      tmp$ret$1 = 'Invalid group index';
      var message_0 = tmp$ret$1;
      composeRuntimeError(toString(message_0));
    }
    var tmp;
    if (this.w1r(anchor)) {
      var containsUpper = groupIndex + groupSize(this.u1f_1, groupIndex) | 0;
      var containsArg = anchor.s1l_1;
      tmp = groupIndex <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  SlotTable.prototype.r1z = function (reader) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = reader.n1g_1 === this ? this.y1f_1 > 0 : false;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      tmp$ret$0 = 'Unexpected reader close()';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.y1f_1;
    tmp0_this.y1f_1 = tmp1 - 1 | 0;
  };
  SlotTable.prototype.j1z = function (writer, groups, groupsSize, slots, slotsSize, anchors) {
    // Inline function 'kotlin.require' call
    var tmp0_require = writer.n1b_1 === this ? this.z1f_1 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      tmp$ret$0 = 'Unexpected writer close()';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.z1f_1 = false;
    this.m1z(groups, groupsSize, slots, slotsSize, anchors);
  };
  SlotTable.prototype.m1z = function (groups, groupsSize, slots, slotsSize, anchors) {
    this.u1f_1 = groups;
    this.v1f_1 = groupsSize;
    this.w1f_1 = slots;
    this.x1f_1 = slotsSize;
    this.b1g_1 = anchors;
  };
  SlotTable.prototype.t1k = function () {
    return this.v1f_1 > 0 ? containsMark(this.u1f_1, 0) : false;
  };
  SlotTable.prototype.c = function () {
    return new GroupIterator(this, 0, this.v1f_1);
  };
  SlotTable.$metadata$ = classMeta('SlotTable', [CompositionData, Iterable]);
  function Anchor(loc) {
    this.s1l_1 = loc;
  }
  Anchor.prototype.s1z = function (_set____db54di) {
    this.s1l_1 = _set____db54di;
  };
  Anchor.prototype.p1p = function () {
    return this.s1l_1;
  };
  Anchor.prototype.t1q = function () {
    return !(this.s1l_1 === IntCompanionObject_getInstance().b1_1);
  };
  Anchor.prototype.q1m = function (slots) {
    return slots.f1k(this);
  };
  Anchor.prototype.i1z = function (writer) {
    return writer.f1k(this);
  };
  Anchor.$metadata$ = classMeta('Anchor');
  function isNode(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 1073741824) === 0);
  }
  function nodeCount(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0] & 67108863;
  }
  function key(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5)];
  }
  function hasObjectKey(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 536870912) === 0);
  }
  function objectKeyIndex(_this__u8e3s4, address) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = imul(address, 5);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.objectKeyIndex.<anonymous>' call
    tmp$ret$0 = _this__u8e3s4[tmp0_let + 4 | 0] + countOneBits_0(_this__u8e3s4[tmp0_let + 1 | 0] >> 30) | 0;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function groupSize(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 3 | 0];
  }
  function hasAux(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 268435456) === 0);
  }
  function addAux(_this__u8e3s4, address) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 268435456;
  }
  function initGroup(_this__u8e3s4, address, key, isNode, hasDataKey, hasData, parentAnchor, dataAnchor) {
    var nodeBit = isNode ? 1073741824 : 0;
    var dataKeyBit = hasDataKey ? 536870912 : 0;
    var dataBit = hasData ? 268435456 : 0;
    var arrayIndex = imul(address, 5);
    _this__u8e3s4[arrayIndex + 0 | 0] = key;
    _this__u8e3s4[arrayIndex + 1 | 0] = nodeBit | dataKeyBit | dataBit;
    _this__u8e3s4[arrayIndex + 2 | 0] = parentAnchor;
    _this__u8e3s4[arrayIndex + 3 | 0] = 0;
    _this__u8e3s4[arrayIndex + 4 | 0] = dataAnchor;
  }
  function updateGroupSize(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0);
    _this__u8e3s4[imul(address, 5) + 3 | 0] = value;
  }
  function updateNodeCount_0(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0 ? value < 67108863 : false);
    _this__u8e3s4[imul(address, 5) + 1 | 0] = _this__u8e3s4[imul(address, 5) + 1 | 0] & -67108864 | value;
  }
  function PrioritySet_init_$Init$(list, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      tmp$ret$0_0 = Unit_getInstance();
      list = tmp$ret$0;
    }
    PrioritySet.call($this, list);
    return $this;
  }
  function PrioritySet_init_$Create$(list, $mask0, $marker) {
    return PrioritySet_init_$Init$(list, $mask0, $marker, Object.create(PrioritySet.prototype));
  }
  function PrioritySet(list) {
    this.a1z_1 = list;
  }
  PrioritySet.prototype.c1z = function (value) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.a1z_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      tmp = this.a1z_1.g(0) === value ? true : this.a1z_1.g(this.a1z_1.f() - 1 | 0) === value;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_getInstance();
    var index = this.a1z_1.f();
    this.a1z_1.a(value);
    $l$loop: while (index > 0) {
      var parent = ((index + 1 | 0) >>> 1 | 0) - 1 | 0;
      var parentValue = this.a1z_1.g(parent);
      if (value > parentValue) {
        this.a1z_1.d9(index, parentValue);
      } else
        break $l$loop;
      index = parent;
    }
    this.a1z_1.d9(index, value);
  };
  PrioritySet.prototype.o1k = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.a1z_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    return tmp$ret$0;
  };
  PrioritySet.prototype.i1n = function () {
    return first(this.a1z_1);
  };
  PrioritySet.prototype.b1z = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.a1z_1.f() > 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.PrioritySet.takeMax.<anonymous>' call
      tmp$ret$0 = 'Set is empty';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var value = this.a1z_1.g(0);
    $l$loop: while (true) {
      var tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp1_isNotEmpty = this.a1z_1;
      tmp$ret$1 = !tmp1_isNotEmpty.h();
      if (tmp$ret$1) {
        tmp = this.a1z_1.g(0) === value;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.a1z_1.d9(0, last(this.a1z_1));
      this.a1z_1.c4(this.a1z_1.f() - 1 | 0);
      var index = 0;
      var size = this.a1z_1.f();
      var max = this.a1z_1.f() >>> 1 | 0;
      $l$loop_2: while (index < max) {
        var indexValue = this.a1z_1.g(index);
        var left = imul(index + 1 | 0, 2) - 1 | 0;
        var leftValue = this.a1z_1.g(left);
        var right = imul(index + 1 | 0, 2);
        if (right < size) {
          var rightValue = this.a1z_1.g(right);
          if (rightValue > leftValue) {
            if (rightValue > indexValue) {
              this.a1z_1.d9(index, rightValue);
              this.a1z_1.d9(right, indexValue);
              index = right;
              continue $l$loop_2;
            } else
              break $l$loop_2;
          }
        }
        if (leftValue > indexValue) {
          this.a1z_1.d9(index, leftValue);
          this.a1z_1.d9(left, indexValue);
          index = left;
        } else
          break $l$loop_2;
      }
    }
    return value;
  };
  PrioritySet.$metadata$ = classMeta('PrioritySet');
  function updateParentAnchor(_this__u8e3s4, address, value) {
    _this__u8e3s4[imul(address, 5) + 2 | 0] = value;
  }
  function parentAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 2 | 0];
  }
  function updateDataAnchor(_this__u8e3s4, address, anchor) {
    _this__u8e3s4[imul(address, 5) + 4 | 0] = anchor;
  }
  function locationOf(_this__u8e3s4, index, effectiveSize) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = search$accessor$v4m42o(_this__u8e3s4, index, effectiveSize);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.locationOf.<anonymous>' call
    tmp$ret$0 = tmp0_let >= 0 ? tmp0_let : -(tmp0_let + 1 | 0) | 0;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function dataAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function getOrAdd(_this__u8e3s4, index, effectiveSize, block) {
    var location = search$accessor$v4m42o(_this__u8e3s4, index, effectiveSize);
    var tmp;
    if (location < 0) {
      var anchor = block();
      _this__u8e3s4.t9(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = _this__u8e3s4.g(location);
    }
    return tmp;
  }
  function hasMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 134217728) === 0);
  }
  function updateMark(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 134217728;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -134217729;
    }
  }
  function containsMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 67108864) === 0);
  }
  function containsAnyMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 201326592) === 0);
  }
  function updateContainsMark_0(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 67108864;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -67108865;
    }
  }
  function slotAnchor(_this__u8e3s4, address) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = imul(address, 5);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.slotAnchor.<anonymous>' call
    tmp$ret$0 = _this__u8e3s4[tmp0_let + 4 | 0] + countOneBits_0(_this__u8e3s4[tmp0_let + 1 | 0] >> 28) | 0;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function countOneBits_0(value) {
    var tmp0_subject = value;
    switch (tmp0_subject) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 1;
      case 3:
        return 2;
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 2;
      default:
        return 3;
    }
  }
  function get_Aux_Shift() {
    return Aux_Shift;
  }
  var Aux_Shift;
  function groupInfo(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0];
  }
  function node(_this__u8e3s4, $this, index) {
    var tmp;
    if (isNode(_this__u8e3s4, index)) {
      tmp = $this.q1g_1[nodeIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_1().c1b_1;
    }
    return tmp;
  }
  function aux(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasAux(_this__u8e3s4, index)) {
      tmp = $this.q1g_1[auxIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_1().c1b_1;
    }
    return tmp;
  }
  function objectKey(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasObjectKey(_this__u8e3s4, index)) {
      tmp = $this.q1g_1[objectKeyIndex(_this__u8e3s4, index)];
    } else {
      tmp = null;
    }
    return tmp;
  }
  function SlotReader(table) {
    this.n1g_1 = table;
    this.o1g_1 = this.n1g_1.u1f_1;
    this.p1g_1 = this.n1g_1.v1f_1;
    this.q1g_1 = this.n1g_1.w1f_1;
    this.r1g_1 = this.n1g_1.x1f_1;
    this.s1g_1 = false;
    this.t1g_1 = 0;
    this.u1g_1 = this.p1g_1;
    this.v1g_1 = -1;
    this.w1g_1 = 0;
    this.x1g_1 = 0;
    this.y1g_1 = 0;
  }
  SlotReader.prototype.g1z = function () {
    return this.t1g_1;
  };
  SlotReader.prototype.f = function () {
    return this.p1g_1;
  };
  SlotReader.prototype.f1h = function (index) {
    return parentAnchor(this.o1g_1, index);
  };
  SlotReader.prototype.y1l = function () {
    return isNode(this.o1g_1, this.t1g_1);
  };
  SlotReader.prototype.m1j = function (index) {
    return isNode(this.o1g_1, index);
  };
  SlotReader.prototype.n1j = function (index) {
    return nodeCount(this.o1g_1, index);
  };
  SlotReader.prototype.n1k = function (index) {
    return isNode(this.o1g_1, index) ? node(this.o1g_1, this, index) : null;
  };
  SlotReader.prototype.y1i = function () {
    return this.d1j() ? true : this.t1g_1 === this.u1g_1;
  };
  SlotReader.prototype.d1j = function () {
    return this.w1g_1 > 0;
  };
  SlotReader.prototype.p1k = function () {
    return groupSize(this.o1g_1, this.t1g_1);
  };
  SlotReader.prototype.u1i = function (index) {
    return groupSize(this.o1g_1, index);
  };
  SlotReader.prototype.x1i = function () {
    return this.u1g_1;
  };
  SlotReader.prototype.b1i = function () {
    var tmp;
    if (this.t1g_1 < this.u1g_1) {
      tmp = key(this.o1g_1, this.t1g_1);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  SlotReader.prototype.e1h = function (index) {
    return key(this.o1g_1, index);
  };
  SlotReader.prototype.r1n = function () {
    return this.x1g_1 - slotAnchor(this.o1g_1, this.v1g_1) | 0;
  };
  SlotReader.prototype.o1j = function (index) {
    return hasObjectKey(this.o1g_1, index);
  };
  SlotReader.prototype.d1i = function () {
    return this.t1g_1 < this.u1g_1 ? objectKey(this.o1g_1, this, this.t1g_1) : null;
  };
  SlotReader.prototype.d1h = function (index) {
    return objectKey(this.o1g_1, this, index);
  };
  SlotReader.prototype.m1h = function () {
    return this.t1g_1 < this.u1g_1 ? aux(this.o1g_1, this, this.t1g_1) : 0;
  };
  SlotReader.prototype.c1h = function (index) {
    return aux(this.o1g_1, this, index);
  };
  SlotReader.prototype.c1m = function (index) {
    return hasMark(this.o1g_1, index);
  };
  SlotReader.prototype.a1m = function (index) {
    return containsMark(this.o1g_1, index);
  };
  SlotReader.prototype.p1j = function () {
    return this.v1g_1 >= 0 ? nodeCount(this.o1g_1, this.v1g_1) : 0;
  };
  SlotReader.prototype.u1n = function (index) {
    return this.b1m(this.t1g_1, index);
  };
  SlotReader.prototype.b1m = function (group, index) {
    var start = slotAnchor(this.o1g_1, group);
    var next = group + 1 | 0;
    var end = next < this.p1g_1 ? dataAnchor(this.o1g_1, next) : this.r1g_1;
    var address = start + index | 0;
    return address < end ? this.q1g_1[address] : Companion_getInstance_1().c1b_1;
  };
  SlotReader.prototype.e = function () {
    if (this.w1g_1 > 0 ? true : this.x1g_1 >= this.y1g_1)
      return Companion_getInstance_1().c1b_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.x1g_1;
    tmp0_this.x1g_1 = tmp1 + 1 | 0;
    return this.q1g_1[tmp1];
  };
  SlotReader.prototype.p1h = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.w1g_1;
    tmp0_this.w1g_1 = tmp1 + 1 | 0;
  };
  SlotReader.prototype.a1j = function () {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.w1g_1 > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.endEmpty.<anonymous>' call
      tmp$ret$0 = 'Unbalanced begin/end empty';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.w1g_1;
    tmp0_this.w1g_1 = tmp1 - 1 | 0;
  };
  SlotReader.prototype.z1g = function () {
    this.s1g_1 = true;
    this.n1g_1.r1z(this);
  };
  SlotReader.prototype.n1h = function () {
    if (this.w1g_1 <= 0) {
      // Inline function 'kotlin.require' call
      var tmp0_require = parentAnchor(this.o1g_1, this.t1g_1) === this.v1g_1;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.SlotReader.startGroup.<anonymous>' call
        tmp$ret$0 = 'Invalid slot table detected';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.v1g_1 = this.t1g_1;
      this.u1g_1 = this.t1g_1 + groupSize(this.o1g_1, this.t1g_1) | 0;
      var tmp0_this = this;
      var tmp1 = tmp0_this.t1g_1;
      tmp0_this.t1g_1 = tmp1 + 1 | 0;
      var current = tmp1;
      this.x1g_1 = slotAnchor(this.o1g_1, current);
      this.y1g_1 = current >= (this.p1g_1 - 1 | 0) ? this.r1g_1 : dataAnchor(this.o1g_1, current + 1 | 0);
    }
  };
  SlotReader.prototype.o1h = function () {
    if (this.w1g_1 <= 0) {
      // Inline function 'kotlin.require' call
      var tmp0_require = isNode(this.o1g_1, this.t1g_1);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.SlotReader.startNode.<anonymous>' call
        tmp$ret$0 = 'Expected a node group';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.n1h();
    }
  };
  SlotReader.prototype.b1h = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.w1g_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.skipGroup.<anonymous>' call
      tmp$ret$0 = 'Cannot skip while in an empty region';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var count = isNode(this.o1g_1, this.t1g_1) ? 1 : nodeCount(this.o1g_1, this.t1g_1);
    var tmp0_this = this;
    tmp0_this.t1g_1 = tmp0_this.t1g_1 + groupSize(this.o1g_1, this.t1g_1) | 0;
    return count;
  };
  SlotReader.prototype.l1h = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.w1g_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.skipToGroupEnd.<anonymous>' call
      tmp$ret$0 = 'Cannot skip the enclosing group while in an empty region';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.t1g_1 = this.u1g_1;
  };
  SlotReader.prototype.p1i = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.w1g_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.reposition.<anonymous>' call
      tmp$ret$0 = 'Cannot reposition while in an empty region';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.t1g_1 = index;
    var parent = index < this.p1g_1 ? parentAnchor(this.o1g_1, index) : -1;
    this.v1g_1 = parent;
    if (parent < 0)
      this.u1g_1 = this.p1g_1;
    else
      this.u1g_1 = parent + groupSize(this.o1g_1, parent) | 0;
    this.x1g_1 = 0;
    this.y1g_1 = 0;
  };
  SlotReader.prototype.j1j = function (index) {
    var newCurrentEnd = index + groupSize(this.o1g_1, index) | 0;
    var current = this.t1g_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = current >= index ? current <= newCurrentEnd : false;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.restoreParent.<anonymous>' call
      tmp$ret$0 = 'Index ' + index + ' is not a parent of ' + current;
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.v1g_1 = index;
    this.u1g_1 = newCurrentEnd;
    this.x1g_1 = 0;
    this.y1g_1 = 0;
  };
  SlotReader.prototype.z1i = function () {
    if (this.w1g_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp0_runtimeCheck = this.t1g_1 === this.u1g_1;
      if (!tmp0_runtimeCheck) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.SlotReader.endGroup.<anonymous>' call
        tmp$ret$0 = 'endGroup() not called at the end of a group';
        var message = tmp$ret$0;
        composeRuntimeError(toString(message));
      }
      var parent = parentAnchor(this.o1g_1, this.v1g_1);
      this.v1g_1 = parent;
      this.u1g_1 = parent < 0 ? this.p1g_1 : parent + groupSize(this.o1g_1, parent) | 0;
    }
  };
  SlotReader.prototype.c1i = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    if (this.w1g_1 > 0)
      return result;
    var index = 0;
    var childIndex = this.t1g_1;
    while (childIndex < this.u1g_1) {
      var tmp = key(this.o1g_1, childIndex);
      var tmp_0 = objectKey(this.o1g_1, this, childIndex);
      var tmp_1 = childIndex;
      var tmp_2 = isNode(this.o1g_1, childIndex) ? 1 : nodeCount(this.o1g_1, childIndex);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result.a(new KeyInfo(tmp, tmp_0, tmp_1, tmp_2, tmp0));
      childIndex = childIndex + groupSize(this.o1g_1, childIndex) | 0;
    }
    return result;
  };
  SlotReader.prototype.y1n = function (group, block) {
    var start = slotAnchor(this.o1g_1, group);
    var end = (group + 1 | 0) < this.n1g_1.v1f_1 ? dataAnchor(this.n1g_1.u1f_1, group + 1 | 0) : this.n1g_1.x1f_1;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        block(index - start | 0, this.q1g_1[index]);
      }
       while (inductionVariable < end);
  };
  SlotReader.prototype.toString = function () {
    return 'SlotReader(current=' + this.t1g_1 + ', key=' + this.b1i() + ', ' + ('parent=' + this.v1g_1 + ', end=' + this.u1g_1 + ')');
  };
  SlotReader.prototype.g1i = function (index) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var tmp0_getOrAdd = this.n1g_1.b1g_1;
    var tmp1_getOrAdd = this.p1g_1;
    var location = search$accessor$v4m42o(tmp0_getOrAdd, index, tmp1_getOrAdd);
    var tmp;
    if (location < 0) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.anchor.<anonymous>' call
      tmp$ret$0 = new Anchor(index);
      var anchor = tmp$ret$0;
      tmp0_getOrAdd.t9(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0_getOrAdd.g(location);
    }
    tmp$ret$1 = tmp;
    return tmp$ret$1;
  };
  SlotReader.$metadata$ = classMeta('SlotReader');
  function search(_this__u8e3s4, location, effectiveSize) {
    var low = 0;
    var high = _this__u8e3s4.f() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = _this__u8e3s4.g(mid).s1l_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.search.<anonymous>' call
      tmp$ret$0 = tmp0_let < 0 ? effectiveSize + tmp0_let | 0 : tmp0_let;
      tmp$ret$1 = tmp$ret$0;
      var midVal = tmp$ret$1;
      var cmp = compareTo(midVal, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function nodeIndex_0(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function auxIndex_0(_this__u8e3s4, address) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = imul(address, 5);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.auxIndex.<anonymous>' call
    tmp$ret$0 = tmp0_let >= _this__u8e3s4.length ? _this__u8e3s4.length : _this__u8e3s4[tmp0_let + 4 | 0] + countOneBits_0(_this__u8e3s4[tmp0_let + 1 | 0] >> 29) | 0;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function validateRead($this) {
    if (!($this.t1z_1.a1g_1 === $this.w1z_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function GroupIterator(table, start, end) {
    this.t1z_1 = table;
    this.u1z_1 = end;
    this.v1z_1 = start;
    this.w1z_1 = this.t1z_1.a1g_1;
    if (this.t1z_1.z1f_1)
      throw ConcurrentModificationException_init_$Create$();
  }
  GroupIterator.prototype.d = function () {
    return this.v1z_1 < this.u1z_1;
  };
  GroupIterator.prototype.e = function () {
    validateRead(this);
    var group = this.v1z_1;
    var tmp0_this = this;
    tmp0_this.v1z_1 = tmp0_this.v1z_1 + groupSize(this.t1z_1.u1f_1, group) | 0;
    return new SlotTableGroup(this.t1z_1, group, this.w1z_1);
  };
  GroupIterator.$metadata$ = classMeta('GroupIterator', [Iterator]);
  function validateRead_0($this) {
    if (!($this.x1z_1.a1g_1 === $this.z1z_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SlotTableGroup(table, group, version) {
    this.x1z_1 = table;
    this.y1z_1 = group;
    this.z1z_1 = version;
  }
  SlotTableGroup.prototype.c = function () {
    validateRead_0(this);
    return new GroupIterator(this.x1z_1, this.y1z_1 + 1 | 0, this.y1z_1 + groupSize(this.x1z_1.u1f_1, this.y1z_1) | 0);
  };
  SlotTableGroup.$metadata$ = classMeta('SlotTableGroup', [CompositionGroup, Iterable]);
  function get_GroupInfo_Offset() {
    return GroupInfo_Offset;
  }
  var GroupInfo_Offset;
  function get_ObjectKey_Shift() {
    return ObjectKey_Shift;
  }
  var ObjectKey_Shift;
  function get_DataAnchor_Offset() {
    return DataAnchor_Offset;
  }
  var DataAnchor_Offset;
  function get_Slots_Shift() {
    return Slots_Shift;
  }
  var Slots_Shift;
  function KeyInfo(key, objectKey, location, nodes, index) {
    this.h1i_1 = key;
    this.i1i_1 = objectKey;
    this.j1i_1 = location;
    this.k1i_1 = nodes;
    this.l1i_1 = index;
  }
  KeyInfo.prototype.p1p = function () {
    return this.j1i_1;
  };
  KeyInfo.prototype.a20 = function () {
    return this.k1i_1;
  };
  KeyInfo.$metadata$ = classMeta('KeyInfo');
  function search$accessor$v4m42o(_this__u8e3s4, location, effectiveSize) {
    return search(_this__u8e3s4, location, effectiveSize);
  }
  function SnapshotMutationPolicy() {
  }
  SnapshotMutationPolicy.$metadata$ = interfaceMeta('SnapshotMutationPolicy');
  function structuralEqualityPolicy() {
    var tmp = StructuralEqualityPolicy_getInstance();
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function StructuralEqualityPolicy() {
    StructuralEqualityPolicy_instance = this;
  }
  StructuralEqualityPolicy.prototype.c20 = function (a, b) {
    return equals(a, b);
  };
  StructuralEqualityPolicy.prototype.x1t = function (a, b) {
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    return this.c20(tmp, (b == null ? true : isObject(b)) ? b : THROW_CCE());
  };
  StructuralEqualityPolicy.prototype.toString = function () {
    return 'StructuralEqualityPolicy';
  };
  StructuralEqualityPolicy.$metadata$ = objectMeta('StructuralEqualityPolicy', [SnapshotMutationPolicy]);
  var StructuralEqualityPolicy_instance;
  function StructuralEqualityPolicy_getInstance() {
    if (StructuralEqualityPolicy_instance == null)
      new StructuralEqualityPolicy();
    return StructuralEqualityPolicy_instance;
  }
  function neverEqualPolicy() {
    var tmp = NeverEqualPolicy_getInstance();
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function referentialEqualityPolicy() {
    var tmp = ReferentialEqualityPolicy_getInstance();
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function NeverEqualPolicy() {
    NeverEqualPolicy_instance = this;
  }
  NeverEqualPolicy.prototype.c20 = function (a, b) {
    return false;
  };
  NeverEqualPolicy.prototype.x1t = function (a, b) {
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    return this.c20(tmp, (b == null ? true : isObject(b)) ? b : THROW_CCE());
  };
  NeverEqualPolicy.prototype.toString = function () {
    return 'NeverEqualPolicy';
  };
  NeverEqualPolicy.$metadata$ = objectMeta('NeverEqualPolicy', [SnapshotMutationPolicy]);
  var NeverEqualPolicy_instance;
  function NeverEqualPolicy_getInstance() {
    if (NeverEqualPolicy_instance == null)
      new NeverEqualPolicy();
    return NeverEqualPolicy_instance;
  }
  function ReferentialEqualityPolicy() {
    ReferentialEqualityPolicy_instance = this;
  }
  ReferentialEqualityPolicy.prototype.c20 = function (a, b) {
    return a === b;
  };
  ReferentialEqualityPolicy.prototype.x1t = function (a, b) {
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    return this.c20(tmp, (b == null ? true : isObject(b)) ? b : THROW_CCE());
  };
  ReferentialEqualityPolicy.prototype.toString = function () {
    return 'ReferentialEqualityPolicy';
  };
  ReferentialEqualityPolicy.$metadata$ = objectMeta('ReferentialEqualityPolicy', [SnapshotMutationPolicy]);
  var ReferentialEqualityPolicy_instance;
  function ReferentialEqualityPolicy_getInstance() {
    if (ReferentialEqualityPolicy_instance == null)
      new ReferentialEqualityPolicy();
    return ReferentialEqualityPolicy_instance;
  }
  function State_0() {
  }
  State_0.$metadata$ = interfaceMeta('State');
  function MutableState() {
  }
  MutableState.$metadata$ = interfaceMeta('MutableState', [State_0]);
  function getValue(_this__u8e3s4, thisObj, property) {
    return _this__u8e3s4.i2();
  }
  function setValue(_this__u8e3s4, thisObj, property, value) {
    _this__u8e3s4.p11(value);
  }
  function mutableStateOf(value, policy) {
    return createSnapshotMutableState(value, policy);
  }
  function mutableStateOf$default(value, policy, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      policy = structuralEqualityPolicy();
    return mutableStateOf(value, policy);
  }
  function StateStateRecord(myValue) {
    StateRecord.call(this);
    this.g20_1 = myValue;
  }
  StateStateRecord.prototype.g1t = function (value) {
    var tmp = this;
    tmp.g20_1 = (value instanceof StateStateRecord ? value : THROW_CCE()).g20_1;
  };
  StateStateRecord.prototype.h1t = function () {
    return new StateStateRecord(this.g20_1);
  };
  StateStateRecord.prototype.p11 = function (_set____db54di) {
    this.g20_1 = _set____db54di;
  };
  StateStateRecord.prototype.i2 = function () {
    return this.g20_1;
  };
  StateStateRecord.$metadata$ = classMeta('StateStateRecord', undefined, undefined, undefined, undefined, StateRecord.prototype);
  function SnapshotMutableStateImpl(value, policy) {
    this.h20_1 = policy;
    this.i20_1 = new StateStateRecord(value);
  }
  SnapshotMutableStateImpl.prototype.n1s = function () {
    return this.h20_1;
  };
  SnapshotMutableStateImpl.prototype.p11 = function (value) {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.i20_1;
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    var tmp;
    if (!this.n1s().x1t(tmp1__anonymous__uwfjfc.g20_1, value)) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var tmp2_overwritable = this.i20_1;
      var snapshot = get_snapshotInitializer();
      var tmp$ret$4;
      // Inline function 'kotlin.also' call
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_getInstance_9().s19();
      var tmp3__anonymous__ufb84q = overwritableRecord(tmp2_overwritable, this, snapshot, tmp1__anonymous__uwfjfc);
      tmp3__anonymous__ufb84q.g20_1 = value;
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp1_also = tmp$ret$3;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$4 = tmp1_also;
      tmp$ret$5 = tmp$ret$4;
      tmp = tmp$ret$5;
    }
    tmp$ret$6 = tmp;
    return tmp$ret$6;
  };
  SnapshotMutableStateImpl.prototype.i2 = function () {
    return readable_0(this.i20_1, this).g20_1;
  };
  SnapshotMutableStateImpl.prototype.k1t = function () {
    return this.i20_1;
  };
  SnapshotMutableStateImpl.prototype.z1t = function (value) {
    var tmp = this;
    tmp.i20_1 = value instanceof StateStateRecord ? value : THROW_CCE();
  };
  SnapshotMutableStateImpl.prototype.a1u = function (previous, current, applied) {
    var previousRecord = previous instanceof StateStateRecord ? previous : THROW_CCE();
    var currentRecord = current instanceof StateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof StateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (this.n1s().x1t(currentRecord.g20_1, appliedRecord.g20_1)) {
      tmp = current;
    } else {
      var merged = this.n1s().b20(previousRecord.g20_1, currentRecord.g20_1, appliedRecord.g20_1);
      var tmp_0;
      if (!(merged == null)) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = appliedRecord.h1t();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.mergeRecords.<anonymous>' call
        (tmp0_also instanceof StateStateRecord ? tmp0_also : THROW_CCE()).g20_1 = merged;
        tmp$ret$0 = tmp0_also;
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  SnapshotMutableStateImpl.prototype.toString = function () {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.i20_1;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.toString.<anonymous>' call
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    tmp$ret$0 = 'MutableState(value=' + tmp1__anonymous__uwfjfc.g20_1 + ')@' + hashCode(this);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  SnapshotMutableStateImpl.$metadata$ = classMeta('SnapshotMutableStateImpl', [StateObject, SnapshotMutableState]);
  function mutableStateMapOf() {
    return new SnapshotStateMap();
  }
  function toMutableStateList(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new SnapshotStateList();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.toMutableStateList.<anonymous>' call
    tmp0_also.k20(_this__u8e3s4);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function rememberUpdatedState$composable(newValue, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(735465400);
    sourceInformation($composer_0, 'C(rememberUpdatedState$composable)*294@9997L41:SnapshotState.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(735465400, $changed, -1, 'androidx.compose.runtime.rememberUpdatedState$composable (SnapshotState.kt:294)');
    }
    var tmp$ret$5;
    // Inline function 'kotlin.apply' call
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
    if (false ? true : tmp0_let === Companion_getInstance_1().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.rememberUpdatedState$composable.<anonymous>' call
      tmp$ret$0 = mutableStateOf$default(newValue, null, 2, null);
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
    var tmp1_apply = tmp$ret$4;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.rememberUpdatedState$composable.<anonymous>' call
    tmp1_apply.p11(newValue);
    tmp$ret$5 = tmp1_apply;
    var tmp0_0 = tmp$ret$5;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0_0;
  }
  function mutableStateListOf() {
    return new SnapshotStateList();
  }
  function IntStack() {
    this.g1g_1 = new Int32Array(10);
    this.h1g_1 = 0;
  }
  IntStack.prototype.f = function () {
    return this.h1g_1;
  };
  IntStack.prototype.i1g = function (value) {
    if (this.h1g_1 >= this.g1g_1.length) {
      this.g1g_1 = copyOf(this.g1g_1, imul(this.g1g_1.length, 2));
    }
    var tmp = this.g1g_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.h1g_1;
    tmp0_this.h1g_1 = tmp1 + 1 | 0;
    tmp[tmp1] = value;
  };
  IntStack.prototype.r1i = function () {
    var tmp = this.g1g_1;
    var tmp0_this = this;
    tmp0_this.h1g_1 = tmp0_this.h1g_1 - 1 | 0;
    return tmp[tmp0_this.h1g_1];
  };
  IntStack.prototype.u1k = function (default_0) {
    return this.h1g_1 > 0 ? this.i1n() : default_0;
  };
  IntStack.prototype.i1n = function () {
    return this.g1g_1[this.h1g_1 - 1 | 0];
  };
  IntStack.prototype.l1j = function (index) {
    return this.g1g_1[index];
  };
  IntStack.prototype.h = function () {
    return this.h1g_1 === 0;
  };
  IntStack.prototype.g9 = function () {
    this.h1g_1 = 0;
  };
  IntStack.prototype.h1z = function (value) {
    var inductionVariable = 0;
    var last = this.h1g_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.g1g_1[i] === value)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  };
  IntStack.$metadata$ = classMeta('IntStack');
  function Stack() {
    this.a1h_1 = ArrayList_init_$Create$();
  }
  Stack.prototype.f = function () {
    return this.a1h_1.f();
  };
  Stack.prototype.q1i = function (value) {
    return this.a1h_1.a(value);
  };
  Stack.prototype.r1i = function () {
    return this.a1h_1.c4(this.f() - 1 | 0);
  };
  Stack.prototype.i1n = function () {
    return this.a1h_1.g(this.f() - 1 | 0);
  };
  Stack.prototype.l1j = function (index) {
    return this.a1h_1.g(index);
  };
  Stack.prototype.h = function () {
    return this.a1h_1.h();
  };
  Stack.prototype.o1k = function () {
    return !this.h();
  };
  Stack.prototype.g9 = function () {
    return this.a1h_1.g9();
  };
  Stack.prototype.ma = function () {
    var tmp = 0;
    var tmp_0 = this.a1h_1.f();
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.Stack.toArray.<anonymous>' call
      tmp$ret$1 = this.a1h_1.g(tmp_2);
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    var tmp_3 = tmp_1;
    return isArray(tmp_3) ? tmp_3 : THROW_CCE();
  };
  Stack.$metadata$ = classMeta('Stack');
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
  function trace(sectionName, block) {
    var token = Trace_getInstance().i1l(sectionName);
    try {
      return block();
    }finally {
      Trace_getInstance().u1l(token);
    }
  }
  function _get_current__qcrdxk($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = current$factory();
    tmp$ret$0 = $this.j1h_1.i2();
    return tmp$ret$0;
  }
  function LazyValueHolder(valueProducer) {
    this.j1h_1 = lazy(valueProducer);
  }
  LazyValueHolder.prototype.i2 = function () {
    return _get_current__qcrdxk(this);
  };
  LazyValueHolder.$metadata$ = classMeta('LazyValueHolder', [State_0]);
  function StaticValueHolder(value) {
    this.l20_1 = value;
  }
  StaticValueHolder.prototype.i2 = function () {
    return this.l20_1;
  };
  StaticValueHolder.prototype.toString = function () {
    return 'StaticValueHolder(value=' + this.l20_1 + ')';
  };
  StaticValueHolder.prototype.hashCode = function () {
    return this.l20_1 == null ? 0 : hashCode(this.l20_1);
  };
  StaticValueHolder.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StaticValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof StaticValueHolder ? other : THROW_CCE();
    if (!equals(this.l20_1, tmp0_other_with_cast.l20_1))
      return false;
    return true;
  };
  StaticValueHolder.$metadata$ = classMeta('StaticValueHolder', [State_0]);
  function current$factory() {
    return getPropertyCallableRef('current', 1, KProperty1, function (receiver) {
      return _get_current__qcrdxk(receiver);
    }, null);
  }
  function find($this, key) {
    var low = 0;
    var high = $this.o1u_1 - 1 | 0;
    var valueIdentity = identityHashCode(key);
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.p1u_1[mid];
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === key)
        return mid;
      else
        return findExactIndex($this, mid, key, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = $this.p1u_1[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.o1u_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = $this.p1u_1[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.o1u_1 + 1 | 0) | 0;
  }
  function IdentityArrayIntMap() {
    this.o1u_1 = 0;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(4), null);
    tmp.p1u_1 = tmp$ret$0;
    this.q1u_1 = new Int32Array(4);
  }
  IdentityArrayIntMap.prototype.m20 = function (_set____db54di) {
    this.o1u_1 = _set____db54di;
  };
  IdentityArrayIntMap.prototype.f = function () {
    return this.o1u_1;
  };
  IdentityArrayIntMap.prototype.w2 = function () {
    return this.p1u_1;
  };
  IdentityArrayIntMap.prototype.x2 = function () {
    return this.q1u_1;
  };
  IdentityArrayIntMap.prototype.s1u = function (key, value) {
    var index;
    if (this.o1u_1 > 0) {
      index = find(this, key);
      if (index >= 0) {
        var previousValue = this.q1u_1[index];
        this.q1u_1[index] = value;
        return previousValue;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (this.o1u_1 === this.p1u_1.length) {
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = imul(this.p1u_1.length, 2);
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      var newKeys = tmp$ret$0;
      var newValues = new Int32Array(imul(this.p1u_1.length, 2));
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = this.p1u_1;
      var tmp2_copyInto = insertIndex + 1 | 0;
      var tmp3_copyInto = this.o1u_1;
      arrayCopy(tmp1_copyInto, newKeys, tmp2_copyInto, insertIndex, tmp3_copyInto);
      tmp$ret$1 = newKeys;
      var tmp$ret$6;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = this.q1u_1;
      var tmp5_copyInto = insertIndex + 1 | 0;
      var tmp6_copyInto = this.o1u_1;
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp4_copyInto;
      tmp$ret$3 = tmp$ret$2;
      var tmp = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = newValues;
      tmp$ret$5 = tmp$ret$4;
      arrayCopy(tmp, tmp$ret$5, tmp5_copyInto, insertIndex, tmp6_copyInto);
      tmp$ret$6 = newValues;
      var tmp$ret$7;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp7_copyInto = this.p1u_1;
      arrayCopy(tmp7_copyInto, newKeys, 0, 0, insertIndex);
      tmp$ret$7 = newKeys;
      var tmp$ret$12;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp8_copyInto = this.q1u_1;
      var tmp$ret$9;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$8 = tmp8_copyInto;
      tmp$ret$9 = tmp$ret$8;
      var tmp_0 = tmp$ret$9;
      var tmp$ret$11;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$10;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$10 = newValues;
      tmp$ret$11 = tmp$ret$10;
      arrayCopy(tmp_0, tmp$ret$11, 0, 0, insertIndex);
      tmp$ret$12 = newValues;
      this.p1u_1 = newKeys;
      this.q1u_1 = newValues;
    } else {
      var tmp$ret$13;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp9_copyInto = this.p1u_1;
      var tmp10_copyInto = this.p1u_1;
      var tmp11_copyInto = insertIndex + 1 | 0;
      var tmp12_copyInto = this.o1u_1;
      arrayCopy(tmp9_copyInto, tmp10_copyInto, tmp11_copyInto, insertIndex, tmp12_copyInto);
      tmp$ret$13 = tmp10_copyInto;
      var tmp$ret$18;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp13_copyInto = this.q1u_1;
      var tmp14_copyInto = this.q1u_1;
      var tmp15_copyInto = insertIndex + 1 | 0;
      var tmp16_copyInto = this.o1u_1;
      var tmp$ret$15;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$14;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$14 = tmp13_copyInto;
      tmp$ret$15 = tmp$ret$14;
      var tmp_1 = tmp$ret$15;
      var tmp$ret$17;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$16;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$16 = tmp14_copyInto;
      tmp$ret$17 = tmp$ret$16;
      arrayCopy(tmp_1, tmp$ret$17, tmp15_copyInto, insertIndex, tmp16_copyInto);
      tmp$ret$18 = tmp14_copyInto;
    }
    this.p1u_1[insertIndex] = key;
    this.q1u_1[insertIndex] = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this.o1u_1;
    tmp0_this.o1u_1 = tmp1 + 1 | 0;
    return -1;
  };
  IdentityArrayIntMap.prototype.n20 = function (predicate) {
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = this.o1u_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.p1u_1[i];
        var key = isObject(tmp) ? tmp : THROW_CCE();
        var value = this.q1u_1[i];
        if (!predicate(key, value)) {
          if (!(destinationIndex === i)) {
            this.p1u_1[destinationIndex] = key;
            this.q1u_1[destinationIndex] = value;
          }
          var tmp1 = destinationIndex;
          destinationIndex = tmp1 + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_0 = destinationIndex;
    var last_0 = this.o1u_1;
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this.p1u_1[i_0] = null;
      }
       while (inductionVariable_0 < last_0);
    this.o1u_1 = destinationIndex;
  };
  IdentityArrayIntMap.prototype.o20 = function (predicate) {
    var inductionVariable = 0;
    var last = this.o1u_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.p1u_1[i];
        if (predicate(isObject(tmp) ? tmp : THROW_CCE(), this.q1u_1[i]))
          return true;
      }
       while (inductionVariable < last);
    return false;
  };
  IdentityArrayIntMap.prototype.p20 = function (block) {
    var inductionVariable = 0;
    var last = this.o1u_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.p1u_1[i];
        block(isObject(tmp) ? tmp : THROW_CCE(), this.q1u_1[i]);
      }
       while (inductionVariable < last);
  };
  IdentityArrayIntMap.$metadata$ = classMeta('IdentityArrayIntMap');
  function IdentityArrayMap_init_$Init$(capacity, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      capacity = 16;
    IdentityArrayMap.call($this, capacity);
    return $this;
  }
  function IdentityArrayMap_init_$Create$(capacity, $mask0, $marker) {
    return IdentityArrayMap_init_$Init$(capacity, $mask0, $marker, Object.create(IdentityArrayMap.prototype));
  }
  function find_0($this, key) {
    var keyIdentity = identityHashCode(key);
    var low = 0;
    var high = $this.r1l_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midKey = $this.p1l_1[mid];
      var midKeyHash = identityHashCode(midKey);
      if (midKeyHash < keyIdentity)
        low = mid + 1 | 0;
      else if (midKeyHash > keyIdentity)
        high = mid - 1 | 0;
      else if (key === midKey)
        return mid;
      else
        return findExactIndex_0($this, mid, key, keyIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_0($this, midIndex, key, keyHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var k = $this.p1l_1[i];
        if (k === key) {
          return i;
        }
        if (!(identityHashCode(k) === keyHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.r1l_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var k_0 = $this.p1l_1[i_0];
        if (k_0 === key) {
          return i_0;
        }
        if (!(identityHashCode(k_0) === keyHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.r1l_1 + 1 | 0) | 0;
  }
  function IdentityArrayMap(capacity) {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(capacity), null);
    tmp.p1l_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$1 = fillArrayVal(Array(capacity), null);
    tmp_0.q1l_1 = tmp$ret$1;
    this.r1l_1 = 0;
  }
  IdentityArrayMap.prototype.w2 = function () {
    return this.p1l_1;
  };
  IdentityArrayMap.prototype.x2 = function () {
    return this.q1l_1;
  };
  IdentityArrayMap.prototype.f = function () {
    return this.r1l_1;
  };
  IdentityArrayMap.prototype.o1k = function () {
    return this.r1l_1 > 0;
  };
  IdentityArrayMap.prototype.d1s = function (key) {
    return find_0(this, key) >= 0;
  };
  IdentityArrayMap.prototype.c1s = function (key) {
    var index = find_0(this, key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.q1l_1[index];
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  IdentityArrayMap.prototype.y1q = function (key, value) {
    var index = find_0(this, key);
    if (index >= 0) {
      this.q1l_1[index] = value;
    } else {
      var insertIndex = -(index + 1 | 0) | 0;
      var resize = this.r1l_1 === this.p1l_1.length;
      var tmp;
      if (resize) {
        var tmp$ret$0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp0_arrayOfNulls = imul(this.r1l_1, 2);
        tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
        tmp = tmp$ret$0;
      } else {
        tmp = this.p1l_1;
      }
      var destKeys = tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = this.p1l_1;
      var tmp2_copyInto = insertIndex + 1 | 0;
      var tmp3_copyInto = this.r1l_1;
      arrayCopy(tmp1_copyInto, destKeys, tmp2_copyInto, insertIndex, tmp3_copyInto);
      tmp$ret$1 = destKeys;
      if (resize) {
        var tmp$ret$2;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp4_copyInto = this.p1l_1;
        arrayCopy(tmp4_copyInto, destKeys, 0, 0, insertIndex);
        tmp$ret$2 = destKeys;
      }
      destKeys[insertIndex] = key;
      this.p1l_1 = destKeys;
      var tmp_0;
      if (resize) {
        var tmp$ret$3;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp5_arrayOfNulls = imul(this.r1l_1, 2);
        tmp$ret$3 = fillArrayVal(Array(tmp5_arrayOfNulls), null);
        tmp_0 = tmp$ret$3;
      } else {
        tmp_0 = this.q1l_1;
      }
      var destValues = tmp_0;
      var tmp$ret$4;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp6_copyInto = this.q1l_1;
      var tmp7_copyInto = insertIndex + 1 | 0;
      var tmp8_copyInto = this.r1l_1;
      arrayCopy(tmp6_copyInto, destValues, tmp7_copyInto, insertIndex, tmp8_copyInto);
      tmp$ret$4 = destValues;
      if (resize) {
        var tmp$ret$5;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp9_copyInto = this.q1l_1;
        arrayCopy(tmp9_copyInto, destValues, 0, 0, insertIndex);
        tmp$ret$5 = destValues;
      }
      destValues[insertIndex] = value;
      this.q1l_1 = destValues;
      var tmp0_this = this;
      var tmp1 = tmp0_this.r1l_1;
      tmp0_this.r1l_1 = tmp1 + 1 | 0;
    }
  };
  IdentityArrayMap.prototype.r1u = function (key) {
    var index = find_0(this, key);
    if (index >= 0) {
      var size = this.r1l_1;
      var keys = this.p1l_1;
      var values = this.q1l_1;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + 1 | 0;
      arrayCopy(keys, keys, index, tmp0_copyInto, size);
      tmp$ret$0 = keys;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = index + 1 | 0;
      arrayCopy(values, values, index, tmp1_copyInto, size);
      tmp$ret$1 = values;
      var newSize = size - 1 | 0;
      keys[newSize] = null;
      values[newSize] = null;
      this.r1l_1 = newSize;
      return true;
    }
    return false;
  };
  IdentityArrayMap.prototype.g9 = function () {
    this.r1l_1 = 0;
    var tmp = this.p1l_1;
    fill$default_0(tmp, null, 0, 0, 6, null);
    var tmp_0 = this.q1l_1;
    fill$default_0(tmp_0, null, 0, 0, 6, null);
  };
  IdentityArrayMap.prototype.q20 = function (block) {
    var current = 0;
    var inductionVariable = 0;
    var last = this.r1l_1;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.p1l_1[index];
        var key = isObject(tmp) ? tmp : THROW_CCE();
        var tmp_0 = this.q1l_1[index];
        var value = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
        if (!block(key, value)) {
          if (!(current === index)) {
            this.p1l_1[current] = key;
            this.q1l_1[current] = this.q1l_1[index];
          }
          var tmp1 = current;
          current = tmp1 + 1 | 0;
        }
      }
       while (inductionVariable < last);
    if (this.r1l_1 > current) {
      var inductionVariable_0 = current;
      var last_0 = this.r1l_1;
      if (inductionVariable_0 < last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this.p1l_1[index_0] = null;
          this.q1l_1[index_0] = null;
        }
         while (inductionVariable_0 < last_0);
      this.r1l_1 = current;
    }
  };
  IdentityArrayMap.prototype.r20 = function (block) {
    var inductionVariable = 0;
    var last = this.r1l_1;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.p1l_1[index];
        var tmp_0 = isObject(tmp) ? tmp : THROW_CCE();
        var tmp_1 = this.q1l_1[index];
        block(tmp_0, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
      }
       while (inductionVariable < last);
  };
  IdentityArrayMap.$metadata$ = classMeta('IdentityArrayMap');
  function find_1($this, value) {
    var low = 0;
    var high = $this.k1k_1 - 1 | 0;
    var valueIdentity = identityHashCode(value);
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.g(mid);
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === value)
        return mid;
      else
        return findExactIndex_1($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_1($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = $this.l1k_1[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.k1k_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = $this.l1k_1[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.k1k_1 + 1 | 0) | 0;
  }
  function IdentityArraySet$iterator$1(this$0) {
    this.t20_1 = this$0;
    this.s20_1 = 0;
  }
  IdentityArraySet$iterator$1.prototype.d = function () {
    return this.s20_1 < this.t20_1.k1k_1;
  };
  IdentityArraySet$iterator$1.prototype.e = function () {
    var tmp = this.t20_1.l1k_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.s20_1;
    tmp0_this.s20_1 = tmp1 + 1 | 0;
    var tmp_0 = tmp[tmp1];
    return isObject(tmp_0) ? tmp_0 : THROW_CCE();
  };
  IdentityArraySet$iterator$1.$metadata$ = classMeta(undefined, [Iterator]);
  function IdentityArraySet() {
    this.k1k_1 = 0;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.l1k_1 = tmp$ret$0;
  }
  IdentityArraySet.prototype.m20 = function (_set____db54di) {
    this.k1k_1 = _set____db54di;
  };
  IdentityArraySet.prototype.f = function () {
    return this.k1k_1;
  };
  IdentityArraySet.prototype.x2 = function () {
    return this.l1k_1;
  };
  IdentityArraySet.prototype.g3 = function (element) {
    return find_1(this, element) >= 0;
  };
  IdentityArraySet.prototype.m = function (element) {
    if (!isObject(element))
      return false;
    return this.g3(isObject(element) ? element : THROW_CCE());
  };
  IdentityArraySet.prototype.g = function (index) {
    var tmp = this.l1k_1[index];
    return isObject(tmp) ? tmp : THROW_CCE();
  };
  IdentityArraySet.prototype.t1p = function (value) {
    var index;
    if (this.k1k_1 > 0) {
      index = find_1(this, value);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (this.k1k_1 === this.l1k_1.length) {
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = imul(this.l1k_1.length, 2);
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      var newSorted = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = this.l1k_1;
      var tmp2_copyInto = insertIndex + 1 | 0;
      var tmp3_copyInto = this.k1k_1;
      arrayCopy(tmp1_copyInto, newSorted, tmp2_copyInto, insertIndex, tmp3_copyInto);
      tmp$ret$1 = newSorted;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = this.l1k_1;
      arrayCopy(tmp4_copyInto, newSorted, 0, 0, insertIndex);
      tmp$ret$2 = newSorted;
      this.l1k_1 = newSorted;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp5_copyInto = this.l1k_1;
      var tmp6_copyInto = this.l1k_1;
      var tmp7_copyInto = insertIndex + 1 | 0;
      var tmp8_copyInto = this.k1k_1;
      arrayCopy(tmp5_copyInto, tmp6_copyInto, tmp7_copyInto, insertIndex, tmp8_copyInto);
      tmp$ret$3 = tmp6_copyInto;
    }
    this.l1k_1[insertIndex] = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this.k1k_1;
    tmp0_this.k1k_1 = tmp1 + 1 | 0;
    return true;
  };
  IdentityArraySet.prototype.g9 = function () {
    var tmp = this.l1k_1;
    fill$default_0(tmp, null, 0, 0, 6, null);
    this.k1k_1 = 0;
  };
  IdentityArraySet.prototype.u20 = function (block) {
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this.k1k_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        block(this.g(i));
      }
       while (inductionVariable < last);
  };
  IdentityArraySet.prototype.h = function () {
    return this.k1k_1 === 0;
  };
  IdentityArraySet.prototype.o1k = function () {
    return this.k1k_1 > 0;
  };
  IdentityArraySet.prototype.v20 = function (value) {
    var index = find_1(this, value);
    if (index >= 0) {
      if (index < (this.k1k_1 - 1 | 0)) {
        var tmp$ret$0;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = this.l1k_1;
        var tmp1_copyInto = this.l1k_1;
        var tmp2_copyInto = index + 1 | 0;
        var tmp3_copyInto = this.k1k_1;
        arrayCopy(tmp0_copyInto, tmp1_copyInto, index, tmp2_copyInto, tmp3_copyInto);
        tmp$ret$0 = tmp1_copyInto;
      }
      var tmp0_this = this;
      var tmp1 = tmp0_this.k1k_1;
      tmp0_this.k1k_1 = tmp1 - 1 | 0;
      this.l1k_1[this.k1k_1] = null;
      return true;
    }
    return false;
  };
  IdentityArraySet.prototype.w20 = function (predicate) {
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = this.k1k_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.l1k_1[i];
        var item = isObject(tmp) ? tmp : THROW_CCE();
        if (!predicate(item)) {
          if (!(destinationIndex === i)) {
            this.l1k_1[destinationIndex] = item;
          }
          var tmp1 = destinationIndex;
          destinationIndex = tmp1 + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_0 = destinationIndex;
    var last_0 = this.k1k_1;
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this.l1k_1[i_0] = null;
      }
       while (inductionVariable_0 < last_0);
    this.k1k_1 = destinationIndex;
  };
  IdentityArraySet.prototype.h3 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.containsAll.<anonymous>' call
        tmp$ret$1 = this.g3(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  IdentityArraySet.prototype.t1 = function (elements) {
    return this.h3(elements);
  };
  IdentityArraySet.prototype.c = function () {
    return new IdentityArraySet$iterator$1(this);
  };
  IdentityArraySet.$metadata$ = classMeta('IdentityArraySet', [Set]);
  function scopeSetAt($this, index) {
    return ensureNotNull($this.i1q_1[$this.g1q_1[index]]);
  }
  function getOrCreateIdentitySet($this, value) {
    var index;
    if ($this.j1q_1 > 0) {
      index = find_2($this, value);
      if (index >= 0) {
        return scopeSetAt($this, index);
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if ($this.j1q_1 < $this.g1q_1.length) {
      var valueIndex = $this.g1q_1[$this.j1q_1];
      $this.h1q_1[valueIndex] = value;
      var tmp0_elvis_lhs = $this.i1q_1[valueIndex];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.getOrCreateIdentitySet.<anonymous>' call
        $this.i1q_1[valueIndex] = tmp0_also;
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var scopeSet = tmp;
      if (insertIndex < $this.j1q_1) {
        var tmp$ret$5;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp1_copyInto = $this.g1q_1;
        var tmp2_copyInto = $this.g1q_1;
        var tmp3_copyInto = insertIndex + 1 | 0;
        var tmp4_copyInto = $this.j1q_1;
        var tmp$ret$2;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = tmp1_copyInto;
        tmp$ret$2 = tmp$ret$1;
        var tmp_0 = tmp$ret$2;
        var tmp$ret$4;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = tmp2_copyInto;
        tmp$ret$4 = tmp$ret$3;
        arrayCopy(tmp_0, tmp$ret$4, tmp3_copyInto, insertIndex, tmp4_copyInto);
        tmp$ret$5 = tmp2_copyInto;
      }
      $this.g1q_1[insertIndex] = valueIndex;
      var tmp1_this = $this;
      var tmp2 = tmp1_this.j1q_1;
      tmp1_this.j1q_1 = tmp2 + 1 | 0;
      return scopeSet;
    }
    var newSize = imul($this.g1q_1.length, 2);
    var valueIndex_0 = $this.j1q_1;
    $this.i1q_1 = copyOf_0($this.i1q_1, newSize);
    var scopeSet_0 = new IdentityArraySet();
    $this.i1q_1[valueIndex_0] = scopeSet_0;
    $this.h1q_1 = copyOf_0($this.h1q_1, newSize);
    $this.h1q_1[valueIndex_0] = value;
    var newKeyOrder = new Int32Array(newSize);
    var inductionVariable = $this.j1q_1 + 1 | 0;
    if (inductionVariable < newSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newKeyOrder[i] = i;
      }
       while (inductionVariable < newSize);
    if (insertIndex < $this.j1q_1) {
      var tmp$ret$10;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp5_copyInto = $this.g1q_1;
      var tmp6_copyInto = insertIndex + 1 | 0;
      var tmp7_copyInto = $this.j1q_1;
      var tmp$ret$7;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$6;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$6 = tmp5_copyInto;
      tmp$ret$7 = tmp$ret$6;
      var tmp_1 = tmp$ret$7;
      var tmp$ret$9;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$8 = newKeyOrder;
      tmp$ret$9 = tmp$ret$8;
      arrayCopy(tmp_1, tmp$ret$9, tmp6_copyInto, insertIndex, tmp7_copyInto);
      tmp$ret$10 = newKeyOrder;
    }
    newKeyOrder[insertIndex] = valueIndex_0;
    if (insertIndex > 0) {
      var tmp$ret$15;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp8_copyInto = $this.g1q_1;
      var tmp$ret$12;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$11;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$11 = tmp8_copyInto;
      tmp$ret$12 = tmp$ret$11;
      var tmp_2 = tmp$ret$12;
      var tmp$ret$14;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$13;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$13 = newKeyOrder;
      tmp$ret$14 = tmp$ret$13;
      arrayCopy(tmp_2, tmp$ret$14, 0, 0, insertIndex);
      tmp$ret$15 = newKeyOrder;
    }
    $this.g1q_1 = newKeyOrder;
    var tmp4_this = $this;
    var tmp5 = tmp4_this.j1q_1;
    tmp4_this.j1q_1 = tmp5 + 1 | 0;
    return scopeSet_0;
  }
  function find_2($this, value) {
    var valueIdentity = identityHashCode(value);
    var low = 0;
    var high = $this.j1q_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.valueAt' call
      tmp$ret$0 = ensureNotNull($this.h1q_1[$this.g1q_1[mid]]);
      var midValue = tmp$ret$0;
      var midValHash = identityHashCode(midValue);
      if (midValHash < valueIdentity)
        low = mid + 1 | 0;
      else if (midValHash > valueIdentity)
        high = mid - 1 | 0;
      else if (value === midValue)
        return mid;
      else
        return findExactIndex_2($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_2($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.valueAt' call
        tmp$ret$0 = ensureNotNull($this.h1q_1[$this.g1q_1[i]]);
        var v = tmp$ret$0;
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.j1q_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.valueAt' call
        tmp$ret$1 = ensureNotNull($this.h1q_1[$this.g1q_1[i_0]]);
        var v_0 = tmp$ret$1;
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.j1q_1 + 1 | 0) | 0;
  }
  function IdentityScopeMap() {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = 50;
    var tmp_2 = new Int32Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.valueOrder.<anonymous>' call
      tmp$ret$0 = tmp_3;
      tmp_2[tmp_3] = tmp$ret$0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.g1q_1 = tmp_2;
    var tmp_4 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$1 = fillArrayVal(Array(50), null);
    tmp_4.h1q_1 = tmp$ret$1;
    var tmp_5 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$2 = fillArrayVal(Array(50), null);
    tmp_5.i1q_1 = tmp$ret$2;
    this.j1q_1 = 0;
  }
  IdentityScopeMap.prototype.x20 = function () {
    return this.g1q_1;
  };
  IdentityScopeMap.prototype.x2 = function () {
    return this.h1q_1;
  };
  IdentityScopeMap.prototype.y20 = function () {
    return this.i1q_1;
  };
  IdentityScopeMap.prototype.m20 = function (_set____db54di) {
    this.j1q_1 = _set____db54di;
  };
  IdentityScopeMap.prototype.f = function () {
    return this.j1q_1;
  };
  IdentityScopeMap.prototype.m1q = function (value, scope) {
    var valueSet = getOrCreateIdentitySet(this, value);
    return valueSet.t1p(scope);
  };
  IdentityScopeMap.prototype.k1q = function (element) {
    return find_2(this, element) >= 0;
  };
  IdentityScopeMap.prototype.z20 = function (value, block) {
    var index = find_2(this, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var tmp0_fastForEach = scopeSetAt(this, index);
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastForEach.k1k_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          block(tmp0_fastForEach.g(i));
        }
         while (inductionVariable < last);
    }
  };
  IdentityScopeMap.prototype.g9 = function () {
    var inductionVariable = 0;
    var last = this.i1q_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_safe_receiver = this.i1q_1[i];
        if (tmp1_safe_receiver == null)
          null;
        else {
          tmp1_safe_receiver.g9();
        }
        this.g1q_1[i] = i;
        this.h1q_1[i] = null;
      }
       while (inductionVariable < last);
    this.j1q_1 = 0;
  };
  IdentityScopeMap.prototype.z1q = function (value, scope) {
    var index = find_2(this, value);
    if (index >= 0) {
      var valueOrderIndex = this.g1q_1[index];
      var tmp0_elvis_lhs = this.i1q_1[valueOrderIndex];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var set = tmp;
      var removed = set.v20(scope);
      if (set.k1k_1 === 0) {
        var startIndex = index + 1 | 0;
        var endIndex = this.j1q_1;
        if (startIndex < endIndex) {
          var tmp$ret$4;
          // Inline function 'kotlin.collections.copyInto' call
          var tmp0_copyInto = this.g1q_1;
          var tmp1_copyInto = this.g1q_1;
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
          arrayCopy(tmp_0, tmp$ret$3, index, startIndex, endIndex);
          tmp$ret$4 = tmp1_copyInto;
        }
        this.g1q_1[this.j1q_1 - 1 | 0] = valueOrderIndex;
        this.h1q_1[valueOrderIndex] = null;
        var tmp1_this = this;
        var tmp2 = tmp1_this.j1q_1;
        tmp1_this.j1q_1 = tmp2 - 1 | 0;
      }
      return removed;
    }
    return false;
  };
  IdentityScopeMap.prototype.w20 = function (predicate) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = this.j1q_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = this.g1q_1[i];
        var set = ensureNotNull(this.i1q_1[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
        var destinationIndex_0 = 0;
        var inductionVariable_0 = 0;
        var last_0 = set.k1k_1;
        if (inductionVariable_0 < last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp = set.l1k_1[i_0];
            var item = isObject(tmp) ? tmp : THROW_CCE();
            if (!predicate(item)) {
              if (!(destinationIndex_0 === i_0)) {
                set.l1k_1[destinationIndex_0] = item;
              }
              var tmp1 = destinationIndex_0;
              destinationIndex_0 = tmp1 + 1 | 0;
            }
          }
           while (inductionVariable_0 < last_0);
        var inductionVariable_1 = destinationIndex_0;
        var last_1 = set.k1k_1;
        if (inductionVariable_1 < last_1)
          do {
            var i_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            set.l1k_1[i_1] = null;
          }
           while (inductionVariable_1 < last_1);
        set.k1k_1 = destinationIndex_0;
        if (set.k1k_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = this.g1q_1[destinationIndex];
            this.g1q_1[destinationIndex] = valueIndex;
            this.g1q_1[i] = destinationKeyOrder;
          }
          var tmp1_0 = destinationIndex;
          destinationIndex = tmp1_0 + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_2 = destinationIndex;
    var last_2 = this.j1q_1;
    if (inductionVariable_2 < last_2)
      do {
        var i_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        this.h1q_1[this.g1q_1[i_2]] = null;
      }
       while (inductionVariable_2 < last_2);
    this.j1q_1 = destinationIndex;
  };
  IdentityScopeMap.prototype.j1r = function (scope) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = this.j1q_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = this.g1q_1[i];
        var set = ensureNotNull(this.i1q_1[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeScope.<anonymous>' call
        set.v20(scope);
        if (set.k1k_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = this.g1q_1[destinationIndex];
            this.g1q_1[destinationIndex] = valueIndex;
            this.g1q_1[i] = destinationKeyOrder;
          }
          var tmp1 = destinationIndex;
          destinationIndex = tmp1 + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_0 = destinationIndex;
    var last_0 = this.j1q_1;
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this.h1q_1[this.g1q_1[i_0]] = null;
      }
       while (inductionVariable_0 < last_0);
    this.j1q_1 = destinationIndex;
  };
  IdentityScopeMap.$metadata$ = classMeta('IdentityScopeMap');
  function VectorListIterator(list, index) {
    this.a21_1 = list;
    this.b21_1 = index;
  }
  VectorListIterator.prototype.d = function () {
    return this.b21_1 < this.a21_1.f();
  };
  VectorListIterator.prototype.e = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.b21_1;
    tmp0_this.b21_1 = tmp1 + 1 | 0;
    return this.a21_1.g(tmp1);
  };
  VectorListIterator.prototype.d4 = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.b21_1;
    tmp0_this.b21_1 = tmp1 - 1 | 0;
    this.a21_1.c4(this.b21_1);
  };
  VectorListIterator.prototype.s = function () {
    return this.b21_1 > 0;
  };
  VectorListIterator.prototype.t = function () {
    return this.b21_1;
  };
  VectorListIterator.prototype.u = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.b21_1;
    tmp0_this.b21_1 = tmp1 - 1 | 0;
    return this.a21_1.g(this.b21_1);
  };
  VectorListIterator.$metadata$ = classMeta('VectorListIterator', [MutableListIterator]);
  function MutableVectorList(vector) {
    this.c21_1 = vector;
  }
  MutableVectorList.prototype.f = function () {
    return this.c21_1.s1s_1;
  };
  MutableVectorList.prototype.g3 = function (element) {
    return this.c21_1.g3(element);
  };
  MutableVectorList.prototype.m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.g3((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  MutableVectorList.prototype.h3 = function (elements) {
    return this.c21_1.h3(elements);
  };
  MutableVectorList.prototype.t1 = function (elements) {
    return this.h3(elements);
  };
  MutableVectorList.prototype.g = function (index) {
    checkIndex(this, index);
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
    var tmp0_get = this.c21_1;
    var tmp = tmp0_get.q1s_1[index];
    tmp$ret$0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    return tmp$ret$0;
  };
  MutableVectorList.prototype.d21 = function (element) {
    return this.c21_1.d21(element);
  };
  MutableVectorList.prototype.n = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.d21((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  MutableVectorList.prototype.h = function () {
    return this.c21_1.h();
  };
  MutableVectorList.prototype.c = function () {
    return new VectorListIterator(this, 0);
  };
  MutableVectorList.prototype.e21 = function (element) {
    return this.c21_1.e21(element);
  };
  MutableVectorList.prototype.e2 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.e21((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  MutableVectorList.prototype.t1p = function (element) {
    return this.c21_1.t1p(element);
  };
  MutableVectorList.prototype.a = function (element) {
    return this.t1p((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  MutableVectorList.prototype.f21 = function (index, element) {
    return this.c21_1.f21(index, element);
  };
  MutableVectorList.prototype.t9 = function (index, element) {
    return this.f21(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  MutableVectorList.prototype.k20 = function (elements) {
    return this.c21_1.k20(elements);
  };
  MutableVectorList.prototype.l = function (elements) {
    return this.k20(elements);
  };
  MutableVectorList.prototype.g9 = function () {
    return this.c21_1.g9();
  };
  MutableVectorList.prototype.r = function (index) {
    return new VectorListIterator(this, index);
  };
  MutableVectorList.prototype.v20 = function (element) {
    return this.c21_1.v20(element);
  };
  MutableVectorList.prototype.b4 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.v20((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  MutableVectorList.prototype.c4 = function (index) {
    checkIndex(this, index);
    return this.c21_1.c4(index);
  };
  MutableVectorList.prototype.g21 = function (index, element) {
    checkIndex(this, index);
    return this.c21_1.g21(index, element);
  };
  MutableVectorList.prototype.d9 = function (index, element) {
    return this.g21(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  MutableVectorList.$metadata$ = classMeta('MutableVectorList', [MutableList]);
  function MutableVector(content, size) {
    this.q1s_1 = content;
    this.r1s_1 = null;
    this.s1s_1 = size;
    this.t1s_1 = 8;
  }
  MutableVector.prototype.q1o = function () {
    return this.q1s_1;
  };
  MutableVector.prototype.f = function () {
    return this.s1s_1;
  };
  MutableVector.prototype.h21 = function () {
    return this.s1s_1 - 1 | 0;
  };
  MutableVector.prototype.i21 = function () {
    return numberRangeToNumber(0, this.s1s_1 - 1 | 0);
  };
  MutableVector.prototype.t1p = function (element) {
    this.j21(this.s1s_1 + 1 | 0);
    this.q1s_1[this.s1s_1] = element;
    var tmp0_this = this;
    var tmp1 = tmp0_this.s1s_1;
    tmp0_this.s1s_1 = tmp1 + 1 | 0;
    return true;
  };
  MutableVector.prototype.f21 = function (index, element) {
    this.j21(this.s1s_1 + 1 | 0);
    var content = this.q1s_1;
    if (!(index === this.s1s_1)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + 1 | 0;
      var tmp1_copyInto = this.s1s_1;
      arrayCopy(content, content, tmp0_copyInto, index, tmp1_copyInto);
      tmp$ret$0 = content;
    }
    content[index] = element;
    var tmp0_this = this;
    var tmp1 = tmp0_this.s1s_1;
    tmp0_this.s1s_1 = tmp1 + 1 | 0;
  };
  MutableVector.prototype.k21 = function (index, elements) {
    if (elements.h())
      return false;
    this.j21(this.s1s_1 + elements.s1s_1 | 0);
    var content = this.q1s_1;
    if (!(index === this.s1s_1)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + elements.s1s_1 | 0;
      var tmp1_copyInto = this.s1s_1;
      arrayCopy(content, content, tmp0_copyInto, index, tmp1_copyInto);
      tmp$ret$0 = content;
    }
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = elements.q1s_1;
    var tmp3_copyInto = elements.s1s_1;
    arrayCopy(tmp2_copyInto, content, index, 0, tmp3_copyInto);
    tmp$ret$1 = content;
    var tmp0_this = this;
    tmp0_this.s1s_1 = tmp0_this.s1s_1 + elements.s1s_1 | 0;
    return true;
  };
  MutableVector.prototype.l21 = function (elements) {
    return this.k21(this.s1s_1, elements);
  };
  MutableVector.prototype.m21 = function (index, elements) {
    if (elements.h())
      return false;
    this.j21(this.s1s_1 + elements.f() | 0);
    var content = this.q1s_1;
    if (!(index === this.s1s_1)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + elements.f() | 0;
      var tmp1_copyInto = this.s1s_1;
      arrayCopy(content, content, tmp0_copyInto, index, tmp1_copyInto);
      tmp$ret$0 = content;
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index_0 = 0;
    var tmp0_iterator = elements.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      // Inline function 'androidx.compose.runtime.collection.MutableVector.addAll.<anonymous>' call
      var tmp1 = index_0;
      index_0 = tmp1 + 1 | 0;
      var tmp2__anonymous__z9zvc9 = checkIndexOverflow(tmp1);
      content[index + tmp2__anonymous__z9zvc9 | 0] = item;
    }
    var tmp0_this = this;
    tmp0_this.s1s_1 = tmp0_this.s1s_1 + elements.f() | 0;
    return true;
  };
  MutableVector.prototype.k20 = function (elements) {
    return this.m21(this.s1s_1, elements);
  };
  MutableVector.prototype.n21 = function (predicate) {
    // Inline function 'kotlin.contracts.contract' call
    var size = this.s1s_1;
    if (size > 0) {
      var i = 0;
      var tmp = this.q1s_1;
      var content = isArray(tmp) ? tmp : THROW_CCE();
      do {
        if (predicate(content[i]))
          return true;
        var tmp0 = i;
        i = tmp0 + 1 | 0;
      }
       while (i < size);
    }
    return false;
  };
  MutableVector.prototype.o21 = function (predicate) {
    // Inline function 'kotlin.contracts.contract' call
    var size = this.s1s_1;
    if (size > 0) {
      var i = size - 1 | 0;
      var tmp = this.q1s_1;
      var content = isArray(tmp) ? tmp : THROW_CCE();
      do {
        if (predicate(content[i]))
          return true;
        var tmp0 = i;
        i = tmp0 - 1 | 0;
      }
       while (i >= 0);
    }
    return false;
  };
  MutableVector.prototype.p21 = function () {
    var tmp0_elvis_lhs = this.r1s_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new MutableVectorList(this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.collection.MutableVector.asMutableList.<anonymous>' call
      this.r1s_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  MutableVector.prototype.g9 = function () {
    var content = this.q1s_1;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    tmp$ret$0 = this.s1s_1 - 1 | 0;
    var inductionVariable = tmp$ret$0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        content[i] = null;
      }
       while (0 <= inductionVariable);
    this.s1s_1 = 0;
  };
  MutableVector.prototype.g3 = function (element) {
    var inductionVariable = 0;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    tmp$ret$0 = this.s1s_1 - 1 | 0;
    var last = tmp$ret$0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
        var tmp = this.q1s_1[i];
        tmp$ret$1 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
        if (equals(tmp$ret$1, element))
          return true;
      }
       while (!(i === last));
    return false;
  };
  MutableVector.prototype.h3 = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = elements.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'androidx.compose.runtime.collection.MutableVector.containsAll.<anonymous>' call
      if (!this.g3(element))
        return false;
    }
    return true;
  };
  MutableVector.prototype.j21 = function (capacity) {
    var oldContent = this.q1s_1;
    if (oldContent.length < capacity) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.max' call
      var tmp0_max = imul(oldContent.length, 2);
      tmp$ret$0 = Math.max(capacity, tmp0_max);
      var newSize = tmp$ret$0;
      this.q1s_1 = copyOf_0(oldContent, newSize);
    }
  };
  MutableVector.prototype.q21 = function () {
    var tmp;
    if (this.h()) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
      var tmp_0 = this.q1s_1[0];
      tmp$ret$0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp = tmp$ret$0;
    }
    return tmp;
  };
  MutableVector.prototype.r21 = function (predicate) {
    // Inline function 'kotlin.contracts.contract' call
    var size = this.s1s_1;
    if (size > 0) {
      var i = 0;
      var tmp = this.q1s_1;
      var content = isArray(tmp) ? tmp : THROW_CCE();
      do {
        var item = content[i];
        if (predicate(item))
          return item;
        var tmp0 = i;
        i = tmp0 + 1 | 0;
      }
       while (i < size);
    }
    return null;
  };
  MutableVector.prototype.s21 = function (initial, operation) {
    // Inline function 'kotlin.contracts.contract' call
    var acc = initial;
    var size = this.s1s_1;
    if (size > 0) {
      var i = 0;
      var tmp = this.q1s_1;
      var content = isArray(tmp) ? tmp : THROW_CCE();
      do {
        acc = operation(acc, content[i]);
        var tmp0 = i;
        i = tmp0 + 1 | 0;
      }
       while (i < size);
    }
    return acc;
  };
  MutableVector.prototype.t21 = function (block) {
    // Inline function 'kotlin.contracts.contract' call
    var size = this.s1s_1;
    if (size > 0) {
      var i = 0;
      var tmp = this.q1s_1;
      var content = isArray(tmp) ? tmp : THROW_CCE();
      do {
        block(content[i]);
        var tmp0 = i;
        i = tmp0 + 1 | 0;
      }
       while (i < size);
    }
  };
  MutableVector.prototype.u21 = function (block) {
    // Inline function 'kotlin.contracts.contract' call
    var size = this.s1s_1;
    if (size > 0) {
      var i = size - 1 | 0;
      var tmp = this.q1s_1;
      var content = isArray(tmp) ? tmp : THROW_CCE();
      do {
        block(content[i]);
        var tmp0 = i;
        i = tmp0 - 1 | 0;
      }
       while (i >= 0);
    }
  };
  MutableVector.prototype.g = function (index) {
    var tmp = this.q1s_1[index];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  MutableVector.prototype.d21 = function (element) {
    var size = this.s1s_1;
    if (size > 0) {
      var i = 0;
      var tmp = this.q1s_1;
      var content = isArray(tmp) ? tmp : THROW_CCE();
      do {
        if (equals(element, content[i]))
          return i;
        var tmp0 = i;
        i = tmp0 + 1 | 0;
      }
       while (i < size);
    }
    return -1;
  };
  MutableVector.prototype.h = function () {
    return this.s1s_1 === 0;
  };
  MutableVector.prototype.o1k = function () {
    return !(this.s1s_1 === 0);
  };
  MutableVector.prototype.e21 = function (element) {
    var size = this.s1s_1;
    if (size > 0) {
      var i = size - 1 | 0;
      var tmp = this.q1s_1;
      var content = isArray(tmp) ? tmp : THROW_CCE();
      do {
        if (equals(element, content[i]))
          return i;
        var tmp0 = i;
        i = tmp0 - 1 | 0;
      }
       while (i >= 0);
    }
    return -1;
  };
  MutableVector.prototype.v21 = function (element) {
    this.t1p(element);
  };
  MutableVector.prototype.w21 = function (element) {
    this.v20(element);
  };
  MutableVector.prototype.v20 = function (element) {
    var index = this.d21(element);
    if (index >= 0) {
      this.c4(index);
      return true;
    }
    return false;
  };
  MutableVector.prototype.x21 = function (elements) {
    var initialSize = this.s1s_1;
    var inductionVariable = 0;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    tmp$ret$0 = elements.s1s_1 - 1 | 0;
    var last = tmp$ret$0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
        var tmp = elements.q1s_1[i];
        tmp$ret$1 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
        this.v20(tmp$ret$1);
      }
       while (!(i === last));
    return !(initialSize === this.s1s_1);
  };
  MutableVector.prototype.c4 = function (index) {
    var content = this.q1s_1;
    var tmp = content[index];
    var item = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    tmp$ret$0 = this.s1s_1 - 1 | 0;
    if (!(index === tmp$ret$0)) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + 1 | 0;
      var tmp1_copyInto = this.s1s_1;
      arrayCopy(content, content, index, tmp0_copyInto, tmp1_copyInto);
      tmp$ret$1 = content;
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.s1s_1;
    tmp0_this.s1s_1 = tmp1 - 1 | 0;
    content[this.s1s_1] = null;
    return item;
  };
  MutableVector.prototype.u9 = function (start, end) {
    if (end > start) {
      if (end < this.s1s_1) {
        var tmp$ret$0;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = this.q1s_1;
        var tmp1_copyInto = this.q1s_1;
        var tmp2_copyInto = this.s1s_1;
        arrayCopy(tmp0_copyInto, tmp1_copyInto, start, end, tmp2_copyInto);
        tmp$ret$0 = tmp1_copyInto;
      }
      var newSize = this.s1s_1 - (end - start | 0) | 0;
      var inductionVariable = newSize;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
      tmp$ret$1 = this.s1s_1 - 1 | 0;
      var last = tmp$ret$1;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          this.q1s_1[i] = null;
        }
         while (!(i === last));
      this.s1s_1 = newSize;
    }
  };
  MutableVector.prototype.g21 = function (index, element) {
    var content = this.q1s_1;
    var tmp = content[index];
    var old = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    content[index] = element;
    return old;
  };
  MutableVector.prototype.y21 = function (comparator) {
    var tmp = this.q1s_1;
    sortWith_0(isArray(tmp) ? tmp : THROW_CCE(), comparator, 0, this.s1s_1);
  };
  MutableVector.$metadata$ = classMeta('MutableVector', [RandomAccess]);
  function checkIndex(_this__u8e3s4, index) {
    var size = _this__u8e3s4.f();
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' is out of bounds. ' + ('The list has ' + size + ' elements.'));
    }
  }
  function ImmutableCollection() {
  }
  ImmutableCollection.$metadata$ = interfaceMeta('ImmutableCollection', [Collection]);
  function Builder() {
  }
  Builder.$metadata$ = interfaceMeta('Builder', [MutableCollection]);
  function PersistentCollection() {
  }
  PersistentCollection.$metadata$ = interfaceMeta('PersistentCollection', [ImmutableCollection]);
  function Builder_0() {
  }
  Builder_0.$metadata$ = interfaceMeta('Builder', [MutableList, Builder]);
  function PersistentList() {
  }
  PersistentList.$metadata$ = interfaceMeta('PersistentList', [ImmutableList, PersistentCollection]);
  function ImmutableList() {
  }
  ImmutableList.$metadata$ = interfaceMeta('ImmutableList', [List, ImmutableCollection]);
  function Builder_1() {
  }
  Builder_1.$metadata$ = interfaceMeta('Builder', [MutableMap]);
  function PersistentMap() {
  }
  PersistentMap.$metadata$ = interfaceMeta('PersistentMap', [ImmutableMap]);
  function ImmutableMap() {
  }
  ImmutableMap.$metadata$ = interfaceMeta('ImmutableMap', [Map]);
  function PersistentSet() {
  }
  PersistentSet.$metadata$ = interfaceMeta('PersistentSet', [ImmutableSet, PersistentCollection]);
  function ImmutableSet() {
  }
  ImmutableSet.$metadata$ = interfaceMeta('ImmutableSet', [Set, ImmutableCollection]);
  function persistentHashMapOf() {
    return Companion_getInstance_6().b22();
  }
  function persistentSetOf() {
    return Companion_getInstance_8().d22();
  }
  function persistentListOf() {
    return persistentVectorOf();
  }
  function mutate_0(_this__u8e3s4, mutator) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = _this__u8e3s4.g1h();
    // Inline function 'kotlin.contracts.contract' call
    mutator(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.h1h();
  }
  function AbstractListIterator(index, size) {
    this.e22_1 = index;
    this.f22_1 = size;
  }
  AbstractListIterator.prototype.d = function () {
    return this.e22_1 < this.f22_1;
  };
  AbstractListIterator.prototype.s = function () {
    return this.e22_1 > 0;
  };
  AbstractListIterator.prototype.t = function () {
    return this.e22_1;
  };
  AbstractListIterator.prototype.g22 = function () {
    if (!this.d())
      throw NoSuchElementException_init_$Create$();
  };
  AbstractListIterator.prototype.h22 = function () {
    if (!this.s())
      throw NoSuchElementException_init_$Create$();
  };
  AbstractListIterator.$metadata$ = classMeta('AbstractListIterator', [ListIterator]);
  function AbstractPersistentList() {
    AbstractList.call(this);
  }
  AbstractPersistentList.prototype.l = function (elements) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.g1h();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.addAll.<anonymous>' call
    tmp0_apply.l(elements);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.h1h();
    return tmp$ret$1;
  };
  AbstractPersistentList.prototype.b4 = function (element) {
    var index = this.n(element);
    if (!(index === -1)) {
      return this.c4(index);
    }
    return this;
  };
  AbstractPersistentList.prototype.m = function (element) {
    return !(this.n(element) === -1);
  };
  AbstractPersistentList.prototype.t1 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.containsAll.<anonymous>' call
        tmp$ret$1 = this.m(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  AbstractPersistentList.prototype.c = function () {
    return this.i22();
  };
  AbstractPersistentList.prototype.i22 = function () {
    return this.r(0);
  };
  AbstractPersistentList.$metadata$ = classMeta('AbstractPersistentList', [PersistentList], undefined, undefined, undefined, AbstractList.prototype);
  function BufferIterator(buffer, index, size) {
    AbstractListIterator.call(this, index, size);
    this.l22_1 = buffer;
  }
  BufferIterator.prototype.e = function () {
    if (!this.d()) {
      throw NoSuchElementException_init_$Create$();
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.e22_1;
    tmp0_this.e22_1 = tmp1 + 1 | 0;
    return this.l22_1[tmp1];
  };
  BufferIterator.prototype.u = function () {
    if (!this.s()) {
      throw NoSuchElementException_init_$Create$();
    }
    var tmp0_this = this;
    tmp0_this.e22_1 = tmp0_this.e22_1 - 1 | 0;
    return this.l22_1[tmp0_this.e22_1];
  };
  BufferIterator.$metadata$ = classMeta('BufferIterator', undefined, undefined, undefined, undefined, AbstractListIterator.prototype);
  function rootSize($this) {
    return rootSize_1($this.o22_1);
  }
  function pushFilledTail($this, root, filledTail, newTail) {
    if ($this.o22_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.p22_1) {
      var newRoot = presizedBufferWith(root);
      var newRootShift = $this.p22_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      newRoot = pushTail($this, newRoot, newRootShift, filledTail);
      return new PersistentVector(newRoot, newTail, $this.o22_1 + 1 | 0, newRootShift);
    }
    var newRoot_0 = pushTail($this, root, $this.p22_1, filledTail);
    return new PersistentVector(newRoot_0, newTail, $this.o22_1 + 1 | 0, $this.p22_1);
  }
  function pushTail($this, root, shift, tail) {
    var bufferIndex = indexSegment($this.o22_1 - 1 | 0, shift);
    var tmp0_safe_receiver = root;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : copyOf_0(tmp0_safe_receiver, get_MAX_BUFFER_SIZE());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = get_MAX_BUFFER_SIZE();
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var newRootNode = tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      newRootNode[bufferIndex] = tail;
    } else {
      var tmp_0 = newRootNode[bufferIndex];
      newRootNode[bufferIndex] = pushTail($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, tail);
    }
    return newRootNode;
  }
  function insertIntoTail($this, root, tailIndex, element) {
    var tailSize = $this.o22_1 - rootSize($this) | 0;
    var newTail = copyOf_0($this.n22_1, get_MAX_BUFFER_SIZE());
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.n22_1;
      var tmp1_copyInto = tailIndex + 1 | 0;
      arrayCopy(tmp0_copyInto, newTail, tmp1_copyInto, tailIndex, tailSize);
      tmp$ret$0 = newTail;
      newTail[tailIndex] = element;
      return new PersistentVector(root, newTail, $this.o22_1 + 1 | 0, $this.p22_1);
    }
    var lastElement = $this.n22_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = $this.n22_1;
    var tmp3_copyInto = tailIndex + 1 | 0;
    var tmp4_copyInto = tailSize - 1 | 0;
    arrayCopy(tmp2_copyInto, newTail, tmp3_copyInto, tailIndex, tmp4_copyInto);
    tmp$ret$1 = newTail;
    newTail[tailIndex] = element;
    return pushFilledTail($this, root, newTail, presizedBufferWith(lastElement));
  }
  function insertIntoRoot($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        var tmp$ret$0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp0_arrayOfNulls = get_MAX_BUFFER_SIZE();
        tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
        tmp = tmp$ret$0;
      } else {
        tmp = copyOf_0(root, get_MAX_BUFFER_SIZE());
      }
      var newRoot = tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(root, newRoot, tmp1_copyInto, bufferIndex, tmp2_copyInto);
      tmp$ret$1 = newRoot;
      elementCarry.q22_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      newRoot[bufferIndex] = element;
      return newRoot;
    }
    var newRoot_0 = copyOf_0(root, get_MAX_BUFFER_SIZE());
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var tmp_0 = root[bufferIndex];
    newRoot_0[bufferIndex] = insertIntoRoot($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    var last = get_MAX_BUFFER_SIZE();
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (newRoot_0[i] == null)
          break $l$loop;
        var tmp_1 = root[i];
        newRoot_0[i] = insertIntoRoot($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, 0, elementCarry.q22_1, elementCarry);
      }
       while (inductionVariable < last);
    return newRoot_0;
  }
  function removeFromTailAt($this, root, rootSize, shift, index) {
    var tailSize = $this.o22_1 - rootSize | 0;
    assert(index < tailSize);
    if (tailSize === 1) {
      return pullLastBufferFromRoot($this, root, rootSize, shift);
    }
    var newTail = copyOf_0($this.n22_1, get_MAX_BUFFER_SIZE());
    if (index < (tailSize - 1 | 0)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.n22_1;
      var tmp1_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, newTail, index, tmp1_copyInto, tailSize);
      tmp$ret$0 = newTail;
    }
    newTail[tailSize - 1 | 0] = null;
    return new PersistentVector(root, newTail, (rootSize + tailSize | 0) - 1 | 0, shift);
  }
  function pullLastBufferFromRoot($this, root, rootSize, shift) {
    if (shift === 0) {
      var buffer = root.length === get_MUTABLE_BUFFER_SIZE() ? copyOf_0(root, get_MAX_BUFFER_SIZE()) : root;
      return new SmallPersistentVector(buffer);
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer($this, root, shift, rootSize - 1 | 0, tailCarry));
    var tmp = tailCarry.q22_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    if (newRoot[1] == null) {
      var tmp_0 = newRoot[0];
      var lowerLevelRoot = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE();
      return new PersistentVector(lowerLevelRoot, newTail, rootSize, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
    }
    return new PersistentVector(newRoot, newTail, rootSize, shift);
  }
  function pullLastBuffer($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.q22_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var newRoot = copyOf_0(root, get_MAX_BUFFER_SIZE());
    newRoot[bufferIndex] = newBufferAtIndex;
    return newRoot;
  }
  function removeFromRootAt($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        var tmp$ret$0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp0_arrayOfNulls = get_MAX_BUFFER_SIZE();
        tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
        tmp = tmp$ret$0;
      } else {
        tmp = copyOf_0(root, get_MAX_BUFFER_SIZE());
      }
      var newRoot = tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE();
      arrayCopy(root, newRoot, bufferIndex, tmp1_copyInto, tmp2_copyInto);
      tmp$ret$1 = newRoot;
      newRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.q22_1;
      tailCarry.q22_1 = root[bufferIndex];
      return newRoot;
    }
    var bufferLastIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize($this) - 1 | 0, shift);
    }
    var newRoot_0 = copyOf_0(root, get_MAX_BUFFER_SIZE());
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_0 = newRoot_0[i];
        newRoot_0[i] = removeFromRootAt($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_1 = newRoot_0[bufferIndex];
    newRoot_0[bufferIndex] = removeFromRootAt($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return newRoot_0;
  }
  function bufferFor($this, index) {
    if (rootSize($this) <= index) {
      return $this.n22_1;
    }
    var buffer = $this.m22_1;
    var shift = $this.p22_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function setInRoot($this, root, shift, index, e) {
    var bufferIndex = indexSegment(index, shift);
    var newRoot = copyOf_0(root, get_MAX_BUFFER_SIZE());
    if (shift === 0) {
      newRoot[bufferIndex] = e;
    } else {
      var tmp = newRoot[bufferIndex];
      newRoot[bufferIndex] = setInRoot($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e);
    }
    return newRoot;
  }
  function PersistentVector(root, tail, size, rootShift) {
    AbstractPersistentList.call(this);
    this.m22_1 = root;
    this.n22_1 = tail;
    this.o22_1 = size;
    this.p22_1 = rootShift;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.o22_1 > get_MAX_BUFFER_SIZE();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVector.<anonymous>' call
      tmp$ret$0 = 'Trie-based persistent vector should have at least ' + (get_MAX_BUFFER_SIZE() + 1 | 0) + ' elements, got ' + this.o22_1;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    assert((this.o22_1 - rootSize_1(this.o22_1) | 0) <= coerceAtMost(this.n22_1.length, get_MAX_BUFFER_SIZE()));
  }
  PersistentVector.prototype.f = function () {
    return this.o22_1;
  };
  PersistentVector.prototype.a = function (element) {
    var tailSize = this.o22_1 - rootSize(this) | 0;
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var newTail = copyOf_0(this.n22_1, get_MAX_BUFFER_SIZE());
      newTail[tailSize] = element;
      return new PersistentVector(this.m22_1, newTail, this.o22_1 + 1 | 0, this.p22_1);
    }
    var newTail_0 = presizedBufferWith(element);
    return pushFilledTail(this, this.m22_1, this.n22_1, newTail_0);
  };
  PersistentVector.prototype.z21 = function (index, element) {
    ListImplementation_getInstance().z1(index, this.o22_1);
    if (index === this.o22_1) {
      return this.a(element);
    }
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return insertIntoTail(this, this.m22_1, index - rootSize_0 | 0, element);
    }
    var elementCarry = new ObjectRef(null);
    var newRoot = insertIntoRoot(this, this.m22_1, this.p22_1, index, element, elementCarry);
    return insertIntoTail(this, newRoot, 0, elementCarry.q22_1);
  };
  PersistentVector.prototype.c4 = function (index) {
    ListImplementation_getInstance().a2(index, this.o22_1);
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return removeFromTailAt(this, this.m22_1, rootSize_0, this.p22_1, index - rootSize_0 | 0);
    }
    var newRoot = removeFromRootAt(this, this.m22_1, this.p22_1, index, new ObjectRef(this.n22_1[0]));
    return removeFromTailAt(this, newRoot, rootSize_0, this.p22_1, 0);
  };
  PersistentVector.prototype.g1h = function () {
    return new PersistentVectorBuilder(this, this.m22_1, this.n22_1, this.p22_1);
  };
  PersistentVector.prototype.r = function (index) {
    ListImplementation_getInstance().z1(index, this.o22_1);
    var tmp = this.n22_1;
    return new PersistentVectorIterator(this.m22_1, isArray(tmp) ? tmp : THROW_CCE(), index, this.o22_1, (this.p22_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0);
  };
  PersistentVector.prototype.g = function (index) {
    ListImplementation_getInstance().a2(index, this.o22_1);
    var buffer = bufferFor(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  PersistentVector.prototype.d9 = function (index, element) {
    ListImplementation_getInstance().a2(index, this.o22_1);
    if (rootSize(this) <= index) {
      var newTail = copyOf_0(this.n22_1, get_MAX_BUFFER_SIZE());
      newTail[index & get_MAX_BUFFER_SIZE_MINUS_ONE()] = element;
      return new PersistentVector(this.m22_1, newTail, this.o22_1, this.p22_1);
    }
    var newRoot = setInRoot(this, this.m22_1, this.p22_1, index, element);
    return new PersistentVector(newRoot, this.n22_1, this.o22_1, this.p22_1);
  };
  PersistentVector.$metadata$ = classMeta('PersistentVector', [PersistentList], undefined, undefined, undefined, AbstractPersistentList.prototype);
  function rootSize_0($this) {
    if ($this.z22_1 <= get_MAX_BUFFER_SIZE()) {
      return 0;
    }
    return rootSize_1($this.z22_1);
  }
  function tailSize($this, size) {
    if (size <= get_MAX_BUFFER_SIZE()) {
      return size;
    }
    return size - rootSize_1(size) | 0;
  }
  function tailSize_0($this) {
    return tailSize($this, $this.z22_1);
  }
  function isMutable($this, buffer) {
    return buffer.length === get_MUTABLE_BUFFER_SIZE() ? buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] === $this.w22_1 : false;
  }
  function makeMutable($this, buffer) {
    if (buffer == null) {
      return mutableBuffer($this);
    }
    if (isMutable($this, buffer)) {
      return buffer;
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = mutableBuffer($this);
    var tmp1_copyInto = coerceAtMost(buffer.length, get_MAX_BUFFER_SIZE());
    arrayCopy(buffer, tmp0_copyInto, 0, 0, tmp1_copyInto);
    tmp$ret$0 = tmp0_copyInto;
    return tmp$ret$0;
  }
  function mutableBufferWith($this, element) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = get_MUTABLE_BUFFER_SIZE();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var buffer = tmp$ret$0;
    buffer[0] = element;
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.w22_1;
    return buffer;
  }
  function mutableBuffer($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = get_MUTABLE_BUFFER_SIZE();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var buffer = tmp$ret$0;
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.w22_1;
    return buffer;
  }
  function pushFilledTail_0($this, root, filledTail, newTail) {
    var tmp;
    if ($this.z22_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.v22_1) {
      $this.x22_1 = pushTail_0($this, mutableBufferWith($this, root), filledTail, $this.v22_1 + get_LOG_MAX_BUFFER_SIZE() | 0);
      $this.y22_1 = newTail;
      var tmp0_this = $this;
      tmp0_this.v22_1 = tmp0_this.v22_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      var tmp1_this = $this;
      tmp1_this.z22_1 = tmp1_this.z22_1 + 1 | 0;
      tmp = Unit_getInstance();
    } else if (root == null) {
      $this.x22_1 = filledTail;
      $this.y22_1 = newTail;
      var tmp2_this = $this;
      tmp2_this.z22_1 = tmp2_this.z22_1 + 1 | 0;
      tmp = Unit_getInstance();
    } else {
      $this.x22_1 = pushTail_0($this, root, filledTail, $this.v22_1);
      $this.y22_1 = newTail;
      var tmp3_this = $this;
      tmp3_this.z22_1 = tmp3_this.z22_1 + 1 | 0;
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function pushTail_0($this, root, tail, shift) {
    var index = indexSegment($this.z22_1 - 1 | 0, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      mutableRoot[index] = tail;
    } else {
      var tmp = mutableRoot[index];
      mutableRoot[index] = pushTail_0($this, (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE(), tail, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
    }
    return mutableRoot;
  }
  function copyToBuffer($this, buffer, bufferIndex, sourceIterator) {
    var index = bufferIndex;
    while (index < get_MAX_BUFFER_SIZE() ? sourceIterator.d() : false) {
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      buffer[tmp0] = sourceIterator.e();
    }
    return buffer;
  }
  function pushBuffersIncreasingHeightIfNeeded($this, root, rootSize, buffers) {
    var buffersIterator = arrayIterator(buffers);
    var mutableRoot = rootSize >> get_LOG_MAX_BUFFER_SIZE() < 1 << $this.v22_1 ? pushBuffers($this, root, rootSize, $this.v22_1, buffersIterator) : makeMutable($this, root);
    while (buffersIterator.d()) {
      var tmp0_this = $this;
      tmp0_this.v22_1 = tmp0_this.v22_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      mutableRoot = mutableBufferWith($this, mutableRoot);
      pushBuffers($this, mutableRoot, 1 << $this.v22_1, $this.v22_1, buffersIterator);
    }
    return mutableRoot;
  }
  function pushBuffers($this, root, rootSize, shift, buffersIterator) {
    // Inline function 'kotlin.check' call
    var tmp0_check = buffersIterator.d();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp1_check = shift >= 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$1 = 'Check failed.';
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (shift === 0) {
      return buffersIterator.e();
    }
    var mutableRoot = makeMutable($this, root);
    var index = indexSegment(rootSize, shift);
    var tmp = index;
    var tmp_0 = mutableRoot[index];
    mutableRoot[tmp] = pushBuffers($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), rootSize, shift - get_LOG_MAX_BUFFER_SIZE() | 0, buffersIterator);
    $l$loop: while (true) {
      var tmp_1;
      index = index + 1 | 0;
      if (index < get_MAX_BUFFER_SIZE()) {
        tmp_1 = buffersIterator.d();
      } else {
        tmp_1 = false;
      }
      if (!tmp_1) {
        break $l$loop;
      }
      var tmp_2 = index;
      var tmp_3 = mutableRoot[index];
      mutableRoot[tmp_2] = pushBuffers($this, (tmp_3 == null ? true : isArray(tmp_3)) ? tmp_3 : THROW_CCE(), 0, shift - get_LOG_MAX_BUFFER_SIZE() | 0, buffersIterator);
    }
    return mutableRoot;
  }
  function insertIntoTail_0($this, root, index, element) {
    var tailSize = tailSize_0($this);
    var mutableTail = makeMutable($this, $this.y22_1);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.y22_1;
      var tmp1_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, mutableTail, tmp1_copyInto, index, tailSize);
      tmp$ret$0 = mutableTail;
      mutableTail[index] = element;
      $this.x22_1 = root;
      $this.y22_1 = mutableTail;
      var tmp0_this = $this;
      tmp0_this.z22_1 = tmp0_this.z22_1 + 1 | 0;
    } else {
      var lastElement = $this.y22_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = $this.y22_1;
      var tmp3_copyInto = index + 1 | 0;
      var tmp4_copyInto = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(tmp2_copyInto, mutableTail, tmp3_copyInto, index, tmp4_copyInto);
      tmp$ret$1 = mutableTail;
      mutableTail[index] = element;
      pushFilledTail_0($this, root, mutableTail, mutableBufferWith($this, lastElement));
    }
  }
  function insertIntoRoot_0($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      elementCarry.q22_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = makeMutable($this, root);
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(root, tmp0_copyInto, tmp1_copyInto, bufferIndex, tmp2_copyInto);
      tmp$ret$0 = tmp0_copyInto;
      var mutableRoot = tmp$ret$0;
      mutableRoot[bufferIndex] = element;
      return mutableRoot;
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var tmp = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = insertIntoRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    var last = get_MAX_BUFFER_SIZE();
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (mutableRoot_0[i] == null)
          break $l$loop;
        var tmp_0 = mutableRoot_0[i];
        mutableRoot_0[i] = insertIntoRoot_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, elementCarry.q22_1, elementCarry);
      }
       while (inductionVariable < last);
    return mutableRoot_0;
  }
  function bufferFor_0($this, index) {
    if (rootSize_0($this) <= index) {
      return $this.y22_1;
    }
    var buffer = ensureNotNull($this.x22_1);
    var shift = $this.v22_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function removeFromTailAt_0($this, root, rootSize, shift, index) {
    var tailSize = $this.z22_1 - rootSize | 0;
    assert(index < tailSize);
    var removedElement;
    if (tailSize === 1) {
      removedElement = $this.y22_1[0];
      pullLastBufferFromRoot_0($this, root, rootSize, shift);
    } else {
      removedElement = $this.y22_1[index];
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.y22_1;
      var tmp1_copyInto = makeMutable($this, $this.y22_1);
      var tmp2_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, tmp1_copyInto, index, tmp2_copyInto, tailSize);
      tmp$ret$0 = tmp1_copyInto;
      var mutableTail = tmp$ret$0;
      mutableTail[tailSize - 1 | 0] = null;
      $this.x22_1 = root;
      $this.y22_1 = mutableTail;
      $this.z22_1 = (rootSize + tailSize | 0) - 1 | 0;
      $this.v22_1 = shift;
    }
    return removedElement;
  }
  function removeFromRootAt_0($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var removedElement = root[bufferIndex];
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = makeMutable($this, root);
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE();
      arrayCopy(root, tmp0_copyInto, bufferIndex, tmp1_copyInto, tmp2_copyInto);
      tmp$ret$0 = tmp0_copyInto;
      var mutableRoot = tmp$ret$0;
      mutableRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.q22_1;
      tailCarry.q22_1 = removedElement;
      return mutableRoot;
    }
    var bufferLastIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize_0($this) - 1 | 0, shift);
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = mutableRoot_0[i];
        mutableRoot_0[i] = removeFromRootAt_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_0 = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = removeFromRootAt_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return mutableRoot_0;
  }
  function pullLastBufferFromRoot_0($this, root, rootSize, shift) {
    if (shift === 0) {
      $this.x22_1 = null;
      var tmp = $this;
      var tmp0_elvis_lhs = root;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.emptyArray' call
        tmp$ret$0 = [];
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp.y22_1 = tmp_0;
      $this.z22_1 = rootSize;
      $this.v22_1 = shift;
      return Unit_getInstance();
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer_0($this, ensureNotNull(root), shift, rootSize, tailCarry));
    var tmp_1 = $this;
    var tmp_2 = tailCarry.q22_1;
    tmp_1.y22_1 = (!(tmp_2 == null) ? isArray(tmp_2) : false) ? tmp_2 : THROW_CCE();
    $this.z22_1 = rootSize;
    if (newRoot[1] == null) {
      var tmp_3 = $this;
      var tmp_4 = newRoot[0];
      tmp_3.x22_1 = (tmp_4 == null ? true : isArray(tmp_4)) ? tmp_4 : THROW_CCE();
      $this.v22_1 = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    } else {
      $this.x22_1 = newRoot;
      $this.v22_1 = shift;
    }
  }
  function pullLastBuffer_0($this, root, shift, rootSize, tailCarry) {
    var bufferIndex = indexSegment(rootSize - 1 | 0, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.q22_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, rootSize, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var mutableRoot = makeMutable($this, root);
    mutableRoot[bufferIndex] = newBufferAtIndex;
    return mutableRoot;
  }
  function setInRoot_0($this, root, shift, index, e, oldElementCarry) {
    var bufferIndex = indexSegment(index, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 0) {
      if (!(mutableRoot === root)) {
        var tmp0_this = $this;
        var tmp1 = tmp0_this.k9_1;
        tmp0_this.k9_1 = tmp1 + 1 | 0;
      }
      oldElementCarry.q22_1 = mutableRoot[bufferIndex];
      mutableRoot[bufferIndex] = e;
      return mutableRoot;
    }
    var tmp = mutableRoot[bufferIndex];
    mutableRoot[bufferIndex] = setInRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e, oldElementCarry);
    return mutableRoot;
  }
  function PersistentVectorBuilder(vector, vectorRoot, vectorTail, rootShift) {
    AbstractMutableList.call(this);
    this.s22_1 = vector;
    this.t22_1 = vectorRoot;
    this.u22_1 = vectorTail;
    this.v22_1 = rootShift;
    this.w22_1 = new MutabilityOwnership();
    this.x22_1 = this.t22_1;
    this.y22_1 = this.u22_1;
    this.z22_1 = this.s22_1.f();
  }
  PersistentVectorBuilder.prototype.f = function () {
    return this.z22_1;
  };
  PersistentVectorBuilder.prototype.a23 = function () {
    return this.k9_1;
  };
  PersistentVectorBuilder.prototype.h1h = function () {
    var tmp = this;
    var tmp_0;
    if (this.x22_1 === this.t22_1 ? this.y22_1 === this.u22_1 : false) {
      tmp_0 = this.s22_1;
    } else {
      this.w22_1 = new MutabilityOwnership();
      this.t22_1 = this.x22_1;
      this.u22_1 = this.y22_1;
      var tmp_1;
      if (this.x22_1 == null) {
        var tmp_2;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.isEmpty' call
        var tmp0_isEmpty = this.y22_1;
        tmp$ret$0 = tmp0_isEmpty.length === 0;
        if (tmp$ret$0) {
          tmp_2 = persistentVectorOf();
        } else {
          tmp_2 = new SmallPersistentVector(copyOf_0(this.y22_1, this.z22_1));
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = new PersistentVector(ensureNotNull(this.x22_1), this.y22_1, this.z22_1, this.v22_1);
      }
      tmp_0 = tmp_1;
    }
    tmp.s22_1 = tmp_0;
    return this.s22_1;
  };
  PersistentVectorBuilder.prototype.a = function (element) {
    var tmp0_this = this;
    tmp0_this.k9_1 = tmp0_this.k9_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var mutableTail = makeMutable(this, this.y22_1);
      mutableTail[tailSize] = element;
      this.y22_1 = mutableTail;
      var tmp1_this = this;
      tmp1_this.z22_1 = tmp1_this.z22_1 + 1 | 0;
    } else {
      var newTail = mutableBufferWith(this, element);
      pushFilledTail_0(this, this.x22_1, this.y22_1, newTail);
    }
    return true;
  };
  PersistentVectorBuilder.prototype.l = function (elements) {
    if (elements.h()) {
      return false;
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.k9_1;
    tmp0_this.k9_1 = tmp1 + 1 | 0;
    var tailSize = tailSize_0(this);
    var elementsIterator = elements.c();
    if ((get_MAX_BUFFER_SIZE() - tailSize | 0) >= elements.f()) {
      this.y22_1 = copyToBuffer(this, makeMutable(this, this.y22_1), tailSize, elementsIterator);
      var tmp2_this = this;
      tmp2_this.z22_1 = tmp2_this.z22_1 + elements.f() | 0;
    } else {
      var buffersSize = ((elements.f() + tailSize | 0) - 1 | 0) / get_MAX_BUFFER_SIZE() | 0;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(buffersSize), null);
      var buffers = tmp$ret$0;
      buffers[0] = copyToBuffer(this, makeMutable(this, this.y22_1), tailSize, elementsIterator);
      var inductionVariable = 1;
      if (inductionVariable < buffersSize)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buffers[index] = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
        }
         while (inductionVariable < buffersSize);
      var tmp = this;
      var tmp_0 = this.x22_1;
      var tmp_1 = rootSize_0(this);
      tmp.x22_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, tmp_1, isArray(buffers) ? buffers : THROW_CCE());
      this.y22_1 = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
      var tmp4_this = this;
      tmp4_this.z22_1 = tmp4_this.z22_1 + elements.f() | 0;
    }
    return true;
  };
  PersistentVectorBuilder.prototype.t9 = function (index, element) {
    ListImplementation_getInstance().z1(index, this.z22_1);
    if (index === this.z22_1) {
      this.a(element);
      return Unit_getInstance();
    }
    var tmp0_this = this;
    tmp0_this.k9_1 = tmp0_this.k9_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      insertIntoTail_0(this, this.x22_1, index - rootSize | 0, element);
      return Unit_getInstance();
    }
    var elementCarry = new ObjectRef(null);
    var newRest = insertIntoRoot_0(this, ensureNotNull(this.x22_1), this.v22_1, index, element, elementCarry);
    var tmp = elementCarry.q22_1;
    insertIntoTail_0(this, newRest, 0, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE());
  };
  PersistentVectorBuilder.prototype.g = function (index) {
    ListImplementation_getInstance().a2(index, this.z22_1);
    var buffer = bufferFor_0(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  PersistentVectorBuilder.prototype.c4 = function (index) {
    ListImplementation_getInstance().a2(index, this.z22_1);
    var tmp0_this = this;
    tmp0_this.k9_1 = tmp0_this.k9_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      var tmp = removeFromTailAt_0(this, this.x22_1, rootSize, this.v22_1, index - rootSize | 0);
      return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    }
    var elementCarry = new ObjectRef(this.y22_1[0]);
    var newRoot = removeFromRootAt_0(this, ensureNotNull(this.x22_1), this.v22_1, index, elementCarry);
    removeFromTailAt_0(this, newRoot, rootSize, this.v22_1, 0);
    var tmp_0 = elementCarry.q22_1;
    return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
  };
  PersistentVectorBuilder.prototype.d9 = function (index, element) {
    ListImplementation_getInstance().a2(index, this.z22_1);
    if (rootSize_0(this) <= index) {
      var mutableTail = makeMutable(this, this.y22_1);
      if (!(mutableTail === this.y22_1)) {
        var tmp0_this = this;
        var tmp1 = tmp0_this.k9_1;
        tmp0_this.k9_1 = tmp1 + 1 | 0;
      }
      var tailIndex = index & get_MAX_BUFFER_SIZE_MINUS_ONE();
      var oldElement = mutableTail[tailIndex];
      mutableTail[tailIndex] = element;
      this.y22_1 = mutableTail;
      return (oldElement == null ? true : isObject(oldElement)) ? oldElement : THROW_CCE();
    }
    var oldElementCarry = new ObjectRef(null);
    this.x22_1 = setInRoot_0(this, ensureNotNull(this.x22_1), this.v22_1, index, element, oldElementCarry);
    var tmp = oldElementCarry.q22_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  PersistentVectorBuilder.prototype.c = function () {
    return this.i22();
  };
  PersistentVectorBuilder.prototype.i22 = function () {
    return this.r(0);
  };
  PersistentVectorBuilder.prototype.r = function (index) {
    ListImplementation_getInstance().z1(index, this.z22_1);
    return new PersistentVectorMutableIterator(this, index);
  };
  PersistentVectorBuilder.$metadata$ = classMeta('PersistentVectorBuilder', [Builder_0], undefined, undefined, undefined, AbstractMutableList.prototype);
  function PersistentVectorIterator(root, tail, index, size, trieHeight) {
    AbstractListIterator.call(this, index, size);
    this.d23_1 = tail;
    var trieSize = rootSize_1(size);
    var trieIndex = coerceAtMost(index, trieSize);
    this.e23_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
  }
  PersistentVectorIterator.prototype.e = function () {
    this.g22();
    if (this.e23_1.d()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.e22_1;
      tmp0_this.e22_1 = tmp1 + 1 | 0;
      return this.e23_1.e();
    }
    var tmp2_this = this;
    var tmp3 = tmp2_this.e22_1;
    tmp2_this.e22_1 = tmp3 + 1 | 0;
    return this.d23_1[tmp3 - this.e23_1.f22_1 | 0];
  };
  PersistentVectorIterator.prototype.u = function () {
    this.h22();
    if (this.e22_1 > this.e23_1.f22_1) {
      var tmp0_this = this;
      tmp0_this.e22_1 = tmp0_this.e22_1 - 1 | 0;
      return this.d23_1[tmp0_this.e22_1 - this.e23_1.f22_1 | 0];
    }
    var tmp1_this = this;
    var tmp2 = tmp1_this.e22_1;
    tmp1_this.e22_1 = tmp2 - 1 | 0;
    return this.e23_1.u();
  };
  PersistentVectorIterator.$metadata$ = classMeta('PersistentVectorIterator', undefined, undefined, undefined, undefined, AbstractListIterator.prototype);
  function reset($this) {
    $this.f22_1 = $this.m23_1.z22_1;
    $this.n23_1 = $this.m23_1.a23();
    $this.p23_1 = -1;
    setupTrieIterator($this);
  }
  function setupTrieIterator($this) {
    var root = $this.m23_1.x22_1;
    if (root == null) {
      $this.o23_1 = null;
      return Unit_getInstance();
    }
    var trieSize = rootSize_1($this.m23_1.z22_1);
    var trieIndex = coerceAtMost($this.e22_1, trieSize);
    var trieHeight = ($this.m23_1.v22_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0;
    if ($this.o23_1 == null) {
      $this.o23_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
    } else {
      ensureNotNull($this.o23_1).q23(root, trieIndex, trieSize, trieHeight);
    }
  }
  function checkForComodification($this) {
    if (!($this.n23_1 === $this.m23_1.a23()))
      throw ConcurrentModificationException_init_$Create$();
  }
  function checkHasIterated($this) {
    if ($this.p23_1 === -1)
      throw IllegalStateException_init_$Create$_0();
  }
  function PersistentVectorMutableIterator(builder, index) {
    AbstractListIterator.call(this, index, builder.z22_1);
    this.m23_1 = builder;
    this.n23_1 = this.m23_1.a23();
    this.o23_1 = null;
    this.p23_1 = -1;
    setupTrieIterator(this);
  }
  PersistentVectorMutableIterator.prototype.u = function () {
    checkForComodification(this);
    this.h22();
    this.p23_1 = this.e22_1 - 1 | 0;
    var tmp1_elvis_lhs = this.o23_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0 = this.m23_1.y22_1;
      var tmp0_this = this;
      tmp0_this.e22_1 = tmp0_this.e22_1 - 1 | 0;
      var tmp_1 = tmp_0[tmp0_this.e22_1];
      return (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var trieIterator = tmp;
    if (this.e22_1 > trieIterator.f22_1) {
      var tmp_2 = this.m23_1.y22_1;
      var tmp2_this = this;
      tmp2_this.e22_1 = tmp2_this.e22_1 - 1 | 0;
      var tmp_3 = tmp_2[tmp2_this.e22_1 - trieIterator.f22_1 | 0];
      return (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
    }
    var tmp3_this = this;
    var tmp4 = tmp3_this.e22_1;
    tmp3_this.e22_1 = tmp4 - 1 | 0;
    return trieIterator.u();
  };
  PersistentVectorMutableIterator.prototype.e = function () {
    checkForComodification(this);
    this.g22();
    this.p23_1 = this.e22_1;
    var tmp2_elvis_lhs = this.o23_1;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp_0 = this.m23_1.y22_1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.e22_1;
      tmp0_this.e22_1 = tmp1 + 1 | 0;
      var tmp_1 = tmp_0[tmp1];
      return (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var trieIterator = tmp;
    if (trieIterator.d()) {
      var tmp3_this = this;
      var tmp4 = tmp3_this.e22_1;
      tmp3_this.e22_1 = tmp4 + 1 | 0;
      return trieIterator.e();
    }
    var tmp_2 = this.m23_1.y22_1;
    var tmp5_this = this;
    var tmp6 = tmp5_this.e22_1;
    tmp5_this.e22_1 = tmp6 + 1 | 0;
    var tmp_3 = tmp_2[tmp6 - trieIterator.f22_1 | 0];
    return (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
  };
  PersistentVectorMutableIterator.prototype.d4 = function () {
    checkForComodification(this);
    checkHasIterated(this);
    this.m23_1.c4(this.p23_1);
    if (this.p23_1 < this.e22_1)
      this.e22_1 = this.p23_1;
    reset(this);
  };
  PersistentVectorMutableIterator.$metadata$ = classMeta('PersistentVectorMutableIterator', [MutableListIterator], undefined, undefined, undefined, AbstractListIterator.prototype);
  function bufferOfSize($this, size) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(size), null);
    return tmp$ret$0;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    tmp.r23_1 = new SmallPersistentVector(tmp$ret$0);
  }
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_5() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function SmallPersistentVector(buffer) {
    Companion_getInstance_5();
    AbstractPersistentList.call(this);
    this.s23_1 = buffer;
    assert(this.s23_1.length <= get_MAX_BUFFER_SIZE());
  }
  SmallPersistentVector.prototype.f = function () {
    return this.s23_1.length;
  };
  SmallPersistentVector.prototype.a = function (element) {
    if (this.f() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.s23_1, this.f() + 1 | 0);
      newBuffer[this.f()] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tail = presizedBufferWith(element);
    return new PersistentVector(this.s23_1, tail, this.f() + 1 | 0, 0);
  };
  SmallPersistentVector.prototype.l = function (elements) {
    if ((this.f() + elements.f() | 0) <= get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.s23_1, this.f() + elements.f() | 0);
      var index = this.f();
      var tmp0_iterator = elements.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        newBuffer[tmp1] = element;
      }
      return new SmallPersistentVector(newBuffer);
    }
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.g1h();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector.addAll.<anonymous>' call
    tmp0_apply.l(elements);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.h1h();
    return tmp$ret$1;
  };
  SmallPersistentVector.prototype.z21 = function (index, element) {
    ListImplementation_getInstance().z1(index, this.f());
    if (index === this.f()) {
      return this.a(element);
    }
    if (this.f() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = bufferOfSize(this, this.f() + 1 | 0);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = this.s23_1;
      arrayCopy(tmp0_copyInto, newBuffer, 0, 0, index);
      tmp$ret$0 = newBuffer;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = this.s23_1;
      var tmp2_copyInto = index + 1 | 0;
      var tmp3_copyInto = this.f();
      arrayCopy(tmp1_copyInto, newBuffer, tmp2_copyInto, index, tmp3_copyInto);
      tmp$ret$1 = newBuffer;
      newBuffer[index] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tmp$ret$3;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp4_copyOf = this.s23_1;
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp4_copyOf;
    tmp$ret$3 = tmp$ret$2.slice();
    var root = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp5_copyInto = this.s23_1;
    var tmp6_copyInto = index + 1 | 0;
    var tmp7_copyInto = this.f() - 1 | 0;
    arrayCopy(tmp5_copyInto, root, tmp6_copyInto, index, tmp7_copyInto);
    tmp$ret$4 = root;
    root[index] = element;
    var tail = presizedBufferWith(this.s23_1[get_MAX_BUFFER_SIZE_MINUS_ONE()]);
    return new PersistentVector(root, tail, this.f() + 1 | 0, 0);
  };
  SmallPersistentVector.prototype.c4 = function (index) {
    ListImplementation_getInstance().a2(index, this.f());
    if (this.f() === 1) {
      return Companion_getInstance_5().r23_1;
    }
    var newBuffer = copyOf_0(this.s23_1, this.f() - 1 | 0);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = this.s23_1;
    var tmp1_copyInto = index + 1 | 0;
    var tmp2_copyInto = this.f();
    arrayCopy(tmp0_copyInto, newBuffer, index, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$0 = newBuffer;
    return new SmallPersistentVector(newBuffer);
  };
  SmallPersistentVector.prototype.g1h = function () {
    return new PersistentVectorBuilder(this, null, this.s23_1, 0);
  };
  SmallPersistentVector.prototype.n = function (element) {
    return indexOf(this.s23_1, element);
  };
  SmallPersistentVector.prototype.e2 = function (element) {
    return lastIndexOf(this.s23_1, element);
  };
  SmallPersistentVector.prototype.r = function (index) {
    ListImplementation_getInstance().z1(index, this.f());
    var tmp = this.s23_1;
    return new BufferIterator(isArray(tmp) ? tmp : THROW_CCE(), index, this.f());
  };
  SmallPersistentVector.prototype.g = function (index) {
    ListImplementation_getInstance().a2(index, this.f());
    var tmp = this.s23_1[index];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  SmallPersistentVector.prototype.d9 = function (index, element) {
    ListImplementation_getInstance().a2(index, this.f());
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.s23_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    var newBuffer = tmp$ret$1;
    newBuffer[index] = element;
    return new SmallPersistentVector(newBuffer);
  };
  SmallPersistentVector.$metadata$ = classMeta('SmallPersistentVector', [ImmutableList], undefined, undefined, undefined, AbstractPersistentList.prototype);
  function fillPath($this, index, startLevel) {
    var shift = imul($this.h23_1 - startLevel | 0, get_LOG_MAX_BUFFER_SIZE());
    var i = startLevel;
    while (i < $this.h23_1) {
      var tmp = $this.i23_1;
      var tmp_0 = i;
      var tmp_1 = $this.i23_1[i - 1 | 0];
      tmp[tmp_0] = ((!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE())[indexSegment(index, shift)];
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
      i = i + 1 | 0;
    }
  }
  function fillPathIfNeeded($this, indexPredicate) {
    var shift = 0;
    while (indexSegment($this.e22_1, shift) === indexPredicate) {
      shift = shift + get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    if (shift > 0) {
      var level = ($this.h23_1 - 1 | 0) - (shift / get_LOG_MAX_BUFFER_SIZE() | 0) | 0;
      fillPath($this, $this.e22_1, level + 1 | 0);
    }
  }
  function elementAtCurrentIndex($this) {
    var leafBufferIndex = $this.e22_1 & get_MAX_BUFFER_SIZE_MINUS_ONE();
    var tmp = $this.i23_1[$this.h23_1 - 1 | 0];
    return ((!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE())[leafBufferIndex];
  }
  function TrieIterator(root, index, size, height) {
    AbstractListIterator.call(this, index, size);
    this.h23_1 = height;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.h23_1;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp.i23_1 = tmp$ret$0;
    this.j23_1 = index === size;
    this.i23_1[0] = root;
    fillPath(this, index - (this.j23_1 ? 1 : 0) | 0, 1);
  }
  TrieIterator.prototype.q23 = function (root, index, size, height) {
    this.e22_1 = index;
    this.f22_1 = size;
    this.h23_1 = height;
    if (this.i23_1.length < height) {
      var tmp = this;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(height), null);
      tmp.i23_1 = tmp$ret$0;
    }
    this.i23_1[0] = root;
    this.j23_1 = index === size;
    fillPath(this, index - (this.j23_1 ? 1 : 0) | 0, 1);
  };
  TrieIterator.prototype.e = function () {
    if (!this.d()) {
      throw NoSuchElementException_init_$Create$();
    }
    var result = elementAtCurrentIndex(this);
    var tmp0_this = this;
    tmp0_this.e22_1 = tmp0_this.e22_1 + 1 | 0;
    if (this.e22_1 === this.f22_1) {
      this.j23_1 = true;
      return result;
    }
    fillPathIfNeeded(this, 0);
    return result;
  };
  TrieIterator.prototype.u = function () {
    if (!this.s()) {
      throw NoSuchElementException_init_$Create$();
    }
    var tmp0_this = this;
    tmp0_this.e22_1 = tmp0_this.e22_1 - 1 | 0;
    if (this.j23_1) {
      this.j23_1 = false;
      return elementAtCurrentIndex(this);
    }
    fillPathIfNeeded(this, get_MAX_BUFFER_SIZE_MINUS_ONE());
    return elementAtCurrentIndex(this);
  };
  TrieIterator.$metadata$ = classMeta('TrieIterator', undefined, undefined, undefined, undefined, AbstractListIterator.prototype);
  function persistentVectorOf() {
    return Companion_getInstance_5().r23_1;
  }
  function get_MAX_BUFFER_SIZE() {
    return MAX_BUFFER_SIZE;
  }
  var MAX_BUFFER_SIZE;
  function presizedBufferWith(element) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = 32;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var buffer = tmp$ret$0;
    buffer[0] = element;
    return buffer;
  }
  function get_MAX_BUFFER_SIZE_MINUS_ONE() {
    return MAX_BUFFER_SIZE_MINUS_ONE;
  }
  var MAX_BUFFER_SIZE_MINUS_ONE;
  function rootSize_1(vectorSize) {
    return (vectorSize - 1 | 0) & -32;
  }
  function get_LOG_MAX_BUFFER_SIZE() {
    return LOG_MAX_BUFFER_SIZE;
  }
  var LOG_MAX_BUFFER_SIZE;
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function ObjectRef(value) {
    this.q22_1 = value;
  }
  ObjectRef.$metadata$ = classMeta('ObjectRef');
  function get_MUTABLE_BUFFER_SIZE() {
    return MUTABLE_BUFFER_SIZE;
  }
  var MUTABLE_BUFFER_SIZE;
  function createEntries($this) {
    return new PersistentHashMapEntries($this);
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.a22_1 = new PersistentHashMap(Companion_getInstance_7().t23_1, 0);
  }
  Companion_4.prototype.b22 = function () {
    var tmp = this.a22_1;
    return tmp instanceof PersistentHashMap ? tmp : THROW_CCE();
  };
  Companion_4.$metadata$ = objectMeta('Companion');
  var Companion_instance_4;
  function Companion_getInstance_6() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function PersistentHashMap(node, size) {
    Companion_getInstance_6();
    AbstractMap.call(this);
    this.w23_1 = node;
    this.x23_1 = size;
  }
  PersistentHashMap.prototype.f = function () {
    return this.x23_1;
  };
  PersistentHashMap.prototype.w2 = function () {
    return new PersistentHashMapKeys(this);
  };
  PersistentHashMap.prototype.x2 = function () {
    return new PersistentHashMapValues(this);
  };
  PersistentHashMap.prototype.z = function () {
    return createEntries(this);
  };
  PersistentHashMap.prototype.q2 = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.w23_1.c24(tmp$ret$0, key, 0);
  };
  PersistentHashMap.prototype.v = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.w23_1.d24(tmp$ret$0, key, 0);
  };
  PersistentHashMap.prototype.q = function (key, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.w23_1.e24(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.f24_1, this.x23_1 + newNodeResult.g24_1 | 0);
  };
  PersistentHashMap.prototype.k3 = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.w23_1.h24(tmp$ret$0, key, 0);
    if (this.w23_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance_6().b22();
    }
    return new PersistentHashMap(newNode, this.x23_1 - 1 | 0);
  };
  PersistentHashMap.prototype.g1h = function () {
    return new PersistentHashMapBuilder(this);
  };
  PersistentHashMap.$metadata$ = classMeta('PersistentHashMap', [PersistentMap], undefined, undefined, undefined, AbstractMap.prototype);
  function PersistentHashMapBuilder(map) {
    AbstractMutableMap.call(this);
    this.m24_1 = map;
    this.n24_1 = new MutabilityOwnership();
    this.o24_1 = this.m24_1.w23_1;
    this.p24_1 = null;
    this.q24_1 = 0;
    this.r24_1 = this.m24_1.x23_1;
  }
  PersistentHashMapBuilder.prototype.m20 = function (value) {
    this.r24_1 = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this.q24_1;
    tmp0_this.q24_1 = tmp1 + 1 | 0;
  };
  PersistentHashMapBuilder.prototype.f = function () {
    return this.r24_1;
  };
  PersistentHashMapBuilder.prototype.h1h = function () {
    var tmp = this;
    var tmp_0;
    if (this.o24_1 === this.m24_1.w23_1) {
      tmp_0 = this.m24_1;
    } else {
      this.n24_1 = new MutabilityOwnership();
      tmp_0 = new PersistentHashMap(this.o24_1, this.r24_1);
    }
    tmp.m24_1 = tmp_0;
    return this.m24_1;
  };
  PersistentHashMapBuilder.prototype.z = function () {
    return new PersistentHashMapBuilderEntries(this);
  };
  PersistentHashMapBuilder.prototype.w2 = function () {
    return new PersistentHashMapBuilderKeys(this);
  };
  PersistentHashMapBuilder.prototype.x2 = function () {
    return new PersistentHashMapBuilderValues(this);
  };
  PersistentHashMapBuilder.prototype.q2 = function (key) {
    var tmp = this.o24_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.c24(tmp$ret$0, key, 0);
  };
  PersistentHashMapBuilder.prototype.v = function (key) {
    var tmp = this.o24_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.d24(tmp$ret$0, key, 0);
  };
  PersistentHashMapBuilder.prototype.q = function (key, value) {
    this.p24_1 = null;
    var tmp = this;
    var tmp_0 = this.o24_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    tmp.o24_1 = tmp_0.s24(tmp$ret$0, key, value, 0, this);
    return this.p24_1;
  };
  PersistentHashMapBuilder.prototype.l3 = function (from) {
    var tmp1_elvis_lhs = from instanceof PersistentHashMap ? from : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = from instanceof PersistentHashMapBuilder ? from : null;
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h1h();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var map = tmp;
    if (!(map == null)) {
      var intersectionCounter = DeltaCounter_init_$Create$(0, 1, null);
      var oldSize = this.r24_1;
      var tmp_0 = this;
      var tmp_1 = this.o24_1;
      var tmp_2 = map.w23_1;
      tmp_0.o24_1 = tmp_1.t24(tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE(), 0, intersectionCounter, this);
      var newSize = (oldSize + map.x23_1 | 0) - intersectionCounter.u24_1 | 0;
      if (!(oldSize === newSize)) {
        this.m20(newSize);
      }
    } else {
      AbstractMutableMap.prototype.l3.call(this, from);
    }
  };
  PersistentHashMapBuilder.prototype.k3 = function (key) {
    this.p24_1 = null;
    var tmp = this;
    var tmp_0 = this.o24_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.v24(tmp$ret$0, key, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_7().t23_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.o24_1 = tmp_1;
    return this.p24_1;
  };
  PersistentHashMapBuilder.prototype.w24 = function (key, value) {
    var oldSize = this.r24_1;
    var tmp = this;
    var tmp_0 = this.o24_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.x24(tmp$ret$0, key, value, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_7().t23_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.o24_1 = tmp_1;
    return !(oldSize === this.r24_1);
  };
  PersistentHashMapBuilder.prototype.g9 = function () {
    var tmp = this;
    var tmp_0 = Companion_getInstance_7().t23_1;
    tmp.o24_1 = tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE();
    this.m20(0);
  };
  PersistentHashMapBuilder.$metadata$ = classMeta('PersistentHashMapBuilder', [Builder_1], undefined, undefined, undefined, AbstractMutableMap.prototype);
  function PersistentHashMapBuilderEntriesIterator(builder) {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderEntriesIterator.base.<anonymous>' call
      tmp$ret$1 = new TrieNodeMutableEntriesIterator(this);
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.y24_1 = new PersistentHashMapBuilderBaseIterator(builder, tmp_2);
  }
  PersistentHashMapBuilderEntriesIterator.prototype.d = function () {
    return this.y24_1.d();
  };
  PersistentHashMapBuilderEntriesIterator.prototype.e = function () {
    return this.y24_1.e();
  };
  PersistentHashMapBuilderEntriesIterator.prototype.d4 = function () {
    return this.y24_1.d4();
  };
  PersistentHashMapBuilderEntriesIterator.prototype.j25 = function (key, newValue) {
    return this.y24_1.j25(key, newValue);
  };
  PersistentHashMapBuilderEntriesIterator.$metadata$ = classMeta('PersistentHashMapBuilderEntriesIterator', [MutableIterator]);
  function PersistentHashMapBuilderKeysIterator(builder) {
    var tmp = 0;
    var tmp_0 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderKeysIterator.<init>.<anonymous>' call
      tmp$ret$1 = new TrieNodeKeysIterator();
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_1);
  }
  PersistentHashMapBuilderKeysIterator.$metadata$ = classMeta('PersistentHashMapBuilderKeysIterator', undefined, undefined, undefined, undefined, PersistentHashMapBuilderBaseIterator.prototype);
  function PersistentHashMapBuilderValuesIterator(builder) {
    var tmp = 0;
    var tmp_0 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderValuesIterator.<init>.<anonymous>' call
      tmp$ret$1 = new TrieNodeValuesIterator();
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_1);
  }
  PersistentHashMapBuilderValuesIterator.$metadata$ = classMeta('PersistentHashMapBuilderValuesIterator', undefined, undefined, undefined, undefined, PersistentHashMapBuilderBaseIterator.prototype);
  function resetPath($this, keyHash, node, key, pathIndex) {
    var shift = imul(pathIndex, get_LOG_MAX_BRANCHING_FACTOR());
    if (shift > get_MAX_SHIFT()) {
      $this.z24_1[pathIndex].o25(node.b24_1, node.b24_1.length, 0);
      while (!equals($this.z24_1[pathIndex].k25(), key)) {
        $this.z24_1[pathIndex].p25();
      }
      $this.a25_1 = pathIndex;
      return Unit_getInstance();
    }
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (node.s25(keyPositionMask)) {
      var keyIndex = node.q25(keyPositionMask);
      $this.z24_1[pathIndex].o25(node.b24_1, imul(get_ENTRY_SIZE(), node.r25()), keyIndex);
      $this.a25_1 = pathIndex;
      return Unit_getInstance();
    }
    var nodeIndex = node.t25(keyPositionMask);
    var targetNode = node.u25(nodeIndex);
    $this.z24_1[pathIndex].o25(node.b24_1, imul(get_ENTRY_SIZE(), node.r25()), nodeIndex);
    resetPath($this, keyHash, targetNode, key, pathIndex + 1 | 0);
  }
  function checkNextWasInvoked($this) {
    if (!$this.h25_1)
      throw IllegalStateException_init_$Create$_0();
  }
  function checkForComodification_0($this) {
    if (!($this.f25_1.q24_1 === $this.i25_1))
      throw ConcurrentModificationException_init_$Create$();
  }
  function PersistentHashMapBuilderBaseIterator(builder, path) {
    PersistentHashMapBaseIterator.call(this, builder.o24_1, path);
    this.f25_1 = builder;
    this.g25_1 = null;
    this.h25_1 = false;
    this.i25_1 = this.f25_1.q24_1;
  }
  PersistentHashMapBuilderBaseIterator.prototype.e = function () {
    checkForComodification_0(this);
    this.g25_1 = this.k25();
    this.h25_1 = true;
    return PersistentHashMapBaseIterator.prototype.e.call(this);
  };
  PersistentHashMapBuilderBaseIterator.prototype.d4 = function () {
    checkNextWasInvoked(this);
    if (this.d()) {
      var currentKey = this.k25();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.remove' call
      var tmp0_remove = this.f25_1;
      var tmp1_remove = this.g25_1;
      tmp$ret$0 = (isInterface(tmp0_remove, MutableMap) ? tmp0_remove : THROW_CCE()).k3(tmp1_remove);
      var tmp$ret$1;
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = currentKey;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      resetPath(this, tmp$ret$1, this.f25_1.o24_1, currentKey, 0);
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.collections.remove' call
      var tmp2_remove = this.f25_1;
      var tmp3_remove = this.g25_1;
      tmp$ret$2 = (isInterface(tmp2_remove, MutableMap) ? tmp2_remove : THROW_CCE()).k3(tmp3_remove);
    }
    this.g25_1 = null;
    this.h25_1 = false;
    this.i25_1 = this.f25_1.q24_1;
  };
  PersistentHashMapBuilderBaseIterator.prototype.j25 = function (key, newValue) {
    if (!this.f25_1.q2(key))
      return Unit_getInstance();
    if (this.d()) {
      var currentKey = this.k25();
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = this.f25_1;
      tmp0_set.q(key, newValue);
      var tmp$ret$0;
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = currentKey;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      resetPath(this, tmp$ret$0, this.f25_1.o24_1, currentKey, 0);
    } else {
      // Inline function 'kotlin.collections.set' call
      var tmp1_set = this.f25_1;
      tmp1_set.q(key, newValue);
    }
    this.i25_1 = this.f25_1.q24_1;
  };
  PersistentHashMapBuilderBaseIterator.$metadata$ = classMeta('PersistentHashMapBuilderBaseIterator', [MutableIterator], undefined, undefined, undefined, PersistentHashMapBaseIterator.prototype);
  function TrieNodeMutableEntriesIterator(parentIterator) {
    TrieNodeBaseIterator.call(this);
    this.y25_1 = parentIterator;
  }
  TrieNodeMutableEntriesIterator.prototype.e = function () {
    assert(this.z25());
    var tmp0_this = this;
    tmp0_this.n25_1 = tmp0_this.n25_1 + 2 | 0;
    var tmp = this.l25_1[this.n25_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp_1 = this.l25_1[this.n25_1 - 1 | 0];
    return new MutableMapEntry(this.y25_1, tmp_0, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
  };
  TrieNodeMutableEntriesIterator.$metadata$ = classMeta('TrieNodeMutableEntriesIterator', undefined, undefined, undefined, undefined, TrieNodeBaseIterator.prototype);
  function MutableMapEntry(parentIterator, key, value) {
    MapEntry.call(this, key, value);
    this.g26_1 = parentIterator;
    this.h26_1 = value;
  }
  MutableMapEntry.prototype.i2 = function () {
    return this.h26_1;
  };
  MutableMapEntry.prototype.aa = function (newValue) {
    var result = this.h26_1;
    this.h26_1 = newValue;
    this.g26_1.j25(this.g2(), newValue);
    return result;
  };
  MutableMapEntry.$metadata$ = classMeta('MutableMapEntry', [MutableEntry], undefined, undefined, undefined, MapEntry.prototype);
  function PersistentHashMapBuilderEntries(builder) {
    AbstractMapBuilderEntries.call(this);
    this.k26_1 = builder;
  }
  PersistentHashMapBuilderEntries.prototype.qa = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  PersistentHashMapBuilderEntries.prototype.a = function (element) {
    return this.qa((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  PersistentHashMapBuilderEntries.prototype.g9 = function () {
    this.k26_1.g9();
  };
  PersistentHashMapBuilderEntries.prototype.c = function () {
    return new PersistentHashMapBuilderEntriesIterator(this.k26_1);
  };
  PersistentHashMapBuilderEntries.prototype.ca = function (element) {
    return this.k26_1.w24(element.g2(), element.i2());
  };
  PersistentHashMapBuilderEntries.prototype.f = function () {
    return this.k26_1.r24_1;
  };
  PersistentHashMapBuilderEntries.prototype.ba = function (element) {
    var tmp0_safe_receiver = this.k26_1.v(element.g2());
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderEntries.containsEntry.<anonymous>' call
      tmp$ret$0 = equals(tmp0_safe_receiver, element.i2());
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? element.i2() == null ? this.k26_1.q2(element.g2()) : false : tmp1_elvis_lhs;
  };
  PersistentHashMapBuilderEntries.$metadata$ = classMeta('PersistentHashMapBuilderEntries', undefined, undefined, undefined, undefined, AbstractMapBuilderEntries.prototype);
  function PersistentHashMapBuilderKeys(builder) {
    AbstractMutableSet.call(this);
    this.l26_1 = builder;
  }
  PersistentHashMapBuilderKeys.prototype.ea = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  PersistentHashMapBuilderKeys.prototype.a = function (element) {
    return this.ea((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  PersistentHashMapBuilderKeys.prototype.g9 = function () {
    this.l26_1.g9();
  };
  PersistentHashMapBuilderKeys.prototype.c = function () {
    return new PersistentHashMapBuilderKeysIterator(this.l26_1);
  };
  PersistentHashMapBuilderKeys.prototype.k3 = function (element) {
    if (this.l26_1.q2(element)) {
      this.l26_1.k3(element);
      return true;
    }
    return false;
  };
  PersistentHashMapBuilderKeys.prototype.b4 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.k3((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  PersistentHashMapBuilderKeys.prototype.f = function () {
    return this.l26_1.r24_1;
  };
  PersistentHashMapBuilderKeys.prototype.n2 = function (element) {
    return this.l26_1.q2(element);
  };
  PersistentHashMapBuilderKeys.prototype.m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.n2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  PersistentHashMapBuilderKeys.$metadata$ = classMeta('PersistentHashMapBuilderKeys', [MutableSet], undefined, undefined, undefined, AbstractMutableSet.prototype);
  function PersistentHashMapBuilderValues(builder) {
    AbstractMutableCollection.call(this);
    this.m26_1 = builder;
  }
  PersistentHashMapBuilderValues.prototype.f = function () {
    return this.m26_1.r24_1;
  };
  PersistentHashMapBuilderValues.prototype.t2 = function (element) {
    return this.m26_1.u2(element);
  };
  PersistentHashMapBuilderValues.prototype.m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.t2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  PersistentHashMapBuilderValues.prototype.ka = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  PersistentHashMapBuilderValues.prototype.a = function (element) {
    return this.ka((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  PersistentHashMapBuilderValues.prototype.c = function () {
    return new PersistentHashMapBuilderValuesIterator(this.m26_1);
  };
  PersistentHashMapBuilderValues.$metadata$ = classMeta('PersistentHashMapBuilderValues', [MutableCollection], undefined, undefined, undefined, AbstractMutableCollection.prototype);
  function AbstractMapBuilderEntries() {
    AbstractMutableSet.call(this);
  }
  AbstractMapBuilderEntries.prototype.m = function (element) {
    var tmp = isObject(element) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.ba(element);
  };
  AbstractMapBuilderEntries.prototype.b4 = function (element) {
    var tmp = isObject(element) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.ca(element);
  };
  AbstractMapBuilderEntries.$metadata$ = classMeta('AbstractMapBuilderEntries', undefined, undefined, undefined, undefined, AbstractMutableSet.prototype);
  function PersistentHashMapKeysIterator(node) {
    var tmp = 0;
    var tmp_0 = 8;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapKeysIterator.<init>.<anonymous>' call
      tmp$ret$1 = new TrieNodeKeysIterator();
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_1);
  }
  PersistentHashMapKeysIterator.$metadata$ = classMeta('PersistentHashMapKeysIterator', undefined, undefined, undefined, undefined, PersistentHashMapBaseIterator.prototype);
  function PersistentHashMapValuesIterator(node) {
    var tmp = 0;
    var tmp_0 = 8;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapValuesIterator.<init>.<anonymous>' call
      tmp$ret$1 = new TrieNodeValuesIterator();
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_1);
  }
  PersistentHashMapValuesIterator.$metadata$ = classMeta('PersistentHashMapValuesIterator', undefined, undefined, undefined, undefined, PersistentHashMapBaseIterator.prototype);
  function PersistentHashMapEntriesIterator(node) {
    var tmp = 0;
    var tmp_0 = 8;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntriesIterator.<init>.<anonymous>' call
      tmp$ret$1 = new TrieNodeEntriesIterator();
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_1);
  }
  PersistentHashMapEntriesIterator.$metadata$ = classMeta('PersistentHashMapEntriesIterator', undefined, undefined, undefined, undefined, PersistentHashMapBaseIterator.prototype);
  function TrieNodeBaseIterator() {
    this.l25_1 = Companion_getInstance_7().t23_1.b24_1;
    this.m25_1 = 0;
    this.n25_1 = 0;
  }
  TrieNodeBaseIterator.prototype.o25 = function (buffer, dataSize, index) {
    this.l25_1 = buffer;
    this.m25_1 = dataSize;
    this.n25_1 = index;
  };
  TrieNodeBaseIterator.prototype.a26 = function (buffer, dataSize) {
    this.o25(buffer, dataSize, 0);
  };
  TrieNodeBaseIterator.prototype.z25 = function () {
    return this.n25_1 < this.m25_1;
  };
  TrieNodeBaseIterator.prototype.k25 = function () {
    assert(this.z25());
    var tmp = this.l25_1[this.n25_1];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  TrieNodeBaseIterator.prototype.p25 = function () {
    assert(this.z25());
    var tmp0_this = this;
    tmp0_this.n25_1 = tmp0_this.n25_1 + 2 | 0;
  };
  TrieNodeBaseIterator.prototype.b26 = function () {
    assert(this.n25_1 >= this.m25_1);
    return this.n25_1 < this.l25_1.length;
  };
  TrieNodeBaseIterator.prototype.c26 = function () {
    assert(this.b26());
    var tmp = this.l25_1[this.n25_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  TrieNodeBaseIterator.prototype.d26 = function () {
    assert(this.b26());
    var tmp0_this = this;
    var tmp1 = tmp0_this.n25_1;
    tmp0_this.n25_1 = tmp1 + 1 | 0;
  };
  TrieNodeBaseIterator.prototype.d = function () {
    return this.z25();
  };
  TrieNodeBaseIterator.$metadata$ = classMeta('TrieNodeBaseIterator', [Iterator]);
  function get_TRIE_MAX_HEIGHT() {
    return TRIE_MAX_HEIGHT;
  }
  var TRIE_MAX_HEIGHT;
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  TrieNodeKeysIterator.prototype.e = function () {
    assert(this.z25());
    var tmp0_this = this;
    tmp0_this.n25_1 = tmp0_this.n25_1 + 2 | 0;
    var tmp = this.l25_1[this.n25_1 - 2 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  TrieNodeKeysIterator.$metadata$ = classMeta('TrieNodeKeysIterator', undefined, undefined, undefined, undefined, TrieNodeBaseIterator.prototype);
  function TrieNodeValuesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  TrieNodeValuesIterator.prototype.e = function () {
    assert(this.z25());
    var tmp0_this = this;
    tmp0_this.n25_1 = tmp0_this.n25_1 + 2 | 0;
    var tmp = this.l25_1[this.n25_1 - 1 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  TrieNodeValuesIterator.$metadata$ = classMeta('TrieNodeValuesIterator', undefined, undefined, undefined, undefined, TrieNodeBaseIterator.prototype);
  function moveToNextNodeWithData($this, pathIndex) {
    if ($this.z24_1[pathIndex].z25()) {
      return pathIndex;
    }
    if ($this.z24_1[pathIndex].b26()) {
      var node = $this.z24_1[pathIndex].c26();
      if (pathIndex === 6) {
        $this.z24_1[pathIndex + 1 | 0].a26(node.b24_1, node.b24_1.length);
      } else {
        $this.z24_1[pathIndex + 1 | 0].a26(node.b24_1, imul(get_ENTRY_SIZE(), node.r25()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.z24_1[$this.a25_1].z25()) {
      return Unit_getInstance();
    }
    var inductionVariable = $this.a25_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 ? $this.z24_1[i].b26() : false) {
          $this.z24_1[i].d26();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.a25_1 = result;
          return Unit_getInstance();
        }
        if (i > 0) {
          $this.z24_1[i - 1 | 0].d26();
        }
        $this.z24_1[i].a26(Companion_getInstance_7().t23_1.b24_1, 0);
      }
       while (0 <= inductionVariable);
    $this.b25_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.d())
      throw NoSuchElementException_init_$Create$();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.z24_1 = path;
    this.a25_1 = 0;
    this.b25_1 = true;
    this.z24_1[0].a26(node.b24_1, imul(get_ENTRY_SIZE(), node.r25()));
    this.a25_1 = 0;
    ensureNextEntryIsReady(this);
  }
  PersistentHashMapBaseIterator.prototype.k25 = function () {
    checkHasNext(this);
    return this.z24_1[this.a25_1].k25();
  };
  PersistentHashMapBaseIterator.prototype.d = function () {
    return this.b25_1;
  };
  PersistentHashMapBaseIterator.prototype.e = function () {
    checkHasNext(this);
    var result = this.z24_1[this.a25_1].e();
    ensureNextEntryIsReady(this);
    return result;
  };
  PersistentHashMapBaseIterator.$metadata$ = classMeta('PersistentHashMapBaseIterator', [Iterator]);
  function MapEntry(key, value) {
    this.i26_1 = key;
    this.j26_1 = value;
  }
  MapEntry.prototype.g2 = function () {
    return this.i26_1;
  };
  MapEntry.prototype.i2 = function () {
    return this.j26_1;
  };
  MapEntry.prototype.hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.g2();
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_hashCode = this.i2();
    var tmp0_safe_receiver_0 = tmp1_hashCode;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    tmp$ret$1 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    return tmp ^ tmp$ret$1;
  };
  MapEntry.prototype.equals = function (other) {
    var tmp0_safe_receiver = (!(other == null) ? isInterface(other, Entry) : false) ? other : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.MapEntry.equals.<anonymous>' call
      tmp$ret$0 = equals(tmp0_safe_receiver.g2(), this.g2()) ? equals(tmp0_safe_receiver.i2(), this.i2()) : false;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  MapEntry.prototype.toString = function () {
    return toString_0(this.g2()) + '=' + toString_0(this.i2());
  };
  MapEntry.$metadata$ = classMeta('MapEntry', [Entry]);
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  TrieNodeEntriesIterator.prototype.e = function () {
    assert(this.z25());
    var tmp0_this = this;
    tmp0_this.n25_1 = tmp0_this.n25_1 + 2 | 0;
    var tmp = this.l25_1[this.n25_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp_1 = this.l25_1[this.n25_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
  };
  TrieNodeEntriesIterator.$metadata$ = classMeta('TrieNodeEntriesIterator', undefined, undefined, undefined, undefined, TrieNodeBaseIterator.prototype);
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.w26_1 = map;
  }
  PersistentHashMapKeys.prototype.f = function () {
    return this.w26_1.x23_1;
  };
  PersistentHashMapKeys.prototype.n2 = function (element) {
    return this.w26_1.q2(element);
  };
  PersistentHashMapKeys.prototype.m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.n2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  PersistentHashMapKeys.prototype.c = function () {
    return new PersistentHashMapKeysIterator(this.w26_1.w23_1);
  };
  PersistentHashMapKeys.$metadata$ = classMeta('PersistentHashMapKeys', [ImmutableSet], undefined, undefined, undefined, AbstractSet.prototype);
  function PersistentHashMapValues(map) {
    AbstractCollection.call(this);
    this.x26_1 = map;
  }
  PersistentHashMapValues.prototype.f = function () {
    return this.x26_1.x23_1;
  };
  PersistentHashMapValues.prototype.t2 = function (element) {
    return this.x26_1.u2(element);
  };
  PersistentHashMapValues.prototype.m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.t2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  PersistentHashMapValues.prototype.c = function () {
    return new PersistentHashMapValuesIterator(this.x26_1.w23_1);
  };
  PersistentHashMapValues.$metadata$ = classMeta('PersistentHashMapValues', [ImmutableCollection], undefined, undefined, undefined, AbstractCollection.prototype);
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.y26_1 = map;
  }
  PersistentHashMapEntries.prototype.f = function () {
    return this.y26_1.x23_1;
  };
  PersistentHashMapEntries.prototype.z26 = function (element) {
    var tmp = isObject(element) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = this.y26_1.v(element.g2());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntries.contains.<anonymous>' call
      tmp$ret$0 = equals(tmp0_safe_receiver, element.i2());
      tmp$ret$1 = tmp$ret$0;
      tmp_0 = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.i2() == null ? this.y26_1.q2(element.g2()) : false : tmp1_elvis_lhs;
  };
  PersistentHashMapEntries.prototype.m = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.z26((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  PersistentHashMapEntries.prototype.c = function () {
    return new PersistentHashMapEntriesIterator(this.y26_1.w23_1);
  };
  PersistentHashMapEntries.$metadata$ = classMeta('PersistentHashMapEntries', [ImmutableSet], undefined, undefined, undefined, AbstractSet.prototype);
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, Object.create(TrieNode.prototype));
  }
  function ModificationResult(node, sizeDelta) {
    this.f24_1 = node;
    this.g24_1 = sizeDelta;
  }
  ModificationResult.prototype.a27 = function (_set____db54di) {
    this.f24_1 = _set____db54di;
  };
  ModificationResult.prototype.b27 = function () {
    return this.f24_1;
  };
  ModificationResult.prototype.c27 = function (operation) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode.<anonymous>' call
    this.f24_1 = operation(this.f24_1);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  ModificationResult.$metadata$ = classMeta('ModificationResult');
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.z23_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.b24_1[keyIndex];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.b24_1[keyIndex + 1 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.q25(positionMask);
    var newBuffer = insertEntryAtIndex($this.b24_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.y23_1 | positionMask, $this.z23_1, newBuffer);
  }
  function mutableInsertEntryAt($this, positionMask, key, value, owner) {
    var keyIndex = $this.q25(positionMask);
    if ($this.a24_1 === owner) {
      $this.b24_1 = insertEntryAtIndex($this.b24_1, keyIndex, key, value);
      $this.y23_1 = $this.y23_1 | positionMask;
      return $this;
    }
    var newBuffer = insertEntryAtIndex($this.b24_1, keyIndex, key, value);
    return new TrieNode($this.y23_1 | positionMask, $this.z23_1, newBuffer, owner);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = $this.b24_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    var newBuffer = tmp$ret$1;
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.y23_1, $this.z23_1, newBuffer);
  }
  function mutableUpdateValueAtIndex($this, keyIndex, value, mutator) {
    if ($this.a24_1 === mutator.n24_1) {
      $this.b24_1[keyIndex + 1 | 0] = value;
      return $this;
    }
    var tmp0_this = mutator;
    var tmp1 = tmp0_this.q24_1;
    tmp0_this.q24_1 = tmp1 + 1 | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = $this.b24_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    var newBuffer = tmp$ret$1;
    newBuffer[keyIndex + 1 | 0] = value;
    return new TrieNode($this.y23_1, $this.z23_1, newBuffer, mutator.n24_1);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.b24_1;
    if (newNodeBuffer.length === 2 ? newNode.z23_1 === 0 : false) {
      if ($this.b24_1.length === 1) {
        newNode.y23_1 = $this.z23_1;
        return newNode;
      }
      var keyIndex = $this.q25(positionMask);
      var newBuffer = replaceNodeWithEntry($this.b24_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.y23_1 ^ positionMask, $this.z23_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf_0($this.b24_1, $this.b24_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.y23_1, $this.z23_1, newBuffer_0);
  }
  function mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) {
    if (($this.b24_1.length === 1 ? newNode.b24_1.length === 2 : false) ? newNode.z23_1 === 0 : false) {
      newNode.y23_1 = $this.z23_1;
      return newNode;
    }
    if ($this.a24_1 === owner) {
      $this.b24_1[nodeIndex] = newNode;
      return $this;
    }
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = $this.b24_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    var newBuffer = tmp$ret$1;
    newBuffer[nodeIndex] = newNode;
    return new TrieNode($this.y23_1, $this.z23_1, newBuffer, owner);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.b24_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.b24_1, nodeIndex);
    return TrieNode_init_$Create$($this.y23_1, $this.z23_1 ^ positionMask, newBuffer);
  }
  function mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) {
    if ($this.b24_1.length === 1)
      return null;
    if ($this.a24_1 === owner) {
      $this.b24_1 = removeNodeAtIndex_0($this.b24_1, nodeIndex);
      $this.z23_1 = $this.z23_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeNodeAtIndex_0($this.b24_1, nodeIndex);
    return new TrieNode($this.y23_1, $this.z23_1 ^ positionMask, newBuffer, owner);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = storedKey;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedKeyHash = tmp$ret$0;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.t25(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.b24_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.y23_1 ^ positionMask, $this.z23_1 | positionMask, newBuffer);
  }
  function mutableMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    if ($this.a24_1 === owner) {
      $this.b24_1 = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
      $this.y23_1 = $this.y23_1 ^ positionMask;
      $this.z23_1 = $this.z23_1 | positionMask;
      return $this;
    }
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
    return new TrieNode($this.y23_1 ^ positionMask, $this.z23_1 | positionMask, newBuffer, owner);
  }
  function makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    if (shift > 30) {
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [key1, value1, key2, value2];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      return new TrieNode(0, 0, tmp$ret$2, owner);
    }
    var setBit1 = indexSegment_0(keyHash1, shift);
    var setBit2 = indexSegment_0(keyHash2, shift);
    if (!(setBit1 === setBit2)) {
      var tmp;
      if (setBit1 < setBit2) {
        var tmp$ret$5;
        // Inline function 'kotlin.arrayOf' call
        var tmp$ret$4;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = [key1, value1, key2, value2];
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      } else {
        var tmp$ret$8;
        // Inline function 'kotlin.arrayOf' call
        var tmp$ret$7;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$6;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$6 = [key2, value2, key1, value1];
        tmp$ret$7 = tmp$ret$6;
        tmp$ret$8 = tmp$ret$7;
        tmp = tmp$ret$8;
      }
      var nodeBuffer = tmp;
      return new TrieNode(1 << setBit1 | 1 << setBit2, 0, nodeBuffer, owner);
    }
    var node = makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift + 5 | 0, owner);
    var tmp_0 = 1 << setBit1;
    var tmp$ret$11;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$10;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$9;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$9 = [node];
    tmp$ret$10 = tmp$ret$9;
    tmp$ret$11 = tmp$ret$10;
    return new TrieNode(0, tmp_0, tmp$ret$11, owner);
  }
  function removeEntryAtIndex($this, keyIndex, positionMask) {
    if ($this.b24_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.b24_1, keyIndex);
    return TrieNode_init_$Create$($this.y23_1 ^ positionMask, $this.z23_1, newBuffer);
  }
  function mutableRemoveEntryAtIndex($this, keyIndex, positionMask, mutator) {
    var tmp0_this = mutator;
    var tmp1 = tmp0_this.r24_1;
    tmp0_this.m20(tmp1 - 1 | 0);
    mutator.p24_1 = valueAtKeyIndex($this, keyIndex);
    if ($this.b24_1.length === 2)
      return null;
    if ($this.a24_1 === mutator.n24_1) {
      $this.b24_1 = removeEntryAtIndex_0($this.b24_1, keyIndex);
      $this.y23_1 = $this.y23_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.b24_1, keyIndex);
    return new TrieNode($this.y23_1 ^ positionMask, $this.z23_1, newBuffer, mutator.n24_1);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.b24_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.b24_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function mutableCollisionRemoveEntryAtIndex($this, i, mutator) {
    var tmp0_this = mutator;
    var tmp1 = tmp0_this.r24_1;
    tmp0_this.m20(tmp1 - 1 | 0);
    mutator.p24_1 = valueAtKeyIndex($this, i);
    if ($this.b24_1.length === 2)
      return null;
    if ($this.a24_1 === mutator.n24_1) {
      $this.b24_1 = removeEntryAtIndex_0($this.b24_1, i);
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.b24_1, i);
    return new TrieNode(0, 0, newBuffer, mutator.n24_1);
  }
  function collisionContainsKey($this, key) {
    var progression = step(until(0, $this.b24_1.length), 2);
    var inductionVariable = progression.j1_1;
    var last = progression.k1_1;
    var step_0 = progression.l1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, $this.b24_1[i]))
          return true;
      }
       while (!(i === last));
    return false;
  }
  function collisionGet($this, key) {
    var progression = step(until(0, $this.b24_1.length), 2);
    var inductionVariable = progression.j1_1;
    var last = progression.k1_1;
    var step_0 = progression.l1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return valueAtKeyIndex($this, i);
        }
      }
       while (!(i === last));
    return null;
  }
  function collisionPut($this, key, value) {
    var progression = step(until(0, $this.b24_1.length), 2);
    var inductionVariable = progression.j1_1;
    var last = progression.k1_1;
    var step_0 = progression.l1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          if (value === valueAtKeyIndex($this, i)) {
            return null;
          }
          var tmp$ret$1;
          // Inline function 'kotlin.collections.copyOf' call
          var tmp0_copyOf = $this.b24_1;
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_copyOf;
          tmp$ret$1 = tmp$ret$0.slice();
          var newBuffer = tmp$ret$1;
          newBuffer[i + 1 | 0] = value;
          return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
        }
      }
       while (!(i === last));
    var newBuffer_0 = insertEntryAtIndex($this.b24_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function mutableCollisionPut($this, key, value, mutator) {
    var progression = step(until(0, $this.b24_1.length), 2);
    var inductionVariable = progression.j1_1;
    var last = progression.k1_1;
    var step_0 = progression.l1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          mutator.p24_1 = valueAtKeyIndex($this, i);
          if ($this.a24_1 === mutator.n24_1) {
            $this.b24_1[i + 1 | 0] = value;
            return $this;
          }
          var tmp1_this = mutator;
          var tmp2 = tmp1_this.q24_1;
          tmp1_this.q24_1 = tmp2 + 1 | 0;
          var tmp$ret$1;
          // Inline function 'kotlin.collections.copyOf' call
          var tmp0_copyOf = $this.b24_1;
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_copyOf;
          tmp$ret$1 = tmp$ret$0.slice();
          var newBuffer = tmp$ret$1;
          newBuffer[i + 1 | 0] = value;
          return new TrieNode(0, 0, newBuffer, mutator.n24_1);
        }
      }
       while (!(i === last));
    var tmp3_this = mutator;
    var tmp4 = tmp3_this.r24_1;
    tmp3_this.m20(tmp4 + 1 | 0);
    var newBuffer_0 = insertEntryAtIndex($this.b24_1, 0, key, value);
    return new TrieNode(0, 0, newBuffer_0, mutator.n24_1);
  }
  function collisionRemove($this, key) {
    var progression = step(until(0, $this.b24_1.length), 2);
    var inductionVariable = progression.j1_1;
    var last = progression.k1_1;
    var step_0 = progression.l1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return collisionRemoveEntryAtIndex($this, i);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove($this, key, mutator) {
    var progression = step(until(0, $this.b24_1.length), 2);
    var inductionVariable = progression.j1_1;
    var last = progression.k1_1;
    var step_0 = progression.l1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove_0($this, key, value, mutator) {
    var progression = step(until(0, $this.b24_1.length), 2);
    var inductionVariable = progression.j1_1;
    var last = progression.k1_1;
    var step_0 = progression.l1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i)) ? equals(value, valueAtKeyIndex($this, i)) : false) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionPutAll($this, otherNode, intersectionCounter, owner) {
    assert($this.z23_1 === 0);
    assert($this.y23_1 === 0);
    assert(otherNode.z23_1 === 0);
    assert(otherNode.y23_1 === 0);
    var tempBuffer = copyOf_0($this.b24_1, $this.b24_1.length + otherNode.b24_1.length | 0);
    var i = $this.b24_1.length;
    var progression = step(until(0, otherNode.b24_1.length), 2);
    var inductionVariable = progression.j1_1;
    var last = progression.k1_1;
    var step_0 = progression.l1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        var tmp = otherNode.b24_1[j];
        if (!collisionContainsKey($this, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE())) {
          tempBuffer[i] = otherNode.b24_1[j];
          tempBuffer[i + 1 | 0] = otherNode.b24_1[j + 1 | 0];
          i = i + 2 | 0;
        } else {
          var tmp1_this = intersectionCounter;
          var tmp2 = tmp1_this.u24_1;
          tmp1_this.u24_1 = tmp2 + 1 | 0;
        }
      }
       while (!(j === last));
    var newSize = i;
    return newSize === $this.b24_1.length ? $this : newSize === otherNode.b24_1.length ? otherNode : newSize === tempBuffer.length ? new TrieNode(0, 0, tempBuffer, owner) : new TrieNode(0, 0, copyOf_0(tempBuffer, newSize), owner);
  }
  function mutablePutAllFromOtherNodeCell($this, otherNode, positionMask, shift, intersectionCounter, mutator) {
    var tmp;
    if (hasNodeAt($this, positionMask)) {
      var targetNode = $this.u25($this.t25(positionMask));
      var tmp_0;
      if (hasNodeAt(otherNode, positionMask)) {
        var otherTargetNode = otherNode.u25(otherNode.t25(positionMask));
        tmp_0 = targetNode.t24(otherTargetNode, shift + 5 | 0, intersectionCounter, mutator);
      } else if (otherNode.s25(positionMask)) {
        var keyIndex = otherNode.q25(positionMask);
        var key = keyAtIndex(otherNode, keyIndex);
        var value = valueAtKeyIndex(otherNode, keyIndex);
        var oldSize = mutator.r24_1;
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        var tmp$ret$0;
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver = key;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
        tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        var tmp0_also = targetNode.s24(tmp$ret$0, key, value, shift + 5 | 0, mutator);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAllFromOtherNodeCell.<anonymous>' call
        if (mutator.r24_1 === oldSize) {
          var tmp0_this = intersectionCounter;
          var tmp1 = tmp0_this.u24_1;
          tmp0_this.u24_1 = tmp1 + 1 | 0;
        }
        tmp$ret$1 = tmp0_also;
        tmp_0 = tmp$ret$1;
      } else {
        tmp_0 = targetNode;
      }
      tmp = tmp_0;
    } else if (hasNodeAt(otherNode, positionMask)) {
      var otherTargetNode_0 = otherNode.u25(otherNode.t25(positionMask));
      var tmp_1;
      if ($this.s25(positionMask)) {
        var keyIndex_0 = $this.q25(positionMask);
        var key_0 = keyAtIndex($this, keyIndex_0);
        var tmp_2;
        var tmp$ret$2;
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver_0 = key_0;
        var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
        tmp$ret$2 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
        if (otherTargetNode_0.c24(tmp$ret$2, key_0, shift + 5 | 0)) {
          var tmp0_this_0 = intersectionCounter;
          var tmp1_0 = tmp0_this_0.u24_1;
          tmp0_this_0.u24_1 = tmp1_0 + 1 | 0;
          tmp_2 = otherTargetNode_0;
        } else {
          var value_0 = valueAtKeyIndex($this, keyIndex_0);
          var tmp$ret$3;
          // Inline function 'kotlin.hashCode' call
          var tmp0_safe_receiver_1 = key_0;
          var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
          tmp$ret$3 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
          tmp_2 = otherTargetNode_0.s24(tmp$ret$3, key_0, value_0, shift + 5 | 0, mutator);
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = otherTargetNode_0;
      }
      tmp = tmp_1;
    } else {
      var thisKeyIndex = $this.q25(positionMask);
      var thisKey = keyAtIndex($this, thisKeyIndex);
      var thisValue = valueAtKeyIndex($this, thisKeyIndex);
      var otherKeyIndex = otherNode.q25(positionMask);
      var otherKey = keyAtIndex(otherNode, otherKeyIndex);
      var otherValue = valueAtKeyIndex(otherNode, otherKeyIndex);
      var tmp$ret$4;
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_2 = thisKey;
      var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
      tmp$ret$4 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
      var tmp_3 = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_3 = otherKey;
      var tmp1_elvis_lhs_3 = tmp0_safe_receiver_3 == null ? null : hashCode(tmp0_safe_receiver_3);
      tmp$ret$5 = tmp1_elvis_lhs_3 == null ? 0 : tmp1_elvis_lhs_3;
      tmp = makeNode($this, tmp_3, thisKey, thisValue, tmp$ret$5, otherKey, otherValue, shift + 5 | 0, mutator.n24_1);
    }
    return tmp;
  }
  function calculateSize($this) {
    if ($this.z23_1 === 0)
      return $this.b24_1.length / 2 | 0;
    var numValues = countOneBits($this.y23_1);
    var result = numValues;
    var inductionVariable = imul(numValues, 2);
    var last = $this.b24_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result + calculateSize($this.u25(i)) | 0;
      }
       while (inductionVariable < last);
    return result;
  }
  function elementsIdentityEquals($this, otherNode) {
    if ($this === otherNode)
      return true;
    if (!($this.z23_1 === otherNode.z23_1))
      return false;
    if (!($this.y23_1 === otherNode.y23_1))
      return false;
    var inductionVariable = 0;
    var last = $this.b24_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!($this.b24_1[i] === otherNode.b24_1[i]))
          return false;
      }
       while (inductionVariable < last);
    return true;
  }
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function mutableReplaceNode($this, targetNode, newNode, nodeIndex, positionMask, owner) {
    return newNode == null ? mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) : ($this.a24_1 === owner ? true : !(targetNode === newNode)) ? mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) : $this;
  }
  function Companion_5() {
    Companion_instance_5 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    tmp.t23_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  Companion_5.$metadata$ = objectMeta('Companion');
  var Companion_instance_5;
  function Companion_getInstance_7() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_7();
    this.y23_1 = dataMap;
    this.z23_1 = nodeMap;
    this.a24_1 = ownedBy;
    this.b24_1 = buffer;
  }
  TrieNode.prototype.d27 = function () {
    return this.b24_1;
  };
  TrieNode.prototype.r25 = function () {
    return countOneBits(this.y23_1);
  };
  TrieNode.prototype.s25 = function (positionMask) {
    return !((this.y23_1 & positionMask) === 0);
  };
  TrieNode.prototype.q25 = function (positionMask) {
    return imul(2, countOneBits(this.y23_1 & (positionMask - 1 | 0)));
  };
  TrieNode.prototype.t25 = function (positionMask) {
    return (this.b24_1.length - 1 | 0) - countOneBits(this.z23_1 & (positionMask - 1 | 0)) | 0;
  };
  TrieNode.prototype.u25 = function (nodeIndex) {
    var tmp = this.b24_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  TrieNode.prototype.c24 = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.s25(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.q25(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.u25(this.t25(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.c24(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  TrieNode.prototype.d24 = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.s25(keyPositionMask)) {
      var keyIndex = this.q25(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.u25(this.t25(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.d24(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  TrieNode.prototype.t24 = function (otherNode, shift, intersectionCounter, mutator) {
    if (this === otherNode) {
      intersectionCounter.e27(calculateSize(this));
      return this;
    }
    if (shift > 30) {
      return mutableCollisionPutAll(this, otherNode, intersectionCounter, mutator.n24_1);
    }
    var newNodeMap = this.z23_1 | otherNode.z23_1;
    var newDataMap = (this.y23_1 ^ otherNode.y23_1) & ~newNodeMap;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var tmp0_forEachOneBit = this.y23_1 & otherNode.y23_1;
    var mask = tmp0_forEachOneBit;
    var index = 0;
    while (!(mask === 0)) {
      var bit = takeLowestOneBit(mask);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var tmp1__anonymous__uwfjfc = index;
      var leftKey = keyAtIndex(this, this.q25(bit));
      var rightKey = keyAtIndex(otherNode, otherNode.q25(bit));
      if (equals(leftKey, rightKey))
        newDataMap = newDataMap | bit;
      else
        newNodeMap = newNodeMap | bit;
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      mask = mask ^ bit;
    }
    // Inline function 'kotlin.check' call
    var tmp2_check = (newNodeMap & newDataMap) === 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp;
    if ((equals(this.a24_1, mutator.n24_1) ? this.y23_1 === newDataMap : false) ? this.z23_1 === newNodeMap : false) {
      tmp = this;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp3_arrayOfNulls = imul(countOneBits(newDataMap), 2) + countOneBits(newNodeMap) | 0;
      tmp$ret$1 = fillArrayVal(Array(tmp3_arrayOfNulls), null);
      var newBuffer = tmp$ret$1;
      tmp = TrieNode_init_$Create$(newDataMap, newNodeMap, newBuffer);
    }
    var mutableNode = tmp;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var tmp4_forEachOneBit = newNodeMap;
    var mask_0 = tmp4_forEachOneBit;
    var index_0 = 0;
    while (!(mask_0 === 0)) {
      var bit_0 = takeLowestOneBit(mask_0);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var tmp5__anonymous__kpxxpo = index_0;
      var newNodeIndex = (mutableNode.b24_1.length - 1 | 0) - tmp5__anonymous__kpxxpo | 0;
      mutableNode.b24_1[newNodeIndex] = mutablePutAllFromOtherNodeCell(this, otherNode, bit_0, shift, intersectionCounter, mutator);
      var tmp0_0 = index_0;
      index_0 = tmp0_0 + 1 | 0;
      mask_0 = mask_0 ^ bit_0;
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var tmp6_forEachOneBit = newDataMap;
    var mask_1 = tmp6_forEachOneBit;
    var index_1 = 0;
    while (!(mask_1 === 0)) {
      var bit_1 = takeLowestOneBit(mask_1);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var tmp7__anonymous__b0knam = index_1;
      var newKeyIndex = imul(tmp7__anonymous__b0knam, 2);
      if (!otherNode.s25(bit_1)) {
        var oldKeyIndex = this.q25(bit_1);
        mutableNode.b24_1[newKeyIndex] = keyAtIndex(this, oldKeyIndex);
        mutableNode.b24_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(this, oldKeyIndex);
      } else {
        var oldKeyIndex_0 = otherNode.q25(bit_1);
        mutableNode.b24_1[newKeyIndex] = keyAtIndex(otherNode, oldKeyIndex_0);
        mutableNode.b24_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(otherNode, oldKeyIndex_0);
        if (this.s25(bit_1)) {
          var tmp0_this = intersectionCounter;
          var tmp1 = tmp0_this.u24_1;
          tmp0_this.u24_1 = tmp1 + 1 | 0;
        }
      }
      var tmp0_1 = index_1;
      index_1 = tmp0_1 + 1 | 0;
      mask_1 = mask_1 ^ bit_1;
    }
    return elementsIdentityEquals(this, mutableNode) ? this : elementsIdentityEquals(otherNode, mutableNode) ? otherNode : mutableNode;
  };
  TrieNode.prototype.e24 = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.s25(keyPositionMask)) {
      var keyIndex = this.q25(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.t25(keyPositionMask);
      var targetNode = this.u25(nodeIndex);
      var tmp;
      if (shift === 30) {
        var tmp0_elvis_lhs = collisionPut(targetNode, key, value);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp = tmp_0;
      } else {
        var tmp1_elvis_lhs = targetNode.e24(keyHash, key, value, shift + 5 | 0);
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      }
      var putResult = tmp;
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode' call
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode.<anonymous>' call
      var tmp_2 = putResult;
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.put.<anonymous>' call
      var tmp0__anonymous__q1qw7t = putResult.f24_1;
      tmp$ret$0 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, tmp0__anonymous__q1qw7t);
      tmp_2.f24_1 = tmp$ret$0;
      tmp$ret$1 = putResult;
      tmp$ret$2 = tmp$ret$1;
      return tmp$ret$2;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  TrieNode.prototype.s24 = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.s25(keyPositionMask)) {
      var keyIndex = this.q25(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        mutator.p24_1 = valueAtKeyIndex(this, keyIndex);
        if (valueAtKeyIndex(this, keyIndex) === value) {
          return this;
        }
        return mutableUpdateValueAtIndex(this, keyIndex, value, mutator);
      }
      var tmp0_this = mutator;
      var tmp1 = tmp0_this.r24_1;
      tmp0_this.m20(tmp1 + 1 | 0);
      return mutableMoveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift, mutator.n24_1);
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.t25(keyPositionMask);
      var targetNode = this.u25(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionPut(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.s24(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      if (targetNode === newNode) {
        return this;
      }
      return mutableUpdateNodeAtIndex(this, nodeIndex, newNode, mutator.n24_1);
    }
    var tmp2_this = mutator;
    var tmp3 = tmp2_this.r24_1;
    tmp2_this.m20(tmp3 + 1 | 0);
    return mutableInsertEntryAt(this, keyPositionMask, key, value, mutator.n24_1);
  };
  TrieNode.prototype.h24 = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.s25(keyPositionMask)) {
      var keyIndex = this.q25(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.t25(keyPositionMask);
      var targetNode = this.u25(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.h24(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp;
      return replaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask);
    }
    return this;
  };
  TrieNode.prototype.v24 = function (keyHash, key, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.s25(keyPositionMask)) {
      var keyIndex = this.q25(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.t25(keyPositionMask);
      var targetNode = this.u25(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove(targetNode, key, mutator);
      } else {
        tmp = targetNode.v24(keyHash, key, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.n24_1);
    }
    return this;
  };
  TrieNode.prototype.x24 = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.s25(keyPositionMask)) {
      var keyIndex = this.q25(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex)) ? equals(value, valueAtKeyIndex(this, keyIndex)) : false) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.t25(keyPositionMask);
      var targetNode = this.u25(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove_0(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.x24(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.n24_1);
    }
    return this;
  };
  TrieNode.$metadata$ = classMeta('TrieNode');
  function get_ENTRY_SIZE() {
    return ENTRY_SIZE;
  }
  var ENTRY_SIZE;
  function insertEntryAtIndex(_this__u8e3s4, keyIndex, key, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = _this__u8e3s4.length + 2 | 0;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var newBuffer = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    tmp$ret$1 = newBuffer;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = keyIndex + 2 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp1_copyInto, keyIndex, tmp2_copyInto);
    tmp$ret$2 = newBuffer;
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceNodeWithEntry(_this__u8e3s4, nodeIndex, keyIndex, key, value) {
    var newBuffer = copyOf_0(_this__u8e3s4, _this__u8e3s4.length + 1 | 0);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = nodeIndex + 2 | 0;
    var tmp1_copyInto = nodeIndex + 1 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(newBuffer, newBuffer, tmp0_copyInto, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$0 = newBuffer;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = keyIndex + 2 | 0;
    arrayCopy(newBuffer, newBuffer, tmp3_copyInto, keyIndex, nodeIndex);
    tmp$ret$1 = newBuffer;
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function removeNodeAtIndex_0(_this__u8e3s4, nodeIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = _this__u8e3s4.length - 1 | 0;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var newBuffer = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, nodeIndex);
    tmp$ret$1 = newBuffer;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = nodeIndex + 1 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, nodeIndex, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$2 = newBuffer;
    return newBuffer;
  }
  function get_LOG_MAX_BRANCHING_FACTOR() {
    return LOG_MAX_BRANCHING_FACTOR;
  }
  var LOG_MAX_BRANCHING_FACTOR;
  function replaceEntryWithNode(_this__u8e3s4, keyIndex, nodeIndex, newNode) {
    var newNodeIndex = nodeIndex - 2 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = (_this__u8e3s4.length - 2 | 0) + 1 | 0;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var newBuffer = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    tmp$ret$1 = newBuffer;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = keyIndex + 2 | 0;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, tmp1_copyInto, nodeIndex);
    tmp$ret$2 = newBuffer;
    newBuffer[newNodeIndex] = newNode;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = newNodeIndex + 1 | 0;
    var tmp3_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp2_copyInto, nodeIndex, tmp3_copyInto);
    tmp$ret$3 = newBuffer;
    return newBuffer;
  }
  function get_MAX_SHIFT() {
    return MAX_SHIFT;
  }
  var MAX_SHIFT;
  function indexSegment_0(index, shift) {
    return index >> shift & 31;
  }
  function removeEntryAtIndex_0(_this__u8e3s4, keyIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = _this__u8e3s4.length - 2 | 0;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var newBuffer = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    tmp$ret$1 = newBuffer;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = keyIndex + 2 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$2 = newBuffer;
    return newBuffer;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.c22_1 = new PersistentOrderedSet(EndOfChain_getInstance(), EndOfChain_getInstance(), Companion_getInstance_6().b22());
  }
  Companion_6.prototype.d22 = function () {
    return this.c22_1;
  };
  Companion_6.$metadata$ = objectMeta('Companion');
  var Companion_instance_6;
  function Companion_getInstance_8() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function PersistentOrderedSet(firstElement, lastElement, hashMap) {
    Companion_getInstance_8();
    AbstractSet.call(this);
    this.f27_1 = firstElement;
    this.g27_1 = lastElement;
    this.h27_1 = hashMap;
  }
  PersistentOrderedSet.prototype.f = function () {
    return this.h27_1.x23_1;
  };
  PersistentOrderedSet.prototype.m = function (element) {
    return this.h27_1.q2(element);
  };
  PersistentOrderedSet.prototype.a = function (element) {
    if (this.h27_1.q2(element)) {
      return this;
    }
    if (this.h()) {
      var newMap = this.h27_1.q(element, Links_init_$Create$());
      return new PersistentOrderedSet(element, element, newMap);
    }
    var tmp = this.g27_1;
    var lastElement = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.h27_1.v(lastElement));
    var newMap_0 = this.h27_1.q(lastElement, lastLinks.k27(element)).q(element, Links_init_$Create$_0(lastElement));
    return new PersistentOrderedSet(this.f27_1, element, newMap_0);
  };
  PersistentOrderedSet.prototype.b4 = function (element) {
    var tmp0_elvis_lhs = this.h27_1.v(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.h27_1.k3(element);
    if (links.l27()) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.get' call
      var tmp0_get = newMap;
      var tmp1_get = links.i27_1;
      tmp$ret$0 = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).v(tmp1_get);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.i27_1;
      newMap = tmp_0.q((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE(), previousLinks.k27(links.j27_1));
    }
    if (links.n27()) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.get' call
      var tmp2_get = newMap;
      var tmp3_get = links.j27_1;
      tmp$ret$1 = (isInterface(tmp2_get, Map) ? tmp2_get : THROW_CCE()).v(tmp3_get);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.j27_1;
      newMap = tmp_2.q((tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE(), nextLinks.m27(links.i27_1));
    }
    var newFirstElement = !links.l27() ? links.j27_1 : this.f27_1;
    var newLastElement = !links.n27() ? links.i27_1 : this.g27_1;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  PersistentOrderedSet.prototype.c = function () {
    return new PersistentOrderedSetIterator(this.f27_1, this.h27_1);
  };
  PersistentOrderedSet.$metadata$ = classMeta('PersistentOrderedSet', [PersistentSet], undefined, undefined, undefined, AbstractSet.prototype);
  function Links_init_$Init$($this) {
    Links.call($this, EndOfChain_getInstance(), EndOfChain_getInstance());
    return $this;
  }
  function Links_init_$Create$() {
    return Links_init_$Init$(Object.create(Links.prototype));
  }
  function Links_init_$Init$_0(previous, $this) {
    Links.call($this, previous, EndOfChain_getInstance());
    return $this;
  }
  function Links_init_$Create$_0(previous) {
    return Links_init_$Init$_0(previous, Object.create(Links.prototype));
  }
  function Links(previous, next) {
    this.i27_1 = previous;
    this.j27_1 = next;
  }
  Links.prototype.k27 = function (newNext) {
    return new Links(this.i27_1, newNext);
  };
  Links.prototype.m27 = function (newPrevious) {
    return new Links(newPrevious, this.j27_1);
  };
  Links.prototype.n27 = function () {
    return !(this.j27_1 === EndOfChain_getInstance());
  };
  Links.prototype.l27 = function () {
    return !(this.i27_1 === EndOfChain_getInstance());
  };
  Links.$metadata$ = classMeta('Links');
  function checkHasNext_0($this) {
    if (!$this.d())
      throw NoSuchElementException_init_$Create$();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.o27_1 = nextElement;
    this.p27_1 = map;
    this.q27_1 = 0;
  }
  PersistentOrderedSetIterator.prototype.d = function () {
    return this.q27_1 < this.p27_1.f();
  };
  PersistentOrderedSetIterator.prototype.e = function () {
    checkHasNext_0(this);
    var tmp = this.o27_1;
    var result = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp0_this = this;
    var tmp1 = tmp0_this.q27_1;
    tmp0_this.q27_1 = tmp1 + 1 | 0;
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_getOrElse = this.p27_1;
    var tmp0_elvis_lhs = tmp0_getOrElse.v(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + result + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp$ret$0 = tmp_1;
    tmp_0.o27_1 = tmp$ret$0.j27_1;
    return result;
  };
  PersistentOrderedSetIterator.$metadata$ = classMeta('PersistentOrderedSetIterator', [Iterator]);
  function EndOfChain() {
    EndOfChain_instance = this;
  }
  EndOfChain.$metadata$ = objectMeta('EndOfChain');
  var EndOfChain_instance;
  function EndOfChain_getInstance() {
    if (EndOfChain_instance == null)
      new EndOfChain();
    return EndOfChain_instance;
  }
  function forEachOneBit(_this__u8e3s4, body) {
    var mask = _this__u8e3s4;
    var index = 0;
    while (!(mask === 0)) {
      var bit = takeLowestOneBit(mask);
      body(bit, index);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      mask = mask ^ bit;
    }
  }
  function ListImplementation() {
    ListImplementation_instance = this;
  }
  ListImplementation.prototype.a2 = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  ListImplementation.prototype.z1 = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  ListImplementation.$metadata$ = objectMeta('ListImplementation');
  var ListImplementation_instance;
  function ListImplementation_getInstance() {
    if (ListImplementation_instance == null)
      new ListImplementation();
    return ListImplementation_instance;
  }
  function MutabilityOwnership() {
  }
  MutabilityOwnership.$metadata$ = classMeta('MutabilityOwnership');
  function DeltaCounter_init_$Init$(count, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      count = 0;
    DeltaCounter.call($this, count);
    return $this;
  }
  function DeltaCounter_init_$Create$(count, $mask0, $marker) {
    return DeltaCounter_init_$Init$(count, $mask0, $marker, Object.create(DeltaCounter.prototype));
  }
  function DeltaCounter(count) {
    this.u24_1 = count;
  }
  DeltaCounter.prototype.r27 = function (_set____db54di) {
    this.u24_1 = _set____db54di;
  };
  DeltaCounter.prototype.s27 = function () {
    return this.u24_1;
  };
  DeltaCounter.prototype.e27 = function (that) {
    var tmp0_this = this;
    tmp0_this.u24_1 = tmp0_this.u24_1 + that | 0;
  };
  DeltaCounter.prototype.toString = function () {
    return 'DeltaCounter(count=' + this.u24_1 + ')';
  };
  DeltaCounter.prototype.hashCode = function () {
    return this.u24_1;
  };
  DeltaCounter.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeltaCounter))
      return false;
    var tmp0_other_with_cast = other instanceof DeltaCounter ? other : THROW_CCE();
    if (!(this.u24_1 === tmp0_other_with_cast.u24_1))
      return false;
    return true;
  };
  DeltaCounter.$metadata$ = classMeta('DeltaCounter');
  function assert(condition) {
  }
  function composableLambdaInstance(key, tracked, block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new ComposableLambdaImpl(key, tracked);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.internal.composableLambdaInstance.<anonymous>' call
    tmp0_apply.y27(block);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function replacableWith(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (_this__u8e3s4 instanceof RecomposeScopeImpl) {
        tmp_1 = other instanceof RecomposeScopeImpl;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = (!_this__u8e3s4.t1q() ? true : equals(_this__u8e3s4, other)) ? true : equals(_this__u8e3s4.l1c_1, other.l1c_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function differentBits(slot) {
    return bitsForSlot(2, slot);
  }
  function sameBits(slot) {
    return bitsForSlot(1, slot);
  }
  function bitsForSlot(bits, slot) {
    var realSlot = slot % 10 | 0;
    return bits << (imul(realSlot, 3) + 1 | 0);
  }
  function composableLambda(composer, key, tracked, block) {
    composer.y1a(key);
    var slot = composer.a1b();
    var tmp;
    if (slot === Companion_getInstance_1().c1b_1) {
      var value = new ComposableLambdaImpl(key, tracked);
      composer.b1b(value);
      tmp = value;
    } else {
      tmp = slot instanceof ComposableLambdaImpl ? slot : THROW_CCE();
    }
    var result = tmp;
    result.y27(block);
    composer.d1b();
    return result;
  }
  function fastAny(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.g(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
        if (predicate(item))
          return true;
      }
       while (inductionVariable <= last);
    return false;
  }
  function fastAll(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.g(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
        if (!predicate(item))
          return false;
      }
       while (inductionVariable <= last);
    return true;
  }
  function fastForEach(_this__u8e3s4, action) {
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.g(index);
        action(item);
      }
       while (inductionVariable <= last);
  }
  function fastMap(_this__u8e3s4, transform) {
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(_this__u8e3s4.f());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.g(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp0_plusAssign = transform(item);
        target.a(tmp0_plusAssign);
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastGroupBy(_this__u8e3s4, keySelector) {
    // Inline function 'kotlin.contracts.contract' call
    var destination = HashMap_init_$Create$_0(_this__u8e3s4.f());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.g(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>' call
        var key = keySelector(item);
        var tmp$ret$1;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.v(key);
        var tmp;
        if (value == null) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          tmp$ret$0 = ArrayList_init_$Create$();
          var answer = tmp$ret$0;
          destination.q(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        tmp$ret$1 = tmp;
        var list = tmp$ret$1;
        list.a(item);
      }
       while (inductionVariable <= last);
    return destination;
  }
  function fastForEachIndexed(_this__u8e3s4, action) {
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.g(index);
        action(index, item);
      }
       while (inductionVariable <= last);
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
  function fastToSet(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = HashSet_init_$Create$_0(_this__u8e3s4.f());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.g(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>.<anonymous>' call
        tmp0_also.a(item);
      }
       while (inductionVariable <= last);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
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
  function get_emptyLambda() {
    init_properties_Snapshot_kt_28wf56();
    return emptyLambda;
  }
  var emptyLambda;
  function get_threadSnapshot() {
    init_properties_Snapshot_kt_28wf56();
    return threadSnapshot;
  }
  var threadSnapshot;
  function get_lock() {
    init_properties_Snapshot_kt_28wf56();
    return lock;
  }
  var lock;
  function set_openSnapshots(_set____db54di) {
    init_properties_Snapshot_kt_28wf56();
    openSnapshots = _set____db54di;
  }
  function get_openSnapshots() {
    init_properties_Snapshot_kt_28wf56();
    return openSnapshots;
  }
  var openSnapshots;
  function set_nextSnapshotId(_set____db54di) {
    init_properties_Snapshot_kt_28wf56();
    nextSnapshotId = _set____db54di;
  }
  function get_nextSnapshotId() {
    init_properties_Snapshot_kt_28wf56();
    return nextSnapshotId;
  }
  var nextSnapshotId;
  function get_pinningTable() {
    init_properties_Snapshot_kt_28wf56();
    return pinningTable;
  }
  var pinningTable;
  function get_applyObservers() {
    init_properties_Snapshot_kt_28wf56();
    return applyObservers;
  }
  var applyObservers;
  function get_globalWriteObservers() {
    init_properties_Snapshot_kt_28wf56();
    return globalWriteObservers;
  }
  var globalWriteObservers;
  function get_currentGlobalSnapshot() {
    init_properties_Snapshot_kt_28wf56();
    return currentGlobalSnapshot;
  }
  var currentGlobalSnapshot;
  function get_snapshotInitializer() {
    init_properties_Snapshot_kt_28wf56();
    return snapshotInitializer;
  }
  var snapshotInitializer;
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0(function_0) {
    this.z27_1 = function_0;
  }
  sam$androidx_compose_runtime_snapshots_ObserverHandle$0.prototype.vk = function () {
    return this.z27_1();
  };
  sam$androidx_compose_runtime_snapshots_ObserverHandle$0.$metadata$ = classMeta('sam$androidx_compose_runtime_snapshots_ObserverHandle$0', [ObserverHandle]);
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(function_0) {
    this.a28_1 = function_0;
  }
  sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0.prototype.vk = function () {
    return this.a28_1();
  };
  sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0.$metadata$ = classMeta('sam$androidx_compose_runtime_snapshots_ObserverHandle$0', [ObserverHandle]);
  function Snapshot$Companion$registerApplyObserver$lambda($observer) {
    return function () {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_applyObservers().b4($observer);
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      return Unit_getInstance();
    };
  }
  function Snapshot$Companion$registerGlobalWriteObserver$lambda($observer) {
    return function () {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.Companion.registerGlobalWriteObserver.<anonymous>.<anonymous>' call
      tmp$ret$0 = get_globalWriteObservers().b4($observer);
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      advanceGlobalSnapshot_0();
      return Unit_getInstance();
    };
  }
  function Companion_7() {
    Companion_instance_7 = this;
  }
  Companion_7.prototype.s19 = function () {
    return currentSnapshot();
  };
  Companion_7.prototype.v1w = function (readObserver, writeObserver) {
    var tmp = currentSnapshot();
    var tmp0_safe_receiver = tmp instanceof MutableSnapshot ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b28(readObserver, writeObserver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Cannot create a mutable snapshot of an read-only snapshot');
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  Companion_7.prototype.w1t = function (readObserver, writeObserver, block) {
    if (!(readObserver == null) ? true : !(writeObserver == null)) {
      var currentSnapshot = get_threadSnapshot().wo();
      var tmp;
      var tmp_0;
      if (currentSnapshot == null) {
        tmp_0 = true;
      } else {
        tmp_0 = currentSnapshot instanceof MutableSnapshot;
      }
      if (tmp_0) {
        tmp = new TransparentObserverMutableSnapshot(currentSnapshot instanceof MutableSnapshot ? currentSnapshot : null, readObserver, writeObserver, true, false);
      } else {
        if (readObserver == null) {
          return block();
        } else {
          tmp = currentSnapshot.c28(readObserver);
        }
      }
      var snapshot = tmp;
      try {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.w1w();
          try {
            tmp$ret$0 = block();
            break $l$block;
          }finally {
            snapshot.x1w(previous);
          }
        }
        return tmp$ret$0;
      }finally {
        snapshot.vk();
      }
    } else
      return block();
  };
  Companion_7.prototype.d28 = function () {
    var tmp = get_threadSnapshot().wo();
    return createTransparentSnapshotWithNoParentReadObserver$default(tmp, null, false, 6, null);
  };
  Companion_7.prototype.e28 = function (block) {
    // Inline function 'kotlin.contracts.contract' call
    var snapshot = this.d28();
    try {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
        var previous = snapshot.w1w();
        try {
          tmp$ret$0 = block();
          break $l$block;
        }finally {
          snapshot.x1w(previous);
        }
      }
      return tmp$ret$0;
    }finally {
      snapshot.vk();
    }
  };
  Companion_7.prototype.w1y = function (observer) {
    advanceGlobalSnapshot(get_emptyLambda());
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.Companion.registerApplyObserver.<anonymous>' call
    tmp$ret$0 = get_applyObservers().a(observer);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = Snapshot$Companion$registerApplyObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0(tmp);
  };
  Companion_7.prototype.f28 = function (observer) {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.Companion.registerGlobalWriteObserver.<anonymous>' call
    tmp$ret$0 = get_globalWriteObservers().a(observer);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    advanceGlobalSnapshot_0();
    var tmp = Snapshot$Companion$registerGlobalWriteObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(tmp);
  };
  Companion_7.prototype.y1t = function () {
    return currentSnapshot().y1t();
  };
  Companion_7.prototype.s1v = function () {
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.Companion.sendApplyNotifications.<anonymous>' call
    var tmp0_safe_receiver = get_currentGlobalSnapshot().wo().g28();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$0 = !tmp0_safe_receiver.h();
      tmp = tmp$ret$0;
    }
    tmp$ret$1 = tmp === true;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var changes = tmp$ret$4;
    if (changes) {
      advanceGlobalSnapshot_0();
    }
  };
  Companion_7.$metadata$ = objectMeta('Companion');
  var Companion_instance_7;
  function Companion_getInstance_9() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function Snapshot(id, invalid) {
    Companion_getInstance_9();
    this.j1l_1 = invalid;
    this.k1l_1 = id;
    this.l1l_1 = false;
    this.m1l_1 = !(id === 0) ? trackPinning(id, this.h28()) : -1;
    this.n1l_1 = 8;
  }
  Snapshot.prototype.i28 = function (_set____db54di) {
    this.j1l_1 = _set____db54di;
  };
  Snapshot.prototype.h28 = function () {
    return this.j1l_1;
  };
  Snapshot.prototype.j28 = function (_set____db54di) {
    this.k1l_1 = _set____db54di;
  };
  Snapshot.prototype.o1l = function () {
    return this.k1l_1;
  };
  Snapshot.prototype.vk = function () {
    this.l1l_1 = true;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.l28();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  Snapshot.prototype.m28 = function (block) {
    var previous = this.w1w();
    try {
      return block();
    }finally {
      this.x1w(previous);
    }
  };
  Snapshot.prototype.w1w = function () {
    var previous = get_threadSnapshot().wo();
    get_threadSnapshot().p1s(this);
    return previous;
  };
  Snapshot.prototype.x1w = function (snapshot) {
    get_threadSnapshot().p1s(snapshot);
  };
  Snapshot.prototype.n28 = function () {
    return this.l1l_1;
  };
  Snapshot.prototype.o28 = function () {
    return this.m1l_1 >= 0;
  };
  Snapshot.prototype.t28 = function () {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.u28();
    this.v28();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  Snapshot.prototype.u28 = function () {
    set_openSnapshots(get_openSnapshots().a29(this.o1l()));
  };
  Snapshot.prototype.v28 = function () {
    this.l28();
  };
  Snapshot.prototype.b29 = function () {
    // Inline function 'kotlin.require' call
    var tmp0_require = !this.l1l_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.validateNotDisposed.<anonymous>' call
      tmp$ret$0 = 'Cannot use a disposed snapshot';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  Snapshot.prototype.l28 = function () {
    if (this.m1l_1 >= 0) {
      releasePinningLocked(this.m1l_1);
      this.m1l_1 = -1;
    }
  };
  Snapshot.prototype.c29 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.m1l_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.Snapshot.takeoverPinnedSnapshot.<anonymous>' call
    this.m1l_1 = -1;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  Snapshot.$metadata$ = classMeta('Snapshot');
  function ObserverHandle() {
  }
  ObserverHandle.$metadata$ = interfaceMeta('ObserverHandle');
  function abandon($this) {
    var modified = $this.g28();
    if (!(modified == null)) {
      $this.d29();
      $this.e29(null);
      var id = $this.o1l();
      var tmp0_iterator = modified.c();
      while (tmp0_iterator.d()) {
        var state = tmp0_iterator.e();
        var current = state.k1t();
        while (!(current == null)) {
          if (current.p1t_1 === id ? true : contains($this.g1x_1, current.p1t_1)) {
            current.p1t_1 = 0;
          }
          current = current.q1t_1;
        }
      }
    }
    $this.t28();
  }
  function MutableSnapshot(id, invalid, readObserver, writeObserver) {
    Snapshot.call(this, id, invalid);
    this.d1x_1 = readObserver;
    this.e1x_1 = writeObserver;
    this.f1x_1 = null;
    this.g1x_1 = Companion_getInstance_10().f29_1;
    this.h1x_1 = new Int32Array(0);
    this.i1x_1 = 1;
    this.j1x_1 = false;
    this.k1x_1 = 8;
  }
  MutableSnapshot.prototype.v1t = function () {
    return this.d1x_1;
  };
  MutableSnapshot.prototype.p28 = function () {
    return this.e1x_1;
  };
  MutableSnapshot.prototype.b28 = function (readObserver, writeObserver) {
    this.b29();
    this.g29();
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.h29(this.o1l());
    var tmp$ret$8;
    // Inline function 'kotlin.also' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var newId = tmp0;
    set_openSnapshots(get_openSnapshots().i29(newId));
    var currentInvalid = this.h28();
    this.i28(currentInvalid.i29(newId));
    var tmp = addRange(currentInvalid, this.o1l() + 1 | 0, newId);
    var tmp_0 = this.v1t();
    tmp$ret$0 = new NestedMutableSnapshot(newId, tmp, mergedReadObserver$default(readObserver, tmp_0, false, 4, null), mergedWriteObserver(writeObserver, this.p28()), this);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp0_also = tmp$ret$4;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.j1x_1 ? !this.l1l_1 : false) {
      var previousId = this.o1l();
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$5;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.j28(tmp0_0);
      set_openSnapshots(get_openSnapshots().i29(this.o1l()));
      tmp$ret$5 = Unit_getInstance();
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = tmp$ret$6;
      this.i28(addRange(this.h28(), previousId + 1 | 0, this.o1l()));
    }
    tmp$ret$8 = tmp0_also;
    tmp$ret$9 = tmp$ret$8;
    return tmp$ret$9;
  };
  MutableSnapshot.prototype.l1x = function () {
    var modified = this.g28();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(get_currentGlobalSnapshot().wo(), this, get_openSnapshots().a29(get_currentGlobalSnapshot().wo().o1l())) : null;
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
    validateOpen(this);
    var tmp;
    if (modified == null ? true : modified.f() === 0) {
      this.u28();
      var previousGlobalSnapshot = get_currentGlobalSnapshot().wo();
      takeNewGlobalSnapshot(previousGlobalSnapshot, get_emptyLambda());
      var globalModified = previousGlobalSnapshot.g28();
      var tmp_0;
      var tmp_1;
      if (!(globalModified == null)) {
        var tmp$ret$0;
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp$ret$0 = !globalModified.h();
        tmp_1 = tmp$ret$0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = to(toMutableList(get_applyObservers()), globalModified);
      } else {
        tmp_0 = to(emptyList(), null);
      }
      tmp = tmp_0;
    } else {
      var previousGlobalSnapshot_0 = get_currentGlobalSnapshot().wo();
      var result = this.j29(get_nextSnapshotId(), optimisticMerges_0, get_openSnapshots().a29(previousGlobalSnapshot_0.o1l()));
      if (!equals(result, Success_getInstance()))
        return result;
      this.u28();
      takeNewGlobalSnapshot(previousGlobalSnapshot_0, get_emptyLambda());
      var globalModified_0 = previousGlobalSnapshot_0.g28();
      this.e29(null);
      previousGlobalSnapshot_0.e29(null);
      tmp = to(toMutableList(get_applyObservers()), globalModified_0);
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp0_container = tmp$ret$4;
    var observers = tmp0_container.z3();
    var globalModified_1 = tmp0_container.a4();
    this.j1x_1 = true;
    var tmp_2;
    if (!(globalModified_1 == null)) {
      var tmp$ret$5;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$5 = !globalModified_1.h();
      tmp_2 = tmp$ret$5;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = observers.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = observers.g(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item(globalModified_1, this);
        }
         while (inductionVariable <= last);
    }
    var tmp_3;
    if (!(modified == null)) {
      var tmp$ret$6;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$6 = !modified.h();
      tmp_3 = tmp$ret$6;
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = observers.f() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = observers.g(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item_0(modified, this);
        }
         while (inductionVariable_0 <= last_0);
    }
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp1_synchronized = get_lock();
    var tmp$ret$7;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.v28();
    tmp$ret$7 = Unit_getInstance();
    tmp$ret$8 = tmp$ret$7;
    tmp$ret$9 = tmp$ret$8;
    return Success_getInstance();
  };
  MutableSnapshot.prototype.k28 = function () {
    return false;
  };
  MutableSnapshot.prototype.vk = function () {
    if (!this.l1l_1) {
      Snapshot.prototype.vk.call(this);
      this.r28(this);
    }
  };
  MutableSnapshot.prototype.c28 = function (readObserver) {
    this.b29();
    this.g29();
    var previousId = this.o1l();
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.h29(this.o1l());
    var tmp$ret$8;
    // Inline function 'kotlin.also' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedSnapshot.<anonymous>' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var readonlyId = tmp0;
    set_openSnapshots(get_openSnapshots().i29(readonlyId));
    tmp$ret$0 = new NestedReadonlySnapshot(readonlyId, addRange(this.h28(), previousId + 1 | 0, readonlyId), readObserver, this);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp0_also = tmp$ret$4;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.j1x_1 ? !this.l1l_1 : false) {
      var previousId_0 = this.o1l();
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$5;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.j28(tmp0_0);
      set_openSnapshots(get_openSnapshots().i29(this.o1l()));
      tmp$ret$5 = Unit_getInstance();
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = tmp$ret$6;
      this.i28(addRange(this.h28(), previousId_0 + 1 | 0, this.o1l()));
    }
    tmp$ret$8 = tmp0_also;
    tmp$ret$9 = tmp$ret$8;
    return tmp$ret$9;
  };
  MutableSnapshot.prototype.q28 = function (snapshot) {
    var tmp0_this = this;
    var tmp1 = tmp0_this.i1x_1;
    tmp0_this.i1x_1 = tmp1 + 1 | 0;
  };
  MutableSnapshot.prototype.r28 = function (snapshot) {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.i1x_1 > 0;
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
    var tmp0_this = this;
    tmp0_this.i1x_1 = tmp0_this.i1x_1 - 1 | 0;
    if (tmp0_this.i1x_1 === 0) {
      if (!this.j1x_1) {
        abandon(this);
      }
    }
  };
  MutableSnapshot.prototype.y1t = function () {
    if (this.j1x_1 ? true : this.l1l_1)
      return Unit_getInstance();
    this.k29();
  };
  MutableSnapshot.prototype.u28 = function () {
    set_openSnapshots(get_openSnapshots().a29(this.o1l()).l29(this.g1x_1));
  };
  MutableSnapshot.prototype.v28 = function () {
    this.m29();
    Snapshot.prototype.v28.call(this);
  };
  MutableSnapshot.prototype.d29 = function () {
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.j1x_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotApplied.<anonymous>' call
      tmp$ret$0 = 'Unsupported operation on a snapshot that has been applied';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  MutableSnapshot.prototype.g29 = function () {
    // Inline function 'kotlin.check' call
    var tmp;
    if (!this.j1x_1) {
      tmp = true;
    } else {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.isPinned' call
      tmp$ret$0 = this.m1l_1 >= 0;
      tmp = tmp$ret$0;
    }
    var tmp0_check = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotAppliedOrPinned.<anonymous>' call
      tmp$ret$1 = 'Unsupported operation on a disposed or applied snapshot';
      var message = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  MutableSnapshot.prototype.j29 = function (snapshotId, optimisticMerges, invalidSnapshots) {
    var mergedRecords = null;
    var start = this.h28().i29(this.o1l()).n29(this.g1x_1);
    var modified = ensureNotNull(this.g28());
    var statesToRemove = null;
    var tmp0_iterator = modified.c();
    $l$loop_0: while (tmp0_iterator.d()) {
      var state = tmp0_iterator.e();
      var first = state.k1t();
      var tmp1_elvis_lhs = readable(first, snapshotId, invalidSnapshots);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var current = tmp;
      var tmp2_elvis_lhs = readable(first, this.o1l(), start);
      var tmp_0;
      if (tmp2_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp_0 = tmp2_elvis_lhs;
      }
      var previous = tmp_0;
      if (!equals(current, previous)) {
        var tmp3_elvis_lhs = readable(first, this.o1l(), this.h28());
        var tmp_1;
        if (tmp3_elvis_lhs == null) {
          readError();
        } else {
          tmp_1 = tmp3_elvis_lhs;
        }
        var applied = tmp_1;
        var tmp4_safe_receiver = optimisticMerges;
        var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.v(current);
        var tmp_2;
        if (tmp5_elvis_lhs == null) {
          var tmp$ret$1;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
          tmp$ret$0 = state.a1u(previous, current, applied);
          tmp$ret$1 = tmp$ret$0;
          tmp_2 = tmp$ret$1;
        } else {
          tmp_2 = tmp5_elvis_lhs;
        }
        var merged = tmp_2;
        var tmp6_subject = merged;
        if (tmp6_subject == null)
          return new Failure(this);
        else if (equals(tmp6_subject, applied)) {
        } else if (equals(tmp6_subject, current)) {
          var tmp7_elvis_lhs = mergedRecords;
          var tmp_3;
          if (tmp7_elvis_lhs == null) {
            var tmp$ret$3;
            // Inline function 'kotlin.also' call
            var tmp$ret$2;
            // Inline function 'kotlin.collections.mutableListOf' call
            tmp$ret$2 = ArrayList_init_$Create$();
            var tmp0_also = tmp$ret$2;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
            mergedRecords = tmp0_also;
            tmp$ret$3 = tmp0_also;
            tmp_3 = tmp$ret$3;
          } else {
            tmp_3 = tmp7_elvis_lhs;
          }
          tmp_3.a(to(state, current.h1t()));
          var tmp8_elvis_lhs = statesToRemove;
          var tmp_4;
          if (tmp8_elvis_lhs == null) {
            var tmp$ret$5;
            // Inline function 'kotlin.also' call
            var tmp$ret$4;
            // Inline function 'kotlin.collections.mutableListOf' call
            tmp$ret$4 = ArrayList_init_$Create$();
            var tmp1_also = tmp$ret$4;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
            statesToRemove = tmp1_also;
            tmp$ret$5 = tmp1_also;
            tmp_4 = tmp$ret$5;
          } else {
            tmp_4 = tmp8_elvis_lhs;
          }
          tmp_4.a(state);
        } else {
          var tmp9_elvis_lhs = mergedRecords;
          var tmp_5;
          if (tmp9_elvis_lhs == null) {
            var tmp$ret$7;
            // Inline function 'kotlin.also' call
            var tmp$ret$6;
            // Inline function 'kotlin.collections.mutableListOf' call
            tmp$ret$6 = ArrayList_init_$Create$();
            var tmp2_also = tmp$ret$6;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
            mergedRecords = tmp2_also;
            tmp$ret$7 = tmp2_also;
            tmp_5 = tmp$ret$7;
          } else {
            tmp_5 = tmp9_elvis_lhs;
          }
          tmp_5.a(!equals(merged, previous) ? to(state, merged) : to(state, previous.h1t()));
        }
      }
    }
    var tmp10_safe_receiver = mergedRecords;
    if (tmp10_safe_receiver == null)
      null;
    else {
      var tmp$ret$11;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.k29();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp10_safe_receiver.f() - 1 | 0;
      var tmp_6;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp10_safe_receiver.g(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          var tmp0_container = item;
          var state_0 = tmp0_container.z3();
          var stateRecord = tmp0_container.a4();
          stateRecord.p1t_1 = this.o1l();
          var tmp$ret$10;
          // Inline function 'androidx.compose.runtime.snapshots.sync' call
          var tmp$ret$9;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp0_synchronized = get_lock();
          var tmp$ret$8;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          stateRecord.q1t_1 = state_0.k1t();
          state_0.z1t(stateRecord);
          tmp$ret$8 = Unit_getInstance();
          tmp$ret$9 = tmp$ret$8;
          tmp$ret$10 = tmp$ret$9;
        }
         while (inductionVariable <= last);
        tmp_6 = Unit_getInstance();
      }
      tmp$ret$11 = tmp_6;
    }
    var tmp11_safe_receiver = statesToRemove;
    if (tmp11_safe_receiver == null)
      null;
    else {
      var tmp$ret$13;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
      tmp$ret$12 = modified.f9(tmp11_safe_receiver);
      tmp$ret$13 = tmp$ret$12;
    }
    return Success_getInstance();
  };
  MutableSnapshot.prototype.o29 = function (block) {
    this.h29(this.o1l());
    var tmp$ret$3;
    // Inline function 'kotlin.also' call
    var tmp0_also = block();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.j1x_1 ? !this.l1l_1 : false) {
      var previousId = this.o1l();
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      this.j28(tmp0);
      set_openSnapshots(get_openSnapshots().i29(this.o1l()));
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      this.i28(addRange(this.h28(), previousId + 1 | 0, this.o1l()));
    }
    tmp$ret$3 = tmp0_also;
    return tmp$ret$3;
  };
  MutableSnapshot.prototype.k29 = function () {
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.h29(this.o1l());
    var tmp$ret$4;
    // Inline function 'kotlin.also' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    tmp$ret$0 = Unit_getInstance();
    var tmp0_also = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.j1x_1 ? !this.l1l_1 : false) {
      var previousId = this.o1l();
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      this.j28(tmp0);
      set_openSnapshots(get_openSnapshots().i29(this.o1l()));
      tmp$ret$1 = Unit_getInstance();
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      this.i28(addRange(this.h28(), previousId + 1 | 0, this.o1l()));
    }
    tmp$ret$4 = tmp0_also;
    tmp$ret$5 = tmp$ret$4;
    return tmp$ret$5;
  };
  MutableSnapshot.prototype.h29 = function (id) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.g1x_1 = this.g1x_1.i29(id);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  MutableSnapshot.prototype.p29 = function (id) {
    if (id >= 0) {
      var tmp = this;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.plus' call
      var tmp0_plus = this.h1x_1;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.plus' call
      var tmp$ret$0;
      // Inline function 'kotlin.intArrayOf' call
      tmp$ret$0 = new Int32Array([id]);
      var tmp0_plus_0 = tmp$ret$0;
      tmp$ret$1 = primitiveArrayConcat([tmp0_plus, tmp0_plus_0]);
      tmp$ret$2 = tmp$ret$1;
      tmp.h1x_1 = tmp$ret$2;
    }
  };
  MutableSnapshot.prototype.q29 = function (handles) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$0 = handles.length === 0;
    if (tmp$ret$0)
      return Unit_getInstance();
    var pinned = this.h1x_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$1 = pinned.length === 0;
    if (tmp$ret$1)
      this.h1x_1 = handles;
    else {
      var tmp = this;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.plus' call
      tmp$ret$2 = primitiveArrayConcat([pinned, handles]);
      tmp.h1x_1 = tmp$ret$2;
    }
  };
  MutableSnapshot.prototype.m29 = function () {
    var inductionVariable = 0;
    var last = this.h1x_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        releasePinningLocked(this.h1x_1[index]);
      }
       while (inductionVariable <= last);
  };
  MutableSnapshot.prototype.r29 = function (snapshots) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.g1x_1 = this.g1x_1.n29(snapshots);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  MutableSnapshot.prototype.s28 = function (state) {
    var tmp0_elvis_lhs = this.g28();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = HashSet_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.recordModified.<anonymous>' call
      this.e29(tmp0_also);
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.a(state);
  };
  MutableSnapshot.prototype.e29 = function (_set____db54di) {
    this.f1x_1 = _set____db54di;
  };
  MutableSnapshot.prototype.g28 = function () {
    return this.f1x_1;
  };
  MutableSnapshot.prototype.s29 = function () {
    return this.j1x_1;
  };
  MutableSnapshot.$metadata$ = classMeta('MutableSnapshot', undefined, undefined, undefined, undefined, Snapshot.prototype);
  function Success() {
    Success_instance = this;
    SnapshotApplyResult.call(this);
    this.u29_1 = 0;
  }
  Success.$metadata$ = objectMeta('Success', undefined, undefined, undefined, undefined, SnapshotApplyResult.prototype);
  var Success_instance;
  function Success_getInstance() {
    if (Success_instance == null)
      new Success();
    return Success_instance;
  }
  function Failure(snapshot) {
    SnapshotApplyResult.call(this);
    this.w29_1 = snapshot;
    this.x29_1 = 8;
  }
  Failure.$metadata$ = classMeta('Failure', undefined, undefined, undefined, undefined, SnapshotApplyResult.prototype);
  function SnapshotApplyResult() {
    this.y29_1 = 0;
  }
  SnapshotApplyResult.$metadata$ = classMeta('SnapshotApplyResult');
  function GlobalSnapshot$_init_$lambda_36kgl8($tmp0_safe_receiver) {
    return function (state) {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $tmp0_safe_receiver.f() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $tmp0_safe_receiver.g(index);
          // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(state);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function GlobalSnapshot$takeNestedSnapshot$lambda($readObserver) {
    return function (invalid) {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      tmp$ret$0 = tmp0;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      return new ReadonlySnapshot(tmp$ret$3, invalid, $readObserver);
    };
  }
  function GlobalSnapshot$takeNestedMutableSnapshot$lambda($readObserver, $writeObserver) {
    return function (invalid) {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      tmp$ret$0 = tmp0;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      return new MutableSnapshot(tmp$ret$3, invalid, $readObserver, $writeObserver);
    };
  }
  function GlobalSnapshot(id, invalid) {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$4;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = get_globalWriteObservers();
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      tmp = toMutableList(get_globalWriteObservers());
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>' call
      var tmp0_elvis_lhs = singleOrNull(tmp0_safe_receiver);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp_1 = GlobalSnapshot$_init_$lambda_36kgl8(tmp0_safe_receiver);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp$ret$1 = tmp_1;
      tmp$ret$2 = tmp$ret$1;
      tmp_0 = tmp$ret$2;
    }
    tmp$ret$3 = tmp_0;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    MutableSnapshot.call(this, id, invalid, null, tmp$ret$6);
  }
  GlobalSnapshot.prototype.c28 = function (readObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedSnapshot$lambda(readObserver));
  };
  GlobalSnapshot.prototype.b28 = function (readObserver, writeObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedMutableSnapshot$lambda(readObserver, writeObserver));
  };
  GlobalSnapshot.prototype.y1t = function () {
    advanceGlobalSnapshot_0();
  };
  GlobalSnapshot.prototype.m2a = function (snapshot) {
    unsupported();
  };
  GlobalSnapshot.prototype.r28 = function (snapshot) {
    return this.m2a(snapshot);
  };
  GlobalSnapshot.prototype.n2a = function (snapshot) {
    unsupported();
  };
  GlobalSnapshot.prototype.q28 = function (snapshot) {
    return this.n2a(snapshot);
  };
  GlobalSnapshot.prototype.l1x = function () {
    throw IllegalStateException_init_$Create$('Cannot apply the global snapshot directly. Call Snapshot.advanceGlobalSnapshot');
  };
  GlobalSnapshot.prototype.vk = function () {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.l28();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  GlobalSnapshot.$metadata$ = classMeta('GlobalSnapshot', undefined, undefined, undefined, undefined, MutableSnapshot.prototype);
  function sync(block) {
    init_properties_Snapshot_kt_28wf56();
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    tmp$ret$0 = block();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function trackPinning(id, invalid) {
    init_properties_Snapshot_kt_28wf56();
    var pinned = invalid.o2a(id);
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.trackPinning.<anonymous>' call
    tmp$ret$0 = get_pinningTable().u2a(pinned);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  }
  function StateObject() {
  }
  StateObject.$metadata$ = interfaceMeta('StateObject');
  function releasePinningLocked(handle) {
    init_properties_Snapshot_kt_28wf56();
    get_pinningTable().v2a(handle);
  }
  function currentSnapshot() {
    init_properties_Snapshot_kt_28wf56();
    var tmp0_elvis_lhs = get_threadSnapshot().wo();
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().wo() : tmp0_elvis_lhs;
  }
  function _get_currentSnapshot__9vker0($this) {
    var tmp0_elvis_lhs = $this.j2b_1;
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().wo() : tmp0_elvis_lhs;
  }
  function TransparentObserverMutableSnapshot(previousSnapshot, specifiedReadObserver, specifiedWriteObserver, mergeParentObservers, ownsPreviousSnapshot) {
    var tmp = Companion_getInstance_10().f29_1;
    var tmp0_safe_receiver = previousSnapshot;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1t();
    var tmp_0 = mergedReadObserver(specifiedReadObserver, tmp1_elvis_lhs == null ? get_currentGlobalSnapshot().wo().v1t() : tmp1_elvis_lhs, mergeParentObservers);
    var tmp2_safe_receiver = previousSnapshot;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.p28();
    MutableSnapshot.call(this, 0, tmp, tmp_0, mergedWriteObserver(specifiedWriteObserver, tmp3_elvis_lhs == null ? get_currentGlobalSnapshot().wo().p28() : tmp3_elvis_lhs));
    this.j2b_1 = previousSnapshot;
    this.k2b_1 = specifiedReadObserver;
    this.l2b_1 = specifiedWriteObserver;
    this.m2b_1 = mergeParentObservers;
    this.n2b_1 = ownsPreviousSnapshot;
  }
  TransparentObserverMutableSnapshot.prototype.vk = function () {
    this.l1l_1 = true;
    if (this.n2b_1) {
      var tmp0_safe_receiver = this.j2b_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.vk();
      }
    }
  };
  TransparentObserverMutableSnapshot.prototype.j28 = function (value) {
    unsupported();
  };
  TransparentObserverMutableSnapshot.prototype.o1l = function () {
    return _get_currentSnapshot__9vker0(this).o1l();
  };
  TransparentObserverMutableSnapshot.prototype.i28 = function (value) {
    unsupported();
  };
  TransparentObserverMutableSnapshot.prototype.h28 = function () {
    return _get_currentSnapshot__9vker0(this).h28();
  };
  TransparentObserverMutableSnapshot.prototype.e29 = function (value) {
    unsupported();
  };
  TransparentObserverMutableSnapshot.prototype.g28 = function () {
    return _get_currentSnapshot__9vker0(this).g28();
  };
  TransparentObserverMutableSnapshot.prototype.k28 = function () {
    return _get_currentSnapshot__9vker0(this).k28();
  };
  TransparentObserverMutableSnapshot.prototype.l1x = function () {
    return _get_currentSnapshot__9vker0(this).l1x();
  };
  TransparentObserverMutableSnapshot.prototype.s28 = function (state) {
    return _get_currentSnapshot__9vker0(this).s28(state);
  };
  TransparentObserverMutableSnapshot.prototype.c28 = function (readObserver) {
    var tmp = this.v1t();
    var mergedReadObserver = mergedReadObserver$default(readObserver, tmp, false, 4, null);
    var tmp_0;
    if (!this.m2b_1) {
      tmp_0 = createTransparentSnapshotWithNoParentReadObserver(_get_currentSnapshot__9vker0(this).c28(null), mergedReadObserver, true);
    } else {
      tmp_0 = _get_currentSnapshot__9vker0(this).c28(mergedReadObserver);
    }
    return tmp_0;
  };
  TransparentObserverMutableSnapshot.prototype.b28 = function (readObserver, writeObserver) {
    var tmp = this.v1t();
    var mergedReadObserver = mergedReadObserver$default(readObserver, tmp, false, 4, null);
    var mergedWriteObserver_0 = mergedWriteObserver(writeObserver, this.p28());
    var tmp_0;
    if (!this.m2b_1) {
      var nestedSnapshot = _get_currentSnapshot__9vker0(this).b28(null, mergedWriteObserver_0);
      tmp_0 = new TransparentObserverMutableSnapshot(nestedSnapshot, mergedReadObserver, mergedWriteObserver_0, false, true);
    } else {
      tmp_0 = _get_currentSnapshot__9vker0(this).b28(mergedReadObserver, mergedWriteObserver_0);
    }
    return tmp_0;
  };
  TransparentObserverMutableSnapshot.prototype.y1t = function () {
    return _get_currentSnapshot__9vker0(this).y1t();
  };
  TransparentObserverMutableSnapshot.prototype.n2a = function (snapshot) {
    unsupported();
  };
  TransparentObserverMutableSnapshot.prototype.q28 = function (snapshot) {
    return this.n2a(snapshot);
  };
  TransparentObserverMutableSnapshot.prototype.m2a = function (snapshot) {
    unsupported();
  };
  TransparentObserverMutableSnapshot.prototype.r28 = function (snapshot) {
    return this.m2a(snapshot);
  };
  TransparentObserverMutableSnapshot.$metadata$ = classMeta('TransparentObserverMutableSnapshot', undefined, undefined, undefined, undefined, MutableSnapshot.prototype);
  function createTransparentSnapshotWithNoParentReadObserver(previousSnapshot, readObserver, ownsPreviousSnapshot) {
    init_properties_Snapshot_kt_28wf56();
    var tmp;
    var tmp_0;
    if (previousSnapshot instanceof MutableSnapshot) {
      tmp_0 = true;
    } else {
      tmp_0 = previousSnapshot == null;
    }
    if (tmp_0) {
      tmp = new TransparentObserverMutableSnapshot(previousSnapshot instanceof MutableSnapshot ? previousSnapshot : null, readObserver, null, false, ownsPreviousSnapshot);
    } else {
      tmp = new TransparentObserverSnapshot(previousSnapshot, readObserver, false, ownsPreviousSnapshot);
    }
    return tmp;
  }
  function createTransparentSnapshotWithNoParentReadObserver$default(previousSnapshot, readObserver, ownsPreviousSnapshot, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      readObserver = null;
    if (!(($mask0 & 4) === 0))
      ownsPreviousSnapshot = false;
    return createTransparentSnapshotWithNoParentReadObserver(previousSnapshot, readObserver, ownsPreviousSnapshot);
  }
  function advanceGlobalSnapshot(block) {
    init_properties_Snapshot_kt_28wf56();
    var tmp = get_snapshotInitializer();
    var previousGlobalSnapshot = tmp instanceof GlobalSnapshot ? tmp : THROW_CCE();
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    previousGlobalSnapshot = get_currentGlobalSnapshot().wo();
    tmp$ret$0 = takeNewGlobalSnapshot(previousGlobalSnapshot, block);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var result = tmp$ret$3;
    var modified = previousGlobalSnapshot.g28();
    if (!(modified == null)) {
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$5;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
      tmp$ret$4 = toMutableList(get_applyObservers());
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = tmp$ret$6;
      var observers = tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = observers.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = observers.g(index);
          // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
          item(modified, previousGlobalSnapshot);
        }
         while (inductionVariable <= last);
    }
    return result;
  }
  function advanceGlobalSnapshot_0() {
    init_properties_Snapshot_kt_28wf56();
    return advanceGlobalSnapshot(advanceGlobalSnapshot$lambda);
  }
  function NestedReadonlySnapshot$readObserver$lambda($readObserver, $tmp0_safe_receiver) {
    return function (state) {
      $readObserver(state);
      $tmp0_safe_receiver(state);
      return Unit_getInstance();
    };
  }
  function NestedReadonlySnapshot(id, invalid, readObserver, parent) {
    Snapshot.call(this, id, invalid);
    this.t2b_1 = parent;
    this.t2b_1.q28(this);
    var tmp = this;
    var tmp0_safe_receiver = readObserver;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.NestedReadonlySnapshot.readObserver.<anonymous>' call
      var tmp0_safe_receiver_0 = this.t2b_1.v1t();
      var tmp_1;
      if (tmp0_safe_receiver_0 == null) {
        tmp_1 = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.snapshots.NestedReadonlySnapshot.readObserver.<anonymous>.<anonymous>' call
        tmp$ret$0 = NestedReadonlySnapshot$readObserver$lambda(readObserver, tmp0_safe_receiver_0);
        tmp$ret$1 = tmp$ret$0;
        tmp_1 = tmp$ret$1;
      }
      var tmp1_elvis_lhs = tmp_1;
      tmp$ret$2 = tmp1_elvis_lhs == null ? readObserver : tmp1_elvis_lhs;
      tmp$ret$3 = tmp$ret$2;
      tmp_0 = tmp$ret$3;
    }
    var tmp1_elvis_lhs_0 = tmp_0;
    tmp.u2b_1 = tmp1_elvis_lhs_0 == null ? this.t2b_1.v1t() : tmp1_elvis_lhs_0;
  }
  NestedReadonlySnapshot.prototype.ik = function () {
    return this.t2b_1;
  };
  NestedReadonlySnapshot.prototype.k28 = function () {
    return true;
  };
  NestedReadonlySnapshot.prototype.c28 = function (readObserver) {
    return new NestedReadonlySnapshot(this.o1l(), this.h28(), readObserver, this.t2b_1);
  };
  NestedReadonlySnapshot.prototype.y1t = function () {
  };
  NestedReadonlySnapshot.prototype.v1t = function () {
    return this.u2b_1;
  };
  NestedReadonlySnapshot.prototype.vk = function () {
    if (!this.l1l_1) {
      if (!(this.o1l() === this.t2b_1.o1l())) {
        this.t28();
      }
      this.t2b_1.r28(this);
      Snapshot.prototype.vk.call(this);
    }
  };
  NestedReadonlySnapshot.prototype.p28 = function () {
    return null;
  };
  NestedReadonlySnapshot.prototype.v2b = function (state) {
    reportReadonlySnapshotWrite();
  };
  NestedReadonlySnapshot.prototype.s28 = function (state) {
    return this.v2b(state);
  };
  NestedReadonlySnapshot.prototype.m2a = function (snapshot) {
    unsupported();
  };
  NestedReadonlySnapshot.prototype.r28 = function (snapshot) {
    return this.m2a(snapshot);
  };
  NestedReadonlySnapshot.prototype.n2a = function (snapshot) {
    unsupported();
  };
  NestedReadonlySnapshot.prototype.q28 = function (snapshot) {
    return this.n2a(snapshot);
  };
  NestedReadonlySnapshot.$metadata$ = classMeta('NestedReadonlySnapshot', undefined, undefined, undefined, undefined, Snapshot.prototype);
  function ReadonlySnapshot(id, invalid, readObserver) {
    Snapshot.call(this, id, invalid);
    this.b2c_1 = readObserver;
    this.c2c_1 = 1;
  }
  ReadonlySnapshot.prototype.v1t = function () {
    return this.b2c_1;
  };
  ReadonlySnapshot.prototype.k28 = function () {
    return true;
  };
  ReadonlySnapshot.prototype.p28 = function () {
    return null;
  };
  ReadonlySnapshot.prototype.c28 = function (readObserver) {
    validateOpen(this);
    return new NestedReadonlySnapshot(this.o1l(), this.h28(), readObserver, this);
  };
  ReadonlySnapshot.prototype.y1t = function () {
  };
  ReadonlySnapshot.prototype.vk = function () {
    if (!this.l1l_1) {
      this.r28(this);
      Snapshot.prototype.vk.call(this);
    }
  };
  ReadonlySnapshot.prototype.q28 = function (snapshot) {
    var tmp0_this = this;
    var tmp1 = tmp0_this.c2c_1;
    tmp0_this.c2c_1 = tmp1 + 1 | 0;
  };
  ReadonlySnapshot.prototype.r28 = function (snapshot) {
    var tmp0_this = this;
    tmp0_this.c2c_1 = tmp0_this.c2c_1 - 1 | 0;
    if (tmp0_this.c2c_1 === 0) {
      this.t28();
    }
  };
  ReadonlySnapshot.prototype.s28 = function (state) {
    reportReadonlySnapshotWrite();
  };
  ReadonlySnapshot.$metadata$ = classMeta('ReadonlySnapshot', undefined, undefined, undefined, undefined, Snapshot.prototype);
  function _get_currentSnapshot__9vker0_0($this) {
    var tmp0_elvis_lhs = $this.i2c_1;
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().wo() : tmp0_elvis_lhs;
  }
  function TransparentObserverSnapshot(previousSnapshot, specifiedReadObserver, mergeParentObservers, ownsPreviousSnapshot) {
    Snapshot.call(this, 0, Companion_getInstance_10().f29_1);
    this.i2c_1 = previousSnapshot;
    this.j2c_1 = mergeParentObservers;
    this.k2c_1 = ownsPreviousSnapshot;
    var tmp = this;
    var tmp0_safe_receiver = this.i2c_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1t();
    tmp.l2c_1 = mergedReadObserver(specifiedReadObserver, tmp1_elvis_lhs == null ? get_currentGlobalSnapshot().wo().v1t() : tmp1_elvis_lhs, this.j2c_1);
    this.m2c_1 = null;
    this.n2c_1 = this;
  }
  TransparentObserverSnapshot.prototype.v1t = function () {
    return this.l2c_1;
  };
  TransparentObserverSnapshot.prototype.p28 = function () {
    return this.m2c_1;
  };
  TransparentObserverSnapshot.prototype.vk = function () {
    this.l1l_1 = true;
    if (this.k2c_1) {
      var tmp0_safe_receiver = this.i2c_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.vk();
      }
    }
  };
  TransparentObserverSnapshot.prototype.o1l = function () {
    return _get_currentSnapshot__9vker0_0(this).o1l();
  };
  TransparentObserverSnapshot.prototype.h28 = function () {
    return _get_currentSnapshot__9vker0_0(this).h28();
  };
  TransparentObserverSnapshot.prototype.k28 = function () {
    return _get_currentSnapshot__9vker0_0(this).k28();
  };
  TransparentObserverSnapshot.prototype.s28 = function (state) {
    return _get_currentSnapshot__9vker0_0(this).s28(state);
  };
  TransparentObserverSnapshot.prototype.c28 = function (readObserver) {
    var mergedReadObserver = mergedReadObserver$default(readObserver, this.l2c_1, false, 4, null);
    var tmp;
    if (!this.j2c_1) {
      tmp = createTransparentSnapshotWithNoParentReadObserver(_get_currentSnapshot__9vker0_0(this).c28(null), mergedReadObserver, true);
    } else {
      tmp = _get_currentSnapshot__9vker0_0(this).c28(mergedReadObserver);
    }
    return tmp;
  };
  TransparentObserverSnapshot.prototype.y1t = function () {
    return _get_currentSnapshot__9vker0_0(this).y1t();
  };
  TransparentObserverSnapshot.prototype.n2a = function (snapshot) {
    unsupported();
  };
  TransparentObserverSnapshot.prototype.q28 = function (snapshot) {
    return this.n2a(snapshot);
  };
  TransparentObserverSnapshot.prototype.m2a = function (snapshot) {
    unsupported();
  };
  TransparentObserverSnapshot.prototype.r28 = function (snapshot) {
    return this.m2a(snapshot);
  };
  TransparentObserverSnapshot.$metadata$ = classMeta('TransparentObserverSnapshot', undefined, undefined, undefined, undefined, Snapshot.prototype);
  function deactivate($this) {
    if (!$this.c2d_1) {
      $this.c2d_1 = true;
      $this.b2d_1.r28($this);
    }
  }
  function NestedMutableSnapshot(id, invalid, readObserver, writeObserver, parent) {
    MutableSnapshot.call(this, id, invalid, readObserver, writeObserver);
    this.b2d_1 = parent;
    this.c2d_1 = false;
    this.b2d_1.q28(this);
  }
  NestedMutableSnapshot.prototype.ik = function () {
    return this.b2d_1;
  };
  NestedMutableSnapshot.prototype.vk = function () {
    if (!this.l1l_1) {
      MutableSnapshot.prototype.vk.call(this);
      deactivate(this);
    }
  };
  NestedMutableSnapshot.prototype.l1x = function () {
    if (this.b2d_1.j1x_1 ? true : this.b2d_1.l1l_1)
      return new Failure(this);
    var modified = this.g28();
    var id = this.o1l();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(this.b2d_1, this, this.b2d_1.h28()) : null;
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    validateOpen(this);
    if (modified == null ? true : modified.f() === 0) {
      this.t28();
    } else {
      var result = this.j29(this.b2d_1.o1l(), optimisticMerges_0, this.b2d_1.h28());
      if (!equals(result, Success_getInstance()))
        return result;
      var tmp0_elvis_lhs = this.b2d_1.g28();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = HashSet_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        this.b2d_1.e29(tmp0_also);
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.l(modified);
    }
    if (this.b2d_1.o1l() < id) {
      this.b2d_1.k29();
    }
    this.b2d_1.i28(this.b2d_1.h28().a29(id).l29(this.g1x_1));
    this.b2d_1.h29(id);
    this.b2d_1.p29(this.c29());
    this.b2d_1.r29(this.g1x_1);
    this.b2d_1.q29(this.h1x_1);
    tmp$ret$1 = Unit_getInstance();
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    this.j1x_1 = true;
    deactivate(this);
    return Success_getInstance();
  };
  NestedMutableSnapshot.$metadata$ = classMeta('NestedMutableSnapshot', undefined, undefined, undefined, undefined, MutableSnapshot.prototype);
  function addRange(_this__u8e3s4, from, until) {
    init_properties_Snapshot_kt_28wf56();
    var result = _this__u8e3s4;
    var inductionVariable = from;
    if (inductionVariable < until)
      do {
        var invalidId = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result.i29(invalidId);
      }
       while (inductionVariable < until);
    return result;
  }
  function mergedReadObserver(readObserver, parentObserver, mergeReadObserver) {
    init_properties_Snapshot_kt_28wf56();
    var parentObserver_0 = mergeReadObserver ? parentObserver : null;
    var tmp;
    if ((!(readObserver == null) ? !(parentObserver_0 == null) : false) ? !equals(readObserver, parentObserver_0) : false) {
      tmp = mergedReadObserver$lambda(readObserver, parentObserver_0);
    } else {
      var tmp0_elvis_lhs = readObserver;
      tmp = tmp0_elvis_lhs == null ? parentObserver_0 : tmp0_elvis_lhs;
    }
    return tmp;
  }
  function mergedReadObserver$default(readObserver, parentObserver, mergeReadObserver, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      mergeReadObserver = true;
    return mergedReadObserver(readObserver, parentObserver, mergeReadObserver);
  }
  function mergedWriteObserver(writeObserver, parentObserver) {
    init_properties_Snapshot_kt_28wf56();
    var tmp;
    if ((!(writeObserver == null) ? !(parentObserver == null) : false) ? !equals(writeObserver, parentObserver) : false) {
      tmp = mergedWriteObserver$lambda(writeObserver, parentObserver);
    } else {
      var tmp0_elvis_lhs = writeObserver;
      tmp = tmp0_elvis_lhs == null ? parentObserver : tmp0_elvis_lhs;
    }
    return tmp;
  }
  function StateRecord() {
    this.p1t_1 = currentSnapshot().o1l();
    this.q1t_1 = null;
    this.r1t_1 = 8;
  }
  StateRecord.prototype.s1t = function (_set____db54di) {
    this.p1t_1 = _set____db54di;
  };
  StateRecord.prototype.t1t = function () {
    return this.p1t_1;
  };
  StateRecord.prototype.u1t = function (_set____db54di) {
    this.q1t_1 = _set____db54di;
  };
  StateRecord.$metadata$ = classMeta('StateRecord');
  function optimisticMerges(currentSnapshot, applyingSnapshot, invalidSnapshots) {
    init_properties_Snapshot_kt_28wf56();
    var modified = applyingSnapshot.g28();
    var id = currentSnapshot.o1l();
    if (modified == null)
      return null;
    var start = applyingSnapshot.h28().i29(applyingSnapshot.o1l()).n29(applyingSnapshot.g1x_1);
    var result = null;
    var tmp0_iterator = modified.c();
    $l$loop_0: while (tmp0_iterator.d()) {
      var state = tmp0_iterator.e();
      var first = state.k1t();
      var tmp1_elvis_lhs = readable(first, id, invalidSnapshots);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var current = tmp;
      var tmp2_elvis_lhs = readable(first, id, start);
      var tmp_0;
      if (tmp2_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp_0 = tmp2_elvis_lhs;
      }
      var previous = tmp_0;
      if (!equals(current, previous)) {
        var tmp3_elvis_lhs = readable(first, applyingSnapshot.o1l(), applyingSnapshot.h28());
        var tmp_1;
        if (tmp3_elvis_lhs == null) {
          readError();
        } else {
          tmp_1 = tmp3_elvis_lhs;
        }
        var applied = tmp_1;
        var merged = state.a1u(previous, current, applied);
        if (!(merged == null)) {
          // Inline function 'kotlin.collections.set' call
          var tmp4_elvis_lhs = result;
          var tmp_2;
          if (tmp4_elvis_lhs == null) {
            var tmp$ret$1;
            // Inline function 'kotlin.also' call
            var tmp$ret$0;
            // Inline function 'kotlin.collections.hashMapOf' call
            tmp$ret$0 = HashMap_init_$Create$();
            var tmp0_also = tmp$ret$0;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>' call
            result = tmp0_also;
            tmp$ret$1 = tmp0_also;
            tmp_2 = tmp$ret$1;
          } else {
            tmp_2 = tmp4_elvis_lhs;
          }
          var tmp1_set = tmp_2;
          tmp1_set.q(current, merged);
        } else {
          return null;
        }
      }
    }
    return result;
  }
  function validateOpen(snapshot) {
    init_properties_Snapshot_kt_28wf56();
    if (!get_openSnapshots().g(snapshot.o1l())) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Snapshot is not open');
    }
  }
  function takeNewGlobalSnapshot(previousGlobalSnapshot, block) {
    init_properties_Snapshot_kt_28wf56();
    var result = block(get_openSnapshots().a29(previousGlobalSnapshot.o1l()));
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var globalId = tmp0;
    set_openSnapshots(get_openSnapshots().a29(previousGlobalSnapshot.o1l()));
    get_currentGlobalSnapshot().v1q(new GlobalSnapshot(globalId, get_openSnapshots()));
    previousGlobalSnapshot.vk();
    set_openSnapshots(get_openSnapshots().i29(globalId));
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return result;
  }
  function readable(r, id, invalid) {
    init_properties_Snapshot_kt_28wf56();
    var current = r;
    var candidate = null;
    while (!(current == null)) {
      if (valid(current, id, invalid)) {
        candidate = candidate == null ? current : candidate.p1t_1 < current.p1t_1 ? current : candidate;
      }
      current = current.q1t_1;
    }
    if (!(candidate == null)) {
      return candidate instanceof StateRecord ? candidate : THROW_CCE();
    }
    return null;
  }
  function readError() {
    init_properties_Snapshot_kt_28wf56();
    // Inline function 'kotlin.error' call
    var tmp0_error = 'Reading a state that was created after the snapshot was taken or in a snapshot that has not yet been applied';
    throw IllegalStateException_init_$Create$(toString(tmp0_error));
  }
  function takeNewSnapshot(block) {
    init_properties_Snapshot_kt_28wf56();
    return advanceGlobalSnapshot(takeNewSnapshot$lambda(block));
  }
  function reportReadonlySnapshotWrite() {
    init_properties_Snapshot_kt_28wf56();
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('Cannot modify a state object in a read-only snapshot');
  }
  function valid(data, snapshot, invalid) {
    init_properties_Snapshot_kt_28wf56();
    return valid_0(snapshot, data.p1t_1, invalid);
  }
  function valid_0(currentSnapshot, candidateSnapshot, invalid) {
    init_properties_Snapshot_kt_28wf56();
    return (!(candidateSnapshot === 0) ? candidateSnapshot <= currentSnapshot : false) ? !invalid.g(candidateSnapshot) : false;
  }
  function readable_0(_this__u8e3s4, state) {
    init_properties_Snapshot_kt_28wf56();
    var snapshot = Companion_getInstance_9().s19();
    var tmp0_safe_receiver = snapshot.v1t();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
    var tmp1_elvis_lhs = readable(_this__u8e3s4, snapshot.o1l(), snapshot.h28());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.readable.<anonymous>' call
      var syncSnapshot = Companion_getInstance_9().s19();
      tmp$ret$0 = readable(_this__u8e3s4, syncSnapshot.o1l(), syncSnapshot.h28());
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      tmp = tmp$ret$3;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      readError();
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    return tmp_0;
  }
  function withCurrent(_this__u8e3s4, block) {
    init_properties_Snapshot_kt_28wf56();
    return block(current(_this__u8e3s4));
  }
  function overwritable(_this__u8e3s4, state, candidate, block) {
    init_properties_Snapshot_kt_28wf56();
    var snapshot = get_snapshotInitializer();
    var tmp$ret$4;
    // Inline function 'kotlin.also' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
    snapshot = Companion_getInstance_9().s19();
    tmp$ret$0 = block(overwritableRecord(_this__u8e3s4, state, snapshot, candidate));
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp0_also = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
    notifyWrite(snapshot, state);
    tmp$ret$4 = tmp0_also;
    return tmp$ret$4;
  }
  function current(r) {
    init_properties_Snapshot_kt_28wf56();
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp0_let = Companion_getInstance_9().s19();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>' call
    var tmp0_elvis_lhs = readable(r, tmp0_let.o1l(), tmp0_let.h28());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = Companion_getInstance_9().s19();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>.<anonymous>' call
      tmp$ret$0 = readable(r, tmp0_let_0.o1l(), tmp0_let_0.h28());
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      tmp = tmp$ret$5;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      readError();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    tmp$ret$6 = tmp_0;
    tmp$ret$7 = tmp$ret$6;
    return tmp$ret$7;
  }
  function notifyWrite(snapshot, state) {
    init_properties_Snapshot_kt_28wf56();
    var tmp0_safe_receiver = snapshot.p28();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
  }
  function overwritableRecord(_this__u8e3s4, state, snapshot, candidate) {
    init_properties_Snapshot_kt_28wf56();
    if (snapshot.k28()) {
      snapshot.s28(state);
    }
    var id = snapshot.o1l();
    if (candidate.p1t_1 === id)
      return candidate;
    var newData = newOverwritableRecord(_this__u8e3s4, state);
    newData.p1t_1 = id;
    snapshot.s28(state);
    return newData;
  }
  function newOverwritableRecord(_this__u8e3s4, state) {
    init_properties_Snapshot_kt_28wf56();
    var tmp = used(state);
    var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof StateRecord) ? tmp : THROW_CCE();
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecord.<anonymous>' call
      tmp0_safe_receiver.p1t_1 = IntCompanionObject_getInstance().c1_1;
      tmp$ret$0 = tmp0_safe_receiver;
      tmp_0 = tmp$ret$0;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = _this__u8e3s4.h1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecord.<anonymous>' call
      tmp0_apply.p1t_1 = IntCompanionObject_getInstance().c1_1;
      tmp0_apply.q1t_1 = state.k1t();
      state.z1t(tmp0_apply instanceof StateRecord ? tmp0_apply : THROW_CCE());
      tmp$ret$1 = tmp0_apply;
      var tmp_2 = tmp$ret$1;
      tmp_1 = tmp_2 instanceof StateRecord ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function used(state) {
    init_properties_Snapshot_kt_28wf56();
    var current = state.k1t();
    var validRecord = null;
    var reuseLimit = get_pinningTable().d2d(get_nextSnapshotId()) - 1 | 0;
    var invalid = Companion_getInstance_10().f29_1;
    while (!(current == null)) {
      var currentId = current.p1t_1;
      if (currentId === 0) {
        return current;
      }
      if (valid(current, reuseLimit, invalid)) {
        if (validRecord == null) {
          validRecord = current;
        } else {
          return current.p1t_1 < validRecord.p1t_1 ? current : validRecord;
        }
      }
      current = current.q1t_1;
    }
    return null;
  }
  function writable(_this__u8e3s4, state, block) {
    init_properties_Snapshot_kt_28wf56();
    var snapshot = get_snapshotInitializer();
    var tmp$ret$4;
    // Inline function 'kotlin.also' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    snapshot = Companion_getInstance_9().s19();
    tmp$ret$0 = block(writableRecord(_this__u8e3s4, state, snapshot));
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp0_also = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    notifyWrite(snapshot, state);
    tmp$ret$4 = tmp0_also;
    return tmp$ret$4;
  }
  function current_0(r, snapshot) {
    init_properties_Snapshot_kt_28wf56();
    var tmp0_elvis_lhs = readable(r, snapshot.o1l(), snapshot.h28());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function newWritableRecord(_this__u8e3s4, state, snapshot) {
    init_properties_Snapshot_kt_28wf56();
    var newData = newOverwritableRecord(_this__u8e3s4, state);
    newData.g1t(_this__u8e3s4);
    newData.p1t_1 = snapshot.o1l();
    return newData;
  }
  function writableRecord(_this__u8e3s4, state, snapshot) {
    init_properties_Snapshot_kt_28wf56();
    if (snapshot.k28()) {
      snapshot.s28(state);
    }
    var id = snapshot.o1l();
    var tmp0_elvis_lhs = readable(_this__u8e3s4, id, snapshot.h28());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var readData = tmp;
    if (readData.p1t_1 === snapshot.o1l())
      return readData;
    var newData = newWritableRecord(readData, state, snapshot);
    snapshot.s28(state);
    return newData;
  }
  function emptyLambda$lambda(it) {
    init_properties_Snapshot_kt_28wf56();
    return Unit_getInstance();
  }
  function advanceGlobalSnapshot$lambda(it) {
    init_properties_Snapshot_kt_28wf56();
    return Unit_getInstance();
  }
  function mergedReadObserver$lambda($readObserver, $parentObserver) {
    return function (state) {
      $readObserver(state);
      $parentObserver(state);
      return Unit_getInstance();
    };
  }
  function mergedWriteObserver$lambda($writeObserver, $parentObserver) {
    return function (state) {
      $writeObserver(state);
      $parentObserver(state);
      return Unit_getInstance();
    };
  }
  function takeNewSnapshot$lambda($block) {
    return function (invalid) {
      var result = $block(invalid);
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      set_openSnapshots(get_openSnapshots().i29(result.o1l()));
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      return result;
    };
  }
  var properties_initialized_Snapshot_kt_2vlcoq;
  function init_properties_Snapshot_kt_28wf56() {
    if (properties_initialized_Snapshot_kt_2vlcoq) {
    } else {
      properties_initialized_Snapshot_kt_2vlcoq = true;
      emptyLambda = emptyLambda$lambda;
      threadSnapshot = new SnapshotThreadLocal();
      lock = createSynchronizedObject();
      openSnapshots = Companion_getInstance_10().f29_1;
      nextSnapshotId = 1;
      pinningTable = new SnapshotDoubleIndexHeap();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      applyObservers = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0_0 = ArrayList_init_$Create$();
      globalWriteObservers = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'kotlin.also' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      var tmp0_also = new GlobalSnapshot(tmp0, Companion_getInstance_10().f29_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.currentGlobalSnapshot.<anonymous>' call
      set_openSnapshots(get_openSnapshots().i29(tmp0_also.o1l()));
      tmp$ret$0_1 = tmp0_also;
      currentGlobalSnapshot = new AtomicReference(tmp$ret$0_1);
      snapshotInitializer = get_currentGlobalSnapshot().wo();
    }
  }
  function shiftUp($this, index) {
    var values = $this.q2a_1;
    var value = values[index];
    var current = index;
    $l$loop: while (current > 0) {
      var parent = ((current + 1 | 0) >> 1) - 1 | 0;
      if (values[parent] > value) {
        swap($this, parent, current);
        current = parent;
        continue $l$loop;
      }
      break $l$loop;
    }
  }
  function shiftDown($this, index) {
    var values = $this.q2a_1;
    var half = $this.p2a_1 >> 1;
    var current = index;
    while (current < half) {
      var right = (current + 1 | 0) << 1;
      var left = right - 1 | 0;
      if (right < $this.p2a_1 ? values[right] < values[left] : false) {
        if (values[right] < values[current]) {
          swap($this, right, current);
          current = right;
        } else
          return Unit_getInstance();
      } else if (values[left] < values[current]) {
        swap($this, left, current);
        current = left;
      } else
        return Unit_getInstance();
    }
  }
  function swap($this, a, b) {
    var values = $this.q2a_1;
    var index = $this.r2a_1;
    var handles = $this.s2a_1;
    var t = values[a];
    values[a] = values[b];
    values[b] = t;
    t = index[a];
    index[a] = index[b];
    index[b] = t;
    handles[index[a]] = a;
    handles[index[b]] = b;
  }
  function ensure($this, atLeast) {
    var capacity = $this.q2a_1.length;
    if (atLeast <= capacity)
      return Unit_getInstance();
    var newCapacity = imul(capacity, 2);
    var newValues = new Int32Array(newCapacity);
    var newIndex = new Int32Array(newCapacity);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.q2a_1;
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
    tmp$ret$2 = newValues;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, 0, 0, tmp1_copyInto);
    tmp$ret$4 = newValues;
    var tmp$ret$9;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = $this.r2a_1;
    var tmp3_copyInto = tmp2_copyInto.length;
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
    tmp$ret$7 = newIndex;
    tmp$ret$8 = tmp$ret$7;
    arrayCopy(tmp_0, tmp$ret$8, 0, 0, tmp3_copyInto);
    tmp$ret$9 = newIndex;
    $this.q2a_1 = newValues;
    $this.r2a_1 = newIndex;
  }
  function allocateHandle($this) {
    var capacity = $this.s2a_1.length;
    if ($this.t2a_1 >= capacity) {
      var tmp = 0;
      var tmp_0 = imul(capacity, 2);
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotDoubleIndexHeap.allocateHandle.<anonymous>' call
        tmp$ret$0 = tmp_2 + 1 | 0;
        tmp_1[tmp_2] = tmp$ret$0;
        tmp = tmp + 1 | 0;
      }
      var newHandles = tmp_1;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.s2a_1;
      var tmp1_copyInto = tmp0_copyInto.length;
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp0_copyInto;
      tmp$ret$2 = tmp$ret$1;
      var tmp_3 = tmp$ret$2;
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = newHandles;
      tmp$ret$4 = tmp$ret$3;
      arrayCopy(tmp_3, tmp$ret$4, 0, 0, tmp1_copyInto);
      tmp$ret$5 = newHandles;
      $this.s2a_1 = newHandles;
    }
    var handle = $this.t2a_1;
    $this.t2a_1 = $this.s2a_1[$this.t2a_1];
    return handle;
  }
  function freeHandle($this, handle) {
    $this.s2a_1[handle] = $this.t2a_1;
    $this.t2a_1 = handle;
  }
  function SnapshotDoubleIndexHeap() {
    this.p2a_1 = 0;
    this.q2a_1 = new Int32Array(16);
    this.r2a_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = 16;
    var tmp_2 = new Int32Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotDoubleIndexHeap.handles.<anonymous>' call
      tmp$ret$0 = tmp_3 + 1 | 0;
      tmp_2[tmp_3] = tmp$ret$0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.s2a_1 = tmp_2;
    this.t2a_1 = 0;
  }
  SnapshotDoubleIndexHeap.prototype.d2d = function (default_0) {
    return this.p2a_1 > 0 ? this.q2a_1[0] : default_0;
  };
  SnapshotDoubleIndexHeap.prototype.u2a = function (value) {
    ensure(this, this.p2a_1 + 1 | 0);
    var tmp0_this = this;
    var tmp1 = tmp0_this.p2a_1;
    tmp0_this.p2a_1 = tmp1 + 1 | 0;
    var i = tmp1;
    var handle = allocateHandle(this);
    this.q2a_1[i] = value;
    this.r2a_1[i] = handle;
    this.s2a_1[handle] = i;
    shiftUp(this, i);
    return handle;
  };
  SnapshotDoubleIndexHeap.prototype.v2a = function (handle) {
    var i = this.s2a_1[handle];
    swap(this, i, this.p2a_1 - 1 | 0);
    var tmp0_this = this;
    var tmp1 = tmp0_this.p2a_1;
    tmp0_this.p2a_1 = tmp1 - 1 | 0;
    shiftUp(this, i);
    shiftDown(this, i);
    freeHandle(this, handle);
  };
  SnapshotDoubleIndexHeap.$metadata$ = classMeta('SnapshotDoubleIndexHeap');
  function Companion_8() {
    Companion_instance_8 = this;
    this.f29_1 = new SnapshotIdSet(new Long(0, 0), new Long(0, 0), 0, null);
  }
  Companion_8.$metadata$ = objectMeta('Companion');
  var Companion_instance_8;
  function Companion_getInstance_10() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function SnapshotIdSet$iterator$slambda(this$0, resultContinuation) {
    this.m2d_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  SnapshotIdSet$iterator$slambda.prototype.v2d = function ($this$sequence, $cont) {
    var tmp = this.w2d($this$sequence, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  SnapshotIdSet$iterator$slambda.prototype.jg = function (p1, $cont) {
    return this.v2d(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $cont);
  };
  SnapshotIdSet$iterator$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 15;
            this.o2d_1 = this.m2d_1.z28_1;
            if (!(this.o2d_1 == null)) {
              this.p2d_1 = intArrayIterator(this.o2d_1);
              this.zf_1 = 1;
              continue $sm;
            } else {
              this.zf_1 = 4;
              continue $sm;
            }

            break;
          case 1:
            if (!this.p2d_1.d()) {
              this.zf_1 = 3;
              continue $sm;
            }

            this.q2d_1 = this.p2d_1.e();
            this.zf_1 = 2;
            suspendResult = this.n2d_1.g4(this.q2d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.zf_1 = 1;
            continue $sm;
          case 3:
            this.zf_1 = 4;
            continue $sm;
          case 4:
            if (!this.m2d_1.x28_1.equals(new Long(0, 0))) {
              var tmp_0 = this;
              Companion_getInstance_0();
              tmp_0.r2d_1 = until(0, 64).c();
              this.zf_1 = 5;
              continue $sm;
            } else {
              this.zf_1 = 9;
              continue $sm;
            }

            break;
          case 5:
            if (!this.r2d_1.d()) {
              this.zf_1 = 8;
              continue $sm;
            }

            this.s2d_1 = this.r2d_1.e();
            if (!this.m2d_1.x28_1.r7((new Long(1, 0)).c7(this.s2d_1)).equals(new Long(0, 0))) {
              this.zf_1 = 6;
              suspendResult = this.n2d_1.g4(this.s2d_1 + this.m2d_1.y28_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zf_1 = 7;
              continue $sm;
            }

            break;
          case 6:
            this.zf_1 = 7;
            continue $sm;
          case 7:
            this.zf_1 = 5;
            continue $sm;
          case 8:
            this.zf_1 = 9;
            continue $sm;
          case 9:
            if (!this.m2d_1.w28_1.equals(new Long(0, 0))) {
              var tmp_1 = this;
              Companion_getInstance_0();
              tmp_1.t2d_1 = until(0, 64).c();
              this.zf_1 = 10;
              continue $sm;
            } else {
              this.zf_1 = 14;
              continue $sm;
            }

            break;
          case 10:
            if (!this.t2d_1.d()) {
              this.zf_1 = 13;
              continue $sm;
            }

            this.u2d_1 = this.t2d_1.e();
            if (!this.m2d_1.w28_1.r7((new Long(1, 0)).c7(this.u2d_1)).equals(new Long(0, 0))) {
              this.zf_1 = 11;
              Companion_getInstance_0();
              suspendResult = this.n2d_1.g4((this.u2d_1 + 64 | 0) + this.m2d_1.y28_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zf_1 = 12;
              continue $sm;
            }

            break;
          case 11:
            this.zf_1 = 12;
            continue $sm;
          case 12:
            this.zf_1 = 10;
            continue $sm;
          case 13:
            this.zf_1 = 14;
            continue $sm;
          case 14:
            return Unit_getInstance();
          case 15:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 15) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  SnapshotIdSet$iterator$slambda.prototype.w2d = function ($this$sequence, completion) {
    var i = new SnapshotIdSet$iterator$slambda(this.m2d_1, completion);
    i.n2d_1 = $this$sequence;
    return i;
  };
  SnapshotIdSet$iterator$slambda.$metadata$ = classMeta('SnapshotIdSet$iterator$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function SnapshotIdSet$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SnapshotIdSet$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $cont) {
      return i.v2d($this$sequence, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotIdSet(upperSet, lowerSet, lowerBound, belowBound) {
    Companion_getInstance_10();
    this.w28_1 = upperSet;
    this.x28_1 = lowerSet;
    this.y28_1 = lowerBound;
    this.z28_1 = belowBound;
  }
  SnapshotIdSet.prototype.g = function (bit) {
    var offset = bit - this.y28_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance_0();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      return !(new Long(1, 0)).c7(offset).r7(this.x28_1).equals(new Long(0, 0));
    } else {
      var tmp_0;
      Companion_getInstance_0();
      if (offset >= 64) {
        Companion_getInstance_0();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance_0();
        return !tmp_1.c7(offset - 64 | 0).r7(this.w28_1).equals(new Long(0, 0));
      } else {
        if (offset > 0) {
          return false;
        } else {
          var tmp0_safe_receiver = this.z28_1;
          var tmp_2;
          if (tmp0_safe_receiver == null) {
            tmp_2 = null;
          } else {
            var tmp$ret$1;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$0;
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.get.<anonymous>' call
            tmp$ret$0 = binarySearch(tmp0_safe_receiver, bit) >= 0;
            tmp$ret$1 = tmp$ret$0;
            tmp_2 = tmp$ret$1;
          }
          var tmp1_elvis_lhs = tmp_2;
          return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
        }
      }
    }
  };
  SnapshotIdSet.prototype.i29 = function (bit) {
    var offset = bit - this.y28_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance_0();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).c7(offset);
      if (this.x28_1.r7(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.w28_1, this.x28_1.a8(mask), this.y28_1, this.z28_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance_0();
      if (offset >= 64) {
        Companion_getInstance_0();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance_0();
        var mask_0 = tmp_1.c7(offset - 64 | 0);
        if (this.w28_1.r7(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.w28_1.a8(mask_0), this.x28_1, this.y28_1, this.z28_1);
        }
      } else {
        Companion_getInstance_0();
        if (offset >= imul(64, 2)) {
          if (!this.g(bit)) {
            var newUpperSet = this.w28_1;
            var newLowerSet = this.x28_1;
            var newLowerBound = this.y28_1;
            var newBelowBound = null;
            var tmp_2 = bit + 1 | 0;
            Companion_getInstance_0();
            var tmp_3 = tmp_2 / 64 | 0;
            Companion_getInstance_0();
            var targetLowerBound = imul(tmp_3, 64);
            $l$loop: while (newLowerBound < targetLowerBound) {
              if (!newLowerSet.equals(new Long(0, 0))) {
                if (newBelowBound == null) {
                  var tmp$ret$2;
                  // Inline function 'kotlin.apply' call
                  var tmp$ret$0;
                  // Inline function 'kotlin.collections.mutableListOf' call
                  tmp$ret$0 = ArrayList_init_$Create$();
                  var tmp0_apply = tmp$ret$0;
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                  var tmp0_safe_receiver = this.z28_1;
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    var tmp$ret$1;
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    var indexedObject = tmp0_safe_receiver;
                    var inductionVariable = 0;
                    var last = indexedObject.length;
                    while (inductionVariable < last) {
                      var element = indexedObject[inductionVariable];
                      inductionVariable = inductionVariable + 1 | 0;
                      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>.<anonymous>.<anonymous>' call
                      tmp0_apply.a(element);
                    }
                    tmp$ret$1 = Unit_getInstance();
                  }
                  tmp$ret$2 = tmp0_apply;
                  newBelowBound = tmp$ret$2;
                }
                // Inline function 'kotlin.repeat' call
                Companion_getInstance_0();
                var tmp1_repeat = 64;
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < tmp1_repeat)
                  do {
                    var index = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                    if (!newLowerSet.r7((new Long(1, 0)).c7(index)).equals(new Long(0, 0))) {
                      newBelowBound.a(index + newLowerBound | 0);
                    }
                  }
                   while (inductionVariable_0 < tmp1_repeat);
              }
              if (newUpperSet.equals(new Long(0, 0))) {
                newLowerBound = targetLowerBound;
                newLowerSet = new Long(0, 0);
                break $l$loop;
              }
              newLowerSet = newUpperSet;
              newUpperSet = new Long(0, 0);
              var tmp_4 = newLowerBound;
              Companion_getInstance_0();
              newLowerBound = tmp_4 + 64 | 0;
            }
            var tmp_5 = newUpperSet;
            var tmp_6 = newLowerSet;
            var tmp_7 = newLowerBound;
            var tmp0_safe_receiver_0 = newBelowBound;
            var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : toIntArray(tmp0_safe_receiver_0);
            return (new SnapshotIdSet(tmp_5, tmp_6, tmp_7, tmp1_elvis_lhs == null ? this.z28_1 : tmp1_elvis_lhs)).i29(bit);
          }
        } else {
          var tmp2_elvis_lhs = this.z28_1;
          var tmp_8;
          if (tmp2_elvis_lhs == null) {
            var tmp$ret$3;
            // Inline function 'kotlin.intArrayOf' call
            tmp$ret$3 = new Int32Array([bit]);
            return new SnapshotIdSet(this.w28_1, this.x28_1, this.y28_1, tmp$ret$3);
          } else {
            tmp_8 = tmp2_elvis_lhs;
          }
          var array = tmp_8;
          var location = binarySearch(array, bit);
          if (location < 0) {
            var insertLocation = -(location + 1 | 0) | 0;
            var newSize = array.length + 1 | 0;
            var newBelowBound_0 = new Int32Array(newSize);
            var tmp$ret$8;
            // Inline function 'kotlin.collections.copyInto' call
            var tmp$ret$5;
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$4;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$4 = array;
            tmp$ret$5 = tmp$ret$4;
            var tmp_9 = tmp$ret$5;
            var tmp$ret$7;
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$6;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$6 = newBelowBound_0;
            tmp$ret$7 = tmp$ret$6;
            arrayCopy(tmp_9, tmp$ret$7, 0, 0, insertLocation);
            tmp$ret$8 = newBelowBound_0;
            var tmp$ret$13;
            // Inline function 'kotlin.collections.copyInto' call
            var tmp2_copyInto = insertLocation + 1 | 0;
            var tmp3_copyInto = newSize - 1 | 0;
            var tmp$ret$10;
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$9;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$9 = array;
            tmp$ret$10 = tmp$ret$9;
            var tmp_10 = tmp$ret$10;
            var tmp$ret$12;
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$11;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$11 = newBelowBound_0;
            tmp$ret$12 = tmp$ret$11;
            arrayCopy(tmp_10, tmp$ret$12, tmp2_copyInto, insertLocation, tmp3_copyInto);
            tmp$ret$13 = newBelowBound_0;
            newBelowBound_0[insertLocation] = bit;
            return new SnapshotIdSet(this.w28_1, this.x28_1, this.y28_1, newBelowBound_0);
          }
        }
      }
    }
    return this;
  };
  SnapshotIdSet.prototype.a29 = function (bit) {
    var offset = bit - this.y28_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance_0();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).c7(offset);
      if (!this.x28_1.r7(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.w28_1, this.x28_1.r7(mask.wf()), this.y28_1, this.z28_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance_0();
      if (offset >= 64) {
        Companion_getInstance_0();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance_0();
        var mask_0 = tmp_1.c7(offset - 64 | 0);
        if (!this.w28_1.r7(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.w28_1.r7(mask_0.wf()), this.x28_1, this.y28_1, this.z28_1);
        }
      } else {
        if (offset < 0) {
          var array = this.z28_1;
          if (!(array == null)) {
            var location = binarySearch(array, bit);
            if (location >= 0) {
              var newSize = array.length - 1 | 0;
              if (newSize === 0) {
                return new SnapshotIdSet(this.w28_1, this.x28_1, this.y28_1, null);
              }
              var newBelowBound = new Int32Array(newSize);
              if (location > 0) {
                var tmp$ret$4;
                // Inline function 'kotlin.collections.copyInto' call
                var tmp$ret$1;
                // Inline function 'kotlin.js.unsafeCast' call
                var tmp$ret$0;
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$0 = array;
                tmp$ret$1 = tmp$ret$0;
                var tmp_2 = tmp$ret$1;
                var tmp$ret$3;
                // Inline function 'kotlin.js.unsafeCast' call
                var tmp$ret$2;
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$2 = newBelowBound;
                tmp$ret$3 = tmp$ret$2;
                arrayCopy(tmp_2, tmp$ret$3, 0, 0, location);
                tmp$ret$4 = newBelowBound;
              }
              if (location < newSize) {
                var tmp$ret$9;
                // Inline function 'kotlin.collections.copyInto' call
                var tmp0_copyInto = location + 1 | 0;
                var tmp1_copyInto = newSize + 1 | 0;
                var tmp$ret$6;
                // Inline function 'kotlin.js.unsafeCast' call
                var tmp$ret$5;
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$5 = array;
                tmp$ret$6 = tmp$ret$5;
                var tmp_3 = tmp$ret$6;
                var tmp$ret$8;
                // Inline function 'kotlin.js.unsafeCast' call
                var tmp$ret$7;
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$7 = newBelowBound;
                tmp$ret$8 = tmp$ret$7;
                arrayCopy(tmp_3, tmp$ret$8, location, tmp0_copyInto, tmp1_copyInto);
                tmp$ret$9 = newBelowBound;
              }
              return new SnapshotIdSet(this.w28_1, this.x28_1, this.y28_1, newBelowBound);
            }
          }
        }
      }
    }
    return this;
  };
  SnapshotIdSet.prototype.l29 = function (bits) {
    if (bits === Companion_getInstance_10().f29_1)
      return this;
    if (this === Companion_getInstance_10().f29_1)
      return Companion_getInstance_10().f29_1;
    var tmp;
    if (bits.y28_1 === this.y28_1 ? bits.z28_1 === this.z28_1 : false) {
      tmp = new SnapshotIdSet(this.w28_1.r7(bits.w28_1.wf()), this.x28_1.r7(bits.x28_1.wf()), this.y28_1, this.z28_1);
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.fold' call
      var accumulator = this;
      var tmp0_iterator = bits.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
        var tmp0__anonymous__q1qw7t = accumulator;
        tmp$ret$0 = tmp0__anonymous__q1qw7t.a29(element);
        accumulator = tmp$ret$0;
      }
      tmp$ret$1 = accumulator;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  SnapshotIdSet.prototype.n29 = function (bits) {
    if (bits === Companion_getInstance_10().f29_1)
      return this;
    if (this === Companion_getInstance_10().f29_1)
      return bits;
    var tmp;
    if (bits.y28_1 === this.y28_1 ? bits.z28_1 === this.z28_1 : false) {
      tmp = new SnapshotIdSet(this.w28_1.a8(bits.w28_1), this.x28_1.a8(bits.x28_1), this.y28_1, this.z28_1);
    } else {
      var tmp_0;
      if (this.z28_1 == null) {
        var tmp$ret$1;
        // Inline function 'kotlin.collections.fold' call
        var accumulator = bits;
        var tmp0_iterator = this.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          var tmp0__anonymous__q1qw7t = accumulator;
          tmp$ret$0 = tmp0__anonymous__q1qw7t.i29(element);
          accumulator = tmp$ret$0;
        }
        tmp$ret$1 = accumulator;
        tmp_0 = tmp$ret$1;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.collections.fold' call
        var accumulator_0 = this;
        var tmp0_iterator_0 = bits.c();
        while (tmp0_iterator_0.d()) {
          var element_0 = tmp0_iterator_0.e();
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          var tmp1__anonymous__uwfjfc = accumulator_0;
          tmp$ret$2 = tmp1__anonymous__uwfjfc.i29(element_0);
          accumulator_0 = tmp$ret$2;
        }
        tmp$ret$3 = accumulator_0;
        tmp_0 = tmp$ret$3;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  SnapshotIdSet.prototype.c = function () {
    return sequence(SnapshotIdSet$iterator$slambda_0(this, null)).c();
  };
  SnapshotIdSet.prototype.o2a = function (default_0) {
    var belowBound = this.z28_1;
    if (!(belowBound == null))
      return belowBound[0];
    if (!this.x28_1.equals(new Long(0, 0)))
      return this.y28_1 + lowestBitOf(this.x28_1) | 0;
    if (!this.w28_1.equals(new Long(0, 0))) {
      Companion_getInstance_0();
      return (this.y28_1 + 64 | 0) + lowestBitOf(this.w28_1) | 0;
    }
    return default_0;
  };
  SnapshotIdSet.prototype.toString = function () {
    var tmp = anyToString(this);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(this, 10));
    var tmp0_iterator = this.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.toString.<anonymous>' call
      tmp$ret$0 = item.toString();
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    return tmp + ' [' + fastJoinToString$default(tmp_0, null, null, null, 0, null, null, 63, null) + ']';
  };
  SnapshotIdSet.$metadata$ = classMeta('SnapshotIdSet', [Iterable]);
  function binarySearch(_this__u8e3s4, value) {
    var low = 0;
    var high = _this__u8e3s4.length - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (value > midVal)
        low = mid + 1 | 0;
      else if (value < midVal)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function lowestBitOf(bits) {
    var b = bits;
    var base = 0;
    if (b.r7(new Long(-1, 0)).equals(new Long(0, 0))) {
      base = base + 32 | 0;
      b = b.a7(32);
    }
    if (b.r7(new Long(65535, 0)).equals(new Long(0, 0))) {
      base = base + 16 | 0;
      b = b.a7(16);
    }
    if (b.r7(new Long(255, 0)).equals(new Long(0, 0))) {
      base = base + 8 | 0;
      b = b.a7(8);
    }
    if (b.r7(new Long(15, 0)).equals(new Long(0, 0))) {
      base = base + 4 | 0;
      b = b.a7(4);
    }
    if (!b.r7(new Long(1, 0)).equals(new Long(0, 0)))
      return base;
    if (!b.r7(new Long(2, 0)).equals(new Long(0, 0)))
      return base + 1 | 0;
    if (!b.r7(new Long(4, 0)).equals(new Long(0, 0)))
      return base + 2 | 0;
    if (!b.r7(new Long(8, 0)).equals(new Long(0, 0)))
      return base + 3 | 0;
    return -1;
  }
  function SnapshotMutableState() {
  }
  SnapshotMutableState.$metadata$ = interfaceMeta('SnapshotMutableState', [MutableState]);
  function get_sync() {
    init_properties_SnapshotStateList_kt_7zrdcn();
    return sync_0;
  }
  var sync_0;
  function StateListStateRecord(list) {
    StateRecord.call(this);
    this.a2e_1 = list;
    this.b2e_1 = 0;
  }
  StateListStateRecord.prototype.c2e = function (_set____db54di) {
    this.a2e_1 = _set____db54di;
  };
  StateListStateRecord.prototype.zo = function () {
    return this.a2e_1;
  };
  StateListStateRecord.prototype.d2e = function (_set____db54di) {
    this.b2e_1 = _set____db54di;
  };
  StateListStateRecord.prototype.e2e = function () {
    return this.b2e_1;
  };
  StateListStateRecord.prototype.g1t = function (value) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp = this;
    tmp.a2e_1 = (value instanceof StateListStateRecord ? value : THROW_CCE()).a2e_1;
    this.b2e_1 = value.b2e_1;
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  StateListStateRecord.prototype.h1t = function () {
    return new StateListStateRecord(this.a2e_1);
  };
  StateListStateRecord.$metadata$ = classMeta('StateListStateRecord', undefined, undefined, undefined, undefined, StateRecord.prototype);
  function SnapshotStateList() {
    this.j20_1 = new StateListStateRecord(persistentListOf());
  }
  SnapshotStateList.prototype.k1t = function () {
    return this.j20_1;
  };
  SnapshotStateList.prototype.z1t = function (value) {
    value.q1t_1 = this.j20_1;
    var tmp = this;
    tmp.j20_1 = value instanceof StateListStateRecord ? value : THROW_CCE();
  };
  SnapshotStateList.prototype.e2e = function () {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp = this.j20_1;
    var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.<get-modification>.<anonymous>' call
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    tmp$ret$0 = tmp1__anonymous__uwfjfc.b2e_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  SnapshotStateList.prototype.f2e = function () {
    var tmp = this.j20_1;
    return readable_0(tmp instanceof StateListStateRecord ? tmp : THROW_CCE(), this);
  };
  SnapshotStateList.prototype.f = function () {
    return this.f2e().a2e_1.f();
  };
  SnapshotStateList.prototype.g3 = function (element) {
    return this.f2e().a2e_1.m(element);
  };
  SnapshotStateList.prototype.m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.g3((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SnapshotStateList.prototype.h3 = function (elements) {
    return this.f2e().a2e_1.t1(elements);
  };
  SnapshotStateList.prototype.t1 = function (elements) {
    return this.h3(elements);
  };
  SnapshotStateList.prototype.g = function (index) {
    return this.f2e().a2e_1.g(index);
  };
  SnapshotStateList.prototype.d21 = function (element) {
    return this.f2e().a2e_1.n(element);
  };
  SnapshotStateList.prototype.n = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.d21((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SnapshotStateList.prototype.h = function () {
    return this.f2e().a2e_1.h();
  };
  SnapshotStateList.prototype.c = function () {
    return this.i22();
  };
  SnapshotStateList.prototype.e21 = function (element) {
    return this.f2e().a2e_1.e2(element);
  };
  SnapshotStateList.prototype.e2 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.e21((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SnapshotStateList.prototype.i22 = function () {
    return new StateListIterator(this, 0);
  };
  SnapshotStateList.prototype.r = function (index) {
    return new StateListIterator(this, index);
  };
  SnapshotStateList.prototype.t1p = function (element) {
    var tmp$ret$19;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.j20_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.b2e_1;
      oldList = current_0.a2e_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.a(element);
      var newList = tmp$ret$5;
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$15;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.j20_1;
      var tmp0_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$8;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_9().s19();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc_0 = writableRecord(tmp0_writable, this, snapshot);
      var tmp_1;
      if (tmp1__anonymous__uwfjfc_0.b2e_1 === currentModification) {
        tmp1__anonymous__uwfjfc_0.a2e_1 = newList;
        var tmp0_this = tmp1__anonymous__uwfjfc_0;
        var tmp1 = tmp0_this.b2e_1;
        tmp0_this.b2e_1 = tmp1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp0_also = tmp$ret$10;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$11 = tmp0_also;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      if (tmp$ret$16) {
        result = true;
        break $l$loop_0;
      }
    }
    tmp$ret$17 = result;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    return tmp$ret$19;
  };
  SnapshotStateList.prototype.a = function (element) {
    return this.t1p((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SnapshotStateList.prototype.f21 = function (index, element) {
    var tmp$ret$19;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.j20_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.b2e_1;
      oldList = current_0.a2e_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.z21(index, element);
      var newList = tmp$ret$5;
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$15;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.j20_1;
      var tmp0_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$8;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_9().s19();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc_0 = writableRecord(tmp0_writable, this, snapshot);
      var tmp_1;
      if (tmp1__anonymous__uwfjfc_0.b2e_1 === currentModification) {
        tmp1__anonymous__uwfjfc_0.a2e_1 = newList;
        var tmp0_this = tmp1__anonymous__uwfjfc_0;
        var tmp1 = tmp0_this.b2e_1;
        tmp0_this.b2e_1 = tmp1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp0_also = tmp$ret$10;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$11 = tmp0_also;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      if (tmp$ret$16) {
        result = true;
        break $l$loop_0;
      }
    }
    tmp$ret$17 = result;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    return Unit_getInstance();
  };
  SnapshotStateList.prototype.t9 = function (index, element) {
    return this.f21(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SnapshotStateList.prototype.k20 = function (elements) {
    var tmp$ret$19;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.j20_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.b2e_1;
      oldList = current_0.a2e_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.addAll.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.l(elements);
      var newList = tmp$ret$5;
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$15;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.j20_1;
      var tmp0_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$8;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_9().s19();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc_0 = writableRecord(tmp0_writable, this, snapshot);
      var tmp_1;
      if (tmp1__anonymous__uwfjfc_0.b2e_1 === currentModification) {
        tmp1__anonymous__uwfjfc_0.a2e_1 = newList;
        var tmp0_this = tmp1__anonymous__uwfjfc_0;
        var tmp1 = tmp0_this.b2e_1;
        tmp0_this.b2e_1 = tmp1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp0_also = tmp$ret$10;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$11 = tmp0_also;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      if (tmp$ret$16) {
        result = true;
        break $l$loop_0;
      }
    }
    tmp$ret$17 = result;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    return tmp$ret$19;
  };
  SnapshotStateList.prototype.l = function (elements) {
    return this.k20(elements);
  };
  SnapshotStateList.prototype.g9 = function () {
    var tmp$ret$10;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
    var tmp$ret$9;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.snapshots.writable' call
    var tmp = this.j20_1;
    var tmp0_writable = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    var snapshot = get_snapshotInitializer();
    var tmp$ret$5;
    // Inline function 'kotlin.also' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized_0 = get_lock();
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    snapshot = Companion_getInstance_9().s19();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>.<anonymous>' call
    var tmp1__anonymous__uwfjfc = writableRecord(tmp0_writable, this, snapshot);
    tmp1__anonymous__uwfjfc.a2e_1 = persistentListOf();
    var tmp0_this = tmp1__anonymous__uwfjfc;
    var tmp1 = tmp0_this.b2e_1;
    tmp0_this.b2e_1 = tmp1 + 1 | 0;
    tmp$ret$0 = tmp1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp0_also = tmp$ret$4;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    notifyWrite(snapshot, this);
    tmp$ret$5 = tmp0_also;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
  };
  SnapshotStateList.prototype.v20 = function (element) {
    var tmp$ret$19;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.j20_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.b2e_1;
      oldList = current_0.a2e_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.remove.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.b4(element);
      var newList = tmp$ret$5;
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$15;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.j20_1;
      var tmp0_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$8;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_9().s19();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc_0 = writableRecord(tmp0_writable, this, snapshot);
      var tmp_1;
      if (tmp1__anonymous__uwfjfc_0.b2e_1 === currentModification) {
        tmp1__anonymous__uwfjfc_0.a2e_1 = newList;
        var tmp0_this = tmp1__anonymous__uwfjfc_0;
        var tmp1 = tmp0_this.b2e_1;
        tmp0_this.b2e_1 = tmp1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp0_also = tmp$ret$10;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$11 = tmp0_also;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      if (tmp$ret$16) {
        result = true;
        break $l$loop_0;
      }
    }
    tmp$ret$17 = result;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    return tmp$ret$19;
  };
  SnapshotStateList.prototype.b4 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.v20((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SnapshotStateList.prototype.c4 = function (index) {
    var tmp$ret$20;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.g(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    var tmp$ret$19;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.j20_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.b2e_1;
      oldList = current_0.a2e_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.c4(index);
      var newList = tmp$ret$5;
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$15;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.j20_1;
      var tmp0_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$8;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_9().s19();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc_0 = writableRecord(tmp0_writable, this, snapshot);
      var tmp_1;
      if (tmp1__anonymous__uwfjfc_0.b2e_1 === currentModification) {
        tmp1__anonymous__uwfjfc_0.a2e_1 = newList;
        var tmp0_this = tmp1__anonymous__uwfjfc_0;
        var tmp1 = tmp0_this.b2e_1;
        tmp0_this.b2e_1 = tmp1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp0_also_0 = tmp$ret$10;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$11 = tmp0_also_0;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      if (tmp$ret$16) {
        result = true;
        break $l$loop_0;
      }
    }
    tmp$ret$17 = result;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    tmp$ret$20 = tmp0_also;
    return tmp$ret$20;
  };
  SnapshotStateList.prototype.g21 = function (index, element) {
    var tmp$ret$20;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.g(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    var tmp$ret$19;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.j20_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.b2e_1;
      oldList = current_0.a2e_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.d9(index, element);
      var newList = tmp$ret$5;
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$15;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.j20_1;
      var tmp0_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$8;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_9().s19();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc_0 = writableRecord(tmp0_writable, this, snapshot);
      var tmp_1;
      if (tmp1__anonymous__uwfjfc_0.b2e_1 === currentModification) {
        tmp1__anonymous__uwfjfc_0.a2e_1 = newList;
        var tmp0_this = tmp1__anonymous__uwfjfc_0;
        var tmp1 = tmp0_this.b2e_1;
        tmp0_this.b2e_1 = tmp1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp0_also_0 = tmp$ret$10;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$11 = tmp0_also_0;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      if (tmp$ret$16) {
        result = true;
        break $l$loop_0;
      }
    }
    tmp$ret$17 = result;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    tmp$ret$20 = tmp0_also;
    return tmp$ret$20;
  };
  SnapshotStateList.prototype.d9 = function (index, element) {
    return this.g21(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SnapshotStateList.$metadata$ = classMeta('SnapshotStateList', [MutableList, StateObject]);
  function validateModification($this) {
    if (!($this.g2e_1.e2e() === $this.i2e_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function StateListIterator(list, offset) {
    this.g2e_1 = list;
    this.h2e_1 = offset - 1 | 0;
    this.i2e_1 = this.g2e_1.e2e();
  }
  StateListIterator.prototype.s = function () {
    return this.h2e_1 >= 0;
  };
  StateListIterator.prototype.t = function () {
    return this.h2e_1 + 1 | 0;
  };
  StateListIterator.prototype.u = function () {
    validateModification(this);
    validateRange(this.h2e_1, this.g2e_1.f());
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.g2e_1.g(this.h2e_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.previous.<anonymous>' call
    var tmp0_this = this;
    var tmp1 = tmp0_this.h2e_1;
    tmp0_this.h2e_1 = tmp1 - 1 | 0;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  StateListIterator.prototype.d = function () {
    return this.h2e_1 < (this.g2e_1.f() - 1 | 0);
  };
  StateListIterator.prototype.e = function () {
    validateModification(this);
    var newIndex = this.h2e_1 + 1 | 0;
    validateRange(newIndex, this.g2e_1.f());
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.g2e_1.g(newIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.next.<anonymous>' call
    this.h2e_1 = newIndex;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  StateListIterator.prototype.d4 = function () {
    validateModification(this);
    this.g2e_1.c4(this.h2e_1);
    var tmp0_this = this;
    var tmp1 = tmp0_this.h2e_1;
    tmp0_this.h2e_1 = tmp1 - 1 | 0;
    this.i2e_1 = this.g2e_1.e2e();
  };
  StateListIterator.$metadata$ = classMeta('StateListIterator', [MutableListIterator]);
  function validateRange(index, size) {
    init_properties_SnapshotStateList_kt_7zrdcn();
    if (!(0 <= index ? index < size : false)) {
      throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of bound of [0, ' + size + ')');
    }
  }
  function _get_sync_$accessor$oh7eud_9jnt9b() {
    init_properties_SnapshotStateList_kt_7zrdcn();
    return get_sync();
  }
  var properties_initialized_SnapshotStateList_kt_lcuarf;
  function init_properties_SnapshotStateList_kt_7zrdcn() {
    if (properties_initialized_SnapshotStateList_kt_lcuarf) {
    } else {
      properties_initialized_SnapshotStateList_kt_lcuarf = true;
      sync_0 = createSynchronizedObject();
    }
  }
  function get_sync_0() {
    init_properties_SnapshotStateMap_kt_ya1h2t();
    return sync_1;
  }
  var sync_1;
  function unsupported() {
    init_properties_SnapshotStateMap_kt_ya1h2t();
    throw UnsupportedOperationException_init_$Create$();
  }
  function StateMapStateRecord(map) {
    StateRecord.call(this);
    this.m2e_1 = map;
    this.n2e_1 = 0;
  }
  StateMapStateRecord.prototype.o2e = function (_set____db54di) {
    this.m2e_1 = _set____db54di;
  };
  StateMapStateRecord.prototype.p2e = function () {
    return this.m2e_1;
  };
  StateMapStateRecord.prototype.d2e = function (_set____db54di) {
    this.n2e_1 = _set____db54di;
  };
  StateMapStateRecord.prototype.e2e = function () {
    return this.n2e_1;
  };
  StateMapStateRecord.prototype.g1t = function (value) {
    var other = value instanceof StateMapStateRecord ? value : THROW_CCE();
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = _get_sync_$accessor$1xvlsi7_xqei8r();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.m2e_1 = other.m2e_1;
    this.n2e_1 = other.n2e_1;
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  StateMapStateRecord.prototype.h1t = function () {
    return new StateMapStateRecord(this.m2e_1);
  };
  StateMapStateRecord.$metadata$ = classMeta('StateMapStateRecord', undefined, undefined, undefined, undefined, StateRecord.prototype);
  function SnapshotStateMap() {
    this.q2e_1 = new StateMapStateRecord(persistentHashMapOf());
    this.r2e_1 = new SnapshotMapEntrySet(this);
    this.s2e_1 = new SnapshotMapKeySet(this);
    this.t2e_1 = new SnapshotMapValueSet(this);
  }
  SnapshotStateMap.prototype.k1t = function () {
    return this.q2e_1;
  };
  SnapshotStateMap.prototype.z1t = function (value) {
    var tmp = this;
    tmp.q2e_1 = value instanceof StateMapStateRecord ? value : THROW_CCE();
  };
  SnapshotStateMap.prototype.f = function () {
    return this.f2e().m2e_1.f();
  };
  SnapshotStateMap.prototype.q2 = function (key) {
    return this.f2e().m2e_1.q2(key);
  };
  SnapshotStateMap.prototype.u2 = function (value) {
    return this.f2e().m2e_1.u2(value);
  };
  SnapshotStateMap.prototype.v = function (key) {
    return this.f2e().m2e_1.v(key);
  };
  SnapshotStateMap.prototype.h = function () {
    return this.f2e().m2e_1.h();
  };
  SnapshotStateMap.prototype.z = function () {
    return this.r2e_1;
  };
  SnapshotStateMap.prototype.w2 = function () {
    return this.s2e_1;
  };
  SnapshotStateMap.prototype.x2 = function () {
    return this.t2e_1;
  };
  SnapshotStateMap.prototype.g9 = function () {
    var tmp$ret$14;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.update' call
    var tmp$ret$13;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
    var tmp$ret$12;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp = this.q2e_1;
    var tmp0_withCurrent = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.clear.<anonymous>' call
    var tmp2__anonymous__z9zvc9 = tmp1__anonymous__uwfjfc.m2e_1;
    tmp$ret$0 = persistentHashMapOf();
    var newMap = tmp$ret$0;
    var tmp_0;
    if (!(newMap === tmp1__anonymous__uwfjfc.m2e_1)) {
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$1xvlsi7_xqei8r();
      var tmp$ret$10;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.update.<anonymous>.<anonymous>' call
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_1 = this.q2e_1;
      var tmp0_writable = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$6;
      // Inline function 'kotlin.also' call
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_9().s19();
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.update.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc_0 = writableRecord(tmp0_writable, this, snapshot);
      tmp1__anonymous__uwfjfc_0.m2e_1 = newMap;
      var tmp0_this = tmp1__anonymous__uwfjfc_0;
      var tmp1 = tmp0_this.n2e_1;
      tmp0_this.n2e_1 = tmp1 + 1 | 0;
      tmp$ret$1 = tmp1;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      var tmp0_also = tmp$ret$5;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$6 = tmp0_also;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      tmp$ret$11 = tmp$ret$10;
      tmp_0 = Unit_getInstance();
    }
    tmp$ret$12 = tmp_0;
    tmp$ret$13 = tmp$ret$12;
    tmp$ret$14 = tmp$ret$13;
    return tmp$ret$14;
  };
  SnapshotStateMap.prototype.q = function (key, value) {
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$1xvlsi7_xqei8r();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.q2e_1;
      var tmp0_withCurrent = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      oldMap = current_0.m2e_1;
      currentModification = current_0.n2e_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var builder = ensureNotNull(oldMap).g1h();
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.put.<anonymous>' call
      tmp$ret$5 = builder.q(key, value);
      result = tmp$ret$5;
      var newMap = builder.h1h();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp1_synchronized = _get_sync_$accessor$1xvlsi7_xqei8r();
        var tmp$ret$15;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>' call
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this.q2e_1;
        var tmp0_writable = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        var tmp$ret$11;
        // Inline function 'kotlin.also' call
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp0_synchronized_0 = get_lock();
        var tmp$ret$8;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$7;
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_getInstance_9().s19();
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
        var tmp1__anonymous__uwfjfc_0 = writableRecord(tmp0_writable, this, snapshot);
        var tmp_2;
        if (tmp1__anonymous__uwfjfc_0.n2e_1 === currentModification) {
          tmp1__anonymous__uwfjfc_0.m2e_1 = newMap;
          var tmp0_this = tmp1__anonymous__uwfjfc_0;
          var tmp1 = tmp0_this.n2e_1;
          tmp0_this.n2e_1 = tmp1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        tmp$ret$6 = tmp_2;
        tmp$ret$7 = tmp$ret$6;
        tmp$ret$8 = tmp$ret$7;
        tmp$ret$9 = tmp$ret$8;
        tmp$ret$10 = tmp$ret$9;
        var tmp0_also = tmp$ret$10;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this);
        tmp$ret$11 = tmp0_also;
        tmp$ret$12 = tmp$ret$11;
        tmp$ret$13 = tmp$ret$12;
        tmp$ret$14 = tmp$ret$13;
        tmp$ret$15 = tmp$ret$14;
        tmp$ret$16 = tmp$ret$15;
        tmp_0 = tmp$ret$16;
      }
      if (tmp_0)
        break $l$loop;
    }
    tmp$ret$17 = result;
    return tmp$ret$17;
  };
  SnapshotStateMap.prototype.l3 = function (from) {
    var tmp$ret$16;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$1xvlsi7_xqei8r();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.q2e_1;
      var tmp0_withCurrent = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      oldMap = current_0.m2e_1;
      currentModification = current_0.n2e_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var builder = ensureNotNull(oldMap).g1h();
      builder.l3(from);
      result = Unit_getInstance();
      var newMap = builder.h1h();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        var tmp$ret$15;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp1_synchronized = _get_sync_$accessor$1xvlsi7_xqei8r();
        var tmp$ret$14;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>' call
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this.q2e_1;
        var tmp0_writable = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        var tmp$ret$10;
        // Inline function 'kotlin.also' call
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp0_synchronized_0 = get_lock();
        var tmp$ret$7;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_getInstance_9().s19();
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
        var tmp1__anonymous__uwfjfc_0 = writableRecord(tmp0_writable, this, snapshot);
        var tmp_2;
        if (tmp1__anonymous__uwfjfc_0.n2e_1 === currentModification) {
          tmp1__anonymous__uwfjfc_0.m2e_1 = newMap;
          var tmp0_this = tmp1__anonymous__uwfjfc_0;
          var tmp1 = tmp0_this.n2e_1;
          tmp0_this.n2e_1 = tmp1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        tmp$ret$5 = tmp_2;
        tmp$ret$6 = tmp$ret$5;
        tmp$ret$7 = tmp$ret$6;
        tmp$ret$8 = tmp$ret$7;
        tmp$ret$9 = tmp$ret$8;
        var tmp0_also = tmp$ret$9;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this);
        tmp$ret$10 = tmp0_also;
        tmp$ret$11 = tmp$ret$10;
        tmp$ret$12 = tmp$ret$11;
        tmp$ret$13 = tmp$ret$12;
        tmp$ret$14 = tmp$ret$13;
        tmp$ret$15 = tmp$ret$14;
        tmp_0 = tmp$ret$15;
      }
      if (tmp_0)
        break $l$loop;
    }
    tmp$ret$16 = result;
    return tmp$ret$16;
  };
  SnapshotStateMap.prototype.k3 = function (key) {
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$1xvlsi7_xqei8r();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.q2e_1;
      var tmp0_withCurrent = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      oldMap = current_0.m2e_1;
      currentModification = current_0.n2e_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var builder = ensureNotNull(oldMap).g1h();
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.remove.<anonymous>' call
      tmp$ret$5 = builder.k3(key);
      result = tmp$ret$5;
      var newMap = builder.h1h();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp1_synchronized = _get_sync_$accessor$1xvlsi7_xqei8r();
        var tmp$ret$15;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>' call
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this.q2e_1;
        var tmp0_writable = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        var tmp$ret$11;
        // Inline function 'kotlin.also' call
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp0_synchronized_0 = get_lock();
        var tmp$ret$8;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$7;
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_getInstance_9().s19();
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
        var tmp1__anonymous__uwfjfc_0 = writableRecord(tmp0_writable, this, snapshot);
        var tmp_2;
        if (tmp1__anonymous__uwfjfc_0.n2e_1 === currentModification) {
          tmp1__anonymous__uwfjfc_0.m2e_1 = newMap;
          var tmp0_this = tmp1__anonymous__uwfjfc_0;
          var tmp1 = tmp0_this.n2e_1;
          tmp0_this.n2e_1 = tmp1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        tmp$ret$6 = tmp_2;
        tmp$ret$7 = tmp$ret$6;
        tmp$ret$8 = tmp$ret$7;
        tmp$ret$9 = tmp$ret$8;
        tmp$ret$10 = tmp$ret$9;
        var tmp0_also = tmp$ret$10;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this);
        tmp$ret$11 = tmp0_also;
        tmp$ret$12 = tmp$ret$11;
        tmp$ret$13 = tmp$ret$12;
        tmp$ret$14 = tmp$ret$13;
        tmp$ret$15 = tmp$ret$14;
        tmp$ret$16 = tmp$ret$15;
        tmp_0 = tmp$ret$16;
      }
      if (tmp_0)
        break $l$loop;
    }
    tmp$ret$17 = result;
    return tmp$ret$17;
  };
  SnapshotStateMap.prototype.e2e = function () {
    return this.f2e().n2e_1;
  };
  SnapshotStateMap.prototype.u2e = function (value) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_firstOrNull = this.r2e_1;
      var tmp0_iterator = tmp0_firstOrNull.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.removeValue.<anonymous>' call
        tmp$ret$0 = equals(element.i2(), value);
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.removeValue.<anonymous>' call
      this.k3(tmp0_safe_receiver.g2());
      tmp$ret$2 = true;
      tmp$ret$3 = tmp$ret$2;
      tmp = tmp$ret$3;
    }
    return tmp === true;
  };
  SnapshotStateMap.prototype.f2e = function () {
    var tmp = this.q2e_1;
    return readable_0(tmp instanceof StateMapStateRecord ? tmp : THROW_CCE(), this);
  };
  SnapshotStateMap.prototype.v2e = function (predicate) {
    var removed = false;
    var tmp$ret$16;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$1xvlsi7_xqei8r();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.q2e_1;
      var tmp0_withCurrent = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      oldMap = current_0.m2e_1;
      currentModification = current_0.n2e_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var builder = ensureNotNull(oldMap).g1h();
      var tmp0_iterator = this.r2e_1.c();
      while (tmp0_iterator.d()) {
        var entry = tmp0_iterator.e();
        if (predicate(entry)) {
          builder.k3(entry.g2());
          removed = true;
        }
      }
      result = Unit_getInstance();
      var newMap = builder.h1h();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        var tmp$ret$15;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp1_synchronized = _get_sync_$accessor$1xvlsi7_xqei8r();
        var tmp$ret$14;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>' call
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this.q2e_1;
        var tmp0_writable = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        var tmp$ret$10;
        // Inline function 'kotlin.also' call
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp0_synchronized_0 = get_lock();
        var tmp$ret$7;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_getInstance_9().s19();
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
        var tmp1__anonymous__uwfjfc_0 = writableRecord(tmp0_writable, this, snapshot);
        var tmp_2;
        if (tmp1__anonymous__uwfjfc_0.n2e_1 === currentModification) {
          tmp1__anonymous__uwfjfc_0.m2e_1 = newMap;
          var tmp0_this = tmp1__anonymous__uwfjfc_0;
          var tmp1 = tmp0_this.n2e_1;
          tmp0_this.n2e_1 = tmp1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        tmp$ret$5 = tmp_2;
        tmp$ret$6 = tmp$ret$5;
        tmp$ret$7 = tmp$ret$6;
        tmp$ret$8 = tmp$ret$7;
        tmp$ret$9 = tmp$ret$8;
        var tmp0_also = tmp$ret$9;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this);
        tmp$ret$10 = tmp0_also;
        tmp$ret$11 = tmp$ret$10;
        tmp$ret$12 = tmp$ret$11;
        tmp$ret$13 = tmp$ret$12;
        tmp$ret$14 = tmp$ret$13;
        tmp$ret$15 = tmp$ret$14;
        tmp_0 = tmp$ret$15;
      }
      if (tmp_0)
        break $l$loop;
    }
    tmp$ret$16 = result;
    return removed;
  };
  SnapshotStateMap.$metadata$ = classMeta('SnapshotStateMap', [MutableMap, StateObject]);
  function SnapshotMapEntrySet(map) {
    SnapshotMapSet.call(this, map);
  }
  SnapshotMapEntrySet.prototype.qa = function (element) {
    unsupported();
  };
  SnapshotMapEntrySet.prototype.a = function (element) {
    return this.qa((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  SnapshotMapEntrySet.prototype.x2e = function (elements) {
    unsupported();
  };
  SnapshotMapEntrySet.prototype.l = function (elements) {
    return this.x2e(elements);
  };
  SnapshotMapEntrySet.prototype.c = function () {
    return new StateMapMutableEntriesIterator(this.y2e_1, this.y2e_1.f2e().m2e_1.z().c());
  };
  SnapshotMapEntrySet.prototype.z2e = function (element) {
    return !(this.y2e_1.k3(element.g2()) == null);
  };
  SnapshotMapEntrySet.prototype.b4 = function (element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false;
    return this.z2e((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  SnapshotMapEntrySet.prototype.a2f = function (elements) {
    var removed = false;
    var tmp0_iterator = elements.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      removed = !(this.y2e_1.k3(element.g2()) == null) ? true : removed;
    }
    return removed;
  };
  SnapshotMapEntrySet.prototype.f9 = function (elements) {
    return this.a2f(elements);
  };
  SnapshotMapEntrySet.prototype.b2f = function (element) {
    return equals(this.y2e_1.v(element.g2()), element.i2());
  };
  SnapshotMapEntrySet.prototype.m = function (element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false;
    return this.b2f((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  SnapshotMapEntrySet.prototype.c2f = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapEntrySet.containsAll.<anonymous>' call
        tmp$ret$1 = this.b2f(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  SnapshotMapEntrySet.prototype.t1 = function (elements) {
    return this.c2f(elements);
  };
  SnapshotMapEntrySet.$metadata$ = classMeta('SnapshotMapEntrySet', undefined, undefined, undefined, undefined, SnapshotMapSet.prototype);
  function SnapshotMapKeySet(map) {
    SnapshotMapSet.call(this, map);
  }
  SnapshotMapKeySet.prototype.ea = function (element) {
    unsupported();
  };
  SnapshotMapKeySet.prototype.a = function (element) {
    return this.ea((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SnapshotMapKeySet.prototype.e2f = function (elements) {
    unsupported();
  };
  SnapshotMapKeySet.prototype.l = function (elements) {
    return this.e2f(elements);
  };
  SnapshotMapKeySet.prototype.c = function () {
    return new StateMapMutableKeysIterator(this.y2e_1, this.y2e_1.f2e().m2e_1.z().c());
  };
  SnapshotMapKeySet.prototype.k3 = function (element) {
    return !(this.y2e_1.k3(element) == null);
  };
  SnapshotMapKeySet.prototype.b4 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.k3((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SnapshotMapKeySet.prototype.f2f = function (elements) {
    var removed = false;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = elements.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapKeySet.removeAll.<anonymous>' call
      removed = !(this.y2e_1.k3(element) == null) ? true : removed;
    }
    return removed;
  };
  SnapshotMapKeySet.prototype.f9 = function (elements) {
    return this.f2f(elements);
  };
  SnapshotMapKeySet.prototype.n2 = function (element) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.contains' call
    var tmp0_contains = this.y2e_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsKey' call
    tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).q2(element);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  SnapshotMapKeySet.prototype.m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.n2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SnapshotMapKeySet.prototype.g2f = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapKeySet.containsAll.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.collections.contains' call
        var tmp0_contains = this.y2e_1;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.containsKey' call
        tmp$ret$1 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).q2(element);
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        if (!tmp$ret$3) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  SnapshotMapKeySet.prototype.t1 = function (elements) {
    return this.g2f(elements);
  };
  SnapshotMapKeySet.$metadata$ = classMeta('SnapshotMapKeySet', undefined, undefined, undefined, undefined, SnapshotMapSet.prototype);
  function SnapshotMapValueSet(map) {
    SnapshotMapSet.call(this, map);
  }
  SnapshotMapValueSet.prototype.ka = function (element) {
    unsupported();
  };
  SnapshotMapValueSet.prototype.a = function (element) {
    return this.ka((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SnapshotMapValueSet.prototype.i2f = function (elements) {
    unsupported();
  };
  SnapshotMapValueSet.prototype.l = function (elements) {
    return this.i2f(elements);
  };
  SnapshotMapValueSet.prototype.c = function () {
    return new StateMapMutableValuesIterator(this.y2e_1, this.y2e_1.f2e().m2e_1.z().c());
  };
  SnapshotMapValueSet.prototype.j2f = function (element) {
    return this.y2e_1.u2e(element);
  };
  SnapshotMapValueSet.prototype.b4 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.j2f((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SnapshotMapValueSet.prototype.k2f = function (elements) {
    var set = toSet(elements);
    var tmp$ret$18;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.removeIf' call
    var tmp0_removeIf = this.y2e_1;
    var removed = false;
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$1xvlsi7_xqei8r();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = tmp0_removeIf.q2e_1;
      var tmp0_withCurrent = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      oldMap = current_0.m2e_1;
      currentModification = current_0.n2e_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var builder = ensureNotNull(oldMap).g1h();
      var tmp0_iterator = tmp0_removeIf.r2e_1.c();
      while (tmp0_iterator.d()) {
        var entry = tmp0_iterator.e();
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapValueSet.removeAll.<anonymous>' call
        tmp$ret$5 = set.m(entry.i2());
        if (tmp$ret$5) {
          builder.k3(entry.g2());
          removed = true;
        }
      }
      result = Unit_getInstance();
      var newMap = builder.h1h();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp1_synchronized = _get_sync_$accessor$1xvlsi7_xqei8r();
        var tmp$ret$15;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>' call
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = tmp0_removeIf.q2e_1;
        var tmp0_writable = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        var tmp$ret$11;
        // Inline function 'kotlin.also' call
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp0_synchronized_0 = get_lock();
        var tmp$ret$8;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$7;
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_getInstance_9().s19();
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
        var tmp1__anonymous__uwfjfc_0 = writableRecord(tmp0_writable, tmp0_removeIf, snapshot);
        var tmp_2;
        if (tmp1__anonymous__uwfjfc_0.n2e_1 === currentModification) {
          tmp1__anonymous__uwfjfc_0.m2e_1 = newMap;
          var tmp0_this = tmp1__anonymous__uwfjfc_0;
          var tmp1 = tmp0_this.n2e_1;
          tmp0_this.n2e_1 = tmp1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        tmp$ret$6 = tmp_2;
        tmp$ret$7 = tmp$ret$6;
        tmp$ret$8 = tmp$ret$7;
        tmp$ret$9 = tmp$ret$8;
        tmp$ret$10 = tmp$ret$9;
        var tmp0_also = tmp$ret$10;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, tmp0_removeIf);
        tmp$ret$11 = tmp0_also;
        tmp$ret$12 = tmp$ret$11;
        tmp$ret$13 = tmp$ret$12;
        tmp$ret$14 = tmp$ret$13;
        tmp$ret$15 = tmp$ret$14;
        tmp$ret$16 = tmp$ret$15;
        tmp_0 = tmp$ret$16;
      }
      if (tmp_0)
        break $l$loop;
    }
    tmp$ret$17 = result;
    tmp$ret$18 = removed;
    return tmp$ret$18;
  };
  SnapshotMapValueSet.prototype.f9 = function (elements) {
    return this.k2f(elements);
  };
  SnapshotMapValueSet.prototype.t2 = function (element) {
    return this.y2e_1.u2(element);
  };
  SnapshotMapValueSet.prototype.m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.t2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SnapshotMapValueSet.prototype.l2f = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapValueSet.containsAll.<anonymous>' call
        tmp$ret$1 = this.y2e_1.u2(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  SnapshotMapValueSet.prototype.t1 = function (elements) {
    return this.l2f(elements);
  };
  SnapshotMapValueSet.$metadata$ = classMeta('SnapshotMapValueSet', undefined, undefined, undefined, undefined, SnapshotMapSet.prototype);
  function SnapshotMapSet(map) {
    this.y2e_1 = map;
  }
  SnapshotMapSet.prototype.p2e = function () {
    return this.y2e_1;
  };
  SnapshotMapSet.prototype.f = function () {
    return this.y2e_1.f();
  };
  SnapshotMapSet.prototype.g9 = function () {
    return this.y2e_1.g9();
  };
  SnapshotMapSet.prototype.h = function () {
    return this.y2e_1.h();
  };
  SnapshotMapSet.$metadata$ = classMeta('SnapshotMapSet', [MutableSet]);
  function StateMapMutableEntriesIterator$next$1(this$0) {
    this.o2f_1 = this$0;
    this.m2f_1 = ensureNotNull(this$0.s2f_1).g2();
    this.n2f_1 = ensureNotNull(this$0.s2f_1).i2();
  }
  StateMapMutableEntriesIterator$next$1.prototype.g2 = function () {
    return this.m2f_1;
  };
  StateMapMutableEntriesIterator$next$1.prototype.i2 = function () {
    return this.n2f_1;
  };
  StateMapMutableEntriesIterator$next$1.prototype.aa = function (newValue) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.StateMapMutableIterator.modify' call
    if (!(this.o2f_1.p2f_1.e2e() === this.o2f_1.r2f_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var result = this.n2f_1;
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.o2f_1.p2f_1;
    var tmp1_set = this.m2f_1;
    tmp0_set.q(tmp1_set, newValue);
    this.n2f_1 = newValue;
    return result;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  StateMapMutableEntriesIterator$next$1.$metadata$ = classMeta(undefined, [MutableEntry]);
  function StateMapMutableEntriesIterator(map, iterator) {
    StateMapMutableIterator.call(this, map, iterator);
  }
  StateMapMutableEntriesIterator.prototype.e = function () {
    this.k29();
    if (!(this.s2f_1 == null)) {
      return new StateMapMutableEntriesIterator$next$1(this);
    } else {
      throw IllegalStateException_init_$Create$_0();
    }
  };
  StateMapMutableEntriesIterator.$metadata$ = classMeta('StateMapMutableEntriesIterator', [MutableIterator], undefined, undefined, undefined, StateMapMutableIterator.prototype);
  function StateMapMutableKeysIterator(map, iterator) {
    StateMapMutableIterator.call(this, map, iterator);
  }
  StateMapMutableKeysIterator.prototype.e = function () {
    var tmp0_elvis_lhs = this.t2f_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$_0();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var result = tmp;
    this.k29();
    return result.g2();
  };
  StateMapMutableKeysIterator.$metadata$ = classMeta('StateMapMutableKeysIterator', [MutableIterator], undefined, undefined, undefined, StateMapMutableIterator.prototype);
  function StateMapMutableValuesIterator(map, iterator) {
    StateMapMutableIterator.call(this, map, iterator);
  }
  StateMapMutableValuesIterator.prototype.e = function () {
    var tmp0_elvis_lhs = this.t2f_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$_0();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var result = tmp;
    this.k29();
    return result.i2();
  };
  StateMapMutableValuesIterator.$metadata$ = classMeta('StateMapMutableValuesIterator', [MutableIterator], undefined, undefined, undefined, StateMapMutableIterator.prototype);
  function StateMapMutableIterator(map, iterator) {
    this.p2f_1 = map;
    this.q2f_1 = iterator;
    this.r2f_1 = this.p2f_1.e2e();
    this.s2f_1 = null;
    this.t2f_1 = null;
    this.k29();
  }
  StateMapMutableIterator.prototype.p2e = function () {
    return this.p2f_1;
  };
  StateMapMutableIterator.prototype.d2e = function (_set____db54di) {
    this.r2f_1 = _set____db54di;
  };
  StateMapMutableIterator.prototype.d4 = function () {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.StateMapMutableIterator.modify' call
    if (!(this.p2f_1.e2e() === this.r2f_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var value = this.s2f_1;
    var tmp;
    if (!(value == null)) {
      this.p2f_1.k3(value.g2());
      this.s2f_1 = null;
      tmp = Unit_getInstance();
    } else {
      throw IllegalStateException_init_$Create$_0();
    }
    var tmp0_also = tmp;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateMapMutableIterator.modify.<anonymous>' call
    this.r2f_1 = this.p2f_1.e2e();
    tmp$ret$0 = tmp0_also;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  StateMapMutableIterator.prototype.d = function () {
    return !(this.t2f_1 == null);
  };
  StateMapMutableIterator.prototype.k29 = function () {
    this.s2f_1 = this.t2f_1;
    this.t2f_1 = this.q2f_1.d() ? this.q2f_1.e() : null;
  };
  StateMapMutableIterator.prototype.z2f = function (block) {
    if (!(this.p2f_1.e2e() === this.r2f_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = block();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateMapMutableIterator.modify.<anonymous>' call
    this.r2f_1 = this.p2f_1.e2e();
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  StateMapMutableIterator.$metadata$ = classMeta('StateMapMutableIterator');
  function _get_sync_$accessor$1xvlsi7_xqei8r() {
    init_properties_SnapshotStateMap_kt_ya1h2t();
    return get_sync_0();
  }
  var properties_initialized_SnapshotStateMap_kt_9i73ip;
  function init_properties_SnapshotStateMap_kt_ya1h2t() {
    if (properties_initialized_SnapshotStateMap_kt_9i73ip) {
    } else {
      properties_initialized_SnapshotStateMap_kt_9i73ip = true;
      sync_1 = createSynchronizedObject();
    }
  }
  function clearObsoleteStateReads($this, scope) {
    var tmp0_safe_receiver = $this.m2g_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.removeValueIf' call
      var destinationIndex = 0;
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.o1u_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = tmp0_safe_receiver.p1u_1[i];
          var key = isObject(tmp) ? tmp : THROW_CCE();
          var value = tmp0_safe_receiver.q1u_1[i];
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.clearObsoleteStateReads.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'kotlin.also' call
          var tmp0_also = !(value === $this.n2g_1);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.clearObsoleteStateReads.<anonymous>.<anonymous>' call
          if (tmp0_also) {
            removeObservation($this, scope, key);
          }
          tmp$ret$0 = tmp0_also;
          tmp$ret$1 = tmp$ret$0;
          if (!tmp$ret$1) {
            if (!(destinationIndex === i)) {
              tmp0_safe_receiver.p1u_1[destinationIndex] = key;
              tmp0_safe_receiver.q1u_1[destinationIndex] = value;
            }
            var tmp1 = destinationIndex;
            destinationIndex = tmp1 + 1 | 0;
          }
        }
         while (inductionVariable < last);
      var inductionVariable_0 = destinationIndex;
      var last_0 = tmp0_safe_receiver.o1u_1;
      if (inductionVariable_0 < last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          tmp0_safe_receiver.p1u_1[i_0] = null;
        }
         while (inductionVariable_0 < last_0);
      tmp0_safe_receiver.o1u_1 = destinationIndex;
    }
  }
  function removeObservation($this, scope, value) {
    $this.o2g_1.z1q(value, scope);
    var tmp;
    if (isInterface(value, DerivedState)) {
      tmp = !$this.o2g_1.k1q(value);
    } else {
      tmp = false;
    }
    if (tmp) {
      $this.u2g_1.j1r(value);
      $this.v2g_1.k3(value);
    }
  }
  function SnapshotStateObserver$ObservedScopeMap$derivedStateEnterObserver$lambda(this$0) {
    return function (it) {
      var tmp0_this = this$0;
      var tmp1 = tmp0_this.t2g_1;
      tmp0_this.t2g_1 = tmp1 + 1 | 0;
      return Unit_getInstance();
    };
  }
  function SnapshotStateObserver$ObservedScopeMap$derivedStateExitObserver$lambda(this$0) {
    return function (it) {
      var tmp0_this = this$0;
      var tmp1 = tmp0_this.t2g_1;
      tmp0_this.t2g_1 = tmp1 - 1 | 0;
      return Unit_getInstance();
    };
  }
  function ensureMap($this, onChanged) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.firstOrNull' call
      var tmp0_firstOrNull = $this.z2g_1;
      // Inline function 'kotlin.contracts.contract' call
      var size = tmp0_firstOrNull.s1s_1;
      if (size > 0) {
        var i = 0;
        var tmp = tmp0_firstOrNull.q1s_1;
        var content = isArray(tmp) ? tmp : THROW_CCE();
        do {
          var item = content[i];
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.ensureMap.<anonymous>' call
          tmp$ret$0 = item.k2g_1 === onChanged;
          if (tmp$ret$0) {
            tmp$ret$1 = item;
            break $l$block;
          }
          var tmp0 = i;
          i = tmp0 + 1 | 0;
        }
         while (i < size);
      }
      tmp$ret$1 = null;
    }
    var scopeMap = tmp$ret$1;
    if (scopeMap == null) {
      var map = new ObservedScopeMap(typeof onChanged === 'function' ? onChanged : THROW_CCE());
      var tmp0_this = $this;
      // Inline function 'androidx.compose.runtime.collection.MutableVector.plusAssign' call
      var tmp1_plusAssign = tmp0_this.z2g_1;
      tmp1_plusAssign.t1p(map);
      return map;
    }
    return scopeMap;
  }
  function ObservedScopeMap(onChanged) {
    this.k2g_1 = onChanged;
    this.l2g_1 = null;
    this.m2g_1 = null;
    this.n2g_1 = -1;
    this.o2g_1 = new IdentityScopeMap();
    var tmp = this;
    tmp.p2g_1 = IdentityArrayMap_init_$Create$(0, 1, null);
    this.q2g_1 = new IdentityArraySet();
    var tmp_0 = this;
    tmp_0.r2g_1 = SnapshotStateObserver$ObservedScopeMap$derivedStateEnterObserver$lambda(this);
    var tmp_1 = this;
    tmp_1.s2g_1 = SnapshotStateObserver$ObservedScopeMap$derivedStateExitObserver$lambda(this);
    this.t2g_1 = 0;
    this.u2g_1 = new IdentityScopeMap();
    this.v2g_1 = HashMap_init_$Create$();
  }
  ObservedScopeMap.prototype.f2h = function () {
    return this.k2g_1;
  };
  ObservedScopeMap.prototype.g2h = function () {
    return this.r2g_1;
  };
  ObservedScopeMap.prototype.h2h = function () {
    return this.s2g_1;
  };
  ObservedScopeMap.prototype.l1r = function (value) {
    if (this.t2g_1 > 0) {
      return Unit_getInstance();
    }
    var scope = ensureNotNull(this.l2g_1);
    var tmp0_elvis_lhs = this.m2g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new IdentityArrayIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordRead.<anonymous>' call
      this.m2g_1 = tmp0_also;
      this.p2g_1.y1q(scope, tmp0_also);
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var recordedValues = tmp;
    var previousValue = recordedValues.s1u(value, this.n2g_1);
    var tmp_0;
    if (isInterface(value, DerivedState)) {
      tmp_0 = !(previousValue === this.n2g_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var dependencies = value.k1r();
      var indexedObject = dependencies;
      var inductionVariable = 0;
      var last = indexedObject.length;
      $l$loop: while (inductionVariable < last) {
        var dependency = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (dependency == null)
          break $l$loop;
        this.u2g_1.m1q(dependency, value);
      }
      // Inline function 'kotlin.collections.set' call
      var tmp1_set = this.v2g_1;
      var tmp2_set = value;
      var tmp3_set = value.m1s();
      tmp1_set.q(tmp2_set, tmp3_set);
    }
    if (previousValue === -1) {
      this.o2g_1.m1q(value, scope);
    }
  };
  ObservedScopeMap.prototype.i2h = function (scope, block) {
    var previousScope = this.l2g_1;
    var previousReads = this.m2g_1;
    var previousToken = this.n2g_1;
    this.l2g_1 = scope;
    this.m2g_1 = this.p2g_1.c1s(scope);
    if (this.n2g_1 === -1) {
      this.n2g_1 = currentSnapshot().o1l();
    }
    block();
    clearObsoleteStateReads(this, ensureNotNull(this.l2g_1));
    this.l2g_1 = previousScope;
    this.m2g_1 = previousReads;
    this.n2g_1 = previousToken;
  };
  ObservedScopeMap.prototype.j2h = function (scope) {
    var tmp0_elvis_lhs = this.p2g_1.c1s(scope);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var recordedValues = tmp;
    // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.forEach' call
    var inductionVariable = 0;
    var last = recordedValues.o1u_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.clearScopeObservations.<anonymous>' call
        var tmp_0 = recordedValues.p1u_1[i];
        var tmp0__anonymous__q1qw7t = isObject(tmp_0) ? tmp_0 : THROW_CCE();
        var tmp1__anonymous__uwfjfc = recordedValues.q1u_1[i];
        removeObservation(this, scope, tmp0__anonymous__q1qw7t);
      }
       while (inductionVariable < last);
  };
  ObservedScopeMap.prototype.k2h = function (predicate) {
    // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.removeIf' call
    var tmp0_removeIf = this.p2g_1;
    var current = 0;
    var inductionVariable = 0;
    var last = tmp0_removeIf.r1l_1;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = tmp0_removeIf.p1l_1[index];
        var key = isObject(tmp) ? tmp : THROW_CCE();
        var tmp_0 = tmp0_removeIf.q1l_1[index];
        var value = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.removeScopeIf.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = predicate(key);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.removeScopeIf.<anonymous>.<anonymous>' call
        if (tmp0_also) {
          // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = value.o1u_1;
          if (inductionVariable_0 < last_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.removeScopeIf.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_1 = value.p1u_1[i];
              var tmp0__anonymous__q1qw7t = isObject(tmp_1) ? tmp_1 : THROW_CCE();
              var tmp1__anonymous__uwfjfc = value.q1u_1[i];
              removeObservation(this, key, tmp0__anonymous__q1qw7t);
            }
             while (inductionVariable_0 < last_0);
        }
        tmp$ret$0 = tmp0_also;
        tmp$ret$1 = tmp$ret$0;
        if (!tmp$ret$1) {
          if (!(current === index)) {
            tmp0_removeIf.p1l_1[current] = key;
            tmp0_removeIf.q1l_1[current] = tmp0_removeIf.q1l_1[index];
          }
          var tmp1 = current;
          current = tmp1 + 1 | 0;
        }
      }
       while (inductionVariable < last);
    if (tmp0_removeIf.r1l_1 > current) {
      var inductionVariable_1 = current;
      var last_1 = tmp0_removeIf.r1l_1;
      if (inductionVariable_1 < last_1)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          tmp0_removeIf.p1l_1[index_0] = null;
          tmp0_removeIf.q1l_1[index_0] = null;
        }
         while (inductionVariable_1 < last_1);
      tmp0_removeIf.r1l_1 = current;
    }
  };
  ObservedScopeMap.prototype.g9 = function () {
    this.o2g_1.g9();
    this.p2g_1.g9();
    this.u2g_1.g9();
    this.v2g_1.g9();
  };
  ObservedScopeMap.prototype.l2h = function (changes) {
    var hasValues = false;
    var tmp0_iterator = changes.c();
    while (tmp0_iterator.d()) {
      var value = tmp0_iterator.e();
      if (this.u2g_1.k1q(value)) {
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
        var tmp0_forEachScopeOf = this.u2g_1;
        var index = find_2(tmp0_forEachScopeOf, value);
        if (index >= 0) {
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
          var tmp0_fastForEach = scopeSetAt(tmp0_forEachScopeOf, index);
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = tmp0_fastForEach.k1k_1;
          if (inductionVariable < last)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>' call
              var tmp1__anonymous__uwfjfc = tmp0_fastForEach.g(i);
              if (isInterface(tmp1__anonymous__uwfjfc, DerivedState))
                tmp1__anonymous__uwfjfc;
              else
                THROW_CCE();
              var previousValue = this.v2g_1.v(tmp1__anonymous__uwfjfc);
              var tmp0_elvis_lhs = tmp1__anonymous__uwfjfc.n1s();
              var policy = tmp0_elvis_lhs == null ? structuralEqualityPolicy() : tmp0_elvis_lhs;
              if (!policy.x1t(tmp1__anonymous__uwfjfc.m1s(), previousValue)) {
                // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
                var tmp0_forEachScopeOf_0 = this.o2g_1;
                var index_0 = find_2(tmp0_forEachScopeOf_0, tmp1__anonymous__uwfjfc);
                if (index_0 >= 0) {
                  // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
                  var tmp0_fastForEach_0 = scopeSetAt(tmp0_forEachScopeOf_0, index_0);
                  // Inline function 'kotlin.contracts.contract' call
                  var inductionVariable_0 = 0;
                  var last_0 = tmp0_fastForEach_0.k1k_1;
                  if (inductionVariable_0 < last_0)
                    do {
                      var i_0 = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>' call
                      var tmp1__anonymous__uwfjfc_0 = tmp0_fastForEach_0.g(i_0);
                      this.q2g_1.t1p(tmp1__anonymous__uwfjfc_0);
                      hasValues = true;
                    }
                     while (inductionVariable_0 < last_0);
                }
              }
            }
             while (inductionVariable < last);
        }
      }
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
      var tmp2_forEachScopeOf = this.o2g_1;
      var index_1 = find_2(tmp2_forEachScopeOf, value);
      if (index_1 >= 0) {
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
        var tmp0_fastForEach_1 = scopeSetAt(tmp2_forEachScopeOf, index_1);
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last_1 = tmp0_fastForEach_1.k1k_1;
        if (inductionVariable_1 < last_1)
          do {
            var i_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>' call
            var tmp3__anonymous__ufb84q = tmp0_fastForEach_1.g(i_1);
            this.q2g_1.t1p(tmp3__anonymous__ufb84q);
            hasValues = true;
          }
           while (inductionVariable_1 < last_1);
      }
    }
    return hasValues;
  };
  ObservedScopeMap.prototype.m2h = function () {
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    var tmp0_fastForEach = this.q2g_1;
    var tmp1_fastForEach = this.k2g_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.k1k_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        tmp1_fastForEach(tmp0_fastForEach.g(i));
      }
       while (inductionVariable < last);
    this.q2g_1.g9();
  };
  ObservedScopeMap.$metadata$ = classMeta('ObservedScopeMap');
  function SnapshotStateObserver$applyObserver$lambda$lambda(this$0) {
    return function () {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.a2h_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0_forEach = this$0.z2g_1;
      // Inline function 'kotlin.contracts.contract' call
      var size = tmp0_forEach.s1s_1;
      var tmp;
      if (size > 0) {
        var i = 0;
        var tmp_0 = tmp0_forEach.q1s_1;
        var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
        do {
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.applyObserver.<anonymous>.<anonymous>.<anonymous>' call
          var tmp1__anonymous__uwfjfc = content[i];
          tmp1__anonymous__uwfjfc.m2h();
          var tmp0 = i;
          i = tmp0 + 1 | 0;
        }
         while (i < size);
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      return Unit_getInstance();
    };
  }
  function SnapshotStateObserver$applyObserver$lambda(this$0) {
    return function (applied, _anonymous_parameter_1__qggqgd) {
      var hasValues = false;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.a2h_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0_forEach = this$0.z2g_1;
      // Inline function 'kotlin.contracts.contract' call
      var size = tmp0_forEach.s1s_1;
      var tmp;
      if (size > 0) {
        var i = 0;
        var tmp_0 = tmp0_forEach.q1s_1;
        var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
        do {
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.applyObserver.<anonymous>.<anonymous>' call
          var tmp1__anonymous__uwfjfc = content[i];
          hasValues = tmp1__anonymous__uwfjfc.l2h(applied) ? true : hasValues;
          var tmp0 = i;
          i = tmp0 + 1 | 0;
        }
         while (i < size);
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      var tmp_1;
      if (hasValues) {
        tmp_1 = this$0.w2g_1(SnapshotStateObserver$applyObserver$lambda$lambda(this$0));
      }
      return Unit_getInstance();
    };
  }
  function SnapshotStateObserver$readObserver$lambda(this$0) {
    return function (state) {
      var tmp;
      if (!this$0.c2h_1) {
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp0_synchronized = this$0.a2h_1;
        var tmp$ret$0;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        ensureNotNull(this$0.d2h_1).l1r(state);
        tmp$ret$0 = Unit_getInstance();
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp$ret$1;
      }
      return Unit_getInstance();
    };
  }
  function SnapshotStateObserver$observeReads$lambda(this$0, $block) {
    return function () {
      Companion_getInstance_9().w1t(this$0.y2g_1, null, $block);
      return Unit_getInstance();
    };
  }
  function SnapshotStateObserver(onChangedExecutor) {
    this.w2g_1 = onChangedExecutor;
    var tmp = this;
    tmp.x2g_1 = SnapshotStateObserver$applyObserver$lambda(this);
    var tmp_0 = this;
    tmp_0.y2g_1 = SnapshotStateObserver$readObserver$lambda(this);
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp$ret$1 = new MutableVector(tmp$ret$0, 0);
    tmp$ret$2 = tmp$ret$1;
    tmp_1.z2g_1 = tmp$ret$2;
    this.a2h_1 = createSynchronizedObject();
    this.b2h_1 = null;
    this.c2h_1 = false;
    this.d2h_1 = null;
    this.e2h_1 = 8;
  }
  SnapshotStateObserver.prototype.n2h = function (scope, onValueChangedForScope, block) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.a2h_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.observeReads.<anonymous>' call
    tmp$ret$0 = ensureMap(this, onValueChangedForScope);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var scopeMap = tmp$ret$2;
    var oldPaused = this.c2h_1;
    var oldMap = this.d2h_1;
    try {
      this.c2h_1 = false;
      this.d2h_1 = scopeMap;
      // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.observe' call
      var previousScope = scopeMap.l2g_1;
      var previousReads = scopeMap.m2g_1;
      var previousToken = scopeMap.n2g_1;
      scopeMap.l2g_1 = scope;
      scopeMap.m2g_1 = scopeMap.p2g_1.c1s(scope);
      if (scopeMap.n2g_1 === -1) {
        scopeMap.n2g_1 = currentSnapshot().o1l();
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.observeReads.<anonymous>' call
      observeDerivedStateRecalculations(scopeMap.r2g_1, scopeMap.s2g_1, SnapshotStateObserver$observeReads$lambda(this, block));
      clearObsoleteStateReads(scopeMap, ensureNotNull(scopeMap.l2g_1));
      scopeMap.l2g_1 = previousScope;
      scopeMap.m2g_1 = previousReads;
      scopeMap.n2g_1 = previousToken;
    }finally {
      this.d2h_1 = oldMap;
      this.c2h_1 = oldPaused;
    }
  };
  SnapshotStateObserver.prototype.o2h = function (scope) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.forEachScopeMap' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.a2h_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_forEach = this.z2g_1;
    // Inline function 'kotlin.contracts.contract' call
    var size = tmp0_forEach.s1s_1;
    var tmp;
    if (size > 0) {
      var i = 0;
      var tmp_0 = tmp0_forEach.q1s_1;
      var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
      do {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.clear.<anonymous>' call
        var tmp0__anonymous__q1qw7t = content[i];
        tmp0__anonymous__q1qw7t.j2h(scope);
        var tmp0 = i;
        i = tmp0 + 1 | 0;
      }
       while (i < size);
      tmp = Unit_getInstance();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
  };
  SnapshotStateObserver.prototype.p2h = function (predicate) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.forEachScopeMap' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.a2h_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_forEach = this.z2g_1;
    // Inline function 'kotlin.contracts.contract' call
    var size = tmp0_forEach.s1s_1;
    var tmp;
    if (size > 0) {
      var i = 0;
      var tmp_0 = tmp0_forEach.q1s_1;
      var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
      do {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.clearIf.<anonymous>' call
        var tmp0__anonymous__q1qw7t = content[i];
        tmp0__anonymous__q1qw7t.k2h(predicate);
        var tmp0 = i;
        i = tmp0 + 1 | 0;
      }
       while (i < size);
      tmp = Unit_getInstance();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
  };
  SnapshotStateObserver.prototype.q2h = function () {
    this.b2h_1 = Companion_getInstance_9().w1y(this.x2g_1);
  };
  SnapshotStateObserver.prototype.r2h = function () {
    var tmp0_safe_receiver = this.b2h_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.vk();
    }
  };
  SnapshotStateObserver.prototype.g9 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.forEachScopeMap' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.a2h_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_forEach = this.z2g_1;
    // Inline function 'kotlin.contracts.contract' call
    var size = tmp0_forEach.s1s_1;
    var tmp;
    if (size > 0) {
      var i = 0;
      var tmp_0 = tmp0_forEach.q1s_1;
      var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
      do {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.clear.<anonymous>' call
        var tmp0__anonymous__q1qw7t = content[i];
        tmp0__anonymous__q1qw7t.g9();
        var tmp0 = i;
        i = tmp0 + 1 | 0;
      }
       while (i < size);
      tmp = Unit_getInstance();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
  };
  SnapshotStateObserver.$metadata$ = classMeta('SnapshotStateObserver');
  function CompositionData() {
  }
  CompositionData.$metadata$ = interfaceMeta('CompositionData');
  function CompositionGroup() {
  }
  CompositionGroup.$metadata$ = interfaceMeta('CompositionGroup', [CompositionData]);
  function get_LocalInspectionTables() {
    init_properties_InspectionTables_kt_4oiy2p();
    return LocalInspectionTables;
  }
  var LocalInspectionTables;
  function LocalInspectionTables$lambda() {
    init_properties_InspectionTables_kt_4oiy2p();
    return null;
  }
  var properties_initialized_InspectionTables_kt_tgdbmt;
  function init_properties_InspectionTables_kt_4oiy2p() {
    if (properties_initialized_InspectionTables_kt_tgdbmt) {
    } else {
      properties_initialized_InspectionTables_kt_tgdbmt = true;
      LocalInspectionTables = staticCompositionLocalOf(LocalInspectionTables$lambda);
    }
  }
  function set_nextHash(_set____db54di) {
    init_properties_ActualJs_js_kt_h9bmuk();
    nextHash = _set____db54di;
  }
  function get_nextHash() {
    init_properties_ActualJs_js_kt_h9bmuk();
    return nextHash;
  }
  var nextHash;
  var DefaultMonotonicFrameClock;
  function AtomicReference(value) {
    this.c1q_1 = value;
    this.d1q_1 = 8;
  }
  AtomicReference.prototype.wo = function () {
    return this.c1q_1;
  };
  AtomicReference.prototype.v1q = function (value) {
    this.c1q_1 = value;
  };
  AtomicReference.prototype.e1q = function (value) {
    var oldValue = this.c1q_1;
    this.c1q_1 = value;
    return oldValue;
  };
  AtomicReference.prototype.g1r = function (expect, newValue) {
    var tmp;
    if (equals(expect, this.c1q_1)) {
      this.c1q_1 = newValue;
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  AtomicReference.$metadata$ = classMeta('AtomicReference');
  function SnapshotThreadLocal() {
    this.o1s_1 = null;
  }
  SnapshotThreadLocal.prototype.wo = function () {
    return this.o1s_1;
  };
  SnapshotThreadLocal.prototype.p1s = function (value) {
    this.o1s_1 = value;
  };
  SnapshotThreadLocal.$metadata$ = classMeta('SnapshotThreadLocal');
  function identityHashCode(instance) {
    init_properties_ActualJs_js_kt_h9bmuk();
    if (instance == null) {
      return 0;
    }
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = instance;
    var hashCode = tmp$ret$0['kotlinIdentityHashcodeValue$'];
    if (hashCode != null) {
      return hashCode;
    }
    var tmp0_subject = typeof instance;
    var tmp;
    switch (tmp0_subject) {
      case 'object':
      case 'function':
        tmp = memoizeIdentityHashCode(instance);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('identity hash code for ' + typeof instance + ' is not supported');
    }
    return tmp;
  }
  function MonotonicClockImpl$withFrameNanos$lambda($onFrame, $safe) {
    return function (it) {
      var duration = toDuration(it, DurationUnit_MILLISECONDS_getInstance());
      var result = $onFrame(Duration__toLongNanoseconds_impl_xyxob7(duration));
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      $safe.m4(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function $withFrameNanosCOROUTINE$4(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a2i_1 = _this__u8e3s4;
    this.b2i_1 = onFrame;
  }
  $withFrameNanosCOROUTINE$4.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            var tmp_0 = this;
            tmp_0.c2i_1 = this;
            this.d2i_1 = SafeContinuation_init_$Create$(intercepted(this.c2i_1));
            var tmp_1 = window;
            tmp_1.requestAnimationFrame(MonotonicClockImpl$withFrameNanos$lambda(this.b2i_1, this.d2i_1));
            ;
            suspendResult = returnIfSuspended(this.d2i_1.gc(), this);
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
  $withFrameNanosCOROUTINE$4.$metadata$ = classMeta('$withFrameNanosCOROUTINE$4', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function MonotonicClockImpl() {
  }
  MonotonicClockImpl.prototype.x1a = function (onFrame, $cont) {
    var tmp = new $withFrameNanosCOROUTINE$4(this, onFrame, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  MonotonicClockImpl.$metadata$ = classMeta('MonotonicClockImpl', [MonotonicFrameClock]);
  function memoizeIdentityHashCode(instance) {
    init_properties_ActualJs_js_kt_h9bmuk();
    var tmp0 = get_nextHash();
    set_nextHash(tmp0 + 1 | 0);
    var value = tmp0;
    var descriptor = new Object();
    descriptor.value = value;
    descriptor.writable = false;
    descriptor.configurable = false;
    descriptor.enumerable = false;
    Object.defineProperty(instance, 'kotlinIdentityHashcodeValue$', descriptor);
    return value;
  }
  function createSnapshotMutableState(value, policy) {
    init_properties_ActualJs_js_kt_h9bmuk();
    return new SnapshotMutableStateImpl(value, policy);
  }
  var properties_initialized_ActualJs_js_kt_azbr3k;
  function init_properties_ActualJs_js_kt_h9bmuk() {
    if (properties_initialized_ActualJs_js_kt_azbr3k) {
    } else {
      properties_initialized_ActualJs_js_kt_azbr3k = true;
      nextHash = 1;
      DefaultMonotonicFrameClock = new MonotonicClockImpl();
    }
  }
  function Trace() {
    Trace_instance = this;
  }
  Trace.prototype.i1l = function (name) {
    return null;
  };
  Trace.prototype.u1l = function (token) {
  };
  Trace.$metadata$ = objectMeta('Trace');
  var Trace_instance;
  function Trace_getInstance() {
    if (Trace_instance == null)
      new Trace();
    return Trace_instance;
  }
  function invokeComposableForResult$composable(composer, composable) {
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = composable;
    tmp$ret$1 = tmp$ret$0;
    var tmp0_unsafeCast = tmp$ret$1(composer, 1);
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp0_unsafeCast;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  }
  function invokeComposable$composable(composer, composable) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = composable;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$1(composer, 1);
  }
  function ComposableLambda() {
  }
  ComposableLambda.$metadata$ = interfaceMeta('ComposableLambda');
  function trackWrite($this) {
    if ($this.u27_1) {
      var scope = $this.w27_1;
      if (!(scope == null)) {
        scope.t1r();
        $this.w27_1 = null;
      }
      var scopes = $this.x27_1;
      if (!(scopes == null)) {
        var inductionVariable = 0;
        var last = scopes.f();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = scopes.g(index);
            item.t1r();
          }
           while (inductionVariable < last);
        scopes.g9();
      }
    }
  }
  function trackRead($this, composer) {
    if ($this.u27_1) {
      var scope = composer.l1o();
      if (!(scope == null)) {
        composer.m1o(scope);
        var lastScope = $this.w27_1;
        if (replacableWith(lastScope, scope)) {
          $this.w27_1 = scope;
        } else {
          var lastScopes = $this.x27_1;
          if (lastScopes == null) {
            var tmp$ret$0;
            // Inline function 'kotlin.collections.mutableListOf' call
            tmp$ret$0 = ArrayList_init_$Create$();
            var newScopes = tmp$ret$0;
            $this.x27_1 = newScopes;
            newScopes.a(scope);
          } else {
            var inductionVariable = 0;
            var last = lastScopes.f();
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var scopeAtIndex = lastScopes.g(index);
                if (replacableWith(scopeAtIndex, scope)) {
                  lastScopes.d9(index, scope);
                  return Unit_getInstance();
                }
              }
               while (inductionVariable < last);
            lastScopes.a(scope);
          }
        }
      }
    }
  }
  function invoke$invoke(receiver, p0, p1) {
    receiver.j1m(p0, p1);
  }
  function ComposableLambdaImpl$invoke$invoke$ref($boundThis) {
    return function (p0, p1) {
      invoke$invoke($boundThis, p0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableLambdaImpl$invoke$lambda(this$0, $p1, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.e2i($p1, nc, $changed | 1);
      return Unit_getInstance();
    };
  }
  function ComposableLambdaImpl$invoke$lambda_0(this$0, $p1, $p2, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.f2i($p1, $p2, nc, $changed | 1);
      return Unit_getInstance();
    };
  }
  function ComposableLambdaImpl(key, tracked) {
    this.t27_1 = key;
    this.u27_1 = tracked;
    this.v27_1 = null;
    this.w27_1 = null;
    this.x27_1 = null;
  }
  ComposableLambdaImpl.prototype.y27 = function (block) {
    if (!equals(this.v27_1, block)) {
      var oldBlockNull = this.v27_1 == null;
      this.v27_1 = block;
      if (!oldBlockNull) {
        trackWrite(this);
      }
    }
  };
  ComposableLambdaImpl.prototype.j1m = function (c, changed) {
    var c_0 = c.z1n(this.t27_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.z1a(this) ? differentBits(0) : sameBits(0));
    var tmp = this.v27_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(c_0, dirty);
    var tmp0_safe_receiver = c_0.a1o();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g1p(ComposableLambdaImpl$invoke$invoke$ref(this));
    }
    return result;
  };
  ComposableLambdaImpl.prototype.e2i = function (p1, c, changed) {
    var c_0 = c.z1n(this.t27_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.z1a(this) ? differentBits(1) : sameBits(1));
    var tmp = this.v27_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, c_0, dirty);
    var tmp0_safe_receiver = c_0.a1o();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g1p(ComposableLambdaImpl$invoke$lambda(this, p1, changed));
    }
    return result;
  };
  ComposableLambdaImpl.prototype.f2i = function (p1, p2, c, changed) {
    var c_0 = c.z1n(this.t27_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.z1a(this) ? differentBits(2) : sameBits(2));
    var tmp = this.v27_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, p2, c_0, dirty);
    var tmp0_safe_receiver = c_0.a1o();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g1p(ComposableLambdaImpl$invoke$lambda_0(this, p1, p2, changed));
    }
    return result;
  };
  ComposableLambdaImpl.$metadata$ = classMeta('ComposableLambdaImpl', [ComposableLambda]);
  //region block: post-declaration
  OffsetApplier.prototype.t19 = onBeginChanges;
  OffsetApplier.prototype.u19 = onEndChanges;
  AbstractApplier.prototype.t19 = onBeginChanges;
  AbstractApplier.prototype.u19 = onEndChanges;
  BroadcastFrameClock.prototype.g2 = get_key;
  BroadcastFrameClock.prototype.g5 = get;
  BroadcastFrameClock.prototype.m5 = fold;
  BroadcastFrameClock.prototype.l5 = minusKey;
  BroadcastFrameClock.prototype.n5 = plus;
  DerivedSnapshotState.prototype.a1u = mergeRecords;
  StructuralEqualityPolicy.prototype.b20 = merge;
  NeverEqualPolicy.prototype.b20 = merge;
  ReferentialEqualityPolicy.prototype.b20 = merge;
  SnapshotStateList.prototype.a1u = mergeRecords;
  SnapshotStateMap.prototype.a1u = mergeRecords;
  MonotonicClockImpl.prototype.g2 = get_key;
  MonotonicClockImpl.prototype.g5 = get;
  MonotonicClockImpl.prototype.m5 = fold;
  MonotonicClockImpl.prototype.l5 = minusKey;
  MonotonicClockImpl.prototype.n5 = plus;
  //endregion
  //region block: init
  reuseKey = 207;
  movableContentKey = 126665345;
  Aux_Shift = 28;
  GroupInfo_Offset = 1;
  ObjectKey_Shift = 29;
  DataAnchor_Offset = 4;
  Slots_Shift = 28;
  MAX_BUFFER_SIZE = 32;
  MAX_BUFFER_SIZE_MINUS_ONE = 31;
  LOG_MAX_BUFFER_SIZE = 5;
  MUTABLE_BUFFER_SIZE = 33;
  TRIE_MAX_HEIGHT = 7;
  ENTRY_SIZE = 2;
  LOG_MAX_BRANCHING_FACTOR = 5;
  MAX_SHIFT = 30;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MutableVector;
  _.$_$.b = composableLambdaInstance;
  _.$_$.c = composableLambda;
  _.$_$.d = SnapshotMutableState;
  _.$_$.e = SnapshotStateObserver;
  _.$_$.f = $get_currentCompositeKeyHash$$composable_u3vbzj;
  _.$_$.g = AbstractApplier;
  _.$_$.h = onBeginChanges;
  _.$_$.i = onEndChanges;
  _.$_$.j = Applier;
  _.$_$.k = AtomicReference;
  _.$_$.l = BroadcastFrameClock;
  _.$_$.m = CompositionLocalProvider$composable;
  _.$_$.n = CompositionLocalProvider$composable_0;
  _.$_$.o = CompositionScopedCoroutineScopeCanceller;
  _.$_$.p = Composition_0;
  _.$_$.q = DisposableEffect$composable;
  _.$_$.r = DisposableEffect$composable_0;
  _.$_$.s = DisposableEffectResult;
  _.$_$.t = LaunchedEffect$composable_1;
  _.$_$.u = LaunchedEffect$composable;
  _.$_$.v = LaunchedEffect$composable_0;
  _.$_$.w = LaunchedEffect$composable_2;
  _.$_$.x = Recomposer;
  _.$_$.y = RememberObserver;
  _.$_$.z = SideEffect$composable;
  _.$_$.a1 = SkippableUpdater;
  _.$_$.b1 = State_0;
  _.$_$.c1 = compositionLocalOf;
  _.$_$.d1 = createCompositionCoroutineScope;
  _.$_$.e1 = derivedStateOf;
  _.$_$.f1 = invalidApplier;
  _.$_$.g1 = isTraceInProgress;
  _.$_$.h1 = mutableStateListOf;
  _.$_$.i1 = mutableStateMapOf;
  _.$_$.j1 = mutableStateOf;
  _.$_$.k1 = neverEqualPolicy;
  _.$_$.l1 = referentialEqualityPolicy;
  _.$_$.m1 = rememberCompositionContext$composable;
  _.$_$.n1 = rememberUpdatedState$composable;
  _.$_$.o1 = get_reuseKey;
  _.$_$.p1 = sourceInformationMarkerEnd;
  _.$_$.q1 = sourceInformationMarkerStart;
  _.$_$.r1 = sourceInformation;
  _.$_$.s1 = staticCompositionLocalOf;
  _.$_$.t1 = structuralEqualityPolicy;
  _.$_$.u1 = toMutableStateList;
  _.$_$.v1 = traceEventEnd;
  _.$_$.w1 = traceEventStart;
  _.$_$.x1 = withFrameNanos;
  _.$_$.y1 = compositionLocalOf$default;
  _.$_$.z1 = mutableStateOf$default;
  _.$_$.a2 = _SkippableUpdater___init__impl__4ft0t9;
  _.$_$.b2 = _SkippableUpdater___get_composer__impl__6t7yne;
  _.$_$.c2 = _Updater___init__impl__rbfxm8;
  _.$_$.d2 = Updater__set_impl_v7kwss;
  _.$_$.e2 = Companion_getInstance_9;
  _.$_$.f2 = Companion_getInstance_1;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-runtime.js.map
