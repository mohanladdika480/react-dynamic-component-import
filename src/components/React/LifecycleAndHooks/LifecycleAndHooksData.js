const componentLifeCycle = [
  {
    contentName: "1. React Component Lifecycle",
    contentList: [
      `React component lifecycle is a series of methods that are invoked in different stages of the component's existence. These methods are called lifecycle methods.`,
      `React component has three main phases: Mounting, Updating, and Unmounting.`,
      `<b>Mounting</b> (componentDidMount), <b>Updating</b> (componentDidUpdate), and <b>Unmounting</b> (componentWillUnmount) are the three main phases of a React component.`,
      `In functional components, we use the useEffect hook to perform side effects in the component. dependecy array in useEffect hook is used to specify when the effect should run. return statement in useEffect hook is used to clean up the effect when the component is unmounted.`,
    ],
  },
  {
    contentName: "a. Mounting Phase",
    contentList: [
      `This is the phase in which the component is created and inserted into the DOM.`,
      `<span class="semibold_italic">1. The following methods are called in the mounting phase in the class components:</span>`,
      `<b>constructor():</b> This is the first method that is called when a component is created. Used for initializing state and binding event handlers.`,
      `<b>render():</b> This method is called to render the component. It returns the JSX that represents the component.`,
      `<b>componentDidMount():</b> This method is called after the component has been rendered to the DOM. It is used for making API calls and setting up subscriptions.`,
      `<span class="semibold_italic">2. The following methods are called in the mounting phase in the functional components:</span>`,
      `<b>useEffect():</b> This hook is used to perform side effects in functional components. It is called after the component has been rendered to the DOM.`,
      `Example: When user clicks on the cart icon in a shopping cart application, the cart component is mounted and the cart items are fetched from the server using an API call in the mounting phase.`,
      `Used for fetching data, setting up subscriptions, and initializing state.`,
    ],
    contentCodeBlock: `class App extends React.Component {

  constructor(props) { // for initializing state and binding event handlers
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() { // for making API calls and setting up subscriptions (afrer component is rendered)
    console.log('Component mounted');
  }

  render() { // called to render the component with JSX
    return <div>Hello World</div>;
  }
}


// Functional component using useEffect hook
function App() {

  useEffect(() => { // used to perform side effects like making API calls and setting up subscriptions
    console.log('Component mounted');
  }, []);

  // return the JSX that represents the component which will be rendered to the DOM
  return <div>Hello World</div>;
}`,
    padLeft: true,
  },
  {
    contentName: "b. Updating Phase",
    contentList: [
      `This is the phase in which the component is updated in response to changes in props or state.`,
      `<span class="semibold_italic">1. The following methods are called in the updating phase in the class components:</span>`,
      `<b>render():</b> This method is called to render the component whenever the state or props change.`,
      `<b>componentDidUpdate():</b> This method is called after the component has been updated. It is used for updating the DOM in response to prop or state changes.`,
      `<span class="semibold_italic">2. The following methods are called in the updating phase in the functional components:</span>`,
      `<b>useEffect():</b> This hook is called after the component has been updated. It is used to perform side effects in response to prop or state changes (by specifying the dependencies in the dependency array).`,
      `Example: Suppose there is an add to cart functionality in a shopping cart application. When the user clicks on the "Add to Cart" button, the count of items in the cart is updated without refreshing the page.`,
      `Used for fetching new data when props/state change, updating DOM, logging analytics.`
    ],
    contentCodeBlock: `class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidUpdate(prevProps, prevState) { // called after the component has been updated
    if (prevState.count !== this.state.count) {
      console.log('Component updated');
    }
  }

  render() { // called to render the component with JSX
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}


// Functional component using useEffect hook
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => { // called after the component has been updated
    console.log('Component updated');
  }, [count]); // dependency array specifies when the effect should run

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
  

// In componentDidUpdate, we can compare the previous state and current state to perform actions based on state changes.
// In useEffect, we can specify the dependencies in the dependency array to run the effect only when the specified dependencies change.
// In the above example, the effect will run only when the count state changes.
`,
    padLeft: true,
  },
  {
    contentName: "c. Unmounting Phase",
    contentList: [
      `This is the phase in which the component is removed from the DOM.`,
      `<span class="semibold_italic">1. The following method is called in the unmounting phase in the class components:</span>`,
      `<b>componentWillUnmount():</b> This method is called just before the component is removed from the DOM. It is used for cleaning up subscriptions and other resources.`,
      `<span class="semibold_italic">2. The following method is called in the unmounting phase in the functional components:</span>`,
      `<b>useEffect():</b> This hook is called when the component is unmounted. It is used for cleaning up side effects.`,
      `Example: When you close a chat window, React needs to clean up memory by removing event listeners and stopping API calls.`,
      `Used for cleaning up timers, event listeners, and other resources.`,
    ],
    contentCodeBlock: `class App extends React.Component {

  componentWillUnmount() { // called just before the component is removed from the DOM
    console.log('Component will unmount');
  }

  render() { // called to render the component with JSX
    return <div>Hello World</div>;
  }
}


// Functional component using useEffect hook
function App() {

  useEffect(() => {
    // return a cleanup function to be called when the component is unmounted
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  // return the JSX that represents the component which will be rendered to the DOM
  return <div>Hello World</div>;
}

// In componentWillUnmount, we can clean up subscriptions and other resources.
// In useEffect, we can return a cleanup function to clean up side effects when the component is unmounted.
`,
    padLeft: true,
  },
  {
    contentName: "2. Summary Table (For Quick Recap) ",
    contentTable: {
      headers: ["Phase", "Class Component Method", "Functional Component Hook", "Use Case Example 🚀"],
      rows: [
        ["Mounting", "componentDidMount()", "useEffect(() => {}, [])", "Fetch product details when page loads"],
        ["Updating", "componentDidUpdate()", "useEffect(() => {}, [dependency])", "Update cart count when an item is added"],
        ["Unmounting", "componentWillUnmount()", "Cleanup inside useEffect", "Close chat window & remove event listeners"],
      ],
    },
  },
  {
    contentName: "3. Additional Notes Take Away",
    contentTable: {
      headers: ["Concept", "Key Learning"],
      rows: [
        ["Lifecycle Phases", "Mounting, Updating, Unmounting"],
        ["Best Place for API Calls?", "componentDidMount() or useEffect(() => {}, [])"],
        ["Preventing Unnecessary Renders?", "shouldComponentUpdate() or useMemo()"],
        ["Cleanup in Functional Components?", "Return a cleanup function inside useEffect()"],
        ["Handling Errors", "componentDidCatch() or useErrorBoundary()"],
        ["State Initialization", "constructor() or useState()"],
        ["Side Effects", "componentDidMount(), componentDidUpdate(), componentWillUnmount() or useEffect()"],
      ],
    },
  },
];

export { componentLifeCycle };
