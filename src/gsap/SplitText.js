export default class SplitText {
  constructor(element, options = {}) {
    this.options = options;
    this.element =
      typeof element === "string" ? document.querySelector(element) : element;
    this.original = this.element ? this.element.innerHTML : "";
    this.words = [];
    if (this.element) {
      this.splitWords();
    }
  }

  splitWords() {
    const text = this.element.textContent || "";
    const words = text.trim().split(/\s+/);
    this.element.textContent = "";
    words.forEach((word, index) => {
      const span = document.createElement("span");
      span.className = "word";
      span.textContent = word;
      this.element.appendChild(span);
      if (index < words.length - 1) {
        this.element.appendChild(document.createTextNode(" "));
      }
    });
    this.words = Array.from(this.element.querySelectorAll(".word"));
  }

  revert() {
    if (this.element) {
      this.element.innerHTML = this.original;
    }
  }
}
