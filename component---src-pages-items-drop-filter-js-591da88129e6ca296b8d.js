(self.webpackChunktkfmtools=self.webpackChunktkfmtools||[]).push([[302],{54480:function(e,t,n){"use strict";var r=n(67294),i=n(50009),a=n(55560),l=n(57954),o=i.ZP.div.withConfig({displayName:"Panels__Container",componentId:"sc-1bswg4j-0"})(["display:table;width:calc(100% + 2rem);max-width:",";margin:-1rem;margin-bottom:0;border-spacing:1rem;@media screen and (max-width:1000px) ","{display:block;width:100%;max-width:1000px;margin:auto;> div{display:block;width:100%;margin:1rem 0;> div{height:100%;}}}"],(function(e){return e.$maxWidth}),(function(e){return e.$horizontal?"":",(min-width: 0px)"})),c=i.ZP.div.withConfig({displayName:"Panels__OutlinedPanel",componentId:"sc-1bswg4j-1"})(["display:table-cell;width:",";padding:1rem;border-radius:.25rem;border:1px solid ",";background-color:",";box-shadow:0 0 .15em ",";"],(function(e){return e.$width}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.shadow}));t.Z=function(e){var t=e.children,n=e.maxWidth,i=e.panelsWidth,s=e.horizontal,u=(0,a.x)().layout,d=(0,l.f)().pageString,m=(0,r.useState)(!1),f=m[0],p=m[1];return(0,r.useEffect)((function(){p(u===d.index.setting.labels[1])}),[u]),r.createElement(o,{$maxWidth:n,$horizontal:s||f},t.map((function(e,t){return r.createElement(c,{key:t,$width:i[t]},e)})))}},26465:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(19756),i=n(85061),a=n(67294),l=n(50009),o=n(54480),c=n(57954),s=n(47378),u=n(99870),d=n(17182),m=n(27859),f=n(55317),p=n(93175),g=n(42474),h=n(28437),y=n(20156),b={};y.forEach((function(e){e.stages.forEach((function(t){var n=t.materials,i=t.trainItems,a=t.expPotions,l=(0,r.Z)(t,["materials","trainItems","expPotions"]);[n,i,a].forEach((function(t){t.forEach((function(t){var n=Object.assign({chapter:e.chapter,rarity:t.rarity},l);b[t.id]?b[t.id].drop.push(n):b[t.id]={drop:[n]}}))}))}))}));for(var E=1;E<11;E++)b[(500+E).toString()]={drop:[]};for(var v=1;v<3;v++)b[(900+v).toString()]={drop:[]};var k=b,w={en:{1360:4,992:3,768:4,624:3,0:2},"zh-TW":{1360:5,992:4,768:5,624:4,410:3,0:2}},x=(0,l.ZP)(f.K).withConfig({displayName:"filter__StyledToggleButton",componentId:"sc-1e6kgg1-0"})(["display:flex;justify-content:center;align-items:center;font-size:.85rem;"]),S=(0,l.ZP)(p.Z).withConfig({displayName:"filter__ItemImg",componentId:"sc-1e6kgg1-1"})(["width:2.26rem;height:2.26rem;"]),I=function(e){var t=e.filterBtnValue,n=e.filterBy,r=e.clearBtnValue,i=(0,c.f)(),l=i.userLanguage,o=i.pageString,s=i.itemString;return a.createElement(a.Fragment,null,a.createElement(d.Z,{title:o.items.drop.filter.itemPanelTitle,end:a.createElement(m.Io,{onClick:r,tooltipText:o.items.drop.filter.deleteTooltip},h.pJ),border:!0}),a.createElement(f.Z,{type:"checkbox",value:t,onChange:n,layoutConfig:w[l]},Object.entries(k).map((function(e,t){return 0===e[1].drop.length||a.createElement(x,{value:e[0],key:t},a.createElement(S,{name:"item_"+e[0],alt:""}),s.name[e[0]])}))))},C=(0,l.ZP)(u.Re).withConfig({displayName:"filter__ImgTh",componentId:"sc-1e6kgg1-2"})(["&:after{position:absolute;top:calc(50% - .75rem);margin-left:2rem;}"]),Z=(0,l.ZP)(p.Z).withConfig({displayName:"filter__TableImg",componentId:"sc-1e6kgg1-3"})(["width:1.8rem;height:1.8rem;"]),P=function(e){var t=e.requestSort,n=e.getSortDirection,r=e.sortedResult,i=(0,c.f)(),l=i.pageString,o=i.itemString;return 0===r.length?a.createElement(u.Re,null,l.items.drop.filter.tableHead[1]):Object.entries(r[0]).map((function(e,r){if("stage"!==e[0]&&"energy"!==e[0])return a.createElement(C,{key:r,onClick:function(){return t(e[0])},direction:n(e[0])},a.createElement(Z,{name:"item_"+e[0],alt:o.name[e[0]]}))}))},_=function(e){var t=e.requestSort,n=e.getSortDirection,r=e.sortedResult,i=(0,c.f)().pageString;return a.createElement("thead",null,a.createElement("tr",null,a.createElement(u.Re,{onClick:function(){return t("stage")},direction:n("stage")},i.items.drop.filter.tableHead[0]),a.createElement(P,{requestSort:t,getSortDirection:n,sortedResult:r}),a.createElement(C,{onClick:function(){return t("energy")},direction:n("energy")},a.createElement(Z,{name:"energy",alt:i.items.drop.filter.tableHead[2]}))))},O=function(e){var t=e.sortedResult,n=(0,c.f)().itemString;return a.createElement("tbody",null,t.map((function(e,t){return a.createElement("tr",{key:t},a.createElement("td",null,e.stage),Object.entries(e).map((function(e,t){if("stage"!==e[0]&&"energy"!==e[0])return a.createElement("td",{key:t},n.rarity[e[1]])})),a.createElement("td",null,e.energy))})))},B=function(e,t){var n=function(e){var t=e.split("-");return 1e3*parseInt(t[0])+10*parseInt(t[1].split(" ")[0])+(t[1].includes("free")?1:0)+(t.length>2?parseInt(t[2]):0)};e.sort((function(e,r){var i,a;return"stage"===t.key?(i=n(e.stage),a=n(r.stage)):(i=e[t.key],a=r[t.key]),i<a?"asc"===t.direction?-1:1:i>a?"asc"===t.direction?1:-1:0}))},j=function(){var e=(0,c.f)().pageString,t=(0,a.useState)({filterBtnValue:[],data:[],isHelpModalOpen:!1}),n=t[0],l=t[1],d=function(e){var t;if(0!==e.length){var n=(t=[]).concat.apply(t,(0,i.Z)(y.map((function(e){return e.stages.map((function(t){var n=t.materials,i=t.trainItems,a=t.expPotions,l=(0,r.Z)(t,["materials","trainItems","expPotions"]);return Object.assign({},l,{drops:n.concat(i,a),chapter:e.chapter})}))})))).filter((function(t){return e.every((function(e){var n=!1;return t.drops.forEach((function(t){if(t.id===e)return n=!0,!1})),n}))}));n=n.map((function(t){var n={stage:t.chapter+"-"+t.stage,energy:t.energy};return t.drops.forEach((function(t){e.includes(t.id)&&(n[t.id]=t.rarity)})),n})),l((function(t){return Object.assign({},t,{filterBtnValue:e,data:n})}))}else l((function(t){return Object.assign({},t,{filterBtnValue:e,data:[]})}))},m=function(e){return function(){l((function(t){return Object.assign({},t,{isHelpModalOpen:e})}))}};return a.createElement(a.Fragment,null,a.createElement(s.Z,{title:e.items.drop.filter.helmet.title,description:e.items.drop.filter.helmet.description,path:"/items/drop/filter/"}),a.createElement(o.Z,{panelsWidth:["62%","38%"]},a.createElement(I,{filterBtnValue:n.filterBtnValue,filterBy:d,clearBtnValue:function(){return d([])}}),a.createElement(u.Ac,{data:n.data,head:a.createElement(_,null),body:a.createElement(O,null),sortFunc:B,defaultSortKey:n.filterBtnValue[0],handleModalOpen:m(!0),height:"calc(100vh - 16rem)",striped:!0})),a.createElement(g.p2,{title:e.items.drop.filter.helpModal.title,open:n.isHelpModalOpen,onClose:m(!1),content:e.items.drop.filter.helpModal.content,ariaLabelledby:"help-modal-title",ariaDescribedby:"help-modal-description"}))}}}]);
//# sourceMappingURL=component---src-pages-items-drop-filter-js-591da88129e6ca296b8d.js.map