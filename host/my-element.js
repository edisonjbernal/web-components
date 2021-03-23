class myElement extends HTMLElement {
    constructor() {
        super(); // Para poder tener acceso a los métodos que existen en la clase de HTMLElements
        this.attachShadow({ mode: "open" });
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
        <section>
            <h2>
            <slot name="title"></slot>
            </h2>
            <div>
                <p>
                <slot name="parrafo"></slot>
                </p>
            </div>
        </section>
        ${this.getStyles()}
        
        `;
        return template;
    }
    getStyles() {
        return `
            <style>
            :host{
                display:inline-block;
                width: 100%;
                min-width: 300px;
                max-width: 450px;
                font-size:20px;
                background: grey;
            }
            :host(.blue){
                background:blue;
            }
            :host([yellow]){
                background:yellow;
            }
            :host([yellow]) h2{
                color:grey;
            }
            :host([yellow]) p{
                color:red;
            }
            :host-context(article.card){
                disply:block;
                max-width:100%;
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