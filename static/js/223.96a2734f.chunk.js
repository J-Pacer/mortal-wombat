"use strict";(self.webpackChunkmortal_wombat=self.webpackChunkmortal_wombat||[]).push([[223],{223:function(e,n,t){t.r(n);var r=t(791),o=t(250),a=t(885),i=t(184),c=function(e){var n=e.errors,t=e.clearError;return Object.keys(n).length>0&&(0,i.jsx)("div",{className:"errorBanner",children:Object.entries(n).map((function(e){var n=(0,a.Z)(e,2),r=n[0],o=n[1];return(0,i.jsxs)("div",{children:[o," ",(0,i.jsx)("a",{onClick:function(){return t(r)},children:"[x]"})]},r)}))})},u=t(942),s=t(408),l=t(63),d=function(e,n){var t=(0,r.useState)(void 0===localStorage[e]?n:function(e,n){try{return JSON.parse(e)}catch(t){return console.error(t),n}}(localStorage[e],n)),o=(0,a.Z)(t,2),i=o[0],c=o[1];return(0,r.useEffect)((function(){localStorage[e]=JSON.stringify(i)}),[i]),[i,c]},f=t(457),p=function(e){var n=new Date(e),t=n.getHours();return"".concat(t%12,":").concat(n.getMinutes()).concat(t>=12?"p":"a")},h=function(e){var n=e.onError,t=e.user,o=e.userIndex,c=(0,r.useState)({}),h=(0,a.Z)(c,2),m=h[0],v=h[1],y=d("chatMsg",""),x=(0,a.Z)(y,2),g=x[0],b=x[1],j=(0,r.useRef)(),w=(0,r.useRef)();(0,r.useEffect)((function(){return function(e,n){return(0,l.oL)("messages",e,n)}((function(e){v(e),setTimeout((function(){j.current&&(j.current.scrollTop=j.current.scrollHeight)}),1)}),n)}),[]);var C=(0,f.vM)((function(e){return function(e){return new Date(e).toLocaleDateString()}(e.tstamp)}),(0,f.aW)(m));return(0,i.jsxs)("div",{ref:j,className:"chat",onClick:function(){return w.current.focus()},children:[Object.entries(C).map((function(e){var n=(0,a.Z)(e,2),t=n[0],r=n[1];return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"date tstamp",children:t}),r.map((function(e,n,t){var r,a=e.key,c=e.message,u=e.user,s=e.tstamp;return(0,i.jsxs)("div",{className:"message"+(n&&s-t[n-1].tstamp>3e5?" gap":""),children:[(0,i.jsxs)("span",{className:"user",children:[(null===(r=o[u])||void 0===r?void 0:r.name)||u,":"]}),c,(0,i.jsx)("span",{className:"tstamp",children:p(s)})]},a)}))]},t)})),(0,i.jsx)("textarea",{ref:w,placeholder:"Type here and press enter to chat...",value:g,onChange:function(e){return b(e.target.value.replace(/^\s+/,""))},onKeyUp:function(e){"Enter"===e.key&&g&&(!function(e,n,t){(0,l.Vx)((0,u.Z)({},"messages/".concat((0,f.M8)()),{message:e.trim(),user:n.email,tstamp:(0,s.Bt)()}),t)}(g,t,n),b(""))}})]})},m=t(413),v=t(861),y=t(757),x=t.n(y),g=function(e){var n=e.onError,t=(0,r.useState)(""),o=(0,a.Z)(t,2),c=o[0],u=o[1],s=(0,r.useState)(""),d=(0,a.Z)(s,2),f=d[0],p=d[1];return(0,i.jsx)("div",{style:{width:300,margin:"50px auto"},children:(0,i.jsxs)("form",{className:"login",onSubmit:function(){var e=(0,v.Z)(x().mark((function e(t){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,(0,l.Ib)(c,f);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),n(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n){return e.apply(this,arguments)}}(),children:[(0,i.jsx)("input",{type:"email",placeholder:"email",value:c,onChange:function(e){return u(e.target.value)}}),(0,i.jsx)("input",{type:"password",placeholder:"password",value:f,onChange:function(e){return p(e.target.value)}}),(0,i.jsx)("button",{style:{width:"100%"},children:"Log In"})]})})},b=function(e){var n=(0,r.useState)({}),t=(0,a.Z)(n,2),o=t[0],i=t[1];return(0,r.useEffect)((function(){return(0,l.oL)("users",(function(e){return i(function(e){return(0,f.HK)((function(e){return e.email}),Object.values(e))}(e))}),e)}),[]),o},j=function(e,n,t,r){return{x:Math.floor((e.clientX-innerWidth/2)/n)+t,y:Math.floor((e.clientY-innerHeight/2)/n)+r}},w=function(e){return{background:e.image?"no-repeat center/contain url(".concat(e.image,")"):e.color}},C=function(e){var n=e.world,t=e.tileTypes,o=e.selectedTileTypeId,c=e.onError,s=e.xCoord,d=e.yCoord,p=e.scale,h=e.user,v=(0,r.useRef)(),y=(0,r.useMemo)((function(){return(0,f.HK)((function(e){return e.id}),(0,f.aW)(t))}),[t]),x=function(e){var t,r=j(e,p,s,d),a=r.x,i=r.y,f=null===(t=n["".concat(a,"_").concat(i)])||void 0===t?void 0:t.tileType;!f&&"_delete"===o||f===o||function(e,n,t,r,o){(0,l.Oz)((0,u.Z)({},"world/".concat(e,"_").concat(n),"_delete"===t?null:{x:e,y:n,tileType:t}),r,o)}(a,i,o,h,c)},g=innerWidth/2-s*p,b=innerHeight/2-d*p;return(0,i.jsx)("div",{className:"world",onClick:o?x:void 0,onMouseMove:o?function(e){var n,t=j(e,p,s,d),r=t.x,o=t.y,a=null===(n=v.current)||void 0===n?void 0:n.style;a.left=r*p+"px",a.top=o*p+"px",e.buttons&&x(e)}:void 0,children:(0,i.jsxs)("div",{style:{transform:"translate(".concat(g,"px,").concat(b,"px)")},children:[Object.entries(n).filter((function(e){var n=(0,a.Z)(e,2),t=n[0],r=n[1];return!!y[r.tileType]||(console.log("BAD DATA",t,r),!1)})).map((function(e){var n=(0,a.Z)(e,2),t=n[0],r=n[1],o=r.x,c=r.y,u=r.tileType;return(0,i.jsx)("div",{className:"tile",style:(0,m.Z)({left:o*p+"px",top:c*p+"px"},w(y[u]))},t)})),o&&(0,i.jsx)("div",{ref:v,className:"ghost tile",style:w(y[o])})]})})},T=function(e){var n=e.tileTypes,t=e.selectedTileTypeId,r=e.setSelectedTileTypeId,o=e.showTileTypeEditor,a=e.setShowTileTypeEditor;return(0,i.jsx)("div",{className:"toolBar",children:Object.values(n).sort((function(e,n){return e.order-n.order})).map((function(e){return(0,i.jsx)("div",{className:"tileType"+(t===e.id?" selected":""),style:w(e),title:o?"":"Double click to edit tile properties.",onClick:function(){a(!1),r(e.id)},onDoubleClick:function(){return e.id&&!e.id.startsWith("_")&&a(!0)},children:(0,i.jsx)("label",{children:e.label})},e.label)}))})},k={KeyS:"down",KeyA:"left",KeyW:"up",KeyD:"right",ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right"},Z=function(e){var n=(0,r.useRef)();return(0,r.useEffect)((function(){var e=n.current.style;e.transition="all 0s",e.height="1px",e.height=n.current.scrollHeight+"px"})),(0,i.jsx)("textarea",(0,m.Z)((0,m.Z)({},e),{},{ref:n}))},S=function(e,n,t,r){var o,i=(0,a.Z)(n[e],2),c=i[0],s=i[1].order,d=(0,a.Z)(n[e+t],2),f=d[0],p=d[1].order;(0,l.Vx)((o={},(0,u.Z)(o,"todos/".concat(c,"/order"),p),(0,u.Z)(o,"todos/".concat(f,"/order"),s),o),r)},E=function(e){var n=e.onError,t=(0,r.useState)([]),o=(0,a.Z)(t,2),c=o[0],s=o[1];(0,r.useEffect)((function(){return function(e,n){return(0,l.oL)("todos",e,n)}(s,n)}),[]);var d=Object.entries(c).sort((function(e,n){return e[1].order-n[1].order}));return(0,i.jsxs)("div",{className:"todos",children:[d.map((function(e,t,r){var o=(0,a.Z)(e,2),c=o[0],s=o[1],d=s.value,f=s.checked,p=void 0!==f&&f;return(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{type:"checkbox",checked:p,onChange:function(e){return function(e,n,t){return(0,l.Vx)((0,u.Z)({},"todos/".concat(e,"/checked"),n),t)}(c,e.target.checked,n)}}),p?(0,i.jsx)("span",{className:"done",children:d}):(0,i.jsx)(Z,{title:"Edit Text",value:d,onChange:function(e){return function(e,n,t){return(0,l.Vx)((0,u.Z)({},"todos/".concat(e,"/value"),n),t)}(c,e.target.value,n)}}),(0,i.jsx)("a",{title:"Move Up",style:{visibility:0===t?"hidden":"visible"},onClick:function(){return S(t,r,-1,n)},children:"\u2191"}),(0,i.jsx)("a",{title:"Move Down",style:{visibility:t===r.length-1?"hidden":"visible"},onClick:function(){return S(t,r,1,n)},children:"\u2193"}),(0,i.jsx)("a",{title:"Delete",onClick:function(){(p||confirm('Are you sure you want to delete "'.concat(d,'"?')))&&function(e,n){(0,l.Vx)((0,u.Z)({},"todos/".concat(e),null),n)}(c,n)},children:"x"})]},c)})),(0,i.jsx)("button",{onClick:function(){return function(e,n){return(0,l.Vx)((0,u.Z)({},"todos/".concat((0,f.M8)()),{value:"New item",order:e}),n)}(d.length,n)},children:"Add New Item"})]})},N=function(e){var n,t=e.user,r=e.setScale,o=e.zoomAmt,a=e.userIndex,c=e.children;return(0,i.jsxs)("nav",{children:[t&&(0,i.jsxs)("div",{style:{float:"right"},children:[(0,i.jsx)("button",{onClick:function(){return r((function(e){return Math.round(e*o)}))},children:(0,i.jsx)("i",{className:"fa-solid fa-magnifying-glass-plus"})}),(0,i.jsx)("button",{onClick:function(){return r((function(e){return Math.round(e/o)}))},children:(0,i.jsx)("i",{className:"fa-solid fa-magnifying-glass-minus"})}),(0,i.jsxs)("a",{className:"button",href:location.href.replace(/\?.*/,""),target:"_blank",rel:"noreferrer",children:[(0,i.jsx)("i",{className:"fa-solid fa-play"})," Play"]}),"Hi, ",(null===(n=a[t.email])||void 0===n?void 0:n.name)||t.email,"! (",(0,i.jsx)("a",{onClick:l.ni,children:"log out"}),")"]}),(0,i.jsx)("b",{children:"Game Editor"}),c]})},M={text:function(e){var n=e.value,t=void 0===n?"":n,r=e.onChange;return(0,i.jsx)("input",{type:"text",value:t,onChange:function(e){return r(e.target.value)}})},number:function(e){var n=e.value,t=void 0===n?"":n,r=e.onChange;return(0,i.jsx)("input",{type:"number",value:t,onChange:function(e){return r(e.target.value)}})},checkbox:function(e){var n=e.value,t=void 0!==n&&n,r=e.onChange;return(0,i.jsx)("input",{type:"checkbox",checked:t,onChange:function(e){return r(e.target.checked)}})}},I=function(e){var n=e.fields,t=e.data,r=e.onChange;return n.map((function(e){var n=e.prop,o=e.label,a=e.type,c=e.info,u=M[a];return(0,i.jsxs)("div",{title:c,children:[(0,i.jsx)("label",{children:o}),(0,i.jsx)(u,{value:null===t||void 0===t?void 0:t[n],onChange:function(e){return r(e,n)}})]},n)}))},O=[{prop:"label",label:"Label",type:"text",info:"The label you see in the tool bar below."},{prop:"image",label:"Image URL",type:"text",info:"The image. uhduhhhh"},{prop:"color",label:"Color",type:"text",info:"The color to use if there is no image"},{prop:"healing",label:"Healing",type:"number",info:"How much does it heal (or hurt) when you eat/touch it (per frame)?"},{prop:"edible",label:"Edible",type:"checkbox",info:"Can you eat it?"},{prop:"diggable",label:"Diggable",type:"checkbox",info:"Can you dig it?"},{prop:"collectible",label:"Collectible",type:"checkbox",info:"Can you collect it?"},{prop:"movable",label:"Movable",type:"checkbox",info:"Can you push it?"},{prop:"order",label:"Order",type:"number",info:"The order it shows up in the toolbar below"}],D=function(e){var n=e.selectedTileTypeId,t=e.tileTypes,r=e.user,o=e.onError,a=(0,f.aW)(t).find((function(e){return e.id===n}));return a&&(0,i.jsx)("div",{className:"tileTypeEditor",children:(0,i.jsx)(I,{fields:O,data:a,onChange:function(e,n){(0,l.Oz)((0,u.Z)({},"tileTypes/".concat(a.key,"/").concat(n),e),r,o)}})})},H=function(e){var n=e.className,t=e.hide,r=e.label,o=e.children;return(0,i.jsxs)("div",{className:"pane ".concat(n),children:[(0,i.jsxs)("header",{children:[(0,i.jsx)("a",{onClick:t,children:"[x]"}),(0,i.jsx)("strong",{children:r})]}),o]})},L=[{prop:"digSpeed",label:"Wombat Digging Speed",type:"number",info:"How fast much can you dig in one frame?"},{prop:"eatSpeed",label:"Wombat Eating Speed",type:"number",info:"How fast much can you eat in one frame?"},{prop:"gravity",label:"Gravity",type:"number",info:"How strong is gravity?"},{prop:"health",label:"Wombat Starting Health",type:"number",info:"How much health do you start with?"},{prop:"jumpPower",label:"Wombat Jumping Power",type:"number",info:"How much jumping power do you start with?"},{prop:"moveSpeed",label:"Wombat Walking Speed",type:"number",info:"How fast can you move?"},{prop:"moveDeceleration",label:"Wombat Deceleration",type:"number",info:"How fast can you slow down?"},{prop:"magmaDelay",label:"Magma Delay",type:"number",info:"Number of frames between magma movements"}],A=function(e){var n=e.onError,t=e.user,o=function(e){var n=(0,r.useState)(),t=(0,a.Z)(n,2),o=t[0],i=t[1];return(0,r.useEffect)((function(){return(0,l.oL)("gameConfig",i,e)}),[]),o}(n);return(0,i.jsx)("div",{className:"gameConfig",children:(0,i.jsx)(I,{fields:L,data:o,onChange:function(e,r){(0,l.Oz)((0,u.Z)({},"gameConfig/".concat(r),e),t,n)}})})},W=(0,f.Ds)((function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];location.hash=n.join("/")}),1e3),B=[{key:"chat",label:"Chat",icon:"message"},{key:"todos",label:"Todos",icon:"list-check"},{key:"gameConfig",label:"Config",icon:"toolbox"},{key:"tte",label:"Tile Type Editor",hideButton:!0},{key:"debug",label:"Debug",icon:"bug"}],K=function(){var e,n=function(){var e=(0,r.useState)({}),n=(0,a.Z)(e,2),t=n[0],o=n[1];return[t,function(e){o((function(n){return(0,m.Z)((0,m.Z)({},n),{},(0,u.Z)({},(0,f.M8)(),e))}))},function(e){return o((function(n){return(0,f.an)(e,n)}))}]}(),t=(0,a.Z)(n,3),o=t[0],s=t[1],p=t[2],v=function(){var e=(0,r.useState)(),n=(0,a.Z)(e,2),t=n[0],o=n[1];return(0,r.useEffect)((function(){return(0,l.G9)(o)}),[]),t}(),y=b(s),x=function(e){var n=(0,r.useState)(),t=(0,a.Z)(n,2),o=t[0],i=t[1];return(0,r.useEffect)((function(){return(0,l.oL)("tileTypes",i,e)}),[]),o}(s),j=function(e){var n=(0,r.useState)({}),t=(0,a.Z)(n,2),o=t[0],i=t[1];return(0,r.useEffect)((function(){return(0,l.oL)("world",i,e)}),[]),o}(s),w=(0,r.useState)(),Z=(0,a.Z)(w,2),S=Z[0],M=Z[1],I=function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=d("xCoord",arguments.length>0&&void 0!==arguments[0]?arguments[0]:0),t=(0,a.Z)(n,2),o=t[0],i=t[1],c=d("yCoord",e),u=(0,a.Z)(c,2),s=u[0],l=u[1];return(0,r.useEffect)((function(){var e=function(e){if(e.target===document.body){var n=k[e.code];"up"===n&&l((function(e){return e-4})),"down"===n&&l((function(e){return e+4})),"left"===n&&i((function(e){return e-4})),"right"===n&&i((function(e){return e+4}))}};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]),{xCoord:o,yCoord:s,setXCoord:i,setYCoord:l}}(16,4),O=I.xCoord,L=I.yCoord,K=I.setXCoord,V=I.setYCoord,z=d("scale",32),_=(0,a.Z)(z,2),R=_[0],U=_[1],Y=(e=B,Object.fromEntries(e.map((function(e){var n=e.key,t=e.label,r=e.icon,o=e.hideButton,c=d("show"+t,!1),u=(0,a.Z)(c,2),s=u[0],l=u[1],f=!o&&(0,i.jsxs)("button",{className:s?"active":"",onClick:function(){return l((function(e){return!e}))},children:[(0,i.jsx)("i",{className:"fa-solid fa-".concat(r)})," ",t]},n);return[n,{pane:function(e){var r=e.children;return s&&(0,i.jsx)(H,{label:t,className:"".concat(n,"Container"),hide:function(){return l(!1)},children:r})},button:f,show:s,setShow:l}]}))));return(0,r.useEffect)((function(){document.documentElement.style.setProperty("--scale",R+"px")}),[R]),function(e){var n=e.xCoord,t=e.yCoord,o=e.scale,i=e.setXCoord,c=e.setYCoord,u=e.setScale;(0,r.useEffect)((function(){return W(n,t,o),W.cancel}),[o,n,t]),(0,r.useEffect)((function(){var e=function(){var e,n=null===(e=location.hash)||void 0===e?void 0:e.match(/^#(\d+)\/(\d+)\/(\d+)$/);if(n){var t=n.map(Number),r=(0,a.Z)(t,4),o=r[1],s=r[2],l=r[3];i(o),c(s),u(l)}};return window.addEventListener("hashchange",e),function(){window.removeEventListener("hashchange",e)}}),[])}({xCoord:O,yCoord:L,scale:R,setXCoord:K,setYCoord:V,setScale:U}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(N,{user:v,scale:R,setScale:U,zoomAmt:1.25,userIndex:y,children:Object.values(Y).map((function(e){return e.button}))}),(0,i.jsx)(c,{errors:o,clearError:p}),v?(0,i.jsxs)("div",{className:"appContainer",children:[(0,i.jsx)(Y.chat.pane,{children:(0,i.jsx)(h,{onError:s,user:v,userIndex:y})}),(0,i.jsx)(Y.todos.pane,{children:(0,i.jsx)(E,{onError:s})}),(0,i.jsx)(Y.debug.pane,{children:(0,i.jsx)("textarea",{readOnly:!0,value:JSON.stringify({xCoord:O,yCoord:L,scale:R,selectedTileTypeId:S,errors:o,user:v},null,2)})}),S&&x&&Object.values(x).some((function(e){return e.id===S}))&&(0,i.jsx)(Y.tte.pane,{children:(0,i.jsx)(D,{selectedTileTypeId:S,tileTypes:x,user:v,onError:s})}),(0,i.jsx)(Y.gameConfig.pane,{children:(0,i.jsx)(A,{onError:s,user:v})}),x&&(0,i.jsx)("div",{className:"toolContainer",children:(0,i.jsx)(T,{tileTypes:x,selectedTileTypeId:S,setSelectedTileTypeId:M,showTileTypeEditor:Y.tte.show,setShowTileTypeEditor:Y.tte.setShow})}),j&&x&&(0,i.jsx)("div",{className:"worldEditorContainer",children:(0,i.jsx)(C,{world:j,selectedTileTypeId:S,tileTypes:x,onError:s,xCoord:O,yCoord:L,scale:R,user:v})})]}):(0,i.jsx)(g,{onError:s})]})};document.title="Mortal Wombat Editor",(0,o.s)(document.querySelector("#root")).render((0,i.jsx)(r.StrictMode,{children:(0,i.jsx)(K,{})}))},63:function(e,n,t){t.d(n,{G9:function(){return b},Ib:function(){return g},Oz:function(){return v},Vx:function(){return m},mu:function(){return y},ni:function(){return j},oL:function(){return x}});var r=t(861),o=t(942),a=t(413),i=t(757),c=t.n(i),u=t(426),s=t(408),l=t(162),d=t(457);(0,u.ZF)({apiKey:"AIzaSyBEserPzSUos4MT3XRO8NKAO2oVk1-LS-I",authDomain:"mortal-wombat-8c76a.firebaseapp.com",projectId:"mortal-wombat-8c76a",storageBucket:"mortal-wombat-8c76a.appspot.com",messagingSenderId:"929181149015",appId:"1:929181149015:web:33a7f450bcdbb06ae64012",measurementId:"G-JL6HCMYYBS"});var f=(0,s.N8)(),p=(0,l.v0)(),h=(0,s.iH)(f),m=function(e,n){try{return console.log("updates",e),(0,s.Vx)(h,e)}catch(t){console.error(t),n(t.message)}},v=function(e,n,t){return m((0,a.Z)((0,a.Z)({},e),{},(0,o.Z)({},"history/".concat((0,d.M8)()),{update:JSON.stringify(e),user:n.email,tstamp:(0,s.Bt)()})),t)},y=function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Object,e.next=3,Promise.all(n.map(function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,(0,s.U2)((0,s.iU)(h,n));case 3:return e.t1=e.sent.val(),e.abrupt("return",[e.t0,e.t1]);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 3:return e.t1=e.sent,e.abrupt("return",e.t0.fromEntries.call(e.t0,e.t1));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(e,n,t){try{var r=(0,s.iH)(f,e);return(0,s.jM)(r,(function(e){return n(e.val())})),function(){return(0,s.S1)(r)}}catch(o){console.error(o),t(o.message)}},g=function(e,n){return(0,l.e5)(p,e,n)},b=function(e){return(0,l.Aj)(p,e)},j=function(){return(0,l.w7)(p)}},457:function(e,n,t){t.d(n,{Ds:function(){return d},HK:function(){return s},M8:function(){return c},aW:function(){return l},an:function(){return i},vM:function(){return u}});var r=t(885),o=t(762),a=t(413),i=function(e,n){var t=(0,a.Z)({},n);return delete t[e],t},c=function(){return Date.now().toString(36)+":"+Math.random().toString(36).slice(2)},u=function(e,n){var t,r={},a=(0,o.Z)(n);try{for(a.s();!(t=a.n()).done;){var i=t.value,c=e(i);(r[c]=r[c]||[]).push(i)}}catch(u){a.e(u)}finally{a.f()}return r},s=function(e,n){var t,r={},a=(0,o.Z)(n);try{for(a.s();!(t=a.n()).done;){var i=t.value;r[e(i)]=i}}catch(c){a.e(c)}finally{a.f()}return r},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.entries(e).map((function(e){var n=(0,r.Z)(e,2),t=n[0],o=n[1];return(0,a.Z)({key:t},o)}))},d=function(e,n){var t,r=function(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];clearTimeout(t),t=setTimeout((function(){return e.apply(void 0,o)}),n)};return r.cancel=function(){return clearTimeout(t)},r}}}]);
//# sourceMappingURL=223.96a2734f.chunk.js.map