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
      `Used for fetching new data when props/state change, updating DOM, logging analytics.`,
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
      headers: [
        "Phase",
        "Class Component Method",
        "Functional Component Hook",
        "Use Case Example 🚀",
      ],
      rows: [
        [
          "Mounting",
          "componentDidMount()",
          "useEffect(() => {}, [])",
          "Fetch product details when page loads",
        ],
        [
          "Updating",
          "componentDidUpdate()",
          "useEffect(() => {}, [dependency])",
          "Update cart count when an item is added",
        ],
        [
          "Unmounting",
          "componentWillUnmount()",
          "Cleanup inside useEffect",
          "Close chat window & remove event listeners",
        ],
      ],
    },
  },
  {
    contentName: "3. Additional Notes Take Away",
    contentTable: {
      headers: ["Concept", "Key Learning"],
      rows: [
        ["Lifecycle Phases", "Mounting, Updating, Unmounting"],
        [
          "Best Place for API Calls?",
          "componentDidMount() or useEffect(() => {}, [])",
        ],
        [
          "Preventing Unnecessary Renders?",
          "shouldComponentUpdate() or useMemo()",
        ],
        [
          "Cleanup in Functional Components?",
          "Return a cleanup function inside useEffect()",
        ],
        ["Handling Errors", "componentDidCatch() or useErrorBoundary()"],
        ["State Initialization", "constructor() or useState()"],
        [
          "Side Effects",
          "componentDidMount(), componentDidUpdate(), componentWillUnmount() or useEffect()",
        ],
      ],
    },
  },
];

const reactHooks = [
  {
    contentName: "1. React Hooks",
    contentList: [
      `Hooks are special functions in React that let us use state and lifecycle features inside functional components, without needing class components.`,
      `Before Hooks, we had to use Class Components to manage state (this.state) and lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount).`,
      `After the introduction of hooks, functional components have become more popular as they can now have state and lifecycle methods keeping class components aside because of their complexity, maintainability, and more boilerplate code.`,
    ],
  },
  {
    contentName: "a. Advantages of React Hooks",
    contentList: [
      `<span class="semibold_italic">Easier to read and write:</span> Hooks make it easier to read and write code by allowing us to use state and lifecycle features in functional components.`,
      `<span class="semibold_italic">Reusable logic:</span> Hooks enable us to reuse logic across multiple components without changing the component hierarchy.`,
      `<span class="semibold_italic">Better performance optimization:</span> Hooks provide better performance optimization by allowing us to optimize the rendering process.`,
      `<span class="semibold_italic">Simplified codebase:</span> Hooks simplify the codebase by reducing the amount of boilerplate code required in class components.`,
      `<span class="semibold_italic">No need to worry about 'this' keyword:</span> Hooks eliminate the need to worry about the 'this' keyword, making it easier to understand and maintain the code.`,
    ],
    padLeft: true,
  },
  {
    contentName: "b. Rules of Hooks",
    contentList: [
      `<span class="semibold_italic">should be called at the top level of the functional component.</span>`,
      `<span class="semibold_italic">should only be called from React functional components or custom hooks. </span>`,
      `<span class="semibold_italic">should not be called from regular JavaScript functions.</span>`,
      `<span class="semibold_italic">should not be called conditionally.</span>`,
      `<span class="semibold_italic">should always be called in the same order.</span>`,
      `<span class="semibold_italic">should not be called inside loops, conditions, or nested functions.</span>`,
      `Example: If you have a custom hook that uses useState, useEffect, or any other hook, you should call it from a functional component or another custom hook.`,
    ],
    contentCodeBlock: `// Correct usage of hooks
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Component mounted');
  }
  return <div>Hello World</div>;
}

// Incorrect usage of hooks

function App() {
  if (condition) {
    const [count, setCount] = useState(0); // ❌ Cannot call hooks conditionally
  }
  return <div>Hello World</div>;
}

function App() {
  const [count, setCount] = useState(0);
  if (condition) {
    useEffect(() => {
      console.log('Component mounted');
    }); // ❌ Cannot call hooks inside conditions
  }
  return <div>Hello World</div>;
}`,
    padLeft: true,
  },
];

const useStateHook = [
  {
    contentName: `1. useState Hook`,
    contentList: [
      `useState is a hook in React that allows functional components to manage state.`,
      `Before hooks, state could only be used in class components using this.state.`,
      `With useState, we can store values, update them dynamically, and trigger re-renders when the state changes.`,
      `useState takes an initial state value as an argument and returns an array with two elements: the current state value and a function to update the state.`,
      `The function returned by useState can be called with a new state value or a function that updates the state based on the previous state.`,
    ],
    contentCodeBlock: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count => count + 1)}>
        Increment
      </button>
    </div>
  );
}

1. In the above example, we are using the useState hook to manage the count state.
2. The initial state of count is set to 0 using useState(0).
3. The return value of useState is an array with two elements: the state variable (count) and a function to update the state (setCount).
4. We are using the setCount function to update the count state when the button is clicked.
5. When the state is updated, React will re-render the component to reflect the new state value.
`,
    padLeft: true,
  },
  {
    contentName: "2. Core principles of useState",
    contentList: [
      `<span class="semibold_italic">Immutability:</span> It's crucial to understand that you never directly modify the state variable. You always use the update function. This is because React relies on immutability to efficiently track changes and optimize rendering. If you mutate the state directly, React won't know something changed, and your UI won't update.`,
      `<span class="semibold_italic">Asynchronous Updates:</span> State updates scheduled by the update function are asynchronous. This means they don't happen immediately. React batches multiple state updates together for performance reasons. This is important to remember when you're dealing with logic that depends on the updated state value.`,
      `<span class="semibold_italic">Functional Updates (Optional, but Powerful):</span> If the new state value depends on the previous state value, you should use the functional update form of the state update function. Instead of passing the new state value directly, you pass a function. This function receives the previous state value as an argument, and you return the new state value. This ensures you're always working with the most up-to-date state, even if multiple updates are batched together.`,
      `<span class="semibold_italic">Lazy Initialization:</span> If the initial state is the result of an expensive computation, you can pass a function to useState. The function will be called only once to set the initial state. This can improve performance by avoiding unnecessary computations on every render.`,
      `<span class="semibold_italic">State Persistence:</span> The state value persists across re-renders. This means that the state value is retained even if the component re-renders due to a parent component re-rendering or a state change within the component.`,
    ],
    contentCodeBlock: `import React, { useState } from 'react';

// Immutability
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // Directly modifying the state variable will not work
    // count = count + 1; // ❌ This will not work

    // Use the update function to update the state
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

// Asynchronous Updates
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // State updates are asynchronous
    setCount(count + 1);
    console.log(count); // This will log the old count value
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

// Functional Updates (prevState)
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // using state variable directly will not work
    // setCount(count + 1); // ❌ This will not work
    // setCount(count + 1); // This will increment the count by 1

    // Use functional update to get the latest state value
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1); // This will increment the count by 2
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

// Lazy Initialization (Expensive computation)
function ExpensiveComponent() {
  const [value, setValue] = useState(() => {
    // Expensive computation for initial state
    return computeExpensiveValue();
  });

  return <div>Value: {value}</div>;
}

function computeExpensiveValue() {
  // Simulate expensive computation
  return 42;
}
`,
    padLeft: true,
  },
];

const useEffectHook = [
  {
    contentName: `1. useEffect Hook`,
    contentList: [
      `useEffect is a hook in React that allows functional components to perform side effects.`,
      `Side effects include data fetching, subscriptions, or manually changing the DOM in React components.`,
      `useEffect is called after the component is rendered to the DOM and can be used to manage side effects in functional components.`,
      `useEffect takes two arguments: a function that contains the side effect logic and an optional dependency array.`,
      `The function passed to useEffect is called after the component is rendered to the DOM. The dependency array specifies when the effect should run.`,
    ],
  },
];

export { componentLifeCycle, reactHooks, useStateHook, useEffectHook };
