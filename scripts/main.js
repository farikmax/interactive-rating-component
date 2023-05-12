'use strict';

const preview = document.querySelector('.preview');
const state = document.querySelector('.state');
const radios = document.querySelectorAll('input[type=radio]');
const selected = document.querySelector('.state__selected');
let form = document.querySelector('.preview__form');
let selectedValue = 0;

function getSelectedRadioValue() {
	for (let i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			selectedValue = +radios[i].value;
		}
	}
}

form.addEventListener('submit', (event) => {
	event.preventDefault();

	preview.classList.remove('active');
	state.classList.add('active');

	getSelectedRadioValue();

	selected.innerHTML = `You selected ${selectedValue} out of 5`;
});
