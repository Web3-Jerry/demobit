"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7401],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4708:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return c},toc:function(){return d},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:4},p="Compile and Run",u={unversionedId:"Build/Compile and Run",id:"Build/Compile and Run",title:"Compile and Run",description:"This guide walks you through compiling and running Bitlayer.",source:"@site/docs/Build/Compile and Run.md",sourceDirName:"Build",slug:"/Build/Compile and Run",permalink:"/demobit/docs/Build/Compile and Run",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Testnet User Guide",permalink:"/demobit/docs/Build/TestnetUserGuide"},next:{title:"Deployment",permalink:"/demobit/docs/Build/Deployment"}},c={},d=[{value:"Download",id:"download",level:2},{value:"Install Golang",id:"install-golang",level:2},{value:"Compile",id:"compile",level:2},{value:"Run",id:"run",level:2}],s={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"compile-and-run"},"Compile and Run"),(0,i.kt)("p",null,"This guide walks you through compiling and running Bitlayer."),(0,i.kt)("h2",{id:"download"},"Download"),(0,i.kt)("p",null,"Download the Bitlayer source code using the following git command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/bitlayer-org/bitlayer-l2.git\n")),(0,i.kt)("h2",{id:"install-golang"},"Install Golang"),(0,i.kt)("p",null,"Before compiling Bitlayer, make sure you have Golang installed on your system. Refer to the official Golang website (",(0,i.kt)("a",{parentName:"p",href:"https://go.dev/dl/"},"https://go.dev/dl/"),") for download and installation instructions."),(0,i.kt)("h2",{id:"compile"},"Compile"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to the directory where you cloned the Bitlayer source code using:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"cd /path/to/bitlayer-l2\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Compile Bitlayer by running the following command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"make geth\n")),(0,i.kt)("p",{parentName:"li"},"This will create a compiled binary in the ",(0,i.kt)("inlineCode",{parentName:"p"},"build/bin")," folder."))),(0,i.kt)("h2",{id:"run"},"Run"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Get a list of available options and their descriptions by running:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"./build/bin/geth --help\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://geth.ethereum.org/docs/fundamentals/command-line-options"},"Command-line Options documentation")," for specific usage details."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Custom Option:")),(0,i.kt)("p",null,"Bitlayer offers a custom option named ",(0,i.kt)("inlineCode",{parentName:"p"},"--traceaction"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--traceaction value     (default: 0)\n    Trace internal tx call/create/suicide action, 0=no trace, 1=trace only native token > 0, 2=trace all\n")),(0,i.kt)("p",null,"This option allows you to enable or disable custom JSON-RPC methods for tracing internal transactions."))}m.isMDXComponent=!0}}]);