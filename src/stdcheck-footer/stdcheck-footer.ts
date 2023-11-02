import { html, LitElement } from 'lit';
import StdcheckFooterStyle from './stdcheck-footer.scss';

export class StdcheckFooter extends LitElement {
  static styles = [StdcheckFooterStyle];

  render() {
    return html`
      <h2>STDCheck Footer</h2>
    `;
  }
}
