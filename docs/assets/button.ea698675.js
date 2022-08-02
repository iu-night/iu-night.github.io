import{j as b,o as s,c as i,k as x,_ as m,l as B,w as n,a as t,m as o,I,n as p,d as g,r as S,e as r,b as $,p as w}from"./index.20b39a38.js";import{_ as C}from"./CodeBox.410a5573.js";const v={class:"prose prose-sm text-left"},D=x("<h2>API</h2><h3>Button Props</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>type</td><td><code>default | primary | success | warning | error</code></td><td><code>default</code></td><td>\u6309\u94AE\u7684\u7C7B\u578B</td></tr><tr><td>round</td><td><code>boolean</code></td><td><code>false</code></td><td>\u6309\u94AE\u662F\u5426\u663E\u793A\u5706\u89D2</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>\u6309\u94AE\u662F\u5426\u7981\u7528</td></tr></tbody></table>",3),k=[D],A={__name:"ButtonApi",setup(a,{expose:d}){return d({frontmatter:{meta:[]}}),b({meta:[]}),(l,c)=>(s(),i("div",v,k))}},N={},V=o(" \u5706\u89D2 "),P=o(" \u5706\u89D2 "),R=o(" \u5706\u89D2 "),j=o(" \u5706\u89D2 "),E=o(" \u5706\u89D2 ");function F(a,d){const e=I,u=p;return s(),B(u,{align:"center"},{default:n(()=>[t(e,{round:""},{default:n(()=>[V]),_:1}),t(e,{round:"",type:"primary"},{default:n(()=>[P]),_:1}),t(e,{round:"",type:"warning"},{default:n(()=>[R]),_:1}),t(e,{round:"",type:"error"},{default:n(()=>[j]),_:1}),t(e,{round:"",type:"success"},{default:n(()=>[E]),_:1})]),_:1})}const H=m(N,[["render",F]]),T={},q=o(" \u7981\u7528 "),z=o(" \u7981\u7528 "),G=o(" \u7981\u7528 "),J=o(" \u7981\u7528 ");function K(a,d){const e=I,u=p;return s(),B(u,null,{default:n(()=>[t(e,{disabled:""},{default:n(()=>[q]),_:1}),t(e,{disabled:"",type:"warning"},{default:n(()=>[z]),_:1}),t(e,{disabled:"",type:"error"},{default:n(()=>[G]),_:1}),t(e,{disabled:"",type:"success"},{default:n(()=>[J]),_:1})]),_:1})}const L=m(T,[["render",K]]),M=`<template>
  <IuSpace align="center">
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
`,O=`<template>
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
`,Q=`<template>
  <IuSpace align="center">
    <IuButton round>
      \u5706\u89D2
    </IuButton>
    <IuButton round type="primary">
      \u5706\u89D2
    </IuButton>
    <IuButton round type="warning">
      \u5706\u89D2
    </IuButton>
    <IuButton round type="error">
      \u5706\u89D2
    </IuButton>
    <IuButton round type="success">
      \u5706\u89D2
    </IuButton>
  </IuSpace>
</template>
`,U={class:"flex flex-col mt-30px"},W=$("div",{"mb-30px":"","text-30px":"","font-bold":""}," Button ",-1),Z=g({__name:"button",setup(a){return(d,e)=>{const u=w,l=S("Starport"),c=C,f=L,_=p,h=H,y=A;return s(),i("div",U,[W,t(_,null,{default:n(()=>[t(_,{vertical:""},{default:n(()=>[t(c,{"w-500px":"",title:"\u57FA\u7840",code:r(M)},{default:n(()=>[t(l,{port:"iu-button","w-375px":"","h-34px":""},{default:n(()=>[t(u)]),_:1})]),_:1},8,["code"]),t(c,{"w-500px":"",title:"\u7981\u7528",code:r(O)},{default:n(()=>[t(f)]),_:1},8,["code"])]),_:1}),t(_,{vertical:""},{default:n(()=>[t(c,{"w-500px":"",title:"\u5706\u89D2",code:r(Q)},{default:n(()=>[t(h)]),_:1},8,["code"])]),_:1})]),_:1}),t(y)])}}});export{Z as default};
