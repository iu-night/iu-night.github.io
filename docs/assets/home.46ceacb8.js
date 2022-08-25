import{d as b,g as m,s as M,h as T,o as f,c as C,b as N,i as V,j as $,k,l as A,m as B,r as P,e as z,n as F,p as O,q,a as l,w as S,t as E,v as H,x as W}from"./index.5424c0d1.js";const j=b({__name:"Starfield",setup(R){var g;let c=m(.2),o=0,a=m();const i=M();let n=m((g=a.value)==null?void 0:g.getContext("2d"));class y{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r,this.xPrev=e,this.yPrev=t}update(e,t,r){this.xPrev=this.x,this.yPrev=this.y,this.z+=r*.0675,this.x+=this.x*(r*.0225)*this.z,this.y+=this.y*(r*.0225)*this.z,(this.x>e/2||this.x<-e/2||this.y>t/2||this.y<-t/2)&&(this.x=Math.random()*e-e/2,this.y=Math.random()*t-t/2,this.xPrev=this.x,this.yPrev=this.y,this.z=0)}draw(e){e.lineWidth=this.z,e.beginPath(),e.moveTo(this.x,this.y),e.lineTo(this.xPrev,this.yPrev),e.stroke()}}const u=Array.from({length:100},()=>new y(0,0,0)),h=()=>{const{clientWidth:s,clientHeight:e}=i.value;if(n.value){for(const t of u)t.update(s,e,c.value),t.draw(n.value);n.value.fillRect(-s/2,-e/2,s,e)}o=requestAnimationFrame(h)},v=()=>{var r,w;o>0&&cancelAnimationFrame(o);const{clientWidth:s,clientHeight:e}=i.value,t=window.devicePixelRatio||1;a.value.width=s*t,a.value.height=e*t,a.value.style.width=`${s}px`,a.value.style.height=`${e}px`,(r=n.value)==null||r.scale(t,t);for(const p of u)p.x=Math.random()*s-s/2,p.y=Math.random()*e-e/2,p.z=0;(w=n.value)==null||w.translate(s/2,e/2),n.value&&(n.value.fillStyle="rgba(0, 0, 0, 0.2)",n.value.strokeStyle="white"),o=requestAnimationFrame(h)},d=new ResizeObserver(v),_=()=>{V(()=>{d.disconnect(),c.value=.05},5e3)};return T(()=>{var s;n.value=(s=a.value)==null?void 0:s.getContext("2d"),d.observe(i.value),_()}),(s,e)=>(f(),C("div",{id:"star",ref_key:"container",ref:i,class:"absolute inset-0"},[N("canvas",{id:"star-canvas",ref_key:"canvas",ref:a},null,512)],512))}}),D={flex:"","justify-center":""},U=b({__name:"home",setup(R){const x=$(),c=k(()=>x.disableJump),o=m(null),a=A(B(o)),i=k(()=>c.value?{transition:".3s ease-out all",transform:`rotateX(${a.roll*20}deg) rotateY(${a.tilt*20}deg)`}:{transition:".3s ease-out all"});return(n,y)=>{const u=j,h=H,v=P("Starport"),d=W,_=P("RouterView");return f(),C("main",{ref_key:"target",ref:o,class:"flex-center flex-col h-full text-gray-700 dark:text-gray-200 perspective-300"},[z(F)?(f(),O(u,{key:0})):q("",!0),l(v,{port:"iu-ui","w-121px":"","h-45px":"","z-1000":""},{default:S(()=>[l(h)]),_:1}),N("div",D,[l(v,{port:"menu","w-100px":"","h-50px":""},{default:S(()=>[l(d)]),_:1})]),l(_,{style:E(z(i))},null,8,["style"])],512)}}});export{U as default};