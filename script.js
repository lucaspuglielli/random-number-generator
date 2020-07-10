function random() {
	let resultado = document.querySelector("#resultado");
	let min = document.querySelector("#min");
	let max = document.querySelector("#max");
	let floormin = Math.floor(Number(min.value));
	let floormax = Math.floor(Number(max.value));
	let numero = Math.round(Math.random() * (floormax - floormin)) + floormin;
	resultado.innerHTML = `${numero}`;
}