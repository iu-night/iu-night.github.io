import{j as v,o as a,c as u,k as I,_ as h,l as i,w as t,m as r,C as m,b as f,d as $,r as S,a as e,e as s,D as w,n as D}from"./app.67601856.js";import{_ as g}from"./CodeBox.328ba3f9.js";const A=`<template>
  <IuCard title="Card\u6807\u9898">
    <div>\u5361\u7247\u5185\u5BB9</div>
  </IuCard>
</template>
`,B=`<template>
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
`,k=`<template>
  <IuCard hoverable>
    <div>\u53EF\u60AC\u6D6E\u5361\u7247</div>
  </IuCard>
</template>
`,y={class:"prose prose-sm text-left"},N=I("<h2>API</h2><h3>Card Props</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>bordered</td><td><code>boolean</code></td><td><code>true</code></td><td>\u662F\u5426\u663E\u793A\u5361\u7247\u8FB9\u6846</td></tr><tr><td>hoverable</td><td><code>boolean</code></td><td><code>false</code></td><td>\u5361\u7247\u662F\u5426\u53EF\u60AC\u6D6E</td></tr><tr><td>title</td><td><code>string</code></td><td><code>undefined</code></td><td>\u5361\u7247\u6807\u9898</td></tr></tbody></table><h3>Card Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th></th><th></th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>header</td><td></td><td></td><td>\u5934\u90E8\u5185\u5BB9</td></tr><tr><td>extra</td><td></td><td></td><td>\u5934\u90E8\u989D\u5916\u5185\u5BB9</td></tr><tr><td>default</td><td></td><td></td><td>\u5361\u7247\u5185\u5BB9</td></tr><tr><td>footer</td><td></td><td></td><td>\u5E95\u90E8\u5185\u5BB9</td></tr><tr><td>action</td><td></td><td></td><td>\u64CD\u4F5C\u533A\u57DF\u5185\u5BB9</td></tr></tbody></table>",5),V=[N],H={__name:"CardApi",setup(c,{expose:o}){return o({frontmatter:{meta:[]}}),v({meta:[]}),(p,n)=>(a(),u("div",y,V))}},E={},F=r(" #header "),P=r(" default "),j=r(" #footer "),T=r(" #action ");function q(c,o){const d=m;return a(),i(d,null,{header:t(()=>[F]),footer:t(()=>[j]),action:t(()=>[T]),default:t(()=>[P]),_:1})}const z=h(E,[["render",q]]),G={},J=f("div",null,"\u53EF\u60AC\u6D6E\u5361\u7247",-1);function K(c,o){const d=m;return a(),i(d,{hoverable:""},{default:t(()=>[J]),_:1})}const L=h(G,[["render",K]]),M={class:"flex flex-col mt-30px"},O=f("div",{"mb-30px":"","text-30px":"","font-bold":""}," Card ",-1),U=$({__name:"card",setup(c){return(o,d)=>{const l=w,p=S("Starport"),n=g,C=L,_=D,x=z,b=H;return a(),u("div",M,[O,e(_,null,{default:t(()=>[e(_,{vertical:""},{default:t(()=>[e(n,{"w-500px":"",title:"\u57FA\u7840",code:s(A)},{default:t(()=>[e(p,{port:"iu-card","w-300px":"","h-100px":""},{default:t(()=>[e(l)]),_:1})]),_:1},8,["code"]),e(n,{"w-500px":"",title:"\u60AC\u6D6E",code:s(k)},{default:t(()=>[e(C)]),_:1},8,["code"])]),_:1}),e(_,{vertical:""},{default:t(()=>[e(n,{"w-500px":"",title:"\u63D2\u69FD",code:s(B)},{default:t(()=>[e(x)]),_:1},8,["code"])]),_:1})]),_:1}),e(b)])}}});export{U as default};
