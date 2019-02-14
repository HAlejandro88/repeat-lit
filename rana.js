import { html, css, LitElement } from "lit-element";

class Rana extends LitElement {
  static get properties() {
    return {
     line:{type:Array},
     toMove:{type:Number}
    };
  }

  constructor() {
    super();
    this.line = ['frog',null,null,null,null,null,null,null];
    this.toMove = 8;
  }

  static get styles() {
    return css`
     .container{
       width:100%;
       height:100vh;
     }
     .box{
       height:50px;
       width:50px;
       border:1px solid black;
     }
    `;
  }

  render() {
    return html`
      <div class="container">
      hihih
          ${this.line.map(box=>html`<div class="box">${box}</div>`)}
      </div>
    `;
  }
}

window.customElements.define("rana-element", Rana);
