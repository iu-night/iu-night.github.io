import{j as h,o as a,c as p,k as f,_ as I,l as b,w as e,a as t,m as s,I as x,n as l,d as y,r as S,e as r,b as w,p as g}from"./app.67601856.js";import{_ as C}from"./CodeBox.328ba3f9.js";const $={class:"prose prose-sm text-left"},v=f("<h2>API</h2><h3>Button Props</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>type</td><td><code>default | primary | success | warning | error</code></td><td><code>default</code></td><td>\u6309\u94AE\u7684\u7C7B\u578B</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>\u6309\u94AE\u662F\u5426\u7981\u7528</td></tr></tbody></table>",3),k=[v],A={__name:"ButtonApi",setup(d,{expose:c}){return c({frontmatter:{meta:[]}}),h({meta:[]}),(_,u)=>(a(),p("div",$,k))}},D={},N=s(" \u7981\u7528 "),V=s(" \u7981\u7528 "),P=s(" \u7981\u7528 "),j=s(" \u7981\u7528 ");function E(d,c){const n=x,o=l;return a(),b(o,null,{default:e(()=>[t(n,{disabled:""},{default:e(()=>[N]),_:1}),t(n,{disabled:"",type:"warning"},{default:e(()=>[V]),_:1}),t(n,{disabled:"",type:"error"},{default:e(()=>[P]),_:1}),t(n,{disabled:"",type:"success"},{default:e(()=>[j]),_:1})]),_:1})}const F=I(D,[["render",E]]),H=`<template>
  <IuSpace>
    <IuButton>
      \u5F00\u59CB
    </IuButton>
    <IuButton type="primary">
      \u5F00\u59CB
    </IuButton>
    <IuButton type="warning">
      \u5F00\u59CB
    </IuButton>
    <IuButton type="error">
      \u5F00\u59CB
    </IuButton>
    <IuButton type="success">
      \u5F00\u59CB
    </IuButton>
  </IuSpace>
</template>
`,T=`<template>
  <IuSpace>
    <IuButton disabled>
      \u7981\u7528
    </IuButton>
    <IuButton disabled type="warning">
      \u7981\u7528
    </IuButton>
    <IuButton disabled type="error">
      \u7981\u7528
    </IuButton>
    <IuButton disabled type="success">
      \u7981\u7528
    </IuButton>
  </IuSpace>
</template>
`,q={class:"flex flex-col mt-30px"},z=w("div",{"mb-30px":"","text-30px":"","font-bold":""}," Button ",-1),K=y({__name:"button",setup(d){return(c,n)=>{const o=g,_=S("Starport"),u=C,i=F,m=l,B=A;return a(),p("div",q,[z,t(m,{vertical:""},{default:e(()=>[t(u,{"w-500px":"",title:"\u57FA\u7840",code:r(H)},{default:e(()=>[t(_,{port:"iu-button","w-375px":"","h-34px":""},{default:e(()=>[t(o)]),_:1})]),_:1},8,["code"]),t(u,{"w-500px":"",title:"\u7981\u7528",code:r(T)},{default:e(()=>[t(i)]),_:1},8,["code"])]),_:1}),t(B)])}}});export{K as default};
