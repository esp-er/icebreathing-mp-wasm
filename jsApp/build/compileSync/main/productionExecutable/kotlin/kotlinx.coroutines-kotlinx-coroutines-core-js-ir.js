(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    root['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] = factory(typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined' ? {} : this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var THROW_CCE = kotlin_kotlin.$_$.ba;
  var isObject = kotlin_kotlin.$_$.o7;
  var Unit_getInstance = kotlin_kotlin.$_$.s2;
  var plus = kotlin_kotlin.$_$.j6;
  var get = kotlin_kotlin.$_$.f6;
  var fold = kotlin_kotlin.$_$.e6;
  var minusKey = kotlin_kotlin.$_$.g6;
  var Continuation = kotlin_kotlin.$_$.d6;
  var classMeta = kotlin_kotlin.$_$.y6;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.l2;
  var Key_getInstance = kotlin_kotlin.$_$.k2;
  var equals = kotlin_kotlin.$_$.a7;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.w5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var intercepted = kotlin_kotlin.$_$.x5;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v5;
  var interfaceMeta = kotlin_kotlin.$_$.k7;
  var isInterface = kotlin_kotlin.$_$.n7;
  var toString = kotlin_kotlin.$_$.ab;
  var toString_0 = kotlin_kotlin.$_$.x7;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var objectMeta = kotlin_kotlin.$_$.u7;
  var hashCode = kotlin_kotlin.$_$.i7;
  var CoroutineImpl = kotlin_kotlin.$_$.k6;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.x;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.c2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.e2;
  var Companion_getInstance = kotlin_kotlin.$_$.q2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.b2;
  var createFailure = kotlin_kotlin.$_$.ia;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.z5;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.y5;
  var get_0 = kotlin_kotlin.$_$.a6;
  var minusKey_0 = kotlin_kotlin.$_$.b6;
  var ContinuationInterceptor = kotlin_kotlin.$_$.c6;
  var Key = kotlin_kotlin.$_$.i6;
  var Element = kotlin_kotlin.$_$.h6;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var Enum = kotlin_kotlin.$_$.q9;
  var startCoroutine = kotlin_kotlin.$_$.p6;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ra;
  var Long = kotlin_kotlin.$_$.v9;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.p2;
  var RuntimeException = kotlin_kotlin.$_$.aa;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.u1;
  var captureStack = kotlin_kotlin.$_$.t6;
  var Error_0 = kotlin_kotlin.$_$.r9;
  var Error_init_$Init$ = kotlin_kotlin.$_$.h1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.wa;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var CancellationException = kotlin_kotlin.$_$.u5;
  var ArrayList = kotlin_kotlin.$_$.b3;
  var SequenceScope = kotlin_kotlin.$_$.v8;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.o1;
  var sequence = kotlin_kotlin.$_$.x8;
  var anyToString = kotlin_kotlin.$_$.r6;
  var SuspendFunction1 = kotlin_kotlin.$_$.m6;
  var UnsupportedOperationException = kotlin_kotlin.$_$.fa;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.w;
  var returnIfSuspended = kotlin_kotlin.$_$.f;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var fillArrayVal = kotlin_kotlin.$_$.b7;
  var fill = kotlin_kotlin.$_$.i4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var fill$default = kotlin_kotlin.$_$.h;
  var ensureNotNull = kotlin_kotlin.$_$.ja;
  var NoSuchElementException = kotlin_kotlin.$_$.w9;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.r1;
  var IllegalStateException = kotlin_kotlin.$_$.u9;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.m1;
  var toLong = kotlin_kotlin.$_$.v7;
  var arrayIterator = kotlin_kotlin.$_$.s6;
  var copyOf = kotlin_kotlin.$_$.c4;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.o2;
  var arrayCopy = kotlin_kotlin.$_$.t3;
  var toLongOrNull = kotlin_kotlin.$_$.g9;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.y;
  var getStringHashCode = kotlin_kotlin.$_$.h7;
  var coerceIn = kotlin_kotlin.$_$.m8;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.r;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.w1;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    var tmp;
    if ($handler == null) {
      this.cj(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(cause);
    }
    return tmp;
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancelling = false;
    if (!(($mask0 & 2) === 0))
      invokeImmediately = true;
    return $handler == null ? this.xi(onCancelling, invokeImmediately, handler) : $handler(onCancelling, invokeImmediately, handler);
  }
  AbstractCoroutine.prototype = Object.create(JobSupport.prototype);
  AbstractCoroutine.prototype.constructor = AbstractCoroutine;
  StandaloneCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  StandaloneCoroutine.prototype.constructor = StandaloneCoroutine;
  LazyStandaloneCoroutine.prototype = Object.create(StandaloneCoroutine.prototype);
  LazyStandaloneCoroutine.prototype.constructor = LazyStandaloneCoroutine;
  ScopeCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  ScopeCoroutine.prototype.constructor = ScopeCoroutine;
  DispatchedCoroutine.prototype = Object.create(ScopeCoroutine.prototype);
  DispatchedCoroutine.prototype.constructor = DispatchedCoroutine;
  function tryResume$default(value, idempotent, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      idempotent = null;
    return $handler == null ? this.jk(value, idempotent) : $handler(value, idempotent);
  }
  function cancel$default_0(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.ok(cause) : $handler(cause);
  }
  CancelHandler.prototype = Object.create(CancelHandlerBase.prototype);
  CancelHandler.prototype.constructor = CancelHandler;
  DisposeOnCancel.prototype = Object.create(CancelHandler.prototype);
  DisposeOnCancel.prototype.constructor = DisposeOnCancel;
  BeforeResumeCancelHandler.prototype = Object.create(CancelHandler.prototype);
  BeforeResumeCancelHandler.prototype.constructor = BeforeResumeCancelHandler;
  RemoveOnCancel.prototype = Object.create(BeforeResumeCancelHandler.prototype);
  RemoveOnCancel.prototype.constructor = RemoveOnCancel;
  DispatchedTask.prototype = Object.create(SchedulerTask.prototype);
  DispatchedTask.prototype.constructor = DispatchedTask;
  CancellableContinuationImpl.prototype = Object.create(DispatchedTask.prototype);
  CancellableContinuationImpl.prototype.constructor = CancellableContinuationImpl;
  InvokeOnCancel.prototype = Object.create(CancelHandler.prototype);
  InvokeOnCancel.prototype.constructor = InvokeOnCancel;
  $awaitCOROUTINE$2.prototype = Object.create(CoroutineImpl.prototype);
  $awaitCOROUTINE$2.prototype.constructor = $awaitCOROUTINE$2;
  CompletableDeferredImpl.prototype = Object.create(JobSupport.prototype);
  CompletableDeferredImpl.prototype.constructor = CompletableDeferredImpl;
  CancelledContinuation.prototype = Object.create(CompletedExceptionally.prototype);
  CancelledContinuation.prototype.constructor = CancelledContinuation;
  Key_0.prototype = Object.create(AbstractCoroutineContextKey.prototype);
  Key_0.prototype.constructor = Key_0;
  CoroutineDispatcher.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineDispatcher.prototype.constructor = CoroutineDispatcher;
  _no_name_provided__qut3iv.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  _no_name_provided__qut3iv.prototype.constructor = _no_name_provided__qut3iv;
  CoroutineStart.prototype = Object.create(Enum.prototype);
  CoroutineStart.prototype.constructor = CoroutineStart;
  function invokeOnTimeout(timeMillis, block, context) {
    return get_DefaultDelay().bo(timeMillis, block, context);
  }
  EventLoop.prototype = Object.create(CoroutineDispatcher.prototype);
  EventLoop.prototype.constructor = EventLoop;
  CompletionHandlerException.prototype = Object.create(RuntimeException.prototype);
  CompletionHandlerException.prototype.constructor = CompletionHandlerException;
  CoroutinesInternalError.prototype = Object.create(Error_0.prototype);
  CoroutinesInternalError.prototype.constructor = CoroutinesInternalError;
  LinkedListHead.prototype = Object.create(LinkedListNode.prototype);
  LinkedListHead.prototype.constructor = LinkedListHead;
  NodeList.prototype = Object.create(LinkedListHead.prototype);
  NodeList.prototype.constructor = NodeList;
  CompletionHandlerBase.prototype = Object.create(LinkedListNode.prototype);
  CompletionHandlerBase.prototype.constructor = CompletionHandlerBase;
  JobNode.prototype = Object.create(CompletionHandlerBase.prototype);
  JobNode.prototype.constructor = JobNode;
  ChildCompletion.prototype = Object.create(JobNode.prototype);
  ChildCompletion.prototype.constructor = ChildCompletion;
  AwaitContinuation.prototype = Object.create(CancellableContinuationImpl.prototype);
  AwaitContinuation.prototype.constructor = AwaitContinuation;
  JobSupport$_get_children_$slambda_k839f8.prototype = Object.create(CoroutineImpl.prototype);
  JobSupport$_get_children_$slambda_k839f8.prototype.constructor = JobSupport$_get_children_$slambda_k839f8;
  JobCancellingNode.prototype = Object.create(JobNode.prototype);
  JobCancellingNode.prototype.constructor = JobCancellingNode;
  ChildHandleNode.prototype = Object.create(JobCancellingNode.prototype);
  ChildHandleNode.prototype.constructor = ChildHandleNode;
  InvokeOnCancelling.prototype = Object.create(JobCancellingNode.prototype);
  InvokeOnCancelling.prototype.constructor = InvokeOnCancelling;
  InvokeOnCompletion.prototype = Object.create(JobNode.prototype);
  InvokeOnCompletion.prototype.constructor = InvokeOnCompletion;
  ResumeOnCompletion.prototype = Object.create(JobNode.prototype);
  ResumeOnCompletion.prototype.constructor = ResumeOnCompletion;
  ResumeAwaitOnCompletion.prototype = Object.create(JobNode.prototype);
  ResumeAwaitOnCompletion.prototype.constructor = ResumeAwaitOnCompletion;
  ChildContinuation.prototype = Object.create(JobCancellingNode.prototype);
  ChildContinuation.prototype.constructor = ChildContinuation;
  JobImpl.prototype = Object.create(JobSupport.prototype);
  JobImpl.prototype.constructor = JobImpl;
  DisposeOnCompletion.prototype = Object.create(JobNode.prototype);
  DisposeOnCompletion.prototype.constructor = DisposeOnCompletion;
  MainCoroutineDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  MainCoroutineDispatcher.prototype.constructor = MainCoroutineDispatcher;
  SupervisorJobImpl.prototype = Object.create(JobImpl.prototype);
  SupervisorJobImpl.prototype.constructor = SupervisorJobImpl;
  TimeoutCancellationException.prototype = Object.create(CancellationException.prototype);
  TimeoutCancellationException.prototype.constructor = TimeoutCancellationException;
  TimeoutCoroutine.prototype = Object.create(ScopeCoroutine.prototype);
  TimeoutCoroutine.prototype.constructor = TimeoutCoroutine;
  $withTimeoutOrNullCOROUTINE$3.prototype = Object.create(CoroutineImpl.prototype);
  $withTimeoutOrNullCOROUTINE$3.prototype.constructor = $withTimeoutOrNullCOROUTINE$3;
  Unconfined.prototype = Object.create(CoroutineDispatcher.prototype);
  Unconfined.prototype.constructor = Unconfined;
  YieldContext.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  YieldContext.prototype.constructor = YieldContext;
  RemoveReceiveOnCancel.prototype = Object.create(BeforeResumeCancelHandler.prototype);
  RemoveReceiveOnCancel.prototype.constructor = RemoveReceiveOnCancel;
  Receive.prototype = Object.create(LinkedListNode.prototype);
  Receive.prototype.constructor = Receive;
  ReceiveElement.prototype = Object.create(Receive.prototype);
  ReceiveElement.prototype.constructor = ReceiveElement;
  ReceiveElementWithUndeliveredHandler.prototype = Object.create(ReceiveElement.prototype);
  ReceiveElementWithUndeliveredHandler.prototype.constructor = ReceiveElementWithUndeliveredHandler;
  ReceiveHasNext.prototype = Object.create(Receive.prototype);
  ReceiveHasNext.prototype.constructor = ReceiveHasNext;
  AbstractChannel.prototype = Object.create(AbstractSendChannel.prototype);
  AbstractChannel.prototype.constructor = AbstractChannel;
  Send.prototype = Object.create(LinkedListNode.prototype);
  Send.prototype.constructor = Send;
  SendBuffered.prototype = Object.create(Send.prototype);
  SendBuffered.prototype.constructor = SendBuffered;
  Closed.prototype = Object.create(Send.prototype);
  Closed.prototype.constructor = Closed;
  ArrayChannel.prototype = Object.create(AbstractChannel.prototype);
  ArrayChannel.prototype.constructor = ArrayChannel;
  BufferOverflow.prototype = Object.create(Enum.prototype);
  BufferOverflow.prototype.constructor = BufferOverflow;
  Closed_0.prototype = Object.create(Failed.prototype);
  Closed_0.prototype.constructor = Closed_0;
  ClosedReceiveChannelException.prototype = Object.create(NoSuchElementException.prototype);
  ClosedReceiveChannelException.prototype.constructor = ClosedReceiveChannelException;
  ClosedSendChannelException.prototype = Object.create(IllegalStateException.prototype);
  ClosedSendChannelException.prototype.constructor = ClosedSendChannelException;
  ConflatedChannel.prototype = Object.create(AbstractChannel.prototype);
  ConflatedChannel.prototype.constructor = ConflatedChannel;
  LinkedListChannel.prototype = Object.create(AbstractChannel.prototype);
  LinkedListChannel.prototype.constructor = LinkedListChannel;
  RendezvousChannel.prototype = Object.create(AbstractChannel.prototype);
  RendezvousChannel.prototype.constructor = RendezvousChannel;
  $collectCOROUTINE$8.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$8.prototype.constructor = $collectCOROUTINE$8;
  SharedFlowImpl.prototype = Object.create(AbstractSharedFlow.prototype);
  SharedFlowImpl.prototype.constructor = SharedFlowImpl;
  SharedFlowSlot.prototype = Object.create(AbstractSharedFlowSlot.prototype);
  SharedFlowSlot.prototype.constructor = SharedFlowSlot;
  $collectCOROUTINE$9.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$9.prototype.constructor = $collectCOROUTINE$9;
  StateFlowImpl.prototype = Object.create(AbstractSharedFlow.prototype);
  StateFlowImpl.prototype.constructor = StateFlowImpl;
  StateFlowSlot.prototype = Object.create(AbstractSharedFlowSlot.prototype);
  StateFlowSlot.prototype.constructor = StateFlowSlot;
  unsafeTransform$o$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  unsafeTransform$o$collect$slambda.prototype.constructor = unsafeTransform$o$collect$slambda;
  $collectCOROUTINE$11.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$11.prototype.constructor = $collectCOROUTINE$11;
  $onSubscriptionCOROUTINE$16.prototype = Object.create(CoroutineImpl.prototype);
  $onSubscriptionCOROUTINE$16.prototype.constructor = $onSubscriptionCOROUTINE$16;
  filter$o$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  filter$o$collect$slambda.prototype.constructor = filter$o$collect$slambda;
  $collectCOROUTINE$17.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$17.prototype.constructor = $collectCOROUTINE$17;
  AtomicOp.prototype = Object.create(OpDescriptor.prototype);
  AtomicOp.prototype.constructor = AtomicOp;
  DispatchedContinuation.prototype = Object.create(DispatchedTask.prototype);
  DispatchedContinuation.prototype.constructor = DispatchedContinuation;
  UndeliveredElementException.prototype = Object.create(RuntimeException.prototype);
  UndeliveredElementException.prototype.constructor = UndeliveredElementException;
  function tryLock$default(owner, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      owner = null;
    return $handler == null ? this.n16(owner) : $handler(owner);
  }
  function lock$default(owner, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      owner = null;
    return $handler == null ? this.p16(owner, $cont) : $handler(owner, $cont);
  }
  function unlock$default(owner, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      owner = null;
    var tmp;
    if ($handler == null) {
      this.r16(owner);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(owner);
    }
    return tmp;
  }
  LockedQueue.prototype = Object.create(LinkedListHead.prototype);
  LockedQueue.prototype.constructor = LockedQueue;
  LockWaiter.prototype = Object.create(LinkedListNode.prototype);
  LockWaiter.prototype.constructor = LockWaiter;
  LockCont.prototype = Object.create(LockWaiter.prototype);
  LockCont.prototype.constructor = LockCont;
  UnlockOp.prototype = Object.create(AtomicOp.prototype);
  UnlockOp.prototype.constructor = UnlockOp;
  UndispatchedCoroutine.prototype = Object.create(ScopeCoroutine.prototype);
  UndispatchedCoroutine.prototype.constructor = UndispatchedCoroutine;
  JsMainDispatcher.prototype = Object.create(MainCoroutineDispatcher.prototype);
  JsMainDispatcher.prototype.constructor = JsMainDispatcher;
  UnconfinedEventLoop.prototype = Object.create(EventLoop.prototype);
  UnconfinedEventLoop.prototype.constructor = UnconfinedEventLoop;
  JobCancellationException.prototype = Object.create(CancellationException.prototype);
  JobCancellationException.prototype.constructor = JobCancellationException;
  SetTimeoutBasedDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  SetTimeoutBasedDispatcher.prototype.constructor = SetTimeoutBasedDispatcher;
  NodeDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  NodeDispatcher.prototype.constructor = NodeDispatcher;
  SetTimeoutDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  SetTimeoutDispatcher.prototype.constructor = SetTimeoutDispatcher;
  MessageQueue.prototype = Object.create(ArrayQueue.prototype);
  MessageQueue.prototype.constructor = MessageQueue;
  ScheduledMessageQueue.prototype = Object.create(MessageQueue.prototype);
  ScheduledMessageQueue.prototype.constructor = ScheduledMessageQueue;
  ClearTimeout.prototype = Object.create(CancelHandler.prototype);
  ClearTimeout.prototype.constructor = ClearTimeout;
  WindowDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  WindowDispatcher.prototype.constructor = WindowDispatcher;
  WindowMessageQueue.prototype = Object.create(MessageQueue.prototype);
  WindowMessageQueue.prototype.constructor = WindowMessageQueue;
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.rh(parentContext.g5(Key_getInstance_2()));
    }
    this.uh_1 = parentContext.n5(this);
  }
  AbstractCoroutine.prototype.o4 = function () {
    return this.uh_1;
  };
  AbstractCoroutine.prototype.vh = function () {
    return this.uh_1;
  };
  AbstractCoroutine.prototype.wh = function () {
    return JobSupport.prototype.wh.call(this);
  };
  AbstractCoroutine.prototype.xh = function (value) {
  };
  AbstractCoroutine.prototype.yh = function (cause, handled) {
  };
  AbstractCoroutine.prototype.zh = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  AbstractCoroutine.prototype.ai = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.yh(state.bi_1, state.di());
    } else {
      this.xh((state == null ? true : isObject(state)) ? state : THROW_CCE());
    }
  };
  AbstractCoroutine.prototype.m4 = function (result) {
    var state = this.ei(toState$default(result, null, 1, null));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_getInstance();
    this.fi(state);
  };
  AbstractCoroutine.prototype.fi = function (state) {
    return this.gi(state);
  };
  AbstractCoroutine.prototype.hi = function (exception) {
    handleCoroutineException(this.uh_1, exception);
  };
  AbstractCoroutine.prototype.ii = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.uh_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return JobSupport.prototype.ii.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + JobSupport.prototype.ii.call(this);
  };
  AbstractCoroutine.prototype.ji = function (start, receiver, block) {
    start.mi(block, receiver, this);
  };
  AbstractCoroutine.$metadata$ = classMeta('AbstractCoroutine', [Job, Continuation, CoroutineScope], undefined, undefined, undefined, JobSupport.prototype);
  function launch(_this__u8e3s4, context, start, block) {
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.qj() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.ji(start, coroutine, block);
    return coroutine;
  }
  function launch$default(_this__u8e3s4, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return launch(_this__u8e3s4, context, start, block);
  }
  function withContext(context, block, $cont) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.withContext.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $cont;
      var oldContext = tmp0__anonymous__q1qw7t.o4();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, tmp0__anonymous__q1qw7t);
        tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.g5(Key_getInstance()), oldContext.g5(Key_getInstance()))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, tmp0__anonymous__q1qw7t);
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        tmp$ret$0 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, tmp0__anonymous__q1qw7t);
      startCoroutineCancellable$default(block, coroutine_1, coroutine_1, null, 4, null);
      tmp$ret$0 = coroutine_1.wj();
    }
    return tmp$ret$0;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  StandaloneCoroutine.prototype.oj = function (exception) {
    handleCoroutineException(this.uh_1, exception);
    return true;
  };
  StandaloneCoroutine.$metadata$ = classMeta('StandaloneCoroutine', undefined, undefined, undefined, undefined, AbstractCoroutine.prototype);
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.dk_1 = createCoroutineUnintercepted(block, this, this);
  }
  LazyStandaloneCoroutine.prototype.si = function () {
    startCoroutineCancellable_0(this.dk_1, this);
  };
  LazyStandaloneCoroutine.$metadata$ = classMeta('LazyStandaloneCoroutine', undefined, undefined, undefined, undefined, StandaloneCoroutine.prototype);
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.vj_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.trySuspend.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.jh_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.vj_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already suspended');
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.vj_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.tryResume.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.jh_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.vj_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this.vj_1 = atomic$int$1(0);
  }
  DispatchedCoroutine.prototype.gi = function (state) {
    this.fi(state);
  };
  DispatchedCoroutine.prototype.fi = function (state) {
    if (tryResume(this))
      return Unit_getInstance();
    var tmp = intercepted(this.hk_1);
    var tmp_0 = recoverResult(state, this.hk_1);
    resumeCancellableWith$default(tmp, tmp_0, null, 2, null);
  };
  DispatchedCoroutine.prototype.wj = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.pi());
    if (state instanceof CompletedExceptionally)
      throw state.bi_1;
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  DispatchedCoroutine.$metadata$ = classMeta('DispatchedCoroutine', undefined, undefined, undefined, undefined, ScopeCoroutine.prototype);
  function get_UNDECIDED() {
    return UNDECIDED;
  }
  var UNDECIDED;
  function get_SUSPENDED() {
    return SUSPENDED;
  }
  var SUSPENDED;
  function get_RESUMED() {
    return RESUMED;
  }
  var RESUMED;
  function CancellableContinuation() {
  }
  CancellableContinuation.$metadata$ = interfaceMeta('CancellableContinuation', [Continuation]);
  function disposeOnCancellation(_this__u8e3s4, handle) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new DisposeOnCancel(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return _this__u8e3s4.qk(tmp$ret$1);
  }
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this.tk_1 = handle;
  }
  DisposeOnCancel.prototype.uk = function (cause) {
    return this.tk_1.vk();
  };
  DisposeOnCancel.prototype.invoke = function (cause) {
    return this.uk(cause);
  };
  DisposeOnCancel.prototype.toString = function () {
    return 'DisposeOnCancel[' + this.tk_1 + ']';
  };
  DisposeOnCancel.$metadata$ = classMeta('DisposeOnCancel', undefined, undefined, undefined, undefined, CancelHandler.prototype);
  function removeOnCancellation(_this__u8e3s4, node) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new RemoveOnCancel(node);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return _this__u8e3s4.qk(tmp$ret$1);
  }
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE());
    }
    var tmp0_safe_receiver = delegate.cl();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.getOrCreateCancellableContinuation.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.jl();
      if (tmp$ret$0) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp$ret$1 = tmp_0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE_REUSABLE());
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function RemoveOnCancel(node) {
    BeforeResumeCancelHandler.call(this);
    this.kl_1 = node;
  }
  RemoveOnCancel.prototype.uk = function (cause) {
    this.kl_1.ol();
  };
  RemoveOnCancel.prototype.invoke = function (cause) {
    return this.uk(cause);
  };
  RemoveOnCancel.prototype.toString = function () {
    return 'RemoveOnCancel[' + this.kl_1 + ']';
  };
  RemoveOnCancel.$metadata$ = classMeta('RemoveOnCancel', undefined, undefined, undefined, undefined, BeforeResumeCancelHandler.prototype);
  function get_RESUME_TOKEN() {
    init_properties_CancellableContinuationImpl_kt_jcze1b();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.pi();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.ql_1)) {
      var tmp_0 = $this.el_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).pl();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.el_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.rl(cause);
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      invokeIt(handler, cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        handleCoroutineException($this.o4(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, $p));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.gl_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.jh_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.gl_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already suspended');
      }
    }
  }
  function tryResume_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.gl_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.jh_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.gl_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.o4().g5(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ChildContinuation($this);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var handle = parent.yi(true, false, tmp$ret$1, 2, null);
    $this.il_1 = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this.el_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sl($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.tl();
    $this.ok(cancellationCause);
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var tmp0_error = "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + toString(state);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      tmp = new InvokeOnCancel(handler);
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume_0($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            tmp_2 = false;
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          var tmp_3 = state instanceof CancelHandler ? state : null;
          tmp = CompletedContinuation_init_$Create$(proposedUpdate, tmp_3, onCancellation, idempotent, null, 16, null);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.hl_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.ih_1;
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this.hl_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_getInstance();
        } else {
          if (tmp0_subject instanceof CancelledContinuation) {
            if (tmp1__anonymous__uwfjfc.yl()) {
              var tmp1_safe_receiver = onCancellation;
              if (tmp1_safe_receiver == null)
                null;
              else {
                var tmp$ret$1;
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                $this.ul(tmp1_safe_receiver, tmp1__anonymous__uwfjfc.bi_1);
                tmp$ret$1 = Unit_getInstance();
              }
              return Unit_getInstance();
            }
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      onCancellation = null;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.hl_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResumeImpl.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.ih_1;
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, $this.ql_1, onCancellation, idempotent);
          if (!$this.hl_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          detachChildIfNonResuable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp0_subject instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) ? tmp1__anonymous__uwfjfc.cm_1 === idempotent : false) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var tmp0_error = 'Already resumed, but proposed with update ' + toString(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.tl();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.el_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.fl_1 = this.el_1.o4();
    this.gl_1 = atomic$int$1(0);
    this.hl_1 = atomic$ref$1(Active_getInstance());
    this.il_1 = null;
  }
  CancellableContinuationImpl.prototype.em = function () {
    return this.el_1;
  };
  CancellableContinuationImpl.prototype.o4 = function () {
    return this.fl_1;
  };
  CancellableContinuationImpl.prototype.pi = function () {
    return this.hl_1.ih_1;
  };
  CancellableContinuationImpl.prototype.qi = function () {
    var tmp = this.pi();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  CancellableContinuationImpl.prototype.fm = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.qi()) {
      handle.vk();
      this.il_1 = NonDisposableHandle_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.jl = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this.hl_1.ih_1;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.cm_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.tl();
      return false;
    }
    this.gl_1.jh_1 = 0;
    this.hl_1.ih_1 = Active_getInstance();
    return true;
  };
  CancellableContinuationImpl.prototype.gm = function () {
    return this.pi();
  };
  CancellableContinuationImpl.prototype.hm = function (takenState, cause) {
    var tmp0_loop = this.hl_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.ih_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        throw IllegalStateException_init_$Create$('Not completed');
      } else {
        if (tmp0_subject instanceof CompletedExceptionally)
          return Unit_getInstance();
        else {
          if (tmp0_subject instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            var tmp0_check = !tmp1__anonymous__uwfjfc.im();
            // Inline function 'kotlin.contracts.contract' call
            if (!tmp0_check) {
              var tmp$ret$0;
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              tmp$ret$0 = 'Must be called at most once';
              var message = tmp$ret$0;
              throw IllegalStateException_init_$Create$(toString_0(message));
            }
            var update = tmp1__anonymous__uwfjfc.jm(null, null, null, null, cause, 15, null);
            if (this.hl_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
              tmp1__anonymous__uwfjfc.km(this, cause);
              return Unit_getInstance();
            }
          } else {
            if (this.hl_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, CompletedContinuation_init_$Create$(tmp1__anonymous__uwfjfc, null, null, null, cause, 14, null))) {
              return Unit_getInstance();
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.ok = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.hl_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.ih_1;
        if (!(!(tmp1__anonymous__uwfjfc == null) ? isInterface(tmp1__anonymous__uwfjfc, NotCompleted) : false))
          return false;
        var update = new CancelledContinuation(this, cause, tmp1__anonymous__uwfjfc instanceof CancelHandler);
        if (!this.hl_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }
        var tmp0_safe_receiver = tmp1__anonymous__uwfjfc instanceof CancelHandler ? tmp1__anonymous__uwfjfc : null;
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          this.lm(tmp0_safe_receiver, cause);
          tmp$ret$1 = Unit_getInstance();
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.ql_1);
        return true;
      }
    }
  };
  CancellableContinuationImpl.prototype.mm = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.ok(cause);
    detachChildIfNonResuable(this);
  };
  CancellableContinuationImpl.prototype.lm = function (handler, cause) {
    var tmp;
    try {
      handler.invoke(cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        handleCoroutineException(this.o4(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, $p));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.ul = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineException(this.o4(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, $p));
      } else {
        throw $p;
      }
    }
  };
  CancellableContinuationImpl.prototype.nm = function (parent) {
    return parent.ti();
  };
  CancellableContinuationImpl.prototype.wj = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (this.il_1 == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        releaseClaimedReusableContinuation(this);
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      releaseClaimedReusableContinuation(this);
    }
    var state = this.pi();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.bi_1, this);
    if (get_isCancellableMode(this.ql_1)) {
      var job = this.o4().g5(Key_getInstance_2());
      if (!(job == null) ? !job.wh() : false) {
        var cause = job.ti();
        this.hm(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.om(state);
  };
  CancellableContinuationImpl.prototype.m4 = function (result) {
    var tmp = toState(result, this);
    var tmp_0 = this.ql_1;
    return resumeImpl$default(this, tmp, tmp_0, null, 8, null);
  };
  CancellableContinuationImpl.prototype.sk = function (value, onCancellation) {
    return resumeImpl(this, value, this.ql_1, onCancellation);
  };
  CancellableContinuationImpl.prototype.qk = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.hl_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.ih_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Active) {
        if (this.hl_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, cancelHandler))
          return Unit_getInstance();
      } else {
        if (tmp0_subject instanceof CancelHandler) {
          multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
        } else {
          if (tmp0_subject instanceof CompletedExceptionally) {
            if (!tmp1__anonymous__uwfjfc.pm()) {
              multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
            }
            if (tmp1__anonymous__uwfjfc instanceof CancelledContinuation) {
              var tmp1_safe_receiver = tmp1__anonymous__uwfjfc instanceof CompletedExceptionally ? tmp1__anonymous__uwfjfc : null;
              callCancelHandler(this, handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.bi_1);
            }
            return Unit_getInstance();
          } else {
            if (tmp0_subject instanceof CompletedContinuation) {
              if (!(tmp1__anonymous__uwfjfc.am_1 == null)) {
                multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
              }
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              if (tmp1__anonymous__uwfjfc.im()) {
                callCancelHandler(this, handler, tmp1__anonymous__uwfjfc.dm_1);
                return Unit_getInstance();
              }
              var update = tmp1__anonymous__uwfjfc.jm(null, cancelHandler, null, null, null, 29, null);
              if (this.hl_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update))
                return Unit_getInstance();
            } else {
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              var update_0 = CompletedContinuation_init_$Create$(tmp1__anonymous__uwfjfc, cancelHandler, null, null, null, 28, null);
              if (this.hl_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update_0))
                return Unit_getInstance();
            }
          }
        }
      }
    }
  };
  CancellableContinuationImpl.prototype.tl = function () {
    var tmp0_elvis_lhs = this.il_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.vk();
    this.il_1 = NonDisposableHandle_getInstance();
  };
  CancellableContinuationImpl.prototype.jk = function (value, idempotent) {
    return tryResumeImpl(this, value, idempotent, null);
  };
  CancellableContinuationImpl.prototype.lk = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  CancellableContinuationImpl.prototype.mk = function (exception) {
    return tryResumeImpl(this, CompletedExceptionally_init_$Create$(exception, false, 2, null), null, null);
  };
  CancellableContinuationImpl.prototype.nk = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.ql_1);
  };
  CancellableContinuationImpl.prototype.rk = function (_this__u8e3s4, value) {
    var tmp = this.el_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    var tmp0_safe_receiver = dc;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.xk_1) === _this__u8e3s4) {
      tmp_0 = get_MODE_UNDISPATCHED();
    } else {
      tmp_0 = this.ql_1;
    }
    var tmp_1 = tmp_0;
    resumeImpl$default(this, value, tmp_1, null, 8, null);
  };
  CancellableContinuationImpl.prototype.om = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedContinuation) {
      var tmp_0 = state.zl_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.qm = function (state) {
    var tmp0_safe_receiver = DispatchedTask.prototype.qm.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp$ret$0 = recoverStackTrace(tmp0_safe_receiver, this.el_1);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.toString = function () {
    return this.ii() + '(' + toDebugString(this.el_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  CancellableContinuationImpl.prototype.ii = function () {
    return 'CancellableContinuation';
  };
  CancellableContinuationImpl.$metadata$ = classMeta('CancellableContinuationImpl', [CancellableContinuation, CoroutineStackFrame], undefined, undefined, undefined, DispatchedTask.prototype);
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  CancelHandler.$metadata$ = classMeta('CancelHandler', [NotCompleted], undefined, undefined, undefined, CancelHandlerBase.prototype);
  function get_UNDECIDED_0() {
    return UNDECIDED_0;
  }
  var UNDECIDED_0;
  function Active() {
    Active_instance = this;
  }
  Active.prototype.toString = function () {
    return 'Active';
  };
  Active.$metadata$ = objectMeta('Active', [NotCompleted]);
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
  }
  NotCompleted.$metadata$ = interfaceMeta('NotCompleted');
  function CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cancelHandler = null;
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    if (!(($mask0 & 8) === 0))
      idempotentResume = null;
    if (!(($mask0 & 16) === 0))
      cancelCause = null;
    CompletedContinuation.call($this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
    return $this;
  }
  function CompletedContinuation_init_$Create$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker) {
    return CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, Object.create(CompletedContinuation.prototype));
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    this.zl_1 = result;
    this.am_1 = cancelHandler;
    this.bm_1 = onCancellation;
    this.cm_1 = idempotentResume;
    this.dm_1 = cancelCause;
  }
  CompletedContinuation.prototype.um = function () {
    return this.am_1;
  };
  CompletedContinuation.prototype.vm = function () {
    return this.cm_1;
  };
  CompletedContinuation.prototype.wm = function () {
    return this.dm_1;
  };
  CompletedContinuation.prototype.im = function () {
    return !(this.dm_1 == null);
  };
  CompletedContinuation.prototype.km = function (cont, cause) {
    var tmp0_safe_receiver = this.am_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.lm(tmp0_safe_receiver, cause);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = this.bm_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.ul(tmp1_safe_receiver, cause);
      tmp$ret$1 = Unit_getInstance();
    }
  };
  CompletedContinuation.prototype.xm = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.jm = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      result = this.zl_1;
    if (!(($mask0 & 2) === 0))
      cancelHandler = this.am_1;
    if (!(($mask0 & 4) === 0))
      onCancellation = this.bm_1;
    if (!(($mask0 & 8) === 0))
      idempotentResume = this.cm_1;
    if (!(($mask0 & 16) === 0))
      cancelCause = this.dm_1;
    return this.xm(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'CompletedContinuation(result=' + toString(this.zl_1) + ', cancelHandler=' + this.am_1 + ', onCancellation=' + this.bm_1 + ', idempotentResume=' + toString(this.cm_1) + ', cancelCause=' + this.dm_1 + ')';
  };
  CompletedContinuation.prototype.hashCode = function () {
    var result = this.zl_1 == null ? 0 : hashCode(this.zl_1);
    result = imul(result, 31) + (this.am_1 == null ? 0 : hashCode(this.am_1)) | 0;
    result = imul(result, 31) + (this.bm_1 == null ? 0 : hashCode(this.bm_1)) | 0;
    result = imul(result, 31) + (this.cm_1 == null ? 0 : hashCode(this.cm_1)) | 0;
    result = imul(result, 31) + (this.dm_1 == null ? 0 : hashCode(this.dm_1)) | 0;
    return result;
  };
  CompletedContinuation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.zl_1, tmp0_other_with_cast.zl_1))
      return false;
    if (!equals(this.am_1, tmp0_other_with_cast.am_1))
      return false;
    if (!equals(this.bm_1, tmp0_other_with_cast.bm_1))
      return false;
    if (!equals(this.cm_1, tmp0_other_with_cast.cm_1))
      return false;
    if (!equals(this.dm_1, tmp0_other_with_cast.dm_1))
      return false;
    return true;
  };
  CompletedContinuation.$metadata$ = classMeta('CompletedContinuation');
  function get_SUSPENDED_0() {
    return SUSPENDED_0;
  }
  var SUSPENDED_0;
  function get_RESUMED_0() {
    return RESUMED_0;
  }
  var RESUMED_0;
  function BeforeResumeCancelHandler() {
    CancelHandler.call(this);
  }
  BeforeResumeCancelHandler.$metadata$ = classMeta('BeforeResumeCancelHandler', undefined, undefined, undefined, undefined, CancelHandler.prototype);
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.ym_1 = handler;
  }
  InvokeOnCancel.prototype.uk = function (cause) {
    this.ym_1(cause);
  };
  InvokeOnCancel.prototype.invoke = function (cause) {
    return this.uk(cause);
  };
  InvokeOnCancel.prototype.toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.ym_1) + '@' + get_hexAddress(this) + ']';
  };
  InvokeOnCancel.$metadata$ = classMeta('InvokeOnCancel', undefined, undefined, undefined, undefined, CancelHandler.prototype);
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function init_properties_CancellableContinuationImpl_kt_jcze1b() {
    if (properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
    } else {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred() {
  }
  CompletableDeferred.$metadata$ = interfaceMeta('CompletableDeferred', [Deferred]);
  function CompletableDeferred_0(parent) {
    return new CompletableDeferredImpl(parent);
  }
  function $awaitCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.jn_1 = _this__u8e3s4;
  }
  $awaitCOROUTINE$2.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = this.jn_1.kn(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  $awaitCOROUTINE$2.$metadata$ = classMeta('$awaitCOROUTINE$2', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.rh(parent);
  }
  CompletableDeferredImpl.prototype.bj = function () {
    return true;
  };
  CompletableDeferredImpl.prototype.an = function ($cont) {
    var tmp = new $awaitCOROUTINE$2(this, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  CompletableDeferredImpl.prototype.zm = function (value) {
    return this.nn(value);
  };
  CompletableDeferredImpl.$metadata$ = classMeta('CompletableDeferredImpl', [CompletableDeferred, SelectClause1], undefined, undefined, undefined, JobSupport.prototype);
  function CompletableJob() {
  }
  CompletableJob.$metadata$ = interfaceMeta('CompletableJob', [Job]);
  function CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      handled = false;
    CompletedExceptionally.call($this, cause, handled);
    return $this;
  }
  function CompletedExceptionally_init_$Create$(cause, handled, $mask0, $marker) {
    return CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, Object.create(CompletedExceptionally.prototype));
  }
  function CompletedExceptionally(cause, handled) {
    this.bi_1 = cause;
    this.ci_1 = atomic$boolean$1(handled);
  }
  CompletedExceptionally.prototype.s1 = function () {
    return this.bi_1;
  };
  CompletedExceptionally.prototype.di = function () {
    return this.ci_1.mh_1;
  };
  CompletedExceptionally.prototype.pm = function () {
    return this.ci_1.atomicfu$compareAndSet(false, true);
  };
  CompletedExceptionally.prototype.toString = function () {
    return get_classSimpleName(this) + '[' + this.bi_1 + ']';
  };
  CompletedExceptionally.$metadata$ = classMeta('CompletedExceptionally');
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this.xl_1 = atomic$boolean$1(false);
  }
  CancelledContinuation.prototype.yl = function () {
    return this.xl_1.atomicfu$compareAndSet(false, true);
  };
  CancelledContinuation.$metadata$ = classMeta('CancelledContinuation', undefined, undefined, undefined, undefined, CompletedExceptionally.prototype);
  function toState(_this__u8e3s4, caller) {
    var tmp$ret$2;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp$ret$0 = tmp0__anonymous__q1qw7t;
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_1 = recoverStackTrace(exception, caller);
      tmp$ret$1 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    var tmp$ret$2;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp$ret$0 = !(onCancellation == null) ? new CompletedWithCancellation(tmp0__anonymous__q1qw7t, onCancellation) : tmp0__anonymous__q1qw7t;
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp$ret$1 = CompletedExceptionally_init_$Create$(exception, false, 2, null);
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2;
  }
  function toState$default(_this__u8e3s4, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancellation = null;
    return toState_0(_this__u8e3s4, onCancellation);
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.qn_1 = result;
    this.rn_1 = onCancellation;
  }
  CompletedWithCancellation.prototype.toString = function () {
    return 'CompletedWithCancellation(result=' + toString(this.qn_1) + ', onCancellation=' + this.rn_1 + ')';
  };
  CompletedWithCancellation.prototype.hashCode = function () {
    var result = this.qn_1 == null ? 0 : hashCode(this.qn_1);
    result = imul(result, 31) + hashCode(this.rn_1) | 0;
    return result;
  };
  CompletedWithCancellation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.qn_1, tmp0_other_with_cast.qn_1))
      return false;
    if (!equals(this.rn_1, tmp0_other_with_cast.rn_1))
      return false;
    return true;
  };
  CompletedWithCancellation.$metadata$ = classMeta('CompletedWithCancellation');
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      var tmp1_failure = recoverStackTrace(state.bi_1, uCont);
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp2_success = Companion_getInstance();
      var tmp3_success = (state == null ? true : isObject(state)) ? state : THROW_CCE();
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp3_success);
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key_0() {
    Key_instance = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  Key_0.$metadata$ = objectMeta('Key', undefined, undefined, undefined, undefined, AbstractCoroutineContextKey.prototype);
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key_0();
    return Key_instance;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  CoroutineDispatcher.prototype.tn = function (context) {
    return true;
  };
  CoroutineDispatcher.prototype.vn = function (context, block) {
    return this.un(context, block);
  };
  CoroutineDispatcher.prototype.e5 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  CoroutineDispatcher.prototype.f5 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.wn();
  };
  CoroutineDispatcher.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  CoroutineDispatcher.$metadata$ = classMeta('CoroutineDispatcher', [ContinuationInterceptor], undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.g5(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.xn(context, exception);
        return Unit_getInstance();
      }
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineExceptionImpl(context, handlerException(exception, $p));
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function Key_1() {
    Key_instance_0 = this;
  }
  Key_1.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_1();
    return Key_instance_0;
  }
  function CoroutineExceptionHandler() {
  }
  CoroutineExceptionHandler.$metadata$ = interfaceMeta('CoroutineExceptionHandler', [Element]);
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function CoroutineExceptionHandler_0(handler) {
    return new _no_name_provided__qut3iv(handler);
  }
  function _no_name_provided__qut3iv($handler) {
    this.zn_1 = $handler;
    AbstractCoroutineContextElement.call(this, Key_getInstance_1());
  }
  _no_name_provided__qut3iv.prototype.xn = function (context, exception) {
    return this.zn_1(context, exception);
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [CoroutineExceptionHandler], undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function CoroutineScope() {
  }
  CoroutineScope.$metadata$ = interfaceMeta('CoroutineScope');
  function CoroutineScope_0(context) {
    var tmp;
    if (!(context.g5(Key_getInstance_2()) == null)) {
      tmp = context;
    } else {
      tmp = context.n5(Job$default(null, 1, null));
    }
    return new ContextScope(tmp);
  }
  function coroutineScope(block, $cont) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.coroutineScope.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var coroutine = new ScopeCoroutine(tmp0__anonymous__q1qw7t.o4(), tmp0__anonymous__q1qw7t);
    tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
    return tmp$ret$0;
  }
  function cancel(_this__u8e3s4, cause) {
    var tmp0_elvis_lhs = _this__u8e3s4.vh().g5(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'Scope cannot be cancelled because it does not have a job: ' + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.cj(cause);
  }
  function cancel$default_1(_this__u8e3s4, cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return cancel(_this__u8e3s4, cause);
  }
  function GlobalScope() {
    GlobalScope_instance = this;
  }
  GlobalScope.prototype.vh = function () {
    return EmptyCoroutineContext_getInstance();
  };
  GlobalScope.$metadata$ = objectMeta('GlobalScope', [CoroutineScope]);
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    if (GlobalScope_instance == null)
      new GlobalScope();
    return GlobalScope_instance;
  }
  function get_isActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.vh().g5(Key_getInstance_2());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wh();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineStart.prototype.mi = function (block, receiver, completion) {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.t5_1;
    var tmp;
    switch (tmp0) {
      case 0:
        startCoroutineCancellable$default(block, receiver, completion, null, 4, null);
        tmp = Unit_getInstance();
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  CoroutineStart.prototype.qj = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  CoroutineStart.$metadata$ = classMeta('CoroutineStart', undefined, undefined, undefined, undefined, Enum.prototype);
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function CopyableThrowable() {
  }
  CopyableThrowable.$metadata$ = interfaceMeta('CopyableThrowable');
  function Deferred() {
  }
  Deferred.$metadata$ = interfaceMeta('Deferred', [Job]);
  function Delay() {
  }
  Delay.$metadata$ = interfaceMeta('Delay');
  function delay(timeMillis, $cont) {
    if (timeMillis.h1(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.fm();
    // Inline function 'kotlinx.coroutines.delay.<anonymous>' call
    Companion_getInstance_0();
    if (timeMillis.h1(new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.o4()).ao(timeMillis, cancellable);
    }
    tmp$ret$0 = cancellable.wj();
    return tmp$ret$0;
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.g5(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.do_1 = new Long(0, 0);
    this.eo_1 = false;
    this.fo_1 = null;
  }
  EventLoop.prototype.go = function () {
    var tmp0_elvis_lhs = this.fo_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.ko();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.sm();
    return true;
  };
  EventLoop.prototype.lo = function (task) {
    var tmp0_elvis_lhs = this.fo_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new ArrayQueue();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.fo_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.mo(task);
  };
  EventLoop.prototype.no = function () {
    return this.do_1.h1(delta(this, true)) >= 0;
  };
  EventLoop.prototype.oo = function () {
    var tmp0_safe_receiver = this.fo_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.po();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  EventLoop.prototype.qo = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.do_1 = tmp0_this.do_1.o6(delta(this, unconfined));
    if (!unconfined)
      this.eo_1 = true;
  };
  EventLoop.prototype.ro = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.do_1 = tmp0_this.do_1.p6(delta(this, unconfined));
    if (this.do_1.h1(new Long(0, 0)) > 0)
      return Unit_getInstance();
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.eo_1) {
      this.so();
    }
  };
  EventLoop.prototype.so = function () {
  };
  EventLoop.$metadata$ = classMeta('EventLoop', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.to_1 = new CommonThreadLocal();
  }
  ThreadLocalEventLoop.prototype.uo = function () {
    var tmp0_elvis_lhs = this.to_1.wo();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().to_1.xo(tmp0_also);
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ThreadLocalEventLoop.$metadata$ = objectMeta('ThreadLocalEventLoop');
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  CompletionHandlerException.$metadata$ = classMeta('CompletionHandlerException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  CoroutinesInternalError.$metadata$ = classMeta('CoroutinesInternalError', undefined, undefined, undefined, undefined, Error_0.prototype);
  function DisposableHandle() {
  }
  DisposableHandle.$metadata$ = interfaceMeta('DisposableHandle');
  function Key_2() {
    Key_instance_1 = this;
  }
  Key_2.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_1;
  function Key_getInstance_2() {
    if (Key_instance_1 == null)
      new Key_2();
    return Key_instance_1;
  }
  function Job() {
  }
  Job.$metadata$ = interfaceMeta('Job', [Element]);
  function ChildJob() {
  }
  ChildJob.$metadata$ = interfaceMeta('ChildJob', [Job]);
  function ParentJob() {
  }
  ParentJob.$metadata$ = interfaceMeta('ParentJob', [Job]);
  function ChildHandle() {
  }
  ChildHandle.$metadata$ = interfaceMeta('ChildHandle', [DisposableHandle]);
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype.ik = function () {
    return null;
  };
  NonDisposableHandle.prototype.vk = function () {
  };
  NonDisposableHandle.prototype.gj = function (cause) {
    return false;
  };
  NonDisposableHandle.prototype.toString = function () {
    return 'NonDisposableHandle';
  };
  NonDisposableHandle.$metadata$ = objectMeta('NonDisposableHandle', [DisposableHandle, ChildHandle]);
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.g5(Key_getInstance_2());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.wh())
      throw _this__u8e3s4.ti();
  }
  function Job_0(parent) {
    return new JobImpl(parent);
  }
  function Job$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return Job_0(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.g5(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = "Current context doesn't contain Job in it: " + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancelAndJoin(_this__u8e3s4, $cont) {
    _this__u8e3s4.dj(null, 1, null);
    return _this__u8e3s4.zi($cont);
  }
  function get_isActive_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.g5(Key_getInstance_2());
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wh()) === true;
  }
  function disposeOnCompletion(_this__u8e3s4, handle) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new DisposeOnCompletion(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return _this__u8e3s4.wi(tmp$ret$1);
  }
  function cancel_0(_this__u8e3s4, message, cause) {
    return _this__u8e3s4.cj(CancellationException_init_$Create$_0(message, cause));
  }
  function cancel$default_2(_this__u8e3s4, message, cause, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      cause = null;
    return cancel_0(_this__u8e3s4, message, cause);
  }
  function get_COMPLETING_ALREADY() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    init_properties_JobSupport_kt_iaxwag();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    init_properties_JobSupport_kt_iaxwag();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    init_properties_JobSupport_kt_iaxwag();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    init_properties_JobSupport_kt_iaxwag();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.yo_1 = isActive;
  }
  Empty.prototype.wh = function () {
    return this.yo_1;
  };
  Empty.prototype.zo = function () {
    return null;
  };
  Empty.prototype.toString = function () {
    return 'Empty{' + (this.yo_1 ? 'Active' : 'New') + '}';
  };
  Empty.$metadata$ = classMeta('Empty', [Incomplete]);
  function Incomplete() {
  }
  Incomplete.$metadata$ = interfaceMeta('Incomplete');
  function NodeList() {
    LinkedListHead.call(this);
  }
  NodeList.prototype.wh = function () {
    return true;
  };
  NodeList.prototype.zo = function () {
    return this;
  };
  NodeList.prototype.dp = function (state) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    tmp0_apply.k6('List{');
    tmp0_apply.k6(state);
    tmp0_apply.k6('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.ll_1;
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        if (first)
          first = false;
        else {
          tmp0_apply.k6(', ');
        }
        tmp0_apply.fe(tmp0__anonymous__q1qw7t);
      }
      cur = cur.ll_1;
    }
    tmp0_apply.k6(']');
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  NodeList.prototype.toString = function () {
    return get_DEBUG() ? this.dp('Active') : LinkedListHead.prototype.toString.call(this);
  };
  NodeList.$metadata$ = classMeta('NodeList', [Incomplete], undefined, undefined, undefined, LinkedListHead.prototype);
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  JobNode.prototype.vp = function () {
    var tmp = this.up_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  JobNode.prototype.wh = function () {
    return true;
  };
  JobNode.prototype.zo = function () {
    return null;
  };
  JobNode.prototype.vk = function () {
    return this.vp().aj(this);
  };
  JobNode.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.vp()) + ']';
  };
  JobNode.$metadata$ = classMeta('JobNode', [DisposableHandle, Incomplete], undefined, undefined, undefined, CompletionHandlerBase.prototype);
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.aq_1.ih_1 = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.aq_1.ih_1;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bi_1;
    var wasCancelling = false;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.bq();
    var exceptions = state.cq(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    tmp$ret$0 = finalCause;
    tmp$ret$1 = tmp$ret$0;
    var finalException = tmp$ret$1;
    var tmp;
    if (finalException == null) {
      tmp = proposedUpdate;
    } else if (finalException === proposedException) {
      tmp = proposedUpdate;
    } else {
      tmp = CompletedExceptionally_init_$Create$(finalException, false, 2, null);
    }
    var finalState = tmp;
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.oj(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).pm();
      }
    }
    if (!wasCancelling) {
      $this.lj(finalException);
    }
    $this.ai(finalState);
    var casSuccess = $this.ph_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.h()) {
      if (state.bq()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        var tmp0_elvis_lhs = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.zh() : tmp0_elvis_lhs, null, $this);
        return tmp$ret$0;
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        tmp$ret$1 = !(element instanceof CancellationException);
        if (tmp$ret$1) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.g(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.c();
        while (tmp0_iterator_0.d()) {
          var element_0 = tmp0_iterator_0.e();
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          tmp$ret$3 = tmp;
          if (tmp$ret$3) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.f() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions.f());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.c();
    while (tmp0_iterator.d()) {
      var exception = tmp0_iterator.e();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.a(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.ph_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.lj(null);
    $this.ai(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.oi();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.vk();
      $this.ni(NonDisposableHandle_getInstance());
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.bi_1;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          $this.hi(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, $p));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.zo();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.lj(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.ll_1;
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        try {
          tmp0__anonymous__q1qw7t.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              var tmp$ret$0;
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp$ret$0 = tmp0_safe_receiver;
              tmp = tmp$ret$0;
            }
            var tmp1_elvis_lhs = tmp;
            if (tmp1_elvis_lhs == null) {
              var tmp$ret$1;
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, $p);
              tmp$ret$1 = Unit_getInstance();
            } else
              tmp1_elvis_lhs;
          } else {
            throw $p;
          }
        }
      }
      cur = cur.ll_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.hi(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.mj())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.oi();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.gj(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.ll_1;
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        try {
          tmp0__anonymous__q1qw7t.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              var tmp$ret$0;
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp$ret$0 = tmp0_safe_receiver;
              tmp = tmp$ret$0;
            }
            var tmp1_elvis_lhs = tmp;
            if (tmp1_elvis_lhs == null) {
              var tmp$ret$1;
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, $p);
              tmp$ret$1 = Unit_getInstance();
            } else
              tmp1_elvis_lhs;
          } else {
            throw $p;
          }
        }
      }
      cur = cur.ll_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.hi(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state.yo_1)
        return 0;
      if (!$this.ph_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.si();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this.ph_1.atomicfu$compareAndSet(state, state.dq_1))
          return -1;
        $this.si();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.JobSupport.makeNode.<anonymous>' call
        // Inline function 'kotlinx.coroutines.assert' call
        tmp$ret$0 = tmp1_safe_receiver;
        tmp_0 = tmp$ret$0;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.up_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      tmp$ret$0 = $this.pi() === expect;
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.lp(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.yo_1 ? list : new InactiveNodeList(list);
    $this.ph_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.wp(new NodeList());
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    tmp$ret$0 = state.ll_1;
    var list = tmp$ret$0;
    $this.ph_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.joinInternal.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $this.pi();
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false))
        return false;
      if (startInternal($this, tmp0__anonymous__q1qw7t) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $cont) {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.fm();
    // Inline function 'kotlinx.coroutines.JobSupport.joinSuspend.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ResumeOnCompletion(cancellable);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    disposeOnCancellation(cancellable, $this.wi(tmp$ret$1));
    tmp$ret$2 = cancellable.wj();
    return tmp$ret$2;
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $this.pi();
      var tmp;
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (tmp0__anonymous__q1qw7t instanceof Finishing) {
          tmp_0 = tmp0__anonymous__q1qw7t.eq();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var tmp_1 = createCauseException($this, cause);
      var proposedUpdate = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
      var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject == null ? true : tmp0_subject instanceof Error) {
      var tmp1_elvis_lhs = cause;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        var tmp0_elvis_lhs = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.zh() : tmp0_elvis_lhs, null, $this);
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).jj();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        var tmp0__anonymous__q1qw7t = $this.pi();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Finishing) {
          var tmp$ret$4;
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (tmp0__anonymous__q1qw7t.fq())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0__anonymous__q1qw7t.bq();
          if (!(cause == null) ? true : !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              var tmp$ret$0;
              // Inline function 'kotlin.also' call
              var tmp0_also = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also;
              tmp$ret$0 = tmp0_also;
              tmp = tmp$ret$0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp0__anonymous__q1qw7t.gq(causeException);
          }
          var tmp$ret$2;
          // Inline function 'kotlin.takeIf' call
          var tmp1_takeIf = tmp0__anonymous__q1qw7t.hq();
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0;
          var tmp$ret$1;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$1 = !wasCancelling;
          if (tmp$ret$1) {
            tmp_0 = tmp1_takeIf;
          } else {
            tmp_0 = null;
          }
          tmp$ret$2 = tmp_0;
          tmp$ret$3 = tmp$ret$2;
          tmp$ret$4 = tmp$ret$3;
          var notifyRootCause = tmp$ret$4;
          var tmp1_safe_receiver = notifyRootCause;
          if (tmp1_safe_receiver == null)
            null;
          else {
            var tmp$ret$5;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            notifyCancelling($this, tmp0__anonymous__q1qw7t.xp_1, tmp1_safe_receiver);
            tmp$ret$5 = Unit_getInstance();
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              var tmp$ret$6;
              // Inline function 'kotlin.also' call
              var tmp0_also_0 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also_0;
              tmp$ret$6 = tmp0_also_0;
              tmp_1 = tmp$ret$6;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp0__anonymous__q1qw7t.wh()) {
              if (tryMakeCancelling($this, tmp0__anonymous__q1qw7t, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, CompletedExceptionally_init_$Create$(causeException_0, false, 2, null));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var tmp1_error = 'Cannot happen in ' + toString(tmp0__anonymous__q1qw7t);
                throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
              } else if (finalState === get_COMPLETING_RETRY()) {
                tmp$ret$7 = Unit_getInstance();
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.zo();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_subject = state;
      var tmp_0;
      if (tmp0_subject instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (tmp0_subject instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var tmp0_error = 'State should have list: ' + state;
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.ph_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    if (finishing.eq())
      return get_COMPLETING_ALREADY();
    finishing.iq(true);
    if (!(finishing === state)) {
      if (!$this.ph_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.bq();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.gq(tmp0_safe_receiver.bi_1);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp$ret$2;
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = finishing.hq();
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    tmp$ret$1 = !wasCancelling;
    if (tmp$ret$1) {
      tmp_0 = tmp0_takeIf;
    } else {
      tmp_0 = null;
    }
    tmp$ret$2 = tmp_0;
    notifyRootCause = tmp$ret$2;
    tmp$ret$3 = Unit_getInstance();
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      notifyCancelling($this, list, tmp2_safe_receiver);
      tmp$ret$4 = Unit_getInstance();
    }
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bi_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.zo();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var tmp = child_0.nq_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        var tmp0__get_asHandler__gq3rkj = new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        tmp$ret$1 = tmp$ret$0;
        var handle = tmp.yi(false, false, tmp$ret$1, 1, null);
        if (!(handle === NonDisposableHandle_getInstance()))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp_0;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp2 = nextChild_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = tmp2;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.gi(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp0__get_isRemoved__hsfvgr = cur;
      tmp$ret$0 = tmp0__get_isRemoved__hsfvgr.nl_1;
      if (!tmp$ret$0) {
        break $l$loop;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp1__get_prevNode__b1i0ed = cur;
      tmp$ret$1 = tmp1__get_prevNode__b1i0ed.ml_1;
      cur = tmp$ret$1;
    }
    $l$loop_0: while (true) {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      var tmp2__get_nextNode__ek7k4a = cur;
      tmp$ret$2 = tmp2__get_nextNode__ek7k4a.ll_1;
      cur = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp3__get_isRemoved__lodk3s = cur;
      tmp$ret$3 = tmp3__get_isRemoved__lodk3s.nl_1;
      if (tmp$ret$3)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.bq() ? 'Cancelling' : state.eq() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state.wh() ? 'Active' : 'New';
      } else {
        if (tmp0_subject instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this.xp_1 = list;
    this.yp_1 = atomic$boolean$1(isCompleting);
    this.zp_1 = atomic$ref$1(rootCause);
    this.aq_1 = atomic$ref$1(null);
  }
  Finishing.prototype.zo = function () {
    return this.xp_1;
  };
  Finishing.prototype.iq = function (value) {
    this.yp_1.mh_1 = value;
  };
  Finishing.prototype.eq = function () {
    return this.yp_1.mh_1;
  };
  Finishing.prototype.oq = function (value) {
    this.zp_1.ih_1 = value;
  };
  Finishing.prototype.hq = function () {
    return this.zp_1.ih_1;
  };
  Finishing.prototype.fq = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  Finishing.prototype.bq = function () {
    return !(this.hq() == null);
  };
  Finishing.prototype.wh = function () {
    return this.hq() == null;
  };
  Finishing.prototype.cq = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        tmp0_also.a(eh);
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
    var list = tmp;
    var rootCause = this.hq();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.t9(0, tmp0_safe_receiver);
      tmp$ret$1 = Unit_getInstance();
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.a(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  Finishing.prototype.gq = function (exception) {
    var rootCause = this.hq();
    if (rootCause == null) {
      this.oq(exception);
      return Unit_getInstance();
    }
    if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        var tmp$ret$0;
        // Inline function 'kotlin.apply' call
        var tmp0_apply = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        tmp0_apply.a(eh);
        tmp0_apply.a(exception);
        tmp$ret$0 = tmp0_apply;
        _set_exceptionsHolder__tqm22h(this, tmp$ret$0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).a(exception);
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  Finishing.prototype.toString = function () {
    return 'Finishing[cancelling=' + this.bq() + ', completing=' + this.eq() + ', rootCause=' + this.hq() + ', exceptions=' + toString(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.xp_1 + ']';
  };
  Finishing.$metadata$ = classMeta('Finishing', [Incomplete]);
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.tq_1 = parent;
    this.uq_1 = state;
    this.vq_1 = child;
    this.wq_1 = proposedUpdate;
  }
  ChildCompletion.prototype.uk = function (cause) {
    continueCompleting(this.tq_1, this.uq_1, this.vq_1, this.wq_1);
  };
  ChildCompletion.prototype.invoke = function (cause) {
    return this.uk(cause);
  };
  ChildCompletion.$metadata$ = classMeta('ChildCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, get_MODE_CANCELLABLE());
    this.dr_1 = job;
  }
  AwaitContinuation.prototype.nm = function (parent) {
    var state = this.dr_1.pi();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.hq();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.bi_1;
    return parent.ti();
  };
  AwaitContinuation.prototype.ii = function () {
    return 'AwaitContinuation';
  };
  AwaitContinuation.$metadata$ = classMeta('AwaitContinuation', undefined, undefined, undefined, undefined, CancellableContinuationImpl.prototype);
  function awaitSuspend($this, $cont) {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.JobSupport.awaitSuspend.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cont = new AwaitContinuation(intercepted(tmp0__anonymous__q1qw7t), $this);
    cont.fm();
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ResumeAwaitOnCompletion(cont);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    disposeOnCancellation(cont, $this.wi(tmp$ret$1));
    tmp$ret$2 = cont.wj();
    return tmp$ret$2;
  }
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.mr_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JobSupport$_get_children_$slambda_k839f8.prototype.tr = function ($this$sequence, $cont) {
    var tmp = this.ur($this$sequence, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  JobSupport$_get_children_$slambda_k839f8.prototype.jg = function (p1, $cont) {
    return this.tr(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $cont);
  };
  JobSupport$_get_children_$slambda_k839f8.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 8;
            this.or_1 = this.mr_1.pi();
            var tmp_0 = this.or_1;
            if (tmp_0 instanceof ChildHandleNode) {
              this.zf_1 = 6;
              suspendResult = this.nr_1.g4(this.or_1.nq_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.or_1;
              if (!(tmp_1 == null) ? isInterface(tmp_1, Incomplete) : false) {
                this.pr_1 = this.or_1.zo();
                if (this.pr_1 == null) {
                  this.qr_1 = null;
                  this.zf_1 = 5;
                  continue $sm;
                } else {
                  this.rr_1 = this.pr_1.ll_1;
                  this.zf_1 = 1;
                  continue $sm;
                }
              } else {
                this.zf_1 = 7;
                continue $sm;
              }
            }

            break;
          case 1:
            if (!!equals(this.rr_1, this.pr_1)) {
              this.zf_1 = 4;
              continue $sm;
            }

            var tmp_2 = this.rr_1;
            if (tmp_2 instanceof ChildHandleNode) {
              var tmp_3 = this;
              tmp_3.sr_1 = this.rr_1;
              this.zf_1 = 2;
              suspendResult = this.nr_1.g4(this.sr_1.nq_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zf_1 = 3;
              continue $sm;
            }

            break;
          case 2:
            this.zf_1 = 3;
            continue $sm;
          case 3:
            this.rr_1 = this.rr_1.ll_1;
            this.zf_1 = 1;
            continue $sm;
          case 4:
            this.qr_1 = Unit_getInstance();
            this.zf_1 = 5;
            continue $sm;
          case 5:
            ;
            this.zf_1 = 7;
            continue $sm;
          case 6:
            this.zf_1 = 7;
            continue $sm;
          case 7:
            return Unit_getInstance();
          case 8:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 8) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  JobSupport$_get_children_$slambda_k839f8.prototype.ur = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.mr_1, completion);
    i.nr_1 = $this$sequence;
    return i;
  };
  JobSupport$_get_children_$slambda_k839f8.$metadata$ = classMeta('JobSupport$<get-children>$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    var l = function ($this$sequence, $cont) {
      return i.tr($this$sequence, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport(active) {
    this.ph_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.qh_1 = atomic$ref$1(null);
  }
  JobSupport.prototype.g2 = function () {
    return Key_getInstance_2();
  };
  JobSupport.prototype.ni = function (value) {
    this.qh_1.ih_1 = value;
  };
  JobSupport.prototype.oi = function () {
    return this.qh_1.ih_1;
  };
  JobSupport.prototype.rh = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.ni(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.ri();
    var handle = parent.kj(this);
    this.ni(handle);
    if (this.qi()) {
      handle.vk();
      this.ni(NonDisposableHandle_getInstance());
    }
  };
  JobSupport.prototype.pi = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.ph_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.ih_1;
      if (!(tmp1__anonymous__uwfjfc instanceof OpDescriptor))
        return tmp1__anonymous__uwfjfc;
      tmp1__anonymous__uwfjfc.vr(this);
    }
  };
  JobSupport.prototype.wh = function () {
    var state = this.pi();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.wh();
    } else {
      tmp = false;
    }
    return tmp;
  };
  JobSupport.prototype.qi = function () {
    var tmp = this.pi();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  JobSupport.prototype.ri = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.pi();
      var tmp0_subject = startInternal(this, tmp0__anonymous__q1qw7t);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  JobSupport.prototype.si = function () {
  };
  JobSupport.prototype.ti = function () {
    var state = this.pi();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.hq();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.ui(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.vi(state.bi_1, null, 1, null);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  JobSupport.prototype.ui = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = message;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.zh() : tmp0_elvis_lhs_0, _this__u8e3s4, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  JobSupport.prototype.vi = function (_this__u8e3s4, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      message = null;
    return this.ui(_this__u8e3s4, message);
  };
  JobSupport.prototype.wi = function (handler) {
    return this.xi(false, true, handler);
  };
  JobSupport.prototype.xi = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletion.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.pi();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Empty) {
          if (tmp0__anonymous__q1qw7t.yo_1) {
            if (this.ph_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, tmp0__anonymous__q1qw7t);
          }
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
            var list = tmp0__anonymous__q1qw7t.zo();
            if (list == null) {
              promoteSingleToNodeList(this, tmp0__anonymous__q1qw7t instanceof JobNode ? tmp0__anonymous__q1qw7t : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_getInstance();
              var tmp;
              if (onCancelling) {
                tmp = tmp0__anonymous__q1qw7t instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                var tmp$ret$2;
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                rootCause = tmp0__anonymous__q1qw7t.hq();
                var tmp_0;
                var tmp_1;
                if (rootCause == null) {
                  tmp_1 = true;
                } else {
                  var tmp_2;
                  var tmp$ret$0;
                  // Inline function 'kotlinx.coroutines.isHandlerOf' call
                  tmp$ret$0 = handler instanceof ChildHandleNode;
                  if (tmp$ret$0) {
                    tmp_2 = !tmp0__anonymous__q1qw7t.eq();
                  } else {
                    tmp_2 = false;
                  }
                  tmp_1 = tmp_2;
                }
                if (tmp_1) {
                  if (!addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node)) {
                    tmp$ret$1 = Unit_getInstance();
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                  tmp_0 = Unit_getInstance();
                }
                tmp$ret$2 = tmp_0;
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  invokeIt(handler, rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = tmp0__anonymous__q1qw7t instanceof CompletedExceptionally ? tmp0__anonymous__q1qw7t : null;
              invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.bi_1);
            }
            return NonDisposableHandle_getInstance();
          }
        }
      }
    }
  };
  JobSupport.prototype.zi = function ($cont) {
    if (!joinInternal(this)) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.getCoroutineContext' call
      tmp$ret$0 = $cont.o4();
      ensureActive(tmp$ret$0);
      return Unit_getInstance();
    }
    return joinSuspend(this, $cont);
  };
  JobSupport.prototype.aj = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.pi();
      var tmp0_subject = tmp0__anonymous__q1qw7t;
      if (tmp0_subject instanceof JobNode) {
        if (!(tmp0__anonymous__q1qw7t === node))
          return Unit_getInstance();
        if (this.ph_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, get_EMPTY_ACTIVE()))
          return Unit_getInstance();
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          if (!(tmp0__anonymous__q1qw7t.zo() == null)) {
            node.ol();
          }
          return Unit_getInstance();
        } else {
          return Unit_getInstance();
        }
      }
    }
  };
  JobSupport.prototype.bj = function () {
    return false;
  };
  JobSupport.prototype.cj = function (cause) {
    var tmp0_elvis_lhs = cause;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = null;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.zh() : tmp0_elvis_lhs_0, null, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.ej(tmp);
  };
  JobSupport.prototype.zh = function () {
    return 'Job was cancelled';
  };
  JobSupport.prototype.ej = function (cause) {
    this.hj(cause);
  };
  JobSupport.prototype.fj = function (parentJob) {
    this.hj(parentJob);
  };
  JobSupport.prototype.gj = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.hj(cause) ? this.nj() : false;
  };
  JobSupport.prototype.wr = function (cause) {
    return this.hj(cause);
  };
  JobSupport.prototype.hj = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.bj()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.gi(finalState);
      tmp = true;
    }
    return tmp;
  };
  JobSupport.prototype.ij = function (message, cause) {
    var tmp0_elvis_lhs = message;
    return new JobCancellationException(tmp0_elvis_lhs == null ? this.zh() : tmp0_elvis_lhs, cause, this);
  };
  JobSupport.prototype.jj = function () {
    var state = this.pi();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.hq();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state.bi_1;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          var tmp0_error = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  JobSupport.prototype.nn = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompleting.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.pi();
        var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else {
          this.gi(finalState);
          return true;
        }
      }
    }
  };
  JobSupport.prototype.ei = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.pi();
        var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  JobSupport.prototype.pn = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  JobSupport.prototype.kj = function (child) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ChildHandleNode(child);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var tmp = this.yi(true, false, tmp$ret$1, 2, null);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  JobSupport.prototype.hi = function (exception) {
    throw exception;
  };
  JobSupport.prototype.lj = function (cause) {
  };
  JobSupport.prototype.mj = function () {
    return false;
  };
  JobSupport.prototype.nj = function () {
    return true;
  };
  JobSupport.prototype.oj = function (exception) {
    return false;
  };
  JobSupport.prototype.ai = function (state) {
  };
  JobSupport.prototype.gi = function (state) {
  };
  JobSupport.prototype.toString = function () {
    return this.pj() + '@' + get_hexAddress(this);
  };
  JobSupport.prototype.pj = function () {
    return this.ii() + '{' + stateString(this, this.pi()) + '}';
  };
  JobSupport.prototype.ii = function () {
    return get_classSimpleName(this);
  };
  JobSupport.prototype.kn = function ($cont) {
    $l$loop: while (true) {
      var state = this.pi();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          var tmp0_recoverAndThrow = state.bi_1;
          throw tmp0_recoverAndThrow;
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $cont);
  };
  JobSupport.$metadata$ = classMeta('JobSupport', [Job, ChildJob, ParentJob, SelectClause0]);
  function boxIncomplete(_this__u8e3s4) {
    init_properties_JobSupport_kt_iaxwag();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  JobCancellingNode.$metadata$ = classMeta('JobCancellingNode', undefined, undefined, undefined, undefined, JobNode.prototype);
  function get_FALSE() {
    return FALSE;
  }
  var FALSE;
  function get_TRUE() {
    return TRUE;
  }
  var TRUE;
  function InactiveNodeList(list) {
    this.dq_1 = list;
  }
  InactiveNodeList.prototype.zo = function () {
    return this.dq_1;
  };
  InactiveNodeList.prototype.wh = function () {
    return false;
  };
  InactiveNodeList.prototype.toString = function () {
    return get_DEBUG() ? this.dq_1.dp('New') : anyToString(this);
  };
  InactiveNodeList.$metadata$ = classMeta('InactiveNodeList', [Incomplete]);
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.nq_1 = childJob;
  }
  ChildHandleNode.prototype.ik = function () {
    return this.vp();
  };
  ChildHandleNode.prototype.uk = function (cause) {
    return this.nq_1.fj(this.vp());
  };
  ChildHandleNode.prototype.invoke = function (cause) {
    return this.uk(cause);
  };
  ChildHandleNode.prototype.gj = function (cause) {
    return this.vp().gj(cause);
  };
  ChildHandleNode.$metadata$ = classMeta('ChildHandleNode', [ChildHandle], undefined, undefined, undefined, JobCancellingNode.prototype);
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.bs_1 = handler;
    this.cs_1 = atomic$int$1(0);
  }
  InvokeOnCancelling.prototype.uk = function (cause) {
    if (this.cs_1.atomicfu$compareAndSet(0, 1))
      this.bs_1(cause);
  };
  InvokeOnCancelling.prototype.invoke = function (cause) {
    return this.uk(cause);
  };
  InvokeOnCancelling.$metadata$ = classMeta('InvokeOnCancelling', undefined, undefined, undefined, undefined, JobCancellingNode.prototype);
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.hs_1 = handler;
  }
  InvokeOnCompletion.prototype.uk = function (cause) {
    return this.hs_1(cause);
  };
  InvokeOnCompletion.prototype.invoke = function (cause) {
    return this.uk(cause);
  };
  InvokeOnCompletion.$metadata$ = classMeta('InvokeOnCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.ms_1 = continuation;
  }
  ResumeOnCompletion.prototype.uk = function (cause) {
    var tmp$ret$1;
    // Inline function 'kotlin.coroutines.resume' call
    var tmp0_resume = this.ms_1;
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.success' call
    var tmp0_success = Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
    tmp0_resume.m4(tmp$ret$0);
    tmp$ret$1 = Unit_getInstance();
    return tmp$ret$1;
  };
  ResumeOnCompletion.prototype.invoke = function (cause) {
    return this.uk(cause);
  };
  ResumeOnCompletion.$metadata$ = classMeta('ResumeOnCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function unboxState(_this__u8e3s4) {
    init_properties_JobSupport_kt_iaxwag();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ns_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.ss_1 = continuation;
  }
  ResumeAwaitOnCompletion.prototype.uk = function (cause) {
    var state = this.vp().pi();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp0_resumeWithException = this.ss_1;
      var tmp1_resumeWithException = state.bi_1;
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_resumeWithException));
      tmp0_resumeWithException.m4(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp2_resume = this.ss_1;
      var tmp = unboxState(state);
      var tmp3_resume = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$2 = _Result___init__impl__xyqfz8(tmp3_resume);
      tmp2_resume.m4(tmp$ret$2);
      tmp$ret$3 = Unit_getInstance();
    }
  };
  ResumeAwaitOnCompletion.prototype.invoke = function (cause) {
    return this.uk(cause);
  };
  ResumeAwaitOnCompletion.$metadata$ = classMeta('ResumeAwaitOnCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function IncompleteStateBox(state) {
    this.ns_1 = state;
  }
  IncompleteStateBox.$metadata$ = classMeta('IncompleteStateBox');
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.xs_1 = child;
  }
  ChildContinuation.prototype.uk = function (cause) {
    this.xs_1.mm(this.xs_1.nm(this.vp()));
  };
  ChildContinuation.prototype.invoke = function (cause) {
    return this.uk(cause);
  };
  ChildContinuation.$metadata$ = classMeta('ChildContinuation', undefined, undefined, undefined, undefined, JobCancellingNode.prototype);
  function handlesException($this) {
    var tmp = $this.oi();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.vp();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.nj())
        return true;
      var tmp_1 = parentJob.oi();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.vp();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.rh(parent);
    this.at_1 = handlesException(this);
  }
  JobImpl.prototype.bj = function () {
    return true;
  };
  JobImpl.prototype.nj = function () {
    return this.at_1;
  };
  JobImpl.prototype.on = function (exception) {
    return this.nn(CompletedExceptionally_init_$Create$(exception, false, 2, null));
  };
  JobImpl.$metadata$ = classMeta('JobImpl', [CompletableJob], undefined, undefined, undefined, JobSupport.prototype);
  function DisposeOnCompletion(handle) {
    JobNode.call(this);
    this.ft_1 = handle;
  }
  DisposeOnCompletion.prototype.uk = function (cause) {
    return this.ft_1.vk();
  };
  DisposeOnCompletion.prototype.invoke = function (cause) {
    return this.uk(cause);
  };
  DisposeOnCompletion.$metadata$ = classMeta('DisposeOnCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  var properties_initialized_JobSupport_kt_5iq8a4;
  function init_properties_JobSupport_kt_iaxwag() {
    if (properties_initialized_JobSupport_kt_5iq8a4) {
    } else {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  MainCoroutineDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.it();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  MainCoroutineDispatcher.prototype.it = function () {
    var main = Dispatchers_getInstance().nt();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.ht();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  MainCoroutineDispatcher.$metadata$ = classMeta('MainCoroutineDispatcher', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function SupervisorJob(parent) {
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  SupervisorJobImpl.prototype.gj = function (cause) {
    return false;
  };
  SupervisorJobImpl.$metadata$ = classMeta('SupervisorJobImpl', undefined, undefined, undefined, undefined, JobImpl.prototype);
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    this.rt_1 = coroutine;
    captureStack(this, TimeoutCancellationException);
  }
  TimeoutCancellationException.prototype.st = function () {
    return this.rt_1;
  };
  TimeoutCancellationException.$metadata$ = classMeta('TimeoutCancellationException', [CopyableThrowable], undefined, undefined, undefined, CancellationException.prototype);
  function withTimeoutOrNull(timeMillis, block, $cont) {
    var tmp = new $withTimeoutOrNullCOROUTINE$3(timeMillis, block, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  }
  function setupTimeout(coroutine, block) {
    var cont = coroutine.hk_1;
    var context = cont.o4();
    disposeOnCompletion(coroutine, get_delay(context).bo(coroutine.ku_1, coroutine, coroutine.uh_1));
    return startUndispatchedOrReturnIgnoreTimeout(coroutine, coroutine, block);
  }
  function TimeoutCoroutine(time, uCont) {
    ScopeCoroutine.call(this, uCont.o4(), uCont);
    this.ku_1 = time;
  }
  TimeoutCoroutine.prototype.sm = function () {
    this.wr(TimeoutCancellationException_0(this.ku_1, this));
  };
  TimeoutCoroutine.prototype.ii = function () {
    return ScopeCoroutine.prototype.ii.call(this) + '(timeMillis=' + toString_0(this.ku_1) + ')';
  };
  TimeoutCoroutine.$metadata$ = classMeta('TimeoutCoroutine', [Runnable], undefined, undefined, undefined, ScopeCoroutine.prototype);
  function TimeoutCancellationException_0(time, coroutine) {
    return new TimeoutCancellationException('Timed out waiting for ' + toString_0(time) + ' ms', coroutine);
  }
  function $withTimeoutOrNullCOROUTINE$3(timeMillis, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.bu_1 = timeMillis;
    this.cu_1 = block;
  }
  $withTimeoutOrNullCOROUTINE$3.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 3;
            if (this.bu_1.h1(new Long(0, 0)) <= 0)
              return null;
            this.du_1 = {_v: null};
            this.ag_1 = 2;
            this.zf_1 = 1;
            var tmp_0 = this;
            tmp_0.eu_1 = this;
            this.fu_1 = new TimeoutCoroutine(this.bu_1, this.eu_1);
            this.du_1._v = this.fu_1;
            suspendResult = returnIfSuspended(setupTimeout(this.fu_1, this.cu_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            this.ag_1 = 3;
            var tmp_1 = this.cg_1;
            if (tmp_1 instanceof TimeoutCancellationException) {
              var e = this.cg_1;
              if (e.rt_1 === this.du_1._v) {
                return null;
              }
              throw e;
            } else {
              throw this.cg_1;
            }

            break;
          case 3:
            throw this.cg_1;
          case 4:
            this.ag_1 = 3;
            return Unit_getInstance();
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
  $withTimeoutOrNullCOROUTINE$3.$metadata$ = classMeta('$withTimeoutOrNullCOROUTINE$3', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  Unconfined.prototype.tn = function (context) {
    return false;
  };
  Unconfined.prototype.un = function (context, block) {
    var yieldContext = context.g5(Key_getInstance_3());
    if (!(yieldContext == null)) {
      yieldContext.nu_1 = true;
      return Unit_getInstance();
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  Unconfined.prototype.toString = function () {
    return 'Dispatchers.Unconfined';
  };
  Unconfined.$metadata$ = objectMeta('Unconfined', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_3() {
    Key_instance_2 = this;
  }
  Key_3.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_2;
  function Key_getInstance_3() {
    if (Key_instance_2 == null)
      new Key_3();
    return Key_instance_2;
  }
  function YieldContext() {
    Key_getInstance_3();
    AbstractCoroutineContextElement.call(this, Key_getInstance_3());
    this.nu_1 = false;
  }
  YieldContext.prototype.ou = function () {
    return this.nu_1;
  };
  YieldContext.$metadata$ = classMeta('YieldContext', undefined, undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function yield_0($cont) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.yield.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $cont;
      var context = tmp0__anonymous__q1qw7t.o4();
      ensureActive(context);
      var tmp = intercepted(tmp0__anonymous__q1qw7t);
      var tmp0_elvis_lhs = tmp instanceof DispatchedContinuation ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var cont = tmp_0;
      if (cont.xk_1.tn(context)) {
        cont.pu(context, Unit_getInstance());
      } else {
        var yieldContext = new YieldContext();
        cont.pu(context.n5(yieldContext), Unit_getInstance());
        if (yieldContext.nu_1) {
          tmp$ret$0 = yieldUndispatched(cont) ? get_COROUTINE_SUSPENDED() : Unit_getInstance();
          break $l$block_0;
        }
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  }
  function get_EMPTY() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return EMPTY;
  }
  var EMPTY;
  function get_OFFER_SUCCESS() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return OFFER_SUCCESS;
  }
  var OFFER_SUCCESS;
  function get_OFFER_FAILED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return OFFER_FAILED;
  }
  var OFFER_FAILED;
  function get_POLL_FAILED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return POLL_FAILED;
  }
  var POLL_FAILED;
  var ENQUEUE_FAILED;
  function get_HANDLER_INVOKED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return HANDLER_INVOKED;
  }
  var HANDLER_INVOKED;
  function hasNextResult($this, result) {
    if (result instanceof Closed) {
      if (!(result.tu_1 == null))
        throw recoverStackTrace_0(result.uu());
      return false;
    }
    return true;
  }
  function hasNextSuspend($this, $cont) {
    var tmp$ret$5;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.channels.Itr.hasNextSuspend.<anonymous>' call
      var receive = new ReceiveHasNext($this, cancellable);
      while (true) {
        if (enqueueReceive($this.vu_1, receive)) {
          removeReceiveOnCancel($this.vu_1, cancellable, receive);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        var result = $this.vu_1.av();
        $this.wu_1 = result;
        if (result instanceof Closed) {
          if (result.tu_1 == null) {
            var tmp$ret$2;
            // Inline function 'kotlin.coroutines.resume' call
            var tmp$ret$1;
            // Inline function 'kotlin.Companion.success' call
            var tmp0_success = Companion_getInstance();
            tmp$ret$1 = _Result___init__impl__xyqfz8(false);
            cancellable.m4(tmp$ret$1);
            tmp$ret$2 = Unit_getInstance();
          } else {
            var tmp$ret$4;
            // Inline function 'kotlin.coroutines.resumeWithException' call
            var tmp0_resumeWithException = result.uu();
            var tmp$ret$3;
            // Inline function 'kotlin.Companion.failure' call
            var tmp0_failure = Companion_getInstance();
            tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
            cancellable.m4(tmp$ret$3);
            tmp$ret$4 = Unit_getInstance();
          }
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        if (!(result === get_POLL_FAILED())) {
          var tmp0_safe_receiver = $this.vu_1.bv_1;
          var tmp;
          if (tmp0_safe_receiver == null) {
            tmp = null;
          } else {
            tmp = bindCancellationFun(tmp0_safe_receiver, (result == null ? true : isObject(result)) ? result : THROW_CCE(), cancellable.o4());
          }
          cancellable.sk(true, tmp);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
      }
    }
    tmp$ret$5 = cancellable.wj();
    return tmp$ret$5;
  }
  function receiveSuspend($this, receiveMode, $cont) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.channels.AbstractChannel.receiveSuspend.<anonymous>' call
      var tmp;
      if ($this.bv_1 == null) {
        tmp = new ReceiveElement(isInterface(cancellable, CancellableContinuation) ? cancellable : THROW_CCE(), receiveMode);
      } else {
        tmp = new ReceiveElementWithUndeliveredHandler(isInterface(cancellable, CancellableContinuation) ? cancellable : THROW_CCE(), receiveMode, $this.bv_1);
      }
      var receive = tmp;
      while (true) {
        if (enqueueReceive($this, receive)) {
          removeReceiveOnCancel($this, cancellable, receive);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        var result = $this.av();
        if (result instanceof Closed) {
          receive.jv(result);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        if (!(result === get_POLL_FAILED())) {
          var tmp_0 = receive.kv((result == null ? true : isObject(result)) ? result : THROW_CCE());
          cancellable.sk(tmp_0, receive.ov((result == null ? true : isObject(result)) ? result : THROW_CCE()));
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
      }
    }
    tmp$ret$1 = cancellable.wj();
    return tmp$ret$1;
  }
  function enqueueReceive($this, receive) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.pv(receive);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceive.<anonymous>' call
    if (tmp0_also) {
      $this.qv();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function removeReceiveOnCancel($this, cont, receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new RemoveReceiveOnCancel($this, receive);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return cont.qk(tmp$ret$1);
  }
  function RemoveReceiveOnCancel($outer, receive) {
    this.sv_1 = $outer;
    BeforeResumeCancelHandler.call(this);
    this.rv_1 = receive;
  }
  RemoveReceiveOnCancel.prototype.uk = function (cause) {
    if (this.rv_1.ol()) {
      this.sv_1.tv();
    }
  };
  RemoveReceiveOnCancel.prototype.invoke = function (cause) {
    return this.uk(cause);
  };
  RemoveReceiveOnCancel.prototype.toString = function () {
    return 'RemoveReceiveOnCancel[' + this.rv_1 + ']';
  };
  RemoveReceiveOnCancel.$metadata$ = classMeta('RemoveReceiveOnCancel', undefined, undefined, undefined, undefined, BeforeResumeCancelHandler.prototype);
  function Itr(channel) {
    this.vu_1 = channel;
    this.wu_1 = get_POLL_FAILED();
  }
  Itr.prototype.uv = function () {
    return this.vu_1;
  };
  Itr.prototype.vv = function (_set____db54di) {
    this.wu_1 = _set____db54di;
  };
  Itr.prototype.wv = function ($cont) {
    if (!(this.wu_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.wu_1);
    this.wu_1 = this.vu_1.av();
    if (!(this.wu_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.wu_1);
    return hasNextSuspend(this, $cont);
  };
  Itr.prototype.e = function () {
    var result = this.wu_1;
    if (result instanceof Closed)
      throw recoverStackTrace_0(result.uu());
    if (!(result === get_POLL_FAILED())) {
      this.wu_1 = get_POLL_FAILED();
      return (result == null ? true : isObject(result)) ? result : THROW_CCE();
    }
    throw IllegalStateException_init_$Create$("'hasNext' should be called prior to 'next' invocation");
  };
  Itr.$metadata$ = classMeta('Itr', [ChannelIterator]);
  function ReceiveElement(cont, receiveMode) {
    Receive.call(this);
    this.hv_1 = cont;
    this.iv_1 = receiveMode;
  }
  ReceiveElement.prototype.kv = function (value) {
    var tmp0_subject = this.iv_1;
    return tmp0_subject === 1 ? new ChannelResult(Companion_getInstance_1().yv(value)) : value;
  };
  ReceiveElement.prototype.zv = function (value, otherOp) {
    var tmp = this.kv(value);
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.hv_1.lk(tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bw_1, this.ov(value));
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var token = tmp_0;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.dw();
    }
    return get_RESUME_TOKEN();
  };
  ReceiveElement.prototype.ew = function (value) {
    return this.hv_1.nk(get_RESUME_TOKEN());
  };
  ReceiveElement.prototype.jv = function (closed) {
    if (this.iv_1 === 1) {
      var tmp$ret$2;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp0_resume = this.hv_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.toResult' call
      tmp$ret$0 = Companion_getInstance_1().fw(closed.tu_1);
      var tmp1_resume = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$1 = _Result___init__impl__xyqfz8(new ChannelResult(tmp1_resume));
      tmp0_resume.m4(tmp$ret$1);
      tmp$ret$2 = Unit_getInstance();
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp2_resumeWithException = this.hv_1;
      var tmp3_resumeWithException = closed.uu();
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(tmp3_resumeWithException));
      tmp2_resumeWithException.m4(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
    }
  };
  ReceiveElement.prototype.toString = function () {
    return 'ReceiveElement@' + get_hexAddress(this) + '[receiveMode=' + this.iv_1 + ']';
  };
  ReceiveElement.$metadata$ = classMeta('ReceiveElement', undefined, undefined, undefined, undefined, Receive.prototype);
  function ReceiveElementWithUndeliveredHandler(cont, receiveMode, onUndeliveredElement) {
    ReceiveElement.call(this, cont, receiveMode);
    this.mw_1 = onUndeliveredElement;
  }
  ReceiveElementWithUndeliveredHandler.prototype.ov = function (value) {
    return bindCancellationFun(this.mw_1, value, this.hv_1.o4());
  };
  ReceiveElementWithUndeliveredHandler.$metadata$ = classMeta('ReceiveElementWithUndeliveredHandler', undefined, undefined, undefined, undefined, ReceiveElement.prototype);
  function ReceiveHasNext(iterator, cont) {
    Receive.call(this);
    this.qw_1 = iterator;
    this.rw_1 = cont;
  }
  ReceiveHasNext.prototype.zv = function (value, otherOp) {
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.rw_1.lk(true, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bw_1, this.ov(value));
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var token = tmp;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.dw();
    }
    return get_RESUME_TOKEN();
  };
  ReceiveHasNext.prototype.ew = function (value) {
    this.qw_1.wu_1 = value;
    this.rw_1.nk(get_RESUME_TOKEN());
  };
  ReceiveHasNext.prototype.jv = function (closed) {
    var tmp;
    if (closed.tu_1 == null) {
      tmp = this.rw_1.kk(false, null, 2, null);
    } else {
      tmp = this.rw_1.mk(closed.uu());
    }
    var token = tmp;
    if (!(token == null)) {
      this.qw_1.wu_1 = closed;
      this.rw_1.nk(token);
    }
  };
  ReceiveHasNext.prototype.ov = function (value) {
    var tmp0_safe_receiver = this.qw_1.vu_1.bv_1;
    return tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, value, this.rw_1.o4());
  };
  ReceiveHasNext.prototype.toString = function () {
    return 'ReceiveHasNext@' + get_hexAddress(this);
  };
  ReceiveHasNext.$metadata$ = classMeta('ReceiveHasNext', undefined, undefined, undefined, undefined, Receive.prototype);
  function AbstractChannel(onUndeliveredElement) {
    AbstractSendChannel.call(this, onUndeliveredElement);
  }
  AbstractChannel.prototype.av = function () {
    while (true) {
      var tmp0_elvis_lhs = this.uw();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_POLL_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var send = tmp;
      var token = send.yw(null);
      if (!(token == null)) {
        // Inline function 'kotlinx.coroutines.assert' call
        send.zw();
        return send.ax();
      }
      send.bx();
    }
  };
  AbstractChannel.prototype.cx = function () {
    return !(this.dx() == null) ? this.tw() : false;
  };
  AbstractChannel.prototype.ex = function ($cont) {
    var result = this.av();
    var tmp;
    if (!(result === get_POLL_FAILED())) {
      tmp = !(result instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      return (result == null ? true : isObject(result)) ? result : THROW_CCE();
    }
    return receiveSuspend(this, 0, $cont);
  };
  AbstractChannel.prototype.pv = function (receive) {
    var tmp;
    if (this.sw()) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
        var tmp0_addLastIfPrev = this.cv_1;
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.ml_1;
        tmp$ret$0 = !(tmp1__anonymous__uwfjfc instanceof Send);
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block;
        }
        tmp0_addLastIfPrev.lp(receive);
        tmp$ret$1 = true;
      }
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$3;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrevAndIf' call
        var tmp2_addLastIfPrevAndIf = this.cv_1;
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        var tmp3__anonymous__ufb84q = tmp2_addLastIfPrevAndIf.ml_1;
        tmp$ret$2 = !(tmp3__anonymous__ufb84q instanceof Send);
        if (!tmp$ret$2) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        tmp$ret$4 = this.tw();
        if (!tmp$ret$4) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        tmp2_addLastIfPrevAndIf.lp(receive);
        tmp$ret$3 = true;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  AbstractChannel.prototype.fx = function () {
    var result = this.av();
    if (result === get_POLL_FAILED())
      return Companion_getInstance_1().gx();
    if (result instanceof Closed)
      return Companion_getInstance_1().fw(result.tu_1);
    var tmp = Companion_getInstance_1();
    return tmp.yv((result == null ? true : isObject(result)) ? result : THROW_CCE());
  };
  AbstractChannel.prototype.cj = function (cause) {
    if (this.cx())
      return Unit_getInstance();
    var tmp0_elvis_lhs = cause;
    this.hx(tmp0_elvis_lhs == null ? CancellationException_init_$Create$(get_classSimpleName(this) + ' was cancelled') : tmp0_elvis_lhs);
  };
  AbstractChannel.prototype.hx = function (cause) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.ix(cause);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.cancelInternal.<anonymous>' call
    this.jx(tmp0_also);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  AbstractChannel.prototype.jx = function (wasClosed) {
    var tmp0_elvis_lhs = this.kx();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Cannot happen');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var closed = tmp;
    var list = _InlineList___init__impl__z8n56_0(null, 1, null);
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      tmp$ret$0 = closed.ml_1;
      var previous = tmp$ret$0;
      if (previous instanceof LinkedListHead) {
        break $l$loop_0;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      if (!previous.ol()) {
        previous.qp();
        continue $l$loop_0;
      }
      var tmp_0 = list;
      list = InlineList__plus_impl_nuetvo(tmp_0, previous instanceof Send ? previous : THROW_CCE());
    }
    this.lx(list, closed);
  };
  AbstractChannel.prototype.lx = function (list, closed) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.AbstractChannel.onCancelIdempotentList.<anonymous>' call
          var tmp = _get_holder__f6h5pd(list);
          var tmp0__anonymous__q1qw7t = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          tmp0__anonymous__q1qw7t.mx(closed);
        } else {
          var tmp_0 = _get_holder__f6h5pd(list);
          var list_0 = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable = list_0.f() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.AbstractChannel.onCancelIdempotentList.<anonymous>' call
              var tmp1__anonymous__uwfjfc = list_0.g(i);
              tmp1__anonymous__uwfjfc.mx(closed);
            }
             while (0 <= inductionVariable);
        }
      }
    }
  };
  AbstractChannel.prototype.c = function () {
    return new Itr(this);
  };
  AbstractChannel.prototype.nx = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = AbstractSendChannel.prototype.nx.call(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.takeFirstReceiveOrPeekClosed.<anonymous>' call
    var tmp;
    if (!(tmp0_also == null)) {
      tmp = !(tmp0_also instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.tv();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  AbstractChannel.prototype.qv = function () {
  };
  AbstractChannel.prototype.tv = function () {
  };
  AbstractChannel.$metadata$ = classMeta('AbstractChannel', [Channel], undefined, undefined, undefined, AbstractSendChannel.prototype);
  function helpCloseAndGetSendException($this, closed) {
    helpClose($this, closed);
    return closed.tx();
  }
  function invokeOnCloseHandler($this, cause) {
    var handler = $this.dv_1.ih_1;
    if ((!(handler === null) ? !(handler === get_HANDLER_INVOKED()) : false) ? $this.dv_1.atomicfu$compareAndSet(handler, get_HANDLER_INVOKED()) : false) {
      ((!(handler == null) ? typeof handler === 'function' : false) ? handler : THROW_CCE())(cause);
    }
  }
  function helpClose($this, closed) {
    var closedList = _InlineList___init__impl__z8n56_0(null, 1, null);
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      tmp$ret$0 = closed.ml_1;
      var tmp = tmp$ret$0;
      var tmp0_elvis_lhs = tmp instanceof Receive ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break $l$loop_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var previous = tmp_0;
      if (!previous.ol()) {
        previous.qp();
        continue $l$loop_0;
      }
      closedList = InlineList__plus_impl_nuetvo(closedList, previous);
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_forEachReversed = closedList;
      var tmp0_subject = _get_holder__f6h5pd(tmp0_forEachReversed);
      if (tmp0_subject == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.helpClose.<anonymous>' call
          var tmp_1 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var tmp1__anonymous__uwfjfc = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
          tmp1__anonymous__uwfjfc.jv(closed);
        } else {
          var tmp_2 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var list = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list.f() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.helpClose.<anonymous>' call
              var tmp2__anonymous__z9zvc9 = list.g(i);
              tmp2__anonymous__z9zvc9.jv(closed);
            }
             while (0 <= inductionVariable);
        }
      }
    }
    $this.rx(closed);
  }
  function _get_queueDebugStateString__k7jj75($this) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = $this.cv_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4.ll_1;
    var head = tmp$ret$0;
    if (head === $this.cv_1)
      return 'EmptyQueue';
    var tmp0_subject = head;
    var tmp;
    if (tmp0_subject instanceof Closed) {
      tmp = toString_0(head);
    } else {
      if (tmp0_subject instanceof Receive) {
        tmp = 'ReceiveQueued';
      } else {
        if (tmp0_subject instanceof Send) {
          tmp = 'SendQueued';
        } else {
          tmp = 'UNEXPECTED:' + head;
        }
      }
    }
    var result = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
    var tmp1__get_prevNode__b1i0ed = $this.cv_1;
    tmp$ret$1 = tmp1__get_prevNode__b1i0ed.ml_1;
    var tail = tmp$ret$1;
    if (!(tail === head)) {
      result = result + (',queueSize=' + countQueueSize($this));
      if (tail instanceof Closed)
        result = result + (',closedForSend=' + tail);
    }
    return result;
  }
  function countQueueSize($this) {
    var size = 0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var tmp0_forEach = $this.cv_1;
    var cur = tmp0_forEach.ll_1;
    while (!equals(cur, tmp0_forEach)) {
      if (cur instanceof LinkedListNode) {
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.countQueueSize.<anonymous>' call
        var tmp1__anonymous__uwfjfc = cur;
        var tmp0 = size;
        size = tmp0 + 1 | 0;
      }
      cur = cur.ll_1;
    }
    return size;
  }
  function SendBuffered(element) {
    Send.call(this);
    this.xx_1 = element;
  }
  SendBuffered.prototype.yx = function () {
    return this.xx_1;
  };
  SendBuffered.prototype.ax = function () {
    return this.xx_1;
  };
  SendBuffered.prototype.yw = function (otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.SendBuffered.tryResumeSend.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.dw();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  SendBuffered.prototype.zw = function () {
  };
  SendBuffered.prototype.mx = function (closed) {
    // Inline function 'kotlinx.coroutines.assert' call
  };
  SendBuffered.prototype.toString = function () {
    return 'SendBuffered@' + get_hexAddress(this) + '(' + this.xx_1 + ')';
  };
  SendBuffered.$metadata$ = classMeta('SendBuffered', undefined, undefined, undefined, undefined, Send.prototype);
  function AbstractSendChannel(onUndeliveredElement) {
    this.bv_1 = onUndeliveredElement;
    this.cv_1 = new LinkedListHead();
    this.dv_1 = atomic$ref$1(null);
  }
  AbstractSendChannel.prototype.ox = function () {
    return this.bv_1;
  };
  AbstractSendChannel.prototype.px = function (element) {
    while (true) {
      var tmp0_elvis_lhs = this.nx();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_OFFER_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var receive = tmp;
      var token = receive.zv(element, null);
      if (!(token == null)) {
        // Inline function 'kotlinx.coroutines.assert' call
        receive.ew(element);
        return receive.gw();
      }
    }
  };
  AbstractSendChannel.prototype.kx = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
    var tmp0__get_prevNode__2ljhpg = this.cv_1;
    tmp$ret$0 = tmp0__get_prevNode__2ljhpg.ml_1;
    var tmp = tmp$ret$0;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.<get-closedForSend>.<anonymous>' call
      helpClose(this, tmp0_safe_receiver);
      tmp$ret$1 = tmp0_safe_receiver;
      tmp_0 = tmp$ret$1;
    }
    return tmp_0;
  };
  AbstractSendChannel.prototype.dx = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = this.cv_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4.ll_1;
    var tmp = tmp$ret$0;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.<get-closedForReceive>.<anonymous>' call
      helpClose(this, tmp0_safe_receiver);
      tmp$ret$1 = tmp0_safe_receiver;
      tmp_0 = tmp$ret$1;
    }
    return tmp_0;
  };
  AbstractSendChannel.prototype.uw = function () {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf' call
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf = this.cv_1;
      var next = tmp1_removeFirstIfIsInstanceOfOrPeekIf.ll_1;
      if (next === tmp1_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!(next instanceof Send)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.takeFirstSendOrPeekClosed.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = next;
      tmp$ret$1 = tmp2__anonymous__z9zvc9 instanceof Closed;
      if (tmp$ret$1) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      // Inline function 'kotlin.check' call
      var tmp0_check = next.mp();
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf.<anonymous>' call
        tmp$ret$2 = 'Should remove';
        var message = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  AbstractSendChannel.prototype.zx = function (element) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
      var tmp0_addLastIfPrev = this.cv_1;
      var tmp1_addLastIfPrev = new SendBuffered(element);
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.sendBuffered.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = tmp0_addLastIfPrev.ml_1;
      if (isInterface(tmp2__anonymous__z9zvc9, ReceiveOrClosed))
        return tmp2__anonymous__z9zvc9;
      tmp$ret$0 = true;
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.lp(tmp1_addLastIfPrev);
      tmp$ret$1 = true;
    }
    return null;
  };
  AbstractSendChannel.prototype.qx = function (element) {
    var result = this.px(element);
    var tmp;
    if (result === get_OFFER_SUCCESS()) {
      tmp = Companion_getInstance_1().yv(Unit_getInstance());
    } else {
      if (result === get_OFFER_FAILED()) {
        var tmp0_elvis_lhs = this.kx();
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return Companion_getInstance_1().gx();
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var closedForSend = tmp_0;
        tmp = Companion_getInstance_1().fw(helpCloseAndGetSendException(this, closedForSend));
      } else {
        if (result instanceof Closed) {
          tmp = Companion_getInstance_1().fw(helpCloseAndGetSendException(this, result));
        } else {
          var tmp0_error = 'trySend returned ' + toString_0(result);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
    }
    return tmp;
  };
  AbstractSendChannel.prototype.ix = function (cause) {
    var closed = new Closed(cause);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
      var tmp0_addLastIfPrev = this.cv_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.close.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.ml_1;
      tmp$ret$0 = !(tmp1__anonymous__uwfjfc instanceof Closed);
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.lp(closed);
      tmp$ret$1 = true;
    }
    var closeAdded = tmp$ret$1;
    var tmp;
    if (closeAdded) {
      tmp = closed;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp2__get_prevNode__jhgj3a = this.cv_1;
      tmp$ret$2 = tmp2__get_prevNode__jhgj3a.ml_1;
      var tmp_0 = tmp$ret$2;
      tmp = tmp_0 instanceof Closed ? tmp_0 : THROW_CCE();
    }
    var actuallyClosed = tmp;
    helpClose(this, actuallyClosed);
    if (closeAdded) {
      invokeOnCloseHandler(this, cause);
    }
    return closeAdded;
  };
  AbstractSendChannel.prototype.rx = function (closed) {
  };
  AbstractSendChannel.prototype.nx = function () {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf' call
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf = this.cv_1;
      var next = tmp1_removeFirstIfIsInstanceOfOrPeekIf.ll_1;
      if (next === tmp1_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!isInterface(next, ReceiveOrClosed)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.takeFirstReceiveOrPeekClosed.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = next;
      tmp$ret$1 = tmp2__anonymous__z9zvc9 instanceof Closed;
      if (tmp$ret$1) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      // Inline function 'kotlin.check' call
      var tmp0_check = next.mp();
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf.<anonymous>' call
        tmp$ret$2 = 'Should remove';
        var message = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  AbstractSendChannel.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '{' + _get_queueDebugStateString__k7jj75(this) + '}' + this.sx();
  };
  AbstractSendChannel.prototype.sx = function () {
    return '';
  };
  AbstractSendChannel.$metadata$ = classMeta('AbstractSendChannel', [SendChannel]);
  function Send() {
    LinkedListNode.call(this);
  }
  Send.prototype.bx = function () {
  };
  Send.$metadata$ = classMeta('Send', undefined, undefined, undefined, undefined, LinkedListNode.prototype);
  function ReceiveOrClosed() {
  }
  ReceiveOrClosed.$metadata$ = interfaceMeta('ReceiveOrClosed');
  function Closed(closeCause) {
    Send.call(this);
    this.tu_1 = closeCause;
  }
  Closed.prototype.ay = function () {
    return this.tu_1;
  };
  Closed.prototype.tx = function () {
    var tmp0_elvis_lhs = this.tu_1;
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  Closed.prototype.uu = function () {
    var tmp0_elvis_lhs = this.tu_1;
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  Closed.prototype.gw = function () {
    return this;
  };
  Closed.prototype.ax = function () {
    return this;
  };
  Closed.prototype.yw = function (otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.Closed.tryResumeSend.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.dw();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  Closed.prototype.zw = function () {
  };
  Closed.prototype.zv = function (value, otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.Closed.tryResumeReceive.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.dw();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  Closed.prototype.ew = function (value) {
  };
  Closed.prototype.mx = function (closed) {
    return Unit_getInstance();
  };
  Closed.prototype.toString = function () {
    return 'Closed@' + get_hexAddress(this) + '[' + this.tu_1 + ']';
  };
  Closed.$metadata$ = classMeta('Closed', [ReceiveOrClosed], undefined, undefined, undefined, Send.prototype);
  function Receive() {
    LinkedListNode.call(this);
  }
  Receive.prototype.gw = function () {
    return get_OFFER_SUCCESS();
  };
  Receive.prototype.ov = function (value) {
    return null;
  };
  Receive.$metadata$ = classMeta('Receive', [ReceiveOrClosed], undefined, undefined, undefined, LinkedListNode.prototype);
  function toResult(_this__u8e3s4) {
    init_properties_AbstractChannel_kt_mjk5bh();
    return Companion_getInstance_1().fw(_this__u8e3s4.tu_1);
  }
  var properties_initialized_AbstractChannel_kt_uwqnpt;
  function init_properties_AbstractChannel_kt_mjk5bh() {
    if (properties_initialized_AbstractChannel_kt_uwqnpt) {
    } else {
      properties_initialized_AbstractChannel_kt_uwqnpt = true;
      EMPTY = new Symbol('EMPTY');
      OFFER_SUCCESS = new Symbol('OFFER_SUCCESS');
      OFFER_FAILED = new Symbol('OFFER_FAILED');
      POLL_FAILED = new Symbol('POLL_FAILED');
      ENQUEUE_FAILED = new Symbol('ENQUEUE_FAILED');
      HANDLER_INVOKED = new Symbol('ON_CLOSE_HANDLER_INVOKED');
    }
  }
  function updateBufferSize($this, currentSize) {
    if (currentSize < $this.ey_1) {
      $this.jy_1.jh_1 = currentSize + 1 | 0;
      return null;
    }
    var tmp0_subject = $this.fy_1;
    var tmp0 = tmp0_subject.t5_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = get_OFFER_FAILED();
        break;
      case 2:
        tmp = get_OFFER_SUCCESS();
        break;
      case 1:
        tmp = null;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function enqueueElement($this, currentSize, element) {
    if (currentSize < $this.ey_1) {
      ensureCapacity($this, currentSize);
      $this.hy_1[($this.iy_1 + currentSize | 0) % $this.hy_1.length | 0] = element;
    } else {
      // Inline function 'kotlinx.coroutines.assert' call
      $this.hy_1[$this.iy_1 % $this.hy_1.length | 0] = null;
      $this.hy_1[($this.iy_1 + currentSize | 0) % $this.hy_1.length | 0] = element;
      $this.iy_1 = ($this.iy_1 + 1 | 0) % $this.hy_1.length | 0;
    }
  }
  function ensureCapacity($this, currentSize) {
    if (currentSize >= $this.hy_1.length) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.min' call
      var tmp0_min = imul($this.hy_1.length, 2);
      var tmp1_min = $this.ey_1;
      tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
      var newSize = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$1 = fillArrayVal(Array(newSize), null);
      var newBuffer = tmp$ret$1;
      var inductionVariable = 0;
      if (inductionVariable < currentSize)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          newBuffer[i] = $this.hy_1[($this.iy_1 + i | 0) % $this.hy_1.length | 0];
        }
         while (inductionVariable < currentSize);
      fill(newBuffer, get_EMPTY(), currentSize, newSize);
      $this.hy_1 = newBuffer;
      $this.iy_1 = 0;
    }
  }
  function ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.ey_1 = capacity;
    this.fy_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.ey_1 >= 1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<anonymous>' call
      tmp$ret$0 = 'ArrayChannel capacity must be at least 1, but ' + this.ey_1 + ' was specified';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    this.gy_1 = new NoOpLock();
    var tmp = this;
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$1;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = this.ey_1;
    tmp$ret$1 = Math.min(tmp0_min, 8);
    var tmp1_arrayOfNulls = tmp$ret$1;
    tmp$ret$2 = fillArrayVal(Array(tmp1_arrayOfNulls), null);
    var tmp2_apply = tmp$ret$2;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.buffer.<anonymous>' call
    var tmp_0 = get_EMPTY();
    fill$default(tmp2_apply, tmp_0, 0, 0, 6, null);
    tmp$ret$3 = tmp2_apply;
    tmp.hy_1 = tmp$ret$3;
    this.iy_1 = 0;
    this.jy_1 = atomic$int$1(0);
  }
  ArrayChannel.prototype.sw = function () {
    return false;
  };
  ArrayChannel.prototype.tw = function () {
    return this.jy_1.jh_1 === 0;
  };
  ArrayChannel.prototype.cx = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.gy_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<get-isClosedForReceive>.<anonymous>' call
    tmp$ret$0 = AbstractChannel.prototype.cx.call(this);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ArrayChannel.prototype.px = function (element) {
    var receive = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.gy_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.offerInternal.<anonymous>' call
      var size = this.jy_1.jh_1;
      var tmp0_safe_receiver = this.kx();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      var tmp1_safe_receiver = updateBufferSize(this, size);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp1_safe_receiver;
      }
      if (size === 0) {
        loop: while (true) {
          var tmp2_elvis_lhs = this.nx();
          var tmp;
          if (tmp2_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp2_elvis_lhs;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            this.jy_1.jh_1 = size;
            return ensureNotNull(receive);
          }
          var token = ensureNotNull(receive).zv(element, null);
          if (!(token == null)) {
            // Inline function 'kotlinx.coroutines.assert' call
            this.jy_1.jh_1 = size;
            tmp$ret$2 = Unit_getInstance();
            break $l$block;
          }
        }
      }
      enqueueElement(this, size, element);
      return get_OFFER_SUCCESS();
    }
    tmp$ret$3 = tmp$ret$2;
    ensureNotNull(receive).ew(element);
    return ensureNotNull(receive).gw();
  };
  ArrayChannel.prototype.av = function () {
    var send = null;
    var resumed = false;
    var result = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.gy_1;
    var size = this.jy_1.jh_1;
    if (size === 0) {
      var tmp0_elvis_lhs = this.kx();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.hy_1[this.iy_1];
    this.hy_1[this.iy_1] = null;
    this.jy_1.jh_1 = size - 1 | 0;
    var replacement = get_POLL_FAILED();
    if (size === this.ey_1) {
      loop: while (true) {
        var tmp1_elvis_lhs = this.uw();
        var tmp;
        if (tmp1_elvis_lhs == null) {
          break loop;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        send = tmp;
        var token = ensureNotNull(send).yw(null);
        if (!(token == null)) {
          // Inline function 'kotlinx.coroutines.assert' call
          resumed = true;
          replacement = ensureNotNull(send).ax();
          break loop;
        }
        ensureNotNull(send).bx();
      }
    }
    var tmp_0;
    if (!(replacement === get_POLL_FAILED())) {
      tmp_0 = !(replacement instanceof Closed);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      this.jy_1.jh_1 = size;
      this.hy_1[(this.iy_1 + size | 0) % this.hy_1.length | 0] = replacement;
    }
    this.iy_1 = (this.iy_1 + 1 | 0) % this.hy_1.length | 0;
    tmp$ret$0 = Unit_getInstance();
    if (resumed) {
      ensureNotNull(send).zw();
    }
    return result;
  };
  ArrayChannel.prototype.pv = function (receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.gy_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.enqueueReceiveInternal.<anonymous>' call
    tmp$ret$0 = AbstractChannel.prototype.pv.call(this, receive);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ArrayChannel.prototype.jx = function (wasClosed) {
    var onUndeliveredElement = this.bv_1;
    var undeliveredElementException = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.gy_1;
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.jy_1.jh_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.coroutines.channels.ArrayChannel.onCancelIdempotent.<anonymous>.<anonymous>' call
        var value = this.hy_1[this.iy_1];
        if (!(onUndeliveredElement == null) ? !(value === get_EMPTY()) : false) {
          undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, (value == null ? true : isObject(value)) ? value : THROW_CCE(), undeliveredElementException);
        }
        this.hy_1[this.iy_1] = get_EMPTY();
        this.iy_1 = (this.iy_1 + 1 | 0) % this.hy_1.length | 0;
      }
       while (inductionVariable < tmp0_repeat);
    this.jy_1.jh_1 = 0;
    tmp$ret$0 = Unit_getInstance();
    AbstractChannel.prototype.jx.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  ArrayChannel.prototype.sx = function () {
    return '(buffer:capacity=' + this.ey_1 + ',size=' + this.jy_1.jh_1 + ')';
  };
  ArrayChannel.$metadata$ = classMeta('ArrayChannel', undefined, undefined, undefined, undefined, AbstractChannel.prototype);
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_getInstance();
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  BufferOverflow.$metadata$ = classMeta('BufferOverflow', undefined, undefined, undefined, undefined, Enum.prototype);
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function Factory() {
    Factory_instance = this;
    this.ky_1 = 2147483647;
    this.ly_1 = 0;
    this.my_1 = -1;
    this.ny_1 = -2;
    this.oy_1 = -3;
    this.py_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.qy_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  Factory.prototype.ry = function () {
    return this.ky_1;
  };
  Factory.prototype.sy = function () {
    return this.my_1;
  };
  Factory.$metadata$ = objectMeta('Factory');
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function Channel() {
  }
  Channel.$metadata$ = interfaceMeta('Channel', [SendChannel, ReceiveChannel]);
  function Channel_0(capacity, onBufferOverflow, onUndeliveredElement) {
    var tmp0_subject = capacity;
    var tmp;
    Factory_getInstance();
    if (tmp0_subject === 0) {
      tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new RendezvousChannel(onUndeliveredElement) : new ArrayChannel(1, onBufferOverflow, onUndeliveredElement);
    } else {
      Factory_getInstance();
      if (tmp0_subject === -1) {
        // Inline function 'kotlin.require' call
        var tmp0_require = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_require) {
          var tmp$ret$0;
          // Inline function 'kotlinx.coroutines.channels.Channel.<anonymous>' call
          tmp$ret$0 = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          var message = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString_0(message));
        }
        tmp = new ConflatedChannel(onUndeliveredElement);
      } else {
        Factory_getInstance();
        if (tmp0_subject === 2147483647) {
          tmp = new LinkedListChannel(onUndeliveredElement);
        } else {
          Factory_getInstance();
          if (tmp0_subject === -2) {
            tmp = new ArrayChannel(onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? Factory_getInstance().qy_1 : 1, onBufferOverflow, onUndeliveredElement);
          } else {
            tmp = (capacity === 1 ? onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance()) : false) ? new ConflatedChannel(onUndeliveredElement) : new ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement);
          }
        }
      }
    }
    return tmp;
  }
  function Channel$default(capacity, onBufferOverflow, onUndeliveredElement, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      Factory_getInstance();
      capacity = 0;
    }
    if (!(($mask0 & 2) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    if (!(($mask0 & 4) === 0))
      onUndeliveredElement = null;
    return Channel_0(capacity, onBufferOverflow, onUndeliveredElement);
  }
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function ChannelResult__getOrNull_impl_f5e07h($this) {
    var tmp;
    var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp_0 instanceof Failed)) {
      var tmp_1 = _ChannelResult___get_holder__impl__pm9gzw($this);
      tmp = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function Failed() {
  }
  Failed.prototype.toString = function () {
    return 'Failed';
  };
  Failed.$metadata$ = classMeta('Failed');
  function Closed_0(cause) {
    Failed.call(this);
    this.ty_1 = cause;
  }
  Closed_0.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Closed_0) {
      tmp = equals(this.ty_1, other.ty_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  Closed_0.prototype.hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.ty_1;
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp$ret$0;
  };
  Closed_0.prototype.toString = function () {
    return 'Closed(' + this.ty_1 + ')';
  };
  Closed_0.$metadata$ = classMeta('Closed', undefined, undefined, undefined, undefined, Failed.prototype);
  function Companion() {
    Companion_instance = this;
    this.xv_1 = new Failed();
  }
  Companion.prototype.yv = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  Companion.prototype.gx = function () {
    return _ChannelResult___init__impl__siwsuf(this.xv_1);
  };
  Companion.prototype.fw = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed_0(cause));
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ChannelResult__toString_impl_rrcqu7($this) {
    var tmp0_subject = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp;
    if (tmp0_subject instanceof Closed_0) {
      tmp = toString_0(_ChannelResult___get_holder__impl__pm9gzw($this));
    } else {
      tmp = 'Value(' + toString(_ChannelResult___get_holder__impl__pm9gzw($this)) + ')';
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_lilec2($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function ChannelResult__equals_impl_f471ri($this, other) {
    if (!(other instanceof ChannelResult))
      return false;
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.uy_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_1();
    this.uy_1 = holder;
  }
  ChannelResult.prototype.toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.uy_1);
  };
  ChannelResult.prototype.hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.uy_1);
  };
  ChannelResult.prototype.equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.uy_1, other);
  };
  ChannelResult.$metadata$ = classMeta('ChannelResult');
  function SendChannel() {
  }
  SendChannel.$metadata$ = interfaceMeta('SendChannel');
  function ReceiveChannel() {
  }
  ReceiveChannel.$metadata$ = interfaceMeta('ReceiveChannel');
  function ChannelIterator() {
  }
  ChannelIterator.$metadata$ = interfaceMeta('ChannelIterator');
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  ClosedReceiveChannelException.$metadata$ = classMeta('ClosedReceiveChannelException', undefined, undefined, undefined, undefined, NoSuchElementException.prototype);
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  ClosedSendChannelException.$metadata$ = classMeta('ClosedSendChannelException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function get_DEFAULT_CLOSE_MESSAGE() {
    return DEFAULT_CLOSE_MESSAGE;
  }
  var DEFAULT_CLOSE_MESSAGE;
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp0_safe_receiver = cause;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.cancelConsumed.<anonymous>' call
      var tmp0_elvis_lhs = tmp0_safe_receiver instanceof CancellationException ? tmp0_safe_receiver : null;
      tmp$ret$0 = tmp0_elvis_lhs == null ? CancellationException_init_$Create$_0('Channel was consumed, consumer had failed', tmp0_safe_receiver) : tmp0_elvis_lhs;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    _this__u8e3s4.cj(tmp);
  }
  function updateValueLocked($this, element) {
    var old = $this.zy_1;
    var tmp;
    if (old === get_EMPTY()) {
      tmp = null;
    } else {
      var tmp0_safe_receiver = $this.bv_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp_1 = (old == null ? true : isObject(old)) ? old : THROW_CCE();
        tmp_0 = callUndeliveredElementCatchingException$default(tmp0_safe_receiver, tmp_1, null, 2, null);
      }
      tmp = tmp_0;
    }
    var undeliveredElementException = tmp;
    $this.zy_1 = element;
    return undeliveredElementException;
  }
  function ConflatedChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.yy_1 = new NoOpLock();
    this.zy_1 = get_EMPTY();
  }
  ConflatedChannel.prototype.sw = function () {
    return false;
  };
  ConflatedChannel.prototype.tw = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.yy_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-isBufferEmpty>.<anonymous>' call
    tmp$ret$0 = this.zy_1 === get_EMPTY();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ConflatedChannel.prototype.px = function (element) {
    var receive = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.yy_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.offerInternal.<anonymous>' call
      var tmp0_safe_receiver = this.kx();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      if (this.zy_1 === get_EMPTY()) {
        loop: while (true) {
          var tmp1_elvis_lhs = this.nx();
          var tmp;
          if (tmp1_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp1_elvis_lhs;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            return ensureNotNull(receive);
          }
          var token = ensureNotNull(receive).zv(element, null);
          if (!(token == null)) {
            // Inline function 'kotlinx.coroutines.assert' call
            tmp$ret$1 = Unit_getInstance();
            break $l$block;
          }
        }
      }
      var tmp2_safe_receiver = updateValueLocked(this, element);
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw tmp2_safe_receiver;
      }
      return get_OFFER_SUCCESS();
    }
    tmp$ret$3 = tmp$ret$1;
    ensureNotNull(receive).ew(element);
    return ensureNotNull(receive).gw();
  };
  ConflatedChannel.prototype.av = function () {
    var result = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.yy_1;
    if (this.zy_1 === get_EMPTY()) {
      var tmp0_elvis_lhs = this.kx();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.zy_1;
    this.zy_1 = get_EMPTY();
    tmp$ret$0 = Unit_getInstance();
    return result;
  };
  ConflatedChannel.prototype.jx = function (wasClosed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.yy_1;
    undeliveredElementException = updateValueLocked(this, get_EMPTY());
    tmp$ret$0 = Unit_getInstance();
    AbstractChannel.prototype.jx.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  ConflatedChannel.prototype.pv = function (receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.yy_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.enqueueReceiveInternal.<anonymous>' call
    tmp$ret$0 = AbstractChannel.prototype.pv.call(this, receive);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ConflatedChannel.prototype.sx = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.yy_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-bufferDebugString>.<anonymous>' call
    tmp$ret$0 = '(value=' + toString(this.zy_1) + ')';
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ConflatedChannel.$metadata$ = classMeta('ConflatedChannel', undefined, undefined, undefined, undefined, AbstractChannel.prototype);
  function LinkedListChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  LinkedListChannel.prototype.sw = function () {
    return true;
  };
  LinkedListChannel.prototype.tw = function () {
    return true;
  };
  LinkedListChannel.prototype.px = function (element) {
    while (true) {
      var result = AbstractChannel.prototype.px.call(this, element);
      if (result === get_OFFER_SUCCESS())
        return get_OFFER_SUCCESS();
      else {
        if (result === get_OFFER_FAILED()) {
          var sendResult = this.zx(element);
          if (sendResult == null)
            return get_OFFER_SUCCESS();
          else {
            if (sendResult instanceof Closed)
              return sendResult;
          }
        } else {
          if (result instanceof Closed)
            return result;
          else {
            var tmp0_error = 'Invalid offerInternal result ' + toString_0(result);
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
          }
        }
      }
    }
  };
  LinkedListChannel.prototype.lx = function (list, closed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.LinkedListChannel.onCancelIdempotentList.<anonymous>' call
          var tmp = _get_holder__f6h5pd(list);
          var tmp0__anonymous__q1qw7t = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          var tmp0_subject_0 = tmp0__anonymous__q1qw7t;
          if (tmp0_subject_0 instanceof SendBuffered) {
            var tmp1_safe_receiver = this.bv_1;
            var tmp_0;
            if (tmp1_safe_receiver == null) {
              tmp_0 = null;
            } else {
              var tmp_1 = tmp0__anonymous__q1qw7t.xx_1;
              tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE(), undeliveredElementException);
            }
            undeliveredElementException = tmp_0;
          } else {
            tmp0__anonymous__q1qw7t.mx(closed);
          }
        } else {
          var tmp_2 = _get_holder__f6h5pd(list);
          var list_0 = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list_0.f() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.LinkedListChannel.onCancelIdempotentList.<anonymous>' call
              var tmp1__anonymous__uwfjfc = list_0.g(i);
              var tmp0_subject_1 = tmp1__anonymous__uwfjfc;
              if (tmp0_subject_1 instanceof SendBuffered) {
                var tmp1_safe_receiver_0 = this.bv_1;
                var tmp_3;
                if (tmp1_safe_receiver_0 == null) {
                  tmp_3 = null;
                } else {
                  var tmp_4 = tmp1__anonymous__uwfjfc.xx_1;
                  tmp_3 = callUndeliveredElementCatchingException(tmp1_safe_receiver_0, (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE(), undeliveredElementException);
                }
                undeliveredElementException = tmp_3;
              } else {
                tmp1__anonymous__uwfjfc.mx(closed);
              }
            }
             while (0 <= inductionVariable);
        }
      }
    }
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  LinkedListChannel.$metadata$ = classMeta('LinkedListChannel', undefined, undefined, undefined, undefined, AbstractChannel.prototype);
  function RendezvousChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  RendezvousChannel.prototype.sw = function () {
    return true;
  };
  RendezvousChannel.prototype.tw = function () {
    return true;
  };
  RendezvousChannel.$metadata$ = classMeta('RendezvousChannel', undefined, undefined, undefined, undefined, AbstractChannel.prototype);
  function Flow() {
  }
  Flow.$metadata$ = interfaceMeta('Flow');
  function FlowCollector() {
  }
  FlowCollector.$metadata$ = interfaceMeta('FlowCollector');
  function get_NO_VALUE() {
    init_properties_SharedFlow_kt_5sqb47();
    return NO_VALUE;
  }
  var NO_VALUE;
  function MutableSharedFlow() {
  }
  MutableSharedFlow.$metadata$ = interfaceMeta('MutableSharedFlow', [SharedFlow, FlowCollector]);
  function SharedFlow() {
  }
  SharedFlow.$metadata$ = interfaceMeta('SharedFlow', [Flow]);
  function _get_head__d7jo8b($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = $this.sz_1;
    var tmp1_minOf = $this.rz_1;
    tmp$ret$0 = tmp0_minOf.h1(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
    return tmp$ret$0;
  }
  function _get_replaySize__dxgnb1($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    var tmp1_plus = $this.tz_1;
    tmp$ret$0 = tmp0_plus.o6(toLong(tmp1_plus));
    return tmp$ret$0.p6($this.rz_1).b7();
  }
  function _get_totalSize__xhdb3o($this) {
    return $this.tz_1 + $this.uz_1 | 0;
  }
  function _get_bufferEndIndex__d2rk18($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    var tmp1_plus = $this.tz_1;
    tmp$ret$0 = tmp0_plus.o6(toLong(tmp1_plus));
    return tmp$ret$0;
  }
  function _get_queueEndIndex__4m025l($this) {
    var tmp$ret$1;
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    var tmp1_plus = $this.tz_1;
    tmp$ret$0 = tmp0_plus.o6(toLong(tmp1_plus));
    var tmp2_plus = tmp$ret$0;
    var tmp3_plus = $this.uz_1;
    tmp$ret$1 = tmp2_plus.o6(toLong(tmp3_plus));
    return tmp$ret$1;
  }
  function tryEmitLocked($this, value) {
    if ($this.wz_1 === 0)
      return tryEmitNoCollectorsLocked($this, value);
    if ($this.tz_1 >= $this.oz_1 ? $this.sz_1.h1($this.rz_1) <= 0 : false) {
      var tmp0_subject = $this.pz_1;
      var tmp0 = tmp0_subject.t5_1;
      switch (tmp0) {
        case 0:
          return false;
        case 2:
          return true;
        case 1:
          break;
      }
    }
    enqueueLocked($this, value);
    var tmp1_this = $this;
    var tmp2 = tmp1_this.tz_1;
    tmp1_this.tz_1 = tmp2 + 1 | 0;
    if ($this.tz_1 > $this.oz_1) {
      dropOldestLocked($this);
    }
    if (_get_replaySize__dxgnb1($this) > $this.nz_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = $this.rz_1;
      tmp$ret$0 = tmp0_plus.o6(new Long(1, 0));
      updateBufferLocked($this, tmp$ret$0, $this.sz_1, _get_bufferEndIndex__d2rk18($this), _get_queueEndIndex__4m025l($this));
    }
    return true;
  }
  function tryEmitNoCollectorsLocked($this, value) {
    // Inline function 'kotlinx.coroutines.assert' call
    if ($this.nz_1 === 0)
      return true;
    enqueueLocked($this, value);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.tz_1;
    tmp0_this.tz_1 = tmp1 + 1 | 0;
    if ($this.tz_1 > $this.nz_1) {
      dropOldestLocked($this);
    }
    var tmp = $this;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    var tmp1_plus = $this.tz_1;
    tmp$ret$0 = tmp0_plus.o6(toLong(tmp1_plus));
    tmp.sz_1 = tmp$ret$0;
    return true;
  }
  function dropOldestLocked($this) {
    setBufferAt(ensureNotNull($this.qz_1), _get_head__d7jo8b($this), null);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.tz_1;
    tmp0_this.tz_1 = tmp1 - 1 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    tmp$ret$0 = tmp0_plus.o6(new Long(1, 0));
    var newHead = tmp$ret$0;
    if ($this.rz_1.h1(newHead) < 0)
      $this.rz_1 = newHead;
    if ($this.sz_1.h1(newHead) < 0) {
      correctCollectorIndexesOnDropOldest($this, newHead);
    }
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function correctCollectorIndexesOnDropOldest($this, newHead) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.wz_1 === 0) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var tmp0_safe_receiver = $this.vz_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.correctCollectorIndexesOnDropOldest.<anonymous>' call
            if (element.zz_1.h1(new Long(0, 0)) >= 0 ? element.zz_1.h1(newHead) < 0 : false) {
              element.zz_1 = newHead;
            }
          }
        }
      }
    }
    $this.sz_1 = newHead;
  }
  function enqueueLocked($this, item) {
    var curSize = _get_totalSize__xhdb3o($this);
    var curBuffer = $this.qz_1;
    var buffer = curBuffer == null ? growBuffer($this, null, 0, 2) : curSize >= curBuffer.length ? growBuffer($this, curBuffer, curSize, imul(curBuffer.length, 2)) : curBuffer;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    tmp$ret$0 = tmp0_plus.o6(toLong(curSize));
    setBufferAt(buffer, tmp$ret$0, item);
  }
  function growBuffer($this, curBuffer, curSize, newSize) {
    // Inline function 'kotlin.check' call
    var tmp0_check = newSize > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
      tmp$ret$0 = 'Buffer size overflow';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$1 = fillArrayVal(Array(newSize), null);
    var tmp1_also = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
    $this.qz_1 = tmp1_also;
    tmp$ret$2 = tmp1_also;
    var newBuffer = tmp$ret$2;
    if (curBuffer == null)
      return newBuffer;
    var head = _get_head__d7jo8b($this);
    var inductionVariable = 0;
    if (inductionVariable < curSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$3;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$3 = head.o6(toLong(i));
        var tmp = tmp$ret$3;
        var tmp$ret$4;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$4 = head.o6(toLong(i));
        setBufferAt(newBuffer, tmp, getBufferAt(curBuffer, tmp$ret$4));
      }
       while (inductionVariable < curSize);
    return newBuffer;
  }
  function emitSuspend($this, value, $cont) {
    var tmp$ret$9;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.fm();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>' call
    var resumes = get_EMPTY_RESUMES();
    var tmp$ret$5;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>' call
      if (tryEmitLocked($this, value)) {
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cancellable.m4(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        resumes = findSlotsToResumeLocked($this, resumes);
        tmp$ret$2 = null;
        break $l$block;
      }
      var tmp$ret$4;
      // Inline function 'kotlin.also' call
      var tmp$ret$3;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = _get_head__d7jo8b($this);
      var tmp1_plus = _get_totalSize__xhdb3o($this);
      tmp$ret$3 = tmp0_plus.o6(toLong(tmp1_plus));
      var tmp2_also = new Emitter($this, tmp$ret$3, value, cancellable);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>.<anonymous>' call
      enqueueLocked($this, tmp2_also);
      var tmp0_this = $this;
      var tmp1 = tmp0_this.uz_1;
      tmp0_this.uz_1 = tmp1 + 1 | 0;
      if ($this.oz_1 === 0)
        resumes = findSlotsToResumeLocked($this, resumes);
      tmp$ret$4 = tmp2_also;
      tmp$ret$2 = tmp$ret$4;
    }
    tmp$ret$5 = tmp$ret$2;
    var emitter = tmp$ret$5;
    var tmp0_safe_receiver = emitter;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$6;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      disposeOnCancellation(cancellable, tmp0_safe_receiver);
      tmp$ret$6 = Unit_getInstance();
    }
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var r = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp2_safe_receiver = r;
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$8;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$7;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success_0 = Companion_getInstance();
        tmp$ret$7 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp2_safe_receiver.m4(tmp$ret$7);
        tmp$ret$8 = Unit_getInstance();
      }
    }
    tmp$ret$9 = cancellable.wj();
    return tmp$ret$9;
  }
  function cancelEmitter($this, emitter) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    if (emitter.c10_1.h1(_get_head__d7jo8b($this)) < 0)
      return Unit_getInstance();
    var buffer = ensureNotNull($this.qz_1);
    if (!(getBufferAt(buffer, emitter.c10_1) === emitter))
      return Unit_getInstance();
    setBufferAt(buffer, emitter.c10_1, get_NO_VALUE());
    cleanupTailLocked($this);
    tmp$ret$0 = Unit_getInstance();
    return tmp$ret$0;
  }
  function updateBufferLocked($this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    tmp$ret$0 = newMinCollectorIndex.h1(newReplayIndex) <= 0 ? newMinCollectorIndex : newReplayIndex;
    var newHead = tmp$ret$0;
    // Inline function 'kotlinx.coroutines.assert' call
    var inductionVariable = _get_head__d7jo8b($this);
    if (inductionVariable.h1(newHead) < 0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable.o6(new Long(1, 0));
        setBufferAt(ensureNotNull($this.qz_1), index, null);
      }
       while (inductionVariable.h1(newHead) < 0);
    $this.rz_1 = newReplayIndex;
    $this.sz_1 = newMinCollectorIndex;
    $this.tz_1 = newBufferEndIndex.p6(newHead).b7();
    $this.uz_1 = newQueueEndIndex.p6(newBufferEndIndex).b7();
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function cleanupTailLocked($this) {
    if ($this.oz_1 === 0 ? $this.uz_1 <= 1 : false)
      return Unit_getInstance();
    var buffer = ensureNotNull($this.qz_1);
    $l$loop: while (true) {
      var tmp;
      if ($this.uz_1 > 0) {
        var tmp$ret$1;
        // Inline function 'kotlin.Long.minus' call
        var tmp$ret$0;
        // Inline function 'kotlin.Long.plus' call
        var tmp0_plus = _get_head__d7jo8b($this);
        var tmp1_plus = _get_totalSize__xhdb3o($this);
        tmp$ret$0 = tmp0_plus.o6(toLong(tmp1_plus));
        var tmp2_minus = tmp$ret$0;
        tmp$ret$1 = tmp2_minus.p6(new Long(1, 0));
        tmp = getBufferAt(buffer, tmp$ret$1) === get_NO_VALUE();
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      var tmp0_this = $this;
      var tmp1 = tmp0_this.uz_1;
      tmp0_this.uz_1 = tmp1 - 1 | 0;
      var tmp$ret$2;
      // Inline function 'kotlin.Long.plus' call
      var tmp3_plus = _get_head__d7jo8b($this);
      var tmp4_plus = _get_totalSize__xhdb3o($this);
      tmp$ret$2 = tmp3_plus.o6(toLong(tmp4_plus));
      setBufferAt(buffer, tmp$ret$2, null);
    }
  }
  function tryTakeValue($this, slot) {
    var resumes = get_EMPTY_RESUMES();
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.tryTakeValue.<anonymous>' call
    var index = tryPeekLocked($this, slot);
    var tmp;
    if (index.h1(new Long(0, 0)) < 0) {
      tmp = get_NO_VALUE();
    } else {
      var oldIndex = slot.zz_1;
      var newValue = getPeekedValueLockedAt($this, index);
      var tmp_0 = slot;
      var tmp$ret$0;
      // Inline function 'kotlin.Long.plus' call
      tmp$ret$0 = index.o6(new Long(1, 0));
      tmp_0.zz_1 = tmp$ret$0;
      resumes = $this.f10(oldIndex);
      tmp = newValue;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    var value = tmp$ret$2;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var resume = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_safe_receiver = resume;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$3;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp1_safe_receiver.m4(tmp$ret$3);
        tmp$ret$4 = Unit_getInstance();
      }
    }
    return value;
  }
  function tryPeekLocked($this, slot) {
    var index = slot.zz_1;
    if (index.h1(_get_bufferEndIndex__d2rk18($this)) < 0)
      return index;
    if ($this.oz_1 > 0)
      return new Long(-1, -1);
    if (index.h1(_get_head__d7jo8b($this)) > 0)
      return new Long(-1, -1);
    if ($this.uz_1 === 0)
      return new Long(-1, -1);
    return index;
  }
  function getPeekedValueLockedAt($this, index) {
    var item = getBufferAt(ensureNotNull($this.qz_1), index);
    var tmp;
    if (item instanceof Emitter) {
      tmp = item.d10_1;
    } else {
      tmp = item;
    }
    return tmp;
  }
  function awaitValue($this, slot, $cont) {
    var tmp$ret$4;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.fm();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>' call
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>.<anonymous>' call
      var index = tryPeekLocked($this, slot);
      if (index.h1(new Long(0, 0)) < 0) {
        slot.a10_1 = cancellable;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cancellable.m4(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        tmp$ret$2 = Unit_getInstance();
        break $l$block;
      }
      slot.a10_1 = cancellable;
    }
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = cancellable.wj();
    return tmp$ret$4;
  }
  function findSlotsToResumeLocked($this, resumesIn) {
    var resumes = resumesIn;
    var resumeCount = resumesIn.length;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.wz_1 === 0) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var tmp0_safe_receiver = $this.vz_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            var tmp$ret$1;
            $l$block_1: {
              // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.findSlotsToResumeLocked.<anonymous>' call
              var tmp0_elvis_lhs = element.a10_1;
              var tmp;
              if (tmp0_elvis_lhs == null) {
                tmp$ret$1 = Unit_getInstance();
                break $l$block_1;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var cont = tmp;
              if (tryPeekLocked($this, element).h1(new Long(0, 0)) < 0) {
                tmp$ret$1 = Unit_getInstance();
                break $l$block_1;
              }
              if (resumeCount >= resumes.length) {
                var tmp_0 = resumes;
                var tmp$ret$2;
                // Inline function 'kotlin.comparisons.maxOf' call
                var tmp0_maxOf = imul(2, resumes.length);
                tmp$ret$2 = Math.max(2, tmp0_maxOf);
                resumes = copyOf(tmp_0, tmp$ret$2);
              }
              var tmp_1 = resumes;
              var tmp1 = resumeCount;
              resumeCount = tmp1 + 1 | 0;
              tmp_1[tmp1] = cont;
              element.a10_1 = null;
            }
          }
        }
      }
    }
    return resumes;
  }
  function Emitter(flow, index, value, cont) {
    this.b10_1 = flow;
    this.c10_1 = index;
    this.d10_1 = value;
    this.e10_1 = cont;
  }
  Emitter.prototype.vk = function () {
    return cancelEmitter(this.b10_1, this);
  };
  Emitter.$metadata$ = classMeta('Emitter', [DisposableHandle]);
  function $collectCOROUTINE$8(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o10_1 = _this__u8e3s4;
    this.p10_1 = collector;
  }
  $collectCOROUTINE$8.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 13;
            this.q10_1 = this.o10_1.u10();
            this.zf_1 = 1;
            continue $sm;
          case 1:
            this.ag_1 = 12;
            var tmp_0 = this.p10_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.zf_1 = 2;
              suspendResult = this.p10_1.x10(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zf_1 = 3;
              continue $sm;
            }

            break;
          case 2:
            this.zf_1 = 3;
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.s10_1 = this.o4().g5(Key_getInstance_2());
            this.zf_1 = 4;
            continue $sm;
          case 4:
            if (false) {
              this.zf_1 = 10;
              continue $sm;
            }

            this.zf_1 = 5;
            continue $sm;
          case 5:
            if (false) {
              this.zf_1 = 8;
              continue $sm;
            }

            this.t10_1 = tryTakeValue(this.o10_1, this.q10_1);
            if (!(this.t10_1 === get_NO_VALUE())) {
              this.zf_1 = 8;
              continue $sm;
            } else {
              this.zf_1 = 6;
              continue $sm;
            }

            break;
          case 6:
            this.zf_1 = 7;
            suspendResult = awaitValue(this.o10_1, this.q10_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.zf_1 = 5;
            continue $sm;
          case 8:
            var tmp0_safe_receiver = this.s10_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            ;
            this.zf_1 = 9;
            var tmp_2 = this.t10_1;
            suspendResult = this.p10_1.hz((tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.zf_1 = 4;
            continue $sm;
          case 10:
            this.r10_1 = Unit_getInstance();
            this.ag_1 = 13;
            this.zf_1 = 11;
            continue $sm;
          case 11:
            this.o10_1.y10(this.q10_1);
            ;
            return Unit_getInstance();
          case 12:
            this.ag_1 = 13;
            var t = this.cg_1;
            this.o10_1.y10(this.q10_1);
            ;
            throw t;
          case 13:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 13) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  $collectCOROUTINE$8.$metadata$ = classMeta('$collectCOROUTINE$8', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function SharedFlowImpl(replay, bufferCapacity, onBufferOverflow) {
    AbstractSharedFlow.call(this);
    this.nz_1 = replay;
    this.oz_1 = bufferCapacity;
    this.pz_1 = onBufferOverflow;
    this.qz_1 = null;
    this.rz_1 = new Long(0, 0);
    this.sz_1 = new Long(0, 0);
    this.tz_1 = 0;
    this.uz_1 = 0;
  }
  SharedFlowImpl.prototype.z10 = function () {
    var tmp = ensureNotNull(this.qz_1);
    var tmp$ret$1;
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = this.rz_1;
    var tmp1_plus = _get_replaySize__dxgnb1(this);
    tmp$ret$0 = tmp0_plus.o6(toLong(tmp1_plus));
    var tmp2_minus = tmp$ret$0;
    tmp$ret$1 = tmp2_minus.p6(new Long(1, 0));
    var tmp_0 = getBufferAt(tmp, tmp$ret$1);
    return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
  };
  SharedFlowImpl.prototype.a11 = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$8(this, collector, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  SharedFlowImpl.prototype.gz = function (collector, $cont) {
    return this.a11(collector, $cont);
  };
  SharedFlowImpl.prototype.iz = function (value) {
    var resumes = get_EMPTY_RESUMES();
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.tryEmit.<anonymous>' call
    var tmp;
    if (tryEmitLocked(this, value)) {
      resumes = findSlotsToResumeLocked(this, resumes);
      tmp = true;
    } else {
      tmp = false;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    var emitted = tmp$ret$1;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_safe_receiver = cont;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$3;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp1_safe_receiver.m4(tmp$ret$2);
        tmp$ret$3 = Unit_getInstance();
      }
    }
    return emitted;
  };
  SharedFlowImpl.prototype.hz = function (value, $cont) {
    if (this.iz(value))
      return Unit_getInstance();
    return emitSuspend(this, value, $cont);
  };
  SharedFlowImpl.prototype.b11 = function () {
    var index = this.rz_1;
    if (index.h1(this.sz_1) < 0)
      this.sz_1 = index;
    return index;
  };
  SharedFlowImpl.prototype.f10 = function (oldIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (oldIndex.h1(this.sz_1) > 0)
      return get_EMPTY_RESUMES();
    var head = _get_head__d7jo8b(this);
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = this.tz_1;
    tmp$ret$0 = head.o6(toLong(tmp0_plus));
    var newMinCollectorIndex = tmp$ret$0;
    if (this.oz_1 === 0 ? this.uz_1 > 0 : false) {
      var tmp0 = newMinCollectorIndex;
      newMinCollectorIndex = tmp0.vf();
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if (this.wz_1 === 0) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      }
      var tmp0_safe_receiver = this.vz_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.updateCollectorIndexLocked.<anonymous>' call
            if (element.zz_1.h1(new Long(0, 0)) >= 0 ? element.zz_1.h1(newMinCollectorIndex) < 0 : false)
              newMinCollectorIndex = element.zz_1;
          }
        }
      }
    }
    // Inline function 'kotlinx.coroutines.assert' call
    if (newMinCollectorIndex.h1(this.sz_1) <= 0)
      return get_EMPTY_RESUMES();
    var newBufferEndIndex = _get_bufferEndIndex__d2rk18(this);
    var tmp;
    if (this.wz_1 > 0) {
      var newBufferSize0 = newBufferEndIndex.p6(newMinCollectorIndex).b7();
      var tmp$ret$2;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp1_minOf = this.uz_1;
      var tmp2_minOf = this.oz_1 - newBufferSize0 | 0;
      tmp$ret$2 = Math.min(tmp1_minOf, tmp2_minOf);
      tmp = tmp$ret$2;
    } else {
      tmp = this.uz_1;
    }
    var maxResumeCount = tmp;
    var resumes = get_EMPTY_RESUMES();
    var tmp$ret$3;
    // Inline function 'kotlin.Long.plus' call
    var tmp3_plus = newBufferEndIndex;
    var tmp4_plus = this.uz_1;
    tmp$ret$3 = tmp3_plus.o6(toLong(tmp4_plus));
    var newQueueEndIndex = tmp$ret$3;
    if (maxResumeCount > 0) {
      var tmp$ret$4;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$4 = fillArrayVal(Array(maxResumeCount), null);
      resumes = tmp$ret$4;
      var resumeCount = 0;
      var buffer = ensureNotNull(this.qz_1);
      var inductionVariable = newBufferEndIndex;
      if (inductionVariable.h1(newQueueEndIndex) < 0)
        $l$loop: do {
          var curEmitterIndex = inductionVariable;
          inductionVariable = inductionVariable.o6(new Long(1, 0));
          var emitter = getBufferAt(buffer, curEmitterIndex);
          if (!(emitter === get_NO_VALUE())) {
            if (emitter instanceof Emitter)
              emitter;
            else
              THROW_CCE();
            var tmp_0 = resumes;
            var tmp2 = resumeCount;
            resumeCount = tmp2 + 1 | 0;
            tmp_0[tmp2] = emitter.e10_1;
            setBufferAt(buffer, curEmitterIndex, get_NO_VALUE());
            setBufferAt(buffer, newBufferEndIndex, emitter.d10_1);
            var tmp3 = newBufferEndIndex;
            newBufferEndIndex = tmp3.vf();
            if (resumeCount >= maxResumeCount)
              break $l$loop;
          }
        }
         while (inductionVariable.h1(newQueueEndIndex) < 0);
    }
    var newBufferSize1 = newBufferEndIndex.p6(head).b7();
    if (this.wz_1 === 0)
      newMinCollectorIndex = newBufferEndIndex;
    var tmp$ret$7;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp8_maxOf = this.rz_1;
    var tmp$ret$6;
    // Inline function 'kotlin.Long.minus' call
    var tmp6_minus = newBufferEndIndex;
    var tmp$ret$5;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp5_minOf = this.nz_1;
    tmp$ret$5 = Math.min(tmp5_minOf, newBufferSize1);
    var tmp7_minus = tmp$ret$5;
    tmp$ret$6 = tmp6_minus.p6(toLong(tmp7_minus));
    var tmp9_maxOf = tmp$ret$6;
    tmp$ret$7 = tmp8_maxOf.h1(tmp9_maxOf) >= 0 ? tmp8_maxOf : tmp9_maxOf;
    var newReplayIndex = tmp$ret$7;
    if ((this.oz_1 === 0 ? newReplayIndex.h1(newQueueEndIndex) < 0 : false) ? equals(getBufferAt(ensureNotNull(this.qz_1), newReplayIndex), get_NO_VALUE()) : false) {
      var tmp4 = newBufferEndIndex;
      newBufferEndIndex = tmp4.vf();
      var tmp5 = newReplayIndex;
      newReplayIndex = tmp5.vf();
    }
    updateBufferLocked(this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex);
    cleanupTailLocked(this);
    var tmp$ret$9;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp10_isNotEmpty = resumes;
    var tmp$ret$8;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$8 = tmp10_isNotEmpty.length === 0;
    tmp$ret$9 = !tmp$ret$8;
    if (tmp$ret$9)
      resumes = findSlotsToResumeLocked(this, resumes);
    return resumes;
  };
  SharedFlowImpl.prototype.c11 = function () {
    return new SharedFlowSlot();
  };
  SharedFlowImpl.prototype.d11 = function (size) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(size), null);
    return tmp$ret$0;
  };
  SharedFlowImpl.$metadata$ = classMeta('SharedFlowImpl', [MutableSharedFlow, CancellableFlow, FusibleFlow], undefined, undefined, undefined, AbstractSharedFlow.prototype);
  function SharedFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.zz_1 = new Long(-1, -1);
    this.a10_1 = null;
  }
  SharedFlowSlot.prototype.h11 = function (_set____db54di) {
    this.zz_1 = _set____db54di;
  };
  SharedFlowSlot.prototype.i11 = function () {
    return this.zz_1;
  };
  SharedFlowSlot.prototype.j11 = function (_set____db54di) {
    this.a10_1 = _set____db54di;
  };
  SharedFlowSlot.prototype.k11 = function () {
    return this.a10_1;
  };
  SharedFlowSlot.prototype.l11 = function (flow) {
    if (this.zz_1.h1(new Long(0, 0)) >= 0)
      return false;
    this.zz_1 = flow.b11();
    return true;
  };
  SharedFlowSlot.prototype.m11 = function (flow) {
    return this.l11(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  SharedFlowSlot.prototype.n11 = function (flow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var oldIndex = this.zz_1;
    this.zz_1 = new Long(-1, -1);
    this.a10_1 = null;
    return flow.f10(oldIndex);
  };
  SharedFlowSlot.prototype.o11 = function (flow) {
    return this.n11(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  SharedFlowSlot.$metadata$ = classMeta('SharedFlowSlot', undefined, undefined, undefined, undefined, AbstractSharedFlowSlot.prototype);
  function getBufferAt(_this__u8e3s4, index) {
    init_properties_SharedFlow_kt_5sqb47();
    return _this__u8e3s4[index.b7() & (_this__u8e3s4.length - 1 | 0)];
  }
  function setBufferAt(_this__u8e3s4, index, item) {
    init_properties_SharedFlow_kt_5sqb47();
    return _this__u8e3s4[index.b7() & (_this__u8e3s4.length - 1 | 0)] = item;
  }
  function MutableSharedFlow_0(replay, extraBufferCapacity, onBufferOverflow) {
    init_properties_SharedFlow_kt_5sqb47();
    // Inline function 'kotlin.require' call
    var tmp0_require = replay >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      tmp$ret$0 = 'replay cannot be negative, but was ' + replay;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = extraBufferCapacity >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      tmp$ret$1 = 'extraBufferCapacity cannot be negative, but was ' + extraBufferCapacity;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp2_require = (replay > 0 ? true : extraBufferCapacity > 0) ? true : onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      tmp$ret$2 = 'replay or extraBufferCapacity must be positive with non-default onBufferOverflow strategy ' + onBufferOverflow;
      var message_1 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString_0(message_1));
    }
    var bufferCapacity0 = replay + extraBufferCapacity | 0;
    var bufferCapacity = bufferCapacity0 < 0 ? IntCompanionObject_getInstance().c1_1 : bufferCapacity0;
    return new SharedFlowImpl(replay, bufferCapacity, onBufferOverflow);
  }
  function MutableSharedFlow$default(replay, extraBufferCapacity, onBufferOverflow, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      replay = 0;
    if (!(($mask0 & 2) === 0))
      extraBufferCapacity = 0;
    if (!(($mask0 & 4) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    return MutableSharedFlow_0(replay, extraBufferCapacity, onBufferOverflow);
  }
  var properties_initialized_SharedFlow_kt_tmefor;
  function init_properties_SharedFlow_kt_5sqb47() {
    if (properties_initialized_SharedFlow_kt_tmefor) {
    } else {
      properties_initialized_SharedFlow_kt_tmefor = true;
      NO_VALUE = new Symbol('NO_VALUE');
    }
  }
  function get_NONE() {
    init_properties_StateFlow_kt_6znnsl();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    init_properties_StateFlow_kt_6znnsl();
    return PENDING;
  }
  var PENDING;
  function MutableStateFlow() {
  }
  MutableStateFlow.$metadata$ = interfaceMeta('MutableStateFlow', [StateFlow, MutableSharedFlow]);
  function MutableStateFlow_0(value) {
    init_properties_StateFlow_kt_6znnsl();
    var tmp0_elvis_lhs = value;
    return new StateFlowImpl(tmp0_elvis_lhs == null ? get_NULL() : tmp0_elvis_lhs);
  }
  function StateFlow() {
  }
  StateFlow.$metadata$ = interfaceMeta('StateFlow', [SharedFlow]);
  function updateState($this, expectedState, newState) {
    var curSequence = 0;
    var curSlots = $this.vz_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var oldState = $this.v11_1.ih_1;
    if (!(expectedState == null) ? !equals(oldState, expectedState) : false)
      return false;
    if (equals(oldState, newState))
      return true;
    $this.v11_1.ih_1 = newState;
    curSequence = $this.w11_1;
    if ((curSequence & 1) === 0) {
      var tmp0 = curSequence;
      curSequence = tmp0 + 1 | 0;
      $this.w11_1 = curSequence;
    } else {
      $this.w11_1 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this.vz_1;
    tmp$ret$0 = Unit_getInstance();
    while (true) {
      var tmp0_safe_receiver = curSlots;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'kotlinx.coroutines.flow.StateFlowImpl.updateState.<anonymous>' call
          var tmp0_safe_receiver_0 = element;
          if (tmp0_safe_receiver_0 == null)
            null;
          else {
            tmp0_safe_receiver_0.y11();
          }
        }
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      if ($this.w11_1 === curSequence) {
        $this.w11_1 = curSequence + 1 | 0;
        return true;
      }
      curSequence = $this.w11_1;
      curSlots = $this.vz_1;
      tmp$ret$1 = Unit_getInstance();
    }
  }
  function $collectCOROUTINE$9(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h12_1 = _this__u8e3s4;
    this.i12_1 = collector;
  }
  $collectCOROUTINE$9.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 12;
            this.j12_1 = this.h12_1.u10();
            this.zf_1 = 1;
            continue $sm;
          case 1:
            this.ag_1 = 11;
            var tmp_0 = this.i12_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.zf_1 = 2;
              suspendResult = this.i12_1.x10(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zf_1 = 3;
              continue $sm;
            }

            break;
          case 2:
            this.zf_1 = 3;
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.l12_1 = this.o4().g5(Key_getInstance_2());
            this.m12_1 = null;
            this.zf_1 = 4;
            continue $sm;
          case 4:
            if (false) {
              this.zf_1 = 9;
              continue $sm;
            }

            this.n12_1 = this.h12_1.v11_1.ih_1;
            var tmp0_safe_receiver = this.l12_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            ;
            if (this.m12_1 == null ? true : !equals(this.m12_1, this.n12_1)) {
              this.zf_1 = 5;
              var tmp_2 = this;
              tmp_2.o12_1 = get_NULL();
              var tmp_3;
              if (this.n12_1 === this.o12_1) {
                tmp_3 = (null == null ? true : isObject(null)) ? null : THROW_CCE();
              } else {
                var tmp_4 = this.n12_1;
                tmp_3 = isObject(tmp_4) ? tmp_4 : THROW_CCE();
              }
              suspendResult = this.i12_1.hz(tmp_3, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zf_1 = 6;
              continue $sm;
            }

            break;
          case 5:
            this.m12_1 = this.n12_1;
            this.zf_1 = 6;
            continue $sm;
          case 6:
            if (!this.j12_1.q12()) {
              this.zf_1 = 7;
              suspendResult = this.j12_1.p12(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zf_1 = 8;
              continue $sm;
            }

            break;
          case 7:
            this.zf_1 = 8;
            continue $sm;
          case 8:
            this.zf_1 = 4;
            continue $sm;
          case 9:
            this.k12_1 = Unit_getInstance();
            this.ag_1 = 12;
            this.zf_1 = 10;
            continue $sm;
          case 10:
            this.h12_1.y10(this.j12_1);
            ;
            return Unit_getInstance();
          case 11:
            this.ag_1 = 12;
            var t = this.cg_1;
            this.h12_1.y10(this.j12_1);
            ;
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
  $collectCOROUTINE$9.$metadata$ = classMeta('$collectCOROUTINE$9', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this.v11_1 = atomic$ref$1(initialState);
    this.w11_1 = 0;
  }
  StateFlowImpl.prototype.p11 = function (value) {
    var tmp0_elvis_lhs = value;
    updateState(this, null, tmp0_elvis_lhs == null ? get_NULL() : tmp0_elvis_lhs);
  };
  StateFlowImpl.prototype.i2 = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.Symbol.unbox' call
    var tmp0_unbox = get_NULL();
    var tmp1_unbox = this.v11_1.ih_1;
    var tmp;
    if (tmp1_unbox === tmp0_unbox) {
      tmp = (null == null ? true : isObject(null)) ? null : THROW_CCE();
    } else {
      tmp = isObject(tmp1_unbox) ? tmp1_unbox : THROW_CCE();
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  };
  StateFlowImpl.prototype.q11 = function (expect, update) {
    var tmp0_elvis_lhs = expect;
    var tmp = tmp0_elvis_lhs == null ? get_NULL() : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = update;
    return updateState(this, tmp, tmp1_elvis_lhs == null ? get_NULL() : tmp1_elvis_lhs);
  };
  StateFlowImpl.prototype.iz = function (value) {
    this.p11(value);
    return true;
  };
  StateFlowImpl.prototype.hz = function (value, $cont) {
    this.p11(value);
    return Unit_getInstance();
  };
  StateFlowImpl.prototype.a11 = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$9(this, collector, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  StateFlowImpl.prototype.gz = function (collector, $cont) {
    return this.a11(collector, $cont);
  };
  StateFlowImpl.prototype.c11 = function () {
    return new StateFlowSlot();
  };
  StateFlowImpl.prototype.d11 = function (size) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(size), null);
    return tmp$ret$0;
  };
  StateFlowImpl.$metadata$ = classMeta('StateFlowImpl', [MutableStateFlow, CancellableFlow, FusibleFlow], undefined, undefined, undefined, AbstractSharedFlow.prototype);
  function StateFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.x11_1 = atomic$ref$1(null);
  }
  StateFlowSlot.prototype.r12 = function (flow) {
    if (!(this.x11_1.ih_1 == null))
      return false;
    this.x11_1.ih_1 = get_NONE();
    return true;
  };
  StateFlowSlot.prototype.m11 = function (flow) {
    return this.r12(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  StateFlowSlot.prototype.s12 = function (flow) {
    this.x11_1.ih_1 = null;
    return get_EMPTY_RESUMES();
  };
  StateFlowSlot.prototype.o11 = function (flow) {
    return this.s12(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  StateFlowSlot.prototype.y11 = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.x11_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.makePending.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.ih_1;
      if (tmp1__anonymous__uwfjfc == null)
        return Unit_getInstance();
      else if (tmp1__anonymous__uwfjfc === get_PENDING())
        return Unit_getInstance();
      else if (tmp1__anonymous__uwfjfc === get_NONE()) {
        if (this.x11_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_PENDING()))
          return Unit_getInstance();
      } else {
        if (this.x11_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_NONE())) {
          var tmp$ret$1;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp0_resume = tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl ? tmp1__anonymous__uwfjfc : THROW_CCE();
          var tmp$ret$0;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success = Companion_getInstance();
          tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
          tmp0_resume.m4(tmp$ret$0);
          tmp$ret$1 = Unit_getInstance();
          return Unit_getInstance();
        }
      }
    }
  };
  StateFlowSlot.prototype.q12 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = ensureNotNull(this.x11_1.atomicfu$getAndSet(get_NONE()));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.assert' call
    return tmp0_let === get_PENDING();
    return tmp$ret$0;
  };
  StateFlowSlot.prototype.p12 = function ($cont) {
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.fm();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.awaitPending.<anonymous>' call
      // Inline function 'kotlinx.coroutines.assert' call
      if (this.x11_1.atomicfu$compareAndSet(get_NONE(), cancellable)) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      var tmp$ret$2;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_getInstance());
      cancellable.m4(tmp$ret$1);
      tmp$ret$2 = Unit_getInstance();
    }
    tmp$ret$3 = cancellable.wj();
    return tmp$ret$3;
  };
  StateFlowSlot.$metadata$ = classMeta('StateFlowSlot', undefined, undefined, undefined, undefined, AbstractSharedFlowSlot.prototype);
  var properties_initialized_StateFlow_kt_nsqikx;
  function init_properties_StateFlow_kt_6znnsl() {
    if (properties_initialized_StateFlow_kt_nsqikx) {
    } else {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function get_EMPTY_RESUMES() {
    init_properties_AbstractSharedFlow_kt_ejuukb();
    return EMPTY_RESUMES;
  }
  var EMPTY_RESUMES;
  function AbstractSharedFlow() {
    this.vz_1 = null;
    this.wz_1 = 0;
    this.xz_1 = 0;
    this.yz_1 = null;
  }
  AbstractSharedFlow.prototype.e11 = function () {
    return this.vz_1;
  };
  AbstractSharedFlow.prototype.f11 = function () {
    return this.wz_1;
  };
  AbstractSharedFlow.prototype.u10 = function () {
    var subscriptionCount = null;
    var tmp$ret$4;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>' call
    var curSlots = this.vz_1;
    var tmp;
    if (curSlots == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = this.d11(2);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
      this.vz_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      var tmp_0;
      if (this.wz_1 >= curSlots.length) {
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        var tmp1_also = copyOf(curSlots, imul(2, curSlots.length));
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        this.vz_1 = tmp1_also;
        tmp$ret$1 = tmp1_also;
        tmp_0 = tmp$ret$1;
      } else {
        tmp_0 = curSlots;
      }
      tmp = tmp_0;
    }
    var slots = tmp;
    var index = this.xz_1;
    var slot;
    $l$loop: while (true) {
      var tmp0_elvis_lhs = slots[index];
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$2;
        // Inline function 'kotlin.also' call
        var tmp2_also = this.c11();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        slots[index] = tmp2_also;
        tmp$ret$2 = tmp2_also;
        tmp_1 = tmp$ret$2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      slot = tmp_1;
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      if (index >= slots.length)
        index = 0;
      if ((slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).m11(this))
        break $l$loop;
    }
    this.xz_1 = index;
    var tmp2_this = this;
    var tmp3 = tmp2_this.wz_1;
    tmp2_this.wz_1 = tmp3 + 1 | 0;
    subscriptionCount = this.yz_1;
    tmp$ret$3 = slot;
    tmp$ret$4 = tmp$ret$3;
    var slot_0 = tmp$ret$4;
    var tmp0_safe_receiver = subscriptionCount;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.f13(1);
    return slot_0;
  };
  AbstractSharedFlow.prototype.y10 = function (slot) {
    var subscriptionCount = null;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.freeSlot.<anonymous>' call
    var tmp0_this = this;
    var tmp1 = tmp0_this.wz_1;
    tmp0_this.wz_1 = tmp1 - 1 | 0;
    subscriptionCount = this.yz_1;
    if (this.wz_1 === 0)
      this.xz_1 = 0;
    tmp$ret$0 = (slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).o11(this);
    tmp$ret$1 = tmp$ret$0;
    var resumes = tmp$ret$1;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_safe_receiver = cont;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$3;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp1_safe_receiver.m4(tmp$ret$2);
        tmp$ret$3 = Unit_getInstance();
      }
    }
    var tmp2_safe_receiver = subscriptionCount;
    if (tmp2_safe_receiver == null)
      null;
    else
      tmp2_safe_receiver.f13(-1);
  };
  AbstractSharedFlow.prototype.g11 = function (block) {
    if (this.wz_1 === 0)
      return Unit_getInstance();
    var tmp0_safe_receiver = this.vz_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
        if (!(element == null))
          block(element);
      }
    }
  };
  AbstractSharedFlow.$metadata$ = classMeta('AbstractSharedFlow');
  function AbstractSharedFlowSlot() {
  }
  AbstractSharedFlowSlot.$metadata$ = classMeta('AbstractSharedFlowSlot');
  var properties_initialized_AbstractSharedFlow_kt_2mpafr;
  function init_properties_AbstractSharedFlow_kt_ejuukb() {
    if (properties_initialized_AbstractSharedFlow_kt_2mpafr) {
    } else {
      properties_initialized_AbstractSharedFlow_kt_2mpafr = true;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(0), null);
      EMPTY_RESUMES = tmp$ret$0;
    }
  }
  function FusibleFlow() {
  }
  FusibleFlow.$metadata$ = interfaceMeta('FusibleFlow', [Flow]);
  function get_NULL() {
    init_properties_NullSurrogate_kt_8d5lbx();
    return NULL;
  }
  var NULL;
  var UNINITIALIZED;
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function init_properties_NullSurrogate_kt_8d5lbx() {
    if (properties_initialized_NullSurrogate_kt_39v8bl) {
    } else {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function unsafeFlow(block) {
    return new _no_name_provided__qut3iv_0(block);
  }
  function checkContext(_this__u8e3s4, currentContext) {
    var result = currentContext.m5(0, checkContext$lambda(_this__u8e3s4));
    if (!(result === _this__u8e3s4.i13_1)) {
      // Inline function 'kotlin.error' call
      var tmp0_error = 'Flow invariant is violated:\n' + ('\t\tFlow was collected in ' + _this__u8e3s4.h13_1 + ',\n') + ('\t\tbut emission happened in ' + currentContext + '.\n') + "\t\tPlease refer to 'flow' documentation or use 'flowOn' instead";
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    }
  }
  function transitiveCoroutineParent(_this__u8e3s4, collectJob) {
    var $this = _this__u8e3s4;
    var collectJob_0 = collectJob;
    $l$1: do {
      $l$0: do {
        if ($this === null)
          return null;
        if ($this === collectJob_0)
          return $this;
        if (!($this instanceof ScopeCoroutine))
          return $this;
        var tmp0 = $this.ik();
        var tmp1 = collectJob_0;
        $this = tmp0;
        collectJob_0 = tmp1;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function _no_name_provided__qut3iv_0($block) {
    this.k13_1 = $block;
  }
  _no_name_provided__qut3iv_0.prototype.gz = function (collector, $cont) {
    return this.k13_1(collector, $cont);
  };
  _no_name_provided__qut3iv_0.$metadata$ = classMeta(undefined, [Flow]);
  function checkContext$lambda($this_checkContext) {
    return function (count, element) {
      var key = element.g2();
      var collectElement = $this_checkContext.h13_1.g5(key);
      var tmp;
      if (!(key === Key_getInstance_2())) {
        return !(element === collectElement) ? IntCompanionObject_getInstance().b1_1 : count + 1 | 0;
      }
      var collectJob = (collectElement == null ? true : isInterface(collectElement, Job)) ? collectElement : THROW_CCE();
      var emissionParentJob = transitiveCoroutineParent(isInterface(element, Job) ? element : THROW_CCE(), collectJob);
      var tmp_0;
      if (!(emissionParentJob === collectJob)) {
        var tmp0_error = 'Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n' + ('\t\tChild of ' + emissionParentJob + ', expected child of ' + collectJob + '.\n') + '\t\tFlowCollector is not thread-safe and concurrent emissions are prohibited.\n' + "\t\tTo mitigate this restriction please use 'channelFlow' builder instead of 'flow'";
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      }
      return collectJob == null ? count : count + 1 | 0;
    };
  }
  function CancellableFlow() {
  }
  CancellableFlow.$metadata$ = interfaceMeta('CancellableFlow', [Flow]);
  function unsafeTransform(_this__u8e3s4, transform) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$0 = new _no_name_provided__qut3iv_1(_this__u8e3s4, transform);
    return tmp$ret$0;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.l13_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.hz = function (value, $cont) {
    return this.l13_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function unsafeTransform$o$collect$slambda($transform, $collector, resultContinuation) {
    this.u13_1 = $transform;
    this.v13_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  unsafeTransform$o$collect$slambda.prototype.x13 = function (value, $cont) {
    var tmp = this.y13(value, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  unsafeTransform$o$collect$slambda.prototype.jg = function (p1, $cont) {
    return this.x13((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  unsafeTransform$o$collect$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = this.u13_1(this.v13_1, this.w13_1, this);
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
  unsafeTransform$o$collect$slambda.prototype.y13 = function (value, completion) {
    var i = new unsafeTransform$o$collect$slambda(this.u13_1, this.v13_1, completion);
    i.w13_1 = value;
    return i;
  };
  unsafeTransform$o$collect$slambda.$metadata$ = classMeta('unsafeTransform$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function unsafeTransform$o$collect$slambda_0($transform, $collector, resultContinuation) {
    var i = new unsafeTransform$o$collect$slambda($transform, $collector, resultContinuation);
    var l = function (value, $cont) {
      return i.x13(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$11(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h14_1 = _this__u8e3s4;
    this.i14_1 = collector;
  }
  $collectCOROUTINE$11.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            var tmp_0 = unsafeTransform$o$collect$slambda_0(this.h14_1.k14_1, this.i14_1, null);
            suspendResult = this.h14_1.j14_1.gz(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
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
  $collectCOROUTINE$11.$metadata$ = classMeta('$collectCOROUTINE$11', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_1($this_unsafeTransform, $transform) {
    this.j14_1 = $this_unsafeTransform;
    this.k14_1 = $transform;
  }
  _no_name_provided__qut3iv_1.prototype.l14 = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$11(this, collector, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  _no_name_provided__qut3iv_1.prototype.gz = function (collector, $cont) {
    return this.l14(collector, $cont);
  };
  _no_name_provided__qut3iv_1.$metadata$ = classMeta(undefined, [Flow]);
  function $onSubscriptionCOROUTINE$16(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u14_1 = _this__u8e3s4;
  }
  $onSubscriptionCOROUTINE$16.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 7;
            var tmp_0 = this;
            tmp_0.v14_1 = new SafeCollector(this.u14_1.v10_1, this.o4());
            this.zf_1 = 1;
            continue $sm;
          case 1:
            this.ag_1 = 6;
            this.zf_1 = 2;
            suspendResult = this.u14_1.w10_1(this.v14_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w14_1 = suspendResult;
            this.ag_1 = 7;
            this.zf_1 = 3;
            continue $sm;
          case 3:
            this.v14_1.x14();
            ;
            var tmp_1 = this.u14_1.v10_1;
            if (tmp_1 instanceof SubscribedFlowCollector) {
              this.zf_1 = 4;
              suspendResult = this.u14_1.v10_1.x10(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zf_1 = 5;
              continue $sm;
            }

            break;
          case 4:
            this.zf_1 = 5;
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            this.ag_1 = 7;
            var t = this.cg_1;
            this.v14_1.x14();
            ;
            throw t;
          case 7:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 7) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  $onSubscriptionCOROUTINE$16.$metadata$ = classMeta('$onSubscriptionCOROUTINE$16', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function SubscribedFlowCollector() {
  }
  SubscribedFlowCollector.prototype.x10 = function ($cont) {
    var tmp = new $onSubscriptionCOROUTINE$16(this, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  SubscribedFlowCollector.$metadata$ = classMeta('SubscribedFlowCollector', [FlowCollector]);
  function filter(_this__u8e3s4, predicate) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$0 = new _no_name_provided__qut3iv_2(_this__u8e3s4, predicate);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.y14_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_0.prototype.hz = function (value, $cont) {
    return this.y14_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_0.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function filter$o$collect$slambda($predicate, $collector, resultContinuation) {
    this.h15_1 = $predicate;
    this.i15_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  filter$o$collect$slambda.prototype.x13 = function (value, $cont) {
    var tmp = this.y13(value, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  filter$o$collect$slambda.prototype.jg = function (p1, $cont) {
    return this.x13((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  filter$o$collect$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 6;
            this.zf_1 = 1;
            continue $sm;
          case 1:
            this.zf_1 = 2;
            suspendResult = this.h15_1(this.j15_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (suspendResult) {
              this.zf_1 = 4;
              suspendResult = this.i15_1.hz(this.j15_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zf_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            if (false) {
              this.zf_1 = 1;
              continue $sm;
            }

            this.zf_1 = 5;
            continue $sm;
          case 4:
            this.k15_1 = suspendResult;
            this.zf_1 = 5;
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
  filter$o$collect$slambda.prototype.y13 = function (value, completion) {
    var i = new filter$o$collect$slambda(this.h15_1, this.i15_1, completion);
    i.j15_1 = value;
    return i;
  };
  filter$o$collect$slambda.$metadata$ = classMeta('filter$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function filter$o$collect$slambda_0($predicate, $collector, resultContinuation) {
    var i = new filter$o$collect$slambda($predicate, $collector, resultContinuation);
    var l = function (value, $cont) {
      return i.x13(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$17(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t15_1 = _this__u8e3s4;
    this.u15_1 = collector;
  }
  $collectCOROUTINE$17.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            var tmp_0 = filter$o$collect$slambda_0(this.t15_1.w15_1, this.u15_1, null);
            suspendResult = this.t15_1.v15_1.gz(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), this);
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
  $collectCOROUTINE$17.$metadata$ = classMeta('$collectCOROUTINE$17', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_2($this_filter, $predicate) {
    this.v15_1 = $this_filter;
    this.w15_1 = $predicate;
  }
  _no_name_provided__qut3iv_2.prototype.gz = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$17(this, collector, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  _no_name_provided__qut3iv_2.$metadata$ = classMeta(undefined, [Flow]);
  function ensureCapacity_0($this) {
    var currentSize = $this.ho_1.length;
    var newCapacity = currentSize << 1;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(newCapacity), null);
    var newElements = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.ho_1;
    var tmp1_copyInto = $this.io_1;
    var tmp2_copyInto = tmp0_copyInto.length;
    arrayCopy(tmp0_copyInto, newElements, 0, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$1 = newElements;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = $this.ho_1;
    var tmp4_copyInto = $this.ho_1.length - $this.io_1 | 0;
    var tmp5_copyInto = $this.io_1;
    arrayCopy(tmp3_copyInto, newElements, tmp4_copyInto, 0, tmp5_copyInto);
    tmp$ret$2 = newElements;
    $this.ho_1 = newElements;
    $this.io_1 = 0;
    $this.jo_1 = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.ho_1 = tmp$ret$0;
    this.io_1 = 0;
    this.jo_1 = 0;
  }
  ArrayQueue.prototype.po = function () {
    return this.io_1 === this.jo_1;
  };
  ArrayQueue.prototype.mo = function (element) {
    this.ho_1[this.jo_1] = element;
    this.jo_1 = (this.jo_1 + 1 | 0) & (this.ho_1.length - 1 | 0);
    if (this.jo_1 === this.io_1) {
      ensureCapacity_0(this);
    }
  };
  ArrayQueue.prototype.ko = function () {
    if (this.io_1 === this.jo_1)
      return null;
    var element = this.ho_1[this.io_1];
    this.ho_1[this.io_1] = null;
    this.io_1 = (this.io_1 + 1 | 0) & (this.ho_1.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  ArrayQueue.$metadata$ = classMeta('ArrayQueue');
  function get_NO_DECISION() {
    init_properties_Atomic_kt_3h20tt();
    return NO_DECISION;
  }
  var NO_DECISION;
  var RETRY_ATOMIC;
  function OpDescriptor() {
  }
  OpDescriptor.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  OpDescriptor.$metadata$ = classMeta('OpDescriptor');
  function AtomicOp() {
    OpDescriptor.call(this);
    this.x15_1 = atomic$ref$1(get_NO_DECISION());
  }
  AtomicOp.prototype.y15 = function (decision) {
    // Inline function 'kotlinx.coroutines.assert' call
    var current = this.x15_1.ih_1;
    if (!(current === get_NO_DECISION()))
      return current;
    if (this.x15_1.atomicfu$compareAndSet(get_NO_DECISION(), decision))
      return decision;
    return this.x15_1.ih_1;
  };
  AtomicOp.prototype.vr = function (affected) {
    var decision = this.x15_1.ih_1;
    if (decision === get_NO_DECISION()) {
      decision = this.y15(this.z15((affected == null ? true : isObject(affected)) ? affected : THROW_CCE()));
    }
    this.a16((affected == null ? true : isObject(affected)) ? affected : THROW_CCE(), decision);
    return decision;
  };
  AtomicOp.$metadata$ = classMeta('AtomicOp', undefined, undefined, undefined, undefined, OpDescriptor.prototype);
  var properties_initialized_Atomic_kt_vn225v;
  function init_properties_Atomic_kt_3h20tt() {
    if (properties_initialized_Atomic_kt_vn225v) {
    } else {
      properties_initialized_Atomic_kt_vn225v = true;
      NO_DECISION = new Symbol('NO_DECISION');
      RETRY_ATOMIC = new Symbol('RETRY_ATOMIC');
    }
  }
  function get_UNDEFINED() {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof DispatchedContinuation) {
      var tmp1_resumeCancellableWith = _this__u8e3s4;
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (tmp1_resumeCancellableWith.xk_1.tn(tmp1_resumeCancellableWith.o4())) {
        tmp1_resumeCancellableWith.zk_1 = state;
        tmp1_resumeCancellableWith.ql_1 = get_MODE_CANCELLABLE();
        tmp1_resumeCancellableWith.xk_1.un(tmp1_resumeCancellableWith.o4(), tmp1_resumeCancellableWith);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().uo();
          if (false ? eventLoop.oo() : false) {
            tmp$ret$0 = false;
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.no()) {
            tmp1_resumeCancellableWith.zk_1 = state;
            tmp1_resumeCancellableWith.ql_1 = tmp0_executeUnconfined;
            eventLoop.lo(tmp1_resumeCancellableWith);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.qo(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = tmp1_resumeCancellableWith.o4().g5(Key_getInstance_2());
                if (!(job == null) ? !job.wh() : false) {
                  var cause = job.ti();
                  tmp1_resumeCancellableWith.hm(state, cause);
                  var tmp$ret$2;
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  var tmp$ret$1;
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp0_failure = Companion_getInstance();
                  tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  tmp1_resumeCancellableWith.m4(tmp$ret$1);
                  tmp$ret$2 = Unit_getInstance();
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                var tmp$ret$4;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                var tmp0_withContinuationContext = tmp1_resumeCancellableWith.yk_1;
                var tmp1_withContinuationContext = tmp1_resumeCancellableWith.al_1;
                tmp1_resumeCancellableWith.yk_1.m4(result);
                tmp$ret$4 = Unit_getInstance();
              }
              $l$loop: while (true) {
                if (!eventLoop.go())
                  break $l$loop;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                tmp1_resumeCancellableWith.tm($p, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.ro(true);
            }
            tmp_1 = false;
          }
          tmp$ret$0 = tmp_1;
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.m4(result);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function resumeCancellableWith$default(_this__u8e3s4, result, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      onCancellation = null;
    return resumeCancellableWith(_this__u8e3s4, result, onCancellation);
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.bl_1.ih_1;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.xk_1 = dispatcher;
    this.yk_1 = continuation;
    this.zk_1 = get_UNDEFINED();
    this.al_1 = threadContextElements(this.o4());
    this.bl_1 = atomic$ref$1(null);
  }
  DispatchedContinuation.prototype.b16 = function () {
    return this.xk_1;
  };
  DispatchedContinuation.prototype.c16 = function () {
    return this.yk_1;
  };
  DispatchedContinuation.prototype.o4 = function () {
    return this.yk_1.o4();
  };
  DispatchedContinuation.prototype.d16 = function () {
    return this.al_1;
  };
  DispatchedContinuation.prototype.pl = function () {
    return !(this.bl_1.ih_1 == null);
  };
  DispatchedContinuation.prototype.e16 = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.bl_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.ih_1;
      if (!(tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()))
        return Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.wn = function () {
    this.e16();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.tl();
    }
  };
  DispatchedContinuation.prototype.cl = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.bl_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.claimReusableCancellableContinuation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.ih_1;
      if (tmp1__anonymous__uwfjfc === null) {
        this.bl_1.ih_1 = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl) {
          if (this.bl_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_REUSABLE_CLAIMED())) {
            return tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl ? tmp1__anonymous__uwfjfc : THROW_CCE();
          }
        } else {
          if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
          } else {
            if (tmp1__anonymous__uwfjfc instanceof Error) {
            } else {
              var tmp0_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
              throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
            }
          }
        }
      }
    }
  };
  DispatchedContinuation.prototype.sl = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.bl_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.ih_1;
      if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
        if (this.bl_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (tmp1__anonymous__uwfjfc instanceof Error) {
          // Inline function 'kotlin.require' call
          var tmp0_require = this.bl_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp0_require) {
            var tmp$ret$0;
            // Inline function 'kotlin.require.<anonymous>' call
            tmp$ret$0 = 'Failed requirement.';
            var message = tmp$ret$0;
            throw IllegalArgumentException_init_$Create$(toString_0(message));
          }
          return tmp1__anonymous__uwfjfc;
        } else {
          var tmp1_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  DispatchedContinuation.prototype.rl = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.bl_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.ih_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (equals(tmp0_subject, get_REUSABLE_CLAIMED())) {
        if (this.bl_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (tmp0_subject instanceof Error)
          return true;
        else {
          if (this.bl_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null))
            return false;
        }
      }
    }
  };
  DispatchedContinuation.prototype.gm = function () {
    var state = this.zk_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.zk_1 = get_UNDEFINED();
    return state;
  };
  DispatchedContinuation.prototype.em = function () {
    return this;
  };
  DispatchedContinuation.prototype.m4 = function (result) {
    var context = this.yk_1.o4();
    var state = toState$default(result, null, 1, null);
    if (this.xk_1.tn(context)) {
      this.zk_1 = state;
      this.ql_1 = get_MODE_ATOMIC();
      this.xk_1.un(context, this);
    } else {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var tmp0_executeUnconfined = get_MODE_ATOMIC();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().uo();
        if (false ? eventLoop.oo() : false) {
          tmp$ret$0 = false;
          break $l$block;
        }
        var tmp;
        if (eventLoop.no()) {
          this.zk_1 = state;
          this.ql_1 = tmp0_executeUnconfined;
          eventLoop.lo(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.qo(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            var tmp$ret$1;
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            var tmp0_withCoroutineContext = this.o4();
            var tmp1_withCoroutineContext = this.al_1;
            this.yk_1.m4(result);
            tmp$ret$1 = Unit_getInstance();
            $l$loop: while (true) {
              if (!eventLoop.go())
                break $l$loop;
            }
          } catch ($p) {
            if ($p instanceof Error) {
              this.tm($p, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.ro(true);
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
    }
  };
  DispatchedContinuation.prototype.hm = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.rn_1(cause);
    }
  };
  DispatchedContinuation.prototype.f16 = function (state) {
    var job = this.o4().g5(Key_getInstance_2());
    if (!(job == null) ? !job.wh() : false) {
      var cause = job.ti();
      this.hm(state, cause);
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
      this.m4(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return true;
    }
    return false;
  };
  DispatchedContinuation.prototype.g16 = function (result) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.withContinuationContext' call
    var tmp0_withContinuationContext = this.yk_1;
    var tmp1_withContinuationContext = this.al_1;
    this.yk_1.m4(result);
    tmp$ret$0 = Unit_getInstance();
  };
  DispatchedContinuation.prototype.pu = function (context, value) {
    this.zk_1 = value;
    this.ql_1 = get_MODE_CANCELLABLE();
    this.xk_1.vn(context, this);
  };
  DispatchedContinuation.prototype.toString = function () {
    return 'DispatchedContinuation[' + this.xk_1 + ', ' + toDebugString(this.yk_1) + ']';
  };
  DispatchedContinuation.$metadata$ = classMeta('DispatchedContinuation', [CoroutineStackFrame, Continuation], undefined, undefined, undefined, DispatchedTask.prototype);
  function executeUnconfined(_this__u8e3s4, contState, mode, doYield, block) {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    // Inline function 'kotlinx.coroutines.assert' call
    var eventLoop = ThreadLocalEventLoop_getInstance().uo();
    if (doYield ? eventLoop.oo() : false)
      return false;
    var tmp;
    if (eventLoop.no()) {
      _this__u8e3s4.zk_1 = contState;
      _this__u8e3s4.ql_1 = mode;
      eventLoop.lo(_this__u8e3s4);
      tmp = true;
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.qo(true);
      try {
        block();
        $l$loop: while (true) {
          if (!eventLoop.go())
            break $l$loop;
        }
      } catch ($p) {
        if ($p instanceof Error) {
          _this__u8e3s4.tm($p, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.ro(true);
      }
      tmp = false;
    }
    return tmp;
  }
  function yieldUndispatched(_this__u8e3s4) {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
      var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
      // Inline function 'kotlinx.coroutines.assert' call
      var eventLoop = ThreadLocalEventLoop_getInstance().uo();
      if (eventLoop.oo()) {
        tmp$ret$0 = false;
        break $l$block;
      }
      var tmp;
      if (eventLoop.no()) {
        _this__u8e3s4.zk_1 = Unit_getInstance();
        _this__u8e3s4.ql_1 = tmp0_executeUnconfined;
        eventLoop.lo(_this__u8e3s4);
        tmp = true;
      } else {
        // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
        eventLoop.qo(true);
        try {
          // Inline function 'kotlinx.coroutines.internal.yieldUndispatched.<anonymous>' call
          _this__u8e3s4.sm();
          $l$loop: while (true) {
            if (!eventLoop.go())
              break $l$loop;
          }
        } catch ($p) {
          if ($p instanceof Error) {
            _this__u8e3s4.tm($p, null);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.ro(true);
        }
        tmp = false;
      }
      tmp$ret$0 = tmp;
    }
    return tmp$ret$0;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function init_properties_DispatchedContinuation_kt_s7rtw6() {
    if (properties_initialized_DispatchedContinuation_kt_2siadq) {
    } else {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function get_MODE_CANCELLABLE() {
    return MODE_CANCELLABLE;
  }
  var MODE_CANCELLABLE;
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.ql_1 = resumeMode;
  }
  DispatchedTask.prototype.rm = function () {
    return this.ql_1;
  };
  DispatchedTask.prototype.hm = function (takenState, cause) {
  };
  DispatchedTask.prototype.om = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  DispatchedTask.prototype.qm = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bi_1;
  };
  DispatchedTask.prototype.sm = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    get_taskContext(this);
    var taskContext = Unit_getInstance();
    var fatalException = null;
    try {
      var tmp = this.em();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.yk_1;
      var tmp$ret$5;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp0_withContinuationContext = delegate.al_1;
      var context = continuation.o4();
      var state = this.gm();
      var exception = this.qm(state);
      var job = (exception == null ? get_isCancellableMode(this.ql_1) : false) ? context.g5(Key_getInstance_2()) : null;
      var tmp_0;
      if (!(job == null) ? !job.wh() : false) {
        var cause = job.ti();
        this.hm(state, cause);
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance();
        var tmp1_failure = recoverStackTrace(cause, continuation);
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
        continuation.m4(tmp$ret$0);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp_1;
        if (!(exception == null)) {
          var tmp$ret$2;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure_0 = Companion_getInstance();
          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.m4(tmp$ret$1);
          tmp$ret$2 = Unit_getInstance();
          tmp_1 = tmp$ret$2;
        } else {
          var tmp$ret$4;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp2_resume = this.om(state);
          var tmp$ret$3;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success = Companion_getInstance();
          tmp$ret$3 = _Result___init__impl__xyqfz8(tmp2_resume);
          continuation.m4(tmp$ret$3);
          tmp$ret$4 = Unit_getInstance();
          tmp_1 = tmp$ret$4;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$5 = tmp_0;
    } catch ($p) {
      if ($p instanceof Error) {
        fatalException = $p;
      } else {
        throw $p;
      }
    }
    finally {
      var tmp$ret$8;
      // Inline function 'kotlin.runCatching' call
      var tmp_2;
      try {
        var tmp$ret$6;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success_0 = Companion_getInstance();
        var tmp1_success = Unit_getInstance();
        tmp$ret$6 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp_2 = tmp$ret$6;
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var tmp$ret$7;
          // Inline function 'kotlin.Companion.failure' call
          var tmp2_failure = Companion_getInstance();
          tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure($p));
          tmp_3 = tmp$ret$7;
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      tmp$ret$8 = tmp_2;
      var result = tmp$ret$8;
      this.tm(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  DispatchedTask.prototype.tm = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    }
    var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.em().o4(), reason);
  };
  DispatchedTask.$metadata$ = classMeta('DispatchedTask', undefined, undefined, undefined, undefined, SchedulerTask.prototype);
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_MODE_CANCELLABLE_REUSABLE() {
    return MODE_CANCELLABLE_REUSABLE;
  }
  var MODE_CANCELLABLE_REUSABLE;
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.em();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.ql_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.xk_1;
      var context = delegate.o4();
      if (dispatcher.tn(context)) {
        dispatcher.un(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function get_MODE_UNDISPATCHED() {
    return MODE_UNDISPATCHED;
  }
  var MODE_UNDISPATCHED;
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function runUnconfinedEventLoop(_this__u8e3s4, eventLoop, block) {
    eventLoop.qo(true);
    try {
      block();
      $l$loop: while (true) {
        if (!eventLoop.go())
          break $l$loop;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        _this__u8e3s4.tm($p, null);
      } else {
        throw $p;
      }
    }
    finally {
      eventLoop.ro(true);
    }
  }
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().uo();
    if (eventLoop.no()) {
      eventLoop.lo(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.qo(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.em(), true);
        $l$loop: while (true) {
          if (!eventLoop.go())
            break $l$loop;
        }
      } catch ($p) {
        if ($p instanceof Error) {
          _this__u8e3s4.tm($p, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.ro(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.gm();
    var exception = _this__u8e3s4.qm(state);
    var tmp;
    if (!(exception == null)) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp1_success = Companion_getInstance();
      var tmp2_success = _this__u8e3s4.om(state);
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp2_success);
      tmp = tmp$ret$1;
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var tmp3_resumeUndispatchedWith = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp0_withContinuationContext = tmp3_resumeUndispatchedWith.yk_1;
      var tmp1_withContinuationContext = tmp3_resumeUndispatchedWith.al_1;
      tmp3_resumeUndispatchedWith.yk_1.m4(result);
      tmp$ret$2 = Unit_getInstance();
    } else {
      delegate.m4(result);
    }
  }
  function _InlineList___init__impl__z8n56(holder) {
    return holder;
  }
  function _InlineList___init__impl__z8n56_0(holder, $mask0, $marker) {
    if (!(($mask0 & 1) === 0))
      holder = null;
    var tmp = _InlineList___init__impl__z8n56(holder);
    return tmp;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).a(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.a((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
        list.a(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function InlineList__forEachReversed_impl_jituug($this, action) {
    var tmp0_subject = _get_holder__f6h5pd($this);
    if (tmp0_subject == null)
      return Unit_getInstance();
    else {
      if (!(tmp0_subject instanceof ArrayList)) {
        var tmp = _get_holder__f6h5pd($this);
        action((tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE());
      } else {
        var tmp_0 = _get_holder__f6h5pd($this);
        var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
        var inductionVariable = list.f() - 1 | 0;
        if (0 <= inductionVariable)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            action(list.g(i));
          }
           while (0 <= inductionVariable);
      }
    }
  }
  function InlineList__toString_impl_1aej86($this) {
    return 'InlineList(holder=' + toString($this) + ')';
  }
  function InlineList__hashCode_impl_n1kg11($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function InlineList__equals_impl_wwe0i1($this, other) {
    if (!(other instanceof InlineList))
      return false;
    var tmp0_other_with_cast = other instanceof InlineList ? other.h16_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function InlineList(holder) {
    this.h16_1 = holder;
  }
  InlineList.prototype.toString = function () {
    return InlineList__toString_impl_1aej86(this.h16_1);
  };
  InlineList.prototype.hashCode = function () {
    return InlineList__hashCode_impl_n1kg11(this.h16_1);
  };
  InlineList.prototype.equals = function (other) {
    return InlineList__equals_impl_wwe0i1(this.h16_1, other);
  };
  InlineList.$metadata$ = classMeta('InlineList');
  function bindCancellationFun(_this__u8e3s4, element, context) {
    return bindCancellationFun$lambda(_this__u8e3s4, element, context);
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  UndeliveredElementException.$metadata$ = classMeta('UndeliveredElementException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        if (!(undeliveredElementException == null) ? !(undeliveredElementException.cause === $p) : false) {
          // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + element, $p);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function callUndeliveredElementCatchingException$default(_this__u8e3s4, element, undeliveredElementException, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      undeliveredElementException = null;
    return callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException);
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      handleCoroutineException(context, tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
  }
  function bindCancellationFun$lambda($this_bindCancellationFun, $element, $context) {
    return function (_anonymous_parameter_0__qggqh8) {
      callUndeliveredElement($this_bindCancellationFun, $element, $context);
      return Unit_getInstance();
    };
  }
  function ContextScope(context) {
    this.i16_1 = context;
  }
  ContextScope.prototype.vh = function () {
    return this.i16_1;
  };
  ContextScope.prototype.toString = function () {
    return 'CoroutineScope(coroutineContext=' + this.i16_1 + ')';
  };
  ContextScope.$metadata$ = classMeta('ContextScope', [CoroutineScope]);
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.hk_1 = uCont;
  }
  ScopeCoroutine.prototype.mj = function () {
    return true;
  };
  ScopeCoroutine.prototype.ik = function () {
    var tmp0_safe_receiver = this.oi();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ik();
  };
  ScopeCoroutine.prototype.gi = function (state) {
    var tmp = intercepted(this.hk_1);
    var tmp_0 = recoverResult(state, this.hk_1);
    resumeCancellableWith$default(tmp, tmp_0, null, 2, null);
  };
  ScopeCoroutine.prototype.fi = function (state) {
    this.hk_1.m4(recoverResult(state, this.hk_1));
  };
  ScopeCoroutine.$metadata$ = classMeta('ScopeCoroutine', [CoroutineStackFrame], undefined, undefined, undefined, AbstractCoroutine.prototype);
  function Symbol(symbol) {
    this.j16_1 = symbol;
  }
  Symbol.prototype.toString = function () {
    return '<' + this.j16_1 + '>';
  };
  Symbol.prototype.k16 = function (value) {
    var tmp;
    if (value === this) {
      tmp = (null == null ? true : isObject(null)) ? null : THROW_CCE();
    } else {
      tmp = (value == null ? true : isObject(value)) ? value : THROW_CCE();
    }
    return tmp;
  };
  Symbol.$metadata$ = classMeta('Symbol');
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).b7();
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp0_error = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(minValue.h1(parsed) <= 0 ? parsed.h1(maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var tmp1_error = "System property '" + propertyName + "' should be in range " + toString_0(minValue) + '..' + toString_0(maxValue) + ", but is '" + toString_0(parsed) + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        dispatcherFailure$accessor$paksz7(completion, $p);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable$default(_this__u8e3s4, receiver, completion, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    return startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation);
  }
  function dispatcherFailure(completion, e) {
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure = Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.m4(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      var tmp_1 = tmp$ret$0;
      resumeCancellableWith$default(tmp_0, tmp_1, null, 2, null);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        dispatcherFailure$accessor$paksz7(fatalCompletion, $p);
        tmp_2 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function dispatcherFailure$accessor$paksz7(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startDirect(completion, block) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
    tmp$ret$0 = completion;
    var actualCompletion = tmp$ret$0;
    var tmp;
    try {
      tmp = block(actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp$ret$1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance();
        tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure($p));
        actualCompletion.m4(tmp$ret$1);
        tmp$ret$2 = Unit_getInstance();
        return Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      var tmp$ret$4;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(tmp0_resume);
      actualCompletion.m4(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
    }
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = block;
        var a = tmp$ret$0;
        tmp$ret$1 = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.jg(receiver, _this__u8e3s4);
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          tmp_0 = CompletedExceptionally_init_$Create$($p, false, 2, null);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.ei(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        var tmp0__anonymous__q1qw7t = state.bi_1;
        tmp$ret$4 = true;
        if (tmp$ret$4) {
          throw recoverStackTrace(state.bi_1, _this__u8e3s4.hk_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.bi_1, _this__u8e3s4.hk_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$3 = tmp_1;
    }
    return tmp$ret$3;
  }
  function startUndispatchedOrReturnIgnoreTimeout(_this__u8e3s4, receiver, block) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = block;
        var a = tmp$ret$0;
        tmp$ret$1 = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.jg(receiver, _this__u8e3s4);
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          tmp_0 = CompletedExceptionally_init_$Create$($p, false, 2, null);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.ei(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        var tmp0__anonymous__q1qw7t = state.bi_1;
        var tmp_3;
        if (tmp0__anonymous__q1qw7t instanceof TimeoutCancellationException) {
          tmp_3 = tmp0__anonymous__q1qw7t.rt_1 === _this__u8e3s4;
        } else {
          tmp_3 = false;
        }
        tmp$ret$4 = !tmp_3;
        if (tmp$ret$4) {
          throw recoverStackTrace(state.bi_1, _this__u8e3s4.hk_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.bi_1, _this__u8e3s4.hk_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$3 = tmp_1;
    }
    return tmp$ret$3;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    var tmp$ret$8;
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      tmp$ret$0 = completion;
      var actualCompletion = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$5;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        var tmp0_withCoroutineContext = completion.o4();
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = _this__u8e3s4;
        var a = tmp$ret$1;
        tmp$ret$2 = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.jg(receiver, actualCompletion);
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp$ret$7;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$6;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure = Companion_getInstance();
          tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure($p));
          actualCompletion.m4(tmp$ret$6);
          tmp$ret$7 = Unit_getInstance();
          tmp$ret$8 = Unit_getInstance();
          break $l$block;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        var tmp$ret$10;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$9 = _Result___init__impl__xyqfz8(tmp0_resume);
        actualCompletion.m4(tmp$ret$9);
        tmp$ret$10 = Unit_getInstance();
      }
    }
  }
  function undispatchedResult(_this__u8e3s4, shouldThrow, startBlock) {
    var tmp;
    try {
      tmp = startBlock();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = CompletedExceptionally_init_$Create$($p, false, 2, null);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var result = tmp;
    if (result === get_COROUTINE_SUSPENDED())
      return get_COROUTINE_SUSPENDED();
    var state = _this__u8e3s4.ei(result);
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return get_COROUTINE_SUSPENDED();
    var tmp_1;
    if (state instanceof CompletedExceptionally) {
      var tmp_2;
      if (shouldThrow(state.bi_1)) {
        throw recoverStackTrace(state.bi_1, _this__u8e3s4.hk_1);
      } else {
        if (result instanceof CompletedExceptionally) {
          throw recoverStackTrace(result.bi_1, _this__u8e3s4.hk_1);
        } else {
          tmp_2 = result;
        }
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = unboxState(state);
    }
    return tmp_1;
  }
  function SelectClause0() {
  }
  SelectClause0.$metadata$ = interfaceMeta('SelectClause0');
  function SelectClause1() {
  }
  SelectClause1.$metadata$ = interfaceMeta('SelectClause1');
  function SelectClause2() {
  }
  SelectClause2.$metadata$ = interfaceMeta('SelectClause2');
  var LOCK_FAIL;
  function get_UNLOCK_FAIL() {
    init_properties_Mutex_kt_ho0aqz();
    return UNLOCK_FAIL;
  }
  var UNLOCK_FAIL;
  function get_LOCKED() {
    init_properties_Mutex_kt_ho0aqz();
    return LOCKED;
  }
  var LOCKED;
  function get_UNLOCKED() {
    init_properties_Mutex_kt_ho0aqz();
    return UNLOCKED;
  }
  var UNLOCKED;
  function get_EMPTY_LOCKED() {
    init_properties_Mutex_kt_ho0aqz();
    return EMPTY_LOCKED;
  }
  var EMPTY_LOCKED;
  function get_EMPTY_UNLOCKED() {
    init_properties_Mutex_kt_ho0aqz();
    return EMPTY_UNLOCKED;
  }
  var EMPTY_UNLOCKED;
  function Empty_0(locked) {
    this.l16_1 = locked;
  }
  Empty_0.prototype.m16 = function () {
    return this.l16_1;
  };
  Empty_0.prototype.toString = function () {
    return 'Empty[' + toString_0(this.l16_1) + ']';
  };
  Empty_0.$metadata$ = classMeta('Empty');
  function Mutex() {
  }
  Mutex.$metadata$ = interfaceMeta('Mutex');
  function Mutex_0(locked) {
    init_properties_Mutex_kt_ho0aqz();
    return new MutexImpl(locked);
  }
  function Mutex$default(locked, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      locked = false;
    return Mutex_0(locked);
  }
  function MutexImpl$LockCont$tryResumeLockWaiter$lambda(this$0, this$1) {
    return function (it) {
      this$0.r16(this$1.w16_1);
      return Unit_getInstance();
    };
  }
  function lockSuspend($this, owner, $cont) {
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.lockSuspend.<anonymous>' call
      var waiter = new LockCont($this, owner, cancellable);
      // Inline function 'kotlinx.atomicfu.loop' call
      var tmp0_loop = $this.z16_1;
      while (true) {
        var tmp$ret$2;
        $l$block_1: {
          // Inline function 'kotlinx.coroutines.sync.MutexImpl.lockSuspend.<anonymous>.<anonymous>' call
          var tmp1__anonymous__uwfjfc = tmp0_loop.ih_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          if (tmp0_subject instanceof Empty_0) {
            if (!(tmp1__anonymous__uwfjfc.l16_1 === get_UNLOCKED())) {
              $this.z16_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, new LockedQueue(tmp1__anonymous__uwfjfc.l16_1));
            } else {
              var update = owner == null ? get_EMPTY_LOCKED() : new Empty_0(owner);
              if ($this.z16_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
                cancellable.sk(Unit_getInstance(), MutexImpl$lockSuspend$lambda($this, owner));
                tmp$ret$0 = Unit_getInstance();
                break $l$block_0;
              }
            }
          } else {
            if (tmp0_subject instanceof LockedQueue) {
              var curOwner = tmp1__anonymous__uwfjfc.d17_1;
              // Inline function 'kotlin.check' call
              var tmp0_check = !(curOwner === owner);
              // Inline function 'kotlin.contracts.contract' call
              if (!tmp0_check) {
                var tmp$ret$1;
                // Inline function 'kotlinx.coroutines.sync.MutexImpl.lockSuspend.<anonymous>.<anonymous>.<anonymous>' call
                tmp$ret$1 = 'Already locked by ' + toString(owner);
                var message = tmp$ret$1;
                throw IllegalStateException_init_$Create$(toString_0(message));
              }
              tmp1__anonymous__uwfjfc.lp(waiter);
              if ($this.z16_1.ih_1 === tmp1__anonymous__uwfjfc ? true : !waiter.e17()) {
                removeOnCancellation(cancellable, waiter);
                tmp$ret$0 = Unit_getInstance();
                break $l$block_0;
              }
              waiter = new LockCont($this, owner, cancellable);
              tmp$ret$2 = Unit_getInstance();
              break $l$block_1;
            } else {
              if (tmp0_subject instanceof OpDescriptor) {
                tmp1__anonymous__uwfjfc.vr($this);
              } else {
                var tmp1_error = 'Illegal state ' + toString(tmp1__anonymous__uwfjfc);
                throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
              }
            }
          }
        }
      }
    }
    tmp$ret$3 = cancellable.wj();
    return tmp$ret$3;
  }
  function LockedQueue(owner) {
    LinkedListHead.call(this);
    this.d17_1 = owner;
  }
  LockedQueue.prototype.f17 = function (_set____db54di) {
    this.d17_1 = _set____db54di;
  };
  LockedQueue.prototype.g17 = function () {
    return this.d17_1;
  };
  LockedQueue.prototype.toString = function () {
    return 'LockedQueue[' + toString_0(this.d17_1) + ']';
  };
  LockedQueue.$metadata$ = classMeta('LockedQueue', undefined, undefined, undefined, undefined, LinkedListHead.prototype);
  function LockWaiter($outer, owner) {
    this.y16_1 = $outer;
    LinkedListNode.call(this);
    this.w16_1 = owner;
    this.x16_1 = atomic$boolean$1(false);
  }
  LockWaiter.prototype.g17 = function () {
    return this.w16_1;
  };
  LockWaiter.prototype.e17 = function () {
    return this.x16_1.atomicfu$compareAndSet(false, true);
  };
  LockWaiter.prototype.vk = function () {
    this.ol();
  };
  LockWaiter.$metadata$ = classMeta('LockWaiter', [DisposableHandle], undefined, undefined, undefined, LinkedListNode.prototype);
  function LockCont($outer, owner, cont) {
    this.q17_1 = $outer;
    LockWaiter.call(this, $outer, owner);
    this.p17_1 = cont;
  }
  LockCont.prototype.h17 = function () {
    if (!this.e17())
      return false;
    return !(this.p17_1.lk(Unit_getInstance(), null, MutexImpl$LockCont$tryResumeLockWaiter$lambda(this.q17_1, this)) == null);
  };
  LockCont.prototype.i17 = function () {
    return this.p17_1.nk(get_RESUME_TOKEN());
  };
  LockCont.prototype.toString = function () {
    return 'LockCont[' + toString(this.w16_1) + ', ' + this.p17_1 + '] for ' + this.q17_1;
  };
  LockCont.$metadata$ = classMeta('LockCont', undefined, undefined, undefined, undefined, LockWaiter.prototype);
  function UnlockOp(queue) {
    AtomicOp.call(this);
    this.s17_1 = queue;
  }
  UnlockOp.prototype.t17 = function (affected) {
    return this.s17_1.po() ? null : get_UNLOCK_FAIL();
  };
  UnlockOp.prototype.z15 = function (affected) {
    return this.t17(affected instanceof MutexImpl ? affected : THROW_CCE());
  };
  UnlockOp.prototype.u17 = function (affected, failure) {
    var update = failure == null ? get_EMPTY_UNLOCKED() : this.s17_1;
    affected.z16_1.atomicfu$compareAndSet(this, update);
  };
  UnlockOp.prototype.a16 = function (affected, failure) {
    return this.u17(affected instanceof MutexImpl ? affected : THROW_CCE(), failure);
  };
  UnlockOp.$metadata$ = classMeta('UnlockOp', undefined, undefined, undefined, undefined, AtomicOp.prototype);
  function MutexImpl$lockSuspend$lambda(this$0, $owner) {
    return function (it) {
      this$0.r16($owner);
      return Unit_getInstance();
    };
  }
  function MutexImpl(locked) {
    this.z16_1 = atomic$ref$1(locked ? get_EMPTY_LOCKED() : get_EMPTY_UNLOCKED());
  }
  MutexImpl.prototype.n16 = function (owner) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.z16_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.tryLock.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.ih_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Empty_0) {
        if (!(tmp1__anonymous__uwfjfc.l16_1 === get_UNLOCKED()))
          return false;
        var update = owner == null ? get_EMPTY_LOCKED() : new Empty_0(owner);
        if (this.z16_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update))
          return true;
      } else {
        if (tmp0_subject instanceof LockedQueue) {
          // Inline function 'kotlin.check' call
          var tmp0_check = !(tmp1__anonymous__uwfjfc.d17_1 === owner);
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp0_check) {
            var tmp$ret$0;
            // Inline function 'kotlinx.coroutines.sync.MutexImpl.tryLock.<anonymous>.<anonymous>' call
            tmp$ret$0 = 'Already locked by ' + toString(owner);
            var message = tmp$ret$0;
            throw IllegalStateException_init_$Create$(toString_0(message));
          }
          return false;
        } else {
          if (tmp0_subject instanceof OpDescriptor) {
            tmp1__anonymous__uwfjfc.vr(this);
          } else {
            var tmp1_error = 'Illegal state ' + toString(tmp1__anonymous__uwfjfc);
            throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
          }
        }
      }
    }
  };
  MutexImpl.prototype.p16 = function (owner, $cont) {
    if (this.n16(owner))
      return Unit_getInstance();
    return lockSuspend(this, owner, $cont);
  };
  MutexImpl.prototype.r16 = function (owner) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.z16_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.ih_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Empty_0) {
        if (owner == null) {
          // Inline function 'kotlin.check' call
          var tmp0_check = !(tmp1__anonymous__uwfjfc.l16_1 === get_UNLOCKED());
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp0_check) {
            var tmp$ret$0;
            // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>.<anonymous>' call
            tmp$ret$0 = 'Mutex is not locked';
            var message = tmp$ret$0;
            throw IllegalStateException_init_$Create$(toString_0(message));
          }
        } else {
          // Inline function 'kotlin.check' call
          var tmp1_check = tmp1__anonymous__uwfjfc.l16_1 === owner;
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp1_check) {
            var tmp$ret$1;
            // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>.<anonymous>' call
            tmp$ret$1 = 'Mutex is locked by ' + toString_0(tmp1__anonymous__uwfjfc.l16_1) + ' but expected ' + toString(owner);
            var message_0 = tmp$ret$1;
            throw IllegalStateException_init_$Create$(toString_0(message_0));
          }
        }
        if (this.z16_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_EMPTY_UNLOCKED()))
          return Unit_getInstance();
      } else {
        if (tmp0_subject instanceof OpDescriptor) {
          tmp1__anonymous__uwfjfc.vr(this);
        } else {
          if (tmp0_subject instanceof LockedQueue) {
            if (!(owner == null)) {
              // Inline function 'kotlin.check' call
              var tmp2_check = tmp1__anonymous__uwfjfc.d17_1 === owner;
              // Inline function 'kotlin.contracts.contract' call
              if (!tmp2_check) {
                var tmp$ret$2;
                // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>.<anonymous>' call
                tmp$ret$2 = 'Mutex is locked by ' + toString_0(tmp1__anonymous__uwfjfc.d17_1) + ' but expected ' + toString(owner);
                var message_1 = tmp$ret$2;
                throw IllegalStateException_init_$Create$(toString_0(message_1));
              }
            }
            var waiter = tmp1__anonymous__uwfjfc.ko();
            if (waiter == null) {
              var op = new UnlockOp(tmp1__anonymous__uwfjfc);
              if (this.z16_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, op) ? op.vr(this) == null : false)
                return Unit_getInstance();
            } else {
              if ((waiter instanceof LockWaiter ? waiter : THROW_CCE()).h17()) {
                var tmp = tmp1__anonymous__uwfjfc;
                var tmp1_elvis_lhs = waiter.w16_1;
                tmp.d17_1 = tmp1_elvis_lhs == null ? get_LOCKED() : tmp1_elvis_lhs;
                waiter.i17();
                return Unit_getInstance();
              }
            }
          } else {
            var tmp3_error = 'Illegal state ' + toString(tmp1__anonymous__uwfjfc);
            throw IllegalStateException_init_$Create$(toString_0(tmp3_error));
          }
        }
      }
    }
  };
  MutexImpl.prototype.toString = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.z16_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.toString.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.ih_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Empty_0)
        return 'Mutex[' + toString_0(tmp1__anonymous__uwfjfc.l16_1) + ']';
      else {
        if (tmp0_subject instanceof OpDescriptor) {
          tmp1__anonymous__uwfjfc.vr(this);
        } else {
          if (tmp0_subject instanceof LockedQueue)
            return 'Mutex[' + toString_0(tmp1__anonymous__uwfjfc.d17_1) + ']';
          else {
            var tmp0_error = 'Illegal state ' + toString(tmp1__anonymous__uwfjfc);
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
          }
        }
      }
    }
  };
  MutexImpl.$metadata$ = classMeta('MutexImpl', [Mutex, SelectClause2]);
  var properties_initialized_Mutex_kt_yv4p3j;
  function init_properties_Mutex_kt_ho0aqz() {
    if (properties_initialized_Mutex_kt_yv4p3j) {
    } else {
      properties_initialized_Mutex_kt_yv4p3j = true;
      LOCK_FAIL = new Symbol('LOCK_FAIL');
      UNLOCK_FAIL = new Symbol('UNLOCK_FAIL');
      LOCKED = new Symbol('LOCKED');
      UNLOCKED = new Symbol('UNLOCKED');
      EMPTY_LOCKED = new Empty_0(get_LOCKED());
      EMPTY_UNLOCKED = new Empty_0(get_UNLOCKED());
    }
  }
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  CompletionHandlerBase.$metadata$ = classMeta('CompletionHandlerBase', undefined, undefined, undefined, undefined, LinkedListNode.prototype);
  function invokeIt(_this__u8e3s4, cause) {
    var tmp0_subject = typeof _this__u8e3s4;
    if (tmp0_subject === 'function')
      _this__u8e3s4(cause);
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = _this__u8e3s4;
      tmp$ret$0.invoke(cause);
    }
  }
  function get_asHandler(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0;
  }
  function get_asHandler_0(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0;
  }
  function CancelHandlerBase() {
  }
  CancelHandlerBase.$metadata$ = classMeta('CancelHandlerBase');
  function toDebugString(_this__u8e3s4) {
    return toString_0(_this__u8e3s4);
  }
  function withCoroutineContext(context, countOrElement, block) {
    return block();
  }
  function withContinuationContext(continuation, countOrElement, block) {
    return block();
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().jt_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_asDynamic = window;
        tmp$ret$0 = tmp0_asDynamic;
        tmp_1 = tmp$ret$0 != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_asDynamic = window;
        tmp$ret$1 = tmp1_asDynamic;
        tmp_0 = !(typeof tmp$ret$1.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.vh().n5(context);
    return (!(combined === Dispatchers_getInstance().jt_1) ? combined.g5(Key_getInstance()) == null : false) ? combined.n5(Dispatchers_getInstance().jt_1) : combined;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.n5(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  UndispatchedCoroutine.prototype.fi = function (state) {
    return this.hk_1.m4(recoverResult(state, this.hk_1));
  };
  UndispatchedCoroutine.$metadata$ = classMeta('UndispatchedCoroutine', undefined, undefined, undefined, undefined, ScopeCoroutine.prototype);
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).jc();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var result = tmp$ret$0.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = _this__u8e3s4;
      tmp$ret$1.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function assert(value) {
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.jt_1 = createDefaultDispatcher();
    this.kt_1 = Unconfined_getInstance();
    this.lt_1 = new JsMainDispatcher(this.jt_1, false);
    this.mt_1 = null;
  }
  Dispatchers.prototype.nt = function () {
    var tmp0_elvis_lhs = this.mt_1;
    return tmp0_elvis_lhs == null ? this.lt_1 : tmp0_elvis_lhs;
  };
  Dispatchers.$metadata$ = objectMeta('Dispatchers');
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.a18_1 = delegate;
    this.b18_1 = invokeImmediately;
    this.c18_1 = this.b18_1 ? this : new JsMainDispatcher(this.a18_1, true);
  }
  JsMainDispatcher.prototype.ht = function () {
    return this.c18_1;
  };
  JsMainDispatcher.prototype.tn = function (context) {
    return !this.b18_1;
  };
  JsMainDispatcher.prototype.un = function (context, block) {
    return this.a18_1.un(context, block);
  };
  JsMainDispatcher.prototype.vn = function (context, block) {
    return this.a18_1.vn(context, block);
  };
  JsMainDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.it();
    return tmp0_elvis_lhs == null ? this.a18_1.toString() : tmp0_elvis_lhs;
  };
  JsMainDispatcher.$metadata$ = classMeta('JsMainDispatcher', undefined, undefined, undefined, undefined, MainCoroutineDispatcher.prototype);
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  UnconfinedEventLoop.prototype.un = function (context, block) {
    unsupported();
  };
  UnconfinedEventLoop.$metadata$ = classMeta('UnconfinedEventLoop', undefined, undefined, undefined, undefined, EventLoop.prototype);
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    this.h18_1 = job;
    captureStack(this, JobCancellationException);
  }
  JobCancellationException.prototype.toString = function () {
    return CancellationException.prototype.toString.call(this) + '; job=' + this.h18_1;
  };
  JobCancellationException.prototype.equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.h18_1, this.h18_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  JobCancellationException.prototype.hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.h18_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  JobCancellationException.$metadata$ = classMeta('JobCancellationException', undefined, undefined, undefined, undefined, CancellationException.prototype);
  function addSuppressedThrowable(_this__u8e3s4, other) {
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  NodeDispatcher.prototype.k18 = function () {
    process.nextTick(this.t18_1.q18_1);
  };
  NodeDispatcher.$metadata$ = objectMeta('NodeDispatcher', undefined, undefined, undefined, undefined, SetTimeoutBasedDispatcher.prototype);
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  SetTimeoutDispatcher.prototype.k18 = function () {
    setTimeout(this.t18_1.q18_1, 0);
  };
  SetTimeoutDispatcher.$metadata$ = objectMeta('SetTimeoutDispatcher', undefined, undefined, undefined, undefined, SetTimeoutBasedDispatcher.prototype);
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.b19();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.r18_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.q18_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  ScheduledMessageQueue.prototype.c19 = function () {
    this.r18_1.k18();
  };
  ScheduledMessageQueue.prototype.d19 = function () {
    setTimeout(this.q18_1, 0);
  };
  ScheduledMessageQueue.$metadata$ = classMeta('ScheduledMessageQueue', undefined, undefined, undefined, undefined, MessageQueue.prototype);
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.sm();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.rk(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.t18_1 = new ScheduledMessageQueue(this);
  }
  SetTimeoutBasedDispatcher.prototype.un = function (context, block) {
    this.t18_1.e19(block);
  };
  SetTimeoutBasedDispatcher.prototype.bo = function (timeMillis, block, context) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  SetTimeoutBasedDispatcher.prototype.ao = function (timeMillis, continuation) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ClearTimeout(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    continuation.qk(tmp$ret$1);
  };
  SetTimeoutBasedDispatcher.$metadata$ = classMeta('SetTimeoutBasedDispatcher', [Delay], undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function MessageQueue() {
    ArrayQueue.call(this);
    this.z18_1 = 16;
    this.a19_1 = false;
  }
  MessageQueue.prototype.e19 = function (element) {
    this.mo(element);
    if (!this.a19_1) {
      this.a19_1 = true;
      this.c19();
    }
  };
  MessageQueue.prototype.b19 = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var tmp0_repeat = this.z18_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = this.ko();
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_getInstance();
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.sm();
        }
         while (inductionVariable < tmp0_repeat);
    }finally {
      if (this.po()) {
        this.a19_1 = false;
      } else {
        this.d19();
      }
    }
  };
  MessageQueue.$metadata$ = classMeta('MessageQueue', undefined, undefined, undefined, undefined, ArrayQueue.prototype);
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).b7();
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.f19_1 = handle;
  }
  ClearTimeout.prototype.vk = function () {
    clearTimeout(this.f19_1);
  };
  ClearTimeout.prototype.uk = function (cause) {
    this.vk();
  };
  ClearTimeout.prototype.invoke = function (cause) {
    return this.uk(cause);
  };
  ClearTimeout.prototype.toString = function () {
    return 'ClearTimeout[' + this.f19_1 + ']';
  };
  ClearTimeout.$metadata$ = classMeta('ClearTimeout', [DisposableHandle], undefined, undefined, undefined, CancelHandler.prototype);
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.rk(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.sm();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$1(this$0, $handle) {
    this.g19_1 = this$0;
    this.h19_1 = $handle;
  }
  WindowDispatcher$invokeOnTimeout$1.prototype.vk = function () {
    this.g19_1.j19_1.clearTimeout(this.h19_1);
  };
  WindowDispatcher$invokeOnTimeout$1.$metadata$ = classMeta(undefined, [DisposableHandle]);
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.j19_1 = window_0;
    this.k19_1 = new WindowMessageQueue(this.j19_1);
  }
  WindowDispatcher.prototype.un = function (context, block) {
    return this.k19_1.e19(block);
  };
  WindowDispatcher.prototype.ao = function (timeMillis, continuation) {
    this.j19_1.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
  };
  WindowDispatcher.prototype.bo = function (timeMillis, block, context) {
    var handle = this.j19_1.setTimeout(WindowDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new WindowDispatcher$invokeOnTimeout$1(this, handle);
  };
  WindowDispatcher.$metadata$ = classMeta('WindowDispatcher', [Delay], undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.q19_1 ? event.data == this$0.r19_1 : false) {
        event.stopPropagation();
        this$0.b19();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.b19();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.q19_1 = window_0;
    this.r19_1 = 'dispatchCoroutine';
    this.q19_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  WindowMessageQueue.prototype.c19 = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  WindowMessageQueue.prototype.d19 = function () {
    this.q19_1.postMessage(this.r19_1, '*');
  };
  WindowMessageQueue.$metadata$ = classMeta('WindowMessageQueue', undefined, undefined, undefined, undefined, MessageQueue.prototype);
  function Runnable() {
  }
  Runnable.$metadata$ = interfaceMeta('Runnable');
  function SchedulerTask() {
  }
  SchedulerTask.$metadata$ = classMeta('SchedulerTask', [Runnable]);
  function get_taskContext(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var tmp0_elvis_lhs = tmp$ret$0.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      var tmp0_also = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = _this__u8e3s4;
      tmp$ret$1.coroutineDispatcher = tmp0_also;
      tmp$ret$2 = tmp0_also;
      tmp = tmp$ret$2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SafeCollector$collectContextSize$lambda(count, _anonymous_parameter_1__qggqgd) {
    return count + 1 | 0;
  }
  function SafeCollector(collector, collectContext) {
    this.g13_1 = collector;
    this.h13_1 = collectContext;
    var tmp = this;
    tmp.i13_1 = this.h13_1.m5(0, SafeCollector$collectContextSize$lambda);
    this.j13_1 = null;
  }
  SafeCollector.prototype.hz = function (value, $cont) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $cont.o4();
    tmp$ret$1 = tmp$ret$0;
    var currentContext = tmp$ret$1;
    ensureActive(currentContext);
    if (!(this.j13_1 === currentContext)) {
      checkContext(this, currentContext);
      this.j13_1 = currentContext;
    }
    return this.g13_1.hz(value, $cont);
  };
  SafeCollector.prototype.x14 = function () {
  };
  SafeCollector.$metadata$ = classMeta('SafeCollector', [FlowCollector]);
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function NoOpLock() {
  }
  NoOpLock.$metadata$ = classMeta('NoOpLock');
  function withLock(_this__u8e3s4, action) {
    return action();
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  LinkedListHead.prototype.po = function () {
    return this.ll_1 === this;
  };
  LinkedListHead.prototype.ol = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  LinkedListHead.$metadata$ = classMeta('LinkedListHead', undefined, undefined, undefined, undefined, LinkedListNode.prototype);
  function LinkedListNode() {
    this.ll_1 = this;
    this.ml_1 = this;
    this.nl_1 = false;
  }
  LinkedListNode.prototype.hp = function () {
    return this.ll_1;
  };
  LinkedListNode.prototype.ip = function () {
    return this.ll_1;
  };
  LinkedListNode.prototype.jp = function () {
    return this.ml_1;
  };
  LinkedListNode.prototype.kp = function () {
    return this.nl_1;
  };
  LinkedListNode.prototype.lp = function (node) {
    var prev = this.ml_1;
    node.ll_1 = this;
    node.ml_1 = prev;
    prev.ll_1 = node;
    this.ml_1 = node;
  };
  LinkedListNode.prototype.ol = function () {
    return this.mp();
  };
  LinkedListNode.prototype.mp = function () {
    if (this.nl_1)
      return false;
    var prev = this.ml_1;
    var next = this.ll_1;
    prev.ll_1 = next;
    next.ml_1 = prev;
    this.nl_1 = true;
    return true;
  };
  LinkedListNode.prototype.wp = function (node) {
    if (!(this.ll_1 === this))
      return false;
    this.lp(node);
    return true;
  };
  LinkedListNode.prototype.np = function (node, condition) {
    if (!condition())
      return false;
    this.lp(node);
    return true;
  };
  LinkedListNode.prototype.op = function (node, predicate) {
    if (!predicate(this.ml_1))
      return false;
    this.lp(node);
    return true;
  };
  LinkedListNode.prototype.pp = function (node, predicate, condition) {
    if (!predicate(this.ml_1))
      return false;
    if (!condition())
      return false;
    this.lp(node);
    return true;
  };
  LinkedListNode.prototype.qp = function () {
  };
  LinkedListNode.prototype.ko = function () {
    var next = this.ll_1;
    if (next === this)
      return null;
    // Inline function 'kotlin.check' call
    var tmp0_check = next.mp();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstOrNull.<anonymous>' call
      tmp$ret$0 = 'Should remove';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    return next;
  };
  LinkedListNode.$metadata$ = classMeta('LinkedListNode');
  function probeCoroutineCreated(completion) {
    return completion;
  }
  function unwrap(exception) {
    return exception;
  }
  function CoroutineStackFrame() {
  }
  CoroutineStackFrame.$metadata$ = interfaceMeta('CoroutineStackFrame');
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function synchronized(lock, block) {
    return block();
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.vo_1 = null;
  }
  CommonThreadLocal.prototype.wo = function () {
    var tmp = this.vo_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  CommonThreadLocal.prototype.xo = function (value) {
    this.vo_1 = value;
  };
  CommonThreadLocal.$metadata$ = classMeta('CommonThreadLocal');
  //region block: post-declaration
  JobSupport.prototype.yi = invokeOnCompletion$default;
  JobSupport.prototype.dj = cancel$default;
  JobSupport.prototype.n5 = plus;
  JobSupport.prototype.g5 = get;
  JobSupport.prototype.m5 = fold;
  JobSupport.prototype.l5 = minusKey;
  AbstractCoroutine.prototype.yi = invokeOnCompletion$default;
  AbstractCoroutine.prototype.dj = cancel$default;
  AbstractCoroutine.prototype.n5 = plus;
  AbstractCoroutine.prototype.g5 = get;
  AbstractCoroutine.prototype.m5 = fold;
  AbstractCoroutine.prototype.l5 = minusKey;
  StandaloneCoroutine.prototype.yi = invokeOnCompletion$default;
  StandaloneCoroutine.prototype.dj = cancel$default;
  StandaloneCoroutine.prototype.n5 = plus;
  StandaloneCoroutine.prototype.g5 = get;
  StandaloneCoroutine.prototype.m5 = fold;
  StandaloneCoroutine.prototype.l5 = minusKey;
  LazyStandaloneCoroutine.prototype.yi = invokeOnCompletion$default;
  LazyStandaloneCoroutine.prototype.dj = cancel$default;
  LazyStandaloneCoroutine.prototype.n5 = plus;
  LazyStandaloneCoroutine.prototype.g5 = get;
  LazyStandaloneCoroutine.prototype.m5 = fold;
  LazyStandaloneCoroutine.prototype.l5 = minusKey;
  ScopeCoroutine.prototype.yi = invokeOnCompletion$default;
  ScopeCoroutine.prototype.dj = cancel$default;
  ScopeCoroutine.prototype.n5 = plus;
  ScopeCoroutine.prototype.g5 = get;
  ScopeCoroutine.prototype.m5 = fold;
  ScopeCoroutine.prototype.l5 = minusKey;
  DispatchedCoroutine.prototype.yi = invokeOnCompletion$default;
  DispatchedCoroutine.prototype.dj = cancel$default;
  DispatchedCoroutine.prototype.n5 = plus;
  DispatchedCoroutine.prototype.g5 = get;
  DispatchedCoroutine.prototype.m5 = fold;
  DispatchedCoroutine.prototype.l5 = minusKey;
  CancellableContinuationImpl.prototype.pk = cancel$default_0;
  CancellableContinuationImpl.prototype.kk = tryResume$default;
  CompletableDeferredImpl.prototype.yi = invokeOnCompletion$default;
  CompletableDeferredImpl.prototype.dj = cancel$default;
  CompletableDeferredImpl.prototype.n5 = plus;
  CompletableDeferredImpl.prototype.g5 = get;
  CompletableDeferredImpl.prototype.m5 = fold;
  CompletableDeferredImpl.prototype.l5 = minusKey;
  CoroutineDispatcher.prototype.g5 = get_0;
  CoroutineDispatcher.prototype.m5 = fold;
  CoroutineDispatcher.prototype.l5 = minusKey_0;
  CoroutineDispatcher.prototype.n5 = plus;
  _no_name_provided__qut3iv.prototype.g5 = get;
  _no_name_provided__qut3iv.prototype.m5 = fold;
  _no_name_provided__qut3iv.prototype.l5 = minusKey;
  _no_name_provided__qut3iv.prototype.n5 = plus;
  EventLoop.prototype.n5 = plus;
  EventLoop.prototype.g5 = get_0;
  EventLoop.prototype.m5 = fold;
  EventLoop.prototype.l5 = minusKey_0;
  AwaitContinuation.prototype.pk = cancel$default_0;
  AwaitContinuation.prototype.kk = tryResume$default;
  JobImpl.prototype.yi = invokeOnCompletion$default;
  JobImpl.prototype.dj = cancel$default;
  JobImpl.prototype.n5 = plus;
  JobImpl.prototype.g5 = get;
  JobImpl.prototype.m5 = fold;
  JobImpl.prototype.l5 = minusKey;
  MainCoroutineDispatcher.prototype.n5 = plus;
  MainCoroutineDispatcher.prototype.g5 = get_0;
  MainCoroutineDispatcher.prototype.m5 = fold;
  MainCoroutineDispatcher.prototype.l5 = minusKey_0;
  SupervisorJobImpl.prototype.yi = invokeOnCompletion$default;
  SupervisorJobImpl.prototype.dj = cancel$default;
  SupervisorJobImpl.prototype.n5 = plus;
  SupervisorJobImpl.prototype.g5 = get;
  SupervisorJobImpl.prototype.m5 = fold;
  SupervisorJobImpl.prototype.l5 = minusKey;
  TimeoutCoroutine.prototype.yi = invokeOnCompletion$default;
  TimeoutCoroutine.prototype.dj = cancel$default;
  TimeoutCoroutine.prototype.n5 = plus;
  TimeoutCoroutine.prototype.g5 = get;
  TimeoutCoroutine.prototype.m5 = fold;
  TimeoutCoroutine.prototype.l5 = minusKey;
  Unconfined.prototype.n5 = plus;
  Unconfined.prototype.g5 = get_0;
  Unconfined.prototype.m5 = fold;
  Unconfined.prototype.l5 = minusKey_0;
  YieldContext.prototype.g5 = get;
  YieldContext.prototype.m5 = fold;
  YieldContext.prototype.l5 = minusKey;
  YieldContext.prototype.n5 = plus;
  MutexImpl.prototype.o16 = tryLock$default;
  MutexImpl.prototype.q16 = lock$default;
  MutexImpl.prototype.s16 = unlock$default;
  UndispatchedCoroutine.prototype.yi = invokeOnCompletion$default;
  UndispatchedCoroutine.prototype.dj = cancel$default;
  UndispatchedCoroutine.prototype.n5 = plus;
  UndispatchedCoroutine.prototype.g5 = get;
  UndispatchedCoroutine.prototype.m5 = fold;
  UndispatchedCoroutine.prototype.l5 = minusKey;
  JsMainDispatcher.prototype.n5 = plus;
  JsMainDispatcher.prototype.g5 = get_0;
  JsMainDispatcher.prototype.m5 = fold;
  JsMainDispatcher.prototype.l5 = minusKey_0;
  UnconfinedEventLoop.prototype.n5 = plus;
  UnconfinedEventLoop.prototype.g5 = get_0;
  UnconfinedEventLoop.prototype.m5 = fold;
  UnconfinedEventLoop.prototype.l5 = minusKey_0;
  SetTimeoutBasedDispatcher.prototype.n5 = plus;
  SetTimeoutBasedDispatcher.prototype.g5 = get_0;
  SetTimeoutBasedDispatcher.prototype.m5 = fold;
  SetTimeoutBasedDispatcher.prototype.l5 = minusKey_0;
  NodeDispatcher.prototype.n5 = plus;
  NodeDispatcher.prototype.g5 = get_0;
  NodeDispatcher.prototype.m5 = fold;
  NodeDispatcher.prototype.l5 = minusKey_0;
  SetTimeoutDispatcher.prototype.n5 = plus;
  SetTimeoutDispatcher.prototype.g5 = get_0;
  SetTimeoutDispatcher.prototype.m5 = fold;
  SetTimeoutDispatcher.prototype.l5 = minusKey_0;
  WindowDispatcher.prototype.n5 = plus;
  WindowDispatcher.prototype.g5 = get_0;
  WindowDispatcher.prototype.m5 = fold;
  WindowDispatcher.prototype.l5 = minusKey_0;
  //endregion
  //region block: init
  UNDECIDED = 0;
  SUSPENDED = 1;
  RESUMED = 2;
  UNDECIDED_0 = 0;
  SUSPENDED_0 = 1;
  RESUMED_0 = 2;
  FALSE = 0;
  TRUE = 1;
  DEFAULT_CLOSE_MESSAGE = 'Channel was closed';
  MODE_CANCELLABLE = 1;
  MODE_UNINITIALIZED = -1;
  MODE_CANCELLABLE_REUSABLE = 2;
  MODE_UNDISPATCHED = 4;
  MODE_ATOMIC = 0;
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BufferOverflow_DROP_OLDEST_getInstance;
  _.$_$.b = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.c = cancelAndJoin;
  _.$_$.d = coroutineScope;
  _.$_$.e = delay;
  _.$_$.f = withContext;
  _.$_$.g = withTimeoutOrNull;
  _.$_$.h = yield_0;
  _.$_$.i = Channel$default;
  _.$_$.j = MutableSharedFlow$default;
  _.$_$.k = Mutex$default;
  _.$_$.l = Job$default;
  _.$_$.m = cancel$default_1;
  _.$_$.n = cancel$default_2;
  _.$_$.o = launch$default;
  _.$_$.p = ChannelResult__getOrNull_impl_f5e07h;
  _.$_$.q = Factory_getInstance;
  _.$_$.r = Key_getInstance_1;
  _.$_$.s = Dispatchers_getInstance;
  _.$_$.t = GlobalScope_getInstance;
  _.$_$.u = Key_getInstance_2;
  _.$_$.v = cancelConsumed;
  _.$_$.w = FlowCollector;
  _.$_$.x = Flow;
  _.$_$.y = MutableStateFlow_0;
  _.$_$.z = Mutex_0;
  _.$_$.a1 = CancellableContinuationImpl;
  _.$_$.b1 = CompletableDeferred_0;
  _.$_$.c1 = CoroutineDispatcher;
  _.$_$.d1 = CoroutineExceptionHandler;
  _.$_$.e1 = CoroutineScope_0;
  _.$_$.f1 = CoroutineScope;
  _.$_$.g1 = Job_0;
  _.$_$.h1 = get_MODE_CANCELLABLE;
  _.$_$.i1 = SupervisorJob;
  _.$_$.j1 = get_isActive_0;
  _.$_$.k1 = get_isActive;
  _.$_$.l1 = get_job;
  _.$_$.m1 = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js.map
