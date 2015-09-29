// Compiled by ClojureScript 0.0-3211 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('app.views');
goog.require('app.routes');
goog.require('app.handlers');
goog.require('app.subs');
goog.require('re_frame.core');
app.core.mount_root = (function app$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.home_panel], null),document.getElementById("app"));
});
app.core.init = (function app$core$init(){
app.routes.app_routes.call(null);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return app.core.mount_root.call(null);
});
goog.exportSymbol('app.core.init', app.core.init);

//# sourceMappingURL=core.js.map?rel=1443555303784