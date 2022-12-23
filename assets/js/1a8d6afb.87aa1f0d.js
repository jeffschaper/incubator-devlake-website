"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2613],{56140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));n(61839);const r={title:"PagerDuty",description:"PagerDuty Plugin\n"},l=void 0,o={unversionedId:"Plugins/pagerduty",id:"Plugins/pagerduty",title:"PagerDuty",description:"PagerDuty Plugin\n",source:"@site/docs/Plugins/pagerduty.md",sourceDirName:"Plugins",slug:"/Plugins/pagerduty",permalink:"/docs/next/Plugins/pagerduty",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Plugins/pagerduty.md",tags:[],version:"current",frontMatter:{title:"PagerDuty",description:"PagerDuty Plugin\n"},sidebar:"docsSidebar",previous:{title:"Jira",permalink:"/docs/next/Plugins/jira"},next:{title:"RefDiff",permalink:"/docs/next/Plugins/refdiff"}},s={},p=[{value:"Summary",id:"summary",level:2},{value:"Usage via DevLake API",id:"usage-via-devlake-api",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This plugin collects all incidents from PagerDuty, and uses them to compute incident-type DORA metrics. These include\n",(0,i.kt)("a",{parentName:"p",href:"/docs/next/Metrics/MTTR"},"Median time to restore service")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/Metrics/CFR"},"Change failure rate"),"."),(0,i.kt)("p",null,"As of v0.15.x, the ",(0,i.kt)("inlineCode",{parentName:"p"},"PagerDuty")," plugin can only be invoked through the DevLake API. Its support in Config-UI is WIP."),(0,i.kt)("h2",{id:"usage-via-devlake-api"},"Usage via DevLake API"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Please replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),' in the sample requests with your actual DevLake API endpoint. For how to view DevLake API\'s swagger documentation, please refer to the "Using DevLake API" section of ',(0,i.kt)("a",{parentName:"p",href:"/docs/next/DeveloperManuals/DeveloperSetup"},"Developer Setup"),".")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a PagerDuty data connection: ",(0,i.kt)("inlineCode",{parentName:"li"},"POST /plugins/pagerduty/connections"),". Please see a sample request below:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl --location --request POST \'http://localhost:8080/plugins/pagerduty/connections\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "name": "PagerDuty-test1",\n    "endpoint": "https://api.PagerDuty.com",\n    "token": "<api-access-token>"\n}\'\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Create a blueprint to collect data from PagerDuty: ",(0,i.kt)("inlineCode",{parentName:"li"},"POST /blueprints"),". Please see a sample request below:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl --location --request POST \'http://localhost:8080/blueprints\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "cronConfig": "manual",\n    "enable": true,\n    "isManual": true,\n    "mode": "NORMAL",\n    "name": "test-blueprint",\n    "settings": {\n        "connections": [\n            {\n                "connectionId": 1,\n                "plugin": "PagerDuty",\n                "scope": [\n                    {\n                        "entities": [\n                            "TICKET"\n                        ],\n                        "options": {\n                            "connectionId": 1,\n                            "start_date": "2022-06-01T15:04:05Z"\n                        }\n                    }\n                ]\n            }\n        ],\n        "version": "1.0.0"\n    }\n}\'\n')),(0,i.kt)("p",null,"Here ",(0,i.kt)("inlineCode",{parentName:"p"},"start_date")," is the time sinch which all created incidents will be collected. Entities may be blank: the only\nallowed entity is ",(0,i.kt)("inlineCode",{parentName:"p"},'"TICKET"')," which will be used as default."),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"[Optional]"," Trigger the blueprint manually: ",(0,i.kt)("inlineCode",{parentName:"li"},"POST /blueprints/{blueprintId}/trigger"),". Run this step if you want to trigger the newly created blueprint right away. See an example request below:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl --location --request POST 'http://localhost:8080/blueprints/<blueprintId>/trigger' \\\n--header 'Content-Type: application/json'\n")),(0,i.kt)("p",null,"Note the incidents are extracted from the ",(0,i.kt)("inlineCode",{parentName:"p"},"issues")," table in MySQL with the condition ",(0,i.kt)("inlineCode",{parentName:"p"},"type = 'INCIDENT'"),"."))}c.isMDXComponent=!0}}]);