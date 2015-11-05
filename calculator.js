var outer=document.createElement("div");
document.body.appendChild(outer);

var header=document.createElement ("h2");
header.innerText = "Calculate all the things!";
outer.appendChild(header);

var calculator=document.createElement("div");
calculator.id = "calculator";
outer.appendChild(calculator);

// var number=document.createElement("div");
// number.innerText = "1"
// calculator.appendChild(number);

// var number=document.createElement("div");
// number.innerText = "2"
// calculator.appendChild(number);

// var number=document.createElement("div");
// number.innerText = "3"
// calculator.appendChild(number);

// var number=document.createElement("div");
// number.innerText = "+"
// calculator.appendChild(number);

// var number=document.createElement("div");
// number.innerText = "4"
// calculator.appendChild(number);

// var number=document.createElement("div");
// number.innerText = "5"
// calculator.appendChild(number);

// var number=document.createElement("div");
// number.innerText = "6"
// calculator.appendChild(number);

// var number=document.createElement("div");
// number.innerText = "-"
// calculator.appendChild(number);

// var number=document.createElement("div");
// number.innerText = "7"
// calculator.appendChild(number);

// var number=document.createElement("div");
// number.innerText = "8"
// calculator.appendChild(number);

// var number=document.createElement("div");
// number.innerText = "9"
// calculator.appendChild(number);

// var number=document.createElement("div");
// number.innerText = "="
// calculator.appendChild(number);

var popcorn=1;

for(i=1;i<=12;i++) {

var number=document.createElement("div");
	if (i===4) {
		number.innerText = "+";
	}
	else if (i===8) {
		number.innerText = "-";
	}
	else if (i===12) {
		number.innerText = "=";
	}
	else {
		number.innerText = popcorn;
		popcorn++
	}
calculator.appendChild(number);
}



var solution_bar=document.createElement("div");
solution_bar.id = "solution_bar";
outer.appendChild(solution_bar);