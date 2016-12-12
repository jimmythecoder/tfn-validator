/// <reference path="./tfn.d.ts" />

namespace app {

	let validator = new tfn.validator();

	export function validate(input: HTMLInputElement) {
		
		let isValid = validator.isValid(parseInt(input.value,10));

		if(isValid) {
			addClass('is-success', input);
			removeClass('is-danger', input);
		} else {
			addClass('is-danger', input);
			removeClass('is-success', input);
		}
	}

	function addClass(className: string, element: HTMLElement) {
		if(!element.classList.contains(className)) {
			element.classList.add(className);
		}
	}

	function removeClass(className: string, element: HTMLElement) {
		if(element.classList.contains(className)) {
			element.classList.remove(className);
		}
	}	
}