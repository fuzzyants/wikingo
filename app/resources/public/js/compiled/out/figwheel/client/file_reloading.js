// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__31129_SHARP_,p2__31130_SHARP_){
var and__18148__auto__ = p1__31129_SHARP_;
if(cljs.core.truth_(and__18148__auto__)){
return p2__31130_SHARP_;
} else {
return and__18148__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18160__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18160__auto__){
return or__18160__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18160__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18160__auto__){
return or__18160__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18160__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19055__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19059__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19059__auto__,method_table__19055__auto__,prefer_table__19056__auto__,method_cache__19057__auto__,cached_hierarchy__19058__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__31131){
var map__31132 = p__31131;
var map__31132__$1 = ((cljs.core.seq_QMARK_.call(null,map__31132))?cljs.core.apply.call(null,cljs.core.hash_map,map__31132):map__31132);
var file = cljs.core.get.call(null,map__31132__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__31133){
var map__31134 = p__31133;
var map__31134__$1 = ((cljs.core.seq_QMARK_.call(null,map__31134))?cljs.core.apply.call(null,cljs.core.hash_map,map__31134):map__31134);
var namespace = cljs.core.get.call(null,map__31134__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19055__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19059__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19059__auto__,method_table__19055__auto__,prefer_table__19056__auto__,method_cache__19057__auto__,cached_hierarchy__19058__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e31135){if((e31135 instanceof Error)){
var e = e31135;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31135;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__31137 = arguments.length;
switch (G__31137) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31139,callback){
var map__31141 = p__31139;
var map__31141__$1 = ((cljs.core.seq_QMARK_.call(null,map__31141))?cljs.core.apply.call(null,cljs.core.hash_map,map__31141):map__31141);
var file_msg = map__31141__$1;
var request_url = cljs.core.get.call(null,map__31141__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31141,map__31141__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31141,map__31141__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31142){
var map__31144 = p__31142;
var map__31144__$1 = ((cljs.core.seq_QMARK_.call(null,map__31144))?cljs.core.apply.call(null,cljs.core.hash_map,map__31144):map__31144);
var file_msg = map__31144__$1;
var meta_data = cljs.core.get.call(null,map__31144__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__31144__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__18160__auto__ = meta_data;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18148__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18148__auto__){
var or__18160__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18160__auto____$1)){
return or__18160__auto____$1;
} else {
var and__18148__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18148__auto____$1){
var or__18160__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18160__auto____$2){
return or__18160__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18148__auto____$1;
}
}
}
} else {
return and__18148__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31145,callback){
var map__31147 = p__31145;
var map__31147__$1 = ((cljs.core.seq_QMARK_.call(null,map__31147))?cljs.core.apply.call(null,cljs.core.hash_map,map__31147):map__31147);
var file_msg = map__31147__$1;
var namespace = cljs.core.get.call(null,map__31147__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__31147__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22071__auto___31234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___31234,out){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___31234,out){
return (function (state_31216){
var state_val_31217 = (state_31216[(1)]);
if((state_val_31217 === (7))){
var inst_31200 = (state_31216[(7)]);
var inst_31206 = (state_31216[(2)]);
var inst_31207 = cljs.core.async.put_BANG_.call(null,out,inst_31206);
var inst_31196 = inst_31200;
var state_31216__$1 = (function (){var statearr_31218 = state_31216;
(statearr_31218[(8)] = inst_31207);

(statearr_31218[(9)] = inst_31196);

return statearr_31218;
})();
var statearr_31219_31235 = state_31216__$1;
(statearr_31219_31235[(2)] = null);

(statearr_31219_31235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (6))){
var inst_31212 = (state_31216[(2)]);
var state_31216__$1 = state_31216;
var statearr_31220_31236 = state_31216__$1;
(statearr_31220_31236[(2)] = inst_31212);

(statearr_31220_31236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (5))){
var inst_31210 = cljs.core.async.close_BANG_.call(null,out);
var state_31216__$1 = state_31216;
var statearr_31221_31237 = state_31216__$1;
(statearr_31221_31237[(2)] = inst_31210);

(statearr_31221_31237[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (4))){
var inst_31199 = (state_31216[(10)]);
var inst_31204 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31199);
var state_31216__$1 = state_31216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31216__$1,(7),inst_31204);
} else {
if((state_val_31217 === (3))){
var inst_31214 = (state_31216[(2)]);
var state_31216__$1 = state_31216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31216__$1,inst_31214);
} else {
if((state_val_31217 === (2))){
var inst_31199 = (state_31216[(10)]);
var inst_31196 = (state_31216[(9)]);
var inst_31199__$1 = cljs.core.nth.call(null,inst_31196,(0),null);
var inst_31200 = cljs.core.nthnext.call(null,inst_31196,(1));
var inst_31201 = (inst_31199__$1 == null);
var inst_31202 = cljs.core.not.call(null,inst_31201);
var state_31216__$1 = (function (){var statearr_31222 = state_31216;
(statearr_31222[(7)] = inst_31200);

(statearr_31222[(10)] = inst_31199__$1);

return statearr_31222;
})();
if(inst_31202){
var statearr_31223_31238 = state_31216__$1;
(statearr_31223_31238[(1)] = (4));

} else {
var statearr_31224_31239 = state_31216__$1;
(statearr_31224_31239[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (1))){
var inst_31194 = cljs.core.nth.call(null,files,(0),null);
var inst_31195 = cljs.core.nthnext.call(null,files,(1));
var inst_31196 = files;
var state_31216__$1 = (function (){var statearr_31225 = state_31216;
(statearr_31225[(11)] = inst_31194);

(statearr_31225[(12)] = inst_31195);

(statearr_31225[(9)] = inst_31196);

return statearr_31225;
})();
var statearr_31226_31240 = state_31216__$1;
(statearr_31226_31240[(2)] = null);

(statearr_31226_31240[(1)] = (2));


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
});})(c__22071__auto___31234,out))
;
return ((function (switch__22009__auto__,c__22071__auto___31234,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22010__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22010__auto____0 = (function (){
var statearr_31230 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31230[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22010__auto__);

(statearr_31230[(1)] = (1));

return statearr_31230;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22010__auto____1 = (function (state_31216){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_31216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e31231){if((e31231 instanceof Object)){
var ex__22013__auto__ = e31231;
var statearr_31232_31241 = state_31216;
(statearr_31232_31241[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31242 = state_31216;
state_31216 = G__31242;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22010__auto__ = function(state_31216){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22010__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22010__auto____1.call(this,state_31216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22010__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22010__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___31234,out))
})();
var state__22073__auto__ = (function (){var statearr_31233 = f__22072__auto__.call(null);
(statearr_31233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___31234);

return statearr_31233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___31234,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__31243,p__31244){
var map__31247 = p__31243;
var map__31247__$1 = ((cljs.core.seq_QMARK_.call(null,map__31247))?cljs.core.apply.call(null,cljs.core.hash_map,map__31247):map__31247);
var opts = map__31247__$1;
var url_rewriter = cljs.core.get.call(null,map__31247__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__31248 = p__31244;
var map__31248__$1 = ((cljs.core.seq_QMARK_.call(null,map__31248))?cljs.core.apply.call(null,cljs.core.hash_map,map__31248):map__31248);
var file_msg = map__31248__$1;
var file = cljs.core.get.call(null,map__31248__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31249){
var map__31252 = p__31249;
var map__31252__$1 = ((cljs.core.seq_QMARK_.call(null,map__31252))?cljs.core.apply.call(null,cljs.core.hash_map,map__31252):map__31252);
var file = cljs.core.get.call(null,map__31252__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__31252__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__18148__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18148__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18148__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e31253){var e = e31253;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31258,p__31259){
var map__31461 = p__31258;
var map__31461__$1 = ((cljs.core.seq_QMARK_.call(null,map__31461))?cljs.core.apply.call(null,cljs.core.hash_map,map__31461):map__31461);
var opts = map__31461__$1;
var load_unchanged_files = cljs.core.get.call(null,map__31461__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__31461__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__31461__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__31462 = p__31259;
var map__31462__$1 = ((cljs.core.seq_QMARK_.call(null,map__31462))?cljs.core.apply.call(null,cljs.core.hash_map,map__31462):map__31462);
var msg = map__31462__$1;
var files = cljs.core.get.call(null,map__31462__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__,map__31461,map__31461__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31462,map__31462__$1,msg,files){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto__,map__31461,map__31461__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31462,map__31462__$1,msg,files){
return (function (state_31587){
var state_val_31588 = (state_31587[(1)]);
if((state_val_31588 === (7))){
var inst_31476 = (state_31587[(7)]);
var inst_31474 = (state_31587[(8)]);
var inst_31475 = (state_31587[(9)]);
var inst_31477 = (state_31587[(10)]);
var inst_31482 = cljs.core._nth.call(null,inst_31475,inst_31477);
var inst_31483 = figwheel.client.file_reloading.eval_body.call(null,inst_31482);
var inst_31484 = (inst_31477 + (1));
var tmp31589 = inst_31476;
var tmp31590 = inst_31474;
var tmp31591 = inst_31475;
var inst_31474__$1 = tmp31590;
var inst_31475__$1 = tmp31591;
var inst_31476__$1 = tmp31589;
var inst_31477__$1 = inst_31484;
var state_31587__$1 = (function (){var statearr_31592 = state_31587;
(statearr_31592[(7)] = inst_31476__$1);

(statearr_31592[(8)] = inst_31474__$1);

(statearr_31592[(9)] = inst_31475__$1);

(statearr_31592[(11)] = inst_31483);

(statearr_31592[(10)] = inst_31477__$1);

return statearr_31592;
})();
var statearr_31593_31662 = state_31587__$1;
(statearr_31593_31662[(2)] = null);

(statearr_31593_31662[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (20))){
var inst_31523 = (state_31587[(12)]);
var inst_31524 = (state_31587[(13)]);
var inst_31520 = (state_31587[(14)]);
var inst_31519 = (state_31587[(15)]);
var inst_31526 = (state_31587[(16)]);
var inst_31529 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31531 = (function (){var files_not_loaded = inst_31526;
var res = inst_31524;
var res_SINGLEQUOTE_ = inst_31523;
var files_SINGLEQUOTE_ = inst_31520;
var all_files = inst_31519;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31523,inst_31524,inst_31520,inst_31519,inst_31526,inst_31529,state_val_31588,c__22071__auto__,map__31461,map__31461__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31462,map__31462__$1,msg,files){
return (function (p__31530){
var map__31594 = p__31530;
var map__31594__$1 = ((cljs.core.seq_QMARK_.call(null,map__31594))?cljs.core.apply.call(null,cljs.core.hash_map,map__31594):map__31594);
var file = cljs.core.get.call(null,map__31594__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__31594__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31523,inst_31524,inst_31520,inst_31519,inst_31526,inst_31529,state_val_31588,c__22071__auto__,map__31461,map__31461__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31462,map__31462__$1,msg,files))
})();
var inst_31532 = cljs.core.map.call(null,inst_31531,inst_31524);
var inst_31533 = cljs.core.pr_str.call(null,inst_31532);
var inst_31534 = figwheel.client.utils.log.call(null,inst_31533);
var inst_31535 = (function (){var files_not_loaded = inst_31526;
var res = inst_31524;
var res_SINGLEQUOTE_ = inst_31523;
var files_SINGLEQUOTE_ = inst_31520;
var all_files = inst_31519;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31523,inst_31524,inst_31520,inst_31519,inst_31526,inst_31529,inst_31531,inst_31532,inst_31533,inst_31534,state_val_31588,c__22071__auto__,map__31461,map__31461__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31462,map__31462__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31523,inst_31524,inst_31520,inst_31519,inst_31526,inst_31529,inst_31531,inst_31532,inst_31533,inst_31534,state_val_31588,c__22071__auto__,map__31461,map__31461__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31462,map__31462__$1,msg,files))
})();
var inst_31536 = setTimeout(inst_31535,(10));
var state_31587__$1 = (function (){var statearr_31595 = state_31587;
(statearr_31595[(17)] = inst_31529);

(statearr_31595[(18)] = inst_31534);

return statearr_31595;
})();
var statearr_31596_31663 = state_31587__$1;
(statearr_31596_31663[(2)] = inst_31536);

(statearr_31596_31663[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (27))){
var inst_31546 = (state_31587[(19)]);
var state_31587__$1 = state_31587;
var statearr_31597_31664 = state_31587__$1;
(statearr_31597_31664[(2)] = inst_31546);

(statearr_31597_31664[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (1))){
var inst_31466 = (state_31587[(20)]);
var inst_31463 = before_jsload.call(null,files);
var inst_31464 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31465 = (function (){return ((function (inst_31466,inst_31463,inst_31464,state_val_31588,c__22071__auto__,map__31461,map__31461__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31462,map__31462__$1,msg,files){
return (function (p1__31254_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31254_SHARP_);
});
;})(inst_31466,inst_31463,inst_31464,state_val_31588,c__22071__auto__,map__31461,map__31461__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31462,map__31462__$1,msg,files))
})();
var inst_31466__$1 = cljs.core.filter.call(null,inst_31465,files);
var inst_31467 = cljs.core.not_empty.call(null,inst_31466__$1);
var state_31587__$1 = (function (){var statearr_31598 = state_31587;
(statearr_31598[(21)] = inst_31464);

(statearr_31598[(20)] = inst_31466__$1);

(statearr_31598[(22)] = inst_31463);

return statearr_31598;
})();
if(cljs.core.truth_(inst_31467)){
var statearr_31599_31665 = state_31587__$1;
(statearr_31599_31665[(1)] = (2));

} else {
var statearr_31600_31666 = state_31587__$1;
(statearr_31600_31666[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (24))){
var state_31587__$1 = state_31587;
var statearr_31601_31667 = state_31587__$1;
(statearr_31601_31667[(2)] = null);

(statearr_31601_31667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (4))){
var inst_31511 = (state_31587[(2)]);
var inst_31512 = (function (){return ((function (inst_31511,state_val_31588,c__22071__auto__,map__31461,map__31461__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31462,map__31462__$1,msg,files){
return (function (p1__31255_SHARP_){
var and__18148__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31255_SHARP_);
if(cljs.core.truth_(and__18148__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31255_SHARP_));
} else {
return and__18148__auto__;
}
});
;})(inst_31511,state_val_31588,c__22071__auto__,map__31461,map__31461__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31462,map__31462__$1,msg,files))
})();
var inst_31513 = cljs.core.filter.call(null,inst_31512,files);
var state_31587__$1 = (function (){var statearr_31602 = state_31587;
(statearr_31602[(23)] = inst_31513);

(statearr_31602[(24)] = inst_31511);

return statearr_31602;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_31603_31668 = state_31587__$1;
(statearr_31603_31668[(1)] = (16));

} else {
var statearr_31604_31669 = state_31587__$1;
(statearr_31604_31669[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (15))){
var inst_31501 = (state_31587[(2)]);
var state_31587__$1 = state_31587;
var statearr_31605_31670 = state_31587__$1;
(statearr_31605_31670[(2)] = inst_31501);

(statearr_31605_31670[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (21))){
var state_31587__$1 = state_31587;
var statearr_31606_31671 = state_31587__$1;
(statearr_31606_31671[(2)] = null);

(statearr_31606_31671[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (31))){
var inst_31554 = (state_31587[(25)]);
var inst_31564 = (state_31587[(2)]);
var inst_31565 = cljs.core.not_empty.call(null,inst_31554);
var state_31587__$1 = (function (){var statearr_31607 = state_31587;
(statearr_31607[(26)] = inst_31564);

return statearr_31607;
})();
if(cljs.core.truth_(inst_31565)){
var statearr_31608_31672 = state_31587__$1;
(statearr_31608_31672[(1)] = (32));

} else {
var statearr_31609_31673 = state_31587__$1;
(statearr_31609_31673[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (32))){
var inst_31554 = (state_31587[(25)]);
var inst_31567 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31554);
var inst_31568 = cljs.core.pr_str.call(null,inst_31567);
var inst_31569 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_31568)].join('');
var inst_31570 = figwheel.client.utils.log.call(null,inst_31569);
var state_31587__$1 = state_31587;
var statearr_31610_31674 = state_31587__$1;
(statearr_31610_31674[(2)] = inst_31570);

(statearr_31610_31674[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (33))){
var state_31587__$1 = state_31587;
var statearr_31611_31675 = state_31587__$1;
(statearr_31611_31675[(2)] = null);

(statearr_31611_31675[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (13))){
var inst_31487 = (state_31587[(27)]);
var inst_31491 = cljs.core.chunk_first.call(null,inst_31487);
var inst_31492 = cljs.core.chunk_rest.call(null,inst_31487);
var inst_31493 = cljs.core.count.call(null,inst_31491);
var inst_31474 = inst_31492;
var inst_31475 = inst_31491;
var inst_31476 = inst_31493;
var inst_31477 = (0);
var state_31587__$1 = (function (){var statearr_31612 = state_31587;
(statearr_31612[(7)] = inst_31476);

(statearr_31612[(8)] = inst_31474);

(statearr_31612[(9)] = inst_31475);

(statearr_31612[(10)] = inst_31477);

return statearr_31612;
})();
var statearr_31613_31676 = state_31587__$1;
(statearr_31613_31676[(2)] = null);

(statearr_31613_31676[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (22))){
var inst_31526 = (state_31587[(16)]);
var inst_31539 = (state_31587[(2)]);
var inst_31540 = cljs.core.not_empty.call(null,inst_31526);
var state_31587__$1 = (function (){var statearr_31614 = state_31587;
(statearr_31614[(28)] = inst_31539);

return statearr_31614;
})();
if(cljs.core.truth_(inst_31540)){
var statearr_31615_31677 = state_31587__$1;
(statearr_31615_31677[(1)] = (23));

} else {
var statearr_31616_31678 = state_31587__$1;
(statearr_31616_31678[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (36))){
var state_31587__$1 = state_31587;
var statearr_31617_31679 = state_31587__$1;
(statearr_31617_31679[(2)] = null);

(statearr_31617_31679[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (29))){
var inst_31555 = (state_31587[(29)]);
var inst_31558 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31555);
var inst_31559 = cljs.core.pr_str.call(null,inst_31558);
var inst_31560 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31559)].join('');
var inst_31561 = figwheel.client.utils.log.call(null,inst_31560);
var state_31587__$1 = state_31587;
var statearr_31618_31680 = state_31587__$1;
(statearr_31618_31680[(2)] = inst_31561);

(statearr_31618_31680[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (6))){
var inst_31508 = (state_31587[(2)]);
var state_31587__$1 = state_31587;
var statearr_31619_31681 = state_31587__$1;
(statearr_31619_31681[(2)] = inst_31508);

(statearr_31619_31681[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (28))){
var inst_31555 = (state_31587[(29)]);
var inst_31552 = (state_31587[(2)]);
var inst_31553 = cljs.core.get.call(null,inst_31552,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31554 = cljs.core.get.call(null,inst_31552,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_31555__$1 = cljs.core.get.call(null,inst_31552,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31556 = cljs.core.not_empty.call(null,inst_31555__$1);
var state_31587__$1 = (function (){var statearr_31620 = state_31587;
(statearr_31620[(30)] = inst_31553);

(statearr_31620[(25)] = inst_31554);

(statearr_31620[(29)] = inst_31555__$1);

return statearr_31620;
})();
if(cljs.core.truth_(inst_31556)){
var statearr_31621_31682 = state_31587__$1;
(statearr_31621_31682[(1)] = (29));

} else {
var statearr_31622_31683 = state_31587__$1;
(statearr_31622_31683[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (25))){
var inst_31585 = (state_31587[(2)]);
var state_31587__$1 = state_31587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31587__$1,inst_31585);
} else {
if((state_val_31588 === (34))){
var inst_31553 = (state_31587[(30)]);
var inst_31573 = (state_31587[(2)]);
var inst_31574 = cljs.core.not_empty.call(null,inst_31553);
var state_31587__$1 = (function (){var statearr_31623 = state_31587;
(statearr_31623[(31)] = inst_31573);

return statearr_31623;
})();
if(cljs.core.truth_(inst_31574)){
var statearr_31624_31684 = state_31587__$1;
(statearr_31624_31684[(1)] = (35));

} else {
var statearr_31625_31685 = state_31587__$1;
(statearr_31625_31685[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (17))){
var inst_31513 = (state_31587[(23)]);
var state_31587__$1 = state_31587;
var statearr_31626_31686 = state_31587__$1;
(statearr_31626_31686[(2)] = inst_31513);

(statearr_31626_31686[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (3))){
var state_31587__$1 = state_31587;
var statearr_31627_31687 = state_31587__$1;
(statearr_31627_31687[(2)] = null);

(statearr_31627_31687[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (12))){
var inst_31504 = (state_31587[(2)]);
var state_31587__$1 = state_31587;
var statearr_31628_31688 = state_31587__$1;
(statearr_31628_31688[(2)] = inst_31504);

(statearr_31628_31688[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (2))){
var inst_31466 = (state_31587[(20)]);
var inst_31473 = cljs.core.seq.call(null,inst_31466);
var inst_31474 = inst_31473;
var inst_31475 = null;
var inst_31476 = (0);
var inst_31477 = (0);
var state_31587__$1 = (function (){var statearr_31629 = state_31587;
(statearr_31629[(7)] = inst_31476);

(statearr_31629[(8)] = inst_31474);

(statearr_31629[(9)] = inst_31475);

(statearr_31629[(10)] = inst_31477);

return statearr_31629;
})();
var statearr_31630_31689 = state_31587__$1;
(statearr_31630_31689[(2)] = null);

(statearr_31630_31689[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (23))){
var inst_31523 = (state_31587[(12)]);
var inst_31546 = (state_31587[(19)]);
var inst_31524 = (state_31587[(13)]);
var inst_31520 = (state_31587[(14)]);
var inst_31519 = (state_31587[(15)]);
var inst_31526 = (state_31587[(16)]);
var inst_31542 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31545 = (function (){var files_not_loaded = inst_31526;
var res = inst_31524;
var res_SINGLEQUOTE_ = inst_31523;
var files_SINGLEQUOTE_ = inst_31520;
var all_files = inst_31519;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31523,inst_31546,inst_31524,inst_31520,inst_31519,inst_31526,inst_31542,state_val_31588,c__22071__auto__,map__31461,map__31461__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31462,map__31462__$1,msg,files){
return (function (p__31544){
var map__31631 = p__31544;
var map__31631__$1 = ((cljs.core.seq_QMARK_.call(null,map__31631))?cljs.core.apply.call(null,cljs.core.hash_map,map__31631):map__31631);
var meta_data = cljs.core.get.call(null,map__31631__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31523,inst_31546,inst_31524,inst_31520,inst_31519,inst_31526,inst_31542,state_val_31588,c__22071__auto__,map__31461,map__31461__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31462,map__31462__$1,msg,files))
})();
var inst_31546__$1 = cljs.core.group_by.call(null,inst_31545,inst_31526);
var inst_31547 = cljs.core.seq_QMARK_.call(null,inst_31546__$1);
var state_31587__$1 = (function (){var statearr_31632 = state_31587;
(statearr_31632[(19)] = inst_31546__$1);

(statearr_31632[(32)] = inst_31542);

return statearr_31632;
})();
if(inst_31547){
var statearr_31633_31690 = state_31587__$1;
(statearr_31633_31690[(1)] = (26));

} else {
var statearr_31634_31691 = state_31587__$1;
(statearr_31634_31691[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (35))){
var inst_31553 = (state_31587[(30)]);
var inst_31576 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31553);
var inst_31577 = cljs.core.pr_str.call(null,inst_31576);
var inst_31578 = [cljs.core.str("not required: "),cljs.core.str(inst_31577)].join('');
var inst_31579 = figwheel.client.utils.log.call(null,inst_31578);
var state_31587__$1 = state_31587;
var statearr_31635_31692 = state_31587__$1;
(statearr_31635_31692[(2)] = inst_31579);

(statearr_31635_31692[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (19))){
var inst_31523 = (state_31587[(12)]);
var inst_31524 = (state_31587[(13)]);
var inst_31520 = (state_31587[(14)]);
var inst_31519 = (state_31587[(15)]);
var inst_31523__$1 = (state_31587[(2)]);
var inst_31524__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31523__$1);
var inst_31525 = (function (){var res = inst_31524__$1;
var res_SINGLEQUOTE_ = inst_31523__$1;
var files_SINGLEQUOTE_ = inst_31520;
var all_files = inst_31519;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31523,inst_31524,inst_31520,inst_31519,inst_31523__$1,inst_31524__$1,state_val_31588,c__22071__auto__,map__31461,map__31461__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31462,map__31462__$1,msg,files){
return (function (p1__31257_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31257_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31523,inst_31524,inst_31520,inst_31519,inst_31523__$1,inst_31524__$1,state_val_31588,c__22071__auto__,map__31461,map__31461__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31462,map__31462__$1,msg,files))
})();
var inst_31526 = cljs.core.filter.call(null,inst_31525,inst_31523__$1);
var inst_31527 = cljs.core.not_empty.call(null,inst_31524__$1);
var state_31587__$1 = (function (){var statearr_31636 = state_31587;
(statearr_31636[(12)] = inst_31523__$1);

(statearr_31636[(13)] = inst_31524__$1);

(statearr_31636[(16)] = inst_31526);

return statearr_31636;
})();
if(cljs.core.truth_(inst_31527)){
var statearr_31637_31693 = state_31587__$1;
(statearr_31637_31693[(1)] = (20));

} else {
var statearr_31638_31694 = state_31587__$1;
(statearr_31638_31694[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (11))){
var state_31587__$1 = state_31587;
var statearr_31639_31695 = state_31587__$1;
(statearr_31639_31695[(2)] = null);

(statearr_31639_31695[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (9))){
var inst_31506 = (state_31587[(2)]);
var state_31587__$1 = state_31587;
var statearr_31640_31696 = state_31587__$1;
(statearr_31640_31696[(2)] = inst_31506);

(statearr_31640_31696[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (5))){
var inst_31476 = (state_31587[(7)]);
var inst_31477 = (state_31587[(10)]);
var inst_31479 = (inst_31477 < inst_31476);
var inst_31480 = inst_31479;
var state_31587__$1 = state_31587;
if(cljs.core.truth_(inst_31480)){
var statearr_31641_31697 = state_31587__$1;
(statearr_31641_31697[(1)] = (7));

} else {
var statearr_31642_31698 = state_31587__$1;
(statearr_31642_31698[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (14))){
var inst_31487 = (state_31587[(27)]);
var inst_31496 = cljs.core.first.call(null,inst_31487);
var inst_31497 = figwheel.client.file_reloading.eval_body.call(null,inst_31496);
var inst_31498 = cljs.core.next.call(null,inst_31487);
var inst_31474 = inst_31498;
var inst_31475 = null;
var inst_31476 = (0);
var inst_31477 = (0);
var state_31587__$1 = (function (){var statearr_31643 = state_31587;
(statearr_31643[(7)] = inst_31476);

(statearr_31643[(8)] = inst_31474);

(statearr_31643[(9)] = inst_31475);

(statearr_31643[(10)] = inst_31477);

(statearr_31643[(33)] = inst_31497);

return statearr_31643;
})();
var statearr_31644_31699 = state_31587__$1;
(statearr_31644_31699[(2)] = null);

(statearr_31644_31699[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (26))){
var inst_31546 = (state_31587[(19)]);
var inst_31549 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31546);
var state_31587__$1 = state_31587;
var statearr_31645_31700 = state_31587__$1;
(statearr_31645_31700[(2)] = inst_31549);

(statearr_31645_31700[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (16))){
var inst_31513 = (state_31587[(23)]);
var inst_31515 = (function (){var all_files = inst_31513;
return ((function (all_files,inst_31513,state_val_31588,c__22071__auto__,map__31461,map__31461__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31462,map__31462__$1,msg,files){
return (function (p1__31256_SHARP_){
return cljs.core.update_in.call(null,p1__31256_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_31513,state_val_31588,c__22071__auto__,map__31461,map__31461__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31462,map__31462__$1,msg,files))
})();
var inst_31516 = cljs.core.map.call(null,inst_31515,inst_31513);
var state_31587__$1 = state_31587;
var statearr_31646_31701 = state_31587__$1;
(statearr_31646_31701[(2)] = inst_31516);

(statearr_31646_31701[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (30))){
var state_31587__$1 = state_31587;
var statearr_31647_31702 = state_31587__$1;
(statearr_31647_31702[(2)] = null);

(statearr_31647_31702[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (10))){
var inst_31487 = (state_31587[(27)]);
var inst_31489 = cljs.core.chunked_seq_QMARK_.call(null,inst_31487);
var state_31587__$1 = state_31587;
if(inst_31489){
var statearr_31648_31703 = state_31587__$1;
(statearr_31648_31703[(1)] = (13));

} else {
var statearr_31649_31704 = state_31587__$1;
(statearr_31649_31704[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (18))){
var inst_31520 = (state_31587[(14)]);
var inst_31519 = (state_31587[(15)]);
var inst_31519__$1 = (state_31587[(2)]);
var inst_31520__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_31519__$1);
var inst_31521 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31520__$1);
var state_31587__$1 = (function (){var statearr_31650 = state_31587;
(statearr_31650[(14)] = inst_31520__$1);

(statearr_31650[(15)] = inst_31519__$1);

return statearr_31650;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31587__$1,(19),inst_31521);
} else {
if((state_val_31588 === (37))){
var inst_31582 = (state_31587[(2)]);
var state_31587__$1 = state_31587;
var statearr_31651_31705 = state_31587__$1;
(statearr_31651_31705[(2)] = inst_31582);

(statearr_31651_31705[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (8))){
var inst_31474 = (state_31587[(8)]);
var inst_31487 = (state_31587[(27)]);
var inst_31487__$1 = cljs.core.seq.call(null,inst_31474);
var state_31587__$1 = (function (){var statearr_31652 = state_31587;
(statearr_31652[(27)] = inst_31487__$1);

return statearr_31652;
})();
if(inst_31487__$1){
var statearr_31653_31706 = state_31587__$1;
(statearr_31653_31706[(1)] = (10));

} else {
var statearr_31654_31707 = state_31587__$1;
(statearr_31654_31707[(1)] = (11));

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
});})(c__22071__auto__,map__31461,map__31461__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31462,map__31462__$1,msg,files))
;
return ((function (switch__22009__auto__,c__22071__auto__,map__31461,map__31461__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31462,map__31462__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22010__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22010__auto____0 = (function (){
var statearr_31658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31658[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22010__auto__);

(statearr_31658[(1)] = (1));

return statearr_31658;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22010__auto____1 = (function (state_31587){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_31587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e31659){if((e31659 instanceof Object)){
var ex__22013__auto__ = e31659;
var statearr_31660_31708 = state_31587;
(statearr_31660_31708[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31709 = state_31587;
state_31587 = G__31709;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22010__auto__ = function(state_31587){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22010__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22010__auto____1.call(this,state_31587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22010__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22010__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto__,map__31461,map__31461__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31462,map__31462__$1,msg,files))
})();
var state__22073__auto__ = (function (){var statearr_31661 = f__22072__auto__.call(null);
(statearr_31661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_31661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__,map__31461,map__31461__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31462,map__31462__$1,msg,files))
);

return c__22071__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31712,link){
var map__31714 = p__31712;
var map__31714__$1 = ((cljs.core.seq_QMARK_.call(null,map__31714))?cljs.core.apply.call(null,cljs.core.hash_map,map__31714):map__31714);
var file = cljs.core.get.call(null,map__31714__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__31714,map__31714__$1,file){
return (function (p1__31710_SHARP_,p2__31711_SHARP_){
if(cljs.core._EQ_.call(null,p1__31710_SHARP_,p2__31711_SHARP_)){
return p1__31710_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__31714,map__31714__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31718){
var map__31719 = p__31718;
var map__31719__$1 = ((cljs.core.seq_QMARK_.call(null,map__31719))?cljs.core.apply.call(null,cljs.core.hash_map,map__31719):map__31719);
var current_url_length = cljs.core.get.call(null,map__31719__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__31719__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31715_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31715_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__31721 = arguments.length;
switch (G__31721) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31723){
var map__31725 = p__31723;
var map__31725__$1 = ((cljs.core.seq_QMARK_.call(null,map__31725))?cljs.core.apply.call(null,cljs.core.hash_map,map__31725):map__31725);
var f_data = map__31725__$1;
var request_url = cljs.core.get.call(null,map__31725__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__31725__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18160__auto__ = request_url;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31726,files_msg){
var map__31748 = p__31726;
var map__31748__$1 = ((cljs.core.seq_QMARK_.call(null,map__31748))?cljs.core.apply.call(null,cljs.core.hash_map,map__31748):map__31748);
var opts = map__31748__$1;
var on_cssload = cljs.core.get.call(null,map__31748__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31749_31769 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31750_31770 = null;
var count__31751_31771 = (0);
var i__31752_31772 = (0);
while(true){
if((i__31752_31772 < count__31751_31771)){
var f_31773 = cljs.core._nth.call(null,chunk__31750_31770,i__31752_31772);
figwheel.client.file_reloading.reload_css_file.call(null,f_31773);

var G__31774 = seq__31749_31769;
var G__31775 = chunk__31750_31770;
var G__31776 = count__31751_31771;
var G__31777 = (i__31752_31772 + (1));
seq__31749_31769 = G__31774;
chunk__31750_31770 = G__31775;
count__31751_31771 = G__31776;
i__31752_31772 = G__31777;
continue;
} else {
var temp__4126__auto___31778 = cljs.core.seq.call(null,seq__31749_31769);
if(temp__4126__auto___31778){
var seq__31749_31779__$1 = temp__4126__auto___31778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31749_31779__$1)){
var c__18945__auto___31780 = cljs.core.chunk_first.call(null,seq__31749_31779__$1);
var G__31781 = cljs.core.chunk_rest.call(null,seq__31749_31779__$1);
var G__31782 = c__18945__auto___31780;
var G__31783 = cljs.core.count.call(null,c__18945__auto___31780);
var G__31784 = (0);
seq__31749_31769 = G__31781;
chunk__31750_31770 = G__31782;
count__31751_31771 = G__31783;
i__31752_31772 = G__31784;
continue;
} else {
var f_31785 = cljs.core.first.call(null,seq__31749_31779__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31785);

var G__31786 = cljs.core.next.call(null,seq__31749_31779__$1);
var G__31787 = null;
var G__31788 = (0);
var G__31789 = (0);
seq__31749_31769 = G__31786;
chunk__31750_31770 = G__31787;
count__31751_31771 = G__31788;
i__31752_31772 = G__31789;
continue;
}
} else {
}
}
break;
}

var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__,map__31748,map__31748__$1,opts,on_cssload){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto__,map__31748,map__31748__$1,opts,on_cssload){
return (function (state_31759){
var state_val_31760 = (state_31759[(1)]);
if((state_val_31760 === (2))){
var inst_31755 = (state_31759[(2)]);
var inst_31756 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_31757 = on_cssload.call(null,inst_31756);
var state_31759__$1 = (function (){var statearr_31761 = state_31759;
(statearr_31761[(7)] = inst_31755);

return statearr_31761;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31759__$1,inst_31757);
} else {
if((state_val_31760 === (1))){
var inst_31753 = cljs.core.async.timeout.call(null,(100));
var state_31759__$1 = state_31759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31759__$1,(2),inst_31753);
} else {
return null;
}
}
});})(c__22071__auto__,map__31748,map__31748__$1,opts,on_cssload))
;
return ((function (switch__22009__auto__,c__22071__auto__,map__31748,map__31748__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__22010__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__22010__auto____0 = (function (){
var statearr_31765 = [null,null,null,null,null,null,null,null];
(statearr_31765[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__22010__auto__);

(statearr_31765[(1)] = (1));

return statearr_31765;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__22010__auto____1 = (function (state_31759){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_31759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e31766){if((e31766 instanceof Object)){
var ex__22013__auto__ = e31766;
var statearr_31767_31790 = state_31759;
(statearr_31767_31790[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31791 = state_31759;
state_31759 = G__31791;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__22010__auto__ = function(state_31759){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__22010__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__22010__auto____1.call(this,state_31759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__22010__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__22010__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto__,map__31748,map__31748__$1,opts,on_cssload))
})();
var state__22073__auto__ = (function (){var statearr_31768 = f__22072__auto__.call(null);
(statearr_31768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_31768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__,map__31748,map__31748__$1,opts,on_cssload))
);

return c__22071__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1443194346058