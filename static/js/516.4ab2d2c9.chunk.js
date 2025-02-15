"use strict";(self.webpackChunkfrontend_concepts=self.webpackChunkfrontend_concepts||[]).push([[516],{516:(e,s,n)=>{n.r(s),n.d(s,{default:()=>o});n(43);var r=n(579);const o=()=>(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"JavaScript Promises"}),(0,r.jsx)("p",{children:"Promises in JavaScript are used to handle asynchronous operations. They represent a value that may be available now, or in the future, or never."}),(0,r.jsx)("h2",{children:"Creating a Promise"}),(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:"const promise = new Promise((resolve, reject) => {\n  const success = true;\n  if (success) {\n    resolve('Promise resolved successfully!');\n  } else {\n    reject('Promise rejected.');\n  }\n});"})}),(0,r.jsx)("h2",{children:"Using Promises"}),(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:"promise\n  .then(result => {\n    console.log(result); // Promise resolved successfully!\n  })\n  .catch(error => {\n    console.error(error);\n  });"})}),(0,r.jsx)("h2",{children:"Chaining Promises"}),(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:"const fetchData = () => {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve('Data fetched');\n    }, 2000);\n  });\n};\n\nfetchData()\n  .then(data => {\n    console.log(data); // Data fetched\n    return 'Processing data';\n  })\n  .then(processedData => {\n    console.log(processedData); // Processing data\n  });"})})]})}}]);
//# sourceMappingURL=516.4ab2d2c9.chunk.js.map