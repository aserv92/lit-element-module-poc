import { LitElement } from "../Lit/lit-element";
import StdcheckFooterStyle from './stdcheck-footer.scss';
import StdcheckFooterHtml from './stdcheck-footer.html';
import { query } from 'lit/decorators.js';

export class StdcheckFooter extends LitElement {
  @query('div#dropdown') dropdown: HTMLDivElement;

  static styles = [StdcheckFooterStyle];

  protected HtmlTemplate = StdcheckFooterHtml;

  handleMouseover() {
    this.dropdown.classList.add('is-active');
  }

  handleMouseout() {
    this.dropdown.classList.remove('is-active');
  }
}
