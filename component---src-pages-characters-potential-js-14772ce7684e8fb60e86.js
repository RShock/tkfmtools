(self.webpackChunktkfmtools=self.webpackChunktkfmtools||[]).push([[34],{8169:function(e,t,n){"use strict";var r=n(22122),a=n(19756),i=n(75900),l=n.n(i),o=n(67294),u=n(99541),m=o.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,m=e.striped,c=e.bordered,s=e.borderless,f=e.hover,d=e.size,p=e.variant,h=e.responsive,g=(0,a.Z)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),b=(0,u.vE)(n,"table"),y=l()(i,b,p&&b+"-"+p,d&&b+"-"+d,m&&b+"-striped",c&&b+"-bordered",s&&b+"-borderless",f&&b+"-hover"),v=o.createElement("table",(0,r.Z)({},g,{className:y,ref:t}));if(h){var S=b+"-responsive";return"string"==typeof h&&(S=S+"-"+h),o.createElement("div",{className:S},v)}return v}));t.Z=m},87908:function(e,t,n){"use strict";n.d(t,{Q:function(){return c},qg:function(){return d},cP:function(){return h}});var r=n(67294),a=n(50009),i=n(8169),l=n(57954),o=n(93175),u=(0,a.ZP)(o.Z).withConfig({displayName:"MyCard__StyledImg",componentId:"sc-1txoees-0"})(["display:flex;justify-content:center;align-items:center;width:100%;background-repeat:no-repeat;"]),m=a.ZP.div.withConfig({displayName:"MyCard__ImgWrapper",componentId:"sc-1txoees-1"})(["display:flex;align-items:center;justify-content:center;"]),c=function(e){var t=e.children,n=e.className,a=e.imgType,i=e.imgId,l=e.alt;return e.isBackground?r.createElement(u,{className:n,name:a+"_"+i,isBackground:!0,alt:l},t):r.createElement(m,{className:n},r.createElement(u,{name:a+"_"+i,alt:l}),t)},s=(0,a.ZP)(c).withConfig({displayName:"MyCard__ItemImg",componentId:"sc-1txoees-2"})(["> div:first-child{width:2.5rem;height:2.5rem;margin-right:.4rem;user-select:none;}"]),f=a.ZP.div.withConfig({displayName:"MyCard__TextWrapper",componentId:"sc-1txoees-3"})(["white-space:nowrap;font-size:medium;font-weight:normal;"]),d=function(e){var t=e.className,n=e.id,a=(0,l.f)().itemString;return r.createElement(s,{className:t,imgType:"item",imgId:n,alt:""},r.createElement(f,null,a.name[n]))},p=(0,a.ZP)(i.Z).withConfig({displayName:"MyCard__StyledTable",componentId:"sc-1txoees-4"})(["font-size:.9rem;color:",";margin:0;> tbody > tr >{td:first-child{padding-left:.75rem;}}"],(function(e){return e.theme.colors.onSurface})),h=function(e){var t=e.className,n=e.children,a=e.striped;return r.createElement(p,{className:t,striped:a,borderless:!0,size:"sm"},n)}},62648:function(e,t,n){"use strict";n.d(t,{Gq:function(){return u},Ph:function(){return m},kg:function(){return c},HX:function(){return s}});var r=n(85061),a=n(67294),i=n(50009),l=n(7408),o=n(53013),u=(0,i.ZP)(o.Z).withConfig({displayName:"MyForm__StyledForm",componentId:"sc-1f0u4ho-0"})(["form{> div:last-child > div{margin-bottom:0;}}"]),m=(0,i.ZP)(o.Z.Control).withConfig({displayName:"MyForm__Select",componentId:"sc-1f0u4ho-1"})(["&&{background-color:",";color:",";border-radius:.25rem;padding:.1rem;border:1px solid ",";width:100%;height:1.6rem;&:focus{box-shadow:0 0 .4rem ",";}}"],(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.onSurface}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.secondary})),c=function(e){var t=e.as,n=e.minNum,i=e.maxNum,l=e.onChange,u=e.defaultValue,c=e.disabled;return a.createElement(o.Z.Group,{as:t},a.createElement(m,{as:"select",value:u,onChange:l,disabled:c},c?a.createElement("option",null,"-"):(0,r.Z)(Array(i+1).keys()).slice(n).map((function(e){return a.createElement("option",{value:e,key:e},e)}))))},s=function(e){var t=e.title,n=e.handleSelect,r=e.subMinNum,i=e.minNum,u=e.maxNum,m=e.selectAttrs,s=e.defaultValues,f=e.disabled;return a.createElement(a.Fragment,null,t,a.createElement(o.Z.Row,null,a.createElement(c,{as:l.Z,minNum:i,maxNum:u,onChange:n(m[0]),defaultValue:s?s[0]:void 0,disabled:f}),"–",a.createElement(c,{as:l.Z,minNum:r,maxNum:6,onChange:n(m[1]),defaultValue:s?s[1]:void 0,disabled:f})))}},54480:function(e,t,n){"use strict";var r=n(67294),a=n(50009),i=n(55560),l=n(57954),o=a.ZP.div.withConfig({displayName:"Panels__Container",componentId:"sc-1bswg4j-0"})(["display:table;width:calc(100% + 2rem);max-width:",";margin:-1rem;margin-bottom:0;border-spacing:1rem;@media screen and (max-width:1000px) ","{display:block;width:100%;max-width:1000px;margin:auto;> div{display:block;width:100%;margin:1rem 0;> div{height:100%;}}}"],(function(e){return e.$maxWidth}),(function(e){return e.$horizontal?"":",(min-width: 0px)"})),u=a.ZP.div.withConfig({displayName:"Panels__OutlinedPanel",componentId:"sc-1bswg4j-1"})(["display:table-cell;width:",";padding:1rem;border-radius:.25rem;border:1px solid ",";background-color:",";box-shadow:0 0 .15em ",";"],(function(e){return e.$width}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.shadow}));t.Z=function(e){var t=e.children,n=e.maxWidth,a=e.panelsWidth,m=e.horizontal,c=(0,i.x)().layout,s=(0,l.f)().pageString;return r.createElement(o,{$maxWidth:n,$horizontal:m||c===s.index.setting.labels[1]},t.map((function(e,t){return r.createElement(u,{key:t,$width:a[t]},e)})))}},41775:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(67294),a=n(50009),i=n(54480),l=n(57954),o=n(47378),u=n(7408),m=n(53013),c=n(17182),s=n(93175),f=n(62648),d=n(28437),p=n(68912),h=(0,a.ZP)(f.Gq).withConfig({displayName:"CharSelectPanel__CharForm",componentId:"sc-19mq7yb-0"})(["form{width:13.5rem;}"]),g=a.ZP.div.withConfig({displayName:"CharSelectPanel__CharContainer",componentId:"sc-19mq7yb-1"})(["display:flex;flex-direction:row;justify-content:space-around;"]),b=(0,a.ZP)(s.Z).withConfig({displayName:"CharSelectPanel__CharImgWrapper",componentId:"sc-19mq7yb-2"})(["width:5.1rem;margin-right:1rem;border:2px solid ",";border-radius:.25rem;"],(function(e){return e.theme.colors.secondary})),y=function(e){var t=e.children,n=e.character,a=e.handleSelect,i=e.lumpNRChars,o=(0,l.f)(),s=o.pageString,y=o.charString;return r.createElement(r.Fragment,null,r.createElement(c.Z,{title:s.characters.potential.characterPanelTitle,titleIcon:d.i6,border:!0}),r.createElement(g,null,r.createElement(b,{name:"char_"+n,alt:""}),r.createElement(h,{onSubmit:function(e){return e.preventDefault()}},s.characters.potential.characterSelectTitle,r.createElement(m.Z.Row,null,r.createElement(m.Z.Group,{as:u.Z},r.createElement(f.Ph,{as:"select",onChange:a("character")},p.map((function(e,t){return!(e.rarity<2&&i)&&r.createElement("option",{value:e.id,key:t},y.name[e.id])})),i&&r.createElement("option",{value:"nr",key:"nr"},y.name.nr)))),t)))},v=n(87908),S=n(42474),E=n(59969),C=a.ZP.span.withConfig({displayName:"potential__MaterialWrapper",componentId:"sc-2is47v-0"})(["display:inline-flex;align-items:center;justify-content:space-between;padding:0 .4rem;margin:.2rem 0;"," > div{display:flex;align-items:center;}"],(function(e){return Object.entries(e.$layoutConfig).map((function(e){return"@media screen and (min-width: "+e[0]+"px) {\n            width: calc(100% / "+e[1]+");\n        }\n        "}))})),k=(0,a.ZP)(s.Z).withConfig({displayName:"potential__UiImg",componentId:"sc-2is47v-1"})(["width:1.6rem;height:1.6rem;margin-right:.4rem;"]),P=function(e){var t=e.children,n=e.layoutConfig,a=e.name,i=e.alt;return r.createElement(C,{$layoutConfig:n},r.createElement("div",null,r.createElement(k,{name:a,alt:i}),t))},A=(0,a.ZP)(v.qg).withConfig({displayName:"potential__MaterialCard",componentId:"sc-2is47v-2"})(["> div:first-child{width:2rem;height:2rem;margin-right:.4rem;}"]),w=function(e){var t=e.result,n=e.layoutConfig;return r.createElement(r.Fragment,null,t.items&&Object.entries(t.items).map((function(e,t){return r.createElement(C,{key:t,$layoutConfig:n},r.createElement("div",null,r.createElement(A,{id:e[0],alt:""})),e[1])})),t.items&&t.money&&r.createElement(P,{name:"money",alt:"money",layoutConfig:n},t.money))},N=a.ZP.div.withConfig({displayName:"potential__MaterialContainer",componentId:"sc-2is47v-3"})(["display:flex;flex-direction:row;flex-wrap:wrap;margin-bottom:1rem;min-height:6rem;"]),H={en:{1360:5,1200:4,768:3,0:2},"zh-TW":{1360:6,1200:5,768:4,624:3,0:2}},B=function(e){var t=e.result,n=e.handleModalOpen,a=(0,l.f)(),i=a.userLanguage,o=a.pageString;return r.createElement(r.Fragment,null,r.createElement(c.Z,{title:o.characters.potential.resultDemandTitle,titleIcon:d.S5,withHelp:!0,onClickHelp:n,border:!0}),r.createElement(N,null,r.createElement(w,{result:t,layoutConfig:H[i]})),r.createElement(c.Z,{title:o.characters.potential.resultBuffTitle,titleIcon:d.G$,border:!0}),r.createElement(P,{layoutConfig:H[i],name:"ui_small_atk",alt:"ATK"},t.buff.ATK+" %"),r.createElement(P,{layoutConfig:H[i],name:"ui_small_hp",alt:"HP"},t.buff.HP+" %"),r.createElement(P,{layoutConfig:H[i],name:"ui_small_potentialPassive",alt:"Passive"},0===t.buff.PASSIVE?"-":1===t.buff.PASSIVE?"1":2===t.buff.PASSIVE?"2":"1 & 2"))},J=a.ZP.div.withConfig({displayName:"potential__FormGutter",componentId:"sc-2is47v-4"})(["margin-top:4rem;"]),x=function(){var e=(0,l.f)().pageString,t=(0,r.useState)({character:"101",currStage:1,currSub:1,targetStage:1,targetSub:1,result:{items:void 0,money:0,buff:{ATK:0,HP:0,PASSIVE:0}},isHelpModalOpen:!1}),n=t[0],a=t[1],u=function(e){return function(t){var r=Object.assign({},n),i=t.target.value;r[e]="character"===e?i:parseInt(i),"nr"===i&&(r.currStage=n.currStage>6?1:n.currStage,r.targetStage=n.targetStage>6?1:n.targetStage),r.targetStage=Math.max(r.targetStage,r.currStage),r.targetStage===r.currStage&&(r.targetSub=Math.max(r.targetSub,r.currSub));var l=(0,E.calcCharPotential)(r.character,[r.currStage,r.currSub],[r.targetStage,r.targetSub]);l.buff.ATK=Math.round(100*l.buff.ATK)/100,l.buff.HP=Math.round(100*l.buff.HP)/100,r.result=l,a(r)}},m="nr"===n.character?6:12,c=function(e){return function(){a((function(t){return Object.assign({},t,{isHelpModalOpen:e})}))}};return r.createElement(r.Fragment,null,r.createElement(o.Z,{title:e.characters.potential.helmet.title,description:e.characters.potential.helmet.description,path:"/characters/potential/"}),r.createElement(i.Z,{panelsWidth:["30%","70%"]},r.createElement(y,{handleSelect:u,character:n.character,lumpNRChars:!0},r.createElement(J,null),r.createElement(f.HX,{title:e.characters.potential.currentSelectTitle,subMinNum:1,minNum:1,maxNum:m,selectAttrs:["currStage","currSub"],handleSelect:u}),r.createElement(f.HX,{title:e.characters.potential.targetSelectTitle,subMinNum:n.currStage===n.targetStage?n.currSub:1,minNum:n.currStage,maxNum:m,selectAttrs:["targetStage","targetSub"],handleSelect:u})),r.createElement(B,{result:n.result,handleModalOpen:c(!0)})),r.createElement(S.p2,{title:e.characters.potential.helpModal.title,open:n.isHelpModalOpen,onClose:c(!1),content:e.characters.potential.helpModal.content,ariaLabelledby:"help-modal-title",ariaDescribedby:"help-modal-description"}))}},59969:function(e,t,n){function r(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=n(68912),l=n(83803),o=function(e,t,n){for(var a={items:{},money:0,buff:{ATK:0,HP:0,PASSIVE:0}},o="nr"===e||"4"===e[0]||"3"===e[0]?3:i.find((function(t){return t.id===e})).potentialType,u=l.type[o],m=t[0]-1;m<n[0]-1+1;m++)for(var c=u[m],s=m===t[0]-1?t[1]-1:0;s<(m===n[0]-1?n[1]:6);s++)if(!(s<0)){var f=c.pattern[s]+c.rank[s];a.items[f]?a.items[f]+=c.num[s]:a.items[f]=c.num[s],a.money+=8e3*(m+1);var d=l.itemMap[c.pattern[s]].type;a.buff[d]+=c.buff[s]}for(var p={},h=function(){for(var e,t=b[g],n=t[0],a=t[1],i=r(l.itemMap[n[0]].id.map((function(e){return"9"===n[1]?"902":"8"===n[1]?"901":(100*parseInt(n[1])+e).toString()})));!(e=i()).done;){var o=e.value;p[o]?p[o]+=a:p[o]=a}},g=0,b=Object.entries(a.items);g<b.length;g++)h();return a.items=p,a};e.exports=function(e,t,n,r,a,i,l,u){if(e){var m=Math.pow(1.1,t-1),c=o(e,[1,0],[n,r]).buff,s=1+.05*a,f=(i+5)/(9-e[0]);return{ATK:Math.floor(l*m*(1+c.ATK/100)*s*f),HP:Math.floor(u*m*(1+c.HP/100)*s*f)}}},e.exports.calcCharPotential=o},83803:function(e){"use strict";e.exports=JSON.parse('{"type":[[{"pattern":["B","B","J","J","J","J"],"num":[1,2,2,2,2,1],"rank":[1,1,1,1,1,1],"buff":[2,2,3,3,3,3]},{"pattern":["B","B","J","J","J","J"],"num":[2,2,2,3,2,3],"rank":[1,1,1,1,1,1],"buff":[2,2,3.5,3.5,3.5,3.5]},{"pattern":["B","B","B","B","J","J"],"num":[1,1,1,1,2,2],"rank":[2,2,2,2,2,2],"buff":[2,2,2,2,3.5,3.5]},{"pattern":["B","B","B","J","J","J"],"num":[2,1,1,3,3,3],"rank":[2,2,2,2,2,2],"buff":[2,2,2,3.5,3.5,3.5]},{"pattern":["B","B","B","J","J","J"],"num":[1,1,2,4,4,4],"rank":[3,2,2,2,2,2],"buff":[2,2,2,3.5,3.5,3.5]},{"pattern":["P","B","B","B","J","J"],"num":[1,2,1,2,4,4],"rank":[9,3,3,3,3,3],"buff":[1,2,2,2,3.5,3.5]},{"pattern":["B","B","B","B","J","J"],"num":[2,3,2,2,4,4],"rank":[3,3,3,3,3,3],"buff":[2.5,2.5,2.5,2.5,3.5,3.5]},{"pattern":["B","B","B","B","J","J"],"num":[2,2,3,2,4,4],"rank":[3,3,3,3,3,3],"buff":[2.5,2.5,2.5,2.5,3.5,3.5]},{"pattern":["E","E","E","E","M","M"],"num":[2,3,3,2,5,5],"rank":[4,4,4,4,4,4],"buff":[2.5,2.5,2.5,2.5,3.5,3.5]},{"pattern":["G","G","G","G","N","N"],"num":[3,2,2,3,6,6],"rank":[4,4,4,4,4,4],"buff":[3,3,3,3,3.5,3.5]},{"pattern":["E","E","E","E","M","M"],"num":[1,1,1,1,1,1],"rank":[5,5,5,5,5,5],"buff":[3,3,3,3,3.5,3.5]},{"pattern":["P","G","G","G","G","N"],"num":[2,1,1,1,1,1],"rank":[9,5,5,5,5,5],"buff":[2,3,3,3,3,4]}],[{"pattern":["J","J","B","B","B","B"],"num":[1,2,2,2,2,1],"rank":[1,1,1,1,1,1],"buff":[2,2,3,3,3,3]},{"pattern":["J","J","B","B","B","B"],"num":[2,2,2,3,2,3],"rank":[1,1,1,1,1,1],"buff":[2,2,3.5,3.5,3.5,3.5]},{"pattern":["J","J","J","J","B","B"],"num":[1,1,1,1,2,2],"rank":[2,2,2,2,2,2],"buff":[2,2,2,2,3.5,3.5]},{"pattern":["J","J","J","B","B","B"],"num":[2,1,1,3,3,3],"rank":[2,2,2,2,2,2],"buff":[2,2,2,3.5,3.5,3.5]},{"pattern":["J","J","J","B","B","B"],"num":[1,1,2,4,4,4],"rank":[3,2,2,2,2,2],"buff":[2,2,2,3.5,3.5,3.5]},{"pattern":["P","J","J","J","B","B"],"num":[1,2,1,2,4,4],"rank":[9,3,3,3,3,3],"buff":[1,2,2,2,3.5,3.5]},{"pattern":["J","J","J","J","B","B"],"num":[2,3,2,2,4,4],"rank":[3,3,3,3,3,3],"buff":[2.5,2.5,2.5,2.5,3.5,3.5]},{"pattern":["J","J","J","J","B","B"],"num":[2,2,3,2,4,4],"rank":[3,3,3,3,3,3],"buff":[2.5,2.5,2.5,2.5,3.5,3.5]},{"pattern":["M","M","M","M","E","E"],"num":[2,3,3,2,5,5],"rank":[4,4,4,4,4,4],"buff":[2.5,2.5,2.5,2.5,3.5,3.5]},{"pattern":["N","N","N","N","G","G"],"num":[3,2,2,3,6,6],"rank":[4,4,4,4,4,4],"buff":[3,3,3,3,3.5,3.5]},{"pattern":["M","M","M","M","E","E"],"num":[1,1,1,1,1,1],"rank":[5,5,5,5,5,5],"buff":[3,3,3,3,3.5,3.5]},{"pattern":["P","N","N","N","N","G"],"num":[2,1,1,1,1,1],"rank":[9,5,5,5,5,5],"buff":[2,3,3,3,3,4]}],[{"pattern":["A","A","A","A","A","A"],"num":[2,2,2,2,2,2],"rank":[1,1,1,1,1,1],"buff":[2.75,2.75,2.75,2.75,2.75,2.75]},{"pattern":["H","H","H","H","H","H"],"num":[2,2,2,2,2,2],"rank":[1,1,1,1,1,1],"buff":[2.75,2.75,2.75,2.75,2.75,2.75]},{"pattern":["A","H","A","H","A","H"],"num":[3,2,1,1,1,1],"rank":[2,2,2,2,2,2],"buff":[2.75,2.75,2.75,2.75,2.75,2.75]},{"pattern":["H","A","A","A","A","A"],"num":[3,3,3,2,2,2],"rank":[2,2,2,2,2,2],"buff":[2.75,2.75,2.75,2.75,2.75,2.75]},{"pattern":["C","H","H","H","H","H"],"num":[3,3,3,2,2,2],"rank":[3,2,2,2,2,2],"buff":[2.75,2.75,2.75,2.75,2.75,2.75]},{"pattern":["P","K","C","K","C","K"],"num":[1,3,2,2,2,2],"rank":[9,3,3,3,3,3],"buff":[1,2.75,2.75,2.75,2.75,2.75]},{"pattern":["C","K","C","K","C","K"],"num":[2,2,3,3,3,3],"rank":[3,3,3,3,3,3],"buff":[2.75,2.75,2.75,2.75,2.75,3]},{"pattern":["C","K","C","K","C","K"],"num":[3,3,3,3,3,3],"rank":[3,3,3,3,3,3],"buff":[3,3,3,3,3,3]},{"pattern":["D","L","D","L","D","L"],"num":[4,4,3,3,3,3],"rank":[4,4,4,4,4,4],"buff":[3,3,3,3,3,3]},{"pattern":["F","O","F","O","F","O"],"num":[4,4,4,4,3,3],"rank":[4,4,4,4,4,4],"buff":[3,3,3,3,3,3]},{"pattern":["D","L","D","L","D","L"],"num":[1,1,1,1,1,1],"rank":[5,5,5,5,5,5],"buff":[3,3,3,3,3,3]},{"pattern":["P","F","F","O","F","O"],"num":[2,1,1,1,1,1],"rank":[9,5,5,5,5,5],"buff":[2,3,3,3,3,3]}],[{"pattern":["A","A","A","A","A","A"],"num":[2,2,2,2,2,2],"rank":[1,1,1,1,1,1],"buff":[2.75,2.75,2.75,2.75,3,3]},{"pattern":["H","H","H","H","H","H"],"num":[2,2,2,2,2,2],"rank":[1,1,1,1,1,1],"buff":[2.75,2.75,2.75,2.75,3,3]},{"pattern":["P","H","A","H","A","H"],"num":[5,2,1,1,1,1],"rank":[8,2,2,2,2,2],"buff":[1,3,3,3,3,3]},{"pattern":["A","A","A","A","A","A"],"num":[3,3,3,2,2,2],"rank":[2,2,2,2,2,2],"buff":[3,3,3,3,3,3]},{"pattern":["H","H","H","H","H","H"],"num":[3,3,3,2,2,2],"rank":[2,2,2,2,2,2],"buff":[3,3,3,3,3,3]},{"pattern":["P","C","K","C","K","C"],"num":[10,3,3,2,2,2],"rank":[8,3,3,3,3,3],"buff":[2,3,3,3,3,3]}]],"itemMap":{"A":{"id":[1,3],"type":"ATK"},"B":{"id":[1,5],"type":"ATK"},"C":{"id":[3,5],"type":"ATK"},"D":{"id":[1,3],"type":"ATK"},"E":{"id":[1,5],"type":"ATK"},"F":{"id":[8,10],"type":"ATK"},"G":{"id":[6,10],"type":"ATK"},"H":{"id":[2,3],"type":"HP"},"J":{"id":[2,4],"type":"HP"},"K":{"id":[3,4],"type":"HP"},"L":{"id":[2,3],"type":"HP"},"M":{"id":[2,4],"type":"HP"},"N":{"id":[7,9],"type":"HP"},"O":{"id":[8,9],"type":"HP"},"P":{"id":[1],"type":"PASSIVE"}}}')}}]);
//# sourceMappingURL=component---src-pages-characters-potential-js-14772ce7684e8fb60e86.js.map