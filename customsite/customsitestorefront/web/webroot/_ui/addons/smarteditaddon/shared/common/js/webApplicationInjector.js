/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */
!function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd?define(t):this.$script=t()}(0,function(){function e(e,t){for(var n=0,o=e.length;n<o;++n)if(!t(e[n]))return c;return 1}function t(t,n){e(t,function(e){return!n(e)})}function n(a,i,s){function c(e){return e.call?e():l[e]}function d(){if(!--w){l[v]=1,g&&g();for(var n in m)e(n.split("|"),c)&&!t(m[n],c)&&(m[n]=[])}}a=a[u]?a:[a];var f=i&&i.call,g=f?i:s,v=f?a.join(""):i,w=a.length;return setTimeout(function(){t(a,function e(t,n){return null===t?d():(!n&&!/^https?:\/\//.test(t)&&r&&(t=-1===t.indexOf(".js")?r+t+".js":r+t),h[t]?(v&&(p[v]=1),2==h[t]?d():setTimeout(function(){e(t,!0)},0)):(h[t]=1,v&&(p[v]=1),void o(t,d)))})},0),n}function o(e,t){var n,o=i.createElement("script");o.onload=o.onerror=o[f]=function(){o[d]&&!/^c|loade/.test(o[d])||n||(o.onload=o[f]=null,n=1,h[e]=2,t())},o.async=1,o.src=a?e+(-1===e.indexOf("?")?"?":"&")+a:e,s.insertBefore(o,s.lastChild)}var r,a,i=document,s=i.getElementsByTagName("head")[0],c=!1,u="push",d="readyState",f="onreadystatechange",l={},p={},m={},h={};return n.get=o,n.order=function(e,t,o){!function r(a){a=e.shift(),e.length?n(a,r):n(a,t,o)}()},n.path=function(e){r=e},n.urlArgs=function(e){a=e},n.ready=function(o,r,a){var i=[];return!t(o=o[u]?o:[o],function(e){l[e]||i[u](e)})&&e(o,function(e){return l[e]})?r():function(e){m[e]=m[e]||[],m[e][u](r),a&&a(i)}(o.join("|")),n},n.done=function(e){n([null],e)},n}),/*
 * [y] hybris Platform
 *
 * Copyright (c) 2018 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
parent.postMessage({pk:Math.random(),gatewayId:"smartEditBootstrap",eventId:"loading",data:{location:document.location.href}},"*"),function e(){parent.postMessage({pk:Math.random(),gatewayId:"heartBeatGateway",eventId:"heartBeat",data:{location:document.location.href}},"*"),setTimeout(e,500)}(),window.addEventListener("load",function(e){parent.postMessage({pk:Math.random(),gatewayId:"smartEditBootstrap",eventId:"bootstrapSmartEdit",data:{location:document.location.href}},"*")});var injectJS=function(e,t,n){n<t.length&&$script(t[n],function(){injectJS(e,t,n+1)})},injectCSS=function(e,t,n){var o=document.createElement("link");o.rel="stylesheet",o.href=t[n],e.appendChild(o),n+1<t.length&&injectCSS(e,t,n+1)};
// Listen to message from child window
window.addEventListener("message",function(e){
//	var originControl = '127.0.0.1:7000';
//
//	if(e.origin.indexOf(originControl)==-1){
//		throw e.origin+" is not allowed to override this storefront";
//	}
var t=e.data;if("smarteditBootstrap"===t.eventName){if(window.smartedit=window.smartedit||{},t.resources&&t.resources.properties)for(var n in t.resources.properties)window.smartedit[n]=t.resources.properties[n];var o=document.getElementsByTagName("head")[0];
//JS Files
t.resources&&t.resources.js&&t.resources.js.length>0&&injectJS(o,t.resources.js,0),
//CSS Files
t.resources&&t.resources.css&&t.resources.css.length>0&&injectCSS(o,t.resources.css,0)}},!1);