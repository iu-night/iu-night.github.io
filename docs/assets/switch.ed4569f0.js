import{i as h,o as r,c as p,k as f,d as _,q as S,l as w,w as c,a as e,E as x,n as i,r as b,e as s,b as I,F as g}from"./index.9db3c162.js";import{_ as B}from"./CodeBox.00444d77.js";const C=`<script setup lang="ts">\r
const value = ref<boolean>(true)\r
<\/script>\r
\r
<template>\r
  <IuSpace align="center">\r
    <IuSwitch v-model:value="value" />\r
    <IuSwitch v-model:value="value" disabled />\r
  </IuSpace>\r
</template>\r
`,$=`<script setup lang="ts">\r
const value = ref<boolean>(true)\r
<\/script>\r
\r
<template>\r
  <IuSpace align="center">\r
    <IuSwitch v-model:value="value" :round="value" />\r
    <IuSwitch v-model:value="value" :round="false" />\r
    <IuSwitch v-model:value="value" :round="!value" />\r
  </IuSpace>\r
</template>\r
`,k={class:"prose prose-sm text-left"},A=f("<h2>API</h2><h3>Switch Props</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value</td><td><code>boolean</code></td><td><code>false</code></td><td>\u5F00\u5173\u53D7\u63A7\u4E0B\u7684\u503C</td></tr><tr><td>color</td><td><code>string</code></td><td><code>rgba(42, 148, 125, 1)</code></td><td>\u80CC\u666F\u989C\u8272</td></tr><tr><td>round</td><td><code>boolean</code></td><td><code>true</code></td><td>\u662F\u5426\u4E3A\u5706\u5F62</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>\u662F\u5426\u7981\u7528</td></tr></tbody></table>",3),F=[A],N={__name:"SwitchApi",setup(u,{expose:t}){return t({frontmatter:{meta:[]}}),h({meta:[]}),(a,d)=>(r(),p("div",k,F))}},R=_({__name:"SwitchRound",setup(u){const t=S(!0);return(l,o)=>{const a=x,d=i;return r(),w(d,{align:"center"},{default:c(()=>[e(a,{value:t.value,"onUpdate:value":o[0]||(o[0]=n=>t.value=n),round:t.value},null,8,["value","round"]),e(a,{value:t.value,"onUpdate:value":o[1]||(o[1]=n=>t.value=n),round:!1},null,8,["value"]),e(a,{value:t.value,"onUpdate:value":o[2]||(o[2]=n=>t.value=n),round:!t.value},null,8,["value","round"])]),_:1})}}}),U={class:"flex flex-col mt-30px"},V=I("div",{"mb-30px":"","text-30px":"","font-bold":""}," Switch ",-1),E=_({__name:"switch",setup(u){return(t,l)=>{const o=g,a=b("Starport"),d=B,n=R,v=i,m=N;return r(),p("div",U,[V,e(v,{vertical:""},{default:c(()=>[e(d,{"w-500px":"",title:"\u57FA\u7840",code:s(C)},{default:c(()=>[e(a,{port:"iu-switch","w-92px":"","h-22px":""},{default:c(()=>[e(o)]),_:1})]),_:1},8,["code"]),e(d,{"w-500px":"",title:"\u5F62\u72B6",code:s($)},{default:c(()=>[e(n)]),_:1},8,["code"])]),_:1}),e(m)])}}});export{E as default};
