(self.webpackChunktkfmtools=self.webpackChunktkfmtools||[]).push([[319],{8169:function(e,t,n){"use strict";var r=n(22122),o=n(19756),a=n(75900),i=n.n(a),l=n(67294),c=n(99541),s=l.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,s=e.striped,u=e.bordered,d=e.borderless,m=e.hover,f=e.size,p=e.variant,h=e.responsive,y=(0,o.Z)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),g=(0,c.vE)(n,"table"),b=i()(a,g,p&&g+"-"+p,f&&g+"-"+f,s&&g+"-striped",u&&g+"-bordered",d&&g+"-borderless",m&&g+"-hover"),C=l.createElement("table",(0,r.Z)({},y,{className:b,ref:t}));if(h){var v=g+"-responsive";return"string"==typeof h&&(v=v+"-"+h),l.createElement("div",{className:v},C)}return C}));t.Z=s},19809:function(e,t,n){"use strict";var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(67294),c=(r=l)&&r.__esModule?r:{default:r};var s={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.reCalculateColumnCount=n.reCalculateColumnCount.bind(n),n.reCalculateColumnCountDebounce=n.reCalculateColumnCountDebounce.bind(n);var r=void 0;return r=n.props.breakpointCols&&n.props.breakpointCols.default?n.props.breakpointCols.default:parseInt(n.props.breakpointCols)||2,n.state={columnCount:r},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"componentDidUpdate",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"reCalculateColumnCountDebounce",value:function(){var e=this;window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((function(){e.reCalculateColumnCount()}))):this.reCalculateColumnCount()}},{key:"reCalculateColumnCount",value:function(){var e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!==(void 0===t?"undefined":a(t))&&(t={default:parseInt(t)||2});var n=1/0,r=t.default||2;for(var o in t){var i=parseInt(o);i>0&&e<=i&&i<n&&(n=i,r=t[o])}r=Math.max(1,parseInt(r)||1),this.state.columnCount!==r&&this.setState({columnCount:r})}},{key:"itemsInColumns",value:function(){for(var e=this.state.columnCount,t=new Array(e),n=[].concat(this.props.children||[]),r=0;r<n.length;r++){var o=r%e;t[o]||(t[o]=[]),t[o].push(n[r])}return t}},{key:"renderColumns",value:function(){var e=this.props,t=e.column,n=e.columnAttrs,r=void 0===n?{}:n,a=e.columnClassName,i=this.itemsInColumns(),l=100/i.length+"%",s=a;"string"!=typeof s&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===s&&(s="my-masonry-grid_column"));var u=o({},t,r,{style:o({},r.style,{width:l}),className:s});return i.map((function(e,t){return c.default.createElement("div",o({},u,{key:t}),e)}))}},{key:"logDeprecated",value:function(e){console.error("[Masonry]",e)}},{key:"render",value:function(){var e=this.props,t=(e.children,e.breakpointCols,e.columnClassName,e.columnAttrs,e.column,e.className),n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),r=t;return"string"!=typeof t&&(this.logDeprecated('The property "className" requires a string'),void 0===t&&(r="my-masonry-grid")),c.default.createElement("div",o({},n,{className:r}),this.renderColumns())}}]),t}(c.default.Component);u.defaultProps=s,t.Z=u},47233:function(e,t,n){"use strict";n.d(t,{Ps:function(){return p},ac:function(){return b}});var r=n(19756),o=n(67294),a=n(50009),i=n(57954),l=n(87908),c=n(28437),s=n(68912),u=(0,a.ZP)(l.Q).withConfig({displayName:"CharCard__StyledCard",componentId:"sc-1p8ym1z-0"})(["flex-direction:column;align-items:flex-end;justify-content:space-around;width:100%;min-width:10rem;height:3.6rem;background-repeat:no-repeat;background-size:6rem 6rem;background-position:0 -1.6rem;"]),d=a.ZP.div.withConfig({displayName:"CharCard__TextWrapper",componentId:"sc-1p8ym1z-1"})(["margin-left:0;margin-right:1rem;transition:all 0.3s ease;text-transform:none;text-shadow:0 0 1px ",",-2px 0 1px  ",",2px 0 1px  ",",0 -2px 1px ",",0 2px 1px  ",",2px 2px 1px ",",2px -2px 1px ",",-2px 2px 1px ",",-2px -2px 1px ",";"],(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface})),m=(0,a.ZP)(d).withConfig({displayName:"CharCard__TitleText",componentId:"sc-1p8ym1z-2"})(["font-size:small;"]),f=function(e){var t=e.className,n=e.id,r=(0,i.f)().charString;return o.createElement(u,{className:t,imgType:"char_small",imgId:n,alt:"",isBackground:!0},o.createElement(m,null,r.name[n].split(" ").slice(0,-1).join(" ")),o.createElement(d,null,r.name[n].split(" ").slice(-1)[0]))},p=(0,a.ZP)(f).withConfig({displayName:"CharCard__ResponsiveCharCard",componentId:"sc-1p8ym1z-3"})(["@media screen and (min-width:","px){flex-direction:row;align-items:center;justify-content:flex-start;> div{margin-left:7rem}> div:last-child{margin-left:-.6rem;}}"],(function(e){return e.$textWrapConfig})),h=a.ZP.div.withConfig({displayName:"CharCard__TagWrapper",componentId:"sc-1p8ym1z-4"})(["display:flex;flex-direction:row;"]),y=a.ZP.div.withConfig({displayName:"CharCard__IconWrapper",componentId:"sc-1p8ym1z-5"})(["margin-bottom:.1rem;margin-left:.25rem;margin-right:.4rem;> svg{width:1.2rem;fill:",";color:",";}"],(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.secondary})),g=function(e){var t=e.type,n=e.tag,r=(0,i.f)().charString,a={attribute:c.XV,position:c.$g,race:c.i6,body:c.cp,oppai:c.JU,rank:c.U2,else:c.fP};return o.createElement("tr",null,o.createElement("td",null,o.createElement(h,null,o.createElement(y,null,a[t]),r.tags[n])))},b=function(e){var t=e.id,n=(0,i.f)().charString,a=s.find((function(e){return e.id===t})).tags,c=a.available,u=(0,r.Z)(a,["available"]);return c?o.createElement(l.cP,{striped:!0},o.createElement("tbody",null,Object.entries(u).map((function(e,t){return"else"===e[0]?e[1].map((function(e,n){return o.createElement(g,{key:t+n,type:"else",tag:e})})):e[1]>=0?o.createElement(g,{key:t,type:e[0],tag:e[1]}):null})))):o.createElement(l.cP,{striped:!0},o.createElement("tbody",null,o.createElement("tr",null,o.createElement("td",null,n.tagWarnMsg))))};t.ZP=f},99870:function(e,t,n){"use strict";n.d(t,{Re:function(){return u},dJ:function(){return m},Ac:function(){return h}});var r=n(85061),o=n(67294),a=n(50009),i=n(8169),l=n(50033),c=n(57954),s=n(17182),u=a.ZP.th.withConfig({displayName:"FilterComponents__SortableTh",componentId:"sc-2r2g3y-0"})(["cursor:pointer;user-select:none;background-color:",";color:",";&:after{content:'","';}"],(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.onSurface}),(function(e){return e.direction?"asc"===e.direction?" \\25B2":" \\25BC":void 0})),d=(0,a.ZP)(i.Z).withConfig({displayName:"FilterComponents__StyledTable",componentId:"sc-2r2g3y-1"})(["width:100%;margin-bottom:0;th{position:sticky;top:0;z-index:1;}&,&&& tr{color:",";}th{padding:.75rem .25rem;}th:first-child{padding-left:.75rem;}td{vertical-align:middle;}tr{border-bottom:",";}"],(function(e){return e.theme.colors.onSurface}),(function(e){return e.$border?"1px solid "+e.theme.colors.secondary:"none"})),m=function(e){var t=e.className,n=e.data,a=e.head,i=e.body,l=e.sortFunc,c=e.defaultSortKey,s=e.striped,u=e.border,m=function(e,t){void 0===t&&(t={key:c,direction:"desc"});var n=(0,o.useState)(t),a=n[0],i=n[1];return{sortedResult:(0,o.useMemo)((function(){var t=(0,r.Z)(e);return a.key&&l(t,a),t}),[e,a]),requestSort:function(e){var t=a.key===e&&"desc"===a.direction?"asc":"desc";i({key:e,direction:t})},sortConfig:a}}(n),f=m.sortedResult,p=m.requestSort,h=m.sortConfig;(0,o.useEffect)((function(){h.key!==c&&p(c)}),[c]);return o.createElement(d,{className:t,striped:s,borderless:!0,hover:!0,$border:u,size:"sm"},o.cloneElement(a,{requestSort:p,getSortDirection:function(e){return n&&0!==n.length&&h.key===e?h.direction:void 0},sortedResult:f}),o.cloneElement(i,{sortedResult:f}))},f=(0,a.ZP)(l.Z).withConfig({displayName:"FilterComponents__TableWrapper",componentId:"sc-2r2g3y-2"})(["height:",";overflow-x:hidden;overflow-y:auto;"],(function(e){return e.$height})),p=(0,a.ZP)(m).withConfig({displayName:"FilterComponents__StyledSortableTable",componentId:"sc-2r2g3y-3"})(["img{width:1.8rem;height:1.8rem;}td{padding-left:.75rem;}"]);function h(e){var t=e.data,n=e.head,r=e.body,a=e.sortFunc,i=e.defaultSortKey,l=e.handleModalOpen,u=e.height,d=e.striped,m=(0,c.f)().pageString;return o.createElement(o.Fragment,null,o.createElement(s.Z,{title:m.items.drop.filter.resultTitle,withHelp:!0,onClickHelp:l,border:!0}),o.createElement(f,{$height:u},o.createElement(p,{data:t,head:n,body:r,sortFunc:a,defaultSortKey:i,striped:d})))}},87908:function(e,t,n){"use strict";n.d(t,{Q:function(){return u},qg:function(){return f},cP:function(){return h}});var r=n(67294),o=n(50009),a=n(8169),i=n(57954),l=n(93175),c=(0,o.ZP)(l.Z).withConfig({displayName:"MyCard__StyledImg",componentId:"sc-1txoees-0"})(["display:flex;justify-content:center;align-items:center;width:100%;background-repeat:no-repeat;"]),s=o.ZP.div.withConfig({displayName:"MyCard__ImgWrapper",componentId:"sc-1txoees-1"})(["display:flex;align-items:center;justify-content:center;"]),u=function(e){var t=e.children,n=e.className,o=e.imgType,a=e.imgId,i=e.alt;return e.isBackground?r.createElement(c,{className:n,name:o+"_"+a,isBackground:!0,alt:i},t):r.createElement(s,{className:n},r.createElement(c,{name:o+"_"+a,alt:i}),t)},d=(0,o.ZP)(u).withConfig({displayName:"MyCard__ItemImg",componentId:"sc-1txoees-2"})(["> div:first-child{width:2.5rem;height:2.5rem;margin-right:.4rem;user-select:none;}"]),m=o.ZP.div.withConfig({displayName:"MyCard__TextWrapper",componentId:"sc-1txoees-3"})(["white-space:nowrap;font-size:medium;font-weight:normal;"]),f=function(e){var t=e.className,n=e.id,o=(0,i.f)().itemString;return r.createElement(d,{className:t,imgType:"item",imgId:n,alt:""},r.createElement(m,null,o.name[n]))},p=(0,o.ZP)(a.Z).withConfig({displayName:"MyCard__StyledTable",componentId:"sc-1txoees-4"})(["font-size:.9rem;color:",";margin:0;> tbody > tr >{td:first-child{padding-left:.75rem;}}"],(function(e){return e.theme.colors.onSurface})),h=function(e){var t=e.className,n=e.children,o=e.striped;return r.createElement(p,{className:t,striped:o,borderless:!0,size:"sm"},n)}},50033:function(e,t,n){"use strict";var r=n(50009).ZP.div.withConfig({displayName:"Scrollable",componentId:"sc-1ueymsi-0"})(["overflow:auto;height:100%;scrollbar-width:thin;padding-right:.5rem;margin-right:-.5rem;&::-webkit-scrollbar{width:.4rem;height:.4rem;background:",";}&::-webkit-scrollbar-thumb{background:",";border-radius:.25rem;}&::-webkit-scrollbar-track{background:",";}&::-webkit-scrollbar-corner{background:",";}"],(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}));t.Z=r},11992:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var r=n(67294),o=n(50009),a=n(76540);function i(e){var t=e.layoutSwitcher,n=e.localStorageKey,o=e.items,i=e.initLayoutIndex,l=e.unmountOnLeave,c=(0,a.Z)(n,o.map((function(e){return e.layout})),i,l),s=c.layout,u=c.canRender,d=c.setLayout;return console.log(u),r.createElement(r.Fragment,null,r.cloneElement(t,{layout:s,setLayout:d}),o.map((function(e,t){return r.createElement("div",{hidden:s!==e.layout,key:e.layout},u[t]&&e.content)})))}var l=n(57954),c=n(47378),s=n(27859),u=n(19809),d=(0,o.ZP)(u.Z).withConfig({displayName:"MyMasonry__StyledMasonry",componentId:"crrh7j-0"})(["display:flex;width:auto;margin-left:-1rem;> div{padding-left:1rem;}"]);function m(e){return r.createElement(d,{breakpointCols:e.breakpointCols,columnClassName:""},e.children)}var f=n(60495),p=n(47233),h=(0,o.ZP)(f.Z).withConfig({displayName:"CharTagMasonry__StyledAccordion",componentId:"xlcyi3-0"})(["&&{&&{margin-bottom:1rem;}border:1px solid ",";border-radius:.25rem;box-shadow:0 0 .15em lightgray;> .MuiAccordionSummary-root{padding:0;border-bottom-right-radius:0;border-bottom-left-radius:0;border-bottom:0px solid ",";}> .MuiAccordionSummary-root.Mui-expanded{border-bottom:1px solid ",";}.MuiAccordionSummary-content{display:flex;align-items:center;justify-content:space-between;padding:0;margin:0;}.MuiAccordionDetails-root{margin:0;padding:0;}}"],(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.border})),y=function(e){var t=e.title,n=e.content,o=(0,r.useState)(!1),a=o[0],i=o[1];return r.createElement(h,{expanded:a,onChange:function(){return i(!a)},title:t,content:n})},g=function(){var e=(0,l.f)().charString;return r.createElement(m,{breakpointCols:{default:6,1360:5,1200:4,992:3,600:2}},Object.keys(e.name).map((function(e,t){return"nr"!==e&&r.createElement(y,{title:r.createElement(p.ZP,{id:e}),content:r.createElement(p.ac,{id:e}),key:t})})))},b=n(50033),C=n(99870),v=o.ZP.div.withConfig({displayName:"WindowTable__Sizer",componentId:"sc-1fg3mlg-0"})(["height:","px;th,td{white-space:nowrap;}"],(function(e){return e.$height}));var w=n(68912),E=(0,o.ZP)(C.Re).withConfig({displayName:"CharTagTable__StyledTh",componentId:"sc-1n6agm0-0"})(["background-color:",";color:",";white-space:nowrap;"],(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.onSecondary})),k=r.forwardRef((function(e,t){var n=(0,l.f)().charString;return r.createElement("thead",{ref:t},r.createElement("tr",null,Object.entries(n.tagAttributes).map((function(t,n){return r.createElement(E,{onClick:function(){return e.requestSort(t[0])},direction:e.getSortDirection(t[0]),key:n},t[1])}))))})),x=r.forwardRef((function(e,t){var n=(0,l.f)(),o=n.userLanguage,a=n.charString,i={"zh-TW":900,en:1300},c=function(e){return 0===e?"N":1===e?"R":2===e?"SR":"SSR"};return r.createElement("tbody",null,e.sortedResult.map((function(n,l){return l>e.renderTo?null:n.available?r.createElement("tr",{key:n.id,ref:0===l?t:void 0},Object.entries(n).map((function(e,t){return"available"===e[0]||("id"===e[0]?r.createElement("td",{key:t},r.createElement(p.Ps,{id:n.id,$textWrapConfig:i[o]})):"rarity"===e[0]?r.createElement("td",{key:t},c(e[1])):"else"===e[0]?r.createElement("td",{key:t},e[1].map((function(e){return a.tags[e]})).join(", ")):(l=e[1]<0?"-":a.tags[e[1]],r.createElement("td",{key:t},l)));var l}))):r.createElement("tr",{key:n.id},r.createElement("td",null,r.createElement(p.Ps,{id:n.id,$textWrapConfig:i[o]})),r.createElement("td",null,c(n.rarity)),r.createElement("td",null,a.tags[n.attribute]),r.createElement("td",null,a.tags[n.position]),r.createElement("td",{colSpan:"5"},a.tagWarnMsg))})))})),S=(0,o.ZP)((function(e){var t=e.className,n=e.head,o=e.body,a=e.data,i=e.sortFunc,l=e.defaultSortKey,c=e.border,s=(0,r.useRef)(),u=(0,r.useRef)(),d=(0,r.useRef)(),m=(0,r.useState)({scrollTop:0,renderTo:0,sizerHeight:0}),f=m[0],p=m[1];return(0,r.useEffect)((function(){var e=s&&s.current?s.current.getBoundingClientRect().height:0,t=u&&u.current?u.current.getBoundingClientRect().height:0,n=f.scrollTop+e,r=d&&d.current?d.current.getBoundingClientRect().height:0,o=Math.min(Math.floor(n/r),a.length-1),i=t+a.length*r;p((function(e){return Object.assign({},e,{renderTo:Math.max(e.renderTo,o),sizerHeight:i})}))}),[s,d,u,f.scrollTop]),r.createElement(b.Z,{className:t,onScroll:function(e){p((function(t){return Object.assign({},t,{scrollTop:e.target.scrollTop})}))},ref:s},r.createElement(v,{$height:f.sizerHeight},r.createElement(C.dJ,{data:a,head:r.cloneElement(n,{ref:u}),body:r.cloneElement(o,{renderTo:f.renderTo,ref:d}),sortFunc:i,defaultSortKey:l,border:c})))})).withConfig({displayName:"CharTagTable__CharTable",componentId:"sc-1n6agm0-1"})(["overflow-x:auto;height:calc(100vh - 12rem);padding-right:0;margin-right:0;"]),_=function(){var e=(0,l.f)().charString,t=w.map((function(e){var t=e.id,n=e.rarity,r=e.tags;return Object.assign({id:t,rarity:n},r)}));return r.createElement(S,{data:t,head:r.createElement(k,null),body:r.createElement(x,null),sortFunc:function(t,n){t.sort((function(t,r){var o,a;return"else"===n.key?(o=t[n.key].join(""),a=r[n.key].join("")):"name"===n.key?(o=e.name[t.id],a=e.name[r.id]):(o=t[n.key],a=r[n.key]),o<a?"asc"===n.direction?-1:1:o>a?"asc"===n.direction?1:-1:0}))},defaultSortKey:"rarity",border:!0})},N=n(28437),T=o.ZP.div.withConfig({displayName:"enlist__LayoutBtnContainer",componentId:"sc-199adb2-0"})(["position:absolute;right:0;top:-4rem;@media screen and (max-width:410px){font-size:0;}"]),Z=function(e){var t=e.layout,n=e.setLayout,o=(0,l.f)().pageString;return r.createElement(T,null,o.enlist.index.layout,r.createElement(s.ZP,{$active:"Masonry"===t,onClick:function(){return n("Masonry")},tooltipText:o.enlist.index.masonryTooltip},N.xf),r.createElement(s.ZP,{$active:"Table"===t,onClick:function(){return n("Table")},tooltipText:o.enlist.index.tableTooltip},N.y2))},P=function(){var e=(0,l.f)().pageString;return r.createElement(r.Fragment,null,r.createElement(c.Z,{title:e.enlist.index.helmet.title,description:e.enlist.index.helmet.description,path:"/enlist/"}),r.createElement(i,{localStorageKey:"enlist-character-layout",layoutSwitcher:r.createElement(Z,null),items:[{layout:"Masonry",content:r.createElement(g,null)},{layout:"Table",content:r.createElement(_,null)}]}))}}}]);
//# sourceMappingURL=component---src-pages-enlist-index-js-5a92d2b98d38a6b78f87.js.map