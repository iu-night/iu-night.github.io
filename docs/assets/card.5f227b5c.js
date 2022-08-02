import{j as I,o as a,c as f,k as $,_ as l,l as u,w as t,b as p,B as i,m as _,d as B,r as S,a as e,e as c,C as w,n as g}from"./index.20b39a38.js";import{_ as A}from"./CodeBox.410a5573.js";const D=`<template>
  <IuCard title="Card\u6807\u9898">
    <div>\u5361\u7247\u5185\u5BB9</div>
  </IuCard>
</template>
`,k=`<template>
  <IuCard>
    <template #header>
      #header
    </template>
    default
    <template #footer>
      #footer
    </template>
    <template #action>
      #action
    </template>
  </IuCard>
</template>
`,y=`<template>
  <IuCard hoverable>
    <div>\u53EF\u60AC\u6D6E\u5361\u7247</div>
  </IuCard>
</template>
`,N=`<template>
  <IuCard :bordered="false">
    <div>\u65E0\u8FB9\u6846\u5361\u7247</div>
  </IuCard>
</template>
`,V={class:"prose prose-sm text-left"},F=$("<h2>API</h2><h3>Card Props</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>bordered</td><td><code>boolean</code></td><td><code>true</code></td><td>\u662F\u5426\u663E\u793A\u5361\u7247\u8FB9\u6846</td></tr><tr><td>hoverable</td><td><code>boolean</code></td><td><code>false</code></td><td>\u5361\u7247\u662F\u5426\u53EF\u60AC\u6D6E</td></tr><tr><td>title</td><td><code>string</code></td><td><code>undefined</code></td><td>\u5361\u7247\u6807\u9898</td></tr></tbody></table><h3>Card Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th></th><th></th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>header</td><td></td><td></td><td>\u5934\u90E8\u5185\u5BB9</td></tr><tr><td>extra</td><td></td><td></td><td>\u5934\u90E8\u989D\u5916\u5185\u5BB9</td></tr><tr><td>default</td><td></td><td></td><td>\u5361\u7247\u5185\u5BB9</td></tr><tr><td>footer</td><td></td><td></td><td>\u5E95\u90E8\u5185\u5BB9</td></tr><tr><td>action</td><td></td><td></td><td>\u64CD\u4F5C\u533A\u57DF\u5185\u5BB9</td></tr></tbody></table>",5),H=[F],E={__name:"CardApi",setup(r,{expose:o}){return o({frontmatter:{meta:[]}}),I({meta:[]}),(m,n)=>(a(),f("div",V,H))}},P={},j=p("div",null,"\u65E0\u8FB9\u6846\u5361\u7247",-1);function T(r,o){const d=i;return a(),u(d,{bordered:!1},{default:t(()=>[j]),_:1})}const q=l(P,[["render",T]]),z={},G=_(" #header "),J=_(" default "),K=_(" #footer "),L=_(" #action ");function M(r,o){const d=i;return a(),u(d,null,{header:t(()=>[G]),footer:t(()=>[K]),action:t(()=>[L]),default:t(()=>[J]),_:1})}const O=l(z,[["render",M]]),Q={},R=p("div",null,"\u53EF\u60AC\u6D6E\u5361\u7247",-1);function U(r,o){const d=i;return a(),u(d,{hoverable:""},{default:t(()=>[R]),_:1})}const W=l(Q,[["render",U]]),X={class:"flex flex-col mt-30px"},Y=p("div",{"mb-30px":"","text-30px":"","font-bold":""}," Card ",-1),et=B({__name:"card",setup(r){return(o,d)=>{const h=w,m=S("Starport"),n=A,C=W,s=g,x=O,b=q,v=E;return a(),f("div",X,[Y,e(s,null,{default:t(()=>[e(s,{vertical:""},{default:t(()=>[e(n,{"w-500px":"",title:"\u57FA\u7840",code:c(D)},{default:t(()=>[e(m,{port:"iu-card","w-300px":"","h-100px":""},{default:t(()=>[e(h)]),_:1})]),_:1},8,["code"]),e(n,{"w-500px":"",title:"\u60AC\u6D6E",code:c(y)},{default:t(()=>[e(C)]),_:1},8,["code"])]),_:1}),e(s,{vertical:""},{default:t(()=>[e(n,{"w-500px":"",title:"\u63D2\u69FD",code:c(k)},{default:t(()=>[e(x)]),_:1},8,["code"]),e(n,{"w-500px":"",title:"\u8FB9\u6846",code:c(N)},{default:t(()=>[e(b)]),_:1},8,["code"])]),_:1})]),_:1}),e(v)])}}});export{et as default};
