"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[9823],{91260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));n(61839);const l={title:"DORA - Change Failure Rate",description:"DORA - Change Failure Rate\n",sidebar_position:21},r=void 0,o={unversionedId:"Metrics/CFR",id:"version-v0.14/Metrics/CFR",title:"DORA - Change Failure Rate",description:"DORA - Change Failure Rate\n",source:"@site/versioned_docs/version-v0.14/Metrics/CFR.md",sourceDirName:"Metrics",slug:"/Metrics/CFR",permalink:"/zh/docs/v0.14/Metrics/CFR",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.14/Metrics/CFR.md",tags:[],version:"v0.14",sidebarPosition:21,frontMatter:{title:"DORA - Change Failure Rate",description:"DORA - Change Failure Rate\n",sidebar_position:21},sidebar:"docsSidebar",previous:{title:"DORA - Median Time to Restore Service",permalink:"/zh/docs/v0.14/Metrics/MTTR"},next:{title:"Data Models",permalink:"/zh/docs/v0.14/DataModels"}},s={},d=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],u={toc:d};function c(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,i.kt)("p",null,"The percentage of changes that were made to a code that then resulted in incidents, rollbacks, or any type of production failure."),(0,i.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,i.kt)("p",null,"Unlike Deployment Frequency and Lead Time for Changes that measure the throughput, Change Failure Rate measures the stability and quality of software delivery. A low CFR reflects a bad end-user experience as the production failure is relatively high."),(0,i.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,i.kt)("p",null,"DORA dashboard. See ",(0,i.kt)("a",{parentName:"p",href:"https://grafana-lake.demo.devlake.io/grafana/d/qNo8_0M4z/dora?orgId=1"},"live demo"),"."),(0,i.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,i.kt)("p",null,"The number of failures per the number of deployments. For example, if there are five deployments in a day and one causes a failure, that is a 20% change failure rate."),(0,i.kt)("p",null,"Below are the benchmarks for different development teams from Google's report. However, it's difficult to tell which group a team falls into when the team's change failure rate is ",(0,i.kt)("inlineCode",{parentName:"p"},"18%")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"40%"),". Therefore, DevLake provides its own benchmarks to address this problem:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Groups"),(0,i.kt)("th",{parentName:"tr",align:null},"Benchmarks"),(0,i.kt)("th",{parentName:"tr",align:null},"DevLake Benchmarks"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Elite performers"),(0,i.kt)("td",{parentName:"tr",align:null},"0%-15%"),(0,i.kt)("td",{parentName:"tr",align:null},"0%-15%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"High performers"),(0,i.kt)("td",{parentName:"tr",align:null},"16%-30%"),(0,i.kt)("td",{parentName:"tr",align:null},"16-20%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Medium performers"),(0,i.kt)("td",{parentName:"tr",align:null},"16%-30%"),(0,i.kt)("td",{parentName:"tr",align:null},"21%-30%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Low performers"),(0,i.kt)("td",{parentName:"tr",align:null},"16%-30%"),(0,i.kt)("td",{parentName:"tr",align:null},"> 30%")))),(0,i.kt)("p",null,(0,i.kt)("i",null,"Source: 2021 Accelerate State of DevOps, Google")),(0,i.kt)("b",null,"Data Sources Required"),(0,i.kt)("p",null,"This metric relies on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Deployments")," collected in one of the following ways:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Open APIs of Jenkins, GitLab, GitHub, etc."),(0,i.kt)("li",{parentName:"ul"},"Webhook for general CI tools."),(0,i.kt)("li",{parentName:"ul"},"Releases and PR/MRs from GitHub, GitLab APIs, etc."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Incidents")," collected in one of the following ways:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Issue tracking tools such as Jira, TAPD, GitHub, etc."),(0,i.kt)("li",{parentName:"ul"},"Bug or Service Monitoring tools such as PagerDuty, Sentry, etc."),(0,i.kt)("li",{parentName:"ul"},"CI pipelines that marked the 'failed' deployments.")))),(0,i.kt)("b",null,"Transformation Rules Required"),(0,i.kt)("p",null,"This metric relies on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deployment configuration in Jenkins, GitLab or GitHub transformation rules to let DevLake know what CI builds/jobs can be regarded as ",(0,i.kt)("inlineCode",{parentName:"li"},"Deployments"),"."),(0,i.kt)("li",{parentName:"ul"},"Incident configuration in Jira, GitHub or TAPD transformation rules to let DevLake know what CI builds/jobs can be regarded as ",(0,i.kt)("inlineCode",{parentName:"li"},"Incidents"),".")),(0,i.kt)("b",null,"SQL Queries"),(0,i.kt)("p",null,"If you want to measure the monthly trend of change failure rate as the picture shown below, run the following SQL in Grafana."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(81282).Z,width:"1350",height:"602"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"with _deployments as (\n-- get the deployment count each month\n    SELECT\n        date_format(finished_date,'%y/%m') as month,\n        COUNT(distinct id) AS deployment_count\n    FROM\n        cicd_tasks\n    WHERE\n        type = 'DEPLOYMENT'\n        and result = 'SUCCESS'\n    GROUP BY 1\n),\n\n_incidents as (\n-- get the incident count each month\n    SELECT\n        date_format(created_date,'%y/%m') as month,\n        COUNT(distinct id) AS incident_count\n    FROM\n        issues\n    WHERE\n        type = 'INCIDENT'\n    GROUP BY 1\n),\n\n_calendar_months as(\n-- deal with the month with no incidents\n    SELECT date_format(CAST((SYSDATE()-INTERVAL (month_index) MONTH) AS date), '%y/%m') as month\n    FROM ( SELECT 0 month_index\n            UNION ALL SELECT   1  UNION ALL SELECT   2 UNION ALL SELECT   3\n            UNION ALL SELECT   4  UNION ALL SELECT   5 UNION ALL SELECT   6\n            UNION ALL SELECT   7  UNION ALL SELECT   8 UNION ALL SELECT   9\n            UNION ALL SELECT   10 UNION ALL SELECT  11\n        ) month_index\n    WHERE (SYSDATE()-INTERVAL (month_index) MONTH) > SYSDATE()-INTERVAL 6 MONTH \n)\n\nSELECT \n    cm.month,\n    case \n        when d.deployment_count is null or i.incident_count is null then 0 \n        else i.incident_count/d.deployment_count end as change_failure_rate\nFROM \n    _calendar_months cm\n    left join _incidents i on cm.month = i.month\n    left join _deployments d on cm.month = d.month\nORDER BY 1\n")),(0,i.kt)("p",null,"If you want to measure in which category your team falls into as the picture shown below, run the following SQL in Grafana."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(81282).Z,width:"1350",height:"602"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'with _deployment_count as (\n-- get the deployment deployed within the selected time period in the top-right corner\n    SELECT\n        COUNT(distinct id) AS deployment_count\n    FROM\n        cicd_tasks\n    WHERE\n        type = \'DEPLOYMENT\'\n        and result = \'SUCCESS\'\n    and $__timeFilter(finished_date)\n),\n\n_incident_count as (\n-- get the incident created within the selected time period in the top-right corner\n    SELECT\n        COUNT(distinct id) AS incident_count\n    FROM\n        issues\n    WHERE\n        type = \'INCIDENT\'\n        and $__timeFilter(created_date)\n)\n\nSELECT \n    case \n        when deployment_count is null or incident_count is null or deployment_count = 0 then NULL \n        when incident_count/deployment_count <= .15 then "0-15%"\n        when incident_count/deployment_count <= .20 then "16%-20%"\n        when incident_count/deployment_count <= .30 then "21%-30%"\n        else "> 30%"\n        end as change_failure_rate\nFROM \n    _deployment_count, _incident_count\n')),(0,i.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add unit tests for all new feature"),(0,i.kt)("li",{parentName:"ul"},'"Shift left", start QA early and introduce more automated tests'),(0,i.kt)("li",{parentName:"ul"},"Enforce code review if it's not strictly executed")))}c.isMDXComponent=!0},81282:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cfr-monthly-d41ef2d475e064ee64b4548598e8b7c7.jpeg"}}]);