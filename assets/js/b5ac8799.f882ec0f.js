"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[724],{9310:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=t(87462),o=(t(67294),t(3905));t(61839);const i={sidebar_position:7,title:"Glossary",linkTitle:"Glossary",description:"DevLake Glossary\n"},r=void 0,s={unversionedId:"Glossary",id:"Glossary",title:"Glossary",description:"DevLake Glossary\n",source:"@site/docs/Glossary.md",sourceDirName:".",slug:"/Glossary",permalink:"/docs/next/Glossary",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Glossary.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Glossary",linkTitle:"Glossary",description:"DevLake Glossary\n"},sidebar:"docsSidebar",previous:{title:"System Tables",permalink:"/docs/next/DataModels/SystemTables"},next:{title:"Developer Manuals",permalink:"/docs/next/DeveloperManuals"}},l={},d=[{value:"In Configuration UI (Regular Mode)",id:"in-configuration-ui-regular-mode",level:2},{value:"Blueprints",id:"blueprints",level:3},{value:"Data Sources",id:"data-sources",level:3},{value:"Data Connections",id:"data-connections",level:3},{value:"Data Scope",id:"data-scope",level:3},{value:"Data Entities",id:"data-entities",level:3},{value:"Transformation Rules",id:"transformation-rules",level:3},{value:"Historical Runs",id:"historical-runs",level:3},{value:"In Configuration UI (Advanced Mode) and API",id:"in-configuration-ui-advanced-mode-and-api",level:2},{value:"Data Plugins",id:"data-plugins",level:3},{value:"Pipelines",id:"pipelines",level:3},{value:"Stages",id:"stages",level:3},{value:"Tasks",id:"tasks",level:3},{value:"Subtasks",id:"subtasks",level:3}],u={toc:d};function p(e){let{components:a,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Last updated: May 16 2022")),(0,o.kt)("h2",{id:"in-configuration-ui-regular-mode"},"In Configuration UI (Regular Mode)"),(0,o.kt)("p",null,"The following terms are arranged in the order of their appearance in the actual user workflow."),(0,o.kt)("h3",{id:"blueprints"},"Blueprints"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A blueprint is the plan that covers all the work to get your raw data ready for query and metric computation in the dashboards.")," Creating a blueprint consists of four steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Adding ",(0,o.kt)("a",{parentName:"strong",href:"/docs/next/Glossary#data-connections"},"Data Connections")),": For each ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/Glossary#data-sources"},"data source"),", one or more data connections can be added to a single blueprint, depending on the data you want to sync to DevLake."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Setting the ",(0,o.kt)("a",{parentName:"strong",href:"/docs/next/Glossary#data-scope"},"Data Scope")),": For each data connection, you need to configure the scope of data, such as GitHub projects, Jira boards, and their corresponding ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/Glossary#data-entities"},"data entities"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Adding ",(0,o.kt)("a",{parentName:"strong",href:"/docs/next/Glossary#transformation-rules"},"Transformation Rules")," (optional)"),": You can optionally apply transformation for the data scope you have just selected, in order to view more advanced metrics."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Setting the Sync Frequency"),": You can specify the sync frequency for your blueprint to achieve recurring data syncs and transformation. Alternatively, you can set the frequency to manual if you wish to run the tasks in the blueprint manually.")),(0,o.kt)("p",null,"The relationship among Blueprint, Data Connections, Data Scope and Transformation Rules is explained as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Blueprint ERD",src:t(20187).Z,width:"1008",height:"468"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each blueprint can have multiple data connections."),(0,o.kt)("li",{parentName:"ul"},"Each data connection can have multiple sets of data scope."),(0,o.kt)("li",{parentName:"ul"},"Each set of data scope only consists of one GitHub/GitLab project or Jira board, along with their corresponding data entities."),(0,o.kt)("li",{parentName:"ul"},"Each set of data scope can only have one set of transformation rules.")),(0,o.kt)("h3",{id:"data-sources"},"Data Sources"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A data source is a specific DevOps tool from which you wish to sync your data, such as GitHub, GitLab, Jira and Jenkins.")),(0,o.kt)("p",null,"DevLake normally uses one ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/Glossary#data-plugins"},"data plugin")," to pull data for a single data source. However, in some cases, DevLake uses multiple data plugins for one data source for the purpose of improved sync speed, among many other advantages. For instance, when you pull data from GitHub or GitLab, aside from the GitHub or GitLab plugin, Git Extractor is also used to pull data from the repositories. In this case, DevLake still refers GitHub or GitLab as a single data source."),(0,o.kt)("h3",{id:"data-connections"},"Data Connections"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A data connection is a specific instance of a data source that stores information such as ",(0,o.kt)("inlineCode",{parentName:"strong"},"endpoint")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"auth"),".")," A single data source can have one or more data connections (e.g. two Jira instances). Currently, DevLake supports one data connection for GitHub, GitLab and Jenkins, and multiple connections for Jira."),(0,o.kt)("p",null,"You can set up a new data connection either during the first step of creating a blueprint, or in the Connections page that can be accessed from the navigation bar. Because one single data connection can be reused in multiple blueprints, you can update the information of a particular data connection in Connections, to ensure all its associated blueprints will run properly. For example, you may want to update your GitHub token in a data connection if it goes expired."),(0,o.kt)("h3",{id:"data-scope"},"Data Scope"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In a blueprint, each data connection can have multiple sets of data scope configurations, including GitHub or GitLab projects, Jira boards and their corresponding ",(0,o.kt)("a",{parentName:"strong",href:"/docs/next/Glossary#data-entities"},"data entities"),".")," The fields for data scope configuration vary according to different data sources."),(0,o.kt)("p",null,"Each set of data scope refers to one GitHub or GitLab project, or one Jira board and the data entities you would like to sync for them, for the convenience of applying transformation in the next step. For instance, if you wish to sync 5 GitHub projects, you will have 5 sets of data scope for GitHub."),(0,o.kt)("p",null,"To learn more about the default data scope of all data sources and data plugins, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/SupportedDataSources"},"Supported Data Sources"),"."),(0,o.kt)("h3",{id:"data-entities"},"Data Entities"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Data entities refer to the data fields from one of the five data domains: Issue Tracking, Source Code Management, Code Review, CI/CD and Cross-Domain.")),(0,o.kt)("p",null,"For instance, if you wish to pull Source Code Management data from GitHub and Issue Tracking data from Jira, you can check the corresponding data entities during setting the data scope of these two data connections."),(0,o.kt)("p",null,"To learn more details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/DataModels/DevLakeDomainLayerSchema"},"Domain Layer Schema"),"."),(0,o.kt)("h3",{id:"transformation-rules"},"Transformation Rules"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Transformation rules are a collection of methods that allow you to customize how DevLake normalizes raw data for query and metric computation.")," Each set of data scope is strictly accompanied with one set of transformation rules. However, for your convenience, transformation rules can also be duplicated across different sets of data scope."),(0,o.kt)("p",null,"DevLake uses these normalized values in the transformation to design more advanced dashboards, such as the Weekly Bug Retro dashboard. Although configuring transformation rules is not mandatory, if you leave the rules blank or have not configured correctly, only the basic dashboards (e.g. GitHub Basic Metrics) will be displayed as expected, while the advanced dashboards will not."),(0,o.kt)("h3",{id:"historical-runs"},"Historical Runs"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A historical run of a blueprint is an actual execution of the data collection and transformation ",(0,o.kt)("a",{parentName:"strong",href:"/docs/next/Glossary#tasks"},"tasks")," defined in the blueprint at its creation.")," A list of historical runs of a blueprint is the entire running history of that blueprint, whether executed automatically or manually. Historical runs can be triggered in three ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"By the blueprint automatically according to its schedule in the Regular Mode of the Configuration UI"),(0,o.kt)("li",{parentName:"ul"},"By running the JSON in the Advanced Mode of the Configuration UI"),(0,o.kt)("li",{parentName:"ul"},"By calling the API ",(0,o.kt)("inlineCode",{parentName:"li"},"/pipelines")," endpoint manually")),(0,o.kt)("p",null,"However, the name Historical Runs is only used in the Configuration UI. In DevLake API, they are called ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/Glossary#pipelines"},"pipelines"),"."),(0,o.kt)("h2",{id:"in-configuration-ui-advanced-mode-and-api"},"In Configuration UI (Advanced Mode) and API"),(0,o.kt)("p",null,"The following terms have not appeared in the Regular Mode of Configuration UI for simplification, but can be very useful if you want to learn about the underlying framework of Devalke or use Advanced Mode and the DevLake API."),(0,o.kt)("h3",{id:"data-plugins"},"Data Plugins"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A data plugin is a specific module that syncs or transforms data.")," There are two types of data plugins: Data Collection Plugins and Data Transformation Plugins."),(0,o.kt)("p",null,"Data Collection Plugins pull data from one or more data sources. DevLake supports 8 data plugins in this category: ",(0,o.kt)("inlineCode",{parentName:"p"},"ae"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"feishu"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"gitextractor"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"github"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"gitlab"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"jenkins"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"jira")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tapd"),"."),(0,o.kt)("p",null,"Data Transformation Plugins transform the data pulled by other Data Collection Plugins. ",(0,o.kt)("inlineCode",{parentName:"p"},"refdiff")," is currently the only plugin in this category."),(0,o.kt)("p",null,"Although the names of the data plugins are not displayed in the regular mode of DevLake Configuration UI, they can be used directly in JSON in the Advanced Mode."),(0,o.kt)("p",null,"For detailed information about the relationship between data sources and data plugins, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/SupportedDataSources"},"Supported Data Sources"),"."),(0,o.kt)("h3",{id:"pipelines"},"Pipelines"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A pipeline is an orchestration of ",(0,o.kt)("a",{parentName:"strong",href:"/docs/next/Glossary#tasks"},"tasks")," of data ",(0,o.kt)("inlineCode",{parentName:"strong"},"collection"),", ",(0,o.kt)("inlineCode",{parentName:"strong"},"extraction"),", ",(0,o.kt)("inlineCode",{parentName:"strong"},"conversion")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"enrichment"),", defined in the DevLake API.")," A pipeline is composed of one or multiple ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/Glossary#stages"},"stages")," that are executed in a sequential order. Any error occurring during the execution of any stage, task or subtask will cause the immediate fail of the pipeline."),(0,o.kt)("p",null,"The composition of a pipeline is explained as follows:\n",(0,o.kt)("img",{alt:"Blueprint ERD",src:t(3851).Z,width:"1409",height:"593"}),"\nNotice: ",(0,o.kt)("strong",{parentName:"p"},"You can manually orchestrate the pipeline in Configuration UI Advanced Mode and the DevLake API; whereas in Configuration UI regular mode, an optimized pipeline orchestration will be automatically generated for you.")),(0,o.kt)("h3",{id:"stages"},"Stages"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A stages is a collection of tasks performed by data plugins.")," Stages are executed in a sequential order in a pipeline."),(0,o.kt)("h3",{id:"tasks"},"Tasks"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A task is a collection of ",(0,o.kt)("a",{parentName:"strong",href:"/docs/next/Glossary#subtasks"},"subtasks")," that perform any of the ",(0,o.kt)("inlineCode",{parentName:"strong"},"collection"),", ",(0,o.kt)("inlineCode",{parentName:"strong"},"extraction"),", ",(0,o.kt)("inlineCode",{parentName:"strong"},"conversion")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"enrichment")," jobs of a particular data plugin.")," Tasks are executed in a parallel order in any stages."),(0,o.kt)("h3",{id:"subtasks"},"Subtasks"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A subtask is the minimal work unit in a pipeline that performs in any of the four roles: ",(0,o.kt)("inlineCode",{parentName:"strong"},"Collectors"),", ",(0,o.kt)("inlineCode",{parentName:"strong"},"Extractors"),", ",(0,o.kt)("inlineCode",{parentName:"strong"},"Converters")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"Enrichers"),".")," Subtasks are executed in sequential orders."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Collectors"),": Collect raw data from data sources, normally via DevLake API and stored into ",(0,o.kt)("inlineCode",{parentName:"li"},"raw data table")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Extractors"),": Extract data from ",(0,o.kt)("inlineCode",{parentName:"li"},"raw data table")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"domain layer tables")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Converters"),": Convert data from ",(0,o.kt)("inlineCode",{parentName:"li"},"tool layer tables")," into ",(0,o.kt)("inlineCode",{parentName:"li"},"domain layer tables")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Enrichers"),": Enrich data from one domain to other domains. For instance, the Fourier Transformation can examine ",(0,o.kt)("inlineCode",{parentName:"li"},"issue_changelog")," to show time distribution of an issue on every assignee.")))}p.isMDXComponent=!0},20187:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/blueprint-erd-a18db399245a59e78ce1edce497e2059.svg"},3851:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/pipeline-erd-63705e2232b63c7fe75197ee3e96f170.svg"}}]);