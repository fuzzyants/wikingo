// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30075__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30075 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30076__i = 0, G__30076__a = new Array(arguments.length -  0);
while (G__30076__i < G__30076__a.length) {G__30076__a[G__30076__i] = arguments[G__30076__i + 0]; ++G__30076__i;}
  args = new cljs.core.IndexedSeq(G__30076__a,0);
} 
return G__30075__delegate.call(this,args);};
G__30075.cljs$lang$maxFixedArity = 0;
G__30075.cljs$lang$applyTo = (function (arglist__30077){
var args = cljs.core.seq(arglist__30077);
return G__30075__delegate(args);
});
G__30075.cljs$core$IFn$_invoke$arity$variadic = G__30075__delegate;
return G__30075;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30078){
var map__30080 = p__30078;
var map__30080__$1 = ((cljs.core.seq_QMARK_.call(null,map__30080))?cljs.core.apply.call(null,cljs.core.hash_map,map__30080):map__30080);
var class$ = cljs.core.get.call(null,map__30080__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__30080__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18160__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18148__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18148__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18148__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22071__auto___30209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___30209,ch){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___30209,ch){
return (function (state_30183){
var state_val_30184 = (state_30183[(1)]);
if((state_val_30184 === (7))){
var inst_30179 = (state_30183[(2)]);
var state_30183__$1 = state_30183;
var statearr_30185_30210 = state_30183__$1;
(statearr_30185_30210[(2)] = inst_30179);

(statearr_30185_30210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (1))){
var state_30183__$1 = state_30183;
var statearr_30186_30211 = state_30183__$1;
(statearr_30186_30211[(2)] = null);

(statearr_30186_30211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (4))){
var inst_30147 = (state_30183[(7)]);
var inst_30147__$1 = (state_30183[(2)]);
var state_30183__$1 = (function (){var statearr_30187 = state_30183;
(statearr_30187[(7)] = inst_30147__$1);

return statearr_30187;
})();
if(cljs.core.truth_(inst_30147__$1)){
var statearr_30188_30212 = state_30183__$1;
(statearr_30188_30212[(1)] = (5));

} else {
var statearr_30189_30213 = state_30183__$1;
(statearr_30189_30213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (13))){
var state_30183__$1 = state_30183;
var statearr_30190_30214 = state_30183__$1;
(statearr_30190_30214[(2)] = null);

(statearr_30190_30214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (6))){
var state_30183__$1 = state_30183;
var statearr_30191_30215 = state_30183__$1;
(statearr_30191_30215[(2)] = null);

(statearr_30191_30215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (3))){
var inst_30181 = (state_30183[(2)]);
var state_30183__$1 = state_30183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30183__$1,inst_30181);
} else {
if((state_val_30184 === (12))){
var inst_30154 = (state_30183[(8)]);
var inst_30167 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30154);
var inst_30168 = cljs.core.first.call(null,inst_30167);
var inst_30169 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30168);
var inst_30170 = console.warn("Figwheel: Not loading code with warnings - ",inst_30169);
var state_30183__$1 = state_30183;
var statearr_30192_30216 = state_30183__$1;
(statearr_30192_30216[(2)] = inst_30170);

(statearr_30192_30216[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (2))){
var state_30183__$1 = state_30183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30183__$1,(4),ch);
} else {
if((state_val_30184 === (11))){
var inst_30163 = (state_30183[(2)]);
var state_30183__$1 = state_30183;
var statearr_30193_30217 = state_30183__$1;
(statearr_30193_30217[(2)] = inst_30163);

(statearr_30193_30217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (9))){
var inst_30153 = (state_30183[(9)]);
var inst_30165 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30153,opts);
var state_30183__$1 = state_30183;
if(cljs.core.truth_(inst_30165)){
var statearr_30194_30218 = state_30183__$1;
(statearr_30194_30218[(1)] = (12));

} else {
var statearr_30195_30219 = state_30183__$1;
(statearr_30195_30219[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (5))){
var inst_30147 = (state_30183[(7)]);
var inst_30153 = (state_30183[(9)]);
var inst_30149 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30150 = (new cljs.core.PersistentArrayMap(null,2,inst_30149,null));
var inst_30151 = (new cljs.core.PersistentHashSet(null,inst_30150,null));
var inst_30152 = figwheel.client.focus_msgs.call(null,inst_30151,inst_30147);
var inst_30153__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30152);
var inst_30154 = cljs.core.first.call(null,inst_30152);
var inst_30155 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30153__$1,opts);
var state_30183__$1 = (function (){var statearr_30196 = state_30183;
(statearr_30196[(8)] = inst_30154);

(statearr_30196[(9)] = inst_30153__$1);

return statearr_30196;
})();
if(cljs.core.truth_(inst_30155)){
var statearr_30197_30220 = state_30183__$1;
(statearr_30197_30220[(1)] = (8));

} else {
var statearr_30198_30221 = state_30183__$1;
(statearr_30198_30221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (14))){
var inst_30173 = (state_30183[(2)]);
var state_30183__$1 = state_30183;
var statearr_30199_30222 = state_30183__$1;
(statearr_30199_30222[(2)] = inst_30173);

(statearr_30199_30222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (10))){
var inst_30175 = (state_30183[(2)]);
var state_30183__$1 = (function (){var statearr_30200 = state_30183;
(statearr_30200[(10)] = inst_30175);

return statearr_30200;
})();
var statearr_30201_30223 = state_30183__$1;
(statearr_30201_30223[(2)] = null);

(statearr_30201_30223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (8))){
var inst_30154 = (state_30183[(8)]);
var inst_30157 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30158 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30154);
var inst_30159 = cljs.core.async.timeout.call(null,(1000));
var inst_30160 = [inst_30158,inst_30159];
var inst_30161 = (new cljs.core.PersistentVector(null,2,(5),inst_30157,inst_30160,null));
var state_30183__$1 = state_30183;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30183__$1,(11),inst_30161);
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
});})(c__22071__auto___30209,ch))
;
return ((function (switch__22009__auto__,c__22071__auto___30209,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22010__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22010__auto____0 = (function (){
var statearr_30205 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30205[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22010__auto__);

(statearr_30205[(1)] = (1));

return statearr_30205;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22010__auto____1 = (function (state_30183){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_30183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e30206){if((e30206 instanceof Object)){
var ex__22013__auto__ = e30206;
var statearr_30207_30224 = state_30183;
(statearr_30207_30224[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30225 = state_30183;
state_30183 = G__30225;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22010__auto__ = function(state_30183){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22010__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22010__auto____1.call(this,state_30183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22010__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22010__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___30209,ch))
})();
var state__22073__auto__ = (function (){var statearr_30208 = f__22072__auto__.call(null);
(statearr_30208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___30209);

return statearr_30208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___30209,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30226_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30226_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_30233 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30233){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_30231 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30232 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30231,_STAR_print_newline_STAR_30232,base_path_30233){
return (function() { 
var G__30234__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30234 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30235__i = 0, G__30235__a = new Array(arguments.length -  0);
while (G__30235__i < G__30235__a.length) {G__30235__a[G__30235__i] = arguments[G__30235__i + 0]; ++G__30235__i;}
  args = new cljs.core.IndexedSeq(G__30235__a,0);
} 
return G__30234__delegate.call(this,args);};
G__30234.cljs$lang$maxFixedArity = 0;
G__30234.cljs$lang$applyTo = (function (arglist__30236){
var args = cljs.core.seq(arglist__30236);
return G__30234__delegate(args);
});
G__30234.cljs$core$IFn$_invoke$arity$variadic = G__30234__delegate;
return G__30234;
})()
;})(_STAR_print_fn_STAR_30231,_STAR_print_newline_STAR_30232,base_path_30233))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30232;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30231;
}}catch (e30230){if((e30230 instanceof Error)){
var e = e30230;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30233], null));
} else {
var e = e30230;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30233))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30237){
var map__30242 = p__30237;
var map__30242__$1 = ((cljs.core.seq_QMARK_.call(null,map__30242))?cljs.core.apply.call(null,cljs.core.hash_map,map__30242):map__30242);
var opts = map__30242__$1;
var build_id = cljs.core.get.call(null,map__30242__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30242,map__30242__$1,opts,build_id){
return (function (p__30243){
var vec__30244 = p__30243;
var map__30245 = cljs.core.nth.call(null,vec__30244,(0),null);
var map__30245__$1 = ((cljs.core.seq_QMARK_.call(null,map__30245))?cljs.core.apply.call(null,cljs.core.hash_map,map__30245):map__30245);
var msg = map__30245__$1;
var msg_name = cljs.core.get.call(null,map__30245__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30244,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__30244,map__30245,map__30245__$1,msg,msg_name,_,map__30242,map__30242__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30244,map__30245,map__30245__$1,msg,msg_name,_,map__30242,map__30242__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30242,map__30242__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30249){
var vec__30250 = p__30249;
var map__30251 = cljs.core.nth.call(null,vec__30250,(0),null);
var map__30251__$1 = ((cljs.core.seq_QMARK_.call(null,map__30251))?cljs.core.apply.call(null,cljs.core.hash_map,map__30251):map__30251);
var msg = map__30251__$1;
var msg_name = cljs.core.get.call(null,map__30251__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30250,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30252){
var map__30260 = p__30252;
var map__30260__$1 = ((cljs.core.seq_QMARK_.call(null,map__30260))?cljs.core.apply.call(null,cljs.core.hash_map,map__30260):map__30260);
var on_compile_fail = cljs.core.get.call(null,map__30260__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__30260__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__30260,map__30260__$1,on_compile_fail,on_compile_warning){
return (function (p__30261){
var vec__30262 = p__30261;
var map__30263 = cljs.core.nth.call(null,vec__30262,(0),null);
var map__30263__$1 = ((cljs.core.seq_QMARK_.call(null,map__30263))?cljs.core.apply.call(null,cljs.core.hash_map,map__30263):map__30263);
var msg = map__30263__$1;
var msg_name = cljs.core.get.call(null,map__30263__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30262,(1));
var pred__30264 = cljs.core._EQ_;
var expr__30265 = msg_name;
if(cljs.core.truth_(pred__30264.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30265))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30264.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30265))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30260,map__30260__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto__,msg_hist,msg_names,msg){
return (function (state_30466){
var state_val_30467 = (state_30466[(1)]);
if((state_val_30467 === (7))){
var inst_30400 = (state_30466[(2)]);
var state_30466__$1 = state_30466;
var statearr_30468_30509 = state_30466__$1;
(statearr_30468_30509[(2)] = inst_30400);

(statearr_30468_30509[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (20))){
var inst_30428 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30466__$1 = state_30466;
if(cljs.core.truth_(inst_30428)){
var statearr_30469_30510 = state_30466__$1;
(statearr_30469_30510[(1)] = (22));

} else {
var statearr_30470_30511 = state_30466__$1;
(statearr_30470_30511[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (27))){
var inst_30440 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30441 = figwheel.client.heads_up.display_warning.call(null,inst_30440);
var state_30466__$1 = state_30466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30466__$1,(30),inst_30441);
} else {
if((state_val_30467 === (1))){
var inst_30388 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30466__$1 = state_30466;
if(cljs.core.truth_(inst_30388)){
var statearr_30471_30512 = state_30466__$1;
(statearr_30471_30512[(1)] = (2));

} else {
var statearr_30472_30513 = state_30466__$1;
(statearr_30472_30513[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (24))){
var inst_30456 = (state_30466[(2)]);
var state_30466__$1 = state_30466;
var statearr_30473_30514 = state_30466__$1;
(statearr_30473_30514[(2)] = inst_30456);

(statearr_30473_30514[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (4))){
var inst_30464 = (state_30466[(2)]);
var state_30466__$1 = state_30466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30466__$1,inst_30464);
} else {
if((state_val_30467 === (15))){
var inst_30416 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30417 = figwheel.client.format_messages.call(null,inst_30416);
var inst_30418 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30419 = figwheel.client.heads_up.display_error.call(null,inst_30417,inst_30418);
var state_30466__$1 = state_30466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30466__$1,(18),inst_30419);
} else {
if((state_val_30467 === (21))){
var inst_30458 = (state_30466[(2)]);
var state_30466__$1 = state_30466;
var statearr_30474_30515 = state_30466__$1;
(statearr_30474_30515[(2)] = inst_30458);

(statearr_30474_30515[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (31))){
var inst_30447 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30466__$1 = state_30466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30466__$1,(34),inst_30447);
} else {
if((state_val_30467 === (32))){
var state_30466__$1 = state_30466;
var statearr_30475_30516 = state_30466__$1;
(statearr_30475_30516[(2)] = null);

(statearr_30475_30516[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (33))){
var inst_30452 = (state_30466[(2)]);
var state_30466__$1 = state_30466;
var statearr_30476_30517 = state_30466__$1;
(statearr_30476_30517[(2)] = inst_30452);

(statearr_30476_30517[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (13))){
var inst_30406 = (state_30466[(2)]);
var inst_30407 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30408 = figwheel.client.format_messages.call(null,inst_30407);
var inst_30409 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30410 = figwheel.client.heads_up.display_error.call(null,inst_30408,inst_30409);
var state_30466__$1 = (function (){var statearr_30477 = state_30466;
(statearr_30477[(7)] = inst_30406);

return statearr_30477;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30466__$1,(14),inst_30410);
} else {
if((state_val_30467 === (22))){
var inst_30430 = figwheel.client.heads_up.clear.call(null);
var state_30466__$1 = state_30466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30466__$1,(25),inst_30430);
} else {
if((state_val_30467 === (29))){
var inst_30454 = (state_30466[(2)]);
var state_30466__$1 = state_30466;
var statearr_30478_30518 = state_30466__$1;
(statearr_30478_30518[(2)] = inst_30454);

(statearr_30478_30518[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (6))){
var inst_30396 = figwheel.client.heads_up.clear.call(null);
var state_30466__$1 = state_30466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30466__$1,(9),inst_30396);
} else {
if((state_val_30467 === (28))){
var inst_30445 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30466__$1 = state_30466;
if(cljs.core.truth_(inst_30445)){
var statearr_30479_30519 = state_30466__$1;
(statearr_30479_30519[(1)] = (31));

} else {
var statearr_30480_30520 = state_30466__$1;
(statearr_30480_30520[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (25))){
var inst_30432 = (state_30466[(2)]);
var inst_30433 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30434 = figwheel.client.heads_up.display_warning.call(null,inst_30433);
var state_30466__$1 = (function (){var statearr_30481 = state_30466;
(statearr_30481[(8)] = inst_30432);

return statearr_30481;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30466__$1,(26),inst_30434);
} else {
if((state_val_30467 === (34))){
var inst_30449 = (state_30466[(2)]);
var state_30466__$1 = state_30466;
var statearr_30482_30521 = state_30466__$1;
(statearr_30482_30521[(2)] = inst_30449);

(statearr_30482_30521[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (17))){
var inst_30460 = (state_30466[(2)]);
var state_30466__$1 = state_30466;
var statearr_30483_30522 = state_30466__$1;
(statearr_30483_30522[(2)] = inst_30460);

(statearr_30483_30522[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (3))){
var inst_30402 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30466__$1 = state_30466;
if(cljs.core.truth_(inst_30402)){
var statearr_30484_30523 = state_30466__$1;
(statearr_30484_30523[(1)] = (10));

} else {
var statearr_30485_30524 = state_30466__$1;
(statearr_30485_30524[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (12))){
var inst_30462 = (state_30466[(2)]);
var state_30466__$1 = state_30466;
var statearr_30486_30525 = state_30466__$1;
(statearr_30486_30525[(2)] = inst_30462);

(statearr_30486_30525[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (2))){
var inst_30390 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30466__$1 = state_30466;
if(cljs.core.truth_(inst_30390)){
var statearr_30487_30526 = state_30466__$1;
(statearr_30487_30526[(1)] = (5));

} else {
var statearr_30488_30527 = state_30466__$1;
(statearr_30488_30527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (23))){
var inst_30438 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30466__$1 = state_30466;
if(cljs.core.truth_(inst_30438)){
var statearr_30489_30528 = state_30466__$1;
(statearr_30489_30528[(1)] = (27));

} else {
var statearr_30490_30529 = state_30466__$1;
(statearr_30490_30529[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (19))){
var inst_30425 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30426 = figwheel.client.heads_up.append_message.call(null,inst_30425);
var state_30466__$1 = state_30466;
var statearr_30491_30530 = state_30466__$1;
(statearr_30491_30530[(2)] = inst_30426);

(statearr_30491_30530[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (11))){
var inst_30414 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30466__$1 = state_30466;
if(cljs.core.truth_(inst_30414)){
var statearr_30492_30531 = state_30466__$1;
(statearr_30492_30531[(1)] = (15));

} else {
var statearr_30493_30532 = state_30466__$1;
(statearr_30493_30532[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (9))){
var inst_30398 = (state_30466[(2)]);
var state_30466__$1 = state_30466;
var statearr_30494_30533 = state_30466__$1;
(statearr_30494_30533[(2)] = inst_30398);

(statearr_30494_30533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (5))){
var inst_30392 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30466__$1 = state_30466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30466__$1,(8),inst_30392);
} else {
if((state_val_30467 === (14))){
var inst_30412 = (state_30466[(2)]);
var state_30466__$1 = state_30466;
var statearr_30495_30534 = state_30466__$1;
(statearr_30495_30534[(2)] = inst_30412);

(statearr_30495_30534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (26))){
var inst_30436 = (state_30466[(2)]);
var state_30466__$1 = state_30466;
var statearr_30496_30535 = state_30466__$1;
(statearr_30496_30535[(2)] = inst_30436);

(statearr_30496_30535[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (16))){
var inst_30423 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30466__$1 = state_30466;
if(cljs.core.truth_(inst_30423)){
var statearr_30497_30536 = state_30466__$1;
(statearr_30497_30536[(1)] = (19));

} else {
var statearr_30498_30537 = state_30466__$1;
(statearr_30498_30537[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (30))){
var inst_30443 = (state_30466[(2)]);
var state_30466__$1 = state_30466;
var statearr_30499_30538 = state_30466__$1;
(statearr_30499_30538[(2)] = inst_30443);

(statearr_30499_30538[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (10))){
var inst_30404 = figwheel.client.heads_up.clear.call(null);
var state_30466__$1 = state_30466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30466__$1,(13),inst_30404);
} else {
if((state_val_30467 === (18))){
var inst_30421 = (state_30466[(2)]);
var state_30466__$1 = state_30466;
var statearr_30500_30539 = state_30466__$1;
(statearr_30500_30539[(2)] = inst_30421);

(statearr_30500_30539[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (8))){
var inst_30394 = (state_30466[(2)]);
var state_30466__$1 = state_30466;
var statearr_30501_30540 = state_30466__$1;
(statearr_30501_30540[(2)] = inst_30394);

(statearr_30501_30540[(1)] = (7));


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
});})(c__22071__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22009__auto__,c__22071__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22010__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22010__auto____0 = (function (){
var statearr_30505 = [null,null,null,null,null,null,null,null,null];
(statearr_30505[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22010__auto__);

(statearr_30505[(1)] = (1));

return statearr_30505;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22010__auto____1 = (function (state_30466){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_30466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e30506){if((e30506 instanceof Object)){
var ex__22013__auto__ = e30506;
var statearr_30507_30541 = state_30466;
(statearr_30507_30541[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30542 = state_30466;
state_30466 = G__30542;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22010__auto__ = function(state_30466){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22010__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22010__auto____1.call(this,state_30466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22010__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22010__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto__,msg_hist,msg_names,msg))
})();
var state__22073__auto__ = (function (){var statearr_30508 = f__22072__auto__.call(null);
(statearr_30508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_30508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__,msg_hist,msg_names,msg))
);

return c__22071__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22071__auto___30605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___30605,ch){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___30605,ch){
return (function (state_30588){
var state_val_30589 = (state_30588[(1)]);
if((state_val_30589 === (8))){
var inst_30580 = (state_30588[(2)]);
var state_30588__$1 = (function (){var statearr_30590 = state_30588;
(statearr_30590[(7)] = inst_30580);

return statearr_30590;
})();
var statearr_30591_30606 = state_30588__$1;
(statearr_30591_30606[(2)] = null);

(statearr_30591_30606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30589 === (7))){
var inst_30584 = (state_30588[(2)]);
var state_30588__$1 = state_30588;
var statearr_30592_30607 = state_30588__$1;
(statearr_30592_30607[(2)] = inst_30584);

(statearr_30592_30607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30589 === (6))){
var state_30588__$1 = state_30588;
var statearr_30593_30608 = state_30588__$1;
(statearr_30593_30608[(2)] = null);

(statearr_30593_30608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30589 === (5))){
var inst_30576 = (state_30588[(8)]);
var inst_30578 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30576);
var state_30588__$1 = state_30588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30588__$1,(8),inst_30578);
} else {
if((state_val_30589 === (4))){
var inst_30576 = (state_30588[(8)]);
var inst_30576__$1 = (state_30588[(2)]);
var state_30588__$1 = (function (){var statearr_30594 = state_30588;
(statearr_30594[(8)] = inst_30576__$1);

return statearr_30594;
})();
if(cljs.core.truth_(inst_30576__$1)){
var statearr_30595_30609 = state_30588__$1;
(statearr_30595_30609[(1)] = (5));

} else {
var statearr_30596_30610 = state_30588__$1;
(statearr_30596_30610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30589 === (3))){
var inst_30586 = (state_30588[(2)]);
var state_30588__$1 = state_30588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30588__$1,inst_30586);
} else {
if((state_val_30589 === (2))){
var state_30588__$1 = state_30588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30588__$1,(4),ch);
} else {
if((state_val_30589 === (1))){
var state_30588__$1 = state_30588;
var statearr_30597_30611 = state_30588__$1;
(statearr_30597_30611[(2)] = null);

(statearr_30597_30611[(1)] = (2));


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
});})(c__22071__auto___30605,ch))
;
return ((function (switch__22009__auto__,c__22071__auto___30605,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22010__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22010__auto____0 = (function (){
var statearr_30601 = [null,null,null,null,null,null,null,null,null];
(statearr_30601[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22010__auto__);

(statearr_30601[(1)] = (1));

return statearr_30601;
});
var figwheel$client$heads_up_plugin_$_state_machine__22010__auto____1 = (function (state_30588){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_30588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e30602){if((e30602 instanceof Object)){
var ex__22013__auto__ = e30602;
var statearr_30603_30612 = state_30588;
(statearr_30603_30612[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30613 = state_30588;
state_30588 = G__30613;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22010__auto__ = function(state_30588){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22010__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22010__auto____1.call(this,state_30588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22010__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22010__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___30605,ch))
})();
var state__22073__auto__ = (function (){var statearr_30604 = f__22072__auto__.call(null);
(statearr_30604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___30605);

return statearr_30604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___30605,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto__){
return (function (state_30634){
var state_val_30635 = (state_30634[(1)]);
if((state_val_30635 === (2))){
var inst_30631 = (state_30634[(2)]);
var inst_30632 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30634__$1 = (function (){var statearr_30636 = state_30634;
(statearr_30636[(7)] = inst_30631);

return statearr_30636;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30634__$1,inst_30632);
} else {
if((state_val_30635 === (1))){
var inst_30629 = cljs.core.async.timeout.call(null,(3000));
var state_30634__$1 = state_30634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30634__$1,(2),inst_30629);
} else {
return null;
}
}
});})(c__22071__auto__))
;
return ((function (switch__22009__auto__,c__22071__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22010__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22010__auto____0 = (function (){
var statearr_30640 = [null,null,null,null,null,null,null,null];
(statearr_30640[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22010__auto__);

(statearr_30640[(1)] = (1));

return statearr_30640;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22010__auto____1 = (function (state_30634){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_30634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e30641){if((e30641 instanceof Object)){
var ex__22013__auto__ = e30641;
var statearr_30642_30644 = state_30634;
(statearr_30642_30644[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30645 = state_30634;
state_30634 = G__30645;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22010__auto__ = function(state_30634){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22010__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22010__auto____1.call(this,state_30634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22010__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22010__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto__))
})();
var state__22073__auto__ = (function (){var statearr_30643 = f__22072__auto__.call(null);
(statearr_30643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_30643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__))
);

return c__22071__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30646){
var map__30652 = p__30646;
var map__30652__$1 = ((cljs.core.seq_QMARK_.call(null,map__30652))?cljs.core.apply.call(null,cljs.core.hash_map,map__30652):map__30652);
var ed = map__30652__$1;
var cause = cljs.core.get.call(null,map__30652__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__30652__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__30652__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30653_30657 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30654_30658 = null;
var count__30655_30659 = (0);
var i__30656_30660 = (0);
while(true){
if((i__30656_30660 < count__30655_30659)){
var msg_30661 = cljs.core._nth.call(null,chunk__30654_30658,i__30656_30660);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30661);

var G__30662 = seq__30653_30657;
var G__30663 = chunk__30654_30658;
var G__30664 = count__30655_30659;
var G__30665 = (i__30656_30660 + (1));
seq__30653_30657 = G__30662;
chunk__30654_30658 = G__30663;
count__30655_30659 = G__30664;
i__30656_30660 = G__30665;
continue;
} else {
var temp__4126__auto___30666 = cljs.core.seq.call(null,seq__30653_30657);
if(temp__4126__auto___30666){
var seq__30653_30667__$1 = temp__4126__auto___30666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30653_30667__$1)){
var c__18945__auto___30668 = cljs.core.chunk_first.call(null,seq__30653_30667__$1);
var G__30669 = cljs.core.chunk_rest.call(null,seq__30653_30667__$1);
var G__30670 = c__18945__auto___30668;
var G__30671 = cljs.core.count.call(null,c__18945__auto___30668);
var G__30672 = (0);
seq__30653_30657 = G__30669;
chunk__30654_30658 = G__30670;
count__30655_30659 = G__30671;
i__30656_30660 = G__30672;
continue;
} else {
var msg_30673 = cljs.core.first.call(null,seq__30653_30667__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30673);

var G__30674 = cljs.core.next.call(null,seq__30653_30667__$1);
var G__30675 = null;
var G__30676 = (0);
var G__30677 = (0);
seq__30653_30657 = G__30674;
chunk__30654_30658 = G__30675;
count__30655_30659 = G__30676;
i__30656_30660 = G__30677;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30678){
var map__30680 = p__30678;
var map__30680__$1 = ((cljs.core.seq_QMARK_.call(null,map__30680))?cljs.core.apply.call(null,cljs.core.hash_map,map__30680):map__30680);
var w = map__30680__$1;
var message = cljs.core.get.call(null,map__30680__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18148__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18148__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18148__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30687 = cljs.core.seq.call(null,plugins);
var chunk__30688 = null;
var count__30689 = (0);
var i__30690 = (0);
while(true){
if((i__30690 < count__30689)){
var vec__30691 = cljs.core._nth.call(null,chunk__30688,i__30690);
var k = cljs.core.nth.call(null,vec__30691,(0),null);
var plugin = cljs.core.nth.call(null,vec__30691,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30693 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30687,chunk__30688,count__30689,i__30690,pl_30693,vec__30691,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30693.call(null,msg_hist);
});})(seq__30687,chunk__30688,count__30689,i__30690,pl_30693,vec__30691,k,plugin))
);
} else {
}

var G__30694 = seq__30687;
var G__30695 = chunk__30688;
var G__30696 = count__30689;
var G__30697 = (i__30690 + (1));
seq__30687 = G__30694;
chunk__30688 = G__30695;
count__30689 = G__30696;
i__30690 = G__30697;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30687);
if(temp__4126__auto__){
var seq__30687__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30687__$1)){
var c__18945__auto__ = cljs.core.chunk_first.call(null,seq__30687__$1);
var G__30698 = cljs.core.chunk_rest.call(null,seq__30687__$1);
var G__30699 = c__18945__auto__;
var G__30700 = cljs.core.count.call(null,c__18945__auto__);
var G__30701 = (0);
seq__30687 = G__30698;
chunk__30688 = G__30699;
count__30689 = G__30700;
i__30690 = G__30701;
continue;
} else {
var vec__30692 = cljs.core.first.call(null,seq__30687__$1);
var k = cljs.core.nth.call(null,vec__30692,(0),null);
var plugin = cljs.core.nth.call(null,vec__30692,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30702 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30687,chunk__30688,count__30689,i__30690,pl_30702,vec__30692,k,plugin,seq__30687__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30702.call(null,msg_hist);
});})(seq__30687,chunk__30688,count__30689,i__30690,pl_30702,vec__30692,k,plugin,seq__30687__$1,temp__4126__auto__))
);
} else {
}

var G__30703 = cljs.core.next.call(null,seq__30687__$1);
var G__30704 = null;
var G__30705 = (0);
var G__30706 = (0);
seq__30687 = G__30703;
chunk__30688 = G__30704;
count__30689 = G__30705;
i__30690 = G__30706;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__30708 = arguments.length;
switch (G__30708) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19200__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19200__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30711){
var map__30712 = p__30711;
var map__30712__$1 = ((cljs.core.seq_QMARK_.call(null,map__30712))?cljs.core.apply.call(null,cljs.core.hash_map,map__30712):map__30712);
var opts = map__30712__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30710){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30710));
});

//# sourceMappingURL=client.js.map?rel=1443194345122