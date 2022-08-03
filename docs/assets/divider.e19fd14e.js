import{i as v,o as c,c as i,k as f,_ as x,l as D,w as t,a as e,b as r,C as I,n as l,d as b,r as S,e as p,F as C}from"./index.8c8d276c.js";import{_ as g}from"./CodeBox.899f6e9e.js";const $=`<template>\r
  <IuSpace vertical>\r
    <span>\u5B9E\u7EBF</span>\r
    <IuDivider />\r
    <span>\u865A\u7EBF</span>\r
    <IuDivider dashed />\r
    <span>\u5206\u5272\u7EBF</span>\r
  </IuSpace>\r
</template>\r
\r
<style scoped lang="scss">\r
span {\r
  color: rgb(55 65 81);\r
\r
  .dark & {\r
    color: rgb(229 231 235)\r
  }\r
}\r
</style>\r
`,k=`<template>\r
  <IuSpace>\r
    <span>\u5B9E\u7EBF</span>\r
    <IuDivider vertical />\r
    <span>\u865A\u7EBF</span>\r
    <IuDivider vertical dashed />\r
    <span>\u5206\u5272\u7EBF</span>\r
  </IuSpace>\r
</template>\r
`,w={class:"prose prose-sm text-left"},A=f("<h2>API</h2><h3>Divider Props</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>vertical</td><td><code>boolean</code></td><td><code>false</code></td><td>\u8BBE\u7F6E\u662F\u5426\u7AD6\u76F4</td></tr><tr><td>dashed</td><td><code>boolean</code></td><td><code>false</code></td><td>\u5206\u5272\u7EBF\u662F\u5426\u4E3A\u865A\u7EBF</td></tr></tbody></table>",3),B=[A],V={__name:"DividerApi",setup(d,{expose:s}){return s({frontmatter:{meta:[]}}),v({meta:[]}),(_,a)=>(c(),i("div",w,B))}},y={},F=r("span",null,"\u5B9E\u7EBF",-1),N=r("span",null,"\u865A\u7EBF",-1),P=r("span",null,"\u5206\u5272\u7EBF",-1);function E(d,s){const n=I,o=l;return c(),D(o,null,{default:t(()=>[F,e(n,{vertical:""}),N,e(n,{vertical:"",dashed:""}),P]),_:1})}const H=x(y,[["render",E]]),j={class:"flex flex-col mt-30px"},q=r("div",{"mb-30px":"","text-30px":"","font-bold":""}," Divider ",-1),J=b({__name:"divider",setup(d){return(s,n)=>{const o=C,_=S("Starport"),a=g,u=H,m=l,h=V;return c(),i("div",j,[q,e(m,null,{default:t(()=>[e(a,{"w-500px":"",title:"\u57FA\u7840",code:p($)},{default:t(()=>[e(_,{port:"iu-divider","w-300px":"","h-164px":""},{default:t(()=>[e(o)]),_:1})]),_:1},8,["code"]),e(a,{"w-500px":"",title:"\u7AD6\u76F4",code:p(k)},{default:t(()=>[e(u)]),_:1},8,["code"])]),_:1}),e(h)])}}});export{J as default};
