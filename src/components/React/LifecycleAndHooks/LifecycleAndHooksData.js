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

1. Immutability
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

2. Asynchronous Updates
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // State updates are asynchronous
    setCount(count + 1);
    console.log(count); // This will log the old count value
  };
  // The console.log will log the old count value because the state update is asynchronous and React batches updates for performance reasons.
  // To see the updated count value, you can use the useEffect hook to log the count value after it has been updated.

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

3. Functional Updates (prevState)
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // using state variable directly will not work
    // setCount(count + 1); // ❌ This will not work
    // setCount(count + 1); // This will increment the count by 1 
    // Here the second setCount will use the old value of count, not the updated one. Because the state update is asynchronous and React batches updates for performance reasons.

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

4. Lazy Initialization (Expensive computation)
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
  },
  {
    contentName: "3. Disadvantages of useState",
    contentList: [
      `<span class="semibold_italic">State Management Complexity:</span> As the number of state variables increases, managing them can become complex. You may end up with multiple useState calls, making it harder to track state changes and dependencies.`,
      `<span class="semibold_italic">Performance Issues:</span> Frequent state updates can lead to performance issues, especially if the component re-renders frequently. This can be mitigated by using useMemo or useCallback to optimize rendering.`,
      `<span class="semibold_italic">Debugging Challenges:</span> Debugging state-related issues can be challenging, especially when dealing with asynchronous updates and functional updates. It's important to understand how React batches updates and how state changes propagate.`,
    ],
  },
  {
    contentName: "4. Lazy Initialization with useState",
    contentList: [
      `<span class="semibold_italic">Lazy Initialization:</span> If the initial state is the result of an expensive computation, you can pass a function to useState.`,
      `The function will be called only once to set the initial state.`,
      `This can improve performance by avoiding unnecessary computations on every render.`,
      `Example: If you have a large dataset that needs to be processed to set the initial state, you can use lazy initialization to avoid processing it on every render.`,
    ],
    contentCodeBlock: `import React, { useState } from 'react';
function ExpensiveComponent() {
  const [value, setValue] = useState(() => {
    // Expensive computation for initial state
    return computeExpensiveValue();
  });
  return <div>Value: {value}</div>;

  function computeExpensiveValue() {
    // Simulate expensive computation
    return 42;
}`,
  },
];

const useEffectHook = [
  {
    contentName: `1. useEffect Hook`,
    contentList: [
      `useEffect is a React Hook that allows you to perform side effects in functional components.`,
      `Arguments: It takes two arguments: a function that contains the side effect code and an optional dependency array.`,
      `Side effects are operations that interact with the "outside world" beyond the component's rendering logic.`,
      `Examples of side effects include: fetching data from an API, subscribing to events, manually changing the DOM, and logging information.`,
      `useEffect serves as a combination of componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods found in class components.`,
      `It allows you to run code after the component renders, clean up resources when the component unmounts, and respond to changes in state or props by adding state or props to the dependency array.`,
    ],
    contentCodeBlock: `function MyComponent() {

  useEffect(() => {
    // Code to run after the component renders
    console.log('Component mounted or updated');

    // Cleanup function (optional)
    return () => {
      console.log('Component unmounted');
    };
  }, []); // Empty dependency array means it runs once after the initial render

  return <div>Hello World</div>;
}`,
  },
  {
    contentName: "2. Core principles of useEffect",
    contentList: [
      `<span class="semibold_italic">Dependency Array:</span> The dependency array is an optional second argument to useEffect. It specifies when the effect should run. If you pass an empty array ([]) as the dependency array, the effect will run only once after the initial render. If you pass an array with dependencies, the effect will run whenever any of those dependencies change.`,
      `<span class="semibold_italic">Cleanup Function:</span> The cleanup function is an optional return value from the effect function. It is used to clean up resources when the component unmounts or before the effect runs again. This is useful for cleaning up subscriptions, timers, or event listeners.`,
      `<span class="semibold_italic">Multiple Effects:</span> You can use multiple useEffect hooks in a single component. Each effect can have its own dependency array and cleanup function. This allows you to separate concerns and manage different side effects independently.`,
    ],
  },
  {
    contentName: "3. Dependency Array",
    contentList: [
      `<span class="semibold_italic">Dependency Array:</span> It specifies when the effect should run.`,
      `<span class="semibold_italic">Empty Array ([]) :</span> The effect runs only once after the initial render.`,
      `<span class="semibold_italic">Array with Dependencies:</span> The effect runs whenever any of the dependencies change.`,
      `<span class="semibold_italic">No Dependency Array:</span> The effect runs after every render.`,
      `Example: If you have a component that fetches data from an API, you can use the dependency array to specify when the effect should run. If the dependency is a state variable, the effect will run whenever that state variable changes.`,
    ],
    contentCodeBlock: `function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]); // Effect runs whenever count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );  
} 

// In the above example, the effect will run whenever the count state changes. The console.log will log the updated count value.
// This is useful for performing actions based on state changes, such as fetching new data or updating the DOM.`,
  },
  {
    contentName: "4. Cleanup Function",
    contentList: [
      `<span class="semibold_italic">Cleanup Function:</span> The cleanup function is an optional return value from the effect function.`,
      `It is used to clean up resources when the component unmounts or before the effect runs again.`,
      `This is useful for cleaning up subscriptions, timers, or event listeners.`,
      `It is needed to prevent memory leaks and ensure that resources are properly released.`,
      `<span class="semibold_italic">Disadvantage of not using cleanup function:</span> If you forget to clean up resources, it can lead to memory leaks and performance issues. It's important to always return a cleanup function when using useEffect.`,
      `<span class="semibold_italic">Example:</span> If you have a component that sets up an interval timer, you can use the cleanup function to clear the interval when the component unmounts.`,
    ],
    contentCodeBlock: `useEffect(() => {
  const handleResize = () => {
    console.log('Window resized');
  }

  // Add event listener for window resize
  window.addEventListener('resize', handleResize);

  // Cleanup function to remove the event listener
  return () => {
    window.removeEventListener('resize', handleResize)
  }
}, []); // Empty dependency array means it runs once after the initial render

// In the above example, the cleanup function removes the event listener when the component unmounts.`,
  },
];

export { componentLifeCycle, reactHooks, useStateHook, useEffectHook };
