/** Shopify CDN: Minification failed

Line 15:4 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 16:17 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 18:8 Transforming const to the configured target environment ("es5") is not supported yet
Line 21:10 Transforming const to the configured target environment ("es5") is not supported yet
Line 27:20 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 28:8 Transforming const to the configured target environment ("es5") is not supported yet
Line 29:8 Transforming const to the configured target environment ("es5") is not supported yet

**/
if (!customElements.get('show-more-button')) {
  customElements.define(
    'show-more-button',
    class ShowMoreButton extends HTMLElement {
      constructor() {
        super();
        const button = this.querySelector('button');
        button.addEventListener('click', (event) => {
          this.expandShowMore(event);
          const nextElementToFocus = event.target.closest('.parent-display').querySelector('.show-more-item');
          if (nextElementToFocus && !nextElementToFocus.classList.contains('hidden') && nextElementToFocus.querySelector('input')) {
            nextElementToFocus.querySelector('input').focus();
          }
        });
      }
      expandShowMore(event) {
        const parentDisplay = event.target.closest('[id^="Show-More-"]').closest('.parent-display');
        const parentWrap = parentDisplay.querySelector('.parent-wrap');
        this.querySelectorAll('.label-text').forEach((element) => element.classList.toggle('hidden'));
        parentDisplay.querySelectorAll('.show-more-item').forEach((item) => item.classList.toggle('hidden'));
        if (!this.querySelector('.label-show-less')) {
          this.classList.add('hidden');
        }
      }
    }
  );
}
