function change1() {
	document.getElementById('a1').innerHTML="02";
	document.getElementById('a2').innerHTML="Click Once Again";
	document.getElementById('b1').style.display="none";
	document.getElementById('b2').style.display="block";
	document.getElementById('i1').style.display="block";
}
function change2() {
	document.getElementById('a1').innerHTML="03";
	document.getElementById('a2').innerHTML="Once Again Pagle";
	document.getElementById('b2').style.display="none";
	document.getElementById('b3').style.display="block";
	document.getElementById('i2').style.display="block";
}
function change3() {
	document.getElementById('a2').style.display="none"
	document.getElementById('b3').style.display="none"
	window.setTimeout(countdown,2000);
	document.getElementById('i3').style.display="block";
}
function countdown() {
	var x=document.getElementById('aud');
	x.play();
	document.getElementById('b3').style.display="none";
	document.getElementById('a2').style.display="none";
	window.setTimeout(countdown1, 2000);
	document.getElementById('i4').style.display="block";
}
function countdown1() {
	document.getElementById('a1').innerHTML='02';
	window.setTimeout(countdown2, 2000);
	document.getElementById('i5').style.display="block";
}
function countdown2() {
	document.getElementById('a1').innerHTML='01';
	window.setTimeout(countdown3, 2000);
	document.getElementById('i6').style.display="block";
}
function countdown3() {
	var x=document.getElementById('m');
	document.getElementById('box').style.display="none";
	document.getElementById('vdo').style.display="block";
	x.play();
	x.volume=0.05;
	var v=document.getElementById('vdo');
	v.onload = window.setTimeout(vdo1,1000);
	//window.setTimeout(vdo1,1000);
	document.getElementById('i7').style.display="block";
}
function vdo1() {
	var v=document.getElementById('vdo');
	//v.onload = functiona() {
	//				v.play();
	//				v.volume=1;
	//			}
	v.play();
	v.volume=1;
}