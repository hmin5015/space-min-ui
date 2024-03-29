import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

// Registers the element
@customElement('space-button')
export class MyElement extends LitElement {
  // Styles are applied to the shadow root and scoped to this element
  static styles = css`
    span {
      color: green;
    }
  `;

  // Creates a reactive property that triggers rendering
  @property()
  mood = 'great';

  // Render the component's DOM by returning a Lit template
  render() {
    return html`<button><span>${this.mood}</span></button>!`;
  }
}