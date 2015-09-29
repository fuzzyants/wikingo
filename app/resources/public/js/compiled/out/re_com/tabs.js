// Compiled by ClojureScript 0.0-3211 {}
goog.provide('re_com.tabs');
goog.require('cljs.core');
goog.require('re_com.validate');
goog.require('re_com.box');
goog.require('re_com.util');
re_com.tabs.tabs_args_desc = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"map -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns the unique identifier for this tab"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"map -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns what should be displayed in the tab"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (for each individual tab rather than the container)"], null)], null);
re_com.tabs.horizontal_tabs = (function re_com$tabs$horizontal_tabs(){
var argseq__19200__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__19200__auto__);
});

re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__29917){
var map__29918 = p__29917;
var map__29918__$1 = ((cljs.core.seq_QMARK_.call(null,map__29918))?cljs.core.apply.call(null,cljs.core.hash_map,map__29918):map__29918);
var args = map__29918__$1;
var style = cljs.core.get.call(null,map__29918__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__29918__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var id_fn = cljs.core.get.call(null,map__29918__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var on_change = cljs.core.get.call(null,map__29918__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__29918__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__29918__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__29918,map__29918__$1,args,style,label_fn,id_fn,on_change,tabs,model){
return (function (p1__29915_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__29915_SHARP_));
});})(current,tabs__$1,map__29918,map__29918__$1,args,style,label_fn,id_fn,on_change,tabs,model))
,tabs__$1)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("model not found in tabs vector"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29915#","p1__29915#",-1814312776,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol(null,"id-fn","id-fn",1956754325,null),new cljs.core.Symbol(null,"p1__29915#","p1__29915#",-1814312776,null)))),new cljs.core.Symbol(null,"tabs","tabs",860676173,null)))))].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs nav nav-tabs noselect",new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__18914__auto__ = ((function (current,tabs__$1,_,map__29918,map__29918__$1,args,style,label_fn,id_fn,on_change,tabs,model){
return (function re_com$tabs$iter__29919(s__29920){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__29918,map__29918__$1,args,style,label_fn,id_fn,on_change,tabs,model){
return (function (){
var s__29920__$1 = s__29920;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29920__$1);
if(temp__4126__auto__){
var s__29920__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29920__$2)){
var c__18912__auto__ = cljs.core.chunk_first.call(null,s__29920__$2);
var size__18913__auto__ = cljs.core.count.call(null,c__18912__auto__);
var b__29922 = cljs.core.chunk_buffer.call(null,size__18913__auto__);
if((function (){var i__29921 = (0);
while(true){
if((i__29921 < size__18913__auto__)){
var t = cljs.core._nth.call(null,c__18912__auto__,i__29921);
cljs.core.chunk_append.call(null,b__29922,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__29921,id,label,selected_QMARK_,t,c__18912__auto__,size__18913__auto__,b__29922,s__29920__$2,temp__4126__auto__,current,tabs__$1,_,map__29918,map__29918__$1,args,style,label_fn,id_fn,on_change,tabs,model){
return (function (event){
on_change.call(null,id);

return null;
});})(i__29921,id,label,selected_QMARK_,t,c__18912__auto__,size__18913__auto__,b__29922,s__29920__$2,temp__4126__auto__,current,tabs__$1,_,map__29918,map__29918__$1,args,style,label_fn,id_fn,on_change,tabs,model))
:null)], null),label], null)], null);
})());

var G__29923 = (i__29921 + (1));
i__29921 = G__29923;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29922),re_com$tabs$iter__29919.call(null,cljs.core.chunk_rest.call(null,s__29920__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29922),null);
}
} else {
var t = cljs.core.first.call(null,s__29920__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__29920__$2,temp__4126__auto__,current,tabs__$1,_,map__29918,map__29918__$1,args,style,label_fn,id_fn,on_change,tabs,model){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__29920__$2,temp__4126__auto__,current,tabs__$1,_,map__29918,map__29918__$1,args,style,label_fn,id_fn,on_change,tabs,model))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__29919.call(null,cljs.core.rest.call(null,s__29920__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__29918,map__29918__$1,args,style,label_fn,id_fn,on_change,tabs,model))
,null,null));
});})(current,tabs__$1,_,map__29918,map__29918__$1,args,style,label_fn,id_fn,on_change,tabs,model))
;
return iter__18914__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.horizontal_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_tabs.cljs$lang$applyTo = (function (seq29916){
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29916));
});
re_com.tabs.bar_tabs = (function re_com$tabs$bar_tabs(){
var argseq__19200__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__19200__auto__);
});

re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__29926){
var map__29927 = p__29926;
var map__29927__$1 = ((cljs.core.seq_QMARK_.call(null,map__29927))?cljs.core.apply.call(null,cljs.core.hash_map,map__29927):map__29927);
var vertical_QMARK_ = cljs.core.get.call(null,map__29927__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var style = cljs.core.get.call(null,map__29927__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__29927__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var id_fn = cljs.core.get.call(null,map__29927__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var on_change = cljs.core.get.call(null,map__29927__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__29927__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__29927__$1,new cljs.core.Keyword(null,"model","model",331153215));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__29927,map__29927__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (p1__29924_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__29924_SHARP_));
});})(current,tabs__$1,map__29927,map__29927__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
,tabs__$1)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("model not found in tabs vector"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29924#","p1__29924#",-1399309767,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol(null,"id-fn","id-fn",1956754325,null),new cljs.core.Symbol(null,"p1__29924#","p1__29924#",-1399309767,null)))),new cljs.core.Symbol(null,"tabs","tabs",860676173,null)))))].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-tabs noselect btn-group"),cljs.core.str((cljs.core.truth_(vertical_QMARK_)?"-vertical":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__18914__auto__ = ((function (current,tabs__$1,_,map__29927,map__29927__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function re_com$tabs$iter__29928(s__29929){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__29927,map__29927__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (){
var s__29929__$1 = s__29929;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29929__$1);
if(temp__4126__auto__){
var s__29929__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29929__$2)){
var c__18912__auto__ = cljs.core.chunk_first.call(null,s__29929__$2);
var size__18913__auto__ = cljs.core.count.call(null,c__18912__auto__);
var b__29931 = cljs.core.chunk_buffer.call(null,size__18913__auto__);
if((function (){var i__29930 = (0);
while(true){
if((i__29930 < size__18913__auto__)){
var t = cljs.core._nth.call(null,c__18912__auto__,i__29930);
cljs.core.chunk_append.call(null,b__29931,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-default "),cljs.core.str(((selected_QMARK_)?"active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__29930,id,label,selected_QMARK_,t,c__18912__auto__,size__18913__auto__,b__29931,s__29929__$2,temp__4126__auto__,current,tabs__$1,_,map__29927,map__29927__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (event){
on_change.call(null,id);

return null;
});})(i__29930,id,label,selected_QMARK_,t,c__18912__auto__,size__18913__auto__,b__29931,s__29929__$2,temp__4126__auto__,current,tabs__$1,_,map__29927,map__29927__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
:null)], null),label], null);
})());

var G__29932 = (i__29930 + (1));
i__29930 = G__29932;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29931),re_com$tabs$iter__29928.call(null,cljs.core.chunk_rest.call(null,s__29929__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29931),null);
}
} else {
var t = cljs.core.first.call(null,s__29929__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-default "),cljs.core.str(((selected_QMARK_)?"active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__29929__$2,temp__4126__auto__,current,tabs__$1,_,map__29927,map__29927__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__29929__$2,temp__4126__auto__,current,tabs__$1,_,map__29927,map__29927__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
:null)], null),label], null);
})(),re_com$tabs$iter__29928.call(null,cljs.core.rest.call(null,s__29929__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__29927,map__29927__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
,null,null));
});})(current,tabs__$1,_,map__29927,map__29927__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
;
return iter__18914__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.bar_tabs.cljs$lang$applyTo = (function (seq29925){
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29925));
});
re_com.tabs.horizontal_bar_tabs = (function re_com$tabs$horizontal_bar_tabs(){
var argseq__19200__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__19200__auto__);
});

re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__29934){
var map__29935 = p__29934;
var map__29935__$1 = ((cljs.core.seq_QMARK_.call(null,map__29935))?cljs.core.apply.call(null,cljs.core.hash_map,map__29935):map__29935);
var args = map__29935__$1;
var style = cljs.core.get.call(null,map__29935__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__29935__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var id_fn = cljs.core.get.call(null,map__29935__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var on_change = cljs.core.get.call(null,map__29935__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__29935__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__29935__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
});

re_com.tabs.horizontal_bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_bar_tabs.cljs$lang$applyTo = (function (seq29933){
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29933));
});
re_com.tabs.vertical_bar_tabs = (function re_com$tabs$vertical_bar_tabs(){
var argseq__19200__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__19200__auto__);
});

re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__29937){
var map__29938 = p__29937;
var map__29938__$1 = ((cljs.core.seq_QMARK_.call(null,map__29938))?cljs.core.apply.call(null,cljs.core.hash_map,map__29938):map__29938);
var args = map__29938__$1;
var style = cljs.core.get.call(null,map__29938__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__29938__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var id_fn = cljs.core.get.call(null,map__29938__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var on_change = cljs.core.get.call(null,map__29938__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__29938__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__29938__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
});

re_com.tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq29936){
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29936));
});
re_com.tabs.pill_tabs = (function re_com$tabs$pill_tabs(){
var argseq__19200__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__19200__auto__);
});

re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__29941){
var map__29942 = p__29941;
var map__29942__$1 = ((cljs.core.seq_QMARK_.call(null,map__29942))?cljs.core.apply.call(null,cljs.core.hash_map,map__29942):map__29942);
var vertical_QMARK_ = cljs.core.get.call(null,map__29942__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var style = cljs.core.get.call(null,map__29942__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__29942__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var id_fn = cljs.core.get.call(null,map__29942__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var on_change = cljs.core.get.call(null,map__29942__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__29942__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__29942__$1,new cljs.core.Keyword(null,"model","model",331153215));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__29942,map__29942__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (p1__29939_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__29939_SHARP_));
});})(current,tabs__$1,map__29942,map__29942__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
,tabs__$1)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("model not found in tabs vector"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29939#","p1__29939#",-730473517,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol(null,"id-fn","id-fn",1956754325,null),new cljs.core.Symbol(null,"p1__29939#","p1__29939#",-730473517,null)))),new cljs.core.Symbol(null,"tabs","tabs",860676173,null)))))].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-tabs noselect nav nav-pills"),cljs.core.str((cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none"),new cljs.core.Keyword(null,"role","role",-736691072),"tabslist"], null),(function (){var iter__18914__auto__ = ((function (current,tabs__$1,_,map__29942,map__29942__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function re_com$tabs$iter__29943(s__29944){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__29942,map__29942__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (){
var s__29944__$1 = s__29944;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29944__$1);
if(temp__4126__auto__){
var s__29944__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29944__$2)){
var c__18912__auto__ = cljs.core.chunk_first.call(null,s__29944__$2);
var size__18913__auto__ = cljs.core.count.call(null,c__18912__auto__);
var b__29946 = cljs.core.chunk_buffer.call(null,size__18913__auto__);
if((function (){var i__29945 = (0);
while(true){
if((i__29945 < size__18913__auto__)){
var t = cljs.core._nth.call(null,c__18912__auto__,i__29945);
cljs.core.chunk_append.call(null,b__29946,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__29945,id,label,selected_QMARK_,t,c__18912__auto__,size__18913__auto__,b__29946,s__29944__$2,temp__4126__auto__,current,tabs__$1,_,map__29942,map__29942__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (event){
on_change.call(null,id);

return null;
});})(i__29945,id,label,selected_QMARK_,t,c__18912__auto__,size__18913__auto__,b__29946,s__29944__$2,temp__4126__auto__,current,tabs__$1,_,map__29942,map__29942__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
:null)], null),label], null)], null);
})());

var G__29947 = (i__29945 + (1));
i__29945 = G__29947;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29946),re_com$tabs$iter__29943.call(null,cljs.core.chunk_rest.call(null,s__29944__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29946),null);
}
} else {
var t = cljs.core.first.call(null,s__29944__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__29944__$2,temp__4126__auto__,current,tabs__$1,_,map__29942,map__29942__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__29944__$2,temp__4126__auto__,current,tabs__$1,_,map__29942,map__29942__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__29943.call(null,cljs.core.rest.call(null,s__29944__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__29942,map__29942__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
,null,null));
});})(current,tabs__$1,_,map__29942,map__29942__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
;
return iter__18914__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.pill_tabs.cljs$lang$applyTo = (function (seq29940){
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29940));
});
re_com.tabs.horizontal_pill_tabs = (function re_com$tabs$horizontal_pill_tabs(){
var argseq__19200__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__19200__auto__);
});

re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__29949){
var map__29950 = p__29949;
var map__29950__$1 = ((cljs.core.seq_QMARK_.call(null,map__29950))?cljs.core.apply.call(null,cljs.core.hash_map,map__29950):map__29950);
var args = map__29950__$1;
var label_fn = cljs.core.get.call(null,map__29950__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__29950__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var id_fn = cljs.core.get.call(null,map__29950__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var on_change = cljs.core.get.call(null,map__29950__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__29950__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__29950__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
});

re_com.tabs.horizontal_pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_pill_tabs.cljs$lang$applyTo = (function (seq29948){
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29948));
});
re_com.tabs.vertical_pill_tabs = (function re_com$tabs$vertical_pill_tabs(){
var argseq__19200__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__19200__auto__);
});

re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__29952){
var map__29953 = p__29952;
var map__29953__$1 = ((cljs.core.seq_QMARK_.call(null,map__29953))?cljs.core.apply.call(null,cljs.core.hash_map,map__29953):map__29953);
var args = map__29953__$1;
var label_fn = cljs.core.get.call(null,map__29953__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__29953__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var id_fn = cljs.core.get.call(null,map__29953__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var on_change = cljs.core.get.call(null,map__29953__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__29953__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__29953__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
});

re_com.tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq29951){
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29951));
});

//# sourceMappingURL=tabs.js.map?rel=1443194344294