const template = document.createElement('div');
template.innerHTML = `
<style>
.texto{
    color:red;
}
    p{
        color:blue;
    }
</style>
<p class="texto">Hola mundo 2 !!!</p>
<p>Texto ejemplo para la clase</p>
`;

class myElement extends HTMLElement {
    constructor() {
        super(); // Para poder tener acceso a los métodos que existen en la clase de HTMLElements
        this.p = document.createElement('p');
    }
    connectedCallback() {
        this.p.textContent = "Hola mundo";
        this.appendChild(this.p);
        this.appendChild(template);
    }
}
//customElements.define('nombre de la etiqueta', mi clase)
customElements.define('my-element', myElement);