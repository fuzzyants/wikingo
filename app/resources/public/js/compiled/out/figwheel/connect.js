// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('app.core');
goog.require('figwheel.client.utils');
goog.require('figwheel.client');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__21317__delegate = function (x){
if(cljs.core.truth_(app.core.mount_root)){
return cljs.core.apply.call(null,app.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'app.core/mount-root' is missing");
}
};
var G__21317 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__21318__i = 0, G__21318__a = new Array(arguments.length -  0);
while (G__21318__i < G__21318__a.length) {G__21318__a[G__21318__i] = arguments[G__21318__i + 0]; ++G__21318__i;}
  x = new cljs.core.IndexedSeq(G__21318__a,0);
} 
return G__21317__delegate.call(this,x);};
G__21317.cljs$lang$maxFixedArity = 0;
G__21317.cljs$lang$applyTo = (function (arglist__21319){
var x = cljs.core.seq(arglist__21319);
return G__21317__delegate(x);
});
G__21317.cljs$core$IFn$_invoke$arity$variadic = G__21317__delegate;
return G__21317;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=connect.js.map?rel=1443552982118