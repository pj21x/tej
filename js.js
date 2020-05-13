function change1() {
	document.getElementById('a1').innerHTML="02";
	document.getElementById('a2').innerHTML="Click Once Again";
	document.getElementById('b1').style.display="none";
	document.getElementById('b2').style.display="block";
	document.getElementById('i1').style.display="block";

	/*document.getElementById('i2').style.display="block";
	document.getElementById('i3').style.display="block";
	document.getElementById('i4').style.display="block";
	document.getElementById('i5').style.display="block";
	document.getElementById('i6').style.display="block";
	document.getElementById('i7').style.display="block";
	document.getElementById('i8').style.display="block";
	document.getElementById('i9').style.display="block";
	document.getElementById('i10').style.display="block";
	document.getElementById('i11').style.display="block";
	document.getElementById('i12').style.display="block";
	document.getElementById('i13').style.display="block";
	document.getElementById('i14').style.display="block";
	document.getElementById('i15').style.display="block";
	document.getElementById('i16').style.display="block";
	document.getElementById('i17').style.display="block";
	document.getElementById('i18').style.display="block";
	document.getElementById('i19').style.display="block";
	document.getElementById('i20').style.display="block";
	document.getElementById('i21').style.display="block";
	document.getElementById('i22').style.display="block";
	document.getElementById('i23').style.display="block";
	document.getElementById('i24').style.display="block";
	document.getElementById('i25').style.display="block";
	document.getElementById('i26').style.display="block";
	document.getElementById('i27').style.display="block";
	document.getElementById('i28').style.display="block";
	document.getElementById('i29').style.display="block";
	document.getElementById('i30').style.display="block";
	document.getElementById('i31').style.display="block";
	document.getElementById('i32').style.display="block";
	document.getElementById('i33').style.display="block";
	document.getElementById('i34').style.display="block";
	document.getElementById('i35').style.display="block";
	document.getElementById('i36').style.display="block";
	document.getElementById('i37').style.display="block";
	document.getElementById('i38').style.display="block";
	document.getElementById('i39').style.display="block";
	document.getElementById('i40').style.display="block";
	document.getElementById('i41').style.display="block";
	document.getElementById('i42').style.display="block";
	document.getElementById('i43').style.display="block";
	document.getElementById('i44').style.display="block";
	document.getElementById('i45').style.display="block";
	document.getElementById('i46').style.display="block";
	document.getElementById('i47').style.display="block";
	document.getElementById('i48').style.display="block";
	document.getElementById('i49').style.display="block";
	document.getElementById('i50').style.display="block";
	document.getElementById('i51').style.display="block";
	document.getElementById('i52').style.display="block";
	document.getElementById('i53').style.display="block";
	document.getElementById('i54').style.display="block";
	document.getElementById('i55').style.display="block";*/
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
	x.volume=0.04;
	var v=document.getElementById('vdo');
	v.onload = window.setTimeout(vdo,1000);
	document.getElementById('i7').style.display="block";
}
function vdo() {
	window.setTimeout(pic,0);
	var v=document.getElementById('vdo');
	v.play();
	v.volume=1;
	var v1=document.getElementById('vdo1');
	v1.onload = window.setTimeout(vdo1,44000);
}
function pic() {
	document.getElementById('i8').style.display="block";
	window.setTimeout(pic9,5000);
	function pic9() {
		document.getElementById('i9').style.display="block";
		window.setTimeout(pic10,5000);
		function pic10() {
			document.getElementById('i10').style.display="block";
			window.setTimeout(pic11,5000);
			function pic11() {
				document.getElementById('i11').style.display="block";
				window.setTimeout(pic12,5000);
				function pic12() {
					document.getElementById('i12').style.display="block";
					window.setTimeout(pic13,5000);
					function pic13() {
						document.getElementById('i13').style.display="block";
						window.setTimeout(pic14,5000);
						function pic14() {
							document.getElementById('i14').style.display="block";
							window.setTimeout(pic15,5000);
							function pic15() {
								document.getElementById('i15').style.display="block";
								window.setTimeout(pic16,5000);
								function pic16() {
									document.getElementById('i16').style.display="block";
									window.setTimeout(pic17,5000);
									function pic17() {
										document.getElementById('i17').style.display="block";
										window.setTimeout(pic18,5000);
										function pic18() {
											document.getElementById('i18').style.display="block";
											window.setTimeout(pic19,5000);
											function pic19() {
												document.getElementById('i19').style.display="block";
												window.setTimeout(pic20,5000);
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
function pic20() {
	document.getElementById('i20').style.display="block";
	window.setTimeout(pic21,5000);
	function pic21() {
		document.getElementById('i21').style.display="block";
		window.setTimeout(pic22,5000);
		function pic22() {
			document.getElementById('i22').style.display="block";
			window.setTimeout(pic23,5000);
			function pic23() {
				document.getElementById('i23').style.display="block";
				window.setTimeout(pic24,5000);
				function pic24() {
					document.getElementById('i24').style.display="block";
					window.setTimeout(pic25,5000);
					function pic25() {
						document.getElementById('i25').style.display="block";
						window.setTimeout(pic26,5000);
						function pic26() {
							document.getElementById('i26').style.display="block";
							window.setTimeout(pic27,5000);
							function pic27() {
								document.getElementById('i27').style.display="block";
								window.setTimeout(pic28,5000);
								function pic28() {
									document.getElementById('i28').style.display="block";
									window.setTimeout(pic29,5000);
									function pic29() {
										document.getElementById('i29').style.display="block";
										window.setTimeout(pic30,5000);
										function pic30() {
											document.getElementById('i30').style.display="block";
											window.setTimeout(pic31,5000);
											function pic31() {
												document.getElementById('i31').style.display="block";
												window.setTimeout(pic32,5000);
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
function pic32() {
	document.getElementById('i32').style.display="block";
	window.setTimeout(pic33,5000);
	function pic33() {
		document.getElementById('i33').style.display="block";
		window.setTimeout(pic34,5000);
		function pic34() {
			document.getElementById('i34').style.display="block";
			window.setTimeout(pic35,5000);
			function pic35() {
				document.getElementById('i35').style.display="block";
				window.setTimeout(pic36,5000);
				function pic36() {
					document.getElementById('i36').style.display="block";
					window.setTimeout(pic37,5000);
					function pic37() {
						document.getElementById('i37').style.display="block";
						window.setTimeout(pic38,5000);
						function pic38() {
							document.getElementById('i38').style.display="block";
							window.setTimeout(pic39,5000);
							function pic39() {
								document.getElementById('i39').style.display="block";
								window.setTimeout(pic40,5000);
								function pic40() {
									document.getElementById('i40').style.display="block";
									window.setTimeout(pic41,5000);
									function pic41() {
										document.getElementById('i41').style.display="block";
										window.setTimeout(pic42,5000);
										function pic42() {
											document.getElementById('i42').style.display="block";
											window.setTimeout(pic43,5000);
											function pic43() {
												document.getElementById('i43').style.display="block";
												window.setTimeout(pic44,5000);
												function pic44() {
													document.getElementById('i44').style.display="block";
													window.setTimeout(pic45,5000);
													function pic45() {
														document.getElementById('i45').style.display="block";
														window.setTimeout(pic46,5000);
														function pic46() {
															document.getElementById('i46').style.display="block";
															window.setTimeout(pic47,5000);
															function pic47() {
																document.getElementById('i47').style.display="block";
																window.setTimeout(pic48,5000);
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
function pic48() {
	document.getElementById('i48').style.display="block";
	window.setTimeout(pic49,5000);
	function pic49() {
		document.getElementById('i49').style.display="block";
		window.setTimeout(pic50,5000);
		function pic50() {
			document.getElementById('i50').style.display="block";
			window.setTimeout(pic51,5000);
			function pic51() {
				document.getElementById('i51').style.display="block";
				window.setTimeout(pic52,5000);
				function pic52() {
					document.getElementById('i52').style.display="block";
					window.setTimeout(pic53,5000);
					function pic53() {
						document.getElementById('i53').style.display="block";
						window.setTimeout(pic54,5000);
						function pic54() {
							document.getElementById('i54').style.display="block";
							window.setTimeout(pic55,5000);
							function pic55() {
								document.getElementById('i55').style.display="block";
							}
						}
					}
				}
			}
		}
	}
}
function vdo1() {
	document.getElementById('vdo').style.display="none";
	document.getElementById('vdo1').style.display="block";
	var v1=document.getElementById('vdo1');
	v1.play();
	v1.volume=1;
	var v2=document.getElementById('vdo2');
	v2.onload = window.setTimeout(vdo2,36000);
}
function vdo2() {
	document.getElementById('vdo1').style.display="none";
	document.getElementById('vdo2').style.display="block";
	var v1=document.getElementById('vdo2');
	v1.play();
	v1.volume=1;
	var v2=document.getElementById('vdo3');
	v2.onload = window.setTimeout(vdo3,34000);
}
function vdo3() {
	document.getElementById('vdo2').style.display="none";
	document.getElementById('vdo3').style.display="block";
	var v1=document.getElementById('vdo3');
	v1.play();
	v1.volume=1;
	var v2=document.getElementById('vdo4');
	v2.onload = window.setTimeout(vdo4,10000);
}
function vdo4() {
	document.getElementById('vdo3').style.display="none";
	document.getElementById('vdo4').style.display="block";
	var v1=document.getElementById('vdo4');
	v1.play();
	v1.volume=1;
	var v2=document.getElementById('vdo5');
	v2.onload = window.setTimeout(vdo5,32000);
}
function vdo5() {
	document.getElementById('vdo4').style.display="none";
	document.getElementById('vdo5').style.display="block";
	var v1=document.getElementById('vdo5');
	v1.play();
	v1.volume=1;
	var v2=document.getElementById('vdo6');
	v2.onload = window.setTimeout(vdo6,40000);
}
function vdo6() {
	document.getElementById('vdo5').style.display="none";
	document.getElementById('vdo6').style.display="block";
	var v1=document.getElementById('vdo6');
	v1.play();
	v1.volume=1;
	var v2=document.getElementById('vdo7');
	v2.onload = window.setTimeout(vdo7,20000);
}
function vdo7() {
	var m=document.getElementById('m1');
	m.play();
	m.volume=0.04;
	function m1() {
		var m=document.getElementById('m1');
		m.volume=0.1;
		window.setTimeout(m11,2000);
		function m11() {
			var m=document.getElementById('m1');
			m.volume=0.5;
			window.setTimeout(m111,2000);
			function m111() {
				var m=document.getElementById('m1');
				m.volume=1;
			}
		}
	}
	document.getElementById('vdo6').style.display="none";
	document.getElementById('vdo7').style.display="block";
	var v1=document.getElementById('vdo7');
	v1.play();
	v1.volume=1;
	var v2=document.getElementById('vdo8');
	v2.onload = window.setTimeout(vdo8,34000);
}
function vdo8() {
	document.getElementById('vdo7').style.display="none";
	document.getElementById('vdo8').style.display="block";
	var v1=document.getElementById('vdo8');
	v1.play();
	v1.volume=1;
	var v2=document.getElementById('vdo9');
	v2.onload = window.setTimeout(vdo9,23000);
}
function vdo9() {
	document.getElementById('vdo8').style.display="none";
	document.getElementById('vdo9').style.display="block";
	var v1=document.getElementById('vdo9');
	v1.play();
	v1.volume=1;
	window.setTimeout(m1,35000);
	window.setTimeout(vdo90,35000);
}
function vdo90() {
	document.getElementById('vdo9').style.display="none";
	document.getElementById('i56').style.display="block";
}