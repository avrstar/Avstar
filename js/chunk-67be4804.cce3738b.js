(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67be4804"],{"254d":function(t,e,n){},"6db3":function(t,e,n){"use strict";n.r(e);n("e7e5");var r=n("d399"),a=n("1da1"),c=(n("96cf"),n("d3b7"),n("25f0"),n("7a23")),u=n("db9a"),i=n("3de1"),s=n("6779"),o=n("0d17"),b=n("6be8"),p=function(t){return Object(c["F"])("data-v-613ceaca"),t=t(),Object(c["D"])(),t},l={class:"page-container mx-2"},j={class:"mb-3"},f=p((function(){return Object(c["j"])("div",null,"设置数值",-1)})),d={class:"c-input-group c-input-group-box"},O={setup:function(t){var e=Object(c["p"])("chainInfo"),n=Object(c["G"])({currentValue:"",inputValue:""}),p=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["i"])(e);case 2:r=t.sent,a=s["utils"].formatUnits(r.ism,18),n.currentValue=o["a"].from(a).mulUnsafe(o["a"].from("86400")).toString();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var a,c,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(Object(i["a"])(n.inputValue)){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,a=s["utils"].parseUnits(n.inputValue.toString(),18).toString(),a=o["a"].from(a).divUnsafe(o["a"].from("86400")),a=Object(b["a"])(a,0),t.next=8,Object(u["k"])(e,a);case 8:return c=t.sent,c.hash&&Object(r["a"])("处理中..."),t.next=12,e.provider.waitForTransaction(c.hash);case 12:if(l=t.sent,1!==l.status){t.next=17;break}return Object(r["a"])("设置完成"),t.next=17,p();case 17:t.next=22;break;case 19:t.prev=19,t.t0=t["catch"](2),console.log(t.t0);case 22:case"end":return t.stop()}}),t,null,[[2,19]])})));return function(){return t.apply(this,arguments)}}();return Object(c["R"])((function(){e.isActive&&p()})),function(t,e){return Object(c["C"])(),Object(c["i"])("div",l,[Object(c["j"])("div",j,"当前值: "+Object(c["M"])(Object(c["N"])(n).currentValue),1),f,Object(c["j"])("div",d,[Object(c["T"])(Object(c["j"])("input",{class:"px-2",type:"number","onUpdate:modelValue":e[0]||(e[0]=function(t){return Object(c["N"])(n).inputValue=t})},null,512),[[c["O"],Object(c["N"])(n).inputValue]])]),Object(c["j"])("div",{class:"text-center mt-2"},[Object(c["j"])("button",{class:"primary-btn primary-btn-blue",onClick:O},"确认设置")])])}}},m=(n("a84d"),n("6b0d")),v=n.n(m);const h=v()(O,[["__scopeId","data-v-613ceaca"]]);e["default"]=h},a84d:function(t,e,n){"use strict";n("254d")}}]);