function show(which){
	if (!document.getElementById) {
		return;
	}
	if (which.style.display=="none") {
		which.style.display="block";
		document.getElementById('onPage').style.display="none";
	} else {
		which.style.display="none";
	}
}