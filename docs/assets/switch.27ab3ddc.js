import{i as I,o as u,c as m,k as x,d as _,q as h,l as v,w as r,a as t,H as f,n as i,r as V,e as p,b,J as g}from"./index.8c8d276c.js";import{_ as C}from"./CodeBox.899f6e9e.js";const B=`<script setup lang="ts">\r
const value = ref<boolean>(true)\r
<\/script>\r
\r
<template>\r
  <IuSpace align="center">\r
    <IuSwitch v-model="value" />\r
    <IuSwitch v-model="value" disabled />\r
  </IuSpace>\r
</template>\r
`,$=`<script setup lang="ts">\r
const value = ref<boolean>(true)\r
const color = '#c12c1f'\r
<\/script>\r
\r
<template>\r
  <IuSpace align="center">\r
    <IuSwitch\r
      v-model="value"\r
      :color="color"\r
    />\r
    <IuSwitch\r
      v-model="value"\r
      :color="color"\r
      :round="false"\r
    />\r
  </IuSpace>\r
</template>\r
`,U=`<script setup lang="ts">\r
const value = ref<boolean>(true)\r
<\/script>\r
\r
<template>\r
  <IuSpace align="center">\r
    <IuSwitch v-model="value" :round="value" />\r
    <IuSwitch v-model="value" :round="false" />\r
    <IuSwitch v-model="value" :round="!value" />\r
  </IuSpace>\r
</template>\r
`,k={class:"prose prose-sm text-left"},A=x("<h2>API</h2><h3>Switch Props</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>modelValue/v-model</td><td><code>boolean</code></td><td><code>false</code></td><td>\u5F00\u5173\u53D7\u63A7\u4E0B\u7684\u503C</td></tr><tr><td>color</td><td><code>string</code></td><td><code>rgba(42, 148, 125, 1)</code></td><td>\u80CC\u666F\u989C\u8272</td></tr><tr><td>round</td><td><code>boolean</code></td><td><code>true</code></td><td>\u662F\u5426\u4E3A\u5706\u5F62</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>\u662F\u5426\u7981\u7528</td></tr></tbody></table>",3),N=[A],R={__name:"SwitchApi",setup(s,{expose:e}){return e({frontmatter:{meta:[]}}),I({meta:[]}),(o,l)=>(u(),m("div",k,N))}},y=_({__name:"SwitchColor",setup(s){const e=h(!0),d="#c12c1f";return(n,o)=>{const l=f,a=i;return u(),v(a,{align:"center"},{default:r(()=>[t(l,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=c=>e.value=c),color:d},null,8,["modelValue"]),t(l,{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=c=>e.value=c),color:d,round:!1},null,8,["modelValue"])]),_:1})}}}),D=_({__name:"SwitchRound",setup(s){const e=h(!0);return(d,n)=>{const o=f,l=i;return u(),v(l,{align:"center"},{default:r(()=>[t(o,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=a=>e.value=a),round:e.value},null,8,["modelValue","round"]),t(o,{modelValue:e.value,"onUpdate:modelValue":n[1]||(n[1]=a=>e.value=a),round:!1},null,8,["modelValue"]),t(o,{modelValue:e.value,"onUpdate:modelValue":n[2]||(n[2]=a=>e.value=a),round:!e.value},null,8,["modelValue","round"])]),_:1})}}}),F={class:"flex flex-col mt-30px"},H=b("div",{"mb-30px":"","text-30px":"","font-bold":""}," Switch ",-1),E=_({__name:"switch",setup(s){return(e,d)=>{const n=g,o=V("Starport"),l=C,a=D,c=i,S=y,w=R;return u(),m("div",F,[H,t(c,null,{default:r(()=>[t(c,{vertical:""},{default:r(()=>[t(l,{"w-500px":"",title:"\u57FA\u7840",code:p(B)},{default:r(()=>[t(o,{port:"iu-switch","w-92px":"","h-22px":""},{default:r(()=>[t(n)]),_:1})]),_:1},8,["code"]),t(l,{"w-500px":"",title:"\u5F62\u72B6",code:p(U)},{default:r(()=>[t(a)]),_:1},8,["code"])]),_:1}),t(c,{vertical:""},{default:r(()=>[t(l,{"w-500px":"",title:"\u989C\u8272",code:p($)},{default:r(()=>[t(S)]),_:1},8,["code"])]),_:1})]),_:1}),t(w)])}}});export{E as default};
