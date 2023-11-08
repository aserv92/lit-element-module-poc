import { html, LitElement as LitLitElement } from 'lit';

export abstract class LitElement extends LitLitElement {

  protected abstract HtmlTemplate: (controller: this) => ReturnType<typeof html>;

  render() {
    return this.HtmlTemplate(this);
  }
}
