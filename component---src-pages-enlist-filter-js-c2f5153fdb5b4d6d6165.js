(self.webpackChunktkfmtools=self.webpackChunktkfmtools||[]).push([[182],{8169:function(e,t,n){"use strict";var r=n(22122),o=n(19756),i=n(75900),a=n.n(i),c=n(67294),l=n(99541),s=c.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,s=e.striped,u=e.bordered,d=e.borderless,m=e.hover,f=e.size,p=e.variant,g=e.responsive,h=(0,o.Z)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),y=(0,l.vE)(n,"table"),v=a()(i,y,p&&y+"-"+p,f&&y+"-"+f,s&&y+"-striped",u&&y+"-bordered",d&&y+"-borderless",m&&y+"-hover"),b=c.createElement("table",(0,r.Z)({},h,{className:v,ref:t}));if(g){var E=y+"-responsive";return"string"==typeof g&&(E=E+"-"+g),c.createElement("div",{className:E},b)}return b}));t.Z=s},47233:function(e,t,n){"use strict";n.d(t,{Ps:function(){return p},ac:function(){return v}});var r=n(19756),o=n(67294),i=n(50009),a=n(57954),c=n(87908),l=n(28437),s=n(68912),u=(0,i.ZP)(c.Q).withConfig({displayName:"CharCard__StyledCard",componentId:"sc-1p8ym1z-0"})(["flex-direction:column;align-items:flex-end;justify-content:space-around;width:100%;min-width:10rem;height:3.6rem;background-repeat:no-repeat;background-size:6rem 6rem;background-position:0 -1.6rem;"]),d=i.ZP.div.withConfig({displayName:"CharCard__TextWrapper",componentId:"sc-1p8ym1z-1"})(["margin-left:0;margin-right:1rem;transition:all 0.3s ease;text-transform:none;text-shadow:0 0 1px ",",-2px 0 1px  ",",2px 0 1px  ",",0 -2px 1px ",",0 2px 1px  ",",2px 2px 1px ",",2px -2px 1px ",",-2px 2px 1px ",",-2px -2px 1px ",";"],(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface})),m=(0,i.ZP)(d).withConfig({displayName:"CharCard__TitleText",componentId:"sc-1p8ym1z-2"})(["font-size:small;"]),f=function(e){var t=e.className,n=e.id,r=(0,a.f)().charString;return o.createElement(u,{className:t,imgType:"char_small",imgId:n,alt:"",isBackground:!0},o.createElement(m,null,r.name[n].split(" ").slice(0,-1).join(" ")),o.createElement(d,null,r.name[n].split(" ").slice(-1)[0]))},p=(0,i.ZP)(f).withConfig({displayName:"CharCard__ResponsiveCharCard",componentId:"sc-1p8ym1z-3"})(["@media screen and (min-width:","px){flex-direction:row;align-items:center;justify-content:flex-start;> div{margin-left:7rem}> div:last-child{margin-left:-.6rem;}}"],(function(e){return e.$textWrapConfig})),g=i.ZP.div.withConfig({displayName:"CharCard__TagWrapper",componentId:"sc-1p8ym1z-4"})(["display:flex;flex-direction:row;"]),h=i.ZP.div.withConfig({displayName:"CharCard__IconWrapper",componentId:"sc-1p8ym1z-5"})(["margin-bottom:.1rem;margin-left:.25rem;margin-right:.4rem;> svg{width:1.2rem;fill:",";color:",";}"],(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.secondary})),y=function(e){var t=e.type,n=e.tag,r=(0,a.f)().charString,i={attribute:l.XV,position:l.$g,race:l.i6,body:l.cp,oppai:l.JU,rank:l.U2,else:l.fP};return o.createElement("tr",null,o.createElement("td",null,o.createElement(g,null,o.createElement(h,null,i[t]),r.tags[n])))},v=function(e){var t=e.id,n=(0,a.f)().charString,i=s.find((function(e){return e.id===t})).tags,l=i.available,u=(0,r.Z)(i,["available"]);return l?o.createElement(c.cP,{striped:!0},o.createElement("tbody",null,Object.entries(u).map((function(e,t){return"else"===e[0]?e[1].map((function(e,n){return o.createElement(y,{key:t+n,type:"else",tag:e})})):e[1]>=0?o.createElement(y,{key:t,type:e[0],tag:e[1]}):null})))):o.createElement(c.cP,{striped:!0},o.createElement("tbody",null,o.createElement("tr",null,o.createElement("td",null,n.tagWarnMsg))))};t.ZP=f},99870:function(e,t,n){"use strict";n.d(t,{Re:function(){return u},dJ:function(){return m},Ac:function(){return g}});var r=n(85061),o=n(67294),i=n(50009),a=n(8169),c=n(50033),l=n(57954),s=n(17182),u=i.ZP.th.withConfig({displayName:"FilterComponents__SortableTh",componentId:"sc-2r2g3y-0"})(["cursor:pointer;user-select:none;background-color:",";color:",";&:after{content:'","';}"],(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.onSurface}),(function(e){return e.direction?"asc"===e.direction?" \\25B2":" \\25BC":void 0})),d=(0,i.ZP)(a.Z).withConfig({displayName:"FilterComponents__StyledTable",componentId:"sc-2r2g3y-1"})(["width:100%;margin-bottom:0;th{position:sticky;top:0;z-index:1;}&,&&& tr{color:",";}th{padding:.75rem .25rem;}th:first-child{padding-left:.75rem;}td{vertical-align:middle;}tr{border-bottom:",";}"],(function(e){return e.theme.colors.onSurface}),(function(e){return e.$border?"1px solid "+e.theme.colors.secondary:"none"})),m=function(e){var t=e.className,n=e.data,i=e.head,a=e.body,c=e.sortFunc,l=e.defaultSortKey,s=e.striped,u=e.border,m=function(e,t){void 0===t&&(t={key:l,direction:"desc"});var n=(0,o.useState)(t),i=n[0],a=n[1];return{sortedResult:(0,o.useMemo)((function(){var t=(0,r.Z)(e);return i.key&&c(t,i),t}),[e,i]),requestSort:function(e){var t=i.key===e&&"desc"===i.direction?"asc":"desc";a({key:e,direction:t})},sortConfig:i}}(n),f=m.sortedResult,p=m.requestSort,g=m.sortConfig;(0,o.useEffect)((function(){g.key!==l&&p(l)}),[l]);return o.createElement(d,{className:t,striped:s,borderless:!0,hover:!0,$border:u,size:"sm"},o.cloneElement(i,{requestSort:p,getSortDirection:function(e){return n&&0!==n.length&&g.key===e?g.direction:void 0},sortedResult:f}),o.cloneElement(a,{sortedResult:f}))},f=(0,i.ZP)(c.Z).withConfig({displayName:"FilterComponents__TableWrapper",componentId:"sc-2r2g3y-2"})(["height:",";overflow-x:hidden;overflow-y:auto;"],(function(e){return e.$height})),p=(0,i.ZP)(m).withConfig({displayName:"FilterComponents__StyledSortableTable",componentId:"sc-2r2g3y-3"})(["img{width:1.8rem;height:1.8rem;}td{padding-left:.75rem;}"]);function g(e){var t=e.data,n=e.head,r=e.body,i=e.sortFunc,a=e.defaultSortKey,c=e.handleModalOpen,u=e.height,d=e.striped,m=(0,l.f)().pageString;return o.createElement(o.Fragment,null,o.createElement(s.Z,{title:m.items.drop.filter.resultTitle,withHelp:!0,onClickHelp:c,border:!0}),o.createElement(f,{$height:u},o.createElement(p,{data:t,head:n,body:r,sortFunc:i,defaultSortKey:a,striped:d})))}},87908:function(e,t,n){"use strict";n.d(t,{Q:function(){return u},qg:function(){return f},cP:function(){return g}});var r=n(67294),o=n(50009),i=n(8169),a=n(57954),c=n(93175),l=(0,o.ZP)(c.Z).withConfig({displayName:"MyCard__StyledImg",componentId:"sc-1txoees-0"})(["display:flex;justify-content:center;align-items:center;width:100%;background-repeat:no-repeat;"]),s=o.ZP.div.withConfig({displayName:"MyCard__ImgWrapper",componentId:"sc-1txoees-1"})(["display:flex;align-items:center;justify-content:center;"]),u=function(e){var t=e.children,n=e.className,o=e.imgType,i=e.imgId,a=e.alt;return e.isBackground?r.createElement(l,{className:n,name:o+"_"+i,isBackground:!0,alt:a},t):r.createElement(s,{className:n},r.createElement(l,{name:o+"_"+i,alt:a}),t)},d=(0,o.ZP)(u).withConfig({displayName:"MyCard__ItemImg",componentId:"sc-1txoees-2"})(["> div:first-child{width:2.5rem;height:2.5rem;margin-right:.4rem;user-select:none;}"]),m=o.ZP.div.withConfig({displayName:"MyCard__TextWrapper",componentId:"sc-1txoees-3"})(["white-space:nowrap;font-size:medium;font-weight:normal;"]),f=function(e){var t=e.className,n=e.id,o=(0,a.f)().itemString;return r.createElement(d,{className:t,imgType:"item",imgId:n,alt:""},r.createElement(m,null,o.name[n]))},p=(0,o.ZP)(i.Z).withConfig({displayName:"MyCard__StyledTable",componentId:"sc-1txoees-4"})(["font-size:.9rem;color:",";margin:0;> tbody > tr >{td:first-child{padding-left:.75rem;}}"],(function(e){return e.theme.colors.onSurface})),g=function(e){var t=e.className,n=e.children,o=e.striped;return r.createElement(p,{className:t,striped:o,borderless:!0,size:"sm"},n)}},44988:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(67294),o=n(50009),i=n(81253),a=n(96156),c=n(22122),l=n(85505),s=n(34621),u=n(381),d=n(73935),m=n(70703),f=n(11291),p=n(57544);function g(e){return e.substring(2).toLowerCase()}var h=function(e){var t=e.children,n=e.disableReactTree,o=void 0!==n&&n,i=e.mouseEvent,a=void 0===i?"onClick":i,c=e.onClickAway,l=e.touchEvent,s=void 0===l?"onTouchEnd":l,u=r.useRef(!1),h=r.useRef(null),y=r.useRef(!1),v=r.useRef(!1);r.useEffect((function(){return setTimeout((function(){y.current=!0}),0),function(){y.current=!1}}),[]);var b=r.useCallback((function(e){h.current=d.findDOMNode(e)}),[]),E=(0,f.Z)(t.ref,b),C=(0,p.Z)((function(e){var t=v.current;if(v.current=!1,y.current&&h.current&&!function(e){return document.documentElement.clientWidth<e.clientX||document.documentElement.clientHeight<e.clientY}(e))if(u.current)u.current=!1;else{var n;if(e.composedPath)n=e.composedPath().indexOf(h.current)>-1;else n=!(0,m.Z)(h.current).documentElement.contains(e.target)||h.current.contains(e.target);n||!o&&t||c(e)}})),x=function(e){return function(n){v.current=!0;var r=t.props[e];r&&r(n)}},w={ref:E};return!1!==s&&(w[s]=x(s)),r.useEffect((function(){if(!1!==s){var e=g(s),t=(0,m.Z)(h.current),n=function(){u.current=!0};return t.addEventListener(e,C),t.addEventListener("touchmove",n),function(){t.removeEventListener(e,C),t.removeEventListener("touchmove",n)}}}),[C,s]),!1!==a&&(w[a]=x(a)),r.useEffect((function(){if(!1!==a){var e=g(a),t=(0,m.Z)(h.current);return t.addEventListener(e,C),function(){t.removeEventListener(e,C)}}}),[C,a]),r.createElement(r.Fragment,null,r.cloneElement(t,w))},y=n(81664),v=n(88231),b=n(43337),E=n(58063),C=n(37595),x=r.forwardRef((function(e,t){var n=e.action,o=e.classes,a=e.className,s=e.message,u=e.role,d=void 0===u?"alert":u,m=(0,i.Z)(e,["action","classes","className","message","role"]);return r.createElement(E.Z,(0,c.Z)({role:d,square:!0,elevation:6,className:(0,l.Z)(o.root,a),ref:t},m),r.createElement("div",{className:o.message},s),n?r.createElement("div",{className:o.action},n):null)})),w=(0,s.Z)((function(e){var t="light"===e.palette.type?.8:.98,n=(0,C._4)(e.palette.background.default,t);return{root:(0,c.Z)({},e.typography.body2,(0,a.Z)({color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(x),Z=r.forwardRef((function(e,t){var n=e.action,o=e.anchorOrigin,a=(o=void 0===o?{vertical:"bottom",horizontal:"center"}:o).vertical,s=o.horizontal,d=e.autoHideDuration,m=void 0===d?null:d,f=e.children,g=e.classes,E=e.className,C=e.ClickAwayListenerProps,x=e.ContentProps,Z=e.disableWindowBlurListener,k=void 0!==Z&&Z,S=e.message,N=e.onClose,_=e.onEnter,T=e.onEntered,P=e.onEntering,I=e.onExit,O=e.onExited,B=e.onExiting,z=e.onMouseEnter,M=e.onMouseLeave,R=e.open,j=e.resumeHideDuration,L=e.TransitionComponent,W=void 0===L?b.Z:L,$=e.transitionDuration,V=void 0===$?{enter:u.x9.enteringScreen,exit:u.x9.leavingScreen}:$,H=e.TransitionProps,q=(0,i.Z)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),A=r.useRef(),F=r.useState(!0),D=F[0],G=F[1],J=(0,p.Z)((function(){N&&N.apply(void 0,arguments)})),U=(0,p.Z)((function(e){N&&null!=e&&(clearTimeout(A.current),A.current=setTimeout((function(){J(null,"timeout")}),e))}));r.useEffect((function(){return R&&U(m),function(){clearTimeout(A.current)}}),[R,m,U]);var K=function(){clearTimeout(A.current)},X=r.useCallback((function(){null!=m&&U(null!=j?j:.5*m)}),[m,j,U]);return r.useEffect((function(){if(!k&&R)return window.addEventListener("focus",X),window.addEventListener("blur",K),function(){window.removeEventListener("focus",X),window.removeEventListener("blur",K)}}),[k,X,R]),!R&&D?null:r.createElement(h,(0,c.Z)({onClickAway:function(e){N&&N(e,"clickaway")}},C),r.createElement("div",(0,c.Z)({className:(0,l.Z)(g.root,g["anchorOrigin".concat((0,y.Z)(a)).concat((0,y.Z)(s))],E),onMouseEnter:function(e){z&&z(e),K()},onMouseLeave:function(e){M&&M(e),X()},ref:t},q),r.createElement(W,(0,c.Z)({appear:!0,in:R,onEnter:(0,v.Z)((function(){G(!1)}),_),onEntered:T,onEntering:P,onExit:I,onExited:(0,v.Z)((function(){G(!0)}),O),onExiting:B,timeout:V,direction:"top"===a?"down":"up"},H),f||r.createElement(w,(0,c.Z)({message:S,action:n},x)))))})),k=(0,s.Z)((function(e){var t={top:8},n={bottom:8},r={justifyContent:"flex-end"},o={justifyContent:"flex-start"},i={top:24},l={bottom:24},s={right:24},u={left:24},d={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:(0,c.Z)({},t,(0,a.Z)({},e.breakpoints.up("sm"),(0,c.Z)({},i,d))),anchorOriginBottomCenter:(0,c.Z)({},n,(0,a.Z)({},e.breakpoints.up("sm"),(0,c.Z)({},l,d))),anchorOriginTopRight:(0,c.Z)({},t,r,(0,a.Z)({},e.breakpoints.up("sm"),(0,c.Z)({left:"auto"},i,s))),anchorOriginBottomRight:(0,c.Z)({},n,r,(0,a.Z)({},e.breakpoints.up("sm"),(0,c.Z)({left:"auto"},l,s))),anchorOriginTopLeft:(0,c.Z)({},t,o,(0,a.Z)({},e.breakpoints.up("sm"),(0,c.Z)({right:"auto"},i,u))),anchorOriginBottomLeft:(0,c.Z)({},n,o,(0,a.Z)({},e.breakpoints.up("sm"),(0,c.Z)({right:"auto"},l,u)))}}),{flip:!1,name:"MuiSnackbar"})(Z),S=n(28437),N=(0,o.ZP)(k).withConfig({displayName:"MySnackbar__StyledSnackbar",componentId:"svwosn-0"})(["> div{display:flex;flex-direction:row-reverse;justify-content:center;background-color:",";font-size:medium;}.MuiSnackbarContent-action{margin:0;padding:0;}svg{width:1.4rem;height:1.4rem;margin-right:.4rem;fill:",";}"],(function(e){return"warn"===e.$type?e.theme.colors.warn:"success"===e.$type?e.theme.colors.success:e.theme.colors.error}),(function(e){return"warn"===e.$type?e.theme.colors.onWarn:"success"===e.$type?e.theme.colors.onSuccess:e.theme.colors.onError})),_=function(e){var t=e.open,n=e.onClose,o=e.message,i=e.type,a={success:S.tm,warn:S.zM,error:S.Pz};return r.createElement(N,{open:t,autoHideDuration:3e3,onClose:n,anchorOrigin:{vertical:"bottom",horizontal:"center"},message:o,action:a[i],$type:i})}},55317:function(e,t,n){"use strict";n.d(t,{K:function(){return w},Z:function(){return k}});var r=n(67294),o=n(50009),i=n(22122),a=n(19756),c=n(75900),l=n.n(c),s=n(46594),u=function(){},d=r.forwardRef((function(e,t){var n=e.children,o=e.name,c=e.className,d=e.checked,m=e.type,f=e.onChange,p=e.value,g=e.disabled,h=e.inputRef,y=(0,a.Z)(e,["children","name","className","checked","type","onChange","value","disabled","inputRef"]),v=(0,r.useState)(!1),b=v[0],E=v[1],C=(0,r.useCallback)((function(e){"INPUT"===e.target.tagName&&E(!0)}),[]),x=(0,r.useCallback)((function(e){"INPUT"===e.target.tagName&&E(!1)}),[]);return r.createElement(s.Z,(0,i.Z)({},y,{ref:t,className:l()(c,b&&"focus",g&&"disabled"),type:void 0,active:!!d,as:"label"}),r.createElement("input",{name:o,type:m,value:p,ref:h,autoComplete:"off",checked:!!d,disabled:!!g,onFocus:C,onBlur:x,onChange:f||u}),n)}));d.displayName="ToggleButton";var m=d,f=n(41143),p=n.n(f),g=n(25513),h=n(69758);var y=n(99541),v=r.forwardRef((function(e,t){var n=e.bsPrefix,o=e.size,c=e.toggle,s=e.vertical,u=e.className,d=e.as,m=void 0===d?"div":d,f=(0,a.Z)(e,["bsPrefix","size","toggle","vertical","className","as"]),p=(0,y.vE)(n,"btn-group"),g=p;return s&&(g=p+"-vertical"),r.createElement(m,(0,i.Z)({},f,{ref:t,className:l()(u,g,o&&p+"-"+o,c&&p+"-toggle")}))}));v.displayName="ButtonGroup",v.defaultProps={vertical:!1,toggle:!1,role:"group"};var b=v,E=r.forwardRef((function(e,t){var n=(0,g.Ch)(e,{value:"onChange"}),o=n.children,c=n.type,l=n.name,s=n.value,u=n.onChange,d=(0,a.Z)(n,["children","type","name","value","onChange"]),m=function(){return null==s?[]:[].concat(s)};return"radio"!==c||l||p()(!1),r.createElement(b,(0,i.Z)({},d,{ref:t,toggle:!0}),function(e,t){var n=0;return r.Children.map(e,(function(e){return r.isValidElement(e)?t(e,n++):e}))}(o,(function(e){var t=m(),n=e.props,o=n.value,i=n.onChange;return r.cloneElement(e,{type:c,name:e.name||l,checked:-1!==t.indexOf(o),onChange:(0,h.Z)(i,(function(e){return function(e,t){if(u){var n=m(),r=-1!==n.indexOf(e);"radio"!==c?u(r?n.filter((function(t){return t!==e})):[].concat(n,[e]),t):!r&&u&&u(e,t)}}(o,e)}))})})))}));E.defaultProps={type:"radio",vertical:!1},E.Button=m;var C=E,x=(0,o.ZP)(m).withConfig({displayName:"MyToggleButtonGroup__StyledToggleButton",componentId:"xb0kbi-0"})(["&&&&{padding:.15rem .15rem;border-radius:.25rem;border:1px solid ",";background-color:",";color:",";white-space:break-spaces;user-select:none;&:hover{border:1px solid ",";box-shadow:inset 0 0 .5rem ",",0 0 .1rem ",";}&.active{background-color:",";color:",";}&.focus{box-shadow:none;}}"],(function(e){return e.theme.colors.secondaryBorder}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.onSurface}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.onSecondary})),w=function(e){var t=e.className,n=e.children,o=e.type,i=e.checked,a=e.onChange,c=e.value;return r.createElement(x,{className:t,type:o,value:c,checked:i,onChange:a},n)},Z=(0,o.ZP)(C).withConfig({displayName:"MyToggleButtonGroup__StyledToggleButtonGroup",componentId:"xb0kbi-1"})(["display:grid;gap:.5rem;",""],(function(e){return Object.entries(e.$layoutConfig).map((function(e){return"@media screen and (min-width: "+e[0]+"px) {\n            grid-template-columns: repeat("+e[1]+", 1fr);\n        }\n        "}))}));function k(e){var t=e.children,n=e.className,o=e.type,i=e.value,a=e.onChange,c=e.layoutConfig;return r.createElement(Z,{type:o,value:i,onChange:a,$layoutConfig:c,className:n},t)}},54480:function(e,t,n){"use strict";var r=n(67294),o=n(50009),i=n(55560),a=o.ZP.div.withConfig({displayName:"Panels__Container",componentId:"sc-1bswg4j-0"})(["display:table;width:calc(100% + 2rem);max-width:",";margin:-1rem;margin-bottom:0;border-spacing:1rem;@media screen and (max-width:1000px) ","{display:block;width:100%;max-width:1000px;margin:auto;> div{display:block;width:100%;margin:1rem 0;> div{height:100%;}}}"],(function(e){return e.$maxWidth}),(function(e){return e.$horizontal?"":",(min-width: 0px)"})),c=o.ZP.div.withConfig({displayName:"Panels__OutlinedPanel",componentId:"sc-1bswg4j-1"})(["display:table-cell;width:",";padding:1rem;border-radius:.25rem;border:1px solid ",";background-color:",";box-shadow:0 0 .15em ",";"],(function(e){return e.$width}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.shadow}));t.Z=function(e){var t=e.children,n=e.maxWidth,o=e.panelsWidth,l=e.horizontal,s=(0,i.x)().isLandscape;return r.createElement(a,{$maxWidth:n,$horizontal:l||s},t.map((function(e,t){return r.createElement(c,{key:t,$width:o[t]},e)})))}},61258:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ie}});var r=n(85061),o=n(87757),i=n.n(o),a=n(67294),c=n(50009),l=n(71065),s=n(22122),u=n(28481),d=n(81253),m=n(81423),f=n(381),p=n(59355),g=n(19701),h=n(11291),y={entering:{transform:"none"},entered:{transform:"none"}},v={enter:f.x9.enteringScreen,exit:f.x9.leavingScreen},b=a.forwardRef((function(e,t){var n=e.children,r=e.disableStrictModeCompat,o=void 0!==r&&r,i=e.in,c=e.onEnter,l=e.onEntered,f=e.onEntering,b=e.onExit,E=e.onExited,C=e.onExiting,x=e.style,w=e.timeout,Z=void 0===w?v:w,k=e.TransitionComponent,S=void 0===k?m.ZP:k,N=(0,d.Z)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),_=(0,p.Z)(),T=_.unstable_strictMode&&!o,P=a.useRef(null),I=(0,h.Z)(n.ref,t),O=(0,h.Z)(T?P:void 0,I),B=function(e){return function(t,n){if(e){var r=T?[P.current,t]:[t,n],o=(0,u.Z)(r,2),i=o[0],a=o[1];void 0===a?e(i):e(i,a)}}},z=B(f),M=B((function(e,t){(0,g.n)(e);var n=(0,g.C)({style:x,timeout:Z},{mode:"enter"});e.style.webkitTransition=_.transitions.create("transform",n),e.style.transition=_.transitions.create("transform",n),c&&c(e,t)})),R=B(l),j=B(C),L=B((function(e){var t=(0,g.C)({style:x,timeout:Z},{mode:"exit"});e.style.webkitTransition=_.transitions.create("transform",t),e.style.transition=_.transitions.create("transform",t),b&&b(e)})),W=B(E);return a.createElement(S,(0,s.Z)({appear:!0,in:i,nodeRef:T?P:void 0,onEnter:M,onEntered:R,onEntering:z,onExit:L,onExited:W,onExiting:j,timeout:Z},N),(function(e,t){return a.cloneElement(n,(0,s.Z)({style:(0,s.Z)({transform:"scale(0)",visibility:"exited"!==e||i?void 0:"hidden"},y[e],x,n.props.style),ref:O},t))}))})),E=n(12623),C=n(53013),x=n(86015),w=n(54480),Z=n(57954),k=n(47378),S=n(99870),N=n(17182),_=n(27859),T=n(55317),P=n(47233),I=n(42474),O=n(37484),B=n(44988),z=n(28437),M=JSON.parse('[{"type":"attribute","range":[0,5]},{"type":"position","range":[5,10]},{"type":"race","range":[10,13]},{"type":"body","range":[13,15]},{"type":"oppai","range":[15,18]},{"type":"rank","range":[18,21]},{"type":"else","range":[21,33]}]'),R=n(68912),j=i().mark(oe);function L(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var $=(0,c.ZP)(T.K).withConfig({displayName:"filter__StyledToggleButton",componentId:"sc-1hqyze1-0"})(["&&&&&{border:none;padding:.5rem 0;white-space:nowrap;}svg{width:1.6rem;height:1.4rem;margin-right:1rem;vertical-align:middle;fill:",";color:",";}&.active > svg{fill:",";color:",";}"],(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.onSecondary}),(function(e){return e.theme.colors.onSecondary})),V=function(e){var t=e.value,n=e.onChange,o=e.layoutConfig,i=e.groupRange,c=(0,Z.f)().charString,l={attribute:z.XV,position:z.$g,race:z.i6,body:z.cp,oppai:z.JU,rank:z.U2,else:z.fP};return a.createElement(T.Z,{type:"checkbox",value:t,onChange:n,layoutConfig:o},M.slice(i[0],i[1]).map((function(e){return(0,r.Z)(Array(e.range[1]).keys()).slice(e.range[0]).map((function(t){return a.createElement($,{value:t,key:t},l[e.type],c.tags[t])}))})))},H=c.ZP.div.withConfig({displayName:"filter__BtnGroupWrapper",componentId:"sc-1hqyze1-1"})(["position:relative;padding:.5rem;padding-top:.8rem;margin:1rem 0;border-radius:.25rem;border:1px solid ",";background-color:",";"],(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.surface})),q=(0,c.ZP)(E.Z).withConfig({displayName:"filter__StyledBadge",componentId:"sc-1hqyze1-2"})(["position:absolute;top:-.6rem;z-index:1;font-size:small;background-color:brown;color:white;"]),A={en:{1400:5,1160:4,1e3:3,768:4,580:3,0:2},"zh-TW":{1260:6,1080:5,1e3:4,768:5,550:4,355:3,0:2}},F=function(e){var t=e.filterBtnValue,n=e.handleBtnGroupChange,r=e.groupBtnByClass,o=(0,Z.f)(),i=o.userLanguage,c=o.charString;return a.createElement("div",null,r?M.map((function(e,r){return a.createElement(H,{key:r},a.createElement(q,{pill:!0,variant:"danger"},c.tagAttributes[e.type]),a.createElement(V,{value:t.filter((function(t){return t>=e.range[0]&&t<e.range[1]})),onChange:n(r),layoutConfig:A[i],groupRange:[r,r+1]}))})):a.createElement(H,null,a.createElement(V,{value:t,onChange:n(),layoutConfig:A[i],groupRange:[0,7]})))},D=(0,c.ZP)(N.Z).withConfig({displayName:"filter__StyledHeader",componentId:"sc-1hqyze1-3"})(["padding-bottom:.4rem;"]),G=c.ZP.div.withConfig({displayName:"filter__IconWrapper",componentId:"sc-1hqyze1-4"})(["svg{width:1.2rem;height:1.2rem;margin-right:.4rem;margin-bottom:.2rem;fill:",";color:",";}"],(function(e){return e.theme.colors.onSurface}),(function(e){return e.theme.colors.onSurface})),J=(0,c.ZP)(C.Z.Control).withConfig({displayName:"filter__Select",componentId:"sc-1hqyze1-5"})(["background-color:",";color:",";border-radius:.25rem;padding:.1rem;border:1px solid ",";&:focus{box-shadow:0 0 .4rem ",";}"],(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.onSurface}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.secondary})),U=function(e){var t=e.clearBtnValue,n=e.filterBtnValue,o=e.handleBtnGroupChange,i=e.handleEnlistHourChange,c=e.handleModalOpen,l=e.groupBtnByClass,s=(0,Z.f)().pageString;return a.createElement(a.Fragment,null,a.createElement(N.Z,{title:s.enlist.filter.tagSelectTitle,titleIcon:z.lO,end:a.createElement(a.Fragment,null,a.createElement(_.Io,{onClick:t,tooltipText:s.enlist.filter.deleteTooltip},z.pJ),a.createElement(_.Io,{onClick:c,tooltipText:s.enlist.filter.settingTooltip},z.qY)),border:!0}),a.createElement(F,{filterBtnValue:n,handleBtnGroupChange:o,groupBtnByClass:l}),a.createElement(D,{title:s.enlist.filter.timeSelectTitle,titleIcon:z.T3,border:!0}),a.createElement(C.Z,{inline:!0},a.createElement(C.Z.Group,null,a.createElement(J,{as:"select",custom:!0,size:"sm",defaultValue:"9",onChange:i},(0,r.Z)(Array(10).keys()).slice(1).map((function(e){return a.createElement("option",{key:e},e)}))),"：",a.createElement(J,{as:"select",custom:!0,size:"sm",defaultValue:"00"},["00","10","20","30","40","50"].map((function(e){return a.createElement("option",{key:e},e)}))))))},K=function(e){var t=e.requestSort,n=e.getSortDirection,r=(0,Z.f)().pageString;return a.createElement("thead",null,a.createElement("tr",null,r.enlist.filter.tableHead.map((function(e,r){return a.createElement(S.Re,{key:r,onClick:function(){return t(e.attr)},direction:n(e.attr)},e.title)}))))},X=(0,c.ZP)(l.ZP).withConfig({displayName:"filter__StyledTooltip",componentId:"sc-1hqyze1-6"})(["right:0;"]),Q=function(e){var t=e.children,n=e.char,r=(0,Z.f)().charString,o=n.distinctTagCombs.map((function(e){return e.map((function(e){return r.tags[e]})).join(", ")})).join("\n");return a.createElement(X,{title:o,TransitionComponent:b,placement:"bottom",arrow:!0},t)},Y=c.ZP.div.withConfig({displayName:"filter__CharCardWrapper",componentId:"sc-1hqyze1-7"})(["display:flex;flex-direction:row;justify-content:flex-start;margin-left:-.75rem;width:max-content;"]),ee=(0,c.ZP)(G).withConfig({displayName:"filter__StarIconWrapper",componentId:"sc-1hqyze1-8"})(["display:flex;"," align-items:center;svg{width:1.2rem;height:1.2rem;margin:0;margin-left:-.6rem;}"],(function(e){return e.$hidden?"visibility: hidden;":void 0}));function te(e){var t=e.sortedResult,n=(0,Z.f)(),r=n.userLanguage,o=n.charString,i={"zh-TW":1360,en:1360};return a.createElement("tbody",null,t.map((function(e,t){return a.createElement("tr",{key:t},a.createElement("td",null,a.createElement(Q,{char:e},a.createElement(Y,null,a.createElement(P.Ps,{id:e.id,$textWrapConfig:i[r]}),a.createElement(ee,{$hidden:0===e.distinctTagCombs.length},z.r7)))),a.createElement("td",null,0===(n=e.rarity)?"N":1===n?"R":2===n?"SR":"SSR"),a.createElement("td",null,e.appliedTags.map((function(e){return o.tags[e]})).join(", ")));var n})))}var ne=(0,c.ZP)(I.WQ).withConfig({displayName:"filter__StyledModal",componentId:"sc-1hqyze1-9"})(["> div:nth-child(3){top:25%;width:30%;min-width:max-content;}"]),re=function(e){var t=e.open,n=e.onClose,r=e.radioValue,o=e.handleRadioChange,i=(0,Z.f)().pageString;return a.createElement(ne,{title:i.enlist.filter.settingModal.title,open:t,onClose:n,ariaLabelledby:"setting-modal-title",ariaDescribedby:"setting-modal-description"},a.createElement(O.Z,{label:i.enlist.filter.settingModal.groupLabel,value:r,handleChange:o},i.enlist.filter.settingModal.labels.map((function(e){return a.createElement(O.h,{label:e,value:e,key:e})}))))};function oe(e,t){var n,o,a,c,l;return i().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:n=0;case 1:if(!(n<e.length)){i.next=18;break}if(1!==t){i.next=7;break}return i.next=5,[e[n]];case 5:i.next=15;break;case 7:o=oe(e.slice(n+1,e.length),t-1),a=L(o);case 9:if((c=a()).done){i.next=15;break}return l=c.value,i.next=13,[e[n]].concat((0,r.Z)(l));case 13:i.next=9;break;case 15:n++,i.next=1;break;case 18:case"end":return i.stop()}}),j)}var ie=function(){var e=(0,a.useState)({filterBtnValue:[],characters:[],enlistHour:"9",isHelpModalOpen:!1,isSettingModalOpen:!1,isSnackbarOpen:!1}),t=e[0],n=e[1],o=(0,Z.f)(),i=o.pageString,c=o.charString,l=i.enlist.filter.settingModal.labels,s=(0,x.Z)("group-btns-by-class",l,"undefined"==typeof window||window.innerWidth<=1e3?1:0),u=s.layout,d=s.setLayout,m=u===l[0];(0,a.useEffect)((function(){var e=t.filterBtnValue.slice();0===e.length&&n((function(e){return Object.assign({},e,{characters:[]})})),e.sort();var o=R.filter((function(e){return e.tags.available}));o=o.map((function(e){var t=e.id,n=e.rarity,r=e.tags;return Object.assign({id:t,rarity:n},r)}));for(var i=[],a=e.length;a>0;a--){Array.from(oe(e,a)).forEach((function(e){var n=JSON.parse(JSON.stringify(o));e.includes(20)||(n=n.filter((function(e){return e.rarity<3})),t.enlistHour<4&&!e.includes(19)&&(n=n.filter((function(e){return e.rarity<2}))));var a=0;if(M.forEach((function(t){if(a===e.length||0===n.length)return!1;(0,r.Z)(Array(t.range[1]).keys()).slice(t.range[0]).forEach((function(r){e.includes(r)&&(a++,n=r<21?n.filter((function(e){return e[t.type]===r})):n.filter((function(e){return e[t.type].includes(r)})))}))})),1===n.length&&a<=3){var c=!1;i.forEach((function(t){if(t.id===n[0].id){c=!0;for(var r=function(n){e.every((function(e){return t.distinctTagCombs[n].includes(e)}))&&t.distinctTagCombs.splice(n,1)},o=t.distinctTagCombs.length-1;o>=0;o--)r(o);return t.distinctTagCombs.push(e),!1}})),c||i.push({id:n[0].id,rarity:n[0].rarity,attribute:n[0].attribute,position:n[0].position,appliedTags:e,distinctTagCombs:[e]})}else n.forEach((function(t){var n=!1;i.forEach((function(e){if(e.id===t.id)return n=!0,!1})),n||i.push({id:t.id,rarity:t.rarity,attribute:t.attribute,position:t.position,appliedTags:e,distinctTagCombs:[]})}))}))}n((function(e){return Object.assign({},e,{characters:i})})),dataLayer&&5===e.length&&dataLayer.push({event:"five_tags_selected",character_tag_combination:e})}),[t.filterBtnValue,t.enlistHour]);var f=function(e){return function(){n((function(t){return Object.assign({},t,{isHelpModalOpen:e})}))}},p=function(e){return function(){n((function(t){return Object.assign({},t,{isSettingModalOpen:e})}))}};return a.createElement(a.Fragment,null,a.createElement(k.Z,{title:i.enlist.filter.helmet.title,description:i.enlist.filter.helmet.description,path:"/enlist/filter/"}),a.createElement(w.Z,{panelsWidth:["60%","40%"]},a.createElement(U,{handleBtnGroupChange:function(e){return function(o){var i;if(void 0!==e){var a,c=M.map((function(e){return t.filterBtnValue.filter((function(t){return t>=e.range[0]&&t<e.range[1]}))}));c[e]=o,i=(a=[]).concat.apply(a,(0,r.Z)(c))}else i=o;i.length>5?n((function(e){return Object.assign({},e,{isSnackbarOpen:!0})})):n((function(e){return Object.assign({},e,{filterBtnValue:i})}))}},clearBtnValue:function(){n((function(e){return Object.assign({},e,{filterBtnValue:[]})}))},handleEnlistHourChange:function(e){n((function(t){return Object.assign({},t,{enlistHour:e.target.value})}))},filterBtnValue:t.filterBtnValue,handleModalOpen:p(!0),groupBtnByClass:m}),a.createElement(S.Ac,{data:t.characters,head:a.createElement(K,null),body:a.createElement(te,null),sortFunc:function(e,t){e.sort((function(e,n){var r,o;return"appliedTags"===t.key?(r=e[t.key].join(""),o=n[t.key].join("")):"name"===t.key?(r=c.name[e.id],o=c.name[n.id]):(r=e[t.key],o=n[t.key]),r<o?"asc"===t.direction?-1:1:r>o?"asc"===t.direction?1:-1:0}))},defaultSortKey:"rarity",handleModalOpen:f(!0),height:m?"calc(100vh - 5rem)":"calc(100vh - 16rem)",striped:!0})),a.createElement(re,{open:t.isSettingModalOpen,onClose:p(!1),radioValue:u,handleRadioChange:function(e){n((function(e){return Object.assign({},e,{isSettingModalOpen:!1})})),d(e.target.value)}}),a.createElement(I.p2,{title:i.enlist.filter.helpModal.title,open:t.isHelpModalOpen,onClose:f(!1),content:i.enlist.filter.helpModal.content,ariaLabelledby:"help-modal-title",ariaDescribedby:"help-modal-description"}),a.createElement(B.Z,{open:t.isSnackbarOpen,onClose:function(){n((function(e){return Object.assign({},e,{isSnackbarOpen:!1})}))},message:i.enlist.filter.snackbarMsg,type:"warn"}))}}}]);
//# sourceMappingURL=component---src-pages-enlist-filter-js-c2f5153fdb5b4d6d6165.js.map