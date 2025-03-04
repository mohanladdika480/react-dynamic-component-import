"use strict";(self.webpackChunkfrontend_concepts=self.webpackChunkfrontend_concepts||[]).push([[446,530,642,678],{6446:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});t(5043);var o=t(1187),s=t(579);const a=e=>{const{handleClick:n,styles:t,children:a,disabled:i}=e;return(0,s.jsx)(o.A,{sx:{background:"transparent",border:"1px solid #880E4F",color:"#880E4F",textTransform:"none",fontWeight:"600",...t,"&:disabled":{opacity:.4,border:"1px solid grey",color:"grey"}},onClick:n,disabled:i,children:a})}},7678:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var o=t(5043),s=t(2347),a=t(9662),i=t(579);const c=(0,a.A)((0,i.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");var l=t(6446),r=t(9590);const d=e=>{let{conceptData:n}=e;const{topic:t,subTopics:a}=n,[d,u]=(0,o.useState)(null),p=()=>{u(null)},h=()=>{window.scrollTo(0,0,"smooth"),u(d+1)},m=()=>{window.scrollTo(0,0,"smooth"),u(d-1)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.A,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(s.A,{title:"Back to Main",component:"span",className:"display_flex",children:(0,i.jsx)(c,{onClick:()=>{var e,n,t;window.scrollTo(0,0,"smooth");const[o]=null===(e=window.location.hash)||void 0===e||null===(n=e.replace("#",""))||void 0===n?void 0:n.split("_");o&&(window.location.hash=null===r.tabs||void 0===r.tabs||null===(t=r.tabs.find((e=>e.name===o)))||void 0===t?void 0:t.href)},sx:{mr:"10px",cursor:"pointer"}})}),(0,i.jsx)("h1",{children:t})]}),d?(()=>{const{topicName:e,detailedList:n}=null===a||void 0===a?void 0:a[d-1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.A,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(c,{onClick:p,sx:{mr:"10px",cursor:"pointer"}}),(0,i.jsx)("h2",{className:"text_color_1 no_margin",children:e})]}),null===n||void 0===n?void 0:n.map(((e,n)=>{var t,o,a;return(0,i.jsxs)(s.A,{sx:{pl:e.padLeft?4:0},children:[(0,i.jsx)("h2",{children:e.contentName}),(null===e||void 0===e?void 0:e.contentList)&&(0,i.jsx)("ul",{className:"list_style_content",children:null===e||void 0===e||null===(t=e.contentList)||void 0===t?void 0:t.map(((n,t)=>(0,i.jsx)("li",{dangerouslySetInnerHTML:{__html:n}},`${e.contentName}_${t}`)))}),(null===e||void 0===e?void 0:e.contentTable)&&(0,i.jsx)(s.A,{className:"scrollbar_auto_styles",children:(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:null===e||void 0===e||null===(o=e.contentTable)||void 0===o?void 0:o.headers.map(((n,t)=>(0,i.jsx)("th",{children:n},`${e.contentName}_${t}`)))})}),(0,i.jsx)("tbody",{children:null===e||void 0===e||null===(a=e.contentTable)||void 0===a?void 0:a.rows.map(((n,t)=>(0,i.jsx)("tr",{children:n.map(((n,o)=>(0,i.jsx)("td",{children:n},`${e.contentName}_${t}_${o}`)))},`${e.contentName}_${t}`)))})]})}),e.contentCodeBlock&&(0,i.jsx)("pre",{children:(0,i.jsx)("code",{children:e.contentCodeBlock})})]},n)})),(0,i.jsxs)(s.A,{sx:{mt:"20px",display:"flex",justifyContent:"flex-end",gap:"10px"},children:[(0,i.jsx)(l.default,{handleClick:m,disabled:1===d,children:"\u2bc7 Previous"}),(0,i.jsx)(l.default,{handleClick:h,disabled:d===(null===a||void 0===a?void 0:a.length),children:"Next \u2bc8"})]})]})})():(0,i.jsx)("ol",{className:"list_heading",children:null===n||void 0===n?void 0:n.subTopics.map(((e,n)=>(0,i.jsx)("li",{onClick:()=>(e=>{u(e+1)})(n),children:null===e||void 0===e?void 0:e.topicName},n)))})]})}},3530:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});t(5043);var o=t(7678),s=t(5642),a=t(579);const i={topic:"React Component Lifecycle and Hooks",subTopics:[{topicName:"React Component Lifecycle",detailedList:s.componentLifeCycle},{topicName:"What are Hooks?",detailedList:s.reactHooks},{topicName:"useState hook",detailedList:s.useStateHook}]},c=()=>(0,a.jsx)(o.default,{conceptData:i})},5642:(e,n,t)=>{t.r(n),t.d(n,{componentLifeCycle:()=>o,reactHooks:()=>s,useEffectHook:()=>i,useStateHook:()=>a});const o=[{contentName:"1. React Component Lifecycle",contentList:["React component lifecycle is a series of methods that are invoked in different stages of the component's existence. These methods are called lifecycle methods.","React component has three main phases: Mounting, Updating, and Unmounting.","<b>Mounting</b> (componentDidMount), <b>Updating</b> (componentDidUpdate), and <b>Unmounting</b> (componentWillUnmount) are the three main phases of a React component.","In functional components, we use the useEffect hook to perform side effects in the component. dependecy array in useEffect hook is used to specify when the effect should run. return statement in useEffect hook is used to clean up the effect when the component is unmounted."]},{contentName:"a. Mounting Phase",contentList:["This is the phase in which the component is created and inserted into the DOM.",'<span class="semibold_italic">1. The following methods are called in the mounting phase in the class components:</span>',"<b>constructor():</b> This is the first method that is called when a component is created. Used for initializing state and binding event handlers.","<b>render():</b> This method is called to render the component. It returns the JSX that represents the component.","<b>componentDidMount():</b> This method is called after the component has been rendered to the DOM. It is used for making API calls and setting up subscriptions.",'<span class="semibold_italic">2. The following methods are called in the mounting phase in the functional components:</span>',"<b>useEffect():</b> This hook is used to perform side effects in functional components. It is called after the component has been rendered to the DOM.","Example: When user clicks on the cart icon in a shopping cart application, the cart component is mounted and the cart items are fetched from the server using an API call in the mounting phase.","Used for fetching data, setting up subscriptions, and initializing state."],contentCodeBlock:"class App extends React.Component {\n\n  constructor(props) { // for initializing state and binding event handlers\n    super(props);\n    this.state = { count: 0 };\n  }\n\n  componentDidMount() { // for making API calls and setting up subscriptions (afrer component is rendered)\n    console.log('Component mounted');\n  }\n\n  render() { // called to render the component with JSX\n    return <div>Hello World</div>;\n  }\n}\n\n\n// Functional component using useEffect hook\nfunction App() {\n\n  useEffect(() => { // used to perform side effects like making API calls and setting up subscriptions\n    console.log('Component mounted');\n  }, []);\n\n  // return the JSX that represents the component which will be rendered to the DOM\n  return <div>Hello World</div>;\n}",padLeft:!0},{contentName:"b. Updating Phase",contentList:["This is the phase in which the component is updated in response to changes in props or state.",'<span class="semibold_italic">1. The following methods are called in the updating phase in the class components:</span>',"<b>render():</b> This method is called to render the component whenever the state or props change.","<b>componentDidUpdate():</b> This method is called after the component has been updated. It is used for updating the DOM in response to prop or state changes.",'<span class="semibold_italic">2. The following methods are called in the updating phase in the functional components:</span>',"<b>useEffect():</b> This hook is called after the component has been updated. It is used to perform side effects in response to prop or state changes (by specifying the dependencies in the dependency array).",'Example: Suppose there is an add to cart functionality in a shopping cart application. When the user clicks on the "Add to Cart" button, the count of items in the cart is updated without refreshing the page.',"Used for fetching new data when props/state change, updating DOM, logging analytics."],contentCodeBlock:"class App extends React.Component {\n\n  constructor(props) {\n    super(props);\n    this.state = { count: 0 };\n  }\n\n  componentDidUpdate(prevProps, prevState) { // called after the component has been updated\n    if (prevState.count !== this.state.count) {\n      console.log('Component updated');\n    }\n  }\n\n  render() { // called to render the component with JSX\n    return (\n      <div>\n        <p>Count: {this.state.count}</p>\n        <button onClick={() => this.setState({ count: this.state.count + 1 })}>\n          Increment\n        </button>\n      </div>\n    );\n  }\n}\n\n\n// Functional component using useEffect hook\nfunction App() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => { // called after the component has been updated\n    console.log('Component updated');\n  }, [count]); // dependency array specifies when the effect should run\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>\n        Increment\n      </button>\n    </div>\n  );\n}\n  \n\n// In componentDidUpdate, we can compare the previous state and current state to perform actions based on state changes.\n// In useEffect, we can specify the dependencies in the dependency array to run the effect only when the specified dependencies change.\n// In the above example, the effect will run only when the count state changes.\n",padLeft:!0},{contentName:"c. Unmounting Phase",contentList:["This is the phase in which the component is removed from the DOM.",'<span class="semibold_italic">1. The following method is called in the unmounting phase in the class components:</span>',"<b>componentWillUnmount():</b> This method is called just before the component is removed from the DOM. It is used for cleaning up subscriptions and other resources.",'<span class="semibold_italic">2. The following method is called in the unmounting phase in the functional components:</span>',"<b>useEffect():</b> This hook is called when the component is unmounted. It is used for cleaning up side effects.","Example: When you close a chat window, React needs to clean up memory by removing event listeners and stopping API calls.","Used for cleaning up timers, event listeners, and other resources."],contentCodeBlock:"class App extends React.Component {\n\n  componentWillUnmount() { // called just before the component is removed from the DOM\n    console.log('Component will unmount');\n  }\n\n  render() { // called to render the component with JSX\n    return <div>Hello World</div>;\n  }\n}\n\n\n// Functional component using useEffect hook\nfunction App() {\n\n  useEffect(() => {\n    // return a cleanup function to be called when the component is unmounted\n    return () => {\n      console.log('Component will unmount');\n    };\n  }, []);\n\n  // return the JSX that represents the component which will be rendered to the DOM\n  return <div>Hello World</div>;\n}\n\n// In componentWillUnmount, we can clean up subscriptions and other resources.\n// In useEffect, we can return a cleanup function to clean up side effects when the component is unmounted.\n",padLeft:!0},{contentName:"2. Summary Table (For Quick Recap) ",contentTable:{headers:["Phase","Class Component Method","Functional Component Hook","Use Case Example \ud83d\ude80"],rows:[["Mounting","componentDidMount()","useEffect(() => {}, [])","Fetch product details when page loads"],["Updating","componentDidUpdate()","useEffect(() => {}, [dependency])","Update cart count when an item is added"],["Unmounting","componentWillUnmount()","Cleanup inside useEffect","Close chat window & remove event listeners"]]}},{contentName:"3. Additional Notes Take Away",contentTable:{headers:["Concept","Key Learning"],rows:[["Lifecycle Phases","Mounting, Updating, Unmounting"],["Best Place for API Calls?","componentDidMount() or useEffect(() => {}, [])"],["Preventing Unnecessary Renders?","shouldComponentUpdate() or useMemo()"],["Cleanup in Functional Components?","Return a cleanup function inside useEffect()"],["Handling Errors","componentDidCatch() or useErrorBoundary()"],["State Initialization","constructor() or useState()"],["Side Effects","componentDidMount(), componentDidUpdate(), componentWillUnmount() or useEffect()"]]}}],s=[{contentName:"1. React Hooks",contentList:["Hooks are special functions in React that let us use state and lifecycle features inside functional components, without needing class components.","Before Hooks, we had to use Class Components to manage state (this.state) and lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount).","After the introduction of hooks, functional components have become more popular as they can now have state and lifecycle methods keeping class components aside because of their complexity, maintainability, and more boilerplate code."]},{contentName:"a. Advantages of React Hooks",contentList:['<span class="semibold_italic">Easier to read and write:</span> Hooks make it easier to read and write code by allowing us to use state and lifecycle features in functional components.','<span class="semibold_italic">Reusable logic:</span> Hooks enable us to reuse logic across multiple components without changing the component hierarchy.','<span class="semibold_italic">Better performance optimization:</span> Hooks provide better performance optimization by allowing us to optimize the rendering process.','<span class="semibold_italic">Simplified codebase:</span> Hooks simplify the codebase by reducing the amount of boilerplate code required in class components.',"<span class=\"semibold_italic\">No need to worry about 'this' keyword:</span> Hooks eliminate the need to worry about the 'this' keyword, making it easier to understand and maintain the code."],padLeft:!0},{contentName:"b. Rules of Hooks",contentList:['<span class="semibold_italic">should be called at the top level of the functional component.</span>','<span class="semibold_italic">should only be called from React functional components or custom hooks. </span>','<span class="semibold_italic">should not be called from regular JavaScript functions.</span>','<span class="semibold_italic">should not be called conditionally.</span>','<span class="semibold_italic">should always be called in the same order.</span>','<span class="semibold_italic">should not be called inside loops, conditions, or nested functions.</span>',"Example: If you have a custom hook that uses useState, useEffect, or any other hook, you should call it from a functional component or another custom hook."],contentCodeBlock:"// Correct usage of hooks\nfunction App() {\n  const [count, setCount] = useState(0);\n  useEffect(() => {\n    console.log('Component mounted');\n  }\n  return <div>Hello World</div>;\n}\n\n// Incorrect usage of hooks\n\nfunction App() {\n  if (condition) {\n    const [count, setCount] = useState(0); // \u274c Cannot call hooks conditionally\n  }\n  return <div>Hello World</div>;\n}\n\nfunction App() {\n  const [count, setCount] = useState(0);\n  if (condition) {\n    useEffect(() => {\n      console.log('Component mounted');\n    }); // \u274c Cannot call hooks inside conditions\n  }\n  return <div>Hello World</div>;\n}",padLeft:!0}],a=[{contentName:"1. useState Hook",contentList:["useState is a hook in React that allows functional components to manage state.","Before hooks, state could only be used in class components using this.state.","With useState, we can store values, update them dynamically, and trigger re-renders when the state changes.","useState takes an initial state value as an argument and returns an array with two elements: the current state value and a function to update the state.","The function returned by useState can be called with a new state value or a function that updates the state based on the previous state."],contentCodeBlock:"import React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count => count + 1)}>\n        Increment\n      </button>\n    </div>\n  );\n}\n\n1. In the above example, we are using the useState hook to manage the count state.\n2. The initial state of count is set to 0 using useState(0).\n3. The return value of useState is an array with two elements: the state variable (count) and a function to update the state (setCount).\n4. We are using the setCount function to update the count state when the button is clicked.\n5. When the state is updated, React will re-render the component to reflect the new state value.\n",padLeft:!0},{contentName:"2. Core principles of useState",contentList:["<span class=\"semibold_italic\">Immutability:</span> It's crucial to understand that you never directly modify the state variable. You always use the update function. This is because React relies on immutability to efficiently track changes and optimize rendering. If you mutate the state directly, React won't know something changed, and your UI won't update.","<span class=\"semibold_italic\">Asynchronous Updates:</span> State updates scheduled by the update function are asynchronous. This means they don't happen immediately. React batches multiple state updates together for performance reasons. This is important to remember when you're dealing with logic that depends on the updated state value.",'<span class="semibold_italic">Functional Updates (Optional, but Powerful):</span> If the new state value depends on the previous state value, you should use the functional update form of the state update function. Instead of passing the new state value directly, you pass a function. This function receives the previous state value as an argument, and you return the new state value. This ensures you\'re always working with the most up-to-date state, even if multiple updates are batched together.','<span class="semibold_italic">Lazy Initialization:</span> If the initial state is the result of an expensive computation, you can pass a function to useState. The function will be called only once to set the initial state. This can improve performance by avoiding unnecessary computations on every render.','<span class="semibold_italic">State Persistence:</span> The state value persists across re-renders. This means that the state value is retained even if the component re-renders due to a parent component re-rendering or a state change within the component.'],contentCodeBlock:"import React, { useState } from 'react';\n\n// Immutability\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  const increment = () => {\n    // Directly modifying the state variable will not work\n    // count = count + 1; // \u274c This will not work\n\n    // Use the update function to update the state\n    setCount(count + 1);\n  };\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={increment}>Increment</button>\n    </div>\n  );\n}\n\n// Asynchronous Updates\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  const increment = () => {\n    // State updates are asynchronous\n    setCount(count + 1);\n    console.log(count); // This will log the old count value\n  };\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={increment}>Increment</button>\n    </div>\n  );\n}\n\n// Functional Updates (prevState)\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  const increment = () => {\n    // using state variable directly will not work\n    // setCount(count + 1); // \u274c This will not work\n    // setCount(count + 1); // This will increment the count by 1\n\n    // Use functional update to get the latest state value\n    setCount(prevCount => prevCount + 1);\n    setCount(prevCount => prevCount + 1); // This will increment the count by 2\n  };\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={increment}>Increment</button>\n    </div>\n  );\n}\n\n// Lazy Initialization (Expensive computation)\nfunction ExpensiveComponent() {\n  const [value, setValue] = useState(() => {\n    // Expensive computation for initial state\n    return computeExpensiveValue();\n  });\n\n  return <div>Value: {value}</div>;\n}\n\nfunction computeExpensiveValue() {\n  // Simulate expensive computation\n  return 42;\n}\n",padLeft:!0}],i=[{contentName:"1. useEffect Hook",contentList:["useEffect is a hook in React that allows functional components to perform side effects.","Side effects include data fetching, subscriptions, or manually changing the DOM in React components.","useEffect is called after the component is rendered to the DOM and can be used to manage side effects in functional components.","useEffect takes two arguments: a function that contains the side effect logic and an optional dependency array.","The function passed to useEffect is called after the component is rendered to the DOM. The dependency array specifies when the effect should run."]}]},2347:(e,n,t)=>{t.d(n,{A:()=>b});var o=t(5043),s=t(8387),a=t(4984),i=t(8812),c=t(9172),l=t(1406);function r(e){const{sx:n,...t}=e,{systemProps:o,otherProps:s}=(e=>{const n={systemProps:{},otherProps:{}},t=e?.theme?.unstable_sxConfig??l.A;return Object.keys(e).forEach((o=>{t[o]?n.systemProps[o]=e[o]:n.otherProps[o]=e[o]})),n})(t);let a;return a=Array.isArray(n)?[o,...n]:"function"===typeof n?function(){const e=n(...arguments);return(0,c.Q)(e)?{...o,...e}:o}:{...o,...n},{...s,sx:a}}var d=t(3693),u=t(579);var p=t(9386),h=t(638),m=t(3375);const f=(0,t(2532).A)("MuiBox",["root"]),v=(0,h.A)(),g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{themeId:n,defaultTheme:t,defaultClassName:c="MuiBox-root",generateClassName:l}=e,p=(0,a.Ay)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(i.A);return o.forwardRef((function(e,o){const a=(0,d.A)(t),{className:i,component:h="div",...m}=r(e);return(0,u.jsx)(p,{as:h,ref:o,className:(0,s.A)(i,l?l(c):c),theme:n&&a[n]||a,...m})}))}({themeId:m.A,defaultTheme:v,defaultClassName:f.root,generateClassName:p.A.generate}),b=g},9662:(e,n,t)=>{t.d(n,{A:()=>g});var o=t(5043),s=t(8387),a=t(8610),i=t(6803),c=t(2108),l=t(6262),r=t(6431),d=t(2532),u=t(2372);function p(e){return(0,u.Ay)("MuiSvgIcon",e)}(0,d.A)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var h=t(579);const m=(0,c.Ay)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,"inherit"!==t.color&&n[`color${(0,i.A)(t.color)}`],n[`fontSize${(0,i.A)(t.fontSize)}`]]}})((0,l.A)((e=>{let{theme:n}=e;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:n.transitions?.create?.("fill",{duration:(n.vars??n).transitions?.duration?.shorter}),variants:[{props:e=>!e.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:n.typography?.pxToRem?.(20)||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:n.typography?.pxToRem?.(24)||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:n.typography?.pxToRem?.(35)||"2.1875rem"}},...Object.entries((n.vars??n).palette).filter((e=>{let[,n]=e;return n&&n.main})).map((e=>{let[t]=e;return{props:{color:t},style:{color:(n.vars??n).palette?.[t]?.main}}})),{props:{color:"action"},style:{color:(n.vars??n).palette?.action?.active}},{props:{color:"disabled"},style:{color:(n.vars??n).palette?.action?.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}}))),f=o.forwardRef((function(e,n){const t=(0,r.b)({props:e,name:"MuiSvgIcon"}),{children:c,className:l,color:d="inherit",component:u="svg",fontSize:f="medium",htmlColor:v,inheritViewBox:g=!1,titleAccess:b,viewBox:y="0 0 24 24",...w}=t,C=o.isValidElement(c)&&"svg"===c.type,k={...t,color:d,component:u,fontSize:f,instanceFontSize:e.fontSize,inheritViewBox:g,viewBox:y,hasSvgAsChild:C},x={};g||(x.viewBox=y);const S=(e=>{const{color:n,fontSize:t,classes:o}=e,s={root:["root","inherit"!==n&&`color${(0,i.A)(n)}`,`fontSize${(0,i.A)(t)}`]};return(0,a.A)(s,p,o)})(k);return(0,h.jsxs)(m,{as:u,className:(0,s.A)(S.root,l),focusable:"false",color:v,"aria-hidden":!b||void 0,role:b?"img":void 0,ref:n,...x,...w,...C&&c.props,ownerState:k,children:[C?c.props.children:c,b?(0,h.jsx)("title",{children:b}):null]})}));f.muiName="SvgIcon";const v=f;function g(e,n){function t(t,o){return(0,h.jsx)(v,{"data-testid":`${n}Icon`,ref:o,...t,children:e})}return t.muiName=v.muiName,o.memo(o.forwardRef(t))}},3693:(e,n,t)=>{t.d(n,{A:()=>l});var o=t(3216),s=t(5043),a=t(9369);const i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;const n=s.useContext(a.T);return n&&(t=n,0!==Object.keys(t).length)?n:e;var t},c=(0,o.A)();const l=function(){return i(arguments.length>0&&void 0!==arguments[0]?arguments[0]:c)}}}]);
//# sourceMappingURL=530.73255ec3.chunk.js.map