function openNav(){
	document.getElementById("sidenav").style.width = "250px";
	document.getElementById("bsnav").style.transform = "translate(250px)"; //comment  it for sliding top navbar & content
	//document.getElementById("main").style.transform = "translate(250px)"; //comment  it for sliding top navbar & fixed content
	document.getElementById("click-hide").style.display = "none";
	document.getElementById("closes").classList.add ("d-block");
	document.getElementById("bsnav").classList.add ("transit");
	document.body.style.backgroundColor = "rgba(0, 0, 0, .5)";
}

function closeNav(){
	document.getElementById("sidenav").style.width = "0";
	document.getElementById("bsnav").style.transform = "translate(0)"; //comment  it for sliding top navbar & content
	//document.getElementById("main").style.transform = "translate(0)"; //comment  it for sliding top navbar & fixed content
	document.getElementById("click-hide").style.display = "block";
	document.getElementById("closes").classList.remove ("d-block");
	document.body.style.backgroundColor = "white";
}
