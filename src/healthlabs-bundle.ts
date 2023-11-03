import { StdcheckHeader } from "./stdcheck-header/stdcheck-header";
import { StdcheckFooter } from "./stdcheck-footer/stdcheck-footer";
import { DynamicComponentPoc } from "./dynamic-component-poc/dynamic-component-poc";

window.customElements.define('stdcheck-header', StdcheckHeader);
window.customElements.define('stdcheck-footer', StdcheckFooter);
window.customElements.define('dynamic-component-poc', DynamicComponentPoc);
