window.onload = () => {
	let input = document.getElementById("input");
	let output = document.getElementById("output");
	let selector = document.getElementById("ruleSelector");

	input.oninput = () => calculate(input.value, output);
	selector.onchange = () => { if (input.value != "") calculate(input.value, output) };
}

function calculate(input, output) {
	let currentRule = document.getElementById("ruleSelector");
	let val = "TBA";
	switch (currentRule.value) {
		case "1":
			val = boogaNumerals(input);
			break;
		case "2":
			val = baseBooga(input);
			break;
		case "3":
			val = ianBS(input);
			break;
	}
	output.innerHTML = val;
}

function normalBase(n, b) {
	let digits = "";
	let isNegative = false;
	if (n < 0) {
		n = Math.abs(n);
		isNegative = true;
	}
	while (n > 0) {
		digits = (n % b) + digits;
		n = Math.floor(n / b);
	}
	if (isNegative) {
		digits = "-" + digits;
	}
	return digits;
}

function boogaNumerals(n) {
	let digits = Array.from(String(n), Number);
	let output = "";
	if (n == 0) {
		return "booga"
	}
	for (let i = 0; i < digits.length; i++) {
		for (let j = 0; j < digits[i]; j++) {
			output += "ooga ";
		}
		if (digits[i] != 0) {
			for (let j = 0; j < digits.length - (i + 1); j++) {
				output += "booga ";
			}
		}
	}
	return output;
}

function baseBooga(n) {
	let number = normalBase(n, 2);
	let digits = Array.from(String(number), Number);
	let output = "";
	digits.forEach(element => {
		if (element == 1) {
			output += "ooga "
		}
		else {
			output += "booga "
		}
	});
	return output;
}

function ianBS(n) {
	return "TBA"
}