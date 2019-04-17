# CXL <3 Aybolit

Check out [Aybolit source](https://github.com/web-padawan/aybolit "Aybolit source")

CXL aybolit is a monorepo package with yarn package management.

### Start
Run `yarn` to install dependencies

Run `yarn build` to build styles

Run `yarn storybook` to launch storybook

### Create a new component

All components are within @conversionxl/cxl-component package. It can be used as a dependency to include components.

Use a blank Lit-Element class to create a component in  `/packages/cxl-components/src/components`

    // Import the LitElement base class and html helper function
    import { LitElement, html } from 'lit-element';
    import '@vaadin/vaadin-button/vaadin-button.js';
    
    import myElementStyles from '../styles/my-element-css.js';
    
    // Extend the LitElement base class
    class MyElement extends LitElement {
      static get properties() {
        return {
          prop1: { type: String }
        };
      }

	  constructor() {
		super();
		this.prop1 = 'Yesss!!';
	  }

	  static get styles() {
		return myElementStyles;
	  }
    
      render() {
        return html`
          <div class="wrap">
            <vaadin-button theme="primary your-custom-overwrite" @click="${this.fireClickEvent}">
              <slot></slot>
            </vaadin-button>
          </div>
        `;
      }
    
      fireClickEvent() {
        alert(this.prop1);
      }
    }
    
    // Register the new element with the browser.
    customElements.define('my-element', MyElement);


Create a new .scss file to `/packages/cxl-components/scss` with the name you defined in your new component `import myElementStyles from '../styles/my-element-css.js';`

Now run `yarn build` to generate *my-element-css.js*

### Adding styles to Vaadin core components

@conversionxl/cxl-theme package holds template files to extend styles of Vaadin components [https://vaadin.com/components](https://vaadin.com/components)

If you are customizing Vaadin button's `<vaadin-button>Button</vaadin-button>` component and need to adjust size, padding, position, colors etc. you would create (if not created already) vaadin-button.js to `/packages/cxl-theme/src/templates/vaadin-button.js` which contains

    import  vaadinButtonStyles  from  '../styles/vaadin-button-css.js';

	const $template = document.createElement('template');
	
	$template.innerHTML = `
	  <dom-module id="cxl-vaadin-button" theme-for="vaadin-button">
	    <template>
	      <style> ${vaadinButtonStyles} </style>
	    </template> 
	  </dom-module>`;
	
	document.head.appendChild($template.content);

and create a scss style file to `/packages/cxl-theme/scss/vaadin-button.scss`.  Follow styling structure and namings according to vaadin-button core styles. [https://github.com/vaadin/vaadin-button/blob/master/theme/lumo/vaadin-button-styles.html](https://github.com/vaadin/vaadin-button/blob/master/theme/lumo/vaadin-button-styles.html). Your new styles will be added after core styles.
