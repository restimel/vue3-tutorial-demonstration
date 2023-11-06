(function(e){function t(t){for(var o,i,l=t[0],s=t[1],c=t[2],u=0,d=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);h&&h(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},r={app:0},a=[];function l(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"846face1"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"91d9bf33"}[e]+".css",r=s.p+o,a=document.getElementsByTagName("link"),l=0;l<a.length;l++){var c=a[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===r))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],u=c.getAttribute("data-href");if(u===o||u===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var o=t&&t.target&&t.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete i[e],h.parentNode.removeChild(h),n(a)},h.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){i[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=a);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=l(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(h);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}r[e]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue3-tutorial-demonstration/dist/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var h=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"026e":function(e,t,n){"use strict";n("fb33")},"0bfb":function(e,t,n){},"0e95":function(e,t,n){"use strict";n("0f12")},"0f07":function(e,t,n){},"0f12":function(e,t,n){},"119a":function(e,t,n){"use strict";n("0bfb")},1845:function(e,t,n){"use strict";n("4e74")},"2d6e":function(e){e.exports=JSON.parse('[{"name":"Getting started","steps":[{"target":"","title":"Welcome to Vue3-tutorial demonstration","content":"This is a very short tutorial, to show you how to handle this demonstration site.\\n\\n>:info:_You can skip this tutorial at anytime by clicking on the **×** button at top of this window.\\n>You can also type **`escape`**._","options":{"position":"center"}},{"target":"a[href=\\"#/demonstration\\"]","title":"Welcome to Vue3-tutorial demonstration","content":"There is a link to another page where there are more complex components.\\n\\nIt shows how **vue3-tutorial** handles complex components."},{"target":".nav-tutorials","title":"Welcome to Vue3-tutorial demonstration","content":"Here you can find many tutorials, which are only examples to show what can be done with **vue3-tutorial**.\\n\\nYou only have to click on any of these buttons to start a tutorial example.","options":{"position":"auto"}},{"target":".show-code__button","title":"Welcome to Vue3-tutorial demonstration","content":"With this button you can watch the code of the tutorials you are watching.\\n\\nLike this it should be easier to reproduce the effect you want in your own tutorial.","options":{"position":"left"}},{"target":"","content":"_Thank you for your attention_"}]},{"name":"tutorial with actions","steps":[{"content":"In this tutorial, we will play with the \\"`actionNext`\\" property.\\n\\nThis will force you to do the action instead of clicking on _next_."},{"content":"Navigate to the _demonstration_ page.\\n\\nYou should click directly on the link to go to the next step.","target":"a[href=\\"#/demonstration\\"]","actionNext":"click"},{"content":"Here, first, you should _enable_ the tool.","target":["#enable-tool",".form"],"actionNext":{"action":"change","target":"#enable-tool input","check":"is checked"}},{"content":"Enter a text containing `\'foo\'`","target":"#name","actionNext":{"action":"input","target":"#name input","check":"contains","value":"foo"},"options":{"focus":"main-target"}},{"content":"The result is displayed there.\\n\\nMove your cursor over the result to continue.","target":".result","actionNext":{"action":"mouseover"}},{"content":"Change the select to `\\"caesar\\"`","target":"#operation","actionNext":{"action":"change","target":"select[name=\\"operation\\"]","value":"caesar"}},{"content":"The result has been updated.","target":".result","actionNext":"next"}]},{"name":"tutorial with skipped steps","steps":[{"title":"WIP","content":"If you see this text it means that the feature is not working.","skipStep":true},{"content":"In this tutorial, we will play with the \\"skipStep\\" property. If you compare this one with the previous tutorial (\\"tutorial with action\\"), you will see that some useless steps are not proposed."},{"content":"Navigate to the _demonstration_ page.\\n\\nYou should click directly on the link to go to the next step.","target":"a[href=\\"#/demonstration\\"]","actionNext":"click","skipStep":{"target":"a[href=\\"#/demonstration\\"]","property":"className","check":"contains","value":"active"}},{"content":"Here, first, you should _enable_ the tool.","target":["#enable-tool",".form"],"actionNext":{"action":"change","target":"#enable-tool input","check":"is checked"},"skipStep":{"target":"#enable-tool input","check":"is checked"}},{"content":"Enter a text containing `\'foo\'`","target":"#name","actionNext":{"action":"input","target":"#name input","check":"contains","value":"foo"},"options":{"focus":"main-target"},"skipStep":{"target":"#name input","check":"is not empty"}},{"content":"The result is displayed there.\\n\\nMove your cursor over the result to continue.","target":".result","actionNext":{"action":"mouseover"}},{"content":"The select has already the value `\\"caesar\\"`","target":"#operation","skipStep":{"target":"select[name=\\"operation\\"]","check":"is not","value":"caesar"}},{"content":"Change the select to `\\"caesar\\"`","target":"#operation","actionNext":{"action":"change","target":"select[name=\\"operation\\"]","value":"caesar"},"skipStep":{"target":"select[name=\\"operation\\"]","value":"caesar"}},{"content":"You should try to re-run this tutorial with different initial values. And you will see that steps will be different."}]},{"name":"tutorial with delayed content","steps":[{"content":"In this tutorial, we will play with some elements that are not displayed immediately."},{"content":"Navigate to the _demonstration_ page.\\n\\nYou should click directly on the link to go to the next step.","target":"a[href=\\"#/demonstration\\"]","actionNext":"click","skipStep":{"target":"a[href=\\"#/demonstration\\"]","property":"className","check":"contains","value":"active"}},{"content":"Click on this button.\\n\\nIt will create some elements for 2s.","target":".btn-delayed","actionNext":"click"},{"content":"This 10th element appears only 2s later.\\n\\nBut this step is able to point it when it shows up.","target":"#element-10"}]},{"name":"tutorial with scrolled elements","steps":[{"content":"In this tutorial, we will show some elements that needs scroll.\\n\\n_For several steps, to go to the next one, you should find the element and put your cursor over it._"},{"content":"Navigate to the _demonstration_ page.\\n\\nYou should click directly on the link to go to the next step.","target":"a[href=\\"#/demonstration\\"]","actionNext":"click","skipStep":{"target":"a[href=\\"#/demonstration\\"]","property":"className","check":"contains","value":"active"}},{"content":"First we will look for an element which is at bottom of a small container (**item #90**).\\n\\nDepending on your screen size, you may need to first scroll down the page then to scroll down inside the container.","target":"#scroll-v-item-90","actionNext":"mouseover","options":{"scroll":false}},{"content":"Now, you should scroll up to find the **item #5**.","target":"#scroll-v-item-5","actionNext":"mouseover","options":{"scroll":false}},{"content":"Great! Now we will do the same with horizontal scroll","actionNext":"next"},{"content":"We will look for an element at the end of the list (**item #90**).","target":"#scroll-h-item-90","actionNext":"mouseover","options":{"scroll":false}},{"content":"And now, you should look for an element at start of the list (**item #5**).","target":"#scroll-h-item-5","actionNext":"mouseover","options":{"scroll":false}},{"content":"Now, we will repeat these steps but by using automatic scroll.\\n\\n_You will have only to click on **next**_","actionNext":"next","options":{"arrow":false,"highlight":false,"position":"center","scroll":{"target":".top-header"}}},{"content":"We will look again for an element which is at bottom of a small container (**item #90**).\\n\\nNow you should see it immediately.","target":"#scroll-v-item-90","actionNext":"mouseover"},{"content":"Now, we move back to **item #5**.","target":"#scroll-v-item-5","actionNext":"mouseover"},{"content":"We will look again for an element at the end of the list (**item #90**).","target":"#scroll-h-item-90","actionNext":"mouseover"},{"content":"And now, we move back to an element at start of the list (**item #5**).","target":"#scroll-h-item-5","actionNext":"mouseover"},{"content":"That\'s all for this tutorial about scrolled elements."}]},{"name":"tutorial with specific options","steps":[{"content":"In this tutorial, we will show some special options to control what we want to show."},{"content":"Navigate to the _home_ page.\\n\\n_You should click directly on the link to go to the next step._","target":"a[href=\\"#/\\"]","actionNext":"click","skipStep":{"target":"a[href=\\"#/\\"]","property":"className","check":"contains","value":"active"}},{"content":"First, about the arrow, we can hide it. And there is no arrow to the main element","target":".nav-tutorials","options":{"arrow":false}},{"content":"It is also possible, to add arrows to different elements than the main element.","target":".nav-tutorials","options":{"arrow":[".btn-tutorial",".external-link"]}},{"content":"It is also possible, to do the same with masks.","target":".nav-tutorials","options":{"mask":[".btn-tutorial",".external-link"]}},{"content":"And also with highlighted elements.","target":".nav-tutorials","options":{"highlight":[".btn-tutorial",".external-link"]}}]},{"name":"Markdown","steps":[{"title":"Markdown","content":"This tutorial, is to show the markdown usage to format text content."},{"title":"Basic formatting","content":"These format allow to change inline text.\\n```markdown\\n**bold**, _italic_, ~~strike~~, X~subscript~, Y^superscipt^, or `inline code`.\\n```\\n**bold**, _italic_, ~~strike~~, X~subscript~, Y^superscipt^, or `inline code`."},{"title":"Lines","content":"To display text on several line you should insert an empty line between these texts. A simple line feed will not create a new line.\\n```markdown\\ntext1\\n\\ntext2\\ntext3\\n```\\ntext1\\n\\ntext2\\ntext3"},{"title":"Text controls","content":"It is possible to force a line feed by adding `@\\\\n@`.\\n```markdown\\ntext1@\\n@text2@\\\\n@text3\\n```\\ntext1@\\n@text2@\\\\n@text3\\n\\nIt is also possible to add a big space with `@\\\\t@`.\\n```markdown\\ntext1@\\\\t@text2\\n```\\ntext1@\\\\t@text2\\n"},{"title":"Color","content":"Even if it is not standard in markdown, it is possible to choose color for some text.\\n```markdown\\nThis is a sentence with a {blue:blue} color and {#d3b41e:a **yellowish** color}\\n```\\nThis is a sentence with a {blue:blue} color and {#d3b41e:a **yellowish** color}\\n"},{"title":"Link & Image","content":"It is possible to add external link and images.\\n```markdown\\n[Read documentation](https://github.com/restimel/vue3-tutorial/tree/main/docs)\\n```\\n[Read documentation](https://github.com/restimel/vue3-tutorial/tree/main/docs)\\n\\nImages:\\n```markdown\\n![a smiley](https://raw.githubusercontent.com/restimel/vue3-tutorial-demonstration/assets/images/smiley.svg)\\n```\\n![a smiley](https://raw.githubusercontent.com/restimel/vue3-tutorial-demonstration/assets/images/smiley.svgs)"},{"title":"Code","content":"It is possible to insert code.\\n~~~markdown\\n```\\nmulti-line code\\nanother code line\\n```\\n~~~\\nAnd it is possible to set the language, but for syntax highlighting you should add a dedicated library (css class will help you for that).\\n~~~markdown\\n```markdown\\nThis is a **Markdown** code.\\n```\\n~~~"},{"title":"Horizontal line","content":"It is possible to add horizontal line to separate section.\\n```markdown\\n---\\n```\\n---\\nAnd there is the next section ;)"},{"title":"Headers","content":"```markdown\\n# Header level 1\\n## Header level 2\\n### Header level 3\\n#### Header level 4\\n##### Header level 5\\n###### Header level 6\\n```\\n# Header level 1\\n## Header level 2\\n### Header level 3\\n#### Header level 4\\n##### Header level 5\\n###### Header level 6"},{"title":"Quotes","content":"```markdown\\n>Believe you can and you\'re halfway there.\\n>@\\\\t@_Theodore Roosevelt_\\n```\\n>Believe you can and you\'re halfway there.\\n>@\\t@_Theodore Roosevelt_\\n"},{"title":"Special Quotes","content":"```markdown\\n>:info:You can navigate with keyboards.\\n\\n>:warning:You need to be very vigilant.\\n\\n>:danger:Proceed with caution\\n>Be careful and vigilant when dealing with a potentially dangerous situation or person.\\n```\\n>:info:You can navigate with keyboards.\\n\\n>:warning:You need to be very vigilant.\\n\\n>:danger:Proceed with caution\\n>Be careful and vigilant when dealing with a potentially dangerous situation or person.\\n---\\nIt only applies the given key word as class name to the block quote. Some have predefined style, but for others it is up to you to format it as you want."},{"title":"Unordered list","content":"```markdown\\n* item 1\\n* item 2\\n  * item A\\n  * item B\\n    * item α\\n    * item β\\n* item 3\\n```\\n* item 1\\n* item 2\\n  * item A\\n  * item B\\n    * item α\\n    * item β\\n* item 3\\n"},{"title":"Ordered list","content":"```markdown\\n1. item 1\\n1. item 2\\n  1. item A\\n  1. item B\\n    1. item α\\n    1. item β\\n1. item 3\\n```\\n1. item 1\\n1. item 2\\n  1. item A\\n  1. item B\\n    1. item α\\n    1. item β\\n1. item 3\\n"},{"title":"Icons or special elements","content":"```markdown\\nan icon :icon:\\n```\\nan icon :icon:\\n"},{"title":"Table","content":"```markdown\\nheader of first column | header of **second** column\\n---------------------- | -----------------------------\\nA cell in 1^st^ column | Value on 1^st^ row\\nA value on 2^nd^ row   | Another value\\n```\\nheader of first column | header of **second** column\\n---------------------- | -----------------------------\\nA cell in 1^st^ column | Value on 1^st^ row\\nA value on 2^nd^ row   | Another value"}]},{"name":"tutorial with different step order","steps":[{"name":"step 0","content":"**Step0**\\n\\nIn this tutorial, we will not navigate directly to the next step.\\n\\nThe next step will be `\'+2\'`.\\n\\nThere is no previous step.","nextStep":"+2"},{"name":"step 1","content":"**Step1**\\n\\n\\n\\nThe next step will be `\'step 3\'`.\\n\\nThe previous step will be `2`.","nextStep":"step 3","previousStep":2},{"name":"step 2","content":"**Step2**\\n\\n\\n\\nThe next step will be `1`.\\n\\nThe previous step will be `\'-2\'`.","nextStep":1,"previousStep":"-2"},{"name":"step 3","content":"**Step3**\\n\\n\\n\\nThe next step will be `\'+2\'` (but the 3 next steps are always skipped).\\n\\nThe previous step will be `\'step 1\'`.","nextStep":"+2","previousStep":"step 1"},{"name":"step 4 skipped","content":"**Step4**\\n\\n\\n\\nThis step should never be displayed.","skipStep":true},{"name":"step 5 skipped","content":"**Step5**\\n\\n\\n\\nThis step should never be displayed.","skipStep":true},{"name":"step 6 skipped","content":"**Step6**\\n\\n\\n\\nThis step should never be displayed.","skipStep":true},{"name":"step 7","content":"**Step7**\\n\\n\\n\\nThere is no next step, this is the end of this tutorial.\\n\\nThe previous step will be `\'-2\'` (but the 3 previous steps are always skipped).","previousStep":"-2"}]}]')},"2f9f":function(e,t,n){},"407d":function(e,t,n){"use strict";n("0f07")},"47c7":function(e,t,n){},"4d69":function(e,t,n){"use strict";n("47c7")},"4e74":function(e,t,n){},"52fb":function(e,t,n){"use strict";n("5b6c")},"5b6c":function(e,t,n){},"7eb1":function(e,t,n){"use strict";n("934a")},"934a":function(e,t,n){},a949:function(e,t,n){},b706:function(e,t,n){"use strict";n("2f9f")},cc4a:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),i=function(e){return Object(o["A"])("data-v-f3874fa0"),e=e(),Object(o["x"])(),e},r={class:"show-code"},a=i((function(){return Object(o["h"])("summary",null,"Tutorial",-1)})),l={open:""},s=i((function(){return Object(o["h"])("summary",null,"Change props",-1)})),c=["title"],u=i((function(){return Object(o["h"])("div",{class:"warning"}," Be careful! Changing this value may cause the tutorial to not resolve the step correctly. ",-1)}));function d(e,t,n,i,d,h){var p=Object(o["E"])("Logs");return Object(o["w"])(),Object(o["g"])("aside",r,[Object(o["h"])("button",{class:"show-code__button",title:"buttonTitle",onClick:t[0]||(t[0]=function(t){return e.open=!e.open})},Object(o["I"])(e.open?"✖️":"👁️"),1),(Object(o["w"])(),Object(o["e"])(o["b"],{to:"body"},[e.open?(Object(o["w"])(),Object(o["g"])("aside",{key:0,class:"code",style:Object(o["s"])(e.codePosition)},[Object(o["h"])("header",{class:"code__header",onMousedown:t[2]||(t[2]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.startFollow&&e.startFollow.apply(e,t)})},[Object(o["j"])(" Show JSON "),Object(o["h"])("span",{class:"close-button",onClick:t[1]||(t[1]=function(t){return e.open=!1})}," ✖️ ")],32),Object(o["h"])("section",null,[Object(o["h"])("details",null,[a,Object(o["h"])("pre",null,Object(o["I"])(e.formatedCode),1)]),Object(o["h"])("details",l,[Object(o["h"])("summary",null,"Step ["+Object(o["I"])(e.index)+"]",1),Object(o["h"])("pre",null,Object(o["I"])(e.formatedStepCode),1)]),Object(o["h"])("details",null,[s,Object(o["h"])("label",{title:e.stepTitle},[Object(o["j"])(" step: "),Object(o["P"])(Object(o["h"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.stepProp=t})},null,512),[[o["M"],e.stepProp]])],8,c),u]),Object(o["h"])("details",null,[Object(o["h"])("summary",null,"Logs emitted ("+Object(o["I"])(e.logs.length)+")",1),Object(o["k"])(p,{logs:e.logs,onResetLogs:t[4]||(t[4]=function(t){return e.resetLogs()})},null,8,["logs"])])]),Object(o["h"])("span",{class:"resize",onMousedown:t[5]||(t[5]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.startResize&&e.startResize.apply(e,t)})}," 📐 ",32)],4)):Object(o["f"])("",!0)]))])}var h=function(e){return Object(o["A"])("data-v-27e43d0e"),e=e(),Object(o["x"])(),e},p={class:"logs"},b=h((function(){return Object(o["h"])("div",{class:"log-code"}," Code ",-1)})),m=h((function(){return Object(o["h"])("div",{class:"log-message"}," Message ",-1)})),f=h((function(){return Object(o["h"])("div",{class:"log-details"}," Details ",-1)})),g=h((function(){return Object(o["h"])("div",{class:"log-details"}," Step index ",-1)}));function v(e,t,n,i,r,a){var l=Object(o["E"])("Log");return Object(o["w"])(),Object(o["g"])(o["a"],null,[Object(o["h"])("button",{title:"Clear log history",onClick:t[0]||(t[0]=function(t){return e.resetLogs()})}," 🗑️ "),Object(o["h"])("label",null,[Object(o["P"])(Object(o["h"])("input",{type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.keepDebug=t})},null,512),[[o["K"],e.keepDebug]]),Object(o["j"])(" Debug ")]),Object(o["h"])("label",null,[Object(o["P"])(Object(o["h"])("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.keepWarning=t})},null,512),[[o["K"],e.keepWarning]]),Object(o["j"])(" Warning ")]),Object(o["h"])("label",null,[Object(o["P"])(Object(o["h"])("input",{type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.keepError=t})},null,512),[[o["K"],e.keepError]]),Object(o["j"])(" Error ")]),Object(o["h"])("div",p,[b,m,f,g,(Object(o["w"])(!0),Object(o["g"])(o["a"],null,Object(o["D"])(e.displayedLogs,(function(e,t){return Object(o["w"])(),Object(o["e"])(l,{key:"log-"+t,log:e,even:t%2===0},null,8,["log","even"])})),128))])],64)}function j(e,t,n,i,r,a){var l=Object(o["E"])("ShowObject");return Object(o["w"])(),Object(o["g"])(o["a"],null,[Object(o["h"])("div",{class:Object(o["r"])(["log-code",e.colorLog])},Object(o["I"])(e.log.code),3),Object(o["h"])("div",{class:Object(o["r"])(["log-message",e.colorLog])},Object(o["I"])(e.log.message),3),Object(o["h"])("div",{class:Object(o["r"])(["log-details",e.colorLog])},[e.log.details?(Object(o["w"])(),Object(o["e"])(l,{key:0,name:"Details",value:e.log.details},null,8,["value"])):Object(o["f"])("",!0)],2),Object(o["h"])("div",{class:Object(o["r"])(["log-details",e.colorLog])},Object(o["I"])(e.log.stepIndex),3)],64)}var O={key:0},w={class:"propName"},y={class:"propValue"},k={key:1};function x(e,t,n,i,r,a){var l=Object(o["E"])("show-object",!0);return e.isPrimitive?(Object(o["w"])(),Object(o["g"])("div",O,[Object(o["h"])("span",w,Object(o["I"])(e.name)+": ",1),Object(o["h"])("span",y,Object(o["I"])(e.stringValue),1)])):(Object(o["w"])(),Object(o["g"])("details",k,[Object(o["h"])("summary",null,Object(o["I"])(e.name),1),Object(o["h"])("p",null,[(Object(o["w"])(!0),Object(o["g"])(o["a"],null,Object(o["D"])(e.innerProps,(function(t){return Object(o["w"])(),Object(o["e"])(l,{name:t,value:e.value[t],key:"prop-"+e.innerId+"-"+t},null,8,["name","value"])})),128))])]))}var S=Object(o["l"])({name:"ShowObject",props:{name:String,value:[Object,Array,String,Number,Boolean,Function]},data:function(){return{}},computed:{innerId:function(){var e=Math.random()*Math.pow(2,32);return e.toString()},isPrimitive:function(){var e=typeof this.value;switch(e){case"string":case"number":case"boolean":case"function":case"undefined":return!0;case"object":if(null===e)return!0;default:return!1}},stringValue:function(){return String(this.value)},innerProps:function(){var e=this.value;return e?Array.from(Object.keys(e)):[]}}}),_=(n("de7e"),n("6b0d")),E=n.n(_);const N=E()(S,[["render",x],["__scopeId","data-v-562d3e91"]]);var I=N,T=n("3bd2"),C=Object(o["l"])({name:"Log",props:{log:Object,even:Boolean},data:function(){return{}},computed:{colorLog:function(){var e,t=null===(e=this.log)||void 0===e?void 0:e.code;if(void 0===t)return"";var n=Object(T["b"])(t),o=this.even?"even":"odd";return n+" "+o}},components:{ShowObject:I}});n("407d");const L=E()(C,[["render",j],["__scopeId","data-v-21192cf1"]]);var A=L,V=Object(o["l"])({name:"Logs",emits:["resetLogs"],props:{logs:Array},data:function(){return{keepDebug:!0,keepWarning:!0,keepError:!0}},computed:{displayedLogs:function(){var e,t=this;return(null!==(e=this.logs)&&void 0!==e?e:[]).filter((function(e){var n=e.code;return n<200?t.keepDebug:n<300?t.keepWarning:t.keepError}))}},methods:{resetLogs:function(){this.$emit("resetLogs")}},components:{Log:A}});n("52fb");const P=E()(V,[["render",v],["__scopeId","data-v-27e43d0e"]]);var H=P,D=Object(o["l"])({name:"showCode",emits:["forceStep","resetLogs"],props:{code:Object,index:Number,logs:Array},data:function(){var e=window.innerWidth,t=window.innerHeight,n=Math.round(.4*e);return{open:!1,top:210,left:e-n-10,width:n,height:Math.round(.3*t),offset:{x:0,y:0},stepProp:""}},computed:{stepCode:function(){var e,t,n,o,i;return null!==(i=null===(n=null===(t=null===(e=this.code)||void 0===e?void 0:e.tutorial)||void 0===t?void 0:t.steps)||void 0===n?void 0:n[null!==(o=this.index)&&void 0!==o?o:0])&&void 0!==i?i:{}},formatedCode:function(){return JSON.stringify(this.code,void 0,"  ").trim()},formatedStepCode:function(){return JSON.stringify(this.stepCode,void 0,"  ").trim()},buttonTitle:function(){return this.open?"Close the JSON window":"Show JSON related to the selected tutorial"},codePosition:function(){var e=["--top: "+this.top+"px;","--left: "+this.left+"px;","--width: "+this.width+"px;","--height: "+this.height+"px;"];return e.join("")},stepPropValue:function(){if(this.stepProp){var e=parseInt(this.stepProp,10);return Number.isNaN(e),e}},stepTitle:function(){return':step="'+String(this.stepPropValue)+'"'}},watch:{stepPropValue:function(){this.$emit("forceStep",this.stepPropValue)}},methods:{followCursor:function(e){var t=this.offset;if(t){var n=e.clientX,o=e.clientY;this.top=o-t.y,this.left=n-t.x}},startFollow:function(e){this.offset={x:e.offsetX,y:e.offsetY};var t=this.followCursor.bind(this);window.addEventListener("mousemove",t),window.addEventListener("mouseup",(function(){window.removeEventListener("mousemove",t),document.body.classList.remove("moving")}),{once:!0}),document.body.classList.add("moving")},resetLogs:function(){this.$emit("resetLogs")},resizeCursor:function(e){var t=this.offset;if(t){var n=e.clientX,o=e.clientY;this.width=n+t.x-this.left,this.height=o+t.y-this.top}},startResize:function(e){var t=e.currentTarget.getBoundingClientRect(),n=t.width,o=t.height;this.offset={x:n-e.offsetX,y:o-e.offsetY};var i=this.resizeCursor.bind(this);window.addEventListener("mousemove",i),window.addEventListener("mouseup",(function(){window.removeEventListener("mousemove",i),document.body.classList.remove("moving")}),{once:!0}),document.body.classList.add("moving")}},components:{Logs:H}});n("0e95"),n("7eb1");const M=E()(D,[["render",d],["__scopeId","data-v-f3874fa0"]]);var Y=M,B=n("2d6e");const W={class:"nav-tutorials"},J=["onClick"];var z={__name:"TutorialMenu",setup(e){let t=Object(o["C"])({}),n=Object(o["C"])(!1),i=Object(o["C"])(0),r=Object(o["C"])(void 0),a=Object(o["B"])([]);const l=Array.isArray(B)?B.map(e=>e.name):[],s={debug:!0,maskMargin:5};function c(e){h();const o=B.find(t=>t.name===e);o&&(t.value=o,n.value=!0)}function u(e){e.code>=200&&console.log("error prompted:",e),a.push(e)}function d(e){i.value=e}function h(){a.splice(0,1/0)}return sessionStorage.getItem("hasAlreadyVisit")||c(l[0]),sessionStorage.setItem("hasAlreadyVisit",!0),(e,p)=>(Object(o["w"])(),Object(o["g"])(o["a"],null,[Object(o["h"])("section",W,[Object(o["k"])(Y,{code:{tutorial:Object(o["J"])(t)},index:Object(o["J"])(i),logs:Object(o["J"])(a),onForceStep:p[0]||(p[0]=e=>Object(o["p"])(r)?r.value=e:r=e),onResetLogs:p[1]||(p[1]=e=>h())},null,8,["code","index","logs"]),(Object(o["w"])(!0),Object(o["g"])(o["a"],null,Object(o["D"])(Object(o["J"])(l),e=>(Object(o["w"])(),Object(o["g"])("button",{key:"tutorial-"+e,class:"btn-tutorial main-tutorial",onClick:t=>c(e)},Object(o["I"])(e),9,J))),128))]),Object(o["k"])(Object(o["J"])(T["a"]),{tutorial:Object(o["J"])(t),open:Object(o["J"])(n),options:s,step:Object(o["J"])(r),onStop:p[2]||(p[2]=e=>Object(o["p"])(n)?n.value=!1:n=!1),onError:u,onChangeStep:d,onStart:d},null,8,["tutorial","open","step"])],64))}};n("1845");const R=E()(z,[["__scopeId","data-v-04318622"]]);var F=R;const U=e=>(Object(o["A"])("data-v-4cba2d0b"),e=e(),Object(o["x"])(),e),X={class:"main-header"},K=U(()=>Object(o["h"])("h1",null,"Vue3-tutorial",-1)),q=U(()=>Object(o["h"])("p",null," This is a customizable component allowing you to propose a step by step tutorial on your website or your web application. ",-1)),G={id:"nav"};var $={__name:"App",setup(e){return(e,t)=>{const n=Object(o["E"])("router-link"),i=Object(o["E"])("router-view");return Object(o["w"])(),Object(o["g"])(o["a"],null,[Object(o["h"])("div",X,[K,q,Object(o["h"])("div",G,[Object(o["k"])(n,{to:"/"},{default:Object(o["O"])(()=>[Object(o["j"])("Home")]),_:1}),Object(o["j"])(" | "),Object(o["k"])(n,{to:"/demonstration"},{default:Object(o["O"])(()=>[Object(o["j"])("Demonstration page")]),_:1}),Object(o["j"])(" | "),Object(o["k"])(n,{to:"/about"},{default:Object(o["O"])(()=>[Object(o["j"])("About")]),_:1})])]),Object(o["k"])(Object(o["J"])(F)),Object(o["k"])(i)],64)}}};n("026e"),n("ed6c");const Q=E()($,[["__scopeId","data-v-4cba2d0b"]]);var Z=Q,ee=n("6605"),te=n("cf05"),ne=n.n(te),oe={class:"home"},ie=Object(o["h"])("img",{alt:"Vue logo",src:ne.a},null,-1),re=Object(o["h"])("p",null,[Object(o["j"])(" The current version of "),Object(o["h"])("a",{href:"https://github.com/restimel/vue3-tutorial",target:"_blank"},"Vue3-tutorial"),Object(o["j"])(" used on the demonstration site is "),Object(o["h"])("b",null," 0.13.1 "),Object(o["j"])(". ")],-1);function ae(e,t,n,i,r,a){var l=Object(o["E"])("HelloWorld");return Object(o["w"])(),Object(o["g"])("div",oe,[ie,Object(o["k"])(l,{msg:"Welcome to Vue3-tutorial demonstration web-page"}),re])}var le=function(e){return Object(o["A"])("data-v-60851f1d"),e=e(),Object(o["x"])(),e},se={class:"hello"},ce=le((function(){return Object(o["h"])("p",null,[Object(o["j"])(" For a guide and recipes on how to configure / customize this project,"),Object(o["h"])("br"),Object(o["j"])(" check out the "),Object(o["h"])("a",{href:"https://github.com/restimel/vue3-tutorial/blob/main/docs/main.md",target:"_blank",rel:"noopener"},"vue3-tutorial documentation"),Object(o["j"])(". ")],-1)})),ue=le((function(){return Object(o["h"])("h3",null,"Essential Links",-1)})),de=le((function(){return Object(o["h"])("ul",null,[Object(o["h"])("li",null,[Object(o["h"])("a",{class:"external-link",href:"https://github.com/restimel/vue3-tutorial",target:"_blank",rel:"noopener"},"Vue3-tutorial Github page")]),Object(o["h"])("li",null,[Object(o["h"])("a",{class:"external-link",href:"https://vuejs.org",target:"_blank",rel:"noopener"},"Vue Core Docs")])],-1)}));function he(e,t,n,i,r,a){return Object(o["w"])(),Object(o["g"])("div",se,[Object(o["h"])("h1",null,Object(o["I"])(e.msg),1),ce,ue,de])}var pe=Object(o["l"])({name:"HelloWorld",props:{msg:String}});n("119a");const be=E()(pe,[["render",he],["__scopeId","data-v-60851f1d"]]);var me=be,fe=Object(o["l"])({name:"Home",components:{HelloWorld:me}});n("4d69");const ge=E()(fe,[["render",ae]]);var ve=ge,je=function(e){return Object(o["A"])("data-v-510341f3"),e=e(),Object(o["x"])(),e},Oe={class:"demonstration"},we=je((function(){return Object(o["h"])("h1",{class:"top-header"},"This is a page which includes interactive elements",-1)})),ye={class:"form"},ke=je((function(){return Object(o["h"])("h2",null,"A tool with form",-1)})),xe={id:"enable-tool"},Se=["checked"],_e={id:"name"},Ee=["disabled"],Ne={id:"operation"},Ie=["disabled"],Te=je((function(){return Object(o["h"])("option",{value:"lower"},"to lower case",-1)})),Ce=je((function(){return Object(o["h"])("option",{value:"upper"},"to upper case",-1)})),Le=je((function(){return Object(o["h"])("option",{value:"sum"},"sum all letter",-1)})),Ae=je((function(){return Object(o["h"])("option",{value:"caesar"},"Caesar cipher",-1)})),Ve=[Te,Ce,Le,Ae],Pe={class:"result"},He=je((function(){return Object(o["h"])("legend",null,"Result",-1)})),De=je((function(){return Object(o["h"])("hr",null,null,-1)})),Me=je((function(){return Object(o["h"])("h2",null,"Dynamic elements",-1)})),Ye=["id"],Be=je((function(){return Object(o["h"])("hr",null,null,-1)})),We=je((function(){return Object(o["h"])("h2",null,"Element that needs scroll to be viewed",-1)})),Je={class:"scroll-section"},ze=je((function(){return Object(o["h"])("p",null,"These lists contain a lot of items but are not large enough to show them all.",-1)})),Re={class:"short-container-long-list-horizontal"},Fe=["id"],Ue=je((function(){return Object(o["h"])("br",null,null,-1)})),Xe={class:"short-container-long-list-vertical"},Ke=["id"];function qe(e,t,n,i,r,a){return Object(o["w"])(),Object(o["g"])("div",Oe,[we,Object(o["h"])("section",ye,[ke,Object(o["h"])("label",xe,[Object(o["h"])("input",{type:"checkBox",name:"enabled",checked:e.toolEnabled,onChange:t[0]||(t[0]=function(t){return e.toolEnabled=t.currentTarget.checked})},null,40,Se),Object(o["j"])(" Enabled the tool ")]),Object(o["h"])("label",_e,[Object(o["j"])(" Text value: "),Object(o["P"])(Object(o["h"])("input",{type:"text",name:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.textValue=t}),disabled:!e.toolEnabled},null,8,Ee),[[o["M"],e.textValue]])]),Object(o["h"])("label",Ne,[Object(o["j"])(" Operation: "),Object(o["P"])(Object(o["h"])("select",{name:"operation","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.operation=t}),disabled:!e.toolEnabled},Ve,8,Ie),[[o["L"],e.operation]])]),Object(o["h"])("fieldset",Pe,[He,Object(o["j"])(" "+Object(o["I"])(e.result),1)])]),De,Me,Object(o["h"])("section",null,[Object(o["h"])("button",{class:"btn-delayed",onClick:t[3]||(t[3]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.showDelayedElements&&e.showDelayedElements.apply(e,t)})}," Show elements with a small delay "),Object(o["h"])("ul",null,[(Object(o["w"])(!0),Object(o["g"])(o["a"],null,Object(o["D"])(e.delayedElements,(function(e){return Object(o["w"])(),Object(o["g"])("li",{key:e.id,id:e.id},Object(o["I"])(e.name),9,Ye)})),128))])]),Be,We,Object(o["h"])("section",Je,[ze,Object(o["h"])("div",Re,[Object(o["h"])("div",null,[(Object(o["w"])(!0),Object(o["g"])(o["a"],null,Object(o["D"])(e.scrolledHElements,(function(e){return Object(o["w"])(),Object(o["g"])("span",{key:e.id,id:e.id},Object(o["I"])(e.name),9,Fe)})),128))])]),Ue,Object(o["h"])("ul",Xe,[(Object(o["w"])(!0),Object(o["g"])(o["a"],null,Object(o["D"])(e.scrolledVElements,(function(e){return Object(o["w"])(),Object(o["g"])("li",{key:e.id,id:e.id},Object(o["I"])(e.name),9,Ke)})),128))])])])}var Ge=Object(o["l"])({data:function(){return{toolEnabled:!1,textValue:"",operation:"lower",delayedElements:[],scrolledVElements:[],scrolledHElements:[]}},computed:{result:function(){if(!this.toolEnabled)return"";var e=this.textValue;switch(this.operation){case"lower":return e.toLocaleLowerCase();case"upper":return e.toLocaleUpperCase();case"sum":return Array.from(e.toLowerCase()).reduce((function(e,t){return e+t.charCodeAt(0)-97}),0).toString();case"caesar":return Array.from(e).map((function(e){if(!/[a-z]/i.test(e))return e;var t,n=e.charCodeAt(0);return t=n>117||n<=90&&n>85?n-21:n+5,String.fromCharCode(t)})).join("");default:return"---- unknown operation ---"}}},methods:{showDelayedElements:function(){var e=this,t=1;this.delayedElements=[];var n=function(){e.delayedElements.push({id:"element-"+t,name:"element #"+t}),t++<10&&setTimeout(n,200)};n()},buildScrolledVElements:function(){this.scrolledVElements=new Array(100).fill(null).map((function(e,t){var n=t+1;return{id:"scroll-v-item-"+n,name:"scroll item #"+n}}))},buildScrolledHElements:function(){this.scrolledHElements=new Array(100).fill(null).map((function(e,t){var n=t+1;return{id:"scroll-h-item-"+n,name:"#"+n}}))}},created:function(){this.buildScrolledVElements(),this.buildScrolledHElements()}});n("b706");const $e=E()(Ge,[["render",qe],["__scopeId","data-v-510341f3"]]);var Qe=$e,Ze=[{path:"/",name:"Home",component:ve},{path:"/demonstration",name:"Demonstration page",component:Qe},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],et=Object(ee["a"])({history:Object(ee["b"])(),routes:Ze}),tt=et;Object(o["d"])(Z).use(tt).mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},de7e:function(e,t,n){"use strict";n("cc4a")},ed6c:function(e,t,n){"use strict";n("a949")},fb33:function(e,t,n){}});
//# sourceMappingURL=app.7eebc522.js.map