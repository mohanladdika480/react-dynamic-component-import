import React, { useEffect, useState } from "react";
import DynamicLoaderInfo from './DynamicLoaderInfo'; // Import the DynamicLoaderInfo component
import FallbackComponent from './FallbackComponent'; // Import the FallbackComponent

const DynamicComponentLoader = () => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const loadComponent = async () => {
      const hash = window.location.hash?.replace("#", "");
      let path = "";

      if (!hash) {
        // If there is no hash, set the component to DynamicLoaderInfo
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
        setComponent(() => () => <FallbackComponent hash={hash} />);
      }
    };

    loadComponent();

    window.addEventListener("hashchange", loadComponent);
    return () => window.removeEventListener("hashchange", loadComponent);
  }, []);

  return Component ? <Component /> : null;
};

export default DynamicComponentLoader;
