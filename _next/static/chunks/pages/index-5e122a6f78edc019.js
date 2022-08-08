(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(2893)}])},2893:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return C}});var d=c(5893),e=c(9008),f=c.n(e),g=c(6344),h=c.n(g),i=c(8642),j=c(9703),k=c(7294),l=c(4697);function m(){return(m=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function n(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}var o=["htmlWidth","htmlHeight","alt"],p=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"],q=k.forwardRef(function(a,b){var c=a.htmlWidth,d=a.htmlHeight,e=a.alt,f=n(a,o);return k.createElement("img",m({width:c,height:d,ref:b,alt:e},f))});j.Ts&&(q.displayName="NativeImage");var r=(0,i.Gp)(function(a,b){var c,d,e,f,g,h,o,r,s,t,u,v,w,x,y,z,A,B=a.fallbackSrc,C=a.fallback,D=a.src,E=a.srcSet,F=a.align,G=a.fit,H=a.loading,I=a.ignoreFallback,J=a.crossOrigin,K=a.fallbackStrategy,L=a.referrerPolicy,M=n(a,p),N=null!=H||I||!(void 0!==B|| void 0!==C),O=(z=(d=(c=m({},a,{ignoreFallback:N})).loading,e=c.src,f=c.srcSet,g=c.onLoad,h=c.onError,o=c.crossOrigin,r=c.sizes,s=c.ignoreFallback,t=(0,k.useState)("pending"),u=t[0],v=t[1],(0,k.useEffect)(function(){v(e?"loading":"pending")},[e]),w=(0,k.useRef)(),x=(0,k.useCallback)(function(){if(e){y();var a=new Image;a.src=e,o&&(a.crossOrigin=o),f&&(a.srcset=f),r&&(a.sizes=r),d&&(a.loading=d),a.onload=function(a){y(),v("loaded"),null==g||g(a)},a.onerror=function(a){y(),v("failed"),null==h||h(a)},w.current=a}},[e,o,f,r,g,h,d]),y=function(){w.current&&(w.current.onload=null,w.current.onerror=null,w.current=null)},(0,l.a)(function(){if(!s)return"loading"===u&&x(),function(){y()}},[u,x,s]),s?"loaded":u),A=void 0===K?"beforeLoadOrError":K,"loaded"!==z&&"beforeLoadOrError"===A||"failed"===z&&"onError"===A),P=m({ref:b,objectFit:G,objectPosition:F},N?M:(0,j.CE)(M,["onError","onLoad"]));return O?C||k.createElement(i.m$.img,m({as:q,className:"chakra-image__placeholder",src:B},P)):k.createElement(i.m$.img,m({as:q,src:D,srcSet:E,crossOrigin:J,loading:H,referrerPolicy:L,className:"chakra-image"},P))});j.Ts&&(r.displayName="Image");var s=c(7503),t=c.n(s),u=c(1664),v=c.n(u),w=function(a){var b=a.link,c=(a.image,a.header),e=a.meta,f=a.date;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:t().root,children:[(0,d.jsx)(v(),{href:b,children:(0,d.jsx)("h2",{className:t().header,children:c})}),(0,d.jsx)("p",{children:e}),f?(0,d.jsx)("div",{className:t().date,children:(0,d.jsx)("b",{children:(0,d.jsxs)("i",{children:["Create time: ",f.format("DD/MM/YYYY")]})})}):null]}),(0,d.jsx)("div",{className:t().line})]})},x=(0,k.memo)(w),y=c(5863),z=function(){return(0,d.jsx)("div",{className:h().root,children:(0,d.jsxs)("div",{className:h().container,children:[(0,d.jsxs)("div",{className:h().intro,children:[(0,d.jsx)("div",{className:h().left,children:(0,d.jsx)(r,{src:"/avatar.jpg",boxSize:"300px",borderRadius:"full"})}),(0,d.jsxs)("div",{className:h().right,children:[(0,d.jsx)("h1",{children:"Embedded Engineer"}),(0,d.jsx)("p",{style:{marginBottom:"20px"},children:"C/C++ developer"}),(0,d.jsx)("h1",{children:"Education"}),(0,d.jsxs)("p",{children:[(0,d.jsx)("img",{src:"/icon/bachelor-hat.png"}),"Information Technology at Academy of Cryptography Technique"]})]})]}),(0,d.jsxs)("div",{id:"articles",className:h().topics,children:[(0,d.jsx)("h1",{children:"Articles"}),y.Z.map(function(a,b){return(0,d.jsx)(x,{link:a.link,image:a.image,header:a.header,meta:a.meta,date:a.date},b)})]})]})})},A=z,B=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f(),{children:(0,d.jsx)("title",{children:"Home Page"})}),(0,d.jsx)(A,{})]})},C=B},5863:function(a,b,c){"use strict";c.d(b,{Z:function(){return k}});var d=c(5893),e=c(381),f=c.n(e),g=c(3430),h=c.n(g),i=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:h().root})})},j=function(){return(0,d.jsx)(d.Fragment,{})},k=[{link:"/articles/glib-tutorial",header:"GDBus and how to use glib in C embedded linux",meta:"D-Bus is an Inter-Process Communication (IPC) and Remote Procedure Calling (RPC)            mechanism specifically designed for efficient and easy-to-use communication between            processes running on the same machine. It is intended to replace the amalgam of            competing IPC frameworks in this domain with a single, unified protocol that is            tailored specifically for meeting the needs of secure, intra-system IPC.",image:"",date:f()("8/8/2022","DD/MM/YYYY"),page:(0,d.jsx)(i,{})},{link:"/articles/c-cpp-programing",header:"C and CPP programing",meta:"",image:"",date:f()("10/8/2022","DD/MM/YYYY"),page:(0,d.jsx)(j,{})}]},3430:function(a){a.exports={root:"glibtutorial_root__oqZYY"}},6344:function(a){a.exports={root:"home_root__nXJwv",container:"home_container__yKZLv",intro:"home_intro__2bPEi",left:"home_left__jjxqV",right:"home_right__LuadS",topics:"home_topics__aQSwy"}},7503:function(a){a.exports={root:"topic_root__eRDA3",header:"topic_header__Rdvwa",date:"topic_date__CYGNr",line:"topic_line__gAvKV"}},9008:function(a,b,c){a.exports=c(5443)}},function(a){a.O(0,[885,774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])