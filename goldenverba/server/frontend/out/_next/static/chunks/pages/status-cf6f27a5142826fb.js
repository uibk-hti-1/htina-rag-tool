(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{39377:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/status",function(){return t(34510)}])},34510:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return n}});var r=t(85893),a=t(67294),l=t(36267);function n(){let[e,s]=(0,a.useState)(""),[t,n]=(0,a.useState)("Offline"),[i,o]=(0,a.useState)({}),[c,d]=(0,a.useState)({}),[h,b]=(0,a.useState)({}),[x,u]=(0,a.useState)(!1),[m,g]=(0,a.useState)(!1),[p,f]=(0,a.useState)(!1),[j,y]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{fetch("/api/get_status").then(e=>e.json()).then(e=>{s(e.type),o(e.libraries),d(e.variables),b(e.schemas),n("Online")}).catch(e=>{console.error("Error fetching the data:",e)})},[]),(0,r.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-10 text-gray-900",children:[(0,r.jsxs)("div",{className:"flex flex-col w-full items-start",children:[(0,r.jsx)("div",{className:"mb-2",children:(0,r.jsxs)("div",{className:"flex justify-between items-center w-full",children:[" ",(0,r.jsx)("div",{className:"flex-none",children:(0,r.jsx)("img",{src:"".concat("static/","hti_logo.png"),alt:"HTI Logo",className:" h-24 shadow-lg"})}),(0,r.jsxs)("div",{className:"flex-1",children:[(0,r.jsx)("h1",{className:" text-6xl font-bold",children:"Verba"}),(0,r.jsxs)("div",{className:"flex text-lg",children:[(0,r.jsx)("span",{className:"bg-opacity-0 rounded px-2 py-1 hover-container animate-pop-in",children:"The"}),(0,r.jsx)("span",{className:"bg-opacity-0 rounded font-bold px-2 py-1 hover-container animate-pop-in-late",children:"Golden"}),(0,r.jsx)("span",{className:"bg-yellow-200 rounded px-2 py-1 hover-container animate-pop-more-late",children:"RAGtriever"})]})]})]})}),(0,r.jsxs)("div",{className:"flex mt-16 space-x-4 w-full justify-center items-start",children:[" ",(0,r.jsxs)("div",{className:"flex-1 border-2 border-black bg-white bg-opacity-20 rounded-lg shadow-md backdrop-filter max-h-[50vh] backdrop-blur-md p-4 w-full overflow-y-auto animate-pop-in",children:[(0,r.jsx)("h2",{className:"text-lg font-bold mb-4",children:"\uD83D\uDC15 Verba Status"}),(0,r.jsx)("p",{className:"text-xs font-bold mb-4 text-gray-600",children:"This view shows whether your Verba Client is connected to the Backend and which Deployment of Weaviate you are using"}),(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{className:"grid grid-rows-2 gap-2 mt-4",children:[(0,r.jsx)(l.Z,{main:"Backend",sub:t,clipboard:"Online"==t,subBgColor:"Online"==t?"green":"red",onClick:()=>console.log("Connected button clicked")}),(0,r.jsx)(l.Z,{main:e||"Weaviate",sub:t,clipboard:"Online"==t,subBgColor:"Online"==t?"green":"red",onClick:()=>console.log("Type button clicked")})]})]}),(0,r.jsxs)("div",{className:"flex-1 border-2 border-black bg-white bg-opacity-20 rounded-lg shadow-md backdrop-filter max-h-[50vh] backdrop-blur-md p-4 overflow-y-auto w-full animate-pop-in",children:[(0,r.jsx)("h2",{className:"text-lg font-bold mb-4",children:"\uD83D\uDCDA Libraries & Variables"}),(0,r.jsx)("p",{className:"text-xs font-bold mb-4 text-gray-600",children:"This interface lists all available libraries and defined variables."}),(0,r.jsxs)("p",{className:"text-xs font-bold mb-4 text-gray-600 mt-2",children:["To set environment variables, create a ",(0,r.jsx)("code",{children:".env"})," file and define your variables (e.g., ",(0,r.jsx)("code",{children:"OPENAI_API_KEY=Your-Key"}),"). Alternatively, you may configure them system-wide. ",(0,r.jsx)("a",{href:"https://github.com/weaviate/Verba/blob/main/README.md",className:"text-sm text-blue-400",children:"Click here"})," for detailed instructions."]}),(0,r.jsxs)("p",{className:"text-xs font-bold mb-4 text-gray-600 mt-2",children:["To install any required libraries that are not present, use the command ",(0,r.jsx)("code",{children:"pip install Your-Library"})," (for example, ",(0,r.jsx)("code",{children:"pip install spacy"}),")."]}),(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{className:"grid grid-rows-2 gap-2 mt-4",children:[Object.entries(i).map(e=>{let[s,t]=e;return(0,r.jsx)(l.Z,{clipboard:!0,main:s,subBgColor:t?"green":"red",sub:t?"Library Installed":"Library not installed",onClick:()=>console.log("".concat(s," button clicked"))},s)}),Object.entries(c).map(e=>{let[s,t]=e;return(0,r.jsx)(l.Z,{clipboard:!0,main:s,subBgColor:t?"green":"red",sub:t?"Variable Available":"Variable not set",onClick:()=>console.log("".concat(s," button clicked"))},s)})]})]}),(0,r.jsxs)("div",{className:"flex-1 bg-white border-2 border-black bg-opacity-20 rounded-lg shadow-md backdrop-filter max-h-[50vh] backdrop-blur-md p-4 w-full overflow-y-auto animate-pop-in",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[" ",(0,r.jsx)("h2",{className:"text-lg font-bold",children:"\uD83D\uDCDD Schemas & Objects"})]}),(0,r.jsx)("p",{className:"text-xs font-bold mb-4 text-gray-600",children:"This view shows all schemas and their object count"}),(0,r.jsx)("button",{onClick:()=>u(!0),className:"text-xs bg-gray-400 text-white hover:bg-red-400 hover-container px-3 py-2 rounded-lg mr-2",children:"❌ Reset Verba"}),(0,r.jsx)("button",{onClick:()=>g(!0),className:"text-xs bg-gray-400 text-white hover:bg-red-400 hover-container px-3 py-2 rounded-lg mr-2",children:"❌ Reset Cache"}),(0,r.jsx)("button",{onClick:()=>f(!0),className:"text-xs bg-gray-400 text-white hover:bg-red-400 hover-container px-3 py-2 rounded-lg",children:"❌ Reset Suggestion"}),(0,r.jsx)("hr",{}),(0,r.jsx)("div",{className:"grid grid-rows-2 gap-2 mt-4",children:Object.entries(h).map(e=>{let[s,t]=e;return(0,r.jsx)(l.Z,{clipboard:!0,main:s,subBgColor:"yellow",sub:t+" objects",onClick:()=>console.log("".concat(s," button clicked"))},s)})})]})]})]}),x&&(0,r.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:(0,r.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-lg border-2 border-black animate-pop-in",children:[(0,r.jsx)("h3",{className:"font-bold mb-4",children:"⚠️ Warning"}),(0,r.jsx)("p",{children:"Are you sure? This will remove ALL existing data on your Weaviate Instance."}),(0,r.jsxs)("div",{className:"flex justify-end mt-4",children:[(0,r.jsx)("button",{onClick:()=>u(!1),className:"mr-2 px-4 py-2 bg-gray-300 hover:bg-gray-200 rounded",children:"No"}),(0,r.jsxs)("button",{onClick:()=>{y(!0),fetch("/api/reset").then(e=>e.json()).then(e=>{console.log("Reset successful:",e),u(!1),y(!1),window.location.reload()}).catch(e=>{console.error("Error during reset:",e),y(!1)})},className:"px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded",children:[j?"Resetting...":"Yes"," "]})]})]})}),m&&(0,r.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:(0,r.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-lg border-2 border-black animate-pop-in",children:[(0,r.jsx)("h3",{className:"font-bold mb-4",children:"⚠️ Warning"}),(0,r.jsx)("p",{children:"Are you sure? This will remove all cached data."}),(0,r.jsxs)("div",{className:"flex justify-end mt-4",children:[(0,r.jsx)("button",{onClick:()=>g(!1),className:"mr-2 px-4 py-2 bg-gray-300 hover:bg-gray-200 rounded",children:"No"}),(0,r.jsxs)("button",{onClick:()=>{y(!0),fetch("/api/reset_cache").then(e=>e.json()).then(e=>{console.log("Reset successful:",e),g(!1),y(!1),window.location.reload()}).catch(e=>{console.error("Error during reset:",e),y(!1)})},className:"px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded",children:[j?"Resetting...":"Yes"," "]})]})]})}),p&&(0,r.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:(0,r.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-lg border-2 border-black animate-pop-in",children:[(0,r.jsx)("h3",{className:"font-bold mb-4",children:"⚠️ Warning"}),(0,r.jsx)("p",{children:"Are you sure? This will remove all suggestions"}),(0,r.jsxs)("div",{className:"flex justify-end mt-4",children:[(0,r.jsx)("button",{onClick:()=>f(!1),className:"mr-2 px-4 py-2 bg-gray-300 hover:bg-gray-200 rounded",children:"No"}),(0,r.jsxs)("button",{onClick:()=>{y(!0),fetch("/api/reset_suggestion").then(e=>e.json()).then(e=>{console.log("Reset successful:",e),f(!1),y(!1),window.location.reload()}).catch(e=>{console.error("Error during reset:",e),y(!1)})},className:"px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded",children:[j?"Resetting...":"Yes"," "]})]})]})})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=39377)}),_N_E=e.O()}]);