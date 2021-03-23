class myElement extends HTMLElement {
    constructor() {
        super(); // Para poder tener acceso a los métodos que existen en la clase de HTMLElements
        this.attachShadow({ mode: "open" });

    }
    static get observedAttributes() {
        return ["title", "parrafo", "img"];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        if (attr === "title") {
            this.title = newVal;
        }
        if (attr === "parrafo") {
            this.parrafo = newVal;
        }
        if (attr === "img") {
            this.img = newVal;
        }

    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
        <section>
            <h2>${this.title}</h2>
            <div>
                <p>${this.parrafo}</p>
                <img src="${this.img}" />
            </div>
        </section>
        ${this.getStyles()}
        
        `;
        return template;
    }
    getStyles() {
        return `
            <style>
            h2{
                color:red
            }

            </style>
        `;
    }
    render() {
        //cloneNode(true) Clona Todos los elementos (true), Solo clona la etiqueta padre (false) 
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}
//customElements.define('nombre de la etiqueta', mi clase)
customElements.define('my-element', myElement);