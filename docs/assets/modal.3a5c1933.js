import{y as M,o as c,c as r,A as w,d as i,g as u,a as t,w as o,B as l,b as h,I as p,U as f,_ as b,r as $,V as I,C as k}from"./index.5424c0d1.js";import{_ as S}from"./ExDisplay.vue_vue_type_script_setup_true_lang.ed62ad76.js";const y={class:"prose prose-sm text-left"},C=w("<h2>API</h2><h3>Modal Props</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>show</td><td><code>boolean</code></td><td><code>false</code></td><td>\u662F\u5426\u663E\u793A\u6A21\u6001\u6846</td></tr><tr><td>title</td><td><code>string</code></td><td><code>undefined</code></td><td>\u6A21\u6001\u6846\u6807\u9898</td></tr><tr><td>maskClose</td><td><code>boolean</code></td><td><code>true</code></td><td>\u70B9\u51FB\u906E\u7F69\u65F6\u662F\u5426\u5173\u95ED\u6A21\u6001\u6846</td></tr></tbody></table><h3>Modal Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th></th><th></th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>header</td><td></td><td></td><td>\u5934\u90E8\u5185\u5BB9</td></tr><tr><td>default</td><td></td><td></td><td>\u4E3B\u4F53\u5185\u5BB9</td></tr><tr><td>footer</td><td></td><td></td><td>\u5E95\u90E8\u5185\u5BB9</td></tr><tr><td>action</td><td></td><td></td><td>\u64CD\u4F5C\u533A\u57DF\u5185\u5BB9</td></tr></tbody></table>",5),B=[C],N={__name:"ModalApi",setup(m,{expose:e}){return e({frontmatter:{meta:[]}}),M({meta:[]}),(s,n)=>(c(),r("div",y,B))}},V=l(" modal "),A=h("div",{style:{width:"300px"}}," modal ",-1),D=i({__name:"ModalMask",setup(m){const e=u(!1);return(_,d)=>{const s=p,n=f;return c(),r("div",null,[t(s,{onClick:d[0]||(d[0]=a=>e.value=!e.value)},{default:o(()=>[V]),_:1}),t(n,{show:e.value,"onUpdate:show":d[1]||(d[1]=a=>e.value=a),title:"Modal",maskClose:!1},{default:o(()=>[A]),_:1},8,["show"])])}}}),U=l(" modal "),g=l(" #header "),E=h("div",{style:{width:"300px"}}," default ",-1),P=l(" #footer "),H=l(" #action "),T=i({__name:"ModalSlot",setup(m){const e=u(!1);return(_,d)=>{const s=p,n=f;return c(),r("div",null,[t(s,{onClick:d[0]||(d[0]=a=>e.value=!e.value)},{default:o(()=>[U]),_:1}),t(n,{show:e.value,"onUpdate:show":d[1]||(d[1]=a=>e.value=a)},{header:o(()=>[g]),footer:o(()=>[P]),action:o(()=>[H]),default:o(()=>[E]),_:1},8,["show"])])}}}),j={},q={class:"flex flex-col mt-30px"},z=h("div",{"mb-30px":"","text-30px":"","font-bold":""}," Modal ",-1);function F(m,e){const _=I,d=$("Starport"),s=S,n=T,a=k,v=D,x=N;return c(),r("div",q,[z,t(a,null,{default:o(()=>[t(a,{vertical:""},{default:o(()=>[t(s,{title:"\u57FA\u7840",name:"modal",comName:"DocModal"},{default:o(()=>[t(d,{port:"iu-modal","h-34px":"","w-82px":""},{default:o(()=>[t(_)]),_:1})]),_:1}),t(s,{title:"\u63D2\u69FD",name:"modal",comName:"ModalSlot"},{default:o(()=>[t(n)]),_:1})]),_:1}),t(a,{vertical:""},{default:o(()=>[t(s,{title:"\u906E\u7F69\u5173\u95ED",name:"modal",comName:"ModalMask"},{default:o(()=>[t(v)]),_:1})]),_:1})]),_:1}),t(x)])}const K=b(j,[["render",F]]);export{K as default};