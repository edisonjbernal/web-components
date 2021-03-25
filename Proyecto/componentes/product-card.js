class productCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <main>
        <section>
            <img src="" alt="" />
        </section>
        <section>
            <div>
                <h2>Hola Mundo</h2>
                <p>Texto de descripción</p>
                <h3> otro</h3>
                <button></button>
            </div>
        </section>
    </main>
        `;
        return template;
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}

customElements.define("product-card", productCard);