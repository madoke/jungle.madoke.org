(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{104:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,l]=t;if(n&&l){n=parseInt(n),l=parseInt(l);const e=n<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=n;t!==l;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},105:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(101),s=a(3),o=a(99),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:a(23).a,theme:c};function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},g=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},h=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=u({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=u({},a,{backgroundColor:null}),r};function y(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var b=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),m(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?h(e.theme,e.language):void 0;return t.themeDict=a})),m(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,l=u({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(l.style=s.plain),void 0!==r&&(l.style=void 0!==l.style?u({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),m(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return l[a[0]];var s=n?{display:"inline-block"}:{},o=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[s].concat(o))}})),m(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,l=e.token,s=u({},y(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?u({},s.style,r):r),void 0!==a&&(s.key=a),n&&(s.className+=" "+n),s})),m(this,"tokenize",(function(e,t,a,n){var r={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,l=this.getThemeDict(this.props),s=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],l=0,s=0,o=[],c=[o];s>-1;){for(;(l=n[s]++)<r[s];){var i=void 0,m=t[s],u=a[s][l];if("string"==typeof u?(m=s>0?m:["plain"],i=u):(m=g(m,u.type),u.alias&&(m=g(m,u.alias)),i=u.content),"string"==typeof i){var h=i.split(p),y=h.length;o.push({types:m,content:h[0]});for(var b=1;b<y;b++)d(o),c.push(o=[]),o.push({types:m,content:h[b]})}else s++,t.push(m),a.push(i),n.push(0),r.push(i.length)}s--,t.pop(),a.pop(),n.pop(),r.pop()}return d(o),c}(void 0!==s?this.tokenize(t,n,s,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component);var f=a(104),v=a.n(f),k={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},E=a(108),j=a(98);var N=()=>{const{prism:e}=Object(j.useThemeConfig)(),{isDarkTheme:t}=Object(E.a)(),a=e.theme||k,n=e.darkTheme||a;return t?n:a},T=a(100),O=a(56),w=a.n(O);const x=/{([\d,-]+)}/,P=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},_=/(?:title=")(.*)(?:")/;function L({children:e,className:t,metastring:a}){const{prism:l}=Object(j.useThemeConfig)(),[c,m]=Object(n.useState)(!1),[u,p]=Object(n.useState)(!1);Object(n.useEffect)((()=>{p(!0)}),[]);const d=Object(n.useRef)(null);let g=[],h="";const y=N(),f=Array.isArray(e)?e.join(""):e;if(a&&x.test(a)){const e=a.match(x)[1];g=v()(e).filter((e=>e>0))}a&&_.test(a)&&(h=a.match(_)[1]);let k=t&&t.replace(/language-/,"");!k&&l.defaultLanguage&&(k=l.defaultLanguage);let E=f.replace(/\n$/,"");if(0===g.length&&void 0!==k){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return P(["js","jsBlock"]);case"jsx":case"tsx":return P(["js","jsBlock","jsx"]);case"html":return P(["js","jsBlock","html"]);case"python":case"py":return P(["python"]);default:return P()}})(k),a=f.replace(/\n$/,"").split("\n");let n;for(let r=0;r<a.length;){const l=r+1,s=a[r].match(t);if(null!==s){switch(s.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${l},`;break;case"highlight-start":n=l;break;case"highlight-end":e+=`${n}-${l-1},`}a.splice(r,1)}else r+=1}g=v()(e),E=a.join("\n")}const O=()=>{!function(e,{target:t=document.body}={}){const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),n&&n.focus()}(E),m(!0),setTimeout((()=>m(!1)),2e3)};return r.a.createElement(b,Object(s.a)({},i,{key:String(u),theme:y,code:E,language:k}),(({className:e,style:t,tokens:a,getLineProps:n,getTokenProps:l})=>r.a.createElement("div",{className:w.a.codeBlockContainer},h&&r.a.createElement("div",{style:t,className:w.a.codeBlockTitle},h),r.a.createElement("div",{className:Object(o.a)(w.a.codeBlockContent,k)},r.a.createElement("div",{tabIndex:0,className:Object(o.a)(e,w.a.codeBlock,"thin-scrollbar",{[w.a.codeBlockWithTitle]:h})},r.a.createElement("div",{className:w.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=n({line:e,key:t});return g.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),r.a.createElement("div",Object(s.a)({key:t},a),e.map(((e,t)=>r.a.createElement("span",Object(s.a)({key:t},l({token:e,key:t}))))))})))),r.a.createElement("button",{ref:d,type:"button","aria-label":Object(T.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(o.a)(w.a.copyButton),onClick:O},c?r.a.createElement(T.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(T.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}a(57);var C=a(58),B=a.n(C);var $=e=>function({id:t,...a}){const{navbar:{hideOnScroll:n}}=Object(j.useThemeConfig)();return t?r.a.createElement(e,a,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(o.a)("anchor",{[B.a.enhancedAnchor]:!n}),id:t}),a.children,r.a.createElement("a",{className:"hash-link",href:`#${t}`,title:Object(T.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.a.createElement(e,a)};const D={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?r.a.createElement(L,e):r.a.createElement("code",e):t},a:e=>r.a.createElement(l.a,e),pre:e=>{const{children:t}=e;return r.a.createElement(L,Object(n.isValidElement)(t)?null==t?void 0:t.props:{children:t})},h1:$("h1"),h2:$("h2"),h3:$("h3"),h4:$("h4"),h5:$("h5"),h6:$("h6")};t.a=D},109:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n),l=a(99),s=a(101),o=a(59),c=a.n(o);function i({sidebar:e}){return 0===e.items.length?null:r.a.createElement("div",{className:Object(l.a)(c.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:c.a.sidebarItemTitle},e.title),r.a.createElement("ul",{className:c.a.sidebarItemList},e.items.map((e=>r.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},r.a.createElement(s.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title))))))}},113:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(99),s=a(102),o=a(100),c=a(101),i=a(105),m=a(112),u=a(61),p=a.n(u),d=a(98);t.a=function(e){const t=function(){const{selectMessage:e}=Object(d.usePluralForm)();return t=>{const a=Math.ceil(t);return e(a,Object(o.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{children:a,frontMatter:n,metadata:u,truncated:g,isBlogPostPage:h=!1}=e,{date:y,formattedDate:b,permalink:f,tags:v,readingTime:k}=u,{author:E,title:j,image:N,keywords:T}=n,O=n.author_url||n.authorURL,w=n.author_title||n.authorTitle,x=n.author_image_url||n.authorImageURL;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{keywords:T,image:N}),r.a.createElement("article",{className:h?void 0:"margin-bottom--xl"},(()=>{const e=h?"h1":"h2";return r.a.createElement("header",null,r.a.createElement(e,{className:Object(l.a)("margin-bottom--sm",p.a.blogPostTitle)},h?j:r.a.createElement(c.a,{to:f},j)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:y,className:p.a.blogPostDate},b,k&&r.a.createElement(r.a.Fragment,null," \xb7 ",t(k)))),r.a.createElement("div",{className:"avatar margin-vert--md"},x&&r.a.createElement(c.a,{className:"avatar__photo-link avatar__photo",href:O},r.a.createElement("img",{src:x,alt:E})),r.a.createElement("div",{className:"avatar__intro"},E&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement(c.a,{href:O},E)),r.a.createElement("small",{className:"avatar__subtitle"},w)))))})(),r.a.createElement("div",{className:"markdown"},r.a.createElement(s.a,{components:i.a},a)),(v.length>0||g)&&r.a.createElement("footer",{className:"row margin-vert--lg"},v.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,r.a.createElement(o.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),v.map((({label:e,permalink:t})=>r.a.createElement(c.a,{key:t,className:"margin-horiz--sm",to:t},e)))),g&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(c.a,{to:u.permalink,"aria-label":`Read more about ${j}`},r.a.createElement("strong",null,r.a.createElement(o.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(107),s=a(113),o=a(101),c=a(109),i=a(100),m=a(98);function u({tagName:e,count:t}){const a=function(){const{selectMessage:e}=Object(m.usePluralForm)();return t=>e(t,Object(i.b)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return r.a.createElement(i.a,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:a(t),tagName:e}},'{nPosts} tagged with "{tagName}"')}t.default=function(e){const{metadata:t,items:a,sidebar:n}=e,{allTagsPath:m,name:p,count:d}=t;return r.a.createElement(l.a,{title:`Posts tagged "${p}"`,description:`Blog | Tagged "${p}"`,wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_tags_posts"}},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement(c.a,{sidebar:n})),r.a.createElement("main",{className:"col col--7"},r.a.createElement("h1",null,r.a.createElement(u,{count:d,tagName:p})),r.a.createElement(o.a,{href:m},r.a.createElement(i.a,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),r.a.createElement("div",{className:"margin-vert--xl"},a.map((({content:e})=>r.a.createElement(s.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},r.a.createElement(e,null)))))))))}}}]);