// Compiled by ClojureScript 0.0-3211 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('reagent.core');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
/**
 * read all pending events from the channel and drop them on the floor
 */
re_frame.router.purge_chan = (function re_frame$router$purge_chan(){
return null;
});
re_frame.router.router_loop = (function re_frame$router$router_loop(){
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto__){
return (function (state_26568){
var state_val_26569 = (state_26568[(1)]);
if((state_val_26569 === (7))){
var inst_26553 = (state_26568[(2)]);
var state_26568__$1 = (function (){var statearr_26570 = state_26568;
(statearr_26570[(7)] = inst_26553);

return statearr_26570;
})();
var statearr_26571_26591 = state_26568__$1;
(statearr_26571_26591[(2)] = null);

(statearr_26571_26591[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (1))){
var state_26568__$1 = state_26568;
var statearr_26572_26592 = state_26568__$1;
(statearr_26572_26592[(2)] = null);

(statearr_26572_26592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (4))){
var inst_26540 = (state_26568[(8)]);
var inst_26540__$1 = (state_26568[(2)]);
var inst_26541 = cljs.core.meta.call(null,inst_26540__$1);
var inst_26542 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_26541);
var state_26568__$1 = (function (){var statearr_26573 = state_26568;
(statearr_26573[(8)] = inst_26540__$1);

return statearr_26573;
})();
if(cljs.core.truth_(inst_26542)){
var statearr_26574_26593 = state_26568__$1;
(statearr_26574_26593[(1)] = (5));

} else {
var statearr_26575_26594 = state_26568__$1;
(statearr_26575_26594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (6))){
var inst_26549 = cljs.core.async.timeout.call(null,(0));
var state_26568__$1 = state_26568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26568__$1,(9),inst_26549);
} else {
if((state_val_26569 === (3))){
var inst_26566 = (state_26568[(2)]);
var state_26568__$1 = state_26568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26568__$1,inst_26566);
} else {
if((state_val_26569 === (12))){
var inst_26540 = (state_26568[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26568,(11),Object,null,(10));
var inst_26561 = re_frame.handlers.handle.call(null,inst_26540);
var state_26568__$1 = state_26568;
var statearr_26576_26595 = state_26568__$1;
(statearr_26576_26595[(2)] = inst_26561);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26568__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (2))){
var state_26568__$1 = state_26568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26568__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_26569 === (11))){
var inst_26554 = (state_26568[(2)]);
var inst_26555 = re_frame.router.purge_chan.call(null);
var inst_26556 = re_frame$router$router_loop.call(null);
var inst_26557 = (function(){throw inst_26554})();
var state_26568__$1 = (function (){var statearr_26577 = state_26568;
(statearr_26577[(9)] = inst_26556);

(statearr_26577[(10)] = inst_26555);

return statearr_26577;
})();
var statearr_26578_26596 = state_26568__$1;
(statearr_26578_26596[(2)] = inst_26557);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26568__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (9))){
var inst_26551 = (state_26568[(2)]);
var state_26568__$1 = state_26568;
var statearr_26579_26597 = state_26568__$1;
(statearr_26579_26597[(2)] = inst_26551);

(statearr_26579_26597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (5))){
var inst_26544 = reagent.core.flush.call(null);
var inst_26545 = cljs.core.async.timeout.call(null,(20));
var state_26568__$1 = (function (){var statearr_26580 = state_26568;
(statearr_26580[(11)] = inst_26544);

return statearr_26580;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26568__$1,(8),inst_26545);
} else {
if((state_val_26569 === (10))){
var inst_26563 = (state_26568[(2)]);
var state_26568__$1 = (function (){var statearr_26581 = state_26568;
(statearr_26581[(12)] = inst_26563);

return statearr_26581;
})();
var statearr_26582_26598 = state_26568__$1;
(statearr_26582_26598[(2)] = null);

(statearr_26582_26598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (8))){
var inst_26547 = (state_26568[(2)]);
var state_26568__$1 = state_26568;
var statearr_26583_26599 = state_26568__$1;
(statearr_26583_26599[(2)] = inst_26547);

(statearr_26583_26599[(1)] = (7));


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
});})(c__22071__auto__))
;
return ((function (switch__22009__auto__,c__22071__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__22010__auto__ = null;
var re_frame$router$router_loop_$_state_machine__22010__auto____0 = (function (){
var statearr_26587 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26587[(0)] = re_frame$router$router_loop_$_state_machine__22010__auto__);

(statearr_26587[(1)] = (1));

return statearr_26587;
});
var re_frame$router$router_loop_$_state_machine__22010__auto____1 = (function (state_26568){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_26568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e26588){if((e26588 instanceof Object)){
var ex__22013__auto__ = e26588;
var statearr_26589_26600 = state_26568;
(statearr_26589_26600[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26601 = state_26568;
state_26568 = G__26601;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__22010__auto__ = function(state_26568){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__22010__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__22010__auto____1.call(this,state_26568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__22010__auto____0;
re_frame$router$router_loop_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__22010__auto____1;
return re_frame$router$router_loop_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto__))
})();
var state__22073__auto__ = (function (){var statearr_26590 = f__22072__auto__.call(null);
(statearr_26590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_26590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__))
);

return c__22071__auto__;
});
re_frame.router.router_loop.call(null);
/**
 * Send an event to be processed by the registered handler.
 * 
 * Usage example:
 * (dispatch [:delete-item 42])
 * 
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.error.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,re_frame.router.event_chan,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler, but avoid the async-inducing
 * use of core.async/chan.
 * 
 * Usage example:
 * (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map?rel=1443194339646