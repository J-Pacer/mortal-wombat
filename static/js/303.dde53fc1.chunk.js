"use strict";(self.webpackChunkmortal_wombat=self.webpackChunkmortal_wombat||[]).push([[303],{699:function(e,t,n){n.d(t,{u:function(){return o},z:function(){return r}});var o={airDrag:"0.001",digSpeed:"0.05",eatSpeed:"0.05",fallDamageMin:"0.3",fallDamageMult:"100",fallDamageSound:"https://static.heironimus.info/sound/Thud.ogg",gameOverSound:"https://static.heironimus.info/sound/YouDead.ogg",gravity:"0.005",health:"100",jumpPower:"0.111",maxHealth:"100",maxPoop:"10",moveDeceleration:"0.2",moveSpeed:"0.0222",poop:"0",swimPower:"0.008",waterDrag:"0.1"},r={0:{color:"green",diggable:!0,edible:!0,healing:"5",hp:"1",id:"g",image:"https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/12bfe63d7362e53.png",label:"grass",makePoop:"1",order:"1",sound:"https://static.heironimus.info/sound/Chomp.ogg"},1:{color:"saddleBrown",density:"20",diggable:!0,healing:"2",hp:"1",id:"p",image:"https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/b0e07c73f8aa75e.png",label:"poop",movable:!0,moveDelay:"2",order:"2",sound:"https://static.heironimus.info/sound/SloppyPoopSoft.ogg"},2:{color:"gray",id:"s",image:"https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/0041e8e715b1264.png",label:"stone",order:"3"},3:{color:"red",density:"1.1",id:"w",image:"https://piskel-imgstore-b.appspot.com/img/610cc71e-cdb9-11ec-8e05-2f9ec14027c3.gif",walkingImage:"https://piskel-imgstore-b.appspot.com/img/253fba5c-cdb9-11ec-acf8-2f9ec14027c3.gif",pushingImage:"https://piskel-imgstore-b.appspot.com/img/586bb7e6-cdb9-11ec-a846-2f9ec14027c3.gif",jumpingImage:"https://piskel-imgstore-b.appspot.com/img/4439c4fd-cdb9-11ec-9ce8-2f9ec14027c3.gif",diggingImage:"https://piskel-imgstore-b.appspot.com/img/3a751840-cdb9-11ec-8175-2f9ec14027c3.gif",crouchingImage:"https://piskel-imgstore-b.appspot.com/img/32ac8f9e-cdb9-11ec-9e05-2f9ec14027c3.gif",label:"wombat",order:"4"},4:{color:"orange",density:"2",healing:"-0.73",id:"m",image:"https://piskel-imgstore-b.appspot.com/img/a3591080-d48c-11ec-adf0-83f7175e2efe.gif",label:"magma",moveDelay:"30",moveStyle:"liquid",order:"5"},5:{collectible:!0,color:"cyan",id:"j",image:"https://i.ibb.co/m6V89v5/gem.gif",label:"jewel",order:"6",sound:"https://static.heironimus.info/sound/PinkFast.ogg"},6:{color:"purple",density:"0",diggable:!0,dropsLoot:"j",healing:"-0.5",hp:"2",id:"k",image:"https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/2b956856674265a.png",label:"Koala",moveDelay:"25",moveStyle:"patrol",order:"7",sound:"https://static.heironimus.info/sound/Hiss.ogg"},7:{color:"blue",density:"0.85",id:"a",image:"https://piskel-imgstore-b.appspot.com/img/ffce45fa-d85c-11ec-a908-a90a117b47b4.gif",label:"water",moveDelay:"15",moveStyle:"liquid",order:"8"},8:{color:"#f04dd2",density:"10",id:"o",image:"https://piskel-imgstore-b.appspot.com/img/e92587eb-df95-11ec-b289-d74eb3c6d4e4.gif",label:"polymer",movable:!0,moveDelay:"90",moveStyle:"liquid",order:"9",sound:"https://static.heironimus.info/sound/Boing.ogg"},9:{color:"red",density:"1",hp:"1",id:"n",image:"https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/6efea72003769ad.png",label:"NPC",moveDelay:"10",order:"10"},"-1":{color:"black",id:"_delete",label:"delete",order:"0"}}},303:function(e,t,n){n.r(t);var o=n(791),r=n(250),a=n(413),i=n(885),l=n(942),s=n(457),c=n(63),u=function(e,t){var n=(0,o.useState)({}),r=(0,i.Z)(n,2),a=r[0],l=r[1];return(0,o.useEffect)((function(){return(0,c.oL)("users",(function(e){return l(function(e){return(0,s.HK)((function(e){return e.email}),Object.values(e))}(e))}),t)}),[e]),a},d={KeyS:"down",KeyA:"left",KeyW:"up",KeyD:"right",ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right"},p=(0,s.Ds)((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];location.hash=t.join("/")}),1e3),f=n(408),m=15e3,h=(0,s.M8)(),g=function(e){var t=0;for(var n in e)t=Math.max(t,e[n].tstamp);return t},v=function(e,t){var n=(0,o.useState)({}),r=(0,i.Z)(n,2),a=r[0],l=r[1];return(0,o.useEffect)((function(){if(t)return(0,c.oL)("worlds/".concat(t,"/cursors"),l,e)}),[t]),(0,o.useEffect)((function(){Math.random()<.01&&function(e,t,n){var o={},r=g(e);for(var a in e)r-e[a].tstamp>m&&(o["worlds/".concat(t,"/cursors/").concat(a)]=null);(0,c.Vx)(o,n)}(a,t,e)}),[a,t]),a},b=(0,s.P2)((function(e,t,n,o,r,a,i,s){o&&(0,c.Vx)((0,l.Z)({},"worlds/".concat(o,"/cursors/").concat(h),{user:e.email,mouseX:t,mouseY:n,left:r-innerWidth/i/2,top:a-innerHeight/i/2,width:innerWidth/i,height:innerHeight/i,tstamp:(0,f.Bt)()}),s)}),500),y=n(184),x=function(e){var t=e.className,n=e.hide,o=e.label,r=e.children;return(0,y.jsxs)("div",{className:"pane ".concat(t),children:[(0,y.jsxs)("div",{className:"paneHeader",children:[(0,y.jsx)("a",{onClick:n,children:(0,y.jsx)("i",{className:"fa-solid fa-x"})}),(0,y.jsx)("strong",{children:o})]}),(0,y.jsx)("div",{className:"paneBody",children:r})]})},w=function(e,t){var n=(0,o.useState)(void 0===localStorage[e]?t:function(e,t){try{return JSON.parse(e)}catch(n){return console.error(n),t}}(localStorage[e],t)),r=(0,i.Z)(n,2),a=r[0],l=r[1];return(0,o.useEffect)((function(){localStorage[e]=JSON.stringify(a)}),[a]),[a,l]},j=function(e){var t=e.errors,n=e.clearError;return Object.keys(t).length>0&&(0,y.jsx)("div",{className:"errorBanner",children:Object.entries(t).map((function(e){var t=(0,i.Z)(e,2),o=t[0],r=t[1];return(0,y.jsxs)("div",{children:[r," ",(0,y.jsx)("a",{onClick:function(){return n(o)},children:"[x]"})]},o)}))})},C=n(861),k=n(757),S=n.n(k),T=function(e){var t=e.onError,n=(0,o.useState)(""),r=(0,i.Z)(n,2),a=r[0],l=r[1],s=(0,o.useState)(""),u=(0,i.Z)(s,2),d=u[0],p=u[1];return(0,y.jsx)("div",{style:{width:300,margin:"50px auto"},children:(0,y.jsxs)("form",{className:"login",onSubmit:function(){var e=(0,C.Z)(S().mark((function e(n){return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,(0,c.Ib)(a,d);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),t(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),children:[(0,y.jsx)("input",{type:"email",placeholder:"email",value:a,onChange:function(e){return l(e.target.value)}}),(0,y.jsx)("input",{type:"password",placeholder:"password",value:d,onChange:function(e){return p(e.target.value)}}),(0,y.jsx)("button",{style:{width:"100%"},children:"Log In"})]})})},Z=n(546),I=function(e){var t=e.tileTypes,n=e.selectedTileTypeId,o=e.setSelectedTileTypeId,r=e.showTileTypeEditor,a=e.setShowTileTypeEditor,s=e.worldId;return(0,y.jsxs)("div",{className:"toolBar",children:[(0,y.jsx)("div",{className:"tileType",onClick:function(){return o()},children:(0,y.jsx)("label",{children:"None"})}),Object.entries(t).sort((function(e,t){return e[1].order-t[1].order})).map((function(e){var t=(0,i.Z)(e,2),l=t[0],s=t[1];return(0,y.jsx)("div",{className:"tileType"+(n===s.id?" selected":""),style:{background:(0,Z.V)(s)},title:r?"":"Double click to edit tile properties.",onClick:function(){return o(s.id)},onDoubleClick:function(){return a(!0)},children:(0,y.jsx)("label",{children:s.label})},l)})),(0,y.jsx)("div",{className:"tileType",children:(0,y.jsx)("button",{onClick:function(){var e=Object.values(t).length.toString();(0,c.Vx)((0,l.Z)({},"worlds/".concat(s,"/tileTypes/").concat(e),{order:e,id:e})),o(e),a(!0)},children:(0,y.jsx)("i",{className:"fa-solid fa-plus"})})})]})},N=n(918),E=function(e,t,n){var o,r=(0,N.v0)().currentUser.email,i=(0,f.Bt)();return(0,c.Vx)((o={},(0,l.Z)(o,"worlds/".concat(e,"/world/").concat(t.x,"_").concat(t.y),"_delete"===t.tileType?null:(0,a.Z)((0,a.Z)({},t),{},{user:r,tstamp:i})),(0,l.Z)(o,"worlds/".concat(e,"/lastEdited"),i),(0,l.Z)(o,"worlds/".concat(e,"/lastEditedBy"),r),o),n)},L=n(762),D=[{label:"year",amount:31536e6},{label:"month",amount:2592e6},{label:"week",amount:6048e5},{label:"day",amount:864e5},{label:"hour",amount:36e5},{label:"minute",amount:6e4},{label:"second",amount:1e3}],W=function(e){if(isNaN(e))return"???";var t,n=(0,L.Z)(D);try{for(n.s();!(t=n.n()).done;){var o=t.value,r=o.label,a=o.amount;if(a<=e){var i=Math.floor(e/a);return"".concat(i," ").concat(r).concat(1===i?"":"s"," ago")}}}catch(l){n.e(l)}finally{n.f()}return"just now"},H=32,M=function(e){var t=e.cursors,n=e.userIndex,r=e.scale,a=g(t);return Object.entries(t).map((function(e){var t,l,s=(0,i.Z)(e,2),c=s[0],u=s[1],d=u.user,p=u.left,f=u.top,g=u.width,v=u.height,b=u.tstamp,x=u.mouseX,w=u.mouseY;if(c===h||a-b>m)return null;var j=1-(a-b)/m;return(0,y.jsxs)(o.Fragment,{children:[(0,y.jsx)("div",{className:"cursorView",style:{transform:"translate(".concat(p*H,"px, ").concat(f*H,"px)"),width:g*H,height:v*H,opacity:j},children:(0,y.jsx)("span",{style:{fontSize:2560/r+"%"},children:(null===(t=n[d])||void 0===t?void 0:t.name)||d})}),x&&w?(0,y.jsxs)("div",{className:"mouseCursor",style:{transform:"translate(".concat((x+.5)*H,"px, ").concat((w+.5)*H,"px) scale(").concat(H/r,") "),opacity:j},children:[(0,y.jsx)("i",{className:"fa-solid fa-arrow-pointer"}),(0,y.jsx)("span",{children:(null===(l=n[d])||void 0===l?void 0:l.name)||d})]}):null]},c)}))},P=function(e,t,n,o){return{x:Math.floor((e.clientX-innerWidth/2)/t)+n,y:Math.floor((e.clientY-innerHeight/2)/t)+o}},O=function(e,t,n){var o;if(!e||!t)return"";var r=(null===(o=n[e])||void 0===o?void 0:o.name)||e;return"Placed by ".concat(r," ").concat(W(Date.now()-t))},A=function(e){var t=e.world,n=e.tileTypeIndex,o=e.userIndex,r=e.setTileLogicCoords;return Object.entries(t).map((function(e){var t=(0,i.Z)(e,2),a=t[0],l=t[1],s=l.x,c=l.y,u=l.tileType,d=l.user,p=l.tstamp;return(0,y.jsx)("div",{className:"tile",title:O(d,p,o),style:{transform:"translate(".concat(s*H,"px, ").concat(c*H,"px)"),background:(0,Z.V)(n[u])},onDoubleClick:function(){return r({x:s,y:c})}},a)}))},B=(0,o.memo)(A),U=function(e){var t=e.world,n=e.tileTypes,r=e.selectedTileTypeId,a=e.onError,i=e.worldId,l=e.xCoord,c=e.yCoord,u=e.scale,d=e.user,p=e.cursors,f=e.userIndex,m=e.tileLogicCoords,h=e.setTileLogicCoords,g=(0,o.useRef)(),v=(0,o.useMemo)((function(){return(0,s.HK)((function(e){return e.id}),(0,s.aW)(n))}),[n]),x=function(e){var n=P(e,u,l,c),o=n.x,s=n.y;if(e.altKey)return window.open(location.href.replace(/\?.*/,"")+"#"+btoa(JSON.stringify({worldId:i,x:o,y:s})),"_blank"),e.preventDefault(),!1;var d,p=null===(d=t["".concat(o,"_").concat(s)])||void 0===d?void 0:d.tileType,f=e.shiftKey?"_delete":r;f&&(p||"_delete"!==f)&&p!==f&&E(i,{x:o,y:s,tileType:f},a)},w=(0,o.useCallback)((function(e){var t,n=P(e,u,l,c),o=n.x,s=n.y;r&&((null===(t=g.current)||void 0===t?void 0:t.style).transform="translate(".concat(o*H,"px, ").concat(s*H,"px)"),e.buttons&&x(e));b(d,o,s,i,l,c,u,a)}),[u,i,l,c,r,d]),j=innerWidth/2-l*H,C=innerHeight/2-c*H;return(0,y.jsx)("div",{id:"worldEditor",className:"world",onClick:x,onMouseMove:w,children:(0,y.jsxs)("div",{style:{transformOrigin:"".concat(innerWidth/2,"px ").concat(innerHeight/2,"px"),transform:"scale(".concat(u/H,") translate(").concat(j,"px,").concat(C,"px)")},children:[(0,y.jsx)(M,{cursors:p,userIndex:f,scale:u}),(0,y.jsx)(B,{world:t,tileTypeIndex:v,userIndex:f,setTileLogicCoords:h}),r&&(0,y.jsx)("div",{ref:g,className:"ghost tile",style:{background:(0,Z.V)(v[r])}}),m&&(0,y.jsx)("div",{style:{transform:"translate(".concat(m.x*H,"px, ").concat(m.y*H,"px)")},className:"selected tile"})]})})},V=n(147),R=function(e){var t,n=e.user,o=e.setScale,r=e.zoomAmt,a=e.userIndex,i=e.children;return(0,y.jsxs)("nav",{children:[n&&(0,y.jsxs)("div",{style:{float:"right"},children:[(0,y.jsx)("a",{onClick:function(){return o((function(e){return Math.round(e*r)}))},children:(0,y.jsx)("i",{className:"fa-solid fa-magnifying-glass-plus"})}),(0,y.jsx)("a",{onClick:function(){return o((function(e){return Math.round(e/r)}))},children:(0,y.jsx)("i",{className:"fa-solid fa-magnifying-glass-minus"})}),"Hi, ",(null===(t=a[n.email])||void 0===t?void 0:t.name)||n.email,"!",(0,y.jsx)("a",{onClick:c.ni,children:"log out"})]}),(0,y.jsxs)("b",{children:["MW Collabitat v",V.i8]}),i]})},K=n(982),z=n(699),Y=n(915),_=(0,o.lazy)((function(){return n.e(415).then(n.bind(n,415))})),F={text:function(e){var t=e.value,n=void 0===t?"":t,o=e.onChange;return(0,y.jsx)("input",{type:"text",value:n,onChange:function(e){return o(e.target.value)}})},number:function(e){var t=e.value,n=void 0===t?"":t,o=e.onChange;return(0,y.jsx)("input",{type:"number",value:n,onChange:function(e){return o(e.target.value)}})},checkbox:function(e){var t=e.value,n=void 0!==t&&t,o=e.onChange;return(0,y.jsx)("input",{type:"checkbox",checked:n,onChange:function(e){return o(e.target.checked)}})},select:function(e){var t=e.value,n=e.onChange,o=e.options;return(0,y.jsxs)("select",{value:t,onChange:function(e){return n(e.target.value)},children:[(0,y.jsx)("option",{}),o.map((function(e){var t=e.label,n=e.value;return(0,y.jsx)("option",{value:n,children:t},t)}))]})},code:function(e){var t=e.value,n=e.onChange;return(0,y.jsx)(o.Suspense,{fallback:"Loading...",children:(0,y.jsx)(_,{height:400,width:800,theme:"vs-dark",defaultLanguage:"javascript",value:t,onChange:n})})}},X=function(e){var t=e.fields,n=e.data,o=e.defaults,r=e.onChange;return t.map((function(e){var t=e.prop,a=e.label,i=e.type,l=e.info,s=e.show,c=e.options;if(s&&!s(n))return null;var u=F[i],d=void 0===(null===n||void 0===n?void 0:n[t])?null===o||void 0===o?void 0:o[t]:null===n||void 0===n?void 0:n[t];return(0,y.jsxs)("div",{title:l,children:[(0,y.jsx)("label",{children:a}),(0,y.jsx)(u,{value:d,onChange:function(e){return r(e,t)},options:c}),o&&d!==(null===o||void 0===o?void 0:o[t])&&(0,y.jsx)("button",{onClick:function(){return r(null,t)},title:"Click to reset ".concat(a," to ").concat(JSON.stringify(null===o||void 0===o?void 0:o[t])),children:"Reset"})]},t)}))},q=[{prop:"label",label:"Label",type:"text",info:"The label you see in the tool bar below."},{prop:"image",label:"Image URL",type:"text",info:"A url to an image."}].concat((0,K.Z)(["walking","pushing","jumping","digging","crouching"].map((function(e){return{prop:"".concat(e,"Image$"),label:"".concat((t=e,t[0].toUpperCase()+t.slice(1))," Image URL"),type:"text",info:"A url to an image for ".concat(e,"."),show:function(e){return"wombat"===e.label||parseInt(e.moveDelay)}};var t}))),[{prop:"sound",label:"Sound URL",type:"text",info:"URL for the sound that should be played."},{prop:"color",label:"Color",type:"text",info:"The color to use if there is no image"},{prop:"hp",label:"HP",type:"number",info:"How much health does it have?"},{prop:"movable",label:"Movable",type:"checkbox",info:"Can you move it?"},{prop:"moveDelay",label:"Move Delay",type:"number",info:"How many frames does it wait to move? Smaller is faster."},{prop:"density",label:"Density",type:"number",info:"Air density is 0. Wombat density is 1. Wombat floats when density is >1, sinks when <1.",show:function(e){return parseInt(e.moveDelay)}},{prop:"moveStyle",label:"Move Style",type:"select",info:"How does it move?",options:[{label:"Liquid",value:"liquid"},{label:"Patrol",value:"patrol"}],show:function(e){return parseInt(e.moveDelay)}},{prop:"healing",label:"Healing",type:"number",info:"How much does it heal (or hurt) when you eat/touch it (per frame)?"},{prop:"edible",label:"Edible",type:"checkbox",info:"Can you eat it?"},{prop:"makePoop",label:"Make Poop",type:"number",info:"How much poop does it make?",show:function(e){return e.edible}},{prop:"diggable",label:"Diggable",type:"checkbox",info:"Can you dig it?",show:function(e){return!e.edible}},{prop:"collectible",label:"Collectible",type:"checkbox",info:"Can you collect it?",show:function(e){return!e.edible&&!e.movable}},{prop:"dropsLoot",label:"Drops Loot",type:"select",info:"What kind of loot does it drop?",options:[{label:"Jewel",value:"j"}],show:function(e){return e.diggable&&e.hp}},{prop:"order",label:"Order",type:"number",info:"The order it shows up in the toolbar below"}]),J=q.reduce((function(e,t){var n=t.prop,o=t.type;return e[n]="checkbox"!==o&&"",e}),{}),G=function(e){var t=e.selectedTileTypeId,n=e.tileTypes,o=e.worldId,r=e.onError;if(!t||t.startsWith("_")||!Object.values(n).some((function(e){return e.id===t})))return"You can't edit this.";var a=(0,s.aW)(n).find((function(e){return e.id===t})),i=Object.values(z.z).find((function(e){return e.id===t}));return a&&(0,y.jsx)("div",{className:"tileTypeEditor",children:(0,y.jsx)(X,{fields:q,data:a,defaults:i&&(0,Y.v)(i,J),onChange:function(e,t){(0,c.Vx)((0,l.Z)({},"worlds/".concat(o,"/tileTypes/").concat(a.key,"/").concat(t),e),r)}})})},Q=[{prop:"digSpeed",label:"Wombat Digging Speed",type:"number",info:"How fast much can you dig in one frame?"},{prop:"eatSpeed",label:"Wombat Eating Speed",type:"number",info:"How fast much can you eat in one frame?"},{prop:"gravity",label:"Gravity",type:"number",info:"How strong is gravity?"},{prop:"health",label:"Wombat Starting Health",type:"number",info:"How much health do you start with?"},{prop:"maxHealth",label:"Wombat Max Health",type:"number",info:"How much health can you have?"},{prop:"poop",label:"Wombat Starting Poop",type:"number",info:"How much poop do you start with?"},{prop:"maxPoop",label:"Wombat Max Poop",type:"number",info:"How much poop can you hold?"},{prop:"jumpPower",label:"Wombat Jumping Power",type:"number",info:"How much jumping power do you start with?"},{prop:"moveSpeed",label:"Wombat Acceleration",type:"number",info:"How fast can you move?"},{prop:"moveDeceleration",label:"Wombat Deceleration",type:"number",info:"How fast can you slow down?"},{prop:"airDrag",label:"Air Drag",type:"number",info:"How much does the air slow you down?"},{prop:"fallDamageMin",label:"Fall Dmg Threshold",type:"number",info:"What is the minimum blocks/frame where landing hurts?"},{prop:"fallDamageMult",label:"Fall Dmg Multiplier",type:"number",info:"This is multiplied by (your speed - Fall Dmg Threshold) when you land to calculate the damage you take."},{prop:"fallDamageSound",label:"Fall Dmg Sound",type:"text",info:"This is the URL for the sound that should be played if fall damage occurs."},{prop:"swimPower",label:"Swim Power",type:"number",info:"How fast of a swimmer do you start out as?"},{prop:"waterDrag",label:"Water Drag",type:"number",info:"How quickly does water slow you down?"},{prop:"gameOverSound",label:"Game Over Sound",type:"text",info:"This is the URL for the sound that is played when the game is over."}],$=function(e){var t=e.worldId,n=e.onError,r=function(e,t){var n=(0,o.useState)(),r=(0,i.Z)(n,2),a=r[0],l=r[1];return(0,o.useEffect)((function(){return(0,c.oL)("worlds/".concat(e,"/gameConfig"),l,t)}),[]),a}(t,n);return(0,y.jsx)("div",{className:"gameConfig",children:(0,y.jsx)(X,{fields:Q,data:r,defaults:z.u,onChange:function(e,o){(0,c.Vx)((0,l.Z)({},"worlds/".concat(t,"/gameConfig/").concat(o),e),n)}})})},ee=function(e){var t=e.cursors,n=e.userIndex,o=e.worldId,r=g(t);return Object.entries(t).filter((function(e){return r-e[1].tstamp<m})).map((function(e){var t,r=(0,i.Z)(e,2),a=r[0],l=r[1],s=l.user,c=l.mouseX,u=l.mouseY;return(0,y.jsxs)("div",{style:{margin:5},children:[(null===(t=n[s])||void 0===t?void 0:t.name)||s,c&&u?(0,y.jsx)("a",{style:{margin:"0 10px"},href:"#".concat(o||"","/").concat(c,"/").concat(u,"/32"),children:"go"}):null]},a)}))},te=function(e){location.hash="".concat(e,"/0/0/32")},ne=function(){var e=(0,C.Z)(S().mark((function e(){var t,n;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=(0,s.M8)(),n=prompt("Enter a name for your new world.")){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,(0,c.Vx)((0,l.Z)({},"worlds/".concat(t),{worldName:n,lastEdited:(0,f.Bt)(),lastEditedBy:(0,N.v0)().currentUser.email}));case 6:te(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=function(e){var t=e.world,n=e.tileTypes,r=(0,o.useRef)();return(0,o.useEffect)((function(){t&&n&&function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.createElement("canvas"),o=(0,s.HK)((function(e){return e.id}),(0,s.aW)(t)),r=1/0,a=1/0,i=-1/0,l=-1/0;for(var c in e){var u=e[c],d=u.x,p=u.y;r=Math.min(r,d),a=Math.min(a,p),i=Math.max(i,d),l=Math.max(l,p)}n.width=i-r+1,n.height=l-a+1;var f=n.getContext("2d");for(var m in e){var h,g=e[m],v=g.x,b=g.y,y=g.tileType;f.fillStyle=null===(h=o[y])||void 0===h?void 0:h.color,f.fillRect(v-r,b-a,1,1)}}(t,n,r.current)}),[t,n]),(0,y.jsx)("canvas",{ref:r})},re=function(e){var t,n=e.id,o=e.item,r=o.lastEdited,a=o.worldName,i=o.lastEditedBy,l=o.world,s=o.tileTypes,c=e.userIndex,u=e.close;return(0,y.jsxs)("button",{className:"worldButton",onClick:function(){te(n),u()},children:[(0,y.jsxs)("div",{className:"canvasContainer",children:[(0,y.jsx)(oe,{world:l,tileTypes:(0,Y.v)(s,z.z)})," "]}),a||"???",r&&(0,y.jsxs)("span",{className:"lastEdited",children:["last edited by"," ",((null===(t=c[i])||void 0===t?void 0:t.name)||i||"???")+" "+W(Date.now()-r)]})]})},ae=function(){var e=(0,C.Z)(S().mark((function e(t){return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.t0=t,e.next=4,(0,c.oi)("worlds");case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(e){var t=e.userIndex,n=e.close,r=(0,o.useState)(),a=(0,i.Z)(r,2),l=a[0],s=a[1];return(0,o.useEffect)((function(){ae(s)}),[]),l?(0,y.jsxs)("div",{className:"myWorlds",children:[(0,y.jsx)("div",{style:{float:"right"},children:(0,y.jsxs)("button",{onClick:(0,C.Z)(S().mark((function e(){return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne();case 2:n();case 3:case"end":return e.stop()}}),e)}))),children:[(0,y.jsx)("i",{className:"fa-solid fa-circle-plus"})," Create a New World"]})}),(0,y.jsxs)("button",{onClick:function(){return ae(s)},children:[(0,y.jsx)("i",{className:"fa-solid fa-arrows-rotate"})," Refresh List"]}),Object.entries(l).sort((function(e,t){return t[1].lastEdited-e[1].lastEdited})).map((function(e){var o=(0,i.Z)(e,2),r=o[0],a=o[1];return(0,y.jsx)(re,{id:r,item:a,userIndex:t,close:n},r)}))]}):(0,y.jsx)("div",{className:"fa-3x",style:{textAlign:"center"},children:(0,y.jsx)("i",{className:"fa-solid fa-spinner fa-spin"})})},le=function(e){return e[0].toUpperCase()+e.slice(1)},se=function(e,t){return e.reduce((function(e,n){var o=t(n);return e[o]=(e[o]||0)+1,e}),{})},ce=function(e){var t=e.heading,n=e.data,o=e.getLabel;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("tr",{children:(0,y.jsx)("td",{children:(0,y.jsx)("br",{})})}),(0,y.jsx)("tr",{children:(0,y.jsx)("th",{children:t})}),Object.entries(n).sort((function(e,t){return t[1]-e[1]})).map((function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1];return(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{children:o?o(n):n}),(0,y.jsx)("td",{children:r})]},n)}))]})},ue=function(e){var t=e.world,n=e.tileTypes,o=e.userIndex,r=(0,s.HK)((function(e){return e.id}),(0,s.aW)(n)),a=Object.values(t);return(0,y.jsx)("table",{children:(0,y.jsxs)("tbody",{children:[(0,y.jsxs)("tr",{children:[(0,y.jsx)("th",{children:"Total Tiles"}),(0,y.jsx)("td",{children:a.length})]}),(0,y.jsx)(ce,{heading:"By Person",data:se(a,(function(e){return e.user})),getLabel:function(e){var t;return le((null===(t=o[e])||void 0===t?void 0:t.name)||"???")}}),(0,y.jsx)(ce,{heading:"By Tile Type",data:se(a,(function(e){return e.tileType})),getLabel:function(e){var t;return le((null===(t=r[e])||void 0===t?void 0:t.label)||"???")}}),(0,y.jsx)(ce,{heading:"By Date",data:se(a,(function(e){return e.tstamp?W(Date.now()-e.tstamp):"???"}))})]})})},de=(0,o.memo)(ue),pe=[{prop:"onSpace",label:"On Space",type:"code",info:"What should happen when you press space at it?"}],fe=function(e){var t=e.tile,n=e.worldId,o=e.onError;return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(X,{fields:pe,data:t,onChange:function(e,r){E(n,(0,a.Z)((0,a.Z)({},t),{},(0,l.Z)({},r,e)),o)}})})},me=[{key:"instructions",buttonLabel:"Instructions",paneLabel:"Instructions",icon:"circle-question"},{key:"gameConfig",buttonLabel:"World Config",paneLabel:"Config Overrides",icon:"toolbox"},{key:"tileTypeEditor",buttonLabel:"Tile Config",paneLabel:"Tile Config Overrides",icon:"gear"},{key:"hereNow",buttonLabel:"People",paneLabel:"Editing Now",icon:"person"},{key:"stats",buttonLabel:"World Stats",paneLabel:"World Stats",icon:"gauge"},{key:"myWorlds",buttonLabel:"Worlds",paneLabel:"Worlds",icon:"earth-americas"}],he=function(){var e,t=function(){var e=(0,o.useState)({}),t=(0,i.Z)(e,2),n=t[0],r=t[1];return[n,function(e){r((function(t){return(0,a.Z)((0,a.Z)({},t),{},(0,l.Z)({},(0,s.M8)(),e))}))},function(e){return r((function(t){return(0,s.an)(e,t)}))}]}(),n=(0,i.Z)(t,3),r=n[0],f=n[1],m=n[2],h=(0,o.useState)(c.rZ),g=(0,i.Z)(h,2),C=g[0],k=g[1],S=(0,o.useState)(),Z=(0,i.Z)(S,2),N=Z[0],E=Z[1],L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(0,o.useState)(e),r=(0,i.Z)(n,2),a=r[0],l=r[1],s=(0,o.useState)(t),c=(0,i.Z)(s,2),u=c[0],p=c[1];return(0,o.useEffect)((function(){var e=function(e){if(e.target===document.body){var t=d[e.code];"up"===t&&p((function(e){return e-4})),"down"===t&&p((function(e){return e+4})),"left"===t&&l((function(e){return e-4})),"right"===t&&l((function(e){return e+4}))}};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]),{xCoord:a,yCoord:u,setXCoord:l,setYCoord:p}}(0,0),D=L.xCoord,W=L.yCoord,H=L.setXCoord,M=L.setYCoord,P=(0,o.useState)(32),O=(0,i.Z)(P,2),A=O[0],B=O[1],V=(0,o.useState)(),K=(0,i.Z)(V,2),_=K[0],F=K[1],X=function(){var e=(0,o.useState)(),t=(0,i.Z)(e,2),n=t[0],r=t[1];return(0,o.useEffect)((function(){return(0,c.G9)(r)}),[]),n}(),q=u(X,f),J=function(e,t){var n=(0,o.useState)(),r=(0,i.Z)(n,2),a=r[0],l=r[1];return(0,o.useEffect)((function(){return(0,c.oL)("worlds/".concat(t,"/tileTypes"),l,e)}),[t]),a}(f,C),Q=function(e,t){var n=(0,o.useState)({}),r=(0,i.Z)(n,2),a=r[0],l=r[1];return(0,o.useEffect)((function(){if(t)return(0,c.oL)("worlds/".concat(t,"/world"),l,e)}),[t]),a}(f,C),te=v(f,C),ne=(e=me,Object.fromEntries(e.map((function(e){var t=e.key,n=e.buttonLabel,o=e.paneLabel,r=e.icon,a=w("show"+n,!1),l=(0,i.Z)(a,2),s=l[0],c=l[1],u={label:o,className:t+"Container",hide:function(){return c(!1)}};return[t,{button:(0,y.jsxs)("a",{className:s?"active":"",onClick:function(){return c((function(e){return!e}))},children:[(0,y.jsx)("i",{className:"fa-solid fa-".concat(r)})," ",n]},t),show:s,setShow:c,paneProps:u}]}))));!function(e){var t=e.worldId,n=e.xCoord,r=e.yCoord,a=e.scale,l=e.setWorldId,c=e.setXCoord,u=e.setYCoord,d=e.setScale;(0,o.useEffect)((function(){return p(t,n,r,a),p.cancel}),[t,a,n,r]),(0,o.useEffect)((function(){var e=function(){var e=location.hash.slice(1).split("/"),o=(0,i.Z)(e,4),p=o[0],f=o[1],m=o[2],h=o[3];p&&!(0,s.kQ)(p)||![f,m,h].every((function(e){return!isNaN(e)}))?(console.log("bad hash"),location.hash=[t||"",n,r,a].join("/")):(l(p),c(Number(f)),u(Number(m)),d(Number(h)))};return e(),window.addEventListener("hashchange",e),function(){window.removeEventListener("hashchange",e)}}),[])}({worldId:C,xCoord:D,yCoord:W,scale:A,setWorldId:k,setXCoord:H,setYCoord:M,setScale:B}),(0,o.useEffect)((function(){X&&b(X,null,null,C,D,W,A,f)}),[X,C,D,W,A]);var oe=(0,Y.v)(J,z.z);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(R,{user:X,scale:A,setScale:B,zoomAmt:2,userIndex:q,children:Object.values(ne).map((function(e){return e.button}))}),(0,y.jsx)(j,{errors:r,clearError:m}),X?(0,y.jsxs)("div",{className:"appContainer",children:[ne.tileTypeEditor.show&&(0,y.jsx)(x,(0,a.Z)((0,a.Z)({},ne.tileTypeEditor.paneProps),{},{children:(0,y.jsx)(G,{selectedTileTypeId:N,tileTypes:oe,worldId:C,onError:f})})),ne.gameConfig.show&&(0,y.jsx)(x,(0,a.Z)((0,a.Z)({},ne.gameConfig.paneProps),{},{children:(0,y.jsx)($,{worldId:C,onError:f})})),C&&ne.hereNow.show&&(0,y.jsx)(x,(0,a.Z)((0,a.Z)({},ne.hereNow.paneProps),{},{children:(0,y.jsx)(ee,{cursors:te,userIndex:q,worldId:C})})),ne.instructions.show&&(0,y.jsxs)(x,(0,a.Z)((0,a.Z)({},ne.instructions.paneProps),{},{children:[(0,y.jsx)("p",{children:"Use the arrow keys or WASD to move around the map."}),(0,y.jsx)("p",{children:"Click a tile type at the bottom. Click on the map to place it."}),(0,y.jsx)("p",{children:"Shift+Click a tile to delete it."}),(0,y.jsxs)("p",{children:["You can zoom in and out with"," ",(0,y.jsx)("i",{className:"fa-solid fa-magnifying-glass-plus"})," and"," ",(0,y.jsx)("i",{className:"fa-solid fa-magnifying-glass-minus"})," in the upper right."]}),(0,y.jsx)("p",{children:"Share your URL with other editors to show them what you made."}),(0,y.jsx)("p",{children:"To test what you have made, Alt+Click where you want to start testing. Share your game URL to share your starting point."})]})),ne.myWorlds.show&&(0,y.jsx)(x,(0,a.Z)((0,a.Z)({},ne.myWorlds.paneProps),{},{children:(0,y.jsx)(ie,{userIndex:q,close:function(){return ne.myWorlds.setShow(!1)}})})),ne.stats.show&&(0,y.jsx)(x,(0,a.Z)((0,a.Z)({},ne.stats.paneProps),{},{children:(0,y.jsx)(de,{world:Q,tileTypes:oe,userIndex:q})})),_&&(0,y.jsx)(x,{label:"Tile Logic",className:"tileLogicContainer",hide:function(){return F()},children:(0,y.jsx)(fe,{tile:Q["".concat(_.x,"_").concat(_.y)],worldId:C,onError:f})}),(0,y.jsx)("div",{className:"toolContainer",children:(0,y.jsx)(I,{tileTypes:oe,selectedTileTypeId:N,setSelectedTileTypeId:E,showTileTypeEditor:ne.tileTypeEditor.show,setShowTileTypeEditor:ne.tileTypeEditor.setShow,worldId:C})}),C&&(0,y.jsx)("div",{className:"worldEditorContainer",children:(0,y.jsx)(U,{world:Q,selectedTileTypeId:N,tileTypes:oe,onError:f,worldId:C,xCoord:D,yCoord:W,scale:A,user:X,cursors:te,userIndex:q,tileLogicCoords:_,setTileLogicCoords:F})})]}):(0,y.jsx)(T,{onError:f})]})};document.title="Mortal Wombat Editor",(0,r.s)(document.querySelector("#root")).render((0,y.jsx)(o.StrictMode,{children:(0,y.jsx)(he,{})}))},63:function(e,t,n){n.d(t,{G9:function(){return v},Ib:function(){return g},Vx:function(){return f},ni:function(){return b},oL:function(){return h},oi:function(){return m},rZ:function(){return p}});var o=n(861),r=n(757),a=n.n(r),i=n(426),l=n(408),s=n(918);(0,i.ZF)({apiKey:"AIzaSyBEserPzSUos4MT3XRO8NKAO2oVk1-LS-I",authDomain:"mortal-wombat-8c76a.firebaseapp.com",projectId:"mortal-wombat-8c76a",storageBucket:"mortal-wombat-8c76a.appspot.com",messagingSenderId:"929181149015",appId:"1:929181149015:web:33a7f450bcdbb06ae64012",measurementId:"G-JL6HCMYYBS"});var c=(0,l.N8)(),u=(0,s.v0)(),d=(0,l.iH)(c),p="l5ybd0mu:2x3xfrsom4h",f=function(e,t){try{return(0,l.Vx)(d,e)}catch(n){console.error(n),t(n.message)}};"localhost:3000"===location.host&&(window._update=function(){var e=(0,o.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Vx)(d,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var m=function(){var e=(0,o.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.U2)((0,l.iU)(d,t));case 2:return e.abrupt("return",e.sent.val());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e,t,n){try{var o=(0,l.iH)(c,e);return(0,l.jM)(o,(function(e){return t(e.val()||{})})),function(){return(0,l.S1)(o)}}catch(r){console.error(r),n(r.message)}},g=function(e,t){return(0,s.e5)(u,e,t)},v=function(e){return(0,s.Aj)(u,e)},b=function(){return(0,s.w7)(u)}},457:function(e,t,n){n.d(t,{Ds:function(){return p},HK:function(){return u},M8:function(){return s},P2:function(){return f},aW:function(){return d},an:function(){return l},kQ:function(){return c}});var o=n(982),r=n(885),a=n(762),i=n(413),l=function(e,t){var n=(0,i.Z)({},t);return delete n[e],n},s=function(){return Date.now().toString(36)+":"+Math.random().toString(36).slice(2)},c=function(e){return/^[0-9a-z]{8,}:[0-9a-z]+$/.test(e)},u=function(e,t){var n,o={},r=(0,a.Z)(t);try{for(r.s();!(n=r.n()).done;){var i=n.value;o[e(i)]=i}}catch(l){r.e(l)}finally{r.f()}return o},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.entries(e).map((function(e){var t=(0,r.Z)(e,2),n=t[0],o=t[1];return(0,i.Z)({key:n},o)}))},p=function(e,t){var n,o=function(){for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];clearTimeout(n),n=setTimeout((function(){return e.apply(void 0,r)}),t)};return o.cancel=function(){return clearTimeout(n)},o},f=function(e,t){var n,r,a=!1,i=function i(){for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];a?r=s:(a=!0,n=setTimeout((function(){e.apply(void 0,s),a=!1,r&&i.apply(void 0,(0,o.Z)(r)),r=void 0}),t))};return i.cancel=function(){return clearTimeout(n)},i}},546:function(e,t,n){n.d(t,{V:function(){return o}});var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"image",n=(null===e||void 0===e?void 0:e[t])||(null===e||void 0===e?void 0:e.image);return n?"no-repeat center/contain url(".concat(n,")"):null===e||void 0===e?void 0:e.color}},915:function(e,t,n){n.d(t,{v:function(){return r}});var o=n(413),r=function e(t,n){if(void 0===t)return n;if(void 0===n)return t;if(t&&n&&"object"===typeof t&&"object"===typeof n){var r={};for(var a in(0,o.Z)((0,o.Z)({},t),n))r[a]=e(t[a],n[a]);return r}return t}},147:function(e){e.exports={i8:"0.1.29"}}}]);
//# sourceMappingURL=303.dde53fc1.chunk.js.map