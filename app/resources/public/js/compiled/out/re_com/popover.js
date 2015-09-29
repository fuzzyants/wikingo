// Compiled by ClojureScript 0.0-3211 {}
goog.provide('re_com.popover');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('re_com.validate');
goog.require('re_com.box');
goog.require('re_com.util');
re_com.popover.point = (function re_com$popover$point(x,y){
return [cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(" ")].join('');
});
/**
 * I return the vector of the two keywords formed by splitting
 * another keyword 'kw' on an internal delimiter (usually '-').
 * (split-keyword  :above-left  "-")
 * =>  [:above :left]
 */
re_com.popover.split_keyword = (function re_com$popover$split_keyword(kw,delimiter){
var keywords = clojure.string.split.call(null,[cljs.core.str(kw)].join(''),cljs.core.re_pattern.call(null,[cljs.core.str("["),cljs.core.str(delimiter),cljs.core.str(":]")].join('')));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,keywords.call(null,(1))),cljs.core.keyword.call(null,keywords.call(null,(2)))], null);
});
/**
 * A button with a big X in it, placed to the right of the popup
 */
re_com.popover.close_button = (function re_com$popover$close_button(showing_QMARK_,close_callback,style){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(cljs.core.truth_(close_callback)){
close_callback.call(null);
} else {
cljs.core.reset_BANG_.call(null,showing_QMARK_,false);
}

return null;
}),new cljs.core.Keyword(null,"class","class",-2030961996),"close",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"34px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"26px",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"4px",new cljs.core.Keyword(null,"right","right",-452581833),"2px"], null),style)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"zmdi zmdi-hc-fw-rc zmdi-close"], null)], null)], null);
});
re_com.popover.calc_popover_pos = (function re_com$popover$calc_popover_pos(pop_orient,p_width,p_height,pop_offset){
var popover_left = (function (){var G__30007 = (((pop_orient instanceof cljs.core.Keyword))?pop_orient.fqn:null);
switch (G__30007) {
case "below":
return re_com.util.px.call(null,(cljs.core.truth_(pop_offset)?pop_offset:(p_width / (2))),new cljs.core.Keyword(null,"negative","negative",-1562068438));

break;
case "above":
return re_com.util.px.call(null,(cljs.core.truth_(pop_offset)?pop_offset:(p_width / (2))),new cljs.core.Keyword(null,"negative","negative",-1562068438));

break;
case "right":
return "100%";

break;
case "left":
return "initial";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(pop_orient)].join('')));

}
})();
var popover_top = (function (){var G__30008 = (((pop_orient instanceof cljs.core.Keyword))?pop_orient.fqn:null);
switch (G__30008) {
case "below":
return "100%";

break;
case "above":
return "initial";

break;
case "right":
return re_com.util.px.call(null,(cljs.core.truth_(pop_offset)?pop_offset:(p_height / (2))),new cljs.core.Keyword(null,"negative","negative",-1562068438));

break;
case "left":
return re_com.util.px.call(null,(cljs.core.truth_(pop_offset)?pop_offset:(p_height / (2))),new cljs.core.Keyword(null,"negative","negative",-1562068438));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(pop_orient)].join('')));

}
})();
var popover_right = (function (){var G__30009 = (((pop_orient instanceof cljs.core.Keyword))?pop_orient.fqn:null);
switch (G__30009) {
case "below":
return null;

break;
case "above":
return null;

break;
case "right":
return null;

break;
case "left":
return re_com.util.px.call(null,(10));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(pop_orient)].join('')));

}
})();
var popover_bottom = (function (){var G__30010 = (((pop_orient instanceof cljs.core.Keyword))?pop_orient.fqn:null);
switch (G__30010) {
case "below":
return null;

break;
case "above":
return re_com.util.px.call(null,(10));

break;
case "right":
return null;

break;
case "left":
return null;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(pop_orient)].join('')));

}
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),popover_left,new cljs.core.Keyword(null,"top","top",-1856271961),popover_top,new cljs.core.Keyword(null,"right","right",-452581833),popover_right,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),popover_bottom], null);
});
re_com.popover.popover_arrow = (function re_com$popover$popover_arrow(orientation,pop_offset,arrow_length,arrow_width,grey_arrow_QMARK_,no_border_QMARK_,popover_color){
var half_arrow_width = (arrow_width / (2));
var arrow_shape = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str(re_com.popover.point.call(null,(0),(0))),cljs.core.str(re_com.popover.point.call(null,arrow_length,half_arrow_width)),cljs.core.str(re_com.popover.point.call(null,(0),arrow_width))].join(''),new cljs.core.Keyword(null,"right","right",-452581833),[cljs.core.str(re_com.popover.point.call(null,arrow_length,(0))),cljs.core.str(re_com.popover.point.call(null,(0),half_arrow_width)),cljs.core.str(re_com.popover.point.call(null,arrow_length,arrow_width))].join(''),new cljs.core.Keyword(null,"above","above",-1286866470),[cljs.core.str(re_com.popover.point.call(null,(0),(0))),cljs.core.str(re_com.popover.point.call(null,half_arrow_width,arrow_length)),cljs.core.str(re_com.popover.point.call(null,arrow_width,(0)))].join(''),new cljs.core.Keyword(null,"below","below",-926774883),[cljs.core.str(re_com.popover.point.call(null,(0),arrow_length)),cljs.core.str(re_com.popover.point.call(null,half_arrow_width,(0))),cljs.core.str(re_com.popover.point.call(null,arrow_width,arrow_length))].join('')], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"popover-arrow",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",(function (){var G__30020 = (((orientation instanceof cljs.core.Keyword))?orientation.fqn:null);
switch (G__30020) {
case "below":
return new cljs.core.Keyword(null,"top","top",-1856271961);

break;
case "above":
return new cljs.core.Keyword(null,"bottom","bottom",-1550509018);

break;
case "right":
return new cljs.core.Keyword(null,"left","left",-399115937);

break;
case "left":
return new cljs.core.Keyword(null,"right","right",-452581833);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(orientation)].join('')));

}
})(),re_com.util.px.call(null,arrow_length,new cljs.core.Keyword(null,"negative","negative",-1562068438)),(function (){var G__30021 = (((orientation instanceof cljs.core.Keyword))?orientation.fqn:null);
switch (G__30021) {
case "below":
return new cljs.core.Keyword(null,"left","left",-399115937);

break;
case "above":
return new cljs.core.Keyword(null,"left","left",-399115937);

break;
case "right":
return new cljs.core.Keyword(null,"top","top",-1856271961);

break;
case "left":
return new cljs.core.Keyword(null,"top","top",-1856271961);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(orientation)].join('')));

}
})(),(((cljs.core.deref.call(null,pop_offset) == null))?"50%":re_com.util.px.call(null,cljs.core.deref.call(null,pop_offset))),(function (){var G__30022 = (((orientation instanceof cljs.core.Keyword))?orientation.fqn:null);
switch (G__30022) {
case "below":
return new cljs.core.Keyword(null,"margin-left","margin-left",2015598377);

break;
case "above":
return new cljs.core.Keyword(null,"margin-left","margin-left",2015598377);

break;
case "right":
return new cljs.core.Keyword(null,"margin-top","margin-top",392161226);

break;
case "left":
return new cljs.core.Keyword(null,"margin-top","margin-top",392161226);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(orientation)].join('')));

}
})(),re_com.util.px.call(null,half_arrow_width,new cljs.core.Keyword(null,"negative","negative",-1562068438)),new cljs.core.Keyword(null,"width","width",-384071477),re_com.util.px.call(null,(function (){var G__30023 = (((orientation instanceof cljs.core.Keyword))?orientation.fqn:null);
switch (G__30023) {
case "below":
return arrow_width;

break;
case "above":
return arrow_width;

break;
case "right":
return arrow_length;

break;
case "left":
return arrow_length;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(orientation)].join('')));

}
})()),new cljs.core.Keyword(null,"height","height",1025178622),re_com.util.px.call(null,(function (){var G__30024 = (((orientation instanceof cljs.core.Keyword))?orientation.fqn:null);
switch (G__30024) {
case "below":
return arrow_length;

break;
case "above":
return arrow_length;

break;
case "right":
return arrow_width;

break;
case "left":
return arrow_width;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(orientation)].join('')));

}
})())], true, false)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),arrow_shape.call(null,orientation),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(popover_color)?popover_color:(cljs.core.truth_(grey_arrow_QMARK_)?"#f7f7f7":"white")),new cljs.core.Keyword(null,"stroke","stroke",1741823555),(cljs.core.truth_(no_border_QMARK_)?null:"rgba(0, 0, 0, .2)"),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1"], null)], null)], null)], null);
});
re_com.popover.backdrop_args_desc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),0.0,new cljs.core.Keyword(null,"type","type",1174270348),"double | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"opacity of backdrop from:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"0.0 (transparent) to 1.0 (opaque)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the backdrop is clicked"], null)], null);
/**
 * Renders a backdrop dive which fills the entire page and responds to clicks on it. Can also specify how tranparent it should be
 */
re_com.popover.backdrop = (function re_com$popover$backdrop(){
var argseq__19200__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.popover.backdrop.cljs$core$IFn$_invoke$arity$variadic(argseq__19200__auto__);
});

re_com.popover.backdrop.cljs$core$IFn$_invoke$arity$variadic = (function (p__30031){
var map__30032 = p__30031;
var map__30032__$1 = ((cljs.core.seq_QMARK_.call(null,map__30032))?cljs.core.apply.call(null,cljs.core.hash_map,map__30032):map__30032);
var args = map__30032__$1;
var on_click = cljs.core.get.call(null,map__30032__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var opacity = cljs.core.get.call(null,map__30032__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.backdrop_args_desc),args,"backdrop")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"backdrop-args-desc","backdrop-args-desc",1560264751,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"backdrop")))].join('')));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-backdrop noselect",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(opacity)?opacity:0.0)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__30032,map__30032__$1,args,on_click,opacity){
return (function (event){
on_click.call(null);

return null;
});})(map__30032,map__30032__$1,args,on_click,opacity))
], null)], null);
});

re_com.popover.backdrop.cljs$lang$maxFixedArity = (0);

re_com.popover.backdrop.cljs$lang$applyTo = (function (seq30030){
return re_com.popover.backdrop.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30030));
});
re_com.popover.next_even_integer = (function re_com$popover$next_even_integer(num){
return ((((num + (1)) / (2)) | (0)) * (2));
});
re_com.popover.calc_pop_offset = (function re_com$popover$calc_pop_offset(arrow_pos,p_width,p_height){
var G__30034 = (((arrow_pos instanceof cljs.core.Keyword))?arrow_pos.fqn:null);
switch (G__30034) {
case "above":
if(cljs.core.truth_(p_height)){
return (p_height - (25));
} else {
return p_height;
}

break;
case "left":
if(cljs.core.truth_(p_width)){
return (p_width - (25));
} else {
return p_width;
}

break;
case "below":
return (20);

break;
case "right":
return (20);

break;
case "center":
return null;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(arrow_pos)].join('')));

}
});
re_com.popover.popover_border_args_desc = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.sequential_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a vector of component markups"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"right-below","right-below",586981827),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style describing the popover width"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"auto",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style describing the popover height"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"white",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"fill color of the popover"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(11),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the length in pixels of the arrow (from pointy part to middle of arrow base)"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(22),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the width in pixels of arrow base"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style which overrides the inner padding of the popover"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style describing the horiztonal offset from anchor after position"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style describing the vertical offset from anchor after position"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"setup popover styles for a tooltip"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | markup",new cljs.core.Keyword(null,"description","description",-1428560544),"describes a title"], null)], null);
/**
 * Renders an element or control along with a Bootstrap popover
 */
re_com.popover.popover_border = (function re_com$popover$popover_border(){
var argseq__19200__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.popover.popover_border.cljs$core$IFn$_invoke$arity$variadic(argseq__19200__auto__);
});

re_com.popover.popover_border.cljs$core$IFn$_invoke$arity$variadic = (function (p__30037){
var map__30038 = p__30037;
var map__30038__$1 = ((cljs.core.seq_QMARK_.call(null,map__30038))?cljs.core.apply.call(null,cljs.core.hash_map,map__30038):map__30038);
var args = map__30038__$1;
var height = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var tooltip_style_QMARK_ = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527));
var popover_color = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119));
var children = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var arrow_length = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(11));
var margin_left = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377));
var arrow_width = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(22));
var margin_top = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"margin-top","margin-top",392161226));
var width = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var title = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"title","title",636505583));
var padding = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var position = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_border_args_desc),args,"popover-border")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"popover-border-args-desc","popover-border-args-desc",-2014541528,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"popover-border")))].join('')));
}

var rendered_once = reagent.core.atom.call(null,false);
var pop_id = cljs.core.gensym.call(null,"popover-");
var vec__30039 = re_com.popover.split_keyword.call(null,(cljs.core.truth_(position)?position:new cljs.core.Keyword(null,"right-below","right-below",586981827)),"-");
var orientation = cljs.core.nth.call(null,vec__30039,(0),null);
var arrow_pos = cljs.core.nth.call(null,vec__30039,(1),null);
var grey_arrow_QMARK_ = (function (){var and__18148__auto__ = title;
if(cljs.core.truth_(and__18148__auto__)){
return (cljs.core._EQ_.call(null,orientation,new cljs.core.Keyword(null,"below","below",-926774883))) || (cljs.core._EQ_.call(null,arrow_pos,new cljs.core.Keyword(null,"below","below",-926774883)));
} else {
return and__18148__auto__;
}
})();
var p_width = reagent.core.atom.call(null,(0));
var p_height = reagent.core.atom.call(null,(0));
var pop_offset = reagent.core.atom.call(null,(0));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (rendered_once,pop_id,vec__30039,orientation,arrow_pos,grey_arrow_QMARK_,p_width,p_height,pop_offset,map__30038,map__30038__$1,args,height,tooltip_style_QMARK_,popover_color,children,arrow_length,margin_left,arrow_width,margin_top,width,title,padding,position){
return (function (){
return cljs.core.reset_BANG_.call(null,rendered_once,true);
});})(rendered_once,pop_id,vec__30039,orientation,arrow_pos,grey_arrow_QMARK_,p_width,p_height,pop_offset,map__30038,map__30038__$1,args,height,tooltip_style_QMARK_,popover_color,children,arrow_length,margin_left,arrow_width,margin_top,width,title,padding,position))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (rendered_once,pop_id,vec__30039,orientation,arrow_pos,grey_arrow_QMARK_,p_width,p_height,pop_offset,map__30038,map__30038__$1,args,height,tooltip_style_QMARK_,popover_color,children,arrow_length,margin_left,arrow_width,margin_top,width,title,padding,position){
return (function (){
var popover_elem = re_com.util.get_element_by_id.call(null,pop_id);
cljs.core.reset_BANG_.call(null,p_width,(cljs.core.truth_(popover_elem)?re_com.popover.next_even_integer.call(null,popover_elem.clientWidth):(0)));

cljs.core.reset_BANG_.call(null,p_height,(cljs.core.truth_(popover_elem)?re_com.popover.next_even_integer.call(null,popover_elem.clientHeight):(0)));

return cljs.core.reset_BANG_.call(null,pop_offset,re_com.popover.calc_pop_offset.call(null,arrow_pos,cljs.core.deref.call(null,p_width),cljs.core.deref.call(null,p_height)));
});})(rendered_once,pop_id,vec__30039,orientation,arrow_pos,grey_arrow_QMARK_,p_width,p_height,pop_offset,map__30038,map__30038__$1,args,height,tooltip_style_QMARK_,popover_color,children,arrow_length,margin_left,arrow_width,margin_top,width,title,padding,position))
,new cljs.core.Keyword(null,"component-function","component-function",654728922),((function (rendered_once,pop_id,vec__30039,orientation,arrow_pos,grey_arrow_QMARK_,p_width,p_height,pop_offset,map__30038,map__30038__$1,args,height,tooltip_style_QMARK_,popover_color,children,arrow_length,margin_left,arrow_width,margin_top,width,title,padding,position){
return (function() { 
var G__30044__delegate = function (p__30040){
var map__30041 = p__30040;
var map__30041__$1 = ((cljs.core.seq_QMARK_.call(null,map__30041))?cljs.core.apply.call(null,cljs.core.hash_map,map__30041):map__30041);
var args__$1 = map__30041__$1;
var height__$1 = cljs.core.get.call(null,map__30041__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var tooltip_style_QMARK___$1 = cljs.core.get.call(null,map__30041__$1,new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527));
var popover_color__$1 = cljs.core.get.call(null,map__30041__$1,new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119));
var children__$1 = cljs.core.get.call(null,map__30041__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var arrow_length__$1 = cljs.core.get.call(null,map__30041__$1,new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(11));
var margin_left__$1 = cljs.core.get.call(null,map__30041__$1,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377));
var arrow_width__$1 = cljs.core.get.call(null,map__30041__$1,new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(22));
var margin_top__$1 = cljs.core.get.call(null,map__30041__$1,new cljs.core.Keyword(null,"margin-top","margin-top",392161226));
var width__$1 = cljs.core.get.call(null,map__30041__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var title__$1 = cljs.core.get.call(null,map__30041__$1,new cljs.core.Keyword(null,"title","title",636505583));
var padding__$1 = cljs.core.get.call(null,map__30041__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var position__$1 = cljs.core.get.call(null,map__30041__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_border_args_desc),args__$1,"popover-border")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"popover-border-args-desc","popover-border-args-desc",-2014541528,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"popover-border")))].join('')));
}

var popover_elem = re_com.util.get_element_by_id.call(null,pop_id);
cljs.core.reset_BANG_.call(null,p_width,(cljs.core.truth_(popover_elem)?re_com.popover.next_even_integer.call(null,popover_elem.clientWidth):(0)));

cljs.core.reset_BANG_.call(null,p_height,(cljs.core.truth_(popover_elem)?re_com.popover.next_even_integer.call(null,popover_elem.clientHeight):(0)));

cljs.core.reset_BANG_.call(null,pop_offset,re_com.popover.calc_pop_offset.call(null,arrow_pos,cljs.core.deref.call(null,p_width),cljs.core.deref.call(null,p_height)));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.popover.fade.in","div.popover.fade.in",-106226512),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),pop_id,new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__30042 = (((orientation instanceof cljs.core.Keyword))?orientation.fqn:null);
switch (G__30042) {
case "below":
return "bottom";

break;
case "above":
return "top";

break;
case "right":
return "right";

break;
case "left":
return "left";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(orientation)].join('')));

}
})(),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.deref.call(null,rendered_once))?(cljs.core.truth_(pop_id)?re_com.popover.calc_popover_pos.call(null,orientation,cljs.core.deref.call(null,p_width),cljs.core.deref.call(null,p_height),cljs.core.deref.call(null,pop_offset)):null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),"-10000px",new cljs.core.Keyword(null,"left","left",-399115937),"-10000px"], null)),(cljs.core.truth_(width__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width__$1], null):null),(cljs.core.truth_(height__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height__$1], null):null),(cljs.core.truth_(popover_color__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),popover_color__$1], null):null),(cljs.core.truth_(tooltip_style_QMARK___$1)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"none",new cljs.core.Keyword(null,"border","border",1444987323),"none"], null):null),(function (){var G__30043 = (((orientation instanceof cljs.core.Keyword))?orientation.fqn:null);
switch (G__30043) {
case "below":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"-2000px"], null);

break;
case "above":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"-2000px"], null);

break;
case "right":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"-2000px"], null);

break;
case "left":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"-2000px"], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(orientation)].join('')));

}
})(),(cljs.core.truth_(margin_left__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),margin_left__$1], null):null),(cljs.core.truth_(margin_top__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),margin_top__$1], null):null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"none",new cljs.core.Keyword(null,"padding","padding",1660304693),re_com.util.px.call(null,(0))], null))], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_arrow,orientation,pop_offset,arrow_length__$1,arrow_width__$1,grey_arrow_QMARK_,tooltip_style_QMARK___$1,popover_color__$1], null),(cljs.core.truth_(title__$1)?title__$1:null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.popover-content","div.popover-content",1045719989),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),padding__$1], null)], null)], null),children__$1)], null);
};
var G__30044 = function (var_args){
var p__30040 = null;
if (arguments.length > 0) {
var G__30047__i = 0, G__30047__a = new Array(arguments.length -  0);
while (G__30047__i < G__30047__a.length) {G__30047__a[G__30047__i] = arguments[G__30047__i + 0]; ++G__30047__i;}
  p__30040 = new cljs.core.IndexedSeq(G__30047__a,0);
} 
return G__30044__delegate.call(this,p__30040);};
G__30044.cljs$lang$maxFixedArity = 0;
G__30044.cljs$lang$applyTo = (function (arglist__30048){
var p__30040 = cljs.core.seq(arglist__30048);
return G__30044__delegate(p__30040);
});
G__30044.cljs$core$IFn$_invoke$arity$variadic = G__30044__delegate;
return G__30044;
})()
;})(rendered_once,pop_id,vec__30039,orientation,arrow_pos,grey_arrow_QMARK_,p_width,p_height,pop_offset,map__30038,map__30038__$1,args,height,tooltip_style_QMARK_,popover_color,children,arrow_length,margin_left,arrow_width,margin_top,width,title,padding,position))
], null));
});

re_com.popover.popover_border.cljs$lang$maxFixedArity = (0);

re_com.popover.popover_border.cljs$lang$applyTo = (function (seq30036){
return re_com.popover.popover_border.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30036));
});
re_com.popover.popover_title_args_desc = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"showing?","showing?",2094921488),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean atom",new cljs.core.Keyword(null,"description","description",-1428560544),"an atom. When the value is true, the popover shows."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"describes the title of the popover. Default font size is 18px to make it stand out"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, displays the close button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"close-callback","close-callback",651188974),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"a function which takes no params and returns nothing. Called when the close button is pressed. Not required if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":showing?"], null)," atom passed in OR ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":close-button?"], null)," is set to false"], null)], null)], null);
/**
 * Renders a title at the top of a popover with an optional close button on the far right
 */
re_com.popover.popover_title = (function re_com$popover$popover_title(){
var argseq__19200__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.popover.popover_title.cljs$core$IFn$_invoke$arity$variadic(argseq__19200__auto__);
});

re_com.popover.popover_title.cljs$core$IFn$_invoke$arity$variadic = (function (p__30050){
var map__30051 = p__30050;
var map__30051__$1 = ((cljs.core.seq_QMARK_.call(null,map__30051))?cljs.core.apply.call(null,cljs.core.hash_map,map__30051):map__30051);
var args = map__30051__$1;
var close_callback = cljs.core.get.call(null,map__30051__$1,new cljs.core.Keyword(null,"close-callback","close-callback",651188974));
var close_button_QMARK_ = cljs.core.get.call(null,map__30051__$1,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687));
var showing_QMARK_ = cljs.core.get.call(null,map__30051__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var title = cljs.core.get.call(null,map__30051__$1,new cljs.core.Keyword(null,"title","title",636505583));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_title_args_desc),args,"popover-title")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"popover-title-args-desc","popover-title-args-desc",2115948605,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"popover-title")))].join('')));
}

if(cljs.core.truth_((function (){var or__18160__auto__ = cljs.core.complement.call(null,cljs.core.nil_QMARK_).call(null,showing_QMARK_);
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return cljs.core.complement.call(null,cljs.core.nil_QMARK_).call(null,close_callback);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Must specify either showing? OR close-callback"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"complement","complement",-913606051,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null)),new cljs.core.Symbol(null,"showing?","showing?",-559514281,null)),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"complement","complement",-913606051,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null)),new cljs.core.Symbol(null,"close-callback","close-callback",-2003246795,null)))))].join('')));
}

var close_button_QMARK___$1 = (((close_button_QMARK_ == null))?true:close_button_QMARK_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.popover-title","h3.popover-title",126205197),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"inherit"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"18px"], null))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,(cljs.core.truth_(close_button_QMARK___$1)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.close_button,showing_QMARK_,close_callback], null):null)], null)], null)], null);
});

re_com.popover.popover_title.cljs$lang$maxFixedArity = (0);

re_com.popover.popover_title.cljs$lang$applyTo = (function (seq30049){
return re_com.popover.popover_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30049));
});
re_com.popover.popover_content_wrapper_args_desc = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"showing?","showing?",2094921488),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean atom",new cljs.core.Keyword(null,"description","description",-1428560544),"an atom. When the value is true, the popover shows."], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"right-below","right-below",586981827),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when an anchor is in a scrolling region (e.g. scroller component), the popover can sometimes be clipped. By passing true for this parameter, re-com will use a different CSS method to show the popover. This method is slightly inferior because the popover can't track the anchor if it is repositioned"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style representing the popover width"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style representing the popover height"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),0.0,new cljs.core.Keyword(null,"type","type",1174270348),"double | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"indicates the opacity of the backdrop where 0.0=transparent, 1.0=opaque"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the popover is cancelled (e.g. user clicks away)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"describes the title of the popover. The default font size is 18px to make it stand out"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, displays the close button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"describes the popover body. Must be a single component"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"setup popover styles for a tooltip"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"white",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"fill color of the popover"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(11),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the length in pixels of the arrow (from pointy part to middle of arrow base)"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(22),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the width in pixels of arrow base"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style which overrides the inner padding of the popover"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override component style(s) with a style map, only use in case of emergency"], null)], null);
/**
 * Abstracts several components to handle the 90% of cases for general popovers and dialog boxes
 */
re_com.popover.popover_content_wrapper = (function re_com$popover$popover_content_wrapper(){
var argseq__19200__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.popover.popover_content_wrapper.cljs$core$IFn$_invoke$arity$variadic(argseq__19200__auto__);
});

re_com.popover.popover_content_wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (p__30053){
var map__30054 = p__30053;
var map__30054__$1 = ((cljs.core.seq_QMARK_.call(null,map__30054))?cljs.core.apply.call(null,cljs.core.hash_map,map__30054):map__30054);
var args = map__30054__$1;
var body = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var on_cancel = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
var height = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var tooltip_style_QMARK_ = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527));
var popover_color = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119));
var arrow_length = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(11));
var backdrop_opacity = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653));
var no_clip_QMARK_ = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951));
var close_button_QMARK_ = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687));
var arrow_width = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(22));
var width = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var title = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"title","title",636505583));
var showing_QMARK_ = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var style = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var padding = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var position = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_content_wrapper_args_desc),args,"popover-content-wrapper")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"popover-content-wrapper-args-desc","popover-content-wrapper-args-desc",-465983562,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"popover-content-wrapper")))].join('')));
}

if(cljs.core.truth_(cljs.core.complement.call(null,cljs.core.nil_QMARK_).call(null,showing_QMARK_))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Must specify a showing? atom"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"complement","complement",-913606051,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null)),new cljs.core.Symbol(null,"showing?","showing?",-559514281,null))))].join('')));
}

var left_offset = reagent.core.atom.call(null,(0));
var top_offset = reagent.core.atom.call(null,(0));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (left_offset,top_offset,map__30054,map__30054__$1,args,body,on_cancel,height,tooltip_style_QMARK_,popover_color,arrow_length,backdrop_opacity,no_clip_QMARK_,close_button_QMARK_,arrow_width,width,title,showing_QMARK_,style,padding,position){
return (function (this$){
if(cljs.core.truth_(no_clip_QMARK_)){
var node = reagent.core.dom_node.call(null,this$);
var offsets = re_com.util.sum_scroll_offsets.call(null,node);
var popover_point_node = node.parentNode;
var point_left = popover_point_node.offsetLeft;
var point_top = popover_point_node.offsetTop;
cljs.core.reset_BANG_.call(null,left_offset,(point_left - new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(offsets)));

return cljs.core.reset_BANG_.call(null,top_offset,(point_top - new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(offsets)));
} else {
return null;
}
});})(left_offset,top_offset,map__30054,map__30054__$1,args,body,on_cancel,height,tooltip_style_QMARK_,popover_color,arrow_length,backdrop_opacity,no_clip_QMARK_,close_button_QMARK_,arrow_width,width,title,showing_QMARK_,style,padding,position))
,new cljs.core.Keyword(null,"component-function","component-function",654728922),((function (left_offset,top_offset,map__30054,map__30054__$1,args,body,on_cancel,height,tooltip_style_QMARK_,popover_color,arrow_length,backdrop_opacity,no_clip_QMARK_,close_button_QMARK_,arrow_width,width,title,showing_QMARK_,style,padding,position){
return (function() { 
var G__30057__delegate = function (p__30055){
var map__30056 = p__30055;
var map__30056__$1 = ((cljs.core.seq_QMARK_.call(null,map__30056))?cljs.core.apply.call(null,cljs.core.hash_map,map__30056):map__30056);
var args__$1 = map__30056__$1;
var body__$1 = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var on_cancel__$1 = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
var height__$1 = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var tooltip_style_QMARK___$1 = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527));
var popover_color__$1 = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119));
var arrow_length__$1 = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(11));
var backdrop_opacity__$1 = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653));
var no_clip_QMARK___$1 = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951));
var close_button_QMARK___$1 = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687));
var arrow_width__$1 = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(22));
var width__$1 = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var title__$1 = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"title","title",636505583));
var showing_QMARK___$1 = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var style__$1 = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var padding__$1 = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var position__$1 = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_content_wrapper_args_desc),args__$1,"popover-content-wrapper")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"popover-content-wrapper-args-desc","popover-content-wrapper-args-desc",-465983562,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"popover-content-wrapper")))].join('')));
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"popover-content-wrapper",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"inherit"),(cljs.core.truth_(no_clip_QMARK___$1)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),re_com.util.px.call(null,cljs.core.deref.call(null,left_offset)),new cljs.core.Keyword(null,"top","top",-1856271961),re_com.util.px.call(null,cljs.core.deref.call(null,top_offset))], null):null),style__$1)], null),(cljs.core.truth_((function (){var and__18148__auto__ = cljs.core.deref.call(null,showing_QMARK___$1);
if(cljs.core.truth_(and__18148__auto__)){
return on_cancel__$1;
} else {
return and__18148__auto__;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.backdrop,new cljs.core.Keyword(null,"opacity","opacity",397153780),backdrop_opacity__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_cancel__$1], null):null),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_border,new cljs.core.Keyword(null,"position","position",-2011731912),(cljs.core.truth_(position__$1)?position__$1:new cljs.core.Keyword(null,"right-below","right-below",586981827)),new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height__$1,new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527),tooltip_style_QMARK___$1,new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119),popover_color__$1,new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),arrow_length__$1,new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),arrow_width__$1,new cljs.core.Keyword(null,"padding","padding",1660304693),padding__$1,new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(title__$1)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_title,new cljs.core.Keyword(null,"title","title",636505583),title__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_QMARK___$1,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687),close_button_QMARK___$1,new cljs.core.Keyword(null,"close-callback","close-callback",651188974),on_cancel__$1], null):null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body__$1], null)], null)], null);
};
var G__30057 = function (var_args){
var p__30055 = null;
if (arguments.length > 0) {
var G__30058__i = 0, G__30058__a = new Array(arguments.length -  0);
while (G__30058__i < G__30058__a.length) {G__30058__a[G__30058__i] = arguments[G__30058__i + 0]; ++G__30058__i;}
  p__30055 = new cljs.core.IndexedSeq(G__30058__a,0);
} 
return G__30057__delegate.call(this,p__30055);};
G__30057.cljs$lang$maxFixedArity = 0;
G__30057.cljs$lang$applyTo = (function (arglist__30059){
var p__30055 = cljs.core.seq(arglist__30059);
return G__30057__delegate(p__30055);
});
G__30057.cljs$core$IFn$_invoke$arity$variadic = G__30057__delegate;
return G__30057;
})()
;})(left_offset,top_offset,map__30054,map__30054__$1,args,body,on_cancel,height,tooltip_style_QMARK_,popover_color,arrow_length,backdrop_opacity,no_clip_QMARK_,close_button_QMARK_,arrow_width,width,title,showing_QMARK_,style,padding,position))
], null));
});

re_com.popover.popover_content_wrapper.cljs$lang$maxFixedArity = (0);

re_com.popover.popover_content_wrapper.cljs$lang$applyTo = (function (seq30052){
return re_com.popover.popover_content_wrapper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30052));
});
re_com.popover.popover_anchor_wrapper_args_desc = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"showing?","showing?",2094921488),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean atom",new cljs.core.Keyword(null,"description","description",-1428560544),"an atom. When the value is true, the popover shows"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"right-below","right-below",586981827),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the component the popover is attached to"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the popover body component"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override component style(s) with a style map, only use in case of emergency"], null)], null);
/**
 * Renders an element or control along with a Bootstrap popover
 */
re_com.popover.popover_anchor_wrapper = (function re_com$popover$popover_anchor_wrapper(){
var argseq__19200__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.popover.popover_anchor_wrapper.cljs$core$IFn$_invoke$arity$variadic(argseq__19200__auto__);
});

re_com.popover.popover_anchor_wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (p__30061){
var map__30062 = p__30061;
var map__30062__$1 = ((cljs.core.seq_QMARK_.call(null,map__30062))?cljs.core.apply.call(null,cljs.core.hash_map,map__30062):map__30062);
var args = map__30062__$1;
var style = cljs.core.get.call(null,map__30062__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var popover = cljs.core.get.call(null,map__30062__$1,new cljs.core.Keyword(null,"popover","popover",-1809582136));
var anchor = cljs.core.get.call(null,map__30062__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var position = cljs.core.get.call(null,map__30062__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var showing_QMARK_ = cljs.core.get.call(null,map__30062__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_anchor_wrapper_args_desc),args,"popover-anchor-wrapper")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"popover-anchor-wrapper-args-desc","popover-anchor-wrapper-args-desc",-1437141918,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"popover-anchor-wrapper")))].join('')));
}

var vec__30063 = re_com.popover.split_keyword.call(null,position,"-");
var orientation = cljs.core.nth.call(null,vec__30063,(0),null);
var arrow_pos = cljs.core.nth.call(null,vec__30063,(1),null);
var place_anchor_before_QMARK_ = (function (){var G__30064 = (((orientation instanceof cljs.core.Keyword))?orientation.fqn:null);
switch (G__30064) {
case "above":
return false;

break;
case "left":
return false;

break;
default:
return true;

}
})();
var flex_flow = (function (){var G__30065 = (((orientation instanceof cljs.core.Keyword))?orientation.fqn:null);
switch (G__30065) {
case "right":
return "row";

break;
case "left":
return "row";

break;
default:
return "column";

}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-popover-anchor-wrapper display-inline-flex",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"inherit"),style)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-point-wrapper display-inline-flex",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"auto"),re_com.box.flex_flow_style.call(null,flex_flow),re_com.box.align_style.call(null,new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)))], null),(cljs.core.truth_(place_anchor_before_QMARK_)?anchor:null),(cljs.core.truth_(cljs.core.deref.call(null,showing_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-popover-point display-inline-flex",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"auto"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"4"], null))], null),popover], null):null),(cljs.core.truth_(place_anchor_before_QMARK_)?null:anchor)], null)], null);
});

re_com.popover.popover_anchor_wrapper.cljs$lang$maxFixedArity = (0);

re_com.popover.popover_anchor_wrapper.cljs$lang$applyTo = (function (seq30060){
return re_com.popover.popover_anchor_wrapper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30060));
});
re_com.popover.popover_tooltip_args_desc = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the text (or component) for the tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"showing?","showing?",2094921488),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean atom",new cljs.core.Keyword(null,"description","description",-1428560544),"an atom. When the value is true, the tooltip shows"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the popover is cancelled (e.g. user clicks away)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, displays the close button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.popover_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"controls background color of the tooltip. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for black or one of ",re_com.validate.popover_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the component the tooltip is attached to"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"specifies width of the tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override component style(s) with a style map, only use in case of emergency"], null)], null);
/**
 * Renders text as a tooltip in Bootstrap popover style
 */
re_com.popover.popover_tooltip = (function re_com$popover$popover_tooltip(){
var argseq__19200__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.popover.popover_tooltip.cljs$core$IFn$_invoke$arity$variadic(argseq__19200__auto__);
});

re_com.popover.popover_tooltip.cljs$core$IFn$_invoke$arity$variadic = (function (p__30069){
var map__30070 = p__30069;
var map__30070__$1 = ((cljs.core.seq_QMARK_.call(null,map__30070))?cljs.core.apply.call(null,cljs.core.hash_map,map__30070):map__30070);
var args = map__30070__$1;
var style = cljs.core.get.call(null,map__30070__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var width = cljs.core.get.call(null,map__30070__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var position = cljs.core.get.call(null,map__30070__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var anchor = cljs.core.get.call(null,map__30070__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var status = cljs.core.get.call(null,map__30070__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var close_button_QMARK_ = cljs.core.get.call(null,map__30070__$1,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687));
var on_cancel = cljs.core.get.call(null,map__30070__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
var showing_QMARK_ = cljs.core.get.call(null,map__30070__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var label = cljs.core.get.call(null,map__30070__$1,new cljs.core.Keyword(null,"label","label",1718410804));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_tooltip_args_desc),args,"popover-tooltip")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"popover-tooltip-args-desc","popover-tooltip-args-desc",-718146108,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"popover-tooltip")))].join('')));
}

var label__$1 = re_com.util.deref_or_value.call(null,label);
var popover_color = (function (){var G__30071 = (((status instanceof cljs.core.Keyword))?status.fqn:null);
switch (G__30071) {
case "info":
return "#333333";

break;
case "error":
return "#d50000";

break;
case "warning":
return "#f57c00";

break;
default:
return "black";

}
})();
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_anchor_wrapper,new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_QMARK_,new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"anchor","anchor",1549638489),anchor,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_content_wrapper,new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_QMARK_,new cljs.core.Keyword(null,"position","position",-2011731912),(cljs.core.truth_(position)?position:new cljs.core.Keyword(null,"below-center","below-center",-2126885397)),new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),on_cancel,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527),true,new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119),popover_color,new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 8px",new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(6),new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(12),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"info","info",-317069002)))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px"], null):new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label__$1,(cljs.core.truth_(close_button_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.close_button,showing_QMARK_,on_cancel,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"text-shadow","text-shadow",116733623),"none",new cljs.core.Keyword(null,"right","right",-452581833),"1px"], null)], null):null)], null)], null)], null)], null);
});

re_com.popover.popover_tooltip.cljs$lang$maxFixedArity = (0);

re_com.popover.popover_tooltip.cljs$lang$applyTo = (function (seq30068){
return re_com.popover.popover_tooltip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30068));
});

//# sourceMappingURL=popover.js.map?rel=1443194344821