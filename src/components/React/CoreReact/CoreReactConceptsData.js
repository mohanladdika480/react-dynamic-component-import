const reactConcepts = [
  {
    contentName: "1. React",
    contentList: [
      `It is a JavaScript library for building fast, interactive, and scalable user interfaces (UI), primarily for web applications.`,
      `It is declarative, efficient, and flexible.`,
      `It is component-based, meaning the UI is split into independent, reusable pieces.`,
    ],
  },
  {
    contentName: "a. Advantages",
    contentList: [
      `<span class="semibold_italic">Component-Based Architecture →</span> Reusable components make development faster and code more maintainable.`,
      `<span class="semibold_italic">Fast Rendering with Virtual DOM →</span> React updates only the necessary parts of the UI, improving performance.`,
      `<span class="semibold_italic">Unidirectional Data Flow →</span> Ensures predictable state management, reducing bugs and making debugging easier.`,
      `<span class="semibold_italic">Rich Ecosystem & Community Support →</span> Huge open-source support with libraries like Redux, React Query, and Material UI.`,
      `<span class="semibold_italic">Easy to Learn & Use →</span> JSX simplifies UI development, making React beginner-friendly.`,
      `<span class="semibold_italic">Cross-Platform Development →</span> React Native allows code reuse for mobile apps (iOS & Android).`,
    ],
    padLeft: true,
  },
  {
    contentName: "b. Limitations",
    contentList: [
      `<span class="semibold_italic">Not a Full Framework:</span> Only handles UI, needs React Router for navigation, Redux/Context API for state, API handling etc.`,
      `<span class="semibold_italic">SEO Issues:</span> React uses client-side rendering, which can hurt SEO. Solution: Use Next.js for SSR.`,
      `<span class="semibold_italic">Frequent Updates:</span> React evolves quickly (e.g., Class Components → Hooks), requiring constant learning.`,
      `<span class="semibold_italic">Prop Drilling & Complex State:</span> Passing data deep in components is painful; needs Context API, Redux, or Zustand.`,
      `<span class="semibold_italic">Not Ideal for Small/Static Apps:</span> Lightweight alternatives like Svelte, Vue, or Astro are better in some cases.`,
    ],
    padLeft: true,
  },
  {
    contentName: "2. JSX (JavaScript XML)",
    contentList: [
      `It is a syntax extension for JavaScript, similar to XML/HTML, used with React to describe UI components.`,
      `It allows writing HTML in React and JavaScript code in the same file.`,
      `It is not a necessity but a convention for writing React components.`,
    ],
  },
  {
    contentName: "a. Advantages",
    contentList: [
      `<span class="semibold_italic">Easy to Write & Read:</span> Combines HTML & JS, making code more readable and maintainable.`,
      `<span class="semibold_italic">Prevents Injection Attacks:</span> Automatically escapes user inputs, preventing XSS attacks.`,
      `<span class="semibold_italic">Faster Development:</span> Reduces context switching between HTML and JS, improving productivity.`,
    ],
    padLeft: true,
  },
  {
    contentName: "b. How JSX works?",
    contentList: [
      `JSX is transpiled to JavaScript using Babel, converting HTML-like syntax to React.createElement() calls.`,
      `React.createElement() creates a virtual DOM object (React Element) for each JSX tag.`,
      `React then updates the actual DOM based on the virtual DOM changes.`,
    ],
    padLeft: true,
  },
  {
    contentName: "3. Virtual DOM",
    contentList: [
      `It is a lightweight copy of the actual DOM, used by React to improve performance.`,
      `React compares the virtual DOM with the actual DOM and updates only the changed parts.`,
      `It reduces the number of DOM manipulations, improving rendering speed.`,
    ],
  },
  {
    contentName: "4. Reconciliation Process",
    contentList: [
      `It is is the process React uses to update the Real DOM efficiently when the state or props of a component change. Instead of re-rendering the entire UI, React compares the new Virtual DOM with the previous one and updates only the changed parts in the actual DOM.`,
    ],
  },
  {
    contentName: "a. How Virtual DOM Updates work? (Reconciliation Process)",
    contentList: [
      `<span class="semibold_italic">Render Phase:</span> When the UI changes, React creates a new virtual DOM tree.`,
      `<span class="semibold_italic">Diffing Phase:</span> React compares the new virtual DOM with the previous one using the diffing algorithm to find the changes.`,
      `<span class="semibold_italic">Reconciliation Phase:</span> Instead of updating the actual DOM directly, React updates only the changed parts, improving performance.`,
    ],
    contentCodeBlock: `function TextUpdater() {
  const [text, setText] = useState("Hello, world!");

  const updateText = () => {
    setText("Hello, React!");
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={updateText}>Change Text</button>
    </div>
  );
}

/*
  How This Works (Step-by-Step)

  1. Initial Render:
     - React creates a Virtual DOM for the component with <p>Hello, world!</p>.

  2. State Update (onClick Event):
     - The button is clicked, updating the state to "Hello, React!".
     - A new Virtual DOM tree is created with <p>Hello, React!</p>.

  3. Diffing (Comparing Old vs. New Virtual DOM):
     - React detects that only the text inside <p> has changed.

  4. Reconciliation (Efficient Update to Real DOM):
     - Instead of re-rendering the entire <p> element, React updates only the text node inside.
*/`,
    padLeft: true,
  },
  {
    contentName: "5. Difference with Real DOM & Shadow DOM",
    contentTable: {
      headers: ["Features", "Virtual DOM", "Real DOM", "Shadow DOM"],
      rows: [
        [
          "Definition",
          "A lightweight copy of the Real DOM used by React to track the changes efficiently before updating the Real DOM.",
          "The actual browser-rendered HTML structure that users interact with. ",
          "A separate, encapsulated DOM inside an element (mostly used in Web Components) to prevent style and script conflicts.",
        ],
        [
          "Performance",
          "Faster updates due to minimal DOM manipulations.",
          "Slower updates as it directly interacts with the browser and whole repaints happen.",
          "Improves performance by keeping styles and elements scoped to a single component.",
        ],
        [
          "Rendering",
          "Creates a virtual tree of React elements that mirrors the actual DOM.",
          "Directly renders the HTML structure on the browser.",
          "Renders the DOM inside a shadow root, isolated from the main document.",
        ],
        [
          "Manipulation",
          "React compares old and new VDOM, updating only the necessary parts in the Real DOM.",
          "Any change directly affects the page, causing a reflow and repaint.",
          "Elements inside a Shadow DOM are independent of the main DOM.",
        ],
        [
          "Use Case",
          "React uses VDOM to improve performance and reduce re-renders.",
          "Traditional websites and applications that don’t use a framework.",
          "Web Components that need encapsulation and reusability.",
        ],
      ],
    },
  },
];

const reactComponents = [
  {
    contentName: "1. Components in React",
    contentList: [
      `In React, components are the building blocks of the user interface.`,
      `They’re essentially reusable, independent pieces of code that define how a part of the UI should look and behave.`,
      `Think of them like Lego bricks—you can create small pieces like a button or a card and then combine them to build complex interfaces.`,
      `Each component can manage its own state, receive data through props, and render UI based on that data.`,
      `In React, components can be created in two different ways: Class Components and Functional Components.`,
    ],
  },
  {
    contentName: "a. Class Components",
    contentList: [
      `Class components are ES6 classes that extend from React.Component and can hold their own state.`,
      `They have a render() method that returns the component’s UI based on the current state and props.`,
      `Class components can also have lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.`,
      `Before React 16.8, class components were the primary way to create components in React.`,
      `After the introduction of Hooks in React 16.8, functional components became the preferred way to create components due to their simplicity and reusability.`,
      `Now functional components can also use state and lifecycle methods, making class components less common.`,
    ],
    contentCodeBlock: `import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;

/*
  How This Works

  1. Initial Render:
     - The component renders with count: 0 and a button to increment.

  2. State Update (onClick Event):
     - The button is clicked, updating the state to count: 1.
     - React re-renders the component with the new state.
*/`,
    padLeft: true,
  },
  {
    contentName: "b. Functional Components",
    contentList: [
      `Functional components are JavaScript functions that return JSX.`,
      `They are simpler, shorter, and easier to read than class components.`,
      `In traditional functional components, you couldn’t use state or lifecycle methods, making them limited in functionality.`,
      `With the introduction of Hooks in React 16.8, functional components can now use state and lifecycle methods, making them more powerful and versatile.`,
    ],
    contentCodeBlock: `import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;

/*
  How This Works

  1. Initial Render:
     - The component renders with count: 0 and a button to increment.

  2. State Update (onClick Event):
     - The button is clicked, updating the state to count: 1.
     - React re-renders the component with the new state.
*/`,
    padLeft: true,
  },
  {
    contentName: "2. Why not use Class Components?",
    contentList: [
      `Class components are more verbose and harder to read than functional components.`,
      `They require more boilerplate code, making them slower to write and maintain.`,
      `Class components don’t optimize performance as well as functional components.`,
      `Functional components are easier to test and debug than class components.`,
      `Functional components are more reusable and composable than class components.`,
    ],
  },
  {
    contentName: "3. When to use what?",
    contentList: [
      `If you’re starting a new project, use functional components with Hooks for better code quality and maintainability.`,
      `If you're working on legacy code or a project that uses class components, continue using them until you can refactor to functional components.`,
      `Functional components are the future of React and are recommended for all new projects.`,
    ],
  },
  {
    contentName: "4. Difference between Class & Functional Components",
    contentTable: {
      headers: ["Features", "Class Components", "Functional Components"],
      rows: [
        [
          "Definition",
          "ES6 classes that extend from React.Component.",
          "JavaScript functions that return JSX.",
        ],
        [
          "State & Lifecycle",
          "Can hold state and use lifecycle methods.",
          "Can use state and lifecycle methods with Hooks.",
        ],
        [
          "Code Length",
          "More verbose and requires more boilerplate code.",
          "Shorter, simpler, and easier to read.",
        ],
        [
          "Performance",
          "Slower performance due to class bindings and lifecycle methods.",
          "Faster performance due to fewer bindings and lifecycle methods.",
        ],
        [
          "Reusability",
          "Less reusable and composable.",
          "More reusable and composable.",
        ],
        ["Testing", "Harder to test and debug.", "Easier to test and debug."],
        [
          "Recommended Use",
          "Use for legacy code or projects that require class components.",
          "Use for new projects or projects that can be refactored.",
        ],
      ],
    },
  },
];

const reactProps = [
  {
    contentName: "1. Props",
    contentList: [
      `Props (short for properties) are read-only inputs passed from a parent component to a child component (similar like function arguments).`,
      `They allow components to be reusable and dynamic by sending data like strings, numbers, objects, and functions.`,
      `Props define how the child components should render based on the data passed from the parent components.`,
      `Props are immutable because React follows a unidirectional data flow (one-way binding). The parent controls the data, and the child cannot modify it, ensuring better predictability and maintainability.`,
    ],
    contentCodeBlock: `function ChildComponent({ name, age }) {
  return (
    <>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </>
  );
}

function ParentComponent() {
  return <ChildComponent name="John Doe" age={30} />;
}

/*
  How This Works
  1. ParentComponent: Passes the props 'name' and 'age' to ChildComponent.
  2. ChildComponent: Receives the props and renders them in the JSX.
*/`,
  },
  {
    contentName: "a. Passing Props",
    contentList: [
      `Props are passed from parent to child components using attributes.`,
      `Props are passed as key-value pairs, where the key is the prop name and the value is the data to be passed.`,
    ],
    padLeft: true,
  },
  {
    contentName: "b. Destructuring Props",
    contentList: [
      `Props can be destructured inside the child component to access the individual prop values directly.`,
      `Destructuring makes the code cleaner and more readable by extracting the props into separate variables.`,
    ],
    padLeft: true,
    contentCodeBlock: `// Without Destructuring
function ChildComponent(props) {
  return (
    <>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </>
  );

// With Destructuring
function ChildComponent({ name, age }) {
  return (
    <>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </>
  );
}`,
  },
  {
    contentName: "c. Default Props",
    contentList: [
      `Default props are used to set default values for props in case they are not passed from the parent component.`,
      `They help in handling undefined props gracefully and prevent errors.`,
    ],
    padLeft: true,
    contentCodeBlock: `function ChildComponent({ name = "Anonymous", age = 0 }) {
  return (
    <>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </>
  );
}`,
  },
  {
    contentName:
      "d. Children Props (Passing Components as Props: Render Props Pattern)",
    contentList: [
      `The children prop is a special prop that allows passing JSX elements or text or Components as children to another component.`,
      `It is useful for creating reusable components that wrap other components or elements.`,
      `The children prop can be used to create higher-order components (HOCs) or render props patterns.`,
      `It is commonly used for components like modals, tooltips, and cards.`,
    ],
    padLeft: true,
    contentCodeBlock: `function Card({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );

function App() {
  return (
    <Card title="My Card">
      <p>This is the content of the card.</p>
    </Card>
  );
}`,
  },
  {
    contentName: "e. Spread Operator with Props",
    contentList: [
      `The spread operator (...) can be used to pass multiple props to a component without explicitly defining each prop.`,
      `It helps in passing all the props of an object or component to another component.`,
    ],
    padLeft: true,
    contentCodeBlock: `const user = {
  name: "John Doe",
  age: 30,
};

function Profile({ name, age }) {
  return (
    <>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </>
  );

function App() {
  return <Profile {...user} />;
}`,
  },
  {
    contentName: "2. Prop Types and Validation",
    contentList: [
      `PropTypes is a library used for type-checking the props passed to a component.`,
      `It helps in validating the props passed from the parent component to ensure they are of the correct type.`,
      `Common PropTypes include string, number, boolean, array, object, function, etc.`,
      `PropTypes are defined as static properties on the component.`,
    ],
    contentCodeBlock: `import PropTypes from "prop-types";

function ChildComponent({ name, age }) {
  return (
    <>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </>
  );

ChildComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};`,
  },
  {
    contentName:
      "3. How to Update Props? (trigger events from child to parent)",
    contentList: [
      `Props are immutable and cannot be changed directly by the child component.`,
      `To update props, you can pass callback functions as props from the parent component to the child component.`,
      `The child component can call the callback function to trigger an event in the parent component, updating the props.`,
    ],
    contentCodeBlock: `function ParentComponent() {
  const [name, setName] = useState("John Doe");

  const updateName = () => {
    setName("David Smith");
  }

  return (
    <>
      <ChildComponent name={name} updateName={updateName} />
    </>
  );

function ChildComponent({ name, updateName }) {
  return (
    <>
      <p>Name: {name}</p>
      <button onClick={updateName}>Update Name</button>
    </>
  );
}`,
  },
  {
    contentName: "4. What is props drilling? How to avoid it?",
    contentList: [
      `Props drilling is the process of passing props through multiple levels of components to reach a deeply nested child component.`,
      `It can make the code harder to maintain and debug, as props have to be passed through intermediary components.`,
      `To avoid props drilling, use React Context API or state management libraries like Redux or MobX.`,
    ],
    contentCodeBlock: `// Using Context API
const UserContext = React.createContext();

function ParentComponent() {
  const user = { name: "John Doe", age: 30 };

  return (
    <UserContext.Provider value={user}>
      <ChildComponent />
    </UserContext.Provider>
  );

function ChildComponent() {
  const user = useContext(UserContext);
  return (
    <>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </>
  );`,
  },
  {
    contentName: "5. How do you prevent unnecessary re-renders due to props?",
    contentList: [
      `To prevent unnecessary re-renders due to props changes, use React.memo() for functional components and PureComponent for class components.`,
      `React.memo() is a higher-order component that memoizes the component based on its props, preventing re-renders if the props haven't changed.`,
      `PureComponent is a class component that does a shallow comparison of props and state to prevent re-renders if they haven't changed.`,
    ],
    contentCodeBlock: `const ChildComponent = React.memo(({ name }) => {
  return <p>Name: {name}</p>;
});`,
  },
  {
    contentName: "6. How to handle dynamic props in React?",
    contentList: [
      `To handle dynamic props in React, you can use JavaScript expressions to pass props based on conditions.`,
      `You can also use the spread operator (...) to pass multiple dynamic props to a component.`,
      `Dynamic props help in creating reusable components that can render different content based on the data passed.`,
      `Example: A profile component that renders different user profiles based on the user data passed as props.`,
    ],
  },
  {
    contentName: "7. Higher-Order Components (HOCs)",
    contentList: [
      `Higher-Order Components (HOCs) are functions that take a component and return a new component with additional functionality.`,
      `They are used to share code between components, add new props, or modify the behavior of existing components.`,
      `HOCs are a common pattern in React for code reuse, logic abstraction, and enhancing components with new features.`,
      `They allow adding common functionality to multiple components without repeating code.`,
      `HOCs are a flexible and powerful pattern for enhancing components in React applications.`,
      `Example: A withLoading HOC that shows a loading spinner while data is being fetched.`,
    ],
    contentCodeBlock: `function withLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) return <Spinner />;
    return <Component {...props} />;
  
  function Profile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>;
  
  const ProfileWithLoading = withLoading(Profile);
  
  function App() {
    const isLoading = true; // Simulating loading state
    return <ProfileWithLoading user={user} isLoading={isLoading} />;
  }`,
  },
  {
    contentName: "8. Render Props Pattern",
    contentList: [
      `The Render Props pattern is a technique for sharing code between React components using a prop whose value is a function.`,
      `It allows components to share logic and data with other components by passing a function as a child prop without repeating the logic.`,
      `The child component can then call the function to access the shared logic or data from the parent component.`,
      `The Render Props pattern is commonly used for code reuse and component composition in React applications.`,
      `It provides a flexible way to pass data and functionality between components.`,
      `They help in separating concerns and keeping components focused on their specific tasks.`,
      `Example: One component that fetches data and another component that renders the fetched data using the Render Props pattern.`,
    ],
    contentCodeBlock: `function DataFetcher({ render }) {
  const data = fetchData(); // Fetch data from API
  return render(data);
}

function Profile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>;
}

function App() {
  return (
    <DataFetcher
      render={(data) => (
        <Profile user={data} />
      )}
    />
  );
}`,
  },
  {
    contentName: "9. When to use HOCS vs Render Props?",
    contentList: [
      `Use Higher-Order Components (HOCs) when you need to share common logic between multiple components.`,
      `Use Render Props when you need to share data or functionality between components using a prop whose value is a function.`,
      `HOCs are useful for code reuse and logic abstraction, while Render Props are useful for data sharing and component composition.`,
      `Both patterns are powerful and flexible ways to enhance components in React applications.`,
    ],
    contentCodeBlock: `// Example: Use HOCs for sharing common logic
const ProfileWithLoading = withLoading(Profile);

// Example: Use Render Props for sharing data
<DataFetcher
  render={(data) => (
    <Profile user={data} />
  )}
/>`,
  },
];

/* Lists and Keys in React, Event Handling, Conditional Rendering */
const reactListsAndKeys = [
  {
    contentName: "1. Lists and Keys in React",
    contentList: [
      `Lists ares used in React to render multiple elements dynamically based on an array of data. (Ex: users, cart items, products, etc.)`,
      `A key is an unique identifier assigned to each element in a list to help React identify which items have changed, added, or removed.`,
      `Keys help React optimize rendering by reducing re-renders and improving performance.`,
      `Keys should be unique, stable, and consistent across renders to ensure proper reconciliation and avoid bugs.`,
      `If keys are not unique or not provided, React may re-render all the items, causing performance issues. (such as flickering, data loss, inefficient updates, etc.)`,
    ],
    contentCodeBlock: `function ListComponent({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      )}
    </ul>
  );
}`,
  },
  {
    contentName: "a. Why use Keys? How they work while updating lists?",
    contentList: [
      `Keys help React identify which items have changed, added, or removed in a list.`,
      `They improve rendering performance by reducing re-renders and optimizing updates.`,
      `Keys are essential for efficient list rendering and proper reconciliation in React applications.`,
      `When an item is added, removed, or reordered in a list, React uses keys to determine the changes and update only the necessary parts of the UI.`,
      `For example, when a new item is added to a list, React compares the keys of the new list with the old list to identify the added item and render it without re-rendering the entire list.`,
    ],
    padLeft: true,
  },
  {
    contentName: "b. Best Practices for Keys",
    contentList: [
      `Keys should be unique, stable, and consistent across renders to ensure proper reconciliation.`,
      `Use string or number keys for better performance and predictability. (like database IDs, UUIDs, etc.)`,
      `For dynamic lists don't use index as keys, as it can cause issues when items are added, removed, or reordered.`,
      `Keys should be assigned to the top-level element inside the map function to ensure proper reconciliation.`,
      `If the list items have unique IDs, use them as keys. Otherwise, generate unique keys using libraries like uuid.`,
    ],
    padLeft: true,
  },
  {
    contentName: "2. Event Handling in React",
    contentList: [
      `Event handling in React is how the UI responds to user interactions like clicks, keypresses, form submissions, etc.`,
      `Event handling in React is similar to handling events in HTML, but with camelCase event names.`,
      `Events are passed as functions (event handlers) to JSX elements and triggered when the event occurs.`,
      `Common events include onClick, onChange, onSubmit, onMouseOver, etc.`,
      `Event handlers receive an event object that contains information about the event (like target, type, etc.).`,
      `To prevent the default behavior of an event (like form submission or link click), use event.preventDefault().`,
    ],
    contentCodeBlock: `function ButtonComponent() {
  const handleClick = () => {
    alert("Button Clicked!");
}

return <button onClick={handleClick}>Click Me</button>;
}`,
  },
  {
    contentName: "a. Event Object in React",
    contentList: [
      `The event object contains information about the event like target, type, key, etc.`,
      `It is automatically passed to the event handler function when an event occurs.`,
      `You can access event properties like event.target.value, event.type, event.key, etc.`,
      `The event object can be used to prevent the default behavior of an event using event.preventDefault().`,
    ],
    padLeft: true,
  },
  {
    contentName: "b. Preventing Default Behavior",
    contentList: [
      `To prevent the default behavior of an event (like form submission which causes a page reload, or link click which navigates to a new page), use event.preventDefault().`,
      `It stops the default action of the event from occurring.`,
      `Preventing default behavior is useful for handling form submissions, link clicks, and other user interactions.`,
    ],
    padLeft: true,
    contentCodeBlock: `function FormComponent() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}`,
  },
  {
    contentName: "c. Synthetic Events in React",
    contentList: [
      `A SyntheticEvent is React’s wrapper around native browser events that ensures cross-browser compatibility and performance optimization.`,
      `Synthetic events are similar to native events but have some differences like event pooling, asynchronous behavior, and automatic cleanup.`,
      `They are automatically cleaned up after the event handler has finished, preventing memory leaks.`,
      `Synthetic events are used to handle events in React components and provide a consistent interface across different browsers.`,
      `Event pooling is a technique used by React to reuse event objects, improving performance and reducing memory usage.`,
      `Events when used in setTimeout or asynchronous functions, the event object may be null or undefined due to the asynchronous nature of React.`,
      `To access event properties in asynchronous functions, store the event object in a variable before using it.`,
    ],
    padLeft: true,
  },
  {
    contentName: "3. Conditional Rendering in React",
    contentList: [
      `Conditional rendering is used to show or hide elements based on a condition in React components.`,
      `You can use JavaScript expressions like if-else, ternary operators, and logical && or || operators for conditional rendering.`,
      `Common use cases for conditional rendering include showing loading spinners, error messages, or rendering components based on user authentication.`,
      `Conditional rendering helps in creating dynamic and interactive user interfaces in React applications.`,
    ],
    contentCodeBlock: `function DataComponent() {
  return <div>Data Loaded!</div>;
}

function Spinner() {
  return <div>Loading...</div>;
}

function Error({ message }) {
  return <div>Error: {message}</div>;
}

// Using Ternary Operator
return isLoading ? <Spinner /> : <DataComponent />;

// Using Logical && Operator
return error && <Error message={error} />;

// Using If-Else Statement
if (isLoading) {
  return <Spinner />;
} else if (error) {
  return <Error message={error} />;
} else {
  return <DataComponent />;
}`,
  },
];


const reactPortals = [
  {
    contentName: "1. Portals in React",
    contentList: [
      `Portals in React provide a way to render children outside the DOM hierarchy of the parent component.`,
      `They allow rendering components into a different part of the DOM, like modals, popovers, tooltips, or overlays.`,
      `Portals help in creating UI components that need to break out of the parent container or have z-index stacking issues.`,
      `Portals are useful for creating overlays, modals, tooltips, and other components that need to be rendered outside the normal flow of the DOM.`,
    ],
    contentCodeBlock: `function Modal({ children }) {
  return ReactDOM.createPortal(
    children,
    document.getElementById("modal-root")
  );

function App() {
  return (
    <div>
      <h1>App Content</h1>
      <Modal>
        <p>Modal Content</p>
      </Modal>
    </div>
  );
}`,
  },
  {
    contentName: "a. How Portals work?",
    contentList: [
      `Portals use ReactDOM.createPortal() to render children into a different part of the DOM.`,
      `The createPortal() function takes two arguments: the children to render and the DOM element to render them into.`,
      `The children are rendered outside the normal DOM hierarchy of the parent component, allowing them to break out of the parent container.`,
      `Real time examples: payment modals, tooltips, popovers, lightboxes, etc.`,
    ],
    padLeft: true,
  }
]

export { reactConcepts, reactComponents, reactProps, reactListsAndKeys };
