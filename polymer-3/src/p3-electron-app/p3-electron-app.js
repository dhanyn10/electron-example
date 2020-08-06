import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './NextElement/HelloElement'

/**
 * @customElement
 * @polymer
 */
class P3ElectronApp extends PolymerElement {
    static get template() {
        return html `
                        <h3>This is a [[prop1]]</h3>
                        <hello-element>[[anyname]]</hello-element>
                    `;
    }
    static get properties() {
        return {
            prop1: {
                type: String,
                value: 'p3-electron-app'
            }
        }
    }
}

window.customElements.define('p3-electron-app', P3ElectronApp);
