import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class LitPoc extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: red;
    }
  `;

  @property({ type: String }) header = 'Hey there';

  @property({ type: Number }) counter = 0;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.header} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment 2</button>
    `;
  }
}
