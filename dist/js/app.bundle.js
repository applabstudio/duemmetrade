/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "f8d4339bf3763c40a220";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"vendors~swipers":"vendors~swipers","swipers":"swipers"}[chunkId]||chunkId) + ".bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/ansi-html/index.js":
/*!**************************************************************************************!*\
  !*** /Users/silvioviscuso/Desktop/WEBIT/duemmetrade/node_modules/ansi-html/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = ansiHTML;

// Reference to https://github.com/sindresorhus/ansi-regex
var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/;

var _defColors = {
  reset: ['fff', '000'], // [FOREGROUD_COLOR, BACKGROUND_COLOR]
  black: '000',
  red: 'ff0000',
  green: '209805',
  yellow: 'e8bf03',
  blue: '0000ff',
  magenta: 'ff00ff',
  cyan: '00ffee',
  lightgrey: 'f0f0f0',
  darkgrey: '888'
};
var _styles = {
  30: 'black',
  31: 'red',
  32: 'green',
  33: 'yellow',
  34: 'blue',
  35: 'magenta',
  36: 'cyan',
  37: 'lightgrey'
};
var _openTags = {
  '1': 'font-weight:bold', // bold
  '2': 'opacity:0.5', // dim
  '3': '<i>', // italic
  '4': '<u>', // underscore
  '8': 'display:none', // hidden
  '9': '<del>' // delete
};
var _closeTags = {
  '23': '</i>', // reset italic
  '24': '</u>', // reset underscore
  '29': '</del>' // reset delete
};[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
  _closeTags[n] = '</span>';
});

/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */
function ansiHTML(text) {
  // Returns the text if the string has no ANSI escape code.
  if (!_regANSI.test(text)) {
    return text;
  }

  // Cache opened sequence.
  var ansiCodes = [];
  // Replace with markup.
  var ret = text.replace(/\033\[(\d+)*m/g, function (match, seq) {
    var ot = _openTags[seq];
    if (ot) {
      // If current sequence has been opened, close it.
      if (!!~ansiCodes.indexOf(seq)) {
        // eslint-disable-line no-extra-boolean-cast
        ansiCodes.pop();
        return '</span>';
      }
      // Open tag.
      ansiCodes.push(seq);
      return ot[0] === '<' ? ot : '<span style="' + ot + ';">';
    }

    var ct = _closeTags[seq];
    if (ct) {
      // Pop sequence
      ansiCodes.pop();
      return ct;
    }
    return '';
  });

  // Make sure tags are closed.
  var l = ansiCodes.length;l > 0 && (ret += Array(l + 1).join('</span>'));

  return ret;
}

/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */
ansiHTML.setColors = function (colors) {
  if ((typeof colors === 'undefined' ? 'undefined' : _typeof(colors)) !== 'object') {
    throw new Error('`colors` parameter must be an Object.');
  }

  var _finalColors = {};
  for (var key in _defColors) {
    var hex = colors.hasOwnProperty(key) ? colors[key] : null;
    if (!hex) {
      _finalColors[key] = _defColors[key];
      continue;
    }
    if ('reset' === key) {
      if (typeof hex === 'string') {
        hex = [hex];
      }
      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
        return typeof h !== 'string';
      })) {
        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000');
      }
      var defHexColor = _defColors[key];
      if (!hex[0]) {
        hex[0] = defHexColor[0];
      }
      if (hex.length === 1 || !hex[1]) {
        hex = [hex[0]];
        hex.push(defHexColor[1]);
      }

      hex = hex.slice(0, 2);
    } else if (typeof hex !== 'string') {
      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000');
    }
    _finalColors[key] = hex;
  }
  _setTags(_finalColors);
};

/**
 * Reset colors.
 */
ansiHTML.reset = function () {
  _setTags(_defColors);
};

/**
 * Expose tags, including open and close.
 * @type {Object}
 */
ansiHTML.tags = {};

if (Object.defineProperty) {
  Object.defineProperty(ansiHTML.tags, 'open', {
    get: function get() {
      return _openTags;
    }
  });
  Object.defineProperty(ansiHTML.tags, 'close', {
    get: function get() {
      return _closeTags;
    }
  });
} else {
  ansiHTML.tags.open = _openTags;
  ansiHTML.tags.close = _closeTags;
}

function _setTags(colors) {
  // reset all
  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1];
  // inverse
  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0];
  // dark grey
  _openTags['90'] = 'color:#' + colors.darkgrey;

  for (var code in _styles) {
    var color = _styles[code];
    var oriColor = colors[color] || '000';
    _openTags[code] = 'color:#' + oriColor;
    code = parseInt(code);
    _openTags[(code + 10).toString()] = 'background:#' + oriColor;
  }
}

ansiHTML.reset();

/***/ }),

/***/ "../../node_modules/ansi-regex/index.js":
/*!***************************************************************************************!*\
  !*** /Users/silvioviscuso/Desktop/WEBIT/duemmetrade/node_modules/ansi-regex/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	return (/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g
	);
};

/***/ }),

/***/ "../../node_modules/html-entities/index.js":
/*!******************************************************************************************!*\
  !*** /Users/silvioviscuso/Desktop/WEBIT/duemmetrade/node_modules/html-entities/index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  XmlEntities: __webpack_require__(/*! ./lib/xml-entities.js */ "../../node_modules/html-entities/lib/xml-entities.js"),
  Html4Entities: __webpack_require__(/*! ./lib/html4-entities.js */ "../../node_modules/html-entities/lib/html4-entities.js"),
  Html5Entities: __webpack_require__(/*! ./lib/html5-entities.js */ "../../node_modules/html-entities/lib/html5-entities.js"),
  AllHtmlEntities: __webpack_require__(/*! ./lib/html5-entities.js */ "../../node_modules/html-entities/lib/html5-entities.js")
};

/***/ }),

/***/ "../../node_modules/html-entities/lib/html4-entities.js":
/*!*******************************************************************************************************!*\
  !*** /Users/silvioviscuso/Desktop/WEBIT/duemmetrade/node_modules/html-entities/lib/html4-entities.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var HTML_ALPHA = ['apos', 'nbsp', 'iexcl', 'cent', 'pound', 'curren', 'yen', 'brvbar', 'sect', 'uml', 'copy', 'ordf', 'laquo', 'not', 'shy', 'reg', 'macr', 'deg', 'plusmn', 'sup2', 'sup3', 'acute', 'micro', 'para', 'middot', 'cedil', 'sup1', 'ordm', 'raquo', 'frac14', 'frac12', 'frac34', 'iquest', 'Agrave', 'Aacute', 'Acirc', 'Atilde', 'Auml', 'Aring', 'Aelig', 'Ccedil', 'Egrave', 'Eacute', 'Ecirc', 'Euml', 'Igrave', 'Iacute', 'Icirc', 'Iuml', 'ETH', 'Ntilde', 'Ograve', 'Oacute', 'Ocirc', 'Otilde', 'Ouml', 'times', 'Oslash', 'Ugrave', 'Uacute', 'Ucirc', 'Uuml', 'Yacute', 'THORN', 'szlig', 'agrave', 'aacute', 'acirc', 'atilde', 'auml', 'aring', 'aelig', 'ccedil', 'egrave', 'eacute', 'ecirc', 'euml', 'igrave', 'iacute', 'icirc', 'iuml', 'eth', 'ntilde', 'ograve', 'oacute', 'ocirc', 'otilde', 'ouml', 'divide', 'oslash', 'ugrave', 'uacute', 'ucirc', 'uuml', 'yacute', 'thorn', 'yuml', 'quot', 'amp', 'lt', 'gt', 'OElig', 'oelig', 'Scaron', 'scaron', 'Yuml', 'circ', 'tilde', 'ensp', 'emsp', 'thinsp', 'zwnj', 'zwj', 'lrm', 'rlm', 'ndash', 'mdash', 'lsquo', 'rsquo', 'sbquo', 'ldquo', 'rdquo', 'bdquo', 'dagger', 'Dagger', 'permil', 'lsaquo', 'rsaquo', 'euro', 'fnof', 'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa', 'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma', 'Tau', 'Upsilon', 'Phi', 'Chi', 'Psi', 'Omega', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigmaf', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega', 'thetasym', 'upsih', 'piv', 'bull', 'hellip', 'prime', 'Prime', 'oline', 'frasl', 'weierp', 'image', 'real', 'trade', 'alefsym', 'larr', 'uarr', 'rarr', 'darr', 'harr', 'crarr', 'lArr', 'uArr', 'rArr', 'dArr', 'hArr', 'forall', 'part', 'exist', 'empty', 'nabla', 'isin', 'notin', 'ni', 'prod', 'sum', 'minus', 'lowast', 'radic', 'prop', 'infin', 'ang', 'and', 'or', 'cap', 'cup', 'int', 'there4', 'sim', 'cong', 'asymp', 'ne', 'equiv', 'le', 'ge', 'sub', 'sup', 'nsub', 'sube', 'supe', 'oplus', 'otimes', 'perp', 'sdot', 'lceil', 'rceil', 'lfloor', 'rfloor', 'lang', 'rang', 'loz', 'spades', 'clubs', 'hearts', 'diams'];
var HTML_CODES = [39, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 34, 38, 60, 62, 338, 339, 352, 353, 376, 710, 732, 8194, 8195, 8201, 8204, 8205, 8206, 8207, 8211, 8212, 8216, 8217, 8218, 8220, 8221, 8222, 8224, 8225, 8240, 8249, 8250, 8364, 402, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 931, 932, 933, 934, 935, 936, 937, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 977, 978, 982, 8226, 8230, 8242, 8243, 8254, 8260, 8472, 8465, 8476, 8482, 8501, 8592, 8593, 8594, 8595, 8596, 8629, 8656, 8657, 8658, 8659, 8660, 8704, 8706, 8707, 8709, 8711, 8712, 8713, 8715, 8719, 8721, 8722, 8727, 8730, 8733, 8734, 8736, 8743, 8744, 8745, 8746, 8747, 8756, 8764, 8773, 8776, 8800, 8801, 8804, 8805, 8834, 8835, 8836, 8838, 8839, 8853, 8855, 8869, 8901, 8968, 8969, 8970, 8971, 9001, 9002, 9674, 9824, 9827, 9829, 9830];

var alphaIndex = {};
var numIndex = {};

var i = 0;
var length = HTML_ALPHA.length;
while (i < length) {
    var a = HTML_ALPHA[i];
    var c = HTML_CODES[i];
    alphaIndex[a] = String.fromCharCode(c);
    numIndex[c] = a;
    i++;
}

/**
 * @constructor
 */
function Html4Entities() {}

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.prototype.decode = function (str) {
    if (!str || !str.length) {
        return '';
    }
    return str.replace(/&(#?[\w\d]+);?/g, function (s, entity) {
        var chr;
        if (entity.charAt(0) === "#") {
            var code = entity.charAt(1).toLowerCase() === 'x' ? parseInt(entity.substr(2), 16) : parseInt(entity.substr(1));

            if (!(isNaN(code) || code < -32768 || code > 65535)) {
                chr = String.fromCharCode(code);
            }
        } else {
            chr = alphaIndex[entity];
        }
        return chr || s;
    });
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.decode = function (str) {
    return new Html4Entities().decode(str);
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.prototype.encode = function (str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var alpha = numIndex[str.charCodeAt(i)];
        result += alpha ? "&" + alpha + ";" : str.charAt(i);
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.encode = function (str) {
    return new Html4Entities().encode(str);
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.prototype.encodeNonUTF = function (str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var cc = str.charCodeAt(i);
        var alpha = numIndex[cc];
        if (alpha) {
            result += "&" + alpha + ";";
        } else if (cc < 32 || cc > 126) {
            result += "&#" + cc + ";";
        } else {
            result += str.charAt(i);
        }
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.encodeNonUTF = function (str) {
    return new Html4Entities().encodeNonUTF(str);
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.prototype.encodeNonASCII = function (str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var c = str.charCodeAt(i);
        if (c <= 255) {
            result += str[i++];
            continue;
        }
        result += '&#' + c + ';';
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.encodeNonASCII = function (str) {
    return new Html4Entities().encodeNonASCII(str);
};

module.exports = Html4Entities;

/***/ }),

/***/ "../../node_modules/html-entities/lib/html5-entities.js":
/*!*******************************************************************************************************!*\
  !*** /Users/silvioviscuso/Desktop/WEBIT/duemmetrade/node_modules/html-entities/lib/html5-entities.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ENTITIES = [['Aacute', [193]], ['aacute', [225]], ['Abreve', [258]], ['abreve', [259]], ['ac', [8766]], ['acd', [8767]], ['acE', [8766, 819]], ['Acirc', [194]], ['acirc', [226]], ['acute', [180]], ['Acy', [1040]], ['acy', [1072]], ['AElig', [198]], ['aelig', [230]], ['af', [8289]], ['Afr', [120068]], ['afr', [120094]], ['Agrave', [192]], ['agrave', [224]], ['alefsym', [8501]], ['aleph', [8501]], ['Alpha', [913]], ['alpha', [945]], ['Amacr', [256]], ['amacr', [257]], ['amalg', [10815]], ['amp', [38]], ['AMP', [38]], ['andand', [10837]], ['And', [10835]], ['and', [8743]], ['andd', [10844]], ['andslope', [10840]], ['andv', [10842]], ['ang', [8736]], ['ange', [10660]], ['angle', [8736]], ['angmsdaa', [10664]], ['angmsdab', [10665]], ['angmsdac', [10666]], ['angmsdad', [10667]], ['angmsdae', [10668]], ['angmsdaf', [10669]], ['angmsdag', [10670]], ['angmsdah', [10671]], ['angmsd', [8737]], ['angrt', [8735]], ['angrtvb', [8894]], ['angrtvbd', [10653]], ['angsph', [8738]], ['angst', [197]], ['angzarr', [9084]], ['Aogon', [260]], ['aogon', [261]], ['Aopf', [120120]], ['aopf', [120146]], ['apacir', [10863]], ['ap', [8776]], ['apE', [10864]], ['ape', [8778]], ['apid', [8779]], ['apos', [39]], ['ApplyFunction', [8289]], ['approx', [8776]], ['approxeq', [8778]], ['Aring', [197]], ['aring', [229]], ['Ascr', [119964]], ['ascr', [119990]], ['Assign', [8788]], ['ast', [42]], ['asymp', [8776]], ['asympeq', [8781]], ['Atilde', [195]], ['atilde', [227]], ['Auml', [196]], ['auml', [228]], ['awconint', [8755]], ['awint', [10769]], ['backcong', [8780]], ['backepsilon', [1014]], ['backprime', [8245]], ['backsim', [8765]], ['backsimeq', [8909]], ['Backslash', [8726]], ['Barv', [10983]], ['barvee', [8893]], ['barwed', [8965]], ['Barwed', [8966]], ['barwedge', [8965]], ['bbrk', [9141]], ['bbrktbrk', [9142]], ['bcong', [8780]], ['Bcy', [1041]], ['bcy', [1073]], ['bdquo', [8222]], ['becaus', [8757]], ['because', [8757]], ['Because', [8757]], ['bemptyv', [10672]], ['bepsi', [1014]], ['bernou', [8492]], ['Bernoullis', [8492]], ['Beta', [914]], ['beta', [946]], ['beth', [8502]], ['between', [8812]], ['Bfr', [120069]], ['bfr', [120095]], ['bigcap', [8898]], ['bigcirc', [9711]], ['bigcup', [8899]], ['bigodot', [10752]], ['bigoplus', [10753]], ['bigotimes', [10754]], ['bigsqcup', [10758]], ['bigstar', [9733]], ['bigtriangledown', [9661]], ['bigtriangleup', [9651]], ['biguplus', [10756]], ['bigvee', [8897]], ['bigwedge', [8896]], ['bkarow', [10509]], ['blacklozenge', [10731]], ['blacksquare', [9642]], ['blacktriangle', [9652]], ['blacktriangledown', [9662]], ['blacktriangleleft', [9666]], ['blacktriangleright', [9656]], ['blank', [9251]], ['blk12', [9618]], ['blk14', [9617]], ['blk34', [9619]], ['block', [9608]], ['bne', [61, 8421]], ['bnequiv', [8801, 8421]], ['bNot', [10989]], ['bnot', [8976]], ['Bopf', [120121]], ['bopf', [120147]], ['bot', [8869]], ['bottom', [8869]], ['bowtie', [8904]], ['boxbox', [10697]], ['boxdl', [9488]], ['boxdL', [9557]], ['boxDl', [9558]], ['boxDL', [9559]], ['boxdr', [9484]], ['boxdR', [9554]], ['boxDr', [9555]], ['boxDR', [9556]], ['boxh', [9472]], ['boxH', [9552]], ['boxhd', [9516]], ['boxHd', [9572]], ['boxhD', [9573]], ['boxHD', [9574]], ['boxhu', [9524]], ['boxHu', [9575]], ['boxhU', [9576]], ['boxHU', [9577]], ['boxminus', [8863]], ['boxplus', [8862]], ['boxtimes', [8864]], ['boxul', [9496]], ['boxuL', [9563]], ['boxUl', [9564]], ['boxUL', [9565]], ['boxur', [9492]], ['boxuR', [9560]], ['boxUr', [9561]], ['boxUR', [9562]], ['boxv', [9474]], ['boxV', [9553]], ['boxvh', [9532]], ['boxvH', [9578]], ['boxVh', [9579]], ['boxVH', [9580]], ['boxvl', [9508]], ['boxvL', [9569]], ['boxVl', [9570]], ['boxVL', [9571]], ['boxvr', [9500]], ['boxvR', [9566]], ['boxVr', [9567]], ['boxVR', [9568]], ['bprime', [8245]], ['breve', [728]], ['Breve', [728]], ['brvbar', [166]], ['bscr', [119991]], ['Bscr', [8492]], ['bsemi', [8271]], ['bsim', [8765]], ['bsime', [8909]], ['bsolb', [10693]], ['bsol', [92]], ['bsolhsub', [10184]], ['bull', [8226]], ['bullet', [8226]], ['bump', [8782]], ['bumpE', [10926]], ['bumpe', [8783]], ['Bumpeq', [8782]], ['bumpeq', [8783]], ['Cacute', [262]], ['cacute', [263]], ['capand', [10820]], ['capbrcup', [10825]], ['capcap', [10827]], ['cap', [8745]], ['Cap', [8914]], ['capcup', [10823]], ['capdot', [10816]], ['CapitalDifferentialD', [8517]], ['caps', [8745, 65024]], ['caret', [8257]], ['caron', [711]], ['Cayleys', [8493]], ['ccaps', [10829]], ['Ccaron', [268]], ['ccaron', [269]], ['Ccedil', [199]], ['ccedil', [231]], ['Ccirc', [264]], ['ccirc', [265]], ['Cconint', [8752]], ['ccups', [10828]], ['ccupssm', [10832]], ['Cdot', [266]], ['cdot', [267]], ['cedil', [184]], ['Cedilla', [184]], ['cemptyv', [10674]], ['cent', [162]], ['centerdot', [183]], ['CenterDot', [183]], ['cfr', [120096]], ['Cfr', [8493]], ['CHcy', [1063]], ['chcy', [1095]], ['check', [10003]], ['checkmark', [10003]], ['Chi', [935]], ['chi', [967]], ['circ', [710]], ['circeq', [8791]], ['circlearrowleft', [8634]], ['circlearrowright', [8635]], ['circledast', [8859]], ['circledcirc', [8858]], ['circleddash', [8861]], ['CircleDot', [8857]], ['circledR', [174]], ['circledS', [9416]], ['CircleMinus', [8854]], ['CirclePlus', [8853]], ['CircleTimes', [8855]], ['cir', [9675]], ['cirE', [10691]], ['cire', [8791]], ['cirfnint', [10768]], ['cirmid', [10991]], ['cirscir', [10690]], ['ClockwiseContourIntegral', [8754]], ['clubs', [9827]], ['clubsuit', [9827]], ['colon', [58]], ['Colon', [8759]], ['Colone', [10868]], ['colone', [8788]], ['coloneq', [8788]], ['comma', [44]], ['commat', [64]], ['comp', [8705]], ['compfn', [8728]], ['complement', [8705]], ['complexes', [8450]], ['cong', [8773]], ['congdot', [10861]], ['Congruent', [8801]], ['conint', [8750]], ['Conint', [8751]], ['ContourIntegral', [8750]], ['copf', [120148]], ['Copf', [8450]], ['coprod', [8720]], ['Coproduct', [8720]], ['copy', [169]], ['COPY', [169]], ['copysr', [8471]], ['CounterClockwiseContourIntegral', [8755]], ['crarr', [8629]], ['cross', [10007]], ['Cross', [10799]], ['Cscr', [119966]], ['cscr', [119992]], ['csub', [10959]], ['csube', [10961]], ['csup', [10960]], ['csupe', [10962]], ['ctdot', [8943]], ['cudarrl', [10552]], ['cudarrr', [10549]], ['cuepr', [8926]], ['cuesc', [8927]], ['cularr', [8630]], ['cularrp', [10557]], ['cupbrcap', [10824]], ['cupcap', [10822]], ['CupCap', [8781]], ['cup', [8746]], ['Cup', [8915]], ['cupcup', [10826]], ['cupdot', [8845]], ['cupor', [10821]], ['cups', [8746, 65024]], ['curarr', [8631]], ['curarrm', [10556]], ['curlyeqprec', [8926]], ['curlyeqsucc', [8927]], ['curlyvee', [8910]], ['curlywedge', [8911]], ['curren', [164]], ['curvearrowleft', [8630]], ['curvearrowright', [8631]], ['cuvee', [8910]], ['cuwed', [8911]], ['cwconint', [8754]], ['cwint', [8753]], ['cylcty', [9005]], ['dagger', [8224]], ['Dagger', [8225]], ['daleth', [8504]], ['darr', [8595]], ['Darr', [8609]], ['dArr', [8659]], ['dash', [8208]], ['Dashv', [10980]], ['dashv', [8867]], ['dbkarow', [10511]], ['dblac', [733]], ['Dcaron', [270]], ['dcaron', [271]], ['Dcy', [1044]], ['dcy', [1076]], ['ddagger', [8225]], ['ddarr', [8650]], ['DD', [8517]], ['dd', [8518]], ['DDotrahd', [10513]], ['ddotseq', [10871]], ['deg', [176]], ['Del', [8711]], ['Delta', [916]], ['delta', [948]], ['demptyv', [10673]], ['dfisht', [10623]], ['Dfr', [120071]], ['dfr', [120097]], ['dHar', [10597]], ['dharl', [8643]], ['dharr', [8642]], ['DiacriticalAcute', [180]], ['DiacriticalDot', [729]], ['DiacriticalDoubleAcute', [733]], ['DiacriticalGrave', [96]], ['DiacriticalTilde', [732]], ['diam', [8900]], ['diamond', [8900]], ['Diamond', [8900]], ['diamondsuit', [9830]], ['diams', [9830]], ['die', [168]], ['DifferentialD', [8518]], ['digamma', [989]], ['disin', [8946]], ['div', [247]], ['divide', [247]], ['divideontimes', [8903]], ['divonx', [8903]], ['DJcy', [1026]], ['djcy', [1106]], ['dlcorn', [8990]], ['dlcrop', [8973]], ['dollar', [36]], ['Dopf', [120123]], ['dopf', [120149]], ['Dot', [168]], ['dot', [729]], ['DotDot', [8412]], ['doteq', [8784]], ['doteqdot', [8785]], ['DotEqual', [8784]], ['dotminus', [8760]], ['dotplus', [8724]], ['dotsquare', [8865]], ['doublebarwedge', [8966]], ['DoubleContourIntegral', [8751]], ['DoubleDot', [168]], ['DoubleDownArrow', [8659]], ['DoubleLeftArrow', [8656]], ['DoubleLeftRightArrow', [8660]], ['DoubleLeftTee', [10980]], ['DoubleLongLeftArrow', [10232]], ['DoubleLongLeftRightArrow', [10234]], ['DoubleLongRightArrow', [10233]], ['DoubleRightArrow', [8658]], ['DoubleRightTee', [8872]], ['DoubleUpArrow', [8657]], ['DoubleUpDownArrow', [8661]], ['DoubleVerticalBar', [8741]], ['DownArrowBar', [10515]], ['downarrow', [8595]], ['DownArrow', [8595]], ['Downarrow', [8659]], ['DownArrowUpArrow', [8693]], ['DownBreve', [785]], ['downdownarrows', [8650]], ['downharpoonleft', [8643]], ['downharpoonright', [8642]], ['DownLeftRightVector', [10576]], ['DownLeftTeeVector', [10590]], ['DownLeftVectorBar', [10582]], ['DownLeftVector', [8637]], ['DownRightTeeVector', [10591]], ['DownRightVectorBar', [10583]], ['DownRightVector', [8641]], ['DownTeeArrow', [8615]], ['DownTee', [8868]], ['drbkarow', [10512]], ['drcorn', [8991]], ['drcrop', [8972]], ['Dscr', [119967]], ['dscr', [119993]], ['DScy', [1029]], ['dscy', [1109]], ['dsol', [10742]], ['Dstrok', [272]], ['dstrok', [273]], ['dtdot', [8945]], ['dtri', [9663]], ['dtrif', [9662]], ['duarr', [8693]], ['duhar', [10607]], ['dwangle', [10662]], ['DZcy', [1039]], ['dzcy', [1119]], ['dzigrarr', [10239]], ['Eacute', [201]], ['eacute', [233]], ['easter', [10862]], ['Ecaron', [282]], ['ecaron', [283]], ['Ecirc', [202]], ['ecirc', [234]], ['ecir', [8790]], ['ecolon', [8789]], ['Ecy', [1069]], ['ecy', [1101]], ['eDDot', [10871]], ['Edot', [278]], ['edot', [279]], ['eDot', [8785]], ['ee', [8519]], ['efDot', [8786]], ['Efr', [120072]], ['efr', [120098]], ['eg', [10906]], ['Egrave', [200]], ['egrave', [232]], ['egs', [10902]], ['egsdot', [10904]], ['el', [10905]], ['Element', [8712]], ['elinters', [9191]], ['ell', [8467]], ['els', [10901]], ['elsdot', [10903]], ['Emacr', [274]], ['emacr', [275]], ['empty', [8709]], ['emptyset', [8709]], ['EmptySmallSquare', [9723]], ['emptyv', [8709]], ['EmptyVerySmallSquare', [9643]], ['emsp13', [8196]], ['emsp14', [8197]], ['emsp', [8195]], ['ENG', [330]], ['eng', [331]], ['ensp', [8194]], ['Eogon', [280]], ['eogon', [281]], ['Eopf', [120124]], ['eopf', [120150]], ['epar', [8917]], ['eparsl', [10723]], ['eplus', [10865]], ['epsi', [949]], ['Epsilon', [917]], ['epsilon', [949]], ['epsiv', [1013]], ['eqcirc', [8790]], ['eqcolon', [8789]], ['eqsim', [8770]], ['eqslantgtr', [10902]], ['eqslantless', [10901]], ['Equal', [10869]], ['equals', [61]], ['EqualTilde', [8770]], ['equest', [8799]], ['Equilibrium', [8652]], ['equiv', [8801]], ['equivDD', [10872]], ['eqvparsl', [10725]], ['erarr', [10609]], ['erDot', [8787]], ['escr', [8495]], ['Escr', [8496]], ['esdot', [8784]], ['Esim', [10867]], ['esim', [8770]], ['Eta', [919]], ['eta', [951]], ['ETH', [208]], ['eth', [240]], ['Euml', [203]], ['euml', [235]], ['euro', [8364]], ['excl', [33]], ['exist', [8707]], ['Exists', [8707]], ['expectation', [8496]], ['exponentiale', [8519]], ['ExponentialE', [8519]], ['fallingdotseq', [8786]], ['Fcy', [1060]], ['fcy', [1092]], ['female', [9792]], ['ffilig', [64259]], ['fflig', [64256]], ['ffllig', [64260]], ['Ffr', [120073]], ['ffr', [120099]], ['filig', [64257]], ['FilledSmallSquare', [9724]], ['FilledVerySmallSquare', [9642]], ['fjlig', [102, 106]], ['flat', [9837]], ['fllig', [64258]], ['fltns', [9649]], ['fnof', [402]], ['Fopf', [120125]], ['fopf', [120151]], ['forall', [8704]], ['ForAll', [8704]], ['fork', [8916]], ['forkv', [10969]], ['Fouriertrf', [8497]], ['fpartint', [10765]], ['frac12', [189]], ['frac13', [8531]], ['frac14', [188]], ['frac15', [8533]], ['frac16', [8537]], ['frac18', [8539]], ['frac23', [8532]], ['frac25', [8534]], ['frac34', [190]], ['frac35', [8535]], ['frac38', [8540]], ['frac45', [8536]], ['frac56', [8538]], ['frac58', [8541]], ['frac78', [8542]], ['frasl', [8260]], ['frown', [8994]], ['fscr', [119995]], ['Fscr', [8497]], ['gacute', [501]], ['Gamma', [915]], ['gamma', [947]], ['Gammad', [988]], ['gammad', [989]], ['gap', [10886]], ['Gbreve', [286]], ['gbreve', [287]], ['Gcedil', [290]], ['Gcirc', [284]], ['gcirc', [285]], ['Gcy', [1043]], ['gcy', [1075]], ['Gdot', [288]], ['gdot', [289]], ['ge', [8805]], ['gE', [8807]], ['gEl', [10892]], ['gel', [8923]], ['geq', [8805]], ['geqq', [8807]], ['geqslant', [10878]], ['gescc', [10921]], ['ges', [10878]], ['gesdot', [10880]], ['gesdoto', [10882]], ['gesdotol', [10884]], ['gesl', [8923, 65024]], ['gesles', [10900]], ['Gfr', [120074]], ['gfr', [120100]], ['gg', [8811]], ['Gg', [8921]], ['ggg', [8921]], ['gimel', [8503]], ['GJcy', [1027]], ['gjcy', [1107]], ['gla', [10917]], ['gl', [8823]], ['glE', [10898]], ['glj', [10916]], ['gnap', [10890]], ['gnapprox', [10890]], ['gne', [10888]], ['gnE', [8809]], ['gneq', [10888]], ['gneqq', [8809]], ['gnsim', [8935]], ['Gopf', [120126]], ['gopf', [120152]], ['grave', [96]], ['GreaterEqual', [8805]], ['GreaterEqualLess', [8923]], ['GreaterFullEqual', [8807]], ['GreaterGreater', [10914]], ['GreaterLess', [8823]], ['GreaterSlantEqual', [10878]], ['GreaterTilde', [8819]], ['Gscr', [119970]], ['gscr', [8458]], ['gsim', [8819]], ['gsime', [10894]], ['gsiml', [10896]], ['gtcc', [10919]], ['gtcir', [10874]], ['gt', [62]], ['GT', [62]], ['Gt', [8811]], ['gtdot', [8919]], ['gtlPar', [10645]], ['gtquest', [10876]], ['gtrapprox', [10886]], ['gtrarr', [10616]], ['gtrdot', [8919]], ['gtreqless', [8923]], ['gtreqqless', [10892]], ['gtrless', [8823]], ['gtrsim', [8819]], ['gvertneqq', [8809, 65024]], ['gvnE', [8809, 65024]], ['Hacek', [711]], ['hairsp', [8202]], ['half', [189]], ['hamilt', [8459]], ['HARDcy', [1066]], ['hardcy', [1098]], ['harrcir', [10568]], ['harr', [8596]], ['hArr', [8660]], ['harrw', [8621]], ['Hat', [94]], ['hbar', [8463]], ['Hcirc', [292]], ['hcirc', [293]], ['hearts', [9829]], ['heartsuit', [9829]], ['hellip', [8230]], ['hercon', [8889]], ['hfr', [120101]], ['Hfr', [8460]], ['HilbertSpace', [8459]], ['hksearow', [10533]], ['hkswarow', [10534]], ['hoarr', [8703]], ['homtht', [8763]], ['hookleftarrow', [8617]], ['hookrightarrow', [8618]], ['hopf', [120153]], ['Hopf', [8461]], ['horbar', [8213]], ['HorizontalLine', [9472]], ['hscr', [119997]], ['Hscr', [8459]], ['hslash', [8463]], ['Hstrok', [294]], ['hstrok', [295]], ['HumpDownHump', [8782]], ['HumpEqual', [8783]], ['hybull', [8259]], ['hyphen', [8208]], ['Iacute', [205]], ['iacute', [237]], ['ic', [8291]], ['Icirc', [206]], ['icirc', [238]], ['Icy', [1048]], ['icy', [1080]], ['Idot', [304]], ['IEcy', [1045]], ['iecy', [1077]], ['iexcl', [161]], ['iff', [8660]], ['ifr', [120102]], ['Ifr', [8465]], ['Igrave', [204]], ['igrave', [236]], ['ii', [8520]], ['iiiint', [10764]], ['iiint', [8749]], ['iinfin', [10716]], ['iiota', [8489]], ['IJlig', [306]], ['ijlig', [307]], ['Imacr', [298]], ['imacr', [299]], ['image', [8465]], ['ImaginaryI', [8520]], ['imagline', [8464]], ['imagpart', [8465]], ['imath', [305]], ['Im', [8465]], ['imof', [8887]], ['imped', [437]], ['Implies', [8658]], ['incare', [8453]], ['in', [8712]], ['infin', [8734]], ['infintie', [10717]], ['inodot', [305]], ['intcal', [8890]], ['int', [8747]], ['Int', [8748]], ['integers', [8484]], ['Integral', [8747]], ['intercal', [8890]], ['Intersection', [8898]], ['intlarhk', [10775]], ['intprod', [10812]], ['InvisibleComma', [8291]], ['InvisibleTimes', [8290]], ['IOcy', [1025]], ['iocy', [1105]], ['Iogon', [302]], ['iogon', [303]], ['Iopf', [120128]], ['iopf', [120154]], ['Iota', [921]], ['iota', [953]], ['iprod', [10812]], ['iquest', [191]], ['iscr', [119998]], ['Iscr', [8464]], ['isin', [8712]], ['isindot', [8949]], ['isinE', [8953]], ['isins', [8948]], ['isinsv', [8947]], ['isinv', [8712]], ['it', [8290]], ['Itilde', [296]], ['itilde', [297]], ['Iukcy', [1030]], ['iukcy', [1110]], ['Iuml', [207]], ['iuml', [239]], ['Jcirc', [308]], ['jcirc', [309]], ['Jcy', [1049]], ['jcy', [1081]], ['Jfr', [120077]], ['jfr', [120103]], ['jmath', [567]], ['Jopf', [120129]], ['jopf', [120155]], ['Jscr', [119973]], ['jscr', [119999]], ['Jsercy', [1032]], ['jsercy', [1112]], ['Jukcy', [1028]], ['jukcy', [1108]], ['Kappa', [922]], ['kappa', [954]], ['kappav', [1008]], ['Kcedil', [310]], ['kcedil', [311]], ['Kcy', [1050]], ['kcy', [1082]], ['Kfr', [120078]], ['kfr', [120104]], ['kgreen', [312]], ['KHcy', [1061]], ['khcy', [1093]], ['KJcy', [1036]], ['kjcy', [1116]], ['Kopf', [120130]], ['kopf', [120156]], ['Kscr', [119974]], ['kscr', [120000]], ['lAarr', [8666]], ['Lacute', [313]], ['lacute', [314]], ['laemptyv', [10676]], ['lagran', [8466]], ['Lambda', [923]], ['lambda', [955]], ['lang', [10216]], ['Lang', [10218]], ['langd', [10641]], ['langle', [10216]], ['lap', [10885]], ['Laplacetrf', [8466]], ['laquo', [171]], ['larrb', [8676]], ['larrbfs', [10527]], ['larr', [8592]], ['Larr', [8606]], ['lArr', [8656]], ['larrfs', [10525]], ['larrhk', [8617]], ['larrlp', [8619]], ['larrpl', [10553]], ['larrsim', [10611]], ['larrtl', [8610]], ['latail', [10521]], ['lAtail', [10523]], ['lat', [10923]], ['late', [10925]], ['lates', [10925, 65024]], ['lbarr', [10508]], ['lBarr', [10510]], ['lbbrk', [10098]], ['lbrace', [123]], ['lbrack', [91]], ['lbrke', [10635]], ['lbrksld', [10639]], ['lbrkslu', [10637]], ['Lcaron', [317]], ['lcaron', [318]], ['Lcedil', [315]], ['lcedil', [316]], ['lceil', [8968]], ['lcub', [123]], ['Lcy', [1051]], ['lcy', [1083]], ['ldca', [10550]], ['ldquo', [8220]], ['ldquor', [8222]], ['ldrdhar', [10599]], ['ldrushar', [10571]], ['ldsh', [8626]], ['le', [8804]], ['lE', [8806]], ['LeftAngleBracket', [10216]], ['LeftArrowBar', [8676]], ['leftarrow', [8592]], ['LeftArrow', [8592]], ['Leftarrow', [8656]], ['LeftArrowRightArrow', [8646]], ['leftarrowtail', [8610]], ['LeftCeiling', [8968]], ['LeftDoubleBracket', [10214]], ['LeftDownTeeVector', [10593]], ['LeftDownVectorBar', [10585]], ['LeftDownVector', [8643]], ['LeftFloor', [8970]], ['leftharpoondown', [8637]], ['leftharpoonup', [8636]], ['leftleftarrows', [8647]], ['leftrightarrow', [8596]], ['LeftRightArrow', [8596]], ['Leftrightarrow', [8660]], ['leftrightarrows', [8646]], ['leftrightharpoons', [8651]], ['leftrightsquigarrow', [8621]], ['LeftRightVector', [10574]], ['LeftTeeArrow', [8612]], ['LeftTee', [8867]], ['LeftTeeVector', [10586]], ['leftthreetimes', [8907]], ['LeftTriangleBar', [10703]], ['LeftTriangle', [8882]], ['LeftTriangleEqual', [8884]], ['LeftUpDownVector', [10577]], ['LeftUpTeeVector', [10592]], ['LeftUpVectorBar', [10584]], ['LeftUpVector', [8639]], ['LeftVectorBar', [10578]], ['LeftVector', [8636]], ['lEg', [10891]], ['leg', [8922]], ['leq', [8804]], ['leqq', [8806]], ['leqslant', [10877]], ['lescc', [10920]], ['les', [10877]], ['lesdot', [10879]], ['lesdoto', [10881]], ['lesdotor', [10883]], ['lesg', [8922, 65024]], ['lesges', [10899]], ['lessapprox', [10885]], ['lessdot', [8918]], ['lesseqgtr', [8922]], ['lesseqqgtr', [10891]], ['LessEqualGreater', [8922]], ['LessFullEqual', [8806]], ['LessGreater', [8822]], ['lessgtr', [8822]], ['LessLess', [10913]], ['lesssim', [8818]], ['LessSlantEqual', [10877]], ['LessTilde', [8818]], ['lfisht', [10620]], ['lfloor', [8970]], ['Lfr', [120079]], ['lfr', [120105]], ['lg', [8822]], ['lgE', [10897]], ['lHar', [10594]], ['lhard', [8637]], ['lharu', [8636]], ['lharul', [10602]], ['lhblk', [9604]], ['LJcy', [1033]], ['ljcy', [1113]], ['llarr', [8647]], ['ll', [8810]], ['Ll', [8920]], ['llcorner', [8990]], ['Lleftarrow', [8666]], ['llhard', [10603]], ['lltri', [9722]], ['Lmidot', [319]], ['lmidot', [320]], ['lmoustache', [9136]], ['lmoust', [9136]], ['lnap', [10889]], ['lnapprox', [10889]], ['lne', [10887]], ['lnE', [8808]], ['lneq', [10887]], ['lneqq', [8808]], ['lnsim', [8934]], ['loang', [10220]], ['loarr', [8701]], ['lobrk', [10214]], ['longleftarrow', [10229]], ['LongLeftArrow', [10229]], ['Longleftarrow', [10232]], ['longleftrightarrow', [10231]], ['LongLeftRightArrow', [10231]], ['Longleftrightarrow', [10234]], ['longmapsto', [10236]], ['longrightarrow', [10230]], ['LongRightArrow', [10230]], ['Longrightarrow', [10233]], ['looparrowleft', [8619]], ['looparrowright', [8620]], ['lopar', [10629]], ['Lopf', [120131]], ['lopf', [120157]], ['loplus', [10797]], ['lotimes', [10804]], ['lowast', [8727]], ['lowbar', [95]], ['LowerLeftArrow', [8601]], ['LowerRightArrow', [8600]], ['loz', [9674]], ['lozenge', [9674]], ['lozf', [10731]], ['lpar', [40]], ['lparlt', [10643]], ['lrarr', [8646]], ['lrcorner', [8991]], ['lrhar', [8651]], ['lrhard', [10605]], ['lrm', [8206]], ['lrtri', [8895]], ['lsaquo', [8249]], ['lscr', [120001]], ['Lscr', [8466]], ['lsh', [8624]], ['Lsh', [8624]], ['lsim', [8818]], ['lsime', [10893]], ['lsimg', [10895]], ['lsqb', [91]], ['lsquo', [8216]], ['lsquor', [8218]], ['Lstrok', [321]], ['lstrok', [322]], ['ltcc', [10918]], ['ltcir', [10873]], ['lt', [60]], ['LT', [60]], ['Lt', [8810]], ['ltdot', [8918]], ['lthree', [8907]], ['ltimes', [8905]], ['ltlarr', [10614]], ['ltquest', [10875]], ['ltri', [9667]], ['ltrie', [8884]], ['ltrif', [9666]], ['ltrPar', [10646]], ['lurdshar', [10570]], ['luruhar', [10598]], ['lvertneqq', [8808, 65024]], ['lvnE', [8808, 65024]], ['macr', [175]], ['male', [9794]], ['malt', [10016]], ['maltese', [10016]], ['Map', [10501]], ['map', [8614]], ['mapsto', [8614]], ['mapstodown', [8615]], ['mapstoleft', [8612]], ['mapstoup', [8613]], ['marker', [9646]], ['mcomma', [10793]], ['Mcy', [1052]], ['mcy', [1084]], ['mdash', [8212]], ['mDDot', [8762]], ['measuredangle', [8737]], ['MediumSpace', [8287]], ['Mellintrf', [8499]], ['Mfr', [120080]], ['mfr', [120106]], ['mho', [8487]], ['micro', [181]], ['midast', [42]], ['midcir', [10992]], ['mid', [8739]], ['middot', [183]], ['minusb', [8863]], ['minus', [8722]], ['minusd', [8760]], ['minusdu', [10794]], ['MinusPlus', [8723]], ['mlcp', [10971]], ['mldr', [8230]], ['mnplus', [8723]], ['models', [8871]], ['Mopf', [120132]], ['mopf', [120158]], ['mp', [8723]], ['mscr', [120002]], ['Mscr', [8499]], ['mstpos', [8766]], ['Mu', [924]], ['mu', [956]], ['multimap', [8888]], ['mumap', [8888]], ['nabla', [8711]], ['Nacute', [323]], ['nacute', [324]], ['nang', [8736, 8402]], ['nap', [8777]], ['napE', [10864, 824]], ['napid', [8779, 824]], ['napos', [329]], ['napprox', [8777]], ['natural', [9838]], ['naturals', [8469]], ['natur', [9838]], ['nbsp', [160]], ['nbump', [8782, 824]], ['nbumpe', [8783, 824]], ['ncap', [10819]], ['Ncaron', [327]], ['ncaron', [328]], ['Ncedil', [325]], ['ncedil', [326]], ['ncong', [8775]], ['ncongdot', [10861, 824]], ['ncup', [10818]], ['Ncy', [1053]], ['ncy', [1085]], ['ndash', [8211]], ['nearhk', [10532]], ['nearr', [8599]], ['neArr', [8663]], ['nearrow', [8599]], ['ne', [8800]], ['nedot', [8784, 824]], ['NegativeMediumSpace', [8203]], ['NegativeThickSpace', [8203]], ['NegativeThinSpace', [8203]], ['NegativeVeryThinSpace', [8203]], ['nequiv', [8802]], ['nesear', [10536]], ['nesim', [8770, 824]], ['NestedGreaterGreater', [8811]], ['NestedLessLess', [8810]], ['nexist', [8708]], ['nexists', [8708]], ['Nfr', [120081]], ['nfr', [120107]], ['ngE', [8807, 824]], ['nge', [8817]], ['ngeq', [8817]], ['ngeqq', [8807, 824]], ['ngeqslant', [10878, 824]], ['nges', [10878, 824]], ['nGg', [8921, 824]], ['ngsim', [8821]], ['nGt', [8811, 8402]], ['ngt', [8815]], ['ngtr', [8815]], ['nGtv', [8811, 824]], ['nharr', [8622]], ['nhArr', [8654]], ['nhpar', [10994]], ['ni', [8715]], ['nis', [8956]], ['nisd', [8954]], ['niv', [8715]], ['NJcy', [1034]], ['njcy', [1114]], ['nlarr', [8602]], ['nlArr', [8653]], ['nldr', [8229]], ['nlE', [8806, 824]], ['nle', [8816]], ['nleftarrow', [8602]], ['nLeftarrow', [8653]], ['nleftrightarrow', [8622]], ['nLeftrightarrow', [8654]], ['nleq', [8816]], ['nleqq', [8806, 824]], ['nleqslant', [10877, 824]], ['nles', [10877, 824]], ['nless', [8814]], ['nLl', [8920, 824]], ['nlsim', [8820]], ['nLt', [8810, 8402]], ['nlt', [8814]], ['nltri', [8938]], ['nltrie', [8940]], ['nLtv', [8810, 824]], ['nmid', [8740]], ['NoBreak', [8288]], ['NonBreakingSpace', [160]], ['nopf', [120159]], ['Nopf', [8469]], ['Not', [10988]], ['not', [172]], ['NotCongruent', [8802]], ['NotCupCap', [8813]], ['NotDoubleVerticalBar', [8742]], ['NotElement', [8713]], ['NotEqual', [8800]], ['NotEqualTilde', [8770, 824]], ['NotExists', [8708]], ['NotGreater', [8815]], ['NotGreaterEqual', [8817]], ['NotGreaterFullEqual', [8807, 824]], ['NotGreaterGreater', [8811, 824]], ['NotGreaterLess', [8825]], ['NotGreaterSlantEqual', [10878, 824]], ['NotGreaterTilde', [8821]], ['NotHumpDownHump', [8782, 824]], ['NotHumpEqual', [8783, 824]], ['notin', [8713]], ['notindot', [8949, 824]], ['notinE', [8953, 824]], ['notinva', [8713]], ['notinvb', [8951]], ['notinvc', [8950]], ['NotLeftTriangleBar', [10703, 824]], ['NotLeftTriangle', [8938]], ['NotLeftTriangleEqual', [8940]], ['NotLess', [8814]], ['NotLessEqual', [8816]], ['NotLessGreater', [8824]], ['NotLessLess', [8810, 824]], ['NotLessSlantEqual', [10877, 824]], ['NotLessTilde', [8820]], ['NotNestedGreaterGreater', [10914, 824]], ['NotNestedLessLess', [10913, 824]], ['notni', [8716]], ['notniva', [8716]], ['notnivb', [8958]], ['notnivc', [8957]], ['NotPrecedes', [8832]], ['NotPrecedesEqual', [10927, 824]], ['NotPrecedesSlantEqual', [8928]], ['NotReverseElement', [8716]], ['NotRightTriangleBar', [10704, 824]], ['NotRightTriangle', [8939]], ['NotRightTriangleEqual', [8941]], ['NotSquareSubset', [8847, 824]], ['NotSquareSubsetEqual', [8930]], ['NotSquareSuperset', [8848, 824]], ['NotSquareSupersetEqual', [8931]], ['NotSubset', [8834, 8402]], ['NotSubsetEqual', [8840]], ['NotSucceeds', [8833]], ['NotSucceedsEqual', [10928, 824]], ['NotSucceedsSlantEqual', [8929]], ['NotSucceedsTilde', [8831, 824]], ['NotSuperset', [8835, 8402]], ['NotSupersetEqual', [8841]], ['NotTilde', [8769]], ['NotTildeEqual', [8772]], ['NotTildeFullEqual', [8775]], ['NotTildeTilde', [8777]], ['NotVerticalBar', [8740]], ['nparallel', [8742]], ['npar', [8742]], ['nparsl', [11005, 8421]], ['npart', [8706, 824]], ['npolint', [10772]], ['npr', [8832]], ['nprcue', [8928]], ['nprec', [8832]], ['npreceq', [10927, 824]], ['npre', [10927, 824]], ['nrarrc', [10547, 824]], ['nrarr', [8603]], ['nrArr', [8655]], ['nrarrw', [8605, 824]], ['nrightarrow', [8603]], ['nRightarrow', [8655]], ['nrtri', [8939]], ['nrtrie', [8941]], ['nsc', [8833]], ['nsccue', [8929]], ['nsce', [10928, 824]], ['Nscr', [119977]], ['nscr', [120003]], ['nshortmid', [8740]], ['nshortparallel', [8742]], ['nsim', [8769]], ['nsime', [8772]], ['nsimeq', [8772]], ['nsmid', [8740]], ['nspar', [8742]], ['nsqsube', [8930]], ['nsqsupe', [8931]], ['nsub', [8836]], ['nsubE', [10949, 824]], ['nsube', [8840]], ['nsubset', [8834, 8402]], ['nsubseteq', [8840]], ['nsubseteqq', [10949, 824]], ['nsucc', [8833]], ['nsucceq', [10928, 824]], ['nsup', [8837]], ['nsupE', [10950, 824]], ['nsupe', [8841]], ['nsupset', [8835, 8402]], ['nsupseteq', [8841]], ['nsupseteqq', [10950, 824]], ['ntgl', [8825]], ['Ntilde', [209]], ['ntilde', [241]], ['ntlg', [8824]], ['ntriangleleft', [8938]], ['ntrianglelefteq', [8940]], ['ntriangleright', [8939]], ['ntrianglerighteq', [8941]], ['Nu', [925]], ['nu', [957]], ['num', [35]], ['numero', [8470]], ['numsp', [8199]], ['nvap', [8781, 8402]], ['nvdash', [8876]], ['nvDash', [8877]], ['nVdash', [8878]], ['nVDash', [8879]], ['nvge', [8805, 8402]], ['nvgt', [62, 8402]], ['nvHarr', [10500]], ['nvinfin', [10718]], ['nvlArr', [10498]], ['nvle', [8804, 8402]], ['nvlt', [60, 8402]], ['nvltrie', [8884, 8402]], ['nvrArr', [10499]], ['nvrtrie', [8885, 8402]], ['nvsim', [8764, 8402]], ['nwarhk', [10531]], ['nwarr', [8598]], ['nwArr', [8662]], ['nwarrow', [8598]], ['nwnear', [10535]], ['Oacute', [211]], ['oacute', [243]], ['oast', [8859]], ['Ocirc', [212]], ['ocirc', [244]], ['ocir', [8858]], ['Ocy', [1054]], ['ocy', [1086]], ['odash', [8861]], ['Odblac', [336]], ['odblac', [337]], ['odiv', [10808]], ['odot', [8857]], ['odsold', [10684]], ['OElig', [338]], ['oelig', [339]], ['ofcir', [10687]], ['Ofr', [120082]], ['ofr', [120108]], ['ogon', [731]], ['Ograve', [210]], ['ograve', [242]], ['ogt', [10689]], ['ohbar', [10677]], ['ohm', [937]], ['oint', [8750]], ['olarr', [8634]], ['olcir', [10686]], ['olcross', [10683]], ['oline', [8254]], ['olt', [10688]], ['Omacr', [332]], ['omacr', [333]], ['Omega', [937]], ['omega', [969]], ['Omicron', [927]], ['omicron', [959]], ['omid', [10678]], ['ominus', [8854]], ['Oopf', [120134]], ['oopf', [120160]], ['opar', [10679]], ['OpenCurlyDoubleQuote', [8220]], ['OpenCurlyQuote', [8216]], ['operp', [10681]], ['oplus', [8853]], ['orarr', [8635]], ['Or', [10836]], ['or', [8744]], ['ord', [10845]], ['order', [8500]], ['orderof', [8500]], ['ordf', [170]], ['ordm', [186]], ['origof', [8886]], ['oror', [10838]], ['orslope', [10839]], ['orv', [10843]], ['oS', [9416]], ['Oscr', [119978]], ['oscr', [8500]], ['Oslash', [216]], ['oslash', [248]], ['osol', [8856]], ['Otilde', [213]], ['otilde', [245]], ['otimesas', [10806]], ['Otimes', [10807]], ['otimes', [8855]], ['Ouml', [214]], ['ouml', [246]], ['ovbar', [9021]], ['OverBar', [8254]], ['OverBrace', [9182]], ['OverBracket', [9140]], ['OverParenthesis', [9180]], ['para', [182]], ['parallel', [8741]], ['par', [8741]], ['parsim', [10995]], ['parsl', [11005]], ['part', [8706]], ['PartialD', [8706]], ['Pcy', [1055]], ['pcy', [1087]], ['percnt', [37]], ['period', [46]], ['permil', [8240]], ['perp', [8869]], ['pertenk', [8241]], ['Pfr', [120083]], ['pfr', [120109]], ['Phi', [934]], ['phi', [966]], ['phiv', [981]], ['phmmat', [8499]], ['phone', [9742]], ['Pi', [928]], ['pi', [960]], ['pitchfork', [8916]], ['piv', [982]], ['planck', [8463]], ['planckh', [8462]], ['plankv', [8463]], ['plusacir', [10787]], ['plusb', [8862]], ['pluscir', [10786]], ['plus', [43]], ['plusdo', [8724]], ['plusdu', [10789]], ['pluse', [10866]], ['PlusMinus', [177]], ['plusmn', [177]], ['plussim', [10790]], ['plustwo', [10791]], ['pm', [177]], ['Poincareplane', [8460]], ['pointint', [10773]], ['popf', [120161]], ['Popf', [8473]], ['pound', [163]], ['prap', [10935]], ['Pr', [10939]], ['pr', [8826]], ['prcue', [8828]], ['precapprox', [10935]], ['prec', [8826]], ['preccurlyeq', [8828]], ['Precedes', [8826]], ['PrecedesEqual', [10927]], ['PrecedesSlantEqual', [8828]], ['PrecedesTilde', [8830]], ['preceq', [10927]], ['precnapprox', [10937]], ['precneqq', [10933]], ['precnsim', [8936]], ['pre', [10927]], ['prE', [10931]], ['precsim', [8830]], ['prime', [8242]], ['Prime', [8243]], ['primes', [8473]], ['prnap', [10937]], ['prnE', [10933]], ['prnsim', [8936]], ['prod', [8719]], ['Product', [8719]], ['profalar', [9006]], ['profline', [8978]], ['profsurf', [8979]], ['prop', [8733]], ['Proportional', [8733]], ['Proportion', [8759]], ['propto', [8733]], ['prsim', [8830]], ['prurel', [8880]], ['Pscr', [119979]], ['pscr', [120005]], ['Psi', [936]], ['psi', [968]], ['puncsp', [8200]], ['Qfr', [120084]], ['qfr', [120110]], ['qint', [10764]], ['qopf', [120162]], ['Qopf', [8474]], ['qprime', [8279]], ['Qscr', [119980]], ['qscr', [120006]], ['quaternions', [8461]], ['quatint', [10774]], ['quest', [63]], ['questeq', [8799]], ['quot', [34]], ['QUOT', [34]], ['rAarr', [8667]], ['race', [8765, 817]], ['Racute', [340]], ['racute', [341]], ['radic', [8730]], ['raemptyv', [10675]], ['rang', [10217]], ['Rang', [10219]], ['rangd', [10642]], ['range', [10661]], ['rangle', [10217]], ['raquo', [187]], ['rarrap', [10613]], ['rarrb', [8677]], ['rarrbfs', [10528]], ['rarrc', [10547]], ['rarr', [8594]], ['Rarr', [8608]], ['rArr', [8658]], ['rarrfs', [10526]], ['rarrhk', [8618]], ['rarrlp', [8620]], ['rarrpl', [10565]], ['rarrsim', [10612]], ['Rarrtl', [10518]], ['rarrtl', [8611]], ['rarrw', [8605]], ['ratail', [10522]], ['rAtail', [10524]], ['ratio', [8758]], ['rationals', [8474]], ['rbarr', [10509]], ['rBarr', [10511]], ['RBarr', [10512]], ['rbbrk', [10099]], ['rbrace', [125]], ['rbrack', [93]], ['rbrke', [10636]], ['rbrksld', [10638]], ['rbrkslu', [10640]], ['Rcaron', [344]], ['rcaron', [345]], ['Rcedil', [342]], ['rcedil', [343]], ['rceil', [8969]], ['rcub', [125]], ['Rcy', [1056]], ['rcy', [1088]], ['rdca', [10551]], ['rdldhar', [10601]], ['rdquo', [8221]], ['rdquor', [8221]], ['CloseCurlyDoubleQuote', [8221]], ['rdsh', [8627]], ['real', [8476]], ['realine', [8475]], ['realpart', [8476]], ['reals', [8477]], ['Re', [8476]], ['rect', [9645]], ['reg', [174]], ['REG', [174]], ['ReverseElement', [8715]], ['ReverseEquilibrium', [8651]], ['ReverseUpEquilibrium', [10607]], ['rfisht', [10621]], ['rfloor', [8971]], ['rfr', [120111]], ['Rfr', [8476]], ['rHar', [10596]], ['rhard', [8641]], ['rharu', [8640]], ['rharul', [10604]], ['Rho', [929]], ['rho', [961]], ['rhov', [1009]], ['RightAngleBracket', [10217]], ['RightArrowBar', [8677]], ['rightarrow', [8594]], ['RightArrow', [8594]], ['Rightarrow', [8658]], ['RightArrowLeftArrow', [8644]], ['rightarrowtail', [8611]], ['RightCeiling', [8969]], ['RightDoubleBracket', [10215]], ['RightDownTeeVector', [10589]], ['RightDownVectorBar', [10581]], ['RightDownVector', [8642]], ['RightFloor', [8971]], ['rightharpoondown', [8641]], ['rightharpoonup', [8640]], ['rightleftarrows', [8644]], ['rightleftharpoons', [8652]], ['rightrightarrows', [8649]], ['rightsquigarrow', [8605]], ['RightTeeArrow', [8614]], ['RightTee', [8866]], ['RightTeeVector', [10587]], ['rightthreetimes', [8908]], ['RightTriangleBar', [10704]], ['RightTriangle', [8883]], ['RightTriangleEqual', [8885]], ['RightUpDownVector', [10575]], ['RightUpTeeVector', [10588]], ['RightUpVectorBar', [10580]], ['RightUpVector', [8638]], ['RightVectorBar', [10579]], ['RightVector', [8640]], ['ring', [730]], ['risingdotseq', [8787]], ['rlarr', [8644]], ['rlhar', [8652]], ['rlm', [8207]], ['rmoustache', [9137]], ['rmoust', [9137]], ['rnmid', [10990]], ['roang', [10221]], ['roarr', [8702]], ['robrk', [10215]], ['ropar', [10630]], ['ropf', [120163]], ['Ropf', [8477]], ['roplus', [10798]], ['rotimes', [10805]], ['RoundImplies', [10608]], ['rpar', [41]], ['rpargt', [10644]], ['rppolint', [10770]], ['rrarr', [8649]], ['Rrightarrow', [8667]], ['rsaquo', [8250]], ['rscr', [120007]], ['Rscr', [8475]], ['rsh', [8625]], ['Rsh', [8625]], ['rsqb', [93]], ['rsquo', [8217]], ['rsquor', [8217]], ['CloseCurlyQuote', [8217]], ['rthree', [8908]], ['rtimes', [8906]], ['rtri', [9657]], ['rtrie', [8885]], ['rtrif', [9656]], ['rtriltri', [10702]], ['RuleDelayed', [10740]], ['ruluhar', [10600]], ['rx', [8478]], ['Sacute', [346]], ['sacute', [347]], ['sbquo', [8218]], ['scap', [10936]], ['Scaron', [352]], ['scaron', [353]], ['Sc', [10940]], ['sc', [8827]], ['sccue', [8829]], ['sce', [10928]], ['scE', [10932]], ['Scedil', [350]], ['scedil', [351]], ['Scirc', [348]], ['scirc', [349]], ['scnap', [10938]], ['scnE', [10934]], ['scnsim', [8937]], ['scpolint', [10771]], ['scsim', [8831]], ['Scy', [1057]], ['scy', [1089]], ['sdotb', [8865]], ['sdot', [8901]], ['sdote', [10854]], ['searhk', [10533]], ['searr', [8600]], ['seArr', [8664]], ['searrow', [8600]], ['sect', [167]], ['semi', [59]], ['seswar', [10537]], ['setminus', [8726]], ['setmn', [8726]], ['sext', [10038]], ['Sfr', [120086]], ['sfr', [120112]], ['sfrown', [8994]], ['sharp', [9839]], ['SHCHcy', [1065]], ['shchcy', [1097]], ['SHcy', [1064]], ['shcy', [1096]], ['ShortDownArrow', [8595]], ['ShortLeftArrow', [8592]], ['shortmid', [8739]], ['shortparallel', [8741]], ['ShortRightArrow', [8594]], ['ShortUpArrow', [8593]], ['shy', [173]], ['Sigma', [931]], ['sigma', [963]], ['sigmaf', [962]], ['sigmav', [962]], ['sim', [8764]], ['simdot', [10858]], ['sime', [8771]], ['simeq', [8771]], ['simg', [10910]], ['simgE', [10912]], ['siml', [10909]], ['simlE', [10911]], ['simne', [8774]], ['simplus', [10788]], ['simrarr', [10610]], ['slarr', [8592]], ['SmallCircle', [8728]], ['smallsetminus', [8726]], ['smashp', [10803]], ['smeparsl', [10724]], ['smid', [8739]], ['smile', [8995]], ['smt', [10922]], ['smte', [10924]], ['smtes', [10924, 65024]], ['SOFTcy', [1068]], ['softcy', [1100]], ['solbar', [9023]], ['solb', [10692]], ['sol', [47]], ['Sopf', [120138]], ['sopf', [120164]], ['spades', [9824]], ['spadesuit', [9824]], ['spar', [8741]], ['sqcap', [8851]], ['sqcaps', [8851, 65024]], ['sqcup', [8852]], ['sqcups', [8852, 65024]], ['Sqrt', [8730]], ['sqsub', [8847]], ['sqsube', [8849]], ['sqsubset', [8847]], ['sqsubseteq', [8849]], ['sqsup', [8848]], ['sqsupe', [8850]], ['sqsupset', [8848]], ['sqsupseteq', [8850]], ['square', [9633]], ['Square', [9633]], ['SquareIntersection', [8851]], ['SquareSubset', [8847]], ['SquareSubsetEqual', [8849]], ['SquareSuperset', [8848]], ['SquareSupersetEqual', [8850]], ['SquareUnion', [8852]], ['squarf', [9642]], ['squ', [9633]], ['squf', [9642]], ['srarr', [8594]], ['Sscr', [119982]], ['sscr', [120008]], ['ssetmn', [8726]], ['ssmile', [8995]], ['sstarf', [8902]], ['Star', [8902]], ['star', [9734]], ['starf', [9733]], ['straightepsilon', [1013]], ['straightphi', [981]], ['strns', [175]], ['sub', [8834]], ['Sub', [8912]], ['subdot', [10941]], ['subE', [10949]], ['sube', [8838]], ['subedot', [10947]], ['submult', [10945]], ['subnE', [10955]], ['subne', [8842]], ['subplus', [10943]], ['subrarr', [10617]], ['subset', [8834]], ['Subset', [8912]], ['subseteq', [8838]], ['subseteqq', [10949]], ['SubsetEqual', [8838]], ['subsetneq', [8842]], ['subsetneqq', [10955]], ['subsim', [10951]], ['subsub', [10965]], ['subsup', [10963]], ['succapprox', [10936]], ['succ', [8827]], ['succcurlyeq', [8829]], ['Succeeds', [8827]], ['SucceedsEqual', [10928]], ['SucceedsSlantEqual', [8829]], ['SucceedsTilde', [8831]], ['succeq', [10928]], ['succnapprox', [10938]], ['succneqq', [10934]], ['succnsim', [8937]], ['succsim', [8831]], ['SuchThat', [8715]], ['sum', [8721]], ['Sum', [8721]], ['sung', [9834]], ['sup1', [185]], ['sup2', [178]], ['sup3', [179]], ['sup', [8835]], ['Sup', [8913]], ['supdot', [10942]], ['supdsub', [10968]], ['supE', [10950]], ['supe', [8839]], ['supedot', [10948]], ['Superset', [8835]], ['SupersetEqual', [8839]], ['suphsol', [10185]], ['suphsub', [10967]], ['suplarr', [10619]], ['supmult', [10946]], ['supnE', [10956]], ['supne', [8843]], ['supplus', [10944]], ['supset', [8835]], ['Supset', [8913]], ['supseteq', [8839]], ['supseteqq', [10950]], ['supsetneq', [8843]], ['supsetneqq', [10956]], ['supsim', [10952]], ['supsub', [10964]], ['supsup', [10966]], ['swarhk', [10534]], ['swarr', [8601]], ['swArr', [8665]], ['swarrow', [8601]], ['swnwar', [10538]], ['szlig', [223]], ['Tab', [9]], ['target', [8982]], ['Tau', [932]], ['tau', [964]], ['tbrk', [9140]], ['Tcaron', [356]], ['tcaron', [357]], ['Tcedil', [354]], ['tcedil', [355]], ['Tcy', [1058]], ['tcy', [1090]], ['tdot', [8411]], ['telrec', [8981]], ['Tfr', [120087]], ['tfr', [120113]], ['there4', [8756]], ['therefore', [8756]], ['Therefore', [8756]], ['Theta', [920]], ['theta', [952]], ['thetasym', [977]], ['thetav', [977]], ['thickapprox', [8776]], ['thicksim', [8764]], ['ThickSpace', [8287, 8202]], ['ThinSpace', [8201]], ['thinsp', [8201]], ['thkap', [8776]], ['thksim', [8764]], ['THORN', [222]], ['thorn', [254]], ['tilde', [732]], ['Tilde', [8764]], ['TildeEqual', [8771]], ['TildeFullEqual', [8773]], ['TildeTilde', [8776]], ['timesbar', [10801]], ['timesb', [8864]], ['times', [215]], ['timesd', [10800]], ['tint', [8749]], ['toea', [10536]], ['topbot', [9014]], ['topcir', [10993]], ['top', [8868]], ['Topf', [120139]], ['topf', [120165]], ['topfork', [10970]], ['tosa', [10537]], ['tprime', [8244]], ['trade', [8482]], ['TRADE', [8482]], ['triangle', [9653]], ['triangledown', [9663]], ['triangleleft', [9667]], ['trianglelefteq', [8884]], ['triangleq', [8796]], ['triangleright', [9657]], ['trianglerighteq', [8885]], ['tridot', [9708]], ['trie', [8796]], ['triminus', [10810]], ['TripleDot', [8411]], ['triplus', [10809]], ['trisb', [10701]], ['tritime', [10811]], ['trpezium', [9186]], ['Tscr', [119983]], ['tscr', [120009]], ['TScy', [1062]], ['tscy', [1094]], ['TSHcy', [1035]], ['tshcy', [1115]], ['Tstrok', [358]], ['tstrok', [359]], ['twixt', [8812]], ['twoheadleftarrow', [8606]], ['twoheadrightarrow', [8608]], ['Uacute', [218]], ['uacute', [250]], ['uarr', [8593]], ['Uarr', [8607]], ['uArr', [8657]], ['Uarrocir', [10569]], ['Ubrcy', [1038]], ['ubrcy', [1118]], ['Ubreve', [364]], ['ubreve', [365]], ['Ucirc', [219]], ['ucirc', [251]], ['Ucy', [1059]], ['ucy', [1091]], ['udarr', [8645]], ['Udblac', [368]], ['udblac', [369]], ['udhar', [10606]], ['ufisht', [10622]], ['Ufr', [120088]], ['ufr', [120114]], ['Ugrave', [217]], ['ugrave', [249]], ['uHar', [10595]], ['uharl', [8639]], ['uharr', [8638]], ['uhblk', [9600]], ['ulcorn', [8988]], ['ulcorner', [8988]], ['ulcrop', [8975]], ['ultri', [9720]], ['Umacr', [362]], ['umacr', [363]], ['uml', [168]], ['UnderBar', [95]], ['UnderBrace', [9183]], ['UnderBracket', [9141]], ['UnderParenthesis', [9181]], ['Union', [8899]], ['UnionPlus', [8846]], ['Uogon', [370]], ['uogon', [371]], ['Uopf', [120140]], ['uopf', [120166]], ['UpArrowBar', [10514]], ['uparrow', [8593]], ['UpArrow', [8593]], ['Uparrow', [8657]], ['UpArrowDownArrow', [8645]], ['updownarrow', [8597]], ['UpDownArrow', [8597]], ['Updownarrow', [8661]], ['UpEquilibrium', [10606]], ['upharpoonleft', [8639]], ['upharpoonright', [8638]], ['uplus', [8846]], ['UpperLeftArrow', [8598]], ['UpperRightArrow', [8599]], ['upsi', [965]], ['Upsi', [978]], ['upsih', [978]], ['Upsilon', [933]], ['upsilon', [965]], ['UpTeeArrow', [8613]], ['UpTee', [8869]], ['upuparrows', [8648]], ['urcorn', [8989]], ['urcorner', [8989]], ['urcrop', [8974]], ['Uring', [366]], ['uring', [367]], ['urtri', [9721]], ['Uscr', [119984]], ['uscr', [120010]], ['utdot', [8944]], ['Utilde', [360]], ['utilde', [361]], ['utri', [9653]], ['utrif', [9652]], ['uuarr', [8648]], ['Uuml', [220]], ['uuml', [252]], ['uwangle', [10663]], ['vangrt', [10652]], ['varepsilon', [1013]], ['varkappa', [1008]], ['varnothing', [8709]], ['varphi', [981]], ['varpi', [982]], ['varpropto', [8733]], ['varr', [8597]], ['vArr', [8661]], ['varrho', [1009]], ['varsigma', [962]], ['varsubsetneq', [8842, 65024]], ['varsubsetneqq', [10955, 65024]], ['varsupsetneq', [8843, 65024]], ['varsupsetneqq', [10956, 65024]], ['vartheta', [977]], ['vartriangleleft', [8882]], ['vartriangleright', [8883]], ['vBar', [10984]], ['Vbar', [10987]], ['vBarv', [10985]], ['Vcy', [1042]], ['vcy', [1074]], ['vdash', [8866]], ['vDash', [8872]], ['Vdash', [8873]], ['VDash', [8875]], ['Vdashl', [10982]], ['veebar', [8891]], ['vee', [8744]], ['Vee', [8897]], ['veeeq', [8794]], ['vellip', [8942]], ['verbar', [124]], ['Verbar', [8214]], ['vert', [124]], ['Vert', [8214]], ['VerticalBar', [8739]], ['VerticalLine', [124]], ['VerticalSeparator', [10072]], ['VerticalTilde', [8768]], ['VeryThinSpace', [8202]], ['Vfr', [120089]], ['vfr', [120115]], ['vltri', [8882]], ['vnsub', [8834, 8402]], ['vnsup', [8835, 8402]], ['Vopf', [120141]], ['vopf', [120167]], ['vprop', [8733]], ['vrtri', [8883]], ['Vscr', [119985]], ['vscr', [120011]], ['vsubnE', [10955, 65024]], ['vsubne', [8842, 65024]], ['vsupnE', [10956, 65024]], ['vsupne', [8843, 65024]], ['Vvdash', [8874]], ['vzigzag', [10650]], ['Wcirc', [372]], ['wcirc', [373]], ['wedbar', [10847]], ['wedge', [8743]], ['Wedge', [8896]], ['wedgeq', [8793]], ['weierp', [8472]], ['Wfr', [120090]], ['wfr', [120116]], ['Wopf', [120142]], ['wopf', [120168]], ['wp', [8472]], ['wr', [8768]], ['wreath', [8768]], ['Wscr', [119986]], ['wscr', [120012]], ['xcap', [8898]], ['xcirc', [9711]], ['xcup', [8899]], ['xdtri', [9661]], ['Xfr', [120091]], ['xfr', [120117]], ['xharr', [10231]], ['xhArr', [10234]], ['Xi', [926]], ['xi', [958]], ['xlarr', [10229]], ['xlArr', [10232]], ['xmap', [10236]], ['xnis', [8955]], ['xodot', [10752]], ['Xopf', [120143]], ['xopf', [120169]], ['xoplus', [10753]], ['xotime', [10754]], ['xrarr', [10230]], ['xrArr', [10233]], ['Xscr', [119987]], ['xscr', [120013]], ['xsqcup', [10758]], ['xuplus', [10756]], ['xutri', [9651]], ['xvee', [8897]], ['xwedge', [8896]], ['Yacute', [221]], ['yacute', [253]], ['YAcy', [1071]], ['yacy', [1103]], ['Ycirc', [374]], ['ycirc', [375]], ['Ycy', [1067]], ['ycy', [1099]], ['yen', [165]], ['Yfr', [120092]], ['yfr', [120118]], ['YIcy', [1031]], ['yicy', [1111]], ['Yopf', [120144]], ['yopf', [120170]], ['Yscr', [119988]], ['yscr', [120014]], ['YUcy', [1070]], ['yucy', [1102]], ['yuml', [255]], ['Yuml', [376]], ['Zacute', [377]], ['zacute', [378]], ['Zcaron', [381]], ['zcaron', [382]], ['Zcy', [1047]], ['zcy', [1079]], ['Zdot', [379]], ['zdot', [380]], ['zeetrf', [8488]], ['ZeroWidthSpace', [8203]], ['Zeta', [918]], ['zeta', [950]], ['zfr', [120119]], ['Zfr', [8488]], ['ZHcy', [1046]], ['zhcy', [1078]], ['zigrarr', [8669]], ['zopf', [120171]], ['Zopf', [8484]], ['Zscr', [119989]], ['zscr', [120015]], ['zwj', [8205]], ['zwnj', [8204]]];

var alphaIndex = {};
var charIndex = {};

createIndexes(alphaIndex, charIndex);

/**
 * @constructor
 */
function Html5Entities() {}

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.prototype.decode = function (str) {
    if (!str || !str.length) {
        return '';
    }
    return str.replace(/&(#?[\w\d]+);?/g, function (s, entity) {
        var chr;
        if (entity.charAt(0) === "#") {
            var code = entity.charAt(1) === 'x' ? parseInt(entity.substr(2).toLowerCase(), 16) : parseInt(entity.substr(1));

            if (!(isNaN(code) || code < -32768 || code > 65535)) {
                chr = String.fromCharCode(code);
            }
        } else {
            chr = alphaIndex[entity];
        }
        return chr || s;
    });
};

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.decode = function (str) {
    return new Html5Entities().decode(str);
};

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.prototype.encode = function (str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var charInfo = charIndex[str.charCodeAt(i)];
        if (charInfo) {
            var alpha = charInfo[str.charCodeAt(i + 1)];
            if (alpha) {
                i++;
            } else {
                alpha = charInfo[''];
            }
            if (alpha) {
                result += "&" + alpha + ";";
                i++;
                continue;
            }
        }
        result += str.charAt(i);
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.encode = function (str) {
    return new Html5Entities().encode(str);
};

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.prototype.encodeNonUTF = function (str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var c = str.charCodeAt(i);
        var charInfo = charIndex[c];
        if (charInfo) {
            var alpha = charInfo[str.charCodeAt(i + 1)];
            if (alpha) {
                i++;
            } else {
                alpha = charInfo[''];
            }
            if (alpha) {
                result += "&" + alpha + ";";
                i++;
                continue;
            }
        }
        if (c < 32 || c > 126) {
            result += '&#' + c + ';';
        } else {
            result += str.charAt(i);
        }
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.encodeNonUTF = function (str) {
    return new Html5Entities().encodeNonUTF(str);
};

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.prototype.encodeNonASCII = function (str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var c = str.charCodeAt(i);
        if (c <= 255) {
            result += str[i++];
            continue;
        }
        result += '&#' + c + ';';
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.encodeNonASCII = function (str) {
    return new Html5Entities().encodeNonASCII(str);
};

/**
 * @param {Object} alphaIndex Passed by reference.
 * @param {Object} charIndex Passed by reference.
 */
function createIndexes(alphaIndex, charIndex) {
    var i = ENTITIES.length;
    var _results = [];
    while (i--) {
        var e = ENTITIES[i];
        var alpha = e[0];
        var chars = e[1];
        var chr = chars[0];
        var addChar = chr < 32 || chr > 126 || chr === 62 || chr === 60 || chr === 38 || chr === 34 || chr === 39;
        var charInfo;
        if (addChar) {
            charInfo = charIndex[chr] = charIndex[chr] || {};
        }
        if (chars[1]) {
            var chr2 = chars[1];
            alphaIndex[alpha] = String.fromCharCode(chr) + String.fromCharCode(chr2);
            _results.push(addChar && (charInfo[chr2] = alpha));
        } else {
            alphaIndex[alpha] = String.fromCharCode(chr);
            _results.push(addChar && (charInfo[''] = alpha));
        }
    }
}

module.exports = Html5Entities;

/***/ }),

/***/ "../../node_modules/html-entities/lib/xml-entities.js":
/*!*****************************************************************************************************!*\
  !*** /Users/silvioviscuso/Desktop/WEBIT/duemmetrade/node_modules/html-entities/lib/xml-entities.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ALPHA_INDEX = {
    '&lt': '<',
    '&gt': '>',
    '&quot': '"',
    '&apos': '\'',
    '&amp': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&apos;': '\'',
    '&amp;': '&'
};

var CHAR_INDEX = {
    60: 'lt',
    62: 'gt',
    34: 'quot',
    39: 'apos',
    38: 'amp'
};

var CHAR_S_INDEX = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;',
    '&': '&amp;'
};

/**
 * @constructor
 */
function XmlEntities() {}

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.prototype.encode = function (str) {
    if (!str || !str.length) {
        return '';
    }
    return str.replace(/<|>|"|'|&/g, function (s) {
        return CHAR_S_INDEX[s];
    });
};

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.encode = function (str) {
    return new XmlEntities().encode(str);
};

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.prototype.decode = function (str) {
    if (!str || !str.length) {
        return '';
    }
    return str.replace(/&#?[0-9a-zA-Z]+;?/g, function (s) {
        if (s.charAt(1) === '#') {
            var code = s.charAt(2).toLowerCase() === 'x' ? parseInt(s.substr(3), 16) : parseInt(s.substr(2));

            if (isNaN(code) || code < -32768 || code > 65535) {
                return '';
            }
            return String.fromCharCode(code);
        }
        return ALPHA_INDEX[s] || s;
    });
};

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.decode = function (str) {
    return new XmlEntities().decode(str);
};

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.prototype.encodeNonUTF = function (str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var c = str.charCodeAt(i);
        var alpha = CHAR_INDEX[c];
        if (alpha) {
            result += "&" + alpha + ";";
            i++;
            continue;
        }
        if (c < 32 || c > 126) {
            result += '&#' + c + ';';
        } else {
            result += str.charAt(i);
        }
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.encodeNonUTF = function (str) {
    return new XmlEntities().encodeNonUTF(str);
};

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.prototype.encodeNonASCII = function (str) {
    if (!str || !str.length) {
        return '';
    }
    var strLenght = str.length;
    var result = '';
    var i = 0;
    while (i < strLenght) {
        var c = str.charCodeAt(i);
        if (c <= 255) {
            result += str[i++];
            continue;
        }
        result += '&#' + c + ';';
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.encodeNonASCII = function (str) {
    return new XmlEntities().encodeNonASCII(str);
};

module.exports = XmlEntities;

/***/ }),

/***/ "../../node_modules/lazysizes/lazysizes.js":
/*!******************************************************************************************!*\
  !*** /Users/silvioviscuso/Desktop/WEBIT/duemmetrade/node_modules/lazysizes/lazysizes.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (window, factory) {
	var lazySizes = factory(window, window.document);
	window.lazySizes = lazySizes;
	if (( false ? undefined : _typeof(module)) == 'object' && module.exports) {
		module.exports = lazySizes;
	}
})(window, function l(window, document) {
	'use strict';
	/*jshint eqnull:true */

	if (!document.getElementsByClassName) {
		return;
	}

	var lazysizes, lazySizesConfig;

	var docElem = document.documentElement;

	var Date = window.Date;

	var supportPicture = window.HTMLPictureElement;

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	var addEventListener = window[_addEventListener];

	var setTimeout = window.setTimeout;

	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	var requestIdleCallback = window.requestIdleCallback;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	var hasClass = function hasClass(ele, cls) {
		if (!regClassCache[cls]) {
			regClassCache[cls] = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	var addClass = function addClass(ele, cls) {
		if (!hasClass(ele, cls)) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	var removeClass = function removeClass(ele, cls) {
		var reg;
		if (reg = hasClass(ele, cls)) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function addRemoveLoadEvents(dom, fn, add) {
		var action = add ? _addEventListener : 'removeEventListener';
		if (add) {
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function (evt) {
			dom[action](evt, fn);
		});
	};

	var triggerEvent = function triggerEvent(elem, name, detail, noBubbles, noCancelable) {
		var event = document.createEvent('Event');

		if (!detail) {
			detail = {};
		}

		detail.instance = lazysizes;

		event.initEvent(name, !noBubbles, !noCancelable);

		event.detail = detail;

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function updatePolyfill(el, full) {
		var polyfill;
		if (!supportPicture && (polyfill = window.picturefill || lazySizesConfig.pf)) {
			if (full && full.src && !el[_getAttribute]('srcset')) {
				el.setAttribute('srcset', full.src);
			}
			polyfill({ reevaluate: true, elements: [el] });
		} else if (full && full.src) {
			el.src = full.src;
		}
	};

	var getCSS = function getCSS(elem, style) {
		return (getComputedStyle(elem, null) || {})[style];
	};

	var getWidth = function getWidth(elem, parent, width) {
		width = width || elem.offsetWidth;

		while (width < lazySizesConfig.minSize && parent && !elem._lazysizesWidth) {
			width = parent.offsetWidth;
			parent = parent.parentNode;
		}

		return width;
	};

	var rAF = function () {
		var running, waiting;
		var firstFns = [];
		var secondFns = [];
		var fns = firstFns;

		var run = function run() {
			var runFns = fns;

			fns = firstFns.length ? secondFns : firstFns;

			running = true;
			waiting = false;

			while (runFns.length) {
				runFns.shift()();
			}

			running = false;
		};

		var rafBatch = function rafBatch(fn, queue) {
			if (running && !queue) {
				fn.apply(this, arguments);
			} else {
				fns.push(fn);

				if (!waiting) {
					waiting = true;
					(document.hidden ? setTimeout : requestAnimationFrame)(run);
				}
			}
		};

		rafBatch._lsFlush = run;

		return rafBatch;
	}();

	var rAFIt = function rAFIt(fn, simple) {
		return simple ? function () {
			rAF(fn);
		} : function () {
			var that = this;
			var args = arguments;
			rAF(function () {
				fn.apply(that, args);
			});
		};
	};

	var throttle = function throttle(fn) {
		var running;
		var lastTime = 0;
		var gDelay = lazySizesConfig.throttleDelay;
		var rICTimeout = lazySizesConfig.ricTimeout;
		var run = function run() {
			running = false;
			lastTime = Date.now();
			fn();
		};
		var idleCallback = requestIdleCallback && rICTimeout > 49 ? function () {
			requestIdleCallback(run, { timeout: rICTimeout });

			if (rICTimeout !== lazySizesConfig.ricTimeout) {
				rICTimeout = lazySizesConfig.ricTimeout;
			}
		} : rAFIt(function () {
			setTimeout(run);
		}, true);

		return function (isPriority) {
			var delay;

			if (isPriority = isPriority === true) {
				rICTimeout = 33;
			}

			if (running) {
				return;
			}

			running = true;

			delay = gDelay - (Date.now() - lastTime);

			if (delay < 0) {
				delay = 0;
			}

			if (isPriority || delay < 9) {
				idleCallback();
			} else {
				setTimeout(idleCallback, delay);
			}
		};
	};

	//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
	var debounce = function debounce(func) {
		var timeout, timestamp;
		var wait = 99;
		var run = function run() {
			timeout = null;
			func();
		};
		var later = function later() {
			var last = Date.now() - timestamp;

			if (last < wait) {
				setTimeout(later, wait - last);
			} else {
				(requestIdleCallback || run)(run);
			}
		};

		return function () {
			timestamp = Date.now();

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};

	(function () {
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.5,
			hFac: 0.8,
			loadMode: 2,
			loadHidden: true,
			ricTimeout: 0,
			throttleDelay: 125
		};

		lazySizesConfig = window.lazySizesConfig || window.lazysizesConfig || {};

		for (prop in lazySizesDefaults) {
			if (!(prop in lazySizesConfig)) {
				lazySizesConfig[prop] = lazySizesDefaults[prop];
			}
		}

		window.lazySizesConfig = lazySizesConfig;

		setTimeout(function () {
			if (lazySizesConfig.init) {
				init();
			}
		});
	})();

	var loader = function () {
		var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = 'onscroll' in window && !/(gle|ing)bot/.test(navigator.userAgent);

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = -1;

		var resetPreloading = function resetPreloading(e) {
			isLoading--;
			if (e && e.target) {
				addRemoveLoadEvents(e.target, resetPreloading);
			}

			if (!e || isLoading < 0 || !e.target) {
				isLoading = 0;
			}
		};

		var isVisible = function isVisible(elem) {
			if (isBodyHidden == null) {
				isBodyHidden = getCSS(document.body, 'visibility') == 'hidden';
			}

			return isBodyHidden || getCSS(elem.parentNode, 'visibility') != 'hidden' && getCSS(elem, 'visibility') != 'hidden';
		};

		var isNestedVisible = function isNestedVisible(elem, elemExpand) {
			var outerRect;
			var parent = elem;
			var visible = isVisible(elem);

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while (visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem) {
				visible = (getCSS(parent, 'opacity') || 1) > 0;

				if (visible && getCSS(parent, 'overflow') != 'visible') {
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left && eLleft < outerRect.right && eLbottom > outerRect.top - 1 && eLtop < outerRect.bottom + 1;
				}
			}

			return visible;
		};

		var checkElements = function checkElements() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal, defaultExpand, preloadExpand, hFac;
			var lazyloadElems = lazysizes.elements;

			if ((loadMode = lazySizesConfig.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)) {

				i = 0;

				lowRuns++;

				defaultExpand = !lazySizesConfig.expand || lazySizesConfig.expand < 1 ? docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 : lazySizesConfig.expand;

				preloadExpand = defaultExpand * lazySizesConfig.expFactor;
				hFac = lazySizesConfig.hFac;
				isBodyHidden = null;

				if (currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden) {
					currentExpand = preloadExpand;
					lowRuns = 0;
				} else if (loadMode > 1 && lowRuns > 1 && isLoading < 6) {
					currentExpand = defaultExpand;
				} else {
					currentExpand = shrinkExpand;
				}

				for (; i < eLlen; i++) {

					if (!lazyloadElems[i] || lazyloadElems[i]._lazyRace) {
						continue;
					}

					if (!supportScroll) {
						unveilElement(lazyloadElems[i]);continue;
					}

					if (!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)) {
						elemExpand = currentExpand;
					}

					if (beforeExpandVal !== elemExpand) {
						eLvW = innerWidth + elemExpand * hFac;
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand && (eLtop = rect.top) <= elvH && (eLright = rect.right) >= elemNegativeExpand * hFac && (eLleft = rect.left) <= eLvW && (eLbottom || eLright || eLleft || eLtop) && (lazySizesConfig.loadHidden || isVisible(lazyloadElems[i])) && (isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4) || isNestedVisible(lazyloadElems[i], elemExpand))) {
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if (isLoading > 9) {
							break;
						}
					} else if (!loadedSomething && isCompleted && !autoLoadElem && isLoading < 4 && lowRuns < 4 && loadMode > 2 && (preloadElems[0] || lazySizesConfig.preloadAfterLoad) && (preloadElems[0] || !elemExpandVal && (eLbottom || eLright || eLleft || eLtop || lazyloadElems[i][_getAttribute](lazySizesConfig.sizesAttr) != 'auto'))) {
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if (autoLoadElem && !loadedSomething) {
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function switchLoadingClass(e) {
			addClass(e.target, lazySizesConfig.loadedClass);
			removeClass(e.target, lazySizesConfig.loadingClass);
			addRemoveLoadEvents(e.target, rafSwitchLoadingClass);
			triggerEvent(e.target, 'lazyloaded');
		};
		var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
		var rafSwitchLoadingClass = function rafSwitchLoadingClass(e) {
			rafedSwitchLoadingClass({ target: e.target });
		};

		var changeIframeSrc = function changeIframeSrc(elem, src) {
			try {
				elem.contentWindow.location.replace(src);
			} catch (e) {
				elem.src = src;
			}
		};

		var handleSources = function handleSources(source) {
			var customMedia;

			var sourceSrcset = source[_getAttribute](lazySizesConfig.srcsetAttr);

			if (customMedia = lazySizesConfig.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) {
				source.setAttribute('media', customMedia);
			}

			if (sourceSrcset) {
				source.setAttribute('srcset', sourceSrcset);
			}
		};

		var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg) {
			var src, srcset, parent, isPicture, event, firesLoad;

			if (!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented) {

				if (sizes) {
					if (isAuto) {
						addClass(elem, lazySizesConfig.autosizesClass);
					} else {
						elem.setAttribute('sizes', sizes);
					}
				}

				srcset = elem[_getAttribute](lazySizesConfig.srcsetAttr);
				src = elem[_getAttribute](lazySizesConfig.srcAttr);

				if (isImg) {
					parent = elem.parentNode;
					isPicture = parent && regPicture.test(parent.nodeName || '');
				}

				firesLoad = detail.firesLoad || 'src' in elem && (srcset || src || isPicture);

				event = { target: elem };

				if (firesLoad) {
					addRemoveLoadEvents(elem, resetPreloading, true);
					clearTimeout(resetPreloadingTimer);
					resetPreloadingTimer = setTimeout(resetPreloading, 2500);

					addClass(elem, lazySizesConfig.loadingClass);
					addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
				}

				if (isPicture) {
					forEach.call(parent.getElementsByTagName('source'), handleSources);
				}

				if (srcset) {
					elem.setAttribute('srcset', srcset);
				} else if (src && !isPicture) {
					if (regIframe.test(elem.nodeName)) {
						changeIframeSrc(elem, src);
					} else {
						elem.src = src;
					}
				}

				if (isImg && (srcset || isPicture)) {
					updatePolyfill(elem, { src: src });
				}
			}

			if (elem._lazyRace) {
				delete elem._lazyRace;
			}
			removeClass(elem, lazySizesConfig.lazyClass);

			rAF(function () {
				if (!firesLoad || elem.complete && elem.naturalWidth > 1) {
					if (firesLoad) {
						resetPreloading(event);
					} else {
						isLoading--;
					}
					switchLoadingClass(event);
				}
			}, true);
		});

		var unveilElement = function unveilElement(elem) {
			var detail;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesConfig.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if ((isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesConfig.errorClass) && hasClass(elem, lazySizesConfig.lazyClass)) {
				return;
			}

			detail = triggerEvent(elem, 'lazyunveilread').detail;

			if (isAuto) {
				autoSizer.updateElem(elem, true, elem.offsetWidth);
			}

			elem._lazyRace = true;
			isLoading++;

			lazyUnveil(elem, detail, isAuto, sizes, isImg);
		};

		var onload = function onload() {
			if (isCompleted) {
				return;
			}
			if (Date.now() - started < 999) {
				setTimeout(onload, 999);
				return;
			}
			var afterScroll = debounce(function () {
				lazySizesConfig.loadMode = 3;
				throttledCheckElements();
			});

			isCompleted = true;

			lazySizesConfig.loadMode = 3;

			throttledCheckElements();

			addEventListener('scroll', function () {
				if (lazySizesConfig.loadMode == 3) {
					lazySizesConfig.loadMode = 2;
				}
				afterScroll();
			}, true);
		};

		return {
			_: function _() {
				started = Date.now();

				lazysizes.elements = document.getElementsByClassName(lazySizesConfig.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass + ' ' + lazySizesConfig.preloadClass);

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				if (window.MutationObserver) {
					new MutationObserver(throttledCheckElements).observe(docElem, { childList: true, subtree: true, attributes: true });
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend', 'webkitAnimationEnd'].forEach(function (name) {
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if (/d$|^c/.test(document.readyState)) {
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				if (lazysizes.elements.length) {
					checkElements();
					rAF._lsFlush();
				} else {
					throttledCheckElements();
				}
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement
		};
	}();

	var autoSizer = function () {
		var autosizesElems;

		var sizeElement = rAFIt(function (elem, parent, event, width) {
			var sources, i, len;
			elem._lazysizesWidth = width;
			width += 'px';

			elem.setAttribute('sizes', width);

			if (regPicture.test(parent.nodeName || '')) {
				sources = parent.getElementsByTagName('source');
				for (i = 0, len = sources.length; i < len; i++) {
					sources[i].setAttribute('sizes', width);
				}
			}

			if (!event.detail.dataAttr) {
				updatePolyfill(elem, event.detail);
			}
		});
		var getSizeElement = function getSizeElement(elem, dataAttr, width) {
			var event;
			var parent = elem.parentNode;

			if (parent) {
				width = getWidth(elem, parent, width);
				event = triggerEvent(elem, 'lazybeforesizes', { width: width, dataAttr: !!dataAttr });

				if (!event.defaultPrevented) {
					width = event.detail.width;

					if (width && width !== elem._lazysizesWidth) {
						sizeElement(elem, parent, event, width);
					}
				}
			}
		};

		var updateElementsSizes = function updateElementsSizes() {
			var i;
			var len = autosizesElems.length;
			if (len) {
				i = 0;

				for (; i < len; i++) {
					getSizeElement(autosizesElems[i]);
				}
			}
		};

		var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

		return {
			_: function _() {
				autosizesElems = document.getElementsByClassName(lazySizesConfig.autosizesClass);
				addEventListener('resize', debouncedUpdateElementsSizes);
			},
			checkElems: debouncedUpdateElementsSizes,
			updateElem: getSizeElement
		};
	}();

	var init = function init() {
		if (!init.i) {
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	lazysizes = {
		cfg: lazySizesConfig,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth,
		rAF: rAF
	};

	return lazysizes;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/querystring-es3/decode.js":
/*!*********************************************************************************************!*\
  !*** /Users/silvioviscuso/Desktop/WEBIT/duemmetrade/node_modules/querystring-es3/decode.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function (qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr,
        vstr,
        k,
        v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

/***/ }),

/***/ "../../node_modules/querystring-es3/encode.js":
/*!*********************************************************************************************!*\
  !*** /Users/silvioviscuso/Desktop/WEBIT/duemmetrade/node_modules/querystring-es3/encode.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var stringifyPrimitive = function stringifyPrimitive(v) {
  switch (typeof v === 'undefined' ? 'undefined' : _typeof(v)) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function (obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
    return map(objectKeys(obj), function (k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function (v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);
  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map(xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

/***/ }),

/***/ "../../node_modules/querystring-es3/index.js":
/*!********************************************************************************************!*\
  !*** /Users/silvioviscuso/Desktop/WEBIT/duemmetrade/node_modules/querystring-es3/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "../../node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "../../node_modules/querystring-es3/encode.js");

/***/ }),

/***/ "../../node_modules/strip-ansi/index.js":
/*!***************************************************************************************!*\
  !*** /Users/silvioviscuso/Desktop/WEBIT/duemmetrade/node_modules/strip-ansi/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ansiRegex = __webpack_require__(/*! ansi-regex */ "../../node_modules/ansi-regex/index.js")();

module.exports = function (str) {
	return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
};

/***/ }),

/***/ "../../node_modules/webpack-hot-middleware/client-overlay.js":
/*!**************************************************!*\
  !*** (webpack)-hot-middleware/client-overlay.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*eslint-env browser*/

var clientOverlay = document.createElement('div');
clientOverlay.id = 'webpack-hot-middleware-clientOverlay';
var styles = {
  background: 'rgba(0,0,0,0.85)',
  color: '#E8E8E8',
  lineHeight: '1.2',
  whiteSpace: 'pre',
  fontFamily: 'Menlo, Consolas, monospace',
  fontSize: '13px',
  position: 'fixed',
  zIndex: 9999,
  padding: '10px',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  overflow: 'auto',
  dir: 'ltr',
  textAlign: 'left'
};

var ansiHTML = __webpack_require__(/*! ansi-html */ "../../node_modules/ansi-html/index.js");
var colors = {
  reset: ['transparent', 'transparent'],
  black: '181818',
  red: 'E36049',
  green: 'B3CB74',
  yellow: 'FFD080',
  blue: '7CAFC2',
  magenta: '7FACCA',
  cyan: 'C3C2EF',
  lightgrey: 'EBE7E3',
  darkgrey: '6D7891'
};

var Entities = __webpack_require__(/*! html-entities */ "../../node_modules/html-entities/index.js").AllHtmlEntities;
var entities = new Entities();

function showProblems(type, lines) {
  clientOverlay.innerHTML = '';
  lines.forEach(function (msg) {
    msg = ansiHTML(entities.encode(msg));
    var div = document.createElement('div');
    div.style.marginBottom = '26px';
    div.innerHTML = problemType(type) + ' in ' + msg;
    clientOverlay.appendChild(div);
  });
  if (document.body) {
    document.body.appendChild(clientOverlay);
  }
}

function clear() {
  if (document.body && clientOverlay.parentNode) {
    document.body.removeChild(clientOverlay);
  }
}

function problemType(type) {
  var problemColors = {
    errors: colors.red,
    warnings: colors.yellow
  };
  var color = problemColors[type] || colors.red;
  return '<span style="background-color:#' + color + '; color:#fff; padding:2px 4px; border-radius: 2px">' + type.slice(0, -1).toUpperCase() + '</span>';
}

module.exports = function (options) {
  for (var color in options.overlayColors) {
    if (color in colors) {
      colors[color] = options.overlayColors[color];
    }
    ansiHTML.setColors(colors);
  }

  for (var style in options.overlayStyles) {
    styles[style] = options.overlayStyles[style];
  }

  for (var key in styles) {
    clientOverlay.style[key] = styles[key];
  }

  return {
    showProblems: showProblems,
    clear: clear
  };
};

module.exports.clear = clear;
module.exports.showProblems = showProblems;

/***/ }),

/***/ "../../node_modules/webpack-hot-middleware/client.js?reload=true":
/*!******************************************************!*\
  !*** (webpack)-hot-middleware/client.js?reload=true ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__resourceQuery, module) {/*eslint-env browser*/
/*global __resourceQuery __webpack_public_path__*/

var options = {
  path: "/__webpack_hmr",
  timeout: 20 * 1000,
  overlay: true,
  reload: false,
  log: true,
  warn: true,
  name: '',
  autoConnect: true,
  overlayStyles: {},
  overlayWarnings: false,
  ansiColors: {}
};
if (true) {
  var querystring = __webpack_require__(/*! querystring */ "../../node_modules/querystring-es3/index.js");
  var overrides = querystring.parse(__resourceQuery.slice(1));
  setOverrides(overrides);
}

if (typeof window === 'undefined') {
  // do nothing
} else if (typeof window.EventSource === 'undefined') {
  console.warn("webpack-hot-middleware's client requires EventSource to work. " + "You should include a polyfill if you want to support this browser: " + "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools");
} else {
  if (options.autoConnect) {
    connect();
  }
}

/* istanbul ignore next */
function setOptionsAndConnect(overrides) {
  setOverrides(overrides);
  connect();
}

function setOverrides(overrides) {
  if (overrides.autoConnect) options.autoConnect = overrides.autoConnect == 'true';
  if (overrides.path) options.path = overrides.path;
  if (overrides.timeout) options.timeout = overrides.timeout;
  if (overrides.overlay) options.overlay = overrides.overlay !== 'false';
  if (overrides.reload) options.reload = overrides.reload !== 'false';
  if (overrides.noInfo && overrides.noInfo !== 'false') {
    options.log = false;
  }
  if (overrides.name) {
    options.name = overrides.name;
  }
  if (overrides.quiet && overrides.quiet !== 'false') {
    options.log = false;
    options.warn = false;
  }

  if (overrides.dynamicPublicPath) {
    options.path = __webpack_require__.p + options.path;
  }

  if (overrides.ansiColors) options.ansiColors = JSON.parse(overrides.ansiColors);
  if (overrides.overlayStyles) options.overlayStyles = JSON.parse(overrides.overlayStyles);

  if (overrides.overlayWarnings) {
    options.overlayWarnings = overrides.overlayWarnings == 'true';
  }
}

function EventSourceWrapper() {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log("[HMR] connected");
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();
    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}

function getEventSourceWrapper() {
  if (!window.__whmEventSourceWrapper) {
    window.__whmEventSourceWrapper = {};
  }
  if (!window.__whmEventSourceWrapper[options.path]) {
    // cache the wrapper for other entries loaded on
    // the same page with the same options.path
    window.__whmEventSourceWrapper[options.path] = EventSourceWrapper();
  }
  return window.__whmEventSourceWrapper[options.path];
}

function connect() {
  getEventSourceWrapper().addMessageListener(handleMessage);

  function handleMessage(event) {
    if (event.data == '\uD83D\uDC93') {
      return;
    }
    try {
      processMessage(JSON.parse(event.data));
    } catch (ex) {
      if (options.warn) {
        console.warn("Invalid HMR message: " + event.data + "\n" + ex);
      }
    }
  }
}

// the reporter needs to be a singleton on the page
// in case the client is being used by multiple bundles
// we only want to report once.
// all the errors will go to all clients
var singletonKey = '__webpack_hot_middleware_reporter__';
var reporter;
if (typeof window !== 'undefined') {
  if (!window[singletonKey]) {
    window[singletonKey] = createReporter();
  }
  reporter = window[singletonKey];
}

function createReporter() {
  var strip = __webpack_require__(/*! strip-ansi */ "../../node_modules/strip-ansi/index.js");

  var overlay;
  if (typeof document !== 'undefined' && options.overlay) {
    overlay = __webpack_require__(/*! ./client-overlay */ "../../node_modules/webpack-hot-middleware/client-overlay.js")({
      ansiColors: options.ansiColors,
      overlayStyles: options.overlayStyles
    });
  }

  var styles = {
    errors: "color: #ff0000;",
    warnings: "color: #999933;"
  };
  var previousProblems = null;
  function log(type, obj) {
    var newProblems = obj[type].map(function (msg) {
      return strip(msg);
    }).join('\n');
    if (previousProblems == newProblems) {
      return;
    } else {
      previousProblems = newProblems;
    }

    var style = styles[type];
    var name = obj.name ? "'" + obj.name + "' " : "";
    var title = "[HMR] bundle " + name + "has " + obj[type].length + " " + type;
    // NOTE: console.warn or console.error will print the stack trace
    // which isn't helpful here, so using console.log to escape it.
    if (console.group && console.groupEnd) {
      console.group("%c" + title, style);
      console.log("%c" + newProblems, style);
      console.groupEnd();
    } else {
      console.log("%c" + title + "\n\t%c" + newProblems.replace(/\n/g, "\n\t"), style + "font-weight: bold;", style + "font-weight: normal;");
    }
  }

  return {
    cleanProblemsCache: function cleanProblemsCache() {
      previousProblems = null;
    },
    problems: function problems(type, obj) {
      if (options.warn) {
        log(type, obj);
      }
      if (overlay) {
        if (options.overlayWarnings || type === 'errors') {
          overlay.showProblems(type, obj[type]);
          return false;
        }
        overlay.clear();
      }
      return true;
    },
    success: function success() {
      if (overlay) overlay.clear();
    },
    useCustomOverlay: function useCustomOverlay(customOverlay) {
      overlay = customOverlay;
    }
  };
}

var processUpdate = __webpack_require__(/*! ./process-update */ "../../node_modules/webpack-hot-middleware/process-update.js");

var customHandler;
var subscribeAllHandler;
function processMessage(obj) {
  switch (obj.action) {
    case "building":
      if (options.log) {
        console.log("[HMR] bundle " + (obj.name ? "'" + obj.name + "' " : "") + "rebuilding");
      }
      break;
    case "built":
      if (options.log) {
        console.log("[HMR] bundle " + (obj.name ? "'" + obj.name + "' " : "") + "rebuilt in " + obj.time + "ms");
      }
    // fall through
    case "sync":
      if (obj.name && options.name && obj.name !== options.name) {
        return;
      }
      var applyUpdate = true;
      if (obj.errors.length > 0) {
        if (reporter) reporter.problems('errors', obj);
        applyUpdate = false;
      } else if (obj.warnings.length > 0) {
        if (reporter) {
          var overlayShown = reporter.problems('warnings', obj);
          applyUpdate = overlayShown;
        }
      } else {
        if (reporter) {
          reporter.cleanProblemsCache();
          reporter.success();
        }
      }
      if (applyUpdate) {
        processUpdate(obj.hash, obj.modules, options);
      }
      break;
    default:
      if (customHandler) {
        customHandler(obj);
      }
  }

  if (subscribeAllHandler) {
    subscribeAllHandler(obj);
  }
}

if (module) {
  module.exports = {
    subscribeAll: function subscribeAll(handler) {
      subscribeAllHandler = handler;
    },
    subscribe: function subscribe(handler) {
      customHandler = handler;
    },
    useCustomOverlay: function useCustomOverlay(customOverlay) {
      if (reporter) reporter.useCustomOverlay(customOverlay);
    },
    setOptionsAndConnect: setOptionsAndConnect
  };
}
/* WEBPACK VAR INJECTION */}.call(this, "?reload=true", __webpack_require__(/*! ./../webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/webpack-hot-middleware/process-update.js":
/*!**************************************************!*\
  !*** (webpack)-hot-middleware/process-update.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Based heavily on https://github.com/webpack/webpack/blob/
 *  c0afdf9c6abc1dd70707c594e473802a566f7b6e/hot/only-dev-server.js
 * Original copyright Tobias Koppers @sokra (MIT license)
 */

/* global window __webpack_hash__ */

if (false) {}

var hmrDocsUrl = "https://webpack.js.org/concepts/hot-module-replacement/"; // eslint-disable-line max-len

var lastHash;
var failureStatuses = { abort: 1, fail: 1 };
var applyOptions = {
  ignoreUnaccepted: true,
  ignoreDeclined: true,
  ignoreErrored: true,
  onUnaccepted: function onUnaccepted(data) {
    console.warn("Ignored an update to unaccepted module " + data.chain.join(" -> "));
  },
  onDeclined: function onDeclined(data) {
    console.warn("Ignored an update to declined module " + data.chain.join(" -> "));
  },
  onErrored: function onErrored(data) {
    console.error(data.error);
    console.warn("Ignored an error while updating module " + data.moduleId + " (" + data.type + ")");
  }
};

function upToDate(hash) {
  if (hash) lastHash = hash;
  return lastHash == __webpack_require__.h();
}

module.exports = function (hash, moduleMap, options) {
  var reload = options.reload;
  if (!upToDate(hash) && module.hot.status() == "idle") {
    if (options.log) console.log("[HMR] Checking for updates on the server...");
    check();
  }

  function check() {
    var cb = function cb(err, updatedModules) {
      if (err) return handleError(err);

      if (!updatedModules) {
        if (options.warn) {
          console.warn("[HMR] Cannot find update (Full reload needed)");
          console.warn("[HMR] (Probably because of restarting the server)");
        }
        performReload();
        return null;
      }

      var applyCallback = function applyCallback(applyErr, renewedModules) {
        if (applyErr) return handleError(applyErr);

        if (!upToDate()) check();

        logUpdates(updatedModules, renewedModules);
      };

      var applyResult = module.hot.apply(applyOptions, applyCallback);
      // webpack 2 promise
      if (applyResult && applyResult.then) {
        // HotModuleReplacement.runtime.js refers to the result as `outdatedModules`
        applyResult.then(function (outdatedModules) {
          applyCallback(null, outdatedModules);
        });
        applyResult.catch(applyCallback);
      }
    };

    var result = module.hot.check(false, cb);
    // webpack 2 promise
    if (result && result.then) {
      result.then(function (updatedModules) {
        cb(null, updatedModules);
      });
      result.catch(cb);
    }
  }

  function logUpdates(updatedModules, renewedModules) {
    var unacceptedModules = updatedModules.filter(function (moduleId) {
      return renewedModules && renewedModules.indexOf(moduleId) < 0;
    });

    if (unacceptedModules.length > 0) {
      if (options.warn) {
        console.warn("[HMR] The following modules couldn't be hot updated: " + "(Full reload needed)\n" + "This is usually because the modules which have changed " + "(and their parents) do not know how to hot reload themselves. " + "See " + hmrDocsUrl + " for more details.");
        unacceptedModules.forEach(function (moduleId) {
          console.warn("[HMR]  - " + (moduleMap[moduleId] || moduleId));
        });
      }
      performReload();
      return;
    }

    if (options.log) {
      if (!renewedModules || renewedModules.length === 0) {
        console.log("[HMR] Nothing hot updated.");
      } else {
        console.log("[HMR] Updated modules:");
        renewedModules.forEach(function (moduleId) {
          console.log("[HMR]  - " + (moduleMap[moduleId] || moduleId));
        });
      }

      if (upToDate()) {
        console.log("[HMR] App is up to date.");
      }
    }
  }

  function handleError(err) {
    if (module.hot.status() in failureStatuses) {
      if (options.warn) {
        console.warn("[HMR] Cannot check for update (Full reload needed)");
        console.warn("[HMR] " + (err.stack || err.message));
      }
      performReload();
      return;
    }
    if (options.warn) {
      console.warn("[HMR] Update check failed: " + (err.stack || err.message));
    }
  }

  function performReload() {
    if (reload) {
      if (options.warn) console.warn("[HMR] Reloading page");
      window.location.reload();
    }
  }
};

/***/ }),

/***/ "../../node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lazysizes */ "../../node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_site_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/site-header */ "./modules/site-header.js");
/* harmony import */ var _modules_allclick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/allclick */ "./modules/allclick.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./modules/modal.js");
/* harmony import */ var _modules_formcontrol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/formcontrol */ "./modules/formcontrol.js");
/* harmony import */ var _modules_formcontrol__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_formcontrol__WEBPACK_IMPORTED_MODULE_4__);






_modules_site_header__WEBPACK_IMPORTED_MODULE_1__["default"].init();
_modules_allclick__WEBPACK_IMPORTED_MODULE_2__["default"].init();
_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"].init();
_modules_formcontrol__WEBPACK_IMPORTED_MODULE_4___default.a.init();

// dynamic imports - swipers
if (document.querySelectorAll('[data-swiper]').length > 0) {
  Promise.all(/*! import() | swipers */[__webpack_require__.e("vendors~swipers"), __webpack_require__.e("swipers")]).then(__webpack_require__.bind(null, /*! ./modules/swipers */ "./modules/swipers.js")).then(function (swipers) {
    swipers = swipers.default;

    if (document.querySelectorAll('[data-swiper="hero"]').length > 0) {
      var slider = Array.from(document.querySelectorAll('[data-swiper="hero"]'));
      slider.forEach(function (item) {
        swipers.initHeroSlider();
      });
    }
    if (document.querySelectorAll('[data-swiper="cards"]').length > 0) {
      var _slider = Array.from(document.querySelectorAll('[data-swiper="cards"]'));
      _slider.forEach(function (item) {
        swipers.initCardSlider();
      });
    }
    if (document.querySelectorAll('[data-swiper="image-carousel"]').length > 0) {
      var _slider2 = Array.from(document.querySelectorAll('[data-swiper="image-carousel"]'));
      _slider2.forEach(function (item) {
        swipers.initCarousel();
      });
    }
    if (document.querySelectorAll('[data-swiper="video-carousel"]').length > 0) {
      var _slider3 = Array.from(document.querySelectorAll('[data-swiper="video-carousel"]'));
      _slider3.forEach(function (item) {
        swipers.initVideogallery();
      });
    }
  });
}

/***/ }),

/***/ "./modules/allclick.js":
/*!*****************************!*\
  !*** ./modules/allclick.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var dom = {
  selector: '.js-allclick'
};

var allclick = function allclick(evt) {
  evt.preventDefault();
  var link = evt.target.closest(dom.selector).querySelector('a').getAttribute('href');
  location.href = link;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    document.addEventListener('click', function (evt) {
      if (evt.target.matches(dom.selector + ',' + dom.selector + ' *')) {
        allclick(evt);
      }
    });
  }
});

/***/ }),

/***/ "./modules/formcontrol.js":
/*!********************************!*\
  !*** ./modules/formcontrol.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function valida_email(txt) {
	var r = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

	if (r.test(txt)) return true;else return false;
}

function controllaForm(form_tipo) {
	var check = true;
	var output = '';

	switch (form_tipo) {

		case 'contatti':

			if (document.contatti.nome.value == '') {
				check = false;
				output += 'Inserisci il nome' + "\n";
			}

			if (document.contatti.cognome.value == '') {
				check = false;
				output += 'Inserisci il cognome' + "\n";
			}

			if (!valida_email(document.contatti.email.value)) {
				check = false;
				output += 'Inserisci un indirizzo e-mail corretto' + "\n";
			}

			if (document.contatti.privacy.checked == false) {
				check = false;
				output += 'Acconsenti al trattamento dei dati' + "\n\n";
			}

			if (!check) alert(output);
			return check;

			break;

	}
}

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var dom = {
  handles: '[data-modal]',
  modals: '.modal',
  catalogForm: '.webform-submission-catalog-form'
};

var closeModal = function closeModal(evt) {
  if (!evt.target.closest('.modal__content')) {
    evt.preventDefault();
    evt.target.closest(dom.modals).classList.remove('open');
  }
};

var closeModalAfterSubmit = function closeModalAfterSubmit(evt) {
  evt.target.closest(dom.modals).classList.remove('open');
};

var events = function events() {
  var handles = Array.from(document.querySelectorAll(dom.handles));
  var modals = Array.from(document.querySelectorAll(dom.modals));
  var catalogForm = document.querySelector(dom.catalogForm);

  handles.forEach(function (handle) {
    handle.addEventListener('click', function (evt) {
      var target = document.getElementById(evt.currentTarget.getAttribute('data-modal'));
      evt.preventDefault();
      target.classList.add('open');
    });
  });

  modals.forEach(function (modal) {
    modal.addEventListener('click', closeModal);
  });

  if (catalogForm) {
    catalogForm.addEventListener('submit', closeModalAfterSubmit);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init: events
});

/***/ }),

/***/ "./modules/site-header.js":
/*!********************************!*\
  !*** ./modules/site-header.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var dom = {
  siteHeader: '.site-header',
  navToggle: '.js-nav-toggle',
  siteNav: '.js-site-nav'
};

var toggleNav = function toggleNav(evt) {
  var nav = document.querySelector(dom.siteNav);

  evt.currentTarget.classList.toggle('close');
  nav.classList.toggle('open');
};

var setScrollClass = function setScrollClass(evt) {
  var siteHeader = document.querySelector(dom.siteHeader);

  if (window.pageYOffset > 200) {
    siteHeader.classList.add('scroll');
  } else {
    siteHeader.classList.remove('scroll');
  }
};

var events = function events() {
  var navToggle = document.querySelector(dom.navToggle);
  navToggle.addEventListener('click', toggleNav);
  window.addEventListener('scroll', setScrollClass);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    events();
  }
});

/***/ }),

/***/ 0:
/*!*****************************************************************!*\
  !*** multi webpack-hot-middleware/client?reload=true ./main.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! webpack-hot-middleware/client?reload=true */"../../node_modules/webpack-hot-middleware/client.js?reload=true");
module.exports = __webpack_require__(/*! ./main.js */"./main.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zaWx2aW92aXNjdXNvL0Rlc2t0b3AvV0VCSVQvZHVlbW1ldHJhZGUvbm9kZV9tb2R1bGVzL2Fuc2ktaHRtbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3NpbHZpb3Zpc2N1c28vRGVza3RvcC9XRUJJVC9kdWVtbWV0cmFkZS9ub2RlX21vZHVsZXMvYW5zaS1yZWdleC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3NpbHZpb3Zpc2N1c28vRGVza3RvcC9XRUJJVC9kdWVtbWV0cmFkZS9ub2RlX21vZHVsZXMvaHRtbC1lbnRpdGllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3NpbHZpb3Zpc2N1c28vRGVza3RvcC9XRUJJVC9kdWVtbWV0cmFkZS9ub2RlX21vZHVsZXMvaHRtbC1lbnRpdGllcy9saWIvaHRtbDQtZW50aXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zaWx2aW92aXNjdXNvL0Rlc2t0b3AvV0VCSVQvZHVlbW1ldHJhZGUvbm9kZV9tb2R1bGVzL2h0bWwtZW50aXRpZXMvbGliL2h0bWw1LWVudGl0aWVzLmpzIiwid2VicGFjazovLy8vVXNlcnMvc2lsdmlvdmlzY3Vzby9EZXNrdG9wL1dFQklUL2R1ZW1tZXRyYWRlL25vZGVfbW9kdWxlcy9odG1sLWVudGl0aWVzL2xpYi94bWwtZW50aXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zaWx2aW92aXNjdXNvL0Rlc2t0b3AvV0VCSVQvZHVlbW1ldHJhZGUvbm9kZV9tb2R1bGVzL2xhenlzaXplcy9sYXp5c2l6ZXMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zaWx2aW92aXNjdXNvL0Rlc2t0b3AvV0VCSVQvZHVlbW1ldHJhZGUvbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nLWVzMy9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zaWx2aW92aXNjdXNvL0Rlc2t0b3AvV0VCSVQvZHVlbW1ldHJhZGUvbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nLWVzMy9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zaWx2aW92aXNjdXNvL0Rlc2t0b3AvV0VCSVQvZHVlbW1ldHJhZGUvbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nLWVzMy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3NpbHZpb3Zpc2N1c28vRGVza3RvcC9XRUJJVC9kdWVtbWV0cmFkZS9ub2RlX21vZHVsZXMvc3RyaXAtYW5zaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spLWhvdC1taWRkbGV3YXJlL2NsaWVudC1vdmVybGF5LmpzIiwid2VicGFjazovLy8od2VicGFjayktaG90LW1pZGRsZXdhcmUvY2xpZW50LmpzIiwid2VicGFjazovLy8od2VicGFjayktaG90LW1pZGRsZXdhcmUvcHJvY2Vzcy11cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tYWluLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWxsY2xpY2suanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9mb3JtY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21vZGFsLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2l0ZS1oZWFkZXIuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImFuc2lIVE1MIiwiX3JlZ0FOU0kiLCJfZGVmQ29sb3JzIiwicmVzZXQiLCJibGFjayIsInJlZCIsImdyZWVuIiwieWVsbG93IiwiYmx1ZSIsIm1hZ2VudGEiLCJjeWFuIiwibGlnaHRncmV5IiwiZGFya2dyZXkiLCJfc3R5bGVzIiwiX29wZW5UYWdzIiwiX2Nsb3NlVGFncyIsImZvckVhY2giLCJuIiwidGV4dCIsInRlc3QiLCJhbnNpQ29kZXMiLCJyZXQiLCJyZXBsYWNlIiwibWF0Y2giLCJzZXEiLCJvdCIsImluZGV4T2YiLCJwb3AiLCJwdXNoIiwiY3QiLCJsIiwibGVuZ3RoIiwiQXJyYXkiLCJqb2luIiwic2V0Q29sb3JzIiwiY29sb3JzIiwiRXJyb3IiLCJfZmluYWxDb2xvcnMiLCJrZXkiLCJoZXgiLCJoYXNPd25Qcm9wZXJ0eSIsImlzQXJyYXkiLCJzb21lIiwiaCIsImRlZkhleENvbG9yIiwic2xpY2UiLCJfc2V0VGFncyIsInRhZ3MiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIm9wZW4iLCJjbG9zZSIsImNvZGUiLCJjb2xvciIsIm9yaUNvbG9yIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsIlhtbEVudGl0aWVzIiwicmVxdWlyZSIsIkh0bWw0RW50aXRpZXMiLCJIdG1sNUVudGl0aWVzIiwiQWxsSHRtbEVudGl0aWVzIiwiSFRNTF9BTFBIQSIsIkhUTUxfQ09ERVMiLCJhbHBoYUluZGV4IiwibnVtSW5kZXgiLCJpIiwiYSIsImMiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJwcm90b3R5cGUiLCJkZWNvZGUiLCJzdHIiLCJzIiwiZW50aXR5IiwiY2hyIiwiY2hhckF0IiwidG9Mb3dlckNhc2UiLCJzdWJzdHIiLCJpc05hTiIsImVuY29kZSIsInN0ckxlbmd0aCIsInJlc3VsdCIsImFscGhhIiwiY2hhckNvZGVBdCIsImVuY29kZU5vblVURiIsImNjIiwiZW5jb2RlTm9uQVNDSUkiLCJFTlRJVElFUyIsImNoYXJJbmRleCIsImNyZWF0ZUluZGV4ZXMiLCJjaGFySW5mbyIsIl9yZXN1bHRzIiwiZSIsImNoYXJzIiwiYWRkQ2hhciIsImNocjIiLCJBTFBIQV9JTkRFWCIsIkNIQVJfSU5ERVgiLCJDSEFSX1NfSU5ERVgiLCJzdHJMZW5naHQiLCJ3aW5kb3ciLCJmYWN0b3J5IiwibGF6eVNpemVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibGF6eXNpemVzIiwibGF6eVNpemVzQ29uZmlnIiwiZG9jRWxlbSIsImRvY3VtZW50RWxlbWVudCIsIkRhdGUiLCJzdXBwb3J0UGljdHVyZSIsIkhUTUxQaWN0dXJlRWxlbWVudCIsIl9hZGRFdmVudExpc3RlbmVyIiwiX2dldEF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInJlZ1BpY3R1cmUiLCJsb2FkRXZlbnRzIiwicmVnQ2xhc3NDYWNoZSIsImhhc0NsYXNzIiwiZWxlIiwiY2xzIiwiUmVnRXhwIiwiYWRkQ2xhc3MiLCJzZXRBdHRyaWJ1dGUiLCJ0cmltIiwicmVtb3ZlQ2xhc3MiLCJyZWciLCJhZGRSZW1vdmVMb2FkRXZlbnRzIiwiZG9tIiwiZm4iLCJhZGQiLCJhY3Rpb24iLCJldnQiLCJ0cmlnZ2VyRXZlbnQiLCJlbGVtIiwibmFtZSIsImRldGFpbCIsIm5vQnViYmxlcyIsIm5vQ2FuY2VsYWJsZSIsImV2ZW50IiwiY3JlYXRlRXZlbnQiLCJpbnN0YW5jZSIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJ1cGRhdGVQb2x5ZmlsbCIsImVsIiwiZnVsbCIsInBvbHlmaWxsIiwicGljdHVyZWZpbGwiLCJwZiIsInNyYyIsInJlZXZhbHVhdGUiLCJlbGVtZW50cyIsImdldENTUyIsInN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFdpZHRoIiwicGFyZW50Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsIm1pblNpemUiLCJfbGF6eXNpemVzV2lkdGgiLCJwYXJlbnROb2RlIiwickFGIiwicnVubmluZyIsIndhaXRpbmciLCJmaXJzdEZucyIsInNlY29uZEZucyIsImZucyIsInJ1biIsInJ1bkZucyIsInNoaWZ0IiwicmFmQmF0Y2giLCJxdWV1ZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGlkZGVuIiwiX2xzRmx1c2giLCJyQUZJdCIsInNpbXBsZSIsInRoYXQiLCJhcmdzIiwidGhyb3R0bGUiLCJsYXN0VGltZSIsImdEZWxheSIsInRocm90dGxlRGVsYXkiLCJySUNUaW1lb3V0IiwicmljVGltZW91dCIsIm5vdyIsImlkbGVDYWxsYmFjayIsInRpbWVvdXQiLCJpc1ByaW9yaXR5IiwiZGVsYXkiLCJkZWJvdW5jZSIsImZ1bmMiLCJ0aW1lc3RhbXAiLCJ3YWl0IiwibGF0ZXIiLCJsYXN0IiwicHJvcCIsImxhenlTaXplc0RlZmF1bHRzIiwibGF6eUNsYXNzIiwibG9hZGVkQ2xhc3MiLCJsb2FkaW5nQ2xhc3MiLCJwcmVsb2FkQ2xhc3MiLCJlcnJvckNsYXNzIiwiYXV0b3NpemVzQ2xhc3MiLCJzcmNBdHRyIiwic3Jjc2V0QXR0ciIsInNpemVzQXR0ciIsImN1c3RvbU1lZGlhIiwiaW5pdCIsImV4cEZhY3RvciIsImhGYWMiLCJsb2FkTW9kZSIsImxvYWRIaWRkZW4iLCJsYXp5c2l6ZXNDb25maWciLCJsb2FkZXIiLCJwcmVsb2FkRWxlbXMiLCJpc0NvbXBsZXRlZCIsInJlc2V0UHJlbG9hZGluZ1RpbWVyIiwic3RhcnRlZCIsImVMdlciLCJlbHZIIiwiZUx0b3AiLCJlTGxlZnQiLCJlTHJpZ2h0IiwiZUxib3R0b20iLCJpc0JvZHlIaWRkZW4iLCJyZWdJbWciLCJyZWdJZnJhbWUiLCJzdXBwb3J0U2Nyb2xsIiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwic2hyaW5rRXhwYW5kIiwiY3VycmVudEV4cGFuZCIsImlzTG9hZGluZyIsImxvd1J1bnMiLCJyZXNldFByZWxvYWRpbmciLCJ0YXJnZXQiLCJpc1Zpc2libGUiLCJib2R5IiwiaXNOZXN0ZWRWaXNpYmxlIiwiZWxlbUV4cGFuZCIsIm91dGVyUmVjdCIsInZpc2libGUiLCJvZmZzZXRQYXJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJjaGVja0VsZW1lbnRzIiwiZUxsZW4iLCJyZWN0IiwiYXV0b0xvYWRFbGVtIiwibG9hZGVkU29tZXRoaW5nIiwiZWxlbU5lZ2F0aXZlRXhwYW5kIiwiZWxlbUV4cGFuZFZhbCIsImJlZm9yZUV4cGFuZFZhbCIsImRlZmF1bHRFeHBhbmQiLCJwcmVsb2FkRXhwYW5kIiwibGF6eWxvYWRFbGVtcyIsImV4cGFuZCIsImNsaWVudEhlaWdodCIsImNsaWVudFdpZHRoIiwiX2xhenlSYWNlIiwidW52ZWlsRWxlbWVudCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInByZWxvYWRBZnRlckxvYWQiLCJ0aHJvdHRsZWRDaGVja0VsZW1lbnRzIiwic3dpdGNoTG9hZGluZ0NsYXNzIiwicmFmU3dpdGNoTG9hZGluZ0NsYXNzIiwicmFmZWRTd2l0Y2hMb2FkaW5nQ2xhc3MiLCJjaGFuZ2VJZnJhbWVTcmMiLCJjb250ZW50V2luZG93IiwibG9jYXRpb24iLCJoYW5kbGVTb3VyY2VzIiwic291cmNlIiwic291cmNlU3Jjc2V0IiwibGF6eVVudmVpbCIsImlzQXV0byIsInNpemVzIiwiaXNJbWciLCJzcmNzZXQiLCJpc1BpY3R1cmUiLCJmaXJlc0xvYWQiLCJkZWZhdWx0UHJldmVudGVkIiwibm9kZU5hbWUiLCJjbGVhclRpbWVvdXQiLCJjYWxsIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjb21wbGV0ZSIsIm5hdHVyYWxXaWR0aCIsImF1dG9TaXplciIsInVwZGF0ZUVsZW0iLCJvbmxvYWQiLCJhZnRlclNjcm9sbCIsIl8iLCJNdXRhdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJhdHRyaWJ1dGVzIiwic2V0SW50ZXJ2YWwiLCJyZWFkeVN0YXRlIiwiY2hlY2tFbGVtcyIsInVudmVpbCIsImF1dG9zaXplc0VsZW1zIiwic2l6ZUVsZW1lbnQiLCJzb3VyY2VzIiwibGVuIiwiZGF0YUF0dHIiLCJnZXRTaXplRWxlbWVudCIsInVwZGF0ZUVsZW1lbnRzU2l6ZXMiLCJkZWJvdW5jZWRVcGRhdGVFbGVtZW50c1NpemVzIiwiY2ZnIiwidVAiLCJhQyIsInJDIiwiaEMiLCJmaXJlIiwiZ1ciLCJvYmoiLCJxcyIsInNlcCIsImVxIiwib3B0aW9ucyIsInJlZ2V4cCIsInNwbGl0IiwibWF4S2V5cyIsIngiLCJpZHgiLCJrc3RyIiwidnN0ciIsImsiLCJ2IiwiZGVjb2RlVVJJQ29tcG9uZW50IiwieHMiLCJzdHJpbmdpZnlQcmltaXRpdmUiLCJpc0Zpbml0ZSIsInVuZGVmaW5lZCIsIm1hcCIsIm9iamVjdEtleXMiLCJrcyIsImVuY29kZVVSSUNvbXBvbmVudCIsImYiLCJyZXMiLCJrZXlzIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJhbnNpUmVnZXgiLCJjbGllbnRPdmVybGF5IiwiY3JlYXRlRWxlbWVudCIsImlkIiwic3R5bGVzIiwiYmFja2dyb3VuZCIsImxpbmVIZWlnaHQiLCJ3aGl0ZVNwYWNlIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJwYWRkaW5nIiwib3ZlcmZsb3ciLCJkaXIiLCJ0ZXh0QWxpZ24iLCJFbnRpdGllcyIsImVudGl0aWVzIiwic2hvd1Byb2JsZW1zIiwidHlwZSIsImxpbmVzIiwiaW5uZXJIVE1MIiwibXNnIiwiZGl2IiwibWFyZ2luQm90dG9tIiwicHJvYmxlbVR5cGUiLCJhcHBlbmRDaGlsZCIsImNsZWFyIiwicmVtb3ZlQ2hpbGQiLCJwcm9ibGVtQ29sb3JzIiwiZXJyb3JzIiwid2FybmluZ3MiLCJ0b1VwcGVyQ2FzZSIsIm92ZXJsYXlDb2xvcnMiLCJvdmVybGF5U3R5bGVzIiwicGF0aCIsIm92ZXJsYXkiLCJyZWxvYWQiLCJsb2ciLCJ3YXJuIiwiYXV0b0Nvbm5lY3QiLCJvdmVybGF5V2FybmluZ3MiLCJhbnNpQ29sb3JzIiwiX19yZXNvdXJjZVF1ZXJ5IiwicXVlcnlzdHJpbmciLCJvdmVycmlkZXMiLCJzZXRPdmVycmlkZXMiLCJFdmVudFNvdXJjZSIsImNvbnNvbGUiLCJjb25uZWN0Iiwic2V0T3B0aW9uc0FuZENvbm5lY3QiLCJub0luZm8iLCJxdWlldCIsImR5bmFtaWNQdWJsaWNQYXRoIiwiX193ZWJwYWNrX3B1YmxpY19wYXRoX18iLCJKU09OIiwiRXZlbnRTb3VyY2VXcmFwcGVyIiwibGFzdEFjdGl2aXR5IiwibGlzdGVuZXJzIiwidGltZXIiLCJoYW5kbGVEaXNjb25uZWN0Iiwib25vcGVuIiwiaGFuZGxlT25saW5lIiwib25lcnJvciIsIm9ubWVzc2FnZSIsImhhbmRsZU1lc3NhZ2UiLCJjbGVhckludGVydmFsIiwiYWRkTWVzc2FnZUxpc3RlbmVyIiwiZ2V0RXZlbnRTb3VyY2VXcmFwcGVyIiwiX193aG1FdmVudFNvdXJjZVdyYXBwZXIiLCJkYXRhIiwicHJvY2Vzc01lc3NhZ2UiLCJleCIsInNpbmdsZXRvbktleSIsInJlcG9ydGVyIiwiY3JlYXRlUmVwb3J0ZXIiLCJzdHJpcCIsInByZXZpb3VzUHJvYmxlbXMiLCJuZXdQcm9ibGVtcyIsInRpdGxlIiwiZ3JvdXAiLCJncm91cEVuZCIsImNsZWFuUHJvYmxlbXNDYWNoZSIsInByb2JsZW1zIiwic3VjY2VzcyIsInVzZUN1c3RvbU92ZXJsYXkiLCJjdXN0b21PdmVybGF5IiwicHJvY2Vzc1VwZGF0ZSIsImN1c3RvbUhhbmRsZXIiLCJzdWJzY3JpYmVBbGxIYW5kbGVyIiwidGltZSIsImFwcGx5VXBkYXRlIiwib3ZlcmxheVNob3duIiwiaGFzaCIsIm1vZHVsZXMiLCJzdWJzY3JpYmVBbGwiLCJoYW5kbGVyIiwic3Vic2NyaWJlIiwiaG1yRG9jc1VybCIsImxhc3RIYXNoIiwiZmFpbHVyZVN0YXR1c2VzIiwiYWJvcnQiLCJmYWlsIiwiYXBwbHlPcHRpb25zIiwiaWdub3JlVW5hY2NlcHRlZCIsImlnbm9yZURlY2xpbmVkIiwiaWdub3JlRXJyb3JlZCIsIm9uVW5hY2NlcHRlZCIsImNoYWluIiwib25EZWNsaW5lZCIsIm9uRXJyb3JlZCIsImVycm9yIiwibW9kdWxlSWQiLCJ1cFRvRGF0ZSIsIl9fd2VicGFja19oYXNoX18iLCJtb2R1bGVNYXAiLCJob3QiLCJzdGF0dXMiLCJjaGVjayIsImNiIiwiZXJyIiwidXBkYXRlZE1vZHVsZXMiLCJoYW5kbGVFcnJvciIsInBlcmZvcm1SZWxvYWQiLCJhcHBseUNhbGxiYWNrIiwiYXBwbHlFcnIiLCJyZW5ld2VkTW9kdWxlcyIsImxvZ1VwZGF0ZXMiLCJhcHBseVJlc3VsdCIsInRoZW4iLCJvdXRkYXRlZE1vZHVsZXMiLCJjYXRjaCIsInVuYWNjZXB0ZWRNb2R1bGVzIiwiZmlsdGVyIiwic3RhY2siLCJtZXNzYWdlIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJjaGlsZHJlbiIsImVudW1lcmFibGUiLCJzaXRlSGVhZGVyIiwiYWxsY2xpY2siLCJtb2RhbCIsImZvcm1jb250cm9sIiwicXVlcnlTZWxlY3RvckFsbCIsInN3aXBlcnMiLCJkZWZhdWx0Iiwic2xpZGVyIiwiZnJvbSIsIml0ZW0iLCJpbml0SGVyb1NsaWRlciIsImluaXRDYXJkU2xpZGVyIiwiaW5pdENhcm91c2VsIiwiaW5pdFZpZGVvZ2FsbGVyeSIsInNlbGVjdG9yIiwicHJldmVudERlZmF1bHQiLCJsaW5rIiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJocmVmIiwibWF0Y2hlcyIsInZhbGlkYV9lbWFpbCIsInR4dCIsInIiLCJjb250cm9sbGFGb3JtIiwiZm9ybV90aXBvIiwib3V0cHV0IiwiY29udGF0dGkiLCJub21lIiwidmFsdWUiLCJjb2dub21lIiwiZW1haWwiLCJwcml2YWN5IiwiY2hlY2tlZCIsImFsZXJ0IiwiaGFuZGxlcyIsIm1vZGFscyIsImNhdGFsb2dGb3JtIiwiY2xvc2VNb2RhbCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImNsb3NlTW9kYWxBZnRlclN1Ym1pdCIsImV2ZW50cyIsImhhbmRsZSIsImdldEVsZW1lbnRCeUlkIiwiY3VycmVudFRhcmdldCIsIm5hdlRvZ2dsZSIsInNpdGVOYXYiLCJ0b2dnbGVOYXYiLCJuYXYiLCJ0b2dnbGUiLCJzZXRTY3JvbGxDbGFzcyIsInBhZ2VZT2Zmc2V0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBNkI7QUFDN0IscUNBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw2QkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGFBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsYUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQWtCLDhCQUE4QjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsS0FBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQixZQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHVCQUFlLDRCQUE0QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUFlLDRCQUE0QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLHVDQUF1QztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQix1Q0FBdUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLGdCQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBYyx3Q0FBd0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0EsaURBQXlDLHdEQUF3RDtBQUNqRzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EseUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQXdCLGtDQUFrQztBQUMxRCxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0Esa0RBQTBDLG9CQUFvQixXQUFXOztBQUV6RTtBQUNBLDhDQUFzQyx1QkFBdUI7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQWdCLHVCQUF1QjtBQUN2Qzs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3A0QkE7Ozs7QUFFQUEsT0FBT0MsT0FBUCxHQUFpQkMsUUFBakI7O0FBRUE7QUFDQSxJQUFJQyxXQUFXLHNGQUFmOztBQUVBLElBQUlDLGFBQWE7QUFDZkMsU0FBTyxDQUFDLEtBQUQsRUFBUSxLQUFSLENBRFEsRUFDUTtBQUN2QkMsU0FBTyxLQUZRO0FBR2ZDLE9BQUssUUFIVTtBQUlmQyxTQUFPLFFBSlE7QUFLZkMsVUFBUSxRQUxPO0FBTWZDLFFBQU0sUUFOUztBQU9mQyxXQUFTLFFBUE07QUFRZkMsUUFBTSxRQVJTO0FBU2ZDLGFBQVcsUUFUSTtBQVVmQyxZQUFVO0FBVkssQ0FBakI7QUFZQSxJQUFJQyxVQUFVO0FBQ1osTUFBSSxPQURRO0FBRVosTUFBSSxLQUZRO0FBR1osTUFBSSxPQUhRO0FBSVosTUFBSSxRQUpRO0FBS1osTUFBSSxNQUxRO0FBTVosTUFBSSxTQU5RO0FBT1osTUFBSSxNQVBRO0FBUVosTUFBSTtBQVJRLENBQWQ7QUFVQSxJQUFJQyxZQUFZO0FBQ2QsT0FBSyxrQkFEUyxFQUNXO0FBQ3pCLE9BQUssYUFGUyxFQUVNO0FBQ3BCLE9BQUssS0FIUyxFQUdGO0FBQ1osT0FBSyxLQUpTLEVBSUY7QUFDWixPQUFLLGNBTFMsRUFLTztBQUNyQixPQUFLLE9BTlMsQ0FNRDtBQU5DLENBQWhCO0FBUUEsSUFBSUMsYUFBYTtBQUNmLFFBQU0sTUFEUyxFQUNEO0FBQ2QsUUFBTSxNQUZTLEVBRUQ7QUFDZCxRQUFNLFFBSFMsQ0FHQTtBQUhBLENBQWpCLENBTUMsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLEVBQTRCQyxPQUE1QixDQUFvQyxVQUFVQyxDQUFWLEVBQWE7QUFDaERGLGFBQVdFLENBQVgsSUFBZ0IsU0FBaEI7QUFDRCxDQUZBOztBQUlEOzs7OztBQUtBLFNBQVNqQixRQUFULENBQW1Ca0IsSUFBbkIsRUFBeUI7QUFDdkI7QUFDQSxNQUFJLENBQUNqQixTQUFTa0IsSUFBVCxDQUFjRCxJQUFkLENBQUwsRUFBMEI7QUFDeEIsV0FBT0EsSUFBUDtBQUNEOztBQUVEO0FBQ0EsTUFBSUUsWUFBWSxFQUFoQjtBQUNBO0FBQ0EsTUFBSUMsTUFBTUgsS0FBS0ksT0FBTCxDQUFhLGdCQUFiLEVBQStCLFVBQVVDLEtBQVYsRUFBaUJDLEdBQWpCLEVBQXNCO0FBQzdELFFBQUlDLEtBQUtYLFVBQVVVLEdBQVYsQ0FBVDtBQUNBLFFBQUlDLEVBQUosRUFBUTtBQUNOO0FBQ0EsVUFBSSxDQUFDLENBQUMsQ0FBQ0wsVUFBVU0sT0FBVixDQUFrQkYsR0FBbEIsQ0FBUCxFQUErQjtBQUFFO0FBQy9CSixrQkFBVU8sR0FBVjtBQUNBLGVBQU8sU0FBUDtBQUNEO0FBQ0Q7QUFDQVAsZ0JBQVVRLElBQVYsQ0FBZUosR0FBZjtBQUNBLGFBQU9DLEdBQUcsQ0FBSCxNQUFVLEdBQVYsR0FBZ0JBLEVBQWhCLEdBQXFCLGtCQUFrQkEsRUFBbEIsR0FBdUIsS0FBbkQ7QUFDRDs7QUFFRCxRQUFJSSxLQUFLZCxXQUFXUyxHQUFYLENBQVQ7QUFDQSxRQUFJSyxFQUFKLEVBQVE7QUFDTjtBQUNBVCxnQkFBVU8sR0FBVjtBQUNBLGFBQU9FLEVBQVA7QUFDRDtBQUNELFdBQU8sRUFBUDtBQUNELEdBcEJTLENBQVY7O0FBc0JBO0FBQ0EsTUFBSUMsSUFBSVYsVUFBVVcsTUFBbEIsQ0FDRUQsSUFBSSxDQUFMLEtBQVlULE9BQU9XLE1BQU1GLElBQUksQ0FBVixFQUFhRyxJQUFiLENBQWtCLFNBQWxCLENBQW5COztBQUVELFNBQU9aLEdBQVA7QUFDRDs7QUFFRDs7OztBQUlBckIsU0FBU2tDLFNBQVQsR0FBcUIsVUFBVUMsTUFBVixFQUFrQjtBQUNyQyxNQUFJLFFBQU9BLE1BQVAseUNBQU9BLE1BQVAsT0FBa0IsUUFBdEIsRUFBZ0M7QUFDOUIsVUFBTSxJQUFJQyxLQUFKLENBQVUsdUNBQVYsQ0FBTjtBQUNEOztBQUVELE1BQUlDLGVBQWUsRUFBbkI7QUFDQSxPQUFLLElBQUlDLEdBQVQsSUFBZ0JwQyxVQUFoQixFQUE0QjtBQUMxQixRQUFJcUMsTUFBTUosT0FBT0ssY0FBUCxDQUFzQkYsR0FBdEIsSUFBNkJILE9BQU9HLEdBQVAsQ0FBN0IsR0FBMkMsSUFBckQ7QUFDQSxRQUFJLENBQUNDLEdBQUwsRUFBVTtBQUNSRixtQkFBYUMsR0FBYixJQUFvQnBDLFdBQVdvQyxHQUFYLENBQXBCO0FBQ0E7QUFDRDtBQUNELFFBQUksWUFBWUEsR0FBaEIsRUFBcUI7QUFDbkIsVUFBSSxPQUFPQyxHQUFQLEtBQWUsUUFBbkIsRUFBNkI7QUFDM0JBLGNBQU0sQ0FBQ0EsR0FBRCxDQUFOO0FBQ0Q7QUFDRCxVQUFJLENBQUNQLE1BQU1TLE9BQU4sQ0FBY0YsR0FBZCxDQUFELElBQXVCQSxJQUFJUixNQUFKLEtBQWUsQ0FBdEMsSUFBMkNRLElBQUlHLElBQUosQ0FBUyxVQUFVQyxDQUFWLEVBQWE7QUFDbkUsZUFBTyxPQUFPQSxDQUFQLEtBQWEsUUFBcEI7QUFDRCxPQUY4QyxDQUEvQyxFQUVJO0FBQ0YsY0FBTSxJQUFJUCxLQUFKLENBQVUsbUJBQW1CRSxHQUFuQixHQUF5QixvRkFBbkMsQ0FBTjtBQUNEO0FBQ0QsVUFBSU0sY0FBYzFDLFdBQVdvQyxHQUFYLENBQWxCO0FBQ0EsVUFBSSxDQUFDQyxJQUFJLENBQUosQ0FBTCxFQUFhO0FBQ1hBLFlBQUksQ0FBSixJQUFTSyxZQUFZLENBQVosQ0FBVDtBQUNEO0FBQ0QsVUFBSUwsSUFBSVIsTUFBSixLQUFlLENBQWYsSUFBb0IsQ0FBQ1EsSUFBSSxDQUFKLENBQXpCLEVBQWlDO0FBQy9CQSxjQUFNLENBQUNBLElBQUksQ0FBSixDQUFELENBQU47QUFDQUEsWUFBSVgsSUFBSixDQUFTZ0IsWUFBWSxDQUFaLENBQVQ7QUFDRDs7QUFFREwsWUFBTUEsSUFBSU0sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBQU47QUFDRCxLQW5CRCxNQW1CTyxJQUFJLE9BQU9OLEdBQVAsS0FBZSxRQUFuQixFQUE2QjtBQUNsQyxZQUFNLElBQUlILEtBQUosQ0FBVSxtQkFBbUJFLEdBQW5CLEdBQXlCLCtDQUFuQyxDQUFOO0FBQ0Q7QUFDREQsaUJBQWFDLEdBQWIsSUFBb0JDLEdBQXBCO0FBQ0Q7QUFDRE8sV0FBU1QsWUFBVDtBQUNELENBckNEOztBQXVDQTs7O0FBR0FyQyxTQUFTRyxLQUFULEdBQWlCLFlBQVk7QUFDM0IyQyxXQUFTNUMsVUFBVDtBQUNELENBRkQ7O0FBSUE7Ozs7QUFJQUYsU0FBUytDLElBQVQsR0FBZ0IsRUFBaEI7O0FBRUEsSUFBSUMsT0FBT0MsY0FBWCxFQUEyQjtBQUN6QkQsU0FBT0MsY0FBUCxDQUFzQmpELFNBQVMrQyxJQUEvQixFQUFxQyxNQUFyQyxFQUE2QztBQUMzQ0csU0FBSyxlQUFZO0FBQUUsYUFBT3BDLFNBQVA7QUFBa0I7QUFETSxHQUE3QztBQUdBa0MsU0FBT0MsY0FBUCxDQUFzQmpELFNBQVMrQyxJQUEvQixFQUFxQyxPQUFyQyxFQUE4QztBQUM1Q0csU0FBSyxlQUFZO0FBQUUsYUFBT25DLFVBQVA7QUFBbUI7QUFETSxHQUE5QztBQUdELENBUEQsTUFPTztBQUNMZixXQUFTK0MsSUFBVCxDQUFjSSxJQUFkLEdBQXFCckMsU0FBckI7QUFDQWQsV0FBUytDLElBQVQsQ0FBY0ssS0FBZCxHQUFzQnJDLFVBQXRCO0FBQ0Q7O0FBRUQsU0FBUytCLFFBQVQsQ0FBbUJYLE1BQW5CLEVBQTJCO0FBQ3pCO0FBQ0FyQixZQUFVLEdBQVYsSUFBaUIseUNBQXlDcUIsT0FBT2hDLEtBQVAsQ0FBYSxDQUFiLENBQXpDLEdBQTJELGVBQTNELEdBQTZFZ0MsT0FBT2hDLEtBQVAsQ0FBYSxDQUFiLENBQTlGO0FBQ0E7QUFDQVcsWUFBVSxHQUFWLElBQWlCLFlBQVlxQixPQUFPaEMsS0FBUCxDQUFhLENBQWIsQ0FBWixHQUE4QixlQUE5QixHQUFnRGdDLE9BQU9oQyxLQUFQLENBQWEsQ0FBYixDQUFqRTtBQUNBO0FBQ0FXLFlBQVUsSUFBVixJQUFrQixZQUFZcUIsT0FBT3ZCLFFBQXJDOztBQUVBLE9BQUssSUFBSXlDLElBQVQsSUFBaUJ4QyxPQUFqQixFQUEwQjtBQUN4QixRQUFJeUMsUUFBUXpDLFFBQVF3QyxJQUFSLENBQVo7QUFDQSxRQUFJRSxXQUFXcEIsT0FBT21CLEtBQVAsS0FBaUIsS0FBaEM7QUFDQXhDLGNBQVV1QyxJQUFWLElBQWtCLFlBQVlFLFFBQTlCO0FBQ0FGLFdBQU9HLFNBQVNILElBQVQsQ0FBUDtBQUNBdkMsY0FBVSxDQUFDdUMsT0FBTyxFQUFSLEVBQVlJLFFBQVosRUFBVixJQUFvQyxpQkFBaUJGLFFBQXJEO0FBQ0Q7QUFDRjs7QUFFRHZELFNBQVNHLEtBQVQsRzs7Ozs7Ozs7Ozs7O0FDL0thOztBQUNiTCxPQUFPQyxPQUFQLEdBQWlCLFlBQVk7QUFDNUIsUUFBTztBQUFQO0FBQ0EsQ0FGRCxDOzs7Ozs7Ozs7OztBQ0RBRCxPQUFPQyxPQUFQLEdBQWlCO0FBQ2YyRCxlQUFhQyxtQkFBT0EsQ0FBQyxtRkFBUixDQURFO0FBRWZDLGlCQUFlRCxtQkFBT0EsQ0FBQyx1RkFBUixDQUZBO0FBR2ZFLGlCQUFlRixtQkFBT0EsQ0FBQyx1RkFBUixDQUhBO0FBSWZHLG1CQUFpQkgsbUJBQU9BLENBQUMsdUZBQVI7QUFKRixDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLElBQUlJLGFBQWEsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixPQUFqQixFQUEwQixNQUExQixFQUFrQyxPQUFsQyxFQUEyQyxRQUEzQyxFQUFxRCxLQUFyRCxFQUE0RCxRQUE1RCxFQUFzRSxNQUF0RSxFQUE4RSxLQUE5RSxFQUFxRixNQUFyRixFQUE2RixNQUE3RixFQUFxRyxPQUFyRyxFQUE4RyxLQUE5RyxFQUFxSCxLQUFySCxFQUE0SCxLQUE1SCxFQUFtSSxNQUFuSSxFQUEySSxLQUEzSSxFQUFrSixRQUFsSixFQUE0SixNQUE1SixFQUFvSyxNQUFwSyxFQUE0SyxPQUE1SyxFQUFxTCxPQUFyTCxFQUE4TCxNQUE5TCxFQUFzTSxRQUF0TSxFQUFnTixPQUFoTixFQUF5TixNQUF6TixFQUFpTyxNQUFqTyxFQUF5TyxPQUF6TyxFQUFrUCxRQUFsUCxFQUE0UCxRQUE1UCxFQUFzUSxRQUF0USxFQUFnUixRQUFoUixFQUEwUixRQUExUixFQUFvUyxRQUFwUyxFQUE4UyxPQUE5UyxFQUF1VCxRQUF2VCxFQUFpVSxNQUFqVSxFQUF5VSxPQUF6VSxFQUFrVixPQUFsVixFQUEyVixRQUEzVixFQUFxVyxRQUFyVyxFQUErVyxRQUEvVyxFQUF5WCxPQUF6WCxFQUFrWSxNQUFsWSxFQUEwWSxRQUExWSxFQUFvWixRQUFwWixFQUE4WixPQUE5WixFQUF1YSxNQUF2YSxFQUErYSxLQUEvYSxFQUFzYixRQUF0YixFQUFnYyxRQUFoYyxFQUEwYyxRQUExYyxFQUFvZCxPQUFwZCxFQUE2ZCxRQUE3ZCxFQUF1ZSxNQUF2ZSxFQUErZSxPQUEvZSxFQUF3ZixRQUF4ZixFQUFrZ0IsUUFBbGdCLEVBQTRnQixRQUE1Z0IsRUFBc2hCLE9BQXRoQixFQUEraEIsTUFBL2hCLEVBQXVpQixRQUF2aUIsRUFBaWpCLE9BQWpqQixFQUEwakIsT0FBMWpCLEVBQW1rQixRQUFua0IsRUFBNmtCLFFBQTdrQixFQUF1bEIsT0FBdmxCLEVBQWdtQixRQUFobUIsRUFBMG1CLE1BQTFtQixFQUFrbkIsT0FBbG5CLEVBQTJuQixPQUEzbkIsRUFBb29CLFFBQXBvQixFQUE4b0IsUUFBOW9CLEVBQXdwQixRQUF4cEIsRUFBa3FCLE9BQWxxQixFQUEycUIsTUFBM3FCLEVBQW1yQixRQUFuckIsRUFBNnJCLFFBQTdyQixFQUF1c0IsT0FBdnNCLEVBQWd0QixNQUFodEIsRUFBd3RCLEtBQXh0QixFQUErdEIsUUFBL3RCLEVBQXl1QixRQUF6dUIsRUFBbXZCLFFBQW52QixFQUE2dkIsT0FBN3ZCLEVBQXN3QixRQUF0d0IsRUFBZ3hCLE1BQWh4QixFQUF3eEIsUUFBeHhCLEVBQWt5QixRQUFseUIsRUFBNHlCLFFBQTV5QixFQUFzekIsUUFBdHpCLEVBQWcwQixPQUFoMEIsRUFBeTBCLE1BQXowQixFQUFpMUIsUUFBajFCLEVBQTIxQixPQUEzMUIsRUFBbzJCLE1BQXAyQixFQUE0MkIsTUFBNTJCLEVBQW8zQixLQUFwM0IsRUFBMjNCLElBQTMzQixFQUFpNEIsSUFBajRCLEVBQXU0QixPQUF2NEIsRUFBZzVCLE9BQWg1QixFQUF5NUIsUUFBejVCLEVBQW02QixRQUFuNkIsRUFBNjZCLE1BQTc2QixFQUFxN0IsTUFBcjdCLEVBQTY3QixPQUE3N0IsRUFBczhCLE1BQXQ4QixFQUE4OEIsTUFBOThCLEVBQXM5QixRQUF0OUIsRUFBZytCLE1BQWgrQixFQUF3K0IsS0FBeCtCLEVBQSsrQixLQUEvK0IsRUFBcy9CLEtBQXQvQixFQUE2L0IsT0FBNy9CLEVBQXNnQyxPQUF0Z0MsRUFBK2dDLE9BQS9nQyxFQUF3aEMsT0FBeGhDLEVBQWlpQyxPQUFqaUMsRUFBMGlDLE9BQTFpQyxFQUFtakMsT0FBbmpDLEVBQTRqQyxPQUE1akMsRUFBcWtDLFFBQXJrQyxFQUEra0MsUUFBL2tDLEVBQXlsQyxRQUF6bEMsRUFBbW1DLFFBQW5tQyxFQUE2bUMsUUFBN21DLEVBQXVuQyxNQUF2bkMsRUFBK25DLE1BQS9uQyxFQUF1b0MsT0FBdm9DLEVBQWdwQyxNQUFocEMsRUFBd3BDLE9BQXhwQyxFQUFpcUMsT0FBanFDLEVBQTBxQyxTQUExcUMsRUFBcXJDLE1BQXJyQyxFQUE2ckMsS0FBN3JDLEVBQW9zQyxPQUFwc0MsRUFBNnNDLE1BQTdzQyxFQUFxdEMsT0FBcnRDLEVBQTh0QyxRQUE5dEMsRUFBd3VDLElBQXh1QyxFQUE4dUMsSUFBOXVDLEVBQW92QyxJQUFwdkMsRUFBMHZDLFNBQTF2QyxFQUFxd0MsSUFBcndDLEVBQTJ3QyxLQUEzd0MsRUFBa3hDLE9BQWx4QyxFQUEyeEMsS0FBM3hDLEVBQWt5QyxTQUFseUMsRUFBNnlDLEtBQTd5QyxFQUFvekMsS0FBcHpDLEVBQTJ6QyxLQUEzekMsRUFBazBDLE9BQWwwQyxFQUEyMEMsT0FBMzBDLEVBQW8xQyxNQUFwMUMsRUFBNDFDLE9BQTUxQyxFQUFxMkMsT0FBcjJDLEVBQTgyQyxTQUE5MkMsRUFBeTNDLE1BQXozQyxFQUFpNEMsS0FBajRDLEVBQXc0QyxPQUF4NEMsRUFBaTVDLE1BQWo1QyxFQUF5NUMsT0FBejVDLEVBQWs2QyxRQUFsNkMsRUFBNDZDLElBQTU2QyxFQUFrN0MsSUFBbDdDLEVBQXc3QyxJQUF4N0MsRUFBODdDLFNBQTk3QyxFQUF5OEMsSUFBejhDLEVBQSs4QyxLQUEvOEMsRUFBczlDLFFBQXQ5QyxFQUFnK0MsT0FBaCtDLEVBQXkrQyxLQUF6K0MsRUFBZy9DLFNBQWgvQyxFQUEyL0MsS0FBMy9DLEVBQWtnRCxLQUFsZ0QsRUFBeWdELEtBQXpnRCxFQUFnaEQsT0FBaGhELEVBQXloRCxVQUF6aEQsRUFBcWlELE9BQXJpRCxFQUE4aUQsS0FBOWlELEVBQXFqRCxNQUFyakQsRUFBNmpELFFBQTdqRCxFQUF1a0QsT0FBdmtELEVBQWdsRCxPQUFobEQsRUFBeWxELE9BQXpsRCxFQUFrbUQsT0FBbG1ELEVBQTJtRCxRQUEzbUQsRUFBcW5ELE9BQXJuRCxFQUE4bkQsTUFBOW5ELEVBQXNvRCxPQUF0b0QsRUFBK29ELFNBQS9vRCxFQUEwcEQsTUFBMXBELEVBQWtxRCxNQUFscUQsRUFBMHFELE1BQTFxRCxFQUFrckQsTUFBbHJELEVBQTByRCxNQUExckQsRUFBa3NELE9BQWxzRCxFQUEyc0QsTUFBM3NELEVBQW10RCxNQUFudEQsRUFBMnRELE1BQTN0RCxFQUFtdUQsTUFBbnVELEVBQTJ1RCxNQUEzdUQsRUFBbXZELFFBQW52RCxFQUE2dkQsTUFBN3ZELEVBQXF3RCxPQUFyd0QsRUFBOHdELE9BQTl3RCxFQUF1eEQsT0FBdnhELEVBQWd5RCxNQUFoeUQsRUFBd3lELE9BQXh5RCxFQUFpekQsSUFBanpELEVBQXV6RCxNQUF2ekQsRUFBK3pELEtBQS96RCxFQUFzMEQsT0FBdDBELEVBQSswRCxRQUEvMEQsRUFBeTFELE9BQXoxRCxFQUFrMkQsTUFBbDJELEVBQTAyRCxPQUExMkQsRUFBbTNELEtBQW4zRCxFQUEwM0QsS0FBMTNELEVBQWk0RCxJQUFqNEQsRUFBdTRELEtBQXY0RCxFQUE4NEQsS0FBOTRELEVBQXE1RCxLQUFyNUQsRUFBNDVELFFBQTU1RCxFQUFzNkQsS0FBdDZELEVBQTY2RCxNQUE3NkQsRUFBcTdELE9BQXI3RCxFQUE4N0QsSUFBOTdELEVBQW84RCxPQUFwOEQsRUFBNjhELElBQTc4RCxFQUFtOUQsSUFBbjlELEVBQXk5RCxLQUF6OUQsRUFBZytELEtBQWgrRCxFQUF1K0QsTUFBditELEVBQSsrRCxNQUEvK0QsRUFBdS9ELE1BQXYvRCxFQUErL0QsT0FBLy9ELEVBQXdnRSxRQUF4Z0UsRUFBa2hFLE1BQWxoRSxFQUEwaEUsTUFBMWhFLEVBQWtpRSxPQUFsaUUsRUFBMmlFLE9BQTNpRSxFQUFvakUsUUFBcGpFLEVBQThqRSxRQUE5akUsRUFBd2tFLE1BQXhrRSxFQUFnbEUsTUFBaGxFLEVBQXdsRSxLQUF4bEUsRUFBK2xFLFFBQS9sRSxFQUF5bUUsT0FBem1FLEVBQWtuRSxRQUFsbkUsRUFBNG5FLE9BQTVuRSxDQUFqQjtBQUNBLElBQUlDLGFBQWEsQ0FBQyxFQUFELEVBQUssR0FBTCxFQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CLEdBQXBCLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlCLEVBQW1DLEdBQW5DLEVBQXdDLEdBQXhDLEVBQTZDLEdBQTdDLEVBQWtELEdBQWxELEVBQXVELEdBQXZELEVBQTRELEdBQTVELEVBQWlFLEdBQWpFLEVBQXNFLEdBQXRFLEVBQTJFLEdBQTNFLEVBQWdGLEdBQWhGLEVBQXFGLEdBQXJGLEVBQTBGLEdBQTFGLEVBQStGLEdBQS9GLEVBQW9HLEdBQXBHLEVBQXlHLEdBQXpHLEVBQThHLEdBQTlHLEVBQW1ILEdBQW5ILEVBQXdILEdBQXhILEVBQTZILEdBQTdILEVBQWtJLEdBQWxJLEVBQXVJLEdBQXZJLEVBQTRJLEdBQTVJLEVBQWlKLEdBQWpKLEVBQXNKLEdBQXRKLEVBQTJKLEdBQTNKLEVBQWdLLEdBQWhLLEVBQXFLLEdBQXJLLEVBQTBLLEdBQTFLLEVBQStLLEdBQS9LLEVBQW9MLEdBQXBMLEVBQXlMLEdBQXpMLEVBQThMLEdBQTlMLEVBQW1NLEdBQW5NLEVBQXdNLEdBQXhNLEVBQTZNLEdBQTdNLEVBQWtOLEdBQWxOLEVBQXVOLEdBQXZOLEVBQTROLEdBQTVOLEVBQWlPLEdBQWpPLEVBQXNPLEdBQXRPLEVBQTJPLEdBQTNPLEVBQWdQLEdBQWhQLEVBQXFQLEdBQXJQLEVBQTBQLEdBQTFQLEVBQStQLEdBQS9QLEVBQW9RLEdBQXBRLEVBQXlRLEdBQXpRLEVBQThRLEdBQTlRLEVBQW1SLEdBQW5SLEVBQXdSLEdBQXhSLEVBQTZSLEdBQTdSLEVBQWtTLEdBQWxTLEVBQXVTLEdBQXZTLEVBQTRTLEdBQTVTLEVBQWlULEdBQWpULEVBQXNULEdBQXRULEVBQTJULEdBQTNULEVBQWdVLEdBQWhVLEVBQXFVLEdBQXJVLEVBQTBVLEdBQTFVLEVBQStVLEdBQS9VLEVBQW9WLEdBQXBWLEVBQXlWLEdBQXpWLEVBQThWLEdBQTlWLEVBQW1XLEdBQW5XLEVBQXdXLEdBQXhXLEVBQTZXLEdBQTdXLEVBQWtYLEdBQWxYLEVBQXVYLEdBQXZYLEVBQTRYLEdBQTVYLEVBQWlZLEdBQWpZLEVBQXNZLEdBQXRZLEVBQTJZLEdBQTNZLEVBQWdaLEdBQWhaLEVBQXFaLEdBQXJaLEVBQTBaLEdBQTFaLEVBQStaLEdBQS9aLEVBQW9hLEdBQXBhLEVBQXlhLEdBQXphLEVBQThhLEdBQTlhLEVBQW1iLEdBQW5iLEVBQXdiLEdBQXhiLEVBQTZiLEdBQTdiLEVBQWtjLEdBQWxjLEVBQXVjLEdBQXZjLEVBQTRjLEdBQTVjLEVBQWlkLEdBQWpkLEVBQXNkLEdBQXRkLEVBQTJkLEdBQTNkLEVBQWdlLEdBQWhlLEVBQXFlLEVBQXJlLEVBQXllLEVBQXplLEVBQTZlLEVBQTdlLEVBQWlmLEVBQWpmLEVBQXFmLEdBQXJmLEVBQTBmLEdBQTFmLEVBQStmLEdB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QUN6QixNQUFNMlosTUFBTTNiLFNBQVMyWixhQUFULENBQXVCL1gsSUFBSTZaLE9BQTNCLENBQVo7O0FBRUF6WixNQUFJdVosYUFBSixDQUFrQk4sU0FBbEIsQ0FBNEJXLE1BQTVCLENBQW1DLE9BQW5DO0FBQ0FELE1BQUlWLFNBQUosQ0FBY1csTUFBZCxDQUFxQixNQUFyQjtBQUNELENBTEQ7O0FBT0EsSUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDN1osR0FBRCxFQUFTO0FBQzlCLE1BQU15VyxhQUFhelksU0FBUzJaLGFBQVQsQ0FBdUIvWCxJQUFJNlcsVUFBM0IsQ0FBbkI7O0FBRUEsTUFBSTVZLE9BQU9pYyxXQUFQLEdBQXFCLEdBQXpCLEVBQThCO0FBQzVCckQsZUFBV3dDLFNBQVgsQ0FBcUJuWixHQUFyQixDQUF5QixRQUF6QjtBQUNELEdBRkQsTUFFTztBQUNMMlcsZUFBV3dDLFNBQVgsQ0FBcUJDLE1BQXJCLENBQTRCLFFBQTVCO0FBQ0Q7QUFDRixDQVJEOztBQVVBLElBQU1FLFNBQVMsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLE1BQU1JLFlBQVl4YixTQUFTMlosYUFBVCxDQUF1Qi9YLElBQUk0WixTQUEzQixDQUFsQjtBQUNBQSxZQUFVN2EsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MrYSxTQUFwQztBQUNBN2IsU0FBT2MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NrYixjQUFsQztBQUNELENBSkQ7O0FBTWU7QUFDYjlVLFFBQU0sZ0JBQU07QUFDVnFVO0FBQ0Q7QUFIWSxDQUFmLEUiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cbiBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHR9XG4gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlXCJdO1xuIFx0d2luZG93W1wid2VicGFja0hvdFVwZGF0ZVwiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xuIFx0XHRpZiAobnVsbCkgc2NyaXB0LmNyb3NzT3JpZ2luID0gbnVsbDtcbiBcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QocmVxdWVzdFRpbWVvdXQpIHtcbiBcdFx0cmVxdWVzdFRpbWVvdXQgPSByZXF1ZXN0VGltZW91dCB8fCAxMDAwMDtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgPT09IFwidW5kZWZpbmVkXCIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QobmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0XCIpKTtcbiBcdFx0XHR9XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcbiBcdFx0XHRcdHJlcXVlc3Qub3BlbihcIkdFVFwiLCByZXF1ZXN0UGF0aCwgdHJ1ZSk7XG4gXHRcdFx0XHRyZXF1ZXN0LnRpbWVvdXQgPSByZXF1ZXN0VGltZW91dDtcbiBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QoZXJyKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xuIFx0XHRcdFx0XHQvLyB0aW1lb3V0XG4gXHRcdFx0XHRcdHJlamVjdChcbiBcdFx0XHRcdFx0XHRuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpXG4gXHRcdFx0XHRcdCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzID09PSA0MDQpIHtcbiBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuIFx0XHRcdFx0XHRyZXNvbHZlKCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzICE9PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgIT09IDMwNCkge1xuIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXG4gXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiBmYWlsZWQuXCIpKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdC8vIHN1Y2Nlc3NcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcbiBcdFx0XHRcdFx0XHRyZWplY3QoZSk7XG4gXHRcdFx0XHRcdFx0cmV0dXJuO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdHJlc29sdmUodXBkYXRlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0dmFyIGhvdEFwcGx5T25VcGRhdGUgPSB0cnVlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcImY4ZDQzMzliZjM3NjNjNDBhMjIwXCI7XG4gXHR2YXIgaG90UmVxdWVzdFRpbWVvdXQgPSAxMDAwMDtcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xuIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50c1RlbXAgPSBbXTtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuIFx0XHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG4gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuIFx0XHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuIFx0XHRcdFx0XHRcdHJlcXVlc3QgK1xuIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdCk7XG4gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcbiBcdFx0fTtcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuIFx0XHRcdFx0fSxcbiBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH07XG4gXHRcdGZvciAodmFyIG5hbWUgaW4gX193ZWJwYWNrX3JlcXVpcmVfXykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJlXCIgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwidFwiXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicmVhZHlcIikgaG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcbiBcdFx0XHRcdHRocm93IGVycjtcbiBcdFx0XHR9KTtcblxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcbiBcdFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XG4gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRmbi50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0XHRpZiAobW9kZSAmIDEpIHZhbHVlID0gZm4odmFsdWUpO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQodmFsdWUsIG1vZGUgJiB+MSk7XG4gXHRcdH07XG4gXHRcdHJldHVybiBmbjtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIGhvdCA9IHtcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxuXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcbiBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0fSxcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vIE1hbmFnZW1lbnQgQVBJXG4gXHRcdFx0Y2hlY2s6IGhvdENoZWNrLFxuIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcbiBcdFx0XHRzdGF0dXM6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGlmICghbCkgcmV0dXJuIGhvdFN0YXR1cztcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcbiBcdFx0XHRkYXRhOiBob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cbiBcdFx0fTtcbiBcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuIFx0XHRyZXR1cm4gaG90O1xuIFx0fVxuXG4gXHR2YXIgaG90U3RhdHVzSGFuZGxlcnMgPSBbXTtcbiBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcblxuIFx0ZnVuY3Rpb24gaG90U2V0U3RhdHVzKG5ld1N0YXR1cykge1xuIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XG4gXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaG90U3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG4gXHRcdFx0aG90U3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuIFx0fVxuXG4gXHQvLyB3aGlsZSBkb3dubG9hZGluZ1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlcyA9IDA7XG4gXHR2YXIgaG90Q2h1bmtzTG9hZGluZyA9IDA7XG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RBdmFpbGFibGVGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdERlZmVycmVkO1xuXG4gXHQvLyBUaGUgdXBkYXRlIGluZm9cbiBcdHZhciBob3RVcGRhdGUsIGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdGZ1bmN0aW9uIHRvTW9kdWxlSWQoaWQpIHtcbiBcdFx0dmFyIGlzTnVtYmVyID0gK2lkICsgXCJcIiA9PT0gaWQ7XG4gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcImlkbGVcIikge1xuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuIFx0XHR9XG4gXHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XG4gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xuIFx0XHRcdGlmICghdXBkYXRlKSB7XG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRcdFx0cmV0dXJuIG51bGw7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90QXZhaWxhYmxlRmlsZXNNYXAgPSB1cGRhdGUuYztcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdXBkYXRlLmg7XG5cbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcbiBcdFx0XHRcdFx0cmVzb2x2ZTogcmVzb2x2ZSxcbiBcdFx0XHRcdFx0cmVqZWN0OiByZWplY3RcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0aG90VXBkYXRlID0ge307XG4gXHRcdFx0Zm9yKHZhciBjaHVua0lkIGluIGluc3RhbGxlZENodW5rcylcbiBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbiBcdFx0XHR7XG4gXHRcdFx0XHQvKmdsb2JhbHMgY2h1bmtJZCAqL1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHQpXG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHRcdH0pO1xuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdCBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG5cblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe1widmVuZG9yc35zd2lwZXJzXCI6XCJ2ZW5kb3JzfnN3aXBlcnNcIixcInN3aXBlcnNcIjpcInN3aXBlcnNcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuYnVuZGxlLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcignTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKScpO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gaG90Q3JlYXRlUmVxdWlyZSgwKShfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuc2lIVE1MXG5cbi8vIFJlZmVyZW5jZSB0byBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL2Fuc2ktcmVnZXhcbnZhciBfcmVnQU5TSSA9IC8oPzooPzpcXHUwMDFiXFxbKXxcXHUwMDliKSg/Oig/OlswLTldezEsM30pPyg/Oig/OjtbMC05XXswLDN9KSopP1tBLU18Zi1tXSl8XFx1MDAxYltBLU1dL1xuXG52YXIgX2RlZkNvbG9ycyA9IHtcbiAgcmVzZXQ6IFsnZmZmJywgJzAwMCddLCAvLyBbRk9SRUdST1VEX0NPTE9SLCBCQUNLR1JPVU5EX0NPTE9SXVxuICBibGFjazogJzAwMCcsXG4gIHJlZDogJ2ZmMDAwMCcsXG4gIGdyZWVuOiAnMjA5ODA1JyxcbiAgeWVsbG93OiAnZThiZjAzJyxcbiAgYmx1ZTogJzAwMDBmZicsXG4gIG1hZ2VudGE6ICdmZjAwZmYnLFxuICBjeWFuOiAnMDBmZmVlJyxcbiAgbGlnaHRncmV5OiAnZjBmMGYwJyxcbiAgZGFya2dyZXk6ICc4ODgnXG59XG52YXIgX3N0eWxlcyA9IHtcbiAgMzA6ICdibGFjaycsXG4gIDMxOiAncmVkJyxcbiAgMzI6ICdncmVlbicsXG4gIDMzOiAneWVsbG93JyxcbiAgMzQ6ICdibHVlJyxcbiAgMzU6ICdtYWdlbnRhJyxcbiAgMzY6ICdjeWFuJyxcbiAgMzc6ICdsaWdodGdyZXknXG59XG52YXIgX29wZW5UYWdzID0ge1xuICAnMSc6ICdmb250LXdlaWdodDpib2xkJywgLy8gYm9sZFxuICAnMic6ICdvcGFjaXR5OjAuNScsIC8vIGRpbVxuICAnMyc6ICc8aT4nLCAvLyBpdGFsaWNcbiAgJzQnOiAnPHU+JywgLy8gdW5kZXJzY29yZVxuICAnOCc6ICdkaXNwbGF5Om5vbmUnLCAvLyBoaWRkZW5cbiAgJzknOiAnPGRlbD4nIC8vIGRlbGV0ZVxufVxudmFyIF9jbG9zZVRhZ3MgPSB7XG4gICcyMyc6ICc8L2k+JywgLy8gcmVzZXQgaXRhbGljXG4gICcyNCc6ICc8L3U+JywgLy8gcmVzZXQgdW5kZXJzY29yZVxuICAnMjknOiAnPC9kZWw+JyAvLyByZXNldCBkZWxldGVcbn1cblxuO1swLCAyMSwgMjIsIDI3LCAyOCwgMzksIDQ5XS5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XG4gIF9jbG9zZVRhZ3Nbbl0gPSAnPC9zcGFuPidcbn0pXG5cbi8qKlxuICogQ29udmVydHMgdGV4dCB3aXRoIEFOU0kgY29sb3IgY29kZXMgdG8gSFRNTCBtYXJrdXAuXG4gKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICogQHJldHVybnMgeyp9XG4gKi9cbmZ1bmN0aW9uIGFuc2lIVE1MICh0ZXh0KSB7XG4gIC8vIFJldHVybnMgdGhlIHRleHQgaWYgdGhlIHN0cmluZyBoYXMgbm8gQU5TSSBlc2NhcGUgY29kZS5cbiAgaWYgKCFfcmVnQU5TSS50ZXN0KHRleHQpKSB7XG4gICAgcmV0dXJuIHRleHRcbiAgfVxuXG4gIC8vIENhY2hlIG9wZW5lZCBzZXF1ZW5jZS5cbiAgdmFyIGFuc2lDb2RlcyA9IFtdXG4gIC8vIFJlcGxhY2Ugd2l0aCBtYXJrdXAuXG4gIHZhciByZXQgPSB0ZXh0LnJlcGxhY2UoL1xcMDMzXFxbKFxcZCspKm0vZywgZnVuY3Rpb24gKG1hdGNoLCBzZXEpIHtcbiAgICB2YXIgb3QgPSBfb3BlblRhZ3Nbc2VxXVxuICAgIGlmIChvdCkge1xuICAgICAgLy8gSWYgY3VycmVudCBzZXF1ZW5jZSBoYXMgYmVlbiBvcGVuZWQsIGNsb3NlIGl0LlxuICAgICAgaWYgKCEhfmFuc2lDb2Rlcy5pbmRleE9mKHNlcSkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1leHRyYS1ib29sZWFuLWNhc3RcbiAgICAgICAgYW5zaUNvZGVzLnBvcCgpXG4gICAgICAgIHJldHVybiAnPC9zcGFuPidcbiAgICAgIH1cbiAgICAgIC8vIE9wZW4gdGFnLlxuICAgICAgYW5zaUNvZGVzLnB1c2goc2VxKVxuICAgICAgcmV0dXJuIG90WzBdID09PSAnPCcgPyBvdCA6ICc8c3BhbiBzdHlsZT1cIicgKyBvdCArICc7XCI+J1xuICAgIH1cblxuICAgIHZhciBjdCA9IF9jbG9zZVRhZ3Nbc2VxXVxuICAgIGlmIChjdCkge1xuICAgICAgLy8gUG9wIHNlcXVlbmNlXG4gICAgICBhbnNpQ29kZXMucG9wKClcbiAgICAgIHJldHVybiBjdFxuICAgIH1cbiAgICByZXR1cm4gJydcbiAgfSlcblxuICAvLyBNYWtlIHN1cmUgdGFncyBhcmUgY2xvc2VkLlxuICB2YXIgbCA9IGFuc2lDb2Rlcy5sZW5ndGhcbiAgOyhsID4gMCkgJiYgKHJldCArPSBBcnJheShsICsgMSkuam9pbignPC9zcGFuPicpKVxuXG4gIHJldHVybiByZXRcbn1cblxuLyoqXG4gKiBDdXN0b21pemUgY29sb3JzLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbG9ycyByZWZlcmVuY2UgdG8gX2RlZkNvbG9yc1xuICovXG5hbnNpSFRNTC5zZXRDb2xvcnMgPSBmdW5jdGlvbiAoY29sb3JzKSB7XG4gIGlmICh0eXBlb2YgY29sb3JzICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBFcnJvcignYGNvbG9yc2AgcGFyYW1ldGVyIG11c3QgYmUgYW4gT2JqZWN0LicpXG4gIH1cblxuICB2YXIgX2ZpbmFsQ29sb3JzID0ge31cbiAgZm9yICh2YXIga2V5IGluIF9kZWZDb2xvcnMpIHtcbiAgICB2YXIgaGV4ID0gY29sb3JzLmhhc093blByb3BlcnR5KGtleSkgPyBjb2xvcnNba2V5XSA6IG51bGxcbiAgICBpZiAoIWhleCkge1xuICAgICAgX2ZpbmFsQ29sb3JzW2tleV0gPSBfZGVmQ29sb3JzW2tleV1cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmICgncmVzZXQnID09PSBrZXkpIHtcbiAgICAgIGlmICh0eXBlb2YgaGV4ID09PSAnc3RyaW5nJykge1xuICAgICAgICBoZXggPSBbaGV4XVxuICAgICAgfVxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGhleCkgfHwgaGV4Lmxlbmd0aCA9PT0gMCB8fCBoZXguc29tZShmdW5jdGlvbiAoaCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGggIT09ICdzdHJpbmcnXG4gICAgICB9KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSB2YWx1ZSBvZiBgJyArIGtleSArICdgIHByb3BlcnR5IG11c3QgYmUgYW4gQXJyYXkgYW5kIGVhY2ggaXRlbSBjb3VsZCBvbmx5IGJlIGEgaGV4IHN0cmluZywgZS5nLjogRkYwMDAwJylcbiAgICAgIH1cbiAgICAgIHZhciBkZWZIZXhDb2xvciA9IF9kZWZDb2xvcnNba2V5XVxuICAgICAgaWYgKCFoZXhbMF0pIHtcbiAgICAgICAgaGV4WzBdID0gZGVmSGV4Q29sb3JbMF1cbiAgICAgIH1cbiAgICAgIGlmIChoZXgubGVuZ3RoID09PSAxIHx8ICFoZXhbMV0pIHtcbiAgICAgICAgaGV4ID0gW2hleFswXV1cbiAgICAgICAgaGV4LnB1c2goZGVmSGV4Q29sb3JbMV0pXG4gICAgICB9XG5cbiAgICAgIGhleCA9IGhleC5zbGljZSgwLCAyKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGhleCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHZhbHVlIG9mIGAnICsga2V5ICsgJ2AgcHJvcGVydHkgbXVzdCBiZSBhIGhleCBzdHJpbmcsIGUuZy46IEZGMDAwMCcpXG4gICAgfVxuICAgIF9maW5hbENvbG9yc1trZXldID0gaGV4XG4gIH1cbiAgX3NldFRhZ3MoX2ZpbmFsQ29sb3JzKVxufVxuXG4vKipcbiAqIFJlc2V0IGNvbG9ycy5cbiAqL1xuYW5zaUhUTUwucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gIF9zZXRUYWdzKF9kZWZDb2xvcnMpXG59XG5cbi8qKlxuICogRXhwb3NlIHRhZ3MsIGluY2x1ZGluZyBvcGVuIGFuZCBjbG9zZS5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmFuc2lIVE1MLnRhZ3MgPSB7fVxuXG5pZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhbnNpSFRNTC50YWdzLCAnb3BlbicsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9vcGVuVGFncyB9XG4gIH0pXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhbnNpSFRNTC50YWdzLCAnY2xvc2UnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfY2xvc2VUYWdzIH1cbiAgfSlcbn0gZWxzZSB7XG4gIGFuc2lIVE1MLnRhZ3Mub3BlbiA9IF9vcGVuVGFnc1xuICBhbnNpSFRNTC50YWdzLmNsb3NlID0gX2Nsb3NlVGFnc1xufVxuXG5mdW5jdGlvbiBfc2V0VGFncyAoY29sb3JzKSB7XG4gIC8vIHJlc2V0IGFsbFxuICBfb3BlblRhZ3NbJzAnXSA9ICdmb250LXdlaWdodDpub3JtYWw7b3BhY2l0eToxO2NvbG9yOiMnICsgY29sb3JzLnJlc2V0WzBdICsgJztiYWNrZ3JvdW5kOiMnICsgY29sb3JzLnJlc2V0WzFdXG4gIC8vIGludmVyc2VcbiAgX29wZW5UYWdzWyc3J10gPSAnY29sb3I6IycgKyBjb2xvcnMucmVzZXRbMV0gKyAnO2JhY2tncm91bmQ6IycgKyBjb2xvcnMucmVzZXRbMF1cbiAgLy8gZGFyayBncmV5XG4gIF9vcGVuVGFnc1snOTAnXSA9ICdjb2xvcjojJyArIGNvbG9ycy5kYXJrZ3JleVxuXG4gIGZvciAodmFyIGNvZGUgaW4gX3N0eWxlcykge1xuICAgIHZhciBjb2xvciA9IF9zdHlsZXNbY29kZV1cbiAgICB2YXIgb3JpQ29sb3IgPSBjb2xvcnNbY29sb3JdIHx8ICcwMDAnXG4gICAgX29wZW5UYWdzW2NvZGVdID0gJ2NvbG9yOiMnICsgb3JpQ29sb3JcbiAgICBjb2RlID0gcGFyc2VJbnQoY29kZSlcbiAgICBfb3BlblRhZ3NbKGNvZGUgKyAxMCkudG9TdHJpbmcoKV0gPSAnYmFja2dyb3VuZDojJyArIG9yaUNvbG9yXG4gIH1cbn1cblxuYW5zaUhUTUwucmVzZXQoKVxuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiAvW1xcdTAwMWJcXHUwMDliXVtbKCkjOz9dKig/OlswLTldezEsNH0oPzo7WzAtOV17MCw0fSkqKT9bMC05QS1QUlpjZi1ucXJ5PT48XS9nO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBYbWxFbnRpdGllczogcmVxdWlyZSgnLi9saWIveG1sLWVudGl0aWVzLmpzJyksXG4gIEh0bWw0RW50aXRpZXM6IHJlcXVpcmUoJy4vbGliL2h0bWw0LWVudGl0aWVzLmpzJyksXG4gIEh0bWw1RW50aXRpZXM6IHJlcXVpcmUoJy4vbGliL2h0bWw1LWVudGl0aWVzLmpzJyksXG4gIEFsbEh0bWxFbnRpdGllczogcmVxdWlyZSgnLi9saWIvaHRtbDUtZW50aXRpZXMuanMnKVxufTtcbiIsInZhciBIVE1MX0FMUEhBID0gWydhcG9zJywgJ25ic3AnLCAnaWV4Y2wnLCAnY2VudCcsICdwb3VuZCcsICdjdXJyZW4nLCAneWVuJywgJ2JydmJhcicsICdzZWN0JywgJ3VtbCcsICdjb3B5JywgJ29yZGYnLCAnbGFxdW8nLCAnbm90JywgJ3NoeScsICdyZWcnLCAnbWFjcicsICdkZWcnLCAncGx1c21uJywgJ3N1cDInLCAnc3VwMycsICdhY3V0ZScsICdtaWNybycsICdwYXJhJywgJ21pZGRvdCcsICdjZWRpbCcsICdzdXAxJywgJ29yZG0nLCAncmFxdW8nLCAnZnJhYzE0JywgJ2ZyYWMxMicsICdmcmFjMzQnLCAnaXF1ZXN0JywgJ0FncmF2ZScsICdBYWN1dGUnLCAnQWNpcmMnLCAnQXRpbGRlJywgJ0F1bWwnLCAnQXJpbmcnLCAnQWVsaWcnLCAnQ2NlZGlsJywgJ0VncmF2ZScsICdFYWN1dGUnLCAnRWNpcmMnLCAnRXVtbCcsICdJZ3JhdmUnLCAnSWFjdXRlJywgJ0ljaXJjJywgJ0l1bWwnLCAnRVRIJywgJ050aWxkZScsICdPZ3JhdmUnLCAnT2FjdXRlJywgJ09jaXJjJywgJ090aWxkZScsICdPdW1sJywgJ3RpbWVzJywgJ09zbGFzaCcsICdVZ3JhdmUnLCAnVWFjdXRlJywgJ1VjaXJjJywgJ1V1bWwnLCAnWWFjdXRlJywgJ1RIT1JOJywgJ3N6bGlnJywgJ2FncmF2ZScsICdhYWN1dGUnLCAnYWNpcmMnLCAnYXRpbGRlJywgJ2F1bWwnLCAnYXJpbmcnLCAnYWVsaWcnLCAnY2NlZGlsJywgJ2VncmF2ZScsICdlYWN1dGUnLCAnZWNpcmMnLCAnZXVtbCcsICdpZ3JhdmUnLCAnaWFjdXRlJywgJ2ljaXJjJywgJ2l1bWwnLCAnZXRoJywgJ250aWxkZScsICdvZ3JhdmUnLCAnb2FjdXRlJywgJ29jaXJjJywgJ290aWxkZScsICdvdW1sJywgJ2RpdmlkZScsICdvc2xhc2gnLCAndWdyYXZlJywgJ3VhY3V0ZScsICd1Y2lyYycsICd1dW1sJywgJ3lhY3V0ZScsICd0aG9ybicsICd5dW1sJywgJ3F1b3QnLCAnYW1wJywgJ2x0JywgJ2d0JywgJ09FbGlnJywgJ29lbGlnJywgJ1NjYXJvbicsICdzY2Fyb24nLCAnWXVtbCcsICdjaXJjJywgJ3RpbGRlJywgJ2Vuc3AnLCAnZW1zcCcsICd0aGluc3AnLCAnenduaicsICd6d2onLCAnbHJtJywgJ3JsbScsICduZGFzaCcsICdtZGFzaCcsICdsc3F1bycsICdyc3F1bycsICdzYnF1bycsICdsZHF1bycsICdyZHF1bycsICdiZHF1bycsICdkYWdnZXInLCAnRGFnZ2VyJywgJ3Blcm1pbCcsICdsc2FxdW8nLCAncnNhcXVvJywgJ2V1cm8nLCAnZm5vZicsICdBbHBoYScsICdCZXRhJywgJ0dhbW1hJywgJ0RlbHRhJywgJ0Vwc2lsb24nLCAnWmV0YScsICdFdGEnLCAnVGhldGEnLCAnSW90YScsICdLYXBwYScsICdMYW1iZGEnLCAnTXUnLCAnTnUnLCAnWGknLCAnT21pY3JvbicsICdQaScsICdSaG8nLCAnU2lnbWEnLCAnVGF1JywgJ1Vwc2lsb24nLCAnUGhpJywgJ0NoaScsICdQc2knLCAnT21lZ2EnLCAnYWxwaGEnLCAnYmV0YScsICdnYW1tYScsICdkZWx0YScsICdlcHNpbG9uJywgJ3pldGEnLCAnZXRhJywgJ3RoZXRhJywgJ2lvdGEnLCAna2FwcGEnLCAnbGFtYmRhJywgJ211JywgJ251JywgJ3hpJywgJ29taWNyb24nLCAncGknLCAncmhvJywgJ3NpZ21hZicsICdzaWdtYScsICd0YXUnLCAndXBzaWxvbicsICdwaGknLCAnY2hpJywgJ3BzaScsICdvbWVnYScsICd0aGV0YXN5bScsICd1cHNpaCcsICdwaXYnLCAnYnVsbCcsICdoZWxsaXAnLCAncHJpbWUnLCAnUHJpbWUnLCAnb2xpbmUnLCAnZnJhc2wnLCAnd2VpZXJwJywgJ2ltYWdlJywgJ3JlYWwnLCAndHJhZGUnLCAnYWxlZnN5bScsICdsYXJyJywgJ3VhcnInLCAncmFycicsICdkYXJyJywgJ2hhcnInLCAnY3JhcnInLCAnbEFycicsICd1QXJyJywgJ3JBcnInLCAnZEFycicsICdoQXJyJywgJ2ZvcmFsbCcsICdwYXJ0JywgJ2V4aXN0JywgJ2VtcHR5JywgJ25hYmxhJywgJ2lzaW4nLCAnbm90aW4nLCAnbmknLCAncHJvZCcsICdzdW0nLCAnbWludXMnLCAnbG93YXN0JywgJ3JhZGljJywgJ3Byb3AnLCAnaW5maW4nLCAnYW5nJywgJ2FuZCcsICdvcicsICdjYXAnLCAnY3VwJywgJ2ludCcsICd0aGVyZTQnLCAnc2ltJywgJ2NvbmcnLCAnYXN5bXAnLCAnbmUnLCAnZXF1aXYnLCAnbGUnLCAnZ2UnLCAnc3ViJywgJ3N1cCcsICduc3ViJywgJ3N1YmUnLCAnc3VwZScsICdvcGx1cycsICdvdGltZXMnLCAncGVycCcsICdzZG90JywgJ2xjZWlsJywgJ3JjZWlsJywgJ2xmbG9vcicsICdyZmxvb3InLCAnbGFuZycsICdyYW5nJywgJ2xveicsICdzcGFkZXMnLCAnY2x1YnMnLCAnaGVhcnRzJywgJ2RpYW1zJ107XG52YXIgSFRNTF9DT0RFUyA9IFszOSwgMTYwLCAxNjEsIDE2MiwgMTYzLCAxNjQsIDE2NSwgMTY2LCAxNjcsIDE2OCwgMTY5LCAxNzAsIDE3MSwgMTcyLCAxNzMsIDE3NCwgMTc1LCAxNzYsIDE3NywgMTc4LCAxNzksIDE4MCwgMTgxLCAxODIsIDE4MywgMTg0LCAxODUsIDE4NiwgMTg3LCAxODgsIDE4OSwgMTkwLCAxOTEsIDE5MiwgMTkzLCAxOTQsIDE5NSwgMTk2LCAxOTcsIDE5OCwgMTk5LCAyMDAsIDIwMSwgMjAyLCAyMDMsIDIwNCwgMjA1LCAyMDYsIDIwNywgMjA4LCAyMDksIDIxMCwgMjExLCAyMTIsIDIxMywgMjE0LCAyMTUsIDIxNiwgMjE3LCAyMTgsIDIxOSwgMjIwLCAyMjEsIDIyMiwgMjIzLCAyMjQsIDIyNSwgMjI2LCAyMjcsIDIyOCwgMjI5LCAyMzAsIDIzMSwgMjMyLCAyMzMsIDIzNCwgMjM1LCAyMzYsIDIzNywgMjM4LCAyMzksIDI0MCwgMjQxLCAyNDIsIDI0MywgMjQ0LCAyNDUsIDI0NiwgMjQ3LCAyNDgsIDI0OSwgMjUwLCAyNTEsIDI1MiwgMjUzLCAyNTQsIDI1NSwgMzQsIDM4LCA2MCwgNjIsIDMzOCwgMzM5LCAzNTIsIDM1MywgMzc2LCA3MTAsIDczMiwgODE5NCwgODE5NSwgODIwMSwgODIwNCwgODIwNSwgODIwNiwgODIwNywgODIxMSwgODIxMiwgODIxNiwgODIxNywgODIxOCwgODIyMCwgODIyMSwgODIyMiwgODIyNCwgODIyNSwgODI0MCwgODI0OSwgODI1MCwgODM2NCwgNDAyLCA5MTMsIDkxNCwgOTE1LCA5MTYsIDkxNywgOTE4LCA5MTksIDkyMCwgOTIxLCA5MjIsIDkyMywgOTI0LCA5MjUsIDkyNiwgOTI3LCA5MjgsIDkyOSwgOTMxLCA5MzIsIDkzMywgOTM0LCA5MzUsIDkzNiwgOTM3LCA5NDUsIDk0NiwgOTQ3LCA5NDgsIDk0OSwgOTUwLCA5NTEsIDk1MiwgOTUzLCA5NTQsIDk1NSwgOTU2LCA5NTcsIDk1OCwgOTU5LCA5NjAsIDk2MSwgOTYyLCA5NjMsIDk2NCwgOTY1LCA5NjYsIDk2NywgOTY4LCA5NjksIDk3NywgOTc4LCA5ODIsIDgyMjYsIDgyMzAsIDgyNDIsIDgyNDMsIDgyNTQsIDgyNjAsIDg0NzIsIDg0NjUsIDg0NzYsIDg0ODIsIDg1MDEsIDg1OTIsIDg1OTMsIDg1OTQsIDg1OTUsIDg1OTYsIDg2MjksIDg2NTYsIDg2NTcsIDg2NTgsIDg2NTksIDg2NjAsIDg3MDQsIDg3MDYsIDg3MDcsIDg3MDksIDg3MTEsIDg3MTIsIDg3MTMsIDg3MTUsIDg3MTksIDg3MjEsIDg3MjIsIDg3MjcsIDg3MzAsIDg3MzMsIDg3MzQsIDg3MzYsIDg3NDMsIDg3NDQsIDg3NDUsIDg3NDYsIDg3NDcsIDg3NTYsIDg3NjQsIDg3NzMsIDg3NzYsIDg4MDAsIDg4MDEsIDg4MDQsIDg4MDUsIDg4MzQsIDg4MzUsIDg4MzYsIDg4MzgsIDg4MzksIDg4NTMsIDg4NTUsIDg4NjksIDg5MDEsIDg5NjgsIDg5NjksIDg5NzAsIDg5NzEsIDkwMDEsIDkwMDIsIDk2NzQsIDk4MjQsIDk4MjcsIDk4MjksIDk4MzBdO1xuXG52YXIgYWxwaGFJbmRleCA9IHt9O1xudmFyIG51bUluZGV4ID0ge307XG5cbnZhciBpID0gMDtcbnZhciBsZW5ndGggPSBIVE1MX0FMUEhBLmxlbmd0aDtcbndoaWxlIChpIDwgbGVuZ3RoKSB7XG4gICAgdmFyIGEgPSBIVE1MX0FMUEhBW2ldO1xuICAgIHZhciBjID0gSFRNTF9DT0RFU1tpXTtcbiAgICBhbHBoYUluZGV4W2FdID0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcbiAgICBudW1JbmRleFtjXSA9IGE7XG4gICAgaSsrO1xufVxuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBIdG1sNEVudGl0aWVzKCkge31cblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAoIXN0ciB8fCAhc3RyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvJigjP1tcXHdcXGRdKyk7Py9nLCBmdW5jdGlvbihzLCBlbnRpdHkpIHtcbiAgICAgICAgdmFyIGNocjtcbiAgICAgICAgaWYgKGVudGl0eS5jaGFyQXQoMCkgPT09IFwiI1wiKSB7XG4gICAgICAgICAgICB2YXIgY29kZSA9IGVudGl0eS5jaGFyQXQoMSkudG9Mb3dlckNhc2UoKSA9PT0gJ3gnID9cbiAgICAgICAgICAgICAgICBwYXJzZUludChlbnRpdHkuc3Vic3RyKDIpLCAxNikgOlxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGVudGl0eS5zdWJzdHIoMSkpO1xuXG4gICAgICAgICAgICBpZiAoIShpc05hTihjb2RlKSB8fCBjb2RlIDwgLTMyNzY4IHx8IGNvZGUgPiA2NTUzNSkpIHtcbiAgICAgICAgICAgICAgICBjaHIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hyID0gYWxwaGFJbmRleFtlbnRpdHldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaHIgfHwgcztcbiAgICB9KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDRFbnRpdGllcy5kZWNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IEh0bWw0RW50aXRpZXMoKS5kZWNvZGUoc3RyKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDRFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKCFzdHIgfHwgIXN0ci5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgc3RyTGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ3RoKSB7XG4gICAgICAgIHZhciBhbHBoYSA9IG51bUluZGV4W3N0ci5jaGFyQ29kZUF0KGkpXTtcbiAgICAgICAgcmVzdWx0ICs9IGFscGhhID8gXCImXCIgKyBhbHBoYSArIFwiO1wiIDogc3RyLmNoYXJBdChpKTtcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLmVuY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDRFbnRpdGllcygpLmVuY29kZShzdHIpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGVOb25VVEYgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAoIXN0ciB8fCAhc3RyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGNjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIHZhciBhbHBoYSA9IG51bUluZGV4W2NjXTtcbiAgICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gXCImXCIgKyBhbHBoYSArIFwiO1wiO1xuICAgICAgICB9IGVsc2UgaWYgKGNjIDwgMzIgfHwgY2MgPiAxMjYpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBcIiYjXCIgKyBjYyArIFwiO1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLmVuY29kZU5vblVURiA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDRFbnRpdGllcygpLmVuY29kZU5vblVURihzdHIpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGVOb25BU0NJSSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmICghc3RyIHx8ICFzdHIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmd0aCkge1xuICAgICAgICB2YXIgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA8PSAyNTUpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzdHJbaSsrXTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCArPSAnJiMnICsgYyArICc7JztcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLmVuY29kZU5vbkFTQ0lJID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBIdG1sNEVudGl0aWVzKCkuZW5jb2RlTm9uQVNDSUkoc3RyKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSHRtbDRFbnRpdGllcztcbiIsInZhciBFTlRJVElFUyA9IFtbJ0FhY3V0ZScsIFsxOTNdXSwgWydhYWN1dGUnLCBbMjI1XV0sIFsnQWJyZXZlJywgWzI1OF1dLCBbJ2FicmV2ZScsIFsyNTldXSwgWydhYycsIFs4NzY2XV0sIFsnYWNkJywgWzg3NjddXSwgWydhY0UnLCBbODc2NiwgODE5XV0sIFsnQWNpcmMnLCBbMTk0XV0sIFsnYWNpcmMnLCBbMjI2XV0sIFsnYWN1dGUnLCBbMTgwXV0sIFsnQWN5JywgWzEwNDBdXSwgWydhY3knLCBbMTA3Ml1dLCBbJ0FFbGlnJywgWzE5OF1dLCBbJ2FlbGlnJywgWzIzMF1dLCBbJ2FmJywgWzgyODldXSwgWydBZnInLCBbMTIwMDY4XV0sIFsnYWZyJywgWzEyMDA5NF1dLCBbJ0FncmF2ZScsIFsxOTJdXSwgWydhZ3JhdmUnLCBbMjI0XV0sIFsnYWxlZnN5bScsIFs4NTAxXV0sIFsnYWxlcGgnLCBbODUwMV1dLCBbJ0FscGhhJywgWzkxM11dLCBbJ2FscGhhJywgWzk0NV1dLCBbJ0FtYWNyJywgWzI1Nl1dLCBbJ2FtYWNyJywgWzI1N11dLCBbJ2FtYWxnJywgWzEwODE1XV0sIFsnYW1wJywgWzM4XV0sIFsnQU1QJywgWzM4XV0sIFsnYW5kYW5kJywgWzEwODM3XV0sIFsnQW5kJywgWzEwODM1XV0sIFsnYW5kJywgWzg3NDNdXSwgWydhbmRkJywgWzEwODQ0XV0sIFsnYW5kc2xvcGUnLCBbMTA4NDBdXSwgWydhbmR2JywgWzEwODQyXV0sIFsnYW5nJywgWzg3MzZdXSwgWydhbmdlJywgWzEwNjYwXV0sIFsnYW5nbGUnLCBbODczNl1dLCBbJ2FuZ21zZGFhJywgWzEwNjY0XV0sIFsnYW5nbXNkYWInLCBbMTA2NjVdXSwgWydhbmdtc2RhYycsIFsxMDY2Nl1dLCBbJ2FuZ21zZGFkJywgWzEwNjY3XV0sIFsnYW5nbXNkYWUnLCBbMTA2NjhdXSwgWydhbmdtc2RhZicsIFsxMDY2OV1dLCBbJ2FuZ21zZGFnJywgWzEwNjcwXV0sIFsnYW5nbXNkYWgnLCBbMTA2NzFdXSwgWydhbmdtc2QnLCBbODczN11dLCBbJ2FuZ3J0JywgWzg3MzVdXSwgWydhbmdydHZiJywgWzg4OTRdXSwgWydhbmdydHZiZCcsIFsxMDY1M11dLCBbJ2FuZ3NwaCcsIFs4NzM4XV0sIFsnYW5nc3QnLCBbMTk3XV0sIFsnYW5nemFycicsIFs5MDg0XV0sIFsnQW9nb24nLCBbMjYwXV0sIFsnYW9nb24nLCBbMjYxXV0sIFsnQW9wZicsIFsxMjAxMjBdXSwgWydhb3BmJywgWzEyMDE0Nl1dLCBbJ2FwYWNpcicsIFsxMDg2M11dLCBbJ2FwJywgWzg3NzZdXSwgWydhcEUnLCBbMTA4NjRdXSwgWydhcGUnLCBbODc3OF1dLCBbJ2FwaWQnLCBbODc3OV1dLCBbJ2Fwb3MnLCBbMzldXSwgWydBcHBseUZ1bmN0aW9uJywgWzgyODldXSwgWydhcHByb3gnLCBbODc3Nl1dLCBbJ2FwcHJveGVxJywgWzg3NzhdXSwgWydBcmluZycsIFsxOTddXSwgWydhcmluZycsIFsyMjldXSwgWydBc2NyJywgWzExOTk2NF1dLCBbJ2FzY3InLCBbMTE5OTkwXV0sIFsnQXNzaWduJywgWzg3ODhdXSwgWydhc3QnLCBbNDJdXSwgWydhc3ltcCcsIFs4Nzc2XV0sIFsnYXN5bXBlcScsIFs4NzgxXV0sIFsnQXRpbGRlJywgWzE5NV1dLCBbJ2F0aWxkZScsIFsyMjddXSwgWydBdW1sJywgWzE5Nl1dLCBbJ2F1bWwnLCBbMjI4XV0sIFsnYXdjb25pbnQnLCBbODc1NV1dLCBbJ2F3aW50JywgWzEwNzY5XV0sIFsnYmFja2NvbmcnLCBbODc4MF1dLCBbJ2JhY2tlcHNpbG9uJywgWzEwMTRdXSwgWydiYWNrcHJpbWUnLCBbODI0NV1dLCBbJ2JhY2tzaW0nLCBbODc2NV1dLCBbJ2JhY2tzaW1lcScsIFs4OTA5XV0sIFsnQmFja3NsYXNoJywgWzg3MjZdXSwgWydCYXJ2JywgWzEwOTgzXV0sIFsnYmFydmVlJywgWzg4OTNdXSwgWydiYXJ3ZWQnLCBbODk2NV1dLCBbJ0JhcndlZCcsIFs4OTY2XV0sIFsnYmFyd2VkZ2UnLCBbODk2NV1dLCBbJ2JicmsnLCBbOTE0MV1dLCBbJ2Jicmt0YnJrJywgWzkxNDJdXSwgWydiY29uZycsIFs4NzgwXV0sIFsnQmN5JywgWzEwNDFdXSwgWydiY3knLCBbMTA3M11dLCBbJ2JkcXVvJywgWzgyMjJdXSwgWydiZWNhdXMnLCBbODc1N11dLCBbJ2JlY2F1c2UnLCBbODc1N11dLCBbJ0JlY2F1c2UnLCBbODc1N11dLCBbJ2JlbXB0eXYnLCBbMTA2NzJdXSwgWydiZXBzaScsIFsxMDE0XV0sIFsnYmVybm91JywgWzg0OTJdXSwgWydCZXJub3VsbGlzJywgWzg0OTJdXSwgWydCZXRhJywgWzkxNF1dLCBbJ2JldGEnLCBbOTQ2XV0sIFsnYmV0aCcsIFs4NTAyXV0sIFsnYmV0d2VlbicsIFs4ODEyXV0sIFsnQmZyJywgWzEyMDA2OV1dLCBbJ2JmcicsIFsxMjAwOTVdXSwgWydiaWdjYXAnLCBbODg5OF1dLCBbJ2JpZ2NpcmMnLCBbOTcxMV1dLCBbJ2JpZ2N1cCcsIFs4ODk5XV0sIFsnYmlnb2RvdCcsIFsxMDc1Ml1dLCBbJ2JpZ29wbHVzJywgWzEwNzUzXV0sIFsnYmlnb3RpbWVzJywgWzEwNzU0XV0sIFsnYmlnc3FjdXAnLCBbMTA3NThdXSwgWydiaWdzdGFyJywgWzk3MzNdXSwgWydiaWd0cmlhbmdsZWRvd24nLCBbOTY2MV1dLCBbJ2JpZ3RyaWFuZ2xldXAnLCBbOTY1MV1dLCBbJ2JpZ3VwbHVzJywgWzEwNzU2XV0sIFsnYmlndmVlJywgWzg4OTddXSwgWydiaWd3ZWRnZScsIFs4ODk2XV0sIFsnYmthcm93JywgWzEwNTA5XV0sIFsnYmxhY2tsb3plbmdlJywgWzEwNzMxXV0sIFsnYmxhY2tzcXVhcmUnLCBbOTY0Ml1dLCBbJ2JsYWNrdHJpYW5nbGUnLCBbOTY1Ml1dLCBbJ2JsYWNrdHJpYW5nbGVkb3duJywgWzk2NjJdXSwgWydibGFja3RyaWFuZ2xlbGVmdCcsIFs5NjY2XV0sIFsnYmxhY2t0cmlhbmdsZXJpZ2h0JywgWzk2NTZdXSwgWydibGFuaycsIFs5MjUxXV0sIFsnYmxrMTInLCBbOTYxOF1dLCBbJ2JsazE0JywgWzk2MTddXSwgWydibGszNCcsIFs5NjE5XV0sIFsnYmxvY2snLCBbOTYwOF1dLCBbJ2JuZScsIFs2MSwgODQyMV1dLCBbJ2JuZXF1aXYnLCBbODgwMSwgODQyMV1dLCBbJ2JOb3QnLCBbMTA5ODldXSwgWydibm90JywgWzg5NzZdXSwgWydCb3BmJywgWzEyMDEyMV1dLCBbJ2JvcGYnLCBbMTIwMTQ3XV0sIFsnYm90JywgWzg4NjldXSwgWydib3R0b20nLCBbODg2OV1dLCBbJ2Jvd3RpZScsIFs4OTA0XV0sIFsnYm94Ym94JywgWzEwNjk3XV0sIFsnYm94ZGwnLCBbOTQ4OF1dLCBbJ2JveGRMJywgWzk1NTddXSwgWydib3hEbCcsIFs5NTU4XV0sIFsnYm94REwnLCBbOTU1OV1dLCBbJ2JveGRyJywgWzk0ODRdXSwgWydib3hkUicsIFs5NTU0XV0sIFsnYm94RHInLCBbOTU1NV1dLCBbJ2JveERSJywgWzk1NTZdXSwgWydib3hoJywgWzk0NzJdXSwgWydib3hIJywgWzk1NTJdXSwgWydib3hoZCcsIFs5NTE2XV0sIFsnYm94SGQnLCBbOTU3Ml1dLCBbJ2JveGhEJywgWzk1NzNdXSwgWydib3hIRCcsIFs5NTc0XV0sIFsnYm94aHUnLCBbOTUyNF1dLCBbJ2JveEh1JywgWzk1NzVdXSwgWydib3hoVScsIFs5NTc2XV0sIFsnYm94SFUnLCBbOTU3N11dLCBbJ2JveG1pbnVzJywgWzg4NjNdXSwgWydib3hwbHVzJywgWzg4NjJdXSwgWydib3h0aW1lcycsIFs4ODY0XV0sIFsnYm94dWwnLCBbOTQ5Nl1dLCBbJ2JveHVMJywgWzk1NjNdXSwgWydib3hVbCcsIFs5NTY0XV0sIFsnYm94VUwnLCBbOTU2NV1dLCBbJ2JveHVyJywgWzk0OTJdXSwgWydib3h1UicsIFs5NTYwXV0sIFsnYm94VXInLCBbOTU2MV1dLCBbJ2JveFVSJywgWzk1NjJdXSwgWydib3h2JywgWzk0NzRdXSwgWydib3hWJywgWzk1NTNdXSwgWydib3h2aCcsIFs5NTMyXV0sIFsnYm94dkgnLCBbOTU3OF1dLCBbJ2JveFZoJywgWzk1NzldXSwgWydib3hWSCcsIFs5NTgwXV0sIFsnYm94dmwnLCBbOTUwOF1dLCBbJ2JveHZMJywgWzk1NjldXSwgWydib3hWbCcsIFs5NTcwXV0sIFsnYm94VkwnLCBbOTU3MV1dLCBbJ2JveHZyJywgWzk1MDBdXSwgWydib3h2UicsIFs5NTY2XV0sIFsnYm94VnInLCBbOTU2N11dLCBbJ2JveFZSJywgWzk1NjhdXSwgWydicHJpbWUnLCBbODI0NV1dLCBbJ2JyZXZlJywgWzcyOF1dLCBbJ0JyZXZlJywgWzcyOF1dLCBbJ2JydmJhcicsIFsxNjZdXSwgWydic2NyJywgWzExOTk5MV1dLCBbJ0JzY3InLCBbODQ5Ml1dLCBbJ2JzZW1pJywgWzgyNzFdXSwgWydic2ltJywgWzg3NjVdXSwgWydic2ltZScsIFs4OTA5XV0sIFsnYnNvbGInLCBbMTA2OTNdXSwgWydic29sJywgWzkyXV0sIFsnYnNvbGhzdWInLCBbMTAxODRdXSwgWydidWxsJywgWzgyMjZdXSwgWydidWxsZXQnLCBbODIyNl1dLCBbJ2J1bXAnLCBbODc4Ml1dLCBbJ2J1bXBFJywgWzEwOTI2XV0sIFsnYnVtcGUnLCBbODc4M11dLCBbJ0J1bXBlcScsIFs4NzgyXV0sIFsnYnVtcGVxJywgWzg3ODNdXSwgWydDYWN1dGUnLCBbMjYyXV0sIFsnY2FjdXRlJywgWzI2M11dLCBbJ2NhcGFuZCcsIFsxMDgyMF1dLCBbJ2NhcGJyY3VwJywgWzEwODI1XV0sIFsnY2FwY2FwJywgWzEwODI3XV0sIFsnY2FwJywgWzg3NDVdXSwgWydDYXAnLCBbODkxNF1dLCBbJ2NhcGN1cCcsIFsxMDgyM11dLCBbJ2NhcGRvdCcsIFsxMDgxNl1dLCBbJ0NhcGl0YWxEaWZmZXJlbnRpYWxEJywgWzg1MTddXSwgWydjYXBzJywgWzg3NDUsIDY1MDI0XV0sIFsnY2FyZXQnLCBbODI1N11dLCBbJ2Nhcm9uJywgWzcxMV1dLCBbJ0NheWxleXMnLCBbODQ5M11dLCBbJ2NjYXBzJywgWzEwODI5XV0sIFsnQ2Nhcm9uJywgWzI2OF1dLCBbJ2NjYXJvbicsIFsyNjldXSwgWydDY2VkaWwnLCBbMTk5XV0sIFsnY2NlZGlsJywgWzIzMV1dLCBbJ0NjaXJjJywgWzI2NF1dLCBbJ2NjaXJjJywgWzI2NV1dLCBbJ0Njb25pbnQnLCBbODc1Ml1dLCBbJ2NjdXBzJywgWzEwODI4XV0sIFsnY2N1cHNzbScsIFsxMDgzMl1dLCBbJ0Nkb3QnLCBbMjY2XV0sIFsnY2RvdCcsIFsyNjddXSwgWydjZWRpbCcsIFsxODRdXSwgWydDZWRpbGxhJywgWzE4NF1dLCBbJ2NlbXB0eXYnLCBbMTA2NzRdXSwgWydjZW50JywgWzE2Ml1dLCBbJ2NlbnRlcmRvdCcsIFsxODNdXSwgWydDZW50ZXJEb3QnLCBbMTgzXV0sIFsnY2ZyJywgWzEyMDA5Nl1dLCBbJ0NmcicsIFs4NDkzXV0sIFsnQ0hjeScsIFsxMDYzXV0sIFsnY2hjeScsIFsxMDk1XV0sIFsnY2hlY2snLCBbMTAwMDNdXSwgWydjaGVja21hcmsnLCBbMTAwMDNdXSwgWydDaGknLCBbOTM1XV0sIFsnY2hpJywgWzk2N11dLCBbJ2NpcmMnLCBbNzEwXV0sIFsnY2lyY2VxJywgWzg3OTFdXSwgWydjaXJjbGVhcnJvd2xlZnQnLCBbODYzNF1dLCBbJ2NpcmNsZWFycm93cmlnaHQnLCBbODYzNV1dLCBbJ2NpcmNsZWRhc3QnLCBbODg1OV1dLCBbJ2NpcmNsZWRjaXJjJywgWzg4NThdXSwgWydjaXJjbGVkZGFzaCcsIFs4ODYxXV0sIFsnQ2lyY2xlRG90JywgWzg4NTddXSwgWydjaXJjbGVkUicsIFsxNzRdXSwgWydjaXJjbGVkUycsIFs5NDE2XV0sIFsnQ2lyY2xlTWludXMnLCBbODg1NF1dLCBbJ0NpcmNsZVBsdXMnLCBbODg1M11dLCBbJ0NpcmNsZVRpbWVzJywgWzg4NTVdXSwgWydjaXInLCBbOTY3NV1dLCBbJ2NpckUnLCBbMTA2OTFdXSwgWydjaXJlJywgWzg3OTFdXSwgWydjaXJmbmludCcsIFsxMDc2OF1dLCBbJ2Npcm1pZCcsIFsxMDk5MV1dLCBbJ2NpcnNjaXInLCBbMTA2OTBdXSwgWydDbG9ja3dpc2VDb250b3VySW50ZWdyYWwnLCBbODc1NF1dLCBbJ2NsdWJzJywgWzk4MjddXSwgWydjbHVic3VpdCcsIFs5ODI3XV0sIFsnY29sb24nLCBbNThdXSwgWydDb2xvbicsIFs4NzU5XV0sIFsnQ29sb25lJywgWzEwODY4XV0sIFsnY29sb25lJywgWzg3ODhdXSwgWydjb2xvbmVxJywgWzg3ODhdXSwgWydjb21tYScsIFs0NF1dLCBbJ2NvbW1hdCcsIFs2NF1dLCBbJ2NvbXAnLCBbODcwNV1dLCBbJ2NvbXBmbicsIFs4NzI4XV0sIFsnY29tcGxlbWVudCcsIFs4NzA1XV0sIFsnY29tcGxleGVzJywgWzg0NTBdXSwgWydjb25nJywgWzg3NzNdXSwgWydjb25nZG90JywgWzEwODYxXV0sIFsnQ29uZ3J1ZW50JywgWzg4MDFdXSwgWydjb25pbnQnLCBbODc1MF1dLCBbJ0NvbmludCcsIFs4NzUxXV0sIFsnQ29udG91ckludGVncmFsJywgWzg3NTBdXSwgWydjb3BmJywgWzEyMDE0OF1dLCBbJ0NvcGYnLCBbODQ1MF1dLCBbJ2NvcHJvZCcsIFs4NzIwXV0sIFsnQ29wcm9kdWN0JywgWzg3MjBdXSwgWydjb3B5JywgWzE2OV1dLCBbJ0NPUFknLCBbMTY5XV0sIFsnY29weXNyJywgWzg0NzFdXSwgWydDb3VudGVyQ2xvY2t3aXNlQ29udG91ckludGVncmFsJywgWzg3NTVdXSwgWydjcmFycicsIFs4NjI5XV0sIFsnY3Jvc3MnLCBbMTAwMDddXSwgWydDcm9zcycsIFsxMDc5OV1dLCBbJ0NzY3InLCBbMTE5OTY2XV0sIFsnY3NjcicsIFsxMTk5OTJdXSwgWydjc3ViJywgWzEwOTU5XV0sIFsnY3N1YmUnLCBbMTA5NjFdXSwgWydjc3VwJywgWzEwOTYwXV0sIFsnY3N1cGUnLCBbMTA5NjJdXSwgWydjdGRvdCcsIFs4OTQzXV0sIFsnY3VkYXJybCcsIFsxMDU1Ml1dLCBbJ2N1ZGFycnInLCBbMTA1NDldXSwgWydjdWVwcicsIFs4OTI2XV0sIFsnY3Vlc2MnLCBbODkyN11dLCBbJ2N1bGFycicsIFs4NjMwXV0sIFsnY3VsYXJycCcsIFsxMDU1N11dLCBbJ2N1cGJyY2FwJywgWzEwODI0XV0sIFsnY3VwY2FwJywgWzEwODIyXV0sIFsnQ3VwQ2FwJywgWzg3ODFdXSwgWydjdXAnLCBbODc0Nl1dLCBbJ0N1cCcsIFs4OTE1XV0sIFsnY3VwY3VwJywgWzEwODI2XV0sIFsnY3VwZG90JywgWzg4NDVdXSwgWydjdXBvcicsIFsxMDgyMV1dLCBbJ2N1cHMnLCBbODc0NiwgNjUwMjRdXSwgWydjdXJhcnInLCBbODYzMV1dLCBbJ2N1cmFycm0nLCBbMTA1NTZdXSwgWydjdXJseWVxcHJlYycsIFs4OTI2XV0sIFsnY3VybHllcXN1Y2MnLCBbODkyN11dLCBbJ2N1cmx5dmVlJywgWzg5MTBdXSwgWydjdXJseXdlZGdlJywgWzg5MTFdXSwgWydjdXJyZW4nLCBbMTY0XV0sIFsnY3VydmVhcnJvd2xlZnQnLCBbODYzMF1dLCBbJ2N1cnZlYXJyb3dyaWdodCcsIFs4NjMxXV0sIFsnY3V2ZWUnLCBbODkxMF1dLCBbJ2N1d2VkJywgWzg5MTFdXSwgWydjd2NvbmludCcsIFs4NzU0XV0sIFsnY3dpbnQnLCBbODc1M11dLCBbJ2N5bGN0eScsIFs5MDA1XV0sIFsnZGFnZ2VyJywgWzgyMjRdXSwgWydEYWdnZXInLCBbODIyNV1dLCBbJ2RhbGV0aCcsIFs4NTA0XV0sIFsnZGFycicsIFs4NTk1XV0sIFsnRGFycicsIFs4NjA5XV0sIFsnZEFycicsIFs4NjU5XV0sIFsnZGFzaCcsIFs4MjA4XV0sIFsnRGFzaHYnLCBbMTA5ODBdXSwgWydkYXNodicsIFs4ODY3XV0sIFsnZGJrYXJvdycsIFsxMDUxMV1dLCBbJ2RibGFjJywgWzczM11dLCBbJ0RjYXJvbicsIFsyNzBdXSwgWydkY2Fyb24nLCBbMjcxXV0sIFsnRGN5JywgWzEwNDRdXSwgWydkY3knLCBbMTA3Nl1dLCBbJ2RkYWdnZXInLCBbODIyNV1dLCBbJ2RkYXJyJywgWzg2NTBdXSwgWydERCcsIFs4NTE3XV0sIFsnZGQnLCBbODUxOF1dLCBbJ0REb3RyYWhkJywgWzEwNTEzXV0sIFsnZGRvdHNlcScsIFsxMDg3MV1dLCBbJ2RlZycsIFsxNzZdXSwgWydEZWwnLCBbODcxMV1dLCBbJ0RlbHRhJywgWzkxNl1dLCBbJ2RlbHRhJywgWzk0OF1dLCBbJ2RlbXB0eXYnLCBbMTA2NzNdXSwgWydkZmlzaHQnLCBbMTA2MjNdXSwgWydEZnInLCBbMTIwMDcxXV0sIFsnZGZyJywgWzEyMDA5N11dLCBbJ2RIYXInLCBbMTA1OTddXSwgWydkaGFybCcsIFs4NjQzXV0sIFsnZGhhcnInLCBbODY0Ml1dLCBbJ0RpYWNyaXRpY2FsQWN1dGUnLCBbMTgwXV0sIFsnRGlhY3JpdGljYWxEb3QnLCBbNzI5XV0sIFsnRGlhY3JpdGljYWxEb3VibGVBY3V0ZScsIFs3MzNdXSwgWydEaWFjcml0aWNhbEdyYXZlJywgWzk2XV0sIFsnRGlhY3JpdGljYWxUaWxkZScsIFs3MzJdXSwgWydkaWFtJywgWzg5MDBdXSwgWydkaWFtb25kJywgWzg5MDBdXSwgWydEaWFtb25kJywgWzg5MDBdXSwgWydkaWFtb25kc3VpdCcsIFs5ODMwXV0sIFsnZGlhbXMnLCBbOTgzMF1dLCBbJ2RpZScsIFsxNjhdXSwgWydEaWZmZXJlbnRpYWxEJywgWzg1MThdXSwgWydkaWdhbW1hJywgWzk4OV1dLCBbJ2Rpc2luJywgWzg5NDZdXSwgWydkaXYnLCBbMjQ3XV0sIFsnZGl2aWRlJywgWzI0N11dLCBbJ2RpdmlkZW9udGltZXMnLCBbODkwM11dLCBbJ2Rpdm9ueCcsIFs4OTAzXV0sIFsnREpjeScsIFsxMDI2XV0sIFsnZGpjeScsIFsxMTA2XV0sIFsnZGxjb3JuJywgWzg5OTBdXSwgWydkbGNyb3AnLCBbODk3M11dLCBbJ2RvbGxhcicsIFszNl1dLCBbJ0RvcGYnLCBbMTIwMTIzXV0sIFsnZG9wZicsIFsxMjAxNDldXSwgWydEb3QnLCBbMTY4XV0sIFsnZG90JywgWzcyOV1dLCBbJ0RvdERvdCcsIFs4NDEyXV0sIFsnZG90ZXEnLCBbODc4NF1dLCBbJ2RvdGVxZG90JywgWzg3ODVdXSwgWydEb3RFcXVhbCcsIFs4Nzg0XV0sIFsnZG90bWludXMnLCBbODc2MF1dLCBbJ2RvdHBsdXMnLCBbODcyNF1dLCBbJ2RvdHNxdWFyZScsIFs4ODY1XV0sIFsnZG91YmxlYmFyd2VkZ2UnLCBbODk2Nl1dLCBbJ0RvdWJsZUNvbnRvdXJJbnRlZ3JhbCcsIFs4NzUxXV0sIFsnRG91YmxlRG90JywgWzE2OF1dLCBbJ0RvdWJsZURvd25BcnJvdycsIFs4NjU5XV0sIFsnRG91YmxlTGVmdEFycm93JywgWzg2NTZdXSwgWydEb3VibGVMZWZ0UmlnaHRBcnJvdycsIFs4NjYwXV0sIFsnRG91YmxlTGVmdFRlZScsIFsxMDk4MF1dLCBbJ0RvdWJsZUxvbmdMZWZ0QXJyb3cnLCBbMTAyMzJdXSwgWydEb3VibGVMb25nTGVmdFJpZ2h0QXJyb3cnLCBbMTAyMzRdXSwgWydEb3VibGVMb25nUmlnaHRBcnJvdycsIFsxMDIzM11dLCBbJ0RvdWJsZVJpZ2h0QXJyb3cnLCBbODY1OF1dLCBbJ0RvdWJsZVJpZ2h0VGVlJywgWzg4NzJdXSwgWydEb3VibGVVcEFycm93JywgWzg2NTddXSwgWydEb3VibGVVcERvd25BcnJvdycsIFs4NjYxXV0sIFsnRG91YmxlVmVydGljYWxCYXInLCBbODc0MV1dLCBbJ0Rvd25BcnJvd0JhcicsIFsxMDUxNV1dLCBbJ2Rvd25hcnJvdycsIFs4NTk1XV0sIFsnRG93bkFycm93JywgWzg1OTVdXSwgWydEb3duYXJyb3cnLCBbODY1OV1dLCBbJ0Rvd25BcnJvd1VwQXJyb3cnLCBbODY5M11dLCBbJ0Rvd25CcmV2ZScsIFs3ODVdXSwgWydkb3duZG93bmFycm93cycsIFs4NjUwXV0sIFsnZG93bmhhcnBvb25sZWZ0JywgWzg2NDNdXSwgWydkb3duaGFycG9vbnJpZ2h0JywgWzg2NDJdXSwgWydEb3duTGVmdFJpZ2h0VmVjdG9yJywgWzEwNTc2XV0sIFsnRG93bkxlZnRUZWVWZWN0b3InLCBbMTA1OTBdXSwgWydEb3duTGVmdFZlY3RvckJhcicsIFsxMDU4Ml1dLCBbJ0Rvd25MZWZ0VmVjdG9yJywgWzg2MzddXSwgWydEb3duUmlnaHRUZWVWZWN0b3InLCBbMTA1OTFdXSwgWydEb3duUmlnaHRWZWN0b3JCYXInLCBbMTA1ODNdXSwgWydEb3duUmlnaHRWZWN0b3InLCBbODY0MV1dLCBbJ0Rvd25UZWVBcnJvdycsIFs4NjE1XV0sIFsnRG93blRlZScsIFs4ODY4XV0sIFsnZHJia2Fyb3cnLCBbMTA1MTJdXSwgWydkcmNvcm4nLCBbODk5MV1dLCBbJ2RyY3JvcCcsIFs4OTcyXV0sIFsnRHNjcicsIFsxMTk5NjddXSwgWydkc2NyJywgWzExOTk5M11dLCBbJ0RTY3knLCBbMTAyOV1dLCBbJ2RzY3knLCBbMTEwOV1dLCBbJ2Rzb2wnLCBbMTA3NDJdXSwgWydEc3Ryb2snLCBbMjcyXV0sIFsnZHN0cm9rJywgWzI3M11dLCBbJ2R0ZG90JywgWzg5NDVdXSwgWydkdHJpJywgWzk2NjNdXSwgWydkdHJpZicsIFs5NjYyXV0sIFsnZHVhcnInLCBbODY5M11dLCBbJ2R1aGFyJywgWzEwNjA3XV0sIFsnZHdhbmdsZScsIFsxMDY2Ml1dLCBbJ0RaY3knLCBbMTAzOV1dLCBbJ2R6Y3knLCBbMTExOV1dLCBbJ2R6aWdyYXJyJywgWzEwMjM5XV0sIFsnRWFjdXRlJywgWzIwMV1dLCBbJ2VhY3V0ZScsIFsyMzNdXSwgWydlYXN0ZXInLCBbMTA4NjJdXSwgWydFY2Fyb24nLCBbMjgyXV0sIFsnZWNhcm9uJywgWzI4M11dLCBbJ0VjaXJjJywgWzIwMl1dLCBbJ2VjaXJjJywgWzIzNF1dLCBbJ2VjaXInLCBbODc5MF1dLCBbJ2Vjb2xvbicsIFs4Nzg5XV0sIFsnRWN5JywgWzEwNjldXSwgWydlY3knLCBbMTEwMV1dLCBbJ2VERG90JywgWzEwODcxXV0sIFsnRWRvdCcsIFsyNzhdXSwgWydlZG90JywgWzI3OV1dLCBbJ2VEb3QnLCBbODc4NV1dLCBbJ2VlJywgWzg1MTldXSwgWydlZkRvdCcsIFs4Nzg2XV0sIFsnRWZyJywgWzEyMDA3Ml1dLCBbJ2VmcicsIFsxMjAwOThdXSwgWydlZycsIFsxMDkwNl1dLCBbJ0VncmF2ZScsIFsyMDBdXSwgWydlZ3JhdmUnLCBbMjMyXV0sIFsnZWdzJywgWzEwOTAyXV0sIFsnZWdzZG90JywgWzEwOTA0XV0sIFsnZWwnLCBbMTA5MDVdXSwgWydFbGVtZW50JywgWzg3MTJdXSwgWydlbGludGVycycsIFs5MTkxXV0sIFsnZWxsJywgWzg0NjddXSwgWydlbHMnLCBbMTA5MDFdXSwgWydlbHNkb3QnLCBbMTA5MDNdXSwgWydFbWFjcicsIFsyNzRdXSwgWydlbWFjcicsIFsyNzVdXSwgWydlbXB0eScsIFs4NzA5XV0sIFsnZW1wdHlzZXQnLCBbODcwOV1dLCBbJ0VtcHR5U21hbGxTcXVhcmUnLCBbOTcyM11dLCBbJ2VtcHR5dicsIFs4NzA5XV0sIFsnRW1wdHlWZXJ5U21hbGxTcXVhcmUnLCBbOTY0M11dLCBbJ2Vtc3AxMycsIFs4MTk2XV0sIFsnZW1zcDE0JywgWzgxOTddXSwgWydlbXNwJywgWzgxOTVdXSwgWydFTkcnLCBbMzMwXV0sIFsnZW5nJywgWzMzMV1dLCBbJ2Vuc3AnLCBbODE5NF1dLCBbJ0VvZ29uJywgWzI4MF1dLCBbJ2VvZ29uJywgWzI4MV1dLCBbJ0VvcGYnLCBbMTIwMTI0XV0sIFsnZW9wZicsIFsxMjAxNTBdXSwgWydlcGFyJywgWzg5MTddXSwgWydlcGFyc2wnLCBbMTA3MjNdXSwgWydlcGx1cycsIFsxMDg2NV1dLCBbJ2Vwc2knLCBbOTQ5XV0sIFsnRXBzaWxvbicsIFs5MTddXSwgWydlcHNpbG9uJywgWzk0OV1dLCBbJ2Vwc2l2JywgWzEwMTNdXSwgWydlcWNpcmMnLCBbODc5MF1dLCBbJ2VxY29sb24nLCBbODc4OV1dLCBbJ2Vxc2ltJywgWzg3NzBdXSwgWydlcXNsYW50Z3RyJywgWzEwOTAyXV0sIFsnZXFzbGFudGxlc3MnLCBbMTA5MDFdXSwgWydFcXVhbCcsIFsxMDg2OV1dLCBbJ2VxdWFscycsIFs2MV1dLCBbJ0VxdWFsVGlsZGUnLCBbODc3MF1dLCBbJ2VxdWVzdCcsIFs4Nzk5XV0sIFsnRXF1aWxpYnJpdW0nLCBbODY1Ml1dLCBbJ2VxdWl2JywgWzg4MDFdXSwgWydlcXVpdkREJywgWzEwODcyXV0sIFsnZXF2cGFyc2wnLCBbMTA3MjVdXSwgWydlcmFycicsIFsxMDYwOV1dLCBbJ2VyRG90JywgWzg3ODddXSwgWydlc2NyJywgWzg0OTVdXSwgWydFc2NyJywgWzg0OTZdXSwgWydlc2RvdCcsIFs4Nzg0XV0sIFsnRXNpbScsIFsxMDg2N11dLCBbJ2VzaW0nLCBbODc3MF1dLCBbJ0V0YScsIFs5MTldXSwgWydldGEnLCBbOTUxXV0sIFsnRVRIJywgWzIwOF1dLCBbJ2V0aCcsIFsyNDBdXSwgWydFdW1sJywgWzIwM11dLCBbJ2V1bWwnLCBbMjM1XV0sIFsnZXVybycsIFs4MzY0XV0sIFsnZXhjbCcsIFszM11dLCBbJ2V4aXN0JywgWzg3MDddXSwgWydFeGlzdHMnLCBbODcwN11dLCBbJ2V4cGVjdGF0aW9uJywgWzg0OTZdXSwgWydleHBvbmVudGlhbGUnLCBbODUxOV1dLCBbJ0V4cG9uZW50aWFsRScsIFs4NTE5XV0sIFsnZmFsbGluZ2RvdHNlcScsIFs4Nzg2XV0sIFsnRmN5JywgWzEwNjBdXSwgWydmY3knLCBbMTA5Ml1dLCBbJ2ZlbWFsZScsIFs5NzkyXV0sIFsnZmZpbGlnJywgWzY0MjU5XV0sIFsnZmZsaWcnLCBbNjQyNTZdXSwgWydmZmxsaWcnLCBbNjQyNjBdXSwgWydGZnInLCBbMTIwMDczXV0sIFsnZmZyJywgWzEyMDA5OV1dLCBbJ2ZpbGlnJywgWzY0MjU3XV0sIFsnRmlsbGVkU21hbGxTcXVhcmUnLCBbOTcyNF1dLCBbJ0ZpbGxlZFZlcnlTbWFsbFNxdWFyZScsIFs5NjQyXV0sIFsnZmpsaWcnLCBbMTAyLCAxMDZdXSwgWydmbGF0JywgWzk4MzddXSwgWydmbGxpZycsIFs2NDI1OF1dLCBbJ2ZsdG5zJywgWzk2NDldXSwgWydmbm9mJywgWzQwMl1dLCBbJ0ZvcGYnLCBbMTIwMTI1XV0sIFsnZm9wZicsIFsxMjAxNTFdXSwgWydmb3JhbGwnLCBbODcwNF1dLCBbJ0ZvckFsbCcsIFs4NzA0XV0sIFsnZm9yaycsIFs4OTE2XV0sIFsnZm9ya3YnLCBbMTA5NjldXSwgWydGb3VyaWVydHJmJywgWzg0OTddXSwgWydmcGFydGludCcsIFsxMDc2NV1dLCBbJ2ZyYWMxMicsIFsxODldXSwgWydmcmFjMTMnLCBbODUzMV1dLCBbJ2ZyYWMxNCcsIFsxODhdXSwgWydmcmFjMTUnLCBbODUzM11dLCBbJ2ZyYWMxNicsIFs4NTM3XV0sIFsnZnJhYzE4JywgWzg1MzldXSwgWydmcmFjMjMnLCBbODUzMl1dLCBbJ2ZyYWMyNScsIFs4NTM0XV0sIFsnZnJhYzM0JywgWzE5MF1dLCBbJ2ZyYWMzNScsIFs4NTM1XV0sIFsnZnJhYzM4JywgWzg1NDBdXSwgWydmcmFjNDUnLCBbODUzNl1dLCBbJ2ZyYWM1NicsIFs4NTM4XV0sIFsnZnJhYzU4JywgWzg1NDFdXSwgWydmcmFjNzgnLCBbODU0Ml1dLCBbJ2ZyYXNsJywgWzgyNjBdXSwgWydmcm93bicsIFs4OTk0XV0sIFsnZnNjcicsIFsxMTk5OTVdXSwgWydGc2NyJywgWzg0OTddXSwgWydnYWN1dGUnLCBbNTAxXV0sIFsnR2FtbWEnLCBbOTE1XV0sIFsnZ2FtbWEnLCBbOTQ3XV0sIFsnR2FtbWFkJywgWzk4OF1dLCBbJ2dhbW1hZCcsIFs5ODldXSwgWydnYXAnLCBbMTA4ODZdXSwgWydHYnJldmUnLCBbMjg2XV0sIFsnZ2JyZXZlJywgWzI4N11dLCBbJ0djZWRpbCcsIFsyOTBdXSwgWydHY2lyYycsIFsyODRdXSwgWydnY2lyYycsIFsyODVdXSwgWydHY3knLCBbMTA0M11dLCBbJ2djeScsIFsxMDc1XV0sIFsnR2RvdCcsIFsyODhdXSwgWydnZG90JywgWzI4OV1dLCBbJ2dlJywgWzg4MDVdXSwgWydnRScsIFs4ODA3XV0sIFsnZ0VsJywgWzEwODkyXV0sIFsnZ2VsJywgWzg5MjNdXSwgWydnZXEnLCBbODgwNV1dLCBbJ2dlcXEnLCBbODgwN11dLCBbJ2dlcXNsYW50JywgWzEwODc4XV0sIFsnZ2VzY2MnLCBbMTA5MjFdXSwgWydnZXMnLCBbMTA4NzhdXSwgWydnZXNkb3QnLCBbMTA4ODBdXSwgWydnZXNkb3RvJywgWzEwODgyXV0sIFsnZ2VzZG90b2wnLCBbMTA4ODRdXSwgWydnZXNsJywgWzg5MjMsIDY1MDI0XV0sIFsnZ2VzbGVzJywgWzEwOTAwXV0sIFsnR2ZyJywgWzEyMDA3NF1dLCBbJ2dmcicsIFsxMjAxMDBdXSwgWydnZycsIFs4ODExXV0sIFsnR2cnLCBbODkyMV1dLCBbJ2dnZycsIFs4OTIxXV0sIFsnZ2ltZWwnLCBbODUwM11dLCBbJ0dKY3knLCBbMTAyN11dLCBbJ2dqY3knLCBbMTEwN11dLCBbJ2dsYScsIFsxMDkxN11dLCBbJ2dsJywgWzg4MjNdXSwgWydnbEUnLCBbMTA4OThdXSwgWydnbGonLCBbMTA5MTZdXSwgWydnbmFwJywgWzEwODkwXV0sIFsnZ25hcHByb3gnLCBbMTA4OTBdXSwgWydnbmUnLCBbMTA4ODhdXSwgWydnbkUnLCBbODgwOV1dLCBbJ2duZXEnLCBbMTA4ODhdXSwgWydnbmVxcScsIFs4ODA5XV0sIFsnZ25zaW0nLCBbODkzNV1dLCBbJ0dvcGYnLCBbMTIwMTI2XV0sIFsnZ29wZicsIFsxMjAxNTJdXSwgWydncmF2ZScsIFs5Nl1dLCBbJ0dyZWF0ZXJFcXVhbCcsIFs4ODA1XV0sIFsnR3JlYXRlckVxdWFsTGVzcycsIFs4OTIzXV0sIFsnR3JlYXRlckZ1bGxFcXVhbCcsIFs4ODA3XV0sIFsnR3JlYXRlckdyZWF0ZXInLCBbMTA5MTRdXSwgWydHcmVhdGVyTGVzcycsIFs4ODIzXV0sIFsnR3JlYXRlclNsYW50RXF1YWwnLCBbMTA4NzhdXSwgWydHcmVhdGVyVGlsZGUnLCBbODgxOV1dLCBbJ0dzY3InLCBbMTE5OTcwXV0sIFsnZ3NjcicsIFs4NDU4XV0sIFsnZ3NpbScsIFs4ODE5XV0sIFsnZ3NpbWUnLCBbMTA4OTRdXSwgWydnc2ltbCcsIFsxMDg5Nl1dLCBbJ2d0Y2MnLCBbMTA5MTldXSwgWydndGNpcicsIFsxMDg3NF1dLCBbJ2d0JywgWzYyXV0sIFsnR1QnLCBbNjJdXSwgWydHdCcsIFs4ODExXV0sIFsnZ3Rkb3QnLCBbODkxOV1dLCBbJ2d0bFBhcicsIFsxMDY0NV1dLCBbJ2d0cXVlc3QnLCBbMTA4NzZdXSwgWydndHJhcHByb3gnLCBbMTA4ODZdXSwgWydndHJhcnInLCBbMTA2MTZdXSwgWydndHJkb3QnLCBbODkxOV1dLCBbJ2d0cmVxbGVzcycsIFs4OTIzXV0sIFsnZ3RyZXFxbGVzcycsIFsxMDg5Ml1dLCBbJ2d0cmxlc3MnLCBbODgyM11dLCBbJ2d0cnNpbScsIFs4ODE5XV0sIFsnZ3ZlcnRuZXFxJywgWzg4MDksIDY1MDI0XV0sIFsnZ3ZuRScsIFs4ODA5LCA2NTAyNF1dLCBbJ0hhY2VrJywgWzcxMV1dLCBbJ2hhaXJzcCcsIFs4MjAyXV0sIFsnaGFsZicsIFsxODldXSwgWydoYW1pbHQnLCBbODQ1OV1dLCBbJ0hBUkRjeScsIFsxMDY2XV0sIFsnaGFyZGN5JywgWzEwOThdXSwgWydoYXJyY2lyJywgWzEwNTY4XV0sIFsnaGFycicsIFs4NTk2XV0sIFsnaEFycicsIFs4NjYwXV0sIFsnaGFycncnLCBbODYyMV1dLCBbJ0hhdCcsIFs5NF1dLCBbJ2hiYXInLCBbODQ2M11dLCBbJ0hjaXJjJywgWzI5Ml1dLCBbJ2hjaXJjJywgWzI5M11dLCBbJ2hlYXJ0cycsIFs5ODI5XV0sIFsnaGVhcnRzdWl0JywgWzk4MjldXSwgWydoZWxsaXAnLCBbODIzMF1dLCBbJ2hlcmNvbicsIFs4ODg5XV0sIFsnaGZyJywgWzEyMDEwMV1dLCBbJ0hmcicsIFs4NDYwXV0sIFsnSGlsYmVydFNwYWNlJywgWzg0NTldXSwgWydoa3NlYXJvdycsIFsxMDUzM11dLCBbJ2hrc3dhcm93JywgWzEwNTM0XV0sIFsnaG9hcnInLCBbODcwM11dLCBbJ2hvbXRodCcsIFs4NzYzXV0sIFsnaG9va2xlZnRhcnJvdycsIFs4NjE3XV0sIFsnaG9va3JpZ2h0YXJyb3cnLCBbODYxOF1dLCBbJ2hvcGYnLCBbMTIwMTUzXV0sIFsnSG9wZicsIFs4NDYxXV0sIFsnaG9yYmFyJywgWzgyMTNdXSwgWydIb3Jpem9udGFsTGluZScsIFs5NDcyXV0sIFsnaHNjcicsIFsxMTk5OTddXSwgWydIc2NyJywgWzg0NTldXSwgWydoc2xhc2gnLCBbODQ2M11dLCBbJ0hzdHJvaycsIFsyOTRdXSwgWydoc3Ryb2snLCBbMjk1XV0sIFsnSHVtcERvd25IdW1wJywgWzg3ODJdXSwgWydIdW1wRXF1YWwnLCBbODc4M11dLCBbJ2h5YnVsbCcsIFs4MjU5XV0sIFsnaHlwaGVuJywgWzgyMDhdXSwgWydJYWN1dGUnLCBbMjA1XV0sIFsnaWFjdXRlJywgWzIzN11dLCBbJ2ljJywgWzgyOTFdXSwgWydJY2lyYycsIFsyMDZdXSwgWydpY2lyYycsIFsyMzhdXSwgWydJY3knLCBbMTA0OF1dLCBbJ2ljeScsIFsxMDgwXV0sIFsnSWRvdCcsIFszMDRdXSwgWydJRWN5JywgWzEwNDVdXSwgWydpZWN5JywgWzEwNzddXSwgWydpZXhjbCcsIFsxNjFdXSwgWydpZmYnLCBbODY2MF1dLCBbJ2lmcicsIFsxMjAxMDJdXSwgWydJZnInLCBbODQ2NV1dLCBbJ0lncmF2ZScsIFsyMDRdXSwgWydpZ3JhdmUnLCBbMjM2XV0sIFsnaWknLCBbODUyMF1dLCBbJ2lpaWludCcsIFsxMDc2NF1dLCBbJ2lpaW50JywgWzg3NDldXSwgWydpaW5maW4nLCBbMTA3MTZdXSwgWydpaW90YScsIFs4NDg5XV0sIFsnSUpsaWcnLCBbMzA2XV0sIFsnaWpsaWcnLCBbMzA3XV0sIFsnSW1hY3InLCBbMjk4XV0sIFsnaW1hY3InLCBbMjk5XV0sIFsnaW1hZ2UnLCBbODQ2NV1dLCBbJ0ltYWdpbmFyeUknLCBbODUyMF1dLCBbJ2ltYWdsaW5lJywgWzg0NjRdXSwgWydpbWFncGFydCcsIFs4NDY1XV0sIFsnaW1hdGgnLCBbMzA1XV0sIFsnSW0nLCBbODQ2NV1dLCBbJ2ltb2YnLCBbODg4N11dLCBbJ2ltcGVkJywgWzQzN11dLCBbJ0ltcGxpZXMnLCBbODY1OF1dLCBbJ2luY2FyZScsIFs4NDUzXV0sIFsnaW4nLCBbODcxMl1dLCBbJ2luZmluJywgWzg3MzRdXSwgWydpbmZpbnRpZScsIFsxMDcxN11dLCBbJ2lub2RvdCcsIFszMDVdXSwgWydpbnRjYWwnLCBbODg5MF1dLCBbJ2ludCcsIFs4NzQ3XV0sIFsnSW50JywgWzg3NDhdXSwgWydpbnRlZ2VycycsIFs4NDg0XV0sIFsnSW50ZWdyYWwnLCBbODc0N11dLCBbJ2ludGVyY2FsJywgWzg4OTBdXSwgWydJbnRlcnNlY3Rpb24nLCBbODg5OF1dLCBbJ2ludGxhcmhrJywgWzEwNzc1XV0sIFsnaW50cHJvZCcsIFsxMDgxMl1dLCBbJ0ludmlzaWJsZUNvbW1hJywgWzgyOTFdXSwgWydJbnZpc2libGVUaW1lcycsIFs4MjkwXV0sIFsnSU9jeScsIFsxMDI1XV0sIFsnaW9jeScsIFsxMTA1XV0sIFsnSW9nb24nLCBbMzAyXV0sIFsnaW9nb24nLCBbMzAzXV0sIFsnSW9wZicsIFsxMjAxMjhdXSwgWydpb3BmJywgWzEyMDE1NF1dLCBbJ0lvdGEnLCBbOTIxXV0sIFsnaW90YScsIFs5NTNdXSwgWydpcHJvZCcsIFsxMDgxMl1dLCBbJ2lxdWVzdCcsIFsxOTFdXSwgWydpc2NyJywgWzExOTk5OF1dLCBbJ0lzY3InLCBbODQ2NF1dLCBbJ2lzaW4nLCBbODcxMl1dLCBbJ2lzaW5kb3QnLCBbODk0OV1dLCBbJ2lzaW5FJywgWzg5NTNdXSwgWydpc2lucycsIFs4OTQ4XV0sIFsnaXNpbnN2JywgWzg5NDddXSwgWydpc2ludicsIFs4NzEyXV0sIFsnaXQnLCBbODI5MF1dLCBbJ0l0aWxkZScsIFsyOTZdXSwgWydpdGlsZGUnLCBbMjk3XV0sIFsnSXVrY3knLCBbMTAzMF1dLCBbJ2l1a2N5JywgWzExMTBdXSwgWydJdW1sJywgWzIwN11dLCBbJ2l1bWwnLCBbMjM5XV0sIFsnSmNpcmMnLCBbMzA4XV0sIFsnamNpcmMnLCBbMzA5XV0sIFsnSmN5JywgWzEwNDldXSwgWydqY3knLCBbMTA4MV1dLCBbJ0pmcicsIFsxMjAwNzddXSwgWydqZnInLCBbMTIwMTAzXV0sIFsnam1hdGgnLCBbNTY3XV0sIFsnSm9wZicsIFsxMjAxMjldXSwgWydqb3BmJywgWzEyMDE1NV1dLCBbJ0pzY3InLCBbMTE5OTczXV0sIFsnanNjcicsIFsxMTk5OTldXSwgWydKc2VyY3knLCBbMTAzMl1dLCBbJ2pzZXJjeScsIFsxMTEyXV0sIFsnSnVrY3knLCBbMTAyOF1dLCBbJ2p1a2N5JywgWzExMDhdXSwgWydLYXBwYScsIFs5MjJdXSwgWydrYXBwYScsIFs5NTRdXSwgWydrYXBwYXYnLCBbMTAwOF1dLCBbJ0tjZWRpbCcsIFszMTBdXSwgWydrY2VkaWwnLCBbMzExXV0sIFsnS2N5JywgWzEwNTBdXSwgWydrY3knLCBbMTA4Ml1dLCBbJ0tmcicsIFsxMjAwNzhdXSwgWydrZnInLCBbMTIwMTA0XV0sIFsna2dyZWVuJywgWzMxMl1dLCBbJ0tIY3knLCBbMTA2MV1dLCBbJ2toY3knLCBbMTA5M11dLCBbJ0tKY3knLCBbMTAzNl1dLCBbJ2tqY3knLCBbMTExNl1dLCBbJ0tvcGYnLCBbMTIwMTMwXV0sIFsna29wZicsIFsxMjAxNTZdXSwgWydLc2NyJywgWzExOTk3NF1dLCBbJ2tzY3InLCBbMTIwMDAwXV0sIFsnbEFhcnInLCBbODY2Nl1dLCBbJ0xhY3V0ZScsIFszMTNdXSwgWydsYWN1dGUnLCBbMzE0XV0sIFsnbGFlbXB0eXYnLCBbMTA2NzZdXSwgWydsYWdyYW4nLCBbODQ2Nl1dLCBbJ0xhbWJkYScsIFs5MjNdXSwgWydsYW1iZGEnLCBbOTU1XV0sIFsnbGFuZycsIFsxMDIxNl1dLCBbJ0xhbmcnLCBbMTAyMThdXSwgWydsYW5nZCcsIFsxMDY0MV1dLCBbJ2xhbmdsZScsIFsxMDIxNl1dLCBbJ2xhcCcsIFsxMDg4NV1dLCBbJ0xhcGxhY2V0cmYnLCBbODQ2Nl1dLCBbJ2xhcXVvJywgWzE3MV1dLCBbJ2xhcnJiJywgWzg2NzZdXSwgWydsYXJyYmZzJywgWzEwNTI3XV0sIFsnbGFycicsIFs4NTkyXV0sIFsnTGFycicsIFs4NjA2XV0sIFsnbEFycicsIFs4NjU2XV0sIFsnbGFycmZzJywgWzEwNTI1XV0sIFsnbGFycmhrJywgWzg2MTddXSwgWydsYXJybHAnLCBbODYxOV1dLCBbJ2xhcnJwbCcsIFsxMDU1M11dLCBbJ2xhcnJzaW0nLCBbMTA2MTFdXSwgWydsYXJydGwnLCBbODYxMF1dLCBbJ2xhdGFpbCcsIFsxMDUyMV1dLCBbJ2xBdGFpbCcsIFsxMDUyM11dLCBbJ2xhdCcsIFsxMDkyM11dLCBbJ2xhdGUnLCBbMTA5MjVdXSwgWydsYXRlcycsIFsxMDkyNSwgNjUwMjRdXSwgWydsYmFycicsIFsxMDUwOF1dLCBbJ2xCYXJyJywgWzEwNTEwXV0sIFsnbGJicmsnLCBbMTAwOThdXSwgWydsYnJhY2UnLCBbMTIzXV0sIFsnbGJyYWNrJywgWzkxXV0sIFsnbGJya2UnLCBbMTA2MzVdXSwgWydsYnJrc2xkJywgWzEwNjM5XV0sIFsnbGJya3NsdScsIFsxMDYzN11dLCBbJ0xjYXJvbicsIFszMTddXSwgWydsY2Fyb24nLCBbMzE4XV0sIFsnTGNlZGlsJywgWzMxNV1dLCBbJ2xjZWRpbCcsIFszMTZdXSwgWydsY2VpbCcsIFs4OTY4XV0sIFsnbGN1YicsIFsxMjNdXSwgWydMY3knLCBbMTA1MV1dLCBbJ2xjeScsIFsxMDgzXV0sIFsnbGRjYScsIFsxMDU1MF1dLCBbJ2xkcXVvJywgWzgyMjBdXSwgWydsZHF1b3InLCBbODIyMl1dLCBbJ2xkcmRoYXInLCBbMTA1OTldXSwgWydsZHJ1c2hhcicsIFsxMDU3MV1dLCBbJ2xkc2gnLCBbODYyNl1dLCBbJ2xlJywgWzg4MDRdXSwgWydsRScsIFs4ODA2XV0sIFsnTGVmdEFuZ2xlQnJhY2tldCcsIFsxMDIxNl1dLCBbJ0xlZnRBcnJvd0JhcicsIFs4Njc2XV0sIFsnbGVmdGFycm93JywgWzg1OTJdXSwgWydMZWZ0QXJyb3cnLCBbODU5Ml1dLCBbJ0xlZnRhcnJvdycsIFs4NjU2XV0sIFsnTGVmdEFycm93UmlnaHRBcnJvdycsIFs4NjQ2XV0sIFsnbGVmdGFycm93dGFpbCcsIFs4NjEwXV0sIFsnTGVmdENlaWxpbmcnLCBbODk2OF1dLCBbJ0xlZnREb3VibGVCcmFja2V0JywgWzEwMjE0XV0sIFsnTGVmdERvd25UZWVWZWN0b3InLCBbMTA1OTNdXSwgWydMZWZ0RG93blZlY3RvckJhcicsIFsxMDU4NV1dLCBbJ0xlZnREb3duVmVjdG9yJywgWzg2NDNdXSwgWydMZWZ0Rmxvb3InLCBbODk3MF1dLCBbJ2xlZnRoYXJwb29uZG93bicsIFs4NjM3XV0sIFsnbGVmdGhhcnBvb251cCcsIFs4NjM2XV0sIFsnbGVmdGxlZnRhcnJvd3MnLCBbODY0N11dLCBbJ2xlZnRyaWdodGFycm93JywgWzg1OTZdXSwgWydMZWZ0UmlnaHRBcnJvdycsIFs4NTk2XV0sIFsnTGVmdHJpZ2h0YXJyb3cnLCBbODY2MF1dLCBbJ2xlZnRyaWdodGFycm93cycsIFs4NjQ2XV0sIFsnbGVmdHJpZ2h0aGFycG9vbnMnLCBbODY1MV1dLCBbJ2xlZnRyaWdodHNxdWlnYXJyb3cnLCBbODYyMV1dLCBbJ0xlZnRSaWdodFZlY3RvcicsIFsxMDU3NF1dLCBbJ0xlZnRUZWVBcnJvdycsIFs4NjEyXV0sIFsnTGVmdFRlZScsIFs4ODY3XV0sIFsnTGVmdFRlZVZlY3RvcicsIFsxMDU4Nl1dLCBbJ2xlZnR0aHJlZXRpbWVzJywgWzg5MDddXSwgWydMZWZ0VHJpYW5nbGVCYXInLCBbMTA3MDNdXSwgWydMZWZ0VHJpYW5nbGUnLCBbODg4Ml1dLCBbJ0xlZnRUcmlhbmdsZUVxdWFsJywgWzg4ODRdXSwgWydMZWZ0VXBEb3duVmVjdG9yJywgWzEwNTc3XV0sIFsnTGVmdFVwVGVlVmVjdG9yJywgWzEwNTkyXV0sIFsnTGVmdFVwVmVjdG9yQmFyJywgWzEwNTg0XV0sIFsnTGVmdFVwVmVjdG9yJywgWzg2MzldXSwgWydMZWZ0VmVjdG9yQmFyJywgWzEwNTc4XV0sIFsnTGVmdFZlY3RvcicsIFs4NjM2XV0sIFsnbEVnJywgWzEwODkxXV0sIFsnbGVnJywgWzg5MjJdXSwgWydsZXEnLCBbODgwNF1dLCBbJ2xlcXEnLCBbODgwNl1dLCBbJ2xlcXNsYW50JywgWzEwODc3XV0sIFsnbGVzY2MnLCBbMTA5MjBdXSwgWydsZXMnLCBbMTA4NzddXSwgWydsZXNkb3QnLCBbMTA4NzldXSwgWydsZXNkb3RvJywgWzEwODgxXV0sIFsnbGVzZG90b3InLCBbMTA4ODNdXSwgWydsZXNnJywgWzg5MjIsIDY1MDI0XV0sIFsnbGVzZ2VzJywgWzEwODk5XV0sIFsnbGVzc2FwcHJveCcsIFsxMDg4NV1dLCBbJ2xlc3Nkb3QnLCBbODkxOF1dLCBbJ2xlc3NlcWd0cicsIFs4OTIyXV0sIFsnbGVzc2VxcWd0cicsIFsxMDg5MV1dLCBbJ0xlc3NFcXVhbEdyZWF0ZXInLCBbODkyMl1dLCBbJ0xlc3NGdWxsRXF1YWwnLCBbODgwNl1dLCBbJ0xlc3NHcmVhdGVyJywgWzg4MjJdXSwgWydsZXNzZ3RyJywgWzg4MjJdXSwgWydMZXNzTGVzcycsIFsxMDkxM11dLCBbJ2xlc3NzaW0nLCBbODgxOF1dLCBbJ0xlc3NTbGFudEVxdWFsJywgWzEwODc3XV0sIFsnTGVzc1RpbGRlJywgWzg4MThdXSwgWydsZmlzaHQnLCBbMTA2MjBdXSwgWydsZmxvb3InLCBbODk3MF1dLCBbJ0xmcicsIFsxMjAwNzldXSwgWydsZnInLCBbMTIwMTA1XV0sIFsnbGcnLCBbODgyMl1dLCBbJ2xnRScsIFsxMDg5N11dLCBbJ2xIYXInLCBbMTA1OTRdXSwgWydsaGFyZCcsIFs4NjM3XV0sIFsnbGhhcnUnLCBbODYzNl1dLCBbJ2xoYXJ1bCcsIFsxMDYwMl1dLCBbJ2xoYmxrJywgWzk2MDRdXSwgWydMSmN5JywgWzEwMzNdXSwgWydsamN5JywgWzExMTNdXSwgWydsbGFycicsIFs4NjQ3XV0sIFsnbGwnLCBbODgxMF1dLCBbJ0xsJywgWzg5MjBdXSwgWydsbGNvcm5lcicsIFs4OTkwXV0sIFsnTGxlZnRhcnJvdycsIFs4NjY2XV0sIFsnbGxoYXJkJywgWzEwNjAzXV0sIFsnbGx0cmknLCBbOTcyMl1dLCBbJ0xtaWRvdCcsIFszMTldXSwgWydsbWlkb3QnLCBbMzIwXV0sIFsnbG1vdXN0YWNoZScsIFs5MTM2XV0sIFsnbG1vdXN0JywgWzkxMzZdXSwgWydsbmFwJywgWzEwODg5XV0sIFsnbG5hcHByb3gnLCBbMTA4ODldXSwgWydsbmUnLCBbMTA4ODddXSwgWydsbkUnLCBbODgwOF1dLCBbJ2xuZXEnLCBbMTA4ODddXSwgWydsbmVxcScsIFs4ODA4XV0sIFsnbG5zaW0nLCBbODkzNF1dLCBbJ2xvYW5nJywgWzEwMjIwXV0sIFsnbG9hcnInLCBbODcwMV1dLCBbJ2xvYnJrJywgWzEwMjE0XV0sIFsnbG9uZ2xlZnRhcnJvdycsIFsxMDIyOV1dLCBbJ0xvbmdMZWZ0QXJyb3cnLCBbMTAyMjldXSwgWydMb25nbGVmdGFycm93JywgWzEwMjMyXV0sIFsnbG9uZ2xlZnRyaWdodGFycm93JywgWzEwMjMxXV0sIFsnTG9uZ0xlZnRSaWdodEFycm93JywgWzEwMjMxXV0sIFsnTG9uZ2xlZnRyaWdodGFycm93JywgWzEwMjM0XV0sIFsnbG9uZ21hcHN0bycsIFsxMDIzNl1dLCBbJ2xvbmdyaWdodGFycm93JywgWzEwMjMwXV0sIFsnTG9uZ1JpZ2h0QXJyb3cnLCBbMTAyMzBdXSwgWydMb25ncmlnaHRhcnJvdycsIFsxMDIzM11dLCBbJ2xvb3BhcnJvd2xlZnQnLCBbODYxOV1dLCBbJ2xvb3BhcnJvd3JpZ2h0JywgWzg2MjBdXSwgWydsb3BhcicsIFsxMDYyOV1dLCBbJ0xvcGYnLCBbMTIwMTMxXV0sIFsnbG9wZicsIFsxMjAxNTddXSwgWydsb3BsdXMnLCBbMTA3OTddXSwgWydsb3RpbWVzJywgWzEwODA0XV0sIFsnbG93YXN0JywgWzg3MjddXSwgWydsb3diYXInLCBbOTVdXSwgWydMb3dlckxlZnRBcnJvdycsIFs4NjAxXV0sIFsnTG93ZXJSaWdodEFycm93JywgWzg2MDBdXSwgWydsb3onLCBbOTY3NF1dLCBbJ2xvemVuZ2UnLCBbOTY3NF1dLCBbJ2xvemYnLCBbMTA3MzFdXSwgWydscGFyJywgWzQwXV0sIFsnbHBhcmx0JywgWzEwNjQzXV0sIFsnbHJhcnInLCBbODY0Nl1dLCBbJ2xyY29ybmVyJywgWzg5OTFdXSwgWydscmhhcicsIFs4NjUxXV0sIFsnbHJoYXJkJywgWzEwNjA1XV0sIFsnbHJtJywgWzgyMDZdXSwgWydscnRyaScsIFs4ODk1XV0sIFsnbHNhcXVvJywgWzgyNDldXSwgWydsc2NyJywgWzEyMDAwMV1dLCBbJ0xzY3InLCBbODQ2Nl1dLCBbJ2xzaCcsIFs4NjI0XV0sIFsnTHNoJywgWzg2MjRdXSwgWydsc2ltJywgWzg4MThdXSwgWydsc2ltZScsIFsxMDg5M11dLCBbJ2xzaW1nJywgWzEwODk1XV0sIFsnbHNxYicsIFs5MV1dLCBbJ2xzcXVvJywgWzgyMTZdXSwgWydsc3F1b3InLCBbODIxOF1dLCBbJ0xzdHJvaycsIFszMjFdXSwgWydsc3Ryb2snLCBbMzIyXV0sIFsnbHRjYycsIFsxMDkxOF1dLCBbJ2x0Y2lyJywgWzEwODczXV0sIFsnbHQnLCBbNjBdXSwgWydMVCcsIFs2MF1dLCBbJ0x0JywgWzg4MTBdXSwgWydsdGRvdCcsIFs4OTE4XV0sIFsnbHRocmVlJywgWzg5MDddXSwgWydsdGltZXMnLCBbODkwNV1dLCBbJ2x0bGFycicsIFsxMDYxNF1dLCBbJ2x0cXVlc3QnLCBbMTA4NzVdXSwgWydsdHJpJywgWzk2NjddXSwgWydsdHJpZScsIFs4ODg0XV0sIFsnbHRyaWYnLCBbOTY2Nl1dLCBbJ2x0clBhcicsIFsxMDY0Nl1dLCBbJ2x1cmRzaGFyJywgWzEwNTcwXV0sIFsnbHVydWhhcicsIFsxMDU5OF1dLCBbJ2x2ZXJ0bmVxcScsIFs4ODA4LCA2NTAyNF1dLCBbJ2x2bkUnLCBbODgwOCwgNjUwMjRdXSwgWydtYWNyJywgWzE3NV1dLCBbJ21hbGUnLCBbOTc5NF1dLCBbJ21hbHQnLCBbMTAwMTZdXSwgWydtYWx0ZXNlJywgWzEwMDE2XV0sIFsnTWFwJywgWzEwNTAxXV0sIFsnbWFwJywgWzg2MTRdXSwgWydtYXBzdG8nLCBbODYxNF1dLCBbJ21hcHN0b2Rvd24nLCBbODYxNV1dLCBbJ21hcHN0b2xlZnQnLCBbODYxMl1dLCBbJ21hcHN0b3VwJywgWzg2MTNdXSwgWydtYXJrZXInLCBbOTY0Nl1dLCBbJ21jb21tYScsIFsxMDc5M11dLCBbJ01jeScsIFsxMDUyXV0sIFsnbWN5JywgWzEwODRdXSwgWydtZGFzaCcsIFs4MjEyXV0sIFsnbUREb3QnLCBbODc2Ml1dLCBbJ21lYXN1cmVkYW5nbGUnLCBbODczN11dLCBbJ01lZGl1bVNwYWNlJywgWzgyODddXSwgWydNZWxsaW50cmYnLCBbODQ5OV1dLCBbJ01mcicsIFsxMjAwODBdXSwgWydtZnInLCBbMTIwMTA2XV0sIFsnbWhvJywgWzg0ODddXSwgWydtaWNybycsIFsxODFdXSwgWydtaWRhc3QnLCBbNDJdXSwgWydtaWRjaXInLCBbMTA5OTJdXSwgWydtaWQnLCBbODczOV1dLCBbJ21pZGRvdCcsIFsxODNdXSwgWydtaW51c2InLCBbODg2M11dLCBbJ21pbnVzJywgWzg3MjJdXSwgWydtaW51c2QnLCBbODc2MF1dLCBbJ21pbnVzZHUnLCBbMTA3OTRdXSwgWydNaW51c1BsdXMnLCBbODcyM11dLCBbJ21sY3AnLCBbMTA5NzFdXSwgWydtbGRyJywgWzgyMzBdXSwgWydtbnBsdXMnLCBbODcyM11dLCBbJ21vZGVscycsIFs4ODcxXV0sIFsnTW9wZicsIFsxMjAxMzJdXSwgWydtb3BmJywgWzEyMDE1OF1dLCBbJ21wJywgWzg3MjNdXSwgWydtc2NyJywgWzEyMDAwMl1dLCBbJ01zY3InLCBbODQ5OV1dLCBbJ21zdHBvcycsIFs4NzY2XV0sIFsnTXUnLCBbOTI0XV0sIFsnbXUnLCBbOTU2XV0sIFsnbXVsdGltYXAnLCBbODg4OF1dLCBbJ211bWFwJywgWzg4ODhdXSwgWyduYWJsYScsIFs4NzExXV0sIFsnTmFjdXRlJywgWzMyM11dLCBbJ25hY3V0ZScsIFszMjRdXSwgWyduYW5nJywgWzg3MzYsIDg0MDJdXSwgWyduYXAnLCBbODc3N11dLCBbJ25hcEUnLCBbMTA4NjQsIDgyNF1dLCBbJ25hcGlkJywgWzg3NzksIDgyNF1dLCBbJ25hcG9zJywgWzMyOV1dLCBbJ25hcHByb3gnLCBbODc3N11dLCBbJ25hdHVyYWwnLCBbOTgzOF1dLCBbJ25hdHVyYWxzJywgWzg0NjldXSwgWyduYXR1cicsIFs5ODM4XV0sIFsnbmJzcCcsIFsxNjBdXSwgWyduYnVtcCcsIFs4NzgyLCA4MjRdXSwgWyduYnVtcGUnLCBbODc4MywgODI0XV0sIFsnbmNhcCcsIFsxMDgxOV1dLCBbJ05jYXJvbicsIFszMjddXSwgWyduY2Fyb24nLCBbMzI4XV0sIFsnTmNlZGlsJywgWzMyNV1dLCBbJ25jZWRpbCcsIFszMjZdXSwgWyduY29uZycsIFs4Nzc1XV0sIFsnbmNvbmdkb3QnLCBbMTA4NjEsIDgyNF1dLCBbJ25jdXAnLCBbMTA4MThdXSwgWydOY3knLCBbMTA1M11dLCBbJ25jeScsIFsxMDg1XV0sIFsnbmRhc2gnLCBbODIxMV1dLCBbJ25lYXJoaycsIFsxMDUzMl1dLCBbJ25lYXJyJywgWzg1OTldXSwgWyduZUFycicsIFs4NjYzXV0sIFsnbmVhcnJvdycsIFs4NTk5XV0sIFsnbmUnLCBbODgwMF1dLCBbJ25lZG90JywgWzg3ODQsIDgyNF1dLCBbJ05lZ2F0aXZlTWVkaXVtU3BhY2UnLCBbODIwM11dLCBbJ05lZ2F0aXZlVGhpY2tTcGFjZScsIFs4MjAzXV0sIFsnTmVnYXRpdmVUaGluU3BhY2UnLCBbODIwM11dLCBbJ05lZ2F0aXZlVmVyeVRoaW5TcGFjZScsIFs4MjAzXV0sIFsnbmVxdWl2JywgWzg4MDJdXSwgWyduZXNlYXInLCBbMTA1MzZdXSwgWyduZXNpbScsIFs4NzcwLCA4MjRdXSwgWydOZXN0ZWRHcmVhdGVyR3JlYXRlcicsIFs4ODExXV0sIFsnTmVzdGVkTGVzc0xlc3MnLCBbODgxMF1dLCBbJ25leGlzdCcsIFs4NzA4XV0sIFsnbmV4aXN0cycsIFs4NzA4XV0sIFsnTmZyJywgWzEyMDA4MV1dLCBbJ25mcicsIFsxMjAxMDddXSwgWyduZ0UnLCBbODgwNywgODI0XV0sIFsnbmdlJywgWzg4MTddXSwgWyduZ2VxJywgWzg4MTddXSwgWyduZ2VxcScsIFs4ODA3LCA4MjRdXSwgWyduZ2Vxc2xhbnQnLCBbMTA4NzgsIDgyNF1dLCBbJ25nZXMnLCBbMTA4NzgsIDgyNF1dLCBbJ25HZycsIFs4OTIxLCA4MjRdXSwgWyduZ3NpbScsIFs4ODIxXV0sIFsnbkd0JywgWzg4MTEsIDg0MDJdXSwgWyduZ3QnLCBbODgxNV1dLCBbJ25ndHInLCBbODgxNV1dLCBbJ25HdHYnLCBbODgxMSwgODI0XV0sIFsnbmhhcnInLCBbODYyMl1dLCBbJ25oQXJyJywgWzg2NTRdXSwgWyduaHBhcicsIFsxMDk5NF1dLCBbJ25pJywgWzg3MTVdXSwgWyduaXMnLCBbODk1Nl1dLCBbJ25pc2QnLCBbODk1NF1dLCBbJ25pdicsIFs4NzE1XV0sIFsnTkpjeScsIFsxMDM0XV0sIFsnbmpjeScsIFsxMTE0XV0sIFsnbmxhcnInLCBbODYwMl1dLCBbJ25sQXJyJywgWzg2NTNdXSwgWydubGRyJywgWzgyMjldXSwgWydubEUnLCBbODgwNiwgODI0XV0sIFsnbmxlJywgWzg4MTZdXSwgWydubGVmdGFycm93JywgWzg2MDJdXSwgWyduTGVmdGFycm93JywgWzg2NTNdXSwgWydubGVmdHJpZ2h0YXJyb3cnLCBbODYyMl1dLCBbJ25MZWZ0cmlnaHRhcnJvdycsIFs4NjU0XV0sIFsnbmxlcScsIFs4ODE2XV0sIFsnbmxlcXEnLCBbODgwNiwgODI0XV0sIFsnbmxlcXNsYW50JywgWzEwODc3LCA4MjRdXSwgWydubGVzJywgWzEwODc3LCA4MjRdXSwgWydubGVzcycsIFs4ODE0XV0sIFsnbkxsJywgWzg5MjAsIDgyNF1dLCBbJ25sc2ltJywgWzg4MjBdXSwgWyduTHQnLCBbODgxMCwgODQwMl1dLCBbJ25sdCcsIFs4ODE0XV0sIFsnbmx0cmknLCBbODkzOF1dLCBbJ25sdHJpZScsIFs4OTQwXV0sIFsnbkx0dicsIFs4ODEwLCA4MjRdXSwgWydubWlkJywgWzg3NDBdXSwgWydOb0JyZWFrJywgWzgyODhdXSwgWydOb25CcmVha2luZ1NwYWNlJywgWzE2MF1dLCBbJ25vcGYnLCBbMTIwMTU5XV0sIFsnTm9wZicsIFs4NDY5XV0sIFsnTm90JywgWzEwOTg4XV0sIFsnbm90JywgWzE3Ml1dLCBbJ05vdENvbmdydWVudCcsIFs4ODAyXV0sIFsnTm90Q3VwQ2FwJywgWzg4MTNdXSwgWydOb3REb3VibGVWZXJ0aWNhbEJhcicsIFs4NzQyXV0sIFsnTm90RWxlbWVudCcsIFs4NzEzXV0sIFsnTm90RXF1YWwnLCBbODgwMF1dLCBbJ05vdEVxdWFsVGlsZGUnLCBbODc3MCwgODI0XV0sIFsnTm90RXhpc3RzJywgWzg3MDhdXSwgWydOb3RHcmVhdGVyJywgWzg4MTVdXSwgWydOb3RHcmVhdGVyRXF1YWwnLCBbODgxN11dLCBbJ05vdEdyZWF0ZXJGdWxsRXF1YWwnLCBbODgwNywgODI0XV0sIFsnTm90R3JlYXRlckdyZWF0ZXInLCBbODgxMSwgODI0XV0sIFsnTm90R3JlYXRlckxlc3MnLCBbODgyNV1dLCBbJ05vdEdyZWF0ZXJTbGFudEVxdWFsJywgWzEwODc4LCA4MjRdXSwgWydOb3RHcmVhdGVyVGlsZGUnLCBbODgyMV1dLCBbJ05vdEh1bXBEb3duSHVtcCcsIFs4NzgyLCA4MjRdXSwgWydOb3RIdW1wRXF1YWwnLCBbODc4MywgODI0XV0sIFsnbm90aW4nLCBbODcxM11dLCBbJ25vdGluZG90JywgWzg5NDksIDgyNF1dLCBbJ25vdGluRScsIFs4OTUzLCA4MjRdXSwgWydub3RpbnZhJywgWzg3MTNdXSwgWydub3RpbnZiJywgWzg5NTFdXSwgWydub3RpbnZjJywgWzg5NTBdXSwgWydOb3RMZWZ0VHJpYW5nbGVCYXInLCBbMTA3MDMsIDgyNF1dLCBbJ05vdExlZnRUcmlhbmdsZScsIFs4OTM4XV0sIFsnTm90TGVmdFRyaWFuZ2xlRXF1YWwnLCBbODk0MF1dLCBbJ05vdExlc3MnLCBbODgxNF1dLCBbJ05vdExlc3NFcXVhbCcsIFs4ODE2XV0sIFsnTm90TGVzc0dyZWF0ZXInLCBbODgyNF1dLCBbJ05vdExlc3NMZXNzJywgWzg4MTAsIDgyNF1dLCBbJ05vdExlc3NTbGFudEVxdWFsJywgWzEwODc3LCA4MjRdXSwgWydOb3RMZXNzVGlsZGUnLCBbODgyMF1dLCBbJ05vdE5lc3RlZEdyZWF0ZXJHcmVhdGVyJywgWzEwOTE0LCA4MjRdXSwgWydOb3ROZXN0ZWRMZXNzTGVzcycsIFsxMDkxMywgODI0XV0sIFsnbm90bmknLCBbODcxNl1dLCBbJ25vdG5pdmEnLCBbODcxNl1dLCBbJ25vdG5pdmInLCBbODk1OF1dLCBbJ25vdG5pdmMnLCBbODk1N11dLCBbJ05vdFByZWNlZGVzJywgWzg4MzJdXSwgWydOb3RQcmVjZWRlc0VxdWFsJywgWzEwOTI3LCA4MjRdXSwgWydOb3RQcmVjZWRlc1NsYW50RXF1YWwnLCBbODkyOF1dLCBbJ05vdFJldmVyc2VFbGVtZW50JywgWzg3MTZdXSwgWydOb3RSaWdodFRyaWFuZ2xlQmFyJywgWzEwNzA0LCA4MjRdXSwgWydOb3RSaWdodFRyaWFuZ2xlJywgWzg5MzldXSwgWydOb3RSaWdodFRyaWFuZ2xlRXF1YWwnLCBbODk0MV1dLCBbJ05vdFNxdWFyZVN1YnNldCcsIFs4ODQ3LCA4MjRdXSwgWydOb3RTcXVhcmVTdWJzZXRFcXVhbCcsIFs4OTMwXV0sIFsnTm90U3F1YXJlU3VwZXJzZXQnLCBbODg0OCwgODI0XV0sIFsnTm90U3F1YXJlU3VwZXJzZXRFcXVhbCcsIFs4OTMxXV0sIFsnTm90U3Vic2V0JywgWzg4MzQsIDg0MDJdXSwgWydOb3RTdWJzZXRFcXVhbCcsIFs4ODQwXV0sIFsnTm90U3VjY2VlZHMnLCBbODgzM11dLCBbJ05vdFN1Y2NlZWRzRXF1YWwnLCBbMTA5MjgsIDgyNF1dLCBbJ05vdFN1Y2NlZWRzU2xhbnRFcXVhbCcsIFs4OTI5XV0sIFsnTm90U3VjY2VlZHNUaWxkZScsIFs4ODMxLCA4MjRdXSwgWydOb3RTdXBlcnNldCcsIFs4ODM1LCA4NDAyXV0sIFsnTm90U3VwZXJzZXRFcXVhbCcsIFs4ODQxXV0sIFsnTm90VGlsZGUnLCBbODc2OV1dLCBbJ05vdFRpbGRlRXF1YWwnLCBbODc3Ml1dLCBbJ05vdFRpbGRlRnVsbEVxdWFsJywgWzg3NzVdXSwgWydOb3RUaWxkZVRpbGRlJywgWzg3NzddXSwgWydOb3RWZXJ0aWNhbEJhcicsIFs4NzQwXV0sIFsnbnBhcmFsbGVsJywgWzg3NDJdXSwgWyducGFyJywgWzg3NDJdXSwgWyducGFyc2wnLCBbMTEwMDUsIDg0MjFdXSwgWyducGFydCcsIFs4NzA2LCA4MjRdXSwgWyducG9saW50JywgWzEwNzcyXV0sIFsnbnByJywgWzg4MzJdXSwgWyducHJjdWUnLCBbODkyOF1dLCBbJ25wcmVjJywgWzg4MzJdXSwgWyducHJlY2VxJywgWzEwOTI3LCA4MjRdXSwgWyducHJlJywgWzEwOTI3LCA4MjRdXSwgWyducmFycmMnLCBbMTA1NDcsIDgyNF1dLCBbJ25yYXJyJywgWzg2MDNdXSwgWyduckFycicsIFs4NjU1XV0sIFsnbnJhcnJ3JywgWzg2MDUsIDgyNF1dLCBbJ25yaWdodGFycm93JywgWzg2MDNdXSwgWyduUmlnaHRhcnJvdycsIFs4NjU1XV0sIFsnbnJ0cmknLCBbODkzOV1dLCBbJ25ydHJpZScsIFs4OTQxXV0sIFsnbnNjJywgWzg4MzNdXSwgWyduc2NjdWUnLCBbODkyOV1dLCBbJ25zY2UnLCBbMTA5MjgsIDgyNF1dLCBbJ05zY3InLCBbMTE5OTc3XV0sIFsnbnNjcicsIFsxMjAwMDNdXSwgWyduc2hvcnRtaWQnLCBbODc0MF1dLCBbJ25zaG9ydHBhcmFsbGVsJywgWzg3NDJdXSwgWyduc2ltJywgWzg3NjldXSwgWyduc2ltZScsIFs4NzcyXV0sIFsnbnNpbWVxJywgWzg3NzJdXSwgWyduc21pZCcsIFs4NzQwXV0sIFsnbnNwYXInLCBbODc0Ml1dLCBbJ25zcXN1YmUnLCBbODkzMF1dLCBbJ25zcXN1cGUnLCBbODkzMV1dLCBbJ25zdWInLCBbODgzNl1dLCBbJ25zdWJFJywgWzEwOTQ5LCA4MjRdXSwgWyduc3ViZScsIFs4ODQwXV0sIFsnbnN1YnNldCcsIFs4ODM0LCA4NDAyXV0sIFsnbnN1YnNldGVxJywgWzg4NDBdXSwgWyduc3Vic2V0ZXFxJywgWzEwOTQ5LCA4MjRdXSwgWyduc3VjYycsIFs4ODMzXV0sIFsnbnN1Y2NlcScsIFsxMDkyOCwgODI0XV0sIFsnbnN1cCcsIFs4ODM3XV0sIFsnbnN1cEUnLCBbMTA5NTAsIDgyNF1dLCBbJ25zdXBlJywgWzg4NDFdXSwgWyduc3Vwc2V0JywgWzg4MzUsIDg0MDJdXSwgWyduc3Vwc2V0ZXEnLCBbODg0MV1dLCBbJ25zdXBzZXRlcXEnLCBbMTA5NTAsIDgyNF1dLCBbJ250Z2wnLCBbODgyNV1dLCBbJ050aWxkZScsIFsyMDldXSwgWydudGlsZGUnLCBbMjQxXV0sIFsnbnRsZycsIFs4ODI0XV0sIFsnbnRyaWFuZ2xlbGVmdCcsIFs4OTM4XV0sIFsnbnRyaWFuZ2xlbGVmdGVxJywgWzg5NDBdXSwgWydudHJpYW5nbGVyaWdodCcsIFs4OTM5XV0sIFsnbnRyaWFuZ2xlcmlnaHRlcScsIFs4OTQxXV0sIFsnTnUnLCBbOTI1XV0sIFsnbnUnLCBbOTU3XV0sIFsnbnVtJywgWzM1XV0sIFsnbnVtZXJvJywgWzg0NzBdXSwgWydudW1zcCcsIFs4MTk5XV0sIFsnbnZhcCcsIFs4NzgxLCA4NDAyXV0sIFsnbnZkYXNoJywgWzg4NzZdXSwgWydudkRhc2gnLCBbODg3N11dLCBbJ25WZGFzaCcsIFs4ODc4XV0sIFsnblZEYXNoJywgWzg4NzldXSwgWydudmdlJywgWzg4MDUsIDg0MDJdXSwgWydudmd0JywgWzYyLCA4NDAyXV0sIFsnbnZIYXJyJywgWzEwNTAwXV0sIFsnbnZpbmZpbicsIFsxMDcxOF1dLCBbJ252bEFycicsIFsxMDQ5OF1dLCBbJ252bGUnLCBbODgwNCwgODQwMl1dLCBbJ252bHQnLCBbNjAsIDg0MDJdXSwgWydudmx0cmllJywgWzg4ODQsIDg0MDJdXSwgWydudnJBcnInLCBbMTA0OTldXSwgWydudnJ0cmllJywgWzg4ODUsIDg0MDJdXSwgWydudnNpbScsIFs4NzY0LCA4NDAyXV0sIFsnbndhcmhrJywgWzEwNTMxXV0sIFsnbndhcnInLCBbODU5OF1dLCBbJ253QXJyJywgWzg2NjJdXSwgWydud2Fycm93JywgWzg1OThdXSwgWydud25lYXInLCBbMTA1MzVdXSwgWydPYWN1dGUnLCBbMjExXV0sIFsnb2FjdXRlJywgWzI0M11dLCBbJ29hc3QnLCBbODg1OV1dLCBbJ09jaXJjJywgWzIxMl1dLCBbJ29jaXJjJywgWzI0NF1dLCBbJ29jaXInLCBbODg1OF1dLCBbJ09jeScsIFsxMDU0XV0sIFsnb2N5JywgWzEwODZdXSwgWydvZGFzaCcsIFs4ODYxXV0sIFsnT2RibGFjJywgWzMzNl1dLCBbJ29kYmxhYycsIFszMzddXSwgWydvZGl2JywgWzEwODA4XV0sIFsnb2RvdCcsIFs4ODU3XV0sIFsnb2Rzb2xkJywgWzEwNjg0XV0sIFsnT0VsaWcnLCBbMzM4XV0sIFsnb2VsaWcnLCBbMzM5XV0sIFsnb2ZjaXInLCBbMTA2ODddXSwgWydPZnInLCBbMTIwMDgyXV0sIFsnb2ZyJywgWzEyMDEwOF1dLCBbJ29nb24nLCBbNzMxXV0sIFsnT2dyYXZlJywgWzIxMF1dLCBbJ29ncmF2ZScsIFsyNDJdXSwgWydvZ3QnLCBbMTA2ODldXSwgWydvaGJhcicsIFsxMDY3N11dLCBbJ29obScsIFs5MzddXSwgWydvaW50JywgWzg3NTBdXSwgWydvbGFycicsIFs4NjM0XV0sIFsnb2xjaXInLCBbMTA2ODZdXSwgWydvbGNyb3NzJywgWzEwNjgzXV0sIFsnb2xpbmUnLCBbODI1NF1dLCBbJ29sdCcsIFsxMDY4OF1dLCBbJ09tYWNyJywgWzMzMl1dLCBbJ29tYWNyJywgWzMzM11dLCBbJ09tZWdhJywgWzkzN11dLCBbJ29tZWdhJywgWzk2OV1dLCBbJ09taWNyb24nLCBbOTI3XV0sIFsnb21pY3JvbicsIFs5NTldXSwgWydvbWlkJywgWzEwNjc4XV0sIFsnb21pbnVzJywgWzg4NTRdXSwgWydPb3BmJywgWzEyMDEzNF1dLCBbJ29vcGYnLCBbMTIwMTYwXV0sIFsnb3BhcicsIFsxMDY3OV1dLCBbJ09wZW5DdXJseURvdWJsZVF1b3RlJywgWzgyMjBdXSwgWydPcGVuQ3VybHlRdW90ZScsIFs4MjE2XV0sIFsnb3BlcnAnLCBbMTA2ODFdXSwgWydvcGx1cycsIFs4ODUzXV0sIFsnb3JhcnInLCBbODYzNV1dLCBbJ09yJywgWzEwODM2XV0sIFsnb3InLCBbODc0NF1dLCBbJ29yZCcsIFsxMDg0NV1dLCBbJ29yZGVyJywgWzg1MDBdXSwgWydvcmRlcm9mJywgWzg1MDBdXSwgWydvcmRmJywgWzE3MF1dLCBbJ29yZG0nLCBbMTg2XV0sIFsnb3JpZ29mJywgWzg4ODZdXSwgWydvcm9yJywgWzEwODM4XV0sIFsnb3JzbG9wZScsIFsxMDgzOV1dLCBbJ29ydicsIFsxMDg0M11dLCBbJ29TJywgWzk0MTZdXSwgWydPc2NyJywgWzExOTk3OF1dLCBbJ29zY3InLCBbODUwMF1dLCBbJ09zbGFzaCcsIFsyMTZdXSwgWydvc2xhc2gnLCBbMjQ4XV0sIFsnb3NvbCcsIFs4ODU2XV0sIFsnT3RpbGRlJywgWzIxM11dLCBbJ290aWxkZScsIFsyNDVdXSwgWydvdGltZXNhcycsIFsxMDgwNl1dLCBbJ090aW1lcycsIFsxMDgwN11dLCBbJ290aW1lcycsIFs4ODU1XV0sIFsnT3VtbCcsIFsyMTRdXSwgWydvdW1sJywgWzI0Nl1dLCBbJ292YmFyJywgWzkwMjFdXSwgWydPdmVyQmFyJywgWzgyNTRdXSwgWydPdmVyQnJhY2UnLCBbOTE4Ml1dLCBbJ092ZXJCcmFja2V0JywgWzkxNDBdXSwgWydPdmVyUGFyZW50aGVzaXMnLCBbOTE4MF1dLCBbJ3BhcmEnLCBbMTgyXV0sIFsncGFyYWxsZWwnLCBbODc0MV1dLCBbJ3BhcicsIFs4NzQxXV0sIFsncGFyc2ltJywgWzEwOTk1XV0sIFsncGFyc2wnLCBbMTEwMDVdXSwgWydwYXJ0JywgWzg3MDZdXSwgWydQYXJ0aWFsRCcsIFs4NzA2XV0sIFsnUGN5JywgWzEwNTVdXSwgWydwY3knLCBbMTA4N11dLCBbJ3BlcmNudCcsIFszN11dLCBbJ3BlcmlvZCcsIFs0Nl1dLCBbJ3Blcm1pbCcsIFs4MjQwXV0sIFsncGVycCcsIFs4ODY5XV0sIFsncGVydGVuaycsIFs4MjQxXV0sIFsnUGZyJywgWzEyMDA4M11dLCBbJ3BmcicsIFsxMjAxMDldXSwgWydQaGknLCBbOTM0XV0sIFsncGhpJywgWzk2Nl1dLCBbJ3BoaXYnLCBbOTgxXV0sIFsncGhtbWF0JywgWzg0OTldXSwgWydwaG9uZScsIFs5NzQyXV0sIFsnUGknLCBbOTI4XV0sIFsncGknLCBbOTYwXV0sIFsncGl0Y2hmb3JrJywgWzg5MTZdXSwgWydwaXYnLCBbOTgyXV0sIFsncGxhbmNrJywgWzg0NjNdXSwgWydwbGFuY2toJywgWzg0NjJdXSwgWydwbGFua3YnLCBbODQ2M11dLCBbJ3BsdXNhY2lyJywgWzEwNzg3XV0sIFsncGx1c2InLCBbODg2Ml1dLCBbJ3BsdXNjaXInLCBbMTA3ODZdXSwgWydwbHVzJywgWzQzXV0sIFsncGx1c2RvJywgWzg3MjRdXSwgWydwbHVzZHUnLCBbMTA3ODldXSwgWydwbHVzZScsIFsxMDg2Nl1dLCBbJ1BsdXNNaW51cycsIFsxNzddXSwgWydwbHVzbW4nLCBbMTc3XV0sIFsncGx1c3NpbScsIFsxMDc5MF1dLCBbJ3BsdXN0d28nLCBbMTA3OTFdXSwgWydwbScsIFsxNzddXSwgWydQb2luY2FyZXBsYW5lJywgWzg0NjBdXSwgWydwb2ludGludCcsIFsxMDc3M11dLCBbJ3BvcGYnLCBbMTIwMTYxXV0sIFsnUG9wZicsIFs4NDczXV0sIFsncG91bmQnLCBbMTYzXV0sIFsncHJhcCcsIFsxMDkzNV1dLCBbJ1ByJywgWzEwOTM5XV0sIFsncHInLCBbODgyNl1dLCBbJ3ByY3VlJywgWzg4MjhdXSwgWydwcmVjYXBwcm94JywgWzEwOTM1XV0sIFsncHJlYycsIFs4ODI2XV0sIFsncHJlY2N1cmx5ZXEnLCBbODgyOF1dLCBbJ1ByZWNlZGVzJywgWzg4MjZdXSwgWydQcmVjZWRlc0VxdWFsJywgWzEwOTI3XV0sIFsnUHJlY2VkZXNTbGFudEVxdWFsJywgWzg4MjhdXSwgWydQcmVjZWRlc1RpbGRlJywgWzg4MzBdXSwgWydwcmVjZXEnLCBbMTA5MjddXSwgWydwcmVjbmFwcHJveCcsIFsxMDkzN11dLCBbJ3ByZWNuZXFxJywgWzEwOTMzXV0sIFsncHJlY25zaW0nLCBbODkzNl1dLCBbJ3ByZScsIFsxMDkyN11dLCBbJ3ByRScsIFsxMDkzMV1dLCBbJ3ByZWNzaW0nLCBbODgzMF1dLCBbJ3ByaW1lJywgWzgyNDJdXSwgWydQcmltZScsIFs4MjQzXV0sIFsncHJpbWVzJywgWzg0NzNdXSwgWydwcm5hcCcsIFsxMDkzN11dLCBbJ3BybkUnLCBbMTA5MzNdXSwgWydwcm5zaW0nLCBbODkzNl1dLCBbJ3Byb2QnLCBbODcxOV1dLCBbJ1Byb2R1Y3QnLCBbODcxOV1dLCBbJ3Byb2ZhbGFyJywgWzkwMDZdXSwgWydwcm9mbGluZScsIFs4OTc4XV0sIFsncHJvZnN1cmYnLCBbODk3OV1dLCBbJ3Byb3AnLCBbODczM11dLCBbJ1Byb3BvcnRpb25hbCcsIFs4NzMzXV0sIFsnUHJvcG9ydGlvbicsIFs4NzU5XV0sIFsncHJvcHRvJywgWzg3MzNdXSwgWydwcnNpbScsIFs4ODMwXV0sIFsncHJ1cmVsJywgWzg4ODBdXSwgWydQc2NyJywgWzExOTk3OV1dLCBbJ3BzY3InLCBbMTIwMDA1XV0sIFsnUHNpJywgWzkzNl1dLCBbJ3BzaScsIFs5NjhdXSwgWydwdW5jc3AnLCBbODIwMF1dLCBbJ1FmcicsIFsxMjAwODRdXSwgWydxZnInLCBbMTIwMTEwXV0sIFsncWludCcsIFsxMDc2NF1dLCBbJ3FvcGYnLCBbMTIwMTYyXV0sIFsnUW9wZicsIFs4NDc0XV0sIFsncXByaW1lJywgWzgyNzldXSwgWydRc2NyJywgWzExOTk4MF1dLCBbJ3FzY3InLCBbMTIwMDA2XV0sIFsncXVhdGVybmlvbnMnLCBbODQ2MV1dLCBbJ3F1YXRpbnQnLCBbMTA3NzRdXSwgWydxdWVzdCcsIFs2M11dLCBbJ3F1ZXN0ZXEnLCBbODc5OV1dLCBbJ3F1b3QnLCBbMzRdXSwgWydRVU9UJywgWzM0XV0sIFsnckFhcnInLCBbODY2N11dLCBbJ3JhY2UnLCBbODc2NSwgODE3XV0sIFsnUmFjdXRlJywgWzM0MF1dLCBbJ3JhY3V0ZScsIFszNDFdXSwgWydyYWRpYycsIFs4NzMwXV0sIFsncmFlbXB0eXYnLCBbMTA2NzVdXSwgWydyYW5nJywgWzEwMjE3XV0sIFsnUmFuZycsIFsxMDIxOV1dLCBbJ3JhbmdkJywgWzEwNjQyXV0sIFsncmFuZ2UnLCBbMTA2NjFdXSwgWydyYW5nbGUnLCBbMTAyMTddXSwgWydyYXF1bycsIFsxODddXSwgWydyYXJyYXAnLCBbMTA2MTNdXSwgWydyYXJyYicsIFs4Njc3XV0sIFsncmFycmJmcycsIFsxMDUyOF1dLCBbJ3JhcnJjJywgWzEwNTQ3XV0sIFsncmFycicsIFs4NTk0XV0sIFsnUmFycicsIFs4NjA4XV0sIFsnckFycicsIFs4NjU4XV0sIFsncmFycmZzJywgWzEwNTI2XV0sIFsncmFycmhrJywgWzg2MThdXSwgWydyYXJybHAnLCBbODYyMF1dLCBbJ3JhcnJwbCcsIFsxMDU2NV1dLCBbJ3JhcnJzaW0nLCBbMTA2MTJdXSwgWydSYXJydGwnLCBbMTA1MThdXSwgWydyYXJydGwnLCBbODYxMV1dLCBbJ3JhcnJ3JywgWzg2MDVdXSwgWydyYXRhaWwnLCBbMTA1MjJdXSwgWydyQXRhaWwnLCBbMTA1MjRdXSwgWydyYXRpbycsIFs4NzU4XV0sIFsncmF0aW9uYWxzJywgWzg0NzRdXSwgWydyYmFycicsIFsxMDUwOV1dLCBbJ3JCYXJyJywgWzEwNTExXV0sIFsnUkJhcnInLCBbMTA1MTJdXSwgWydyYmJyaycsIFsxMDA5OV1dLCBbJ3JicmFjZScsIFsxMjVdXSwgWydyYnJhY2snLCBbOTNdXSwgWydyYnJrZScsIFsxMDYzNl1dLCBbJ3JicmtzbGQnLCBbMTA2MzhdXSwgWydyYnJrc2x1JywgWzEwNjQwXV0sIFsnUmNhcm9uJywgWzM0NF1dLCBbJ3JjYXJvbicsIFszNDVdXSwgWydSY2VkaWwnLCBbMzQyXV0sIFsncmNlZGlsJywgWzM0M11dLCBbJ3JjZWlsJywgWzg5NjldXSwgWydyY3ViJywgWzEyNV1dLCBbJ1JjeScsIFsxMDU2XV0sIFsncmN5JywgWzEwODhdXSwgWydyZGNhJywgWzEwNTUxXV0sIFsncmRsZGhhcicsIFsxMDYwMV1dLCBbJ3JkcXVvJywgWzgyMjFdXSwgWydyZHF1b3InLCBbODIyMV1dLCBbJ0Nsb3NlQ3VybHlEb3VibGVRdW90ZScsIFs4MjIxXV0sIFsncmRzaCcsIFs4NjI3XV0sIFsncmVhbCcsIFs4NDc2XV0sIFsncmVhbGluZScsIFs4NDc1XV0sIFsncmVhbHBhcnQnLCBbODQ3Nl1dLCBbJ3JlYWxzJywgWzg0NzddXSwgWydSZScsIFs4NDc2XV0sIFsncmVjdCcsIFs5NjQ1XV0sIFsncmVnJywgWzE3NF1dLCBbJ1JFRycsIFsxNzRdXSwgWydSZXZlcnNlRWxlbWVudCcsIFs4NzE1XV0sIFsnUmV2ZXJzZUVxdWlsaWJyaXVtJywgWzg2NTFdXSwgWydSZXZlcnNlVXBFcXVpbGlicml1bScsIFsxMDYwN11dLCBbJ3JmaXNodCcsIFsxMDYyMV1dLCBbJ3JmbG9vcicsIFs4OTcxXV0sIFsncmZyJywgWzEyMDExMV1dLCBbJ1JmcicsIFs4NDc2XV0sIFsnckhhcicsIFsxMDU5Nl1dLCBbJ3JoYXJkJywgWzg2NDFdXSwgWydyaGFydScsIFs4NjQwXV0sIFsncmhhcnVsJywgWzEwNjA0XV0sIFsnUmhvJywgWzkyOV1dLCBbJ3JobycsIFs5NjFdXSwgWydyaG92JywgWzEwMDldXSwgWydSaWdodEFuZ2xlQnJhY2tldCcsIFsxMDIxN11dLCBbJ1JpZ2h0QXJyb3dCYXInLCBbODY3N11dLCBbJ3JpZ2h0YXJyb3cnLCBbODU5NF1dLCBbJ1JpZ2h0QXJyb3cnLCBbODU5NF1dLCBbJ1JpZ2h0YXJyb3cnLCBbODY1OF1dLCBbJ1JpZ2h0QXJyb3dMZWZ0QXJyb3cnLCBbODY0NF1dLCBbJ3JpZ2h0YXJyb3d0YWlsJywgWzg2MTFdXSwgWydSaWdodENlaWxpbmcnLCBbODk2OV1dLCBbJ1JpZ2h0RG91YmxlQnJhY2tldCcsIFsxMDIxNV1dLCBbJ1JpZ2h0RG93blRlZVZlY3RvcicsIFsxMDU4OV1dLCBbJ1JpZ2h0RG93blZlY3RvckJhcicsIFsxMDU4MV1dLCBbJ1JpZ2h0RG93blZlY3RvcicsIFs4NjQyXV0sIFsnUmlnaHRGbG9vcicsIFs4OTcxXV0sIFsncmlnaHRoYXJwb29uZG93bicsIFs4NjQxXV0sIFsncmlnaHRoYXJwb29udXAnLCBbODY0MF1dLCBbJ3JpZ2h0bGVmdGFycm93cycsIFs4NjQ0XV0sIFsncmlnaHRsZWZ0aGFycG9vbnMnLCBbODY1Ml1dLCBbJ3JpZ2h0cmlnaHRhcnJvd3MnLCBbODY0OV1dLCBbJ3JpZ2h0c3F1aWdhcnJvdycsIFs4NjA1XV0sIFsnUmlnaHRUZWVBcnJvdycsIFs4NjE0XV0sIFsnUmlnaHRUZWUnLCBbODg2Nl1dLCBbJ1JpZ2h0VGVlVmVjdG9yJywgWzEwNTg3XV0sIFsncmlnaHR0aHJlZXRpbWVzJywgWzg5MDhdXSwgWydSaWdodFRyaWFuZ2xlQmFyJywgWzEwNzA0XV0sIFsnUmlnaHRUcmlhbmdsZScsIFs4ODgzXV0sIFsnUmlnaHRUcmlhbmdsZUVxdWFsJywgWzg4ODVdXSwgWydSaWdodFVwRG93blZlY3RvcicsIFsxMDU3NV1dLCBbJ1JpZ2h0VXBUZWVWZWN0b3InLCBbMTA1ODhdXSwgWydSaWdodFVwVmVjdG9yQmFyJywgWzEwNTgwXV0sIFsnUmlnaHRVcFZlY3RvcicsIFs4NjM4XV0sIFsnUmlnaHRWZWN0b3JCYXInLCBbMTA1NzldXSwgWydSaWdodFZlY3RvcicsIFs4NjQwXV0sIFsncmluZycsIFs3MzBdXSwgWydyaXNpbmdkb3RzZXEnLCBbODc4N11dLCBbJ3JsYXJyJywgWzg2NDRdXSwgWydybGhhcicsIFs4NjUyXV0sIFsncmxtJywgWzgyMDddXSwgWydybW91c3RhY2hlJywgWzkxMzddXSwgWydybW91c3QnLCBbOTEzN11dLCBbJ3JubWlkJywgWzEwOTkwXV0sIFsncm9hbmcnLCBbMTAyMjFdXSwgWydyb2FycicsIFs4NzAyXV0sIFsncm9icmsnLCBbMTAyMTVdXSwgWydyb3BhcicsIFsxMDYzMF1dLCBbJ3JvcGYnLCBbMTIwMTYzXV0sIFsnUm9wZicsIFs4NDc3XV0sIFsncm9wbHVzJywgWzEwNzk4XV0sIFsncm90aW1lcycsIFsxMDgwNV1dLCBbJ1JvdW5kSW1wbGllcycsIFsxMDYwOF1dLCBbJ3JwYXInLCBbNDFdXSwgWydycGFyZ3QnLCBbMTA2NDRdXSwgWydycHBvbGludCcsIFsxMDc3MF1dLCBbJ3JyYXJyJywgWzg2NDldXSwgWydScmlnaHRhcnJvdycsIFs4NjY3XV0sIFsncnNhcXVvJywgWzgyNTBdXSwgWydyc2NyJywgWzEyMDAwN11dLCBbJ1JzY3InLCBbODQ3NV1dLCBbJ3JzaCcsIFs4NjI1XV0sIFsnUnNoJywgWzg2MjVdXSwgWydyc3FiJywgWzkzXV0sIFsncnNxdW8nLCBbODIxN11dLCBbJ3JzcXVvcicsIFs4MjE3XV0sIFsnQ2xvc2VDdXJseVF1b3RlJywgWzgyMTddXSwgWydydGhyZWUnLCBbODkwOF1dLCBbJ3J0aW1lcycsIFs4OTA2XV0sIFsncnRyaScsIFs5NjU3XV0sIFsncnRyaWUnLCBbODg4NV1dLCBbJ3J0cmlmJywgWzk2NTZdXSwgWydydHJpbHRyaScsIFsxMDcwMl1dLCBbJ1J1bGVEZWxheWVkJywgWzEwNzQwXV0sIFsncnVsdWhhcicsIFsxMDYwMF1dLCBbJ3J4JywgWzg0NzhdXSwgWydTYWN1dGUnLCBbMzQ2XV0sIFsnc2FjdXRlJywgWzM0N11dLCBbJ3NicXVvJywgWzgyMThdXSwgWydzY2FwJywgWzEwOTM2XV0sIFsnU2Nhcm9uJywgWzM1Ml1dLCBbJ3NjYXJvbicsIFszNTNdXSwgWydTYycsIFsxMDk0MF1dLCBbJ3NjJywgWzg4MjddXSwgWydzY2N1ZScsIFs4ODI5XV0sIFsnc2NlJywgWzEwOTI4XV0sIFsnc2NFJywgWzEwOTMyXV0sIFsnU2NlZGlsJywgWzM1MF1dLCBbJ3NjZWRpbCcsIFszNTFdXSwgWydTY2lyYycsIFszNDhdXSwgWydzY2lyYycsIFszNDldXSwgWydzY25hcCcsIFsxMDkzOF1dLCBbJ3NjbkUnLCBbMTA5MzRdXSwgWydzY25zaW0nLCBbODkzN11dLCBbJ3NjcG9saW50JywgWzEwNzcxXV0sIFsnc2NzaW0nLCBbODgzMV1dLCBbJ1NjeScsIFsxMDU3XV0sIFsnc2N5JywgWzEwODldXSwgWydzZG90YicsIFs4ODY1XV0sIFsnc2RvdCcsIFs4OTAxXV0sIFsnc2RvdGUnLCBbMTA4NTRdXSwgWydzZWFyaGsnLCBbMTA1MzNdXSwgWydzZWFycicsIFs4NjAwXV0sIFsnc2VBcnInLCBbODY2NF1dLCBbJ3NlYXJyb3cnLCBbODYwMF1dLCBbJ3NlY3QnLCBbMTY3XV0sIFsnc2VtaScsIFs1OV1dLCBbJ3Nlc3dhcicsIFsxMDUzN11dLCBbJ3NldG1pbnVzJywgWzg3MjZdXSwgWydzZXRtbicsIFs4NzI2XV0sIFsnc2V4dCcsIFsxMDAzOF1dLCBbJ1NmcicsIFsxMjAwODZdXSwgWydzZnInLCBbMTIwMTEyXV0sIFsnc2Zyb3duJywgWzg5OTRdXSwgWydzaGFycCcsIFs5ODM5XV0sIFsnU0hDSGN5JywgWzEwNjVdXSwgWydzaGNoY3knLCBbMTA5N11dLCBbJ1NIY3knLCBbMTA2NF1dLCBbJ3NoY3knLCBbMTA5Nl1dLCBbJ1Nob3J0RG93bkFycm93JywgWzg1OTVdXSwgWydTaG9ydExlZnRBcnJvdycsIFs4NTkyXV0sIFsnc2hvcnRtaWQnLCBbODczOV1dLCBbJ3Nob3J0cGFyYWxsZWwnLCBbODc0MV1dLCBbJ1Nob3J0UmlnaHRBcnJvdycsIFs4NTk0XV0sIFsnU2hvcnRVcEFycm93JywgWzg1OTNdXSwgWydzaHknLCBbMTczXV0sIFsnU2lnbWEnLCBbOTMxXV0sIFsnc2lnbWEnLCBbOTYzXV0sIFsnc2lnbWFmJywgWzk2Ml1dLCBbJ3NpZ21hdicsIFs5NjJdXSwgWydzaW0nLCBbODc2NF1dLCBbJ3NpbWRvdCcsIFsxMDg1OF1dLCBbJ3NpbWUnLCBbODc3MV1dLCBbJ3NpbWVxJywgWzg3NzFdXSwgWydzaW1nJywgWzEwOTEwXV0sIFsnc2ltZ0UnLCBbMTA5MTJdXSwgWydzaW1sJywgWzEwOTA5XV0sIFsnc2ltbEUnLCBbMTA5MTFdXSwgWydzaW1uZScsIFs4Nzc0XV0sIFsnc2ltcGx1cycsIFsxMDc4OF1dLCBbJ3NpbXJhcnInLCBbMTA2MTBdXSwgWydzbGFycicsIFs4NTkyXV0sIFsnU21hbGxDaXJjbGUnLCBbODcyOF1dLCBbJ3NtYWxsc2V0bWludXMnLCBbODcyNl1dLCBbJ3NtYXNocCcsIFsxMDgwM11dLCBbJ3NtZXBhcnNsJywgWzEwNzI0XV0sIFsnc21pZCcsIFs4NzM5XV0sIFsnc21pbGUnLCBbODk5NV1dLCBbJ3NtdCcsIFsxMDkyMl1dLCBbJ3NtdGUnLCBbMTA5MjRdXSwgWydzbXRlcycsIFsxMDkyNCwgNjUwMjRdXSwgWydTT0ZUY3knLCBbMTA2OF1dLCBbJ3NvZnRjeScsIFsxMTAwXV0sIFsnc29sYmFyJywgWzkwMjNdXSwgWydzb2xiJywgWzEwNjkyXV0sIFsnc29sJywgWzQ3XV0sIFsnU29wZicsIFsxMjAxMzhdXSwgWydzb3BmJywgWzEyMDE2NF1dLCBbJ3NwYWRlcycsIFs5ODI0XV0sIFsnc3BhZGVzdWl0JywgWzk4MjRdXSwgWydzcGFyJywgWzg3NDFdXSwgWydzcWNhcCcsIFs4ODUxXV0sIFsnc3FjYXBzJywgWzg4NTEsIDY1MDI0XV0sIFsnc3FjdXAnLCBbODg1Ml1dLCBbJ3NxY3VwcycsIFs4ODUyLCA2NTAyNF1dLCBbJ1NxcnQnLCBbODczMF1dLCBbJ3Nxc3ViJywgWzg4NDddXSwgWydzcXN1YmUnLCBbODg0OV1dLCBbJ3Nxc3Vic2V0JywgWzg4NDddXSwgWydzcXN1YnNldGVxJywgWzg4NDldXSwgWydzcXN1cCcsIFs4ODQ4XV0sIFsnc3FzdXBlJywgWzg4NTBdXSwgWydzcXN1cHNldCcsIFs4ODQ4XV0sIFsnc3FzdXBzZXRlcScsIFs4ODUwXV0sIFsnc3F1YXJlJywgWzk2MzNdXSwgWydTcXVhcmUnLCBbOTYzM11dLCBbJ1NxdWFyZUludGVyc2VjdGlvbicsIFs4ODUxXV0sIFsnU3F1YXJlU3Vic2V0JywgWzg4NDddXSwgWydTcXVhcmVTdWJzZXRFcXVhbCcsIFs4ODQ5XV0sIFsnU3F1YXJlU3VwZXJzZXQnLCBbODg0OF1dLCBbJ1NxdWFyZVN1cGVyc2V0RXF1YWwnLCBbODg1MF1dLCBbJ1NxdWFyZVVuaW9uJywgWzg4NTJdXSwgWydzcXVhcmYnLCBbOTY0Ml1dLCBbJ3NxdScsIFs5NjMzXV0sIFsnc3F1ZicsIFs5NjQyXV0sIFsnc3JhcnInLCBbODU5NF1dLCBbJ1NzY3InLCBbMTE5OTgyXV0sIFsnc3NjcicsIFsxMjAwMDhdXSwgWydzc2V0bW4nLCBbODcyNl1dLCBbJ3NzbWlsZScsIFs4OTk1XV0sIFsnc3N0YXJmJywgWzg5MDJdXSwgWydTdGFyJywgWzg5MDJdXSwgWydzdGFyJywgWzk3MzRdXSwgWydzdGFyZicsIFs5NzMzXV0sIFsnc3RyYWlnaHRlcHNpbG9uJywgWzEwMTNdXSwgWydzdHJhaWdodHBoaScsIFs5ODFdXSwgWydzdHJucycsIFsxNzVdXSwgWydzdWInLCBbODgzNF1dLCBbJ1N1YicsIFs4OTEyXV0sIFsnc3ViZG90JywgWzEwOTQxXV0sIFsnc3ViRScsIFsxMDk0OV1dLCBbJ3N1YmUnLCBbODgzOF1dLCBbJ3N1YmVkb3QnLCBbMTA5NDddXSwgWydzdWJtdWx0JywgWzEwOTQ1XV0sIFsnc3VibkUnLCBbMTA5NTVdXSwgWydzdWJuZScsIFs4ODQyXV0sIFsnc3VicGx1cycsIFsxMDk0M11dLCBbJ3N1YnJhcnInLCBbMTA2MTddXSwgWydzdWJzZXQnLCBbODgzNF1dLCBbJ1N1YnNldCcsIFs4OTEyXV0sIFsnc3Vic2V0ZXEnLCBbODgzOF1dLCBbJ3N1YnNldGVxcScsIFsxMDk0OV1dLCBbJ1N1YnNldEVxdWFsJywgWzg4MzhdXSwgWydzdWJzZXRuZXEnLCBbODg0Ml1dLCBbJ3N1YnNldG5lcXEnLCBbMTA5NTVdXSwgWydzdWJzaW0nLCBbMTA5NTFdXSwgWydzdWJzdWInLCBbMTA5NjVdXSwgWydzdWJzdXAnLCBbMTA5NjNdXSwgWydzdWNjYXBwcm94JywgWzEwOTM2XV0sIFsnc3VjYycsIFs4ODI3XV0sIFsnc3VjY2N1cmx5ZXEnLCBbODgyOV1dLCBbJ1N1Y2NlZWRzJywgWzg4MjddXSwgWydTdWNjZWVkc0VxdWFsJywgWzEwOTI4XV0sIFsnU3VjY2VlZHNTbGFudEVxdWFsJywgWzg4MjldXSwgWydTdWNjZWVkc1RpbGRlJywgWzg4MzFdXSwgWydzdWNjZXEnLCBbMTA5MjhdXSwgWydzdWNjbmFwcHJveCcsIFsxMDkzOF1dLCBbJ3N1Y2NuZXFxJywgWzEwOTM0XV0sIFsnc3VjY25zaW0nLCBbODkzN11dLCBbJ3N1Y2NzaW0nLCBbODgzMV1dLCBbJ1N1Y2hUaGF0JywgWzg3MTVdXSwgWydzdW0nLCBbODcyMV1dLCBbJ1N1bScsIFs4NzIxXV0sIFsnc3VuZycsIFs5ODM0XV0sIFsnc3VwMScsIFsxODVdXSwgWydzdXAyJywgWzE3OF1dLCBbJ3N1cDMnLCBbMTc5XV0sIFsnc3VwJywgWzg4MzVdXSwgWydTdXAnLCBbODkxM11dLCBbJ3N1cGRvdCcsIFsxMDk0Ml1dLCBbJ3N1cGRzdWInLCBbMTA5NjhdXSwgWydzdXBFJywgWzEwOTUwXV0sIFsnc3VwZScsIFs4ODM5XV0sIFsnc3VwZWRvdCcsIFsxMDk0OF1dLCBbJ1N1cGVyc2V0JywgWzg4MzVdXSwgWydTdXBlcnNldEVxdWFsJywgWzg4MzldXSwgWydzdXBoc29sJywgWzEwMTg1XV0sIFsnc3VwaHN1YicsIFsxMDk2N11dLCBbJ3N1cGxhcnInLCBbMTA2MTldXSwgWydzdXBtdWx0JywgWzEwOTQ2XV0sIFsnc3VwbkUnLCBbMTA5NTZdXSwgWydzdXBuZScsIFs4ODQzXV0sIFsnc3VwcGx1cycsIFsxMDk0NF1dLCBbJ3N1cHNldCcsIFs4ODM1XV0sIFsnU3Vwc2V0JywgWzg5MTNdXSwgWydzdXBzZXRlcScsIFs4ODM5XV0sIFsnc3Vwc2V0ZXFxJywgWzEwOTUwXV0sIFsnc3Vwc2V0bmVxJywgWzg4NDNdXSwgWydzdXBzZXRuZXFxJywgWzEwOTU2XV0sIFsnc3Vwc2ltJywgWzEwOTUyXV0sIFsnc3Vwc3ViJywgWzEwOTY0XV0sIFsnc3Vwc3VwJywgWzEwOTY2XV0sIFsnc3dhcmhrJywgWzEwNTM0XV0sIFsnc3dhcnInLCBbODYwMV1dLCBbJ3N3QXJyJywgWzg2NjVdXSwgWydzd2Fycm93JywgWzg2MDFdXSwgWydzd253YXInLCBbMTA1MzhdXSwgWydzemxpZycsIFsyMjNdXSwgWydUYWInLCBbOV1dLCBbJ3RhcmdldCcsIFs4OTgyXV0sIFsnVGF1JywgWzkzMl1dLCBbJ3RhdScsIFs5NjRdXSwgWyd0YnJrJywgWzkxNDBdXSwgWydUY2Fyb24nLCBbMzU2XV0sIFsndGNhcm9uJywgWzM1N11dLCBbJ1RjZWRpbCcsIFszNTRdXSwgWyd0Y2VkaWwnLCBbMzU1XV0sIFsnVGN5JywgWzEwNThdXSwgWyd0Y3knLCBbMTA5MF1dLCBbJ3Rkb3QnLCBbODQxMV1dLCBbJ3RlbHJlYycsIFs4OTgxXV0sIFsnVGZyJywgWzEyMDA4N11dLCBbJ3RmcicsIFsxMjAxMTNdXSwgWyd0aGVyZTQnLCBbODc1Nl1dLCBbJ3RoZXJlZm9yZScsIFs4NzU2XV0sIFsnVGhlcmVmb3JlJywgWzg3NTZdXSwgWydUaGV0YScsIFs5MjBdXSwgWyd0aGV0YScsIFs5NTJdXSwgWyd0aGV0YXN5bScsIFs5NzddXSwgWyd0aGV0YXYnLCBbOTc3XV0sIFsndGhpY2thcHByb3gnLCBbODc3Nl1dLCBbJ3RoaWNrc2ltJywgWzg3NjRdXSwgWydUaGlja1NwYWNlJywgWzgyODcsIDgyMDJdXSwgWydUaGluU3BhY2UnLCBbODIwMV1dLCBbJ3RoaW5zcCcsIFs4MjAxXV0sIFsndGhrYXAnLCBbODc3Nl1dLCBbJ3Roa3NpbScsIFs4NzY0XV0sIFsnVEhPUk4nLCBbMjIyXV0sIFsndGhvcm4nLCBbMjU0XV0sIFsndGlsZGUnLCBbNzMyXV0sIFsnVGlsZGUnLCBbODc2NF1dLCBbJ1RpbGRlRXF1YWwnLCBbODc3MV1dLCBbJ1RpbGRlRnVsbEVxdWFsJywgWzg3NzNdXSwgWydUaWxkZVRpbGRlJywgWzg3NzZdXSwgWyd0aW1lc2JhcicsIFsxMDgwMV1dLCBbJ3RpbWVzYicsIFs4ODY0XV0sIFsndGltZXMnLCBbMjE1XV0sIFsndGltZXNkJywgWzEwODAwXV0sIFsndGludCcsIFs4NzQ5XV0sIFsndG9lYScsIFsxMDUzNl1dLCBbJ3RvcGJvdCcsIFs5MDE0XV0sIFsndG9wY2lyJywgWzEwOTkzXV0sIFsndG9wJywgWzg4NjhdXSwgWydUb3BmJywgWzEyMDEzOV1dLCBbJ3RvcGYnLCBbMTIwMTY1XV0sIFsndG9wZm9yaycsIFsxMDk3MF1dLCBbJ3Rvc2EnLCBbMTA1MzddXSwgWyd0cHJpbWUnLCBbODI0NF1dLCBbJ3RyYWRlJywgWzg0ODJdXSwgWydUUkFERScsIFs4NDgyXV0sIFsndHJpYW5nbGUnLCBbOTY1M11dLCBbJ3RyaWFuZ2xlZG93bicsIFs5NjYzXV0sIFsndHJpYW5nbGVsZWZ0JywgWzk2NjddXSwgWyd0cmlhbmdsZWxlZnRlcScsIFs4ODg0XV0sIFsndHJpYW5nbGVxJywgWzg3OTZdXSwgWyd0cmlhbmdsZXJpZ2h0JywgWzk2NTddXSwgWyd0cmlhbmdsZXJpZ2h0ZXEnLCBbODg4NV1dLCBbJ3RyaWRvdCcsIFs5NzA4XV0sIFsndHJpZScsIFs4Nzk2XV0sIFsndHJpbWludXMnLCBbMTA4MTBdXSwgWydUcmlwbGVEb3QnLCBbODQxMV1dLCBbJ3RyaXBsdXMnLCBbMTA4MDldXSwgWyd0cmlzYicsIFsxMDcwMV1dLCBbJ3RyaXRpbWUnLCBbMTA4MTFdXSwgWyd0cnBleml1bScsIFs5MTg2XV0sIFsnVHNjcicsIFsxMTk5ODNdXSwgWyd0c2NyJywgWzEyMDAwOV1dLCBbJ1RTY3knLCBbMTA2Ml1dLCBbJ3RzY3knLCBbMTA5NF1dLCBbJ1RTSGN5JywgWzEwMzVdXSwgWyd0c2hjeScsIFsxMTE1XV0sIFsnVHN0cm9rJywgWzM1OF1dLCBbJ3RzdHJvaycsIFszNTldXSwgWyd0d2l4dCcsIFs4ODEyXV0sIFsndHdvaGVhZGxlZnRhcnJvdycsIFs4NjA2XV0sIFsndHdvaGVhZHJpZ2h0YXJyb3cnLCBbODYwOF1dLCBbJ1VhY3V0ZScsIFsyMThdXSwgWyd1YWN1dGUnLCBbMjUwXV0sIFsndWFycicsIFs4NTkzXV0sIFsnVWFycicsIFs4NjA3XV0sIFsndUFycicsIFs4NjU3XV0sIFsnVWFycm9jaXInLCBbMTA1NjldXSwgWydVYnJjeScsIFsxMDM4XV0sIFsndWJyY3knLCBbMTExOF1dLCBbJ1VicmV2ZScsIFszNjRdXSwgWyd1YnJldmUnLCBbMzY1XV0sIFsnVWNpcmMnLCBbMjE5XV0sIFsndWNpcmMnLCBbMjUxXV0sIFsnVWN5JywgWzEwNTldXSwgWyd1Y3knLCBbMTA5MV1dLCBbJ3VkYXJyJywgWzg2NDVdXSwgWydVZGJsYWMnLCBbMzY4XV0sIFsndWRibGFjJywgWzM2OV1dLCBbJ3VkaGFyJywgWzEwNjA2XV0sIFsndWZpc2h0JywgWzEwNjIyXV0sIFsnVWZyJywgWzEyMDA4OF1dLCBbJ3VmcicsIFsxMjAxMTRdXSwgWydVZ3JhdmUnLCBbMjE3XV0sIFsndWdyYXZlJywgWzI0OV1dLCBbJ3VIYXInLCBbMTA1OTVdXSwgWyd1aGFybCcsIFs4NjM5XV0sIFsndWhhcnInLCBbODYzOF1dLCBbJ3VoYmxrJywgWzk2MDBdXSwgWyd1bGNvcm4nLCBbODk4OF1dLCBbJ3VsY29ybmVyJywgWzg5ODhdXSwgWyd1bGNyb3AnLCBbODk3NV1dLCBbJ3VsdHJpJywgWzk3MjBdXSwgWydVbWFjcicsIFszNjJdXSwgWyd1bWFjcicsIFszNjNdXSwgWyd1bWwnLCBbMTY4XV0sIFsnVW5kZXJCYXInLCBbOTVdXSwgWydVbmRlckJyYWNlJywgWzkxODNdXSwgWydVbmRlckJyYWNrZXQnLCBbOTE0MV1dLCBbJ1VuZGVyUGFyZW50aGVzaXMnLCBbOTE4MV1dLCBbJ1VuaW9uJywgWzg4OTldXSwgWydVbmlvblBsdXMnLCBbODg0Nl1dLCBbJ1VvZ29uJywgWzM3MF1dLCBbJ3VvZ29uJywgWzM3MV1dLCBbJ1VvcGYnLCBbMTIwMTQwXV0sIFsndW9wZicsIFsxMjAxNjZdXSwgWydVcEFycm93QmFyJywgWzEwNTE0XV0sIFsndXBhcnJvdycsIFs4NTkzXV0sIFsnVXBBcnJvdycsIFs4NTkzXV0sIFsnVXBhcnJvdycsIFs4NjU3XV0sIFsnVXBBcnJvd0Rvd25BcnJvdycsIFs4NjQ1XV0sIFsndXBkb3duYXJyb3cnLCBbODU5N11dLCBbJ1VwRG93bkFycm93JywgWzg1OTddXSwgWydVcGRvd25hcnJvdycsIFs4NjYxXV0sIFsnVXBFcXVpbGlicml1bScsIFsxMDYwNl1dLCBbJ3VwaGFycG9vbmxlZnQnLCBbODYzOV1dLCBbJ3VwaGFycG9vbnJpZ2h0JywgWzg2MzhdXSwgWyd1cGx1cycsIFs4ODQ2XV0sIFsnVXBwZXJMZWZ0QXJyb3cnLCBbODU5OF1dLCBbJ1VwcGVyUmlnaHRBcnJvdycsIFs4NTk5XV0sIFsndXBzaScsIFs5NjVdXSwgWydVcHNpJywgWzk3OF1dLCBbJ3Vwc2loJywgWzk3OF1dLCBbJ1Vwc2lsb24nLCBbOTMzXV0sIFsndXBzaWxvbicsIFs5NjVdXSwgWydVcFRlZUFycm93JywgWzg2MTNdXSwgWydVcFRlZScsIFs4ODY5XV0sIFsndXB1cGFycm93cycsIFs4NjQ4XV0sIFsndXJjb3JuJywgWzg5ODldXSwgWyd1cmNvcm5lcicsIFs4OTg5XV0sIFsndXJjcm9wJywgWzg5NzRdXSwgWydVcmluZycsIFszNjZdXSwgWyd1cmluZycsIFszNjddXSwgWyd1cnRyaScsIFs5NzIxXV0sIFsnVXNjcicsIFsxMTk5ODRdXSwgWyd1c2NyJywgWzEyMDAxMF1dLCBbJ3V0ZG90JywgWzg5NDRdXSwgWydVdGlsZGUnLCBbMzYwXV0sIFsndXRpbGRlJywgWzM2MV1dLCBbJ3V0cmknLCBbOTY1M11dLCBbJ3V0cmlmJywgWzk2NTJdXSwgWyd1dWFycicsIFs4NjQ4XV0sIFsnVXVtbCcsIFsyMjBdXSwgWyd1dW1sJywgWzI1Ml1dLCBbJ3V3YW5nbGUnLCBbMTA2NjNdXSwgWyd2YW5ncnQnLCBbMTA2NTJdXSwgWyd2YXJlcHNpbG9uJywgWzEwMTNdXSwgWyd2YXJrYXBwYScsIFsxMDA4XV0sIFsndmFybm90aGluZycsIFs4NzA5XV0sIFsndmFycGhpJywgWzk4MV1dLCBbJ3ZhcnBpJywgWzk4Ml1dLCBbJ3ZhcnByb3B0bycsIFs4NzMzXV0sIFsndmFycicsIFs4NTk3XV0sIFsndkFycicsIFs4NjYxXV0sIFsndmFycmhvJywgWzEwMDldXSwgWyd2YXJzaWdtYScsIFs5NjJdXSwgWyd2YXJzdWJzZXRuZXEnLCBbODg0MiwgNjUwMjRdXSwgWyd2YXJzdWJzZXRuZXFxJywgWzEwOTU1LCA2NTAyNF1dLCBbJ3ZhcnN1cHNldG5lcScsIFs4ODQzLCA2NTAyNF1dLCBbJ3ZhcnN1cHNldG5lcXEnLCBbMTA5NTYsIDY1MDI0XV0sIFsndmFydGhldGEnLCBbOTc3XV0sIFsndmFydHJpYW5nbGVsZWZ0JywgWzg4ODJdXSwgWyd2YXJ0cmlhbmdsZXJpZ2h0JywgWzg4ODNdXSwgWyd2QmFyJywgWzEwOTg0XV0sIFsnVmJhcicsIFsxMDk4N11dLCBbJ3ZCYXJ2JywgWzEwOTg1XV0sIFsnVmN5JywgWzEwNDJdXSwgWyd2Y3knLCBbMTA3NF1dLCBbJ3ZkYXNoJywgWzg4NjZdXSwgWyd2RGFzaCcsIFs4ODcyXV0sIFsnVmRhc2gnLCBbODg3M11dLCBbJ1ZEYXNoJywgWzg4NzVdXSwgWydWZGFzaGwnLCBbMTA5ODJdXSwgWyd2ZWViYXInLCBbODg5MV1dLCBbJ3ZlZScsIFs4NzQ0XV0sIFsnVmVlJywgWzg4OTddXSwgWyd2ZWVlcScsIFs4Nzk0XV0sIFsndmVsbGlwJywgWzg5NDJdXSwgWyd2ZXJiYXInLCBbMTI0XV0sIFsnVmVyYmFyJywgWzgyMTRdXSwgWyd2ZXJ0JywgWzEyNF1dLCBbJ1ZlcnQnLCBbODIxNF1dLCBbJ1ZlcnRpY2FsQmFyJywgWzg3MzldXSwgWydWZXJ0aWNhbExpbmUnLCBbMTI0XV0sIFsnVmVydGljYWxTZXBhcmF0b3InLCBbMTAwNzJdXSwgWydWZXJ0aWNhbFRpbGRlJywgWzg3NjhdXSwgWydWZXJ5VGhpblNwYWNlJywgWzgyMDJdXSwgWydWZnInLCBbMTIwMDg5XV0sIFsndmZyJywgWzEyMDExNV1dLCBbJ3ZsdHJpJywgWzg4ODJdXSwgWyd2bnN1YicsIFs4ODM0LCA4NDAyXV0sIFsndm5zdXAnLCBbODgzNSwgODQwMl1dLCBbJ1ZvcGYnLCBbMTIwMTQxXV0sIFsndm9wZicsIFsxMjAxNjddXSwgWyd2cHJvcCcsIFs4NzMzXV0sIFsndnJ0cmknLCBbODg4M11dLCBbJ1ZzY3InLCBbMTE5OTg1XV0sIFsndnNjcicsIFsxMjAwMTFdXSwgWyd2c3VibkUnLCBbMTA5NTUsIDY1MDI0XV0sIFsndnN1Ym5lJywgWzg4NDIsIDY1MDI0XV0sIFsndnN1cG5FJywgWzEwOTU2LCA2NTAyNF1dLCBbJ3ZzdXBuZScsIFs4ODQzLCA2NTAyNF1dLCBbJ1Z2ZGFzaCcsIFs4ODc0XV0sIFsndnppZ3phZycsIFsxMDY1MF1dLCBbJ1djaXJjJywgWzM3Ml1dLCBbJ3djaXJjJywgWzM3M11dLCBbJ3dlZGJhcicsIFsxMDg0N11dLCBbJ3dlZGdlJywgWzg3NDNdXSwgWydXZWRnZScsIFs4ODk2XV0sIFsnd2VkZ2VxJywgWzg3OTNdXSwgWyd3ZWllcnAnLCBbODQ3Ml1dLCBbJ1dmcicsIFsxMjAwOTBdXSwgWyd3ZnInLCBbMTIwMTE2XV0sIFsnV29wZicsIFsxMjAxNDJdXSwgWyd3b3BmJywgWzEyMDE2OF1dLCBbJ3dwJywgWzg0NzJdXSwgWyd3cicsIFs4NzY4XV0sIFsnd3JlYXRoJywgWzg3NjhdXSwgWydXc2NyJywgWzExOTk4Nl1dLCBbJ3dzY3InLCBbMTIwMDEyXV0sIFsneGNhcCcsIFs4ODk4XV0sIFsneGNpcmMnLCBbOTcxMV1dLCBbJ3hjdXAnLCBbODg5OV1dLCBbJ3hkdHJpJywgWzk2NjFdXSwgWydYZnInLCBbMTIwMDkxXV0sIFsneGZyJywgWzEyMDExN11dLCBbJ3hoYXJyJywgWzEwMjMxXV0sIFsneGhBcnInLCBbMTAyMzRdXSwgWydYaScsIFs5MjZdXSwgWyd4aScsIFs5NThdXSwgWyd4bGFycicsIFsxMDIyOV1dLCBbJ3hsQXJyJywgWzEwMjMyXV0sIFsneG1hcCcsIFsxMDIzNl1dLCBbJ3huaXMnLCBbODk1NV1dLCBbJ3hvZG90JywgWzEwNzUyXV0sIFsnWG9wZicsIFsxMjAxNDNdXSwgWyd4b3BmJywgWzEyMDE2OV1dLCBbJ3hvcGx1cycsIFsxMDc1M11dLCBbJ3hvdGltZScsIFsxMDc1NF1dLCBbJ3hyYXJyJywgWzEwMjMwXV0sIFsneHJBcnInLCBbMTAyMzNdXSwgWydYc2NyJywgWzExOTk4N11dLCBbJ3hzY3InLCBbMTIwMDEzXV0sIFsneHNxY3VwJywgWzEwNzU4XV0sIFsneHVwbHVzJywgWzEwNzU2XV0sIFsneHV0cmknLCBbOTY1MV1dLCBbJ3h2ZWUnLCBbODg5N11dLCBbJ3h3ZWRnZScsIFs4ODk2XV0sIFsnWWFjdXRlJywgWzIyMV1dLCBbJ3lhY3V0ZScsIFsyNTNdXSwgWydZQWN5JywgWzEwNzFdXSwgWyd5YWN5JywgWzExMDNdXSwgWydZY2lyYycsIFszNzRdXSwgWyd5Y2lyYycsIFszNzVdXSwgWydZY3knLCBbMTA2N11dLCBbJ3ljeScsIFsxMDk5XV0sIFsneWVuJywgWzE2NV1dLCBbJ1lmcicsIFsxMjAwOTJdXSwgWyd5ZnInLCBbMTIwMTE4XV0sIFsnWUljeScsIFsxMDMxXV0sIFsneWljeScsIFsxMTExXV0sIFsnWW9wZicsIFsxMjAxNDRdXSwgWyd5b3BmJywgWzEyMDE3MF1dLCBbJ1lzY3InLCBbMTE5OTg4XV0sIFsneXNjcicsIFsxMjAwMTRdXSwgWydZVWN5JywgWzEwNzBdXSwgWyd5dWN5JywgWzExMDJdXSwgWyd5dW1sJywgWzI1NV1dLCBbJ1l1bWwnLCBbMzc2XV0sIFsnWmFjdXRlJywgWzM3N11dLCBbJ3phY3V0ZScsIFszNzhdXSwgWydaY2Fyb24nLCBbMzgxXV0sIFsnemNhcm9uJywgWzM4Ml1dLCBbJ1pjeScsIFsxMDQ3XV0sIFsnemN5JywgWzEwNzldXSwgWydaZG90JywgWzM3OV1dLCBbJ3pkb3QnLCBbMzgwXV0sIFsnemVldHJmJywgWzg0ODhdXSwgWydaZXJvV2lkdGhTcGFjZScsIFs4MjAzXV0sIFsnWmV0YScsIFs5MThdXSwgWyd6ZXRhJywgWzk1MF1dLCBbJ3pmcicsIFsxMjAxMTldXSwgWydaZnInLCBbODQ4OF1dLCBbJ1pIY3knLCBbMTA0Nl1dLCBbJ3poY3knLCBbMTA3OF1dLCBbJ3ppZ3JhcnInLCBbODY2OV1dLCBbJ3pvcGYnLCBbMTIwMTcxXV0sIFsnWm9wZicsIFs4NDg0XV0sIFsnWnNjcicsIFsxMTk5ODldXSwgWyd6c2NyJywgWzEyMDAxNV1dLCBbJ3p3aicsIFs4MjA1XV0sIFsnenduaicsIFs4MjA0XV1dO1xuXG52YXIgYWxwaGFJbmRleCA9IHt9O1xudmFyIGNoYXJJbmRleCA9IHt9O1xuXG5jcmVhdGVJbmRleGVzKGFscGhhSW5kZXgsIGNoYXJJbmRleCk7XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEh0bWw1RW50aXRpZXMoKSB7fVxuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw1RW50aXRpZXMucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmICghc3RyIHx8ICFzdHIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mKCM/W1xcd1xcZF0rKTs/L2csIGZ1bmN0aW9uKHMsIGVudGl0eSkge1xuICAgICAgICB2YXIgY2hyO1xuICAgICAgICBpZiAoZW50aXR5LmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcbiAgICAgICAgICAgIHZhciBjb2RlID0gZW50aXR5LmNoYXJBdCgxKSA9PT0gJ3gnID9cbiAgICAgICAgICAgICAgICBwYXJzZUludChlbnRpdHkuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCksIDE2KSA6XG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoZW50aXR5LnN1YnN0cigxKSk7XG5cbiAgICAgICAgICAgIGlmICghKGlzTmFOKGNvZGUpIHx8IGNvZGUgPCAtMzI3NjggfHwgY29kZSA+IDY1NTM1KSkge1xuICAgICAgICAgICAgICAgIGNociA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaHIgPSBhbHBoYUluZGV4W2VudGl0eV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNociB8fCBzO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gSHRtbDVFbnRpdGllcy5kZWNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IEh0bWw1RW50aXRpZXMoKS5kZWNvZGUoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw1RW50aXRpZXMucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmICghc3RyIHx8ICFzdHIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhckluZm8gPSBjaGFySW5kZXhbc3RyLmNoYXJDb2RlQXQoaSldO1xuICAgICAgICBpZiAoY2hhckluZm8pIHtcbiAgICAgICAgICAgIHZhciBhbHBoYSA9IGNoYXJJbmZvW3N0ci5jaGFyQ29kZUF0KGkgKyAxKV07XG4gICAgICAgICAgICBpZiAoYWxwaGEpIHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFscGhhID0gY2hhckluZm9bJyddO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiJlwiICsgYWxwaGEgKyBcIjtcIjtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ICs9IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuIEh0bWw1RW50aXRpZXMuZW5jb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBIdG1sNUVudGl0aWVzKCkuZW5jb2RlKHN0cik7XG4gfTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNUVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGVOb25VVEYgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAoIXN0ciB8fCAhc3RyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgdmFyIGNoYXJJbmZvID0gY2hhckluZGV4W2NdO1xuICAgICAgICBpZiAoY2hhckluZm8pIHtcbiAgICAgICAgICAgIHZhciBhbHBoYSA9IGNoYXJJbmZvW3N0ci5jaGFyQ29kZUF0KGkgKyAxKV07XG4gICAgICAgICAgICBpZiAoYWxwaGEpIHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFscGhhID0gY2hhckluZm9bJyddO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiJlwiICsgYWxwaGEgKyBcIjtcIjtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMgPCAzMiB8fCBjID4gMTI2KSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJyYjJyArIGMgKyAnOyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBIdG1sNUVudGl0aWVzLmVuY29kZU5vblVURiA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDVFbnRpdGllcygpLmVuY29kZU5vblVURihzdHIpO1xuIH07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDVFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlTm9uQVNDSUkgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAoIXN0ciB8fCAhc3RyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMgPD0gMjU1KSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc3RyW2krK107XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gJyYjJyArIGMgKyAnOyc7XG4gICAgICAgIGkrK1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gSHRtbDVFbnRpdGllcy5lbmNvZGVOb25BU0NJSSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDVFbnRpdGllcygpLmVuY29kZU5vbkFTQ0lJKHN0cik7XG4gfTtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gYWxwaGFJbmRleCBQYXNzZWQgYnkgcmVmZXJlbmNlLlxuICogQHBhcmFtIHtPYmplY3R9IGNoYXJJbmRleCBQYXNzZWQgYnkgcmVmZXJlbmNlLlxuICovXG5mdW5jdGlvbiBjcmVhdGVJbmRleGVzKGFscGhhSW5kZXgsIGNoYXJJbmRleCkge1xuICAgIHZhciBpID0gRU5USVRJRVMubGVuZ3RoO1xuICAgIHZhciBfcmVzdWx0cyA9IFtdO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdmFyIGUgPSBFTlRJVElFU1tpXTtcbiAgICAgICAgdmFyIGFscGhhID0gZVswXTtcbiAgICAgICAgdmFyIGNoYXJzID0gZVsxXTtcbiAgICAgICAgdmFyIGNociA9IGNoYXJzWzBdO1xuICAgICAgICB2YXIgYWRkQ2hhciA9IChjaHIgPCAzMiB8fCBjaHIgPiAxMjYpIHx8IGNociA9PT0gNjIgfHwgY2hyID09PSA2MCB8fCBjaHIgPT09IDM4IHx8IGNociA9PT0gMzQgfHwgY2hyID09PSAzOTtcbiAgICAgICAgdmFyIGNoYXJJbmZvO1xuICAgICAgICBpZiAoYWRkQ2hhcikge1xuICAgICAgICAgICAgY2hhckluZm8gPSBjaGFySW5kZXhbY2hyXSA9IGNoYXJJbmRleFtjaHJdIHx8IHt9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyc1sxXSkge1xuICAgICAgICAgICAgdmFyIGNocjIgPSBjaGFyc1sxXTtcbiAgICAgICAgICAgIGFscGhhSW5kZXhbYWxwaGFdID0gU3RyaW5nLmZyb21DaGFyQ29kZShjaHIpICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIyKTtcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2goYWRkQ2hhciAmJiAoY2hhckluZm9bY2hyMl0gPSBhbHBoYSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxwaGFJbmRleFthbHBoYV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocik7XG4gICAgICAgICAgICBfcmVzdWx0cy5wdXNoKGFkZENoYXIgJiYgKGNoYXJJbmZvWycnXSA9IGFscGhhKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSHRtbDVFbnRpdGllcztcbiIsInZhciBBTFBIQV9JTkRFWCA9IHtcbiAgICAnJmx0JzogJzwnLFxuICAgICcmZ3QnOiAnPicsXG4gICAgJyZxdW90JzogJ1wiJyxcbiAgICAnJmFwb3MnOiAnXFwnJyxcbiAgICAnJmFtcCc6ICcmJyxcbiAgICAnJmx0Oyc6ICc8JyxcbiAgICAnJmd0Oyc6ICc+JyxcbiAgICAnJnF1b3Q7JzogJ1wiJyxcbiAgICAnJmFwb3M7JzogJ1xcJycsXG4gICAgJyZhbXA7JzogJyYnXG59O1xuXG52YXIgQ0hBUl9JTkRFWCA9IHtcbiAgICA2MDogJ2x0JyxcbiAgICA2MjogJ2d0JyxcbiAgICAzNDogJ3F1b3QnLFxuICAgIDM5OiAnYXBvcycsXG4gICAgMzg6ICdhbXAnXG59O1xuXG52YXIgQ0hBUl9TX0lOREVYID0ge1xuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnLFxuICAgICdcIic6ICcmcXVvdDsnLFxuICAgICdcXCcnOiAnJmFwb3M7JyxcbiAgICAnJic6ICcmYW1wOydcbn07XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFhtbEVudGl0aWVzKCkge31cblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5YbWxFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKCFzdHIgfHwgIXN0ci5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLzx8PnxcInwnfCYvZywgZnVuY3Rpb24ocykge1xuICAgICAgICByZXR1cm4gQ0hBUl9TX0lOREVYW3NdO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gWG1sRW50aXRpZXMuZW5jb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBYbWxFbnRpdGllcygpLmVuY29kZShzdHIpO1xuIH07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuWG1sRW50aXRpZXMucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmICghc3RyIHx8ICFzdHIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mIz9bMC05YS16QS1aXSs7Py9nLCBmdW5jdGlvbihzKSB7XG4gICAgICAgIGlmIChzLmNoYXJBdCgxKSA9PT0gJyMnKSB7XG4gICAgICAgICAgICB2YXIgY29kZSA9IHMuY2hhckF0KDIpLnRvTG93ZXJDYXNlKCkgPT09ICd4JyA/XG4gICAgICAgICAgICAgICAgcGFyc2VJbnQocy5zdWJzdHIoMyksIDE2KSA6XG4gICAgICAgICAgICAgICAgcGFyc2VJbnQocy5zdWJzdHIoMikpO1xuXG4gICAgICAgICAgICBpZiAoaXNOYU4oY29kZSkgfHwgY29kZSA8IC0zMjc2OCB8fCBjb2RlID4gNjU1MzUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQUxQSEFfSU5ERVhbc10gfHwgcztcbiAgICB9KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuIFhtbEVudGl0aWVzLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgWG1sRW50aXRpZXMoKS5kZWNvZGUoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cblhtbEVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGVOb25VVEYgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAoIXN0ciB8fCAhc3RyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgdmFyIGFscGhhID0gQ0hBUl9JTkRFWFtjXTtcbiAgICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gXCImXCIgKyBhbHBoYSArIFwiO1wiO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMgPCAzMiB8fCBjID4gMTI2KSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJyYjJyArIGMgKyAnOyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBYbWxFbnRpdGllcy5lbmNvZGVOb25VVEYgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IFhtbEVudGl0aWVzKCkuZW5jb2RlTm9uVVRGKHN0cik7XG4gfTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5YbWxFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlTm9uQVNDSUkgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAoIXN0ciB8fCAhc3RyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciBzdHJMZW5naHQgPSBzdHIubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5naHQpIHtcbiAgICAgICAgdmFyIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMgPD0gMjU1KSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc3RyW2krK107XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gJyYjJyArIGMgKyAnOyc7XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuIFhtbEVudGl0aWVzLmVuY29kZU5vbkFTQ0lJID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBYbWxFbnRpdGllcygpLmVuY29kZU5vbkFTQ0lJKHN0cik7XG4gfTtcblxubW9kdWxlLmV4cG9ydHMgPSBYbWxFbnRpdGllcztcbiIsIihmdW5jdGlvbih3aW5kb3csIGZhY3RvcnkpIHtcblx0dmFyIGxhenlTaXplcyA9IGZhY3Rvcnkod2luZG93LCB3aW5kb3cuZG9jdW1lbnQpO1xuXHR3aW5kb3cubGF6eVNpemVzID0gbGF6eVNpemVzO1xuXHRpZih0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKXtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGxhenlTaXplcztcblx0fVxufSh3aW5kb3csIGZ1bmN0aW9uIGwod2luZG93LCBkb2N1bWVudCkge1xuXHQndXNlIHN0cmljdCc7XG5cdC8qanNoaW50IGVxbnVsbDp0cnVlICovXG5cdGlmKCFkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXtyZXR1cm47fVxuXG5cdHZhciBsYXp5c2l6ZXMsIGxhenlTaXplc0NvbmZpZztcblxuXHR2YXIgZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXHR2YXIgRGF0ZSA9IHdpbmRvdy5EYXRlO1xuXG5cdHZhciBzdXBwb3J0UGljdHVyZSA9IHdpbmRvdy5IVE1MUGljdHVyZUVsZW1lbnQ7XG5cblx0dmFyIF9hZGRFdmVudExpc3RlbmVyID0gJ2FkZEV2ZW50TGlzdGVuZXInO1xuXG5cdHZhciBfZ2V0QXR0cmlidXRlID0gJ2dldEF0dHJpYnV0ZSc7XG5cblx0dmFyIGFkZEV2ZW50TGlzdGVuZXIgPSB3aW5kb3dbX2FkZEV2ZW50TGlzdGVuZXJdO1xuXG5cdHZhciBzZXRUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQ7XG5cblx0dmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgc2V0VGltZW91dDtcblxuXHR2YXIgcmVxdWVzdElkbGVDYWxsYmFjayA9IHdpbmRvdy5yZXF1ZXN0SWRsZUNhbGxiYWNrO1xuXG5cdHZhciByZWdQaWN0dXJlID0gL15waWN0dXJlJC9pO1xuXG5cdHZhciBsb2FkRXZlbnRzID0gWydsb2FkJywgJ2Vycm9yJywgJ2xhenlpbmNsdWRlZCcsICdfbGF6eWxvYWRlZCddO1xuXG5cdHZhciByZWdDbGFzc0NhY2hlID0ge307XG5cblx0dmFyIGZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcblxuXHR2YXIgaGFzQ2xhc3MgPSBmdW5jdGlvbihlbGUsIGNscykge1xuXHRcdGlmKCFyZWdDbGFzc0NhY2hlW2Nsc10pe1xuXHRcdFx0cmVnQ2xhc3NDYWNoZVtjbHNdID0gbmV3IFJlZ0V4cCgnKFxcXFxzfF4pJytjbHMrJyhcXFxcc3wkKScpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVnQ2xhc3NDYWNoZVtjbHNdLnRlc3QoZWxlW19nZXRBdHRyaWJ1dGVdKCdjbGFzcycpIHx8ICcnKSAmJiByZWdDbGFzc0NhY2hlW2Nsc107XG5cdH07XG5cblx0dmFyIGFkZENsYXNzID0gZnVuY3Rpb24oZWxlLCBjbHMpIHtcblx0XHRpZiAoIWhhc0NsYXNzKGVsZSwgY2xzKSl7XG5cdFx0XHRlbGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIChlbGVbX2dldEF0dHJpYnV0ZV0oJ2NsYXNzJykgfHwgJycpLnRyaW0oKSArICcgJyArIGNscyk7XG5cdFx0fVxuXHR9O1xuXG5cdHZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGVsZSwgY2xzKSB7XG5cdFx0dmFyIHJlZztcblx0XHRpZiAoKHJlZyA9IGhhc0NsYXNzKGVsZSxjbHMpKSkge1xuXHRcdFx0ZWxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoZWxlW19nZXRBdHRyaWJ1dGVdKCdjbGFzcycpIHx8ICcnKS5yZXBsYWNlKHJlZywgJyAnKSk7XG5cdFx0fVxuXHR9O1xuXG5cdHZhciBhZGRSZW1vdmVMb2FkRXZlbnRzID0gZnVuY3Rpb24oZG9tLCBmbiwgYWRkKXtcblx0XHR2YXIgYWN0aW9uID0gYWRkID8gX2FkZEV2ZW50TGlzdGVuZXIgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG5cdFx0aWYoYWRkKXtcblx0XHRcdGFkZFJlbW92ZUxvYWRFdmVudHMoZG9tLCBmbik7XG5cdFx0fVxuXHRcdGxvYWRFdmVudHMuZm9yRWFjaChmdW5jdGlvbihldnQpe1xuXHRcdFx0ZG9tW2FjdGlvbl0oZXZ0LCBmbik7XG5cdFx0fSk7XG5cdH07XG5cblx0dmFyIHRyaWdnZXJFdmVudCA9IGZ1bmN0aW9uKGVsZW0sIG5hbWUsIGRldGFpbCwgbm9CdWJibGVzLCBub0NhbmNlbGFibGUpe1xuXHRcdHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuXG5cdFx0aWYoIWRldGFpbCl7XG5cdFx0XHRkZXRhaWwgPSB7fTtcblx0XHR9XG5cblx0XHRkZXRhaWwuaW5zdGFuY2UgPSBsYXp5c2l6ZXM7XG5cblx0XHRldmVudC5pbml0RXZlbnQobmFtZSwgIW5vQnViYmxlcywgIW5vQ2FuY2VsYWJsZSk7XG5cblx0XHRldmVudC5kZXRhaWwgPSBkZXRhaWw7XG5cblx0XHRlbGVtLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHRcdHJldHVybiBldmVudDtcblx0fTtcblxuXHR2YXIgdXBkYXRlUG9seWZpbGwgPSBmdW5jdGlvbiAoZWwsIGZ1bGwpe1xuXHRcdHZhciBwb2x5ZmlsbDtcblx0XHRpZiggIXN1cHBvcnRQaWN0dXJlICYmICggcG9seWZpbGwgPSAod2luZG93LnBpY3R1cmVmaWxsIHx8IGxhenlTaXplc0NvbmZpZy5wZikgKSApe1xuXHRcdFx0aWYoZnVsbCAmJiBmdWxsLnNyYyAmJiAhZWxbX2dldEF0dHJpYnV0ZV0oJ3NyY3NldCcpKXtcblx0XHRcdFx0ZWwuc2V0QXR0cmlidXRlKCdzcmNzZXQnLCBmdWxsLnNyYyk7XG5cdFx0XHR9XG5cdFx0XHRwb2x5ZmlsbCh7cmVldmFsdWF0ZTogdHJ1ZSwgZWxlbWVudHM6IFtlbF19KTtcblx0XHR9IGVsc2UgaWYoZnVsbCAmJiBmdWxsLnNyYyl7XG5cdFx0XHRlbC5zcmMgPSBmdWxsLnNyYztcblx0XHR9XG5cdH07XG5cblx0dmFyIGdldENTUyA9IGZ1bmN0aW9uIChlbGVtLCBzdHlsZSl7XG5cdFx0cmV0dXJuIChnZXRDb21wdXRlZFN0eWxlKGVsZW0sIG51bGwpIHx8IHt9KVtzdHlsZV07XG5cdH07XG5cblx0dmFyIGdldFdpZHRoID0gZnVuY3Rpb24oZWxlbSwgcGFyZW50LCB3aWR0aCl7XG5cdFx0d2lkdGggPSB3aWR0aCB8fCBlbGVtLm9mZnNldFdpZHRoO1xuXG5cdFx0d2hpbGUod2lkdGggPCBsYXp5U2l6ZXNDb25maWcubWluU2l6ZSAmJiBwYXJlbnQgJiYgIWVsZW0uX2xhenlzaXplc1dpZHRoKXtcblx0XHRcdHdpZHRoID0gIHBhcmVudC5vZmZzZXRXaWR0aDtcblx0XHRcdHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuXHRcdH1cblxuXHRcdHJldHVybiB3aWR0aDtcblx0fTtcblxuXHR2YXIgckFGID0gKGZ1bmN0aW9uKCl7XG5cdFx0dmFyIHJ1bm5pbmcsIHdhaXRpbmc7XG5cdFx0dmFyIGZpcnN0Rm5zID0gW107XG5cdFx0dmFyIHNlY29uZEZucyA9IFtdO1xuXHRcdHZhciBmbnMgPSBmaXJzdEZucztcblxuXHRcdHZhciBydW4gPSBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIHJ1bkZucyA9IGZucztcblxuXHRcdFx0Zm5zID0gZmlyc3RGbnMubGVuZ3RoID8gc2Vjb25kRm5zIDogZmlyc3RGbnM7XG5cblx0XHRcdHJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0d2FpdGluZyA9IGZhbHNlO1xuXG5cdFx0XHR3aGlsZShydW5GbnMubGVuZ3RoKXtcblx0XHRcdFx0cnVuRm5zLnNoaWZ0KCkoKTtcblx0XHRcdH1cblxuXHRcdFx0cnVubmluZyA9IGZhbHNlO1xuXHRcdH07XG5cblx0XHR2YXIgcmFmQmF0Y2ggPSBmdW5jdGlvbihmbiwgcXVldWUpe1xuXHRcdFx0aWYocnVubmluZyAmJiAhcXVldWUpe1xuXHRcdFx0XHRmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm5zLnB1c2goZm4pO1xuXG5cdFx0XHRcdGlmKCF3YWl0aW5nKXtcblx0XHRcdFx0XHR3YWl0aW5nID0gdHJ1ZTtcblx0XHRcdFx0XHQoZG9jdW1lbnQuaGlkZGVuID8gc2V0VGltZW91dCA6IHJlcXVlc3RBbmltYXRpb25GcmFtZSkocnVuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRyYWZCYXRjaC5fbHNGbHVzaCA9IHJ1bjtcblxuXHRcdHJldHVybiByYWZCYXRjaDtcblx0fSkoKTtcblxuXHR2YXIgckFGSXQgPSBmdW5jdGlvbihmbiwgc2ltcGxlKXtcblx0XHRyZXR1cm4gc2ltcGxlID9cblx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyQUYoZm4pO1xuXHRcdFx0fSA6XG5cdFx0XHRmdW5jdGlvbigpe1xuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0XHRcdHZhciBhcmdzID0gYXJndW1lbnRzO1xuXHRcdFx0XHRyQUYoZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRmbi5hcHBseSh0aGF0LCBhcmdzKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0O1xuXHR9O1xuXG5cdHZhciB0aHJvdHRsZSA9IGZ1bmN0aW9uKGZuKXtcblx0XHR2YXIgcnVubmluZztcblx0XHR2YXIgbGFzdFRpbWUgPSAwO1xuXHRcdHZhciBnRGVsYXkgPSBsYXp5U2l6ZXNDb25maWcudGhyb3R0bGVEZWxheTtcblx0XHR2YXIgcklDVGltZW91dCA9IGxhenlTaXplc0NvbmZpZy5yaWNUaW1lb3V0O1xuXHRcdHZhciBydW4gPSBmdW5jdGlvbigpe1xuXHRcdFx0cnVubmluZyA9IGZhbHNlO1xuXHRcdFx0bGFzdFRpbWUgPSBEYXRlLm5vdygpO1xuXHRcdFx0Zm4oKTtcblx0XHR9O1xuXHRcdHZhciBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHJJQ1RpbWVvdXQgPiA0OSA/XG5cdFx0XHRmdW5jdGlvbigpe1xuXHRcdFx0XHRyZXF1ZXN0SWRsZUNhbGxiYWNrKHJ1biwge3RpbWVvdXQ6IHJJQ1RpbWVvdXR9KTtcblxuXHRcdFx0XHRpZihySUNUaW1lb3V0ICE9PSBsYXp5U2l6ZXNDb25maWcucmljVGltZW91dCl7XG5cdFx0XHRcdFx0cklDVGltZW91dCA9IGxhenlTaXplc0NvbmZpZy5yaWNUaW1lb3V0O1xuXHRcdFx0XHR9XG5cdFx0XHR9IDpcblx0XHRcdHJBRkl0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHNldFRpbWVvdXQocnVuKTtcblx0XHRcdH0sIHRydWUpXG5cdFx0O1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGlzUHJpb3JpdHkpe1xuXHRcdFx0dmFyIGRlbGF5O1xuXG5cdFx0XHRpZigoaXNQcmlvcml0eSA9IGlzUHJpb3JpdHkgPT09IHRydWUpKXtcblx0XHRcdFx0cklDVGltZW91dCA9IDMzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihydW5uaW5nKXtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRydW5uaW5nID0gIHRydWU7XG5cblx0XHRcdGRlbGF5ID0gZ0RlbGF5IC0gKERhdGUubm93KCkgLSBsYXN0VGltZSk7XG5cblx0XHRcdGlmKGRlbGF5IDwgMCl7XG5cdFx0XHRcdGRlbGF5ID0gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYoaXNQcmlvcml0eSB8fCBkZWxheSA8IDkpe1xuXHRcdFx0XHRpZGxlQ2FsbGJhY2soKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoaWRsZUNhbGxiYWNrLCBkZWxheSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblxuXHQvL2Jhc2VkIG9uIGh0dHA6Ly9tb2Rlcm5qYXZhc2NyaXB0LmJsb2dzcG90LmRlLzIwMTMvMDgvYnVpbGRpbmctYmV0dGVyLWRlYm91bmNlLmh0bWxcblx0dmFyIGRlYm91bmNlID0gZnVuY3Rpb24oZnVuYykge1xuXHRcdHZhciB0aW1lb3V0LCB0aW1lc3RhbXA7XG5cdFx0dmFyIHdhaXQgPSA5OTtcblx0XHR2YXIgcnVuID0gZnVuY3Rpb24oKXtcblx0XHRcdHRpbWVvdXQgPSBudWxsO1xuXHRcdFx0ZnVuYygpO1xuXHRcdH07XG5cdFx0dmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbGFzdCA9IERhdGUubm93KCkgLSB0aW1lc3RhbXA7XG5cblx0XHRcdGlmIChsYXN0IDwgd2FpdCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IC0gbGFzdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQocmVxdWVzdElkbGVDYWxsYmFjayB8fCBydW4pKHJ1bik7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG5cblx0XHRcdGlmICghdGltZW91dCkge1xuXHRcdFx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblxuXHQoZnVuY3Rpb24oKXtcblx0XHR2YXIgcHJvcDtcblxuXHRcdHZhciBsYXp5U2l6ZXNEZWZhdWx0cyA9IHtcblx0XHRcdGxhenlDbGFzczogJ2xhenlsb2FkJyxcblx0XHRcdGxvYWRlZENsYXNzOiAnbGF6eWxvYWRlZCcsXG5cdFx0XHRsb2FkaW5nQ2xhc3M6ICdsYXp5bG9hZGluZycsXG5cdFx0XHRwcmVsb2FkQ2xhc3M6ICdsYXp5cHJlbG9hZCcsXG5cdFx0XHRlcnJvckNsYXNzOiAnbGF6eWVycm9yJyxcblx0XHRcdC8vc3RyaWN0Q2xhc3M6ICdsYXp5c3RyaWN0Jyxcblx0XHRcdGF1dG9zaXplc0NsYXNzOiAnbGF6eWF1dG9zaXplcycsXG5cdFx0XHRzcmNBdHRyOiAnZGF0YS1zcmMnLFxuXHRcdFx0c3Jjc2V0QXR0cjogJ2RhdGEtc3Jjc2V0Jyxcblx0XHRcdHNpemVzQXR0cjogJ2RhdGEtc2l6ZXMnLFxuXHRcdFx0Ly9wcmVsb2FkQWZ0ZXJMb2FkOiBmYWxzZSxcblx0XHRcdG1pblNpemU6IDQwLFxuXHRcdFx0Y3VzdG9tTWVkaWE6IHt9LFxuXHRcdFx0aW5pdDogdHJ1ZSxcblx0XHRcdGV4cEZhY3RvcjogMS41LFxuXHRcdFx0aEZhYzogMC44LFxuXHRcdFx0bG9hZE1vZGU6IDIsXG5cdFx0XHRsb2FkSGlkZGVuOiB0cnVlLFxuXHRcdFx0cmljVGltZW91dDogMCxcblx0XHRcdHRocm90dGxlRGVsYXk6IDEyNSxcblx0XHR9O1xuXG5cdFx0bGF6eVNpemVzQ29uZmlnID0gd2luZG93LmxhenlTaXplc0NvbmZpZyB8fCB3aW5kb3cubGF6eXNpemVzQ29uZmlnIHx8IHt9O1xuXG5cdFx0Zm9yKHByb3AgaW4gbGF6eVNpemVzRGVmYXVsdHMpe1xuXHRcdFx0aWYoIShwcm9wIGluIGxhenlTaXplc0NvbmZpZykpe1xuXHRcdFx0XHRsYXp5U2l6ZXNDb25maWdbcHJvcF0gPSBsYXp5U2l6ZXNEZWZhdWx0c1twcm9wXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR3aW5kb3cubGF6eVNpemVzQ29uZmlnID0gbGF6eVNpemVzQ29uZmlnO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0aWYobGF6eVNpemVzQ29uZmlnLmluaXQpe1xuXHRcdFx0XHRpbml0KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pKCk7XG5cblx0dmFyIGxvYWRlciA9IChmdW5jdGlvbigpe1xuXHRcdHZhciBwcmVsb2FkRWxlbXMsIGlzQ29tcGxldGVkLCByZXNldFByZWxvYWRpbmdUaW1lciwgbG9hZE1vZGUsIHN0YXJ0ZWQ7XG5cblx0XHR2YXIgZUx2VywgZWx2SCwgZUx0b3AsIGVMbGVmdCwgZUxyaWdodCwgZUxib3R0b20sIGlzQm9keUhpZGRlbjtcblxuXHRcdHZhciByZWdJbWcgPSAvXmltZyQvaTtcblx0XHR2YXIgcmVnSWZyYW1lID0gL15pZnJhbWUkL2k7XG5cblx0XHR2YXIgc3VwcG9ydFNjcm9sbCA9ICgnb25zY3JvbGwnIGluIHdpbmRvdykgJiYgISgvKGdsZXxpbmcpYm90Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKTtcblxuXHRcdHZhciBzaHJpbmtFeHBhbmQgPSAwO1xuXHRcdHZhciBjdXJyZW50RXhwYW5kID0gMDtcblxuXHRcdHZhciBpc0xvYWRpbmcgPSAwO1xuXHRcdHZhciBsb3dSdW5zID0gLTE7XG5cblx0XHR2YXIgcmVzZXRQcmVsb2FkaW5nID0gZnVuY3Rpb24oZSl7XG5cdFx0XHRpc0xvYWRpbmctLTtcblx0XHRcdGlmKGUgJiYgZS50YXJnZXQpe1xuXHRcdFx0XHRhZGRSZW1vdmVMb2FkRXZlbnRzKGUudGFyZ2V0LCByZXNldFByZWxvYWRpbmcpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZighZSB8fCBpc0xvYWRpbmcgPCAwIHx8ICFlLnRhcmdldCl7XG5cdFx0XHRcdGlzTG9hZGluZyA9IDA7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciBpc1Zpc2libGUgPSBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdFx0aWYgKGlzQm9keUhpZGRlbiA9PSBudWxsKSB7XG5cdFx0XHRcdGlzQm9keUhpZGRlbiA9IGdldENTUyhkb2N1bWVudC5ib2R5LCAndmlzaWJpbGl0eScpID09ICdoaWRkZW4nO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gaXNCb2R5SGlkZGVuIHx8IChnZXRDU1MoZWxlbS5wYXJlbnROb2RlLCAndmlzaWJpbGl0eScpICE9ICdoaWRkZW4nICYmIGdldENTUyhlbGVtLCAndmlzaWJpbGl0eScpICE9ICdoaWRkZW4nKTtcblx0XHR9O1xuXG5cdFx0dmFyIGlzTmVzdGVkVmlzaWJsZSA9IGZ1bmN0aW9uKGVsZW0sIGVsZW1FeHBhbmQpe1xuXHRcdFx0dmFyIG91dGVyUmVjdDtcblx0XHRcdHZhciBwYXJlbnQgPSBlbGVtO1xuXHRcdFx0dmFyIHZpc2libGUgPSBpc1Zpc2libGUoZWxlbSk7XG5cblx0XHRcdGVMdG9wIC09IGVsZW1FeHBhbmQ7XG5cdFx0XHRlTGJvdHRvbSArPSBlbGVtRXhwYW5kO1xuXHRcdFx0ZUxsZWZ0IC09IGVsZW1FeHBhbmQ7XG5cdFx0XHRlTHJpZ2h0ICs9IGVsZW1FeHBhbmQ7XG5cblx0XHRcdHdoaWxlKHZpc2libGUgJiYgKHBhcmVudCA9IHBhcmVudC5vZmZzZXRQYXJlbnQpICYmIHBhcmVudCAhPSBkb2N1bWVudC5ib2R5ICYmIHBhcmVudCAhPSBkb2NFbGVtKXtcblx0XHRcdFx0dmlzaWJsZSA9ICgoZ2V0Q1NTKHBhcmVudCwgJ29wYWNpdHknKSB8fCAxKSA+IDApO1xuXG5cdFx0XHRcdGlmKHZpc2libGUgJiYgZ2V0Q1NTKHBhcmVudCwgJ292ZXJmbG93JykgIT0gJ3Zpc2libGUnKXtcblx0XHRcdFx0XHRvdXRlclJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdFx0dmlzaWJsZSA9IGVMcmlnaHQgPiBvdXRlclJlY3QubGVmdCAmJlxuXHRcdFx0XHRcdFx0ZUxsZWZ0IDwgb3V0ZXJSZWN0LnJpZ2h0ICYmXG5cdFx0XHRcdFx0XHRlTGJvdHRvbSA+IG91dGVyUmVjdC50b3AgLSAxICYmXG5cdFx0XHRcdFx0XHRlTHRvcCA8IG91dGVyUmVjdC5ib3R0b20gKyAxXG5cdFx0XHRcdFx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB2aXNpYmxlO1xuXHRcdH07XG5cblx0XHR2YXIgY2hlY2tFbGVtZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGVMbGVuLCBpLCByZWN0LCBhdXRvTG9hZEVsZW0sIGxvYWRlZFNvbWV0aGluZywgZWxlbUV4cGFuZCwgZWxlbU5lZ2F0aXZlRXhwYW5kLCBlbGVtRXhwYW5kVmFsLFxuXHRcdFx0XHRiZWZvcmVFeHBhbmRWYWwsIGRlZmF1bHRFeHBhbmQsIHByZWxvYWRFeHBhbmQsIGhGYWM7XG5cdFx0XHR2YXIgbGF6eWxvYWRFbGVtcyA9IGxhenlzaXplcy5lbGVtZW50cztcblxuXHRcdFx0aWYoKGxvYWRNb2RlID0gbGF6eVNpemVzQ29uZmlnLmxvYWRNb2RlKSAmJiBpc0xvYWRpbmcgPCA4ICYmIChlTGxlbiA9IGxhenlsb2FkRWxlbXMubGVuZ3RoKSl7XG5cblx0XHRcdFx0aSA9IDA7XG5cblx0XHRcdFx0bG93UnVucysrO1xuXG5cdFx0XHRcdGRlZmF1bHRFeHBhbmQgPSAoIWxhenlTaXplc0NvbmZpZy5leHBhbmQgfHwgbGF6eVNpemVzQ29uZmlnLmV4cGFuZCA8IDEpID9cblx0XHRcdFx0XHRkb2NFbGVtLmNsaWVudEhlaWdodCA+IDUwMCAmJiBkb2NFbGVtLmNsaWVudFdpZHRoID4gNTAwID8gNTAwIDogMzcwIDpcblx0XHRcdFx0XHRsYXp5U2l6ZXNDb25maWcuZXhwYW5kO1xuXG5cdFx0XHRcdHByZWxvYWRFeHBhbmQgPSBkZWZhdWx0RXhwYW5kICogbGF6eVNpemVzQ29uZmlnLmV4cEZhY3Rvcjtcblx0XHRcdFx0aEZhYyA9IGxhenlTaXplc0NvbmZpZy5oRmFjO1xuXHRcdFx0XHRpc0JvZHlIaWRkZW4gPSBudWxsO1xuXG5cdFx0XHRcdGlmKGN1cnJlbnRFeHBhbmQgPCBwcmVsb2FkRXhwYW5kICYmIGlzTG9hZGluZyA8IDEgJiYgbG93UnVucyA+IDIgJiYgbG9hZE1vZGUgPiAyICYmICFkb2N1bWVudC5oaWRkZW4pe1xuXHRcdFx0XHRcdGN1cnJlbnRFeHBhbmQgPSBwcmVsb2FkRXhwYW5kO1xuXHRcdFx0XHRcdGxvd1J1bnMgPSAwO1xuXHRcdFx0XHR9IGVsc2UgaWYobG9hZE1vZGUgPiAxICYmIGxvd1J1bnMgPiAxICYmIGlzTG9hZGluZyA8IDYpe1xuXHRcdFx0XHRcdGN1cnJlbnRFeHBhbmQgPSBkZWZhdWx0RXhwYW5kO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGN1cnJlbnRFeHBhbmQgPSBzaHJpbmtFeHBhbmQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IoOyBpIDwgZUxsZW47IGkrKyl7XG5cblx0XHRcdFx0XHRpZighbGF6eWxvYWRFbGVtc1tpXSB8fCBsYXp5bG9hZEVsZW1zW2ldLl9sYXp5UmFjZSl7Y29udGludWU7fVxuXG5cdFx0XHRcdFx0aWYoIXN1cHBvcnRTY3JvbGwpe3VudmVpbEVsZW1lbnQobGF6eWxvYWRFbGVtc1tpXSk7Y29udGludWU7fVxuXG5cdFx0XHRcdFx0aWYoIShlbGVtRXhwYW5kVmFsID0gbGF6eWxvYWRFbGVtc1tpXVtfZ2V0QXR0cmlidXRlXSgnZGF0YS1leHBhbmQnKSkgfHwgIShlbGVtRXhwYW5kID0gZWxlbUV4cGFuZFZhbCAqIDEpKXtcblx0XHRcdFx0XHRcdGVsZW1FeHBhbmQgPSBjdXJyZW50RXhwYW5kO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmKGJlZm9yZUV4cGFuZFZhbCAhPT0gZWxlbUV4cGFuZCl7XG5cdFx0XHRcdFx0XHRlTHZXID0gaW5uZXJXaWR0aCArIChlbGVtRXhwYW5kICogaEZhYyk7XG5cdFx0XHRcdFx0XHRlbHZIID0gaW5uZXJIZWlnaHQgKyBlbGVtRXhwYW5kO1xuXHRcdFx0XHRcdFx0ZWxlbU5lZ2F0aXZlRXhwYW5kID0gZWxlbUV4cGFuZCAqIC0xO1xuXHRcdFx0XHRcdFx0YmVmb3JlRXhwYW5kVmFsID0gZWxlbUV4cGFuZDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZWN0ID0gbGF6eWxvYWRFbGVtc1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdFx0XHRcdGlmICgoZUxib3R0b20gPSByZWN0LmJvdHRvbSkgPj0gZWxlbU5lZ2F0aXZlRXhwYW5kICYmXG5cdFx0XHRcdFx0XHQoZUx0b3AgPSByZWN0LnRvcCkgPD0gZWx2SCAmJlxuXHRcdFx0XHRcdFx0KGVMcmlnaHQgPSByZWN0LnJpZ2h0KSA+PSBlbGVtTmVnYXRpdmVFeHBhbmQgKiBoRmFjICYmXG5cdFx0XHRcdFx0XHQoZUxsZWZ0ID0gcmVjdC5sZWZ0KSA8PSBlTHZXICYmXG5cdFx0XHRcdFx0XHQoZUxib3R0b20gfHwgZUxyaWdodCB8fCBlTGxlZnQgfHwgZUx0b3ApICYmXG5cdFx0XHRcdFx0XHQobGF6eVNpemVzQ29uZmlnLmxvYWRIaWRkZW4gfHwgaXNWaXNpYmxlKGxhenlsb2FkRWxlbXNbaV0pKSAmJlxuXHRcdFx0XHRcdFx0KChpc0NvbXBsZXRlZCAmJiBpc0xvYWRpbmcgPCAzICYmICFlbGVtRXhwYW5kVmFsICYmIChsb2FkTW9kZSA8IDMgfHwgbG93UnVucyA8IDQpKSB8fCBpc05lc3RlZFZpc2libGUobGF6eWxvYWRFbGVtc1tpXSwgZWxlbUV4cGFuZCkpKXtcblx0XHRcdFx0XHRcdHVudmVpbEVsZW1lbnQobGF6eWxvYWRFbGVtc1tpXSk7XG5cdFx0XHRcdFx0XHRsb2FkZWRTb21ldGhpbmcgPSB0cnVlO1xuXHRcdFx0XHRcdFx0aWYoaXNMb2FkaW5nID4gOSl7YnJlYWs7fVxuXHRcdFx0XHRcdH0gZWxzZSBpZighbG9hZGVkU29tZXRoaW5nICYmIGlzQ29tcGxldGVkICYmICFhdXRvTG9hZEVsZW0gJiZcblx0XHRcdFx0XHRcdGlzTG9hZGluZyA8IDQgJiYgbG93UnVucyA8IDQgJiYgbG9hZE1vZGUgPiAyICYmXG5cdFx0XHRcdFx0XHQocHJlbG9hZEVsZW1zWzBdIHx8IGxhenlTaXplc0NvbmZpZy5wcmVsb2FkQWZ0ZXJMb2FkKSAmJlxuXHRcdFx0XHRcdFx0KHByZWxvYWRFbGVtc1swXSB8fCAoIWVsZW1FeHBhbmRWYWwgJiYgKChlTGJvdHRvbSB8fCBlTHJpZ2h0IHx8IGVMbGVmdCB8fCBlTHRvcCkgfHwgbGF6eWxvYWRFbGVtc1tpXVtfZ2V0QXR0cmlidXRlXShsYXp5U2l6ZXNDb25maWcuc2l6ZXNBdHRyKSAhPSAnYXV0bycpKSkpe1xuXHRcdFx0XHRcdFx0YXV0b0xvYWRFbGVtID0gcHJlbG9hZEVsZW1zWzBdIHx8IGxhenlsb2FkRWxlbXNbaV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoYXV0b0xvYWRFbGVtICYmICFsb2FkZWRTb21ldGhpbmcpe1xuXHRcdFx0XHRcdHVudmVpbEVsZW1lbnQoYXV0b0xvYWRFbGVtKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cyA9IHRocm90dGxlKGNoZWNrRWxlbWVudHMpO1xuXG5cdFx0dmFyIHN3aXRjaExvYWRpbmdDbGFzcyA9IGZ1bmN0aW9uKGUpe1xuXHRcdFx0YWRkQ2xhc3MoZS50YXJnZXQsIGxhenlTaXplc0NvbmZpZy5sb2FkZWRDbGFzcyk7XG5cdFx0XHRyZW1vdmVDbGFzcyhlLnRhcmdldCwgbGF6eVNpemVzQ29uZmlnLmxvYWRpbmdDbGFzcyk7XG5cdFx0XHRhZGRSZW1vdmVMb2FkRXZlbnRzKGUudGFyZ2V0LCByYWZTd2l0Y2hMb2FkaW5nQ2xhc3MpO1xuXHRcdFx0dHJpZ2dlckV2ZW50KGUudGFyZ2V0LCAnbGF6eWxvYWRlZCcpO1xuXHRcdH07XG5cdFx0dmFyIHJhZmVkU3dpdGNoTG9hZGluZ0NsYXNzID0gckFGSXQoc3dpdGNoTG9hZGluZ0NsYXNzKTtcblx0XHR2YXIgcmFmU3dpdGNoTG9hZGluZ0NsYXNzID0gZnVuY3Rpb24oZSl7XG5cdFx0XHRyYWZlZFN3aXRjaExvYWRpbmdDbGFzcyh7dGFyZ2V0OiBlLnRhcmdldH0pO1xuXHRcdH07XG5cblx0XHR2YXIgY2hhbmdlSWZyYW1lU3JjID0gZnVuY3Rpb24oZWxlbSwgc3JjKXtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGVsZW0uY29udGVudFdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHNyYyk7XG5cdFx0XHR9IGNhdGNoKGUpe1xuXHRcdFx0XHRlbGVtLnNyYyA9IHNyYztcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIGhhbmRsZVNvdXJjZXMgPSBmdW5jdGlvbihzb3VyY2Upe1xuXHRcdFx0dmFyIGN1c3RvbU1lZGlhO1xuXG5cdFx0XHR2YXIgc291cmNlU3Jjc2V0ID0gc291cmNlW19nZXRBdHRyaWJ1dGVdKGxhenlTaXplc0NvbmZpZy5zcmNzZXRBdHRyKTtcblxuXHRcdFx0aWYoIChjdXN0b21NZWRpYSA9IGxhenlTaXplc0NvbmZpZy5jdXN0b21NZWRpYVtzb3VyY2VbX2dldEF0dHJpYnV0ZV0oJ2RhdGEtbWVkaWEnKSB8fCBzb3VyY2VbX2dldEF0dHJpYnV0ZV0oJ21lZGlhJyldKSApe1xuXHRcdFx0XHRzb3VyY2Uuc2V0QXR0cmlidXRlKCdtZWRpYScsIGN1c3RvbU1lZGlhKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoc291cmNlU3Jjc2V0KXtcblx0XHRcdFx0c291cmNlLnNldEF0dHJpYnV0ZSgnc3Jjc2V0Jywgc291cmNlU3Jjc2V0KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIGxhenlVbnZlaWwgPSByQUZJdChmdW5jdGlvbiAoZWxlbSwgZGV0YWlsLCBpc0F1dG8sIHNpemVzLCBpc0ltZyl7XG5cdFx0XHR2YXIgc3JjLCBzcmNzZXQsIHBhcmVudCwgaXNQaWN0dXJlLCBldmVudCwgZmlyZXNMb2FkO1xuXG5cdFx0XHRpZighKGV2ZW50ID0gdHJpZ2dlckV2ZW50KGVsZW0sICdsYXp5YmVmb3JldW52ZWlsJywgZGV0YWlsKSkuZGVmYXVsdFByZXZlbnRlZCl7XG5cblx0XHRcdFx0aWYoc2l6ZXMpe1xuXHRcdFx0XHRcdGlmKGlzQXV0byl7XG5cdFx0XHRcdFx0XHRhZGRDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDb25maWcuYXV0b3NpemVzQ2xhc3MpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSgnc2l6ZXMnLCBzaXplcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3Jjc2V0ID0gZWxlbVtfZ2V0QXR0cmlidXRlXShsYXp5U2l6ZXNDb25maWcuc3Jjc2V0QXR0cik7XG5cdFx0XHRcdHNyYyA9IGVsZW1bX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ29uZmlnLnNyY0F0dHIpO1xuXG5cdFx0XHRcdGlmKGlzSW1nKSB7XG5cdFx0XHRcdFx0cGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuXHRcdFx0XHRcdGlzUGljdHVyZSA9IHBhcmVudCAmJiByZWdQaWN0dXJlLnRlc3QocGFyZW50Lm5vZGVOYW1lIHx8ICcnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZpcmVzTG9hZCA9IGRldGFpbC5maXJlc0xvYWQgfHwgKCgnc3JjJyBpbiBlbGVtKSAmJiAoc3Jjc2V0IHx8IHNyYyB8fCBpc1BpY3R1cmUpKTtcblxuXHRcdFx0XHRldmVudCA9IHt0YXJnZXQ6IGVsZW19O1xuXG5cdFx0XHRcdGlmKGZpcmVzTG9hZCl7XG5cdFx0XHRcdFx0YWRkUmVtb3ZlTG9hZEV2ZW50cyhlbGVtLCByZXNldFByZWxvYWRpbmcsIHRydWUpO1xuXHRcdFx0XHRcdGNsZWFyVGltZW91dChyZXNldFByZWxvYWRpbmdUaW1lcik7XG5cdFx0XHRcdFx0cmVzZXRQcmVsb2FkaW5nVGltZXIgPSBzZXRUaW1lb3V0KHJlc2V0UHJlbG9hZGluZywgMjUwMCk7XG5cblx0XHRcdFx0XHRhZGRDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDb25maWcubG9hZGluZ0NsYXNzKTtcblx0XHRcdFx0XHRhZGRSZW1vdmVMb2FkRXZlbnRzKGVsZW0sIHJhZlN3aXRjaExvYWRpbmdDbGFzcywgdHJ1ZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihpc1BpY3R1cmUpe1xuXHRcdFx0XHRcdGZvckVhY2guY2FsbChwYXJlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NvdXJjZScpLCBoYW5kbGVTb3VyY2VzKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKHNyY3NldCl7XG5cdFx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoJ3NyY3NldCcsIHNyY3NldCk7XG5cdFx0XHRcdH0gZWxzZSBpZihzcmMgJiYgIWlzUGljdHVyZSl7XG5cdFx0XHRcdFx0aWYocmVnSWZyYW1lLnRlc3QoZWxlbS5ub2RlTmFtZSkpe1xuXHRcdFx0XHRcdFx0Y2hhbmdlSWZyYW1lU3JjKGVsZW0sIHNyYyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGVsZW0uc3JjID0gc3JjO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGlzSW1nICYmIChzcmNzZXQgfHwgaXNQaWN0dXJlKSl7XG5cdFx0XHRcdFx0dXBkYXRlUG9seWZpbGwoZWxlbSwge3NyYzogc3JjfSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYoZWxlbS5fbGF6eVJhY2Upe1xuXHRcdFx0XHRkZWxldGUgZWxlbS5fbGF6eVJhY2U7XG5cdFx0XHR9XG5cdFx0XHRyZW1vdmVDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDb25maWcubGF6eUNsYXNzKTtcblxuXHRcdFx0ckFGKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGlmKCAhZmlyZXNMb2FkIHx8IChlbGVtLmNvbXBsZXRlICYmIGVsZW0ubmF0dXJhbFdpZHRoID4gMSkpe1xuXHRcdFx0XHRcdGlmKGZpcmVzTG9hZCl7XG5cdFx0XHRcdFx0XHRyZXNldFByZWxvYWRpbmcoZXZlbnQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpc0xvYWRpbmctLTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c3dpdGNoTG9hZGluZ0NsYXNzKGV2ZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdHJ1ZSk7XG5cdFx0fSk7XG5cblx0XHR2YXIgdW52ZWlsRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtKXtcblx0XHRcdHZhciBkZXRhaWw7XG5cblx0XHRcdHZhciBpc0ltZyA9IHJlZ0ltZy50ZXN0KGVsZW0ubm9kZU5hbWUpO1xuXG5cdFx0XHQvL2FsbG93IHVzaW5nIHNpemVzPVwiYXV0b1wiLCBidXQgZG9uJ3QgdXNlLiBpdCdzIGludmFsaWQuIFVzZSBkYXRhLXNpemVzPVwiYXV0b1wiIG9yIGEgdmFsaWQgdmFsdWUgZm9yIHNpemVzIGluc3RlYWQgKGkuZS46IHNpemVzPVwiODB2d1wiKVxuXHRcdFx0dmFyIHNpemVzID0gaXNJbWcgJiYgKGVsZW1bX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ29uZmlnLnNpemVzQXR0cikgfHwgZWxlbVtfZ2V0QXR0cmlidXRlXSgnc2l6ZXMnKSk7XG5cdFx0XHR2YXIgaXNBdXRvID0gc2l6ZXMgPT0gJ2F1dG8nO1xuXG5cdFx0XHRpZiggKGlzQXV0byB8fCAhaXNDb21wbGV0ZWQpICYmIGlzSW1nICYmIChlbGVtW19nZXRBdHRyaWJ1dGVdKCdzcmMnKSB8fCBlbGVtLnNyY3NldCkgJiYgIWVsZW0uY29tcGxldGUgJiYgIWhhc0NsYXNzKGVsZW0sIGxhenlTaXplc0NvbmZpZy5lcnJvckNsYXNzKSAmJiBoYXNDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDb25maWcubGF6eUNsYXNzKSl7cmV0dXJuO31cblxuXHRcdFx0ZGV0YWlsID0gdHJpZ2dlckV2ZW50KGVsZW0sICdsYXp5dW52ZWlscmVhZCcpLmRldGFpbDtcblxuXHRcdFx0aWYoaXNBdXRvKXtcblx0XHRcdFx0IGF1dG9TaXplci51cGRhdGVFbGVtKGVsZW0sIHRydWUsIGVsZW0ub2Zmc2V0V2lkdGgpO1xuXHRcdFx0fVxuXG5cdFx0XHRlbGVtLl9sYXp5UmFjZSA9IHRydWU7XG5cdFx0XHRpc0xvYWRpbmcrKztcblxuXHRcdFx0bGF6eVVudmVpbChlbGVtLCBkZXRhaWwsIGlzQXV0bywgc2l6ZXMsIGlzSW1nKTtcblx0XHR9O1xuXG5cdFx0dmFyIG9ubG9hZCA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRpZihpc0NvbXBsZXRlZCl7cmV0dXJuO31cblx0XHRcdGlmKERhdGUubm93KCkgLSBzdGFydGVkIDwgOTk5KXtcblx0XHRcdFx0c2V0VGltZW91dChvbmxvYWQsIDk5OSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHZhciBhZnRlclNjcm9sbCA9IGRlYm91bmNlKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGxhenlTaXplc0NvbmZpZy5sb2FkTW9kZSA9IDM7XG5cdFx0XHRcdHRocm90dGxlZENoZWNrRWxlbWVudHMoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpc0NvbXBsZXRlZCA9IHRydWU7XG5cblx0XHRcdGxhenlTaXplc0NvbmZpZy5sb2FkTW9kZSA9IDM7XG5cblx0XHRcdHRocm90dGxlZENoZWNrRWxlbWVudHMoKTtcblxuXHRcdFx0YWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0aWYobGF6eVNpemVzQ29uZmlnLmxvYWRNb2RlID09IDMpe1xuXHRcdFx0XHRcdGxhenlTaXplc0NvbmZpZy5sb2FkTW9kZSA9IDI7XG5cdFx0XHRcdH1cblx0XHRcdFx0YWZ0ZXJTY3JvbGwoKTtcblx0XHRcdH0sIHRydWUpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0XzogZnVuY3Rpb24oKXtcblx0XHRcdFx0c3RhcnRlZCA9IERhdGUubm93KCk7XG5cblx0XHRcdFx0bGF6eXNpemVzLmVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShsYXp5U2l6ZXNDb25maWcubGF6eUNsYXNzKTtcblx0XHRcdFx0cHJlbG9hZEVsZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShsYXp5U2l6ZXNDb25maWcubGF6eUNsYXNzICsgJyAnICsgbGF6eVNpemVzQ29uZmlnLnByZWxvYWRDbGFzcyk7XG5cblx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cblx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cblx0XHRcdFx0aWYod2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIpe1xuXHRcdFx0XHRcdG5ldyBNdXRhdGlvbk9ic2VydmVyKCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzICkub2JzZXJ2ZSggZG9jRWxlbSwge2NoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSwgYXR0cmlidXRlczogdHJ1ZX0gKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkb2NFbGVtW19hZGRFdmVudExpc3RlbmVyXSgnRE9NTm9kZUluc2VydGVkJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cdFx0XHRcdFx0ZG9jRWxlbVtfYWRkRXZlbnRMaXN0ZW5lcl0oJ0RPTUF0dHJNb2RpZmllZCcsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXHRcdFx0XHRcdHNldEludGVydmFsKHRocm90dGxlZENoZWNrRWxlbWVudHMsIDk5OSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cblx0XHRcdFx0Ly8sICdmdWxsc2NyZWVuY2hhbmdlJ1xuXHRcdFx0XHRbJ2ZvY3VzJywgJ21vdXNlb3ZlcicsICdjbGljaycsICdsb2FkJywgJ3RyYW5zaXRpb25lbmQnLCAnYW5pbWF0aW9uZW5kJywgJ3dlYmtpdEFuaW1hdGlvbkVuZCddLmZvckVhY2goZnVuY3Rpb24obmFtZSl7XG5cdFx0XHRcdFx0ZG9jdW1lbnRbX2FkZEV2ZW50TGlzdGVuZXJdKG5hbWUsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZigoL2QkfF5jLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpKSl7XG5cdFx0XHRcdFx0b25sb2FkKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9ubG9hZCk7XG5cdFx0XHRcdFx0ZG9jdW1lbnRbX2FkZEV2ZW50TGlzdGVuZXJdKCdET01Db250ZW50TG9hZGVkJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cyk7XG5cdFx0XHRcdFx0c2V0VGltZW91dChvbmxvYWQsIDIwMDAwKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGxhenlzaXplcy5lbGVtZW50cy5sZW5ndGgpe1xuXHRcdFx0XHRcdGNoZWNrRWxlbWVudHMoKTtcblx0XHRcdFx0XHRyQUYuX2xzRmx1c2goKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aHJvdHRsZWRDaGVja0VsZW1lbnRzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRjaGVja0VsZW1zOiB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLFxuXHRcdFx0dW52ZWlsOiB1bnZlaWxFbGVtZW50XG5cdFx0fTtcblx0fSkoKTtcblxuXG5cdHZhciBhdXRvU2l6ZXIgPSAoZnVuY3Rpb24oKXtcblx0XHR2YXIgYXV0b3NpemVzRWxlbXM7XG5cblx0XHR2YXIgc2l6ZUVsZW1lbnQgPSByQUZJdChmdW5jdGlvbihlbGVtLCBwYXJlbnQsIGV2ZW50LCB3aWR0aCl7XG5cdFx0XHR2YXIgc291cmNlcywgaSwgbGVuO1xuXHRcdFx0ZWxlbS5fbGF6eXNpemVzV2lkdGggPSB3aWR0aDtcblx0XHRcdHdpZHRoICs9ICdweCc7XG5cblx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCdzaXplcycsIHdpZHRoKTtcblxuXHRcdFx0aWYocmVnUGljdHVyZS50ZXN0KHBhcmVudC5ub2RlTmFtZSB8fCAnJykpe1xuXHRcdFx0XHRzb3VyY2VzID0gcGFyZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzb3VyY2UnKTtcblx0XHRcdFx0Zm9yKGkgPSAwLCBsZW4gPSBzb3VyY2VzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKXtcblx0XHRcdFx0XHRzb3VyY2VzW2ldLnNldEF0dHJpYnV0ZSgnc2l6ZXMnLCB3aWR0aCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYoIWV2ZW50LmRldGFpbC5kYXRhQXR0cil7XG5cdFx0XHRcdHVwZGF0ZVBvbHlmaWxsKGVsZW0sIGV2ZW50LmRldGFpbCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dmFyIGdldFNpemVFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW0sIGRhdGFBdHRyLCB3aWR0aCl7XG5cdFx0XHR2YXIgZXZlbnQ7XG5cdFx0XHR2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuXG5cdFx0XHRpZihwYXJlbnQpe1xuXHRcdFx0XHR3aWR0aCA9IGdldFdpZHRoKGVsZW0sIHBhcmVudCwgd2lkdGgpO1xuXHRcdFx0XHRldmVudCA9IHRyaWdnZXJFdmVudChlbGVtLCAnbGF6eWJlZm9yZXNpemVzJywge3dpZHRoOiB3aWR0aCwgZGF0YUF0dHI6ICEhZGF0YUF0dHJ9KTtcblxuXHRcdFx0XHRpZighZXZlbnQuZGVmYXVsdFByZXZlbnRlZCl7XG5cdFx0XHRcdFx0d2lkdGggPSBldmVudC5kZXRhaWwud2lkdGg7XG5cblx0XHRcdFx0XHRpZih3aWR0aCAmJiB3aWR0aCAhPT0gZWxlbS5fbGF6eXNpemVzV2lkdGgpe1xuXHRcdFx0XHRcdFx0c2l6ZUVsZW1lbnQoZWxlbSwgcGFyZW50LCBldmVudCwgd2lkdGgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgdXBkYXRlRWxlbWVudHNTaXplcyA9IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgaTtcblx0XHRcdHZhciBsZW4gPSBhdXRvc2l6ZXNFbGVtcy5sZW5ndGg7XG5cdFx0XHRpZihsZW4pe1xuXHRcdFx0XHRpID0gMDtcblxuXHRcdFx0XHRmb3IoOyBpIDwgbGVuOyBpKyspe1xuXHRcdFx0XHRcdGdldFNpemVFbGVtZW50KGF1dG9zaXplc0VsZW1zW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgZGVib3VuY2VkVXBkYXRlRWxlbWVudHNTaXplcyA9IGRlYm91bmNlKHVwZGF0ZUVsZW1lbnRzU2l6ZXMpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdF86IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGF1dG9zaXplc0VsZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShsYXp5U2l6ZXNDb25maWcuYXV0b3NpemVzQ2xhc3MpO1xuXHRcdFx0XHRhZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZWRVcGRhdGVFbGVtZW50c1NpemVzKTtcblx0XHRcdH0sXG5cdFx0XHRjaGVja0VsZW1zOiBkZWJvdW5jZWRVcGRhdGVFbGVtZW50c1NpemVzLFxuXHRcdFx0dXBkYXRlRWxlbTogZ2V0U2l6ZUVsZW1lbnRcblx0XHR9O1xuXHR9KSgpO1xuXG5cdHZhciBpbml0ID0gZnVuY3Rpb24oKXtcblx0XHRpZighaW5pdC5pKXtcblx0XHRcdGluaXQuaSA9IHRydWU7XG5cdFx0XHRhdXRvU2l6ZXIuXygpO1xuXHRcdFx0bG9hZGVyLl8oKTtcblx0XHR9XG5cdH07XG5cblx0bGF6eXNpemVzID0ge1xuXHRcdGNmZzogbGF6eVNpemVzQ29uZmlnLFxuXHRcdGF1dG9TaXplcjogYXV0b1NpemVyLFxuXHRcdGxvYWRlcjogbG9hZGVyLFxuXHRcdGluaXQ6IGluaXQsXG5cdFx0dVA6IHVwZGF0ZVBvbHlmaWxsLFxuXHRcdGFDOiBhZGRDbGFzcyxcblx0XHRyQzogcmVtb3ZlQ2xhc3MsXG5cdFx0aEM6IGhhc0NsYXNzLFxuXHRcdGZpcmU6IHRyaWdnZXJFdmVudCxcblx0XHRnVzogZ2V0V2lkdGgsXG5cdFx0ckFGOiByQUYsXG5cdH07XG5cblx0cmV0dXJuIGxhenlzaXplcztcbn1cbikpO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gSWYgb2JqLmhhc093blByb3BlcnR5IGhhcyBiZWVuIG92ZXJyaWRkZW4sIHRoZW4gY2FsbGluZ1xuLy8gb2JqLmhhc093blByb3BlcnR5KHByb3ApIHdpbGwgYnJlYWsuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb3llbnQvbm9kZS9pc3N1ZXMvMTcwN1xuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihxcywgc2VwLCBlcSwgb3B0aW9ucykge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgdmFyIG9iaiA9IHt9O1xuXG4gIGlmICh0eXBlb2YgcXMgIT09ICdzdHJpbmcnIHx8IHFzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICB2YXIgcmVnZXhwID0gL1xcKy9nO1xuICBxcyA9IHFzLnNwbGl0KHNlcCk7XG5cbiAgdmFyIG1heEtleXMgPSAxMDAwO1xuICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5tYXhLZXlzID09PSAnbnVtYmVyJykge1xuICAgIG1heEtleXMgPSBvcHRpb25zLm1heEtleXM7XG4gIH1cblxuICB2YXIgbGVuID0gcXMubGVuZ3RoO1xuICAvLyBtYXhLZXlzIDw9IDAgbWVhbnMgdGhhdCB3ZSBzaG91bGQgbm90IGxpbWl0IGtleXMgY291bnRcbiAgaWYgKG1heEtleXMgPiAwICYmIGxlbiA+IG1heEtleXMpIHtcbiAgICBsZW4gPSBtYXhLZXlzO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciB4ID0gcXNbaV0ucmVwbGFjZShyZWdleHAsICclMjAnKSxcbiAgICAgICAgaWR4ID0geC5pbmRleE9mKGVxKSxcbiAgICAgICAga3N0ciwgdnN0ciwgaywgdjtcblxuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAga3N0ciA9IHguc3Vic3RyKDAsIGlkeCk7XG4gICAgICB2c3RyID0geC5zdWJzdHIoaWR4ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtzdHIgPSB4O1xuICAgICAgdnN0ciA9ICcnO1xuICAgIH1cblxuICAgIGsgPSBkZWNvZGVVUklDb21wb25lbnQoa3N0cik7XG4gICAgdiA9IGRlY29kZVVSSUNvbXBvbmVudCh2c3RyKTtcblxuICAgIGlmICghaGFzT3duUHJvcGVydHkob2JqLCBrKSkge1xuICAgICAgb2JqW2tdID0gdjtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgb2JqW2tdLnB1c2godik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrXSA9IFtvYmpba10sIHZdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHhzKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBzdHJpbmdpZnlQcmltaXRpdmUgPSBmdW5jdGlvbih2KSB7XG4gIHN3aXRjaCAodHlwZW9mIHYpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmV0dXJuIHY7XG5cbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHJldHVybiB2ID8gJ3RydWUnIDogJ2ZhbHNlJztcblxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICByZXR1cm4gaXNGaW5pdGUodikgPyB2IDogJyc7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaiwgc2VwLCBlcSwgbmFtZSkge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgIG9iaiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBtYXAob2JqZWN0S2V5cyhvYmopLCBmdW5jdGlvbihrKSB7XG4gICAgICB2YXIga3MgPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKGspKSArIGVxO1xuICAgICAgaWYgKGlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICByZXR1cm4gbWFwKG9ialtrXSwgZnVuY3Rpb24odikge1xuICAgICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUodikpO1xuICAgICAgICB9KS5qb2luKHNlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9ialtrXSkpO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcblxuICB9XG5cbiAgaWYgKCFuYW1lKSByZXR1cm4gJyc7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG5hbWUpKSArIGVxICtcbiAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqKSk7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHhzKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuZnVuY3Rpb24gbWFwICh4cywgZikge1xuICBpZiAoeHMubWFwKSByZXR1cm4geHMubWFwKGYpO1xuICB2YXIgcmVzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICByZXMucHVzaChmKHhzW2ldLCBpKSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxudmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciByZXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSByZXMucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLmRlY29kZSA9IGV4cG9ydHMucGFyc2UgPSByZXF1aXJlKCcuL2RlY29kZScpO1xuZXhwb3J0cy5lbmNvZGUgPSBleHBvcnRzLnN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYW5zaVJlZ2V4ID0gcmVxdWlyZSgnYW5zaS1yZWdleCcpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgPyBzdHIucmVwbGFjZShhbnNpUmVnZXgsICcnKSA6IHN0cjtcbn07XG4iLCIvKmVzbGludC1lbnYgYnJvd3NlciovXG5cbnZhciBjbGllbnRPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jbGllbnRPdmVybGF5LmlkID0gJ3dlYnBhY2staG90LW1pZGRsZXdhcmUtY2xpZW50T3ZlcmxheSc7XG52YXIgc3R5bGVzID0ge1xuICBiYWNrZ3JvdW5kOiAncmdiYSgwLDAsMCwwLjg1KScsXG4gIGNvbG9yOiAnI0U4RThFOCcsXG4gIGxpbmVIZWlnaHQ6ICcxLjInLFxuICB3aGl0ZVNwYWNlOiAncHJlJyxcbiAgZm9udEZhbWlseTogJ01lbmxvLCBDb25zb2xhcywgbW9ub3NwYWNlJyxcbiAgZm9udFNpemU6ICcxM3B4JyxcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIHpJbmRleDogOTk5OSxcbiAgcGFkZGluZzogJzEwcHgnLFxuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgdG9wOiAwLFxuICBib3R0b206IDAsXG4gIG92ZXJmbG93OiAnYXV0bycsXG4gIGRpcjogJ2x0cicsXG4gIHRleHRBbGlnbjogJ2xlZnQnXG59O1xuXG52YXIgYW5zaUhUTUwgPSByZXF1aXJlKCdhbnNpLWh0bWwnKTtcbnZhciBjb2xvcnMgPSB7XG4gIHJlc2V0OiBbJ3RyYW5zcGFyZW50JywgJ3RyYW5zcGFyZW50J10sXG4gIGJsYWNrOiAnMTgxODE4JyxcbiAgcmVkOiAnRTM2MDQ5JyxcbiAgZ3JlZW46ICdCM0NCNzQnLFxuICB5ZWxsb3c6ICdGRkQwODAnLFxuICBibHVlOiAnN0NBRkMyJyxcbiAgbWFnZW50YTogJzdGQUNDQScsXG4gIGN5YW46ICdDM0MyRUYnLFxuICBsaWdodGdyZXk6ICdFQkU3RTMnLFxuICBkYXJrZ3JleTogJzZENzg5MSdcbn07XG5cbnZhciBFbnRpdGllcyA9IHJlcXVpcmUoJ2h0bWwtZW50aXRpZXMnKS5BbGxIdG1sRW50aXRpZXM7XG52YXIgZW50aXRpZXMgPSBuZXcgRW50aXRpZXMoKTtcblxuZnVuY3Rpb24gc2hvd1Byb2JsZW1zKHR5cGUsIGxpbmVzKSB7XG4gIGNsaWVudE92ZXJsYXkuaW5uZXJIVE1MID0gJyc7XG4gIGxpbmVzLmZvckVhY2goZnVuY3Rpb24obXNnKSB7XG4gICAgbXNnID0gYW5zaUhUTUwoZW50aXRpZXMuZW5jb2RlKG1zZykpO1xuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc3R5bGUubWFyZ2luQm90dG9tID0gJzI2cHgnO1xuICAgIGRpdi5pbm5lckhUTUwgPSBwcm9ibGVtVHlwZSh0eXBlKSArICcgaW4gJyArIG1zZztcbiAgICBjbGllbnRPdmVybGF5LmFwcGVuZENoaWxkKGRpdik7XG4gIH0pO1xuICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2xpZW50T3ZlcmxheSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXIoKSB7XG4gIGlmIChkb2N1bWVudC5ib2R5ICYmIGNsaWVudE92ZXJsYXkucGFyZW50Tm9kZSkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2xpZW50T3ZlcmxheSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvYmxlbVR5cGUgKHR5cGUpIHtcbiAgdmFyIHByb2JsZW1Db2xvcnMgPSB7XG4gICAgZXJyb3JzOiBjb2xvcnMucmVkLFxuICAgIHdhcm5pbmdzOiBjb2xvcnMueWVsbG93XG4gIH07XG4gIHZhciBjb2xvciA9IHByb2JsZW1Db2xvcnNbdHlwZV0gfHwgY29sb3JzLnJlZDtcbiAgcmV0dXJuIChcbiAgICAnPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiMnICsgY29sb3IgKyAnOyBjb2xvcjojZmZmOyBwYWRkaW5nOjJweCA0cHg7IGJvcmRlci1yYWRpdXM6IDJweFwiPicgK1xuICAgICAgdHlwZS5zbGljZSgwLCAtMSkudG9VcHBlckNhc2UoKSArXG4gICAgJzwvc3Bhbj4nXG4gICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICBmb3IgKHZhciBjb2xvciBpbiBvcHRpb25zLm92ZXJsYXlDb2xvcnMpIHtcbiAgICBpZiAoY29sb3IgaW4gY29sb3JzKSB7XG4gICAgICBjb2xvcnNbY29sb3JdID0gb3B0aW9ucy5vdmVybGF5Q29sb3JzW2NvbG9yXTtcbiAgICB9XG4gICAgYW5zaUhUTUwuc2V0Q29sb3JzKGNvbG9ycyk7XG4gIH1cblxuICBmb3IgKHZhciBzdHlsZSBpbiBvcHRpb25zLm92ZXJsYXlTdHlsZXMpIHtcbiAgICBzdHlsZXNbc3R5bGVdID0gb3B0aW9ucy5vdmVybGF5U3R5bGVzW3N0eWxlXTtcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBzdHlsZXMpIHtcbiAgICBjbGllbnRPdmVybGF5LnN0eWxlW2tleV0gPSBzdHlsZXNba2V5XTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2hvd1Byb2JsZW1zOiBzaG93UHJvYmxlbXMsXG4gICAgY2xlYXI6IGNsZWFyXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmNsZWFyID0gY2xlYXI7XG5tb2R1bGUuZXhwb3J0cy5zaG93UHJvYmxlbXMgPSBzaG93UHJvYmxlbXM7XG4iLCIvKmVzbGludC1lbnYgYnJvd3NlciovXG4vKmdsb2JhbCBfX3Jlc291cmNlUXVlcnkgX193ZWJwYWNrX3B1YmxpY19wYXRoX18qL1xuXG52YXIgb3B0aW9ucyA9IHtcbiAgcGF0aDogXCIvX193ZWJwYWNrX2htclwiLFxuICB0aW1lb3V0OiAyMCAqIDEwMDAsXG4gIG92ZXJsYXk6IHRydWUsXG4gIHJlbG9hZDogZmFsc2UsXG4gIGxvZzogdHJ1ZSxcbiAgd2FybjogdHJ1ZSxcbiAgbmFtZTogJycsXG4gIGF1dG9Db25uZWN0OiB0cnVlLFxuICBvdmVybGF5U3R5bGVzOiB7fSxcbiAgb3ZlcmxheVdhcm5pbmdzOiBmYWxzZSxcbiAgYW5zaUNvbG9yczoge31cbn07XG5pZiAoX19yZXNvdXJjZVF1ZXJ5KSB7XG4gIHZhciBxdWVyeXN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5c3RyaW5nJyk7XG4gIHZhciBvdmVycmlkZXMgPSBxdWVyeXN0cmluZy5wYXJzZShfX3Jlc291cmNlUXVlcnkuc2xpY2UoMSkpO1xuICBzZXRPdmVycmlkZXMob3ZlcnJpZGVzKTtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIC8vIGRvIG5vdGhpbmdcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdy5FdmVudFNvdXJjZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgY29uc29sZS53YXJuKFxuICAgIFwid2VicGFjay1ob3QtbWlkZGxld2FyZSdzIGNsaWVudCByZXF1aXJlcyBFdmVudFNvdXJjZSB0byB3b3JrLiBcIiArXG4gICAgXCJZb3Ugc2hvdWxkIGluY2x1ZGUgYSBwb2x5ZmlsbCBpZiB5b3Ugd2FudCB0byBzdXBwb3J0IHRoaXMgYnJvd3NlcjogXCIgK1xuICAgIFwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1NlcnZlci1zZW50X2V2ZW50cyNUb29sc1wiXG4gICk7XG59IGVsc2Uge1xuICBpZiAob3B0aW9ucy5hdXRvQ29ubmVjdCkge1xuICAgIGNvbm5lY3QoKTtcbiAgfVxufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gc2V0T3B0aW9uc0FuZENvbm5lY3Qob3ZlcnJpZGVzKSB7XG4gIHNldE92ZXJyaWRlcyhvdmVycmlkZXMpO1xuICBjb25uZWN0KCk7XG59XG5cbmZ1bmN0aW9uIHNldE92ZXJyaWRlcyhvdmVycmlkZXMpIHtcbiAgaWYgKG92ZXJyaWRlcy5hdXRvQ29ubmVjdCkgb3B0aW9ucy5hdXRvQ29ubmVjdCA9IG92ZXJyaWRlcy5hdXRvQ29ubmVjdCA9PSAndHJ1ZSc7XG4gIGlmIChvdmVycmlkZXMucGF0aCkgb3B0aW9ucy5wYXRoID0gb3ZlcnJpZGVzLnBhdGg7XG4gIGlmIChvdmVycmlkZXMudGltZW91dCkgb3B0aW9ucy50aW1lb3V0ID0gb3ZlcnJpZGVzLnRpbWVvdXQ7XG4gIGlmIChvdmVycmlkZXMub3ZlcmxheSkgb3B0aW9ucy5vdmVybGF5ID0gb3ZlcnJpZGVzLm92ZXJsYXkgIT09ICdmYWxzZSc7XG4gIGlmIChvdmVycmlkZXMucmVsb2FkKSBvcHRpb25zLnJlbG9hZCA9IG92ZXJyaWRlcy5yZWxvYWQgIT09ICdmYWxzZSc7XG4gIGlmIChvdmVycmlkZXMubm9JbmZvICYmIG92ZXJyaWRlcy5ub0luZm8gIT09ICdmYWxzZScpIHtcbiAgICBvcHRpb25zLmxvZyA9IGZhbHNlO1xuICB9XG4gIGlmIChvdmVycmlkZXMubmFtZSkge1xuICAgIG9wdGlvbnMubmFtZSA9IG92ZXJyaWRlcy5uYW1lO1xuICB9XG4gIGlmIChvdmVycmlkZXMucXVpZXQgJiYgb3ZlcnJpZGVzLnF1aWV0ICE9PSAnZmFsc2UnKSB7XG4gICAgb3B0aW9ucy5sb2cgPSBmYWxzZTtcbiAgICBvcHRpb25zLndhcm4gPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChvdmVycmlkZXMuZHluYW1pY1B1YmxpY1BhdGgpIHtcbiAgICBvcHRpb25zLnBhdGggPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIG9wdGlvbnMucGF0aDtcbiAgfVxuXG4gIGlmIChvdmVycmlkZXMuYW5zaUNvbG9ycykgb3B0aW9ucy5hbnNpQ29sb3JzID0gSlNPTi5wYXJzZShvdmVycmlkZXMuYW5zaUNvbG9ycyk7XG4gIGlmIChvdmVycmlkZXMub3ZlcmxheVN0eWxlcykgb3B0aW9ucy5vdmVybGF5U3R5bGVzID0gSlNPTi5wYXJzZShvdmVycmlkZXMub3ZlcmxheVN0eWxlcyk7XG5cbiAgaWYgKG92ZXJyaWRlcy5vdmVybGF5V2FybmluZ3MpIHtcbiAgICBvcHRpb25zLm92ZXJsYXlXYXJuaW5ncyA9IG92ZXJyaWRlcy5vdmVybGF5V2FybmluZ3MgPT0gJ3RydWUnO1xuICB9XG59XG5cbmZ1bmN0aW9uIEV2ZW50U291cmNlV3JhcHBlcigpIHtcbiAgdmFyIHNvdXJjZTtcbiAgdmFyIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKCk7XG4gIHZhciBsaXN0ZW5lcnMgPSBbXTtcblxuICBpbml0KCk7XG4gIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgIGlmICgobmV3IERhdGUoKSAtIGxhc3RBY3Rpdml0eSkgPiBvcHRpb25zLnRpbWVvdXQpIHtcbiAgICAgIGhhbmRsZURpc2Nvbm5lY3QoKTtcbiAgICB9XG4gIH0sIG9wdGlvbnMudGltZW91dCAvIDIpO1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgc291cmNlID0gbmV3IHdpbmRvdy5FdmVudFNvdXJjZShvcHRpb25zLnBhdGgpO1xuICAgIHNvdXJjZS5vbm9wZW4gPSBoYW5kbGVPbmxpbmU7XG4gICAgc291cmNlLm9uZXJyb3IgPSBoYW5kbGVEaXNjb25uZWN0O1xuICAgIHNvdXJjZS5vbm1lc3NhZ2UgPSBoYW5kbGVNZXNzYWdlO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlT25saW5lKCkge1xuICAgIGlmIChvcHRpb25zLmxvZykgY29uc29sZS5sb2coXCJbSE1SXSBjb25uZWN0ZWRcIik7XG4gICAgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0oZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZURpc2Nvbm5lY3QoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgc291cmNlLmNsb3NlKCk7XG4gICAgc2V0VGltZW91dChpbml0LCBvcHRpb25zLnRpbWVvdXQpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRNZXNzYWdlTGlzdGVuZXI6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICBsaXN0ZW5lcnMucHVzaChmbik7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRFdmVudFNvdXJjZVdyYXBwZXIoKSB7XG4gIGlmICghd2luZG93Ll9fd2htRXZlbnRTb3VyY2VXcmFwcGVyKSB7XG4gICAgd2luZG93Ll9fd2htRXZlbnRTb3VyY2VXcmFwcGVyID0ge307XG4gIH1cbiAgaWYgKCF3aW5kb3cuX193aG1FdmVudFNvdXJjZVdyYXBwZXJbb3B0aW9ucy5wYXRoXSkge1xuICAgIC8vIGNhY2hlIHRoZSB3cmFwcGVyIGZvciBvdGhlciBlbnRyaWVzIGxvYWRlZCBvblxuICAgIC8vIHRoZSBzYW1lIHBhZ2Ugd2l0aCB0aGUgc2FtZSBvcHRpb25zLnBhdGhcbiAgICB3aW5kb3cuX193aG1FdmVudFNvdXJjZVdyYXBwZXJbb3B0aW9ucy5wYXRoXSA9IEV2ZW50U291cmNlV3JhcHBlcigpO1xuICB9XG4gIHJldHVybiB3aW5kb3cuX193aG1FdmVudFNvdXJjZVdyYXBwZXJbb3B0aW9ucy5wYXRoXTtcbn1cblxuZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKCkuYWRkTWVzc2FnZUxpc3RlbmVyKGhhbmRsZU1lc3NhZ2UpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZGF0YSA9PSBcIlxcdUQ4M0RcXHVEQzkzXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHByb2Nlc3NNZXNzYWdlKEpTT04ucGFyc2UoZXZlbnQuZGF0YSkpO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBpZiAob3B0aW9ucy53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIkludmFsaWQgSE1SIG1lc3NhZ2U6IFwiICsgZXZlbnQuZGF0YSArIFwiXFxuXCIgKyBleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIHRoZSByZXBvcnRlciBuZWVkcyB0byBiZSBhIHNpbmdsZXRvbiBvbiB0aGUgcGFnZVxuLy8gaW4gY2FzZSB0aGUgY2xpZW50IGlzIGJlaW5nIHVzZWQgYnkgbXVsdGlwbGUgYnVuZGxlc1xuLy8gd2Ugb25seSB3YW50IHRvIHJlcG9ydCBvbmNlLlxuLy8gYWxsIHRoZSBlcnJvcnMgd2lsbCBnbyB0byBhbGwgY2xpZW50c1xudmFyIHNpbmdsZXRvbktleSA9ICdfX3dlYnBhY2tfaG90X21pZGRsZXdhcmVfcmVwb3J0ZXJfXyc7XG52YXIgcmVwb3J0ZXI7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgaWYgKCF3aW5kb3dbc2luZ2xldG9uS2V5XSkge1xuICAgIHdpbmRvd1tzaW5nbGV0b25LZXldID0gY3JlYXRlUmVwb3J0ZXIoKTtcbiAgfVxuICByZXBvcnRlciA9IHdpbmRvd1tzaW5nbGV0b25LZXldO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZXBvcnRlcigpIHtcbiAgdmFyIHN0cmlwID0gcmVxdWlyZSgnc3RyaXAtYW5zaScpO1xuXG4gIHZhciBvdmVybGF5O1xuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBvcHRpb25zLm92ZXJsYXkpIHtcbiAgICBvdmVybGF5ID0gcmVxdWlyZSgnLi9jbGllbnQtb3ZlcmxheScpKHtcbiAgICAgIGFuc2lDb2xvcnM6IG9wdGlvbnMuYW5zaUNvbG9ycyxcbiAgICAgIG92ZXJsYXlTdHlsZXM6IG9wdGlvbnMub3ZlcmxheVN0eWxlc1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IHtcbiAgICBlcnJvcnM6IFwiY29sb3I6ICNmZjAwMDA7XCIsXG4gICAgd2FybmluZ3M6IFwiY29sb3I6ICM5OTk5MzM7XCJcbiAgfTtcbiAgdmFyIHByZXZpb3VzUHJvYmxlbXMgPSBudWxsO1xuICBmdW5jdGlvbiBsb2codHlwZSwgb2JqKSB7XG4gICAgdmFyIG5ld1Byb2JsZW1zID0gb2JqW3R5cGVdLm1hcChmdW5jdGlvbihtc2cpIHsgcmV0dXJuIHN0cmlwKG1zZyk7IH0pLmpvaW4oJ1xcbicpO1xuICAgIGlmIChwcmV2aW91c1Byb2JsZW1zID09IG5ld1Byb2JsZW1zKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZXZpb3VzUHJvYmxlbXMgPSBuZXdQcm9ibGVtcztcbiAgICB9XG5cbiAgICB2YXIgc3R5bGUgPSBzdHlsZXNbdHlwZV07XG4gICAgdmFyIG5hbWUgPSBvYmoubmFtZSA/IFwiJ1wiICsgb2JqLm5hbWUgKyBcIicgXCIgOiBcIlwiO1xuICAgIHZhciB0aXRsZSA9IFwiW0hNUl0gYnVuZGxlIFwiICsgbmFtZSArIFwiaGFzIFwiICsgb2JqW3R5cGVdLmxlbmd0aCArIFwiIFwiICsgdHlwZTtcbiAgICAvLyBOT1RFOiBjb25zb2xlLndhcm4gb3IgY29uc29sZS5lcnJvciB3aWxsIHByaW50IHRoZSBzdGFjayB0cmFjZVxuICAgIC8vIHdoaWNoIGlzbid0IGhlbHBmdWwgaGVyZSwgc28gdXNpbmcgY29uc29sZS5sb2cgdG8gZXNjYXBlIGl0LlxuICAgIGlmIChjb25zb2xlLmdyb3VwICYmIGNvbnNvbGUuZ3JvdXBFbmQpIHtcbiAgICAgIGNvbnNvbGUuZ3JvdXAoXCIlY1wiICsgdGl0bGUsIHN0eWxlKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiJWNcIiArIG5ld1Byb2JsZW1zLCBzdHlsZSk7XG4gICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBcIiVjXCIgKyB0aXRsZSArIFwiXFxuXFx0JWNcIiArIG5ld1Byb2JsZW1zLnJlcGxhY2UoL1xcbi9nLCBcIlxcblxcdFwiKSxcbiAgICAgICAgc3R5bGUgKyBcImZvbnQtd2VpZ2h0OiBib2xkO1wiLFxuICAgICAgICBzdHlsZSArIFwiZm9udC13ZWlnaHQ6IG5vcm1hbDtcIlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNsZWFuUHJvYmxlbXNDYWNoZTogZnVuY3Rpb24gKCkge1xuICAgICAgcHJldmlvdXNQcm9ibGVtcyA9IG51bGw7XG4gICAgfSxcbiAgICBwcm9ibGVtczogZnVuY3Rpb24odHlwZSwgb2JqKSB7XG4gICAgICBpZiAob3B0aW9ucy53YXJuKSB7XG4gICAgICAgIGxvZyh0eXBlLCBvYmopO1xuICAgICAgfVxuICAgICAgaWYgKG92ZXJsYXkpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMub3ZlcmxheVdhcm5pbmdzIHx8IHR5cGUgPT09ICdlcnJvcnMnKSB7XG4gICAgICAgICAgb3ZlcmxheS5zaG93UHJvYmxlbXModHlwZSwgb2JqW3R5cGVdKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgb3ZlcmxheS5jbGVhcigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChvdmVybGF5KSBvdmVybGF5LmNsZWFyKCk7XG4gICAgfSxcbiAgICB1c2VDdXN0b21PdmVybGF5OiBmdW5jdGlvbihjdXN0b21PdmVybGF5KSB7XG4gICAgICBvdmVybGF5ID0gY3VzdG9tT3ZlcmxheTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBwcm9jZXNzVXBkYXRlID0gcmVxdWlyZSgnLi9wcm9jZXNzLXVwZGF0ZScpO1xuXG52YXIgY3VzdG9tSGFuZGxlcjtcbnZhciBzdWJzY3JpYmVBbGxIYW5kbGVyO1xuZnVuY3Rpb24gcHJvY2Vzc01lc3NhZ2Uob2JqKSB7XG4gIHN3aXRjaChvYmouYWN0aW9uKSB7XG4gICAgY2FzZSBcImJ1aWxkaW5nXCI6XG4gICAgICBpZiAob3B0aW9ucy5sb2cpIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgXCJbSE1SXSBidW5kbGUgXCIgKyAob2JqLm5hbWUgPyBcIidcIiArIG9iai5uYW1lICsgXCInIFwiIDogXCJcIikgK1xuICAgICAgICAgIFwicmVidWlsZGluZ1wiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYnVpbHRcIjpcbiAgICAgIGlmIChvcHRpb25zLmxvZykge1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBcIltITVJdIGJ1bmRsZSBcIiArIChvYmoubmFtZSA/IFwiJ1wiICsgb2JqLm5hbWUgKyBcIicgXCIgOiBcIlwiKSArXG4gICAgICAgICAgXCJyZWJ1aWx0IGluIFwiICsgb2JqLnRpbWUgKyBcIm1zXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIC8vIGZhbGwgdGhyb3VnaFxuICAgIGNhc2UgXCJzeW5jXCI6XG4gICAgICBpZiAob2JqLm5hbWUgJiYgb3B0aW9ucy5uYW1lICYmIG9iai5uYW1lICE9PSBvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGFwcGx5VXBkYXRlID0gdHJ1ZTtcbiAgICAgIGlmIChvYmouZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHJlcG9ydGVyKSByZXBvcnRlci5wcm9ibGVtcygnZXJyb3JzJywgb2JqKTtcbiAgICAgICAgYXBwbHlVcGRhdGUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAob2JqLndhcm5pbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHJlcG9ydGVyKSB7XG4gICAgICAgICAgdmFyIG92ZXJsYXlTaG93biA9IHJlcG9ydGVyLnByb2JsZW1zKCd3YXJuaW5ncycsIG9iaik7XG4gICAgICAgICAgYXBwbHlVcGRhdGUgPSBvdmVybGF5U2hvd247XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChyZXBvcnRlcikge1xuICAgICAgICAgIHJlcG9ydGVyLmNsZWFuUHJvYmxlbXNDYWNoZSgpO1xuICAgICAgICAgIHJlcG9ydGVyLnN1Y2Nlc3MoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGFwcGx5VXBkYXRlKSB7XG4gICAgICAgIHByb2Nlc3NVcGRhdGUob2JqLmhhc2gsIG9iai5tb2R1bGVzLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAoY3VzdG9tSGFuZGxlcikge1xuICAgICAgICBjdXN0b21IYW5kbGVyKG9iaik7XG4gICAgICB9XG4gIH1cblxuICBpZiAoc3Vic2NyaWJlQWxsSGFuZGxlcikge1xuICAgIHN1YnNjcmliZUFsbEhhbmRsZXIob2JqKTtcbiAgfVxufVxuXG5pZiAobW9kdWxlKSB7XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIHN1YnNjcmliZUFsbDogZnVuY3Rpb24gc3Vic2NyaWJlQWxsKGhhbmRsZXIpIHtcbiAgICAgIHN1YnNjcmliZUFsbEhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIH0sXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUoaGFuZGxlcikge1xuICAgICAgY3VzdG9tSGFuZGxlciA9IGhhbmRsZXI7XG4gICAgfSxcbiAgICB1c2VDdXN0b21PdmVybGF5OiBmdW5jdGlvbiB1c2VDdXN0b21PdmVybGF5KGN1c3RvbU92ZXJsYXkpIHtcbiAgICAgIGlmIChyZXBvcnRlcikgcmVwb3J0ZXIudXNlQ3VzdG9tT3ZlcmxheShjdXN0b21PdmVybGF5KTtcbiAgICB9LFxuICAgIHNldE9wdGlvbnNBbmRDb25uZWN0OiBzZXRPcHRpb25zQW5kQ29ubmVjdFxuICB9O1xufVxuIiwiLyoqXG4gKiBCYXNlZCBoZWF2aWx5IG9uIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrL3dlYnBhY2svYmxvYi9cbiAqICBjMGFmZGY5YzZhYmMxZGQ3MDcwN2M1OTRlNDczODAyYTU2NmY3YjZlL2hvdC9vbmx5LWRldi1zZXJ2ZXIuanNcbiAqIE9yaWdpbmFsIGNvcHlyaWdodCBUb2JpYXMgS29wcGVycyBAc29rcmEgKE1JVCBsaWNlbnNlKVxuICovXG5cbi8qIGdsb2JhbCB3aW5kb3cgX193ZWJwYWNrX2hhc2hfXyAqL1xuXG5pZiAoIW1vZHVsZS5ob3QpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiW0hNUl0gSG90IE1vZHVsZSBSZXBsYWNlbWVudCBpcyBkaXNhYmxlZC5cIik7XG59XG5cbnZhciBobXJEb2NzVXJsID0gXCJodHRwczovL3dlYnBhY2suanMub3JnL2NvbmNlcHRzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnQvXCI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuXG52YXIgbGFzdEhhc2g7XG52YXIgZmFpbHVyZVN0YXR1c2VzID0geyBhYm9ydDogMSwgZmFpbDogMSB9O1xudmFyIGFwcGx5T3B0aW9ucyA9IHsgXHRcdFx0XHRcbiAgaWdub3JlVW5hY2NlcHRlZDogdHJ1ZSxcbiAgaWdub3JlRGVjbGluZWQ6IHRydWUsXG4gIGlnbm9yZUVycm9yZWQ6IHRydWUsXG4gIG9uVW5hY2NlcHRlZDogZnVuY3Rpb24oZGF0YSkge1xuICAgIGNvbnNvbGUud2FybihcIklnbm9yZWQgYW4gdXBkYXRlIHRvIHVuYWNjZXB0ZWQgbW9kdWxlIFwiICsgZGF0YS5jaGFpbi5qb2luKFwiIC0+IFwiKSk7XG4gIH0sXG4gIG9uRGVjbGluZWQ6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBjb25zb2xlLndhcm4oXCJJZ25vcmVkIGFuIHVwZGF0ZSB0byBkZWNsaW5lZCBtb2R1bGUgXCIgKyBkYXRhLmNoYWluLmpvaW4oXCIgLT4gXCIpKTtcbiAgfSxcbiAgb25FcnJvcmVkOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgY29uc29sZS5lcnJvcihkYXRhLmVycm9yKTtcbiAgICBjb25zb2xlLndhcm4oXCJJZ25vcmVkIGFuIGVycm9yIHdoaWxlIHVwZGF0aW5nIG1vZHVsZSBcIiArIGRhdGEubW9kdWxlSWQgKyBcIiAoXCIgKyBkYXRhLnR5cGUgKyBcIilcIik7XG4gIH0gXG59XG5cbmZ1bmN0aW9uIHVwVG9EYXRlKGhhc2gpIHtcbiAgaWYgKGhhc2gpIGxhc3RIYXNoID0gaGFzaDtcbiAgcmV0dXJuIGxhc3RIYXNoID09IF9fd2VicGFja19oYXNoX187XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGFzaCwgbW9kdWxlTWFwLCBvcHRpb25zKSB7XG4gIHZhciByZWxvYWQgPSBvcHRpb25zLnJlbG9hZDtcbiAgaWYgKCF1cFRvRGF0ZShoYXNoKSAmJiBtb2R1bGUuaG90LnN0YXR1cygpID09IFwiaWRsZVwiKSB7XG4gICAgaWYgKG9wdGlvbnMubG9nKSBjb25zb2xlLmxvZyhcIltITVJdIENoZWNraW5nIGZvciB1cGRhdGVzIG9uIHRoZSBzZXJ2ZXIuLi5cIik7XG4gICAgY2hlY2soKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrKCkge1xuICAgIHZhciBjYiA9IGZ1bmN0aW9uKGVyciwgdXBkYXRlZE1vZHVsZXMpIHtcbiAgICAgIGlmIChlcnIpIHJldHVybiBoYW5kbGVFcnJvcihlcnIpO1xuXG4gICAgICBpZighdXBkYXRlZE1vZHVsZXMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMud2Fybikge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIltITVJdIENhbm5vdCBmaW5kIHVwZGF0ZSAoRnVsbCByZWxvYWQgbmVlZGVkKVwiKTtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJbSE1SXSAoUHJvYmFibHkgYmVjYXVzZSBvZiByZXN0YXJ0aW5nIHRoZSBzZXJ2ZXIpXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBlcmZvcm1SZWxvYWQoKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBhcHBseUNhbGxiYWNrID0gZnVuY3Rpb24oYXBwbHlFcnIsIHJlbmV3ZWRNb2R1bGVzKSB7XG4gICAgICAgIGlmIChhcHBseUVycikgcmV0dXJuIGhhbmRsZUVycm9yKGFwcGx5RXJyKTtcblxuICAgICAgICBpZiAoIXVwVG9EYXRlKCkpIGNoZWNrKCk7XG5cbiAgICAgICAgbG9nVXBkYXRlcyh1cGRhdGVkTW9kdWxlcywgcmVuZXdlZE1vZHVsZXMpO1xuICAgICAgfTtcblxuICAgICAgdmFyIGFwcGx5UmVzdWx0ID0gbW9kdWxlLmhvdC5hcHBseShhcHBseU9wdGlvbnMsIGFwcGx5Q2FsbGJhY2spO1xuICAgICAgLy8gd2VicGFjayAyIHByb21pc2VcbiAgICAgIGlmIChhcHBseVJlc3VsdCAmJiBhcHBseVJlc3VsdC50aGVuKSB7XG4gICAgICAgIC8vIEhvdE1vZHVsZVJlcGxhY2VtZW50LnJ1bnRpbWUuanMgcmVmZXJzIHRvIHRoZSByZXN1bHQgYXMgYG91dGRhdGVkTW9kdWxlc2BcbiAgICAgICAgYXBwbHlSZXN1bHQudGhlbihmdW5jdGlvbihvdXRkYXRlZE1vZHVsZXMpIHtcbiAgICAgICAgICBhcHBseUNhbGxiYWNrKG51bGwsIG91dGRhdGVkTW9kdWxlcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBhcHBseVJlc3VsdC5jYXRjaChhcHBseUNhbGxiYWNrKTtcbiAgICAgIH1cblxuICAgIH07XG5cbiAgICB2YXIgcmVzdWx0ID0gbW9kdWxlLmhvdC5jaGVjayhmYWxzZSwgY2IpO1xuICAgIC8vIHdlYnBhY2sgMiBwcm9taXNlXG4gICAgaWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuICAgICAgICByZXN1bHQudGhlbihmdW5jdGlvbih1cGRhdGVkTW9kdWxlcykge1xuICAgICAgICAgICAgY2IobnVsbCwgdXBkYXRlZE1vZHVsZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzdWx0LmNhdGNoKGNiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsb2dVcGRhdGVzKHVwZGF0ZWRNb2R1bGVzLCByZW5ld2VkTW9kdWxlcykge1xuICAgIHZhciB1bmFjY2VwdGVkTW9kdWxlcyA9IHVwZGF0ZWRNb2R1bGVzLmZpbHRlcihmdW5jdGlvbihtb2R1bGVJZCkge1xuICAgICAgcmV0dXJuIHJlbmV3ZWRNb2R1bGVzICYmIHJlbmV3ZWRNb2R1bGVzLmluZGV4T2YobW9kdWxlSWQpIDwgMDtcbiAgICB9KTtcblxuICAgIGlmKHVuYWNjZXB0ZWRNb2R1bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChvcHRpb25zLndhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIFwiW0hNUl0gVGhlIGZvbGxvd2luZyBtb2R1bGVzIGNvdWxkbid0IGJlIGhvdCB1cGRhdGVkOiBcIiArXG4gICAgICAgICAgXCIoRnVsbCByZWxvYWQgbmVlZGVkKVxcblwiICtcbiAgICAgICAgICBcIlRoaXMgaXMgdXN1YWxseSBiZWNhdXNlIHRoZSBtb2R1bGVzIHdoaWNoIGhhdmUgY2hhbmdlZCBcIiArXG4gICAgICAgICAgXCIoYW5kIHRoZWlyIHBhcmVudHMpIGRvIG5vdCBrbm93IGhvdyB0byBob3QgcmVsb2FkIHRoZW1zZWx2ZXMuIFwiICtcbiAgICAgICAgICBcIlNlZSBcIiArIGhtckRvY3NVcmwgKyBcIiBmb3IgbW9yZSBkZXRhaWxzLlwiXG4gICAgICAgICk7XG4gICAgICAgIHVuYWNjZXB0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24obW9kdWxlSWQpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJbSE1SXSAgLSBcIiArIChtb2R1bGVNYXBbbW9kdWxlSWRdIHx8IG1vZHVsZUlkKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcGVyZm9ybVJlbG9hZCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmxvZykge1xuICAgICAgaWYoIXJlbmV3ZWRNb2R1bGVzIHx8IHJlbmV3ZWRNb2R1bGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltITVJdIE5vdGhpbmcgaG90IHVwZGF0ZWQuXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBVcGRhdGVkIG1vZHVsZXM6XCIpO1xuICAgICAgICByZW5ld2VkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uKG1vZHVsZUlkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJbSE1SXSAgLSBcIiArIChtb2R1bGVNYXBbbW9kdWxlSWRdIHx8IG1vZHVsZUlkKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodXBUb0RhdGUoKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltITVJdIEFwcCBpcyB1cCB0byBkYXRlLlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVFcnJvcihlcnIpIHtcbiAgICBpZiAobW9kdWxlLmhvdC5zdGF0dXMoKSBpbiBmYWlsdXJlU3RhdHVzZXMpIHtcbiAgICAgIGlmIChvcHRpb25zLndhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW0hNUl0gQ2Fubm90IGNoZWNrIGZvciB1cGRhdGUgKEZ1bGwgcmVsb2FkIG5lZWRlZClcIik7XG4gICAgICAgIGNvbnNvbGUud2FybihcIltITVJdIFwiICsgKGVyci5zdGFjayB8fCBlcnIubWVzc2FnZSkpO1xuICAgICAgfVxuICAgICAgcGVyZm9ybVJlbG9hZCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy53YXJuKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJbSE1SXSBVcGRhdGUgY2hlY2sgZmFpbGVkOiBcIiArIChlcnIuc3RhY2sgfHwgZXJyLm1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwZXJmb3JtUmVsb2FkKCkge1xuICAgIGlmIChyZWxvYWQpIHtcbiAgICAgIGlmIChvcHRpb25zLndhcm4pIGNvbnNvbGUud2FybihcIltITVJdIFJlbG9hZGluZyBwYWdlXCIpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCAnbGF6eXNpemVzJztcbmltcG9ydCBzaXRlSGVhZGVyIGZyb20gJy4vbW9kdWxlcy9zaXRlLWhlYWRlcic7XG5pbXBvcnQgYWxsY2xpY2sgZnJvbSAnLi9tb2R1bGVzL2FsbGNsaWNrJztcbmltcG9ydCBtb2RhbCBmcm9tICcuL21vZHVsZXMvbW9kYWwnO1xuaW1wb3J0IGZvcm1jb250cm9sIGZyb20gJy4vbW9kdWxlcy9mb3JtY29udHJvbCc7XG5cbnNpdGVIZWFkZXIuaW5pdCgpO1xuYWxsY2xpY2suaW5pdCgpO1xubW9kYWwuaW5pdCgpO1xuZm9ybWNvbnRyb2wuaW5pdCgpO1xuXG4vLyBkeW5hbWljIGltcG9ydHMgLSBzd2lwZXJzXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc3dpcGVyXScpLmxlbmd0aCA+IDApIHtcbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwic3dpcGVyc1wiICovICcuL21vZHVsZXMvc3dpcGVycycpLnRoZW4oc3dpcGVycyA9PiB7XG4gICAgc3dpcGVycyA9IHN3aXBlcnMuZGVmYXVsdDtcblxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zd2lwZXI9XCJoZXJvXCJdJykubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IHNsaWRlciA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc3dpcGVyPVwiaGVyb1wiXScpKTtcbiAgICAgIHNsaWRlci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIHN3aXBlcnMuaW5pdEhlcm9TbGlkZXIoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc3dpcGVyPVwiY2FyZHNcIl0nKS5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgc2xpZGVyID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zd2lwZXI9XCJjYXJkc1wiXScpKTtcbiAgICAgIHNsaWRlci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIHN3aXBlcnMuaW5pdENhcmRTbGlkZXIoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc3dpcGVyPVwiaW1hZ2UtY2Fyb3VzZWxcIl0nKS5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgc2xpZGVyID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zd2lwZXI9XCJpbWFnZS1jYXJvdXNlbFwiXScpKTtcbiAgICAgIHNsaWRlci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIHN3aXBlcnMuaW5pdENhcm91c2VsKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXN3aXBlcj1cInZpZGVvLWNhcm91c2VsXCJdJykubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IHNsaWRlciA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc3dpcGVyPVwidmlkZW8tY2Fyb3VzZWxcIl0nKSk7XG4gICAgICBzbGlkZXIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBzd2lwZXJzLmluaXRWaWRlb2dhbGxlcnkoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cblxuIiwiY29uc3QgZG9tID0ge1xuICBzZWxlY3RvcjogJy5qcy1hbGxjbGljaycsXG59O1xuXG5jb25zdCBhbGxjbGljayA9IChldnQpID0+IHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCBsaW5rID0gZXZ0LnRhcmdldC5jbG9zZXN0KGRvbS5zZWxlY3RvcikucXVlcnlTZWxlY3RvcignYScpLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICBsb2NhdGlvbi5ocmVmID0gbGluaztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICAgIGlmIChldnQudGFyZ2V0Lm1hdGNoZXMoYCR7ZG9tLnNlbGVjdG9yfSwke2RvbS5zZWxlY3Rvcn0gKmApKSB7XG4gICAgICAgIGFsbGNsaWNrKGV2dCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG59OyIsImZ1bmN0aW9uIHZhbGlkYV9lbWFpbCh0eHQpe1xuXHR2YXIgciA9IC9eKChcIltcXHctXFxzXStcIil8KFtcXHctXSsoPzpcXC5bXFx3LV0rKSopfChcIltcXHctXFxzXStcIikoW1xcdy1dKyg/OlxcLltcXHctXSspKikpKEAoKD86W1xcdy1dK1xcLikqXFx3W1xcdy1dezAsNjZ9KVxcLihbYS16XXsyLDZ9KD86XFwuW2Etel17Mn0pPykkKXwoQFxcWz8oKDI1WzAtNV1cXC58MlswLTRdWzAtOV1cXC58MVswLTldezJ9XFwufFswLTldezEsMn1cXC4pKSgoMjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV17Mn18WzAtOV17MSwyfSlcXC4pezJ9KDI1WzAtNV18MlswLTRdWzAtOV18MVswLTldezJ9fFswLTldezEsMn0pXFxdPyQpL2k7XG5cblx0aWYoci50ZXN0KHR4dCkpIHJldHVybiB0cnVlO1xuXHRlbHNlIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY29udHJvbGxhRm9ybShmb3JtX3RpcG8pe1xuXHR2YXIgY2hlY2sgPSB0cnVlO1xuXHR2YXIgb3V0cHV0ID0gJyc7XG5cdFxuXHRzd2l0Y2goZm9ybV90aXBvKSB7XG5cblx0XHRcdGNhc2UgJ2NvbnRhdHRpJzpcblxuXHRcdFx0XHRpZihkb2N1bWVudC5jb250YXR0aS5ub21lLnZhbHVlPT0nJyl7XG5cdFx0XHRcdFx0Y2hlY2sgPSBmYWxzZTtcblx0XHRcdFx0XHRvdXRwdXQgKz0gJ0luc2VyaXNjaSBpbCBub21lJytcIlxcblwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRpZihkb2N1bWVudC5jb250YXR0aS5jb2dub21lLnZhbHVlPT0nJyl7XG5cdFx0XHRcdFx0Y2hlY2sgPSBmYWxzZTtcblx0XHRcdFx0XHRvdXRwdXQgKz0gJ0luc2VyaXNjaSBpbCBjb2dub21lJytcIlxcblwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRpZighdmFsaWRhX2VtYWlsKGRvY3VtZW50LmNvbnRhdHRpLmVtYWlsLnZhbHVlKSl7XG5cdFx0XHRcdFx0Y2hlY2sgPSBmYWxzZTtcblx0XHRcdFx0XHRvdXRwdXQgKz0gJ0luc2VyaXNjaSB1biBpbmRpcml6em8gZS1tYWlsIGNvcnJldHRvJytcIlxcblwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRpZihkb2N1bWVudC5jb250YXR0aS5wcml2YWN5LmNoZWNrZWQgPT0gZmFsc2UgKXtcblx0XHRcdFx0XHRjaGVjayA9IGZhbHNlO1xuXHRcdFx0XHRcdG91dHB1dCArPSAnQWNjb25zZW50aSBhbCB0cmF0dGFtZW50byBkZWkgZGF0aScrXCJcXG5cXG5cIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRpZighY2hlY2spIGFsZXJ0KG91dHB1dCk7XG5cdFx0XHRyZXR1cm4gY2hlY2s7XG5cdFx0XHRcblx0XHRcdGJyZWFrO1xuXG5cdH1cbn0iLCJjb25zdCBkb20gPSB7XG4gIGhhbmRsZXM6ICdbZGF0YS1tb2RhbF0nLFxuICBtb2RhbHM6ICcubW9kYWwnLFxuICBjYXRhbG9nRm9ybTogJy53ZWJmb3JtLXN1Ym1pc3Npb24tY2F0YWxvZy1mb3JtJyxcbn07XG5cbmNvbnN0IGNsb3NlTW9kYWwgPSAoZXZ0KSA9PiB7XG4gIGlmICghZXZ0LnRhcmdldC5jbG9zZXN0KCcubW9kYWxfX2NvbnRlbnQnKSkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2dC50YXJnZXQuY2xvc2VzdChkb20ubW9kYWxzKS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gIH1cbn07XG5cbmNvbnN0IGNsb3NlTW9kYWxBZnRlclN1Ym1pdCA9IChldnQpID0+IHtcbiAgZXZ0LnRhcmdldC5jbG9zZXN0KGRvbS5tb2RhbHMpLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbn07XG5cbmNvbnN0IGV2ZW50cyA9ICgpID0+IHtcbiAgY29uc3QgaGFuZGxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChkb20uaGFuZGxlcykpO1xuICBjb25zdCBtb2RhbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZG9tLm1vZGFscykpO1xuICBjb25zdCBjYXRhbG9nRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZG9tLmNhdGFsb2dGb3JtKTtcblxuICBoYW5kbGVzLmZvckVhY2goKGhhbmRsZSkgPT4ge1xuICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2dC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbCcpKTtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgbW9kYWxzLmZvckVhY2goKG1vZGFsKSA9PiB7XG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbiAgfSk7XG5cbiAgaWYgKGNhdGFsb2dGb3JtKSB7XG4gICAgY2F0YWxvZ0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgY2xvc2VNb2RhbEFmdGVyU3VibWl0KTsgXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogZXZlbnRzLFxufTtcbiIsImNvbnN0IGRvbSA9IHtcbiAgc2l0ZUhlYWRlcjogJy5zaXRlLWhlYWRlcicsXG4gIG5hdlRvZ2dsZTogJy5qcy1uYXYtdG9nZ2xlJyxcbiAgc2l0ZU5hdjogJy5qcy1zaXRlLW5hdicsXG59O1xuXG5jb25zdCB0b2dnbGVOYXYgPSAoZXZ0KSA9PiB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZG9tLnNpdGVOYXYpO1xuXG4gIGV2dC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2Nsb3NlJyk7XG4gIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG59O1xuXG5jb25zdCBzZXRTY3JvbGxDbGFzcyA9IChldnQpID0+IHtcbiAgY29uc3Qgc2l0ZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZG9tLnNpdGVIZWFkZXIpO1xuXG4gIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAyMDApIHtcbiAgICBzaXRlSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbCcpO1xuICB9IGVsc2Uge1xuICAgIHNpdGVIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsJyk7XG4gIH1cbn1cblxuY29uc3QgZXZlbnRzID0gKCkgPT4ge1xuICBjb25zdCBuYXZUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRvbS5uYXZUb2dnbGUpO1xuICBuYXZUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVOYXYpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2V0U2Nyb2xsQ2xhc3MpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiAoKSA9PiB7XG4gICAgZXZlbnRzKCk7XG4gIH0sXG59OyJdLCJzb3VyY2VSb290IjoiIn0=