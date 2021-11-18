'use strict';

const img = document.querySelector('img');
const file = document.querySelector('#file');
const save = document.querySelector('#save');
const upload = document.querySelector('.btn2');


upload.addEventListener('click', () => {
	console.log(file.value);
	if(file.value)
		img.src=file.value
	else
		alert('Please enter a valid path');
	file.value = '';
});

save.addEventListener('click', () => save.href = img.src);

setInterval(() => {
const brt = document.querySelector('#brt').value;
const blr = document.querySelector('#blr').value;
const con = document.querySelector('#con').value;
const sat = document.querySelector('#sat').value;
const sep = document.querySelector('#sep').value;
const shd = document.querySelector('#shd').value;
const hue = document.querySelector('#hue').value;
const inv = document.querySelector('#inv').value;
const opc = document.querySelector('#opc').value;
// const rot = document.querySelector('#rot').value;

//adding style
img.style.filter = `
	brightness(${brt}%)
	blur(${blr}px)
	contrast(${con}%)
	saturate(${sat}%)
	sepia(${sep}%)
	opacity(${opc}%)
	hue-rotate(${hue}deg)
	invert(${inv}%)
	drop-shadow(${shd}px ${shd}px ${shd}px black)
`
})
