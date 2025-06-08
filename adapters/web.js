import "clsx";
import "tailwind-merge";
function webAdapter(component, props = {}) {
  const { variant = "default", size = "default", className } = props;
  const componentMap = {
    button: "button",
    input: "input",
    card: "div",
    container: "div",
    header: "header",
    footer: "footer",
    sidebar: "aside",
    text: "span",
    view: "div",
    scroll: "div"
  };
  return {
    component: componentMap[component] || "div",
    styles: className || ""
  };
}
const getWebComponent = (component, props) => webAdapter(component, props);
export {
  getWebComponent,
  webAdapter
};
//# sourceMappingURL=web.js.map
