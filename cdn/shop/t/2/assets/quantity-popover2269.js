/** Shopify CDN: Minification failed

Line 17:4 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 18:17 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 51:19 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 54:8 Transforming const to the configured target environment ("es5") is not supported yet
Line 55:8 Transforming const to the configured target environment ("es5") is not supported yet
Line 61:8 Transforming const to the configured target environment ("es5") is not supported yet
Line 70:18 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 72:8 Transforming const to the configured target environment ("es5") is not supported yet
Line 74:8 Transforming const to the configured target environment ("es5") is not supported yet

**/
if (!customElements.get('quantity-popover')) {
  customElements.define(
    'quantity-popover',
    class QuantityPopover extends HTMLElement {
      constructor() {
        super();
        this.mql = window.matchMedia('(min-width: 990px)');
        this.mqlTablet = window.matchMedia('(min-width: 750px)');
        this.infoButtonDesktop = this.querySelector('.quantity-popover__info-button--icon-only');
        this.infoButtonMobile = this.querySelector('.quantity-popover__info-button--icon-with-label');
        this.popoverInfo = this.querySelector('.quantity-popover__info');
        this.closeButton = this.querySelector('.button-close');
        this.variantInfo = this.querySelector('.quantity-popover-container');

        if (this.closeButton) {
          this.closeButton.addEventListener('click', this.closePopover.bind(this));
        }

        if (this.popoverInfo && this.infoButtonDesktop && this.mql.matches) {
          this.popoverInfo.addEventListener('mouseenter', this.closePopover.bind(this));
        }

        if (this.infoButtonDesktop) {
          this.infoButtonDesktop.addEventListener('click', this.togglePopover.bind(this));
          this.infoButtonDesktop.addEventListener('focusout', this.closePopover.bind(this));
        }

        if (this.infoButtonMobile) {
          this.infoButtonMobile.addEventListener('click', this.togglePopover.bind(this));
          this.infoButtonMobile.addEventListener('focusout', this.closePopover.bind(this));
        }
        if (this.infoButtonDesktop && this.mqlTablet.matches) {
          this.variantInfo.addEventListener('mouseenter', this.togglePopover.bind(this));
          this.variantInfo.addEventListener('mouseleave', this.closePopover.bind(this));
        }
      }

      togglePopover(event) {
        event.preventDefault();

        const button = this.infoButtonDesktop && this.mql.matches ? this.infoButtonDesktop : this.infoButtonMobile;
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        button.setAttribute('aria-expanded', !isExpanded);

        this.popoverInfo.toggleAttribute('hidden');

        const isOpen = button.getAttribute('aria-expanded') === 'true';

        button.classList.toggle('quantity-popover__info-button--open');

        if (isOpen && event.type !== 'mouseenter') {
          button.focus();
        }
      }

      closePopover(event) {
        event.preventDefault();
        const isChild = this.variantInfo.contains(event.relatedTarget);

        const button = this.infoButtonDesktop && this.mql.matches ? this.infoButtonDesktop : this.infoButtonMobile;

        if (!event.relatedTarget || !isChild) {
          button.setAttribute('aria-expanded', 'false');
          button.classList.remove('quantity-popover__info-button--open');
          this.popoverInfo.setAttribute('hidden', '');
        }
      }
    }
  );
}
