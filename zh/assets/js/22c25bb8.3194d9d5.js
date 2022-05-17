"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[554],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),k=r,d=m["".concat(p,".").concat(k)]||m[k]||c[k]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7414:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Developer Setup",linkTitle:"Developer Setup",tags:[],categories:[],weight:3,description:"The steps to install DevLake in develper mode.\n"},p=void 0,s={unversionedId:"QuickStart/DeveloperSetup",id:"QuickStart/DeveloperSetup",title:"Developer Setup",description:"The steps to install DevLake in develper mode.\n",source:"@site/docs/02-QuickStart/03-DeveloperSetup.md",sourceDirName:"02-QuickStart",slug:"/QuickStart/DeveloperSetup",permalink:"/zh/docs/QuickStart/DeveloperSetup",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Developer Setup",linkTitle:"Developer Setup",tags:[],categories:[],weight:3,description:"The steps to install DevLake in develper mode.\n"},sidebar:"docsSidebar",previous:{title:"Kubernetes Setup",permalink:"/zh/docs/QuickStart/KubernetesSetup"},next:{title:"Features",permalink:"/zh/docs/Features"}},u={},c=[{value:"Requirements",id:"requirements",level:4},{value:"How to setup dev environment",id:"how-to-setup-dev-environment",level:4}],m={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://docs.docker.com/get-docker",target:"_blank"},"Docker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://golang.org/doc/install",target:"_blank"},"Golang v1.17+")),(0,i.kt)("li",{parentName:"ul"},"Make",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Mac (Already installed)"),(0,i.kt)("li",{parentName:"ul"},"Windows: ",(0,i.kt)("a",{parentName:"li",href:"http://gnuwin32.sourceforge.net/packages/make.htm"},"Download")),(0,i.kt)("li",{parentName:"ul"},"Ubuntu: ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt-get install build-essential"))))),(0,i.kt)("h4",{id:"how-to-setup-dev-environment"},"How to setup dev environment"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to where you would like to install this project and clone the repository:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/merico-dev/lake.git\ncd lake\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install dependencies for plugins:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RefDiff")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install Go packages"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"go get\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the sample config file to new local file:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cp .env.example .env\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update the following variables in the file ",(0,i.kt)("inlineCode",{parentName:"p"},".env"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DB_URL"),": Replace ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql:3306")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"127.0.0.1:3306")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start the MySQL and Grafana containers:"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Make sure the Docker daemon is running before this step.")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose up -d mysql grafana\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run lake and config UI in dev mode in two seperate terminals:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# run lake\nmake dev\n# run config UI\nmake configure-dev\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Visit config UI at ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:4000")," to configure data sources."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Navigate to desired plugins pages on the Integrations page"),(0,i.kt)("li",{parentName:"ul"},"You will need to enter the required information for the plugins you intend to use."),(0,i.kt)("li",{parentName:"ul"},"Please reference the following for more details on how to configure each one:\n",(0,i.kt)("strong",{parentName:"li"},"jira"),(0,i.kt)("strong",{parentName:"li"},"gitlab"),(0,i.kt)("strong",{parentName:"li"},"jenkins"),(0,i.kt)("strong",{parentName:"li"},"github")))),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Submit the form to update the values by clicking on the ",(0,i.kt)("strong",{parentName:"li"},"Save Connection")," button on each form page")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Visit ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:4000/pipelines/create")," to RUN a Pipeline and trigger data collection."))),(0,i.kt)("p",null,'   Pipelines Runs can be initiated by the new "Create Run" Interface. Simply enable the ',(0,i.kt)("strong",{parentName:"p"},"Data Source Providers")," you wish to run collection for, and specify the data you want to collect, for instance, ",(0,i.kt)("strong",{parentName:"p"},"Project ID")," for Gitlab and ",(0,i.kt)("strong",{parentName:"p"},"Repository Name")," for GitHub."),(0,i.kt)("p",null,"   Once a valid pipeline configuration has been created, press ",(0,i.kt)("strong",{parentName:"p"},"Create Run")," to start/run the pipeline.\nAfter the pipeline starts, you will be automatically redirected to the ",(0,i.kt)("strong",{parentName:"p"},"Pipeline Activity")," screen to monitor collection activity."),(0,i.kt)("p",null,"   ",(0,i.kt)("strong",{parentName:"p"},"Pipelines")," is accessible from the main menu of the config-ui for easy access."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Manage All Pipelines: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:4000/pipelines"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create Pipeline RUN: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:4000/pipelines/create"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Track Pipeline Activity: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:4000/pipelines/activity/[RUN_ID]")),(0,i.kt)("p",{parentName:"li"},"For advanced use cases and complex pipelines, please use the Raw JSON API to manually initiate a run using ",(0,i.kt)("strong",{parentName:"p"},"cURL")," or graphical API tool such as ",(0,i.kt)("strong",{parentName:"p"},"Postman"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," the following request to the DevLake API Endpoint."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    [\n        {\n            "plugin": "github",\n            "options": {\n                "repo": "lake",\n                "owner": "merico-dev"\n            }\n        }\n    ]\n]\n')),(0,i.kt)("p",{parentName:"li"},"Please refer to this wiki ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/merico-dev/lake/wiki/How-to-use-the-triggers-page"},"How to trigger data collection"),"."))),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("em",{parentName:"p"},"View Dashboards")," button in the top left when done, or visit ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:3002")," (username: ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),", password: ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),")."),(0,i.kt)("p",{parentName:"li"},"We use ",(0,i.kt)("a",{href:"https://grafana.com/",target:"_blank"},"Grafana")," as a visualization tool to build charts for the ",(0,i.kt)("a",{href:"https://github.com/merico-dev/lake/wiki/DataModel.Domain-layer-schema"},"data stored in our database"),". Using SQL queries, we can add panels to build, save, and edit customized dashboards."),(0,i.kt)("p",{parentName:"li"},"All the details on provisioning and customizing a dashboard can be found in the ",(0,i.kt)("strong",{parentName:"p"},"Grafana Doc")))),(0,i.kt)("ol",{start:10},(0,i.kt)("li",{parentName:"ol"},"(Optional) To run the tests:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"make test\n")),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("br",null))}k.isMDXComponent=!0}}]);