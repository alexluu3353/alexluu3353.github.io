var memory = "0";		// initialize memory variable
var current = "0";		// and value of display
var operation = 0;		// Record code for operation
var MAXLENGTH = 15;		// Maximum number of digits before decimal

/* ADD A DIGIT TO DISPLAY */
function calAddDigit(dig) {
	if(current.length > MAXLENGTH) {
		current = "ERROR";
	}
	else {
		if(	(Number(current) == 0) && (current.indexOf(".") == -1)) {
			current = dig;
		}
		else {
			current += dig;
		}
	}
	document.getElementById('screen').value = current;
}

/* PUT IN "." */
function calDot() {
	if(current.length == 0) {
		current = "0.";
	}
	else {
		if(current.indexOf(".") == -1) {
			current += ".";
		}
	}
	document.getElementById('screen').value = current;
}

/* CLEAR ALL ENTRIES */
function calAllClear() {
	current = "0";
	memory = "0";
	operation = 0;
	document.getElementById('screen').value = current;
}

/* OPERATION */
function calOperate(op) {
	if(op.indexOf("*") > -1) operation = 1;
	if(op.indexOf("/") > -1) operation = 2;
	if(op.indexOf("+") > -1) operation = 3;
	if(op.indexOf("-") > -1) operation = 4;
	memory = current;
	current = "";
	document.getElementById('screen').value = current;
}

/* PERFORM CALCULATION */
function calCaculate() {
	if(operation == 1) current = Number(memory) * Number(current);
	if(operation == 2) current = Number(memory) / Number(current);
	if(operation == 3) current = Number(memory) + Number(current);
	if(operation == 4) current = Number(memory) - Number(current);
	operation = 0;
	memory = 0;
	document.getElementById('screen').value = current;
}

function test() {
	document.getElementById('screen').value = "Open Coming Soon";
}