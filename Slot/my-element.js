class myElement extends HTMLElement {
    constructor() {
        super(); // Para poder tener acceso a los métodos que existen en la clase de HTMLElements
        this.attachShadow({ mode: "open" });
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
        <section>
            <h2><slot></slot></h2>
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