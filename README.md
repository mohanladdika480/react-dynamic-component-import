# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About This Codebase

This codebase demonstrates a dynamic component loader in a React application. The dynamic component loader allows components to be loaded based on the URL hash, providing a modular and flexible approach to loading components as needed without including all components in the initial bundle.

### How It Works

1. The URL hash is monitored for changes.
2. When the hash changes, the corresponding component is dynamically imported and rendered.
3. If the component cannot be found, a fallback component is rendered that displays an error message.

### Configuration of Hash to File Paths

The hash in the URL is used to determine which component to load. The hash is split into two parts: the base and the subComponent.

- **First part (base)** → Represents the main category (e.g., Javascript, React).
- **Second part (subComponent)** → Represents the specific subcomponent inside that category.

For example, the hash `#Javascript_Variables` is split into `base = "Javascript"` and `subComponent = "Variables"`.

### Dynamic Import Code Snippet

```javascript
const loadComponent = async () => {
  const hash = window.location.hash?.replace("#", "");
  let path = "";

  if (!hash) {
    setComponent(() => DynamicLoaderInfo);
    return;
  } else {
    const [base, subComponent] = hash.split("_");

    if (!subComponent) {
      const folderName = base?.replace("Concepts", "");
      path = `./${folderName}/${base}`;
    } else {
      path = `./${base}/${subComponent}/${subComponent}`;
    }
  }

  try {
    const module = await import(`${path}`);
    setComponent(() => module.default);
  } catch (error) {
    console.error(`Error loading component for ${hash}:`, error);
    setComponent(() => () => <FallbackComponent hash={hash} />);
  }
};
```

### Example Folder Structure

```plaintext
src/
  ├── components/
  │   ├── DynamicLoaderInfo.js
  │   ├── Javascript/
  │   │   ├── Arrays/
  │   │   │   └── Arrays.js
  │   │   ├── Functions/
  │   │   │   └── Functions.js
  │   │   ├── Objects/
  │   │   │   └── Objects.js
  │   │   ├── Promises/
  │   │   │   └── Promises.js
  │   │   ├── Variables/
  │   │   │   └── Variables.js
  │   ├── Menu/
  │   │   └── Menu.js
  │   ├── React/
  │   │   ├── Components/
  │   │   │   └── Components.js
  │   │   ├── Context/
  │   │   │   └── Context.js
  │   │   ├── Hooks/
  │   │   │   └── Hooks.js
  │   │   ├── JSX/
  │   │   │   └── JSX.js
  │   │   ├── StateAndLifecycle/
  │   │   │   └── StateAndLifecycle.js
  │   │   └── ReactConcepts.js
  ├── index.scss
  └── App.js
```

### Example Usage

To load a specific component, update the URL hash to the desired component name. For example:

- `#JavascriptConcepts` - Loads the JavaScript Concepts component.
- `#ReactConcepts` - Loads the React Concepts component.
- `#Javascript_Variables` - Loads the JavaScript Variables component.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run predeploy`

Runs the build script before deploying the app to GitHub Pages.\

### `npm run deploy`

Deploys the app to GitHub Pages.\

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
