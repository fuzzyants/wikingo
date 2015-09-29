// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31082_31094 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31083_31095 = null;
var count__31084_31096 = (0);
var i__31085_31097 = (0);
while(true){
if((i__31085_31097 < count__31084_31096)){
var f_31098 = cljs.core._nth.call(null,chunk__31083_31095,i__31085_31097);
cljs.core.println.call(null,"  ",f_31098);

var G__31099 = seq__31082_31094;
var G__31100 = chunk__31083_31095;
var G__31101 = count__31084_31096;
var G__31102 = (i__31085_31097 + (1));
seq__31082_31094 = G__31099;
chunk__31083_31095 = G__31100;
count__31084_31096 = G__31101;
i__31085_31097 = G__31102;
continue;
} else {
var temp__4126__auto___31103 = cljs.core.seq.call(null,seq__31082_31094);
if(temp__4126__auto___31103){
var seq__31082_31104__$1 = temp__4126__auto___31103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31082_31104__$1)){
var c__18945__auto___31105 = cljs.core.chunk_first.call(null,seq__31082_31104__$1);
var G__31106 = cljs.core.chunk_rest.call(null,seq__31082_31104__$1);
var G__31107 = c__18945__auto___31105;
var G__31108 = cljs.core.count.call(null,c__18945__auto___31105);
var G__31109 = (0);
seq__31082_31094 = G__31106;
chunk__31083_31095 = G__31107;
count__31084_31096 = G__31108;
i__31085_31097 = G__31109;
continue;
} else {
var f_31110 = cljs.core.first.call(null,seq__31082_31104__$1);
cljs.core.println.call(null,"  ",f_31110);

var G__31111 = cljs.core.next.call(null,seq__31082_31104__$1);
var G__31112 = null;
var G__31113 = (0);
var G__31114 = (0);
seq__31082_31094 = G__31111;
chunk__31083_31095 = G__31112;
count__31084_31096 = G__31113;
i__31085_31097 = G__31114;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__18160__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31086 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31087 = null;
var count__31088 = (0);
var i__31089 = (0);
while(true){
if((i__31089 < count__31088)){
var vec__31090 = cljs.core._nth.call(null,chunk__31087,i__31089);
var name = cljs.core.nth.call(null,vec__31090,(0),null);
var map__31091 = cljs.core.nth.call(null,vec__31090,(1),null);
var map__31091__$1 = ((cljs.core.seq_QMARK_.call(null,map__31091))?cljs.core.apply.call(null,cljs.core.hash_map,map__31091):map__31091);
var arglists = cljs.core.get.call(null,map__31091__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__31091__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31115 = seq__31086;
var G__31116 = chunk__31087;
var G__31117 = count__31088;
var G__31118 = (i__31089 + (1));
seq__31086 = G__31115;
chunk__31087 = G__31116;
count__31088 = G__31117;
i__31089 = G__31118;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__31086);
if(temp__4126__auto__){
var seq__31086__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31086__$1)){
var c__18945__auto__ = cljs.core.chunk_first.call(null,seq__31086__$1);
var G__31119 = cljs.core.chunk_rest.call(null,seq__31086__$1);
var G__31120 = c__18945__auto__;
var G__31121 = cljs.core.count.call(null,c__18945__auto__);
var G__31122 = (0);
seq__31086 = G__31119;
chunk__31087 = G__31120;
count__31088 = G__31121;
i__31089 = G__31122;
continue;
} else {
var vec__31092 = cljs.core.first.call(null,seq__31086__$1);
var name = cljs.core.nth.call(null,vec__31092,(0),null);
var map__31093 = cljs.core.nth.call(null,vec__31092,(1),null);
var map__31093__$1 = ((cljs.core.seq_QMARK_.call(null,map__31093))?cljs.core.apply.call(null,cljs.core.hash_map,map__31093):map__31093);
var arglists = cljs.core.get.call(null,map__31093__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__31093__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31123 = cljs.core.next.call(null,seq__31086__$1);
var G__31124 = null;
var G__31125 = (0);
var G__31126 = (0);
seq__31086 = G__31123;
chunk__31087 = G__31124;
count__31088 = G__31125;
i__31089 = G__31126;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1443194345653