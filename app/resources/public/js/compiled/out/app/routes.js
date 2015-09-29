// Compiled by ClojureScript 0.0-3211 {}
goog.provide('app.routes');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.history.EventType');
goog.require('goog.events');
goog.require('secretary.core');
goog.require('goog.History');
app.routes.hook_browser_navigation_BANG_ = (function app$routes$hook_browser_navigation_BANG_(){
var G__21426 = (new goog.History());
goog.events.listen(G__21426,goog.history.EventType.NAVIGATE,((function (G__21426){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__21426))
);

G__21426.setEnabled(true);

return G__21426;
});
app.routes.app_routes = (function app$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__21306__auto___21431 = (function (params__21307__auto__){
if(cljs.core.map_QMARK_.call(null,params__21307__auto__)){
var map__21429 = params__21307__auto__;
var map__21429__$1 = ((cljs.core.seq_QMARK_.call(null,map__21429))?cljs.core.apply.call(null,cljs.core.hash_map,map__21429):map__21429);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21307__auto__)){
var vec__21430 = params__21307__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__21306__auto___21431);


return app.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1443552579134