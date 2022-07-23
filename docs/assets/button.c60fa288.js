import{i as h,o as a,c as p,k as f,_ as I,l as b,w as e,a as t,m as r,I as x,n as l,d as y,r as S,e as _,b as w,p as g}from"./app.d7b7a0ec.js";import{_ as C}from"./CodeBox.226d89ba.js";const $={class:"prose prose-sm text-left"},v=f("<h2>API</h2><h3>Button Props</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>type</td><td><code>primary | success | warning | error</code></td><td><code>primary</code></td><td>\u6309\u94AE\u7684\u7C7B\u578B</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>\u6309\u94AE\u662F\u5426\u7981\u7528</td></tr></tbody></table>",3),k=[v],A={__name:"ButtonApi",setup(d,{expose:s}){return s({frontmatter:{meta:[]}}),h({meta:[]}),(u,c)=>(a(),p("div",$,k))}},D={},N=r(" \u7981\u7528 "),V=r(" \u7981\u7528 "),P=r(" \u7981\u7528 "),E=r(" \u7981\u7528 ");function F(d,s){const n=x,o=l;return a(),b(o,null,{default:e(()=>[t(n,{disabled:""},{default:e(()=>[N]),_:1}),t(n,{disabled:"",type:"warning"},{default:e(()=>[V]),_:1}),t(n,{disabled:"",type:"error"},{default:e(()=>[P]),_:1}),t(n,{disabled:"",type:"success"},{default:e(()=>[E]),_:1})]),_:1})}const H=I(D,[["render",F]]),T=`<template>\r
  <IuSpace>\r
    <IuButton type="primary">\r
      \u5F00\u59CB\r
    </IuButton>\r
    <IuButton type="warning">\r
      \u5F00\u59CB\r
    </IuButton>\r
    <IuButton type="error">\r
      \u5F00\u59CB\r
    </IuButton>\r
    <IuButton type="success">\r
      \u5F00\u59CB\r
    </IuButton>\r
  </IuSpace>\r
</template>\r
`,j=`<template>\r
  <IuSpace>\r
    <IuButton disabled>\r
      \u7981\u7528\r
    </IuButton>\r
    <IuButton disabled type="warning">\r
      \u7981\u7528\r
    </IuButton>\r
    <IuButton disabled type="error">\r
      \u7981\u7528\r
    </IuButton>\r
    <IuButton disabled type="success">\r
      \u7981\u7528\r
    </IuButton>\r
  </IuSpace>\r
</template>\r
`,q={class:"flex flex-col mt-30px"},z=w("div",{"mb-30px":"","text-30px":"","font-bold":""}," Button ",-1),K=y({__name:"button",setup(d){return(s,n)=>{const o=g,u=S("Starport"),c=C,i=H,m=l,B=A;return a(),p("div",q,[z,t(m,{vertical:""},{default:e(()=>[t(c,{"w-500px":"",title:"\u57FA\u7840",code:_(T)},{default:e(()=>[t(u,{port:"iu-button","w-296px":"","h-34px":""},{default:e(()=>[t(o)]),_:1})]),_:1},8,["code"]),t(c,{"w-500px":"",title:"\u7981\u7528",code:_(j)},{default:e(()=>[t(i)]),_:1},8,["code"])]),_:1}),t(B)])}}});export{K as default};
