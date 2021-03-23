class MyCustomElement extends HTMLElement {
    constructor() {
        super()
        console.log("Constructor: Esto es memoria");
    }

    connectedCallback() {
        console.log("DOM (O acciones): ")
    }
    disconnectedCallback() {
        console.log("Adios del DOM");
    }
}

customElements.define("my-custom-element", MyCustomElement);

document.querySelector("my-custom-element").remove();