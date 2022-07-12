"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[8883],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return p}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),u=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,g=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return n?t.createElement(g,l(l({ref:r},c),{},{components:n})):t.createElement(g,l({ref:r},c))}));function p(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1160:function(e,r,n){n.r(r),n.d(r,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var t=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],s={title:"Dal",sidebar_position:4,description:"The Dal (Data Access Layer) is designed to decouple the hard dependency on `gorm` in v0.12\n"},i=void 0,u={unversionedId:"DeveloperManuals/Dal",id:"version-0.11/DeveloperManuals/Dal",title:"Dal",description:"The Dal (Data Access Layer) is designed to decouple the hard dependency on `gorm` in v0.12\n",source:"@site/versioned_docs/version-0.11/DeveloperManuals/Dal.md",sourceDirName:"DeveloperManuals",slug:"/DeveloperManuals/Dal",permalink:"/zh/docs/0.11/DeveloperManuals/Dal",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-0.11/DeveloperManuals/Dal.md",tags:[],version:"0.11",sidebarPosition:4,frontMatter:{title:"Dal",sidebar_position:4,description:"The Dal (Data Access Layer) is designed to decouple the hard dependency on `gorm` in v0.12\n"},sidebar:"docsSidebar",previous:{title:"Developer Setup",permalink:"/zh/docs/0.11/DeveloperManuals/DeveloperSetup"},next:{title:"DB Migration",permalink:"/zh/docs/0.11/DeveloperManuals/MIGRATIONS"}},c={},d=[{value:"Summary",id:"summary",level:2},{value:"The Dal Interface",id:"the-dal-interface",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Query",id:"query",level:3},{value:"Insert",id:"insert",level:3},{value:"Update",id:"update",level:3},{value:"Insert or Update",id:"insert-or-update",level:3},{value:"Insert if record(by PrimaryKey) didn&#39;t exist",id:"insert-if-recordby-primarykey-didnt-exist",level:3},{value:"Delete",id:"delete",level:3},{value:"DDL and others",id:"ddl-and-others",level:3},{value:"How to do Unit Test",id:"how-to-do-unit-test",level:2}],m={toc:d};function p(e){var r=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"The Dal (Data Access Layer) is designed to decouple the hard dependency on ",(0,o.kt)("inlineCode",{parentName:"p"},"gorm")," in v0.12.  The advantages of introducing this isolation are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Unit Test: Mocking an Interface is easier and more reliable than Patching a Pointer."),(0,o.kt)("li",{parentName:"ul"},"Clean Code: DBS operations are more consistence than using ",(0,o.kt)("inlineCode",{parentName:"li"},"gorm ")," directly."),(0,o.kt)("li",{parentName:"ul"},"Replaceable: It would be easier to replace ",(0,o.kt)("inlineCode",{parentName:"li"},"gorm")," in the future if needed.")),(0,o.kt)("h2",{id:"the-dal-interface"},"The Dal Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Dal interface {\n    AutoMigrate(entity interface{}, clauses ...Clause) error\n    Exec(query string, params ...interface{}) error\n    RawCursor(query string, params ...interface{}) (*sql.Rows, error)\n    Cursor(clauses ...Clause) (*sql.Rows, error)\n    Fetch(cursor *sql.Rows, dst interface{}) error\n    All(dst interface{}, clauses ...Clause) error\n    First(dst interface{}, clauses ...Clause) error\n    Count(clauses ...Clause) (int64, error)\n    Pluck(column string, dest interface{}, clauses ...Clause) error\n    Create(entity interface{}, clauses ...Clause) error\n    Update(entity interface{}, clauses ...Clause) error\n    CreateOrUpdate(entity interface{}, clauses ...Clause) error\n    CreateIfNotExist(entity interface{}, clauses ...Clause) error\n    Delete(entity interface{}, clauses ...Clause) error\n    AllTables() ([]string, error)\n}\n")),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("h3",{id:"query"},"Query"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Get a database cursor\nuser := &models.User{}\ncursor, err := db.Cursor(\n  dal.From(user),\n  dal.Where("department = ?", "R&D"),\n  dal.Orderby("id DESC"),\n)\nif err != nil {\n  return err\n}\nfor cursor.Next() {\n  err = dal.Fetch(cursor, user)  // fetch one record at a time\n  ...\n}\n\n// Get a database cursor by raw sql query\ncursor, err := db.Raw("SELECT * FROM users")\n\n// USE WITH CAUTIOUS: loading a big table at once is slow and dangerous\n// Load all records from database at once. \nusers := make([]models.Users, 0)\nerr := db.All(&users, dal.Where("department = ?", "R&D"))\n\n// Load a column as Scalar or Slice\nvar email string\nerr := db.Pluck("email", &username, dal.Where("id = ?", 1))\nvar emails []string\nerr := db.Pluck("email", &emails)\n\n// Execute query\nerr := db.Exec("UPDATE users SET department = ? WHERE department = ?", "Research & Development", "R&D")\n')),(0,o.kt)("h3",{id:"insert"},"Insert"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'err := db.Create(&models.User{\n  Email: "hello@example.com", // assumming this the Primarykey\n  Name: "hello",\n  Department: "R&D",\n})\n')),(0,o.kt)("h3",{id:"update"},"Update"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'err := db.Create(&models.User{\n  Email: "hello@example.com", // assumming this the Primarykey\n  Name: "hello",\n  Department: "R&D",\n})\n')),(0,o.kt)("h3",{id:"insert-or-update"},"Insert or Update"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'err := db.CreateOrUpdate(&models.User{\n  Email: "hello@example.com",  // assuming this is the Primarykey\n  Name: "hello",\n  Department: "R&D",\n})\n')),(0,o.kt)("h3",{id:"insert-if-recordby-primarykey-didnt-exist"},"Insert if record(by PrimaryKey) didn't exist"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'err := db.CreateIfNotExist(&models.User{\n  Email: "hello@example.com",  // assuming this is the Primarykey\n  Name: "hello",\n  Department: "R&D",\n})\n')),(0,o.kt)("h3",{id:"delete"},"Delete"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'err := db.CreateIfNotExist(&models.User{\n  Email: "hello@example.com",  // assuming this is the Primary key\n})\n')),(0,o.kt)("h3",{id:"ddl-and-others"},"DDL and others"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Returns all table names\nallTables, err := db.AllTables()\n\n// Automigrate: create/add missing table/columns\n// Note: it won't delete any existing columns, nor does it update the column definition\nerr := db.AutoMigrate(&models.User{})\n")),(0,o.kt)("h2",{id:"how-to-do-unit-test"},"How to do Unit Test"),(0,o.kt)("p",null,"First, run the command ",(0,o.kt)("inlineCode",{parentName:"p"},"make mock")," to generate the Mocking Stubs, the generated source files should appear in ",(0,o.kt)("inlineCode",{parentName:"p"},"mocks")," folder. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mocks\n\u251c\u2500\u2500 ApiResourceHandler.go\n\u251c\u2500\u2500 AsyncResponseHandler.go\n\u251c\u2500\u2500 BasicRes.go\n\u251c\u2500\u2500 CloseablePluginTask.go\n\u251c\u2500\u2500 ConfigGetter.go\n\u251c\u2500\u2500 Dal.go\n\u251c\u2500\u2500 DataConvertHandler.go\n\u251c\u2500\u2500 ExecContext.go\n\u251c\u2500\u2500 InjectConfigGetter.go\n\u251c\u2500\u2500 InjectLogger.go\n\u251c\u2500\u2500 Iterator.go\n\u251c\u2500\u2500 Logger.go\n\u251c\u2500\u2500 Migratable.go\n\u251c\u2500\u2500 PluginApi.go\n\u251c\u2500\u2500 PluginBlueprintV100.go\n\u251c\u2500\u2500 PluginInit.go\n\u251c\u2500\u2500 PluginMeta.go\n\u251c\u2500\u2500 PluginTask.go\n\u251c\u2500\u2500 RateLimitedApiClient.go\n\u251c\u2500\u2500 SubTaskContext.go\n\u251c\u2500\u2500 SubTaskEntryPoint.go\n\u251c\u2500\u2500 SubTask.go\n\u2514\u2500\u2500 TaskContext.go\n")),(0,o.kt)("p",null,"With these Mocking stubs, you may start writing your TestCases using the ",(0,o.kt)("inlineCode",{parentName:"p"},"mocks.Dal"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/apache/incubator-devlake/mocks"\n\nfunc TestCreateUser(t *testing.T) {\n    mockDal := new(mocks.Dal)\n    mockDal.On("Create", mock.Anything, mock.Anything).Return(nil).Once()\n    userService := &services.UserService{\n        Dal: mockDal,\n    }\n    userService.Post(map[string]interface{}{\n        "email": "helle@example.com",\n        "name": "hello",\n        "department": "R&D",\n    })\n    mockDal.AssertExpectations(t)\n')))}p.isMDXComponent=!0}}]);