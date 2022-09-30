import{z as v,o as s,c as f,N as k,d as p,g as b,p as i,n as a,a as o,Y as x,I as m,H as _,_ as C,r as I,b as U,Z as N}from"./index.8366c5c5.js";import{_ as S}from"./ExDisplay.vue_vue_type_script_setup_true_lang.d124ec72.js";const $={class:"prose prose-sm text-left"},g=k("<h2>API</h2><h3>Checkbox Props</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>modelValue/v-model</td><td><code>boolean</code></td><td><code>false</code></td><td>\u590D\u9009\u6846\u7684\u52FE\u9009\u72B6\u6001</td></tr><tr><td>color</td><td><code>string</code></td><td><code>rgba(42, 148, 125, 1)</code></td><td>\u80CC\u666F\u989C\u8272</td></tr><tr><td>checkColor</td><td><code>string</code></td><td><code>#fff</code></td><td>\u52FE\u9009\u989C\u8272</td></tr><tr><td>round</td><td><code>boolean</code></td><td><code>false</code></td><td>\u662F\u5426\u4E3A\u5706\u5F62</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>\u662F\u5426\u7981\u7528</td></tr></tbody></table>",3),D=[g],B={__name:"CheckboxApi",setup(r,{expose:e}){return e({frontmatter:{meta:[]}}),v({meta:[]}),(t,n)=>(s(),f("div",$,D))}},y=p({__name:"CheckboxColor",setup(r){const e=b(!0),u="#c12c1f";return(d,t)=>{const n=x,l=m;return s(),i(l,{align:"center"},{default:a(()=>[o(n,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=c=>e.value=c),color:u},null,8,["modelValue"]),o(n,{modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=c=>e.value=c),color:u,round:""},null,8,["modelValue"]),o(n,{modelValue:e.value,"onUpdate:modelValue":t[2]||(t[2]=c=>e.value=c),color:u,disabled:""},null,8,["modelValue"]),o(n,{modelValue:e.value,"onUpdate:modelValue":t[3]||(t[3]=c=>e.value=c),color:u,round:"",disabled:""},null,8,["modelValue"])]),_:1})}}}),A=p({__name:"CheckboxDisabled",setup(r){const e=b(!0);return(u,d)=>{const t=x,n=m;return s(),i(n,{align:"center"},{default:a(()=>[o(t,{modelValue:e.value,"onUpdate:modelValue":d[0]||(d[0]=l=>e.value=l)},{default:a(()=>[_(" \u7981\u7528 ")]),_:1},8,["modelValue"]),o(t,{modelValue:e.value,"onUpdate:modelValue":d[1]||(d[1]=l=>e.value=l),disabled:""},null,8,["modelValue"]),o(t,{modelValue:e.value,"onUpdate:modelValue":d[2]||(d[2]=l=>e.value=l),disabled:e.value},{default:a(()=>[_(" disabled ")]),_:1},8,["modelValue","disabled"])]),_:1})}}}),R=p({__name:"CheckboxRound",setup(r){const e=b(!0);return(u,d)=>{const t=x,n=m;return s(),i(n,{align:"center"},{default:a(()=>[o(t,{modelValue:e.value,"onUpdate:modelValue":d[0]||(d[0]=l=>e.value=l),round:""},null,8,["modelValue"]),o(t,{modelValue:e.value,"onUpdate:modelValue":d[1]||(d[1]=l=>e.value=l),round:!e.value},null,8,["modelValue","round"]),o(t,{modelValue:e.value,"onUpdate:modelValue":d[2]||(d[2]=l=>e.value=l),round:e.value},{default:a(()=>[_(" round ")]),_:1},8,["modelValue","round"])]),_:1})}}}),w={},E={class:"flex flex-col mt-30px"},H=U("div",{"mb-30px":"","text-30px":"","font-bold":""}," Checkbox ",-1);function P(r,e){const u=N,d=I("Starport"),t=S,n=R,l=m,c=A,V=y,h=B;return s(),f("div",E,[H,o(l,null,{default:a(()=>[o(l,{vertical:""},{default:a(()=>[o(t,{title:"\u57FA\u7840",name:"checkbox",comName:"DocCheckbox"},{default:a(()=>[o(d,{port:"iu-checkbox","h-22px":"","w-118px":""},{default:a(()=>[o(u)]),_:1})]),_:1}),o(t,{title:"\u5706\u5F62",name:"checkbox",comName:"CheckboxRound"},{default:a(()=>[o(n)]),_:1})]),_:1}),o(l,{vertical:""},{default:a(()=>[o(t,{title:"\u7981\u7528",name:"checkbox",comName:"CheckboxDisabled"},{default:a(()=>[o(c)]),_:1}),o(t,{title:"\u989C\u8272",name:"checkbox",comName:"CheckboxColor"},{default:a(()=>[o(V)]),_:1})]),_:1})]),_:1}),o(h)])}const Y=C(w,[["render",P]]);export{Y as default};
