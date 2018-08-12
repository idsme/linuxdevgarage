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
var ipc,electron=require("electron"),currentRequestId=0;if(global.window){try{Error.stackTraceLimit=50}catch(e){}ipc=electron.ipcRenderer,ipc.on("message",function(event,msg){eval(msg.code),ipc.send("message",{id:msg.id})})}else{process.setFdLimit&&process.setFdLimit(8192),process.on("uncaughtException",function(e){e&&e.message&&host&&host._send({type:"error",error:{message:e.message,stack:e.stack}})});var fs=require("fs"),_=require("lodash");ipc=electron.ipcMain;var app=electron.app,BrowserWindow=electron.BrowserWindow;"darwin"===process.platform&&app.dock.hide();var Host=function(){this._pages=Object.create(null),this._callbacks=Object.create(null)};Host.prototype={stop:function(){app.exit(0)},closePage:function(e){var t=e.pageId;this._destroyExistingPage(t)},evaluateOnPage:function(e,t){var n=e.pageId,i=this._pages[n];this._requestWithCorrelationId(i,{code:e.action},t)},openPage:function(e,t){var n=e.pageId,i=e.url,r=_.defaults(e.options||{},{width:800,height:600,show:!1,skipTaskbar:!0,webPreferences:{}});r.webPreferences.nodeIntegration=r.webPreferences.nodeIntegration||!1,r.webPreferences.preload=__filename,this._destroyExistingPage(n);var s=this._pages[n]=new BrowserWindow(r);s.loadURL(i),s.webContents.on("did-finish-load",function(){t({status:"success"})}),s.webContents.on("did-fail-load",function(){t({status:"failed"})})},capturePage:function(e,t){var n=e.pageId,i=this._pages[n];i?i.capturePage(function(n){fs.writeFile(e.file,n.toPng(),function(){t()})}):t()},_destroyExistingPage:function(e){var t=this._pages[e];t&&(t.destroy(),delete this._pages[e])},_send:function(e){process.send(e)},_requestWithCorrelationId:function(e,t,n){var i=this,r=++currentRequestId,s=i._callbacks[r]={done:n};t.id=r,e.webContents.send("message",t),s.timeout=setTimeout(function(){delete i._callbacks[r]},12e5)},_responseWithCorrelationId:function(e){var t=this._callbacks[e.id];delete this._callbacks[e.id],t&&(clearTimeout(t.timeout),t.done(e))}};var host=new Host;process.on("message",function(e){try{var t=host[e.type];t&&(e.id?t.call(host,e,function(t){t=t||{},t.id=e.id,host._send(t)}):t.call(host,e))}catch(n){host._send({type:"error",error:{message:n.message,stack:n.stack}})}}),ipc.on("message",function(e,t){t.id&&host._responseWithCorrelationId(t)}),ipc.on("resizeWindow",function(e,t){var n=host._pages[t.pageId];if(n){var i=n.getSize();n.setSize(t.width||i[0],t.height||i[1]),n.webContents.send("resizeWindow")}}),app.on("ready",function(){host._send({type:"ready"})}),app.on("before-quit",function(e){e.preventDefault()})}