import React from 'react';

const DynamicLoaderInfo = () => {
  return (
    <div>
      <h1>Dynamic Component Loader</h1>
      <p>This application uses a dynamic component loader to load components based on the URL hash. This allows for a modular and flexible approach to loading components as needed, without having to include all components in the initial bundle.</p>
      
      <h2>How It Works</h2>
      <ol>
        <li>The URL hash is monitored for changes.</li>
        <li>When the hash changes, the corresponding component is dynamically imported and rendered.</li>
        <li>If the component cannot be found, a fallback component is rendered that displays an error message.</li>
      </ol>
      
      <h2>Configuration of Hash to File Paths</h2>
      <p>The hash in the URL is used to determine which component to load. The hash is split into two parts: the base and the subComponent.</p>
      <ul>
        <li><strong>First part (base)</strong> → Represents the main category (e.g., Javascript, React).</li>
        <li><strong>Second part (subComponent)</strong> → Represents the specific subcomponent inside that category.</li>
      </ul>
      <p>For example, the hash <code>#Javascript_Variables</code> is split into <code>base = "Javascript"</code> and <code>subComponent = "Variables"</code>.</p>
      
      <h2>Example Hashes for Main Categories and Their Concepts</h2>
      <p>Here are some example hashes that can be used to load main categories and their specific concepts:</p>
      <ul>
        <li><code>#JavascriptConcepts</code> - Loads the main JavaScript Concepts component.</li>
        <li><code>#Javascript_Arrays</code> - Loads the JavaScript Arrays component.</li>
        <li><code>#Javascript_Functions</code> - Loads the JavaScript Functions component.</li>
        <li><code>#ReactConcepts</code> - Loads the main React Concepts component.</li>
        <li><code>#React_Hooks</code> - Loads the React Hooks component.</li>
        <li><code>#React_JSX</code> - Loads the React JSX component.</li>
      </ul>

      <h2>Dynamic Import Code Snippet</h2>
      <pre>
        <code>
          {`const loadComponent = async () => {
  const hash = window.location.hash?.replace("#", "");
  let path = "";

  if (!hash) {
    setComponent(() => DynamicLoaderInfo);
    return;
  } else {
    const [base, subComponent] = hash.split("_");

    if (!subComponent) {
      const folderName = base?.replace("Concepts", "");
      path = \`./\${folderName}/\${base}\`;
    } else {
      path = \`./\${base}/\${subComponent}/\${subComponent}\`;
    }
  }

  try {
    const module = await import(\`\${path}\`);
    setComponent(() => module.default);
  } catch (error) {
    console.error(\`Error loading component for \${hash}:\`, error);
    setComponent(() => () => <FallbackComponent hash={hash} />);
  }
};`}
        </code>
      </pre>
      
      <h2>Example Folder Structure</h2>
      <p>Here is an example of the folder structure in the codebase for JavaScript and React components:</p>
      <pre>
        <code>
          {`src/
  ├── components/
  │   ├── DynamicComponentLoader.js
  **************
  │   ├── Javascript/
  │   │   ├── Arrays/
  │   │   │   └── Arrays.js
  │   │   ├── Functions/
  │   │   │   └── Functions.js
  │   │   ├── Objects/
  │   │   │   └── Objects.js
  │   │   ├── Promises/
  │   │   │   └── Promises.js
  │   │   └── JavascriptConcepts.js
  │   ├── React/
  │   │   ├── Hooks/
  │   │   │   └── Hooks.js
  │   │   ├── JSX/
  │   │   │   └── JSX.js
  │   │   ├── StateAndLifecycle/
  │   │   │   └── StateAndLifecycle.js
  │   │   └── ReactConcepts.js
  **************
  │   ├── FallbackComponent.js
  │   ├── DynamicLoaderInfo.js
  │   ├── Menu
  │   │   └── Menu.js  
  │   └── Concepts/
  │        └── Concepts.js
  ├── index.scss
  └── App.js`}
        </code>
      </pre>
    </div>
  );
};

export default DynamicLoaderInfo;