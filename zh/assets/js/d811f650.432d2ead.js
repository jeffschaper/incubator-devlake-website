"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1964],{7969:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=i(87462),a=(i(67294),i(3905));i(61839);const o={title:"BitBucket Cloud",sidebar_position:2,description:"Config UI instruction for BitBucket(Cloud)"},s=void 0,l={unversionedId:"Configuration/BitBucket",id:"Configuration/BitBucket",title:"BitBucket Cloud",description:"Config UI instruction for BitBucket(Cloud)",source:"@site/docs/Configuration/BitBucket.md",sourceDirName:"Configuration",slug:"/Configuration/BitBucket",permalink:"/zh/docs/next/Configuration/BitBucket",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Configuration/BitBucket.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"BitBucket Cloud",sidebar_position:2,description:"Config UI instruction for BitBucket(Cloud)"},sidebar:"docsSidebar",previous:{title:"Tutorial",permalink:"/zh/docs/next/Configuration/Tutorial"},next:{title:"GitHub",permalink:"/zh/docs/next/Configuration/GitHub"}},r={},p=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:3},{value:"Connection Name",id:"connection-name",level:4},{value:"Endpoint URL",id:"endpoint-url",level:4},{value:"Username and App Password",id:"username-and-app-password",level:4},{value:"Proxy URL (Optional)",id:"proxy-url-optional",level:4},{value:"Fixed Rate Limit (Optional)",id:"fixed-rate-limit-optional",level:4},{value:"Test and Save Connection",id:"test-and-save-connection",level:4},{value:"Step 2 - Configure Blueprint",id:"step-2---configure-blueprint",level:3},{value:"Repositories",id:"repositories",level:4},{value:"Data Entities",id:"data-entities",level:4},{value:"Step 3 - Add Transformation (Optional)",id:"step-3---add-transformation-optional",level:3},{value:"Issue Tracking",id:"issue-tracking",level:4},{value:"CI/CD",id:"cicd",level:4},{value:"Additional Settings (Optional)",id:"additional-settings-optional",level:4},{value:"Step 4 - Setting Sync Frequency",id:"step-4---setting-sync-frequency",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Visit config-ui: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4000")," and go to ",(0,a.kt)("inlineCode",{parentName:"p"},"Connections")," page."),(0,a.kt)("h3",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/220118398-2d08070f-0edb-4de6-8696-9ee58b80719b.png",alt:"image"})),(0,a.kt)("h4",{id:"connection-name"},"Connection Name"),(0,a.kt)("p",null,"Give your connection a unique name to help you identify it in the future."),(0,a.kt)("h4",{id:"endpoint-url"},"Endpoint URL"),(0,a.kt)("p",null,"For BitBucket Cloud, you do not need to enter the REST API endpoint URL, which is always ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.bitbucket.org/2.0/"),"."),(0,a.kt)("p",null,"DevLake will support BitBucket Server in the future."),(0,a.kt)("h4",{id:"username-and-app-password"},"Username and App Password"),(0,a.kt)("p",null,"Learn about ",(0,a.kt)("a",{parentName:"p",href:"https://support.atlassian.com/bitbucket-cloud/docs/create-an-app-password/"},"how to create a BitBucket app password"),"."),(0,a.kt)("p",null,"The following permissions are required to collect data from BitBucket repositories:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Account:Read"),(0,a.kt)("li",{parentName:"ul"},"Workspace membership:Read"),(0,a.kt)("li",{parentName:"ul"},"Projects:Read"),(0,a.kt)("li",{parentName:"ul"},"Repositories:Read"),(0,a.kt)("li",{parentName:"ul"},"Pull requests:Read"),(0,a.kt)("li",{parentName:"ul"},"Issues:Read"),(0,a.kt)("li",{parentName:"ul"},"Pipelines:Read"),(0,a.kt)("li",{parentName:"ul"},"Runners:Read")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bitbucket-app-password-permissions",src:i(44132).Z,width:"1212",height:"830"})),(0,a.kt)("h4",{id:"proxy-url-optional"},"Proxy URL (Optional)"),(0,a.kt)("p",null,"If you are behind a corporate firewall or VPN you may need to utilize a proxy server. Enter a valid proxy server address on your network, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://your-proxy-server.com:1080")),(0,a.kt)("h4",{id:"fixed-rate-limit-optional"},"Fixed Rate Limit (Optional)"),(0,a.kt)("p",null,"DevLake uses a dynamic rate limit to collect BitBucket data. You can adjust the rate limit if you want to increase or lower the speed."),(0,a.kt)("p",null,"The maximum rate limit for different entities in BitBucket(Cloud) ",(0,a.kt)("a",{parentName:"p",href:"https://support.atlassian.com/bitbucket-cloud/docs/api-request-limits/"},"varies from 1,000 - 60,000 requests/hour"),". The rate limit to access repository data is 1,000 requests/hour, but we find it can still run when we input a value that exceeds 1,000. You can try using a larger rate limit if you have large repositories."),(0,a.kt)("h4",{id:"test-and-save-connection"},"Test and Save Connection"),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,a.kt)("h3",{id:"step-2---configure-blueprint"},"Step 2 - Configure Blueprint"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/14050754/224308925-449a4d3e-ed52-45e9-bb72-0d2892df374f.png",alt:"image"})),(0,a.kt)("h4",{id:"repositories"},"Repositories"),(0,a.kt)("p",null,"Select the BitBucket repositories to collect."),(0,a.kt)("h4",{id:"data-entities"},"Data Entities"),(0,a.kt)("p",null,"Usually, you don't have to modify this part. However, if you don't want to collect certain BitBucket entities, you can unselect some entities to accelerate the collection speed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Issue Tracking: BitBucket issues, issue comments, etc."),(0,a.kt)("li",{parentName:"ul"},"Source Code Management: BitBucket repos, refs, commits, etc."),(0,a.kt)("li",{parentName:"ul"},"Code Review: BitBucket PRs, PR comments, etc."),(0,a.kt)("li",{parentName:"ul"},"CI/CD: BitBucket Pipelines, BitBucket Deployments, etc."),(0,a.kt)("li",{parentName:"ul"},"Cross Domain: BitBucket accounts, etc.")),(0,a.kt)("h3",{id:"step-3---add-transformation-optional"},"Step 3 - Add Transformation (Optional)"),(0,a.kt)("p",null,"You can add a ",(0,a.kt)("inlineCode",{parentName:"p"},"transformation")," to standardize the data. A ",(0,a.kt)("inlineCode",{parentName:"p"},"transformation")," acts on the BitBucket data in the ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/next/DataModels/ToolLayerSchema"},"tool layer"),", transforming it to the ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/next/DataModels/DevLakeDomainLayerSchema"},"domain layer"),"."),(0,a.kt)("h4",{id:"issue-tracking"},"Issue Tracking"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Issue Status Mapping"),(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/14050754/224309704-b096c256-b2cf-4107-b78c-044d06b5f23c.png",alt:"image"})),(0,a.kt)("p",null,"The given settings transformed the BitBucket issue statuses to the issue statuses used by DevLake, enabling you to measure metrics like the Issue Delivery Rate on the pre-built dashboards, as DevLake understands your definition of when an issue is considered as completed (status = 'DONE')."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TODO: The issues that are planned but have not been worked on yet "),(0,a.kt)("li",{parentName:"ul"},"IN-PROGRESS: The issues that are work-in-progress"),(0,a.kt)("li",{parentName:"ul"},"DONE: The issues that are completed"),(0,a.kt)("li",{parentName:"ul"},"OTHER: Other issues statuses that do not belong to the three statuses above")),(0,a.kt)("p",null,"The original status will be saved in the column ",(0,a.kt)("inlineCode",{parentName:"p"},"original_status")," of the table 'issues', and the new status will be saved in the column ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," of the same table."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Issue Type Mapping"),(0,a.kt)("br",null),"\nDevLake will convert the issue types of 'enhancement', 'proposal', and 'task' from BitBucket into the new issue type 'REQUIREMENT' for DevLake. In contrast, any issues classified as 'bug' in BitBucket will be converted into the new issue type 'BUG' for DevLake. The original type will be saved in the column ",(0,a.kt)("inlineCode",{parentName:"p"},"original_type")," of the table 'issues', and the new type will be saved in the column ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," of the same table."),(0,a.kt)("h4",{id:"cicd"},"CI/CD"),(0,a.kt)("p",null,"The CI/CD configuration for BitBucket is used for calculating ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/next/DORA"},"DORA metrics"),"."),(0,a.kt)("p",null,"By default, DevLake will identify the deployment and environment settings that are defined in the BitBucket CI .yml file. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/14050754/224311429-31304867-8cdd-476b-8675-e4acbc17f552.png",alt:"image"})),(0,a.kt)("p",null,"However, to ensure this works properly, you must specify the deployment settings in the .yml file.\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/221528908-4943b1e6-1398-49e9-8ce9-aa264995f9bc.jpg",alt:"img_v2_89602d14-a733-4679-9d4b-d9635c03bc5g"})),(0,a.kt)("p",null,"The pipeline steps with the ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment")," key will be recognized as DevLake deployments. The value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment")," key will be recognized as the environment of DevLake deployments."),(0,a.kt)("p",null,"All BitBucket pipeline steps will be saved in table 'cicd_tasks', but DevLake deployments will be set as ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," = 'deployment' and ",(0,a.kt)("inlineCode",{parentName:"p"},"environment")," = '{BitBucket-pipeline-step.deployment.value}'."),(0,a.kt)("p",null,"If you have not defined these settings in the .yml file, please select 'Detect Deployments from Pipeline steps in BitBucket', and input the RegEx in the following fields:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/14050754/224310350-cc9a4901-476d-4583-ad73-4d3b394bc343.png",alt:"image"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deployment: A pipeline step with a name that matches the given RegEx will be recognized as a DevLake deployment."),(0,a.kt)("li",{parentName:"ul"},"Production: A pipeline step with a name that matches the given RegEx will be recognized as a DevLake cicd_task in the production environment.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Introduction to BitBucket CI entities"),(0,a.kt)("br",null),"\nBitBucket has several key CI entities: ",(0,a.kt)("inlineCode",{parentName:"p"},"pipelines"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pipeline steps"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"deployments"),". A Bitbucket pipeline contains several pipeline steps. Each pipeline step defined with a deployment key can be mapped to a BitBucket deployment."),(0,a.kt)("p",null,"Each Bitbucket pipeline is converted to a cicd_pipeline in DevLake's domain layer schema and each Bitbucket pipeline step is converted to a cicd_task in DevLake's domain layer.\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/220288225-71bee07d-c319-45bd-98e5-f4d01359840e.png",alt:"image"})),(0,a.kt)("p",null,"If a pipeline step defines ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment")," with a value (usually indicating the environment), this pipeline step is also a BitBucket deployment."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/221887426-4cae1c46-31ce-4fcd-b773-a54c28af0264.png",alt:"image"})),(0,a.kt)("h4",{id:"additional-settings-optional"},"Additional Settings (Optional)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Tags Limit: DevLake compares the last N pairs of tags to get the "commit diff\', "issue diff" between tags. N defaults to 10.'),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"commit diff: new commits for a tag relative to the previous one"),(0,a.kt)("li",{parentName:"ul"},"issue diff: issues solved by the new commits for a tag relative to the previous one"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Tags Pattern: Only tags that meet the given Regular Expression will be counted.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Tags Order: Only "reverse semver" order is supported for now.'))),(0,a.kt)("p",null,"Please click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save")," to save the transformation rules for the repo. In the data scope list, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Next Step")," to continue configuring."),(0,a.kt)("h3",{id:"step-4---setting-sync-frequency"},"Step 4 - Setting Sync Frequency"),(0,a.kt)("p",null,"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or entering a cron code to specify your prefered schedule."),(0,a.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If you run into any problems, please check the ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/next/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue"),"."))}d.isMDXComponent=!0},44132:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/bitbucket-app-password-permissions-2b87fad376a9ab4a5e4f52b4352d38f1.jpeg"}}]);