import {
    PolymerElement, html
} from '@polymer/polymer/polymer-element.js'

class HelloElement extends PolymerElement {

    static get template()
    {
        return html `Always hello to : [[anyname]]`;
    }
    static get properties()
    {
        return {
            anyname: {
                type: String,
                value: "anonymous"
            }
        }
    }
}

customElements.define("hello-element", HelloElement)