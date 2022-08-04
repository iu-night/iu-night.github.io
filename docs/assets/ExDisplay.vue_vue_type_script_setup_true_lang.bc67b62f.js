import{d as ae,s as X,q as de,t as ge,v as ne,x as pe,y as fe,o as I,c as L,a as ee,w as O,z as W,A as he,b as N,B as ve,e as re,C as ie,m as se,D as me,E as _e,_ as ye,l as be,F as h}from"./index.5a274f5e.js";var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V={exports:{}};(function(x){var w=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var r=function(l){var d=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,v=0,A={},s={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof p?new p(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++v}),t.__id},clone:function t(e,a){a=a||{};var n,i;switch(s.util.type(e)){case"Object":if(i=s.util.objId(e),a[i])return a[i];n={},a[i]=n;for(var u in e)e.hasOwnProperty(u)&&(n[u]=t(e[u],a));return n;case"Array":return i=s.util.objId(e),a[i]?a[i]:(n=[],a[i]=n,e.forEach(function(c,o){n[o]=t(c,a)}),n);default:return e}},getLanguage:function(t){for(;t;){var e=d.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(d,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(n){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var a in e)if(e[a].src==t)return e[a]}return null}},isActive:function(t,e,a){for(var n="no-"+e;t;){var i=t.classList;if(i.contains(e))return!0;if(i.contains(n))return!1;t=t.parentElement}return!!a}},languages:{plain:A,plaintext:A,text:A,txt:A,extend:function(t,e){var a=s.util.clone(s.languages[t]);for(var n in e)a[n]=e[n];return a},insertBefore:function(t,e,a,n){n=n||s.languages;var i=n[t],u={};for(var c in i)if(i.hasOwnProperty(c)){if(c==e)for(var o in a)a.hasOwnProperty(o)&&(u[o]=a[o]);a.hasOwnProperty(c)||(u[c]=i[c])}var f=n[t];return n[t]=u,s.languages.DFS(s.languages,function(y,D){D===f&&y!=t&&(this[y]=u)}),u},DFS:function t(e,a,n,i){i=i||{};var u=s.util.objId;for(var c in e)if(e.hasOwnProperty(c)){a.call(e,c,e[c],n||c);var o=e[c],f=s.util.type(o);f==="Object"&&!i[u(o)]?(i[u(o)]=!0,t(o,a,null,i)):f==="Array"&&!i[u(o)]&&(i[u(o)]=!0,t(o,a,c,i))}}},plugins:{},highlightAll:function(t,e){s.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,a){var n={callback:a,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),s.hooks.run("before-all-elements-highlight",n);for(var i=0,u;u=n.elements[i++];)s.highlightElement(u,e===!0,n.callback)},highlightElement:function(t,e,a){var n=s.util.getLanguage(t),i=s.languages[n];s.util.setLanguage(t,n);var u=t.parentElement;u&&u.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(u,n);var c=t.textContent,o={element:t,language:n,grammar:i,code:c};function f(D){o.highlightedCode=D,s.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,s.hooks.run("after-highlight",o),s.hooks.run("complete",o),a&&a.call(o.element)}if(s.hooks.run("before-sanity-check",o),u=o.element.parentElement,u&&u.nodeName.toLowerCase()==="pre"&&!u.hasAttribute("tabindex")&&u.setAttribute("tabindex","0"),!o.code){s.hooks.run("complete",o),a&&a.call(o.element);return}if(s.hooks.run("before-highlight",o),!o.grammar){f(s.util.encode(o.code));return}if(e&&l.Worker){var y=new Worker(s.filename);y.onmessage=function(D){f(D.data)},y.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else f(s.highlight(o.code,o.grammar,o.language))},highlight:function(t,e,a){var n={code:t,grammar:e,language:a};if(s.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=s.tokenize(n.code,n.grammar),s.hooks.run("after-tokenize",n),p.stringify(s.util.encode(n.tokens),n.language)},tokenize:function(t,e){var a=e.rest;if(a){for(var n in a)e[n]=a[n];delete e.rest}var i=new $;return T(i,i.head,t),S(t,i,e,i.head,0),M(i)},hooks:{all:{},add:function(t,e){var a=s.hooks.all;a[t]=a[t]||[],a[t].push(e)},run:function(t,e){var a=s.hooks.all[t];if(!(!a||!a.length))for(var n=0,i;i=a[n++];)i(e)}},Token:p};l.Prism=s;function p(t,e,a,n){this.type=t,this.content=e,this.alias=a,this.length=(n||"").length|0}p.stringify=function t(e,a){if(typeof e=="string")return e;if(Array.isArray(e)){var n="";return e.forEach(function(f){n+=t(f,a)}),n}var i={type:e.type,content:t(e.content,a),tag:"span",classes:["token",e.type],attributes:{},language:a},u=e.alias;u&&(Array.isArray(u)?Array.prototype.push.apply(i.classes,u):i.classes.push(u)),s.hooks.run("wrap",i);var c="";for(var o in i.attributes)c+=" "+o+'="'+(i.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+c+">"+i.content+"</"+i.tag+">"};function E(t,e,a,n){t.lastIndex=e;var i=t.exec(a);if(i&&n&&i[1]){var u=i[1].length;i.index+=u,i[0]=i[0].slice(u)}return i}function S(t,e,a,n,i,u){for(var c in a)if(!(!a.hasOwnProperty(c)||!a[c])){var o=a[c];o=Array.isArray(o)?o:[o];for(var f=0;f<o.length;++f){if(u&&u.cause==c+","+f)return;var y=o[f],D=y.inside,Y=!!y.lookbehind,J=!!y.greedy,oe=y.alias;if(J&&!y.pattern.global){var ue=y.pattern.toString().match(/[imsuy]*$/)[0];y.pattern=RegExp(y.pattern.source,ue+"g")}for(var K=y.pattern||y,b=n.next,k=i;b!==e.tail&&!(u&&k>=u.reach);k+=b.value.length,b=b.next){var P=b.value;if(e.length>t.length)return;if(!(P instanceof p)){var z=1,F;if(J){if(F=E(K,k,t,Y),!F||F.index>=t.length)break;var B=F.index,le=F.index+F[0].length,C=k;for(C+=b.value.length;B>=C;)b=b.next,C+=b.value.length;if(C-=b.value.length,k=C,b.value instanceof p)continue;for(var R=b;R!==e.tail&&(C<le||typeof R.value=="string");R=R.next)z++,C+=R.value.length;z--,P=t.slice(k,C),F.index-=k}else if(F=E(K,0,P,Y),!F)continue;var B=F.index,j=F[0],G=P.slice(0,B),Q=P.slice(B+j.length),U=k+P.length;u&&U>u.reach&&(u.reach=U);var H=b.prev;G&&(H=T(e,H,G),k+=G.length),q(e,H,z);var ce=new p(c,D?s.tokenize(j,D):j,oe,j);if(b=T(e,H,ce),Q&&T(e,b,Q),z>1){var Z={cause:c+","+f,reach:U};S(t,e,a,b.prev,k,Z),u&&Z.reach>u.reach&&(u.reach=Z.reach)}}}}}}function $(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function T(t,e,a){var n=e.next,i={value:a,prev:e,next:n};return e.next=i,n.prev=i,t.length++,i}function q(t,e,a){for(var n=e.next,i=0;i<a&&n!==t.tail;i++)n=n.next;e.next=n,n.prev=e,t.length-=i}function M(t){for(var e=[],a=t.head.next;a!==t.tail;)e.push(a.value),a=a.next;return e}if(!l.document)return l.addEventListener&&(s.disableWorkerMessageHandler||l.addEventListener("message",function(t){var e=JSON.parse(t.data),a=e.language,n=e.code,i=e.immediateClose;l.postMessage(s.highlight(n,s.languages[a],a)),i&&l.close()},!1)),s;var m=s.util.currentScript();m&&(s.filename=m.src,m.hasAttribute("data-manual")&&(s.manual=!0));function g(){s.manual||s.highlightAll()}if(!s.manual){var _=document.readyState;_==="loading"||_==="interactive"&&m&&m.defer?document.addEventListener("DOMContentLoaded",g):window.requestAnimationFrame?window.requestAnimationFrame(g):window.setTimeout(g,16)}return s}(w);x.exports&&(x.exports=r),typeof te<"u"&&(te.Prism=r),r.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.languages.markup.doctype.inside["internal-subset"].inside=r.languages.markup,r.hooks.add("wrap",function(l){l.type==="entity"&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),Object.defineProperty(r.languages.markup.tag,"addInlined",{value:function(d,v){var A={};A["language-"+v]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:r.languages[v]},A.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:A}};s["language-"+v]={pattern:/[\s\S]+/,inside:r.languages[v]};var p={};p[d]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return d}),"i"),lookbehind:!0,greedy:!0,inside:s},r.languages.insertBefore("markup","cdata",p)}}),Object.defineProperty(r.languages.markup.tag,"addAttribute",{value:function(l,d){r.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+l+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[d,"language-"+d],inside:r.languages[d]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.xml=r.languages.extend("markup",{}),r.languages.ssml=r.languages.xml,r.languages.atom=r.languages.xml,r.languages.rss=r.languages.xml,function(l){var d=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+d.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+d.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+d.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:d,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},l.languages.css.atrule.inside.rest=l.languages.css;var v=l.languages.markup;v&&(v.tag.addInlined("style","css"),v.tag.addAttribute("style","css"))}(r),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{"class-name":[r.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),r.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,r.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:r.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:r.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:r.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:r.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:r.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),r.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),r.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),r.languages.markup&&(r.languages.markup.tag.addInlined("script","javascript"),r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),r.languages.js=r.languages.javascript,function(){if(typeof r>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var l="Loading\u2026",d=function(m,g){return"\u2716 Error "+m+" while fetching file: "+g},v="\u2716 Error: File does not exist or is empty",A={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",p="loading",E="loaded",S="failed",$="pre[data-src]:not(["+s+'="'+E+'"]):not(['+s+'="'+p+'"])';function T(m,g,_){var t=new XMLHttpRequest;t.open("GET",m,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?g(t.responseText):t.status>=400?_(d(t.status,t.statusText)):_(v))},t.send(null)}function q(m){var g=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(m||"");if(g){var _=Number(g[1]),t=g[2],e=g[3];return t?e?[_,Number(e)]:[_,void 0]:[_,_]}}r.hooks.add("before-highlightall",function(m){m.selector+=", "+$}),r.hooks.add("before-sanity-check",function(m){var g=m.element;if(g.matches($)){m.code="",g.setAttribute(s,p);var _=g.appendChild(document.createElement("CODE"));_.textContent=l;var t=g.getAttribute("data-src"),e=m.language;if(e==="none"){var a=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=A[a]||a}r.util.setLanguage(_,e),r.util.setLanguage(g,e);var n=r.plugins.autoloader;n&&n.loadLanguages(e),T(t,function(i){g.setAttribute(s,E);var u=q(g.getAttribute("data-range"));if(u){var c=i.split(/\r\n?|\n/g),o=u[0],f=u[1]==null?c.length:u[1];o<0&&(o+=c.length),o=Math.max(0,Math.min(o-1,c.length)),f<0&&(f+=c.length),f=Math.max(0,Math.min(f,c.length)),i=c.slice(o,f).join(`
`),g.hasAttribute("data-start")||g.setAttribute("data-start",String(o+1))}_.textContent=i,r.highlightElement(_)},function(i){g.setAttribute(s,S),_.textContent=i})}}),r.plugins.fileHighlight={highlight:function(g){for(var _=(g||document).querySelectorAll($),t=0,e;e=_[t++];)r.highlightElement(e)}};var M=!1;r.fileHighlight=function(){M||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),M=!0),r.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(V);const Ae={key:0,class:"code-icon-btn i-carbon-code-hide"},xe={key:1,class:"code-icon-btn i-carbon-code"},we={class:"flex w-full language-markup"},Fe=se("            "),Ee=se(`\r
          `),ke={key:0,class:"code-icon-btn i-carbon-code-hide"},Se={key:1,class:"code-icon-btn i-carbon-code"},$e=ae({__name:"CodeBox",props:{title:String,code:{type:String,default:""}},setup(x){const w=x,r=X(null),l=X(null),d=de(!1),v="markup",A=ge(()=>{var s,p,E;if(d.value){const S=(E=(p=(s=r==null?void 0:r.value)==null?void 0:s.firstElementChild)==null?void 0:p.nextElementSibling)==null?void 0:E.clientHeight;return{height:S?`${S+37}px`:"auto"}}return{height:0}});return ne(()=>{l.value&&(l.value.innerHTML=V.exports.highlight(w.code,V.exports.languages[v],v))}),pe(()=>[w.code,l],([s,p])=>{s&&l.value&&(l.value.innerHTML=V.exports.highlight(w.code,V.exports.languages[v],v))}),(s,p)=>{const E=me,S=_e,$=fe("tooltip");return I(),L("div",null,[ee(S,{hoverable:"",title:x.title,bordered:!1},{extra:O(()=>[W((I(),L("div",{class:"code-icon",onClick:p[0]||(p[0]=T=>d.value=!d.value)},[d.value?(I(),L("div",Ae)):(I(),L("div",xe))])),[[$,d.value?"\u9690\u85CF\u4EE3\u7801":"\u663E\u793A\u4EE3\u7801",void 0,{top:!0}]])]),footer:O(()=>[W(N("div",{ref_key:"outCodeRef",ref:r,class:"code-area",style:ve(re(A))},[ee(E),N("pre",we,[Fe,N("code",{ref_key:"codeRef",ref:l},null,512),Ee])],4),[[he,x.code]])]),action:O(()=>[W((I(),L("div",{class:"code-icon",onClick:p[1]||(p[1]=T=>d.value=!d.value)},[d.value?(I(),L("div",ke)):(I(),L("div",Se))])),[[$,d.value?"\u9690\u85CF\u4EE3\u7801":"\u663E\u793A\u4EE3\u7801",void 0,{top:!0}]])]),default:O(()=>[ie(s.$slots,"default",{},void 0,!0)]),_:3},8,["title"])])}}});const Te=ye($e,[["__scopeId","data-v-5c4a316f"]]),De=(x,w)=>{const r=x[w];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((l,d)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(d.bind(null,new Error("Unknown variable dynamic import: "+w)))})},Ie=ae({__name:"ExDisplay",props:{title:String,name:String,comName:String},setup(x){const w=x,r=X(""),l=async()=>{r.value=(await De(Object.assign({"./doc/button/ButtonDisabled.vue":()=>h(()=>import("./ButtonDisabled.e16635ea.js"),[]),"./doc/button/ButtonRound.vue":()=>h(()=>import("./ButtonRound.6f6f9d71.js"),[]),"./doc/button/DocButton.vue":()=>h(()=>import("./DocButton.0eee3e82.js"),[]),"./doc/card/CardBordered.vue":()=>h(()=>import("./CardBordered.8958a0e4.js"),[]),"./doc/card/CardHoverable.vue":()=>h(()=>import("./CardHoverable.f3f0b393.js"),[]),"./doc/card/CardSlot.vue":()=>h(()=>import("./CardSlot.6512ec0a.js"),[]),"./doc/card/DocCard.vue":()=>h(()=>import("./DocCard.e3b5b58f.js"),[]),"./doc/divider/DividerVertical.vue":()=>h(()=>import("./DividerVertical.362d0a5f.js"),[]),"./doc/divider/DocDivider.vue":()=>h(()=>import("./DocDivider.e2902fe0.js"),[]),"./doc/space/DocSpace.vue":()=>h(()=>import("./DocSpace.57edad72.js"),[]),"./doc/space/SpaceAround.vue":()=>h(()=>import("./SpaceAround.de2bf9ae.js"),[]),"./doc/space/SpaceCenter.vue":()=>h(()=>import("./SpaceCenter.a8fdedfd.js"),[]),"./doc/space/SpaceEnd.vue":()=>h(()=>import("./SpaceEnd.b5d789cd.js"),[]),"./doc/space/SpaceVertical.vue":()=>h(()=>import("./SpaceVertical.934be21e.js"),[]),"./doc/space/SpaceVerticalCenter.vue":()=>h(()=>import("./SpaceVerticalCenter.6722545f.js"),[]),"./doc/switch/DocSwitch.vue":()=>h(()=>import("./DocSwitch.f3e58444.js"),[]),"./doc/switch/SwitchColor.vue":()=>h(()=>import("./SwitchColor.8824be93.js"),[]),"./doc/switch/SwitchRound.vue":()=>h(()=>import("./SwitchRound.f2bbf815.js"),[]),"./doc/tooltip/DocTooltip.vue":()=>h(()=>import("./DocTooltip.eea47768.js"),[])}),`./doc/${w.name}/${w.comName}.vue`)).default};return ne(()=>{l()}),(d,v)=>{const A=Te;return I(),be(A,{"w-500px":"",title:x.title,code:re(r)},{default:O(()=>[ie(d.$slots,"default")]),_:3},8,["title","code"])}}});export{Ie as _};