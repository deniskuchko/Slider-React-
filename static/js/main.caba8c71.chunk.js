(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,function(t,e,n){t.exports={points:"Points_points__1sLTj",point:"Points_point__3-o3o"}},,,function(t,e,n){t.exports=n.p+"static/media/back.290174b6.svg"},function(t,e,n){t.exports=n.p+"static/media/next.ff2b9671.svg"},function(t,e,n){t.exports={arrow:"Arrow_arrow__3tdyW"}},function(t,e,n){t.exports={slider:"Slider_slider__1jKqR"}},,function(t,e,n){t.exports=n(17)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=(n(15),n(16),n(1)),s=n(9),l=n(5),u=n.n(l),d=n(6),f=n.n(d),p=n(7),m=n.n(p);function h(t){var e=t.directions,n=t.handleClick;return r.a.createElement("div",{onClick:n,className:m.a.arrow,onTouchMove:function(t){return n(t)},style:{right:"".concat("right"===e&&"25px"),left:"".concat("left"===e&&"25px")}},"right"===e?r.a.createElement("img",{style:{transform:"translateX(-2px)"},src:f.a}):r.a.createElement("img",{style:{transform:"translateX(2px)"},src:u.a}))}var b=n(2),v=n.n(b),x=function(t){var e=t.active,n=t.index,a=t.clickSpan;return r.a.createElement("span",{className:v.a.point,style:{background:"".concat(e?"black":"white")},onClick:function(){a(n)}})};function g(t){var e=t.slide,n=t.indexOfSlider,a=t.clickSpan;return r.a.createElement("div",{className:v.a.points},e.map((function(t,e){return r.a.createElement(x,{key:t,active:n===e,index:e,clickSpan:a})})))}function O(t){return r.a.createElement("div",{style:{backgroundImage:"url(".concat(t.contents,")"),width:"100%",height:"100%",backgroundPosition:"center",backgroundSize:"cover"}})}function w(t){var e=t.slide;return r.a.createElement("div",{style:{transform:"translateX(-".concat(t.translate,"px)"),transition:"transform ".concat(t.transition,"s ease-out 0s"),height:"100%",width:"".concat(t.width,"px"),display:"flex"}},e.map((function(t,e){return r.a.createElement(O,{key:e,contents:t})})))}var E=n(8),k=n.n(E),y=function(){return window.innerWidth};function j(t){var e=t.props,n=Object(a.useState)({indexOfSlider:0,translate:0,transition:.45}),i=Object(s.a)(n,2),c=i[0],l=i[1],u=c.indexOfSlider,d=c.transition,f=c.translate,p=Object(a.useRef)();Object(a.useEffect)((function(){p.current=m})),Object(a.useEffect)((function(){if(null!=t.play){var e=setInterval((function(){p.current()}),1e3*t.play);return function(){return clearInterval(e)}}}),[t.play]);var m=function(){if(u===e.length-1)return l(Object(o.a)(Object(o.a)({},c),{},{translate:0,indexOfSlider:0}));l(Object(o.a)(Object(o.a)({},c),{},{indexOfSlider:u+1,translate:(u+1)*y()}))};return r.a.createElement("div",{className:k.a.slider},r.a.createElement(w,{transition:d,translate:f,width:y()*e.length,slide:e}),!t.play&&r.a.createElement("div",null,r.a.createElement(h,{directions:"left",handleClick:function(){if(0===u)return l(Object(o.a)(Object(o.a)({},c),{},{translate:(e.length-1)*y(),indexOfSlider:e.length-1}));l(Object(o.a)(Object(o.a)({},c),{},{indexOfSlider:u-1,translate:(u-1)*y()}))}}),r.a.createElement(h,{directions:"right",handleClick:m})),r.a.createElement(g,{slide:e,indexOfSlider:u,clickSpan:function(t){l(Object(o.a)(Object(o.a)({},c),{},{indexOfSlider:t,translate:t*y()}))}}))}var S=function(t){return r.a.createElement("div",{className:"App"},r.a.createElement(j,t))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,{props:["https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80","https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1460&q=80","https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80","https://images.unsplash.com/photo-1516893842880-5d8aada7ac05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"]})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.caba8c71.chunk.js.map