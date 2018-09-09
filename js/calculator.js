window.addEventListener('load', loadAction);
var result = [];
function loadAction(){ 	
	
	numberAddEvent("+", "+");
	numberAddEvent("-", "-");
	numberAddEvent("*", "*");
	numberAddEvent("/", "/");
	numberAddEvent("0", 0);
	numberAddEvent("1", 1);
	numberAddEvent("2", 2);
	numberAddEvent("3", 3);
	numberAddEvent("4", 4);
	numberAddEvent("5", 5);
	numberAddEvent("6", 6);
	numberAddEvent("7", 7);
	numberAddEvent("8", 8);
	numberAddEvent("9", 9);
	numberAddEvent("e", "e");
	numberAddEvent("π", Math.PI);
	window.document.getElementById("sin").addEventListener('click', sin);
	window.document.getElementById("=").addEventListener('click', equal);
	window.document.getElementById("nresult").addEventListener('click', getNextResult );
	window.document.getElementById("save").addEventListener('click', saveResult );
}

function getNextResult(){
  document.getElementById("calc").value = JSON.parse(window.localStorage.getItem("result"))[JSON.parse(window.localStorage.getItem("result")).length-1];
}

function saveResult(){
		document.getElementById("calc").value = 
	eval((document.getElementById("calc").value).replace("e", Math.E))
	result.push(parseFloat(document.getElementById("calc").value));
	console.log(result);
window.localStorage.setItem("result", JSON.stringify(result))
}

function sin(){
	var a = [];
	var b = 23;
	console.log(a.length, b.length.value);
	document.getElementById("calc").value = 
	Math.sin(parseFloat(document.getElementById("calc").value.replace("e", Math.E)));
}

function equal(){
	console.log(document.getElementById("calc").value)
	document.getElementById("calc").value = 
	eval((document.getElementById("calc").value).replace("e", Math.E))
}

function numberAddEvent(id, val){
	console.log(id, val)
	window.document.getElementById(id).addEventListener('click', function numberButton(){
		console.log('val is', val)
		document.getElementById("calc").value = (document.getElementById("calc").value=="0"?"":document.getElementById("calc").value) + val.toString();
	});
}
