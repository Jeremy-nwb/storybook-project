import { e } from "./blocks-CMknES2G.js";
import "./preload-helper-BbOs9S9B.js";
import "./_commonjsHelpers-C7MPfNLY.js";
import "./iframe-hqsTQ9Ar.js";
import "./index-BdOSk9or.js";
const emptyComponents = {};
const MDXContext = e.createContext(emptyComponents);
function useMDXComponents(components) {
  const contextComponents = e.useContext(MDXContext);
  return e.useMemo(
    function() {
      if (typeof components === "function") {
        return components(contextComponents);
      }
      return { ...contextComponents, ...components };
    },
    [contextComponents, components]
  );
}
function MDXProvider(properties) {
  let allComponents;
  if (properties.disableParentContext) {
    allComponents = typeof properties.components === "function" ? properties.components(emptyComponents) : properties.components || emptyComponents;
  } else {
    allComponents = useMDXComponents(properties.components);
  }
  return e.createElement(
    MDXContext.Provider,
    { value: allComponents },
    properties.children
  );
}
export {
  MDXProvider,
  useMDXComponents
};
