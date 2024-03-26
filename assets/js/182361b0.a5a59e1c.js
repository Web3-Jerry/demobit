"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6618],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7440:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],s={sidebar_position:6},i="JSON-RPC",c={unversionedId:"Build/Json-RPC",id:"Build/Json-RPC",title:"JSON-RPC",description:"Bitlayer provides all json-rpc api methods listed in Ethereum.",source:"@site/docs/Build/Json-RPC.md",sourceDirName:"Build",slug:"/Build/Json-RPC",permalink:"/demobit/docs/Build/Json-RPC",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Deployment",permalink:"/demobit/docs/Build/Deployment"},next:{title:"Bridges",permalink:"/demobit/docs/Build/Bridges"}},u={},p=[{value:"eth_getTraceActionByTxHash",id:"eth_gettraceactionbytxhash",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"eth_getTraceActionByBlockNumber",id:"eth_gettraceactionbyblocknumber",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"eth_getTraceActionByBlockHash",id:"eth_gettraceactionbyblockhash",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Returns",id:"returns-2",level:3},{value:"Example",id:"example-2",level:3}],d={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"json-rpc"},"JSON-RPC"),(0,l.kt)("p",null,"Bitlayer provides all json-rpc api methods listed in ",(0,l.kt)("a",{parentName:"p",href:"https://ethereum.org/developers/docs/apis/json-rpc#json-rpc-methods"},"Ethereum"),". "),(0,l.kt)("p",null,"Besides, it has several custom methods."),(0,l.kt)("h2",{id:"eth_gettraceactionbytxhash"},"eth_getTraceActionByTxHash"),(0,l.kt)("p",null,"Returns logs of internal transactions by hash of a transaction."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"DATA, 32 Bytes - hash of a transaction")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Object - The filter options:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"fromUser: DATA|Array, 20 Bytes - (optional) address of the sender."),(0,l.kt)("li",{parentName:"ul"},"toBlock: DATA|Array, 20 Bytes - (optional) address of the receiver."),(0,l.kt)("li",{parentName:"ul"},"opCode: String - (optional) An EVM opcode for a transaction's log."),(0,l.kt)("li",{parentName:"ul"},"minValue: QUANTITY|TAG - (optional) the minimal value or amount transferred in BRC.")))),(0,l.kt)("h3",{id:"returns"},"Returns"),(0,l.kt)("p",null,"Object - A internal transaction's log object, or null when no log was found:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"transactionHash: DATA, 32 Bytes - hash of the transaction."),(0,l.kt)("li",{parentName:"ul"},"blockHash: DATA, 32 Bytes - hash of the block where this transaction was in. null when its pending."),(0,l.kt)("li",{parentName:"ul"},"blockNumber: QUANTITY - block number where this transaction was in."),(0,l.kt)("li",{parentName:"ul"},"logs: Array - Array of log objects, which this transaction generated. The log object:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"from: DATA, 20 Bytes - address of the sender. "),(0,l.kt)("li",{parentName:"ul"},"to: DATA, 20 Bytes - address of the receiver. null when it's a contract creation transaction. "),(0,l.kt)("li",{parentName:"ul"},"value: QUANTITY - value transferred in BRC. "),(0,l.kt)("li",{parentName:"ul"},"success: QUANTITY - a boolean value indicating whether the call was successfully completed. either 1 (success) or 0 (failure)"),(0,l.kt)("li",{parentName:"ul"},"opcode: DATA - the EVM opcode of the transaction's log. "),(0,l.kt)("li",{parentName:"ul"},"depth: QUANTITY - the length of callstack in EVM. "),(0,l.kt)("li",{parentName:"ul"},"gas: QUANTITY - gas provided by the sender. "),(0,l.kt)("li",{parentName:"ul"},"gas_used: QUANTITY - The amount of gas used by this specific transaction alone. "),(0,l.kt)("li",{parentName:"ul"},"input: DATA - the data send along with the transaction. "),(0,l.kt)("li",{parentName:"ul"},"trace_address: QUANTITY|Array - Array of call trace where each element signifies the depth of a call during execution.")))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("p",null,"Request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST --data \'{  "jsonrpc":"2.0",  "method":"eth_getTraceActionByTxHash",  "params":["0xce9a42b2d2e0c0a7984d9351793129b91dc0599b9b4401082b75afcbc6abd694"], "id":1}\'\n')),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1,\n  "jsonrpc": "2.0",\n  "result": [\n    {\n      "transactionHash": "0xce9a42b2d2e0c0a7984d9351793129b91dc0599b9b4401082b75afcbc6abd694",\n      "blockHash": "0x80f5779b0348102d90f5463a9a494b7454d0e1f8d8b119cf090cd90e2d6105c3",\n      "blockNumber": 54,\n      "logs": [\n        {\n          "from": "0x2e46771cff3636a42f363826ff8a94d3a738e075",\n          "to": "0x000000000000000000000000000000000000f000",\n          "value": 0,\n          "success": true,\n          "opcode": "CALL",\n          "depth": 18446744073709551615,\n          "gas": 165629,\n          "gas_used": 162996,\n          "input": "0x6374299e0000000000000000000000009f01eb5eb4dbea8b2cecc679050819990ab68a1a000000000000000000000000000000000000000000295be96e64066972000000",\n          "trace_address": []\n        },\n        {\n          "from": "0x000000000000000000000000000000000000f000",\n          "to": "0x4b20bbf3652696b9afd27b8f88ff8b7c1f361336",\n          "value": 0,\n          "success": true,\n          "opcode": "STATICCALL",\n          "depth": 0,\n          "gas": 157800,\n          "gas_used": 2443,\n          "input": "0x00000000",\n          "output": "0x0000000000000000000000002e46771cff3636a42f363826ff8a94d3a738e075",\n          "trace_address": [\n            0\n          ]\n        },\n        {\n          "from": "0x000000000000000000000000000000000000f000",\n          "to": "0xf4340cf5f3891a3827713b33f769b501a0b5b122",\n          "value": 0,\n          "success": true,\n          "opcode": "STATICCALL",\n          "depth": 0,\n          "gas": 150040,\n          "gas_used": 2814,\n          "input": "0x0000000000000000000000000000000000000000007c13bc4b2c133c560000000000000000000000000000000000000000000000007c13bc4b2c133c5600000000000000",\n          "output": "0x0000000000000000000000000000000000000000007c13bc4b2c133c56000000",\n          "trace_address": [\n            1\n          ]\n        }\n      ]\n    }\n  ]\n}\n')),(0,l.kt)("h2",{id:"eth_gettraceactionbyblocknumber"},"eth_getTraceActionByBlockNumber"),(0,l.kt)("p",null,"Returns logs of internal transactions by block number."),(0,l.kt)("h3",{id:"parameters-1"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"QUANTITY|TAG - integer of a block number")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Object - The filter options:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"fromUser: DATA|Array, 20 Bytes - (optional) address of the sender. "),(0,l.kt)("li",{parentName:"ul"},"toBlock: DATA|Array, 20 Bytes - (optional) address of the receiver. "),(0,l.kt)("li",{parentName:"ul"},"opCode: String - (optional) An EVM opcode for a transaction's log. "),(0,l.kt)("li",{parentName:"ul"},"minValue: QUANTITY|TAG - (optional) the minimal value or amount transferred in BRC.")))),(0,l.kt)("h3",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,"Same as ",(0,l.kt)("a",{parentName:"p",href:"#returns"},"eth_getTraceActionByTxHash")),(0,l.kt)("h3",{id:"example-1"},"Example"),(0,l.kt)("p",null,"Request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST --data \'{  "jsonrpc":"2.0",  "method":"eth_getTraceActionByBlockNumber",  "params":["0x36"],  "id":1}\'\n')),(0,l.kt)("p",null,"Result see ",(0,l.kt)("a",{parentName:"p",href:"#example"},"eth_getTraceActionByTxHash")),(0,l.kt)("h2",{id:"eth_gettraceactionbyblockhash"},"eth_getTraceActionByBlockHash"),(0,l.kt)("p",null,"Returns logs of internal transactions by block hash."),(0,l.kt)("h3",{id:"parameters-2"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"DATA, 32 Bytes - Hash of a block.")),(0,l.kt)("h3",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,"Same as ",(0,l.kt)("a",{parentName:"p",href:"#returns"},"eth_getTraceActionByTxHash")),(0,l.kt)("h3",{id:"example-2"},"Example"),(0,l.kt)("p",null,"Request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST --data \'{  "jsonrpc":"2.0",  "method":"eth_getTraceActionByBlockHash",  "params":["0x80f5779b0348102d90f5463a9a494b7454d0e1f8d8b119cf090cd90e2d6105c3"],  "id":1}\'\n')),(0,l.kt)("p",null,"Result see ",(0,l.kt)("a",{parentName:"p",href:"#example"},"eth_getTraceActionByTxHash")))}m.isMDXComponent=!0}}]);