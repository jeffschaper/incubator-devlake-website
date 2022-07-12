"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[506],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=n,v=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return r?a.createElement(v,o(o({ref:t},u),{},{components:r})):a.createElement(v,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7291:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],s={title:"Introduction",description:"General introduction of Apache DevLake",sidebar_position:1},c=void 0,l={unversionedId:"Overview/WhatIsDevLake",id:"version-0.11/Overview/WhatIsDevLake",title:"Introduction",description:"General introduction of Apache DevLake",source:"@site/versioned_docs/version-0.11/Overview/01-WhatIsDevLake.md",sourceDirName:"Overview",slug:"/Overview/WhatIsDevLake",permalink:"/zh/docs/0.11/Overview/WhatIsDevLake",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-0.11/Overview/01-WhatIsDevLake.md",tags:[],version:"0.11",sidebarPosition:1,frontMatter:{title:"Introduction",description:"General introduction of Apache DevLake",sidebar_position:1},sidebar:"docsSidebar",next:{title:"Architecture",permalink:"/zh/docs/0.11/Overview/Architecture"}},u={},d=[{value:"What is Apache DevLake?",id:"what-is-apache-devlake",level:2},{value:"What can be accomplished with DevLake?",id:"what-can-be-accomplished-with-devlake",level:2},{value:"How do I use DevLake?",id:"how-do-i-use-devlake",level:2},{value:"1. Set up DevLake",id:"1-set-up-devlake",level:3},{value:"2. Create a Blueprint",id:"2-create-a-blueprint",level:3},{value:"3. Track the Blueprint&#39;s progress",id:"3-track-the-blueprints-progress",level:3},{value:"4. View the pre-built dashboards",id:"4-view-the-pre-built-dashboards",level:3},{value:"5. Customize the dahsboards with SQL",id:"5-customize-the-dahsboards-with-sql",level:3}],p={toc:d};function h(e){var t=e.components,s=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-apache-devlake"},"What is Apache DevLake?"),(0,i.kt)("p",null,"Apache DevLake is an open-source dev data platform that ingests, analyzes, and visualizes the fragmented data from DevOps tools to distill insights for engineering productivity."),(0,i.kt)("p",null,"Apache DevLake is designed for developer teams looking to make better sense of their development process and to bring a more data-driven approach to their own practices. You can ask Apache DevLake many questions regarding your development process. Just connect and query."),(0,i.kt)("h2",{id:"what-can-be-accomplished-with-devlake"},"What can be accomplished with DevLake?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Collect DevOps data across the entire Software Development Life Cycle (SDLC) and connect the siloed data with a standard ",(0,i.kt)("a",{parentName:"li",href:"/zh/docs/0.11/DataModels/DevLakeDomainLayerSchema"},"data model"),"."),(0,i.kt)("li",{parentName:"ol"},"Visualize out-of-the-box engineering ",(0,i.kt)("a",{parentName:"li",href:"/zh/docs/0.11/EngineeringMetrics"},"metrics")," in a series of use-case driven dashboards"),(0,i.kt)("li",{parentName:"ol"},"Easily extend DevLake to support your data sources, metrics, and dashboards with a flexible ",(0,i.kt)("a",{parentName:"li",href:"/zh/docs/0.11/Overview/Architecture"},"framework")," for data collection and ETL.")),(0,i.kt)("h2",{id:"how-do-i-use-devlake"},"How do I use DevLake?"),(0,i.kt)("h3",{id:"1-set-up-devlake"},"1. Set up DevLake"),(0,i.kt)("p",null,"You can easily set up Apache DevLake by following our step-by step instruction for ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/0.11/QuickStart/LocalSetup"},"local setup")," or ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/0.11/QuickStart/KubernetesSetup"},"Kubernetes setup"),"."),(0,i.kt)("h3",{id:"2-create-a-blueprint"},"2. Create a Blueprint"),(0,i.kt)("p",null,"The DevLake Configuration UI will guide you through the process (a Blueprint) to define the data connections, data scope, transformation and sync frequency of the data you wish to collect."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:r(1010).Z,width:"2000",height:"1362"})),(0,i.kt)("h3",{id:"3-track-the-blueprints-progress"},"3. Track the Blueprint's progress"),(0,i.kt)("p",null,"You can track the progress of the Blueprint you have just set up."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:r(6695).Z,width:"1568",height:"803"})),(0,i.kt)("h3",{id:"4-view-the-pre-built-dashboards"},"4. View the pre-built dashboards"),(0,i.kt)("p",null,"Once the first run of the Blueprint is completed, you can view the corresponding dashboards."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:r(2418).Z,width:"3222",height:"1860"})),(0,i.kt)("h3",{id:"5-customize-the-dahsboards-with-sql"},"5. Customize the dahsboards with SQL"),(0,i.kt)("p",null,"If the pre-built dashboards are limited for your use cases, you can always customize or create your own metrics or dashboards with SQL."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:r(9029).Z,width:"3348",height:"1874"})))}h.isMDXComponent=!0},1010:function(e,t,r){t.Z=r.p+"assets/images/userflow1-3f961fd21c6512bc04afcba5762117b6.svg"},6695:function(e,t,r){t.Z=r.p+"assets/images/userflow2-14c72819bb475cdef5152129d6b3f5db.svg"},2418:function(e,t,r){t.Z=r.p+"assets/images/userflow3-0d673e4c7005bff5f852f182f765f9ca.png"},9029:function(e,t,r){t.Z=r.p+"assets/images/userflow4-f50ef92ac22e35d8c572f0d64fb0fec9.png"}}]);