(self.webpackChunktkfmtools=self.webpackChunktkfmtools||[]).push([[164],{22702:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var a=n(22122),r=n(81253),i=n(67294),o=n(85505),c=n(49044),l=n(19123),s=(0,l.Z)(i.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=(0,l.Z)(i.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=n(37595),u=(0,l.Z)(i.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),f=n(81664),p=n(34621),g=i.createElement(d,null),h=i.createElement(s,null),v=i.createElement(u,null),y=i.forwardRef((function(e,t){var n=e.checkedIcon,l=void 0===n?g:n,s=e.classes,d=e.color,m=void 0===d?"secondary":d,u=e.icon,p=void 0===u?h:u,y=e.indeterminate,x=void 0!==y&&y,b=e.indeterminateIcon,E=void 0===b?v:b,w=e.inputProps,S=e.size,Z=void 0===S?"medium":S,C=(0,r.Z)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),k=x?E:p,I=x?E:l;return i.createElement(c.Z,(0,a.Z)({type:"checkbox",classes:{root:(0,o.Z)(s.root,s["color".concat((0,f.Z)(m))],x&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:m,inputProps:(0,a.Z)({"data-indeterminate":x},w),icon:i.cloneElement(k,{fontSize:void 0===k.props.fontSize&&"small"===Z?Z:k.props.fontSize}),checkedIcon:i.cloneElement(I,{fontSize:void 0===I.props.fontSize&&"small"===Z?Z:I.props.fontSize}),ref:t},C))})),x=(0,p.Z)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,m.U1)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,m.U1)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(y)},62846:function(e,t,n){"use strict";var a=n(22122),r=n(81253),i=n(67294),o=n(85505),c=n(34621),l=n(37595),s=i.forwardRef((function(e,t){var n=e.absolute,c=void 0!==n&&n,l=e.classes,s=e.className,d=e.component,m=void 0===d?"hr":d,u=e.flexItem,f=void 0!==u&&u,p=e.light,g=void 0!==p&&p,h=e.orientation,v=void 0===h?"horizontal":h,y=e.role,x=void 0===y?"hr"!==m?"separator":void 0:y,b=e.variant,E=void 0===b?"fullWidth":b,w=(0,r.Z)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(m,(0,a.Z)({className:(0,o.Z)(l.root,s,"fullWidth"!==E&&l[E],c&&l.absolute,f&&l.flexItem,g&&l.light,"vertical"===v&&l.vertical),role:x,ref:t},w))}));t.Z=(0,c.Z)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:(0,l.U1)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},80838:function(e,t,n){"use strict";var a=n(81253),r=n(22122),i=n(67294),o=n(85505),c=n(34621),l=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var m=i.forwardRef((function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,l=e.alignItems,s=void 0===l?"stretch":l,d=e.classes,m=e.className,u=e.component,f=void 0===u?"div":u,p=e.container,g=void 0!==p&&p,h=e.direction,v=void 0===h?"row":h,y=e.item,x=void 0!==y&&y,b=e.justify,E=void 0===b?"flex-start":b,w=e.lg,S=void 0!==w&&w,Z=e.md,C=void 0!==Z&&Z,k=e.sm,I=void 0!==k&&k,_=e.spacing,P=void 0===_?0:_,N=e.wrap,T=void 0===N?"wrap":N,z=e.xl,L=void 0!==z&&z,M=e.xs,F=void 0!==M&&M,O=e.zeroMinWidth,j=void 0!==O&&O,R=(0,a.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),D=(0,o.Z)(d.root,m,g&&[d.container,0!==P&&d["spacing-xs-".concat(String(P))]],x&&d.item,j&&d.zeroMinWidth,"row"!==v&&d["direction-xs-".concat(String(v))],"wrap"!==T&&d["wrap-xs-".concat(String(T))],"stretch"!==s&&d["align-items-xs-".concat(String(s))],"stretch"!==c&&d["align-content-xs-".concat(String(c))],"flex-start"!==E&&d["justify-xs-".concat(String(E))],!1!==F&&d["grid-xs-".concat(String(F))],!1!==I&&d["grid-sm-".concat(String(I))],!1!==C&&d["grid-md-".concat(String(C))],!1!==S&&d["grid-lg-".concat(String(S))],!1!==L&&d["grid-xl-".concat(String(L))]);return i.createElement(f,(0,r.Z)({className:D,ref:t},R))})),u=(0,c.Z)((function(e){return(0,r.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return l.forEach((function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};s.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,r.Z)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(m);t.Z=u},49963:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var a=n(85061),r=n(67294),i=n(50190),o=n(50009),c=n(22122),l=n(81253),s=n(85505),d=n(34621),m=n(81664),u=r.forwardRef((function(e,t){var n=e.classes,a=e.className,i=e.color,o=void 0===i?"default":i,d=e.component,u=void 0===d?"li":d,f=e.disableGutters,p=void 0!==f&&f,g=e.disableSticky,h=void 0!==g&&g,v=e.inset,y=void 0!==v&&v,x=(0,l.Z)(e,["classes","className","color","component","disableGutters","disableSticky","inset"]);return r.createElement(u,(0,c.Z)({className:(0,s.Z)(n.root,a,"default"!==o&&n["color".concat((0,m.Z)(o))],y&&n.inset,!h&&n.sticky,!p&&n.gutters),ref:t},x))})),f=(0,d.Z)((function(e){return{root:{boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:e.palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},colorPrimary:{color:e.palette.primary.main},colorInherit:{color:"inherit"},gutters:{paddingLeft:16,paddingRight:16},inset:{paddingLeft:72},sticky:{position:"sticky",top:0,zIndex:1,backgroundColor:"inherit"}}}),{name:"MuiListSubheader"})(u),p=n(65541),g=n(44094),h=(0,o.ZP)(i.Z).withConfig({displayName:"StageSelect__StyledInput",componentId:"iyjsu9-0"})(["&&{margin:.4rem 0;width:100%;svg{fill:",";}}"],(function(e){return e.theme.colors.onSurface})),v=(0,o.ZP)(f).withConfig({displayName:"StageSelect__StyledListSubheader",componentId:"iyjsu9-1"})(["&&{color:",";font-size:1rem;font-style:italic;line-height:2rem;}"],(function(e){return e.theme.colors.onSurface})),y=function(e){var t=e.children,n=e.className,i=e.value,c=e.error,l=e.handleChange,s=(0,g.f)(),d=s.pageString,m=s.stageString,u=(0,o.Fg)().colors;return r.createElement(h,{className:n,label:d.team.build.stageSelectLabel,id:"select-stage",onChange:l,select:!0,value:i,SelectProps:{MenuProps:{PaperProps:{style:{backgroundColor:u.surface}},MenuListProps:{style:{backgroundColor:u.surface,color:u.onSurface},dense:!0}}},variant:"outlined",size:"small",inputProps:{"aria-label":"select-stage"},error:c,helperText:c&&d.team.build.stageSelectHelpText},t,m.map((function(e){var t;return[r.createElement(v,null,e.name),null===(t=e.stages)||void 0===t?void 0:t.map((function(t){return r.createElement(p.Z,{value:e.chapter+"/"+t.id,key:t.id},t.id+" : "+t.name)})),e.stagePrefix&&(0,a.Z)(Array(51).keys()).slice(1).map((function(t){return r.createElement(p.Z,{value:e.chapter+"/"+e.chapter+"-"+t,key:e.chapter+"-"+t},e.chapter+"-"+t+" : "+e.stagePrefix+t+e.stageSuffix)}))]})))}},65746:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86015);function i(e){var t=e.className,n=e.layoutSwitcher,i=e.localStorageKey,o=e.items,c=e.initLayoutIndex,l=e.unmountOnLeave,s=(0,r.Z)(i,o.map((function(e){return e.layout})),c,l),d=s.layout,m=s.canRender,u=s.setLayout;return a.createElement(a.Fragment,null,n&&a.cloneElement(n,{layout:d,setLayout:u}),o.map((function(e,n){return a.createElement("div",{className:t,hidden:d!==e.layout,key:e.layout},m[n]&&e.content)})))}},93061:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return se}});var a=n(92137),r=n(87757),i=n.n(r),o=n(67294),c=n(50009),l=n(83332),s=n(22702),d=n(62846),m=n(80838),u=n(80791),f=n(4381),p=n(22122),g=n(81253),h=n(85505),v=n(34621),y=o.forwardRef((function(e,t){var n=e.classes,a=e.className,r=(0,g.Z)(e,["classes","className"]);return o.createElement("div",(0,p.Z)({className:(0,h.Z)(n.root,a),ref:t},r))}));y.muiName="ListItemSecondaryAction";var x=(0,v.Z)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(y),b=n(65541),E=n(28001),w=n(44094),S=n(65746),Z=n(47378),C=n(25072),k=n(78032),I=n(27136),_={items:[],isFetching:!1,loadMore:!1},P=function(e,t){switch(t.type){case"PUSH":return Object.assign({},e,{items:e.items.concat(t.items)});case"UNSHIFT":return Object.assign({},e,{items:t.items.concat(e.items)});case"RESET":return _;case"FETCH":return Object.assign({},e,{isFetching:t.isFetching});case"LOAD_MORE":return Object.assign({},e,{loadMore:t.loadMore});default:throw new Error}},N=(0,c.ZP)(I.Z).withConfig({displayName:"InfiniteLoader__StyledSpinner",componentId:"sc-10rq99b-0"})(["&&{display:block;margin:auto;color:",";}"],(function(e){return e.theme.colors.secondary})),T=function(e){var t=e.listenLatestUpdate,n=e.fetchItem,a=e.renderItem,r=e.hasVisited,i=e.onResetVisited,c=(0,o.useReducer)(P,_),l=c[0],s=c[1],d=(0,o.useRef)(null),m=(0,o.useCallback)((function(e){new IntersectionObserver((function(e){e.forEach((function(e){e.intersectionRatio>0&&s({type:"LOAD_MORE",loadMore:!0})}))})).observe(e)}),[]);return(0,o.useEffect)((function(){d.current&&m(d.current)}),[m,d]),(0,o.useEffect)((function(){var e=t(s);if(e)return function(){return e()}}),[t]),(0,o.useEffect)((function(){l.loadMore&&!l.isFetching&&(s({type:"FETCH",isFetching:!0}),n().then((function(e){0!==(null==e?void 0:e.length)&&s({type:"PUSH",items:e}),s({type:"FETCH",isFetching:!1}),s({type:"LOAD_MORE",loadMore:!1})})).catch((function(e){s({type:"FETCH",isFetching:!1}),s({type:"LOAD_MORE",loadMore:!1}),console.log(e)})))}),[n,l.loadMore]),(0,o.useEffect)((function(){r||(s({type:"RESET"}),s({type:"LOAD_MORE",loadMore:!0}),i())}),[r]),o.createElement(o.Fragment,null,o.createElement(u.Z,null,l.items.map((function(e){return a(e)})),o.createElement("div",{ref:d})),l.isFetching&&o.createElement(N,{size:32,thickness:6}))},z=n(93175),L=n(57693),M=n(22727),F=n(49963),O=n(79520),j=n(28437),R=n(48030),D=function(){var e,t=(0,w.f)().pageString,n=(0,E.q)(),a=n.isImportingLineup,r=n.actions.toggleImportLineupData,i=(0,o.useState)(!1),c=i[0],l=i[1];return o.createElement(o.Fragment,null,o.createElement(L.Z,{button:o.createElement(M.ZP,{tooltipText:t.team.index.settingTooltip},j.qY),items:[{id:"setting-description"}],renderItem:function(e){return o.createElement(o.Fragment,null,o.createElement(s.Z,{edge:"start",checked:a,disableRipple:!0,inputProps:{"aria-labelledby":e.id}}),o.createElement("span",{id:e.id},t.team.index.settingDescription))},itemOnClick:function(){r()||l(!0)},ariaId:"setting-menu"}),o.createElement(O.Z,{open:c,onClose:(e=!1,function(){return l(e)}),message:t.team.index.errorSnackbar,type:"error"}))},H=["local","cloud"],W=c.ZP.div.withConfig({displayName:"team__TabsWrapper",componentId:"sc-91g1dd-0"})(["position:absolute;top:.5rem;"]),V=(0,c.ZP)(l.Z).withConfig({displayName:"team__StyledTab",componentId:"sc-91g1dd-1"})(["&&{color:",";font-size:large;}"],(function(e){return e.theme.colors.onSurface+(e.$active?"":"80")})),A=function(e){var t=e.layout,n=e.setLayout,a=(0,w.f)().pageString;return o.createElement(W,null,H.map((function(e){return o.createElement(V,{$active:t===e,onClick:function(){return n(e)},key:e},a.team.index.tabs[e])})))},B=c.ZP.div.withConfig({displayName:"team__CharContainer",componentId:"sc-91g1dd-2"})(["display:flex;flex-wrap:nowrap;overflow-x:hidden;"]),U=(0,c.ZP)(z.Z).withConfig({displayName:"team__CharImg",componentId:"sc-91g1dd-3"})(["flex:0 0 auto;width:3rem;height:3rem;overflow:hidden;"]),G=c.ZP.div.withConfig({displayName:"team__EmptySlot",componentId:"sc-91g1dd-4"})(["flex:0 0 auto;width:3rem;height:3rem;overflow:hidden;"]),$=function(e){var t=e.chars,n=(0,w.f)().charString;return t.every((function(e){return void 0===e||void 0===e.id}))?o.createElement(B,null,o.createElement(G,null)):o.createElement(B,null,t.map((function(e){return(null==e?void 0:e.id)&&o.createElement(U,{key:e.id,name:"char_small_"+e.id,alt:n.name[e.id]})})))},q=(0,c.ZP)(f.Z).withConfig({displayName:"team__DataItem",componentId:"sc-91g1dd-5"})(["&&{margin-bottom:.6rem;padding-right:6.8rem;color:",";}background:linear-gradient( 90deg,",","," );"],(function(e){return e.theme.colors.onSurface}),(function(e){return e.theme.colors.shadow+"2A"}),(function(e){return e.theme.colors.shadow+"0D"})),K=c.ZP.div.withConfig({displayName:"team__NewButton",componentId:"sc-91g1dd-6"})(["display:flex;align-items:center;height:3rem;svg{width:2rem;height:2rem;fill:",";}span{margin-left:1rem;font-size:large;line-height:normal;}"],(function(e){return e.theme.colors.onSurface})),Y=c.ZP.span.withConfig({displayName:"team__TitleText",componentId:"sc-91g1dd-7"})(["width:8rem;color:",";font-size:small;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"],(function(e){return e.theme.colors.onSurface})),J=(0,c.ZP)(M.ZP).withConfig({displayName:"team__OperationButton",componentId:"sc-91g1dd-8"})(["svg{width:1.4rem;height:1.4rem;}"]),Q=function(){var e=(0,w.f)().pageString,t=(0,E.q)(),n=t.localTeams,a=t.actions,r=a.newTeam,i=a.getTeam,c=a.selectTeam,l=a.pushTeam,s=a.deleteTeam;return o.createElement(u.Z,null,o.createElement(q,{component:k.Z,to:"/team/build/",button:!0,key:"new",onClick:function(){return r()}},o.createElement(K,null,j.k8,o.createElement("span",null,e.team.index.newComposition))),null==n?void 0:n.map((function(t,n){return o.createElement(q,{component:k.Z,to:"/team/build/",button:!0,key:n,onClick:function(){return c(n)}},o.createElement(Y,null,t.name),o.createElement($,{chars:t.characters}),o.createElement(x,null,o.createElement(J,{onClick:function(){return l(i(n))},tooltipText:e.team.index.copyTooltip,edge:"end","aria-label":"copy-team"},j.TI),o.createElement(J,{onClick:function(){return s(n)},tooltipText:e.team.index.deleteTooltip,edge:"end","aria-label":"delete-team"},j.pJ)))})))},X=(0,c.ZP)(q).withConfig({displayName:"team__StyledCloudTeamItem",componentId:"sc-91g1dd-9"})(["&&{padding-right:1rem;user-select:text;}> div{> div:nth-child(2){justify-content:end;> span:first-child{margin:0;}}> div:nth-child(4){margin-top:.4rem;padding:.4rem;font-size:small;background:linear-gradient( 90deg,",","," );}}"],(function(e){return e.theme.colors.shadow+"2A"}),(function(e){return e.theme.colors.shadow+"0D"})),ee=(0,c.ZP)(m.Z).withConfig({displayName:"team__GridItem",componentId:"sc-91g1dd-10"})(["display:flex;align-items:center;"]),te=c.ZP.span.withConfig({displayName:"team__FootText",componentId:"sc-91g1dd-11"})(["margin-left:1rem;font-size:.75rem;"]),ne=function(e){var t=e.team,n=e.handleSelectTeam,a=(0,w.f)(),r=a.pageString,i=a.stageString,c=a.userLanguage,l=i.find((function(e){return e.chapter===t.chapter})),s="S"===t.chapter?l.stagePrefix+t.stage.slice(2)+l.stageSuffix:l.stages.find((function(e){return e.id===t.stage})).name;return o.createElement(X,{component:k.Z,to:"/team/build/",button:!0,onClick:n(t)},o.createElement(m.Z,{container:!0,spacing:1},o.createElement(ee,{item:!0,xs:6},t.stage+" : "+s),o.createElement(ee,{item:!0,xs:6},o.createElement(te,null,r.team.index.author+" : "+t.author),o.createElement(te,null,t.time.toDate().toLocaleString(R[c].locale,{timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone}))),o.createElement(ee,{item:!0,xs:12},o.createElement($,{chars:t.characters})),0!==t.description.length&&o.createElement(ee,{item:!0,xs:12},t.description)))},ae=(0,c.ZP)(F.Z).withConfig({displayName:"team__StyledStageSelect",componentId:"sc-91g1dd-12"})(["&&{position:absolute;top:-3.2rem;right:3rem;width:30%;height:2rem;.MuiSelect-select{padding:.5rem 2rem .5rem 1rem;font-size:small;}}"]),re=function(){var e=(0,w.f)().pageString,t=(0,E.q)().actions.newTeam,r=(0,o.useState)({chapter:"all",stage:"all",hasFirestoreLoaded:!1,hasVisited:!0,lastItem:null}),c=r[0],l=r[1],s=(0,o.useRef)();(0,o.useEffect)((function(){Promise.all([n.e(585),n.e(154)]).then(n.bind(n,34107)).then((function(e){s.current=e.teamsRef,l((function(e){return Object.assign({},e,{hasFirestoreLoaded:!0})}))}))}),[]);var d=(0,o.useCallback)((function(e){var t=e.orderKey,n=e.orderDirection;if(s.current){var a=s.current.orderBy(t,n);return"all"!==c.chapter&&(a=a.where("chapter","==",c.chapter).where("stage","==",c.stage)),a}}),[c.chapter,c.stage,c.hasFirestoreLoaded]),m=(0,o.useCallback)((function(e){var t=d({orderKey:"time",orderDirection:"desc"});if(t)return t.limit(1).onSnapshot((function(t){var n=t.docChanges().filter((function(e){return"added"===e.type})).map((function(e){return Object.assign({id:e.doc.id},e.doc.data())}));e({type:"UNSHIFT",items:n})}),(function(e){console.log(e)}))}),[d]),u=(0,o.useCallback)((0,a.Z)(i().mark((function e(){var t,n,a,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=d({orderKey:"time",orderDirection:"desc"}),console.log(t),t){e.next=4;break}return e.abrupt("return");case 4:return t=c.lastItem?t.startAfter(c.lastItem).limit(10):t.limit(10),e.next=7,t.get();case 7:if(n=e.sent,a=c.lastItem?n.docs:n.docs.slice(1),!(r=a[a.length-1])){e.next=14;break}l((function(e){return Object.assign({},e,{lastItem:r})})),e.next=15;break;case 14:return e.abrupt("return",[]);case 15:return e.abrupt("return",a.map((function(e){return Object.assign({id:e.id},e.data())})));case 16:case"end":return e.stop()}}),e)}))),[d,c.lastItem]),f=function(e){return function(){var n=e.name,a=e.characters;t({name:n,characters:a})}};return o.createElement(o.Fragment,null,o.createElement(ae,{value:c.chapter+"/"+c.stage,handleChange:function(e){if(e.target.value){var t=e.target.value.split("/");l((function(e){return Object.assign({},e,{chapter:t[0],stage:t[1],hasVisited:!1,lastItem:null})}))}}},o.createElement(b.Z,{value:"all/all"},e.team.index.allStage)),o.createElement(T,{listenLatestUpdate:m,fetchItem:u,renderItem:function(e){return e&&o.createElement(ne,{team:e,handleSelectTeam:f,key:null==e?void 0:e.id})},hasVisited:c.hasVisited,onResetVisited:function(){return l(Object.assign({},c,{hasVisited:!0}))}}))},ie=c.ZP.div.withConfig({displayName:"team__PageWrapper",componentId:"sc-91g1dd-13"})(["position:relative;max-width:1000px;margin:auto;"]),oe=(0,c.ZP)(C.Z).withConfig({displayName:"team__StyledHeader",componentId:"sc-91g1dd-14"})(["position:relative;left:-1rem;width:100%;height:auto;margin:0;padding:0 0 .5rem 1rem;border:none;label{margin-right:.6rem;font-size:large;}> div:last-child{position:relative;bottom:-.4rem;right:-1rem;}"]),ce=(0,c.ZP)(d.Z).withConfig({displayName:"team__StyledDivider",componentId:"sc-91g1dd-15"})(["&&{background-color:",";}"],(function(e){return e.theme.colors.dropdownHover})),le=(0,c.ZP)(S.Z).withConfig({displayName:"team__TabPanel",componentId:"sc-91g1dd-16"})(["position:relative;"]),se=function(){var e=(0,w.f)().pageString;return o.createElement(ie,null,o.createElement(Z.Z,{title:e.team.index.helmet.title,description:e.team.index.helmet.description,path:"/team/"}),o.createElement(oe,{end:o.createElement(D,null)}),o.createElement(ce,null),o.createElement(le,{localStorageKey:"team-list-tab",layoutSwitcher:o.createElement(A,null),items:[{layout:"local",content:o.createElement(Q,null)},{layout:"cloud",content:o.createElement(re,null)}],initLayoutIndex:0}))}}}]);
//# sourceMappingURL=component---src-pages-team-index-js-dfdd7ec46a8c251f6a8c.js.map