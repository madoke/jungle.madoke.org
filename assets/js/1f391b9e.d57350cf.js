(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{104:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,r]=t;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=a;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},105:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(101),l=n(3),c=n(99),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(23).a,theme:s};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var d=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},h=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=u({},n,{backgroundColor:null}),o};function g(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var f=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),p(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),p(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=u({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(r.style=l.plain),void 0!==o&&(r.style=void 0!==r.style?u({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),p(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[l].concat(c))}})),p(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,l=u({},g(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?u({},l.style,o):o),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),p(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,l=0,c=[],s=[c];l>-1;){for(;(r=a[l]++)<o[l];){var i=void 0,p=t[l],u=n[l][r];if("string"==typeof u?(p=l>0?p:["plain"],i=u):(p=h(p,u.type),u.alias&&(p=h(p,u.alias)),i=u.content),"string"==typeof i){var y=i.split(d),g=y.length;c.push({types:p,content:y[0]});for(var f=1;f<g;f++)m(c),s.push(c=[]),c.push({types:p,content:y[f]})}else l++,t.push(p),n.push(i),a.push(0),o.push(i.length)}l--,t.pop(),n.pop(),a.pop(),o.pop()}return m(c),s}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var b=n(104),v=n.n(b),k={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},E=n(108),j=n(98);var O=()=>{const{prism:e}=Object(j.useThemeConfig)(),{isDarkTheme:t}=Object(E.a)(),n=e.theme||k,a=e.darkTheme||n;return t?a:n},N=n(100),C=n(56),T=n.n(C);const x=/{([\d,-]+)}/,B=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${a})\\s*$`)},L=/(?:title=")(.*)(?:")/;function w({children:e,className:t,metastring:n}){const{prism:r}=Object(j.useThemeConfig)(),[s,p]=Object(a.useState)(!1),[u,d]=Object(a.useState)(!1);Object(a.useEffect)((()=>{d(!0)}),[]);const m=Object(a.useRef)(null);let h=[],y="";const g=O(),b=Array.isArray(e)?e.join(""):e;if(n&&x.test(n)){const e=n.match(x)[1];h=v()(e).filter((e=>e>0))}n&&L.test(n)&&(y=n.match(L)[1]);let k=t&&t.replace(/language-/,"");!k&&r.defaultLanguage&&(k=r.defaultLanguage);let E=b.replace(/\n$/,"");if(0===h.length&&void 0!==k){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return B(["js","jsBlock"]);case"jsx":case"tsx":return B(["js","jsBlock","jsx"]);case"html":return B(["js","jsBlock","html"]);case"python":case"py":return B(["python"]);default:return B()}})(k),n=b.replace(/\n$/,"").split("\n");let a;for(let o=0;o<n.length;){const r=o+1,l=n[o].match(t);if(null!==l){switch(l.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${r},`;break;case"highlight-start":a=r;break;case"highlight-end":e+=`${a}-${r-1},`}n.splice(o,1)}else o+=1}h=v()(e),E=n.join("\n")}const C=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let r=!1;o.rangeCount>0&&(r=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),r&&(o.removeAllRanges(),o.addRange(r)),a&&a.focus()}(E),p(!0),setTimeout((()=>p(!1)),2e3)};return o.a.createElement(f,Object(l.a)({},i,{key:String(u),theme:g,code:E,language:k}),(({className:e,style:t,tokens:n,getLineProps:a,getTokenProps:r})=>o.a.createElement("div",{className:T.a.codeBlockContainer},y&&o.a.createElement("div",{style:t,className:T.a.codeBlockTitle},y),o.a.createElement("div",{className:Object(c.a)(T.a.codeBlockContent,k)},o.a.createElement("div",{tabIndex:0,className:Object(c.a)(e,T.a.codeBlock,"thin-scrollbar",{[T.a.codeBlockWithTitle]:y})},o.a.createElement("div",{className:T.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=a({line:e,key:t});return h.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),o.a.createElement("div",Object(l.a)({key:t},n),e.map(((e,t)=>o.a.createElement("span",Object(l.a)({key:t},r({token:e,key:t}))))))})))),o.a.createElement("button",{ref:m,type:"button","aria-label":Object(N.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(c.a)(T.a.copyButton),onClick:C},s?o.a.createElement(N.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.a.createElement(N.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}n(57);var S=n(58),$=n.n(S);var _=e=>function({id:t,...n}){const{navbar:{hideOnScroll:a}}=Object(j.useThemeConfig)();return t?o.a.createElement(e,n,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(c.a)("anchor",{[$.a.enhancedAnchor]:!a}),id:t}),n.children,o.a.createElement("a",{className:"hash-link",href:`#${t}`,title:Object(N.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.a.createElement(e,n)};const P={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?o.a.createElement(w,e):o.a.createElement("code",e):t},a:e=>o.a.createElement(r.a,e),pre:e=>{const{children:t}=e;return o.a.createElement(w,Object(a.isValidElement)(t)?null==t?void 0:t.props:{children:t})},h1:_("h1"),h2:_("h2"),h3:_("h3"),h4:_("h4"),h5:_("h5"),h6:_("h6")};t.a=P},114:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(99);var l=function(e,t,n){const[o,r]=Object(a.useState)(void 0);Object(a.useEffect)((()=>{function a(){const a=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=n}));if(t){if(t.getBoundingClientRect().top>=n){const n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(a){let n=0,l=!1;const c=document.getElementsByClassName(e);for(;n<c.length&&!l;){const e=c[n],{href:s}=e,i=decodeURIComponent(s.substring(s.indexOf("#")+1));a.id===i&&(o&&o.classList.remove(t),e.classList.add(t),r(e),l=!0),n+=1}}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},c=n(60),s=n.n(c);const i="table-of-contents__link";function p({toc:e,isChild:t}){return e.length?o.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>o.a.createElement("li",{key:e.id},o.a.createElement("a",{href:`#${e.id}`,className:i,dangerouslySetInnerHTML:{__html:e.value}}),o.a.createElement(p,{isChild:!0,toc:e.children}))))):null}t.a=function({toc:e}){return l(i,"table-of-contents__link--active",100),o.a.createElement("div",{className:Object(r.a)(s.a.tableOfContents,"thin-scrollbar")},o.a.createElement(p,{toc:e}))}},78:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(107),l=n(102),c=n(105),s=n(114);t.default=function(e){const{content:t}=e,{frontMatter:n,metadata:a}=t,{title:i,description:p,wrapperClassName:u,hide_table_of_contents:d}=n,{permalink:m}=a;return o.a.createElement(r.a,{title:i,description:p,permalink:m,wrapperClassName:u},o.a.createElement("main",null,o.a.createElement("div",{className:"container container--fluid"},o.a.createElement("div",{className:"margin-vert--lg padding-vert--lg"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col--8 col--offset-2"},o.a.createElement("div",{className:"container"},o.a.createElement(l.a,{components:c.a},o.a.createElement(t,null)))),!d&&t.toc&&o.a.createElement("div",{className:"col col--2"},o.a.createElement(s.a,{toc:t.toc})))))))}}}]);