import { html, LitElement } from 'lit';
import StdcheckFooterStyle from './stdcheck-footer.scss';
import { query } from 'lit/decorators.js';

export class StdcheckFooter extends LitElement {
  @query('div#dropdown') dropdown: HTMLDivElement;

  static styles = [StdcheckFooterStyle];

  handleMouseover() {
    this.dropdown.classList.add('is-active');
  }

  handleMouseout() {
    this.dropdown.classList.remove('is-active');
  }

  render() {
    return html`
      <h2>STDCheck Footer</h2>
     <div
       id="dropdown"
       @mouseover="${this.handleMouseover}"
       @mouseout="${this.handleMouseout}"
       class="dropdown"
     >
      <div id="dropdown" class="dropdown">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <span>Dropdown button</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a href="#" class="dropdown-item">
              Dropdown item
            </a>
            <a class="dropdown-item">
              Other dropdown item
            </a>
            <a href="#" class="dropdown-item is-active">
              Active dropdown item
            </a>
            <a href="#" class="dropdown-item">
              Other dropdown item
            </a>
            <hr class="dropdown-divider">
            <a href="#" class="dropdown-item">
              With a divider
            </a>
          </div>
        </div>
      </div>
    `;
  }
}
