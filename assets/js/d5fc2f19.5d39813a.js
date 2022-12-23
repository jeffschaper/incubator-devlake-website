"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[9114],{58187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));n(61839);const l={title:"RefDiff",description:"RefDiff Plugin\n"},o=void 0,r={unversionedId:"Plugins/refdiff",id:"Plugins/refdiff",title:"RefDiff",description:"RefDiff Plugin\n",source:"@site/docs/Plugins/refdiff.md",sourceDirName:"Plugins",slug:"/Plugins/refdiff",permalink:"/docs/next/Plugins/refdiff",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Plugins/refdiff.md",tags:[],version:"current",frontMatter:{title:"RefDiff",description:"RefDiff Plugin\n"},sidebar:"docsSidebar",previous:{title:"PagerDuty",permalink:"/docs/next/Plugins/pagerduty"},next:{title:"Tapd",permalink:"/docs/next/Plugins/tapd"}},s={},u=[{value:"Summary",id:"summary",level:2},{value:"Important Note",id:"important-note",level:2},{value:"Configuration",id:"configuration",level:2},{value:"How to use refdiff",id:"how-to-use-refdiff",level:2},{value:"How to use refdiff in DORA",id:"how-to-use-refdiff-in-dora",level:2},{value:"Development",id:"development",level:2},{value:"Linux",id:"linux",level:3},{value:"Troubleshooting (Linux)",id:"troubleshooting-linux",level:4},{value:"MacOS",id:"macos",level:3},{value:"Troubleshooting (MacOS)",id:"troubleshooting-macos",level:4}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"RefDiff is a plugin that performs calculation tasks and has 2 main purposes."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Calculate the difference in commits between releases/tags to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/blob/main/plugins/refdiff/tasks/commit_diff_calculator.go"},"analyze the amount of code in each release")),(0,a.kt)("li",{parentName:"ul"},"Calculate the difference in commits between deployments to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/blob/main/plugins/refdiff/tasks/project_deployment_commit_diff_calculator.go"},"calculate DORA metrics"))),(0,a.kt)("p",null,"And the output of RefDiff is stored in the table commits_diffs, finished_commits_diffs, ref_commits."),(0,a.kt)("h2",{id:"important-note"},"Important Note"),(0,a.kt)("p",null,"You need to run ",(0,a.kt)("inlineCode",{parentName:"p"},"gitextractor")," before the ",(0,a.kt)("inlineCode",{parentName:"p"},"refdiff")," plugin. The ",(0,a.kt)("inlineCode",{parentName:"p"},"gitextractor")," plugin should create records in the ",(0,a.kt)("inlineCode",{parentName:"p"},"refs")," table in your database before this plugin can be run."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"This is an enrichment plugin based on the domain layer data, no configuration is needed."),(0,a.kt)("h2",{id:"how-to-use-refdiff"},"How to use refdiff"),(0,a.kt)("p",null,"To trigger the enrichment, you need to insert a new task into your pipeline."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make sure ",(0,a.kt)("inlineCode",{parentName:"li"},"commits")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"refs")," are collected into your database, ",(0,a.kt)("inlineCode",{parentName:"li"},"refs")," table should contain records like following:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"id                                            ref_type\ngithub:GithubRepo:1:384111310:refs/tags/0.3.5   TAG\ngithub:GithubRepo:1:384111310:refs/tags/0.3.6   TAG\ngithub:GithubRepo:1:384111310:refs/tags/0.5.0   TAG\ngithub:GithubRepo:1:384111310:refs/tags/v0.0.1  TAG\ngithub:GithubRepo:1:384111310:refs/tags/v0.2.0  TAG\ngithub:GithubRepo:1:384111310:refs/tags/v0.3.0  TAG\ngithub:GithubRepo:1:384111310:refs/tags/v0.4.0  TAG\ngithub:GithubRepo:1:384111310:refs/tags/v0.6.0  TAG\ngithub:GithubRepo:1:384111310:refs/tags/v0.6.1  TAG\n"))),(0,a.kt)("li",{parentName:"ol"},"If you want to run calculatePrCherryPick, please configure GITHUB_PR_TITLE_PATTERN in .env, you can check the example in .env.example(we have a default value, please make sure your pattern is disclosed by single quotes '')"),(0,a.kt)("li",{parentName:"ol"},"And then, trigger a pipeline like the following format:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "test-refdiff",\n    "tasks": [\n        [\n            {\n                "plugin": "refdiff",\n                "options": {\n                    "repoId": "github:GithubRepo:1:384111310",\n                    "pairs": [\n                       { "newRef": "refs/tags/v0.6.0", "oldRef": "refs/tags/0.5.0" },\n                       { "newRef": "refs/tags/0.5.0", "oldRef": "refs/tags/0.4.0" }\n                    ],\n                    "tasks": [\n                        "calculateCommitsDiff",\n                        "calculateIssuesDiff",\n                        "calculatePrCherryPick",\n                    ]\n                }\n            }\n        ]\n    ]\n}\'\n')),(0,a.kt)("p",null,"Or if you preferred calculating latest releases"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "test-refdiff",\n    "tasks": [\n        [\n            {\n                "plugin": "refdiff",\n                "options": {\n                    "repoId": "github:GithubRepo:1:384111310",\n                    "tagsPattern": "v\\d+\\.\\d+.\\d+",\n                    "tagsLimit": 10,\n                    "tagsOrder": "reverse semver",\n                    "tasks": [\n                        "calculateCommitsDiff",\n                        "calculateIssuesDiff",\n                        "calculatePrCherryPick",\n                    ]\n                }\n            }\n        ]\n    ]\n}\'\n')),(0,a.kt)("h2",{id:"how-to-use-refdiff-in-dora"},"How to use refdiff in DORA"),(0,a.kt)("p",null,"RefDiff can be called by the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/tree/main/plugins/dora"},"DORA plugin")," to support the calculation of ",(0,a.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/UserManuals/DORA"},"DORA metrics"),". RefDiff has a subtask called 'calculateProjectDeploymentCommitsDiff'. This subtask takes the ",(0,a.kt)("inlineCode",{parentName:"p"},"project_name")," from task options to calculate the commits diff between two consecutive deployments in this project. That is to say, refdiff will generate the relationship between ",(0,a.kt)("inlineCode",{parentName:"p"},"deployed commit(s)")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment")," in which these commits get deployed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "test-refdiff-dora",\n    "tasks": [\n        [\n            {\n                "plugin": "refdiff",\n                "options": {\n                    "projectName": "project_name_1",\n                    "tasks": [\n                        "calculateProjectDeploymentCommitsDiff"\n                    ]\n                }\n            }\n        ]\n    ]\n}\'\n')),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"This plugin depends on ",(0,a.kt)("inlineCode",{parentName:"p"},"libgit2"),", you need to install version 1.3.0 to run and debug this plugin on your local\nmachine."),(0,a.kt)("h3",{id:"linux"},"Linux"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. require cmake\n[ubuntu]\napt install cmake -y\n[centos]\nyum install cmake -y\n\n2. compiling\ngit clone -b v1.3.0 https://github.com/libgit2/libgit2.git && cd libgit2\nmkdir build && cd build && cmake ..\nmake && make install\n\n3.PKG_CONFIG and LD_LIBRARY_PATH\n[centos]\nexport PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/local/lib64:/usr/local/lib64/pkgconfig\nexport LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib64\n[ubuntu]\nexport PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/local/lib:/usr/local/lib/pkgconfig\nexport LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib\n")),(0,a.kt)("h4",{id:"troubleshooting-linux"},"Troubleshooting (Linux)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Q: # pkg-config --cflags -- libgit2 Package libgit2 was not found in the pkg-config search path.\nPerhaps you should add the directory containing ",(0,a.kt)("inlineCode",{parentName:"p"},"libgit2.pc")," to the PKG_CONFIG_PATH environment variable\nNo package 'libgit2' found pkg-config: exit status 1")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A:\nMake sure your pkg config path covers the installation:\nif your libgit2.pc in ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/lib64/pkgconfig"),"(like centos)"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"export PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/local/lib64:/usr/local/lib64/pkgconfig")),(0,a.kt)("p",{parentName:"blockquote"},"else if your libgit2.pc in ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/pkgconfig"),"(like ubuntu)"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"export PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/local/lib:/usr/local/lib/pkgconfig")),(0,a.kt)("p",{parentName:"blockquote"},"else consider install pkgconfig or rebuild the libgit2")),(0,a.kt)("h3",{id:"macos"},"MacOS"),(0,a.kt)("p",null,"NOTE: ",(0,a.kt)("strong",{parentName:"p"},"Do NOT")," install libgit2 via ",(0,a.kt)("inlineCode",{parentName:"p"},"MacPorts")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"homebrew"),", install from source instead."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew install cmake\ngit clone https://github.com/libgit2/libgit2.git\ncd libgit2\ngit checkout v1.3.0\nmkdir build\ncd build\ncmake ..\nmake\nmake install\n")),(0,a.kt)("h4",{id:"troubleshooting-macos"},"Troubleshooting (MacOS)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Q: I got an error saying: ",(0,a.kt)("inlineCode",{parentName:"p"},'pkg-config: exec: "pkg-config": executable file not found in $PATH'))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A:"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"Make sure you have pkg-config installed:")),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"brew install pkg-config")),(0,a.kt)("ol",{parentName:"blockquote",start:2},(0,a.kt)("li",{parentName:"ol"},"Make sure your pkg config path covers the installation:\n",(0,a.kt)("inlineCode",{parentName:"li"},"export PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/local/lib:/usr/local/lib/pkgconfig")))),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null))}c.isMDXComponent=!0}}]);