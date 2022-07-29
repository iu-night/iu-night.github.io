import{i as b,o as c,c as i,k as x,_ as m,l as B,w as n,a as t,m as o,I,n as p,d as g,r as S,e as _,b as $,p as w}from"./app.9dbe097a.js";import{_ as C}from"./CodeBox.78eb4e74.js";const v={class:"prose prose-sm text-left"},D=x("<h2>API</h2><h3>Button Props</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>type</td><td><code>default | primary | success | warning | error</code></td><td><code>default</code></td><td>\u6309\u94AE\u7684\u7C7B\u578B</td></tr><tr><td>round</td><td><code>boolean</code></td><td><code>false</code></td><td>\u6309\u94AE\u662F\u5426\u663E\u793A\u5706\u89D2</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>\u6309\u94AE\u662F\u5426\u7981\u7528</td></tr></tbody></table>",3),k=[D],A={__name:"ButtonApi",setup(s,{expose:u}){return u({frontmatter:{meta:[]}}),b({meta:[]}),(l,d)=>(c(),i("div",v,k))}},N={},V=o(" \u5706\u89D2 "),P=o(" \u5706\u89D2 "),R=o(" \u5706\u89D2 "),E=o(" \u5706\u89D2 "),F=o(" \u5706\u89D2 ");function H(s,u){const e=I,r=p;return c(),B(r,{align:"center"},{default:n(()=>[t(e,{round:""},{default:n(()=>[V]),_:1}),t(e,{round:"",type:"primary"},{default:n(()=>[P]),_:1}),t(e,{round:"",type:"warning"},{default:n(()=>[R]),_:1}),t(e,{round:"",type:"error"},{default:n(()=>[E]),_:1}),t(e,{round:"",type:"success"},{default:n(()=>[F]),_:1})]),_:1})}const T=m(N,[["render",H]]),j={},q=o(" \u7981\u7528 "),z=o(" \u7981\u7528 "),G=o(" \u7981\u7528 "),J=o(" \u7981\u7528 ");function K(s,u){const e=I,r=p;return c(),B(r,null,{default:n(()=>[t(e,{disabled:""},{default:n(()=>[q]),_:1}),t(e,{disabled:"",type:"warning"},{default:n(()=>[z]),_:1}),t(e,{disabled:"",type:"error"},{default:n(()=>[G]),_:1}),t(e,{disabled:"",type:"success"},{default:n(()=>[J]),_:1})]),_:1})}const L=m(j,[["render",K]]),M=`<template>\r
  <IuSpace align="center">\r
    <IuButton>\r
      \u5F00\u59CB\r
    </IuButton>\r
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
`,O=`<template>\r
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
`,Q=`<template>\r
  <IuSpace align="center">\r
    <IuButton round>\r
      \u5706\u89D2\r
    </IuButton>\r
    <IuButton round type="primary">\r
      \u5706\u89D2\r
    </IuButton>\r
    <IuButton round type="warning">\r
      \u5706\u89D2\r
    </IuButton>\r
    <IuButton round type="error">\r
      \u5706\u89D2\r
    </IuButton>\r
    <IuButton round type="success">\r
      \u5706\u89D2\r
    </IuButton>\r
  </IuSpace>\r
</template>\r
`,U={class:"flex flex-col mt-30px"},W=$("div",{"mb-30px":"","text-30px":"","font-bold":""}," Button ",-1),Z=g({__name:"button",setup(s){return(u,e)=>{const r=w,l=S("Starport"),d=C,f=L,a=p,h=T,y=A;return c(),i("div",U,[W,t(a,null,{default:n(()=>[t(a,{vertical:""},{default:n(()=>[t(d,{"w-500px":"",title:"\u57FA\u7840",code:_(M)},{default:n(()=>[t(l,{port:"iu-button","w-375px":"","h-34px":""},{default:n(()=>[t(r)]),_:1})]),_:1},8,["code"]),t(d,{"w-500px":"",title:"\u7981\u7528",code:_(O)},{default:n(()=>[t(f)]),_:1},8,["code"])]),_:1}),t(a,{vertical:""},{default:n(()=>[t(d,{"w-500px":"",title:"\u5706\u89D2",code:_(Q)},{default:n(()=>[t(h)]),_:1},8,["code"])]),_:1})]),_:1}),t(y)])}}});export{Z as default};
