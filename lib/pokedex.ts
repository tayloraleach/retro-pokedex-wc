import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("retro-pokedex")
export class Pokedex extends LitElement {
  render() {
    return html`
      <div>
        <div>pokedex</div>
      </div>
    `;
  }

  static styles = css`
    :host {
      color: blue;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "retro-pokedex": Pokedex;
  }
}
