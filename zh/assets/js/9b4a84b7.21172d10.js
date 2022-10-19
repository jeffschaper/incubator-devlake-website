"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[370],{71513:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>c});var i=a(87462),o=(a(67294),a(3905));a(61839);const r={title:"Architecture",description:"Understand the architecture of Apache DevLake\n",sidebar_position:2},s=void 0,n={unversionedId:"Overview/Architecture",id:"version-v0.12/Overview/Architecture",title:"Architecture",description:"Understand the architecture of Apache DevLake\n",source:"@site/versioned_docs/version-v0.12/Overview/Architecture.md",sourceDirName:"Overview",slug:"/Overview/Architecture",permalink:"/zh/docs/v0.12/Overview/Architecture",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.12/Overview/Architecture.md",tags:[],version:"v0.12",sidebarPosition:2,frontMatter:{title:"Architecture",description:"Understand the architecture of Apache DevLake\n",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/zh/docs/v0.12/Overview/Introduction"},next:{title:"Roadmap",permalink:"/zh/docs/v0.12/Overview/Roadmap"}},l={},c=[{value:"Architecture Overview",id:"architecture-overview",level:2},{value:"Dataflow",id:"dataflow",level:2},{value:"Principles",id:"principles",level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"architecture-overview"},"Architecture Overview"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/Architecture/arch-component.svg"})),(0,o.kt)("p",{align:"center"},"DevLake Components"),(0,o.kt)("p",null,"A DevLake installation typically consists of the following components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Config UI: A handy user interface to create, trigger, and debug Blueprints. A Blueprint specifies the where (data connection), what (data scope), how (transformation rule), and when (sync frequency) of a data pipeline."),(0,o.kt)("li",{parentName:"ul"},"API Server: The main programmatic interface of DevLake."),(0,o.kt)("li",{parentName:"ul"},"Runner: The runner does all the heavy-lifting for executing tasks. In the default DevLake installation, it runs within the API Server, but DevLake provides a temporal-based runner (beta) for production environments."),(0,o.kt)("li",{parentName:"ul"},"Database: The database stores both DevLake's metadata and user data collected by data pipelines. DevLake supports MySQL and PostgreSQL as of v0.11."),(0,o.kt)("li",{parentName:"ul"},"Plugins: Plugins enable DevLake to collect and analyze dev data from any DevOps tools with an accessible API. DevLake community is actively adding plugins for popular DevOps tools, but if your preferred tool is not covered yet, feel free to open a GitHub issue to let us know or check out our doc on how to build a new plugin by yourself."),(0,o.kt)("li",{parentName:"ul"},"Dashboards: Dashboards deliver data and insights to DevLake users. A dashboard is simply a collection of SQL queries along with corresponding visualization configurations. DevLake's official dashboard tool is Grafana and pre-built dashboards are shipped in Grafana's JSON format. Users are welcome to swap for their own choice of dashboard/BI tool if desired.")),(0,o.kt)("h2",{id:"dataflow"},"Dataflow"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/Architecture/arch-dataflow.svg"})),(0,o.kt)("p",{align:"center"},"DevLake Dataflow"),(0,o.kt)("p",null,"A typical plugin's dataflow is illustrated below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The Raw layer stores the API responses from data sources (DevOps tools) in JSON. This saves developers' time if the raw data is to be transformed differently later on. Please note that communicating with data sources' APIs is usually the most time-consuming step."),(0,o.kt)("li",{parentName:"ol"},"The Tool layer extracts raw data from JSONs into a relational schema that's easier to consume by analytical tasks. Each DevOps tool would have a schema that's tailored to their data structure, hence the name, the Tool layer."),(0,o.kt)("li",{parentName:"ol"},"The Domain layer attempts to build a layer of abstraction on top of the Tool layer so that analytics logics can be re-used across different tools. For example, GitHub's Pull Request (PR) and GitLab's Merge Request (MR) are similar entities. They each have their own table name and schema in the Tool layer, but they're consolidated into a single entity in the Domain layer, so that developers only need to implement metrics like Cycle Time and Code Review Rounds once against the domain layer schema.")),(0,o.kt)("h2",{id:"principles"},"Principles"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Extensible: DevLake's plugin system allows users to integrate with any DevOps tool. DevLake also provides a dbt plugin that enables users to define their own data transformation and analysis workflows."),(0,o.kt)("li",{parentName:"ol"},"Portable: DevLake has a modular design and provides multiple options for each module. Users of different setups can freely choose the right configuration for themselves."),(0,o.kt)("li",{parentName:"ol"},"Robust: DevLake provides an SDK to help plugins efficiently and reliably collect data from data sources while respecting their API rate limits and constraints.")),(0,o.kt)("br",null))}u.isMDXComponent=!0}}]);