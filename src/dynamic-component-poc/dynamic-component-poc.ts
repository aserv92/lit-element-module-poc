import { css, html, LitElement } from 'lit';
import { property } from "lit/decorators.js";

export class DynamicComponentPoc extends LitElement {
  static styles = css`
    :host {
      background-color: blue;
      display: block;
    }
  `;

  @property() title = 'No title defined';

  render() {
    return html`
      <h2>${this.title}</h2>
    `;
  }
}
