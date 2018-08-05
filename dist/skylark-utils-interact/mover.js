/**
 * skylark-utils-interact - The interact features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0-beta
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-utils/skylark","skylark-utils/langx","skylark-utils/noder","skylark-utils/datax","skylark-utils/geom","skylark-utils/eventer","skylark-utils/styler"],function(e,t,o,r,a,n,i){function h(e,t,r,n){var i=o.ownerDoc(e),h=o.ownerWindow(i),s=a.size(h);s.left=0,s.top=0,e.parentNode&&"body"==String(e.parentNode.tagName).toLowerCase()||i.body.appendChild(e);var d=null;return u.apply(t,function(t){var o=t.corner,i=t.pos,h=0,l={w:{L:s.left+s.width-i.x,R:i.x-s.left,M:s.width}[o.charAt(1)],h:{T:s.top+s.height-i.y,B:i.y-s.top,M:s.height}[o.charAt(0)]};if(r){var c=r(e,t.aroundCorner,o,l,n);h="undefined"==typeof c?0:c}var u=a.size(e),f={L:i.x,R:i.x-u.width,M:Math.max(s.left,Math.min(s.left+s.width,i.x+(u.width>>1))-u.width)}[o.charAt(1)],m={T:i.y,B:i.y-u.height,M:Math.max(s.top,Math.min(s.top+s.height,i.y+(u.height>>1))-u.height)}[o.charAt(0)],p=Math.max(s.left,f),y=Math.max(s.top,m),v=Math.min(s.left+s.width,f+u.width),g=Math.min(s.top+s.height,m+u.height),w=v-p,x=g-y;return h+=u.width-w+(u.height-x),(null==d||h<d.overflow)&&(d={corner:o,aroundCorner:t.aroundCorner,left:p,top:y,width:w,height:x,overflow:h,spaceAvailable:l}),!h}),d.overflow&&r&&r(e,d.aroundCorner,d.corner,d.spaceAvailable,n),a.boundingPosition(e,d),d}function s(e,t,o,r,a){var n=f.apply(o,function(e){var o={corner:e,aroundCorner:reverse[e],pos:{x:t.x,y:t.y}};return r&&(o.pos.x+="L"==e.charAt(1)?r.x:-r.x,o.pos.y+="T"==e.charAt(0)?r.y:-r.y),o});return h(e,n,a)}function d(e,t,o,r,a){function n(e,t){M.push({aroundCorner:e,corner:t,pos:{x:{L:g,R:g+x,M:g+(x>>1)}[e.charAt(1)],y:{T:w,B:w+b,M:w+(b>>1)}[e.charAt(0)]}})}var i;if("string"==typeof t||"offsetWidth"in t||"ownerSVGElement"in t){if(i=domGeometry.position(t,!0),/^(above|below)/.test(o[0])){var s=domGeometry.getBorderExtents(t),d=t.firstChild?domGeometry.getBorderExtents(t.firstChild):{t:0,l:0,b:0,r:0},l=domGeometry.getBorderExtents(e),c=e.firstChild?domGeometry.getBorderExtents(e.firstChild):{t:0,l:0,b:0,r:0};i.y+=Math.min(s.t+d.t,l.t+c.t),i.h-=Math.min(s.t+d.t,l.t+c.t)+Math.min(s.b+d.b,l.b+c.b)}}else i=t;if(t.parentNode)for(var u="absolute"==domStyle.getComputedStyle(t).position,f=t.parentNode;f&&1==f.nodeType&&"BODY"!=f.nodeName;){var m=domGeometry.position(f,!0),p=domStyle.getComputedStyle(f);if(/relative|absolute/.test(p.position)&&(u=!1),!u&&/hidden|auto|scroll/.test(p.overflow)){var y=Math.min(i.y+i.h,m.y+m.h),v=Math.min(i.x+i.w,m.x+m.w);i.x=Math.max(i.x,m.x),i.y=Math.max(i.y,m.y),i.h=y-i.y,i.w=v-i.x}"absolute"==p.position&&(u=!0),f=f.parentNode}var g=i.x,w=i.y,x="w"in i?i.w:i.w=i.width,b="h"in i?i.h:(kernel.deprecated("place.around: dijit/place.__Rectangle: { x:"+g+", y:"+w+", height:"+i.height+", width:"+x+" } has been deprecated.  Please use { x:"+g+", y:"+w+", h:"+i.height+", w:"+x+" }","","2.0"),i.h=i.height),M=[];array.forEach(o,function(e){var t=r;switch(e){case"above-centered":n("TM","BM");break;case"below-centered":n("BM","TM");break;case"after-centered":t=!t;case"before-centered":n(t?"ML":"MR",t?"MR":"ML");break;case"after":t=!t;case"before":n(t?"TL":"TR",t?"TR":"TL"),n(t?"BL":"BR",t?"BR":"BL");break;case"below-alt":t=!t;case"below":n(t?"BL":"BR",t?"TL":"TR"),n(t?"BR":"BL",t?"TR":"TL");break;case"above-alt":t=!t;case"above":n(t?"TL":"TR",t?"BL":"BR"),n(t?"TR":"TL",t?"BR":"BL");break;default:n(e.aroundCorner,e.corner)}});var k=h(e,M,a,{w:x,h:b});return k.aroundNodePos=i,k}function l(e,t){function r(e){var t,o;if(e.changedTouches)for(t="screenX screenY pageX pageY clientX clientY".split(" "),o=0;o<t.length;o++)e[t[o]]=e.changedTouches[0][t[o]]}t=t||{};var h,s,d,l,c,u,f,m,p=t.handle||e,y=t.auto!==!1,v=t.constraints,g=t.document||document,w=t.started,x=t.moving,b=t.stopped,d=function(t){var d,y=a.getDocumentSize(g);r(t),t.preventDefault(),s=t.button,c=t.screenX,u=t.screenY,f=a.relativePosition(e),m=a.size(e),d=i.css(p,"curosr"),h=o.createElement("div"),i.css(h,{position:"absolute",top:0,left:0,width:y.width,height:y.height,zIndex:2147483647,opacity:1e-4,cursor:d}),o.append(g.body,h),n.on(g,"mousemove touchmove",M).on(g,"mouseup touchend",l),w&&w(t)},M=function(t){if(r(t),0!==t.button)return l(t);if(t.deltaX=t.screenX-c,t.deltaY=t.screenY-u,y){var o=f.left+t.deltaX,n=f.top+t.deltaY;v&&(o<v.minX&&(o=v.minX),o>v.maxX&&(o=v.maxX),n<v.minY&&(n=v.minY),n>v.maxY&&(n=v.maxY))}a.relativePosition(e,{left:o,top:n}),t.preventDefault(),x&&x(t)},l=function(e){r(e),n.off(g,"mousemove touchmove",M).off(g,"mouseup touchend",l),o.remove(h),b&&b(e)};return n.on(p,"mousedown touchstart",d),{remove:function(){n.off(p)}}}function c(){return c}var u=(n.on,n.off,r.attr,r.removeAttr,a.pagePosition,i.addClass,a.height,Array.prototype.some),f=Array.prototype.map;return t.mixin(c,{around:d,at:s,movable:l}),e.mover=c});
//# sourceMappingURL=sourcemaps/mover.js.map
