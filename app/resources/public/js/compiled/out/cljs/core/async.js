// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t26607 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26607 = (function (f,fn_handler,meta26608){
this.f = f;
this.fn_handler = fn_handler;
this.meta26608 = meta26608;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26607.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26607.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26607.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26609){
var self__ = this;
var _26609__$1 = this;
return self__.meta26608;
});

cljs.core.async.t26607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26609,meta26608__$1){
var self__ = this;
var _26609__$1 = this;
return (new cljs.core.async.t26607(self__.f,self__.fn_handler,meta26608__$1));
});

cljs.core.async.t26607.cljs$lang$type = true;

cljs.core.async.t26607.cljs$lang$ctorStr = "cljs.core.async/t26607";

cljs.core.async.t26607.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t26607");
});

cljs.core.async.__GT_t26607 = (function cljs$core$async$fn_handler_$___GT_t26607(f__$1,fn_handler__$1,meta26608){
return (new cljs.core.async.t26607(f__$1,fn_handler__$1,meta26608));
});

}

return (new cljs.core.async.t26607(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__26611 = buff;
if(G__26611){
var bit__18834__auto__ = null;
if(cljs.core.truth_((function (){var or__18160__auto__ = bit__18834__auto__;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return G__26611.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26611.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26611);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26611);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__26613 = arguments.length;
switch (G__26613) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__26616 = arguments.length;
switch (G__26616) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26618 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26618);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26618,ret){
return (function (){
return fn1.call(null,val_26618);
});})(val_26618,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__26620 = arguments.length;
switch (G__26620) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19045__auto___26622 = n;
var x_26623 = (0);
while(true){
if((x_26623 < n__19045__auto___26622)){
(a[x_26623] = (0));

var G__26624 = (x_26623 + (1));
x_26623 = G__26624;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26625 = (i + (1));
i = G__26625;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26629 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26629 = (function (flag,alt_flag,meta26630){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26630 = meta26630;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26629.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26629.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26629.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26629.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26631){
var self__ = this;
var _26631__$1 = this;
return self__.meta26630;
});})(flag))
;

cljs.core.async.t26629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26631,meta26630__$1){
var self__ = this;
var _26631__$1 = this;
return (new cljs.core.async.t26629(self__.flag,self__.alt_flag,meta26630__$1));
});})(flag))
;

cljs.core.async.t26629.cljs$lang$type = true;

cljs.core.async.t26629.cljs$lang$ctorStr = "cljs.core.async/t26629";

cljs.core.async.t26629.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t26629");
});})(flag))
;

cljs.core.async.__GT_t26629 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t26629(flag__$1,alt_flag__$1,meta26630){
return (new cljs.core.async.t26629(flag__$1,alt_flag__$1,meta26630));
});})(flag))
;

}

return (new cljs.core.async.t26629(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t26635 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26635 = (function (cb,flag,alt_handler,meta26636){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26636 = meta26636;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26635.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26635.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26635.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26637){
var self__ = this;
var _26637__$1 = this;
return self__.meta26636;
});

cljs.core.async.t26635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26637,meta26636__$1){
var self__ = this;
var _26637__$1 = this;
return (new cljs.core.async.t26635(self__.cb,self__.flag,self__.alt_handler,meta26636__$1));
});

cljs.core.async.t26635.cljs$lang$type = true;

cljs.core.async.t26635.cljs$lang$ctorStr = "cljs.core.async/t26635";

cljs.core.async.t26635.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t26635");
});

cljs.core.async.__GT_t26635 = (function cljs$core$async$alt_handler_$___GT_t26635(cb__$1,flag__$1,alt_handler__$1,meta26636){
return (new cljs.core.async.t26635(cb__$1,flag__$1,alt_handler__$1,meta26636));
});

}

return (new cljs.core.async.t26635(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26638_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26638_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26639_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26639_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18160__auto__ = wport;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26640 = (i + (1));
i = G__26640;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18160__auto__ = ret;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__18148__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18148__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18148__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19200__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19200__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26643){
var map__26644 = p__26643;
var map__26644__$1 = ((cljs.core.seq_QMARK_.call(null,map__26644))?cljs.core.apply.call(null,cljs.core.hash_map,map__26644):map__26644);
var opts = map__26644__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26641){
var G__26642 = cljs.core.first.call(null,seq26641);
var seq26641__$1 = cljs.core.next.call(null,seq26641);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26642,seq26641__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__26646 = arguments.length;
switch (G__26646) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22071__auto___26695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___26695){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___26695){
return (function (state_26670){
var state_val_26671 = (state_26670[(1)]);
if((state_val_26671 === (7))){
var inst_26666 = (state_26670[(2)]);
var state_26670__$1 = state_26670;
var statearr_26672_26696 = state_26670__$1;
(statearr_26672_26696[(2)] = inst_26666);

(statearr_26672_26696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26671 === (1))){
var state_26670__$1 = state_26670;
var statearr_26673_26697 = state_26670__$1;
(statearr_26673_26697[(2)] = null);

(statearr_26673_26697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26671 === (4))){
var inst_26649 = (state_26670[(7)]);
var inst_26649__$1 = (state_26670[(2)]);
var inst_26650 = (inst_26649__$1 == null);
var state_26670__$1 = (function (){var statearr_26674 = state_26670;
(statearr_26674[(7)] = inst_26649__$1);

return statearr_26674;
})();
if(cljs.core.truth_(inst_26650)){
var statearr_26675_26698 = state_26670__$1;
(statearr_26675_26698[(1)] = (5));

} else {
var statearr_26676_26699 = state_26670__$1;
(statearr_26676_26699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26671 === (13))){
var state_26670__$1 = state_26670;
var statearr_26677_26700 = state_26670__$1;
(statearr_26677_26700[(2)] = null);

(statearr_26677_26700[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26671 === (6))){
var inst_26649 = (state_26670[(7)]);
var state_26670__$1 = state_26670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26670__$1,(11),to,inst_26649);
} else {
if((state_val_26671 === (3))){
var inst_26668 = (state_26670[(2)]);
var state_26670__$1 = state_26670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26670__$1,inst_26668);
} else {
if((state_val_26671 === (12))){
var state_26670__$1 = state_26670;
var statearr_26678_26701 = state_26670__$1;
(statearr_26678_26701[(2)] = null);

(statearr_26678_26701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26671 === (2))){
var state_26670__$1 = state_26670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26670__$1,(4),from);
} else {
if((state_val_26671 === (11))){
var inst_26659 = (state_26670[(2)]);
var state_26670__$1 = state_26670;
if(cljs.core.truth_(inst_26659)){
var statearr_26679_26702 = state_26670__$1;
(statearr_26679_26702[(1)] = (12));

} else {
var statearr_26680_26703 = state_26670__$1;
(statearr_26680_26703[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26671 === (9))){
var state_26670__$1 = state_26670;
var statearr_26681_26704 = state_26670__$1;
(statearr_26681_26704[(2)] = null);

(statearr_26681_26704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26671 === (5))){
var state_26670__$1 = state_26670;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26682_26705 = state_26670__$1;
(statearr_26682_26705[(1)] = (8));

} else {
var statearr_26683_26706 = state_26670__$1;
(statearr_26683_26706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26671 === (14))){
var inst_26664 = (state_26670[(2)]);
var state_26670__$1 = state_26670;
var statearr_26684_26707 = state_26670__$1;
(statearr_26684_26707[(2)] = inst_26664);

(statearr_26684_26707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26671 === (10))){
var inst_26656 = (state_26670[(2)]);
var state_26670__$1 = state_26670;
var statearr_26685_26708 = state_26670__$1;
(statearr_26685_26708[(2)] = inst_26656);

(statearr_26685_26708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26671 === (8))){
var inst_26653 = cljs.core.async.close_BANG_.call(null,to);
var state_26670__$1 = state_26670;
var statearr_26686_26709 = state_26670__$1;
(statearr_26686_26709[(2)] = inst_26653);

(statearr_26686_26709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__22071__auto___26695))
;
return ((function (switch__22009__auto__,c__22071__auto___26695){
return (function() {
var cljs$core$async$state_machine__22010__auto__ = null;
var cljs$core$async$state_machine__22010__auto____0 = (function (){
var statearr_26690 = [null,null,null,null,null,null,null,null];
(statearr_26690[(0)] = cljs$core$async$state_machine__22010__auto__);

(statearr_26690[(1)] = (1));

return statearr_26690;
});
var cljs$core$async$state_machine__22010__auto____1 = (function (state_26670){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_26670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e26691){if((e26691 instanceof Object)){
var ex__22013__auto__ = e26691;
var statearr_26692_26710 = state_26670;
(statearr_26692_26710[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26711 = state_26670;
state_26670 = G__26711;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$state_machine__22010__auto__ = function(state_26670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22010__auto____1.call(this,state_26670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22010__auto____0;
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22010__auto____1;
return cljs$core$async$state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___26695))
})();
var state__22073__auto__ = (function (){var statearr_26693 = f__22072__auto__.call(null);
(statearr_26693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___26695);

return statearr_26693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___26695))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26895){
var vec__26896 = p__26895;
var v = cljs.core.nth.call(null,vec__26896,(0),null);
var p = cljs.core.nth.call(null,vec__26896,(1),null);
var job = vec__26896;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22071__auto___27078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___27078,res,vec__26896,v,p,job,jobs,results){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___27078,res,vec__26896,v,p,job,jobs,results){
return (function (state_26901){
var state_val_26902 = (state_26901[(1)]);
if((state_val_26902 === (2))){
var inst_26898 = (state_26901[(2)]);
var inst_26899 = cljs.core.async.close_BANG_.call(null,res);
var state_26901__$1 = (function (){var statearr_26903 = state_26901;
(statearr_26903[(7)] = inst_26898);

return statearr_26903;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26901__$1,inst_26899);
} else {
if((state_val_26902 === (1))){
var state_26901__$1 = state_26901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26901__$1,(2),res,v);
} else {
return null;
}
}
});})(c__22071__auto___27078,res,vec__26896,v,p,job,jobs,results))
;
return ((function (switch__22009__auto__,c__22071__auto___27078,res,vec__26896,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0 = (function (){
var statearr_26907 = [null,null,null,null,null,null,null,null];
(statearr_26907[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__);

(statearr_26907[(1)] = (1));

return statearr_26907;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1 = (function (state_26901){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_26901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e26908){if((e26908 instanceof Object)){
var ex__22013__auto__ = e26908;
var statearr_26909_27079 = state_26901;
(statearr_26909_27079[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27080 = state_26901;
state_26901 = G__27080;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__ = function(state_26901){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1.call(this,state_26901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___27078,res,vec__26896,v,p,job,jobs,results))
})();
var state__22073__auto__ = (function (){var statearr_26910 = f__22072__auto__.call(null);
(statearr_26910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___27078);

return statearr_26910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___27078,res,vec__26896,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26911){
var vec__26912 = p__26911;
var v = cljs.core.nth.call(null,vec__26912,(0),null);
var p = cljs.core.nth.call(null,vec__26912,(1),null);
var job = vec__26912;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19045__auto___27081 = n;
var __27082 = (0);
while(true){
if((__27082 < n__19045__auto___27081)){
var G__26913_27083 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26913_27083) {
case "async":
var c__22071__auto___27085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27082,c__22071__auto___27085,G__26913_27083,n__19045__auto___27081,jobs,results,process,async){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (__27082,c__22071__auto___27085,G__26913_27083,n__19045__auto___27081,jobs,results,process,async){
return (function (state_26926){
var state_val_26927 = (state_26926[(1)]);
if((state_val_26927 === (7))){
var inst_26922 = (state_26926[(2)]);
var state_26926__$1 = state_26926;
var statearr_26928_27086 = state_26926__$1;
(statearr_26928_27086[(2)] = inst_26922);

(statearr_26928_27086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (6))){
var state_26926__$1 = state_26926;
var statearr_26929_27087 = state_26926__$1;
(statearr_26929_27087[(2)] = null);

(statearr_26929_27087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (5))){
var state_26926__$1 = state_26926;
var statearr_26930_27088 = state_26926__$1;
(statearr_26930_27088[(2)] = null);

(statearr_26930_27088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (4))){
var inst_26916 = (state_26926[(2)]);
var inst_26917 = async.call(null,inst_26916);
var state_26926__$1 = state_26926;
if(cljs.core.truth_(inst_26917)){
var statearr_26931_27089 = state_26926__$1;
(statearr_26931_27089[(1)] = (5));

} else {
var statearr_26932_27090 = state_26926__$1;
(statearr_26932_27090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (3))){
var inst_26924 = (state_26926[(2)]);
var state_26926__$1 = state_26926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26926__$1,inst_26924);
} else {
if((state_val_26927 === (2))){
var state_26926__$1 = state_26926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26926__$1,(4),jobs);
} else {
if((state_val_26927 === (1))){
var state_26926__$1 = state_26926;
var statearr_26933_27091 = state_26926__$1;
(statearr_26933_27091[(2)] = null);

(statearr_26933_27091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27082,c__22071__auto___27085,G__26913_27083,n__19045__auto___27081,jobs,results,process,async))
;
return ((function (__27082,switch__22009__auto__,c__22071__auto___27085,G__26913_27083,n__19045__auto___27081,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0 = (function (){
var statearr_26937 = [null,null,null,null,null,null,null];
(statearr_26937[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__);

(statearr_26937[(1)] = (1));

return statearr_26937;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1 = (function (state_26926){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_26926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e26938){if((e26938 instanceof Object)){
var ex__22013__auto__ = e26938;
var statearr_26939_27092 = state_26926;
(statearr_26939_27092[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27093 = state_26926;
state_26926 = G__27093;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__ = function(state_26926){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1.call(this,state_26926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__;
})()
;})(__27082,switch__22009__auto__,c__22071__auto___27085,G__26913_27083,n__19045__auto___27081,jobs,results,process,async))
})();
var state__22073__auto__ = (function (){var statearr_26940 = f__22072__auto__.call(null);
(statearr_26940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___27085);

return statearr_26940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(__27082,c__22071__auto___27085,G__26913_27083,n__19045__auto___27081,jobs,results,process,async))
);


break;
case "compute":
var c__22071__auto___27094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27082,c__22071__auto___27094,G__26913_27083,n__19045__auto___27081,jobs,results,process,async){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (__27082,c__22071__auto___27094,G__26913_27083,n__19045__auto___27081,jobs,results,process,async){
return (function (state_26953){
var state_val_26954 = (state_26953[(1)]);
if((state_val_26954 === (7))){
var inst_26949 = (state_26953[(2)]);
var state_26953__$1 = state_26953;
var statearr_26955_27095 = state_26953__$1;
(statearr_26955_27095[(2)] = inst_26949);

(statearr_26955_27095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26954 === (6))){
var state_26953__$1 = state_26953;
var statearr_26956_27096 = state_26953__$1;
(statearr_26956_27096[(2)] = null);

(statearr_26956_27096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26954 === (5))){
var state_26953__$1 = state_26953;
var statearr_26957_27097 = state_26953__$1;
(statearr_26957_27097[(2)] = null);

(statearr_26957_27097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26954 === (4))){
var inst_26943 = (state_26953[(2)]);
var inst_26944 = process.call(null,inst_26943);
var state_26953__$1 = state_26953;
if(cljs.core.truth_(inst_26944)){
var statearr_26958_27098 = state_26953__$1;
(statearr_26958_27098[(1)] = (5));

} else {
var statearr_26959_27099 = state_26953__$1;
(statearr_26959_27099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26954 === (3))){
var inst_26951 = (state_26953[(2)]);
var state_26953__$1 = state_26953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26953__$1,inst_26951);
} else {
if((state_val_26954 === (2))){
var state_26953__$1 = state_26953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26953__$1,(4),jobs);
} else {
if((state_val_26954 === (1))){
var state_26953__$1 = state_26953;
var statearr_26960_27100 = state_26953__$1;
(statearr_26960_27100[(2)] = null);

(statearr_26960_27100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27082,c__22071__auto___27094,G__26913_27083,n__19045__auto___27081,jobs,results,process,async))
;
return ((function (__27082,switch__22009__auto__,c__22071__auto___27094,G__26913_27083,n__19045__auto___27081,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0 = (function (){
var statearr_26964 = [null,null,null,null,null,null,null];
(statearr_26964[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__);

(statearr_26964[(1)] = (1));

return statearr_26964;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1 = (function (state_26953){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_26953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e26965){if((e26965 instanceof Object)){
var ex__22013__auto__ = e26965;
var statearr_26966_27101 = state_26953;
(statearr_26966_27101[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27102 = state_26953;
state_26953 = G__27102;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__ = function(state_26953){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1.call(this,state_26953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__;
})()
;})(__27082,switch__22009__auto__,c__22071__auto___27094,G__26913_27083,n__19045__auto___27081,jobs,results,process,async))
})();
var state__22073__auto__ = (function (){var statearr_26967 = f__22072__auto__.call(null);
(statearr_26967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___27094);

return statearr_26967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(__27082,c__22071__auto___27094,G__26913_27083,n__19045__auto___27081,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27103 = (__27082 + (1));
__27082 = G__27103;
continue;
} else {
}
break;
}

var c__22071__auto___27104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___27104,jobs,results,process,async){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___27104,jobs,results,process,async){
return (function (state_26989){
var state_val_26990 = (state_26989[(1)]);
if((state_val_26990 === (9))){
var inst_26982 = (state_26989[(2)]);
var state_26989__$1 = (function (){var statearr_26991 = state_26989;
(statearr_26991[(7)] = inst_26982);

return statearr_26991;
})();
var statearr_26992_27105 = state_26989__$1;
(statearr_26992_27105[(2)] = null);

(statearr_26992_27105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26990 === (8))){
var inst_26975 = (state_26989[(8)]);
var inst_26980 = (state_26989[(2)]);
var state_26989__$1 = (function (){var statearr_26993 = state_26989;
(statearr_26993[(9)] = inst_26980);

return statearr_26993;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26989__$1,(9),results,inst_26975);
} else {
if((state_val_26990 === (7))){
var inst_26985 = (state_26989[(2)]);
var state_26989__$1 = state_26989;
var statearr_26994_27106 = state_26989__$1;
(statearr_26994_27106[(2)] = inst_26985);

(statearr_26994_27106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26990 === (6))){
var inst_26975 = (state_26989[(8)]);
var inst_26970 = (state_26989[(10)]);
var inst_26975__$1 = cljs.core.async.chan.call(null,(1));
var inst_26976 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26977 = [inst_26970,inst_26975__$1];
var inst_26978 = (new cljs.core.PersistentVector(null,2,(5),inst_26976,inst_26977,null));
var state_26989__$1 = (function (){var statearr_26995 = state_26989;
(statearr_26995[(8)] = inst_26975__$1);

return statearr_26995;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26989__$1,(8),jobs,inst_26978);
} else {
if((state_val_26990 === (5))){
var inst_26973 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26989__$1 = state_26989;
var statearr_26996_27107 = state_26989__$1;
(statearr_26996_27107[(2)] = inst_26973);

(statearr_26996_27107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26990 === (4))){
var inst_26970 = (state_26989[(10)]);
var inst_26970__$1 = (state_26989[(2)]);
var inst_26971 = (inst_26970__$1 == null);
var state_26989__$1 = (function (){var statearr_26997 = state_26989;
(statearr_26997[(10)] = inst_26970__$1);

return statearr_26997;
})();
if(cljs.core.truth_(inst_26971)){
var statearr_26998_27108 = state_26989__$1;
(statearr_26998_27108[(1)] = (5));

} else {
var statearr_26999_27109 = state_26989__$1;
(statearr_26999_27109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26990 === (3))){
var inst_26987 = (state_26989[(2)]);
var state_26989__$1 = state_26989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26989__$1,inst_26987);
} else {
if((state_val_26990 === (2))){
var state_26989__$1 = state_26989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26989__$1,(4),from);
} else {
if((state_val_26990 === (1))){
var state_26989__$1 = state_26989;
var statearr_27000_27110 = state_26989__$1;
(statearr_27000_27110[(2)] = null);

(statearr_27000_27110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__22071__auto___27104,jobs,results,process,async))
;
return ((function (switch__22009__auto__,c__22071__auto___27104,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0 = (function (){
var statearr_27004 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27004[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__);

(statearr_27004[(1)] = (1));

return statearr_27004;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1 = (function (state_26989){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_26989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e27005){if((e27005 instanceof Object)){
var ex__22013__auto__ = e27005;
var statearr_27006_27111 = state_26989;
(statearr_27006_27111[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27112 = state_26989;
state_26989 = G__27112;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__ = function(state_26989){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1.call(this,state_26989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___27104,jobs,results,process,async))
})();
var state__22073__auto__ = (function (){var statearr_27007 = f__22072__auto__.call(null);
(statearr_27007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___27104);

return statearr_27007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___27104,jobs,results,process,async))
);


var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__,jobs,results,process,async){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto__,jobs,results,process,async){
return (function (state_27045){
var state_val_27046 = (state_27045[(1)]);
if((state_val_27046 === (7))){
var inst_27041 = (state_27045[(2)]);
var state_27045__$1 = state_27045;
var statearr_27047_27113 = state_27045__$1;
(statearr_27047_27113[(2)] = inst_27041);

(statearr_27047_27113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (20))){
var state_27045__$1 = state_27045;
var statearr_27048_27114 = state_27045__$1;
(statearr_27048_27114[(2)] = null);

(statearr_27048_27114[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (1))){
var state_27045__$1 = state_27045;
var statearr_27049_27115 = state_27045__$1;
(statearr_27049_27115[(2)] = null);

(statearr_27049_27115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (4))){
var inst_27010 = (state_27045[(7)]);
var inst_27010__$1 = (state_27045[(2)]);
var inst_27011 = (inst_27010__$1 == null);
var state_27045__$1 = (function (){var statearr_27050 = state_27045;
(statearr_27050[(7)] = inst_27010__$1);

return statearr_27050;
})();
if(cljs.core.truth_(inst_27011)){
var statearr_27051_27116 = state_27045__$1;
(statearr_27051_27116[(1)] = (5));

} else {
var statearr_27052_27117 = state_27045__$1;
(statearr_27052_27117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (15))){
var inst_27023 = (state_27045[(8)]);
var state_27045__$1 = state_27045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27045__$1,(18),to,inst_27023);
} else {
if((state_val_27046 === (21))){
var inst_27036 = (state_27045[(2)]);
var state_27045__$1 = state_27045;
var statearr_27053_27118 = state_27045__$1;
(statearr_27053_27118[(2)] = inst_27036);

(statearr_27053_27118[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (13))){
var inst_27038 = (state_27045[(2)]);
var state_27045__$1 = (function (){var statearr_27054 = state_27045;
(statearr_27054[(9)] = inst_27038);

return statearr_27054;
})();
var statearr_27055_27119 = state_27045__$1;
(statearr_27055_27119[(2)] = null);

(statearr_27055_27119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (6))){
var inst_27010 = (state_27045[(7)]);
var state_27045__$1 = state_27045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27045__$1,(11),inst_27010);
} else {
if((state_val_27046 === (17))){
var inst_27031 = (state_27045[(2)]);
var state_27045__$1 = state_27045;
if(cljs.core.truth_(inst_27031)){
var statearr_27056_27120 = state_27045__$1;
(statearr_27056_27120[(1)] = (19));

} else {
var statearr_27057_27121 = state_27045__$1;
(statearr_27057_27121[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (3))){
var inst_27043 = (state_27045[(2)]);
var state_27045__$1 = state_27045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27045__$1,inst_27043);
} else {
if((state_val_27046 === (12))){
var inst_27020 = (state_27045[(10)]);
var state_27045__$1 = state_27045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27045__$1,(14),inst_27020);
} else {
if((state_val_27046 === (2))){
var state_27045__$1 = state_27045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27045__$1,(4),results);
} else {
if((state_val_27046 === (19))){
var state_27045__$1 = state_27045;
var statearr_27058_27122 = state_27045__$1;
(statearr_27058_27122[(2)] = null);

(statearr_27058_27122[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (11))){
var inst_27020 = (state_27045[(2)]);
var state_27045__$1 = (function (){var statearr_27059 = state_27045;
(statearr_27059[(10)] = inst_27020);

return statearr_27059;
})();
var statearr_27060_27123 = state_27045__$1;
(statearr_27060_27123[(2)] = null);

(statearr_27060_27123[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (9))){
var state_27045__$1 = state_27045;
var statearr_27061_27124 = state_27045__$1;
(statearr_27061_27124[(2)] = null);

(statearr_27061_27124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (5))){
var state_27045__$1 = state_27045;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27062_27125 = state_27045__$1;
(statearr_27062_27125[(1)] = (8));

} else {
var statearr_27063_27126 = state_27045__$1;
(statearr_27063_27126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (14))){
var inst_27023 = (state_27045[(8)]);
var inst_27025 = (state_27045[(11)]);
var inst_27023__$1 = (state_27045[(2)]);
var inst_27024 = (inst_27023__$1 == null);
var inst_27025__$1 = cljs.core.not.call(null,inst_27024);
var state_27045__$1 = (function (){var statearr_27064 = state_27045;
(statearr_27064[(8)] = inst_27023__$1);

(statearr_27064[(11)] = inst_27025__$1);

return statearr_27064;
})();
if(inst_27025__$1){
var statearr_27065_27127 = state_27045__$1;
(statearr_27065_27127[(1)] = (15));

} else {
var statearr_27066_27128 = state_27045__$1;
(statearr_27066_27128[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (16))){
var inst_27025 = (state_27045[(11)]);
var state_27045__$1 = state_27045;
var statearr_27067_27129 = state_27045__$1;
(statearr_27067_27129[(2)] = inst_27025);

(statearr_27067_27129[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (10))){
var inst_27017 = (state_27045[(2)]);
var state_27045__$1 = state_27045;
var statearr_27068_27130 = state_27045__$1;
(statearr_27068_27130[(2)] = inst_27017);

(statearr_27068_27130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (18))){
var inst_27028 = (state_27045[(2)]);
var state_27045__$1 = state_27045;
var statearr_27069_27131 = state_27045__$1;
(statearr_27069_27131[(2)] = inst_27028);

(statearr_27069_27131[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (8))){
var inst_27014 = cljs.core.async.close_BANG_.call(null,to);
var state_27045__$1 = state_27045;
var statearr_27070_27132 = state_27045__$1;
(statearr_27070_27132[(2)] = inst_27014);

(statearr_27070_27132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});})(c__22071__auto__,jobs,results,process,async))
;
return ((function (switch__22009__auto__,c__22071__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0 = (function (){
var statearr_27074 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27074[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__);

(statearr_27074[(1)] = (1));

return statearr_27074;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1 = (function (state_27045){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_27045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e27075){if((e27075 instanceof Object)){
var ex__22013__auto__ = e27075;
var statearr_27076_27133 = state_27045;
(statearr_27076_27133[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27134 = state_27045;
state_27045 = G__27134;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__ = function(state_27045){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1.call(this,state_27045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto__,jobs,results,process,async))
})();
var state__22073__auto__ = (function (){var statearr_27077 = f__22072__auto__.call(null);
(statearr_27077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_27077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__,jobs,results,process,async))
);

return c__22071__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__27136 = arguments.length;
switch (G__27136) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__27139 = arguments.length;
switch (G__27139) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__27142 = arguments.length;
switch (G__27142) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22071__auto___27194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___27194,tc,fc){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___27194,tc,fc){
return (function (state_27168){
var state_val_27169 = (state_27168[(1)]);
if((state_val_27169 === (7))){
var inst_27164 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
var statearr_27170_27195 = state_27168__$1;
(statearr_27170_27195[(2)] = inst_27164);

(statearr_27170_27195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (1))){
var state_27168__$1 = state_27168;
var statearr_27171_27196 = state_27168__$1;
(statearr_27171_27196[(2)] = null);

(statearr_27171_27196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (4))){
var inst_27145 = (state_27168[(7)]);
var inst_27145__$1 = (state_27168[(2)]);
var inst_27146 = (inst_27145__$1 == null);
var state_27168__$1 = (function (){var statearr_27172 = state_27168;
(statearr_27172[(7)] = inst_27145__$1);

return statearr_27172;
})();
if(cljs.core.truth_(inst_27146)){
var statearr_27173_27197 = state_27168__$1;
(statearr_27173_27197[(1)] = (5));

} else {
var statearr_27174_27198 = state_27168__$1;
(statearr_27174_27198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (13))){
var state_27168__$1 = state_27168;
var statearr_27175_27199 = state_27168__$1;
(statearr_27175_27199[(2)] = null);

(statearr_27175_27199[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (6))){
var inst_27145 = (state_27168[(7)]);
var inst_27151 = p.call(null,inst_27145);
var state_27168__$1 = state_27168;
if(cljs.core.truth_(inst_27151)){
var statearr_27176_27200 = state_27168__$1;
(statearr_27176_27200[(1)] = (9));

} else {
var statearr_27177_27201 = state_27168__$1;
(statearr_27177_27201[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (3))){
var inst_27166 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27168__$1,inst_27166);
} else {
if((state_val_27169 === (12))){
var state_27168__$1 = state_27168;
var statearr_27178_27202 = state_27168__$1;
(statearr_27178_27202[(2)] = null);

(statearr_27178_27202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (2))){
var state_27168__$1 = state_27168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27168__$1,(4),ch);
} else {
if((state_val_27169 === (11))){
var inst_27145 = (state_27168[(7)]);
var inst_27155 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27168__$1,(8),inst_27155,inst_27145);
} else {
if((state_val_27169 === (9))){
var state_27168__$1 = state_27168;
var statearr_27179_27203 = state_27168__$1;
(statearr_27179_27203[(2)] = tc);

(statearr_27179_27203[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (5))){
var inst_27148 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27149 = cljs.core.async.close_BANG_.call(null,fc);
var state_27168__$1 = (function (){var statearr_27180 = state_27168;
(statearr_27180[(8)] = inst_27148);

return statearr_27180;
})();
var statearr_27181_27204 = state_27168__$1;
(statearr_27181_27204[(2)] = inst_27149);

(statearr_27181_27204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (14))){
var inst_27162 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
var statearr_27182_27205 = state_27168__$1;
(statearr_27182_27205[(2)] = inst_27162);

(statearr_27182_27205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (10))){
var state_27168__$1 = state_27168;
var statearr_27183_27206 = state_27168__$1;
(statearr_27183_27206[(2)] = fc);

(statearr_27183_27206[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (8))){
var inst_27157 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
if(cljs.core.truth_(inst_27157)){
var statearr_27184_27207 = state_27168__$1;
(statearr_27184_27207[(1)] = (12));

} else {
var statearr_27185_27208 = state_27168__$1;
(statearr_27185_27208[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__22071__auto___27194,tc,fc))
;
return ((function (switch__22009__auto__,c__22071__auto___27194,tc,fc){
return (function() {
var cljs$core$async$state_machine__22010__auto__ = null;
var cljs$core$async$state_machine__22010__auto____0 = (function (){
var statearr_27189 = [null,null,null,null,null,null,null,null,null];
(statearr_27189[(0)] = cljs$core$async$state_machine__22010__auto__);

(statearr_27189[(1)] = (1));

return statearr_27189;
});
var cljs$core$async$state_machine__22010__auto____1 = (function (state_27168){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_27168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e27190){if((e27190 instanceof Object)){
var ex__22013__auto__ = e27190;
var statearr_27191_27209 = state_27168;
(statearr_27191_27209[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27210 = state_27168;
state_27168 = G__27210;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$state_machine__22010__auto__ = function(state_27168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22010__auto____1.call(this,state_27168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22010__auto____0;
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22010__auto____1;
return cljs$core$async$state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___27194,tc,fc))
})();
var state__22073__auto__ = (function (){var statearr_27192 = f__22072__auto__.call(null);
(statearr_27192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___27194);

return statearr_27192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___27194,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto__){
return (function (state_27257){
var state_val_27258 = (state_27257[(1)]);
if((state_val_27258 === (7))){
var inst_27253 = (state_27257[(2)]);
var state_27257__$1 = state_27257;
var statearr_27259_27275 = state_27257__$1;
(statearr_27259_27275[(2)] = inst_27253);

(statearr_27259_27275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27258 === (6))){
var inst_27243 = (state_27257[(7)]);
var inst_27246 = (state_27257[(8)]);
var inst_27250 = f.call(null,inst_27243,inst_27246);
var inst_27243__$1 = inst_27250;
var state_27257__$1 = (function (){var statearr_27260 = state_27257;
(statearr_27260[(7)] = inst_27243__$1);

return statearr_27260;
})();
var statearr_27261_27276 = state_27257__$1;
(statearr_27261_27276[(2)] = null);

(statearr_27261_27276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27258 === (5))){
var inst_27243 = (state_27257[(7)]);
var state_27257__$1 = state_27257;
var statearr_27262_27277 = state_27257__$1;
(statearr_27262_27277[(2)] = inst_27243);

(statearr_27262_27277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27258 === (4))){
var inst_27246 = (state_27257[(8)]);
var inst_27246__$1 = (state_27257[(2)]);
var inst_27247 = (inst_27246__$1 == null);
var state_27257__$1 = (function (){var statearr_27263 = state_27257;
(statearr_27263[(8)] = inst_27246__$1);

return statearr_27263;
})();
if(cljs.core.truth_(inst_27247)){
var statearr_27264_27278 = state_27257__$1;
(statearr_27264_27278[(1)] = (5));

} else {
var statearr_27265_27279 = state_27257__$1;
(statearr_27265_27279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27258 === (3))){
var inst_27255 = (state_27257[(2)]);
var state_27257__$1 = state_27257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27257__$1,inst_27255);
} else {
if((state_val_27258 === (2))){
var state_27257__$1 = state_27257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27257__$1,(4),ch);
} else {
if((state_val_27258 === (1))){
var inst_27243 = init;
var state_27257__$1 = (function (){var statearr_27266 = state_27257;
(statearr_27266[(7)] = inst_27243);

return statearr_27266;
})();
var statearr_27267_27280 = state_27257__$1;
(statearr_27267_27280[(2)] = null);

(statearr_27267_27280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__22071__auto__))
;
return ((function (switch__22009__auto__,c__22071__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22010__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22010__auto____0 = (function (){
var statearr_27271 = [null,null,null,null,null,null,null,null,null];
(statearr_27271[(0)] = cljs$core$async$reduce_$_state_machine__22010__auto__);

(statearr_27271[(1)] = (1));

return statearr_27271;
});
var cljs$core$async$reduce_$_state_machine__22010__auto____1 = (function (state_27257){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_27257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e27272){if((e27272 instanceof Object)){
var ex__22013__auto__ = e27272;
var statearr_27273_27281 = state_27257;
(statearr_27273_27281[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27282 = state_27257;
state_27257 = G__27282;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22010__auto__ = function(state_27257){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22010__auto____1.call(this,state_27257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22010__auto____0;
cljs$core$async$reduce_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22010__auto____1;
return cljs$core$async$reduce_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto__))
})();
var state__22073__auto__ = (function (){var statearr_27274 = f__22072__auto__.call(null);
(statearr_27274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_27274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__))
);

return c__22071__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__27284 = arguments.length;
switch (G__27284) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto__){
return (function (state_27309){
var state_val_27310 = (state_27309[(1)]);
if((state_val_27310 === (7))){
var inst_27291 = (state_27309[(2)]);
var state_27309__$1 = state_27309;
var statearr_27311_27335 = state_27309__$1;
(statearr_27311_27335[(2)] = inst_27291);

(statearr_27311_27335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (1))){
var inst_27285 = cljs.core.seq.call(null,coll);
var inst_27286 = inst_27285;
var state_27309__$1 = (function (){var statearr_27312 = state_27309;
(statearr_27312[(7)] = inst_27286);

return statearr_27312;
})();
var statearr_27313_27336 = state_27309__$1;
(statearr_27313_27336[(2)] = null);

(statearr_27313_27336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (4))){
var inst_27286 = (state_27309[(7)]);
var inst_27289 = cljs.core.first.call(null,inst_27286);
var state_27309__$1 = state_27309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27309__$1,(7),ch,inst_27289);
} else {
if((state_val_27310 === (13))){
var inst_27303 = (state_27309[(2)]);
var state_27309__$1 = state_27309;
var statearr_27314_27337 = state_27309__$1;
(statearr_27314_27337[(2)] = inst_27303);

(statearr_27314_27337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (6))){
var inst_27294 = (state_27309[(2)]);
var state_27309__$1 = state_27309;
if(cljs.core.truth_(inst_27294)){
var statearr_27315_27338 = state_27309__$1;
(statearr_27315_27338[(1)] = (8));

} else {
var statearr_27316_27339 = state_27309__$1;
(statearr_27316_27339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (3))){
var inst_27307 = (state_27309[(2)]);
var state_27309__$1 = state_27309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27309__$1,inst_27307);
} else {
if((state_val_27310 === (12))){
var state_27309__$1 = state_27309;
var statearr_27317_27340 = state_27309__$1;
(statearr_27317_27340[(2)] = null);

(statearr_27317_27340[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (2))){
var inst_27286 = (state_27309[(7)]);
var state_27309__$1 = state_27309;
if(cljs.core.truth_(inst_27286)){
var statearr_27318_27341 = state_27309__$1;
(statearr_27318_27341[(1)] = (4));

} else {
var statearr_27319_27342 = state_27309__$1;
(statearr_27319_27342[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (11))){
var inst_27300 = cljs.core.async.close_BANG_.call(null,ch);
var state_27309__$1 = state_27309;
var statearr_27320_27343 = state_27309__$1;
(statearr_27320_27343[(2)] = inst_27300);

(statearr_27320_27343[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (9))){
var state_27309__$1 = state_27309;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27321_27344 = state_27309__$1;
(statearr_27321_27344[(1)] = (11));

} else {
var statearr_27322_27345 = state_27309__$1;
(statearr_27322_27345[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (5))){
var inst_27286 = (state_27309[(7)]);
var state_27309__$1 = state_27309;
var statearr_27323_27346 = state_27309__$1;
(statearr_27323_27346[(2)] = inst_27286);

(statearr_27323_27346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (10))){
var inst_27305 = (state_27309[(2)]);
var state_27309__$1 = state_27309;
var statearr_27324_27347 = state_27309__$1;
(statearr_27324_27347[(2)] = inst_27305);

(statearr_27324_27347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (8))){
var inst_27286 = (state_27309[(7)]);
var inst_27296 = cljs.core.next.call(null,inst_27286);
var inst_27286__$1 = inst_27296;
var state_27309__$1 = (function (){var statearr_27325 = state_27309;
(statearr_27325[(7)] = inst_27286__$1);

return statearr_27325;
})();
var statearr_27326_27348 = state_27309__$1;
(statearr_27326_27348[(2)] = null);

(statearr_27326_27348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__22071__auto__))
;
return ((function (switch__22009__auto__,c__22071__auto__){
return (function() {
var cljs$core$async$state_machine__22010__auto__ = null;
var cljs$core$async$state_machine__22010__auto____0 = (function (){
var statearr_27330 = [null,null,null,null,null,null,null,null];
(statearr_27330[(0)] = cljs$core$async$state_machine__22010__auto__);

(statearr_27330[(1)] = (1));

return statearr_27330;
});
var cljs$core$async$state_machine__22010__auto____1 = (function (state_27309){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_27309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e27331){if((e27331 instanceof Object)){
var ex__22013__auto__ = e27331;
var statearr_27332_27349 = state_27309;
(statearr_27332_27349[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27350 = state_27309;
state_27309 = G__27350;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$state_machine__22010__auto__ = function(state_27309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22010__auto____1.call(this,state_27309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22010__auto____0;
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22010__auto____1;
return cljs$core$async$state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto__))
})();
var state__22073__auto__ = (function (){var statearr_27333 = f__22072__auto__.call(null);
(statearr_27333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_27333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__))
);

return c__22071__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj27352 = {};
return obj27352;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18148__auto__ = _;
if(and__18148__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18148__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18796__auto__ = (((_ == null))?null:_);
return (function (){var or__18160__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj27354 = {};
return obj27354;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t27576 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27576 = (function (cs,ch,mult,meta27577){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27577 = meta27577;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27576.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27576.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27576.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27576.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27576.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27576.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27576.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27578){
var self__ = this;
var _27578__$1 = this;
return self__.meta27577;
});})(cs))
;

cljs.core.async.t27576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27578,meta27577__$1){
var self__ = this;
var _27578__$1 = this;
return (new cljs.core.async.t27576(self__.cs,self__.ch,self__.mult,meta27577__$1));
});})(cs))
;

cljs.core.async.t27576.cljs$lang$type = true;

cljs.core.async.t27576.cljs$lang$ctorStr = "cljs.core.async/t27576";

cljs.core.async.t27576.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t27576");
});})(cs))
;

cljs.core.async.__GT_t27576 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t27576(cs__$1,ch__$1,mult__$1,meta27577){
return (new cljs.core.async.t27576(cs__$1,ch__$1,mult__$1,meta27577));
});})(cs))
;

}

return (new cljs.core.async.t27576(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22071__auto___27797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___27797,cs,m,dchan,dctr,done){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___27797,cs,m,dchan,dctr,done){
return (function (state_27709){
var state_val_27710 = (state_27709[(1)]);
if((state_val_27710 === (7))){
var inst_27705 = (state_27709[(2)]);
var state_27709__$1 = state_27709;
var statearr_27711_27798 = state_27709__$1;
(statearr_27711_27798[(2)] = inst_27705);

(statearr_27711_27798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (20))){
var inst_27610 = (state_27709[(7)]);
var inst_27620 = cljs.core.first.call(null,inst_27610);
var inst_27621 = cljs.core.nth.call(null,inst_27620,(0),null);
var inst_27622 = cljs.core.nth.call(null,inst_27620,(1),null);
var state_27709__$1 = (function (){var statearr_27712 = state_27709;
(statearr_27712[(8)] = inst_27621);

return statearr_27712;
})();
if(cljs.core.truth_(inst_27622)){
var statearr_27713_27799 = state_27709__$1;
(statearr_27713_27799[(1)] = (22));

} else {
var statearr_27714_27800 = state_27709__$1;
(statearr_27714_27800[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (27))){
var inst_27581 = (state_27709[(9)]);
var inst_27657 = (state_27709[(10)]);
var inst_27652 = (state_27709[(11)]);
var inst_27650 = (state_27709[(12)]);
var inst_27657__$1 = cljs.core._nth.call(null,inst_27650,inst_27652);
var inst_27658 = cljs.core.async.put_BANG_.call(null,inst_27657__$1,inst_27581,done);
var state_27709__$1 = (function (){var statearr_27715 = state_27709;
(statearr_27715[(10)] = inst_27657__$1);

return statearr_27715;
})();
if(cljs.core.truth_(inst_27658)){
var statearr_27716_27801 = state_27709__$1;
(statearr_27716_27801[(1)] = (30));

} else {
var statearr_27717_27802 = state_27709__$1;
(statearr_27717_27802[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (1))){
var state_27709__$1 = state_27709;
var statearr_27718_27803 = state_27709__$1;
(statearr_27718_27803[(2)] = null);

(statearr_27718_27803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (24))){
var inst_27610 = (state_27709[(7)]);
var inst_27627 = (state_27709[(2)]);
var inst_27628 = cljs.core.next.call(null,inst_27610);
var inst_27590 = inst_27628;
var inst_27591 = null;
var inst_27592 = (0);
var inst_27593 = (0);
var state_27709__$1 = (function (){var statearr_27719 = state_27709;
(statearr_27719[(13)] = inst_27590);

(statearr_27719[(14)] = inst_27593);

(statearr_27719[(15)] = inst_27591);

(statearr_27719[(16)] = inst_27627);

(statearr_27719[(17)] = inst_27592);

return statearr_27719;
})();
var statearr_27720_27804 = state_27709__$1;
(statearr_27720_27804[(2)] = null);

(statearr_27720_27804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (39))){
var state_27709__$1 = state_27709;
var statearr_27724_27805 = state_27709__$1;
(statearr_27724_27805[(2)] = null);

(statearr_27724_27805[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (4))){
var inst_27581 = (state_27709[(9)]);
var inst_27581__$1 = (state_27709[(2)]);
var inst_27582 = (inst_27581__$1 == null);
var state_27709__$1 = (function (){var statearr_27725 = state_27709;
(statearr_27725[(9)] = inst_27581__$1);

return statearr_27725;
})();
if(cljs.core.truth_(inst_27582)){
var statearr_27726_27806 = state_27709__$1;
(statearr_27726_27806[(1)] = (5));

} else {
var statearr_27727_27807 = state_27709__$1;
(statearr_27727_27807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (15))){
var inst_27590 = (state_27709[(13)]);
var inst_27593 = (state_27709[(14)]);
var inst_27591 = (state_27709[(15)]);
var inst_27592 = (state_27709[(17)]);
var inst_27606 = (state_27709[(2)]);
var inst_27607 = (inst_27593 + (1));
var tmp27721 = inst_27590;
var tmp27722 = inst_27591;
var tmp27723 = inst_27592;
var inst_27590__$1 = tmp27721;
var inst_27591__$1 = tmp27722;
var inst_27592__$1 = tmp27723;
var inst_27593__$1 = inst_27607;
var state_27709__$1 = (function (){var statearr_27728 = state_27709;
(statearr_27728[(13)] = inst_27590__$1);

(statearr_27728[(14)] = inst_27593__$1);

(statearr_27728[(15)] = inst_27591__$1);

(statearr_27728[(18)] = inst_27606);

(statearr_27728[(17)] = inst_27592__$1);

return statearr_27728;
})();
var statearr_27729_27808 = state_27709__$1;
(statearr_27729_27808[(2)] = null);

(statearr_27729_27808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (21))){
var inst_27631 = (state_27709[(2)]);
var state_27709__$1 = state_27709;
var statearr_27733_27809 = state_27709__$1;
(statearr_27733_27809[(2)] = inst_27631);

(statearr_27733_27809[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (31))){
var inst_27657 = (state_27709[(10)]);
var inst_27661 = done.call(null,null);
var inst_27662 = cljs.core.async.untap_STAR_.call(null,m,inst_27657);
var state_27709__$1 = (function (){var statearr_27734 = state_27709;
(statearr_27734[(19)] = inst_27661);

return statearr_27734;
})();
var statearr_27735_27810 = state_27709__$1;
(statearr_27735_27810[(2)] = inst_27662);

(statearr_27735_27810[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (32))){
var inst_27651 = (state_27709[(20)]);
var inst_27652 = (state_27709[(11)]);
var inst_27649 = (state_27709[(21)]);
var inst_27650 = (state_27709[(12)]);
var inst_27664 = (state_27709[(2)]);
var inst_27665 = (inst_27652 + (1));
var tmp27730 = inst_27651;
var tmp27731 = inst_27649;
var tmp27732 = inst_27650;
var inst_27649__$1 = tmp27731;
var inst_27650__$1 = tmp27732;
var inst_27651__$1 = tmp27730;
var inst_27652__$1 = inst_27665;
var state_27709__$1 = (function (){var statearr_27736 = state_27709;
(statearr_27736[(22)] = inst_27664);

(statearr_27736[(20)] = inst_27651__$1);

(statearr_27736[(11)] = inst_27652__$1);

(statearr_27736[(21)] = inst_27649__$1);

(statearr_27736[(12)] = inst_27650__$1);

return statearr_27736;
})();
var statearr_27737_27811 = state_27709__$1;
(statearr_27737_27811[(2)] = null);

(statearr_27737_27811[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (40))){
var inst_27677 = (state_27709[(23)]);
var inst_27681 = done.call(null,null);
var inst_27682 = cljs.core.async.untap_STAR_.call(null,m,inst_27677);
var state_27709__$1 = (function (){var statearr_27738 = state_27709;
(statearr_27738[(24)] = inst_27681);

return statearr_27738;
})();
var statearr_27739_27812 = state_27709__$1;
(statearr_27739_27812[(2)] = inst_27682);

(statearr_27739_27812[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (33))){
var inst_27668 = (state_27709[(25)]);
var inst_27670 = cljs.core.chunked_seq_QMARK_.call(null,inst_27668);
var state_27709__$1 = state_27709;
if(inst_27670){
var statearr_27740_27813 = state_27709__$1;
(statearr_27740_27813[(1)] = (36));

} else {
var statearr_27741_27814 = state_27709__$1;
(statearr_27741_27814[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (13))){
var inst_27600 = (state_27709[(26)]);
var inst_27603 = cljs.core.async.close_BANG_.call(null,inst_27600);
var state_27709__$1 = state_27709;
var statearr_27742_27815 = state_27709__$1;
(statearr_27742_27815[(2)] = inst_27603);

(statearr_27742_27815[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (22))){
var inst_27621 = (state_27709[(8)]);
var inst_27624 = cljs.core.async.close_BANG_.call(null,inst_27621);
var state_27709__$1 = state_27709;
var statearr_27743_27816 = state_27709__$1;
(statearr_27743_27816[(2)] = inst_27624);

(statearr_27743_27816[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (36))){
var inst_27668 = (state_27709[(25)]);
var inst_27672 = cljs.core.chunk_first.call(null,inst_27668);
var inst_27673 = cljs.core.chunk_rest.call(null,inst_27668);
var inst_27674 = cljs.core.count.call(null,inst_27672);
var inst_27649 = inst_27673;
var inst_27650 = inst_27672;
var inst_27651 = inst_27674;
var inst_27652 = (0);
var state_27709__$1 = (function (){var statearr_27744 = state_27709;
(statearr_27744[(20)] = inst_27651);

(statearr_27744[(11)] = inst_27652);

(statearr_27744[(21)] = inst_27649);

(statearr_27744[(12)] = inst_27650);

return statearr_27744;
})();
var statearr_27745_27817 = state_27709__$1;
(statearr_27745_27817[(2)] = null);

(statearr_27745_27817[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (41))){
var inst_27668 = (state_27709[(25)]);
var inst_27684 = (state_27709[(2)]);
var inst_27685 = cljs.core.next.call(null,inst_27668);
var inst_27649 = inst_27685;
var inst_27650 = null;
var inst_27651 = (0);
var inst_27652 = (0);
var state_27709__$1 = (function (){var statearr_27746 = state_27709;
(statearr_27746[(20)] = inst_27651);

(statearr_27746[(27)] = inst_27684);

(statearr_27746[(11)] = inst_27652);

(statearr_27746[(21)] = inst_27649);

(statearr_27746[(12)] = inst_27650);

return statearr_27746;
})();
var statearr_27747_27818 = state_27709__$1;
(statearr_27747_27818[(2)] = null);

(statearr_27747_27818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (43))){
var state_27709__$1 = state_27709;
var statearr_27748_27819 = state_27709__$1;
(statearr_27748_27819[(2)] = null);

(statearr_27748_27819[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (29))){
var inst_27693 = (state_27709[(2)]);
var state_27709__$1 = state_27709;
var statearr_27749_27820 = state_27709__$1;
(statearr_27749_27820[(2)] = inst_27693);

(statearr_27749_27820[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (44))){
var inst_27702 = (state_27709[(2)]);
var state_27709__$1 = (function (){var statearr_27750 = state_27709;
(statearr_27750[(28)] = inst_27702);

return statearr_27750;
})();
var statearr_27751_27821 = state_27709__$1;
(statearr_27751_27821[(2)] = null);

(statearr_27751_27821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (6))){
var inst_27641 = (state_27709[(29)]);
var inst_27640 = cljs.core.deref.call(null,cs);
var inst_27641__$1 = cljs.core.keys.call(null,inst_27640);
var inst_27642 = cljs.core.count.call(null,inst_27641__$1);
var inst_27643 = cljs.core.reset_BANG_.call(null,dctr,inst_27642);
var inst_27648 = cljs.core.seq.call(null,inst_27641__$1);
var inst_27649 = inst_27648;
var inst_27650 = null;
var inst_27651 = (0);
var inst_27652 = (0);
var state_27709__$1 = (function (){var statearr_27752 = state_27709;
(statearr_27752[(20)] = inst_27651);

(statearr_27752[(11)] = inst_27652);

(statearr_27752[(21)] = inst_27649);

(statearr_27752[(12)] = inst_27650);

(statearr_27752[(29)] = inst_27641__$1);

(statearr_27752[(30)] = inst_27643);

return statearr_27752;
})();
var statearr_27753_27822 = state_27709__$1;
(statearr_27753_27822[(2)] = null);

(statearr_27753_27822[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (28))){
var inst_27649 = (state_27709[(21)]);
var inst_27668 = (state_27709[(25)]);
var inst_27668__$1 = cljs.core.seq.call(null,inst_27649);
var state_27709__$1 = (function (){var statearr_27754 = state_27709;
(statearr_27754[(25)] = inst_27668__$1);

return statearr_27754;
})();
if(inst_27668__$1){
var statearr_27755_27823 = state_27709__$1;
(statearr_27755_27823[(1)] = (33));

} else {
var statearr_27756_27824 = state_27709__$1;
(statearr_27756_27824[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (25))){
var inst_27651 = (state_27709[(20)]);
var inst_27652 = (state_27709[(11)]);
var inst_27654 = (inst_27652 < inst_27651);
var inst_27655 = inst_27654;
var state_27709__$1 = state_27709;
if(cljs.core.truth_(inst_27655)){
var statearr_27757_27825 = state_27709__$1;
(statearr_27757_27825[(1)] = (27));

} else {
var statearr_27758_27826 = state_27709__$1;
(statearr_27758_27826[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (34))){
var state_27709__$1 = state_27709;
var statearr_27759_27827 = state_27709__$1;
(statearr_27759_27827[(2)] = null);

(statearr_27759_27827[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (17))){
var state_27709__$1 = state_27709;
var statearr_27760_27828 = state_27709__$1;
(statearr_27760_27828[(2)] = null);

(statearr_27760_27828[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (3))){
var inst_27707 = (state_27709[(2)]);
var state_27709__$1 = state_27709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27709__$1,inst_27707);
} else {
if((state_val_27710 === (12))){
var inst_27636 = (state_27709[(2)]);
var state_27709__$1 = state_27709;
var statearr_27761_27829 = state_27709__$1;
(statearr_27761_27829[(2)] = inst_27636);

(statearr_27761_27829[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (2))){
var state_27709__$1 = state_27709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27709__$1,(4),ch);
} else {
if((state_val_27710 === (23))){
var state_27709__$1 = state_27709;
var statearr_27762_27830 = state_27709__$1;
(statearr_27762_27830[(2)] = null);

(statearr_27762_27830[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (35))){
var inst_27691 = (state_27709[(2)]);
var state_27709__$1 = state_27709;
var statearr_27763_27831 = state_27709__$1;
(statearr_27763_27831[(2)] = inst_27691);

(statearr_27763_27831[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (19))){
var inst_27610 = (state_27709[(7)]);
var inst_27614 = cljs.core.chunk_first.call(null,inst_27610);
var inst_27615 = cljs.core.chunk_rest.call(null,inst_27610);
var inst_27616 = cljs.core.count.call(null,inst_27614);
var inst_27590 = inst_27615;
var inst_27591 = inst_27614;
var inst_27592 = inst_27616;
var inst_27593 = (0);
var state_27709__$1 = (function (){var statearr_27764 = state_27709;
(statearr_27764[(13)] = inst_27590);

(statearr_27764[(14)] = inst_27593);

(statearr_27764[(15)] = inst_27591);

(statearr_27764[(17)] = inst_27592);

return statearr_27764;
})();
var statearr_27765_27832 = state_27709__$1;
(statearr_27765_27832[(2)] = null);

(statearr_27765_27832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (11))){
var inst_27590 = (state_27709[(13)]);
var inst_27610 = (state_27709[(7)]);
var inst_27610__$1 = cljs.core.seq.call(null,inst_27590);
var state_27709__$1 = (function (){var statearr_27766 = state_27709;
(statearr_27766[(7)] = inst_27610__$1);

return statearr_27766;
})();
if(inst_27610__$1){
var statearr_27767_27833 = state_27709__$1;
(statearr_27767_27833[(1)] = (16));

} else {
var statearr_27768_27834 = state_27709__$1;
(statearr_27768_27834[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (9))){
var inst_27638 = (state_27709[(2)]);
var state_27709__$1 = state_27709;
var statearr_27769_27835 = state_27709__$1;
(statearr_27769_27835[(2)] = inst_27638);

(statearr_27769_27835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (5))){
var inst_27588 = cljs.core.deref.call(null,cs);
var inst_27589 = cljs.core.seq.call(null,inst_27588);
var inst_27590 = inst_27589;
var inst_27591 = null;
var inst_27592 = (0);
var inst_27593 = (0);
var state_27709__$1 = (function (){var statearr_27770 = state_27709;
(statearr_27770[(13)] = inst_27590);

(statearr_27770[(14)] = inst_27593);

(statearr_27770[(15)] = inst_27591);

(statearr_27770[(17)] = inst_27592);

return statearr_27770;
})();
var statearr_27771_27836 = state_27709__$1;
(statearr_27771_27836[(2)] = null);

(statearr_27771_27836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (14))){
var state_27709__$1 = state_27709;
var statearr_27772_27837 = state_27709__$1;
(statearr_27772_27837[(2)] = null);

(statearr_27772_27837[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (45))){
var inst_27699 = (state_27709[(2)]);
var state_27709__$1 = state_27709;
var statearr_27773_27838 = state_27709__$1;
(statearr_27773_27838[(2)] = inst_27699);

(statearr_27773_27838[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (26))){
var inst_27641 = (state_27709[(29)]);
var inst_27695 = (state_27709[(2)]);
var inst_27696 = cljs.core.seq.call(null,inst_27641);
var state_27709__$1 = (function (){var statearr_27774 = state_27709;
(statearr_27774[(31)] = inst_27695);

return statearr_27774;
})();
if(inst_27696){
var statearr_27775_27839 = state_27709__$1;
(statearr_27775_27839[(1)] = (42));

} else {
var statearr_27776_27840 = state_27709__$1;
(statearr_27776_27840[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (16))){
var inst_27610 = (state_27709[(7)]);
var inst_27612 = cljs.core.chunked_seq_QMARK_.call(null,inst_27610);
var state_27709__$1 = state_27709;
if(inst_27612){
var statearr_27777_27841 = state_27709__$1;
(statearr_27777_27841[(1)] = (19));

} else {
var statearr_27778_27842 = state_27709__$1;
(statearr_27778_27842[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (38))){
var inst_27688 = (state_27709[(2)]);
var state_27709__$1 = state_27709;
var statearr_27779_27843 = state_27709__$1;
(statearr_27779_27843[(2)] = inst_27688);

(statearr_27779_27843[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (30))){
var state_27709__$1 = state_27709;
var statearr_27780_27844 = state_27709__$1;
(statearr_27780_27844[(2)] = null);

(statearr_27780_27844[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (10))){
var inst_27593 = (state_27709[(14)]);
var inst_27591 = (state_27709[(15)]);
var inst_27599 = cljs.core._nth.call(null,inst_27591,inst_27593);
var inst_27600 = cljs.core.nth.call(null,inst_27599,(0),null);
var inst_27601 = cljs.core.nth.call(null,inst_27599,(1),null);
var state_27709__$1 = (function (){var statearr_27781 = state_27709;
(statearr_27781[(26)] = inst_27600);

return statearr_27781;
})();
if(cljs.core.truth_(inst_27601)){
var statearr_27782_27845 = state_27709__$1;
(statearr_27782_27845[(1)] = (13));

} else {
var statearr_27783_27846 = state_27709__$1;
(statearr_27783_27846[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (18))){
var inst_27634 = (state_27709[(2)]);
var state_27709__$1 = state_27709;
var statearr_27784_27847 = state_27709__$1;
(statearr_27784_27847[(2)] = inst_27634);

(statearr_27784_27847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (42))){
var state_27709__$1 = state_27709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27709__$1,(45),dchan);
} else {
if((state_val_27710 === (37))){
var inst_27581 = (state_27709[(9)]);
var inst_27677 = (state_27709[(23)]);
var inst_27668 = (state_27709[(25)]);
var inst_27677__$1 = cljs.core.first.call(null,inst_27668);
var inst_27678 = cljs.core.async.put_BANG_.call(null,inst_27677__$1,inst_27581,done);
var state_27709__$1 = (function (){var statearr_27785 = state_27709;
(statearr_27785[(23)] = inst_27677__$1);

return statearr_27785;
})();
if(cljs.core.truth_(inst_27678)){
var statearr_27786_27848 = state_27709__$1;
(statearr_27786_27848[(1)] = (39));

} else {
var statearr_27787_27849 = state_27709__$1;
(statearr_27787_27849[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (8))){
var inst_27593 = (state_27709[(14)]);
var inst_27592 = (state_27709[(17)]);
var inst_27595 = (inst_27593 < inst_27592);
var inst_27596 = inst_27595;
var state_27709__$1 = state_27709;
if(cljs.core.truth_(inst_27596)){
var statearr_27788_27850 = state_27709__$1;
(statearr_27788_27850[(1)] = (10));

} else {
var statearr_27789_27851 = state_27709__$1;
(statearr_27789_27851[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
});})(c__22071__auto___27797,cs,m,dchan,dctr,done))
;
return ((function (switch__22009__auto__,c__22071__auto___27797,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22010__auto__ = null;
var cljs$core$async$mult_$_state_machine__22010__auto____0 = (function (){
var statearr_27793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27793[(0)] = cljs$core$async$mult_$_state_machine__22010__auto__);

(statearr_27793[(1)] = (1));

return statearr_27793;
});
var cljs$core$async$mult_$_state_machine__22010__auto____1 = (function (state_27709){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_27709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e27794){if((e27794 instanceof Object)){
var ex__22013__auto__ = e27794;
var statearr_27795_27852 = state_27709;
(statearr_27795_27852[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27853 = state_27709;
state_27709 = G__27853;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22010__auto__ = function(state_27709){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22010__auto____1.call(this,state_27709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22010__auto____0;
cljs$core$async$mult_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22010__auto____1;
return cljs$core$async$mult_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___27797,cs,m,dchan,dctr,done))
})();
var state__22073__auto__ = (function (){var statearr_27796 = f__22072__auto__.call(null);
(statearr_27796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___27797);

return statearr_27796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___27797,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__27855 = arguments.length;
switch (G__27855) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj27858 = {};
return obj27858;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19200__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19200__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27863){
var map__27864 = p__27863;
var map__27864__$1 = ((cljs.core.seq_QMARK_.call(null,map__27864))?cljs.core.apply.call(null,cljs.core.hash_map,map__27864):map__27864);
var opts = map__27864__$1;
var statearr_27865_27868 = state;
(statearr_27865_27868[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__27864,map__27864__$1,opts){
return (function (val){
var statearr_27866_27869 = state;
(statearr_27866_27869[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27864,map__27864__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_27867_27870 = state;
(statearr_27867_27870[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27859){
var G__27860 = cljs.core.first.call(null,seq27859);
var seq27859__$1 = cljs.core.next.call(null,seq27859);
var G__27861 = cljs.core.first.call(null,seq27859__$1);
var seq27859__$2 = cljs.core.next.call(null,seq27859__$1);
var G__27862 = cljs.core.first.call(null,seq27859__$2);
var seq27859__$3 = cljs.core.next.call(null,seq27859__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27860,G__27861,G__27862,seq27859__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t27990 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27990 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27991){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27991 = meta27991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27990.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27990.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27990.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27990.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27990.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27990.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27990.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27990.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27990.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27992){
var self__ = this;
var _27992__$1 = this;
return self__.meta27991;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27992,meta27991__$1){
var self__ = this;
var _27992__$1 = this;
return (new cljs.core.async.t27990(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27991__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27990.cljs$lang$type = true;

cljs.core.async.t27990.cljs$lang$ctorStr = "cljs.core.async/t27990";

cljs.core.async.t27990.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t27990");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27990 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t27990(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27991){
return (new cljs.core.async.t27990(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27991));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27990(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22071__auto___28109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___28109,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___28109,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28062){
var state_val_28063 = (state_28062[(1)]);
if((state_val_28063 === (7))){
var inst_28006 = (state_28062[(7)]);
var inst_28011 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28006);
var state_28062__$1 = state_28062;
var statearr_28064_28110 = state_28062__$1;
(statearr_28064_28110[(2)] = inst_28011);

(statearr_28064_28110[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (20))){
var inst_28021 = (state_28062[(8)]);
var state_28062__$1 = state_28062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28062__$1,(23),out,inst_28021);
} else {
if((state_val_28063 === (1))){
var inst_27996 = (state_28062[(9)]);
var inst_27996__$1 = calc_state.call(null);
var inst_27997 = cljs.core.seq_QMARK_.call(null,inst_27996__$1);
var state_28062__$1 = (function (){var statearr_28065 = state_28062;
(statearr_28065[(9)] = inst_27996__$1);

return statearr_28065;
})();
if(inst_27997){
var statearr_28066_28111 = state_28062__$1;
(statearr_28066_28111[(1)] = (2));

} else {
var statearr_28067_28112 = state_28062__$1;
(statearr_28067_28112[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (24))){
var inst_28014 = (state_28062[(10)]);
var inst_28006 = inst_28014;
var state_28062__$1 = (function (){var statearr_28068 = state_28062;
(statearr_28068[(7)] = inst_28006);

return statearr_28068;
})();
var statearr_28069_28113 = state_28062__$1;
(statearr_28069_28113[(2)] = null);

(statearr_28069_28113[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (4))){
var inst_27996 = (state_28062[(9)]);
var inst_28002 = (state_28062[(2)]);
var inst_28003 = cljs.core.get.call(null,inst_28002,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28004 = cljs.core.get.call(null,inst_28002,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28005 = cljs.core.get.call(null,inst_28002,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28006 = inst_27996;
var state_28062__$1 = (function (){var statearr_28070 = state_28062;
(statearr_28070[(7)] = inst_28006);

(statearr_28070[(11)] = inst_28003);

(statearr_28070[(12)] = inst_28004);

(statearr_28070[(13)] = inst_28005);

return statearr_28070;
})();
var statearr_28071_28114 = state_28062__$1;
(statearr_28071_28114[(2)] = null);

(statearr_28071_28114[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (15))){
var state_28062__$1 = state_28062;
var statearr_28072_28115 = state_28062__$1;
(statearr_28072_28115[(2)] = null);

(statearr_28072_28115[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (21))){
var inst_28014 = (state_28062[(10)]);
var inst_28006 = inst_28014;
var state_28062__$1 = (function (){var statearr_28073 = state_28062;
(statearr_28073[(7)] = inst_28006);

return statearr_28073;
})();
var statearr_28074_28116 = state_28062__$1;
(statearr_28074_28116[(2)] = null);

(statearr_28074_28116[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (13))){
var inst_28058 = (state_28062[(2)]);
var state_28062__$1 = state_28062;
var statearr_28075_28117 = state_28062__$1;
(statearr_28075_28117[(2)] = inst_28058);

(statearr_28075_28117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (22))){
var inst_28056 = (state_28062[(2)]);
var state_28062__$1 = state_28062;
var statearr_28076_28118 = state_28062__$1;
(statearr_28076_28118[(2)] = inst_28056);

(statearr_28076_28118[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (6))){
var inst_28060 = (state_28062[(2)]);
var state_28062__$1 = state_28062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28062__$1,inst_28060);
} else {
if((state_val_28063 === (25))){
var state_28062__$1 = state_28062;
var statearr_28077_28119 = state_28062__$1;
(statearr_28077_28119[(2)] = null);

(statearr_28077_28119[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (17))){
var inst_28036 = (state_28062[(14)]);
var state_28062__$1 = state_28062;
var statearr_28078_28120 = state_28062__$1;
(statearr_28078_28120[(2)] = inst_28036);

(statearr_28078_28120[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (3))){
var inst_27996 = (state_28062[(9)]);
var state_28062__$1 = state_28062;
var statearr_28079_28121 = state_28062__$1;
(statearr_28079_28121[(2)] = inst_27996);

(statearr_28079_28121[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (12))){
var inst_28022 = (state_28062[(15)]);
var inst_28017 = (state_28062[(16)]);
var inst_28036 = (state_28062[(14)]);
var inst_28036__$1 = inst_28017.call(null,inst_28022);
var state_28062__$1 = (function (){var statearr_28080 = state_28062;
(statearr_28080[(14)] = inst_28036__$1);

return statearr_28080;
})();
if(cljs.core.truth_(inst_28036__$1)){
var statearr_28081_28122 = state_28062__$1;
(statearr_28081_28122[(1)] = (17));

} else {
var statearr_28082_28123 = state_28062__$1;
(statearr_28082_28123[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (2))){
var inst_27996 = (state_28062[(9)]);
var inst_27999 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27996);
var state_28062__$1 = state_28062;
var statearr_28083_28124 = state_28062__$1;
(statearr_28083_28124[(2)] = inst_27999);

(statearr_28083_28124[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (23))){
var inst_28047 = (state_28062[(2)]);
var state_28062__$1 = state_28062;
if(cljs.core.truth_(inst_28047)){
var statearr_28084_28125 = state_28062__$1;
(statearr_28084_28125[(1)] = (24));

} else {
var statearr_28085_28126 = state_28062__$1;
(statearr_28085_28126[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (19))){
var inst_28044 = (state_28062[(2)]);
var state_28062__$1 = state_28062;
if(cljs.core.truth_(inst_28044)){
var statearr_28086_28127 = state_28062__$1;
(statearr_28086_28127[(1)] = (20));

} else {
var statearr_28087_28128 = state_28062__$1;
(statearr_28087_28128[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (11))){
var inst_28021 = (state_28062[(8)]);
var inst_28027 = (inst_28021 == null);
var state_28062__$1 = state_28062;
if(cljs.core.truth_(inst_28027)){
var statearr_28088_28129 = state_28062__$1;
(statearr_28088_28129[(1)] = (14));

} else {
var statearr_28089_28130 = state_28062__$1;
(statearr_28089_28130[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (9))){
var inst_28014 = (state_28062[(10)]);
var inst_28014__$1 = (state_28062[(2)]);
var inst_28015 = cljs.core.get.call(null,inst_28014__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28016 = cljs.core.get.call(null,inst_28014__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28017 = cljs.core.get.call(null,inst_28014__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_28062__$1 = (function (){var statearr_28090 = state_28062;
(statearr_28090[(16)] = inst_28017);

(statearr_28090[(10)] = inst_28014__$1);

(statearr_28090[(17)] = inst_28016);

return statearr_28090;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28062__$1,(10),inst_28015);
} else {
if((state_val_28063 === (5))){
var inst_28006 = (state_28062[(7)]);
var inst_28009 = cljs.core.seq_QMARK_.call(null,inst_28006);
var state_28062__$1 = state_28062;
if(inst_28009){
var statearr_28091_28131 = state_28062__$1;
(statearr_28091_28131[(1)] = (7));

} else {
var statearr_28092_28132 = state_28062__$1;
(statearr_28092_28132[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (14))){
var inst_28022 = (state_28062[(15)]);
var inst_28029 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28022);
var state_28062__$1 = state_28062;
var statearr_28093_28133 = state_28062__$1;
(statearr_28093_28133[(2)] = inst_28029);

(statearr_28093_28133[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (26))){
var inst_28052 = (state_28062[(2)]);
var state_28062__$1 = state_28062;
var statearr_28094_28134 = state_28062__$1;
(statearr_28094_28134[(2)] = inst_28052);

(statearr_28094_28134[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (16))){
var inst_28032 = (state_28062[(2)]);
var inst_28033 = calc_state.call(null);
var inst_28006 = inst_28033;
var state_28062__$1 = (function (){var statearr_28095 = state_28062;
(statearr_28095[(7)] = inst_28006);

(statearr_28095[(18)] = inst_28032);

return statearr_28095;
})();
var statearr_28096_28135 = state_28062__$1;
(statearr_28096_28135[(2)] = null);

(statearr_28096_28135[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (10))){
var inst_28022 = (state_28062[(15)]);
var inst_28021 = (state_28062[(8)]);
var inst_28020 = (state_28062[(2)]);
var inst_28021__$1 = cljs.core.nth.call(null,inst_28020,(0),null);
var inst_28022__$1 = cljs.core.nth.call(null,inst_28020,(1),null);
var inst_28023 = (inst_28021__$1 == null);
var inst_28024 = cljs.core._EQ_.call(null,inst_28022__$1,change);
var inst_28025 = (inst_28023) || (inst_28024);
var state_28062__$1 = (function (){var statearr_28097 = state_28062;
(statearr_28097[(15)] = inst_28022__$1);

(statearr_28097[(8)] = inst_28021__$1);

return statearr_28097;
})();
if(cljs.core.truth_(inst_28025)){
var statearr_28098_28136 = state_28062__$1;
(statearr_28098_28136[(1)] = (11));

} else {
var statearr_28099_28137 = state_28062__$1;
(statearr_28099_28137[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (18))){
var inst_28022 = (state_28062[(15)]);
var inst_28017 = (state_28062[(16)]);
var inst_28016 = (state_28062[(17)]);
var inst_28039 = cljs.core.empty_QMARK_.call(null,inst_28017);
var inst_28040 = inst_28016.call(null,inst_28022);
var inst_28041 = cljs.core.not.call(null,inst_28040);
var inst_28042 = (inst_28039) && (inst_28041);
var state_28062__$1 = state_28062;
var statearr_28100_28138 = state_28062__$1;
(statearr_28100_28138[(2)] = inst_28042);

(statearr_28100_28138[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (8))){
var inst_28006 = (state_28062[(7)]);
var state_28062__$1 = state_28062;
var statearr_28101_28139 = state_28062__$1;
(statearr_28101_28139[(2)] = inst_28006);

(statearr_28101_28139[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
});})(c__22071__auto___28109,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22009__auto__,c__22071__auto___28109,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22010__auto__ = null;
var cljs$core$async$mix_$_state_machine__22010__auto____0 = (function (){
var statearr_28105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28105[(0)] = cljs$core$async$mix_$_state_machine__22010__auto__);

(statearr_28105[(1)] = (1));

return statearr_28105;
});
var cljs$core$async$mix_$_state_machine__22010__auto____1 = (function (state_28062){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_28062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e28106){if((e28106 instanceof Object)){
var ex__22013__auto__ = e28106;
var statearr_28107_28140 = state_28062;
(statearr_28107_28140[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28141 = state_28062;
state_28062 = G__28141;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22010__auto__ = function(state_28062){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22010__auto____1.call(this,state_28062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22010__auto____0;
cljs$core$async$mix_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22010__auto____1;
return cljs$core$async$mix_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___28109,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22073__auto__ = (function (){var statearr_28108 = f__22072__auto__.call(null);
(statearr_28108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___28109);

return statearr_28108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___28109,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj28143 = {};
return obj28143;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18148__auto__ = p;
if(and__18148__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18148__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18796__auto__ = (((p == null))?null:p);
return (function (){var or__18160__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18148__auto__ = p;
if(and__18148__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18148__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18796__auto__ = (((p == null))?null:p);
return (function (){var or__18160__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__28145 = arguments.length;
switch (G__28145) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18148__auto__ = p;
if(and__18148__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18148__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18796__auto__ = (((p == null))?null:p);
return (function (){var or__18160__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18148__auto__ = p;
if(and__18148__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18148__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18796__auto__ = (((p == null))?null:p);
return (function (){var or__18160__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__28149 = arguments.length;
switch (G__28149) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18160__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18160__auto__,mults){
return (function (p1__28147_SHARP_){
if(cljs.core.truth_(p1__28147_SHARP_.call(null,topic))){
return p1__28147_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28147_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18160__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28150 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28150 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta28151){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta28151 = meta28151;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28150.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28150.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28150.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t28150.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28150.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28150.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28150.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28150.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28152){
var self__ = this;
var _28152__$1 = this;
return self__.meta28151;
});})(mults,ensure_mult))
;

cljs.core.async.t28150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28152,meta28151__$1){
var self__ = this;
var _28152__$1 = this;
return (new cljs.core.async.t28150(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta28151__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28150.cljs$lang$type = true;

cljs.core.async.t28150.cljs$lang$ctorStr = "cljs.core.async/t28150";

cljs.core.async.t28150.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t28150");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28150 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t28150(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta28151){
return (new cljs.core.async.t28150(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta28151));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28150(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22071__auto___28273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___28273,mults,ensure_mult,p){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___28273,mults,ensure_mult,p){
return (function (state_28224){
var state_val_28225 = (state_28224[(1)]);
if((state_val_28225 === (7))){
var inst_28220 = (state_28224[(2)]);
var state_28224__$1 = state_28224;
var statearr_28226_28274 = state_28224__$1;
(statearr_28226_28274[(2)] = inst_28220);

(statearr_28226_28274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28225 === (20))){
var state_28224__$1 = state_28224;
var statearr_28227_28275 = state_28224__$1;
(statearr_28227_28275[(2)] = null);

(statearr_28227_28275[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28225 === (1))){
var state_28224__$1 = state_28224;
var statearr_28228_28276 = state_28224__$1;
(statearr_28228_28276[(2)] = null);

(statearr_28228_28276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28225 === (24))){
var inst_28203 = (state_28224[(7)]);
var inst_28212 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28203);
var state_28224__$1 = state_28224;
var statearr_28229_28277 = state_28224__$1;
(statearr_28229_28277[(2)] = inst_28212);

(statearr_28229_28277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28225 === (4))){
var inst_28155 = (state_28224[(8)]);
var inst_28155__$1 = (state_28224[(2)]);
var inst_28156 = (inst_28155__$1 == null);
var state_28224__$1 = (function (){var statearr_28230 = state_28224;
(statearr_28230[(8)] = inst_28155__$1);

return statearr_28230;
})();
if(cljs.core.truth_(inst_28156)){
var statearr_28231_28278 = state_28224__$1;
(statearr_28231_28278[(1)] = (5));

} else {
var statearr_28232_28279 = state_28224__$1;
(statearr_28232_28279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28225 === (15))){
var inst_28197 = (state_28224[(2)]);
var state_28224__$1 = state_28224;
var statearr_28233_28280 = state_28224__$1;
(statearr_28233_28280[(2)] = inst_28197);

(statearr_28233_28280[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28225 === (21))){
var inst_28217 = (state_28224[(2)]);
var state_28224__$1 = (function (){var statearr_28234 = state_28224;
(statearr_28234[(9)] = inst_28217);

return statearr_28234;
})();
var statearr_28235_28281 = state_28224__$1;
(statearr_28235_28281[(2)] = null);

(statearr_28235_28281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28225 === (13))){
var inst_28179 = (state_28224[(10)]);
var inst_28181 = cljs.core.chunked_seq_QMARK_.call(null,inst_28179);
var state_28224__$1 = state_28224;
if(inst_28181){
var statearr_28236_28282 = state_28224__$1;
(statearr_28236_28282[(1)] = (16));

} else {
var statearr_28237_28283 = state_28224__$1;
(statearr_28237_28283[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28225 === (22))){
var inst_28209 = (state_28224[(2)]);
var state_28224__$1 = state_28224;
if(cljs.core.truth_(inst_28209)){
var statearr_28238_28284 = state_28224__$1;
(statearr_28238_28284[(1)] = (23));

} else {
var statearr_28239_28285 = state_28224__$1;
(statearr_28239_28285[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28225 === (6))){
var inst_28205 = (state_28224[(11)]);
var inst_28155 = (state_28224[(8)]);
var inst_28203 = (state_28224[(7)]);
var inst_28203__$1 = topic_fn.call(null,inst_28155);
var inst_28204 = cljs.core.deref.call(null,mults);
var inst_28205__$1 = cljs.core.get.call(null,inst_28204,inst_28203__$1);
var state_28224__$1 = (function (){var statearr_28240 = state_28224;
(statearr_28240[(11)] = inst_28205__$1);

(statearr_28240[(7)] = inst_28203__$1);

return statearr_28240;
})();
if(cljs.core.truth_(inst_28205__$1)){
var statearr_28241_28286 = state_28224__$1;
(statearr_28241_28286[(1)] = (19));

} else {
var statearr_28242_28287 = state_28224__$1;
(statearr_28242_28287[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28225 === (25))){
var inst_28214 = (state_28224[(2)]);
var state_28224__$1 = state_28224;
var statearr_28243_28288 = state_28224__$1;
(statearr_28243_28288[(2)] = inst_28214);

(statearr_28243_28288[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28225 === (17))){
var inst_28179 = (state_28224[(10)]);
var inst_28188 = cljs.core.first.call(null,inst_28179);
var inst_28189 = cljs.core.async.muxch_STAR_.call(null,inst_28188);
var inst_28190 = cljs.core.async.close_BANG_.call(null,inst_28189);
var inst_28191 = cljs.core.next.call(null,inst_28179);
var inst_28165 = inst_28191;
var inst_28166 = null;
var inst_28167 = (0);
var inst_28168 = (0);
var state_28224__$1 = (function (){var statearr_28244 = state_28224;
(statearr_28244[(12)] = inst_28166);

(statearr_28244[(13)] = inst_28165);

(statearr_28244[(14)] = inst_28190);

(statearr_28244[(15)] = inst_28167);

(statearr_28244[(16)] = inst_28168);

return statearr_28244;
})();
var statearr_28245_28289 = state_28224__$1;
(statearr_28245_28289[(2)] = null);

(statearr_28245_28289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28225 === (3))){
var inst_28222 = (state_28224[(2)]);
var state_28224__$1 = state_28224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28224__$1,inst_28222);
} else {
if((state_val_28225 === (12))){
var inst_28199 = (state_28224[(2)]);
var state_28224__$1 = state_28224;
var statearr_28246_28290 = state_28224__$1;
(statearr_28246_28290[(2)] = inst_28199);

(statearr_28246_28290[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28225 === (2))){
var state_28224__$1 = state_28224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28224__$1,(4),ch);
} else {
if((state_val_28225 === (23))){
var state_28224__$1 = state_28224;
var statearr_28247_28291 = state_28224__$1;
(statearr_28247_28291[(2)] = null);

(statearr_28247_28291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28225 === (19))){
var inst_28205 = (state_28224[(11)]);
var inst_28155 = (state_28224[(8)]);
var inst_28207 = cljs.core.async.muxch_STAR_.call(null,inst_28205);
var state_28224__$1 = state_28224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28224__$1,(22),inst_28207,inst_28155);
} else {
if((state_val_28225 === (11))){
var inst_28165 = (state_28224[(13)]);
var inst_28179 = (state_28224[(10)]);
var inst_28179__$1 = cljs.core.seq.call(null,inst_28165);
var state_28224__$1 = (function (){var statearr_28248 = state_28224;
(statearr_28248[(10)] = inst_28179__$1);

return statearr_28248;
})();
if(inst_28179__$1){
var statearr_28249_28292 = state_28224__$1;
(statearr_28249_28292[(1)] = (13));

} else {
var statearr_28250_28293 = state_28224__$1;
(statearr_28250_28293[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28225 === (9))){
var inst_28201 = (state_28224[(2)]);
var state_28224__$1 = state_28224;
var statearr_28251_28294 = state_28224__$1;
(statearr_28251_28294[(2)] = inst_28201);

(statearr_28251_28294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28225 === (5))){
var inst_28162 = cljs.core.deref.call(null,mults);
var inst_28163 = cljs.core.vals.call(null,inst_28162);
var inst_28164 = cljs.core.seq.call(null,inst_28163);
var inst_28165 = inst_28164;
var inst_28166 = null;
var inst_28167 = (0);
var inst_28168 = (0);
var state_28224__$1 = (function (){var statearr_28252 = state_28224;
(statearr_28252[(12)] = inst_28166);

(statearr_28252[(13)] = inst_28165);

(statearr_28252[(15)] = inst_28167);

(statearr_28252[(16)] = inst_28168);

return statearr_28252;
})();
var statearr_28253_28295 = state_28224__$1;
(statearr_28253_28295[(2)] = null);

(statearr_28253_28295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28225 === (14))){
var state_28224__$1 = state_28224;
var statearr_28257_28296 = state_28224__$1;
(statearr_28257_28296[(2)] = null);

(statearr_28257_28296[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28225 === (16))){
var inst_28179 = (state_28224[(10)]);
var inst_28183 = cljs.core.chunk_first.call(null,inst_28179);
var inst_28184 = cljs.core.chunk_rest.call(null,inst_28179);
var inst_28185 = cljs.core.count.call(null,inst_28183);
var inst_28165 = inst_28184;
var inst_28166 = inst_28183;
var inst_28167 = inst_28185;
var inst_28168 = (0);
var state_28224__$1 = (function (){var statearr_28258 = state_28224;
(statearr_28258[(12)] = inst_28166);

(statearr_28258[(13)] = inst_28165);

(statearr_28258[(15)] = inst_28167);

(statearr_28258[(16)] = inst_28168);

return statearr_28258;
})();
var statearr_28259_28297 = state_28224__$1;
(statearr_28259_28297[(2)] = null);

(statearr_28259_28297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28225 === (10))){
var inst_28166 = (state_28224[(12)]);
var inst_28165 = (state_28224[(13)]);
var inst_28167 = (state_28224[(15)]);
var inst_28168 = (state_28224[(16)]);
var inst_28173 = cljs.core._nth.call(null,inst_28166,inst_28168);
var inst_28174 = cljs.core.async.muxch_STAR_.call(null,inst_28173);
var inst_28175 = cljs.core.async.close_BANG_.call(null,inst_28174);
var inst_28176 = (inst_28168 + (1));
var tmp28254 = inst_28166;
var tmp28255 = inst_28165;
var tmp28256 = inst_28167;
var inst_28165__$1 = tmp28255;
var inst_28166__$1 = tmp28254;
var inst_28167__$1 = tmp28256;
var inst_28168__$1 = inst_28176;
var state_28224__$1 = (function (){var statearr_28260 = state_28224;
(statearr_28260[(12)] = inst_28166__$1);

(statearr_28260[(13)] = inst_28165__$1);

(statearr_28260[(17)] = inst_28175);

(statearr_28260[(15)] = inst_28167__$1);

(statearr_28260[(16)] = inst_28168__$1);

return statearr_28260;
})();
var statearr_28261_28298 = state_28224__$1;
(statearr_28261_28298[(2)] = null);

(statearr_28261_28298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28225 === (18))){
var inst_28194 = (state_28224[(2)]);
var state_28224__$1 = state_28224;
var statearr_28262_28299 = state_28224__$1;
(statearr_28262_28299[(2)] = inst_28194);

(statearr_28262_28299[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28225 === (8))){
var inst_28167 = (state_28224[(15)]);
var inst_28168 = (state_28224[(16)]);
var inst_28170 = (inst_28168 < inst_28167);
var inst_28171 = inst_28170;
var state_28224__$1 = state_28224;
if(cljs.core.truth_(inst_28171)){
var statearr_28263_28300 = state_28224__$1;
(statearr_28263_28300[(1)] = (10));

} else {
var statearr_28264_28301 = state_28224__$1;
(statearr_28264_28301[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
});})(c__22071__auto___28273,mults,ensure_mult,p))
;
return ((function (switch__22009__auto__,c__22071__auto___28273,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22010__auto__ = null;
var cljs$core$async$state_machine__22010__auto____0 = (function (){
var statearr_28268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28268[(0)] = cljs$core$async$state_machine__22010__auto__);

(statearr_28268[(1)] = (1));

return statearr_28268;
});
var cljs$core$async$state_machine__22010__auto____1 = (function (state_28224){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_28224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e28269){if((e28269 instanceof Object)){
var ex__22013__auto__ = e28269;
var statearr_28270_28302 = state_28224;
(statearr_28270_28302[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28303 = state_28224;
state_28224 = G__28303;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$state_machine__22010__auto__ = function(state_28224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22010__auto____1.call(this,state_28224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22010__auto____0;
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22010__auto____1;
return cljs$core$async$state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___28273,mults,ensure_mult,p))
})();
var state__22073__auto__ = (function (){var statearr_28271 = f__22072__auto__.call(null);
(statearr_28271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___28273);

return statearr_28271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___28273,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__28305 = arguments.length;
switch (G__28305) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__28308 = arguments.length;
switch (G__28308) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__28311 = arguments.length;
switch (G__28311) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22071__auto___28381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___28381,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___28381,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28350){
var state_val_28351 = (state_28350[(1)]);
if((state_val_28351 === (7))){
var state_28350__$1 = state_28350;
var statearr_28352_28382 = state_28350__$1;
(statearr_28352_28382[(2)] = null);

(statearr_28352_28382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (1))){
var state_28350__$1 = state_28350;
var statearr_28353_28383 = state_28350__$1;
(statearr_28353_28383[(2)] = null);

(statearr_28353_28383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (4))){
var inst_28314 = (state_28350[(7)]);
var inst_28316 = (inst_28314 < cnt);
var state_28350__$1 = state_28350;
if(cljs.core.truth_(inst_28316)){
var statearr_28354_28384 = state_28350__$1;
(statearr_28354_28384[(1)] = (6));

} else {
var statearr_28355_28385 = state_28350__$1;
(statearr_28355_28385[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (15))){
var inst_28346 = (state_28350[(2)]);
var state_28350__$1 = state_28350;
var statearr_28356_28386 = state_28350__$1;
(statearr_28356_28386[(2)] = inst_28346);

(statearr_28356_28386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (13))){
var inst_28339 = cljs.core.async.close_BANG_.call(null,out);
var state_28350__$1 = state_28350;
var statearr_28357_28387 = state_28350__$1;
(statearr_28357_28387[(2)] = inst_28339);

(statearr_28357_28387[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (6))){
var state_28350__$1 = state_28350;
var statearr_28358_28388 = state_28350__$1;
(statearr_28358_28388[(2)] = null);

(statearr_28358_28388[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (3))){
var inst_28348 = (state_28350[(2)]);
var state_28350__$1 = state_28350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28350__$1,inst_28348);
} else {
if((state_val_28351 === (12))){
var inst_28336 = (state_28350[(8)]);
var inst_28336__$1 = (state_28350[(2)]);
var inst_28337 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28336__$1);
var state_28350__$1 = (function (){var statearr_28359 = state_28350;
(statearr_28359[(8)] = inst_28336__$1);

return statearr_28359;
})();
if(cljs.core.truth_(inst_28337)){
var statearr_28360_28389 = state_28350__$1;
(statearr_28360_28389[(1)] = (13));

} else {
var statearr_28361_28390 = state_28350__$1;
(statearr_28361_28390[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (2))){
var inst_28313 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28314 = (0);
var state_28350__$1 = (function (){var statearr_28362 = state_28350;
(statearr_28362[(7)] = inst_28314);

(statearr_28362[(9)] = inst_28313);

return statearr_28362;
})();
var statearr_28363_28391 = state_28350__$1;
(statearr_28363_28391[(2)] = null);

(statearr_28363_28391[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (11))){
var inst_28314 = (state_28350[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28350,(10),Object,null,(9));
var inst_28323 = chs__$1.call(null,inst_28314);
var inst_28324 = done.call(null,inst_28314);
var inst_28325 = cljs.core.async.take_BANG_.call(null,inst_28323,inst_28324);
var state_28350__$1 = state_28350;
var statearr_28364_28392 = state_28350__$1;
(statearr_28364_28392[(2)] = inst_28325);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28350__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (9))){
var inst_28314 = (state_28350[(7)]);
var inst_28327 = (state_28350[(2)]);
var inst_28328 = (inst_28314 + (1));
var inst_28314__$1 = inst_28328;
var state_28350__$1 = (function (){var statearr_28365 = state_28350;
(statearr_28365[(10)] = inst_28327);

(statearr_28365[(7)] = inst_28314__$1);

return statearr_28365;
})();
var statearr_28366_28393 = state_28350__$1;
(statearr_28366_28393[(2)] = null);

(statearr_28366_28393[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (5))){
var inst_28334 = (state_28350[(2)]);
var state_28350__$1 = (function (){var statearr_28367 = state_28350;
(statearr_28367[(11)] = inst_28334);

return statearr_28367;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28350__$1,(12),dchan);
} else {
if((state_val_28351 === (14))){
var inst_28336 = (state_28350[(8)]);
var inst_28341 = cljs.core.apply.call(null,f,inst_28336);
var state_28350__$1 = state_28350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28350__$1,(16),out,inst_28341);
} else {
if((state_val_28351 === (16))){
var inst_28343 = (state_28350[(2)]);
var state_28350__$1 = (function (){var statearr_28368 = state_28350;
(statearr_28368[(12)] = inst_28343);

return statearr_28368;
})();
var statearr_28369_28394 = state_28350__$1;
(statearr_28369_28394[(2)] = null);

(statearr_28369_28394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (10))){
var inst_28318 = (state_28350[(2)]);
var inst_28319 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28350__$1 = (function (){var statearr_28370 = state_28350;
(statearr_28370[(13)] = inst_28318);

return statearr_28370;
})();
var statearr_28371_28395 = state_28350__$1;
(statearr_28371_28395[(2)] = inst_28319);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28350__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (8))){
var inst_28332 = (state_28350[(2)]);
var state_28350__$1 = state_28350;
var statearr_28372_28396 = state_28350__$1;
(statearr_28372_28396[(2)] = inst_28332);

(statearr_28372_28396[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__22071__auto___28381,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22009__auto__,c__22071__auto___28381,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22010__auto__ = null;
var cljs$core$async$state_machine__22010__auto____0 = (function (){
var statearr_28376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28376[(0)] = cljs$core$async$state_machine__22010__auto__);

(statearr_28376[(1)] = (1));

return statearr_28376;
});
var cljs$core$async$state_machine__22010__auto____1 = (function (state_28350){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_28350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e28377){if((e28377 instanceof Object)){
var ex__22013__auto__ = e28377;
var statearr_28378_28397 = state_28350;
(statearr_28378_28397[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28398 = state_28350;
state_28350 = G__28398;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$state_machine__22010__auto__ = function(state_28350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22010__auto____1.call(this,state_28350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22010__auto____0;
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22010__auto____1;
return cljs$core$async$state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___28381,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22073__auto__ = (function (){var statearr_28379 = f__22072__auto__.call(null);
(statearr_28379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___28381);

return statearr_28379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___28381,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__28401 = arguments.length;
switch (G__28401) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22071__auto___28456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___28456,out){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___28456,out){
return (function (state_28431){
var state_val_28432 = (state_28431[(1)]);
if((state_val_28432 === (7))){
var inst_28411 = (state_28431[(7)]);
var inst_28410 = (state_28431[(8)]);
var inst_28410__$1 = (state_28431[(2)]);
var inst_28411__$1 = cljs.core.nth.call(null,inst_28410__$1,(0),null);
var inst_28412 = cljs.core.nth.call(null,inst_28410__$1,(1),null);
var inst_28413 = (inst_28411__$1 == null);
var state_28431__$1 = (function (){var statearr_28433 = state_28431;
(statearr_28433[(7)] = inst_28411__$1);

(statearr_28433[(9)] = inst_28412);

(statearr_28433[(8)] = inst_28410__$1);

return statearr_28433;
})();
if(cljs.core.truth_(inst_28413)){
var statearr_28434_28457 = state_28431__$1;
(statearr_28434_28457[(1)] = (8));

} else {
var statearr_28435_28458 = state_28431__$1;
(statearr_28435_28458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (1))){
var inst_28402 = cljs.core.vec.call(null,chs);
var inst_28403 = inst_28402;
var state_28431__$1 = (function (){var statearr_28436 = state_28431;
(statearr_28436[(10)] = inst_28403);

return statearr_28436;
})();
var statearr_28437_28459 = state_28431__$1;
(statearr_28437_28459[(2)] = null);

(statearr_28437_28459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (4))){
var inst_28403 = (state_28431[(10)]);
var state_28431__$1 = state_28431;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28431__$1,(7),inst_28403);
} else {
if((state_val_28432 === (6))){
var inst_28427 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
var statearr_28438_28460 = state_28431__$1;
(statearr_28438_28460[(2)] = inst_28427);

(statearr_28438_28460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (3))){
var inst_28429 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28431__$1,inst_28429);
} else {
if((state_val_28432 === (2))){
var inst_28403 = (state_28431[(10)]);
var inst_28405 = cljs.core.count.call(null,inst_28403);
var inst_28406 = (inst_28405 > (0));
var state_28431__$1 = state_28431;
if(cljs.core.truth_(inst_28406)){
var statearr_28440_28461 = state_28431__$1;
(statearr_28440_28461[(1)] = (4));

} else {
var statearr_28441_28462 = state_28431__$1;
(statearr_28441_28462[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (11))){
var inst_28403 = (state_28431[(10)]);
var inst_28420 = (state_28431[(2)]);
var tmp28439 = inst_28403;
var inst_28403__$1 = tmp28439;
var state_28431__$1 = (function (){var statearr_28442 = state_28431;
(statearr_28442[(11)] = inst_28420);

(statearr_28442[(10)] = inst_28403__$1);

return statearr_28442;
})();
var statearr_28443_28463 = state_28431__$1;
(statearr_28443_28463[(2)] = null);

(statearr_28443_28463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (9))){
var inst_28411 = (state_28431[(7)]);
var state_28431__$1 = state_28431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28431__$1,(11),out,inst_28411);
} else {
if((state_val_28432 === (5))){
var inst_28425 = cljs.core.async.close_BANG_.call(null,out);
var state_28431__$1 = state_28431;
var statearr_28444_28464 = state_28431__$1;
(statearr_28444_28464[(2)] = inst_28425);

(statearr_28444_28464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (10))){
var inst_28423 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
var statearr_28445_28465 = state_28431__$1;
(statearr_28445_28465[(2)] = inst_28423);

(statearr_28445_28465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (8))){
var inst_28403 = (state_28431[(10)]);
var inst_28411 = (state_28431[(7)]);
var inst_28412 = (state_28431[(9)]);
var inst_28410 = (state_28431[(8)]);
var inst_28415 = (function (){var c = inst_28412;
var v = inst_28411;
var vec__28408 = inst_28410;
var cs = inst_28403;
return ((function (c,v,vec__28408,cs,inst_28403,inst_28411,inst_28412,inst_28410,state_val_28432,c__22071__auto___28456,out){
return (function (p1__28399_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28399_SHARP_);
});
;})(c,v,vec__28408,cs,inst_28403,inst_28411,inst_28412,inst_28410,state_val_28432,c__22071__auto___28456,out))
})();
var inst_28416 = cljs.core.filterv.call(null,inst_28415,inst_28403);
var inst_28403__$1 = inst_28416;
var state_28431__$1 = (function (){var statearr_28446 = state_28431;
(statearr_28446[(10)] = inst_28403__$1);

return statearr_28446;
})();
var statearr_28447_28466 = state_28431__$1;
(statearr_28447_28466[(2)] = null);

(statearr_28447_28466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__22071__auto___28456,out))
;
return ((function (switch__22009__auto__,c__22071__auto___28456,out){
return (function() {
var cljs$core$async$state_machine__22010__auto__ = null;
var cljs$core$async$state_machine__22010__auto____0 = (function (){
var statearr_28451 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28451[(0)] = cljs$core$async$state_machine__22010__auto__);

(statearr_28451[(1)] = (1));

return statearr_28451;
});
var cljs$core$async$state_machine__22010__auto____1 = (function (state_28431){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_28431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e28452){if((e28452 instanceof Object)){
var ex__22013__auto__ = e28452;
var statearr_28453_28467 = state_28431;
(statearr_28453_28467[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28468 = state_28431;
state_28431 = G__28468;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$state_machine__22010__auto__ = function(state_28431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22010__auto____1.call(this,state_28431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22010__auto____0;
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22010__auto____1;
return cljs$core$async$state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___28456,out))
})();
var state__22073__auto__ = (function (){var statearr_28454 = f__22072__auto__.call(null);
(statearr_28454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___28456);

return statearr_28454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___28456,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__28470 = arguments.length;
switch (G__28470) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22071__auto___28518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___28518,out){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___28518,out){
return (function (state_28494){
var state_val_28495 = (state_28494[(1)]);
if((state_val_28495 === (7))){
var inst_28476 = (state_28494[(7)]);
var inst_28476__$1 = (state_28494[(2)]);
var inst_28477 = (inst_28476__$1 == null);
var inst_28478 = cljs.core.not.call(null,inst_28477);
var state_28494__$1 = (function (){var statearr_28496 = state_28494;
(statearr_28496[(7)] = inst_28476__$1);

return statearr_28496;
})();
if(inst_28478){
var statearr_28497_28519 = state_28494__$1;
(statearr_28497_28519[(1)] = (8));

} else {
var statearr_28498_28520 = state_28494__$1;
(statearr_28498_28520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28495 === (1))){
var inst_28471 = (0);
var state_28494__$1 = (function (){var statearr_28499 = state_28494;
(statearr_28499[(8)] = inst_28471);

return statearr_28499;
})();
var statearr_28500_28521 = state_28494__$1;
(statearr_28500_28521[(2)] = null);

(statearr_28500_28521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28495 === (4))){
var state_28494__$1 = state_28494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28494__$1,(7),ch);
} else {
if((state_val_28495 === (6))){
var inst_28489 = (state_28494[(2)]);
var state_28494__$1 = state_28494;
var statearr_28501_28522 = state_28494__$1;
(statearr_28501_28522[(2)] = inst_28489);

(statearr_28501_28522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28495 === (3))){
var inst_28491 = (state_28494[(2)]);
var inst_28492 = cljs.core.async.close_BANG_.call(null,out);
var state_28494__$1 = (function (){var statearr_28502 = state_28494;
(statearr_28502[(9)] = inst_28491);

return statearr_28502;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28494__$1,inst_28492);
} else {
if((state_val_28495 === (2))){
var inst_28471 = (state_28494[(8)]);
var inst_28473 = (inst_28471 < n);
var state_28494__$1 = state_28494;
if(cljs.core.truth_(inst_28473)){
var statearr_28503_28523 = state_28494__$1;
(statearr_28503_28523[(1)] = (4));

} else {
var statearr_28504_28524 = state_28494__$1;
(statearr_28504_28524[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28495 === (11))){
var inst_28471 = (state_28494[(8)]);
var inst_28481 = (state_28494[(2)]);
var inst_28482 = (inst_28471 + (1));
var inst_28471__$1 = inst_28482;
var state_28494__$1 = (function (){var statearr_28505 = state_28494;
(statearr_28505[(8)] = inst_28471__$1);

(statearr_28505[(10)] = inst_28481);

return statearr_28505;
})();
var statearr_28506_28525 = state_28494__$1;
(statearr_28506_28525[(2)] = null);

(statearr_28506_28525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28495 === (9))){
var state_28494__$1 = state_28494;
var statearr_28507_28526 = state_28494__$1;
(statearr_28507_28526[(2)] = null);

(statearr_28507_28526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28495 === (5))){
var state_28494__$1 = state_28494;
var statearr_28508_28527 = state_28494__$1;
(statearr_28508_28527[(2)] = null);

(statearr_28508_28527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28495 === (10))){
var inst_28486 = (state_28494[(2)]);
var state_28494__$1 = state_28494;
var statearr_28509_28528 = state_28494__$1;
(statearr_28509_28528[(2)] = inst_28486);

(statearr_28509_28528[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28495 === (8))){
var inst_28476 = (state_28494[(7)]);
var state_28494__$1 = state_28494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28494__$1,(11),out,inst_28476);
} else {
return null;
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
});})(c__22071__auto___28518,out))
;
return ((function (switch__22009__auto__,c__22071__auto___28518,out){
return (function() {
var cljs$core$async$state_machine__22010__auto__ = null;
var cljs$core$async$state_machine__22010__auto____0 = (function (){
var statearr_28513 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28513[(0)] = cljs$core$async$state_machine__22010__auto__);

(statearr_28513[(1)] = (1));

return statearr_28513;
});
var cljs$core$async$state_machine__22010__auto____1 = (function (state_28494){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_28494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e28514){if((e28514 instanceof Object)){
var ex__22013__auto__ = e28514;
var statearr_28515_28529 = state_28494;
(statearr_28515_28529[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28530 = state_28494;
state_28494 = G__28530;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$state_machine__22010__auto__ = function(state_28494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22010__auto____1.call(this,state_28494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22010__auto____0;
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22010__auto____1;
return cljs$core$async$state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___28518,out))
})();
var state__22073__auto__ = (function (){var statearr_28516 = f__22072__auto__.call(null);
(statearr_28516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___28518);

return statearr_28516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___28518,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t28538 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28538 = (function (ch,f,map_LT_,meta28539){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28539 = meta28539;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28538.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28538.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t28538.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28538.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t28541 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28541 = (function (fn1,_,meta28539,map_LT_,f,ch,meta28542){
this.fn1 = fn1;
this._ = _;
this.meta28539 = meta28539;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28542 = meta28542;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28541.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28541.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t28541.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28531_SHARP_){
return f1.call(null,(((p1__28531_SHARP_ == null))?null:self__.f.call(null,p1__28531_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t28541.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28543){
var self__ = this;
var _28543__$1 = this;
return self__.meta28542;
});})(___$1))
;

cljs.core.async.t28541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28543,meta28542__$1){
var self__ = this;
var _28543__$1 = this;
return (new cljs.core.async.t28541(self__.fn1,self__._,self__.meta28539,self__.map_LT_,self__.f,self__.ch,meta28542__$1));
});})(___$1))
;

cljs.core.async.t28541.cljs$lang$type = true;

cljs.core.async.t28541.cljs$lang$ctorStr = "cljs.core.async/t28541";

cljs.core.async.t28541.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t28541");
});})(___$1))
;

cljs.core.async.__GT_t28541 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t28541(fn1__$1,___$2,meta28539__$1,map_LT___$1,f__$1,ch__$1,meta28542){
return (new cljs.core.async.t28541(fn1__$1,___$2,meta28539__$1,map_LT___$1,f__$1,ch__$1,meta28542));
});})(___$1))
;

}

return (new cljs.core.async.t28541(fn1,___$1,self__.meta28539,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18148__auto__ = ret;
if(cljs.core.truth_(and__18148__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18148__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t28538.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28538.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28538.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28540){
var self__ = this;
var _28540__$1 = this;
return self__.meta28539;
});

cljs.core.async.t28538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28540,meta28539__$1){
var self__ = this;
var _28540__$1 = this;
return (new cljs.core.async.t28538(self__.ch,self__.f,self__.map_LT_,meta28539__$1));
});

cljs.core.async.t28538.cljs$lang$type = true;

cljs.core.async.t28538.cljs$lang$ctorStr = "cljs.core.async/t28538";

cljs.core.async.t28538.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t28538");
});

cljs.core.async.__GT_t28538 = (function cljs$core$async$map_LT__$___GT_t28538(ch__$1,f__$1,map_LT___$1,meta28539){
return (new cljs.core.async.t28538(ch__$1,f__$1,map_LT___$1,meta28539));
});

}

return (new cljs.core.async.t28538(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t28547 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28547 = (function (ch,f,map_GT_,meta28548){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28548 = meta28548;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28547.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28547.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28547.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28547.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28547.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28547.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28549){
var self__ = this;
var _28549__$1 = this;
return self__.meta28548;
});

cljs.core.async.t28547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28549,meta28548__$1){
var self__ = this;
var _28549__$1 = this;
return (new cljs.core.async.t28547(self__.ch,self__.f,self__.map_GT_,meta28548__$1));
});

cljs.core.async.t28547.cljs$lang$type = true;

cljs.core.async.t28547.cljs$lang$ctorStr = "cljs.core.async/t28547";

cljs.core.async.t28547.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t28547");
});

cljs.core.async.__GT_t28547 = (function cljs$core$async$map_GT__$___GT_t28547(ch__$1,f__$1,map_GT___$1,meta28548){
return (new cljs.core.async.t28547(ch__$1,f__$1,map_GT___$1,meta28548));
});

}

return (new cljs.core.async.t28547(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t28553 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28553 = (function (ch,p,filter_GT_,meta28554){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28554 = meta28554;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28553.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28553.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t28553.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28553.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28553.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28553.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28553.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28555){
var self__ = this;
var _28555__$1 = this;
return self__.meta28554;
});

cljs.core.async.t28553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28555,meta28554__$1){
var self__ = this;
var _28555__$1 = this;
return (new cljs.core.async.t28553(self__.ch,self__.p,self__.filter_GT_,meta28554__$1));
});

cljs.core.async.t28553.cljs$lang$type = true;

cljs.core.async.t28553.cljs$lang$ctorStr = "cljs.core.async/t28553";

cljs.core.async.t28553.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t28553");
});

cljs.core.async.__GT_t28553 = (function cljs$core$async$filter_GT__$___GT_t28553(ch__$1,p__$1,filter_GT___$1,meta28554){
return (new cljs.core.async.t28553(ch__$1,p__$1,filter_GT___$1,meta28554));
});

}

return (new cljs.core.async.t28553(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__28557 = arguments.length;
switch (G__28557) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22071__auto___28600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___28600,out){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___28600,out){
return (function (state_28578){
var state_val_28579 = (state_28578[(1)]);
if((state_val_28579 === (7))){
var inst_28574 = (state_28578[(2)]);
var state_28578__$1 = state_28578;
var statearr_28580_28601 = state_28578__$1;
(statearr_28580_28601[(2)] = inst_28574);

(statearr_28580_28601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (1))){
var state_28578__$1 = state_28578;
var statearr_28581_28602 = state_28578__$1;
(statearr_28581_28602[(2)] = null);

(statearr_28581_28602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (4))){
var inst_28560 = (state_28578[(7)]);
var inst_28560__$1 = (state_28578[(2)]);
var inst_28561 = (inst_28560__$1 == null);
var state_28578__$1 = (function (){var statearr_28582 = state_28578;
(statearr_28582[(7)] = inst_28560__$1);

return statearr_28582;
})();
if(cljs.core.truth_(inst_28561)){
var statearr_28583_28603 = state_28578__$1;
(statearr_28583_28603[(1)] = (5));

} else {
var statearr_28584_28604 = state_28578__$1;
(statearr_28584_28604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (6))){
var inst_28560 = (state_28578[(7)]);
var inst_28565 = p.call(null,inst_28560);
var state_28578__$1 = state_28578;
if(cljs.core.truth_(inst_28565)){
var statearr_28585_28605 = state_28578__$1;
(statearr_28585_28605[(1)] = (8));

} else {
var statearr_28586_28606 = state_28578__$1;
(statearr_28586_28606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (3))){
var inst_28576 = (state_28578[(2)]);
var state_28578__$1 = state_28578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28578__$1,inst_28576);
} else {
if((state_val_28579 === (2))){
var state_28578__$1 = state_28578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28578__$1,(4),ch);
} else {
if((state_val_28579 === (11))){
var inst_28568 = (state_28578[(2)]);
var state_28578__$1 = state_28578;
var statearr_28587_28607 = state_28578__$1;
(statearr_28587_28607[(2)] = inst_28568);

(statearr_28587_28607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (9))){
var state_28578__$1 = state_28578;
var statearr_28588_28608 = state_28578__$1;
(statearr_28588_28608[(2)] = null);

(statearr_28588_28608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (5))){
var inst_28563 = cljs.core.async.close_BANG_.call(null,out);
var state_28578__$1 = state_28578;
var statearr_28589_28609 = state_28578__$1;
(statearr_28589_28609[(2)] = inst_28563);

(statearr_28589_28609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (10))){
var inst_28571 = (state_28578[(2)]);
var state_28578__$1 = (function (){var statearr_28590 = state_28578;
(statearr_28590[(8)] = inst_28571);

return statearr_28590;
})();
var statearr_28591_28610 = state_28578__$1;
(statearr_28591_28610[(2)] = null);

(statearr_28591_28610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28579 === (8))){
var inst_28560 = (state_28578[(7)]);
var state_28578__$1 = state_28578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28578__$1,(11),out,inst_28560);
} else {
return null;
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
});})(c__22071__auto___28600,out))
;
return ((function (switch__22009__auto__,c__22071__auto___28600,out){
return (function() {
var cljs$core$async$state_machine__22010__auto__ = null;
var cljs$core$async$state_machine__22010__auto____0 = (function (){
var statearr_28595 = [null,null,null,null,null,null,null,null,null];
(statearr_28595[(0)] = cljs$core$async$state_machine__22010__auto__);

(statearr_28595[(1)] = (1));

return statearr_28595;
});
var cljs$core$async$state_machine__22010__auto____1 = (function (state_28578){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_28578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e28596){if((e28596 instanceof Object)){
var ex__22013__auto__ = e28596;
var statearr_28597_28611 = state_28578;
(statearr_28597_28611[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28612 = state_28578;
state_28578 = G__28612;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$state_machine__22010__auto__ = function(state_28578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22010__auto____1.call(this,state_28578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22010__auto____0;
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22010__auto____1;
return cljs$core$async$state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___28600,out))
})();
var state__22073__auto__ = (function (){var statearr_28598 = f__22072__auto__.call(null);
(statearr_28598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___28600);

return statearr_28598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___28600,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__28614 = arguments.length;
switch (G__28614) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto__){
return (function (state_28781){
var state_val_28782 = (state_28781[(1)]);
if((state_val_28782 === (7))){
var inst_28777 = (state_28781[(2)]);
var state_28781__$1 = state_28781;
var statearr_28783_28824 = state_28781__$1;
(statearr_28783_28824[(2)] = inst_28777);

(statearr_28783_28824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (20))){
var inst_28747 = (state_28781[(7)]);
var inst_28758 = (state_28781[(2)]);
var inst_28759 = cljs.core.next.call(null,inst_28747);
var inst_28733 = inst_28759;
var inst_28734 = null;
var inst_28735 = (0);
var inst_28736 = (0);
var state_28781__$1 = (function (){var statearr_28784 = state_28781;
(statearr_28784[(8)] = inst_28733);

(statearr_28784[(9)] = inst_28736);

(statearr_28784[(10)] = inst_28758);

(statearr_28784[(11)] = inst_28735);

(statearr_28784[(12)] = inst_28734);

return statearr_28784;
})();
var statearr_28785_28825 = state_28781__$1;
(statearr_28785_28825[(2)] = null);

(statearr_28785_28825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (1))){
var state_28781__$1 = state_28781;
var statearr_28786_28826 = state_28781__$1;
(statearr_28786_28826[(2)] = null);

(statearr_28786_28826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (4))){
var inst_28722 = (state_28781[(13)]);
var inst_28722__$1 = (state_28781[(2)]);
var inst_28723 = (inst_28722__$1 == null);
var state_28781__$1 = (function (){var statearr_28787 = state_28781;
(statearr_28787[(13)] = inst_28722__$1);

return statearr_28787;
})();
if(cljs.core.truth_(inst_28723)){
var statearr_28788_28827 = state_28781__$1;
(statearr_28788_28827[(1)] = (5));

} else {
var statearr_28789_28828 = state_28781__$1;
(statearr_28789_28828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (15))){
var state_28781__$1 = state_28781;
var statearr_28793_28829 = state_28781__$1;
(statearr_28793_28829[(2)] = null);

(statearr_28793_28829[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (21))){
var state_28781__$1 = state_28781;
var statearr_28794_28830 = state_28781__$1;
(statearr_28794_28830[(2)] = null);

(statearr_28794_28830[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (13))){
var inst_28733 = (state_28781[(8)]);
var inst_28736 = (state_28781[(9)]);
var inst_28735 = (state_28781[(11)]);
var inst_28734 = (state_28781[(12)]);
var inst_28743 = (state_28781[(2)]);
var inst_28744 = (inst_28736 + (1));
var tmp28790 = inst_28733;
var tmp28791 = inst_28735;
var tmp28792 = inst_28734;
var inst_28733__$1 = tmp28790;
var inst_28734__$1 = tmp28792;
var inst_28735__$1 = tmp28791;
var inst_28736__$1 = inst_28744;
var state_28781__$1 = (function (){var statearr_28795 = state_28781;
(statearr_28795[(8)] = inst_28733__$1);

(statearr_28795[(9)] = inst_28736__$1);

(statearr_28795[(11)] = inst_28735__$1);

(statearr_28795[(14)] = inst_28743);

(statearr_28795[(12)] = inst_28734__$1);

return statearr_28795;
})();
var statearr_28796_28831 = state_28781__$1;
(statearr_28796_28831[(2)] = null);

(statearr_28796_28831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (22))){
var state_28781__$1 = state_28781;
var statearr_28797_28832 = state_28781__$1;
(statearr_28797_28832[(2)] = null);

(statearr_28797_28832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (6))){
var inst_28722 = (state_28781[(13)]);
var inst_28731 = f.call(null,inst_28722);
var inst_28732 = cljs.core.seq.call(null,inst_28731);
var inst_28733 = inst_28732;
var inst_28734 = null;
var inst_28735 = (0);
var inst_28736 = (0);
var state_28781__$1 = (function (){var statearr_28798 = state_28781;
(statearr_28798[(8)] = inst_28733);

(statearr_28798[(9)] = inst_28736);

(statearr_28798[(11)] = inst_28735);

(statearr_28798[(12)] = inst_28734);

return statearr_28798;
})();
var statearr_28799_28833 = state_28781__$1;
(statearr_28799_28833[(2)] = null);

(statearr_28799_28833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (17))){
var inst_28747 = (state_28781[(7)]);
var inst_28751 = cljs.core.chunk_first.call(null,inst_28747);
var inst_28752 = cljs.core.chunk_rest.call(null,inst_28747);
var inst_28753 = cljs.core.count.call(null,inst_28751);
var inst_28733 = inst_28752;
var inst_28734 = inst_28751;
var inst_28735 = inst_28753;
var inst_28736 = (0);
var state_28781__$1 = (function (){var statearr_28800 = state_28781;
(statearr_28800[(8)] = inst_28733);

(statearr_28800[(9)] = inst_28736);

(statearr_28800[(11)] = inst_28735);

(statearr_28800[(12)] = inst_28734);

return statearr_28800;
})();
var statearr_28801_28834 = state_28781__$1;
(statearr_28801_28834[(2)] = null);

(statearr_28801_28834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (3))){
var inst_28779 = (state_28781[(2)]);
var state_28781__$1 = state_28781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28781__$1,inst_28779);
} else {
if((state_val_28782 === (12))){
var inst_28767 = (state_28781[(2)]);
var state_28781__$1 = state_28781;
var statearr_28802_28835 = state_28781__$1;
(statearr_28802_28835[(2)] = inst_28767);

(statearr_28802_28835[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (2))){
var state_28781__$1 = state_28781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28781__$1,(4),in$);
} else {
if((state_val_28782 === (23))){
var inst_28775 = (state_28781[(2)]);
var state_28781__$1 = state_28781;
var statearr_28803_28836 = state_28781__$1;
(statearr_28803_28836[(2)] = inst_28775);

(statearr_28803_28836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (19))){
var inst_28762 = (state_28781[(2)]);
var state_28781__$1 = state_28781;
var statearr_28804_28837 = state_28781__$1;
(statearr_28804_28837[(2)] = inst_28762);

(statearr_28804_28837[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (11))){
var inst_28733 = (state_28781[(8)]);
var inst_28747 = (state_28781[(7)]);
var inst_28747__$1 = cljs.core.seq.call(null,inst_28733);
var state_28781__$1 = (function (){var statearr_28805 = state_28781;
(statearr_28805[(7)] = inst_28747__$1);

return statearr_28805;
})();
if(inst_28747__$1){
var statearr_28806_28838 = state_28781__$1;
(statearr_28806_28838[(1)] = (14));

} else {
var statearr_28807_28839 = state_28781__$1;
(statearr_28807_28839[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (9))){
var inst_28769 = (state_28781[(2)]);
var inst_28770 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28781__$1 = (function (){var statearr_28808 = state_28781;
(statearr_28808[(15)] = inst_28769);

return statearr_28808;
})();
if(cljs.core.truth_(inst_28770)){
var statearr_28809_28840 = state_28781__$1;
(statearr_28809_28840[(1)] = (21));

} else {
var statearr_28810_28841 = state_28781__$1;
(statearr_28810_28841[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (5))){
var inst_28725 = cljs.core.async.close_BANG_.call(null,out);
var state_28781__$1 = state_28781;
var statearr_28811_28842 = state_28781__$1;
(statearr_28811_28842[(2)] = inst_28725);

(statearr_28811_28842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (14))){
var inst_28747 = (state_28781[(7)]);
var inst_28749 = cljs.core.chunked_seq_QMARK_.call(null,inst_28747);
var state_28781__$1 = state_28781;
if(inst_28749){
var statearr_28812_28843 = state_28781__$1;
(statearr_28812_28843[(1)] = (17));

} else {
var statearr_28813_28844 = state_28781__$1;
(statearr_28813_28844[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (16))){
var inst_28765 = (state_28781[(2)]);
var state_28781__$1 = state_28781;
var statearr_28814_28845 = state_28781__$1;
(statearr_28814_28845[(2)] = inst_28765);

(statearr_28814_28845[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28782 === (10))){
var inst_28736 = (state_28781[(9)]);
var inst_28734 = (state_28781[(12)]);
var inst_28741 = cljs.core._nth.call(null,inst_28734,inst_28736);
var state_28781__$1 = state_28781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28781__$1,(13),out,inst_28741);
} else {
if((state_val_28782 === (18))){
var inst_28747 = (state_28781[(7)]);
var inst_28756 = cljs.core.first.call(null,inst_28747);
var state_28781__$1 = state_28781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28781__$1,(20),out,inst_28756);
} else {
if((state_val_28782 === (8))){
var inst_28736 = (state_28781[(9)]);
var inst_28735 = (state_28781[(11)]);
var inst_28738 = (inst_28736 < inst_28735);
var inst_28739 = inst_28738;
var state_28781__$1 = state_28781;
if(cljs.core.truth_(inst_28739)){
var statearr_28815_28846 = state_28781__$1;
(statearr_28815_28846[(1)] = (10));

} else {
var statearr_28816_28847 = state_28781__$1;
(statearr_28816_28847[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});})(c__22071__auto__))
;
return ((function (switch__22009__auto__,c__22071__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22010__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22010__auto____0 = (function (){
var statearr_28820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28820[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22010__auto__);

(statearr_28820[(1)] = (1));

return statearr_28820;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22010__auto____1 = (function (state_28781){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_28781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e28821){if((e28821 instanceof Object)){
var ex__22013__auto__ = e28821;
var statearr_28822_28848 = state_28781;
(statearr_28822_28848[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28849 = state_28781;
state_28781 = G__28849;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22010__auto__ = function(state_28781){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22010__auto____1.call(this,state_28781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22010__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22010__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto__))
})();
var state__22073__auto__ = (function (){var statearr_28823 = f__22072__auto__.call(null);
(statearr_28823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_28823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__))
);

return c__22071__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__28851 = arguments.length;
switch (G__28851) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__28854 = arguments.length;
switch (G__28854) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__28857 = arguments.length;
switch (G__28857) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22071__auto___28907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___28907,out){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___28907,out){
return (function (state_28881){
var state_val_28882 = (state_28881[(1)]);
if((state_val_28882 === (7))){
var inst_28876 = (state_28881[(2)]);
var state_28881__$1 = state_28881;
var statearr_28883_28908 = state_28881__$1;
(statearr_28883_28908[(2)] = inst_28876);

(statearr_28883_28908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (1))){
var inst_28858 = null;
var state_28881__$1 = (function (){var statearr_28884 = state_28881;
(statearr_28884[(7)] = inst_28858);

return statearr_28884;
})();
var statearr_28885_28909 = state_28881__$1;
(statearr_28885_28909[(2)] = null);

(statearr_28885_28909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (4))){
var inst_28861 = (state_28881[(8)]);
var inst_28861__$1 = (state_28881[(2)]);
var inst_28862 = (inst_28861__$1 == null);
var inst_28863 = cljs.core.not.call(null,inst_28862);
var state_28881__$1 = (function (){var statearr_28886 = state_28881;
(statearr_28886[(8)] = inst_28861__$1);

return statearr_28886;
})();
if(inst_28863){
var statearr_28887_28910 = state_28881__$1;
(statearr_28887_28910[(1)] = (5));

} else {
var statearr_28888_28911 = state_28881__$1;
(statearr_28888_28911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (6))){
var state_28881__$1 = state_28881;
var statearr_28889_28912 = state_28881__$1;
(statearr_28889_28912[(2)] = null);

(statearr_28889_28912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (3))){
var inst_28878 = (state_28881[(2)]);
var inst_28879 = cljs.core.async.close_BANG_.call(null,out);
var state_28881__$1 = (function (){var statearr_28890 = state_28881;
(statearr_28890[(9)] = inst_28878);

return statearr_28890;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28881__$1,inst_28879);
} else {
if((state_val_28882 === (2))){
var state_28881__$1 = state_28881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28881__$1,(4),ch);
} else {
if((state_val_28882 === (11))){
var inst_28861 = (state_28881[(8)]);
var inst_28870 = (state_28881[(2)]);
var inst_28858 = inst_28861;
var state_28881__$1 = (function (){var statearr_28891 = state_28881;
(statearr_28891[(10)] = inst_28870);

(statearr_28891[(7)] = inst_28858);

return statearr_28891;
})();
var statearr_28892_28913 = state_28881__$1;
(statearr_28892_28913[(2)] = null);

(statearr_28892_28913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (9))){
var inst_28861 = (state_28881[(8)]);
var state_28881__$1 = state_28881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28881__$1,(11),out,inst_28861);
} else {
if((state_val_28882 === (5))){
var inst_28858 = (state_28881[(7)]);
var inst_28861 = (state_28881[(8)]);
var inst_28865 = cljs.core._EQ_.call(null,inst_28861,inst_28858);
var state_28881__$1 = state_28881;
if(inst_28865){
var statearr_28894_28914 = state_28881__$1;
(statearr_28894_28914[(1)] = (8));

} else {
var statearr_28895_28915 = state_28881__$1;
(statearr_28895_28915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (10))){
var inst_28873 = (state_28881[(2)]);
var state_28881__$1 = state_28881;
var statearr_28896_28916 = state_28881__$1;
(statearr_28896_28916[(2)] = inst_28873);

(statearr_28896_28916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (8))){
var inst_28858 = (state_28881[(7)]);
var tmp28893 = inst_28858;
var inst_28858__$1 = tmp28893;
var state_28881__$1 = (function (){var statearr_28897 = state_28881;
(statearr_28897[(7)] = inst_28858__$1);

return statearr_28897;
})();
var statearr_28898_28917 = state_28881__$1;
(statearr_28898_28917[(2)] = null);

(statearr_28898_28917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__22071__auto___28907,out))
;
return ((function (switch__22009__auto__,c__22071__auto___28907,out){
return (function() {
var cljs$core$async$state_machine__22010__auto__ = null;
var cljs$core$async$state_machine__22010__auto____0 = (function (){
var statearr_28902 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28902[(0)] = cljs$core$async$state_machine__22010__auto__);

(statearr_28902[(1)] = (1));

return statearr_28902;
});
var cljs$core$async$state_machine__22010__auto____1 = (function (state_28881){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_28881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e28903){if((e28903 instanceof Object)){
var ex__22013__auto__ = e28903;
var statearr_28904_28918 = state_28881;
(statearr_28904_28918[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28919 = state_28881;
state_28881 = G__28919;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$state_machine__22010__auto__ = function(state_28881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22010__auto____1.call(this,state_28881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22010__auto____0;
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22010__auto____1;
return cljs$core$async$state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___28907,out))
})();
var state__22073__auto__ = (function (){var statearr_28905 = f__22072__auto__.call(null);
(statearr_28905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___28907);

return statearr_28905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___28907,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__28921 = arguments.length;
switch (G__28921) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22071__auto___28990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___28990,out){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___28990,out){
return (function (state_28959){
var state_val_28960 = (state_28959[(1)]);
if((state_val_28960 === (7))){
var inst_28955 = (state_28959[(2)]);
var state_28959__$1 = state_28959;
var statearr_28961_28991 = state_28959__$1;
(statearr_28961_28991[(2)] = inst_28955);

(statearr_28961_28991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28960 === (1))){
var inst_28922 = (new Array(n));
var inst_28923 = inst_28922;
var inst_28924 = (0);
var state_28959__$1 = (function (){var statearr_28962 = state_28959;
(statearr_28962[(7)] = inst_28924);

(statearr_28962[(8)] = inst_28923);

return statearr_28962;
})();
var statearr_28963_28992 = state_28959__$1;
(statearr_28963_28992[(2)] = null);

(statearr_28963_28992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28960 === (4))){
var inst_28927 = (state_28959[(9)]);
var inst_28927__$1 = (state_28959[(2)]);
var inst_28928 = (inst_28927__$1 == null);
var inst_28929 = cljs.core.not.call(null,inst_28928);
var state_28959__$1 = (function (){var statearr_28964 = state_28959;
(statearr_28964[(9)] = inst_28927__$1);

return statearr_28964;
})();
if(inst_28929){
var statearr_28965_28993 = state_28959__$1;
(statearr_28965_28993[(1)] = (5));

} else {
var statearr_28966_28994 = state_28959__$1;
(statearr_28966_28994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28960 === (15))){
var inst_28949 = (state_28959[(2)]);
var state_28959__$1 = state_28959;
var statearr_28967_28995 = state_28959__$1;
(statearr_28967_28995[(2)] = inst_28949);

(statearr_28967_28995[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28960 === (13))){
var state_28959__$1 = state_28959;
var statearr_28968_28996 = state_28959__$1;
(statearr_28968_28996[(2)] = null);

(statearr_28968_28996[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28960 === (6))){
var inst_28924 = (state_28959[(7)]);
var inst_28945 = (inst_28924 > (0));
var state_28959__$1 = state_28959;
if(cljs.core.truth_(inst_28945)){
var statearr_28969_28997 = state_28959__$1;
(statearr_28969_28997[(1)] = (12));

} else {
var statearr_28970_28998 = state_28959__$1;
(statearr_28970_28998[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28960 === (3))){
var inst_28957 = (state_28959[(2)]);
var state_28959__$1 = state_28959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28959__$1,inst_28957);
} else {
if((state_val_28960 === (12))){
var inst_28923 = (state_28959[(8)]);
var inst_28947 = cljs.core.vec.call(null,inst_28923);
var state_28959__$1 = state_28959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28959__$1,(15),out,inst_28947);
} else {
if((state_val_28960 === (2))){
var state_28959__$1 = state_28959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28959__$1,(4),ch);
} else {
if((state_val_28960 === (11))){
var inst_28939 = (state_28959[(2)]);
var inst_28940 = (new Array(n));
var inst_28923 = inst_28940;
var inst_28924 = (0);
var state_28959__$1 = (function (){var statearr_28971 = state_28959;
(statearr_28971[(7)] = inst_28924);

(statearr_28971[(8)] = inst_28923);

(statearr_28971[(10)] = inst_28939);

return statearr_28971;
})();
var statearr_28972_28999 = state_28959__$1;
(statearr_28972_28999[(2)] = null);

(statearr_28972_28999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28960 === (9))){
var inst_28923 = (state_28959[(8)]);
var inst_28937 = cljs.core.vec.call(null,inst_28923);
var state_28959__$1 = state_28959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28959__$1,(11),out,inst_28937);
} else {
if((state_val_28960 === (5))){
var inst_28924 = (state_28959[(7)]);
var inst_28923 = (state_28959[(8)]);
var inst_28932 = (state_28959[(11)]);
var inst_28927 = (state_28959[(9)]);
var inst_28931 = (inst_28923[inst_28924] = inst_28927);
var inst_28932__$1 = (inst_28924 + (1));
var inst_28933 = (inst_28932__$1 < n);
var state_28959__$1 = (function (){var statearr_28973 = state_28959;
(statearr_28973[(12)] = inst_28931);

(statearr_28973[(11)] = inst_28932__$1);

return statearr_28973;
})();
if(cljs.core.truth_(inst_28933)){
var statearr_28974_29000 = state_28959__$1;
(statearr_28974_29000[(1)] = (8));

} else {
var statearr_28975_29001 = state_28959__$1;
(statearr_28975_29001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28960 === (14))){
var inst_28952 = (state_28959[(2)]);
var inst_28953 = cljs.core.async.close_BANG_.call(null,out);
var state_28959__$1 = (function (){var statearr_28977 = state_28959;
(statearr_28977[(13)] = inst_28952);

return statearr_28977;
})();
var statearr_28978_29002 = state_28959__$1;
(statearr_28978_29002[(2)] = inst_28953);

(statearr_28978_29002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28960 === (10))){
var inst_28943 = (state_28959[(2)]);
var state_28959__$1 = state_28959;
var statearr_28979_29003 = state_28959__$1;
(statearr_28979_29003[(2)] = inst_28943);

(statearr_28979_29003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28960 === (8))){
var inst_28923 = (state_28959[(8)]);
var inst_28932 = (state_28959[(11)]);
var tmp28976 = inst_28923;
var inst_28923__$1 = tmp28976;
var inst_28924 = inst_28932;
var state_28959__$1 = (function (){var statearr_28980 = state_28959;
(statearr_28980[(7)] = inst_28924);

(statearr_28980[(8)] = inst_28923__$1);

return statearr_28980;
})();
var statearr_28981_29004 = state_28959__$1;
(statearr_28981_29004[(2)] = null);

(statearr_28981_29004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__22071__auto___28990,out))
;
return ((function (switch__22009__auto__,c__22071__auto___28990,out){
return (function() {
var cljs$core$async$state_machine__22010__auto__ = null;
var cljs$core$async$state_machine__22010__auto____0 = (function (){
var statearr_28985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28985[(0)] = cljs$core$async$state_machine__22010__auto__);

(statearr_28985[(1)] = (1));

return statearr_28985;
});
var cljs$core$async$state_machine__22010__auto____1 = (function (state_28959){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_28959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e28986){if((e28986 instanceof Object)){
var ex__22013__auto__ = e28986;
var statearr_28987_29005 = state_28959;
(statearr_28987_29005[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29006 = state_28959;
state_28959 = G__29006;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$state_machine__22010__auto__ = function(state_28959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22010__auto____1.call(this,state_28959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22010__auto____0;
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22010__auto____1;
return cljs$core$async$state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___28990,out))
})();
var state__22073__auto__ = (function (){var statearr_28988 = f__22072__auto__.call(null);
(statearr_28988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___28990);

return statearr_28988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___28990,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__29008 = arguments.length;
switch (G__29008) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22071__auto___29081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___29081,out){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___29081,out){
return (function (state_29050){
var state_val_29051 = (state_29050[(1)]);
if((state_val_29051 === (7))){
var inst_29046 = (state_29050[(2)]);
var state_29050__$1 = state_29050;
var statearr_29052_29082 = state_29050__$1;
(statearr_29052_29082[(2)] = inst_29046);

(statearr_29052_29082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (1))){
var inst_29009 = [];
var inst_29010 = inst_29009;
var inst_29011 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29050__$1 = (function (){var statearr_29053 = state_29050;
(statearr_29053[(7)] = inst_29011);

(statearr_29053[(8)] = inst_29010);

return statearr_29053;
})();
var statearr_29054_29083 = state_29050__$1;
(statearr_29054_29083[(2)] = null);

(statearr_29054_29083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (4))){
var inst_29014 = (state_29050[(9)]);
var inst_29014__$1 = (state_29050[(2)]);
var inst_29015 = (inst_29014__$1 == null);
var inst_29016 = cljs.core.not.call(null,inst_29015);
var state_29050__$1 = (function (){var statearr_29055 = state_29050;
(statearr_29055[(9)] = inst_29014__$1);

return statearr_29055;
})();
if(inst_29016){
var statearr_29056_29084 = state_29050__$1;
(statearr_29056_29084[(1)] = (5));

} else {
var statearr_29057_29085 = state_29050__$1;
(statearr_29057_29085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (15))){
var inst_29040 = (state_29050[(2)]);
var state_29050__$1 = state_29050;
var statearr_29058_29086 = state_29050__$1;
(statearr_29058_29086[(2)] = inst_29040);

(statearr_29058_29086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (13))){
var state_29050__$1 = state_29050;
var statearr_29059_29087 = state_29050__$1;
(statearr_29059_29087[(2)] = null);

(statearr_29059_29087[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (6))){
var inst_29010 = (state_29050[(8)]);
var inst_29035 = inst_29010.length;
var inst_29036 = (inst_29035 > (0));
var state_29050__$1 = state_29050;
if(cljs.core.truth_(inst_29036)){
var statearr_29060_29088 = state_29050__$1;
(statearr_29060_29088[(1)] = (12));

} else {
var statearr_29061_29089 = state_29050__$1;
(statearr_29061_29089[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (3))){
var inst_29048 = (state_29050[(2)]);
var state_29050__$1 = state_29050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29050__$1,inst_29048);
} else {
if((state_val_29051 === (12))){
var inst_29010 = (state_29050[(8)]);
var inst_29038 = cljs.core.vec.call(null,inst_29010);
var state_29050__$1 = state_29050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29050__$1,(15),out,inst_29038);
} else {
if((state_val_29051 === (2))){
var state_29050__$1 = state_29050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29050__$1,(4),ch);
} else {
if((state_val_29051 === (11))){
var inst_29018 = (state_29050[(10)]);
var inst_29014 = (state_29050[(9)]);
var inst_29028 = (state_29050[(2)]);
var inst_29029 = [];
var inst_29030 = inst_29029.push(inst_29014);
var inst_29010 = inst_29029;
var inst_29011 = inst_29018;
var state_29050__$1 = (function (){var statearr_29062 = state_29050;
(statearr_29062[(11)] = inst_29030);

(statearr_29062[(7)] = inst_29011);

(statearr_29062[(12)] = inst_29028);

(statearr_29062[(8)] = inst_29010);

return statearr_29062;
})();
var statearr_29063_29090 = state_29050__$1;
(statearr_29063_29090[(2)] = null);

(statearr_29063_29090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (9))){
var inst_29010 = (state_29050[(8)]);
var inst_29026 = cljs.core.vec.call(null,inst_29010);
var state_29050__$1 = state_29050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29050__$1,(11),out,inst_29026);
} else {
if((state_val_29051 === (5))){
var inst_29018 = (state_29050[(10)]);
var inst_29014 = (state_29050[(9)]);
var inst_29011 = (state_29050[(7)]);
var inst_29018__$1 = f.call(null,inst_29014);
var inst_29019 = cljs.core._EQ_.call(null,inst_29018__$1,inst_29011);
var inst_29020 = cljs.core.keyword_identical_QMARK_.call(null,inst_29011,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29021 = (inst_29019) || (inst_29020);
var state_29050__$1 = (function (){var statearr_29064 = state_29050;
(statearr_29064[(10)] = inst_29018__$1);

return statearr_29064;
})();
if(cljs.core.truth_(inst_29021)){
var statearr_29065_29091 = state_29050__$1;
(statearr_29065_29091[(1)] = (8));

} else {
var statearr_29066_29092 = state_29050__$1;
(statearr_29066_29092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (14))){
var inst_29043 = (state_29050[(2)]);
var inst_29044 = cljs.core.async.close_BANG_.call(null,out);
var state_29050__$1 = (function (){var statearr_29068 = state_29050;
(statearr_29068[(13)] = inst_29043);

return statearr_29068;
})();
var statearr_29069_29093 = state_29050__$1;
(statearr_29069_29093[(2)] = inst_29044);

(statearr_29069_29093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (10))){
var inst_29033 = (state_29050[(2)]);
var state_29050__$1 = state_29050;
var statearr_29070_29094 = state_29050__$1;
(statearr_29070_29094[(2)] = inst_29033);

(statearr_29070_29094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (8))){
var inst_29018 = (state_29050[(10)]);
var inst_29014 = (state_29050[(9)]);
var inst_29010 = (state_29050[(8)]);
var inst_29023 = inst_29010.push(inst_29014);
var tmp29067 = inst_29010;
var inst_29010__$1 = tmp29067;
var inst_29011 = inst_29018;
var state_29050__$1 = (function (){var statearr_29071 = state_29050;
(statearr_29071[(7)] = inst_29011);

(statearr_29071[(14)] = inst_29023);

(statearr_29071[(8)] = inst_29010__$1);

return statearr_29071;
})();
var statearr_29072_29095 = state_29050__$1;
(statearr_29072_29095[(2)] = null);

(statearr_29072_29095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__22071__auto___29081,out))
;
return ((function (switch__22009__auto__,c__22071__auto___29081,out){
return (function() {
var cljs$core$async$state_machine__22010__auto__ = null;
var cljs$core$async$state_machine__22010__auto____0 = (function (){
var statearr_29076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29076[(0)] = cljs$core$async$state_machine__22010__auto__);

(statearr_29076[(1)] = (1));

return statearr_29076;
});
var cljs$core$async$state_machine__22010__auto____1 = (function (state_29050){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_29050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e29077){if((e29077 instanceof Object)){
var ex__22013__auto__ = e29077;
var statearr_29078_29096 = state_29050;
(statearr_29078_29096[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29097 = state_29050;
state_29050 = G__29097;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$state_machine__22010__auto__ = function(state_29050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22010__auto____1.call(this,state_29050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22010__auto____0;
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22010__auto____1;
return cljs$core$async$state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___29081,out))
})();
var state__22073__auto__ = (function (){var statearr_29079 = f__22072__auto__.call(null);
(statearr_29079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___29081);

return statearr_29079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___29081,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1443194341020