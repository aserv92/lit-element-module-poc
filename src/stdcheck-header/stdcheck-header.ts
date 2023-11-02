import { html, LitElement } from 'lit';
import StdcheckHeaderStyle from './stdcheck-header.scss';

export class StdcheckHeader extends LitElement {
  static styles = [StdcheckHeaderStyle];

  render() {
    return html`
      <h2>STDCheck Header</h2>
    `;
  }
}
