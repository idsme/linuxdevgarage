/*
 * Wallaby.js - v1.0.610
 * http://wallabyjs.com
 * Copyright (c) 2014-2018 Wallaby.js - All Rights Reserved.
 *
 * This source code file is a part of Wallaby.js and is a proprietary (closed source) software.

 * IMPORTANT:
 * Wallaby.js is a tool made by software developers for software developers with passion and love for what we do.
 * Pirating the tool is not only illegal and just morally wrong,
 * it is also unfair to other fellow programmers who are using it legally,
 * and very harmful for the tool and its future.
 */
var Q=require("q"),path=require("path"),tracer=global.$_$tracer,Runner,TestCollection,Test,runner,avaInstalled=!1,errorFormatter,format,onBeforeTest,onAfterTest;try{var nodeFs=require("fs"),originalRenameSync=nodeFs.renameSync;originalRenameSync.alreadyReplaced||(nodeFs.renameSync=function(e,t){var n=originalRenameSync.apply(this,arguments);if((".snap"===path.extname(t)||".md"===path.extname(t))&&0===t.indexOf(global.wallaby.projectCacheDir)){var i=require("fs-extra"),r=path.join(global.wallaby.localProjectDir,path.relative(global.wallaby.projectCacheDir,t));r&&(i.ensureDirSync(path.dirname(r)),nodeFs.writeFileSync(r,nodeFs.readFileSync(t)))}return n},nodeFs.renameSync.alreadyReplaced=!0);var Module=require("module").Module,modulePrototype=Module.prototype,originalRequire=modulePrototype.require;modulePrototype.require=function(e){if("ava"===e){var t=runner.test||runner.chain.test||runner.chain;return t["default"]=t,t.test=t,t}if("empower-core"===e){var n=originalRequire.call(this,e),i=function(){var e=arguments[1].onError;return arguments[1].onError=function(t){return t.originalMessage=t.error.message+"\n",e.apply(this,arguments)},n.apply(this,arguments)};return i.defaultOptions=n.defaultOptions,i}return originalRequire.call(this,e)};var changeTestMetadata=function(e){e.metadata.serial=!0,e.metadata.skipped=e.metadata.skipped||"test"===e.metadata.type&&tracer.hasSpecFilter()&&!tracer.specFilter([e.title]),e.metadata._testFile=tracer.entryFile()};try{require("ava/lib/worker-options").set({})}catch(e){}try{require("ava/lib/worker/options").set({})}catch(e){}try{var originalCreateChain=require("ava/lib/create-chain");require.cache[require.resolve("ava/lib/create-chain")].exports=function(){var e=arguments[0];return arguments[0]=function(t,n){return changeTestMetadata({metadata:t,title:"string"==typeof n[0]?n[0]:void 0}),e.apply(this,arguments)},originalCreateChain.apply(this,arguments)}}catch(e){}try{require("ava/lib/chalk").set({enabled:!1})}catch(e){}try{format=require("ava/lib/format-assert-error"),format.formatDiff=function(){};var originalFormatWithLabel=format.formatWithLabel;format.formatWithLabel=function(e,t){var n=originalFormatWithLabel.apply(this,arguments);return"Actual:"===e?(n.actualSet=!0,n.actual=t):("Must be strictly equal to:"===e||"Must be deeply equal to:"===e)&&(n.expectedSet=!0,n.expected=t),n}}catch(e){}var originalObjectDefineProperty=Object.defineProperty;Object.defineProperty=function(e,t,n){return"AssertionError"===t&&(n.writable=!0),originalObjectDefineProperty.apply(this,arguments)},require("ava/lib/assert"),Runner=require("ava/lib/runner"),Object.defineProperty=originalObjectDefineProperty;try{TestCollection=require("ava/lib/test-collection")}catch(e){TestCollection={prototype:{}}}Test=require("ava/lib/test"),errorFormatter=require("ava/lib/enhance-assert").formatter&&require("ava/lib/enhance-assert").formatter();var originalTestCollectionAdd=TestCollection.prototype.add;TestCollection.prototype.add=function(e){return changeTestMetadata(e),originalTestCollectionAdd.apply(this,arguments)};var originalRunnerAddTestResult=Runner.prototype._addTestResult||Runner.prototype.addTestResult;Runner.prototype.addTestResult=Runner.prototype._addTestResult=function(e){var t=originalRunnerAddTestResult.apply(this,arguments);return onAfterTest(e),t};var originalTestRun=Test.prototype.run;Test.prototype.run=function(){onBeforeTest(this);try{tracer.specSyncStart();var e=originalTestRun.apply(this,arguments);return!originalRunnerAddTestResult&&e.then&&e.then(function(e){return onAfterTest(e),e}),e}finally{tracer.specSyncEnd()}},avaInstalled=!0}catch(e){tracer.start(function(){tracer.reportGlobalError("ava node module is not found or the version is not supported, missing `npm install ava --save-dev`?\n"+(e.stack||""))}),module.exports={init:function(){return{configure:function(){}}}}}if(avaInstalled){var testFiles=[],util=require("util"),truncate=function(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e},getMessage=function(e){return truncate(util.inspect(e.actual),128)+" "+e.operator+" "+truncate(util.inspect(e.expected),128)};tracer.start(function(){var e=global.$_$session,t=!1,n=function(){return e!==global.$_$session},i=function(){t||n()||(t=!0,tracer.complete())},r=function(e){return"test"!==e.metadata.type},s=tracer.initialSpecId();tracer.started({total:"unknown number of"});var o=Q.when(!0);testFiles.forEach(function(e){o=o.then(function(){try{require("ava/lib/globals").options={file:e},delete require("ava/lib/snapshot-state").state}catch(t){}runner=new Runner({file:e,projectDir:global.wallaby.projectCacheDir,updateSnapshots:!!tracer._manualTestRun}),onBeforeTest=function(e){n()||r(e)||(e.metadata._id=e._id=++s,tracer.specStart(e._id,e.title))},originalRunnerAddTestResult||(runner.on("test",function(e){onAfterTest(e)}),runner.on("hook-failed",function(e){onAfterTest(e)})),onAfterTest=function(e){if(!n()){var t=e.passed;e=e.result?e.result:e;var i=r(e);if(!t||!i){var s=tracer.specEnd(),o={id:e._id||e.metadata._id,timeRange:s,name:e.title,suite:[],success:t,skipped:e.metadata.skipped||e.metadata.todo,time:e.duration,log:[],hook:i?e.metadata.type:void 0,testFile:e.metadata&&e.metadata._testFile||void 0};if(!o.success&&!o.skipped){var a=e.assertError||e.error;"Error thrown in test"===a.message&&delete a.message,a.powerAssertContext&&errorFormatter&&(a.message=errorFormatter(a.powerAssertContext)),a.showDiff=!0;var l={message:a.message,stack:a.stack};/^\s+$/.test(l.message)?l.message=getMessage(a):!l.message&&format?l.message=format.formatSerializedError(a):a.values&&a.values.length&&(l.message=(l.message?l.message+"\n":"")+a.values[0].formatted),a.raw&&(a.actual=a.raw.actual,a.expected=a.raw.expected),tracer.setAssertionData(a,l),o.log.push(l)}o.log.length||delete o.log,tracer.result(o)}}};try{require(e);var i=function(){runner.saveSnapshotState&&runner.saveSnapshotState()};return runner.run?runner.run({}).then(i):Q.promise(function(e){runner.on("error",function(e){throw e}),runner.on("start",function(t){return e(t.ended.then(i))}),runner.on("finish",function(){return e(Q.when(i))}),runner.start(),runner.start=function(){}})}catch(t){return tracer.reportDeclarationError(t),Q.when(!0)}})}),o.then(i)}),module.exports={init:function(e){testFiles=e}}}