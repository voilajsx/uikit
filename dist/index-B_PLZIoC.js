import * as o from "react";
import { u as e } from "./index-DuekHEmj.js";
var s = o[" useId ".trim().toString()] || (() => {
}), i = 0;
function c(t) {
  const [r, u] = o.useState(s());
  return e(() => {
    u((a) => a ?? String(i++));
  }, [t]), t || (r ? `radix-${r}` : "");
}
export {
  c as u
};
//# sourceMappingURL=index-B_PLZIoC.js.map
