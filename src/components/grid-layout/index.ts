export class GridLayout extends HTMLElement {
  protected _columns = "12";
  protected _gutters: string = "1rem";
  protected _margins: string = "2rem";
  public template: HTMLTemplateElement;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.template = document.createElement("template");
    this.render();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) {
      return;
    }
    switch (name) {
      case "columns":
        this.columns = newValue;
        break;
      case "margins":
        this.margins = newValue;
        break;
      case "gutters":
        this.gutters = newValue;
        break;
    }
    this.render();
  }

  get columns() {
    return this._columns;
  }

  set columns(value: string) {
    this._columns = value;
  }

  get gutters() {
    return this._gutters;
  }

  set gutters(value: string) {
    this._gutters = value;
  }

  get margins() {
    return this._margins;
  }

  set margins(value: string) {
    this._margins = value;
  }

  static get observedAttributes() {
    return ["columns", "gutters", "margins"];
  }

  renderHTML() {
    return Array.from({ length: parseInt(this.columns, 10) }, (_, i) => i + 1)
      .map(() => `<div class="grid-column"></div>`)
      .join("");
  }

  renderCSS() {
    return `
      <style>
        :host {
          box-sizing: border-box;
          display: grid;
          grid-template-columns: repeat(${this.columns}, 1fr);
          grid-gap: ${this.gutters};
          position: absolute;
          width: 100%;
          left: 0;
          right: 0;
          padding: 0 ${this.margins};
          height: 100%;
          top: 0;
          bottom: 0;
          z-index: 100000;
          pointer-events: none;
        }

        :host .grid-column {
          background: var(--grid-column-color, rgba(255, 0, 0, 0.1));
        }
      </style>
    `;
  }

  renderTemplate() {
    return this.renderCSS() + this.renderHTML();
  }

  render() {
    if (!this.shadowRoot) {
      return;
    }
    this.shadowRoot.innerHTML = this.renderTemplate();
  }
}

customElements.define("grid-layout", GridLayout);
