import{j as I,o as s,c as m,k as x,d as _,q as h,l as v,w as c,a as t,E as f,n as i,r as V,e as p,b,F as g}from"./index.20b39a38.js";import{_ as C}from"./CodeBox.410a5573.js";const B=`<script setup lang="ts">
const value = ref<boolean>(true)
<\/script>

<template>
  <IuSpace align="center">
    <IuSwitch v-model="value" />
    <IuSwitch v-model="value" disabled />
  </IuSpace>
</template>
`,$=`<script setup lang="ts">
const value = ref<boolean>(true)
const color = '#c12c1f'
<\/script>

<template>
  <IuSpace align="center">
    <IuSwitch
      v-model="value"
      :color="color"
    />
    <IuSwitch
      v-model="value"
      :color="color"
      :round="false"
    />
  </IuSpace>
</template>
`,U=`<script setup lang="ts">
const value = ref<boolean>(true)
<\/script>

<template>
  <IuSpace align="center">
    <IuSwitch v-model="value" :round="value" />
    <IuSwitch v-model="value" :round="false" />
    <IuSwitch v-model="value" :round="!value" />
  </IuSpace>
</template>
`,k={class:"prose prose-sm text-left"},A=x("<h2>API</h2><h3>Switch Props</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value</td><td><code>boolean</code></td><td><code>false</code></td><td>\u5F00\u5173\u53D7\u63A7\u4E0B\u7684\u503C</td></tr><tr><td>color</td><td><code>string</code></td><td><code>rgba(42, 148, 125, 1)</code></td><td>\u80CC\u666F\u989C\u8272</td></tr><tr><td>round</td><td><code>boolean</code></td><td><code>true</code></td><td>\u662F\u5426\u4E3A\u5706\u5F62</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>\u662F\u5426\u7981\u7528</td></tr></tbody></table>",3),F=[A],N={__name:"SwitchApi",setup(r,{expose:e}){return e({frontmatter:{meta:[]}}),I({meta:[]}),(o,l)=>(s(),m("div",k,F))}},R=_({__name:"SwitchColor",setup(r){const e=h(!0),u="#c12c1f";return(n,o)=>{const l=f,a=i;return s(),v(a,{align:"center"},{default:c(()=>[t(l,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=d=>e.value=d),color:u},null,8,["modelValue"]),t(l,{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=d=>e.value=d),color:u,round:!1},null,8,["modelValue"])]),_:1})}}}),y=_({__name:"SwitchRound",setup(r){const e=h(!0);return(u,n)=>{const o=f,l=i;return s(),v(l,{align:"center"},{default:c(()=>[t(o,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=a=>e.value=a),round:e.value},null,8,["modelValue","round"]),t(o,{modelValue:e.value,"onUpdate:modelValue":n[1]||(n[1]=a=>e.value=a),round:!1},null,8,["modelValue"]),t(o,{modelValue:e.value,"onUpdate:modelValue":n[2]||(n[2]=a=>e.value=a),round:!e.value},null,8,["modelValue","round"])]),_:1})}}}),D={class:"flex flex-col mt-30px"},E=b("div",{"mb-30px":"","text-30px":"","font-bold":""}," Switch ",-1),q=_({__name:"switch",setup(r){return(e,u)=>{const n=g,o=V("Starport"),l=C,a=y,d=i,S=R,w=N;return s(),m("div",D,[E,t(d,null,{default:c(()=>[t(d,{vertical:""},{default:c(()=>[t(l,{"w-500px":"",title:"\u57FA\u7840",code:p(B)},{default:c(()=>[t(o,{port:"iu-switch","w-92px":"","h-22px":""},{default:c(()=>[t(n)]),_:1})]),_:1},8,["code"]),t(l,{"w-500px":"",title:"\u5F62\u72B6",code:p(U)},{default:c(()=>[t(a)]),_:1},8,["code"])]),_:1}),t(d,{vertical:""},{default:c(()=>[t(l,{"w-500px":"",title:"\u989C\u8272",code:p($)},{default:c(()=>[t(S)]),_:1},8,["code"])]),_:1})]),_:1}),t(w)])}}});export{q as default};
