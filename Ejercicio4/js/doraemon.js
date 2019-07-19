/**
 * 
 */

//var doraemon1;
//
//doraemon1 = document.getElementById("Doraemon1");
//
//doraemon1.onclick = function(e){
//	alert("hola");
//	doraemon1.style.left="400px";
//}

var doraemons, i;

doraemons = document.querySelectorAll(".doraemon");

console.log(doraemons);

for (i=o ; i<doraemons.lenght ; i++){
	doraemons[i].onclick = function (e){
//		alert("hola");
//		conosle.log(doraemons);
//		console.log(i);
//		console.log(doraemons[i]);
//		doraemons[i].style.left = "300px";
		var nyNode = e.currentTarget;
		myNode.style.left = "300px";
		console.log(e.screenY);
		console.log(e.clientY);
		console.log(e.offsetY);
	};
}
