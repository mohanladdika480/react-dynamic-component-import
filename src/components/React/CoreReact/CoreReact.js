import React from "react";
import ContentRenderer from "../../Common/ContentRenderer";

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
    constentTable: {
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
        ]
      ],
    },
  },
];

const reactComponents = [
  {
    contentName: "1. Functional Components",
    contentList: [
      `Simple JavaScript functions that return JSX elements.`,
      `Introduced in React 16.8 as an alternative to Class Components.`,
      `Use hooks like useState, useEffect, useContext, etc., for state and side effects.`,
    ],
  },
  {
    contentName: "a. Syntax",
    contentCodeBlock: `const Greet = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};`,
  },
  {
    contentName: "b. Advantages",
    contentList: [
      `Easier to read and write compared to Class Components.`,
      `Promotes functional programming and code reusability.`,
      `Better performance due to less boilerplate code.`,
    ],
    padLeft: true,
  },
  {
    contentName: "2. Class Components",
    contentList: [
      `ES6 classes that extend React.Component.`,
      `Introduced in React 0.13 as the primary way to create components.`,
      `Use lifecycle methods like componentDidMount, componentDidUpdate, etc., for state and side effects.`,
    ],
  },
]

const CoreReact = () => {
  return (
    <>
      <ContentRenderer contentList={reactConcepts} />
    </>
  );
};

export default CoreReact;
