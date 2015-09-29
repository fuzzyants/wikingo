// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19200__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19200__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__30839_30847 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__30840_30848 = null;
var count__30841_30849 = (0);
var i__30842_30850 = (0);
while(true){
if((i__30842_30850 < count__30841_30849)){
var k_30851 = cljs.core._nth.call(null,chunk__30840_30848,i__30842_30850);
e.setAttribute(cljs.core.name.call(null,k_30851),cljs.core.get.call(null,attrs,k_30851));

var G__30852 = seq__30839_30847;
var G__30853 = chunk__30840_30848;
var G__30854 = count__30841_30849;
var G__30855 = (i__30842_30850 + (1));
seq__30839_30847 = G__30852;
chunk__30840_30848 = G__30853;
count__30841_30849 = G__30854;
i__30842_30850 = G__30855;
continue;
} else {
var temp__4126__auto___30856 = cljs.core.seq.call(null,seq__30839_30847);
if(temp__4126__auto___30856){
var seq__30839_30857__$1 = temp__4126__auto___30856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30839_30857__$1)){
var c__18945__auto___30858 = cljs.core.chunk_first.call(null,seq__30839_30857__$1);
var G__30859 = cljs.core.chunk_rest.call(null,seq__30839_30857__$1);
var G__30860 = c__18945__auto___30858;
var G__30861 = cljs.core.count.call(null,c__18945__auto___30858);
var G__30862 = (0);
seq__30839_30847 = G__30859;
chunk__30840_30848 = G__30860;
count__30841_30849 = G__30861;
i__30842_30850 = G__30862;
continue;
} else {
var k_30863 = cljs.core.first.call(null,seq__30839_30857__$1);
e.setAttribute(cljs.core.name.call(null,k_30863),cljs.core.get.call(null,attrs,k_30863));

var G__30864 = cljs.core.next.call(null,seq__30839_30857__$1);
var G__30865 = null;
var G__30866 = (0);
var G__30867 = (0);
seq__30839_30847 = G__30864;
chunk__30840_30848 = G__30865;
count__30841_30849 = G__30866;
i__30842_30850 = G__30867;
continue;
}
} else {
}
}
break;
}

var seq__30843_30868 = cljs.core.seq.call(null,children);
var chunk__30844_30869 = null;
var count__30845_30870 = (0);
var i__30846_30871 = (0);
while(true){
if((i__30846_30871 < count__30845_30870)){
var ch_30872 = cljs.core._nth.call(null,chunk__30844_30869,i__30846_30871);
e.appendChild(ch_30872);

var G__30873 = seq__30843_30868;
var G__30874 = chunk__30844_30869;
var G__30875 = count__30845_30870;
var G__30876 = (i__30846_30871 + (1));
seq__30843_30868 = G__30873;
chunk__30844_30869 = G__30874;
count__30845_30870 = G__30875;
i__30846_30871 = G__30876;
continue;
} else {
var temp__4126__auto___30877 = cljs.core.seq.call(null,seq__30843_30868);
if(temp__4126__auto___30877){
var seq__30843_30878__$1 = temp__4126__auto___30877;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30843_30878__$1)){
var c__18945__auto___30879 = cljs.core.chunk_first.call(null,seq__30843_30878__$1);
var G__30880 = cljs.core.chunk_rest.call(null,seq__30843_30878__$1);
var G__30881 = c__18945__auto___30879;
var G__30882 = cljs.core.count.call(null,c__18945__auto___30879);
var G__30883 = (0);
seq__30843_30868 = G__30880;
chunk__30844_30869 = G__30881;
count__30845_30870 = G__30882;
i__30846_30871 = G__30883;
continue;
} else {
var ch_30884 = cljs.core.first.call(null,seq__30843_30878__$1);
e.appendChild(ch_30884);

var G__30885 = cljs.core.next.call(null,seq__30843_30878__$1);
var G__30886 = null;
var G__30887 = (0);
var G__30888 = (0);
seq__30843_30868 = G__30885;
chunk__30844_30869 = G__30886;
count__30845_30870 = G__30887;
i__30846_30871 = G__30888;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq30836){
var G__30837 = cljs.core.first.call(null,seq30836);
var seq30836__$1 = cljs.core.next.call(null,seq30836);
var G__30838 = cljs.core.first.call(null,seq30836__$1);
var seq30836__$2 = cljs.core.next.call(null,seq30836__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__30837,G__30838,seq30836__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19055__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19059__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19055__auto__,prefer_table__19056__auto__,method_cache__19057__auto__,cached_hierarchy__19058__auto__,hierarchy__19059__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19055__auto__,prefer_table__19056__auto__,method_cache__19057__auto__,cached_hierarchy__19058__auto__,hierarchy__19059__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19059__auto__,method_table__19055__auto__,prefer_table__19056__auto__,method_cache__19057__auto__,cached_hierarchy__19058__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_30889 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_30889.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_30889.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_30889.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_30889);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__30890,st_map){
var map__30894 = p__30890;
var map__30894__$1 = ((cljs.core.seq_QMARK_.call(null,map__30894))?cljs.core.apply.call(null,cljs.core.hash_map,map__30894):map__30894);
var container_el = cljs.core.get.call(null,map__30894__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__30894,map__30894__$1,container_el){
return (function (p__30895){
var vec__30896 = p__30895;
var k = cljs.core.nth.call(null,vec__30896,(0),null);
var v = cljs.core.nth.call(null,vec__30896,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__30894,map__30894__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__30897,dom_str){
var map__30899 = p__30897;
var map__30899__$1 = ((cljs.core.seq_QMARK_.call(null,map__30899))?cljs.core.apply.call(null,cljs.core.hash_map,map__30899):map__30899);
var c = map__30899__$1;
var content_area_el = cljs.core.get.call(null,map__30899__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__30900){
var map__30902 = p__30900;
var map__30902__$1 = ((cljs.core.seq_QMARK_.call(null,map__30902))?cljs.core.apply.call(null,cljs.core.hash_map,map__30902):map__30902);
var content_area_el = cljs.core.get.call(null,map__30902__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto__){
return (function (state_30944){
var state_val_30945 = (state_30944[(1)]);
if((state_val_30945 === (2))){
var inst_30929 = (state_30944[(7)]);
var inst_30938 = (state_30944[(2)]);
var inst_30939 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_30940 = ["auto"];
var inst_30941 = cljs.core.PersistentHashMap.fromArrays(inst_30939,inst_30940);
var inst_30942 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30929,inst_30941);
var state_30944__$1 = (function (){var statearr_30946 = state_30944;
(statearr_30946[(8)] = inst_30938);

return statearr_30946;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30944__$1,inst_30942);
} else {
if((state_val_30945 === (1))){
var inst_30929 = (state_30944[(7)]);
var inst_30929__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30930 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30931 = ["10px","10px","100%","68px","1.0"];
var inst_30932 = cljs.core.PersistentHashMap.fromArrays(inst_30930,inst_30931);
var inst_30933 = cljs.core.merge.call(null,inst_30932,style);
var inst_30934 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30929__$1,inst_30933);
var inst_30935 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30929__$1,msg);
var inst_30936 = cljs.core.async.timeout.call(null,(300));
var state_30944__$1 = (function (){var statearr_30947 = state_30944;
(statearr_30947[(7)] = inst_30929__$1);

(statearr_30947[(9)] = inst_30934);

(statearr_30947[(10)] = inst_30935);

return statearr_30947;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30944__$1,(2),inst_30936);
} else {
return null;
}
}
});})(c__22071__auto__))
;
return ((function (switch__22009__auto__,c__22071__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__22010__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__22010__auto____0 = (function (){
var statearr_30951 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30951[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__22010__auto__);

(statearr_30951[(1)] = (1));

return statearr_30951;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__22010__auto____1 = (function (state_30944){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_30944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e30952){if((e30952 instanceof Object)){
var ex__22013__auto__ = e30952;
var statearr_30953_30955 = state_30944;
(statearr_30953_30955[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30956 = state_30944;
state_30944 = G__30956;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__22010__auto__ = function(state_30944){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22010__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22010__auto____1.call(this,state_30944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__22010__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__22010__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto__))
})();
var state__22073__auto__ = (function (){var statearr_30954 = f__22072__auto__.call(null);
(statearr_30954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_30954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__))
);

return c__22071__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__30958 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__30958,(0),null);
var ln = cljs.core.nth.call(null,vec__30958,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__30961 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__30961,(0),null);
var file_line = cljs.core.nth.call(null,vec__30961,(1),null);
var file_column = cljs.core.nth.call(null,vec__30961,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__30961,file_name,file_line,file_column){
return (function (p1__30959_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__30959_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__30961,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18160__auto__ = file_line;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
var and__18148__auto__ = cause;
if(cljs.core.truth_(and__18148__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18148__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__30963 = figwheel.client.heads_up.ensure_container.call(null);
var map__30963__$1 = ((cljs.core.seq_QMARK_.call(null,map__30963))?cljs.core.apply.call(null,cljs.core.hash_map,map__30963):map__30963);
var content_area_el = cljs.core.get.call(null,map__30963__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto__){
return (function (state_31010){
var state_val_31011 = (state_31010[(1)]);
if((state_val_31011 === (3))){
var inst_30993 = (state_31010[(7)]);
var inst_31007 = (state_31010[(2)]);
var inst_31008 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30993,"");
var state_31010__$1 = (function (){var statearr_31012 = state_31010;
(statearr_31012[(8)] = inst_31007);

return statearr_31012;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31010__$1,inst_31008);
} else {
if((state_val_31011 === (2))){
var inst_30993 = (state_31010[(7)]);
var inst_31000 = (state_31010[(2)]);
var inst_31001 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_31002 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_31003 = cljs.core.PersistentHashMap.fromArrays(inst_31001,inst_31002);
var inst_31004 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30993,inst_31003);
var inst_31005 = cljs.core.async.timeout.call(null,(200));
var state_31010__$1 = (function (){var statearr_31013 = state_31010;
(statearr_31013[(9)] = inst_31004);

(statearr_31013[(10)] = inst_31000);

return statearr_31013;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31010__$1,(3),inst_31005);
} else {
if((state_val_31011 === (1))){
var inst_30993 = (state_31010[(7)]);
var inst_30993__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30994 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30995 = ["0.0"];
var inst_30996 = cljs.core.PersistentHashMap.fromArrays(inst_30994,inst_30995);
var inst_30997 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30993__$1,inst_30996);
var inst_30998 = cljs.core.async.timeout.call(null,(300));
var state_31010__$1 = (function (){var statearr_31014 = state_31010;
(statearr_31014[(11)] = inst_30997);

(statearr_31014[(7)] = inst_30993__$1);

return statearr_31014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31010__$1,(2),inst_30998);
} else {
return null;
}
}
}
});})(c__22071__auto__))
;
return ((function (switch__22009__auto__,c__22071__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__22010__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__22010__auto____0 = (function (){
var statearr_31018 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31018[(0)] = figwheel$client$heads_up$clear_$_state_machine__22010__auto__);

(statearr_31018[(1)] = (1));

return statearr_31018;
});
var figwheel$client$heads_up$clear_$_state_machine__22010__auto____1 = (function (state_31010){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_31010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e31019){if((e31019 instanceof Object)){
var ex__22013__auto__ = e31019;
var statearr_31020_31022 = state_31010;
(statearr_31020_31022[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31023 = state_31010;
state_31010 = G__31023;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__22010__auto__ = function(state_31010){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__22010__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__22010__auto____1.call(this,state_31010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__22010__auto____0;
figwheel$client$heads_up$clear_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__22010__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto__))
})();
var state__22073__auto__ = (function (){var statearr_31021 = f__22072__auto__.call(null);
(statearr_31021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_31021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__))
);

return c__22071__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto__){
return (function (state_31055){
var state_val_31056 = (state_31055[(1)]);
if((state_val_31056 === (4))){
var inst_31053 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31055__$1,inst_31053);
} else {
if((state_val_31056 === (3))){
var inst_31050 = (state_31055[(2)]);
var inst_31051 = figwheel.client.heads_up.clear.call(null);
var state_31055__$1 = (function (){var statearr_31057 = state_31055;
(statearr_31057[(7)] = inst_31050);

return statearr_31057;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31055__$1,(4),inst_31051);
} else {
if((state_val_31056 === (2))){
var inst_31047 = (state_31055[(2)]);
var inst_31048 = cljs.core.async.timeout.call(null,(400));
var state_31055__$1 = (function (){var statearr_31058 = state_31055;
(statearr_31058[(8)] = inst_31047);

return statearr_31058;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31055__$1,(3),inst_31048);
} else {
if((state_val_31056 === (1))){
var inst_31045 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_31055__$1 = state_31055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31055__$1,(2),inst_31045);
} else {
return null;
}
}
}
}
});})(c__22071__auto__))
;
return ((function (switch__22009__auto__,c__22071__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__22010__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__22010__auto____0 = (function (){
var statearr_31062 = [null,null,null,null,null,null,null,null,null];
(statearr_31062[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__22010__auto__);

(statearr_31062[(1)] = (1));

return statearr_31062;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__22010__auto____1 = (function (state_31055){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_31055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e31063){if((e31063 instanceof Object)){
var ex__22013__auto__ = e31063;
var statearr_31064_31066 = state_31055;
(statearr_31064_31066[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31067 = state_31055;
state_31055 = G__31067;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__22010__auto__ = function(state_31055){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22010__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22010__auto____1.call(this,state_31055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__22010__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__22010__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto__))
})();
var state__22073__auto__ = (function (){var statearr_31065 = f__22072__auto__.call(null);
(statearr_31065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_31065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__))
);

return c__22071__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1443194345599