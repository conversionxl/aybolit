import { defineCE, fixture } from '@open-wc/testing-helpers';

import { SwitchElement } from '../src/components/switch.js';

describe('switch', () => {
  const Switch = defineCE(
    class extends SwitchElement {
      static get styles() {
        return super.styles;
      }
    }
  );

  let element;
  let input;
  let label;

  beforeEach(async () => {
    element = await fixture(`<${Switch}>Switch with <a href="#">link</a></${Switch}>`);
    input = element.focusElement;
    label = element.shadowRoot.querySelector('label');
  });

  it('should propagate disabled attribute to the native checkbox', async () => {
    element.disabled = true;
    await element.updateComplete;
    expect(input.hasAttribute('disabled')).to.be.eql(true);
  });

  it('should toggle on label click', () => {
    label.click();
    expect(element.checked).to.be.true;

    label.click();
    expect(element.checked).to.be.false;
  });

  it('should not toggle on link inside host click', () => {
    const link = element.querySelector('a');
    link.click();
    expect(element.checked).to.be.false;
  });

  it('should not toggle on click when disabled', async () => {
    element.disabled = true;
    await element.updateComplete;
    label.click();
    expect(element.checked).to.be.false;
  });

  it('should dispatch `checked-changed` event when checked changes', async () => {
    const spy = sinon.spy();
    element.addEventListener('checked-changed', spy);
    element.checked = true;
    await element.updateComplete;
    expect(spy).to.be.calledOnce;
  });

  it('should forward change event from the input on the host element', async () => {
    const spy = sinon.spy();
    element.addEventListener('change', spy);
    element.checked = true;
    input.dispatchEvent(new CustomEvent('change', { bubbles: true }));
    await element.updateComplete;
    expect(spy).to.be.calledOnce;
  });

  it('should bind checked to the native checkbox and vice versa', async () => {
    element.checked = true;
    await element.updateComplete;
    expect(input.checked).to.be.eql(true);

    input.checked = false;
    input.dispatchEvent(new CustomEvent('change', { bubbles: true }));
    await element.updateComplete;
    expect(element.checked).to.be.eql(false);
  });

  it('should set aria-checked to "true" when checked', async () => {
    element.checked = true;
    await element.updateComplete;
    expect(element.getAttribute('aria-checked')).to.be.eql('true');
  });

  it('should set aria-checked to "false" when unchecked', async () => {
    element.checked = false;
    await element.updateComplete;
    expect(element.getAttribute('aria-checked')).to.be.eql('false');
  });

  it('should have the `switch` role', () => {
    expect(element.getAttribute('role')).to.be.eql('switch');
  });

  it('should have the `data-action` attribute', () => {
    expect(element.getAttribute('data-action')).to.be.eql('aria-switch');
  });

  it('should set role to `presentation` on the native checkbox', () => {
    expect(input.getAttribute('role')).to.be.eql('presentation');
  });
});
