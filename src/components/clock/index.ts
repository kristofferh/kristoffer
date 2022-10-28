export class Clock extends HTMLElement {
  static get observedAttributes() {
    return ["date"];
  }

  private formatter: Intl.DateTimeFormat;
  public cols: HTMLDivElement[];
  private chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":"];
  private height = 22;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.formatter = new Intl.DateTimeFormat("en-US", {
      timeStyle: "medium",
      hourCycle: "h24",
    });
    this.cols = [];
    this.render();
  }

  attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
    if (name === "date") {
      const value = this.formatter.format(parseInt(newValue, 10));

      while (this.cols.length < value.length) {
        this.renderColumn();
      }

      for (let x = value.length; x < this.cols.length; x++) {
        this.cols[x].style.display = "none";
      }

      for (let x = 0; x < value.length; x++) {
        const index = this.chars.indexOf(value[x]);
        this.cols[x].style.display = "block";
        this.cols[x].style.transform = `translate(0, -${
          index * this.height
        }px)`;
      }
    }
  }

  renderColumn() {
    if (!this.shadowRoot) {
      return;
    }
    const x = this.cols.length;

    this.cols[x] = document.createElement("div");
    this.cols[x].setAttribute("class", "clock-column");
    for (let char of this.chars) {
      const div = document.createElement("div");
      div.innerText = char;
      div.setAttribute("class", "clock-character");
      this.cols[x].append(div);
    }

    this.shadowRoot.append(this.cols[x]);
  }

  renderCSS() {
    return `
        <style>
          :host {
            height: ${this.height}px;
            display: flex;
            overflow: hidden;
            font-family: 'Inconsolata', monospace;
          }
  
          :host .clock-column {
            transform: translate(0, 0);
            transition: transform 400ms ease-in-out;
          }

          :host .clock-character {
            letter-spacing: 0.08em;
            text-align: center;
            font-size: 16px;
            height: ${this.height}px;
            line-height: ${this.height}px;
            font-stretch: expanded;
            font-optical-sizing: auto;
          }
        </style>
      `;
  }

  render() {
    if (!this.shadowRoot) {
      return;
    }
    this.shadowRoot.innerHTML = this.renderCSS();
    for (let x = 0; x < 7; x++) {
      this.renderColumn();
    }
  }
}

customElements.define("display-clock", Clock);
