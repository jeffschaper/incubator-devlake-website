"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[947],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,k=c["".concat(u,".").concat(m)]||c[m]||p[m]||o;return r?n.createElement(k,l(l({ref:t},d),{},{components:r})):n.createElement(k,l({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5502:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={title:"Roadmap",linkTitle:"Roadmap",tags:[],categories:[],weight:3,description:"The goals and roadmap for DevLake in 2022.\n"},u=void 0,s={unversionedId:"Overview/Roadmap",id:"Overview/Roadmap",title:"Roadmap",description:"The goals and roadmap for DevLake in 2022.\n",source:"@site/docs/01-Overview/03-Roadmap.md",sourceDirName:"01-Overview",slug:"/Overview/Roadmap",permalink:"/docs/Overview/Roadmap",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Roadmap",linkTitle:"Roadmap",tags:[],categories:[],weight:3,description:"The goals and roadmap for DevLake in 2022.\n"},sidebar:"docsSidebar",previous:{title:"Architecture",permalink:"/docs/Overview/Architecture"},next:{title:"Local Setup",permalink:"/docs/QuickStart/LocalSetup"}},d={},p=[{value:"Goals",id:"goals",level:2},{value:"DevLake 2022 Roadmap",id:"devlake-2022-roadmap",level:2},{value:"How to Influence Roadmap",id:"how-to-influence-roadmap",level:2}],c={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"goals"},"Goals"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Moving to Apache Incubator and making DevLake a graduation-ready project."),(0,o.kt)("li",{parentName:"ol"},"Explore and implement 3 typical use scenarios to help certain engineering teams and developers:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Observation of open-source project contribution and quality"),(0,o.kt)("li",{parentName:"ul"},"DORA metrics for the DevOps team"),(0,o.kt)("li",{parentName:"ul"},"SDLC workflow monitoring and improvement"))),(0,o.kt)("li",{parentName:"ol"},"Better UX for end-users and contributors.")),(0,o.kt)("h2",{id:"devlake-2022-roadmap"},"DevLake 2022 Roadmap"),(0,o.kt)("p",null,"DevLake is currently under rapid development. This page describes the project\u2019s public roadmap, the result of an ongoing collaboration between the core maintainers and the broader DevLake community.",(0,o.kt)("br",null),(0,o.kt)("br",null),"\nThis roadmap is broken down by the goals in the last section."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Category"),(0,o.kt)("th",{parentName:"tr",align:null},"Features"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"More data sources across different ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/merico-dev/lake/wiki/DevOps-Domain-Definition"},"DevOps domains")),(0,o.kt)("td",{parentName:"tr",align:null},"1. ",(0,o.kt)("strong",{parentName:"td"},"Issue/Task Management - Jira server")," ",(0,o.kt)("br",null)," 2. ",(0,o.kt)("strong",{parentName:"td"},"Issue/Task Management - Jira data center")," ",(0,o.kt)("br",null)," 3. Issue/Task Management - GitLab Issues ",(0,o.kt)("br",null)," 4. Issue/Task Management - Trello ",(0,o.kt)("br",null)," 5. ",(0,o.kt)("strong",{parentName:"td"},"Issue/Task Management - TPAD")," ",(0,o.kt)("br",null)," 6. Issue/Task Management - Teambition ",(0,o.kt)("br",null)," 7. Issue/Task Management - Trello ",(0,o.kt)("br",null)," 8. ",(0,o.kt)("strong",{parentName:"td"},"Source Code Management - GitLab on-premise")," ",(0,o.kt)("br",null)," 9. Source Code Management - BitBucket ",(0,o.kt)("br",null)," 10. Source Code Management - Gitee ",(0,o.kt)("br",null)," 11. Code Review - Gerrit ",(0,o.kt)("br",null)," 12. Code Review - GitLab on-premise MRs ",(0,o.kt)("br",null)," 13. ",(0,o.kt)("strong",{parentName:"td"},"CI/CD - GitHub Action")," ",(0,o.kt)("br",null)," 14. CI/CD - ArgoCI ",(0,o.kt)("br",null)," 15. CI/CD - ArgoCD ",(0,o.kt)("br",null)," 16. CI/CD - TeamCity ",(0,o.kt)("br",null)," 17. ",(0,o.kt)("strong",{parentName:"td"},"Quality - SonarQube")," ",(0,o.kt)("br",null)," 18. Quality - Fossa ",(0,o.kt)("br",null)," 19. QA - Selenium ",(0,o.kt)("br",null)," 20. QA - Junit ",(0,o.kt)("br",null)," 21. QA - JMeter ",(0,o.kt)("br",null)," 22. QA - Cucumber test ",(0,o.kt)("br",null)," 23. Calendar - Google Calendar ",(0,o.kt)("br",null)," 24. Calendar - Zoom Calendar ",(0,o.kt)("br",null)," 25. ",(0,o.kt)("strong",{parentName:"td"},"Calendar - Lark Calendar")," ",(0,o.kt)("br",null)," 26. Calendar - Tencent Calendar ",(0,o.kt)("br",null)," 27. Other - GitHub stars, clones, watches ",(0,o.kt)("br",null))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"More comprehensive and flexible ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/merico-dev/lake/issues/700"},"engineering data model")),(0,o.kt)("td",{parentName:"tr",align:null},"1. complete and polish standard data models for different ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/merico-dev/lake/wiki/DevOps-Domain-Definition"},"DevOps domains")," ",(0,o.kt)("br",null)," 2. allow users to modify standard tables ",(0,o.kt)("br",null)," 3. allow users to create new tables ",(0,o.kt)("br",null)," 4. allow users to easily define ETL rules ",(0,o.kt)("br",null))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Better UX"),(0,o.kt)("td",{parentName:"tr",align:null},"1. improve config-UI design for better onboard experience ",(0,o.kt)("br",null)," 2. improve data collection speed for Github and other plugins with strict API rate limit ",(0,o.kt)("br",null)," 3. build a website to present well-organized documentation to DevLake users and contributors ",(0,o.kt)("br",null))))),(0,o.kt)("h2",{id:"how-to-influence-roadmap"},"How to Influence Roadmap"),(0,o.kt)("p",null,"A roadmap is only useful when it captures real user needs. We are glad to hear from you if you have specific use cases, feedback, or ideas. You can submit an issue to let us know!\nAlso, if you plan to work (or are already working) on a new or existing feature, tell us, so that we can update the roadmap accordingly. We are happy to share knowledge and context to help your feature land successfully."),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null))}m.isMDXComponent=!0}}]);