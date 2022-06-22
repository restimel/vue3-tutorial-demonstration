(function(e){function t(t){for(var o,a,l=t[0],i=t[1],u=t[2],s=0,d=[];s<l.length;s++)a=l[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r={app:0},c=[];function l(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7919d39b"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"729141c1"}[e]+".css",r=i.p+o,c=document.getElementsByTagName("link"),l=0;l<c.length;l++){var u=c[l],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===o||s===r))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){u=d[l],s=u.getAttribute("data-href");if(s===o||s===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete a[e],p.parentNode.removeChild(p),n(c)},p.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=c);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=l(e);var d=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}r[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue3-tutorial-demonstration/dist/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"13aa":function(e,t,n){"use strict";n("9d03")},"160c":function(e,t,n){},"2d6e":function(e){e.exports=JSON.parse('[{"name":"Welcome tutorial","steps":[{"target":"","title":"Welcome to Vue3-tutorial demonstration","content":"With this tutorial, you will see how to handle this demonstration site.","options":{"position":"center"}},{"target":"a[href=\\"#/demonstration\\"]","title":"Welcome to Vue3-tutorial demonstration","content":"There is a link to another page where there are more complex components.\\n\\nIt helps to show how **vue3-tutorial** can handles this complexity."},{"target":".nav-tutorials","title":"Welcome to Vue3-tutorial demonstration","content":"Here you can find many tutorials, which are only examples to show what can be done with **vue3-tutorial**.\\n\\nYou only have to click on any of these buttons to start a tutorial example.","options":{"position":"auto"}},{"target":"","content":"_Thank you for your attention_"}]},{"name":"tutorial with actions","steps":[{"content":"In this tutorial, we will play with the \\"`actionNext`\\" property.\\n\\nThis will force you to do the action instead of clicking on _next_."},{"content":"Navigate to the _demonstration_ page.\\n\\nYou should click directly on the link to go to the next step.","target":"a[href=\\"#/demonstration\\"]","actionNext":"click"},{"content":"Here, first, you should _enable_ the tool.","target":["#enable-tool",".form"],"actionNext":{"action":"change","target":"#enable-tool input","check":"is checked"}},{"content":"Enter a text containing `\'foo\'`","target":"#name","actionNext":{"action":"input","target":"#name input","check":"contains","value":"foo"},"options":{"focus":"main-target"}},{"content":"The result is displayed there.\\n\\nMove your cursor over the result to continue.","target":".result","actionNext":{"action":"mouseover"}},{"content":"Change the select to `\\"caesar\\"`","target":"#operation","actionNext":{"action":"change","target":"select[name=\\"operation\\"]","value":"caesar"}},{"content":"The result has been updated.","target":".result","actionNext":"next"}]},{"name":"tutorial with skipped steps","steps":[{"title":"WIP","content":"If you see this text it means that the feature is not working.","skipStep":true},{"content":"In this tutorial, we will play with the \\"skipStep\\" property. If you compare this one with the previous tutorial (\\"tutorial with action\\"), you will see that some useless steps are not proposed."},{"content":"Navigate to the _demonstration_ page.\\n\\nYou should click directly on the link to go to the next step.","target":"a[href=\\"#/demonstration\\"]","actionNext":"click","skipStep":{"target":"a[href=\\"#/demonstration\\"]","property":"className","check":"contains","value":"active"}},{"content":"Here, first, you should _enable_ the tool.","target":["#enable-tool",".form"],"actionNext":{"action":"change","target":"#enable-tool input","check":"is checked"},"skipStep":{"target":"#enable-tool input","check":"is checked"}},{"content":"Enter a text containing `\'foo\'`","target":"#name","actionNext":{"action":"input","target":"#name input","check":"contains","value":"foo"},"options":{"focus":"main-target"},"skipStep":{"target":"#name input","check":"is not empty"}},{"content":"The result is displayed there.\\n\\nMove your cursor over the result to continue.","target":".result","actionNext":{"action":"mouseover"}},{"content":"The select has already the value `\\"caesar\\"`","target":"#operation","skipStep":{"target":"select[name=\\"operation\\"]","check":"is not","value":"caesar"}},{"content":"Change the select to `\\"caesar\\"`","target":"#operation","actionNext":{"action":"change","target":"select[name=\\"operation\\"]","value":"caesar"},"skipStep":{"target":"select[name=\\"operation\\"]","value":"caesar"}},{"content":"You should try to re-run this tutorial with different initial values. And you will see that steps will be different."}]},{"name":"tutorial with delayed content","steps":[{"content":"In this tutorial, we will play with some elements that are not displayed immediately."},{"content":"Navigate to the _demonstration_ page.\\n\\nYou should click directly on the link to go to the next step.","target":"a[href=\\"#/demonstration\\"]","actionNext":"click","skipStep":{"target":"a[href=\\"#/demonstration\\"]","property":"className","check":"contains","value":"active"}},{"content":"Click on this button.\\n\\nIt will create some elements for 2s.","target":".btn-delayed","actionNext":"click"},{"content":"This 10th element appears only 2s later.\\n\\nBut this step can point to it.","target":"#element-10"}]}]')},"5c16":function(e,t,n){},7895:function(e,t,n){"use strict";n("160c")},"9d03":function(e,t,n){},a1a4:function(e,t,n){},bea3:function(e,t,n){"use strict";n("5c16")},cd49:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),a=n("3bd2"),r=n("2d6e");const c={class:"nav-tutorials"},l=["onClick"];var i={setup(e){let t=Object(o["ref"])({}),n=Object(o["ref"])(!1);const i=Array.isArray(r)?r.map(e=>e.name):[];function u(e){const o=r.find(t=>t.name===e);o&&(t.value=o,n.value=!0)}function s(e){console.log("error prompted:",e)}return sessionStorage.getItem("hasAlreadyVisit")||u(i[0]),sessionStorage.setItem("hasAlreadyVisit",!0),(e,r)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("section",c,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(Object(o["unref"])(i),e=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{key:"tutorial-"+e,class:"btn-tutorial main-tutorial",onClick:t=>u(e)},Object(o["toDisplayString"])(e),9,l))),128))]),Object(o["createVNode"])(Object(o["unref"])(a["a"]),{tutorial:Object(o["unref"])(t),open:Object(o["unref"])(n),onStop:r[0]||(r[0]=e=>Object(o["isRef"])(n)?n.value=!1:n=!1),onError:s},null,8,["tutorial","open"])],64))}},u=(n("7895"),n("d959")),s=n.n(u);const d=s()(i,[["__scopeId","data-v-0aabf300"]]);var p=d;const m=e=>(Object(o["pushScopeId"])("data-v-ebb5df2e"),e=e(),Object(o["popScopeId"])(),e),h={class:"main-header"},b=m(()=>Object(o["createElementVNode"])("h1",null,"Vue3-tutorial",-1)),f=m(()=>Object(o["createElementVNode"])("p",null," This is a customizable component allowing you to propose a step by step tutorial on your website or your web application. ",-1)),g={id:"nav"},j=Object(o["createTextVNode"])("Home"),O=Object(o["createTextVNode"])(" | "),v=Object(o["createTextVNode"])("Demonstration page"),y=Object(o["createTextVNode"])(" | "),N=Object(o["createTextVNode"])("About");var k={setup(e){return(e,t)=>{const n=Object(o["resolveComponent"])("router-link"),a=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("div",h,[b,f,Object(o["createElementVNode"])("div",g,[Object(o["createVNode"])(n,{to:"/"},{default:Object(o["withCtx"])(()=>[j]),_:1}),O,Object(o["createVNode"])(n,{to:"/demonstration"},{default:Object(o["withCtx"])(()=>[v]),_:1}),y,Object(o["createVNode"])(n,{to:"/about"},{default:Object(o["withCtx"])(()=>[N]),_:1})])]),Object(o["createVNode"])(Object(o["unref"])(p)),Object(o["createVNode"])(a)],64)}}};n("d4f7"),n("13aa");const E=s()(k,[["__scopeId","data-v-ebb5df2e"]]);var w=E,V=n("6c02"),x=n("cf05"),_=n.n(x),S={class:"home"},T=Object(o["createElementVNode"])("img",{alt:"Vue logo",src:_.a},null,-1);function C(e,t,n,a,r,c){var l=Object(o["resolveComponent"])("HelloWorld");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",S,[T,Object(o["createVNode"])(l,{msg:"Welcome to Vue3-tutorial demonstration web-page"})])}var B=function(e){return Object(o["pushScopeId"])("data-v-71a157a3"),e=e(),Object(o["popScopeId"])(),e},I={class:"hello"},A=B((function(){return Object(o["createElementVNode"])("p",null,[Object(o["createTextVNode"])(" For a guide and recipes on how to configure / customize this project,"),Object(o["createElementVNode"])("br"),Object(o["createTextVNode"])(" check out the "),Object(o["createElementVNode"])("a",{href:"https://github.com/restimel/vue3-tutorial/blob/main/docs/main.md",target:"_blank",rel:"noopener"},"vue3-tutorial documentation"),Object(o["createTextVNode"])(". ")],-1)})),D=B((function(){return Object(o["createElementVNode"])("h3",null,"Essential Links",-1)})),L=B((function(){return Object(o["createElementVNode"])("ul",null,[Object(o["createElementVNode"])("li",null,[Object(o["createElementVNode"])("a",{href:"https://github.com/restimel/vue3-tutorial",target:"_blank",rel:"noopener"},"Vue3-tutorial Github page")]),Object(o["createElementVNode"])("li",null,[Object(o["createElementVNode"])("a",{href:"https://vuejs.org",target:"_blank",rel:"noopener"},"Vue Core Docs")])],-1)}));function P(e,t,n,a,r,c){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",I,[Object(o["createElementVNode"])("h1",null,Object(o["toDisplayString"])(e.msg),1),A,D,L])}var H=Object(o["defineComponent"])({name:"HelloWorld",props:{msg:String}});n("bea3");const W=s()(H,[["render",P],["__scopeId","data-v-71a157a3"]]);var M=W,F=Object(o["defineComponent"])({name:"Home",components:{HelloWorld:M}});const Y=s()(F,[["render",C]]);var U=Y,z=function(e){return Object(o["pushScopeId"])("data-v-71807ecb"),e=e(),Object(o["popScopeId"])(),e},J={class:"demonstration"},q=z((function(){return Object(o["createElementVNode"])("h1",null,"This is a page which includes interactives elements",-1)})),R={class:"form"},G=z((function(){return Object(o["createElementVNode"])("h2",null,"A tool with form",-1)})),K={id:"enable-tool"},Q=["checked"],X=Object(o["createTextVNode"])(" Enabled the tool "),Z={id:"name"},$=Object(o["createTextVNode"])(" Text value: "),ee=["disabled"],te={id:"operation"},ne=Object(o["createTextVNode"])(" Operation: "),oe=["disabled"],ae=z((function(){return Object(o["createElementVNode"])("option",{value:"lower"},"to lower case",-1)})),re=z((function(){return Object(o["createElementVNode"])("option",{value:"upper"},"to upper case",-1)})),ce=z((function(){return Object(o["createElementVNode"])("option",{value:"sum"},"sum all letter",-1)})),le=z((function(){return Object(o["createElementVNode"])("option",{value:"caesar"},"Caesar cipher",-1)})),ie=[ae,re,ce,le],ue={class:"result"},se=z((function(){return Object(o["createElementVNode"])("legend",null,"Result",-1)})),de=z((function(){return Object(o["createElementVNode"])("hr",null,null,-1)})),pe=z((function(){return Object(o["createElementVNode"])("h2",null,"Dynamic elements",-1)})),me=["id"];function he(e,t,n,a,r,c){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",J,[q,Object(o["createElementVNode"])("section",R,[G,Object(o["createElementVNode"])("label",K,[Object(o["createElementVNode"])("input",{type:"checkBox",name:"enabled",checked:e.toolEnabled,onChange:t[0]||(t[0]=function(t){return e.toolEnabled=t.currentTarget.checked})},null,40,Q),X]),Object(o["createElementVNode"])("label",Z,[$,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",name:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.textValue=t}),disabled:!e.toolEnabled},null,8,ee),[[o["vModelText"],e.textValue]])]),Object(o["createElementVNode"])("label",te,[ne,Object(o["withDirectives"])(Object(o["createElementVNode"])("select",{name:"operation","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.operation=t}),disabled:!e.toolEnabled},ie,8,oe),[[o["vModelSelect"],e.operation]])]),Object(o["createElementVNode"])("fieldset",ue,[se,Object(o["createTextVNode"])(" "+Object(o["toDisplayString"])(e.result),1)])]),de,pe,Object(o["createElementVNode"])("section",null,[Object(o["createElementVNode"])("button",{class:"btn-delayed",onClick:t[3]||(t[3]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.showDelayedElements&&e.showDelayedElements.apply(e,t)})}," Show elements with a small delay "),Object(o["createElementVNode"])("ul",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.delayedElements,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:e.id,id:e.id},Object(o["toDisplayString"])(e.name),9,me)})),128))])])])}var be=Object(o["defineComponent"])({data:function(){return{toolEnabled:!1,textValue:"",operation:"lower",delayedElements:[]}},computed:{result:function(){if(!this.toolEnabled)return"";var e=this.textValue;switch(this.operation){case"lower":return e.toLocaleLowerCase();case"upper":return e.toLocaleUpperCase();case"sum":return Array.from(e.toLowerCase()).reduce((function(e,t){return e+t.charCodeAt(0)-97}),0).toString();case"caesar":return Array.from(e).map((function(e){if(!/[a-z]/i.test(e))return e;var t,n=e.charCodeAt(0);return t=n>117||n<=90&&n>85?n-21:n+5,String.fromCharCode(t)})).join("");default:return"---- unknown operation ---"}}},methods:{showDelayedElements:function(){var e=this,t=1;this.delayedElements=[];var n=function(){e.delayedElements.push({id:"element-"+t,name:"element #"+t}),t++<10&&setTimeout(n,200)};n()}}});n("d1c4");const fe=s()(be,[["render",he],["__scopeId","data-v-71807ecb"]]);var ge=fe,je=[{path:"/",name:"Home",component:U},{path:"/demonstration",name:"Demonstration page",component:ge},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Oe=Object(V["a"])({history:Object(V["b"])(),routes:je}),ve=Oe;Object(o["createApp"])(w).use(ve).mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d1c4:function(e,t,n){"use strict";n("e882")},d4f7:function(e,t,n){"use strict";n("a1a4")},e882:function(e,t,n){}});
//# sourceMappingURL=app.b38d9cc4.js.map