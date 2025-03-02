"use strict";(self.webpackChunkfrontend_concepts=self.webpackChunkfrontend_concepts||[]).push([[446,530,642,678],{6446:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});t(5043);var o=t(1187),s=t(579);const i=e=>{const{handleClick:n,styles:t,children:i,disabled:c}=e;return(0,s.jsx)(o.A,{sx:{background:"transparent",border:"1px solid #880E4F",color:"#880E4F",textTransform:"none",fontWeight:"600",...t,"&:disabled":{opacity:.4,border:"1px solid grey",color:"grey"}},onClick:n,disabled:c,children:i})}},7678:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var o=t(5043),s=t(2347),i=t(9662),c=t(579);const a=(0,i.A)((0,c.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");var r=t(6446),l=t(9590);const d=e=>{let{conceptData:n}=e;const{topic:t,subTopics:i}=n,[d,p]=(0,o.useState)(null),h=()=>{p(null)},u=()=>{window.scrollTo(0,0,"smooth"),p(d+1)},m=()=>{window.scrollTo(0,0,"smooth"),p(d-1)};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.A,{sx:{display:"flex",alignItems:"center"},children:[(0,c.jsx)(s.A,{title:"Back to Main",component:"span",className:"display_flex",children:(0,c.jsx)(a,{onClick:()=>{var e,n,t;window.scrollTo(0,0,"smooth");const[o]=null===(e=window.location.hash)||void 0===e||null===(n=e.replace("#",""))||void 0===n?void 0:n.split("_");o&&(window.location.hash=null===l.tabs||void 0===l.tabs||null===(t=l.tabs.find((e=>e.name===o)))||void 0===t?void 0:t.href)},sx:{mr:"10px",cursor:"pointer"}})}),(0,c.jsx)("h1",{children:t})]}),d?(()=>{const{topicName:e,detailedList:n}=null===i||void 0===i?void 0:i[d-1];return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.A,{sx:{display:"flex",alignItems:"center"},children:[(0,c.jsx)(a,{onClick:h,sx:{mr:"10px",cursor:"pointer"}}),(0,c.jsx)("h2",{className:"text_color_1 no_margin",children:e})]}),null===n||void 0===n?void 0:n.map(((e,n)=>{var t,o,i;return(0,c.jsxs)(s.A,{sx:{pl:e.padLeft?4:0},children:[(0,c.jsx)("h2",{children:e.contentName}),(null===e||void 0===e?void 0:e.contentList)&&(0,c.jsx)("ul",{className:"list_style_content",children:null===e||void 0===e||null===(t=e.contentList)||void 0===t?void 0:t.map(((n,t)=>(0,c.jsx)("li",{dangerouslySetInnerHTML:{__html:n}},`${e.contentName}_${t}`)))}),(null===e||void 0===e?void 0:e.contentTable)&&(0,c.jsx)(s.A,{className:"scrollbar_auto_styles",children:(0,c.jsxs)("table",{children:[(0,c.jsx)("thead",{children:(0,c.jsx)("tr",{children:null===e||void 0===e||null===(o=e.contentTable)||void 0===o?void 0:o.headers.map(((n,t)=>(0,c.jsx)("th",{children:n},`${e.contentName}_${t}`)))})}),(0,c.jsx)("tbody",{children:null===e||void 0===e||null===(i=e.contentTable)||void 0===i?void 0:i.rows.map(((n,t)=>(0,c.jsx)("tr",{children:n.map(((n,o)=>(0,c.jsx)("td",{children:n},`${e.contentName}_${t}_${o}`)))},`${e.contentName}_${t}`)))})]})}),e.contentCodeBlock&&(0,c.jsx)("pre",{children:(0,c.jsx)("code",{children:e.contentCodeBlock})})]},n)})),(0,c.jsxs)(s.A,{sx:{mt:"20px",display:"flex",justifyContent:"flex-end",gap:"10px"},children:[(0,c.jsx)(r.default,{handleClick:m,disabled:1===d,children:"\u2bc7 Previous"}),(0,c.jsx)(r.default,{handleClick:u,disabled:d===(null===i||void 0===i?void 0:i.length),children:"Next \u2bc8"})]})]})})():(0,c.jsx)("ol",{className:"list_heading",children:null===n||void 0===n?void 0:n.subTopics.map(((e,n)=>(0,c.jsx)("li",{onClick:()=>(e=>{p(e+1)})(n),children:null===e||void 0===e?void 0:e.topicName},n)))})]})}},3530:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});t(5043);var o=t(7678),s=t(5642),i=t(579);const c={topic:"React Component Lifecycle and Hooks",subTopics:[{topicName:"React Component Lifecycle",detailedList:s.componentLifeCycle}]},a=()=>(0,i.jsx)(o.default,{conceptData:c})},5642:(e,n,t)=>{t.r(n),t.d(n,{componentLifeCycle:()=>o});const o=[{contentName:"1. React Component Lifecycle",contentList:["React component lifecycle is a series of methods that are invoked in different stages of the component's existence. These methods are called lifecycle methods.","React component has three main phases: Mounting, Updating, and Unmounting.","<b>Mounting</b> (componentDidMount), <b>Updating</b> (componentDidUpdate), and <b>Unmounting</b> (componentWillUnmount) are the three main phases of a React component.","In functional components, we use the useEffect hook to perform side effects in the component. dependecy array in useEffect hook is used to specify when the effect should run. return statement in useEffect hook is used to clean up the effect when the component is unmounted."]},{contentName:"a. Mounting Phase",contentList:["This is the phase in which the component is created and inserted into the DOM.",'<span class="semibold_italic">1. The following methods are called in the mounting phase in the class components:</span>',"<b>constructor():</b> This is the first method that is called when a component is created. Used for initializing state and binding event handlers.","<b>render():</b> This method is called to render the component. It returns the JSX that represents the component.","<b>componentDidMount():</b> This method is called after the component has been rendered to the DOM. It is used for making API calls and setting up subscriptions.",'<span class="semibold_italic">2. The following methods are called in the mounting phase in the functional components:</span>',"<b>useEffect():</b> This hook is used to perform side effects in functional components. It is called after the component has been rendered to the DOM.","Example: When user clicks on the cart icon in a shopping cart application, the cart component is mounted and the cart items are fetched from the server using an API call in the mounting phase.","Used for fetching data, setting up subscriptions, and initializing state."],contentCodeBlock:"class App extends React.Component {\n\n  constructor(props) { // for initializing state and binding event handlers\n    super(props);\n    this.state = { count: 0 };\n  }\n\n  componentDidMount() { // for making API calls and setting up subscriptions (afrer component is rendered)\n    console.log('Component mounted');\n  }\n\n  render() { // called to render the component with JSX\n    return <div>Hello World</div>;\n  }\n}\n\n\n// Functional component using useEffect hook\nfunction App() {\n\n  useEffect(() => { // used to perform side effects like making API calls and setting up subscriptions\n    console.log('Component mounted');\n  }, []);\n\n  // return the JSX that represents the component which will be rendered to the DOM\n  return <div>Hello World</div>;\n}",padLeft:!0},{contentName:"b. Updating Phase",contentList:["This is the phase in which the component is updated in response to changes in props or state.",'<span class="semibold_italic">1. The following methods are called in the updating phase in the class components:</span>',"<b>render():</b> This method is called to render the component whenever the state or props change.","<b>componentDidUpdate():</b> This method is called after the component has been updated. It is used for updating the DOM in response to prop or state changes.",'<span class="semibold_italic">2. The following methods are called in the updating phase in the functional components:</span>',"<b>useEffect():</b> This hook is called after the component has been updated. It is used to perform side effects in response to prop or state changes (by specifying the dependencies in the dependency array).",'Example: Suppose there is an add to cart functionality in a shopping cart application. When the user clicks on the "Add to Cart" button, the count of items in the cart is updated without refreshing the page.',"Used for fetching new data when props/state change, updating DOM, logging analytics."],contentCodeBlock:"class App extends React.Component {\n\n  constructor(props) {\n    super(props);\n    this.state = { count: 0 };\n  }\n\n  componentDidUpdate(prevProps, prevState) { // called after the component has been updated\n    if (prevState.count !== this.state.count) {\n      console.log('Component updated');\n    }\n  }\n\n  render() { // called to render the component with JSX\n    return (\n      <div>\n        <p>Count: {this.state.count}</p>\n        <button onClick={() => this.setState({ count: this.state.count + 1 })}>\n          Increment\n        </button>\n      </div>\n    );\n  }\n}\n\n\n// Functional component using useEffect hook\nfunction App() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => { // called after the component has been updated\n    console.log('Component updated');\n  }, [count]); // dependency array specifies when the effect should run\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>\n        Increment\n      </button>\n    </div>\n  );\n}\n  \n\n// In componentDidUpdate, we can compare the previous state and current state to perform actions based on state changes.\n// In useEffect, we can specify the dependencies in the dependency array to run the effect only when the specified dependencies change.\n// In the above example, the effect will run only when the count state changes.\n",padLeft:!0},{contentName:"c. Unmounting Phase",contentList:["This is the phase in which the component is removed from the DOM.",'<span class="semibold_italic">1. The following method is called in the unmounting phase in the class components:</span>',"<b>componentWillUnmount():</b> This method is called just before the component is removed from the DOM. It is used for cleaning up subscriptions and other resources.",'<span class="semibold_italic">2. The following method is called in the unmounting phase in the functional components:</span>',"<b>useEffect():</b> This hook is called when the component is unmounted. It is used for cleaning up side effects.","Example: When you close a chat window, React needs to clean up memory by removing event listeners and stopping API calls.","Used for cleaning up timers, event listeners, and other resources."],contentCodeBlock:"class App extends React.Component {\n\n  componentWillUnmount() { // called just before the component is removed from the DOM\n    console.log('Component will unmount');\n  }\n\n  render() { // called to render the component with JSX\n    return <div>Hello World</div>;\n  }\n}\n\n\n// Functional component using useEffect hook\nfunction App() {\n\n  useEffect(() => {\n    // return a cleanup function to be called when the component is unmounted\n    return () => {\n      console.log('Component will unmount');\n    };\n  }, []);\n\n  // return the JSX that represents the component which will be rendered to the DOM\n  return <div>Hello World</div>;\n}\n\n// In componentWillUnmount, we can clean up subscriptions and other resources.\n// In useEffect, we can return a cleanup function to clean up side effects when the component is unmounted.\n",padLeft:!0},{contentName:"2. Summary Table (For Quick Recap) ",contentTable:{headers:["Phase","Class Component Method","Functional Component Hook","Use Case Example \ud83d\ude80"],rows:[["Mounting","componentDidMount()","useEffect(() => {}, [])","Fetch product details when page loads"],["Updating","componentDidUpdate()","useEffect(() => {}, [dependency])","Update cart count when an item is added"],["Unmounting","componentWillUnmount()","Cleanup inside useEffect","Close chat window & remove event listeners"]]}},{contentName:"3. Additional Notes Take Away",contentTable:{headers:["Concept","Key Learning"],rows:[["Lifecycle Phases","Mounting, Updating, Unmounting"],["Best Place for API Calls?","componentDidMount() or useEffect(() => {}, [])"],["Preventing Unnecessary Renders?","shouldComponentUpdate() or useMemo()"],["Cleanup in Functional Components?","Return a cleanup function inside useEffect()"],["Handling Errors","componentDidCatch() or useErrorBoundary()"],["State Initialization","constructor() or useState()"],["Side Effects","componentDidMount(), componentDidUpdate(), componentWillUnmount() or useEffect()"]]}}]},2347:(e,n,t)=>{t.d(n,{A:()=>b});var o=t(5043),s=t(8387),i=t(4984),c=t(8812),a=t(9172),r=t(1406);function l(e){const{sx:n,...t}=e,{systemProps:o,otherProps:s}=(e=>{const n={systemProps:{},otherProps:{}},t=e?.theme?.unstable_sxConfig??r.A;return Object.keys(e).forEach((o=>{t[o]?n.systemProps[o]=e[o]:n.otherProps[o]=e[o]})),n})(t);let i;return i=Array.isArray(n)?[o,...n]:"function"===typeof n?function(){const e=n(...arguments);return(0,a.Q)(e)?{...o,...e}:o}:{...o,...n},{...s,sx:i}}var d=t(3693),p=t(579);var h=t(9386),u=t(638),m=t(3375);const f=(0,t(2532).A)("MuiBox",["root"]),g=(0,u.A)(),v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{themeId:n,defaultTheme:t,defaultClassName:a="MuiBox-root",generateClassName:r}=e,h=(0,i.Ay)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(c.A);return o.forwardRef((function(e,o){const i=(0,d.A)(t),{className:c,component:u="div",...m}=l(e);return(0,p.jsx)(h,{as:u,ref:o,className:(0,s.A)(c,r?r(a):a),theme:n&&i[n]||i,...m})}))}({themeId:m.A,defaultTheme:g,defaultClassName:f.root,generateClassName:h.A.generate}),b=v},9662:(e,n,t)=>{t.d(n,{A:()=>v});var o=t(5043),s=t(8387),i=t(8610),c=t(6803),a=t(2108),r=t(6262),l=t(6431),d=t(2532),p=t(2372);function h(e){return(0,p.Ay)("MuiSvgIcon",e)}(0,d.A)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var u=t(579);const m=(0,a.Ay)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,"inherit"!==t.color&&n[`color${(0,c.A)(t.color)}`],n[`fontSize${(0,c.A)(t.fontSize)}`]]}})((0,r.A)((e=>{let{theme:n}=e;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:n.transitions?.create?.("fill",{duration:(n.vars??n).transitions?.duration?.shorter}),variants:[{props:e=>!e.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:n.typography?.pxToRem?.(20)||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:n.typography?.pxToRem?.(24)||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:n.typography?.pxToRem?.(35)||"2.1875rem"}},...Object.entries((n.vars??n).palette).filter((e=>{let[,n]=e;return n&&n.main})).map((e=>{let[t]=e;return{props:{color:t},style:{color:(n.vars??n).palette?.[t]?.main}}})),{props:{color:"action"},style:{color:(n.vars??n).palette?.action?.active}},{props:{color:"disabled"},style:{color:(n.vars??n).palette?.action?.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}}))),f=o.forwardRef((function(e,n){const t=(0,l.b)({props:e,name:"MuiSvgIcon"}),{children:a,className:r,color:d="inherit",component:p="svg",fontSize:f="medium",htmlColor:g,inheritViewBox:v=!1,titleAccess:b,viewBox:x="0 0 24 24",...y}=t,w=o.isValidElement(a)&&"svg"===a.type,C={...t,color:d,component:p,fontSize:f,instanceFontSize:e.fontSize,inheritViewBox:v,viewBox:x,hasSvgAsChild:w},A={};v||(A.viewBox=x);const S=(e=>{const{color:n,fontSize:t,classes:o}=e,s={root:["root","inherit"!==n&&`color${(0,c.A)(n)}`,`fontSize${(0,c.A)(t)}`]};return(0,i.A)(s,h,o)})(C);return(0,u.jsxs)(m,{as:p,className:(0,s.A)(S.root,r),focusable:"false",color:g,"aria-hidden":!b||void 0,role:b?"img":void 0,ref:n,...A,...y,...w&&a.props,ownerState:C,children:[w?a.props.children:a,b?(0,u.jsx)("title",{children:b}):null]})}));f.muiName="SvgIcon";const g=f;function v(e,n){function t(t,o){return(0,u.jsx)(g,{"data-testid":`${n}Icon`,ref:o,...t,children:e})}return t.muiName=g.muiName,o.memo(o.forwardRef(t))}},3693:(e,n,t)=>{t.d(n,{A:()=>r});var o=t(3216),s=t(5043),i=t(9369);const c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;const n=s.useContext(i.T);return n&&(t=n,0!==Object.keys(t).length)?n:e;var t},a=(0,o.A)();const r=function(){return c(arguments.length>0&&void 0!==arguments[0]?arguments[0]:a)}}}]);
//# sourceMappingURL=530.3fccfb94.chunk.js.map