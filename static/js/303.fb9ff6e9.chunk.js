"use strict";(self.webpackChunkmortal_wombat=self.webpackChunkmortal_wombat||[]).push([[303],{303:function(e,n,t){t.r(n);var r=t(791),o=t(250),a=t(413),i=t(885),s=t(942),l=t(457),c=t(63),u=function(e,n){var t=(0,r.useState)({}),o=(0,i.Z)(t,2),a=o[0],s=o[1];return(0,r.useEffect)((function(){return(0,c.oL)("users",(function(e){return s(function(e){return(0,l.HK)((function(e){return e.email}),Object.values(e))}(e))}),n)}),[e]),a},d={KeyS:"down",KeyA:"left",KeyW:"up",KeyD:"right",ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right"},f=(0,l.Ds)((function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];location.hash=n.join("/")}),1e3),p=t(408),h=15e3,m=(0,l.M8)(),v=function(e){var n=0;for(var t in e)n=Math.max(n,e[t].tstamp);return n},y=function(e,n){var t=(0,r.useState)({}),o=(0,i.Z)(t,2),a=o[0],s=o[1];return(0,r.useEffect)((function(){if(n)return(0,c.oL)("worlds/".concat(n,"/cursors"),s,e)}),[n]),(0,r.useEffect)((function(){Math.random()<.01&&function(e,n,t){var r={},o=v(e);for(var a in e)o-e[a].tstamp>h&&(r["worlds/".concat(n,"/cursors/").concat(a)]=null);(0,c.Vx)(r,t)}(a,n,e)}),[a,n]),a},x=(0,l.P2)((function(e,n,t,r,o,a,i,l){r&&(0,c.Vx)((0,s.Z)({},"worlds/".concat(r,"/cursors/").concat(m),{user:e.email,mouseX:n,mouseY:t,left:o-innerWidth/i/2,top:a-innerHeight/i/2,width:innerWidth/i,height:innerHeight/i,tstamp:(0,p.Bt)()}),l)}),500),b=t(184),w=function(e){var n=e.className,t=e.hide,r=e.label,o=e.children;return(0,b.jsxs)("div",{className:"pane ".concat(n),children:[(0,b.jsxs)("div",{className:"paneHeader",children:[(0,b.jsx)("a",{onClick:t,children:(0,b.jsx)("i",{className:"fa-solid fa-x"})}),(0,b.jsx)("strong",{children:r})]}),(0,b.jsx)("div",{className:"paneBody",children:o})]})},g=function(e,n){var t=(0,r.useState)(void 0===localStorage[e]?n:function(e,n){try{return JSON.parse(e)}catch(t){return console.error(t),n}}(localStorage[e],n)),o=(0,i.Z)(t,2),a=o[0],s=o[1];return(0,r.useEffect)((function(){localStorage[e]=JSON.stringify(a)}),[a]),[a,s]},j=function(e){var n=e.errors,t=e.clearError;return Object.keys(n).length>0&&(0,b.jsx)("div",{className:"errorBanner",children:Object.entries(n).map((function(e){var n=(0,i.Z)(e,2),r=n[0],o=n[1];return(0,b.jsxs)("div",{children:[o," ",(0,b.jsx)("a",{onClick:function(){return t(r)},children:"[x]"})]},r)}))})},C=t(861),T=t(757),k=t.n(T),Z=function(e){var n=e.onError,t=(0,r.useState)(""),o=(0,i.Z)(t,2),a=o[0],s=o[1],l=(0,r.useState)(""),u=(0,i.Z)(l,2),d=u[0],f=u[1];return(0,b.jsx)("div",{style:{width:300,margin:"50px auto"},children:(0,b.jsxs)("form",{className:"login",onSubmit:function(){var e=(0,C.Z)(k().mark((function e(t){return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,(0,c.Ib)(a,d);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),n(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n){return e.apply(this,arguments)}}(),children:[(0,b.jsx)("input",{type:"email",placeholder:"email",value:a,onChange:function(e){return s(e.target.value)}}),(0,b.jsx)("input",{type:"password",placeholder:"password",value:d,onChange:function(e){return f(e.target.value)}}),(0,b.jsx)("button",{style:{width:"100%"},children:"Log In"})]})})},S=t(546),N=function(e){var n=e.tileTypes,t=e.selectedTileTypeId,r=e.setSelectedTileTypeId,o=e.showTileTypeEditor,a=e.setShowTileTypeEditor;return(0,b.jsxs)("div",{className:"toolBar",children:[(0,b.jsx)("div",{className:"tileType",onClick:function(){a(!1),r()},children:(0,b.jsx)("label",{children:"None"})}),Object.values(n).sort((function(e,n){return e.order-n.order})).map((function(e){return(0,b.jsx)("div",{className:"tileType"+(t===e.id?" selected":""),style:{background:(0,S.V)(e)},title:o?"":"Double click to edit tile properties.",onClick:function(){a(!1),r(e.id)},onDoubleClick:function(){return e.id&&!e.id.startsWith("_")&&a(!0)},children:(0,b.jsx)("label",{children:e.label})},e.label)}))]})},E=t(918),I=function(e,n,t){var r,o=(0,E.v0)().currentUser.email,i=(0,p.Bt)();return(0,c.Vx)((r={},(0,s.Z)(r,"worlds/".concat(e,"/world/").concat(n.x,"_").concat(n.y),"_delete"===n.tileType?null:(0,a.Z)((0,a.Z)({},n),{},{user:o,tstamp:i})),(0,s.Z)(r,"worlds/".concat(e,"/lastEdited"),i),(0,s.Z)(r,"worlds/".concat(e,"/lastEditedBy"),o),r),t)},L=t(762),W=[{label:"year",amount:31536e6},{label:"month",amount:2592e6},{label:"week",amount:6048e5},{label:"day",amount:864e5},{label:"hour",amount:36e5},{label:"minute",amount:6e4},{label:"second",amount:1e3}],H=function(e){if(isNaN(e))return"???";var n,t=(0,L.Z)(W);try{for(t.s();!(n=t.n()).done;){var r=n.value,o=r.label,a=r.amount;if(a<=e){var i=Math.floor(e/a);return"".concat(i," ").concat(o).concat(1===i?"":"s"," ago")}}}catch(s){t.e(s)}finally{t.f()}return"just now"},D=32,M=function(e){var n=e.cursors,t=e.userIndex,o=e.scale,a=v(n);return Object.entries(n).map((function(e){var n,s,l=(0,i.Z)(e,2),c=l[0],u=l[1],d=u.user,f=u.left,p=u.top,v=u.width,y=u.height,x=u.tstamp,w=u.mouseX,g=u.mouseY;if(c===m||a-x>h)return null;var j=1-(a-x)/h;return(0,b.jsxs)(r.Fragment,{children:[(0,b.jsx)("div",{className:"cursorView",style:{transform:"translate(".concat(f*D,"px, ").concat(p*D,"px)"),width:v*D,height:y*D,opacity:j},children:(0,b.jsx)("span",{style:{fontSize:2560/o+"%"},children:(null===(n=t[d])||void 0===n?void 0:n.name)||d})}),w&&g?(0,b.jsxs)("div",{className:"mouseCursor",style:{transform:"translate(".concat((w+.5)*D,"px, ").concat((g+.5)*D,"px) scale(").concat(D/o,") "),opacity:j},children:[(0,b.jsx)("i",{className:"fa-solid fa-arrow-pointer"}),(0,b.jsx)("span",{children:(null===(s=t[d])||void 0===s?void 0:s.name)||d})]}):null]},c)}))},P=function(e,n,t,r){return{x:Math.floor((e.clientX-innerWidth/2)/n)+t,y:Math.floor((e.clientY-innerHeight/2)/n)+r}},O=function(e,n,t){var r;if(!e||!n)return"";var o=(null===(r=t[e])||void 0===r?void 0:r.name)||e;return"Placed by ".concat(o," ").concat(H(Date.now()-n))},A=function(e){var n=e.world,t=e.tileTypeIndex,r=e.userIndex,o=e.setTileLogicCoords;return Object.entries(n).map((function(e){var n=(0,i.Z)(e,2),a=n[0],s=n[1],l=s.x,c=s.y,u=s.tileType,d=s.user,f=s.tstamp;return(0,b.jsx)("div",{className:"tile",title:O(d,f,r),style:{transform:"translate(".concat(l*D,"px, ").concat(c*D,"px)"),background:(0,S.V)(t[u])},onDoubleClick:function(){return o({x:l,y:c})}},a)}))},B=(0,r.memo)(A),V=function(e){var n=e.world,t=e.tileTypes,o=e.selectedTileTypeId,a=e.onError,i=e.worldId,s=e.xCoord,c=e.yCoord,u=e.scale,d=e.user,f=e.cursors,p=e.userIndex,h=e.tileLogicCoords,m=e.setTileLogicCoords,v=(0,r.useRef)(),y=(0,r.useMemo)((function(){return(0,l.HK)((function(e){return e.id}),(0,l.aW)(t))}),[t]),w=function(e){var t=P(e,u,s,c),r=t.x,l=t.y;if(e.altKey)return window.open(location.href.replace(/\?.*/,"")+"#"+btoa(JSON.stringify({worldId:i,x:r,y:l})),"_blank"),e.preventDefault(),!1;var d,f=null===(d=n["".concat(r,"_").concat(l)])||void 0===d?void 0:d.tileType,p=e.shiftKey?"_delete":o;p&&(f||"_delete"!==p)&&f!==p&&I(i,{x:r,y:l,tileType:p},a)},g=(0,r.useCallback)((function(e){var n,t=P(e,u,s,c),r=t.x,l=t.y;o&&((null===(n=v.current)||void 0===n?void 0:n.style).transform="translate(".concat(r*D,"px, ").concat(l*D,"px)"),e.buttons&&w(e));x(d,r,l,i,s,c,u,a)}),[u,i,s,c,o,d]),j=innerWidth/2-s*D,C=innerHeight/2-c*D;return(0,b.jsx)("div",{id:"worldEditor",className:"world",onClick:w,onMouseMove:g,children:(0,b.jsxs)("div",{style:{transformOrigin:"".concat(innerWidth/2,"px ").concat(innerHeight/2,"px"),transform:"scale(".concat(u/D,") translate(").concat(j,"px,").concat(C,"px)")},children:[(0,b.jsx)(M,{cursors:f,userIndex:p,scale:u}),(0,b.jsx)(B,{world:n,tileTypeIndex:y,userIndex:p,setTileLogicCoords:m}),o&&(0,b.jsx)("div",{ref:v,className:"ghost tile",style:{background:(0,S.V)(y[o])}}),h&&(0,b.jsx)("div",{style:{transform:"translate(".concat(h.x*D,"px, ").concat(h.y*D,"px)")},className:"selected tile"})]})})},K=t(147),Y=function(e){var n,t=e.user,r=e.setScale,o=e.zoomAmt,a=e.userIndex,i=e.children;return(0,b.jsxs)("nav",{children:[t&&(0,b.jsxs)("div",{style:{float:"right"},children:[(0,b.jsx)("a",{onClick:function(){return r((function(e){return Math.round(e*o)}))},children:(0,b.jsx)("i",{className:"fa-solid fa-magnifying-glass-plus"})}),(0,b.jsx)("a",{onClick:function(){return r((function(e){return Math.round(e/o)}))},children:(0,b.jsx)("i",{className:"fa-solid fa-magnifying-glass-minus"})}),"Hi, ",(null===(n=a[t.email])||void 0===n?void 0:n.name)||t.email,"!",(0,b.jsx)("a",{onClick:c.ni,children:"log out"})]}),(0,b.jsxs)("b",{children:["MW Collabitat v",K.i8]}),i]})},R=t(415),U={text:function(e){var n=e.value,t=void 0===n?"":n,r=e.onChange;return(0,b.jsx)("input",{type:"text",value:t,onChange:function(e){return r(e.target.value)}})},number:function(e){var n=e.value,t=void 0===n?"":n,r=e.onChange;return(0,b.jsx)("input",{type:"number",value:t,onChange:function(e){return r(e.target.value)}})},checkbox:function(e){var n=e.value,t=void 0!==n&&n,r=e.onChange;return(0,b.jsx)("input",{type:"checkbox",checked:t,onChange:function(e){return r(e.target.checked)}})},select:function(e){var n=e.value,t=e.onChange,r=e.options;return(0,b.jsxs)("select",{value:n,onChange:function(e){return t(e.target.value)},children:[(0,b.jsx)("option",{}),r.map((function(e){var n=e.label,t=e.value;return(0,b.jsx)("option",{value:t,children:n},n)}))]})},code:function(e){var n=e.value,t=e.onChange;return(0,b.jsx)(R.ZP,{height:400,width:800,theme:"vs-dark",defaultLanguage:"javascript",value:n,onChange:t})}},_=function(e){var n=e.fields,t=e.data,r=e.onChange;return n.map((function(e){var n=e.prop,o=e.label,a=e.type,i=e.info,s=e.show,l=e.options;if(s&&!s(t))return null;var c=U[a];return(0,b.jsxs)("div",{title:i,children:[(0,b.jsx)("label",{children:o}),(0,b.jsx)(c,{value:null===t||void 0===t?void 0:t[n],onChange:function(e){return r(e,n)},options:l})]},n)}))},X=[{prop:"label",label:"Label",type:"text",info:"The label you see in the tool bar below."},{prop:"image",label:"Image URL",type:"text",info:"The image. uhduhhhh"},{prop:"color",label:"Color",type:"text",info:"The color to use if there is no image"},{prop:"hp",label:"HP",type:"number",info:"How much health does it have?"},{prop:"movable",label:"Movable",type:"checkbox",info:"Can you move it?"},{prop:"moveDelay",label:"Move Delay",type:"number",info:"How many frames does it wait to move? Smaller is faster."},{prop:"density",label:"Density",type:"number",info:"Air density is 0. Wombat density is 1. Wombat floats when density is >1, sinks when <1.",show:function(e){return parseInt(e.moveDelay)}},{prop:"moveStyle",label:"Move Style",type:"select",info:"How does it move?",options:[{label:"Liquid",value:"liquid"},{label:"Patrol",value:"patrol"}],show:function(e){return parseInt(e.moveDelay)}},{prop:"healing",label:"Healing",type:"number",info:"How much does it heal (or hurt) when you eat/touch it (per frame)?"},{prop:"edible",label:"Edible",type:"checkbox",info:"Can you eat it?"},{prop:"makePoop",label:"Make Poop",type:"number",info:"How much poop does it make?",show:function(e){return e.edible}},{prop:"diggable",label:"Diggable",type:"checkbox",info:"Can you dig it?",show:function(e){return!e.edible}},{prop:"collectible",label:"Collectible",type:"checkbox",info:"Can you collect it?",show:function(e){return!e.edible&&!e.movable}},{prop:"dropsLoot",label:"Drops Loot",type:"select",info:"What kind of loot does it drop?",options:[{label:"Jewel",value:"j"}],show:function(e){return e.diggable&&e.hp}},{prop:"order",label:"Order",type:"number",info:"The order it shows up in the toolbar below"}],z=function(e){var n=e.selectedTileTypeId,t=e.tileTypes,r=e.onError,o=(0,l.aW)(t).find((function(e){return e.id===n}));return o&&(0,b.jsxs)("div",{className:"tileTypeEditor",children:[(0,b.jsxs)("p",{children:[(0,b.jsxs)("span",{style:{color:"orange"},children:[(0,b.jsx)("i",{className:"fa-solid fa-triangle-exclamation"})," WARNING"]})," ","You can seriously mess up the game if you change these. Please write them down and change them very carefully!"]}),(0,b.jsx)(_,{fields:X,data:o,onChange:function(e,n){(0,c.Vx)((0,s.Z)({},"tileTypes/".concat(o.key,"/").concat(n),e),r)}})]})},F=[{prop:"digSpeed",label:"Wombat Digging Speed",type:"number",info:"How fast much can you dig in one frame?"},{prop:"eatSpeed",label:"Wombat Eating Speed",type:"number",info:"How fast much can you eat in one frame?"},{prop:"gravity",label:"Gravity",type:"number",info:"How strong is gravity?"},{prop:"health",label:"Wombat Starting Health",type:"number",info:"How much health do you start with?"},{prop:"maxHealth",label:"Wombat Max Health",type:"number",info:"How much health can you have?"},{prop:"poop",label:"Wombat Starting Poop",type:"number",info:"How much poop do you start with?"},{prop:"maxPoop",label:"Wombat Max Poop",type:"number",info:"How much poop can you hold?"},{prop:"jumpPower",label:"Wombat Jumping Power",type:"number",info:"How much jumping power do you start with?"},{prop:"moveSpeed",label:"Wombat Acceleration",type:"number",info:"How fast can you move?"},{prop:"moveDeceleration",label:"Wombat Deceleration",type:"number",info:"How fast can you slow down?"},{prop:"airDrag",label:"Air Drag",type:"number",info:"How much does the air slow you down?"},{prop:"fallDamageMin",label:"Fall Dmg Threshold",type:"number",info:"What is the minimum blocks/frame where landing hurts?"},{prop:"fallDamageMult",label:"Fall Dmg Multiplier",type:"number",info:"This is multiplied by (your speed - Fall Dmg Threshold) when you land to calculate the damage you take."},{prop:"swimPower",label:"Swim Power",type:"number",info:"How fast of a swimmer do you start out as?"},{prop:"waterDrag",label:"Water Drag",type:"number",info:"How quickly does water slow you down?"}],G=function(e){var n=e.onError,t=function(e){var n=(0,r.useState)(),t=(0,i.Z)(n,2),o=t[0],a=t[1];return(0,r.useEffect)((function(){return(0,c.oL)("gameConfig",a,e)}),[]),o}(n);return(0,b.jsxs)("div",{className:"gameConfig",children:[(0,b.jsxs)("p",{children:[(0,b.jsxs)("span",{style:{color:"orange"},children:[(0,b.jsx)("i",{className:"fa-solid fa-triangle-exclamation"})," WARNING"]})," ","You can seriously mess up the game if you change these. Please write them down and change them very carefully!"]}),(0,b.jsx)(_,{fields:F,data:t,onChange:function(e,t){(0,c.Vx)((0,s.Z)({},"gameConfig/".concat(t),e),n)}})]})},J=function(e){var n=e.cursors,t=e.userIndex,r=e.worldId,o=v(n);return Object.entries(n).filter((function(e){return o-e[1].tstamp<h})).map((function(e){var n,o=(0,i.Z)(e,2),a=o[0],s=o[1],l=s.user,c=s.mouseX,u=s.mouseY;return(0,b.jsxs)("div",{style:{margin:5},children:[(null===(n=t[l])||void 0===n?void 0:n.name)||l,c&&u?(0,b.jsx)("a",{style:{margin:"0 10px"},href:"#".concat(r||"","/").concat(c,"/").concat(u,"/32"),children:"go"}):null]},a)}))},q=function(e){location.hash="".concat(e,"/0/0/32")},Q=function(){var e=(0,C.Z)(k().mark((function e(){var n,t;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=(0,l.M8)(),t=prompt("Enter a name for your new world.")){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,(0,c.Vx)((0,s.Z)({},"worlds/".concat(n),{worldName:t,lastEdited:(0,p.Bt)(),lastEditedBy:(0,E.v0)().currentUser.email}));case 6:q(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(e){var n=e.world,t=e.tileTypes,o=(0,r.useRef)();return(0,r.useEffect)((function(){n&&t&&function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.createElement("canvas"),r=(0,l.HK)((function(e){return e.id}),(0,l.aW)(n)),o=1/0,a=1/0,i=-1/0,s=-1/0;for(var c in e){var u=e[c],d=u.x,f=u.y;o=Math.min(o,d),a=Math.min(a,f),i=Math.max(i,d),s=Math.max(s,f)}t.width=i-o+1,t.height=s-a+1;var p=t.getContext("2d");for(var h in e){var m,v=e[h],y=v.x,x=v.y,b=v.tileType;p.fillStyle=null===(m=r[b])||void 0===m?void 0:m.color,p.fillRect(y-o,x-a,1,1)}}(n,t,o.current)}),[n,t]),(0,b.jsx)("canvas",{ref:o})},ee=function(e){var n,t=e.id,r=e.item,o=r.lastEdited,a=r.worldName,i=r.lastEditedBy,s=r.world,l=e.userIndex,c=e.tileTypes,u=e.close;return(0,b.jsxs)("button",{className:"worldButton",onClick:function(){q(t),u()},children:[(0,b.jsxs)("div",{className:"canvasContainer",children:[(0,b.jsx)($,{world:s,tileTypes:c})," "]}),a||"???",o&&(0,b.jsxs)("span",{className:"lastEdited",children:["last edited by"," ",((null===(n=l[i])||void 0===n?void 0:n.name)||i||"???")+" "+H(Date.now()-o)]})]})},ne=function(){var e=(0,C.Z)(k().mark((function e(n){var t,r;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.next=3,(0,c.mu)(["worlds"]);case 3:t=e.sent,r=t.worlds,n(r);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),te=function(e){var n=e.userIndex,t=e.tileTypes,o=e.close,a=(0,r.useState)(),s=(0,i.Z)(a,2),l=s[0],c=s[1];return(0,r.useEffect)((function(){ne(c)}),[]),l?(0,b.jsxs)("div",{className:"myWorlds",children:[(0,b.jsx)("div",{style:{float:"right"},children:(0,b.jsxs)("button",{onClick:(0,C.Z)(k().mark((function e(){return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:o();case 3:case"end":return e.stop()}}),e)}))),children:[(0,b.jsx)("i",{className:"fa-solid fa-circle-plus"})," Create a New World"]})}),(0,b.jsxs)("button",{onClick:function(){return ne(c)},children:[(0,b.jsx)("i",{className:"fa-solid fa-arrows-rotate"})," Refresh List"]}),Object.entries(l).sort((function(e,n){return n[1].lastEdited-e[1].lastEdited})).map((function(e){var r=(0,i.Z)(e,2),a=r[0],s=r[1];return(0,b.jsx)(ee,{id:a,item:s,userIndex:n,tileTypes:t,close:o},a)}))]}):(0,b.jsx)("div",{className:"fa-3x",style:{textAlign:"center"},children:(0,b.jsx)("i",{className:"fa-solid fa-spinner fa-spin"})})},re=function(e){return e[0].toUpperCase()+e.slice(1)},oe=function(e,n){return e.reduce((function(e,t){var r=n(t);return e[r]=(e[r]||0)+1,e}),{})},ae=function(e){var n=e.heading,t=e.data,r=e.getLabel;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("tr",{children:(0,b.jsx)("td",{children:(0,b.jsx)("br",{})})}),(0,b.jsx)("tr",{children:(0,b.jsx)("th",{children:n})}),Object.entries(t).sort((function(e,n){return n[1]-e[1]})).map((function(e){var n=(0,i.Z)(e,2),t=n[0],o=n[1];return(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{children:r?r(t):t}),(0,b.jsx)("td",{children:o})]},t)}))]})},ie=function(e){var n=e.world,t=e.tileTypes,r=e.userIndex,o=(0,l.HK)((function(e){return e.id}),(0,l.aW)(t)),a=Object.values(n);return(0,b.jsx)("table",{children:(0,b.jsxs)("tbody",{children:[(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{children:"Total Tiles"}),(0,b.jsx)("td",{children:a.length})]}),(0,b.jsx)(ae,{heading:"By Person",data:oe(a,(function(e){return e.user})),getLabel:function(e){var n;return re((null===(n=r[e])||void 0===n?void 0:n.name)||"???")}}),(0,b.jsx)(ae,{heading:"By Tile Type",data:oe(a,(function(e){return e.tileType})),getLabel:function(e){var n;return re((null===(n=o[e])||void 0===n?void 0:n.label)||"???")}}),(0,b.jsx)(ae,{heading:"By Date",data:oe(a,(function(e){return e.tstamp?H(Date.now()-e.tstamp):"???"}))})]})})},se=(0,r.memo)(ie),le=[{prop:"onSpace",label:"On Space",type:"code",info:"What should happen when you press space at it?"}],ce=function(e){var n=e.tile,t=e.worldId,r=e.onError;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(_,{fields:le,data:n,onChange:function(e,o){I(t,(0,a.Z)((0,a.Z)({},n),{},(0,s.Z)({},o,e)),r)}})})},ue=[{key:"instructions",buttonLabel:"Instructions",paneLabel:"Instructions",icon:"circle-question"},{key:"gameConfig",buttonLabel:"Config",paneLabel:"Game Config",icon:"toolbox"},{key:"tileTypeEditor",paneLabel:"Tile Type Editor",hideButton:!0},{key:"hereNow",buttonLabel:"People",paneLabel:"Editing Now",icon:"person"},{key:"stats",buttonLabel:"World Stats",paneLabel:"World Stats",icon:"gauge"},{key:"myWorlds",buttonLabel:"Worlds",paneLabel:"Worlds",icon:"earth-americas"}],de=function(){var e,n=function(){var e=(0,r.useState)({}),n=(0,i.Z)(e,2),t=n[0],o=n[1];return[t,function(e){o((function(n){return(0,a.Z)((0,a.Z)({},n),{},(0,s.Z)({},(0,l.M8)(),e))}))},function(e){return o((function(n){return(0,l.an)(e,n)}))}]}(),t=(0,i.Z)(n,3),o=t[0],p=t[1],h=t[2],m=(0,r.useState)(c.rZ),v=(0,i.Z)(m,2),C=v[0],T=v[1],k=(0,r.useState)(),S=(0,i.Z)(k,2),E=S[0],I=S[1],L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(0,r.useState)(e),o=(0,i.Z)(t,2),a=o[0],s=o[1],l=(0,r.useState)(n),c=(0,i.Z)(l,2),u=c[0],f=c[1];return(0,r.useEffect)((function(){var e=function(e){if(e.target===document.body){var n=d[e.code];"up"===n&&f((function(e){return e-4})),"down"===n&&f((function(e){return e+4})),"left"===n&&s((function(e){return e-4})),"right"===n&&s((function(e){return e+4}))}};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]),{xCoord:a,yCoord:u,setXCoord:s,setYCoord:f}}(0,0),W=L.xCoord,H=L.yCoord,D=L.setXCoord,M=L.setYCoord,P=(0,r.useState)(32),O=(0,i.Z)(P,2),A=O[0],B=O[1],K=(0,r.useState)(),R=(0,i.Z)(K,2),U=R[0],_=R[1],X=function(){var e=(0,r.useState)(),n=(0,i.Z)(e,2),t=n[0],o=n[1];return(0,r.useEffect)((function(){return(0,c.G9)(o)}),[]),t}(),F=u(X,p),q=function(e){var n=(0,r.useState)(),t=(0,i.Z)(n,2),o=t[0],a=t[1];return(0,r.useEffect)((function(){return(0,c.oL)("tileTypes",a,e)}),[]),o}(p),Q=function(e,n){var t=(0,r.useState)({}),o=(0,i.Z)(t,2),a=o[0],s=o[1];return(0,r.useEffect)((function(){if(n)return(0,c.oL)((n?"worlds/".concat(n,"/"):"")+"world",s,e)}),[n]),a}(p,C),$=y(p,C),ee=(e=ue,Object.fromEntries(e.map((function(e){var n=e.key,t=e.buttonLabel,r=e.paneLabel,o=e.icon,a=e.hideButton,s=g("show"+t,!1),l=(0,i.Z)(s,2),c=l[0],u=l[1],d={label:r,className:n+"Container",hide:function(){return u(!1)}};return[n,{button:!a&&(0,b.jsxs)("a",{className:c?"active":"",onClick:function(){return u((function(e){return!e}))},children:[(0,b.jsx)("i",{className:"fa-solid fa-".concat(o)})," ",t]},n),show:c,setShow:u,paneProps:d}]}))));return function(e){var n=e.worldId,t=e.xCoord,o=e.yCoord,a=e.scale,s=e.setWorldId,c=e.setXCoord,u=e.setYCoord,d=e.setScale;(0,r.useEffect)((function(){return f(n,t,o,a),f.cancel}),[n,a,t,o]),(0,r.useEffect)((function(){var e=function(){var e=location.hash.slice(1).split("/"),r=(0,i.Z)(e,4),f=r[0],p=r[1],h=r[2],m=r[3];f&&!(0,l.kQ)(f)||![p,h,m].every((function(e){return!isNaN(e)}))?(console.log("bad hash"),location.hash=[n||"",t,o,a].join("/")):(s(f),c(Number(p)),u(Number(h)),d(Number(m)))};return e(),window.addEventListener("hashchange",e),function(){window.removeEventListener("hashchange",e)}}),[])}({worldId:C,xCoord:W,yCoord:H,scale:A,setWorldId:T,setXCoord:D,setYCoord:M,setScale:B}),(0,r.useEffect)((function(){X&&x(X,null,null,C,W,H,A,p)}),[X,C,W,H,A]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(Y,{user:X,scale:A,setScale:B,zoomAmt:2,userIndex:F,children:Object.values(ee).map((function(e){return e.button}))}),(0,b.jsx)(j,{errors:o,clearError:h}),X?(0,b.jsxs)("div",{className:"appContainer",children:[E&&q&&ee.tileTypeEditor.show&&Object.values(q).some((function(e){return e.id===E}))&&(0,b.jsx)(w,(0,a.Z)((0,a.Z)({},ee.tileTypeEditor.paneProps),{},{children:(0,b.jsx)(z,{selectedTileTypeId:E,tileTypes:q,onError:p})})),ee.gameConfig.show&&(0,b.jsx)(w,(0,a.Z)((0,a.Z)({},ee.gameConfig.paneProps),{},{children:(0,b.jsx)(G,{onError:p})})),C&&ee.hereNow.show&&(0,b.jsx)(w,(0,a.Z)((0,a.Z)({},ee.hereNow.paneProps),{},{children:(0,b.jsx)(J,{cursors:$,userIndex:F,worldId:C})})),ee.instructions.show&&(0,b.jsxs)(w,(0,a.Z)((0,a.Z)({},ee.instructions.paneProps),{},{children:[(0,b.jsx)("p",{children:"Use the arrow keys or WASD to move around the map."}),(0,b.jsx)("p",{children:"Click a tile type at the bottom. Click on the map to place it."}),(0,b.jsx)("p",{children:"Shift+Click a tile to delete it."}),(0,b.jsxs)("p",{children:["You can zoom in and out with"," ",(0,b.jsx)("i",{className:"fa-solid fa-magnifying-glass-plus"})," and"," ",(0,b.jsx)("i",{className:"fa-solid fa-magnifying-glass-minus"})," in the upper right."]}),(0,b.jsx)("p",{children:"Share your URL with other editors to show them what you made."}),(0,b.jsx)("p",{children:"To test what you have made, Alt+Click where you want to start testing. Share your game URL to share your starting point."})]})),ee.myWorlds.show&&(0,b.jsx)(w,(0,a.Z)((0,a.Z)({},ee.myWorlds.paneProps),{},{children:(0,b.jsx)(te,{userIndex:F,tileTypes:q,close:function(){return ee.myWorlds.setShow(!1)}})})),ee.stats.show&&(0,b.jsx)(w,(0,a.Z)((0,a.Z)({},ee.stats.paneProps),{},{children:(0,b.jsx)(se,{world:Q,tileTypes:q,userIndex:F})})),U&&(0,b.jsx)(w,{label:"Tile Logic",className:"tileLogicContainer",hide:function(){return _()},children:(0,b.jsx)(ce,{tile:Q["".concat(U.x,"_").concat(U.y)],worldId:C,onError:p})}),q&&(0,b.jsx)("div",{className:"toolContainer",children:(0,b.jsx)(N,{tileTypes:q,selectedTileTypeId:E,setSelectedTileTypeId:I,showTileTypeEditor:ee.tileTypeEditor.show,setShowTileTypeEditor:ee.tileTypeEditor.setShow})}),C&&q&&(0,b.jsx)("div",{className:"worldEditorContainer",children:(0,b.jsx)(V,{world:Q,selectedTileTypeId:E,tileTypes:q,onError:p,worldId:C,xCoord:W,yCoord:H,scale:A,user:X,cursors:$,userIndex:F,tileLogicCoords:U,setTileLogicCoords:_})})]}):(0,b.jsx)(Z,{onError:p})]})};document.title="Mortal Wombat Editor",(0,o.s)(document.querySelector("#root")).render((0,b.jsx)(r.StrictMode,{children:(0,b.jsx)(de,{})}))},63:function(e,n,t){t.d(n,{G9:function(){return y},Ib:function(){return v},Vx:function(){return p},mu:function(){return h},ni:function(){return x},oL:function(){return m},rZ:function(){return f}});var r=t(861),o=t(757),a=t.n(o),i=t(426),s=t(408),l=t(918);(0,i.ZF)({apiKey:"AIzaSyBEserPzSUos4MT3XRO8NKAO2oVk1-LS-I",authDomain:"mortal-wombat-8c76a.firebaseapp.com",projectId:"mortal-wombat-8c76a",storageBucket:"mortal-wombat-8c76a.appspot.com",messagingSenderId:"929181149015",appId:"1:929181149015:web:33a7f450bcdbb06ae64012",measurementId:"G-JL6HCMYYBS"});var c=(0,s.N8)(),u=(0,l.v0)(),d=(0,s.iH)(c),f="l31p2np9:dy828s8l3wv",p=function(e,n){try{return(0,s.Vx)(d,e)}catch(t){console.error(t),n(t.message)}};"localhost:3000"===location.host&&(window._update=function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Vx)(d,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());var h=function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Object,e.next=3,Promise.all(n.map(function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,(0,s.U2)((0,s.iU)(d,n));case 3:return e.t1=e.sent.val(),e.abrupt("return",[e.t0,e.t1]);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 3:return e.t1=e.sent,e.abrupt("return",e.t0.fromEntries.call(e.t0,e.t1));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(e,n,t){try{var r=(0,s.iH)(c,e);return(0,s.jM)(r,(function(e){return n(e.val()||{})})),function(){return(0,s.S1)(r)}}catch(o){console.error(o),t(o.message)}},v=function(e,n){return(0,l.e5)(u,e,n)},y=function(e){return(0,l.Aj)(u,e)},x=function(){return(0,l.w7)(u)}},457:function(e,n,t){t.d(n,{Ds:function(){return f},HK:function(){return u},M8:function(){return l},P2:function(){return p},aW:function(){return d},an:function(){return s},kQ:function(){return c}});var r=t(982),o=t(885),a=t(762),i=t(413),s=function(e,n){var t=(0,i.Z)({},n);return delete t[e],t},l=function(){return Date.now().toString(36)+":"+Math.random().toString(36).slice(2)},c=function(e){return/^[0-9a-z]{8,}:[0-9a-z]+$/.test(e)},u=function(e,n){var t,r={},o=(0,a.Z)(n);try{for(o.s();!(t=o.n()).done;){var i=t.value;r[e(i)]=i}}catch(s){o.e(s)}finally{o.f()}return r},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.entries(e).map((function(e){var n=(0,o.Z)(e,2),t=n[0],r=n[1];return(0,i.Z)({key:t},r)}))},f=function(e,n){var t,r=function(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];clearTimeout(t),t=setTimeout((function(){return e.apply(void 0,o)}),n)};return r.cancel=function(){return clearTimeout(t)},r},p=function(e,n){var t,o,a=!1,i=function i(){for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];a?o=l:(a=!0,t=setTimeout((function(){e.apply(void 0,l),a=!1,o&&i.apply(void 0,(0,r.Z)(o)),o=void 0}),n))};return i.cancel=function(){return clearTimeout(t)},i}},546:function(e,n,t){t.d(n,{V:function(){return r}});var r=function(e){return null!==e&&void 0!==e&&e.image?"no-repeat center/contain url(".concat(e.image,")"):null===e||void 0===e?void 0:e.color}},147:function(e){e.exports={i8:"0.1.16"}}}]);
//# sourceMappingURL=303.fb9ff6e9.chunk.js.map