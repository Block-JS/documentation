"use strict";(self.webpackChunkblockjs_docs=self.webpackChunkblockjs_docs||[]).push([[809],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,s(s({ref:e},p),{},{components:r})):n.createElement(f,s({ref:e},p))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a.mdxType="string"==typeof t?t:o,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5647:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:2},s="2. Creating your first script",a={unversionedId:"quickstart/first_script",id:"quickstart/first_script",title:"2. Creating your first script",description:"Create a file in your scripts directory called test.js.",source:"@site/docs/quickstart/first_script.md",sourceDirName:"quickstart",slug:"/quickstart/first_script",permalink:"/docs/quickstart/first_script",draft:!1,editUrl:"https://block-js.github.io/docs/docs/quickstart/first_script.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Setting up enviorment",permalink:"/docs/quickstart/env_setup"},next:{title:"TypeScript",permalink:"/docs/other/typescript"}},c={},l=[{value:"Importing BlockJS",id:"importing-blockjs",level:2},{value:"Broadcasting to chat",id:"broadcasting-to-chat",level:2},{value:"Running your scripts",id:"running-your-scripts",level:2}],p={toc:l};function u(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2-creating-your-first-script"},"2. Creating your first script"),(0,o.kt)("p",null,"Create a file in your ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"test.js"),"."),(0,o.kt)("h2",{id:"importing-blockjs"},"Importing BlockJS"),(0,o.kt)("p",null,"In your ",(0,o.kt)("inlineCode",{parentName:"p"},"test.js")," file, add this line of code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="test.js"',title:'"test.js"'},"const blockjs = require('blockjs-mc');\n")),(0,o.kt)("p",null,"Note the use of the old CommonJS syntax of using ",(0,o.kt)("inlineCode",{parentName:"p"},"require()")," instead of the ECMAScript modules ",(0,o.kt)("inlineCode",{parentName:"p"},"import/export"),". Due to a strange quirk of the tool BlockJS uses to run JavaScript code, ECMAScript modules are not supported unless you use TypeScript (more on that later) or another tool like Babel."),(0,o.kt)("h2",{id:"broadcasting-to-chat"},"Broadcasting to chat"),(0,o.kt)("p",null,"Back in the ",(0,o.kt)("inlineCode",{parentName:"p"},"test.js")," file, you can use the function ",(0,o.kt)("inlineCode",{parentName:"p"},"blockjs.chat.broadcast()")," to broadcast messages to chat. Here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="test.js"',title:'"test.js"'},'blockjs.chat.broadcast("Hello world~");\n')),(0,o.kt)("p",null,"After these two lines of code, your ",(0,o.kt)("inlineCode",{parentName:"p"},"test.js")," file should look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="test.js"',title:'"test.js"'},"const blockjs = require('blockjs-mc');\n\nblockjs.chat.broadcast(\"Hello world~\");\n")),(0,o.kt)("h2",{id:"running-your-scripts"},"Running your scripts"),(0,o.kt)("p",null,"On your Minecraft server itself, run ",(0,o.kt)("inlineCode",{parentName:"p"},"/blockjs test"),". This command runs all availible scripts in the ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," directory. After running this command, you should see the message you had put in your test file broadcasted into chat. It's that easy!"))}u.isMDXComponent=!0}}]);