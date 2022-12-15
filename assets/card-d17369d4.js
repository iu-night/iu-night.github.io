import{y as C,o as r,c as p,M as $,_,n as l,l as t,a as h,K as m,F as c,r as v,b as e,$ as I,I as N}from"./index-0b4ebc15.js";import{_ as S}from"./ExDisplay.vue_vue_type_script_setup_true_lang-f79f6ee0.js";const y={class:"prose prose-sm text-left"},B=$("<h2>API</h2><h3>Card Props</h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>bordered</td><td><code>boolean</code></td><td><code>true</code></td><td>是否显示卡片边框</td></tr><tr><td>hoverable</td><td><code>boolean</code></td><td><code>false</code></td><td>卡片是否可悬浮</td></tr><tr><td>title</td><td><code>string</code></td><td><code>undefined</code></td><td>卡片标题</td></tr></tbody></table><h3>Card Slots</h3><table><thead><tr><th>名称</th><th></th><th></th><th>说明</th></tr></thead><tbody><tr><td>header</td><td></td><td></td><td>头部内容</td></tr><tr><td>extra</td><td></td><td></td><td>头部额外内容</td></tr><tr><td>default</td><td></td><td></td><td>卡片内容</td></tr><tr><td>footer</td><td></td><td></td><td>底部内容</td></tr><tr><td>action</td><td></td><td></td><td>操作区域内容</td></tr></tbody></table>",5),g=[B],V={__name:"CardApi",setup(n,{expose:o}){return o({frontmatter:{meta:[]}}),C({meta:[]}),(a,i)=>(r(),p("div",y,g))}},k={},A=h("div",null,"无边框卡片",-1);function D(n,o){const d=m;return r(),l(d,{bordered:!1},{default:t(()=>[A]),_:1})}const H=_(k,[["render",D]]),w={};function E(n,o){const d=m;return r(),l(d,null,{header:t(()=>[c(" #header ")]),footer:t(()=>[c(" #footer ")]),action:t(()=>[c(" #action ")]),default:t(()=>[c(" default ")]),_:1})}const P=_(w,[["render",E]]),F={},K=h("div",null,"可悬浮卡片",-1);function M(n,o){const d=m;return r(),l(d,{hoverable:""},{default:t(()=>[K]),_:1})}const T=_(F,[["render",M]]),j={},q={class:"flex flex-col mt-30px"},z=h("div",{"mb-30px":"","text-30px":"","font-bold":""}," Card ",-1);function G(n,o){const d=I,u=v("Starport"),a=S,i=T,s=N,f=P,x=H,b=V;return r(),p("div",q,[z,e(s,null,{default:t(()=>[e(s,{vertical:""},{default:t(()=>[e(a,{title:"基础",name:"card",comName:"DocCard"},{default:t(()=>[e(u,{port:"iu-card","h-100px":"","w-300px":""},{default:t(()=>[e(d)]),_:1})]),_:1}),e(a,{title:"悬浮",name:"card",comName:"CardHoverable"},{default:t(()=>[e(i)]),_:1})]),_:1}),e(s,{vertical:""},{default:t(()=>[e(a,{title:"插槽",name:"card",comName:"CardSlot"},{default:t(()=>[e(f)]),_:1}),e(a,{title:"边框",name:"card",comName:"CardBordered"},{default:t(()=>[e(x)]),_:1})]),_:1})]),_:1}),e(b)])}const O=_(j,[["render",G]]);export{O as default};
