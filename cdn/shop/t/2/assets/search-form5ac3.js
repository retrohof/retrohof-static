/** Shopify CDN: Minification failed

Line 12:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 13:13 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 29:19 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 30:4 Transforming const to the configured target environment ("es5") is not supported yet
Line 38:10 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 42:17 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 46:13 Transforming object literal extensions to the configured target environment ("es5") is not supported yet

**/
class SearchForm extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector('input[type="search"]');
    this.resetButton = this.querySelector('button[type="reset"]');

    if (this.input) {
      this.input.form.addEventListener('reset', this.onFormReset.bind(this));
      this.input.addEventListener(
        'input',
        debounce((event) => {
          this.onChange(event);
        }, 300).bind(this)
      );
    }
  }

  toggleResetButton() {
    const resetIsHidden = this.resetButton.classList.contains('hidden');
    if (this.input.value.length > 0 && resetIsHidden) {
      this.resetButton.classList.remove('hidden');
    } else if (this.input.value.length === 0 && !resetIsHidden) {
      this.resetButton.classList.add('hidden');
    }
  }

  onChange() {
    this.toggleResetButton();
  }

  shouldResetForm() {
    return !document.querySelector('[aria-selected="true"] a');
  }

  onFormReset(event) {
    // Prevent default so the form reset doesn't set the value gotten from the url on page load
    event.preventDefault();
    // Don't reset if the user has selected an element on the predictive search dropdown
    if (this.shouldResetForm()) {
      this.input.value = '';
      this.input.focus();
      this.toggleResetButton();
    }
  }
}

customElements.define('search-form', SearchForm);
