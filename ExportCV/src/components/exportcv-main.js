import { LitElement, html, css } from "lit-element";

import "./exportcv-content";
import "./exportcv-login";

class ExportCVMain extends LitElement {
  static get properties() {
    return {
      page: { type: String },
      date: { type: String },
    };
  }

  constructor() {
    super();
    this.page = window.location.hash.substring(1);
    window.onhashchange = this._onHashChange.bind(this);
  }

  render() {
    return html` ${this._pageTemplate} `;
  }

  _onHashChange(event) {
    const hash = new URL(event.newURL).hash;
    this.page = hash.substring(1);
  }

  get _pageTemplate() {
    if (this.page === "") {
      return html`<exportcv-login
        @login-pressed=${this._onLoginPressed}
      ></exportcv-login>`;
    }
    if (this.page === "content") {
      return html`<exportcv-content date=${this.date}></exportcv-content>`;
    }
  }

  _onLoginPressed(event) {
    event.preventDefault();
    this.date = JSON.stringify(event.detail);
    window.location.hash = "content";
  }
}

window.customElements.define("exportcv-main", ExportCVMain);
